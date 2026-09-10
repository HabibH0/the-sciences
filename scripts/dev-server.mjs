// Zero-dependency dev server for the web build, used while redesigning.
//
// Serves the repo root directly (NOT web/ -- that's generated output; see
// build-web.js) so an edit to styles.css or js/ is live on the next repaint
// with no build step in between. Binds every interface, so the same URL works
// from a phone on the same Wi-Fi as from the desktop browser.
//
//   npm run dev:web            -> port 5173
//   npm run dev:web -- 8080    -> port 8080
//
// Live reload checks a small version endpoint once a second. Persistent SSE
// streams exhaust HTTP/1.1 connections when desktop and iframe previews are
// open together, leaving new lessons stuck at startup. A CSS
// edit swaps the stylesheet in place, so the page stays exactly where it was
// -- same screen, same scroll position, same open drill. Anything else is a
// full reload.
import fs from 'fs';
import http from 'http';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { gradeResponse, readBoundedJson } from '../server/grading.js';

const projectRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const built = process.argv.includes('--built');
const root = built ? path.join(projectRoot, 'web') : projectRoot;
const port = Number(process.argv[2]) || 5173;
const reloadVersion = { instance: `${Date.now()}-${process.pid}`, revision: 0, lastReload: 0 };

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.pdf': 'application/pdf',
};

// The page-side half of live reload. Kept inline rather than served as its own
// file so there is nothing extra to clean up when the redesign is done.
const CLIENT = `
<script>
(() => {
  let current = __DEV_SNAPSHOT__;
  let timer, request, paused = false, running = false;
  async function poll() {
    if (paused || running) return;
    running = true;
    const controller = new AbortController();
    request = controller;
    const timeout = setTimeout(() => controller.abort(), 3000);
    try {
      const response = await fetch('/__dev/version', { cache: 'no-store', signal: controller.signal });
      if (!response.ok) return;
      const next = await response.json();
      if (next.instance !== current.instance || next.lastReload > current.revision) {
        location.reload();
        return;
      }
      if (next.revision !== current.revision) {
        document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
          const url = new URL(link.href);
          url.searchParams.set('hot', String(next.revision));
          link.href = url.href;
        });
      }
      current = next;
    } catch { /* Retry while the local server is restarting. */ }
    finally {
      clearTimeout(timeout);
      running = false;
      if (!paused) timer = setTimeout(poll, 1000);
    }
  }
  // Free connections during navigation, including iframe and history changes.
  addEventListener('pagehide', () => { paused = true; clearTimeout(timer); request?.abort(); });
  addEventListener('pageshow', event => { if (event.persisted) { paused = false; poll(); } });
  if (document.readyState === 'complete') poll();
  else addEventListener('load', poll, { once: true });
})();
</script>
`;

// The Electron shell's fake title bar has no meaning in a browser -- build-web.js
// strips it from the real build, so hide it here too rather than redesigning
// around a bar that will not exist.
const HIDE_ELECTRON_CHROME = `
<style>#window-drag-region, #window-controls { display: none !important; }</style>
`;

let pending = null;
let stylesOnly = true;

function broadcast() {
  pending = null;
  const event = stylesOnly ? 'css' : 'reload';
  stylesOnly = true;
  reloadVersion.revision++;
  if (event === 'reload') reloadVersion.lastReload = reloadVersion.revision;
  const label = event === 'css' ? 'styles swapped' : 'page reloaded';
  console.log(`  ${label} -> revision ${reloadVersion.revision}`);
}

function watch(target) {
  const full = path.join(root, target);
  if (!fs.existsSync(full)) return;
  const recursive = fs.statSync(full).isDirectory();
  try {
    fs.watch(full, { recursive }, (eventType, filename) => {
      const changed = filename || target;
      if (!/\.(css|html|js|mjs|json)$/i.test(changed)) return;
      if (!changed.endsWith('.css')) stylesOnly = false;
      // One save fires several events (write, rename, attribute touch), so
      // debounce them into a single push.
      clearTimeout(pending);
      pending = setTimeout(broadcast, 120);
    });
  } catch (e) {
    console.log(`  could not watch ${target}: ${e.message}`);
  }
}

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Cache-Control': 'no-store', ...headers });
  res.end(body);
}

const server = http.createServer(async (req, res) => {
  // A malformed request target (a bare "//", say) must not take the server
  // down with it -- new URL() throws on those rather than returning null.
  let url;
  try {
    url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  } catch (e) {
    return send(res, 400, 'Bad request');
  }

  if (url.pathname === '/__dev/ping') return send(res, 200, 'ok');
  if (url.pathname === '/__dev/version') return send(res, 200, JSON.stringify(reloadVersion), { 'Content-Type': 'application/json' });
  if (url.pathname === '/api/grade' && req.method === 'POST') {
    try {
      return send(res, 200, JSON.stringify(gradeResponse(await readBoundedJson(req))), { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
    } catch (error) {
      return send(res, error.status || 400, JSON.stringify({ error: error.message }), { 'Content-Type': 'application/json' });
    }
  }

  if (url.pathname === '/__dev/reload') {
    // Upgrade tabs that still have the old SSE client after a server restart.
    return send(res, 200, 'event: reload\ndata: {}\n\n', { 'Content-Type': 'text/event-stream' });
  }

  let relative;
  try { relative = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html'; }
  catch { return send(res, 400, 'Bad request'); }
  const filePath = path.join(root, relative);
  // Anything resolving outside the repo is a traversal attempt, not a mistake.
  if (!filePath.startsWith(root + path.sep) || /^(?:server|curriculum|\.git)(?:[\\/]|$)/.test(relative)) return send(res, 403, 'Forbidden');
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    return send(res, 404, `Not found: ${relative}`);
  }

  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || 'application/octet-stream';

  if (ext === '.html') {
    const html = fs.readFileSync(filePath, 'utf8')
      .replace('</body>', `${built ? '' : HIDE_ELECTRON_CHROME + CLIENT.replace('__DEV_SNAPSHOT__', JSON.stringify(reloadVersion))}</body>`);
    return send(res, 200, html, { 'Content-Type': type });
  }

  send(res, 200, fs.readFileSync(filePath), { 'Content-Type': type });
});

server.listen(port, '0.0.0.0', () => {
  const lan = Object.values(os.networkInterfaces())
    .flat()
    .filter((nic) => nic && nic.family === 'IPv4' && !nic.internal)
    .map((nic) => nic.address);

  console.log('');
  console.log('  Mīzān -- web dev server');
  console.log('');
  console.log(`  desktop   http://localhost:${port}`);
  for (const address of lan) console.log(`  phone     http://${address}:${port}`);
  if (!lan.length) console.log('  phone     (no LAN address found)');
  console.log('');
  console.log(built ? '  production files from web/ with the local Logic grader' : '  live reload on: index.html, styles.css, mizan.css, js/, content*/');
  console.log('  Ctrl+C to stop');
  console.log('');

  if (!built) ['index.html', 'styles.css', 'mizan.css', 'js', 'content', 'content-mantiq', 'content-fstu', 'content-fstu-sarf', 'content-sarf', 'content-lit']
    .forEach(watch);
});

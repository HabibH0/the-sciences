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
// Live reload rides on a Server-Sent Events stream that this server injects
// into index.html on the way out (the file on disk is never touched). A CSS
// edit swaps the stylesheet in place, so the page stays exactly where it was
// -- same screen, same scroll position, same open drill. Anything else is a
// full reload.
import fs from 'fs';
import http from 'http';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.argv[2]) || 5173;

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
  const source = new EventSource('/__dev/reload');
  source.addEventListener('css', () => {
    document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
      const url = new URL(link.href);
      url.searchParams.set('hot', String(Date.now()));
      link.href = url.href;
    });
  });
  source.addEventListener('reload', () => location.reload());
  // The stream dies when the server restarts; poll until it answers again,
  // then reload so the page picks up whatever changed while it was down.
  source.addEventListener('error', () => {
    if (source.readyState !== EventSource.CLOSED) return;
    const retry = setInterval(() => {
      fetch('/__dev/ping', { cache: 'no-store' })
        .then(() => { clearInterval(retry); location.reload(); })
        .catch(() => {});
    }, 500);
  });
})();
</script>
`;

// The Electron shell's fake title bar has no meaning in a browser -- build-web.js
// strips it from the real build, so hide it here too rather than redesigning
// around a bar that will not exist.
const HIDE_ELECTRON_CHROME = `
<style>#window-drag-region, #window-controls { display: none !important; }</style>
`;

const clients = new Set();
let pending = null;
let stylesOnly = true;

function broadcast() {
  pending = null;
  const event = stylesOnly ? 'css' : 'reload';
  stylesOnly = true;
  for (const res of clients) res.write(`event: ${event}\ndata: {}\n\n`);
  const label = event === 'css' ? 'styles swapped' : 'page reloaded';
  console.log(`  ${label} -> ${clients.size} client${clients.size === 1 ? '' : 's'}`);
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

const server = http.createServer((req, res) => {
  // A malformed request target (a bare "//", say) must not take the server
  // down with it -- new URL() throws on those rather than returning null.
  let url;
  try {
    url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  } catch (e) {
    return send(res, 400, 'Bad request');
  }

  if (url.pathname === '/__dev/ping') return send(res, 200, 'ok');

  if (url.pathname === '/__dev/reload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-store',
      Connection: 'keep-alive',
    });
    res.write('retry: 500\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
  const filePath = path.join(root, relative);
  // Anything resolving outside the repo is a traversal attempt, not a mistake.
  if (!filePath.startsWith(root)) return send(res, 403, 'Forbidden');
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    return send(res, 404, `Not found: ${relative}`);
  }

  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || 'application/octet-stream';

  if (ext === '.html') {
    const html = fs.readFileSync(filePath, 'utf8')
      .replace('</body>', `${HIDE_ELECTRON_CHROME}${CLIENT}</body>`);
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
  console.log('  The Sciences -- web dev server');
  console.log('');
  console.log(`  desktop   http://localhost:${port}`);
  for (const address of lan) console.log(`  phone     http://${address}:${port}`);
  if (!lan.length) console.log('  phone     (no LAN address found)');
  console.log('');
  console.log('  live reload on: index.html, styles.css, js/, content*/');
  console.log('  Ctrl+C to stop');
  console.log('');

  ['index.html', 'styles.css', 'js', 'content', 'content-fstu', 'content-fstu-sarf', 'content-sarf', 'content-lit']
    .forEach(watch);
});

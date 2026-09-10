// Regression for preview tabs exhausting HTTP/1.1 connections. All edits and
// browser data live in a temporary fixture, never the learner's app or profile.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import net from 'node:net';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { fileURLToPath, pathToFileURL } from 'node:url';

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const root = fileURLToPath(new URL('../', import.meta.url));
const fixture = await fs.mkdtemp(path.join(os.tmpdir(), 'mizan-dev-reload-'));
const reserved = net.createServer();
reserved.listen(0, '127.0.0.1');
await once(reserved, 'listening');
const port = reserved.address().port;
await new Promise(resolve => reserved.close(resolve));
let server, browser;
const stop = async () => {
  if (!server || server.exitCode !== null) return;
  const exited = once(server, 'exit');
  server.kill();
  await exited;
};
const start = async () => {
  server = spawn(process.execPath, ['scripts/dev-server.mjs', String(port)], { cwd: fixture, windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] });
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Fixture server did not start')), 10000);
    const fail = error => { clearTimeout(timer); reject(error); };
    server.once('error', fail);
    server.once('exit', code => fail(new Error(`Fixture server exited: ${code}`)));
    server.stdout.on('data', chunk => { if (chunk.toString().includes('desktop')) { clearTimeout(timer); resolve(); } });
  });
};
try {
  for (const file of ['scripts/dev-server.mjs', 'server/grading.js', 'server/validator.js', 'server/content/mantiq.json']) {
    await fs.mkdir(path.dirname(path.join(fixture, file)), { recursive: true });
    await fs.copyFile(path.join(root, file), path.join(fixture, file));
  }
  await fs.mkdir(path.join(fixture, 'js'));
  await fs.writeFile(path.join(fixture, 'package.json'), '{"type":"module"}');
  await fs.writeFile(path.join(fixture, 'index.html'), '<!doctype html><link rel="stylesheet" href="styles.css"><body><label>Draft<input></label><script type="module" src="js/main.js"></script></body>');
  await fs.writeFile(path.join(fixture, 'preview.html'), '<!doctype html><body><iframe src="index.html"></iframe></body>');
  await fs.writeFile(path.join(fixture, 'styles.css'), 'body { color: rgb(200, 0, 0); }');
  await fs.writeFile(path.join(fixture, 'js/dependency.js'), 'export const label = "ready";');
  await fs.writeFile(path.join(fixture, 'js/main.js'), `import { label } from './dependency.js';
    const input = document.querySelector('input');
    input.value = sessionStorage.getItem('draft') || '';
    input.addEventListener('input', () => sessionStorage.setItem('draft', input.value));
    document.body.dataset.ready = label;
    document.body.dataset.boots = sessionStorage.boots = String(Number(sessionStorage.boots || 0) + 1);
  `);
  await start();
  browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
  const context = await browser.newContext();
  const pages = [];
  for (let i = 0; i < 8; i++) {
    const page = await context.newPage();
    await page.goto(`http://localhost:${port}/preview.html`, { waitUntil: 'commit' });
    await page.frameLocator('iframe').locator('body[data-ready="ready"]').waitFor({ timeout: 7000 });
    pages.push(page);
  }
  const page = pages[0], frame = () => page.frames().find(f => f.url().endsWith('/index.html'));
  await page.frameLocator('iframe').getByLabel('Draft').fill('keep this answer');
  const boots = Number(await frame().locator('body').getAttribute('data-boots'));
  await fs.writeFile(path.join(fixture, 'styles.css'), 'body { color: rgb(0, 0, 200); }');
  await frame().waitForFunction(() => getComputedStyle(document.body).color === 'rgb(0, 0, 200)');
  assert.equal(Number(await frame().locator('body').getAttribute('data-boots')), boots, 'CSS updates must not reload the lesson');
  assert.equal(await frame().getByLabel('Draft').inputValue(), 'keep this answer');
  await fs.writeFile(path.join(fixture, 'js/dependency.js'), 'export const label = "updated";');
  await page.frameLocator('iframe').locator('body[data-ready="updated"]').waitFor();
  assert.equal(await frame().getByLabel('Draft').inputValue(), 'keep this answer');
  const updatedBoots = Number(await frame().locator('body').getAttribute('data-boots'));
  assert(updatedBoots > boots, 'JavaScript edits must reload');
  await stop();
  await start();
  await page.frameLocator('iframe').locator(`body[data-boots="${updatedBoots + 1}"]`).waitFor();
  assert.equal(await frame().getByLabel('Draft').inputValue(), 'keep this answer');
  console.log('Passed: eight simultaneous iframe previews, CSS updates without reload, code reload, restart recovery and draft preservation.');
} finally {
  await browser?.close();
  await stop();
  assert.equal(path.dirname(path.resolve(fixture)), path.resolve(os.tmpdir()));
  assert(path.basename(fixture).startsWith('mizan-dev-reload-'));
  await fs.rm(fixture, { recursive: true, force: true });
}

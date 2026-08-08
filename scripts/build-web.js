import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'web');

await import('./generate-content-meta.mjs');

const entries = [
  'index.html',
  'styles.css',
  'content',
  'content-fstu',
  'content-fstu-sarf',
  'content-sarf',
  'js',
  'vendor',
];

function copyEntry(name) {
  const from = path.join(root, name);
  const to = path.join(outDir, name);
  if (!fs.existsSync(from)) return;
  fs.cpSync(from, to, {
    recursive: true,
    filter: (src) => !src.includes(`${path.sep}node_modules${path.sep}`),
  });
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
entries.forEach(copyEntry);

function stripElectronWindowChrome() {
  const htmlPath = path.join(outDir, 'index.html');
  if (!fs.existsSync(htmlPath)) return;
  const html = fs.readFileSync(htmlPath, 'utf8');
  const stripped = html.replace(
    /  <!-- Replaces the OS title bar[\s\S]*?  <div id="root"><\/div>/,
    '  <div id="root"></div>',
  );
  fs.writeFileSync(htmlPath, stripped);
}

stripElectronWindowChrome();

const assetsDir = path.join(outDir, 'assets');
fs.mkdirSync(assetsDir, { recursive: true });
fs.copyFileSync(path.join(root, 'assets', 'icon.png'), path.join(assetsDir, 'icon.png'));

console.log(`Web build written to ${outDir}`);

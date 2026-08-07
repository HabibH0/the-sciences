import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'web');
const entries = [
  'index.html',
  'styles.css',
  'assets',
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
console.log(`Web build written to ${outDir}`);

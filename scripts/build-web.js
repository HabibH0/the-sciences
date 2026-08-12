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
  'content-lit',
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

function replaceRequired(filePath, pattern, replacement, label) {
  const source = fs.readFileSync(filePath, 'utf8');
  if (!pattern.test(source)) {
    throw new Error(`Could not strip Electron window chrome from ${label}`);
  }
  fs.writeFileSync(filePath, source.replace(pattern, replacement));
}

function stripElectronWindowChrome() {
  replaceRequired(
    path.join(outDir, 'index.html'),
    /  <!-- Replaces the OS title bar[\s\S]*?  <div id="root"><\/div>/,
    '  <div id="root"></div>',
    'web/index.html',
  );

  replaceRequired(
    path.join(outDir, 'styles.css'),
    /\/\* The OS title bar's replacement[\s\S]*?body\.is-maximized #window-maximize \.restore-icon \{\s*display: block;\s*\}\s*/,
    '',
    'web/styles.css',
  );

  replaceRequired(
    path.join(outDir, 'js', 'main.js'),
    /\n  \/\/ --- Window controls \(#window-controls\)[\s\S]*?  closeWindow\(\) \{\s*electronWindow\?\.close\(\);\s*return false;\s*  \},/,
    '',
    'web/js/main.js actions',
  );

  replaceRequired(
    path.join(outDir, 'js', 'main.js'),
    /\n\/\/ --- window controls \(#window-drag-region\/#window-controls\)[\s\S]*?(?=\n\/\/ --- lifecycle)/,
    '\n',
    'web/js/main.js listeners',
  );
}

stripElectronWindowChrome();

const assetsDir = path.join(outDir, 'assets');
fs.mkdirSync(assetsDir, { recursive: true });
fs.copyFileSync(path.join(root, 'assets', 'icon.png'), path.join(assetsDir, 'icon.png'));

console.log(`Web build written to ${outDir}`);

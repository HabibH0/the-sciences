// Electron main process. Kept as CommonJS (.cjs) deliberately -- the rest of
// this app is ES modules (package.json has "type": "module"), but Electron's
// main process is simplest as plain CommonJS.
//
const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const { randomUUID } = require('crypto');
const fs = require('fs');
const path = require('path');

// This is a single-purpose app, not a document editor -- the default
// File/Edit/View/Window menu bar exposes Chromium devtools/reload commands
// that have no use here and just add visual clutter.
Menu?.setApplicationMenu(null);

// BrowserWindow's `icon` option is Windows/Linux-only (it sets the
// window/taskbar icon); on macOS it's ignored entirely -- the dock icon
// comes from the app bundle's icon at packaging time instead. .ico only
// renders correctly on Windows, so Linux needs the .png fallback.
const WINDOW_ICON = path.join(__dirname, 'assets', process.platform === 'win32' ? 'icon.ico' : 'icon.png');
const SAVE_DIR = path.join(app.getPath('appData'), 'The Sciences');
const SAVE_PATH = path.join(SAVE_DIR, 'save-data.json');
const DEVICE_ID_PATH = path.join(SAVE_DIR, 'device-id.txt');
const SYNC_BACKEND_URL = 'https://the-sciences.onrender.com';
const SYNC_PATHS = new Set([
  '/api/auth/register',
  '/api/auth/login',
  '/api/auth/logout',
  '/api/me',
  '/api/progress',
]);
const SYNC_METHODS = new Set(['GET', 'POST', 'PUT']);
let syncCookie = '';

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (e) {
    return {};
  }
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function migrateLegacySave() {
  if (fs.existsSync(SAVE_PATH)) return;
  const legacyPath = path.join(__dirname, 'save-data.json');
  if (!fs.existsSync(legacyPath)) return;
  fs.mkdirSync(SAVE_DIR, { recursive: true });
  fs.copyFileSync(legacyPath, SAVE_PATH);
}

function migrateRenamedSave() {
  if (fs.existsSync(SAVE_PATH) || process.platform !== 'win32') return;
  const oldDir = path.join(process.env.APPDATA || app.getPath('appData'), 'An-Nahw');
  const oldPath = path.join(oldDir, 'save-data.json');
  if (!fs.existsSync(oldPath)) return;
  fs.mkdirSync(SAVE_DIR, { recursive: true });
  fs.copyFileSync(oldPath, SAVE_PATH);
}

function getDeviceId() {
  fs.mkdirSync(SAVE_DIR, { recursive: true });
  try {
    const existing = fs.readFileSync(DEVICE_ID_PATH, 'utf-8').trim();
    if (existing) return existing;
  } catch (e) {}
  const id = typeof randomUUID === 'function'
    ? randomUUID()
    : `device-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  fs.writeFileSync(DEVICE_ID_PATH, id);
  return id;
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 960,
    minHeight: 640,
    backgroundColor: '#f3e9d2',
    title: 'The Sciences — Arabic Grammar',
    icon: WINDOW_ICON,
    show: false,
    // No native title bar -- js/main.js draws its own drag strip (see
    // index.html's #window-titlebar) with custom minimize/maximize/close
    // buttons that stay invisible until hovered, wired up below over IPC
    // through the safe preload bridge below.
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
    },
  });

  // Held offscreen until the page has actually painted its first frame, so
  // the window never shows as a bare background-colored rectangle while
  // index.html/main.js are still loading -- it simply appears already
  // populated.
  win.once('ready-to-show', () => win.show());

  win.webContents.on('console-message', (event, level, message, line, sourceId) => {
    console.log(`[RENDERER LOG L${level}] ${message} (${sourceId}:${line})`);
  });

  win.loadFile('index.html');

  win.webContents.on('before-input-event', (event, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') {
      win.setFullScreen(!win.isFullScreen());
    }
  });

  // Drives the maximize/restore button's icon swap (see index.html's
  // #window-titlebar) -- the renderer has no other way to know the window
  // just got maximized/restored via the OS (edge-drag snap, Win+Up, etc.),
  // not just its own button.
  win.on('maximize', () => win.webContents.send('window:maximized-changed', true));
  win.on('unmaximize', () => win.webContents.send('window:maximized-changed', false));
}

// Registered once at module scope, not inside createWindow -- these target
// whichever window actually sent the message (BrowserWindow.fromWebContents),
// so they stay correct even if createWindow ever runs again (app.on('activate')
// on macOS) rather than accumulating a duplicate listener per window.
ipcMain.on('window:minimize', (event) => {
  BrowserWindow.fromWebContents(event.sender)?.minimize();
});
ipcMain.on('window:toggle-maximize', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (!win) return;
  if (win.isMaximized()) win.unmaximize();
  else win.maximize();
});
ipcMain.on('window:close', (event) => {
  BrowserWindow.fromWebContents(event.sender)?.close();
});
ipcMain.handle('window:is-maximized', (event) => !!BrowserWindow.fromWebContents(event.sender)?.isMaximized());

ipcMain.handle('storage:load-progress', () => {
  migrateRenamedSave();
  migrateLegacySave();
  return readJson(SAVE_PATH);
});
ipcMain.handle('storage:save-progress', (event, data) => {
  writeJson(SAVE_PATH, data || {});
  return data || {};
});
ipcMain.handle('storage:clear-progress', () => {
  if (fs.existsSync(SAVE_PATH)) fs.unlinkSync(SAVE_PATH);
});
ipcMain.handle('storage:export-progress', () => {
  migrateRenamedSave();
  migrateLegacySave();
  return readJson(SAVE_PATH);
});
ipcMain.handle('storage:import-progress', (event, data) => {
  writeJson(SAVE_PATH, data || {});
  return data || {};
});
ipcMain.handle('storage:get-device-id', () => getDeviceId());

ipcMain.handle('sync:request', async (event, request) => {
  const method = String(request?.method || 'GET').toUpperCase();
  const requestPath = String(request?.path || '');
  const requestUrl = requestPath.startsWith('/') ? new URL(requestPath, SYNC_BACKEND_URL) : null;
  if (!requestUrl || !SYNC_PATHS.has(requestUrl.pathname) || !SYNC_METHODS.has(method)) {
    return { ok: false, status: 400, body: { error: 'Unsupported sync request.' } };
  }
  const headers = { ...(request?.headers || {}) };
  if (syncCookie) headers.Cookie = syncCookie;
  const response = await fetch(`${SYNC_BACKEND_URL}${requestPath}`, {
    method,
    headers,
    body: request?.body,
  });
  const setCookie = response.headers.get('set-cookie');
  if (setCookie) syncCookie = setCookie.split(';')[0];
  const text = await response.text();
  let body = null;
  if (text) {
    try {
      body = JSON.parse(text);
    } catch (e) {
      body = { error: text };
    }
  }
  return { ok: response.ok, status: response.status, body };
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

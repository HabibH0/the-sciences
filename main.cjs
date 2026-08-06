// Electron main process. Kept as CommonJS (.cjs) deliberately -- the rest of
// this app is ES modules (package.json has "type": "module"), but Electron's
// main process is simplest as plain CommonJS.
//
// nodeIntegration is enabled deliberately: this is a fully local, trusted,
// single-user app (no remote or untrusted content is ever loaded), and the
// renderer needs direct filesystem access for one thing Chromium's normal
// fetch() can't do from a file:// origin: reading/writing the plain-JSON
// save file living in this same folder (see js/persistence.js).
const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');

// This is a single-purpose app, not a document editor -- the default
// File/Edit/View/Window menu bar exposes Chromium devtools/reload commands
// that have no use here and just add visual clutter.
Menu.setApplicationMenu(null);

// BrowserWindow's `icon` option is Windows/Linux-only (it sets the
// window/taskbar icon); on macOS it's ignored entirely -- the dock icon
// comes from the app bundle's icon at packaging time instead. .ico only
// renders correctly on Windows, so Linux needs the .png fallback.
const WINDOW_ICON = path.join(__dirname, 'assets', process.platform === 'win32' ? 'icon.ico' : 'icon.png');

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
    // since this window has no preload script (nodeIntegration handles
    // everything else the renderer needs directly).
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
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

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

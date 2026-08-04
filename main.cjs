// Electron main process. Kept as CommonJS (.cjs) deliberately -- the rest of
// this app is ES modules (package.json has "type": "module"), but Electron's
// main process is simplest as plain CommonJS.
//
// nodeIntegration is enabled deliberately: this is a fully local, trusted,
// single-user app (no remote or untrusted content is ever loaded), and the
// renderer needs direct filesystem access for one thing Chromium's normal
// fetch() can't do from a file:// origin: reading/writing the plain-JSON
// save file living in this same folder (see js/persistence.js).
const { app, BrowserWindow, Menu } = require('electron');

// This is a single-purpose app, not a document editor -- the default
// File/Edit/View/Window menu bar exposes Chromium devtools/reload commands
// that have no use here and just add visual clutter.
Menu.setApplicationMenu(null);

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 960,
    minHeight: 640,
    backgroundColor: '#f3e9d2',
    title: 'An-Nahw — Arabic Grammar',
    show: false,
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
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

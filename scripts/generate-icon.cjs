// One-off tool: renders assets/icon-source.html at several pixel sizes using
// a hidden Electron window (so the app's own bundled Amiri font renders
// pixel-identically to how it looks in the app itself), then packs the
// resulting PNGs into a multi-resolution assets/icon.ico (Windows) and
// assets/icon.icns (macOS packaging icon). Run with the project's own
// electron binary (it needs app/BrowserWindow, so it must run as Electron,
// not plain Node):
//   node_modules\.bin\electron.cmd scripts\generate-icon.cjs
const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

// Union of everything ICO (up to 256, the largest Windows uses) and ICNS
// (up to 1024, for Retina "About This App"/Finder icons) need.
const SIZES = [16, 24, 32, 48, 64, 128, 256, 512, 1024];
const SOURCE = path.join(__dirname, '..', 'assets', 'icon-source.html');
const OUT_ICO = path.join(__dirname, '..', 'assets', 'icon.ico');
const OUT_PNG = path.join(__dirname, '..', 'assets', 'icon.png');
const OUT_ICNS = path.join(__dirname, '..', 'assets', 'icon.icns');

async function captureAtSize(win, size) {
  win.setContentSize(size, size);
  // setContentSize is async-ish (a resize round trip) -- give the renderer a
  // frame to actually repaint at the new dimensions before capturing.
  await new Promise((resolve) => setTimeout(resolve, 60));
  const image = await win.webContents.capturePage();
  return image.toPNG();
}

// Minimal ICO (ICONDIR) writer -- Vista+ supports PNG-compressed entries
// directly, so no BMP/DIB re-encoding is needed, just the directory header.
// ICO's width/height fields are single bytes (0 meaning 256), so it can't
// hold the 512/1024 entries added for ICNS -- caller filters those out.
function buildIco(pngsBySize) {
  const entries = Object.keys(pngsBySize).map(Number).filter((s) => s <= 256).sort((a, b) => a - b);
  const dirHeader = Buffer.alloc(6);
  dirHeader.writeUInt16LE(0, 0); // reserved
  dirHeader.writeUInt16LE(1, 2); // type: icon
  dirHeader.writeUInt16LE(entries.length, 4);

  let offset = 6 + entries.length * 16;
  const dirEntries = [];
  const imageBuffers = [];
  for (const size of entries) {
    const png = pngsBySize[size];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 means 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(png.length, 8); // image data size
    entry.writeUInt32LE(offset, 12); // image data offset
    dirEntries.push(entry);
    imageBuffers.push(png);
    offset += png.length;
  }
  return Buffer.concat([dirHeader, ...dirEntries, ...imageBuffers]);
}

// Minimal ICNS writer -- macOS has accepted PNG-compressed icon entries
// (the 'ic07'..'ic10' / 'icp4'/'icp5' types below) since Lion, so like
// buildIco above this just wraps the same PNGs in the container format
// rather than re-encoding to Apple's older raw/RLE image formats.
const ICNS_TYPE_FOR_SIZE = { 16: 'icp4', 32: 'icp5', 128: 'ic07', 256: 'ic08', 512: 'ic09', 1024: 'ic10' };
function buildIcns(pngsBySize) {
  const chunks = [];
  for (const [sizeStr, type] of Object.entries(ICNS_TYPE_FOR_SIZE)) {
    const png = pngsBySize[Number(sizeStr)];
    if (!png) continue;
    const entryHeader = Buffer.alloc(8);
    entryHeader.write(type, 0, 'ascii');
    entryHeader.writeUInt32BE(png.length + 8, 4);
    chunks.push(entryHeader, png);
  }
  const body = Buffer.concat(chunks);
  const fileHeader = Buffer.alloc(8);
  fileHeader.write('icns', 0, 'ascii');
  fileHeader.writeUInt32BE(body.length + 8, 4);
  return Buffer.concat([fileHeader, body]);
}

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    width: 256,
    height: 256,
    show: false,
    frame: false,
    useContentSize: true,
  });
  await win.loadFile(SOURCE);
  await win.webContents.executeJavaScript('document.fonts.ready.then(() => true)');

  const pngsBySize = {};
  for (const size of SIZES) {
    pngsBySize[size] = await captureAtSize(win, size);
    console.log(`captured ${size}x${size}`);
  }
  win.destroy();

  fs.writeFileSync(OUT_ICO, buildIco(pngsBySize));
  fs.writeFileSync(OUT_PNG, pngsBySize[256]);
  fs.writeFileSync(OUT_ICNS, buildIcns(pngsBySize));
  console.log(`wrote ${OUT_ICO}`);
  console.log(`wrote ${OUT_PNG}`);
  console.log(`wrote ${OUT_ICNS}`);
  app.quit();
});

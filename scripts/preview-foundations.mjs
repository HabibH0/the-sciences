// Optional visible local preview in a temporary browser profile. It keeps
// experimental answers separate from the learner's regular browser profile.
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const browser = await chromium.launch({ headless: false, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
const context = await browser.newContext({ viewport: null });
await context.addInitScript(() => {
  if (location.origin === 'http://localhost:4173' && !localStorage.getItem('the-sciences-progress')) {
    localStorage.setItem('the-sciences-progress', JSON.stringify({
      progress: { courseId: 'adv-nahw', forceUnlockAll: true, mizanVersion: 1 },
      meta: { version: 1, updatedAt: new Date().toISOString(), deviceId: 'isolated-design-preview' },
    }));
  }
});
const desktop = await context.newPage();
await desktop.goto('http://localhost:4173/#/module/01/l2', { waitUntil: 'domcontentloaded' });
await desktop.locator('.mz-study').waitFor();
const mobile = await context.newPage();
await mobile.goto('http://localhost:4173/scripts/preview-mobile.html?lesson=01/l2', { waitUntil: 'domcontentloaded' });
await mobile.frameLocator('iframe').locator('.mz-study').waitFor();
await desktop.bringToFront();
console.log('Live desktop and mobile previews are open in a separate browser. Original learner progress is untouched.');
await new Promise(resolve => browser.on('disconnected', resolve));

// Freeze real animations at representative times for visual review. One
// disposable browser, sequential pages, no changes to the learner's profile.
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
const out = 'artifacts/study-catalog/sequence-review';
await fs.mkdir(out, { recursive: true });
try {
  for (const [courseId, width, height] of [['adv-nahw', 390, 844], ['adv-sarf', 390, 844], ['mantiq', 390, 844], ['mantiq', 1280, 800]]) {
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'no-preference' });
    await context.addInitScript(courseId => {
      if (location.origin === 'http://localhost:4173') localStorage.setItem('the-sciences-progress', JSON.stringify({ progress: { courseId, mizanVersion: 1, forceUnlockAll: true, theme: 'mizan', accent: 'emerald', arabicFace: 'naskh' }, meta: { version: 1, updatedAt: new Date().toISOString(), deviceId: 'isolated-sequence-review' } }));
    }, courseId);
    const page = await context.newPage();
    await page.route('**/__dev/version', route => route.abort());
    const settle = () => page.evaluate(() => Promise.allSettled(document.getAnimations().filter(a => a.effect?.getTiming().iterations !== Infinity).map(a => a.finished)));
    await page.goto(`http://localhost:4173/#/course/${courseId}`);
    await page.locator('#root .mz-hub').waitFor(); await settle();
    await page.locator('#root [data-action="openModule"]').first().evaluate(el => el.click()); await settle();
    await page.evaluate(() => {
      document.querySelector('#root [data-action="openDashboard"]').click();
      window.reviewAnimations = document.getAnimations().filter(a => a.effect?.getTiming().iterations !== Infinity);
      window.reviewAnimations.forEach(a => a.pause());
    });
    for (const time of [90, 230, 390]) {
      await page.evaluate(time => window.reviewAnimations.forEach(a => { a.currentTime = time; }), time);
      await page.screenshot({ path: `${out}/${courseId}-${width}-${time}.png` });
    }
    await page.evaluate(() => window.reviewAnimations.forEach(a => a.finish())); await settle();
    await page.screenshot({ path: `${out}/${courseId}-${width}-settled.png` });
    await context.close();
    console.log(`Reviewed ${courseId} at ${width} × ${height}`);
  }
} finally { await browser.close(); }

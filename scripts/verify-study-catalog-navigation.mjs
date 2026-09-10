import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { COURSES, ensureCoursesLoaded } from '../content/index.js';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
const courseIds = ['adv-sarf', 'adv-nahw', 'mantiq'];
const origin = 'http://localhost:4173', out = 'artifacts/study-catalog';
await fs.mkdir(out, { recursive: true });
await ensureCoursesLoaded(courseIds);
const results = [], errors = [];
async function newPage(progress = {}) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  page.on('pageerror', e => errors.push(e.message));
  await page.route('**/__dev/version', route => route.abort());
  await page.addInitScript(progress => {
    if (location.origin === 'http://localhost:4173' && !localStorage.getItem('the-sciences-progress')) localStorage.setItem('the-sciences-progress', JSON.stringify({ progress: { mizanVersion: 1, theme: 'mizan', accent: 'emerald', arabicFace: 'naskh', ...progress }, meta: { version: 1, updatedAt: new Date().toISOString(), deviceId: 'isolated-catalog-navigation' } }));
  }, progress);
  return page;
}
try {
  for (const courseId of courseIds) {
    const course = COURSES.find(c => c.id === courseId), first = course.modules[0], later = course.modules[1];
    const page = await newPage({ courseId, forceUnlockAll: true });
    await page.goto(`${origin}/#/course/${courseId}`);
    await page.locator('.mz-hub').waitFor();
    for (const [width, height] of [[320, 568], [390, 844], [1280, 800]]) {
      await page.setViewportSize({ width, height });
      await page.screenshot({ path: `${out}/app-${courseId}-${width}.png` });
      const fits = await page.locator('.mz-hub-resume button').evaluate(el => {
        const r = el.getBoundingClientRect();
        const nav = document.querySelector('.mz-bottom-nav');
        return r.top >= 0 && r.bottom <= (nav?.getBoundingClientRect().top || innerHeight) && document.documentElement.scrollWidth <= innerWidth;
      });
      assert(fits, `${courseId} main action visible at ${width}`);
    }
    await page.setViewportSize({ width: 390, height: 844 });
    // Make valid sessions through real controls, leaving an earlier gap.
    await page.locator('.mz-hub-resume button').click();
    await page.locator('.mz-study').waitFor();
    await page.locator('[data-action="studyNext"]').click();
    await page.goto(`${origin}/#/course/${courseId}`);
    await page.locator('.mz-hub').waitFor();
    const module = page.locator(`[data-course-disclosure="module/${later.id}"]`);
    await module.locator(':scope > summary').click();
    await module.locator('.mz-hub-lesson').first().click();
    await page.locator('.mz-study').waitFor();
    await page.locator('[data-action="studyNext"]').click();
    const position = await page.locator('.mz-study').getAttribute('data-step');
    await page.goto(`${origin}/#/course/${courseId}`);
    await page.locator('.mz-hub').waitFor();
    assert.equal(await page.locator('.mz-hub-resume button').getAttribute('data-module-id'), later.id);
    await page.locator('.mz-hub-resume button').click();
    await page.locator('.mz-study').waitFor();
    assert.equal(await page.locator('.mz-study').getAttribute('data-step'), position);
    await page.goto(`${origin}/#/module/${later.id}`);
    await page.locator('.mz-hub-module-page').waitFor();
    await page.screenshot({ path: `${out}/app-module-${courseId}-390.png` });
    await page.locator('[data-action="openPractice"]').click();
    await page.locator('.mz-module-practice').waitFor();
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    await page.close();

    const completed = Object.fromEntries(course.modules.map(m => [m.id, Object.fromEntries(m.lessons.map(l => [l.id, true]))]));
    const finished = await newPage({ courseId, forceUnlockAll: true, completed });
    await finished.goto(`${origin}/#/course/${courseId}`);
    await finished.locator('.mz-hub').waitFor();
    assert.equal(await finished.locator('.mz-hub-resume button').getAttribute('data-action'), 'openSchedule');
    await finished.locator('.mz-hub-module > summary').first().click();
    assert.match(await finished.locator('.mz-hub-lesson').first().textContent(), /Revisit/);
    await finished.locator('.mz-hub-lesson').first().click();
    await finished.locator('.mz-study').waitFor();
    assert.deepEqual(await finished.evaluate(() => JSON.parse(localStorage.getItem('the-sciences-progress')).progress.completed), completed);
    await finished.close();

    const locked = await newPage({ courseId, forceUnlockAll: false, unlockedCourses: { [courseId]: true } });
    await locked.goto(`${origin}/#/course/${courseId}`);
    await locked.locator('.mz-hub').waitFor();
    assert(await locked.locator('.mz-hub-lesson').nth(1).isDisabled());
    await locked.locator('.mz-hub-module-summary.is-locked').first().click();
    await locked.locator('[data-action="closeUnlockPrompt"]').first().waitFor();
    await locked.keyboard.press('Escape');
    await locked.goto(`${origin}/#/module/${first.id}`);
    await locked.locator('.mz-hub-module-page').waitFor();
    assert(await locked.locator('[data-action="openPractice"]').isDisabled());
    assert(await locked.locator('.mz-hub-lesson').nth(1).isDisabled());
    await locked.close();
    results.push(`${courseId}: real mobile/desktop layout, most recent resume across modules, practice entry, completed revisit, unchanged completion data, prerequisite dialogs and locked lessons`);
    console.log(results.at(-1));
  }
  const intro = await newPage({ forceUnlockAll: true });
  for (const courseId of ['intro-nahw', 'intro-sarf']) {
    await intro.goto(`${origin}/#/course/${courseId}`);
    await intro.locator('.mz-course-dashboard').waitFor();
    assert.equal(await intro.locator('.mz-hub').count(), 0);
  }
  await intro.close();
  results.push('Introductory Nahw and Sarf keep their existing course design');
  assert.deepEqual(errors, []);
} finally {
  await fs.writeFile(`${out}/navigation.json`, JSON.stringify({ results, errors }, null, 2));
  await browser.close();
}

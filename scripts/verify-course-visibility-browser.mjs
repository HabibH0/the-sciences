// Check actual routes and controls using disposable saves, never the learner's.
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import fs from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const base = (process.env.MIZAN_BASE_URL || 'http://localhost:4173/').replace(/\/?$/, '/');
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
const session = id => ({ id: `saved-${id}`, version: 1, kind: 'lesson', lessonId: 'l1', steps: [{ id: 'teach', kind: 'teach' }, { id: 'check', kind: 'check' }], stepIndex: 1, updatedAt: '2026-09-09T12:00:00.000Z' });
const preserved = {
  completed: { 'f-nouns': { l1: '2026-09-09' }, 's-u1': { l1: '2026-09-09' } },
  quizScores: { 'f-nouns': { l1: { correct: 5, total: 6 } }, 's-u1': { l1: { correct: 4, total: 6 } } },
  studySessions: { 'intro-nahw/f-nouns/l1': session('nahw'), 'intro-sarf/s-u1/l1': session('sarf') },
  badges: ['course-intro-nahw', 'course-intro-sarf'],
  scheduleDeadline: { 'intro-nahw': '2026-12-01', 'intro-sarf': '2026-12-02' },
};
const results = [], errors = [];
const deadline = setTimeout(() => browser.close(), 180000);
try {
  for (const [width, height] of [[390, 844], [1280, 800]]) {
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' });
    await context.addInitScript(preserved => {
      if (!localStorage.getItem('the-sciences-progress')) localStorage.setItem('the-sciences-progress', JSON.stringify({ progress: { ...preserved, mizanVersion: 1, courseId: 'intro-nahw', nav: { view: 'lesson', moduleId: 'f-nouns', lessonId: 'l1' }, forceUnlockAll: false, forceUnlockAllExplicit: true, theme: 'mizan' }, meta: { version: 1, updatedAt: '2026-09-09T12:00:00.000Z', deviceId: 'isolated-course-visibility' } }));
    }, preserved);
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    await page.route('**/__dev/version', route => route.abort());
    const root = page.locator('#root');
    async function inspect() {
      const html = await root.innerHTML();
      assert(!/Introductory (?:Nahw|Sarf|Path)|data-course-id="intro-(?:nahw|sarf)"|#\/course\/intro-/.test(html), `Hidden course leaked at ${page.url()}`);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
    }
    await page.goto(base); await root.locator('.mz-catalog').waitFor(); await inspect();
    assert.equal(await root.locator('.mz-course-card').count(), 3);
    assert.equal(await root.locator('.mz-course-open[data-action="chooseCourse"]').count(), 3, 'Visible courses open without hidden prerequisites');
    for (const route of ['#/course/intro-nahw', '#/course/intro-sarf', '#/course/fstu', '#/course/sarf', '#/module/f-nouns/l1', '#/module/s-u1/l1/quiz']) {
      await page.goto(base + route); await page.waitForURL(base + '#/'); await root.locator('.mz-catalog').waitFor(); await inspect();
    }
    for (const route of ['#/schedule', '#/account', '#/account/achievements', '#/account/learning-aids', '#/account/progression', '#/path', '#/path/group-1']) {
      await page.goto(base + route);
      const label = { '#/schedule': 'Review & plan', '#/account': 'Account', '#/account/achievements': 'Achievements', '#/account/learning-aids': 'Learning aids', '#/account/progression': 'Course progression' }[route] || 'My Path';
      await root.locator(`main[aria-label="${label}"]`).waitFor();
      await inspect();
      if (route === '#/schedule') {
        await root.locator('[data-action="toggleCourseMenu"]').click();
        assert.equal(await root.locator('.course-menu-item').count(), 3); await inspect();
      }
    }
    // A history entry created by an older release also obeys visibility.
    await page.goto(base + '#/');
    await page.evaluate(() => {
      history.pushState({ view: 'lesson', courseId: 'intro-sarf', moduleId: 's-u1', lessonId: 'l1' }, '', '#/module/s-u1/l1');
      history.pushState({ view: 'catalog', courseId: 'mantiq' }, '', '#/');
    });
    await page.goBack(); await page.waitForURL(base + '#/'); await root.locator('.mz-catalog').waitFor(); await inspect();
    // Unlock-all must not restore either hidden course.
    await page.goto(base + '#/account/progression');
    await root.locator('[data-action="toggleCourseLocks"]').click();
    const confirm = root.locator('[data-action="confirmForceUnlockAll"]');
    if (await confirm.count()) await confirm.click();
    await page.goto(base + '#/'); await root.locator('.mz-catalog').waitFor();
    assert.equal(await root.locator('.mz-course-card').count(), 3); await inspect();
    for (const courseId of ['adv-nahw', 'adv-sarf', 'mantiq']) {
      await page.goto(base + `#/course/${courseId}`); await root.locator(`.mz-hub[data-course-id="${courseId}"]`).waitFor(); await inspect();
      await root.locator('.mz-hub-resume [data-action="continueLesson"]').click();
      await root.locator('.mz-study').waitFor(); await inspect();
    }
    await page.reload(); await root.locator('.mz-study').waitFor();
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('the-sciences-progress')).progress);
    for (const field of ['completed', 'quizScores', 'scheduleDeadline']) assert.deepEqual(saved[field], preserved[field], `${field} is kept`);
    for (const [key, value] of Object.entries(preserved.studySessions)) assert.deepEqual(saved.studySessions[key], value, 'Hidden study position is kept');
    for (const badge of preserved.badges) assert(saved.badges.includes(badge));
    results.push({ width, height, passed: true }); console.log(JSON.stringify(results.at(-1)));
    await context.close();
  }
  assert.deepEqual(errors, []);
} finally {
  clearTimeout(deadline); await browser.close();
  await fs.mkdir('artifacts/study-catalog', { recursive: true });
  await fs.writeFile('artifacts/study-catalog/course-visibility.json', JSON.stringify({ base, results, errors }, null, 2));
}

// Isolated renderer and real navigation tests. No learner profile is accessed.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
const out = 'artifacts/study-catalog';
await fs.mkdir(out, { recursive: true });
const report = { layouts: 0, flows: [], failures: [], errors: [] };
const origin = 'http://localhost:4173';
const courseIds = ['adv-sarf', 'adv-nahw', 'mantiq'];
try {
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  page.on('pageerror', e => report.errors.push(e.message));
  await page.route('**/__dev/version', route => route.abort());
  await page.goto(`${origin}/scripts/verify-catalog-layout.html`);
  await page.evaluate(async () => {
    const content = await import('/content/index.js');
    const catalog = await import('/js/learning/catalog.js');
    const study = await import('/js/learning/catalog-study.js');
    const { modulePagerHtml } = await import('/js/render.js');
    const faces = { naskh: '"Noto Naskh Arabic", serif', amiri: 'Amiri, serif', traditional: '"Traditional Arabic", serif' };
    window.auditCatalog = async ({ courseId, moduleId, phase = 'new', face = 'naskh', scale = 100, theme = 'mizan', expanded = false }) => {
      await content.setActiveCourse(courseId);
      const course = content.COURSES.find(c => c.id === courseId);
      const state = { courseId, completed: {}, unlockedModules: {}, studySessions: {}, lessonPos: {}, quizScores: {}, mizanCourses: {}, forceUnlockAll: phase !== 'locked' };
      const all = course.modules.flatMap(m => m.lessons.map(l => ({ m, l })));
      if (phase === 'complete') all.forEach(({ m, l }) => { (state.completed[m.id] ??= {})[l.id] = true; });
      if (phase === 'returning') {
        const older = all[1], latest = all[all.length - 2];
        state.studySessions[`${courseId}/${older.m.id}/${older.l.id}`] = { updatedAt: '2026-09-01', stepIndex: 2 };
        state.studySessions[`${courseId}/${latest.m.id}/${latest.l.id}`] = { updatedAt: '2026-09-10', stepIndex: 3 };
        if (study.nextStudyLesson(state, course)?.l.id !== latest.l.id) throw Error('Resume did not choose most recent unfinished session');
        // A newer session from another course must not replace this course's.
        state.studySessions['unrelated/unknown/lesson'] = { updatedAt: '2027-01-01' };
      }
      const before = JSON.stringify(state);
      const mod = course.modules.find(m => m.id === moduleId);
      const html = moduleId ? catalog.moduleLessonsHtml(state, mod, '', modulePagerHtml(state, course.modules, mod)) : catalog.courseOverviewHtml(state);
      if (before !== JSON.stringify(state)) throw Error('Rendering mutated progress');
      document.documentElement.dataset.theme = theme;
      document.documentElement.dataset.arabicFace = face;
      document.documentElement.style.setProperty('--font-ar', faces[face]);
      document.documentElement.style.setProperty('--ui-text-scale', String(scale / 100));
      document.getElementById('audit').innerHTML = html;
      if (expanded) document.querySelectorAll('details').forEach(el => el.open = true);
      await document.fonts.ready;
      return { modules: course.modules.map(m => m.id), expectedLessons: moduleId ? course.modules.find(m => m.id === moduleId).lessons.length : all.length, locked: phase === 'locked' };
    };
  });
  async function measure(config) {
    const meta = await page.evaluate(config => window.auditCatalog(config), config);
    const issues = await page.evaluate(() => {
      const errors = [];
      if (document.documentElement.scrollWidth > innerWidth + 1) errors.push('Horizontal page overflow');
      const hub = document.querySelector('.mz-hub');
      for (const el of hub.querySelectorAll('button, summary, h1, h2, .mz-hub-module-title, .mz-hub-lesson-title, .mz-hub-progress, .mz-hub-statistics, .mz-hub-statistics dt, .mz-hub-statistics dd')) {
        if (!el.checkVisibility()) continue;
        const r = el.getBoundingClientRect();
        if (r.left < -1 || r.right > innerWidth + 1 || el.scrollWidth > el.clientWidth + 2) errors.push(`${el.className || el.tagName}: clipped or too wide`);
        if ((el.matches('button, summary')) && r.height < 40) errors.push(`${el.className}: small touch target ${r.height}`);
      }
      // Check text ranges too: Arabic and large preferences must remain inside
      // their own title columns, not overlap the adjacent status or action.
      for (const el of hub.querySelectorAll('.mz-hub-lesson-title, .mz-hub-module-title')) {
        if (!el.checkVisibility()) continue;
        const bounds = el.getBoundingClientRect(), range = document.createRange();
        range.selectNodeContents(el);
        if ([...range.getClientRects()].some(r => r.left < bounds.left - 2 || r.right > bounds.right + 2)) errors.push(`Title text crossed its column: ${el.textContent}`);
      }
      if (hub.textContent.includes('\u2014')) errors.push('Em dash in displayed course material');
      const resume = hub.querySelector('.mz-hub-resume button');
      if (resume && resume.getBoundingClientRect().bottom > innerHeight && Number(getComputedStyle(document.documentElement).getPropertyValue('--ui-text-scale')) <= 1) errors.push('Main action below first screen');
      return errors;
    });
    if (issues.length) report.failures.push({ ...config, viewport: page.viewportSize(), issues });
    report.layouts++;
    return meta;
  }
  for (const courseId of courseIds) {
    const meta = await page.evaluate(courseId => window.auditCatalog({ courseId }), courseId);
    for (const [width, height] of [[320, 568], [390, 844], [430, 932], [768, 1024], [1280, 800]]) {
      await page.setViewportSize({ width, height });
      for (const face of ['naskh', 'amiri', 'traditional']) {
        for (const phase of ['new', 'returning', 'complete', 'locked']) await measure({ courseId, phase, face });
        await measure({ courseId, face, expanded: true, scale: 130 });
        for (const moduleId of meta.modules) await measure({ courseId, moduleId, face, scale: 130, expanded: true });
      }
      for (const theme of ['mizan', 'lamp']) {
        await measure({ courseId, theme });
        if ([320, 390, 1280].includes(width)) await page.screenshot({ path: `${out}/${courseId}-${width}-${theme}.png` });
      }
    }
    console.log(`Layout checked: ${courseId}, ${meta.modules.length} modules, five viewports and three Arabic fonts.`);
  }
  await page.close();

  for (const courseId of courseIds) {
    const flow = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    flow.on('pageerror', e => report.errors.push(e.message));
    await flow.route('**/__dev/version', route => route.abort());
    await flow.addInitScript(courseId => {
      if (location.origin === 'http://localhost:4173' && !localStorage.getItem('the-sciences-progress')) localStorage.setItem('the-sciences-progress', JSON.stringify({ progress: { courseId, forceUnlockAll: true, mizanVersion: 1 }, meta: { version: 1, updatedAt: new Date().toISOString(), deviceId: 'isolated-catalog-test' } }));
    }, courseId);
    await flow.goto(`${origin}/#/course/${courseId}`);
    await flow.locator('.mz-hub').waitFor();
    const overview = await flow.locator('.mz-hub').getAttribute('data-course-id');
    assert.equal(overview, courseId);
    const target = await flow.locator('.mz-hub-resume button').evaluate(el => ({ moduleId: el.dataset.moduleId, lessonId: el.dataset.lessonId }));
    // Native disclosure is keyboard-operable and does not write learning data.
    const snapshot = await flow.evaluate(() => JSON.parse(localStorage.getItem('the-sciences-progress')).progress.studySessions);
    const second = flow.locator('.mz-hub-module').nth(1);
    await second.locator(':scope > summary').focus();
    await flow.keyboard.press('Enter');
    assert(await second.getAttribute('open') !== null);
    const secondId = (await second.getAttribute('data-course-disclosure')).replace('module/', '');
    assert.deepEqual(await flow.evaluate(() => JSON.parse(localStorage.getItem('the-sciences-progress')).progress.studySessions), snapshot);
    await second.locator('[data-action="openModule"]').click();
    await flow.locator('.mz-hub-module-page').waitFor();
    await flow.locator('[data-action="openDashboard"]').click();
    await flow.locator('.mz-hub').waitFor();
    assert(await flow.locator(`[data-course-disclosure="module/${secondId}"]`).getAttribute('open') !== null);
    await flow.locator('.mz-hub-resume button').click();
    await flow.locator('.mz-study').waitFor();
    await flow.locator('[data-action="studyNext"]').click();
    const position = await flow.locator('.mz-study').getAttribute('data-step');
    const key = `${courseId}/${target.moduleId}/${target.lessonId}`;
    await flow.waitForFunction(([key, step]) => JSON.parse(localStorage.getItem('the-sciences-progress')).progress.studySessions?.[key]?.stepIndex === Number(step), [key, position]);
    await flow.goto(`${origin}/#/course/${courseId}`);
    await flow.locator('.mz-hub-resume button').waitFor();
    assert.match(await flow.locator('.mz-hub-resume button').textContent(), /Continue/);
    await flow.locator('.mz-hub-resume button').click();
    await flow.locator('.mz-study').waitFor();
    assert.equal(await flow.locator('.mz-study').getAttribute('data-step'), position);
    await flow.reload();
    await flow.locator('.mz-study').waitFor();
    assert.equal(await flow.locator('.mz-study').getAttribute('data-step'), position);
    await flow.goto(`${origin}/#/module/${target.moduleId}`);
    await flow.locator('.mz-hub-module-page').waitFor();
    await flow.locator(`.mz-hub-lesson[data-lesson-id="${target.lessonId}"]`).click();
    await flow.locator('.mz-study').waitFor();
    assert.equal(await flow.locator('.mz-study').getAttribute('data-step'), position);
    report.flows.push(`${courseId}: keyboard disclosure, preserved outline, direct start, saved-position resume, reload and lesson-row navigation`);
    await flow.close();
  }
  assert.deepEqual(report.failures, []);
  assert.deepEqual(report.errors, []);
} finally {
  await fs.writeFile(`${out}/report.json`, JSON.stringify(report, null, 2));
  await browser.close();
}
console.log(JSON.stringify(report, null, 2));

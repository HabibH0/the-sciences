// Real app interactions in a fresh browser profile, never the learner profile.
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { grammarSteps } from '../js/learning/study.js';
import { nativeItem, nativeItemKey } from '../js/learning/native.js';
import { auditLessons, auditCourse } from './nahw-audit-lessons.mjs';
const args = new URLSearchParams(process.argv[2] || '');
const course = auditCourse(args), MODULES = course.modules;
const selected = new Set(auditLessons(args).map(lesson => lesson.learningKey));
const retryLesson = course.courseId === 'adv-sarf' ? [...selected][0] : '01/l2';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: args.has('motion') ? 'no-preference' : 'reduce' });
  await page.route('**/__dev/version', route => route.abort());
  const errors = [];
  const app = page.locator('#root');
  page.on('pageerror', error => errors.push(error.stack));
  await page.addInitScript(courseId => {
    if (location.origin === 'http://localhost:4173' && !localStorage.getItem('the-sciences-progress')) localStorage.setItem('the-sciences-progress', JSON.stringify({
      progress: { courseId, forceUnlockAll: true, mizanVersion: 1 },
      meta: { version: 1, updatedAt: new Date().toISOString(), deviceId: 'isolated-flow-test' },
    }));
  }, course.courseId);
  const click = async action => {
    await app.locator(`[data-action="${action}"]`).last().click();
    await page.evaluate(() => Promise.allSettled(document.getAnimations().filter(a => a.effect?.getTiming().iterations !== Infinity).map(a => a.finished)));
    await page.waitForFunction(() => !document.querySelector('.mz-motion-layer, .mz-motion-backdrop'));
  };
  const dismissBadges = async () => {
    // Completing lessons can award multiple badges. Dismiss each through its
    // real Continue button before interacting with the next lesson.
    while (await app.locator('button[data-action="closeBadgeModal"]').count()) {
      await click('closeBadgeModal');
    }
  };
  // Notes turn some source enumerations into lists. Compare every word in
  // sequence while allowing their punctuation and line breaks to change.
  const normalize = text => text.replace(/[\u2066-\u2069]/g, '').replace(/[\p{P}\p{S}]/gu, ' ').replace(/\s+/g, ' ').trim();
  const totals = { lessons: 0, practiceCorrections: 0, quizzes: 0, notes: 0, reloads: 0 };
  for (const mod of MODULES) for (const lesson of mod.lessons) {
    if (lesson.learningKey === '01/l1' || !selected.has(lesson.learningKey)) continue;
    await page.goto(`http://localhost:4173/#/module/${lesson.learningKey}`, { waitUntil: 'domcontentloaded' });
    await app.locator('.mz-word-lesson').waitFor();
    await dismissBadges();
    await click('openStudyNotes');
    const noteText = await app.locator('.mz-notes-content').innerText();
    const notes = normalize(noteText);
    for (const concept of lesson.concepts) for (const line of concept.lines) {
      const original = line.html ? [await page.evaluate(html => { const element = document.createElement('div'); element.innerHTML = html; return element.textContent; }, line.html)]
        : line.box ? line.box.lines
        : line.table ? line.table.rows.flat()
        : line.tarkeebDiagram ? [...line.tarkeebDiagram.cells, ...line.tarkeebDiagram.rows.flatMap(row => row.labels.map(label => label.role)), line.tarkeebDiagram.translation || '']
        : [];
      for (const text of original) assert(notes.includes(normalize(text)), `${lesson.learningKey}: original note missing: ${text.slice(0, 60)}`);
    }
    for (const concept of lesson.concepts) if (concept.clarification) {
      const text = await page.evaluate(html => { const node = document.createElement('div'); node.innerHTML = html; return node.textContent; }, concept.clarification);
      assert(notes.includes(normalize(text)), `${lesson.learningKey}: original clarification missing`);
    }
    assert(!noteText.includes('\u2014'));
    totals.notes++;
    await click('closeStudyNotes');
    const steps = grammarSteps(lesson);
    for (const [index, step] of steps.entries()) {
      assert.equal(Number(await app.locator('.mz-study').getAttribute('data-step')), index, `${lesson.learningKey}: correct step position`);
      if (['check', 'analysis', 'practice'].includes(step.kind)) {
        const promptNode = await app.locator('.mz-exercise-prompt').elementHandle();
        const item = nativeItem(lesson, step), key = nativeItemKey(mod, lesson, step);
        const wrong = step.kind === 'analysis' ? item.labels.map(label => item.options.find(value => value !== label)) : (item.correct + 1) % item.options.length;
        if (step.kind === 'analysis') {
          for (const [i, value] of wrong.entries()) await app.locator(`#native-field-${i}`).selectOption(String(item.options.indexOf(value)));
        } else await app.locator(`[data-action="studyChoice"][data-option="${wrong}"]`).click();
        assert(await promptNode.evaluate(el => el === document.querySelector('#root .mz-exercise-prompt')), 'Answering keeps the question mounted');
        await click('studyCheck');
        assert(await promptNode.evaluate(el => el === document.querySelector('#root .mz-exercise-prompt')), 'Feedback keeps the question mounted');
        await app.locator('.mz-feedback.is-incorrect').waitFor();
        await click('studyCorrect');
        if (step.kind === 'analysis') {
          for (const [i, value] of item.labels.entries()) await app.locator(`#native-field-${i}`).selectOption(String(item.options.indexOf(value)));
        } else await app.locator(`[data-action="studyChoice"][data-option="${item.correct}"]`).click();
        await click('studyCheck');
        await page.getByRole('heading', { name: 'Correction understood', exact: true }).waitFor();
        // Refresh tests the real persistence and migration path, not just render.
        await page.reload({ waitUntil: 'domcontentloaded' });
        await app.locator('.mz-study').waitFor();
        assert.equal(Number(await app.locator('.mz-study').getAttribute('data-step')), index);
        const record = await page.evaluate(k => JSON.parse(localStorage.getItem('the-sciences-progress')).progress.exStates[k], key);
        assert(record.corrected);
        if (step.kind === 'analysis') {
          assert.deepEqual(record.originalResponse, wrong);
          assert.deepEqual(record.response, item.labels);
          assert.equal(record.correct, false);
        } else {
          assert.equal(record.firstSelected, wrong);
          assert.equal(record.selected, item.correct);
        }
        totals.practiceCorrections++; totals.reloads++;
      }
      await click('studyNext');
    }
    // A corrected wrong first attempt must still score as wrong. The first
    // lesson fails deliberately, then retries; all subsequent lessons pass 5/6.
    for (const [index, item] of lesson.quiz.entries()) {
      await app.locator('[data-action="checkLessonQuiz"]').waitFor();
      const wrong = lesson.learningKey === retryLesson || index === 0;
      await app.locator(`[data-action="selectQuizOption"][data-option="${wrong ? (item.correct + 1) % item.options.length : item.correct}"]`).click();
      await click('checkLessonQuiz');
      if (wrong) {
        await click('correctLessonQuiz');
        await app.locator(`[data-action="selectQuizOption"][data-option="${item.correct}"]`).click();
        await click('checkLessonQuiz');
        await page.getByRole('heading', { name: 'Correction understood', exact: true }).waitFor();
      }
      await click('nextQuizQuestion');
    }
    if (lesson.learningKey === retryLesson) {
      await page.getByRole('heading', { name: 'A little more practice', exact: true }).waitFor();
      await click('retakeQuiz');
      for (const item of lesson.quiz) {
        await app.locator(`[data-action="selectQuizOption"][data-option="${item.correct}"]`).click();
        await click('checkLessonQuiz'); await click('nextQuizQuestion');
      }
    }
    await page.getByRole('heading', { name: 'Ready to move on', exact: true }).waitFor();
    await click('finishLesson');
    await dismissBadges();
    totals.quizzes++; totals.lessons++;
    console.log(`Passed ${lesson.learningKey}: original notes, all corrections, refresh recovery, quiz grading and completion.`);
  }
  assert.deepEqual(errors, []);
  console.log('Live app flow checks passed:', JSON.stringify(totals));
} finally { await browser.close(); }

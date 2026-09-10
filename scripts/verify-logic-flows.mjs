// Real controls and grading requests, isolated from the learner's browser.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { MODULES } from '../content-mantiq/index.js';
import { COURSE } from '../content-mantiq/course.js';
import { logicFieldGroups } from '../js/learning/render-logic.js';
import { getAt } from '../js/mizan/exercises/validator.js';
import { selectedWords, restoreTokens } from '../js/mizan/exercises/interaction-model.js';
import { emptyCourse } from '../js/mizan/progress/model.js';
import { introduced } from '../js/mizan/mastery/engine.js';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const source = JSON.parse(await fs.readFile(new URL('../server/content/mantiq.json', import.meta.url), 'utf8'));
const answers = new Map(source.items.map(i => [i.id, i.answer]));
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
const totals = { lessons: 0, notes: 0, corrections: 0, reloads: 0, visualControls: 0, errors: [] };
const firstOnly = process.argv.includes('--first');
const grouped = process.argv.includes('--groups');
const motion = process.argv.includes('--motion');
try {
  const page = await browser.newPage({ viewport: grouped ? { width: 320, height: 568 } : { width: 390, height: 844 }, reducedMotion: motion ? 'no-preference' : 'reduce' });
  const app = page.locator('#root');
  page.on('pageerror', e => totals.errors.push(e.stack));
  await page.route('**/__dev/version', route => route.abort());
  await page.addInitScript(() => {
    if (location.origin === 'http://localhost:4173' && !localStorage.getItem('the-sciences-progress')) localStorage.setItem('the-sciences-progress', JSON.stringify({ progress: { courseId: 'mantiq', forceUnlockAll: true, mizanVersion: 1 }, meta: { version: 1, updatedAt: new Date().toISOString(), deviceId: 'isolated-logic-flows' } }));
  });
  const settle = async () => {
    await page.waitForFunction(() => !document.getAnimations().some(a => a.playState === 'running' && a.effect?.getTiming().iterations !== Infinity), null, { timeout: 5000 });
    await page.waitForFunction(() => !document.querySelector('.mz-motion-layer, .mz-motion-backdrop'), null, { timeout: 5000 });
  };
  const click = async action => { await settle(); await app.locator(`[data-action="${action}"]:visible`).last().click(); await settle(); };
  async function fill(item) {
    const answer = answers.get(item.id);
    if (item.reflection) return app.locator('[data-logic-reflection]').fill(String(answer));
    if (await app.locator('[data-logic-choice-select]').count()) return app.locator('[data-logic-choice-select]').selectOption(String(item.options.findIndex(v => JSON.stringify(v) === JSON.stringify(answer))));
    if (await app.locator('[data-action="logicChoice"]').count()) return app.locator(`[data-action="logicChoice"][data-option="${item.options.findIndex(v => JSON.stringify(v) === JSON.stringify(answer))}"]`).click();
    if (item.interaction === 'select_span') {
      for (const i of selectedWords(item.stimulus, answer)) await app.locator(`[data-action="logicSpan"][data-index="${i}"]`).click();
      return;
    }
    if (item.interaction === 'sentence_builder' && item.word_bank?.length) {
      for (const word of restoreTokens(answer, item.word_bank)) {
        const indices = item.word_bank.flatMap((w, i) => w === word ? [i] : []);
        let placed = false;
        for (const i of indices) if (await app.locator(`[data-action="logicTokenAdd"][data-index="${i}"]`).isEnabled()) { await app.locator(`[data-action="logicTokenAdd"][data-index="${i}"]`).click(); placed = true; break; }
        assert(placed, `${item.id}: word bank contains expected word ${word}`);
      }
      return;
    }
    if (await app.locator('[data-action="logicVennTool"]').count()) {
      for (const region of ['subject_only', 'overlap', 'predicate_only']) {
        const tool = answer.shaded_regions.includes(region) ? 'shade' : answer.x_regions.includes(region) ? 'exists' : 'clear';
        await app.locator(`[data-action="logicVennTool"][data-value="${tool}"]`).click();
        await app.locator(`[data-action="logicVennRegion"][data-value="${region}"]`).click();
      }
      return;
    }
    const groups = logicFieldGroups(item);
    for (let group = 0; group < groups.length; group++) {
      if (groups.length > 1) {
        if (!await app.locator('.mz-logic-group-nav > span').count()) {
          await page.screenshot({ path: 'artifacts/logic-course/group-flow-failure.png' });
          throw new Error(`${item.id}: grouped controls missing. ${await app.locator('.mz-study').innerText()}`);
        }
        const current = Number((await app.locator('.mz-logic-group-nav > span').textContent()).split('/')[0]) - 1;
        if (current !== group) await app.locator(`[data-action="logicLayout"][data-group="${group}"]:visible`).last().click();
      }
      for (const fi of groups[group].indices) {
        const field = item.fields[fi], value = getAt(answer, field.path);
        if (field.kind === 'list') {
          for (let i = 0; i < value.length; i++) {
            await app.locator(`[data-action="logicListAdd"][data-field="${fi}"]`).click();
            await app.locator(`[data-logic-field="${fi}"][data-list-index="${i}"]`).fill(String(value[i]));
          }
        } else if (field.options?.length || field.kind === 'boolean') {
          const options = field.options?.length ? field.options : [true, false];
          await app.locator(`[data-logic-field="${fi}"]`).selectOption(String(options.findIndex(v => JSON.stringify(v) === JSON.stringify(value))));
        } else await app.locator(`[data-logic-field="${fi}"]`).fill(value === null ? 'none' : String(value));
      }
    }
  }
  async function makeWrong(item) {
    if (await app.locator('[data-action="logicChoice"]').count()) return app.locator('[data-action="logicChoice"][aria-pressed="false"]').first().click();
    if (await app.locator('[data-logic-choice-select]').count()) { const current = Number(await app.locator('[data-logic-choice-select]').inputValue()); return app.locator('[data-logic-choice-select]').selectOption(String((current + 1) % item.options.length)); }
    if (await app.locator('[data-action="logicSpan"]').count()) return app.locator('[data-action="logicSpan"][aria-pressed="false"]').first().click();
    if (await app.locator('[data-action="logicTokenRemove"]').count()) return app.locator('[data-action="logicTokenRemove"]').first().click();
    if (await app.locator('[data-action="logicVennTool"]').count()) {
      const tool = answers.get(item.id).x_regions.includes('overlap') ? 'shade' : 'exists';
      await app.locator(`[data-action="logicVennTool"][data-value="${tool}"]`).click();
      return app.locator('[data-action="logicVennRegion"][data-value="overlap"]').click();
    }
    const input = app.locator('input[data-logic-field]:visible').first();
    if (await input.count()) return input.fill(await input.getAttribute('type') === 'number' ? '-99' : 'incorrect');
    const select = app.locator('select[data-logic-field]:visible').first();
    const current = Number(await select.inputValue());
    return select.selectOption(String((current + 1) % (await select.locator('option').count() - 1)));
  }
  const normalize = text => text.replace(/\s*\u2014\s*/g, '; ').replace(/[\u2066-\u2069]/g, '').replace(/\s+/g, ' ').trim();
  const cases = grouped ? ['multi_property_analysis', 'perform_obversion', 'reconstruct_enthymeme', 'distinguish_near_neighbours'].map(template => ({ mod: MODULES[0], lesson: MODULES[0].lessons[0], injected: COURSE.items.find(i => i.template === template) })) : MODULES.flatMap(mod => mod.lessons.map(lesson => ({ mod, lesson })));
  for (const { mod, lesson, injected } of cases) {
    if (firstOnly && totals.lessons) continue;
    if (injected) {
      // Seed a real, valid saved session in this disposable profile only. This
      // reaches larger bank forms without changing the course's item selection.
      await page.goto('http://localhost:4173/scripts/verify-logic-layout.html');
      await page.waitForFunction(() => window.logicAudit);
      const now = new Date().toISOString();
      const course = { ...emptyCourse(), concepts: Object.fromEntries(injected.concepts.map(id => [id, introduced(id, now)])), lessons: { [lesson.id]: { read: true, startedAt: now, sessionId: `isolated-${injected.template}`, itemIds: [injected.id] } } };
      await page.evaluate(({ mod, lesson, item, now, course }) => {
        const key = `mantiq/${mod.id}/${lesson.id}`;
        localStorage.setItem('the-sciences-progress', JSON.stringify({ progress: { mizanVersion: 1, courseId: 'mantiq', forceUnlockAll: true, mizanCourses: { mantiq: course }, studySessions: { [key]: { id: `isolated-${item.template}`, version: 1, logic: true, kind: 'lesson', lessonId: lesson.id, steps: [{ kind: 'exercise', itemId: item.id, guided: true }], itemIds: [item.id], stepIndex: 0, index: 0, updatedAt: now } } }, meta: { version: 1, updatedAt: now, deviceId: 'isolated-group-flow' } }));
      }, { mod, lesson, item: injected, now, course });
    }
    await page.goto(`http://localhost:4173/#/module/${mod.id}/${lesson.id}`);
    await app.locator('.mz-logic-lesson').waitFor();
    while (await app.locator('[data-action="closeBadgeModal"]').count()) await click('closeBadgeModal');
    await click('openStudyNotes');
    const original = await page.evaluate(html => { const el = document.createElement('div'); el.innerHTML = html; return el.textContent; }, COURSE.lessons[lesson.id].notesHtml);
    assert.equal(normalize(await app.locator('.mz-notes-content').textContent()), normalize(original));
    await click('closeStudyNotes'); totals.notes++;
    const key = `mantiq/${mod.id}/${lesson.id}`;
    while (await app.locator('.mz-logic-lesson').count()) {
      await settle();
      const stepBefore = Number(await app.locator('.mz-study').getAttribute('data-step'));
      if (await app.locator('.mz-logic-exercise').count()) {
        const id = await app.locator('.mz-logic-exercise').getAttribute('data-item-id');
        const item = COURSE.items.find(i => i.id === id);
        await fill(item); await makeWrong(item);
        if (firstOnly && !totals.corrections) {
          await page.route('**/api/grade', route => route.fulfill({ status: 503, body: 'Temporary test failure' }), { times: 1 });
          await click('submitLogicAnswer'); await app.locator('.mz-error').waitFor();
          await app.locator('[data-action="logicLayout"][data-view="answer"]').click();
          assert(await app.locator('[data-action="submitLogicAnswer"]').isEnabled(), 'Response retained after request failure');
        }
        await click('submitLogicAnswer');
        await app.locator('.mz-feedback.is-incorrect').waitFor();
        await app.locator('[data-action="logicLayout"][data-view="expected"]').click();
        await click('logicCorrect'); await fill(item);
        if (firstOnly && !totals.corrections) {
          await makeWrong(item); await click('submitLogicAnswer');
          await page.getByRole('heading', { name: 'Check the correction', exact: true }).waitFor();
          await app.locator('[data-action="logicLayout"][data-view="answer"]').click();
          await fill(item);
        }
        await click('submitLogicAnswer');
        await page.getByRole('heading', { name: 'Correction understood', exact: true }).waitFor();
        const position = Number(await app.locator('.mz-study').getAttribute('data-step'));
        await page.waitForFunction(([key, id, position]) => { const s = JSON.parse(localStorage.getItem('the-sciences-progress')).progress.studySessions[key]; return s?.stepIndex === position && s.draft?.itemId === id && s.draft.correctionGrade?.correct; }, [key, id, position]);
        const before = await page.evaluate(key => JSON.parse(localStorage.getItem('the-sciences-progress')).progress.studySessions[key], key);
        await page.reload(); await app.locator('.mz-logic-lesson').waitFor();
        const after = await page.evaluate(key => JSON.parse(localStorage.getItem('the-sciences-progress')).progress.studySessions[key], key);
        assert.equal(after.stepIndex, before.stepIndex); assert.equal(after.draft.grade.correct, false); assert.equal(after.draft.correctionGrade.correct, true); assert.deepEqual(after.draft.originalResponse, before.draft.originalResponse);
        totals.corrections++; totals.reloads++;
      } else if (await app.locator('.mz-logic-visual-toggle:visible').count()) {
        await app.locator('.mz-logic-visual-toggle').click();
        const select = app.locator('[data-logic-visual-select]:visible');
        if (await select.count()) { await select.selectOption({ index: 1 }); totals.visualControls++; }
        await app.locator('.mz-logic-visual-toggle').click();
      }
      await click('studyNext');
      assert(!await app.locator('.mz-logic-lesson').count() || Number(await app.locator('.mz-study').getAttribute('data-step')) > stepBefore, `Continue must advance card ${stepBefore}`);
    }
    await page.waitForFunction(key => !!JSON.parse(localStorage.getItem('the-sciences-progress')).progress.studySessions[key]?.completedAt, key);
    const score = await page.evaluate(([m, l]) => JSON.parse(localStorage.getItem('the-sciences-progress')).progress.quizScores[m][l], [mod.id, lesson.id]);
    assert.equal(score.correct, 0, 'Corrections retain the original score');
    totals.lessons++;
    console.log(JSON.stringify({ lesson: lesson.id, ...totals }));
  }
  assert.deepEqual(totals.errors, []);
} finally { await fs.writeFile(`artifacts/logic-course/flows${grouped ? '-groups' : firstOnly ? '-retries' : ''}${motion ? '-motion' : ''}.json`, JSON.stringify(totals, null, 2)); await browser.close(); }

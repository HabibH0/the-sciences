// Real renderers and content, in an isolated state: no learner progress is saved.
// Open verify-responsive.html?mobile=1&width=320&height=568&scale=1.25.
// sample=1 checks two lessons per course; course and only narrow regressions.
import { COURSES, setActiveCourse, getBankPool, flattenTarkeebSlots, classifyTarkeebRoleTier } from '../content/index.js';
import { createInitialState } from '../js/state.js';
import { render, FACES } from '../js/render.js';
import { createStudySession, studyKey } from '../js/learning/study.js';
import { nativeItem, nativeItemKey } from '../js/learning/native.js';
import { logicCourse, logicItem } from '../js/learning/logic-course.js';
import { initialResponse, logicExerciseHtml } from '../js/learning/exercises.js';
import { fitMobilePages } from '../js/learning/mobile-pages.js';
import { prepareExerciseFeedback, mountFeedbackSheet } from '../js/learning/feedback-sheet.js';
import { LITERATURE_LESSONS, loadLiteratureLesson } from '../content-lit/learning/index.js';
import { createLiteratureRun, currentLiteratureStep, updateLiteratureRun } from '../js/literature/engine.js';
const params = new URLSearchParams(location.search);
const root = document.querySelector('#root'), result = document.querySelector('#result');
const scale = Number(params.get('scale')) || 1;
document.documentElement.style.setProperty('--font-ar', FACES[params.get('font') || 'traditional'].body);
for (const key of ['lesson', 'ui']) document.documentElement.style.setProperty(`--${key}-text-scale`, String(scale));
const words = element => {
  const clone = element.cloneNode(true);
  clone.querySelectorAll('button, select, textarea, input, svg').forEach(node => node.remove());
  const walker = document.createTreeWalker(clone, NodeFilter.SHOW_TEXT), pieces = [];
  while (walker.nextNode()) pieces.push(walker.currentNode.textContent);
  return pieces.join(' ').replace(/[\u2067\u2069]/g, '').trim().split(/\s+/).filter(Boolean);
};
const signature = node => [node.tagName, ...[...node.attributes].filter(a => a.name.startsWith('data-') && a.name !== 'data-screen-anchor').map(a => `${a.name}=${a.value}`)].join('|');
const counts = values => values.reduce((map, value) => map.set(value, (map.get(value) || 0) + 1), new Map());

document.querySelector('#run').onclick = async () => {
  document.querySelector('#run').disabled = true;
  result.dataset.status = 'running';
  const state = await createInitialState();
  Object.assign(state, { forceUnlockAll: true, lessonTextScale: scale * 100, uiTextScale: scale * 100, completed: {}, studySessions: {}, mizanCourses: {}, exStates: {}, optionOrder: {}, literature: { version: 1, runs: {} } });
  const totals = { viewport: [innerWidth, innerHeight], scale, lessons: 0, states: 0, pages: 0, feedbackSheets: 0, failures: [] };
  const check = async (html, label) => {
    if (params.has('only') && !params.get('only').split('|').some(part => label.includes(part))) return;
    root.innerHTML = html;
    if (!totals.states) await document.fonts.ready;
    const source = root.querySelector('.mz-study-body, .la-stage-body, .quiz-body');
    if (!source) throw new Error(`Missing learning body: ${label}`);
    const expected = counts(words(source));
    const controls = new Set([...source.querySelectorAll('[data-action], input, select, textarea')].map(signature));
    const feedback = prepareExerciseFeedback(root);
    const seen = new Map(), seenControls = new Set();
    const fail = (reason, detail = '') => { if (totals.failures.length < 100) totals.failures.push({ label, reason, detail }); };
    let layout = fitMobilePages(root);
    if (!layout?.fits) {
      const body = root.querySelector('.screen-body'), page = body?.firstElementChild;
      fail('Did not fit', { ...layout, body: body && [body.clientWidth, body.clientHeight], page: page && [page.scrollWidth, page.scrollHeight], foot: root.querySelector('.screen-nav')?.getBoundingClientRect().height });
      totals.states++; return;
    }
    for (let index = 0; index < layout.count; index++) {
      layout = fitMobilePages(root, { index });
      const body = root.querySelector('.screen-body'), page = body.firstElementChild;
      const scroller = root.querySelector('.main-content'), foot = root.querySelector('.screen-nav').getBoundingClientRect();
      if (!layout.fits || scroller.scrollHeight > scroller.clientHeight + 1 || foot.bottom > innerHeight + 1 || page.getBoundingClientRect().bottom > body.getBoundingClientRect().bottom + 1) fail('Vertical overflow', { index, fits: layout.fits, scroll: [scroller.scrollHeight, scroller.clientHeight], foot: foot.bottom, page: [page.scrollHeight, page.getBoundingClientRect().bottom], body: [body.clientHeight, body.getBoundingClientRect().bottom] });
      if (scroller.scrollWidth > scroller.clientWidth + 1 || document.documentElement.scrollWidth > innerWidth + 1) fail('Horizontal overflow', index);
      for (const node of body.querySelectorAll('*')) {
        const style = getComputedStyle(node);
        if (['auto', 'scroll'].includes(style.overflowX) && node.scrollWidth > node.clientWidth + 1) fail('Internal horizontal scroll', node.className);
        if (node.tagName !== 'TEXTAREA' && ['auto', 'scroll'].includes(style.overflowY) && node.scrollHeight > node.clientHeight + 1) fail('Internal vertical scroll', node.className);
      }
      for (const token of words(body)) seen.set(token, (seen.get(token) || 0) + 1);
      for (const node of root.querySelectorAll('.screen-fit [data-action], .screen-body input, .screen-body select, .screen-body textarea')) seenControls.add(signature(node));
      for (const node of body.querySelectorAll('button, input, select, textarea')) {
        if (!node.getClientRects().length) continue;
        const rect = node.getBoundingClientRect(), bounds = body.getBoundingClientRect();
        if (rect.left < bounds.left - 1 || rect.right > bounds.right + 1 || rect.bottom > bounds.bottom + 1) fail('Control outside page', node.outerHTML.slice(0, 180));
      }
      totals.pages++;
    }
    const sheet = mountFeedbackSheet(root, feedback, { open: true });
    if (sheet) {
      for (const token of words(sheet)) seen.set(token, (seen.get(token) || 0) + 1);
      for (const node of sheet.querySelectorAll('[data-action]')) seenControls.add(signature(node));
      const rect = sheet.getBoundingClientRect(), foot = sheet.querySelector('.exercise-feedback-foot').getBoundingClientRect();
      if (rect.top < -1 || rect.bottom > innerHeight + 1 || rect.left < -1 || rect.right > innerWidth + 1 || foot.bottom > innerHeight + 1) fail('Feedback sheet outside viewport', { rect: rect.toJSON(), foot: foot.toJSON() });
      if (sheet.scrollHeight > sheet.clientHeight + 1 || sheet.scrollWidth > sheet.clientWidth + 1) fail('Feedback sheet overflow');
      if (root.querySelector('.screen-body .mz-feedback, .screen-body .la-feedback, .screen-body .quiz-feedback')) fail('Feedback remains in exercise flow');
      if (!root.querySelector('.main')?.inert) fail('Exercise still interactive behind feedback');
      totals.feedbackSheets++;
    }
    for (const [token, count] of expected) if ((seen.get(token) || 0) < count) { fail('Text missing', token); break; }
    for (const control of controls) if (!seenControls.has(control)) { fail('Control missing', control); break; }
    totals.states++;
    if (totals.states % 10 === 0) { result.textContent = JSON.stringify(totals); await new Promise(resolve => setTimeout(resolve, 0)); }
  };
  try {
    for (const course of COURSES.filter(c => !params.has('course') || params.get('course') === c.id)) {
      await setActiveCourse(course.id); state.courseId = course.id;
      const lessons = course.modules.flatMap(mod => mod.lessons.map(lesson => ({ mod, lesson })));
      for (const { mod, lesson } of params.has('sample') ? lessons.slice(0, 2) : lessons) {
        Object.assign(state, { view: 'lesson', moduleId: mod.id, lessonId: lesson.id });
        const key = studyKey(course.id, mod.id, lesson.id), session = createStudySession(state, mod, lesson, '2026-09-08T12:00:00Z', key);
        state.studySessions[key] = session;
        for (let i = 0; i < session.steps.length; i++) {
          session.stepIndex = i;
          const step = session.steps[i], label = `${key}/${step.id || step.stepId || step.itemId}`;
          if (session.logic && step.itemId) session.draft = { response: initialResponse(logicItem(step.itemId)), hintsUsed: 0 };
          await check(render(state, course.modules), label);
          if (!session.logic && (step.tableIndex != null || step.diagramIndex != null)) {
            session.readingDetails = { [step.id]: true };
            await check(render(state, course.modules), `${label}/expanded-source`);
            session.readingDetails = {};
          }
          if (!session.logic && ['check', 'analysis', 'practice'].includes(step.kind)) {
            const item = nativeItem(lesson, step), id = nativeItemKey(mod, lesson, step);
            state.exStates[id] = step.kind === 'analysis' ? { response: item.labels, originalResponse: item.words.map(() => item.options[0]), submitted: true, correct: false, hintShown: true }
              : { selected: item.correct, firstSelected: (item.correct + 1) % item.options.length, submitted: true, hintShown: true };
            await check(render(state, course.modules), `${label}/feedback-and-hint`);
            delete state.exStates[id];
          }
        }
        if (!session.logic) {
          const qi = lesson.quiz.reduce((best, q, index) => JSON.stringify(q).length > JSON.stringify(lesson.quiz[best]).length ? index : best, 0);
          Object.assign(state, { view: 'quiz', quizIndex: qi, quizShowResult: false, quizRevealed: false, quizSelected: null, quizCorrection: null, quizOptionOrder: { [qi]: lesson.quiz[qi].options.map((_, i) => i) } });
          await check(render(state, course.modules), `${key}/quiz`);
          state.quizSelected = (lesson.quiz[qi].correct + 1) % lesson.quiz[qi].options.length; state.quizRevealed = true;
          await check(render(state, course.modules), `${key}/quiz-feedback`);
        }
        totals.lessons++; result.textContent = JSON.stringify(totals);
      }
      if (course.id === 'mantiq') {
        const families = new Map();
        for (const item of logicCourse().items) {
          const family = `${item.interaction}/${item.family || item.fields.map(field => field.kind).join(',')}`;
          if (!families.has(family) || JSON.stringify(item).length > JSON.stringify(families.get(family)).length) families.set(family, item);
        }
        for (const item of families.values()) for (const graded of [false, true]) {
          const draft = { response: initialResponse(item), hintsUsed: item.hints.length, ...(graded ? { grade: { correct: false, message: item.explanation || 'Use the rule to check this answer.', answer: item.answer } } : {}) };
          const html = `<main class="main"><div class="main-content"><section class="mz-study"><header class="mz-study-head"><h1>Logic exercise</h1></header><div class="mz-study-body">${logicExerciseHtml(item, draft)}</div><footer class="mz-study-foot"><button class="btn btn-primary" data-action="studyNext" ${graded ? '' : 'disabled'}>Continue</button></footer></section></div></main>`;
          await check(html, `logic-family/${item.id}/${graded ? 'feedback' : 'answer'}`);
        }
      }
      else {
        const pool = course.modules.flatMap(mod => getBankPool(mod.id, {}, true));
        for (const kind of ['mcq', 'vocab', 'tarkeeb']) {
          const entries = pool.filter(entry => (entry.item.kind || 'mcq') === kind).sort((a, b) => JSON.stringify(b.item).length - JSON.stringify(a.item).length).slice(0, 3);
          for (const entry of entries) for (const submitted of [false, true]) {
            Object.assign(state, { view: 'practice', moduleId: entry.moduleId, practice: { source: 'module', kind, moduleId: entry.moduleId, queue: [entry.key], index: 0, log: [], selected: 0, correct: false, submitted, optionOrder: [] } });
            if (kind === 'tarkeeb') {
              const roles = entry.item.cells ? flattenTarkeebSlots(entry.item, { fillBlanks: course.id === 'adv-nahw' }).slots.map(slot => slot.role) : entry.item.labels;
              const chipPool = roles.filter(Boolean).concat(entry.item.distractors || []);
              state.tarkeebState = { [entry.key]: { chipPool, chipOrder: chipPool.map((_, i) => i), chipTier: chipPool.map(classifyTarkeebRoleTier), placements: roles.map(() => null), selectedChip: null, submitted, feedback: submitted ? roles.map(() => ({ pass: false })) : null, passed: false } };
            }
            await check(render(state, course.modules), `${course.id}/practice/${kind}/${entry.key}/${submitted}`);
          }
        }
      }
    }
    if (!params.has('course') || params.get('course') === 'literature') {
      let time = Date.now(), serial = 0;
      const change = (lesson, run, action, value) => updateLiteratureRun(lesson, run, action, value, ++time, `mobile-${++serial}`);
      for (const definition of LITERATURE_LESSONS) {
        const lesson = await loadLiteratureLesson(definition.id);
        Object.assign(state, { view: 'litLesson', literatureLessonId: lesson.id });
        let run = createLiteratureRun(lesson, `mobile-${lesson.id}`, ++time);
        while (currentLiteratureStep(lesson, run).step) {
          const { step } = currentLiteratureStep(lesson, run);
          state.literature.runs[run.id] = run; await check(render(state, []), `lit/${lesson.id}/${step.id}`);
          if (['orientation', 'clean'].includes(step.type)) { run = change(lesson, run, 'acknowledge', step.type === 'clean' ? 'independent' : 'ready'); continue; }
          if (step.phase === 'decode') { run = change(lesson, run, 'reveal'); for (let h = 0; h < 6; h++) run = change(lesson, run, 'help'); }
          for (const value of Array.isArray(step.answer) ? step.answer : [step.answer]) run = change(lesson, run, 'select', value);
          state.literature.runs[run.id] = run; await check(render(state, []), `lit/${lesson.id}/${step.id}/selected`);
          run = change(lesson, run, 'check'); state.literature.runs[run.id] = run;
          await check(render(state, []), `lit/${lesson.id}/${step.id}/feedback`);
          run = change(lesson, run, 'next');
        }
        state.literature.runs[run.id] = run; await check(render(state, []), `lit/${lesson.id}/complete`);
        totals.lessons++;
      }
    }
    result.dataset.status = 'complete'; result.textContent = JSON.stringify(totals, null, 2);
  } catch (error) { result.dataset.status = 'error'; result.textContent = JSON.stringify({ ...totals, error: error.stack }); }
  document.querySelector('#run').disabled = false;
};
document.querySelector('#run').disabled = false;
result.textContent = 'Ready';

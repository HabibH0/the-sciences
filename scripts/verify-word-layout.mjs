// A render-only browser audit. Never changes or persists learner progress.
import { auditCourse } from './nahw-audit-lessons.mjs';
import { setActiveCourse } from '../content/index.js';
import { createInitialState } from '../js/state.js';
import { render, FACES } from '../js/render.js';
import { createStudySession, studyKey } from '../js/learning/study.js';
import { nativeItem, nativeItemKey } from '../js/learning/native.js';
import { fitMobilePages } from '../js/learning/mobile-pages.js';
import { fitLessonPages } from '../js/learning/lesson-pages.js';
import { prepareExerciseFeedback } from '../js/learning/feedback-sheet.js';
import { fitIdeaCard, learningPunctuation } from '../js/learning/fit-idea-card.js';
import { WORD_COPY } from '../js/learning/render-word.js';
import { foundationPlan, sourceRef } from '../js/learning/nahw-foundations.js';
import { foundationLineHtml } from '../js/learning/render-foundations.js';

const root = document.querySelector('#root'), result = document.querySelector('#result');
const params = new URLSearchParams(location.search);
const course = auditCourse(params), MODULES = course.modules;
if (params.has('preview')) document.querySelector('#audit').hidden = true;
await setActiveCourse(course.courseId);
const state = await createInitialState();
Object.assign(state, { courseId: course.courseId, view: 'lesson', forceUnlockAll: true, exStates: {}, studySessions: {}, optionOrder: {}, quizScores: {}, studyNotesOpen: false, storageError: null });
const [moduleId, lessonId] = (params.get('lesson') || course.defaultLesson).split('/');
const mod = MODULES.find(m => m.id === moduleId), lesson = mod.lessons.find(l => l.id === lessonId), key = studyKey(course.courseId, moduleId, lessonId);
Object.assign(state, { moduleId, lessonId });
const session = createStudySession(state, mod, lesson, '2026-09-09T00:00:00Z', 'render-only');
state.studySessions[key] = session;
const run = document.querySelector('#run');
run.disabled = false;
result.textContent = 'Ready. No learner progress is saved.';
run.addEventListener('click', async () => {
  run.disabled = true;
  result.dataset.status = 'running';
  const totals = { lesson: lesson.learningKey, viewport: [innerWidth, innerHeight], states: 0, typography: {}, failures: [] };
  const inspect = async (label, scale, font) => {
    if (params.has('phase') && !label.endsWith(`:${params.get('phase')}`)) return;
    root.innerHTML = render(state, MODULES);
    learningPunctuation(root);
    await document.fonts.ready;
    const fail = reason => totals.failures.push({ label, scale, font, reason });
    const shell = root.querySelector('.mz-word-lesson'), body = shell?.querySelector('.mz-study-body');
    if (!body) { fail('Missing authored layout'); return; }
    const before = body.innerHTML;
    if (fitMobilePages(root, { index: 99 }) !== null || fitLessonPages(root, 99) !== null) fail('Idea was paginated');
    if (body.innerHTML !== before) fail('Content was split or changed');
    if (prepareExerciseFeedback(root)) fail('Feedback left its exercise');
    const fit = fitIdeaCard(root);
    if (!fit?.fits && params.has('debug')) {
      totals.geometry ??= [];
      totals.geometry.push({ label, nodes: [...shell.querySelectorAll('.mz-study-head, .mz-study-body, .mz-exercise, .mz-exercise-prompt, h2, .mz-stimulus, .mz-response, .mz-choices, .mz-check-row, .mz-feedback, .mz-hints, .concept-source-box-line, .mz-word-recap, .mz-word-recap-note')].map(node => ({ selector: node.className || node.tagName, text: node.textContent.slice(0, 50), height: node.clientHeight, scroll: node.scrollHeight, top: node.getBoundingClientRect().top, bottom: node.getBoundingClientRect().bottom, font: getComputedStyle(node).fontSize })) });
    }
    if (!fit?.fits) fail('Complete card does not fit');
    if (fit.scale !== 1 || getComputedStyle(body).getPropertyValue('--lesson-text-scale').trim() !== '1') fail('Lesson text follows an adjustable scale');
    for (const [role, selector] of Object.entries({ body: '.mz-study-body', title: '.mz-study-body h2', prose: '.mz-word-card .concept-line', definition: '.concept-source-box-line:not([dir="ltr"])', panelProse: '.concept-source-box-line[dir="ltr"]', pattern: '[data-text-role="pattern"]', choice: '.mz-choice', feedback: '.mz-feedback > p' })) {
      for (const node of shell.querySelectorAll(selector)) {
        const size = getComputedStyle(node).fontSize;
        if (totals.typography[role] && totals.typography[role] !== size) fail(`${role} size changes between cards or preferences`);
        totals.typography[role] = size;
      }
    }
    if (!shell.querySelector('.mz-word-head [role="progressbar"]')) fail('Missing progress bar');
    if (shell.querySelector('.mz-word-head').getBoundingClientRect().height > 62) fail('Header uses too much card space');
    if (shell.querySelector('[data-action="setLessonTextScale"]')) fail('Unwanted text-size control');
    if (shell.textContent.includes('\u2014')) fail('Em dash in learning material');
    const region = body.getBoundingClientRect();
    if (body.scrollHeight > body.clientHeight + 1) fail('Card vertical overflow');
    if (body.scrollWidth > body.clientWidth + 1) fail('Card horizontal overflow');
    if (document.documentElement.scrollWidth > innerWidth + 1) fail('Document horizontal overflow');
    {
      if (root.querySelector('.main-content').scrollHeight > root.querySelector('.main-content').clientHeight + 1) fail('Outer screen overflows');
      if (shell.querySelector('.mz-study-foot').getBoundingClientRect().bottom > innerHeight + 1) fail('Footer offscreen');
      if (region.height < 150) fail('Card has too little reading space');
    }
    for (const node of body.querySelectorAll('p, figure, .mz-choice, select')) {
      if (!node.getClientRects().length) continue;
      const box = node.getBoundingClientRect();
      if (box.left < region.left - 1 || box.right > region.right + 1 || box.bottom > region.bottom + 1) { fail(`Content extends outside card: ${node.className}`); break; }
    }
    for (const example of body.querySelectorAll('[data-required-examples] li')) {
      const box = example.getBoundingClientRect();
      if (!example.getClientRects().length || box.width === 0 || box.height === 0 || getComputedStyle(example).visibility !== 'visible') fail('Required teaching example is hidden');
      if (box.bottom > region.bottom + 1 || box.left < region.left - 1 || box.right > region.right + 1) fail('Required teaching example is clipped');
    }
    for (const inline of body.querySelectorAll('.ar, bdi')) {
      if (getComputedStyle(inline).fontSize !== getComputedStyle(inline.parentElement).fontSize) {
        fail(`Arabic size differs from its text role: ${inline.parentElement.className}`); break;
      }
    }
    for (const cell of body.querySelectorAll('.is-pattern .mz-foundation-cell:not([data-text-role])')) {
      const visible = cell.cloneNode(true);
      visible.querySelectorAll('.sr-only').forEach(node => node.remove());
      if (/[a-z]/i.test(visible.textContent) && getComputedStyle(cell).direction !== 'ltr') fail('English pattern explanation has RTL base direction');
    }
    // Arabic tiles follow source order from right to left. Text isolation
    // alone cannot establish the physical order of separate grid children.
    for (const grid of body.querySelectorAll('.mz-foundation-tokens, .is-pattern > section, .mz-form-collection > ul')) {
      if (!grid.getClientRects().length) continue;
      const tiles = [...grid.children];
      for (let i = 1; i < tiles.length; i++) {
        const previous = tiles[i - 1].getBoundingClientRect(), next = tiles[i].getBoundingClientRect();
        if (Math.abs(previous.top - next.top) < 1 && previous.left < next.right - 1) fail('Arabic sentence tiles read left to right');
      }
      for (const label of grid.querySelectorAll('.mz-meaning-token > span')) {
        if (getComputedStyle(label).direction !== 'ltr') fail('English tile explanation inherited RTL layout direction');
        if (label.textContent.startsWith('Understood:') && ![...label.querySelectorAll('.ar')].some(run => run.textContent.replace(/[\u2067\u2069]/g, '') === 'لا، لم آكل')) fail('Arabic reply was split at its comma');
      }
    }
    if (body.querySelector('.mz-exercise')) {
      const expected = state.view === 'quiz' ? lesson.quiz[state.quizIndex].options.length : session.steps[session.stepIndex].kind === 'analysis' ? 0 : nativeItem(lesson, session.steps[session.stepIndex]).options.length;
      if (body.querySelectorAll('.mz-choice').length !== expected) fail('Missing exercise choices');
      if (body.querySelector('.mz-check-row')) fail('Answer action takes a second row inside the card');
      if (shell.querySelectorAll('.mz-study-foot > .btn-primary').length !== 1) fail('Missing or duplicated primary footer action');
      const action = shell.querySelector('.mz-study-foot > .btn-primary');
      const answering = label.endsWith(':initial') || label.endsWith(':hint') || label.endsWith(':correction');
      if (action?.dataset.action !== (state.view === 'quiz' ? answering ? 'checkLessonQuiz' : 'nextQuizQuestion' : answering ? 'studyCheck' : 'studyNext')) fail('Wrong primary action for exercise state');
      if (state.view === 'lesson' && label.endsWith(':initial') && !action?.disabled) fail('Can check an empty answer');
      if (!label.endsWith(':initial') && action?.disabled) fail('Cannot check or continue an answered exercise');
    }
    for (const button of shell.querySelectorAll('.mz-study-foot button')) {
      const box = button.getBoundingClientRect();
      if (box.left < 0 || box.right > innerWidth + 1 || box.bottom > innerHeight + 1 || box.height < 44) fail('Footer action is clipped or too small');
    }
    totals.states++;
    if (totals.states % 4 === 0) {
      result.textContent = JSON.stringify(totals);
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  };
  try {
    const fonts = params.has('font') ? [params.get('font')] : params.has('full') ? ['naskh', 'traditional', 'uthmani'] : ['naskh'];
    const scales = params.has('scale') ? [Number(params.get('scale'))] : params.has('full') ? [85, 100, 130] : [100, 130];
    for (const font of fonts) for (const scale of scales) {
      Object.assign(state, { lessonTextScale: scale, uiTextScale: scale === 130 ? 130 : 100, arabicFace: font });
      document.documentElement.style.setProperty('--lesson-text-scale', String(scale / 100));
      document.documentElement.style.setProperty('--ui-text-scale', String(state.uiTextScale / 100));
      document.documentElement.style.setProperty('--font-ar', FACES[font].body);
      document.documentElement.dataset.arabicFace = font;
      state.view = 'lesson';
      for (const [index, step] of session.steps.entries()) {
        if (params.has('teaching') && step.kind !== 'teach') continue;
        if (params.has('step') && params.get('step') !== step.id) continue;
        session.stepIndex = index;
        state.exStates = {};
        await inspect(`${step.id}:initial`, scale, font);
        if (step.kind === 'teach' && !foundationPlan(lesson)) {
          const normalize = text => text.replace(/[\u2067\u2069]/g, '').replace(/\s*\u2014\s*/g, '; ').replace(/\s+/g, ' ').trim();
          for (const li of step.lineIndices) {
            const line = lesson.concepts[step.conceptIndex].lines[li];
            const original = document.createElement('div');
            original.innerHTML = WORD_COPY[step.conceptIndex]?.[li] || line.html || line.box.lines.join(' ');
            const output = root.querySelector(`[data-source-line="${step.conceptIndex}:${li}"]`);
            if (!normalize(output.innerText).includes(normalize(original.textContent))) totals.failures.push({ label: step.id, reason: `Original source line ${li} changed` });
          }
        }
        if (step.kind === 'teach' && foundationPlan(lesson)) {
          const normalize = text => text.replace(/\s*\u2014\s*/g, '; ').replace(/\s+/g, ' ').trim();
          const examples = foundationPlan(lesson).exampleGroups?.[`${step.conceptIndex}:${step.foundationIndex}`];
          if (examples) {
            const shown = [...root.querySelectorAll('[data-required-examples] li')];
            if (shown.length !== examples.items.length || examples.items.some((item, i) => !normalize(shown[i]?.innerText || '').includes(normalize(Array.isArray(item) ? item[0] : item)))) totals.failures.push({ label: step.id, reason: 'Required example family is missing or hidden' });
          }
          const refs = foundationPlan(lesson).concepts[step.conceptIndex][step.foundationIndex].refs;
          for (const ref of refs) {
            const { line, part } = sourceRef(ref), expected = document.createElement('div');
            expected.innerHTML = foundationLineHtml(lesson, step.conceptIndex, ref);
            const output = root.querySelector('[data-source-line="' + step.conceptIndex + ':' + line + '"]' + (part == null ? '' : '[data-source-part="' + part + '"]'));
            if (!output || normalize(output.textContent) !== normalize(expected.textContent)) totals.failures.push({ label: step.id, reason: 'Missing source block or row: ' + line });
            if (output && !output.getClientRects().length) totals.failures.push({ label: step.id, reason: 'Source block is hidden: ' + line });
          }
        }
        if (['check', 'analysis', 'practice'].includes(step.kind)) {
          const item = nativeItem(lesson, step), itemKey = nativeItemKey(mod, lesson, step);
          const wrong = step.kind === 'analysis' ? item.labels.map(label => item.options.filter(value => value !== label).reduce((longest, value) => value.length > longest.length ? value : longest, '')) : (item.correct + 1) % item.options.length;
          const record = step.kind === 'analysis' ? { response: wrong, originalResponse: wrong, correct: false } : { selected: wrong, firstSelected: wrong };
          state.exStates[itemKey] = { ...record, hintShown: true };
          await inspect(`${step.id}:hint`, scale, font);
          state.exStates[itemKey].submitted = true;
          await inspect(`${step.id}:wrong`, scale, font);
          state.exStates[itemKey].correcting = true;
          await inspect(`${step.id}:correction`, scale, font);
          state.exStates[itemKey].correcting = false;
          state.exStates[itemKey].corrected = true;
          if (step.kind === 'analysis') state.exStates[itemKey].response = [...item.labels];
          else state.exStates[itemKey].selected = item.correct;
          await inspect(`${step.id}:corrected`, scale, font);
          state.exStates[itemKey] = step.kind === 'analysis' ? { response: [...item.labels], originalResponse: [...item.labels], correct: true, submitted: true } : { selected: item.correct, firstSelected: item.correct, submitted: true };
          await inspect(`${step.id}:correct`, scale, font);
        }
      }
      state.view = 'quiz';
      state.quizShowResult = false;
      state.quizOptionOrder = {};
      for (const [index, item] of lesson.quiz.entries()) {
        if (params.has('teaching')) continue;
        if (params.has('step') && params.get('step') !== `quiz:${index}`) continue;
        Object.assign(state, { quizIndex: index, quizRevealed: false, quizSelected: (item.correct + 1) % item.options.length, quizCorrection: null });
        state.quizOptionOrder[index] = item.options.map((_, i) => i);
        await inspect(`quiz:${index}:initial`, scale, font);
        state.quizRevealed = true;
        await inspect(`quiz:${index}:wrong`, scale, font);
        state.quizCorrection = { active: true, selected: item.correct };
        await inspect(`quiz:${index}:correction`, scale, font);
      }
      result.textContent = JSON.stringify(totals);
      await new Promise(resolve => setTimeout(resolve, 0));
    }
    if (!totals.states) totals.failures.push({ reason: 'No matching lesson states were tested. Check the step and phase filters.' });
    result.dataset.status = totals.failures.length ? 'failed' : 'passed';
  } catch (error) { totals.failures.push({ reason: error.stack }); result.dataset.status = 'failed'; }
  result.textContent = JSON.stringify(totals);
  run.disabled = false;
  parent.postMessage({ type: 'nahw-layout-result', totals, status: result.dataset.status }, location.origin);
});
if (params.has('auto')) run.click();

// Browser-only verification. No progress is written and no grading API is called.
import { createInitialState } from '../js/state.js';
import { render, FACES } from '../js/render.js';
import { ALL_SESSIONS as LITERATURE_LESSONS, loadLiteratureLesson } from '../content-lit/learning/index.js';
import { createLiteratureRun, currentLiteratureStep, updateLiteratureRun } from '../js/literature/engine.js';
import { fitMobilePages } from '../js/learning/mobile-pages.js';
import { prepareExerciseFeedback, mountFeedbackSheet } from '../js/learning/feedback-sheet.js';
const root = document.querySelector('#root'), result = document.querySelector('#result');
const params = new URLSearchParams(location.search), scale = Number(params.get('scale')) || 1, font = params.get('font') || 'traditional';
document.documentElement.style.setProperty('--font-ar', FACES[font].body);
for (const key of ['lesson', 'ui']) document.documentElement.style.setProperty(`--${key}-text-scale`, String(scale));
const runLayoutCheck = async () => {
  result.dataset.status = 'running'; document.querySelector('#run').disabled = true;
  const state = await createInitialState();
  Object.assign(state, { view: 'litLesson', literature: { version: 1, runs: {} }, completed: {}, litChapterPreviewId: null });
  const totals = { viewport: [innerWidth, innerHeight], scale, font, states: 0, mobilePages: 0, normalOverflow: [], supportedOverflow: [], failures: [] };
  let serial = 0, time = Date.now();
  const change = (lesson, run, action, value) => updateLiteratureRun(lesson, run, action, value, ++time, `attempt-${++serial}`);
  const check = async (lesson, run, label, support = false) => {
    state.literature.runs[run.id] = run;
    root.innerHTML = render(state, []);
    if (!totals.states) await document.fonts.ready;
    const feedback = prepareExerciseFeedback(root);
    const mobile = fitMobilePages(root);
    if (mobile && !mobile.fits) totals.failures.push({lesson:lesson.id,label,reason:'mobile pagination fallback',detail:mobile.reason});
    if (mobile?.fits) {
      for (let index=0;index<mobile.count;index++) {
        const page=fitMobilePages(root,{index});
        totals.mobilePages++;
        if(!page.fits)totals.failures.push({lesson:lesson.id,label,index,reason:'mobile page does not fit'});
        for (const el of root.querySelectorAll('.la-source, .la-option, .la-placed')) {
          if(el.scrollWidth>el.clientWidth+1)totals.failures.push({lesson:lesson.id,label,index,reason:'clipped Arabic on mobile page'});
        }
      }
    }
    mountFeedbackSheet(root,feedback,{open:true});
    const scroller = root.querySelector('.main-content');
    if (scroller.scrollWidth > scroller.clientWidth + 1 || document.documentElement.scrollWidth > innerWidth + 1) totals.failures.push({ lesson: lesson.id, label, reason: 'horizontal overflow' });
    if (scroller.scrollHeight > scroller.clientHeight + 1) (support ? totals.supportedOverflow : totals.normalOverflow).push({ lesson: lesson.id, label, excess: scroller.scrollHeight - scroller.clientHeight });
    for (const el of root.querySelectorAll('.la-source, .la-option, .la-placed')) {
      if (el.scrollWidth > el.clientWidth + 1) totals.failures.push({ lesson: lesson.id, label, reason: 'clipped Arabic' });
    }
    totals.states++;
  };
  try {
    for (const definition of LITERATURE_LESSONS) {
      const lesson = await loadLiteratureLesson(definition.id);
      state.literatureLessonId = lesson.id;
      let run = createLiteratureRun(lesson, `layout-${lesson.id}`, ++time);
      while (currentLiteratureStep(lesson, run).step) {
        const { step } = currentLiteratureStep(lesson, run);
        await check(lesson, run, step.id);
        if (step.type === 'orientation' || step.type === 'clean') { run = change(lesson, run, 'acknowledge', step.type === 'clean' ? 'independent' : 'ready'); continue; }
        if (step.phase === 'decode') {
          run = change(lesson, run, 'reveal');
          await check(lesson, run, 'decode-options');
          let helped = run;
          for (let h = 0; h < 6; h++) { helped = change(lesson, helped, 'help'); await check(lesson, helped, `hint-${h + 1}`, true); }
        }
        if(step.type==='typed_recall')run=change(lesson,run,'text',step.answer);
        else for (const value of Array.isArray(step.answer) ? step.answer : [step.answer]) run = change(lesson, run, 'select', value);
        await check(lesson, run, `${step.id}-selected`);
        run = change(lesson, run, 'check');
        await check(lesson, run, `${step.id}-feedback`, true);
        run = change(lesson, run, 'next');
      }
      await check(lesson, run, 'complete', true);
      result.textContent = JSON.stringify(totals);
      await new Promise(resolve => requestAnimationFrame(resolve));
    }
    result.dataset.status = 'complete'; result.textContent = JSON.stringify(totals, null, 2);
  } catch (error) { result.dataset.status = 'error'; result.textContent = error.stack; }
};
document.querySelector('#run').addEventListener('click', runLayoutCheck);
if(params.has('auto'))runLayoutCheck();

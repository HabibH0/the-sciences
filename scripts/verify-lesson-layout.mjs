// Browser-only geometry checks. Open /scripts/verify-lesson-layout.html in
// the local dev server. No progress is saved and no grading API is called.
import { COURSES, setActiveCourse } from '../content/index.js';
import { createInitialState } from '../js/state.js';
import { render, FACES } from '../js/render.js';
import { createStudySession, studyKey } from '../js/learning/study.js';
import { fitLessonPages } from '../js/learning/lesson-pages.js';
import { sarfTableVisual } from '../js/learning/sarf.js';

const root = document.querySelector('#root'), result = document.querySelector('#result');
const params = new URLSearchParams(location.search);
const scale = Number(params.get('scale')) || 1;
const font = params.get('font') || 'traditional';
const tokens = element => {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT), text = [];
  while (walker.nextNode()) text.push(walker.currentNode.textContent);
  return text.join(' ').trim().split(/\s+/).filter(Boolean);
};
const isSubsequence = (source, displayed) => {
  let i = 0;
  for (const token of displayed) if (token === source[i]) i++;
  return i;
};
document.documentElement.style.setProperty('--font-ar', FACES[font].body);
document.documentElement.dataset.arabicFace = font;
for (const key of ['lesson', 'ui']) document.documentElement.style.setProperty(`--${key}-text-scale`, String(scale));

document.querySelector('#run').addEventListener('click', async () => {
  document.querySelector('#run').disabled = true;
  result.dataset.status = 'running';
  const state = await createInitialState();
  Object.assign(state, { view: 'lesson', forceUnlockAll: true, studySessions: {}, mizanCourses: {}, lessonTextScale: scale * 100, uiTextScale: scale * 100 });
  const totals = { viewport: [innerWidth, innerHeight], scale, font, lessons: 0, steps: 0, pages: 0, failures: [] };
  try {
    for (const course of COURSES.filter(c => params.get('course') === 'all' || c.id === (params.get('course') || 'adv-nahw'))) {
      await setActiveCourse(course.id);
      state.courseId = course.id;
      for (const mod of course.modules) for (const lesson of mod.lessons) {
        if (params.has('lesson') && params.get('lesson') !== `${mod.id}/${lesson.id}`) continue;
        Object.assign(state, { moduleId: mod.id, lessonId: lesson.id });
        const key = studyKey(course.id, mod.id, lesson.id);
        const session = createStudySession(state, mod, lesson, '2026-09-08T00:00:00Z', key);
        state.studySessions[key] = session;
        for (let si = 0; si < session.steps.length; si++) {
          if (!['teach', 'summary'].includes(session.steps[si].kind)) continue;
          if (params.has('step') && params.get('step') !== session.steps[si].id) continue;
          session.stepIndex = si;
          const step = session.steps[si];
          const table = lesson.learningModel === 'mizan-sarf' && lesson.concepts[step.conceptIndex]?.lines[step.tableIndex]?.table;
          const variants = params.has('variants') && table && sarfTableVisual(table) ? table.rows.length : 1;
          for (let selected = 0; selected < variants; selected++) {
            session.visualState = { [step.id]: { selected } };
            if (params.has('details')) session.readingDetails = { [session.steps[si].id]: true };
            root.innerHTML = render(state, course.modules);
            const original = root.querySelector('.mz-teaching');
            if (!original) continue;
            if (!totals.steps) await document.fonts.ready;
            const originalText = tokens(original);
            const layout = fitLessonPages(root);
            const fail = reason => totals.failures.push({ key, step: session.steps[si].id, selected, reason });
            if (!layout?.fits) fail('No fitting layout');
            const displayed = [];
            for (let page = 0; page < (layout?.count || 1); page++) {
              fitLessonPages(root, page);
              const body = root.querySelector('.mz-study-body'), article = body.firstElementChild;
              const scroller = root.querySelector('.main-content');
              const footer = root.querySelector('.mz-study-foot').getBoundingClientRect();
              if (scroller.scrollHeight > scroller.clientHeight + 1 || footer.bottom > innerHeight + 1) fail(`Page ${page + 1}: document overflow`);
              if (article.getBoundingClientRect().height > body.clientHeight + 1) fail(`Page ${page + 1}: clipped content`);
              if (document.documentElement.scrollWidth > innerWidth + 1) fail(`Page ${page + 1}: horizontal overflow`);
              displayed.push(...tokens(article));
              totals.pages++;
            }
            const covered = isSubsequence(originalText, displayed);
            if (covered !== originalText.length) {
              fail('Source text missing or reordered');
              if (!totals.firstTextFailure) totals.firstTextFailure = { source: originalText, displayed, covered };
            }
            totals.steps++;
          }
        }
        totals.lessons++;
        result.textContent = JSON.stringify(totals);
        // Yield between lessons so progress and the browser remain usable.
        await new Promise(resolve => setTimeout(resolve, 0));
      }
    }
    result.dataset.status = totals.failures.length ? 'failed' : 'passed';
    result.textContent = JSON.stringify(totals);
  } catch (error) {
    result.dataset.status = 'failed';
    result.textContent = JSON.stringify({ ...totals, error: error.stack });
  }
  document.querySelector('#run').disabled = false;
});
document.querySelector('#run').disabled = false;
result.textContent = 'Ready';

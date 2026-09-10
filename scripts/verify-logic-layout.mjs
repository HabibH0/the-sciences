// Render-only inspection in an isolated browser. No saves or learner actions.
import { MODULES } from '../content-mantiq/index.js';
import { COURSE } from '../content-mantiq/course.js';
import { VISUALS } from '../content-mantiq/visuals.js';
import { setActiveCourse } from '../content/index.js';
import { createInitialState } from '../js/state.js';
import { render } from '../js/render.js';
import { createStudySession, studyKey } from '../js/learning/study.js';
import { learningPunctuation, fitIdeaCard } from '../js/learning/fit-idea-card.js';
import { initialResponse } from '../js/learning/exercises.js';
import { fitMobilePages } from '../js/learning/mobile-pages.js';
import { fitLessonPages } from '../js/learning/lesson-pages.js';
import { prepareExerciseFeedback } from '../js/learning/feedback-sheet.js';
await setActiveCourse('mantiq');
const state = await createInitialState();
Object.assign(state, { courseId: 'mantiq', view: 'lesson', forceUnlockAll: true, studySessions: {}, studyNotesOpen: false, storageError: null });
const root = document.querySelector('#root');
const teaching = Object.entries(COURSE.lessons).flatMap(([lesson, l]) => l.learning_steps.filter(s => s.kind === 'teach').map(s => ({ lesson, step: s.id, visual: s.visual })));
const sessions = MODULES.flatMap(mod => mod.lessons.map(lesson => ({ mod, lesson, session: createStudySession(state, mod, lesson, '2026-09-10T00:00:00Z', 'render-only') })));
async function show({ lesson: lessonId = teaching[0].lesson, step = 'section_0', itemId, draft, layout = {}, visual, font = 'naskh', scale = 100 }) {
  const entry = sessions.find(e => e.lesson.id === lessonId), { mod, lesson, session } = entry;
  Object.assign(state, { moduleId: mod.id, lessonId, lessonTextScale: scale, arabicFace: font });
  document.documentElement.dataset.arabicFace = font;
  document.documentElement.style.setProperty('--lesson-text-scale', scale / 100);
  state.studySessions[studyKey('mantiq', mod.id, lesson.id)] = session;
  session.steps = [itemId ? { kind: 'exercise', itemId, guided: true } : { kind: 'teach', stepId: step }];
  session.stepIndex = 0;
  session.logicLayout = { [itemId || step]: layout };
  session.visualState = { [step]: visual };
  session.draft = itemId ? { itemId, response: initialResponse(COURSE.items.find(i => i.id === itemId)), ...draft } : null;
  root.innerHTML = render(state, MODULES);
  learningPunctuation(root);
  await document.fonts.ready;
  const report = inspect();
  const normalize = text => text.replace(/\s*\u2014\s*/g, '; ').replace(/[\u2066-\u2069]/g, '').replace(/\s+/g, ' ').trim();
  if (!itemId) {
    const original = document.createElement('div');
    original.innerHTML = COURSE.lessons[lessonId].learning_steps.find(s => s.id === step).html;
    const copy = root.querySelector('.mz-teaching-copy').cloneNode(true);
    copy.querySelectorAll('.mz-logic-table-records').forEach(n => n.remove());
    if (!normalize(copy.textContent).includes(normalize(original.textContent))) report.failures.push('Original teaching wording changed');
  } else if (!draft?.grade || draft.correcting) {
    const item = COURSE.items.find(i => i.id === itemId);
    if (!draft?.error && !['hint', 'correctionFeedback'].includes(layout.view)) {
      if (item.options.length && item.fields.length === 1 && item.fields[0].kind !== 'list') {
        const controls = root.querySelectorAll('[data-action="logicChoice"]');
        const choices = root.querySelector('[data-logic-choice-select]');
        if (choices ? choices.options.length !== item.options.length + 1 : controls.length !== item.options.length) report.failures.push('Answer choices missing');
      }
      if (!item.reflection && item.fields.length > 1 && item.interaction !== 'diagram_select_or_edit') for (const [i, field] of item.fields.entries()) {
        if (field.kind !== 'list' && !root.querySelector(`[data-logic-field="${i}"]`)) report.failures.push(`Original field index ${i} lost`);
      }
    }
  }
  return report;
}
function inspect() {
  const shell = root.querySelector('.mz-study'), body = shell?.querySelector('.mz-study-body');
  if (!body) return { failures: ['No lesson rendered'] };
  const bounds = body.getBoundingClientRect(), failures = [];
  const before = body.innerHTML;
  if (fitMobilePages(root, { index: 99 }) || fitLessonPages(root, 99) || prepareExerciseFeedback(root) || before !== body.innerHTML) failures.push('Lesson or feedback was automatically paginated');
  if (!shell.querySelector('[role="progressbar"]') || !shell.querySelector('.mz-word-step-count')) failures.push('Progress indicator missing');
  if (shell.querySelector('[data-action="setLessonTextScale"]')) failures.push('Adjustable typography control');
  if (getComputedStyle(shell).getPropertyValue('--lesson-text-scale').trim() !== '1') failures.push('Saved preference changes lesson typography');
  if (shell.textContent.includes('\u2014')) failures.push('Em dash in learning text');
  if (document.documentElement.scrollHeight > innerHeight + 1) failures.push('Page scrolls vertically');
  if (document.documentElement.scrollWidth > innerWidth + 1) failures.push('Page scrolls horizontally');
  const visible = node => node.getClientRects().length && getComputedStyle(node).visibility !== 'hidden' && !node.closest('svg');
  const overflow = [];
  for (const node of body.querySelectorAll('*')) {
    if (!visible(node)) continue;
    const rect = node.getBoundingClientRect();
    if (rect.bottom > bounds.bottom + 2 || rect.top < bounds.top - 2 || rect.left < bounds.left - 2 || rect.right > bounds.right + 2 || (node.clientHeight > 0 && node.scrollHeight > node.clientHeight + 2 && getComputedStyle(node).overflowY !== 'visible')) overflow.push({ tag: node.tagName, cls: node.className, text: node.textContent.slice(0, 60), bottom: Math.round(rect.bottom), height: node.clientHeight, scroll: node.scrollHeight });
  }
  if (overflow.length) failures.push('Card content overflows');
  const foot = shell.querySelector('.mz-study-foot')?.getBoundingClientRect();
  if (!foot || foot.bottom > innerHeight + 1) failures.push('Navigation outside viewport');
  for (const node of shell.querySelectorAll('.mz-study-foot button')) if (visible(node)) {
    const rect = node.getBoundingClientRect();
    if (rect.left < 0 || rect.right > innerWidth + 1) failures.push('Footer action clipped');
  }
  for (const node of body.querySelectorAll('bdi, .ar')) if (visible(node) && getComputedStyle(node).fontSize !== getComputedStyle(node.parentElement).fontSize) failures.push('Inline Arabic size mismatch');
  for (const node of body.querySelectorAll('th, td')) if (visible(node) && node.scrollWidth > node.clientWidth + 1) failures.push(`Table cell text overflows: ${node.textContent}`);
  for (const node of body.querySelectorAll('.visual-categorical .logic-svg')) if (node.getClientRects().length && node.getBoundingClientRect().height < 100) failures.push('Diagram too small to inspect');
  return { failures, overflow: overflow.slice(0, 14), fit: fitIdeaCard(root), body: [Math.round(bounds.width), Math.round(bounds.height)], typography: Object.fromEntries(['h2', '.mz-prose', '.mz-choices .mz-choice', '.mz-diagram-choices .mz-choice', '.mz-feedback > p'].map(s => [s, shell.querySelector(s) ? getComputedStyle(shell.querySelector(s)).fontSize : null])) };
}
window.logicAudit = { show, inspect, teaching, items: COURSE.items, visuals: VISUALS, sessions: sessions.map(e => ({ lesson: e.lesson.id, steps: e.session.steps })) };

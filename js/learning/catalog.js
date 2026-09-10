import { guidedGrammar } from './native.js';
import { VISIBLE_COURSES as COURSES, isCourseUnlocked, isModuleUnlocked, isLessonUnlocked } from '../../content/index.js';
import { esc, escAttr, escBidi } from '../html.js';
import { EMBLEMS } from './emblems.js';
import { masterySummary } from './mastery.js';
import { usesStudyCatalog, studyCourseHtml, studyModuleHtml } from './catalog-study.js';

export const brandMark = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18M7 21h10M3 7h18M5 7l-4 8h8L5 7Zm14 0-4 8h8l-4-8Z"/><circle cx="12" cy="5" r="2" fill="currentColor" stroke="none"/></svg>';
const logicSummaries = { 'logic-terms': 'Definitions, meaning and the relationships between terms.', 'logic-propositions': 'The structure, truth and forms of propositions.', 'logic-inference': 'Direct inference, syllogisms, deduction, induction and analogy.', 'logic-informal_fallacies': 'Recognise flaws in arguments and evaluate their strength.' };
const arrow = '<span aria-hidden="true">→</span>';
const counts = (course, state) => {
  const lessons = course.modules.flatMap(m => m.lessons.map(l => ({ m, l })));
  return { total: lessons.length, done: lessons.filter(({ m, l }) => state.completed[m.id]?.[l.id]).length };
};
const meter = (done, total) => `<div class="mz-meter" role="progressbar" aria-label="Lessons completed" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}"><span style="width:${total ? done / total * 100 : 0}%"></span></div>`;

export function catalogHtml(state) {
  const totalDone = COURSES.reduce((n, c) => n + counts(c, state).done, 0);
  return `<section class="mz-catalog">
    <header class="mz-page-heading"><div><p class="mz-eyebrow">YOUR STUDY SPACE</p><h1>My learning</h1><p>Choose a course. Take the next step.</p></div><div class="mz-study-count"><strong>${totalDone}</strong><span>lessons completed</span></div></header>
    <div class="mz-course-grid">${COURSES.map((c, i) => {
      const { total, done } = counts(c, state);
      const unlocked = isCourseUnlocked(c, state.completed, state.unlockedCourses, state.forceUnlockAll);
      const level = c.id === 'mantiq' ? 'Foundations' : c.requiresCourseId ? 'Advanced' : 'Introductory';
      return `<article class="mz-course-card${unlocked ? '' : ' is-locked'}">
        <div class="mz-course-art">${EMBLEMS[{ mantiq: 2, 'adv-nahw': 3, 'adv-sarf': 0 }[c.id] ?? i % 4]}<bdi lang="ar" dir="rtl">${esc(c.arabicName)}</bdi></div>
        <div class="mz-course-content"><p class="mz-eyebrow">${level} · ${total} lessons</p><h2>${esc(c.name)}</h2><p class="mz-course-description">${escBidi(c.blurb)}</p>
          <div class="mz-course-progress"><span>${done ? `${done} of ${total} lessons completed` : 'Ready when you are'}</span><span>${Math.round(done / total * 100)}%</span></div>${meter(done, total)}
          <a class="btn ${unlocked ? 'btn-primary' : 'btn-secondary'} mz-course-open" href="#/course/${escAttr(c.id)}" data-action="${unlocked ? 'chooseCourse' : 'openUnlockPrompt'}" data-course-id="${escAttr(c.id)}" data-target-type="course" data-target-id="${escAttr(c.id)}">${unlocked ? done === total ? 'Revisit course' : done ? 'Continue learning' : 'Explore course' : 'View prerequisites'} ${arrow}</a>
        </div></article>`;
    }).join('')}</div>
    <a class="mz-library-link" href="#/library" data-action="openLibrary"><div><strong>Read in Arabic</strong><span>Explore the reading library and practise with passages.</span></div>${arrow}</a>
  </section>`;
}

export function courseOverviewHtml(state) {
  const course = COURSES.find(c => c.id === state.courseId) || COURSES[0];
  if (usesStudyCatalog(course)) return studyCourseHtml(state, course);
  const { done, total } = counts(course, state);
  const mastery = masterySummary(state, course.id);
  const understanding = `<section class="mz-understanding" aria-label="Your understanding"><div><strong>${mastery.introduced}<small> / ${mastery.total}</small></strong><span>concepts introduced</span></div><div><strong>${mastery.competent}</strong><span>competent</span></div><div><strong>${mastery.mastered}</strong><span>mastered</span></div><p>Completing lessons builds coverage. Independent practice across different examples and days builds mastery.</p></section>`;
  const next = course.modules.flatMap(m => m.lessons.map(l => ({ m, l }))).find(({ m, l }) => !state.completed[m.id]?.[l.id]
    && isLessonUnlocked(m.id, l.id, state.completed, state.unlockedModules, state.forceUnlockAll));
  return `<section class="mz-course-page">
    <a class="mz-back" href="#/" data-action="openCatalog">← All courses</a>
    <header class="mz-course-heading"><div><p class="mz-eyebrow">${course.id === 'mantiq' ? 'CLASSICAL LOGIC' : 'ARABIC STUDIES'}</p><h1>${esc(course.name)}</h1><p>${escBidi(course.blurb)}</p></div><bdi lang="ar" dir="rtl">${esc(course.arabicName)}</bdi></header>
    <div class="mz-course-dashboard"><section class="mz-next-lesson"><div><p class="mz-eyebrow">${next ? done ? 'YOUR NEXT STEP' : 'BEGIN HERE' : 'COURSE COMPLETE'}</p><h2>${next ? escBidi(next.l.title) : 'Keep your knowledge fresh.'}</h2><p>${next ? escBidi(next.l.subtitle || next.m.title) : 'Return to review for spaced practice.'}</p></div>${next ? `<button class="btn btn-primary" data-action="continueLesson" data-module-id="${escAttr(next.m.id)}" data-lesson-id="${escAttr(next.l.id)}">${done ? 'Continue lesson' : 'Start learning'} ${arrow}</button>` : '<button class="btn btn-primary" data-action="openSchedule">Open review →</button>'}</section>
      <aside class="mz-course-stats"><strong>${done}<small> / ${total}</small></strong><span>lessons completed</span>${meter(done, total)}<button class="mz-text-button" data-action="openSchedule">Review this course →</button></aside></div>
    ${understanding}<div class="mz-path-heading"><h2>Learning path</h2><span>${course.modules.length} ${course.id === 'mantiq' ? 'units' : 'modules'}</span></div>
    <div class="mz-learning-path">${course.modules.map((m, i) => {
      const complete = m.lessons.filter(l => state.completed[m.id]?.[l.id]).length;
      const unlocked = isModuleUnlocked(m.id, state.completed, state.unlockedModules, state.forceUnlockAll);
      return `<button class="mz-unit${next?.m.id === m.id ? ' is-current' : ''}${complete === m.lessons.length ? ' is-complete' : ''}" data-action="${unlocked ? 'openModule' : 'openUnlockPrompt'}" data-module-id="${escAttr(m.id)}" data-target-type="module" data-target-id="${escAttr(m.id)}"><span class="mz-unit-number">${complete === m.lessons.length ? '✓' : i + 1}</span><span class="mz-unit-body"><strong${m.language === 'en' ? '' : ' lang="ar" dir="rtl"'}>${esc(m.title)}</strong><span>${m.blurb ? escBidi(logicSummaries[m.id] || m.blurb) : `${m.lessons.length} lessons`}</span></span><span class="mz-unit-status">${!unlocked ? 'Locked' : complete ? `${complete} / ${m.lessons.length}` : `${m.lessons.length} lessons`}</span>${arrow}</button>`;
    }).join('')}</div>
  </section>`;
}

export function moduleLessonsHtml(state, mod, practicePanel, pager) {
  const course = COURSES.find(c => c.id === state.courseId);
  if (usesStudyCatalog(course)) return studyModuleHtml(state, course, mod, practicePanel, pager);
  const done = mod.lessons.filter(l => state.completed[mod.id]?.[l.id]).length;
  const logic = mod.language === 'en';
  const current = mod.lessons.find(l => !state.completed[mod.id]?.[l.id]
    && isLessonUnlocked(mod.id, l.id, state.completed, state.unlockedModules, state.forceUnlockAll));
  return `<section class="mz-module-page"><a class="mz-back" href="#/course/${escAttr(course.id)}" data-action="openDashboard">← ${esc(course.name)}</a>
    <header class="mz-course-heading"><div><p class="mz-eyebrow">${logic ? 'UNIT' : 'MODULE'} ${course.modules.findIndex(m => m.id === mod.id) + 1}</p><h1>${escBidi(mod.title)}</h1><p>${logic ? 'Learn each idea, work through examples, then put it into practice.' : escBidi(mod.blurb)}</p></div><div class="mz-module-count"><strong>${done} / ${mod.lessons.length}</strong><span>lessons completed</span></div></header>
    ${meter(done, mod.lessons.length)}
    <div class="mz-path-heading"><h2>Lessons</h2><button class="btn btn-secondary" data-action="openPractice" ${!done && !state.forceUnlockAll ? 'disabled title="Complete a lesson to unlock practice"' : ''}>Practice this ${logic ? 'unit' : 'module'}</button></div>
    ${practicePanel ? `<div class="mz-module-practice">${practicePanel}</div>` : ''}
    <div class="mz-learning-path">${mod.lessons.map((lesson, index) => {
      const complete = !!state.completed[mod.id]?.[lesson.id];
      const unlocked = isLessonUnlocked(mod.id, lesson.id, state.completed, state.unlockedModules, state.forceUnlockAll);
      const score = state.quizScores[mod.id]?.[lesson.id];
      const key = `${state.courseId}/${mod.id}/${lesson.id}`;
      const started = !!state.studySessions?.[key];
      const detail = complete ? `${logic ? 'Practice' : 'Quiz'} ${score ? `${score.correct} / ${score.total}` : 'complete'}` : `${lesson.concepts.length} concepts · Guided and independent practice${logic ? '' : ' · Quiz'}`;
      return `<button class="mz-unit${complete ? ' is-complete' : ''}${current?.id === lesson.id ? ' is-current' : ''}" data-action="openLessonPreview" data-lesson-id="${escAttr(lesson.id)}" ${unlocked ? '' : 'disabled'}><span class="mz-unit-number">${complete ? '✓' : index + 1}</span><span class="mz-unit-body"><strong>${escBidi(lesson.title)}</strong><span>${esc(detail)}</span></span><span class="mz-unit-status">${complete ? 'Revisit' : !unlocked ? 'Locked' : started ? 'Continue' : 'Start'}</span>${arrow}</button>`;
    }).join('')}</div>${pager}${done ? `<button class="module-reset" data-action="openResetModulePrompt" data-module-id="${escAttr(mod.id)}">Reset this ${logic ? 'unit' : 'module'}’s progress</button>` : ''}</section>`;
}

export function completedLessonHtml(state, mod, lesson) {
  const score = state.quizScores[mod.id]?.[lesson.id];
  const logic = lesson.learningModel === 'mizan';
  const course = COURSES.find(c => c.id === state.courseId);
  const all = course.modules.flatMap(m => m.lessons.map(l => ({ m, l })));
  const next = all[all.findIndex(({ m, l }) => m.id === mod.id && l.id === lesson.id) + 1];
  return `<section class="mz-completed"><span class="mz-completed-mark" aria-hidden="true">✓</span><p class="mz-eyebrow">LESSON COMPLETE</p><h1>${escBidi(lesson.title)}</h1><p>${logic ? 'You have worked through the lesson. Review will help you build lasting understanding.' : guidedGrammar(lesson) ? 'You have finished the lesson and passed its check. Review will help you make this knowledge last.' : 'You have passed the quiz. Keep practising to make this knowledge last.'}</p>
    ${score ? `<div class="mz-result-score"><strong>${score.correct} <small>/ ${score.total}</small></strong><span>${logic ? 'correct on the first attempt' : guidedGrammar(lesson) ? 'correct on the lesson check' : 'correct quiz answers'}</span></div>` : ''}
    <div class="mz-completed-actions">${state.pathActive ? '<button class="btn btn-primary" data-action="backToPath">Continue on My Path →</button>' : next ? `<button class="btn btn-primary" data-action="continueLesson" data-module-id="${escAttr(next.m.id)}" data-lesson-id="${escAttr(next.l.id)}">Next: ${escBidi(next.l.title)} →</button>` : '<button class="btn btn-primary" data-action="openCatalog">Explore your courses →</button>'}<button class="btn btn-secondary" data-action="openSchedule">Review this course</button><button class="mz-text-button" data-action="openModule" data-module-id="${escAttr(mod.id)}">Back to lessons</button></div></section>`;
}

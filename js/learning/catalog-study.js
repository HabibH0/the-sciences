import { isModuleUnlocked, isLessonUnlocked } from '../../content/index.js';
import { esc, escAttr, escBidi } from '../html.js';
import { masterySummary } from './mastery.js';

// Course navigation only. Lesson players, completion and mastery keep their
// original sources and handlers. Disclosure state is ephemeral UI state.
export const usesStudyCatalog = course => ['adv-nahw', 'adv-sarf', 'mantiq'].includes(course?.id);
const copy = text => escBidi(String(text || '').replace(/\s*\u2014\s*/g, '; '));
const arrow = '<span aria-hidden="true">→</span>';
const book = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M16 8c-4-3-8-3-12-2v19c4-1 8-1 12 2 4-3 8-3 12-2V6c-4-1-8-1-12 2Zm0 0v19"/><path d="M8 11c2 0 3 .5 4 1M8 16c2 0 3 .5 4 1m8-5c1-.5 2-1 4-1m-4 6c1-.5 2-1 4-1"/></svg>';
const progress = (done, total) => `<div class="mz-hub-meter" role="progressbar" aria-label="Lessons completed" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}"><span style="width:${total ? done / total * 100 : 0}%"></span></div>`;
const sessionFor = (state, course, m, l) => state.studySessions?.[`${course.id}/${m.id}/${l.id}`];
const disclosure = (state, key, initiallyOpen = false) => `data-course-disclosure="${escAttr(key)}"${(state.courseDisclosures?.[key] ?? initiallyOpen) ? ' open' : ''}`;
const title = (value, arabic) => arabic ? `<bdi lang="ar" dir="rtl">${copy(value)}</bdi>` : copy(value);

export function nextStudyLesson(state, course, modules = course.modules) {
  const available = modules.flatMap(m => m.lessons.map(l => ({ m, l, session: sessionFor(state, course, m, l) })))
    .filter(({ m, l }) => !state.completed[m.id]?.[l.id] && isLessonUnlocked(m.id, l.id, state.completed, state.unlockedModules, state.forceUnlockAll));
  // A returning learner resumes their latest unfinished session, even when
  // they have studied out of order. Do not mutate or sort the source course.
  return available.filter(item => item.session).sort((a, b) => String(b.session.updatedAt || '').localeCompare(String(a.session.updatedAt || '')))[0] || available[0] || null;
}

function lessonRows(state, course, mod, current) {
  return `<ol class="mz-hub-lessons">${mod.lessons.map((lesson, index) => {
    const done = !!state.completed[mod.id]?.[lesson.id];
    const unlocked = isLessonUnlocked(mod.id, lesson.id, state.completed, state.unlockedModules, state.forceUnlockAll);
    const started = !!sessionFor(state, course, mod, lesson) || !!state.lessonPos?.[`${mod.id}_${lesson.id}`];
    const active = current?.m.id === mod.id && current.l.id === lesson.id;
    const label = done ? 'Revisit' : !unlocked ? 'Locked' : started ? 'Continue' : 'Start';
    return `<li><button class="mz-hub-lesson${active ? ' is-current' : ''}${done ? ' is-complete' : ''}" data-action="continueLesson" data-module-id="${escAttr(mod.id)}" data-lesson-id="${escAttr(lesson.id)}"${unlocked ? '' : ' disabled'}${active ? ' aria-current="step"' : ''}>
      <span class="mz-hub-lesson-number"${done ? ' aria-label="Completed"' : ' aria-hidden="true"'}>${done ? '✓' : String(index + 1).padStart(2, '0')}</span><span class="mz-hub-lesson-title">${title(lesson.title, mod.language !== 'en')}</span><span class="mz-hub-lesson-action">${label} ${arrow}</span>
    </button></li>`;
  }).join('')}</ol>`;
}

function resumeHtml(state, course, next) {
  if (!next) return `<section class="mz-hub-resume"><span class="mz-hub-book">${book}</span><div class="mz-hub-resume-copy"><p>You’ve finished this course</p><h2>Make a little time for review.</h2></div><button class="btn mz-hub-continue" data-action="openSchedule">Review ${arrow}</button></section>`;
  const started = !!next.session || !!state.lessonPos?.[`${next.m.id}_${next.l.id}`];
  const moduleIndex = course.modules.indexOf(next.m) + 1, lessonIndex = next.m.lessons.indexOf(next.l) + 1;
  return `<section class="mz-hub-resume" aria-label="${started ? 'Continue studying' : 'Your next lesson'}"><span class="mz-hub-book">${book}</span><div class="mz-hub-resume-copy"><p>${started ? 'Pick up where you left off' : 'Your next lesson'}</p><h2>${title(next.l.title, next.m.language !== 'en')}</h2><span>${course.id === 'mantiq' ? 'Unit' : 'Module'} ${moduleIndex} <span aria-hidden="true">·</span> Lesson ${lessonIndex}</span></div><button class="btn mz-hub-continue" data-action="continueLesson" data-module-id="${escAttr(next.m.id)}" data-lesson-id="${escAttr(next.l.id)}">${started ? 'Continue' : 'Start lesson'} ${arrow}</button></section>`;
}

export function studyCourseHtml(state, course) {
  const total = course.modules.reduce((n, m) => n + m.lessons.length, 0);
  const done = course.modules.reduce((n, m) => n + m.lessons.filter(l => state.completed[m.id]?.[l.id]).length, 0);
  const next = nextStudyLesson(state, course);
  const mastery = masterySummary(state, course.id);
  const unit = course.id === 'mantiq' ? 'unit' : 'module';
  return `<section class="mz-course-page mz-hub" data-course-id="${escAttr(course.id)}">
    <a class="mz-hub-back" href="#/" data-action="openCatalog">← All courses</a>
    <header class="mz-hub-heading"><div><h1>${esc(course.name)}</h1><bdi class="mz-hub-arabic-name" lang="ar" dir="rtl">${esc(course.arabicName)}</bdi></div><aside class="mz-hub-statistics" aria-label="Course statistics"><p><strong>${done}</strong> of ${total} lessons completed</p>${progress(done, total)}<dl><div><dt>Concepts introduced</dt><dd>${mastery.introduced}<small> / ${mastery.total}</small></dd></div><div><dt>Competent</dt><dd>${mastery.competent}</dd></div><div><dt>Mastered</dt><dd>${mastery.mastered}</dd></div></dl></aside></header>
    ${resumeHtml(state, course, next)}
    <div class="mz-hub-section-heading"><h2>Explore the course</h2><div class="mz-hub-section-actions"><span>${course.modules.length} ${unit}s</span><button class="mz-text-button" data-action="openSchedule">Review ${arrow}</button></div></div>
    <div class="mz-hub-outline">${course.modules.map((mod, index) => {
      const complete = mod.lessons.filter(l => state.completed[mod.id]?.[l.id]).length;
      const unlocked = isModuleUnlocked(mod.id, state.completed, state.unlockedModules, state.forceUnlockAll);
      const label = complete === mod.lessons.length ? 'Completed' : `${mod.lessons.length} lessons${complete ? ` · ${complete} completed` : ''}`;
      const heading = `<span class="mz-hub-module-number" aria-label="${unit} ${index + 1}">${String(index + 1).padStart(2, '0')}</span><span class="mz-hub-module-title">${title(mod.title, mod.language !== 'en')}</span><span class="mz-hub-module-status">${unlocked ? label : 'Locked'}</span><span class="mz-hub-chevron" aria-hidden="true"></span>`;
      if (!unlocked) return `<button class="mz-hub-module-summary is-locked" data-action="openUnlockPrompt" data-module-id="${escAttr(mod.id)}" data-target-type="module" data-target-id="${escAttr(mod.id)}">${heading}</button>`;
      return `<details class="mz-hub-module${next?.m.id === mod.id ? ' is-current' : ''}" ${disclosure(state, `module/${mod.id}`, next?.m.id === mod.id)}><summary class="mz-hub-module-summary">${heading}</summary>${lessonRows(state, course, mod, next)}<div class="mz-hub-module-tools"><button class="mz-text-button" data-action="openModule" data-module-id="${escAttr(mod.id)}">View ${unit} ${arrow}</button></div></details>`;
    }).join('')}</div>
  </section>`;
}

export function studyModuleHtml(state, course, mod, practicePanel, pager) {
  const done = mod.lessons.filter(l => state.completed[mod.id]?.[l.id]).length;
  const next = nextStudyLesson(state, course, [mod]);
  const unit = mod.language === 'en' ? 'unit' : 'module';
  return `<section class="mz-module-page mz-hub mz-hub-module-page"><a class="mz-hub-back" href="#/course/${escAttr(course.id)}" data-action="openDashboard">← ${esc(course.name)}</a>
    <header class="mz-hub-heading"><div><p class="mz-hub-kicker">${unit} ${course.modules.indexOf(mod) + 1}</p><h1>${title(mod.title, mod.language !== 'en')}</h1></div><div class="mz-hub-progress"><span>${done} of ${mod.lessons.length} lessons completed</span>${progress(done, mod.lessons.length)}</div></header>
    <div class="mz-hub-section-heading"><h2>Lessons</h2><button class="mz-text-button" data-action="openPractice" ${!done && !state.forceUnlockAll ? 'disabled title="Complete a lesson to unlock practice"' : ''}>Practice ${arrow}</button></div>
    ${practicePanel ? `<div class="mz-module-practice">${practicePanel}</div>` : ''}
    <div class="mz-hub-module-lesson-list">${lessonRows(state, course, mod, next)}</div>${pager}${done ? `<button class="module-reset mz-hub-reset" data-action="openResetModulePrompt" data-module-id="${escAttr(mod.id)}">Reset this ${unit}’s progress</button>` : ''}</section>`;
}

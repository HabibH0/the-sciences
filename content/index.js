import { COURSE_LOADERS, COURSE_SHELLS } from './meta.js';

// Every course the app knows about. Every helper below (getModule,
// isModuleUnlocked, getBankPool, totalLessons, ...) resolves against the
// single mutable `MODULES` binding, not a course argument -- setActiveCourse
// reassigns it, and since ES module named imports are live bindings, every
// existing importer (js/render.js, js/main.js) picks up the swap for free.
// Progress dicts (state.completed etc.) are flat, keyed by moduleId first --
// as long as module ids never collide across courses (see each course's own
// id prefixes: 'NN' for annahw, 'f-*' for fstu, 's-*' for sarf, 'as-*' for
// the advanced sarf course), courses' progress can never cross-write, with
// no namespacing needed anywhere else.
// arabicName/blurb are display-only, for the launch screen's course cards
// (see launchHtml in js/render.js) -- nothing in the learning flow itself
// reads them.
//
// Order is display order, not just registration order: the launch screen's
// 2x2 grid (.launch-grid in styles.css) lays these out two-per-row in array
// order, so the two introductory courses come first (row 1) and their
// advanced continuations follow (row 2) -- Nahw's column stays fstu-over-
// annahw, Sarf's column stays sarf-over-sarf-advanced.
export const COURSES = COURSE_SHELLS.map((course) => ({
  ...course,
  modules: course.modules.map((m) => ({
    ...m,
    lessons: m.lessons.map((l) => ({ ...l })),
  })),
}));

const loadedCourses = new Map();
let activeCourseId = COURSES[0].id;

export let MODULES = COURSES[0].modules;

export async function loadCourse(id) {
  const course = COURSES.find((c) => c.id === id) || COURSES[0];
  if (loadedCourses.has(course.id)) return course.modules;
  const loaded = await COURSE_LOADERS[course.id]();
  course.modules = loaded.MODULES;
  loadedCourses.set(course.id, course.modules);
  if (activeCourseId === course.id) MODULES = course.modules;
  return course.modules;
}

export function isCourseLoaded(id) {
  return loadedCourses.has(id);
}

export async function ensureCoursesLoaded(ids) {
  await Promise.all([...new Set(ids)].map((id) => loadCourse(id)));
}

export async function setActiveCourse(id) {
  const course = COURSES.find((c) => c.id === id) || COURSES[0];
  activeCourseId = course.id;
  MODULES = course.modules;
  await loadCourse(course.id);
  MODULES = course.modules;
}

export function setActiveCourseShell(id) {
  const course = COURSES.find((c) => c.id === id) || COURSES[0];
  activeCourseId = course.id;
  MODULES = course.modules;
}

export function getActiveCourseId() {
  return activeCourseId;
}

// Which course a given moduleId belongs to, independent of the mutable
// MODULES binding above -- needed by تركيب rendering (see flattenTarkeebSlots'
// fillBlanks) to tell an annahw item from an fstu one even mid-My-Path, where
// the active course can lag or span both.
export function courseIdForModule(moduleId) {
  const course = COURSES.find((c) => c.modules.some((m) => m.id === moduleId));
  return course ? course.id : null;
}

// Whole-course completion (every module's every lesson) -- distinct from
// isModuleComplete, which only checks one module. Used to gate an advanced
// course behind its introductory counterpart (see requiresCourseId above).
export function isCourseComplete(course, completed) {
  return course.modules.every((m) => {
    const done = completed[m.id] || {};
    return m.lessons.every((l) => done[l.id]);
  });
}

// A course with no requiresCourseId (the two introductory courses) is
// always unlocked. An advanced course unlocks once its introductory
// counterpart is fully complete, OR by a direct confirmed unlock
// (unlockedCourses is state.unlockedCourses, courseId -> true).
export function isCourseUnlocked(course, completed, unlockedCourses, forceUnlockAll = false) {
  if (forceUnlockAll) return true;
  if (!course.requiresCourseId) return true;
  if (unlockedCourses && unlockedCourses[course.id]) return true;
  const req = COURSES.find((c) => c.id === course.requiresCourseId);
  return !req || isCourseComplete(req, completed);
}

// Fraction of quiz questions that must be correct to unlock a lesson's drills.
export const QUIZ_PASS_RATIO = 0.8;

export function getModule(moduleId) {
  return MODULES.find((m) => m.id === moduleId);
}

export function getLesson(moduleId, lessonId) {
  const mod = getModule(moduleId);
  return mod && mod.lessons.find((l) => l.id === lessonId);
}

export function moduleIndex(moduleId) {
  return MODULES.findIndex((m) => m.id === moduleId);
}

export function lessonIndex(moduleId, lessonId) {
  const mod = getModule(moduleId);
  return mod.lessons.findIndex((l) => l.id === lessonId);
}

export function isLessonComplete(moduleId, lessonId, completed) {
  return !!(completed[moduleId] && completed[moduleId][lessonId]);
}

// Lessons within an unlocked module are gated sequentially: lesson N is
// reachable once lesson N-1 is complete (the first lesson is always
// reachable). A module unlocked early via a skip-ahead test still only
// opens its own first lesson this way -- there is no lesson-level skip test,
// so the rest of the module has to be earned normally.
export function isLessonUnlocked(moduleId, lessonId, completed, unlockedModules, forceUnlockAll = false) {
  if (forceUnlockAll) return true;
  if (!isModuleUnlocked(moduleId, completed, unlockedModules)) return false;
  const idx = lessonIndex(moduleId, lessonId);
  if (idx <= 0) return true;
  const mod = getModule(moduleId);
  const prevLessonId = mod.lessons[idx - 1].id;
  return isLessonComplete(moduleId, prevLessonId, completed);
}

export function completedCount(moduleId, completed) {
  const mod = getModule(moduleId);
  const done = completed[moduleId] || {};
  return mod.lessons.filter((l) => done[l.id]).length;
}

export function isModuleComplete(moduleId, completed) {
  const mod = getModule(moduleId);
  return completedCount(moduleId, completed) === mod.lessons.length;
}

// Module 1 is always unlocked; module N unlocks once every lesson in
// module N-1 is complete, OR early via a skip-ahead unlock test on the
// modules just before it (unlockedModules is state.unlockedModules,
// moduleId -> true, set by finalizeUnlockTest in js/main.js once that test
// is passed -- same override idiom as isCourseUnlocked's unlockedCourses,
// and just as additive: the normal "finish the previous module" gate still
// applies independently).
export function isModuleUnlocked(moduleId, completed, unlockedModules, forceUnlockAll = false) {
  if (forceUnlockAll) return true;
  const idx = moduleIndex(moduleId);
  if (idx === 0) return true;
  if (unlockedModules && unlockedModules[moduleId]) return true;
  const prev = MODULES[idx - 1];
  return isModuleComplete(prev.id, completed);
}

export function totalLessonsCleared(completed) {
  return MODULES.reduce((sum, m) => sum + completedCount(m.id, completed), 0);
}

export function totalLessons() {
  return MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
}

// --- Cross-course aggregates (Achievements) --------------------------------
// Unlike totalLessons/totalLessonsCleared above (which resolve against
// whichever course is currently active, via the mutable MODULES binding),
// XP/streak/badges are one global profile shared across all four courses
// (see js/state.js's own comment on createInitialState) -- so module- and
// lesson-completion badges need counts spanning every course at once. These
// walk COURSES directly rather than MODULES, and so stay correct no matter
// which course is active when a badge check runs.

function isModuleFullyComplete(mod, completed) {
  const done = completed[mod.id] || {};
  return mod.lessons.length > 0 && mod.lessons.every((l) => done[l.id]);
}

export function totalModulesAllCourses() {
  return COURSES.reduce((sum, c) => sum + c.modules.length, 0);
}

export function totalLessonsAllCourses() {
  return COURSES.reduce((sum, c) => sum + c.modules.reduce((s, m) => s + m.lessons.length, 0), 0);
}

export function completedModulesAllCourses(completed) {
  return COURSES.reduce((sum, c) => sum + c.modules.filter((m) => isModuleFullyComplete(m, completed)).length, 0);
}

export function completedLessonsAllCourses(completed) {
  return COURSES.reduce((sum, c) => sum + c.modules.reduce((s, m) => {
    const done = completed[m.id] || {};
    return s + m.lessons.filter((l) => done[l.id]).length;
  }, 0), 0);
}

export function isCourseFullyComplete(courseId, completed) {
  const course = COURSES.find((c) => c.id === courseId);
  return !!course && course.modules.every((m) => isModuleFullyComplete(m, completed));
}

export function allCoursesComplete(completed) {
  return COURSES.every((c) => isCourseFullyComplete(c.id, completed));
}

export function conceptKey(moduleId, lessonId, conceptIndex) {
  return `${moduleId}_${lessonId}_c${conceptIndex}`;
}

export function bankKey(moduleId, lessonId, bankIndex) {
  return `${moduleId}_${lessonId}_b${bankIndex}`;
}

// lesson.quiz[] items have no key of their own anywhere else in the app
// (addressed only by array index within one lesson's own quiz attempt) --
// this gives them a stable, bankKey-shaped identity so My Path (content/
// path.js) and lesson Mastery (js/state.js's masteryV2Pool) can track a
// "lesson content" MCQ across sessions the same way bankKey lets a bank
// item be tracked.
export function quizKey(moduleId, lessonId, quizIndex) {
  return `${moduleId}_${lessonId}_q${quizIndex}`;
}

// تركيب diagram schema (content-fstu units 2+, distinct from the original
// course's flat words[]/labels[] تركيب): item.cells[] are the sentence's
// words/phrases in reading order; item.rows[] are label bands stacked above
// or below the sentence, each row's labels[] spanning an inclusive cell
// range ({ start, end, role }), plus an optional row.label caption naming
// what tier of analysis that row tests (e.g. "Word class"). "Ordered
// outward from the cells" (see the schema comment in content-fstu source
// files): row 0 of a given position is closest to the sentence, later rows
// in that position sit further out.
//
// This flattens every row's labels into one ordered slot list, each already
// carrying the CSS grid row it belongs on, so js/render.js's read-only
// teaching diagram and interactive practice diagram can share the same
// layout math, and so a placements[] array (js/main.js's tarkeebState,
// index-aligned with this slot list) has a stable meaning across renders.
//
// fillBlanks (practice mode only -- js/main.js's initTarkeeb/checkTarkeeb and
// js/render.js's renderTarkeebDiagram all pass true): every cell not already
// covered by a labeled span in a given row gets its own blank slot
// (role: null) instead of no slot at all. Without this, a row that only
// labels some of the cells reveals -- by the mere presence or absence of a
// drop target -- exactly which words the answer applies to, before the
// learner has worked anything out. A blank slot's "correct" state is simply
// staying empty (see checkTarkeebDiagram). Read-only concept illustrations
// (tarkeebDiagramReadOnlyHtml) call this WITHOUT fillBlanks, since a static
// worked example isn't a quiz and shouldn't be cluttered with empty boxes
// for words the illustration isn't making a point about.
export function flattenTarkeebSlots(item, { fillBlanks = false } = {}) {
  const aboveRows = item.rows.filter((r) => r.position === 'above');
  const belowRows = item.rows.filter((r) => r.position === 'below');
  const sentenceGridRow = aboveRows.length + 1;
  const numCells = item.cells.length;
  const slots = [];
  const rowLabels = [];
  function addRow(row, gridRow) {
    if (row.label) rowLabels.push({ gridRow, label: row.label });
    const covered = new Array(numCells).fill(false);
    row.labels.forEach((label) => {
      for (let c = label.start; c <= label.end; c += 1) covered[c] = true;
      slots.push({ ...label, gridRow, blank: false });
    });
    if (fillBlanks) {
      for (let c = 0; c < numCells; c += 1) {
        if (!covered[c]) slots.push({ start: c, end: c, role: null, gridRow, blank: true });
      }
    }
  }
  aboveRows.forEach((row, i) => addRow(row, aboveRows.length - i));
  belowRows.forEach((row, i) => addRow(row, sentenceGridRow + 1 + i));
  slots.sort((a, b) => (a.gridRow - b.gridRow) || (a.start - b.start));
  return { slots, sentenceGridRow, totalRows: aboveRows.length + 1 + belowRows.length, rowLabels };
}

// 'primary'/'secondary' colour tier for a تركيب role label (js/render.js's
// colour coding only; checker.js grading never looks at this). NOT derived
// from row position -- above vs. below is purely a layout choice (a
// stand-alone phrase illustration with nothing larger to sit under, e.g.
// module-06's مَنْعُوْتٌ/نَعْتٌ pair, still lists as "above" for lack of
// anything to be below), not a grammatical one. 'secondary' instead follows
// which family the role itself belongs to: التوابع (نعت, توكيد, عطف, بدل),
// الإضافة, the demonstrative/relative-clause pairs, and عدد/مميز -- these
// attach to or further describe another word rather than filling a sentence
// slot of their own. Confirmed against content-fstu's own teaching text
// (module-06 l1's summary card: "Tarkib: green ink -- parts of a phrase are
// labelled under the word in green", for exactly a مَنْعُوْتٌ/نَعْتٌ pair).
// Matched by substring, so a parenthetical aside on a role ("مَعْطُوْفٌ (أ)",
// "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ") doesn't need its own entry.
const SECONDARY_ROLE_KEYWORDS = [
  'نَعْت', 'مَنْعُوْت', 'تَأْكِيْد', 'مُؤَكَّد', 'تَوْكِيْد', 'مَعْطُوْف', 'عَطْف',
  'بَدَل', 'مُبْدَل', 'مُضَاف', 'إِشَارَة', 'مُشَار', 'عَدَد', 'مَعْدُوْد', 'مُمَيَّز',
  'مَوْصُوْل', 'صِلَة',
];

export function classifyTarkeebRoleTier(role) {
  return SECONDARY_ROLE_KEYWORDS.some((kw) => role.includes(kw)) ? 'secondary' : 'primary';
}

// A lesson's own single exercise (lesson.exercise.items[]) -- distinct from
// a per-concept exercise (conceptKey's "_c" namespace above): one lesson can
// have both a concept with its own exercise AND a lesson-level exercise, so
// these need separate key namespaces to avoid colliding in exStates.
export function lessonExerciseItemKey(moduleId, lessonId, itemIndex) {
  return `${moduleId}_${lessonId}_ex${itemIndex}`;
}

// "passed" here means ATTEMPTED, not answered correctly -- the exercise box
// is reveal-on-click with no retry (see selectLessonExerciseOption in
// js/main.js), so a wrong answer still advances past the question once it's
// been shown and explained, same as the lesson quiz never blocking on a
// wrong answer either.
export function isLessonExerciseItemPassed(lesson, idx, exStates, moduleId, lessonId) {
  const items = lesson.exercise && lesson.exercise.items;
  if (!items || !items[idx]) return true;
  return !!(exStates[lessonExerciseItemKey(moduleId, lessonId, idx)] || {}).passed;
}

// True once every item in the lesson's own exercise has been attempted (or
// the lesson has no such exercise at all) -- gates the quiz alongside
// areAllConceptsPassed below.
export function isLessonExercisePassed(lesson, exStates, moduleId, lessonId) {
  const items = lesson.exercise && lesson.exercise.items;
  if (!items || !items.length) return true;
  return items.every((_, i) => isLessonExerciseItemPassed(lesson, i, exStates, moduleId, lessonId));
}

// Which item the single exercise box is currently showing: the first
// not-yet-attempted one, or items.length once every item is done. Only used
// to seed state.lessonExIndex when a lesson is entered (js/main.js) -- once
// set, that index advances explicitly (with a brief feedback pause) rather
// than being re-derived on every render, so answering doesn't jump to the
// next question instantly.
export function firstUnpassedExerciseIndex(lesson, exStates, moduleId, lessonId) {
  const items = lesson.exercise && lesson.exercise.items;
  if (!items || !items.length) return 0;
  for (let i = 0; i < items.length; i++) {
    if (!isLessonExerciseItemPassed(lesson, i, exStates, moduleId, lessonId)) return i;
  }
  return items.length;
}

export function isConceptExercisePassed(lesson, idx, exStates, moduleId, lessonId) {
  const concept = lesson.concepts[idx];
  if (!concept || !concept.exercise) return true;
  return !!(exStates[conceptKey(moduleId, lessonId, idx)] || {}).passed;
}

// How many concepts the lesson page renders: every consecutively-passed
// concept plus the one the learner is working on. Derived from exStates on
// every render rather than stored, so it can never drift out of sync.
export function conceptsToRender(lesson, exStates, moduleId, lessonId) {
  let leading = 0;
  while (leading < lesson.concepts.length
    && isConceptExercisePassed(lesson, leading, exStates, moduleId, lessonId)) {
    leading += 1;
  }
  return Math.min(leading + 1, lesson.concepts.length);
}

export function areAllConceptsPassed(lesson, exStates, moduleId, lessonId) {
  return lesson.concepts.every((_, i) => isConceptExercisePassed(lesson, i, exStates, moduleId, lessonId));
}

// Gate for "Continue to quiz": every concept's own exercise (if any) AND
// the lesson's single trailing exercise (if any) must be cleared.
export function isLessonReadyForQuiz(lesson, exStates, moduleId, lessonId) {
  return areAllConceptsPassed(lesson, exStates, moduleId, lessonId)
    && isLessonExercisePassed(lesson, exStates, moduleId, lessonId);
}

export function isQuizPassed(moduleId, lessonId, quizScores) {
  const score = (quizScores[moduleId] && quizScores[moduleId][lessonId]) || null;
  if (!score) return false;
  return score.correct / score.total >= QUIZ_PASS_RATIO;
}

// A lesson is "concepts, then quiz" -- the progress tag on a lesson card
// counts cleared concept exercises only.
export function lessonProgress(lesson, exStates, moduleId, lessonId) {
  let done = 0;
  lesson.concepts.forEach((_, i) => {
    if (isConceptExercisePassed(lesson, i, exStates, moduleId, lessonId)) done += 1;
  });
  return { done, total: lesson.concepts.length };
}

// --- Concept prose --------------------------------------------------------
// A concept's `body` is authored as one prose string but renders as one <p>
// per sentence, for breathing room on the combined lesson page. The split
// lives here so content files stay readable prose; a concept can also
// author a `lines` array directly to override the automatic split.

// Words that end in a period without ending a sentence.
const ABBREVIATIONS = new Set(['e.g', 'i.e', 'etc', 'vs', 'cf', 'approx']);

function endsSentence(html, i) {
  // A real break needs whitespace and then more text after it; anything
  // else (".)" , '."', end of string) is handled by the caller's tail.
  if (!/^\s+\S/.test(html.slice(i + 1))) return false;
  const plain = html
    .slice(0, i)
    .replace(/<[^>]*>/g, '')
    .replace(/[)\]}"'»›﴾]+$/u, ''); // a sentence may close a bracket first
  // \p{M} keeps Arabic harakat attached to their letter; the letter count
  // (not the raw length) is what tells an initial from a word.
  const word = (plain.match(/[\p{L}\p{M}.]+$/u) || [''])[0].toLowerCase();
  const letters = word.replace(/[\p{M}.]/gu, '');
  if (letters.length <= 1) return false; // an initial, e.g. the "e" of "e.g."
  return !ABBREVIATIONS.has(word);
}

// A sentence that enumerates -- "…six signs: (1) a, (2) b, …" or
// "Five rules: a; b; c" -- reads as a wall of text on one line. Break it
// into a lead-in plus one entry per item. Returns null when the sentence
// isn't a list.
function splitList(sentence) {
  const numbered = sentence.split(/(?=\((?:[1-9]|1[0-9])\)\s)/);
  if (numbered.length >= 3) {
    const lead = numbered.shift().trim();
    // Drop the separator the item carried in the running sentence -- the
    // trailing comma, or the full stop that ended the last one.
    const items = numbered.map((t) => ({ html: t.trim().replace(/[,.]$/, ''), list: true }));
    return lead ? [{ html: lead, list: false }, ...items] : items;
  }

  // Semicolons only enumerate when there are several of them and the
  // sentence introduces the list with a colon.
  const semis = sentence.split(';');
  if (semis.length >= 3 && /:/.test(semis[0])) {
    const colon = semis[0].indexOf(':');
    const lead = semis[0].slice(0, colon + 1).trim();
    const rest = [semis[0].slice(colon + 1), ...semis.slice(1)];
    const items = rest
      .map((t) => t.replace(/\s*\.\s*$/, '').trim())
      .filter(Boolean)
      .map((t) => ({ html: t, list: true, bullet: true }));
    return [{ html: lead, list: false }, ...items];
  }

  // "…has eleven types: a، b، c, and d." -- a run of short comma-separated
  // terms filling the rest of the sentence. The length guard is what keeps
  // ordinary prose that merely contains a comma-separated aside out of it.
  const colonAt = sentence.indexOf(':');
  if (colonAt !== -1) {
    const tail = sentence.slice(colonAt + 1).replace(/\s*\.\s*$/, '').trim();
    const terms = tail.split(/[،,]/).map((t) => t.trim()).filter(Boolean);
    const bare = (t) => t.replace(/^(?:and|or)\s+/i, '').replace(/<[^>]*>/g, '');
    if (terms.length >= 5 && terms.every((t) => bare(t).length <= 30)) {
      return [
        { html: sentence.slice(0, colonAt + 1).trim(), list: false },
        ...terms.map((t) => ({ html: t, list: true, bullet: true })),
      ];
    }
  }

  return null;
}

// Returns [{ html, list, bullet }] -- `list` entries render as list items.
export function conceptLines(concept) {
  // Authored lines are already in final { html, list, bullet } shape --
  // unlike the auto-split path below, they don't go through splitList
  // (which expects plain sentence strings, not these objects).
  if (Array.isArray(concept.lines)) return concept.lines;

  const sentences = [];
  const html = concept.body || '';
  let start = 0;
  let inTag = false;
  for (let i = 0; i < html.length; i++) {
    const ch = html[i];
    if (ch === '<') inTag = true;
    else if (ch === '>') inTag = false;
    else if (!inTag && '.?!؟'.includes(ch) && endsSentence(html, i)) {
      sentences.push(html.slice(start, i + 1).trim());
      start = i + 1;
    }
  }
  const tail = html.slice(start).trim();
  if (tail) sentences.push(tail);
  if (!sentences.length) sentences.push(html);

  return sentences.flatMap((s) => splitList(s) || [{ html: s, list: false }]);
}

// Practice pool: the larger practice pool (lesson.bank), unlocked once that
// lesson is complete. Pooled per-module.
export function getBankPool(moduleId, completed, forceUnlockAll = false) {
  const mod = getModule(moduleId);
  const done = completed[moduleId] || {};
  const pool = [];
  mod.lessons.forEach((lesson) => {
    if (!forceUnlockAll && !done[lesson.id]) return;
    (lesson.bank || []).forEach((item, idx) => {
      pool.push({
        key: bankKey(moduleId, lesson.id, idx),
        moduleId,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        bankIndex: idx,
        title: item.title,
        item,
      });
    });
  });
  return pool;
}

// Practice Mode splits the pool by kind: MCQ questions run as a weighted
// quiz-style session, تركيب items as their own drag-and-drop session, and
// vocab items (English<->Arabic word-pair drills) as their own third
// session -- so 'vocab' is excluded here alongside 'tarkeeb' rather than
// counting as an ordinary MCQ.
export function getMcqPool(moduleId, completed, forceUnlockAll = false) {
  return getBankPool(moduleId, completed, forceUnlockAll).filter((p) => p.item.kind !== 'tarkeeb' && p.item.kind !== 'vocab');
}

// vocabType ('en-ar' | 'ar-en' | 'form'), when given, further narrows to
// just that question direction -- see the tag on each generated vocab bank
// item in content-fstu/module-0N.js. Omit it to get every type pooled
// together (kept for callers that still want the old combined behaviour).
export function getVocabPool(moduleId, completed, vocabType, forceUnlockAll = false) {
  return getBankPool(moduleId, completed, forceUnlockAll)
    .filter((p) => p.item.kind === 'vocab' && (!vocabType || p.item.vocabType === vocabType));
}

export function getTarkeebPool(moduleId, completed, forceUnlockAll = false) {
  return getBankPool(moduleId, completed, forceUnlockAll).filter((p) => p.item.kind === 'tarkeeb');
}

// Course-wide vocab pool, for the Schedule tab's Revision "Vocab" mode:
// every vocab bank item across every module, same as getAllBankPool used to
// (see its old comment, before it was removed alongside the pre-redesign
// Revision Mode). getBankPool's own per-lesson completed[] gate already
// means a lesson only ever contributes once it was unlocked AND finished --
// so this needs no separate isModuleUnlocked check to satisfy "only vocab
// from unlocked modules", iterating every module (locked ones just
// contribute nothing) is equivalent and simpler.
export function getUnlockedVocabPool(completed, vocabType, forceUnlockAll = false) {
  return MODULES.reduce((acc, m) => acc.concat(getVocabPool(m.id, completed, vocabType, forceUnlockAll)), []);
}

// Whether تركيب content exists at all -- independent of completed[] (unlike
// the pools above, which only count completed lessons). Used to decide
// whether to offer the تركيب tab in the first place: a course like As-Sarf
// has no تركيب items in any lesson, so the tab would only ever show its
// "complete a lesson to unlock" empty state -- better to not offer it.
export function moduleHasTarkeeb(mod) {
  return mod.lessons.some((l) => (l.bank || []).some((b) => b.kind === 'tarkeeb'));
}

// Same idea as moduleHasTarkeeb/courseHasTarkeeb used to be, for vocab --
// annahw and sarf-advanced currently have ZERO vocab items anywhere (see
// PATH_GENERATION_GUIDE.md's §0 audit), so the Schedule tab's Revision
// "Vocab" mode should simply not be offered there rather than only ever
// showing an empty state.
export function courseHasVocab() {
  return MODULES.some((m) => m.lessons.some((l) => (l.bank || []).some((b) => b.kind === 'vocab')));
}

// --- Skip-ahead unlock tests -------------------------------------------
// Locked modules can be entered early by passing a test drawn from the
// content that would normally have to be completed first. Advanced courses
// and the Advanced Path now use direct confirmed unlocks instead, but the
// course/path pools stay available as lookup pools for any already-running
// legacy unlock-test session.

export const UNLOCK_TEST_LENGTH = 30;
export const MODULE_SKIP_TEST_LENGTH = 15;
// How many modules immediately before a skip target get pooled for its test
// ("the last few modules before that one").
export const MODULE_SKIP_LOOKBACK = 2;
export const UNLOCK_TEST_PASS_RATIO = 0.85;

// Same three-way split as moduleRevisionSubPools/masteryV2SubPools --
// lesson-content quiz items reshaped to mcq, book-exercise bank mcq items,
// and تركيب bank items, kept apart rather than flattened -- but spanning
// arbitrary modules and deliberately NOT gated by completed[] -- a
// skip-ahead test is, by definition, over content the learner hasn't done
// yet. Keeping the three apart (instead of one flat "mcq" pool) is what lets
// buildUnlockTestQueue guarantee a mix of lesson and book exercises, not
// just "some mcq, maybe some تركيب".
function ungatedModulesSubPools(modules) {
  const quizPool = [];
  const bookPool = [];
  const tarkeebPool = [];
  modules.forEach((mod) => {
    mod.lessons.forEach((lesson) => {
      (lesson.quiz || []).forEach((q, idx) => {
        quizPool.push({
          key: quizKey(mod.id, lesson.id, idx), moduleId: mod.id, lessonId: lesson.id, lessonTitle: lesson.title, title: lesson.title,
          item: { kind: 'mcq', prompt: q.q, options: q.options, correct: q.correct, explanation: q.explanation },
        });
      });
      (lesson.bank || []).forEach((item, idx) => {
        if (item.kind === 'vocab') return;
        const entry = {
          key: bankKey(mod.id, lesson.id, idx), moduleId: mod.id, lessonId: lesson.id, lessonTitle: lesson.title, bankIndex: idx, title: item.title, item,
        };
        (item.kind === 'tarkeeb' ? tarkeebPool : bookPool).push(entry);
      });
    });
  });
  return { quizPool, bookPool, tarkeebPool };
}

export function flattenSubPools(subPools) {
  return [...subPools.quizPool, ...subPools.bookPool, ...subPools.tarkeebPool];
}

const EMPTY_SUB_POOLS = { quizPool: [], bookPool: [], tarkeebPool: [] };

// The back half of a course's own module list -- req: a course-jump test
// should "mainly test what's in the later half of their respective courses".
// Rounds the midpoint up, so an odd module count keeps the extra module in
// the FIRST (untested) half rather than the tested one.
function laterHalfModules(course) {
  return course.modules.slice(Math.ceil(course.modules.length / 2));
}

// courseId is the ADVANCED course being jumped to (e.g. 'annahw') -- the
// pool is drawn from its introductory counterpart's later modules, per
// laterHalfModules above. A course with no requiresCourseId (already
// unlocked) has nothing to test into, so this returns empty sub-pools.
export function courseUnlockTestSubPools(courseId) {
  const course = COURSES.find((c) => c.id === courseId);
  if (!course || !course.requiresCourseId) return EMPTY_SUB_POOLS;
  const req = COURSES.find((c) => c.id === course.requiresCourseId);
  return req ? ungatedModulesSubPools(laterHalfModules(req)) : EMPTY_SUB_POOLS;
}

// Flat lookup pool (findBankItem-style key resolution during an in-progress
// session) -- queue construction should use courseUnlockTestSubPools
// instead, so it can guarantee a lesson/book mix (see buildUnlockTestQueue).
export function courseUnlockTestPool(courseId) {
  return flattenSubPools(courseUnlockTestSubPools(courseId));
}

// The up-to-MODULE_SKIP_LOOKBACK modules immediately before `moduleId`,
// within its own course -- req: skipping to a module tests "the last few
// modules before that one". Module 0 has nothing before it (and is never
// locked in the first place), so this returns empty sub-pools for it.
export function moduleSkipTestSubPools(moduleId) {
  const course = COURSES.find((c) => c.modules.some((m) => m.id === moduleId));
  if (!course) return EMPTY_SUB_POOLS;
  const idx = course.modules.findIndex((m) => m.id === moduleId);
  if (idx <= 0) return EMPTY_SUB_POOLS;
  const start = Math.max(0, idx - MODULE_SKIP_LOOKBACK);
  return ungatedModulesSubPools(course.modules.slice(start, idx));
}

// Flat lookup pool -- see courseUnlockTestPool's own comment above.
export function moduleSkipTestPool(moduleId) {
  return flattenSubPools(moduleSkipTestSubPools(moduleId));
}

// Display helper for the unlock-test prompt (js/render.js): the modules a
// module-skip test would actually draw from, so the prompt can name them
// rather than just saying "recent modules".
export function moduleSkipTestSourceModules(moduleId) {
  const course = COURSES.find((c) => c.modules.some((m) => m.id === moduleId));
  if (!course) return [];
  const idx = course.modules.findIndex((m) => m.id === moduleId);
  if (idx <= 0) return [];
  const start = Math.max(0, idx - MODULE_SKIP_LOOKBACK);
  return course.modules.slice(start, idx);
}

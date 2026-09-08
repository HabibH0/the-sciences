import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { COURSES, ensureCoursesLoaded, setActiveCourse, getReviewPool } from '../content/index.js';
import { nativeEvidence, nativeEvidenceKey, nativeConceptId, masteryCourse, masterySummary, recordNativeAttempt, reconcileNativeCoverage } from '../js/learning/mastery.js';
import { nativeItem, nativeAnalysisItems } from '../js/learning/native.js';
import { grammarSteps, mergeLogicProgress, normalizeLogicProgress } from '../js/learning/study.js';
import { emptyCourse } from '../js/mizan/progress/model.js';
import { recordAttempt } from '../js/mizan/mastery/engine.js';
import { createInitialState } from '../js/state.js';
import { bootProgress, snapshot } from '../js/persistence.js';
import { mergeProgressData } from '../js/storage/syncClient.js';
import { courseOverviewHtml } from '../js/learning/catalog.js';
import { readFileSync } from 'node:fs';
import { checkMcq } from '../js/checker.js';
import { gradeNahwAnalysis, nahwAnalysisComplete } from '../js/learning/nahw.js';

// A separately booted process proves that native replay waits for lazy content.
execFileSync(process.execPath, ['--input-type=module', '-e', `
  const { mergeLogicProgress } = await import('./js/learning/study.js');
  const { ensureCoursesLoaded } = await import('./content/index.js');
  const assert = (await import('node:assert/strict')).default;
  const unloaded = mergeLogicProgress({ 'intro-sarf': { concepts: {}, attempts: [] } });
  assert.equal(unloaded['intro-sarf'].masteryNeedsReplay, true);
  await ensureCoursesLoaded(['intro-sarf']);
  assert.equal(mergeLogicProgress(unloaded)['intro-sarf'].masteryNeedsReplay, false);
`]);

const storage = new Map();
globalThis.localStorage = { getItem: k => storage.get(k) ?? null, setItem: (k, v) => storage.set(k, String(v)), removeItem: k => storage.delete(k) };
await ensureCoursesLoaded(COURSES.map(c => c.id));
const nativeCourses = COURSES.filter(c => c.id !== 'mantiq');
const now = '2026-09-08T12:00:00.000Z';
const at = (day, n = 0) => new Date(Date.UTC(2026, 8, day, 12, 0, n)).toISOString();
const migrated = await createInitialState();
const totals = [];

for (const source of nativeCourses) {
  const course = masteryCourse(source.id), mod = source.modules[0], lesson = mod.lessons[0];
  const target = nativeConceptId(mod.id, lesson.id, 0);
  assert.equal(Object.keys(course.concepts).length, source.modules.reduce((n, m) => n + m.lessons.reduce((n, l) => n + l.concepts.length, 0), 0));
  const evidence = nativeEvidence(mod.id, lesson.id, lesson.concepts[0].exercise, { conceptIndex: 0 });
  assert.deepEqual(evidence.conceptIds, [target]);
  const attempt = (n, changes = {}) => ({ id: `${source.id}:${n}`, sessionId: `session-${n}`, occurredAt: at(n < 4 ? 8 : n < 8 ? 9 : 19, n), correct: true, ...changes });
  let p = emptyCourse(), comparison = emptyCourse();
  // Identical evidence follows Logic's exact thresholds, including retention.
  for (let n = 0; n < 10; n++) {
    const e = { ...evidence, key: `distinct-example-${n}`, difficulty: n % 2 ? 5 : 4, family: n % 2 ? 'analysis' : 'application' };
    const a = attempt(n);
    p = recordNativeAttempt(p, e, a);
    comparison = recordAttempt(comparison, { ...a, itemId: e.key, key: e.key, conceptIds: e.conceptIds,
      family: e.family, difficulty: e.difficulty, hintsUsed: 0, guided: false, mode: 'lesson', grade: { correct: true, mistakes: [] } }, course);
    assert.deepEqual(p.concepts[target], comparison.concepts[target]);
    if (n === 2) assert.equal(p.concepts[target].level, 2);
    if (n === 5) assert.equal(p.concepts[target].level, 3);
    if (n === 7) assert.equal(p.concepts[target].level, 4);
    if (n === 9) assert.equal(p.concepts[target].level, 5);
  }
  assert.equal(recordNativeAttempt(p, evidence, attempt(0)).attempts.length, 10, 'A corrected/repeated submission cannot replace the first attempt');
  let repeated = emptyCourse(), supported = emptyCourse();
  for (let n = 0; n < 14; n++) {
    repeated = recordNativeAttempt(repeated, evidence, attempt(n));
    supported = recordNativeAttempt(supported, { ...evidence, key: `supported-${n}`, guided: n % 2 === 0 }, attempt(n, { hintsUsed: n % 2 }));
  }
  assert.equal(repeated.concepts[target].level, 1, 'Repeated examples across days cannot create diversity');
  assert.equal(supported.concepts[target].level, 1, 'Guidance and hints cannot create independent success');
  const missed = recordNativeAttempt(emptyCourse(), evidence, attempt(0, { correct: false }));
  const corrected = recordNativeAttempt(missed, evidence, attempt(1, { occurredAt: at(8, 10) }));
  assert.equal(corrected.concepts[target].evidence.length, 1);
  assert.equal(corrected.concepts[target].evidence[0].correct, false, 'Same-day correction retains the miss');

  const a = recordNativeAttempt(emptyCourse(), evidence, attempt(0));
  const b = recordNativeAttempt(emptyCourse(), { ...evidence, key: 'another-example' }, attempt(1));
  const merged = mergeLogicProgress({ [source.id]: a }, { [source.id]: b });
  assert.deepEqual(merged, mergeLogicProgress({ [source.id]: b }, { [source.id]: a }));
  assert.deepEqual(merged, mergeLogicProgress(merged, { [source.id]: a }));
  assert.equal(merged[source.id].concepts[target].attempts, 2);
  const reset = { [mod.id]: at(10) };
  assert.equal(mergeLogicProgress(merged, {}, reset)[source.id].concepts[target], undefined);
  const afterReset = recordNativeAttempt(emptyCourse(), evidence, attempt(12, { occurredAt: at(11) }));
  assert.equal(mergeLogicProgress(merged, { [source.id]: afterReset }, reset)[source.id].concepts[target].attempts, 1);

  const stats = { course: source.id, concepts: Object.keys(course.concepts).length, linkedIndependent: 0, practiceOnly: 0, guided: 0 };
  for (const m of source.modules) for (const l of m.lessons) {
    migrated.completed[m.id] ||= {};
    migrated.completed[m.id][l.id] = '2026-09-01';
    for (const step of grammarSteps(l).filter(s => s.kind === 'check')) {
      const e = nativeEvidence(m.id, l.id, nativeItem(l, step), { conceptIndex: step.conceptIndex, guided: true });
      assert.deepEqual(e.conceptIds, [nativeConceptId(m.id, l.id, step.conceptIndex)]);
      assert.equal(e.guided, true); stats.guided++;
    }
    for (const item of [...l.bank, ...l.quiz, ...nativeAnalysisItems(l)]) {
      const e = nativeEvidence(m.id, l.id, item);
      if (item.kind === 'vocab') { assert.equal(e, null); continue; }
      if (!e) { stats.practiceOnly++; continue; }
      assert(e.conceptIds.every(id => course.concepts[id]?.moduleId === m.id && course.concepts[id]?.lessonId === l.id));
      assert(e.difficulty >= 1 && e.difficulty <= 5);
      if (!item.mastery?.evidenceKey) assert(e.key.length < 32, 'Question text is not duplicated into saved evidence');
      stats.linkedIndependent++;
    }
  }
  reconcileNativeCoverage(migrated, source.id, now);
  assert.deepEqual(masterySummary(migrated, source.id), { total: stats.concepts, introduced: stats.concepts, competent: 0, mastered: 0 });
  assert.equal(migrated.mizanCourses[source.id].attempts.length, 0);
  migrated.courseId = source.id;
  await setActiveCourse(source.id);
  const html = courseOverviewHtml(migrated);
  assert(html.includes('concepts introduced') && html.includes('competent') && html.includes('mastered'));
  assert(!html.includes('undefined'));
  assert.equal((html.match(/aria-label="Your understanding"/g) || []).length, 1);
  await setActiveCourse(source.id);
  assert(getReviewPool(migrated.completed).length > 0, 'Review still offers earned content');
  totals.push(stats);
}

const original = { completed: migrated.completed, quizScores: { 'f-nouns': { l1: { correct: 6, total: 6 } } },
  reviewCards: { existing: { state: 'review', intervalDays: 10, dueAt: now } }, masteryV2: { 'f-nouns_l1': { passed: true } },
  litProgress: { saved: { done: true } }, literature: { version: 1, runs: {} }, mizanCourses: migrated.mizanCourses };
storage.set('the-sciences-progress', JSON.stringify({ progress: { ...original, mizanVersion: 1 }, meta: { version: 1, updatedAt: now, deviceId: 'verification' } }));
const boot = await bootProgress();
for (const key of ['completed', 'quizScores', 'masteryV2', 'litProgress']) assert.deepEqual(boot[key], original[key]);
assert(boot.mizanCourses['intro-nahw'].masteryNeedsReplay);
const roundTrip = JSON.parse(JSON.stringify(snapshot({ ...migrated, view: 'quiz', quizEvidenceId: 'persistent-quiz-id' })));
assert.equal(roundTrip.quizSession.quizEvidenceId, 'persistent-quiz-id');
assert.deepEqual(roundTrip.mizanCourses, migrated.mizanCourses);
const resetMerged = mergeProgressData({ moduleResetAt: { 'f-nouns': at(10) } }, { ...original,
  completedAt: { 'f-nouns': { l1: at(8) } }, exStates: { 'f-nouns_l1_c0': { passed: true, submittedAt: at(8) } } });
reconcileNativeCoverage(resetMerged, 'intro-nahw', at(11));
assert.equal(resetMerged.mizanCourses['intro-nahw'].concepts['f-nouns/l1/c0'], undefined, 'A stale guided answer cannot resurrect reset coverage');
assert.deepEqual(resetMerged.reviewCards, original.reviewCards, 'Mastery migration does not reschedule review');
assert.deepEqual(resetMerged.litProgress, original.litProgress);

const invalid = normalizeLogicProgress(JSON.parse('{"__proto__":{},"intro-nahw":{"concepts":{},"attempts":[{"id":"bad","occurredAt":"2026-09-08","conceptIds":["__proto__"],"grade":{"correct":true,"mistakes":[]}}]}}'));
assert(!Object.hasOwn(invalid, '__proto__'));
assert.equal(invalid['intro-nahw'].attempts.length, 0);
assert.equal(nativeEvidenceKey({ prompt: 'Which word?', options: ['A', 'B'], correct: 0 }),
  nativeEvidenceKey({ q: 'Which word?', options: ['B', 'A'], correct: 1 }), 'Shuffling options or changing question routes cannot create new evidence');
assert.equal(nativeEvidence('f-nouns', 'l1', { prompt: 'An untagged unrelated question', options: ['Yes', 'No'], correct: 0 }), null);
assert.equal(nativeEvidence('f-nouns', 'l1', { prompt: 'Vocabulary', kind: 'vocab', mastery: { conceptIndices: [0] } }), null);
assert.equal(nativeEvidence('f-nouns', 'l1', { prompt: 'Authored', mastery: { conceptIndices: [999] } }), null);

// Exercise the production action bodies with controlled state and timestamps.
// Their DOM/navigation dependencies are irrelevant to grading; this catches a
// missing hook, repeated submission, or accidentally scoring a correction.
const main = readFileSync(new URL('../js/main.js', import.meta.url), 'utf8');
function action(name, bindings) {
  const start = main.indexOf(`\n  ${name}(`, main.indexOf('const actions ='));
  assert(start > 0, `Production handler ${name} exists`);
  const tail = main.slice(start + 1);
  const end = tail.search(/\n  (?:async )?\w+\([^\n]*\) \{/);
  assert(end > 0);
  return Function(...Object.keys(bindings), `return ({${tail.slice(0, end)}}).${name};`)(...Object.values(bindings));
}
const lesson = COURSES.find(c => c.id === 'intro-nahw').modules[0].lessons[0];
const calls = [], ui = { moduleId: 'f-nouns', lessonId: 'l1', revealState: {}, quizIndex: 0, quizSelected: 0 };
const ctx = { item: lesson.concepts[0].exercise, key: 'f-nouns_l1_c0', step: { kind: 'check', conceptIndex: 0 }, record: { selected: 0, hintShown: true }, session: { id: 'actual-study' } };
const bindings = { state: ui, crypto: globalThis.crypto, nativeStudyContext: () => ctx, getLesson: () => lesson,
  guidedGrammar: () => true, queueAutoUpload: () => {}, nahwAnalysisComplete, gradeNahwAnalysis,
  saveNativeEvidence: (...args) => calls.push(args) };
const check = action('studyCheck', bindings);
check(); check();
assert.equal(calls.length, 1);
assert.equal(calls[0][3].guided, true);
assert.equal(calls[0][4].hintsUsed, 1);
ctx.record.correcting = true;
check(); assert.equal(calls.length, 1, 'Correcting a guided check cannot replace its first evidence');
ctx.step = { kind: 'analysis' }; ctx.item = { words: ['قلم', 'فتح'], labels: ['اسم', 'فعل'], options: ['اسم', 'فعل'] };
ctx.record = { response: ['اسم', 'اسم'] };
check(); assert.equal(calls.at(-1)[4].correct, false); assert.equal(calls.at(-1)[3].guided, false);
const quiz = action('checkLessonQuiz', bindings);
ui.quizSelected = (lesson.quiz[0].correct + 1) % lesson.quiz[0].options.length;
quiz(); const firstQuiz = calls.at(-1);
assert.equal(firstQuiz[4].correct, false);
const count = calls.length;
quiz(); assert.equal(calls.length, count, 'Repeated quiz submission records once');
ui.quizCorrection = { active: true, selected: lesson.quiz[0].correct };
quiz(); assert.equal(calls.length, count); assert.equal(ui.quizCorrection.correct, true);
assert.equal(firstQuiz[4].id, `${ui.quizEvidenceId}:0`);
ui.practice = { source: 'module', queue: ['bank'], index: 0, submitted: false };
const practiceCalls = [];
const practice = action('selectPracticeOption', { ...bindings, checkMcq, findBankItem: () => ({ item: lesson.concepts[0].exercise, moduleId: 'f-nouns', lessonId: 'l1' }),
  recordPracticeAnswer: () => {}, recordNativePractice: (...args) => practiceCalls.push(args), xpForPracticeCorrect: () => 0, awardXp: () => {}, scheduleToastClear: () => {} });
practice({ dataset: { option: '0' } }); practice({ dataset: { option: '0' } });
assert.equal(practiceCalls.length, 1);
assert.equal(practiceCalls[0][0].moduleId, 'f-nouns');

console.log('Shared course mastery verification passed: thresholds, source links, independence, persistence, lazy replay, sync and resets.');
console.table(totals);

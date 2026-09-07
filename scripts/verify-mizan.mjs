import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { COURSES, ensureCoursesLoaded, setActiveCourse, getReviewPool } from '../content/index.js';
import { grammarSteps, mergeLogicProgress, mergeStudySessions, normalizeStudySessions } from '../js/learning/study.js';
import { introduced, recordAttempt } from '../js/mizan/mastery/engine.js';
import { emptyCourse } from '../js/mizan/progress/model.js';
import { COURSE } from '../content-mantiq/course.js';
import { bootProgress, persist } from '../js/persistence.js';
import { recoverySave } from '../js/storage/storageManager.js';
import { saveProgress } from '../js/storage/storageManager.js';
import { mergeProgressData } from '../js/storage/syncClient.js';
import { validateLogic } from './validate-mizan.mjs';

const data = new Map();
globalThis.localStorage = { getItem: k => data.get(k) ?? null, setItem: (k, v) => data.set(k, String(v)), removeItem: k => data.delete(k) };
const check = (name, fn) => Promise.resolve().then(fn).then(() => console.log(`  ok - ${name}`));
execFileSync(process.execPath, ['--input-type=module', '-e', `
  const { mergeLogicProgress } = await import('./js/learning/study.js');
  const { emptyCourse } = await import('./js/mizan/progress/model.js');
  const assert = (await import('node:assert/strict')).default;
  const merged = mergeLogicProgress({ mantiq: emptyCourse() });
  assert.equal(merged.mantiq.masteryNeedsReplay, true);
  await import('./content-mantiq/index.js');
  assert.equal(mergeLogicProgress(merged).mantiq.masteryNeedsReplay, false);
`], { cwd: new URL('../', import.meta.url) });
await ensureCoursesLoaded(COURSES.map(c => c.id));

await check('all 498 lessons retain their teaching, practice and quiz content', () => {
  const totals = { lessons: 0, concepts: 0, inline: 0, quiz: 0, bank: 0 };
  for (const c of COURSES.filter(c => c.id !== 'mantiq')) for (const m of c.modules) for (const l of m.lessons) {
    const steps = grammarSteps(l);
    assert.equal(steps.filter(s => s.kind === 'teach').length, l.concepts.length);
    assert.equal(steps.filter(s => s.kind === 'check').length, l.concepts.filter(x => x.exercise).length);
    assert.equal(steps.filter(s => s.kind === 'practice').length, l.exercise?.items.length || 0);
    assert.equal(steps.filter(s => s.kind === 'summary').length, Number(!!l.summary));
    totals.lessons++; totals.concepts += l.concepts.length; totals.inline += l.concepts.filter(x => x.exercise).length;
    totals.quiz += l.quiz.length; totals.bank += l.bank.length;
  }
  assert.deepEqual(totals, { lessons: 468, concepts: 1871, inline: 1834, quiz: 2980, bank: 19519 });
  const logic = validateLogic();
  assert.equal(totals.lessons + logic.lessons, 498);
  console.log(`    Logic: ${logic.planned} planned checks across all 30 completable lessons; all 3,066 graders and responses checked`);
});

await check('old saves migrate twice without losing ids, review cards, unlocks or library progress', async () => {
  const before = { progress: { courseId: 'fstu', forceUnlockAll: true, completed: { 'u1': { l1: true } }, exStates: { old: { selected: 2, passed: true } },
    quizScores: { u1: { l1: { correct: 5, total: 6 } } }, litProgress: { chapter: { done: true } }, xp: 420, badges: ['first-steps'], theme: 'ink' },
    meta: { version: 12, updatedAt: '2026-09-01T00:00:00.000Z', deviceId: 'original' } };
  const raw = JSON.stringify(before); data.set('the-sciences-progress', raw);
  const once = await bootProgress(), twice = await bootProgress();
  assert.equal(data.get('the-sciences-before-mizan'), raw);
  for (const key of ['completed', 'exStates', 'quizScores', 'litProgress', 'xp', 'badges', 'forceUnlockAll']) {
    assert.deepEqual(once[key], before.progress[key]); assert.deepEqual(twice[key], before.progress[key]);
  }
  assert.equal(once.courseId, 'intro-nahw'); assert.equal(twice.mizanVersion, 1);
  assert.equal(twice.theme, 'mizan');
});

await check('malformed JSON is recoverable and never discarded', async () => {
  data.set('the-sciences-progress', '{ damaged original');
  await bootProgress();
  assert.equal(recoverySave().raw, '{ damaged original');
  assert.equal(recoverySave().dismissed, false);
});

await check('an obsolete or malformed course id opens a valid course', async () => {
  for (const courseId of ['missing-course', {}, null]) {
    data.set('the-sciences-progress', JSON.stringify({ mizanVersion: 1, courseId }));
    assert.equal((await bootProgress()).courseId, 'mantiq');
  }
});

await check('refresh flush writes before yielding to a promise', async () => {
  const pending = saveProgress({ mizanVersion: 1, pendingAnswer: false });
  assert.equal(JSON.parse(data.get('the-sciences-progress')).progress.pendingAnswer, false);
  await pending;
});

await check('storage failure is reported and leaves the previous save untouched', async () => {
  const before = data.get('the-sciences-progress');
  const setter = localStorage.setItem;
  localStorage.setItem = () => { throw new Error('quota'); };
  const state = await bootProgress();
  assert(state.storageError); assert.equal(data.get('the-sciences-progress'), before);
  await assert.rejects(persist(state)); assert(state.storageError);
  localStorage.setItem = setter;
});

await check('unfinished answers and positions merge by latest activity', () => {
  const key = 'mantiq/logic-terms/lesson_sound_definitions';
  const old = { id: 's1', version: 1, lessonId: 'lesson_sound_definitions', stepIndex: 0, steps: [{ kind: 'teach' }], updatedAt: '2026-09-01', draft: { response: false } };
  const next = { ...old, updatedAt: '2026-09-02', draft: { response: true, busy: true } };
  assert.equal(mergeStudySessions({ [key]: old }, { [key]: next })[key].draft.response, true);
  assert.equal(mergeStudySessions({ [key]: next }, { [key]: old })[key].draft.busy, false);
  assert.deepEqual(normalizeStudySessions({ bad: { version: 1, steps: [], stepIndex: -1 } }), {});
});

await check('independent device attempts both contribute to mastery exactly once', () => {
  const concept = Object.keys(COURSE.concepts)[0], item = COURSE.items.find(i => i.concepts.includes(concept));
  const base = { ...emptyCourse(), concepts: { [concept]: introduced(concept, '2026-09-01T10:00:00.000Z') } };
  const attempt = n => ({ id: `a${n}`, itemId: item.id, key: `example${n}`, conceptIds: [concept], family: item.family, difficulty: 2,
    hintsUsed: 0, guided: false, grade: { correct: true, mistakes: [] }, occurredAt: `2026-09-0${n}T12:00:00.000Z`, sessionId: `s${n}`, mode: 'lesson' });
  const a = recordAttempt(base, attempt(1), COURSE), b = recordAttempt(base, attempt(2), COURSE);
  const merged = mergeLogicProgress({ mantiq: a }, { mantiq: b }).mantiq;
  assert.equal(merged.attempts.length, 2); assert.equal(merged.concepts[concept].attempts, 2);
  assert.deepEqual(mergeLogicProgress({ mantiq: a }, { mantiq: b }), mergeLogicProgress({ mantiq: b }, { mantiq: a }));
  assert.equal(mergeLogicProgress({ mantiq: merged }, { mantiq: b }).mantiq.attempts.length, 2);
});

await check('a reset cannot resurrect an old study session during sync', () => {
  const key = 'mantiq/logic-terms/lesson_sound_definitions';
  const session = { id: 'old-session', version: 1, lessonId: 'lesson_sound_definitions', steps: [{ kind: 'teach' }], stepIndex: 0, updatedAt: '2026-09-01T12:00:00.000Z' };
  const merged = mergeProgressData({ moduleResetAt: { 'logic-terms': '2026-09-02T12:00:00.000Z' } }, { studySessions: { [key]: session } });
  assert.equal(merged.studySessions[key], undefined);
});

await check('Logic review, revision and mastery pools resolve all earned exercises', async () => {
  await setActiveCourse('mantiq');
  const completed = Object.fromEntries(COURSES[0].modules.map(m => [m.id, Object.fromEntries(m.lessons.map(l => [l.id, true]))]));
  const pool = getReviewPool(completed);
  assert.equal(pool.length, 2817);
  assert.equal(new Set(pool.map(e => e.key)).size, 2817);
  const { masteryV2Pool, courseRevisionPool } = await import('../js/state.js');
  for (const m of COURSES[0].modules) for (const l of m.lessons) assert(masteryV2Pool(m.id, l.id).length > 0);
  assert.equal(courseRevisionPool(COURSES[0].modules.map(m => m.id), completed).length, 2817);
});
console.log('Mīzān integration verification passed.');

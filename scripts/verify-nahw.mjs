import assert from 'node:assert/strict';
import { MODULES } from '../content/annahw.js';
import { setActiveCourse, conceptKey } from '../content/index.js';
import { createInitialState } from '../js/state.js';
import { render } from '../js/render.js';
import { grammarSteps, createStudySession, normalizeStudySessions, studyKey } from '../js/learning/study.js';
import { nahwAnalysisItems, nahwAnalysisComplete, gradeNahwAnalysis } from '../js/learning/nahw.js';
import { mergeProgressData } from '../js/storage/syncClient.js';

const storage = new Map();
globalThis.localStorage = { getItem: k => storage.get(k) ?? null, setItem: (k, v) => storage.set(k, String(v)), removeItem: k => storage.delete(k) };
const state = await createInitialState();
await setActiveCourse('adv-nahw');
Object.assign(state, { courseId: 'adv-nahw', view: 'lesson', forceUnlockAll: true });
const totals = { lessons: 0, concepts: 0, blocks: 0, diagrams: 0, tables: 0, teachingSteps: 0, analysisExercises: 0, quizQuestions: 0 };

for (const mod of MODULES) {
  const source = (await import(`../content/module-${mod.id}.js`)).default;
  for (const lesson of mod.lessons) {
    const original = source.lessons.find(l => l.id === lesson.id);
    for (const field of ['concepts', 'quiz', 'bank']) assert.deepEqual(lesson[field], original[field], `${mod.id}/${lesson.id}: original ${field} must not change`);
    const steps = grammarSteps(lesson);
    assert.equal(new Set(steps.map(s => s.id)).size, steps.length);
    for (let ci = 0; ci < lesson.concepts.length; ci++) {
      const concept = lesson.concepts[ci], taught = steps.filter(s => s.kind === 'teach' && s.conceptIndex === ci);
      assert.deepEqual(taught.flatMap(s => s.lineIndices), concept.lines.map((_, i) => i));
      assert(steps.findIndex(s => s.kind === 'check' && s.conceptIndex === ci) > steps.indexOf(taught.at(-1)));
      totals.blocks += concept.lines.length;
      totals.diagrams += concept.lines.filter(l => l.tarkeebDiagram).length;
      totals.tables += concept.lines.filter(l => l.table).length;
    }
    const key = studyKey('adv-nahw', mod.id, lesson.id);
    Object.assign(state, { moduleId: mod.id, lessonId: lesson.id });
    const session = createStudySession(state, mod, lesson, '2026-09-08T00:00:00Z', `check-${key}`);
    state.studySessions[key] = session;
    for (let index = 0; index < session.steps.length; index++) {
      session.stepIndex = index;
      const html = render(state, MODULES);
      assert(html.includes('mz-study-body'));
      assert(!html.includes('undefined') && !html.includes('[object Object]'), `${key}/${index}: invalid rendered content`);
    }
    for (const item of nahwAnalysisItems(lesson)) {
      assert(!nahwAnalysisComplete(item, null));
      assert(!nahwAnalysisComplete(item, item.labels.map(() => null)));
      assert(nahwAnalysisComplete(item, item.labels));
      assert(gradeNahwAnalysis(item, item.labels).correct);
      const wrong = [...item.labels]; wrong[0] = item.options.find(v => v !== item.labels[0]);
      assert(!gradeNahwAnalysis(item, wrong).correct);
      assert.equal(gradeNahwAnalysis(item, wrong).fields[0], false);
      const stepIndex = session.steps.findIndex(s => s.id === `analysis:${item.id}`);
      session.stepIndex = stepIndex;
      const recordKey = `${mod.id}_${lesson.id}_analysis_${item.id}`;
      state.exStates[recordKey] = { response: [...item.labels], originalResponse: wrong, submitted: true, correct: false, corrected: true };
      const html = render(state, MODULES);
      assert(html.includes('Your original answer') && html.includes('Expected answer') && html.includes('Correction understood'));
      assert.equal(normalizeStudySessions({ [key]: session })[key].stepIndex, stepIndex);
    }
    totals.lessons++; totals.concepts += lesson.concepts.length;
    totals.teachingSteps += steps.filter(s => s.kind === 'teach').length;
    totals.analysisExercises += nahwAnalysisItems(lesson).length;
    totals.quizQuestions += lesson.quiz.length;
  }
}

const mod = MODULES[0], lesson = mod.lessons[0], key = studyKey('adv-nahw', mod.id, lesson.id);
const legacySteps = lesson.concepts.flatMap((_, conceptIndex) => [
  { id: `concept:${conceptIndex}:teach`, kind: 'teach', conceptIndex },
  { id: `concept:${conceptIndex}:check`, kind: 'check', conceptIndex },
]);
for (let oldIndex = 0; oldIndex < legacySteps.length; oldIndex++) {
  state.studySessions[key] = { id: 'legacy-session', version: 1, lessonId: lesson.id, steps: legacySteps, stepIndex: oldIndex };
  const migrated = createStudySession(state, mod, lesson, '2026-09-08T01:00:00Z', 'unused');
  assert.equal(migrated.id, 'legacy-session');
  assert.equal(migrated.steps[migrated.stepIndex].kind, legacySteps[oldIndex].kind);
  assert.equal(migrated.steps[migrated.stepIndex].conceptIndex, legacySteps[oldIndex].conceptIndex);
}
state.studySessions = {};
state.exStates = { [conceptKey(mod.id, lesson.id, 0)]: { passed: true, selected: 0 } };
const resumed = createStudySession(state, mod, lesson, '2026-09-08T01:00:00Z', 'new');
assert.equal(resumed.steps[resumed.stepIndex].conceptIndex, 1);

Object.assign(state, { view: 'quiz', moduleId: mod.id, lessonId: lesson.id, quizIndex: 0, quizSelected: 1, quizRevealed: true, quizCorrection: { active: false, selected: 0, correct: true }, quizOptionOrder: { 0: [0, 1, 2, 3] } });
const quizHtml = render(state, MODULES);
assert(quizHtml.includes('Correction understood') && quizHtml.includes('Your original answer'));
assert.equal(state.quizSelected, 1, 'Rendering a correction cannot replace the scored answer');
const firstAnswer = { submittedAt: '2026-09-08T00:00:00Z', originalResponse: ['wrong'], response: ['wrong'], correct: false, submitted: true };
const correctedAnswer = { ...firstAnswer, response: ['right'], corrected: true };
const synced = mergeProgressData({ exStates: { analysis: firstAnswer } }, { exStates: { analysis: correctedAnswer } }).exStates.analysis;
assert.deepEqual(synced.originalResponse, ['wrong']);
assert.deepEqual(synced.response, ['right']);
assert.equal(synced.correct, false);
const differentAttempt = { ...correctedAnswer, originalResponse: ['different'], submittedAt: '2026-09-08T01:00:00Z' };
assert(!mergeProgressData({ exStates: { analysis: firstAnswer } }, { exStates: { analysis: differentAttempt } }).exStates.analysis.corrected);
assert.deepEqual({ lessons: totals.lessons, concepts: totals.concepts, diagrams: totals.diagrams, tables: totals.tables, quizQuestions: totals.quizQuestions }, { lessons: 138, concepts: 738, diagrams: 101, tables: 205, quizQuestions: 828 });
console.log('Advanced Nahw checks passed:', JSON.stringify(totals));
console.log('All source blocks rendered; review/quiz content preserved; analysis grades, corrections, old-session migration and resume positions checked.');

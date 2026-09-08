import assert from 'node:assert/strict';
import { MODULES } from '../content-sarf/index.js';
import { setActiveCourse, conceptKey, getReviewPool } from '../content/index.js';
import { createInitialState } from '../js/state.js';
import { render } from '../js/render.js';
import { grammarSteps, createStudySession, normalizeStudySessions, studyKey } from '../js/learning/study.js';
import { sarfAnalysisItems, sarfPracticeItems } from '../js/learning/sarf.js';
import { compactTable } from '../js/learning/comparison.js';
import { nativeItem, nativeItemKey } from '../js/learning/native.js';
import { nahwAnalysisComplete, gradeNahwAnalysis } from '../js/learning/nahw.js';

const storage = new Map();
globalThis.localStorage = { getItem: k => storage.get(k) ?? null, setItem: (k, v) => storage.set(k, String(v)), removeItem: k => storage.delete(k) };
const state = await createInitialState();
await setActiveCourse('adv-sarf');
Object.assign(state, { courseId: 'adv-sarf', view: 'lesson', forceUnlockAll: true });
const totals = { lessons: 0, concepts: 0, blocks: 0, clarifications: 0, tables: 0, interactiveTables: 0, visualVariants: 0, teachingSteps: 0, analysis: 0, practice: 0, quiz: 0, bank: 0 };
const validHtml = html => assert(!html.includes('undefined') && !html.includes('[object Object]'), 'No invalid rendered content');

for (const mod of MODULES) {
  const source = (await import(`../content-sarf/module-${mod.id.slice(3)}.js`)).default;
  for (const lesson of mod.lessons) {
    const original = source.lessons.find(l => l.id === lesson.id);
    for (const field of ['concepts', 'quiz', 'bank']) assert.deepEqual(lesson[field], original[field], `${lesson.learningKey}: original ${field} unchanged`);
    const steps = grammarSteps(lesson);
    assert.equal(new Set(steps.map(s => s.id)).size, steps.length);
    lesson.concepts.forEach((concept, ci) => {
      const taught = steps.filter(s => s.kind === 'teach' && s.conceptIndex === ci);
      assert.deepEqual(taught.flatMap(s => s.lineIndices), concept.lines.map((_, i) => i));
      assert.equal(taught.filter(s => s.clarification).length, Number(!!concept.clarification));
      if (concept.exercise) assert(steps.findIndex(s => s.kind === 'check' && s.conceptIndex === ci) > steps.indexOf(taught.at(-1)));
      totals.blocks += concept.lines.length;
      totals.clarifications += Number(!!concept.clarification);
      totals.tables += concept.lines.filter(l => l.table).length;
    });
    const key = studyKey('adv-sarf', mod.id, lesson.id);
    Object.assign(state, { view: 'lesson', moduleId: mod.id, lessonId: lesson.id });
    const session = createStudySession(state, mod, lesson, '2026-09-08T00:00:00Z', key);
    state.studySessions[key] = session;
    for (let index = 0; index < steps.length; index++) {
      session.stepIndex = index;
      const step = steps[index], html = render(state, MODULES);
      validHtml(html);
      assert(html.includes('mz-study-body'));
      if (step.tableIndex != null) {
        const table = lesson.concepts[step.conceptIndex].lines[step.tableIndex].table;
        if (compactTable(table)) {
          totals.interactiveTables++;
          for (let selected = 0; selected < table.rows.length; selected++) {
            session.visualState = { [step.id]: { selected } };
            const variant = render(state, MODULES);
            validHtml(variant);
            assert(variant.includes(`Example ${selected + 1} of ${table.rows.length}`));
            totals.visualVariants++;
          }
        }
      }
      if (['analysis', 'practice'].includes(step.kind)) {
        const item = nativeItem(lesson, step), itemKey = nativeItemKey(mod, lesson, step);
        assert(item.prompt && item.options.length >= 2);
        if (step.kind === 'analysis') {
          assert.equal(new Set(item.options).size, item.options.length);
          assert(item.labels.every(label => item.options.includes(label)));
          assert.equal(new Set(item.words).size, item.words.length, 'No ambiguous duplicate cues');
          if (item.lineIndex != null) {
            const table = lesson.concepts[item.conceptIndex].lines[item.lineIndex].table;
            assert.deepEqual(item.words, item.rowIndices.map(i => table.rows[i][item.cue]));
            assert.deepEqual(item.labels, item.rowIndices.map(i => table.rows[i][item.answer]));
          }
          assert(!nahwAnalysisComplete(item, null));
          assert(!nahwAnalysisComplete(item, item.labels.map(() => null)));
          assert(nahwAnalysisComplete(item, item.labels));
          assert(gradeNahwAnalysis(item, item.labels).correct);
          const wrong = item.labels.map(v => item.options.find(option => option !== v));
          assert(!gradeNahwAnalysis(item, wrong).correct);
          state.exStates[itemKey] = { response: [...item.labels], originalResponse: wrong, submitted: true, correct: false, corrected: true };
        } else {
          const { id, bankIndex, ...bankItem } = item;
          assert.deepEqual(bankItem, lesson.bank[bankIndex]);
          state.exStates[itemKey] = { selected: item.correct, firstSelected: (item.correct + 1) % item.options.length, submitted: true, corrected: true };
        }
        const corrected = render(state, MODULES);
        validHtml(corrected);
        assert(corrected.includes('Your original answer') && corrected.includes('Expected answer') && corrected.includes('Correction understood'));
        const normalized = normalizeStudySessions({ [key]: session })[key];
        assert.equal(normalized.stepIndex, index);
        assert.deepEqual(normalized.visualState, session.visualState);
      }
    }
    for (let qi = 0; qi < lesson.quiz.length; qi++) {
      const q = lesson.quiz[qi];
      Object.assign(state, { view: 'quiz', quizIndex: qi, quizRevealed: false, quizShowResult: false, quizSelected: null, quizCorrection: null, quizOptionOrder: { [qi]: q.options.map((_, i) => i) } });
      const html = render(state, MODULES);
      validHtml(html);
      assert(html.includes('checkLessonQuiz'));
      Object.assign(state, { quizRevealed: true, quizSelected: (q.correct + 1) % q.options.length, quizCorrection: { selected: q.correct, correct: true } });
      assert(render(state, MODULES).includes('Correction understood'));
      assert.notEqual(state.quizSelected, q.correct, 'Correction must retain the scored answer');
    }
    totals.lessons++; totals.concepts += lesson.concepts.length;
    totals.teachingSteps += steps.filter(s => s.kind === 'teach').length;
    totals.analysis += sarfAnalysisItems(lesson).length;
    totals.practice += sarfPracticeItems(lesson).length;
    totals.quiz += lesson.quiz.length; totals.bank += lesson.bank.length;
  }
}

const mod = MODULES[0], lesson = mod.lessons[0], key = studyKey('adv-sarf', mod.id, lesson.id);
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
const completed = Object.fromEntries(MODULES.map(m => [m.id, Object.fromEntries(m.lessons.map(l => [l.id, true]))]));
assert.equal(getReviewPool(completed).length, 1522, 'Review retains 1,186 bank items and 336 quiz questions');
assert.deepEqual({ lessons: totals.lessons, concepts: totals.concepts, blocks: totals.blocks, clarifications: totals.clarifications, tables: totals.tables, quiz: totals.quiz, bank: totals.bank }, { lessons: 56, concepts: 240, blocks: 1206, clarifications: 55, tables: 136, quiz: 336, bank: 1186 });
console.log('Advanced Sarf checks passed:', JSON.stringify(totals));
console.log('Original source, review and quiz content preserved; comparison answers, corrections, visual states and saved-session migration checked.');

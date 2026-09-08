import assert from 'node:assert/strict';
import { MODULES } from '../content-fstu/index.js';
import { setActiveCourse, conceptKey } from '../content/index.js';
import { createInitialState } from '../js/state.js';
import { render } from '../js/render.js';
import { createStudySession, normalizeStudySessions, studyKey } from '../js/learning/study.js';
import { introNahwAnalysisItems, introNahwDiagram, introNahwPracticeItems, introNahwVisualCount } from '../js/learning/intro-nahw.js';
import { introNahwSentenceVisual } from '../js/learning/render-intro-nahw.js';
import { escBidi } from '../js/html.js';
import { nativeItem, nativeItemKey } from '../js/learning/native.js';
import { nahwAnalysisComplete, gradeNahwAnalysis } from '../js/learning/nahw.js';

const storage = new Map();
globalThis.localStorage = { getItem: k => storage.get(k) ?? null, setItem: (k, v) => storage.set(k, String(v)), removeItem: k => storage.delete(k) };
const state = await createInitialState();
await setActiveCourse('intro-nahw');
Object.assign(state, { courseId: 'intro-nahw', forceUnlockAll: true });
const totals = { lessons: 0, concepts: 0, blocks: 0, tables: 0, diagrams: 0, summaries: 0, checks: 0, analysis: 0, practice: 0, quiz: 0, bank: 0, visualStates: 0 };
const validHtml = (html, key) => assert(!html.includes('undefined') && !html.includes('[object Object]'), `${key}: invalid rendered content`);

for (let mi = 0; mi < MODULES.length; mi++) {
  const mod = MODULES[mi], original = (await import(`../content-fstu/module-${String(mi + 1).padStart(2, '0')}.js`)).default;
  for (const lesson of mod.lessons) {
    const { learningModel, learningKey, ...source } = lesson;
    assert.equal(learningModel, 'mizan-intro-nahw');
    assert.deepEqual(source, original.lessons.find(l => l.id === lesson.id), `${learningKey}: all original lesson data retained`);
    Object.assign(state, { view: 'lesson', moduleId: mod.id, lessonId: lesson.id });
    const key = studyKey('intro-nahw', mod.id, lesson.id);
    const session = createStudySession(state, mod, lesson, '2026-09-08T00:00:00Z', key);
    state.studySessions[key] = session;
    const steps = session.steps;
    assert.equal(new Set(steps.map(s => s.id)).size, steps.length);
    lesson.concepts.forEach((concept, ci) => {
      const teaching = steps.filter(s => s.kind === 'teach' && s.conceptIndex === ci);
      assert.deepEqual(teaching.flatMap(s => s.lineIndices), concept.lines.map((_, i) => i));
      if (concept.exercise) assert(steps.findIndex(s => s.kind === 'check' && s.conceptIndex === ci) > steps.indexOf(teaching.at(-1)));
      totals.blocks += concept.lines.length;
      totals.tables += concept.lines.filter(l => l.table).length;
      totals.diagrams += concept.lines.filter(l => l.tarkeebDiagram).length;
    });
    assert.equal(introNahwAnalysisItems(lesson).length + introNahwPracticeItems(lesson).length, 2, `${key}: two independent exercises`);
    for (let si = 0; si < steps.length; si++) {
      session.stepIndex = si;
      const step = steps[si];
      for (let selected = 0; selected < introNahwVisualCount(lesson, step); selected++) {
        session.visualState = { [step.id]: { selected } };
        const html = render(state, MODULES);
        validHtml(html, `${key}/${step.id}/${selected}`);
        assert(html.includes('mz-study-body'));
        const diagram = lesson.concepts[step.conceptIndex]?.lines[step.diagramIndex]?.tarkeebDiagram;
        if (diagram && introNahwDiagram(diagram)) {
          const span = diagram.rows.flatMap(row => row.labels)[selected];
          const visual = introNahwSentenceVisual(diagram, step, session);
          assert.equal([...visual.matchAll(/<span class="is-selected">/g)].length, span.end - span.start + 1);
          const highlighted = diagram.cells.slice(span.start, span.end + 1).map(word => `<span class="is-selected">${escBidi(word)}</span>`).join('');
          assert(visual.includes(highlighted), `${key}: highlighted phrase matches its original role span`);
          assert(visual.includes(`<strong>${escBidi(span.role)}</strong>`));
        }
        totals.visualStates++;
      }
      if (['check', 'practice', 'analysis'].includes(step.kind)) {
        const item = nativeItem(lesson, step), itemKey = nativeItemKey(mod, lesson, step);
        assert(item.prompt && item.options.length >= 2);
        if (step.kind === 'analysis') {
          assert(!nahwAnalysisComplete(item, null));
          assert(!nahwAnalysisComplete(item, item.labels.slice(1)));
          assert(gradeNahwAnalysis(item, item.labels).correct);
          if (item.bankIndex != null) {
            const bank = lesson.bank[item.bankIndex];
            const spans = [...bank.rows[item.rowIndex].labels].sort((a, b) => a.start - b.start);
            assert.deepEqual(item.words, spans.map(s => bank.cells.slice(s.start, s.end + 1).join(' ')));
            assert.deepEqual(item.labels, spans.map(s => s.role));
            bank.cells.forEach((_, i) => assert.equal(spans.filter(s => s.start <= i && s.end >= i).length, 1));
          }
          const wrong = item.labels.map(label => item.options.find(option => option !== label));
          assert(!gradeNahwAnalysis(item, wrong).correct);
          state.exStates[itemKey] = { response: item.labels, originalResponse: wrong, correct: false, corrected: true, submitted: true };
        } else {
          if (step.kind === 'practice') {
            const { id, bankIndex, ...originalItem } = item;
            assert.deepEqual(originalItem, lesson.bank[bankIndex]);
          }
          state.exStates[itemKey] = { selected: item.correct, firstSelected: (item.correct + 1) % item.options.length, corrected: true, submitted: true };
        }
        const corrected = render(state, MODULES);
        validHtml(corrected, key);
        assert(corrected.includes('Your original answer') && corrected.includes('Expected answer') && corrected.includes('Correction understood'));
        assert.equal(normalizeStudySessions({ [key]: session })[key].stepIndex, si);
      }
    }
    for (let qi = 0; qi < lesson.quiz.length; qi++) {
      const q = lesson.quiz[qi];
      Object.assign(state, { view: 'quiz', quizIndex: qi, quizSelected: null, quizRevealed: false, quizShowResult: false, quizCorrection: null, quizOptionOrder: { [qi]: q.options.map((_, i) => i) } });
      const html = render(state, MODULES);
      validHtml(html, key);
      assert(html.includes('checkLessonQuiz'));
      Object.assign(state, { quizSelected: (q.correct + 1) % q.options.length, quizRevealed: true, quizCorrection: { selected: q.correct, correct: true } });
      assert(render(state, MODULES).includes('Correction understood'));
      assert.notEqual(state.quizSelected, q.correct);
    }
    // Rebuild every legacy concept/check position without changing its identity.
    const legacy = lesson.concepts.flatMap((c, conceptIndex) => [{ id: `concept:${conceptIndex}:teach`, kind: 'teach', conceptIndex }, ...(c.exercise ? [{ id: `concept:${conceptIndex}:check`, kind: 'check', conceptIndex }] : [])]);
    for (let i = 0; i < legacy.length; i++) {
      state.studySessions[key] = { id: 'legacy', version: 1, lessonId: lesson.id, steps: legacy, stepIndex: i };
      const migrated = createStudySession(state, mod, lesson, '2026-09-08T01:00:00Z', 'unused');
      assert.equal(migrated.id, 'legacy');
      assert.equal(migrated.steps[migrated.stepIndex].kind, legacy[i].kind);
      assert.equal(migrated.steps[migrated.stepIndex].conceptIndex, legacy[i].conceptIndex);
    }
    totals.lessons++; totals.concepts += lesson.concepts.length;
    totals.summaries += Number(!!lesson.summary); totals.checks += lesson.concepts.filter(c => c.exercise).length;
    totals.analysis += introNahwAnalysisItems(lesson).length; totals.practice += introNahwPracticeItems(lesson).length;
    totals.quiz += lesson.quiz.length; totals.bank += lesson.bank.length;
  }
}
const mod = MODULES[0], lesson = mod.lessons[0];
state.studySessions = {};
state.exStates = { [conceptKey(mod.id, lesson.id, 0)]: { passed: true, selected: 0 } };
const resumed = createStudySession(state, mod, lesson, '2026-09-08T01:00:00Z', 'resumed');
assert.equal(resumed.steps[resumed.stepIndex].conceptIndex, 1);
assert.deepEqual({ ...totals, visualStates: 0 }, { lessons: 208, concepts: 582, blocks: 2829, tables: 298, diagrams: 353, summaries: 198, checks: 555, analysis: 365, practice: 51, quiz: 1353, bank: 11646, visualStates: 0 });
console.log('Introductory Nahw checks passed:', JSON.stringify(totals));
console.log('Original content and summaries retained; all response states, source-backed sentence roles and legacy positions verified.');

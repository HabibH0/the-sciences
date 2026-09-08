import assert from 'node:assert/strict';
import { MODULES } from '../content-fstu-sarf/index.js';
import { setActiveCourse, conceptKey, getReviewPool } from '../content/index.js';
import { createInitialState } from '../js/state.js';
import { render } from '../js/render.js';
import { escBidi } from '../js/html.js';
import { createStudySession, normalizeStudySessions, studyKey } from '../js/learning/study.js';
import { introSarfAnalysisItems, introSarfPracticeItems, introSarfTablePages, introSarfTableVisual, introSarfVisualCount } from '../js/learning/intro-sarf.js';
import { introSarfTableHtml } from '../js/learning/render-intro-sarf.js';
import { nativeItem, nativeItemKey } from '../js/learning/native.js';
import { nahwAnalysisComplete, gradeNahwAnalysis } from '../js/learning/nahw.js';

const storage = new Map();
globalThis.localStorage = { getItem: k => storage.get(k) ?? null, setItem: (k, v) => storage.set(k, String(v)), removeItem: k => storage.delete(k) };
const state = await createInitialState();
await setActiveCourse('intro-sarf');
Object.assign(state, { courseId: 'intro-sarf', forceUnlockAll: true });
const totals = { lessons: 0, concepts: 0, blocks: 0, tables: 0, interactiveTables: 0, summaries: 0, checks: 0, analysis: 0, practice: 0, quiz: 0, bank: 0, visualStates: 0 };
const validHtml = html => assert(!html.includes('undefined') && !html.includes('[object Object]'), 'No invalid rendered content');

for (const [mi, mod] of MODULES.entries()) {
  const original = (await import(`../content-fstu-sarf/module-${String(mi + 1).padStart(2, '0')}.js`)).default;
  for (const lesson of mod.lessons) {
    const { learningModel, learningKey, ...source } = lesson;
    assert.equal(learningModel, 'mizan-intro-sarf');
    assert.deepEqual(source, original.lessons.find(l => l.id === lesson.id), `${learningKey}: original lesson data retained`);
    Object.assign(state, { view: 'lesson', moduleId: mod.id, lessonId: lesson.id });
    const key = studyKey('intro-sarf', mod.id, lesson.id);
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
      totals.interactiveTables += concept.lines.filter(l => l.table && introSarfTableVisual(l.table)).length;
    });
    assert.equal(introSarfAnalysisItems(lesson).length + introSarfPracticeItems(lesson).length, 2);
    for (const [si, step] of steps.entries()) {
      session.stepIndex = si;
      const table = lesson.concepts[step.conceptIndex]?.lines[step.tableIndex]?.table;
      if (table && introSarfTableVisual(table)) {
        assert.deepEqual(introSarfTablePages(table).flat(), table.headers.map((_, i) => i).slice(1));
      }
      for (let selected = 0; selected < introSarfVisualCount(lesson, step); selected++) {
        session.visualState = { [step.id]: { selected } };
        const html = render(state, MODULES);
        validHtml(html); assert(html.includes('mz-study-body'));
        if (table && introSarfTableVisual(table)) {
          const pages = introSarfTablePages(table), row = table.rows[Math.floor(selected / pages.length)];
          const visual = introSarfTableHtml(table, step, session);
          assert(visual.includes(`<strong>${escBidi(row[0])}</strong>`));
          for (const ci of pages[selected % pages.length]) {
            assert(visual.includes(`<div data-source-column="${ci}"><dt>${escBidi(table.headers[ci])}</dt><dd>${escBidi(row[ci] || '—')}</dd>`));
          }
        }
        totals.visualStates++;
      }
      if (['check', 'practice', 'analysis'].includes(step.kind)) {
        const item = nativeItem(lesson, step), itemKey = nativeItemKey(mod, lesson, step);
        assert(item.prompt && item.options.length >= 2);
        if (step.kind === 'analysis') {
          const sourceTable = lesson.concepts[item.conceptIndex].lines[item.lineIndex].table;
          assert.deepEqual(item.words, item.rowIndices.map(i => sourceTable.rows[i][item.cue]));
          assert.deepEqual(item.labels, item.rowIndices.map(i => sourceTable.rows[i][item.answer]));
          assert.equal(new Set(item.words).size, item.words.length);
          item.rowIndices.forEach(i => assert(sourceTable.rows.every(row => row[item.cue] !== sourceTable.rows[i][item.cue] || row[item.answer] === sourceTable.rows[i][item.answer]), `${key}: no ambiguous matches`));
          assert(!nahwAnalysisComplete(item, null));
          assert(!nahwAnalysisComplete(item, item.labels.slice(1)));
          assert(gradeNahwAnalysis(item, item.labels).correct);
          const wrong = item.labels.map(label => item.options.find(option => option !== label));
          assert(!gradeNahwAnalysis(item, wrong).correct);
          state.exStates[itemKey] = { response: item.labels, originalResponse: wrong, correct: false, corrected: true, submitted: true };
        } else {
          if (step.kind === 'practice') {
            const { id, bankIndex, ...originalItem } = item;
            assert.deepEqual(originalItem, lesson.bank[bankIndex]);
            assert(!lesson.concepts.some(concept => concept.exercise?.prompt === item.prompt), 'Independent practice does not repeat a guided check');
          }
          state.exStates[itemKey] = { selected: item.correct, firstSelected: (item.correct + 1) % item.options.length, corrected: true, submitted: true };
        }
        const corrected = render(state, MODULES);
        validHtml(corrected);
        assert(corrected.includes('Your original answer') && corrected.includes('Expected answer') && corrected.includes('Correction understood'));
        assert.equal(normalizeStudySessions({ [key]: session })[key].stepIndex, si);
      }
    }
    for (let qi = 0; qi < lesson.quiz.length; qi++) {
      const q = lesson.quiz[qi];
      Object.assign(state, { view: 'quiz', quizIndex: qi, quizSelected: null, quizRevealed: false, quizShowResult: false, quizCorrection: null, quizOptionOrder: { [qi]: q.options.map((_, i) => i) } });
      const html = render(state, MODULES);
      validHtml(html); assert(html.includes('checkLessonQuiz'));
      Object.assign(state, { quizSelected: (q.correct + 1) % q.options.length, quizRevealed: true, quizCorrection: { selected: q.correct, correct: true } });
      assert(render(state, MODULES).includes('Correction understood'));
      assert.notEqual(state.quizSelected, q.correct);
    }
    const legacy = lesson.concepts.flatMap((c, conceptIndex) => [{ id: `concept:${conceptIndex}:teach`, kind: 'teach', conceptIndex }, ...(c.exercise ? [{ id: `concept:${conceptIndex}:check`, kind: 'check', conceptIndex }] : [])]);
    if (lesson.summary) legacy.push({ id: 'summary', kind: 'summary' });
    for (let i = 0; i < legacy.length; i++) {
      state.studySessions[key] = { id: 'legacy', version: 1, lessonId: lesson.id, steps: legacy, stepIndex: i };
      const migrated = createStudySession(state, mod, lesson, '2026-09-08T01:00:00Z', 'unused');
      assert.equal(migrated.id, 'legacy');
      assert.equal(migrated.steps[migrated.stepIndex].kind, legacy[i].kind);
      assert.equal(migrated.steps[migrated.stepIndex].conceptIndex, legacy[i].conceptIndex);
    }
    totals.lessons++; totals.concepts += lesson.concepts.length;
    totals.summaries += Number(!!lesson.summary); totals.checks += lesson.concepts.filter(c => c.exercise).length;
    totals.analysis += introSarfAnalysisItems(lesson).length; totals.practice += introSarfPracticeItems(lesson).length;
    totals.quiz += lesson.quiz.length; totals.bank += lesson.bank.length;
  }
}
const completed = Object.fromEntries(MODULES.map(m => [m.id, Object.fromEntries(m.lessons.map(l => [l.id, true]))]));
assert.equal(getReviewPool(completed).length, 4114);
const mod = MODULES[0], lesson = mod.lessons[0];
state.studySessions = {};
state.exStates = { [conceptKey(mod.id, lesson.id, 0)]: { passed: true, selected: 0 } };
const resumed = createStudySession(state, mod, lesson, '2026-09-08T01:00:00Z', 'resumed');
assert.equal(resumed.steps[resumed.stepIndex].conceptIndex, 1);
assert.deepEqual([totals.lessons, totals.concepts, totals.blocks, totals.tables, totals.summaries, totals.checks, totals.quiz, totals.bank], [66, 311, 1206, 536, 56, 301, 463, 3651]);
assert.deepEqual([totals.interactiveTables, totals.analysis, totals.practice, totals.visualStates], [536, 57, 75, 8077]);
console.log('Introductory Sarf checks passed:', JSON.stringify(totals));
console.log('All original content retained; every comparison, source match, answer state and legacy position verified.');

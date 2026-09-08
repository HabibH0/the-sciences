import assert from 'node:assert/strict';
import { LITERATURE_LESSONS, loadLiteratureLesson, adaptLiteratureSource, enrichmentDraft } from '../content-lit/learning/index.js';
import { LIT_BOOKS, loadChapter } from '../content-lit/index.js';
import { createLiteratureRun, updateLiteratureRun, currentLiteratureStep, gradeLiterature, runComplete, runMetrics, normalizeLiterature, mergeLiterature, literatureInsights, helpSteps, validateLiteratureLesson, optionOrder, ORDER_TYPES, reconcileLiteratureRun } from '../js/literature/engine.js';
import { literatureLessonHtml } from '../js/literature/render.js';
import { navFromHash, hashForState } from '../js/nav.js';
import { mergeProgressData } from '../js/storage/syncClient.js';

const targets = new Set(LITERATURE_LESSONS.flatMap(l => [...l.vocabulary, ...l.constructions].map(v => v.id)));
let clock = 1000, serial = 0, rendered = 0, exercises = 0;
const change = (l, r, a, v) => updateLiteratureRun(l, r, a, v, ++clock, `e-${++serial}`);
const stateFor = (l, r) => ({ view: 'litLesson', literatureLessonId: l.id, literature: { version: 1, runs: { [r.id]: r } }, completed: {} });
const render = (l, r) => { const html = literatureLessonHtml(stateFor(l, r)); assert(!html.includes('undefined')); rendered++; return html; };
for (const definition of LITERATURE_LESSONS) {
  const l = await loadLiteratureLesson(definition.id);
  assert.deepEqual(validateLiteratureLesson(l, targets), []);
  assert.equal(l.source.sentences.map(s => s.ar).join(' '), l.source.text);
  assert.deepEqual(navFromHash(hashForState({ view: 'litLesson', literatureLessonId: l.id })), { view: 'litLesson', literatureLessonId: l.id, litHome: true });
  let run = createLiteratureRun(l, `run-${l.id}`, ++clock);
  assert(!render(l, run).includes(l.source.text), 'No full passage at orientation');
  assert(!runComplete(l, { ...run, position: 999 }));
  while (currentLiteratureStep(l, run).step) {
    const { step } = currentLiteratureStep(l, run);
    if (step.type === 'orientation' || step.type === 'clean') {
      const html = render(l, run);
      if (step.type === 'clean') { assert(html.includes(l.source.text)); assert(!html.includes(l.source.translation)); }
      run = change(l, run, 'acknowledge', step.type === 'clean' ? 'with-effort' : 'ready');
      continue;
    }
    exercises++;
    const before = run.position;
    run = change(l, run, 'next');
    assert.equal(run.position, before, 'Cannot skip an exercise');
    const initial = render(l, run);
    if (step.phase === 'decode') {
      assert(!initial.includes('class="la-option'), 'Interpretations wait until requested');
      const levels = helpSteps(l, step);
      assert.equal(levels[4].kind, 'translation');
      assert(!initial.includes(l.source.translation));
      let supported = run;
      for (let i = 0; i < 6; i++) { supported = change(l, supported, 'help'); const html = render(l, supported); if (i < 4) assert(!html.includes(l.source.translation)); }
      run = change(l, run, 'reveal');
    }
    assert(gradeLiterature(step, step.answer));
    if (ORDER_TYPES.has(step.type)) assert(!gradeLiterature(step, optionOrder(run, step)), 'Bank must not start solved');
    // Wrong, retry, correct: retain the original answer and prevent inflated independence.
    const wrong = Array.isArray(step.answer) ? [...step.answer].reverse() : (step.answer + 1) % step.options.length;
    if (!gradeLiterature(step, wrong)) {
      for (const value of Array.isArray(wrong) ? wrong : [wrong]) run = change(l, run, 'select', value);
      run = change(l, run, 'check');
      assert(render(l, run).includes('Revisit this relationship'));
      const original = JSON.stringify(run.attempts);
      run = change(l, run, 'retry');
      assert.equal(JSON.stringify(run.attempts), original);
    }
    for (const value of Array.isArray(step.answer) ? step.answer : [step.answer]) run = change(l, run, 'select', value);
    run = change(l, run, 'check');
    assert(render(l, run).includes('is-correct'));
    // Real JSON round trip must preserve both draft and first-attempt evidence.
    const restored = normalizeLiterature(JSON.parse(JSON.stringify({ runs: { [run.id]: run } }))).runs[run.id];
    assert.deepEqual(restored, run);
    run = change(l, restored, 'next');
  }
  assert(runComplete(l, run));
  assert.equal(runMetrics(l, run).independentTransfer, 0);
  render(l, run);
  const saved = { version: 1, runs: { [run.id]: run } };
  assert.deepEqual(mergeLiterature(saved, saved), saved);
  const branch = structuredClone(run); branch.attempts.push({ id: `branch-${l.id}`, exerciseId: l.exercises[0].id, at: ++clock, answer: 1, hints: 1 }); branch.updatedAt = clock;
  const remote = { runs: { [run.id]: branch } };
  assert.deepEqual(mergeLiterature(saved, remote), mergeLiterature(remote, saved));
  assert.equal(mergeLiterature(saved, remote).runs[run.id].attempts.length, branch.attempts.length);
  const legacy = { litProgress: { 'qiraah-v1/ch1': { para: 3, done: true } }, litUnknown: { 'qiraah-v1': { مكث: true } }, literature: saved };
  const merged = mergeProgressData(legacy, { literature: remote });
  assert(merged.litProgress['qiraah-v1/ch1'].done);
  assert(merged.litUnknown['qiraah-v1'].مكث);
  assert(merged.literature.runs[run.id]);
}
assert.equal(literatureInsights(LITERATURE_LESSONS, { litProgress: { 'qiraah-v1/ch1': { done: true } } }).completed.length, 0);
assert.deepEqual(normalizeLiterature({ runs: { bad: { lessonId: null }, '__proto__': [] } }), { version: 1, runs: {} });
// Exercise state cannot inject markup, stored correctness or unknown option indexes.
const lesson = await loadLiteratureLesson(LITERATURE_LESSONS[0].id);
assert(!gradeLiterature(lesson.exercises[1], [2, 2, 3]));
assert(!gradeLiterature(lesson.exercises[0], 999));
assert(!gradeLiterature(lesson.exercises[2], [0, 1, 2, 999]));
const book = LIT_BOOKS[0], shell = book.chapters[0], chapter = await loadChapter(book.id, shell.id);
const original = JSON.stringify(chapter), source = adaptLiteratureSource(book, shell, chapter);
assert.equal(source.legacy, chapter);
assert.equal(source.vocabularyNotes, chapter.lemmas);
assert.equal(source.translation, chapter.paragraphs.flatMap(p => p.sentences).map(s => s.en).join(' '));
assert.equal(enrichmentDraft(book, shell, chapter).status, 'needs-authoring');
assert.equal(JSON.stringify(chapter), original);
assert.deepEqual(navFromHash('#/library/books'), { view: 'litSources', litHome: true });
assert.deepEqual(navFromHash('#/literature/lesson/unknown'), { view: 'library', litHome: true });
// Old reader content survives the adapter for every chapter, including verse,
// workshops and annotations; no source text is rewritten by enrichment.
let chapters = 0;
for (const b of LIT_BOOKS) for (const sh of b.chapters) {
  const c = await loadChapter(b.id, sh.id), before = JSON.stringify(c);
  const adapted = adaptLiteratureSource(b, sh, c);
  assert.equal(adapted.sentences.length, c.paragraphs.flatMap(p => p.sentences).length);
  assert.equal(adapted.legacy, c);
  assert.equal(JSON.stringify(c), before);
  chapters++;
}
assert.equal(chapters, 292);
const polluted = normalizeLiterature(JSON.parse('{"runs":{"__proto__":{"lessonId":"early-morning"},"constructor":{"lessonId":"early-morning"}}}'));
assert.deepEqual(polluted, { version: 1, runs: {} });
assert.equal({}.lessonId, undefined);

const perfectRuns = { version: 1, runs: {} };
for (let repeat = 0; repeat < 5; repeat++) {
  let run = createLiteratureRun(lesson, `perfect-${repeat}`, ++clock);
  while (currentLiteratureStep(lesson, run).step) {
    const { step } = currentLiteratureStep(lesson, run);
    if (step.type === 'orientation' || step.type === 'clean') {
      if (step.type === 'clean' && repeat === 0) {
        const supported = change(lesson, run, 'acknowledge', 'needs-support');
        assert.equal(currentLiteratureStep(lesson, supported).step.phase, 'decode');
        assert(supported.help.decode > 0, 'A request for help should actually return to support');
      }
      run = change(lesson, run, 'acknowledge', step.type === 'clean' ? 'independent' : 'ready');
    } else {
      for (const value of Array.isArray(step.answer) ? step.answer : [step.answer]) run = change(lesson, run, 'select', value);
      run = change(lesson, run, 'check');
      run = change(lesson, run, 'next');
    }
  }
  assert.equal(runMetrics(lesson, run).independentTransfer, 2);
  assert(runMetrics(lesson, run).independentDecode);
  perfectRuns.runs[run.id] = run;
}
const repeated = literatureInsights(LITERATURE_LESSONS, perfectRuns);
assert.equal(repeated.completed.length, 1, 'Replaying does not add lesson completions');
assert.equal(repeated.knowledge.early.transferContexts, 2, 'Repeats never manufacture new transfer contexts');
const firstRun = { version: 1, runs: { 'perfect-0': perfectRuns.runs['perfect-0'] } };
assert.equal(repeated.knowledge.early.encounters, literatureInsights(LITERATURE_LESSONS, firstRun).knowledge.early.encounters);
assert.equal(repeated.knowledge.early.status, 'likely-mastered');
const malformedRun = createLiteratureRun(lesson, 'malformed-draft', ++clock);
malformedRun.drafts.build = { answer: [99, 1, 1], checking: true, revealed: false, conceptOpen: false, updatedAt: clock };
malformedRun.help.word = 6;
malformedRun.acknowledged.clean = 'ready';
const repaired = reconcileLiteratureRun(lesson, malformedRun);
assert.deepEqual(repaired.drafts.build.answer, [1]);
assert.equal(repaired.drafts.build.checking, false);
assert.equal(repaired.help.word, 1);
assert(!repaired.acknowledged.clean);
console.log(`Literature verified: ${LITERATURE_LESSONS.length} authored lessons, ${exercises} exercises, ${rendered} rendered states; grading, retry, transfer gates, source adapter, routes, persistence and merge passed.`);

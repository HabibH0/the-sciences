// Structural validator for content/module-01.js (and any future module).
// Run with `npm run validate`. Checks shape only -- not pedagogical
// correctness, which is on the author.
import { MODULES, conceptLines } from '../content/index.js';

let errors = 0;

function fail(msg) {
  console.error(`✗ ${msg}`);
  errors += 1;
}

function checkMcqItem(item, where) {
  if (!Array.isArray(item.options) || item.options.length < 2) {
    fail(`${where}: needs at least 2 options`);
    return;
  }
  if (!Number.isInteger(item.correct) || item.correct < 0 || item.correct >= item.options.length) {
    fail(`${where}: correct index ${item.correct} out of bounds for ${item.options.length} options`);
  }
}

function checkTarkeebItem(item, where) {
  if (!Array.isArray(item.words) || item.words.length === 0) {
    fail(`${where}: needs a non-empty words[] array`);
    return;
  }
  if (!Array.isArray(item.labels) || item.labels.length !== item.words.length) {
    fail(`${where}: labels[] must be the same length as words[] (${item.words.length})`);
  }
  if (!item.instruction) fail(`${where}: missing instruction`);
}

const seenIds = new Set();

MODULES.forEach((mod) => {
  if (seenIds.has(mod.id)) fail(`duplicate module id "${mod.id}"`);
  seenIds.add(mod.id);
  if (!mod.lessons || mod.lessons.length === 0) fail(`module ${mod.id}: has no lessons`);

  (mod.lessons || []).forEach((lesson) => {
    const lid = `${mod.id}/${lesson.id}`;
    if (seenIds.has(lid)) fail(`duplicate lesson id "${lid}"`);
    seenIds.add(lid);

    if (!lesson.concepts || lesson.concepts.length === 0) fail(`${lid}: has no concepts`);
    (lesson.concepts || []).forEach((c, i) => {
      const where = `${lid} concept[${i}]`;
      if (!c.heading) fail(`${where}: missing heading`);
      if (!c.body && !Array.isArray(c.lines)) fail(`${where}: needs a body (or an explicit lines[])`);
      if (conceptLines(c).length === 0) fail(`${where}: body split to no lines`);
      if (c.exercise) {
        if (c.exercise.kind && c.exercise.kind !== 'mcq') fail(`${where}: concept exercises must be kind 'mcq'`);
        checkMcqItem(c.exercise, `${where} exercise`);
      }
    });

    if (!lesson.quiz || lesson.quiz.length < 3) fail(`${lid}: quiz needs at least 3 questions`);
    (lesson.quiz || []).forEach((q, i) => {
      const where = `${lid} quiz[${i}]`;
      if (!q.q) fail(`${where}: missing question text`);
      checkMcqItem(q, where);
    });

    // drills[] is optional: the lesson flow is concepts -> quiz, and the
    // separate Practice Mode pulls from bank[]. Still shape-checked if present.
    (lesson.drills || []).forEach((d, i) => {
      const where = `${lid} drill[${i}]`;
      if (!d.title) fail(`${where}: missing title`);
      if (!d.prompt) fail(`${where}: missing prompt`);
      checkMcqItem(d, where);
    });

    if (!lesson.bank || lesson.bank.length < 2) fail(`${lid}: bank needs at least 2 items`);
    (lesson.bank || []).forEach((b, i) => {
      const where = `${lid} bank[${i}]`;
      if (!b.title) fail(`${where}: missing title`);
      if (b.kind === 'tarkeeb') checkTarkeebItem(b, where);
      else checkMcqItem(b, where);
    });
  });
});

if (errors > 0) {
  console.error(`\n${errors} error(s) found.`);
  process.exit(1);
} else {
  const totalLessons = MODULES.reduce((n, m) => n + m.lessons.length, 0);
  const totalConcepts = MODULES.reduce((n, m) => n + m.lessons.reduce((k, l) => k + l.concepts.length, 0), 0);
  const totalBank = MODULES.reduce((n, m) => n + m.lessons.reduce((k, l) => k + l.bank.length, 0), 0);
  console.log(`✓ ${MODULES.length} module(s), ${totalLessons} lesson(s), ${totalConcepts} concept(s), ${totalBank} bank item(s) — all valid.`);
}

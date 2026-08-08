// Structural validator for every course's module-0N.js files (content/ and
// content-fstu/, see COURSES in content/index.js). Run with `npm run
// validate`. Checks shape only -- not pedagogical correctness, which is on
// the author. Both courses share the identical module/lesson shape, so one
// pass of checks covers both -- just looped once per course.
import { COURSES, conceptLines, ensureCoursesLoaded, flattenTarkeebSlots } from '../content/index.js';

await ensureCoursesLoaded(COURSES.map((course) => course.id));

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

// Original course + Unit 1's flat schema: one slot per word.
function checkTarkeebItemFlat(item, where) {
  if (!Array.isArray(item.words) || item.words.length === 0) {
    fail(`${where}: needs a non-empty words[] array`);
    return;
  }
  if (!Array.isArray(item.labels) || item.labels.length !== item.words.length) {
    fail(`${where}: labels[] must be the same length as words[] (${item.words.length})`);
  }
  if (!item.instruction) fail(`${where}: missing instruction`);
}

// content-fstu units 2+: a cells[]/rows[] parse diagram (see
// flattenTarkeebSlots in content/index.js) -- label spans can cover more
// than one cell, and stack in rows above/below the sentence.
function checkTarkeebItemDiagram(item, where) {
  if (!Array.isArray(item.cells) || item.cells.length === 0) {
    fail(`${where}: needs a non-empty cells[] array`);
    return;
  }
  if (!Array.isArray(item.rows) || item.rows.length === 0) {
    fail(`${where}: needs a non-empty rows[] array`);
    return;
  }
  item.rows.forEach((row, ri) => {
    if (row.position !== 'above' && row.position !== 'below') {
      fail(`${where} row[${ri}]: position must be "above" or "below", got ${JSON.stringify(row.position)}`);
    }
    (row.labels || []).forEach((label, li) => {
      const rw = `${where} row[${ri}] label[${li}]`;
      if (!Number.isInteger(label.start) || !Number.isInteger(label.end) || label.start < 0 || label.end < label.start || label.end >= item.cells.length) {
        fail(`${rw}: start/end (${label.start}/${label.end}) out of bounds for ${item.cells.length} cells`);
      }
      if (!label.role) fail(`${rw}: missing role`);
    });
  });
  const { slots } = flattenTarkeebSlots(item);
  if (slots.length === 0) fail(`${where}: rows[] produced no label slots`);
}

function checkTarkeebItem(item, where) {
  if (item.cells) checkTarkeebItemDiagram(item, where);
  else checkTarkeebItemFlat(item, where);
}

function validateCourse(course) {
  const { id: courseId, modules: MODULES } = course;
  const seenIds = new Set();

  MODULES.forEach((mod) => {
    const mid = `[${courseId}] ${mod.id}`;
    if (seenIds.has(mod.id)) fail(`duplicate module id "${mid}"`);
    seenIds.add(mod.id);
    if (!mod.lessons || mod.lessons.length === 0) fail(`module ${mid}: has no lessons`);

    (mod.lessons || []).forEach((lesson) => {
      const lid = `[${courseId}] ${mod.id}/${lesson.id}`;
      const lessonKey = `${mod.id}/${lesson.id}`;
      if (seenIds.has(lessonKey)) fail(`duplicate lesson id "${lid}"`);
      seenIds.add(lessonKey);

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

      // lesson.exercise[] is optional -- content-fstu's single lesson-level
      // exercise (js/render.js lessonExerciseCardHtml), not part of the
      // original module-0N.js shape.
      if (lesson.exercise) {
        if (!Array.isArray(lesson.exercise.items) || lesson.exercise.items.length === 0) {
          fail(`${lid} exercise: needs a non-empty items[] array`);
        }
        (lesson.exercise.items || []).forEach((item, i) => {
          const where = `${lid} exercise item[${i}]`;
          if (!item.prompt) fail(`${where}: missing prompt`);
          checkMcqItem(item, where);
        });
      }

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

  return {
    lessons: MODULES.reduce((n, m) => n + m.lessons.length, 0),
    concepts: MODULES.reduce((n, m) => n + m.lessons.reduce((k, l) => k + l.concepts.length, 0), 0),
    bank: MODULES.reduce((n, m) => n + m.lessons.reduce((k, l) => k + l.bank.length, 0), 0),
    modules: MODULES.length,
  };
}

const summaries = COURSES.map((course) => ({ course, totals: validateCourse(course) }));

if (errors > 0) {
  console.error(`\n${errors} error(s) found.`);
  process.exit(1);
} else {
  summaries.forEach(({ course, totals }) => {
    console.log(`✓ [${course.id}] ${totals.modules} module(s), ${totals.lessons} lesson(s), ${totals.concepts} concept(s), ${totals.bank} bank item(s) — all valid.`);
  });
}

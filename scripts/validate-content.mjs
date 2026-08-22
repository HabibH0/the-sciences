// Structural validator for every course's module-0N.js files (content/ and
// content-fstu/, see COURSES in content/index.js). Run with `npm run
// validate`. Checks shape only -- not pedagogical correctness, which is on
// the author. Both courses share the identical module/lesson shape, so one
// pass of checks covers both -- just looped once per course.
import { COURSES, conceptLines, ensureCoursesLoaded, flattenTarkeebSlots } from '../content/index.js';
import { LIT_BOOKS, loadChapter, isBuildEligible, LIT_BUILD_MIN } from '../content-lit/index.js';

await ensureCoursesLoaded(COURSES.map((course) => course.id));

let errors = 0;
const warnings = [];

function fail(msg) {
  console.error(`✗ ${msg}`);
  errors += 1;
}

// For content that works but is thinner than intended -- a stage that will
// run short rather than break. Reported at the end; never fails the run,
// because a library of a hundred-odd chapters shouldn't be blocked from
// shipping by one passage whose sentences are all long.
function warn(msg) {
  warnings.push(msg);
}

function checkMcqItem(item, where) {
  if (!Array.isArray(item.options) || item.options.length < 2) {
    fail(`${where}: needs at least 2 options`);
    return;
  }
  if (!Number.isInteger(item.correct) || item.correct < 0 || item.correct >= item.options.length) {
    fail(`${where}: correct index ${item.correct} out of bounds for ${item.options.length} options`);
  }
  // Optional per-option teaching feedback (explanations[i] says why option i
  // fails -- see conceptBlockHtml in js/render.js). A list longer than its
  // options has slipped out of alignment with them, same check the
  // literature rationales get.
  if (Array.isArray(item.explanations) && item.explanations.length > item.options.length) {
    fail(`${where}: ${item.explanations.length} explanations for ${item.options.length} options`);
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

// --- Literature (content-lit/) --------------------------------------------
// Books are not courses and share none of the shape above (see
// content-lit/index.js), so they get their own pass. Same contract as the
// rest of this file: structure only. The converter
// (scripts/convert-literature.mjs) checks the SOURCE json; this checks what
// actually ships, so a hand-edited or stale chapter module still gets caught.

// Compares two Arabic strings by their letters and diacritics alone. A token
// is a word; `ar` is the clause as printed, so it also carries punctuation,
// quotation ornaments (﴾ ﴿) and honorifics (ﷺ) that are deliberately not
// tokenized -- none of which should count as a difference. What must match is
// the letters, because the reader renders the passage from the TOKENS: a
// clause whose tokens have drifted from its `ar` displays as something the
// book never said, and only shows its real text once it turns up as a build
// exercise.
// Tatweel (U+0640) is dropped along with the punctuation: it sits inside the
// Arabic letter range but isn't a letter, and the print uses it as a dash
// around an aside -- «قَرْنِ الذَّهَبِ ـ وَهُوَ مَدْخَلُ الْقُسْطُنْطِيْنِيَّةِ ـ بِالسَّلاَسِلِ».
const AR_NOT_LETTER = /[^ء-ْٰٱ]|ـ/g;
function bareArabic(text) {
  return String(text || '').replace(AR_NOT_LETTER, '');
}

// Literature-only: a repeated option means one of the distractors was meant
// to be something else, and a rationale list longer than its options has
// slipped out of alignment with them. Both are the kind of thing a
// bulk-written chapter gets wrong and nothing else would catch.
function checkLitOptions(item, where) {
  const options = item.options || [];
  if (new Set(options).size !== options.length) fail(`${where}: repeats an option`);
  if (Array.isArray(item.rationales) && item.rationales.length > options.length) {
    fail(`${where}: ${item.rationales.length} rationales for ${options.length} options`);
  }
}

async function validateLitBook(book) {
  const where0 = `[lit] ${book.id}`;
  if (!book.title || !book.title.ar || !book.title.en) fail(`${where0}: missing title.ar/title.en`);
  if (!book.chapters || !book.chapters.length) fail(`${where0}: has no chapters`);
  let paragraphs = 0;
  let sentences = 0;
  const seen = new Set();
  for (const shell of book.chapters || []) {
    const where = `${where0}/${shell.id}`;
    if (seen.has(shell.id)) fail(`duplicate chapter id "${where}"`);
    seen.add(shell.id);
    if (typeof shell.load !== 'function') {
      fail(`${where}: missing load()`);
      continue;
    }
    const chapter = await loadChapter(book.id, shell.id);
    if (!chapter) {
      fail(`${where}: load() resolved to no CHAPTER export`);
      continue;
    }
    if (chapter.id !== shell.id) fail(`${where}: chapter module's id is "${chapter.id}"`);
    if (!chapter.paragraphs || !chapter.paragraphs.length) fail(`${where}: has no paragraphs`);
    // Sentence ids key the reader's per-clause state (which gloss is open,
    // which word is selected), so a duplicate makes two clauses act as one.
    const sentenceIds = new Set();
    let chapterChecks = 0;
    (chapter.paragraphs || []).forEach((p, pi) => {
      const pw = `${where} paragraph[${pi}]`;
      if (!p.en) fail(`${pw}: missing en`);
      if (!p.sentences || !p.sentences.length) fail(`${pw}: has no sentences`);
      (p.sentences || []).forEach((s, si) => {
        const sw = `${pw} sentence[${si}]`;
        if (!s.id) fail(`${sw}: missing id`);
        if (s.id && sentenceIds.has(s.id)) fail(`${sw}: duplicate sentence id "${s.id}"`);
        sentenceIds.add(s.id);
        // The reader glosses one clause at a time -- a missing en would
        // render as an empty tooltip rather than fail loudly at runtime.
        if (!s.en) fail(`${sw} (${s.id}): missing en`);
        if (!s.ar) fail(`${sw} (${s.id}): missing ar`);
        if (!s.tokens || !s.tokens.length) fail(`${sw} (${s.id}): missing tokens`);
        (s.tokens || []).forEach((t, ti) => {
          if (!t.surface) fail(`${sw} (${s.id}) token[${ti}]: missing surface`);
          if (!t.lemma) fail(`${sw} (${s.id}) token[${ti}]: missing lemma`);
        });
        const joined = bareArabic((s.tokens || []).map((t) => t.surface).join(''));
        if (s.ar && joined && bareArabic(s.ar) !== joined) {
          fail(`${sw} (${s.id}): tokens don't spell out ar\n    ar:     ${s.ar}\n    tokens: ${(s.tokens || []).map((t) => t.surface).join(' ')}`);
        }
      });
      // A paragraph may carry no questions -- a chapter's checks sit with the
      // paragraphs that answer them, and a stretch of pure narration gets
      // none. What would be wrong is a whole chapter without any (see the
      // per-chapter total below).
      chapterChecks += (p.checks || []).length;
      (p.checks || []).forEach((c, ci) => {
        const cw = `${pw} check[${ci}]`;
        if (!c.q) fail(`${cw}: missing q`);
        checkMcqItem({ options: c.options, correct: c.answer }, cw);
        checkLitOptions(c, cw);
        // The optional English version: `answer` indexes both lists, so a
        // mismatched optionsEn would mark a different option correct
        // depending on which language the reader happens to be in.
        if (c.qEn || c.optionsEn) {
          if (!c.qEn) fail(`${cw}: has optionsEn but no qEn`);
          if (!Array.isArray(c.optionsEn) || c.optionsEn.length !== (c.options || []).length) {
            fail(`${cw}: optionsEn must have the same length and order as options`);
          }
        }
      });
      paragraphs += 1;
      sentences += (p.sentences || []).length;
    });
    if (chapterChecks === 0) fail(`${where}: has no comprehension checks at all`);
    const workshop = chapter.workshop || {};
    [...(workshop.cloze || []), ...(workshop.shift || [])].forEach((item, i) => {
      const dw = `${where} workshop[${i}]`;
      checkMcqItem({ options: item.options, correct: item.answer }, dw);
      checkLitOptions(item, dw);
      if (item.type === 'shift' && !item.targetPerson) fail(`${dw}: shift item missing targetPerson`);
      if (item.type === 'cloze' && !item.en) fail(`${dw}: cloze item missing en`);
      // `pre`/`post` are the frame the blank sits in, and they are NOT
      // derivable from `base`: a leading particle belongs in pre (لَنْ [أَجِدَ]
      // أَرْخَصَ), post legitimately changes when a pronoun has to agree with
      // the new person or when an explicit subject has to come out so the
      // shifted verb still agrees, and a one-word sentence (أُصَدِّقُكَ) has no
      // frame at all. `base` is the display line above the frame, not a
      // template -- so the only thing worth asserting is that the question
      // shows the learner SOMETHING to work from.
      if (item.type === 'shift' && !`${item.base || ''}${item.pre || ''}${item.post || ''}`.trim()) {
        fail(`${dw}: shift item has nothing to show -- base, pre and post are all empty`);
      }
    });
    // Every chapter has to be able to fill its build stage, or the reader
    // finishes with an empty third act.
    const buildable = (chapter.paragraphs || [])
      .flatMap((p) => p.sentences || [])
      .filter((s) => isBuildEligible(s)).length;
    // None at all means an empty third stage -- the chapter would finish the
    // moment the workshop ended. Fewer than the target just makes that stage
    // shorter, which is a content note, not a defect.
    if (buildable === 0) {
      fail(`${where}: no sentence can be built -- the build stage would be empty`);
    } else if (buildable < LIT_BUILD_MIN) {
      warn(`${where}: only ${buildable} buildable sentence(s), so the build stage runs short of ${LIT_BUILD_MIN} (its sentences are mostly longer than ${9} words)`);
    }
  }
  return { chapters: (book.chapters || []).length, paragraphs, sentences };
}

const litSummaries = [];
for (const book of LIT_BOOKS) {
  litSummaries.push({ book, totals: await validateLitBook(book) });
}

if (errors > 0) {
  console.error(`\n${errors} error(s) found.`);
  process.exit(1);
} else {
  summaries.forEach(({ course, totals }) => {
    console.log(`✓ [${course.id}] ${totals.modules} module(s), ${totals.lessons} lesson(s), ${totals.concepts} concept(s), ${totals.bank} bank item(s) — all valid.`);
  });
  litSummaries.forEach(({ book, totals }) => {
    console.log(`✓ [lit ${book.id}] ${totals.chapters} chapter(s), ${totals.paragraphs} paragraph(s), ${totals.sentences} sentence(s) — all valid.`);
  });
  if (warnings.length) {
    console.log(`\n${warnings.length} note(s) — valid, but worth a look:`);
    warnings.forEach((w) => console.log(`  ! ${w}`));
  }
}

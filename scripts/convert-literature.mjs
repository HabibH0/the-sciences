// Turns one authored chapter JSON (see content-lit/README.md for the source
// schema) into the content module the app actually reads,
// content-lit/<bookId>/chapter-NN.js.
//
//   node scripts/convert-literature.mjs literature1/qiraah_v1_ch1.json
//
// The conversion is deliberately dumb -- it reshapes and validates, it never
// invents content. Everything the reader derives at runtime (build-sentence
// distractors, which sentences get drilled, feature labels) is NOT baked in
// here; it lives in content-lit/index.js so it can react to which words the
// learner has actually marked unknown. That is why the source's
// `construction_exercises` block is dropped: its examples are one frozen
// sample of what the client now generates per session.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const inputArg = process.argv[2];
if (!inputArg) {
  console.error('usage: node scripts/convert-literature.mjs <chapter.json> [outFile]');
  process.exit(1);
}

const source = JSON.parse(fs.readFileSync(path.resolve(root, inputArg), 'utf8'));

const problems = [];
function need(cond, msg) {
  if (!cond) problems.push(msg);
}

need(source.course, 'missing "course"');
need(Number.isInteger(source.volume), 'missing/invalid "volume"');
need(Number.isInteger(source.chapter), 'missing/invalid "chapter"');
need(source.title && source.title.ar && source.title.en, 'missing "title.ar"/"title.en"');
need(Array.isArray(source.paragraphs) && source.paragraphs.length, 'missing "paragraphs"');
need(Array.isArray(source.sentences) && source.sentences.length, 'missing "sentences"');

const bookId = `${source.course}-v${source.volume}`;
const chapterId = `ch${source.chapter}`;
const outFile = process.argv[3]
  ? path.resolve(root, process.argv[3])
  : path.join(root, 'content-lit', bookId, `chapter-${String(source.chapter).padStart(2, '0')}.js`);

const byId = new Map();
(source.sentences || []).forEach((s, i) => {
  const where = `sentences[${i}]`;
  need(s.id, `${where}: missing id`);
  need(s.ar, `${where} (${s.id}): missing ar`);
  // The reader glosses one clause at a time on hover, so a paragraph-level
  // translation alone is not enough -- every sentence needs its own.
  need(s.en, `${where} (${s.id}): missing en`);
  need(Array.isArray(s.tokens) && s.tokens.length, `${where} (${s.id}): missing tokens`);
  (s.tokens || []).forEach((t, ti) => {
    need(t.surface, `${where} (${s.id}) token[${ti}]: missing surface`);
    need(t.lemma, `${where} (${s.id}) token[${ti}]: missing lemma`);
    need(t.pos, `${where} (${s.id}) token[${ti}]: missing pos`);
  });
  if (byId.has(s.id)) problems.push(`${where}: duplicate sentence id ${s.id}`);
  byId.set(s.id, s);
});

function checkMcq(item, where, answerKey = 'answer') {
  need(item.options && item.options.length >= 2, `${where}: needs at least 2 options`);
  const a = item[answerKey];
  need(
    Number.isInteger(a) && a >= 0 && a < (item.options || []).length,
    `${where}: ${answerKey} index ${a} out of bounds`,
  );
}

const paragraphs = (source.paragraphs || []).map((p, pi) => {
  const where = `paragraphs[${pi}]`;
  need(p.translation_en, `${where}: missing translation_en`);
  need(Array.isArray(p.sentence_ids) && p.sentence_ids.length, `${where}: missing sentence_ids`);
  need(Array.isArray(p.checks) && p.checks.length, `${where}: missing checks`);
  const sentences = (p.sentence_ids || []).map((id) => {
    const s = byId.get(id);
    if (!s) {
      problems.push(`${where}: sentence_ids names unknown sentence ${id}`);
      return null;
    }
    return {
      id: s.id,
      page: s.page,
      ar: s.ar,
      en: s.en,
      tokens: s.tokens.map((t) => ({
        surface: t.surface,
        lemma: t.lemma,
        features: t.features || '',
        root: t.root && t.root !== '—' ? t.root : '',
        pos: t.pos,
        gloss: t.gloss || '',
      })),
    };
  }).filter(Boolean);
  (p.checks || []).forEach((c, ci) => {
    need(c.q, `${where} check[${ci}]: missing q`);
    checkMcq(c, `${where} check[${ci}]`);
    // Optional English version. `answer` indexes BOTH option lists, so they
    // have to line up; a half-translated check would silently mark the wrong
    // option correct in one language.
    if (c.q_en || c.options_en) {
      need(c.q_en, `${where} check[${ci}]: has options_en but no q_en`);
      need(
        Array.isArray(c.options_en) && c.options_en.length === (c.options || []).length,
        `${where} check[${ci}]: options_en must have the same length and order as options`,
      );
    }
  });
  return {
    id: `p${pi + 1}`,
    en: p.translation_en,
    sentences,
    checks: (p.checks || []).map((c) => ({
      q: c.q,
      options: c.options,
      answer: c.answer,
      ...(c.q_en ? { qEn: c.q_en, optionsEn: c.options_en } : {}),
    })),
  };
});

// Every sentence must belong to exactly one paragraph -- an orphan would
// simply never be read, and would still be drawn on for build exercises.
const placed = new Set(paragraphs.flatMap((p) => p.sentences.map((s) => s.id)));
byId.forEach((_, id) => need(placed.has(id), `sentence ${id} is in no paragraph`));

const drill = source.pattern_drill || {};
const cloze = (drill.verb_form_mcq || []).map((q, i) => {
  const where = `pattern_drill.verb_form_mcq[${i}]`;
  need(q.en, `${where}: missing en`);
  checkMcq(q, where);
  return {
    type: 'cloze',
    pre: q.frame_pre || '',
    post: q.frame_post || '',
    en: q.en,
    options: q.options,
    answer: q.answer,
    rationales: q.rationales || [],
  };
});

// The base phrase's first word is the one being shifted -- the slot replaces
// it and the remainder rides along unchanged.
const shift = (drill.person_shift_mcq || []).map((q, i) => {
  const where = `pattern_drill.person_shift_mcq[${i}]`;
  need(q.base, `${where}: missing base`);
  need(q.target_person, `${where}: missing target_person`);
  checkMcq(q, where);
  const words = String(q.base || '').split(/\s+/);
  return {
    type: 'shift',
    base: q.base,
    pre: '',
    post: words.slice(1).join(' '),
    targetPerson: q.target_person,
    targetEn: q.target_en || '',
    options: q.options,
    answer: q.answer,
    rationales: q.options ? q.options.map((_, oi) => (oi === q.answer ? (q.rationale || '') : '')) : [],
  };
});

if (problems.length) {
  problems.forEach((p) => console.error(`✗ ${p}`));
  console.error(`\n${problems.length} problem(s) in ${inputArg}; nothing written.`);
  process.exit(1);
}

const chapter = {
  id: chapterId,
  number: source.chapter,
  title: { ar: source.title.ar, en: source.title.en },
  pages: source.pages || [],
  register: source.register || '',
  newWords: source.new_lemmas_taught || [],
  lemmas: source.lemmas || {},
  paragraphs,
  workshop: { cloze, shift },
};

const header = `// Generated by scripts/convert-literature.mjs from ${inputArg.replace(/\\/g, '/')}.
// Do not edit by hand -- edit the source JSON and re-run the converter.
// See content-lit/README.md for the schema and for how a new chapter is
// wired into its book.
`;

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, `${header}export const CHAPTER = ${JSON.stringify(chapter, null, 2)};\n`);

const sentenceCount = paragraphs.reduce((n, p) => n + p.sentences.length, 0);
const tokenCount = paragraphs.reduce((n, p) => n + p.sentences.reduce((k, s) => k + s.tokens.length, 0), 0);
console.log(`✓ ${path.relative(root, outFile).replace(/\\/g, '/')} — ${paragraphs.length} paragraph(s), ${sentenceCount} sentence(s), ${tokenCount} token(s), ${cloze.length} cloze + ${shift.length} shift drill(s)`);
console.log(`  register it in content-lit/${bookId}/index.js if it is a new chapter.`);

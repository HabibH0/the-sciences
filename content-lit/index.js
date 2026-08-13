// The Literature shelf: books, and every pure helper the reader needs.
//
// Literature is deliberately NOT a course. A course is modules -> lessons ->
// concepts/quiz/bank, all of it authored per lesson (see content/index.js);
// a book is chapters of tokenized prose, and almost everything the learner
// answers is DERIVED from those tokens at read time -- which sentences get
// built, which distractor a sentence gets, which words come back at the end.
// So none of content/index.js's helpers apply here and this file is the
// literature equivalent: data plus pure functions over it, with mutation
// staying in js/main.js and rendering in js/render.js, exactly as elsewhere.
//
// Progress is keyed `${bookId}/${chapterId}` in one flat dict (state.
// litProgress), the same "ids never collide, so no namespacing is needed"
// idiom the courses use.
//
// Every import below is a book SHELL (cheap -- chapter bodies stay lazy, see
// loadChapter below), but this file eagerly imports every one of them, so a
// new book adds a network round trip to index.html's modulepreload list
// (see the comment there) as well as to LIT_BOOKS just below -- both need
// updating together when a book shell is added.
import { BOOK as QIRAAH_V1 } from './qiraah-v1/index.js';
import { BOOK as QIRAAH_V2 } from './qiraah-v2/index.js';
import { BOOK as QASAS_V1 } from './qasas-v1/index.js';
import { BOOK as QASAS_V2 } from './qasas-v2/index.js';
import { BOOK as QASAS_V3 } from './qasas-v3/index.js';
import { BOOK as QASAS_V4 } from './qasas-v4/index.js';
import { BOOK as QASAS_V5 } from './qasas-v5/index.js';
import { BOOK as QASAS_V6 } from './qasas-v6/index.js';
import { BOOK as QASAS_V7 } from './qasas-v7/index.js';
import { BOOK as QASAS_V8 } from './qasas-v8/index.js';
import { BOOK as QASAS_V9 } from './qasas-v9/index.js';
import { BOOK as QASAS_V10 } from './qasas-v10/index.js';
import { BOOK as QASAS_V11 } from './qasas-v11/index.js';
import { BOOK as QASAS_V12 } from './qasas-v12/index.js';

// Array order is shelf order on the Library screen. Books are independent of
// each other -- nothing gates one behind another -- so this is a reading
// recommendation, not a progression: each series in its own reading order,
// and the two series side by side.
export const LIT_BOOKS = [
  QIRAAH_V1, QIRAAH_V2,
  QASAS_V1, QASAS_V2, QASAS_V3, QASAS_V4, QASAS_V5, QASAS_V6, QASAS_V7, QASAS_V8, QASAS_V9,
  QASAS_V10, QASAS_V11, QASAS_V12,
];

export function getLitBook(bookId) {
  return LIT_BOOKS.find((b) => b.id === bookId) || null;
}

// A book's series -- which shelf group it falls under on the Library screen,
// the literature equivalent of a module's `heading` on the dashboard (see
// dashboardHtml in js/render.js). Kept here rather than repeated on all
// twelve book shells: the id prefix already names the series (qiraah-v1/
// qiraah-v2, qasas-v1..v12), and it's the whole taxonomy so far.
const LIT_SERIES = {
  qiraah: { ar: 'الْقِرَاءَةُ الرَّاشِدَةُ', en: 'Al-Qirāʾah ar-Rāshidah' },
  qasas: { ar: 'قَصَصُ النَّبِيِّينَ', en: 'Qaṣaṣ an-Nabiyyīn' },
};

export function bookSeries(book) {
  return LIT_SERIES[book.id.split('-')[0]] || null;
}

export function getChapterShell(bookId, chapterId) {
  const book = getLitBook(bookId);
  return book ? book.chapters.find((c) => c.id === chapterId) || null : null;
}

export function litChapterKey(bookId, chapterId) {
  return `${bookId}/${chapterId}`;
}

// --- Chapter loading ------------------------------------------------------
// Memoized per chapter, mirroring loadCourse in content/index.js: the reader
// awaits loadChapter in its action handler, and every later render reads the
// already-resolved module out of this cache synchronously (render.js is pure
// and cannot await).

const loadedChapters = new Map();

export async function loadChapter(bookId, chapterId) {
  const key = litChapterKey(bookId, chapterId);
  if (loadedChapters.has(key)) return loadedChapters.get(key);
  const shell = getChapterShell(bookId, chapterId);
  if (!shell) return null;
  const mod = await shell.load();
  loadedChapters.set(key, mod.CHAPTER);
  return mod.CHAPTER;
}

export function getLoadedChapter(bookId, chapterId) {
  return loadedChapters.get(litChapterKey(bookId, chapterId)) || null;
}

// --- Progress -------------------------------------------------------------

export function chapterRecord(litProgress, bookId, chapterId) {
  return (litProgress && litProgress[litChapterKey(bookId, chapterId)]) || null;
}

export function isChapterDone(litProgress, bookId, chapterId) {
  const rec = chapterRecord(litProgress, bookId, chapterId);
  return !!(rec && rec.done);
}

// All chapters are permanently open -- the Library is not gated. The
// forceUnlockAll parameter is retained for call-site compatibility but
// has no effect; every chapter is treated as unlocked regardless.
export function isChapterUnlocked(book, index, litProgress, forceUnlockAll = false) {
  return true;
}

export function bookProgress(book, litProgress) {
  const done = book.chapters.filter((c) => isChapterDone(litProgress, book.id, c.id)).length;
  return { done, total: book.chapters.length };
}

// Where a part-read chapter resumes: the furthest paragraph reached, clamped
// to the chapter that actually exists now (a re-converted chapter can get
// shorter).
export function resumeParagraph(litProgress, bookId, chapterId, paragraphCount) {
  const rec = chapterRecord(litProgress, bookId, chapterId);
  const para = rec && Number.isInteger(rec.para) ? rec.para : 0;
  return Math.max(0, Math.min(para, Math.max(0, paragraphCount - 1)));
}

// --- Unknown words --------------------------------------------------------
// Marked per LEMMA, not per occurrence: "I don't know this word" is a fact
// about the word, so marking أَذْهَبُ marks وَأَذْهَبُ and ذَهَبَ's other forms
// wherever else they appear in the same book. Kept per book so one book's
// vocabulary can't quietly decide what another book drills.

export function isUnknownLemma(litUnknown, bookId, lemma) {
  return !!(litUnknown && litUnknown[bookId] && litUnknown[bookId][lemma]);
}

export function unknownLemmas(litUnknown, bookId) {
  const map = (litUnknown && litUnknown[bookId]) || {};
  return Object.keys(map).filter((k) => map[k]);
}

// --- Reading the token layer ----------------------------------------------

// The word card names a word's class and form in Arabic alone -- these are
// the terms the courses teach, and a reader who has met اِسْمٌ and مَجْرُورٌ in
// Nahw should meet the same words here rather than a translation of them.
// Both labels are rendered inside one RTL <bdi> (see litWordCardHtml in
// js/render.js), NOT through escBidi: a string that is Arabic throughout has
// no English for the separators to belong to, and isolating each term
// separately would leave the "·" between two RTL runs free to reorder them.
const POS_LABELS = {
  verb: 'فِعْلٌ',
  noun: 'اِسْمٌ',
  proper: 'اِسْمُ عَلَمٍ',
  adj: 'صِفَةٌ',
  adv: 'ظَرْفٌ',
  prep: 'حَرْفُ جَرٍّ',
  conj: 'حَرْفُ عَطْفٍ',
  part: 'حَرْفٌ',
  rel: 'اِسْمٌ مَوْصُولٌ',
  dem: 'اِسْمُ إِشَارَةٍ',
  num: 'عَدَدٌ',
};

export function posLabel(pos) {
  return POS_LABELS[pos] || pos || '';
}

const FEATURE_LABELS = {
  impf: 'مُضَارِعٌ', perf: 'مَاضٍ', imp: 'أَمْرٌ', pass: 'مَجْهُولٌ',
  def: 'مَعْرِفَةٌ', indef: 'نَكِرَةٌ',
  nom: 'مَرْفُوعٌ', acc: 'مَنْصُوبٌ', gen: 'مَجْرُورٌ',
  constr: 'مُضَافٌ',
  pl: 'جَمْعٌ', du: 'مُثَنًّى', sg: 'مُفْرَدٌ',
  m: 'مُذَكَّرٌ', f: 'مُؤَنَّثٌ',
  prep: 'حَرْفُ جَرٍّ', conj: 'حَرْفُ عَطْفٍ', part: 'حَرْفٌ',
  neg: 'حَرْفُ نَفْيٍ', rel: 'اِسْمٌ مَوْصُولٌ', dem: 'اِسْمُ إِشَارَةٍ', adv: 'ظَرْفٌ',
  '1s': 'مُتَكَلِّمٌ مُفْرَدٌ', '1p': 'مُتَكَلِّمٌ جَمْعٌ',
  '2ms': 'مُخَاطَبٌ مُذَكَّرٌ', '2fs': 'مُخَاطَبٌ مُؤَنَّثٌ',
  '3ms': 'غَائِبٌ مُذَكَّرٌ', '3fs': 'غَائِبٌ مُؤَنَّثٌ',
  '3mp': 'غَائِبٌ جَمْعٌ مُذَكَّرٌ', '3fp': 'غَائِبٌ جَمْعٌ مُؤَنَّثٌ',
};

const PERSON_CODES = new Set(['1s', '1p', '2ms', '2fs', '3ms', '3fs', '3mp', '3fp']);

// "conj+impf.1s" -> "حَرْفُ عَطْفٍ + مُضَارِعٌ · مُتَكَلِّمٌ مُفْرَدٌ".
// A trailing segment that is only a person code is an attached pronoun
// (gen+1s = مَجْرُورٌ carrying ـِي), so it is labelled as one rather than
// reading as a second verb agreement.
export function describeFeatures(features) {
  return String(features || '')
    .split('+')
    .filter(Boolean)
    .map((segment, i) => {
      if (i > 0 && PERSON_CODES.has(segment)) return `ضَمِيرٌ مُتَّصِلٌ · ${FEATURE_LABELS[segment]}`;
      return segment.split('.').map((atom) => FEATURE_LABELS[atom] || atom).join(' · ');
    })
    .join(' + ');
}

// --- Case endings: the build exercise's distractors ------------------------
// A build exercise offers the sentence's own words plus a couple of words
// that are right except for their ending, so choosing between them is a
// question about إعراب rather than about vocabulary. The swap is mechanical
// -- the final short vowel or tanwin moves one case along (مجرور -> مرفوع ->
// منصوب -> مجرور) -- so no morphological analysis happens at read time.

const KASRA = 'ِ';
const DAMMA = 'ُ';
const FATHA = 'َ';
const KASRATAN = 'ٍ';
const DAMMATAN = 'ٌ';
const FATHATAN = 'ً';

const NEXT_CASE_MARK = {
  [KASRA]: DAMMA, [DAMMA]: FATHA, [FATHA]: KASRA,
  [KASRATAN]: DAMMATAN, [DAMMATAN]: FATHATAN, [FATHATAN]: KASRATAN,
};

const CASE_OF_MARK = {
  [KASRA]: 'gen', [KASRATAN]: 'gen',
  [DAMMA]: 'nom', [DAMMATAN]: 'nom',
  [FATHA]: 'acc', [FATHATAN]: 'acc',
};

// An indefinite accusative is written on an added alif -- كِتَابًا, not كِتَابً --
// except after ة, ء or ى. Moving an ending INTO or OUT OF the accusative
// therefore has to add or drop that alif; swapping the mark alone spells a
// word that does not exist. Both orderings of the pair occur in the wild
// (جِدًّا marks then alif, مُبَكِّراً alif then mark), so both are recognised.
const ALIF = 'ا';
const NO_ALIF_BEFORE_FATHATAN = ['ة', 'ء', 'ى', ALIF];

function endsAccusativeWithAlif(s) {
  return s.endsWith(FATHATAN + ALIF) || s.endsWith(ALIF + FATHATAN);
}

// Returns a same-word-wrong-ending variant, or null when there is no ending
// to move: a defective one (بَيْتِي), an indeclinable particle, or a verb
// whose ending isn't a mood (see below). `token` is the whole token, since
// what a swap MEANS depends on its part of speech.
export function caseVariant(surface, token = {}) {
  const s = String(surface || '');
  const features = String(token.features || '');

  // The three marks are mood on a verb, not case. Only the imperfect
  // inflects for mood, and only between ضمة and فتحة -- a perfect verb's
  // fatḥa is part of the form itself, and كَانِ is not a word.
  if (token.pos === 'verb') {
    if (!features.includes('impf')) return null;
    const last = s.slice(-1);
    if (last === DAMMA) return s.slice(0, -1) + FATHA;
    if (last === FATHA) return s.slice(0, -1) + DAMMA;
    return null;
  }

  if (endsAccusativeWithAlif(s)) {
    // Leaving the accusative: the alif goes with the mark.
    return s.slice(0, -2) + DAMMATAN;
  }
  const last = s.slice(-1);
  const swapped = NEXT_CASE_MARK[last];
  if (!swapped) return null;
  const stem = s.slice(0, -1);
  if (swapped === FATHATAN && !NO_ALIF_BEFORE_FATHATAN.some((c) => stem.endsWith(c))) {
    return `${stem}${FATHATAN}${ALIF}`;
  }
  return stem + swapped;
}

// Whether a token can supply a decoy at all -- the same question
// caseVariant answers, asked without building the string.
export function hasCaseMark(surface, token = {}) {
  return caseVariant(surface, token) !== null;
}

// All three cases of one word, for a question that offers them side by side.
// Built from the stem rather than by walking caseVariant three times: the
// accusative is written مُبَكِّرًا and مُبَكِّراً in different hands, so stepping
// round the cycle could hand back the word it started from, spelled the other
// way -- two chips that look identical and both count as wrong.
// Returns null for a word with no visible ending, or for a verb (whose
// endings are mood, not case).
export function caseForms(surface, token = {}) {
  const s = String(surface || '');
  if (token.pos === 'verb') return null;
  const indefinite = endsAccusativeWithAlif(s) || [KASRATAN, DAMMATAN, FATHATAN].includes(s.slice(-1));
  const stem = endsAccusativeWithAlif(s) ? s.slice(0, -2)
    : (NEXT_CASE_MARK[s.slice(-1)] ? s.slice(0, -1) : null);
  if (stem === null) return null;
  const accusative = indefinite
    ? `${stem}${FATHATAN}${NO_ALIF_BEFORE_FATHATAN.some((c) => stem.endsWith(c)) ? '' : ALIF}`
    : stem + FATHA;
  return {
    nom: stem + (indefinite ? DAMMATAN : DAMMA),
    acc: accusative,
    gen: stem + (indefinite ? KASRATAN : KASRA),
  };
}

const CASE_NOTES = {
  gen: 'is مجرور — governed by a preposition, or the second term of an إضافة.',
  nom: 'is مرفوع — the subject, or the predicate of a nominal sentence.',
  acc: 'is منصوب — an object, or an adverbial complement.',
};

// The same three endings mean mood, not case, on a verb -- so a swapped
// ضمة/فتحة there is an indicative/subjunctive contrast and needs its own
// explanation. Getting this wrong would teach the learner that a verb has a
// case, which is exactly the confusion the drill exists to prevent.
const VERB_NOTES = {
  nom: 'is مرفوع — the plain indicative; nothing here calls for the subjunctive or jussive.',
  acc: 'is منصوب — the subjunctive, which needs a particle such as أَنْ or لِـ in front of it.',
  gen: 'is the form this verb takes here — a verb is never مجرور.',
};

const CASE_NAMES = { gen: 'مجرور', nom: 'مرفوع', acc: 'منصوب' };

// Just the case's name, for a distractor's own explanation ("that ending is
// مرفوع"). Null when the word's ending isn't one of the three.
export function caseLabel(surface) {
  return CASE_NAMES[CASE_OF_MARK[String(surface || '').slice(-1)]] || null;
}

// Why the sentence's own word is the right one. Falls back to a plain
// statement when the ending isn't one of the three.
export function caseNote(surface, pos) {
  const c = CASE_OF_MARK[String(surface || '').slice(-1)];
  if (!c) return 'is the form the sentence actually uses.';
  return pos === 'verb' ? VERB_NOTES[c] : CASE_NOTES[c];
}

// --- Sentence pools -------------------------------------------------------

export function chapterSentences(chapter) {
  return chapter.paragraphs.flatMap((p, pi) => p.sentences.map((s) => ({ ...s, paragraph: pi })));
}

// Long enough to be a real sentence, short enough to lay out as chips, and
// with at least one non-proper word whose ending can be swapped -- otherwise
// the exercise has nothing to test beyond word order. Proper nouns are
// excluded as distractor candidates (اللهِ should never appear misvowelled).
const BUILD_MIN_TOKENS = 3;
const BUILD_MAX_TOKENS = 9;

// How many sentences the build stage asks for. Lives here rather than beside
// the queue builder in js/state.js so scripts/validate-content.mjs can check
// a chapter against it without importing the browser-side state module.
export const LIT_BUILD_MIN = 5;
export const LIT_BUILD_MAX = 10;

export function isBuildEligible(sentence) {
  const n = sentence.tokens.length;
  if (n < BUILD_MIN_TOKENS || n > BUILD_MAX_TOKENS) return false;
  return sentence.tokens.some((t) => t.pos !== 'proper' && hasCaseMark(t.surface, t));
}

export function sentenceHasUnknown(sentence, litUnknown, bookId) {
  return sentence.tokens.some((t) => isUnknownLemma(litUnknown, bookId, t.lemma));
}

export function sentenceHasNewWord(sentence, chapter) {
  const fresh = new Set(chapter.newWords || []);
  return sentence.tokens.some((t) => fresh.has(t.lemma));
}

// Every distinct unknown-marked word in the chapter, for the reader's margin
// list and the end-of-chapter summary.
export function unknownWordsInChapter(chapter, litUnknown, bookId) {
  const seen = new Map();
  chapterSentences(chapter).forEach((s) => {
    s.tokens.forEach((t) => {
      if (!isUnknownLemma(litUnknown, bookId, t.lemma) || seen.has(t.lemma)) return;
      seen.set(t.lemma, { lemma: t.lemma, surface: t.surface, gloss: t.gloss, pos: t.pos });
    });
  });
  return [...seen.values()];
}

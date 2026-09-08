import { writeFile } from 'node:fs/promises';
import { LIT_BOOKS, loadChapter } from '../content-lit/index.js';
import { LESSONS } from '../content-lit/learning/lessons.js';

const source = [], lemmas = new Set();
let sentences = 0, translations = 0, annotated = 0, workshops = 0, checks = 0, glossedTokens = 0, morphologyTokens = 0;
for (const book of LIT_BOOKS) for (const shell of book.chapters) {
  const chapter = await loadChapter(book.id, shell.id);
  const rows = chapter.paragraphs.flatMap(p => p.sentences);
  rows.forEach(s => { sentences++; if (s.en) translations++; if (s.notes?.length || s.tokens?.some(t => t.note || t.gloss || t.features || t.root)) annotated++; glossedTokens += (s.tokens || []).filter(t=>t.gloss).length; morphologyTokens += (s.tokens || []).filter(t=>t.features && Object.keys(t.features).length).length; });
  Object.keys(chapter.lemmas || {}).forEach(l => lemmas.add(l));
  workshops += chapter.workshop ? 1 : 0;
  checks += chapter.paragraphs.reduce((n, p) => n + (p.checks?.length || 0), 0);
  source.push({ book: book.id, chapter: shell.id, title: shell.title, register: chapter.register, sentences: rows.map(s => ({ id: s.id, ar: s.ar, en: s.en })), lemmas: chapter.lemmas });
}
const vocabulary = new Map();
for (const l of LESSONS) for (const v of l.vocabulary) vocabulary.set(v.id, (vocabulary.get(v.id) || 0) + 1);
const sequences = new Set(LESSONS.map(l => l.exercises.map(e => e.type).join(' → ')));
const summary = { books: LIT_BOOKS.length, works: [...new Set(LIT_BOOKS.map(b => b.title.en))], authors: [...new Set(LIT_BOOKS.map(b => b.author.en))], chapters: source.length, sentences, translations, annotatedSentences: annotated, glossedTokens, morphologyTokens, registers: [...new Set(source.map(s=>s.register).filter(Boolean))], workshops, paragraphChecks: checks, sourceLemmas: lemmas.size, lessons: LESSONS.length, distinctPedagogicalStructures: 1, exerciseTypeSequences: sequences.size, superficialVariants: sequences.size - 1, uniqueTargetVocabulary: vocabulary.size, introducedInOnlyOneLesson: [...vocabulary.values()].filter(n => n === 1).length, averageLessonExposures: [...vocabulary.values()].reduce((a,b) => a+b,0) / vocabulary.size, multipleChoicePercent: Math.round(100 * LESSONS.flatMap(l=>l.exercises).filter(e=>!Array.isArray(e.answer)).length / LESSONS.flatMap(l=>l.exercises).length), transferExercises: LESSONS.flatMap(l=>l.exercises).filter(e=>e.phase==='transfer').length, unseenCheckpoints: 0, reviewSessions: 0, masteryChecks: 0, masteryLimitation: 'Same-session correct choices can reach likely-mastered. No delayed retention, receptive/productive split, review scheduler, units or placement.' };
await writeFile('content-lit/learning/source-audit.json', JSON.stringify(summary, null, 2) + '\n');
await writeFile('literature-source-inventory.tmp.json', JSON.stringify(source));
console.log(JSON.stringify(summary, null, 2));

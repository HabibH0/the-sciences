import { LESSONS } from './lessons.js';
import { getLitBook, getChapterShell, loadChapter } from '../index.js';

export const LITERATURE_LESSONS = LESSONS;
export const LITERATURE_STAGES = [
  { id: 1, title: 'Accessible narrative', description: 'Actions, time and high-value words in short sentences.' },
  { id: 2, title: 'Connected prose', description: 'Follow people and events across connected clauses.' },
  { id: 3, title: 'Literary patterns', description: 'Recognise recurring expressions as units of meaning.' },
  { id: 4, title: 'Layered prose', description: 'Recover unspoken subjects and keep references distinct.' },
  { id: 5, title: 'Inside a bayt', description: 'Recover prose order, then understand the poetic image.' },
];
const definitions = new Map(LESSONS.map(lesson => [lesson.id, lesson]));
const loaded = new Map();
export function literatureLesson(id) { return definitions.get(id) || null; }
export function loadedLiteratureLesson(id) { return loaded.get(id) || null; }

// A lossless, additive adapter. Never alter the imported chapter or discard its
// translations/notes/workshop. Draft extraction is deliberately not a lesson.
export function adaptLiteratureSource(book, shell, chapter, sentenceIds = null) {
  const all = chapter.paragraphs.flatMap((paragraph, paragraphIndex) =>
    paragraph.sentences.map(sentence => ({ ...sentence, paragraphIndex })));
  const sentences = sentenceIds ? sentenceIds.map(id => all.find(s => s.id === id)) : all;
  if (sentences.some(s => !s)) throw new Error('A literature source sentence could not be found.');
  return {
    bookId: book.id, chapterId: shell.id, work: book.title, author: book.author,
    volume: book.volumeLabel, title: shell.title, pages: shell.pages || [],
    sentences, text: sentences.map(s => s.ar).join(' '), translation: sentences.map(s => s.en).join(' '),
    vocabularyNotes: chapter.lemmas || {}, newWords: chapter.newWords || [],
    legacy: chapter,
  };
}

export async function loadLiteratureLesson(id) {
  if (loaded.has(id)) return loaded.get(id);
  const definition = literatureLesson(id);
  if (!definition) throw new Error('This literature lesson is not available.');
  const { bookId, chapterId, sentenceIds } = definition.source;
  const chapter = await loadChapter(bookId, chapterId);
  if (!chapter) throw new Error('The source text could not be loaded. Please retry.');
  const source = adaptLiteratureSource(getLitBook(bookId), getChapterShell(bookId, chapterId), chapter, sentenceIds);
  const lesson = { ...definition, source, exercises: definition.exercises.map(exercise => ({
    difficulty: definition.stage,
    learningObjectives: definition.objectives.map(objective => objective.id),
    instructions: exercise.prompt,
    retry: 'correct-before-continuing',
    ...exercise,
  })) };
  loaded.set(id, lesson);
  return lesson;
}

export function enrichmentDraft(book, shell, chapter, sentenceIds) {
  return {
    status: 'needs-authoring', source: adaptLiteratureSource(book, shell, chapter, sentenceIds),
    objectives: [], vocabulary: [], constructions: [], chunks: [], exercises: [], transferExamples: [],
    missing: ['Linguistic level', 'Transferable objectives', 'Target language', 'Teaching exercises', 'Progressive support', 'Novel transfer examples'],
  };
}

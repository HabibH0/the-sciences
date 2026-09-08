import { COURSE_LESSONS, ALL_SESSIONS } from './catalog.js';
import { getLitBook, getChapterShell, loadChapter } from '../index.js';

export const LITERATURE_LESSONS = COURSE_LESSONS;
export { LITERATURE_STAGES, LITERATURE_UNITS, ARCHETYPES, SKILLS } from './curriculum.js';
export { ALL_SESSIONS, GUIDED_LESSONS, LEARNING_ITEMS, PUBLISHED_UNITS, DAILY_REVIEW, PLACEMENT } from './catalog.js';
const definitions = new Map(ALL_SESSIONS.map(lesson => [lesson.id, lesson]));
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
  async function resolveSource(ref) {
    if(ref.kind==='practice')return {kind:'practice',text:'',translation:'',sentences:[],pages:[]};
    const {bookId,chapterId,sentenceIds}=ref;
    const chapter=await loadChapter(bookId,chapterId);
    if(!chapter)throw new Error('The source text could not be loaded. Please retry.');
    return adaptLiteratureSource(getLitBook(bookId),getChapterShell(bookId,chapterId),chapter,sentenceIds);
  }
  const source = await resolveSource(definition.source);
  const lesson = { ...definition, source, exercises: definition.exercises.map(exercise => ({
    difficulty: definition.stage,
    learningObjectives: definition.objectives.map(objective => objective.id),
    instructions: exercise.prompt,
    retry: exercise.assessment ? 'first-answer-then-feedback' : 'correct-before-continuing',
    ...exercise,
  })) };
  for(const exercise of lesson.exercises) {
    if(exercise.source) {
      const original=await resolveSource(exercise.source);
      exercise.arabic=original.text;
      exercise.sourceCredit=original;
      exercise.support=[{kind:'structure',label:'Structural clue',text:exercise.hint},{kind:'paraphrase',label:'Meaning clue',text:exercise.feedback?.[exercise.answer]||exercise.explanation},{kind:'translation',label:'Source translation',text:original.translation}];
    }
  }
  loaded.set(id, lesson);
  return lesson;
}

export function enrichmentDraft(book, shell, chapter, sentenceIds) {
  return {
    status: 'needs-authoring', source: adaptLiteratureSource(book, shell, chapter, sentenceIds),
    stage: null, unit: null, archetype: null, difficulty: null, flow: [],
    objectives: [], vocabulary: [], constructions: [], chunks: [], exercises: [], transferExamples: [], reviewLinks: [],
    missing: ['Linguistic level and difficulty factors', 'Unit and archetype', 'Transferable objectives', 'Tiered lexical targets with varied examples', 'Authored activity flow', 'Progressive support', 'Novel transfer examples', 'Review and checkpoint links'],
  };
}

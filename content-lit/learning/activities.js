// Authoring helpers keep lessons as plain data. Argument order never dictates
// lesson rhythm: the exercise array is the author's actual sequence.
export const source = (bookId, chapterId, ...sentenceIds) => ({ bookId, chapterId, sentenceIds });
export function choice(id, type, phase, arabic, prompt, rows, target, hint) {
  return { id, type, phase, arabic, prompt, options: rows.map(r => r[0]), feedback: rows.map(r => r[1]), answer: 0, targets: Array.isArray(target) ? target : [target], hint };
}
export function order(id, phase, prompt, chunks, target, explanation, extra = {}) {
  return { id, type: 'sentence_reconstruction', phase, prompt, options: chunks, answer: chunks.map((_,i)=>i), targets: Array.isArray(target) ? target : [target], hint: explanation, explanation, ...extra };
}
export function selectGroup(id, phase, arabic, prompt, words, answer, target, explanation) {
  return { id, type: 'chunk_sentence', phase, arabic, prompt, options: words, answer, targets: Array.isArray(target) ? target : [target], explanation, hint: explanation };
}
export function recall(id, phase, arabic, prompt, answer, target, hint, explanation) {
  return { id, type: 'typed_recall', phase, arabic, prompt, answer, targets: Array.isArray(target) ? target : [target], hint, explanation, evidenceMode: 'productive' };
}
export function authoredLesson({ id, stage, unit, archetype, title, titleAr, source, objective, context, chunks, vocabulary = [], constructions = [], exercises, support, ...rest }) {
  return { id, revision: 1, stage, unit, archetype, title, titleAr, source, context, chunks, vocabulary, constructions,
    minutes: 8, kind: 'lesson', objectives: [{id: `${id}-ability`, text: objective}],
    support, exercises, flow: exercises.map(e=>e.id).concat('clean'), ...rest };
}

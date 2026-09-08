// Authoring shorthand only: every question, distractor, explanation and new
// context is curated. This normalises data to the existing exercise contract;
// it neither generates teaching content nor knows anything about the UI.
export function defineLesson({ prepare, notice, manipulate, decode, understand, transfer, ...lesson }) {
  function exercise(spec, phase, id, type) {
    const { choices, chunks, ...rest } = spec;
    const item = { id, phase, type, ...rest };
    if (choices) {
      item.options = choices.map(([text]) => text);
      item.feedback = choices.map(([, feedback]) => feedback);
    } else if (chunks) {
      item.options = chunks;
      item.answer = spec.answer || chunks.map((_, index) => index);
    }
    return item;
  }
  return {
    revision: 1, ...lesson,
    exercises: [
      exercise(prepare, 'prepare', 'word', 'contextual_vocabulary'),
      exercise(notice, 'notice', 'notice', 'choose_meaning'),
      exercise(manipulate, 'manipulate', 'build', lesson.genre === 'poetry' ? 'poetry_reorder' : 'reorder_chunks'),
      exercise(decode, 'decode', 'decode', 'arabic_paraphrase'),
      exercise(understand, 'understand', 'meaning', 'comprehension'),
      ...transfer.map((item, index) => exercise(item, 'transfer', `transfer-${index + 1}`, item.chunks ? 'sentence_reconstruction' : 'transfer_example')),
    ],
  };
}

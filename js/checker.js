// Two exercise kinds, both synchronous (no execution runtime needed here):
//
// - kind:'mcq': single-select. Used for concept exercises, quiz questions,
//   lesson drills, and application questions in the drill bank.
// - kind:'tarkeeb': word-by-word grammatical labeling, drag-and-drop. Chips
//   are a controlled vocabulary (drawn from item.chips), not free text, so
//   grading is exact string equality -- no Arabic normalization needed.

export function checkMcq(item, selectedIndex) {
  return { pass: selectedIndex === item.correct };
}

// placements: array the same length as item.words, each entry either the
// chip text dropped on that slot or null if left empty.
export function checkTarkeeb(item, placements) {
  const feedback = item.words.map((word, i) => {
    const expected = item.labels[i];
    const given = placements[i] ?? null;
    return { word, expected, given, pass: given !== null && given === expected };
  });
  return { feedback, allPass: feedback.every((f) => f.pass) };
}

// New تركيب schema (content-fstu units 2+): `slots` is
// flattenTarkeebSlots(item, { fillBlanks: true }).slots (content/index.js),
// `given` is the same length, each entry the chip text dropped on that slot
// or null. A slot with role === null is a blank slot (see flattenTarkeebSlots)
// -- its "correct" answer is staying empty, so it passes exactly when
// nothing was dropped there, the opposite of a normal slot's pass condition.
export function checkTarkeebDiagram(slots, given) {
  const feedback = slots.map((slot, i) => {
    const value = given[i] ?? null;
    const pass = slot.role === null ? value === null : (value !== null && value === slot.role);
    return { role: slot.role, given: value, pass };
  });
  return { feedback, allPass: feedback.every((f) => f.pass) };
}

export function checkExercise(item, answer) {
  if (item.kind === 'tarkeeb') return checkTarkeeb(item, answer);
  return checkMcq(item, answer);
}

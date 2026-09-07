// Presentation adapters for Advanced Nahw. Source lines and review-bank
// identities stay intact; a lesson plan refers to them by stable indices.
const wordLessonGroups = [
  [['learn', [0, 1]], ['example', [2, 3]]],
  [['learn', [0, 1, 2]], ['example', [3]]],
  [['learn', [0, 1, 2, 3, 4]]],
  [['learn', [0, 1]], ['example', [2, 3]]],
  [['learn', [0, 1]], ['example', [2, 3, 4]]],
  [['learn', [0, 1]], ['example', [2, 3]], ['takeaway', [4]]],
];

export const WORD_EXAMPLES = [
  { text: 'A cough', label: 'لفظ', explanation: 'A sound from the mouth is لفظ. Without a recognised meaning, it is not قول.' },
  { text: 'رَجُلٌ', label: 'كلمة · قول مفرد', explanation: 'The whole word means “a man”. Its individual letters do not each carry part of that meaning.' },
  { text: 'كِتَابُ الوَلَدِ', label: 'قول مركب · مركب ناقص', explanation: 'Both words carry meaning. Together they form “the boy’s book”, a phrase rather than a complete sentence.' },
  { text: 'رِجَالٌ', label: 'مفرد في التركيب · جمع في العدد', explanation: 'It is one word when discussing construction, and plural when discussing number. The two uses of مفرد answer different questions.' },
];

// The opening lesson introduces the teaching pattern with short questions
// and an explicit stimulus. Answer choices and scored identities are reused.
const wordChecks = [
  { prompt: 'Which kind of لفظ does grammar study?', stimulus: 'A cough and a child’s babbling both count as لفظ. Grammar studies one particular kind of utterance.', explanation: 'Grammar studies لفظ موضوع: an utterance coined for a recognised meaning. لفظ مهمل has no recognised meaning.' },
  { prompt: 'What makes a spoken expression قول?', stimulus: 'Compare meaningful speech with a random noise.', explanation: 'قول is لفظ that points to a meaning. The connection with a recognised meaning is what matters.' },
  { prompt: 'What does مفرد exclude from this definition?', stimulus: 'الكَلِمَةُ قَوْلٌ مُفْرَدٌ', explanation: 'قول excludes meaningless sounds. مفرد excludes a construction whose parts separately carry meaning.' },
  { prompt: 'Why does رَجُلٌ count as مفرد?', stimulus: 'رَجُلٌ means “a man”.\nIts letters are ر، ج، ل.', explanation: 'The whole word carries the meaning. Its individual letters do not each carry a separate part of “man”.' },
  { prompt: 'What kind of مركب is this?', stimulus: 'كِتَابُ الوَلَدِ\nThe boy’s book.', explanation: 'Both words carry meaning, so the expression is مركب. It is ناقص because the phrase does not make a complete sentence.' },
  { prompt: 'Why is بَعْلَبَكَّ treated as مفرد?', stimulus: 'The proper name looks as though it has two parts.', explanation: 'As a proper name, بَعْلَبَكَّ functions as one combined unit. It is treated as تركيب مزج in this discussion.' },
];

export function nahwCheckItem(lesson, conceptIndex) {
  return { ...lesson.concepts[conceptIndex].exercise, ...(lesson.learningKey === '01/l1' ? wordChecks[conceptIndex] : {}) };
}

function linePresentation(line) {
  if (line.box?.title === 'Example') return 'example';
  if (line.box?.title === 'Core Text' && line.box.lines.some(text => text.includes('﴿'))) return 'example';
  if (line.box?.title === 'Careful') return 'takeaway';
  if (line.box && ['Definition', 'Core Text', 'Rule', 'Meaning'].includes(line.box.title)) return 'learn';
  return null;
}

export function nahwTeachingGroups(lesson, conceptIndex) {
  const lines = lesson.concepts[conceptIndex].lines;
  if (lesson.learningKey === '01/l1') return wordLessonGroups[conceptIndex].map(([presentation, lineIndices]) => ({ presentation, lineIndices }));
  const groups = [];
  let current = { presentation: 'learn', lineIndices: [] };
  lines.forEach((line, index) => {
    const presentation = linePresentation(line);
    const boundary = presentation && current.lineIndices.length && (presentation !== current.presentation
      || presentation === 'example' && current.lineIndices.some(i => linePresentation(lines[i]) === 'example'));
    if (boundary) { groups.push(current); current = { presentation, lineIndices: [] }; }
    else if (presentation) current.presentation = presentation;
    current.lineIndices.push(index);
  });
  if (current.lineIndices.length) groups.push(current);
  return groups;
}

export function nahwAnalysisItems(lesson) {
  if (lesson.learningKey === '01/l1') return [{
    id: 'word-and-construction', prompt: 'Classify each expression by its construction.',
    source: 'رَجُلٌ · كِتَابُ الوَلَدِ · رِجَالٌ',
    words: ['رَجُلٌ', 'كِتَابُ الوَلَدِ', 'رِجَالٌ'],
    labels: ['مفرد', 'مركب ناقص', 'مفرد'],
    options: ['مفرد', 'مركب ناقص', 'مركب تام'],
    hint: 'Here مفرد means one word, not singular in number. Check whether the parts independently carry meaning.',
  }];
  const seen = new Set();
  return lesson.bank.flatMap((item, bankIndex) => {
    if (item.kind !== 'tarkeeb' || !item.words || item.words.length < 2 || item.words.length > 6
      || item.words.length !== item.labels?.length || seen.has(item.source)) return [];
    seen.add(item.source);
    return [{ ...item, id: `bank-${bankIndex}`, bankIndex, prompt: 'Give each part its grammatical role.',
      options: [...new Set([...item.labels, ...(item.distractors || [])])],
      hint: 'Identify what governs each part, then choose the role that fits its place in this expression.' }];
  }).slice(0, 2);
}

export function nahwSteps(lesson) {
  const steps = [];
  lesson.concepts.forEach((concept, conceptIndex) => {
    nahwTeachingGroups(lesson, conceptIndex).forEach((group, groupIndex) => steps.push({
      id: `concept:${conceptIndex}:teach:${groupIndex}`, kind: 'teach', conceptIndex, ...group,
      ...(lesson.learningKey === '01/l1' && conceptIndex >= 3 && group.presentation === 'example' ? { visual: 'word-boundaries' } : {}),
    }));
    if (concept.exercise) steps.push({ id: `concept:${conceptIndex}:check`, kind: 'check', conceptIndex });
  });
  nahwAnalysisItems(lesson).forEach((item, analysisIndex) => steps.push({ id: `analysis:${item.id}`, kind: 'analysis', analysisIndex }));
  steps.push({ id: 'summary', kind: 'summary' });
  return steps;
}

export function nahwAnalysisComplete(item, response) {
  return Array.isArray(response) && response.length === item.words.length && response.every(v => item.options.includes(v));
}

export function gradeNahwAnalysis(item, response) {
  const fields = item.labels.map((label, i) => response?.[i] === label);
  return { correct: fields.every(Boolean), fields };
}

export function nativeSessionPosition(existing, steps) {
  const previous = existing.steps[existing.stepIndex || 0];
  if (!previous) return 0;
  const exact = steps.findIndex(s => s.id === previous.id);
  if (exact >= 0) return exact;
  const concept = steps.findIndex(s => s.kind === previous.kind && s.conceptIndex === previous.conceptIndex);
  return concept >= 0 ? concept : 0;
}

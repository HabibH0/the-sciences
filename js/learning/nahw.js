// Presentation adapters for Advanced Nahw. Source lines and review-bank
// identities stay intact; a lesson plan refers to them by stable indices.
// Authored idea boundaries are independent of viewport and text size. All
// source lines appear once, with their definition and examples together.
import { foundationPlan, foundationGroups } from './nahw-foundations.js';
import { foundationCheck } from './nahw-foundation-practice.js';
export const WORD_IDEAS = [
  { conceptIndex: 0, title: 'Start with a sound', term: 'اللفظ', lineIndices: [0, 1, 2, 3] },
  { conceptIndex: 1, title: 'Give the sound a meaning', term: 'القول', lineIndices: [0, 1, 2, 3] },
  { conceptIndex: 2, title: 'What makes it one word?', term: 'الكلمة', lineIndices: [0, 1, 2, 3, 4] },
  { conceptIndex: 3, title: 'The whole word carries the meaning', term: 'المفرد', lineIndices: [0, 1, 2, 3] },
  { conceptIndex: 4, title: 'When the parts carry meaning', term: 'المركب', lineIndices: [0, 1, 2, 3, 4] },
  { conceptIndex: 5, title: 'One word can still be plural', term: 'مفرد في التركيب', lineIndices: [0, 1, 2, 3] },
  { conceptIndex: 5, title: 'How compounds are treated', term: 'أنواع التركيب', lineIndices: [4] },
];

export const isWordLesson = lesson => lesson?.learningModel === 'mizan-nahw' && lesson.learningKey === '01/l1';
export const isIdeaLesson = lesson => isWordLesson(lesson) || !!foundationPlan(lesson);

export const WORD_EXAMPLES = [
  { text: 'A cough', label: 'لفظ', explanation: 'A sound from the mouth is لفظ. Without a recognised meaning, it is not قول.' },
  { text: 'رَجُلٌ', label: 'كلمة · قول مفرد', explanation: 'The whole word means “a man”. Its individual letters do not each carry part of that meaning.' },
  { text: 'كِتَابُ الوَلَدِ', label: 'قول مركب · مركب ناقص', explanation: 'Both words carry meaning. Together they form “the boy’s book”, a phrase rather than a complete sentence.' },
  { text: 'رِجَالٌ', label: 'مفرد في التركيب · جمع في العدد', explanation: 'It is one word when discussing construction, and plural when discussing number. The two uses of مفرد answer different questions.' },
];

// The opening lesson introduces the teaching pattern with short questions
// and an explicit stimulus. Answer choices and scored identities are reused.
const wordChecks = [
  { prompt: 'Which kind of لفظ does grammar study?', stimulus: 'A cough and a child’s babbling both count as لفظ.', explanation: 'Grammar studies لفظ موضوع: an utterance coined for a recognised meaning. لفظ مهمل has no recognised meaning.' },
  { prompt: 'What makes a spoken expression قول?', stimulus: '', explanation: 'قول is لفظ that points to a meaning. The connection with a recognised meaning is what matters.' },
  { prompt: 'What does مفرد exclude from this definition?', stimulus: 'الكَلِمَةُ قَوْلٌ مُفْرَدٌ', explanation: 'قول excludes meaningless sounds. مفرد excludes a construction whose parts separately carry meaning.' },
  { prompt: 'Why does رَجُلٌ count as مفرد?', stimulus: 'رَجُلٌ means “a man”.\nIts letters are ر، ج، ل.', explanation: 'The whole word carries the meaning. Its individual letters do not each carry a separate part of “man”.' },
  { prompt: 'What kind of مركب is this?', stimulus: 'كِتَابُ الوَلَدِ\nThe boy’s book.', explanation: 'Both words carry meaning, so the expression is مركب. It is ناقص because the phrase does not make a complete sentence.' },
  { prompt: 'Why is بَعْلَبَكَّ treated as مفرد?', stimulus: 'The proper name looks as though it has two parts.', explanation: 'As a proper name, بَعْلَبَكَّ functions as one combined unit. It is treated as تركيب مزج in this discussion.' },
];

export function nahwCheckItem(lesson, conceptIndex) {
  const authored = foundationPlan(lesson) && foundationCheck(lesson, conceptIndex);
  if (authored) return { ...lesson.concepts[conceptIndex].exercise, ...authored };
  const compactOptions = {
    0: ['لفظ موضوع', 'لفظ مهمل', 'لفظ مفرد', 'لفظ مركب'],
    1: ['A لفظ tied to meaning.', 'Any sound from the mouth.', 'One meaningful unit, not a construction.', 'A meaning tied to زمان.'],
    2: ['Separately meaningful parts.', 'Meaningless sounds.', 'Words tied to زمان.', 'Words taking أل or تنوين.'],
    3: ['No letter means part of “man”.', 'It begins with أل.', 'It has only three letters.', 'It names something tangible.'],
    5: ['One combined name: تركيب مزج.', 'Fewer than four letters.', 'It accepts تنوين.', 'Both parts mean the same thing.'],
  };
  return { ...lesson.concepts[conceptIndex].exercise, ...(isWordLesson(lesson) ? {
    ...wordChecks[conceptIndex], ...(compactOptions[conceptIndex] ? { options: compactOptions[conceptIndex] } : {}),
  } : {}) };
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
  const authored = foundationGroups(lesson, conceptIndex);
  if (authored) return authored;
  if (isWordLesson(lesson)) return WORD_IDEAS.flatMap((idea, ideaIndex) => idea.conceptIndex === conceptIndex
    ? [{ presentation: 'learn', lineIndices: idea.lineIndices, ideaIndex }] : []);
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
    return [{ ...item, id: `bank-${bankIndex}`, bankIndex, prompt: foundationPlan(lesson)?.analysisPrompt || (foundationPlan(lesson) ? 'Assign each role.' : 'Give each part its grammatical role.'),
      // Distractor labels are hidden: the dropdown only offers the roles
      // this expression actually uses.
      options: [...new Set(item.labels)],
      hint: foundationPlan(lesson)?.analysisLabels ? 'Find the عامل and the role it governs.' : 'Identify what governs each part, then choose the role that fits its place in this expression.' }];
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
  // Old automatic groups and new authored cards can share a numerical ID but
  // cover different ideas. Resume at the source block the learner was reading.
  if (previous.kind === 'teach' && !previous.authoredVersion && steps.some(s => s.authoredVersion)) {
    const line = previous.clarification ? 'clarification' : previous.lineIndices?.[0];
    const source = steps.findIndex(s => s.kind === 'teach' && s.conceptIndex === previous.conceptIndex && s.lineIndices.includes(line));
    if (source >= 0) return source;
  }
  const exact = steps.findIndex(s => s.id === previous.id);
  if (exact >= 0) return exact;
  const concept = steps.findIndex(s => s.kind === previous.kind && s.conceptIndex === previous.conceptIndex);
  return concept >= 0 ? concept : 0;
}

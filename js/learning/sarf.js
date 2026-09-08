// Advanced Sarf presentation refers to the original source coordinates.
// Each exercise pairs existing table entries; it does not infer new forms.
const comparisons = {
  'as-01/l1': [0, 4, 1, 0], 'as-01/l2': [0, 2, 2, 0], 'as-01/l3': [2, 1, 0, 1], 'as-01/l4': [2, 1, 0, 1],
  'as-02/l1': [3, 1, 1, 0], 'as-02/l2': [3, 1, 1, 0], 'as-02/l3': [3, 1, 1, 0],
  'as-03/l1': [2, 1, 2, 0], 'as-03/l3': [0, 2, 1, 0], 'as-03/l4': [3, 2, 0, 1],
  'as-04/l1': [2, 1, 1, 0], 'as-04/l2': [0, 1, 2, 0], 'as-04/l3': [2, 3, 2, 1], 'as-04/l4': [2, 3, 1, 0], 'as-04/l5': [1, 4, 1, 0],
  'as-05/l1': [2, 1, 2, 0], 'as-05/l2': [4, 0, 2, 0], 'as-05/l3': [1, 2, 2, 0], 'as-05/l4': [0, 0, 2, 0],
  'as-06/l1': [1, 0, 0, 1], 'as-06/l2': [2, 2, 0, 1], 'as-06/l3': [2, 2, 1, 0],
  'as-07/l1': [1, 6, 0, 2], 'as-07/l2': [1, 5, 0, 1], 'as-07/l3': [0, 7, 2, 1], 'as-07/l4': [2, 1, 2, 1],
  'as-08/l1': [3, 2, 1, 0], 'as-08/l2': [1, 0, 2, 1], 'as-08/l3': [1, 1, 0, 1],
  'as-09/l1': [0, 4, 2, 0], 'as-09/l2': [3, 3, 1, 0], 'as-09/l3': [3, 3, 1, 0],
  'as-10/l1': [1, 1, 2, 0], 'as-10/l2': [3, 2, 2, 1], 'as-10/l3': [0, 3, 2, 0],
  'as-11/l1': [2, 3, 0, 1], 'as-11/l2': [1, 1, 1, 0], 'as-11/l3': [3, 3, 2, 1], 'as-11/l4': [1, 1, 2, 1], 'as-11/l5': [0, 3, 0, 1],
  'as-12/l1': [3, 3, 2, 0], 'as-12/l2': [3, 3, 2, 0], 'as-12/l3': [4, 1, 2, 0], 'as-12/l4': [0, 7, 2, 1],
  'as-13/l1': [2, 2, 2, 0], 'as-13/l2': [3, 1, 1, 0], 'as-13/l3': [2, 1, 2, 0], 'as-13/l4': [0, 2, 2, 0],
  'as-14/l1': [0, 5, 2, 0], 'as-14/l3': [3, 1, 0, 1],
  'as-15/l1': [3, 1, 2, 0], 'as-15/l2': [2, 1, 1, 0], 'as-15/l3': [2, 1, 2, 0], 'as-15/l4': [1, 2, 1, 0],
};

const prompts = {
  'as-01/l1': 'Match each definition to the practical or scientific sense of الصرف.',
  'as-01/l2': 'Classify each group as nouns, verbs or particles.',
  'as-01/l3': 'Weigh each word using ف، ع، ل.',
  'as-01/l4': 'Choose the وزن that keeps each added letter in its place.',
  'as-02/l1': 'Which sign of the past tense appears in each example?',
  'as-02/l2': 'Which particle fixes each مضارع to the future?',
  'as-02/l3': 'Classify each group of أسماء الأفعال by tense.',
  'as-03/l1': 'Identify the weak letters as letters of لين or مدّ in each group.',
  'as-03/l3': 'If the weak root letter occupies this position, what kind of verb is it?',
  'as-03/l4': 'Classify each noun by the position of its weak root letter, if any.',
  'as-04/l1': 'Identify the vowel on the عين of each past-tense form.',
  'as-04/l2': 'Match each group of verbs to its باب.',
  'as-04/l3': 'Choose the pattern of each form attached to the quadriliteral verb.',
  'as-04/l4': 'Choose the pattern of each augmented triliteral verb.',
  'as-04/l5': 'Choose the pattern of each form attached to the augmented quadriliteral.',
  'as-05/l1': 'Which meaning does أَفْعَلَ carry in each group?',
  'as-05/l2': 'Which meaning does فَعَّلَ carry in each group?',
  'as-05/l3': 'Which meaning does افْتَعَلَ carry in each group?',
  'as-05/l4': 'Which meaning does تَفَعَّلَ carry in each group?',
  'as-06/l1': 'Match each fixed past-tense verb to its grammatical category.',
  'as-06/l2': 'Choose the مضارع of each verb.',
  'as-06/l3': 'Which rule forms the مضارع in each group?',
  'as-07/l1': 'Classify the verb in each sentence as متعدٍّ or لازم. The هاء here refers to the مصدر.',
  'as-07/l2': 'Match each group of verbs to its meaning.',
  'as-07/l3': 'Which change makes the verb transitive in each example?',
  'as-07/l4': 'Which cause makes the verb intransitive in each example?',
  'as-08/l1': 'What stands in for the omitted subject in each passive sentence?',
  'as-08/l2': 'Which additional vowel change forms each passive past tense?',
  'as-08/l3': 'Choose the passive form of each مضارع.',
  'as-09/l1': 'Classify each group as مؤكد or غير مؤكد.',
  'as-09/l2': 'Identify the kind of request in each example.',
  'as-09/l3': 'Which condition prevents emphasis with نون التوكيد in each example?',
  'as-10/l1': 'Choose the وزن of each triliteral noun.',
  'as-10/l2': 'Match each group to its permitted lightening of vowels.',
  'as-10/l3': 'Choose the وزن of each quadriliteral noun.',
  'as-11/l1': 'Which concrete noun is each verb derived from?',
  'as-11/l2': 'Classify each derived form by tense.',
  'as-11/l3': 'Choose the regular مصدر pattern illustrated by each group.',
  'as-11/l4': 'Choose the regular مصدر pattern illustrated by each group.',
  'as-11/l5': 'Match each verb pattern to its مصدر patterns.',
  'as-12/l1': 'Identify the صيغة المبالغة pattern in each group.',
  'as-12/l2': 'Identify the صفة مشبهة pattern in each group.',
  'as-12/l3': 'Identify the state of اسم التفضيل in each example.',
  'as-12/l4': 'Choose the pattern used by each اسم مكان.',
  'as-13/l1': 'Is the feminine marking in wording, meaning, or both?',
  'as-13/l2': 'Identify the pattern of each form used for both genders.',
  'as-13/l3': 'Identify each pattern ending in ألف التأنيث المقصورة.',
  'as-13/l4': 'Identify each pattern ending in ألف التأنيث الممدودة.',
  'as-14/l1': 'Which requirement in the definition of المنقوص excludes each example?',
  'as-14/l3': 'Match each مقصور noun to its meaning.',
  'as-15/l1': 'Which condition for the dual is illustrated by each explanation?',
  'as-15/l2': 'Which requirement for جمع المذكر السالم does each rejected form fail?',
  'as-15/l3': 'Which category permits جمع المؤنث السالم for each group?',
  'as-15/l4': 'How does each broken plural change its singular?',
};

export function sarfAnalysisItems(lesson) {
  if (lesson.learningKey === 'as-03/l2') return [{
    id: 'sound-verb-types', prompt: 'Classify each verb by its root letters.',
    source: 'أقسام الصحيح', words: ['ضَرَبَ', 'مَدَّ', 'أَخَذَ'],
    labels: ['سالم', 'مضعَّف', 'مهموز'], options: ['سالم', 'مضعَّف', 'مهموز'],
    hint: 'Check the root for hamza and doubling. All three examples have sound root letters.',
    conceptIndex: 0,
  }];
  const spec = comparisons[lesson.learningKey];
  if (!spec) return [];
  const [conceptIndex, lineIndex, cue, answer] = spec;
  const table = lesson.concepts[conceptIndex].lines[lineIndex].table;
  const rows = table.rows.map((row, rowIndex) => ({ row, rowIndex }))
    .filter(({ row }) => row[cue] && row[answer] && row[cue] !== '—' && row[answer] !== '—' && row[answer].length <= 180).slice(0, 3);
  if (rows.length < 2 || new Set(rows.map(({ row }) => row[answer])).size < 2) return [];
  return [{
    id: `table-${conceptIndex}-${lineIndex}`, conceptIndex, lineIndex, cue, answer,
    rowIndices: rows.map(r => r.rowIndex), prompt: prompts[lesson.learningKey],
    source: table.title || lesson.concepts[conceptIndex].heading,
    words: rows.map(({ row }) => row[cue]), labels: rows.map(({ row }) => row[answer]),
    options: [...new Set(rows.map(({ row }) => row[answer]))],
    hint: `Compare ${table.headers[cue]} with ${table.headers[answer]}. Use the rule from ${lesson.concepts[conceptIndex].heading}.`,
  }];
}

export function sarfPracticeItems(lesson) {
  return lesson.bank.slice(0, sarfAnalysisItems(lesson).length ? 1 : 2).map((item, bankIndex) => ({ ...item, id: `bank-${bankIndex}`, bankIndex }));
}

export function sarfTableVisual(table) {
  // Long source quotations keep the full, paginated table. Compact rows
  // can be explored as a single form together with its explanation.
  return table.headers.length <= 4 && table.rows.length > 1
    && table.rows.every(row => row[0].length <= 75 && row.join(' ').length <= 250);
}

function presentation(line) {
  if (line.table || line.box?.title === 'Example' || line.box?.lines.some(t => t.includes('﴿'))) return 'example';
  if (line.box?.title === 'Careful') return 'takeaway';
  return line.box ? 'learn' : null;
}

export function sarfSteps(lesson) {
  const steps = [];
  lesson.concepts.forEach((concept, conceptIndex) => {
    let group = null, groupIndex = 0;
    concept.lines.forEach((line, lineIndex) => {
      const kind = presentation(line);
      if (!group || (kind && (kind !== group.presentation || line.table || kind === 'example')) || group.tableIndex != null) {
        group = { id: `concept:${conceptIndex}:teach:${groupIndex++}`, kind: 'teach', conceptIndex, presentation: kind || 'learn', lineIndices: [] };
        steps.push(group);
      }
      group.lineIndices.push(lineIndex);
      if (line.table) group.tableIndex = lineIndex;
    });
    if (concept.clarification) steps.push({ id: `concept:${conceptIndex}:clarification`, kind: 'teach', conceptIndex, presentation: 'takeaway', lineIndices: [], clarification: true });
    if (concept.exercise) steps.push({ id: `concept:${conceptIndex}:check`, kind: 'check', conceptIndex });
  });
  sarfAnalysisItems(lesson).forEach((item, analysisIndex) => steps.push({ id: `analysis:${item.id}`, kind: 'analysis', analysisIndex }));
  sarfPracticeItems(lesson).forEach((item, practiceIndex) => steps.push({ id: `practice:${item.id}`, kind: 'practice', practiceIndex }));
  steps.push({ id: 'summary', kind: 'summary' });
  return steps;
}

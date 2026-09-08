import { sourceConceptSteps } from './source.js';

// Reviewed source coordinates: concept, table line, cue column, answer column.
// Parallel lists and alternative derivations must not be treated as matches.
const comparisons = {
  's-u1/l1': [4, 3, 0, 1],
  's-u1/l2': [3, 1, 0, 1],
  's-u1/l3': [3, 1, 0, 1],
  's-u1/l4': [3, 1, 0, 2],
  's-u1/l5': [0, 1, 0, 2],
  's-u1/l6': [0, 1, 0, 2],
  's-u1/l7': [2, 4, 0, 1],
  's-u1/l8': [1, 1, 1, 2],
  's-u1/l9': [3, 1, 0, 2],
  's-u1/l10': [0, 4, 0, 3],
  's-u1/l11': [1, 2, 0, 1],
  's-u1/l12': [1, 1, 0, 1],
  's-u2/l2': [0, 2, 0, 2],
  's-u2/l3': [0, 2, 0, 2],
  's-u2/l4': [0, 2, 0, 2],
  's-u2/l5': [0, 5, 0, 2],
  's-u2/l6': [1, 2, 0, 1],
  's-u3/l2': [1, 1, 0, 1],
  's-u3/l3': [1, 2, 0, 1],
  's-u3/l4': [5, 1, 0, 1],
  's-u4a/l2': [0, 2, 0, 2],
  's-u4a/l3': [0, 2, 0, 2],
  's-u4a/l4': [0, 1, 0, 1],
  's-u4b/l1': [1, 2, 0, 2],
  's-u4b/l2': [0, 2, 0, 2],
  's-u4b/l3': [0, 1, 0, 1],
  's-u5/l2': [0, 2, 0, 1],
  's-u5/l3': [0, 2, 0, 1],
  's-u5/l4': [0, 1, 0, 1],
  's-u6/l1': [5, 0, 0, 1],
  's-u6/l2': [0, 2, 0, 1],
  's-u6/l3': [0, 2, 0, 1],
  's-u6/l4': [1, 1, 0, 1],
  's-u6/l5': [0, 1, 0, 1],
  's-u7/l1': [2, 2, 0, 1],
  's-u7/l2': [0, 2, 0, 1],
  's-u7/l3': [0, 1, 0, 1],
  's-u8/l1': [0, 3, 0, 1],
  's-u8/l2': [0, 2, 0, 1],
  's-u8/l3': [0, 2, 0, 1],
  's-u8/l4': [0, 3, 0, 1],
  's-u8/l5': [0, 1, 0, 1],
  's-u9/l2': [0, 2, 0, 1],
  's-u9/l3': [0, 4, 0, 1],
  's-u9/l4': [0, 3, 0, 1],
  's-u9/l5': [0, 4, 0, 1],
  's-u9/l6': [0, 5, 0, 1],
  's-u10/l1': [1, 0, 0, 1],
  's-u10/l2': [1, 0, 0, 1],
  's-u10/l3': [1, 1, 0, 1],
  's-u11/l1': [3, 0, 0, 1],
  's-u11/l3': [4, 3, 0, 1],
  's-u12/l1': [1, 0, 0, 1],
  's-u12/l2': [0, 1, 0, 1],
  's-u12/l3': [6, 0, 0, 1],
  's-u12/l4': [1, 0, 0, 1],
  's-u12/l5': [10, 0, 0, 1],
};

const prompts = {
  's-u1/l1': 'Identify the person of each صِيْغَةٌ.',
  's-u1/l8': 'Identify the إِعْرَابٌ of each past-tense form.',
  's-u1/l9': 'Identify the tense expressed by each negative particle.',
  's-u1/l10': 'Choose the command form for each مضارع.',
  's-u2/l6': 'Match each part of the dictionary entry to its purpose.',
  's-u3/l4': 'Match each rank to its حَرَكَةٌ, starting with the strongest.',
  's-u6/l1': 'Where does each change occur in نَاقِصٌ verbs?',
  's-u6/l4': 'Choose the correct conjugation of صَلَّى for each صِيْغَةٌ.',
  's-u8/l1': 'Match each باب to its pattern.',
  's-u10/l1': 'Choose the past-tense example for each verb category.',
  's-u10/l2': 'Choose the past-tense example for each verb category.',
  's-u10/l3': 'Match each verb category to its example.',
  's-u11/l1': 'Match each صفة مشبهة pattern to its example.',
  's-u12/l5': 'Choose the form after قَلْبٌ for each original.',
};

export function introSarfAnalysisItems(lesson) {
  const spec = comparisons[lesson.learningKey];
  if (!spec) return [];
  const [conceptIndex, lineIndex, cue, answer] = spec;
  const table = lesson.concepts[conceptIndex].lines[lineIndex].table;
  const candidates = table.rows.map((row, rowIndex) => ({ row, rowIndex })).filter(({ row }) =>
    row[cue] && row[answer] && !/^[—-]$/.test(row[answer])
    && table.rows.every(other => other[cue] !== row[cue] || other[answer] === row[answer]));
  // Sample across the paradigm, then retain distinct cues and answers.
  const order = [0, Math.floor(candidates.length / 2), candidates.length - 1, ...candidates.map((_, i) => i)];
  const rows = [], cues = new Set(), answers = new Set();
  for (const index of order) {
    const entry = candidates[index];
    if (!entry || cues.has(entry.row[cue]) || answers.has(entry.row[answer])) continue;
    rows.push(entry); cues.add(entry.row[cue]); answers.add(entry.row[answer]);
    if (rows.length === 3) break;
  }
  if (rows.length < 2) return [];
  const prompt = prompts[lesson.learningKey] || `Choose the ${table.headers[answer]} that matches each ${table.headers[cue] || 'entry'}.`;
  return [{ id: `table-${conceptIndex}-${lineIndex}`, conceptIndex, lineIndex, cue, answer,
    rowIndices: rows.map(r => r.rowIndex), prompt,
    source: table.title || lesson.concepts[conceptIndex].heading,
    words: rows.map(({ row }) => row[cue]), labels: rows.map(({ row }) => row[answer]),
    options: rows.map(({ row }) => row[answer]),
    hint: `Compare ${table.headers[cue] || 'the entries'} with ${table.headers[answer]}. Refer to the worked example if you need a reminder.`,
  }];
}

export function introSarfPracticeItems(lesson) {
  const seen = new Set(lesson.concepts.map(concept => concept.exercise?.prompt).filter(Boolean));
  return lesson.bank.flatMap((item, bankIndex) => {
    if (!['mcq', 'vocab'].includes(item.kind) || seen.has(item.prompt)) return [];
    seen.add(item.prompt);
    return [{ ...item, id: `bank-${bankIndex}`, bankIndex }];
  }).slice(0, 2 - introSarfAnalysisItems(lesson).length);
}

export function introSarfSteps(lesson) {
  const steps = sourceConceptSteps(lesson);
  if (lesson.learningKey === 's-u1/l1') steps[0].visual = 'verb-parts';
  introSarfAnalysisItems(lesson).forEach((item, analysisIndex) => steps.push({ id: `analysis:${item.id}`, kind: 'analysis', analysisIndex }));
  introSarfPracticeItems(lesson).forEach((item, practiceIndex) => steps.push({ id: `practice:${item.id}`, kind: 'practice', practiceIndex }));
  steps.push({ id: 'summary', kind: 'summary' });
  return steps;
}

export function introSarfTablePages(table) {
  // Keep the first column as context while reading a wide conjugation row.
  const pages = [];
  for (let first = 1; first < table.headers.length; first += 3) {
    pages.push(Array.from({ length: Math.min(3, table.headers.length - first) }, (_, i) => first + i));
  }
  return pages;
}

export function introSarfTableVisual(table) {
  return table.headers.length >= 2 && table.rows.length > 0
    && table.rows.every(row => row[0].length <= 100 && row.every(cell => cell.length <= 180));
}

export function introSarfVisualCount(lesson, step) {
  if (step.visual === 'verb-parts') return 2;
  const table = lesson.concepts[step.conceptIndex]?.lines[step.tableIndex]?.table;
  return table && introSarfTableVisual(table) ? table.rows.length * introSarfTablePages(table).length : 1;
}

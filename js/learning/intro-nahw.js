// Presentation plans reference the book's source blocks and bank entries.
// Review identities and authored questions remain unchanged.
import { compactTable } from './comparison.js';
import { sourceConceptSteps } from './source.js';

export function introNahwDiagram(diagram) {
  return diagram.cells.length <= 6 && diagram.cells.every(cell => cell !== '*' && cell.length <= 70);
}

export function introNahwSentenceParts(diagram) {
  return diagram.rows.flatMap(row => row.labels);
}

export function introNahwVisualCount(lesson, step) {
  if (step.visual === 'word-types') return lesson.summary.rows.length;
  const lines = lesson.concepts[step.conceptIndex]?.lines;
  const table = lines?.[step.tableIndex]?.table;
  const diagram = lines?.[step.diagramIndex]?.tarkeebDiagram;
  if (table && compactTable(table)) return table.rows.length;
  return diagram && introNahwDiagram(diagram) ? introNahwSentenceParts(diagram).length : 1;
}

export function introNahwAnalysisItems(lesson) {
  if (lesson.learningKey === 'f-nouns/l1') return [{
    id: 'word-types', prompt: 'Classify each word as an اِسْمٌ, فِعْلٌ or حَرْفٌ.',
    source: 'قَلَمٌ · فَتَحَ · فِيْ', words: ['قَلَمٌ', 'فَتَحَ', 'فِيْ'],
    labels: ['اِسْمٌ', 'فِعْلٌ', 'حَرْفٌ'], options: ['اِسْمٌ', 'فِعْلٌ', 'حَرْفٌ'],
    hint: 'قَلَمٌ names a thing. فَتَحَ describes an action. فِيْ links words together.',
  }];
  const taught = new Set(lesson.concepts.flatMap(c => c.lines.filter(l => l.tarkeebDiagram).map(l => l.tarkeebDiagram.sentence)));
  const seen = new Set();
  return lesson.bank.flatMap((item, bankIndex) => {
    if (item.kind !== 'tarkeeb' || seen.has(item.sentence)) return [];
    // One non-overlapping layer keeps the question unambiguous: nested
    // phrases stay together instead of being mistaken for individual words.
    const rowIndex = item.rows.findIndex(row => row.labels.length >= 2 && row.labels.length <= 5
      && new Set(row.labels.map(label => label.role)).size > 1
      && item.cells.every((_, i) => row.labels.filter(label => label.start <= i && label.end >= i).length === 1)
      && row.labels.every(label => label.end - label.start < 5));
    if (rowIndex < 0) return [];
    seen.add(item.sentence);
    const spans = [...item.rows[rowIndex].labels].sort((a, b) => a.start - b.start);
    const words = spans.map(span => item.cells.slice(span.start, span.end + 1).join(' '));
    if (new Set(words).size !== words.length) return [];
    return [{ id: `bank-${bankIndex}-row-${rowIndex}`, bankIndex, rowIndex, spans,
      prompt: 'Give each part its grammatical role. Keep the words in each phrase together.',
      source: item.sentence, translation: item.translation, words, labels: spans.map(span => span.role),
      // Distractor labels are hidden: only the roles this row actually uses.
      options: [...new Set(spans.map(span => span.role))],
      hint: 'Read the whole sentence first. A group of words can fill one role, just as a single word can.',
      worked: taught.has(item.sentence),
    }];
  }).sort((a, b) => Number(a.worked) - Number(b.worked)).slice(0, 2);
}

export function introNahwPracticeItems(lesson) {
  const seen = new Set();
  return lesson.bank.flatMap((item, bankIndex) => {
    if (!['mcq', 'vocab'].includes(item.kind) || seen.has(item.prompt)) return [];
    seen.add(item.prompt);
    return [{ ...item, id: `bank-${bankIndex}`, bankIndex }];
  }).slice(0, Math.max(0, 2 - introNahwAnalysisItems(lesson).length));
}

export function introNahwSteps(lesson) {
  const steps = sourceConceptSteps(lesson);
  if (lesson.learningKey === 'f-nouns/l1') steps[0].visual = 'word-types';
  introNahwAnalysisItems(lesson).forEach((item, analysisIndex) => steps.push({ id: `analysis:${item.id}`, kind: 'analysis', analysisIndex }));
  introNahwPracticeItems(lesson).forEach((item, practiceIndex) => steps.push({ id: `practice:${item.id}`, kind: 'practice', practiceIndex }));
  steps.push({ id: 'summary', kind: 'summary' });
  return steps;
}

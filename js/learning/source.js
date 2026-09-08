import { escBidi } from '../html.js';

// The introductory books share structured prose, lists and source tables.
// Plans refer to those blocks so pagination never rewrites their content.
export function sourceConceptSteps(lesson) {
  const steps = [];
  lesson.concepts.forEach((concept, conceptIndex) => {
    let group = null, groupIndex = 0;
    concept.lines.forEach((line, lineIndex) => {
      const visual = line.table || line.tarkeebDiagram;
      const example = line.list && /^(?:<bdi[ >]|[\u0600-\u06ff])/.test(line.html.trim());
      const presentation = visual || example ? 'example' : 'learn';
      if (!group || visual || group.tableIndex != null || group.diagramIndex != null || group.presentation !== presentation) {
        group = { id: `concept:${conceptIndex}:teach:${groupIndex++}`, kind: 'teach', conceptIndex, presentation, lineIndices: [] };
        steps.push(group);
      }
      group.lineIndices.push(lineIndex);
      if (line.table) group.tableIndex = lineIndex;
      if (line.tarkeebDiagram) group.diagramIndex = lineIndex;
    });
    if (concept.exercise) steps.push({ id: `concept:${conceptIndex}:check`, kind: 'check', conceptIndex });
  });
  return steps;
}

export function sourceSummaryHtml(lesson, helpers, state) {
  const summary = lesson.summary;
  const recap = summary ? summary.rows.map(row => `<section><h3>${escBidi(row.label)} · ${escBidi(row.arabic)}</h3><p>${escBidi(row.meaning)}</p>${row.examples?.length ? `<ul>${row.examples.map(example => `<li>${escBidi(example)}</li>`).join('')}</ul>` : ''}</section>`).join('')
    : lesson.concepts.map(concept => `<section><h3>${escBidi(concept.heading)}</h3>${helpers.prose(concept, '', null, true, state.tarkeebLabelsBlue)}</section>`).join('');
  const subject = lesson.learningModel === 'mizan-intro-sarf' ? 'mz-sarf-teaching' : 'mz-intro-nahw-teaching';
  return `<article class="mz-teaching mz-nahw-teaching ${subject}"><div class="mz-teaching-copy"><p class="mz-eyebrow">Takeaway</p><h2>${escBidi(summary?.title || 'Bring it together')}</h2><div class="mz-prose mz-nahw-recap">${recap}</div></div></article>`;
}

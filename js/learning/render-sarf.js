import { escBidi } from '../html.js';
import { compactTable, comparisonTableHtml } from './comparison.js';
import { foundationPlan } from './nahw-foundations.js';
import { foundationTeachingHtml } from './render-foundations.js';

export function sarfTeachingHtml(lesson, step, session, helpers, state) {
  if (foundationPlan(lesson)) return foundationTeachingHtml(lesson, step);
  const concept = lesson.concepts[step.conceptIndex];
  const lines = step.lineIndices.map(i => concept.lines[i]);
  const table = step.tableIndex == null ? null : concept.lines[step.tableIndex].table;
  const interactive = table && compactTable(table);
  const label = { learn: 'Learn', example: 'Worked example', takeaway: 'Takeaway' }[step.presentation];
  const prose = step.clarification ? helpers.prose({ body: concept.clarification }, '', null, true, state.tarkeebLabelsBlue)
    : helpers.prose({ lines: interactive ? [] : lines }, '', null, true, state.tarkeebLabelsBlue);
  return `<article class="mz-teaching mz-nahw-teaching mz-sarf-teaching${interactive ? ' has-visual' : ''}"><div class="mz-teaching-copy"><p class="mz-eyebrow">${label}</p><h2>${escBidi(concept.heading)}</h2><div class="mz-prose concept-body">${prose}${interactive ? `<p>Compare the entries and notice how the form relates to its meaning or rule.</p><details class="mz-nahw-full-analysis" data-study-detail ${session.readingDetails?.[step.id] ? 'open' : ''}><summary>See the complete table</summary>${helpers.prose({ lines }, '', null, true, state.tarkeebLabelsBlue)}</details>` : ''}</div></div>${interactive ? comparisonTableHtml(table, step, session) : ''}</article>`;
}

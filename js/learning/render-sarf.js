import { escBidi } from '../html.js';
import { sarfTableVisual } from './sarf.js';

export function sarfVisualHtml(table, step, session) {
  const stored = session.visualState?.[step.id]?.selected;
  const selected = Math.max(0, Math.min(Number.isInteger(stored) ? stored : 0, table.rows.length - 1));
  const row = table.rows[selected];
  const columns = table.headers.map((_, i) => `minmax(0, ${Math.min(3, Math.max(1, Math.ceil(Math.max(...table.rows.map(r => r[i].length)) / 60)))}fr)`).join(' ');
  return `<figure class="lesson-visual mz-sarf-visual"><div class="visual-heading"><span>COMPARE THE FORMS</span><h3>${escBidi(table.title || 'Read the pattern')}</h3></div><div class="mz-sarf-example-nav"><button class="mz-text-button" data-action="sarfVisual" data-value="${selected - 1}" ${!selected ? 'disabled' : ''} aria-label="Previous example">←</button><span>Example ${selected + 1} of ${table.rows.length}</span><button class="mz-text-button" data-action="sarfVisual" data-value="${selected + 1}" ${selected + 1 === table.rows.length ? 'disabled' : ''} aria-label="Next example">→</button></div><dl class="mz-sarf-comparison" style="--sarf-comparison-columns:${columns}">${row.map((cell, i) => `<div><dt>${escBidi(table.headers[i])}</dt><dd>${escBidi(cell)}</dd></div>`).join('')}</dl></figure>`;
}

export function sarfTeachingHtml(lesson, step, session, helpers, state) {
  const concept = lesson.concepts[step.conceptIndex];
  const lines = step.lineIndices.map(i => concept.lines[i]);
  const table = step.tableIndex == null ? null : concept.lines[step.tableIndex].table;
  const interactive = table && sarfTableVisual(table);
  const label = { learn: 'Learn', example: 'Worked example', takeaway: 'Takeaway' }[step.presentation];
  const prose = step.clarification ? helpers.prose({ body: concept.clarification }, '', null, true, state.tarkeebLabelsBlue)
    : helpers.prose({ lines: interactive ? [] : lines }, '', null, true, state.tarkeebLabelsBlue);
  return `<article class="mz-teaching mz-nahw-teaching mz-sarf-teaching${interactive ? ' has-visual' : ''}"><div class="mz-teaching-copy"><p class="mz-eyebrow">${label}</p><h2>${escBidi(concept.heading)}</h2><div class="mz-prose concept-body">${prose}${interactive ? `<p>Compare the entries and notice how the form relates to its meaning or rule.</p><details class="mz-nahw-full-analysis" data-study-detail ${session.readingDetails?.[step.id] ? 'open' : ''}><summary>See the complete table</summary>${helpers.prose({ lines }, '', null, true, state.tarkeebLabelsBlue)}</details>` : ''}</div></div>${interactive ? sarfVisualHtml(table, step, session) : ''}</article>`;
}

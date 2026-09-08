import { escBidi } from '../html.js';

export function compactTable(table) {
  // Long source quotations keep the full, paginated table. Compact rows
  // can be explored as a single form together with its explanation.
  return table.headers.length <= 4 && table.rows.length > 1
    && table.rows.every(row => row[0].length <= 75 && row.join(' ').length <= 250);
}
export function comparisonTableHtml(table, step, session) {
  const stored = session.visualState?.[step.id]?.selected;
  const selected = Math.max(0, Math.min(Number.isInteger(stored) ? stored : 0, table.rows.length - 1));
  const row = table.rows[selected];
  const columns = table.headers.map((_, i) => `minmax(0, ${Math.min(3, Math.max(1, Math.ceil(Math.max(...table.rows.map(r => r[i].length)) / 60)))}fr)`).join(' ');
  return `<figure class="lesson-visual mz-sarf-visual"><div class="visual-heading"><span>COMPARE THE FORMS</span><h3>${escBidi(table.title || 'Read the pattern')}</h3></div><div class="mz-sarf-example-nav"><button class="mz-text-button" data-action="tableVisual" data-value="${selected - 1}" ${!selected ? 'disabled' : ''} aria-label="Previous example">←</button><span>Example ${selected + 1} of ${table.rows.length}</span><button class="mz-text-button" data-action="tableVisual" data-value="${selected + 1}" ${selected + 1 === table.rows.length ? 'disabled' : ''} aria-label="Next example">→</button></div><dl class="mz-sarf-comparison" style="--sarf-comparison-columns:${columns}">${row.map((cell, i) => `<div><dt>${escBidi(table.headers[i])}</dt><dd>${escBidi(cell)}</dd></div>`).join('')}</dl></figure>`;
}

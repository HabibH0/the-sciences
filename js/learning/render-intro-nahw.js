import { escBidi } from '../html.js';
import { compactTable, comparisonTableHtml } from './comparison.js';
import { introNahwDiagram, introNahwSentenceParts } from './intro-nahw.js';

export function introNahwWordVisual(lesson, step, session) {
  const rows = lesson.summary.rows;
  const stored = session.visualState?.[step.id]?.selected;
  const selected = Math.max(0, Math.min(Number.isInteger(stored) ? stored : 0, rows.length - 1));
  const row = rows[selected];
  return `<figure class="lesson-visual mz-nahw-visual"><div class="visual-heading"><span>EXPLORE THE WORDS</span><h3>Noun, verb or particle?</h3></div><div class="visual-switcher" role="group" aria-label="Explore word types">${rows.map((r, i) => `<button data-action="nahwVisual" data-value="${i}" aria-pressed="${i === selected}">${escBidi(r.arabic)}</button>`).join('')}</div><div class="mz-nahw-example">${row.examples.map(escBidi).join(' · ')}</div><div class="part-explanation"><strong>${escBidi(row.label)} · ${escBidi(row.arabic)}</strong><p>${escBidi(row.meaning)}</p></div></figure>`;
}

export function introNahwSentenceVisual(diagram, step, session) {
  const parts = introNahwSentenceParts(diagram), stored = session.visualState?.[step.id]?.selected;
  const selected = Math.max(0, Math.min(Number.isInteger(stored) ? stored : 0, parts.length - 1));
  const part = parts[selected];
  return `<figure class="lesson-visual mz-intro-sentence"><div class="visual-heading"><span>EXPLORE THE SENTENCE</span><h3>Words and phrases</h3></div><div class="mz-sarf-example-nav mz-intro-part-nav"><button class="mz-text-button" data-action="introNahwPart" data-value="${selected - 1}" ${!selected ? 'disabled' : ''} aria-label="Previous part">←</button><span>Part ${selected + 1} of ${parts.length}</span><button class="mz-text-button" data-action="introNahwPart" data-value="${selected + 1}" ${selected + 1 === parts.length ? 'disabled' : ''} aria-label="Next part">→</button></div><div class="mz-intro-sentence-words" dir="rtl">${diagram.cells.map((word, i) => `<span class="${i >= part.start && i <= part.end ? 'is-selected' : ''}">${escBidi(word)}</span>`).join('')}</div><div class="mz-intro-part-role"><span>Role of the highlighted ${part.start === part.end ? 'word' : 'phrase'}</span><strong>${escBidi(part.role)}</strong></div>${diagram.translation ? `<figcaption>${escBidi(diagram.translation)}</figcaption>` : ''}</figure>`;
}

export function introNahwTeachingHtml(lesson, step, session, helpers, state) {
  const concept = lesson.concepts[step.conceptIndex];
  const lines = step.lineIndices.map(i => concept.lines[i]);
  const diagram = concept.lines[step.diagramIndex]?.tarkeebDiagram;
  const interactiveDiagram = diagram && introNahwDiagram(diagram);
  const table = concept.lines[step.tableIndex]?.table;
  const interactive = table && compactTable(table);
  const visual = interactiveDiagram ? introNahwSentenceVisual(diagram, step, session) : step.visual === 'word-types' ? introNahwWordVisual(lesson, step, session)
    : interactive ? comparisonTableHtml(table, step, session) : '';
  const prose = helpers.prose({ lines: interactive || interactiveDiagram ? [] : lines }, '', null, true, state.tarkeebLabelsBlue);
  return `<article class="mz-teaching mz-nahw-teaching mz-intro-nahw-teaching${visual ? ' has-visual' : ''}"><div class="mz-teaching-copy"><p class="mz-eyebrow">${step.presentation === 'example' ? 'Worked example' : 'Learn'}</p><h2>${escBidi(concept.heading)}</h2><div class="mz-prose concept-body">${prose}${interactive || interactiveDiagram ? `<details class="mz-nahw-full-analysis" data-study-detail ${session.readingDetails?.[step.id] ? 'open' : ''}><summary>See the complete ${interactiveDiagram ? 'analysis' : 'table'}</summary>${helpers.prose({ lines }, '', null, true, state.tarkeebLabelsBlue)}</details>` : ''}</div></div>${visual}</article>`;
}

export function introNahwSummaryHtml(lesson, helpers, state) {
  const summary = lesson.summary;
  const recap = summary ? summary.rows.map(row => `<section><h3>${escBidi(row.label)} · ${escBidi(row.arabic)}</h3><p>${escBidi(row.meaning)}</p>${row.examples?.length ? `<ul>${row.examples.map(example => `<li>${escBidi(example)}</li>`).join('')}</ul>` : ''}</section>`).join('')
    : lesson.concepts.map(concept => `<section><h3>${escBidi(concept.heading)}</h3>${helpers.prose(concept, '', null, true, state.tarkeebLabelsBlue)}</section>`).join('');
  return `<article class="mz-teaching mz-nahw-teaching mz-intro-nahw-teaching"><div class="mz-teaching-copy"><p class="mz-eyebrow">Takeaway</p><h2>${escBidi(summary?.title || 'Bring it together')}</h2><div class="mz-prose mz-nahw-recap">${recap}</div></div></article>`;
}

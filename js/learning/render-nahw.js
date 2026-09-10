import { esc, escBidi } from '../html.js';
import { WORD_EXAMPLES, isWordLesson } from './nahw.js';
import { wordTeachingHtml, wordSummaryHtml } from './render-word.js';
import { foundationPlan } from './nahw-foundations.js';
import { foundationTeachingHtml, foundationSummaryHtml } from './render-foundations.js';

export function nahwVisualHtml(lesson, step, session) {
  const choice = session.visualState?.[step.id]?.selected ?? (step.visual === 'word-boundaries' ? Math.max(1, step.conceptIndex - 2) : 0);
  if (step.visual === 'word-boundaries') {
    const examples = WORD_EXAMPLES.slice(0, step.conceptIndex >= 5 ? 4 : step.conceptIndex >= 4 ? 3 : 2);
    const selected = Math.min(choice, examples.length - 1), example = examples[selected];
    return `<figure class="lesson-visual mz-nahw-visual"><div class="visual-heading"><span>EXPLORE THE IDEA</span><h3>Where does the meaning belong?</h3></div><div class="visual-switcher" role="group" aria-label="Compare expressions">${examples.map((e, i) => `<button data-action="nahwVisual" data-value="${i}" aria-pressed="${i === selected}">${escBidi(e.text)}</button>`).join('')}</div><div class="mz-nahw-example">${escBidi(example.text)}</div><div class="part-explanation"><strong>${escBidi(example.label)}</strong><p>${escBidi(example.explanation)}</p></div></figure>`;
  }
  const diagram = step.lineIndices.map(i => lesson.concepts[step.conceptIndex].lines[i]).find(l => l.tarkeebDiagram)?.tarkeebDiagram;
  if (!diagram) return '';
  const selected = Math.min(choice, diagram.cells.length - 1);
  const roles = [...new Set(diagram.rows.flatMap(row => row.labels.filter(label => label.start <= selected && label.end >= selected).map(label => label.role)))];
  return `<figure class="lesson-visual mz-nahw-visual"><div class="visual-heading"><span>EXPLORE THE SENTENCE</span><h3>How the parts fit together</h3></div><div class="sentence-anatomy mz-nahw-anatomy" dir="rtl" role="group" aria-label="Explore each part of the sentence">${diagram.cells.map((cell, i) => `<button data-action="nahwVisual" data-value="${i}" aria-pressed="${i === selected}">${escBidi(cell)}</button>`).join('')}</div><div class="part-explanation"><strong>${escBidi(diagram.cells[selected])}</strong>${roles.map(role => `<p>${escBidi(role)}</p>`).join('')}</div>${diagram.translation ? `<figcaption>${esc(diagram.translation)}</figcaption>` : ''}</figure>`;
}

export function nahwTeachingHtml(lesson, step, session, helpers, state) {
  if (isWordLesson(lesson)) return wordTeachingHtml(lesson, step, helpers, state);
  if (foundationPlan(lesson)) return foundationTeachingHtml(lesson, step);
  const concept = lesson.concepts[step.conceptIndex];
  const lines = step.lineIndices.map(i => concept.lines[i]);
  const visual = nahwVisualHtml(lesson, step, session);
  const copy = visual ? lines.filter(l => !l.tarkeebDiagram) : lines;
  const diagram = visual ? lines.filter(l => l.tarkeebDiagram) : [];
  const label = { learn: 'Learn', example: 'Worked example', takeaway: 'Takeaway' }[step.presentation];
  return `<article class="mz-teaching mz-nahw-teaching${visual ? ' has-visual' : ''}"><div class="mz-teaching-copy"><p class="mz-eyebrow">${label}</p><h2>${escBidi(concept.heading)}</h2><div class="mz-prose concept-body">${helpers.prose({ lines: copy }, '', null, true, state.tarkeebLabelsBlue)}${diagram.length ? `<details class="mz-nahw-full-analysis" data-study-detail ${session.readingDetails?.[step.id] ? 'open' : ''}><summary>See the complete analysis</summary>${helpers.prose({ lines: diagram }, '', null, true, state.tarkeebLabelsBlue)}</details>` : ''}</div></div>${visual}</article>`;
}

export function nahwSummaryHtml(lesson, helpers, state) {
  if (isWordLesson(lesson)) return wordSummaryHtml();
  if (foundationPlan(lesson)) return foundationSummaryHtml(lesson);
  return `<article class="mz-teaching mz-nahw-teaching"><div class="mz-teaching-copy"><p class="mz-eyebrow">TAKEAWAY</p><h2>Bring it together</h2><div class="mz-prose mz-nahw-recap">${lesson.concepts.map(c => {
    const line = c.lines.find(l => ['Definition', 'Rule'].includes(l.box?.title)) || c.lines.find(l => l.box?.title === 'Careful') || c.lines[0];
    return `<section><h3>${escBidi(c.heading)}</h3>${helpers.prose({ lines: [line] }, '', null, true, state.tarkeebLabelsBlue)}</section>`;
  }).join('')}</div></div></article>`;
}

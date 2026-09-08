import { escBidi } from '../html.js';
import { introSarfTablePages, introSarfTableVisual } from './intro-sarf.js';

function verbPartsHtml(step, session) {
  const selected = session.visualState?.[step.id]?.selected === 1 ? 1 : 0;
  const labels = ['فِعْلٌ', 'ضَمِيْرٌ'];
  return `<figure class="lesson-visual mz-nahw-visual"><div class="visual-heading"><span>EXPLORE THE VERB</span><h3>An action and its subject</h3></div><div class="visual-switcher" role="group" aria-label="Explore the verb components">${labels.map((label, i) => `<button data-action="nahwVisual" data-value="${i}" aria-pressed="${selected === i}">${escBidi(label)}</button>`).join('')}</div><div class="mz-intro-sentence-words" dir="rtl"><span class="${!selected ? 'is-selected' : ''}">${escBidi('فَعَلْـ')}</span><span class="${selected ? 'is-selected' : ''}">${escBidi('ـتُمْ')}</span></div><div class="part-explanation"><strong>${selected ? 'Subject pronoun' : 'Verb'} · ${escBidi(labels[selected])}</strong><p>${selected ? 'The pronoun shows the person, gender and number of the one carrying out the action.' : 'The verb expresses the action. Change its pronoun to show who carries it out.'}</p></div></figure>`;
}

export function introSarfTableHtml(table, step, session) {
  const pages = introSarfTablePages(table), stored = session.visualState?.[step.id]?.selected;
  const selected = Math.max(0, Math.min(Number.isInteger(stored) ? stored : 0, table.rows.length * pages.length - 1));
  const rowIndex = Math.floor(selected / pages.length), page = selected % pages.length;
  const row = table.rows[rowIndex], columns = pages[page];
  const widths = columns.map(i => `minmax(0, ${Math.min(4, Math.max(1, Math.ceil(Math.max(table.headers[i].length, row[i].length) / 40)))}fr)`).join(' ');
  const nav = (group, index, count, stride, label) => `<div class="mz-sarf-example-nav mz-intro-sarf-nav" data-sarf-nav="${group}"><button class="mz-text-button" data-action="introSarfTable" data-value="${selected - stride}" data-nav="${group}" aria-label="Previous ${group}" ${!index ? 'disabled' : ''}>←</button><span>${label} ${index + 1} of ${count}</span><button class="mz-text-button" data-action="introSarfTable" data-value="${selected + stride}" data-nav="${group}" aria-label="Next ${group}" ${index + 1 === count ? 'disabled' : ''}>→</button></div>`;
  return `<figure class="lesson-visual mz-intro-sarf-visual"><div class="visual-heading"><span>EXPLORE THE FORMS</span><h3>${escBidi(table.title || 'Compare the forms')}</h3></div>${nav('example', rowIndex, table.rows.length, pages.length, 'Example')}<div class="mz-intro-sarf-cue"><span>${escBidi(table.headers[0])}</span><strong>${escBidi(row[0])}</strong></div>${pages.length > 1 ? nav('forms', page, pages.length, 1, 'Group') : ''}<dl class="mz-sarf-comparison mz-intro-sarf-cells" style="--intro-sarf-columns:${widths}">${columns.map(i => `<div data-source-column="${i}"><dt>${escBidi(table.headers[i])}</dt><dd>${escBidi(row[i] || '—')}</dd></div>`).join('')}</dl></figure>`;
}

export function introSarfTeachingHtml(lesson, step, session, helpers, state) {
  const concept = lesson.concepts[step.conceptIndex], lines = step.lineIndices.map(i => concept.lines[i]);
  const table = concept.lines[step.tableIndex]?.table;
  const interactive = table && introSarfTableVisual(table);
  const visual = interactive ? introSarfTableHtml(table, step, session) : step.visual === 'verb-parts' ? verbPartsHtml(step, session) : '';
  const prose = helpers.prose({ lines: interactive ? [] : lines }, '', null, true, state.tarkeebLabelsBlue);
  return `<article class="mz-teaching mz-nahw-teaching mz-sarf-teaching${visual ? ' has-visual' : ''}"><div class="mz-teaching-copy"><p class="mz-eyebrow">${step.presentation === 'example' ? 'Worked example' : 'Learn'}</p><h2>${escBidi(concept.heading)}</h2><div class="mz-prose concept-body">${prose}${interactive ? `<details class="mz-nahw-full-analysis" data-study-detail ${session.readingDetails?.[step.id] ? 'open' : ''}><summary>See the complete table</summary>${helpers.prose({ lines }, '', null, true, state.tarkeebLabelsBlue)}</details>` : ''}</div></div>${visual}</article>`;
}

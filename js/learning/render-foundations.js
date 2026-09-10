import { esc, escAttr, escBidi, isolateArabicHtml } from '../html.js';
import { foundationPlan, sourceRef, FOUNDATION_TABLE_COPY } from './nahw-foundations.js';
import { FOUNDATION_VISUALS, FOUNDATION_LABELS } from './nahw-foundation-visuals.js';

// Clarifications are source material too. An authored card explicitly owns
// this reference, just as it owns a paragraph or complete table rows.
const sourceLine = (concept, index) => index === 'clarification' ? { html: concept.clarification } : concept.lines[index];

// An authored family keeps every complete example alongside its pattern.
// The columns change placement only; their type roles never depend on fit.
const formCollectionHtml = (group, attributes = '') => `<section class="mz-foundation-definition mz-form-collection" ${attributes}><h3>${escBidi(group.heading)}</h3>${group.pattern ? `<p data-text-role="pattern" dir="rtl">${escBidi(group.pattern)}</p>` : ''}<ul dir="rtl">${group.items.map(item => `<li><span data-text-role="pattern">${escBidi(Array.isArray(item) ? item[0] : item)}</span>${Array.isArray(item) && item[1] ? `<span class="mz-form-gloss" dir="ltr">${escBidi(item[1])}</span>` : ''}</li>`).join('')}</ul>${group.note ? `<p class="mz-form-note" dir="ltr">${escBidi(group.note)}</p>` : ''}</section>`;

// Text is deliberately assigned a role. No measurements select a font size.
export function foundationLineHtml(lesson, conceptIndex, ref) {
  const plan = foundationPlan(lesson), { line: index, rows, part } = sourceRef(ref);
  const line = sourceLine(lesson.concepts[conceptIndex], index);
  let content = '';
  if (line.html != null) {
    const copy = part == null ? plan.copy[`${conceptIndex}:${index}`] : plan.copyParts[`${conceptIndex}:${index}`][part];
    content = `<p class="concept-line">${isolateArabicHtml(copy ?? line.html)}</p>`;
  }
  if (line.box) {
    const copy = part == null ? plan.boxCopy?.[`${conceptIndex}:${index}`] || line.box.lines : [plan.copyParts[`${conceptIndex}:${index}`][part]];
    content = `<section class="mz-foundation-definition"><h3>${esc(line.box.title)}</h3>${copy.map(text => `<p class="concept-source-box-line" dir="${plan.analysisLabels && /[a-z]/i.test(text) ? 'ltr' : 'auto'}">${escBidi(text)}</p>`).join('')}</section>`;
    const examples = part == null ? plan.boxExamples?.[`${conceptIndex}:${index}`] : plan.boxPartExamples?.[`${conceptIndex}:${index}`]?.[part];
    if (examples) content = formCollectionHtml(examples);
  }
  if (line.table) content = `<div class="mz-foundation-comparison${plan.patternTables?.includes(`${conceptIndex}:${index}`) ? ' is-pattern' : ''}${['01/l3:4:1', '01/l4:0:2', '02/l1:0:3', '02/l2:4:1'].includes(`${lesson.learningKey}:${conceptIndex}:${index}`) ? ' is-columns' : ''}" aria-label="${escAttr(plan.tableTitles?.[`${conceptIndex}:${index}`] || line.table.title || lesson.concepts[conceptIndex].heading)}">${(rows ?? line.table.rows.map((_, i) => i)).map(ri => {
    const group = plan.tableExamples?.[`${conceptIndex}:${index}`]?.[ri];
    if (group) return formCollectionHtml(group, `data-source-row="${conceptIndex}:${index}:${ri}"`);
    const cells = (plan.tableCopy?.[`${conceptIndex}:${index}`] || FOUNDATION_TABLE_COPY[`${lesson.learningKey}:${conceptIndex}:${index}`])?.[ri] || line.table.rows[ri];
    const headers = plan.tableHeaders?.[`${conceptIndex}:${index}`] || line.table.headers;
    if (plan.patternTables?.includes(`${conceptIndex}:${index}`)) return `<section data-source-row="${conceptIndex}:${index}:${ri}"><h3 data-text-role="pattern">${escBidi(cells[0])}</h3>${cells.slice(1).map((text, i) => `<p class="mz-foundation-cell" data-column="${i + 1}"${i === 0 ? ' data-text-role="pattern"' : ` dir="${/[a-z]/i.test(text) ? 'ltr' : 'rtl'}"`}><span class="sr-only">${esc(headers[i + 1])}: </span>${escBidi(text)}</p>`).join('')}</section>`;
    return `<section data-source-row="${conceptIndex}:${index}:${ri}"><h3>${escBidi(cells[0])}</h3><div>${cells.slice(1).map((text, i) => `<p class="mz-foundation-cell" data-column="${i + 1}"><span class="sr-only">${esc(headers[i + 1])}: </span>${escBidi(text)}</p>`).join('')}</div></section>`;
  }).join('')}</div>`;
  if (line.tarkeebDiagram) {
    const diagram = line.tarkeebDiagram;
    const roleText = role => plan.diagramLabels?.[`${conceptIndex}:${index}`]?.[role] || role;
    content = `<figure class="mz-foundation-analysis"><p class="mz-foundation-sentence" dir="rtl">${escBidi(diagram.sentence)}</p><figcaption>${esc(diagram.translation || '')}</figcaption><dl>${diagram.rows.flatMap(row => row.labels).map(label => `<div><dt>${escBidi(diagram.cells.slice(label.start, label.end + 1).join(' '))}</dt><dd>${escBidi(roleText(label.role))}</dd></div>`).join('')}</dl></figure>`;
  }
  return `<div class="mz-word-source mz-foundation-source" data-source-line="${conceptIndex}:${index}"${part == null ? '' : ` data-source-part="${part}"`}>${content}</div>`;
}

export function foundationTeachingHtml(lesson, step) {
  const plan = foundationPlan(lesson), idea = plan.concepts[step.conceptIndex][step.foundationIndex];
  const concept = lesson.concepts[step.conceptIndex];
  const lines = { ...concept.lines, clarification: sourceLine(concept, 'clarification') };
  const anchors = idea.refs.filter(ref => !lines[sourceRef(ref).line].html);
  const prose = idea.refs.filter(ref => lines[sourceRef(ref).line].html);
  const render = ref => foundationLineHtml(lesson, step.conceptIndex, ref);
  const proseHtml = prose.map(ref => {
    const list = idea.lists?.find(group => group.includes(ref));
    if (list && list[0] !== ref) return '';
    const label = sourceRef(ref).label || plan.labels?.[`${step.conceptIndex}:${sourceRef(ref).line}`] || FOUNDATION_LABELS[lesson.learningKey]?.[`${step.conceptIndex}:${sourceRef(ref).line}`];
    return `<section>${label ? `<h3>${escBidi(label)}</h3>` : ''}${list ? `<ul class="mz-authored-list">${list.map(item => `<li>${render(item)}</li>`).join('')}</ul>` : render(ref)}</section>`;
  }).join('');
  const visual = idea.visual || plan.visuals?.[`${step.conceptIndex}:${step.foundationIndex}`] || FOUNDATION_VISUALS[lesson.learningKey]?.[`${step.conceptIndex}:${step.foundationIndex}`];
  // Required examples are content on every viewport. Optional visual summaries
  // may be omitted by the compact layout because the prose repeats them.
  const examples = plan.exampleGroups?.[`${step.conceptIndex}:${step.foundationIndex}`];
  const examplesHtml = examples ? formCollectionHtml(examples, 'data-required-examples') : '';
  // Grid direction orders the Arabic chunks; the existing label style keeps
  // English explanations LTR. A quoted reply owns its Arabic punctuation.
  const visualHtml = visual ? `<figure class="mz-meaning-visual mz-foundation-visual"><figcaption>${esc(visual.caption)}</figcaption><div class="mz-foundation-tokens" dir="rtl">${visual.items.map(([term, text, quote]) => `<div class="mz-meaning-token"><strong>${escBidi(term)}</strong><span>${escBidi(text)}${quote ? escBidi(quote) : ''}</span></div>`).join('')}</div></figure>` : '';
  const repeatedExample = anchors.some(ref => {
    const line = lines[sourceRef(ref).line];
    const sentenceKey = text => text.replace(/[\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06ed]/g, '').replace(/ٱ/g, 'ا').replace(/[^\p{L}\p{N}]/gu, '');
    return line.tarkeebDiagram && anchors.some(other => lines[sourceRef(other).line].box?.lines.some(text => text === line.tarkeebDiagram.sentence || (plan.analysisLabels && sentenceKey(text) === sentenceKey(line.tarkeebDiagram.sentence))));
  });
  return `<article class="mz-teaching mz-word-card mz-foundation-card"><div class="mz-teaching-copy"><header class="mz-word-card-head"><p class="mz-eyebrow">Idea ${step.ideaIndex + 1} of ${plan.concepts.flat().length}</p><h2>${escBidi(idea.title)}</h2></header><div class="mz-foundation-board${(!anchors.length && !visual && !examples) || !prose.length ? ' is-single' : ''}">${anchors.length || visual || examples ? `<div class="mz-foundation-anchor${repeatedExample ? ' has-repeated-example' : ''}">${anchors.map(render).join('')}${examplesHtml}${visualHtml}</div>` : ''}${prose.length ? `<div class="mz-foundation-explanation mz-prose">${proseHtml}</div>` : ''}</div></div></article>`;
}

export function foundationSummaryHtml(lesson) {
  const plan = foundationPlan(lesson);
  return `<article class="mz-teaching mz-word-card mz-foundation-card"><div class="mz-teaching-copy"><header class="mz-word-card-head"><p class="mz-eyebrow">Lesson recap</p><h2>Bring it together</h2></header><dl class="mz-foundation-recap">${plan.recap.map(([term, meaning]) => `<div><dt>${escBidi(term)}</dt><dd>${escBidi(meaning)}</dd></div>`).join('')}</dl></div></article>`;
}

import { esc, escAttr, escBidi } from '../html.js';
import { logicCourse, logicItem } from './logic-course.js';
import { logicResponseHtml, structuredHtml, responseComplete, answerLabel } from './exercises.js';

// Display state is separate from the authored sequence and grading evidence.
export function logicLayout(session, step) {
  const saved = session.logicLayout?.[step.itemId || step.stepId] || {};
  const item = step.itemId ? logicItem(step.itemId) : null;
  const groups = item ? logicFieldGroups(item).length : session.lessonId === 'lesson_hypothetical_syllogisms' && step.stepId === 'section_0' ? 2 : 1;
  return { ...saved, group: Number.isInteger(saved.group) ? Math.max(0, Math.min(groups - 1, saved.group)) : 0 };
}

export function logicTeachingHtml(content, session, visualHtml) {
  const heading = content.html.match(/^\s*<h[1-6]>([\s\S]*?)<\/h[1-6]>/);
  const title = heading ? heading[1] : esc(content.title);
  const prose = logicTables(heading ? content.html.slice(heading[0].length) : content.html);
  const label = content.presentation === 'example' ? 'Worked example' : content.presentation === 'takeaway' ? 'Takeaway' : 'Learn';
  const layout = logicLayout(session, { stepId: content.id });
  // The source already distinguishes mixed and pure syllogisms. Display the
  // complete branches separately on small screens, with every word retained.
  const branches = session.lessonId === 'lesson_hypothetical_syllogisms' && content.id === 'section_0'
    ? prose.split(/(?=<p>A pure hypothetical syllogism)/) : null;
  const copy = branches?.length === 2 ? branches.map((html, i) => `<section class="mz-logic-branch${Number(layout.group || 0) === i ? ' is-active' : ''}" data-branch="${i}">${html}</section>`).join('') : prose;
  return `<article class="mz-teaching mz-word-card mz-logic-card${content.visual ? ' has-visual' : ''}" data-logic-view="${layout.view === 'diagram' ? 'diagram' : 'explanation'}" data-logic-detail="${layout.detail === 'meaning' ? 'meaning' : 'diagram'}">
    <div class="mz-teaching-copy"><header class="mz-word-card-head"><p class="mz-eyebrow">${label}</p><h2>${title}</h2></header><div class="mz-prose markdown mz-logic-prose${branches ? ' has-branches' : ''}">${copy}</div></div>
    ${content.visual ? compactVisualControls(visualHtml(content.visual, session.visualState?.[content.id])) : ''}</article>`;
}

function logicTables(html) {
  return html.replace(/<div class="table-scroll"><table>([\s\S]*?)<\/table><\/div>/g, (all, table) => {
    const headings = [...(table.match(/<thead>([\s\S]*?)<\/thead>/)?.[1] || '').matchAll(/<th(?:\s[^>]*)?>([\s\S]*?)<\/th>/g)].map(m => m[1]);
    const original = `<div class="table-scroll${headings.length > 4 ? ' mz-logic-wide-table' : ''}"><table data-logic-columns="${headings.length}">${table}</table></div>`;
    if (headings.length <= 4) return original;
    const rows = [...(table.match(/<tbody>([\s\S]*?)<\/tbody>/)?.[1] || '').matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map(m => [...m[1].matchAll(/<td(?:\s[^>]*)?>([\s\S]*?)<\/td>/g)].map(c => c[1]));
    // The same table, labelled by row on a phone. No cells or wording are lost.
    return original + `<div class="mz-logic-table-records">${rows.map(row => `<section><h3><span>${headings[0]}</span> ${row[0]}</h3><dl>${row.slice(1).map((cell, i) => `<div><dt>${headings[i + 1]}</dt><dd>${cell}</dd></div>`).join('')}</dl></section>`).join('')}</div>`;
  });
}

function compactVisualControls(html) {
  return html.replace(/<div class="visual-switcher" aria-label="([^"]+)">([\s\S]*?)<\/div>/g, (all, label, buttons) => {
    const options = [...buttons.matchAll(/<button([^>]*)>([\s\S]*?)<\/button>/g)];
    if (options.length < 4) return all;
    const group = options[0][1].match(/data-visual-group="([^"]+)"/)[1];
    return `<div class="mz-logic-visual-buttons">${all}</div><label class="mz-logic-visual-select">${label}<select data-logic-visual-select data-visual-group="${group}">${options.map(([, attrs, text]) => `<option value="${attrs.match(/data-visual-value="([^"]*)"/)[1]}" ${attrs.includes('aria-pressed="true"') ? 'selected' : ''}>${text}</option>`).join('')}</select></label>`;
  });
}

export function logicStudyExerciseHtml(item, draft, layout, label) {
  const answering = !draft.grade || draft.correcting;
  const hint = layout.view === 'hint' && draft.hintsUsed;
  const original = !answering && layout.view === 'original';
  const correctionReview = layout.view === 'correctionFeedback' && draft.correctionGrade?.correct === false;
  let response;
  if (draft.error) response = `<section class="mz-error" role="alert"><h3>Your answer is kept</h3><p>${esc(draft.error)}</p></section>`;
  else if (correctionReview) response = `<section class="mz-feedback is-incorrect" tabindex="-1" role="status"><h3>Check the correction</h3><p>${escBidi(draft.correctionGrade.message)}</p></section>`;
  else if (hint) response = `<aside class="mz-hints" tabindex="-1"><h3>Hint</h3>${item.hints.slice(0, draft.hintsUsed).map(h => `<p>${escBidi(h)}</p>`).join('')}</aside>`;
  else if (answering) {
    const groups = logicFieldGroups(item);
    const controls = item.options.length > 6 && item.fields.length === 1 && item.fields[0].kind !== 'list'
      ? `<label class="mz-field">Your answer<select data-logic-choice-select ${draft.busy ? 'disabled' : ''}><option value="">Choose…</option>${item.options.map((v, i) => `<option value="${i}" ${JSON.stringify(v) === JSON.stringify(draft.response) ? 'selected' : ''}>${esc(answerLabel(v))}</option>`).join('')}</select></label>`
      : groups.length > 1 ? groups.map((group, i) => `<section class="mz-logic-field-group${Number(layout.group || 0) === i ? ' is-active' : ''}"><h3>${esc(group.title)} <span>${i + 1} / ${groups.length}</span></h3>${structuredHtml(item, draft.response, draft.busy, group.indices)}</section>`).join('') : logicResponseHtml(item, draft, draft.busy);
    response = `<form class="mz-logic-form" data-logic-form>${controls}</form>`;
  } else {
    const grade = draft.grade;
    const expected = layout.view === 'expected';
    const groups = logicFieldGroups(item);
    const value = original ? draft.originalResponse ?? draft.response : grade.answer;
    const answer = groups.length > 1 ? groups.map((group, i) => `<section class="mz-logic-field-group${Number(layout.group || 0) === i ? ' is-active' : ''}"><h3>${esc(group.title)} <span>${i + 1} / ${groups.length}</span></h3>${logicAnswerHtml(value, group.indices.map(i => item.fields[i].path))}</section>`).join('') : logicAnswerHtml(value);
    response = `<nav class="mz-logic-feedback-tabs" aria-label="Answer feedback">${[['feedback', 'Explanation'], ['expected', 'Expected'], ['original', 'Your answer']].map(([v, text]) => `<button class="mz-text-button" data-action="logicLayout" data-view="${v}" aria-pressed="${(original ? 'original' : expected ? 'expected' : 'feedback') === v}">${text}</button>`).join('')}</nav><section class="mz-feedback ${grade.correct === false ? 'is-incorrect' : 'is-correct'}" tabindex="-1" role="status"><h3>${original ? 'Your original answer' : expected ? grade.correct === null ? 'Compare with the rubric' : 'Expected answer' : draft.correctionGrade?.correct ? 'Correction understood' : grade.correct === null ? 'Reflection saved' : grade.correct ? 'Correct' : 'Let’s work through it'}</h3>
      ${original || expected ? answer : `<p>${escBidi(grade.message)}</p>${draft.correctionGrade?.correct ? '<p>Your original attempt is retained.</p>' : ''}`}</section>`;
  }
  return `<section class="mz-exercise mz-logic-exercise" data-item-id="${escAttr(item.id)}" data-state="${answering ? 'answering' : 'graded'}" data-interaction="${escAttr(item.interaction)}"><div class="mz-exercise-prompt"><p class="mz-eyebrow">${esc(label)}</p><h2>${escBidi(item.prompt)}</h2>${item.interaction !== 'select_span' || !answering || hint || correctionReview || draft.error ? `<div class="mz-stimulus">${escBidi(item.stimulus).replace(/\n+/g, '<br/>')}</div>` : ''}</div><div class="mz-response">${response}</div></section>`;
}

// A full proposition analysis has three meaningful tasks. The original field
// indices are retained in the controls, including when a phone shows one group.
export function logicFieldGroups(item) {
  if (item.fields.length === 9) return [
    { title: 'Components', indices: [0, 1, 2, 3] },
    { title: 'Quantity, quality and form', indices: [4, 5, 6] },
    { title: 'Distribution', indices: [7, 8] },
  ];
  if (item.fields.length === 5) return [
    { title: 'Result', indices: [0, 1] },
    { title: 'Terms and validity', indices: [2, 3, 4] },
  ];
  if (item.fields.length === 3 && item.fields.some(f => f.kind === 'list')) return [
    { title: 'Proposition', indices: item.fields.flatMap((f, i) => f.kind !== 'list' ? [i] : []) },
    { title: 'Terms', indices: item.fields.flatMap((f, i) => f.kind === 'list' ? [i] : []) },
  ];
  return [{ title: 'Your answer', indices: item.fields.map((_, i) => i) }];
}

function logicAnswerHtml(value, paths) {
  const rows = (v, path = '') => v && typeof v === 'object' && !Array.isArray(v)
    ? Object.entries(v).flatMap(([k, x]) => rows(x, path ? `${path}.${k}` : k))
    : [[path, answerLabel(v)]];
  if (!value || typeof value !== 'object' || Array.isArray(value)) return `<p class="mz-logic-answer">${escBidi(answerLabel(value))}</p>`;
  return `<dl class="mz-logic-answer-rows">${rows(value).filter(([name]) => !paths || paths.includes(name)).map(([name, text]) => `<div><dt>${esc(name.replace(/[._]/g, ' '))}</dt><dd>${escBidi(text)}</dd></div>`).join('')}</dl>`;
}

export function logicFooterHtml(session, step, state) {
  const saveMessage = state.storageError ? 'Progress is not saved. See the notice above.' : 'Your progress is saved as you learn.';
  const index = session.stepIndex || 0, last = index + 1 === session.steps.length;
  const content = step.kind === 'teach' ? logicCourse().lessons[session.lessonId].learning_steps.find(s => s.id === step.stepId) : null;
  const layout = logicLayout(session, step);
  if (step.kind === 'exercise') {
    const item = logicItem(step.itemId), draft = session.draft || {};
    if (layout.view === 'correctionFeedback' && draft.correctionGrade?.correct === false) return `<footer class="mz-study-foot"><button class="btn btn-ghost mz-word-foot-back" data-action="studyBack" ${!index ? 'disabled' : ''}>←<span> Back</span></button><span>Your original attempt is retained.</span><button class="btn btn-primary" data-action="logicLayout" data-view="answer">Try again</button></footer>`;
    if (draft.error) return `<footer class="mz-study-foot"><button class="btn btn-ghost mz-word-foot-back" data-action="studyBack" ${!index ? 'disabled' : ''}>←<span> Back</span></button><button class="mz-text-button" data-action="logicLayout" data-view="answer">Edit answer</button><button class="btn btn-primary" data-action="submitLogicAnswer" ${!responseComplete(item, draft.response) ? 'disabled' : ''}>Try again</button></footer>`;
    const answering = !draft.grade || draft.correcting, hint = layout.view === 'hint' && draft.hintsUsed;
    const groups = logicFieldGroups(item), group = Math.min(groups.length - 1, Number(layout.group || 0));
    const next = `<button class="btn btn-primary" data-action="${answering ? 'submitLogicAnswer' : 'studyNext'}" ${draft.busy || answering && !responseComplete(item, draft.response) ? 'disabled' : ''}>${draft.busy ? 'Checking…' : answering ? draft.correcting ? 'Check correction' : 'Check answer' : `${last ? 'Finish lesson' : 'Continue'} →`}</button>`;
    const groupNav = groups.length > 1 ? `<div class="mz-logic-mobile mz-logic-group-nav"><button class="mz-text-button" data-action="logicLayout" data-group="${(group + groups.length - 1) % groups.length}" aria-label="Previous answer group">‹</button><span>${group + 1}/${groups.length}</span><button class="mz-text-button" data-action="logicLayout" data-group="${(group + 1) % groups.length}" aria-label="Next answer group">›</button></div>` : '';
    const help = hint ? `<button class="mz-text-button" data-action="logicLayout" data-view="answer">Back to answer</button>${draft.hintsUsed < item.hints.length ? '<button class="btn btn-primary" data-action="logicHint">Next hint</button>' : ''}`
      : answering ? `${item.hints.length ? '<button class="mz-text-button" data-action="logicShowHint">Hint</button>' : ''}${groupNav}`
      : `${['original', 'expected'].includes(layout.view) ? groupNav : ''}${draft.grade.correct === false && !draft.correctionGrade?.correct ? '<button class="mz-text-button" data-action="logicCorrect">Try correction</button>' : ''}`;
    return `<footer class="mz-study-foot mz-logic-foot"><button class="btn btn-ghost mz-word-foot-back" data-action="studyBack" ${!index || draft.busy ? 'disabled' : ''} aria-label="Back">←<span> Back</span></button>${help}${hint ? '' : next}</footer>`;
  }
  const ready = step.kind === 'teach' || !!session.draft?.grade && !session.draft?.busy;
  return `<footer class="mz-study-foot"><button class="btn btn-ghost mz-word-foot-back" data-action="studyBack" ${!index ? 'disabled' : ''} aria-label="Back">←<span> Back</span></button>
    ${content?.visual ? `<button class="mz-text-button mz-logic-mobile mz-logic-visual-toggle" data-action="logicLayout" data-view="${layout.view === 'diagram' ? 'explanation' : 'diagram'}">${layout.view === 'diagram' ? 'Read explanation' : 'Explore diagram'}</button>` : content && session.lessonId === 'lesson_hypothetical_syllogisms' && content.id === 'section_0' ? `<button class="mz-text-button mz-logic-mobile" data-action="logicLayout" data-group="${layout.group ? 0 : 1}">${layout.group ? 'Mixed syllogism' : 'Pure syllogism'}</button>` : `<span>${esc(saveMessage)}</span>`}
    ${content?.visual?.kind === 'categorical' && layout.view === 'diagram' ? `<button class="mz-text-button mz-logic-mobile mz-logic-detail-toggle" data-action="logicLayout" data-detail="${layout.detail === 'meaning' ? 'diagram' : 'meaning'}">${layout.detail === 'meaning' ? 'Diagram' : 'Meaning'}</button>` : ''}
    <button class="btn btn-primary" data-action="studyNext" ${ready ? '' : 'disabled'}>${last ? 'Finish lesson' : 'Continue'} →</button></footer>`;
}

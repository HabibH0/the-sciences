import { esc, escAttr, escBidi } from '../html.js';
import { getAt } from '../mizan/exercises/validator.js';
import { selectedWords, restoreTokens } from '../mizan/exercises/interaction-model.js';

export function setAt(value, path, next) {
  if (path === 'answer') return next;
  const keys = path.split('.');
  if (keys.some(k => ['__proto__', 'constructor', 'prototype'].includes(k))) return value;
  const root = value && typeof value === 'object' && !Array.isArray(value) ? structuredClone(value) : {};
  let current = root;
  keys.slice(0, -1).forEach(k => { current[k] = current[k] && typeof current[k] === 'object' ? current[k] : {}; current = current[k]; });
  current[keys.at(-1)] = next;
  return root;
}

export function initialResponse(item) {
  let value = null;
  for (const field of item.fields) if (field.kind === 'list') value = setAt(value, field.path, []);
  if (item.interaction === 'diagram_select_or_edit' && item.fields.some(f => f.path === 'shaded_regions')) {
    value = { ...value, subject_position: 'left', predicate_position: 'right' };
  }
  return value;
}

export function responseComplete(item, response) {
  if (item.reflection) return typeof response === 'string' && response.trim().length > 0;
  return item.fields.every(f => {
    const v = getAt(response, f.path);
    if (f.path === 'fallacy' && v === null) return true;
    return f.kind === 'list' ? Array.isArray(v) && v.every(x => typeof x !== 'string' || x.trim())
      : f.kind === 'boolean' ? typeof v === 'boolean'
      : f.kind === 'number' ? typeof v === 'number' && Number.isFinite(v)
      : typeof v === 'string' && v.trim().length > 0;
  });
}

export function fieldResponse(field, value) {
  return field.path === 'fallacy' && /^(none|no fallacy)$/i.test(String(value).trim()) ? null : value;
}

export function answerLabel(value) {
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (value === null) return 'None';
  if (value === undefined) return 'No response';
  if (Array.isArray(value)) return value.map(answerLabel).join(' · ') || 'None';
  if (typeof value === 'object') return Object.entries(value).map(([k, v]) => `${k.replace(/_/g, ' ')}: ${answerLabel(v)}`).join('\n');
  return String(value).replace(/_/g, ' ');
}

export function vennHtml(value = {}, id = 'answer') {
  const safeId = String(id).replace(/[^a-z0-9-]/gi, '');
  const shades = Array.isArray(value?.shaded_regions) ? value.shaded_regions : [];
  const marks = Array.isArray(value?.x_regions) ? value.x_regions : [];
  return `<svg class="logic-svg venn-canvas" viewBox="0 0 560 330" role="img" aria-label="${escAttr(`Subject on the left; predicate on the right. Empty: ${shades.join(', ') || 'none'}. A member: ${marks.join(', ') || 'none'}.`)}"><defs>
    <pattern id="${safeId}-hatch" width="9" height="9" patternUnits="userSpaceOnUse"><path d="M0 9 9 0M-2 2 2-2M7 11 11 7" stroke="#62766b" stroke-width="1.5"/></pattern>
    <clipPath id="${safeId}-right"><circle cx="345" cy="165" r="110"/></clipPath>
    <mask id="${safeId}-outside-right"><rect width="560" height="330" fill="white"/><circle cx="345" cy="165" r="110" fill="black"/></mask>
    <mask id="${safeId}-outside-left"><rect width="560" height="330" fill="white"/><circle cx="215" cy="165" r="110" fill="black"/></mask>
    </defs><circle cx="215" cy="165" r="110" fill="#eef4f0"/><circle cx="345" cy="165" r="110" fill="#f0f2f9" fill-opacity=".7"/>
    ${shades.map(r => r === 'overlap' ? `<circle cx="215" cy="165" r="110" fill="url(#${safeId}-hatch)" clip-path="url(#${safeId}-right)"/>` : ['subject_only', 'predicate_only'].includes(r) ? `<circle cx="${r === 'subject_only' ? 215 : 345}" cy="165" r="110" fill="url(#${safeId}-hatch)" mask="url(#${safeId}-${r === 'subject_only' ? 'outside-right' : 'outside-left'})"/>` : '').join('')}
    <circle cx="215" cy="165" r="110" fill="none" stroke="#26745c" stroke-width="3"/><circle cx="345" cy="165" r="110" fill="none" stroke="#596bb0" stroke-width="3"/>
    ${marks.map(r => `<text x="${({ subject_only: 160, overlap: 280, predicate_only: 400 })[r] || 280}" y="175" text-anchor="middle" font-size="35" fill="#202e29">×</text>`).join('')}
    <text x="180" y="310" text-anchor="middle" fill="#245747" font-size="18">Subject · S</text><text x="380" y="310" text-anchor="middle" fill="#495b9a" font-size="18">Predicate · P</text></svg>`;
}

function diagramOption(value) {
  const body = value === 'nested_sets'
    ? '<ellipse cx="120" cy="75" rx="85" ry="61" fill="#edf0fa" stroke="#596bb0"/><ellipse cx="120" cy="92" rx="40" ry="33" fill="#e0eee5" stroke="#26745c"/>'
    : value === 'coincident_sets'
      ? '<circle cx="120" cy="75" r="57" fill="#e4eee8" stroke="#26745c"/><circle cx="120" cy="75" r="50" fill="none" stroke="#596bb0" stroke-dasharray="6 4"/>'
      : `<circle cx="${value === 'separate_sets' ? 60 : 90}" cy="75" r="49" fill="#e4eee8" stroke="#26745c"/><circle cx="${value === 'separate_sets' ? 180 : 150}" cy="75" r="49" fill="#e7eaf6" fill-opacity=".65" stroke="#596bb0"/>`;
  return `<svg viewBox="0 0 240 155" aria-hidden="true" stroke-width="3">${body}</svg>`;
}

export function structuredHtml(item, response, disabled, indices = item.fields.map((_, i) => i)) {
  return `<div class="mz-fields">${indices.map(fi => {
    const f = item.fields[fi];
    const val = getAt(response, f.path);
    const attr = `data-logic-field="${fi}" ${disabled ? 'disabled' : ''}`;
    let control;
    if (f.kind === 'list') {
      const list = Array.isArray(val) ? val : [];
      control = `<div class="mz-list-editor">${list.map((v, i) => `<div class="mz-list-entry"><input ${attr} data-list-index="${i}" aria-label="${escAttr(f.label)} item ${i + 1}" value="${escAttr(v)}"/><button type="button" class="mz-small-button" data-action="logicListMove" data-field="${fi}" data-entry="${i}" data-delta="-1" ${disabled || !i ? 'disabled' : ''} aria-label="Move item ${i + 1} up">↑</button><button type="button" class="mz-small-button" data-action="logicListRemove" data-field="${fi}" data-entry="${i}" ${disabled ? 'disabled' : ''} aria-label="Remove item ${i + 1}">×</button></div>`).join('')}<button type="button" class="mz-text-button" data-action="logicListAdd" data-field="${fi}" ${disabled ? 'disabled' : ''}>+ Add item</button></div>`;
    } else if (f.options?.length || f.kind === 'boolean') {
      const options = f.options?.length ? f.options : [true, false];
      control = `<select id="logic-field-${fi}" ${attr}><option value="">Choose…</option>${options.map((v, index) => `<option value="${index}" ${JSON.stringify(val) === JSON.stringify(v) ? 'selected' : ''}>${esc(answerLabel(v))}</option>`).join('')}</select>`;
    } else {
      control = `<input id="logic-field-${fi}" ${attr} type="${f.kind === 'number' ? 'number' : 'text'}" autocomplete="off" value="${escAttr(typeof val === 'string' || typeof val === 'number' ? val : f.path === 'fallacy' && val === null ? 'none' : '')}"/>${f.path === 'fallacy' ? '<span class="mz-control-help">Enter “none” if no fallacy applies.</span>' : ''}`;
    }
    return `<div class="mz-field"><label for="logic-field-${fi}">${esc(f.label === 'answer' ? 'Your answer' : f.label)}</label>${control}</div>`;
  }).join('')}</div>`;
}

export function logicResponseHtml(item, draft, disabled = false) {
  const response = draft.response;
  const off = disabled ? 'disabled' : '';
  if (item.reflection) return `<label class="mz-field">Your reflection<textarea data-logic-reflection rows="6" ${off}>${esc(response || '')}</textarea></label>`;
  if (item.interaction === 'diagram_select_or_edit' && item.fields.some(f => f.path === 'shaded_regions')) {
    const tool = draft.tool || 'shade';
    return `<div class="mz-venn-editor"><p class="mz-control-help">Choose a tool, then apply it to a region.</p><div class="visual-switcher" role="group" aria-label="Diagram tool">${[['shade', 'Shade empty'], ['exists', 'Place a member'], ['clear', 'Erase']].map(([v, title]) => `<button type="button" data-action="logicVennTool" data-value="${v}" aria-pressed="${tool === v}" ${off}>${title}</button>`).join('')}</div>${vennHtml(response, 'editor')}<div class="visual-switcher" role="group" aria-label="Apply tool to region">${[['subject_only', 'S only'], ['overlap', 'S and P'], ['predicate_only', 'P only']].map(([v, title]) => `<button type="button" data-action="logicVennRegion" data-value="${v}" ${off}>${title}<span class="mz-region-status">${response?.shaded_regions?.includes(v) ? 'Empty' : response?.x_regions?.includes(v) ? 'Member' : 'No claim'}</span></button>`).join('')}</div><p class="mz-control-help">Shading means empty. × means at least one member.</p></div>`;
  }
  if (item.interaction === 'select_span') {
    const selected = selectedWords(item.stimulus, response);
    return `<fieldset class="mz-span-picker" ${off}><legend>Select the words that answer the question.</legend>${item.stimulus.split(/\s+/).map((word, i) => `<button type="button" data-action="logicSpan" data-index="${i}" aria-pressed="${selected.includes(i)}">${escBidi(word)}</button>`).join('')}<p class="mz-control-help">Selected: ${escBidi(response || 'No words selected')}</p></fieldset>`;
  }
  if (item.interaction === 'sentence_builder' && item.word_bank?.length) {
    const tokens = draft.tokens || restoreTokens(response, item.word_bank);
    const used = new Map();
    tokens.forEach(t => used.set(t, (used.get(t) || 0) + 1));
    return `<div class="mz-sentence-builder"><p class="mz-control-help">Build the sentence in order. Select a placed word to remove it.</p><div class="mz-sentence-tray" aria-label="Your sentence">${tokens.length ? tokens.map((t, i) => `<button type="button" data-action="logicTokenRemove" data-index="${i}" ${off}>${escBidi(t)} <span aria-hidden="true">×</span></button>`).join('') : '<span>Your sentence appears here</span>'}</div><div class="mz-word-bank" role="group" aria-label="Available words">${item.word_bank.map((word, i) => { const taken = (used.get(word) || 0) > 0; if (taken) used.set(word, used.get(word) - 1); return `<button type="button" data-action="logicTokenAdd" data-index="${i}" ${disabled || taken ? 'disabled' : ''}>${escBidi(word)}</button>`; }).join('')}</div></div>`;
  }
  const scalarChoice = item.options.length && item.fields.length === 1 && item.fields[0].path === 'answer' && item.fields[0].kind !== 'list';
  if (scalarChoice || item.interaction === 'diagram_choice') {
    const diagram = item.interaction === 'diagram_choice';
    const labels = { coincident_sets: 'Equal membership', separate_sets: 'Disjoint sets', nested_sets: 'One set inside the other', intersecting_sets: 'Partial overlap' };
    return `<div class="${diagram ? 'mz-diagram-choices' : 'mz-choices'}" role="group" aria-label="Choose your answer">${item.options.map((v, i) => `<button type="button" class="mz-choice${JSON.stringify(v) === JSON.stringify(response) ? ' is-selected' : ''}" data-action="logicChoice" data-option="${i}" aria-pressed="${JSON.stringify(v) === JSON.stringify(response)}" ${off}>${diagram ? diagramOption(v) : `<span class="mz-choice-letter">${String.fromCharCode(65 + i)}</span>`}<span>${escBidi(diagram ? labels[v] || answerLabel(v) : answerLabel(v))}</span></button>`).join('')}</div>`;
  }
  return structuredHtml(item, response, disabled);
}

export function logicExerciseHtml(item, draft, { action = 'submitLogicAnswer', context = 'Guided practice', continuing = false } = {}) {
  const grade = draft.grade;
  const correcting = !!draft.correcting;
  const disabled = !!draft.busy || (!!grade && !correcting);
  return `<section class="mz-exercise" data-state="${grade ? 'graded' : 'answering'}"><div class="mz-exercise-prompt"><p class="mz-eyebrow">${esc(context)}</p><h2>${escBidi(item.prompt)}</h2>${item.interaction !== 'select_span' ? `<div class="mz-stimulus">${escBidi(item.stimulus).replace(/\n/g, '<br/>')}</div>` : ''}</div>
    <div class="mz-response"><form class="mz-logic-form" data-logic-form>${logicResponseHtml(item, draft, disabled)}
      ${(!grade || correcting) ? `<div class="mz-check-row"><button class="btn btn-primary" type="submit" data-action="${action}" ${draft.busy || !responseComplete(item, draft.response) ? 'disabled' : ''}>${draft.busy ? 'Checking…' : correcting ? 'Check correction' : 'Check answer'}</button>${item.hints.length ? `<button class="mz-text-button" type="button" data-action="logicHint" ${draft.busy || (draft.hintsUsed || 0) >= item.hints.length ? 'disabled' : ''}>Hint${draft.hintsUsed ? ` ${draft.hintsUsed}/${item.hints.length}` : ''}</button>` : ''}</div>` : ''}
    </form>${draft.hintsUsed ? `<aside class="mz-hints">${item.hints.slice(0, draft.hintsUsed).map(h => `<p>${escBidi(h)}</p>`).join('')}</aside>` : ''}
    ${draft.error ? `<p class="mz-error" role="alert">${esc(draft.error)}</p>` : ''}
    ${grade ? `<div class="mz-feedback ${grade.correct === false ? 'is-incorrect' : 'is-correct'}" tabindex="-1" role="status"><h3>${grade.correct === null ? 'Reflection saved' : grade.correct ? 'Correct' : 'Let’s work through it'}</h3><p>${escBidi(grade.message)}</p><dl class="mz-answer-comparison"><div><dt>Your original answer</dt><dd>${escBidi(answerLabel(draft.originalResponse ?? draft.response)).replace(/\n/g, '<br/>')}</dd></div>${grade.correct !== true ? `<div><dt>${grade.correct === null ? 'Compare with the rubric' : 'Expected answer'}</dt><dd>${escBidi(answerLabel(grade.answer)).replace(/\n/g, '<br/>')}</dd></div>` : ''}</dl>
      ${draft.correctionGrade ? `<p>${draft.correctionGrade.correct ? 'Correction understood. Your original attempt is retained.' : escBidi(draft.correctionGrade.message)}</p>` : ''}
      ${grade.correct === false && !correcting && !draft.correctionGrade?.correct && !continuing ? '<button class="btn btn-secondary" data-action="logicCorrect">Try a correction</button>' : ''}
    </div>` : ''}</div></section>`;
}

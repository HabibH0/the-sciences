import { esc, escAttr, escBidi } from '../html.js';
import { conceptKey, lessonExerciseItemKey } from '../../content/index.js';
import { currentStudy, studyStep } from './study.js';
import { logicCourse, logicVisuals, logicItem } from './logic-course.js';
import { logicExerciseHtml } from './exercises.js';
import { guidedGrammar, nativeItem, nativeItemKey } from './native.js';
import { nahwTeachingHtml, nahwSummaryHtml } from './render-nahw.js';
import { nativeExerciseHtml } from './render-native.js';
import { sarfTeachingHtml } from './render-sarf.js';

export function visualHtml(spec, state = {}) {
  const choices = logicVisuals()?.[spec.kind];
  if (!choices) return '';
  const primary = state.primary ?? (choices.primary.includes(spec.initial) ? spec.initial : choices.primary[0]);
  const secondary = state.secondary ?? choices.secondary[0];
  const html = choices.variants[`${primary}|${secondary}`] || choices.variants[`${choices.primary[0]}|${choices.secondary[0]}`];
  return `<div class="mz-visual" data-visual-kind="${escAttr(spec.kind)}">${html.replace('<h3></h3>', `<h3>${esc(spec.title)}</h3>`).replace('<figcaption></figcaption>', `<figcaption>${esc(spec.caption)}</figcaption>`)}</div>`;
}

export function nativeStepExercise(lesson, mod, step, state, helpers) {
  if (guidedGrammar(lesson)) {
    const item = nativeItem(lesson, step);
    const key = nativeItemKey(mod, lesson, step);
    const record = state.exStates[key] || {};
    const order = state.optionOrder[key] || item.options.map((_, i) => i);
    return { record, html: nativeExerciseHtml(lesson, step, record, order, helpers, state) };
  }
  const concept = step.kind === 'check' ? lesson.concepts[step.conceptIndex] : null;
  const item = concept?.exercise || lesson.exercise.items[step.exerciseIndex];
  const key = step.kind === 'check' ? conceptKey(mod.id, lesson.id, step.conceptIndex) : lessonExerciseItemKey(mod.id, lesson.id, step.exerciseIndex);
  const record = state.exStates[key] || {};
  const submitted = record.submitted && !record.correcting;
  const original = record.firstSelected ?? record.selected;
  const originalCorrect = original === item.correct;
  const why = (item.explanations || [])[original] || item.explanation || '';
  const order = state.optionOrder[key] || item.options.map((_, i) => i);
  return { record, html: `<section class="mz-exercise"><div class="mz-exercise-prompt"><p class="mz-eyebrow">${step.kind === 'check' ? 'GUIDED PRACTICE' : 'INDEPENDENT PRACTICE'}</p><h2>${escBidi(item.prompt)}</h2>${concept ? `<p class="mz-control-help">Apply what you learned about ${escBidi(concept.heading)}.</p>` : lesson.exercise.instructions ? `<p class="mz-control-help">${escBidi(lesson.exercise.instructions)}</p>` : ''}</div>
    <div class="mz-response"><div class="mz-choices" role="group" aria-label="Choose your answer">${order.map((oi, i) => `<button class="mz-choice${record.selected === oi ? ' is-selected' : ''}" data-action="studyChoice" data-option="${oi}" aria-pressed="${record.selected === oi}" ${submitted ? 'disabled' : ''}><span class="mz-choice-letter">${String.fromCharCode(65 + i)}</span><span>${escBidi(item.options[oi])}</span></button>`).join('')}</div>
    ${!submitted ? `<div class="mz-check-row"><button class="btn btn-primary" data-action="studyCheck" ${record.selected == null ? 'disabled' : ''}>${record.correcting ? 'Check correction' : 'Check answer'}</button><button class="mz-text-button" data-action="openStudyNotes">Review explanation</button></div>` : ''}
    ${record.submitted || record.correcting ? `<div class="mz-feedback ${originalCorrect ? 'is-correct' : 'is-incorrect'}" tabindex="-1" role="status"><h3>${originalCorrect ? 'Correct' : 'Let’s work through it'}</h3><dl class="mz-answer-comparison"><div><dt>Your original answer</dt><dd>${escBidi(item.options[original])}</dd></div>${!originalCorrect ? `<div><dt>Expected answer</dt><dd>${escBidi(item.options[item.correct])}</dd></div>` : ''}</dl>${why ? `<p>${escBidi(why)}</p>` : ''}${record.corrected ? '<p>Correction understood. Your original attempt is retained.</p>' : !originalCorrect && !record.correcting ? '<button class="btn btn-secondary" data-action="studyCorrect">Try a correction</button>' : ''}</div>` : ''}</div></section>` };
}

export function studyHtml(state, mod, lesson, helpers) {
  const session = currentStudy(state);
  const step = studyStep(session);
  if (!session || !step) return `<section class="mz-study-empty"><h1>${escBidi(lesson.title)}</h1><p>Continue your lesson from its saved position.</p><button class="btn btn-primary" data-action="resumeStudy">Continue lesson</button></section>`;
  const index = session.stepIndex || 0;
  const total = session.steps.length;
  let body = '', label = 'Learn', ready = true;
  if (session.logic) {
    if (step.kind === 'teach') {
      const content = logicCourse().lessons[lesson.id].learning_steps.find(s => s.id === step.stepId);
      label = content.presentation === 'example' ? 'Worked example' : content.presentation === 'takeaway' ? 'Takeaway' : 'Learn';
      // Authored Markdown often begins with its own heading. Promote that
      // heading instead of repeating it, retaining its emphasis and Arabic.
      const heading = content.html.match(/^\s*<h[1-6]>([\s\S]*?)<\/h[1-6]>/);
      const title = heading ? heading[1] : esc(content.title);
      const prose = heading ? content.html.slice(heading[0].length) : content.html;
      body = `<article class="mz-teaching${content.visual ? ' has-visual' : ''}"><div class="mz-teaching-copy"><p class="mz-eyebrow">${label.toUpperCase()}</p><h2>${title}</h2><div class="mz-prose markdown">${prose}</div></div>${content.visual ? visualHtml(content.visual, session.visualState?.[step.stepId]) : ''}</article>`;
    } else {
      const item = logicItem(step.itemId);
      const draft = session.draft || { response: null };
      label = step.guided ? 'Guided practice' : 'Independent practice';
      ready = !!draft.grade && !draft.busy;
      body = logicExerciseHtml(item, draft, { context: label });
    }
  } else if (step.kind === 'teach' && lesson.learningModel === 'mizan-sarf') {
    label = { learn: 'Learn', example: 'Worked example', takeaway: 'Takeaway' }[step.presentation];
    body = sarfTeachingHtml(lesson, step, session, helpers, state);
  } else if (step.kind === 'teach' && lesson.learningModel === 'mizan-nahw') {
    label = { learn: 'Learn', example: 'Worked example', takeaway: 'Takeaway' }[step.presentation];
    body = nahwTeachingHtml(lesson, step, session, helpers, state);
  } else if (step.kind === 'summary' && guidedGrammar(lesson)) {
    label = 'Takeaway';
    body = nahwSummaryHtml(lesson, helpers, state);
  } else if (step.kind === 'teach') {
    const concept = lesson.concepts[step.conceptIndex];
    body = `<article class="mz-teaching"><div class="mz-teaching-copy"><p class="mz-eyebrow">LEARN · ${step.conceptIndex + 1} OF ${lesson.concepts.length}</p><h2>${escBidi(concept.heading)}</h2><div class="mz-prose concept-body">${helpers.prose(concept, '', null, true, state.tarkeebLabelsBlue === true)}${concept.clarification ? `<aside class="mz-clarification">${helpers.prose({ body: concept.clarification }, '', null, true, state.tarkeebLabelsBlue === true)}</aside>` : ''}</div></div></article>`;
  } else if (step.kind === 'summary') {
    label = 'Takeaway';
    body = `<article class="mz-teaching"><div class="mz-teaching-copy"><p class="mz-eyebrow">TAKEAWAY</p><h2>Bring it together</h2>${helpers.summary(lesson, state, mod, 'mz-summary')}</div></article>`;
  } else {
    label = step.kind === 'check' ? 'Guided practice' : 'Independent practice';
    const exercise = nativeStepExercise(lesson, mod, step, state, helpers);
    body = exercise.html;
    ready = !!exercise.record.submitted || !!exercise.record.correcting;
  }
  const last = index + 1 === total;
  const notes = state.studyNotesOpen ? `<div class="modal-backdrop mz-notes-backdrop" data-action="closeStudyNotes"><section class="mz-notes-modal" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="mz-notes-title"><header><h2 id="mz-notes-title">Lesson notes</h2><button class="btn btn-secondary" data-action="closeStudyNotes" aria-label="Close lesson notes">Close ×</button></header><div class="mz-notes-content mz-prose">${session.logic ? logicCourse().lessons[lesson.id].notesHtml : lesson.concepts.map(c => `<h3>${escBidi(c.heading)}</h3>${helpers.prose(c, '', null, true, state.tarkeebLabelsBlue === true)}${c.clarification ? helpers.prose({ body: c.clarification }, '', null, true, state.tarkeebLabelsBlue === true) : ''}`).join('')}${!session.logic ? helpers.summary(lesson, state, mod, 'mz-notes-summary') : ''}</div></section></div>` : '';
  return `<section class="mz-study${lesson.learningModel === 'mizan-nahw' ? ' mz-nahw' : lesson.learningModel === 'mizan-sarf' ? ' mz-sarf' : ''}${Number(state.lessonTextScale) > 100 ? ' large-text' : ''}" data-step="${index}" aria-label="${escAttr(lesson.title)}">
    <header class="mz-study-head"><button class="mz-study-exit" data-action="openModule" data-module-id="${escAttr(mod.id)}" aria-label="Save and return to ${escAttr(mod.title)}">←</button><div class="mz-study-title"><span>${escBidi(mod.title)}</span><h1>${escBidi(lesson.title)}</h1></div><button class="mz-text-button" data-action="openStudyNotes">Lesson notes</button></header>
    <div class="mz-step-track"><span>${esc(label)}</span><div class="mz-meter" role="progressbar" aria-label="Lesson progress" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${index + 1}"><span style="width:${(index + 1) / total * 100}%"></span></div><span>${index + 1} / ${total}</span></div>
    <div class="mz-study-body" data-study-step>${body}</div>
    <footer class="mz-study-foot"><button class="btn btn-ghost" data-action="studyBack" ${!index ? 'disabled' : ''}>← Back</button><span>${!ready ? 'Check your answer to continue.' : state.storageError ? 'Progress is not saved. See the notice above.' : 'Your progress is saved as you learn.'}</span><button class="btn btn-primary" data-action="studyNext" ${ready ? '' : 'disabled'}>${last ? session.logic ? 'Finish lesson' : guidedGrammar(lesson) ? 'Start lesson check' : 'Continue to quiz' : 'Continue'} →</button></footer>
  </section>${notes}`;
}

import { esc, escBidi } from '../html.js';
import { QUIZ_PASS_RATIO } from '../../content/index.js';
import { WORD_EXAMPLES, nahwAnalysisItems, nahwAnalysisComplete, nahwCheckItem } from './nahw.js';

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
  const concept = lesson.concepts[step.conceptIndex];
  const lines = step.lineIndices.map(i => concept.lines[i]);
  const visual = nahwVisualHtml(lesson, step, session);
  const copy = visual ? lines.filter(l => !l.tarkeebDiagram) : lines;
  const diagram = visual ? lines.filter(l => l.tarkeebDiagram) : [];
  const label = { learn: 'Learn', example: 'Worked example', takeaway: 'Takeaway' }[step.presentation];
  return `<article class="mz-teaching mz-nahw-teaching${visual ? ' has-visual' : ''}"><div class="mz-teaching-copy"><p class="mz-eyebrow">${label}</p><h2>${escBidi(concept.heading)}</h2><div class="mz-prose concept-body">${helpers.prose({ lines: copy }, '', null, true, state.tarkeebLabelsBlue)}${diagram.length ? `<details class="mz-nahw-full-analysis"><summary>See the complete analysis</summary>${helpers.prose({ lines: diagram }, '', null, true, state.tarkeebLabelsBlue)}</details>` : ''}</div></div>${visual}</article>`;
}

export function nahwSummaryHtml(lesson, helpers, state) {
  return `<article class="mz-teaching mz-nahw-teaching"><div class="mz-teaching-copy"><p class="mz-eyebrow">TAKEAWAY</p><h2>Bring it together</h2><div class="mz-prose mz-nahw-recap">${lesson.concepts.map(c => {
    const line = c.lines.find(l => ['Definition', 'Rule'].includes(l.box?.title)) || c.lines.find(l => l.box?.title === 'Careful') || c.lines[0];
    return `<section><h3>${escBidi(c.heading)}</h3>${helpers.prose({ lines: [line] }, '', null, true, state.tarkeebLabelsBlue)}</section>`;
  }).join('')}</div></div></article>`;
}

export function choiceHtml(options, selected, order, action, disabled) {
  return `<div class="mz-choices" role="group" aria-label="Choose your answer">${order.map((oi, i) => `<button class="mz-choice${selected === oi ? ' is-selected' : ''}" data-action="${action}" data-option="${oi}" aria-pressed="${selected === oi}" ${disabled ? 'disabled' : ''}><span class="mz-choice-letter">${String.fromCharCode(65 + i)}</span><span>${escBidi(options[oi])}</span></button>`).join('')}</div>`;
}

function feedbackHtml({ correct, original, answer, explanation = '', corrected = false, correcting = false, correctionAction }) {
  return `<div class="mz-feedback ${correct ? 'is-correct' : 'is-incorrect'}" tabindex="-1" role="status"><h3>${correct ? 'Correct' : 'Let’s work through it'}</h3>${explanation ? `<p>${escBidi(explanation)}</p>` : ''}<dl class="mz-answer-comparison"><div><dt>Your original answer</dt><dd>${original}</dd></div>${!correct ? `<div><dt>Expected answer</dt><dd>${answer}</dd></div>` : ''}</dl>${corrected ? '<p>Correction understood. Your original attempt is retained.</p>' : !correct && !correcting ? `<button class="btn btn-secondary" data-action="${correctionAction}">Try a correction</button>` : ''}</div>`;
}

export function nahwExerciseHtml(lesson, step, record, order, helpers, state) {
  const analysis = step.kind === 'analysis';
  const concept = analysis ? null : lesson.concepts[step.conceptIndex];
  const item = analysis ? nahwAnalysisItems(lesson)[step.analysisIndex] : nahwCheckItem(lesson, step.conceptIndex);
  const disabled = record.submitted && !record.correcting;
  const complete = analysis ? nahwAnalysisComplete(item, record.response) : record.selected != null;
  const original = record.originalResponse || (record.firstSelected ?? record.selected);
  const comparison = values => item.words.map((word, i) => `<div><bdi lang="ar" dir="rtl">${esc(word)}</bdi> — ${escBidi(values?.[i] || 'No answer')}</div>`).join('');
  const controls = analysis ? `<div class="mz-fields">${item.words.map((word, i) => `<div class="mz-field"><label for="nahw-role-${i}">${escBidi(word)}</label><select id="nahw-role-${i}" data-action="studyField" data-field="${i}" ${disabled ? 'disabled' : ''}><option value="">Choose a role…</option>${order.map(oi => `<option value="${oi}" ${record.response?.[i] === item.options[oi] ? 'selected' : ''}>${esc(item.options[oi])}</option>`).join('')}</select>${record.response?.[i] ? `<span class="mz-control-help">${escBidi(record.response[i])}</span>` : ''}</div>`).join('')}</div>`
    : choiceHtml(item.options, record.selected, order, 'studyChoice', disabled);
  const hintLine = concept?.lines.find(l => ['Definition', 'Rule'].includes(l.box?.title)) || concept?.lines[0];
  return `<section class="mz-exercise mz-nahw-exercise" data-state="${record.submitted ? 'graded' : 'answering'}"><div class="mz-exercise-prompt"><p class="mz-eyebrow">${analysis ? 'Independent practice' : 'Guided practice'}</p><h2>${escBidi(item.prompt)}</h2>${analysis ? `<div class="mz-stimulus" dir="rtl">${escBidi(item.source)}</div><p class="mz-control-help">Choose a role for every part, then check your answer.</p>` : item.stimulus ? `<div class="mz-stimulus">${escBidi(item.stimulus).replace(/\n/g, '<br/>')}</div>` : ''}</div><div class="mz-response">${controls}${!disabled ? `<div class="mz-check-row"><button class="btn btn-primary" data-action="studyCheck" ${complete ? '' : 'disabled'}>${record.correcting ? 'Check correction' : 'Check answer'}</button><button class="mz-text-button" data-action="studyHint" ${record.hintShown ? 'disabled' : ''}>Hint</button></div>` : ''}${record.hintShown ? `<aside class="mz-hints"><strong>Hint</strong>${analysis ? `<p>${escBidi(item.hint)}</p>` : `<div class="mz-prose">${helpers.prose({ lines: [hintLine] }, '', null, true, state.tarkeebLabelsBlue)}</div>`}</aside>` : ''}${record.submitted ? feedbackHtml({
    correct: analysis ? record.correct : original === item.correct,
    original: analysis ? comparison(original) : escBidi(item.options[original]),
    answer: analysis ? comparison(item.labels) : escBidi(item.options[item.correct]),
    explanation: analysis ? '' : item.explanations?.[original] || item.explanation || '',
    corrected: record.corrected, correcting: record.correcting, correctionAction: 'studyCorrect',
  }) : ''}</div></section>`;
}

export function nahwQuizHtml(state, mod, lesson) {
  if (state.quizShowResult) {
    const score = state.quizScores[mod.id][lesson.id];
    return `<section class="mz-completed"><span class="mz-completed-mark" aria-hidden="true">${state.quizPassed ? '✓' : '↻'}</span><p class="mz-eyebrow">LESSON CHECK</p><h1>${state.quizPassed ? 'Ready to move on' : 'A little more practice'}</h1><p>${escBidi(lesson.title)}</p><div class="mz-result-score"><strong>${score.correct} <small>/ ${score.total}</small></strong><span>correct on the first attempt</span></div><p>${state.quizPassed ? 'You have passed the lesson check.' : `Get at least ${Math.ceil(lesson.quiz.length * QUIZ_PASS_RATIO)} of ${lesson.quiz.length} questions right to finish this lesson. Your practice and notes are saved.`}</p><div class="mz-completed-actions">${state.quizPassed ? '<button class="btn btn-primary" data-action="finishLesson">Finish lesson →</button>' : '<button class="btn btn-primary" data-action="retakeQuiz">Try the lesson check again</button>'}<button class="btn btn-secondary" data-action="backToLesson">Return to the lesson</button></div></section>`;
  }
  const q = lesson.quiz[state.quizIndex], correction = state.quizCorrection;
  const selected = correction?.active || correction?.correct ? correction.selected : state.quizSelected;
  const disabled = state.quizRevealed && !correction?.active;
  return `<section class="mz-study mz-nahw" aria-label="Lesson check"><header class="mz-study-head"><button class="mz-study-exit" data-action="backToLesson" aria-label="Back to the lesson">←</button><div class="mz-study-title"><span>${escBidi(mod.title)}</span><h1>${escBidi(lesson.title)}</h1></div><span class="mz-control-help">Lesson check</span></header><div class="mz-step-track"><span>Independent practice</span><div class="mz-meter" role="progressbar" aria-label="Lesson check progress" aria-valuemin="0" aria-valuemax="${lesson.quiz.length}" aria-valuenow="${state.quizIndex + 1}"><span style="width:${(state.quizIndex + 1) / lesson.quiz.length * 100}%"></span></div><span>${state.quizIndex + 1} / ${lesson.quiz.length}</span></div><div class="mz-study-body" data-study-step><section class="mz-exercise"><div class="mz-exercise-prompt"><p class="mz-eyebrow">Independent practice</p><h2>${escBidi(q.q)}</h2></div><div class="mz-response">${choiceHtml(q.options, selected, state.quizOptionOrder[state.quizIndex], 'selectQuizOption', disabled)}${!disabled ? `<div class="mz-check-row"><button class="btn btn-primary" data-action="checkNahwQuiz" ${selected == null ? 'disabled' : ''}>${correction?.active ? 'Check correction' : 'Check answer'}</button></div>` : ''}${state.quizRevealed ? feedbackHtml({ correct: state.quizSelected === q.correct, original: escBidi(q.options[state.quizSelected]), answer: escBidi(q.options[q.correct]), explanation: q.explanation, corrected: correction?.correct, correcting: correction?.active, correctionAction: 'correctNahwQuiz' }) : ''}</div></section></div><footer class="mz-study-foot"><button class="btn btn-ghost" data-action="backToLesson">← Back to the lesson</button><span>${state.quizRevealed ? 'Your original attempt is retained.' : 'Check your answer to continue.'}</span><button class="btn btn-primary" data-action="nextQuizQuestion" ${state.quizRevealed ? '' : 'disabled'}>${state.quizIndex + 1 < lesson.quiz.length ? 'Continue' : 'See results'} →</button></footer></section>`;
}

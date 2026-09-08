import { escBidi, esc } from '../html.js';
import { QUIZ_PASS_RATIO } from '../../content/index.js';
import { nahwAnalysisComplete } from './nahw.js';
import { nativeItem } from './native.js';

export function choiceHtml(options, selected, order, action, disabled) {
  return `<div class="mz-choices" role="group" aria-label="Choose your answer">${order.map((oi, i) => `<button class="mz-choice${selected === oi ? ' is-selected' : ''}" data-action="${action}" data-option="${oi}" aria-pressed="${selected === oi}" ${disabled ? 'disabled' : ''}><span class="mz-choice-letter">${String.fromCharCode(65 + i)}</span><span>${escBidi(options[oi])}</span></button>`).join('')}</div>`;
}

function feedbackHtml({ correct, original, answer, explanation = '', corrected = false, correcting = false, correctionAction }) {
  return `<div class="mz-feedback ${correct ? 'is-correct' : 'is-incorrect'}" tabindex="-1" role="status"><h3>${correct ? 'Correct' : 'Let’s work through it'}</h3>${explanation ? `<p>${escBidi(explanation)}</p>` : ''}<dl class="mz-answer-comparison"><div><dt>Your original answer</dt><dd>${original}</dd></div>${!correct ? `<div><dt>Expected answer</dt><dd>${answer}</dd></div>` : ''}</dl>${corrected ? '<p>Correction understood. Your original attempt is retained.</p>' : !correct && !correcting ? `<button class="btn btn-secondary" data-action="${correctionAction}">Try a correction</button>` : ''}</div>`;
}

export function nativeExerciseHtml(lesson, step, record, order, helpers, state) {
  const analysis = step.kind === 'analysis';
  const item = nativeItem(lesson, step);
  const concept = step.kind === 'check' ? lesson.concepts[step.conceptIndex] : null;
  const disabled = record.submitted && !record.correcting;
  const complete = analysis ? nahwAnalysisComplete(item, record.response) : record.selected != null;
  const original = record.originalResponse || (record.firstSelected ?? record.selected);
  const comparison = values => item.words.map((word, i) => `<div>${escBidi(word)} — ${escBidi(values?.[i] || 'No answer')}</div>`).join('');
  const controls = analysis ? `<div class="mz-fields">${item.words.map((word, i) => `<div class="mz-field"><label for="native-field-${i}">${escBidi(word)}</label><select id="native-field-${i}" data-action="studyField" data-field="${i}" ${disabled ? 'disabled' : ''}><option value="">Choose an answer…</option>${order.map(oi => `<option value="${oi}" ${record.response?.[i] === item.options[oi] ? 'selected' : ''}>${esc(item.options[oi])}</option>`).join('')}</select>${record.response?.[i] ? `<span class="mz-control-help">${escBidi(record.response[i])}</span>` : ''}</div>`).join('')}</div>`
    : choiceHtml(item.options, record.selected, order, 'studyChoice', disabled);
  const hintLine = concept?.lines.find(l => ['Definition', 'Rule'].includes(l.box?.title)) || concept?.lines[0];
  return `<section class="mz-exercise mz-nahw-exercise${['mizan-sarf', 'mizan-intro-sarf'].includes(lesson.learningModel) ? ' mz-sarf-exercise' : ''}" data-state="${record.submitted ? 'graded' : 'answering'}"><div class="mz-exercise-prompt"><p class="mz-eyebrow">${step.kind === 'check' ? 'Guided practice' : 'Independent practice'}</p><h2>${escBidi(item.prompt)}</h2>${analysis ? `<div class="mz-stimulus" dir="auto">${escBidi(item.source)}</div>${item.translation ? `<p class="mz-control-help">${escBidi(item.translation)}</p>` : ''}<p class="mz-control-help">Choose an answer for every entry, then check your answers.</p>` : item.stimulus ? `<div class="mz-stimulus">${escBidi(item.stimulus).replace(/\n/g, '<br/>')}</div>` : ''}</div><div class="mz-response">${controls}${!disabled ? `<div class="mz-check-row"><button class="btn btn-primary" data-action="studyCheck" ${complete ? '' : 'disabled'}>${record.correcting ? 'Check correction' : 'Check answer'}</button><button class="mz-text-button" data-action="${analysis || concept ? 'studyHint' : 'openStudyNotes'}" ${record.hintShown ? 'disabled' : ''}>${analysis || concept ? 'Hint' : 'Lesson notes'}</button></div>` : ''}${record.hintShown ? `<aside class="mz-hints"><strong>Hint</strong>${analysis ? `<p>${escBidi(item.hint)}</p>` : `<div class="mz-prose">${helpers.prose({ lines: hintLine ? [hintLine] : [] }, '', null, true, state.tarkeebLabelsBlue)}</div>`}</aside>` : ''}${record.submitted ? feedbackHtml({
    correct: analysis ? record.correct : original === item.correct,
    original: analysis ? comparison(original) : escBidi(item.options[original]),
    answer: analysis ? comparison(item.labels) : escBidi(item.options[item.correct]),
    explanation: analysis ? '' : item.explanations?.[original] || item.explanation || '',
    corrected: record.corrected, correcting: record.correcting, correctionAction: 'studyCorrect',
  }) : ''}</div></section>`;
}

export function nativeQuizHtml(state, mod, lesson) {
  if (state.quizShowResult) {
    const score = state.quizScores[mod.id][lesson.id];
    return `<section class="mz-completed"><span class="mz-completed-mark" aria-hidden="true">${state.quizPassed ? '✓' : '↻'}</span><p class="mz-eyebrow">LESSON CHECK</p><h1>${state.quizPassed ? 'Ready to move on' : 'A little more practice'}</h1><p>${escBidi(lesson.title)}</p><div class="mz-result-score"><strong>${score.correct} <small>/ ${score.total}</small></strong><span>correct on the first attempt</span></div><p>${state.quizPassed ? 'You have passed the lesson check.' : `Get at least ${Math.ceil(lesson.quiz.length * QUIZ_PASS_RATIO)} of ${lesson.quiz.length} questions right to finish this lesson. Your practice and notes are saved.`}</p><div class="mz-completed-actions">${state.quizPassed ? '<button class="btn btn-primary" data-action="finishLesson">Finish lesson →</button>' : '<button class="btn btn-primary" data-action="retakeQuiz">Try the lesson check again</button>'}<button class="btn btn-secondary" data-action="backToLesson">Return to the lesson</button></div></section>`;
  }
  const q = lesson.quiz[state.quizIndex], correction = state.quizCorrection;
  const selected = correction?.active || correction?.correct ? correction.selected : state.quizSelected;
  const disabled = state.quizRevealed && !correction?.active;
  return `<section class="mz-study ${['mizan-sarf', 'mizan-intro-sarf'].includes(lesson.learningModel) ? 'mz-sarf' : 'mz-nahw'}" aria-label="Lesson check"><header class="mz-study-head"><button class="mz-study-exit" data-action="backToLesson" aria-label="Back to the lesson">←</button><div class="mz-study-title"><span>${escBidi(mod.title)}</span><h1>${escBidi(lesson.title)}</h1></div><span class="mz-control-help">Lesson check</span></header><div class="mz-step-track"><span>Independent practice</span><div class="mz-meter" role="progressbar" aria-label="Lesson check progress" aria-valuemin="0" aria-valuemax="${lesson.quiz.length}" aria-valuenow="${state.quizIndex + 1}"><span style="width:${(state.quizIndex + 1) / lesson.quiz.length * 100}%"></span></div></div><div class="mz-study-body" data-study-step><section class="mz-exercise"><div class="mz-exercise-prompt"><p class="mz-eyebrow">Independent practice</p><h2>${escBidi(q.q)}</h2></div><div class="mz-response">${choiceHtml(q.options, selected, state.quizOptionOrder[state.quizIndex], 'selectQuizOption', disabled)}${!disabled ? `<div class="mz-check-row"><button class="btn btn-primary" data-action="checkLessonQuiz" ${selected == null ? 'disabled' : ''}>${correction?.active ? 'Check correction' : 'Check answer'}</button></div>` : ''}${state.quizRevealed ? feedbackHtml({ correct: state.quizSelected === q.correct, original: escBidi(q.options[state.quizSelected]), answer: escBidi(q.options[q.correct]), explanation: q.explanation, corrected: correction?.correct, correcting: correction?.active, correctionAction: 'correctLessonQuiz' }) : ''}</div></section></div><footer class="mz-study-foot"><button class="btn btn-ghost" data-action="backToLesson">← Back to the lesson</button><span>${state.quizRevealed ? 'Your original attempt is retained.' : 'Check your answer to continue.'}</span><button class="btn btn-primary" data-action="nextQuizQuestion" ${state.quizRevealed ? '' : 'disabled'}>${state.quizIndex + 1 < lesson.quiz.length ? 'Continue' : 'See results'} →</button></footer></section>`;
}

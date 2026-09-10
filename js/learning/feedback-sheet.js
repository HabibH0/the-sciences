// Feedback stays on the exercise: remove it from document flow before mobile
// pagination, then present the existing graded markup in a bottom sheet.
// main.js owns whether it is open; grading and saved answers are untouched.
const FEEDBACK = '.mz-exercise .mz-feedback, .la-exercise .la-feedback, .quiz-page .quiz-feedback';

function actionButton(action, label, className = 'btn btn-secondary') {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = className;
  button.dataset.action = action;
  button.textContent = label;
  return button;
}

export function prepareExerciseFeedback(root) {
  const panel = root.querySelector(FEEDBACK);
  if (!panel) return null;
  const exercise = panel.closest('.mz-exercise, .la-exercise, .quiz-page');
  const shell = panel.closest('.mz-study, .la-session, .quiz-page');
  if (!shell) return null;
  // This authored layout has room to read feedback beside the original task.
  if (shell.dataset.readingLayout === 'idea') return null;
  const stamp = panel.innerHTML;
  const correcting = !!exercise.querySelector('.mz-check-row > .btn-primary');
  const next = shell.querySelector('.mz-study-foot > .btn-primary, .la-exercise-footer > .btn-primary, .quiz-foot > .btn-primary');
  const continuation = next?.cloneNode(true);
  if (continuation) continuation.type = 'button';
  const reopen = actionButton('openFeedbackSheet', 'View feedback', 'btn btn-secondary exercise-feedback-trigger');
  reopen.setAttribute('aria-haspopup', 'dialog');
  reopen.setAttribute('aria-controls', 'exercise-feedback-sheet');
  panel.replaceWith(reopen);
  const native = exercise.classList.contains('mz-nahw-exercise');
  return { panel, stamp, correcting, continuation, native };
}

export function mountFeedbackSheet(root, feedback, { open = false, animate = false } = {}) {
  if (!feedback || !open || root.querySelector('[role="dialog"]')) return null;
  const overlay = document.createElement('div');
  overlay.className = `exercise-feedback-overlay${animate ? ' is-entering' : ''}`;
  const backdrop = actionButton('closeFeedbackSheet', '', 'exercise-feedback-backdrop');
  backdrop.setAttribute('aria-label', 'Close feedback');
  backdrop.setAttribute('aria-hidden', 'true');
  backdrop.tabIndex = -1;
  const sheet = document.createElement('section');
  sheet.id = 'exercise-feedback-sheet';
  sheet.className = 'exercise-feedback-sheet';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-label', 'Answer feedback');
  sheet.tabIndex = -1;
  const header = document.createElement('header');
  header.className = 'exercise-feedback-head';
  const label = document.createElement('span');
  label.textContent = 'Your result';
  header.append(label, actionButton('closeFeedbackSheet', 'Close ×'));
  const body = document.createElement('div');
  body.className = 'exercise-feedback-body';
  if (feedback.native) body.classList.add('mz-nahw-exercise');
  // The dialog announces the result on opening; an additional live region
  // would announce the same answer twice to screen-reader users.
  feedback.panel.removeAttribute('role');
  feedback.panel.removeAttribute('tabindex');
  body.append(feedback.panel);
  const footer = document.createElement('footer');
  footer.className = 'exercise-feedback-foot';
  for (const correction of feedback.panel.querySelectorAll('[data-action="studyCorrect"], [data-action="logicCorrect"], [data-action="correctLessonQuiz"]')) footer.append(correction);
  if (feedback.continuation && !feedback.continuation.disabled) footer.append(feedback.continuation);
  if (!footer.children.length) footer.append(actionButton('closeFeedbackSheet', 'Back to my answer', 'btn btn-primary'));
  sheet.append(header, body, footer);
  overlay.append(backdrop, sheet);
  // Keep the overlay outside the transformed/scrolling main content. Inert
  // also prevents keyboard focus and clicks reaching the covered exercise.
  for (const child of root.children) child.inert = true;
  root.append(overlay);
  return sheet;
}

export async function dismissFeedbackSheet(root) {
  const sheet = root.querySelector('.exercise-feedback-sheet');
  if (!sheet || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const animation = sheet.animate([
    { transform: 'translateY(0)', opacity: 1 },
    { transform: 'translateY(100%)', opacity: 0 },
  ], { duration: 160, easing: 'ease-in', fill: 'forwards' });
  try { await animation.finished; } catch { /* A navigation can replace the sheet during dismissal. */ }
}

// The app's motion system -- every decision about WHAT animates WHEN lives
// here (the keyframes themselves live in styles.css's Motion layer).
//
// The constraint everything below is built around: rerender() replaces the
// whole DOM with root.innerHTML on every action, so no element ever survives
// from one paint to the next and CSS transitions can never carry a state
// change across a rerender (the "changed" element is a brand-new node born
// already in its final state). Worse, any bare CSS animation attached to a
// state class (.correct, .is-active, [open]...) would REPLAY on every
// same-screen rerender that recreates the node -- typing one letter into the
// dashboard search box would re-pop every checkmark on screen.
//
// So all motion is entrance-driven and JS-gated: a one-shot class added to
// the freshly-created DOM only at the moment the thing it marks first
// appears or was directly acted on, via five mechanisms:
//
//  1. Screen entrance -- rerender() knows when the nav signature changed;
//     only then does the new screen get its entrance class.
//  2. Overlay entrance -- a presence diff: an overlay selector absent from
//     the previous DOM and present in the new one animates in; one that was
//     already on screen holds still.
//  3. Overlay exit -- the dispatcher asks dismissDelay() before rerendering
//     a pure-dismiss action; the OLD overlay (still on screen) plays a short
//     exit and the swap is deferred until it lands.
//  4. Indicator FLIP -- the active-tab underline is measured before the swap
//     and again after; the fresh underline starts translated/scaled to the
//     old position and eases home, so the indicator appears to slide even
//     though both elements are strangers.
//  5. Action feedback -- the event dispatcher tells us which action ran and
//     which (now-detached) element it hit; we find that element's
//     freshly-rendered counterpart and mark whatever should acknowledge the
//     action (the just-graded option group, the chip slot just filled, the
//     ledger a new deadline just rewrote).
//
// Reduced motion: styles.css zeroes every animation/transition under
// prefers-reduced-motion, so classes applied here become inert no-ops there.
// prefersReducedMotion() below is for the JS-timed behaviours (smooth
// scrolling, dismiss delays, number count-ups) that need to know directly.

const reduceQuery = typeof matchMedia === 'function'
  ? matchMedia('(prefers-reduced-motion: reduce)')
  : null;

export function prefersReducedMotion() {
  return !!(reduceQuery && reduceQuery.matches);
}

function cssEsc(value) {
  return String(value ?? '').replace(/["\\]/g, '\\$&');
}

// --- overlay presence diff -------------------------------------------------
// Selector -> the entrance class its first appearance earns. Selectors are
// matched per family, not per instance: swapping one modal for another in a
// single rerender (rare) reads as "a modal was already up" and stays still,
// which errs on the calm side.
const OVERLAYS = [
  { sel: '.modal-backdrop', cls: 'anim-overlay-in' },
  { sel: '.unlock-modal-backdrop', cls: 'anim-overlay-in' },
  { sel: '.course-menu', cls: 'anim-drop-in' },
  { sel: '.lesson-search-results', cls: 'anim-drop-in' },
  { sel: '.practice-popout', cls: 'anim-rise-in' },
  { sel: '.deadline-picker', cls: 'anim-drop-in' },
  { sel: '.reset-hour-menu', cls: 'anim-drop-in' },
  { sel: '.xp-toast', cls: 'anim-toast-in' },
  // The verdict/explanation block that appears under a just-answered
  // question -- presence-diffed rather than action-mapped because many
  // different actions produce one (MCQ, تركيب, vocab, lit checks).
  { sel: '.quiz-feedback', cls: 'anim-rise-in' },
];

// Called just BEFORE root.innerHTML is replaced: which overlay families the
// outgoing DOM shows, and where the active-tab underline currently sits.
export function snapshotMotion(root) {
  const overlays = new Set();
  for (const { sel } of OVERLAYS) {
    if (root.querySelector(sel)) overlays.add(sel);
  }
  const activeTab = root.querySelector('.app-tabs .app-tab-active');
  const tabRect = activeTab ? activeTab.getBoundingClientRect() : null;
  return { overlays, tabRect: tabRect && tabRect.width ? tabRect : null };
}

// The desktop tab row's underline slides between tabs: the freshly-rendered
// active tab gets custom props describing where the OLD underline was, and a
// from-only keyframe eases its ::after home from there. Skipped when either
// side is missing (a screen without the tab row) or hidden (phone, where the
// row is display:none and measures 0).
function applyIndicatorMotion(root, prevRect) {
  if (!prevRect) return;
  const el = root.querySelector('.app-tabs .app-tab-active');
  if (!el) return;
  const now = el.getBoundingClientRect();
  if (!now.width) return;
  const dx = prevRect.left - now.left;
  const sx = prevRect.width / now.width;
  if (Math.abs(dx) < 1 && Math.abs(sx - 1) < 0.02) return;
  el.style.setProperty('--m-dx', `${dx.toFixed(1)}px`);
  el.style.setProperty('--m-sx', sx.toFixed(3));
  el.classList.add('anim-indicator-slide');
}

// --- number count-ups ------------------------------------------------------
// The completion plates' figures (score, accuracy, XP, streak) tally up to
// their value instead of just sitting there. Only plain ASCII integers are
// touched -- a prefix ("+", "×") and suffix ("%", " / 10", " d") ride along
// untouched, and a value of 0 (or no digits at all, e.g. a tier name) is
// left alone. Skipped entirely under reduced motion.
const COUNT_RE = /^([^0-9]*)(\d{1,4})(.*)$/;

function runCountUps(root) {
  if (prefersReducedMotion()) return;
  root.querySelectorAll('.complete-score, .complete-ledger-value').forEach((el) => {
    const match = COUNT_RE.exec(el.textContent.trim());
    if (!match) return;
    const target = parseInt(match[2], 10);
    if (!target) return;
    const [, prefix, , suffix] = match;
    const start = performance.now();
    const duration = 650;
    const step = (nowTs) => {
      if (!el.isConnected) return;
      const t = Math.min(1, (nowTs - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

let firstPaint = true;

// Called just AFTER the swap (and after scroll restoration, so entrance
// motion never fights a scrollTop being reapplied).
export function applyRenderMotion(root, snap, changedScreen) {
  const enterScreen = changedScreen || firstPaint;
  firstPaint = false;
  if (enterScreen) {
    const main = root.querySelector('.main');
    if (main) main.classList.add('screen-enter');
    if (root.querySelector('.complete-page')) runCountUps(root);
  }
  for (const { sel, cls } of OVERLAYS) {
    if (snap.overlays.has(sel)) continue;
    const el = root.querySelector(sel);
    if (!el) continue;
    // A screen entrance already animates everything inside the screen once;
    // layering the overlay entrance on top would double-animate content
    // that is simply part of the arriving page (e.g. a practice question's
    // feedback block right after a page turn). Screen entrance wins.
    if (enterScreen && el.closest('.main')) continue;
    el.classList.add(cls);
  }
  applyIndicatorMotion(root, snap.tabRect);
}

// --- overlay dismissal -----------------------------------------------------
// Pure-dismiss actions (Cancel, backdrop click, Escape, a toggle closing its
// own menu) get a short exit: the dispatcher calls this BEFORE rerendering;
// if it returns a delay, the state swap waits that long while the old
// overlay -- still on screen -- fades out. Anything that both closes an
// overlay AND opens/navigates somewhere else must NOT be listed here: the
// exit would stall its real destination.
const MODAL_DISMISS = new Set([
  'closeLessonPreview', 'cancelLessonPreview',
  'closeLitChapterPreview', 'cancelLitChapterPreview',
  'closePathCheckpointSetup', 'closePathSkipAheadPrompt',
  'closeUnlockPrompt', 'closeForceUnlockPrompt', 'cancelForceUnlockAll',
  'closeResetModulePrompt', 'cancelResetModulePrompt',
  'closeLeaveSessionPrompt', 'cancelLeaveSessionPrompt',
  'closeBadgeModal',
]);
// Toggles close their popover only when it is currently on screen -- the
// presence check below is what tells "opening" and "closing" apart.
const POP_DISMISS = {
  toggleCourseMenu: '.course-menu',
  toggleDeadlinePicker: '.deadline-picker',
  toggleResetHourMenu: '.reset-hour-menu',
  closePracticeSetup: '.practice-popout',
};

const MODAL_EXIT_MS = 130;
const POP_EXIT_MS = 110;

export function dismissDelay(root, actionName) {
  if (prefersReducedMotion()) return 0;
  if (MODAL_DISMISS.has(actionName)) {
    const backdrop = root.querySelector('.modal-backdrop, .unlock-modal-backdrop');
    if (!backdrop) return 0;
    backdrop.classList.add('anim-overlay-out');
    return MODAL_EXIT_MS;
  }
  const popSel = POP_DISMISS[actionName];
  if (popSel) {
    const pop = root.querySelector(popSel);
    if (!pop) return 0;
    pop.classList.add('anim-drop-out');
    return POP_EXIT_MS;
  }
  return 0;
}

// Escape closes whichever modal is open without going through an action --
// same exit, addressed by what's on screen rather than by action name.
export function dismissOpenModal(root) {
  if (prefersReducedMotion()) return 0;
  const backdrop = root.querySelector('.modal-backdrop, .unlock-modal-backdrop');
  if (!backdrop) return 0;
  backdrop.classList.add('anim-overlay-out');
  return MODAL_EXIT_MS;
}

// --- per-action feedback ---------------------------------------------------

// Rebuilds a selector for the acted-on element from its own data-* set --
// every actionable element already carries the data its handler needs
// (data-option, data-key, data-index...), which is exactly enough to
// identify its freshly-rendered counterpart. Same idea rerender()'s
// refocusSelector uses for focus.
function counterpartSelector(el) {
  if (!el || !el.dataset || !el.dataset.action) return null;
  return Object.entries(el.dataset)
    .map(([key, value]) => `[data-${key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}="${cssEsc(value)}"]`)
    .join('');
}

function counterpart(root, el) {
  const sel = counterpartSelector(el);
  if (!sel) return null;
  try {
    return root.querySelector(sel);
  } catch {
    return null;
  }
}

function mark(el, cls) {
  if (el) el.classList.add(cls);
}

// One correct answer's worth of celebration: the session's combo counter
// (when the screen has one) gets a single bump.
function bumpComboIfWon(root, container) {
  if (!container) return;
  const won = container.querySelector('.selected.correct') || container.querySelector('.action-row .tag-accent');
  if (won) mark(root.querySelector('.quiz-combo'), 'anim-bump');
}

// The just-graded question: mark the option group that owns the clicked
// option, so ONLY it replays its verdict (older answered exercises further
// up the same lesson page hold still).
function gradedAnswer(root, el) {
  const twin = counterpart(root, el);
  const group = twin ? twin.closest('.mcq-options, .exercise-choices') : null;
  mark(group, 'anim-verdict');
  bumpComboIfWon(root, group);
}

// The clicked control itself (a theme card, a segmented tab, an armed chip)
// settles under the pointer.
function settleSelf(root, el) {
  mark(counterpart(root, el), 'anim-select');
}

function fillSelf(root, el) {
  mark(counterpart(root, el), 'anim-fill');
}

// A question advanced in place (the nav signature doesn't see quiz-internal
// position): the new question steps in and the tick just banked grows in.
// On the LAST advance the result plate arrives instead -- rise it and run
// the tally, exactly what a screen entrance would have done had the nav
// signature changed.
function stepQuestion(root) {
  const plate = root.querySelector('.complete-page');
  if (plate) {
    mark(plate, 'anim-rise-in');
    runCountUps(root);
    return;
  }
  mark(root.querySelector('.quiz-body'), 'anim-step-in');
  const done = root.querySelectorAll('.quiz-ticks .quiz-tick-done');
  if (done.length) mark(done[done.length - 1], 'anim-tick-in');
}

// Action name -> effect(root, el). Anything not listed is covered by screen
// entrance, an overlay entrance/exit, or plain CSS hover/press states.
const ACTION_FX = {
  // Graded answers: verdict pop + wrong-answer nudge on the option group.
  selectQuizOption: gradedAnswer,
  selectPracticeOption: gradedAnswer,
  selectLessonExerciseOption: gradedAnswer,
  litCheckOption: gradedAnswer,
  // The Check button un-renders once the answer is graded, so its own
  // counterpart never exists -- the concept block's index finds the card.
  checkConceptExercise(root, el) {
    const card = root.querySelector(`[data-concept-index="${cssEsc(el.dataset.index)}"] .exercise-card`);
    mark(card, 'anim-verdict');
  },
  // تركيب grading: same story -- the diagram wrapper carries the key.
  checkTarkeeb(root, el) {
    const box = root.querySelector(`[data-tarkeeb-key="${cssEsc(el.dataset.key)}"]`);
    mark(box, 'anim-verdict');
    bumpComboIfWon(root, box);
  },
  // The reader's drills show exactly one drill at a time, so scoping the
  // verdict to the screen is already exact.
  litWorkshopCheck: (root) => mark(root.querySelector('.lit-reader'), 'anim-verdict'),
  litBuildCheck: (root) => mark(root.querySelector('.lit-reader'), 'anim-verdict'),
  litWordPracticeCheck: (root) => mark(root.querySelector('.lit-reader'), 'anim-verdict'),

  // In-place question/page turns the nav signature doesn't see.
  nextQuizQuestion: stepQuestion,
  // Practice advances DO change the nav signature (index is part of it), so
  // the screen entrance covers the new question -- only the banked tick
  // needs marking here.
  nextPracticeQuestion(root) {
    const done = root.querySelectorAll('.quiz-ticks .quiz-tick-done');
    if (done.length) mark(done[done.length - 1], 'anim-tick-in');
  },
  retakeQuiz: (root) => mark(root.querySelector('.quiz-body'), 'anim-step-in'),
  nextConcept: (root) => mark(root.querySelector('.concept-block'), 'anim-step-in'),
  prevConcept: (root) => mark(root.querySelector('.concept-block'), 'anim-step-in'),
  goToConcept: (root) => mark(root.querySelector('.concept-block'), 'anim-step-in'),
  litWorkshopNext: (root) => mark(root.querySelector('.lit-slot-card'), 'anim-step-in'),
  litBuildNext: (root) => mark(root.querySelector('.lit-slot-card'), 'anim-step-in'),
  litWordPracticeNext: (root) => mark(root.querySelector('.lit-slot-card'), 'anim-step-in'),
  litNextParagraph: (root) => mark(root.querySelector('.lit-para:last-of-type'), 'anim-rise-in'),

  // A newly revealed section.
  revealExercise(root, el) {
    mark(root.querySelector(`[data-concept-index="${cssEsc(el.dataset.index)}"] .exercise-card`), 'anim-rise-in');
  },

  // Selection acknowledgement: a quick settle on what was just picked.
  pickTheme: settleSelf,
  pickAccent: settleSelf,
  pickFace: settleSelf,
  pickHeadingFace: settleSelf,
  setPracticeTab: settleSelf,
  setPracticeVocabType: settleSelf,
  setScheduleRevisionKind: settleSelf,
  setScheduleRevisionMode: settleSelf,
  setScheduleRevisionModule: settleSelf,
  setScheduleRevisionVocabDirection: settleSelf,
  setPathVocabDirection: settleSelf,
  setLitCheckLang: settleSelf,
  // Tapping a primary destination (tab bar, top tabs, wordmark): the tapped
  // control settles -- the tactile half of the screen change it triggers.
  openDashboard: settleSelf,
  openLibrary: settleSelf,
  openSchedule: settleSelf,
  openAccount: settleSelf,
  openAchievements: settleSelf,
  // Chip drills: an armed chip settles; a slot that just took it pops.
  tarkeebChipClick: settleSelf,
  tarkeebSlotClick: fillSelf,
  litBuildChip: settleSelf,
  litWorkshopChip: settleSelf,
  litBuildSlot: fillSelf,
  litWorkshopSlot: fillSelf,

  // The reader's margin word card just swapped to the clicked word.
  litWord: (root) => mark(root.querySelector('.lit-word-card:not(.is-empty)'), 'anim-select'),

  // The plan that was just rewritten: flash the figures it changed.
  pickScheduleDeadline: (root) => mark(root.querySelector('.schedule-page .two-col-main'), 'anim-flash'),
  clearScheduleDeadline: (root) => mark(root.querySelector('.schedule-page .two-col-main'), 'anim-flash'),
  setDailyResetHour: (root) => mark(root.querySelector('.schedule-page .two-col-main'), 'anim-flash'),
};

// Called by the event dispatchers right after rerender(). `el` is the
// (now-detached) element the user actually hit.
export function applyActionMotion(root, el) {
  if (!el || !el.dataset) return;
  const fx = ACTION_FX[el.dataset.action];
  if (fx) fx(root, el);
}

// --- async-action busy state ----------------------------------------------
// An action that returns a promise (switching course, loading a chapter,
// talking to the sync server) marks its trigger immediately, so the click is
// acknowledged before the work lands. The spinner's CSS holds itself
// invisible for the first ~180ms, so instant resolutions never flash it.
// No unmark needed in the common path -- the rerender that follows replaces
// the whole DOM anyway -- but unmarkBusy covers handlers that resolve
// without rerendering (returning false).
export function markBusy(el) {
  if (!el || !el.classList) return;
  el.classList.add('is-busy');
  el.setAttribute('aria-busy', 'true');
}

export function unmarkBusy(el) {
  if (!el || !el.classList || !el.isConnected) return;
  el.classList.remove('is-busy');
  el.removeAttribute('aria-busy');
}

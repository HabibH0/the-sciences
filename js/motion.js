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
//  4. Indicator FLIP -- every selection indicator (desktop tabs, the phone
//     tab bar, the segmented pills) is measured before the swap and again
//     after; the fresh one starts translated/scaled to the old position and
//     eases home, so the indicator appears to slide between the two choices
//     even though both elements are strangers.
//  5. Action feedback -- the event dispatcher tells us which action ran and
//     which (now-detached) element it hit; we find that element's
//     freshly-rendered counterpart and mark whatever should acknowledge the
//     action (the just-graded option group, the chip slot just filled, the
//     ledger a new deadline just rewrote).
//
// One thing is deliberately gated tighter than "on entrance": the progress
// meters (bars, rings, XP) draw to their value the FIRST time a screen is
// seen in a session and never again (drawnMeters below). A ring that redraws
// on every glance at Home stops reading as "this moved" and starts reading
// as decoration.
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

// The JS half of the duration scale in styles.css's Motion layer. These are
// the only timings this file is allowed to use, and each one has a twin
// there: DUR.exit is --t-exit, DUR.pop is the .anim-drop-out duration, and
// DUR.meter is --t-meter. Keeping them in one object (rather than as
// literals at their call sites) is what stops the two halves of the system
// drifting apart -- if a duration changes in the CSS, it changes here.
export const DUR = {
  exit: 120,    // --t-exit: modal/backdrop dismissal
  pop: 100,     // .anim-drop-out: popovers close faster still
  meter: 520,   // --t-meter + its delay: the count-up runs with the bars
  toastOut: 160, // --t-exit plus a frame, before the node is removed
};

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

// --- selection indicators --------------------------------------------------
// The three "which one is selected" controls in the app. Each is measured
// before the swap and matched up again after by `key`, so the fresh
// indicator can start where the outgoing one sat and ease home.
//
// The key is what makes this safe across families: a screen can hold several
// segmented groups at once (Schedule shows three), and each group's buttons
// carry their own action name, so keying a pill group by that action pairs
// each outgoing indicator with the right incoming one and never with a
// neighbour's.
const INDICATORS = [
  { sel: '.app-tabs .app-tab-active', key: () => 'top-tabs' },
  { sel: '.app-tabbar .app-tabbar-item-active', key: () => 'tab-bar' },
  { sel: '.practice-tabs .practice-tab.active', key: (el) => `seg:${el.dataset.action || ''}` },
];

function measureIndicators(root) {
  const rects = new Map();
  for (const { sel, key } of INDICATORS) {
    for (const el of root.querySelectorAll(sel)) {
      const r = el.getBoundingClientRect();
      // Zero width means the control is hidden at this breakpoint (the top
      // tabs on a phone, the tab bar on desktop) -- nothing to slide from.
      if (r.width) rects.set(key(el), r);
    }
  }
  return rects;
}

// Called just BEFORE root.innerHTML is replaced: which overlay families the
// outgoing DOM shows, and where each selection indicator currently sits.
export function snapshotMotion(root) {
  const overlays = new Set();
  for (const { sel } of OVERLAYS) {
    if (root.querySelector(sel)) overlays.add(sel);
  }
  return { overlays, indicators: measureIndicators(root) };
}

// The FLIP itself: the freshly-rendered indicator gets custom props
// describing where the OLD one was, and a from-only keyframe eases its
// pseudo-element home from there.
function applyIndicatorMotion(root, prevRects) {
  if (!prevRects || !prevRects.size) return;
  for (const { sel, key } of INDICATORS) {
    for (const el of root.querySelectorAll(sel)) {
      const prev = prevRects.get(key(el));
      if (!prev) continue;
      const now = el.getBoundingClientRect();
      if (!now.width) continue;
      // A wrapped pill group can put the new selection on a different line;
      // sliding horizontally between two rows would describe a path the
      // selection never took, so those just swap.
      if (Math.abs(prev.top - now.top) > 2) continue;
      const dx = prev.left - now.left;
      const sx = prev.width / now.width;
      if (Math.abs(dx) < 1 && Math.abs(sx - 1) < 0.02) continue;
      el.style.setProperty('--m-dx', `${dx.toFixed(1)}px`);
      el.style.setProperty('--m-sx', sx.toFixed(3));
      el.classList.add('anim-indicator-slide');
    }
  }
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
    // Same beat as the bars and rings drawing beside it (DUR.meter), so the
    // whole plate resolves as one gesture rather than as three that finish
    // at three different moments.
    const duration = DUR.meter;
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

// Which screens have already drawn their meters this session. Progress bars,
// XP rails and completion rings animating to their value is a good moment
// exactly once -- the first time you see that screen. Replaying it on every
// return trip (which is what a plain entrance class does, and what this used
// to do) turns a status readout into wallpaper, and puts a 600ms paint on
// the critical path of every single navigation. Keyed by the nav signature,
// so a different lesson's completion plate still gets its own draw.
const drawnMeters = new Set();

// Called just AFTER the swap (and after scroll restoration, so entrance
// motion never fights a scrollTop being reapplied).
export function applyRenderMotion(root, snap, changedScreen, nav) {
  const enterScreen = changedScreen || firstPaint;
  firstPaint = false;
  if (enterScreen) {
    const main = root.querySelector('.main');
    if (main) main.classList.add('screen-enter');
    if (main && nav != null && !drawnMeters.has(nav)) {
      drawnMeters.add(nav);
      main.classList.add('screen-enter-meters');
      if (root.querySelector('.complete-page')) runCountUps(root);
    }
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
  applyIndicatorMotion(root, snap.indicators);
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

const MODAL_EXIT_MS = DUR.exit;
const POP_EXIT_MS = DUR.pop;

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

// Several controls can share one action with no data-* to tell them apart:
// Home is reachable from the wordmark, the desktop tab AND the phone tab bar,
// so `[data-action="openDashboard"]` matches three elements. Taking the first
// match made the feedback land on whichever came first in the markup -- which
// meant clicking the Home TAB made the WORDMARK settle, an acknowledgement
// pointing at something the user never touched. Where the data alone is
// ambiguous, the element's own shape breaks the tie: same classes first, then
// same tag, then (for a genuinely identical twin, e.g. the practice panel
// rendered once inline and once in the rail) the one that is actually
// on screen.
function counterpart(root, el) {
  const sel = counterpartSelector(el);
  if (!sel) return null;
  let matches;
  try {
    matches = root.querySelectorAll(sel);
  } catch {
    return null;
  }
  if (matches.length < 2) return matches[0] || null;
  // The FIRST class is the component's own name in this codebase's markup
  // (`app-tab app-tab-active`, `mcq-option correct`); the rest are state. So
  // it identifies the component across a rerender that changed its state,
  // which a full className comparison would not -- clicking an INACTIVE tab
  // produces a counterpart carrying an extra `-active` class.
  const kind = el.classList && el.classList[0];
  const same = kind ? [...matches].filter((m) => m.classList[0] === kind) : [];
  const pool = same.length ? same : [...matches].filter((m) => m.tagName === el.tagName);
  // A truly identical twin (the practice panel is rendered once inline for
  // phones and once in the rail for desktop) is resolved by which copy the
  // current breakpoint actually shows.
  return pool.find((m) => m.offsetParent) || pool[0] || matches[0];
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
    // A result plate is the one screen whose meters are the whole point, and
    // it arrives here without a nav change to hand out the meter class -- so
    // it gets one directly. (Only ever once: the plate is replaced the
    // moment the learner leaves it.)
    mark(root.querySelector('.main'), 'screen-enter-meters');
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

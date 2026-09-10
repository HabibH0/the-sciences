// The app's motion system -- every decision about WHAT animates WHEN lives
// here (the keyframes themselves live in styles.css's Motion layer).
//
// Older screens still replace their DOM during rerender. The authored lesson
// player preserves unchanged regions through patch-study.js; spatial-motion.js
// owns its coordinated transitions and those of the course navigation. These
// legacy effects remain gated to avoid replaying entrances on ordinary edits.
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
  expand: 200,  // --t-ui: an inline disclosure growing to its measured height
  meter: 520,   // --t-meter + its delay: the count-up runs with the bars
  toastOut: 160, // --t-exit plus a frame, before the node is removed
};

// The JS half of the easing table, for the two Web-Animations effects below
// (expand/collapse -- see animateHeight). Same twins rule as DUR: these are
// --ease-out and --ease-in in styles.css, restated because WAAPI cannot read
// custom properties out of the cascade.
const EASE_OUT = 'cubic-bezier(0.2, 0.9, 0.3, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 0.9, 0.6)';

function cssEsc(value) {
  return String(value ?? '').replace(/["\\]/g, '\\$&');
}

// --- inline disclosures ----------------------------------------------------
// The one deliberate exception to the Motion layer's composite-only rule
// (rule 4 in styles.css). A disclosure that opens IN document flow -- the
// practice setup panel, a concept's revealed exercise -- physically changes
// the page's geometry, and animating only the new card while everything
// below it teleports is exactly the two-unrelated-events effect audit
// MOT-004 describes. So the surface's own height is driven from 0 to its
// measured value (and back on dismissal), which moves the surrounding layout
// continuously as part of the same gesture. Kept short (--t-ui / --t-exit)
// and used only for disclosures, never for screens or overlays, which stay
// on the compositor. Margins ride along -- .practice-popout carries its own
// margin-top, and a collapse that left the margin standing would end on a
// 12px hole that then snaps shut.
function animateHeight(el, { collapse = false, duration: durationOverride } = {}) {
  if (!el || prefersReducedMotion() || typeof el.animate !== 'function') return 0;
  const height = el.offsetHeight;
  if (!height) return 0; // hidden at this breakpoint (e.g. the inline copy on desktop)
  const style = getComputedStyle(el);
  const grown = {
    height: `${height}px`,
    marginTop: style.marginTop,
    marginBottom: style.marginBottom,
    opacity: 1,
  };
  const flat = { height: '0px', marginTop: '0px', marginBottom: '0px', opacity: 0 };
  const duration = durationOverride ?? (collapse ? DUR.exit : DUR.expand);
  const prevOverflow = el.style.overflow;
  el.style.overflow = 'hidden';
  const anim = el.animate(collapse ? [grown, flat] : [flat, grown], {
    duration,
    easing: collapse ? EASE_IN : EASE_OUT,
    fill: collapse ? 'forwards' : 'none',
  });
  if (collapse) {
    el.style.pointerEvents = 'none';
  } else {
    // The surface's children ride in a beat behind the container (the CSS
    // half is .anim-expand-content in the Motion layer), and nothing inside
    // is clickable until the panel has physically arrived (MOTION-001).
    el.classList.add('anim-expand-content');
    el.style.pointerEvents = 'none';
    anim.onfinish = () => {
      el.style.overflow = prevOverflow;
      el.style.pointerEvents = '';
    };
  }
  return duration;
}

export function expandIn(el, opts) {
  return animateHeight(el, opts);
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
  { sel: '.sections-menu', cls: 'anim-drop-in' },
  // Search results arrive/depart as one quiet group (MOTION-008): a short
  // rise when filtering begins, and the module list (or the Library's
  // chapter-hit block) gets the same treatment when it returns -- presence-
  // diffed, so per-keystroke rerenders while results stay on screen never
  // replay it.
  { sel: '.lesson-search-results', cls: 'anim-search-in' },
  { sel: '.module-list', cls: 'anim-search-in' },
  { sel: '.lit-search-chapters', cls: 'anim-search-in' },
  // The practice setup panel opens IN document flow (it pushes the lesson
  // list down on phones), so it expands to its measured height rather than
  // rising over a layout that already jumped -- see animateHeight. Its own
  // entrance runs a beat quicker than the generic disclosure (MOTION-001:
  // the whole entrance stays under 180ms for a ~426px panel).
  { sel: '.practice-popout', expand: true, dur: 170 },
  { sel: '.deadline-picker', cls: 'anim-drop-in' },
  { sel: '.reset-hour-menu', cls: 'anim-drop-in' },
  // The reader's word card drops down on its FIRST appearance only --
  // switching from word to word keeps it on screen, so the presence diff
  // sees no change and the card just updates in place.
  { sel: '.lit-aside .lit-word-dock', cls: 'anim-drop-in' },
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
  // The reader head's progress fill slides between its old and new width on
  // a paragraph turn (user request) instead of snapping -- same FLIP: the
  // fresh fill starts scaled to the outgoing width and eases home, in both
  // directions.
  { sel: '.lit-reader-head .progress-bar-fill', key: () => 'lit-progress' },
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
export function applyRenderMotion(root, snap, changedScreen, nav, spatial = null) {
  const enterScreen = (changedScreen || firstPaint) && !spatial;
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
  for (const { sel, cls, expand, dur } of OVERLAYS) {
    if (snap.overlays.has(sel)) continue;
    // Every match, not just the first: the practice setup panel is rendered
    // twice (inline for phones, in the rail for desktop -- CSS shows one per
    // breakpoint), and animating only the first match meant the desktop copy
    // arrived with no entrance at all while a hidden element animated
    // (audit MOT-003).
    for (const el of root.querySelectorAll(sel)) {
      if (spatial?.kind.startsWith('notes') && el.matches('.mz-notes-backdrop')) continue;
      // A screen entrance already animates everything inside the screen once;
      // layering the overlay entrance on top would double-animate content
      // that is simply part of the arriving page (e.g. a practice question's
      // feedback block right after a page turn). Screen entrance wins.
      if (enterScreen && el.closest('.main')) continue;
      if (expand) expandIn(el, dur ? { duration: dur } : undefined); // measures 0 on the breakpoint-hidden copy and skips itself
      else el.classList.add(cls);
    }
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
// `collapse` marks the in-flow disclosures, whose exit is the height
// animation played backwards (so the layout they pushed down rides back up
// with them) rather than the popover fade. openPractice is here for its
// toggle-closed half only: pressing the Practice Mode row while its panel
// is open closes that panel, and the presence check already tells the two
// halves apart exactly as it does for the toggle* actions.
// On hover-capable devices with the hover-translate aid on, hovering has
// already revealed the gloss before any click lands -- animating the pin
// on top of that would flicker. Everywhere else (touch, or the aid off)
// the pin IS the only reveal, so it earns the slide.
function glossNeedsMotion(root) {
  const hoverCapable = typeof matchMedia === 'function' && matchMedia('(hover: hover)').matches;
  return !hoverCapable || !!root.querySelector('.lit-reader.no-hover-translate');
}

const POP_DISMISS = {
  toggleCourseMenu: { sel: '.course-menu' },
  toggleSectionsMenu: { sel: '.sections-menu' },
  toggleDeadlinePicker: { sel: '.deadline-picker' },
  toggleResetHourMenu: { sel: '.reset-hour-menu' },
  closePracticeSetup: { sel: '.practice-popout', collapse: true },
  openPractice: { sel: '.practice-popout', collapse: true },
  // Unpinning a phrase translation slides it back up -- the same collapse
  // the hover reveal plays in reverse (user request). The presence check
  // tells the closing half from the opening one exactly as the toggles
  // above do; `when` stands the motion down where hover already showed it.
  litToggleGloss: { sel: '.lit-sentence.is-open .lit-gloss', collapse: true, when: glossNeedsMotion },
};

const MODAL_EXIT_MS = DUR.exit;
const POP_EXIT_MS = DUR.pop;

// The Schedule pickers become bottom-attached sheets on phones (MOTION-003,
// styles.css's 640px block) -- their exit travels back to the bottom edge
// over 140ms there, a beat longer than a desktop popover's fade.
const SHEET_SELS = new Set(['.deadline-picker', '.reset-hour-menu']);
const SHEET_EXIT_MS = 140;
function popExitMs(sel) {
  return SHEET_SELS.has(sel) && typeof matchMedia === 'function' && matchMedia('(max-width: 640px)').matches
    ? SHEET_EXIT_MS
    : POP_EXIT_MS;
}

// The copy of a twice-rendered element (see the practice panel note above)
// that the current breakpoint actually shows.
function visibleMatch(root, sel) {
  const matches = [...root.querySelectorAll(sel)];
  return matches.find((m) => m.offsetParent) || matches[0] || null;
}

export function dismissDelay(root, actionName) {
  if (prefersReducedMotion()) return 0;
  if (MODAL_DISMISS.has(actionName)) {
    const backdrop = root.querySelector('.modal-backdrop, .unlock-modal-backdrop');
    if (!backdrop) return 0;
    backdrop.classList.add('anim-overlay-out');
    return MODAL_EXIT_MS;
  }
  const entry = POP_DISMISS[actionName];
  if (entry) {
    if (entry.when && !entry.when(root)) return 0;
    const pop = visibleMatch(root, entry.sel);
    if (!pop) return 0;
    if (entry.collapse) return animateHeight(pop, { collapse: true });
    pop.classList.add('anim-drop-out');
    return popExitMs(entry.sel);
  }
  return 0;
}

// The course and sections menus can also be dismissed without any
// [data-action] firing -- Escape, or a click on the page around them (both
// wired in js/main.js). Same exit their toggles play, addressed by what's
// on screen rather than by action.
export function dismissOpenPopover(root, sel = '.course-menu') {
  if (prefersReducedMotion()) return 0;
  const menu = root.querySelector(sel);
  if (!menu) return 0;
  menu.classList.add('anim-drop-out');
  return popExitMs(sel);
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
  if (!container) return false;
  const won = container.querySelector('.selected.correct') || container.querySelector('.action-row .tag-accent');
  if (won) mark(root.querySelector('.quiz-progress-card'), 'anim-bump');
  return !!won;
}

// A little "+10" rises off the star badge and fades, echoing the actual
// figure the quiz's own feedback line just printed (see quizCosmeticXp in
// js/gamification.js) rather than a hardcoded amount here -- so it silently
// stops matching anything, instead of drifting stale, if that figure ever
// changes shape. Practice's feedback line never states a number (its combo
// badge already carries the running total), so this simply finds nothing
// and no-ops there.
function popXpIfWon(root, won) {
  if (!won || prefersReducedMotion()) return;
  const line = root.querySelector('.quiz-feedback-line');
  const found = /\+(\d+)\s*XP/.exec(line ? line.textContent : '');
  // The XP stat is always the second of the progress card's two cells
  // (streak/combo first, XP last -- same order the old .quiz-combo badges
  // used), so this reaches it without a dedicated hook.
  const star = root.querySelector('.quiz-progress-stat:last-child .quiz-progress-value');
  if (!found || !star) return;
  const pop = document.createElement('span');
  pop.className = 'xp-pop';
  pop.setAttribute('aria-hidden', 'true');
  pop.textContent = `+${found[1]}`;
  star.appendChild(pop);
  pop.addEventListener('animationend', () => pop.remove(), { once: true });
}

// The just-graded question: mark the option group that owns the clicked
// option, so ONLY it replays its verdict (older answered exercises further
// up the same lesson page hold still).
function gradedAnswer(root, el) {
  const twin = counterpart(root, el);
  const group = twin ? twin.closest('.mcq-options, .exercise-choices') : null;
  mark(group, 'anim-verdict');
  popXpIfWon(root, bumpComboIfWon(root, group));
}

// The clicked control itself (a theme card, a segmented tab, an armed chip)
// settles under the pointer.
function settleSelf(root, el) {
  mark(counterpart(root, el), 'anim-select');
}

function fillSelf(root, el) {
  mark(counterpart(root, el), 'anim-fill');
}

// One concept page-turn's worth of motion: reset the content scroller so
// the new concept opens at its heading, then step the concept region in
// with the direction the learner actually moved.
function stepConceptTo(cls) {
  return (root) => {
    const scroller = root.querySelector('.main-content');
    if (scroller) scroller.scrollTop = 0;
    mark(root.querySelector('.concept-block'), cls);
  };
}

// A question advanced in place (the nav signature doesn't see quiz-internal
// position): the new question steps in and the tick just banked grows in.
// On the LAST advance the result plate arrives instead -- rise it and run
// the tally, exactly what a screen entrance would have done had the nav
// signature changed.
function stepQuestion(root) {
  const plate = root.querySelector('.complete-page, .mz-completed');
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
  mark(root.querySelector('.quiz-body, [data-study-step]'), 'anim-step-in');
  const done = root.querySelectorAll('.quiz-ticks .quiz-tick-done');
  if (done.length) mark(done[done.length - 1], 'anim-tick-in');
}

// Action name -> effect(root, el). Anything not listed is covered by screen
// entrance, an overlay entrance/exit, or plain CSS hover/press states.
const ACTION_FX = {
  studyNext: (root) => mark(root.querySelector('[data-study-step]'), 'anim-step-in'),
  studyBack: (root) => mark(root.querySelector('[data-study-step]'), 'anim-step-back'),
  studyChoice: settleSelf,
  nahwVisual: settleSelf,
  tableVisual: settleSelf,
  introNahwPart: settleSelf,
  introSarfTable: settleSelf,
  checkLessonQuiz: (root) => mark(root.querySelector('.mz-feedback'), 'anim-verdict'),
  logicChoice: settleSelf,
  studyCheck: (root) => mark(root.querySelector('.mz-feedback'), 'anim-verdict'),
  submitLogicAnswer: (root) => mark(root.querySelector('.mz-feedback'), 'anim-verdict'),
  // Graded answers: verdict pop + wrong-answer nudge on the option group.
  selectQuizOption: gradedAnswer,
  selectPracticeOption: gradedAnswer,
  selectLessonExerciseOption: gradedAnswer,
  litCheckOption: gradedAnswer,
  // The Check button un-renders once the answer is graded, so its own
  // counterpart never exists -- the concept block's index finds the card.
  // On a pass, the just-unlocked concept dot in the lesson head pops in
  // (audit MOT-006: progress feedback tied spatially to the completed
  // exercise, on the indicator the learner will use to advance) -- the
  // freshly-rendered DOM is what says whether the answer was right, exactly
  // as bumpComboIfWon reads it.
  checkConceptExercise(root, el) {
    const card = root.querySelector(`[data-concept-index="${cssEsc(el.dataset.index)}"] .exercise-card`);
    mark(card, 'anim-verdict');
    if (card && card.querySelector('.tag-accent')) {
      const reached = root.querySelectorAll('.concept-dots .concept-dot.reached');
      if (reached.length) mark(reached[reached.length - 1], 'anim-dot-in');
    }
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
  // Concept paging (audit MOT-006/NAV-001): a fresh concept must begin at
  // its heading, not wherever the previous concept's exercise left the
  // scroller -- so the reset rides in the same frame as the step transition,
  // before anything paints. Forward steps in from below and Back reverses
  // the travel, so the two directions read as a reciprocal pair rather than
  // one generic entrance. (The reset itself also runs under reduced motion:
  // it is state correctness, not decoration -- only the step classes go
  // inert there.)
  nextConcept: stepConceptTo('anim-step-in'),
  prevConcept: stepConceptTo('anim-step-back'),
  goToConcept: stepConceptTo('anim-step-in'),
  litWorkshopNext: (root) => mark(root.querySelector('.lit-slot-card'), 'anim-step-in'),
  litBuildNext: (root) => mark(root.querySelector('.lit-slot-card'), 'anim-step-in'),
  litWordPracticeNext: (root) => mark(root.querySelector('.lit-slot-card'), 'anim-step-in'),
  litNextParagraph: (root) => mark(root.querySelector('.lit-para:last-of-type'), 'anim-rise-in'),
  // Back gets the same paragraph entrance as forward (user request).
  litPrevParagraph: (root) => mark(root.querySelector('.lit-para:last-of-type'), 'anim-rise-in'),

  // A newly revealed section: an in-flow disclosure, so it expands to its
  // measured height (moving the footer with it) rather than popping into
  // space the layout already allocated (audit MOT-004). The follow-down
  // scroll -- so the whole card, Check button included, lands in view --
  // belongs to the revealExercise action in js/main.js, which waits for
  // this expand to finish before measuring.
  revealExercise(root, el) {
    expandIn(root.querySelector(`[data-concept-index="${cssEsc(el.dataset.index)}"] .exercise-card`));
  },

  // The module hero's description expander (MOTION-002): the freshly
  // rendered blurb is already in its NEW state, so the OLD state's height
  // is reconstructed from a hidden clone (the same trick
  // updateCoverBlurbToggle in js/main.js uses to measure the clamp) and the
  // height eases between the two -- opening a touch slower than closing.
  // The hero's title above holds still; only the blurb's box moves.
  toggleCoverBlurb(root) {
    if (prefersReducedMotion()) return;
    const blurb = root.querySelector('.cover-blurb');
    if (!blurb || typeof blurb.animate !== 'function' || !blurb.offsetParent) return;
    const open = blurb.classList.contains('is-open');
    const clone = blurb.cloneNode(true);
    clone.classList.toggle('is-open', !open);
    clone.style.position = 'absolute';
    clone.style.visibility = 'hidden';
    clone.style.width = `${blurb.clientWidth}px`;
    blurb.parentNode.appendChild(clone);
    const fromH = clone.offsetHeight;
    clone.remove();
    const toH = blurb.offsetHeight;
    if (!toH || Math.abs(fromH - toH) < 2) return;
    const prevOverflow = blurb.style.overflow;
    blurb.style.overflow = 'hidden';
    const anim = blurb.animate(
      [{ height: `${fromH}px` }, { height: `${toH}px` }],
      { duration: open ? 160 : 130, easing: EASE_OUT },
    );
    anim.onfinish = () => { blurb.style.overflow = prevOverflow; };
  },

  // The course just switched (audit MOT-002): the chooser closed the moment
  // the course was picked and the page sat dimmed under the loading
  // treatment -- this is the arrival half, a restrained crossfade of only
  // the course-scoped regions. The shell (header, tabs, page title) holds
  // still. Same pattern on Home and on Schedule's scope switch (NAV-003
  // deferred its crossfade here).
  chooseCourse: (root) => mark(root.querySelector('.home-page'), 'anim-content-in'),
  chooseScheduleCourse: (root) => mark(root.querySelector('.schedule-page'), 'anim-content-in'),

  // Selection acknowledgement: a quick settle on what was just picked.
  pickTheme: settleSelf,
  pickAccent: settleSelf,
  pickFace: settleSelf,
  pickHeadingFace: settleSelf,
  setPracticeTab: settleSelf,
  setPracticeVocabType: settleSelf,
  setPracticeCount: settleSelf,
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

  // The reader's word card entrance is presence-diffed (see OVERLAYS);
  // in-place word switches deliberately get no replay, so no litWord entry
  // here.

  // Pinning a phrase translation slides it down exactly like the hover
  // reveal does (user request) -- the freshly-rendered gloss is born open,
  // so it grows to its measured height. Only where hover has not already
  // revealed it (see glossNeedsMotion); the unpin half is the matching
  // collapse in POP_DISMISS.
  litToggleGloss(root) {
    if (!glossNeedsMotion(root)) return;
    expandIn(root.querySelector('.lit-sentence.is-open .lit-gloss'));
  },

  // "Set a target date" hands off INTO the open picker (POLISH-004): the
  // Plan block is brought into comfortable view in the same frame the
  // screen arrives, so the Schedule heading stays above it for context and
  // the freshly-focused date grid is never below the fold.
  openScheduleTargetDate(root) {
    const plan = root.querySelector('.deadline-picker-wrap');
    if (plan) plan.scrollIntoView({ block: 'center', behavior: 'auto' });
  },

  // The plan that was just rewritten: flash the figures it changed.
  pickScheduleDeadline: (root) => mark(root.querySelector('.schedule-page .two-col-main'), 'anim-flash'),
  clearScheduleDeadline: (root) => mark(root.querySelector('.schedule-page .two-col-main'), 'anim-flash'),
  setDailyResetHour: (root) => mark(root.querySelector('.schedule-page .two-col-main'), 'anim-flash'),
};

// Called by the event dispatchers right after rerender(). `el` is the
// (now-detached) element the user actually hit.
//
// Direction (audit MOT-005): when the click that changed the screen was one
// of the app's back affordances, the entrance plays reversed -- the page
// settles downward instead of up, so going back reads as the reciprocal of
// going deeper. Read off the control's own class rather than a route map:
// the same action (openModule, say) is forward from the dashboard and back
// from a lesson, and the affordance the user pressed is the one thing that
// always knows which it was. Runs in the same frame as applyRenderMotion's
// screen-enter, before anything paints.
const BACK_AFFORDANCE = '.back-link, .back-chevron, .app-back, .module-crumb-link';

export function applyActionMotion(root, el) {
  if (!el || !el.dataset) return;
  if (root.dataset.spatialMotion === 'selection') return;
  if (root.dataset.spatialMotion && ['studyNext', 'studyBack', 'nextQuizQuestion', 'retakeQuiz', 'studyCheck', 'submitLogicAnswer', 'checkLessonQuiz'].includes(el.dataset.action)) return;
  if (typeof el.closest === 'function' && el.closest(BACK_AFFORDANCE)) {
    const main = root.querySelector('.main.screen-enter');
    if (main) main.classList.add('screen-enter-back');
  }
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
  // A busy action launched FROM a dialog (Free read / Practice loading a
  // chapter, say) freezes the whole surface, not just its trigger: the
  // sibling buttons could still fire and start a second, competing launch,
  // and audit MOT-001 requires an outgoing dialog to stop being interactive
  // the moment its navigation is under way.
  const surface = el.closest && el.closest('.modal, .unlock-modal, .force-unlock-modal');
  if (surface) surface.classList.add('is-busy-surface');
}

export function unmarkBusy(el) {
  if (!el || !el.classList || !el.isConnected) return;
  el.classList.remove('is-busy');
  el.removeAttribute('aria-busy');
  const surface = el.closest && el.closest('.is-busy-surface');
  if (surface) surface.classList.remove('is-busy-surface');
}

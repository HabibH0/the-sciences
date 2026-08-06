import {
  MODULES,
  QUIZ_PASS_RATIO,
  getModule,
  getLesson,
  isModuleUnlocked,
  isLessonUnlocked,
  isLessonComplete,
  isModuleComplete,
  areAllConceptsPassed,
  isLessonExercisePassed,
  isLessonReadyForQuiz,
  lessonExerciseItemKey,
  firstUnpassedExerciseIndex,
  isQuizPassed,
  conceptKey,
  getBankPool,
  getMcqPool,
  getTarkeebPool,
  getVocabPool,
  getUnlockedVocabPool,
  totalLessonsCleared,
  COURSES,
  setActiveCourse,
  flattenTarkeebSlots,
  courseIdForModule,
  isCourseUnlocked,
  courseUnlockTestPool,
  moduleSkipTestPool,
  courseUnlockTestSubPools,
  moduleSkipTestSubPools,
  UNLOCK_TEST_LENGTH,
  MODULE_SKIP_TEST_LENGTH,
  UNLOCK_TEST_PASS_RATIO,
} from '../content/index.js';
import { findPathGroup, groupSkeleton, findPathNode, pathFullPool, PATH_TRACKS, isTrackUnlocked, trackUnlockTestPool, trackUnlockTestSubPools } from '../content/paths.js';
import {
  createInitialState, shuffleQuizOrder, shuffle, buildPracticeQueue,
  buildModuleRevisionQueue, moduleRevisionPool,
  buildRevisionVocabQueue,
  buildPathMcqCheckpointQueue, buildPathVocabCheckpointQueue,
  buildPathTarkeebCheckpointQueue, buildPathRevisionQueue, buildPathSectionTestQueue,
  buildMasteryV2Queue, masteryV2Pool, masteryKey, pathCheckpointPassRatio, stillPassable,
  firstUnfinishedPathNodeIndex, buildUnlockTestQueue,
  PATH_REP_LEARNED_COUNT, VOCAB_LEARNED_COUNT,
} from './state.js';
import { render, FACES, KUFI_HEAD_FONT } from './render.js';
import { checkMcq, checkTarkeeb, checkTarkeebDiagram } from './checker.js';
import { persistSoon, flushPersist, todayISO } from './persistence.js';
import {
  awardXp, awardBadge, xpForQuiz, xpForPracticeCorrect, checkStreakBadges,
  checkPerfectQuizBadges, checkPracticeVolumeBadges, checkModuleCompletionBadges,
  checkLessonsClearedBadges, checkCourseCompletionBadges,
} from './gamification.js';

// Window controls (#window-drag-region/#window-controls in index.html,
// replacing the OS title bar main.cjs removes via frame:false) -- no
// preload script exists, so (same as js/persistence.js's own `require`
// use) nodeIntegration is what makes this reachable directly from a
// renderer ES module.
const { ipcRenderer } = typeof require !== 'undefined' ? require('electron') : {};

const state = createInitialState();
// Must run before sanitizeBootNav below -- that IIFE calls getModule/
// isModuleUnlocked/etc., which resolve against whichever course is active.
setActiveCourse(state.courseId);
state.tarkeebState = {}; // key -> { chipPool, chipOrder, placements, selectedChip, submitted, feedback, passed }
// A returning learner who already has a 7-day streak sees the "On Fire"
// badge unlock immediately on launch, rather than waiting for their next
// XP-earning action to trigger the check.
checkStreakBadges(state);

const root = document.getElementById('root');

// --- boot sanitation --------------------------------------------------

(function sanitizeBootNav() {
  // 'drill' and 'drillComplete' are pre-redesign views that no longer exist.
  if (state.view === 'drill') state.view = 'lesson';
  if (state.view === 'drillComplete') state.view = 'lessonComplete';

  if (state.moduleId && !getModule(state.moduleId)) {
    state.view = 'dashboard';
    state.moduleId = null;
    state.lessonId = null;
    return;
  }
  if (state.moduleId && !isModuleUnlocked(state.moduleId, state.completed, state.unlockedModules)) {
    state.view = 'dashboard';
    state.moduleId = null;
    state.lessonId = null;
  }
  // 'bank' is the pre-Practice-Mode drill bank view; an in-progress practice/
  // revision/path/mastery session doesn't survive a reload either (its
  // queue/log aren't persisted -- state.pathActive resets to false on every
  // boot too), so any of these just fall back to the path map (if that's
  // where it was launched from), the module page, or the Schedule tab for
  // Revision, which has no module page of its own.
  if (['bank', 'practiceSetup', 'practice', 'practiceReview', 'masteryV2Complete'].includes(state.view)) {
    state.view = state.pathActive ? 'path' : (state.moduleId ? 'module' : 'schedule');
  }
  if (state.view === 'lessonComplete') {
    if (state.moduleId) state.view = 'module';
  } else if (['lesson', 'quiz'].includes(state.view)) {
    // Where inside the lesson the learner was is derived from exStates on
    // render, so a reload only has to check the lesson is still reachable.
    if (!(state.moduleId && state.lessonId && isLessonUnlocked(state.moduleId, state.lessonId, state.completed, state.unlockedModules))) {
      state.view = state.moduleId ? 'module' : 'dashboard';
    }
  }
  // A group's map is only a valid landing view if pathGroupId still names a
  // real, populated group (content/path.js could in principle shrink, and a
  // stub "Coming soon" group has nothing to show anyway).
  if (state.view === 'path') {
    const group = state.pathGroupId && findPathGroup(state.pathGroupId);
    if (!group || !group.sections.length) {
      state.view = 'pathGroups';
      state.pathGroupId = null;
    }
  }
  if (state.view === 'quiz' && state.moduleId && state.lessonId) {
    const lesson = getLesson(state.moduleId, state.lessonId);
    if (lesson) state.quizOptionOrder = shuffleQuizOrder(lesson);
  }
  if (state.view === 'lesson' && state.moduleId && state.lessonId) {
    shuffleLessonOptions(state.moduleId, state.lessonId);
  }
})();

// Entrance animations are keyed, not blanket: an element animates only on
// the render where its data-anim-key first appears. Re-rendering an
// unchanged exercise card therefore doesn't replay its reveal.
let seenAnimKeys = new Set();

// `duringViewTransition`: a view transition freezes a screenshot of the new
// page for its whole crossfade and only reveals the live, animating DOM
// once that finishes -- so a CSS entrance animation that starts the instant
// its class is added (the normal path here) ticks entirely out of sight
// during the crossfade, and is partway through -- or already done -- by
// the time it's actually visible. Unnoticeable for a single quick fade, but
// for the module page's multi-row staggered slide-in it read as "rows just
// there, some still mid-animation" instead of a clean cascade. So while a
// view transition is in flight, lesson rows are held back from `next` and
// returned instead, for the caller to set `.anim-in` on once the
// transition's `.finished` promise resolves -- everything else still
// enters immediately, since a lone fade being a few frames late is fine.
function markEntrances(duringViewTransition) {
  const next = new Set();
  const deferred = [];
  root.querySelectorAll('[data-anim-key]').forEach((el) => {
    const key = el.dataset.animKey;
    next.add(key);
    if (seenAnimKeys.has(key)) return;
    if (duringViewTransition && el.classList.contains('lesson-row')) {
      el.classList.add('entrance-pending');
      deferred.push(el);
      return;
    }
    el.classList.add('anim-in');
  });
  seenAnimKeys = next;
  return deferred;
}

// The page-turn crossfade is for moving between screens. Answering a
// question in place shouldn't fade the whole page out and back.
function navSignature() {
  return [state.launchScreen, state.view, state.moduleId, state.lessonId, state.practice && state.practice.index].join('|');
}
let lastNav = null;

function smoothScrollTo(container, targetY, duration = 850) {
  const startY = container.scrollTop;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;
  let startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    container.scrollTop = startY + distance * easedProgress;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

let titleObserver = null;
const revealedKeys = new Set();

// Left-to-right cascade within a row of cards (dashboard chapter cards, My
// Path's group cards): grouped by offsetTop (everything at the same top is
// the same visual row, however many columns the grid's auto-fit actually
// laid out at the current window width -- CSS alone can't know that), then
// given an increasing transition-delay by offsetLeft within that row, so
// the row's cards ease in one after another instead of all at once. Read by
// .chapter-card/.path-group-card's own transition-delay: var(--reveal-delay,
// 0s) in styles.css. Returns the row groups (offsetTop -> elements, already
// sorted left to right) so a caller can also find "row 1" for the
// never-needs-scrolling reveal below.
const CASCADE_STEP_MS = 70;
function assignCascadeDelays(cards) {
  const rows = new Map();
  cards.forEach((el) => {
    const top = Math.round(el.offsetTop);
    if (!rows.has(top)) rows.set(top, []);
    rows.get(top).push(el);
  });
  rows.forEach((rowEls) => {
    rowEls.sort((a, b) => a.offsetLeft - b.offsetLeft);
    rowEls.forEach((el, colIndex) => {
      el.style.setProperty('--reveal-delay', `${colIndex * CASCADE_STEP_MS}ms`);
    });
  });
  return rows;
}

// Reveals elements a beat after mount rather than in the same tick as the
// innerHTML swap -- committing straight to the end state in that same tick
// would mean nothing ever painted in between, so no transition (and no
// cascade) would be visible. A couple of rAFs pushes it to a frame *after*
// the hidden state has actually been painted.
function revealSoon(elements) {
  const pending = elements.filter((el) => !el.classList.contains('is-revealed'));
  if (!pending.length) return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      pending.forEach((el) => {
        const key = el.dataset.revealKey;
        el.classList.add('is-revealed');
        if (key) revealedKeys.add(key);
      });
    });
  });
}

function firstRowOf(rows) {
  let firstTop = null;
  rows.forEach((_, top) => {
    if (firstTop === null || top < firstTop) firstTop = top;
  });
  return firstTop === null ? [] : rows.get(firstTop);
}

function setupScrollObserver(changedScreen) {
  if (changedScreen) {
    revealedKeys.clear();
  }

  if (titleObserver) {
    titleObserver.disconnect();
    titleObserver = null;
  }

  const topbar = root.querySelector('.app-header');
  const scrollContainer = root.querySelector('.main-content') || root.querySelector('.main');
  const headerTitle = root.querySelector('.home-hero-title');

  // Lives on document.body, not inside #root, so a plain root.innerHTML
  // swap on the next render doesn't clean it up -- do that ourselves,
  // unconditionally, before possibly creating a fresh one.
  document.querySelectorAll('.title-dock-clone').forEach((el) => el.remove());

  if (!scrollContainer) return;

  // Header title reveal: a plain fade, not a tracked slide/morph. A clone
  // of the lesson's <h1> sits fixed at the header's own center and fades
  // in once the real title (still in normal flow, still what actually
  // scrolls) has scrolled up to roughly the header's bottom edge; fades
  // back out if you scroll back down past that point. No position/size
  // tracking, no concept-dots clone -- both of those existed in an earlier
  // version and made this fragile against layout changes elsewhere in the
  // header for very little payoff over a simple crossfade.
  if (state.view === 'lesson' && topbar && headerTitle) {
    const titleClone = document.createElement('div');
    titleClone.className = 'title-dock-clone';
    titleClone.setAttribute('aria-hidden', 'true');
    titleClone.innerHTML = headerTitle.innerHTML;
    document.body.appendChild(titleClone);

    const FADE_RANGE = 56;

    const updateHeaderState = () => {
      const topbarRect = topbar.getBoundingClientRect();
      const titleRect = headerTitle.getBoundingClientRect();
      // How far the title's top has pushed past the topbar's bottom edge
      // -- 0 or negative while it's still visibly below the topbar
      // (normal flow, no hand-off yet), growing positive the further past
      // it scrolls.
      const d = topbarRect.bottom - titleRect.top;

      titleClone.style.left = `${topbarRect.left + topbarRect.width / 2}px`;
      titleClone.style.top = `${topbarRect.top + topbarRect.height / 2}px`;
      titleClone.style.opacity = d <= 0 ? '0' : String(Math.min(1, d / FADE_RANGE));
    };

    updateHeaderState();
    scrollContainer.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState, { passive: true });

    titleObserver = new IntersectionObserver(() => {
      updateHeaderState();
    }, {
      root: scrollContainer,
      threshold: [0, 0.5, 1.0],
    });
    titleObserver.observe(headerTitle);
  }

  // 2. Scroll-triggered item reveal.
  //
  // Main column (.lesson-main -- concept text, headings, exercises): a
  // fixed line at the container's vertical center, i.e. an item slides in
  // once it's scrolled up past the middle of the page. Reaching that line
  // needs some room below the item to keep scrolling -- .lesson-main
  // itself only carries a little (see styles.css; it used to carry 50vh
  // for exactly this, at the cost of leaving that much blank scroll space
  // past the real end of the lesson). The `atBottom` check below is the
  // actual guarantee now: once you've scrolled as far as the container
  // will physically go, everything still unrevealed force-reveals
  // regardless of the line check, so a short last item can never get
  // stuck permanently invisible just because there wasn't quite enough
  // padding to carry its top up to the trigger line.
  //
  // Sidebar (.lesson-sidebar -- objectives/examples/progress cards): short
  // and sticky, so it gets its own item's-own-midpoint-vs-container-bottom
  // check instead of the fixed line -- always satisfiable regardless of how
  // little the page scrolls.
  //
  // The module page's lesson list is NOT part of this -- its rows just
  // play a plain staggered slide-in once on arrival (see .lesson-row in
  // styles.css and markEntrances() above), not a scroll-gated reveal.
  //
  // The dashboard's chapter grid (.chapter-grid -- chapter headers and
  // chapter cards) reuses the exact same "main column" fixed-line check as
  // .lesson-main, for the same reason: it's the top-level scrolling content
  // on its screen, not a short sticky column. .dashboard-page carries the
  // same 50vh trailing padding as .lesson-main so the last row of cards can
  // always reach the line too. .schedule-page (Schedule tab's "Up Next"
  // list) joins the same group and carries the same trailing padding, but
  // an individual item can override the line itself via data-reveal-line
  // (e.g. "0.75" instead of the 0.5 default) -- read per-element rather
  // than once for the whole container, since a single screen may want most
  // items revealing at the usual halfway point but one particular box
  // revealing later, deeper into the scroll. My Path's group-selection
  // screen (.path-groups-page) joins the same group too, one track section
  // at a time (see below) since it can hold two separate grids stacked on
  // one page rather than the dashboard's single one. The Schedule tab's own
  // Revision panel (.revision-module-list, "Pick a module") gets the same
  // per-row cascade below, even though it's a single-column list rather
  // than a grid -- cascadeGrid still applies cleanly (every "row" just
  // happens to hold one card, so the left-to-right stagger collapses to a
  // plain top-to-bottom reveal). My Path's own node list (.path-node-list --
  // lessons, checkpoints, milestones, section tests inside a group) joins
  // the same group too, but overrides the trigger line per-node via
  // data-reveal-line (see PATH_NODE_REVEAL_LINE in js/render.js) rather than
  // the usual 0.5 -- a node reveals at 65% down the container instead of
  // the halfway point.
  if (state.view === 'lesson' || state.view === 'dashboard' || state.view === 'schedule' || state.view === 'pathGroups' || state.view === 'path') {
    const lessonMain = root.querySelector('.lesson-main') || root.querySelector('.chapter-grid') || root.querySelector('.schedule-page') || root.querySelector('.path-groups-page') || root.querySelector('.path-node-list');
    const lessonSidebar = root.querySelector('.lesson-sidebar');

    // Row 1 of a grid like this is always on-screen without scrolling (the
    // grid can fit on-screen on a tall enough window), so gating it behind
    // the scroll trigger below would mean a learner who never scrolls never
    // sees it at all -- it has to reveal itself, cascade and all, right on
    // arrival instead. Which cards land in "row 1" depends on how many
    // columns the grid's auto-fit actually laid out at the current window
    // width, so it's measured here off the real DOM rather than guessed
    // from content structure (module/group counts per heading vary a lot
    // across courses and tracks).
    function cascadeGrid(grid, cardSelector) {
      if (!grid) return;
      const rows = assignCascadeDelays(Array.from(grid.querySelectorAll(cardSelector)));
      revealSoon(firstRowOf(rows));
    }
    if (state.view === 'dashboard') {
      cascadeGrid(lessonMain, '.chapter-card');
    } else if (state.view === 'pathGroups') {
      // Only the very first track's grid sits at the literal top of the
      // page -- it gets the same "row 1 reveals on arrival" treatment as
      // the dashboard. Every track after it (Advanced Path, stacked below
      // via separatorHtml) is genuinely off-screen on load, so forcing its
      // row too would skip the scroll gate entirely and defeat the point --
      // it only gets its cascade delays assigned, and reveals for real once
      // scrolled to the container's middle, same as the generic
      // handleScrollReveal check below.
      Array.from(root.querySelectorAll('.path-group-grid')).forEach((grid, i) => {
        if (i === 0) cascadeGrid(grid, '.path-group-card');
        else assignCascadeDelays(Array.from(grid.querySelectorAll('.path-group-card')));
      });
    } else if (state.view === 'schedule') {
      cascadeGrid(root.querySelector('.revision-module-list'), '.revision-module-row');
    }

    const handleScrollReveal = () => {
      const containerRect = scrollContainer.getBoundingClientRect();
      if (!containerRect.height) return;

      if (lessonMain) {
        // -1px slack for sub-pixel scroll positions that never quite hit
        // the exact integer max (fractional zoom/DPI scaling).
        const atBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 1;
        lessonMain.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
          const frac = el.dataset.revealLine ? parseFloat(el.dataset.revealLine) : 0.5;
          const triggerLine = containerRect.top + containerRect.height * frac;
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine || atBottom) {
            const key = el.dataset.revealKey;
            el.classList.add('is-revealed');
            if (key) revealedKeys.add(key);
          }
        });
      }

      if (lessonSidebar) {
        lessonSidebar.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top + rect.height / 2 <= containerRect.bottom) {
            const key = el.dataset.revealKey;
            el.classList.add('is-revealed');
            if (key) revealedKeys.add(key);
          }
        });
      }
    };

    handleScrollReveal();
    scrollContainer.addEventListener('scroll', handleScrollReveal, { passive: true });
  }
}

// Applies the active theme + accent + Arabic typeface to the document root:
// data-theme and data-accent each drive their own half of var(--color-*)/
// legacy-alias in styles.css (see the theme/accent blocks there) -- paper
// and ink accent are independent choices -- and the two custom properties
// drive every Arabic run app-wide (bdi/.ar, and h1-h3 via --font-ar-
// heading), not just the literal Settings specimen. Idempotent, so calling
// it on every rerender (cheap: four property writes) is simpler than
// tracking whether theme/accent/arabicFace actually changed since the last
// call.
function applyAppearance(state) {
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.dataset.accent = state.accent;
  const face = FACES[state.arabicFace] || FACES.naskh;
  document.documentElement.style.setProperty('--font-ar', face.body);
  document.documentElement.style.setProperty('--font-ar-heading', state.kufiHeadings ? KUFI_HEAD_FONT : face.body);
}

// focusSelector re-focuses a specific element after the innerHTML swap below
// destroys and recreates the whole DOM -- without it, every action (not just
// تركيب's) drops focus back to <body>, which is merely annoying for a mouse
// user but breaks a keyboard user's ability to place several تركيب chips in
// a row without re-tabbing from the top of the page each time. See
// tarkeebFocusSelector, the only current caller.
function rerender(focusSelector) {
  applyAppearance(state);
  const nav = navSignature();
  const changedScreen = nav !== lastNav;
  lastNav = nav;

  if (changedScreen) {
    revealedKeys.clear();
  }

  const html = render(state, MODULES, revealedKeys);

  const scrollContainer = root.querySelector('.main-content') || root.querySelector('.main');
  const prevScrollTop = changedScreen ? 0 : (scrollContainer?.scrollTop || 0);

  const usingViewTransition = changedScreen && !!document.startViewTransition;
  let deferredEntrances = [];
  const swap = () => {
    root.innerHTML = html;
    deferredEntrances = markEntrances(usingViewTransition);
    const newContainer = root.querySelector('.main-content') || root.querySelector('.main');
    if (newContainer && prevScrollTop) newContainer.scrollTop = prevScrollTop;
    setupScrollObserver(changedScreen);
    if (focusSelector) {
      const toFocus = root.querySelector(focusSelector);
      if (toFocus) toFocus.focus();
    }
  };
  if (usingViewTransition) {
    const transition = document.startViewTransition(swap);
    transition.finished.finally(() => {
      deferredEntrances.forEach((el) => {
        el.classList.remove('entrance-pending');
        el.classList.add('anim-in');
      });
    });
  } else {
    swap();
  }
  persistSoon(state);
}

function savePos() {
  if (!state.moduleId || !state.lessonId) return;
  if (state.view !== 'lesson' && state.view !== 'quiz') return;
  state.lessonPos[`${state.moduleId}_${state.lessonId}`] = { view: state.view };
}

// --- option shuffling ---------------------------------------------------
// Every question gets a fresh arrangement each time it is entered, so a
// question you have already solved doesn't show the answer sitting exactly
// where you left it. The order is regenerated on entry, not on every render:
// reshuffling under the cursor mid-answer would be maddening.

function shuffledIndices(n) {
  return shuffle(Array.from({ length: n }, (_, i) => i));
}

// Also seeds state.lessonExIndex to the first not-yet-passed item in the
// lesson's own exercise (see lessonExerciseCardHtml) -- a fresh view of the
// lesson (or a reload mid-lesson) should resume where exStates says the
// learner left off, not always restart the exercise box at question 1.
function shuffleLessonOptions(moduleId, lessonId) {
  const lesson = getLesson(moduleId, lessonId);
  if (!lesson) return;
  lesson.concepts.forEach((concept, i) => {
    if (!concept.exercise) return;
    state.optionOrder[conceptKey(moduleId, lessonId, i)] = shuffledIndices(concept.exercise.options.length);
  });
  if (lesson.exercise && lesson.exercise.items) {
    lesson.exercise.items.forEach((item, i) => {
      state.optionOrder[lessonExerciseItemKey(moduleId, lessonId, i)] = shuffledIndices(item.options.length);
    });
    state.lessonExIndex = firstUnpassedExerciseIndex(lesson, state.exStates, moduleId, lessonId);
  }
}

// Resets the lesson quiz to a fresh, from-question-1 attempt -- shared by
// "Start lesson" (landing straight on the quiz), "Continue to quiz", and
// "Retake quiz". Bumping quizAttempt keys the entrance animations so a
// retake's reshuffled options cascade in again instead of looking static.
function startQuizAttempt(lesson) {
  state.quizOptionOrder = shuffleQuizOrder(lesson);
  state.quizIndex = 0;
  state.quizSelected = null;
  state.quizRevealed = false;
  state.quizAnswers = [];
  state.quizShowResult = false;
  state.quizAttempt += 1;
}

// Resets a bank item's per-attempt display state fresh, whether it's an MCQ
// (new shuffled option order) or a تركيب (new chip-tray shuffle) -- used
// each time Practice Mode advances to a new question, even a repeat one.
function prepPracticeQuestion(key) {
  const entry = findBankItem(key);
  if (!entry) return;
  if (entry.item.kind === 'tarkeeb') {
    state.tarkeebState[key] = initTarkeeb(entry.item, entry.moduleId);
  } else {
    state.optionOrder[key] = shuffledIndices(entry.item.options.length);
  }
}

// Practice Mode's memory: bumps timesSeen/timesWrong and stamps lastSeen/
// lastCorrect for the item just answered, and appends to the session's log
// for the end-of-session review. Shared by every session source ('module',
// 'revision', 'path') -- Revision Mode and My Path deliberately read and
// write this SAME store rather than keeping a separate "last seen" memory,
// so answering a question here also resets its due countdown everywhere else.
// `label` is what the end-of-session review row shows for this question --
// the question's own text (prompt/sentence), never entry.item's "title"
// field, which is an internal book/page/exercise citation for content
// authoring and was never meant to reach a learner's screen.
function recordPracticeAnswer(key, label, pass) {
  const h = state.practiceHistory[key] || { timesSeen: 0, timesWrong: 0 };
  h.timesSeen += 1;
  if (!pass) h.timesWrong += 1;
  h.lastSeen = Date.now();
  h.lastCorrect = pass;
  state.practiceHistory[key] = h;
  state.practice.log.push({ key, title: label, correct: pass });
  if (pass) {
    state.practiceCorrectTotal = (state.practiceCorrectTotal || 0) + 1;
    checkPracticeVolumeBadges(state);
  }
}

// Shared by My Path (dedup key: the checkpoint/revision node's own id) and
// the Schedule tab's Revision "Vocab" mode (dedup key: a per-session token,
// see selectPracticeOption's revisionVocab branch below) -- ONE shared
// `count`/`learned` per vocab item regardless of which side is answering it,
// so progress made on the path counts toward Revision's own (higher) bar
// and vice versa. "learned" here is always the PATH's 5-correct threshold
// (VOCAB_LEARNED_COUNT) -- Revision's own 10-correct bar is a separate,
// higher-numbered check read directly off `count` (see
// buildRevisionVocabQueue in js/state.js), not a second boolean here, since
// a word "path-learned" at 5 correct must still keep resurfacing in
// Revision until it reaches 10. A wrong answer doesn't add to the count,
// but the item is still marked "seen" on ANY appearance (right or wrong),
// since that's what the seen/unseen split (both the path's and Revision's
// own) checks for, not the correct-count itself. The correct-count
// increment is deduped by seenNodeIds so re-answering within the same
// node/session visit can't double-count (the "seen" touch itself isn't
// deduped -- it's a plain boolean fact, not a counter).
function bumpVocabExposure(key, pass, dedupId) {
  const v = state.vocabExposure[key] || { count: 0, seenNodeIds: [], learned: false };
  if (pass && !v.seenNodeIds.includes(dedupId)) {
    v.seenNodeIds.push(dedupId);
    v.count += 1;
    if (v.count >= VOCAB_LEARNED_COUNT) v.learned = true;
  }
  state.vocabExposure[key] = v;
}

// My Path's own bookkeeping for non-vocab reps, layered on top of
// practiceHistory above rather than replacing it. Only called for
// source === 'path' sessions (see selectPracticeOption/checkTarkeeb) --
// vocab is handled by bumpVocabExposure above instead, from both sources.
//   - mcq/tarkeeb/lesson-content-quiz: a wrong answer (anywhere on the path)
//     starts tracking the card; it's "learned" once it's been answered
//     CORRECTLY inside PATH_REP_LEARNED_COUNT separate 'revision'-type
//     nodes specifically (not checkpoints) -- a later wrong answer does not
//     reset the count, since the rule is "at least N revision nodes", not
//     "N in a row".
function recordPathRepAnswer(key, kind, pass, node) {
  if (kind === 'vocab') {
    bumpVocabExposure(key, pass, node.id);
    return;
  }
  if (!pass) {
    if (!state.pathReps[key]) state.pathReps[key] = { count: 0, seenNodeIds: [], learned: false };
    return;
  }
  const r = state.pathReps[key];
  if (r && !r.learned && node.type === 'revision' && !r.seenNodeIds.includes(node.id)) {
    r.count += 1;
    r.seenNodeIds.push(node.id);
    if (r.count >= PATH_REP_LEARNED_COUNT) r.learned = true;
  }
}

// A milestone node auto-completes (and awards its badge) the instant it
// becomes "current" -- i.e. every interactive node before it on the path is
// already done -- rather than needing its own click-to-claim step. Safe to
// call after any path-progress-changing action (awardBadge no-ops once a
// badge is already owned, and pathNodeStatus writes are idempotent).
// Only ever meaningful for whichever group's map is currently open --
// there's nothing to auto-complete on the group-selection screen itself.
function checkPathMilestones() {
  const group = state.pathGroupId && findPathGroup(state.pathGroupId);
  if (!group) return;
  const skeleton = groupSkeleton(group);
  const idx = firstUnfinishedPathNodeIndex(skeleton, state.pathNodeStatus, state.completed);
  const node = skeleton[idx];
  if (node && node.type === 'milestone' && !(state.pathNodeStatus[node.id] && state.pathNodeStatus[node.id].done)) {
    state.pathNodeStatus[node.id] = { done: true, at: todayISO() };
    if (node.badgeId) awardBadge(state, node.badgeId);
  }
}

// --- Grading: Mastery (lesson or checkpoint) and My Path's other checkpoint
// types all end with a pass/fail check against pathCheckpointPassRatio, and
// all of them can end EARLY the instant passing becomes mathematically
// impossible (see maybeEndSessionEarly) rather than at the natural end of
// the queue -- these three functions are shared by both paths.

function finalizeMasteryV2() {
  const p = state.practice;
  const passed = p.log.length > 0 && p.log.every((l) => l.correct);
  const mkey = masteryKey(p.moduleId, p.lessonId);
  const prev = state.masteryV2[mkey] || { attempts: 0 };
  state.masteryV2[mkey] = { passed, attempts: prev.attempts + 1, lastAttemptAt: Date.now() };
  state.view = 'masteryV2Complete';
}

// Only ever called for source === 'path' sessions. A section test's badge
// only fires on its NORMAL pass, never a Mastery attempt -- a checkpoint's
// Mastery variant is a bonus layer that never touches pathNodeStatus or
// unlocking (see state.pathCheckpointMastery's own comment in js/state.js).
// Doesn't itself set state.view -- the caller (nextPracticeQuestion) does,
// once it's decided the session is actually over.
function finalizePathSession() {
  const p = state.practice;
  const node = findPathNode(p.nodeId);
  if (!node) return;
  const correct = p.log.filter((l) => l.correct).length;
  const total = p.log.length;
  const passed = total > 0 && correct / total >= pathCheckpointPassRatio(node, p.mastery);
  if (passed) {
    if (p.mastery) {
      state.pathCheckpointMastery[node.id] = { passed: true, at: todayISO(), score: { correct, total } };
    } else {
      state.pathNodeStatus[node.id] = { done: true, at: todayISO(), score: { correct, total } };
      if ((node.type === 'sectionTest' || node.type === 'groupTest') && node.badgeId) awardBadge(state, node.badgeId);
    }
  }
  checkPathMilestones();
}

// req: "if the user completes the tests for unlocking the individual
// courses, the path gets unlocked anyway and vice versa" -- called after any
// unlock-test pass to check whether the reciprocal side now qualifies too.
// Natural full-completion already satisfies isCourseUnlocked/isTrackUnlocked
// with no flag at all (see their own "OR fully complete" branch), so this
// only has to watch the TEST-unlock flags reaching full coverage of one side
// or the other.
function syncAdvancedUnlocks() {
  const annahw = COURSES.find((c) => c.id === 'annahw');
  const sarfAdvanced = COURSES.find((c) => c.id === 'sarf-advanced');
  const advancedTrack = PATH_TRACKS.find((t) => t.id === 'advanced');
  if (annahw && sarfAdvanced
    && isCourseUnlocked(annahw, state.completed, state.unlockedCourses)
    && isCourseUnlocked(sarfAdvanced, state.completed, state.unlockedCourses)) {
    state.unlockedTracks.advanced = true;
  }
  if (advancedTrack && isTrackUnlocked(advancedTrack, state.completed, state.unlockedTracks)) {
    state.unlockedCourses.annahw = true;
    state.unlockedCourses['sarf-advanced'] = true;
  }
}

// A module skip-ahead test jumps within a single course, so unlike course/
// track unlocks it has no "OR fully complete" fallback of its own to fall
// back on for the modules in between (isModuleUnlocked only special-cases
// the target moduleId -- see its own comment in content/index.js). Without
// this, the earlier modules of the course would sit permanently locked even
// though the learner just proved they know the material up through here.
// Backfills every lesson of every module BEFORE the target as complete;
// the target module itself is left untouched -- unlocked, not completed --
// since passing it is the whole point of the test.
function completePreviousModulesInCourse(targetModuleId) {
  const course = COURSES.find((c) => c.modules.some((m) => m.id === targetModuleId));
  if (!course) return;
  const targetIdx = course.modules.findIndex((m) => m.id === targetModuleId);
  for (const mod of course.modules.slice(0, targetIdx)) {
    for (const lesson of mod.lessons) markLessonComplete(mod.id, lesson.id);
  }
}

// Skip-ahead unlock test: passes at UNLOCK_TEST_PASS_RATIO, writing to
// unlockedCourses/unlockedTracks/unlockedModules. Course/track unlocks
// deliberately NEVER touch state.completed (req: unlocking the advanced
// version of a course "shouldn't auto complete the introductory version so
// that every module gets unlocked" -- the intro course/path stays exactly as
// unfinished as it was; only the advanced side's own gate opens). A module
// unlock is different: it's a skip within one course, not a jump to another
// course/path, so it backfills that course's earlier lessons as complete
// (see completePreviousModulesInCourse) rather than leaving a gap.
function finalizeUnlockTest() {
  const p = state.practice;
  const total = p.log.length;
  const correct = p.log.filter((l) => l.correct).length;
  const passed = total > 0 && correct / total >= UNLOCK_TEST_PASS_RATIO;
  if (!passed) return;
  if (p.unlockKind === 'course') state.unlockedCourses[p.targetId] = true;
  else if (p.unlockKind === 'track') state.unlockedTracks[p.targetId] = true;
  else if (p.unlockKind === 'module') {
    state.unlockedModules[p.targetId] = true;
    completePreviousModulesInCourse(p.targetId);
  }
  syncAdvancedUnlocks();
}

// The pass ratio the CURRENTLY active session needs to clear, or null if it
// isn't graded at all (ordinary module Practice Mode, the Schedule tab's
// Revision Mode -- neither has a pass/fail concept).
function activeSessionPassRatio(p) {
  if (p.source === 'masteryV2') return 1;
  if (p.source === 'unlockTest') return UNLOCK_TEST_PASS_RATIO;
  if (p.source === 'path') {
    const node = findPathNode(p.nodeId);
    return node ? pathCheckpointPassRatio(node, p.mastery) : null;
  }
  return null;
}

function markLessonComplete(moduleId, lessonId) {
  state.completed[moduleId] = state.completed[moduleId] || {};
  state.completed[moduleId][lessonId] = todayISO();
}

// The XP toast auto-dismisses like the prototype's -- awardXp only sets the
// text, the caller schedules the clear (a fresh award restarts the clock).
let toastTimer = null;
function scheduleToastClear() {
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    state.toast = null;
    rerender();
  }, 1800);
}

// The lesson exercise box's single-question-at-a-time flow: a correct
// answer holds the "Correct" feedback on screen briefly before the box's
// content swaps to the next question (see lessonExerciseCardHtml in
// render.js, which reads state.lessonExIndex rather than re-deriving it, so
// this delay is the only thing that actually advances it).
let lessonExAdvanceTimer = null;
function scheduleLessonExerciseAdvance() {
  clearTimeout(lessonExAdvanceTimer);
  // state.lessonExIndex is a single shared field, not scoped to a lesson --
  // if the learner navigates away before this fires, applying a stale
  // advance would corrupt whatever they're looking at now (e.g. skipping a
  // question in a different lesson's exercise, freshly seeded by
  // shuffleLessonOptions) or force an unwanted rerender of an unrelated
  // screen. Remembering which lesson this timer belongs to and checking
  // it's still the active one on fire is the fix.
  const moduleId = state.moduleId;
  const lessonId = state.lessonId;
  lessonExAdvanceTimer = setTimeout(() => {
    if (state.view !== 'lesson' || state.moduleId !== moduleId || state.lessonId !== lessonId) return;
    state.lessonExIndex += 1;
    rerender();
  }, 1100);
}

// --- tarkeeb helpers ----------------------------------------------------

function initTarkeeb(item, moduleId) {
  // New تركيب schema (content-fstu units 2+, cells[]/rows[] diagram) vs the
  // original flat words[]/labels[] -- see flattenTarkeebSlots' comment in
  // content/index.js. Both produce the same tarkeebState shape; only how
  // chipPool/placements are sized differs, since the diagram's "slots" are
  // label spans (possibly fewer than item.cells.length), not one per word.
  if (item.cells) {
    // Blank slots for every unlabeled cell are an annahw-only thing -- see
    // renderTarkeebDiagram's matching comment in js/render.js.
    const fillBlanks = courseIdForModule(moduleId) === 'annahw';
    const { slots } = flattenTarkeebSlots(item, { fillBlanks });
    // Blank slots (role: null) have no chip of their own -- correct is
    // leaving them empty, so they contribute nothing to the tray.
    const chipPool = slots.filter((s) => s.role !== null).map((s) => s.role).concat(item.distractors || []);
    return {
      chipPool,
      chipOrder: shuffle(chipPool.map((_, i) => i)),
      placements: new Array(slots.length).fill(null),
      selectedChip: null,
      submitted: false,
      feedback: null,
      passed: false,
    };
  }
  const chipPool = item.labels.concat(item.distractors || []);
  return {
    chipPool,
    chipOrder: shuffle(chipPool.map((_, i) => i)),
    placements: new Array(item.words.length).fill(null),
    selectedChip: null,
    submitted: false,
    feedback: null,
    passed: false,
  };
}

function ensureTarkeeb(key, item, moduleId) {
  if (!state.tarkeebState[key]) state.tarkeebState[key] = initTarkeeb(item, moduleId);
  return state.tarkeebState[key];
}

// The active session's source decides which pool findBankItem/prepPracticeQuestion/
// checkTarkeeb etc. all resolve keys against -- 'module' (undefined source,
// the original per-module Practice Mode) looks up practiceModuleId/moduleId
// as before; 'revision' is either pinned to one (fully completed) module's
// whole تركيب+mcq+quiz pool (same shape as 'masteryV2' just one level up) or,
// for a 'revisionVocab' session, the whole course's unlocked vocab pool
// (kind distinguishes the two -- see startRevision/startRevisionVocab);
// 'path' resolves against whichever node's window is currently active,
// spanning both fstu and sarf. Everything downstream of this
// (selectPracticeOption, checkTarkeeb, tarkeebChipClick...) is unchanged and
// source-agnostic.
function bankPool() {
  const p = state.practice;
  if (p && p.source === 'revision') {
    return p.kind === 'revisionVocab' ? getUnlockedVocabPool(state.completed) : moduleRevisionPool(p.moduleId, state.completed);
  }
  if (p && p.source === 'masteryV2') {
    return masteryV2Pool(p.moduleId, p.lessonId);
  }
  if (p && p.source === 'path') {
    const node = findPathNode(p.nodeId);
    return node ? pathFullPool(node) : [];
  }
  if (p && p.source === 'unlockTest') {
    return p.unlockKind === 'course' ? courseUnlockTestPool(p.targetId)
      : p.unlockKind === 'track' ? trackUnlockTestPool(p.targetId)
        : moduleSkipTestPool(p.targetId);
  }
  return getBankPool(state.practiceModuleId || state.moduleId, state.completed);
}

function findBankItem(key) {
  return bankPool().find((p) => p.key === key);
}

// Where a practice-family session should land once it ends with no review
// to show (or once its review screen is dismissed) -- see endPracticeSession/
// closePracticeReview. `p` is the full session (not just its source) because
// an 'unlockTest' session carries its own exitView, set when it was started
// (see startUnlockTest): 'dashboard' for a module-skip test (opened from a
// course's chapter grid), or null for a course/track test (opened from the
// launch screen / My Path group list) -- a null exitView flips
// state.launchScreen back on instead of naming a view, since that's what
// actually shows those cards again.
function exitPracticeSession(p) {
  const src = p && p.source;
  if (src === 'unlockTest') {
    if (p.exitView) state.view = p.exitView;
    else state.launchScreen = true;
    return;
  }
  if (src === 'path') { state.view = 'path'; return; }
  if (src === 'masteryV2') { state.view = state.pathActive ? 'path' : 'module'; return; }
  if (src === 'revision') { state.view = 'schedule'; return; }
  state.view = 'module';
}

// --- action handlers ------------------------------------------------------
// A handler returning `false` means "nothing changed, skip the re-render".

// Used by the launch screen's chooseCourse when the picked course isn't
// already active: resets to that course's dashboard -- there's no
// cross-course "resume position" to preserve, and any in-flight practice
// session belongs to the course being left.
function activateCourse(id) {
  setActiveCourse(id);
  state.courseId = id;
  state.view = 'dashboard';
  state.moduleId = null;
  state.lessonId = null;
  state.practice = null;
  state.practiceSetupOpen = false;
  state.lessonPreviewId = null;
  state.pathActive = false;
  state.pathHome = false;
}

const actions = {
  openDashboard() {
    state.view = 'dashboard';
    state.moduleId = null;
    state.lessonId = null;
    state.practice = null;
    state.pathActive = false;
    state.pathHome = false;
  },
  // Header's course button (see courseSwitchHtml in js/render.js) -- sends
  // the learner back to the launch screen's course picker rather than
  // switching in place. Leaves view/moduleId/lessonId untouched, so
  // chooseCourse picking this same course again just resumes here exactly.
  openLaunch() {
    state.launchScreen = true;
  },
  // Launch screen's course cards (see js/render.js launchHtml), shown ahead
  // of Home on every boot. Picking the already-active course just dismisses
  // the splash onto wherever sanitizeBootNav already resumed to above --
  // picking a different one resets to that course's dashboard, same as the
  // header switcher. Bug fix: "wherever resumed to" must NOT include My
  // Path -- a path lesson temporarily activates whichever course it
  // belongs to (see enterPathLesson), so state.courseId can equal a course
  // card's id purely because that's the course a path lesson last touched,
  // even though state.view is actually 'path'/'pathGroups'. Without this,
  // clicking a course card that happens to match would silently dump the
  // learner back into My Path instead of that course's own dashboard.
  chooseCourse(el) {
    const id = el.dataset.courseId;
    const course = COURSES.find((c) => c.id === id);
    // Defense in depth -- a locked course's own launch card already
    // dispatches openUnlockPrompt instead of this action (see
    // launchCourseCardHtml in js/render.js), but guard here too in case
    // state.completed/unlockedCourses changes out from under a stale render.
    if (!course || !isCourseUnlocked(course, state.completed, state.unlockedCourses)) return false;
    state.launchScreen = false;
    // state.pathHome (not state.view) is the durable "was the learner in My
    // Path" signal -- state.view alone would miss a Settings/Schedule/
    // Achievements detour in between (see state.pathHome's definition in
    // js/state.js), which used to let a leftover state.courseId from a path
    // lesson silently no-op this click instead of activating the course.
    const resumingFromPath = state.pathHome;
    if (id !== state.courseId || resumingFromPath) activateCourse(id);
  },
  openModule(el) {
    const moduleId = el.dataset.moduleId;
    // Defense in depth -- a locked module's own dashboard card already
    // dispatches openUnlockPrompt instead of this action (see dashboardHtml
    // in js/render.js), but guard here too, same reasoning as chooseCourse.
    if (!isModuleUnlocked(moduleId, state.completed, state.unlockedModules)) return false;
    state.moduleId = moduleId;
    state.view = 'module';
    state.lessonId = null;
    state.practiceSetupOpen = false;
    state.pathActive = false;
    state.pathHome = false;
  },
  // --- My Path ---
  // The launch screen's "My Path" banner always lands on the group list
  // (req: a separate "choose a group" screen) -- never straight into a
  // specific group's map, even a resumed one, so the group list stays a
  // real hub you can always get back to from the very top.
  openMyPath() {
    state.launchScreen = false;
    state.view = 'pathGroups';
    state.pathGroupId = null;
    state.pathActive = false;
    state.pathHome = true;
    state.practice = null;
  },
  openPathGroup(el) {
    const group = findPathGroup(el.dataset.groupId);
    if (!group || !group.sections.length) return false; // not yet built ("Coming soon")
    // Defense in depth -- a locked track's own group cards already dispatch
    // openUnlockPrompt instead of this action (see pathGroupCardHtml), but
    // guard here too, same reasoning as chooseCourse above.
    const track = PATH_TRACKS.find((t) => t.groups.includes(group));
    if (track && !isTrackUnlocked(track, state.completed, state.unlockedTracks)) return false;
    state.pathGroupId = group.id;
    state.view = 'path';
    state.pathActive = false;
    state.pathHome = true;
    state.practice = null;
  },
  // Header's "My Path" slot when Settings/Schedule/Achievements is a detour
  // off of My Path (state.pathHome) rather than off of a course -- resumes
  // exactly where the learner left off (their group's map if they'd opened
  // one, otherwise the group list), unlike openMyPath which always resets
  // to the group list.
  returnToPath() {
    state.launchScreen = false;
    state.view = state.pathGroupId ? 'path' : 'pathGroups';
  },
  // --- Advanced-course/path/module unlock (see content/index.js's
  // isCourseUnlocked/isModuleUnlocked, content/paths.js's isTrackUnlocked) ---
  openUnlockPrompt(el) {
    state.unlockPrompt = { type: el.dataset.targetType, id: el.dataset.targetId };
  },
  closeUnlockPrompt() {
    state.unlockPrompt = null;
  },
  // Builds the skip-ahead unlock test's pool (see courseUnlockTestPool/
  // trackUnlockTestPool/moduleSkipTestPool) and enters it as an ordinary
  // graded practice session (source: 'unlockTest') -- passing it at
  // UNLOCK_TEST_PASS_RATIO is what actually records the unlock, in
  // finalizeUnlockTest below, once the session ends.
  startUnlockTest(el) {
    const p = state.unlockPrompt;
    if (!p) return false;
    const subPools = p.type === 'course' ? courseUnlockTestSubPools(p.id)
      : p.type === 'track' ? trackUnlockTestSubPools(p.id)
        : moduleSkipTestSubPools(p.id);
    const length = p.type === 'module' ? MODULE_SKIP_TEST_LENGTH : UNLOCK_TEST_LENGTH;
    const queue = buildUnlockTestQueue(subPools, length);
    if (!queue.length) return false;
    state.unlockPrompt = null;
    state.launchScreen = false;
    // Course/track prompts are only ever opened from the launch screen or
    // My Path's group list, both reached via launchScreen -- so an
    // unset exitView (see exitPracticeSession) sends those back there.
    // A module prompt is opened from a course's own chapter grid instead.
    const exitView = p.type === 'module' ? 'dashboard' : null;
    state.practice = {
      source: 'unlockTest', unlockKind: p.type, targetId: p.id, kind: 'unlockTest',
      moduleId: null, lessonId: null, exitView,
      queue, index: 0, log: [], startedAt: Date.now(),
      selected: undefined, submitted: false, correct: false, combo: 0, xpGained: 0,
    };
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  // A failed unlock test offers a fresh, freshly-shuffled attempt over the
  // same pool -- never a "redo what you missed" subset, same reasoning as
  // retryMasteryV2.
  retryUnlockTest() {
    const p = state.practice;
    if (!p || p.source !== 'unlockTest') return false;
    const subPools = p.unlockKind === 'course' ? courseUnlockTestSubPools(p.targetId)
      : p.unlockKind === 'track' ? trackUnlockTestSubPools(p.targetId)
        : moduleSkipTestSubPools(p.targetId);
    const length = p.unlockKind === 'module' ? MODULE_SKIP_TEST_LENGTH : UNLOCK_TEST_LENGTH;
    const queue = buildUnlockTestQueue(subPools, length);
    if (!queue.length) return false;
    p.queue = queue;
    p.index = 0;
    p.log = [];
    p.selected = undefined;
    p.submitted = false;
    p.correct = false;
    p.combo = 0;
    p.xpGained = 0;
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  backToPathGroups() {
    state.view = 'pathGroups';
    state.pathGroupId = null;
    state.practice = null;
  },
  // A path lesson node: switches the ambient active course if needed (every
  // lesson/module helper in content/index.js resolves against the single
  // mutable MODULES binding -- see setActiveCourse's own comment there),
  // then opens the exact same "Start lesson" preview modal as a module
  // page's lesson row (see openLessonPreview) -- lessonPreviewHtml already
  // branches on `complete` to also offer Mastery there.
  enterPathLesson(el) {
    const courseId = el.dataset.courseId;
    if (courseId !== state.courseId) {
      setActiveCourse(courseId);
      state.courseId = courseId;
    }
    state.moduleId = el.dataset.moduleId;
    state.pathActive = true;
    state.lessonPreviewId = el.dataset.lessonId;
  },
  backToPath() {
    state.view = 'path';
    state.pathActive = false;
    state.practice = null;
    checkPathMilestones();
  },
  // Every checkpoint/section-test row opens pathCheckpointSetupHtml's popout
  // first (openPathCheckpointSetup below) -- a vocab direction picker for
  // vocabCheckpoint, and once a node's already been passed once, a choice
  // between redoing it normally or attempting its double-length, 100%-
  // required Mastery variant (data-mastery="1" on this same action).
  startPathCheckpoint(el) {
    const node = findPathNode(el.dataset.nodeId);
    if (!node) return false;
    const mastery = el.dataset.mastery === '1';
    const ctx = {
      practiceHistory: state.practiceHistory, pathReps: state.pathReps, vocabExposure: state.vocabExposure,
      vocabDirection: state.pathVocabDirection || 'en-ar', mastery,
    };
    let queue;
    if (node.type === 'mcqCheckpoint') queue = buildPathMcqCheckpointQueue(node, ctx);
    else if (node.type === 'vocabCheckpoint') queue = buildPathVocabCheckpointQueue(node, ctx);
    else if (node.type === 'tarkeebCheckpoint') queue = buildPathTarkeebCheckpointQueue(node, ctx);
    else if (node.type === 'revision') queue = buildPathRevisionQueue(node, ctx);
    else if (node.type === 'sectionTest') queue = buildPathSectionTestQueue(node, ctx);
    else return false;
    if (!queue.length) return false;
    state.pathCheckpointSetupNodeId = null;
    state.practice = {
      source: 'path', kind: node.type, nodeId: node.id, moduleId: null, lessonId: null, mastery,
      queue, index: 0, log: [], startedAt: Date.now(),
      selected: undefined, submitted: false, correct: false, combo: 0, xpGained: 0,
    };
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  openPathCheckpointSetup(el) {
    state.pathCheckpointSetupNodeId = el.dataset.nodeId;
  },
  closePathCheckpointSetup(el, e) {
    if (e && e.target !== el) return false;
    state.pathCheckpointSetupNodeId = null;
  },
  setPathVocabDirection(el) {
    state.pathVocabDirection = el.dataset.vocabType;
  },
  // Toggles the setup popout under the module page's button. Coming from
  // anywhere else (lesson-complete, the session review's "Practice again"),
  // it always opens rather than toggles, since there's nothing open yet.
  openPractice() {
    const moduleId = state.practice ? state.practice.moduleId : state.moduleId;
    const alreadyOpenHere = state.view === 'module' && state.moduleId === moduleId && state.practiceSetupOpen;
    state.practice = null;
    state.moduleId = moduleId;
    state.view = 'module';
    state.practiceModuleId = moduleId;
    state.practiceSetupOpen = !alreadyOpenHere;
    state.pathActive = false;
    if (!state.practiceSetupKind) state.practiceSetupKind = 'mcq';
  },
  // Plays the popout's entrance animation in reverse before actually
  // closing it -- an immediate state flip would just yank it out of the
  // DOM on the next render, with no exit motion at all. Returns false to
  // skip that immediate rerender; the real state change (and the rerender
  // that removes the popout for good) happens once the animation finishes.
  closePracticeSetup() {
    const popout = root.querySelector('.practice-popout');
    if (popout && !popout.classList.contains('closing')) {
      popout.classList.add('closing');
      setTimeout(() => {
        state.practiceSetupOpen = false;
        rerender();
      }, 260);
      return false;
    }
    state.practiceSetupOpen = false;
  },
  setPracticeTab(el) {
    state.practiceSetupKind = el.dataset.kind;
  },
  setPracticeVocabType(el) {
    state.practiceVocabType = el.dataset.vocabType;
  },
  startPractice(el) {
    const kind = el.dataset.kind;
    const count = +el.dataset.count;
    const pool = kind === 'tarkeeb'
      ? getTarkeebPool(state.practiceModuleId, state.completed)
      : kind === 'vocab'
        ? getVocabPool(state.practiceModuleId, state.completed, state.practiceVocabType || 'en-ar')
        : getMcqPool(state.practiceModuleId, state.completed);
    if (!pool.length) return false;
    const queue = buildPracticeQueue(pool, state.practiceHistory, count);
    state.practiceSetupOpen = false;
    state.practice = {
      kind,
      moduleId: state.practiceModuleId,
      queue,
      index: 0,
      log: [],
      startedAt: Date.now(),
      selected: undefined,
      submitted: false,
      correct: false,
      combo: 0,
      xpGained: 0,
    };
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  // Reveal-on-click, matching the lesson quiz: choosing an option grades
  // and reveals it immediately, no separate Check step. Guards on
  // p.submitted only, not on a session-level "kind" -- a My Path revision
  // node mixes mcq/vocab items with تركيب ones in the SAME queue, so which
  // widget is even on screen for the current question is decided per-
  // question (see practiceHtml's entry.item.kind check), not per-session.
  selectPracticeOption(el) {
    const p = state.practice;
    if (!p || p.submitted) return false;
    const key = p.queue[p.index];
    const entry = findBankItem(key);
    if (!entry) return false;
    const selected = +el.dataset.option;
    const { pass } = checkMcq(entry.item, selected);
    p.selected = selected;
    p.submitted = true;
    p.correct = pass;
    recordPracticeAnswer(key, entry.item.prompt, pass);
    if (p.source === 'path') {
      const node = findPathNode(p.nodeId);
      if (node) recordPathRepAnswer(key, entry.item.kind, pass, node);
    } else if (p.source === 'revision' && p.kind === 'revisionVocab') {
      bumpVocabExposure(key, pass, `revision:${p.startedAt}`);
    }
    if (pass) {
      p.combo = (p.combo || 0) + 1;
      const gained = xpForPracticeCorrect(p.combo);
      p.xpGained = (p.xpGained || 0) + gained;
      awardXp(state, gained);
      scheduleToastClear();
    } else {
      p.combo = 0;
    }
    // A graded session doesn't end HERE even if this answer just made
    // passing impossible -- the learner still sees this question's own
    // feedback (rendered below from p.submitted/p.correct) and clicks
    // through it themselves; nextPracticeQuestion is what actually decides
    // to stop, once they click "See Results" (see practiceHtml's `doomed`
    // check in js/render.js for where that label comes from).
  },
  nextPracticeQuestion() {
    const p = state.practice;
    if (!p) return false;

    // Computed BEFORE advancing p.index, off the answer just given (p.log
    // already includes it) -- req: falling under the required percentage
    // shouldn't cut the learner off mid-question; they see this question's
    // own feedback first (practiceHtml already labeled its button "See
    // Results" once this became true -- see its own `doomed` comment), and
    // clicking THAT is what actually ends the session, right here.
    const passRatio = activeSessionPassRatio(p);
    const doomed = passRatio !== null && !stillPassable(p, passRatio);

    p.index += 1;

    // Mastery is a single fixed-length pass over the whole lesson pool --
    // unlike the old streak-based Mastery Mode it never refills/loops; once
    // the queue is exhausted (or passing is no longer possible) the attempt
    // is graded as a whole (100% or nothing) and the learner lands on
    // masteryV2Complete, not the ordinary practiceReview screen.
    if (p.source === 'masteryV2') {
      if (p.index >= p.queue.length || doomed) {
        finalizeMasteryV2();
        return;
      }
      p.selected = undefined;
      p.submitted = false;
      p.correct = false;
      prepPracticeQuestion(p.queue[p.index]);
      return;
    }

    if (p.index >= p.queue.length || doomed) {
      if (p.source === 'path') finalizePathSession();
      else if (p.source === 'unlockTest') finalizeUnlockTest();
      state.view = 'practiceReview';
      return;
    }
    p.selected = undefined;
    p.submitted = false;
    p.correct = false;
    prepPracticeQuestion(p.queue[p.index]);
  },
  // 'module' (undefined source) exits back to the module page it was
  // launched from, matching the original behaviour; 'revision' has no
  // module page to return to, so it exits to the Schedule tab instead;
  // 'path' always returns to the path map; 'masteryV2' returns to wherever
  // it was launched from (the path map if pathActive, else the module page)
  // -- both mid-session (no answers yet) and after reviewing.
  endPracticeSession() {
    if (state.practice && state.practice.log.length > 0) {
      state.view = 'practiceReview';
    } else {
      exitPracticeSession(state.practice);
      state.practice = null;
    }
  },
  closePracticeReview() {
    exitPracticeSession(state.practice);
    state.practice = null;
  },

  // --- Schedule tab: Deadline / Revision / Mastery ---
  // These three are always reachable detours off of whatever the learner
  // was doing (a course dashboard or My Path -- see state.pathHome), so
  // unlike openDashboard/activateCourse they deliberately leave view-
  // adjacent context (courseId, pathGroupId, pathHome) untouched. They do
  // still clear a live practice/mastery session, though: nothing here ever
  // routes back INTO one (only exitPracticeSession, reached from the
  // session's own in-page controls, knows how), so leaving one via these
  // tabs would otherwise strand state.practice/pathActive as stale data a
  // later, unrelated action could misread (e.g. openPractice picking up an
  // abandoned session's moduleId -- see openPractice below).
  openSchedule() {
    state.view = 'schedule';
    state.practice = null;
    state.pathActive = false;
  },
  openSettings() {
    state.view = 'settings';
    state.practice = null;
    state.pathActive = false;
  },
  openAchievements() {
    state.view = 'achievements';
    state.practice = null;
    state.pathActive = false;
  },
  pickTheme(el) {
    state.theme = el.dataset.theme;
  },
  pickAccent(el) {
    state.accent = el.dataset.accent;
  },
  pickFace(el) {
    state.arabicFace = el.dataset.face;
  },
  toggleKufiHeadings() {
    state.kufiHeadings = !state.kufiHeadings;
  },
  resetAppearance() {
    state.theme = 'manuscript';
    state.accent = 'gold';
    state.arabicFace = 'naskh';
    state.kufiHeadings = false;
  },
  // Home hero's "Continue/Start lesson N" -- unlike openLessonPreview
  // (reached only from inside a module page, where state.moduleId is
  // already that module), the hero can fire from the dashboard with no
  // module context set yet, so this sets it first.
  continueLesson(el) {
    state.moduleId = el.dataset.moduleId;
    state.lessonPreviewId = el.dataset.lessonId;
    state.pathActive = false;
    state.pathHome = false;
  },
  // Home hero's "Review N cards" -- same moduleId problem as continueLesson
  // above, for openPractice's own reliance on state.moduleId already being
  // set to the module it should open Practice Mode's setup popout for.
  reviewModule(el) {
    state.moduleId = el.dataset.moduleId;
    actions.openPractice();
  },
  setScheduleTab(el) {
    state.scheduleTab = el.dataset.tab;
    state.scheduleTabAttempt += 1;
  },
  // Top-level Revision toggle -- 'module' (the module quiz below) or
  // 'vocab' (startRevisionVocab further down). Only offered at all when
  // courseHasVocab() (see scheduleRevisionHtml in js/render.js).
  setScheduleRevisionKind(el) {
    state.scheduleRevisionKind = el.dataset.kind === 'vocab' ? 'vocab' : 'module';
  },
  setScheduleRevisionMode(el) {
    state.scheduleRevisionMode = el.dataset.mode === 'random' ? 'random' : 'pick';
  },
  setScheduleRevisionModule(el) {
    state.scheduleRevisionModuleId = el.dataset.moduleId;
  },
  setScheduleRevisionVocabDirection(el) {
    state.scheduleRevisionVocabDirection = el.dataset.vocabType === 'ar-en' ? 'ar-en' : 'en-ar';
  },
  // Builds and enters a 30-question quiz (20 mcq + 10 تركيب, see
  // buildModuleRevisionQueue) over a single fully-completed module -- either
  // the one picked in the UI, or a random pick among eligible modules when
  // scheduleRevisionMode is 'random'. Disabled in the UI (see
  // scheduleRevisionHtml) until a module is actually resolvable, so the
  // defensive checks here are a backstop, not the primary gate.
  startRevision() {
    const eligible = MODULES.filter((m) => isModuleComplete(m.id, state.completed));
    if (!eligible.length) return false;
    let moduleId = null;
    if (state.scheduleRevisionMode === 'random') {
      moduleId = eligible[Math.floor(Math.random() * eligible.length)].id;
    } else if (eligible.some((m) => m.id === state.scheduleRevisionModuleId)) {
      moduleId = state.scheduleRevisionModuleId;
    }
    if (!moduleId) return false;
    const queue = buildModuleRevisionQueue(moduleId, state.completed);
    if (!queue.length) return false;
    state.practice = {
      source: 'revision', kind: 'revision', moduleId, lessonId: null,
      queue, index: 0, log: [], startedAt: Date.now(),
      selected: undefined, submitted: false, correct: false, combo: 0, xpGained: 0,
    };
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  // Builds and enters a 20-question vocab quiz spanning every unlocked
  // module's vocab (getUnlockedVocabPool), not pinned to any one module --
  // see buildRevisionVocabQueue in js/state.js for the mix (translation in
  // whichever direction was picked + a few plural/مصدر "form" questions,
  // weighted toward already-seen-but-not-yet-10x-correct words with a
  // trickle of brand-new ones). Disabled in the UI once nothing's left
  // eligible (every unlocked word already answered correctly 10 times), so
  // the empty-queue check here is a backstop, not the primary gate.
  startRevisionVocab() {
    const direction = state.scheduleRevisionVocabDirection === 'ar-en' ? 'ar-en' : 'en-ar';
    const pool = getUnlockedVocabPool(state.completed);
    if (!pool.length) return false;
    const queue = buildRevisionVocabQueue(pool, direction, state.vocabExposure);
    if (!queue.length) return false;
    state.practice = {
      source: 'revision', kind: 'revisionVocab', moduleId: null, lessonId: null,
      queue, index: 0, log: [], startedAt: Date.now(),
      selected: undefined, submitted: false, correct: false, combo: 0, xpGained: 0,
    };
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  // The date input below reaches its handler through the same data-action
  // dispatch as clicks (see the 'change' listener further down) -- `el` is
  // the <input> itself, so this reads el.value rather than a dataset
  // attribute.
  setScheduleDeadline(el) {
    state.scheduleDeadline = { ...state.scheduleDeadline, [state.courseId]: el.value || null };
  },
  backToSchedule() {
    state.view = 'schedule';
    state.practice = null;
  },

  // --- Mastery (app-wide: reached from any completed lesson's preview
  // modal, on the module page or via My Path -- see lessonPreviewHtml) ---
  startMasteryV2(el) {
    const moduleId = state.moduleId;
    const lessonId = el.dataset.lessonId;
    const queue = buildMasteryV2Queue(moduleId, lessonId);
    if (!queue.length) return false;
    state.lessonPreviewId = null;
    state.practice = {
      source: 'masteryV2', kind: 'masteryV2', moduleId, lessonId,
      queue, index: 0, log: [], startedAt: Date.now(),
      selected: undefined, submitted: false, correct: false, combo: 0, xpGained: 0,
    };
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  // A fail always offers a fresh, freshly-shuffled full-pool attempt -- never
  // a "redo what you missed" subset, so "100% or nothing" stays unambiguous.
  retryMasteryV2() {
    const p = state.practice;
    if (!p || p.source !== 'masteryV2') return false;
    const queue = buildMasteryV2Queue(p.moduleId, p.lessonId);
    if (!queue.length) return false;
    p.queue = queue;
    p.index = 0;
    p.log = [];
    p.selected = undefined;
    p.submitted = false;
    p.correct = false;
    p.combo = 0;
    p.xpGained = 0;
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },

  // --- "Start lesson" modal ---
  openLessonPreview(el) {
    state.lessonPreviewId = el.dataset.lessonId;
    state.pathActive = false;
    state.pathHome = false;
  },
  // Fires from the backdrop; a click that landed inside the dialog is not a
  // click-outside, so it changes nothing.
  closeLessonPreview(el, e) {
    if (e && e.target !== el) return false;
    state.lessonPreviewId = null;
  },
  cancelLessonPreview() {
    state.lessonPreviewId = null;
  },
  startLesson(el) {
    const lessonId = el.dataset.lessonId;
    state.lessonPreviewId = null;
    state.lessonId = lessonId;
    // Only two positions exist inside a lesson now. Older save files can
    // hold 'drill'/'drillComplete' here -- treat anything else as the
    // concepts page rather than navigating to a view that no longer exists.
    const pos = state.lessonPos[`${state.moduleId}_${lessonId}`];
    state.view = pos && pos.view === 'quiz' ? 'quiz' : 'lesson';
    shuffleLessonOptions(state.moduleId, lessonId);
    if (state.view === 'quiz') startQuizAttempt(getLesson(state.moduleId, lessonId));
  },

  backToLesson() {
    state.view = 'lesson';
    shuffleLessonOptions(state.moduleId, state.lessonId);
    savePos();
  },
  gotoQuiz() {
    const lesson = getLesson(state.moduleId, state.lessonId);
    if (!isLessonReadyForQuiz(lesson, state.exStates, state.moduleId, state.lessonId)) return false;
    if (state.view !== 'quiz') startQuizAttempt(lesson);
    state.view = 'quiz';
    savePos();
  },

  // --- concept exercises (one block per concept, all on one page) ---
  revealExercise(el) {
    const idx = +el.dataset.index;
    const key = conceptKey(state.moduleId, state.lessonId, idx);
    state.revealState[key] = 1;

    const exCardKey = `ex_${state.moduleId}_${state.lessonId}_${idx}`;

    setTimeout(() => {
      const scrollContainer = root.querySelector('.main-content') || root.querySelector('.main');
      const exCard = root.querySelector(`[data-reveal-key="${exCardKey}"]`) || root.querySelector(`[data-anim-key="ex${idx}"]`);
      if (exCard && scrollContainer) {
        const cardRect = exCard.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        const targetY = scrollContainer.scrollTop + (cardRect.top - containerRect.top) - (containerRect.height / 2) + (cardRect.height / 2);

        smoothScrollTo(scrollContainer, Math.max(0, targetY), 850);
      }
    }, 40);
  },
  // Sidebar "In This Lesson" list -- clicking a concept you've already
  // reached scrolls back up to it. No state changes, so this returns
  // false to skip the usual rerender: rerender() replaces .main-content
  // wholesale, which would yank the DOM node out from under
  // smoothScrollTo's rAF loop mid-animation.
  scrollToConcept(el) {
    const idx = +el.dataset.index;
    const scrollContainer = root.querySelector('.main-content') || root.querySelector('.main');
    const target = root.querySelector(`[data-concept-index="${idx}"]`);
    if (target && scrollContainer) {
      const cardRect = target.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();
      const targetY = scrollContainer.scrollTop + (cardRect.top - containerRect.top) - (containerRect.height / 2) + (cardRect.height / 2);
      smoothScrollTo(scrollContainer, Math.max(0, targetY), 850);
    }
    return false;
  },
  selectConceptOption(el) {
    const key = conceptKey(state.moduleId, state.lessonId, +el.dataset.index);
    const ex = (state.exStates[key] = state.exStates[key] || {});
    if (ex.passed) return false;
    ex.selected = +el.dataset.option;
  },
  checkConceptExercise(el) {
    const idx = +el.dataset.index;
    const lesson = getLesson(state.moduleId, state.lessonId);
    const concept = lesson.concepts[idx];
    const key = conceptKey(state.moduleId, state.lessonId, idx);
    const ex = state.exStates[key];
    if (!ex || ex.selected === undefined) return false;
    const { pass } = checkMcq(concept.exercise, ex.selected);
    ex.submitted = true;
    if (pass) {
      ex.passed = true;
      state.revealState[key] = 1;
    }
  },
  retryConceptExercise(el) {
    const key = conceptKey(state.moduleId, state.lessonId, +el.dataset.index);
    const ex = state.exStates[key];
    if (!ex) return false;
    ex.submitted = false;
    ex.selected = undefined;
  },

  // The lesson's own single exercise (one persistent box, current item is
  // state.lessonExIndex -- see lessonExerciseCardHtml in render.js).
  // Reveal-on-click, same as the lesson quiz: picking an option grades and
  // shows it immediately, no separate Check step -- and it always advances
  // to the next question after a brief pause, whether the answer was right
  // or not (unlike concept exercises, there's no retry-until-correct here).
  selectLessonExerciseOption(el) {
    const key = lessonExerciseItemKey(state.moduleId, state.lessonId, state.lessonExIndex);
    const ex = (state.exStates[key] = state.exStates[key] || {});
    if (ex.submitted) return false;
    ex.selected = +el.dataset.option;
    ex.submitted = true;
    ex.passed = true; // "attempted" -- see isLessonExerciseItemPassed's comment in content/index.js; correctness itself is read back from ex.selected vs item.correct at render time
    scheduleLessonExerciseAdvance();
  },

  // Reveal-on-click: choosing an option immediately shows correct/incorrect
  // (see quizHtml) rather than waiting on a separate submit step.
  selectQuizOption(el) {
    if (state.quizRevealed) return false;
    state.quizSelected = +el.dataset.option;
    state.quizRevealed = true;
  },
  // Commits the just-revealed answer and either advances to the next
  // question or, on the last one, scores the attempt and shows the result
  // screen. quizScores is written here exactly where submitQuiz used to
  // write it, so finishLesson's gating/XP logic below is untouched.
  nextQuizQuestion() {
    if (!state.quizRevealed) return false;
    const lesson = getLesson(state.moduleId, state.lessonId);
    const answers = [...state.quizAnswers, state.quizSelected];
    if (state.quizIndex + 1 < lesson.quiz.length) {
      state.quizAnswers = answers;
      state.quizIndex += 1;
      state.quizSelected = null;
      state.quizRevealed = false;
      return;
    }
    const total = lesson.quiz.length;
    const correct = answers.filter((a, qi) => a === lesson.quiz[qi].correct).length;
    state.quizAnswers = answers;
    state.quizScores[state.moduleId] = state.quizScores[state.moduleId] || {};
    state.quizScores[state.moduleId][state.lessonId] = { correct, total };
    state.quizShowResult = true;
    state.quizPassed = correct / total >= QUIZ_PASS_RATIO;
  },
  retakeQuiz() {
    startQuizAttempt(getLesson(state.moduleId, state.lessonId));
  },
  // Passing the quiz is the end of the lesson -- there is no drill step.
  finishLesson() {
    if (!isQuizPassed(state.moduleId, state.lessonId, state.quizScores)) return false;
    // Computed before markLessonComplete mutates state.completed: XP and
    // badges only fire on a lesson's first-ever completion, so retaking an
    // already-passed quiz can't be used to farm XP.
    const alreadyComplete = isLessonComplete(state.moduleId, state.lessonId, state.completed);
    const wasFirstEver = totalLessonsCleared(state.completed) === 0;
    markLessonComplete(state.moduleId, state.lessonId);
    state.view = 'lessonComplete';
    // Re-opening a cleared lesson should land on the concepts, not the quiz.
    state.lessonPos[`${state.moduleId}_${state.lessonId}`] = { view: 'lesson' };
    // markLessonComplete just above already updated state.completed, which
    // is what a path lesson node's done-ness is derived from (see
    // isPathNodeDone in js/state.js) -- nothing path-specific to write here,
    // just re-check whether that was enough to reach the next milestone.
    if (state.pathActive) checkPathMilestones();
    const score = state.quizScores[state.moduleId][state.lessonId];
    if (!alreadyComplete) {
      awardXp(state, xpForQuiz(score.correct, score.total));
      scheduleToastClear();
      if (wasFirstEver) awardBadge(state, 'first-steps');
      // Module/lesson/course completion badges are tiered ladders spanning
      // all four courses (see gamification.js) -- these re-derive their
      // counts from state.completed each time rather than tracking a
      // separate counter, so they can't drift out of sync with it.
      checkModuleCompletionBadges(state);
      checkLessonsClearedBadges(state);
      checkCourseCompletionBadges(state);
    }
    // Perfect-quiz badges are "distinct lessons ever scored 100%" -- unlike
    // XP, a later retake earning a lesson's first-ever perfect score still
    // should count, since it isn't repeatable/farmable (the count is
    // re-derived from quizScores, not incremented per attempt).
    checkPerfectQuizBadges(state);
  },

  tarkeebChipClick(el) {
    const key = el.dataset.key;
    const entry = findBankItem(key);
    const ts = ensureTarkeeb(key, entry.item, entry.moduleId);
    if (ts.submitted) return false;
    const chipIdx = +el.dataset.chip;
    if (ts.placements.includes(chipIdx)) return false; // already placed; use the slot to remove it
    ts.selectedChip = ts.selectedChip === chipIdx ? null : chipIdx;
  },
  tarkeebSlotClick(el) {
    const key = el.dataset.key;
    const entry = findBankItem(key);
    const ts = ensureTarkeeb(key, entry.item, entry.moduleId);
    if (ts.submitted) return false;
    const slotIdx = +el.dataset.slot;
    if (ts.placements[slotIdx] !== null) {
      ts.placements[slotIdx] = null;
      ts.submitted = false;
    } else if (ts.selectedChip !== null) {
      ts.placements[slotIdx] = ts.selectedChip;
      ts.selectedChip = null;
      ts.submitted = false;
    } else {
      return false;
    }
  },
  checkTarkeeb(el) {
    const key = el.dataset.key;
    const entry = findBankItem(key);
    const ts = state.tarkeebState[key];
    if (!entry || !ts) return false;
    let feedback;
    let allPass;
    if (entry.item.cells) {
      // Must match whatever fillBlanks initTarkeeb used to build ts.placements,
      // or the slot count/order here won't line up with it.
      const fillBlanks = courseIdForModule(entry.moduleId) === 'annahw';
      const { slots } = flattenTarkeebSlots(entry.item, { fillBlanks });
      const given = slots.map((_, i) => (ts.placements[i] === null ? null : ts.chipPool[ts.placements[i]]));
      ({ feedback, allPass } = checkTarkeebDiagram(slots, given));
    } else {
      const given = entry.item.words.map((_, i) => (ts.placements[i] === null ? null : ts.chipPool[ts.placements[i]]));
      ({ feedback, allPass } = checkTarkeeb(entry.item, given));
    }
    ts.feedback = feedback;
    ts.submitted = true;
    ts.passed = allPass;
    const p = state.practice;
    // Per-question check (p.queue[p.index] === key), not a session-level
    // p.kind === 'tarkeeb' guard -- see selectPracticeOption's matching
    // comment on why a My Path revision node needs this.
    if (p && p.queue[p.index] === key) {
      recordPracticeAnswer(key, entry.item.sentence, allPass);
      if (p.source === 'path') {
        const node = findPathNode(p.nodeId);
        if (node) recordPathRepAnswer(key, entry.item.kind, allPass, node);
      }
      if (allPass) {
        p.combo = (p.combo || 0) + 1;
        const gained = xpForPracticeCorrect(p.combo);
        p.xpGained = (p.xpGained || 0) + gained;
        awardXp(state, gained);
        scheduleToastClear();
      } else {
        p.combo = 0;
      }
      // See selectPracticeOption's matching comment -- ending early (if
      // this answer made passing impossible) happens when the learner
      // clicks past THIS question's own feedback, not immediately here.
    }
  },
  resetTarkeeb(el) {
    const key = el.dataset.key;
    const entry = findBankItem(key);
    if (!entry) return false;
    state.tarkeebState[key] = initTarkeeb(entry.item, entry.moduleId);
  },

  closeBadgeModal() {
    state.badgeModal = state.badgeQueue.length ? state.badgeQueue.shift() : null;
  },

  // --- Window controls (#window-controls) -- pure IPC side effects, no
  // app state changes, so each returns false to skip the usual rerender. ---
  minimizeWindow() {
    ipcRenderer?.send('window:minimize');
    return false;
  },
  toggleMaximizeWindow() {
    ipcRenderer?.send('window:toggle-maximize');
    return false;
  },
  closeWindow() {
    ipcRenderer?.send('window:close');
    return false;
  },
};

// --- event delegation -------------------------------------------------

// تركيب chips/slots are the only [data-action] elements that are plain
// <div>s (role="button" + tabindex, not a real <button>) -- everything else
// in the app already gets keyboard activation for free from being a native
// <button>/<input>. This is what lets the shared keydown handler below tell
// "needs Enter/Space wired up manually" apart from "already handled by the
// browser", and gives rerender() a stable selector to refocus after a chip
// select or slot placement blows away and recreates the whole DOM.
function tarkeebFocusSelector(el) {
  const action = el.dataset.action;
  const key = el.dataset.key;
  if (!key) return null;
  if (action === 'tarkeebChipClick') return `[data-action="tarkeebChipClick"][data-key="${key}"][data-chip="${el.dataset.chip}"]`;
  if (action === 'tarkeebSlotClick') return `[data-action="tarkeebSlotClick"][data-key="${key}"][data-slot="${el.dataset.slot}"]`;
  return null;
}

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]');
  if (!el || el.disabled) return;
  // Native form controls (the Schedule tab's date/number inputs and
  // module/lesson <select>s) carry data-action too, but only so the
  // 'change' listener below can find them the same way -- their action
  // must fire once a value is actually committed, not on the click that
  // merely focuses the field or opens the picker/dropdown. Without this
  // guard, that opening click fires the action immediately (with the
  // stale value) and the resulting rerender replaces the input out from
  // under the still-open native picker/dropdown, closing it before a
  // date/option can ever be chosen.
  if (el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.tagName === 'TEXTAREA') return;
  const handler = actions[el.dataset.action];
  if (!handler) return;
  if (handler(el, e) === false) return;
  rerender(tarkeebFocusSelector(el));
});

document.addEventListener('keydown', (e) => {
  // Enter/Space activates a focused تركيب chip or slot the same way a click
  // would -- role="button" tells assistive tech these are buttons, but only
  // a real <button>/<a> gets that key handling from the browser for free;
  // a plain div needs it wired up by hand. Space also scrolls the page by
  // default, hence preventDefault.
  if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
    const el = e.target.closest && e.target.closest('[data-action][role="button"]');
    if (el && el.getAttribute('aria-disabled') !== 'true') {
      e.preventDefault();
      const handler = actions[el.dataset.action];
      if (handler && handler(el, e) !== false) rerender(tarkeebFocusSelector(el));
      return;
    }
  }
  if (e.key !== 'Escape') return;
  if (state.lessonPreviewId) {
    state.lessonPreviewId = null;
    rerender();
  } else if (state.pathCheckpointSetupNodeId) {
    state.pathCheckpointSetupNodeId = null;
    rerender();
  } else if (state.unlockPrompt) {
    state.unlockPrompt = null;
    rerender();
  }
});

document.addEventListener('change', (e) => {
  // The Schedule tab's Deadline date input reaches its handler through this
  // exact same data-action dispatch as clicks -- see setScheduleDeadline,
  // which reads el.value.
  const el = e.target.closest('[data-action]');
  if (el && !el.disabled && actions[el.dataset.action]) {
    if (actions[el.dataset.action](el, e) !== false) rerender();
    return;
  }
});

// --- drag-and-drop for tarkeeb (native events bubble, so this is delegated
// on the document exactly like clicks -- no per-render remount needed) ---

let dragChipIdx = null;
let dragKey = null;

document.addEventListener('dragstart', (e) => {
  const chip = e.target.closest('.tarkeeb-chip[draggable="true"]');
  if (!chip) return;
  dragChipIdx = +chip.dataset.chip;
  dragKey = chip.dataset.key;
  e.dataTransfer.effectAllowed = 'move';
  // Deferred a frame so the browser snapshots the chip at full opacity for
  // the drag image, then dims the original.
  requestAnimationFrame(() => chip.classList.add('dragging'));
});

document.addEventListener('dragover', (e) => {
  const slot = e.target.closest('.tarkeeb-slot');
  if (!slot) return;
  e.preventDefault();
  if (!slot.classList.contains('drag-over')) {
    document.querySelectorAll('.tarkeeb-slot.drag-over').forEach((s) => s.classList.remove('drag-over'));
    slot.classList.add('drag-over');
  }
});

document.addEventListener('dragleave', (e) => {
  const slot = e.target.closest('.tarkeeb-slot');
  if (slot) slot.classList.remove('drag-over');
});

document.addEventListener('drop', (e) => {
  const slot = e.target.closest('.tarkeeb-slot');
  if (!slot || dragChipIdx === null) return;
  e.preventDefault();
  slot.classList.remove('drag-over');
  const key = slot.dataset.key;
  if (key !== dragKey) return;
  const entry = findBankItem(key);
  const ts = ensureTarkeeb(key, entry.item, entry.moduleId);
  if (!ts.submitted) {
    ts.placements[+slot.dataset.slot] = dragChipIdx;
    ts.selectedChip = null;
    ts.submitted = false;
  }
  dragChipIdx = null;
  dragKey = null;
  rerender();
});

document.addEventListener('dragend', (e) => {
  const chip = e.target.closest('.tarkeeb-chip');
  if (chip) chip.classList.remove('dragging');
  document.querySelectorAll('.tarkeeb-slot.drag-over').forEach((s) => s.classList.remove('drag-over'));
  dragChipIdx = null;
  dragKey = null;
});

// --- window controls (#window-drag-region/#window-controls) ------------
// Static markup outside #root (see index.html's comment), so its listeners
// are wired up once here rather than through the data-action delegation's
// rerender-driven re-binding -- the element is never destroyed/recreated.

if (ipcRenderer) {
  // The window could already be maximized on this very first paint (e.g.
  // the OS remembered the last window state) -- sync once up front, then
  // keep listening for every later change, including an OS-level one
  // (edge-drag snap, Win+Up) that never goes through this window's own
  // maximize button at all.
  ipcRenderer.invoke('window:is-maximized').then((isMaximized) => {
    document.body.classList.toggle('is-maximized', isMaximized);
  });
  ipcRenderer.on('window:maximized-changed', (event, isMaximized) => {
    document.body.classList.toggle('is-maximized', isMaximized);
  });
}

// Double-click the drag strip to maximize/restore -- standard OS title-bar
// behaviour that frame:false drops entirely along with the rest of the
// native chrome, so it has to be wired up by hand. Guarded against the
// button group so a double-click landing on, say, minimize doesn't ALSO
// toggle maximize underneath it.
document.getElementById('window-drag-region')?.addEventListener('dblclick', (e) => {
  if (e.target.closest('#window-controls')) return;
  ipcRenderer?.send('window:toggle-maximize');
});

// --- lifecycle ----------------------------------------------------------

window.addEventListener('beforeunload', flushPersist);

// Boot renders straight into whatever screen the learner left off on -- there
// is no real "previous screen" to crossfade from, so pre-seeding lastNav to
// the initial signature skips rerender()'s page-turn view transition for
// this first paint. Without this, the first paint fades in from a blank
// root over the transition's own duration on top of the page's normal load
// time, reading as a stuck/blank window before the app "pops in" late.
lastNav = navSignature();
rerender();

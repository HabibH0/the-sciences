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
  setActiveCourseShell,
  ensureCoursesLoaded,
  flattenTarkeebSlots,
  classifyTarkeebRoleTier,
  courseIdForModule,
  isCourseUnlocked,
  courseUnlockTestPool,
  moduleSkipTestPool,
  moduleSkipTestSubPools,
  MODULE_SKIP_TEST_LENGTH,
  UNLOCK_TEST_PASS_RATIO,
} from '../content/index.js';
import { findPathGroup, groupSkeleton, findPathNode, pathFullPool, pathSkipAheadFullPool, nodesBeforePathNode, PATH_TRACKS, isTrackUnlocked, trackUnlockTestPool } from '../content/paths.js';
import {
  getLitBook, isChapterUnlocked, isChapterDone, loadChapter, getLoadedChapter,
  litChapterKey, resumeParagraph, chapterSentences, isBuildEligible, unknownLemmas,
} from '../content-lit/index.js';
import {
  createInitialState, shuffleQuizOrder, shuffle, buildPracticeQueue,
  buildModuleRevisionQueue, moduleRevisionPool,
  buildRevisionVocabQueue,
  buildPathMcqCheckpointQueue, buildPathVocabCheckpointQueue,
  buildPathTarkeebCheckpointQueue, buildPathRevisionQueue, buildPathSectionTestQueue,
  buildMasteryV2Queue, masteryV2Pool, masteryKey, pathCheckpointPassRatio, stillPassable,
  firstUnfinishedPathNodeIndex, buildUnlockTestQueue,
  buildLitWorkshopQueue, buildLitBuildQueue, buildLitWordPracticeQueue,
  PATH_REP_LEARNED_COUNT, VOCAB_LEARNED_COUNT, LIT_WORD_RETIRE_COUNT,
} from './state.js';
import { render, FACES, HEADING_FACES } from './render.js';
import { checkMcq, checkTarkeeb, checkTarkeebDiagram } from './checker.js';
import {
  persistSoon, flushPersist, cancelPendingPersist, persist, todayISO,
  normalizeLitTextScale,
} from './persistence.js';
import { getBackendUrl, register, login, logout, me, mergeLocalAndRemoteProgress, uploadLocalProgress, getCloudSaveStatus, getLocalSaveStatus } from './storage/syncClient.js';
import {
  awardXp, awardBadge, xpForQuiz, xpForPracticeCorrect, checkStreakBadges,
  checkPerfectQuizBadges, checkPracticeVolumeBadges, checkModuleCompletionBadges,
  checkLessonsClearedBadges, checkCourseCompletionBadges,
} from './gamification.js';

const electronWindow = window.electronAPI?.window;
const THEME_CHROME = {
  manuscript: { bg: '#f3f2f2', scheme: 'light' },
  mushaf: { bg: '#f7f1e1', scheme: 'light' },
  lamp: { bg: '#16130f', scheme: 'dark' },
  ink: { bg: '#eceef1', scheme: 'light' },
  sepia: { bg: '#ece0ca', scheme: 'light' },
};

const state = await createInitialState();
state.account.backendUrl = getBackendUrl();
if (state.account.backendUrl) {
  me().then(async (result) => {
    if (result && !result.disabled) {
      state.account.user = result.user || null;
      state.account.message = state.account.user ? `Signed in as ${state.account.user.email}` : '';
      if (state.account.user) {
        try {
          state.account.message = `Signed in as ${state.account.user.email}. Syncing save data...`;
          await flushPersist();
          await mergeAccountSaveWithRetry();
          state.account.autoUploadStatus = 'synced';
          state.account.autoUploadMessage = 'Automatic sync is ready for future lesson, quiz, and practice progress.';
          state.account.message = `Signed in as ${state.account.user.email}. Save data synced.`;
        } catch (e) {
          state.account.message = e.message || 'Signed in, but save data could not sync.';
          await refreshCloudSaveStatus();
          await refreshLocalSaveStatus();
        }
      } else {
        refreshLocalSaveStatus();
      }
      rerender();
    }
  }).catch(() => {});
}
// Must run before sanitizeBootNav below -- that IIFE calls getModule/
// isModuleUnlocked/etc., which resolve against whichever course is active.
setActiveCourseShell(state.courseId);
if (!state.launchScreen) await setActiveCourse(state.courseId);
state.tarkeebState = {}; // key -> { chipPool, chipOrder, placements, selectedChip, submitted, feedback, passed }
// A returning learner who already has a 7-day streak sees the "On Fire"
// badge unlock immediately on launch, rather than waiting for their next
// XP-earning action to trigger the check.
checkStreakBadges(state);

const root = document.getElementById('root');

function normalizeLessonTextScale(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 100;
  return Math.min(130, Math.max(85, Math.round(n)));
}

function setMetaContent(name, content) {
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function statusMeta(status) {
  if (!status || !status.exists) return null;
  return {
    updatedAt: status.updatedAt || '',
    version: Number(status.version) || 0,
    deviceId: status.deviceId || '',
  };
}

function sameSaveMeta(a, b) {
  if (!a || !b) return false;
  return (a.updatedAt || '') === (b.updatedAt || '')
    && (Number(a.version) || 0) === (Number(b.version) || 0)
    && (a.deviceId || '') === (b.deviceId || '');
}

function reconcileSyncBase() {
  const localMeta = statusMeta(state.account.localStatus);
  const cloudMeta = statusMeta(state.account.cloudStatus);
  if (localMeta && cloudMeta && sameSaveMeta(localMeta, cloudMeta)) {
    state.account.syncBaseMeta = cloudMeta;
    if (state.account.autoUploadStatus === 'paused') {
      state.account.autoUploadStatus = 'idle';
      state.account.autoUploadMessage = '';
    }
  }
}

function autoUploadSuccessMessage(reason) {
  if (reason === 'lesson-complete') return 'Lesson completion synced to your account.';
  if (reason === 'quiz-complete') return 'Quiz result synced to your account.';
  if (reason === 'lesson-exercise' || reason === 'concept-exercise') return 'Lesson exercise progress synced to your account.';
  if (reason === 'practice-answer') return 'Practice progress synced to your account.';
  if (reason === 'mastery-complete') return 'Mastery result synced to your account.';
  if (reason === 'path-session-complete') return 'Path progress synced to your account.';
  if (reason === 'unlock-test-complete') return 'Unlock test progress synced to your account.';
  if (reason === 'direct-unlock') return 'Unlock choice synced to your account.';
  if (reason === 'path-milestone') return 'Path milestone progress synced to your account.';
  if (reason === 'settings-change') return 'Settings synced to your account.';
  return 'Progress synced to your account.';
}

function envelopeProgress(envelope) {
  if (!envelope || typeof envelope !== 'object') return {};
  return envelope.progress && typeof envelope.progress === 'object' ? envelope.progress : envelope;
}

function applyMergedProgressToState(envelope) {
  const progress = envelopeProgress(envelope);
  const persistedKeys = [
    'completed',
    'quizScores',
    'exStates',
    'lessonPos',
    'revealState',
    'practiceHistory',
    'scheduleDeadline',
    'dailyResetHour',
    'pathNodeStatus',
    'pathReps',
    'vocabExposure',
    'pathCheckpointMastery',
    'masteryV2',
    'litProgress',
    'litUnknown',
    'litWordReps',
    'litCheckLang',
    'litTextScale',
    'streak',
    'lastVisit',
    'xp',
    'badges',
    'practiceCorrectTotal',
    'theme',
    'accent',
    'arabicFace',
    'arabicHeadingFace',
    'lessonTextScale',
    'tarkeebTranslations',
    'tarkeebLabelsBlue',
    'forceUnlockAll',
    'forceUnlockAllExplicit',
    'kufiHeadings',
    'unlockedCourses',
    'unlockedTracks',
    'unlockedModules',
  ];

  for (const key of persistedKeys) {
    if (Object.prototype.hasOwnProperty.call(progress, key)) {
      state[key] = progress[key];
    }
  }
}

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
  if (state.moduleId && !isModuleUnlocked(state.moduleId, state.completed, state.unlockedModules, state.forceUnlockAll)) {
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
    if (!(state.moduleId && state.lessonId && isLessonUnlocked(state.moduleId, state.lessonId, state.completed, state.unlockedModules, state.forceUnlockAll))) {
      state.view = state.moduleId ? 'module' : 'dashboard';
    }
  }
  // A reader session (state.lit) is transient, exactly like a practice
  // session above -- its stage, queues and answered checks aren't persisted,
  // only how far into the chapter it got (state.litProgress). So a reload
  // lands on the book's contents page, where reopening the chapter resumes
  // at that paragraph.
  if (state.view === 'litRead') state.view = state.litBookId ? 'litBook' : 'library';
  if (state.view === 'litBook' && !getLitBook(state.litBookId)) {
    state.view = 'library';
    state.litBookId = null;
    state.litChapterId = null;
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
  if (!state.launchScreen && state.view === 'quiz' && state.moduleId && state.lessonId) {
    const lesson = getLesson(state.moduleId, state.lessonId);
    if (lesson) state.quizOptionOrder = shuffleQuizOrder(lesson);
  }
  if (!state.launchScreen && state.view === 'lesson' && state.moduleId && state.lessonId) {
    shuffleLessonOptions(state.moduleId, state.lessonId);
  }
})();

// Entrance animations are keyed, not blanket: an element animates only on
// the render where its data-anim-key first appears. Re-rendering an
// unchanged exercise card therefore doesn't replay its reveal.
let seenAnimKeys = new Set();
let suppressPersist = false;

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
  const practiceKey = state.practice
    ? [
        state.practice.source || '',
        state.practice.kind || '',
        state.practice.nodeId || '',
        state.practice.moduleId || '',
        state.practice.lessonId || '',
        state.practice.index,
      ].join(':')
    : '';
  // The reader's STAGE counts as a screen change (read -> patterns -> build
  // are three different pages), but its paragraph does not: advancing a
  // paragraph appends to the same page, so it must keep its scroll position
  // rather than page-turn back to the top.
  const litKey = state.lit ? `${state.lit.bookId}:${state.lit.chapterId}:${state.lit.stage}` : '';
  return [
    state.launchScreen ? 'launch' : 'app',
    state.courseId || '',
    state.view || '',
    state.moduleId || '',
    state.lessonId || '',
    state.pathGroupId || '',
    practiceKey,
    litKey,
  ].join('|');
}
let lastNav = null;
const scrollPositions = new Map();

function mainScrollContainer() {
  return root.querySelector('.main-content') || root.querySelector('.main');
}

function rememberScrollPosition(navKey, container = mainScrollContainer()) {
  if (!navKey || !container) return;
  scrollPositions.set(navKey, container.scrollTop || 0);
}

// Resolves when the scroll finishes (immediately if there was nothing to
// scroll), so a caller can sequence something after it -- see
// litNextParagraph, which travels back to the top of the page BEFORE
// swapping the paragraph under it.
function smoothScrollTo(container, targetY, duration = 850) {
  const startY = container.scrollTop;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return Promise.resolve();
  let startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  return new Promise((resolve) => {
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      container.scrollTop = startY + distance * easedProgress;

      if (progress < 1) {
        requestAnimationFrame(step);
        return;
      }
      resolve();
    }

    requestAnimationFrame(step);
  });
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
  document.documentElement.dataset.tarkeebLabelsBlue = state.tarkeebLabelsBlue === true ? 'true' : 'false';
  const chrome = THEME_CHROME[state.theme] || THEME_CHROME.manuscript;
  document.documentElement.style.colorScheme = chrome.scheme;
  document.body.style.backgroundColor = chrome.bg;
  setMetaContent('theme-color', chrome.bg);
  const face = FACES[state.arabicFace] || FACES.naskh;
  const headingFaceKey = state.arabicHeadingFace || (state.kufiHeadings ? 'kufi' : 'body');
  const headingFace = HEADING_FACES[headingFaceKey] || HEADING_FACES.body;
  document.documentElement.style.setProperty('--font-ar', face.body);
  document.documentElement.style.setProperty('--font-ar-heading', headingFace.font || face.body);
  document.documentElement.style.setProperty('--lesson-text-scale', String(normalizeLessonTextScale(state.lessonTextScale) / 100));
  document.documentElement.style.setProperty('--lit-text-scale', String(normalizeLitTextScale(state.litTextScale) / 100));
}

// focusSelector re-focuses a specific element after the innerHTML swap below
// destroys and recreates the whole DOM -- without it, every action (not just
// تركيب's) drops focus back to <body>, which is merely annoying for a mouse
// user but breaks a keyboard user's ability to place several تركيب chips in
// a row without re-tabbing from the top of the page each time. See
// refocusSelector, the only current caller.
function rerender(focusSelector) {
  applyAppearance(state);
  const previousNav = lastNav;
  const scrollContainer = mainScrollContainer();
  const nav = navSignature();
  const changedScreen = nav !== previousNav;
  rememberScrollPosition(previousNav, scrollContainer);
  lastNav = nav;

  if (changedScreen) {
    revealedKeys.clear();
  }

  const html = render(state, MODULES, revealedKeys);
  const nextScrollTop = changedScreen
    ? (scrollPositions.get(nav) || 0)
    : (scrollContainer?.scrollTop || 0);

  const usingViewTransition = changedScreen && !!document.startViewTransition;
  let deferredEntrances = [];
  const swap = () => {
    root.innerHTML = html;
    deferredEntrances = markEntrances(usingViewTransition);
    const newContainer = mainScrollContainer();
    if (newContainer && nextScrollTop) newContainer.scrollTop = nextScrollTop;
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
  if (!suppressPersist) persistSoon(state);
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
  if (!group) return false;
  const skeleton = groupSkeleton(group);
  const idx = firstUnfinishedPathNodeIndex(skeleton, state.pathNodeStatus, state.completed);
  const node = skeleton[idx];
  if (node && node.type === 'milestone' && !(state.pathNodeStatus[node.id] && state.pathNodeStatus[node.id].done)) {
    state.pathNodeStatus[node.id] = { done: true, at: todayISO(state.dailyResetHour) };
    if (node.badgeId) awardBadge(state, node.badgeId);
    return true;
  }
  return false;
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
  queueAutoUpload('mastery-complete');
}

// Duolingo-style "jump ahead": passing a section/group test reached early
// (see startPathSkipAheadTest) backfills every node strictly before it on
// the WHOLE path -- not just its own group -- as done, both in the path
// skeleton (pathNodeStatus) and in the underlying courses' own
// state.completed, mirroring what actually walking the path there would
// have left behind. Lesson/section/group badges fire the same way normal
// completion earns them (re-derived from state.completed, same functions
// finishLesson calls) -- XP deliberately does not, same "don't farm
// rewards for content never done" reasoning as completePreviousModulesInCourse.
function completePriorPathNodes(node) {
  const priorNodes = nodesBeforePathNode(node.id);
  const wasFirstEver = totalLessonsCleared(state.completed) === 0;
  let anyLesson = false;
  for (const n of priorNodes) {
    if (n.type === 'lesson') {
      markLessonComplete(n.moduleId, n.lessonId);
      anyLesson = true;
    } else if (n.type === 'sectionHeader') {
      // Nothing to complete -- a plain label.
    } else if (!(state.pathNodeStatus[n.id] && state.pathNodeStatus[n.id].done)) {
      state.pathNodeStatus[n.id] = { done: true, at: todayISO(state.dailyResetHour) };
      if ((n.type === 'sectionTest' || n.type === 'groupTest' || n.type === 'milestone') && n.badgeId) awardBadge(state, n.badgeId);
    }
  }
  if (anyLesson) {
    if (wasFirstEver) awardBadge(state, 'first-steps');
    checkModuleCompletionBadges(state);
    checkLessonsClearedBadges(state);
    checkCourseCompletionBadges(state);
  }
  checkPathMilestones();
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
      state.pathCheckpointMastery[node.id] = { passed: true, at: todayISO(state.dailyResetHour), score: { correct, total } };
    } else {
      state.pathNodeStatus[node.id] = { done: true, at: todayISO(state.dailyResetHour), score: { correct, total } };
      if ((node.type === 'sectionTest' || node.type === 'groupTest') && node.badgeId) awardBadge(state, node.badgeId);
      if (p.skipAhead) completePriorPathNodes(node);
    }
  }
  checkPathMilestones();
  queueAutoUpload('path-session-complete');
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

// Legacy module skip-ahead unlock test support. New module unlocks are
// direct confirmations handled by confirmIndividualUnlock below, but this
// remains as a safe resolver for any already-running unlock-test session.
function finalizeUnlockTest() {
  const p = state.practice;
  const total = p.log.length;
  const correct = p.log.filter((l) => l.correct).length;
  const passed = total > 0 && correct / total >= UNLOCK_TEST_PASS_RATIO;
  if (!passed) return;
  if (p.unlockKind === 'module') {
    state.unlockedModules[p.targetId] = true;
    completePreviousModulesInCourse(p.targetId);
  }
  queueAutoUpload('unlock-test-complete');
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
  state.completed[moduleId][lessonId] = todayISO(state.dailyResetHour);
  // completedAt mirrors the date above at real-timestamp precision, kept
  // only for the sync merge's reset cutoff (see resetModuleProgress and
  // js/storage/syncClient.js) -- completed itself stays a calendar date
  // since that's the format everything else already reads/persists.
  state.completedAt[moduleId] = state.completedAt[moduleId] || {};
  state.completedAt[moduleId][lessonId] = new Date().toISOString();
}

// Wipes all per-lesson progress for one module: completion flags, quiz
// scores, exercise states, reveal states, lesson position, mastery results,
// and practice history cards. XP and badges are earned facts -- they are not
// rolled back (this is explicitly not a full undo). The module page becomes
// as if the learner had never opened it.
//
// Stamping moduleResetAt is what lets the cross-device sync merge
// (js/storage/syncClient.js) tell this apart from "hasn't gotten here yet":
// without it, a second device that's still holding this module's old
// completions from before the reset would sync in later, and the merge's
// ordinary union (present-on-either-side-wins) would silently resurrect
// them, undoing the reset the moment that device next opens. Full timestamp
// precision (not just a calendar date) is what lets that merge tell a
// same-day redo apart from a same-day pre-reset leftover -- see
// mergeCompletedRecord in js/storage/syncClient.js.
function resetModuleProgress(moduleId) {
  const prefix = `${moduleId}_`;
  delete state.completed[moduleId];
  delete state.completedAt[moduleId];
  state.moduleResetAt[moduleId] = new Date().toISOString();
  for (const key of Object.keys(state.quizScores)) {
    if (key.startsWith(prefix)) delete state.quizScores[key];
  }
  for (const key of Object.keys(state.exStates)) {
    if (key.startsWith(prefix)) delete state.exStates[key];
  }
  for (const key of Object.keys(state.revealState)) {
    if (key.startsWith(prefix)) delete state.revealState[key];
  }
  for (const key of Object.keys(state.lessonPos)) {
    if (key.startsWith(prefix)) delete state.lessonPos[key];
  }
  for (const key of Object.keys(state.masteryV2)) {
    if (key.startsWith(prefix)) delete state.masteryV2[key];
  }
  for (const key of Object.keys(state.practiceHistory)) {
    if (key.startsWith(prefix)) delete state.practiceHistory[key];
  }
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

function rerenderAccountIfOpen() {
  if (state.view === 'account') rerender();
}

async function refreshCloudSaveStatus() {
  try {
    state.account.cloudStatus = await getCloudSaveStatus();
    reconcileSyncBase();
  } catch (e) {
    state.account.cloudStatus = { error: e.message || 'Could not read cloud save status.' };
  }
}

async function refreshLocalSaveStatus() {
  try {
    state.account.localStatus = await getLocalSaveStatus();
    reconcileSyncBase();
  } catch (e) {
    state.account.localStatus = { error: e.message || 'Could not read this device save status.' };
  }
}

async function mergeAccountSave(options = {}) {
  const result = Object.prototype.hasOwnProperty.call(options, 'expectedMeta')
    ? await mergeLocalAndRemoteProgress({ expectedMeta: options.expectedMeta })
    : await mergeLocalAndRemoteProgress();
  if (!result.synced) throw new Error('Sync server is not configured.');
  applyMergedProgressToState(result.progress);
  await refreshCloudSaveStatus();
  await refreshLocalSaveStatus();
  reconcileSyncBase();
  return result;
}

async function mergeAccountSaveWithRetry(options = {}) {
  try {
    return await mergeAccountSave(options);
  } catch (e) {
    if (e.status !== 409) throw e;
    await refreshCloudSaveStatus();
    return mergeAccountSave({ expectedMeta: statusMeta(state.account.cloudStatus) || null });
  }
}

let autoUploadTimer = null;
let autoUploadRunning = false;
let autoUploadReason = '';

function queueAutoUpload(reason) {
  if (!state.account.user || !state.account.backendUrl || suppressPersist) return;
  autoUploadReason = reason;
  state.account.autoUploadStatus = 'queued';
  state.account.autoUploadMessage = 'Recent progress will sync automatically.';
  clearTimeout(autoUploadTimer);
  autoUploadTimer = setTimeout(() => {
    autoUploadTimer = null;
    runAutoUpload(autoUploadReason);
  }, 1600);
  rerenderAccountIfOpen();
}

async function runAutoUpload(reason) {
  if (!state.account.user || !state.account.backendUrl || suppressPersist) return;
  if (autoUploadRunning) {
    queueAutoUpload(reason);
    return;
  }

  autoUploadRunning = true;
  state.account.autoUploadStatus = 'uploading';
  state.account.autoUploadMessage = 'Syncing recent progress...';
  rerenderAccountIfOpen();

  try {
    await flushPersist();
    await refreshLocalSaveStatus();
    await refreshCloudSaveStatus();

    const localMeta = statusMeta(state.account.localStatus);
    const cloudMeta = statusMeta(state.account.cloudStatus);
    if (localMeta && cloudMeta && sameSaveMeta(localMeta, cloudMeta)) {
      state.account.syncBaseMeta = cloudMeta;
      state.account.autoUploadStatus = 'synced';
      state.account.autoUploadMessage = 'Cloud save is already up to date.';
      return;
    }

    const expectedMeta = cloudMeta || null;
    await mergeAccountSaveWithRetry({ expectedMeta });

    state.account.autoUploadStatus = 'synced';
    state.account.autoUploadMessage = autoUploadSuccessMessage(reason);
  } catch (e) {
    if (e.status === 409) {
      await refreshCloudSaveStatus();
      state.account.autoUploadStatus = 'error';
      state.account.autoUploadMessage = 'Automatic sync could not finish because the cloud save changed again. Manual sync is still available.';
      return;
    }
    state.account.autoUploadStatus = 'error';
    state.account.autoUploadMessage = e.message || 'Automatic sync failed. Manual sync is still available.';
  } finally {
    autoUploadRunning = false;
    rerenderAccountIfOpen();
  }
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
    const realSlots = slots.filter((s) => s.role !== null);
    const chipPool = realSlots.map((s) => s.role).concat(item.distractors || []);
    // chipTier is index-aligned with chipPool -- js/render.js's colour
    // coding only (see classifyTarkeebRoleTier in content/index.js).
    const chipTier = chipPool.map(classifyTarkeebRoleTier);
    return {
      chipPool,
      chipTier,
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
    return p.kind === 'revisionVocab' ? getUnlockedVocabPool(state.completed, undefined, state.forceUnlockAll) : moduleRevisionPool(p.moduleId, state.completed, state.forceUnlockAll);
  }
  if (p && p.source === 'masteryV2') {
    return masteryV2Pool(p.moduleId, p.lessonId);
  }
  if (p && p.source === 'path') {
    const node = findPathNode(p.nodeId);
    if (!node) return [];
    // A skip-ahead session's queue was sampled from the wider cumulative
    // pool (see startPathSkipAheadTest/buildPathSectionTestQueue) -- content
    // lookup has to search that SAME pool, or any key from outside the
    // node's own narrow window (i.e. most of a skip-ahead queue) comes up
    // empty here and the question can never render.
    return p.skipAhead ? pathSkipAheadFullPool(node) : pathFullPool(node);
  }
  if (p && p.source === 'unlockTest') {
    return p.unlockKind === 'course' ? courseUnlockTestPool(p.targetId)
      : p.unlockKind === 'track' ? trackUnlockTestPool(p.targetId)
        : moduleSkipTestPool(p.targetId);
  }
  return getBankPool(state.practiceModuleId || state.moduleId, state.completed, state.forceUnlockAll);
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

// Used by the launch screen's chooseCourse: always resets to that course's
// dashboard/module list. Course cards are navigation choices, not resume
// shortcuts into the learner's last lesson/module/practice position.
async function activateCourse(id) {
  await setActiveCourse(id);
  state.courseId = id;
  state.view = 'dashboard';
  state.moduleId = null;
  state.lessonId = null;
  state.practice = null;
  state.practiceSetupOpen = false;
  state.lessonPreviewId = null;
  state.litChapterPreviewId = null;
  state.pathActive = false;
  state.pathHome = false;
  state.litHome = false;
}

// --- Literature helpers ---------------------------------------------------

// How close together two clicks on the same word have to be to read as a
// double-click. Timed by hand rather than with a dblclick listener because
// every click re-renders the whole page (root.innerHTML), so the two clicks
// land on two different DOM nodes and the browser has no single element to
// dispatch a dblclick on. Touch double-taps go through the same path.
const LIT_DOUBLE_CLICK_MS = 450;
// Awarded once, the first time a chapter is finished, plus a little per
// correct answer along the way -- deliberately smaller than a lesson quiz:
// reading is its own reward and shouldn't out-earn the courses.
const LIT_CHAPTER_XP = 20;
const LIT_ANSWER_XP = 2;

function enterLitContext() {
  state.launchScreen = false;
  state.litHome = true;
  state.pathHome = false;
  state.pathActive = false;
  state.practice = null;
  state.practiceSetupOpen = false;
  state.lessonPreviewId = null;
  state.litPractice = null;
}

function litChapter() {
  return state.lit ? getLoadedChapter(state.lit.bookId, state.lit.chapterId) : null;
}

// Used when turning a page in the reader. Awaited by its callers so the
// paragraph is only swapped once the page has finished travelling.
function scrollReaderToTop() {
  const container = mainScrollContainer();
  if (!container || container.scrollTop < 2) return Promise.resolve();
  return smoothScrollTo(container, 0, 520);
}

function litToken(sentenceId, index) {
  const chapter = litChapter();
  if (!chapter) return null;
  const sentence = chapterSentences(chapter).find((s) => s.id === sentenceId);
  return sentence ? sentence.tokens[index] || null : null;
}

function litChapterRecord(bookId, chapterId) {
  const key = litChapterKey(bookId, chapterId);
  if (!state.litProgress[key]) state.litProgress[key] = { para: 0, done: false };
  return state.litProgress[key];
}

// Per lemma, not per occurrence -- see content-lit/index.js's own note on
// why "I don't know this word" is a fact about the word.
function toggleLitUnknown(lemma) {
  const bookId = state.lit.bookId;
  if (!state.litUnknown[bookId]) state.litUnknown[bookId] = {};
  const marked = state.litUnknown[bookId];
  if (marked[lemma]) delete marked[lemma];
  else marked[lemma] = true;
  queueAutoUpload('literature-unknown');
}

// freeRead is an explicit mode choice from the chapter's preview modal (see
// startLitFreeRead/startLitPractice), not something derived from progress:
// free reading never gates on checks, never falls into the Patterns/Build
// drills, and never marks the chapter done -- only Practice mode does that.
function startLitSession(chapter, para, freeRead) {
  state.lit = {
    bookId: state.litBookId,
    chapterId: state.litChapterId,
    paragraphCount: chapter.paragraphs.length,
    stage: 'read',
    para,
    freeRead,
    // `${paragraphIndex}:${checkIndex}` -> { selected, correct }.
    checks: {},
    gloss: null,
    fullPara: null,
    word: null,
    lastWordClick: null,
    workshop: [],
    wIndex: 0,
    wSelected: null,
    wSubmitted: false,
    build: [],
    bIndex: 0,
    bSlots: [],
    bSubmitted: false,
    correct: 0,
    total: 0,
  };
}

// Both drill queues are built once, on entering their stage, and then live
// on the session -- never rebuilt per render (see js/state.js's builders).
function startLitWorkshop(chapter) {
  const lit = state.lit;
  lit.workshop = buildLitWorkshopQueue(chapter);
  lit.wIndex = 0;
  lit.wSelected = null;
  lit.wSubmitted = false;
  if (!lit.workshop.length) {
    startLitBuild(chapter);
    return;
  }
  lit.stage = 'workshop';
}

function startLitBuild(chapter) {
  const lit = state.lit;
  lit.build = chapter ? buildLitBuildQueue(chapter, state.litUnknown, lit.bookId) : [];
  lit.bIndex = 0;
  lit.bSubmitted = false;
  if (!lit.build.length) {
    finishLitChapter();
    return;
  }
  lit.bSlots = new Array(lit.build[0].solution.length).fill(null);
  lit.stage = 'build';
}

// Shared by click-to-place and drop-to-place. Returns false (no re-render)
// when the move is a no-op, matching the action-handler convention.
function placeLitChip(chipIndex, slotIndex) {
  const lit = state.lit;
  if (!lit || lit.bSubmitted) return false;
  if (slotIndex < 0 || slotIndex >= lit.bSlots.length) return false;
  if (lit.bSlots.includes(chipIndex)) return false;
  lit.bSlots[slotIndex] = chipIndex;
  return true;
}

function finishLitChapter() {
  const lit = state.lit;
  const rec = litChapterRecord(lit.bookId, lit.chapterId);
  const firstTime = !rec.done;
  rec.done = true;
  rec.at = new Date().toISOString();
  rec.para = Math.max(0, lit.paragraphCount - 1);
  rec.score = { correct: lit.correct, total: lit.total };
  lit.stage = 'complete';
  // Re-reading a finished chapter is encouraged, but it shouldn't farm XP.
  if (firstTime) awardXp(state, LIT_CHAPTER_XP + lit.correct * LIT_ANSWER_XP);
  queueAutoUpload('literature-chapter');
}

// --- Literature: "Practice weak words" -------------------------------
// A book-wide sibling of the chapter build stage above (state.lit), kept as
// its own session (state.litPractice) rather than folded into state.lit:
// state.lit and everything that reads it (litChapter, litToken, the reader
// itself) hard-assumes one single chapterId, but a weak-words session's
// items are drawn from every chapter in the book, so each queue item
// carries its own chapterId instead (see buildLitWordPracticeQueue).

// Shared by click-to-place and drop-to-place, same contract as placeLitChip
// above just against state.litPractice.slots.
function placeLitPracticeChip(chipIndex, slotIndex) {
  const p = state.litPractice;
  if (!p || p.submitted) return false;
  if (slotIndex < 0 || slotIndex >= p.slots.length) return false;
  if (p.slots.includes(chipIndex)) return false;
  p.slots[slotIndex] = chipIndex;
  return true;
}

// Only increments `count` on a pass (a wrong answer still records the
// sentence as seen, for variety, but doesn't move the word closer to
// retiring) -- same "wrong answers don't count toward the bar" idiom as
// bumpVocabExposure. Retiring deletes the entry outright (from both
// litWordReps and litUnknown) rather than setting a learned flag: unlike
// vocabExposure's count, this counter isn't shared with any other mode that
// might still want to read it afterward. Returns true the moment a word
// retires, so the caller can tally a "words retired this session" count.
function bumpLitWordRep(bookId, lemma, sentenceId, pass) {
  if (!state.litWordReps[bookId]) state.litWordReps[bookId] = {};
  const reps = state.litWordReps[bookId];
  const rec = reps[lemma] || { count: 0, seenSentenceIds: [] };
  if (!rec.seenSentenceIds.includes(sentenceId)) rec.seenSentenceIds.push(sentenceId);
  if (pass) rec.count += 1;
  reps[lemma] = rec;
  if (rec.count >= LIT_WORD_RETIRE_COUNT) {
    delete reps[lemma];
    if (state.litUnknown[bookId]) delete state.litUnknown[bookId][lemma];
    return true;
  }
  return false;
}

function clearActivePracticeUi() {
  state.practice = null;
  state.practiceSetupOpen = false;
  state.lessonPreviewId = null;
  state.litChapterPreviewId = null;
  state.unlockPrompt = null;
  state.pathSkipAheadPromptNodeId = null;
}

function returnToValidLockedView() {
  clearActivePracticeUi();

  const activeCourse = COURSES.find((c) => c.id === state.courseId);
  if (activeCourse && !isCourseUnlocked(activeCourse, state.completed, state.unlockedCourses)) {
    state.launchScreen = true;
    state.view = 'dashboard';
    state.moduleId = null;
    state.lessonId = null;
    state.pathActive = false;
    state.pathHome = false;
    state.litHome = false;
    return;
  }

  if (state.moduleId && !isModuleUnlocked(state.moduleId, state.completed, state.unlockedModules)) {
    state.view = 'dashboard';
    state.moduleId = null;
    state.lessonId = null;
    state.pathActive = false;
    return;
  }

  if (state.moduleId && state.lessonId && !isLessonUnlocked(state.moduleId, state.lessonId, state.completed, state.unlockedModules)) {
    state.view = 'module';
    state.lessonId = null;
    state.pathActive = false;
  }
}

const actions = {
  openDashboard() {
    state.view = 'dashboard';
    state.moduleId = null;
    state.lessonId = null;
    state.practice = null;
    state.pathActive = false;
    state.pathHome = false;
    state.litHome = false;
  },
  // Header's course button (see courseSwitchHtml in js/render.js) -- sends
  // the learner back to the launch screen's course picker rather than
  // switching in place. The next course-card tap resets to that course's
  // module list via chooseCourse.
  openLaunch() {
    state.launchScreen = true;
  },
  // Launch screen's course cards (see js/render.js launchHtml), shown ahead
  // of Home on every boot. A card tap always enters that course's own
  // dashboard/module list, even when the picked course was already active.
  // That keeps the course picker predictable and avoids resuming into a
  // previous lesson, module, practice session, or My Path detour.
  async chooseCourse(el) {
    const id = el.dataset.courseId;
    const course = COURSES.find((c) => c.id === id);
    // Defense in depth -- a locked course's own launch card already
    // dispatches openUnlockPrompt instead of this action (see
    // launchCourseCardHtml in js/render.js), but guard here too in case
    // state.completed/unlockedCourses changes out from under a stale render.
    if (!course || !isCourseUnlocked(course, state.completed, state.unlockedCourses, state.forceUnlockAll)) return false;
    await activateCourse(id);
    state.launchScreen = false;
  },
  openModule(el) {
    const moduleId = el.dataset.moduleId;
    // Defense in depth -- a locked module's own dashboard card already
    // dispatches openUnlockPrompt instead of this action (see dashboardHtml
    // in js/render.js), but guard here too, same reasoning as chooseCourse.
    if (!isModuleUnlocked(moduleId, state.completed, state.unlockedModules, state.forceUnlockAll)) return false;
    state.moduleId = moduleId;
    state.view = 'module';
    state.lessonId = null;
    state.practiceSetupOpen = false;
    state.pathActive = false;
    state.pathHome = false;
    state.litHome = false;
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
    state.litHome = false;
    state.practice = null;
  },
  async openPathGroup(el) {
    const group = findPathGroup(el.dataset.groupId);
    if (!group || !group.sections.length) return false; // not yet built ("Coming soon")
    // Defense in depth -- a locked track's own group cards already dispatch
    // openUnlockPrompt instead of this action (see pathGroupCardHtml), but
    // guard here too, same reasoning as chooseCourse above.
    const track = PATH_TRACKS.find((t) => t.groups.includes(group));
    if (track && !isTrackUnlocked(track, state.completed, state.unlockedTracks, state.forceUnlockAll)) return false;
    await ensureCoursesLoaded(track && track.id === 'advanced' ? ['annahw', 'sarf-advanced'] : ['fstu', 'sarf']);
    state.pathGroupId = group.id;
    state.view = 'path';
    state.pathActive = false;
    state.pathHome = true;
    state.litHome = false;
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
  // Course/path/module locks are direct confirmed unlocks. This writes only
  // the chosen item's own override flag; it never marks lessons complete or
  // backfills earlier modules.
  confirmIndividualUnlock() {
    const p = state.unlockPrompt;
    if (!p || !['course', 'track', 'module'].includes(p.type)) return false;
    if (p.type === 'course') state.unlockedCourses[p.id] = true;
    else if (p.type === 'track') state.unlockedTracks[p.id] = true;
    else state.unlockedModules[p.id] = true;
    state.unlockPrompt = null;
    queueAutoUpload('direct-unlock');
  },
  // Legacy path for already-running module skip-ahead unlock tests. The
  // current UI no longer starts new ones; module cards use
  // confirmIndividualUnlock instead.
  // Builds the module skip-ahead unlock test's pool (see
  // moduleSkipTestPool) and enters it as an ordinary graded practice
  // session (source: 'unlockTest') -- passing it at UNLOCK_TEST_PASS_RATIO
  // records the module unlock in finalizeUnlockTest above.
  async startUnlockTest(el) {
    const p = state.unlockPrompt;
    if (!p || p.type !== 'module') return false;
    const courseId = courseIdForModule(p.id);
    if (courseId) await ensureCoursesLoaded([courseId]);
    const subPools = moduleSkipTestSubPools(p.id);
    const length = MODULE_SKIP_TEST_LENGTH;
    const queue = buildUnlockTestQueue(subPools, length);
    if (!queue.length) return false;
    state.unlockPrompt = null;
    state.launchScreen = false;
    state.practice = {
      source: 'unlockTest', unlockKind: p.type, targetId: p.id, kind: 'unlockTest',
      moduleId: null, lessonId: null, exitView: 'dashboard',
      queue, index: 0, log: [], startedAt: Date.now(),
      selected: undefined, submitted: false, correct: false, combo: 0, xpGained: 0,
    };
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  // A failed module unlock test offers a fresh, freshly-shuffled attempt
  // over the same pool -- never a "redo what you missed" subset, same
  // reasoning as retryMasteryV2.
  async retryUnlockTest() {
    const p = state.practice;
    if (!p || p.source !== 'unlockTest' || p.unlockKind !== 'module') return false;
    const courseId = courseIdForModule(p.targetId);
    if (courseId) await ensureCoursesLoaded([courseId]);
    const queue = buildUnlockTestQueue(moduleSkipTestSubPools(p.targetId), MODULE_SKIP_TEST_LENGTH);
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
  async enterPathLesson(el) {
    const courseId = el.dataset.courseId;
    if (courseId !== state.courseId) {
      await setActiveCourse(courseId);
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
    if (checkPathMilestones()) queueAutoUpload('path-milestone');
  },
  // Every checkpoint/section-test row opens pathCheckpointSetupHtml's popout
  // first (openPathCheckpointSetup below) -- a vocab direction picker for
  // vocabCheckpoint, and once a node's already been passed once, a choice
  // between redoing it normally or attempting its double-length, 100%-
  // required Mastery variant (data-mastery="1" on this same action).
  async startPathCheckpoint(el) {
    const node = findPathNode(el.dataset.nodeId);
    if (!node) return false;
    await ensureCoursesLoaded(node.pathId === 'advanced' ? ['annahw', 'sarf-advanced'] : ['fstu', 'sarf']);
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
    else if (node.type === 'sectionTest' || node.type === 'groupTest') queue = buildPathSectionTestQueue(node, ctx);
    else return false;
    if (!queue.length) return false;
    state.pathCheckpointSetupNodeId = null;
    state.practice = {
      source: 'path', kind: node.type, nodeId: node.id, moduleId: null, lessonId: null, mastery, skipAhead: false,
      queue, index: 0, log: [], startedAt: Date.now(),
      selected: undefined, submitted: false, correct: false, combo: 0, xpGained: 0,
    };
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  // A LOCKED section/group test's "Jump ahead" prompt (see
  // pathSkipAheadPromptHtml) -- passing it is graded exactly like the
  // normal test (finalizePathSession), but draws from the wider cumulative
  // pool (ctx.skipAhead, see buildPathSectionTestQueue) and, on a pass,
  // backfills everything before it too (see completePriorPathNodes). Never
  // offered for an already-unlocked node -- that's startPathCheckpoint's
  // job, via the ordinary setup popout.
  async startPathSkipAheadTest(el) {
    const node = findPathNode(el.dataset.nodeId);
    if (!node || (node.type !== 'sectionTest' && node.type !== 'groupTest')) return false;
    await ensureCoursesLoaded(node.pathId === 'advanced' ? ['annahw', 'sarf-advanced'] : ['fstu', 'sarf']);
    const ctx = {
      practiceHistory: state.practiceHistory, pathReps: state.pathReps, vocabExposure: state.vocabExposure,
      vocabDirection: state.pathVocabDirection || 'en-ar', mastery: false, skipAhead: true,
    };
    const queue = buildPathSectionTestQueue(node, ctx);
    if (!queue.length) return false;
    state.pathSkipAheadPromptNodeId = null;
    state.practice = {
      source: 'path', kind: node.type, nodeId: node.id, moduleId: null, lessonId: null, mastery: false, skipAhead: true,
      queue, index: 0, log: [], startedAt: Date.now(),
      selected: undefined, submitted: false, correct: false, combo: 0, xpGained: 0,
    };
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  openPathSkipAheadPrompt(el) {
    state.pathSkipAheadPromptNodeId = el.dataset.nodeId;
  },
  closePathSkipAheadPrompt(el, e) {
    if (e && e.target !== el) return false;
    state.pathSkipAheadPromptNodeId = null;
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
    if (state.practiceSetupOpen) state.practiceTarkeebTranslations = state.tarkeebTranslations !== false;
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
  setPracticeTarkeebTranslation(el) {
    state.practiceTarkeebTranslations = el.dataset.show !== '0';
  },
  startPractice(el) {
    const kind = el.dataset.kind;
    const count = +el.dataset.count;
    const pool = kind === 'tarkeeb'
      ? getTarkeebPool(state.practiceModuleId, state.completed, state.forceUnlockAll)
      : kind === 'vocab'
        ? getVocabPool(state.practiceModuleId, state.completed, state.practiceVocabType || 'en-ar', state.forceUnlockAll)
        : getMcqPool(state.practiceModuleId, state.completed, state.forceUnlockAll);
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
      tarkeebTranslations: kind === 'tarkeeb'
        ? state.practiceTarkeebTranslations !== false
        : state.tarkeebTranslations !== false,
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
    queueAutoUpload('practice-answer');
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
  openAccount() {
    state.view = 'account';
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
  pickHeadingFace(el) {
    state.arabicHeadingFace = el.dataset.headingFace || 'body';
    state.kufiHeadings = state.arabicHeadingFace === 'kufi';
  },
  setLessonTextScale(el) {
    state.lessonTextScale = normalizeLessonTextScale(el.value);
  },
  setLitTextScale(el) {
    state.litTextScale = normalizeLitTextScale(el.value);
  },
  toggleTarkeebTranslations() {
    state.tarkeebTranslations = state.tarkeebTranslations === false;
    state.practiceTarkeebTranslations = state.tarkeebTranslations !== false;
  },
  toggleTarkeebLabelsBlue() {
    state.tarkeebLabelsBlue = state.tarkeebLabelsBlue !== true;
  },
  toggleCourseLocks() {
    if (state.forceUnlockAll) {
      state.forceUnlockAll = false;
      state.forceUnlockAllExplicit = true;
      state.forceUnlockPrompt = false;
      returnToValidLockedView();
      const pathGroup = state.pathGroupId && findPathGroup(state.pathGroupId);
      const pathTrack = pathGroup && PATH_TRACKS.find((t) => t.groups.includes(pathGroup));
      if (pathTrack && !isTrackUnlocked(pathTrack, state.completed, state.unlockedTracks)) {
        state.pathGroupId = null;
        if (state.pathHome) state.view = 'pathGroups';
      }
      queueAutoUpload('settings-change');
      return;
    }
    state.forceUnlockPrompt = true;
  },
  requestForceUnlockAll() {
    return actions.toggleCourseLocks();
  },
  confirmForceUnlockAll() {
    state.forceUnlockAll = true;
    state.forceUnlockAllExplicit = true;
    state.forceUnlockPrompt = false;
    state.unlockPrompt = null;
    state.pathSkipAheadPromptNodeId = null;
    queueAutoUpload('settings-change');
  },
  closeForceUnlockPrompt(el, e) {
    if (e && e.target !== el) return false;
    state.forceUnlockPrompt = false;
  },
  cancelForceUnlockAll() {
    state.forceUnlockPrompt = false;
  },
  // --- Module progress reset actions -----------------------------------
  openResetModulePrompt(el) {
    const moduleId = el.dataset.moduleId;
    if (!getModule(moduleId)) return false;
    state.resetModulePromptId = moduleId;
  },
  closeResetModulePrompt(el, e) {
    if (e && e.target !== el) return false;
    state.resetModulePromptId = null;
  },
  cancelResetModulePrompt() {
    state.resetModulePromptId = null;
  },
  async confirmResetModule(el) {
    const moduleId = el.dataset.moduleId;
    if (!getModule(moduleId)) return false;
    resetModuleProgress(moduleId);
    state.resetModulePromptId = null;
    state.lessonId = null;
    state.view = 'module';
    state.practice = null;
    // Force-push the reset state to the cloud without merging. The normal
    // queueAutoUpload path calls mergeAccountSaveWithRetry, which unions
    // local and remote -- restoring the just-deleted keys from the cloud
    // and silently undoing the reset.
    //
    // Sequencing matters: an in-flight runAutoUpload may have already
    // started a merge and will push pre-reset data to the cloud when it
    // finishes. We cancel the pending timer so no NEW merge is queued,
    // then wait until autoUploadRunning goes false (the in-flight merge
    // finishes), THEN persist the reset state and force-push it. That
    // ensures our push is always the last thing written to the cloud.
    if (state.account.user && state.account.backendUrl && !suppressPersist) {
      clearTimeout(autoUploadTimer);
      autoUploadTimer = null;
      state.account.autoUploadStatus = 'queued';
      state.account.autoUploadMessage = 'Syncing module reset to your account...';
      // Wait for any in-flight merge to finish before we write, so our
      // force-push is always the final cloud state.
      while (autoUploadRunning) {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      try {
        // Persist the reset state now, then push it unconditionally
        // (no expectedMeta -- the whole point is to overwrite whatever
        // is currently in the cloud, even if the just-finished merge
        // wrote pre-reset data there a moment ago).
        await persist(state);
        await uploadLocalProgress();
        state.account.autoUploadStatus = 'synced';
        state.account.autoUploadMessage = 'Module reset synced to your account.';
        refreshCloudSaveStatus().catch(() => {});
      } catch (e) {
        state.account.autoUploadStatus = 'error';
        state.account.autoUploadMessage = e.message || 'Could not sync module reset to your account.';
      }
      rerenderAccountIfOpen();
    }
  },
  toggleKufiHeadings() {
    state.arabicHeadingFace = state.kufiHeadings ? 'body' : 'kufi';
    state.kufiHeadings = state.arabicHeadingFace === 'kufi';
  },
  resetAppearance() {
    state.theme = 'manuscript';
    state.accent = 'gold';
    state.arabicFace = 'naskh';
    state.arabicHeadingFace = 'body';
    state.lessonTextScale = 100;
    state.litTextScale = 100;
    state.kufiHeadings = false;
  },
  async registerAccount() {
    const email = document.getElementById('account-email')?.value || '';
    const password = document.getElementById('account-password')?.value || '';
    state.account.status = 'working';
    state.account.message = 'Creating account...';
    rerender();
    try {
      const result = await register(email, password);
      if (result.disabled) throw new Error('Sync server is not configured.');
      state.account.user = result.user;
      state.account.pendingSyncAction = null;
      state.account.message = 'Account created. Syncing save data...';
      await flushPersist();
      await mergeAccountSaveWithRetry();
      state.account.autoUploadStatus = 'synced';
      state.account.autoUploadMessage = 'Automatic sync is ready for future lesson, quiz, and practice progress.';
      state.account.message = 'Account created and save data synced.';
    } catch (e) {
      state.account.message = e.message || 'Could not create account.';
    } finally {
      state.account.status = 'idle';
    }
  },
  async loginAccount() {
    const email = document.getElementById('account-email')?.value || '';
    const password = document.getElementById('account-password')?.value || '';
    state.account.status = 'working';
    state.account.message = 'Signing in...';
    rerender();
    try {
      const result = await login(email, password);
      if (result.disabled) throw new Error('Sync server is not configured.');
      state.account.user = result.user;
      state.account.pendingSyncAction = null;
      state.account.message = 'Signed in. Syncing save data...';
      await flushPersist();
      await mergeAccountSaveWithRetry();
      state.account.autoUploadStatus = 'synced';
      state.account.autoUploadMessage = 'Automatic sync is ready for future lesson, quiz, and practice progress.';
      state.account.message = 'Signed in and save data synced.';
    } catch (e) {
      state.account.message = e.message || 'Could not sign in.';
    } finally {
      state.account.status = 'idle';
    }
  },
  async logoutAccount() {
    state.account.status = 'working';
    state.account.message = 'Signing out...';
    rerender();
    try {
      await logout();
      state.account.user = null;
      state.account.pendingSyncAction = null;
      state.account.cloudStatus = null;
      state.account.localStatus = null;
      state.account.syncBaseMeta = null;
      state.account.autoUploadStatus = 'idle';
      state.account.autoUploadMessage = '';
      clearTimeout(autoUploadTimer);
      autoUploadTimer = null;
      state.account.message = 'Signed out. Local offline progress remains on this device.';
    } catch (e) {
      state.account.message = e.message || 'Could not sign out.';
    } finally {
      state.account.status = 'idle';
    }
  },
  requestUploadAccountProgress() {
    state.account.pendingSyncAction = 'upload';
    state.account.message = '';
  },
  requestDownloadAccountProgress() {
    state.account.pendingSyncAction = 'download';
    state.account.message = '';
  },
  cancelAccountSync() {
    state.account.pendingSyncAction = null;
    state.account.message = '';
  },
  async refreshCloudSaveStatus() {
    state.account.status = 'working';
    state.account.message = 'Checking cloud save data...';
    rerender();
    try {
      await refreshCloudSaveStatus();
      state.account.message = 'Cloud save status updated.';
    } catch (e) {
      state.account.message = e.message || 'Could not check cloud save data.';
    } finally {
      state.account.status = 'idle';
    }
  },
  async refreshLocalSaveStatus() {
    state.account.status = 'working';
    state.account.message = 'Checking this device save data...';
    rerender();
    try {
      await refreshLocalSaveStatus();
      state.account.message = 'This device save status updated.';
    } catch (e) {
      state.account.message = e.message || 'Could not check this device save data.';
    } finally {
      state.account.status = 'idle';
    }
  },
  async confirmAccountSync() {
    const direction = state.account.pendingSyncAction;
    if (direction === 'upload') return actions.uploadAccountProgress();
    if (direction === 'download') return actions.downloadAccountProgress();
  },
  async downloadAccountProgress() {
    state.account.status = 'working';
    state.account.pendingSyncAction = null;
    state.account.message = 'Merging cloud save data with this device...';
    rerender();
    try {
      await flushPersist();
      suppressPersist = true;
      cancelPendingPersist();
      await mergeAccountSaveWithRetry();
      state.account.autoUploadStatus = 'synced';
      state.account.autoUploadMessage = 'Automatic sync is ready for future lesson, quiz, and practice progress.';
      state.account.message = 'Merged cloud and device save data. This device is up to date.';
    } catch (e) {
      state.account.message = e.message || 'Could not download save data.';
    } finally {
      suppressPersist = false;
      state.account.status = 'idle';
    }
  },
  async uploadAccountProgress() {
    state.account.status = 'working';
    state.account.pendingSyncAction = null;
    state.account.message = 'Merging this device save data with your account...';
    rerender();
    try {
      await flushPersist();
      suppressPersist = true;
      cancelPendingPersist();
      await mergeAccountSaveWithRetry();
      state.account.autoUploadStatus = 'synced';
      state.account.autoUploadMessage = 'Automatic sync is ready for future lesson, quiz, and practice progress.';
      state.account.message = 'Merged this device and cloud save data. Your account is up to date.';
    } catch (e) {
      state.account.message = e.message || 'Could not upload save data.';
    } finally {
      suppressPersist = false;
      state.account.status = 'idle';
    }
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
    state.litHome = false;
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
    const eligible = state.forceUnlockAll ? MODULES : MODULES.filter((m) => isModuleComplete(m.id, state.completed));
    if (!eligible.length) return false;
    let moduleId = null;
    if (state.scheduleRevisionMode === 'random') {
      moduleId = eligible[Math.floor(Math.random() * eligible.length)].id;
    } else if (eligible.some((m) => m.id === state.scheduleRevisionModuleId)) {
      moduleId = state.scheduleRevisionModuleId;
    }
    if (!moduleId) return false;
    const queue = buildModuleRevisionQueue(moduleId, state.completed, state.forceUnlockAll);
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
    const pool = getUnlockedVocabPool(state.completed, undefined, state.forceUnlockAll);
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
  // Same data-action-on-'change' dispatch as setScheduleDeadline above. The
  // <select>'s values are already the ints 0-23 (see scheduleDeadlineHtml),
  // so this only needs to guard against a tampered/missing value, not parse
  // a free-form one.
  setDailyResetHour(el) {
    const n = Number(el.value);
    state.dailyResetHour = Number.isInteger(n) && n >= 0 && n <= 23 ? n : 0;
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
    state.litHome = false;
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
    if (!lesson) return false;
    if (!state.forceUnlockAll && !isLessonReadyForQuiz(lesson, state.exStates, state.moduleId, state.lessonId)) return false;
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
    queueAutoUpload('concept-exercise');
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
    queueAutoUpload('lesson-exercise');
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
    queueAutoUpload('quiz-complete');
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
    queueAutoUpload('lesson-complete');
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
      queueAutoUpload('practice-answer');
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

  // --- Literature (content-lit/) ---------------------------------------
  // The Library is a top-level context of its own (state.litHome), not a
  // course: nothing here touches courseId/MODULES. Reading a chapter is one
  // session on state.lit, transient like state.practice -- the only things
  // that outlive it are how far the chapter got and whether it finished
  // (state.litProgress), and the words marked unknown (state.litUnknown).
  openLibrary() {
    enterLitContext();
    state.view = 'library';
    state.lit = null;
    state.litBookId = null;
    state.litChapterId = null;
  },
  openLitBook(el) {
    const bookId = el.dataset.bookId || state.litBookId;
    if (!getLitBook(bookId)) return false;
    enterLitContext();
    state.litBookId = bookId;
    state.view = 'litBook';
    state.lit = null;
  },
  // "Free read / Practice" mode-picker modal, mirroring openLessonPreview's
  // job for grammar lessons.
  openLitChapterPreview(el) {
    const bookId = el.dataset.bookId;
    const chapterId = el.dataset.chapterId;
    const book = getLitBook(bookId);
    const index = book ? book.chapters.findIndex((c) => c.id === chapterId) : -1;
    if (index === -1) return false;
    // Defense in depth -- a locked chapter's row is already disabled (see
    // litChapterRowHtml in js/render.js), same reasoning as chooseCourse.
    if (!isChapterUnlocked(book, index, state.litProgress, state.forceUnlockAll)) return false;
    state.litBookId = bookId;
    state.litChapterPreviewId = chapterId;
  },
  // Fires from the backdrop; a click that landed inside the dialog is not a
  // click-outside, so it changes nothing.
  closeLitChapterPreview(el, e) {
    if (e && e.target !== el) return false;
    state.litChapterPreviewId = null;
  },
  cancelLitChapterPreview() {
    state.litChapterPreviewId = null;
  },
  // Free reading: no comprehension checks, no drills, and it never marks the
  // chapter done (see startLitSession) -- always opens at the top regardless
  // of how far Practice mode has gotten.
  async startLitFreeRead() {
    const bookId = state.litBookId;
    const chapterId = state.litChapterPreviewId;
    const chapter = await loadChapter(bookId, chapterId);
    if (!chapter) return false;
    state.litChapterPreviewId = null;
    enterLitContext();
    state.litBookId = bookId;
    state.litChapterId = chapterId;
    state.view = 'litRead';
    startLitSession(chapter, 0, true);
  },
  // Practice: the graded pass, and the only route to marking a chapter done.
  // A chapter not yet done reads paragraph by paragraph with its
  // comprehension checks, same as ever; a chapter already done skips
  // straight to the Patterns/Build drills at the end -- coming back to
  // Practice a finished chapter is for the drills, not a reread (that's what
  // Free read is for).
  async startLitPractice() {
    const bookId = state.litBookId;
    const chapterId = state.litChapterPreviewId;
    const chapter = await loadChapter(bookId, chapterId);
    if (!chapter) return false;
    state.litChapterPreviewId = null;
    enterLitContext();
    state.litBookId = bookId;
    state.litChapterId = chapterId;
    state.view = 'litRead';
    const done = isChapterDone(state.litProgress, bookId, chapterId);
    const para = done ? 0 : resumeParagraph(state.litProgress, bookId, chapterId, chapter.paragraphs.length);
    startLitSession(chapter, para, false);
    if (done) startLitWorkshop(chapter);
  },
  exitLitChapter() {
    state.lit = null;
    state.view = state.litBookId ? 'litBook' : 'library';
  },
  // Loads every chapter of the book (memoized by loadChapter, so this only
  // ever pays the cost once per book per session -- see content-lit/
  // index.js) to scan for eligible sentences carrying an unknown word.
  // Mirrors startLitFreeRead/startLitPractice's disabled-when-unavailable
  // guard: the hero button is already disabled with no unknown words, this
  // is defense in depth against a stale click.
  async openLitWordPractice(el) {
    const bookId = el.dataset.bookId;
    const book = getLitBook(bookId);
    if (!book) return false;
    const lemmas = unknownLemmas(state.litUnknown, bookId);
    if (!lemmas.length) return false;
    const lemmaSet = new Set(lemmas);
    const chapters = await Promise.all(book.chapters.map((c) => loadChapter(bookId, c.id)));
    const candidatesByLemma = new Map();
    chapters.forEach((chapter, i) => {
      if (!chapter) return;
      const chapterId = book.chapters[i].id;
      chapterSentences(chapter).filter(isBuildEligible).forEach((s) => {
        s.tokens.forEach((t) => {
          if (!lemmaSet.has(t.lemma)) return;
          if (!candidatesByLemma.has(t.lemma)) candidatesByLemma.set(t.lemma, []);
          const list = candidatesByLemma.get(t.lemma);
          if (!list.some((existing) => existing.id === s.id)) list.push({ ...s, chapterId });
        });
      });
    });
    if (!candidatesByLemma.size) return false;
    const queue = buildLitWordPracticeQueue(candidatesByLemma, state.litWordReps[bookId] || {});
    if (!queue.length) return false;
    enterLitContext();
    state.litBookId = bookId;
    state.litPractice = {
      bookId,
      queue,
      index: 0,
      slots: new Array(queue[0].solution.length).fill(null),
      submitted: false,
      correct: 0,
      total: 0,
      retired: 0,
    };
    state.view = 'litWordPractice';
  },
  exitLitWordPractice() {
    state.litPractice = null;
    state.view = state.litBookId ? 'litBook' : 'library';
  },
  litWordPracticeChip(el) {
    const p = state.litPractice;
    if (!p || p.submitted) return false;
    return placeLitPracticeChip(+el.dataset.chip, p.slots.indexOf(null));
  },
  litWordPracticeSlot(el) {
    const p = state.litPractice;
    if (!p || p.submitted) return false;
    const slot = +el.dataset.slot;
    if (p.slots[slot] === null) return false;
    p.slots[slot] = null;
  },
  litWordPracticeClear() {
    const p = state.litPractice;
    if (!p || p.submitted) return false;
    p.slots = p.slots.map(() => null);
  },
  litWordPracticeCheck() {
    const p = state.litPractice;
    if (!p || p.submitted || p.slots.some((s) => s === null)) return false;
    const item = p.queue[p.index];
    p.submitted = true;
    p.total += 1;
    const pass = p.slots.every((ci, i) => item.chips[ci].surface === item.solution[i]);
    if (pass) {
      p.correct += 1;
      awardXp(state, LIT_ANSWER_XP);
    }
    if (bumpLitWordRep(p.bookId, item.lemma, item.sentenceId, pass)) p.retired += 1;
    queueAutoUpload('lit-word-practice');
  },
  litWordPracticeNext() {
    const p = state.litPractice;
    if (!p || !p.submitted) return false;
    if (p.index + 1 >= p.queue.length) {
      p.index += 1;
      return;
    }
    p.index += 1;
    p.submitted = false;
    p.slots = new Array(p.queue[p.index].solution.length).fill(null);
  },
  rereadLitChapter() {
    const chapter = litChapter();
    if (!chapter) return false;
    startLitSession(chapter, 0, false);
  },
  // A word carries two gestures, split by the double-click window:
  //
  //   tap        -> highlight it and show its form in the margin; tapping
  //                 the same word again clears the highlight, so a word can
  //                 always be put back the way it was found.
  //   tap twice  -> mark it unknown (and leave it highlighted), the
  //                 double-click gesture from before.
  //
  // See LIT_DOUBLE_CLICK_MS for why the double-click is timed by hand rather
  // than listened for.
  litWord(el) {
    const lit = state.lit;
    if (!lit) return false;
    const s = el.dataset.s;
    const t = +el.dataset.t;
    const key = `${s}:${t}`;
    const now = Date.now();
    const prev = lit.lastWordClick;

    if (prev && prev.key === key && now - prev.at < LIT_DOUBLE_CLICK_MS) {
      lit.lastWordClick = null;
      lit.word = { s, t };
      const token = litToken(s, t);
      if (token) toggleLitUnknown(token.lemma);
      return;
    }

    const alreadyOn = !!(lit.word && lit.word.s === s && lit.word.t === t);
    lit.word = alreadyOn ? null : { s, t };
    lit.lastWordClick = { key, at: now };
  },
  litToggleUnknown(el) {
    if (!state.lit || !el.dataset.lemma) return false;
    toggleLitUnknown(el.dataset.lemma);
  },
  litToggleGloss(el) {
    const lit = state.lit;
    if (!lit) return false;
    lit.gloss = lit.gloss === el.dataset.s ? null : el.dataset.s;
  },
  // A standing preference, not a per-session one -- persisted like theme or
  // Arabic face. Switching never changes what is correct: `answer` indexes
  // both option lists (see the converter's own check on options_en).
  setLitCheckLang(el) {
    const lang = el.dataset.lang === 'en' ? 'en' : 'ar';
    if (state.litCheckLang === lang) return false;
    state.litCheckLang = lang;
  },
  toggleLitHoverTranslate() {
    state.litHoverTranslate = state.litHoverTranslate === false;
    queueAutoUpload('settings-change');
  },
  litToggleFullPara(el) {
    const lit = state.lit;
    if (!lit) return false;
    const pi = +el.dataset.para;
    lit.fullPara = lit.fullPara === pi ? null : pi;
  },
  // Reveal-on-click with no retry, the same rule as a lesson's own exercise
  // (see isLessonExerciseItemPassed in content/index.js): a wrong answer
  // still counts as read, and still lets the passage move on.
  litCheckOption(el) {
    const lit = state.lit;
    const chapter = litChapter();
    if (!lit || !chapter) return false;
    const ci = +el.dataset.check;
    const key = `${lit.para}:${ci}`;
    if (lit.checks[key]) return false;
    const check = chapter.paragraphs[lit.para].checks[ci];
    const selected = +el.dataset.option;
    const correct = selected === check.answer;
    lit.checks[key] = { selected, correct };
    lit.total += 1;
    if (correct) lit.correct += 1;
  },
  // The page travels back up to the top BEFORE the paragraph is swapped
  // underneath it -- turning a page shouldn't teleport, and landing at the
  // top of a fresh paragraph is where reading resumes anyway. The state
  // change is awaited behind the scroll, so the dispatcher's re-render
  // happens once the page has arrived.
  async litNextParagraph() {
    const lit = state.lit;
    const chapter = litChapter();
    if (!lit || !chapter) return false;
    const para = chapter.paragraphs[lit.para];
    if (!lit.freeRead && !para.checks.every((_, ci) => lit.checks[`${lit.para}:${ci}`])) return false;
    const lastPara = lit.para + 1 >= chapter.paragraphs.length;
    // Free reading never gates on checks and never falls into the drills --
    // it just stops at the last paragraph, same as the "Previous" button
    // already stops at the first.
    if (lit.freeRead && lastPara) return false;
    await scrollReaderToTop();
    lit.word = null;
    lit.gloss = null;
    lit.fullPara = null;
    if (lastPara) {
      startLitWorkshop(chapter);
      return;
    }
    lit.para += 1;
    if (!lit.freeRead) {
      const rec = litChapterRecord(lit.bookId, lit.chapterId);
      if (lit.para > (rec.para || 0)) rec.para = lit.para;
      queueAutoUpload('literature-paragraph');
    }
  },
  // Back through paragraphs already read. Their answered checks are still on
  // the session (lit.checks is keyed by paragraph index), so a revisited
  // paragraph shows its questions answered and can be moved forward from
  // again immediately. rec.para -- the furthest reached -- never goes down.
  async litPrevParagraph() {
    const lit = state.lit;
    if (!lit || lit.para <= 0) return false;
    await scrollReaderToTop();
    lit.word = null;
    lit.gloss = null;
    lit.fullPara = null;
    lit.para -= 1;
  },
  litWorkshopChip(el) {
    const lit = state.lit;
    if (!lit || lit.wSubmitted) return false;
    lit.wSelected = +el.dataset.chip;
  },
  litWorkshopSlot() {
    const lit = state.lit;
    if (!lit || lit.wSubmitted || lit.wSelected === null) return false;
    lit.wSelected = null;
  },
  litWorkshopCheck() {
    const lit = state.lit;
    if (!lit || lit.wSubmitted || lit.wSelected === null) return false;
    lit.wSubmitted = true;
    lit.total += 1;
    if (lit.wSelected === lit.workshop[lit.wIndex].answer) lit.correct += 1;
  },
  litWorkshopNext() {
    const lit = state.lit;
    if (!lit || !lit.wSubmitted) return false;
    if (lit.wIndex + 1 >= lit.workshop.length) {
      startLitBuild(litChapter());
      return;
    }
    lit.wIndex += 1;
    lit.wSelected = null;
    lit.wSubmitted = false;
  },
  // Click-to-place fills the first empty slot (left-to-right in reading
  // order, so a straight run through the sentence needs no slot clicks at
  // all); dragging targets one specific slot instead.
  litBuildChip(el) {
    const lit = state.lit;
    if (!lit || lit.bSubmitted) return false;
    return placeLitChip(+el.dataset.chip, lit.bSlots.indexOf(null));
  },
  litBuildSlot(el) {
    const lit = state.lit;
    if (!lit || lit.bSubmitted) return false;
    const slot = +el.dataset.slot;
    if (lit.bSlots[slot] === null) return false;
    lit.bSlots[slot] = null;
  },
  litBuildClear() {
    const lit = state.lit;
    if (!lit || lit.bSubmitted) return false;
    lit.bSlots = lit.bSlots.map(() => null);
  },
  litBuildCheck() {
    const lit = state.lit;
    if (!lit || lit.bSubmitted || lit.bSlots.some((s) => s === null)) return false;
    const item = lit.build[lit.bIndex];
    lit.bSubmitted = true;
    lit.total += 1;
    if (lit.bSlots.every((ci, i) => item.chips[ci].surface === item.solution[i])) lit.correct += 1;
  },
  litBuildNext() {
    const lit = state.lit;
    if (!lit || !lit.bSubmitted) return false;
    if (lit.bIndex + 1 >= lit.build.length) {
      finishLitChapter();
      return;
    }
    lit.bIndex += 1;
    lit.bSubmitted = false;
    lit.bSlots = new Array(lit.build[lit.bIndex].solution.length).fill(null);
  },

  closeBadgeModal() {
    state.badgeModal = state.badgeQueue.length ? state.badgeQueue.shift() : null;
  },

  // --- Window controls (#window-controls) -- pure IPC side effects, no
  // app state changes, so each returns false to skip the usual rerender. ---
  minimizeWindow() {
    electronWindow?.minimize();
    return false;
  },
  toggleMaximizeWindow() {
    electronWindow?.toggleMaximize();
    return false;
  },
  closeWindow() {
    electronWindow?.close();
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
function refocusSelector(el) {
  const action = el.dataset.action;
  // The literature drills' chips and slots have the same problem and the
  // same fix. A placed chip becomes disabled, so focus goes to whichever
  // chip is still available rather than to the one just used.
  if (action === 'litBuildChip' || action === 'litWorkshopChip') return '.lit-chips .lit-chip:not([disabled])';
  // Reading is a long tab-through -- losing focus back to <body> on every
  // word or gloss would send a keyboard user to the top of the page.
  if (action === 'litWord') return `[data-action="litWord"][data-s="${el.dataset.s}"][data-t="${el.dataset.t}"]`;
  if (action === 'litToggleGloss') return `.lit-gloss-btn[data-s="${el.dataset.s}"]`;
  if (action === 'litBuildSlot') return `[data-action="litBuildSlot"][data-slot="${el.dataset.slot}"]`;
  if (action === 'litWorkshopSlot') return '[data-action="litWorkshopSlot"]';
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
  const result = handler(el, e);
  if (result && typeof result.then === 'function') {
    result.then((value) => {
      if (value !== false) rerender(refocusSelector(el));
    });
    return;
  }
  if (result === false) return;
  rerender(refocusSelector(el));
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
      if (handler && handler(el, e) !== false) rerender(refocusSelector(el));
      return;
    }
  }
  if (e.key !== 'Escape') return;
  if (state.lessonPreviewId) {
    state.lessonPreviewId = null;
    rerender();
  } else if (state.litChapterPreviewId) {
    state.litChapterPreviewId = null;
    rerender();
  } else if (state.pathCheckpointSetupNodeId) {
    state.pathCheckpointSetupNodeId = null;
    rerender();
  } else if (state.forceUnlockPrompt) {
    state.forceUnlockPrompt = false;
    rerender();
  } else if (state.resetModulePromptId) {
    state.resetModulePromptId = null;
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
    const result = actions[el.dataset.action](el, e);
    if (result && typeof result.then === 'function') {
      result.then((value) => {
        if (value !== false) rerender();
      });
      return;
    }
    if (result !== false) rerender();
    return;
  }
});

// Both text-size sliders update live as they're dragged: the action runs and
// the custom property is reapplied WITHOUT a re-render, so the preview
// resizes under the thumb instead of the slider being rebuilt mid-drag (which
// would drop the pointer capture). Only the readout is patched by hand.
document.addEventListener('input', (e) => {
  const el = e.target.closest('input[type="range"][data-action="setLessonTextScale"], input[type="range"][data-action="setLitTextScale"]');
  if (!el || el.disabled) return;
  const isLit = el.dataset.action === 'setLitTextScale';
  actions[el.dataset.action](el, e);
  applyAppearance(state);
  const value = root.querySelector(isLit ? '[data-lit-text-scale-value]' : '[data-lesson-text-scale-value]');
  if (value) value.textContent = `${isLit ? state.litTextScale : state.lessonTextScale}%`;
  persistSoon(state);
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

// --- drag-and-drop for the literature build exercise --------------------
// Same delegated shape as تركيب above, and deliberately separate from it:
// the two share no state, and a build slot is an ordered position in one
// sentence rather than a label on a diagram. Clicking works throughout too
// (litBuildChip/litBuildSlot), so dragging is never the only way in.

let litDragChip = null;
// Which tray the dragged chip came from: the build tray fills one slot of a
// sentence, the workshop tray fills that drill's single blank. Both use
// .lit-chip/.lit-slot, so the drop needs to know which it is looking at.
let litDragAction = null;

document.addEventListener('dragstart', (e) => {
  const chip = e.target.closest('.lit-chip[draggable="true"]');
  if (!chip) return;
  litDragChip = +chip.dataset.chip;
  litDragAction = chip.dataset.action;
  e.dataTransfer.effectAllowed = 'move';
  requestAnimationFrame(() => chip.classList.add('dragging'));
});

document.addEventListener('dragover', (e) => {
  const slot = e.target.closest('.lit-slot');
  if (!slot || litDragChip === null) return;
  e.preventDefault();
  if (!slot.classList.contains('drag-over')) {
    document.querySelectorAll('.lit-slot.drag-over').forEach((s) => s.classList.remove('drag-over'));
    slot.classList.add('drag-over');
  }
});

document.addEventListener('dragleave', (e) => {
  const slot = e.target.closest('.lit-slot');
  if (slot) slot.classList.remove('drag-over');
});

document.addEventListener('drop', (e) => {
  const slot = e.target.closest('.lit-slot');
  if (!slot || litDragChip === null) return;
  e.preventDefault();
  slot.classList.remove('drag-over');
  let changed = false;
  if (litDragAction === 'litWorkshopChip') {
    const lit = state.lit;
    if (lit && !lit.wSubmitted && slot.dataset.action === 'litWorkshopSlot') {
      lit.wSelected = litDragChip;
      changed = true;
    }
  } else if (slot.dataset.slot !== undefined) {
    changed = placeLitChip(litDragChip, +slot.dataset.slot);
  }
  litDragChip = null;
  litDragAction = null;
  if (changed) rerender();
});

document.addEventListener('dragend', (e) => {
  const chip = e.target.closest('.lit-chip');
  if (chip) chip.classList.remove('dragging');
  document.querySelectorAll('.lit-slot.drag-over').forEach((s) => s.classList.remove('drag-over'));
  litDragChip = null;
  litDragAction = null;
});

// --- window controls (#window-drag-region/#window-controls) ------------
// Static markup outside #root (see index.html's comment), so its listeners
// are wired up once here rather than through the data-action delegation's
// rerender-driven re-binding -- the element is never destroyed/recreated.

if (electronWindow) {
  // The window could already be maximized on this very first paint (e.g.
  // the OS remembered the last window state) -- sync once up front, then
  // keep listening for every later change, including an OS-level one
  // (edge-drag snap, Win+Up) that never goes through this window's own
  // maximize button at all.
  electronWindow.isMaximized().then((isMaximized) => {
    document.body.classList.toggle('is-maximized', isMaximized);
  });
  electronWindow.onMaximizedChanged((isMaximized) => {
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
  electronWindow?.toggleMaximize();
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

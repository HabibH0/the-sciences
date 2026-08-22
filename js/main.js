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
  conceptsToRender,
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
  chapterRecord,
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
import { hashForState, navFromHash } from './nav.js';
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
import {
  prefersReducedMotion, snapshotMotion, applyRenderMotion, applyActionMotion,
  dismissDelay, dismissOpenModal, dismissOpenPopover, markBusy, unmarkBusy, DUR,
} from './motion.js';

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
      // Scoped: this settles seconds after boot, whenever the network does
      // -- a full rerender here would yank the DOM out from under whatever
      // the user is doing on a completely different screen.
      rerenderAccountIfOpen();
    }
  }).catch(() => {});
}
// Must run before sanitizeBootNav below -- that IIFE calls getModule/
// isModuleUnlocked/etc., which resolve against whichever course is active.
setActiveCourseShell(state.courseId);
await setActiveCourse(state.courseId);
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
  if (state.view === 'quiz' && state.moduleId && state.lessonId) {
    const lesson = getLesson(state.moduleId, state.lessonId);
    if (lesson) state.quizOptionOrder = shuffleQuizOrder(lesson);
  }
  if (state.view === 'lesson' && state.moduleId && state.lessonId) {
    shuffleLessonOptions(state.moduleId, state.lessonId);
  }
})();

let suppressPersist = false;

// Which screen the app is on, for scroll-position bookkeeping: leaving a
// screen remembers its scrollTop, returning restores it.
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

// --- Scroll intent (audit NAV-001) ----------------------------------------
// scrollPositions above exists for LISTS: leave the Library, come back, and
// the shelf is where you left it. Fresh instructional content is the
// opposite case -- a lesson, a quiz, or the completion screen should open at
// its heading no matter what position an earlier visit left behind, because
// "midway through concept 2" is never where new reading starts. These views
// therefore never restore a remembered position; entering one always lands
// at the top. (Resuming a part-done lesson still resumes the right CONCEPT
// -- that's conceptsToRender's job -- it just shows that concept from its
// heading rather than from a stale offset.)
const FRESH_SCROLL_VIEWS = new Set(['lesson', 'quiz', 'lessonComplete']);

// The lesson page shows one concept at a time, but paging between concepts
// does not change navSignature() -- same view, same lesson -- so without
// this the same-screen rerender path preserved the previous concept's
// scroll offset and the next concept opened midway through its content
// (the exact NAV-001 repro: Concept 2 arriving at ~209px). This derives
// "which concept is actually on screen" the same way lessonHtml does, so a
// change in it can be treated as new content: scroll to the top, and move
// focus to the incoming concept's heading so the change is announced.
function displayedConceptSignature() {
  if (state.view !== 'lesson' || !state.moduleId || !state.lessonId) return null;
  const lesson = getLesson(state.moduleId, state.lessonId);
  if (!lesson) return null;
  const shown = conceptsToRender(lesson, state.exStates, state.moduleId, state.lessonId);
  const index = state.conceptIndex == null
    ? shown - 1
    : Math.max(0, Math.min(state.conceptIndex, shown - 1));
  return `${state.moduleId}|${state.lessonId}|${index}`;
}
let lastConceptSig = null;


// The same idea, one level down: these four lists each carry their own
// internal scroll (see .module-list/.lit-shelves/.lit-chapter-list/
// .revision-module-list in styles.css) independent of the page-level
// scrollPositions above, which no longer moves at all on the screens that
// contain one -- .main-content is sized to never need to scroll there (the
// list itself absorbs the remaining height instead), so restoring only the
// PAGE's scrollTop would have nothing left to restore. Each entry's key is
// scoped to whatever actually identifies "the same list" across a visit --
// not the whole-app nav signature, which is far coarser (e.g. Home's module
// list only cares which COURSE it's showing, not which lesson/module a
// visit to it happens to be surrounding).
const CONTAINER_SCROLL_TARGETS = [
  { selector: '.module-list', key: (s) => `home-modules:${s.courseId}` },
  { selector: '.lit-shelves', key: () => 'library-shelves' },
  { selector: '.lit-chapter-list', key: (s) => `book-chapters:${s.litBookId}` },
  { selector: '.revision-module-list', key: (s) => `revision-modules:${s.courseId}` },
];
const containerScrollPositions = new Map();

// What key each currently-live container actually belongs to, as of the
// last swap() -- NOT recomputed from live state at remember-time. An async
// action (chooseCourse awaiting activateCourse, say) can mutate state.courseId
// before rerender() ever runs, so by the time rememberContainerScrollPositions()
// fires, state already names the NEW course while root still holds the OLD
// course's DOM. Keying off live state there would file the old list's
// scrollTop under the new course's key, handing it a stranger's position
// instead of starting fresh. This snapshot is what the page-level
// lastNav/previousNav pair does for the whole screen, one level down.
const lastContainerKeys = new Map();

// --- browser back/forward -------------------------------------------------
// The app never changes the URL and previously never touched
// window.history at all, so on the web target the browser's own Back/
// Forward buttons had nothing to do -- the first Back press left the app
// entirely instead of stepping back one screen. This wires just the
// "stable" screens (not a live practice/reading session, which has no
// serializable position worth restoring and isn't persisted across a
// reload either -- see state.practice's own comment) into real history
// entries, so Back/Forward step through them the way the in-app back
// affordances already do. A screen not in this set is reached WITHOUT its
// own history entry, so it stays associated with whichever trackable
// screen led into it -- Back from mid-session lands on that screen, not on
// some half-reconstructed session.
const HISTORY_TRACKED_VIEWS = new Set([
  'dashboard', 'module', 'lesson', 'quiz', 'schedule', 'settings', 'account',
  'learningAids', 'courseProgression',
  'achievements', 'pathGroups', 'path', 'library', 'litBook',
]);

function historySignature() {
  return [
    state.courseId || '',
    state.view || '',
    state.moduleId || '',
    state.lessonId || '',
    state.pathGroupId || '',
    state.litBookId || '',
  ].join('|');
}

function navSnapshot() {
  return {
    courseId: state.courseId,
    view: state.view,
    moduleId: state.moduleId,
    lessonId: state.lessonId,
    pathGroupId: state.pathGroupId,
    pathActive: state.pathActive,
    pathHome: state.pathHome,
    litHome: state.litHome,
    litBookId: state.litBookId,
    litChapterId: state.litChapterId,
  };
}

let lastHistorySig = null;
let restoringHistory = false;

// Called from rerender() itself, so every action that reaches a trackable
// screen picks it up automatically -- no call site elsewhere needs to know
// this exists. Seeds the tab's own initial entry with replaceState (so
// there's no phantom extra "back" to a blank state before the app loaded);
// every later trackable change pushes a new one.
//
// The URL is written too, not just the state object. It used to be
// location.href on every entry, which meant Back/Forward worked but nothing
// else about a URL did: no bookmarking a lesson, no sending someone a link
// to a book, no opening a tab in a new window, and a refresh that could only
// fall back to whatever localStorage last remembered. hashForState (js/nav.js)
// projects the current screen onto a real route, and navFromHash reads one
// back -- see the hashchange handler and the boot block at the end of this
// file.
function trackHistory() {
  if (restoringHistory) return;
  if (!HISTORY_TRACKED_VIEWS.has(state.view)) return;
  const sig = historySignature();
  if (sig === lastHistorySig) return;
  const url = hashForState(state);
  if (lastHistorySig === null) {
    history.replaceState(navSnapshot(), '', url);
  } else {
    history.pushState(navSnapshot(), '', url);
  }
  lastHistorySig = sig;
}

// Restores a screen from a history entry. The snapshot is either one this
// session pushed (see trackHistory) or one navFromHash built out of a typed
// or pasted URL, so it only ever names a HISTORY_TRACKED_VIEWS screen --
// never a live session that would need state this lightweight snapshot
// doesn't carry.
//
// Takes `token` so a rapid run of Back/Forward clicks can't land its
// mutations out of order: setActiveCourse is awaited (a real network/import
// wait when switching courses), so an EARLIER popstate's course load can
// resolve AFTER a LATER one's if the user clicks faster than either
// finishes. Bailing out here (not just before the eventual rerender) means
// a superseded snapshot never touches state at all, not just never gets
// painted.
async function applyNavSnapshot(snap, token) {
  if (snap.courseId && snap.courseId !== state.courseId) {
    await setActiveCourse(snap.courseId);
    if (token !== historyRestoreToken) return false;
  }
  state.courseId = snap.courseId || state.courseId;
  state.view = snap.view || 'dashboard';
  state.moduleId = snap.moduleId || null;
  state.lessonId = snap.lessonId || null;
  state.pathGroupId = snap.pathGroupId || null;
  state.pathActive = !!snap.pathActive;
  state.pathHome = !!snap.pathHome;
  state.litHome = !!snap.litHome;
  state.litBookId = snap.litBookId || null;
  state.litChapterId = snap.litChapterId || null;
  // A restored screen has no live session or open transient overlay --
  // matches how every other route into a stable screen leaves these.
  state.practice = null;
  state.lit = null;
  state.lessonPreviewId = null;
  state.litChapterPreviewId = null;
  state.pathCheckpointSetupNodeId = null;
  state.pathSkipAheadPromptNodeId = null;
  state.courseMenuOpen = false;
  state.lessonSearchQuery = '';
  return true;
}

let historyRestoreToken = 0;

// A restored screen has to be checked the same way a booted one is: a hash
// can be typed, and a history entry can outlive the progress that made its
// screen reachable (resetting a module, or turning course locks back on,
// both invalidate entries already sitting in the stack). Mirrors
// sanitizeBootNav above, including its respect for forceUnlockAll -- an
// unlocked-everything profile must not be bounced off its own module page.
function sanitizeRestoredNav() {
  if (state.moduleId && !getModule(state.moduleId)) {
    state.view = 'dashboard';
    state.moduleId = null;
    state.lessonId = null;
  } else if (state.moduleId
    && !isModuleUnlocked(state.moduleId, state.completed, state.unlockedModules, state.forceUnlockAll)) {
    state.view = 'dashboard';
    state.moduleId = null;
    state.lessonId = null;
  }
  if (['lesson', 'quiz', 'lessonComplete'].includes(state.view)) {
    const reachable = state.moduleId && state.lessonId
      && isLessonUnlocked(state.moduleId, state.lessonId, state.completed, state.unlockedModules, state.forceUnlockAll);
    if (!reachable) {
      state.view = state.moduleId ? 'module' : 'dashboard';
      state.lessonId = null;
    }
  }
  // A quiz is a live attempt, so arriving at one -- by link, by Forward, by
  // refresh -- starts a fresh one rather than rendering whatever answers
  // happened to be left in state from the last attempt.
  if (state.view === 'quiz') {
    const lesson = getLesson(state.moduleId, state.lessonId);
    if (lesson) startQuizAttempt(lesson);
    else state.view = state.moduleId ? 'module' : 'dashboard';
  } else if (state.view === 'lesson') {
    shuffleLessonOptions(state.moduleId, state.lessonId);
  }
  if (state.view === 'lessonComplete') state.view = state.moduleId ? 'module' : 'dashboard';
}

// One path for "put the app on the screen this snapshot names", shared by
// popstate, hashchange and boot. restoringHistory is cleared on EVERY exit,
// including the superseded one -- it used to be set only on the success
// path, so a Back press that lost a race left the flag stuck true and
// trackHistory silently stopped recording anything for the rest of the
// session.
async function restoreNav(snap, { rerenderAfter = true } = {}) {
  const token = ++historyRestoreToken;
  restoringHistory = true;
  try {
    const applied = await applyNavSnapshot(snap, token);
    if (!applied) return false; // a later restore has since superseded this one
    sanitizeRestoredNav();
    // The screen actually landed on can differ from the one the URL asked
    // for -- a link to a module this profile has not unlocked yet resolves
    // to Home. Rewriting the address bar to match means the URL never claims
    // to be somewhere the app is not, and a bookmark taken from here is the
    // screen in front of the learner rather than the one they asked for and
    // did not get.
    const landed = hashForState(state);
    if (landed !== location.hash) history.replaceState(navSnapshot(), '', landed);
    lastHistorySig = historySignature();
    if (rerenderAfter) rerender();
    return true;
  } finally {
    if (token === historyRestoreToken) restoringHistory = false;
  }
}

window.addEventListener('popstate', (e) => {
  // An entry this session pushed carries its own snapshot. One that doesn't
  // (a hash the learner typed, or an entry from before this tab loaded) is
  // read off the URL instead, so both kinds of history step land somewhere
  // real rather than being ignored.
  const snap = e.state || navFromHash(location.hash);
  if (!snap) return;
  // Back out of a part-answered quiz or drill asks first, exactly as the
  // in-app exits do -- it discarded the attempt silently before. The browser
  // has already moved by the time this fires, so the current screen is
  // pushed back on before asking; confirming runs historyBack below, which
  // steps off it again with nothing left to lose.
  if (hasUnsavedSessionProgress()) {
    history.pushState(navSnapshot(), '', hashForState(state));
    state.leaveSessionPromptTarget = 'historyBack';
    // Focus the dialog explicitly: this render is a same-screen one (the
    // nav signature has not moved), and there is no click trigger to
    // restore focus from, so nothing else would move focus into it.
    rerender('.modal');
    return;
  }
  restoreNav(snap);
});

// Editing the address bar, or following a link to a different hash on the
// same page, fires this rather than popstate. Anything the app itself did
// has already been applied by the time the hash changes (pushState doesn't
// fire hashchange at all, and a restore in flight holds restoringHistory),
// so this only ever handles a URL the app did not write.
window.addEventListener('hashchange', () => {
  if (restoringHistory) return;
  const current = hashForState(state);
  if (current === (location.hash || '#/')) return;
  const snap = navFromHash(location.hash);
  // A hash that names nothing (a typo, a stale link from an older build)
  // leaves the app exactly where it is -- but the address bar is put back in
  // step with it rather than left showing a route that was never taken.
  if (!snap) {
    history.replaceState(navSnapshot(), '', current);
    return;
  }
  restoreNav(snap);
});

function mainScrollContainer() {
  return root.querySelector('.main-content') || root.querySelector('.main');
}

function rememberScrollPosition(navKey, container = mainScrollContainer()) {
  if (!navKey || !container) return;
  scrollPositions.set(navKey, container.scrollTop || 0);
}

// Called just before the old DOM is replaced (so root still reflects
// whatever screen is being left) and just after the new one lands (so a
// freshly-rendered container can be scrolled into place before the learner
// sees it snap). Unconditional on both ends, same as the page-level
// remember/restore pair above -- root.innerHTML replaces every element
// wholesale on every rerender, changed screen or not, so a same-screen
// update (the course menu opening, say) needs this exactly as much as a
// cross-screen one does. restoreContainerScrollPositions() is also where
// lastContainerKeys gets updated, since that's the one place guaranteed to
// run against the freshly-rendered DOM with state already matching it.
function rememberContainerScrollPositions() {
  for (const { selector } of CONTAINER_SCROLL_TARGETS) {
    const el = root.querySelector(selector);
    const prevKey = lastContainerKeys.get(selector);
    if (el && prevKey) containerScrollPositions.set(prevKey, el.scrollTop || 0);
  }
}
function restoreContainerScrollPositions() {
  for (const { selector, key } of CONTAINER_SCROLL_TARGETS) {
    const el = root.querySelector(selector);
    if (!el) continue;
    const nextKey = key(state);
    lastContainerKeys.set(selector, nextKey);
    const saved = containerScrollPositions.get(nextKey);
    if (saved) el.scrollTop = saved;
  }
}

// Eased scroll, resolving once the travel is done so callers that sequence
// work after it (see litNextParagraph) can await the landing. Hand-rolled
// rather than scrollTo({behavior:'smooth'}) because that API neither reports
// completion nor takes a duration. Instant under prefers-reduced-motion, for
// trivial distances, and if the container disappears mid-flight (a rerender
// replacing the DOM cancels the loop safely).
function smoothScrollTo(container, targetY, duration = 380) {
  const from = container.scrollTop;
  const delta = targetY - from;
  if (prefersReducedMotion() || Math.abs(delta) < 4 || duration <= 0) {
    container.scrollTop = targetY;
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const start = performance.now();
    const easeOutCubic = (t) => 1 - (1 - t) ** 3;
    const step = (now) => {
      if (!container.isConnected) return resolve();
      const t = Math.min(1, (now - start) / duration);
      container.scrollTop = from + delta * easeOutCubic(t);
      if (t < 1) requestAnimationFrame(step);
      else resolve();
    };
    requestAnimationFrame(step);
  });
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
  // A screen change closes the deep-screen sections menu (audit NAV-002):
  // it belongs to the screen that opened it, and the actions its items
  // dispatch don't know it exists.
  if (changedScreen) state.sectionsMenuOpen = false;
  rememberScrollPosition(previousNav, scrollContainer);
  rememberContainerScrollPositions();
  lastNav = nav;

  // Concept paging is a content change the nav signature can't see -- see
  // displayedConceptSignature. Only meaningful on a SAME-screen rerender:
  // a cross-screen entry into a lesson is already handled by
  // FRESH_SCROLL_VIEWS below.
  const conceptSig = displayedConceptSignature();
  const conceptChanged = !changedScreen && conceptSig !== null
    && lastConceptSig !== null && conceptSig !== lastConceptSig;
  lastConceptSig = conceptSig;

  const html = render(state, MODULES);
  // Scroll by navigation intent (audit NAV-001): fresh content starts at
  // its top, a revisited list restores its position, and an ordinary
  // same-screen update keeps the live offset.
  const nextScrollTop = changedScreen
    ? (FRESH_SCROLL_VIEWS.has(state.view) ? 0 : (scrollPositions.get(nav) || 0))
    : (conceptChanged ? 0 : (scrollContainer?.scrollTop || 0));

  // What the OUTGOING DOM shows that motion cares about: which overlays
  // (modals, menus, the toast...) are up -- so an overlay animates in only
  // the first time it appears, never on the same-screen rerenders that
  // merely recreate it -- and where the active-tab underline sits, so the
  // fresh one can slide from there (see js/motion.js).
  const motionSnap = snapshotMotion(root);

  // The swap itself is instant -- entrance motion is applied to the fresh
  // DOM immediately after (and after scroll restoration, so nothing animates
  // while a scrollTop is being reapplied).
  root.innerHTML = html;
  const newContainer = mainScrollContainer();
  if (newContainer && nextScrollTop) newContainer.scrollTop = nextScrollTop;
  // Unconditional, same as the page-level restore just above -- root.innerHTML
  // just replaced every element wholesale, so a SAME-screen rerender (the
  // course menu opening, say) needs this exactly as much as a cross-screen
  // one does: either way the fresh .module-list starts at scrollTop 0, and
  // whatever rememberContainerScrollPositions() captured an instant ago
  // (the live value on a same-screen update, the last-known one from a
  // previous visit otherwise) is already the right thing to reapply.
  restoreContainerScrollPositions();
  applyRenderMotion(root, motionSnap, changedScreen, nav);
  if (conceptChanged) {
    // The concept the learner is now reading changed under a same-screen
    // rerender (Next/Back paging, or a passed exercise unlocking the next
    // concept). The scroller was just reset to the concept's top, so focus
    // its heading with preventScroll -- the new concept is announced without
    // a second scroll jump (audit NAV-001), and it wins over refocusing
    // whatever control was pressed, which no longer names where the learner
    // is.
    const heading = root.querySelector('.concept-block h3');
    if (heading) {
      heading.focus({ preventScroll: true });
    } else {
      const main = root.querySelector('.main');
      if (main) main.focus({ preventScroll: true });
    }
  } else if (focusSelector) {
    const toFocus = root.querySelector(focusSelector);
    if (toFocus) toFocus.focus();
  } else if (changedScreen) {
    // root.innerHTML replaces every element on every render, so focus lands
    // back on <body> each time. On a same-screen update that is invisible;
    // on a screen CHANGE it means a keyboard user restarts their tab order
    // from the top of the document, and a screen-reader user is told nothing
    // at all -- the page silently became a different page. Moving focus to
    // the new <main> (labelled with the screen's own name, see render()) is
    // the standard single-page answer to both: the new screen is announced,
    // and the next Tab continues inside it rather than back through the nav.
    // preventScroll matters -- the scrollTop restored two lines above must
    // survive being focused.
    const main = root.querySelector('.main');
    if (main) main.focus({ preventScroll: true });
  }
  trackHistory();
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
// "Retake quiz".
function startQuizAttempt(lesson) {
  state.quizOptionOrder = shuffleQuizOrder(lesson);
  state.quizIndex = 0;
  state.quizSelected = null;
  state.quizRevealed = false;
  state.quizAnswers = [];
  state.quizShowResult = false;
  state.quizAttempt += 1;
}

// Shared by startLesson (from the "Start lesson" preview modal) and
// continueLesson (the dashboard hero's "Continue lesson N" -- skips the
// preview since it already declared its own intent, unlike a lesson row
// that might just be getting browsed). Resolves whichever position the
// lesson was last left at (concepts vs quiz) and gets straight into it.
function enterLesson(moduleId, lessonId) {
  state.moduleId = moduleId;
  state.lessonId = lessonId;
  // Only two positions exist inside a lesson now. Older save files can hold
  // 'drill'/'drillComplete' here -- treat anything else as the concepts page
  // rather than navigating to a view that no longer exists.
  const pos = state.lessonPos[`${moduleId}_${lessonId}`];
  state.view = pos && pos.view === 'quiz' ? 'quiz' : 'lesson';
  // null, not 0: lessonHtml reads that as "the furthest concept unlocked",
  // so reopening a part-finished lesson resumes where it was left rather
  // than paging back to the beginning.
  state.conceptIndex = null;
  shuffleLessonOptions(moduleId, lessonId);
  if (state.view === 'quiz') startQuizAttempt(getLesson(moduleId, lessonId));
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
    // Surgical removal, not a rerender: a full #root swap at an arbitrary
    // moment silently swallows any tap that is mid-press when it lands
    // (the pressed node detaches between mousedown and mouseup, so the
    // click retargets to <html> and no data-action ever sees it).
    const toast = document.querySelector('.xp-toast');
    if (!toast) return;
    if (prefersReducedMotion()) {
      toast.remove();
      return;
    }
    // Slide out, then remove; the guard covers a rerender having already
    // replaced this node before the exit finishes.
    toast.classList.remove('anim-toast-in');
    toast.classList.add('anim-toast-out');
    setTimeout(() => document.querySelector('.xp-toast.anim-toast-out')?.remove(), DUR.toastOut);
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
    // Timer-driven advance never passes through the action dispatcher, so
    // the next question's step-in is applied here instead.
    root.querySelector('.lesson-exercise-card')?.classList.add('anim-step-in');
  }, 1100);
}

function rerenderAccountIfOpen() {
  if (state.view === 'account') rerender();
}

// Same email shape the server checks (server/server.js's assertEmailPassword)
// -- kept in sync so a client-side rejection here always matches what the
// server would also reject, never stricter or looser.
const ACCOUNT_EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Catches the "obviously incomplete" case (empty/malformed fields) before a
// real network round trip, so that class of mistake gets instant, specific
// feedback instead of the same generic "Invalid email or password" a wrong
// password also produces. Deliberately not a stricter check than the
// server's own (e.g. no password-strength rules beyond length on register)
// -- this is a UX shortcut for the obvious case, not a second source of
// truth for what's a valid account.
// Returns which field failed as well as why, so the message can be shown
// under that field instead of in the status line at the foot of the form --
// which is where it used to land, several controls away from the input it
// was about.
function accountFieldError(email, password, { minPasswordLength = 1 } = {}) {
  if (!email.trim()) return { field: 'email', message: 'Enter the email address for your account.' };
  if (!ACCOUNT_EMAIL_PATTERN.test(email.trim())) return { field: 'email', message: 'That does not look like an email address — check for a missing @ or a typo.' };
  if (!password) return { field: 'password', message: 'Enter your password.' };
  if (password.length < minPasswordLength) {
    return { field: 'password', message: `Use at least ${minPasswordLength} characters.` };
  }
  return null;
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
// course's chapter grid), or null for a course/track test -- a null exitView
// falls back to Home, since the course-picker screen it used to reopen no
// longer exists.
// True while leaving the current screen right now would silently discard a
// real attempt in progress -- the header's brand logo, course-switch
// button, and achievements pill stay clickable even mid-session (unlike
// Schedule/Settings/Account, which a live session's header hides
// entirely), so those three route through this guard. Matches
// endPracticeSession's own "has anything been answered yet" check.
// Also true mid-quiz once at least one question has been answered -- the
// same three controls this guards stay clickable during a live quiz (quiz
// isn't in the header's inSession set, since Schedule/Settings/Account
// deliberately stay reachable there -- see headerHtml's inSession comment),
// and a click on them discarded the attempt exactly as silently as it did
// for Practice/Mastery before this guard existed. quizShowResult excludes
// the result screen itself -- that quiz is already finished and scored, so
// leaving it loses nothing.
function hasUnsavedSessionProgress() {
  // quizRevealed counts as progress as much as quizAnswers does: an answer
  // is only pushed into quizAnswers by nextQuizQuestion, so a question
  // already chosen and graded on screen was invisible to this check until
  // the learner pressed Next -- and leaving in that gap threw the answer
  // away just as silently.
  const liveQuiz = state.view === 'quiz' && !state.quizShowResult;
  return !!(state.practice && state.practice.log.length > 0)
    || (liveQuiz && (state.quizAnswers.length > 0 || state.quizRevealed));
}

// Every way OUT of a live attempt asks the same question, in one place.
// Previously only openDashboard and openAchievements checked, which was the
// full set of exits the header offered mid-PRACTICE -- but a live quiz keeps
// the whole tab row (Schedule and Account stay deliberately reachable
// there), so Library/Schedule/Account each discarded a part-finished quiz
// with no prompt at all. Returns true when it has taken over, so the caller
// stops.
function guardSessionExit(target) {
  if (!hasUnsavedSessionProgress()) return false;
  state.leaveSessionPromptTarget = target;
  return true;
}

function exitPracticeSession(p) {
  const src = p && p.source;
  if (src === 'unlockTest') {
    if (p.exitView) state.view = p.exitView;
    else state.view = 'dashboard';
    return;
  }
  if (src === 'path') { state.view = 'path'; return; }
  if (src === 'masteryV2') { state.view = state.pathActive ? 'path' : 'module'; return; }
  if (src === 'revision') { state.view = 'schedule'; return; }
  state.view = 'module';
}

// --- action handlers ------------------------------------------------------
// A handler returning `false` means "nothing changed, skip the re-render".

// Used by chooseCourse: always resets to that course's dashboard/module
// list. Picking a course is a navigation choice, not a resume shortcut into
// the learner's last lesson/module/practice position.
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
  state.lessonSearchQuery = '';
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

// para/done track Practice's graded, comprehension-checked pass -- Practice
// resumes from para (see resumeParagraph in content-lit/index.js) and only
// Practice ever sets done. freePara is a separate furthest-reached marker
// for Free read (see litNextParagraph below): it must stay out of para,
// since Free read has no comprehension checks -- letting it feed Practice's
// resume position would silently skip Practice past paragraphs the learner
// never actually answered checks for.
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
  // `${paragraphIndex}:${checkIndex}` -> shuffled display order (a
  // permutation of original option indices). Built once here rather than
  // per render -- like shuffleQuizOrder/shuffleLessonOptions, options need
  // to stay put once shown so answering doesn't reorder them underneath the
  // cursor. Authors write the correct option first while drafting a check,
  // so without this every comprehension check would show its answer in the
  // same spot.
  const checkOrder = {};
  chapter.paragraphs.forEach((p, pi) => {
    (p.checks || []).forEach((c, ci) => {
      checkOrder[`${pi}:${ci}`] = shuffle(c.options.map((_, i) => i));
    });
  });
  state.lit = {
    bookId: state.litBookId,
    chapterId: state.litChapterId,
    paragraphCount: chapter.paragraphs.length,
    stage: 'read',
    para,
    freeRead,
    // `${paragraphIndex}:${checkIndex}` -> { selected, correct }.
    checks: {},
    checkOrder,
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
    // There is no picker screen to send the learner out to any more -- drop
    // them into the first course they can actually open, and leave switching
    // to Home's own course menu.
    const fallback = COURSES.find((c) => isCourseUnlocked(c, state.completed, state.unlockedCourses));
    if (fallback) {
      state.courseId = fallback.id;
      // The shell swap is synchronous, so the module list this lands on
      // renders correctly straight away; the full course body follows.
      setActiveCourseShell(fallback.id);
      setActiveCourse(fallback.id).catch(() => {});
    }
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
    if (guardSessionExit('openDashboard')) return;
    state.view = 'dashboard';
    state.courseMenuOpen = false;
    state.moduleId = null;
    state.lessonId = null;
    state.practice = null;
    state.pathActive = false;
    state.pathHome = false;
    state.litHome = false;
    state.lessonSearchQuery = '';
  },
  // Home's course switcher (see dashboardHtml in js/render.js). The design
  // has no separate picker screen -- switching happens in place, from a menu
  // that drops out of the "Your modules" heading.
  toggleCourseMenu() {
    state.courseMenuOpen = !state.courseMenuOpen;
  },
  // The deep-screen "Go to" sections menu (audit NAV-002; see
  // sectionsMenuHtml in js/render.js). Closed by the same outside-click and
  // Escape wiring the course menu has, and cleared on every screen change
  // by rerender itself, so it can never arrive already-open on a screen
  // revisited later.
  toggleSectionsMenu() {
    state.sectionsMenuOpen = !state.sectionsMenuOpen;
  },
  // Home's course menu (see courseMenuHtml in js/render.js). Picking a
  // course always enters its own dashboard/module list, even when that
  // course was already active -- switching is a navigation choice, not a
  // resume, so it never drops the learner back into a previous lesson,
  // module, practice session, or My Path detour.
  //
  // Staged in two paints (audit MOT-002). The old shape held the chooser
  // open over the old course for the entire load (~1.5s on a first import)
  // with only a row-level spinner, so the outgoing course kept looking
  // authoritative and the choice looked un-taken. Now the pick is committed
  // in the same frame it is made: the chooser closes, the switch trigger
  // names the INCOMING course with the busy treatment, and the old course's
  // regions stand down under .is-switching (styles.css) until the rerender
  // in the dispatcher lands the new one with a content crossfade (the
  // chooseCourse entry in js/motion.js's ACTION_FX).
  async chooseCourse(el) {
    const id = el.dataset.courseId;
    const course = COURSES.find((c) => c.id === id);
    // Defense in depth -- a locked course's own menu row already dispatches
    // openUnlockPrompt instead of this action (see dashboardHtml in
    // js/render.js), but guard here too in case
    // state.completed/unlockedCourses changes out from under a stale render.
    if (!course || !isCourseUnlocked(course, state.completed, state.unlockedCourses, state.forceUnlockAll)) return false;
    state.courseMenuOpen = false;
    state.courseSwitchingTo = id;
    rerender();
    try {
      await activateCourse(id);
    } catch {
      // The import failed: the course already loaded stays active. Clearing
      // the switching flag below lets the dispatcher's rerender un-dim the
      // dashboard, which still shows that course -- swallowing here (rather
      // than rejecting) is what makes that rerender run at all.
    } finally {
      state.courseSwitchingTo = null;
    }
  },
  // Schedule's course switcher and all-course rows (audit NAV-003). Unlike
  // chooseCourse above, this changes only which course the plan is scoped
  // to -- the learner asked to plan a different course, not to leave
  // Schedule -- so the view stays put and each course's own deadline
  // (state.scheduleDeadline is keyed per course) simply comes into scope.
  async chooseScheduleCourse(el) {
    const id = el.dataset.courseId;
    const course = COURSES.find((c) => c.id === id);
    // Defense in depth, same reasoning as chooseCourse.
    if (!course || !isCourseUnlocked(course, state.completed, state.unlockedCourses, state.forceUnlockAll)) return false;
    state.courseMenuOpen = false;
    if (id === state.courseId) return;
    // Same two-paint staging as chooseCourse (audit MOT-002): the chooser
    // closes and the switcher names the incoming course immediately, the
    // outgoing plan stands down under .is-switching, and the new plan
    // arrives with a content crossfade once the course lands.
    state.courseSwitchingTo = id;
    rerender();
    try {
      await setActiveCourse(id);
      state.courseId = id;
      state.view = 'schedule';
      // These name pieces of the PREVIOUS course's plan: an open picker shows
      // its deadline, and the revision pick points at one of its modules.
      state.deadlinePickerOpen = false;
      state.resetHourMenuOpen = false;
      state.scheduleRevisionModuleId = null;
    } catch {
      // Import failed: the plan on screen still belongs to the course that
      // is actually loaded -- clearing the flag below un-dims it.
    } finally {
      state.courseSwitchingTo = null;
    }
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
  // Always lands on the group list
  // (req: a separate "choose a group" screen) -- never straight into a
  // specific group's map, even a resumed one, so the group list stays a
  // real hub you can always get back to from the very top.
  openMyPath() {
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
    state.practice = {
      source: 'unlockTest', unlockKind: p.type, targetId: p.id, kind: 'unlockTest',
      moduleId: null, lessonId: null, exitView: 'dashboard',
      queue, index: 0, log: [], startedAt: Date.now(),
      selected: undefined, submitted: false, correct: false, combo: 0, xpGained: 0,
    };
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  // The review screen's "Drill the N you missed" (see practiceReviewHtml).
  // Restricted to the two ungated sources: a checkpoint or an unlock test is
  // a pass/fail gate, and re-answering only the missed subset there would let
  // a failed attempt be topped up instead of retaken -- the same reasoning
  // retryUnlockTest gives just below for always reshuffling the whole pool.
  drillMissed() {
    const p = state.practice;
    if (!p || (p.source !== 'module' && p.source !== 'revision')) return false;
    const queue = p.log.filter((l) => !l.correct).map((l) => l.key);
    if (!queue.length) return false;
    state.practice = {
      source: p.source, kind: p.kind, moduleId: p.moduleId, lessonId: p.lessonId,
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
  closePracticeSetup() {
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
    if (guardSessionExit('openSchedule')) return;
    state.view = 'schedule';
    state.practice = null;
    state.pathActive = false;
  },
  openSettings() {
    if (guardSessionExit('openSettings')) return;
    state.view = 'settings';
    state.practice = null;
    state.pathActive = false;
  },
  // Appearance's two former lodgers, each on its own page now (audit
  // IA-001): translations and Tarkeeb labels change instructional
  // scaffolding, and Course locks change progression -- neither is "how the
  // page looks", so neither belongs under Appearance. Same shape as
  // openSettings so the guard, history and back behaviour stay identical.
  openLearningAids() {
    if (guardSessionExit('openLearningAids')) return;
    state.view = 'learningAids';
    state.practice = null;
    state.pathActive = false;
  },
  openCourseProgression() {
    if (guardSessionExit('openCourseProgression')) return;
    state.view = 'courseProgression';
    state.practice = null;
    state.pathActive = false;
  },
  openAccount() {
    if (guardSessionExit('openAccount')) return;
    state.view = 'account';
    state.practice = null;
    state.pathActive = false;
  },
  openAchievements() {
    if (guardSessionExit('openAchievements')) return;
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
    // A destructive action whose only other trace is progress quietly
    // disappearing -- confirm it happened, in the same toast the XP awards
    // use.
    state.toast = 'Module progress reset';
    scheduleToastClear();
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
  // --- Leave-session confirmation (see leaveSessionPromptTarget in
  // js/state.js) ---
  closeLeaveSessionPrompt(el, e) {
    if (e && e.target !== el) return false;
    state.leaveSessionPromptTarget = null;
  },
  cancelLeaveSessionPrompt() {
    state.leaveSessionPromptTarget = null;
  },
  // Only ever reached as a confirmLeaveSession target (see the popstate
  // handler): the session state has just been cleared, so stepping back off
  // the entry pushed there now goes through the ordinary restore path.
  historyBack() {
    history.back();
  },
  confirmLeaveSession() {
    const target = state.leaveSessionPromptTarget;
    state.leaveSessionPromptTarget = null;
    state.practice = null;
    // Also clears the quiz side of hasUnsavedSessionProgress() -- without
    // this, target's own action (e.g. openDashboard) re-checks the guard
    // before state.view has moved off 'quiz', sees the same answered
    // questions still sitting there, and just reopens this same prompt.
    // quizRevealed/quizSelected belong to that same "would be discarded"
    // set: an answer chosen but not yet advanced past counts as progress
    // (see hasUnsavedSessionProgress), so leaving it set re-armed the guard
    // the moment the target action ran.
    state.quizAnswers = [];
    state.quizRevealed = false;
    state.quizSelected = null;
    if (target && actions[target]) actions[target]();
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
    const fieldError = accountFieldError(email, password, { minPasswordLength: 8 });
    state.account.fieldError = fieldError;
    if (fieldError) {
      state.account.message = '';
      rerender();
      return;
    }
    state.account.status = 'working';
    state.account.message = 'Creating account...';
    state.account.messageTone = 'info';
    rerender();
    try {
      const result = await register(email, password);
      if (result.disabled) throw new Error('Sync server is not configured.');
      state.account.user = result.user;
      state.account.pendingSyncAction = null;
      state.account.message = 'Account created. Syncing save data...';
      state.account.messageTone = 'info';
      await flushPersist();
      await mergeAccountSaveWithRetry();
      state.account.autoUploadStatus = 'synced';
      state.account.autoUploadMessage = 'Automatic sync is ready for future lesson, quiz, and practice progress.';
      state.account.message = 'Account created and save data synced.';
      state.account.messageTone = 'success';
    } catch (e) {
      state.account.message = e.message || 'Could not create account.';
      state.account.messageTone = 'error';
    } finally {
      state.account.status = 'idle';
    }
  },
  // DOM-only, no rerender (`return false`): a rerender would rebuild the
  // uncontrolled password <input> and silently discard whatever's typed.
  togglePasswordVisibility(el) {
    const input = document.getElementById('account-password');
    if (!input) return false;
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    el.classList.toggle('is-on', show);
    el.setAttribute('aria-pressed', String(show));
    el.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    return false;
  },
  async loginAccount() {
    const email = document.getElementById('account-email')?.value || '';
    const password = document.getElementById('account-password')?.value || '';
    const fieldError = accountFieldError(email, password);
    state.account.fieldError = fieldError;
    if (fieldError) {
      state.account.message = '';
      rerender();
      return;
    }
    state.account.status = 'working';
    state.account.message = 'Signing in...';
    state.account.messageTone = 'info';
    rerender();
    try {
      const result = await login(email, password);
      if (result.disabled) throw new Error('Sync server is not configured.');
      state.account.user = result.user;
      state.account.pendingSyncAction = null;
      state.account.message = 'Signed in. Syncing save data...';
      state.account.messageTone = 'info';
      await flushPersist();
      await mergeAccountSaveWithRetry();
      state.account.autoUploadStatus = 'synced';
      state.account.autoUploadMessage = 'Automatic sync is ready for future lesson, quiz, and practice progress.';
      state.account.message = 'Signed in and save data synced.';
      state.account.messageTone = 'success';
    } catch (e) {
      state.account.message = e.message || 'Could not sign in.';
      state.account.messageTone = 'error';
    } finally {
      state.account.status = 'idle';
    }
  },
  async logoutAccount() {
    state.account.status = 'working';
    state.account.message = 'Signing out...';
    state.account.messageTone = 'info';
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
      state.account.messageTone = 'success';
    } catch (e) {
      state.account.message = e.message || 'Could not sign out.';
      state.account.messageTone = 'error';
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
    state.pathActive = false;
    state.pathHome = false;
    state.litHome = false;
    // Goes straight into the lesson rather than through the "Start lesson"
    // preview modal -- the hero button already said "Continue lesson N",
    // so a second confirm click just re-states information the learner
    // already acted on. The preview modal still gates browsing a lesson
    // row out of order (openLessonPreview, above), where that confirm
    // click is doing real work.
    enterLesson(el.dataset.moduleId, el.dataset.lessonId);
  },
  // Home hero's "Review N cards" -- same moduleId problem as continueLesson
  // above, for openPractice's own reliance on state.moduleId already being
  // set to the module it should open Practice Mode's setup popout for.
  reviewModule(el) {
    state.moduleId = el.dataset.moduleId;
    actions.openPractice();
  },
  // Dashboard's lesson search box -- see the dedicated 'input' listener
  // below for why this is called directly from there (with its own
  // refocus) rather than through the generic click/change dispatch alone.
  searchLessons(el) {
    state.lessonSearchQuery = el.value;
  },
  // A search result row -- spans every unlocked module of the course, so
  // (unlike openLessonPreview, reached only from inside a module page
  // where state.moduleId is already that module) this sets it first, same
  // reasoning as continueLesson/reviewModule above. Still opens the
  // preview modal rather than jumping straight in -- unlike continueLesson,
  // there's no prior "I already decided to open this" click to skip a
  // confirm step for.
  searchOpenLesson(el) {
    state.moduleId = el.dataset.moduleId;
    state.lessonPreviewId = el.dataset.lessonId;
    state.lessonSearchQuery = '';
    state.pathActive = false;
    state.pathHome = false;
    state.litHome = false;
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
  // The target-date picker (see deadlinePickerHtml in js/render.js): the
  // app's own calendar in place of a native <input type="date">, whose
  // popup is unstyleable OS/UA chrome on this platform, same reasoning as
  // the reset-hour listbox below. Reached through the click dispatcher, so
  // this reads the picked day from the clicked cell's own dataset, not an
  // <input>'s .value.
  pickScheduleDeadline(el) {
    state.scheduleDeadline = { ...state.scheduleDeadline, [state.courseId]: el.dataset.date || null };
    state.deadlinePickerOpen = false;
  },
  clearScheduleDeadline() {
    state.scheduleDeadline = { ...state.scheduleDeadline, [state.courseId]: null };
    state.deadlinePickerOpen = false;
  },
  // Clears the panel's own browsing cursor on the way in, not the way out --
  // so a fresh open always starts back at the selected deadline's month (or
  // today's, if none is set) rather than wherever a previous browse left
  // off, but paging away and reopening later during the SAME open state
  // isn't disturbed.
  toggleDeadlinePicker() {
    state.deadlinePickerOpen = !state.deadlinePickerOpen;
    if (state.deadlinePickerOpen) state.deadlinePickerMonth = null;
  },
  deadlinePickerPrevMonth() {
    const cursor = state.deadlinePickerMonth || state.scheduleDeadline[state.courseId] || todayISO(state.dailyResetHour || 0);
    const [y, m] = cursor.slice(0, 7).split('-').map(Number);
    const py = m === 1 ? y - 1 : y;
    const pm = m === 1 ? 12 : m - 1;
    state.deadlinePickerMonth = `${py}-${String(pm).padStart(2, '0')}`;
  },
  deadlinePickerNextMonth() {
    const cursor = state.deadlinePickerMonth || state.scheduleDeadline[state.courseId] || todayISO(state.dailyResetHour || 0);
    const [y, m] = cursor.slice(0, 7).split('-').map(Number);
    const ny = m === 12 ? y + 1 : y;
    const nm = m === 12 ? 1 : m + 1;
    state.deadlinePickerMonth = `${ny}-${String(nm).padStart(2, '0')}`;
  },
  // The reset-hour picker (see resetHourMenuHtml in js/render.js): the app's
  // own themed popover in place of a native <select>, whose open list is
  // unstyleable OS chrome CSS cannot reach on this platform. Reads the hour
  // from the clicked row's own dataset, not an element's .value.
  setDailyResetHour(el) {
    const n = Number(el.dataset.hour);
    state.dailyResetHour = Number.isInteger(n) && n >= 0 && n <= 23 ? n : 0;
    state.resetHourMenuOpen = false;
  },
  toggleResetHourMenu() {
    state.resetHourMenuOpen = !state.resetHourMenuOpen;
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
    state.lessonPreviewId = null;
    enterLesson(state.moduleId, el.dataset.lessonId);
  },

  // --- Concept paging (see lessonHtml) ---
  // The lesson shows one concept at a time; how far paging can reach is
  // decided by conceptsToRender, not by these, so they only ever move within
  // what is already unlocked.
  prevConcept() {
    const lesson = getLesson(state.moduleId, state.lessonId);
    if (!lesson) return false;
    const shown = conceptsToRender(lesson, state.exStates, state.moduleId, state.lessonId);
    const current = state.conceptIndex == null ? shown - 1 : state.conceptIndex;
    if (current <= 0) return false;
    state.conceptIndex = current - 1;
  },
  nextConcept() {
    const lesson = getLesson(state.moduleId, state.lessonId);
    if (!lesson) return false;
    const shown = conceptsToRender(lesson, state.exStates, state.moduleId, state.lessonId);
    const current = state.conceptIndex == null ? shown - 1 : state.conceptIndex;
    if (current >= shown - 1) return false;
    state.conceptIndex = current + 1;
  },
  goToConcept(el) {
    const lesson = getLesson(state.moduleId, state.lessonId);
    if (!lesson) return false;
    const shown = conceptsToRender(lesson, state.exStates, state.moduleId, state.lessonId);
    const target = Number(el.dataset.index);
    if (!Number.isFinite(target) || target < 0 || target >= shown) return false;
    state.conceptIndex = target;
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

    // Deferred to the next frame rather than to an arbitrary delay: the
    // dispatcher rerenders synchronously once this handler returns, so by
    // the first rAF the revealed card exists and has been laid out. A timer
    // was doing the same job with tens of milliseconds of dead air in front
    // of the scroll, which read as the reveal hesitating.
    requestAnimationFrame(() => {
      const scrollContainer = root.querySelector('.main-content') || root.querySelector('.main');
      const exCard = root.querySelector(`[data-concept-index="${idx}"] .exercise-card`);
      if (exCard && scrollContainer) {
        const cardRect = exCard.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        const targetY = scrollContainer.scrollTop + (cardRect.top - containerRect.top) - (containerRect.height / 2) + (cardRect.height / 2);

        smoothScrollTo(scrollContainer, Math.max(0, targetY));
      }
    });
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
      smoothScrollTo(scrollContainer, Math.max(0, targetY), 620);
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
      // Pin the view to the concept just answered. A null conceptIndex means
      // "the furthest concept unlocked" (see lessonHtml), and the pass above
      // just unlocked the NEXT one -- left null, the page would swap to it
      // in this same render, replacing the solved exercise before the
      // learner has seen their own verdict (audit UX-004/MOT-006).
      // Confirmation stays on screen; advancing is the now-enabled Next
      // concept button's job, and nothing else's.
      state.conceptIndex = idx;
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
      recordPracticeAnswer(key, entry.item.source, allPass);
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
    if (guardSessionExit('openLibrary')) return;
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
  // The Library's "Continue reading" card (audit NAV-004): one action back
  // into the book. A chapter with a graded pass mid-way resumes Practice at
  // its saved paragraph directly; anything else -- a fresh chapter, or one
  // only browsed in Free read (whose own rule is "always opens at the top",
  // so there is a real mode choice to make) -- lands on the book page with
  // that chapter's Free read / Practice dialog already open, the same
  // dialog its contents row would have opened, minus the hunt for the row.
  async continueReading(el) {
    const bookId = el.dataset.bookId;
    const chapterId = el.dataset.chapterId;
    const book = getLitBook(bookId);
    if (!book || !book.chapters.some((c) => c.id === chapterId)) return false;
    const rec = chapterRecord(state.litProgress, bookId, chapterId);
    const done = isChapterDone(state.litProgress, bookId, chapterId);
    if (!done && rec && rec.para > 0) {
      const chapter = await loadChapter(bookId, chapterId);
      if (!chapter) return false;
      enterLitContext();
      state.litBookId = bookId;
      state.litChapterId = chapterId;
      state.view = 'litRead';
      startLitSession(chapter, resumeParagraph(state.litProgress, bookId, chapterId, chapter.paragraphs.length), false);
      return;
    }
    enterLitContext();
    state.litBookId = bookId;
    state.view = 'litBook';
    state.lit = null;
    state.litChapterPreviewId = chapterId;
  },
  // Library search (audit NAV-004) -- see the dedicated 'input' listener
  // near the dashboard search's, and the Escape branch in the keydown
  // handler. The clear control is a real button with an accessible name,
  // and clearing keeps focus in the field.
  searchLibrary(el) {
    state.litSearchQuery = el.value;
  },
  clearLibrarySearch() {
    state.litSearchQuery = '';
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
  // The chapter-complete screen's "Next chapter" (see litCompleteHtml in
  // js/render.js). Leaves the finished chapter first, so the preview modal
  // that follows sits over the book's contents list exactly as it does when
  // a chapter is opened from a row there -- same modal, same two choices,
  // just without the trip back and the hunt for the right row.
  nextLitChapter(el) {
    const book = getLitBook(state.litBookId);
    const chapterId = el.dataset.chapterId;
    const index = book ? book.chapters.findIndex((c) => c.id === chapterId) : -1;
    if (index === -1) return false;
    // Defense in depth, same reasoning as openLitChapterPreview above.
    if (!isChapterUnlocked(book, index, state.litProgress, state.forceUnlockAll)) return false;
    state.lit = null;
    state.view = 'litBook';
    state.litChapterPreviewId = chapterId;
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
    // Free read never wrote anything here before -- a full read start to
    // finish left no record at all (see litChapterRecord's freePara comment
    // for why this can't just reuse rec.para the way Practice does).
    const rec = litChapterRecord(lit.bookId, lit.chapterId);
    const field = lit.freeRead ? 'freePara' : 'para';
    if (lit.para > (rec[field] || 0)) rec[field] = lit.para;
    queueAutoUpload('literature-paragraph');
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

  // Doubles as the "Continue" button's own action (where el is that button,
  // so e.target === el and the guard below is a no-op) and the backdrop's
  // click-to-close (where the guard blocks a bubbled click from a
  // non-interactive descendant of the modal from closing it).
  closeBadgeModal(el, e) {
    if (e && e.target !== el) return false;
    state.badgeModal = state.badgeQueue.length ? state.badgeQueue.shift() : null;
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
// Remembers which element opened the currently-open modal, so closing it
// (Cancel, Escape, or the backdrop -- any of them) can return focus there
// instead of dropping it to <body>, same problem opening a modal had
// before refocusSelector's dialog check below existed, just on the way
// out instead of the way in. Built from the trigger's own data-* attributes
// (every trigger already carries what its own action handler needs to run,
// e.g. data-lesson-id), so this needs no per-modal-type wiring -- it works
// for whichever trigger opened the dialog without knowing its shape.
let modalTriggerSelector = null;

function triggerSelectorFor(el) {
  if (!el || !el.dataset || !el.dataset.action) return null;
  return Object.entries(el.dataset)
    .map(([key, value]) => `[data-${key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}="${value}"]`)
    .join('');
}

// Escape closes a modal without going through refocusSelector at all (see
// the keydown handler below) -- this is what lets it restore focus too.
function consumeModalTriggerSelector() {
  if (!modalTriggerSelector) return null;
  const sel = modalTriggerSelector;
  modalTriggerSelector = null;
  return sel;
}

function refocusSelector(el) {
  // Any of these mean a modal dialog is about to render -- checked by state
  // rather than el.dataset.action because a badge can pop up as a side
  // effect of several different actions (finishing a lesson, a Practice
  // Mode streak, a module reset, ...), not one dedicated "open badge"
  // action. Every dialog shares role="dialog" and a tabindex="-1" on its
  // own root (render.js), so this one selector covers all of them --
  // without it, focus reverts to <body> on every dialog open, forcing a
  // keyboard user to Tab back in from the top of the document to reach it.
  if (
    state.lessonPreviewId || state.litChapterPreviewId
    || state.pathCheckpointSetupNodeId || state.pathSkipAheadPromptNodeId
    || state.unlockPrompt || state.resetModulePromptId
    || state.forceUnlockPrompt || state.badgeModal
    || state.leaveSessionPromptTarget
  ) {
    // Only capture on the transition into open -- an action that fires
    // while the SAME modal stays open (e.g. a direction-picker toggle
    // inside pathCheckpointSetupHtml) must not overwrite the real opener
    // with an inside-the-modal element that won't exist once it closes.
    if (!modalTriggerSelector) modalTriggerSelector = triggerSelectorFor(el);
    return '[role="dialog"]';
  }
  // No dialog will be open after this action. If one was open a moment ago
  // (modalTriggerSelector still set), this action just closed it -- return
  // focus to whatever opened it rather than falling through to <body>.
  if (modalTriggerSelector) return consumeModalTriggerSelector();
  const action = el.dataset.action;
  // The Check button un-renders once the answer is graded, so its own
  // counterpart never exists. Focus moves to the verdict itself (the
  // exercise-feedback line carries tabindex="-1" for exactly this): a
  // screen reader announces the result, and the next Tab reaches Try
  // again / Next concept in order (audit MOT-006/UX-004).
  if (action === 'checkConceptExercise') return `[data-concept-index="${el.dataset.index}"] .exercise-feedback`;
  // The chooser is long gone by the time the switched course's dashboard
  // renders (chooseCourse closes it in its first paint), so the menu item
  // pressed has no counterpart. The switch trigger is the control narrating
  // the change -- focusing it announces the freshly rendered "currently
  // <new course>" label, which is what tells a keyboard or screen-reader
  // user the switch actually landed (audit MOT-002).
  if (action === 'chooseCourse') return '[data-action="toggleCourseMenu"]';
  // The literature drills' chips and slots have the same problem and the
  // same fix. A placed chip becomes disabled, so focus goes to whichever
  // chip is still available rather than to the one just used.
  if (action === 'litBuildChip' || action === 'litWorkshopChip') return '.lit-chips .lit-chip:not([disabled])';
  // Switching the course Schedule is planning re-renders the whole page
  // around the switcher; putting focus back on it announces the freshly
  // rendered label ("Planning <new course> — switch course"), which is what
  // tells a screen-reader user the scope actually changed (audit NAV-003).
  if (action === 'chooseScheduleCourse') return '[data-action="toggleCourseMenu"]';
  // Clearing the Library search removes the clear button itself from the
  // DOM -- focus continues in the field it just emptied, so a keyboard user
  // can type a fresh query straight away (audit NAV-004).
  if (action === 'clearLibrarySearch') return '#lit-search-input';
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
  // Native form controls (the lesson/reading text-size range sliders) carry
  // data-action too, but only so the 'change' listener below can find them
  // the same way -- their action must fire once a value is actually
  // committed, not on the click that merely focuses/starts dragging the
  // control. Without this guard, that opening click would fire the action
  // immediately with the stale pre-drag value.
  if (el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.tagName === 'TEXTAREA') return;
  // Primary navigation is real links now (see headerHtml/tabBarHtml in
  // js/render.js): an <a href> so the browser can offer "open in new tab",
  // and so cmd/ctrl/shift-click does what it does everywhere else on the
  // web. A modified click is left entirely to the browser -- the action must
  // NOT also run, or the current tab would navigate as well as the new one.
  // An unmodified click is ours: the action owns the transition (it clears
  // session state the href knows nothing about), and trackHistory writes the
  // very same URL a moment later.
  if (el.tagName === 'A' && el.getAttribute('href')) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
  }
  const handler = actions[el.dataset.action];
  if (!handler) return;
  const result = handler(el, e);
  if (result && typeof result.then === 'function') {
    // Acknowledge the click right away -- the busy spinner CSS holds itself
    // invisible for the first beat, so a promise that resolves instantly
    // (an already-imported course, say) never flashes it.
    markBusy(el);
    result.then((value) => {
      if (value !== false) {
        rerender(refocusSelector(el));
        applyActionMotion(root, el);
      } else {
        unmarkBusy(el);
      }
    });
    return;
  }
  if (result === false) return;
  // A pure-dismiss action (Cancel, backdrop click, a toggle closing its own
  // menu) lets the overlay play a short exit on the OLD DOM before the swap
  // lands. State is already updated above, so the deferred rerender is
  // consistent no matter what happens in between. Closing one badge modal
  // while more are queued skips the exit -- the next modal replaces this one
  // in the same swap, and fading out first would just blink.
  const exitMs = el.dataset.action === 'closeBadgeModal' && state.badgeQueue.length
    ? 0
    : dismissDelay(root, el.dataset.action);
  const focusSel = refocusSelector(el);
  if (exitMs) {
    setTimeout(() => {
      rerender(focusSel);
      applyActionMotion(root, el);
    }, exitMs);
    return;
  }
  rerender(focusSel);
  applyActionMotion(root, el);
});

// Home's course menu is the one popout with no backdrop of its own, so
// nothing dismissed it: every modal in the app closes on an outside click
// through its backdrop's data-action, and this dropped out of a heading
// with no backdrop to give it one. Left open, it sat over the module list
// until the trigger was pressed a second time. Runs on every click, not
// only [data-action] ones, since the whole point is the clicks that are
// neither the menu nor its trigger.
document.addEventListener('click', (e) => {
  if (!state.courseMenuOpen) return;
  if (e.target.closest('.course-menu, [data-action="toggleCourseMenu"]')) return;
  state.courseMenuOpen = false;
  // Same exit its own toggle plays (audit MOT-003: every animated entry
  // gets a matched exit, however the dismissal arrives) -- the old menu,
  // still on screen, drops out while the swap waits.
  const exitMs = dismissOpenPopover(root, '.course-menu');
  if (exitMs) setTimeout(() => rerender(), exitMs);
  else rerender();
});

// Same dismissal for the deep-screen sections menu (audit NAV-002) -- a
// popout without a backdrop needs the page around it to close it.
document.addEventListener('click', (e) => {
  if (!state.sectionsMenuOpen) return;
  if (e.target.closest('.sections-menu, [data-action="toggleSectionsMenu"]')) return;
  state.sectionsMenuOpen = false;
  const exitMs = dismissOpenPopover(root, '.sections-menu');
  if (exitMs) setTimeout(() => rerender(), exitMs);
  else rerender();
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
      if (handler && handler(el, e) !== false) {
        rerender(refocusSelector(el));
        applyActionMotion(root, el);
      }
      return;
    }
  }
  if (e.key !== 'Escape') return;
  // Escape in the Library search clears the query while keeping focus in
  // the field (audit NAV-004; the same contract UX-007 asks of the lesson
  // search) -- checked before the overlay branches below so a stray open
  // popover elsewhere can't swallow the keypress meant for the field.
  if (e.target.closest && e.target.closest('#lit-search-input') && state.litSearchQuery) {
    state.litSearchQuery = '';
    rerender('#lit-search-input');
    return;
  }
  // Escape-close plays the same overlay exit the Cancel buttons do: the
  // modal (still in the old DOM) fades for a beat, then the swap lands.
  // State is already updated by the time this runs, so the deferred
  // rerender is consistent whatever else happens in between.
  const rerenderAfterModalExit = (focusSel, skipExit = false) => {
    const exitMs = skipExit ? 0 : dismissOpenModal(root);
    if (exitMs) setTimeout(() => rerender(focusSel), exitMs);
    else rerender(focusSel);
  };
  if (state.sectionsMenuOpen) {
    // Same depth, reasoning, and matched exit as the course menu just below.
    state.sectionsMenuOpen = false;
    const menuExitMs = dismissOpenPopover(root, '.sections-menu');
    if (menuExitMs) setTimeout(() => rerender('[data-action="toggleSectionsMenu"]'), menuExitMs);
    else rerender('[data-action="toggleSectionsMenu"]');
  } else if (state.courseMenuOpen) {
    // Shallower than any modal, and never open at the same time as one --
    // a course menu click either closes it or leaves Home entirely. Plays
    // the same drop-out exit its toggle does before the swap (MOT-003),
    // then focus returns to the trigger only after the exit has landed.
    state.courseMenuOpen = false;
    const menuExitMs = dismissOpenPopover(root, '.course-menu');
    if (menuExitMs) setTimeout(() => rerender('[data-action="toggleCourseMenu"]'), menuExitMs);
    else rerender('[data-action="toggleCourseMenu"]');
  } else if (state.lessonPreviewId) {
    state.lessonPreviewId = null;
    rerenderAfterModalExit(consumeModalTriggerSelector());
  } else if (state.litChapterPreviewId) {
    state.litChapterPreviewId = null;
    rerenderAfterModalExit(consumeModalTriggerSelector());
  } else if (state.pathCheckpointSetupNodeId) {
    state.pathCheckpointSetupNodeId = null;
    rerenderAfterModalExit(consumeModalTriggerSelector());
  } else if (state.pathSkipAheadPromptNodeId) {
    state.pathSkipAheadPromptNodeId = null;
    rerenderAfterModalExit(consumeModalTriggerSelector());
  } else if (state.forceUnlockPrompt) {
    state.forceUnlockPrompt = false;
    rerenderAfterModalExit(consumeModalTriggerSelector());
  } else if (state.resetModulePromptId) {
    state.resetModulePromptId = null;
    rerenderAfterModalExit(consumeModalTriggerSelector());
  } else if (state.unlockPrompt) {
    state.unlockPrompt = null;
    rerenderAfterModalExit(consumeModalTriggerSelector());
  } else if (state.leaveSessionPromptTarget) {
    state.leaveSessionPromptTarget = null;
    rerenderAfterModalExit(consumeModalTriggerSelector());
  } else if (state.badgeModal) {
    // With more badges queued, the next modal replaces this one in the same
    // swap -- fading out first would just blink.
    const hasMore = state.badgeQueue.length > 0;
    actions.closeBadgeModal();
    rerenderAfterModalExit(consumeModalTriggerSelector(), hasMore);
  }
});

// Traps Tab/Shift+Tab inside an open modal so a keyboard user can't
// wander into the (visually covered, but not actually inert) page behind
// the backdrop -- without this, Tab from a dialog's last button reached the
// header's brand logo next, which was reachable and clickable despite
// sitting under an opaque backdrop. Only the two boundary crossings are
// handled (last->first, first->last); every Tab in between is left to the
// browser's own default behaviour, which already moves through the
// dialog's own children correctly on its own.
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Tab') return;
  const dialog = document.querySelector('[role="dialog"]');
  if (!dialog) return;
  const focusable = dialog.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

document.addEventListener('change', (e) => {
  // The lesson/reading text-size range sliders reach their handlers through
  // this exact same data-action dispatch as clicks -- see setLessonTextScale/
  // setLitTextScale, which read el.value. A native range still IS a native
  // range here (unlike the date/select fields elsewhere on the Schedule tab,
  // now themed popovers of the app's own -- see deadlinePickerHtml/
  // resetHourMenuHtml in js/render.js): dragging it is exactly the built-in
  // interaction this screen wants, so there was no reason to replace it.
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
  // The track's travelled portion is painted from --range-pct (see the range
  // rules in styles.css -- WebKit has no ::-moz-range-progress, and the
  // native track it would otherwise use is a solid dark bar). Patched by
  // hand for the same reason the readout above is: this drag deliberately
  // does not re-render.
  const lo = Number(el.min);
  const hi = Number(el.max);
  if (hi !== lo) {
    const pct = Math.max(0, Math.min(100, Math.round(((Number(el.value) - lo) / (hi - lo)) * 100)));
    el.style.setProperty('--range-pct', `${pct}%`);
  }
  persistSoon(state);
});

// The dashboard's lesson search box also wants a live-as-you-type result
// list, which (unlike the sliders above) genuinely needs a full rerender to
// show. A full rerender replaces the whole #root, which would normally
// yank focus off the input after every keystroke (see rerender's own
// comment on focus/scroll not surviving a re-render) -- passing this
// input's own id back as the refocus selector is what keeps typing usable.
document.addEventListener('input', (e) => {
  const el = e.target.closest('#lesson-search-input');
  if (!el) return;
  actions.searchLessons(el);
  rerender('#lesson-search-input');
});

// The Library's search box (audit NAV-004): same live-as-you-type treatment,
// same refocus reasoning, as the dashboard search just above.
document.addEventListener('input', (e) => {
  const el = e.target.closest('#lit-search-input');
  if (!el) return;
  actions.searchLibrary(el);
  rerender('#lit-search-input');
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


// --- lifecycle ----------------------------------------------------------

window.addEventListener('beforeunload', flushPersist);

// A URL wins over the persisted position. Opening a bookmark, following a
// shared link, or cmd-clicking a tab into a new window all have to land on
// the screen the URL names -- otherwise the link is decorative and the app
// quietly reopens wherever this profile happened to be last. A hash naming
// something this profile cannot reach is not an error: navFromHash and
// sanitizeRestoredNav between them fall back to the nearest screen that IS
// reachable, the same way boot sanitation does for a stale saved position.
if (location.hash && location.hash !== '#/') {
  const bootSnap = navFromHash(location.hash);
  if (bootSnap) {
    await restoreNav(bootSnap, { rerenderAfter: false });
    // restoreNav leaves lastHistorySig pointing at the screen it landed on,
    // which would make trackHistory skip seeding this tab's very first entry
    // (and so leave history.state null on it). Clearing it hands that job
    // back to the replaceState branch, exactly as on a hash-less boot.
    lastHistorySig = null;
  }
}

// Pre-seed lastNav so the first paint's scroll bookkeeping starts from the
// screen the learner actually lands on.
lastNav = navSignature();
rerender();

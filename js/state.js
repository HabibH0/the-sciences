import { bootProgress } from './persistence.js';
import { getLesson, getModule, getBankPool, bankKey, quizKey, isLessonComplete } from '../content/index.js';
import { pathPoolForNode, pathFullPool, pathSkipAheadPoolForNode } from '../content/paths.js';
import {
  chapterSentences, isBuildEligible, sentenceHasUnknown, sentenceHasNewWord,
  caseVariant, caseNote, caseLabel, caseForms, hasCaseMark, LIT_BUILD_MIN, LIT_BUILD_MAX,
} from '../content-lit/index.js';

export async function createInitialState() {
  const boot = await bootProgress();
  const nav = boot.nav || {};
  return {
    // Which course is active -- 'annahw' | 'fstu' | 'sarf' (see
    // content/index.js's COURSES/setActiveCourse). Shared xp/streak/badges/
    // appearance below stay one profile across all three; per-course
    // progress separation instead comes from module ids never colliding
    // across courses (see COURSES' own comment in content/index.js).
    courseId: boot.courseId || 'annahw',
    // Transient, never persisted: the course-picker splash (see launchHtml
    // in js/render.js) shown before every screen this session boots into --
    // the user wants it every launch, not just the machine's first-ever
    // run. Cleared by chooseCourse (js/main.js), which resets the picked
    // course to its dashboard/module list. The nav fields below still let
    // direct reloads/internal navigation retain their position while the
    // session is already inside the app.
    launchScreen: true,
    view: nav.view || 'dashboard',
    moduleId: nav.moduleId || null,
    lessonId: nav.lessonId || null,
    // conceptKey -> 0 (exercise hidden) or 1 (exercise shown). Persisted;
    // never resets once revealed. How far down the lesson page the learner
    // has got is NOT stored -- it's derived from exStates on every render
    // (see conceptsToRender), so it can't drift.
    revealState: boot.revealState || {},
    practiceModuleId: nav.practiceModuleId || null,
    // "<moduleId>_<lessonId>" -> { view } -- concepts page or quiz
    lessonPos: boot.lessonPos || {},
    // Transient: the lesson whose "Start lesson" modal is open. Not persisted.
    lessonPreviewId: null,
    // Transient: the dashboard's lesson-title/subtitle search box (see
    // searchLessons in js/main.js). Not persisted -- always reopens empty,
    // same treatment as scheduleTab/practiceSetupOpen. Cleared whenever the
    // dashboard is (re-)entered (openDashboard/activateCourse) and when a
    // result is picked, so returning to the dashboard never shows a stale
    // filtered view.
    lessonSearchQuery: '',
    // Transient: true while the lesson/mastery flow currently open was
    // entered from the My Path map (see enterPathLesson in js/main.js),
    // rather than from a course's own module page -- so finishLesson and
    // masteryV2Complete know to route back to the path map instead of the
    // module page once it's done. Not persisted -- same treatment as
    // lessonPreviewId/state.practice, an in-progress session doesn't
    // survive a reload. (A path LESSON node's own done-ness is never
    // tracked separately in pathNodeStatus -- it's derived straight from
    // state.completed, the same general per-lesson completion every course
    // page already uses, so completing a lesson via its course page or via
    // the path stay the same fact everywhere -- see isPathNodeDone below.)
    pathActive: false,
    // Transient: true whenever the learner's current top-level context is
    // My Path -- set on entering it (openMyPath/openPathGroup/
    // backToPathGroups) and only cleared by explicitly entering a course
    // (activateCourse/openModule/openDashboard/...). Unlike state.view,
    // this survives a Settings/Schedule/Achievements detour (those don't
    // touch it), so the header can still offer a way back into My Path
    // afterward instead of stranding the learner on whichever course
    // state.courseId happens to hold (see headerHtml in js/render.js).
    pathHome: nav.view === 'path' || nav.view === 'pathGroups',
    // Which group's own path map is currently open (see openPathGroup in
    // js/main.js) -- null while on the group-selection screen (pathGroupsHtml
    // in js/render.js). Persisted via nav (like moduleId/lessonId) so a
    // reload resumes inside the same group's map rather than always
    // bouncing back to the group list.
    pathGroupId: nav.pathGroupId || null,
    // Transient: which checkpoint/section-test node's pre-start popout is
    // open (see pathCheckpointSetupHtml in js/render.js) -- shows a vocab
    // direction picker (vocabCheckpoint only) and, once a node has already
    // been passed once, a choice between redoing it normally or attempting
    // its Mastery variant. Null when closed.
    pathCheckpointSetupNodeId: null,
    // Transient: which LOCKED section/group-test node's "Jump ahead"
    // confirmation prompt is open (see pathSkipAheadPromptHtml in
    // js/render.js) -- distinct from pathCheckpointSetupNodeId above, which
    // is only ever for already-unlocked nodes. Null when closed.
    pathSkipAheadPromptNodeId: null,
    // Transient: 'en-ar' | 'ar-en', the direction chosen in that popout.
    // Not persisted -- same treatment as practiceVocabType, defaults to
    // 'en-ar' when unset.
    pathVocabDirection: null,
    // Every checkpoint/revision/section-test node's Mastery variant (double
    // length, 100% required -- see buildPathMcqCheckpointQueue et al.'s
    // `mastery` branch) is tracked separately from the node's own
    // pathNodeStatus: passing a Mastery attempt never affects unlocking
    // (that's still governed purely by the NORMAL pass, at 70%/80%) -- it's
    // a bonus layer on top, the same relationship lesson Mastery (masteryV2)
    // already has with a lesson's own quiz completion. nodeId -> { passed,
    // at, score }.
    pathCheckpointMastery: boot.pathCheckpointMastery || {},
    // exercise key -> display order of that question's options. Reshuffled
    // every time the question is entered afresh, so revisiting a solved
    // question doesn't show the answer sitting where you left it. Transient:
    // an option's stored `selected` is always the ORIGINAL index, so nothing
    // here needs persisting.
    optionOrder: {},
    // Lesson quiz: one question at a time, reveal-on-click (no separate
    // submit step -- see selectQuizOption in main.js). quizIndex is the
    // current question (0-based); quizSelected is that question's chosen
    // option (ORIGINAL index) once quizRevealed flips true; quizAnswers
    // collects each question's committed answer as you advance, so the
    // final score/streak/tier can be computed from it once quizShowResult
    // is true. None of this is persisted (same as practice below) -- a
    // reload always starts the quiz fresh at question 1.
    quizIndex: 0,
    quizSelected: null,
    quizRevealed: false,
    quizAnswers: [],
    quizShowResult: false,
    quizPassed: false,
    quizOptionOrder: {},
    // Bumped on every fresh attempt (see startQuizAttempt in js/main.js).
    quizAttempt: 0,
    // Which item of the CURRENT lesson's own exercise (lesson.exercise.items,
    // content-fstu lessons only) the single exercise box is showing. Seeded
    // by shuffleLessonOptions (js/main.js) whenever the lesson is (re-)
    // entered, from firstUnpassedExerciseIndex -- not re-derived on every
    // render, so a correct answer doesn't jump straight to the next
    // question with no visible "Correct" pause. Not persisted -- always
    // reseeded from exStates (which IS persisted) on entry.
    lessonExIndex: 0,
    // Transient: which tab ("mcq" | "tarkeeb" | "vocab") the Practice Mode
    // setup popout is showing. Not persisted -- always reopens on "mcq".
    practiceSetupKind: null,
    // Transient: which of the three vocab question directions ("en-ar" |
    // "ar-en" | "form", see the vocabType tag on generated vocab bank items
    // in content-fstu/module-0N.js) the Vocab tab is showing -- picking one
    // is what actually narrows the pool (see getVocabPool), replacing the
    // old "every direction pooled together" behaviour. Not persisted --
    // defaults to "en-ar" when unset (see practiceSetupPanelHtml).
    practiceVocabType: null,
    // Transient: copied from the saved Tarkeeb translation default whenever
    // the module Practice Mode setup opens, then copied onto that one
    // session when it starts.
    practiceTarkeebTranslations: null,
    // Transient: whether the Practice Mode setup popout is expanded under
    // the module page's "Practice Mode" button. Not persisted -- a reload
    // always lands with it collapsed.
    practiceSetupOpen: false,
    // Transient: the active Practice Mode session, or null between sessions.
    // { kind, moduleId, queue: [key,...], index, log: [{key,title,correct}],
    //   startedAt, selected, submitted, correct }
    // Not persisted -- an in-progress session doesn't survive a reload,
    // same as tarkeebState below.
    practice: null,
    // Practice Mode's spaced-repetition-ish memory: bank key -> { lastSeen,
    // lastCorrect, timesSeen, timesWrong }. Persisted, and never reset --
    // it's what lets a new session weight older/wrong answers back in.
    // Every session source still writes through it (recordPracticeAnswer),
    // Revision Mode included, but Revision no longer reads it to decide
    // what's due -- see buildModuleRevisionQueue below.
    practiceHistory: boot.practiceHistory || {},
    tarkeebLabelsBlue: boot.tarkeebLabelsBlue !== false,
    // Schedule tab, "Deadline" sub-tab: courseId -> target completion date
    // (YYYY-MM-DD), so each course keeps its own deadline instead of one
    // shared across every course. Missing entry means unset for that course.
    // The daily lesson target is never stored -- it's recomputed live from
    // this date plus totalLessons()/totalLessonsCleared() on every render
    // (see scheduleHtml), so falling behind or ahead just reflows the
    // remaining days automatically instead of needing a stored plan to be
    // kept in sync.
    scheduleDeadline: boot.scheduleDeadline || {},
    // Schedule tab, "Deadline" sub-tab: the hour (0-23, local time) the
    // app's notion of "today" rolls over -- read by todayISO (js/
    // persistence.js) everywhere a calendar day is derived (the streak,
    // this course's deadline countdown, lesson completion dates). Already
    // normalized to an int in [0,23] by bootProgress, so no further
    // validation needed here.
    dailyResetHour: boot.dailyResetHour || 0,
    // My Path: nodeId -> { done: true, at: ISODate, score?: {correct,total} }.
    // Only ever written for checkpoint/revision/milestone nodes -- a LESSON
    // node has no entry here at all, since its done-ness is derived
    // straight from `completed` instead (see isPathNodeDone). "Furthest
    // reached" is DERIVED (see firstUnfinishedPathNodeIndex below), never
    // stored redundantly -- same derive-don't-store idiom this file already
    // uses for e.g. conceptsToRender in content/index.js.
    pathNodeStatus: boot.pathNodeStatus || {},
    // My Path's "wrong answers need 3 separate REVISION-node reappearances
    // before they're learned" rule (mcq/tarkeeb/lesson-content-quiz items
    // alike -- vocab has its own rule below). Lazily created on a card's
    // first wrong answer anywhere on the path; `count` only increments on a
    // CORRECT reappearance inside a 'revision'-type node (deduped by
    // seenNodeIds, so answering the same revision node's question twice in
    // one sitting can't double-count), never on a checkpoint reappearance --
    // a later wrong answer does NOT reset count, since the rule is "at least
    // 3 revision nodes", not "3 in a row".
    pathReps: boot.pathReps || {},
    // My Path's vocab-learning rule: an item is "learned" once answered
    // CORRECTLY VOCAB_LEARNED_COUNT times (wrong answers don't count toward
    // that), but EVERY appearance in a vocab checkpoint -- right or wrong --
    // still marks the item "seen" here, which is what
    // buildPathVocabCheckpointQueue's seen/unseen split checks for. Deduped
    // per node visit by seenNodeIds, same idiom as pathReps.
    vocabExposure: boot.vocabExposure || {},
    // REPLACES the old streak-based masteryProgress, app-wide (every course,
    // not just My Path): one pass/fail attempt over a lesson's WHOLE
    // تركيب+mcq+quiz pool, keyed per lesson rather than per card, since
    // there's nothing below the lesson level to track -- see
    // buildMasteryV2Queue/masteryV2Pool below. `${moduleId}_${lessonId}` -> {
    // passed, attempts, lastAttemptAt }.
    masteryV2: boot.masteryV2 || {},
    // Transient: which of the two Schedule sub-tabs is showing. Not
    // persisted -- always reopens on "deadline".
    scheduleTab: 'deadline',
    // Bumped on every tab switch (see setScheduleTab in main.js).
    scheduleTabAttempt: 0,
    // Transient: Revision's top-level toggle -- 'module' (the module quiz)
    // or 'vocab'. Not persisted -- always reopens on "module".
    scheduleRevisionKind: 'module',
    // Transient: Achievements' catalogue filter -- 'all' | 'progress' |
    // 'earned'. Not persisted; always reopens on 'all'.
    achievementsFilter: 'all',
    // Transient: Revision's "Pick a module" vs "Random" toggle. Not
    // persisted -- always reopens on "pick".
    scheduleRevisionMode: 'pick',
    // Transient: the module chosen in "Pick a module" mode. Not persisted --
    // cleared implicitly whenever it no longer names an eligible (fully
    // completed) module, see scheduleRevisionHtml in js/render.js.
    scheduleRevisionModuleId: null,
    // Transient: 'en-ar' | 'ar-en', Revision Vocab's translation direction.
    // Not persisted -- same treatment as pathVocabDirection/
    // practiceVocabType, defaults to 'en-ar' when unset.
    scheduleRevisionVocabDirection: null,
    // --- Literature (content-lit/) ---
    // A book is not a course, so none of the course nav above applies to it:
    // which book/chapter is open lives here instead, and the reader's own
    // in-progress session (state.lit) is transient exactly like state.practice.
    litBookId: nav.litBookId || null,
    litChapterId: nav.litChapterId || null,
    // True whenever the learner's current top-level context is the Library --
    // same job as pathHome above, so a Settings detour can still offer the
    // way back in.
    litHome: ['library', 'litBook', 'litRead'].includes(nav.view),
    // Transient: the open chapter's read/workshop/build session, or null.
    // See enterLitChapter in js/main.js for its shape.
    lit: null,
    // Transient: the chapter id whose "Free read / Practice" mode-picker
    // modal is open, mirroring lessonPreviewId's job for grammar lessons.
    // Not persisted.
    litChapterPreviewId: null,
    // Transient: the chapter-preview modal's launch state -- null (idle),
    // { status: 'loading', mode } while the chapter module is fetched, or
    // { status: 'error', mode } after a failed fetch, where mode is
    // 'free' | 'practice' so Retry can re-run the same choice. Without this
    // the dialog gave no feedback at all on a slow or failed load: both
    // buttons just appeared dead (see launchLitChapter in js/main.js).
    litChapterLoad: null,
    // `${bookId}/${chapterId}` -> { para, done, at, score } -- `para` is the
    // furthest paragraph reached, so a long chapter resumes where it was left
    // rather than restarting (unlike a practice session, a chapter is a long
    // sitting). Persisted.
    litProgress: boot.litProgress || {},
    // bookId -> lemma -> true, the words the learner double-clicked as
    // unknown while reading. Persisted, and read back by the build exercise
    // to decide which sentences it draws from.
    litUnknown: boot.litUnknown || {},
    // bookId -> lemma -> { count, seenSentenceIds }, the "Practice weak
    // words" mode's per-word rep counter (see buildLitWordPracticeQueue
    // below) -- how many times a word has been answered correctly in that
    // mode, and which build sentences it's already been drilled with (so a
    // word practiced repeatedly cycles through different sentences rather
    // than the same one). A lemma is deleted from here (and from litUnknown)
    // the moment it retires -- see LIT_WORD_RETIRE_COUNT. Persisted.
    litWordReps: boot.litWordReps || {},
    // 'ar' | 'en' -- which language the comprehension checks are asked in.
    // A standing reading preference rather than a per-session choice, so it
    // is persisted; `answer` indexes both option lists, so switching
    // mid-paragraph never changes what is correct.
    litCheckLang: boot.litCheckLang,
    // How large the reading page's Arabic is set, as a percentage. Its own
    // control rather than lessonTextScale's: a page of prose is read at a
    // different size from a lesson's worked examples, and the reader is the
    // only screen where the Arabic IS the content.
    litTextScale: boot.litTextScale,
    // Whether hover-to-translate phrase gloss is enabled in literature reader.
    // Default true. Persisted standing preference.
    litHoverTranslate: boot.litHoverTranslate !== false,
    completed: boot.completed,
    // Mirrors `completed`'s shape (moduleId -> lessonId -> value) but at
    // real-timestamp precision instead of a calendar date -- see
    // markLessonComplete in js/main.js. Exists purely so the sync merge can
    // tell a same-day redo apart from a same-day pre-reset leftover; nothing
    // else reads it. A lesson completed before this field existed simply
    // has no entry here, and the merge falls back to day-granularity for
    // it (moduleResetAt's own comment). Persisted.
    completedAt: boot.completedAt || {},
    // moduleId -> the timestamp "Reset progress" last wiped that module
    // (see resetModuleProgress in js/main.js). Read by the sync merge
    // (js/storage/syncClient.js's mergeProgressData) so a stale device's
    // old completions don't get resurrected by the union merge -- see
    // moduleResetAt's own comment there for why. Persisted.
    moduleResetAt: boot.moduleResetAt || {},
    quizScores: boot.quizScores,
    exStates: boot.exStates,
    streak: boot.streak,
    lastVisit: boot.lastVisit,
    // Days the app was opened (rolling window) -- what the Account streak
    // calendar fills from, alongside lesson-completion dates. Persisted.
    visitDays: boot.visitDays || [],
    xp: boot.xp,
    badges: boot.badges,
    // Lifetime correct-practice-drill count, driving the Practice Volume
    // badge ladder (see gamification.js) -- unlike state.practice's own log,
    // this survives across sessions instead of resetting each time.
    practiceCorrectTotal: boot.practiceCorrectTotal,
    // Appearance: colour theme, accent, Arabic typeface, and lesson text
    // scale (see
    // js/render.js THEMES/ACCENTS/FACES) -- theme and accent are independent
    // choices. Persisted, applied to <html data-theme>/<html data-accent>
    // and the --font-ar*/--lesson-text-scale custom properties on every render (see
    // applyAppearance in main.js).
    theme: boot.theme || 'manuscript',
    accent: boot.accent || 'gold',
    arabicFace: boot.arabicFace || 'naskh',
    arabicHeadingFace: boot.arabicHeadingFace || (boot.kufiHeadings ? 'kufi' : 'body'),
    lessonTextScale: boot.lessonTextScale || 100,
    tarkeebTranslations: boot.tarkeebTranslations !== false,
    forceUnlockAll: boot.forceUnlockAll === true,
    // False can now be a deliberate "course locks on" setting rather than
    // just the historical default. This marker lets sync avoid letting a
    // fresh device's unlocked default overwrite an existing cloud choice.
    forceUnlockAllExplicit: boot.forceUnlockAllExplicit === true,
    // Advanced-course/path lock override (see content/index.js's
    // isCourseUnlocked, content/paths.js's isTrackUnlocked) -- keyed by
    // courseId/trackId -> true once the direct unlock is confirmed, and
    // stays true from then on. The normal "finish the introductory course"
    // gate still applies independently and can also satisfy this on its own.
    unlockedCourses: boot.unlockedCourses || {},
    unlockedTracks: boot.unlockedTracks || {},
    // Skip-ahead unlock test override for an individual module (see
    // isModuleUnlocked in content/index.js) -- moduleId -> true once its
    // own unlock test (over the last few modules before it) is passed by
    // finalizeUnlockTest in js/main.js. Same additive-override idiom as
    // unlockedCourses/unlockedTracks: the normal "finish the previous
    // module" gate still applies independently.
    unlockedModules: boot.unlockedModules || {},
    // Transient: confirmation modal before the global unlock override is
    // enabled. The override itself is persisted; this prompt is not.
    forceUnlockPrompt: false,
    // Transient: moduleId of the module whose \"Reset progress\" confirm modal is
    // open, or null when closed. Not persisted -- same treatment as
    // forceUnlockPrompt and lessonPreviewId.
    resetModulePromptId: null,
    // Transient: { type: 'course'|'track'|'module', id } for the unlock-test
    // prompt modal (unlockPromptHtml in js/render.js), or null when closed.
    unlockPrompt: null,
    // Transient: the action name (e.g. 'openDashboard') pending confirmation
    // because it was clicked while a practice/mastery/checkpoint session (or
    // a live lesson quiz) had answers already logged -- see
    // leaveSessionPromptHtml in js/render.js and
    // confirmLeaveSession/cancelLeaveSessionPrompt in js/main.js, and
    // hasUnsavedSessionProgress in js/main.js for what counts as "had
    // answers already logged" for each. Null when no such prompt is open.
    // The header's brand logo, course-switch button, and achievements pill
    // are the only actions that route through this -- everywhere else that
    // can end a session (Schedule/Settings/Achievements tabs, the session's
    // own "End session") already goes through exitPracticeSession directly,
    // either because a live session's header hides them entirely
    // (inSession) or because ending deliberately is the whole point of the
    // click. A live quiz isn't in inSession (Schedule/Settings/Account
    // deliberately stay reachable there too), so it relies on this same
    // guard rather than a session-exit button it doesn't have.
    leaveSessionPromptTarget: null,
    // Independent of arabicFace -- layers a heading face onto headings
    // app-wide over whichever body face is set, rather than being another
    // body face. See applyAppearance in main.js.
    kufiHeadings: (boot.arabicHeadingFace || (boot.kufiHeadings ? 'kufi' : 'body')) === 'kufi',
    // Transient gamification UI: XP-toast text and the earned-badge modal.
    // Neither is persisted -- a reload shouldn't replay a stale
    // notification (same treatment as lessonPreviewId/practiceSetupOpen).
    // badgeModal is the one currently on screen; badgeQueue holds any more
    // earned in the same action, so a double badge-earn (e.g. first-ever
    // lesson also completing a short module) shows both popups in turn
    // instead of the first one being silently overwritten -- see awardBadge.
    toast: null,
    badgeModal: null,
    badgeQueue: [],
    account: {
      user: null,
      status: 'idle',
      message: '',
      // How `message` should read: 'info' while something is in flight,
      // 'success' once it landed, 'error' when it did not. Without this the
      // status line rendered "Signing in...", "Signed in" and "Could not
      // sign in" in exactly the same grey.
      messageTone: 'info',
      // A validation failure that belongs to one field, so it can be shown
      // under that field rather than in the status line at the foot of the
      // form: { field: 'email' | 'password', message }.
      fieldError: null,
      backendUrl: '',
      pendingSyncAction: null,
      cloudStatus: null,
      localStatus: null,
      syncBaseMeta: null,
      autoUploadStatus: 'idle',
      autoUploadMessage: '',
    },
  };
}

// A fresh per-attempt shuffle of each quiz question's option order, so the
// correct choice doesn't always land in the same position.
export function shuffleQuizOrder(lesson) {
  const order = {};
  lesson.quiz.forEach((q, qi) => {
    const indices = q.options.map((_, oi) => oi);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    order[qi] = indices;
  });
  return order;
}

// Practice Mode's selection weight for one candidate: never-seen items
// dominate (so a fresh pool gets covered before anything repeats), then
// among seen items, the longer since last seen and any wrong last answer
// both push the weight up -- never so low it can't still come up, never
// forced so it must.
const PRACTICE_UNSEEN_WEIGHT = 1000;
const PRACTICE_WRONG_BOOST = 3;

function practiceWeight(entry, history) {
  const h = history[entry.key];
  if (!h || !h.lastSeen) return PRACTICE_UNSEEN_WEIGHT;
  const hoursSince = Math.max(0, (Date.now() - h.lastSeen) / 3600000);
  let weight = 1 + hoursSince;
  if (h.lastCorrect === false) weight *= PRACTICE_WRONG_BOOST;
  return weight;
}

// Weighted sampling without replacement: builds an ordered, deduplicated
// queue of up to `count` keys drawn from `pool`, favoring whichever
// candidate the given weight function currently rates highest. Shared by
// Practice Mode's own history-based weighting (practiceWeight below) and My
// Path's checkpoint/revision queue builders further down, which layer their
// own extra weighting on top of the same base.
function weightedSample(pool, count, weightFn) {
  const remaining = pool.slice();
  const queue = [];
  const n = Math.min(count, remaining.length);
  for (let i = 0; i < n; i++) {
    const weights = remaining.map(weightFn);
    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    let idx = 0;
    for (; idx < weights.length - 1; idx++) {
      r -= weights[idx];
      if (r <= 0) break;
    }
    queue.push(remaining[idx].key);
    remaining.splice(idx, 1);
  }
  return queue;
}

export function buildPracticeQueue(pool, history, count) {
  return weightedSample(pool, count, (e) => practiceWeight(e, history));
}

// "Review what I need" -- the one-decision session (see practiceSetupPanelHtml
// / startSmartPractice). Built from the learner's own record over the
// COMPLETED-lessons pool only, so it never includes material they have not
// encountered: recent mistakes first (last answer wrong), then items due a
// look (seen, but not for a few days), topped up to length with the ordinary
// history-weighted sample over whatever remains. Returns the queue plus the
// composition counts, so the UI can say why the material was picked -- or
// null when the pool is empty.
export const SMART_SESSION_LENGTH = 10;
export const SMART_MISTAKE_SLOTS = 4;
export const SMART_DUE_SLOTS = 3;
const SMART_DUE_AGE_MS = 3 * 86400000;

export function smartPracticeBreakdown(pool, history, now = Date.now()) {
  const mistakes = [];
  const due = [];
  const rest = [];
  pool.forEach((e) => {
    const h = history[e.key];
    if (h && h.lastCorrect === false) mistakes.push(e);
    else if (h && h.lastSeen && now - h.lastSeen > SMART_DUE_AGE_MS) due.push(e);
    else rest.push(e);
  });
  return { mistakes, due, rest };
}

export function buildSmartPracticeSession(pool, history, now = Date.now()) {
  if (!pool.length) return null;
  const { mistakes, due } = smartPracticeBreakdown(pool, history, now);
  const queue = [];
  shuffle(mistakes).slice(0, SMART_MISTAKE_SLOTS).forEach((e) => queue.push(e.key));
  shuffle(due).slice(0, SMART_DUE_SLOTS).forEach((e) => queue.push(e.key));
  const used = new Set(queue);
  const remainder = pool.filter((e) => !used.has(e.key));
  buildPracticeQueue(remainder, history, SMART_SESSION_LENGTH - queue.length).forEach((k) => queue.push(k));
  if (!queue.length) return null;
  const mistakeCount = Math.min(SMART_MISTAKE_SLOTS, mistakes.length);
  const dueCount = Math.min(SMART_DUE_SLOTS, due.length);
  return {
    queue: shuffle(queue),
    counts: {
      total: queue.length,
      mistakes: mistakeCount,
      due: dueCount,
      other: queue.length - mistakeCount - dueCount,
    },
  };
}

// Fisher-Yates, used to shuffle a tarkeeb item's drag-tray chips on entry.
export function shuffle(arr) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// --- Revision Mode ---------------------------------------------------------
// Redesigned as a fixed-length quiz over a SINGLE module (picked by the
// learner, or at random -- see scheduleRevisionHtml/startRevision), rather
// than a spaced-repetition due-today deck spanning the whole course. Same
// pool/queue shape as lesson Mastery's own masteryV2SubPools/
// buildMasteryV2Queue just below, one level up: every lesson IN the module
// contributes its lesson-content quiz, book-exercise mcq, and تركيب items
// instead of just one lesson's. Only ever called with a module the learner
// has fully completed (see isModuleComplete, checked by the caller), so
// every lesson's bank/quiz content is already unlocked.
function moduleRevisionSubPools(moduleId, completed, forceUnlockAll = false) {
  const mod = getModule(moduleId);
  if (!mod) return { quizPool: [], bookPool: [], tarkeebPool: [] };
  const quizPool = [];
  mod.lessons.forEach((lesson) => {
    (lesson.quiz || []).forEach((q, idx) => {
      quizPool.push({
        key: quizKey(moduleId, lesson.id, idx), moduleId, lessonId: lesson.id, lessonTitle: lesson.title, title: lesson.title,
        item: { kind: 'mcq', prompt: q.q, options: q.options, correct: q.correct, explanation: q.explanation },
      });
    });
  });
  const bank = getBankPool(moduleId, completed, forceUnlockAll);
  const bookPool = bank.filter((p) => p.item.kind === 'mcq');
  const tarkeebPool = bank.filter((p) => p.item.kind === 'tarkeeb');
  return { quizPool, bookPool, tarkeebPool };
}

// Mirrors masteryV2Pool below -- the full lookup pool for an in-progress
// Revision session (bankPool()/findBankItem in js/main.js, practiceHtml in
// js/render.js), always every candidate regardless of how many
// buildModuleRevisionQueue actually sampled.
export function moduleRevisionPool(moduleId, completed, forceUnlockAll = false) {
  const { quizPool, bookPool, tarkeebPool } = moduleRevisionSubPools(moduleId, completed, forceUnlockAll);
  return [...quizPool, ...bookPool, ...tarkeebPool];
}

const REVISION_QUIZ_TARGET = 10;
const REVISION_BOOK_TARGET = 10;
const REVISION_TARKEEB_TARGET = 10;

// How many of each portion a module's quiz will actually draw, capped the
// same way buildModuleRevisionQueue itself caps them -- used by
// scheduleRevisionHtml (js/render.js) to preview a module's composition
// before the learner commits to it, without duplicating the capping math.
export function moduleRevisionCounts(moduleId, completed, forceUnlockAll = false) {
  const { quizPool, bookPool, tarkeebPool } = moduleRevisionSubPools(moduleId, completed, forceUnlockAll);
  const mcq = Math.min(quizPool.length, REVISION_QUIZ_TARGET) + Math.min(bookPool.length, REVISION_BOOK_TARGET);
  const tarkeeb = Math.min(tarkeebPool.length, REVISION_TARKEEB_TARGET);
  return { mcq, tarkeeb };
}

// 30 questions -- 20 mcq (10 lesson-content quiz + 10 book-exercise, equal
// split between the two mcq sources) + 10 تركيب, each portion capped by
// whatever's actually in the module (a Sarf module has no تركيب at all, so
// Revision there is simply 20 mcq -- same "capped, not padded" behaviour as
// buildMasteryV2Queue). Plain shuffle, no weighting or due-date logic: this
// is a one-off quiz over a module the learner already finished, not a
// spaced-repetition sample.
export function buildModuleRevisionQueue(moduleId, completed, forceUnlockAll = false) {
  const { quizPool, bookPool, tarkeebPool } = moduleRevisionSubPools(moduleId, completed, forceUnlockAll);
  const quizKeys = shuffle(quizPool).slice(0, REVISION_QUIZ_TARGET).map((e) => e.key);
  const bookKeys = shuffle(bookPool).slice(0, REVISION_BOOK_TARGET).map((e) => e.key);
  const tarkeebKeys = shuffle(tarkeebPool).slice(0, REVISION_TARKEEB_TARGET).map((e) => e.key);
  return shuffle([...quizKeys, ...bookKeys, ...tarkeebKeys]);
}

// --- Revision Mode: Vocab ---------------------------------------------
// A separate mode from the module quiz above -- not pinned to one module,
// but the whole course's unlocked vocab (getUnlockedVocabPool in
// content/index.js), same shape as My Path's own vocabCheckpoint
// (buildPathVocabCheckpointQueue) just below in the My Path section, reused
// deliberately ("inheriting the same logic... where incorrectly answered
// vocab appears more frequently" was the explicit ask) but with three
// numbers changed: a HIGHER learned bar (10 correct, not 5), a 3:7
// unseen:seen split (not 50:50), and a fixed 20-question length (not a
// node.length parameter). vocabExposure itself is untouched -- the SAME
// `count` this reads is also written by path vocab sessions (see
// bumpVocabExposure in js/main.js), so correct answers on either side count
// toward both bars; a word the path already calls "learned" at 5 correct
// still needs 5 MORE here before REVISION_VOCAB_LEARNED_COUNT excludes it.
export const REVISION_VOCAB_LEARNED_COUNT = 10;
const REVISION_VOCAB_LENGTH = 20;
// 3/10 of the path's own vocabCheckpoint length (10) is reserved for
// plural/مصدر "form" questions -- scaled up to REVISION_VOCAB_LENGTH (20)
// keeps the same ~30% ratio.
const REVISION_VOCAB_FORM_TARGET = 6;
const REVISION_VOCAB_UNSEEN_RATIO = 0.3;

// A word that's reached REVISION_VOCAB_LEARNED_COUNT correct answers is
// EXCLUDED outright here -- "so it doesn't appear again", an explicit ask --
// unlike vocabWeight above, which merely deprioritizes (weight 1) the
// path's own already-learned items rather than fully dropping them.
function revisionVocabEligible(pool, vocabExposure) {
  return pool.filter((e) => {
    const v = vocabExposure[e.key];
    return !v || v.count < REVISION_VOCAB_LEARNED_COUNT;
  });
}

// Same "push almost-learned words over the line" shape as seenPriorityWeight
// above, just against Revision's own higher bar -- reads v.count directly
// rather than v.learned, since v.learned is fixed to the path's 5-correct
// threshold and would read as "already learned" 5 answers too early here.
function revisionSeenPriorityWeight(entry, vocabExposure) {
  const v = vocabExposure[entry.key];
  const remaining = Math.max(1, REVISION_VOCAB_LEARNED_COUNT - (v ? v.count : 0));
  return 100 / remaining;
}

// Req: a 3-unseen : 7-seen split (not the path's 50/50) -- Revision leans
// toward resurfacing what's already in progress, while still trickling in
// enough brand-new words that "unseen" progress doesn't stall entirely.
// Falls back to filling any shortfall from whatever's left (still excluding
// already-revision-learned items) rather than returning fewer than `count`.
function pickRevisionVocabSplit(pool, count, vocabExposure) {
  if (count <= 0) return [];
  const eligible = revisionVocabEligible(pool, vocabExposure);
  const seenPool = eligible.filter((e) => vocabExposure[e.key]);
  const unseenPool = eligible.filter((e) => !vocabExposure[e.key]);
  const unseenCount = Math.min(Math.round(count * REVISION_VOCAB_UNSEEN_RATIO), unseenPool.length);
  const unseenKeys = shuffle(unseenPool).slice(0, unseenCount).map((e) => e.key);
  const seenCount = Math.min(count - unseenKeys.length, seenPool.length);
  const seenKeys = weightedSample(seenPool, seenCount, (e) => revisionSeenPriorityWeight(e, vocabExposure));
  let keys = unseenKeys.concat(seenKeys);
  if (keys.length < count) {
    const used = new Set(keys);
    const rest = eligible.filter((e) => !used.has(e.key));
    keys = keys.concat(shuffle(rest).slice(0, count - keys.length).map((e) => e.key));
  }
  return keys;
}

// `pool` is every vocabType pooled together (getUnlockedVocabPool with no
// vocabType filter) -- direction narrows the translation portion the same
// way buildPathVocabCheckpointQueue does, tops up from the OTHER direction
// if the chosen one alone can't fill the quiz (a small unlocked pool),
// rather than falling short of REVISION_VOCAB_LENGTH.
export function buildRevisionVocabQueue(pool, direction, vocabExposure) {
  const formPool = pool.filter((e) => e.item.vocabType === 'form');
  const translationPool = pool.filter((e) => e.item.vocabType === direction);
  const otherPool = pool.filter((e) => e.item.vocabType !== 'form' && e.item.vocabType !== direction);

  const formCount = Math.min(REVISION_VOCAB_FORM_TARGET, formPool.length, REVISION_VOCAB_LENGTH);
  const formKeys = pickRevisionVocabSplit(formPool, formCount, vocabExposure);
  const translationKeys = pickRevisionVocabSplit(translationPool, REVISION_VOCAB_LENGTH - formKeys.length, vocabExposure);
  let keys = formKeys.concat(translationKeys);
  if (keys.length < REVISION_VOCAB_LENGTH) {
    const used = new Set(keys);
    const topUpPool = otherPool.filter((e) => !used.has(e.key));
    keys = keys.concat(pickRevisionVocabSplit(topUpPool, REVISION_VOCAB_LENGTH - keys.length, vocabExposure));
  }
  return shuffle(keys);
}

// --- My Path ---------------------------------------------------------
// A checkpoint/revision node's actual question set is resolved HERE, live,
// the moment the learner opens it (mirrors buildModuleRevisionQueue's own
// lifecycle above) -- content/path.js's PATH_SKELETON only ever describes
// node TYPE and ORDER, never questions, so extending the skeleton to later
// groupings or re-running the same node never has stale content to
// reconcile against a learner's progress.

export const PATH_REP_LEARNED_COUNT = 3;
// A vocab item is "learned" once answered CORRECTLY this many times (wrong
// answers don't count toward it, though every exposure -- right or wrong --
// still marks the item as "seen" for buildPathVocabCheckpointQueue's own
// seen/unseen split, see recordPathRepAnswer in js/main.js).
export const VOCAB_LEARNED_COUNT = 5;
// How much more likely a still-due pathReps item is to be picked than its
// plain practiceWeight alone would make it -- enough to noticeably resurface
// it without making it a certainty (a revision node also owes real estate to
// unseen older content, see buildPathRevisionQueue).
const PATH_DUE_BOOST = 4;

function pathItemWeight(entry, practiceHistory, pathReps) {
  let w = practiceWeight(entry, practiceHistory);
  const rep = pathReps[entry.key];
  if (rep && !rep.learned) w *= PATH_DUE_BOOST;
  return w;
}

// Equal split (req: "an equal number of lesson content and book exercise
// mcqs") by construction -- half the length sampled from each pool, then
// shuffled together so the two sources interleave rather than arriving as
// two separate blocks. ctx.mastery doubles the length (req: every
// checkpoint's Mastery variant is double length, 100% required -- see
// pathCheckpointPassRatio).
export function buildPathMcqCheckpointQueue(node, ctx) {
  const { quizPool = [], bookPool = [] } = pathPoolForNode(node);
  const length = ctx.mastery ? node.length * 2 : node.length;
  const half = Math.floor(length / 2);
  const weightFn = (e) => pathItemWeight(e, ctx.practiceHistory, ctx.pathReps);
  const a = weightedSample(quizPool, half, weightFn);
  const b = weightedSample(bookPool, length - half, weightFn);
  // One pool being smaller than its half shouldn't quietly shrink the
  // checkpoint -- top up the shortfall from whatever's left in the other
  // pool first, same as buildPathVocabCheckpointQueue does below.
  let keys = a.concat(b);
  if (keys.length < length) {
    const used = new Set(keys);
    const leftover = quizPool.concat(bookPool).filter((e) => !used.has(e.key));
    keys = keys.concat(weightedSample(leftover, length - keys.length, weightFn));
  }
  return shuffle(keys);
}

// Used only for the truly-unseen half of a vocab checkpoint (see
// pickSeenUnseenSplit) -- every candidate there has no vocabExposure entry
// at all, so this just falls through to the flat PRACTICE_UNSEEN_WEIGHT for
// all of them (an even random pick among never-seen items). An
// already-learned item is deprioritized (weight 1) but never fully
// excluded, so it can still resurface occasionally as a last-resort top-up
// rather than vanishing outright.
function vocabWeight(entry, vocabExposure) {
  const v = vocabExposure[entry.key];
  if (!v) return PRACTICE_UNSEEN_WEIGHT;
  if (v.learned) return 1;
  return 50 + (VOCAB_LEARNED_COUNT - Math.min(v.count, VOCAB_LEARNED_COUNT)) * 20;
}

// Req: prioritize resurfacing seen-but-not-yet-learned vocab so it actually
// reaches VOCAB_LEARNED_COUNT correct answers rather than being diluted
// among an ever-growing pool of fresh words -- the fewer correct answers an
// item still needs, the higher its priority, so a word close to the line
// actually gets pushed over it.
function seenPriorityWeight(entry, vocabExposure) {
  const v = vocabExposure[entry.key];
  const remaining = Math.max(1, VOCAB_LEARNED_COUNT - (v ? v.count : 0));
  return 100 / remaining;
}

// Req: half the picks from `pool` are seen-but-not-yet-learned (weighted by
// seenPriorityWeight), half are never-seen -- unless nothing in `pool` has
// been seen yet at all, in which case every pick is unseen. Falls back to
// filling any shortfall (a small pool) from whatever's left, including
// already-learned items, rather than returning fewer than `count`.
function pickSeenUnseenSplit(pool, count, ctx) {
  if (count <= 0) return [];
  const seenPool = pool.filter((e) => ctx.vocabExposure[e.key] && !ctx.vocabExposure[e.key].learned);
  const unseenPool = pool.filter((e) => !ctx.vocabExposure[e.key]);
  const seenCount = seenPool.length ? Math.min(Math.round(count / 2), seenPool.length) : 0;
  const seenKeys = weightedSample(seenPool, seenCount, (e) => seenPriorityWeight(e, ctx.vocabExposure));
  const unseenKeys = weightedSample(unseenPool, count - seenKeys.length, (e) => vocabWeight(e, ctx.vocabExposure));
  let keys = seenKeys.concat(unseenKeys);
  if (keys.length < count) {
    const used = new Set(keys);
    const rest = pool.filter((e) => !used.has(e.key));
    keys = keys.concat(weightedSample(rest, count - keys.length, (e) => vocabWeight(e, ctx.vocabExposure)));
  }
  return keys;
}

// Req: a mix of translation (in whichever direction the learner picked in
// the pre-checkpoint setup popout, see pathCheckpointSetupHtml in
// js/render.js) and مصدر/plural "form" questions -- reserves a handful of
// slots for form items (when the window's pool actually has any -- an early
// lesson list mixing mostly nouns with one verb may not) -- AND, within
// each of those two portions, half seen/half unseen (see
// pickSeenUnseenSplit). Tops up from the OTHER direction if the chosen one
// alone can't reach the full length (a small early-lesson pool) rather than
// falling short. ctx.mastery doubles the length and the form-item
// reservation.
export function buildPathVocabCheckpointQueue(node, ctx) {
  const { vocabPool = [] } = pathPoolForNode(node);
  const length = ctx.mastery ? node.length * 2 : node.length;
  const direction = ctx.vocabDirection === 'ar-en' ? 'ar-en' : 'en-ar';
  const formPool = vocabPool.filter((e) => e.item.vocabType === 'form');
  const translationPool = vocabPool.filter((e) => e.item.vocabType === direction);
  const otherPool = vocabPool.filter((e) => e.item.vocabType !== 'form' && e.item.vocabType !== direction);

  const formCount = Math.min(ctx.mastery ? 6 : 3, formPool.length, length);
  const formKeys = pickSeenUnseenSplit(formPool, formCount, ctx);
  const translationKeys = pickSeenUnseenSplit(translationPool, length - formKeys.length, ctx);
  let keys = formKeys.concat(translationKeys);
  if (keys.length < length) {
    const used = new Set(keys);
    const topUpPool = otherPool.filter((e) => !used.has(e.key));
    keys = keys.concat(pickSeenUnseenSplit(topUpPool, length - keys.length, ctx));
  }
  return shuffle(keys);
}

// تركيب checkpoints don't have a fixed length like the others -- each visit
// picks a fresh target of 5-10 questions (bounded by however much pool
// actually exists), so a تركيب checkpoint reads as "however many the path
// feels like testing today" rather than a fixed quiz size. ctx.mastery
// doubles that range to 10-20.
export function buildPathTarkeebCheckpointQueue(node, ctx) {
  const { tarkeebPool = [] } = pathPoolForNode(node);
  const base = ctx.mastery ? 10 : 5;
  const span = ctx.mastery ? 11 : 6; // 10-20 inclusive, or 5-10 inclusive
  const target = Math.min(tarkeebPool.length, base + Math.floor(Math.random() * span));
  return weightedSample(tarkeebPool, target, (e) => pathItemWeight(e, ctx.practiceHistory, ctx.pathReps));
}

// One pool's worth of a revision-style pick: every not-yet-learned pathReps
// item is forced in first (a wrong answer really does keep coming back),
// then remaining slots fill with items never seen at all (long-term
// coverage of older content, not just review of recent mistakes), and if
// due+unseen still can't fill `count` (a small early pool), tops up from
// whatever's left via the ordinary practice weighting.
function pickRevisionSlice(pool, count, ctx) {
  const due = pool.filter((e) => {
    const rep = ctx.pathReps[e.key];
    return rep && !rep.learned;
  });
  const dueKeys = shuffle(due.map((e) => e.key)).slice(0, count);
  const unseenPool = pool.filter((e) => !ctx.practiceHistory[e.key] && !dueKeys.includes(e.key));
  const fill = weightedSample(unseenPool, Math.max(0, count - dueKeys.length), (e) => practiceWeight(e, ctx.practiceHistory));
  let keys = dueKeys.concat(fill);
  if (keys.length < count) {
    const used = new Set(keys);
    const rest = pool.filter((e) => !used.has(e.key));
    keys = keys.concat(weightedSample(rest, count - keys.length, (e) => practiceWeight(e, ctx.practiceHistory)));
  }
  return keys;
}

// 5 mcq (lesson-content + book-exercise combined) + 5 تركيب -- or 10 mcq
// outright when the window has no تركيب content yet (see grouping 1, whose
// تركيب pool is empty this early). No vocab -- that has its own dedicated
// checkpoint and exposure-count rule instead. ctx.mastery doubles both
// portions (10 mcq + 10 تركيب, or 20 mcq outright).
export function buildPathRevisionQueue(node, ctx) {
  const { quizPool = [], bookPool = [], tarkeebPool = [] } = pathPoolForNode(node);
  const mcqPool = quizPool.concat(bookPool);
  const length = ctx.mastery ? node.length * 2 : node.length;
  const tarkeebCount = Math.min(ctx.mastery ? 10 : 5, tarkeebPool.length);
  const mcqCount = length - tarkeebCount;
  const tarkeebKeys = pickRevisionSlice(tarkeebPool, tarkeebCount, ctx);
  const mcqKeys = pickRevisionSlice(mcqPool, mcqCount, ctx);
  return shuffle(tarkeebKeys.concat(mcqKeys));
}

// The section-ending gate (req: "the section complete bit should have its
// own larger test"): a fixed, comprehensive mix rather than spaced-
// repetition sampling -- this is a cumulative review of the whole section,
// not a due-cards session, so it still favors pathReps-due items via
// pathItemWeight but doesn't force them in the way revision does. Each
// portion is naturally capped by weightedSample never exceeding pool size
// (see sectionTestCounts in content/path.js for the matching display-side
// cap). ctx.mastery doubles every target (req: the section test's own
// Mastery variant is double length, 100% required). ctx.skipAhead draws
// from the cumulative jump-ahead pool instead of the normal in-window one
// (see startPathSkipAheadTest in js/main.js) -- same node, same target
// lengths, just a wider source pool to sample from.
export function buildPathSectionTestQueue(node, ctx) {
  const { quizPool = [], bookPool = [], tarkeebPool = [], vocabPool = [] } = ctx.skipAhead ? pathSkipAheadPoolForNode(node) : pathPoolForNode(node);
  const mult = ctx.mastery ? 2 : 1;
  const mcqPool = quizPool.concat(bookPool);
  const mcqKeys = weightedSample(mcqPool, node.mcqLength * mult, (e) => pathItemWeight(e, ctx.practiceHistory, ctx.pathReps));
  const tarkeebKeys = weightedSample(tarkeebPool, node.tarkeebLength * mult, (e) => pathItemWeight(e, ctx.practiceHistory, ctx.pathReps));
  const vocabKeys = weightedSample(vocabPool, node.vocabLength * mult, (e) => vocabWeight(e, ctx.vocabExposure));
  return shuffle(mcqKeys.concat(tarkeebKeys, vocabKeys));
}

// Node types that represent real progress through the path -- everything
// except sectionHeader, which is a plain label with nothing to complete.
// 'milestone' (a plain celebratory marker, auto-completed the instant it's
// reached -- see checkPathMilestones in js/main.js) and 'sectionTest' (a
// real scored gate, only marked done on a passing attempt -- see its own
// grading branch in nextPracticeQuestion) are deliberately both included
// here but behave differently; PATH_INTERACTIVE_TYPES only decides what
// counts toward "furthest reached", not how a node gets marked done.
const PATH_INTERACTIVE_TYPES = new Set(['lesson', 'mcqCheckpoint', 'vocabCheckpoint', 'tarkeebCheckpoint', 'revision', 'milestone', 'sectionTest', 'groupTest']);

// A lesson node's done-ness is the SAME fact the lesson's own course page
// already tracks (state.completed), not a separate path-only record --
// completing a lesson via My Path marks it done on its course page for
// free (finishLesson's markLessonComplete doesn't care how the lesson was
// reached), and completing it via the course page directly means the path
// already considers that node done the next time it's opened, with no
// path-specific action ever required. Checkpoint/revision/milestone nodes
// have no such outside record, so those still read pathNodeStatus.
export function isPathNodeDone(node, pathNodeStatus, completed) {
  if (node.type === 'lesson') return isLessonComplete(node.moduleId, node.lessonId, completed);
  return !!(pathNodeStatus[node.id] && pathNodeStatus[node.id].done);
}

// "Furthest reached" derived live rather than stored separately, so it can
// never drift out of sync with the actual completion record -- same idiom
// as firstUnpassedExerciseIndex in content/index.js. Because lesson nodes
// derive from `completed` (see isPathNodeDone), a learner who's raced ahead
// in a course's own page (e.g. finished most of Nahw while barely starting
// Sarf) sees every one of those already-done lesson nodes skipped for
// free the first time they open the path -- the boundary lands on
// whichever node ISN'T done yet (a Sarf lesson, in that example, or a
// checkpoint that can only ever be cleared through the path itself), with
// every node after that boundary still locked regardless of how much
// lesson content elsewhere is already finished.
export function firstUnfinishedPathNodeIndex(skeleton, pathNodeStatus, completed) {
  for (let i = 0; i < skeleton.length; i += 1) {
    const node = skeleton[i];
    if (!PATH_INTERACTIVE_TYPES.has(node.type)) continue;
    if (!isPathNodeDone(node, pathNodeStatus, completed)) return i;
  }
  return skeleton.length;
}

export function isPathNodeUnlocked(skeleton, pathNodeStatus, completed, index, forceUnlockAll = false) {
  if (forceUnlockAll) return true;
  return index <= firstUnfinishedPathNodeIndex(skeleton, pathNodeStatus, completed);
}

// A Group is unlocked once the PREVIOUS group's own capstone (groupTest) is
// passed -- Group 1 is always unlocked. `groups` is passed in rather than
// imported, same as skeleton above, so this file never needs to know
// content/path.js's exact shape beyond "a group has a groupTest".
export function isGroupUnlocked(groups, index, pathNodeStatus, completed, forceUnlockAll = false) {
  if (forceUnlockAll) return true;
  if (index === 0) return true;
  const prevGroup = groups[index - 1];
  if (!prevGroup || !prevGroup.groupTest) return false;
  return isPathNodeDone(prevGroup.groupTest, pathNodeStatus, completed);
}

// --- Mastery (app-wide, replaces the old streak-based Mastery Mode) ------
// vocab excluded -- it has its own 10-exposure rule on My Path instead.
function masteryV2SubPools(moduleId, lessonId) {
  const lesson = getLesson(moduleId, lessonId);
  if (!lesson) return { quizPool: [], bookPool: [], tarkeebPool: [] };
  const bankEntries = (lesson.bank || []).map((item, idx) => ({ item, idx }));
  const bookPool = bankEntries.filter(({ item }) => item.kind === 'mcq')
    .map(({ item, idx }) => ({
      key: bankKey(moduleId, lessonId, idx), moduleId, lessonId, lessonTitle: lesson.title, bankIndex: idx, title: item.title, item,
    }));
  const tarkeebPool = bankEntries.filter(({ item }) => item.kind === 'tarkeeb')
    .map(({ item, idx }) => ({
      key: bankKey(moduleId, lessonId, idx), moduleId, lessonId, lessonTitle: lesson.title, bankIndex: idx, title: item.title, item,
    }));
  const quizPool = (lesson.quiz || []).map((q, idx) => ({
    key: quizKey(moduleId, lessonId, idx), moduleId, lessonId, lessonTitle: lesson.title, title: lesson.title,
    item: { kind: 'mcq', prompt: q.q, options: q.options, correct: q.correct, explanation: q.explanation },
  }));
  return { quizPool, bookPool, tarkeebPool };
}

// The full lookup pool for an in-progress Mastery session (bankPool()/
// findBankItem in js/main.js, practiceHtml in js/render.js) -- always every
// available candidate, regardless of how many buildMasteryV2Queue actually
// samples, so every key the sampled queue contains still resolves.
export function masteryV2Pool(moduleId, lessonId) {
  const { quizPool, bookPool, tarkeebPool } = masteryV2SubPools(moduleId, lessonId);
  return [...quizPool, ...bookPool, ...tarkeebPool];
}

const MASTERY_QUIZ_TARGET = 10;
const MASTERY_BOOK_TARGET = 10;
const MASTERY_TARKEEB_TARGET = 10;

// 30 questions -- 20 mcq (10 lesson-content quiz + 10 book-exercise, the
// same equal-split idea as My Path's own mcqCheckpoint) + 10 تركيب, each
// portion capped by whatever's actually in the lesson (many lessons/courses
// have no تركيب at all -- e.g. any Sarf lesson, see moduleHasTarkeeb's own
// comment in content/index.js -- so Mastery there is simply 20 mcq). Plain
// shuffle, no weighting: a 100%-required test doesn't favor "due" cards the
// way spaced-repetition sampling does, it just needs a representative slice.
export function buildMasteryV2Queue(moduleId, lessonId) {
  const { quizPool, bookPool, tarkeebPool } = masteryV2SubPools(moduleId, lessonId);
  const quizKeys = shuffle(quizPool).slice(0, MASTERY_QUIZ_TARGET).map((e) => e.key);
  const bookKeys = shuffle(bookPool).slice(0, MASTERY_BOOK_TARGET).map((e) => e.key);
  const tarkeebKeys = shuffle(tarkeebPool).slice(0, MASTERY_TARKEEB_TARGET).map((e) => e.key);
  return shuffle([...quizKeys, ...bookKeys, ...tarkeebKeys]);
}

export function masteryKey(moduleId, lessonId) {
  return `${moduleId}_${lessonId}`;
}

// The pass ratio a given practice session must clear. Every Mastery variant
// (lesson Mastery, or a checkpoint/section-test's own Mastery attempt) needs
// a perfect run; the section test needs its own node.passRatio (80% by
// default); every other My Path checkpoint (mcq/vocab/تركيب/revision) needs
// 70%. Ordinary module Practice Mode and the Schedule tab's Revision Mode
// aren't graded at all (they have no pass/fail concept), so this only
// applies to 'masteryV2' and 'path' sessions -- see gradedSessionInfo's
// caller in js/main.js.
export function pathCheckpointPassRatio(node, mastery) {
  if (mastery) return 1;
  if (node.type === 'sectionTest' || node.type === 'groupTest') return node.passRatio;
  return 0.7;
}

// Whether a graded session `p` can still clear `passRatio` given how many
// questions remain in its queue -- once false, no remaining answer (even
// all correct) can change the outcome. Shared by js/main.js (which acts on
// it -- see nextPracticeQuestion's `doomed` check) and js/render.js (which
// only uses it to decide a button label -- see practiceHtml's own `doomed`
// comment) so both agree on the exact same condition.
export function stillPassable(p, passRatio) {
  const total = p.queue.length;
  const correct = p.log.filter((l) => l.correct).length;
  const remaining = total - p.log.length;
  return (correct + remaining) / total >= passRatio - 1e-9;
}

// Skip-ahead unlock tests (module-jump; course/path pools remain only for
// legacy lookup of already-running sessions):
// req: "a mix of lesson and book exercises" as well as "a mix of tarkeeb and
// mcqs, or mcqs only if there are no tarkeeb questions" (a course like Sarf
// has no تركيب at all, see moduleHasTarkeeb's comment in content/index.js) --
// so an even three-way split of lesson-content quiz / book-exercise mcq /
// تركيب, same target-per-portion idiom as buildMasteryV2Queue and
// buildModuleRevisionQueue (10/10/10 of a 30-length session), each portion
// capped by whatever's actually in its sub-pool and any shortfall backfilled
// from whichever of the three has more left, so a pool with no تركيب still
// fills out to `length` from quiz+book alone. Plain shuffle, no weighting:
// like Mastery/Revision, this is a one-off test over content the learner
// hasn't necessarily practiced yet, not a spaced-repetition sample.
export function buildUnlockTestQueue(subPools, length) {
  const { quizPool, bookPool, tarkeebPool } = subPools;
  const third = Math.round(length / 3);
  const quizKeys = shuffle(quizPool).slice(0, third).map((e) => e.key);
  const bookKeys = shuffle(bookPool).slice(0, third).map((e) => e.key);
  const tarkeebKeys = shuffle(tarkeebPool).slice(0, length - quizKeys.length - bookKeys.length).map((e) => e.key);
  let keys = quizKeys.concat(bookKeys, tarkeebKeys);
  if (keys.length < length) {
    const used = new Set(keys);
    const rest = quizPool.concat(bookPool, tarkeebPool).filter((e) => !used.has(e.key));
    keys = keys.concat(shuffle(rest).slice(0, length - keys.length).map((e) => e.key));
  }
  return shuffle(keys);
}

// --- Literature: workshop and build queues --------------------------------
// Both are built once, when the reader crosses into that stage, and then
// carried on state.lit -- never rebuilt per render (same rule as every pool
// above). Neither is weighted or spaced: a chapter is read once through, so
// there is no history to lean on, only what this chapter contains and which
// of its words the learner has just marked as unknown.

// One shuffled display order per question, generated with the queue rather
// than on every render, so answering doesn't reshuffle the chips underneath
// the cursor -- the same reasoning as shuffleQuizOrder above.
function withOptionOrder(item) {
  return { ...item, order: shuffle(item.options.map((_, i) => i)) };
}

// A chapter's workshop is a BANK, not a fixed set: each visit draws a fresh
// sample, so re-reading a chapter doesn't re-ask the same questions in the
// same order.
export const LIT_WORKSHOP_LENGTH = 8;

// --- Generated workshop questions ------------------------------------------
// Everything below is derived from the chapter's own tokens: which ending a
// word takes, whether a verb is ماضٍ or مضارع, whether a noun is singular or
// plural, which preposition the passage used. Nothing is invented -- each
// answer is read straight off the token's `features`/`pos`, and each question
// is about a word the learner just read in context. That is what lets every
// chapter ask a varied set without any of it being authored per chapter.

// Words whose grammar is worth asking about: analysed, and not a name.
function taggedTokens(chapter, predicate) {
  return chapterSentences(chapter).flatMap((sentence) => sentence.tokens
    .map((token, index) => ({ sentence, token, index, key: `${sentence.id}:${index}` }))
    .filter(({ token }) => token.pos !== 'proper' && predicate(token)));
}

const has = (token, atom) => new RegExp(`(^|[.+])${atom}([.+]|$)`).test(token.features || '');

// The sentence with one word cut out of it, for a fill-the-blank question.
function frameAround(sentence, index) {
  const words = sentence.tokens.map((t) => t.surface);
  return { pre: words.slice(0, index).join(' '), post: words.slice(index + 1).join(' ') };
}

// A "name this form" question: the whole sentence for context, the word named
// in the task line, and grammatical terms as the choices.
function classifyItem({ sentence, token, key }, kicker, task, options, answer, rationales) {
  return {
    type: 'grammar', key, kicker, task, base: sentence.ar, pre: '', post: '', options, answer, rationales,
  };
}

function buildLitGeneratedPools(chapter) {
  const pools = {};

  // Which ending? -- the same إعراب contrast the build stage's decoys use,
  // asked directly, with all three cases side by side.
  pools.ending = taggedTokens(chapter, (t) => t.pos !== 'verb' && hasCaseMark(t.surface, t))
    .map(({ sentence, token, index, key }) => {
      const forms = caseForms(token.surface, token);
      if (!forms) return null;
      const options = [forms.nom, forms.acc, forms.gen];
      if (new Set(options).size < 3) return null;
      const answer = options.indexOf(token.surface);
      if (answer === -1) return null;
      return {
        type: 'ending',
        key,
        sentenceId: sentence.id,
        kicker: 'Which ending?',
        task: 'Which ending does the missing word take here?',
        en: sentence.en,
        ...frameAround(sentence, index),
        options,
        answer,
        rationales: options.map((option, i) => (i === answer
          ? `${token.surface} ${caseNote(token.surface, token.pos)}`
          : `That is the ${caseLabel(option)} form — not what this position calls for.`)),
      };
    })
    .filter(Boolean);

  // Past or present?
  const TENSES = [['perf', 'مَاضٍ'], ['impf', 'مُضَارِع'], ['imp', 'أَمْر']];
  pools.tense = taggedTokens(chapter, (t) => t.pos === 'verb' && TENSES.some(([a]) => has(t, a)))
    .map((spot) => {
      const answer = TENSES.findIndex(([atom]) => has(spot.token, atom));
      return classifyItem(spot, 'Past or present?',
        `Is "${spot.token.surface}" past (مَاضٍ), present (مُضَارِع), or a command (أَمْر)?`,
        TENSES.map(([, label]) => label), answer,
        ['A completed action — the ماضي carries its subject as a suffix.',
          'An action going on or still to come — the مضارع takes a prefix أ/ي/ت/ن.',
          'A command, addressed to someone.']);
    });

  // Singular, dual or plural?
  const NUMBERS = [['sg', 'مُفْرَد'], ['du', 'مُثَنًّى'], ['pl', 'جَمْع']];
  pools.number = taggedTokens(chapter, (t) => (t.pos === 'noun' || t.pos === 'adj')
    && (has(t, 'nom') || has(t, 'acc') || has(t, 'gen')))
    .map((spot) => {
      const answer = has(spot.token, 'pl') ? 2 : has(spot.token, 'du') ? 1 : 0;
      return classifyItem(spot, 'How many?',
        `Is "${spot.token.surface}" singular, dual, or plural?`,
        NUMBERS.map(([, label]) => label), answer,
        ['One of them.', 'Exactly two — the مثنى ends in ـَانِ or ـَيْنِ.', 'Three or more.']);
    });

  // Definite or indefinite?
  pools.definite = taggedTokens(chapter, (t) => has(t, 'def') || has(t, 'indef'))
    .map((spot) => classifyItem(spot, 'Definite or indefinite?',
      `Is "${spot.token.surface}" definite (مَعْرِفَة) or indefinite (نَكِرَة)?`,
      ['مَعْرِفَة', 'نَكِرَة'], has(spot.token, 'def') ? 0 : 1,
      ['Definite — carrying الـ, or made definite by what follows it.',
        'Indefinite — the tanwin at its end is the mark of it.']));

  // What case, by name -- the other half of the ending question.
  const CASES = [['nom', 'مَرْفُوع'], ['acc', 'مَنْصُوب'], ['gen', 'مَجْرُور']];
  pools.case = taggedTokens(chapter, (t) => t.pos !== 'verb' && CASES.some(([a]) => has(t, a)))
    .map((spot) => {
      const answer = CASES.findIndex(([atom]) => has(spot.token, atom));
      return classifyItem(spot, 'What case?',
        `What case is "${spot.token.surface}" in here?`,
        CASES.map(([, label]) => label), answer,
        ['The subject, or the predicate of a nominal sentence.',
          'An object, or an adverbial complement.',
          'After a preposition, or as the second term of an إضافة.']);
    });

  // Which preposition? -- only standalone ones, so the frame stays intact.
  const PREPS = ['فِي', 'إِلَى', 'مِنْ', 'عَلَى', 'مَعَ', 'عَنْ', 'حَتَّى'];
  pools.preposition = taggedTokens(chapter, (t) => t.pos === 'prep' && PREPS.includes(t.surface))
    .map(({ sentence, token, index, key }) => {
      const others = shuffle(PREPS.filter((p) => p !== token.surface)).slice(0, 2);
      return {
        type: 'grammar',
        key,
        kicker: 'Which preposition?',
        task: 'Which preposition does the passage use here?',
        en: sentence.en,
        ...frameAround(sentence, index),
        options: [token.surface, ...others],
        answer: 0,
        rationales: [`The passage reads ${token.surface} — ${token.gloss || 'that is the one it uses'}.`, '', ''],
      };
    });

  return pools;
}

// Four pattern drills (fill the missing word in a frame the chapter used
// repeatedly), then four form shifts (take one of those verbs somewhere else
// on the paradigm). Sampled separately and kept in that order, never mixed:
// the shift questions assume the frame is already familiar. A chapter with
// fewer than four of one kind tops the shortfall up from the other rather
// than running a shorter workshop.
// Takes `count` items from an already-shuffled pool, preferring one per
// distinct key before allowing a repeat. A bank holds several questions on
// the same sentence -- five ways to shift أَذْهَبُ إِلَى السُّوقِ, say -- and while
// those are genuinely different questions, meeting two of them inside one
// eight-question workshop reads as the drill repeating itself.
function pickVaried(pool, count, keyOf) {
  const seen = new Set();
  const distinct = [];
  const duplicates = [];
  pool.forEach((item) => {
    const key = keyOf(item);
    if (seen.has(key)) duplicates.push(item);
    else {
      seen.add(key);
      distinct.push(item);
    }
  });
  return [...distinct, ...duplicates].slice(0, count);
}

// Eight questions spread across every kind the chapter can offer -- the
// authored frames and transformations, plus the generated ending, tense,
// number, definiteness, case, word-class and preposition questions. Taken
// round-robin, one kind at a time, so no kind can dominate a sitting and a
// thin authored bank no longer means a thin workshop; each kind's own pool is
// shuffled first, so which questions turn up changes every reading.
export function buildLitWorkshopQueue(chapter) {
  const workshop = chapter.workshop || {};
  const generated = buildLitGeneratedPools(chapter);
  // Authored questions come from the chapter's own text and are worth more
  // than a derived one, so their pools lead the rotation.
  const pools = [
    shuffle(workshop.cloze || []),
    shuffle(workshop.shift || []),
    ...shuffle(Object.values(generated)).map((pool) => shuffle(pool)),
  ].filter((pool) => pool.length);

  // A question is "the same" as one already asked if it is built on the same
  // frame, the same base sentence, or the same word -- being asked twice
  // about مُبَكِّراً in one sitting reads as the drill repeating itself, even
  // when the two questions are about different things.
  const keyOf = (q) => q.key || q.base || `${q.pre}|${q.post}`;
  const queue = [];
  const seen = new Set();
  for (let round = 0; queue.length < LIT_WORKSHOP_LENGTH && round < 12; round += 1) {
    let tookAny = false;
    for (const pool of pools) {
      if (queue.length >= LIT_WORKSHOP_LENGTH) break;
      const next = pool.find((q) => !seen.has(keyOf(q)));
      if (!next) continue;
      seen.add(keyOf(next));
      pool.splice(pool.indexOf(next), 1);
      queue.push(next);
      tookAny = true;
    }
    if (!tookAny) break;
  }
  return queue.map(withOptionOrder);
}

const LIT_BUILD_DISTRACTORS = 6;
const LIT_BUILD_FILLER_DISTRACTORS = 5;

// The chips for one sentence: its own words, plus up to LIT_BUILD_DISTRACTORS
// of those words again with the ending moved one case along (see
// caseVariant). Choosing between اللَّيْلِ and اللَّيْلُ is the actual
// question -- word order alone would be too easy in a sentence this short.
function makeLitBuildItem(sentence, otherSurfaces) {
  const solution = sentence.tokens.map((t) => t.surface);
  const taken = new Set(solution);
  const chips = solution.map((surface) => ({ surface, correct: true }));

  shuffle(sentence.tokens.filter((t) => t.pos !== 'proper' && hasCaseMark(t.surface, t)))
    .forEach((t) => {
      if (chips.length - solution.length >= LIT_BUILD_DISTRACTORS) return;
      const variant = caseVariant(t.surface, t);
      if (!variant || taken.has(variant)) return;
      taken.add(variant);
      chips.push({ surface: variant, correct: false, note: `${t.surface} ${caseNote(t.surface, t.pos)}` });
    });

  // A sentence whose words all end in a long vowel or a defective ending has
  // no case marks to move, so fall back to words from elsewhere in the
  // chapter rather than offering the answer with no decoys at all.
  shuffle(otherSurfaces).forEach((surface) => {
    if (chips.length - solution.length >= LIT_BUILD_FILLER_DISTRACTORS || taken.has(surface)) return;
    taken.add(surface);
    chips.push({ surface, correct: false, note: 'belongs to a different sentence in this chapter.' });
  });

  return {
    sentenceId: sentence.id,
    // Clause glosses carry the punctuation that joined them to the next
    // clause ("…, " / "… —"); as a standalone prompt the sentence should
    // just end.
    en: sentence.en.replace(/\s*[,;—–-]\s*$/, '.').replace(/\.\.$/, '.'),
    ar: sentence.ar,
    solution,
    chips: shuffle(chips),
  };
}

// Req: 5-10 sentences, drawn from the ones carrying a word the learner
// marked unknown while reading; where those don't reach the minimum, topped
// up from sentences carrying this chapter's newly taught vocabulary, and
// only then from anything else eligible. So a learner who marked nothing
// still gets a full build stage, over the words the chapter was teaching.
export function buildLitBuildQueue(chapter, litUnknown, bookId) {
  const eligible = chapterSentences(chapter).filter(isBuildEligible);
  const unknown = eligible.filter((s) => sentenceHasUnknown(s, litUnknown, bookId));
  const unknownIds = new Set(unknown.map((s) => s.id));
  const fresh = eligible.filter((s) => !unknownIds.has(s.id) && sentenceHasNewWord(s, chapter));
  const freshIds = new Set(fresh.map((s) => s.id));
  const rest = eligible.filter((s) => !unknownIds.has(s.id) && !freshIds.has(s.id));

  const target = Math.min(LIT_BUILD_MAX, Math.max(LIT_BUILD_MIN, unknown.length));
  const picked = shuffle(unknown).slice(0, target);
  [fresh, rest].forEach((pool) => {
    if (picked.length >= target) return;
    picked.push(...shuffle(pool).slice(0, target - picked.length));
  });

  const allSurfaces = eligible.flatMap((s) => s.tokens.map((t) => t.surface));
  return picked.map((s) => makeLitBuildItem(s, allSurfaces));
}

// --- Literature: "Practice weak words" (book-wide, not chapter-scoped) ---
// Reuses the build stage's own item shape (makeLitBuildItem) and chip tray,
// just sourced from every chapter in a book rather than one, and picked by
// LEMMA (one target unknown word per drill) rather than by sentence -- see
// js/main.js's openLitWordPractice for how candidatesByLemma is assembled
// (it needs every chapter loaded first, which only an action handler can
// await; this file stays synchronous like the rest of state.js).

// A word retires (drops out of litUnknown AND litWordReps entirely -- see
// bumpLitWordRep in js/main.js) once answered correctly this many times in
// this mode specifically; unlike vocabExposure's `learned` flag, there is no
// lower/earlier bar shared with another mode to worry about re-triggering.
export const LIT_WORD_RETIRE_COUNT = 10;
// No forced minimum: a book with only 2 unknown words just gets a 2-item
// session rather than padding with words the learner already knows.
const LIT_PRACTICE_MAX = 12;
// Same 3-unseen : 7-seen lean as Revision Vocab's own REVISION_VOCAB_UNSEEN_RATIO
// just above -- mostly resurface words already in progress (so they actually
// reach the retire bar), while still trickling in words never drilled here.
const LIT_PRACTICE_UNSEEN_RATIO = 0.3;

// Same "closer to the line -> higher priority" shape as seenPriorityWeight/
// revisionSeenPriorityWeight above: a word 8 reps into a 10-rep bar is
// picked far more often than one just starting out, so it actually crosses
// the line instead of being diluted among an ever-growing pool.
function litWordSeenPriorityWeight(lemma, reps) {
  const rec = reps[lemma];
  const remaining = Math.max(1, LIT_WORD_RETIRE_COUNT - (rec ? rec.count : 0));
  return 100 / remaining;
}

function pickLitWordLemmas(lemmas, count, reps) {
  if (count <= 0) return [];
  const seen = lemmas.filter((l) => reps[l]);
  const unseen = lemmas.filter((l) => !reps[l]);
  const unseenCount = Math.min(Math.round(count * LIT_PRACTICE_UNSEEN_RATIO), unseen.length);
  let picked = shuffle(unseen).slice(0, unseenCount);
  const seenCount = Math.min(count - picked.length, seen.length);
  picked = picked.concat(weightedSample(seen.map((l) => ({ key: l })), seenCount, (e) => litWordSeenPriorityWeight(e.key, reps)));
  if (picked.length < count) {
    const used = new Set(picked);
    const rest = lemmas.filter((l) => !used.has(l));
    picked = picked.concat(shuffle(rest).slice(0, count - picked.length));
  }
  return picked;
}

// `candidatesByLemma` is a Map<lemma, sentence[]> (every isBuildEligible
// sentence anywhere in the book that contains a token of that lemma, each
// sentence tagged with its own chapterId -- see js/main.js). Only lemmas
// with at least one eligible sentence can appear here at all; a word the
// learner marked unknown but that only ever appears in an ineligible
// sentence (too short/long, no swappable ending) simply can't be drilled
// this way and is left out, same as it would be for the chapter build stage.
export function buildLitWordPracticeQueue(candidatesByLemma, litWordReps) {
  const lemmas = [...candidatesByLemma.keys()];
  const target = Math.min(LIT_PRACTICE_MAX, lemmas.length);
  const pickedLemmas = pickLitWordLemmas(lemmas, target, litWordReps);

  const allSurfaces = [...candidatesByLemma.values()].flat().flatMap((s) => s.tokens.map((t) => t.surface));
  return pickedLemmas.map((lemma) => {
    const sentences = candidatesByLemma.get(lemma);
    const rec = litWordReps[lemma];
    const seenIds = new Set((rec && rec.seenSentenceIds) || []);
    const sentence = sentences.find((s) => !seenIds.has(s.id)) || shuffle(sentences)[0];
    const item = makeLitBuildItem(sentence, allSurfaces);
    return { ...item, lemma, chapterId: sentence.chapterId };
  });
}

export function sidebarRows(state, MODULES, helpers) {
  const { isModuleUnlocked, completedCount } = helpers;
  return MODULES.map((m) => {
    const unlocked = isModuleUnlocked(m.id, state.completed, state.unlockedModules, state.forceUnlockAll);
    const isActive = state.moduleId === m.id;
    const done = completedCount(m.id, state.completed);
    return {
      id: m.id,
      title: m.title,
      unlocked,
      isActive,
      locked: !unlocked,
      progressLabel: `${done}/${m.lessons.length}`,
    };
  });
}

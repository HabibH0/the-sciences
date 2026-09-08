import { loadProgress, saveProgress, preserveMigrationBackup, blockStorageWrites } from './storage/storageManager.js';
import { COURSE_SHELLS } from '../content/meta.js';
import { normalizeStudySessions, normalizeLogicProgress } from './learning/study.js';
import { normalizeLiterature } from './literature/engine.js';
import { normalizeReviewCards, normalizeReviewDayStats, normalizeReviewSettings } from './reviewScheduler.js';

export function isoDateAt(ts) {
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// The calendar day the app currently treats as "today", shifted back by
// resetHour hours first -- so with resetHour 4, a 1am session still counts
// as the previous day. resetHour is state.dailyResetHour (Schedule tab ->
// Daily reset time); callers that predate the setting, or run before state
// exists (bootProgress below), default to 0 (plain local midnight).
export function todayISO(resetHour = 0) {
  return isoDateAt(Date.now() - resetHour * 3600000);
}

function yesterdayISO(resetHour = 0) {
  return isoDateAt(Date.now() - resetHour * 3600000 - 86400000);
}

function normalizeResetHour(value) {
  const n = Number(value);
  return Number.isInteger(n) && n >= 0 && n <= 23 ? n : 0;
}

// scheduleDeadline used to be one flat value shared by every course's
// Schedule tab -- now it's a courseId -> value map so courses stop bleeding
// their deadline into each other. Old saves have the flat value; wrap it
// under whichever course was active when it was saved so an existing plan
// survives the upgrade instead of vanishing.
function migratePerCourse(saved, courseId) {
  if (saved == null) return {};
  if (typeof saved === 'object') return saved;
  return { [courseId]: saved };
}

// The course ids were renamed (they show up in URLs and exports):
// fstu -> intro-nahw, sarf -> intro-sarf, annahw -> adv-nahw,
// sarf-advanced -> adv-sarf. Saves from before the rename still carry the
// old ids in courseId, unlockedCourses and scheduleDeadline; module/lesson/
// node ids never embedded a course id, so everything else is untouched.
const LEGACY_COURSE_IDS = {
  fstu: 'intro-nahw',
  sarf: 'intro-sarf',
  annahw: 'adv-nahw',
  'sarf-advanced': 'adv-sarf',
};

export function migrateCourseId(id) {
  return LEGACY_COURSE_IDS[id] || id;
}

function migrateCourseKeys(map) {
  if (!map || typeof map !== 'object') return {};
  const out = {};
  for (const [key, value] of Object.entries(map)) out[migrateCourseId(key)] = value;
  return out;
}

function normalizeScale(value, min, max) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 100;
  return Math.min(max, Math.max(min, Math.round(n)));
}

function normalizeLessonTextScale(value) {
  return normalizeScale(value, 85, 130);
}

// The reader's own scale, separate from the lesson one and with more room at
// the top: a page of vowelled prose is read at a very different size from a
// lesson's worked examples.
export const LIT_TEXT_SCALE_MIN = 80;
export const LIT_TEXT_SCALE_MAX = 160;

export function normalizeLitTextScale(value) {
  return normalizeScale(value, LIT_TEXT_SCALE_MIN, LIT_TEXT_SCALE_MAX);
}

// The general display scale (nav, buttons, headings, page copy) -- separate
// from the lesson and reading scales above, which only affect their own
// content areas.
export const UI_TEXT_SCALE_MIN = 85;
export const UI_TEXT_SCALE_MAX = 130;

export function normalizeUiTextScale(value) {
  return normalizeScale(value, UI_TEXT_SCALE_MIN, UI_TEXT_SCALE_MAX);
}

function normalizeArabicFace(value) {
  if (value === 'uthmani') return 'amiri';
  return ['traditional', 'naskh', 'amiri', 'scheherazade', 'lateef'].includes(value) ? value : 'traditional';
}

function normalizeArabicHeadingFace(saved) {
  if (['body', 'kufi', 'aref'].includes(saved.arabicHeadingFace)) return saved.arabicHeadingFace;
  return saved.kufiHeadings ? 'kufi' : 'body';
}

function isEmptyProgress(progress) {
  return !progress || typeof progress !== 'object' || Object.keys(progress).length === 0;
}

function defaultForceUnlockAll(saved) {
  if (typeof saved.forceUnlockAll === 'boolean') return saved.forceUnlockAll;
  return false;
}

function defaultForceUnlockAllExplicit(saved) {
  if (typeof saved.forceUnlockAllExplicit === 'boolean') return saved.forceUnlockAllExplicit;
  return typeof saved.forceUnlockAll === 'boolean';
}

export async function loadRaw() {
  return loadProgress();
}

export async function saveRaw(data) {
  return saveProgress(data);
}

// Called once on boot. Returns the full initial state fragment, applying the
// streak algorithm: +1 on a consecutive calendar day, reset to 1 on a gap,
// unchanged on a same-day revisit.
export async function bootProgress() {
  let saved = {}, storageError = '';
  try {
    saved = await loadRaw();
    if (!saved.mizanVersion) preserveMigrationBackup();
  } catch {
    blockStorageWrites();
    storageError = 'Your original save could not be backed up. It has been protected. Download it before freeing browser storage, then retry saving.';
  }
  const dailyResetHour = normalizeResetHour(saved.dailyResetHour);
  const today = todayISO(dailyResetHour);
  const yesterday = yesterdayISO(dailyResetHour);

  let streak = saved.streak || 1;
  if (saved.lastVisit === today) {
    streak = saved.streak || 1;
  } else if (saved.lastVisit === yesterday) {
    streak = (saved.streak || 1) + 1;
  } else if (saved.lastVisit) {
    streak = 1;
  }

  const savedCourseId = migrateCourseId(saved.courseId);
  const courseId = COURSE_SHELLS.some(c => c.id === savedCourseId) ? savedCourseId : 'mantiq';
  for (const key of ['completed', 'completedAt', 'moduleResetAt', 'quizScores', 'exStates', 'lessonPos', 'revealState', 'practiceHistory', 'pathNodeStatus', 'pathReps', 'vocabExposure', 'pathCheckpointMastery', 'masteryV2', 'litProgress', 'litUnknown', 'litWordReps', 'unlockedTracks', 'unlockedModules']) {
    if (!saved[key] || typeof saved[key] !== 'object' || Array.isArray(saved[key])) saved[key] = {};
  }
  if (!Array.isArray(saved.badges)) saved.badges = [];
  const arabicHeadingFace = normalizeArabicHeadingFace(saved);
  const next = {
    mizanVersion: 1,
    literature: normalizeLiterature(saved.literature),
    studySessions: normalizeStudySessions(saved.studySessions),
    mizanCourses: normalizeLogicProgress(saved.mizanCourses),
    quizSession: saved.quizSession || null,
    courseId,
    completed: saved.completed || {},
    completedAt: saved.completedAt || {},
    moduleResetAt: saved.moduleResetAt || {},
    quizScores: saved.quizScores || {},
    exStates: saved.exStates || {},
    lessonPos: saved.lessonPos || {},
    revealState: saved.revealState || {},
    practiceHistory: saved.practiceHistory || {},
    scheduleDeadline: migrateCourseKeys(migratePerCourse(saved.scheduleDeadline, courseId)),
    dailyResetHour,
    pathNodeStatus: saved.pathNodeStatus || {},
    pathReps: saved.pathReps || {},
    vocabExposure: saved.vocabExposure || {},
    pathCheckpointMastery: saved.pathCheckpointMastery || {},
    masteryV2: saved.masteryV2 || {},
    // Review engine (js/reviewScheduler.js): per-card scheduler records,
    // bounded per-day counters, and the learner's review settings. Old
    // saves have none of these -- default to empty/defaults without
    // throwing, and clamp anything malformed a sync could have carried in.
    reviewCards: normalizeReviewCards(saved.reviewCards),
    reviewDayStats: normalizeReviewDayStats(saved.reviewDayStats, Date.now(), dailyResetHour),
    reviewSettings: normalizeReviewSettings(saved.reviewSettings),
    // Literature (content-lit/): chapter progress, and the words marked
    // unknown while reading. Absent from every save written before the
    // Library existed, hence the usual default-don't-throw treatment.
    litProgress: saved.litProgress || {},
    litUnknown: saved.litUnknown || {},
    litWordReps: saved.litWordReps || {},
    litCheckLang: saved.litCheckLang === 'en' ? 'en' : 'ar',
    litTextScale: normalizeLitTextScale(saved.litTextScale),
    uiTextScale: normalizeUiTextScale(saved.uiTextScale),
    litHoverTranslate: saved.litHoverTranslate !== false,
    streak,
    lastVisit: today,
    // Every day the app was opened, oldest first, capped to a rolling window
    // comfortably beyond the four weeks the Account streak calendar shows.
    // The streak number above counts consecutive visits; without this list
    // the calendar could only show lesson-completion days, so a streak
    // sustained by practice or reading rendered as an empty grid that
    // contradicted its own headline (the calendar unions both -- see
    // accountHtml in js/render.js).
    visitDays: (() => {
      const prev = Array.isArray(saved.visitDays) ? saved.visitDays : [];
      const withToday = prev.includes(today) ? prev : [...prev, today];
      return withToday.slice(-60);
    })(),
    xp: saved.xp || 0,
    badges: saved.badges || [],
    // Lifetime count of correctly-answered practice drills (module Practice
    // Mode, Revision, My Path checkpoints/revision) -- unlike state.practice
    // (one session's transient log), this survives across sessions for the
    // Practice Volume badge ladder (see gamification.js's checkPracticeVolumeBadges).
    practiceCorrectTotal: saved.practiceCorrectTotal || 0,
    theme: saved.mizanVersion ? saved.theme || 'mizan' : 'mizan',
    accent: saved.mizanVersion ? saved.accent || 'emerald' : 'emerald',
    arabicFace: normalizeArabicFace(saved.mizanVersion ? saved.arabicFace : 'traditional'),
    arabicHeadingFace,
    lessonTextScale: normalizeLessonTextScale(saved.lessonTextScale),
    tarkeebTranslations: saved.tarkeebTranslations !== false,
    tarkeebLabelsBlue: saved.tarkeebLabelsBlue !== false,
    forceUnlockAll: defaultForceUnlockAll(saved),
    forceUnlockAllExplicit: defaultForceUnlockAllExplicit(saved),
    kufiHeadings: arabicHeadingFace === 'kufi',
    unlockedCourses: migrateCourseKeys(saved.unlockedCourses),
    unlockedTracks: saved.unlockedTracks || {},
    unlockedModules: saved.unlockedModules || {},
    nav: saved.nav || null,
  };
  if (!storageError) {
    try { await saveRaw(next); }
    catch { storageError = 'Progress could not be saved on this device. Download your progress, free browser storage, and retry saving.'; }
  }
  return { ...next, storageError };
}

let pendingTimer = null;
let pendingState = null;

export function persistSoon(state, delay = 400) {
  pendingState = state;
  if (pendingTimer) return;
  pendingTimer = setTimeout(() => {
    pendingTimer = null;
    const s = pendingState;
    pendingState = null;
    if (s) persist(s).catch(() => {});
  }, delay);
}

export function flushPersist() {
  if (pendingTimer) {
    clearTimeout(pendingTimer);
    pendingTimer = null;
  }
  if (pendingState) {
    const s = pendingState;
    pendingState = null;
    return persist(s);
  }
  return Promise.resolve();
}

export function cancelPendingPersist() {
  if (pendingTimer) {
    clearTimeout(pendingTimer);
    pendingTimer = null;
  }
  pendingState = null;
}

export function snapshot(state) {
  return {
    mizanVersion: 1,
    studySessions: state.studySessions || {},
    mizanCourses: state.mizanCourses || {},
    quizSession: state.view === 'quiz' ? {
      moduleId: state.moduleId, lessonId: state.lessonId,
      quizIndex: state.quizIndex, quizSelected: state.quizSelected,
      quizRevealed: state.quizRevealed, quizAnswers: state.quizAnswers,
      quizShowResult: state.quizShowResult, quizPassed: state.quizPassed,
      quizOptionOrder: state.quizOptionOrder,
      quizCorrection: state.quizCorrection || null,
    } : state.quizSession || null,
    courseId: state.courseId,
    completed: state.completed,
    completedAt: state.completedAt,
    moduleResetAt: state.moduleResetAt,
    quizScores: state.quizScores,
    exStates: state.exStates,
    lessonPos: state.lessonPos,
    revealState: state.revealState,
    practiceHistory: state.practiceHistory,
    scheduleDeadline: state.scheduleDeadline,
    dailyResetHour: state.dailyResetHour,
    pathNodeStatus: state.pathNodeStatus,
    pathReps: state.pathReps,
    vocabExposure: state.vocabExposure,
    pathCheckpointMastery: state.pathCheckpointMastery,
    masteryV2: state.masteryV2,
    reviewCards: state.reviewCards || {},
    reviewDayStats: normalizeReviewDayStats(state.reviewDayStats, Date.now(), state.dailyResetHour || 0),
    reviewSettings: normalizeReviewSettings(state.reviewSettings),
    litProgress: state.litProgress,
    literature: normalizeLiterature(state.literature),
    litUnknown: state.litUnknown,
    litWordReps: state.litWordReps,
    litCheckLang: state.litCheckLang === 'en' ? 'en' : 'ar',
    litTextScale: normalizeLitTextScale(state.litTextScale),
    uiTextScale: normalizeUiTextScale(state.uiTextScale),
    litHoverTranslate: state.litHoverTranslate !== false,
    streak: state.streak,
    lastVisit: state.lastVisit,
    visitDays: Array.isArray(state.visitDays) ? state.visitDays : [],
    xp: state.xp,
    badges: state.badges,
    practiceCorrectTotal: state.practiceCorrectTotal,
    theme: state.theme,
    accent: state.accent,
    arabicFace: state.arabicFace,
    arabicHeadingFace: state.arabicHeadingFace || (state.kufiHeadings ? 'kufi' : 'body'),
    lessonTextScale: normalizeLessonTextScale(state.lessonTextScale),
    tarkeebTranslations: state.tarkeebTranslations !== false,
    tarkeebLabelsBlue: state.tarkeebLabelsBlue === true,
    forceUnlockAll: state.forceUnlockAll === true,
    forceUnlockAllExplicit: state.forceUnlockAllExplicit === true,
    kufiHeadings: (state.arabicHeadingFace || (state.kufiHeadings ? 'kufi' : 'body')) === 'kufi',
    unlockedCourses: state.unlockedCourses,
    unlockedTracks: state.unlockedTracks,
    unlockedModules: state.unlockedModules,
    nav: {
      view: state.view,
      moduleId: state.moduleId,
      lessonId: state.lessonId,
      practiceModuleId: state.practiceModuleId,
      pathGroupId: state.pathGroupId,
      litBookId: state.litBookId,
      litChapterId: state.litChapterId,
      literatureLessonId: state.literatureLessonId,
    },
  };
}

export async function persist(state) {
  try {
    const result = await saveRaw(snapshot(state));
    state.storageError = '';
    globalThis.document?.dispatchEvent(new Event('mizan:storage-status'));
    return result;
  } catch (error) {
    state.storageError = 'Progress could not be saved on this device. Download your progress, free browser storage, and retry saving.';
    globalThis.document?.dispatchEvent(new Event('mizan:storage-status'));
    throw error;
  }
}

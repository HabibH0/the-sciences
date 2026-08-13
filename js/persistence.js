import { loadProgress, saveProgress } from './storage/storageManager.js';

function isoDateAt(ts) {
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

function normalizeArabicFace(value) {
  if (value === 'uthmani') return 'amiri';
  return ['naskh', 'amiri', 'scheherazade', 'lateef'].includes(value) ? value : 'naskh';
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
  return isEmptyProgress(saved);
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
  const saved = await loadRaw();
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

  const courseId = saved.courseId || 'annahw';
  const arabicHeadingFace = normalizeArabicHeadingFace(saved);
  const next = {
    courseId,
    completed: saved.completed || {},
    quizScores: saved.quizScores || {},
    exStates: saved.exStates || {},
    lessonPos: saved.lessonPos || {},
    revealState: saved.revealState || {},
    practiceHistory: saved.practiceHistory || {},
    scheduleDeadline: migratePerCourse(saved.scheduleDeadline, courseId),
    dailyResetHour,
    pathNodeStatus: saved.pathNodeStatus || {},
    pathReps: saved.pathReps || {},
    vocabExposure: saved.vocabExposure || {},
    pathCheckpointMastery: saved.pathCheckpointMastery || {},
    masteryV2: saved.masteryV2 || {},
    // Literature (content-lit/): chapter progress, and the words marked
    // unknown while reading. Absent from every save written before the
    // Library existed, hence the usual default-don't-throw treatment.
    litProgress: saved.litProgress || {},
    litUnknown: saved.litUnknown || {},
    litWordReps: saved.litWordReps || {},
    litCheckLang: saved.litCheckLang === 'en' ? 'en' : 'ar',
    litTextScale: normalizeLitTextScale(saved.litTextScale),
    litHoverTranslate: saved.litHoverTranslate !== false,
    streak,
    lastVisit: today,
    xp: saved.xp || 0,
    badges: saved.badges || [],
    // Lifetime count of correctly-answered practice drills (module Practice
    // Mode, Revision, My Path checkpoints/revision) -- unlike state.practice
    // (one session's transient log), this survives across sessions for the
    // Practice Volume badge ladder (see gamification.js's checkPracticeVolumeBadges).
    practiceCorrectTotal: saved.practiceCorrectTotal || 0,
    theme: saved.theme || 'manuscript',
    accent: saved.accent || 'gold',
    arabicFace: normalizeArabicFace(saved.arabicFace),
    arabicHeadingFace,
    lessonTextScale: normalizeLessonTextScale(saved.lessonTextScale),
    tarkeebTranslations: saved.tarkeebTranslations !== false,
    tarkeebLabelsBlue: saved.tarkeebLabelsBlue !== false,
    forceUnlockAll: defaultForceUnlockAll(saved),
    forceUnlockAllExplicit: defaultForceUnlockAllExplicit(saved),
    kufiHeadings: arabicHeadingFace === 'kufi',
    unlockedCourses: saved.unlockedCourses || {},
    unlockedTracks: saved.unlockedTracks || {},
    unlockedModules: saved.unlockedModules || {},
    nav: saved.nav || null,
  };
  await saveRaw(next);
  return next;
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
    if (s) persist(s);
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

function snapshot(state) {
  return {
    courseId: state.courseId,
    completed: state.completed,
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
    litProgress: state.litProgress,
    litUnknown: state.litUnknown,
    litWordReps: state.litWordReps,
    litCheckLang: state.litCheckLang === 'en' ? 'en' : 'ar',
    litTextScale: normalizeLitTextScale(state.litTextScale),
    litHoverTranslate: state.litHoverTranslate !== false,
    streak: state.streak,
    lastVisit: state.lastVisit,
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
    },
  };
}

export function persist(state) {
  return saveRaw(snapshot(state));
}

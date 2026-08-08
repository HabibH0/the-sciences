import { loadProgress, saveProgress } from './storage/storageManager.js';

export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayISO() {
  return new Date(Date.now() - 86400000).toISOString().slice(0, 10);
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

function normalizeLessonTextScale(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 100;
  return Math.min(130, Math.max(85, Math.round(n)));
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
  const today = todayISO();
  const yesterday = yesterdayISO();

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
    pathNodeStatus: saved.pathNodeStatus || {},
    pathReps: saved.pathReps || {},
    vocabExposure: saved.vocabExposure || {},
    pathCheckpointMastery: saved.pathCheckpointMastery || {},
    masteryV2: saved.masteryV2 || {},
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
    pathNodeStatus: state.pathNodeStatus,
    pathReps: state.pathReps,
    vocabExposure: state.vocabExposure,
    pathCheckpointMastery: state.pathCheckpointMastery,
    masteryV2: state.masteryV2,
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
    },
  };
}

export function persist(state) {
  return saveRaw(snapshot(state));
}

// Real save file on disk, not localStorage -- this app runs as an Electron
// desktop app with nodeIntegration enabled (see main.cjs), so `require` is
// available even from this ES module.
let req;
if (typeof require !== 'undefined') {
  req = require;
} else {
  req = function (mod) {
    if (mod === 'fs') {
      return {
        existsSync: () => false,
        mkdirSync: () => {},
        copyFileSync: () => {},
        readFileSync: () => '{}',
        writeFileSync: () => {},
      };
    }
    if (mod === 'path') {
      return {
        join: (...args) => args.join('/'),
        dirname: (p) => p,
      };
    }
    if (mod === 'os') {
      return { homedir: () => '' };
    }
    if (mod === 'url') {
      return { fileURLToPath: (u) => u };
    }
    return {};
  };
}
const fs = req('fs');
const path = req('path');

// Lives in the OS's per-user app-data directory, not next to the app's own
// source/resources -- a packaged build's app folder gets fully replaced by
// `npm run package` (electron-packager --overwrite deletes and recreates
// dist/The Sciences-*), which would silently wipe a save file stored
// alongside it on every rebuild. The platform app-data dir survives that.
//
// Mirrors Electron's own `app.getPath('userData')` resolution rather than
// calling it directly: this module is required from the renderer (see the
// module comment above), and with nodeIntegration on but no @electron/remote
// package, `app` isn't reachable there -- only the main process has it.
function baseAppDataDir() {
  if (process.platform === 'win32') return process.env.APPDATA || req('os').homedir();
  if (process.platform === 'darwin') return path.join(req('os').homedir(), 'Library', 'Application Support');
  return process.env.XDG_CONFIG_HOME || path.join(req('os').homedir(), '.config');
}
const SAVE_DIR = path.join(baseAppDataDir(), 'The Sciences');
const SAVE_PATH = path.join(SAVE_DIR, 'save-data.json');

// One-time migration from the pre-APPDATA save location (the project
// root, when the app ran straight from source) so existing progress on
// this machine isn't orphaned by the move.
function migrateLegacySave() {
  if (fs.existsSync(SAVE_PATH)) return;
  const legacyPath = path.join(path.dirname(req('url').fileURLToPath(import.meta.url)), '..', 'save-data.json');
  if (!fs.existsSync(legacyPath)) return;
  fs.mkdirSync(SAVE_DIR, { recursive: true });
  fs.copyFileSync(legacyPath, SAVE_PATH);
}

// One-time migration from the old %APPDATA%\An-Nahw save location, from
// when the app was still named/packaged as "An-Nahw" -- same reasoning as
// migrateLegacySave above, just a later rename instead of the original
// pre-APPDATA move.
function migrateRenamedSave() {
  if (fs.existsSync(SAVE_PATH)) return;
  const oldDir = path.join(process.env.APPDATA || req('os').homedir(), 'An-Nahw');
  const oldPath = path.join(oldDir, 'save-data.json');
  if (!fs.existsSync(oldPath)) return;
  fs.mkdirSync(SAVE_DIR, { recursive: true });
  fs.copyFileSync(oldPath, SAVE_PATH);
}
fs.mkdirSync(SAVE_DIR, { recursive: true });
migrateRenamedSave();
migrateLegacySave();

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

export function loadRaw() {
  try {
    return JSON.parse(fs.readFileSync(SAVE_PATH, 'utf-8'));
  } catch (e) {
    return {};
  }
}

export function saveRaw(data) {
  fs.writeFileSync(SAVE_PATH, JSON.stringify(data, null, 2));
}

// Called once on boot. Returns the full initial state fragment, applying the
// streak algorithm: +1 on a consecutive calendar day, reset to 1 on a gap,
// unchanged on a same-day revisit.
export function bootProgress() {
  const saved = loadRaw();
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
    arabicFace: saved.arabicFace || 'naskh',
    kufiHeadings: saved.kufiHeadings || false,
    unlockedCourses: saved.unlockedCourses || {},
    unlockedTracks: saved.unlockedTracks || {},
    unlockedModules: saved.unlockedModules || {},
    nav: saved.nav || null,
  };
  saveRaw(next);
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
    persist(s);
  }
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
    kufiHeadings: state.kufiHeadings,
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
  saveRaw(snapshot(state));
}

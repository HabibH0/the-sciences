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

// Lives in %APPDATA%, not next to the app's own source/resources -- a
// packaged build's app folder gets fully replaced by `npm run package`
// (electron-packager --overwrite deletes and recreates dist/An-Nahw-*),
// which would silently wipe a save file stored alongside it on every
// rebuild. %APPDATA% survives that.
const SAVE_DIR = path.join(process.env.APPDATA || req('os').homedir(), 'An-Nahw');
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
fs.mkdirSync(SAVE_DIR, { recursive: true });
migrateLegacySave();

export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayISO() {
  return new Date(Date.now() - 86400000).toISOString().slice(0, 10);
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

  const next = {
    completed: saved.completed || {},
    quizScores: saved.quizScores || {},
    exStates: saved.exStates || {},
    lessonPos: saved.lessonPos || {},
    revealState: saved.revealState || {},
    practiceHistory: saved.practiceHistory || {},
    scheduleDeadline: saved.scheduleDeadline || null,
    revisionFrequencyDays: saved.revisionFrequencyDays || null,
    masteryProgress: saved.masteryProgress || {},
    streak,
    lastVisit: today,
    xp: saved.xp || 0,
    badges: saved.badges || [],
    theme: saved.theme || 'manuscript',
    arabicFace: saved.arabicFace || 'naskh',
    kufiHeadings: saved.kufiHeadings || false,
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
    completed: state.completed,
    quizScores: state.quizScores,
    exStates: state.exStates,
    lessonPos: state.lessonPos,
    revealState: state.revealState,
    practiceHistory: state.practiceHistory,
    scheduleDeadline: state.scheduleDeadline,
    revisionFrequencyDays: state.revisionFrequencyDays,
    masteryProgress: state.masteryProgress,
    streak: state.streak,
    lastVisit: state.lastVisit,
    xp: state.xp,
    badges: state.badges,
    theme: state.theme,
    arabicFace: state.arabicFace,
    kufiHeadings: state.kufiHeadings,
    nav: {
      view: state.view,
      moduleId: state.moduleId,
      lessonId: state.lessonId,
      practiceModuleId: state.practiceModuleId,
    },
  };
}

export function persist(state) {
  saveRaw(snapshot(state));
}

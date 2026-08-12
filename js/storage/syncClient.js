import { exportProgress, importProgress } from './storageManager.js';

const DEFAULT_BACKEND_URL = 'https://the-sciences.onrender.com';
const SESSION_TOKEN_KEY = 'the-sciences-session-token';

export function getBackendUrl() {
  return (globalThis.THE_SCIENCES_BACKEND_URL || DEFAULT_BACKEND_URL).replace(/\/$/, '');
}

function getSessionToken() {
  try {
    return localStorage.getItem(SESSION_TOKEN_KEY) || '';
  } catch (e) {
    return '';
  }
}

function saveSessionToken(token) {
  try {
    if (token) localStorage.setItem(SESSION_TOKEN_KEY, token);
  } catch (e) {}
}

function clearSessionToken() {
  try {
    localStorage.removeItem(SESSION_TOKEN_KEY);
  } catch (e) {}
}

async function request(path, options = {}) {
  const headers = { ...(options.headers || {}) };
  const token = getSessionToken();
  if (token && !headers.Authorization) headers.Authorization = `Bearer ${token}`;

  if (window.electronAPI?.sync?.request) {
    const result = await window.electronAPI.sync.request({
      path,
      method: options.method || 'GET',
      headers,
      body: options.body,
    });
    if (!result.ok) {
      if (result.status === 401) clearSessionToken();
      const error = new Error(result.body?.error || `Sync request failed: ${result.status}`);
      error.status = result.status;
      error.body = result.body;
      throw error;
    }
    return result.body;
  }
  const base = getBackendUrl();
  if (!base) return { disabled: true };
  const response = await fetch(`${base}${path}`, {
    credentials: 'include',
    ...options,
    headers,
  });
  const body = response.status === 204 ? null : await response.json().catch(() => null);
  if (!response.ok) {
    if (response.status === 401) clearSessionToken();
    const error = new Error(body?.error || `Sync request failed: ${response.status}`);
    error.status = response.status;
    error.body = body;
    throw error;
  }
  return body;
}

export async function register(email, password) {
  const result = await request('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  saveSessionToken(result?.token);
  return result;
}

export async function login(email, password) {
  const result = await request('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  saveSessionToken(result?.token);
  return result;
}

export async function logout() {
  try {
    return await request('/api/auth/logout', { method: 'POST' });
  } finally {
    clearSessionToken();
  }
}

export async function me() {
  return request('/api/me');
}

export async function fetchRemoteProgress() {
  const result = await request('/api/progress');
  return result?.disabled ? null : result;
}

function countObject(value) {
  return value && typeof value === 'object' ? Object.keys(value).length : 0;
}

function countNestedObject(value) {
  if (!value || typeof value !== 'object') return 0;
  return Object.values(value).reduce((total, entry) => total + countObject(entry), 0);
}

function normalizeEnvelope(envelope) {
  if (!envelope || typeof envelope !== 'object') return envelope;
  if (!envelope.meta && envelope.progress && typeof envelope.progress === 'object' && envelope.progress.meta) {
    return envelope.progress;
  }
  return envelope;
}

function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function cloneValue(value) {
  if (value == null) return value;
  return JSON.parse(JSON.stringify(value));
}

function valueOr(primary, fallback) {
  return typeof primary === 'undefined' ? cloneValue(fallback) : cloneValue(primary);
}

function progressFromEnvelope(envelope) {
  envelope = normalizeEnvelope(envelope);
  if (!envelope) return {};
  return cloneValue(envelope.progress || envelope || {});
}

function metaFromEnvelope(envelope) {
  envelope = normalizeEnvelope(envelope);
  return isPlainObject(envelope?.meta) ? envelope.meta : {};
}

function comparableMetaFromEnvelope(envelope) {
  if (!envelope) return null;
  const meta = metaFromEnvelope(envelope);
  return {
    updatedAt: meta.updatedAt || '',
    version: Number(meta.version) || 0,
    deviceId: meta.deviceId || '',
  };
}

function numberValue(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : 0;
}

function maxNumber(localValue, remoteValue) {
  return Math.max(numberValue(localValue), numberValue(remoteValue));
}

function isDateLike(value) {
  return typeof value === 'string' && !Number.isNaN(Date.parse(value));
}

function latestString(localValue, remoteValue) {
  if (!localValue) return cloneValue(remoteValue);
  if (!remoteValue) return cloneValue(localValue);
  if (isDateLike(localValue) && isDateLike(remoteValue)) {
    return new Date(localValue) >= new Date(remoteValue) ? cloneValue(localValue) : cloneValue(remoteValue);
  }
  return cloneValue(localValue);
}

function unionArrays(localValue, remoteValue) {
  const seen = new Set();
  const merged = [];
  for (const item of [...(Array.isArray(remoteValue) ? remoteValue : []), ...(Array.isArray(localValue) ? localValue : [])]) {
    const key = isPlainObject(item) ? JSON.stringify(item) : String(item);
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(cloneValue(item));
    }
  }
  return merged;
}

function mergeRecord(localValue, remoteValue, mergeValue) {
  const local = isPlainObject(localValue) ? localValue : {};
  const remote = isPlainObject(remoteValue) ? remoteValue : {};
  const merged = {};
  for (const key of new Set([...Object.keys(remote), ...Object.keys(local)])) {
    merged[key] = mergeValue(local[key], remote[key], key);
  }
  return merged;
}

function mergeNestedRecord(localValue, remoteValue, mergeValue) {
  return mergeRecord(localValue, remoteValue, (localChild, remoteChild) =>
    mergeRecord(localChild, remoteChild, mergeValue)
  );
}

function mergeBooleanRecord(localValue, remoteValue) {
  return mergeRecord(localValue, remoteValue, (localItem, remoteItem) => Boolean(localItem || remoteItem));
}

function mergeForceUnlockAll(local, remote) {
  const localHasValue = typeof local.forceUnlockAll !== 'undefined';
  const remoteHasValue = typeof remote.forceUnlockAll !== 'undefined';
  const localExplicit = local.forceUnlockAllExplicit === true;
  const remoteExplicit = remote.forceUnlockAllExplicit === true;

  if (localExplicit && localHasValue) {
    return { value: cloneValue(local.forceUnlockAll), explicit: true };
  }
  if (remoteExplicit && remoteHasValue) {
    return { value: cloneValue(remote.forceUnlockAll), explicit: true };
  }
  if (remoteHasValue) {
    return { value: cloneValue(remote.forceUnlockAll), explicit: true };
  }
  if (localHasValue) {
    return { value: cloneValue(local.forceUnlockAll), explicit: localExplicit };
  }
  return { value: true, explicit: false };
}

function mergeCompletionValue(localValue, remoteValue) {
  if (typeof localValue === 'undefined') return cloneValue(remoteValue);
  if (typeof remoteValue === 'undefined') return cloneValue(localValue);
  return latestString(localValue, remoteValue) || cloneValue(localValue);
}

function mergeStatsObject(localValue, remoteValue) {
  if (!isPlainObject(localValue)) return cloneValue(remoteValue);
  if (!isPlainObject(remoteValue)) return cloneValue(localValue);

  const merged = { ...cloneValue(remoteValue), ...cloneValue(localValue) };
  for (const key of new Set([...Object.keys(remoteValue), ...Object.keys(localValue)])) {
    const localItem = localValue[key];
    const remoteItem = remoteValue[key];

    if (typeof localItem === 'number' || typeof remoteItem === 'number') {
      merged[key] = maxNumber(localItem, remoteItem);
    } else if (typeof localItem === 'boolean' || typeof remoteItem === 'boolean') {
      merged[key] = Boolean(localItem || remoteItem);
    } else if (Array.isArray(localItem) || Array.isArray(remoteItem)) {
      merged[key] = unionArrays(localItem, remoteItem);
    } else if (isPlainObject(localItem) && isPlainObject(remoteItem)) {
      merged[key] = mergeStatsObject(localItem, remoteItem);
    } else if (isDateLike(localItem) || isDateLike(remoteItem)) {
      merged[key] = latestString(localItem, remoteItem);
    } else {
      merged[key] = valueOr(localItem, remoteItem);
    }
  }
  return merged;
}

function quizScoreStrength(value) {
  if (typeof value === 'number') return value;
  if (!isPlainObject(value)) return -1;
  const correct = numberValue(value.correct ?? value.score ?? value.best ?? value.points);
  const total = numberValue(value.total ?? value.outOf ?? value.questions);
  if (total > 0) return correct / total;
  return correct;
}

function mergeQuizScore(localValue, remoteValue) {
  if (typeof localValue === 'undefined') return cloneValue(remoteValue);
  if (typeof remoteValue === 'undefined') return cloneValue(localValue);

  const localStrength = quizScoreStrength(localValue);
  const remoteStrength = quizScoreStrength(remoteValue);
  if (localStrength > remoteStrength) return cloneValue(localValue);
  if (remoteStrength > localStrength) return cloneValue(remoteValue);
  if (isPlainObject(localValue) && isPlainObject(remoteValue)) return mergeStatsObject(localValue, remoteValue);
  return cloneValue(localValue);
}

function mergeExerciseState(localValue, remoteValue) {
  if (!isPlainObject(localValue)) return cloneValue(remoteValue);
  if (!isPlainObject(remoteValue)) return cloneValue(localValue);

  if (localValue.passed && !remoteValue.passed) return cloneValue(localValue);
  if (remoteValue.passed && !localValue.passed) return cloneValue(remoteValue);
  if (localValue.correct && !remoteValue.correct) return cloneValue(localValue);
  if (remoteValue.correct && !localValue.correct) return cloneValue(remoteValue);

  const merged = mergeStatsObject(localValue, remoteValue);
  if (localValue.passed || remoteValue.passed) merged.passed = true;
  if (localValue.correct || remoteValue.correct) merged.correct = true;
  if (localValue.submitted || remoteValue.submitted) merged.submitted = true;
  return merged;
}

function mergeProgressStatus(localValue, remoteValue) {
  if (!isPlainObject(localValue)) return cloneValue(remoteValue);
  if (!isPlainObject(remoteValue)) return cloneValue(localValue);

  const merged = mergeStatsObject(localValue, remoteValue);
  for (const key of ['done', 'complete', 'completed', 'passed', 'unlocked', 'mastered']) {
    if (localValue[key] || remoteValue[key]) merged[key] = true;
  }
  for (const key of ['at', 'date', 'updatedAt', 'completedAt', 'lastSeen', 'lastCorrect']) {
    if (localValue[key] || remoteValue[key]) merged[key] = latestString(localValue[key], remoteValue[key]);
  }
  if (localValue.score || remoteValue.score) merged.score = mergeQuizScore(localValue.score, remoteValue.score);
  return merged;
}

function mergeMaxRecord(localValue, remoteValue) {
  return mergeRecord(localValue, remoteValue, (localItem, remoteItem) => maxNumber(localItem, remoteItem));
}

export function mergeProgressData(localProgress = {}, remoteProgress = {}) {
  const local = isPlainObject(localProgress) ? localProgress : {};
  const remote = isPlainObject(remoteProgress) ? remoteProgress : {};
  const merged = { ...cloneValue(remote), ...cloneValue(local) };

  merged.courseId = local.courseId || remote.courseId || merged.courseId;
  merged.completed = mergeNestedRecord(local.completed, remote.completed, mergeCompletionValue);
  merged.quizScores = mergeNestedRecord(local.quizScores, remote.quizScores, mergeQuizScore);
  merged.exStates = mergeRecord(local.exStates, remote.exStates, mergeExerciseState);
  merged.lessonPos = mergeRecord(local.lessonPos, remote.lessonPos, (localItem, remoteItem) => valueOr(localItem, remoteItem));
  merged.revealState = mergeMaxRecord(local.revealState, remote.revealState);
  merged.practiceHistory = mergeRecord(local.practiceHistory, remote.practiceHistory, mergeStatsObject);
  merged.scheduleDeadline = mergeRecord(local.scheduleDeadline, remote.scheduleDeadline, (localItem, remoteItem) => valueOr(localItem, remoteItem));
  merged.pathNodeStatus = mergeRecord(local.pathNodeStatus, remote.pathNodeStatus, mergeProgressStatus);
  merged.pathReps = mergeRecord(local.pathReps, remote.pathReps, mergeStatsObject);
  merged.vocabExposure = mergeRecord(local.vocabExposure, remote.vocabExposure, mergeStatsObject);
  merged.pathCheckpointMastery = mergeRecord(local.pathCheckpointMastery, remote.pathCheckpointMastery, mergeProgressStatus);
  merged.masteryV2 = mergeRecord(local.masteryV2, remote.masteryV2, mergeProgressStatus);
  merged.unlockedCourses = mergeBooleanRecord(local.unlockedCourses, remote.unlockedCourses);
  merged.unlockedTracks = mergeBooleanRecord(local.unlockedTracks, remote.unlockedTracks);
  merged.unlockedModules = mergeBooleanRecord(local.unlockedModules, remote.unlockedModules);

  merged.badges = unionArrays(local.badges, remote.badges);
  merged.xp = maxNumber(local.xp, remote.xp);
  merged.streak = maxNumber(local.streak, remote.streak);
  merged.practiceCorrectTotal = maxNumber(local.practiceCorrectTotal, remote.practiceCorrectTotal);
  merged.lastVisit = latestString(local.lastVisit, remote.lastVisit);

  const forceUnlock = mergeForceUnlockAll(local, remote);
  merged.forceUnlockAll = forceUnlock.value;
  merged.forceUnlockAllExplicit = forceUnlock.explicit;

  for (const key of ['theme', 'accent', 'arabicFace', 'arabicHeadingFace', 'lessonTextScale', 'tarkeebTranslations', 'tarkeebLabelsBlue', 'kufiHeadings', 'nav', 'litCheckLang', 'litTextScale', 'litHoverTranslate']) {
    if (typeof local[key] !== 'undefined' || typeof remote[key] !== 'undefined') {
      merged[key] = valueOr(local[key], remote[key]);
    }
  }

  return merged;
}

function makeMergedEnvelope(localEnvelope, remoteEnvelope) {
  const localMeta = metaFromEnvelope(localEnvelope);
  const remoteMeta = metaFromEnvelope(remoteEnvelope);
  const localProgress = progressFromEnvelope(localEnvelope);
  const remoteProgress = progressFromEnvelope(remoteEnvelope);
  const baseVersion = Math.max(numberValue(localMeta.version), numberValue(remoteMeta.version));

  return {
    progress: mergeProgressData(localProgress, remoteProgress),
    meta: {
      updatedAt: new Date().toISOString(),
      version: baseVersion + 1,
      deviceId: localMeta.deviceId || remoteMeta.deviceId || '',
    },
  };
}

function summarizeEnvelope(envelope) {
  envelope = normalizeEnvelope(envelope);
  if (!envelope) return { exists: false };
  const progress = envelope.progress || envelope;
  return {
    exists: true,
    updatedAt: envelope.meta?.updatedAt || '',
    version: envelope.meta?.version || 0,
    deviceId: envelope.meta?.deviceId || '',
    bytes: JSON.stringify(envelope).length,
    courseId: progress.courseId || '',
    xp: progress.xp || 0,
    badges: Array.isArray(progress.badges) ? progress.badges.length : 0,
    completedLessons: countNestedObject(progress.completed),
    quizScores: countObject(progress.quizScores),
    exerciseStates: countObject(progress.exStates),
    practiceHistory: countObject(progress.practiceHistory),
    pathNodes: countObject(progress.pathNodeStatus),
  };
}

export async function getCloudSaveStatus() {
  const remote = await fetchRemoteProgress();
  if (!remote) return { disabled: true };
  return summarizeEnvelope(remote.progress);
}

export async function getLocalSaveStatus() {
  return summarizeEnvelope(await exportProgress());
}

export async function pushRemoteProgress(data) {
  return request('/api/progress', {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

export async function pushRemoteProgressIfUnchanged(data, expectedMeta) {
  const encodedMeta = encodeURIComponent(JSON.stringify(expectedMeta || null));
  return request(`/api/progress?expectedMeta=${encodedMeta}`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

export async function uploadLocalProgress(options = {}) {
  const local = await exportProgress();
  if (Object.prototype.hasOwnProperty.call(options, 'expectedMeta')) {
    await pushRemoteProgressIfUnchanged(local, options.expectedMeta);
  } else {
    await pushRemoteProgress(local);
  }
  return { synced: true, direction: 'upload', reason: 'manual-upload', progress: local };
}

export async function downloadRemoteProgress() {
  const remote = await fetchRemoteProgress();
  if (!remote) return { synced: false, reason: 'sync-disabled' };
  if (!remote.progress) throw new Error('No cloud save data found for this account.');
  await importProgress(normalizeEnvelope(remote.progress));
  return { synced: true, direction: 'download', reason: 'manual-download' };
}

export async function mergeLocalAndRemoteProgress(options = {}) {
  const local = await exportProgress();
  const remote = await fetchRemoteProgress();
  if (!remote) return { synced: false, reason: 'sync-disabled' };

  const remoteEnvelope = remote.progress ? normalizeEnvelope(remote.progress) : null;
  const mergedEnvelope = makeMergedEnvelope(local, remoteEnvelope);
  await importProgress(mergedEnvelope);
  const storedMerged = await exportProgress();

  const expectedMeta = Object.prototype.hasOwnProperty.call(options, 'expectedMeta')
    ? options.expectedMeta
    : comparableMetaFromEnvelope(remoteEnvelope);
  await pushRemoteProgressIfUnchanged(storedMerged, expectedMeta);

  return {
    synced: true,
    direction: 'merge',
    reason: 'merge',
    progress: storedMerged,
    hadCloudSave: Boolean(remoteEnvelope),
  };
}

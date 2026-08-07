import { exportProgress, importProgress } from './storageManager.js';

const DEFAULT_BACKEND_URL = 'https://the-sciences.onrender.com';

export function getBackendUrl() {
  return (globalThis.THE_SCIENCES_BACKEND_URL || DEFAULT_BACKEND_URL).replace(/\/$/, '');
}

async function request(path, options = {}) {
  if (window.electronAPI?.sync?.request) {
    const result = await window.electronAPI.sync.request({
      path,
      method: options.method || 'GET',
      headers: options.headers || {},
      body: options.body,
    });
    if (!result.ok) throw new Error(result.body?.error || `Sync request failed: ${result.status}`);
    return result.body;
  }
  const base = getBackendUrl();
  if (!base) return { disabled: true };
  const response = await fetch(`${base}${path}`, {
    credentials: 'include',
    ...options,
    headers: {
      ...(options.headers || {}),
    },
  });
  const body = response.status === 204 ? null : await response.json().catch(() => null);
  if (!response.ok) throw new Error(body?.error || `Sync request failed: ${response.status}`);
  return body;
}

export async function register(email, password) {
  return request('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
}

export async function login(email, password) {
  return request('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
}

export async function logout() {
  return request('/api/auth/logout', { method: 'POST' });
}

export async function me() {
  return request('/api/me');
}

export async function fetchRemoteProgress() {
  const result = await request('/api/progress');
  return result?.disabled ? null : result;
}

export async function pushRemoteProgress(data) {
  return request('/api/progress', {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

export async function uploadLocalProgress() {
  const local = await exportProgress();
  const version = Number(local.meta?.version) || 0;
  const upload = {
    ...local,
    meta: {
      ...(local.meta || {}),
      updatedAt: new Date().toISOString(),
      version: version + 1,
    },
  };
  await pushRemoteProgress(upload);
  return { synced: true, direction: 'upload', reason: 'manual-upload' };
}

function objectHasEntries(value) {
  return !!value && typeof value === 'object' && Object.keys(value).length > 0;
}

function nestedObjectHasEntries(value) {
  if (!value || typeof value !== 'object') return false;
  return Object.values(value).some((entry) => {
    if (Array.isArray(entry)) return entry.length > 0;
    return objectHasEntries(entry);
  });
}

function hasMeaningfulProgress(envelope) {
  const progress = envelope?.progress || {};
  if ((progress.xp || 0) > 0) return true;
  if ((progress.streak || 1) > 1) return true;
  if (Array.isArray(progress.badges) && progress.badges.length > 0) return true;
  if ((progress.practiceCorrectTotal || 0) > 0) return true;
  if (nestedObjectHasEntries(progress.completed)) return true;
  if (objectHasEntries(progress.quizScores)) return true;
  if (objectHasEntries(progress.exStates)) return true;
  if (objectHasEntries(progress.practiceHistory)) return true;
  if (objectHasEntries(progress.pathNodeStatus)) return true;
  if (objectHasEntries(progress.pathReps)) return true;
  if (objectHasEntries(progress.vocabExposure)) return true;
  if (objectHasEntries(progress.pathCheckpointMastery)) return true;
  if (objectHasEntries(progress.masteryV2)) return true;
  if (objectHasEntries(progress.unlockedCourses)) return true;
  if (objectHasEntries(progress.unlockedTracks)) return true;
  if (objectHasEntries(progress.unlockedModules)) return true;
  if (progress.theme && progress.theme !== 'manuscript') return true;
  if (progress.accent && progress.accent !== 'gold') return true;
  if (progress.arabicFace && progress.arabicFace !== 'naskh') return true;
  if (progress.kufiHeadings) return true;
  return false;
}

export async function syncProgress() {
  const local = await exportProgress();
  const remote = await fetchRemoteProgress();
  if (!remote) return { synced: false, reason: 'sync-disabled' };
  if (!remote.progress) {
    await pushRemoteProgress(local);
    return { synced: true, direction: 'upload' };
  }
  const localUpdated = Date.parse(local.meta?.updatedAt || 0);
  const remoteUpdated = Date.parse(remote.progress.meta?.updatedAt || 0);
  const localHasProgress = hasMeaningfulProgress(local);
  const remoteHasProgress = hasMeaningfulProgress(remote.progress);
  if (localHasProgress && !remoteHasProgress) {
    await pushRemoteProgress(local);
    return { synced: true, direction: 'upload', reason: 'protected-local-progress' };
  }
  if (remoteHasProgress && !localHasProgress) {
    await importProgress(remote.progress);
    return { synced: true, direction: 'download', reason: 'protected-remote-progress' };
  }
  if (remoteUpdated > localUpdated) {
    await importProgress(remote.progress);
    return { synced: true, direction: 'download' };
  }
  await pushRemoteProgress(local);
  return { synced: true, direction: 'upload' };
}

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
    if (!result.ok) {
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
    headers: {
      ...(options.headers || {}),
    },
  });
  const body = response.status === 204 ? null : await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(body?.error || `Sync request failed: ${response.status}`);
    error.status = response.status;
    error.body = body;
    throw error;
  }
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

function countObject(value) {
  return value && typeof value === 'object' ? Object.keys(value).length : 0;
}

function countNestedObject(value) {
  if (!value || typeof value !== 'object') return 0;
  return Object.values(value).reduce((total, entry) => total + countObject(entry), 0);
}

function summarizeEnvelope(envelope) {
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

export async function uploadLocalProgress(options = {}) {
  const local = await exportProgress();
  const body = Object.prototype.hasOwnProperty.call(options, 'expectedMeta')
    ? { progress: local, expectedMeta: options.expectedMeta }
    : local;
  await pushRemoteProgress(body);
  return { synced: true, direction: 'upload', reason: 'manual-upload', progress: local };
}

export async function downloadRemoteProgress() {
  const remote = await fetchRemoteProgress();
  if (!remote) return { synced: false, reason: 'sync-disabled' };
  if (!remote.progress) throw new Error('No cloud save data found for this account.');
  await importProgress(remote.progress);
  return { synced: true, direction: 'download', reason: 'manual-download' };
}

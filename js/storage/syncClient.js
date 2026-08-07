import { exportProgress, importProgress } from './storageManager.js';

const BACKEND_URL_KEY = 'the-sciences-backend-url';
const DEFAULT_BACKEND_URL = 'https://the-sciences.onrender.com';

export function getBackendUrl() {
  return (
    localStorage.getItem(BACKEND_URL_KEY)
    || globalThis.THE_SCIENCES_BACKEND_URL
    || DEFAULT_BACKEND_URL
  ).replace(/\/$/, '');
}

export function setBackendUrl(url) {
  const cleaned = (url || '').trim().replace(/\/$/, '');
  if (cleaned) localStorage.setItem(BACKEND_URL_KEY, cleaned);
  else localStorage.removeItem(BACKEND_URL_KEY);
  globalThis.THE_SCIENCES_BACKEND_URL = cleaned || DEFAULT_BACKEND_URL;
  return getBackendUrl();
}

async function request(path, options = {}) {
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
  if (remoteUpdated > localUpdated) {
    await importProgress(remote.progress);
    return { synced: true, direction: 'download' };
  }
  await pushRemoteProgress(local);
  return { synced: true, direction: 'upload' };
}

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
  await pushRemoteProgress(local);
  return { synced: true, direction: 'upload', reason: 'manual-upload' };
}

export async function downloadRemoteProgress() {
  const remote = await fetchRemoteProgress();
  if (!remote) return { synced: false, reason: 'sync-disabled' };
  if (!remote.progress) throw new Error('No cloud save data found for this account.');
  await importProgress(remote.progress);
  return { synced: true, direction: 'download', reason: 'manual-download' };
}

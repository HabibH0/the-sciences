const STORAGE_KEY = 'the-sciences-progress';
const DEVICE_ID_KEY = 'the-sciences-device-id';
const SAVE_VERSION = 1;

function hasElectronStorage() {
  return !!window.electronAPI?.storage;
}

function uuid() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `device-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function browserDeviceId() {
  let id = localStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id = uuid();
    localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
}

async function deviceId() {
  if (hasElectronStorage() && window.electronAPI.storage.getDeviceId) {
    return window.electronAPI.storage.getDeviceId();
  }
  return browserDeviceId();
}

function isEnvelope(data) {
  return !!data && typeof data === 'object' && 'progress' in data && 'meta' in data;
}

function parseStored(raw) {
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
}

function unwrap(data) {
  if (!data || typeof data !== 'object') return {};
  return isEnvelope(data) ? (data.progress || {}) : data;
}

async function wrap(progress, previous = null) {
  const previousMeta = isEnvelope(previous) ? previous.meta : {};
  const previousVersion = Number(previousMeta?.version) || 0;
  return {
    progress: progress || {},
    meta: {
      ...previousMeta,
      updatedAt: new Date().toISOString(),
      version: Math.max(SAVE_VERSION, previousVersion + 1),
      deviceId: await deviceId(),
    },
  };
}

export async function readStoredEnvelope() {
  if (hasElectronStorage()) return window.electronAPI.storage.loadProgress();
  return parseStored(localStorage.getItem(STORAGE_KEY));
}

async function writeStoredEnvelope(envelope) {
  if (hasElectronStorage()) return window.electronAPI.storage.saveProgress(envelope);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(envelope));
  return envelope;
}

export async function loadProgress() {
  return unwrap(await readStoredEnvelope());
}

export async function saveProgress(data) {
  const previous = await readStoredEnvelope();
  const envelope = await wrap(data, previous);
  await writeStoredEnvelope(envelope);
  return unwrap(envelope);
}

export async function clearProgress() {
  if (hasElectronStorage()) return window.electronAPI.storage.clearProgress();
  localStorage.removeItem(STORAGE_KEY);
}

export async function exportProgress() {
  const stored = await readStoredEnvelope();
  if (isEnvelope(stored)) return stored;
  return wrap(unwrap(stored), stored);
}

export async function importProgress(data) {
  const progress = unwrap(data);
  const envelope = isEnvelope(data) ? data : await wrap(progress);
  if (!envelope.meta?.deviceId) {
    envelope.meta = { ...(envelope.meta || {}), deviceId: await deviceId() };
  }
  if (!envelope.meta?.updatedAt) {
    envelope.meta = { ...(envelope.meta || {}), updatedAt: new Date().toISOString() };
  }
  if (!envelope.meta?.version) {
    envelope.meta = { ...(envelope.meta || {}), version: SAVE_VERSION };
  }
  await writeStoredEnvelope(envelope);
  return unwrap(envelope);
}

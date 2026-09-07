const STORAGE_KEY = 'the-sciences-progress';
const DEVICE_ID_KEY = 'the-sciences-device-id';
const SAVE_VERSION = 1;
const RECOVERY_KEY = 'the-sciences-recovery';
const MIGRATION_BACKUP_KEY = 'the-sciences-before-mizan';
let writesBlocked = false;

export function blockStorageWrites() { writesBlocked = true; }
export function originalSaveText() { return localStorage.getItem(STORAGE_KEY); }
export function retryStorageWrites() {
  // A failed migration backup must succeed before allowing a retry to write.
  preserveMigrationBackup();
  writesBlocked = false;
}

export function recoverySave() {
  try { return JSON.parse(localStorage.getItem(RECOVERY_KEY) || 'null'); } catch { return null; }
}

export function dismissRecovery() {
  const recovered = recoverySave();
  if (recovered) localStorage.setItem(RECOVERY_KEY, JSON.stringify({ ...recovered, dismissed: true }));
}

// Preserve the exact pre-migration envelope once. If storage is full this
// throws before startup can overwrite the learner's only usable save.
export function preserveMigrationBackup() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw && !localStorage.getItem(MIGRATION_BACKUP_KEY)) {
    localStorage.setItem(MIGRATION_BACKUP_KEY, raw);
  }
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

function isEnvelope(data) {
  return !!data && typeof data === 'object' && 'progress' in data && 'meta' in data;
}

function parseStored(raw) {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)
      || (isEnvelope(parsed) && (!parsed.progress || typeof parsed.progress !== 'object' || Array.isArray(parsed.progress)))) {
      throw new Error('Unrecognized save structure');
    }
    return parsed;
  } catch (e) {
    // Never replace an earlier recovery copy. Keep separate originals if
    // more than one damaged save is encountered before it is dismissed.
    const previous = recoverySave();
    if (previous && previous.raw !== raw) {
      localStorage.setItem(`${RECOVERY_KEY}-${crypto.randomUUID()}`, JSON.stringify(previous));
    }
    localStorage.setItem(RECOVERY_KEY, JSON.stringify({ raw, at: new Date().toISOString(), dismissed: false }));
    return {};
  }
}

function unwrap(data) {
  if (!data || typeof data !== 'object') return {};
  return isEnvelope(data) ? (data.progress || {}) : data;
}

function wrap(progress, previous = null) {
  const previousMeta = isEnvelope(previous) ? previous.meta : {};
  const previousVersion = Number(previousMeta?.version) || 0;
  return {
    progress: progress || {},
    meta: {
      ...previousMeta,
      updatedAt: new Date().toISOString(),
      version: Math.max(SAVE_VERSION, previousVersion + 1),
      deviceId: browserDeviceId(),
    },
  };
}

export async function readStoredEnvelope() {
  return parseStored(localStorage.getItem(STORAGE_KEY));
}

function writeStoredEnvelope(envelope) {
  if (writesBlocked) throw new Error('Your original save is protected. Download a backup and retry saving.');
  localStorage.setItem(STORAGE_KEY, JSON.stringify(envelope));
  return envelope;
}

export async function loadProgress() {
  return unwrap(await readStoredEnvelope());
}

export async function saveProgress(data) {
  // localStorage is synchronous. Keep this entire write before the first
  // await so beforeunload can flush a debounced answer before refresh exits.
  const previous = parseStored(localStorage.getItem(STORAGE_KEY));
  const envelope = wrap(data, previous);
  writeStoredEnvelope(envelope);
  return unwrap(envelope);
}

export async function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

export async function exportProgress() {
  const stored = await readStoredEnvelope();
  if (isEnvelope(stored)) return stored;
  return wrap(unwrap(stored), stored);
}

export async function importProgress(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)
    || (isEnvelope(data) && (!data.progress || typeof data.progress !== 'object' || Array.isArray(data.progress)))) {
    throw new Error('This file does not contain a valid progress save.');
  }
  const progress = unwrap(data);
  const envelope = isEnvelope(data) ? data : await wrap(progress);
  if (!envelope.meta?.deviceId) {
    envelope.meta = { ...(envelope.meta || {}), deviceId: browserDeviceId() };
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

import http from 'http';
import fs from 'fs';
import path from 'path';
import { randomBytes, randomUUID, scrypt as scryptCallback, timingSafeEqual } from 'crypto';
import { promisify } from 'util';
import { gradeResponse, readBoundedJson, gradingInfo } from './grading.js';

const scrypt = promisify(scryptCallback);
const PORT = Number(process.env.PORT || 3000);
const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data');
const DB_PATH = path.join(DATA_DIR, 'db.json');
const DATABASE_URL = process.env.DATABASE_URL || '';
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:4173';
const ALLOWED_ORIGINS = new Set([
  CLIENT_ORIGIN,
  'https://habibh0.github.io',
  'http://localhost:4173',
  'http://127.0.0.1:4173',
]);
const FORCE_SECURE_COOKIE = process.env.COOKIE_SECURE === 'true'
  || process.env.NODE_ENV === 'production'
  || CLIENT_ORIGIN.startsWith('https://');
const SESSION_MAX_AGE = 1000 * 60 * 60 * 24 * 30;

function defaultDb() {
  return { users: {}, sessions: {} };
}

function readDb() {
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  } catch (e) {
    if (e.code === 'ENOENT') return defaultDb();
    throw e;
  }
}

function writeDb(db) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const temp = `${DB_PATH}.${randomUUID()}.tmp`;
  fs.writeFileSync(temp, JSON.stringify(db, null, 2), { mode: 0o600 });
  fs.renameSync(temp, DB_PATH);
}

async function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  const hash = await scrypt(password, salt, 64);
  return `${salt}:${hash.toString('hex')}`;
}

async function verifyPassword(password, stored) {
  const [salt, hashHex] = String(stored || '').split(':');
  if (!salt || !hashHex) return false;
  const hash = await scrypt(password, salt, 64);
  const expected = Buffer.from(hashHex, 'hex');
  return expected.length === hash.length && timingSafeEqual(expected, hash);
}

function publicUser(user) {
  return { id: user.id, email: user.email };
}

function progressMeta(progress) {
  if (!progress || typeof progress !== 'object') return null;
  const meta = progress.meta || {};
  return {
    updatedAt: meta.updatedAt || '',
    version: Number(meta.version) || 0,
    deviceId: meta.deviceId || '',
  };
}

function sameProgressMeta(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return (a.updatedAt || '') === (b.updatedAt || '')
    && (Number(a.version) || 0) === (Number(b.version) || 0)
    && (a.deviceId || '') === (b.deviceId || '');
}

function normalizeProgressPayload(progress) {
  if (!progress || typeof progress !== 'object') return progress;
  if (!progress.meta && progress.progress && typeof progress.progress === 'object' && progress.progress.meta) {
    return progress.progress;
  }
  return progress;
}

async function getNormalizedProgress(userId) {
  const current = await store.getProgress(userId);
  const normalized = normalizeProgressPayload(current);
  return normalized;
}

function rowToUser(row) {
  if (!row) return null;
  return {
    id: row.id,
    email: row.email,
    passwordHash: row.password_hash,
    progress: row.progress,
    createdAt: row.created_at,
  };
}

async function createPostgresStore() {
  const { Pool } = await import('pg');
  const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false },
  });

  await pool.query(`
    create table if not exists users (
      id text primary key,
      email text unique not null,
      password_hash text not null,
      progress jsonb,
      progress_saved_at timestamptz,
      created_at timestamptz not null default now()
    );
  `);
  await pool.query(`
    create table if not exists sessions (
      token text primary key,
      user_id text not null references users(id) on delete cascade,
      expires_at bigint not null
    );
  `);

  return {
    async pruneSessions() {
      await pool.query('delete from sessions where expires_at < $1', [Date.now()]);
    },
    async findUserByEmail(email) {
      const result = await pool.query('select * from users where email = $1', [email]);
      return rowToUser(result.rows[0]);
    },
    async getUserById(id) {
      const result = await pool.query('select * from users where id = $1', [id]);
      return rowToUser(result.rows[0]);
    },
    async createUser({ id, email, passwordHash }) {
      const result = await pool.query(
        `insert into users (id, email, password_hash)
         values ($1, $2, $3)
         returning *`,
        [id, email, passwordHash],
      );
      return rowToUser(result.rows[0]);
    },
    async createSession(token, userId, expiresAt) {
      await pool.query(
        'insert into sessions (token, user_id, expires_at) values ($1, $2, $3)',
        [token, userId, expiresAt],
      );
    },
    async deleteSession(token) {
      await pool.query('delete from sessions where token = $1', [token]);
    },
    async getUserBySession(token) {
      if (!token) return null;
      const result = await pool.query(`
        select u.*
        from sessions s
        join users u on u.id = s.user_id
        where s.token = $1 and s.expires_at >= $2
      `, [token, Date.now()]);
      return rowToUser(result.rows[0]);
    },
    async getProgress(userId) {
      const result = await pool.query('select progress from users where id = $1', [userId]);
      return result.rows[0]?.progress || null;
    },
    async setProgress(userId, progress) {
      const result = await pool.query(
        `update users
         set progress = $2, progress_saved_at = now()
         where id = $1
         returning progress`,
        [userId, progress],
      );
      return result.rows[0]?.progress || null;
    },
    async compareAndSetProgress(userId, progress, expected, conditional) {
      const client = await pool.connect();
      try {
        await client.query('BEGIN');
        const result = await client.query('SELECT progress FROM users WHERE id = $1 FOR UPDATE', [userId]);
        const current = normalizeProgressPayload(result.rows[0]?.progress || null);
        if (conditional && !sameProgressMeta(progressMeta(current), expected)) {
          await client.query('ROLLBACK');
          return { conflict: true, progress: current };
        }
        await client.query('UPDATE users SET progress = $2, progress_saved_at = now() WHERE id = $1', [userId, progress]);
        await client.query('COMMIT');
        return { progress };
      } catch (error) {
        await client.query('ROLLBACK');
        throw error;
      } finally { client.release(); }
    },
  };
}

function createFileStore() {
  return {
    async pruneSessions() {
      const db = readDb();
      const now = Date.now();
      for (const [token, session] of Object.entries(db.sessions)) {
        if (session.expiresAt < now) delete db.sessions[token];
      }
      writeDb(db);
    },
    async findUserByEmail(email) {
      return Object.values(readDb().users).find((user) => user.email === email) || null;
    },
    async getUserById(id) {
      return readDb().users[id] || null;
    },
    async createUser(user) {
      const db = readDb();
      if (Object.values(db.users).some(existing => existing.email === user.email)) throw new Error('That email is already registered.');
      const next = { ...user, progress: null, createdAt: new Date().toISOString() };
      db.users[next.id] = next;
      writeDb(db);
      return next;
    },
    async createSession(token, userId, expiresAt) {
      const db = readDb();
      db.sessions[token] = { userId, expiresAt };
      writeDb(db);
    },
    async deleteSession(token) {
      const db = readDb();
      delete db.sessions[token];
      writeDb(db);
    },
    async getUserBySession(token) {
      const db = readDb();
      const session = token && db.sessions[token];
      if (!session || session.expiresAt < Date.now()) return null;
      return db.users[session.userId] || null;
    },
    async getProgress(userId) {
      return readDb().users[userId]?.progress || null;
    },
    async setProgress(userId, progress) {
      const db = readDb();
      if (!db.users[userId]) return null;
      db.users[userId].progress = progress;
      db.users[userId].progressSavedAt = new Date().toISOString();
      writeDb(db);
      return progress;
    },
    async compareAndSetProgress(userId, progress, expected, conditional) {
      // No await between reading, checking and writing: concurrent requests
      // cannot both succeed against the same previous version in this process.
      const db = readDb();
      const current = normalizeProgressPayload(db.users[userId]?.progress || null);
      if (conditional && !sameProgressMeta(progressMeta(current), expected)) return { conflict: true, progress: current };
      if (!db.users[userId]) throw new Error('Sign in first.');
      db.users[userId].progress = progress;
      db.users[userId].progressSavedAt = new Date().toISOString();
      writeDb(db);
      return { progress };
    },
  };
}

const store = DATABASE_URL ? await createPostgresStore() : createFileStore();
let lastPrune = 0;
const authRequests = new Map();
function limitAuth(req) {
  const now = Date.now();
  // Trust forwarded addresses only when the host explicitly configures its
  // reverse proxy. Direct clients cannot choose a fresh bucket via a header.
  const ip = process.env.TRUST_PROXY === 'true'
    ? String(req.headers['x-forwarded-for'] || req.socket.remoteAddress).split(',').at(-1).trim()
    : req.socket.remoteAddress;
  for (const [key, item] of authRequests) if (item.until <= now) authRequests.delete(key);
  const bucket = authRequests.get(ip) || { count: 0, until: now + 60000 };
  bucket.count++;
  authRequests.set(ip, bucket);
  if (bucket.count > 20) throw Object.assign(new Error('Too many sign-in attempts. Please wait a minute and try again.'), { status: 429 });
}

function send(res, status, body = null, origin = CLIENT_ORIGIN) {
  const allowOrigin = ALLOWED_ORIGINS.has(origin) ? origin : CLIENT_ORIGIN;
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Credentials': 'true',
    'Vary': 'Origin',
  });
  res.end(body == null ? '' : JSON.stringify(body));
}

function parseCookies(req) {
  return Object.fromEntries(String(req.headers.cookie || '')
    .split(';')
    .map((pair) => pair.trim().split('='))
    .filter((pair) => pair[0]));
}

function authToken(req) {
  const auth = String(req.headers.authorization || '').trim();
  const match = auth.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : parseCookies(req).ts_session;
}

function sessionCookie(token, clear = false, origin = CLIENT_ORIGIN) {
  const secureCookie = FORCE_SECURE_COOKIE || String(origin || '').startsWith('https://');
  const parts = [
    `ts_session=${clear ? '' : token}`,
    'HttpOnly',
    'Path=/',
    secureCookie ? 'SameSite=None' : 'SameSite=Lax',
    `Max-Age=${clear ? 0 : Math.floor(SESSION_MAX_AGE / 1000)}`,
  ];
  if (secureCookie) parts.push('Secure');
  return parts.join('; ');
}

async function readJson(req) {
  return readBoundedJson(req, req.url.startsWith('/api/progress') ? 16 * 1024 * 1024 : 32768);
}

function assertEmailPassword(email, password) {
  const normalized = String(email || '').trim().toLowerCase();
  if (typeof password !== 'string' || password.length > 1024 || normalized.length > 254) throw new Error('Enter a valid email and password.');
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(normalized)) throw new Error('Enter a valid email address.');
  if (String(password || '').length < 8) throw new Error('Password must be at least 8 characters.');
  return normalized;
}

async function handle(req, res) {
  const origin = req.headers.origin || CLIENT_ORIGIN;
  if (req.method === 'OPTIONS') {
    const allowOrigin = ALLOWED_ORIGINS.has(origin) ? origin : CLIENT_ORIGIN;
    res.writeHead(204, {
      'Access-Control-Allow-Origin': allowOrigin,
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
      'Vary': 'Origin',
    });
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (Date.now() - lastPrune > 60000) { lastPrune = Date.now(); await store.pruneSessions(); }
    if (req.method === 'POST' && ['/api/auth/login', '/api/auth/register'].includes(url.pathname)) limitAuth(req);
    if (req.method === 'POST' && url.pathname === '/api/grade') {
      res.setHeader('Cache-Control', 'no-store');
      send(res, 200, gradeResponse(await readBoundedJson(req)), origin);
      return;
    }
    if (req.method === 'GET' && url.pathname === '/health') {
      send(res, 200, { ok: true, storage: DATABASE_URL ? 'postgres' : 'file', grading: gradingInfo }, origin);
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/auth/register') {
      const body = await readJson(req);
      const email = assertEmailPassword(body.email, body.password);
      if (await store.findUserByEmail(email)) throw new Error('That email is already registered.');
      const user = await store.createUser({
        id: randomUUID(),
        email,
        passwordHash: await hashPassword(body.password),
      });
      const token = randomBytes(32).toString('hex');
      await store.createSession(token, user.id, Date.now() + SESSION_MAX_AGE);
      res.setHeader('Set-Cookie', sessionCookie(token, false, origin));
      send(res, 200, { user: publicUser(user), token }, origin);
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/auth/login') {
      const body = await readJson(req);
      const email = String(body.email || '').trim().toLowerCase();
      if (typeof body.password !== 'string' || body.password.length > 1024) throw new Error('Invalid email or password.');
      const user = await store.findUserByEmail(email);
      if (!user || !(await verifyPassword(body.password, user.passwordHash))) throw new Error('Invalid email or password.');
      const token = randomBytes(32).toString('hex');
      await store.createSession(token, user.id, Date.now() + SESSION_MAX_AGE);
      res.setHeader('Set-Cookie', sessionCookie(token, false, origin));
      send(res, 200, { user: publicUser(user), token }, origin);
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/auth/logout') {
      const token = authToken(req);
      if (token) await store.deleteSession(token);
      res.setHeader('Set-Cookie', sessionCookie('', true, origin));
      send(res, 204, null, origin);
      return;
    }

    const user = await store.getUserBySession(authToken(req));
    if (!user) {
      send(res, 401, { error: 'Sign in first.' }, origin);
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/me') {
      send(res, 200, { user: publicUser(user) }, origin);
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/progress') {
      send(res, 200, { progress: await getNormalizedProgress(user.id) }, origin);
      return;
    }

    if (req.method === 'PUT' && url.pathname === '/api/progress') {
      const body = await readJson(req);
      const expectedMetaParam = url.searchParams.get('expectedMeta');
      const conditional = expectedMetaParam !== null || Object.prototype.hasOwnProperty.call(body || {}, 'expectedMeta');
      const expectedMeta = expectedMetaParam !== null ? JSON.parse(expectedMetaParam) : (body.expectedMeta || null);
      const nextProgress = normalizeProgressPayload(Object.prototype.hasOwnProperty.call(body || {}, 'expectedMeta') ? body.progress : body);
      if (!nextProgress || typeof nextProgress !== 'object' || Array.isArray(nextProgress)
        || !nextProgress.progress || typeof nextProgress.progress !== 'object' || Array.isArray(nextProgress.progress)
        || !nextProgress.meta || !Number.isFinite(Number(nextProgress.meta.version))) {
        throw new Error('The request must contain a progress save and its version.');
      }
      const result = await store.compareAndSetProgress(user.id, nextProgress, expectedMeta, conditional);
      if (result.conflict) send(res, 409, { error: 'Cloud save changed before upload. Retry syncing to merge the latest progress.', progress: result.progress }, origin);
      else send(res, 200, { progress: result.progress }, origin);
      return;
    }

    send(res, 404, { error: 'Not found.' }, origin);
  } catch (e) {
    send(res, e.status || 400, { error: e.message || 'Request failed.' }, origin);
  }
}

http.createServer(handle).listen(PORT, '0.0.0.0', () => {
  console.log(`Mīzān server listening on ${PORT} using ${DATABASE_URL ? 'Postgres' : 'file'} storage`);
});

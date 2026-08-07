import http from 'http';
import fs from 'fs';
import path from 'path';
import { randomBytes, randomUUID, scrypt as scryptCallback, timingSafeEqual } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(scryptCallback);
const PORT = Number(process.env.PORT || 3000);
const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data');
const DB_PATH = path.join(DATA_DIR, 'db.json');
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:4173';
const ALLOWED_ORIGINS = new Set([
  CLIENT_ORIGIN,
  'http://localhost:4173',
  'http://127.0.0.1:4173',
]);
const COOKIE_SECURE = process.env.NODE_ENV === 'production';
const SESSION_MAX_AGE = 1000 * 60 * 60 * 24 * 30;

function defaultDb() {
  return { users: {}, sessions: {} };
}

function readDb() {
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  } catch (e) {
    return defaultDb();
  }
}

function writeDb(db) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
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

function sessionCookie(token, clear = false) {
  const parts = [
    `ts_session=${clear ? '' : token}`,
    'HttpOnly',
    'Path=/',
    COOKIE_SECURE ? 'SameSite=None' : 'SameSite=Lax',
    `Max-Age=${clear ? 0 : Math.floor(SESSION_MAX_AGE / 1000)}`,
  ];
  if (COOKIE_SECURE) parts.push('Secure');
  return parts.join('; ');
}

async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString('utf-8'));
}

function publicUser(user) {
  return { id: user.id, email: user.email };
}

function currentUser(req, db) {
  const token = parseCookies(req).ts_session;
  const session = token && db.sessions[token];
  if (!session || session.expiresAt < Date.now()) return null;
  return db.users[session.userId] || null;
}

function pruneSessions(db) {
  const now = Date.now();
  for (const [token, session] of Object.entries(db.sessions)) {
    if (session.expiresAt < now) delete db.sessions[token];
  }
}

function assertEmailPassword(email, password) {
  const normalized = String(email || '').trim().toLowerCase();
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
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
      'Vary': 'Origin',
    });
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const db = readDb();
  pruneSessions(db);

  try {
    if (req.method === 'GET' && url.pathname === '/health') {
      send(res, 200, { ok: true }, origin);
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/auth/register') {
      const body = await readJson(req);
      const email = assertEmailPassword(body.email, body.password);
      if (Object.values(db.users).some((user) => user.email === email)) throw new Error('That email is already registered.');
      const user = { id: randomUUID(), email, passwordHash: await hashPassword(body.password), progress: null, createdAt: new Date().toISOString() };
      const token = randomBytes(32).toString('hex');
      db.users[user.id] = user;
      db.sessions[token] = { userId: user.id, expiresAt: Date.now() + SESSION_MAX_AGE };
      writeDb(db);
      res.setHeader('Set-Cookie', sessionCookie(token));
      send(res, 200, { user: publicUser(user) }, origin);
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/auth/login') {
      const body = await readJson(req);
      const email = String(body.email || '').trim().toLowerCase();
      const user = Object.values(db.users).find((entry) => entry.email === email);
      if (!user || !(await verifyPassword(body.password, user.passwordHash))) throw new Error('Invalid email or password.');
      const token = randomBytes(32).toString('hex');
      db.sessions[token] = { userId: user.id, expiresAt: Date.now() + SESSION_MAX_AGE };
      writeDb(db);
      res.setHeader('Set-Cookie', sessionCookie(token));
      send(res, 200, { user: publicUser(user) }, origin);
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/auth/logout') {
      const token = parseCookies(req).ts_session;
      if (token) delete db.sessions[token];
      writeDb(db);
      res.setHeader('Set-Cookie', sessionCookie('', true));
      send(res, 204, null, origin);
      return;
    }

    const user = currentUser(req, db);
    if (!user) {
      send(res, 401, { error: 'Sign in first.' }, origin);
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/me') {
      send(res, 200, { user: publicUser(user) }, origin);
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/progress') {
      send(res, 200, { progress: user.progress || null }, origin);
      return;
    }

    if (req.method === 'PUT' && url.pathname === '/api/progress') {
      user.progress = await readJson(req);
      user.progressSavedAt = new Date().toISOString();
      writeDb(db);
      send(res, 200, { progress: user.progress }, origin);
      return;
    }

    send(res, 404, { error: 'Not found.' }, origin);
  } catch (e) {
    send(res, 400, { error: e.message || 'Request failed.' }, origin);
  }
}

http.createServer(handle).listen(PORT, () => {
  console.log(`The Sciences sync server listening on ${PORT}`);
});

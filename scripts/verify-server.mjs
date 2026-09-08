import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';

const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'mizan-server-check-'));
const port = 43179;
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['server/server.js'], { cwd: new URL('..', import.meta.url), env: { ...process.env, PORT: String(port), DATA_DIR: temp, DATABASE_URL: '', NODE_ENV: 'test', CLIENT_ORIGIN: 'http://localhost:4173', TRUST_PROXY: 'false' }, windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] });
let logs = ''; server.stdout.on('data', x => logs += x); server.stderr.on('data', x => logs += x);
let token;
const request = (url, body, method = 'POST', headers = {}) => fetch(base + url, { method, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...headers }, ...(body === undefined ? {} : { body: JSON.stringify(body) }) });
try {
  let ready = false;
  for (let n = 0; n < 40; n++) {
    if (server.exitCode != null) throw new Error(logs);
    try { ready = (await fetch(base + '/health')).ok; } catch {}
    if (ready) break;
    await delay(100);
  }
  assert(ready, logs);
  assert.equal((await request('/api/progress', undefined, 'GET')).status, 401);
  const auth = await request('/api/auth/register', { email: 'integration@example.invalid', password: 'local-test-password-only' });
  assert.equal(auth.status, 200); assert.match(auth.headers.get('set-cookie'), /HttpOnly/);
  token = (await auth.json()).token;
  const envelope = (version, xp) => ({ progress: { mizanVersion: 1, xp }, meta: { version, deviceId: 'local-test', updatedAt: `2026-09-07T12:00:0${version}.000Z` } });
  const first = envelope(1, 10);
  first.progress.literature = { version: 2, sourceViews: { 'qiraah-v1/ch1': 123 }, preferences: { stage: 3, updatedAt: 124 }, runs: { 'lit-test': { id: 'lit-test', lessonId: 'daily-literature-review', revision: 1, selection: ['lex-wake-1'], attempts: [{ id: 'first-attempt', exerciseId: 'lex-wake-1', answer: 'استيقظ', hints: 1, support: { 'lex-wake-1': 1 }, responseMs: 2400 }] } } };
  first.progress.mizanCourses = Object.fromEntries(['intro-nahw', 'intro-sarf', 'adv-nahw', 'adv-sarf'].map(id => [id, {
    concepts: {}, attempts: [{ id: `${id}:attempt`, key: 'distinct-example', conceptIds: ['test/c0'], family: 'application', difficulty: 4, hintsUsed: 0, guided: false, grade: { correct: true, mistakes: [] }, occurredAt: '2026-09-08T12:00:00.000Z', sessionId: 'test-session', mode: 'review' }],
  }]));
  assert.equal((await request('/api/progress', { expectedMeta: null, progress: first }, 'PUT')).status, 200);
  const literatureSave = await (await request('/api/progress', undefined, 'GET')).json();
  assert.deepEqual(literatureSave.progress.progress.literature, first.progress.literature, 'The cloud envelope preserves Literature evidence exactly.');
  assert.deepEqual(literatureSave.progress.progress.mizanCourses, first.progress.mizanCourses, 'The cloud envelope preserves mastery evidence for every course.');
  const attempts = await Promise.all([20, 30].map(xp => request('/api/progress', { expectedMeta: first.meta, progress: envelope(2, xp) }, 'PUT')));
  assert.deepEqual(attempts.map(r => r.status).sort(), [200, 409]);
  const latest = await (await request('/api/progress', undefined, 'GET')).json();
  assert([20, 30].includes(latest.progress.progress.xp));
  assert.equal((await request('/api/progress', [], 'PUT')).status, 400);
  const item = JSON.parse(fs.readFileSync(new URL('../server/content/mantiq.json', import.meta.url))).items.find(i => i.interaction !== 'free_response_normalized');
  const grade = await request('/api/grade', { courseId: 'mantiq', itemId: item.id, response: item.answer });
  assert.equal(grade.status, 200); assert.equal((await grade.json()).correct, true);
  assert.equal(grade.headers.get('cache-control'), 'no-store');
  assert.equal((await request('/api/grade', { courseId: 'mantiq', itemId: 'missing', response: true })).status, 404);
  assert.equal((await request('/api/grade', { padding: 'x'.repeat(40000) })).status, 413);
  const invalid = await fetch(base + '/api/grade', { method: 'POST', body: '{invalid', headers: { 'Content-Type': 'application/json' } });
  assert.equal(invalid.status, 400);
  const logins = await Promise.all(Array.from({ length: 21 }, () => request('/api/auth/login', { email: 'absent@example.invalid', password: 'wrong-password' })));
  assert(logins.some(r => r.status === 429));
  console.log('Server checks passed: local authentication, protected progress, concurrent save conflict, invalid input, grading, body limits and auth throttling.');
  console.log('Postgres transaction requires validation against a configured test database; no production account was used.');
} finally {
  server.kill();
  if (server.exitCode == null) await once(server, 'exit');
  const resolved = path.resolve(temp), parent = path.resolve(os.tmpdir());
  if (path.dirname(resolved) !== parent || !path.basename(resolved).startsWith('mizan-server-check-')) throw new Error('Unexpected test cleanup path');
  fs.rmSync(resolved, { recursive: true, force: true });
}

import fs from 'node:fs';
import { grade } from './validator.js';

const curriculum = JSON.parse(fs.readFileSync(new URL('./content/mantiq.json', import.meta.url), 'utf8'));
const items = new Map(curriculum.items.map(item => [item.id, item]));
export const gradingInfo = { courseId: curriculum.id, version: curriculum.version, items: items.size };

export function gradeResponse(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)
    || body.courseId !== curriculum.id || typeof body.itemId !== 'string') {
    throw Object.assign(new Error('Choose a valid course and exercise.'), { status: 400 });
  }
  const item = items.get(body.itemId);
  if (!item) throw Object.assign(new Error('This exercise is no longer available. Reopen the lesson.'), { status: 404 });
  if (!Object.hasOwn(body, 'response') || !Number.isInteger(body.hintsUsed ?? 0) || (body.hintsUsed ?? 0) < 0) {
    throw Object.assign(new Error('Enter an answer before checking it.'), { status: 400 });
  }
  return grade(item, body.response, body.hintsUsed || 0);
}

export async function readBoundedJson(req, limit = 32768) {
  if (Number(req.headers['content-length']) > limit) throw Object.assign(new Error('The request is too large.'), { status: 413 });
  const chunks = [];
  let bytes = 0;
  for await (const chunk of req) {
    bytes += chunk.length;
    if (bytes > limit) throw Object.assign(new Error('The request is too large.'), { status: 413 });
    chunks.push(chunk);
  }
  if (!bytes) return {};
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { throw Object.assign(new Error('The request must contain valid JSON.'), { status: 400 }); }
}

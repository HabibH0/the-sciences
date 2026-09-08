// Shared concept evidence for the four native courses. Logic keeps its authored
// concept graph; both feed the same mastery engine and persisted course records.
import { COURSES, isCourseLoaded, courseIdForModule } from '../../content/index.js';
import { introduced, recordAttempt, MASTERY_DEFAULTS } from '../mizan/mastery/engine.js';
import { emptyCourse } from '../mizan/progress/model.js';
import { logicCourse } from './logic-course.js';
import { hashString } from '../reviewScheduler.js';

// Content is immutable after lazy loading. Cache only that content-derived graph,
// never learner progress; a replaced module array invalidates it automatically.
const catalogs = new Map();
const normalized = text => String(text || '').normalize('NFKC').toLowerCase()
  .replace(/[\u064b-\u065f\u0670\u06d6-\u06ed\u0640]/g, '')
  .replace(/[^\p{L}\p{N}]+/gu, ' ').trim().replace(/\s+/g, ' ');
const phrase = text => normalized(text).replace(/(^|\s)ال(?=[\u0621-\u064a])/g, '$1');
const contains = (text, term) => term.length >= 3 && ` ${text} `.includes(` ${term} `);
const usableAnchor = text => text.length >= 3 && !/^(yes|no|true|false|none|both|all|one|two|three|four|correct|incorrect|example|definition|notes|word|words)$/.test(text) && !/^\d+$/.test(text);
const strings = value => typeof value === 'string' ? [value] : Array.isArray(value) ? value.flatMap(strings)
  : value && typeof value === 'object' ? Object.values(value).flatMap(strings) : [];

function sourceBindings(lesson) {
  const anchors = new Map();
  lesson.concepts.forEach((concept, index) => {
    const terms = [concept.heading, ...(concept.masteryAliases || []), concept.exercise?.options?.[concept.exercise.correct]];
    for (const line of strings(concept.lines)) {
      for (const match of line.matchAll(/<bdi[^>]*>(.*?)<\/bdi>/g)) terms.push(match[1]);
    }
    for (const term of terms.filter(Boolean).flatMap(t => [t, t.split(/[()—–]/)[0], ...t.matchAll(/\(([^)]+)\)/g)].map(x => typeof x === 'string' ? x : x[1]))) {
      const key = phrase(term);
      if (!usableAnchor(key)) continue;
      if (!anchors.has(key)) anchors.set(key, new Set());
      anchors.get(key).add(index);
    }
  });
  return [...anchors].filter(([, ids]) => ids.size === 1).map(([text, ids]) => ({ text, index: [...ids][0] }));
}

export function nativeConceptId(moduleId, lessonId, index) {
  return `${moduleId}/${lessonId}/c${index}`;
}

export function masteryCourse(courseId) {
  if (courseId === 'mantiq') return logicCourse();
  if (!isCourseLoaded(courseId)) return null;
  const source = COURSES.find(c => c.id === courseId);
  if (!source) return null;
  if (catalogs.get(courseId)?.source === source.modules) return catalogs.get(courseId).course;
  const concepts = {}, lessons = {};
  for (const mod of source.modules) for (const lesson of mod.lessons) {
    const ids = lesson.concepts.map((concept, index) => {
      const id = nativeConceptId(mod.id, lesson.id, index);
      concepts[id] = { id, title: concept.heading, moduleId: mod.id, lessonId: lesson.id, index };
      return id;
    });
    lessons[`${mod.id}/${lesson.id}`] = { source: lesson, moduleId: mod.id, conceptIds: ids, anchors: sourceBindings(lesson) };
  }
  const course = { id: courseId, concepts, lessons, masteryDefaults: MASTERY_DEFAULTS };
  catalogs.set(courseId, { source: source.modules, course });
  return course;
}

export function lessonConceptIds(courseId, moduleId, lessonId) {
  const course = masteryCourse(courseId);
  return courseId === 'mantiq' ? course?.lessons[lessonId]?.metadata.concepts || []
    : course?.lessons[`${moduleId}/${lessonId}`]?.conceptIds || [];
}

// The same question in a lesson, quiz or review is ONE example. Choice order,
// exercise route and cosmetic punctuation cannot manufacture new evidence.
export function nativeEvidenceKey(item) {
  const text = item.sentence || item.source;
  const answer = item.labels || item.rows?.map(row => row.labels) || item.options?.[item.correct];
  const canonical = JSON.stringify([normalized(text || item.prompt || item.q), normalized(item.words?.join(' ')), normalized(JSON.stringify(answer || ''))]);
  // Store a compact, non-security fingerprint instead of repeating entire Arabic
  // questions in every attempt and concept window. Two hashes limit collisions.
  return `native-v1:${hashString(canonical).toString(36)}:${hashString([...canonical].reverse().join('')).toString(36)}`;
}

export function nativeEvidence(moduleId, lessonId, item, { conceptIndex, guided = false } = {}) {
  const courseId = courseIdForModule(moduleId), course = masteryCourse(courseId);
  const entry = course?.lessons[`${moduleId}/${lessonId}`];
  if (!entry || !item || item.kind === 'vocab') return null;
  const lesson = entry.source, metadata = item.mastery;
  let indices = metadata?.conceptIndices;
  let binding = 'authored';
  if (!Array.isArray(indices)) {
    const origin = conceptIndex ?? item.conceptIndex;
    if (Number.isInteger(origin)) { indices = [origin]; binding = 'source'; }
    else {
      const prompt = normalized(item.prompt || item.q);
      indices = lesson.concepts.flatMap((c, i) => c.exercise && normalized(c.exercise.prompt) === prompt ? [i] : []);
      binding = 'source';
      if (!indices.length) {
        // Only explicit references to a taught heading/alias qualify. Never infer
        // a target from distractors, a translation or general word similarity.
        const question = phrase(`${item.title || ''} ${item.prompt || item.q || ''}`);
        const labels = (item.labels || item.rows?.flatMap(row => row.labels.map(label => label.role)) || []).map(phrase);
        indices = lesson.concepts.flatMap((c, i) => {
          const terms = [c.heading, ...(c.masteryAliases || [])].map(phrase).filter(Boolean);
          return terms.some(term => contains(question, term) || labels.includes(term)) ? [i] : [];
        });
        binding = 'reference';
      }
      if (!indices.length) {
        // A unique, explicitly named term in the teaching text links recurring
        // examples to that teaching block. Ambiguous terms are excluded from the
        // index; generic yes/no and numeric answers never establish a binding.
        const answer = phrase(item.options?.[item.correct]);
        const labels = (item.labels || item.rows?.flatMap(row => row.labels.map(label => label.role)) || []).map(phrase);
        const exact = entry.anchors.filter(a => a.text === answer || labels.some(label => contains(label, a.text)));
        if (exact.length) indices = exact.map(a => a.index);
        else {
          const question = phrase(`${item.title || ''} ${item.prompt || item.q || ''}`);
          const matches = entry.anchors.filter(a => contains(question, a.text));
          // Several words about different concepts do not identify the skill
          // being tested. Leave such a question unlinked until an author tags it.
          if (new Set(matches.map(a => a.index)).size === 1) indices = matches.map(a => a.index);
        }
        binding = 'source-term';
      }
    }
  }
  const conceptIds = [...new Set(indices)].filter(i => Number.isInteger(i) && entry.conceptIds[i]).map(i => entry.conceptIds[i]);
  if (!conceptIds.length) return null;
  const analysis = Array.isArray(item.labels) || item.kind === 'tarkeeb';
  const prompt = item.prompt || item.q || '';
  // Definition recognition cannot stand in for application. Authors can mark
  // diagnostic/transfer items explicitly; structural reconstruction is level 5.
  const application = /[\u064b-\u065f]/.test(prompt) && !/defin|means?|meaning|called|term names/i.test(prompt);
  const difficulty = guided ? 1 : metadata?.difficulty ?? (analysis ? 5 : application ? 4 : 2);
  return { courseId, conceptIds, binding, key: metadata?.evidenceKey || nativeEvidenceKey(item),
    family: metadata?.family || (analysis ? 'structural-analysis' : application ? 'application' : 'recognition'),
    difficulty: Math.max(1, Math.min(5, Number(difficulty) || 2)), guided };
}

export function introduceNativeConcepts(progress, ids, now) {
  const next = { ...(progress || emptyCourse()), concepts: { ...progress?.concepts } };
  for (const id of ids) next.concepts[id] ||= introduced(id, now);
  return next;
}

export function recordNativeAttempt(progress, evidence, { id, sessionId, occurredAt, correct, hintsUsed = 0, mode = 'lesson' }) {
  if (!evidence || ![true, false].includes(correct)) return progress;
  const course = masteryCourse(evidence.courseId);
  if (!course) return progress;
  const p = introduceNativeConcepts(progress, evidence.conceptIds, occurredAt);
  return recordAttempt(p, { id, itemId: evidence.key, key: evidence.key, conceptIds: evidence.conceptIds,
    family: evidence.family, difficulty: evidence.difficulty, hintsUsed, guided: evidence.guided,
    grade: { correct, mistakes: [] }, occurredAt, sessionId, mode }, course);
}

// Old aggregate scores cannot tell us which question was independent or on
// which day it was answered. Preserve them and migrate COVERAGE only.
export function reconcileNativeCoverage(state, courseId, now) {
  const course = masteryCourse(courseId);
  if (!course || courseId === 'mantiq') return;
  let p = state.mizanCourses[courseId] || emptyCourse();
  for (const [key, { source: lesson, moduleId, conceptIds }] of Object.entries(course.lessons)) {
    const complete = state.completed[moduleId]?.[lesson.id];
    const session = state.studySessions?.[`${courseId}/${key}`];
    const reset = state.moduleResetAt?.[moduleId];
    const time = state.completedAt?.[moduleId]?.[lesson.id] || session?.updatedAt;
    const at = Number.isFinite(Date.parse(time)) ? new Date(time).toISOString() : now;
    const indices = new Set();
    if (complete) conceptIds.forEach((_, i) => indices.add(i));
    else {
      lesson.concepts.forEach((_, i) => {
        const ex = state.exStates?.[`${moduleId}_${lesson.id}_c${i}`];
        if (ex?.passed && (!reset || String(ex.submittedAt || '') > reset)) indices.add(i);
      });
      if (!reset || String(session?.updatedAt || '') > reset) {
        for (const step of session?.steps?.slice(0, session.stepIndex) || []) if (step.kind === 'teach') indices.add(step.conceptIndex);
      }
    }
    const ids = [...indices].map(i => conceptIds[i]).filter(Boolean);
    if (ids.some(id => !p.concepts[id])) p = introduceNativeConcepts(p, ids, at);
  }
  state.mizanCourses[courseId] = p;
}

export function masterySummary(state, courseId) {
  const course = masteryCourse(courseId);
  const ids = Object.keys(course?.concepts || {});
  const progress = state.mizanCourses?.[courseId]?.concepts || {};
  const known = ids.map(id => progress[id]).filter(Boolean);
  return { total: ids.length, introduced: known.length,
    competent: known.filter(c => c.level >= 3).length, mastered: known.filter(c => c.level >= 4).length };
}

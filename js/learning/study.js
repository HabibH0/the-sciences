import { makeLessonSession, sessionAvailable } from '../mizan/course/lesson-player.js';
import { introduced, recordAttempt } from '../mizan/mastery/engine.js';
import { emptyCourse } from '../mizan/progress/model.js';
import { logicCourse } from './logic-course.js';
import { nahwSteps, nativeSessionPosition } from './nahw.js';
import { sarfSteps } from './sarf.js';
import { introNahwSteps } from './intro-nahw.js';

export function studyKey(courseId, moduleId, lessonId) {
  return `${courseId}/${moduleId}/${lessonId}`;
}

export function grammarSteps(lesson) {
  if (lesson.learningModel === 'mizan-nahw') return nahwSteps(lesson);
  if (lesson.learningModel === 'mizan-sarf') return sarfSteps(lesson);
  if (lesson.learningModel === 'mizan-intro-nahw') return introNahwSteps(lesson);
  const steps = [];
  lesson.concepts.forEach((concept, index) => {
    steps.push({ id: `concept:${index}:teach`, kind: 'teach', conceptIndex: index });
    if (concept.exercise) steps.push({ id: `concept:${index}:check`, kind: 'check', conceptIndex: index });
  });
  (lesson.exercise?.items || []).forEach((_, index) => {
    steps.push({ id: `practice:${index}`, kind: 'practice', exerciseIndex: index });
  });
  if (lesson.summary) steps.push({ id: 'summary', kind: 'summary' });
  return steps;
}

export function createStudySession(state, mod, lesson, now, id) {
  const key = studyKey(state.courseId, mod.id, lesson.id);
  const existing = state.studySessions?.[key];
  if (existing?.version === 1 && Array.isArray(existing.steps) && existing.steps.length) {
    if (lesson.learningModel === 'mizan' && existing.logic && sessionAvailable(logicCourse(), existing)) return existing;
    const steps = grammarSteps(lesson);
    if (lesson.learningModel !== 'mizan' && !existing.logic) return { ...existing, steps, stepIndex: nativeSessionPosition(existing, steps) };
  }
  if (lesson.learningModel === 'mizan') {
    const p = state.mizanCourses?.mantiq || emptyCourse();
    const session = makeLessonSession(logicCourse(), lesson.id, p, id);
    return { ...session, version: 1, logic: true, updatedAt: now };
  }
  const steps = grammarSteps(lesson);
  // Old learners resume near their first unfinished concept. Existing
  // exercise evidence is reused, never turned into fabricated answers.
  let stepIndex = 0;
  for (let i = 0; i < lesson.concepts.length; i++) {
    const ex = state.exStates?.[`${mod.id}_${lesson.id}_c${i}`];
    if (ex?.passed) stepIndex = Math.min(steps.length - 1, steps.findIndex(s => s.conceptIndex === i && s.kind === 'check') + 1);
    else if (lesson.concepts[i].exercise) break;
  }
  return { id, version: 1, kind: 'lesson', lessonId: lesson.id, steps, stepIndex, index: 0, itemIds: [], updatedAt: now };
}

export function currentStudy(state) {
  return state.studySessions?.[studyKey(state.courseId, state.moduleId, state.lessonId)] || null;
}

export function studyStep(session) {
  return session?.steps?.[session.stepIndex || 0] || null;
}

export function mergeStudySessions(local = {}, remote = {}, moduleResetAt = {}) {
  local = normalizeStudySessions(local);
  remote = normalizeStudySessions(remote);
  const out = { ...remote };
  for (const [key, value] of Object.entries(local || {})) {
    const other = out[key];
    out[key] = !other || String(value?.updatedAt || '') >= String(other?.updatedAt || '') ? value : other;
  }
  for (const [key, session] of Object.entries(out)) {
    const reset = moduleResetAt[key.split('/')[1]];
    if (reset && String(session.updatedAt || '') <= reset) delete out[key];
  }
  return out;
}

const record = value => value && typeof value === 'object' && !Array.isArray(value);
const safeKey = key => !['__proto__', 'constructor', 'prototype'].includes(key);
const validTime = value => typeof value === 'string' && Number.isFinite(Date.parse(value));

export function normalizeStudySessions(input) {
  if (!record(input)) return {};
  return Object.fromEntries(Object.entries(input).filter(([key, s]) => safeKey(key) && record(s)
    && s.version === 1 && typeof s.id === 'string' && typeof s.lessonId === 'string'
    && Array.isArray(s.steps) && s.steps.length && s.steps.every(step => record(step) && ['teach', 'exercise', 'check', 'practice', 'analysis', 'summary'].includes(step.kind))
    && Number.isInteger(s.stepIndex) && s.stepIndex >= 0 && s.stepIndex < s.steps.length)
    .map(([key, s]) => [key, { ...s, ...(s.draft ? { draft: { ...s.draft, busy: false } } : {}) }]));
}

export function normalizeLogicProgress(input) {
  if (!record(input)) return {};
  return Object.fromEntries(Object.entries(input).filter(([key, p]) => safeKey(key) && record(p)).map(([key, p]) => {
    const concepts = Object.fromEntries(Object.entries(record(p.concepts) ? p.concepts : {}).filter(([id, c]) => safeKey(id) && record(c) && validTime(c.introducedAt))
      .map(([id, c]) => [id, { ...introduced(id, c.introducedAt), ...c, evidence: Array.isArray(c.evidence) ? c.evidence.filter(record) : [], mistakes: record(c.mistakes) ? c.mistakes : {} }]));
    const lessons = Object.fromEntries(Object.entries(record(p.lessons) ? p.lessons : {}).filter(([id, l]) => safeKey(id) && record(l)));
    const attempts = (Array.isArray(p.attempts) ? p.attempts : []).filter(a => record(a) && typeof a.id === 'string' && validTime(a.occurredAt)
      && Array.isArray(a.conceptIds) && record(a.grade) && [true, false, null].includes(a.grade.correct) && Array.isArray(a.grade.mistakes));
    return [key, { ...emptyCourse(), ...p, concepts, lessons, attempts }];
  }));
}

// Attempts are immutable evidence. Replaying their union prevents two
// devices' independently earned mastery from overwriting one another.
export function mergeLogicProgress(local = {}, remote = {}) {
  local = normalizeLogicProgress(local);
  remote = normalizeLogicProgress(remote);
  const out = {};
  for (const id of new Set([...Object.keys(local || {}), ...Object.keys(remote || {})])) {
    const a = local[id] || emptyCourse(), b = remote[id] || emptyCourse();
    const conceptResetAt = { ...a.conceptResetAt, ...b.conceptResetAt };
    const lessonResetAt = { ...a.lessonResetAt, ...b.lessonResetAt };
    for (const key of Object.keys(conceptResetAt)) conceptResetAt[key] = [a.conceptResetAt?.[key], b.conceptResetAt?.[key]].filter(Boolean).sort().at(-1);
    for (const key of Object.keys(lessonResetAt)) lessonResetAt[key] = [a.lessonResetAt?.[key], b.lessonResetAt?.[key]].filter(Boolean).sort().at(-1);
    const newest = String(a.lastStudiedAt || '') >= String(b.lastStudiedAt || '') ? a : b;
    const concepts = { ...b.concepts };
    for (const [key, value] of Object.entries(a.concepts || {})) {
      const other = concepts[key];
      concepts[key] = !other || String(value.lastAttemptAt || value.introducedAt || '') >= String(other.lastAttemptAt || other.introducedAt || '') ? value : other;
    }
    const lessons = { ...b.lessons };
    for (const [key, value] of Object.entries(a.lessons || {})) {
      const other = lessons[key];
      lessons[key] = { ...other, ...value, ...(other?.completedAt && !value.completedAt ? { completedAt: other.completedAt } : {}) };
    }
    const attempts = new Map((b.attempts || []).map(a => [a.id, a]));
    (a.attempts || []).forEach(a => attempts.set(a.id, a));
    for (const [key, c] of Object.entries(concepts)) if (conceptResetAt[key] && String(c.lastAttemptAt || c.introducedAt || '') <= conceptResetAt[key]) delete concepts[key];
    for (const [key, l] of Object.entries(lessons)) if (lessonResetAt[key] && String(l.completedAt || l.startedAt || '') <= lessonResetAt[key]) delete lessons[key];
    const sorted = [...attempts.values()].map(a => ({ ...a, conceptIds: a.conceptIds.filter(key => !conceptResetAt[key] || a.occurredAt > conceptResetAt[key]) }))
      .filter(a => a.conceptIds.length).sort((a, b) => a.occurredAt.localeCompare(b.occurredAt) || a.id.localeCompare(b.id));
    const course = logicCourse();
    let result = { ...newest, concepts, lessons, conceptResetAt, lessonResetAt, attempts: sorted, masteryNeedsReplay: true, reviewsCompleted: Math.max(a.reviewsCompleted || 0, b.reviewsCompleted || 0) };
    if (course && id === course.id) {
      let rebuilt = { ...result, attempts: [], concepts: Object.fromEntries(Object.entries(concepts).map(([key, c]) => [key, introduced(key, c.introducedAt)])) };
      for (const attempt of sorted) rebuilt = recordAttempt(rebuilt, attempt, course);
      result = { ...rebuilt, lastStudiedAt: result.lastStudiedAt, masteryNeedsReplay: false };
    }
    out[id] = result;
  }
  return out;
}

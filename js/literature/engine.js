// Pure acquisition engine. Main owns mutation/IO; render only consumes this API.
// Attempts are immutable evidence. A corrected answer never becomes a first-pass
// success, and two devices cannot erase each other's attempts when they merge.
export const PHASES = ['prepare', 'notice', 'manipulate', 'decode', 'understand', 'clean', 'transfer'];
export const ORDER_TYPES = new Set(['reorder_chunks', 'sentence_reconstruction', 'poetry_reorder']);
export const CHOICE_TYPES = new Set(['contextual_vocabulary', 'choose_meaning', 'pronoun_reference', 'clause_relationship', 'arabic_paraphrase', 'grammatical_function', 'contextual_fill_blank', 'interpretation_choice', 'comprehension', 'transfer_example']);
export const EXERCISE_TYPES = new Set([...ORDER_TYPES, ...CHOICE_TYPES, 'chunk_sentence']);
const object = value => !!value && typeof value === 'object' && !Array.isArray(value);
const safeId = value => typeof value === 'string' && /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,99}$/.test(value) && !['constructor', 'prototype', '__proto__'].includes(value);
const bounded = (value, max = 1000000) => Number.isFinite(value) ? Math.max(0, Math.min(max, Math.floor(value))) : 0;
const timestamp = value => bounded(value, 8640000000000000);
const answerValue = value => Number.isInteger(value) && value >= 0 && value < 100 ? value
  : Array.isArray(value) ? value.filter(n => Number.isInteger(n) && n >= 0 && n < 100).slice(0, 100) : null;
const clone = value => JSON.parse(JSON.stringify(value));

export function lessonSteps(lesson) {
  return [{ id: 'orientation', phase: 'prepare', type: 'orientation' },
    ...PHASES.flatMap(phase => phase === 'clean' ? [{ id: 'clean', phase, type: 'clean' }]
      : lesson.exercises.filter(e => e.phase === phase))];
}
export function emptyLiterature() { return { version: 1, runs: {} }; }
export function normalizeLiterature(value) {
  const result = emptyLiterature();
  if (!object(value) || !object(value.runs)) return result;
  for (const [id, raw] of Object.entries(value.runs)) {
    if (!safeId(id) || !object(raw) || !safeId(raw.lessonId)) continue;
    const run = { id, lessonId: raw.lessonId, revision: bounded(raw.revision), startedAt: timestamp(raw.startedAt), updatedAt: timestamp(raw.updatedAt), position: bounded(raw.position, 500), drafts: {}, help: {}, acknowledged: {}, attempts: [] };
    for (const [key, draft] of Object.entries(object(raw.drafts) ? raw.drafts : {})) {
      if (safeId(key) && object(draft)) run.drafts[key] = { answer: answerValue(draft.answer), updatedAt: timestamp(draft.updatedAt), checking: draft.checking === true, revealed: draft.revealed === true, conceptOpen: draft.conceptOpen === true };
    }
    for (const [key, count] of Object.entries(object(raw.help) ? raw.help : {})) if (safeId(key)) run.help[key] = bounded(count, 6);
    for (const [key, value] of Object.entries(object(raw.acknowledged) ? raw.acknowledged : {})) if (safeId(key) && ['ready', 'independent', 'with-effort', 'needs-support'].includes(value)) run.acknowledged[key] = value;
    const seen = new Set();
    for (const attempt of Array.isArray(raw.attempts) ? raw.attempts : []) {
      if (!object(attempt) || !safeId(attempt.id) || !safeId(attempt.exerciseId) || seen.has(attempt.id)) continue;
      seen.add(attempt.id);
      run.attempts.push({ id: attempt.id, exerciseId: attempt.exerciseId, at: timestamp(attempt.at), answer: answerValue(attempt.answer), hints: bounded(attempt.hints, 6) });
    }
    run.attempts.sort((a, b) => a.at - b.at || a.id.localeCompare(b.id));
    result.runs[id] = run;
  }
  return result;
}
export function mergeLiterature(local, remote) {
  const left = normalizeLiterature(local), right = normalizeLiterature(remote);
  const result = emptyLiterature();
  for (const id of new Set([...Object.keys(left.runs), ...Object.keys(right.runs)])) {
    const a = left.runs[id], b = right.runs[id];
    if (!a || !b) { result.runs[id] = clone(a || b); continue; }
    // A run ID is an immutable identity. A malformed collision cannot cross lessons.
    if (a.lessonId !== b.lessonId || a.revision !== b.revision) { result.runs[id] = clone(JSON.stringify(a) < JSON.stringify(b) ? a : b); continue; }
    const newest = a.updatedAt > b.updatedAt ? a : a.updatedAt < b.updatedAt ? b : JSON.stringify(a) < JSON.stringify(b) ? a : b;
    const run = { ...clone(newest), drafts: {}, help: {}, acknowledged: {}, attempts: [] };
    for (const key of new Set([...Object.keys(a.drafts), ...Object.keys(b.drafts)])) {
      const da = a.drafts[key], db = b.drafts[key];
      run.drafts[key] = clone(!da ? db : !db ? da : da.updatedAt > db.updatedAt ? da : da.updatedAt < db.updatedAt ? db : JSON.stringify(da) < JSON.stringify(db) ? da : db);
    }
    for (const key of new Set([...Object.keys(a.help), ...Object.keys(b.help)])) run.help[key] = Math.max(a.help[key] || 0, b.help[key] || 0);
    for (const key of new Set([...Object.keys(a.acknowledged), ...Object.keys(b.acknowledged)])) run.acknowledged[key] = newest.acknowledged[key] || a.acknowledged[key] || b.acknowledged[key];
    const attempts = new Map();
    for (const attempt of [...a.attempts, ...b.attempts]) {
      const existing = attempts.get(attempt.id);
      if (!existing || JSON.stringify(attempt) < JSON.stringify(existing)) attempts.set(attempt.id, attempt);
    }
    run.attempts = [...attempts.values()].sort((x, y) => x.at - y.at || x.id.localeCompare(y.id));
    result.runs[id] = run;
  }
  return result;
}
export function createLiteratureRun(lesson, id, now) {
  return { id, lessonId: lesson.id, revision: lesson.revision, startedAt: now, updatedAt: now, position: 0, drafts: {}, help: {}, acknowledged: {}, attempts: [] };
}
export function latestRun(progress, lesson) {
  return Object.values(progress?.runs || {}).filter(r => r.lessonId === lesson.id && r.revision === lesson.revision)
    .sort((a, b) => b.startedAt - a.startedAt || b.id.localeCompare(a.id))[0] || null;
}
// Reconcile imported drafts against the actual content after lazy loading.
// Structural normalization alone cannot know an exercise's option count.
export function reconcileLiteratureRun(lesson, run) {
  const result = clone(run), exercises = new Map(lesson.exercises.map(e => [e.id, e]));
  result.attempts = result.attempts.filter(a => exercises.has(a.exerciseId) && responseReady(exercises.get(a.exerciseId), a.answer));
  for (const [id, draft] of Object.entries(result.drafts)) {
    const exercise = exercises.get(id);
    if (!exercise) { delete result.drafts[id]; continue; }
    if (Array.isArray(draft.answer)) draft.answer = [...new Set(draft.answer)].filter(i => i < exercise.options.length).slice(0, ORDER_TYPES.has(exercise.type) ? exercise.answer.length : exercise.options.length);
    else if (draft.answer !== null && (!CHOICE_TYPES.has(exercise.type) || draft.answer >= exercise.options.length)) draft.answer = null;
    if (!result.attempts.some(a => a.exerciseId === id)) draft.checking = false;
  }
  for (const id of Object.keys(result.help)) {
    const exercise = exercises.get(id);
    if (!exercise) delete result.help[id];
    else result.help[id] = Math.min(result.help[id], helpSteps(lesson, exercise).length);
  }
  for (const id of Object.keys(result.acknowledged)) if (!['orientation', 'clean'].includes(id)) delete result.acknowledged[id];
  if (result.acknowledged.orientation !== 'ready') delete result.acknowledged.orientation;
  if (!['independent', 'with-effort', 'needs-support'].includes(result.acknowledged.clean)) delete result.acknowledged.clean;
  result.position = currentLiteratureStep(lesson, result).index;
  return result;
}
export function responseReady(exercise, response) {
  if (!exercise.options) return false;
  if (CHOICE_TYPES.has(exercise.type)) return Number.isInteger(response) && response >= 0 && response < exercise.options.length;
  return Array.isArray(response) && response.length > 0 && new Set(response).size === response.length
    && response.every(n => Number.isInteger(n) && n >= 0 && n < exercise.options.length)
    && (!ORDER_TYPES.has(exercise.type) || response.length === exercise.answer.length);
}
export function gradeLiterature(exercise, response) {
  if (!responseReady(exercise, response)) return false;
  if (CHOICE_TYPES.has(exercise.type)) return response === exercise.answer;
  const actual = exercise.type === 'chunk_sentence' ? [...response].sort((a, b) => a - b) : response;
  return [exercise.answer, ...(exercise.acceptedAnswers || [])].some(expected => {
    const answer = exercise.type === 'chunk_sentence' ? [...expected].sort((a, b) => a - b) : expected;
    return actual.length === answer.length && actual.every((v, i) => v === answer[i]);
  });
}
export function exerciseAttempts(run, exercise) { return (run?.attempts || []).filter(a => a.exerciseId === exercise.id); }
export function stepPassed(run, step) {
  return ['orientation', 'clean'].includes(step.type) ? !!run?.acknowledged[step.id]
    : exerciseAttempts(run, step).some(a => gradeLiterature(step, a.answer));
}
export function runComplete(lesson, run) { return !!run && lessonSteps(lesson).every(step => stepPassed(run, step)); }
export function currentLiteratureStep(lesson, run) {
  const steps = lessonSteps(lesson);
  const firstMissing = steps.findIndex(step => !stepPassed(run, step));
  const max = firstMissing < 0 ? steps.length : firstMissing;
  const index = Math.min(run?.position || 0, max);
  return { index, step: steps[index] || null, steps };
}
export function exerciseFeedback(exercise, attempt) {
  if (!attempt) return '';
  return exercise.feedback?.[attempt.answer] || exercise.explanation || 'Look at the relationships between the chunks, then reconstruct the requested meaning.';
}
export function helpSteps(lesson, exercise) {
  if (exercise.phase !== 'decode') return [{ kind: 'hint', text: exercise.hint || 'Read the Arabic in meaningful groups. Keep the participants and the order of events in view.' }];
  return [
    { kind: 'chunks', label: 'Meaningful chunks', chunks: lesson.chunks },
    { kind: 'vocabulary', label: 'Vocabulary in context', text: lesson.support.vocabulary },
    { kind: 'structure', label: 'Follow the structure', text: lesson.support.structure },
    { kind: 'paraphrase', label: 'Simpler Arabic', text: lesson.support.paraphrase, arabic: true },
    { kind: 'translation', label: 'English translation', text: lesson.source.translation },
    { kind: 'explanation', label: 'Full explanation', text: lesson.support.explanation },
  ];
}
// Stable per-run permutation; original option indexes remain the answer IDs.
export function optionOrder(run, exercise) {
  let seed = 2166136261;
  for (const char of `${run.id}:${exercise.id}`) seed = Math.imul(seed ^ char.charCodeAt(0), 16777619) >>> 0;
  const items = exercise.options.map((_, i) => i);
  for (let i = items.length - 1; i > 0; i--) { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; const j = seed % (i + 1); [items[i], items[j]] = [items[j], items[i]]; }
  if (ORDER_TYPES.has(exercise.type) && gradeLiterature(exercise, items) && items.length > 1) items.push(items.shift());
  return exercise.type === 'chunk_sentence' ? exercise.options.map((_, i) => i) : items;
}
// All returned states are new values; the main action assigns them to state.
export function updateLiteratureRun(lesson, run, action, value, now, attemptId) {
  now = Math.max(timestamp(now), run.updatedAt + 1);
  const next = clone(run), { step, index, steps } = currentLiteratureStep(lesson, next);
  if (!step) return next;
  const draft = next.drafts[step.id] || { answer: null, checking: false, revealed: false, conceptOpen: false, updatedAt: now };
  const passed = stepPassed(next, step);
  if (action === 'back') { next.position = Math.max(0, index - 1); }
  else if (action === 'next' && passed) next.position = index + 1;
  else if (action === 'acknowledge' && step.type === 'orientation') { next.acknowledged[step.id] = 'ready'; next.position = index + 1; }
  else if (action === 'acknowledge' && step.type === 'clean' && ['independent', 'with-effort', 'needs-support'].includes(value)) {
    next.acknowledged[step.id] = value;
    next.position = value === 'needs-support' ? steps.findIndex(s => s.phase === 'decode') : index + 1;
    if (value === 'needs-support') {
      const decode = steps[next.position];
      next.help[decode.id] = Math.max(1, next.help[decode.id] || 0);
    }
  }
  else if (action === 'help' && step.options) next.help[step.id] = Math.min(helpSteps(lesson, step).length, (next.help[step.id] || 0) + 1);
  else if (action === 'reveal' && step.phase === 'decode') draft.revealed = true;
  else if (action === 'concept' && step.concept) { draft.conceptOpen = !draft.conceptOpen; next.help[step.id] = Math.max(1, next.help[step.id] || 0); }
  else if (action === 'retry' && !passed) { draft.checking = false; draft.answer = null; }
  else if (action === 'select' && step.options && !passed && !draft.checking) {
    if (!Number.isInteger(value) || value < 0 || value >= step.options.length) return next;
    if (CHOICE_TYPES.has(step.type)) draft.answer = value;
    else {
      const selected = Array.isArray(draft.answer) ? draft.answer : [];
      draft.answer = selected.includes(value) ? selected.filter(v => v !== value) : [...selected, value];
    }
  }
  else if (action === 'clear' && !passed && !draft.checking) draft.answer = null;
  else if (action === 'check' && step.options && !passed && !draft.checking && responseReady(step, draft.answer) && safeId(attemptId)) {
    next.attempts.push({ id: attemptId, exerciseId: step.id, at: now, answer: clone(draft.answer), hints: next.help[step.id] || 0 });
    draft.checking = true;
  }
  draft.updatedAt = now;
  next.drafts[step.id] = draft;
  next.position = Math.min(next.position, steps.length);
  next.updatedAt = now;
  return next;
}

export function runMetrics(lesson, run) {
  const independent = e => { const attempts = exerciseAttempts(run, e); return attempts.length > 0 && gradeLiterature(e, attempts[0].answer) && attempts[0].hints === 0; };
  const decode = lesson.exercises.filter(e => e.phase === 'decode');
  const transfer = lesson.exercises.filter(e => e.phase === 'transfer');
  return { complete: runComplete(lesson, run), independentDecode: decode.every(independent),
    independentTransfer: transfer.filter(independent).length, transferTotal: transfer.length,
    attempts: run?.attempts.length || 0, hints: Object.values(run?.help || {}).reduce((a, b) => a + b, 0),
    usedTranslation: decode.some(e => (run?.help[e.id] || 0) >= 5) };
}
export function literatureInsights(lessons, progress) {
  const targets = {}, completed = new Set(), trend = [], runs = Object.values(progress?.runs || {}).sort((a, b) => a.startedAt - b.startedAt);
  for (const run of runs) {
    const lesson = lessons.find(l => l.id === run.lessonId && l.revision === run.revision);
    if (!lesson) continue;
    const metric = runMetrics(lesson, run);
    if (metric.complete) { completed.add(lesson.id); trend.push({ lessonId: lesson.id, at: run.updatedAt, independent: metric.independentDecode }); }
    for (const exercise of lesson.exercises) {
      const attempts = exerciseAttempts(run, exercise);
      if (!attempts.length) continue;
      const first = attempts[0], successful = gradeLiterature(exercise, first.answer) && first.hints === 0;
      for (const id of exercise.targets || []) {
        const target = targets[id] ||= { contexts: new Set(), recognised: new Set(), transfer: new Set(), struggledAt: 0, recognisedAt: 0 };
        const context = `${lesson.id}/${exercise.id}`;
        target.contexts.add(context);
        if (successful) { target.recognised.add(context); target.recognisedAt = Math.max(target.recognisedAt, first.at); if (exercise.phase === 'transfer') target.transfer.add(context); }
        else target.struggledAt = Math.max(target.struggledAt, first.at);
      }
    }
  }
  const knowledge = Object.fromEntries(Object.entries(targets).map(([id, t]) => [id, {
    encounters: t.contexts.size, independentContexts: t.recognised.size, transferContexts: t.transfer.size,
    status: t.struggledAt > t.recognisedAt ? 'struggled' : t.recognised.size >= 3 && t.transfer.size >= 2 ? 'likely-mastered' : t.recognised.size ? 'recognised' : 'struggled',
    repeated: t.contexts.size > 1,
  }]));
  return { completed: [...completed], knowledge, trend: trend.slice(-10) };
}

export function validateLiteratureLesson(lesson, knownTargets = null) {
  const errors = [], fail = message => errors.push(`${lesson.id}: ${message}`);
  if (!safeId(lesson.id) || !Number.isInteger(lesson.revision) || !lesson.objectives?.length) fail('identity, revision and objectives required');
  if (!lesson.source?.sentenceIds?.length && !lesson.source?.sentences?.length) fail('canonical source references required');
  if (!lesson.chunks?.length || !lesson.support?.paraphrase || !lesson.support?.structure || !lesson.support?.vocabulary || !lesson.support?.explanation) fail('complete progressive support required');
  const ids = new Set(['orientation', 'clean']);
  for (const e of lesson.exercises || []) {
    if (!safeId(e.id) || ids.has(e.id)) fail(`duplicate/invalid exercise id ${e.id}`);
    ids.add(e.id);
    if (!EXERCISE_TYPES.has(e.type) || !PHASES.includes(e.phase) || !e.prompt || !e.targets?.length) fail(`incomplete exercise ${e.id}`);
    if (!Array.isArray(e.options) || e.options.length < 2 || !e.options.every(o => typeof o === 'string' && o.trim()) || !gradeLiterature(e, e.answer)) fail(`invalid answer/options ${e.id}`);
    if (CHOICE_TYPES.has(e.type) && (e.feedback?.length !== e.options.length || !e.feedback.every(Boolean))) fail(`every distractor needs feedback: ${e.id}`);
    if (!CHOICE_TYPES.has(e.type) && !e.explanation) fail(`manipulation needs explanation: ${e.id}`);
    if (e.phase !== 'decode' && !e.hint) fail(`hint required: ${e.id}`);
    if (knownTargets && e.targets?.some(id => !knownTargets.has(id))) fail(`unknown language target: ${e.id}`);
  }
  for (const phase of PHASES.filter(p => p !== 'clean')) if (!lesson.exercises?.some(e => e.phase === phase)) fail(`missing ${phase} phase`);
  if (!lesson.exercises?.some(e => e.phase === 'manipulate' && ORDER_TYPES.has(e.type))) fail('requires manipulation');
  const transfer = lesson.exercises?.filter(e => e.phase === 'transfer') || [];
  if (transfer.length < 2 || !transfer.some(e => e.arabic)) fail('requires multiple novel transfer contexts');
  const comparable = text => String(text || '').normalize('NFKD').replace(/[\p{M}\p{P}]/gu, '').replace(/\s+/g, ' ').trim();
  const source = comparable(lesson.source.text), contexts = new Set();
  for (const e of transfer) {
    const text = comparable(e.arabic || (Array.isArray(e.answer) ? e.answer.map(i => e.options[i]).join(' ') : ''));
    if (!text || contexts.has(text)) fail(`transfer needs a distinct context: ${e.id}`);
    if (source && source.includes(text)) fail('transfer repeats original source');
    contexts.add(text);
  }
  return errors;
}

import assert from 'node:assert/strict';
import fs from 'node:fs';
import { COURSE } from '../content-mantiq/course.js';
import { MODULES } from '../content-mantiq/index.js';
import { VISUALS } from '../content-mantiq/visuals.js';
import { makeLessonSession, advanceTeaching } from '../js/mizan/course/lesson-player.js';
import { emptyCourse } from '../js/mizan/progress/model.js';
import { recordAttempt } from '../js/mizan/mastery/engine.js';
import { completeLesson, practiceKey } from '../js/mizan/course/engine.js';
import { gradeResponse } from '../server/grading.js';
import { responseComplete, logicExerciseHtml } from '../js/learning/exercises.js';
import { getAt } from '../js/mizan/exercises/validator.js';

export function validateLogic() {
  const raw = JSON.parse(fs.readFileSync(new URL('../server/content/mantiq.json', import.meta.url), 'utf8'));
  const privateItems = new Map(raw.items.map(i => [i.id, i]));
  assert.equal(Object.keys(COURSE.lessons).length, 30);
  assert.equal(Object.keys(COURSE.concepts).length, 120);
  assert.equal(COURSE.items.length, 3066);
  assert.equal(new Set(COURSE.items.map(i => i.id)).size, COURSE.items.length);
  const bank = MODULES.flatMap(m => m.lessons.flatMap(l => l.bank));
  assert.equal(bank.length, 2817);
  assert.equal(new Set(bank.map(i => i.logicItemId)).size, 2817);
  for (const item of COURSE.items) {
    assert(!Object.hasOwn(item, 'answer'), `${item.id}: public answer leak`);
    assert(!Object.hasOwn(item, 'feedback'), `${item.id}: public feedback leak`);
    const source = privateItems.get(item.id);
    assert(source, `${item.id}: no server grader`);
    const result = gradeResponse({ courseId: COURSE.id, itemId: item.id, response: source.answer });
    assert.equal(result.correct, item.reflection ? null : true, item.id);
    if (!item.reflection) {
      assert(responseComplete(item, source.answer), `${item.id}: correct answer cannot be submitted`);
      for (const field of item.fields) {
        assert(['text', 'number', 'boolean', 'list', 'select'].includes(field.kind), `${item.id}: unsupported field ${field.kind}`);
        if (field.options?.length) assert(field.options.some(v => JSON.stringify(v) === JSON.stringify(getAt(source.answer, field.path))), `${item.id}: answer missing from options`);
      }
      assert.equal(gradeResponse({ courseId: COURSE.id, itemId: item.id, response: null }).correct, false, item.id);
    }
    assert.doesNotThrow(() => logicExerciseHtml(item, { response: source.answer, originalResponse: source.answer, grade: result }));
  }
  const types = new Set();
  let p = emptyCourse(), planned = 0;
  for (const mod of MODULES) for (const lesson of mod.lessons) {
    const authored = COURSE.lessons[lesson.id];
    assert(authored.markdown && authored.notesHtml && authored.learning_steps?.length, lesson.id);
    for (const step of authored.learning_steps) {
      if (step.kind === 'teach') {
        assert(step.html?.length, `${lesson.id}: missing compiled teaching`);
        if (step.visual) assert(VISUALS[step.visual.kind], `${lesson.id}: missing visual`);
      }
    }
    const session = makeLessonSession(COURSE, lesson.id, p, `verify-${lesson.id}`);
    assert.deepEqual(session.steps.filter(s => s.kind === 'teach').map(s => s.stepId), authored.learning_steps.filter(s => s.kind === 'teach').map(s => s.id));
    assert(session.itemIds.length >= 2, `${lesson.id}: insufficient practice`);
    p.session = session;
    p.lessons[lesson.id] = { lessonId: lesson.id, read: false, itemIds: session.itemIds, sessionId: session.id };
    for (const step of session.steps) {
      const now = '2026-09-07T12:00:00.000Z';
      if (step.kind === 'teach') p = advanceTeaching(COURSE, p, now);
      else {
        const item = COURSE.items.find(i => i.id === step.itemId);
        assert(item.concepts.every(id => p.concepts[id]), `${lesson.id}: practice before teaching ${item.id}`);
        types.add(item.interaction);
        const response = privateItems.get(item.id).answer;
        p = recordAttempt(p, { id: `${session.id}:${item.id}`, itemId: item.id, key: practiceKey(item), conceptIds: item.concepts,
          family: item.family, difficulty: item.difficulty, hintsUsed: 0, guided: step.guided, response,
          grade: gradeResponse({ courseId: COURSE.id, itemId: item.id, response }), occurredAt: now, sessionId: session.id, mode: 'lesson' }, COURSE);
        p.session.stepIndex++;
        planned++;
      }
    }
    p = completeLesson(COURSE, lesson.id, p, '2026-09-07T12:00:00.000Z');
    assert(p.lessons[lesson.id].completedAt);
  }
  return { modules: MODULES.length, lessons: 30, concepts: 120, bank: bank.length, planned, interactionTypes: types.size };
}

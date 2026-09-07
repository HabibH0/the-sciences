// Ported from Mīzān src/course/lesson-player.ts by scripts/import-mizan.mjs.
import { exposureKey, startLesson } from './engine.js';
import { introduced } from '../mastery/engine.js';
import { inProgress, preserveLesson } from './sessions.js';
export function sessionAvailable(course, session) {
    const lesson = session.lessonId ? course.lessons[session.lessonId] : undefined;
    return !!lesson && !!session.steps?.length && session.steps.every((step)=>step.kind === 'teach' ? lesson.learning_steps?.some((s)=>s.kind === 'teach' && s.id === step.stepId) : course.items.some((i)=>i.id === step.itemId));
}
export function makeLessonSession(course, id, p, sessionId) {
    const lesson = course.lessons[id], known = new Set(Object.keys(p.concepts)), used = new Set(), steps = [];
    const unit = course.units.find((u)=>u.topics.some((t)=>t.lesson_id === id))?.unit.id;
    const previouslySeen = new Set(p.attempts.flatMap((a)=>{
        const item = course.items.find((i)=>i.id === a.itemId);
        return item ? [
            exposureKey(item)
        ] : [];
    }));
    for (const step of lesson.learning_steps ?? []){
        if (step.kind === 'teach') {
            step.concepts.forEach((c)=>known.add(c));
            steps.push({
                kind: 'teach',
                stepId: step.id
            });
            continue;
        }
        const candidates = course.items.filter((i)=>!i.reflection && (i.unit === unit || i.unit === 'cross_course_review') && i.concepts.some((c)=>step.concepts.includes(c)) && i.concepts.every((c)=>known.has(c)) && !(i.template === 'recognise_proposition' && steps.some((s)=>s.kind === 'exercise' && s.itemId.startsWith('recognise_proposition::'))) && !used.has(exposureKey(i)) && (!step.templates || step.templates.includes(i.template)));
        const rank = (i)=>(previouslySeen.has(exposureKey(i)) ? 1000 : 0) + (i.template === 'recognise_proposition' && i.source_example?.startsWith('expression_') ? -10 : 0) + (i.unit === 'cross_course_review' ? 20 : 0) + (i.concepts.length - step.concepts.filter((c)=>i.concepts.includes(c)).length) * 4 + (step.stage === 'guided' ? i.difficulty : -Math.min(i.difficulty, 5));
        candidates.sort((a, b)=>rank(a) - rank(b) || a.id.localeCompare(b.id));
        let count = 0;
        const families = new Set();
        while(candidates.length && count < Math.min(step.limit, 2)){
            let index = candidates.findIndex((i)=>!families.has(i.family) && !previouslySeen.has(exposureKey(i)));
            if (index < 0) index = candidates.findIndex((i)=>!previouslySeen.has(exposureKey(i)));
            if (index < 0) index = candidates.findIndex((i)=>!families.has(i.family));
            if (index < 0) index = 0;
            const item = candidates.splice(index, 1)[0];
            if (used.has(exposureKey(item))) continue;
            used.add(exposureKey(item));
            families.add(item.family);
            steps.push({
                kind: 'exercise',
                itemId: item.id,
                guided: step.stage === 'guided'
            });
            count++;
        }
    }
    return {
        id: sessionId,
        kind: 'lesson',
        lessonId: id,
        index: 0,
        stepIndex: 0,
        steps,
        itemIds: steps.filter((s)=>s.kind === 'exercise').map((s)=>s.itemId)
    };
}
export function startGuidedLesson(course, id, p, now, sessionId) {
    const next = startLesson(course, id, preserveLesson(p), now);
    if (p.session?.lessonId === id && sessionAvailable(course, p.session) && p.session.steps && (p.session.stepIndex ?? 0) < p.session.steps.length) return next;
    const paused = next.pausedLessons?.[id];
    if (inProgress(paused) && sessionAvailable(course, paused)) {
        const pausedLessons = {
            ...next.pausedLessons
        };
        delete pausedLessons[id];
        return {
            ...next,
            session: paused,
            pausedLessons
        };
    }
    const session = makeLessonSession(course, id, next, sessionId);
    return {
        ...next,
        session,
        lessons: {
            ...next.lessons,
            [id]: {
                ...next.lessons[id],
                sessionId,
                itemIds: session.itemIds,
                read: false,
                position: 0
            }
        }
    };
}
export function advanceTeaching(course, p, now) {
    const s = p.session;
    if (!s?.steps || !s.lessonId) throw new Error('No guided lesson in progress.');
    const current = s.steps[s.stepIndex ?? 0];
    if (current?.kind !== 'teach') throw new Error('Submit the exercise before continuing.');
    const content = course.lessons[s.lessonId].learning_steps?.find((x)=>x.id === current.stepId);
    if (content?.kind !== 'teach') throw new Error('The lesson content changed. Reopen the lesson.');
    const concepts = {
        ...p.concepts
    };
    content.concepts.forEach((id)=>{
        concepts[id] ??= introduced(id, now);
    });
    const stepIndex = (s.stepIndex ?? 0) + 1;
    const remainingTeaching = s.steps.slice(stepIndex).some((x)=>x.kind === 'teach');
    return {
        ...p,
        concepts,
        lastStudiedAt: now,
        session: {
            ...s,
            stepIndex
        },
        lessons: {
            ...p.lessons,
            [s.lessonId]: {
                ...p.lessons[s.lessonId],
                read: !remainingTeaching,
                position: stepIndex
            }
        }
    };
}

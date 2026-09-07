// Ported from Mīzān src/course/engine.ts by scripts/import-mizan.mjs.
import { introduced } from '../mastery/engine.js';
export const lessonOrder = (course)=>course.units.flatMap((u)=>u.topics.map((t)=>t.lesson_id));
export function missingPrerequisites(course, lessonId, progress) {
    const lesson = course.lessons[lessonId];
    if (!lesson) return [];
    const taught = new Set(lesson.metadata.concepts);
    return [
        ...new Set(lesson.metadata.concepts.flatMap((c)=>course.concepts[c].prerequisites))
    ].filter((c)=>!taught.has(c) && !progress.concepts[c]);
}
export function canOpenLesson(course, id, progress) {
    const order = lessonOrder(course), index = order.indexOf(id);
    if (index < 0) return false;
    if (progress.lessons[id]?.completedAt) return true;
    return missingPrerequisites(course, id, progress).length === 0 && (index === 0 || !!progress.lessons[order[index - 1]]?.completedAt || course.lessons[id].metadata.concepts.every((c)=>(progress.concepts[c]?.level ?? 0) >= 2));
}
export function nextLesson(course, progress) {
    return lessonOrder(course).find((id)=>!progress.lessons[id]?.completedAt && canOpenLesson(course, id, progress));
}
export const practiceKey = (item)=>`${item.template}::${item.source_example ?? 'concept'}::${item.concepts.join(':')}`;
export const exposureKey = (item)=>item.source_example ? `example:${item.source_example}` : `text:${item.stimulus.toLowerCase().replace(/\s+/g, ' ').trim()}`;
export function selectLessonItems(course, lessonId, progress, limit = 6) {
    const concepts = course.lessons[lessonId].metadata.concepts;
    const known = new Set([
        ...Object.keys(progress.concepts),
        ...concepts
    ]);
    const unit = course.units.find((u)=>u.topics.some((t)=>t.lesson_id === lessonId))?.unit.id;
    const candidates = course.items.filter((i)=>(i.unit === unit || i.unit === 'cross_course_review') && !i.reflection && i.concepts.some((c)=>concepts.includes(c)) && i.concepts.every((c)=>known.has(c)));
    const seen = new Set();
    const unique = candidates.sort((a, b)=>a.stage - b.stage || a.difficulty - b.difficulty || a.id.localeCompare(b.id)).filter((i)=>{
        const key = exposureKey(i);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
    const early = unique.filter((i)=>i.stage <= 3), application = unique.filter((i)=>i.stage > 3);
    return [
        ...early.slice(0, application.length ? 2 : limit),
        ...application
    ].slice(0, limit);
}
export function startLesson(course, id, p, now) {
    if (!canOpenLesson(course, id, p)) throw new Error('Complete the earlier lesson and introduce its prerequisites first.');
    return {
        ...p,
        currentLessonId: id,
        lastStudiedAt: now,
        lessons: {
            ...p.lessons,
            [id]: p.lessons[id] ?? {
                lessonId: id,
                startedAt: now,
                position: 0,
                read: false
            }
        }
    };
}
export function markRead(course, id, p, now) {
    const next = startLesson(course, id, p, now), concepts = {
        ...p.concepts
    };
    course.lessons[id].metadata.concepts.forEach((c)=>{
        concepts[c] ??= introduced(c, now);
    });
    return {
        ...next,
        concepts,
        lessons: {
            ...next.lessons,
            [id]: {
                ...next.lessons[id],
                read: true
            }
        }
    };
}
export function completeLesson(course, id, p, now) {
    const pausedLessons = {
        ...p.pausedLessons
    };
    delete pausedLessons[id];
    if (!p.lessons[id]?.read) throw new Error('Read the lesson before completing it.');
    const planned = p.lessons[id].itemIds ?? [];
    if (planned.some((itemId)=>!p.attempts.some((a)=>a.itemId === itemId && a.sessionId === p.lessons[id].sessionId))) throw new Error('Finish the planned exercises first.');
    return {
        ...p,
        pausedLessons,
        lastStudiedAt: now,
        lessons: {
            ...p.lessons,
            [id]: {
                ...p.lessons[id],
                completedAt: now,
                position: planned.length
            }
        }
    };
}

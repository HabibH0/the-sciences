// Ported from Mīzān src/course/sessions.ts by scripts/import-mizan.mjs.
export function reviewSessionAvailable(course, session) {
    return inProgress(session) && session.kind !== 'lesson' && session.itemIds.slice(session.index).every((id)=>course.items.some((i)=>i.id === id));
}
export function inProgress(s) {
    return !!s && (s.steps ? (s.stepIndex ?? 0) < s.steps.length : s.index < s.itemIds.length);
}
export function preserveLesson(p) {
    return inProgress(p.session) && p.session.lessonId ? {
        ...p,
        pausedLessons: {
            ...p.pausedLessons,
            [p.session.lessonId]: p.session
        }
    } : p;
}

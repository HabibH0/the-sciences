// Ported from Mīzān src/mastery/engine.ts by scripts/import-mizan.mjs.
export const MASTERY_DEFAULTS = { minimum_accuracy: 0.85, minimum_independent_items: 4 };
const intervals = [
    1,
    3,
    10,
    30
];
const addDays = (now, days)=>new Date(Date.parse(now) + days * 86400000).toISOString();
export function introduced(conceptId, now) {
    return {
        conceptId,
        mastery: 0,
        level: 1,
        attempts: 0,
        correctAttempts: 0,
        introducedAt: now,
        lastAttemptAt: null,
        lastSuccessfulRecallAt: null,
        nextReviewAt: addDays(now, 1),
        intervalIndex: 0,
        highestDifficulty: 0,
        evidence: [],
        mistakes: {}
    };
}
export function recordAttempt(progress, attempt, course) {
    if (progress.attempts.some((a)=>a.id === attempt.id)) return progress;
    const next = {
        ...progress,
        concepts: {
            ...progress.concepts
        },
        attempts: [
            ...progress.attempts,
            attempt
        ],
        lastStudiedAt: attempt.occurredAt
    };
    if (attempt.grade.correct === null) return next;
    for (const id of attempt.conceptIds){
        const prev = progress.concepts[id] ?? introduced(id, attempt.occurredAt);
        const day = attempt.occurredAt.slice(0, 10);
        const duplicate = prev.evidence.some((e)=>e.key === attempt.key && e.day === day);
        const independent = attempt.hintsUsed === 0 && !attempt.guided;
        const correct = attempt.grade.correct;
        const evidence = duplicate ? prev.evidence.map((e)=>e.key === attempt.key && e.day === day ? {
                ...e,
                correct: e.correct && correct,
                independent: e.independent && independent
            } : e) : [
            ...prev.evidence,
            {
                key: attempt.key,
                family: attempt.family,
                day,
                correct,
                independent,
                difficulty: attempt.difficulty,
                sessionId: attempt.sessionId
            }
        ].slice(-40);
        const unique = new Set(evidence.map((e)=>e.key)).size;
        const successful = evidence.filter((e)=>e.correct && e.independent);
        const accuracy = evidence.length ? successful.length / evidence.length : 0;
        const days = new Set(successful.map((e)=>e.day)).size;
        const families = new Set(successful.map((e)=>e.family)).size;
        const maxDifficulty = Math.max(0, ...successful.map((e)=>e.difficulty));
        const minAccuracy = course.concepts[id]?.mastery?.minimum_accuracy ?? course.masteryDefaults.minimum_accuracy ?? MASTERY_DEFAULTS.minimum_accuracy;
        const minApplication = course.concepts[id]?.mastery?.minimum_application_questions ?? 2;
        const application = new Set(successful.filter((e)=>e.difficulty >= 4).map((e)=>e.key)).size;
        let level = 1;
        if (unique >= 3 && accuracy >= 0.6) level = 2;
        if (unique >= Math.max(6, course.masteryDefaults.minimum_independent_items ?? MASTERY_DEFAULTS.minimum_independent_items) && accuracy >= minAccuracy && application >= minApplication && days >= 2) level = 3;
        if (level >= 3 && unique >= 8 && maxDifficulty >= 5 && families >= 2 && days >= 2) level = 4;
        const span = successful.length ? (Date.parse(day) - Date.parse(successful[0].day)) / 86400000 : 0;
        if (level >= 4 && unique >= 10 && accuracy >= 0.88 && days >= 3 && span >= 10) level = 5;
        const dueRecall = prev.nextReviewAt && Date.parse(attempt.occurredAt) >= Date.parse(prev.nextReviewAt);
        const firstSuccessToday = !prev.evidence.some((e)=>e.day === day && e.correct && e.independent);
        const intervalIndex = correct && independent ? Math.min(3, prev.intervalIndex + (dueRecall && firstSuccessToday && !duplicate ? 1 : 0)) : 0;
        const mistakes = {
            ...prev.mistakes
        };
        for (const tag of attempt.grade.mistakes)mistakes[tag] = (mistakes[tag] ?? 0) + 1;
        next.concepts[id] = {
            ...prev,
            attempts: prev.attempts + 1,
            correctAttempts: prev.correctAttempts + Number(correct),
            level,
            mastery: Math.round(Math.min([
                0,
                19,
                49,
                74,
                89,
                100
            ][level], accuracy * 100)),
            evidence,
            highestDifficulty: maxDifficulty,
            lastAttemptAt: attempt.occurredAt,
            lastSuccessfulRecallAt: correct && independent ? attempt.occurredAt : prev.lastSuccessfulRecallAt,
            intervalIndex,
            nextReviewAt: attempt.mode !== 'lesson' || prev.reviewSchedule || correct && independent && !dueRecall && prev.attempts > 0 ? prev.nextReviewAt : addDays(attempt.occurredAt, intervals[intervalIndex]),
            mistakes
        };
    }
    return next;
}

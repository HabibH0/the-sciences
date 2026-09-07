// Ported from Mīzān src/exercises/validator.ts by scripts/import-mizan.mjs.
export function normalize(value) {
    return value.normalize('NFKC').trim().toLocaleLowerCase('en').replace(/_/g, ' ').replace(/[’‘]/g, "'").replace(/[.!?]+$/, '').replace(/\s+/g, ' ');
}
export function equivalent(expected, actual) {
    if (typeof expected === 'string') return typeof actual === 'string' && normalize(expected) === normalize(actual);
    if (Array.isArray(expected)) return Array.isArray(actual) && expected.length === actual.length && expected.every((v, i)=>equivalent(v, actual[i]));
    if (expected && typeof expected === 'object') return !!actual && typeof actual === 'object' && !Array.isArray(actual) && Object.keys(expected).length === Object.keys(actual).length && Object.entries(expected).every(([k, v])=>equivalent(v, actual[k]));
    return expected === actual;
}
export function leaves(value, prefix = '') {
    if (value && typeof value === 'object' && !Array.isArray(value)) return Object.entries(value).flatMap(([k, v])=>leaves(v, prefix ? `${prefix}.${k}` : k));
    return [
        {
            path: prefix || 'answer',
            value
        }
    ];
}
export function getAt(value, path) {
    if (path === 'answer') return value;
    return path.split('.').reduce((v, k)=>v && typeof v === 'object' ? v[k] : undefined, value);
}
export function grade(item, response, hintsUsed = 0) {
    if (item.interaction === 'free_response_normalized') return {
        correct: null,
        score: 0,
        maxPoints: item.scoring.max_points,
        message: 'Reflection saved. Compare your response with the supplied rubric; this response has not been graded.',
        answer: item.answer,
        mistakes: [],
        fields: []
    };
    const fields = leaves(item.answer).map(({ path, value })=>({
            path,
            correct: equivalent(value, getAt(response, path))
        }));
    const correct = equivalent(item.answer, response);
    const ratio = item.scoring.partial_credit ? fields.filter((f)=>f.correct).length / fields.length : Number(correct);
    const penalty = Math.min(Math.max(0, hintsUsed), item.feedback.hints.length) * (item.scoring.hint_penalty ?? 0);
    const score = Math.max(0, ratio - penalty) * item.scoring.max_points;
    const distractor = typeof response === 'string' ? item.feedback.distractors[response] : undefined;
    return {
        correct,
        score,
        maxPoints: item.scoring.max_points,
        message: !correct && distractor ? distractor.message : item.feedback.correct,
        answer: item.answer,
        mistakes: correct ? [] : distractor ? [
            distractor.misconception
        ] : [],
        fields
    };
}

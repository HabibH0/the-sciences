// Ported from Mīzān src/progress/model.ts by scripts/import-mizan.mjs.
export const masteryNames = [
    'Unseen',
    'Introduced',
    'Familiar',
    'Competent',
    'Mastered',
    'Retained'
];
export const emptyCourse = ()=>({
        concepts: {},
        lessons: {},
        attempts: [],
        reviewsCompleted: 0
    });
export const emptyLearner = ()=>({
        version: 1,
        courses: {},
        settings: {
            largeText: false
        }
    });

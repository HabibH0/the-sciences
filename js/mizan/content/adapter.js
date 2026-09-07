// Ported from Mīzān src/content/adapter.ts by scripts/import-mizan.mjs.
import { leaves } from '../exercises/validator.js';
import { projectStimulus } from './stimulus.js';
export function validateRuntime(raw) {
    if (!raw || typeof raw !== 'object') throw new Error('Course payload must be an object');
    const r = raw;
    if (r.schema_version !== 1 || !r.course?.course?.id || !r.build?.content_version || !Array.isArray(r.units) || !r.lessons || !r.concepts || !Array.isArray(r.practice_items)) throw new Error('Invalid or unsupported course payload');
    const seen = new Set();
    const unique = (id)=>{
        if (!id || seen.has(id)) throw new Error(`Duplicate or missing ID: ${id}`);
        seen.add(id);
    };
    const refs = (ids)=>{
        if (!Array.isArray(ids) || ids.some((id)=>!r.concepts[id])) throw new Error('Unknown concept reference');
    };
    Object.entries(r.concepts).forEach(([id, c])=>{
        unique(id);
        if (c.id !== id || !c.title?.en) throw new Error(`Invalid concept ${id}`);
        if (c.definition !== undefined && typeof c.definition !== 'string' && (!c.definition || typeof c.definition.en !== 'string' || c.definition.ar !== undefined && typeof c.definition.ar !== 'string')) throw new Error(`Invalid concept definition: ${id}`);
        refs(c.prerequisites);
    });
    const visiting = new Set(), visited = new Set();
    function visit(id) {
        if (visiting.has(id)) throw new Error(`Prerequisite cycle: ${id}`);
        if (visited.has(id)) return;
        visiting.add(id);
        r.concepts[id].prerequisites.forEach(visit);
        visiting.delete(id);
        visited.add(id);
    }
    Object.keys(r.concepts).forEach(visit);
    Object.entries(r.lessons).forEach(([id, l])=>{
        unique(id);
        if (l.metadata?.id !== id || !l.metadata.title || typeof l.markdown !== 'string') throw new Error(`Invalid lesson ${id}`);
        refs(l.metadata.concepts);
        if (l.learning_steps !== undefined) {
            if (!Array.isArray(l.learning_steps) || !l.learning_steps.length) throw new Error(`Empty lesson flow: ${id}`);
            const stepIds = new Set();
            for (const step of l.learning_steps){
                if (!step.id || stepIds.has(step.id)) throw new Error(`Duplicate or missing step in ${id}`);
                stepIds.add(step.id);
                refs(step.concepts);
                if (step.kind === 'teach' ? typeof step.markdown !== 'string' || !step.markdown.trim() : step.kind !== 'practice' || !Number.isInteger(step.limit) || step.limit < 1) throw new Error(`Invalid lesson step: ${id}/${step.id}`);
            }
        }
    });
    r.units.forEach((u)=>{
        unique('unit:' + u.unit.id);
        if (!u.unit.title?.en || !Array.isArray(u.topics)) throw new Error('Invalid unit');
        u.topics.forEach((t)=>{
            unique(`topic:${t.id}`);
            if (!r.lessons[t.lesson_id]) throw new Error(`Missing lesson: ${t.lesson_id}`);
            refs(t.concepts);
        });
    });
    r.practice_items.forEach((i)=>{
        unique(i.id);
        refs(i.concepts);
        if (i.unit !== 'cross_course_review' && !r.units.some((u)=>u.unit.id === i.unit) || !i.concepts.length || !i.template || (i.source_example === null ? !i.generated_example : typeof i.source_example !== 'string') || !i.interaction || typeof i.prompt !== 'string' || typeof i.stimulus !== 'string' || i.answer === undefined || !Array.isArray(i.options) || typeof i.feedback?.correct !== 'string' || !i.feedback.correct || !Array.isArray(i.feedback.hints) || !Number.isInteger(i.difficulty) || i.difficulty < 1 || i.difficulty > 7 || !Number.isInteger(i.stage) || i.stage < 1 || i.stage > 7) throw new Error(`Invalid practice item: ${i.id}`);
    });
}
export function itemIssue(item) {
    if (item.template === 'concept_review' && item.interaction === 'single_choice') {
        if (new Set(item.options).size < 2) return 'Recognition question lacks distinct alternatives';
        const normalize = (text)=>text.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
        if (typeof item.answer === 'string' && ` ${normalize(`${item.prompt} ${item.stimulus}`)} `.includes(` ${normalize(item.answer)} `)) return 'Recognition question reveals its answer';
    }
    if (item.template === 'concept_review' && item.assessment_domain === 'prerequisite_graph') return 'Prerequisite metadata is not a learner-facing exercise';
    if (/\{[a-z_]+\}/i.test(item.prompt)) return 'Unresolved prompt placeholder';
    if (projectStimulus(item) === undefined) return 'Structured stimulus lacks sufficient prompt-facing information';
    if (typeof item.answer === 'string' && item.options.length && !item.options.includes(item.answer)) return 'Canonical answer is absent from options';
    if (!item.stimulus.trim()) return 'Missing stimulus';
    return undefined;
}
export function publicItem(item) {
    const { answer, feedback, ...prompt } = item;
    const fields = leaves(answer).map(({ path, value })=>({
            path,
            label: path === 'answer' ? 'Your answer' : path.replace(/[._]/g, ' '),
            options: item.response_options?.[path],
            kind: Array.isArray(value) ? 'list' : typeof value === 'boolean' ? 'boolean' : typeof value === 'number' ? 'number' : 'text'
        }));
    const options = [
        ...prompt.options
    ];
    let seed = Array.from(item.id).reduce((n, c)=>Math.imul(n, 31) + c.charCodeAt(0) | 0, 7) >>> 0;
    for(let i = options.length - 1; i > 0; i--){
        seed = Math.imul(seed, 1664525) + 1013904223 >>> 0;
        const j = seed % (i + 1);
        [options[i], options[j]] = [
            options[j],
            options[i]
        ];
    }
    return {
        ...prompt,
        options,
        stimulus: projectStimulus(item) ?? '',
        hints: feedback.hints,
        fields,
        reflection: item.interaction === 'free_response_normalized'
    };
}
export function adapt(raw) {
    validateRuntime(raw);
    const r = raw, issues = [];
    const items = r.practice_items.flatMap((i)=>{
        const reason = itemIssue(i);
        if (reason) {
            issues.push({
                itemId: i.id,
                reason
            });
            return [];
        }
        return [
            publicItem(i)
        ];
    });
    return {
        id: r.course.course.id,
        title: r.course.course.title,
        description: r.course.course.description.en,
        version: r.build.content_version,
        units: [
            ...r.units
        ].sort((a, b)=>a.unit.order - b.unit.order),
        lessons: Object.fromEntries(Object.entries(r.lessons).map(([id, lesson])=>[
                id,
                {
                    ...lesson,
                    learning_steps: lesson.learning_steps ?? [
                        {
                            id: `${id}:source`,
                            kind: 'teach',
                            title: lesson.metadata.title,
                            markdown: lesson.markdown,
                            concepts: lesson.metadata.concepts
                        },
                        {
                            id: `${id}:practice`,
                            kind: 'practice',
                            concepts: lesson.metadata.concepts,
                            limit: 2,
                            stage: 'independent'
                        }
                    ]
                }
            ])),
        concepts: r.concepts,
        items,
        issues,
        misconceptions: r.misconceptions,
        masteryDefaults: r.course.mastery_defaults
    };
}

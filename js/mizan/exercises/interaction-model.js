// Ported from Mīzān src/exercises/interaction-model.ts by scripts/import-mizan.mjs.
import { normalize } from './validator.js';
export function selectedWords(stimulus, response) {
    if (typeof response !== 'string' || !response.trim()) return [];
    const words = stimulus.split(/\s+/), target = normalize(response);
    for(let start = 0; start < words.length; start++)for(let end = start + 1; end <= words.length; end++)if (normalize(words.slice(start, end).join(' ')) === target) return Array.from({
        length: end - start
    }, (_, i)=>start + i);
    return [];
}
export function restoreTokens(response, bank) {
    if (typeof response !== 'string' || !response.trim()) return [];
    const text = response.trim().replace(/[.!?]+$/, '');
    const solve = (rest, available)=>{
        if (!rest) return [];
        for(let i = 0; i < available.length; i++){
            const token = available[i];
            if (rest === token || rest.startsWith(token + ' ')) {
                const tail = solve(rest.slice(token.length).trimStart(), available.filter((_, n)=>n !== i));
                if (tail) return [
                    token,
                    ...tail
                ];
            }
        }
        return undefined;
    };
    return solve(text, [
        ...bank
    ].sort((a, b)=>b.length - a.length)) ?? [
        response
    ];
}
export function moveEntry(entries, index, delta) {
    const next = [
        ...entries
    ], target = index + delta;
    if (target < 0 || target >= entries.length) return next;
    [next[index], next[target]] = [
        next[target],
        next[index]
    ];
    return next;
}
export function paintRegion(response, region, tool) {
    const order = [
        'subject_only',
        'overlap',
        'predicate_only'
    ];
    const shades = new Set(response.shaded_regions ?? []), marks = new Set(response.x_regions ?? []);
    shades.delete(region);
    marks.delete(region);
    if (tool === 'shade') shades.add(region);
    if (tool === 'exists') marks.add(region);
    return {
        ...response,
        shaded_regions: order.filter((r)=>shades.has(r)),
        x_regions: order.filter((r)=>marks.has(r))
    };
}

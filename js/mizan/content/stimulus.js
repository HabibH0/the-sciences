// Ported from Mīzān src/content/stimulus.ts by scripts/import-mizan.mjs.
export function projectStimulus(item) {
    if (!item.stimulus.trim().startsWith('{')) return item.stimulus;
    let d;
    try {
        d = JSON.parse(item.stimulus);
    } catch  {
        return undefined;
    }
    const words = (s)=>typeof s === 'string' ? s.replace(/_/g, ' ') : '';
    switch(d.type){
        case 'categorical_syllogism':
            return [
                d.major_premise?.text,
                d.minor_premise?.text,
                typeof d.conclusion === 'object' ? d.conclusion.text : undefined
            ].every((x)=>typeof x === 'string') ? `Premise 1: ${d.major_premise?.text}\nPremise 2: ${d.minor_premise?.text}\nConclusion: ${typeof d.conclusion === 'object' ? d.conclusion.text : ''}` : undefined;
        case 'hypothetical_argument':
            return d.antecedent && d.consequent && d.second_premise && d.conclusion ? `If ${words(d.antecedent)}, then ${words(d.consequent)}.\nSecond premise: ${words(d.second_premise)}.\nConclusion: ${words(d.conclusion)}.` : undefined;
        case 'pure_hypothetical_argument':
            return Array.isArray(d.chain) ? `${d.chain.join('\n')}\nConclusion: ${words(d.conclusion)}` : undefined;
        case 'induction_case':
            return d.observed && d.conclusion_scope ? `Observed: ${words(d.observed)}\nConclusion scope: ${words(d.conclusion_scope)}` : undefined;
        case 'analogy_case':
            return d.source && d.target ? `Source: ${words(d.source)}\nTarget: ${words(d.target)}\nSimilarities: ${(d.similarities ?? []).map((s)=>words(s.feature)).join(', ')}\nDifferences: ${(d.dissimilarities ?? []).map((s)=>words(s.feature)).join(', ')}` : undefined;
        case 'square_pair':
            return Array.isArray(d.forms) ? `Forms: ${d.forms.join(' and ')}\nMatching conditions: ${d.conditions_match ? 'yes' : 'no'}` : undefined;
        default:
            return undefined;
    }
}

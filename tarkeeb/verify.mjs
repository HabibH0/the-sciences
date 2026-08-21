import { validate, buildTree, toGraphData, allEdges, segmentsOf } from './tarkeeb-lib.js';
import fatihah from './al-fatihah.js';
import imran   from './al-imran.js';

let bad = 0;
for (const s of [fatihah, imran]){
  const problems = validate(s);
  const words = s.graphs.reduce((a,g)=>a+g.words.length,0);
  const segs  = s.graphs.reduce((a,g)=>a+segmentsOf(g).length,0);
  const edges = s.graphs.reduce((a,g)=>a+allEdges(g).length,0);
  console.log(`${s.name.translit}: ${s.graphs.length} graphs · ${words} words · ${segs} segments · ${edges} edges`);
  for (const g of s.graphs){
    const t = buildTree(g);
    const d = toGraphData(g);
    if (!t.roots.length) problems.push(`${g.id}: tree has no root`);
    if (!d.nodes.length) problems.push(`${g.id}: no nodes`);
    for (const l of d.links)
      if (!d.nodes.some(n=>n.id===l.source) || !d.nodes.some(n=>n.id===l.target))
        problems.push(`${g.id}: link ${l.source}->${l.target} does not resolve`);
  }
  problems.forEach(p => { console.log('  ✗ ' + p); bad++; });
}
console.log(bad ? `\n${bad} problem(s)` : '\nAll checks passed.');

/* morphology coverage */
import { rootIndex } from './tarkeeb-lib.js';
for (const s of [fatihah, imran]){
  const words = s.graphs.flatMap(g=>g.words);
  const real  = words.filter(w=>w.ref);
  const withM = real.filter(w=>w.morphology);
  const withR = real.filter(w=>w.morphology?.root);
  const roots = Object.keys(rootIndex(s)).length;
  console.log(`${s.name.translit}: morphology on ${withM.length}/${real.length} words · ${withR.length} carry a root · ${roots} distinct roots`);
  if (withM.length !== real.length) console.log('  ✗ some words lack morphology');
}

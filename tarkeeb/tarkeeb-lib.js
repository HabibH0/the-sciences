/**
 * tarkeeb-lib.js — shared tables and helpers for the treebank data modules.
 *
 * SCHEMA
 * ------
 * surah = {
 *   chapter, name:{ar,translit,en}, coverage, graphCount,
 *   graphs: [ {
 *     id,            // "3:7d"
 *     title,         // "3:7 · 14–18"
 *     words:  [ { ar, ref?, translit?, gloss?, elided?, context?,
 *                  segments:[ { id, pos, posName?, root?, ar?, translit?,
 *                               location?, features? } ],
 *                  morphology?: { location, root, irab, segments:[{tag,description}] },
 *                  segmentCountMismatch?: { graph, site } } ],
 *     phrases:[ { id, type, members:[segmentId] } ],       // PP | VS | NS
 *     edges:  [ { dep, head, rel, labelAt?, context?, note? } ],
 *     attachments: [ { dep, head, rel, note? } ]           // at least one end is a phrase
 *   } ]
 * }
 *
 * words are RIGHT-TO-LEFT: index 0 is the first (rightmost) word.
 * segments are right-to-left inside their word, so the P of بِسْمِ comes first.
 *
 * EDGE DIRECTION follows the corpus documentation: "B → A means that B
 * depends on A". `dep` is B, `head` is A, and `rel` is the Arabic label the
 * site prints on that arc. `labelAt` names a different node when the site's
 * label describes the governed word rather than the dependent itself.
 *
 * elided:true  — a node the corpus supplies but the text does not contain
 *                (a hidden pronoun, an unstated predicate, the vocative يا).
 * context:true — a word or edge carried in from an earlier graph of the same
 *                verse, drawn greyed for orientation.
 *
 * `edges` connects segments to segments. `attachments` covers arcs where one
 * end is a phrase node (a PP hanging on its governor, a VS acting as a
 * relative clause). Use allEdges() to get both at once.
 *
 * MORPHOLOGY comes from the corpus's per-token pages (wordmorphology.jsp):
 * the triliteral root, the part-of-speech description for each segment, and
 * the Arabic iʿrāb line. It sits on the word as `morphology`, and — when the
 * site's segment count matches the graph's — `posName` and `root` are also
 * copied onto each segment for convenience. The corpus does not publish a
 * lemma on these pages, so there is no lemma field.
 *
 * `segmentCountMismatch` marks the one place the two views of the site differ:
 * for ٱهْدِنَا (1:6:1) the morphology page counts the implicit subject pronoun
 * as a third segment, while the dependency graph draws it as its own elided
 * node. Both are the corpus's own data, presented differently.
 */

export const POS = {
  N:    { ar:'اسم',            en:'noun' },
  PN:   { ar:'اسم علم',        en:'proper noun' },
  ADJ:  { ar:'صفة',            en:'adjective' },
  V:    { ar:'فعل',            en:'verb' },
  P:    { ar:'حرف جر',         en:'preposition' },
  PRON: { ar:'ضمير',           en:'pronoun' },
  REL:  { ar:'اسم موصول',      en:'relative pronoun' },
  DEM:  { ar:'اسم إشارة',      en:'demonstrative pronoun' },
  COND: { ar:'اسم شرط',        en:'conditional noun' },
  CONJ: { ar:'حرف عطف',        en:'coordinating conjunction' },
  REM:  { ar:'الواو استئنافية', en:'resumption particle' },
  RSLT: { ar:'الفاء واقعة في جواب الشرط', en:'result particle' },
  NEG:  { ar:'حرف نفي',        en:'negative particle' },
  PRO:  { ar:'حرف نهي',        en:'prohibition particle' },
  ACC:  { ar:'حرف نصب',        en:'accusative particle (إنّ and sisters)' },
  EXP:  { ar:'أداة استثناء',   en:'exceptive particle' },
  RES:  { ar:'أداة حصر',       en:'restriction particle' },
  EXL:  { ar:'حرف تفصيل',      en:'explanation particle (أمّا)' },
  VOC:  { ar:'أداة نداء',      en:'vocative particle' },
  INTG: { ar:'اسم استفهام',    en:'interrogative noun' },
  LOC:  { ar:'ظرف مكان',       en:'location adverb' },
  T:    { ar:'ظرف زمان',       en:'time adverb' },
  INL:  { ar:'حروف مقطعة',     en:'Quranic initials' },
};

export const RELATIONS = {
  'فاعل':        { en:'subject of a verb' },
  'نائب فاعل':   { en:'subject of a passive' },
  'مفعول به':    { en:'object' },
  'مفعول لأجله': { en:'accusative of purpose' },
  'مبتدأ':       { en:'subject of a nominal sentence' },
  'خبر':         { en:'predicate' },
  'مضاف إليه':   { en:'second term of a genitive construction' },
  'صفة':         { en:'adjectival description' },
  'بدل':         { en:'apposition' },
  'معطوف':       { en:'coordinated element' },
  'توكيد':       { en:'emphasis' },
  'حال':         { en:'circumstantial accusative' },
  'مجرور':       { en:'noun governed by a preposition' },
  'متعلق':       { en:'phrase attached to its governor' },
  'صلة':         { en:'relative clause' },
  'نفي':         { en:'negation' },
  'منادي':       { en:'the one being called' },
  'شرط':         { en:'condition' },
  'جواب شرط':    { en:'answer to a condition' },
  'تفصيل':       { en:'the case singled out by أمّا' },
  'مستثنى':      { en:'the excepted element after إلّا' },
  'حصر':         { en:'restriction after a negation' },
  'اسم «إن»':    { en:'the noun governed by إنّ' },
  'خبر «إن»':    { en:'the predicate of إنّ' },
  'اسم «لا»':    { en:'the noun governed by لا' },
  'خبر «لا»':    { en:'the predicate of لا' },
};

export const PHRASE_TYPES = {
  PP: { ar:'جار ومجرور', en:'prepositional phrase' },
  VS: { ar:'جملة فعلية', en:'verbal sentence' },
  NS: { ar:'جملة اسمية', en:'nominal sentence' },
};

/* Colours the corpus uses, if you want to match its rendering. */
export const POS_COLOUR = {
  N:'#3f7fd0', PN:'#12908f', ADJ:'#8e44ad', P:'#c0392b', V:'#2f9e44',
  PRON:'#3f7fd0', REL:'#8a7a1f', DEM:'#8a7a1f', COND:'#8a7a1f',
  CONJ:'#3b3bc4', REM:'#3b3bc4', RSLT:'#3b3bc4', NEG:'#ef8a1f', PRO:'#ef8a1f',
  ACC:'#e0219b', EXP:'#e0219b', RES:'#e0219b', EXL:'#e0219b',
  VOC:'#8e9296', INTG:'#c0392b', LOC:'#ef8a1f', T:'#ef8a1f', INL:'#ef8a1f',
};
export const REL_COLOUR = {
  'مجرور':'#c0392b', 'متعلق':'#ef8a1f', 'نفي':'#ef8a1f', 'شرط':'#ef8a1f',
  'معطوف':'#e0219b', 'توكيد':'#e0219b', 'مستثنى':'#e0219b', 'حصر':'#e0219b',
  'تفصيل':'#e0219b', 'جواب شرط':'#e0219b',
  'صلة':'#8a7a1f', 'صفة':'#8e44ad', 'حال':'#2f9e44', 'منادي':'#2f9e44',
  'خبر':'#8e9296', 'مفعول به':'#8e9296', 'مفعول لأجله':'#8e9296',
  'خبر «إن»':'#8e9296', 'خبر «لا»':'#8e9296',
};
export const PHRASE_COLOUR = { PP:'#c0392b', VS:'#2f9e44', NS:'#3f7fd0' };

/* ------------------------------------------------------------------ */

/** Every segment in a graph, right to left. */
export const segmentsOf = graph => graph.words.flatMap(w => w.segments);

/** Look up a segment or phrase by id within one graph. */
export function nodeOf(graph, id){
  const s = segmentsOf(graph).find(x => x.id === id);
  if (s) return { kind:'segment', ...s };
  const p = graph.phrases.find(x => x.id === id);
  if (p) return { kind:'phrase', ...p };
  return null;
}

/** Morphology for the word a segment belongs to (null when elided). */
export const morphologyOf = (graph, segId) => (wordOf(graph, segId) || {}).morphology || null;

/** Every distinct root used in a surah, with the words that carry it. */
export function rootIndex(surah){
  const idx = {};
  for (const g of surah.graphs)
    for (const w of g.words){
      const r = w.morphology?.root;
      if (!r) continue;
      (idx[r] ??= []).push({ graph:g.id, location:w.morphology.location, ar:w.ar, gloss:w.gloss ?? null });
    }
  return idx;
}

/** The word a segment belongs to. */
export const wordOf = (graph, segId) =>
  graph.words.find(w => w.segments.some(s => s.id === segId)) || null;

/** edges + attachments in one list. */
export const allEdges = graph =>
  graph.edges.map(e => ({ ...e, kind:'segment' }))
    .concat(graph.attachments.map(e => ({ ...e, kind:'phrase' })));

/** Find a graph by id, e.g. "3:7d". */
export const getGraph = (surah, id) => surah.graphs.find(g => g.id === id) || null;

/** Every graph belonging to one verse, e.g. verse 7 of chapter 3. */
export const graphsOfVerse = (surah, verse) =>
  surah.graphs.filter(g => g.id.split(':')[1].replace(/[a-z]/g,'') === String(verse));

/**
 * Nest a graph into a tree. Segments swallowed by a phrase become children of
 * that phrase, so the result mirrors the boxed groupings on corpus.quran.com.
 * Returns { roots, orphans, attachesTo }. `orphans` are particles the corpus
 * leaves unattached (CONJ, REM, RSLT). `attachesTo` lists edges whose head is
 * a context word from an earlier graph, i.e. where this graph hooks on.
 */
export function buildTree(graph, { includeElided = true, includeContext = false } = {}){
  const nodes = new Map();
  for (const p of graph.phrases)
    nodes.set(p.id, { id:p.id, kind:'phrase', type:p.type, children:[] });
  for (const w of graph.words){
    if (w.elided && !includeElided) continue;
    if (w.context && !includeContext) continue;
    for (const s of w.segments)
      nodes.set(s.id, { id:s.id, kind:'segment', pos:s.pos, ar:s.ar ?? w.ar, children:[] });
  }
  const edges = allEdges(graph).filter(e => includeContext || !e.context);
  const claimed = new Set(edges.map(e => e.dep));

  const inPhrase = new Map();
  for (const p of graph.phrases)
    for (const m of p.members) if (!claimed.has(m)) inPhrase.set(m, p.id);
  for (const [seg, pid] of inPhrase){
    const child = nodes.get(seg), parent = nodes.get(pid);
    if (child && parent) parent.children.push(child);
  }
  const attachesTo = [];
  const linked = [];
  for (const e of edges){
    const dep = nodes.get(e.dep), head = nodes.get(e.head);
    if (!dep) continue;
    if (!head){
      /* the governor sits in an excluded (context) word — record where this
         graph hooks on, and leave the dependent as a root */
      attachesTo.push({ dep: e.dep, head: e.head, rel: e.rel });
      continue;
    }
    dep.rel = e.rel;
    head.children.push(dep);
    linked.push(e.dep);
  }
  const parented = new Set([...inPhrase.keys(), ...linked]);
  const roots = [...nodes.values()].filter(n => !parented.has(n.id));
  const orphan = id => {
    const s = segmentsOf(graph).find(x => x.id === id);
    return s && ['CONJ','REM','RSLT'].includes(s.pos);
  };
  return { id:graph.id,
           roots: roots.filter(n => !orphan(n.id)),
           orphans: roots.filter(n => orphan(n.id)),
           attachesTo };
}

/** Flat node/link lists for cytoscape, vis-network, d3-force, etc. */
export function toGraphData(graph, { includeContext = true } = {}){
  const nodes = [
    ...graph.words.flatMap(w => w.segments.map(s => ({
      id:s.id, kind:'segment', pos:s.pos, ar:s.ar ?? w.ar,
      word:w.ref ?? null, elided:!!w.elided, context:!!w.context,
      colour: POS_COLOUR[s.pos] ?? null,
    }))),
    ...graph.phrases.map(p => ({ id:p.id, kind:'phrase', type:p.type,
                                 colour: PHRASE_COLOUR[p.type] ?? null })),
  ];
  const links = allEdges(graph)
    .filter(e => includeContext || !e.context)
    .map(e => ({ source:e.dep, target:e.head, rel:e.rel,
                 en: RELATIONS[e.rel]?.en ?? null,
                 labelAt: e.labelAt ?? e.dep,
                 context: !!e.context,
                 colour: REL_COLOUR[e.rel] ?? '#3f7fd0' }));
  return { nodes, links };
}

/** Structural check. Returns a list of problems; empty means clean. */
export function validate(surah){
  const problems = [];
  for (const g of surah.graphs){
    const segs = new Set(segmentsOf(g).map(s => s.id));
    const phrs = new Set(g.phrases.map(p => p.id));
    const seen = new Set(); const deps = [];
    for (const s of segmentsOf(g)){
      if (seen.has(s.id)) problems.push(`${g.id}: duplicate segment id ${s.id}`);
      seen.add(s.id);
      if (!POS[s.pos]) problems.push(`${g.id}: unknown POS ${s.pos} on ${s.id}`);
    }
    for (const p of g.phrases){
      if (!PHRASE_TYPES[p.type]) problems.push(`${g.id}: unknown phrase type ${p.type}`);
      for (const m of p.members)
        if (!segs.has(m)) problems.push(`${g.id}: phrase ${p.id} member ${m} missing`);
    }
    for (const e of allEdges(g)){
      const ok = id => segs.has(id) || phrs.has(id);
      if (!ok(e.dep))  problems.push(`${g.id}: edge dep ${e.dep} unresolved`);
      if (!ok(e.head)) problems.push(`${g.id}: edge head ${e.head} unresolved`);
      if (e.labelAt && !ok(e.labelAt)) problems.push(`${g.id}: labelAt ${e.labelAt} unresolved`);
      if (!RELATIONS[e.rel]) problems.push(`${g.id}: unknown relation "${e.rel}"`);
      if (e.dep === e.head) problems.push(`${g.id}: self-loop on ${e.dep}`);
      deps.push(e.dep);
    }
    const dup = deps.filter((x,i) => deps.indexOf(x) !== i);
    if (dup.length) problems.push(`${g.id}: more than one head for ${[...new Set(dup)].join(', ')}`);
  }
  return problems;
}

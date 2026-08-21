# Tarkeeb treebank data

Dependency-graph data for the Quran, transcribed from the
[Quranic Arabic Corpus](https://corpus.quran.com) by reading each rendered
dependency diagram graph by graph.

| file | contents |
|---|---|
| `tarkeeb-lib.js` | tag tables, colour maps, helpers, validator — no data |
| `al-fatihah.js` / `.json` | chapter 1, complete (7 verses, 8 graphs) |
| `al-imran.js` / `.json` | chapter 3, verses 1–10 (32 graphs) |
| `morphology.tsv` | the raw morphology scrape, one row per token |
| `verify.mjs` | runs the validator and reports morphology coverage |

Both surahs carry full morphology, scraped token by token from
`wordmorphology.jsp`: the triliteral root, the part-of-speech description for
each segment, and the Arabic iʿrāb line.

```js
word.morphology = {
  location: '3:7:17',
  root: 'ق ل ب',
  irab: 'اسم مجرور و«هم» ضمير متصل في محل جر بالاضافة',
  segments: [
    { tag:'N',    description:'genitive feminine plural noun → Heart' },
    { tag:'PRON', description:'3rd person masculine plural possessive pronoun' },
  ],
}
```

Where the site's segment count matches the graph's, `posName` and `root` are
also copied onto each segment so you can read them without the extra hop.
The corpus does not publish a lemma on these pages, so there is no lemma
field — an earlier draft of `al-fatihah` had one and it has been removed.

Coverage: 196 words, 76 distinct roots, no gaps.

## Use

```js
import { buildTree, toGraphData, getGraph, validate } from './tarkeeb-lib.js';
import imran from './al-imran.js';

const g = getGraph(imran, '3:7d');       // فَأَمَّا ٱلَّذِينَ فِى قُلُوبِهِمْ زَيْغٌ
buildTree(g);                            // nested tree, phrases as parent nodes
toGraphData(g);                          // { nodes, links } for cytoscape / d3
validate(imran);                         // [] when clean
```

Or ignore the helpers and read the JSON directly — the schema is documented at
the top of `tarkeeb-lib.js`.

## Where the site contradicts itself (once)

`ٱهْدِنَا` (1:6:1): the morphology page counts the implicit subject pronoun as a
third segment of the word, while the dependency graph draws it as its own
elided node. Both are the corpus's own data. The word carries
`segmentCountMismatch: { graph: 2, site: 3 }` and per-segment fields are not
merged there — read `morphology.segments` directly for that one.

## The two things that trip people up

**Order is right-to-left.** `words[0]` is the first (rightmost) word, and
segments run right-to-left inside their word, so the `P` of `بِسْمِ` comes
before the `N`.

**Edge direction.** Per the corpus documentation, "B → A means that B depends
on A". In the data `dep` is B and `head` is A, and `rel` is the Arabic label
the site prints on that arc. Occasionally the site's label describes the
governed word rather than the dependent — `labelAt` names that node when so.

Nodes marked `elided` are supplied by the corpus but absent from the text: a
hidden pronoun, an unstated predicate, the vocative `يا`. Words and edges
marked `context` are carried in from an earlier graph of the same verse and
are drawn greyed; `buildTree` excludes them by default and reports the hook-up
point in `attachesTo`.

## Licence

Corpus data © the Quranic Arabic Corpus project (University of Leeds),
released under the GNU public licence.

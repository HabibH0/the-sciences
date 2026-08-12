# Writing a chapter file

Everything a chapter of a Library book needs in order to work in the app.
Written to be usable on its own: nothing here requires reading the code.
`qiraah-v1/chapter-01.js` is the worked example of all of it.

A chapter is **two** things:

1. `content-lit/<bookId>/chapter-NN.js` — an ES module exporting `CHAPTER`,
   holding the passage and its drills. Everything below is about this file.
2. One entry in that book's `index.js`, which is what the contents page
   draws. Skipping it means the chapter exists but is unreachable — see
   [Registering it](#registering-it) at the end.

---

## The shape

```js
export const CHAPTER = {
  id: 'ch2',
  title: { ar: '…', en: '…' },
  newWords: ['…'],
  lemmas: { '…': { gloss: '…' } },
  paragraphs: [
    { en: '…', sentences: [ … ], checks: [ … ] },
  ],
  workshop: { cloze: [ … ], shift: [ … ] },
};
```

### Top level

| field | required | what it is |
|---|---|---|
| `id` | yes | Must be **identical** to the `id` in the book's index entry. Convention: `ch1`, `ch2`, … |
| `title.ar` | yes | The chapter's Arabic title. Shown as the reader's heading and on the finish screen. |
| `title.en` | yes | Its English title, shown under the Arabic. |
| `newWords` | no | Array of **lemmas** (dictionary forms) this chapter introduces. The build stage falls back to sentences containing these when the learner has marked few words unknown. Must match `token.lemma` spellings exactly to have any effect. |
| `lemmas` | no | Dictionary keyed by lemma. Only two keys inside are read: `gloss` (used when a token has none) and `book_note` (an extra note printed in the word card). Anything else is ignored. |
| `paragraphs` | yes | At least one. In reading order — the reader shows them one at a time. |
| `workshop` | no | The Patterns stage. Omit it entirely and the reader goes straight from reading to building. |

### A paragraph

```js
{
  en: 'I stay at school six hours. I listen to the lessons…',
  sentences: [ /* clauses, in reading order */ ],
  checks: [ /* at least one comprehension question */ ],
}
```

| field | required | what it is |
|---|---|---|
| `en` | yes | The whole paragraph in English, revealed by the `EN` toggle in the margin. |
| `sentences` | yes | The paragraph's clauses, in order. They are the unit the reader glosses on hover, so split roughly where the Arabic punctuates — at each ، and . |
| `checks` | no | Questions on **that** paragraph. The reader won't move on until each has been answered, so a question has to be answerable from the paragraph it sits on. A paragraph of pure narration between two scenes can have none, and then the reader just offers the way onward — but a chapter with no checks anywhere is an error. |

**Break a chapter into paragraphs at its narrative breaks**, roughly 6–12
sentences each. The reader shows one paragraph at a time and asks its
questions before moving on, so a chapter written as one 40-sentence
paragraph collapses into "read the whole thing, then answer three questions"
and loses the rhythm the reader is built around.

### A sentence (one clause)

```js
{
  id: 'qr1-2-001',
  ar: 'وَأَمْكُثُ فِي الْمَدْرَسَةِ سِتَّ سَاعَاتٍ،',
  en: 'I stay at school six hours,',
  tokens: [ … ],
}
```

| field | required | what it is |
|---|---|---|
| `id` | yes | Unique within the chapter. The reader uses it as the key for "which clause is being hovered/pinned", so duplicates break the gloss. Any stable string; `<book>-<chapter>-<nnn>` reads well. |
| `ar` | yes | The clause as it appears, fully vowelled, punctuation included. Shown verbatim as the answer in the build stage. |
| `en` | yes | **This clause** in English — the hover gloss. Not the paragraph's; a paragraph-level translation is no use here. This is the one field nothing can derive for you. |
| `tokens` | yes | Its words, in order. The reader renders the passage from these, not from `ar` — so the tokens must spell out the clause exactly, word for word. |

### A token (one word)

```js
{ surface: 'وَأَمْكُثُ', lemma: 'مكث', pos: 'verb',
  features: 'conj+impf.1s', root: 'م ك ث', gloss: 'to stay, remain' }
```

| field | required | what it is |
|---|---|---|
| `surface` | yes | The word exactly as printed, **fully vowelled and carrying its case ending** (`اللَّيْلِ`, not `الليل`). Attached prefixes stay attached: `وَأَمْكُثُ` is one token. |
| `lemma` | yes | Dictionary form. This is what "mark as unknown" is recorded against, so every form of a word must share one spelling. |
| `pos` | yes | Word class. Recognised: `verb noun proper adj adv prep conj part rel dem num`. Anything else is printed verbatim in the word card. `proper` also excludes the word from being used as a decoy. |
| `features` | no | Its form (see [Feature strings](#feature-strings)). Omit and the card drops that row. |
| `root` | no | Spaced letters: `م ك ث`. Omit and the card drops that row. |
| `gloss` | no | The word's meaning in English. Falls back to `lemmas[lemma].gloss`. |

### A check (comprehension question)

```js
{
  q: 'كَمْ سَاعَةً يَمْكُثُ فِي الْمَدْرَسَةِ؟',
  options: ['سِتَّ سَاعَاتٍ', 'أَرْبَعَ سَاعَاتٍ', 'سَاعَتَيْنِ'],
  answer: 0,
  qEn: 'How many hours does he stay at school?',
  optionsEn: ['Six hours', 'Four hours', 'Two hours'],
}
```

| field | required | what it is |
|---|---|---|
| `q` | yes | The question, in Arabic. |
| `options` | yes | Two or more answers. Order is fixed — they are not shuffled. |
| `answer` | yes | 0-based index into `options`. |
| `qEn` / `optionsEn` | no | The English version. **Both or neither.** `answer` indexes both lists, so `optionsEn` must be the same length **in the same order** — otherwise switching language would silently change which answer is right. When every check in a paragraph has them, the reader offers its عربي / English toggle. |

Answering is reveal-on-click with no retry: a wrong answer still counts as
read and still lets the passage move on.

### The workshop

Two lists. Both optional; each is asked one question at a time, `cloze`
first, shuffled within each half.

**`cloze`** — a frame from the chapter with one word missing.

```js
{
  type: 'cloze',
  pre: 'وَفِي بَعْضِ الْأَيَّامِ',
  post: 'فِي الْبَيْتِ',
  en: 'On some days I stay at home.',
  options: ['أَمْكُثُ', 'مَكَثَ', 'تَمْكُثُ', 'نَمْكُثُ'],
  answer: 0,
  rationales: [
    '1st person singular present.',
    'Perfect 3rd person — he stayed.',
    '2nd masculine or 3rd feminine — you or she stay.',
    '1st person plural — we stay.',
  ],
}
```

`pre` and `post` are the sentence either side of the blank; either may be
`''`. `en` is shown above the frame as the prompt. `rationales` is
index-aligned with `options` — the chosen one is shown after answering, and
the correct one alongside it when the answer was wrong. Fewer rationales
than options is allowed; the missing ones just show nothing.

**`shift`** — say the same sentence a different way. The person shift is the
commonest case, not the only one:

```js
{
  type: 'shift',
  base: 'أَذْهَبُ إِلَى السُّوقِ',   // shown above the frame, as it stands
  pre: '',                          // the frame the blank sits in
  post: 'إِلَى السُّوقِ',
  targetPerson: 'هُوَ',
  targetEn: 'he',
  options: ['تَذْهَبُ', 'يَذْهَبُ', 'نَذْهَبُ', 'يَذْهَبُونَ'],
  answer: 1,
  rationales: ['', '3rd masculine singular takes the prefix يَـ.', '', ''],
}
```

`pre` and `post` are the frame, and they are **not** derived from `base` —
`base` is only the display line. Put a leading particle in `pre`
(`لَنْ [أَجِدَ] أَرْخَصَ`), change `post` when a pronoun has to agree with the
new person (`مِنْ عُمُرِيْ` → `مِنْ عُمُرِكَ`), and drop an explicit subject from
it when the shifted verb would no longer agree with it — `يَعْبُدُ آزَرُ
الأَصْنَامَ` shifted to أنا must not render as `أَعْبُدُ آزَرُ الأَصْنَامَ`. A
one-word sentence can have no frame at all.

### Asking for something other than a person

Add a **`task`** — one line naming what to do — and the drill asks that
instead of "Say the same thing about …". `targetPerson`/`targetEn` stay
optional context. Anything the sentence can be turned into works:

```js
{ type: 'shift', task: 'Make it negative.',
  base: 'ذَهَبَ إِلَى السُّوقِ', pre: 'مَا', post: 'إِلَى السُّوقِ',
  options: ['ذَهَبَ', 'يَذْهَبُ', 'اذْهَبْ', 'ذَاهِبٌ'], answer: 0,
  rationales: ['مَا negates the perfect and leaves it as it is.', '…', '', ''] }
```

Worth rotating through: **tense** (say it about yesterday / about now),
**number** (about the two of them, about all of them), **gender**, **negation**
(لَا / مَا / لَمْ / لَنْ), **question** (أ / هَلْ), **command** (tell him to do it),
**case after a governor** (put it after إِنَّ, after a preposition), and
**definiteness**. A chapter whose second half is four person shifts in a row
is the thing to avoid.

---

### What the app adds by itself

A workshop is **eight questions drawn round-robin from every kind the chapter
can offer**, so no kind can dominate a sitting and a small authored bank no
longer means a short workshop. Two of those kinds are yours — `cloze` and
`shift`. The rest the app generates from the chapter's own tokens:

| kind | asked from |
|---|---|
| Which ending? | a word's three case forms, side by side |
| What case? | `nom` / `acc` / `gen` in `features` |
| Past or present? | `perf` / `impf` / `imp` on a verb |
| How many? | `sg` / `du` / `pl` on a noun or adjective |
| Definite or indefinite? | `def` / `indef` |
| Which preposition? | a standalone preposition, blanked in its sentence |

Nothing to author for those — they come free with well-vowelled `surface`
values and honest `features`. Which also means **`features` accuracy is now
load-bearing**: a noun tagged `pl` that isn't plural becomes a question with
the wrong answer. Where a token's grammar is genuinely uncertain, leaving the
atom off is better than guessing — the app only asks about what it is told.

---

## The build stage

There is nothing to write for it. The reader assembles it at read time from
the tokens: it picks 5–10 sentences — first ones containing a word the
learner marked unknown, then ones containing a `newWords` lemma, then
anything else — and offers each sentence's own words plus two or three
decoys made by moving a word's final vowel one case along
(مجرور → مرفوع → منصوب → مجرور).

Two consequences for the writing:

- **`surface` must carry its ending.** A word with no visible case mark
  (`بَيْتِي`, `فِي`) can never be a decoy.
- **A chapter needs at least five buildable sentences**, meaning 3–9 tokens
  with at least one non-`proper` word that has a visible case mark. A
  chapter of very long or very short clauses will fail validation.

---

## Feature strings

Atoms joined by `.` within a segment, segments joined by `+`. The word card
names each in Arabic; an atom it doesn't know is printed as written, so an
unrecognised one degrades rather than breaking.

```
impf perf imp pass | def indef | nom acc gen | constr | pl du sg | m f
prep conj part neg rel dem adv | 1s 1p 2ms 2fs 3ms 3fs 3mp 3fp
```

A trailing segment that is only a person code reads as an attached pronoun:
`gen+1s` → مَجْرُورٌ + ضَمِيرٌ مُتَّصِلٌ · مُتَكَلِّمٌ مُفْرَدٌ. Examples: `impf.1s`,
`conj+impf.1s`, `def.gen`, `prep+def.gen`, `indef.acc`, `gen.constr`,
`pl.def.gen`, `conj+perf.pass.3ms`.

---

## Fields the app ignores

Harmless to include, safe to leave out. `chapter-01.js` carries them because
it was machine-produced: `number`, `pages` and `register` at the top level,
`id` on a paragraph, `page` on a sentence, and `pos`/`root`/`content` inside
a `lemmas` entry.

---

## Registering it

In `content-lit/<bookId>/index.js`, add to `chapters` **in reading order** —
the order is what gates progression, since chapter N unlocks when chapter
N−1 is finished:

```js
{
  id: 'ch2',                        // must equal the module's own id
  number: 2,
  title: { ar: '…', en: '…' },
  pages: [32, 33],                  // optional, shown on the contents row
  blurb: 'One line, shown on the contents page.',
  load: () => import('./chapter-02.js'),
},
```

This entry — not the module — is what the contents page shows.

---

## Checking it

```
npm run validate
```

Catches: a chapter `id` that doesn't match its shell, a duplicate chapter
id, a duplicate sentence id, tokens that don't spell out their `ar`, a
paragraph with no `en` or no sentences, a chapter with no checks at all, a
sentence missing `en` or `tokens`, a token missing `surface` or `lemma`, an
`answer` out of range, an `optionsEn` that doesn't line up with `options`, a
repeated option, a workshop item missing `en` (cloze) or `targetPerson`
(shift), and a chapter with no buildable sentence at all.

It also prints notes for things that work but run thin — a chapter with
fewer than five buildable sentences, for instance.

It cannot check whether the Arabic, the translations, or the grammar
labels are correct. That part is on the author.

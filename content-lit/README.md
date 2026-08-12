# content-lit — the Library

Books, not courses. A course is modules → lessons → concepts/quiz/bank, all
of it authored (see `content/README.md`). A book is chapters of **tokenized
prose**, and most of what the learner answers is *derived from those tokens
at read time* — which sentences get built, what the distractor is, which
words come back at the end. So the authoring job here is small and
mechanical: get the passage, its translations, and its tokens right, and the
app generates the rest.

```
content-lit/
  index.js              the shelf + every pure helper (progress, unknown
                        words, feature labels, case-ending distractors)
  qiraah-v1/
    index.js            the BOOK shell: title, author, chapter list
    chapter-01.js       a chapter. Copy it as the template for the next one.
```

The reader is three stages, in this order:

1. **Read** — one paragraph at a time with its comprehension checks; the
   pager steps back through the ones already read. Hovering a clause shows
   its English; clicking a word highlights it and shows its form; clicking
   twice marks it as unknown.
2. **Patterns** — the chapter's own frames, as fill-the-blank, then the same
   verbs shifted to other persons.
3. **Build** — 5–10 sentences to assemble from their own words plus
   wrong-ending decoys, drawn first from the sentences whose words were
   marked unknown.

---

## Adding a chapter

1. Copy `qiraah-v1/chapter-01.js` to `chapter-02.js` and write the new
   chapter into it — see [CHAPTER-FORMAT.md](CHAPTER-FORMAT.md).
2. Register it in the book's `index.js`, in reading order:

   ```js
   {
     id: 'ch2',                       // must match the module's own id
     number: 2,
     title: { ar: '…', en: '…' },
     pages: [32, 33],
     blurb: 'One line, shown on the contents page.',
     load: () => import('./chapter-02.js'),
   },
   ```

   Order is the gate: chapter N unlocks when chapter N−1 is finished.
3. `npm run validate` — it checks the shipped modules, not any source
   file, so hand-written chapters get the same structural check as
   generated ones.

**The contents page reads the shell, not the module.** Title, page range,
blurb and number on the contents row all come from the entry above; the
chapter module's own copies of them are ignored. That is the one piece of a
chapter that does not live in the chapter file.

## Adding a book

Create `content-lit/<bookId>/index.js` exporting a `BOOK` (copy
`qiraah-v1/index.js`), then add it to `LIT_BOOKS` in `content-lit/index.js`.
Chapter modules stay lazy — only the shells are imported eagerly, so a book
costs nothing until one of its chapters is opened.

---

## The chapter module

One ES module exporting `CHAPTER`: the passage as tokenized clauses, the
comprehension checks, and the pattern drills. The build stage is derived
from the tokens at read time, so there is nothing to write for it.

**[CHAPTER-FORMAT.md](CHAPTER-FORMAT.md) is the full specification** —
every field, required or optional, what it does, and what
`npm run validate` will catch. `qiraah-v1/chapter-01.js` is the worked
example; copy it.

The four rules worth knowing before you start:

- Every **sentence needs its own `en`** — the reader glosses one clause at a
  time on hover, so a paragraph-level translation is no use. It is the one
  field nothing can derive for you.
- **`surface` must carry its case ending** (`اللَّيْلِ`, not `الليل`). The
  build stage's decoys are made by moving that ending one case along, and a
  chapter needs at least five sentences that qualify.
- **`answer` indexes both option lists.** If a check has `optionsEn`, it
  must be the same length in the same order as `options`.
- **Sentence ids must be unique** within a chapter; the reader uses them as
  its per-clause key.

---

## Converting from JSON (optional)

`scripts/convert-literature.mjs` turns a JSON chapter of a particular shape
into one of these modules (`npm run lit:convert -- <file.json>`); it is how
chapter 1 was first produced. It is only worth keeping if chapters arrive as
JSON from somewhere else — authoring the module directly is the shorter
path, and validation is the same either way. Re-running it over a chapter
overwrites that file, hand edits and all.

---

## Progress and save data

All persisted, all defaulted in `bootProgress` so older saves keep working:

- `litProgress["<bookId>/<chapterId>"] = { para, done, at, score }` —
  `para` is the furthest paragraph reached, so a long chapter resumes rather
  than restarting, and stepping back through the pager never lowers it.
- `litUnknown[bookId][lemma] = true` — marked per **lemma**, not per
  occurrence: "I don't know this word" is a fact about the word, so marking
  one form marks every form of it in that book.
- `litCheckLang` — `'ar'` (default) or `'en'`, which language the
  comprehension checks are asked in. One standing preference, like theme.
- `litTextScale` — the reading page's own text size, separate from the
  lesson one.

The reader session itself (`state.lit`) is never persisted, exactly like a
practice session: a reload lands back on the book's contents page.

# Advanced Nahw Content Revamp Instructions

## Goal

Revamp the Advanced Nahw course content using the new lesson drafts in `app-lessons/`.

The target course is Advanced Nahw, course id `annahw`. Its editable module files live in `content/module-01.js` through `content/module-17.js` and are registered by `content/annahw.js`. Keep the current course/module/lesson structure unless a change is clearly required by the new source material.

Do not edit generated metadata by hand. `content/meta.js` is generated.

## Project Context

This repo is an offline-first Electron app that can also run as a static web app. Course content is plain JavaScript data. The app reads:

- lesson teaching content from each lesson's `concepts`;
- end-of-lesson quiz questions from `lesson.quiz`;
- practice, revision, mastery, section-test, and group-test questions from `lesson.bank`;
- Advanced Path checkpoints from the same `quiz` and `bank` pools through `content/path-advanced.js`.

Because `bank` questions are reused outside the lesson page, every bank question must stand on its own. A learner may see it days later, in a shuffled checkpoint, without the surrounding lesson text.

Before editing content, read:

- `WRITING.md` for prose style and anti-generic writing rules;
- `content/README.md` for the content schema, expected counts, prompt language, and validation checklist;
- at least one existing module file, preferably `content/module-01.js`, to match the actual data shape used in this app.

## Source Material

The new lesson prose is in `app-lessons/` as numbered Markdown files:

- `001-purpose-of-al-kubra.md`
- `002-the-word-kalimah.md`
- continuing through `021-two-object-transitive-verbs.md`

These Markdown files are the source of truth for the new lesson content. Use them for the lesson prose and examples. Do not copy old prose from the existing `content/module-*.js` files unless it is still needed for structure, field shape, or app compatibility.

## Course Map

`COURSE-MAP.md` (repo root) lists every existing module and lesson — id, Arabic
title, English subtitle, and current concept/quiz/bank counts — generated
directly from the live `content/module-*.js` files. Use it as the mapping
shell instead of re-deriving titles from each module file by hand: as you map
an `app-lessons/` draft onto a lesson slot, record it under that lesson's
`→ maps to:` line in `COURSE-MAP.md` so the mapping decisions live in one
reviewable file, not only in the final diff.

## Mapping Work

First map the existing Advanced Nahw modules and lessons to the relevant files in `app-lessons/`.

Do not assume that one `app-lessons` file equals one current module. The app currently has 17 Advanced Nahw modules, while `app-lessons/` contains 21 lesson drafts. Build a mapping from topic/title/content:

- compare existing module and lesson titles in `content/module-*.js`;
- compare the Markdown filenames and headings in `app-lessons/`;
- preserve existing module boundaries and lesson IDs where possible;
- place each new lesson's content into the matching existing lesson slot;
- if a new draft appears to split, merge, or rename an existing lesson, preserve the app's structure and adapt the content into that structure rather than reorganizing the course casually.

If a source lesson cannot be mapped with confidence, leave a clear note for the user instead of guessing silently.

Coverage requirement: after mapping the relevant `app-lessons/` drafts to a module rewrite, account for all of the mapped lesson content, not only selected highlights. Every source heading, definition, caution, table, and worked example should appear in the rewritten lesson content unless it is explicitly noted as unmapped/out of scope. Preserve Markdown callout boxes such as `Core Text`, `Definition Box`, `Example Box`, `Careful Box`, `Rule Box`, and `Meaning Box` as app boxes; normalize labels by removing the word `Box`, so `Definition Box` renders as `Definition`, `Example Box` as `Example`, and so on. Untitled blockquotes should not render a generic `Box` label. When multiple draft lessons are merged into one existing lesson slot, use `sourceRef` to list the full draft range covered, and combine related material into roughly 4-6 concepts per app lesson rather than creating one concept for every source heading.

Core Text boxes: every `> **Core Text**` blockquote in an `app-lessons/` draft is a verbatim quotation from the book's own Arabic (the matn) and must render as its own box, not get folded into ordinary prose. `js/render.js`'s concept-line renderer already supports this (`concept-source-box`, right-aligned, isolated from the surrounding English) — it isn't new engine work, just a content shape Advanced Nahw hasn't used yet. Advanced Sarf (`content-sarf/module-*.js`) already does this throughout; match its pattern exactly:

```js
{ box: { title: 'Core Text', lines: [
  `تَنْقَسِمُ الكَلِمَةُ إلى اسْمٍ وفِعْلٍ وحَرْفٍ`,
] } },
```

`lines` is an array of one string per matn line (most Core Text boxes are a single line; a couple in `content-sarf` run two or three when the source quotes several lines together — split at the draft's own line breaks, don't force it into one run-on line). Drop it into a concept's `lines[]` array at the point in the prose where the draft quotes the text, exactly like `content-sarf/module-01.js` does around line 311. Every English concept-body sentence that explains a Core Text quotation should still appear as its own separate `{ html: ... }` line right after the box, the same way `content-sarf` follows each quotation with plain prose — the box holds the matn only, never the explanation.

Tarkeeb examples: when a source lesson includes an inline visual/tarkeeb example, use the app's existing `tarkeebDiagram` schema (`cells` plus `rows`) so it renders in the same style as the introductory Nahw course. Do not add a prose heading like `Visual tarkeeb:` before the diagram.

Quiz and bank requirement: every end-of-lesson quiz item and every lesson bank item must be self-contained. Practice, revision, path, and mastery modes can surface these items away from the lesson page, so prompts and `tarkeeb` instructions must name the relevant example, term, contrast, or rule directly. Avoid context-dependent wording such as `this lesson`, `this discussion`, `here`, `which pair is correct?`, or `the example above` unless the item itself supplies the needed context.

For `tarkeeb` bank items, all chip text in `labels` and `distractors` must be Arabic-only. The instruction may use English as carrier language, but the draggable answer options themselves should not mix English and Arabic.

## What to Change

For each affected lesson:

1. Replace the teaching content with material based on the matching `app-lessons` Markdown.
2. Keep the lesson object shape used by the app.
3. Keep module ids, lesson ids, unlock order, and course registration intact.
4. Update `title`, `subtitle`, `sourceRef`, `concepts`, `quiz`, and `bank` only when needed to reflect the new content.
5. Rewrite each in-lesson concept exercise.
6. Rewrite the end-of-lesson quiz.
7. Rewrite the lesson bank MCQs.
8. Rewrite the lesson bank `tarkeeb` items.

The request is a content revamp, not a UI rewrite. Avoid unrelated changes in `js/`, `styles.css`, Electron files, server files, or path-generation logic unless validation reveals a real content-shape issue that must be fixed there.

## Lesson Content Rules

Use the Markdown lesson as the basis for the concept prose, but adapt it to the app's lesson schema. The app's current content often uses `concepts[].lines` with objects such as `{ html: ... }` and tables. Preserve whichever schema the surrounding module uses.

Keep lesson prose direct and specific:

- explain the rule before testing it;
- keep Arabic grammar terms in Arabic;
- use English as the carrier language for explanations;
- use examples from the source lesson where possible;
- avoid vague filler, hype, or generic summary paragraphs;
- do not invent grammar rules, examples, citations, or translations not supported by the source material.

When using Arabic terms inside HTML strings, follow existing app conventions such as `<bdi>...</bdi>` where the surrounding file uses them.

## Exercise and Quiz Rules

Rewrite every concept exercise and end-of-lesson quiz so it matches the new lesson content and the guidance in `WRITING.md` and `content/README.md`.

**Every MCQ — concept exercise, end-of-lesson quiz, and bank MCQ — must test
the lesson's grammar concepts.** It should ask the learner to identify,
classify, or apply a رسم/إعراب/تصنيف rule from this lesson, not recall a
translation or a general vocabulary meaning. Do not port over Introductory
Nahw's `kind: 'vocab'` en↔ar/ar↔en/plural-form flashcard pattern (its bank is
almost entirely that — 8,000+ items across the course) — Advanced Nahw's bank
has always been concept-parsing MCQs plus `tarkeeb`, with no `vocab` kind, and
the revamp should stay that way. The one exception: if a lesson introduces a
genuinely new grammatical term (an اصطلاح the learner hasn't met before, e.g.
اسم عين vs اسم معنى), a question can test that term's definition — that is
still a grammar concept, not a vocabulary word.

Each end-of-lesson `quiz` should normally contain exactly 6 MCQs unless the surrounding module has a documented reason to differ.

Every MCQ should be self-contained:

- the prompt should include the example, phrase, or rule needed to answer it;
- the user should not need to remember the exact wording of a previous paragraph;
- answer options should be plausible and from the same conceptual family;
- avoid throwaway distractors that are obviously impossible;
- keep prompts as English sentences with Arabic terms left in Arabic;
- keep options in English-carrier prose when they are explanatory clauses;
- bare Arabic terms, labels, and quoted Arabic examples are fine as options.

Do not write questions that merely ask "What did the lesson say?" Ask the learner to identify, classify, distinguish, apply, or explain using enough context in the question itself.

## Bank Quiz Rules

Rewrite all `lesson.bank` items for the affected lessons.

Bank MCQs are used in practice mode, revision, mastery, path checkpoints, section tests, and group tests. They must be understandable outside the original lesson page.

For each bank MCQ:

- include the necessary context in the prompt;
- make the correct answer unambiguous;
- avoid references like "from the previous concept," "as above," or "in this lesson";
- avoid questions that depend on the learner seeing a nearby table;
- vary the angle so the bank does not become six copies of the same fact.

Aim for the existing content density described in `content/README.md`: roughly 24 bank items per lesson, with MCQs plus `tarkeeb` items, unless the surrounding module has an established reason to differ. No `kind: 'vocab'` items — see the MCQ concept-testing rule above.

Optional, not required: Introductory Nahw's `quiz` items carry an `explanation` field shown after answering; Advanced Nahw's currently don't. This revamp does not need to add one — keep the existing quiz shape unless the user separately asks for `explanation` to be added.

## Tarkeeb Rules

Rewrite `kind: 'tarkeeb'` items so they match the new content style and current lesson topics.

Each `tarkeeb` item must be self-contained:

- `title` should name the exercise briefly;
- `instruction` should tell the learner exactly what to label;
- `source` should contain the full phrase or sentence shown to the learner;
- `words` and `labels` must have the same length and align index-for-index;
- `distractors` should be plausible extra labels, not irrelevant filler;
- include `translation` only where the existing schema/module uses it and it helps clarify the source.

Use examples that test the grammar from the lesson. Do not include a sentence whose analysis requires rules the learner has not yet met unless the prompt provides the needed information.

## Validation

After editing:

1. Run `npm run validate`.
2. Fix any reported shape, count, or index errors.
3. Spot-check the edited lesson content in the app where practical.
4. For visual app checks, follow `AGENTS.md`: use Electron with Chrome DevTools Protocol, not OS-level mouse or keyboard automation.

If a full visual check is not practical, at least inspect the edited module files and run validation. State clearly what was and was not checked.

## Completion Standard

The task is done only when:

- every mapped Advanced Nahw lesson uses the new `app-lessons` content;
- each lesson keeps the app's expected module/lesson structure;
- in-lesson exercises and end quizzes have been rewritten;
- bank MCQs and `tarkeeb` items have been rewritten to be self-contained;
- prompts and explanatory options use English-carrier prose with Arabic terms left in Arabic;
- `npm run validate` passes;
- any uncertain mapping or unresolved content issue is documented for the user.

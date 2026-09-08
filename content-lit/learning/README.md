# Literature acquisition course

Literature is a language curriculum using exact excerpts from the preserved
source archive. It currently publishes **48 guided lessons in 12 units across
six stages**, 12 unit reviews, 12 reserved checkpoints, six cumulative readings,
a placement diagnostic and adaptive review: 80 runnable sessions. The complete
architecture has 36 unit slots; 24 are explicitly in authoring and contain no
playable lessons. See [the curriculum audit](COURSE-AUDIT.md) for counts and limits.

## Ownership and extension points

| File | Responsibility |
| --- | --- |
| `curriculum.js` | Stages, unit objectives, archetypes, skill taxonomy, legacy migration plans |
| `lexicon.js`, `lexicon-supplement.js` | 144 curated lexical targets, tiers, roots, word families, 432 authored contexts |
| `lessons.js` and its imported modules | The 28 earlier authored excerpts; retained and adapted |
| `extended-lessons.js` | 20 further guided lessons, each with an explicit activity sequence |
| `activities.js` | Plain-data choice, ordering, grouping, recall and lesson helpers |
| `assessments.js` | Reserved unit/stage passages and the 12-question placement check |
| `construction-bank.js` | 43 constructions with 86 authored repair activities |
| `catalog.js` | Unit order, lexical re-exposure, review sessions and full target registry |
| `index.js` | Lazy, lossless source resolution and authoring drafts |
| `../../js/literature/engine.js` | Answers, deterministic option order, first attempts, resume and merges |
| `../../js/literature/model.js` | Derived learner evidence, retention, due dates and recommendations |
| `../../js/literature/dashboard.js` | Course, knowledge, history and independence views |

Content remains plain data, with no HTML, event handlers or generated source
quotations. The archive reader has its own history. Opening it records exposure,
never a successful answer. Chapter completion never becomes course mastery.

## Author a lesson

Choose a unit and an archetype because they fit the language objective. Use
`authoredLesson` with a stable `id`, integer `revision`, `stage`, `unit`,
`archetype`, bilingual titles, objective, context, estimated minutes, and source:

```js
source: {
  bookId: 'qiraah-v1', chapterId: 'ch1',
  sentenceIds: ['qr1-1-012']
}
```

The loader resolves the original Arabic, translation, author, work, page
references, tokens, lemma notes and legacy chapter. Never silently rewrite a
source quotation. New examples are labelled `authored-practice`; they are not
attributed to the source author. Full chapters remain accessible.

Write the exercise array in the learner's actual order. The `flow` list names
those exercise IDs and can include `clean` at the appropriate point. Orientation
is inserted once. A narrative, word-family lesson, rapid recognition session,
Arabic-led lesson and extensive reading should have different work and pacing.
Do not recreate a compulsory sequence of identical phases. `LEGACY_PLANS`
adapts older lessons; new lessons should use the explicit flow contract.

Each exercise has a stable ID, `type`, `phase`, `prompt`, `targets` and feedback.
Targets must exist in `LEARNING_ITEMS`. Tag only language that the response
actually tests. Every activity also has transferable `skills` from `SKILLS`.

- Choices use option indexes and feedback for every option. The renderer
  shuffles them deterministically per saved run, retaining original answer IDs.
- `chunk_sentence` and `clause_boundary` select indexes in source order.
- `sentence_reconstruction`, `reorder_chunks` and `poetry_reorder` use an ordered
  array. Give an explicit required arrangement or list other valid orders in
  `acceptedAnswers`. Ordering is manipulation, not free productive recall.
- `match_pairs` has stems, definitions, answer indexes, `targetSlots`, per-pair
  `contextIds` and optional focus words. Partial results count only for correctly
  matched targets. The interface presents one stem at a time.
- `typed_recall` asks for a constrained form or short answer. It uses an Arabic
  text field; diacritics and ordinary punctuation are ignored. List acceptable
  alternatives explicitly. It does not semantically grade unrestricted prose.
- `rapid_recognition` records response time for optional fluency evidence. There
  is no deadline, penalty for slowness or claim that speed alone is mastery.
- Assessment activities set `assessment: true`. Their first submission is
  recorded and followed by feedback, including when wrong. Ordinary learning
  activities require repair before continuing.

Use `contextId` consistently across formats that test the same authored sentence.
A repeat is not a novel example just because it is rendered differently.
Mark genuinely different review contexts with `transfer: true`; the evidence
model decides whether each learner has seen them already. Reserve checkpoint
source IDs so guided lessons, other assessments and diagnostics do not reuse them.

## Lexical curriculum and support

The four-tier policy is: (1) widely reusable everyday/narrative language;
(2) reusable formal/literary language; (3) genre-specific language;
(4) source-specific rarities, names and one-off items. Tiers are editorial utility
judgements, not corpus-frequency statistics. Tier 4 normally stays a local gloss
and is excluded from general review. The initial curated registry uses tiers 1–3.

Each published unit introduces 12 lexical targets over four guided lessons.
Additional references to earlier words are re-exposures, not new vocabulary.
The immersion lessons work with a 12-word cluster; ordinary lessons add three
planned new targets. Each target has three individually authored contexts and a
reason for selection. Keep lemma, encountered surface form, root, expression and
word-family information distinct. A shared root does not guarantee meaning.

Unit reviews revisit all 12 targets in a different context. Later guided lessons
revisit earlier targets; daily review chooses older contexts from saved history.
All 144 targets can reach Strong through the actual authored initial and delayed
review contexts, verified by the integration suite. The 144 total is content
coverage, never a count of words the learner has acquired.

Source help opens progressively: chunks → vocabulary → structure → simpler
Arabic → source translation → fuller explanation. Diagnostic excerpts carry
individual structure, meaning and translation help. Help is optional and its
use is saved before each answer; source help also affects later questions about
that source. Shared UI labels remain English in the three Arabic-led lesson
flows; the core prompts, examples and responses are Arabic. No recorded source
audio is supplied, so these are reading activities.

## Evidence, mastery and review

The engine saves immutable attempts with answer, timestamp, hints, a snapshot
of opened support and response time. It also persists drafts, position, chosen
adaptive exercise IDs, stage override and first archive views. State normalizes
untrusted saved data and merges by stable run/attempt ID. A reload does not
reshuffle the choices, resample a review or erase a wrong first answer.

`learnerEvidence` regrades against the current content revision. It does not trust
saved correctness flags, completion, XP or clean-reading self-reports. Evidence
includes context, skill, vocabulary/construction target, help dependence,
first-answer errors, recovery, independent transfer and typed recall. A previously
opened archive chapter is conservatively excluded from later unseen results.
Old reader records with actual paragraph progress are treated as prior exposure.

States are New, Learning, Developing, Strong, Mastered and Needs review.
Strong requires at least three independent contexts on three days, an unseen
transfer success, a recovery after seven or more days, and sufficient weighted
evidence. Mastered additionally requires six contexts, five days, at least a
21-day span, two delayed recoveries and two transfers. Overdue items and unresolved
errors return to Needs review. Repeating the same context today cannot manufacture
these thresholds. Productive recall is displayed separately from recognition.
Some targets currently have only three authored contexts and can become Strong;
they need further authored contexts before they can meet Mastered's higher bar.

Independent success schedules review at one day, then three days, then expands
by 2.2 up to 60 days. A first-answer error shortens the interval; an unrepaired
error is due after ten minutes, a repaired error after one day. Multiple same-day
activities do not repeatedly advance the interval. A daily session saves up to
eight selected IDs, prioritising due/weak items and the least-recent context.
Constructions and skills select relevant repair activities as well as vocabulary.

Recommendations resume current work, prioritise due review, then follow the
published course order from placement or a user-selected stage. Placement is a
brief starting-point check, not a proficiency certificate. Diagnostic-only mistakes do not create a backlog of unstudied review items.
All units remain available. Its two examples per stage cannot skip a missing earlier foundation.

The dashboard separates completed work from strong language. It exposes word
families, receptive/productive evidence, construction/skill states, due items,
weekly changes and session history. Reading independence compares actual first
answers, help and translation use across recent and earlier sessions, shows the
stage mix, and makes no CEFR or native-proficiency claim.

## Migration and checks

Earlier 28 lesson IDs are retained with revision 2 where flows changed. Previous
attempts stay saved and are visible as earlier-revision records; they do not
silently satisfy new activities. New lessons/reviews start at revision 1. Local
storage, cloud envelopes and the source reader continue using their existing
persistence paths. No new account or server service is required.

Run `npm run audit:literature`, `npm run verify:literature`, `npm run validate`,
`npm run verify:bidi`, and `npm run build:web` after curriculum changes. The audit
checks source reservation, lesson variety, skill/target integrity, lexical load,
repetition, review coverage, unit checkpoints and stage growth. Exposure counts
refer to distinct planned sessions containing target-bearing activities; adaptive
pool capacity does not inflate them.

For browser verification, start the dev server and open
`/scripts/verify-literature-layout.html`. The responsive wrapper
`/scripts/verify-literature-responsive.html` supplies exact 390px and 320px frame
viewports and an optional 1.25 text scale. It exercises the same mobile pagination
and feedback presentation used by the app, without writing learner progress.

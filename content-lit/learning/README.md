# Authoring Literature lessons

Literature teaches transferable Arabic through a small authentic excerpt.
`lessons.js` contains the initial ten fully authored lessons. It is plain data;
no HTML, event handlers or screen layout belongs there.

The larger source collection is **not automatically converted into lessons**.
Its 292 chapters remain intact. Select a manageable sentence, connected clauses,
or bayt and enrich it deliberately. The original reader and its optional legacy
drills remain available under **Source collection**, with separate history.

## Add a lesson

Add an object to `LESSONS` with a stable lowercase `id`, integer `revision`,
linguistic `stage`, English `title`, Arabic `titleAr`, estimated `minutes`, and:

```js
{
  source: {
    bookId: 'qiraah-v1', chapterId: 'ch1',
    sentenceIds: ['qr1-1-012']
  },
  context: 'The narrator is at school. Separate place from duration.',
  objectives: [{ id: 'duration', text: 'Understand how long an action lasts.' }],
  vocabulary: [{ id: 'stay', ar: 'مَكَثَ', meaning: 'بَقِيَ فِي الْمَكَانِ' }],
  constructions: [{ id: 'duration', ar: 'أَمْكُثُ … سَاعَاتٍ', meaning: 'A duration follows the action.' }],
  chunks: ['وَأَمْكُثُ', 'فِي الْمَدْرَسَةِ', 'سِتَّ سَاعَاتٍ،'],
  support: {
    vocabulary: 'أَمْكُثُ: أَبْقَى.',
    structure: 'The place answers where; the final phrase answers how long.',
    paraphrase: 'أَبْقَى فِي الْمَدْرَسَةِ مُدَّةَ سِتِّ سَاعَاتٍ.',
    explanation: 'Six hours is a duration, not six o’clock.'
  },
  exercises: [/* see the complete worked examples in lessons.js */]
}
```

`loadLiteratureLesson` resolves the exact original text, translations, work,
author, page references, tokens and vocabulary notes from those source IDs.
Never copy a translation into an early teaching prompt. The original source
translation is the **fifth** decoding support level, after chunks, vocabulary,
structure and simpler Arabic. The adapter never changes the original text.

## Exercise contract

Each exercise has `id`, `phase`, `type`, `prompt`, `options`, `answer`, `targets`,
and teaching feedback. `arabic` is its short source or new example. Decode and
understand automatically display the authentic excerpt.

- `phase`: prepare, notice, manipulate, decode, understand, transfer.
  Orientation and clean read are inserted by the engine.
- `type`: contextual_vocabulary, choose_meaning, pronoun_reference,
  clause_relationship, arabic_paraphrase, grammatical_function,
  contextual_fill_blank, interpretation_choice, comprehension,
  transfer_example: one choice, with a numeric answer index.
- `chunk_sentence`: select a meaningful group from words in original order.
  Answer is an array of word indexes; selection order does not matter.
- `reorder_chunks`, `sentence_reconstruction`, `poetry_reorder`: build a
  sequence of chunk indexes. `acceptedAnswers` can list other correct orders.
  Distractor chunks are allowed. Do not grade a valid natural order as wrong:
  either accept it or explicitly request a particular arrangement.
- Choice exercises need a `feedback` explanation for **every option**, aligned
  with the options. Manipulation exercises need `explanation`.
- Every non-decode exercise needs a concise `hint`. Decode uses the six-level
  lesson support. Help is available before the first attempt and after mistakes.
- `targets` names only vocabulary/constructions the answer actually provides
  evidence about. Reuse stable keys across lessons to link encounters. Merely
  appearing in a sentence does not prove recognition.
- `difficulty` defaults to the lesson stage, `learningObjectives` to its objective
  IDs, `instructions` to its prompt, and `retry` to correction before continuing.
  These defaults are resolved by the loader; authors may specify tighter values.
- Optional `concept`: `{moduleId, lessonId, label, note}`. Verify the real course
  IDs. Show a short in-place reminder; the full course link opens separately.
  Opening the reminder counts as support and is retained on reload.

Require all phases, actual manipulation, and at least two fresh transfer
contexts. Include one exercise using a new sentence and one requiring productive
manipulation where possible. The introductory lesson `early-morning` demonstrates
group selection as well as ordering; `poetry-back-to-prose` demonstrates delayed
subjects and conversion from poetic to prose order.

For poetry set `genre: 'poetry'`. Attribute the containing source accurately;
do not assume the compiler wrote an embedded poem. Explain any restoration of
connecting vowels in prose. Preserve the original at decode and clean read.
Audio is optional future source metadata; this implementation offers reading
and reconstruction, not synthetic recitation presented as an authoritative one.

## Extract an old chapter for enrichment

```
node scripts/literature-draft.mjs qiraah-v1 ch1
node scripts/literature-draft.mjs qiraah-v1 ch1 qr1-1-012
```

The command writes JSON to stdout. It includes the original source and notes,
an explicit `needs-authoring` status and missing teaching metadata. Redirect to
an author-owned draft file if needed. Drafts are never exposed as live lessons.
`adaptLiteratureSource` and `enrichmentDraft` are also available to future author
tools. Existing texts, translations, paragraphs, checks and workshops remain in
the `legacy` source field for lossless migration.

## Progress and adaptive support

The additive `literature.version = 1` save contains runs keyed by generated ID.
Each run stores revision, times, phase position, drafts, help, acknowledgments
and immutable answer attempts. Grades are recomputed from content, not trusted
from saved `correct` flags. Completion requires success at every exercise and a
clean-read acknowledgment. Advancing never erases earlier attempts.

First-try correctness with zero help is independent evidence **for that trained
exercise**. It is not a claim of fluent reading. Clean-read confidence is
self-report and never substitutes for tested comprehension or transfer.

Per-target state distinguishes struggled, recognised, repeatedly encountered
(distinct tested contexts), and likely mastered (at least three independent
contexts, including two transfer contexts, and no more recent unresolved
struggle). Replaying one item cannot manufacture distinct contexts. The home
summary's “strengthened” threshold is two independent contexts, labelled in UI.

Merge unions attempt IDs, retains the latest draft, and takes the greatest help
count. It preserves separate concurrent runs. Existing reader history never
becomes acquisition mastery. Resetting a grammar module does not erase literature.
Old content revisions remain saved but cannot satisfy a revised lesson.

The next-lesson suggestion favours an unfinished lesson containing a struggled
target within the current/next stage. This is modest support, not a full adaptive
curriculum. Repeated-encounter authoring, stable targets and concept references
allow later scheduling, support reduction and additional examples without new
screens. Long-term retention still needs future-lesson evidence.

## Validate

Run `npm run verify:literature`, `npm run validate`, and `npm run build:web`.
The standalone verification checks phase completeness, feedback coverage,
grading, retries, transfer gating, source preservation, resumption and sync.
Inspect desktop/mobile layout with `scripts/verify-literature-layout.html`.
Review the Arabic and the pedagogical target of every question manually.

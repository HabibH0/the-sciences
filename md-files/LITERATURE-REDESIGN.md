# Literature: Arabic acquisition through short texts

## Audit and decisions

The old `#/library` is a shelf of 14 volumes / 292 chapters. `content-lit`
contains tokenized sentences, clause/paragraph translations, lemma notes,
comprehension questions and cloze/person-shift workshops. The main reader in
`render.js` starts with a paragraph and hover translation. `state.js` generates
grammar-label and case-ending drills; `main.js` then advances read → workshop →
build, awarding XP. Wrong comprehension answers can advance. Poetry only has
line breaks. There is no language objective, required transfer, or independent
comprehension record. Book/chapter routes survive reload; reader sessions do not.

Retain canonical content, lazy chapter loading, book/author metadata, the optional
reader, search, annotation tools and legacy `litProgress`, `litUnknown`,
`litWordReps`. These records describe reading and practice, not acquisition.
Replace the primary shelf entry point with a linguistic learning path. The old
shelf becomes explicitly secondary source browsing. Legacy drills remain
available there as optional source practice; none count toward the new path.

## Implementation contract

- `content-lit/learning`: plain authored lesson data, stable source sentence
  references, transferable objectives, vocabulary/construction keys, meaningful
  chunks, distractor feedback, progressive support and fresh transfer contexts.
- `content-lit/learning/index.js`: canonical source adapter; no automatic
  promotion of legacy texts to teaching lessons. A missing enrichment is a draft,
  not a generated lesson with guessed language objectives.
- `js/literature/engine.js`: pure state transitions, grading, retries, resumption,
  support evidence, merge and mastery. No DOM or persistence.
- `js/literature/render.js`: pure Arabic-first presentation. `main.js` owns all
  mutations and IO. No new framework or runtime dependency.
- `#/literature/lesson/<id>` is restorable. `#/library` remains a compatible
  alias for the new entry point; `#/library/books` opens source browsing and
  existing book links continue working.
- Seven phases: prepare, notice, manipulate, decode, understand, clean read,
  transfer. Source translations appear only in late, deliberately requested
  decoding support. An incorrect response requires correction. Correction does
  not erase the original attempt. Transfer is required for completion.
- Versioned `literature` progress is additive to existing saves. Attempt IDs
  merge by union; drafts use latest updates; hint counts and phase acknowledgments
  merge monotonically. Cloud storage already accepts an opaque versioned JSON
  progress envelope (16 MiB limit), so no database migration is required.
- Mastery comes from correct unassisted responses in distinct contexts, including
  transfer; repetitions of a memorized item cannot create likely mastery.
  Confidence at clean read is self-report, separately recorded from evidence.

## Initial authored scope and verification

Ship a coherent starter path using selected excerpts already in the collection,
with explicit attribution to the containing reader (no invented poet attribution).
Do not imply that the remaining chapters have been pedagogically enriched or
that the starter path constitutes a complete advanced classical curriculum.

Verify source references, unique IDs, objective/target coverage, all seven phases,
new-context transfer, answer validity, every distractor's feedback, hints ordered
before translation, retry integrity, refresh/back/resume, corrupted imports,
merge idempotence, legacy preservation, keyboard/RTL/mobile/desktop layout,
and existing course/build checks. Self-reported ease is not proof of long-term
acquisition; the stored evidence supports later longitudinal evaluation.

## Verification results

- Ten lessons, seventy exercises and twelve used exercise types across five
  linguistic stages, including two poetry lessons. All phases and novel transfer
  contexts are validated by the normal content validator.
- 309 generated learning states checked for grading, corrections, late support,
  source integrity, JSON round trips, malformed drafts, merge symmetry/idempotence,
  completion gates and preventing replay from inflating distinct-context mastery.
- All 292 chapters passed the lossless source adapter check. Existing Logic,
  Introductory/Advanced Nahw, Introductory/Advanced Sarf and review checks passed.
- Local server auth/progress/grading verification passed; the new Literature
  evidence round-tripped unchanged through the server. No production account or
  configured Postgres test database was used.
- Browser audit: 310 states at 1024×600, 310 at 1280×720 with Naskh and 130%
  text, and 310 at 390×844. Normal desktop lesson steps fit without scrolling.
  Long revealed explanations, feedback and completion summaries can scroll;
  enlarged text and mobile content remain accessible rather than being clipped.
- Corrected a mobile poetry punctuation/chunk wrapping issue, then reran all
  310 mobile states with zero horizontal-overflow or Arabic-clipping failures.
- Actual UI: incorrect vocabulary → correction, multiword phrase selection,
  chunk construction, source decoding, clean read, two independent transfers,
  summary, full-source access, mobile poetry reconstruction, and actual document
  reloads of incorrect answers, partial sentences and completed lessons checked.
- Arabic paraphrase was verified at support level four; English translation at
  level five. Clean-read self-report is visibly separate from performance.

These are implementation and interaction checks, not a longitudinal learning
study. Full adaptive scheduling, audio and a complete advanced classical
curriculum are not claimed by this first authored path.

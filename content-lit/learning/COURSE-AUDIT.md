# Literature curriculum audit

Audited 8 September 2026. This report describes the implemented initial course,
with planned capacity counted separately from playable content. The machine-readable
results are in [course-audit.json](course-audit.json).

## Baseline and source suitability

The archive contains 14 book/volume entries, 292 chapters and 7,005 translated, token-annotated sentences. It includes 41,668 glossed tokens, 40,712 tokens with morphology features, 5,428 lemma keys, 260 workshops and 1,451 paragraph checks. The two author-name spellings refer to the same compiler, al-Nadwī; they are not evidence of two independent author corpora.

Source registers include short first-person routines, dialogue, retrospective
narrative, descriptive prose, moral/gnomic writing, and verse. These support
sentence processing, connected narrative, expression recognition and introductory
poetry. The collection is narrower than a general survey of Arabic literature.
Existing translations, tokens, notes, checks and full texts remain unchanged.

Before the refactor there were 28 authored lessons, one fixed pedagogical flow,
12 exercise-type sequences, 30 lexical targets and 29 targets taught in only one
lesson. About 71% of activities were choices. There were no scheduled review
sessions, reserved checkpoints or placement. Same-session choices could produce
a likely-mastery label without delayed evidence. See [source-audit.json](source-audit.json).

## Published course

| Metric | Result |
| --- | --- |
| Linguistic stages | 6 |
| Unit architecture | 36 slots: 12 published, 24 in authoring |
| Guided lessons | 48 |
| Published course sessions | 78 |
| Total with placement and adaptive review | 80 |
| Archetypes | 14 guided; 18 across all sessions |
| Unique target lexical items | 144 |
| Individually authored lexical contexts | 432 |
| Items in 2+ planned sessions | 144 |
| Items in 3+ planned sessions | 90 |
| Items in 5+ planned sessions | 4 |
| Introduced but never reviewed | 0 |
| Constructions | 43 |
| Construction repair examples | 86 |
| Skills | 12 |
| Unit reviews | 12 + adaptive daily review |
| Unit mastery checks | 12 |
| Reserved unseen assessments | 18 (12 unit checks + 6 cumulative readings) |
| Placement questions | 12 across the six stages |
| Full-passage challenges | 6 |
| Average new targets per guided lesson | 3 |
| Lessons mostly multiple choice | 8.3% |
| Arabic-dominant guided lessons | 22 |
| Explicit Arabic core flows | 3 |
| Guided transfer activities | 84 |
| Exact source sentences selected | 165 |
| Distinct guided activity sequences | 48 |
| Automated curriculum errors / warnings | 0 / 0 |

An exposure above means a distinct planned session with an actual activity
testing the target. It is not an encounter measured from a learner and excludes
the adaptive bank. The 432 lexical contexts and 86 construction repairs are
authored practice, not quotations or 518 additional lessons. Most lexical items
have two or three fixed-session exposures; only four have five or more. Daily
review supplies further scheduled encounters without inflating those counts.

Arabic-dominant means at least 60% of core activity prompts are Arabic by the
audit heuristic. Three guided flows have explicit Arabic core content; shared
navigation and optional help labels are still English. They are not a complete
Arabic localisation of the app. Mostly multiple choice means more than half
of a lesson’s activities use a single-option response; matching, ordering,
grouping and typed recall are counted separately.

## Archetype distribution

| Guided archetype | Lessons |
| --- | --- |
| discovery | 3 |
| narrative | 5 |
| collocation | 3 |
| vocabulary-immersion | 2 |
| rapid-recognition | 1 |
| context-inference | 6 |
| reconstruction | 3 |
| contrast | 5 |
| sentence-lab | 6 |
| arabic-only | 3 |
| root-family | 3 |
| paraphrase | 4 |
| extensive | 1 |
| poetry-decoding | 3 |

The additional session archetypes are review mix, unseen checkpoint, focused
repair and diagnostic. Extensive reading also supplies the stage cumulative
readings. The audit rejects missing targets, checkpoint source reuse and missing
unit review; it flags repeated sequences and three consecutive identical archetypes.

## Stage growth

| Stage | Published units | Guided lessons | New lexical targets | Cumulative targets |
| --- | --- | --- | --- | --- |
| 1 | 3 | 12 | 36 | 36 |
| 2 | 3 | 12 | 36 | 72 |
| 3 | 1 | 4 | 12 | 84 |
| 4 | 1 | 4 | 12 | 96 |
| 5 | 2 | 8 | 24 | 120 |
| 6 | 2 | 8 | 24 | 144 |

Each published unit has four guided lessons, one unit review and one reserved
checkpoint. Every stage also has a cumulative reading. Stages 3 and 4 currently
have one published unit each; their remaining objectives are clearly marked in
authoring. The 24 future units are not presented as completed or playable.

The published units are actions and setting; time and sequence; description and
manner; people and reference; events and reasons; description inside stories;
long dependencies; change and continuation; reason and judgement; rhetoric and
inference; poetic order; imagery and compression.

## What learner evidence can answer

| Learner question | Evidence in the app |
| --- | --- |
| What vocabulary has become familiar? | Encountered, Developing, Strong, Mastered and due states; independent contexts and delayed recoveries |
| Which roots and families are becoming familiar? | Root groups and independently recognised member words |
| What can I retrieve? | Typed recall is separate from receptive recognition and ordering |
| Which structures still cause errors? | Construction and skill tables with first-answer errors, helped encounters and due dates |
| Am I using less help? | Recent/earlier first-answer, hint and translation trends with sample sizes and stage mix |
| Can I understand harder Arabic? | Comprehension first answers within each stage, earlier comparisons and completed passage checks |
| Am I better at unseen Arabic? | First independent responses in genuinely new contexts; prior archive views excluded |
| What changed this week? | Distinct sessions, vocabulary practised, newly strong items and recent session history |
| What should I do next? | Resume, due review, placement/stage override, then the published course order |

Completion never supplies mastery evidence. Strong needs three independent
contexts on three days, novel transfer and a seven-day retention gap. Mastered
has higher context, day, retention and transfer requirements. Overdue items and
unresolved errors return to review. Each daily selection is saved so reload and
sync cannot silently change the session. Wrong first answers remain wrong after
repair. Partial matching contributes evidence only to correctly matched targets.

## Validation

- All 80 sessions loaded, graded and rendered through 574 activity states and
  1,806 render checks, including wrong answers, repair, partial matching,
  assessments, placement, resume, Arabic normalization and sync merges.
- Integration tests demonstrated that all 144 lexical targets can become Strong
  using actual authored contexts after delayed practice; repeated same-day
  answers and corrected first attempts cannot manufacture that result.
- All 292 source chapters, translations, lemma notes and legacy material passed
  preservation checks. The general content validator passed with five existing
  notes about archive chapters having fewer than five short buildable sentences.
- Bidi tests passed all 29 fixtures and preserved 177,239 Arabic-bearing course
  strings. Existing spaced review and shared course mastery suites passed.
- Local server authentication, protected progress, save conflicts and exact
  version-2 Literature evidence round trips passed. No production account or
  external Postgres instance was exercised.
- The web production build completed.
- Browser layout suite: 2,266 states at desktop 1280 × 720, with no horizontal
  overflow or clipped Arabic. Four ordinary state measurements in the longest
  stage-5 cumulative reading require vertical scrolling; the passage is retained.
- Phone layout suite: 2,351 paginated screens at 390 × 844, and 2,869 at
  320 × 720 with 125% text, with no pagination failures, overflow or clipped Arabic.
- Live browser check: a typed Arabic draft survived refresh and graded correctly
  without diacritics. Wrong diagnostic answers produced feedback and continued.
  Phone input enabled checking, produced corrective feedback, and supported
  keyboard continuation through the feedback dialog.

## Scope and remaining curriculum limits

This is a substantial initial course and an extensible acquisition system, not
a claim that every planned unit has been authored. Its 144 lexical targets are
not automatically 144 acquired words. The third-context review and repair bank
support ongoing retention; expanding advanced content and novel contexts remains
necessary for broader, months-long lexical growth. Targets with only three
authored contexts can become Strong but need additional contexts to meet the
six-context Mastered threshold. This is deliberate, rather than lowering mastery
standards to match a small example pool.

Tiers and difficulty are editorial judgements rather than frequency-corpus
statistics or calibrated proficiency scores. The placement is a brief starting
recommendation with user override. Typed work is constrained recall, not free
composition or pronunciation assessment. No recorded source audio was supplied.
The source corpus is concentrated in pedagogical readers; Arabic editorial and
learner studies have not been conducted, and no learning-outcome guarantee or
native-proficiency claim is made.

The [authoring guide](README.md) documents the schema, provenance, sequencing,
review links, migration and exact evidence rules needed to extend the course.

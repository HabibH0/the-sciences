# Anki-style practice engine plan

## Product goal

Give the learner one obvious action—**Review now**—that automatically assembles the right practice from everything they have already studied. The learner should not need to choose a course, module, question type, or session length before beginning.

The engine should:

- include only material the learner has genuinely covered;
- remember performance separately for every reusable question;
- schedule weaker material sooner and stronger material later;
- mix courses, modules, and question formats without losing source context;
- make today's workload clear and finite;
- work offline and merge safely through the existing cloud-save system;
- reuse the existing practice UI, content banks, XP, streak, and achievement systems.

This is “Anki-style” in the product sense: an automatically generated due queue with per-card spaced repetition. It does not need to reproduce every Anki option or expose scheduling jargon.

## What exists today

The live Advanced Nahw course currently has 30 modules and 138 lessons. Lessons are divided into concepts, each with a short exercise, followed by a lesson quiz. The app already has streak, XP, achievements, course progress, a Schedule screen, per-module Practice Mode, course revision, and path revision checkpoints.

The repository already provides most of the delivery layer:

- `lesson.bank[]` contains standalone practice material.
- `lesson.quiz[]` contains reusable lesson-quiz MCQs.
- Existing formats are MCQ, vocabulary, and interactive تركيب.
- Practice pools are already gated by completed lessons.
- `practiceHistory` records `timesSeen`, `timesWrong`, `lastSeen`, and `lastCorrect` per question.
- Existing practice sessions already handle option shuffling, marking, feedback, missed-question review, XP, combos, and source labels.
- Progress already persists locally and can merge through cloud sync.

The authored inventory is large enough to support scheduling without generating questions at runtime:

| Course | Lessons | Lesson quiz MCQs | Bank items | Bank mix |
|---|---:|---:|---:|---|
| Introductory Nahw | 208 | 1,353 | 11,646 | 1,571 MCQ, 1,816 تركيب, 8,259 vocab |
| Introductory Sarf | 66 | 463 | 3,651 | 945 MCQ, 2,706 vocab |
| Advanced Nahw | 138 | 828 | 3,036 | 2,398 MCQ, 638 تركيب |
| Advanced Sarf | 56 | 336 | 1,186 | 1,186 MCQ |

The current “Review what I need” feature is a useful precursor, but it is not yet spaced repetition. It makes a ten-question module session from up to four recent mistakes, up to three cards not seen for three days, and a weighted fill. There is no individual next-due date, learning/relearning state, interval, ease/difficulty, daily new-card budget, or automatic course-wide queue.

## Recommended product decisions

These are the defaults I recommend. The three decisions that most need confirmation are collected at the end.

### 1. “Covered” means a completed lesson

For the first version, a card becomes eligible when its lesson is completed. This matches the current pool logic and guarantees that standalone bank questions do not appear before their teaching context.

Concept-level eligibility would be attractive, but bank questions currently belong to a lesson rather than to an individual concept. Enabling them concept by concept would require authoring or deriving a concept association for thousands of cards. That can be added later without blocking the core engine.

Lesson quiz questions and bank questions should both be eligible. Concept exercises should not be scheduled directly in v1 because many depend on the prose immediately above them; the bank is explicitly authored to stand alone.

### 2. One queue for the active course, with optional filters

**Decision confirmed:** the automatic queue spans every completed lesson in the active course only. Switching course switches the review pool and its due count; card schedules remain stored independently, so returning to an older course resumes its existing schedule rather than resetting it.

The review screen can offer secondary filters—a particular module or question format—but they should be tucked behind **Choose focus**, not placed in front of the main start button.

### 3. Automatic grading by default

All current question types are objectively marked. The lowest-friction behaviour is:

- incorrect answer → `Again`;
- correct answer → `Good`;
- an optional post-answer **Hard** or **Easy** override for learners who want to report effort.

This preserves the quality of scheduler data while avoiding four mandatory Anki buttons after every already-marked MCQ. The scheduler data model should nevertheless support `again | hard | good | easy` from the beginning so the UI can become fully Anki-like later without a migration.

## Learner experience

### Entry points

Add a persistent review summary in two places:

1. **Primary placement — course home page:** add the review card directly beneath the existing **Today / target date** card in the dashboard's right-hand rail. It should feel like the next part of today's plan, not a separate hero or a control hidden inside a module. On narrow/mobile layouts, place it immediately after the Today / target date card and before the module list. The card shows the active course's due count, available new cards, estimated time, and the primary **Review now** action.
2. Schedule: replace the current revision-first mental model with a **Today’s review** panel showing:
   - due now;
   - new cards available today;
   - estimated duration;
   - a primary **Start review** button;
   - a quiet **Choose focus** control;
   - next due time when nothing is due.

Keep existing manual module/course revision as **Custom practice**. It remains valuable for exam preparation and deliberate cramming, but it should no longer be the default way to decide what to revise.

### Daily review flow

1. The learner presses **Review now**.
2. The engine selects all cards due by the current study-day boundary.
3. It adds a limited number of eligible new cards if the due backlog is manageable.
4. Questions are interleaved across sources and formats, avoiding immediate siblings from the same lesson where possible.
5. A wrong card enters a short relearning step and returns later in the same session after other cards.
6. Each answer is persisted immediately.
7. When no card is currently due, the result screen says **You’re caught up** and shows the next due time.
8. Once the normal daily new-card allowance has been used, a repeatable **Do 10 more** action lets the learner introduce up to ten more eligible cards from the active course. It is optional and never presented as overdue work.

**Do 10 more** appears only after currently due and relearning cards have been cleared. Pressing it explicitly increases that study day's new-card allowance by ten, persists the increase so reloads cannot lose it, and starts the additional batch. It can be pressed repeatedly while eligible cards remain. If only six eligible cards remain, the button starts those six rather than padding the session with repeats.

The button should say what it costs: `Add up to 10 new cards to today's review`. This makes clear that the extra cards enter the spaced-repetition schedule and will create future reviews; it is different from consequence-free Custom practice.

The progress indicator should be workload-based rather than a fixed “Question 3 of 10” when relearning can add repeats. Suggested copy:

- `12 due · 4 new`
- `8 remaining`
- `2 learning again`

### Feedback and source context

Reuse the current question renderer and feedback. In a course-wide session, every question should show a compact source breadcrumb such as:

`Advanced Nahw · الكلمة · Lesson 1`

After an answer, show the next interval in plain language only when useful:

- `Again · later today`
- `Good · in 4 days`
- `Easy · in 10 days`

The end screen should distinguish:

- reviewed successfully;
- still in learning/relearning;
- missed at least once;
- new cards introduced.

## Scheduling model

### Why a small native scheduler

Use a compact SM-2/Anki-inspired state machine rather than adding a dependency or attempting a full FSRS implementation immediately. The app is offline-first, has no runtime dependencies, and currently stores only coarse review history. A transparent scheduler is easier to test, migrate, and tune with the data actually available.

Keep the scheduler pure and isolated so its policy can later be replaced by FSRS without changing the question renderer, pool builders, or persisted card identity.

### Card states

Each eligible question has one of five states:

- `new`: eligible but never introduced;
- `learning`: in the initial short-step sequence;
- `review`: graduated to day-scale intervals;
- `relearning`: previously graduated but answered incorrectly;
- `suspended`: excluded by the learner or by a leech rule.

### Suggested initial policy

These should be named constants, not scattered literals:

- study-day boundary: reuse the existing configurable daily reset hour;
- new cards per study day: 10;
- optional extra-new batch: 10 cards per press, repeatable after due work is clear;
- maximum scheduled reviews per day: no hard cap by default; show backlog honestly;
- learning steps: 10 minutes, then 1 day;
- graduating interval: 3 days;
- easy interval: 7 days;
- starting ease: 2.5;
- minimum ease: 1.3;
- `Again` on a review card: enter relearning, due in 10 minutes, reduce ease by 0.2;
- `Hard`: interval × 1.2, reduce ease by 0.15;
- `Good`: interval × current ease;
- `Easy`: interval × current ease × 1.3, increase ease by 0.15;
- fuzz intervals of 3 days or more by a small deterministic amount so sibling cards do not remain permanently clumped;
- leech threshold: 8 lapses, then flag rather than silently suspend.

All interval calculations should clamp to sensible minimums and a configurable maximum such as 365 days. Store exact timestamps, but derive day-scale due dates using the learner’s reset boundary so studying after midnight behaves consistently with the existing streak.

### Concrete scheduling example

Suppose the learner completes Advanced Nahw Lesson 1 on Monday. All of that lesson's bank and lesson-quiz cards become eligible, but only the active course's daily allowance of 10 new cards is introduced at once.

| Review | Result | What happens next |
|---|---|---|
| Monday, first appearance | Correct / Good | Due Tuesday (the 1-day learning step) |
| Tuesday | Correct / Good | Graduates; due Friday (3 days) |
| Friday | Correct / Good | Due roughly 7–8 days later (`3 × 2.5`, with small fuzz) |
| Next review | Correct / Good | Due roughly 18–20 days later |
| Any mature review | Incorrect / Again | Returns about 10 minutes later in the same session; ease drops and it enters relearning |
| Ten-minute retry | Correct / Good | Due the next study day, then returns to review at half its previous interval (minimum 3 days) |

If the first answer is wrong, the card returns after about 10 minutes rather than waiting until tomorrow. Other questions are placed between the attempts, so the learner must retrieve the answer again instead of repeating it from immediate visual memory.

Completing another lesson adds its cards to the same active-course new-card pool. It does not dump all of them into today's session: due/relearning cards come first, then up to the remaining daily new-card allowance. After finishing that set, the learner can press **Do 10 more** as many times as desired; each press introduces another batch and schedules it normally. Switching to another course shows that course's own due queue and new-card allowance while leaving the Advanced Nahw dates intact.

### Queue ordering

Build the session in this priority order:

1. overdue relearning cards;
2. other overdue reviews, oldest due first with a small weakness boost;
3. cards due today;
4. new cards up to the remaining daily allowance;
5. short-step repeats that become due while the session is open.

Within a priority band, interleave by course, module, lesson, and type. Do not place two cards from the same lesson consecutively when an alternative is available. Do not randomize due cards so heavily that long-overdue work can be repeatedly postponed.

“Learn ahead” and Custom practice must not move a card’s due date unless the learner answers it as part of the scheduled queue. Otherwise cramming can accidentally push tomorrow’s required reviews weeks into the future.

## Card identity and content changes

The current keys are based on module, lesson, source, and array index. They work while content arrays remain fixed, but reordering or inserting a question can attach one card’s history to a different question.

Introduce a scheduler-facing card id derived from:

`courseId + moduleId + lessonId + source + normalized-content fingerprint`

The fingerprint should include the question kind, prompt/source sentence, answer options or تركيب structure, and correct answer. Use a small deterministic in-repo hash implementation; no dependency or Web Crypto call is needed.

Consequences should be explicit:

- moving a card within an array preserves its review history;
- changing wording enough to change the fingerprint creates a new card and archives the old state;
- two identical questions in one lesson need an occurrence suffix or validator warning;
- old `practiceHistory` keys remain readable for legacy statistics but are not trusted as durable scheduler identities.

An optional authored `id` can be supported later, with the fingerprint as the fallback. Requiring manual ids across the existing inventory should not block v1.

## Data model

Add a persisted `reviewCards` record keyed by the new card id:

```js
{
  state: 'new' | 'learning' | 'review' | 'relearning' | 'suspended',
  dueAt: 0,
  intervalDays: 0,
  ease: 2.5,
  stepIndex: 0,
  reps: 0,
  lapses: 0,
  lastReviewedAt: 0,
  lastRating: null,
  lastCorrect: null,
  introducedOn: null,
  updatedAt: '',
  leech: false
}
```

Also persist small scheduler metadata:

```js
{
  reviewDayStats: {
    'YYYY-MM-DD': { introduced: 0, extraNewAuthorized: 0, reviewed: 0, correct: 0 }
  },
  reviewSettings: {
    newPerDay: 10,
    extraNewBatchSize: 10,
    scope: 'active-course',
    hardEasyControls: false
  }
}
```

Keep day stats to a bounded rolling window, for example 120 days. Do not persist the entire course content pool or rendered queue; those are derived from content plus progress. A lightweight active-session snapshot may persist only the ordered card ids, current card, and start time so a reload can resume safely.

Every submitted answer must update `reviewCards`, daily stats, XP/practice totals, and the active session in one state mutation before `persistSoon()` is called.

### Compatibility and migration

Old saves have no `reviewCards`; default to an empty record without throwing.

Do not synthesize long intervals from `practiceHistory`. Its three-day heuristic is not enough evidence for a reliable schedule. The safe migration is:

- a legacy card last answered incorrectly → eligible immediately as `relearning`;
- a legacy card last answered correctly within the last three days → `new`, but deprioritized until that three-day window ends;
- everything else → `new`.

This preserves the useful “recently seen” signal without pretending the app knows a mature interval.

For cloud merge, merge each card by `updatedAt`, with a deterministic tie-breaker using the existing save metadata/device id. Counters that represent lifetime totals continue to use max/union behaviour. Daily stats merge per day using max values rather than addition, matching the existing conflict-avoidance style. Document that simultaneous offline reviews of the same card are last-write-wins; solving that perfectly would require an unbounded attempt event log and is not proportionate here.

## Architecture

Fit the feature into the repository’s existing boundaries.

### New pure module: `js/reviewScheduler.js`

Responsibilities:

- normalize/default card state;
- decide whether a card is due;
- apply a rating and return the next state;
- compute interval fuzz deterministically;
- count due/new/learning cards;
- build and interleave a review queue;
- enforce daily new-card allowance;
- expose plain status labels such as `Due today` and `in 4 days`.

It must not import DOM, persistence, or Electron APIs.

### `content/index.js`

Add helpers that:

- normalize lesson quiz questions and bank items to one review-entry shape;
- generate the durable scheduler card id;
- build completed-lesson pools per course;
- build the completed-lesson pool for the active course after that course's modules are lazily loaded;
- retain existing bank keys so current Practice, Path, and Mastery flows do not regress.

The review entry should use a consistent shape:

```js
{
  cardId,
  legacyKey,
  courseId,
  moduleId,
  lessonId,
  lessonTitle,
  source: 'quiz' | 'bank',
  item
}
```

### `js/state.js`

Add persisted defaults and pure selectors for the review summary. Keep active UI state—filters panel, current answer, temporary option order—transient unless it is part of the small resume snapshot.

Do not build the whole course pool on every render. Derive it when entering Review, then retain it for that session. The dashboard’s badge can use a persisted/cheap per-course summary and refresh after course loading or an answer.

### `js/main.js`

Own all mutations and actions:

- open Review;
- load the necessary course content;
- start/resume a scheduled session;
- authorize and start a persisted **Do 10 more** batch;
- submit an answer and apply its rating;
- return short-step failures to the live queue;
- finish or leave a session safely;
- change focus/settings;
- suspend/unsuspend a card;
- reset review history only behind explicit confirmation.

Reuse the existing MCQ and تركيب grading paths. Extract shared answer-finalization logic only where the new flow genuinely needs it; do not fork a second copy of grading and XP behaviour.

### `js/render.js`

Remain pure. Add:

- active-course home-page review card directly below the Today / target date rail card, including its due badge and CTA;
- Today’s review panel on Schedule;
- course-wide Review session wrapper around existing question widgets;
- plain-language interval feedback;
- caught-up, empty, loading, error, leech, and resume states;
- accessible filters and settings.

All mixed Arabic/English strings must continue through the existing bidi escaping helpers. Focus should move to the question heading after advancing, and answer controls must remain fully keyboard operable across full re-renders.

### `js/persistence.js` and `js/storage/syncClient.js`

- default and normalize the new fields in `bootProgress()`;
- include them in `snapshot()`;
- validate types and clamp malformed numeric values;
- merge review cards and daily stats with the rules above;
- include useful counts in save diagnostics.

No backend schema change should be necessary because progress is already stored as an opaque JSON document.

## Relationship to existing modes

Avoid creating overlapping definitions of “due.”

- **Review now**: the only scheduled SRS flow; changes due dates.
- **Custom practice**: existing module/course question selection; does not change due dates by default, but still contributes XP and practice achievements.
- **Lesson quiz**: gates lesson completion; completing the lesson makes its cards eligible, but the quiz attempt itself does not pre-age them.
- **Path checkpoints/revision**: continue to gate Path progress. They may update coarse `practiceHistory`, but should not reschedule SRS cards unless explicitly changed later.
- **Mastery**: remains a deliberate perfect-run challenge and should not defer scheduled reviews.

This separation prevents a learner from cramming a module once and accidentally telling the memory scheduler that every card is now mature.

## Edge cases

- No completed lessons: explain that cards appear after the first lesson and link to Continue.
- Completed lesson with no bank/quiz items: ignore it without treating it as an error.
- Nothing due but new allowance remains: offer the new cards as today’s work.
- Nothing due and daily new limit reached: show the next due time plus **Do 10 more** when eligible unseen cards remain; Custom practice also remains optional.
- **Do 10 more** after a reload: retain the extra allowance already authorized that study day and never re-count cards already introduced.
- No eligible unseen cards remain: hide **Do 10 more** rather than serving scheduled cards early or repeating mature cards.
- Large overdue backlog: show the true count, start with a manageable chunk, and offer Continue review rather than silently discarding the rest.
- Card removed or edited: archive its orphaned review state during normal cleanup; never attach it to a different prompt.
- Clock moves backwards or timezone/reset hour changes: clamp negative durations and recompute study-day labels without rewriting stored `dueAt` timestamps.
- Reload mid-session: already-submitted answers remain saved; resume from the lightweight session snapshot or rebuild the still-due queue without double-counting.
- Course locks turned off: browsing access must not make unfinished lessons eligible for SRS.
- Reset lesson/module progress: decide explicitly whether its review cards are archived. Recommended: archive them until the lesson is completed again, preserving their previous scheduler state for restoration.
- Leech: flag after repeated lapses and offer Suspend or Keep reviewing; do not silently remove it.
- Empty/invalid synced state: normalize safely and rebuild summaries from card records.

## Delivery phases

### Phase 1 — Scheduler core and identity

- Add pure card-id, normalization, due, rating, and queue functions.
- Add a dependency-free Node verification script with fixed timestamps and deterministic randomness/fuzz.
- Cover learning graduation, all ratings, lapse/relearning, reset-hour boundaries, daily new limits, repeatable extra batches, leeches, and malformed saved state.

### Phase 2 — Completed-content course pool

- Normalize quiz and bank questions into review entries.
- Load the active course when opening Review and pool only its completed lessons.
- Verify counts against completed progress and confirm unfinished lessons never leak in when course locks are disabled.

### Phase 3 — Persistence and sync

- Add `reviewCards`, `reviewDayStats`, `reviewSettings`, and optional session snapshot.
- Implement safe boot defaults and normalization.
- Implement per-card cloud merge and legacy `practiceHistory` seeding.
- Exercise local-only, cloud upload/download, and two-device conflict scenarios.

### Phase 4 — Review UI

- Add the home-page review card below Today / target date, plus the secondary Schedule entry point.
- Reuse current MCQ/تركيب/vocab rendering and grading.
- Add source labels, workload counts, interval feedback, caught-up state, repeatable **Do 10 more**, filters, and session resume.
- Preserve focus, scroll, keyboard behaviour, themes, and bidi rendering.

### Phase 5 — Integrate and simplify

- Rename/reframe existing revision controls as Custom practice.
- Ensure Custom practice, Path, Mastery, and lesson quizzes do not move SRS due dates.
- Keep shared `practiceHistory` temporarily for existing weighting and achievements; remove or narrow it only in a later cleanup after all callers are audited.

### Phase 6 — Tune with real use

- Add local-only aggregate diagnostics: reviews/day, lapse rate, interval distribution, backlog, and new-card intake. Do not add remote analytics for this feature.
- After several weeks of real usage, tune learning steps, new/day, and interval multipliers.
- Consider FSRS only when there is enough review history to justify it and a verified implementation can remain dependency-light.

## Verification checklist

There is no test framework in this repository, so verification should combine a pure Node assertion script with the project’s existing checks and live inspection.

- Run the scheduler verification script at fixed times around midnight and the configured reset boundary.
- Confirm the same input and seed produce the same queue/fuzz.
- Confirm a wrong answer returns in-session and is due sooner than a correct one.
- Confirm a correct mature card receives a longer interval than a new card.
- Confirm new cards never exceed the base daily allowance unless the learner explicitly presses **Do 10 more**.
- Confirm each **Do 10 more** press authorizes at most ten additional new cards, survives reload/sync, and can be repeated without double-counting.
- Confirm every due card eventually appears; repeated randomization must not starve overdue cards.
- Confirm all four courses and all existing item kinds render and grade.
- Confirm a course-wide session labels its course/module/lesson source correctly.
- Confirm unfinished lessons never enter Review, including when locks are disabled.
- Confirm answer persistence survives reload without duplicate reps/XP.
- Confirm old saves boot with empty scheduler fields and retain all existing progress.
- Confirm cloud merge does not roll a newer card state back.
- Confirm module progress reset/archive behaviour.
- Confirm keyboard-only use, focus after re-render, mobile layout, themes, and mixed Arabic/English punctuation.
- Run `npm run validate` if content/schema validation changes.
- Run `npm run build:web` after changes to shared UI files.
- Inspect the built web app and desktop app, because the scheduler and persistence code ships to both.

## MVP boundary

The smallest useful release includes:

- completed-lesson eligibility;
- active-course due queue across all of that course's completed lessons;
- bank plus lesson-quiz cards;
- new/learning/review/relearning states;
- automatic Again/Good grading;
- daily new-card limit;
- repeatable optional **Do 10 more** batches after scheduled work is clear;
- home-page card directly below Today / target date, plus the secondary Schedule CTA;
- immediate persistence and cloud merge;
- caught-up and backlog states;
- pure scheduler verification.

Defer advanced statistics, custom learning steps, bury-related-cards controls, importing/exporting Anki decks, FSRS optimization, and manually authored ids. None is required to remove revision planning from the learner.

## Decisions needed from the product owner

1. **Eligibility boundary — confirmed:** unlock review cards only after the whole lesson is completed.
2. **Default scope — confirmed:** review only the active course, while preserving each course's schedules when the learner switches courses.
3. **Answer controls — still open:** recommended: automatically map wrong to Again and correct to Good, with optional Hard/Easy overrides. Alternative: require the full Again/Hard/Good/Easy choice after every answer.

The architecture above supports either answer to each question. If no preference is supplied, the recommended choices produce the least planning and the lowest-friction daily habit.

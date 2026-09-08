# Shared course mastery

All five course pages now distinguish lesson completion from concept mastery.
Logic retains its authored concept graph and assessment policy. Introductory
and Advanced Nahw and Sarf use that same engine for their 1,871 teaching
concepts, with course-specific denominators of 582, 738, 311 and 240.

The existing Review scheduler still owns card due dates. Completing a lesson
or taking a challenge does not reschedule those cards. Literature retains its
separate acquisition and transfer model.

## Evidence and levels

The policy is the Logic engine in `js/mizan/mastery/engine.js`:

- Introduced: encountered in teaching or an assessment.
- Familiar: at least three distinct examples and 60% independent success.
- Competent: at least six distinct examples, 85% independent success, two
  application examples and successful recall on at least two UTC dates.
- Mastered: competence plus eight distinct examples, two exercise families
  and a successful exercise of difficulty five.
- Retained: mastery plus ten distinct examples, 88% independent success,
  three successful dates and a span of at least ten days.

These are the existing Logic thresholds, including its rolling forty-piece
evidence window. Course summaries count Competent or above under competent,
and Mastered or above under mastered; these are overlapping totals.

Only first submissions are recorded. Corrections cannot replace an earlier
miss. Guided checks and hinted answers are not independent success. Opening
lesson notes during a native exercise records support. The same question's
identity is shared between lessons, quizzes and reviews, regardless of choice
order. Repeating a question on the same date cannot erase its first miss.

Native assessment hooks cover guided checks, sentence/table analysis, lesson
quizzes, custom practice, review, mixed Path checkpoints and lesson challenges.
Vocabulary translation cards remain vocabulary practice; they do not prove
mastery of the surrounding grammar lesson.

## Source bindings and authoring

`js/learning/mastery.js` builds a graph when a native course is lazily loaded.
Concept ids are `moduleId/lessonId/cINDEX`, matching the existing stable
concept ordering used by exercise saves. Do not reorder existing concepts
without a migration.

The adapter binds questions through a direct teaching index, an identical
guided question, an explicit heading reference, or an unambiguous named term
in that lesson's source. It never awards a question to every concept in its
lesson. Questions without a reliable binding remain available for practice
and spaced review but do not affect concept mastery.

An author can override or supply the binding without changing any UI:

```js
{
  // Existing question fields...
  mastery: {
    conceptIndices: [2],
    difficulty: 4,
    family: 'application',
    evidenceKey: 'optional-shared-identity-for-equivalent-variants',
  },
}
```

Use difficulty 2 for recognition, 4 for application, and 5 for diagnosis,
transfer or structural analysis. A concept can supply `masteryAliases` for
equivalent names that actually occur in its exercises. Quiz metadata survives
conversion to review, revision and challenge questions.

The legacy banks were not authored with concept tags. The verification report
lists source-linked and practice-only items by course. Some concepts need more
explicitly tagged, varied application examples before they can meet Logic's
mastery threshold. Do not lower thresholds or invent independent answers to
hide these content gaps.

## Saved progress and sync

`mizanCourses[courseId]` stores immutable attempts and derived concept records.
Existing completions and submitted guided checks migrate as introduction only;
old aggregate quiz scores cannot establish unrecorded independent mastery.
Completions, scores, unlocks, Literature and Review records remain intact.

Sync unions attempts by id and replays them through the course's engine when
its content is available. Module-reset timestamps suppress stale evidence and
coverage, including resets made on an older client. Quiz attempt ids survive
refresh. A new quiz or practice run receives a new session identity.

The old perfect-score tests are now labelled **challenges**. Their existing
`masteryV2` and Path result keys are retained for compatibility. Passing one
does not independently label a learner's concepts Mastered.

## Verification

`npm run verify:mastery` checks shared thresholds, independence, stable question
identity, source bindings, coverage migration, lazy loading, save round trips,
sync symmetry and reset cutoffs for all four native courses. The regular
course, Logic, Literature, Review and server checks cover adjacent behaviour.

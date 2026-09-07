# Advanced Nahw learning update

Updated 8 September 2026. This extends the local Mīzān integration with Logic-style teaching and exercises for Advanced Nahw. The other grammar courses remain available with their existing learning flows.

## Learning experience

All 30 modules and 138 lessons now progress through focused Learn, Worked example and Takeaway screens, followed by explicit answer checking. Source rule and example boundaries determine the sequence. The opening word lesson has a curated sequence, shorter question prompts and interactive comparisons of words and constructions.

The course's 101 sentence diagrams support selecting individual parts to inspect their roles. The complete original analysis remains available beside the explanation. Independent practice includes 267 structured classification or grammatical-role exercises drawn from the course's existing material. Lessons 09/l1 and 13/l6 have no suitable short analysis item and retain their existing concept checks and final lesson check.

Hints, original answers, expected answers and corrections use the shared Mīzān exercise layout. The final lesson check uses that same layout and requires an explicit Check answer action. Corrections retain the scored first answer. The original 80% completion requirement still applies.

## Content and progress

The original 738 concepts, 3,715 teaching blocks, 205 tables, 828 final quiz questions and 3,036 review-bank items are unchanged. Teaching screens refer to the source blocks in their original order; every block is covered exactly once before its concept check. The Sciences review presentation and scheduler are unchanged by this update.

Existing lesson sessions migrate by concept and step identity. Draft analysis fields, first answers, corrections and lesson-check positions persist through refresh. Cloud merging preserves original submitted answers when merging completed corrections. No new runtime dependencies, account fields or database schema changes were introduced.

## Verification

- `npm run verify:nahw`: passed across all 138 lessons, including every rendered study step, source preservation, analysis grading, session migration and correction merging.
- `npm run verify:mizan`: passed across all 498 lessons, Logic grading, migration, recovery and progress merging.
- `npm run verify:review`: all 34 scheduler checks passed.
- `npm run validate`: passed for all courses and reading volumes. The same five existing advisories concern short literature sentence-builder pools.
- `npm run build:web`: passed.
- JavaScript syntax checks and `git diff --check`: passed.

Browser checks covered a complete opening lesson, hints, wrong answers, corrections, refresh recovery, a failed final check, retry, successful completion and next-lesson navigation. Later lessons covered selectable sentence roles, full-analysis expansion, lesson notes and keyboard focus. Mobile checks at 390px included wide Arabic tables and 130% lesson/interface text; the page did not overflow and the lesson body did not clip. No browser JavaScript errors were reported during these checks.

Browser verification sampled the opening lesson and later grammar material rather than manually completing all 138 lessons. The existing explanations were preserved and reorganized; this update is not a new scholarly audit of the entire curriculum. Testing used an isolated local browser profile and did not modify live learner accounts.

## Preview and release

Open `http://localhost:4173/#/module/01/l1` for the first Advanced Nahw lesson. The existing local source and built preview servers remain available. These changes have not been published to the hosted app.

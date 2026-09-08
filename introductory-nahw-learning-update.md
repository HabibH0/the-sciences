# Introductory Nahw learning update

All 208 lessons across 21 modules now follow the Logic course's guided sequence: teaching, worked examples, guided checks, independent practice and a recap. Responses require an explicit check. Corrections retain the learner's original attempt, and the existing final quizzes and pass threshold remain in place.

The presentation includes 255 interactive source-table comparisons and 337 sentence explorers. Each sentence explorer highlights the exact word or phrase belonging to the selected source role, including nested phrases. The complete original analysis remains available. Larger and schematic diagrams retain their complete source presentation. The first lesson also has an interactive noun, verb and particle comparison.

Each lesson has two independent exercises drawn from its own content: 365 grammatical analyses and 51 bank questions across the course. Analysis exercises use one complete, non-overlapping layer of source roles, keeping multiword phrases together. All 198 authored summaries remain in the recap; the ten review lessons without a summary recap their original concepts.

The original module files are unchanged: 582 concepts, 2,829 teaching blocks, 298 tables, 353 diagrams, 555 guided checks, 1,353 quiz questions and 11,646 bank items. The registry adds a presentation adapter without changing source data or review identities. Old sessions resume at their corresponding concept or check. Example selections, expanded references, reading positions and unfinished answers persist through refresh.

The adapters are in `js/learning/intro-nahw.js` and `render-intro-nahw.js`. Table comparisons now share `comparison.js` with Advanced Sarf. Exercises use the existing guided grammar renderer and progress model. Enter on a source-reference disclosure now toggles that reference without also triggering the lesson's advance shortcut. No runtime dependency or backend change is required.

## Verification

- `verify:intro-nahw` checks every lesson and all 5,587 rendered states, original content preservation, source phrase boundaries, response grading, corrections, quizzes and legacy session positions.
- `verify:nahw`, `verify:sarf`, `verify:mizan`, `verify:review` and `validate` pass. Validation retains the five existing literature notices.
- `build:web` passes and generates the updated course metadata.
- Desktop geometry: all 208 lessons and every selectable example pass at 1024 × 600 (7,693 teaching/recap pages). At 1280 × 720 with 130% text and all source references expanded, all lessons pass (16,272 pages). The audit checks overflow and verifies that pagination retains the original text in order.
- Browser flow: the first lesson completes through checks, word classification, vocabulary practice, recap and final quiz. A deliberately wrong quiz answer corrected afterward still yields 5/6 on the first attempt. Completion and the course review entry remain available.
- Browser persistence and keyboard checks cover example selection, expanded analysis, partial answers, explicit grading, corrections, boundary-button focus and Enter on disclosures. The shared Sarf comparison controls also pass a regression check.
- Mobile at 390 × 844: teaching, sentence explorers, comparison cards and grammatical-analysis fields reflow without horizontal overflow. Partial answers and comparison choices survive refresh; vertical scrolling remains available.

The local source preview is on port 4173 and the built preview on port 4174. This update has not been published.

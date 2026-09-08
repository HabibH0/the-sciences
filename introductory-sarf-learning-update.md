# Introductory Sarf learning update

All 66 lessons across 13 modules now follow the Logic course's guided sequence: teaching, worked examples, guided checks, independent practice and a recap. Answers require an explicit check, and corrections preserve the original scored attempt. The existing quizzes, pass threshold, course completion and review scheduler remain in place.

All 536 source tables have an interactive comparison view. Learners move between examples and, for wide conjugation tables, groups of up to three related columns. The first column stays visible as context. Long explanations receive more width, and every original row, heading and cell remains available in the complete table. The first lesson also lets learners inspect the verb and attached pronoun separately.

Each lesson has two independent exercises: 57 morphology matching exercises and 75 questions from the existing banks across the course. Matches use reviewed source-table coordinates, avoid ambiguous cues, and sample distinct forms across the paradigm. Independent questions exclude prompts already used in that lesson's guided checks. The 56 authored recaps are retained; the ten lessons without a recap bring together their original concepts.

The original module files are unchanged: 311 concepts, 1,206 teaching blocks, 301 guided checks, 463 quiz questions and 3,651 bank items. The review pool retains all 4,114 bank and quiz entries. Old sessions resume at their corresponding concept, check or summary. Comparison selections, reading positions, unfinished responses and quiz results persist across document reloads.

The adapters are in `js/learning/intro-sarf.js` and `render-intro-sarf.js`. The introductory books share source-block planning and recap rendering through `source.js`; subject-specific comparisons and exercises remain separate. No runtime dependency or backend change is required.

## Verification

- `verify:intro-sarf`: original source preservation, all 8,077 rendered states, every comparison column and row, matching answers, corrections, independent questions, review counts and legacy session positions.
- `verify:intro-nahw`, `verify:nahw`, `verify:sarf`, `verify:mizan`, `verify:review`, `validate` and `build:web` pass. Validation retains five pre-existing literature notices.
- Desktop geometry checks cover every lesson and comparison state at 1024 × 600 and at 1280 × 720 with 130% text. A separate 130% run checks every expanded complete table. The checks verify overflow and preserve the original text order through pagination.
- Browser flow: the first lesson completes through guided checks, comparison navigation, matching, independent practice, recap and final quiz. A deliberately wrong quiz answer corrected afterward still scores 5/6 on the first attempt. The result survives a full document reload, and lesson completion offers the next lesson and course review.
- Keyboard and persistence checks cover example/group navigation, boundary focus, references, lesson notes, corrections, partial responses and saved table choices.
- Mobile at 390 × 844: teaching, comparisons and matching fields reflow without horizontal overflow. Table choices and unfinished answers survive a fresh iframe load; grading and natural scrolling work.

The source preview is on port 4173 and the built preview on port 4174. This update is local and has not been published.

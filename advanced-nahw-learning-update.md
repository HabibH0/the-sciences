# Advanced Nahw learning update

## Full course: 10 September 2026

All 138 Advanced Nahw lessons now use authored cards based on the approved
Lesson 1 design. The remaining 128 lessons and their incremental checks are
documented in [the course rollout record](advanced-nahw-course-rollout.md).
That record supersedes the earlier scope and pagination descriptions below.
Everything remains local and uncommitted, with live previews on port 4173.

## Lessons 2–10: 10 September 2026

The next nine lessons now use the approved Lesson 1 presentation. Lesson `01/l1` remains the reference, and lessons beyond `02/l5` retain their existing layouts. Everything remains local and uncommitted.

| Lesson | Subject | Teaching cards | Guided checks | Analysis exercises | Recap | Final questions |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| `01/l2` | Signs of the Noun | 12 | 6 | 2 | 1 | 6 |
| `01/l3` | Kinds of Noun | 8 | 6 | 2 | 1 | 6 |
| `01/l4` | The Verb | 14 | 6 | 1 | 1 | 6 |
| `01/l5` | The Particle | 6 | 4 | 1 | 1 | 6 |
| `02/l1` | Nominal and Verbal Sentences | 12 | 6 | 2 | 1 | 6 |
| `02/l2` | Reporting and Performing | 12 | 5 | 2 | 1 | 6 |
| `02/l3` | The Phrase: Structure | 7 | 5 | 2 | 1 | 6 |
| `02/l4` | The Governing Element | 14 | 6 | 2 | 1 | 6 |
| `02/l5` | Complete Speech | 8 | 5 | 1 | 1 | 6 |
| Total | | 93 | 49 | 15 | 9 | 54 |

Each teaching card has an authored, complete learning idea. Whole definitions, examples, explanations and exceptions remain together. Longer source tables use deliberate groups of complete comparison rows, independent of viewport size. Every one of the nine lessons' 238 original teaching blocks, including every table row, is covered exactly once. Arabic definitions remain verbatim. English display copy removes repetition while preserving the distinctions and examples; full original wording remains in Notes.

The shared Arabic visual tiles explicitly flow right to left, so زيد precedes قائم from the right and questions precede their replies. English labels retain their own left-to-right direction. The quoted question and reply in the omitted-core example are isolated as complete Arabic passages, including their punctuation. A browser regression check first reproduced the incorrect tile positions and split reply, then passed after correction. All 100 teaching cards across the first ten lessons were rechecked at five viewports, three Arabic fonts and three saved size preferences: 4,500 states passed, including checks of the tiles' actual screen positions. Use `teaching=1` with the browser audit for this focused sweep.

Desktop cards pair definition or comparison panels with labelled explanations. Additional visual comparisons repeat the relevant examples and distinctions. Phones stack the source material in reading order and omit those duplicate visuals. The compact header retains progress and card count. Type roles match the approved reference at each viewport category, with inline Arabic inheriting its surrounding size. Saved text preferences never resize these lesson cards, and automatic pagination stays bypassed. `fitIdeaCard` measures overflow without changing text size.

Questions, hints, complete choices and correction feedback stay in the same card. Checking, hints, correction and continuation use the bottom navigation. Analysis fields retain native accessible selects and their original values, with a wrapping display of long selections. Numbered fields connect to the complete original and expected answers in feedback. Display adapters shorten guided and final quiz wording without changing option indices, correct answers or distractor meanings. First-answer grading, the 80% pass threshold, review-bank identities and stored source content are unchanged. Rendered lessons, Notes and exercises contain no em dashes.

Existing reading sessions migrate by their original concept and source block before matching reused numeric card IDs. Exercise identities, first answers, corrections and saved positions survive refresh. No runtime dependencies or persistence schema were added.

Implementation is in `nahw-foundations.js` (authored plans and copy), `nahw-foundation-visuals.js` (comparisons and labels), `nahw-foundation-practice.js` (display-only question adapters), and `render-foundations.js`, with shared integration in `nahw.js`, `render-nahw.js`, `render-native.js`, `render-study.js`, `render-word.js` and `mizan.css`.

### Verification

- The browser audit passed 32,220 states across all first ten lessons at 320×568, 390×844, 430×932, 1024×600 and 1280×800. Each viewport covers Naskh, Traditional Arabic and Amiri with saved 85%, 100% and 130% text preferences. It exercises teaching, hints, longest wrong analysis selections, correction editing, corrected and correct practice answers, recaps and all final questions. Checks include complete visible content, consistent type roles, inline Arabic sizes, progress, footer actions, touch targets and absence of scrolling or pagination. Final opening-card visual refinements received an additional 450 focused checks across the same matrix.
- Real app interaction tests completed all nine lessons in an isolated browser: all nine sets of original Notes, 64 practice corrections, 64 refresh recoveries, final checks, completion badges, a failed lesson check followed by a successful retry, and preservation of first-attempt grading. No browser JavaScript errors occurred.
- Source preservation and session migration passed across all 138 Advanced Nahw lessons. Mīzān integration passed across all 498 lessons. Bidi checks preserved 177,239 Arabic-bearing source strings. All 34 review scheduler checks passed. Content validation and the web build passed; the five existing literature pool advisories are unchanged.

Browser tools: `scripts/verify-foundation-browser.mjs` runs the isolated layout audit; `scripts/verify-foundation-flows.mjs` exercises the actual application. Set `PLAYWRIGHT_MODULE` and `CHROMIUM_EXECUTABLE` to an available local runtime if Playwright is not installed in the workspace. The render-only dashboard is `/scripts/verify-foundations.html?width=390&height=844&full=1`. Reports and review screenshots are saved under ignored `artifacts/nahw-foundations/`; no test uses the learner's live browser profile.

### Local review

The live-reload server remains on port 4173. Desktop: `http://localhost:4173/#/module/01/l2`. Mobile: `http://localhost:4173/scripts/preview-mobile.html?lesson=01/l2`, with 320, 390 and 430px widths. Changing the preview width preserves the iframe's current lesson position.

The initial browser verification used a separate visible Chromium preview through `scripts/preview-foundations.mjs`, with the user's explicit authorization. Its temporary profile keeps test answers separate from the learner's regular progress.

The recurring preview loading failure was subsequently reproduced: three mobile preview tabs opened six persistent live-reload streams and exhausted Chromium's HTTP/1.1 connection limit, preventing the last lesson from starting. `scripts/dev-server.mjs` now uses short, non-overlapping version requests once a second. CSS still updates without reloading the current card, code changes reload the page, and server restarts recover automatically. Old stream clients receive a one-time reload to upgrade. Desktop and mobile now both render in the in-app browser. The mobile width selector was verified at 320, 390 and 430px while preserving the current card.

`scripts/verify-dev-reload.mjs` passed a regression test with eight simultaneous iframe previews, CSS updates without page reload, JavaScript reload, server restart recovery and draft preservation. It runs in a temporary fixture with an isolated browser profile. Nothing has been committed or published to GitHub.

The sections below record the earlier prototype and course-wide work.

## First-lesson prototype: 9 September 2026

Lesson `01/l1` uses seven authored idea cards, six concept checks, one classification exercise and a recap. The existing six-question lesson check follows. Other lessons retain their layout.

The header keeps a visible progress bar and card count beneath a compact lesson title. The complete card and its navigation stay within the viewport. There is no in-lesson text-size control, content pagination, scrolling, or per-card font fitting. CSS sets fixed type roles for each viewport category, independent of saved text preferences. Body text is 20px on roomy desktops, 17px on shorter desktops, 18px on regular phones, and 14px on compact phones. Every card within a viewport uses the same type roles. Inline Arabic inherits the size of the surrounding text.

The visual structure pairs a definition with labelled explanations and examples. Desktop cards use two columns, with compact comparisons below the definitions; phones use a single reading sequence. The compound cases and recap have dedicated layouts. Answer lists keep reasonable control sizes rather than expanding into oversized tiles. Checking, hints and correction actions share the screen footer, leaving the full question, choices and feedback together inside the card. Existing data actions, grading and saved progress remain in use.

Teaching paragraphs have concise presentation copy mapped to every original source block. All grammatical definitions, distinctions, examples and exceptions are retained; Arabic definitions and core quotations remain verbatim. Full original wording remains in Notes. Practice prompts, options and hints are shortened where repetition obscured the question. Stored source lessons, answer indices, review questions and final quiz content are unchanged.

Rendered learning text replaces em dashes with semicolons, including lessons, notes and quizzes. Stored source strings, answer values, markup attributes and code samples remain unchanged.

Local previews: `http://localhost:4173/#/module/01/l1` and `http://localhost:4173/scripts/preview-mobile.html`. The phone preview offers 320, 390 and 430px viewports. Both use the live-reload development server. Nothing has been committed or published.

Verification covers source preservation, rendering, grading, saved-session migration, Mīzān integration, bidirectional text and the web build. The focused browser audit exercises complete teaching cards, hints, wrong answers, corrections, classification, recap and quizzes. It checks fixed typography across cards and saved preferences, matching inline Arabic sizes, intact content, visible progress, footer actions, touch-target sizes, and absence of overflow, em dashes and text-size controls. Use `/scripts/verify-responsive.html?word=1&auto=1&width=390&height=844&full=1` to check Naskh, Traditional Arabic and Amiri at saved 85%, 100% and 130% preferences. It runs entirely in memory without saving learner progress. All 2,196 rendered states passed at 320×568, 390×844, 1024×600 and 1280×800, including the footer action and fixed-typography checks.

The notes below describe the earlier course-wide implementation; its viewport pagination no longer applies to `01/l1`.

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

Desktop teaching now uses the available viewport height, with Back and Continue remaining visible. Longer explanations, rule boxes, tables and summaries continue over additional pages without reducing the selected text size. Page positions and expanded analyses survive refresh. Interactive diagrams keep their controls and explanations together. Mobile retains the continuous reading layout.

The browser geometry checker verified all 1,678 Advanced Nahw teaching and summary steps at 1280×720, including 130% interface/lesson text and expanded analyses, and at 1024×600 with standard text and expanded analyses. It checks page height, footer visibility and preservation of the original text. Notes remain available as a separate reading dialog. On exceptionally small windows where an indivisible object cannot fit, the full content remains readable rather than being clipped.

Open `http://localhost:4173/#/module/01/l1` for the first Advanced Nahw lesson. The existing local source and built preview servers remain available. These changes have not been published to the hosted app.

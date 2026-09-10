# Logic course layout update

Updated locally on 10 September 2026. All 30 Logic lessons use the fixed lesson-card presentation. The 132 authored teaching steps, wording, exercises, answer identities, lesson selection, grading and mastery rules are preserved. Full original Notes remain available.

The implementation is presentation work. No files in `content-mantiq/`, `server/content/mantiq.json`, the graders, or the course and mastery engines were changed.

## Presentation

- Compact lesson header with the title, visible progress bar, card count and Notes. Typography has fixed roles at each screen size and ignores saved lesson-size preferences. Inline Arabic inherits its surrounding size.
- Whole teaching steps stay together. Automatic paragraph and sentence pagination is bypassed. Definitions, quotations, examples, lists and tables use the available card space.
- Desktop pairs teaching with interactive diagrams. Phones and short desktop windows provide an explicit explanation/diagram switch within the same card. On phones, crowded categorical diagrams have a separate Meaning view containing their full interpretation, distribution labels and caption. The diagram itself keeps a readable minimum size.
- Narrow tables have deliberate column proportions. The five-column disjunction comparison becomes three labelled records on phones, preserving all headings and cells. The mixed and pure hypothetical syllogism paragraphs are separate labelled views on phones and paired on desktop. Their original wording is unchanged.
- Check, hint, correction and continuation actions live in the bottom navigation. Larger forms have named sections for components, classification, distribution, results and terms. Original field indices and responses are retained across sections. Long choice sets use a standard selector with the original option indices.
- Feedback offers Explanation, Expected and Your answer views. A failed correction and a failed grading request each have a readable recovery view, preserving the draft and original attempt.
- Layout selections are stored separately in `session.logicLayout`, keyed by the original step or item ID. Existing lesson steps and saved answer evidence are not migrated or replaced.
- Rendered learning text and Notes normalize em dashes using the existing punctuation pass. Course source files remain untouched.

## Verification

The final named reports below contain **141,537 passing layout checks**, with no failures or browser errors. Earlier diagnostic reports in the ignored artifact directory may record failures that were subsequently fixed.

| Coverage | Viewports | Checks |
| --- | --- | ---: |
| Every teaching step, every diagram variant, diagram/meaning views and the mixed/pure branches; three Arabic fonts and 85/100/130 saved size preferences | 320×568, 390×844, 430×932, 1024×600, 1280×800 | 16,065 |
| All 3,066 exercise definitions, including initial, completed, hinted, graded, original answer, expected answer, correction and corrected states | 320×568, 390×844, 1280×800 | 93,558 |
| Representative interaction and field-schema extremes across all three Arabic fonts and saved size preferences, including request failures and failed corrections | 320×568, 430×932, 1024×600 | 31,914 |

The full 320px bank run also includes request failures and failed corrections. The 390px and 1280px full-bank runs precede those two additional audit phases. Checks cover card and page bounds, visible footer actions, field and option coverage, fixed type sizes, inline Arabic sizing, table-cell text overflow, diagram size, source wording and the absence of automatic pagination.

Real app checks completed all 30 lessons and compared all 30 Notes with the original HTML. They exercised **76 incorrect original attempts, successful corrections and reloads**, retaining the original score and answer every time. Separate 320px flows checked the nine-field analysis, five-field obversion, reconstruction list and fifteen-choice selector. Recovery tests exercised a failed grading request and an unsuccessful correction followed by a successful retry.

The actual mobile preview wrapper passed at 320, 390 and 430px: changing width preserved the card, saved state and iframe identity; refresh restored the card. A separate interactive diagram run preserved the selected E form and Meaning view through all three widths and a reload, then returned to the full-size diagram. Visual review covered 94 representative teaching and diagram screenshots. That review led to explicit fixes for broken table words and overly small diagrams, beyond the initial geometry checks.

Other passing checks:

- `npm.cmd run verify:mizan`: all 498 lessons, all Logic graders/responses, save migration, merge, reset and mastery checks.
- `npm.cmd run verify:bidi`: 29 fixtures and 177,239 Arabic-bearing course strings preserved.
- `npm.cmd run validate`: all courses valid, with the same five pre-existing literature exercise-length notes.
- Advanced Nahw Lesson 1 regression: 612 states at 320×568 across fonts/preferences.
- Advanced Sarf final lesson regression: 630 states at 320×568 across fonts/preferences.
- `npm.cmd run build:web`, JavaScript syntax checks and `git diff --check`.

The isolated browser audits never use the learner's browser profile. All changes remain local and uncommitted.

## Local previews and implementation

- Desktop: http://localhost:4173/#/module/logic-terms/lesson_sound_definitions
- Mobile: http://localhost:4173/scripts/preview-mobile.html?lesson=logic-terms/lesson_sound_definitions
- Rendering: `js/learning/render-logic.js`, integrated through `render-study.js` and `render-word.js`.
- Controls and saved panel state: `js/main.js`; original field controls are reused from `js/learning/exercises.js`.
- Styles: the Logic-scoped section of `mizan.css`.
- Render audit: `scripts/verify-logic-layout.html`, `verify-logic-layout.mjs`, `verify-logic-browser.mjs`.
- Interaction audit: `scripts/verify-logic-flows.mjs` (default: all lessons; `--first`: request/correction retries; `--groups`: larger forms).
- Visual review: `scripts/review-logic-layout.mjs`.
- Mobile wrapper: `scripts/verify-mobile-preview.mjs --logic`.

Browser scripts accept `PLAYWRIGHT_MODULE` and `CHROMIUM_EXECUTABLE` for an existing local test runtime. For example:

```powershell
node scripts/verify-logic-browser.mjs 'width=320&height=568&full=1'
node scripts/verify-logic-browser.mjs 'width=320&height=568&exercises=1'
node scripts/verify-logic-browser.mjs 'width=1024&height=600&exercises=1&sample=1&full=1'
node scripts/verify-logic-flows.mjs
node scripts/verify-mobile-preview.mjs --logic
node scripts/verify-mobile-preview.mjs --logic-visual
```

Final layout reports are under the ignored `artifacts/logic-course/` directory: the five `teaching-WIDTHxHEIGHT-full.json` files; `exercises-320x568.json`, `exercises-390x844.json`, `exercises-1280x800.json`; and the three `exercises-WIDTHxHEIGHT-sample-full.json` files for 320, 1024 and 430px. Interaction reports are `flows.json`, `flows-retries.json` and `flows-groups.json`.

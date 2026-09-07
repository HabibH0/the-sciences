# Mīzān integration validation

Validated 8 September 2026 against the production web build. Release base: `a461b8e2285d34660786c407086042a63ae5ede4` in `HabibH0/the-sciences`.

## Delivered behavior

The five-course catalogue contains 498 lessons: Logic, Introductory Nahw, Introductory Sarf, Advanced Nahw and Advanced Sarf. Course overviews, lesson lists, teaching, practice and completion screens share Mīzān typography, green accents and navigation. The original Sciences review question layout and scheduling behavior remain, with Logic interactions added to its review, revision and mastery pools.

All 468 grammar lessons retain their original 1,871 concepts, 1,834 inline checks, lesson exercises, 2,980 quiz questions and 19,519 bank items. Teaching now advances through concepts, checks, practice and summary. Grammar quizzes retain their original pass requirement. Rich Arabic prose, rule boxes, tables and grammatical diagrams use the existing renderers.

Logic retains its 30 authored lesson flows, 120 concepts, six interactive visual families and supported exercise interactions. Original graded attempts remain visible when correcting an answer. Concept mastery and lesson completion are distinct. Canonical source material, assessments and exclusions are preserved under `curriculum/mantiq`; the runtime contains the prototype's 3,066 supported items, including 2,817 scored items. No new frontend framework or runtime dependency was introduced.

The 14-volume, 292-chapter reading library remains available, including paragraph reading, translations, dictionary lookup, vocabulary marking and practice.

## Progress and reliability

- Existing grammar, review, library, account and device identifiers are retained. New versioned fields store lesson sessions, Logic evidence and resumable quizzes.
- Migration makes an exact, one-time backup of the original browser save. Malformed JSON is preserved for download. Storage failures visibly report the problem and protect the previous save.
- Pending browser saves write synchronously before refresh; backgrounding also flushes pending progress. Drafts, graded answers and lesson positions survive refresh.
- Cloud merging retains independent Logic attempts, replays mastery after lazy content loading and respects reset timestamps. Original attempts remain immutable during corrections.
- The first wrong answer to a new review card now counts toward the daily introduction allowance. Existing intervals, ratings and missed-card reinsertion remain intact.
- Logic grading uses the original validator and a bounded backend endpoint. Network errors retain the response and allow retry. Private grading data is excluded from the static build.
- Conditional server saves now use a transaction and row lock with Postgres, or a synchronous comparison and atomic file replacement locally. Request limits and authentication throttling were added.

## Verification

| Check | Result |
| --- | --- |
| `npm run validate` | Passed: five curricula and all 14 literature volumes |
| `npm run verify:mizan` | Passed: complete grammar coverage, all 30 Logic lesson plans and 3,066 grader/response checks, migration, recovery, immediate saving, merging, reset handling and practice pools |
| `npm run verify:review` | All 34 scheduler checks passed |
| `npm run verify:server` | Passed against a disposable local database: authentication, protected progress, competing conditional writes, invalid input, grading, byte limits and authentication throttling |
| `npm run build:web` | Passed; private server/source paths excluded |
| JavaScript syntax/import checks and `git diff --check` | Passed |
| Logic browser journey | Teaching, interactive diagram, complete lesson, original wrong answer, correction, completion and review verified |
| Grammar browser journey | Teaching/check sequence, six-question quiz, completion and next lesson verified; representative teaching checked in all four grammar courses |
| Review browser journey | First wrong answer, Again scheduling, reinsertion, correction and session results verified |
| Refresh and keyboard | Draft, graded answer and quiz position restored; lesson notes keyboard focus, Tab containment and Escape verified |
| Responsive layouts | Desktop and 390px mobile checked; 130% interface/lesson text and wide Arabic tables checked without page overflow |
| Built reader | Paragraph navigation, dictionary details and vocabulary marking verified |
| Grader outage | Stopped the preview grader, submitted an answer, verified the retained response/error, restarted the grader and successfully retried |
| Built browser console | No JavaScript errors reported in the final built-app walkthrough |

Five existing content advisories remain: short sentence-builder pools in Qiraah volume 1 chapter 28, Qasas volume 7 chapter 19, and Qasas volume 12 chapters 5, 20 and 33. These contain three or four eligible sentences and do not fail validation.

## Release

The existing deployment remains GitHub Pages at `/the-sciences/`, with the separate Render service providing accounts and grading. The Pages workflow validates the build and checks the deployed grader's curriculum version, item count and a known answer before publishing. If the backend has not updated, publication stops and the preceding frontend stays live.

Local preview: `node scripts/dev-server.mjs 4174 --built`, then open `http://localhost:4174/`.

## Verification limits

No live account or production progress was modified during testing. The Postgres transaction was reviewed in source but was not executed against a configured test database; local concurrency tests exercised the file store. Browser checks sampled representative lessons and interactions rather than manually completing all 498 lessons or certifying every explanation and distractor. Reduced-motion rules are present in both motion systems but were not tested across an operating-system/device matrix. The repository's current supported release is the web app and Node server; obsolete Electron packaging is not included.

Content migration does not transfer personal learner history from the prototype's separate localhost browser database. The original prototype checkout remains unchanged.

# Mīzān integration review

Reviewed 7 September 2026. Scope: inspect both codebases, compare the deployed Sciences app with its local checkout, exercise representative user journeys, and identify the integration work before implementation.

**Recommendation.** Use the current deployed Sciences application as the integration base. Preserve its existing courses, accounts, saved progress, literature tools and review engine. Adopt Mīzān’s visual language and focused lesson progression, migrate the logic course and its exercise types, and present all five courses through one consistent catalogue. This needs a shared lesson model, deliberate progress migration and a unified design system; a visual reskin alone would leave conflicting learning behaviour underneath.

Application source was not changed during this audit. Builds and destructive-state reproductions ran in temporary copies or in-memory fixtures. The existing local deletion of `second-pass-product-polish-audit.md` was preserved.

**The local Sciences checkout is behind the deployed product.** Local `main` is at `d494f25`. The deployed app and remote `main` are seven commits ahead, at [`a461b8e`](https://github.com/HabibH0/the-sciences/commit/a461b8e2285d34660786c407086042a63ae5ede4). The [successful Pages deployment](https://github.com/HabibH0/the-sciences/actions/runs/33461011712) points to that newer commit. Those intervening changes include the Anki-style review scheduler, course-wide revision, fuller quiz results, keyboard controls and question-card refinements. I downloaded that exact version into a temporary directory and reviewed/tested it. Starting implementation from the current local files would omit important parts of the review experience you asked to retain.

**What is actually in the two products.** Counts below come from the registered content and compiled runtime, rather than older README figures.

| Course | Modules / units | Lessons | Existing teaching concepts | Lesson quiz items | Separate practice-bank items |
| --- | ---: | ---: | ---: | ---: | ---: |
| Introductory Nahw | 21 | 208 | 582 | 1,353 | 11,646 |
| Introductory Sarf | 13 | 66 | 311 | 463 | 3,651 |
| Advanced Nahw | 30 | 138 | 738 | 828 | 3,036 |
| Advanced Sarf | 15 | 56 | 240 | 336 | 1,186 |
| Sciences subtotal | 79 | 468 | 1,871 | 2,980 | 19,519 |
| Mīzān Logic | 4 | 30 | 120 | Different assessment model | 3,066 usable practice items |

The combined catalogue would contain **five courses and 498 lessons**. The two concept and exercise schemas differ, so their counts should not be treated as directly interchangeable measures of learning volume. Sciences also contains 1,834 exercises embedded in teaching concepts.

Sciences includes **14 literature volumes and 292 registered chapters**, with comprehension exercises, word lookup, unknown-word tracking, sentence building and grammar tools. These should remain available within the Mīzān visual shell as a library. Its mixed-course “My Path” implementation exists but its navigation entry is intentionally disabled; restoring that feature is a separate product change. The `tarkeeb/` research/verification files are not all shipped as a standalone learner tool.

Mīzān has one installed logic course spanning Terms, Propositions, Inference and Informal Fallacies. It already supports multiple course records and conditionally displays a **Subject selector** when more than one is installed. It needs a proper multi-course landing catalogue, course overviews and consistent progress presentation—not a switching mechanism invented from scratch.

**Learning and review are distinct systems to preserve.** The Sciences lesson experience is concept-based, with rich Arabic explanations and exercises followed by a lesson quiz. Its newer review experience presents one question at a time, schedules retrieval, automatically applies Again/Good, supports Hard/Easy adjustments, reinserts missed cards and limits new cards per day. Custom revision can target modules, courses and vocabulary. The question-card composition, answer rows, source context, feedback, keyboard controls and session results are the review experience to retain.

Mīzān’s logic lesson flow is more deliberately authored: short teaching steps, worked examples and diagrams, guided checks, independent practice, hints, correction and access to complete source notes. Its 30 lessons have 192 authored flow steps. It distinguishes concept mastery from lesson completion and preserves the original graded attempt when the learner makes a correction. Sessions and unfinished answers can resume after refresh. Its supported exercises include choice, structured response, text-span selection, Venn regions, sentence building, diagram choice and reflection.

The target should apply that **lesson progression** across Nahw, Sarf and Logic while retaining subject-specific renderers. Sciences content includes HTML, tables, rule/definition boxes and hundreds of grammatical diagrams. Mīzān’s Markdown renderer skips raw HTML. Blindly copying Sciences explanations into Markdown would lose content; splitting every paragraph into a screen would produce poor lessons. Conversion needs semantic teaching blocks with coverage checks, followed by representative editorial review across all four existing courses.

Mīzān’s compiled source contains 3,394 raw practice items. Its current adapter excludes 328: 84 lack sufficient learner-facing structured stimulus, 240 contain prerequisite metadata rather than usable prompts, and four lack distinct recognition alternatives. Of the 3,066 usable items, 249 are reflection and 2,817 are scored. These exclusions should remain in place unless their content is repaired. Six authored assessment sets containing 100 items are also compiled, but a separate timed-assessment interface is not currently delivered. That material should be preserved without presenting unfinished functionality as complete.

**Design and animation.** Mīzān’s current design uses light paper surfaces, deep green accents, Georgia prose/headings, system interface text and Traditional Arabic as the preferred Arabic face. Its desktop lesson layout places teaching and interactions side by side in a focused screen; mobile and larger-text modes scroll naturally. This current implementation is the visual reference.

Sciences has a more decorative dark/gold identity and an established motion controller for screen entrance, overlays, measured selection movement, disclosure height, feedback and progress counters. It accounts for its full-root HTML rerenders and reduced-motion preferences. Mīzān currently adds CSS transitions for controls, progress and diagrams. Combine their useful behaviours through shared timing, easing and semantic events; do not load both entire style systems and let their cascades compete. Preserve the Sciences review layout while applying Mīzān typography, spacing, colour and controls. Responsive Arabic layouts, visible focus and reduced motion must work across every course.

**Confirmed defects to fix as part of production work.**

1. **P1 — An unreadable Sciences save can be overwritten at startup.** [`parseStored`](https://github.com/HabibH0/the-sciences/blob/a461b8e2285d34660786c407086042a63ae5ede4/js/storage/storageManager.js#L27) returns an empty object when JSON parsing fails. Startup then writes the normalized replacement through [`bootProgress`’s persistence path](https://github.com/HabibH0/the-sciences/blob/a461b8e2285d34660786c407086042a63ae5ede4/js/persistence.js#L216). An isolated malformed-save reproduction confirmed the original raw value was overwritten without a backup. Preserve the unreadable value, expose recovery/export and make migration validated and recoverable before writing.

2. **P2 — A first wrong review answer is mistaken for earlier learning history.** In deployed [`main.js`](https://github.com/HabibH0/the-sciences/blob/a461b8e2285d34660786c407086042a63ae5ede4/js/main.js#L2614), `recordPracticeAnswer` updates legacy history before `applyReviewAnswer` reads the card’s prior state. [`effectiveReviewCard`](https://github.com/HabibH0/the-sciences/blob/a461b8e2285d34660786c407086042a63ae5ede4/js/reviewScheduler.js#L213) consequently sees the current miss as a historical miss and seeds a previously new card as `relearning`. A fresh-session browser reproduction showed “New cards 0” after that first wrong answer; an isolated state reproduction confirmed the introduced increment is 0 instead of 1 and the scheduled state becomes relearning instead of learning. This undercounts the daily new-card allowance. Capture the prior card state before recording the answer, and add an integration test around the actual submit path. The same ordering appears in the tarkeeb answer path.

3. **P2 — Mīzān hides the submitted response in desktop feedback.** [The desktop stylesheet](C:/Users/Habib/mizan/app/app/study-screen.css:196) hides the entire form once an exercise is graded. In Sound Definitions, submitting the wrong “Yes” response displayed the expected “No” but removed the learner’s answer from view. At mobile width the original disabled selection remained visible. Preserve a submitted-answer summary in the desktop feedback state so learners can understand the correction without losing the focused layout. Draft persistence and subsequent correction both worked in the audited journey.

**Production risks identified in source, not demonstrated against live accounts.** Sciences’ [conditional cloud save](C:/Users/Habib/nahw-trainer/server/server.js:368) checks the stored metadata and then performs a separate unconditional update. The [Postgres write](C:/Users/Habib/nahw-trainer/server/server.js:172) has no expected-version condition. Concurrent requests can therefore both pass the check; this needs an atomic compare-and-swap or transactional equivalent. I did not run concurrent writes against production or a Postgres test instance.

The same server’s [JSON reader](C:/Users/Habib/nahw-trainer/server/server.js:277) buffers requests without an application-level byte limit, and its login/register handlers have no application-level rate limit. Add bounded request handling and authentication throttling before a production release. External infrastructure protections were not verified. These are code findings, not claims of a demonstrated breach.

**Hosting is an integration boundary.** Sciences uses a static frontend on GitHub Pages and a separate account/sync backend configured at `the-sciences.onrender.com`. Mīzān uses React/TypeScript with Vinext, Vite and a Cloudflare runtime; its `/api/grade` endpoint grades server-side, and its browser catalog deliberately omits answer keys. [GitHub Pages hosts static files](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), so copying Mīzān’s current server build into the existing deployment will not reproduce its API behaviour.

My recommended starting architecture keeps the existing hosted product and account contract, introduces shared lesson/exercise adapters, and exposes the required logic grading through the backend. Keep the reusable content and grading logic separate from framework-specific components. A wholesale frontend framework migration is not required to obtain the requested experience and would add substantial migration scope.

Mīzān currently uses root-relative navigation/API URLs and localhost metadata. These need production origin and `/the-sciences/` base-path handling. Its catalog endpoint serializes all adapted content at once: the audited response was about 3.06 MB uncompressed, approximately 104 KB when independently gzipped. That is a serialization measurement, not a measured compressed network transfer. A combined catalogue should fetch lightweight course summaries first and load lesson/practice material on demand. Preserve answer-key separation where server grading is used. Grade-network failures must preserve answers and offer retry; neither codebase currently establishes a complete offline cold-start experience.

**Saved progress needs a migration contract.** Sciences uses the `the-sciences-progress` localStorage envelope with version/device metadata and cloud sync. Mīzān uses the `mizan-learner` IndexedDB database with course-scoped mastery, attempts and sessions, and has no equivalent account sync. Rebranding display strings must not accidentally rename storage keys, tokens, course IDs or the backend endpoint.

Keep existing course/module/lesson identities and [review card identifiers](https://github.com/HabibH0/the-sciences/blob/a461b8e2285d34660786c407086042a63ae5ede4/content/index.js#L628). Lesson IDs repeat across modules, so they require course/module qualification. Review IDs include a content fingerprint; changing question wording/options without an explicit mapping can orphan schedules. Add a versioned, idempotent migration that preserves completion, unlocks, preferences, XP, vocabulary, library state and scheduled intervals. Give concept mastery and spaced-repetition scheduling distinct responsibilities. Cloud merging needs an explicit policy for Mīzān’s nested course data rather than a shallow overwrite.

Prototype progress saved under localhost cannot be read automatically by the hosted origin. If transferring that personal progress is desired, it needs an export/import path; migrating course content does not transfer browser-local learner history. Mīzān’s sequential gates also differ from Sciences’ current default unlock behaviour. Apply the intended progression for new learners without revoking already earned or explicitly unlocked access.

**Verification completed.**

| Check | Result |
| --- | --- |
| Deployed Sciences review-scheduler verification | 34 checks passed |
| Sciences content validation, local and deployed source | Passed: four courses and 14 books; five existing short sentence-builder chapter advisories |
| Sciences web production build, isolated deployed source | Passed |
| Sciences tarkeeb graph/morphology verification | Passed: eight Fatihah and 32 Al Imran graphs |
| Mīzān application tests | 56 passed |
| Mīzān TypeScript and lint checks | Passed |
| Mīzān HTTP smoke | Passed: six views, catalog answer-key isolation, correct/incorrect and malformed/missing-item grading |
| Fresh isolated Mīzān production build | Passed, including content validation/compilation; no lesson lacked suitable practice |
| Sciences browser walkthrough, isolated deployed build | Course/module/lesson, six-question quiz completion, scheduled review, wrong-answer retry and early session results |
| Mīzān browser walkthrough, isolated build | Authored teaching/visual/check sequence, draft restoration after refresh, wrong-answer feedback, correction and mobile layout |
| Save-corruption and first-new-card state reproductions | Confirmed the two defects above |

The five sentence-builder advisories concern Qiraah volume 1 chapter 28, Qasas volume 7 chapter 19, and Qasas volume 12 chapters 5, 20 and 33, with three or four usable items instead of the expected five. They did not fail validation. Some documentation still mentions obsolete Electron packaging or older logic item counts; update it to match the actual release.

These checks do not certify every Arabic explanation, generated distractor or lesson’s pedagogy. I did not manually finish all 498 lessons, validate a full mobile/device matrix, exercise live authentication/cloud conflict handling, or deploy changes. Existing green checks also did not catch the review submit-order bug, so meaningful integration coverage is needed alongside pure scheduler tests.

**Implementation sequence supported by this review.**

1. Reconcile the local checkout with the deployed commit while preserving existing local work. Establish recovery-safe saves and fix the confirmed review defect.
2. Define the shared content, lesson-step, exercise and progress contracts. Add the logic course with its authored flow, notes, diagrams and usable exercises.
3. Build the five-course catalogue and shared Mīzān shell. Convert Sciences lessons through subject-aware adapters, then review representative examples and automate complete source-content coverage checks.
4. Apply Mīzān styling to the preserved Sciences review experience, extend it for compatible logic interactions, and consolidate motion, keyboard behaviour and responsive layouts.
5. Integrate grading, account sync and progress migration. Verify migrated old saves, repeated migration, cross-device conflict handling, grading failure recovery and protected review identities.
6. Validate every course entry/resume/finish path, library tools, Arabic rendering, mobile and larger-text layouts, reduced motion, deep links and production builds. Produce a reviewable preview before replacing the live app.

The intended product direction is clear enough to define this integration without further design questions. The remaining work is substantive implementation and validation, especially converting the existing lessons well and preserving learner progress.

# nahw-trainer — Full Codebase & Content Audit

Audited 2026-08-05, against the current working tree (all uncommitted changes included). Scope: Electron shell & packaging, save-file persistence, core app state/logic, rendering/UI/accessibility, content-to-app wiring, and content data quality across all four courses (Introductory Nahw, Introductory Sarf, Advanced Nahw, Advanced Sarf). Read-only audit — no files were modified.

Total findings: **29**. Nothing catastrophic — the app's architecture is sound and most subsystems (badge-id wiring, path-node references, tarkeeb schema, MCQ answer-index bounds) came back clean. The real issues cluster in three places: **one packaging bug that leaks dev save data into every build**, **one save-file-driven code-injection path**, and **the تركيب widget being unusable by keyboard**. Everything else is a normal punch list.

## How to read this

Severity is about *what happens if nobody fixes it*, not how hard the fix is:
- **High** — breaks the app for a real user, or is a genuine security/privacy hole
- **Medium** — wrong behavior a user will notice, or a real gap in guardrails
- **Low** — cosmetic, dead code, or a narrow edge case
- **Nit** — worth a glance, not worth interrupting other work for

---

## Findings table (all areas, most severe first)

**Status key:** ✅ Fixed and verified · (blank) still open. Last updated 2026-08-06 — see the note at the end of this section for what "fixed" involved.

| # | Status | Area | Severity | File:Line | Summary |
|---|--------|------|----------|-----------|---------|
| 1 | ✅ | Packaging | High | [package.json:11](package.json#L11) | Package script leaks the developer's own save-data.json into every build; fresh installs silently inherit it as "legacy" progress |
| 2 | ✅ | Render/Security | High | [js/render.js:1782](js/render.js#L1782) | Unescaped save-file field reaches `innerHTML` under `nodeIntegration:true` — corrupted save file → code execution |
| 3 | ✅ | Accessibility | High | [js/render.js:1340-1394](js/render.js#L1340-L1394) | تركيب drag-and-drop widget is entirely keyboard-inaccessible; gates My Path progression |
| 4 | ✅ | Content | High | content-fstu/module-18.js `f-ibarat-filiyya/l16` | MCQ quiz question has a duplicated option where one copy is the graded-correct answer (fix expanded to 3 affected questions in this quiz, not just the 1 named — see note) |
| 5 | ✅ | Packaging | Medium | [package.json:11](package.json#L11) | Same missing `--ignore` bundles `.module-gen/`, `smoke/`, `.claude/settings.json`, `content-fstu-new/`, `flashcards/*.apkg` into distributables (only `.claude/` still existed by fix time — see note) |
| 6 | ✅ | Process | Medium | scripts/validate-content.mjs | Not wired into `package`, CI, or a git hook — purely manual, so broken content can ship |
| 7 |  | Process | Medium | scripts/validate-content.mjs | Never checks `content/paths.js`/`path.js`/`path-advanced.js` node integrity — a bad path edit would only surface at runtime |
| 8 | ✅ | Core logic | Medium | [js/gamification.js:158-163](js/gamification.js#L158-L163), [js/main.js:1267-1294](js/main.js#L1267-L1294) | `state.badgeModal` is single-slot; earning 2 badges in one action (e.g. first-ever lesson at 100%) silently drops the first popup |
| 9 | ✅ | Core logic | Medium | [js/main.js:589-596](js/main.js#L589-L596) | Uncancelled 1100ms exercise-advance timer can skip a question or corrupt UI state after navigation |
| 10 |  | Render | Medium | [js/render.js:893](js/render.js#L893), [896](js/render.js#L896) | Lesson Summary rows use `esc()` instead of `escBidi()` on real mixed Arabic/English content — punctuation can visually reverse |
| 11 |  | Content | Medium | 7 locations across content-fstu | Duplicate distractor text in MCQ options (both wrong, but softens the question) |
| 12 |  | Content | Medium | content-fstu-sarf/module-10.js `s-u12/l4` | 6 vocab bank items missing `vocabType` — silently excluded from every Vocab Practice session |
| 13 |  | Content | Medium | content/module-09.js `09/l2` bank[0] | Bank prompt is a full Arabic sentence with no English carrier — violates the project's English-carrier content rule |
| 14 |  | Content | Medium | content-fstu-sarf/module-10.js, module-11.js | Introductory Sarf's last two units have 5-10x thinner practice banks than every other unit |
| 15 | ✅ | Core logic | Medium-Low | [js/state.js:365-372](js/state.js#L365-L372) | `buildPathMcqCheckpointQueue` doesn't backfill from the other half-pool when one source is short — checkpoints can be quietly shorter than intended |
| 16 |  | Build pipeline | Low-Medium | scripts/fstu-lib.mjs:91-111 | `pickDistractors` can yield fewer than 3 (even 0) distractors for small vocab lists, producing a 1-option MCQ |
| 17 |  | Data integrity | Low-Medium | smoke/main.cjs:7-14 | Unconditionally overwrites repo-root save-data.json (the legacy-migration source path) with synthetic test data (smoke/ has since been deleted from the project — recheck relevance before acting) |
| 18 |  | Accessibility | Low-Medium | [styles.css:826](styles.css#L826), [2428](styles.css#L2428) | Hardcoded button/tab text colors bypass the `--color-accent-ink` theme system; ~4.3:1 contrast, borderline WCAG AA |
| 19 |  | Render | Low | [js/render.js:765-772](js/render.js#L765-L772), [985-986](js/render.js#L985-L986) | Drop-cap feature is dead code — its regex can never match the actual generated markup |
| 20 |  | Render | Low | index.html | No Content-Security-Policy meta tag, despite `nodeIntegration:true` + a raw `innerHTML` sink |
| 21 |  | Content wiring | Low/Nit | [content/index.js:31](content/index.js#L31) | Comment claims annahw module ids use an `'NN'` prefix; actual ids are bare `'01'`–`'17'` |
| 22 |  | Content wiring | Low/Nit | [js/main.js:505-514](js/main.js#L505-L514) | `checkPathMilestones` branches on a `node.type === 'milestone'` that no path builder ever generates — dead code, harmless |
| 23 |  | Core logic | Low | [js/state.js:323](js/state.js#L323) | `Math.ceil(due.length / REVISION_BUCKETS) || 1` — the `|| 1` fallback is unreachable |
| 24 |  | Content | Low | content/module-02.js `02/l2` quiz[5] | Quiz question stem written in Arabic only, no English carrier |
| 25 |  | Content | Low (informational) | annahw & sarf-advanced, 2,947 + 961 instances | `concept.heading`/`bank.title` fields are consistently all-Arabic — likely intentional styling, worth confirming rather than fixing |
| 26 |  | Content | Low | fstu & sarf review lessons | Naming inconsistency: `"المراجعة"` vs `"Unit N Summary"` for the same kind of auto-generated review lesson |
| 27 |  | Content | Low/cosmetic | 34 instances (mostly fstu) | Compact Arabic-only `explanation` fields read as an answer key rather than prose — probably fine as-is |
| 28 |  | Render | Nit | js/render.js (whole-page pattern) | Every click/drop does a full HTML-string re-render + `innerHTML` reparse rather than a targeted DOM update |
| 29 |  | Core logic | Nit | [js/main.js:842-853](js/main.js#L842-L853) | Uncancelled 260ms close-animation timer can fire one redundant extra render |

**Note on fixes applied 2026-08-06** (session after this audit — file paths/line numbers above are as of the audit and may have drifted since):
- **#1, #5:** package.json's `--ignore` list now excludes `save-data.json` and `.claude/`. Verified by running a real `npm run package` and inspecting the output bundle. #5's other 4 named paths (`.module-gen/`, `smoke/`, `content-fstu-new/`, `flashcards/`) no longer exist in the project at all, independent of this fix.
- **#2:** `state.scheduleDeadline` now routed through `esc()` at its one unescaped call site (js/render.js, the Schedule tab's hero ledger).
- **#3:** تركيب chips/slots are now real Tab stops (`role="button"`/`tabindex`) with Enter/Space activation, non-spoiling `aria-label`s, and focus preserved across the re-render each action triggers. Verified live via CDP (keyboard select→place→submit flow, plus mouse-flow regression check).
- **#4:** fixed, but the actual bug was 3 duplicated-option questions in the same quiz (Q1/Q3/Q5), not the 1 the audit named — Q3 and Q5 had the identical pattern. Verified against the module's own teaching content (content-fstu/module-16.js, module-17.js) to confirm the replacement distractor is grammatically correct, not just structurally consistent.
- **#6:** added `prepackage` npm script (runs `validate` before `package`) and a local `.git/hooks/pre-commit` hook (not version-controlled, so it's this machine only). Verified both: a real `npm run package` run, and a deliberate content-corruption test confirming the hook blocks a bad commit.
- **#8:** `state.badgeModal` is now backed by a `state.badgeQueue` array; `awardBadge` queues instead of overwriting, `closeBadgeModal` advances the queue. Verified via direct state manipulation (award two badges in one action → both shown in sequence).
- **#9:** `scheduleLessonExerciseAdvance` now captures moduleId/lessonId at schedule time and no-ops on fire if the learner has navigated elsewhere. Verified both branches (stayed put → still advances; navigated away → correctly blocked).
- **#15:** `buildPathMcqCheckpointQueue` now backfills a shortfall from the other pool, mirroring the pattern `buildPathVocabCheckpointQueue` already used. Verified against every real checkpoint node in the actual path content (114 nodes, 0 mismatches, confirmed at least one real previously-unbalanced node now comes out full-length).
- Verifying #1/#2/#3/#8/#9 required driving the real app, which temporarily overwrote the real save file with test data; both it and the stale project-root legacy-migration copy were deleted at the user's request (no progress to preserve as of that date).

---

## What's already solid (verified clean, no action needed)

- **`main.cjs`** — no remote content, no `shell.openExternal`, no leaks. `nodeIntegration:true`/`contextIsolation:false` is a deliberate, already-documented tradeoff for this fully local trusted app — not re-litigated here.
- **`flushPersist`** is correctly wired to `window.beforeunload` ([js/main.js:1484](js/main.js#L1484)), so the 400ms `persistSoon` debounce does *not* risk losing the last action on quit.
- **Path-node → module/lesson references**: all 755 nodes across both tracks (intro + advanced) resolve to real modules/lessons — 0 unresolved references, verified by walking every node.
- **Badge-id wiring**: every `badgeId` a path node can award (`path-section-1..37`, `path-group-1..5`, `path-adv-section-1..20`, `path-adv-group-1..5`) exactly matches `BADGE_DEFS` — 0 mismatches.
- **Id-namespace separation** across the two path tracks and all four courses is structurally guaranteed (prefix-enforced), and empirically confirmed unique across all 755 node ids.
- **تركيب content detection** (`moduleHasTarkeeb`/`courseHasTarkeeb`) correctly reflects that Advanced Sarf and Introductory Sarf have zero تركيب items — nothing is silently hidden.
- **MCQ `correct`-index bounds, tarkeeb `words[]`/`labels[]` length matches, and `cells[]`/`rows[]` label-span bounds** — all clean across all four courses, zero violations found.
- **No duplicate module/lesson ids** anywhere across any course.
- **No empty/missing required fields** (title, body, prompt, quiz text) anywhere across all four courses.
- **Pool/sampling math** in `js/state.js` (weighted sampling, empty-pool guards, mastery ratio math) is correctly guarded against `NaN`, div-by-zero, and infinite loops everywhere except finding #15.

---

## Suggested fix order

1. ✅ **#1 (save-data leak in packaging)** — one-line fix (extend the `--ignore` pattern), but it's a real privacy bug shipping in every build right now. *Done 2026-08-06.*
2. ✅ **#2 (unescaped save-file field → innerHTML)** — route `state.scheduleDeadline` through the existing `esc()`/`escBidi()` helper before it reaches `heroLedgerHtml`. *Done 2026-08-06.*
3. ✅ **#3 (تركيب keyboard accessibility)** — the largest single fix; needs real keyboard interaction design (focus + arrow/enter-based placement) for the drag-and-drop widget, not just a tab-index patch. *Done 2026-08-06.*
4. **#4** ✅ done 2026-08-06 (turned out to be 3 questions, not 1 — see note above) **, #11** still open — content fixes, mechanical once located; the exact `quiz[]`/`bank[]` indices are listed above.
5. **#8, #9, #15** ✅ all done 2026-08-06 (badge modal, stale timer, checkpoint pool backfill) — independent small logic fixes in `js/gamification.js`/`js/main.js`/`js/state.js`.
6. Everything else — **#5 ✅ and #6 ✅ done 2026-08-06** (#5's other named paths were already gone from the project independent of the fix); **#7, #10, #12–14, #16–29 still open**, can be batched opportunistically — none are urgent, several (#25–27) may not need a code change at all, just a decision on intent.

**Next up (where the 2026-08-06 session left off):** #7 (validator doesn't check path-file integrity), then #10 (esc vs escBidi), #11 (duplicate MCQ distractors, 7 locations), #12 (missing vocabType), #13/#24 (missing English carrier), #14 (thin Sarf practice banks) — then the Low/Nit tail (#16–29), then Round 2's C1–C12 and V1.

---

# Round 2 — Deep Content Correctness Audit & Visual Audit

The first round checked content *structurally* (duplicate ids, answer-index bounds, tarkeeb array shapes, English-carrier-language compliance). This round is a **domain-expert grammar review** — actually working out the classical نحو/صرف for a large sample of lessons, examples, and answer keys across all four courses, to check whether the taught content is *correct*, not just well-formed — plus a **live visual audit** driving the real running app.

Coverage: concept prose was read in full for essentially every module across all four courses (Introductory Nahw's 21 modules, Introductory Sarf's 13, Advanced Nahw's 17, Advanced Sarf's 12), with deep spot-checking of bank/quiz/tarkeeb items weighted toward the hardest, most error-prone topics in each course (النواسخ، الاستثناء، الممنوع من الصرف، الإعلال rules، وزن derivations, etc.). Given the volume, this is thorough sampling, not exhaustive coverage of every one of the ~19,000 combined bank items — treat "found clean" as "no errors surfaced under close inspection," not an absolute guarantee.

**Headline result: the content is unusually well-constructed.** Out of everything reviewed, only 12 genuine content-correctness issues surfaced — 4 high, 4 medium, 4 low — concentrated in a handful of specific lessons rather than spread evenly. The overwhelming majority of modules in all four courses checked out completely clean against independent grammatical re-derivation.

## Content correctness findings

| # | Course | Severity | Location | Summary |
|---|--------|----------|----------|---------|
| C1 | Advanced Nahw | High | content/module-01.js, lesson l4 | Quranic example ﴿أُولَٰئِكَ عَلَىٰ هُدًى مِنْ رَبِّهِمْ﴾ is mislabeled النعت — it's actually الخبر (أولئك is a bare مبتدأ with nothing for a نعت to describe; same structure as the module's own خبر example two rows above). Wrong label propagates into a graded MCQ (`correct: 1` = النعت, الخبر not even offered as an option) and a tarkeeb item that lists الخبر as a wrong *distractor* |
| C2 | Advanced Sarf | High | content-sarf/module-05.js, lesson l1 | Invents a third جامد category (verbs "frozen" solely in المضارع) not found in the cited source — the module's own prose admits this. Example verbs بَغَى، سَوِيَ، هَاطَ all have attested ماضٍ and أمر forms in classical dictionaries, directly contradicting the invented rule |
| C3 | Advanced Sarf | High | content-sarf/module-08.js, lesson l3 | Cites ﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾ (the universal reading, no لام قسم) to illustrate the نون التوكيد rule — the reading that actually demonstrates the point is ﴿لَأُقْسِمُ﴾ (attributed to Ibn Kathīr). Wrong example is repeated across the concept, the quiz, and a bank item |
| C4 | Introductory Nahw | High | content-fstu/module-17.js | Tarkeeb item "نُوَقِّرُكَ مَا وَقَّرْتَ نَفْسَكَ" labels نَفْسَكَ (the direct object) as تَأْكِيْدٌ; its own case ending (منصوب, not agreeing with the مرفوع فاعل تَ) contradicts that label, and the distractor list doesn't even include the actually-correct مَفْعُوْلٌ بِهِ |
| C5 | Advanced Sarf | Medium | content-sarf/module-06.js, lesson l2 | دَرَى is split out into a non-standard "العلمية" sub-category, separate from رأى/علم/وجد — standard classical sources group all four together as أفعال اليقين |
| C6 | Introductory Nahw | Medium | content-fstu/module-13.js, lesson l15 | The consolidated review table claims كُلَّمَا and إذا main clauses must be ماضٍ — directly contradicted by the module's own earlier examples using أَمْر main verbs (l5's سَلِّمْ ... كُلَّمَا دَخَلْتَ, l10's إِذَا سَأَلْتَ فَاسْأَلِ اللهَ) |
| C7 | Introductory Nahw | Medium | content-fstu/module-14.js, lesson l4 + related bank items | Concept states as an absolute rule that the preposition "disappears from the English entirely" for مفعول به غير صريح — but several bank items in the same lessons keep the preposition in their own given "correct" translation (e.g. "believed **in** Allah"), contradicting the rule as taught |
| C8 | Introductory Sarf | Medium | content-fstu-sarf/module-12.js (s-u11, l3) | مَغْرِبٌ is used as the headline example for a regular derivation rule, but is actually an irregular exception under the module's own stated rule (regular derivation would give مَغْرَبٌ) — the irregularity isn't flagged until two sections later, never connected back to the headline example |
| C9 | Advanced Sarf | Low | content-sarf/module-03.js, lesson l4 | Table row "وَجْه، يَمُن" has diacritics that don't match either plausible reading of the second word (يُمْن "blessing" or يَمَن "Yemen") — likely a vocalization typo, not a classification error |
| C10 | Introductory Nahw | Low | content-fstu/module-17.js, lesson l9 | Worked/diagrammed example "... قَبْلَ أَنْ تَطْلُعَ الْفَجْرُ" has a gender-agreement error (الفجر is masculine, so يَطْلُعَ) — the text elsewhere admits the mismatch but never fixes the diagram itself |
| C11 | Introductory Sarf | Low | content-fstu-sarf/module-01.js | "سَأَلَ يَسْئَلُ" (wrong hamza seat) appears 6 times, but only as a wrong-answer MCQ distractor, never as the graded-correct answer — cosmetic, inconsistent with the correct spelling used elsewhere in the same file |
| C12 | Introductory Nahw | Low | content-fstu/module-13.js, lesson l11 | إِذَا الْفُجَائِيَّةُ is described as strictly requiring a preceding فَ — classical grammars also admit وَ; may be an intentional scope restriction for this beginner course rather than an error |

**Confirmed clean** (read in full, independently re-derived, no issues found): Advanced Nahw modules 02–04 and 10–17 (14 of 17 modules); Advanced Sarf modules 01, 02, 04, 07, 09, 10, 11, 12 (8 of 12 modules); large stretches of Introductory Nahw (modules 12, 15, 16 individually confirmed, plus the rest via broad sampling) and Introductory Sarf (modules 02–11, 13). No wrong tarkeeb labels, no reversed grammatical definitions, and no forward-referenced concepts were found outside the items listed above.

## Visual audit (live app, driven via CDP per this project's CLAUDE.md)

Launched the real Electron app with `--remote-debugging-port=9222` and drove it entirely through the DevTools Protocol (no OS-level input), capturing 55 screenshots across both course tracks, all major screens, three theme combinations, and the 960×640 minimum window size. Screenshots are saved at:
`C:\Users\Habib\AppData\Local\Temp\claude\c--Users-Habib-nahw-trainer\9f7d2e29-16fd-4466-a374-e9b872260ea0\scratchpad\` (numbered 01–52; this is a session-scoped temp folder, so save anything you want to keep elsewhere before it's cleared).

| # | Severity | Screen | Summary |
|---|----------|--------|---------|
| V1 | Medium | Settings page | A mismatched cream/khaki color band appears at the bottom of the scroll area — the `.settings-page` container's box extends ~80px past its two child `.settings-col` columns, exposing its own translucent background tint as a visible seam. Confirmed under both Night and Sepia themes; looks like a stray `padding-bottom`/`min-height` on the container |
| V2 | Low/Nit | Course-card→dashboard and chapter→lesson-list transitions | Two screenshots caught mid-CSS-transition with overlapping frames; a re-capture after a short wait showed a clean state, so this is likely just capture timing rather than a real animation bug — worth a quick glance at the raw screenshot regardless |
| V3 | Low/Nit | Practice MCQ question header | Diacritics above "نفوس" briefly appeared to render as a separate floating line before an answer was selected; didn't reproduce on other screens — likely a font-shaping/reflow timing artifact |

**Rendered cleanly, no defects found:** launch screen course-picker grid; course dashboard and module/lesson lists; the combined concept-prose + inline-exercise lesson page under three theme combinations (Night/Uthmani, Manuscript/Uthmani, Sepia+Kufi+Indigo); the full quiz flow including the Gold/Silver/Bronze result screen; Practice Mode's setup popout and MCQ session; the تركيب drag-and-drop widget specifically (dashed empty slots, solid borders on filled slots, correct RTL alignment, dimmed-but-visible used distractors, and a working click-to-place alternative to native drag — visually solid despite the separate keyboard-accessibility finding from round 1); My Path for both tracks; the Schedule tab; the theme picker itself; and the 960×640 minimum window size on the lesson page, My Path, and the تركيب widget (no overflow or clipping anywhere).

**Not covered:** the badge-unlock modal (not trivially reachable without deeper state manipulation) and an individual screen-by-screen tour of the Sarf courses specifically (time went to the تركيب investigation instead, since that widget only appears from Introductory Nahw module 4 onward).

## Updated suggested fix order

Adding to round 1's list — these are new, independent of the round-1 items:

1. **C1, C4 (wrong answer keys, high)** — these actively grade a correct grammatical answer as wrong; fix the `correct` index/label and, for C1, the distractor list.
2. **C2, C3 (invented rule / wrong citation, high)** — C2 needs the invented جامد category either removed or properly sourced; C3 needs the Quranic citation swapped to the reading that actually demonstrates the rule.
3. **V1 (Settings page color band, medium)** — likely a one-property CSS fix once the stray container sizing is found.
4. **C5–C8 (medium)** — independent content fixes, each isolated to one lesson.
5. **C9–C12, V2, V3 (low)** — batch opportunistically; V2/V3 may not even need a fix if they're purely screenshot-timing artifacts (worth a manual glance at the live app first).

---

*Round 1 compiled from five parallel focused audits (Electron/packaging/persistence, core state & controller logic, rendering/UI/accessibility, content-to-app wiring, content data quality). Round 2 compiled from a domain-expert grammar re-derivation across all four courses (split by course/module range across multiple agents) plus a live CDP-driven visual audit. No source files were modified as part of either round.*

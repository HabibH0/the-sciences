# MCQ distractor quality — rollout guide

Module 24 (`الفاعل والمبتدأ`) was fixed as the pilot for a content-quality
pass distinct from `content/README.md`'s existing "Writing good distractors"
section. That section covers *which* wrong answers to pick (same conceptual
family, no nonsense options). This doc covers a second, separate problem:
even a well-chosen distractor can give itself away by its **shape**.

Read `content/README.md` and `WRITING.md` first — this doc assumes both and
only adds the one rule below plus a rollout process.

------------------------------------------------------------------------

## The rule

Every MCQ's four `options` — a concept's `exercise.options`, a `quiz[].options`,
or a `bank[]` `kind: 'mcq'` item's `options` — must be **hard to tell apart
by shape**, not just by content family. Options are shuffled per-view
(`js/state.js`), so position never gives the answer away. Length and
rhetorical style do, every time.

The failure mode: the correct option is a full explanatory clause with an
em-dash reason attached, while one or more distractors are a bare 2-4 word
label. A learner doesn't need to know the grammar to spot that — the
"real-looking" option just stands out on sight.

```js
// Before — correct answer obviously the odd one out:
options: [
  `صدارة الكلام — أسماء الاستفهام like أَيّ must always open the sentence`,
  `الإضمار قبل الذكر — a pronoun inside المفعول به needs its referent mentioned first`,
  `الفاعل ضمير متصل يلزم اتصاله`,                    // <- bare, 4 words
  `Nothing forces it; the order here is جوازًا, purely for بلاغة`,
]

// After — same four claims, same shape, same rough length:
options: [
  `صدارة الكلام — أسماء الاستفهام like أَيّ must always open the sentence`,
  `الإضمار قبل الذكر — a pronoun inside المفعول به needs its referent mentioned first`,
  `الفاعل ضمير متصل يلزم اتصاله — the same pronoun-attachment problem, but on the other noun`,
  `Nothing forces it; the order here is جوازًا, purely for بلاغة`,
]
```

The fix keeps the distractor **wrong** and **same-family** (it's still a
real وجوبًا reason from elsewhere in the lesson, just not the one that
applies here) — it only pads its *shape* to match, using the same
`claim — reason` construction the correct option already uses.

### The rule is direction-agnostic

The worked example above only shows one direction (`correct` elaborate,
distractors bare) because that's what the pilot's content happened to have.
**The actual rule has no direction** — it's "hard to tell apart by shape,"
full stop. An array where a *distractor* is the elaborate outlier and
`correct` is the short, bare one is exactly as guessable: a learner spots
"the odd one out" in the group of four regardless of which index the code
happens to mark `correct`. Modules 01-05's first audit pass misread the
worked example as the whole rule and systematically skipped this reverse
case — round 2 on those five modules found and fixed it (see the rollout
status notes below). Check **both directions** on every array, and re-check
your own edits afterward: padding one bare distractor can leave `correct`
(or another distractor) as the new short outlier if you don't compare all
four again once you're done.

### What does *not* need fixing

The tell is **relative disparity within one array**, not absolute
shortness. Leave an array alone when all four options are already
homogeneous:

- All four are bare single terms (`نائب الفاعل` / `اسم كان` / `المبتدأ` / `المفعول المطلق`).
- All four are short parallel category labels naming sibling rules from the
  same box (e.g. the four `مواضع` from a "which of these four scenarios"
  question).
- All four are parallel word-order strings (`فعل + فاعل + مفعول به` etc.).

Padding an already-symmetric array adds nothing and risks making a bare-term
question feel over-written.

------------------------------------------------------------------------

## Rollout status

Advanced Nahw (`content/module-0N.js`) only. Check off as each module is
audited. (Sarf and the two Introductory courses have not been looked at for
this specific issue — flag to the user before starting one of those rather
than assuming the same pass is wanted there.)

- [x] 24 — الفاعل والمبتدأ *(pilot — done 2026-08-19)*
- [x] 01 — الكلمة *(done 2026-08-19; round 1: 37 arrays; round 2: +8 more after the round-1 pass was found too one-directional (see below) — 45 total; validate + typo-check + `node --check` clean; not visually spot-checked, see §6 note and the cross-session note below it)*
- [x] 02 — الجملة والكلام *(done 2026-08-19; round 1: 47 arrays; round 2: +24 more (the biggest round-2 gap of the five) — 71 total; validate + typo-check + `node --check` clean; not visually spot-checked, see §6 note)*
- [x] 03 — العامل والإعراب *(done 2026-08-19; round 1: 31 arrays; round 2: +9 more, using an objective lone-outlier length scanner — 40 total; validate + typo-check + `node --check` clean; not visually spot-checked, see §6 note)*
- [x] 04 — اللزوم والتعدي *(done 2026-08-19; round 1: 26 arrays; round 2: +17 more — 43 total; validate + typo-check + `node --check` clean; not visually spot-checked, see §6 note)*
- [x] 05 — أفعال القلوب *(done 2026-08-19; round 1: ~89 arrays; round 2: +6 more — ~95 total; validate + typo-check + `node --check` clean; not visually spot-checked, see §6 note)*
- [x] 06 — التحويل والتعليق *(done 2026-08-19; round 1: 28 arrays; round 2: found (via n-gram scan of the diff) that 4 of those 28 had padding copy-pasted verbatim from a different, unrelated question instead of being grounded in that question's own sentence — rewrote all 4; confirmed the 2 remaining word-count outliers are legitimate parallel `X = role, Y = role` exceptions; validate + typo-check clean; visually spot-checked in-app both rounds — concept exercise, quiz Q4 ("فتركه صلدا"), and Practice Mode bank question all confirmed rendering correctly; also fixed two pre-existing bidi typos)*
- [x] 07 — كان وأخواتها *(done 2026-08-19; round 1: ~55 arrays; round 2: fixed copy-pasted boilerplate reused verbatim across 4 unrelated "defines X" bank items, then a fresh factual-accuracy re-read found ~8 padding clauses that were flatly wrong about the grammar — e.g. "صار is always ناقص" contradicted by this same module's own تامة example, and an invented "الباء الزائدة drops جوازًا" claim not supported anywhere in the lesson — all rewritten to match the lesson's actual content; validate + typo-check clean; visually spot-checked in-app post-fix — Practice Mode questions confirmed rendering correctly with no shape tell; also fixed a pre-existing bidi typo)*
- [x] 08 — المقاربة والرجاء *(done 2026-08-19; round 1: 52 arrays; round 2: a purpose-built word-count/connector scanner re-run against the whole file (not just the diff) found 9 more genuine misses of the same bare-distractor-next-to-elaborated-correct-answer shape — 61 total; confirmed no copy-paste filler reuse in this module; validate + typo-check clean)*
- [x] 09 — حروف الجر *(done 2026-08-19; round 1: 19 arrays; round 2: fixed the 4 misses the coordinator's heuristic flagged plus 2 more found on a fresh re-read — 25 total; also caught and fixed one pair of arrays (a general "التصنيف الأدق" question and a specific آية question) that had landed on an identical copy-pasted clause; validate + typo-check clean)*
- [x] 10 — بقية الجر *(done 2026-08-19; round 1: ~91 arrays; round 2: independent re-scan of the whole file found and fixed 6 issues — a verbatim-identical distractor shared between two different bank items about the same آية (reworded one for variety), a padded distractor that factually contradicted its own prompt's تنوين, 2 arrays left bare in round 1 now padded, 2 arrays with the reverse asymmetry (bare correct answer next to elaborated distractors), and one over-inflated distractor from round 1 trimmed back down; validate + typo-check clean; visually spot-checked in-app post-fix; also fixed 3 pre-existing bidi typos)*
- [x] 11 — الزوائد والحذف *(done 2026-08-19; round 1: ~83 arrays; round 2: +5 more, found by an objective diacritic-stripped word-count scanner checked in both directions (correct-elaborate-vs-bare AND correct-bare-vs-elaborate) — 88 total; validate + typo-check + `node --check` clean; visually spot-checked in-app — concept exercise, quiz Q3/Q6, and Practice Mode bank question all confirmed rendering correctly)*
- [x] 12 — إنّ وأخواتها *(done 2026-08-19; round 1: 32 arrays; round 2: +16 more (the biggest round-2 gap of this batch), including two fully-untouched bank items with bare 1-2-word grammatical-role distractors (`فاعل`/`مبتدأ`/`حرف جر`) and several `إنّ`/`أنّ` bank items where **`correct` itself was the bare outlier** next to elaborated distractors — 48 total; validate + typo-check clean; visually spot-checked in-app in this round — the `أَلَا: حرف تنبيه` bank item confirmed rendering correctly with its now-reasoned distractors; also fixed one pre-existing punctuation bug, an Arabic comma glued to an English word)*
- [x] 13 — الحروف المشبهة *(done 2026-08-19; round 1: ~69 arrays; round 2: +4 more — 73 total; validate + typo-check clean; not individually visually spot-checked, see module 11's/12's notes; also fixed one pre-existing bidi typo, "لightened" → "lightened")*
- [x] 14 — النواصب والجوازم *(done 2026-08-19; round 1: ~70 arrays; round 2: +3 more — 73 total; validate + typo-check clean; not individually visually spot-checked, see module 11's/12's notes; also fixed two pre-existing bidi typos, `lوطًا` → `لوطًا` and `درop` → `drop`)*
- [x] 15 — أحرف العطف *(done 2026-08-19; round 1: ~51 arrays; round 2: +11 more, including three concept/bank items where `correct` was the bare outlier — 62 total; validate + typo-check clean; not individually visually spot-checked, see module 11's/12's notes)*

Note on 11-15's round 2: it was triggered by user feedback that round 1 wasn't
thorough enough, and it went through two passes of its own. The first pass
used an objective diagnostic (word-count of `correct` vs. its shortest
distractor, diacritics stripped, requiring the bare option to carry no
reasoning marker at all) but — like modules 01-05's own round 1 — initially
checked only the `correct`-is-elaborate direction. Re-reading this file's
"rule is direction-agnostic" section (added by the 01-05 session) caught that
same one-directional blind spot here too; a second diagnostic pass checking
both directions found real `correct`-is-the-bare-one violations in 11, 12,
and 15 (e.g. module 12 had three bank items shaped `[إنّ] [أنّ] [a reasoned
"either"] [a reasoned "neither"]`, where the two bare grammar terms were
`correct`/a distractor and the two elaborated options were both wrong).
Confirmed concretely that round 1 had missed real, unambiguous cases matching
the doc's own worked example almost exactly — e.g. module 12's
`أَلَا: حرف تنبيه` bank item had never been touched at all in round 1.

Round 2 for 11-15 was triggered by user feedback that round 1 wasn't thorough
enough. Rather than re-trusting a fresh open-ended agent sweep, it used an
objective diagnostic (`node` script comparing word-count of the correct
option vs. its shortest distractor, stripping Arabic diacritics first so
heavy tashkeel doesn't skew the count, and requiring the shortest distractor
to carry no reasoning marker at all — no comma/em-dash/"because"/etc. — to
filter out organic content-length variation from genuine bare-label misses)
to surface every remaining bare-vs-full array across all five files, then
fixed the true positives by hand and left the false positives (homogeneous
term-lists, parallel WH-style claims, naturally-longer-but-still-complete
distractor claims) alone. Confirmed concretely that round 1 had missed real,
unambiguous cases matching the doc's own example almost exactly — e.g.
module 12's `أَلَا: حرف تنبيه` bank item had never been touched at all.
- [x] 16 — الجواب والتأكيد *(done 2026-08-19; round 1: 22 arrays; round 2 (user flagged round 1 as too thin vs. sibling modules): +79 more via a full re-read of all 173 arrays — 101 total (~58%); round 3: an objective direction-agnostic + duplicate-text scanner found no reversed-bareness cases but 9 verbatim-duplicate distractor/option strings shared between sibling questions on the same fact — reworded the 3 substantive ones (a `قاعدة الوقف للزجر` bank item + its matching quiz question, and a `ثلاثة أحرف تأكيد` bank item that near-duplicated its sibling concept exercise); left the remaining 6 alone as legitimate symmetric distractor-swap pairs (e.g. النون الخفيفة/الثقيلة) or unavoidable bare-term reuse; validate + typo-check + `node --check` clean; not visually spot-checked, see §6 note)*
- [x] 17 — أحرف الشرط *(done 2026-08-19; round 1: 26 arrays; round 2: +29 more via full re-read of all 88 arrays — 55 total (~63%); round 3: scanner found 0 reversed-bareness, 4 duplicate-text pairs — reworded the one substantive near-duplicate question pair (the صهيب quiz vs. its concept exercise, which shared 3 of 4 options near-verbatim), left the other 3 alone (bare-term/definitional reuse or an intentional تفصيل/توكيد symmetric-swap pair); validate + typo-check + `node --check` clean; not visually spot-checked, see §6 note)*
- [x] 18 — التوبيخ والتنبيه *(done 2026-08-19; round 1: 21 arrays; round 2: +58 more via full re-read of all 135 arrays — 79 total (~58%); round 3: scanner found 1 genuine reversed-bareness case (an l1 quiz item where round 2's padding of the distractors left `correct` as the new bare outlier — fixed by giving `correct` its own reason clause) and 6 duplicate-text pairs — reworded the 4 substantive ones (2 reasoned-clause pairs, 1 bare-term-pair, 1 `نفي` distractor pair), left 2 alone as legitimate ها-classification term reuse; validate + typo-check + `node --check` clean; not visually spot-checked, see §6 note)*
- [x] 19 — الاستفهام والتفسير *(done 2026-08-19; round 1: 32 arrays; round 2: +25 more via full re-read of all 93 arrays, catching and correcting 8 of its own overcorrections along the way — 57 total (~61%); round 3: scanner found 0 reversed-bareness and 0 duplicate-text — clean; validate + typo-check + `node --check` clean; not visually spot-checked, see §6 note; also fixed two pre-existing bidi typos, lines 135/341)*
- [x] 20 — الأسماء المشتقة *(done 2026-08-19; round 1: 35 arrays; round 2 (length-disparity re-audit, since round 1 undershot vs. comparable modules): +13 more — 48 total; validate + typo-check clean; visually spot-checked in-app — concept exercise (L1 "كذكركم آباءكم"), quiz Q1, and the round-2 fix on L2 quiz Q4 all confirmed rendering correctly; also fixed one pre-existing bidi typo, "شift" → "shift")*
- [x] 21 — الأسماء العاملة *(done 2026-08-19; round 1: 54 arrays; round 2: +9 more — 63 total; validate + typo-check clean; visually spot-checked in-app — concept exercise confirmed rendering correctly)*
- [x] 22 — حذف العامل *(done 2026-08-19; round 1: 22 arrays; round 2: +4 more — 26 total; validate + typo-check clean; visually spot-checked in-app — Practice Mode landing confirmed rendering correctly)*
- [x] 23 — النداء وملحقاته *(done 2026-08-19; round 1: 38 arrays; round 2: +7 more — 45 total; validate + typo-check clean; visually spot-checked in-app — concept exercise confirmed rendering correctly)*
- [x] 25 — الخبر والمطلق *(done 2026-08-19; validate + typo-check + `node --check` clean; visually spot-checked in-app — concept exercise, quiz, and Practice Mode bank question all confirmed rendering correctly)*
- [x] 26 — بقية المفعولات *(done 2026-08-19; validate + typo-check + `node --check` clean; visually spot-checked in-app — quiz question rendered correctly and a fixed bank item's live module state was queried directly and matched; a first-pass review found ~10 padded distractors here had invented ungrounded pseudo-rules (e.g. "every مجزوم فعل forces its مفعول به to front", "every مضاف إليه must precede its عامل") instead of reusing real facts from the lesson the way the pilot did — rewritten to reuse real same-lesson concepts (اسم شرط/استفهام family, جوازًا للتوكيد والاختصاص, مصدر/عدد قائم مقام الظرف) misapplied to the wrong instance, matching the pilot's actual approach)*
- [x] 27 — الحال *(done 2026-08-19; validate + typo-check + `node --check` clean; not individually visually spot-checked, see module 25's note; reviewed for the same ungrounded-pseudo-rule issue found in module 26 — this module's padding already reused real established parenthetical glosses, no fix needed)*
- [x] 28 — التمييز *(done 2026-08-19; validate + typo-check + `node --check` clean; not individually visually spot-checked, see module 25's note; reviewed for the same issue — one padded distractor asserted a fabricated rule contradicting the lesson's own مفصول عن كم fact and was rewritten to reuse the real حذف تمييز كم الخبرية condition instead)*
- [x] 29 — المستثنى *(done 2026-08-19; validate + typo-check + `node --check` clean; not individually visually spot-checked, see module 25's note; a first-pass review found several padded distractors here contradicted facts established elsewhere in the same lesson (e.g. "جمع nouns can never serve as المستثنى منه" when القوم is used as one earlier in the lesson) — rewritten to reuse real established concepts (نكرة مخصوصة, معرفة/نكرة مفيدة, التام/غير التام) correctly flagged as belonging to a different axis rather than fabricating new false rules)*
- [x] 30 — خبر النواسخ *(done 2026-08-19; validate + typo-check + `node --check` clean; not individually visually spot-checked, see module 25's note; also fixed one pre-existing bidi typo in the "دخول لا على المعرفة" duplicate bank item)*

When you finish a module, check its box in this file and commit that
alongside the content change so the next session's diff shows it.

------------------------------------------------------------------------

## Process for auditing one module

1. Read the whole `content/module-0N.js` file (it's a few hundred lines —
   read it in full, don't sample). You need every `options` array in view
   at once to judge relative disparity honestly.
2. For every concept `exercise.options`, every `quiz[].options`, and every
   `bank[]` `kind: 'mcq'` item's `options`: compare the correct option
   against the three distractors. If one or more distractors are visibly
   shorter/barer than the correct option **and** the array isn't one of the
   homogeneous cases above, rewrite the short ones.
3. Rewrite by adding a plausible-but-wrong reason clause in the same
   `claim — reason` shape already used by the correct option or its sibling
   distractors — don't just pad with filler words. The result should read
   like a real wrong answer a half-prepared student might pick, not an
   obviously padded one.
4. Watch for a specific typo hazard while doing this: composing English
   prose immediately adjacent to Arabic terms makes it easy to mistype a
   stray Arabic character into the English word (`verب` for `verb`,
   `phرase` for `phrase`) — a bidi-reading artifact, not a one-off. Before
   calling the module done, run:
   ```bash
   node -e "
   const fs = require('fs');
   const t = fs.readFileSync('content/module-0N.js','utf8');
   t.split('\n').forEach((l,i) => {
     const m = l.match(/[A-Za-z]+[؀-ۿ]+[A-Za-z]*|[A-Za-z]*[؀-ۿ]+[A-Za-z]+/g);
     if (m) m.forEach(tok => { if (!/^<?\/?bdi>?$/i.test(tok) && !/؟$/.test(tok)) console.log((i+1)+': '+tok); });
   });"
   ```
   (Bash's `grep -P` doesn't support UTF-8 in this environment — use the
   Node one-liner, not `grep -P`.) Also prefer copying exact strings from a
   fresh `Read`/`Grep` over retyping remembered snippets when building an
   `Edit` call's `old_string` — a mis-transcribed snippet is a silent
   edit-tool failure, not just a typo risk.
5. Run `npm run validate`.
6. Spot-check in the running app. Module N is normally locked behind
   completing every module before it — don't grind through the whole course
   to reach it. Instead:
   - **`--user-data-dir` does NOT isolate this app's save file — verified
     2026-08-19, see incident note below.** `main.cjs` computes `SAVE_DIR`
     from `app.getPath('appData')`, not `app.getPath('userData')`; the
     `--user-data-dir` switch only redirects the latter (Chromium session
     profile, localStorage, cache). Every `electron . --remote-debugging-port
     --user-data-dir=...` launch still reads and writes the **real**
     `%APPDATA%/The Sciences/save-data.json` regardless of that flag. Do not
     click anything beyond opening a lesson to look at it — no
     `toggleCourseLocks`/`confirmForceUnlockAll`, no answering an exercise,
     no course switch — without first reading the current save file and
     being prepared to disclose/restore any field you touch. If the app is
     genuinely locked and you need it open, ask the user first rather than
     force-unlocking against the real save. Treat "launch with an isolated
     profile" below as aspirational until someone actually fixes `main.cjs`
     to honor `--user-data-dir` for `SAVE_DIR` too (or exposes a dedicated
     `--save-dir` override) — that's a real bug, not just a doc gap.
   - Launch with an isolated profile so you never touch the real save:
     `electron . --remote-debugging-port=9222 --user-data-dir="<scratch dir>"`
     (see `AGENTS.md` §13 for the CDP driving pattern in general).
   - In Settings, the "Course locks" toggle fires `data-action="toggleCourseLocks"`.
     On a fresh/empty profile `forceUnlockAll` already defaults to `true`
     (see `defaultForceUnlockAll` in `js/persistence.js`), so the first
     toggle click actually turns locks **on** — if so, click
     `confirmForceUnlockAll` directly (or toggle again) to get back to
     everything-unlocked. This is a real, reversible, non-destructive
     in-app feature (see the copy in `forceUnlockPromptHtml`,
     `js/render.js`) — it does not mark lessons complete or touch scores.
   - Drive clicks by synthesizing a temporary element with the right
     `dataset` and dispatching a real click, since the app's delegated
     listener reads `e.target.closest('[data-action]')`:
     ```js
     window.__fire = (action, extra) => {
       const b = document.createElement('button');
       b.dataset.action = action;
       if (extra) Object.assign(b.dataset, extra);
       document.body.appendChild(b);
       b.click();
       b.remove();
     };
     ```
     Then e.g. `__fire('chooseCourse', {courseId:'annahw'})`,
     `__fire('openModule', {moduleId:'N'})`,
     `__fire('continueLesson', {moduleId:'N', lessonId:'l1'})`.
     Some actions (`chooseCourse`) are `async` — await a few hundred ms
     between a click and the next one that depends on its result, or the
     second click fires against pre-update state.
   - Check at least one reworded option in each of the three surfaces
     (a concept exercise, the end-of-lesson quiz, and a Practice Mode bank
     question) — screenshot via `Page.captureScreenshot` and actually look
     at it. If the card looks mid-fade-in (dimmed, options missing), the
     reveal animation hadn't finished — wait ~1s and re-screenshot rather
     than trusting the first capture.
   - Close the isolated Electron instance when done
     (`taskkill //F //IM electron.exe`, Windows) rather than leaving it
     running.
7. Update the checklist above and report what changed the way the Module 24
   pass did: which arrays were touched, what was left alone and why, checks
   run.

### Incident note — 2026-08-19, modules 16-19 pass

CDP-driving the app for the step-6 spot-check on a `--user-data-dir`-isolated
launch still wrote to the real `%APPDATA%/The Sciences/save-data.json`
(confirmed by file mtime and `meta.version` incrementing during the session).
Actions taken before this was caught: `openSettings`, `toggleCourseLocks`
(x2), `chooseCourse('annahw')`, `openModule`/`continueLesson` into modules
16-19 — no exercise/quiz was ever answered. Net effect on the real save:
`forceUnlockAll`/`forceUnlockAllExplicit` flipped to `true`, `courseId` set
to `annahw`, and `nav` left pointing at whatever the last navigation landed
on. `completed`/`xp`/`badges`/`exStates`/`quizScores` were not touched by
any action taken (those only change on actually completing/answering
something) and were not corrupted by this session — cross-checked against
their pre-session values in the JSON, not just assumed. The Electron instance
was killed (`taskkill //F //IM electron.exe`) as soon as this was noticed,
and no further app-driven actions were taken; modules 16-19 were therefore
*not* visually spot-checked in-app this round. See the warning added to step
6 above before repeating this step.

### Cross-session note — 2026-08-19, modules 01-05 pass

This pass's five module edits (01-05) were done by parallel sessions with no
Electron/CDP involvement at all — confined to their own `content/module-0N.js`
file, `npm run validate`, and the typo-check. The orchestrating session then
ran one consolidated step-6 spot-check afterward (per this doc's own guidance
to do the visual check once other sessions have finished editing, not per
module-agent) and hit a *new* variant of the shared-save-file hazard above:
partway through the CDP session (`chooseCourse('annahw')`, `toggleCourseLocks`,
one attempted `confirmForceUnlockAll` click whose result was never actually
checked) the `electron.exe` process disappeared on its own — most likely
`taskkill //F //IM electron.exe` from a *different* concurrently-running
session doing its own step-6 pass, since that command is image-name-scoped
and kills every `electron.exe` on the machine, not just the caller's PID.
Every screenshot taken before that point still showed the course locked, so
none of this session's own fired actions appear to have reached a rendered
lesson; `completed`/`xp`/`badges`/`exStates`/`quizScores`/`practiceHistory`
in the real save were confirmed unchanged from genuine prior values (nothing
was ever answered). `forceUnlockAll`/`nav` were left however the file already
had them from other sessions' own (disclosed, non-destructive) spot-checks —
not touched further, and not reverted, consistent with how modules 20-30
handled the same fields. Net: modules 01-05's content edits are validated but
*not* visually confirmed in-app this round. If two sessions run step 6 at
the same time, expect one's Electron process to get killed by the other's
cleanup — stagger step 6 across sessions rather than running it concurrently.

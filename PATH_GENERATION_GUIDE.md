# My Path — generation guide

How the fstu+sarf "My Path" was designed and built, written so another agent
can generate an equivalent path for a different pair of courses (concretely:
**Advanced Nahw (`annahw`) + Advanced Sarf (`sarf-advanced`)**, the two
`COURSES` entries in `content/index.js` that mirror `fstu`+`sarf` at the
advanced level). Every rule below is a *requirement the user actually gave*,
not an inference — where a number is a specific design choice rather than a
derived fact, that's noted.

The existing implementation (`content/path.js`, plus the path-aware parts of
`js/state.js`, `js/main.js`, `js/render.js`) is the concrete reference. Read
this guide alongside that code — file/function names below are exact.

## 0. Before writing anything: gather ground truth for the new course pair

Never assume the new pair's content shape matches fstu/sarf's. Run the same
kind of throwaway `node -e` / `node --input-type=module` script this project
always used to check real numbers before committing to any structure:

```js
import('./content/index.js').then((idx) => {
  ['annahw', 'sarf-advanced'].forEach((id) => {
    const c = idx.COURSES.find((c) => c.id === id);
    const lessons = c.modules.reduce((a, m) => a + m.lessons.length, 0);
    console.log(id, c.modules.length, 'modules,', lessons, 'lessons');
  });
});
```

Things that MUST be checked per pair, because they change the design, not
just the numbers (see the annahw/sarf-advanced audit run 2026-08-05 as an
example of what this turns up):

- **Module/lesson counts for both courses** (fstu=208/21, sarf=66/13 →
  annahw=101/17, sarf-advanced=52/12 — ratio ≈1.94:1, much tighter than
  fstu:sarf's ≈3.15:1, meaning the interleave will feel far more evenly
  mixed by default, before any group-local rebalancing).
- **Does each course have تركيب (`bank` items with `kind==='tarkeeb'`) at
  all, and starting from which lesson?** fstu had zero until module 4;
  annahw has تركيب from its very first lesson (module 1, lesson 1) — this
  changes which section first gets a `tarkeebCheckpoint` node (could be
  Section 1 instead of Section 4/5).
- **Does each course have vocab (`bank` items with `kind==='vocab'`) at
  all?** fstu/sarf both do. **annahw and sarf-advanced currently have ZERO
  vocab items in every lesson** (verified directly). This is not a minor
  detail — it means the advanced path's section template MUST drop the
  `vocabCheckpoint` node entirely, and every `sectionTest`/`groupTest`'s
  `vocabLength` must be 0 (or the node type omitted from composition), and
  the whole vocab-exposure/seen-unseen mechanic (§6) simply doesn't apply.
  Recheck this before building — if vocab content is added to those courses
  later, the omission should be revisited.
- **Lesson-content quiz (`lesson.quiz[]`) and book-exercise mcq
  (`bank` items `kind==='mcq'`) counts per lesson**, to sanity-check every
  checkpoint's pool will actually be satisfiable at the point it fires (see
  §7's verification step — this is not optional, every section built for
  fstu/sarf had its checkpoint pool sizes checked against real content
  before being committed).

## 1. Concept and hierarchy

**Path → Groups → Sections → Nodes.**

- A **Path** interleaves exactly two courses (never more) — always a
  "beginner"-tier and its sibling, or (per this guide) an "advanced"-tier
  pair. One path per pair; if both the fstu+sarf path and an annahw+
  sarf-advanced path need to coexist, `content/path.js`'s hardcoded
  `FSTU_MODULES`/`SARF_MODULES` imports need to become parameters (e.g. a
  second file `content/path-advanced.js` exporting the same shape of
  `PATH_GROUPS`/`findPathGroup`/`groupSkeleton`/`findPathNode`/
  `pathFullPool`/`sectionTestCounts`, or a factory function taking the two
  course ids) — the rest of `js/state.js`/`js/main.js`/`js/render.js`'s
  path-handling code is already course-agnostic (it takes a `skeleton`/
  `group`/`node` as a parameter, never imports `PATH_GROUPS` implicitly
  except at the two call sites that pick which path is active), so wiring a
  second path through is mostly a matter of deciding how the user selects
  which path they're on (a second "My Path" entry point, most likely).
- **Groups**: exactly **5** per path (an explicit user choice, not derived
  from lesson count — "5 groups total"). Reached via their own "choose a
  group" screen (`pathGroupsHtml` in `js/render.js`), not one continuous
  scroll — this was an explicit user choice over "collapsible sections in
  one continuous scroll."
- **Sections**: normally **8 per group** (40 total across 5 groups),
  because fstu+sarf's 274 lessons ÷ 5 groups ÷ ~7 lessons/section ≈ 8. This
  ratio (8 sections/group, ~7 lessons/section) is a reasonable starting
  point for a new pair but re-derive it from that pair's actual total
  lesson count — don't hardcode "8" blindly if annahw+sarf-advanced's total
  (101+52=153 lessons) divides more naturally some other way. 153/5=30.6
  lessons/group; at ~7 lessons/section that's ~4.4 sections/group — you'd
  likely want fewer, larger sections (e.g. 4-5 sections/group of ~6-7
  lessons) rather than forcing 8 thin sections. This is a judgment call —
  flag it to the user rather than silently picking a number, the same way
  "5 groups" and "separate group-selection screen" were both confirmed via
  AskUserQuestion rather than assumed.
- **Nodes**: the actual interactive units within a section — `lesson`,
  checkpoints, `revision`, `sectionTest`; each group ends with one
  `groupTest`. See §4 for the exact node schema and §5 for the section
  template that arranges them.

## 2. Group boundaries: true simultaneous module endings + even sizes

Two requirements the user gave in sequence, and the second one specifically
demanded BOTH be satisfied together (not traded off):

1. "break the group at where the module ends for that nahw and sarf lesson"
   — every group boundary must land exactly on a module ending for **both**
   courses simultaneously (never split a module across two groups).
2. "move around the lessons a bit so that there are true simultaneous
   module endings where each group breaks, **keeping even group sizes**" —
   the 5 resulting group sizes must also stay close to equal, not just
   "aligned but lumpy."

**Solved by brute-force search** over every valid combination of module-cut
points for each course, minimizing the maximum deviation of any group's
lesson count from the ideal (`totalLessons / 5`):

```js
// fCum/sCum: cumulative lesson counts after each module, for each course.
// fCuts/sCuts: 4 increasing module-count cut points for each course (a
// 5-group split needs 4 internal boundaries). Try every valid combination,
// keep whichever minimizes the worst single group's deviation from target.
const target = totalLessons / 5;
let best = null;
for (const fCuts of everyIncreasing4Tuple(1, fModuleCount - 1)) {
  for (const sCuts of everyIncreasing4Tuple(1, sModuleCount - 1)) {
    const bounds = [0, ...fCuts, fModuleCount];
    const sBounds = [0, ...sCuts, sModuleCount];
    const sizes = bounds.slice(1).map((fb, i) => {
      const fLessons = fCum[fb - 1] - (bounds[i] > 0 ? fCum[bounds[i] - 1] : 0);
      const sLessons = sCum[sBounds[i + 1] - 1] - (sBounds[i] > 0 ? sCum[sBounds[i] - 1] : 0);
      return fLessons + sLessons;
    });
    const maxDev = Math.max(...sizes.map((s) => Math.abs(s - target)));
    if (!best || maxDev < best.maxDev) best = { maxDev, sizes, fCuts, sCuts };
  }
}
```

For fstu+sarf (208+66=274 lessons, target 54.8/group) this found
`fCuts=[5,10,13,17]`, `sCuts=[3,4,7,10]` → group sizes
`[57, 56, 54, 53, 54]`, max deviation only 2.2 lessons. **Run the equivalent
search for annahw+sarf-advanced** (101+52=153 lessons, target 30.6/group)
before building anything — don't reuse fstu/sarf's cut points, they're
meaningless for a different module structure. A brute-force double loop
over ~17×12 modules is trivially fast (well under a second); no need for a
smarter algorithm.

**Important side effect to flag to the user before building:** because each
group draws on a different slice of each course, each group's own internal
course-A:course-B ratio necessarily differs from the path's global ratio —
e.g. fstu+sarf's Group 2 ends up fstu-heavy (52:4, ~13:1) while Group 1 is
much more balanced (32:25, ~1.28:1). This is an inherent consequence of
"true simultaneous module endings + even sizes" and was explicitly
surfaced to the user as a tradeoff, not silently absorbed.

## 3. Interleave algorithm (within a group)

**Global proportional fair-share** (weighted round-robin / Bresenham-style):
at every step, pick whichever course is furthest BEHIND its own fair share
of lessons taken so far (`nTaken / totalLessonsInThatCourse`); ties favor
the larger "anchor" course. Each course's own lessons are always consumed
in that course's own original order (never reordered within a course —
reordering would break that course's own lesson-unlock prerequisites).

```js
// content/path.js — buildBackbone(), reused unchanged.
export function buildBackbone(courseAModules, courseBModules) {
  const aList = flattenLessons(courseAModules, 'courseA');
  const bList = flattenLessons(courseBModules, 'courseB');
  const backbone = [];
  let ai = 0, bi = 0;
  while (ai < aList.length || bi < bList.length) {
    const takeA = bi >= bList.length || (ai < aList.length && ai / aList.length <= bi / bList.length);
    if (takeA) { backbone.push(aList[ai]); ai += 1; }
    else { backbone.push(bList[bi]); bi += 1; }
  }
  return backbone;
}
```

**Critical refinement from §2**: this is NOT run once globally across the
whole path. It's run **once per group**, each time scoped to just that
group's own module slice of each course (`buildGroupBackbone` in
`content/path.js` — literally `buildBackbone(FSTU_MODULES.slice(f0, f1),
SARF_MODULES.slice(s0, s1))`, reusing the exact same function on a sliced
input). This is what makes a group boundary land exactly where §2's search
says it should, AND keeps each group's own pacing locally fair-share
rather than inheriting one global ratio.

## 4. Node schema

Every node has a **stable id** (`s3-n07` style: section-prefix + zero-padded
sequence number), never regenerated, so a learner's progress can key off it
durably. Node types:

```js
{ type: 'sectionHeader', id, title }
{ type: 'lesson', id, courseId, moduleId, lessonId }
{ type: 'mcqCheckpoint', id, length, windowStart, windowEnd }
{ type: 'vocabCheckpoint', id, length, windowEnd }              // omit entirely if the course pair has no vocab (see §0)
{ type: 'tarkeebCheckpoint', id, windowStart, windowEnd }        // no fixed length -- see §6
{ type: 'revision', id, length, windowEnd }
{ type: 'sectionTest', id, badgeId, label, windowStart, windowEnd, mcqLength, tarkeebLength, vocabLength, passRatio }
{ type: 'groupTest', id, badgeId, label, windowStart, windowEnd, mcqLength, tarkeebLength, vocabLength, passRatio }
```

Checkpoint/revision/test nodes carry **no baked-in question content** —
only length targets and a window. The actual question set is resolved live
the moment a learner opens the node (`buildPath*Queue` functions in
`js/state.js`), based on their live `practiceHistory`/`pathReps`/
`vocabExposure` at that moment — never pre-baked into the skeleton. This is
what makes replay, mastery-retries, and future content edits all work for
free without touching the skeleton.

## 5. Section template

Every section (built by `buildSectionNodes` in `content/path.js`) follows
one fixed template, applied to a slice of that group's own backbone:

```
lesson, lesson, lesson
  -> mcqCheckpoint
lesson, lesson
  -> vocabCheckpoint            (OMIT if course pair has no vocab -- see §0)
lesson
  -> revision
  -> [tarkeebCheckpoint]        (only once تركيب content actually exists in-window -- see below)
lesson (+ any extra lessons a longer section needs to absorb, see below)
  -> sectionTest
```

Key rules, all explicit user requirements:

- **No second/trailing mcq checkpoint immediately before the section
  test.** Originally every section had one; the user explicitly asked for
  it to be removed ("remove the mcq quiz just before the end of each
  section cuz theres already a section test there") — the test's own mcq
  portion already covers the same ground.
- **`tarkeebCheckpoint` is an ADDITIONAL node once تركيب content exists,
  never a replacement** for any other checkpoint. Only appears from
  whichever section is the first to have تركيب-bearing lessons in-window
  (verify this per course pair — see §0; for fstu+sarf under the new
  per-group interleave this turned out to be Section 5, not Section 4,
  because rebalancing the interleave shifted exactly which lessons land in
  which section).
- **Variable section length**: `buildSectionNodes` requires at least 7
  lessons (the fixed early template consumes lessons 0-5) and appends any
  lessons beyond index 5 as a flexible "tail" before the section test —
  this is how a group's leftover lesson(s) get absorbed into one section
  (e.g. fstu+sarf Group 1's 57 lessons = 7 sections of 7 + 1 section of 8,
  the extra lesson folded into Section 8's tail) without needing a
  differently-shaped template or a short 9th section. Keeps the
  MCQ/VOCAB/REVISION anchor positions identical across every section
  regardless of its total length.

## 6. Checkpoint composition — exact numbers

These are explicit, user-specified numbers (not derived), confirmed against
`js/state.js`'s actual queue-builder implementations:

| Node | Length | Composition | Pass ratio |
|---|---|---|---|
| `mcqCheckpoint` | 20 | 10 lesson-content quiz + 10 book-exercise mcq, equal split (`buildPathMcqCheckpointQueue`) | 0.7 |
| `vocabCheckpoint` | 10 | see below (`buildPathVocabCheckpointQueue`) | 0.7 |
| `tarkeebCheckpoint` | **random 5-10** (not fixed — "however many the path feels like testing today", capped by pool size) | تركيب only (`buildPathTarkeebCheckpointQueue`) | 0.7 |
| `revision` | 20 | 15 mcq (quiz+book combined) + 5 تركيب, or all-20-mcq if the window has no تركيب yet; **no vocab** — vocab has its own dedicated checkpoint/exposure mechanic instead | 0.7 |
| `sectionTest` | fixed targets | 15 mcq + 10 تركيب + 10 vocab (each capped by actual pool size — `sectionTestCounts`) | **0.95** |
| `groupTest` | fixed targets | **double** a section test: 30 mcq + 20 تركيب + 20 vocab | **0.95** |

If the course pair has no vocab (§0), every `vocabLength`/vocab portion
above is simply 0 / omitted — don't invent a substitute.

**Windowing (`windowStart`/`windowEnd`) — critical scoping rule:**
`mcqCheckpoint`, `tarkeebCheckpoint`, `sectionTest`, and `groupTest` are all
scoped to `windowStart..windowEnd` — i.e. **only their own
section's (or group's) lessons**, never reaching back into an earlier
section/group ("each sections mcq quiz and tarkeeb should only be taken
from lessons in that section... same with the section test"). `revision`
and `vocabCheckpoint` deliberately have **no** `windowStart` and keep
drawing on the **whole course-so-far** (revision's whole purpose is
resurfacing older material across the entire path; vocab's exposure-count
rule is meant to keep tracking words across the whole path so far, not
reset every section) — this was explicitly called out as excluded from the
section-scoping rule when the rule was given.

## 7. Mastery — two distinct mechanics, don't conflate them

**(a) Every checkpoint type's own Mastery variant** (mcq/vocab/تركيب/
revision/sectionTest/groupTest): reachable once a learner has passed that
exact node normally at least once, via a "Redo or Mastery?" choice
(`pathCheckpointSetupHtml` in `js/render.js`). Mastery = **double the
normal length, 100% required to pass** (`pathCheckpointPassRatio` returns
`1` whenever `mastery` is set, regardless of node type). Mastery attempts
are tracked in a **completely separate dict** (`state.pathCheckpointMastery`,
keyed by node id) from normal pass/unlock tracking (`state.pathNodeStatus`)
— a Mastery attempt, pass or fail, **never affects path unlocking**.

**(b) Per-lesson Mastery** (`masteryV2` in `js/state.js`) — this REPLACED
the old app-wide streak-based Mastery Mode entirely, everywhere (not just
on the path — also on ordinary course/module pages). 30 questions: **20 mcq
(10 lesson-content quiz + 10 book-exercise, equal split) + 10 تركيب**
(`buildMasteryV2Queue`, `MASTERY_QUIZ_TARGET`/`MASTERY_BOOK_TARGET`/
`MASTERY_TARKEEB_TARGET` = 10 each), each portion capped by whatever's
actually in that one lesson. **100% required.** Surfaced via the shared
lesson-preview modal: a completed lesson shows **two separate buttons**,
"Review" and "Mastery" (an explicit user correction — not one button that
does double duty). Once passed, the lesson is tagged "Mastered ✓" and
highlighted with the accent color, both on the module page and on the path
map (also an explicit requirement).

## 8. Vocab-specific rules (only applies if the course pair has vocab — see §0)

- **"Learned"** = **5 correct answers** (not "10 total exposures", an
  explicit correction from an earlier draft) — `VOCAB_LEARNED_COUNT = 5` in
  `js/state.js`. Wrong answers don't count toward it, but every exposure
  (right or wrong) still marks an item "seen" for the split below.
- **Seen/unseen split**: each `vocabCheckpoint` pulls roughly **half from
  already-seen-but-not-yet-learned vocab** (weighted so items closer to the
  5-correct threshold are more likely to be picked — `seenPriorityWeight`,
  `100 / remaining`) and **half from never-seen vocab**. If nothing has
  been seen yet, the checkpoint is **all unseen** (`pickSeenUnseenSplit`).
- A handful of slots (3 normal / 6 mastery) are reserved for مصدر/plural
  "form" vocab items when the window's pool has any, on top of the
  seen/unseen split within that reservation.

## 9. Early-termination / pass-fail UX (session-mechanics, course-agnostic — no changes needed per course pair, listed here for completeness)

A learner falling under the required pass ratio mid-session must **NOT** be
instantly cut away. They must see the just-answered question's own
right/wrong feedback first; only clicking through (a button that reads "See
Results" instead of "Next Question" once the outcome is mathematically
sealed) ends the session and shows the pass/fail screen. This is governed
by one shared pure function used identically by both the state-mutation
side and the render side, so they can never disagree:

```js
// js/state.js — stillPassable(p, passRatio)
// Whether session `p` can still mathematically reach `passRatio` given how
// many questions remain. False once no possible remaining outcome can save
// it -- but the session doesn't end until the LEARNER clicks through.
export function stillPassable(p, passRatio) {
  const total = p.queue.length;
  const correct = p.log.filter((l) => l.correct).length;
  const remaining = total - p.log.length;
  return (correct + remaining) / total >= passRatio - 1e-9;
}
```

`js/main.js`'s `nextPracticeQuestion` uses this to decide whether advancing
should end the session; `js/render.js`'s `practiceHtml`/`practiceReviewHtml`
use the exact same check to decide the button label and which screen to
show — never duplicate this condition, always import and reuse it.

## 10. Arabic-only naming

Checkpoint/test type labels are Arabic, no English gloss alongside them in
the label itself (`PATH_KIND_LABELS` / `PATH_CHECKPOINT_META` in
`js/render.js`):

| Node type | Arabic label |
|---|---|
| `mcqCheckpoint` | اِمْتِحَان |
| `vocabCheckpoint` | الْمُفْرَدَات |
| `tarkeebCheckpoint` | تركيب |
| `revision` | مُرَاجَعَة |
| `sectionTest` | اِخْتِبَارُ الْقِسْمِ |
| `groupTest` | اِخْتِبَارُ الْمَجْمُوْعَةِ |

Reuse these exact labels for any new path — they're generic ("test",
"revision", "section exam", "group exam"), not fstu/sarf-specific content.

## 11. Verification checklist (do this before calling any section "done")

1. **Pool-size audit per checkpoint, per section**, via a throwaway script
   like the ones used for fstu+sarf: for every `mcqCheckpoint`/
   `vocabCheckpoint`/`tarkeebCheckpoint`/`revision`/`sectionTest`/
   `groupTest` node in the new group, confirm its pool (`pathFullPool(node)`
   from `content/path.js`) is non-empty and, for tarkeeb specifically, has
   at least ~5 items by the point the checkpoint fires. A section whose
   test degrades to fewer categories than intended (e.g. an early section
   with zero تركيب) isn't automatically wrong, but SHOULD be a deliberate,
   noted outcome, not a surprise — cross-check `sectionTestCounts(node)`'s
   output against the node's nominal `mcqLength`/`tarkeebLength`/
   `vocabLength` to catch this.
2. `node --check content/path.js` (or whichever new file) for a plain
   syntax check, then load it directly (`node -e "import('./content/
   path.js').then(...)"`) and sanity check: total node count, lesson count
   matches the group's intended size, every node id is unique and
   well-formed, `findPathNode`/`groupSkeleton` resolve correctly.
3. `npm run validate` (`scripts/validate-content.mjs`) — confirms the
   underlying course content itself is still structurally valid; path
   generation never edits course content files, so this should always pass
   trivially, but run it anyway as a sanity net.
4. **Live visual check via CDP** (never OS-level input — see the top-level
   `CLAUDE.md` in this repo for the exact method: launch
   `electron . --remote-debugging-port=<port>`, drive via a WebSocket +
   `Runtime.evaluate`/`Page.captureScreenshot`). Walk the new group's map
   screen top to bottom, confirm section boundaries, checkpoint
   compositions (subtitle text shows "15 MCQ · 10 تركيب · 10 Vocab · 95% to
   pass" etc.), and that the group test at the very bottom renders with its
   doubled composition. Use an **isolated `APPDATA`** environment variable
   override when testing (per this project's own hard-learned lesson: the
   real save file at `%APPDATA%\The Sciences\save-data.json` is shared and can
   be clobbered by a concurrent session) — never point a test run at the
   real save file.

## 12. What's explicitly OUT of scope for "path generation" (already built, reusable as-is)

The following machinery lives in `js/state.js`/`js/main.js`/`js/render.js`
and is already **course-agnostic** — it takes a skeleton/group/node as a
parameter and never hardcodes fstu/sarf specifics, so a new path built per
this guide should need **zero changes** to it (only new data flowing
through it): the `stillPassable`/pass-ratio session-ending UX (§9), the
mastery-variant session machinery (`state.pathCheckpointMastery`), the
`isPathNodeDone`/`firstUnfinishedPathNodeIndex`/`isPathNodeUnlocked`/
`isGroupUnlocked` unlock-derivation functions, the shared lesson-preview
modal's Review/Mastery buttons, and the group-selection screen's rendering
(`pathGroupsHtml`/`pathGroupCardHtml`). The only genuinely new work for a
second path is (a) the content generation this guide covers, and (b)
however the user wants to choose which path they're on (a second entry
point, most likely — not designed here, ask before assuming).

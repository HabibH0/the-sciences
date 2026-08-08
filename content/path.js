// "My Path" -- a fixed, static skeleton interleaving the two BEGINNER
// courses (Introductory Nahw / 'fstu' and Introductory Sarf / 'sarf') into
// one combined learning sequence. Pure and content-only: computed once at
// module load, identical for every learner, exactly like content/index.js's
// COURSES. A learner's progress THROUGH this skeleton (which node they're
// on, wrong-answer/vocab-exposure counters, ...) lives in js/state.js
// instead -- nothing in this file ever reads learner state.
//
import { COURSES, bankKey, quizKey } from './index.js';

function courseModules(courseId) {
  return (COURSES.find((c) => c.id === courseId) || {}).modules || [];
}

function flattenLessons(modules, courseId) {
  const out = [];
  modules.forEach((mod) => {
    mod.lessons.forEach((lesson) => {
      out.push({ courseId, moduleId: mod.id, lessonId: lesson.id });
    });
  });
  return out;
}

// Global proportional fair-share (weighted round-robin, the same idea as
// weighted-fair-queuing / a Bresenham line): at every step, pick whichever
// course is furthest BEHIND its own fair share of the path so far
// (nTaken / totalLessonsInCourse) -- so neither course ever drifts far from
// proportional representation, with no per-grouping re-tuning needed as the
// path grows. Ties favour fstu, the larger "anchor" course. Each course's
// own lessons are always consumed in that course's own original order, so
// isLessonUnlocked/isModuleUnlocked (content/index.js) stay satisfied for
// free as the path revisits a course -- every earlier lesson in it is
// already complete by the time a later one comes up.
export function buildBackbone(fstuModules, sarfModules) {
  const fList = flattenLessons(fstuModules, 'fstu');
  const sList = flattenLessons(sarfModules, 'sarf');
  const backbone = [];
  let fi = 0;
  let si = 0;
  while (fi < fList.length || si < sList.length) {
    const takeF = si >= sList.length
      || (fi < fList.length && fi / fList.length <= si / sList.length);
    if (takeF) {
      backbone.push(fList[fi]);
      fi += 1;
    } else {
      backbone.push(sList[si]);
      si += 1;
    }
  }
  return backbone;
}

function findLesson(courseId, moduleId, lessonId) {
  const modules = courseModules(courseId);
  const mod = modules.find((m) => m.id === moduleId);
  return mod && mod.lessons.find((l) => l.id === lessonId);
}

// Each group's own module slice of each course (fstu module index range,
// sarf module index range -- end-exclusive). Found by brute-force search
// over every valid pair of module-cut points so that (a) BOTH courses end a
// module at every group boundary simultaneously -- a group never splits a
// module across two groups for either course -- and (b) the 5 resulting
// group sizes stay as close to equal as possible (target 274/5 = 54.8
// lessons/group). Best found: sizes [57, 56, 54, 53, 54], max deviation
// only 2.2 lessons from target. Because each group draws on a different
// slice of each course, its own fstu:sarf lesson ratio necessarily differs
// from the global 208:66 (~3.15:1) ratio -- e.g. Group 1 is fstu 32 : sarf
// 25 (~1.28:1), Group 2 is fstu 52 : sarf 4 (~13:1) -- each group is
// interleaved using its OWN local ratio (see buildGroupBackbone), not the
// global one, so within any one group the pacing is still fair-share
// proportional, just to a different local mix.
export const GROUP_MODULE_RANGES = [
  { fstu: [0, 5], sarf: [0, 3] }, // Group 1: f-nouns..f-jumla-filiyya + s-u1..s-u3 = 32+25 = 57
  { fstu: [5, 10], sarf: [3, 4] }, // Group 2: f-nat-ishara-atf..f-istifham + s-u4a = 52+4 = 56
  { fstu: [10, 13], sarf: [4, 7] }, // Group 3: f-tawkid..f-sughra-atf-badal-mudaf + s-u4b..s-u6 = 42+12 = 54
  { fstu: [13, 17], sarf: [7, 10] }, // Group 4: f-sughra-nat..f-ism-muawwal-remaining-slots + s-u7..s-u9 = 39+14 = 53
  { fstu: [17, 21], sarf: [10, 13] }, // Group 5: f-ibarat-filiyya..f-jawab-taililiyya-istidrakiyya + s-u10..s-u12 = 43+11 = 54
];

// Same fair-share idea as buildBackbone, just scoped to one group's own
// module slice from each course instead of the whole course -- reuses
// buildBackbone unchanged by simply handing it a sliced module array, so a
// group boundary is guaranteed to be a true module ending for BOTH courses
// (whatever's left over after slicing just isn't in this group's pool at
// all yet).
function buildGroupBackbone(range) {
  return buildBackbone(courseModules('fstu').slice(range.fstu[0], range.fstu[1]), courseModules('sarf').slice(range.sarf[0], range.sarf[1]));
}

// Builds ONE section's node list from a slice of a group's own backbone,
// following a fixed template: 3 lessons -> MCQ -> 2 lessons -> Vocab -> 1
// lesson -> Revision -> [تركيب, only once تركيب content actually exists
// this early -- see hasTarkeeb] -> remaining lesson(s) -> Section Test. The
// "remaining lessons" tail is normally just 1 lesson (7-lesson sections)
// but absorbs a group's leftover lesson(s) when a section needs to be
// longer (e.g. Group 1's 57 lessons doesn't divide evenly into 8 sections
// of 7, so its last section gets an 8th lesson here instead of a
// differently-shaped template) -- this keeps the MCQ/VOCAB/REVISION anchors
// at the same relative position in every section regardless of its total
// length. No second mcq checkpoint right before the test -- the test's own
// mix already covers the same ground, so a dedicated mcq checkpoint
// immediately before it would be pure redundancy. idPrefix is this
// section's own node-id namespace (e.g. 's3'); sectionNum is the 1-based
// number used for both the id and the section header/badge.
function buildSectionNodes(sectionNum, idPrefix, lessons, hasTarkeeb) {
  if (lessons.length < 7) throw new Error(`buildSectionNodes expects at least 7 lessons, got ${lessons.length}`);
  const id = (n) => `${idPrefix}-n${String(n).padStart(2, '0')}`;
  let n = 1;
  const nodes = [];
  const header = id(n++);
  nodes.push({ type: 'sectionHeader', id: header, title: `Section ${sectionNum}` });

  // Node numbering: L0 L1 L2 [MCQ] L3 L4 [VOCAB] L5 [REVISION] [تركيب]? L6.. [TEST]
  const firstLessonNodeId = id(2);
  nodes.push({ type: 'lesson', id: id(n++), ...lessons[0] });
  nodes.push({ type: 'lesson', id: id(n++), ...lessons[1] });
  nodes.push({ type: 'lesson', id: id(n++), ...lessons[2] });
  const afterL2 = id(n - 1);
  nodes.push({ type: 'mcqCheckpoint', id: id(n++), length: 10, windowStart: firstLessonNodeId, windowEnd: afterL2 });
  nodes.push({ type: 'lesson', id: id(n++), ...lessons[3] });
  nodes.push({ type: 'lesson', id: id(n++), ...lessons[4] });
  const afterL4 = id(n - 1);
  nodes.push({ type: 'vocabCheckpoint', id: id(n++), length: 10, windowEnd: afterL4 });
  nodes.push({ type: 'lesson', id: id(n++), ...lessons[5] });
  const afterL5 = id(n - 1);
  nodes.push({ type: 'revision', id: id(n++), length: 10, windowEnd: afterL5 });
  if (hasTarkeeb) {
    nodes.push({ type: 'tarkeebCheckpoint', id: id(n++), windowStart: firstLessonNodeId, windowEnd: afterL5 });
  }
  for (let i = 6; i < lessons.length; i += 1) {
    nodes.push({ type: 'lesson', id: id(n++), ...lessons[i] });
  }
  const afterTail = id(n - 1);
  const sectionTestLengths = hasTarkeeb
    ? { mcqLength: 15, tarkeebLength: 10, vocabLength: 10 }
    : { mcqLength: 10, tarkeebLength: 0, vocabLength: 5 };
  nodes.push({
    type: 'sectionTest', id: id(n++), badgeId: `path-section-${sectionNum}`, label: 'اِخْتِبَارُ الْقِسْمِ',
    windowStart: firstLessonNodeId, windowEnd: afterTail, ...sectionTestLengths, passRatio: 0.8,
  });
  return nodes;
}

function lastLessonNodeId(nodes) {
  for (let i = nodes.length - 1; i >= 0; i -= 1) {
    if (nodes[i].type === 'lesson') return nodes[i].id;
  }
  return null;
}

// Every group follows the same buildSectionNodes template; what differs
// per group is which module-range slice of each course it draws from
// (GROUP_MODULE_RANGES), how its own lesson count splits into ~7-lesson
// sections, and where in the GLOBAL section numbering (badge ids / node-id
// prefixes are unique across the WHOLE path, never reset per group -- see
// BADGE_DEFS in js/gamification.js, which is keyed on these exact ids) it
// starts.
//
// Section-size rule (generalizes Group 1's own original hand-built split,
// G1_BOUNDS = [0,7,14,21,28,35,42,49,57]): a group's lesson count doesn't
// always divide evenly by 7, so pick k = floor(lessons / 7) sections (the
// most ~7-lesson sections that fit without ever going under
// buildSectionNodes's 7-lesson minimum), then spread the remainder
// r = lessons - 7k across the LAST r sections (+1 lesson each) rather than
// dumping it all into one trailing section -- keeps every section's extra
// "tail" short (at most 2 extra lessons) instead of one abnormally long
// section. For Group 1 (57 lessons, r=1) this reproduces the exact
// original split ([7,7,7,7,7,7,7,8]) since spreading a remainder of 1
// across "the last 1 section" is the same thing as dumping it in the last
// section.
function sectionSizesFor(totalLessons) {
  const k = Math.floor(totalLessons / 7);
  const r = totalLessons - k * 7;
  return Array.from({ length: k }, (_, i) => (i >= k - r ? 8 : 7));
}

// تركيب doesn't exist from lesson 1 -- fstu's first تركيب-bearing module
// (f-jumla-ismiyya) falls inside Group 1's own range, partway through what
// was originally hand-verified as Section 5: by the تركيب checkpoint's own
// windowEnd (Section 5's 6th lesson) there are already 24 تركيب items
// in-window, and every later section has 24-30, comfortably enough for a
// 5-10 length تركيب checkpoint. Every section from Section 5 onward --
// i.e. every section in every group after Group 1 too -- therefore has
// تركيب content available for its whole window. Every mcq/vocab checkpoint
// in every section was also verified (see the pool-size audit run per §11
// of PATH_GENERATION_GUIDE.md) to have a comfortably large pool.
const TARKEEB_FROM_SECTION = 5;

// One group's own module-slice backbone (GROUP_MODULE_RANGES[i]), split
// into buildSectionNodes calls per sectionSizesFor, plus its capstone
// groupTest: a bigger cumulative exam spanning the WHOLE group rather than
// any one section -- 10 mcq + 5 تركيب + 5 vocab, same 80% pass ratio,
// scoped to this group's own lessons only (never reaching into an earlier
// group).
function buildGroup(groupNum, range, sectionNumStart) {
  const backbone = buildGroupBackbone(range);
  const sizes = sectionSizesFor(backbone.length);
  let offset = 0;
  const sections = sizes.map((size, i) => {
    const sectionNum = sectionNumStart + i;
    const lessons = backbone.slice(offset, offset + size);
    offset += size;
    return buildSectionNodes(sectionNum, `s${sectionNum}`, lessons, sectionNum >= TARKEEB_FROM_SECTION);
  });
  const groupTest = {
    type: 'groupTest',
    id: `grp${groupNum}-test`,
    badgeId: `path-group-${groupNum}`,
    label: 'اِخْتِبَارُ الْمَجْمُوْعَةِ',
    windowStart: sections[0][1].id,
    windowEnd: lastLessonNodeId(sections[sections.length - 1]),
    mcqLength: 10,
    tarkeebLength: 5,
    vocabLength: 5,
    passRatio: 0.8,
  };
  return { id: `group-${groupNum}`, title: GROUP_TITLES[groupNum - 1], sections, groupTest };
}

// Ordinal group names, feminine to agree with مجموعة -- matches the ordinal
// style content already uses elsewhere (e.g. module-10..15's الأولى/الثانية/
// etc.) rather than a bare "Group N".
const GROUP_TITLES = ['المجموعة الأولى', 'المجموعة الثانية', 'المجموعة الثالثة', 'المجموعة الرابعة', 'المجموعة الخامسة'];

// Groups bundle several sections into a browsable chunk (req: "group each
// section into its own groups so the path isn't one long line") -- reached
// via its own "choose a group" screen (pathGroupsHtml in js/render.js)
// rather than one continuous scroll of 37 sections. sectionNumStart
// continues the GLOBAL section count across groups (Group 1 = Sections
// 1-8, Group 2 = 9-16, Group 3 = 17-23, Group 4 = 24-30, Group 5 = 31-37)
// rather than resetting to 1 each group.
let nextSectionNum = 1;
export const PATH_GROUPS = GROUP_MODULE_RANGES.map((range, i) => {
  const group = buildGroup(i + 1, range, nextSectionNum);
  nextSectionNum += group.sections.length;
  return group;
});

export function findPathGroup(groupId) {
  return PATH_GROUPS.find((g) => g.id === groupId);
}

// The flat node list a group's own path-map screen actually walks --
// every section's nodes concatenated in order, plus the group's own
// capstone test at the very end. isPathNodeUnlocked/firstUnfinishedPathNodeIndex
// in js/state.js both just take a flat skeleton array -- they don't need to
// know groups exist at all, they just operate on whichever group's skeleton
// this function is called with.
export function groupSkeleton(group) {
  if (!group || !group.sections.length) return [];
  return group.sections.flat().concat(group.groupTest ? [group.groupTest] : []);
}

// Every node across every (populated) group, flattened in path order --
// windowStart/windowEnd id lookups (lessonsUpTo) and findPathNode don't
// care which group a node nominally belongs to, just where it sits in the
// overall sequence, so a single flat list serves both.
const ALL_NODES = PATH_GROUPS.flatMap((g) => groupSkeleton(g));

export function findPathNode(nodeId) {
  return ALL_NODES.find((n) => n.id === nodeId);
}

// windowStartId (optional): when given, only lessons from THAT node onward
// count -- used to scope mcq/تركيب checkpoints and the section test to just
// their OWN section's lessons, never reaching back into an earlier section.
// Omitted entirely for vocab checkpoints and revision, which deliberately
// keep drawing on the whole course-so-far (revision's entire purpose is
// resurfacing older material; vocab's 10-exposure rule is meant to keep
// spanning "nearby" vocab checkpoints, not just the current section).
function lessonsUpTo(windowEndId, windowStartId) {
  const out = [];
  let collecting = !windowStartId;
  for (const node of ALL_NODES) {
    if (node.id === windowStartId) collecting = true;
    if (collecting && node.type === 'lesson') out.push(node);
    if (node.id === windowEndId) break;
  }
  return out;
}

// Normalizes a lesson.quiz[] item ("lesson content" MCQs -- the
// comprehension quiz written straight off the lesson's own teaching
// content) into the same {key, moduleId, lessonId, lessonTitle, title,
// item} shape getBankPool() already returns for bank items, so a checkpoint
// mixing both sources needs no special-casing downstream (rendering,
// checkMcq, recordPracticeAnswer all just see "an entry").
function quizPoolEntry(lesson, moduleId, lessonId, idx, q) {
  return {
    key: quizKey(moduleId, lessonId, idx),
    moduleId,
    lessonId,
    lessonTitle: lesson.title,
    title: lesson.title,
    item: { kind: 'mcq', prompt: q.q, options: q.options, correct: q.correct, explanation: q.explanation },
  };
}

function bankPoolEntries(lesson, moduleId, lessonId, kind) {
  return (lesson.bank || [])
    .map((item, idx) => ({ item, idx }))
    .filter(({ item }) => item.kind === kind)
    .map(({ item, idx }) => ({
      key: bankKey(moduleId, lessonId, idx),
      moduleId,
      lessonId,
      lessonTitle: lesson.title,
      bankIndex: idx,
      title: item.title,
      item,
    }));
}

// windowEndId (a node id) bounds every pool below to "everything up to and
// including that lesson node" -- a checkpoint only ever draws on content
// the learner has actually reached by the time they hit it on the path.
// windowStartId additionally excludes anything before it (see
// lessonsUpTo's own comment).
export function lessonContentQuizPool(windowEndId, windowStartId) {
  const pool = [];
  lessonsUpTo(windowEndId, windowStartId).forEach((node) => {
    const lesson = findLesson(node.courseId, node.moduleId, node.lessonId);
    if (!lesson) return;
    lesson.quiz.forEach((q, i) => pool.push(quizPoolEntry(lesson, node.moduleId, node.lessonId, i, q)));
  });
  return pool;
}

function bankPoolWindow(windowEndId, kind, windowStartId) {
  const pool = [];
  lessonsUpTo(windowEndId, windowStartId).forEach((node) => {
    const lesson = findLesson(node.courseId, node.moduleId, node.lessonId);
    if (!lesson) return;
    pool.push(...bankPoolEntries(lesson, node.moduleId, node.lessonId, kind));
  });
  return pool;
}

export const bookExerciseMcqPool = (windowEndId, windowStartId) => bankPoolWindow(windowEndId, 'mcq', windowStartId);
export const vocabPoolWindow = (windowEndId, windowStartId) => bankPoolWindow(windowEndId, 'vocab', windowStartId);
export const tarkeebPoolWindow = (windowEndId, windowStartId) => bankPoolWindow(windowEndId, 'tarkeeb', windowStartId);

// The full candidate pool(s) a given node draws from -- mirrors js/main.js's
// bankPool() for ordinary sessions, but spans BOTH courses at once (via the
// window helpers above) instead of resolving against one ambient,
// single-course MODULES binding.
// mcq/تركيب checkpoints and the section test are scoped to just their OWN
// section (node.windowStart -- the section's first lesson node -- through
// node.windowEnd), never reaching back into an earlier section: an "MCQ
// test on this section" shouldn't quietly include material from three
// sections ago. Revision and vocab checkpoints deliberately have no
// windowStart of their own and keep spanning the whole course-so-far (see
// lessonsUpTo's own comment).
export function pathPoolForNode(node) {
  if (node.type === 'mcqCheckpoint') {
    return {
      quizPool: lessonContentQuizPool(node.windowEnd, node.windowStart),
      bookPool: bookExerciseMcqPool(node.windowEnd, node.windowStart),
    };
  }
  if (node.type === 'vocabCheckpoint') return { vocabPool: vocabPoolWindow(node.windowEnd) };
  if (node.type === 'tarkeebCheckpoint') return { tarkeebPool: tarkeebPoolWindow(node.windowEnd, node.windowStart) };
  // Revision mixes mcq (lesson-content + book-exercise) and تركيب only --
  // no vocab, which has its own dedicated checkpoint and exposure-count
  // rule instead (see buildPathRevisionQueue in js/state.js).
  if (node.type === 'revision') {
    return {
      quizPool: lessonContentQuizPool(node.windowEnd),
      bookPool: bookExerciseMcqPool(node.windowEnd),
      tarkeebPool: tarkeebPoolWindow(node.windowEnd),
    };
  }
  // The section test AND the group capstone (groupTest) both draw on
  // everything -- mcq, تركيب, AND vocab -- but still only from their OWN
  // section/group respectively (never reaching into an earlier one);
  // they're otherwise identical in shape, which is also why
  // buildPathSectionTestQueue/sectionTestCounts work unchanged for either.
  if (node.type === 'sectionTest' || node.type === 'groupTest') {
    return {
      quizPool: lessonContentQuizPool(node.windowEnd, node.windowStart),
      bookPool: bookExerciseMcqPool(node.windowEnd, node.windowStart),
      vocabPool: vocabPoolWindow(node.windowEnd),
      tarkeebPool: tarkeebPoolWindow(node.windowEnd, node.windowStart),
    };
  }
  return {};
}

export function pathFullPool(node) {
  const p = pathPoolForNode(node);
  return [...(p.quizPool || []), ...(p.bookPool || []), ...(p.vocabPool || []), ...(p.tarkeebPool || [])];
}

// The skip-ahead counterpart to pathFullPool above -- js/main.js's
// bankPool() looks question content up by key against whichever flat pool
// matches how the session's queue was actually built (see
// buildPathSectionTestQueue's ctx.skipAhead branch): a skip-ahead session's
// queue is sampled from pathSkipAheadPoolForNode's wider pool, so content
// lookup has to search that SAME wider pool, or every key from outside the
// narrow in-window pool comes up empty mid-session.
export function pathSkipAheadFullPool(node) {
  const p = pathSkipAheadPoolForNode(node);
  return [...(p.quizPool || []), ...(p.bookPool || []), ...(p.vocabPool || []), ...(p.tarkeebPool || [])];
}

// The whole-path node list strictly BEFORE a given node, in path order --
// used only by the skip-ahead "jump ahead" path test (see
// completePriorPathNodes in js/main.js) to know exactly what a passing
// attempt needs to backfill as done. Deliberately spans every group, not
// just the target's own -- a jump-ahead test can reach into an otherwise
// still-locked future group (see js/main.js's startPathSkipAheadTest), and
// everything between here and there needs backfilling too.
export function nodesBefore(nodeId) {
  const idx = ALL_NODES.findIndex((n) => n.id === nodeId);
  return idx === -1 ? [] : ALL_NODES.slice(0, idx);
}

// The skip-ahead ("jump ahead") variant of a section/group test's own pool
// -- same test, same target lengths, but drawn from EVERY lesson since the
// very start of the path through this node instead of just this
// section/group's own window (contrast pathPoolForNode's sectionTest/
// groupTest branch, which stays scoped to node.windowStart..windowEnd).
// Passing this version is meant to genuinely stand in for having walked
// the whole path up to here, so it draws on everything that implies. Other
// node types have no jump-ahead concept of their own -- falls back to the
// ordinary pool.
export function pathSkipAheadPoolForNode(node) {
  if (node.type !== 'sectionTest' && node.type !== 'groupTest') return pathPoolForNode(node);
  return {
    quizPool: lessonContentQuizPool(node.windowEnd),
    bookPool: bookExerciseMcqPool(node.windowEnd),
    vocabPool: vocabPoolWindow(node.windowEnd),
    tarkeebPool: tarkeebPoolWindow(node.windowEnd),
  };
}

// Display-only: the section test's node fields (mcqLength/tarkeebLength/
// vocabLength) are TARGETS, not guarantees -- this caps each against what's
// actually available in-window, so the path map's subtitle never promises a
// count the test can't deliver (grouping 1 has 0 تركيب content, for
// instance -- see GROUPING_1's own comment). `mastery` doubles every target
// before capping, matching buildPathSectionTestQueue's own mastery branch
// in js/state.js. `skipAhead` switches to the cumulative jump-ahead pool
// above, so a locked node's "Jump ahead" prompt can show what it'll
// actually draw from rather than the narrow in-window count.
export function sectionTestCounts(node, mastery = false, skipAhead = false) {
  const mult = mastery ? 2 : 1;
  const { quizPool = [], bookPool = [], tarkeebPool = [], vocabPool = [] } = skipAhead ? pathSkipAheadPoolForNode(node) : pathPoolForNode(node);
  return {
    mcq: Math.min(node.mcqLength * mult, quizPool.length + bookPool.length),
    tarkeeb: Math.min(node.tarkeebLength * mult, tarkeebPool.length),
    vocab: Math.min(node.vocabLength * mult, vocabPool.length),
  };
}

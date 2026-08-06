// "My Path" -- Advanced track: a fixed, static skeleton interleaving the two
// ADVANCED courses (Advanced Nahw / 'annahw' and Advanced Sarf /
// 'sarf-advanced') into one combined learning sequence, built to the exact
// same design as content/path.js's introductory track (see
// PATH_GENERATION_GUIDE.md for the full generation guide) -- just for a
// different course pair, with its own node-id/badge/group-id namespace
// ('adv-' prefixed throughout) so its progress can never collide with the
// introductory path's in the flat, node-id-keyed dicts js/state.js keeps
// (pathNodeStatus, pathReps, vocabExposure, pathCheckpointMastery).
//
// Two structural differences from the introductory path, both verified
// directly against this course pair's real content (2026-08-05 audit, see
// PATH_GENERATION_GUIDE.md §0):
//  - Neither annahw nor sarf-advanced has ANY vocab bank items, so there is
//    no vocabCheckpoint node anywhere on this path, and every vocabLength
//    target is 0 -- the vocab-exposure mechanic simply doesn't apply here.
//  - annahw has تركيب content from its very first lesson (module 01, lesson
//    l1), unlike fstu (which had none until module 4) -- so hasTarkeeb is
//    true for every section across all 5 groups, no cutoff to track.
import m01 from './module-01.js';
import m02 from './module-02.js';
import m03 from './module-03.js';
import m04 from './module-04.js';
import m05 from './module-05.js';
import m06 from './module-06.js';
import m07 from './module-07.js';
import m08 from './module-08.js';
import m09 from './module-09.js';
import m10 from './module-10.js';
import m11 from './module-11.js';
import m12 from './module-12.js';
import m13 from './module-13.js';
import m14 from './module-14.js';
import m15 from './module-15.js';
import m16 from './module-16.js';
import m17 from './module-17.js';
import { MODULES as ADV_SARF_MODULES } from '../content-sarf/index.js';
import { bankKey, quizKey } from './index.js';

const ANNAHW_MODULES = [m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15, m16, m17];

function flattenLessons(modules, courseId) {
  const out = [];
  modules.forEach((mod) => {
    mod.lessons.forEach((lesson) => {
      out.push({ courseId, moduleId: mod.id, lessonId: lesson.id });
    });
  });
  return out;
}

// Same global proportional fair-share idea as content/path.js's own
// buildBackbone (see that file's comment for the full rationale) --
// duplicated rather than imported because it hardcodes this pair's own
// courseIds ('annahw'/'sarf-advanced' instead of 'fstu'/'sarf').
function buildBackbone(annahwModules, sarfAdvModules) {
  const aList = flattenLessons(annahwModules, 'annahw');
  const sList = flattenLessons(sarfAdvModules, 'sarf-advanced');
  const backbone = [];
  let ai = 0;
  let si = 0;
  while (ai < aList.length || si < sList.length) {
    const takeA = si >= sList.length
      || (ai < aList.length && ai / aList.length <= si / sList.length);
    if (takeA) {
      backbone.push(aList[ai]);
      ai += 1;
    } else {
      backbone.push(sList[si]);
      si += 1;
    }
  }
  return backbone;
}

function findLesson(courseId, moduleId, lessonId) {
  const modules = courseId === 'sarf-advanced' ? ADV_SARF_MODULES : ANNAHW_MODULES;
  const mod = modules.find((m) => m.id === moduleId);
  return mod && mod.lessons.find((l) => l.id === lessonId);
}

// Each group's own module slice of each course (annahw module index range,
// sarf-advanced module index range -- end-exclusive). Found the same way as
// the introductory path's GROUP_MODULE_RANGES: brute-force search over every
// valid pair of module-cut points so that (a) BOTH courses end a module at
// every group boundary simultaneously and (b) the 5 resulting group sizes
// stay as close to equal as possible (153 lessons total / 5 groups, target
// 30.6 lessons/group). Best found: sizes [31, 31, 31, 30, 30], max deviation
// only 0.6 lessons from target -- tighter than the introductory path's
// 2.2-lesson deviation, because this pair's per-module lesson counts happen
// to divide more evenly.
export const GROUP_MODULE_RANGES = [
  { annahw: [0, 4], sarfAdvanced: [0, 3] }, // Group 1: 01..04 + as-01..as-03 = 20+11 = 31
  { annahw: [4, 7], sarfAdvanced: [3, 7] }, // Group 2: 05..07 + as-04..as-07 = 12+19 = 31
  { annahw: [7, 11], sarfAdvanced: [7, 8] }, // Group 3: 08..11 + as-08 = 28+3 = 31
  { annahw: [11, 13], sarfAdvanced: [8, 11] }, // Group 4: 12..13 + as-09..as-11 = 14+16 = 30
  { annahw: [13, 17], sarfAdvanced: [11, 12] }, // Group 5: 14..17 + as-12 = 27+3 = 30
];

function buildGroupBackbone(range) {
  return buildBackbone(ANNAHW_MODULES.slice(range.annahw[0], range.annahw[1]), ADV_SARF_MODULES.slice(range.sarfAdvanced[0], range.sarfAdvanced[1]));
}

// Same fixed template as the introductory path's buildSectionNodes, minus
// the vocabCheckpoint node (this course pair has no vocab bank content at
// all -- see this file's own top comment) -- lessons 3 and 4 still appear as
// plain lesson nodes in that slot, just with no checkpoint following them.
// Every node is stamped pathId: 'advanced' so content/paths.js's aggregator
// can route pool-building calls to THIS file's pathPoolForNode instead of
// the introductory path's.
function buildSectionNodes(sectionNum, idPrefix, lessons, hasTarkeeb) {
  if (lessons.length < 7) throw new Error(`buildSectionNodes expects at least 7 lessons, got ${lessons.length}`);
  const id = (n) => `${idPrefix}-n${String(n).padStart(2, '0')}`;
  let n = 1;
  const nodes = [];
  const header = id(n++);
  nodes.push({ type: 'sectionHeader', id: header, title: `Section ${sectionNum}`, pathId: 'advanced' });

  // Node numbering: L0 L1 L2 [MCQ] L3 L4 L5 [REVISION] [تركيب]? L6.. [TEST]
  const firstLessonNodeId = id(2);
  nodes.push({ type: 'lesson', id: id(n++), pathId: 'advanced', ...lessons[0] });
  nodes.push({ type: 'lesson', id: id(n++), pathId: 'advanced', ...lessons[1] });
  nodes.push({ type: 'lesson', id: id(n++), pathId: 'advanced', ...lessons[2] });
  const afterL2 = id(n - 1);
  nodes.push({ type: 'mcqCheckpoint', id: id(n++), pathId: 'advanced', length: 20, windowStart: firstLessonNodeId, windowEnd: afterL2 });
  nodes.push({ type: 'lesson', id: id(n++), pathId: 'advanced', ...lessons[3] });
  nodes.push({ type: 'lesson', id: id(n++), pathId: 'advanced', ...lessons[4] });
  nodes.push({ type: 'lesson', id: id(n++), pathId: 'advanced', ...lessons[5] });
  const afterL5 = id(n - 1);
  nodes.push({ type: 'revision', id: id(n++), pathId: 'advanced', length: 20, windowEnd: afterL5 });
  if (hasTarkeeb) {
    nodes.push({ type: 'tarkeebCheckpoint', id: id(n++), pathId: 'advanced', windowStart: firstLessonNodeId, windowEnd: afterL5 });
  }
  for (let i = 6; i < lessons.length; i += 1) {
    nodes.push({ type: 'lesson', id: id(n++), pathId: 'advanced', ...lessons[i] });
  }
  const afterTail = id(n - 1);
  nodes.push({
    type: 'sectionTest', id: id(n++), pathId: 'advanced', badgeId: `path-adv-section-${sectionNum}`, label: 'اِخْتِبَارُ الْقِسْمِ',
    windowStart: firstLessonNodeId, windowEnd: afterTail, mcqLength: 15, tarkeebLength: 10, vocabLength: 0, passRatio: 0.95,
  });
  return nodes;
}

function lastLessonNodeId(nodes) {
  for (let i = nodes.length - 1; i >= 0; i -= 1) {
    if (nodes[i].type === 'lesson') return nodes[i].id;
  }
  return null;
}

// A group's lesson count doesn't always divide evenly by 7 -- pick
// k = floor(lessons / 7) sections (the most ~7-lesson sections that fit
// without ever going under buildSectionNodes's 7-lesson minimum), then
// spread the remainder r = lessons - 7k across the LAST r sections (+1
// lesson each) rather than dumping it all into one trailing section. Same
// rule content/path.js's own sectionSizesFor uses for the introductory
// path -- kept identical here rather than imported since it's a 4-line pure
// function. For this pair's group sizes (31,31,31,30,30) this yields
// [7,8,8,8] for Groups 1-3 and [7,7,8,8] for Groups 4-5 -- 4 sections per
// group throughout (5 even sections is impossible: 5*7=35 exceeds every
// group's own lesson count, see PATH_GENERATION_GUIDE.md §1's note that
// this pair's total divides more naturally into fewer, larger sections than
// the introductory path's 8/group).
function sectionSizesFor(totalLessons) {
  const k = Math.floor(totalLessons / 7);
  const r = totalLessons - k * 7;
  return Array.from({ length: k }, (_, i) => (i >= k - r ? 8 : 7));
}

// One group's own module-slice backbone (GROUP_MODULE_RANGES[i]), split
// into buildSectionNodes calls per sectionSizesFor, plus its capstone
// groupTest -- double a section test's composition (30 mcq + 20 تركيب, no
// vocab), same 95% pass ratio, scoped to this group's own lessons only.
// hasTarkeeb is unconditionally true: تركيب exists in annahw from its very
// first lesson (module 01, lesson l1), so every section in every group has
// تركيب content in-window from the start -- verified directly via the
// pool-size audit run before this was wired up (every section's تركيب pool
// came back well above the 5-10 a تركيب checkpoint ever needs). sectionNum
// is GLOBAL across groups (Group 1 = Sections 1-4, Group 2 = 5-8, ...),
// never resetting per group -- same idiom as the introductory path's own
// buildGroup, so node-id/badge-id prefixes stay unique path-wide.
function buildGroup(groupNum, range, sectionNumStart) {
  const backbone = buildGroupBackbone(range);
  const sizes = sectionSizesFor(backbone.length);
  let offset = 0;
  const sections = sizes.map((size, i) => {
    const sectionNum = sectionNumStart + i;
    const lessons = backbone.slice(offset, offset + size);
    offset += size;
    return buildSectionNodes(sectionNum, `adv-s${sectionNum}`, lessons, true);
  });
  const groupTest = {
    type: 'groupTest',
    id: `adv-grp${groupNum}-test`,
    pathId: 'advanced',
    badgeId: `path-adv-group-${groupNum}`,
    label: 'اِخْتِبَارُ الْمَجْمُوْعَةِ',
    windowStart: sections[0][1].id,
    windowEnd: lastLessonNodeId(sections[sections.length - 1]),
    mcqLength: 30,
    tarkeebLength: 20,
    vocabLength: 0,
    passRatio: 0.95,
  };
  return { id: `advanced-group-${groupNum}`, title: GROUP_TITLES[groupNum - 1], sections, groupTest };
}

// Ordinal group names, feminine to agree with مجموعة -- same convention as
// the introductory path's own GROUP_TITLES (content/path.js).
const GROUP_TITLES = ['المجموعة الأولى', 'المجموعة الثانية', 'المجموعة الثالثة', 'المجموعة الرابعة', 'المجموعة الخامسة'];

// All 5 groups, built from GROUP_MODULE_RANGES -- sectionNumStart continues
// the GLOBAL section count across groups (Group 1 = Sections 1-4, Group 2 =
// 5-8, Group 3 = 9-12, Group 4 = 13-16, Group 5 = 17-20) rather than
// resetting to 1 each group, same as the introductory path.
let nextSectionNum = 1;
export const PATH_GROUPS = GROUP_MODULE_RANGES.map((range, i) => {
  const group = buildGroup(i + 1, range, nextSectionNum);
  nextSectionNum += group.sections.length;
  return group;
});

export function findPathGroup(groupId) {
  return PATH_GROUPS.find((g) => g.id === groupId);
}

export function groupSkeleton(group) {
  if (!group || !group.sections.length) return [];
  return group.sections.flat().concat(group.groupTest ? [group.groupTest] : []);
}

const ALL_NODES = PATH_GROUPS.flatMap((g) => groupSkeleton(g));

export function findPathNode(nodeId) {
  return ALL_NODES.find((n) => n.id === nodeId);
}

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
export const tarkeebPoolWindow = (windowEndId, windowStartId) => bankPoolWindow(windowEndId, 'tarkeeb', windowStartId);

// Same shape as the introductory path's pathPoolForNode, minus the
// vocabCheckpoint branch and the vocab portion of sectionTest/groupTest --
// this course pair has no vocab content, so there's nothing to pool.
export function pathPoolForNode(node) {
  if (node.type === 'mcqCheckpoint') {
    return {
      quizPool: lessonContentQuizPool(node.windowEnd, node.windowStart),
      bookPool: bookExerciseMcqPool(node.windowEnd, node.windowStart),
    };
  }
  if (node.type === 'tarkeebCheckpoint') return { tarkeebPool: tarkeebPoolWindow(node.windowEnd, node.windowStart) };
  if (node.type === 'revision') {
    return {
      quizPool: lessonContentQuizPool(node.windowEnd),
      bookPool: bookExerciseMcqPool(node.windowEnd),
      tarkeebPool: tarkeebPoolWindow(node.windowEnd),
    };
  }
  if (node.type === 'sectionTest' || node.type === 'groupTest') {
    return {
      quizPool: lessonContentQuizPool(node.windowEnd, node.windowStart),
      bookPool: bookExerciseMcqPool(node.windowEnd, node.windowStart),
      tarkeebPool: tarkeebPoolWindow(node.windowEnd, node.windowStart),
    };
  }
  return {};
}

export function pathFullPool(node) {
  const p = pathPoolForNode(node);
  return [...(p.quizPool || []), ...(p.bookPool || []), ...(p.tarkeebPool || [])];
}

// See content/path.js's own nodesBefore/pathSkipAheadPoolForNode for the
// full rationale -- this course pair mirrors those exactly, just without a
// vocab pool (no vocab content in the advanced courses).
export function nodesBefore(nodeId) {
  const idx = ALL_NODES.findIndex((n) => n.id === nodeId);
  return idx === -1 ? [] : ALL_NODES.slice(0, idx);
}

export function pathSkipAheadPoolForNode(node) {
  if (node.type !== 'sectionTest' && node.type !== 'groupTest') return pathPoolForNode(node);
  return {
    quizPool: lessonContentQuizPool(node.windowEnd),
    bookPool: bookExerciseMcqPool(node.windowEnd),
    tarkeebPool: tarkeebPoolWindow(node.windowEnd),
  };
}

export function sectionTestCounts(node, mastery = false, skipAhead = false) {
  const mult = mastery ? 2 : 1;
  const { quizPool = [], bookPool = [], tarkeebPool = [], vocabPool = [] } = skipAhead ? pathSkipAheadPoolForNode(node) : pathPoolForNode(node);
  return {
    mcq: Math.min(node.mcqLength * mult, quizPool.length + bookPool.length),
    tarkeeb: Math.min(node.tarkeebLength * mult, tarkeebPool.length),
    vocab: Math.min(node.vocabLength * mult, vocabPool.length),
  };
}

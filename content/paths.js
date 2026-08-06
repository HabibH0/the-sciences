// Aggregates every "My Path" track the app offers -- currently the
// introductory track (content/path.js: fstu + sarf) and the advanced track
// (content/path-advanced.js: annahw + sarf-advanced). Each track's own node
// ids/badge ids/group ids live in a disjoint namespace (plain 's1-n01'/
// 'group-1'/'grp1-test' for the introductory track, 'adv-' prefixed for the
// advanced one -- see each file's own id-prefix choice), so
// state.pathNodeStatus/pathReps/vocabExposure/pathCheckpointMastery -- all
// flat dicts keyed by node id, shared across one learner profile -- can
// never cross-write between tracks.
//
// js/state.js, js/main.js and js/render.js import their Path helpers from
// HERE instead of reaching into either track file directly, so they stay
// track-agnostic: a node says which track it belongs to via its own
// `pathId` field (defaulting to the introductory track when absent, since
// that track predates this field and its nodes were never stamped with
// one), never guessed from id shape.
import { COURSES, isCourseComplete, courseUnlockTestSubPools, flattenSubPools } from './index.js';
import * as introPath from './path.js';
import * as advancedPath from './path-advanced.js';

export const PATH_TRACKS = [
  {
    id: 'intro',
    title: 'Introductory Path',
    kicker: 'النحو والصرف',
    subtitle: 'Introductory Nahw and Introductory Sarf together — one guided route through both.',
    groups: introPath.PATH_GROUPS,
  },
  {
    id: 'advanced',
    title: 'Advanced Path',
    kicker: 'النحو والصرف المتقدم',
    subtitle: 'Advanced Nahw and Advanced Sarf together — the same guided route, for the advanced courses.',
    groups: advancedPath.PATH_GROUPS,
    // Gated: the whole track stays locked until BOTH introductory courses
    // are fully complete (it bundles Advanced Nahw + Advanced Sarf, the
    // same pairing COURSES' own requiresCourseId uses per-course), or early
    // via its own skip-ahead unlock test -- see isTrackUnlocked below.
    requiresCourseIds: ['fstu', 'sarf'],
    lockedMessage: 'Locked until the Introductory Path (both Nahw and Sarf) is complete.',
  },
];

// A track with no requiresCourseIds (the introductory track) is always
// unlocked. unlockedTracks is state.unlockedTracks, trackId -> true, set by
// finalizeUnlockTest in js/main.js once trackUnlockTestPool's own unlock
// test is passed -- same override idiom as content/index.js's
// isCourseUnlocked.
export function isTrackUnlocked(track, completed, unlockedTracks) {
  if (!track.requiresCourseIds) return true;
  if (unlockedTracks && unlockedTracks[track.id]) return true;
  return track.requiresCourseIds.every((id) => {
    const course = COURSES.find((c) => c.id === id);
    return course && isCourseComplete(course, completed);
  });
}

function trackModuleFor(node) {
  return node.pathId === 'advanced' ? advancedPath : introPath;
}

export function findPathGroup(groupId) {
  return introPath.findPathGroup(groupId) || advancedPath.findPathGroup(groupId);
}

export function findPathNode(nodeId) {
  return introPath.findPathNode(nodeId) || advancedPath.findPathNode(nodeId);
}

// groupSkeleton's own logic never reads course specifics (just a group's
// sections/groupTest shape), so either track's implementation works for
// both -- reused directly rather than duplicated.
export const groupSkeleton = introPath.groupSkeleton;

export function pathFullPool(node) {
  return trackModuleFor(node).pathFullPool(node);
}

export function pathPoolForNode(node) {
  return trackModuleFor(node).pathPoolForNode(node);
}

export function sectionTestCounts(node, mastery = false) {
  return trackModuleFor(node).sectionTestCounts(node, mastery);
}

const EMPTY_SUB_POOLS = { quizPool: [], bookPool: [], tarkeebPool: [] };

// The Advanced Path's own skip-ahead unlock test: req: "the test for
// jumping to the advanced path should have a test of both" -- combines the
// same later-half sub-pools each advanced course's own jump test draws from
// (see courseUnlockTestSubPools), so passing it genuinely covers both halves
// of the pairing this track bundles (Advanced Nahw + Advanced Sarf), and
// still keeps lesson-content/book-exercise/تركيب apart so
// buildUnlockTestQueue can guarantee its usual mix. Only the 'advanced'
// track is gated at all (see requiresCourseIds above); any other track has
// nothing to test into.
export function trackUnlockTestSubPools(trackId) {
  if (trackId !== 'advanced') return EMPTY_SUB_POOLS;
  const a = courseUnlockTestSubPools('annahw');
  const b = courseUnlockTestSubPools('sarf-advanced');
  return {
    quizPool: a.quizPool.concat(b.quizPool),
    bookPool: a.bookPool.concat(b.bookPool),
    tarkeebPool: a.tarkeebPool.concat(b.tarkeebPool),
  };
}

// Flat lookup pool -- see courseUnlockTestPool's own comment in
// content/index.js.
export function trackUnlockTestPool(trackId) {
  return flattenSubPools(trackUnlockTestSubPools(trackId));
}

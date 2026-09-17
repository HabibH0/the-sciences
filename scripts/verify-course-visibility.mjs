import assert from 'node:assert/strict';
import { COURSES, VISIBLE_COURSES, isCourseVisible, isCourseUnlocked, setActiveCourse, MODULES, totalLessonsAllCourses, completedLessonsAllCourses } from '../content/index.js';
import { PATH_TRACKS, VISIBLE_PATH_TRACKS, findVisiblePathGroup, findVisiblePathNode, isTrackUnlocked } from '../content/paths.js';
import { visibleNavigation, navFromHash } from '../js/nav.js';
import { createInitialState } from '../js/state.js';
import { snapshot } from '../js/persistence.js';
import { render } from '../js/render.js';
import { VISIBLE_COURSE_TIERS, BADGE_DEFS, awardBadge } from '../js/gamification.js';

const storage = new Map();
globalThis.localStorage = { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)), removeItem: key => storage.delete(key) };
assert.deepEqual(VISIBLE_COURSES.map(c => c.id), ['mantiq', 'intro-nahw', 'adv-nahw', 'adv-sarf']);
assert.equal(COURSES.length, 5, 'Original courses remain registered for saves and source validation');
assert.equal(totalLessonsAllCourses(), 432, 'Visible curriculum totals exclude hidden courses');
assert.equal(completedLessonsAllCourses({ 'f-nouns': { l1: true }, 's-u1': { l1: true } }), 1, 'Only the visible intro course counts');
assert.deepEqual(VISIBLE_COURSE_TIERS.map(t => t.courseId), VISIBLE_COURSES.map(c => c.id));
assert.deepEqual(VISIBLE_PATH_TRACKS.map(t => t.id), ['advanced']);
assert(!isTrackUnlocked(VISIBLE_PATH_TRACKS[0], {}, {}, false), 'Advanced Path waits on the visible Introductory Nahw');
assert(isTrackUnlocked(VISIBLE_PATH_TRACKS[0], {}, { advanced: true }, false), 'Advanced Path ignores the hidden Introductory Sarf once unlocked');
for (const course of COURSES) {
  // adv-nahw is gated behind the (now visible) intro-nahw; every other visible course opens from a fresh save.
  assert.equal(isCourseUnlocked(course, {}, {}, false), isCourseVisible(course.id) && course.id !== 'adv-nahw');
  assert.equal(isCourseUnlocked(course, {}, {}, true), isCourseVisible(course.id), 'Unlock-all does not expose hidden courses');
}
for (const id of ['intro-sarf', 'sarf']) assert.equal(navFromHash(`#/course/${id}`).view, 'catalog');
assert.notEqual(navFromHash('#/course/intro-nahw').view, 'catalog', 'Introductory Nahw routes stay reachable');
for (const suffix of ['', '/l1', '/l1/quiz']) assert.equal(navFromHash(`#/module/s-u1${suffix}`).view, 'catalog');
for (const group of PATH_TRACKS[0].groups) {
  assert.equal(findVisiblePathGroup(group.id), null);
  assert.equal(navFromHash(`#/path/${group.id}`).view, 'pathGroups');
}
assert.equal(findVisiblePathNode('s1-n01'), null);
const preserved = { completed: { 's-u1': { l1: '2026-09-01' } }, studySessions: { 'intro-sarf/s-u1/l1': { stepIndex: 2 } }, mizanCourses: { 'intro-sarf': { attempts: [{ id: 'existing-attempt' }] } }, badges: ['course-intro-sarf'], reviewCards: { oldIntroReview: { due: '2026-09-10' } } };
const source = { ...preserved, courseId: 'intro-sarf', view: 'lesson', moduleId: 's-u1', lessonId: 'l1' };
const clean = visibleNavigation(source);
assert.equal(clean.view, 'catalog');
assert(isCourseVisible(clean.courseId));
for (const key of Object.keys(preserved)) assert.strictEqual(clean[key], source[key], `${key} survives hiding`);
assert.equal(source.courseId, 'intro-sarf', 'Visibility does not rewrite the source save');
assert.equal(visibleNavigation({ courseId: 'adv-nahw', view: 'lesson', moduleId: 's-u1' }).view, 'catalog');

const state = await createInitialState();
Object.assign(state, preserved, { launchScreen: false, forceUnlockAll: false, badgeModal: null, badgeQueue: [], mizanCourses: {}, studySessions: {} });
const savedBefore = snapshot(state);
let screens = 0;
for (const course of VISIBLE_COURSES) {
  await setActiveCourse(course.id);
  state.courseId = course.id;
  for (const view of ['catalog', 'dashboard', 'schedule', 'account', 'achievements', 'learningAids', 'courseProgression', 'pathGroups']) {
    Object.assign(state, { view, moduleId: null, lessonId: null, pathGroupId: null, pathHome: view === 'pathGroups', courseMenuOpen: view === 'schedule' });
    const html = render(state, MODULES);
    const hidden = html.match(/.{0,60}(?:Introductory (?:Sarf|Path)|data-course-id="intro-sarf"|#\/course\/intro-sarf).{0,90}/);
    assert(!hidden, `${course.id}/${view}: hidden course is absent: ${hidden?.[0]}`);
    screens++;
  }
}
assert.deepEqual(snapshot(state).completed, savedBefore.completed);
assert.deepEqual(snapshot(state).reviewCards, savedBefore.reviewCards);
assert.deepEqual(snapshot(state).badges, savedBefore.badges);
assert(BADGE_DEFS['course-intro-sarf'], 'Saved badge identity is retained');
awardBadge(state, 'course-intro-sarf');
assert.equal(state.badgeModal, null, 'Hidden course badges do not open a popup');
assert(state.badges.includes('course-intro-sarf'));
console.log(`Course visibility passed: ${screens} rendered screens, hidden/legacy routes, unlocks, Path access and retained progress.`);

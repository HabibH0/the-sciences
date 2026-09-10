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
assert.deepEqual(VISIBLE_COURSES.map(c => c.id), ['mantiq', 'adv-nahw', 'adv-sarf']);
assert.equal(COURSES.length, 5, 'Original courses remain registered for saves and source validation');
assert.equal(totalLessonsAllCourses(), 224, 'Visible curriculum totals exclude hidden courses');
assert.equal(completedLessonsAllCourses({ 'f-nouns': { l1: true }, 's-u1': { l1: true } }), 0);
assert.deepEqual(VISIBLE_COURSE_TIERS.map(t => t.courseId), VISIBLE_COURSES.map(c => c.id));
assert.deepEqual(VISIBLE_PATH_TRACKS.map(t => t.id), ['advanced']);
assert(isTrackUnlocked(VISIBLE_PATH_TRACKS[0], {}, {}, false), 'Advanced Path does not require hidden courses');
for (const course of COURSES) {
  assert.equal(isCourseUnlocked(course, {}, {}, false), isCourseVisible(course.id));
  assert.equal(isCourseUnlocked(course, {}, {}, true), isCourseVisible(course.id), 'Unlock-all does not expose hidden courses');
}
for (const id of ['intro-nahw', 'intro-sarf', 'fstu', 'sarf']) assert.equal(navFromHash(`#/course/${id}`).view, 'catalog');
for (const id of ['f-nouns', 's-u1']) for (const suffix of ['', '/l1', '/l1/quiz']) assert.equal(navFromHash(`#/module/${id}${suffix}`).view, 'catalog');
for (const group of PATH_TRACKS[0].groups) {
  assert.equal(findVisiblePathGroup(group.id), null);
  assert.equal(navFromHash(`#/path/${group.id}`).view, 'pathGroups');
}
assert.equal(findVisiblePathNode('s1-n01'), null);
const preserved = { completed: { 'f-nouns': { l1: '2026-09-01' } }, studySessions: { 'intro-nahw/f-nouns/l1': { stepIndex: 2 } }, mizanCourses: { 'intro-nahw': { attempts: [{ id: 'existing-attempt' }] } }, badges: ['course-intro-nahw'], reviewCards: { oldIntroReview: { due: '2026-09-10' } } };
const source = { ...preserved, courseId: 'intro-nahw', view: 'lesson', moduleId: 'f-nouns', lessonId: 'l1' };
const clean = visibleNavigation(source);
assert.equal(clean.view, 'catalog');
assert(isCourseVisible(clean.courseId));
for (const key of Object.keys(preserved)) assert.strictEqual(clean[key], source[key], `${key} survives hiding`);
assert.equal(source.courseId, 'intro-nahw', 'Visibility does not rewrite the source save');
assert.equal(visibleNavigation({ courseId: 'adv-nahw', view: 'lesson', moduleId: 'f-nouns' }).view, 'catalog');

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
    const hidden = html.match(/.{0,60}(?:Introductory (?:Nahw|Sarf|Path)|data-course-id="intro-(?:nahw|sarf)"|#\/course\/intro-).{0,90}/);
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

// Pure XP/level/badge logic -- no DOM, no persistence, same shape as
// checker.js. Callers (main.js's action handlers) apply the state mutation
// and decide what happens next (rerender, toast timers, etc).
import {
  COURSES, totalModulesAllCourses, totalLessonsAllCourses,
  completedModulesAllCourses, completedLessonsAllCourses,
  isCourseFullyComplete, allCoursesComplete,
} from '../content/index.js';

// Each level needs progressively more XP than the last. The requirement is
// linear-plus-quadratic in the level: the linear term keeps early levels
// coming at a steady, motivating clip, while the quadratic term is what
// makes late levels a real grind rather than a formality -- level 100 costs
// ~65x what level 1 does, vs. ~7x under a purely linear curve. Calibrated
// against the course's own content (468 lessons across all four courses,
// ~19-26k XP available from quizzes alone at a normal pass rate) so clearing
// the whole curriculum at an ordinary pace lands around level 50-60, roughly
// the curve's midpoint -- not the finish line. Reaching level 100 (130k+ XP)
// takes several times that much again, almost entirely from practice-mode
// grinding and perfect retakes beyond a single playthrough.
export function xpForNextLevel(level) {
  const x = level - 1;
  return 50 + 4 * x + Math.floor((x * x) / 3);
}

// Walks the level curve once to get level, progress-into-level, and the
// current level's requirement together -- the three numbers the UI wants
// are awkward to keep in sync if derived separately.
export function levelInfo(xp) {
  let level = 1;
  let remaining = xp;
  let need = xpForNextLevel(level);
  while (remaining >= need) {
    remaining -= need;
    level += 1;
    need = xpForNextLevel(level);
  }
  return { level, xpIntoLevel: remaining, xpNeeded: need, xpToNext: need - remaining };
}

// +10 bonus on a perfect score, on top of the Sharp Tongue badge -- gives
// aiming for 100% (not just a pass) a payoff every time, not just once.
export function xpForQuiz(correct, total) {
  const base = 20 + correct * 5;
  return correct === total ? base + 10 : base;
}

// A small bonus for a sustained Practice Mode combo (+1 every 5 in a row)
// -- gives the combo counter already shown in the UI an actual payoff
// instead of being a number that just goes up for its own sake.
export function xpForPracticeCorrect(combo) {
  return 2 + Math.floor((combo || 0) / 5);
}

// --- Quiz-session cosmetics ------------------------------------------------
// Shown live while taking the lesson quiz (per-question XP/streak strip,
// the Gold/Silver/Bronze result tier) -- purely a display layer computed
// from the in-progress attempt. The XP actually persisted to the player's
// account still comes from xpForQuiz() alone, awarded once at lesson-finish;
// nothing here is ever added to state.xp.
export function quizCosmeticXp(correct) {
  return correct ? 10 : 2;
}

export function quizTier(fraction) {
  if (fraction === 1) return 'Gold';
  if (fraction >= 0.75) return 'Silver';
  if (fraction >= 0.5) return 'Bronze';
  return null;
}

// Longest run of consecutive `true` values -- used for the result screen's
// "Best streak" tag.
export function longestStreak(bools) {
  let best = 0;
  let run = 0;
  bools.forEach((ok) => {
    run = ok ? run + 1 : 0;
    if (run > best) best = run;
  });
  return best;
}

// --- Badge tier ladders -----------------------------------------------------
// Each category is a small ladder of thresholds rather than one one-shot
// badge -- with 63 modules/427 lessons across four courses, a single "you
// did the thing once" badge is trivial to earn in the first sitting and
// then goes silent for the rest of the course. The lowest tier of every
// ladder reuses the badge id the app already awards (grammarian/on-fire/
// sharp-tongue/devoted/scholar), so existing save files' already-earned
// badges stay valid -- they just become "tier 1" of a bigger ladder instead
// of needing a migration step.

export const LEVEL_TIERS = [
  { id: 'grammarian', level: 5, name: 'Grammarian', desc: 'Reach level 5.' },
  { id: 'level-10', level: 10, name: 'Adept', desc: 'Reach level 10.' },
  { id: 'level-25', level: 25, name: 'Erudite', desc: 'Reach level 25.' },
  { id: 'level-50', level: 50, name: 'Master Grammarian', desc: 'Reach level 50.' },
  { id: 'level-75', level: 75, name: 'Sage', desc: 'Reach level 75.' },
  { id: 'level-90', level: 90, name: 'Paragon', desc: 'Reach level 90.' },
  { id: 'level-100', level: 100, name: 'Grand Grammarian', desc: 'Reach level 100.' },
];

export const STREAK_TIERS = [
  { id: 'streak-3', days: 3, name: 'Warming Up', desc: 'Reach a three-day streak.' },
  { id: 'on-fire', days: 7, name: 'On Fire', desc: 'Reach a seven-day streak.' },
  { id: 'streak-30', days: 30, name: 'Unwavering', desc: 'Reach a thirty-day streak.' },
  { id: 'streak-100', days: 100, name: 'Century', desc: 'Reach a hundred-day streak.' },
];

export const PERFECT_QUIZ_TIERS = [
  { id: 'sharp-tongue', count: 1, name: 'Sharp Tongue', desc: 'Score perfectly on a quiz.' },
  { id: 'perfect-10', count: 10, name: 'Precise', desc: 'Score perfectly on ten quizzes.' },
  { id: 'perfect-50', count: 50, name: 'Flawless', desc: 'Score perfectly on fifty quizzes.' },
  { id: 'perfect-150', count: 150, name: 'Impeccable', desc: 'Score perfectly on a hundred and fifty quizzes.' },
];

export const PRACTICE_TIERS = [
  { id: 'devoted', count: 10, name: 'Devoted', desc: 'Answer ten practice drills correctly.' },
  { id: 'practice-100', count: 100, name: 'Diligent', desc: 'Answer a hundred practice drills correctly.' },
  { id: 'practice-500', count: 500, name: 'Relentless', desc: 'Answer five hundred practice drills correctly.' },
  { id: 'practice-2000', count: 2000, name: 'Tireless', desc: 'Answer two thousand practice drills correctly.' },
];

// 'modules-all' isn't a fixed number here -- it's checked against
// totalModulesAllCourses() at award time (see checkModuleCompletionBadges),
// so it stays correct if content is ever added rather than going stale.
export const MODULE_TIERS = [
  { id: 'scholar', count: 1, name: 'Scholar', desc: 'Complete every lesson in a module.' },
  { id: 'modules-5', count: 5, name: 'Well-Read', desc: 'Complete five modules.' },
  { id: 'modules-15', count: 15, name: 'Bookish', desc: 'Complete fifteen modules.' },
  { id: 'modules-30', count: 30, name: 'Half the Shelf', desc: 'Complete thirty modules.' },
];
export const MODULES_ALL_BADGE = { id: 'modules-all', name: 'Every Chapter', desc: 'Complete every module across every course.' };

export const LESSON_TIERS = [
  { id: 'lessons-50', count: 50, name: 'Fifty Lessons', desc: 'Clear fifty lessons.' },
  { id: 'lessons-150', count: 150, name: 'A Hundred and Fifty', desc: 'Clear a hundred and fifty lessons.' },
  { id: 'lessons-300', count: 300, name: 'Three Hundred', desc: 'Clear three hundred lessons.' },
];
export const LESSONS_ALL_BADGE = { id: 'lessons-all', name: 'The Whole Course', desc: 'Clear every lesson across every course.' };

// Names pulled straight from COURSES rather than hardcoded, so a course
// rename or addition doesn't need a matching edit here.
export const COURSE_TIERS = COURSES.map((c) => ({
  id: `course-${c.id}`,
  courseId: c.id,
  name: `${c.name}, Complete`,
  desc: `Finish every module in ${c.name}.`,
}));
export const COURSE_ALL_BADGE = { id: 'course-all', name: 'The Full Curriculum', desc: 'Finish every course The Sciences offers.' };

function tierDefs(tiers) {
  return Object.fromEntries(tiers.map((t) => [t.id, { name: t.name, desc: t.desc }]));
}

// My Path no longer awards its own badges (content/path.js and
// content/path-advanced.js don't stamp a badgeId on section/group tests any
// more) -- passing a checkpoint there is its own reward via progression, and
// the path already has a visible test/pass state without a badge on top.
// These defs stay here, merged into BADGE_DEFS below but never listed in
// ACHIEVEMENT_CATEGORIES or rendered as an Achievements category, purely so
// any save file that already earned one (state.badges predates this change)
// still resolves to a real name/desc everywhere BADGE_DEFS is looked up --
// e.g. the home screen's recent-badges teaser (js/render.js) -- instead of
// crashing on `BADGE_DEFS[id].name` for an id nothing awards any more.
const LEGACY_PATH_BADGE_DEFS = {
  'path-section-1': { name: 'First Words', desc: 'Complete Section 1 of My Path.' },
  'path-section-2': { name: 'Section 2', desc: 'Pass Section 2’s test on My Path.' },
  'path-section-3': { name: 'Section 3', desc: 'Pass Section 3’s test on My Path.' },
  'path-section-4': { name: 'Section 4', desc: 'Pass Section 4’s test on My Path.' },
  'path-section-5': { name: 'Section 5', desc: 'Pass Section 5’s test on My Path.' },
  'path-section-6': { name: 'Section 6', desc: 'Pass Section 6’s test on My Path.' },
  'path-section-7': { name: 'Section 7', desc: 'Pass Section 7’s test on My Path.' },
  'path-section-8': { name: 'Section 8', desc: 'Pass Section 8’s test on My Path.' },
  'path-section-9': { name: 'Section 9', desc: 'Pass Section 9’s test on My Path.' },
  'path-section-10': { name: 'Section 10', desc: 'Pass Section 10’s test on My Path.' },
  'path-section-11': { name: 'Section 11', desc: 'Pass Section 11’s test on My Path.' },
  'path-section-12': { name: 'Section 12', desc: 'Pass Section 12’s test on My Path.' },
  'path-section-13': { name: 'Section 13', desc: 'Pass Section 13’s test on My Path.' },
  'path-section-14': { name: 'Section 14', desc: 'Pass Section 14’s test on My Path.' },
  'path-section-15': { name: 'Section 15', desc: 'Pass Section 15’s test on My Path.' },
  'path-section-16': { name: 'Section 16', desc: 'Pass Section 16’s test on My Path.' },
  'path-section-17': { name: 'Section 17', desc: 'Pass Section 17’s test on My Path.' },
  'path-section-18': { name: 'Section 18', desc: 'Pass Section 18’s test on My Path.' },
  'path-section-19': { name: 'Section 19', desc: 'Pass Section 19’s test on My Path.' },
  'path-section-20': { name: 'Section 20', desc: 'Pass Section 20’s test on My Path.' },
  'path-section-21': { name: 'Section 21', desc: 'Pass Section 21’s test on My Path.' },
  'path-section-22': { name: 'Section 22', desc: 'Pass Section 22’s test on My Path.' },
  'path-section-23': { name: 'Section 23', desc: 'Pass Section 23’s test on My Path.' },
  'path-section-24': { name: 'Section 24', desc: 'Pass Section 24’s test on My Path.' },
  'path-section-25': { name: 'Section 25', desc: 'Pass Section 25’s test on My Path.' },
  'path-section-26': { name: 'Section 26', desc: 'Pass Section 26’s test on My Path.' },
  'path-section-27': { name: 'Section 27', desc: 'Pass Section 27’s test on My Path.' },
  'path-section-28': { name: 'Section 28', desc: 'Pass Section 28’s test on My Path.' },
  'path-section-29': { name: 'Section 29', desc: 'Pass Section 29’s test on My Path.' },
  'path-section-30': { name: 'Section 30', desc: 'Pass Section 30’s test on My Path.' },
  'path-section-31': { name: 'Section 31', desc: 'Pass Section 31’s test on My Path.' },
  'path-section-32': { name: 'Section 32', desc: 'Pass Section 32’s test on My Path.' },
  'path-section-33': { name: 'Section 33', desc: 'Pass Section 33’s test on My Path.' },
  'path-section-34': { name: 'Section 34', desc: 'Pass Section 34’s test on My Path.' },
  'path-section-35': { name: 'Section 35', desc: 'Pass Section 35’s test on My Path.' },
  'path-section-36': { name: 'Section 36', desc: 'Pass Section 36’s test on My Path.' },
  'path-section-37': { name: 'Section 37', desc: 'Pass Section 37’s test on My Path.' },
  'path-group-1': { name: 'Group 1', desc: 'Pass Group 1’s capstone exam on My Path.' },
  'path-group-2': { name: 'Group 2', desc: 'Pass Group 2’s capstone exam on My Path.' },
  'path-group-3': { name: 'Group 3', desc: 'Pass Group 3’s capstone exam on My Path.' },
  'path-group-4': { name: 'Group 4', desc: 'Pass Group 4’s capstone exam on My Path.' },
  'path-group-5': { name: 'Group 5', desc: 'Pass Group 5’s capstone exam on My Path.' },
  'path-adv-section-1': { name: 'Advanced: First Words', desc: 'Complete Section 1 of the Advanced Path.' },
  'path-adv-section-2': { name: 'Advanced: Section 2', desc: 'Pass Section 2’s test on the Advanced Path.' },
  'path-adv-section-3': { name: 'Advanced: Section 3', desc: 'Pass Section 3’s test on the Advanced Path.' },
  'path-adv-section-4': { name: 'Advanced: Section 4', desc: 'Pass Section 4’s test on the Advanced Path.' },
  'path-adv-section-5': { name: 'Advanced: Section 5', desc: 'Pass Section 5’s test on the Advanced Path.' },
  'path-adv-section-6': { name: 'Advanced: Section 6', desc: 'Pass Section 6’s test on the Advanced Path.' },
  'path-adv-section-7': { name: 'Advanced: Section 7', desc: 'Pass Section 7’s test on the Advanced Path.' },
  'path-adv-section-8': { name: 'Advanced: Section 8', desc: 'Pass Section 8’s test on the Advanced Path.' },
  'path-adv-section-9': { name: 'Advanced: Section 9', desc: 'Pass Section 9’s test on the Advanced Path.' },
  'path-adv-section-10': { name: 'Advanced: Section 10', desc: 'Pass Section 10’s test on the Advanced Path.' },
  'path-adv-section-11': { name: 'Advanced: Section 11', desc: 'Pass Section 11’s test on the Advanced Path.' },
  'path-adv-section-12': { name: 'Advanced: Section 12', desc: 'Pass Section 12’s test on the Advanced Path.' },
  'path-adv-section-13': { name: 'Advanced: Section 13', desc: 'Pass Section 13’s test on the Advanced Path.' },
  'path-adv-section-14': { name: 'Advanced: Section 14', desc: 'Pass Section 14’s test on the Advanced Path.' },
  'path-adv-section-15': { name: 'Advanced: Section 15', desc: 'Pass Section 15’s test on the Advanced Path.' },
  'path-adv-section-16': { name: 'Advanced: Section 16', desc: 'Pass Section 16’s test on the Advanced Path.' },
  'path-adv-section-17': { name: 'Advanced: Section 17', desc: 'Pass Section 17’s test on the Advanced Path.' },
  'path-adv-section-18': { name: 'Advanced: Section 18', desc: 'Pass Section 18’s test on the Advanced Path.' },
  'path-adv-section-19': { name: 'Advanced: Section 19', desc: 'Pass Section 19’s test on the Advanced Path.' },
  'path-adv-section-20': { name: 'Advanced: Section 20', desc: 'Pass Section 20’s test on the Advanced Path.' },
  'path-adv-group-1': { name: 'Advanced: Group 1', desc: 'Pass Group 1’s capstone exam on the Advanced Path.' },
  'path-adv-group-2': { name: 'Advanced: Group 2', desc: 'Pass Group 2’s capstone exam on the Advanced Path.' },
  'path-adv-group-3': { name: 'Advanced: Group 3', desc: 'Pass Group 3’s capstone exam on the Advanced Path.' },
  'path-adv-group-4': { name: 'Advanced: Group 4', desc: 'Pass Group 4’s capstone exam on the Advanced Path.' },
  'path-adv-group-5': { name: 'Advanced: Group 5', desc: 'Pass Group 5’s capstone exam on the Advanced Path.' },
};

export const BADGE_DEFS = {
  'first-steps': { name: 'First Steps', desc: 'Complete your first lesson.' },
  ...tierDefs(LEVEL_TIERS),
  ...tierDefs(STREAK_TIERS),
  ...tierDefs(PERFECT_QUIZ_TIERS),
  ...tierDefs(PRACTICE_TIERS),
  ...tierDefs(MODULE_TIERS),
  [MODULES_ALL_BADGE.id]: { name: MODULES_ALL_BADGE.name, desc: MODULES_ALL_BADGE.desc },
  ...tierDefs(LESSON_TIERS),
  [LESSONS_ALL_BADGE.id]: { name: LESSONS_ALL_BADGE.name, desc: LESSONS_ALL_BADGE.desc },
  ...tierDefs(COURSE_TIERS),
  [COURSE_ALL_BADGE.id]: { name: COURSE_ALL_BADGE.name, desc: COURSE_ALL_BADGE.desc },
  ...LEGACY_PATH_BADGE_DEFS,
};

// Every currently-awardable badge id, grouped by category, in display
// order -- what the Achievements screen (js/render.js) iterates to lay out
// its grid, including locked tiers not yet in state.badges. Deliberately
// excludes LEGACY_PATH_BADGE_DEFS above -- nothing awards those any more, so
// there's nothing to browse toward.
export const ACHIEVEMENT_CATEGORIES = [
  { id: 'onboarding', title: 'Getting Started', badgeIds: ['first-steps'] },
  { id: 'level', title: 'Level', badgeIds: LEVEL_TIERS.map((t) => t.id) },
  { id: 'streak', title: 'Streak', badgeIds: STREAK_TIERS.map((t) => t.id) },
  { id: 'perfect', title: 'Perfect Quizzes', badgeIds: PERFECT_QUIZ_TIERS.map((t) => t.id) },
  { id: 'practice', title: 'Practice Volume', badgeIds: PRACTICE_TIERS.map((t) => t.id) },
  { id: 'modules', title: 'Modules Completed', badgeIds: [...MODULE_TIERS.map((t) => t.id), MODULES_ALL_BADGE.id] },
  { id: 'lessons', title: 'Lessons Cleared', badgeIds: [...LESSON_TIERS.map((t) => t.id), LESSONS_ALL_BADGE.id] },
  { id: 'courses', title: 'Courses', badgeIds: [...COURSE_TIERS.map((t) => t.id), COURSE_ALL_BADGE.id] },
];

// Bumps XP and queues a toast -- upgraded to announce a level-up when the
// award crosses a level threshold, and checks every level-tier badge
// crossed along the way (a big single award can jump several levels/tiers
// at once, e.g. a perfect-score bonus).
export function awardXp(state, amount) {
  const before = levelInfo(state.xp).level;
  state.xp += amount;
  const after = levelInfo(state.xp).level;
  state.toast = after > before ? `+${amount} XP — Level ${after}!` : `+${amount} XP earned`;
  LEVEL_TIERS.forEach((t) => { if (after >= t.level) awardBadge(state, t.id); });
}

// No-ops if the badge is already owned; otherwise adds it and queues the
// unlock modal (explicit-dismiss -- see closeBadgeModal in main.js).
// Queues rather than overwrites state.badgeModal -- awardBadge can be
// called more than once in the same action (e.g. first-ever lesson also
// completing a short module), and each earned badge deserves its own
// popup, shown one at a time (see closeBadgeModal in js/main.js).
export function awardBadge(state, id) {
  if (state.badges.includes(id)) return false;
  state.badges.push(id);
  const badge = { id, ...BADGE_DEFS[id] };
  if (state.badgeModal) state.badgeQueue.push(badge);
  else state.badgeModal = badge;
  return true;
}

// Streak length is computed once at boot (see persistence.js), so this
// only needs checking once per launch rather than after every action.
export function checkStreakBadges(state) {
  STREAK_TIERS.forEach((t) => { if (state.streak >= t.days) awardBadge(state, t.id); });
}

// Counts distinct lessons ever scored 100% (not attempts) -- a retake of an
// already-perfect quiz can't inflate this, so the tiers stay a real measure
// of breadth rather than something farmable by repeating one lesson. Its own
// function (not folded into checkPerfectQuizBadges) so the Achievements
// screen (js/render.js) can also read the raw count for a progress readout.
export function perfectQuizCount(quizScores) {
  let count = 0;
  Object.values(quizScores || {}).forEach((byLesson) => {
    Object.values(byLesson).forEach((s) => { if (s.total > 0 && s.correct === s.total) count += 1; });
  });
  return count;
}

export function checkPerfectQuizBadges(state) {
  const count = perfectQuizCount(state.quizScores);
  PERFECT_QUIZ_TIERS.forEach((t) => { if (count >= t.count) awardBadge(state, t.id); });
}

// state.practiceCorrectTotal is a lifetime counter incremented in
// recordPracticeAnswer (js/main.js), shared across every practice source
// (module drills, Revision, My Path) -- see that function's own comment.
export function checkPracticeVolumeBadges(state) {
  const count = state.practiceCorrectTotal || 0;
  PRACTICE_TIERS.forEach((t) => { if (count >= t.count) awardBadge(state, t.id); });
}

export function checkModuleCompletionBadges(state) {
  const count = completedModulesAllCourses(state.completed);
  MODULE_TIERS.forEach((t) => { if (count >= t.count) awardBadge(state, t.id); });
  if (count >= totalModulesAllCourses()) awardBadge(state, MODULES_ALL_BADGE.id);
}

export function checkLessonsClearedBadges(state) {
  const count = completedLessonsAllCourses(state.completed);
  LESSON_TIERS.forEach((t) => { if (count >= t.count) awardBadge(state, t.id); });
  if (count >= totalLessonsAllCourses()) awardBadge(state, LESSONS_ALL_BADGE.id);
}

export function checkCourseCompletionBadges(state) {
  COURSE_TIERS.forEach((t) => { if (isCourseFullyComplete(t.courseId, state.completed)) awardBadge(state, t.id); });
  if (allCoursesComplete(state.completed)) awardBadge(state, COURSE_ALL_BADGE.id);
}

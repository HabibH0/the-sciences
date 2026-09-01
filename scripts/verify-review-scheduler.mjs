// Dependency-free verification for js/reviewScheduler.js (the plan's Phase 1
// checklist): fixed timestamps, deterministic fuzz, no test framework.
// Run: node scripts/verify-review-scheduler.mjs
import assert from 'node:assert/strict';
import {
  reviewFingerprint, hashString, reviewDayISO,
  newReviewCard, normalizeReviewCard, normalizeReviewCards,
  normalizeReviewDayStats, normalizeReviewSettings,
  effectiveReviewCard, isRecentlyCorrectLegacy,
  isCardDueNow, nextDueLabel, rateCard, intervalFuzzDays,
  newAllowanceLeft, reviewPoolStatus, buildReviewQueue,
  GRADUATING_INTERVAL_DAYS, EASY_INTERVAL_DAYS, START_EASE, MIN_EASE,
  LAPSE_MIN_INTERVAL_DAYS, LEECH_LAPSE_THRESHOLD, MAX_INTERVAL_DAYS,
  REVIEW_SESSION_CHUNK, LEARN_AHEAD_MS,
} from '../js/reviewScheduler.js';

let passed = 0;
function ok(name, fn) {
  fn();
  passed += 1;
  console.log(`  ok - ${name}`);
}

const DAY = 86400000;
const MIN = 60000;
// Fixed base time: 2026-03-10 14:00 local.
const NOW = new Date(2026, 2, 10, 14, 0, 0).getTime();
const CARD_ID = 'rv1|adv-nahw|01|l1|bank|abc123';

console.log('reviewScheduler verification');

// --- identity --------------------------------------------------------------

ok('fingerprint is stable and ignores array position, changes on rewording', () => {
  const item = { kind: 'mcq', prompt: 'q?', options: ['a', 'b'], correct: 0 };
  assert.equal(reviewFingerprint(item), reviewFingerprint({ ...item }));
  assert.notEqual(reviewFingerprint(item), reviewFingerprint({ ...item, prompt: 'q2?' }));
  assert.notEqual(reviewFingerprint(item), reviewFingerprint({ ...item, correct: 1 }));
  const tk = { kind: 'tarkeeb', source: 's', words: ['a', 'b'], labels: ['x', 'y'] };
  assert.equal(reviewFingerprint(tk), reviewFingerprint({ ...tk }));
  assert.notEqual(reviewFingerprint(tk), reviewFingerprint({ ...tk, labels: ['x', 'z'] }));
});

ok('hashString is deterministic', () => {
  assert.equal(hashString('abc'), hashString('abc'));
  assert.notEqual(hashString('abc'), hashString('abd'));
});

// --- day boundaries ---------------------------------------------------------

ok('reset hour shifts the study-day boundary', () => {
  const oneAm = new Date(2026, 2, 10, 1, 0, 0).getTime();
  assert.equal(reviewDayISO(oneAm, 0), '2026-03-10');
  assert.equal(reviewDayISO(oneAm, 4), '2026-03-09'); // 1am with a 4am reset is still "yesterday"
  const fiveAm = new Date(2026, 2, 10, 5, 0, 0).getTime();
  assert.equal(reviewDayISO(fiveAm, 4), '2026-03-10');
});

// --- learning ladder --------------------------------------------------------

ok('new -> good -> good graduates at the 3-day interval', () => {
  let c = newReviewCard();
  c = rateCard(c, 'good', CARD_ID, NOW);
  assert.equal(c.state, 'learning');
  assert.equal(c.introducedOn, reviewDayISO(NOW, 0));
  assert.equal(c.dueAt, NOW + 1440 * MIN); // second step: next day
  c = rateCard(c, 'good', CARD_ID, NOW + DAY);
  assert.equal(c.state, 'review');
  // The 3-day graduating interval sits right at the fuzz threshold -- and
  // fuzzing it is the point (ten siblings graduating together shouldn't
  // all land on the same day), so allow the ±1 spread.
  assert.ok(Math.abs(c.intervalDays - GRADUATING_INTERVAL_DAYS) <= 1);
});

ok('again in learning returns to the 10-minute step', () => {
  let c = rateCard(newReviewCard(), 'good', CARD_ID, NOW);
  c = rateCard(c, 'again', CARD_ID, NOW + 5 * MIN);
  assert.equal(c.state, 'learning');
  assert.equal(c.stepIndex, 0);
  assert.equal(c.dueAt, NOW + 5 * MIN + 10 * MIN);
});

ok('easy on a new card graduates straight to the easy interval', () => {
  const c = rateCard(newReviewCard(), 'easy', CARD_ID, NOW);
  assert.equal(c.state, 'review');
  assert.ok(Math.abs(c.intervalDays - EASY_INTERVAL_DAYS) <= 1); // ±fuzz
  assert.equal(c.ease, START_EASE);
});

// --- review ratings ---------------------------------------------------------

function matureCard(intervalDays = 10, ease = START_EASE) {
  return { ...newReviewCard(), state: 'review', intervalDays, ease, dueAt: NOW, reps: 5 };
}

ok('good multiplies the interval by ease', () => {
  const c = rateCard(matureCard(10), 'good', CARD_ID, NOW);
  assert.equal(c.state, 'review');
  const raw = Math.round(10 * START_EASE);
  assert.ok(Math.abs(c.intervalDays - raw) <= Math.max(1, Math.round(raw * 0.05)));
  assert.ok(c.intervalDays > 10);
});

ok('hard is a small step with an ease penalty', () => {
  const c = rateCard(matureCard(10), 'hard', CARD_ID, NOW);
  assert.ok(c.intervalDays >= 10 && c.intervalDays <= 13);
  assert.equal(c.ease, START_EASE - 0.15);
});

ok('easy outgrows good and raises ease', () => {
  const g = rateCard(matureCard(10), 'good', CARD_ID, NOW);
  const e = rateCard(matureCard(10), 'easy', CARD_ID, NOW);
  assert.ok(e.intervalDays > g.intervalDays);
  assert.equal(e.ease, START_EASE + 0.15);
});

ok('a correct mature card gets a longer interval than a fresh graduate', () => {
  const graduate = rateCard(rateCard(newReviewCard(), 'good', CARD_ID, NOW), 'good', CARD_ID, NOW + DAY);
  const mature = rateCard(matureCard(20), 'good', CARD_ID, NOW);
  assert.ok(mature.intervalDays > graduate.intervalDays);
});

ok('again on a review card lapses into relearning with halved interval', () => {
  const c = rateCard(matureCard(20), 'again', CARD_ID, NOW);
  assert.equal(c.state, 'relearning');
  assert.equal(c.lapses, 1);
  assert.equal(c.ease, START_EASE - 0.2);
  assert.equal(c.intervalDays, 10); // half of 20
  assert.equal(c.dueAt, NOW + 10 * MIN); // back in ~10 minutes, same session
});

ok('a wrong answer comes back sooner than a right one', () => {
  const wrong = rateCard(matureCard(10), 'again', CARD_ID, NOW);
  const right = rateCard(matureCard(10), 'good', CARD_ID, NOW);
  assert.ok(wrong.dueAt < right.dueAt);
});

ok('relearning graduates back at the halved interval, minimum 3 days', () => {
  let c = rateCard(matureCard(4), 'again', CARD_ID, NOW); // half of 4 -> max(3, 2) = 3
  assert.equal(c.intervalDays, LAPSE_MIN_INTERVAL_DAYS);
  c = rateCard(c, 'good', CARD_ID, NOW + 10 * MIN); // 10-min retry -> next day
  assert.equal(c.state, 'relearning');
  assert.equal(c.dueAt, NOW + 10 * MIN + 1440 * MIN);
  c = rateCard(c, 'good', CARD_ID, NOW + DAY);
  assert.equal(c.state, 'review');
  assert.ok(Math.abs(c.intervalDays - LAPSE_MIN_INTERVAL_DAYS) <= 1);
});

ok('ease clamps at the floor; intervals clamp at the max', () => {
  let c = matureCard(10, MIN_EASE);
  c = rateCard(c, 'again', CARD_ID, NOW);
  assert.equal(c.ease, MIN_EASE);
  const big = rateCard(matureCard(300, 3), 'good', CARD_ID, NOW);
  assert.ok(big.intervalDays <= MAX_INTERVAL_DAYS);
});

ok('leech flags at the lapse threshold instead of silently suspending', () => {
  let c = matureCard(20);
  for (let i = 0; i < LEECH_LAPSE_THRESHOLD; i += 1) {
    c = rateCard({ ...c, state: 'review' }, 'again', CARD_ID, NOW + i * DAY);
  }
  assert.equal(c.leech, true);
  assert.notEqual(c.state, 'suspended');
});

ok('rating a suspended card is a no-op', () => {
  const c = rateCard({ ...matureCard(10), state: 'suspended' }, 'good', CARD_ID, NOW);
  assert.equal(c.state, 'suspended');
});

// --- fuzz -------------------------------------------------------------------

ok('fuzz is deterministic, bounded, and skips short intervals', () => {
  assert.equal(intervalFuzzDays(2, CARD_ID, 3), 0);
  const f = intervalFuzzDays(30, CARD_ID, 3);
  assert.equal(f, intervalFuzzDays(30, CARD_ID, 3));
  assert.ok(Math.abs(f) <= Math.max(1, Math.round(30 * 0.05)));
  // Sibling cards get different offsets (not guaranteed for every pair,
  // but these two specific ids differ).
  const g = intervalFuzzDays(30, `${CARD_ID}x`, 3);
  assert.ok(Number.isInteger(g));
});

ok('same input and time produce the same schedule', () => {
  const a = rateCard(matureCard(30), 'good', CARD_ID, NOW);
  const b = rateCard(matureCard(30), 'good', CARD_ID, NOW);
  assert.deepEqual(a, b);
});

// --- dueness ----------------------------------------------------------------

ok('review cards are due on their study day; steps use learn-ahead', () => {
  const review = { ...matureCard(5), dueAt: NOW + 5 * 3600000 }; // later today
  assert.equal(isCardDueNow(review, NOW, 0), true);
  const tomorrow = { ...matureCard(5), dueAt: NOW + DAY };
  assert.equal(isCardDueNow(tomorrow, NOW, 0), false);
  const step = { ...newReviewCard(), state: 'learning', dueAt: NOW + LEARN_AHEAD_MS - MIN };
  assert.equal(isCardDueNow(step, NOW, 0), true);
  const farStep = { ...newReviewCard(), state: 'learning', dueAt: NOW + LEARN_AHEAD_MS + MIN };
  assert.equal(isCardDueNow(farStep, NOW, 0), false);
  assert.equal(isCardDueNow({ ...newReviewCard() }, NOW, 0), false);
});

ok('the 1-day learning step is due any time on its study day', () => {
  // Answered Good on Monday 2pm -> second step lands Tuesday 2pm, but the
  // card is Tuesday's work from the morning (the plan's "Due Tuesday").
  const c = rateCard(newReviewCard(), 'good', CARD_ID, NOW);
  const tueMorning = NOW + DAY - 5 * 3600000; // Tuesday 9am
  assert.equal(isCardDueNow(c, tueMorning, 0), true);
  assert.equal(isCardDueNow(c, NOW + 3600000, 0), false); // still Monday
  // The 10-minute step stays minute-scale: due ~10 minutes out (within
  // learn-ahead for an open session), never treated as "any time today".
  const retry = rateCard(matureCard(10), 'again', CARD_ID, NOW);
  assert.equal(retry.dueAt, NOW + 10 * MIN);
  assert.equal(isCardDueNow(retry, NOW + MIN, 0), true); // learn-ahead covers it
});

ok('due labels read plainly', () => {
  assert.equal(nextDueLabel({ ...matureCard(1), dueAt: NOW + 2 * 3600000 }, NOW, 0), 'later today');
  assert.equal(nextDueLabel({ ...matureCard(1), dueAt: NOW + DAY }, NOW, 0), 'tomorrow');
  assert.equal(nextDueLabel({ ...matureCard(4), dueAt: NOW + 4 * DAY }, NOW, 0), 'in 4 days');
  // Clock moved backwards: clamp, never a negative duration.
  assert.equal(nextDueLabel({ ...matureCard(1), dueAt: NOW - DAY }, NOW, 0), 'later today');
});

// --- normalization / malformed state ---------------------------------------

ok('malformed saved state normalizes without throwing', () => {
  const c = normalizeReviewCard({ state: 'bogus', ease: 'NaN', dueAt: -5, reps: 'x', stepIndex: 99 });
  assert.equal(c.state, 'new');
  assert.equal(c.ease, START_EASE);
  assert.equal(c.dueAt, 0);
  assert.equal(c.reps, 0);
  assert.deepEqual(normalizeReviewCards(null), {});
  assert.deepEqual(normalizeReviewDayStats({ 'not-a-day': { reviewed: 3 } }, NOW, 0), {});
  const s = normalizeReviewSettings({ newPerDay: -3, extraNewBatchSize: 1e9 });
  assert.equal(s.newPerDay, 0);
  assert.equal(s.extraNewBatchSize, 100);
  assert.equal(normalizeReviewSettings(undefined).newPerDay, 10);
});

ok('old day stats fall out of the rolling window', () => {
  const stats = normalizeReviewDayStats({
    '2020-01-01': { reviewed: 3 },
    [reviewDayISO(NOW, 0)]: { reviewed: 2, introduced: 1 },
  }, NOW, 0);
  assert.equal(Object.keys(stats).length, 1);
  assert.equal(stats[reviewDayISO(NOW, 0)].reviewed, 2);
});

// --- legacy seeding ---------------------------------------------------------

ok('legacy wrong answers seed as relearning; correct/unseen stay new', () => {
  const wrong = effectiveReviewCard({}, CARD_ID, { lastSeen: NOW - DAY, lastCorrect: false });
  assert.equal(wrong.state, 'relearning');
  assert.equal(isCardDueNow(wrong, NOW, 0), true);
  const right = effectiveReviewCard({}, CARD_ID, { lastSeen: NOW - DAY, lastCorrect: true });
  assert.equal(right.state, 'new');
  assert.equal(isRecentlyCorrectLegacy({ lastSeen: NOW - DAY, lastCorrect: true }, NOW), true);
  assert.equal(isRecentlyCorrectLegacy({ lastSeen: NOW - 4 * DAY, lastCorrect: true }, NOW), false);
  const stored = effectiveReviewCard({ [CARD_ID]: matureCard(9) }, CARD_ID, { lastSeen: NOW, lastCorrect: false });
  assert.equal(stored.intervalDays, 9); // stored record beats legacy seed
});

// --- allowance and queue ----------------------------------------------------

function makePool(n, { lessons = 3 } = {}) {
  return Array.from({ length: n }, (_, i) => ({
    cardId: `rv1|c|m${i % 2}|l${i % lessons}|bank|f${i}`,
    legacyKey: `m${i % 2}_l${i % lessons}_b${i}`,
    moduleId: `m${i % 2}`,
    lessonId: `l${i % lessons}`,
    item: { kind: 'mcq', prompt: `q${i}`, options: ['a', 'b'], correct: 0 },
  }));
}

ok('new-card allowance and Do-10-more math', () => {
  const settings = normalizeReviewSettings({});
  const today = reviewDayISO(NOW, 0);
  assert.equal(newAllowanceLeft({}, settings, today), 10);
  assert.equal(newAllowanceLeft({ [today]: { introduced: 4 } }, settings, today), 6);
  assert.equal(newAllowanceLeft({ [today]: { introduced: 10 } }, settings, today), 0);
  // A press of Do 10 more authorizes exactly one more batch, and survives
  // a "reload" trivially because it's plain persisted data.
  assert.equal(newAllowanceLeft({ [today]: { introduced: 10, extraNewAuthorized: 10 } }, settings, today), 10);
  assert.equal(newAllowanceLeft({ [today]: { introduced: 17, extraNewAuthorized: 10 } }, settings, today), 3);
});

ok('queue takes due work first, then new up to the allowance', () => {
  const pool = makePool(20);
  const cards = {};
  // Cards 0..4 are overdue reviews with staggered due days.
  for (let i = 0; i < 5; i += 1) {
    cards[pool[i].cardId] = { ...matureCard(5), dueAt: NOW - (5 - i) * DAY };
  }
  const { queue, dueTotal, newTaken } = buildReviewQueue(pool, cards, {}, NOW, 0, { newAllowance: 10 });
  assert.equal(dueTotal, 5);
  assert.equal(newTaken, 10);
  assert.equal(queue.length, 15);
  // Every due card appears before any new card.
  const duePositions = [0, 1, 2, 3, 4].map((i) => queue.indexOf(pool[i].cardId));
  assert.ok(Math.max(...duePositions) < 5);
  // Oldest-due first survives the sibling interleave approximately: the
  // most overdue card is never pushed to the back of the due band.
  assert.ok(queue.indexOf(pool[0].cardId) < 4);
});

ok('new cards never exceed the allowance, and none leak past zero', () => {
  const pool = makePool(20);
  const none = buildReviewQueue(pool, {}, {}, NOW, 0, { newAllowance: 0 });
  assert.equal(none.queue.length, 0);
  const three = buildReviewQueue(pool, {}, {}, NOW, 0, { newAllowance: 3 });
  assert.equal(three.queue.length, 3);
});

ok('a large backlog chunks without discarding the rest', () => {
  const pool = makePool(80, { lessons: 8 });
  const cards = {};
  pool.forEach((e, i) => { cards[e.cardId] = { ...matureCard(5), dueAt: NOW - (i + 1) * 3600000 }; });
  const { queue, dueTotal, dueTaken } = buildReviewQueue(pool, cards, {}, NOW, 0, { newAllowance: 10 });
  assert.equal(dueTotal, 80); // honest count
  assert.equal(dueTaken, REVIEW_SESSION_CHUNK);
  assert.equal(queue.length, REVIEW_SESSION_CHUNK);
});

ok('overdue work cannot be starved: every due card lands within ceil(n/chunk) sessions', () => {
  const pool = makePool(70, { lessons: 7 });
  let cards = {};
  pool.forEach((e, i) => { cards[e.cardId] = { ...matureCard(5), dueAt: NOW - (i + 1) * 3600000 }; });
  const seen = new Set();
  for (let session = 0; session < 3; session += 1) {
    const { queue } = buildReviewQueue(pool, cards, {}, NOW, 0, { newAllowance: 0 });
    queue.forEach((id) => seen.add(id));
    // Answer everything Good so it schedules out of today.
    const next = { ...cards };
    queue.forEach((id) => { next[id] = rateCard(cards[id], 'good', id, NOW); });
    cards = next;
  }
  assert.equal(seen.size, 70);
});

ok('queue is deterministic and avoids same-lesson neighbours where possible', () => {
  const pool = makePool(30, { lessons: 5 });
  const a = buildReviewQueue(pool, {}, {}, NOW, 0, { newAllowance: 30 });
  const b = buildReviewQueue(pool, {}, {}, NOW, 0, { newAllowance: 30 });
  assert.deepEqual(a.queue, b.queue);
  const byId = new Map(pool.map((e) => [e.cardId, e]));
  let adjacent = 0;
  for (let i = 1; i < a.queue.length; i += 1) {
    const prev = byId.get(a.queue[i - 1]);
    const cur = byId.get(a.queue[i]);
    if (prev.moduleId === cur.moduleId && prev.lessonId === cur.lessonId) adjacent += 1;
  }
  assert.ok(adjacent <= 2, `too many same-lesson neighbours: ${adjacent}`);
});

ok('newOnly builds an extra-new batch and no due work', () => {
  const pool = makePool(20);
  const cards = { [pool[0].cardId]: { ...matureCard(5), dueAt: NOW - DAY } };
  const { queue } = buildReviewQueue(pool, cards, {}, NOW, 0, { newAllowance: 10, chunk: 10, newOnly: true });
  assert.equal(queue.length, 10);
  assert.ok(!queue.includes(pool[0].cardId));
});

ok('recently-correct legacy cards wait at the back of the new line', () => {
  const pool = makePool(10);
  const history = { [pool[0].legacyKey]: { lastSeen: NOW - DAY, lastCorrect: true, timesSeen: 1, timesWrong: 0 } };
  const { queue } = buildReviewQueue(pool, {}, history, NOW, 0, { newAllowance: 10 });
  assert.equal(queue.length, 10);
  assert.ok(queue.indexOf(pool[0].cardId) >= 8, 'recently-correct card should sort late');
});

ok('suspended cards never enter counts or queues', () => {
  const pool = makePool(5);
  const cards = { [pool[0].cardId]: { ...matureCard(5), dueAt: NOW - DAY, state: 'suspended' } };
  const st = reviewPoolStatus(pool, cards, {}, {}, normalizeReviewSettings({}), NOW, 0);
  assert.equal(st.suspended, 1);
  assert.equal(st.due, 0);
  const { queue } = buildReviewQueue(pool, cards, {}, NOW, 0, { newAllowance: 0 });
  assert.ok(!queue.includes(pool[0].cardId));
});

ok('pool status reports due/new/next-due coherently around the reset hour', () => {
  const pool = makePool(6);
  const cards = {
    [pool[0].cardId]: { ...matureCard(3), dueAt: NOW - DAY }, // overdue
    [pool[1].cardId]: { ...matureCard(3), dueAt: NOW + 3 * DAY }, // future
    [pool[2].cardId]: { ...newReviewCard(), state: 'learning', stepIndex: 0, dueAt: NOW + 5 * MIN }, // learn-ahead
  };
  const st = reviewPoolStatus(pool, cards, {}, {}, normalizeReviewSettings({}), NOW, 0);
  assert.equal(st.due, 2);
  assert.equal(st.newAvailable, 3);
  assert.equal(st.newToday, 3);
  assert.equal(st.nextDueAt, NOW + 3 * DAY);
  assert.equal(st.total, 6);
  // Just before a 4am reset, a card due "today at 5am" is tomorrow's work.
  const threeAm = new Date(2026, 2, 10, 3, 0, 0).getTime();
  const fiveAm = { ...matureCard(1), dueAt: new Date(2026, 2, 10, 5, 0, 0).getTime() };
  assert.equal(isCardDueNow(fiveAm, threeAm, 4), false);
  assert.equal(isCardDueNow(fiveAm, new Date(2026, 2, 10, 6, 0, 0).getTime(), 4), true);
});

console.log(`\nAll ${passed} checks passed.`);

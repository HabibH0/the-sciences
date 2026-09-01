// Pure spaced-repetition scheduler for the app-wide Review engine (see
// ANKI_PRACTICE_ENGINE_PLAN.md). Same contract as checker.js/gamification.js:
// no DOM, no persistence, no Electron -- every function takes plain data and
// a timestamp and returns plain data, so the whole policy is testable from
// Node (scripts/verify-review-scheduler.mjs) and replaceable (e.g. by FSRS)
// without touching the question renderer, pool builders, or card identity.
//
// The model is a compact SM-2/Anki-style state machine. Each eligible
// question ("card") is one record in state.reviewCards, keyed by a durable
// content-fingerprint id (see reviewFingerprint / content/index.js's
// getReviewPool). A card the store has never seen is 'new' -- it costs
// nothing until introduced, so the store only ever holds cards actually
// studied.

// --- Policy constants (the plan's "named constants, not scattered literals") ---

export const REVIEW_SETTINGS_DEFAULTS = {
  newPerDay: 10,
  extraNewBatchSize: 10,
  scope: 'active-course',
  hardEasyControls: false,
};

// Learning AND relearning share the same short-step ladder: 10 minutes,
// then next study day. A relearning card graduates back to `review` at the
// halved interval stored on it when it lapsed (see rateCard's again branch).
export const LEARNING_STEPS_MINUTES = [10, 1440];
export const GRADUATING_INTERVAL_DAYS = 3;
export const EASY_INTERVAL_DAYS = 7;
export const START_EASE = 2.5;
export const MIN_EASE = 1.3;
export const MIN_INTERVAL_DAYS = 1;
export const MAX_INTERVAL_DAYS = 365;
export const AGAIN_EASE_PENALTY = 0.2;
export const HARD_EASE_PENALTY = 0.15;
export const EASY_EASE_BONUS = 0.15;
export const HARD_INTERVAL_MULT = 1.2;
export const EASY_INTERVAL_MULT = 1.3;
export const LAPSE_INTERVAL_FACTOR = 0.5;
export const LAPSE_MIN_INTERVAL_DAYS = 3;
export const LEECH_LAPSE_THRESHOLD = 8;
// A learning/relearning card due "in 10 minutes" should still be served by
// a session that's open right now rather than stranding the learner one
// card short -- Anki's own learn-ahead idea.
export const LEARN_AHEAD_MS = 20 * 60000;
// Sessions serve a manageable chunk of a large backlog; the true due count
// is still reported honestly and "Continue review" serves the next chunk.
export const REVIEW_SESSION_CHUNK = 30;
// How many other cards come between a wrong answer and its same-session
// retry, so the retrieval is from memory rather than from the feedback
// still on screen.
export const REVIEW_REINSERT_GAP = 4;
// Legacy practiceHistory migration: a card answered correctly this recently
// (and never introduced to SRS) is sorted to the back of the new-card line
// until the window ends.
export const RECENT_CORRECT_WINDOW_MS = 3 * 86400000;
export const REVIEW_DAY_STATS_WINDOW_DAYS = 120;
// Rough per-card pace for the "estimated time" figure -- deliberately
// conservative (2 cards a minute).
export const REVIEW_SECONDS_PER_CARD = 30;

const MINUTE_MS = 60000;
const DAY_MS = 86400000;

export const REVIEW_CARD_STATES = ['new', 'learning', 'review', 'relearning', 'suspended'];

// --- Small pure helpers ----------------------------------------------------

// FNV-1a over the string, as unsigned 32-bit. Deterministic, dependency-free
// (the plan explicitly rules out Web Crypto/dependencies), and stable across
// sessions/devices -- which is all a content fingerprint needs.
export function hashString(str) {
  let h = 0x811c9dc5;
  const s = String(str);
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

// The normalized-content fingerprint for one question item: kind, the text
// the learner is asked, the answer options or تركيب structure, and the
// correct answer. Moving an item within its array keeps this stable;
// rewording it changes it (deliberately -- reworded content is a new card).
export function reviewFingerprint(item) {
  const SEP = '';
  const parts = [item.kind || 'mcq'];
  if (item.kind === 'tarkeeb') {
    if (item.cells) {
      parts.push(item.cells.join(SEP));
      parts.push((item.rows || []).map((r) => `${r.position}:${(r.labels || []).map((l) => `${l.start}-${l.end}=${l.role}`).join(SEP)}`).join(''));
    } else {
      parts.push(item.source || '', (item.words || []).join(SEP), (item.labels || []).join(SEP));
    }
  } else {
    parts.push(item.prompt || '', (item.options || []).join(SEP), String(item.correct));
  }
  return hashString(parts.join('')).toString(36);
}

// The calendar day `ts` belongs to under the learner's daily reset hour --
// same math as persistence.js's todayISO, duplicated here (rather than
// imported) so this module stays free of the storage import chain.
export function reviewDayISO(ts, resetHour = 0) {
  const d = new Date(ts - resetHour * 3600000);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// Whole study-days from `fromTs`'s day to `toTs`'s day (0 = same day).
// Parses the two day labels back to UTC midnights so DST shifts between the
// two dates can't make the division land on a fraction.
function dayDiff(fromTs, toTs, resetHour) {
  const a = Date.parse(`${reviewDayISO(fromTs, resetHour)}T00:00:00Z`);
  const b = Date.parse(`${reviewDayISO(toTs, resetHour)}T00:00:00Z`);
  return Math.round((b - a) / DAY_MS);
}

function clampNumber(value, min, max, fallback) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

// --- Card records ----------------------------------------------------------

export function newReviewCard() {
  return {
    state: 'new',
    dueAt: 0,
    intervalDays: 0,
    ease: START_EASE,
    stepIndex: 0,
    reps: 0,
    lapses: 0,
    lastReviewedAt: 0,
    lastRating: null,
    lastCorrect: null,
    introducedOn: null,
    updatedAt: '',
    leech: false,
  };
}

// Defaults and clamps one raw (possibly synced-from-elsewhere, possibly
// malformed) record into a card this scheduler can trust. Never throws.
export function normalizeReviewCard(raw) {
  const base = newReviewCard();
  if (!raw || typeof raw !== 'object') return base;
  const card = { ...base, ...raw };
  if (!REVIEW_CARD_STATES.includes(card.state)) card.state = 'new';
  card.dueAt = clampNumber(card.dueAt, 0, 8.64e15, 0);
  card.intervalDays = clampNumber(card.intervalDays, 0, MAX_INTERVAL_DAYS, 0);
  card.ease = clampNumber(card.ease, MIN_EASE, 5, START_EASE);
  card.stepIndex = Math.round(clampNumber(card.stepIndex, 0, LEARNING_STEPS_MINUTES.length, 0));
  card.reps = Math.round(clampNumber(card.reps, 0, 1e9, 0));
  card.lapses = Math.round(clampNumber(card.lapses, 0, 1e9, 0));
  card.lastReviewedAt = clampNumber(card.lastReviewedAt, 0, 8.64e15, 0);
  card.leech = card.leech === true;
  if (typeof card.updatedAt !== 'string') card.updatedAt = '';
  return card;
}

export function normalizeReviewCards(map) {
  if (!map || typeof map !== 'object') return {};
  const out = {};
  for (const [key, value] of Object.entries(map)) out[key] = normalizeReviewCard(value);
  return out;
}

export function normalizeReviewSettings(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  return {
    newPerDay: Math.round(clampNumber(s.newPerDay, 0, 200, REVIEW_SETTINGS_DEFAULTS.newPerDay)),
    extraNewBatchSize: Math.round(clampNumber(s.extraNewBatchSize, 1, 100, REVIEW_SETTINGS_DEFAULTS.extraNewBatchSize)),
    scope: 'active-course',
    hardEasyControls: s.hardEasyControls === true,
  };
}

// Keeps day stats to the bounded rolling window and clamps each counter.
export function normalizeReviewDayStats(map, now = Date.now(), resetHour = 0) {
  if (!map || typeof map !== 'object') return {};
  const out = {};
  const cutoff = reviewDayISO(now - REVIEW_DAY_STATS_WINDOW_DAYS * DAY_MS, resetHour);
  for (const [day, value] of Object.entries(map)) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(day) || day < cutoff) continue;
    const v = value && typeof value === 'object' ? value : {};
    out[day] = {
      introduced: Math.round(clampNumber(v.introduced, 0, 1e6, 0)),
      extraNewAuthorized: Math.round(clampNumber(v.extraNewAuthorized, 0, 1e6, 0)),
      reviewed: Math.round(clampNumber(v.reviewed, 0, 1e6, 0)),
      correct: Math.round(clampNumber(v.correct, 0, 1e6, 0)),
    };
  }
  return out;
}

// --- Legacy seeding --------------------------------------------------------
// The effective card for a pool entry: the stored record when one exists,
// otherwise a card seeded from coarse legacy practiceHistory per the plan's
// migration rule -- last answered wrong -> eligible immediately as
// relearning (interval floor, nothing mature synthesized); anything else ->
// plain new. The seed is virtual until the card is actually answered
// (rateCard is what first writes it to the store), so merely opening Review
// never fabricates records. This also covers ongoing Custom practice
// mistakes on cards not yet introduced to SRS -- deliberately, the same
// "recent mistake resurfaces" signal, while a card SRS already tracks is
// never touched by Custom practice at all.
export function effectiveReviewCard(cards, cardId, legacyHistory) {
  const stored = cards[cardId];
  if (stored) return normalizeReviewCard(stored);
  const card = newReviewCard();
  if (legacyHistory && legacyHistory.lastSeen && legacyHistory.lastCorrect === false) {
    return {
      ...card,
      state: 'relearning',
      stepIndex: 0,
      intervalDays: LAPSE_MIN_INTERVAL_DAYS,
      dueAt: legacyHistory.lastSeen,
    };
  }
  return card;
}

// Whether a never-introduced card should sit at the back of the new-card
// line (legacy "answered correctly within the last three days" rule).
export function isRecentlyCorrectLegacy(legacyHistory, now) {
  return !!(legacyHistory && legacyHistory.lastSeen && legacyHistory.lastCorrect === true
    && now - legacyHistory.lastSeen < RECENT_CORRECT_WINDOW_MS);
}

// --- Dueness ---------------------------------------------------------------

// Review-state cards are due on a day granularity (due any time on their due
// day, respecting the reset boundary). Learning/relearning short steps are
// minute-granularity with a learn-ahead margin, so an open session can serve
// a step landing in a few minutes -- but the 1-DAY step is a study-day fact
// like a review interval: "due Tuesday" means any time Tuesday, not
// "24 hours to the minute after Monday's answer".
export function isCardDueNow(card, now, resetHour = 0) {
  if (card.state === 'new' || card.state === 'suspended') return false;
  if (card.state === 'review') return dayDiff(card.dueAt, now, resetHour) >= 0;
  const stepDelay = card.dueAt - (card.lastReviewedAt || 0);
  if (card.lastReviewedAt && stepDelay >= 12 * 3600000) return dayDiff(card.dueAt, now, resetHour) >= 0;
  return card.dueAt <= now + LEARN_AHEAD_MS;
}

// Plain-language label for when a card comes back: 'later today',
// 'tomorrow', 'in N days'. Clamps a clock that moved backwards to 'later
// today' rather than inventing negative durations.
export function nextDueLabel(card, now, resetHour = 0) {
  if (card.state === 'suspended') return 'suspended';
  if (card.state === 'new') return 'not started';
  const days = Math.max(0, dayDiff(now, card.dueAt, resetHour));
  if (days <= 0) return 'later today';
  if (days === 1) return 'tomorrow';
  return `in ${days} days`;
}

export const RATING_LABELS = { again: 'Again', hard: 'Hard', good: 'Good', easy: 'Easy' };

// --- Rating ----------------------------------------------------------------

// Deterministic fuzz for day-scale intervals of 3+ days, so sibling cards
// introduced together don't stay permanently clumped: +/- up to ~5% (at
// least +/-1 day), derived from the card id and rep count rather than
// Math.random so the same inputs always schedule the same day.
export function intervalFuzzDays(intervalDays, cardId, reps) {
  if (intervalDays < 3) return 0;
  const span = Math.max(1, Math.round(intervalDays * 0.05));
  return (hashString(`${cardId}:${reps}`) % (2 * span + 1)) - span;
}

function scheduleReviewInterval(card, intervalDays, cardId, now) {
  let iv = Math.min(MAX_INTERVAL_DAYS, Math.max(MIN_INTERVAL_DAYS, Math.round(intervalDays)));
  iv = Math.min(MAX_INTERVAL_DAYS, Math.max(MIN_INTERVAL_DAYS, iv + intervalFuzzDays(iv, cardId, card.reps)));
  card.state = 'review';
  card.stepIndex = 0;
  card.intervalDays = iv;
  card.dueAt = now + iv * DAY_MS;
}

// Applies one rating ('again' | 'hard' | 'good' | 'easy') and returns the
// next card state. Pure -- the caller stores the result and updates day
// stats. The full four-rating surface is supported from the start (per the
// plan) even though the default UI only auto-maps wrong->again/correct->good
// with optional Hard/Easy overrides.
export function rateCard(card, rating, cardId, now, resetHour = 0) {
  const c = { ...normalizeReviewCard(card) };
  if (c.state === 'suspended') return c;
  c.reps += 1;
  c.lastReviewedAt = now;
  c.lastRating = rating;
  c.lastCorrect = rating !== 'again';
  c.updatedAt = new Date(now).toISOString();
  if (c.state === 'new') {
    c.state = 'learning';
    c.stepIndex = 0;
    c.introducedOn = reviewDayISO(now, resetHour);
  }

  if (c.state === 'learning' || c.state === 'relearning') {
    const steps = LEARNING_STEPS_MINUTES;
    if (rating === 'again') {
      c.stepIndex = 0;
      c.dueAt = now + steps[0] * MINUTE_MS;
    } else if (rating === 'hard') {
      // Repeat the current step at 1.5x its delay -- effortful but correct
      // shouldn't advance the ladder, nor punish like a lapse.
      c.dueAt = now + Math.round(steps[Math.min(c.stepIndex, steps.length - 1)] * 1.5) * MINUTE_MS;
    } else if (rating === 'easy') {
      // Graduate immediately at the easy interval.
      scheduleReviewInterval(c, c.state === 'relearning'
        ? Math.max(EASY_INTERVAL_DAYS, c.intervalDays)
        : EASY_INTERVAL_DAYS, cardId, now);
    } else {
      c.stepIndex += 1;
      if (c.stepIndex < steps.length) {
        c.dueAt = now + steps[c.stepIndex] * MINUTE_MS;
      } else if (c.state === 'relearning') {
        // Return to review at the halved interval stored when it lapsed.
        scheduleReviewInterval(c, Math.max(LAPSE_MIN_INTERVAL_DAYS, c.intervalDays || LAPSE_MIN_INTERVAL_DAYS), cardId, now);
      } else {
        scheduleReviewInterval(c, GRADUATING_INTERVAL_DAYS, cardId, now);
      }
    }
    return c;
  }

  // state === 'review'
  if (rating === 'again') {
    c.lapses += 1;
    if (c.lapses >= LEECH_LAPSE_THRESHOLD) c.leech = true;
    c.ease = Math.max(MIN_EASE, c.ease - AGAIN_EASE_PENALTY);
    c.intervalDays = Math.max(LAPSE_MIN_INTERVAL_DAYS, Math.round(c.intervalDays * LAPSE_INTERVAL_FACTOR));
    c.state = 'relearning';
    c.stepIndex = 0;
    c.dueAt = now + LEARNING_STEPS_MINUTES[0] * MINUTE_MS;
    return c;
  }
  let iv;
  if (rating === 'hard') {
    iv = Math.max(c.intervalDays, Math.round(c.intervalDays * HARD_INTERVAL_MULT));
    c.ease = Math.max(MIN_EASE, c.ease - HARD_EASE_PENALTY);
  } else if (rating === 'easy') {
    iv = Math.max(c.intervalDays + 1, Math.round(c.intervalDays * c.ease * EASY_INTERVAL_MULT));
    c.ease += EASY_EASE_BONUS;
  } else {
    iv = Math.max(c.intervalDays + 1, Math.round(c.intervalDays * c.ease));
  }
  scheduleReviewInterval(c, iv, cardId, now);
  return c;
}

// --- Day allowance ---------------------------------------------------------

export function newAllowanceLeft(dayStats, settings, today) {
  const stats = (dayStats && dayStats[today]) || {};
  const authorized = (Number(settings.newPerDay) || 0) + (Number(stats.extraNewAuthorized) || 0);
  return Math.max(0, authorized - (Number(stats.introduced) || 0));
}

// --- Pool status (badges, panels, caught-up states) ------------------------

// One pass over a review pool, answering everything the entry points need:
// how much is due now, how many new cards today's remaining allowance can
// introduce, how many unseen cards exist at all, and when the next
// not-yet-due card lands (for the caught-up message).
export function reviewPoolStatus(pool, cards, history, dayStats, settings, now, resetHour = 0) {
  const today = reviewDayISO(now, resetHour);
  const allowance = newAllowanceLeft(dayStats, settings, today);
  let due = 0;
  let newAvailable = 0;
  let suspended = 0;
  let nextDueAt = null;
  for (const entry of pool) {
    const card = effectiveReviewCard(cards, entry.cardId, history[entry.legacyKey]);
    if (card.state === 'suspended') { suspended += 1; continue; }
    if (card.state === 'new') { newAvailable += 1; continue; }
    if (isCardDueNow(card, now, resetHour)) due += 1;
    else if (nextDueAt === null || card.dueAt < nextDueAt) nextDueAt = card.dueAt;
  }
  const newToday = Math.min(newAvailable, allowance);
  return { due, newAvailable, newToday, allowance, suspended, nextDueAt, total: pool.length };
}

export function estimateReviewMinutes(cardCount) {
  return Math.max(1, Math.round((cardCount * REVIEW_SECONDS_PER_CARD) / 60));
}

// --- Queue building --------------------------------------------------------

// One in-place pass that avoids two consecutive cards from the same lesson
// when an alternative exists within a small look-ahead window -- an
// interleave, not a shuffle, so overdue-first ordering survives roughly
// intact and long-overdue work can't be repeatedly postponed.
function spreadSiblings(entries) {
  const out = entries.slice();
  for (let i = 1; i < out.length; i += 1) {
    const prev = out[i - 1];
    if (out[i].moduleId !== prev.moduleId || out[i].lessonId !== prev.lessonId) continue;
    for (let j = i + 1; j < Math.min(out.length, i + 8); j += 1) {
      if (out[j].moduleId !== prev.moduleId || out[j].lessonId !== prev.lessonId) {
        const swap = out[j];
        out.splice(j, 1);
        out.splice(i, 0, swap);
        break;
      }
    }
  }
  return out;
}

// Builds one session's ordered card-id queue from the pool, in the plan's
// priority order: overdue relearning/learning steps first, then reviews
// oldest-due first (with a small weakness boost from legacy history), then
// new cards up to `newAllowance` -- capped to `chunk` total so a large
// backlog starts with a manageable session ("Continue review" serves the
// rest). Deterministic given (pool, cards, history, now): ordering ties
// break on the stable pool order, and fuzz lives in rateCard, not here.
// `newOnly` builds a Do-10-more batch: new cards only, no due work.
export function buildReviewQueue(pool, cards, history, now, resetHour = 0, {
  newAllowance = 0,
  chunk = REVIEW_SESSION_CHUNK,
  newOnly = false,
} = {}) {
  const stepEntries = [];
  const reviewEntries = [];
  const newEntries = [];
  for (const entry of pool) {
    const card = effectiveReviewCard(cards, entry.cardId, history[entry.legacyKey]);
    if (card.state === 'suspended') continue;
    if (card.state === 'new') { newEntries.push({ entry, card }); continue; }
    if (!isCardDueNow(card, now, resetHour)) continue;
    (card.state === 'review' ? reviewEntries : stepEntries).push({ entry, card });
  }

  stepEntries.sort((a, b) => a.card.dueAt - b.card.dueAt);
  const wrongness = (e) => {
    const h = history[e.entry.legacyKey];
    return h && h.timesSeen ? (h.timesWrong || 0) / h.timesSeen : 0;
  };
  reviewEntries.sort((a, b) => {
    const dayGap = dayDiff(a.card.dueAt, b.card.dueAt, resetHour);
    if (dayGap !== 0) return dayGap > 0 ? -1 : 1; // older due day first
    return wrongness(b) - wrongness(a); // small weakness boost within a day
  });

  // New cards keep curriculum order, except legacy recently-correct ones,
  // which wait at the back until their three-day window ends.
  const freshNew = newEntries.filter((e) => !isRecentlyCorrectLegacy(history[e.entry.legacyKey], now));
  const recentNew = newEntries.filter((e) => isRecentlyCorrectLegacy(history[e.entry.legacyKey], now));
  const orderedNew = freshNew.concat(recentNew);

  const dueList = newOnly ? [] : stepEntries.concat(reviewEntries).slice(0, chunk);
  const newCount = Math.min(newAllowance, orderedNew.length, Math.max(0, chunk - dueList.length));
  const newTaken = orderedNew.slice(0, newCount);

  const ordered = spreadSiblings(dueList.map((e) => e.entry))
    .concat(spreadSiblings(newTaken.map((e) => e.entry)));
  return {
    queue: ordered.map((e) => e.cardId),
    dueTotal: newOnly ? 0 : stepEntries.length + reviewEntries.length,
    dueTaken: dueList.length,
    newTaken: newTaken.length,
  };
}

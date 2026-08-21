import { esc, escAttr, escBidi, isolateArabicHtml } from './html.js';
import {
  QUIZ_PASS_RATIO,
  isModuleUnlocked,
  isModuleComplete,
  completedCount,
  isLessonUnlocked,
  isLessonComplete,
  lessonProgress,
  conceptsToRender,
  areAllConceptsPassed,
  isLessonReadyForQuiz,
  isLessonExerciseItemPassed,
  lessonExerciseItemKey,
  isConceptExercisePassed,
  conceptKey,
  conceptLines,
  getBankPool,
  getMcqPool,
  getTarkeebPool,
  getVocabPool,
  getUnlockedVocabPool,
  courseHasVocab,
  totalLessonsCleared,
  totalLessons,
  COURSES,
  courseIdForModule,
  flattenTarkeebSlots,
  classifyTarkeebRoleTier,
  moduleHasTarkeeb,
  isCourseUnlocked,
  totalModulesAllCourses,
  totalLessonsAllCourses,
  completedModulesAllCourses,
  completedLessonsAllCourses,
  getModule,
  courseUnlockTestPool,
  moduleSkipTestPool,
  UNLOCK_TEST_PASS_RATIO,
} from '../content/index.js';
import { PATH_TRACKS, findPathGroup, groupSkeleton, findPathNode, pathFullPool, pathSkipAheadFullPool, sectionTestCounts, nodesBeforePathNode, isTrackUnlocked, trackUnlockTestPool } from '../content/paths.js';
import {
  LIT_BOOKS, getLitBook, getLoadedChapter, bookProgress, isChapterDone, isChapterUnlocked,
  chapterRecord, isUnknownLemma, unknownWordsInChapter, describeFeatures, posLabel,
  chapterSentences, unknownLemmas, bookSeries,
} from '../content-lit/index.js';
import {
  levelInfo, xpForQuiz, BADGE_DEFS, quizCosmeticXp, quizTier, longestStreak,
  ACHIEVEMENT_CATEGORIES, LEVEL_TIERS, STREAK_TIERS, PERFECT_QUIZ_TIERS, PRACTICE_TIERS,
  MODULE_TIERS, MODULES_ALL_BADGE, LESSON_TIERS, LESSONS_ALL_BADGE, COURSE_TIERS, COURSE_ALL_BADGE,
  perfectQuizCount,
} from './gamification.js';
import { moduleRevisionPool, moduleRevisionCounts, REVISION_VOCAB_LEARNED_COUNT, firstUnfinishedPathNodeIndex, isPathNodeUnlocked, isPathNodeDone, isGroupUnlocked, masteryV2Pool, pathCheckpointPassRatio, stillPassable } from './state.js';
import { todayISO, isoDateAt, normalizeLitTextScale, LIT_TEXT_SCALE_MIN, LIT_TEXT_SCALE_MAX } from './persistence.js';
import { SECTIONS, sectionIdFor, crumbTrail, backTargetFor } from './nav.js';

// --- Line icons -----------------------------------------------------------
// Lucide-style strokes, no fills, inheriting `currentColor` so the colour is
// a CSS concern. These replace the emoji the first draft leaned on.

const ICON_PATHS = {
  book: '<path d="M2 5c2.2-1.3 5-2 8-2s5.8.7 8 2v14c-2.2-1.3-5-2-8-2s-5.8.7-8 2z"/><path d="M12 3v16"/>',
  flame: '<path d="M12 2c1 3-2 4-2 7a4 4 0 1 0 8 0c0-1-.5-2-1-2 .3 2-1 3-2 2 1-2-1-3-1-5 0-1 .3-2-2-2z"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  archive: '<path d="M4 4h5a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z"/><path d="M20 4h-5a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h5z"/>',
  check: '<path d="M5 12l5 5L19 7"/>',
  star: '<path d="M12 2l2.9 6.5 7.1.6-5.4 4.7 1.6 7-6.2-3.9-6.2 3.9 1.6-7-5.4-4.7 7.1-.6z"/>',
  award: '<circle cx="12" cy="8" r="5"/><path d="M9 12l-2 8 5-3 5 3-2-8"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/>',
  arrowRight: '<path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>',
  cross: '<path d="M6 6l12 12M18 6L6 18"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18"/><path d="M8 2.5v4M16 2.5v4"/>',
  shield: '<path d="M12 2 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-6 8-6s8 2 8 6"/>',
  pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/>',
  'trash-2': '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/>',
  pointer: '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/>',
  eye: '<path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/>',
  'eye-off': '<path d="M4 4l16 16"/><path d="M10.6 5.8A10 10 0 0 1 12 5.5c6.5 0 10 6.5 10 6.5a17.5 17.5 0 0 1-3 3.6M6.4 6.9A16.7 16.7 0 0 0 2 12s3.5 6.5 10 6.5a10 10 0 0 0 4-1"/><path d="M9.9 9.9a2.8 2.8 0 1 0 4 4"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.3-4.3"/>',
  // Errors carry this so colour is never the only thing marking them --
  // the one signal a reader with a colour deficiency, or on a washed-out
  // screen, would otherwise miss entirely.
  alert: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5"/><path d="M12 16.2v.3"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><path d="M12 7.8v.3"/>',
};

function icon(name, size = 16, strokeWidth = 1.6) {
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"
    aria-hidden="true" focusable="false">${ICON_PATHS[name]}</svg>`;
}

// Western digits -> Arabic-Indic, for the ghost numeral bleeding off the
// bottom-right of an ink plate (module covers, book covers, completions).
const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
function arabicNumeral(n) {
  return String(n).replace(/d/g, (d) => ARABIC_DIGITS[Number(d)]);
}

function formatDateTime(value) {
  if (!value) return 'Unknown';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Unknown';
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

// --- Appearance: themes & Arabic typefaces ---------------------------------
// Mirrors the theme/accent blocks in styles.css exactly (kept as data here
// too, rather than read from CSS, because Settings' swatches preview each
// option in ITS OWN colours regardless of what's currently active -- that
// needs literal hex values to inline, not var(--color-*)). Background and
// accent are independent choices -- any of the five grounds can pair with
// any of the five accents -- rather than one bundling the other.

const THEME_ORDER = ['manuscript', 'mushaf', 'lamp', 'ink', 'sepia'];
const THEMES = {
  manuscript: { name: 'Manuscript', note: 'default', bg: '#f3f2f2', surface: '#eae9e9', text: '#201f1d' },
  mushaf: { name: 'Mushaf', note: 'ivory', bg: '#f7f1e1', surface: '#efe7d2', text: '#22271f' },
  lamp: { name: 'Lamp', note: 'night', bg: '#16130f', surface: '#211d16', text: '#ece3d1' },
  ink: { name: 'Ink', note: 'sober', bg: '#eceef1', surface: '#e0e4ea', text: '#1b2028' },
  sepia: { name: 'Sepia', note: 'aged', bg: '#ece0ca', surface: '#e2d4b9', text: '#2d2115' },
};

const ACCENT_ORDER = ['gold', 'emerald', 'amber', 'indigo', 'umber'];
const ACCENTS = {
  gold: { name: 'Gold', hex: '#b68235' },
  emerald: { name: 'Emerald', hex: '#2f6b4f' },
  amber: { name: 'Amber', hex: '#c9a04a' },
  indigo: { name: 'Indigo', hex: '#3d4d80' },
  umber: { name: 'Umber', hex: '#7d5029' },
};

// Body face and heading face are independent choices. Heading faces layer
// over whichever body face is active, rather than being mutually-exclusive
// body options of their own.
const FACE_ORDER = ['naskh', 'amiri', 'scheherazade', 'lateef'];
export const FACES = {
  naskh: { name: 'Naskh', note: 'textbook', body: "'Noto Naskh Arabic', serif" },
  amiri: { name: 'Amiri', note: 'classical', body: "'Amiri', serif" },
  scheherazade: { name: 'Scheherazade New', note: 'traditional', body: "'Scheherazade New', 'Amiri', serif" },
  lateef: { name: 'Lateef', note: 'soft classical', body: "'Lateef', 'Noto Naskh Arabic', serif" },
  // Legacy saved value from the earlier UI label.
  uthmani: { name: 'Amiri', note: 'classical', body: "'Amiri', serif" },
};
const HEADING_FACE_ORDER = ['body', 'kufi', 'aref'];
export const HEADING_FACES = {
  body: { name: 'Match body', note: 'same as text', font: null },
  kufi: { name: 'Reem Kufi', note: 'geometric Kufi', font: "'Reem Kufi', serif" },
  aref: { name: 'Aref Ruqaa', note: 'calligraphic Ruqaa', font: "'Aref Ruqaa', 'Amiri', serif" },
};
export const KUFI_HEAD_FONT = "'Reem Kufi', serif";

function bodyFaceKey(key) {
  return key === 'uthmani' ? 'amiri' : key;
}

function headingFaceKey(state) {
  return state.arabicHeadingFace || (state.kufiHeadings ? 'kufi' : 'body');
}

// --- App shell ----------------------------------------------------------
// Two bars, never both: a top nav on the screens you navigate between
// (wordmark, tabs, streak/level cluster), and a back chevron + breadcrumb on
// the screens you go *into*. On a phone the tabs move to a bottom bar (see
// tabBarHtml) and the top bar is dropped entirely -- the phone design has
// every screen lead with its own head row instead.
//
// Settings and Achievements are reached through Account rather than owning
// tabs of their own, per the handoff -- which is why the tab list is four
// items on both layouts.
//
// Which tab is current, what the trail above a screen is, and where back
// goes all come from js/nav.js now. Those three used to be three separate
// expressions that each had to be taught about every new screen, so any two
// of them could disagree; one table means a screen can no longer light one
// bar and not the other, or offer a back control pointing somewhere its own
// breadcrumb never mentions.

// Which screens sit "inside" something and therefore get the back bar rather
// than the tabs. A live practice/mastery session is neither: it has its own
// in-page End-session control, which knows how to unwind state.practice /
// state.pathActive properly, and a bar-level escape hatch would skip it.
// The core inner screens (module, lesson, quiz, book, reader) carry their own
// back control in their own head rows now, per both mockups.
const SHELL_INNER_VIEWS = new Set(['path']);
// The four tab destinations plus Account's two children -- the only screens
// the phone's bottom tab bar appears on (inner screens and live sessions
// navigate through their own heads instead).
const SHELL_TAB_VIEWS = new Set(['dashboard', 'library', 'schedule', 'account', 'achievements', 'settings']);
const SHELL_SESSION_VIEWS = new Set(['practice', 'practiceReview', 'masteryV2Complete']);

// `extra` comes off a nav.js trail entry as a plain object so nav.js can stay
// markup-free; this is the one place it becomes data-attributes.
function dataAttrs(extra) {
  if (!extra) return '';
  return Object.entries(extra).map(([k, v]) => `data-${k}="${escAttr(v)}"`).join(' ');
}

// A trail label, kept in its own direction. Arabic module/lesson titles sit
// inside an English chain (Home / Advanced Nahw / الكلمة), so each one is
// isolated rather than letting the bidi algorithm reorder the separators
// around it.
function crumbLabelHtml(crumb) {
  return crumb.lang === 'ar'
    ? `<bdi lang="ar" dir="rtl">${esc(crumb.label)}</bdi>`
    : `<bdi>${esc(crumb.label)}</bdi>`;
}

// The full clickable chain, for screens deep enough to have one (three
// levels or more). Two-level screens get navBackRowHtml's single back
// control instead -- a breadcrumb reading "Account > Achievements" says
// nothing the back chevron doesn't already.
function navCrumbsHtml(state, extraCls = 'only-desktop') {
  const trail = crumbTrail(state);
  if (trail.length < 3) return '';
  const items = trail.map((c, i) => {
    const sep = i ? '<span class="module-crumb-sep" aria-hidden="true">›</span>' : '';
    if (c.current || !c.action) {
      return `${sep}<span class="module-crumb-current" aria-current="page">${crumbLabelHtml(c)}</span>`;
    }
    return `${sep}<button class="module-crumb-link" data-action="${c.action}" ${dataAttrs(c.extra)}>${crumbLabelHtml(c)}</button>`;
  }).join('');
  return `<nav class="module-crumbs${extraCls ? ` ${extraCls}` : ''}" aria-label="Breadcrumb">${items}</nav>`;
}

// The single back control every inner screen leads with. One implementation
// instead of the near-identical copies that had drifted across the module
// page, the book page and the shell -- and it names its destination ("Back
// to الكلمة") rather than saying only "Back", so a keyboard or screen-reader
// user is told where it goes before pressing it.
function navBackRowHtml(state, extraCls = '') {
  const back = backTargetFor(state);
  if (!back) return '';
  return `
    <div class="module-backrow${extraCls ? ` ${extraCls}` : ''}">
      ${backLink(`Back to ${back.label}`, back.action, dataAttrs(back.extra))}
      <span class="app-crumb">${esc(back.crumb)}</span>
    </div>`;
}

// The primary destinations, shared by the desktop tab row and the phone tab
// bar so the two can never disagree about which one is current.
function shellTabs(state) {
  const activeId = sectionIdFor(state);
  return SECTIONS.map((s) => ({ ...s, active: s.id === activeId }));
}

function shellStatsHtml(state) {
  const li = levelInfo(state.xp);
  return `
    <a class="app-stats" href="#/account/achievements" data-action="openAchievements" title="Streak and level">
      <span class="app-stat" title="Current streak">${icon('flame', 13, 2)}${state.streak || 1}</span>
      <span class="app-stats-sep" aria-hidden="true"></span>
      <span class="app-stat" title="Level ${li.level}">Level ${li.level}</span>
    </a>`;
}

function headerHtml(state, MODULES) {
  if (SHELL_INNER_VIEWS.has(state.view)) {
    const back = backTargetFor(state);
    if (back) {
      return `
        <header class="app-backbar">
          <button class="app-back" data-action="${back.action}" ${dataAttrs(back.extra)} aria-label="Back to ${escAttr(back.label)}" title="Back to ${escAttr(back.label)}">${icon('arrowLeft', 20, 2)}</button>
          <span class="app-crumb">${esc(back.crumb)}</span>
        </header>`;
    }
  }

  // A live session keeps the wordmark and the stats but loses the tabs --
  // leaving through a tab would strand state.practice / state.pathActive.
  const inSession = SHELL_SESSION_VIEWS.has(state.view);
  const tabs = inSession ? '' : `
      <nav class="app-tabs" aria-label="Primary">
        ${shellTabs(state).map((t) => `<a class="app-tab${t.active ? ' app-tab-active' : ''}" href="${escAttr(t.href)}" data-action="${t.action}"${t.active ? ' aria-current="page"' : ''}>${esc(t.label)}</a>`).join('')}
      </nav>`;

  return `
    <header class="app-nav">
      <div class="app-nav-inner">
        <a class="app-wordmark" href="#/" data-action="openDashboard" title="Home" aria-label="Home">
          <span class="app-wordmark-name">The Sciences</span>
          <span class="app-wordmark-ar" lang="ar" dir="rtl">العُلُوم</span>
        </a>
        ${tabs || '<span style="flex:1;"></span>'}
        ${shellStatsHtml(state)}
      </div>
    </header>`;
}

// Phone-only bottom bar (CSS hides it above 900px, where the same tabs live
// in the top bar instead). Suppressed on the screens that show a back
// chevron and during a live session, for the same reason the tab row is.
function tabBarHtml(state) {
  if (!SHELL_TAB_VIEWS.has(state.view)) return '';
  return `
    <nav class="app-tabbar" aria-label="Primary">
      ${shellTabs(state).map((t) => `
        <a class="app-tabbar-item${t.active ? ' app-tabbar-item-active' : ''}" href="${escAttr(t.href)}" data-action="${t.action}"${t.active ? ' aria-current="page"' : ''}>
          ${icon(t.icon, 19, 2)}
          <span>${esc(t.label)}</span>
        </a>`).join('')}
    </nav>`;
}

function backLink(label, action, extra = '') {
  return `<button class="back-chevron" data-action="${action}" ${extra} aria-label="${escAttr(label)}" title="${escAttr(label)}">${icon('arrowLeft', 20, 2)}</button>`;
}

function progressBar(pct) {
  return `<div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%"></div></div>`;
}

// The masthead every non-full-bleed screen opens with. Library, Schedule,
// Account and Settings each used to emit their own arrangement of title,
// Arabic name and description -- three different description sizes, three
// different top margins, and a Settings page whose display title matched
// nothing else -- so four screens doing the same job looked like four
// different products. `lede` and `actions` are inserted raw so callers can
// pass escBidi'd copy and real buttons; `title`/`ar` are escaped here.
function pageHeaderHtml({ title, ar = '', lede = '', actions = '', tools = '' }) {
  return `
    <header class="page-header">
      <div class="page-title-row">
        <h1 class="page-title">${esc(title)}</h1>
        ${ar ? `<span class="page-title-ar" lang="ar" dir="rtl">${esc(ar)}</span>` : ''}
        ${actions ? `<div class="page-header-actions">${actions}</div>` : ''}
      </div>
      ${lede ? `<p class="page-header-lede">${lede}</p>` : ''}
      ${tools ? `<div class="page-header-tools">${tools}</div>` : ''}
    </header>`;
}

// The range track paints its travelled portion from --range-pct, because
// WebKit has no ::-moz-range-progress equivalent and the alternative is the
// native track, which Chromium renders as a solid dark bar. Set here for the
// first paint; kept in step while dragging by the input handler in main.js.
function rangePct(value, min, max) {
  const v = Number(value);
  const lo = Number(min);
  const hi = Number(max);
  if (!Number.isFinite(v) || !Number.isFinite(lo) || !Number.isFinite(hi) || hi === lo) return '50%';
  const pct = ((v - lo) / (hi - lo)) * 100;
  return `${Math.max(0, Math.min(100, Math.round(pct)))}%`;
}

// One field: label, control, then either its hint or -- if this is the field
// that failed -- its error, right under the input it belongs to rather than
// in a status line at the foot of the form. `control` is raw markup.
function accountFieldHtml({ id, label, control, hint = '', error = null, required = true }) {
  const failed = error && error.field === fieldIdToName(id);
  const errId = `${id}-error`;
  const hintId = `${id}-hint`;
  return `
    <div class="field${failed ? ' field-invalid' : ''}">
      <label class="field-label" for="${escAttr(id)}">${esc(label)}${required ? '<span class="field-required" aria-hidden="true">*</span>' : ''}</label>
      ${control}
      ${failed
        ? `<span class="field-error" id="${escAttr(errId)}" role="alert">${icon('alert', 13, 2)}<span>${esc(error.message)}</span></span>`
        : hint ? `<span class="field-hint" id="${escAttr(hintId)}">${esc(hint)}</span>` : ''}
    </div>`;
}
function fieldIdToName(id) {
  return String(id).replace(/^account-/, '');
}
// aria-invalid + aria-describedby, so the error reaches a screen reader as
// the field's own error and not as an unrelated line of text further down.
function fieldAttrs(name, error) {
  if (!error || error.field !== name) return '';
  return ` aria-invalid="true" aria-describedby="account-${name}-error"`;
}

// A framed, intentional empty state -- icon, a serif title, one line of
// why-it's-empty, and (when there is one) the next action. Replaces the
// bare .empty-state sentences, which read as the screen having given up.
// `note` is inserted raw so callers can escBidi mixed-direction copy.
function emptyStateHtml({ icon: iconName, title, note, action = '' }) {
  return `
    <div class="empty-state-box">
      ${iconName ? `<span class="empty-state-icon">${icon(iconName, 22, 1.5)}</span>` : ''}
      <span class="empty-state-title">${esc(title)}</span>
      ${note ? `<span class="empty-state-note">${note}</span>` : ''}
      ${action}
    </div>`;
}

// The next thing to do: the first incomplete lesson in course order. Since
// isLessonUnlocked already gates lessons sequentially within an unlocked
// module, and isModuleUnlocked gates modules sequentially too, the first
// incomplete lesson found this way is always already reachable -- no
// separate unlocked-check needed. Returns null once every lesson in every
// module is complete.
function findContinueLesson(state, MODULES) {
  for (const m of MODULES) {
    if (!isModuleUnlocked(m.id, state.completed, state.unlockedModules, state.forceUnlockAll)) break;
    for (let i = 0; i < m.lessons.length; i++) {
      const lesson = m.lessons[i];
      if (!isLessonComplete(m.id, lesson.id, state.completed)) {
        return { mod: m, lesson, index: i };
      }
    }
  }
  return null;
}

const ARABESQUE_SVG = `
  <svg width="188" height="26" viewBox="0 0 188 26" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">
    <path d="M94 13 L102 5 L110 13 L102 21 Z"></path>
    <path d="M86 13 C 74 13, 74 3, 62 3 C 50 3, 50 13, 38 13"></path>
    <path d="M86 13 C 74 13, 74 23, 62 23 C 50 23, 50 13, 38 13"></path>
    <path d="M118 13 C 130 13, 130 3, 142 3 C 154 3, 154 13, 166 13"></path>
    <path d="M118 13 C 130 13, 130 23, 142 23 C 154 23, 154 13, 166 13"></path>
    <path d="M38 13 L4 13 M166 13 L184 13"></path>
    <circle cx="4" cy="13" r="2"></circle>
    <circle cx="184" cy="13" r="2"></circle>
  </svg>`;

// --- Hero panel (reusable) -------------------------------------------------
// The bordered, corner-bracketed, watermarked panel the design handoff
// specifies for Home. Reused -- in lighter or heavier configurations -- as
// the page header on Module, Lesson, and Schedule, and (as just the corner
// brackets, via cornerBracketsHtml/frameCls below) around the exercise
// card on Quiz/Practice Mode/تركيب, per the user's request to carry this
// same treatment across the whole app rather than confine it to Home.

// The corner-bracket motif belonged to the previous design; the current one
// carries structure on hairlines and plate edges instead. Kept as a no-op so
// the call sites that frame a panel with it don't each need editing.
function cornerBracketsHtml() {
  return '';
}

function heroBadgeHtml(text) {
  return `<div class="kicker hero-plate-kicker" lang="ar" dir="rtl">${esc(text)}</div>`;
}

// `rows` is [label, value] pairs; value is inserted raw (tabular numbers,
// so callers pass already-formatted strings/numbers, not HTML).
function heroLedgerHtml(rows) {
  return `
    <dl class="hero-plate-ledger">
      ${rows.map(([label, value]) => `<div class="ledger-row"><dt class="ledger-label">${esc(label)}</dt><dd class="ledger-value">${value}</dd></div>`).join('')}
    </dl>`;
}

// title/body are inserted raw (callers esc/escBidi their own content, since
// title often wraps a term in <bdi>); badge/watermark are plain strings.
// sourceRef is a plain string too (e.g. "pp. 6-10").
//
// The shared ink plate: a dark panel with an oversized ghost word bleeding
// off its bottom-right, a gold kicker, a display title over a short gold
// rule, and an optional ledger set against it. Every screen still built on
// this helper (My Path, the library shelf, a book page, mastery complete)
// gets the plate treatment from here rather than restating it.
function heroPanelHtml({ watermark, badge, title, body, actions, ledger, sourceRef }) {
  return `
    <section class="plate hero-plate">
      ${watermark ? `<span aria-hidden="true" class="plate-ghost" lang="ar" dir="rtl">${esc(watermark)}</span>` : ''}
      <div class="hero-plate-inner">
        <div class="hero-plate-main">
          ${badge ? heroBadgeHtml(badge) : ''}
          <h1 class="hero-plate-title">${title}</h1>
          <div class="hero-plate-rule" aria-hidden="true"></div>
          ${sourceRef ? `<p class="hero-plate-ref">${esc(sourceRef)}</p>` : ''}
          ${body ? `<p class="hero-plate-body">${body}</p>` : ''}
          ${actions ? `<div class="hero-plate-actions">${actions}</div>` : ''}
        </div>
        ${ledger || ''}
      </div>
    </section>`;
}

// A plain hairline between stacked sections -- the arabesque medallion the
// previous design used between blocks has no counterpart in this one.
function separatorHtml() {
  return '<div class="section-rule" aria-hidden="true"></div>';
}

// --- Dashboard (Home) -------------------------------------------------
// Rebuilt against design_handoff_ui_redesign: a full-bleed ink hero band
// carrying the greeting, the resume card and the stats ledger; below it the
// module list grouped by chapter heading with status rings, and a rail
// holding today's progress against the deadline. The data and the
// data-action wiring are the pre-existing ones -- this is markup only.

// Circular progress indicator on the hero's resume card. r=22 inside a
// 52-unit box gives a 138.23 circumference, which the dash offset works
// against; the ring reads as a stroke, never a filled pie.
const RING_CIRCUMFERENCE = 138.2;
function progressRingHtml(pct, size = 46) {
  const clamped = Math.max(0, Math.min(100, Math.round(pct)));
  const offset = RING_CIRCUMFERENCE * (1 - clamped / 100);
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 52 52" style="flex:none;" aria-hidden="true">
      <circle class="ring-track" cx="26" cy="26" r="22" fill="none" stroke="var(--color-plate-line)" stroke-width="3"/>
      <circle class="ring-fill" cx="26" cy="26" r="22" fill="none" stroke="var(--color-accent)" stroke-width="3"
        stroke-dasharray="${RING_CIRCUMFERENCE}" stroke-dashoffset="${offset.toFixed(1)}" transform="rotate(-90 26 26)"/>
      <text x="26" y="30" text-anchor="middle" font-size="11" fill="var(--color-plate-text)" class="home-ring-label">${clamped}%</text>
    </svg>`;
}

function formatDeadlineDate(iso) {
  const parsed = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return iso;
  return parsed.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Today's target against the course deadline -- the same arithmetic the
// Schedule tab already shows, surfaced on Home's
// rail so the deadline isn't invisible until you go looking for it. Returns
// null when no deadline is set, or when there is nothing left to schedule.
function deadlineSummary(state, MODULES) {
  const remaining = Math.max(0, totalLessons() - totalLessonsCleared(state.completed));
  const deadline = state.scheduleDeadline?.[state.courseId];
  if (!deadline || remaining === 0) return null;
  const resetHour = state.dailyResetHour || 0;
  const today = todayISO(resetHour);
  const diffDays = Math.round((new Date(`${deadline}T00:00:00`) - new Date(`${today}T00:00:00`)) / 86400000);
  // Scoped to this course's modules: state.completed is a flat dict shared
  // by every course, so a lesson finished today elsewhere must not count.
  let completedToday = 0;
  MODULES.forEach((m) => {
    Object.values(state.completed[m.id] || {}).forEach((v) => { if (v === today) completedToday += 1; });
  });
  const dailyTarget = Math.ceil(remaining / Math.max(1, diffDays));
  const done = Math.min(completedToday, dailyTarget);
  return {
    deadline,
    diffDays,
    overdue: diffDays < 0,
    dailyTarget,
    done,
    remaining,
    pct: dailyTarget ? Math.round((done / dailyTarget) * 100) : 100,
  };
}

function homeHeroHtml(state, MODULES) {
  const continueInfo = findContinueLesson(state, MODULES);
  const lessonsCleared = totalLessonsCleared(state.completed);
  const streak = state.streak || 1;
  const li = levelInfo(state.xp);
  const summary = deadlineSummary(state, MODULES);

  // The hero's headline is the largest type on the app's first screen, so it
  // had better be true. It was fixed at "Keep going, you're close." -- which
  // a reader opening the app for the first time, with 0 of 138 lessons done,
  // reads as the app not knowing anything about them. Three states instead:
  // an opening, the long middle, and the last stretch.
  const clearedRatio = totalLessons() ? lessonsCleared / totalLessons() : 0;
  let title = lessonsCleared === 0
    ? 'Begin at the beginning.'
    : clearedRatio >= 0.8
      ? "Keep going, you're close."
      : 'Pick up where you left off.';
  let resumeHtml;
  if (continueInfo) {
    const { mod, lesson, index } = continueInfo;
    const done = completedCount(mod.id, state.completed);
    const pct = mod.lessons.length ? (done / mod.lessons.length) * 100 : 0;
    resumeHtml = `
      <div class="home-resume">
        ${progressRingHtml(pct)}
        <div class="home-resume-body">
          <div class="kicker">Continue</div>
          <div class="home-resume-title" lang="ar" dir="rtl">${esc(mod.title)}</div>
          <div class="home-resume-meta">Lesson ${index + 1} · <bdi lang="ar">${esc(lesson.title)}</bdi></div>
        </div>
        <button class="btn btn-primary only-desktop" data-action="continueLesson" data-module-id="${escAttr(mod.id)}" data-lesson-id="${escAttr(lesson.id)}">${lessonsCleared > 0 ? 'Resume' : 'Start'} lesson</button>
      </div>
      <button class="btn btn-primary btn-block only-phone home-resume-cta" data-action="continueLesson" data-module-id="${escAttr(mod.id)}" data-lesson-id="${escAttr(lesson.id)}">${lessonsCleared > 0 ? 'Resume' : 'Start'} lesson</button>`;
  } else {
    title = 'Every lesson, complete.';
    resumeHtml = `
      <div class="home-resume">
        <div class="home-resume-body">
          <div class="kicker">تمّ بحمد الله</div>
          <div class="home-resume-meta">All ${totalLessons()} lessons across every chapter are finished.</div>
        </div>
        <button class="btn btn-primary" data-action="openSchedule">Go to Schedule</button>
      </div>`;
  }

  return `
    <section class="home-hero">
      <div class="home-hero-inner">
        <div>
          <div class="home-hero-top">
            <div class="home-hero-greeting" lang="ar" dir="rtl">السلام عليكم</div>
            <button class="home-hero-pill only-phone" data-action="openAchievements" title="Streak and level">
              <span>${icon('flame', 13, 2)}${streak}</span>
              <span class="home-hero-pill-sep" aria-hidden="true"></span>
              <span>${icon('shield', 13, 2)}${li.level}</span>
            </button>
          </div>
          <h1 class="home-hero-title">${title}</h1>
          <div class="rule-accent" aria-hidden="true"></div>
          ${resumeHtml}
        </div>
        <div class="home-hero-ledger only-desktop">
          <div class="ledger-row"><span class="ledger-label">Lessons cleared</span><span class="ledger-value">${lessonsCleared} / ${totalLessons()}</span></div>
          <div class="ledger-row"><span class="ledger-label">Streak</span><span class="ledger-value">${streak} day${streak === 1 ? '' : 's'}</span></div>
          <div class="ledger-row"><span class="ledger-label">Level</span><span class="ledger-value">${li.level} · ${state.xp.toLocaleString('en-GB')} XP</span></div>
          ${summary ? `<div class="ledger-row"><span class="ledger-label">${summary.overdue ? 'Deadline passed' : 'Deadline'}</span><span class="ledger-value ledger-value-accent">${esc(formatDeadlineDate(summary.deadline))}</span></div>` : ''}
        </div>
      </div>
    </section>`;
}

// Status ring for a module row: a check once it's finished, its own number
// while it's the one in hand, a lock when it isn't reachable yet.
function moduleRingHtml(index, { done, current, unlocked }) {
  if (done) return `<span class="status-ring status-ring-done">${icon('check', 13, 2.6)}</span>`;
  if (!unlocked) return `<span class="status-ring">${icon('lock', 11, 2)}</span>`;
  return `<span class="status-ring${current ? ' status-ring-current' : ''}">${index + 1}</span>`;
}

// The course switcher, in place of the picker screen the previous design
// opened for this. A locked course routes to the same unlock prompt its old
// card did rather than switching to a course that cannot be entered.
function courseMenuHtml(state) {
  return `
    <div class="course-menu" role="menu">
      ${COURSES.map((course) => {
        const active = course.id === state.courseId;
        const unlocked = isCourseUnlocked(course, state.completed, state.unlockedCourses, state.forceUnlockAll);
        const count = course.modules.length;
        const attrs = unlocked
          ? `data-action="chooseCourse" data-course-id="${escAttr(course.id)}"`
          : `data-action="openUnlockPrompt" data-target-type="course" data-target-id="${escAttr(course.id)}"`;
        return `
          <button class="course-menu-item${active ? ' is-active' : ''}${unlocked ? '' : ' is-locked'}" ${attrs} role="menuitem">
            <span class="course-menu-ar" lang="ar" dir="rtl">${esc(course.arabicName || course.name)}</span>
            <span class="course-menu-meta">${esc(course.name)} · ${count} module${count === 1 ? '' : 's'}${unlocked ? '' : ' · locked'}</span>
          </button>`;
      }).join('')}
    </div>`;
}

function dashboardHtml(state, MODULES, revealedKeys = new Set()) {
  const continueInfo = findContinueLesson(state, MODULES);
  const currentModuleId = continueInfo ? continueInfo.mod.id : null;
  const summary = deadlineSummary(state, MODULES);
  const activeCourse = COURSES.find((c) => c.id === state.courseId);
  const completedModules = MODULES.filter((m) => m.lessons.length && completedCount(m.id, state.completed) === m.lessons.length).length;

  let lastGroupKey = null;
  const rows = MODULES.map((m, i) => {
    // One heading per distinct (heading, subheading) pair, exactly as the
    // grid did -- the chapter rule replaces the old two-sided divider.
    const groupKey = `${m.heading || ''}|${m.subheading || ''}`;
    const groupChanged = groupKey !== lastGroupKey;
    const headingChanged = groupChanged && m.heading && m.heading !== (lastGroupKey || '').split('|')[0];
    const subheadingChanged = groupChanged && m.subheading && m.subheading !== m.heading;
    lastGroupKey = groupKey;

    let headingHtml = '';
    if (headingChanged) {
      headingHtml += `<div class="chapter-rule"><span class="chapter-rule-text" lang="ar" dir="rtl">${esc(m.heading)}</span><span class="chapter-rule-line" aria-hidden="true"></span></div>`;
    }
    if (subheadingChanged) {
      headingHtml += `<div class="chapter-subrule" lang="ar" dir="rtl">${esc(m.subheading)}</div>`;
    }

    const total = m.lessons.length;
    const done = completedCount(m.id, state.completed);
    const unlocked = isModuleUnlocked(m.id, state.completed, state.unlockedModules, state.forceUnlockAll);
    const isDone = total > 0 && done === total;
    const isCurrent = m.id === currentModuleId;

    let status;
    if (!unlocked) status = 'Locked';
    else if (isDone) status = 'Complete';
    else if (done > 0) status = `In progress · ${done} of ${total}`;
    else status = `${total} lesson${total === 1 ? '' : 's'}`;

    // A locked module opens the confirmation prompt rather than sitting
    // dead, same as the card grid it replaces.
    const clickAttrs = unlocked
      ? `data-action="openModule" data-module-id="${escAttr(m.id)}"`
      : `data-action="openUnlockPrompt" data-target-type="module" data-target-id="${escAttr(m.id)}"`;
    const rowCls = [
      'module-row',
      isCurrent ? 'module-row-current' : '',
      isDone ? 'module-row-done' : '',
      !unlocked ? 'module-row-locked' : '',
    ].filter(Boolean).join(' ');

    const stateIcon = isDone ? icon('check', 14, 2.4) : isCurrent ? icon('clock', 14, 1.8) : !unlocked ? icon('lock', 13, 2) : '';
    return `${headingHtml}
      <button class="${rowCls}" ${clickAttrs}>
        <span class="only-desktop module-row-ringwrap">${moduleRingHtml(i, { done: isDone, current: isCurrent, unlocked })}</span>
        <span class="module-row-num only-phone">${i + 1}</span>
        <span class="module-row-body">
          <span class="module-row-title" lang="ar" dir="rtl">${esc(m.title)}</span>
          <span class="module-row-status">${esc(status)}</span>
        </span>
        ${stateIcon ? `<span class="module-row-state only-phone">${stateIcon}</span>` : ''}
      </button>`;
  }).join('');

  // "Which module was that lesson in again?" -- a course runs to 138 lessons
  // across 30 modules, so finding one already seen otherwise means scrolling
  // the whole list and opening modules to check. The search itself
  // (searchLessons/searchOpenLesson in js/main.js, lessonSearchResultsHtml
  // below, .home-search in styles.css, and the .lesson-search-results
  // entrance in js/motion.js) already existed on every side but this one --
  // the input was lost in the redesign, which left the feature reachable by
  // nothing at all.
  const query = (state.lessonSearchQuery || '').trim();
  return `
    <div class="home-page">
      ${homeHeroHtml(state, MODULES)}
      <div class="home-body">
        <section class="home-modules-col">
          <div class="section-head">
            <h2 class="section-head-title">Your modules</h2>
            <button class="home-course-switch" data-action="toggleCourseMenu" title="Switch course"
              aria-expanded="${state.courseMenuOpen ? 'true' : 'false'}">
              <span lang="ar" dir="rtl">${esc(activeCourse ? activeCourse.arabicName || activeCourse.name : '')}</span>
              <span aria-hidden="true">▾</span>
            </button>
            <span class="section-head-meta only-desktop">${completedModules} / ${MODULES.length} complete</span>
          </div>
          ${state.courseMenuOpen ? courseMenuHtml(state) : ''}
          <input id="lesson-search-input" class="home-search" type="search" data-action="searchLessons"
            placeholder="Search this course's lessons…" value="${escAttr(state.lessonSearchQuery || '')}"
            autocomplete="off" aria-label="Search lessons in this course">
          ${query
            ? lessonSearchResultsHtml(MODULES, state, query)
            : `<div class="module-list noscroll">${rows}</div>`}
        </section>
        <aside class="home-rail">
          ${summary ? `
          <div class="home-rail-card only-desktop">
            <div class="kicker">Today</div>
            <div class="home-rail-figure"><strong>${summary.done}</strong> of ${summary.dailyTarget} lesson${summary.dailyTarget === 1 ? '' : 's'} done</div>
            <div class="home-rail-track" aria-hidden="true"><span class="home-rail-fill" style="width:${summary.pct}%"></span></div>
            <p class="home-rail-note">${summary.overdue
              ? `Your deadline passed ${Math.abs(summary.diffDays)} day${Math.abs(summary.diffDays) === 1 ? '' : 's'} ago with ${summary.remaining} left.`
              : `${summary.done >= summary.dailyTarget ? "You're on course for" : 'Keep this pace to finish by'} ${esc(formatDeadlineDate(summary.deadline))}.`}
              <button class="text-link-btn" data-action="openSchedule">Open schedule</button></p>
          </div>` : `
          <!-- Without this, the desktop rail rendered nothing at all until a
               deadline existed: a new reader met a 320px column of blank
               paper beside the one list on the page. The rail's whole subject
               is progress against a target, so with no target set the honest
               thing for it to hold is the invitation to set one. -->
          <div class="home-rail-invite only-desktop">
            <div class="kicker">Today</div>
            <p class="home-rail-invite-title">No target date yet</p>
            <p class="home-rail-note">Pick the date you want to finish this course and this rail will track the day's target against it.</p>
            <button class="btn btn-secondary btn-sm" data-action="openSchedule">Set a target date</button>
          </div>`}
          <div class="home-explore only-phone">
            <div class="home-explore-title">Explore</div>
            <div class="home-explore-grid">
              <button class="home-explore-card" data-action="openLibrary">
                ${icon('book', 16, 2)}
                <span class="home-explore-name">Library</span>
                <span class="home-explore-meta">Graded readers</span>
              </button>
              <button class="home-explore-card" data-action="openSchedule">
                ${icon('calendar', 16, 2)}
                <span class="home-explore-name">Schedule</span>
                <span class="home-explore-meta">${summary ? `${summary.dailyTarget} a day` : 'Set a deadline'}</span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>`;
}

// Live "which module was that lesson in again?" search over lesson
// titles/subtitles across every unlocked module of the current course --
// scoped to titles/subtitles only, not full-text over concept bodies, to
// keep this a lightweight lookup rather than a search engine. Locked
// lessons are excluded: search is for finding something you've already
// seen, not previewing what's still ahead (which the module page's own
// lock affordance already handles).
function lessonSearchResultsHtml(MODULES, state, query) {
  const q = query.toLowerCase();
  const results = [];
  MODULES.forEach((m) => {
    if (!isModuleUnlocked(m.id, state.completed, state.unlockedModules, state.forceUnlockAll)) return;
    m.lessons.forEach((l) => {
      if (!isLessonUnlocked(m.id, l.id, state.completed, state.unlockedModules, state.forceUnlockAll)) return;
      const haystack = `${l.title} ${l.subtitle || ''}`.toLowerCase();
      if (haystack.includes(q)) results.push({ mod: m, lesson: l });
    });
  });
  if (!results.length) {
    return emptyStateHtml({
      icon: 'search',
      title: 'No matches',
      note: `No unlocked lesson is titled anything like "${escBidi(query)}". Try a shorter word, or the Arabic title.`,
    });
  }
  return `
    <div class="lesson-search-results">
      ${results.map(({ mod: m, lesson: l }) => `
        <button class="lesson-search-row" data-action="searchOpenLesson" data-module-id="${escAttr(m.id)}" data-lesson-id="${escAttr(l.id)}">
          <span class="lesson-search-row-body">
            <span class="lesson-search-row-title" lang="ar" dir="rtl">${esc(l.title)}</span>
            <span class="lesson-search-row-sub">${escBidi(l.subtitle || '')}</span>
          </span>
          <span class="lesson-search-row-module" lang="ar" dir="rtl">${esc(m.title)}</span>
        </button>`).join('')}
    </div>`;
}

// --- Module (lesson grid) ------------------------------------------------

function modulePageHtml(state, MODULES) {
  const mod = MODULES.find((m) => m.id === state.moduleId);
  if (!mod) return dashboardHtml(state, MODULES);

  const total = mod.lessons.length;
  const done = completedCount(mod.id, state.completed);
  const pct = total ? Math.round((done / total) * 100) : 0;
  const bankPool = getBankPool(mod.id, state.completed, state.forceUnlockAll);
  const index = MODULES.indexOf(mod) + 1;
  const chapterPath = [mod.heading, mod.subheading].filter(Boolean).join(' · ');
  // The first lesson still to do -- the one the row list points at.
  const currentLesson = mod.lessons.find((l) => !isLessonComplete(mod.id, l.id, state.completed)
    && isLessonUnlocked(mod.id, l.id, state.completed, state.unlockedModules, state.forceUnlockAll));

  const rows = mod.lessons.map((lesson, i) => {
    const unlocked = isLessonUnlocked(mod.id, lesson.id, state.completed, state.unlockedModules, state.forceUnlockAll);
    const complete = isLessonComplete(mod.id, lesson.id, state.completed);
    // Mastered: this lesson's Mastery test has been passed at 100%.
    // Display-only -- the row's own click is openLessonPreview either way.
    const masteryEntry = state.masteryV2[`${mod.id}_${lesson.id}`];
    const mastered = complete && masteryEntry && masteryEntry.passed;
    const isCurrent = currentLesson && lesson.id === currentLesson.id;
    const score = (state.quizScores[mod.id] || {})[lesson.id];

    let meta = '';
    if (complete && score) {
      meta = `<span class="lesson-row-meta">Quiz ${score.correct} / ${score.total}${mastered ? ' · Mastered' : ''}</span>`;
    } else if (complete) {
      meta = `<span class="lesson-row-meta">Complete${mastered ? ' · Mastered' : ''}</span>`;
    } else if (isCurrent) {
      const conceptCount = (lesson.concepts || []).length;
      meta = `<span class="lesson-row-cta">Continue · ${conceptCount} concept${conceptCount === 1 ? '' : 's'}, then a quiz${icon('chevronRight', 13, 2)}</span>`;
    }

    const rowCls = [
      'lesson-row',
      isCurrent ? 'lesson-row-current' : '',
      !unlocked ? 'lesson-row-locked' : '',
    ].filter(Boolean).join(' ');

    return `
      <button class="${rowCls}" ${unlocked ? `data-action="openLessonPreview" data-lesson-id="${escAttr(lesson.id)}"` : 'disabled'}>
        ${moduleRingHtml(i, { done: complete, current: isCurrent, unlocked })}
        <span class="lesson-row-body">
          <span class="lesson-row-title" lang="ar" dir="rtl">${esc(lesson.title)}</span>
          <span class="lesson-row-subtitle">${escBidi(lesson.subtitle || '')}</span>
          ${meta}
        </span>
      </button>`;
  }).join('');

  return `
    <div class="module-page-wrap">
      ${navBackRowHtml(state)}
    <div class="module-page">
      <section>
        <div class="plate module-cover">
          <span class="plate-ghost" aria-hidden="true">${esc(arabicNumeral(index))}</span>
          <div class="module-cover-inner">
            ${chapterPath ? `<div class="module-cover-path" lang="ar" dir="rtl">${esc(chapterPath)}</div>` : ''}
            <h1 class="module-cover-title" lang="ar" dir="rtl">${esc(mod.title)}</h1>
            <div class="module-cover-rule" aria-hidden="true"></div>
            <p class="module-cover-blurb">${escBidi(mod.blurb)}</p>
            <div class="module-cover-progress">
              <span class="module-cover-track" aria-hidden="true"><span class="module-cover-fill" style="width:${pct}%"></span></span>
              <span class="module-cover-count">${done} / ${total} lesson${total === 1 ? '' : 's'}</span>
            </div>
          </div>
        </div>

        <button class="entry-row" ${bankPool.length ? 'data-action="openPractice"' : 'disabled title="Complete a lesson first — Practice Mode only draws from finished lessons\' cards"'}>
          ${icon('pencil', 17, 1.8)}
          <span class="entry-row-body">
            <span class="entry-row-title">Practice Mode</span>
            <span class="entry-row-meta">${bankPool.length ? `${bankPool.length} cards from lessons you've finished` : 'Finish a lesson to unlock'}</span>
          </span>
          <span class="entry-row-chevron">${icon('chevronRight', 15, 2)}</span>
        </button>

        <div class="module-setup-inline">${state.practiceSetupOpen && state.practiceModuleId === mod.id ? practiceSetupPanelHtml(state, mod) : ''}</div>

        <div class="lesson-section-head">
          <span class="lesson-section-title">Lessons</span>
          <span class="lesson-section-note">In order</span>
        </div>
        <div class="lesson-list">${rows}</div>

        ${done > 0 ? `<button class="module-reset" data-action="openResetModulePrompt" data-module-id="${escAttr(mod.id)}">Reset this module's progress</button>` : ''}
      </section>

      <aside class="module-rail">
        <div class="module-setup-rail">${state.practiceSetupOpen && state.practiceModuleId === mod.id ? practiceSetupPanelHtml(state, mod) : ''}</div>
        <div class="module-rail-card">
          <div class="kicker">This module</div>
          <div class="ledger-row"><span class="ledger-label">Lessons done</span><span class="ledger-value">${done} / ${total}</span></div>
          <div class="ledger-row"><span class="ledger-label">Progress</span><span class="ledger-value">${pct}%</span></div>
          <div class="ledger-row"><span class="ledger-label">Cards in pool</span><span class="ledger-value">${bankPool.length}</span></div>
        </div>
      </aside>
    </div>
    ${modulePagerHtml(state, MODULES, mod)}
    </div>`;
}

// Sideways movement between modules, so finishing one does not mean a trip
// back to Home to find the one after it. A locked neighbour is shown but
// inert rather than hidden -- "there is a next module and it is not open
// yet" is more use than an empty space, and it reuses the same lock
// affordance the module list itself already carries.
function modulePagerHtml(state, MODULES, mod) {
  const i = MODULES.indexOf(mod);
  const prev = i > 0 ? MODULES[i - 1] : null;
  const next = i >= 0 && i + 1 < MODULES.length ? MODULES[i + 1] : null;
  if (!prev && !next) return '';
  const side = (m, dir) => {
    if (!m) return '<span class="module-pager-slot"></span>';
    const unlocked = isModuleUnlocked(m.id, state.completed, state.unlockedModules, state.forceUnlockAll);
    const arrow = dir === 'prev' ? icon('arrowLeft', 14, 2) : icon('arrowRight', 14, 2);
    const body = `
      <span class="module-pager-body">
        <span class="module-pager-label">${dir === 'prev' ? 'Previous module' : 'Next module'}</span>
        <span class="module-pager-title" lang="ar" dir="rtl">${esc(m.title)}</span>
      </span>`;
    const mark = unlocked ? arrow : icon('lock', 13, 2);
    const inner = dir === 'prev' ? `${mark}${body}` : `${body}${mark}`;
    const cls = `module-pager-slot module-pager-btn module-pager-${dir}${unlocked ? '' : ' is-locked'}`;
    return unlocked
      ? `<button class="${cls}" data-action="openModule" data-module-id="${escAttr(m.id)}">${inner}</button>`
      : `<span class="${cls}">${inner}</span>`;
  };
  return `
    <nav class="module-pager" aria-label="Nearby modules">
      ${side(prev, 'prev')}
      ${side(next, 'next')}
    </nav>`;
}

// --- "Start lesson" modal ------------------------------------------------

function lessonPreviewHtml(state, MODULES) {
  if (!state.lessonPreviewId) return '';
  const mod = MODULES.find((m) => m.id === state.moduleId);
  const idx = mod ? mod.lessons.findIndex((l) => l.id === state.lessonPreviewId) : -1;
  if (!mod || idx < 0) return '';
  const lesson = mod.lessons[idx];
  const complete = isLessonComplete(mod.id, lesson.id, state.completed);
  const masteryEntry = state.masteryV2[`${mod.id}_${lesson.id}`];
  const mastered = complete && masteryEntry && masteryEntry.passed;
  // enterLesson (js/main.js) resumes an incomplete lesson at whichever
  // position it was last left -- concepts or a live quiz question -- so
  // this button's copy needs to say which one is actually about to happen.
  // Without this, "Start lesson" was shown even when the real result was
  // dropping straight into "Question 1 of N" with no re-read of the
  // content, surprising anyone returning after a few days expecting a
  // refresher.
  const resumingQuiz = !complete && state.lessonPos[`${mod.id}_${lesson.id}`]?.view === 'quiz';

  // A completed lesson offers both Review (reopen the lesson content) and
  // Mastery (a fresh 100%-required test over its تركيب+mcq+quiz pool, see
  // startMasteryV2 in js/main.js) side by side -- this same modal opens
  // identically whether the lesson was reached from a module page's row
  // (openLessonPreview) or a My Path lesson node (enterPathLesson), so
  // Mastery is reachable from both without any separate UI of its own.
  const actionButtons = complete
    ? `
      <button class="btn btn-secondary" data-action="startMasteryV2" data-lesson-id="${escAttr(lesson.id)}">${mastered ? 'Retake Mastery' : 'Mastery'}</button>
      <button class="btn btn-primary" data-action="startLesson" data-lesson-id="${escAttr(lesson.id)}">Review</button>`
    : `<button class="btn btn-primary" data-action="startLesson" data-lesson-id="${escAttr(lesson.id)}">${resumingQuiz ? 'Resume the quiz' : 'Start lesson'}</button>`;

  return `
    <div class="modal-backdrop" data-action="closeLessonPreview">
      <div class="modal" role="dialog" aria-modal="true" tabindex="-1" aria-label="${escAttr(lesson.title)}">
        <div class="card-kicker modal-kicker">LESSON ${idx + 1} &middot; ${esc(mod.title)}</div>
        <h2>${esc(lesson.title)}</h2>
        <p class="modal-sub">${escBidi(lesson.subtitle || '')}</p>
        ${mastered ? `<div class="tag tag-accent" style="margin-top:8px;">${icon('award', 11, 2.6)} Mastered</div>` : ''}
        <div class="modal-buttons">
          <button class="btn btn-secondary" data-action="cancelLessonPreview">Cancel</button>
          ${actionButtons}
        </div>
      </div>
    </div>`;
}

// --- XP toast + badge-unlock modal ---------------------------------------

function toastHtml(state) {
  if (!state.toast) return '';
  return `<div class="xp-toast" role="status">${esc(state.toast)}</div>`;
}

function badgeModalHtml(state) {
  if (!state.badgeModal) return '';
  const b = state.badgeModal;
  return `
    <div class="modal-backdrop" style="z-index:60;" data-action="closeBadgeModal">
      <div class="modal" role="dialog" aria-modal="true" tabindex="-1" aria-label="${escAttr(b.name)}">
        <div class="badge-modal-icon">${icon('award', 36, 1.6)}</div>
        <h2 class="badge-modal-title">Badge earned</h2>
        <p class="badge-modal-desc">${esc(b.name)} — ${esc(b.desc)}</p>
        <div class="modal-buttons">
          <button class="btn btn-primary" data-action="closeBadgeModal">Continue</button>
        </div>
      </div>
    </div>`;
}

function forceUnlockPromptHtml(state) {
  if (!state.forceUnlockPrompt) return '';
  return `
    <div class="modal-backdrop" data-action="closeForceUnlockPrompt">
      <div class="modal force-unlock-modal" role="dialog" aria-modal="true" tabindex="-1" aria-label="Turn off course locks">
        <div class="card-kicker modal-kicker">COURSE LOCKS</div>
        <h2>Unlock everything?</h2>
        <p class="modal-sub">This opens every lesson, path group, vocab item, Tarkeeb exercise, and quiz. It does not mark lessons complete, award badges, or change your scores.</p>
        <p class="modal-sub">You can turn course locks back on later and your original progress will still be there.</p>
        <div class="modal-buttons">
          <button class="btn btn-secondary" data-action="cancelForceUnlockAll">Cancel</button>
          <button class="btn btn-primary" data-action="confirmForceUnlockAll">Unlock everything</button>
        </div>
      </div>
    </div>`;
}

// --- Module progress reset confirm modal ----------------------------------
// Opened by the "Reset progress" button on a module page (modulePageHtml).
// Destructive: wipes completed/quizScores/exStates/revealState/lessonPos/
// masteryV2/practiceHistory for the affected module. Confirmed via
// confirmResetModule in js/main.js.
function resetModulePromptHtml(state, MODULES) {
  const moduleId = state.resetModulePromptId;
  if (!moduleId) return '';
  const mod = MODULES.find((m) => m.id === moduleId);
  if (!mod) return '';
  return `
    <div class="modal-backdrop" data-action="closeResetModulePrompt">
      <div class="modal" role="dialog" aria-modal="true" tabindex="-1" aria-label="Reset module progress">
        <div class="card-kicker modal-kicker">RESET PROGRESS</div>
        <h2>${esc(mod.title)}</h2>
        <p class="modal-sub">This will clear all completed lessons, quiz scores, exercise states, and mastery results for this module. Your XP and badges are not affected.</p>
        <p class="modal-sub">This cannot be undone.</p>
        <div class="modal-buttons">
          <button class="btn btn-secondary" data-action="cancelResetModulePrompt">Cancel</button>
          <button class="btn btn-danger" data-action="confirmResetModule" data-module-id="${escAttr(mod.id)}">Reset module</button>
        </div>
      </div>
    </div>`;
}

// Confirms before a header control (brand logo, course-switch, achievements
// pill -- the three that stay clickable even mid-session, see headerHtml)
// silently discards an in-progress Practice/Revision/Mastery/checkpoint
// attempt, or a live lesson quiz, that already has an answer logged. Mirrors
// resetModulePromptHtml's
// shape; see state.leaveSessionPromptTarget's own comment in js/state.js.
function leaveSessionPromptHtml(state) {
  if (!state.leaveSessionPromptTarget) return '';
  return `
    <div class="modal-backdrop" data-action="closeLeaveSessionPrompt">
      <div class="modal" role="dialog" aria-modal="true" tabindex="-1" aria-label="Leave this session?">
        <div class="card-kicker modal-kicker">IN PROGRESS</div>
        <h2>Leave this session?</h2>
        <p class="modal-sub">Your answers so far in this attempt won't be saved. Anything you'd already completed before it isn't affected.</p>
        <div class="modal-buttons">
          <button class="btn btn-secondary" data-action="cancelLeaveSessionPrompt">Cancel</button>
          <button class="btn btn-danger" data-action="confirmLeaveSession">Leave session</button>
        </div>
      </div>
    </div>`;
}

// --- Advanced-course/path/module unlock prompt -----------------------------
// Opened from a locked course row in Home's course menu, a locked My Path
// advanced-track card, or a locked module's dashboard card (all use
// data-action="openUnlockPrompt", see the actions in js/main.js). These are
// direct, confirmed access overrides; they do not mark progress complete.
function unlockPromptLabel(state) {
  const p = state.unlockPrompt;
  if (!p) return null;
  if (p.type === 'course') {
    const course = COURSES.find((c) => c.id === p.id);
    if (!course) return null;
    return {
      name: course.name, message: course.lockedMessage,
      directUnlock: true,
      noun: 'course',
    };
  }
  if (p.type === 'track') {
    const track = PATH_TRACKS.find((t) => t.id === p.id);
    if (!track) return null;
    return {
      name: track.title, message: track.lockedMessage,
      directUnlock: true,
      noun: 'path',
    };
  }
  const mod = getModule(p.id);
  if (!mod) return null;
  return {
    name: mod.title, message: 'Locked until the previous module is complete.',
    directUnlock: true,
    noun: 'module',
  };
}

// req: "a mix of tarkeeb and mcqs, or mcqs only if there are no tarkeeb
// questions" -- described up front so the learner knows what they're
// about to take, before startUnlockTest builds the actual queue.
function unlockTestCompositionText(pool, length) {
  const total = Math.min(length, pool.length);
  if (!total) return 'Not enough content yet to build this test.';
  const hasTarkeeb = pool.some((e) => e.item.kind === 'tarkeeb');
  return hasTarkeeb
    ? `${total} questions — a mix of تركيب and multiple choice.`
    : `${total} multiple-choice questions.`;
}

// Its own flat/sharp-cornered shape (NOT the shared .modal/.modal-backdrop
// that the badge and lesson-preview modals use) -- this one is opened from
// Home's course menu, My Path's group cards, and the
// dashboard's module cards, so it's styled to match those (hairline divider
// border, 2px corners, no drop shadow, .ds-btn buttons) rather than the
// rounder legacy modal shape.
function unlockPromptHtml(state) {
  if (!state.unlockPrompt) return '';
  const label = unlockPromptLabel(state);
  if (!label) return '';
  if (label.directUnlock) {
    const consequence = label.noun === 'module'
      ? 'It does not mark previous modules or lessons complete.'
      : `It does not mark any lessons complete, award badges, or unlock the matching advanced ${label.noun === 'path' ? 'courses' : 'path'}.`;
    return `
    <div class="unlock-modal-backdrop" data-action="closeUnlockPrompt">
      <div class="unlock-modal" role="dialog" aria-modal="true" tabindex="-1" aria-label="Unlock ${escAttr(label.noun)}">
        <span class="unlock-modal-icon">${icon('lock', 18, 1.8)}</span>
        <h2 class="unlock-modal-title">Unlock ${esc(label.name)}?</h2>
        <p class="unlock-modal-sub">${esc(label.message || '')}</p>
        <p class="unlock-modal-sub">This opens only this ${esc(label.noun)}. ${esc(consequence)}</p>
        <div class="unlock-modal-buttons">
          <button class="btn btn-secondary" data-action="closeUnlockPrompt">Cancel</button>
          <button class="btn btn-primary" data-action="confirmIndividualUnlock">Unlock ${esc(label.noun)}</button>
        </div>
      </div>
    </div>`;
  }
  const composition = unlockTestCompositionText(label.pool, label.length);
  const canStart = label.pool.length > 0;
  return `
    <div class="unlock-modal-backdrop" data-action="closeUnlockPrompt">
      <div class="unlock-modal" role="dialog" aria-modal="true" tabindex="-1" aria-label="Unlock test">
        <span class="unlock-modal-icon">${icon('lock', 18, 1.8)}</span>
        <h2 class="unlock-modal-title">${esc(label.name)} is locked</h2>
        <p class="unlock-modal-sub">${esc(label.message || '')}</p>
        <p class="unlock-modal-sub">Pass a test on ${esc(label.sourceDescription)} to unlock it early. ${esc(composition)}</p>
        <div class="unlock-modal-buttons">
          <button class="btn btn-secondary" data-action="closeUnlockPrompt">Cancel</button>
          ${canStart ? `<button class="btn btn-primary" data-action="startUnlockTest">Start Test</button>` : ''}
        </div>
      </div>
    </div>`;
}

// --- MCQ option rendering (shared) --------------------------------------

// `order` lists the ORIGINAL option indices in the order they should appear.
// data-option always carries the original index, so `selected` and `correct`
// stay meaningful no matter how the options are arranged on screen.
function renderMcqOptions({ options, correct, selected, submitted, actionName, extraData = '', order }) {
  const seq = order && order.length === options.length ? order : options.map((_, i) => i);
  return `
  <div class="mcq-options">
    ${seq.map((orig, pos) => {
      let cls = 'mcq-option';
      if (selected === orig) cls += ' selected';
      if (submitted) {
        if (orig === correct) {
          cls += ' correct';
        } else if (orig === selected) {
          cls += ' incorrect';
        }
      }
      return `<button class="${cls}" data-action="${actionName}" data-option="${orig}" ${extraData} ${submitted ? 'disabled' : ''}>
        <span class="mcq-letter">${String.fromCharCode(65 + pos)}</span>
        <span class="mcq-text">${escBidi(options[orig])}</span>
      </button>`;
    }).join('')}
  </div>`;
}

function checkButton(actionName, enabled, extraData = '') {
  return `<button class="btn btn-primary" data-action="${actionName}" ${extraData} ${enabled ? '' : 'disabled'}>Check</button>`;
}

// --- Concept exercise: chip-style choices ---------------------------------
// Distinct from renderMcqOptions (the lettered-circle style used by the
// lesson quiz and Practice Mode MCQ, see the handoff's separate Quiz-screen
// component) -- concept exercises render as small wrapping pill buttons,
// matching the handoff's "Try It" exercise cards.
function renderExerciseChoices({ options, correct, selected, submitted, actionName, extraData = '', order, prefix = '', revealedKeys = null }) {
  const seq = order && order.length === options.length ? order : options.map((_, i) => i);
  const choicesKey = prefix ? `${prefix}_choices` : '';
  const containerCls = choicesKey ? revealCls(choicesKey, 'exercise-choices', revealedKeys) : 'exercise-choices';
  return `
  <div class="${containerCls}">
    ${seq.map((orig) => {
      let cls = 'exercise-choice';
      if (selected === orig) cls += ' selected';
      if (submitted) {
        if (orig === correct) {
          cls += ' correct';
        } else if (orig === selected) {
          cls += ' incorrect';
        }
      }
      return `<button class="${cls}" data-action="${actionName}" data-option="${orig}" ${extraData} ${submitted ? 'disabled' : ''}><span>${escBidi(options[orig])}</span></button>`;
    }).join('')}
  </div>`;
}

// Applied to the very first concept's opening paragraph only, and only when
// it actually starts with a Latin letter -- most concept bodies open with
// an Arabic <bdi> term (see content/module-0N.js), and a drop-cap forced
// onto Arabic script would fight the "keep the Arabic font as-is" brief, so
// this quietly no-ops rather than mis-styling a هذا.
function applyDropCap(html) {
  return html.replace(/^(<p class="concept-line">)([A-Za-z])/, (_m, open, letter) => `${open}<span class="dropcap">${letter}</span>`);
}

// --- Lesson: every reached concept on one scrolling page -----------------

// A source box holds either the book's own Arabic (a "Core Text" quotation,
// which has to sit right-aligned to read as a block of Arabic rather than
// as a stray run pushed to the left margin) or an English note. Resolve the
// direction from the line's own first strong character. dir="auto" can't do
// this job: isolateArabicHtml wraps every Arabic run in its own isolate, and
// the auto algorithm skips characters inside isolates, so a wholly-Arabic
// line would resolve LTR.
const AR_RANGES = '\\u0600-\\u06FF\\u0750-\\u077F\\u08A0-\\u08FF\\uFB50-\\uFDFF\\uFE70-\\uFEFF';
const AR_STRONG = new RegExp(`[${AR_RANGES}]`);
const FIRST_STRONG = new RegExp(`[A-Za-z${AR_RANGES}]`);
function boxLineDir(boxLine) {
  const first = String(boxLine ?? '').replace(/<[^>]*>/g, '').match(FIRST_STRONG);
  return first && AR_STRONG.test(first[0]) ? 'rtl' : 'ltr';
}

// Shared prose renderer -- one <p> per sentence, enumerations collapsed
// into a <ul>, exactly like a concept's main body. Takes anything
// conceptLines can read (a real concept, or a synthetic {body: text}), so
// a clarification note reads with the same rhythm as the prose above it
// instead of landing as one dense paragraph.
function conceptProseHtml(pseudoConcept, prefix = '', revealedKeys = null, forceReveal = false, colorOn = false) {
  let html = '';
  let openList = false;
  let lineIdx = 0;
  conceptLines(pseudoConcept).forEach((line) => {
    lineIdx++;
    const itemKey = prefix ? `${prefix}_p${lineIdx}` : '';

    if (line.table) {
      if (openList) {
        html += '</ul>';
        openList = false;
      }
      const cls = itemKey ? revealCls(itemKey, 'concept-table-wrap', revealedKeys, forceReveal) : 'concept-table-wrap';
      const attr = '';
      html += conceptTableHtml(line.table, cls, attr);
      return;
    }

    if (line.box) {
      if (openList) {
        html += '</ul>';
        openList = false;
      }
      const rawBoxTitle = String(line.box.title || '').trim();
      const boxTitle = rawBoxTitle.replace(/\s+Box$/i, '').trim();
      const boxTypeSlug = boxTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      const baseCls = boxTypeSlug ? `concept-source-box concept-source-box--${boxTypeSlug}` : 'concept-source-box';
      const cls = itemKey ? revealCls(itemKey, baseCls, revealedKeys, forceReveal) : baseCls;
      const attr = '';
      const boxLabel = boxTitle && boxTitle.toLowerCase() !== 'box'
        ? `<div class="concept-source-box-label">${escBidi(boxTitle)}</div>`
        : '';
      const boxLines = (line.box.lines || [])
        .map((boxLine) => `<p class="concept-source-box-line" dir="${boxLineDir(boxLine)}">${isolateArabicHtml(boxLine)}</p>`)
        .join('');
      html += `
        <div class="${cls}"${attr}>
          ${boxLabel}
          <div class="concept-source-box-body">${boxLines}</div>
        </div>`;
      return;
    }

    if (line.tarkeebDiagram) {
      if (openList) {
        html += '</ul>';
        openList = false;
      }
      const cls = itemKey ? revealCls(itemKey, 'tarkeeb-diagram-wrap', revealedKeys, forceReveal) : 'tarkeeb-diagram-wrap';
      const attr = '';
      html += `<div class="${cls}"${attr}>${tarkeebDiagramReadOnlyHtml(line.tarkeebDiagram, colorOn)}</div>`;
      return;
    }

    const lineHtml = isolateArabicHtml(line.html);
    const cls = itemKey ? revealCls(itemKey, 'concept-line', revealedKeys, forceReveal) : 'concept-line';
    const attr = '';

    if (line.list) {
      if (!openList) {
        html += '<ul class="concept-list">';
        openList = true;
      }
      const liCls = itemKey ? revealCls(itemKey, line.bullet ? 'bulleted' : '', revealedKeys, forceReveal) : (line.bullet ? 'bulleted' : '');
      html += `<li class="${liCls}"${attr}>${lineHtml}</li>`;
    } else {
      if (openList) {
        html += '</ul>';
        openList = false;
      }
      html += `<p class="${cls}"${attr}>${lineHtml}</p>`;
    }
  });
  if (openList) html += '</ul>';
  return html;
}

// A data table reproduced from the book's own teaching content (content-fstu
// only -- e.g. an irab table, a letters table). Cells are plain strings, not
// pre-marked with <bdi>, so they go through escBidi (escape + isolate any
// raw Arabic run) exactly like a concept exercise's prompt does.
function conceptTableHtml(table, wrapCls, wrapAttr) {
  const headHtml = table.headers.map((h) => `<th>${escBidi(h)}</th>`).join('');
  const bodyHtml = table.rows.map((row) => `<tr>${row.map((cell) => `<td>${escBidi(cell)}</td>`).join('')}</tr>`).join('');
  return `
    <div class="${wrapCls}"${wrapAttr}>
      ${table.title ? `<div class="concept-table-title">${escBidi(table.title)}</div>` : ''}
      <div class="concept-table-scroll">
        <table class="concept-table">
          <thead><tr>${headHtml}</tr></thead>
          <tbody>${bodyHtml}</tbody>
        </table>
      </div>
    </div>`;
}

// A supplementary note for the handful of concepts whose prose alone left a
// gap -- added context under the concept, not a rewrite of the body above
// it.
// Historical shim: this used to emit the scroll-reveal classes
// (reveal-on-scroll/is-revealed). Elements now render visible immediately
// (entrance motion is applied post-render by js/motion.js instead), so it
// passes the base class through untouched. Kept so its many call sites
// didn't all need rewriting.
function revealCls(key, baseCls) {
  return baseCls;
}

// Sidebar "Lesson Summary" card -- only present for lessons that carry a
// `summary` field (content-fstu/content-fstu-sarf's converted lessons; the
// original course's lessons have none, so this renders nothing for them).
// Each row names an unlock index and only renders once that's been cleared,
// so the card builds up gradually rather than dumping every row in at once.
// Two lessons shapes feed this: lessons still on the single batch exercise
// (lesson.exercise.items[], e.g. content-fstu-sarf) unlock rows by that
// item's index; lessons converted to per-concept exercises (content-fstu)
// unlock rows by concept index instead. A lesson only ever has one of the
// two, so checking for lesson.exercise.items first is enough to tell them
// apart.
function isSummaryRowUnlocked(lesson, row, exStates, moduleId, lessonId) {
  if (row.unlockAt === undefined || row.unlockAt === null) return true;
  if (lesson.exercise && lesson.exercise.items && lesson.exercise.items.length) {
    return isLessonExerciseItemPassed(lesson, row.unlockAt, exStates, moduleId, lessonId);
  }
  return isConceptExercisePassed(lesson, row.unlockAt, exStates, moduleId, lessonId);
}

function lessonSummaryCardHtml(lesson, state, mod, sbSumKey) {
  const summary = lesson.summary;
  if (!summary) return '';
  const rows = summary.rows.filter((row) => isSummaryRowUnlocked(lesson, row, state.exStates, mod.id, lesson.id));
  // The card shell itself is always present (same three-card sidebar every
  // content-fstu lesson has, matching "In This Lesson"/"Your Progress"
  // right around it) -- only the ROWS inside build up gradually, with a
  // placeholder until the first one unlocks, rather than the whole card
  // popping into existence mid-lesson.
  const body = rows.length
    ? `<div class="lesson-summary-rows">${rows.map((row) => `
    <div class="lesson-summary-row">
      <div class="lesson-summary-row-head">
        <span class="lesson-summary-label">${esc(row.label)}</span>
        <bdi class="lesson-summary-arabic" lang="ar">${esc(row.arabic)}</bdi>
      </div>
      <div class="lesson-summary-meaning">${esc(row.meaning)}</div>
      ${row.examples && row.examples.length ? `<div class="lesson-summary-examples">${row.examples.map((ex) => `<bdi lang="ar">${esc(ex)}</bdi>`).join('، ')}</div>` : ''}
    </div>`).join('')}</div>`
    : `<p class="lesson-summary-empty">Clear the lesson's exercises to build this up.</p>`;
  return `
    <div class="${revealCls(sbSumKey, 'card lesson-sidebar-card lesson-summary-card', null, true)}">
      <div class="card-kicker">${esc(summary.title || 'Lesson Summary')}</div>
      ${body}
    </div>`;
}

// The lesson's own single exercise (lesson.exercise.items[]) -- ONE
// persistent box whose contents swap to the next question after each
// answer (auto-advance is scheduled from js/main.js's
// selectLessonExerciseOption, which is why this reads state.lessonExIndex
// rather than deriving "current item" from exStates on every render --
// deriving it would jump to the next question the instant it's answered,
// with no visible feedback beat). Reveal-on-click, same as the lesson quiz
// and Practice Mode's MCQ (renderMcqOptions) -- picking an option grades
// and shows it immediately, no separate Check step, and it always moves on
// after a brief pause regardless of whether the answer was right. Only ever
// renders once concepts have nothing left to gate (content-fstu lessons
// keep concepts exercise-free -- see the schema note in
// content-fstu/module-01.js). Always fully visible and interactive as soon
// as the reading content above it is.
function lessonExerciseCardHtml(state, mod, lesson) {
  const ex = lesson.exercise;
  if (!ex || !ex.items || !ex.items.length) return '';
  const items = ex.items;
  const idx = Math.min(state.lessonExIndex || 0, items.length);

  if (idx >= items.length) {
    return `
      <div class="card exercise-card lesson-exercise-card">
        <div class="card-kicker">EXERCISE</div>
        <div class="exercise-feedback correct">${icon('check', 13, 2.4)} All ${items.length} question${items.length === 1 ? '' : 's'} cleared.</div>
        ${cornerBracketsHtml()}
      </div>`;
  }

  const item = items[idx];
  const key = lessonExerciseItemKey(mod.id, lesson.id, idx);
  const exState = state.exStates[key] || {};
  const submitted = !!exState.submitted;
  const wasCorrect = exState.selected === item.correct;
  const feedback = submitted
    ? `<div class="quiz-feedback-line ${wasCorrect ? 'correct' : 'incorrect'}">${wasCorrect ? 'Correct.' : `Not quite — the answer is ${escBidi(item.options[item.correct])}.`}</div>`
    : '';

  return `
    <div class="card exercise-card lesson-exercise-card">
      <div class="card-kicker">EXERCISE · ${idx + 1} OF ${items.length}</div>
      ${ex.instructions ? `<p class="lesson-exercise-instructions">${isolateArabicHtml(ex.instructions)}</p>` : ''}
      <p class="exercise-prompt">${escBidi(item.prompt)}</p>
      ${renderMcqOptions({
        options: item.options,
        correct: item.correct,
        selected: exState.selected,
        submitted,
        actionName: 'selectLessonExerciseOption',
        order: state.optionOrder[key],
      })}
      ${feedback}
      ${cornerBracketsHtml()}
    </div>`;
}

function conceptClarificationHtml(text, key, revealedKeys, forceReveal = false) {
  if (!text) return '';
  return `
    <div class="${revealCls(key, 'concept-clarification', revealedKeys, forceReveal)}">
      <div class="concept-clarification-label">Clarification</div>
      ${conceptProseHtml({ body: text })}
    </div>`;
}

function conceptBlockHtml(state, mod, lesson, i, revealedKeys) {
  const concept = lesson.concepts[i];
  const key = conceptKey(mod.id, lesson.id, i);
  const stage = state.revealState[key] || 0;
  const exState = state.exStates[key] || {};
  const isFirstConcept = i === 0;

  const cbKey = `cb_${mod.id}_${lesson.id}_${i}`;
  const exCardKey = `ex_${mod.id}_${lesson.id}_${i}`;
  const clKey = `cl_${mod.id}_${lesson.id}_${i}`;

  let lines = conceptProseHtml(concept, `${cbKey}_prose`, revealedKeys, isFirstConcept, state.tarkeebLabelsBlue === true);
  if (i === 0) lines = applyDropCap(lines);

  let tail = '';
  if (concept.exercise && stage < 1) {
    // This is the lesson's real primary action -- until it is cleared, the
    // concept after this one stays shut (conceptsToRender) and the footer's
    // Next is disabled. It used to be a .btn-outline sitting between two
    // equally weighted footer buttons, so the screen offered three
    // full-width buttons and marked none of them as the one to press. It is
    // now the primary, and says what pressing it leads to.
    const btnKey = `ex_btn_${mod.id}_${lesson.id}_${i}`;
    tail = `
      <div class="${revealCls(btnKey, 'concept-gate', revealedKeys)}">
        <button class="btn btn-primary concept-gate-btn" data-action="revealExercise" data-index="${i}">Show the exercise</button>
        <span class="concept-gate-note">One question on what you have just read — clearing it opens the next concept.</span>
      </div>`;
  } else if (concept.exercise) {
    const ex = concept.exercise;
    const submitted = !!exState.submitted;
    const passed = !!exState.passed;
    const wasCorrect = exState.selected === ex.correct;
    const feedback = submitted
      ? `<div class="exercise-feedback ${wasCorrect ? 'correct' : 'incorrect'}">${wasCorrect ? icon('check', 13, 2.4) : ''}${wasCorrect ? 'Correct.' : `Not quite — the answer is ${escBidi(ex.options[ex.correct])}.`}</div>`
      : '';
    // Order matters here and used to be wrong: .exercise-content is a
    // flex column, so .exercise-left (prompt + Check) always painted above
    // .exercise-right (the options). The reader met a disabled "Check"
    // before being shown anything to check -- and the end-of-lesson
    // exercise card, which is the same control, already read
    // prompt -> options -> verdict. The two now agree.
    tail = `
    <div class="${revealCls(exCardKey, 'card exercise-card', revealedKeys)}">
      <div class="card-kicker">Exercise</div>
      <div class="exercise-content">
        <p class="${revealCls(`${exCardKey}_prompt`, 'exercise-prompt', revealedKeys)}">${escBidi(ex.prompt)}</p>
        ${renderExerciseChoices({
          options: ex.options,
          correct: ex.correct,
          selected: exState.selected,
          submitted,
          actionName: 'selectConceptOption',
          extraData: `data-index="${i}"`,
          order: state.optionOrder[key],
          prefix: exCardKey,
          revealedKeys,
        })}
        ${feedback}
        <div class="action-row">
          ${!submitted ? checkButton('checkConceptExercise', exState.selected !== undefined && exState.selected !== null, `data-index="${i}"`) : ''}
          ${passed
            ? `<span class="tag tag-accent">${icon('check', 11, 2.6)} Correct</span>`
            : submitted ? `<button class="btn btn-secondary" data-action="retryConceptExercise" data-index="${i}">Try again</button>` : ''}
        </div>
      </div>
      ${cornerBracketsHtml()}
    </div>`;
  }

  // Concept headings are Arabic grammar terms, but the <h3> carried no lang,
  // so the h*[lang='ar'] rule that hands headings the Arabic face never
  // matched and every one of them fell through Cormorant (which has no
  // Arabic glyphs at all) to whatever system font the browser had -- the
  // exact failure the base stylesheet warns about, on the app's most-read
  // screen. boxLineDir already resolves this from the text's own first
  // strong character, so an English heading still sets LTR in the body face.
  const headingRtl = boxLineDir(concept.heading) === 'rtl';
  return `
    <div class="concept-block" data-concept-index="${i}">
      <div class="card-kicker">Concept ${i + 1} of ${lesson.concepts.length}</div>
      <h3 class="${revealCls(`${cbKey}_h3`, '', revealedKeys, isFirstConcept)}"${headingRtl ? ' lang="ar" dir="rtl"' : ''}>${esc(concept.heading)}</h3>
      <div class="concept-body">${lines}</div>
      ${conceptClarificationHtml(concept.clarification, clKey, revealedKeys, isFirstConcept)}
      ${tail}
    </div>`;
}

function lessonHtml(state, MODULES, revealedKeys) {
  const mod = MODULES.find((m) => m.id === state.moduleId);
  const lesson = mod && mod.lessons.find((l) => l.id === state.lessonId);
  if (!mod || !lesson) return modulePageHtml(state, MODULES);

  const total = lesson.concepts.length;
  // How far the lesson has been unlocked: a concept's own exercise gates the
  // one after it (see conceptsToRender). Paging never runs past that.
  const shown = conceptsToRender(lesson, state.exStates, mod.id, lesson.id);
  const readyForQuiz = isLessonReadyForQuiz(lesson, state.exStates, mod.id, lesson.id);
  const quizUnlocked = readyForQuiz || state.forceUnlockAll;

  // A null index means "wherever the reader had got to" -- the furthest
  // concept unlocked. Once they page by hand, the actions set a real number.
  const index = state.conceptIndex == null
    ? shown - 1
    : Math.max(0, Math.min(state.conceptIndex, shown - 1));
  const isLast = index === total - 1;

  // Reachable concepts are clickable; the rest are dim markers of what is
  // still ahead.
  const dots = lesson.concepts.map((_, i) => {
    const cls = ['concept-dot', i < shown ? 'reached' : '', i === index ? 'current' : ''].filter(Boolean).join(' ');
    return i < shown
      ? `<button class="${cls}" data-action="goToConcept" data-index="${i}" aria-label="Concept ${i + 1}"></button>`
      : `<span class="${cls}" aria-hidden="true"></span>`;
  }).join('');

  const block = conceptBlockHtml(state, mod, lesson, index, revealedKeys);

  // The lesson's own trailing exercise and its summary table belong to the
  // end of the lesson, so they ride along on the last concept's page.
  const tail = isLast
    ? `${lessonExerciseCardHtml(state, mod, lesson)}${lessonSummaryCardHtml(lesson, state, mod, `sb_sum_${mod.id}_${lesson.id}`)}`
    : '';

  const lessonIdx = mod.lessons.findIndex((l) => l.id === lesson.id);
  const moduleIdx = MODULES.indexOf(mod) + 1;

  // Next only opens once this concept's exercise has been cleared -- that is
  // the same gate conceptsToRender applies, read back as "is there a further
  // concept unlocked than the one on screen".
  const canAdvance = index < shown - 1;
  const forward = isLast
    ? `<button class="btn btn-primary" data-action="gotoQuiz" ${quizUnlocked ? '' : 'disabled'}>Continue to quiz</button>`
    : `<button class="btn btn-primary" data-action="nextConcept" ${canAdvance ? '' : 'disabled'}>Next concept</button>`;

  // A disabled forward button on its own is a dead end: the reader can see
  // they cannot go on but not why, and the exercise that is holding them is
  // above the fold by the time the footer is in view. So whenever forward is
  // gated, the footer says what would open it -- and the gate is always one
  // of exactly two things, since a concept with no exercise passes
  // automatically (see isConceptExercisePassed) and the quiz additionally
  // waits on the lesson's own trailing exercise (isLessonReadyForQuiz).
  const forwardBlocked = isLast ? !quizUnlocked : !canAdvance;
  let footHint = '';
  if (forwardBlocked) {
    const thisConceptPending = !isConceptExercisePassed(lesson, index, state.exStates, mod.id, lesson.id);
    footHint = isLast && !thisConceptPending
      ? 'Answer the practice below to open the quiz.'
      : 'Answer the exercise above to carry on.';
  }

  // The back control reads its destination from the same trail the
  // breadcrumb and every other inner screen do, so a lesson opened from My
  // Path still unwinds to the path map and the label says which it is --
  // it said only "Back" before, whichever of the two it was about to do.
  const lessonBack = backTargetFor(state);
  return `
    <div class="lesson-page">
      <div class="lesson-head">
        ${backLink(`Back to ${lessonBack ? lessonBack.label : 'the module'}`, lessonBack ? lessonBack.action : 'openModule', lessonBack ? dataAttrs(lessonBack.extra) : `data-module-id="${escAttr(mod.id)}"`)}
        <div class="lesson-head-body">
          <div class="lesson-head-crumb">Module ${moduleIdx} · <bdi lang="ar">${esc(mod.title)}</bdi> · Lesson ${lessonIdx + 1} of ${mod.lessons.length}</div>
          <h1 class="lesson-head-title" lang="ar" dir="rtl">${esc(lesson.title)}</h1>
        </div>
        <div class="concept-dots">${dots}</div>
      </div>
      <div class="lesson-body">
        ${block}
        ${tail}
      </div>
      <div class="lesson-foot">
        <button class="btn btn-ghost lesson-foot-back" data-action="prevConcept" ${index === 0 ? 'disabled' : ''}>${icon('arrowLeft', 14, 2)} Back</button>
        <div class="lesson-foot-end">
          ${footHint ? `<span class="lesson-foot-hint">${esc(footHint)}</span>` : ''}
          ${forward}
        </div>
      </div>
    </div>`;
}

// --- Quiz -------------------------------------------------------------
// One question at a time, reveal-on-click (see selectQuizOption/
// nextQuizQuestion in main.js) -- matches the handoff's Quiz screen. The
// live streak/XP strip and the result screen's tier badge + confetti are a
// purely cosmetic session layer (see gamification.js's quizCosmeticXp/
// quizTier/longestStreak); the XP actually credited to the player still
// comes from xpForQuiz alone, awarded once via the existing finishLesson
// flow -- so this screen never shows its own "+XP" total, which would
// otherwise disagree with the real toast a moment later.

function quizResultHtml(state, mod, lesson) {
  const total = lesson.quiz.length;
  const correct = state.quizAnswers.filter((a, qi) => a === lesson.quiz[qi].correct).length;
  const frac = correct / total;
  const tier = quizTier(frac);
  const best = longestStreak(state.quizAnswers.map((a, qi) => a === lesson.quiz[qi].correct));
  const passPct = Math.round(QUIZ_PASS_RATIO * 100);
  const passed = frac >= QUIZ_PASS_RATIO;

  const message = frac === 1
    ? 'A flawless recitation.'
    : passed
      ? 'A solid grasp — review what you missed.'
      : `Revisit the lesson before moving on — you need ${passPct}% to complete it.`;

  // Corrections first: "review what you missed" is a dead end unless the
  // screen actually says which questions were wrong and why.
  const missed = lesson.quiz.map((q, qi) => {
    if (state.quizAnswers[qi] === q.correct) return '';
    return `
      <div class="review-row review-row-stacked incorrect">
        <div class="review-row-head">
          <span class="review-row-num">${qi + 1}</span>
          <span class="review-row-title">${escBidi(q.q)}</span>
          <span class="review-row-mark">✗</span>
        </div>
        <div class="review-answer">Correct answer: ${escBidi(q.options[q.correct])}</div>
        ${q.explanation ? `<p class="quiz-feedback-explanation">${escBidi(q.explanation)}</p>` : ''}
      </div>`;
  }).join('');

  const actions = passed
    ? `<button class="btn btn-secondary" data-action="retakeQuiz">Retake quiz</button>
       <button class="btn btn-primary" data-action="finishLesson">Finish lesson</button>`
    : `<button class="btn btn-secondary" data-action="backToLesson">Back to lesson</button>
       <button class="btn btn-primary" data-action="retakeQuiz">Retake quiz</button>`;

  return `
    <div class="complete-page">
      <div class="complete-plate">
        <span class="complete-plate-ghost" aria-hidden="true">${passed ? 'أحسنت' : 'أعد'}</span>
        <div class="complete-plate-inner">
          <span class="complete-tag">${icon('check', 11, 2.6)} Quiz complete</span>
          <div class="complete-score">${correct} / ${total}</div>
          <p class="complete-message">${esc(message)}</p>
          <div class="complete-ledger">
            <div>
              <div class="complete-ledger-value">${Math.round(frac * 100)}%</div>
              <div class="complete-ledger-label">Accuracy</div>
            </div>
            ${tier ? `<div>
              <div class="complete-ledger-value complete-ledger-value-accent">${esc(tier)}</div>
              <div class="complete-ledger-label">Tier</div>
            </div>` : ''}
            <div>
              <div class="complete-ledger-value">${best}</div>
              <div class="complete-ledger-label">Best streak</div>
            </div>
          </div>
        </div>
      </div>
      <div class="complete-body">
        ${missed ? `<div class="kicker">Worth another look</div><div class="review-list">${missed}</div>` : ''}
        <div class="complete-actions">${actions}</div>
      </div>
    </div>`;
}

function quizHtml(state, MODULES) {
  const mod = MODULES.find((m) => m.id === state.moduleId);
  const lesson = mod && mod.lessons.find((l) => l.id === state.lessonId);
  if (!mod || !lesson) return modulePageHtml(state, MODULES);

  if (state.quizShowResult) return quizResultHtml(state, mod, lesson);

  const qi = state.quizIndex;
  const q = lesson.quiz[qi];
  const revealed = state.quizRevealed;
  const wasCorrect = state.quizSelected === q.correct;
  const lessonIdx = mod.lessons.findIndex((l) => l.id === lesson.id);

  // Live, session-only streak/XP -- every already-committed answer plus the
  // current one once revealed. Cosmetic: the XP actually credited still
  // comes from xpForQuiz through the existing finishLesson flow.
  const settled = state.quizAnswers.map((a, i) => a === lesson.quiz[i].correct);
  if (revealed) settled.push(wasCorrect);
  const liveStreak = (() => {
    let run = 0;
    for (let i = settled.length - 1; i >= 0 && settled[i]; i--) run += 1;
    return run;
  })();
  const liveXp = settled.reduce((sum, ok) => sum + quizCosmeticXp(ok), 0);

  const ticks = lesson.quiz.map((_, i) => {
    const cls = i < qi ? 'quiz-tick quiz-tick-done' : i === qi ? 'quiz-tick quiz-tick-current' : 'quiz-tick';
    return `<div class="${cls}"></div>`;
  }).join('');
  const feedback = revealed ? `
    <div class="quiz-feedback${wasCorrect ? '' : ' quiz-feedback-incorrect'}">
      <div class="quiz-feedback-line">${wasCorrect ? `Correct — +${quizCosmeticXp(true)} XP` : `Not quite — the answer is ${escBidi(q.options[q.correct])}`}</div>
      ${q.explanation ? `<p class="quiz-feedback-explanation">${escBidi(q.explanation)}</p>` : ''}
    </div>` : '';

  return `
    <div class="quiz-page">
      <div class="quiz-head">
        <button class="back-chevron" data-action="backToLesson" aria-label="Back to the lesson" title="Back to the lesson">${icon('cross', 18, 2)}</button>
        <div class="quiz-crumb"><bdi lang="ar">${esc(mod.title)}</bdi> · Lesson ${lessonIdx + 1} · Question ${qi + 1} of ${lesson.quiz.length}</div>
        <div class="quiz-combo">
          <span aria-label="Answer streak: ${liveStreak}">${icon('flame', 13, 2)}<span aria-hidden="true">${liveStreak}</span></span>
          <span aria-label="Session XP: ${liveXp}">${icon('star', 13, 2)}<span aria-hidden="true">${liveXp}</span></span>
        </div>
      </div>
      <div class="quiz-ticks">${ticks}</div>
      <div class="quiz-body">
        <h2 class="quiz-question">${escBidi(q.q)}</h2>
        ${renderMcqOptions({ options: q.options, correct: q.correct, selected: state.quizSelected, submitted: revealed, actionName: 'selectQuizOption', order: state.quizOptionOrder[qi] })}
        ${feedback}
      </div>
      <div class="quiz-foot">
        ${revealed
          ? `<button class="btn btn-primary btn-block" data-action="nextQuizQuestion">${qi + 1 < lesson.quiz.length ? 'Next question' : 'See results'}</button>`
          // Before an answer is picked, the button is dead and says nothing
          // about why. The instruction goes in its place rather than beneath
          // a disabled control -- there is only one thing to do on this
          // screen, so the foot should be saying it.
          : '<p class="quiz-foot-hint">Pick an answer to see whether it is right.</p>'}
      </div>
    </div>`;
}

// --- Lesson complete ---------------------------------------------------

function lessonCompleteHtml(state, MODULES) {
  const mod = MODULES.find((m) => m.id === state.moduleId);
  const lesson = mod && mod.lessons.find((l) => l.id === state.lessonId);
  if (!mod || !lesson) return modulePageHtml(state, MODULES);

  const score = (state.quizScores[mod.id] || {})[lesson.id];
  const lessonIdx = mod.lessons.findIndex((l) => l.id === lesson.id);
  const moduleIdx = MODULES.indexOf(mod) + 1;
  const done = completedCount(mod.id, state.completed);
  const total = mod.lessons.length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const streak = state.streak || 1;
  const nextLesson = mod.lessons[lessonIdx + 1];

  // A lesson reached via My Path routes back to the path map rather than to
  // the module page it technically belongs to -- not having to think in
  // terms of "which module am I in" is the whole point of the path.
  const follow = state.pathActive
    ? `<button class="btn btn-primary btn-block" data-action="backToPath">Continue on My Path</button>`
    : nextLesson
      ? `
        <div class="up-next">
          <div class="kicker">Up next</div>
          <span class="up-next-title" lang="ar" dir="rtl">${esc(nextLesson.title)}</span>
          ${nextLesson.subtitle ? `<p class="up-next-body">${escBidi(nextLesson.subtitle)}</p>` : ''}
          <button class="btn btn-primary btn-block" data-action="startLesson" data-lesson-id="${escAttr(nextLesson.id)}">Start next lesson</button>
        </div>`
      : (() => {
        // Finishing a module used to end here, with Practice as the only
        // offer and the module after it reachable solely by going back to
        // Home and finding it in the list. Name it instead -- it is the one
        // thing a learner who has just cleared a module is most likely to
        // want next.
        const nextMod = MODULES[MODULES.indexOf(mod) + 1];
        const nextOpen = nextMod
          && isModuleUnlocked(nextMod.id, state.completed, state.unlockedModules, state.forceUnlockAll);
        return `
        <div class="up-next">
          <div class="kicker">${nextOpen ? 'Next module' : 'Module finished'}</div>
          <span class="up-next-title" lang="ar" dir="rtl">${esc(nextOpen ? nextMod.title : mod.title)}</span>
          <p class="up-next-body">${nextOpen
            ? `Every lesson in <bdi lang="ar" dir="rtl">${esc(mod.title)}</bdi> is done.`
            : 'Every lesson in this module is done — drill it to keep it sharp.'}</p>
          ${nextOpen
            ? `<button class="btn btn-primary btn-block" data-action="openModule" data-module-id="${escAttr(nextMod.id)}">Open the next module</button>
               <button class="btn btn-secondary btn-block" style="margin-top:10px;" data-action="openPractice">Practice this module</button>`
            : '<button class="btn btn-primary btn-block" data-action="openPractice">Practice this module</button>'}
        </div>`;
      })();

  return `
    <div class="complete-page">
      <div class="complete-plate">
        <span class="complete-plate-ghost" aria-hidden="true">أحسنت</span>
        <div class="complete-plate-inner">
          <span class="complete-tag">${icon('check', 11, 2.6)} Lesson cleared</span>
          <h1 class="complete-title" lang="ar" dir="rtl">${esc(lesson.title)}</h1>
          <div class="complete-meta">Module ${moduleIdx} · <bdi lang="ar">${esc(mod.title)}</bdi> · Lesson ${lessonIdx + 1} of ${total}</div>
          <div class="complete-ledger">
            ${score ? `<div>
              <div class="complete-ledger-value">${score.correct} / ${score.total}</div>
              <div class="complete-ledger-label">Quiz</div>
            </div>` : ''}
            ${score ? `<div>
              <div class="complete-ledger-value complete-ledger-value-accent">+${xpForQuiz(score.correct, score.total)}</div>
              <div class="complete-ledger-label">XP earned</div>
            </div>` : ''}
            <div>
              <div class="complete-ledger-value">${streak} d</div>
              <div class="complete-ledger-label">Streak</div>
            </div>
          </div>
        </div>
      </div>
      <div class="complete-body">
        <div class="complete-progress">
          <span class="complete-progress-track" aria-hidden="true"><span class="complete-progress-fill" style="width:${pct}%"></span></span>
          <span class="complete-progress-label">${done} / ${total} in this module</span>
        </div>
        ${follow}
        <button class="entry-row" data-action="openPractice">
          ${icon('pencil', 17, 1.8)}
          <span class="entry-row-body">
            <span class="entry-row-title">Practice what you just learned</span>
            <span class="entry-row-meta">This lesson's cards are now in the pool</span>
          </span>
          <span class="entry-row-chevron">${icon('chevronRight', 15, 2)}</span>
        </button>
        <button class="btn btn-ghost btn-block" style="margin-top:14px;" data-action="openModule" data-module-id="${escAttr(mod.id)}">Back to lessons</button>
      </div>
    </div>`;
}

// --- Practice: تركيب widget ------------------------------------------------

// Shared grid geometry for the cells[]/rows[] تركيب diagram schema
// (content-fstu units 2+): `slotContent(slot, i)` renders each label span's
// inner HTML -- a static role label for the read-only teaching diagram
// (tarkeebDiagramReadOnlyHtml), a draggable placement target for the
// practice version (renderTarkeebDiagram) -- so both share the same
// column-span/row-stacking math and can't drift apart. RTL grid: column
// line 1 sits at the right edge, matching cells[0] being the first
// (rightmost) word.
function tarkeebDiagramGridHtml(item, slotContent, { fillBlanks = false } = {}) {
  const { slots, sentenceGridRow, totalRows, rowLabels } = flattenTarkeebSlots(item, { fillBlanks });
  const numCells = item.cells.length;
  const hasRowLabels = rowLabels.length > 0;
  const labelCol = numCells + 1;
  const cellsHtml = item.cells.map((cell, i) => `
    <div class="tarkeeb-diagram-cell" style="grid-column:${i + 1};grid-row:${sentenceGridRow};">${escBidi(cell)}</div>`).join('');
  const slotsHtml = slots.map((slot, i) => `
    <div style="grid-column:${slot.start + 1} / ${slot.end + 2};grid-row:${slot.gridRow};">${slotContent(slot, i)}</div>`).join('');
  // Row labels (row.label in content) name the tier of analysis a row of
  // boxes tests -- e.g. "Word class" vs "Sign of الاسم" -- so a multi-row
  // item doesn't just present stacked boxes with no indication of what each
  // band means. Rendered as their own column past the last cell.
  const rowLabelsHtml = hasRowLabels ? rowLabels.map((rl) => `
    <div class="tarkeeb-diagram-row-label" style="grid-column:${labelCol};grid-row:${rl.gridRow};">${escBidi(rl.label)}</div>`).join('') : '';
  const columns = `repeat(${numCells}, minmax(64px, auto))${hasRowLabels ? ' auto' : ''}`;
  return `
    <div class="tarkeeb-diagram-scroll" dir="rtl">
      <div class="tarkeeb-diagram-grid" dir="rtl" style="grid-template-columns:${columns};grid-template-rows:repeat(${totalRows}, auto);">
        ${cellsHtml}
        ${slotsHtml}
        ${rowLabelsHtml}
      </div>
    </div>`;
}

// A worked تركيب diagram reproduced inline in a lesson's teaching content
// (sections[].blocks[] type:"tarkeeb" -> a concept line with `.tarkeebDiagram`,
// see conceptProseHtml) -- read-only, every role label already shown, so
// colouring by the role's own tier (unlike the practice widget) never leaks
// anything.
function tarkeebDiagramReadOnlyHtml(item, colorOn) {
  const grid = tarkeebDiagramGridHtml(item, (slot) => {
    const tierCls = colorOn ? tarkeebTierClass(classifyTarkeebRoleTier(slot.role)) : '';
    return `<div class="tarkeeb-diagram-label${tierCls}"><span class="tarkeeb-label-text${tierCls}">${escBidi(slot.role)}</span></div>`;
  });
  return `
    <div class="tarkeeb-diagram tarkeeb-diagram-static">
      ${grid}
      ${item.translation ? `<div class="tarkeeb-diagram-translation">${esc(item.translation)}</div>` : ''}
    </div>`;
}

// Diagram-schema (content-fstu) تركيب colour-coding, gated behind the
// "Colour Tarkeeb labels" setting (state.tarkeebLabelsBlue -- same flag the
// flat words[]/labels[] schema's flat-blue styling already used; see the
// settings copy in settingsPageHtml). 'primary' (a sentence's own core
// members) and 'secondary' (a التوابع/الإضافة-style row explaining a span
// another row already labelled) come from flattenTarkeebSlots' tier field
// (content/index.js) or, for a distractor with no row of its own,
// classifyTarkeebRoleTier's text guess. Returns '' when tier is falsy so
// callers can splice this straight into a class attribute unconditionally.
function tarkeebTierClass(tier) {
  return tier === 'primary' ? ' tarkeeb-tier-primary' : tier === 'secondary' ? ' tarkeeb-tier-secondary' : '';
}

// Shared by both تركيب schemas (diagram cells[] and flat words[]) -- the
// chip tray markup is identical either way, only what ts.placements is
// checked against differs, and that's already baked into ts itself.
// Keyboard-operable: role="button" + tabindex makes each chip a real Tab
// stop so a mouse isn't required to select one (see tarkeebFocusSelector
// in js/main.js for how focus survives the re-render a selection triggers).
// colorOn: only true for the diagram schema with the setting on (ts.chipTier
// only exists there -- see initTarkeeb in js/main.js); the flat schema never
// passes it, so its chips keep today's flat-blue-or-default styling.
function tarkeebTrayHtml(ts, key, { colorOn = false } = {}) {
  const usedChipIdx = new Set(ts.placements.filter((p) => p !== null && p !== undefined));
  return ts.chipOrder.map((chipIdx) => {
    const used = usedChipIdx.has(chipIdx);
    const selected = ts.selectedChip === chipIdx;
    const interactive = !used && !ts.submitted;
    const tierCls = colorOn ? tarkeebTierClass(ts.chipTier && ts.chipTier[chipIdx]) : '';
    let cls = 'tarkeeb-chip' + tierCls;
    if (used) cls += ' used';
    if (selected) cls += ' selected';
    const label = ts.chipPool[chipIdx];
    const ariaLabel = used ? `${label}, placed` : label;
    return `<div class="${cls}" draggable="${interactive ? 'true' : 'false'}" role="button" ${interactive ? 'tabindex="0"' : 'tabindex="-1" aria-disabled="true"'} aria-pressed="${selected}" aria-label="${escAttr(ariaLabel)}" data-action="tarkeebChipClick" data-chip="${chipIdx}" data-key="${escAttr(key)}"><span class="tarkeeb-label-text${tierCls}">${esc(label)}</span></div>`;
  }).join('');
}

// The interactive Practice Mode version of the same schema (lesson.tarkeeb[]
// bank items) -- drag-and-drop chips onto label slots, same
// select/place/check/reset actions as the original words[]/labels[]
// تركيب (js/main.js branches on item.cells, not new action names), just a
// multi-row grid of slots instead of one slot per word.
function shouldShowTarkeebTranslation(state) {
  const p = state.practice;
  if (p && typeof p.tarkeebTranslations === 'boolean') return p.tarkeebTranslations;
  return state.tarkeebTranslations !== false;
}

function renderTarkeebDiagram(state, item, key, moduleId) {
  const ts = state.tarkeebState[key];
  const submitted = !!ts.submitted;
  const feedback = ts.feedback;
  const showTranslation = shouldShowTarkeebTranslation(state);
  // "Colour Tarkeeb labels" (settingsPageHtml) -- only ts.chipTier (diagram
  // schema, initTarkeeb in js/main.js) ever has tiers to colour by, so this
  // is a no-op for the flat words[]/labels[] schema regardless.
  const colorOn = state.tarkeebLabelsBlue === true;
  // Blank slots for every unlabeled cell are an Advanced Nahw (annahw) thing
  // -- fstu's تركيب was designed without them, so filling them in there just
  // clutters a layout that was never meant to show "no match here" boxes.
  const fillBlanks = courseIdForModule(moduleId) === 'annahw';
  const { slots, rowLabels } = flattenTarkeebSlots(item, { fillBlanks });

  const grid = tarkeebDiagramGridHtml(item, (slot, i) => {
    const chipIdx = ts.placements[i];
    const chipText = chipIdx === null || chipIdx === undefined ? null : ts.chipPool[chipIdx];
    const isBlank = slot.role === null;
    // Coloured whether filled or not -- an empty slot's dashed border tints
    // to the colour its correct chip will be, same as a sighted learner
    // already sees which row (above/below the sentence) it sits in just from
    // the grid layout. Slot.role itself stays unrevealed either way (see the
    // ariaLabel below), so this is a category hint, not the answer.
    const slotTierCls = colorOn && !isBlank ? tarkeebTierClass(classifyTarkeebRoleTier(slot.role)) : '';
    // Both classes: .tarkeeb-slot is what the drag-and-drop delegation in
    // js/main.js queries for (dragover/dragleave/drop), .tarkeeb-diagram-slot
    // carries this layout's own sizing -- see styles.css.
    let slotCls = 'tarkeeb-slot tarkeeb-diagram-slot' + slotTierCls;
    if (isBlank) slotCls += ' blank';
    let slotState = 'empty';
    let content = chipText ? `<span class="tarkeeb-label-text${slotTierCls}">${esc(chipText)}</span>` : '';
    // Keyboard/screen-reader label for this slot: identifies it by the
    // word(s) it sits under (same cue a sighted learner uses), never by
    // slot.role -- that's the graded answer, and leaking it here would hand
    // screen-reader users the solution the visual layout withholds.
    let stateText = chipText ? `filled with ${chipText}` : 'empty';
    if (chipText) {
      slotCls += ' filled';
      slotState = `f${chipIdx}`;
    }
    if (submitted && feedback) {
      const pass = feedback[i].pass;
      slotCls += pass ? ' correct' : ' incorrect';
      slotState += pass ? '-ok' : '-no';
      stateText += pass ? ', correct' : `, incorrect, correct answer: ${isBlank ? 'leave blank' : slot.role}`;
      if (!pass) {
        // Reveal the correct answer in place of whatever was (or wasn't)
        // dropped here, rather than just marking it wrong and leaving the
        // learner to guess what it should have been.
        content = `<span class="tarkeeb-slot-answer"><span class="tarkeeb-label-text${slotTierCls}">${isBlank ? 'leave blank' : esc(slot.role)}</span></span>`;
      } else if (isBlank) {
        // Correctly left empty -- a faint marker so the learner knows that
        // was a deliberate right answer, not just an unnoticed slot.
        slotCls += ' blank-ok';
      }
    }
    const cellText = item.cells.slice(slot.start, slot.end + 1).join(' ');
    const rowLabel = rowLabels.find((rl) => rl.gridRow === slot.gridRow);
    const ariaLabel = `Slot for ${cellText}${rowLabel ? `, ${rowLabel.label}` : ''} — ${stateText}`;
    const interactive = !submitted;
    return `<div class="${slotCls}" role="button" ${interactive ? 'tabindex="0"' : 'tabindex="-1" aria-disabled="true"'} aria-label="${escAttr(ariaLabel)}" data-action="tarkeebSlotClick" data-slot="${i}" data-key="${escAttr(key)}">${content}</div>`;
  }, { fillBlanks });

  const tray = tarkeebTrayHtml(ts, key, { colorOn });

  // Only real slots (role !== null) need a chip before the learner can
  // check -- blank slots are allowed to stay empty, that's the point.
  const allPlaced = slots.every((s, i) => s.role === null || (ts.placements[i] !== null && ts.placements[i] !== undefined));
  const passed = submitted && feedback && feedback.every((f) => f.pass);

  return `
  <div class="tarkeeb tarkeeb-diagram-practice" data-tarkeeb-key="${escAttr(key)}">
    ${item.instruction ? `<p class="exercise-prompt">${escBidi(item.instruction)}</p>` : ''}
    ${grid}
    ${showTranslation && item.translation ? `<div class="tarkeeb-diagram-translation">${esc(item.translation)}</div>` : ''}
    <div class="tarkeeb-tray-label">Drag each label onto its slot, or tap a label then its slot to place it (tap a filled slot to clear it)</div>
    <div class="tarkeeb-tray" dir="rtl">${tray}</div>
    <div class="action-row">
      ${!submitted ? checkButton('checkTarkeeb', allPlaced, `data-key="${escAttr(key)}"`) : ''}
      ${!submitted ? `<button class="btn btn-ghost" data-action="resetTarkeeb" data-key="${escAttr(key)}">Reset</button>` : ''}
      ${submitted ? `<span class="tag ${passed ? 'tag-accent' : 'tag-outline'}">${passed ? '✓ Correct' : '✗ Not quite'}</span>` : ''}
    </div>
  </div>`;
}

function renderTarkeeb(state, item, key, moduleId) {
  if (item.cells) return renderTarkeebDiagram(state, item, key, moduleId);
  const ts = state.tarkeebState[key];
  const submitted = !!ts.submitted;
  const feedback = ts.feedback;
  const showTranslation = shouldShowTarkeebTranslation(state);

  const wordCols = item.words.map((word, i) => {
    const chipIdx = ts.placements[i];
    const chipText = chipIdx === null || chipIdx === undefined ? null : ts.chipPool[chipIdx];
    let slotCls = 'tarkeeb-slot';
    let slotState = 'empty';
    if (chipText) {
      slotCls += ' filled';
      slotState = `f${chipIdx}`;
    }
    // Labeled by the word it sits under (visible right above it), never by
    // item.labels[i] -- that's the graded answer; see the diagram variant's
    // matching comment above.
    let stateText = chipText ? `filled with ${chipText}` : 'empty';
    if (submitted && feedback) {
      const pass = feedback[i].pass;
      slotCls += pass ? ' correct' : ' incorrect';
      slotState += pass ? '-ok' : '-no';
      stateText += pass ? ', correct' : `, incorrect, correct answer: ${item.labels[i]}`;
    }
    const ariaLabel = `Label slot for ${word} — ${stateText}`;
    const interactive = !submitted;
    return `
    <div class="tarkeeb-col">
      <div class="tarkeeb-word">${esc(word)}</div>
      <div class="${slotCls}" role="button" ${interactive ? 'tabindex="0"' : 'tabindex="-1" aria-disabled="true"'} aria-label="${escAttr(ariaLabel)}" data-action="tarkeebSlotClick" data-slot="${i}" data-key="${escAttr(key)}">${chipText ? `<span class="tarkeeb-label-text">${esc(chipText)}</span>` : ''}</div>
    </div>`;
  }).join('');

  const tray = tarkeebTrayHtml(ts, key);

  const allPlaced = ts.placements.every((p) => p !== null && p !== undefined);
  const passed = submitted && feedback && feedback.every((f) => f.pass);

  return `
  <div class="tarkeeb" data-tarkeeb-key="${escAttr(key)}">
    <p class="exercise-prompt">${escBidi(item.instruction)}</p>
    <div class="tarkeeb-row" dir="rtl">${wordCols}</div>
    ${showTranslation && item.translation ? `<div class="tarkeeb-diagram-translation">${esc(item.translation)}</div>` : ''}
    <div class="tarkeeb-tray-label">Drag each label onto its word, or tap a label then its word to place it (tap a filled slot to clear it)</div>
    <div class="tarkeeb-tray" dir="rtl">${tray}</div>
    <div class="action-row">
      ${!submitted ? checkButton('checkTarkeeb', allPlaced, `data-key="${escAttr(key)}"`) : ''}
      ${!submitted ? `<button class="btn btn-ghost" data-action="resetTarkeeb" data-key="${escAttr(key)}">Reset</button>` : ''}
      ${submitted ? `<span class="tag ${passed ? 'tag-accent' : 'tag-outline'}">${passed ? '✓ Correct' : '✗ Not quite'}</span>` : ''}
    </div>
  </div>`;
}

// --- Practice Mode --------------------------------------------------------

const PRACTICE_PRESET_COUNTS = [10, 20, 40];

// Presets smaller than the pool stay selectable as-is; "All" always appears
// and covers whatever's left, so there's never a redundant pair of buttons
// offering the same count.
function practiceCountOptions(poolLen) {
  const opts = PRACTICE_PRESET_COUNTS.filter((n) => n < poolLen).map((n) => ({ label: String(n), count: n }));
  opts.push({ label: 'All', count: poolLen });
  return opts;
}

// The popout that expands under the module page's "Practice Mode" button --
// picking a tab and a count starts the session immediately (see
// startPractice), so there's no separate "confirm" step.
// The three vocab question directions (see the vocabType tag on generated
// vocab bank items in content-fstu/module-0N.js) -- shared between the
// Practice Mode popout and Schedule tab's Revision panel, the two places a
// vocab session can be started, so picking a direction actually narrows the
// pool instead of the three being mixed together.
const VOCAB_TYPES = [
  { id: 'en-ar', label: 'EN → AR' },
  { id: 'ar-en', label: 'AR → EN' },
  { id: 'form', label: 'Plural/مصدر' },
];

function vocabTypeTabsHtml(activeType, actionName) {
  return `
    <div class="practice-tabs practice-tabs-sub">
      ${VOCAB_TYPES.map((t) => `<button class="practice-tab ${activeType === t.id ? 'active' : ''}" data-action="${actionName}" data-vocab-type="${t.id}">${esc(t.label)}</button>`).join('')}
    </div>`;
}

function practiceSetupPanelHtml(state, mod) {
  const hasTarkeeb = moduleHasTarkeeb(mod);
  const kind = state.practiceSetupKind === 'tarkeeb' && !hasTarkeeb ? 'mcq' : (state.practiceSetupKind || 'mcq');
  const vocabType = state.practiceVocabType || 'en-ar';
  const mcqPool = getMcqPool(mod.id, state.completed, state.forceUnlockAll);
  const tarkeebPool = hasTarkeeb ? getTarkeebPool(mod.id, state.completed, state.forceUnlockAll) : [];
  const vocabPool = getVocabPool(mod.id, state.completed, vocabType, state.forceUnlockAll);
  const pool = kind === 'tarkeeb' ? tarkeebPool : kind === 'vocab' ? vocabPool : mcqPool;

  // One card per kind of drill this module can offer: the radio carries the
  // choice, the count says how much there is to draw on, and the line under
  // it says what that kind actually asks you to do.
  const kinds = [
    { id: 'mcq', name: 'MCQ', count: mcqPool.length, desc: 'Multiple choice, drawn from the lesson quizzes and book exercises you have cleared.' },
    ...(hasTarkeeb ? [{ id: 'tarkeeb', name: 'تركيب', ar: true, count: tarkeebPool.length, desc: 'Label each word in a sentence with its grammatical role.' }] : []),
    { id: 'vocab', name: 'Vocab', count: vocabPool.length, desc: 'Word meanings in both directions, plus plural and مصدر forms.' },
  ];

  const kindCards = kinds.map((k) => `
    <button class="kind-card${kind === k.id ? ' is-selected' : ''}" data-action="setPracticeTab" data-kind="${k.id}">
      <span class="kind-radio" aria-hidden="true"><span class="kind-radio-dot"></span></span>
      <span class="kind-card-body">
        <span class="kind-card-head">
          <span class="kind-card-name"${k.ar ? ' lang="ar" dir="rtl"' : ''}>${esc(k.name)}</span>
          <span class="kind-card-count">${k.count} card${k.count === 1 ? '' : 's'}</span>
        </span>
        <span class="kind-card-desc">${escBidi(k.desc)}</span>
      </span>
    </button>`).join('');

  const tarkeebTranslationsOn = state.practiceTarkeebTranslations == null
    ? state.tarkeebTranslations !== false
    : state.practiceTarkeebTranslations !== false;

  const kindLabel = kind === 'tarkeeb' ? 'تركيب' : kind === 'vocab' ? 'Vocab' : 'MCQ';
  const emptyText = state.forceUnlockAll
    ? `No ${kindLabel} practice questions exist in this module.`
    : `Complete a lesson to unlock ${kindLabel} practice questions.`;

  // Session length is the last choice and the one that starts the session --
  // picking a count IS the start, so there is no separate confirm step.
  const lengthControl = pool.length === 0
    ? emptyStateHtml({ icon: 'target', title: `No ${kindLabel} cards yet`, note: escBidi(emptyText) })
    : `
      <div class="setup-group">
        <div class="kicker">Session length</div>
        <div class="practice-tabs practice-tabs-sub">
          ${practiceCountOptions(pool.length).map((o) => `<button class="practice-tab" data-action="startPractice" data-kind="${kind}" data-count="${o.count}">${o.label}</button>`).join('')}
        </div>
      </div>`;

  const vocabControl = kind === 'vocab' && pool.length ? `
    <div class="setup-group">
      <div class="kicker">Question direction</div>
      ${vocabTypeTabsHtml(vocabType, 'setPracticeVocabType')}
    </div>` : '';

  const tarkeebControl = kind === 'tarkeeb' && pool.length ? `
    <div class="setup-group">
      <div class="kicker">Translation</div>
      <div class="practice-tabs practice-tabs-sub" role="group" aria-label="Tarkeeb translation visibility">
        <button class="practice-tab ${tarkeebTranslationsOn ? 'active' : ''}" data-action="setPracticeTarkeebTranslation" data-show="1">Show</button>
        <button class="practice-tab ${!tarkeebTranslationsOn ? 'active' : ''}" data-action="setPracticeTarkeebTranslation" data-show="0">Hide</button>
      </div>
    </div>` : '';

  return `
    <div class="practice-popout">
      <div class="practice-popout-head">
        <span class="practice-popout-title">Practice Mode</span>
        <button class="practice-popout-close" data-action="closePracticeSetup" aria-label="Close">✕</button>
      </div>
      <p class="lede practice-popout-lede">Drawn only from lessons you've finished — no new material. Pick what to drill and how long a session should run.</p>
      <div class="kind-cards">${kindCards}</div>
      ${vocabControl}
      ${tarkeebControl}
      ${lengthControl}
    </div>`;
}

function nextPracticeButton(isLast) {
  return `<button class="btn btn-primary btn-push-right" data-action="nextPracticeQuestion">${isLast ? 'See results →' : 'Next question →'}</button>`;
}

// Shared by every session source -- 'module' (undefined/default) is the
// original per-module Practice Mode, with a module page to fall back to;
// 'revision' has none, so it bails to the Schedule tab instead; 'path'
// always bails to the path map; 'masteryV2' bails to wherever it was
// launched from (the path map if pathActive, else the module page);
// 'unlockTest' bails to the dashboard (a course/track test's own exit view
// is Home instead, but that's not a `body` this dispatcher
// renders -- see exitPracticeSession in js/main.js).
function sessionFallback(state, MODULES) {
  const src = state.practice && state.practice.source;
  if (src === 'path') return pathMapHtml(state);
  if (src === 'masteryV2') return state.pathActive ? pathMapHtml(state) : modulePageHtml(state, MODULES);
  if (src === 'revision') return scheduleHtml(state, MODULES);
  if (src === 'unlockTest') return dashboardHtml(state, MODULES);
  return modulePageHtml(state, MODULES);
}

// Checkpoint type names are Arabic throughout the path (row heading, setup
// popout, and this in-session kicker all share the same dictionary) --
// اِمْتِحَان distinguishes an ordinary mcq test from اِخْتِبَارُ الْقِسْمِ, the
// bigger section-ending exam, even though both translate loosely to "test"
// in English.
const PATH_KIND_LABELS = {
  mcqCheckpoint: 'اِمْتِحَان', vocabCheckpoint: 'الْمُفْرَدَات', tarkeebCheckpoint: 'تركيب', revision: 'مُرَاجَعَة',
  sectionTest: 'اِخْتِبَارُ الْقِسْمِ', groupTest: 'اِخْتِبَارُ الْمَجْمُوْعَةِ',
};

function sessionKicker(p, mod) {
  if (p.source === 'path') {
    const label = PATH_KIND_LABELS[p.kind] || p.kind;
    return `MY PATH · <bdi lang="ar" dir="rtl">${esc(label)}</bdi>${p.mastery ? ' · MASTERY' : ''}`;
  }
  if (p.source === 'masteryV2') return 'MASTERY';
  if (p.source === 'unlockTest') return 'UNLOCK TEST';
  if (p.source === 'revision') {
    const label = p.kind === 'revisionVocab' ? 'Vocab' : mod ? mod.title : '';
    return `REVISION${label ? ` · ${esc(label)}` : ''}`;
  }
  const label = p.kind === 'tarkeeb' ? 'تركيب' : p.kind === 'vocab' ? 'Vocab' : 'MCQ';
  return `PRACTICE · ${label}`;
}

function practiceHtml(state, MODULES) {
  const p = state.practice;
  if (!p) return modulePageHtml(state, MODULES);
  // 'path' spans more than one lesson (and even more than one course) at
  // once, and so does a 'revisionVocab' session (the whole course's
  // unlocked vocab, no single module) -- no single owning module to look up
  // for either. Neither does an 'unlockTest' session -- a course/track test
  // spans multiple modules (possibly across courses), and even a module-skip
  // test draws from the modules BEFORE its target, not the target itself.
  // 'module', 'masteryV2', and an ordinary (module-quiz) 'revision' session
  // (pinned to one fully-completed module -- see buildModuleRevisionQueue in
  // js/state.js) all have exactly one.
  const mod = (p.source === 'path' || p.source === 'unlockTest' || p.kind === 'revisionVocab') ? null : MODULES.find((m) => m.id === p.moduleId);
  if (p.source === 'module' && !mod) return sessionFallback(state, MODULES);

  const poolForKind = (mcqPool, tarkeebPool, vocabPool) => (
    p.kind === 'tarkeeb' ? tarkeebPool : p.kind === 'vocab' ? vocabPool : mcqPool
  );
  const pathNode = p.source === 'path' ? findPathNode(p.nodeId) : null;
  let pool;
  if (p.source === 'revision') {
    pool = p.kind === 'revisionVocab' ? getUnlockedVocabPool(state.completed, undefined, state.forceUnlockAll) : moduleRevisionPool(p.moduleId, state.completed, state.forceUnlockAll);
  } else if (p.source === 'masteryV2') {
    pool = masteryV2Pool(p.moduleId, p.lessonId);
  } else if (p.source === 'path') {
    // A skip-ahead session's queue is sampled from the wider cumulative
    // pool (see startPathSkipAheadTest/buildPathSectionTestQueue in
    // js/main.js) -- rendering the current question has to resolve its key
    // against that SAME pool, or any key from outside the node's own
    // narrow window falls through to sessionFallback below as if the item
    // had vanished mid-session.
    pool = pathNode ? (p.skipAhead ? pathSkipAheadFullPool(pathNode) : pathFullPool(pathNode)) : [];
  } else if (p.source === 'unlockTest') {
    pool = p.unlockKind === 'course' ? courseUnlockTestPool(p.targetId)
      : p.unlockKind === 'track' ? trackUnlockTestPool(p.targetId)
        : moduleSkipTestPool(p.targetId);
  } else {
    pool = poolForKind(
      getMcqPool(mod.id, state.completed, state.forceUnlockAll),
      getTarkeebPool(mod.id, state.completed, state.forceUnlockAll),
      getVocabPool(mod.id, state.completed, undefined, state.forceUnlockAll),
    );
  }
  const key = p.queue[p.index];
  const entry = pool.find((e) => e.key === key);
  // The unlocked pool can only grow between sessions, never shrink mid-one --
  // but bail safely rather than render a missing item.
  if (!entry) return sessionFallback(state, MODULES);

  // A graded session (Mastery, or a My Path checkpoint/test) can become
  // mathematically un-passable before the queue actually runs out -- once
  // that's true, the CURRENT question is effectively the last one that
  // matters, so its button reads "See Results" just like the real last
  // question would, even though more questions remain in the queue.
  // Reaching that button is what actually ends the session (see
  // nextPracticeQuestion in js/main.js) -- this only decides the label,
  // never ends anything by itself, so the learner always sees this
  // question's own feedback before finding out they've failed.
  const passRatio = p.source === 'masteryV2' ? 1 : p.source === 'unlockTest' ? UNLOCK_TEST_PASS_RATIO : pathNode ? pathCheckpointPassRatio(pathNode, p.mastery) : null;
  const doomed = p.submitted && passRatio !== null && !stillPassable(p, passRatio);
  const isLast = p.index + 1 >= p.queue.length || doomed;
  const progressPct = Math.round((p.index / p.queue.length) * 100);

  // One tick per queued question -- the same progress idiom the quiz uses,
  // so a drill and a quiz question read as the same kind of screen.
  const ticks = p.queue.map((_, i) => {
    const cls = i < p.index ? 'quiz-tick quiz-tick-done' : i === p.index ? 'quiz-tick quiz-tick-current' : 'quiz-tick';
    return `<div class="${cls}"></div>`;
  }).join('');
  const comboHtml = `
        <div class="quiz-combo">
          <span title="Combo">${icon('flame', 13, 2)}${p.combo || 0}</span>
          <span title="Session XP">${icon('star', 13, 2)}${p.xpGained || 0}</span>
        </div>`;

  // Which widget to render is decided per-QUESTION (entry.item.kind), not
  // per-session (p.kind) -- a My Path revision node mixes mcq/vocab items
  // with تركيب ones in the same queue, so p.kind (e.g. 'revision') doesn't
  // reliably say what the CURRENT question is. This also covers every
  // other session unchanged, since those are single-kind by construction
  // (p.kind and entry.item.kind always agree there).
  if (entry.item.kind === 'tarkeeb') {
    let body = renderTarkeeb(state, entry.item, entry.key, entry.moduleId);
    const ts = state.tarkeebState[entry.key];
    if (ts && ts.submitted) {
      body += `<div class="action-row">${nextPracticeButton(isLast)}</div>`;
    }
    return `
      <div class="quiz-page practice-page">
        <div class="quiz-head">
          <div class="quiz-crumb">${sessionKicker(p, mod)} · Question ${p.index + 1} of ${p.queue.length}</div>
          ${comboHtml}
        </div>
        <div class="quiz-ticks">${ticks}</div>
        <div class="quiz-body practice-body">
          ${body}
        </div>
        <div class="quiz-foot">
          <button class="btn btn-ghost btn-block" data-action="endPracticeSession">End session</button>
        </div>
      </div>`;
  }

  // MCQ (and vocab, which is also multiple-choice) practice mirrors the
  // end-of-lesson quiz's presentation exactly: the same unboxed
  // .quiz-question-single layout, live gamify strip, centered
  // "Question X of Y", <h2> prompt, feedback line, and full-width primary
  // button -- using the combo/XP practice already tracks per session in
  // place of the quiz's own live streak/XP. Reveal-on-click, same as the
  // quiz: picking an option grades and shows it immediately (see
  // selectPracticeOption in main.js).
  const feedback = p.submitted ? `
    <div class="quiz-feedback${p.correct ? '' : ' quiz-feedback-incorrect'}">
      <div class="quiz-feedback-line">${p.correct ? 'Correct.' : `Not quite — the answer is ${escBidi(entry.item.options[entry.item.correct])}.`}</div>
      ${entry.item.explanation ? `<p class="quiz-feedback-explanation">${escBidi(entry.item.explanation)}</p>` : ''}
    </div>` : '';

  return `
    <div class="quiz-page practice-page">
      <div class="quiz-head">
        <div class="quiz-crumb">${sessionKicker(p, mod)} · Question ${p.index + 1} of ${p.queue.length}</div>
        ${comboHtml}
      </div>
      <div class="quiz-ticks">${ticks}</div>
      <div class="quiz-body practice-body">
        <h2 class="quiz-question">${escBidi(entry.item.prompt)}</h2>
        ${renderMcqOptions({ options: entry.item.options, correct: entry.item.correct, selected: p.selected, submitted: p.submitted, actionName: 'selectPracticeOption', order: state.optionOrder[key] })}
        ${feedback}
      </div>
      <div class="quiz-foot">
        <button class="btn btn-primary btn-block" data-action="nextPracticeQuestion" ${p.submitted ? '' : 'disabled'}>${isLast ? 'See results' : 'Next question'}</button>
        <button class="btn btn-ghost btn-block" style="margin-top:8px;" data-action="endPracticeSession">End session</button>
      </div>
    </div>`;
}

function practiceReviewHtml(state, MODULES) {
  const p = state.practice;
  if (!p) return modulePageHtml(state, MODULES);
  const mod = MODULES.find((m) => m.id === p.moduleId);
  const total = p.log.length;
  const correctCount = p.log.filter((l) => l.correct).length;
  const pct = total ? Math.round((correctCount / total) * 100) : 0;
  const missedCount = total - correctCount;

  // The real total, not recomputed -- xpForPracticeCorrect scales with the
  // combo at the moment each answer landed, so a flat correctCount*rate
  // formula would only be right if the combo never varied.
  const xpGained = p.xpGained || 0;
  const bestCombo = p.bestCombo || p.combo || 0;

  // Corrections first, then the full log: what went wrong is the reason to
  // be on this screen at all.
  const missedRows = p.log.map((l) => {
    if (l.correct) return '';
    return `
      <div class="review-card">
        <div class="review-card-head">
          <span class="review-card-title" lang="ar" dir="rtl">${escBidi(l.title)}</span>
          ${l.kind ? `<span class="tag">${esc(l.kind)}</span>` : ''}
        </div>
        ${l.answer ? `<div class="review-answer">Correct answer: ${escBidi(l.answer)}</div>` : ''}
      </div>`;
  }).join('');

  const rows = p.log.map((l, i) => `
    <div class="review-log-row">
      <span class="review-row-num">${i + 1}</span>
      <span class="review-row-title" lang="ar" dir="rtl">${escBidi(l.title)}</span>
      <span class="review-dot${l.correct ? ' review-dot-ok' : ''}">${l.correct ? '✓' : '✗'}</span>
    </div>`).join('');

  // EVERY My Path checkpoint is a real pass/fail gate -- 70% normally, 80%
  // for the section test, 100% for a Mastery attempt (pathCheckpointPassRatio
  // in js/state.js). Below that nothing was marked done, so the only sensible
  // next step is another attempt, not "continue".
  const pathNode = p.source === 'path' ? findPathNode(p.nodeId) : null;
  const pathPassRatio = pathNode ? pathCheckpointPassRatio(pathNode, p.mastery) : null;
  const pathPassed = pathNode && total > 0 && correctCount / total >= pathPassRatio;
  const isUnlockTest = p.source === 'unlockTest';
  const unlockPassed = isUnlockTest && total > 0 && correctCount / total >= UNLOCK_TEST_PASS_RATIO;

  // Each source has its own "what now": 'module' reopens the popout and
  // returns to the module page; 'revision' re-runs a fresh quiz of the same
  // kind and otherwise returns to Schedule; 'path' returns to the map,
  // except on a failed checkpoint, which offers the retry instead;
  // 'unlockTest' mirrors that. 'masteryV2' never reaches this screen.
  // Corrections are the point of this screen, so drilling just the misses is
  // the primary move where the source allows it (see drillMissed).
  const canDrillMissed = missedCount > 0 && (p.source === 'module' || p.source === 'revision');
  const drillMissedBtn = canDrillMissed
    ? `<button class="btn btn-primary btn-block" data-action="drillMissed">Drill the ${missedCount} you missed</button>`
    : '';

  const footer = p.source === 'revision' ? `
      <button class="btn ${drillMissedBtn ? 'btn-secondary' : 'btn-primary'} btn-block" data-action="${p.kind === 'revisionVocab' ? 'startRevisionVocab' : 'startRevision'}">Revise again</button>
      <button class="btn btn-ghost btn-block" data-action="closePracticeReview">Back to Schedule</button>`
    : pathNode && !pathPassed ? `
      <button class="btn btn-primary btn-block" data-action="startPathCheckpoint" data-node-id="${escAttr(pathNode.id)}" ${p.mastery ? 'data-mastery="1"' : ''}>Retry${p.mastery ? ' Mastery' : ''}</button>
      <button class="btn btn-ghost btn-block" data-action="closePracticeReview">Back to Path</button>`
    : p.source === 'path' ? `
      <button class="btn btn-primary btn-block" data-action="closePracticeReview">${p.mastery ? 'Back to Path' : 'Continue on My Path'}</button>`
    : isUnlockTest ? `
      ${unlockPassed ? '' : '<button class="btn btn-primary btn-block" data-action="retryUnlockTest">Retry test</button>'}
      <button class="btn btn-ghost btn-block" data-action="closePracticeReview">${unlockPassed ? 'Continue' : 'Back'}</button>`
    : `
      <button class="btn ${drillMissedBtn ? 'btn-secondary' : 'btn-primary'} btn-block" data-action="openPractice">Practice again</button>
      <button class="btn btn-ghost btn-block" data-action="closePracticeReview">Back to lessons</button>`;

  const kicker = pathNode
    ? `${p.mastery ? 'Mastery · ' : ''}${pathPassed ? 'Passed' : `Need ${Math.round(pathPassRatio * 100)}%`}`
    : isUnlockTest
      ? (unlockPassed ? 'Unlocked' : `Need ${Math.round(UNLOCK_TEST_PASS_RATIO * 100)}%`)
      : `Session complete${p.kind ? ` · ${esc(String(p.kind).toUpperCase())}` : ''}`;

  return `
    <div class="complete-page">
      <div class="complete-plate">
        <span class="complete-plate-ghost complete-plate-ghost-num" aria-hidden="true">${pct}</span>
        <div class="complete-plate-inner">
          <div class="complete-tag">${kicker}</div>
          <div class="complete-score">${correctCount} / ${total}</div>
          ${mod ? `<div class="complete-meta"><bdi lang="ar">${esc(mod.title)}</bdi></div>` : ''}
          <div class="complete-ledger">
            <div>
              <div class="complete-ledger-value">${pct}%</div>
              <div class="complete-ledger-label">Accuracy</div>
            </div>
            <div>
              <div class="complete-ledger-value complete-ledger-value-accent">+${xpGained}</div>
              <div class="complete-ledger-label">XP earned</div>
            </div>
            <div>
              <div class="complete-ledger-value">×${bestCombo}</div>
              <div class="complete-ledger-label">Best combo</div>
            </div>
          </div>
        </div>
      </div>
      <div class="complete-body">
        ${missedCount ? `
          <div class="kicker">Worth another look</div>
          <div class="review-list">${missedRows}</div>` : ''}
        <div class="section-head section-head-sub">
          <h3 class="section-head-title">All ${total} card${total === 1 ? '' : 's'}</h3>
          <span class="section-head-meta">In the order you answered</span>
        </div>
        <div class="review-log">${rows}</div>
      </div>
      <div class="complete-foot">${drillMissedBtn}${footer}</div>
    </div>`;
}

// --- Schedule tab: Deadline / Revision --------------------------------
// Two independent planning tools sharing one landing page. Deadline picks a
// target date and works out a daily lesson quota, recomputed live on every
// render from remaining/days-left rather than a stored plan (see state.js's
// scheduleDeadline comment). Revision builds a due-today deck from the
// whole unlocked course, spaced by a learner-set frequency. Both reuse the
// exact same practice/practiceReview screens (see practiceHtml's `source`
// handling) -- this file only builds the setup panels that launch them.
// Mastery no longer lives here -- see lessonPreviewHtml for the app-wide
// per-lesson replacement.

function scheduleHtml(state, MODULES, revealedKeys) {
  const attempt = state.scheduleTabAttempt || 0;
  const resetHour = state.dailyResetHour || 0;
  const today = todayISO(resetHour);
  const total = totalLessons();
  const cleared = totalLessonsCleared(state.completed);
  const remaining = Math.max(0, total - cleared);
  const deadline = state.scheduleDeadline[state.courseId];
  const summary = deadlineSummary(state, MODULES);
  const upcoming = upcomingLessons(state, MODULES);
  const nextUp = upcoming.find((u) => u.unlocked);

  const todayLabel = new Date(`${today}T00:00:00`).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });

  let lede;
  if (remaining === 0) lede = 'Every lesson in this course is done — nothing left to schedule.';
  else if (!summary) lede = 'Pick a target date and this works out how many lessons a day it takes.';
  else if (summary.overdue) lede = `Your target date has passed with ${remaining} lesson${remaining === 1 ? '' : 's'} still to go.`;
  else lede = `${summary.dailyTarget} lesson${summary.dailyTarget === 1 ? '' : 's'} a day keeps you on course for ${esc(formatDeadlineDate(summary.deadline))}. Today's target adjusts itself whenever you fall behind or get ahead.`;

  // Today: the day's own target, one tick per lesson in it, and the single
  // next lesson to start if the target isn't met yet.
  const todayCard = summary ? `
    <div class="today-card">
      <div class="today-card-head">
        <span class="kicker">Today</span>
        <span class="today-date">${esc(todayLabel)}</span>
      </div>
      <div class="today-figure"><strong>${summary.done}</strong> of ${summary.dailyTarget} lesson${summary.dailyTarget === 1 ? '' : 's'} done</div>
      <div class="today-ticks" aria-hidden="true">
        ${Array.from({ length: summary.dailyTarget }, (_, i) => `<span class="today-tick${i < summary.done ? ' today-tick-done' : ''}"></span>`).join('')}
      </div>
      ${summary.done < summary.dailyTarget && nextUp ? `
        <div class="today-next">
          <div class="today-next-body">
            <div class="kicker">${summary.dailyTarget - summary.done === 1 ? "One more to hit today's target" : `${summary.dailyTarget - summary.done} more to hit today's target`}</div>
            <div class="today-next-title" lang="ar" dir="rtl">${esc(nextUp.lesson.title)}</div>
          </div>
          <button class="btn btn-primary" data-action="openModule" data-module-id="${escAttr(nextUp.mod.id)}">Start</button>
        </div>` : ''}
    </div>` : '';

  const ledger = summary ? `
    <div class="ledger-inline">
      <div><span class="ledger-inline-value">${summary.remaining}</span><span class="ledger-inline-label">Lessons left</span></div>
      <div><span class="ledger-inline-value">${Math.abs(summary.diffDays)}</span><span class="ledger-inline-label">${summary.overdue ? 'Days overdue' : 'Days left'}</span></div>
      <div><span class="ledger-inline-value">${cleared} / ${total}</span><span class="ledger-inline-label">Cleared</span></div>
    </div>` : '';

  const upNext = upcoming.length ? `
    <div class="section-head schedule-section">
      <h2 class="section-head-title">Up next</h2>
      <span class="lesson-section-note">In course order</span>
    </div>
    <div class="up-next-list">
      ${upcoming.map(({ mod, lesson, unlocked }, i) => {
        const rowKey = `sched${attempt}_up_${mod.id}_${lesson.id}`;
        // Exactly one row ever reads as "the" next lesson -- the first
        // incomplete one in course order, which is always reachable
        // regardless of locks (nothing before it is left to finish). Every
        // OTHER row that's merely reachable (state.forceUnlockAll -- "Course
        // locks" off, the app's own default for a fresh install) still gets
        // a real, clickable button, just without the accent highlight that
        // singling one out as "next" is supposed to mean -- with locks off,
        // isLessonUnlocked is true for the whole list, and giving every row
        // that same gold treatment made all five look equally "the" next
        // one instead of naming just one.
        const isNext = i === 0 && unlocked;
        const cls = `up-next-row${isNext ? ' is-next' : ''}${unlocked ? '' : ' is-locked'}`;
        return `
          <button class="${revealCls(rowKey, cls, revealedKeys)}"
            ${unlocked ? `data-action="openModule" data-module-id="${escAttr(mod.id)}"` : 'disabled'}>
            <span class="up-next-ring">${unlocked ? icon('chevronRight', 11, 2.4) : icon('lock', 10, 2)}</span>
            <span class="up-next-body">
              <span class="up-next-row-title" lang="ar" dir="rtl">${esc(lesson.title)}</span>
              <span class="up-next-meta"><bdi lang="ar">${esc(mod.title)}</bdi>${isNext ? ' · next' : ''}</span>
            </span>
          </button>`;
      }).join('')}
    </div>` : '';

  return `
    <div class="schedule-page">
      ${pageHeaderHtml({ title: 'Schedule', ar: 'الجدول الزمني', lede })}
      <div class="two-col">
      <div class="two-col-main">
      ${todayCard}
      ${ledger}
      ${upNext}
      </div>
      <div class="two-col-side">
      ${scheduleRevisionHtml(state, MODULES, revealedKeys, attempt)}
      <div class="section-head schedule-section">
        <h2 class="section-head-title">Plan</h2>
      </div>
      <div class="plan-row">
        <label id="schedule-deadline-label">Target completion date</label>
        <div class="deadline-picker-wrap">
          <button type="button" class="plan-input reset-hour-trigger${deadline ? '' : ' is-empty'}" data-action="toggleDeadlinePicker"
            aria-haspopup="dialog" aria-expanded="${state.deadlinePickerOpen ? 'true' : 'false'}" aria-labelledby="schedule-deadline-label">
            <span>${deadline ? esc(formatDeadlineDate(deadline)) : 'Not set'}</span>
            <span aria-hidden="true">▾</span>
          </button>
          ${state.deadlinePickerOpen ? deadlinePickerHtml(state, deadline, today) : ''}
        </div>
      </div>
      <div class="plan-row">
        <label id="schedule-reset-hour-label">Daily reset time</label>
        <div class="reset-hour-picker">
          <button type="button" class="plan-input reset-hour-trigger" data-action="toggleResetHourMenu"
            aria-haspopup="listbox" aria-expanded="${state.resetHourMenuOpen ? 'true' : 'false'}" aria-labelledby="schedule-reset-hour-label">
            <span>${formatResetHour(resetHour)}</span>
            <span aria-hidden="true">▾</span>
          </button>
          ${state.resetHourMenuOpen ? resetHourMenuHtml(resetHour) : ''}
        </div>
      </div>
      <p class="plan-note">Study past midnight without it counting as tomorrow — the reset hour also sets your streak's day boundary.</p>
      </div>
      </div>
    </div>`;
}

// The next few not-yet-completed lessons in course order. Thanks to the
// app's own sequential gating (a lesson unlocks only once the one before it
// is done, a module only once the one before IT is fully done -- see
// isLessonUnlocked/isModuleUnlocked in content/index.js), at most the very
// first entry here is ever actually unlocked; everything after it is
// necessarily locked until that one is cleared. Still computed per-entry via
// isLessonUnlocked rather than assumed, so this stays correct even if that
// gating logic ever changes.
function upcomingLessons(state, MODULES, limit = 5) {
  const out = [];
  for (const m of MODULES) {
    for (const l of m.lessons) {
      if (isLessonComplete(m.id, l.id, state.completed)) continue;
      out.push({ mod: m, lesson: l, unlocked: isLessonUnlocked(m.id, l.id, state.completed, state.unlockedModules, state.forceUnlockAll) });
      if (out.length >= limit) return out;
    }
  }
  return out;
}


// 12-hour labels for the reset-hour <select> below -- e.g. 4 -> "4:00 AM",
// 16 -> "4:00 PM". state.dailyResetHour itself stays a plain 0-23 int
// (that's what todayISO/main.js/persistence.js all consume); this is
// display-only.
// The reset-hour picker's popover, in place of a native <select> -- this is
// the app's own themed listbox (same idea as courseMenuHtml above), a
// scrollable single column of the 24 hours with the current one marked.
// The target-completion-date picker's popover, in place of a native
// <input type="date"> -- Chromium's own calendar popup is OS/UA chrome
// CSS cannot reach (verified: accent-color reaches the closed field, not
// the popup's day highlight), so this is a real calendar, built the same
// way the reset-hour listbox above replaces a <select>.
//
// state.deadlinePickerMonth is the panel's own browsing cursor ("YYYY-MM"),
// independent of the SELECTED deadline -- so paging to a future month to
// pick a date doesn't require committing anything first. It's cleared
// (see toggleDeadlinePicker in js/main.js) each time the panel opens, so a
// fresh open always starts back at the selected deadline's month, or
// today's if none is set yet, rather than wherever a previous browse left
// off.
function deadlinePickerHtml(state, deadline, today) {
  const cursor = state.deadlinePickerMonth || deadline || today;
  const [cy, cm] = cursor.slice(0, 7).split('-').map(Number);
  const monthLabel = new Date(cy, cm - 1, 1).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

  // Monday-first, matching both the en-GB dd/mm/yyyy format this field
  // reads back into and the native picker it replaces.
  const firstWeekday = (new Date(cy, cm - 1, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(cy, cm, 0).getDate();
  const daysInPrevMonth = new Date(cy, cm - 1, 0).getDate();

  const cells = [];
  for (let i = firstWeekday - 1; i >= 0; i -= 1) {
    cells.push({ date: new Date(cy, cm - 2, daysInPrevMonth - i), inMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d += 1) {
    cells.push({ date: new Date(cy, cm - 1, d), inMonth: true });
  }
  // Six full rows every month, so paging doesn't reflow the panel's height.
  let trailDay = 1;
  while (cells.length < 42) {
    cells.push({ date: new Date(cy, cm, trailDay), inMonth: false });
    trailDay += 1;
  }

  const dayCells = cells.map(({ date, inMonth }) => {
    const iso = isoDateAt(date.getTime());
    const disabled = iso < today;
    const selected = iso === deadline;
    const isToday = iso === today;
    const cls = [
      'deadline-day',
      inMonth ? '' : 'is-outside',
      selected ? 'is-selected' : '',
      isToday && !selected ? 'is-today' : '',
    ].filter(Boolean).join(' ');
    return disabled
      ? `<span class="${cls}" aria-hidden="true">${date.getDate()}</span>`
      : `<button class="${cls}" data-action="pickScheduleDeadline" data-date="${iso}" aria-pressed="${selected}">${date.getDate()}</button>`;
  }).join('');

  return `
    <div class="deadline-picker">
      <div class="deadline-picker-head">
        <span class="deadline-picker-month">${esc(monthLabel)}</span>
        <span class="deadline-picker-nav">
          <button type="button" data-action="deadlinePickerPrevMonth" aria-label="Previous month">${icon('arrowLeft', 14, 2)}</button>
          <button type="button" data-action="deadlinePickerNextMonth" aria-label="Next month">${icon('chevronRight', 14, 2)}</button>
        </span>
      </div>
      <div class="deadline-picker-weekdays">
        ${['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((w) => `<span>${w}</span>`).join('')}
      </div>
      <div class="deadline-picker-grid">${dayCells}</div>
      <div class="deadline-picker-foot">
        <button type="button" class="text-link-btn" data-action="clearScheduleDeadline" ${deadline ? '' : 'disabled'}>Clear</button>
        <button type="button" class="text-link-btn" data-action="pickScheduleDeadline" data-date="${today}">Today</button>
      </div>
    </div>`;
}

function resetHourMenuHtml(resetHour) {
  return `
    <div class="reset-hour-menu" role="listbox" aria-label="Daily reset time">
      ${Array.from({ length: 24 }, (_, h) => {
        const selected = h === resetHour;
        return `
          <button class="reset-hour-menu-item${selected ? ' is-selected' : ''}" role="option" aria-selected="${selected}" data-action="setDailyResetHour" data-hour="${h}">
            <span>${formatResetHour(h)}</span>
            ${selected ? icon('check', 13, 2.6) : ''}
          </button>`;
      }).join('')}
    </div>`;
}

function formatResetHour(h) {
  const period = h < 12 ? 'AM' : 'PM';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:00 ${period}`;
}


// Redesigned: no longer a spaced-repetition due-today deck spanning the
// whole course -- instead a single fixed 30-question quiz (20 mcq + 10
// تركيب, see buildModuleRevisionQueue in js/state.js) over ONE module, so a
// learner can go back and drill a specific chapter they want to keep sharp.
// Only modules the learner has FULLY completed are offered (isModuleComplete
// below) -- a partially-done module has nothing behind it that's fair game
// yet, same "only completed lessons contribute" rule Practice Mode and old
// Revision Mode both already followed.
function scheduleRevisionHtml(state, MODULES, revealedKeys, attempt) {
  const hasVocab = courseHasVocab();
  const kind = state.scheduleRevisionKind === 'vocab' && hasVocab ? 'vocab' : 'module';

  // The vocab kind is omitted entirely for a vocab-less course (annahw,
  // sarf-advanced -- see courseHasVocab) rather than showing a permanently
  // empty toggle. The design only draws the module quiz, which is what every
  // course has.
  const kindTabs = hasVocab ? `
    <div class="practice-tabs">
      <button class="practice-tab ${kind === 'module' ? 'active' : ''}" data-action="setScheduleRevisionKind" data-kind="module">Module quiz</button>
      <button class="practice-tab ${kind === 'vocab' ? 'active' : ''}" data-action="setScheduleRevisionKind" data-kind="vocab">Vocab</button>
    </div>` : '';

  const body = kind === 'vocab'
    ? scheduleRevisionVocabHtml(state, attempt, hasVocab ? 1 : 0)
    : scheduleRevisionModuleHtml(state, MODULES, revealedKeys, attempt, hasVocab ? 1 : 0);

  // The "30 questions" note used to print unconditionally, so a reader with
  // nothing yet to revise was told the size of a quiz they cannot take,
  // directly above the panel explaining that there isn't one. Section
  // metadata should describe what the section is actually showing.
  const anyRevisable = MODULES.some((m) => isModuleComplete(m.id, state.completed));
  return `
    <div class="section-head schedule-section">
      <h2 class="section-head-title">Revision quiz</h2>
      ${anyRevisable ? '<span class="lesson-section-note">30 questions</span>' : ''}
    </div>
    <div class="schedule-panel">
      ${kindTabs}
      ${body}
    </div>`;
}

// The per-module mcq+تركيب quiz -- unchanged from its original standalone
// version, just re-homed as one of Revision's two kinds.
function scheduleRevisionModuleHtml(state, MODULES, revealedKeys, attempt, baseOrder) {
  // Always completed-only, regardless of state.forceUnlockAll ("Course
  // locks" off, which is every fresh install's own default -- see
  // defaultForceUnlockAll in js/persistence.js, not a niche dev toggle).
  // That flag governs whether content can be BROWSED ahead of normal
  // progress; revision is reviewing what's already been learned, a
  // different axis entirely -- a module merely reachable because locks are
  // off has nothing in it yet worth revising.
  const eligible = MODULES.filter((m) => isModuleComplete(m.id, state.completed));

  if (!eligible.length) {
    return emptyStateHtml({
      icon: 'award',
      title: 'No modules to revise yet',
      note: 'Finish every lesson in a module and its Revision quiz unlocks here.',
    });
  }

  const mode = state.scheduleRevisionMode === 'random' ? 'random' : 'pick';
  const pickedId = mode === 'pick' && eligible.some((m) => m.id === state.scheduleRevisionModuleId)
    ? state.scheduleRevisionModuleId : null;

  const modeTabs = `
    <div class="practice-tabs">
      <button class="practice-tab ${mode === 'pick' ? 'active' : ''}" data-action="setScheduleRevisionMode" data-mode="pick">Pick a module</button>
      <button class="practice-tab ${mode === 'random' ? 'active' : ''}" data-action="setScheduleRevisionMode" data-mode="random">Random</button>
    </div>`;

  // A radio row per eligible module: the dot carries the selection, the mix
  // on the right says what that module's 30 questions would be drawn from.
  const moduleRowHtml = (m) => {
    const counts = moduleRevisionCounts(m.id, state.completed, state.forceUnlockAll);
    const compo = counts.tarkeeb ? `${counts.mcq} MCQ + ${counts.tarkeeb} تركيب` : `${counts.mcq} MCQ`;
    const rowKey = `sched${attempt}_revrow_${m.id}`;
    const rowCls = `revision-module-row${pickedId === m.id ? ' is-selected' : ''}`;
    return `
      <button class="${revealCls(rowKey, rowCls, revealedKeys)}" data-action="setScheduleRevisionModule" data-module-id="${escAttr(m.id)}" role="radio" aria-checked="${pickedId === m.id}">
        <span class="revision-radio" aria-hidden="true"><span class="revision-radio-dot"></span></span>
        <span class="revision-module-title" lang="ar" dir="rtl">${esc(m.title)}</span>
        <span class="revision-module-meta">${escBidi(compo)}</span>
      </button>`;
  };

  const body = mode === 'pick'
    ? `<div class="revision-module-list" role="radiogroup" aria-label="Module to revise">${eligible.map(moduleRowHtml).join('')}</div>`
    : `<p class="lede revision-random-note">One of your ${eligible.length} completed module${eligible.length === 1 ? '' : 's'} will be picked when you start.</p>`;

  const canStart = mode === 'random' || !!pickedId;

  return `
    <p class="lede revision-lede">One completed module, 20 MCQ and 10 تركيب in random order — for keeping a chapter you've finished sharp.</p>
    ${modeTabs}
    ${body}
    <button class="btn btn-primary btn-block revision-start" data-action="startRevision" ${canStart ? '' : 'disabled'}>Start revision quiz</button>`;
}

// Course-wide vocab quiz -- reuses the path's own vocab-checkpoint idea
// (resurface seen-but-not-yet-learned words, weighted toward whichever are
// closest to the line, plus a trickle of brand-new ones and a few
// plural/مصدر "form" questions) against a HIGHER 10-correct bar and a 3:7
// unseen:seen split rather than the path's 50:50 -- see
// buildRevisionVocabQueue in js/state.js for the exact mix. Progress is
// shared with the path: a word the path already calls "learned" at 5
// correct still needs 5 more here before it stops appearing.
function scheduleRevisionVocabHtml(state, attempt, baseOrder) {
  const pool = getUnlockedVocabPool(state.completed, undefined, state.forceUnlockAll);
  if (!pool.length) {
    return emptyStateHtml({
      icon: 'star',
      title: 'No vocab to revise yet',
      note: state.forceUnlockAll ? 'No Vocab revision questions exist in this course yet.' : 'Complete a lesson and its words start appearing here.',
    });
  }
  const eligibleCount = pool.filter((e) => {
    const v = state.vocabExposure[e.key];
    return !v || v.count < REVISION_VOCAB_LEARNED_COUNT;
  }).length;

  const direction = state.scheduleRevisionVocabDirection === 'ar-en' ? 'ar-en' : 'en-ar';
  const directionPicker = `
    <p class="lede" style="margin-top:14px;">A few plural/مصدر questions are mixed in either way.</p>
    <div class="practice-tabs">
      <button class="practice-tab ${direction === 'en-ar' ? 'active' : ''}" data-action="setScheduleRevisionVocabDirection" data-vocab-type="en-ar">EN → AR</button>
      <button class="practice-tab ${direction === 'ar-en' ? 'active' : ''}" data-action="setScheduleRevisionVocabDirection" data-vocab-type="ar-en">AR → EN</button>
    </div>`;

  return `
    ${directionPicker}
    <p class="lede" style="margin-top:16px;">20 questions — mostly words you've already seen (the closer to learned, the more likely to come up), a few brand-new ones, and a handful of plural/مصدر questions. Answer a word correctly 10 times total (path sessions count too) and it stops appearing here.</p>
    ${eligibleCount
      ? `<button class="btn btn-primary btn-block" style="margin-top:8px;" data-action="startRevisionVocab">Start Vocab Revision</button>`
      : emptyStateHtml({
        icon: 'check',
        title: 'All caught up',
        note: "You've learned every unlocked vocab word — nothing left to revise.",
      })}`;
}

// --- Mastery result (app-wide replacement for the old Mastery Mode) -------
// Reached only via nextPracticeQuestion's masteryV2 branch in js/main.js --
// a single fixed-length pass over the lesson's whole تركيب+mcq+quiz pool,
// graded 100%-or-nothing. Returns to wherever it was launched from: the
// path map if pathActive, the module page otherwise.
function masteryV2CompleteHtml(state, MODULES) {
  const p = state.practice;
  const mod = p && MODULES.find((m) => m.id === p.moduleId);
  const lesson = mod && mod.lessons.find((l) => l.id === p.lessonId);
  const entry = p ? state.masteryV2[`${p.moduleId}_${p.lessonId}`] : null;
  const passed = !!(entry && entry.passed);
  const correctCount = p ? p.log.filter((l) => l.correct).length : 0;
  const total = p ? p.log.length : 0;

  const backAction = state.pathActive ? 'backToPath' : 'openModule';
  const backExtra = state.pathActive || !mod ? '' : `data-module-id="${escAttr(mod.id)}"`;
  const backLabel = state.pathActive ? 'Continue on My Path →' : 'Back to chapters';

  return `
    <div class="col complete-col">
      <div class="kicker" style="justify-content:center;display:flex;">${passed ? 'MASTERY ACHIEVED' : 'NOT QUITE'}</div>
      <h1 style="text-align:center;">${lesson ? esc(lesson.title) : 'Lesson'}</h1>
      <p class="lede" style="text-align:center;margin:0 auto;">${passed
        ? 'A flawless run across every تركيب, book-exercise, and lesson-quiz question in this lesson.'
        : `Mastery needs a perfect run — ${correctCount} of ${total} correct this time.`}</p>
      <div class="complete-buttons">
        ${!passed ? `<button class="btn btn-primary" data-action="retryMasteryV2">Retry Mastery</button>` : ''}
        <button class="btn ${passed ? 'btn-primary' : 'btn-ghost'}" data-action="${backAction}" ${backExtra}>${backLabel}</button>
      </div>
    </div>`;
}

// --- My Path ---------------------------------------------------------
// A Duolingo-style vertical node list interleaving fstu (Introductory Nahw)
// and sarf (Introductory Sarf) lessons with fixed-length checkpoints,
// spaced revision, and section/group tests -- see content/path.js's
// PATH_GROUPS for the actual node sequence (grouped into browsable chunks,
// see pathGroupsHtml below) and js/state.js for how a node's live question
// set gets resolved. Node lock/done state is derived live from
// state.pathNodeStatus (isPathNodeUnlocked/firstUnfinishedPathNodeIndex),
// never stored separately -- same idiom as isLessonUnlocked elsewhere.

function pathLessonRowHtml(state, node, index, unlocked, done, revealedKeys) {
  const course = COURSES.find((c) => c.id === node.courseId);
  const mod = course && course.modules.find((m) => m.id === node.moduleId);
  const lesson = mod && mod.lessons.find((l) => l.id === node.lessonId);
  if (!lesson) return '';
  const courseLabel = (node.courseId === 'sarf' || node.courseId === 'sarf-advanced') ? 'صرف' : 'نحو';
  const masteryEntry = state.masteryV2[`${node.moduleId}_${node.lessonId}`];
  const mastered = done && masteryEntry && masteryEntry.passed;
  const indicator = !unlocked ? icon('lock', 17, 2) : done ? icon('check', 19, 2.4) : icon('book', 16, 1.8);
  const tag = !unlocked
    ? `<span class="tag tag-neutral">Locked</span>`
    : mastered
      ? `<span class="tag tag-accent">${icon('award', 11, 2.6)} Mastered</span>`
      : done
        ? `<span class="tag tag-accent">${icon('check', 11, 2.6)} Done</span>`
        : `<span class="tag tag-accent">Start</span>`;
  const nodeKey = `path_node_${node.id}`;
  const rowCls = revealCls(nodeKey, ['path-node', 'path-node-lesson', unlocked ? '' : 'locked', mastered ? 'mastered' : ''].filter(Boolean).join(' '), revealedKeys);
  const dataAttrs = unlocked
    ? `data-action="enterPathLesson" data-course-id="${escAttr(node.courseId)}" data-module-id="${escAttr(node.moduleId)}" data-lesson-id="${escAttr(node.lessonId)}"`
    : 'disabled';
  return `
    <button class="${rowCls}" ${dataAttrs}>
      <div class="path-node-indicator">${indicator}</div>
      <div class="path-node-body">
        <span class="path-node-course-badge" lang="ar" dir="rtl">${esc(courseLabel)}</span>
        <h2>${esc(lesson.title)}</h2>
        <div class="path-node-subtitle">${escBidi(lesson.subtitle || '')}</div>
      </div>
      ${tag}
    </button>`;
}

// Checkpoint type names are Arabic (see PATH_KIND_LABELS' own comment) --
// اِمْتِحَان (mcq), الْمُفْرَدَات (vocab), تركيب, مُرَاجَعَة (revision).
const PATH_CHECKPOINT_META = {
  mcqCheckpoint: { label: 'اِمْتِحَان', icon: 'target' },
  vocabCheckpoint: { label: 'الْمُفْرَدَات', icon: 'book' },
  tarkeebCheckpoint: { label: 'تركيب', icon: 'target' },
  revision: { label: 'مُرَاجَعَة', icon: 'flame' },
};

function pathCheckpointRowHtml(node, index, unlocked, done, mastered, revealedKeys) {
  const meta = PATH_CHECKPOINT_META[node.type];
  const nodeKey = `path_node_${node.id}`;
  const rowCls = revealCls(nodeKey, ['path-node', 'path-node-checkpoint', unlocked ? '' : 'locked', done ? 'done' : '', mastered ? 'mastered' : ''].filter(Boolean).join(' '), revealedKeys);
  const indicator = !unlocked ? icon('lock', 17, 2) : mastered ? icon('award', 19, 2) : done ? icon('check', 19, 2.4) : icon(meta.icon, 16, 1.8);
  const tag = !unlocked
    ? `<span class="tag tag-neutral">Locked</span>`
    : mastered
      ? `<span class="tag tag-accent">${icon('award', 11, 2.6)} Mastered</span>`
      : done
        ? `<span class="tag tag-accent">${icon('check', 11, 2.6)} Done</span>`
        : `<span class="tag tag-accent">Start</span>`;
  // Every checkpoint routes through pathCheckpointSetupHtml first -- a vocab
  // direction picker for vocabCheckpoint, and once already passed once, a
  // Redo-vs-Mastery choice (see openPathCheckpointSetup in js/main.js).
  // تركيب checkpoints don't have a fixed length (see
  // buildPathTarkeebCheckpointQueue), so their subtitle names the 5-10
  // range instead of a single number.
  const dataAttrs = unlocked ? `data-action="openPathCheckpointSetup" data-node-id="${escAttr(node.id)}"` : 'disabled';
  const subtitle = node.type === 'tarkeebCheckpoint' ? '5-10 questions' : `${node.length} question${node.length === 1 ? '' : 's'}`;
  return `
    <button class="${rowCls}" ${dataAttrs}>
      <div class="path-node-indicator">${indicator}</div>
      <div class="path-node-body">
        <h3 lang="ar" dir="rtl">${esc(meta.label)}</h3>
        <div class="path-node-subtitle">${subtitle}</div>
      </div>
      ${tag}
    </button>`;
}

// Pre-checkpoint setup, shared by every checkpoint AND the section test --
// vocabCheckpoint gets a translation-direction picker (مصدر/plural "form"
// questions are mixed in regardless of the choice, see
// buildPathVocabCheckpointQueue); any node already passed once offers a
// choice between redoing it normally or attempting its double-length,
// 100%-required Mastery variant instead (data-mastery="1" on the same
// startPathCheckpoint action -- see js/main.js). Reached via
// openPathCheckpointSetup (a path-map row click), rendered globally
// alongside lessonPreviewHtml/badgeModalHtml so it overlays whatever's
// behind it.
function pathCheckpointSetupHtml(state) {
  const nodeId = state.pathCheckpointSetupNodeId;
  if (!nodeId) return '';
  const node = findPathNode(nodeId);
  if (!node) return '';
  const label = (node.type === 'sectionTest' || node.type === 'groupTest') ? node.label : PATH_CHECKPOINT_META[node.type].label;
  const done = isPathNodeDone(node, state.pathNodeStatus, state.completed);
  const mastered = !!(state.pathCheckpointMastery[node.id] && state.pathCheckpointMastery[node.id].passed);
  const isVocab = node.type === 'vocabCheckpoint';
  const direction = state.pathVocabDirection || 'en-ar';

  const directionPicker = isVocab ? `
    <p class="modal-sub">A few plural/مصدر questions are mixed in either way.</p>
    <div class="practice-tabs" style="justify-content:center;margin:4px 0 20px;">
      <button class="practice-tab ${direction === 'en-ar' ? 'active' : ''}" data-action="setPathVocabDirection" data-vocab-type="en-ar">EN → AR</button>
      <button class="practice-tab ${direction === 'ar-en' ? 'active' : ''}" data-action="setPathVocabDirection" data-vocab-type="ar-en">AR → EN</button>
    </div>` : `<p class="modal-sub">${Math.round(pathCheckpointPassRatio(node, false) * 100)}% needed to pass.</p>`;

  const actionButtons = !done
    ? `<button class="btn btn-primary" data-action="startPathCheckpoint" data-node-id="${escAttr(node.id)}">Start</button>`
    : `
      <button class="btn btn-secondary" data-action="startPathCheckpoint" data-node-id="${escAttr(node.id)}" data-mastery="1">${mastered ? 'Retake Mastery' : 'Mastery'}</button>
      <button class="btn btn-primary" data-action="startPathCheckpoint" data-node-id="${escAttr(node.id)}">Redo</button>`;

  return `
    <div class="modal-backdrop" data-action="closePathCheckpointSetup">
      <div class="modal" role="dialog" aria-modal="true" tabindex="-1" aria-label="${escAttr(label)}">
        <div class="card-kicker modal-kicker" lang="ar" dir="rtl">${esc(label)}</div>
        <h2>${isVocab ? 'Which way do you want to translate?' : done ? 'Redo, or go for Mastery?' : 'Ready to start?'}</h2>
        ${directionPicker}
        ${mastered ? `<div class="tag tag-accent" style="margin:4px 0 0;">${icon('award', 11, 2.6)} Mastered</div>` : ''}
        <div class="modal-buttons">
          <button class="btn btn-ghost" data-action="closePathCheckpointSetup">Cancel</button>
          ${actionButtons}
        </div>
      </div>
    </div>`;
}

// A LOCKED section/group test's own confirmation popout (see
// openPathSkipAheadPrompt/startPathSkipAheadTest in js/main.js) -- distinct
// from pathCheckpointSetupHtml above, which is only ever reached from an
// already-unlocked node. Spells out the consequence up front (everything
// before it, across both courses, gets backfilled as complete on a pass)
// rather than letting a learner stumble into it expecting an ordinary test.
function pathSkipAheadPromptHtml(state) {
  const nodeId = state.pathSkipAheadPromptNodeId;
  if (!nodeId) return '';
  const node = findPathNode(nodeId);
  if (!node) return '';
  const lessonCount = nodesBeforePathNode(nodeId).filter((n) => n.type === 'lesson').length;
  const counts = sectionTestCounts(node, false, true);
  const composition = [
    counts.mcq ? `${counts.mcq} MCQ` : null,
    counts.tarkeeb ? `${counts.tarkeeb} تركيب` : null,
    counts.vocab ? `${counts.vocab} Vocab` : null,
  ].filter(Boolean).join(' · ');
  const scopeWord = node.type === 'groupTest' ? 'group' : 'section';
  return `
    <div class="modal-backdrop" data-action="closePathSkipAheadPrompt">
      <div class="modal" role="dialog" aria-modal="true" tabindex="-1" aria-label="Jump ahead">
        <div class="card-kicker modal-kicker" lang="ar" dir="rtl">${esc(node.label)}</div>
        <h2>Jump ahead to this ${scopeWord}?</h2>
        <p class="modal-sub">A placement test covering everything up through this ${scopeWord}. Pass it at ${Math.round(node.passRatio * 100)}% and every lesson and checkpoint before it &mdash; ${lessonCount} lesson${lessonCount === 1 ? '' : 's'} in all, across both courses &mdash; gets marked complete, same as if you'd walked the path there normally.</p>
        <p class="modal-sub">${esc(composition)}</p>
        <div class="modal-buttons">
          <button class="btn btn-ghost" data-action="closePathSkipAheadPrompt">Cancel</button>
          <button class="btn btn-primary" data-action="startPathSkipAheadTest" data-node-id="${escAttr(node.id)}">Start Test</button>
        </div>
      </div>
    </div>`;
}

// A pure celebratory marker -- auto-completed the instant every node
// before it is done (see checkPathMilestones in js/main.js), nothing to
// click or score. Its heading names the ACHIEVEMENT (only true once
// `done`); the subtitle is what actually carries live status, which is why
// it's phrased as a state ("Earned"/"Reach here to earn it"/"Keep going")
// rather than a restatement of the heading.
function pathMilestoneRowHtml(node, index, unlocked, done, revealedKeys) {
  const nodeKey = `path_node_${node.id}`;
  const rowCls = revealCls(nodeKey, `path-node path-node-milestone${done ? ' done' : ''}`, revealedKeys);
  return `
    <div class="${rowCls}">
      <div class="path-node-indicator">${icon('award', 19, 2)}</div>
      <div class="path-node-body">
        <h2>${esc(node.label)}</h2>
        <div class="path-node-subtitle">${done ? 'Earned' : unlocked ? 'Reach here to earn it' : 'Keep going'}</div>
      </div>
    </div>`;
}

// The section-ending gate -- unlike every other checkpoint, this is a real
// scored test: reaching the end of the queue alone does NOT mark it done
// (see nextPracticeQuestion's sectionTest branch in js/main.js) -- only a
// passing score does, so the heading can't ever claim the section is
// complete before it actually is. sectionTestCounts caps the displayed
// composition to what's actually available in-window (grouping 1 has no
// تركيب content yet, for instance), so the subtitle never promises a count
// the test can't deliver.
// A locked section/group test is still selectable -- Duolingo-style
// "jump ahead" (see openPathSkipAheadPrompt/startPathSkipAheadTest in
// js/main.js): passing it backfills everything before it on the whole
// path as done, so it's never truly inert like a locked lesson/checkpoint
// row. `unlockable` mirrors path-group-card.locked.unlockable's own
// styling (see styles.css) -- locked, but clickable, with its own cursor.
function pathSectionTestRowHtml(node, index, unlocked, done, mastered, revealedKeys) {
  const counts = sectionTestCounts(node);
  const nodeKey = `path_node_${node.id}`;
  const rowCls = revealCls(nodeKey, ['path-node', 'path-node-sectiontest', unlocked ? '' : 'locked unlockable', done ? 'done' : '', mastered ? 'mastered' : ''].filter(Boolean).join(' '), revealedKeys);
  const indicator = !unlocked ? icon('lock', 17, 2) : mastered ? icon('award', 19, 2) : done ? icon('check', 19, 2.4) : icon('award', 18, 2);
  const tag = !unlocked
    ? `<span class="tag tag-neutral">${icon('lock', 11, 2.6)} Jump ahead</span>`
    : mastered
      ? `<span class="tag tag-accent">${icon('award', 11, 2.6)} Mastered</span>`
      : done
        ? `<span class="tag tag-accent">${icon('check', 11, 2.6)} Passed</span>`
        : `<span class="tag tag-accent">Start</span>`;
  const dataAttrs = unlocked
    ? `data-action="openPathCheckpointSetup" data-node-id="${escAttr(node.id)}"`
    : `data-action="openPathSkipAheadPrompt" data-node-id="${escAttr(node.id)}"`;
  const parts = [
    counts.mcq ? `${counts.mcq} MCQ` : null,
    counts.tarkeeb ? `${counts.tarkeeb} تركيب` : null,
    counts.vocab ? `${counts.vocab} Vocab` : null,
  ].filter(Boolean).join(' · ');
  return `
    <button class="${rowCls}" ${dataAttrs}>
      <div class="path-node-indicator">${indicator}</div>
      <div class="path-node-body">
        <h3 lang="ar" dir="rtl">${esc(node.label)}</h3>
        <div class="path-node-subtitle">${esc(parts)} · ${Math.round(node.passRatio * 100)}% to pass</div>
      </div>
      ${tag}
    </button>`;
}

// Which track (PATH_TRACKS entry) a given group belongs to -- used to pull
// that track's own kicker/title/subtitle for the group-map hero, so the map
// screen reads as "Advanced Path" rather than always "My Path" once the
// learner is inside the advanced track.
function trackForGroup(group) {
  return PATH_TRACKS.find((t) => t.groups.includes(group));
}

function pathMapHtml(state, revealedKeys = new Set()) {
  const group = state.pathGroupId && findPathGroup(state.pathGroupId);
  if (!group || !group.sections.length) return pathGroupsHtml(state, revealedKeys);
  const track = trackForGroup(group);
  const skeleton = groupSkeleton(group);
  const pathNodeStatus = state.pathNodeStatus;
  // A still-locked GROUP (see pathGroupCardHtml -- these are now enterable
  // so a section/group test inside can be jumped to) must not let its
  // ordinary lesson/checkpoint rows read as unlocked just because they'd
  // be first-in-sequence -- isPathNodeUnlocked has no notion of "the whole
  // group isn't earned yet," it only ever checks node-to-node sequencing
  // within the skeleton. Force every non-test row locked here instead;
  // section/group test rows are untouched, since THEY are exactly what
  // "jump ahead" is for (pathSectionTestRowHtml already renders a locked
  // one as a clickable Jump-ahead row, not a dead end).
  const groupLocked = !isGroupUnlocked(track.groups, track.groups.indexOf(group), pathNodeStatus, state.completed, state.forceUnlockAll);
  const rows = skeleton.map((node, i) => {
    if (node.type === 'sectionHeader') {
      // Section 1's header carries a hand-authored arabicTitle; sections
      // 2+ are numbered only (see buildSectionNodes in content/path.js) --
      // the second line only renders when one actually exists.
      return `
        <div class="path-section-heading">
          <span>${esc(node.title)}</span>
          ${node.arabicTitle ? `<bdi lang="ar" dir="rtl">${esc(node.arabicTitle)}</bdi>` : ''}
        </div>`;
    }
    const isTest = node.type === 'sectionTest' || node.type === 'groupTest';
    const unlocked = groupLocked && !isTest ? false : isPathNodeUnlocked(skeleton, pathNodeStatus, state.completed, i, state.forceUnlockAll);
    const done = isPathNodeDone(node, pathNodeStatus, state.completed);
    const mastered = !!(state.pathCheckpointMastery[node.id] && state.pathCheckpointMastery[node.id].passed);
    if (node.type === 'lesson') return pathLessonRowHtml(state, node, i, unlocked, done, revealedKeys);
    if (node.type === 'milestone') return pathMilestoneRowHtml(node, i, unlocked, done, revealedKeys);
    if (isTest) return pathSectionTestRowHtml(node, i, unlocked, done, mastered, revealedKeys);
    return pathCheckpointRowHtml(node, i, unlocked, done, mastered, revealedKeys);
  }).join('');

  const hero = heroPanelHtml({
    watermark: 'المسار',
    badge: track.kicker,
    title: `${esc(track.title)} — <bdi lang="ar">${esc(group.title)}</bdi>`,
    body: escBidi(track.subtitle),
  });

  return `
    <div class="hero-page">
      ${hero}
      ${separatorHtml()}
      <div class="col-wide path-node-list">${rows}</div>
    </div>`;
}

// The group-selection hub (req: "group each section into its own groups so
// the path isn't one long line") -- reached via the My Path
// banner, and via pathMapHtml's own "All groups" back link. Only each
// track's Group 1 is populated so far; the rest render as locked "Coming
// soon" cards so the whole 5-group shape of each track is visible even
// before they're built. `groups` is the specific track's own PATH_GROUPS
// array (not a global) -- isGroupUnlocked needs to look at the PREVIOUS
// group within the SAME track, never a different track's.
function pathGroupCardHtml(state, groups, group, index, revealedKeys, trackLocked) {
  const cardKey = `path_card_${group.id}`;
  const comingSoon = !group.sections.length;
  if (comingSoon) {
    return `
      <div class="${revealCls(cardKey, 'path-group-card locked', revealedKeys)}">
        <div class="path-group-card-top">
          <span class="path-node-indicator">${icon('lock', 17, 2)}</span>
          <span class="tag tag-neutral">Coming soon</span>
        </div>
        <h3 lang="ar" dir="rtl">${esc(group.title)}</h3>
        <p class="path-group-card-body">Not built yet.</p>
      </div>`;
  }
  // Whole track still locked (see isTrackUnlocked in content/paths.js) --
  // every group card in it stays locked regardless of its own groupTest
  // progress, and opens the unlock-test prompt rather than the map, same as
  // a locked course row in Home's course menu.
  if (trackLocked) {
    const sectionCount = group.sections.length;
    const trackId = trackForGroup(group).id;
    return `
      <button class="${revealCls(cardKey, 'path-group-card locked unlockable', revealedKeys)}" data-action="openUnlockPrompt" data-target-type="track" data-target-id="${escAttr(trackId)}">
        <div class="path-group-card-top">
          <span class="path-node-indicator">${icon('lock', 17, 2)}</span>
          <span class="tag tag-neutral">Locked</span>
        </div>
        <h3 lang="ar" dir="rtl">${esc(group.title)}</h3>
        <p class="path-group-card-body">${sectionCount} section${sectionCount === 1 ? '' : 's'}</p>
      </button>`;
  }
  const skeleton = groupSkeleton(group);
  const unlocked = isGroupUnlocked(groups, index, state.pathNodeStatus, state.completed, state.forceUnlockAll);
  // idx is a raw array index (it counts sectionHeader slots too, even
  // though those are skipped when searching for the boundary) -- excluding
  // them here so "0 done" on a fresh group reads as 0, not 1 (Section 1's
  // own header) or however many section headers happen to precede it.
  const interactive = (n) => n.type !== 'sectionHeader';
  const total = skeleton.filter(interactive).length;
  // A locked group's own lesson nodes can still derive as "done" from
  // completed[] the moment a learner finishes those lessons on the
  // course's own page (see firstUnfinishedPathNodeIndex's comment) -- but
  // a card you can't even open yet showing "3 done" reads as real path
  // progress it isn't. Force 0/complete=false while locked; the real
  // count still applies the instant it unlocks.
  const idx = unlocked ? firstUnfinishedPathNodeIndex(skeleton, state.pathNodeStatus, state.completed) : 0;
  const doneCount = unlocked ? skeleton.slice(0, idx).filter(interactive).length : 0;
  const complete = unlocked && idx >= skeleton.length;
  const pct = total ? Math.round((doneCount / total) * 100) : 0;
  const sectionCount = group.sections.length;

  const tag = !unlocked
    ? `<span class="tag tag-neutral">Locked</span>`
    : complete
      ? `<span class="tag tag-accent">${icon('check', 11, 2.6)} Complete</span>`
      : doneCount > 0
        ? `<span class="tag tag-accent">In progress</span>`
        : `<span class="tag tag-accent">Start</span>`;
  // A locked group still opens -- its own lesson/checkpoint rows stay
  // locked as normal, but its section/group test rows offer the same
  // "Jump ahead" early-completion path as an unlocked group's future tests
  // do (see pathSectionTestRowHtml). openPathGroup itself only ever checks
  // the TRACK's own lock (see js/main.js), so this was already safe to
  // enter -- just previously blocked at the card's own click gate.
  const dataAttrs = `data-action="openPathGroup" data-group-id="${escAttr(group.id)}"`;
  const rowCls = ['path-group-card', unlocked ? '' : 'locked unlockable', complete ? 'mastered' : ''].join(' ').trim();

  return `
    <button class="${revealCls(cardKey, rowCls, revealedKeys)}" ${dataAttrs}>
      <div class="path-group-card-top">
        <span class="path-node-indicator">${!unlocked ? icon('lock', 17, 2) : complete ? icon('check', 19, 2.4) : icon('award', 18, 2)}</span>
        ${tag}
      </div>
      <h3 lang="ar" dir="rtl">${esc(group.title)}</h3>
      <p class="path-group-card-body">${sectionCount} section${sectionCount === 1 ? '' : 's'}</p>
      <span class="path-group-card-track"><span class="path-group-card-fill" style="width:${pct}%"></span></span>
      <span class="path-group-card-meta">${doneCount} / ${total}</span>
    </button>`;
}

// One card grid per track (req: the advanced path lives in the same My Path
// tab, under the introductory groups, separated by a divider -- not a
// separate tab of its own), each with its own heading naming which track
// it is, so scrolling past the introductory path's 5 groups reads as
// "here's a second, separate route" rather than a continuation of the same
// one.
function pathTrackSectionHtml(state, track, revealedKeys) {
  const trackLocked = !isTrackUnlocked(track, state.completed, state.unlockedTracks, state.forceUnlockAll);
  const cards = track.groups.map((group, i) => pathGroupCardHtml(state, track.groups, group, i, revealedKeys, trackLocked)).join('');
  const lockedBanner = trackLocked
    ? `<button class="path-track-locked-banner" data-action="openUnlockPrompt" data-target-type="track" data-target-id="${escAttr(track.id)}">
        ${icon('lock', 15, 2)}
        <span>${esc(track.lockedMessage || 'Locked.')} Unlock this path &rarr;</span>
      </button>`
    : '';
  return `
    <div class="path-track-section">
      <h2 class="settings-group-title">${esc(track.title)}</h2>
      <p class="settings-group-sub">${escBidi(track.subtitle)}</p>
      ${lockedBanner}
      <div class="col-wide path-group-grid">${cards}</div>
    </div>`;
}

function pathGroupsHtml(state, revealedKeys = new Set()) {
  const sections = PATH_TRACKS.map((track) => pathTrackSectionHtml(state, track, revealedKeys)).join(separatorHtml());
  const hero = heroPanelHtml({
    watermark: 'المسار',
    badge: 'المسارات',
    title: 'My Path',
    body: 'Guided routes through the courses, paired together and broken into groups so it never feels like one long line. Pick a group to continue.',
  });
  return `
    <div class="hero-page path-groups-page">
      ${hero}
      ${separatorHtml()}
      ${sections}
    </div>`;
}

// --- Settings (placeholder) ------------------------------------------------
// Preferences (theme, Arabic typeface, etc.) aren't built yet -- this is
// just a landing spot for the Settings tab so the global nav has somewhere
// to send it, not a stand-in for the eventual feature.

// --- Settings ---------------------------------------------------------
// Per the design handoff's Screen 2. Theme and typeface both apply
// immediately and persist automatically (this app auto-saves on every
// state change -- see persistSoon in main.js -- there's no separate "Save"
// step anywhere else in it either, so the handoff's own Save button is
// dropped as not meaningful here; only Reset carries over).

const SPECIMEN_WORDS = [
  { text: 'إِنَّ', label: 'حرف توكيد ونصب' },
  { text: 'اللهَ', label: 'اسم إنّ منصوب' },
  { text: 'مَعَ', label: 'ظرف مكان منصوب' },
  { text: 'الصَّابِرِينَ', label: 'مضاف إليه مجرور' },
];

// --- Achievements ----------------------------------------------------------
// Every badge the app can award, earned or not, grouped into the same
// categories the tier ladders live in (see gamification.js's
// ACHIEVEMENT_CATEGORIES). Reached from the header's XP/level/streak cluster
// (see headerHtml) and from Home's badge-row teaser.

// Sits right under the hero ledger's own Level/XP rows, so "how far into
// this level" reads as one more fact about the same two numbers rather than
// a separate widget. Reuses the app's one progress-bar language
// (.progress-bar/.progress-bar-fill, see js/render.js's progressBar) instead
// of inventing a second bar style.
function levelProgressHtml(li) {
  const pct = li.xpNeeded ? Math.round((li.xpIntoLevel / li.xpNeeded) * 100) : 0;
  return `
    <div class="ach-level-progress">
      <div class="ach-level-progress-head">
        <span class="ach-level-progress-label">Level ${li.level} progress</span>
        <span class="ach-level-progress-value">${li.xpIntoLevel} / ${li.xpNeeded} XP</span>
      </div>
      ${progressBar(pct)}
      <span class="ach-level-progress-note">${li.xpToNext} XP to level ${li.level + 1}</span>
    </div>`;
}

function achievementCardHtml(state, id, current, threshold, unit) {
  const def = BADGE_DEFS[id];
  const earned = state.badges.includes(id);
  const progress = (!earned && threshold != null)
    ? `<span class="ach-card-progress">${Math.min(current, threshold)} / ${threshold}${unit ? ` ${unit}` : ''}</span>`
    : '';
  return `
    <div class="ach-card ${earned ? 'earned' : 'locked'}">
      <span class="ach-card-icon">${icon(earned ? 'award' : 'lock', 18, 1.7)}</span>
      <span class="ach-card-body">
        <span class="ach-card-name">${esc(def.name)}</span>
        <span class="ach-card-desc">${escBidi(def.desc)}</span>
        ${progress}
      </span>
    </div>`;
}

function achievementsHtml(state) {
  const li = levelInfo(state.xp);
  const modulesDone = completedModulesAllCourses(state.completed);
  const lessonsDone = completedLessonsAllCourses(state.completed);
  const perfectCount = perfectQuizCount(state.quizScores);
  const streak = state.streak || 1;
  const card = (id, current, threshold, unit) => achievementCardHtml(state, id, current, threshold, unit);

  const sections = [
    { title: 'Getting started', cards: [card('first-steps', 0, null, null)] },
    { title: 'Level', cards: LEVEL_TIERS.map((t) => card(t.id, li.level, t.level, null)) },
    { title: 'Streak', cards: STREAK_TIERS.map((t) => card(t.id, streak, t.days, 'days')) },
    { title: 'Perfect quizzes', cards: PERFECT_QUIZ_TIERS.map((t) => card(t.id, perfectCount, t.count, 'quizzes')) },
    { title: 'Practice volume', cards: PRACTICE_TIERS.map((t) => card(t.id, state.practiceCorrectTotal || 0, t.count, 'drills')) },
    {
      title: 'Modules completed',
      cards: [
        ...MODULE_TIERS.map((t) => card(t.id, modulesDone, t.count, 'modules')),
        card(MODULES_ALL_BADGE.id, modulesDone, totalModulesAllCourses(), 'modules'),
      ],
    },
    {
      title: 'Lessons cleared',
      cards: [
        ...LESSON_TIERS.map((t) => card(t.id, lessonsDone, t.count, 'lessons')),
        card(LESSONS_ALL_BADGE.id, lessonsDone, totalLessonsAllCourses(), 'lessons'),
      ],
    },
    {
      title: 'Courses',
      cards: [...COURSE_TIERS.map((t) => card(t.id, 0, null, null)), card(COURSE_ALL_BADGE.id, 0, null, null)],
    },
  ];
  // My Path itself doesn't award badges (see LEGACY_PATH_BADGE_DEFS in
  // gamification.js) -- totalBadges is the count of cards actually shown
  // above, not Object.keys(BADGE_DEFS).length, so it doesn't silently
  // include the legacy path-* ids nothing can earn any more.
  const totalBadges = sections.reduce((sum, s) => sum + s.cards.length, 0);

  const sectionsHtml = sections.map((s) => `
    <section class="ach-section">
      <h2 class="ach-section-title">${esc(s.title)}</h2>
      <div class="ach-grid">${s.cards.join('')}</div>
    </section>`).join('');

  const hero = heroPanelHtml({
    watermark: 'أوسمة',
    badge: 'أوسمة الإنجاز',
    title: 'Achievements',
    body: 'Every badge The Sciences offers, across every course — earned ones in full, the rest waiting to be unlocked.',
    ledger: `<div class="ach-ledger-block">${heroLedgerHtml([
      ['Badges earned', `${state.badges.length} / ${totalBadges}`],
      ['Level', li.level],
      ['XP', state.xp],
    ])}${levelProgressHtml(li)}</div>`,
  });

  return `
    <div class="hero-page">
      ${navBackRowHtml(state)}
      ${hero}
      ${separatorHtml()}
      <div class="col-wide achievements-page">${sectionsHtml}</div>
    </div>`;
}

function settingsHtml(state) {
  const theme = state.theme || 'manuscript';
  const accent = state.accent || 'gold';
  const accentHex = (ACCENTS[accent] || ACCENTS.gold).hex;
  const face = bodyFaceKey(state.arabicFace || 'naskh');
  const currentFace = FACES[face] || FACES.naskh;
  const headingFace = headingFaceKey(state);
  const rawLessonTextScale = Number(state.lessonTextScale);
  const lessonTextScale = Number.isFinite(rawLessonTextScale)
    ? Math.min(130, Math.max(85, Math.round(rawLessonTextScale)))
    : 100;
  const litTextScale = normalizeLitTextScale(state.litTextScale);
  const tarkeebTranslationsOn = state.tarkeebTranslations !== false;
  const tarkeebLabelsBlueOn = state.tarkeebLabelsBlue === true;
  const forceUnlockOn = state.forceUnlockAll === true;
  const courseLocksOn = !forceUnlockOn;

  const themeCards = THEME_ORDER.map((key) => {
    const th = THEMES[key];
    const selected = key === theme;
    return `
      <button class="theme-card ${selected ? 'is-selected' : ''}" role="radio" aria-checked="${selected}" data-action="pickTheme" data-theme="${key}">
        <div class="theme-swatch" style="background:${th.bg}">
          <span class="theme-swatch-rule" style="background:${th.text};opacity:.75;width:70%"></span>
          <span class="theme-swatch-rule" style="background:${th.text};opacity:.4;width:86%"></span>
          <span class="theme-swatch-rule" style="background:${th.text};opacity:.4;width:52%;margin-bottom:0"></span>
          <span class="theme-swatch-mark" style="border-color:${accentHex}"></span>
        </div>
        <div class="theme-card-caption">
          <span class="theme-card-name">${esc(th.name)}</span>
          <span class="theme-card-note">${esc(th.note)}</span>
        </div>
      </button>`;
  }).join('');

  const accentChips = ACCENT_ORDER.map((key) => {
    const a = ACCENTS[key];
    const selected = key === accent;
    return `
      <button class="accent-chip ${selected ? 'is-selected' : ''}" role="radio" aria-checked="${selected}" data-action="pickAccent" data-accent="${key}">
        <span class="accent-chip-swatch" style="background:${a.hex}"></span>
        <span class="accent-chip-name">${esc(a.name)}</span>
      </button>`;
  }).join('');

  const faceRows = FACE_ORDER.map((key) => {
    const f = FACES[key];
    const selected = key === face;
    return `
      <button class="face-row ${selected ? 'is-selected' : ''}" role="radio" aria-checked="${selected}" data-action="pickFace" data-face="${key}">
        <span class="face-radio"><span class="face-radio-dot"></span></span>
        <span class="face-row-body">
          <span class="face-row-head">
            <span class="face-row-name">${esc(f.name)}</span>
            <span class="face-row-note">${esc(f.note)}</span>
          </span>
          <div class="face-row-sample" lang="ar" dir="rtl" style="font-family:${f.body}">وَالصَّابِرِينَ عَلَى مَا أَصَابَهُم</div>
        </span>
      </button>`;
  }).join('');

  const headingRows = HEADING_FACE_ORDER.map((key) => {
    const h = HEADING_FACES[key];
    const selected = key === headingFace;
    const sampleFont = h.font || currentFace.body;
    return `
      <button class="face-row ${selected ? 'is-selected' : ''}" role="radio" aria-checked="${selected}" data-action="pickHeadingFace" data-heading-face="${key}">
        <span class="face-radio"><span class="face-radio-dot"></span></span>
        <span class="face-row-body">
          <span class="face-row-head">
            <span class="face-row-name">${esc(h.name)}</span>
            <span class="face-row-note">${esc(h.note)}</span>
          </span>
          <div class="face-row-sample" lang="ar" dir="rtl" style="font-family:${sampleFont}">وَالصَّابِرِينَ عَلَى مَا أَصَابَهُم</div>
        </span>
      </button>`;
  }).join('');

  const words = SPECIMEN_WORDS.map((w) => `
    <div class="specimen-word">
      <span class="specimen-word-text" lang="ar" style="font-family:${currentFace.body}">${w.text}</span>
      <span class="specimen-word-label">${esc(w.label)}</span>
    </div>`).join('');

  const tarkeebTranslationToggle = `
    <button class="settings-toggle-row ${tarkeebTranslationsOn ? 'is-selected' : ''}" role="checkbox" aria-checked="${tarkeebTranslationsOn}" data-action="toggleTarkeebTranslations">
      <span class="settings-toggle-copy">
        <span class="settings-toggle-title">Translate Tarkeeb sentence</span>
        <span class="settings-toggle-sub">Default for the small English line under Tarkeeb exercises.</span>
      </span>
      <span class="settings-toggle-pill">${tarkeebTranslationsOn ? `${icon('check', 11, 2.6)} Shown` : 'Hidden'}</span>
    </button>`;

  const tarkeebLabelColorToggle = `
    <button class="settings-toggle-row ${tarkeebLabelsBlueOn ? 'is-selected' : ''}" role="checkbox" aria-checked="${tarkeebLabelsBlueOn}" data-action="toggleTarkeebLabelsBlue">
      <span class="settings-toggle-copy">
        <span class="settings-toggle-title">Colour Tarkeeb labels</span>
        <span class="settings-toggle-sub">Introductory Nahw's diagram exercises show blue for primary sentence roles (فعل، فاعل، مبتدأ، خبر...) and green for secondary ones (نعت، مضاف، معطوف...); boxes and slots pick up the colour too. Advanced Nahw's labels turn blue.</span>
      </span>
      <span class="settings-toggle-pill">${tarkeebLabelsBlueOn ? `${icon('check', 11, 2.6)} Coloured` : 'Default'}</span>
    </button>`;

  const forceUnlockToggle = `
    <button class="settings-toggle-row settings-toggle-warning ${courseLocksOn ? 'is-selected' : ''}" role="checkbox" aria-checked="${courseLocksOn}" data-action="toggleCourseLocks">
      <span class="settings-toggle-copy">
        <span class="settings-toggle-title">Course locks</span>
        <span class="settings-toggle-sub">${courseLocksOn
          ? 'Lessons, modules, paths, vocab, Tarkeeb exercises, and quizzes unlock through normal progress.'
          : 'Everything is open by default. Turn this on if you want the course to unlock step by step.'}</span>
      </span>
      <span class="settings-toggle-pill">${courseLocksOn ? `${icon('check', 11, 2.6)} On` : 'Off'}</span>
    </button>`;

  return `
    <div class="settings-page">
      <div class="settings-col">
        ${navBackRowHtml(state)}
        ${pageHeaderHtml({ title: 'Appearance', ar: 'المظهر', lede: 'The page, set to your hand. Everything here is a preference — how the text is set, and how much of the course is open at once. None of it changes what is taught.' })}

        <h2 class="settings-group-title" style="margin-top:26px">Tarkeeb</h2>
        <p class="settings-group-sub">Sentence helpers and grammar label colour for Tarkeeb exercises.</p>
        <div class="settings-toggle-stack">
          ${tarkeebTranslationToggle}
          ${tarkeebLabelColorToggle}
        </div>

        <hr class="settings-hr">

        <h2 class="settings-group-title">Paper</h2>
        <p class="settings-group-sub">Five grounds. The structure of the page does not change with them.</p>
        <div class="theme-grid" role="radiogroup" aria-label="Colour theme">${themeCards}</div>

        <h2 class="settings-group-title" style="margin-top:26px">Accent</h2>
        <p class="settings-group-sub">Independent of the paper — any accent pairs with any ground.</p>
        <div class="accent-grid" role="radiogroup" aria-label="Accent colour">${accentChips}</div>

        <div class="lesson-size-control">
          <div class="lesson-size-head">
            <label class="lesson-size-label" for="lesson-text-scale">Lesson text size</label>
            <output class="lesson-size-value" for="lesson-text-scale" data-lesson-text-scale-value>${lessonTextScale}%</output>
          </div>
          <input id="lesson-text-scale" class="lesson-size-slider" type="range" min="85" max="130" step="5" value="${lessonTextScale}" style="--range-pct:${rangePct(lessonTextScale, 85, 130)}" data-action="setLessonTextScale" aria-label="Lesson text size">
          <div class="lesson-size-ticks" aria-hidden="true">
            <span>Small</span>
            <span>Default</span>
            <span>Large</span>
          </div>
          <div class="lesson-size-preview">
            <span class="settings-kicker">Lesson preview</span>
            <p>A governing word changes the end of the word after it. Notice the ending, then read the sentence again.</p>
          </div>
        </div>

        <div class="lesson-size-control">
          <div class="lesson-size-head">
            <label class="lesson-size-label" for="lit-text-scale">Reading text size</label>
            <output class="lesson-size-value" for="lit-text-scale" data-lit-text-scale-value>${litTextScale}%</output>
          </div>
          <input id="lit-text-scale" class="lesson-size-slider" type="range" min="${LIT_TEXT_SCALE_MIN}" max="${LIT_TEXT_SCALE_MAX}" step="5" value="${litTextScale}" style="--range-pct:${rangePct(litTextScale, LIT_TEXT_SCALE_MIN, LIT_TEXT_SCALE_MAX)}" data-action="setLitTextScale" aria-label="Reading text size">
          <div class="lesson-size-ticks" aria-hidden="true">
            <span>Small</span>
            <span>Default</span>
            <span>Large</span>
          </div>
          <div class="lesson-size-preview">
            <span class="settings-kicker">Reading preview</span>
            <p class="lit-size-preview-line" lang="ar" dir="rtl">أَنَامُ مُبَكِّراً فِي اللَّيْلِ وَأَقُومُ مُبَكِّراً فِي الصَّبَاحِ</p>
          </div>
        </div>
        <hr class="settings-hr">

        <h2 class="settings-group-title">Course progress</h2>
        <p class="settings-group-sub">The only setting here that is not about how the page looks.</p>
        <div class="settings-toggle-stack">${forceUnlockToggle}</div>

        <hr class="settings-hr">

        <h2 class="settings-group-title">Arabic typeface</h2>
        <p class="settings-group-sub">Each specimen is set in the face it names.</p>
        <div class="face-list">
          <div class="face-group" role="radiogroup" aria-label="Arabic body face">${faceRows}</div>
          <h3 class="settings-subgroup-title">Arabic headings</h3>
          <div class="face-group" role="radiogroup" aria-label="Arabic heading face">${headingRows}</div>
        </div>
      </div>

      <aside class="settings-col specimen-rail">
        <span aria-hidden="true" class="specimen-watermark" lang="ar">خَطٌّ وَقَلَمٌ</span>
        <div class="specimen-inner">
          <span class="settings-kicker">Specimen</span>
          <p class="settings-group-sub" style="margin:12px 0 26px">A parsed line, set with your current choices.</p>
          <div class="specimen-box" dir="rtl">
            <div class="specimen-words">${words}</div>
            <div class="specimen-divider" dir="ltr">
              <span class="specimen-divider-line" aria-hidden="true"></span>
              <span class="specimen-divider-mark" aria-hidden="true"></span>
              <span class="specimen-divider-line" aria-hidden="true"></span>
            </div>
            <div class="specimen-gloss" dir="ltr">Indeed Allah is with the patient. The ḥarf inna governs naṣb in the noun that follows it.</div>
          </div>
          <div class="specimen-actions">
            <button class="btn btn-ghost" data-action="resetAppearance">Reset to Manuscript &amp; Gold</button>
          </div>
        </div>
      </aside>
    </div>`;
}

// A plain-language stand-in for the raw completedLessons/xp counters in the
// status grid below -- merging is a safe union either way (mergeProgressData
// in storage/syncClient.js keeps whichever side is further along per field,
// nothing is ever dropped), so this isn't "pick a winner," just "here's
// roughly what's about to combine," in terms someone can actually picture
// instead of guessing from field names like "Exercise states."
function formatSyncGapPart(diff, singular, plural) {
  if (!diff) return null;
  const label = Math.abs(diff) === 1 ? singular : plural;
  const leader = diff > 0 ? 'this device' : 'the cloud save';
  return `${Math.abs(diff)} more ${label} on ${leader}`;
}
function describeSyncGap(local, cloud) {
  if (!local?.exists || !cloud?.exists) return null;
  const parts = [
    formatSyncGapPart(local.completedLessons - cloud.completedLessons, 'completed lesson', 'completed lessons'),
    formatSyncGapPart(local.xp - cloud.xp, 'XP', 'XP'),
  ].filter(Boolean);
  if (!parts.length) return 'This device and the cloud save already match on completed lessons and XP.';
  return `Right now: ${parts.join(', and ')}. Merging combines both, so nothing is lost either way.`;
}

// Modules finished in a course, computed from that course's own shell rather
// than via completedCount/isModuleComplete -- those resolve against the one
// active MODULES binding, so they cannot answer "how far along is course X"
// for a course that is not the active one.
function courseModuleStats(course, completed) {
  let done = 0;
  course.modules.forEach((m) => {
    const lessons = m.lessons || [];
    if (lessons.length && lessons.every((l) => (completed[m.id] || {})[l.id])) done += 1;
  });
  return { done, total: course.modules.length };
}

// Every day that had at least one lesson finished on it. state.completed
// stores the completion date per lesson (see markLessonComplete), so the
// dates are already there -- this just collects them.
function activeDaySet(completed) {
  const days = new Set();
  Object.values(completed || {}).forEach((lessons) => {
    Object.values(lessons || {}).forEach((v) => { if (typeof v === 'string') days.add(v.slice(0, 10)); });
  });
  return days;
}

function accountHtml(state) {
  const account = state.account || {};
  const working = account.status === 'working';
  const signedIn = !!account.user;
  const pendingSync = account.pendingSyncAction;
  const cloud = account.cloudStatus;
  const local = account.localStatus;
  const li = levelInfo(state.xp);
  const pct = li.xpNeeded ? Math.round((li.xpIntoLevel / li.xpNeeded) * 100) : 0;
  const cleared = totalLessonsCleared(state.completed);
  const resetHour = state.dailyResetHour || 0;
  const today = todayISO(resetHour);

  // The monogram is the signed-in email's initial (the mockup's ح is the
  // account holder's); with no account it falls back to the app's own ع --
  // an alif from a course name reads as a bare line, not a monogram.
  const monogram = signedIn ? (account.user.email || '').trim().charAt(0).toUpperCase() : 'ع';
  const monogramArabic = !signedIn;

  const levelCard = `
    <div class="account-card">
      <div class="account-signed-in">
        <span class="account-monogram"${monogramArabic ? ' lang="ar" dir="rtl"' : ''} aria-hidden="true">${esc(monogram)}</span>
        <div class="account-identity">
          <div class="account-level">Level ${li.level}${(() => {
            const tier = [...LEVEL_TIERS].reverse().find((t) => li.level >= t.level);
            return tier ? ` · ${tier.name}` : '';
          })()}</div>
          <div class="account-email">${signedIn ? esc(account.user.email) : 'Not signed in — progress is saved on this device'}</div>
        </div>
      </div>
      <div class="account-xp-track" aria-hidden="true"><span class="account-xp-fill" style="width:${pct}%"></span></div>
      <div class="account-xp-row">
        <span>${li.xpIntoLevel} / ${li.xpNeeded} XP this level</span>
        <span>${li.xpToNext} to level ${li.level + 1}</span>
      </div>
    </div>`;

  const ledger = `
    <div class="ledger-inline">
      <div><span class="ledger-inline-value">${state.xp.toLocaleString('en-GB')}</span><span class="ledger-inline-label">Total XP</span></div>
      <div><span class="ledger-inline-value">${cleared}</span><span class="ledger-inline-label">Lessons cleared</span></div>
      <div><span class="ledger-inline-value">${state.badges.length}</span><span class="ledger-inline-label">Badges</span></div>
    </div>`;

  // Four weeks back from today, as a 7-wide grid so the columns line up under
  // their weekday. Filled = a lesson was finished that day; today is outlined
  // whether or not anything has been done yet.
  const days = activeDaySet(state.completed);
  const weekdayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const todayDate = new Date(`${today}T00:00:00`);
  // Sunday-first, matching the mockup's calendar.
  const offsetToSunday = todayDate.getDay();
  const cells = [];
  for (let back = 27 - (6 - offsetToSunday); back >= -(6 - offsetToSunday); back -= 1) {
    const d = new Date(todayDate);
    d.setDate(d.getDate() - back);
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const cls = ['streak-cell', days.has(iso) ? 'is-filled' : '', iso === today ? 'is-today' : '', d > todayDate ? 'is-future' : ''].filter(Boolean).join(' ');
    cells.push(`<span class="${cls}" title="${iso}"></span>`);
  }
  const streakSection = `
    <div class="section-head schedule-section">
      <h2 class="section-head-title">Streak</h2>
      <span class="account-streak-meta">${icon('flame', 12, 2)}${state.streak || 1} day${(state.streak || 1) === 1 ? '' : 's'}</span>
    </div>
    <div class="streak-labels">${weekdayLabels.map((l) => `<span>${l}</span>`).join('')}</div>
    <div class="streak-grid">${cells.join('')}</div>
    <p class="streak-note">Last four weeks · a day starts at ${esc(formatResetHour(resetHour))}.</p>`;

  const courseRows = COURSES.map((course) => {
    const stats = courseModuleStats(course, state.completed);
    const coursePct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
    const isActive = course.id === state.courseId;
    return `
      <div class="course-row">
        <div class="course-row-head">
          <span class="course-row-names">
            <span class="course-row-ar" lang="ar" dir="rtl">${esc(course.arabicName || course.name)}</span>
            <span class="course-row-en">${esc(course.name)}</span>
          </span>
          <span class="course-row-label${isActive ? ' is-active' : ''}">${stats.done} / ${stats.total}</span>
        </div>
        <div class="course-row-track" aria-hidden="true"><span class="course-row-fill" style="width:${coursePct}%"></span></div>
      </div>`;
  }).join('');

  // Stored as PERCENT (85-130 / 80-160), same as the Settings sliders --
  // multiplying by 100 again once showed a 10000% label and a 1500px preview.
  const rawLessonScale = Number(state.lessonTextScale);
  const lessonScale = Number.isFinite(rawLessonScale)
    ? Math.min(130, Math.max(85, Math.round(rawLessonScale)))
    : 100;
  const litScale = normalizeLitTextScale(state.litTextScale);
  const textSection = `
    <div class="section-head schedule-section">
      <h2 class="section-head-title">Reading &amp; text</h2>
    </div>
    <p class="lede account-text-lede">These change only how the text is set. Nothing changes what is taught.</p>
    <div class="lesson-size-control">
      <div class="lesson-size-head">
        <span class="lesson-size-label">Lesson text size</span>
        <span class="lesson-size-value">${lessonScale}%</span>
      </div>
      <input class="lesson-size-slider" type="range" min="85" max="130" step="5" value="${lessonScale}" style="--range-pct:${rangePct(lessonScale, 85, 130)}" data-action="setLessonTextScale" aria-label="Lesson text size">
      <div class="lesson-size-preview" style="font-size:${(lessonScale / 100 * 15).toFixed(1)}px;">A governing word changes the end of the word after it. Notice the ending, then read the sentence again.</div>
    </div>
    <div class="lesson-size-control">
      <div class="lesson-size-head">
        <span class="lesson-size-label">Reading text size</span>
        <span class="lesson-size-value">${litScale}%</span>
      </div>
      <input class="lesson-size-slider" type="range" min="${LIT_TEXT_SCALE_MIN}" max="${LIT_TEXT_SCALE_MAX}" step="5" value="${litScale}" style="--range-pct:${rangePct(litScale, LIT_TEXT_SCALE_MIN, LIT_TEXT_SCALE_MAX)}" data-action="setLitTextScale" aria-label="Reading text size">
      <div class="lesson-size-preview lit-size-preview-line" lang="ar" dir="rtl" style="font-size:${(litScale / 100 * 19).toFixed(1)}px;">أَنَامُ مُبَكِّراً فِي اللَّيْلِ وَأَقُومُ مُبَكِّراً فِي الصَّبَاحِ</div>
    </div>`;

  // Three different things used to share one grey line: progress ("Signing
  // in..."), success ("Signed in and save data synced.") and failure ("Could
  // not sign in."). The tone now distinguishes them, and a failure is
  // announced assertively rather than politely.
  const tone = account.messageTone || 'info';
  const message = account.message
    ? `<div class="account-message account-message-${esc(tone)}" role="${tone === 'error' ? 'alert' : 'status'}">${tone === 'error' ? icon('alert', 13, 2) : ''}<span>${esc(account.message)}</span></div>`
    : '';
  const fieldError = account.fieldError || null;
  const syncGapSummary = describeSyncGap(local, cloud);
  const confirmPanel = pendingSync ? `
    <div class="account-confirm">
      <strong>${pendingSync === 'download' ? 'Merge cloud save data?' : 'Merge this device save data?'}</strong>
      <p>${pendingSync === 'download'
        ? 'This combines the cloud save with this device. Completed lessons, unlocked content, quiz results, practice progress, XP, and streaks are kept from whichever side is ahead.'
        : 'This combines this device with the cloud save. Completed lessons, unlocked content, quiz results, practice progress, XP, and streaks are kept from whichever side is ahead.'}</p>
      ${syncGapSummary ? `<p>${esc(syncGapSummary)}</p>` : ''}
      <div class="account-actions">
        <button class="btn btn-primary" data-action="confirmAccountSync" ${working ? 'disabled' : ''}>Confirm merge</button>
        <button class="btn btn-ghost" data-action="cancelAccountSync" ${working ? 'disabled' : ''}>Cancel</button>
      </div>
    </div>` : '';

  // The auto-upload lifecycle, made visible: a dot that pulses while a sync
  // is queued/running, settles solid once the cloud is up to date, and goes
  // hollow on an error -- with the status message itself surfaced on the
  // sync row while anything other than plain success is going on.
  const syncFlagStates = {
    queued: { label: 'Sync queued', mod: ' is-working' },
    uploading: { label: 'Syncing…', mod: ' is-working' },
    synced: { label: 'Sync on', mod: ' is-on' },
    error: { label: 'Sync issue', mod: ' is-error' },
  };
  const syncFlag = syncFlagStates[account.autoUploadStatus] || { label: 'Sync ready', mod: '' };
  const syncBusy = account.autoUploadStatus === 'queued' || account.autoUploadStatus === 'uploading';
  const syncRowMeta = (syncBusy || account.autoUploadStatus === 'error') && account.autoUploadMessage
    ? esc(account.autoUploadMessage)
    : (cloud?.updatedAt ? `Last saved ${esc(formatDateTime(cloud.updatedAt))}` : 'Upload once to start syncing this device.');

  const cloudSection = signedIn ? `
    <div class="section-head schedule-section">
      <h2 class="section-head-title">Cloud save</h2>
      <span class="account-sync-flag${syncFlag.mod}" role="status"><span class="sync-dot" aria-hidden="true"></span>${syncFlag.label}</span>
    </div>
    <div class="entry-row account-sync-row">
      ${icon('archive', 17, 1.8)}
      <span class="entry-row-body">
        <span class="entry-row-title">${cloud?.exists ? 'Cloud save found' : 'No cloud save yet'}</span>
        <span class="entry-row-meta">${syncRowMeta}</span>
      </span>
    </div>
    ${confirmPanel}
    <div class="account-actions">
      <button class="btn btn-secondary" data-action="requestUploadAccountProgress" ${working ? 'disabled' : ''}>Upload save</button>
      <button class="btn btn-secondary" data-action="requestDownloadAccountProgress" ${working ? 'disabled' : ''}>Download save</button>
    </div>
    ${message}
    <button class="btn btn-ghost btn-block account-signout" data-action="logoutAccount" ${working ? 'disabled' : ''}>Sign out</button>`
    : `
    <div class="section-head schedule-section">
      <h2 class="section-head-title">Cloud save</h2>
    </div>
    <p class="lede account-text-lede">Sign in to keep this device's progress backed up and in step with your other devices. Signing in never overwrites what is on this device without asking first.</p>
    <div class="account-fields">
      ${accountFieldHtml({
        id: 'account-email',
        label: 'Email',
        error: fieldError,
        control: `<input class="account-input schedule-input" id="account-email" type="email" autocomplete="email" placeholder="you@example.com"${fieldAttrs('email', fieldError)}>`,
      })}
      ${accountFieldHtml({
        id: 'account-password',
        label: 'Password',
        hint: 'At least 8 characters if you are creating an account.',
        error: fieldError,
        control: `
          <div class="password-field">
            <input class="account-input schedule-input" id="account-password" type="password" autocomplete="current-password"${fieldAttrs('password', fieldError)}>
            <button class="password-reveal" type="button" data-action="togglePasswordVisibility" aria-label="Show password" aria-pressed="false">
              <span class="icon-eye">${icon('eye', 15, 1.7)}</span>
              <span class="icon-eye-off">${icon('eye-off', 15, 1.7)}</span>
            </button>
          </div>`,
      })}
    </div>
    <div class="account-actions">
      <button class="btn btn-primary" data-action="loginAccount" ${working ? 'disabled' : ''}>${working ? 'Signing in…' : 'Sign in'}</button>
      <button class="btn btn-secondary" data-action="registerAccount" ${working ? 'disabled' : ''}>Create account</button>
    </div>
    ${message}`;

  return `
    <div class="account-page">
      ${pageHeaderHtml({ title: 'Account', ar: 'الحساب', lede: 'Your level, streak and course progress, and where this device keeps its save.' })}
      <div class="two-col">
      <div class="two-col-main">
      ${levelCard}
      ${ledger}
      ${streakSection}
      <div class="section-head schedule-section">
        <h2 class="section-head-title">Courses</h2>
        <span class="lesson-section-note">Modules complete</span>
      </div>
      <div class="course-rows">${courseRows}</div>
      </div>
      <div class="two-col-side">
      <button class="entry-row" data-action="openAchievements">
        ${icon('award', 18, 1.8)}
        <span class="entry-row-body">
          <span class="entry-row-title">Achievements</span>
          <span class="entry-row-meta">${state.badges.length} earned</span>
        </span>
        <span class="entry-row-chevron">${icon('chevronRight', 15, 2)}</span>
      </button>
      <button class="entry-row" data-action="openSettings">
        ${icon('book', 18, 1.8)}
        <span class="entry-row-body">
          <span class="entry-row-title">Appearance</span>
          <span class="entry-row-meta">Paper, accent, and Arabic typeface</span>
        </span>
        <span class="entry-row-chevron">${icon('chevronRight', 15, 2)}</span>
      </button>
      ${textSection}
      ${cloudSection}
      </div>
      </div>
    </div>`;
}

// --- Literature: the Library, a book, and its reader ---------------------
// A deliberately different surface from the four courses. A course is a grid
// of module cards leading to a lesson column; a book is a shelf, a contents
// page, and a reading page that fills up one paragraph at a time. Nothing
// here reuses .chapter-card/.lesson-row -- those read as "a syllabus", which
// is exactly what a reader isn't.
//
// Still pure, like the rest of this file: the open chapter's session lives on
// state.lit and is only ever mutated by js/main.js. The chapter body itself
// is read out of content-lit's load cache (getLoadedChapter) rather than
// imported -- chapters are lazy, and a pure render can't await one.

const LIT_STAGES = [
  { id: 'read', label: 'Read' },
  { id: 'workshop', label: 'Patterns' },
  { id: 'build', label: 'Build' },
];

function litBookCardHtml(state, book, index) {
  const { done, total } = bookProgress(book, state.litProgress);
  const pct = total ? Math.round((done / total) * 100) : 0;
  const started = done > 0;
  return `
    <button class="lit-book${started && done < total ? ' is-current' : ''}" data-action="openLitBook" data-book-id="${escAttr(book.id)}">
      <span class="lit-book-spine" aria-hidden="true"></span>
      <span class="lit-book-face">
        <span class="lit-book-kicker">${esc(book.volumeLabel || '')}</span>
        <span class="lit-book-title" lang="ar" dir="rtl">${esc(book.title.ar)}</span>
        <span class="lit-book-foot">
          <span class="lit-book-track" aria-hidden="true"><span class="lit-book-fill" style="width:${pct}%"></span></span>
          <span class="lit-book-meta">${done} / ${total}</span>
        </span>
      </span>
    </button>`;
}

// One divider per distinct series, the shelf's equivalent of dashboardHtml's
// per-(heading,subheading) chapter divider -- same "only when the group
// changes" logic, grouping books by series (qiraah-v1/qiraah-v2, all twelve
// qasas volumes) instead of by module heading/subheading.
function litShelfHeadingHtml(series) {
  return `<div class="lit-shelf-heading">
    <span class="lit-shelf-heading-ar" lang="ar" dir="rtl">${esc(series.ar)}</span>
    <span class="lit-shelf-heading-en">${esc(series.en)}</span>
  </div>`;
}

function libraryHtml(state) {
  // Where the reader had got to: the first book with chapters behind it but
  // not yet finished. Falls back to nothing rather than inventing a
  // "continue" for someone who has not started.
  let resume = null;
  for (const book of LIT_BOOKS) {
    const { done, total } = bookProgress(book, state.litProgress);
    if (done > 0 && done < total) {
      const chapterIndex = book.chapters.findIndex((c) => !isChapterDone(state.litProgress, book.id, c.id));
      if (chapterIndex >= 0) {
        resume = { book, chapter: book.chapters[chapterIndex], index: chapterIndex };
        break;
      }
    }
  }

  const resumeCard = resume ? `
    <button class="lit-continue" data-action="openLitBook" data-book-id="${escAttr(resume.book.id)}">
      <span class="lit-continue-spine" aria-hidden="true"><span lang="ar" dir="rtl">${esc(arabicNumeral(resume.index + 1))}</span></span>
      <span class="lit-continue-body">
        <span class="kicker">Continue reading</span>
        <span class="lit-continue-title" lang="ar" dir="rtl">${esc(resume.book.title.ar)}</span>
        <span class="lit-continue-meta">Chapter ${resume.index + 1} · <bdi lang="ar">${esc(resume.chapter.title.ar)}</bdi></span>
      </span>
      <span class="lit-continue-chevron">${icon('chevronRight', 16, 2)}</span>
    </button>` : '';

  // One shelf per series: its Arabic heading, a hairline out to the count,
  // then that series' books as their own grid.
  const shelves = [];
  let current = null;
  LIT_BOOKS.forEach((book, i) => {
    const series = bookSeries(book);
    const key = series ? series.ar : '';
    if (!current || current.key !== key) {
      current = { key, series, books: [] };
      shelves.push(current);
    }
    current.books.push({ book, i });
  });

  const shelvesHtml = shelves.map((shelf) => `
    ${shelf.series ? `
      <div class="lit-shelf-heading">
        <span class="lit-shelf-heading-ar" lang="ar" dir="rtl">${esc(shelf.series.ar)}</span>
        <span class="lit-shelf-heading-en">${shelf.books.length} volume${shelf.books.length === 1 ? '' : 's'}</span>
      </div>` : ''}
    <div class="lit-shelf">${shelf.books.map(({ book, i }) => litBookCardHtml(state, book, i)).join('')}</div>`).join('');

  return `
    <div class="lit-library-page">
      ${pageHeaderHtml({ title: 'Library', ar: 'المكتبة', lede: 'Graded readers, read the way a book is read — a paragraph at a time, the translation a tap away, every word one tap from its form.' })}
      ${resumeCard}
      <div class="lit-shelves">${shelvesHtml}</div>
    </div>`;
}

function litChapterRowHtml(state, book, chapter, index, isCurrent = false) {
  const unlocked = isChapterUnlocked(book, index, state.litProgress, state.forceUnlockAll);
  const done = isChapterDone(state.litProgress, book.id, chapter.id);
  const rec = chapterRecord(state.litProgress, book.id, chapter.id);
  // rec.freePara alone (no Practice progress) still counts as "touched" here
  // -- this is a general "you have been in this chapter" state, not a promise
  // about which mode resumes where (see litChapterPreviewHtml's Practice-only
  // `started`).
  const started = !done && rec && (rec.para > 0 || rec.freePara > 0);

  // A chapter on one printed page is "p. 9", not "pp. 9" -- Qaṣaṣ runs a
  // chapter per page, so the single-page case is the common one.
  const pageList = chapter.pages || [];
  const pages = pageList.length > 1
    ? `pp. ${pageList[0]}–${pageList[pageList.length - 1]}`
    : pageList.length === 1 ? `p. ${pageList[0]}` : '';

  const cls = [
    'lit-chapter',
    !unlocked ? 'is-locked' : '',
    done ? 'is-done' : '',
    isCurrent ? 'is-current' : '',
  ].filter(Boolean).join(' ');

  const ring = done
    ? `<span class="lit-chapter-num is-done">${icon('check', 12, 2.6)}</span>`
    : unlocked
      ? `<span class="lit-chapter-num${isCurrent ? ' is-current' : ''}">${chapter.number}</span>`
      : `<span class="lit-chapter-num">${icon('lock', 11, 2)}</span>`;

  // The chapter in hand says what continuing actually means; the rest stay
  // quiet with just their blurb.
  const cta = isCurrent ? `
    <span class="lit-chapter-cta">${started ? 'Continue' : 'Start'}${pages ? ` · ${esc(pages)}` : ''}, then the drills${icon('chevronRight', 13, 2)}</span>` : '';

  return `
    <button class="${cls}"
      ${unlocked ? `data-action="openLitChapterPreview" data-book-id="${escAttr(book.id)}" data-chapter-id="${escAttr(chapter.id)}"` : 'disabled'}>
      ${ring}
      <span class="lit-chapter-body">
        <span class="lit-chapter-title" lang="ar" dir="rtl">${esc(chapter.title.ar)}</span>
        <span class="lit-chapter-blurb">${escBidi(chapter.blurb || chapter.title.en || '')}</span>
        ${cta}
      </span>
      ${!isCurrent && pages ? `<span class="lit-chapter-pages">${esc(pages)}</span>` : ''}
    </button>`;
}

// --- "Free read / Practice" modal -----------------------------------------
// Mirrors lessonPreviewHtml's job: a chapter row opens this instead of
// launching straight into a session, offering Free read (unrestricted
// paging, no checks, never marks the chapter done -- see startLitFreeRead)
// alongside Practice (the graded pass -- comprehension checks then the
// Patterns/Build drills for a first read, or straight to the drills for a
// chapter already done -- see startLitPractice).
function litChapterPreviewHtml(state) {
  if (!state.litChapterPreviewId) return '';
  const book = getLitBook(state.litBookId);
  const idx = book ? book.chapters.findIndex((c) => c.id === state.litChapterPreviewId) : -1;
  if (!book || idx < 0) return '';
  const chapter = book.chapters[idx];
  const done = isChapterDone(state.litProgress, book.id, chapter.id);
  const rec = chapterRecord(state.litProgress, book.id, chapter.id);
  // rec.para only, deliberately -- this labels the Practice button
  // specifically, so it must reflect Practice's own resumability, not
  // unrelated Free read progress (rec.freePara) that Practice wouldn't
  // actually resume into.
  const started = !done && rec && rec.para > 0;
  const practiceLabel = done ? 'Practice (drills)' : started ? 'Resume' : 'Practice';

  return `
    <div class="modal-backdrop" data-action="closeLitChapterPreview">
      <div class="modal lit-chapter-modal" role="dialog" aria-modal="true" tabindex="-1" aria-label="${escAttr(chapter.title.en)}">
        <div class="card-kicker modal-kicker">CHAPTER ${idx + 1} &middot; ${esc(book.title.en)}</div>
        <h3 lang="ar" dir="rtl">${esc(chapter.title.ar)}</h3>
        <p class="modal-sub">${escBidi(chapter.title.en)}</p>
        <div class="modal-buttons">
          <button class="btn btn-ghost" data-action="cancelLitChapterPreview">Cancel</button>
          <button class="btn btn-secondary" data-action="startLitFreeRead">Free read</button>
          <button class="btn btn-primary" data-action="startLitPractice">${practiceLabel}</button>
        </div>
      </div>
    </div>`;
}

function litBookHtml(state) {
  const book = getLitBook(state.litBookId);
  if (!book) return libraryHtml(state);
  const { done, total } = bookProgress(book, state.litProgress);
  const pct = total ? Math.round((done / total) * 100) : 0;
  const weakCount = unknownLemmas(state.litUnknown, book.id).length;
  const series = bookSeries(book);

  // The ghost numeral is this book's place in its own series, which is what
  // the volume label names.
  const seriesBooks = LIT_BOOKS.filter((b) => {
    const s = bookSeries(b);
    return (s ? s.ar : '') === (series ? series.ar : '');
  });
  const volumeNumber = seriesBooks.indexOf(book) + 1;

  // The book's page range, taken from its chapters rather than stored twice.
  const allPages = book.chapters.flatMap((c) => c.pages || []);
  const pageRange = allPages.length
    ? (allPages.length > 1 ? `pp. ${Math.min(...allPages)}–${Math.max(...allPages)}` : `p. ${allPages[0]}`)
    : '';

  const current = book.chapters.findIndex((c, i) => isChapterUnlocked(book, i, state.litProgress, state.forceUnlockAll)
    && !isChapterDone(state.litProgress, book.id, c.id));

  return `
    <div class="lit-book-page">
      ${navBackRowHtml(state)}
      <div class="plate lit-cover">
        <span aria-hidden="true" class="plate-ghost" lang="ar" dir="rtl">${esc(arabicNumeral(volumeNumber))}</span>
        <div class="lit-cover-inner">
          <div class="kicker lit-cover-kicker">${esc(book.volumeLabel || 'Volume')} · ${total} chapter${total === 1 ? '' : 's'}</div>
          <h1 class="lit-cover-title" lang="ar" dir="rtl">${esc(book.title.ar)}</h1>
          <div class="module-cover-rule" aria-hidden="true"></div>
          <p class="lit-cover-author" lang="ar" dir="rtl">${esc(book.author.ar)}</p>
          <p class="lit-cover-body">${escBidi(book.blurb)}</p>
          <div class="module-cover-progress">
            <span class="module-cover-track" aria-hidden="true"><span class="module-cover-fill" style="width:${pct}%"></span></span>
            <span class="module-cover-count">${done} / ${total} read</span>
          </div>
        </div>
      </div>

      <button class="entry-row" ${weakCount ? `data-action="openLitWordPractice" data-book-id="${escAttr(book.id)}"` : 'disabled'}>
        ${icon('archive', 17, 1.8)}
        <span class="entry-row-body">
          <span class="entry-row-title">Practice weak words</span>
          <span class="entry-row-meta">${weakCount ? `${weakCount} marked across this book` : 'Nothing marked yet — tap a word twice while reading'}</span>
        </span>
        <span class="entry-row-chevron">${icon('chevronRight', 15, 2)}</span>
      </button>

      <div class="lit-contents">
        <div class="lesson-section-head">
          <span class="lesson-section-title">Contents</span>
          ${pageRange ? `<span class="lesson-section-note">${esc(pageRange)}</span>` : ''}
        </div>
        <div class="lit-chapter-list">${book.chapters.map((c, i) => litChapterRowHtml(state, book, c, i, i === current)).join('')}</div>
        <p class="lit-contents-note">Chapters unlock in order — finish one to open the next.</p>
      </div>
    </div>`;
}

// --- Reader: the page itself ---------------------------------------------

// One word. A click selects it (its form shows in the margin card); a second
// click within the double-click window marks it unknown -- see litWord in
// js/main.js, which does that timing itself rather than relying on a real
// dblclick event, because every click re-renders the whole page and the two
// clicks therefore land on two different DOM nodes.
function litWordHtml(state, sentence, token, ti) {
  const lit = state.lit;
  const unknown = isUnknownLemma(state.litUnknown, lit.bookId, token.lemma);
  const selected = lit.word && lit.word.s === sentence.id && lit.word.t === ti;
  const cls = ['lit-word', unknown ? 'is-unknown' : '', selected ? 'is-selected' : ''].filter(Boolean).join(' ');
  // The highlight is painted by the inner span, not the <button>: a button is
  // an inline-BLOCK box whose height follows line-height (2.5 here), so a
  // background on it stood far taller than the clause highlight, which is an
  // ordinary inline box sized by font metrics. Two inline spans with the same
  // font can't disagree.
  return `<button class="${cls}" data-action="litWord" data-s="${escAttr(sentence.id)}" data-t="${ti}" aria-pressed="${selected ? 'true' : 'false'}"><span class="lit-word-ink">${esc(token.surface)}</span></button>`;
}

// The clause and its English. The gloss is absolutely positioned against the
// PARAGRAPH (which reserves a lane for it at its foot) rather than against
// the clause, so revealing one can neither reflow the Arabic nor cover the
// line below it. Hover shows it on a pointer; focus-within shows it for a
// keyboard tabbing through the words; the trailing button pins it, which is
// the touch path.
function litSentenceHtml(state, sentence) {
  const open = state.lit.gloss === sentence.id;
  const words = sentence.tokens.map((t, ti) => litWordHtml(state, sentence, t, ti)).join(' ');
  return `<span class="lit-sentence${open ? ' is-open' : ''}" data-action="litToggleGloss" data-s="${escAttr(sentence.id)}"
    >${words}<button class="lit-gloss-btn" data-action="litToggleGloss" data-s="${escAttr(sentence.id)}" aria-expanded="${open ? 'true' : 'false'}" aria-label="Show the translation of this phrase">${icon('book', 11, 2)}</button
    ><span class="lit-gloss" dir="ltr" lang="en">${esc(sentence.en)}</span></span>`;
}

// The whole-paragraph translation is a margin control, in the same gutter as
// the paragraph number -- as a text link under every paragraph it repeated
// down the page and broke the run of prose, which is the one thing a reading
// page shouldn't do.
function litParagraphHtml(state, para, pi, active) {
  const fullOpen = state.lit.fullPara === pi;
  const hoverOn = state.litHoverTranslate !== false;
  // `para.lines` opts a paragraph out of running prose: each sentence is
  // already authored as one speaker's turn or one verse (see
  // content-lit/CHAPTER-FORMAT.md), so a dialogue or poem paragraph renders
  // one sentence per line instead of joining them all with a space into a
  // single justified block, which otherwise erases that structure.
  const text = para.lines
    ? `<div class="lit-para-text is-lines" lang="ar" dir="rtl">${para.sentences.map((s) => `<p class="lit-line">${litSentenceHtml(state, s)}</p>`).join('')}</div>`
    : `<p class="lit-para-text" lang="ar" dir="rtl">${para.sentences.map((s) => litSentenceHtml(state, s)).join(' ')}</p>`;
  return `
    <article class="lit-para${active ? ' is-active' : ''}">
      <div class="lit-para-gutter">
        <span class="lit-para-mark" aria-hidden="true">${pi + 1}</span>
        <button class="lit-para-en${fullOpen ? ' is-active' : ''}" data-action="litToggleFullPara" data-para="${pi}"
          aria-pressed="${fullOpen ? 'true' : 'false'}" title="This paragraph in English">EN</button>
        <button class="lit-para-hover-btn${hoverOn ? ' is-active' : ''}" data-action="toggleLitHoverTranslate"
          aria-pressed="${hoverOn ? 'true' : 'false'}" title="${hoverOn ? 'Hover translation: ON (click to turn off)' : 'Hover translation: OFF (click to turn on)'}">${icon('pointer', 11, 2)}</button>
      </div>
      ${text}
      ${fullOpen ? `<p class="lit-para-full">${escBidi(para.en)}</p>` : ''}
    </article>`;
}

// Ask in Arabic or in English, learner's choice (state.litCheckLang) --
// offered only where the chapter actually carries translated checks, since
// `answer` indexes both option lists and a partly-translated check would
// otherwise fall back mid-question.
function litCheckLangToggleHtml(state) {
  const inEnglish = state.litCheckLang === 'en';
  const btn = (lang, label, active, langAttr) =>
    `<button class="lit-lang-btn${active ? ' is-active' : ''}" data-action="setLitCheckLang" data-lang="${lang}" aria-pressed="${active ? 'true' : 'false'}"${langAttr}>${label}</button>`;
  return `
    <div class="lit-lang-toggle" role="group" aria-label="Question language">
      ${btn('ar', 'عربي', !inEnglish, ' lang="ar" dir="rtl"')}
      ${btn('en', 'English', inEnglish, '')}
    </div>`;
}

function litChecksHtml(state, para, pi) {
  const answered = para.checks.filter((_, ci) => state.lit.checks[`${pi}:${ci}`]).length;
  const allDone = answered === para.checks.length;
  const lastPara = pi + 1 >= state.lit.paragraphCount;
  const translated = para.checks.length > 0 && para.checks.every((c) => c.qEn && c.optionsEn);
  const inEnglish = translated && state.litCheckLang === 'en';
  const advanceLabel = lastPara ? 'Finish the passage → Pattern workshop' : 'Read the next paragraph';

  // A paragraph carries questions only where the passage gives it something
  // to ask -- a chapter's three checks spread across five paragraphs, and a
  // paragraph that is pure narration between two scenes gets none. It still
  // needs its way onward, just without an empty question card above it.
  if (!para.checks.length) {
    return `
      <section class="lit-checks lit-checks-bare">
        <button class="btn btn-primary btn-block" data-action="litNextParagraph">${advanceLabel}</button>
      </section>`;
  }

  return `
    <section class="lit-checks">
      <div class="lit-checks-head">
        <span class="card-kicker">On this paragraph</span>
        <div class="lit-checks-head-right">
          ${translated ? litCheckLangToggleHtml(state) : ''}
          <span class="lit-checks-count">${answered} / ${para.checks.length}</span>
        </div>
      </div>
      ${para.checks.map((c, ci) => {
        const rec = state.lit.checks[`${pi}:${ci}`];
        return `
        <div class="lit-check">
          <h3 class="lit-check-q${inEnglish ? ' is-en' : ''}"${inEnglish ? '' : ' lang="ar" dir="rtl"'}>${escBidi(inEnglish ? c.qEn : c.q)}</h3>
          ${renderMcqOptions({
            options: inEnglish ? c.optionsEn : c.options,
            correct: c.answer,
            selected: rec ? rec.selected : undefined,
            submitted: !!rec,
            actionName: 'litCheckOption',
            extraData: `data-check="${ci}"`,
            order: state.lit.checkOrder[`${pi}:${ci}`],
          })}
        </div>`;
      }).join('')}
      <button class="btn btn-primary btn-block" data-action="litNextParagraph" ${allDone ? '' : 'disabled'}>${advanceLabel}</button>
    </section>`;
}

// The margin card: whichever word was last clicked, in full. This is where
// "mark as unknown" also lives as a real button -- double-clicking is the
// fast path, but it can't be the only one, since it has no keyboard
// equivalent.
function litWordCardHtml(state, chapter) {
  const w = state.lit.word;
  if (!w) {
    return `
      <div class="lit-word-card is-empty">
        <p class="lit-word-hint"><strong>Click a word</strong> to highlight it and see its form here. Click it again to clear the highlight.</p>
        <p class="lit-word-hint"><strong>Click it twice</strong> to mark it as a word you don't know — those come back at the end of the chapter.</p>
        <p class="lit-word-hint">Hover a phrase for its translation — on a touchscreen, tap the small round marker at its end.</p>
      </div>`;
  }
  const sentence = chapterSentences(chapter).find((s) => s.id === w.s);
  const token = sentence && sentence.tokens[w.t];
  if (!token) return '<div class="lit-word-card is-empty"><p class="lit-word-hint">That word is no longer on the page.</p></div>';
  const unknown = isUnknownLemma(state.litUnknown, state.lit.bookId, token.lemma);
  const entry = (chapter.lemmas || {})[token.lemma] || {};
  // A particle's `features` is often just its word class again (مع is a
  // حرف جر and nothing else) -- printing that twice says nothing.
  const wordClass = posLabel(token.pos);
  const form = token.features ? describeFeatures(token.features) : '';
  const rows = [
    ['Meaning', escBidi(token.gloss || entry.gloss || '—')],
    ['Dictionary form', `<bdi lang="ar">${esc(token.lemma)}</bdi>`],
    token.root ? ['Root', `<bdi lang="ar">${esc(token.root)}</bdi>`] : null,
    // Arabic throughout, so one RTL isolate around the whole value rather
    // than escBidi's per-run isolation -- see the POS_LABELS comment in
    // content-lit/index.js for why that distinction matters here.
    ['Word class', `<bdi lang="ar" dir="rtl">${esc(wordClass)}</bdi>`],
    form && form !== wordClass ? ['Form', `<bdi lang="ar" dir="rtl">${esc(form)}</bdi>`] : null,
  ].filter(Boolean);
  return `
    <div class="lit-word-card">
      <div class="lit-word-card-head">
        <span class="lit-word-card-surface" lang="ar" dir="rtl">${esc(token.surface)}</span>
      </div>
      <dl class="lit-word-rows">
        ${rows.map(([k, v]) => `<div class="lit-word-row"><dt>${esc(k)}</dt><dd>${v}</dd></div>`).join('')}
      </dl>
      ${entry.book_note ? `<p class="lit-word-note">${escBidi(entry.book_note)}</p>` : ''}
      <button class="btn ${unknown ? 'btn-primary' : 'btn-secondary'} btn-block" data-action="litToggleUnknown" data-lemma="${escAttr(token.lemma)}">
        ${unknown ? 'Marked as unknown — undo' : "Mark as a word I don't know"}
      </button>
    </div>`;
}

function litUnknownListHtml(state, chapter) {
  const words = unknownWordsInChapter(chapter, state.litUnknown, state.lit.bookId);
  return `
    <div class="lit-unknown">
      <div class="lit-unknown-head">
        <span class="card-kicker">Words to work on</span>
        <span class="lit-unknown-count">${words.length}</span>
      </div>
      ${words.length
        ? `<div class="lit-unknown-list">${words.map((w) => `
            <button class="lit-unknown-chip" data-action="litToggleUnknown" data-lemma="${escAttr(w.lemma)}" title="Remove">
              <bdi lang="ar">${esc(w.surface)}</bdi>
              <span class="lit-unknown-gloss">${escBidi(w.gloss || '')}</span>
            </button>`).join('')}</div>`
        : '<p class="lit-unknown-empty">Nothing marked yet. The build exercises at the end will draw on whatever you mark here.</p>'}
    </div>`;
}

function litRailHtml(state) {
  const current = LIT_STAGES.findIndex((s) => s.id === state.lit.stage);
  const at = current === -1 ? LIT_STAGES.length : current;
  return `
    <ol class="lit-rail">
      ${LIT_STAGES.map((s, i) => `
        <li class="lit-rail-step${i === at ? ' is-active' : ''}${i < at ? ' is-done' : ''}">
          <span class="lit-rail-dot" aria-hidden="true">${i < at ? icon('check', 11, 2.8) : i + 1}</span>
          <span class="lit-rail-label">${esc(s.label)}</span>
        </li>`).join('')}
    </ol>`;
}

// --- Reader: the two drill stages ----------------------------------------

// The chip tray both drills share: one row of candidate words, click or drag
// to place. Native <button>s, so Enter/Space work with no extra wiring (the
// تركيب widget's own chips are divs and need the keydown handler in
// js/main.js; there was no reason to repeat that here).
// `chip.value` is what data-chip carries, and what `used`/`selected` are
// compared against -- for the workshop that's the option's ORIGINAL index
// (the tray is displayed in a shuffled order, exactly like renderMcqOptions'
// own `order`), for the build tray it's just the chip's position.
function litChipsHtml(chips, { used = new Set(), selected = null, action, disabled = false }) {
  return `
    <div class="lit-chips" lang="ar" dir="rtl">
      ${chips.map((chip, i) => {
        const value = chip.value === undefined ? i : chip.value;
        const isUsed = used.has(value);
        const cls = ['lit-chip', isUsed ? 'is-used' : '', selected === value ? 'is-selected' : ''].filter(Boolean).join(' ');
        return `<button class="${cls}" draggable="${!isUsed && !disabled ? 'true' : 'false'}" data-action="${action}" data-chip="${value}" ${isUsed || disabled ? 'disabled' : ''}>${esc(chip.surface)}</button>`;
      }).join('')}
    </div>`;
}

function litWorkshopHtml(state, chapter) {
  const lit = state.lit;
  const item = lit.workshop[lit.wIndex];
  if (!item) return litCompleteHtml(state, chapter);
  const placed = lit.wSelected;
  const submitted = lit.wSubmitted;
  const correct = placed === item.answer;
  const slot = `<span class="lit-slot${placed === null ? ' is-empty' : ''}${submitted ? (correct ? ' is-correct' : ' is-incorrect') : ''}"
      data-action="litWorkshopSlot" role="button" tabindex="0"
      title="${placed === null ? 'Pick a word below' : 'Take this word back'}"
      aria-label="${placed === null ? 'The missing word — pick a word below' : `The missing word: ${esc(item.options[placed])}. Activate to take it back.`}">${placed === null ? '' : esc(item.options[placed])}</span>`;
  const isLast = lit.wIndex + 1 >= lit.workshop.length;
  const rationale = submitted && placed !== null ? (item.rationales || [])[placed] : '';
  // What the question is asking, in its own words. A transformation item may
  // name its own task ("Make it negative", "Say it about yesterday") -- the
  // person shift is only the most common of them, so it is the fallback
  // wording rather than the only one.
  const kicker = item.kicker || (item.type === 'shift' ? 'Change the sentence' : 'The chapter’s own pattern');
  const task = item.task
    ? escBidi(item.task)
    : item.type === 'shift'
      ? `Say the same thing about <bdi lang="ar">${esc(item.targetPerson)}</bdi>${item.targetEn ? ` (${escBidi(item.targetEn)})` : ''}.`
      : escBidi(item.en);
  return `
    <section class="lit-drill">
      <div class="lit-drill-head">
        <span class="card-kicker">${esc(kicker)}</span>
        <span class="lit-drill-count">${lit.wIndex + 1} / ${lit.workshop.length}</span>
      </div>
      <p class="lit-drill-lede">${task}</p>
      ${item.base ? `
        <div class="lit-from-text">
          <span class="lit-from-text-label">From the text</span>
          <span class="lit-from-text-line" lang="ar" dir="rtl">${esc(item.base)}</span>
        </div>` : ''}
      ${item.type !== 'cloze' && item.en ? `<p class="lit-drill-sub">${escBidi(item.en)}</p>` : ''}
      <div class="lit-cloze-card">
        <p class="lit-cloze" lang="ar" dir="rtl">${item.pre ? `${esc(item.pre)} ` : ''}${slot}${item.post ? ` ${esc(item.post)}` : ''}</p>
      </div>
      <div class="lit-chip-label">Choose a word</div>
      ${litChipsHtml((item.order || item.options.map((_, i) => i)).map((orig) => ({ surface: item.options[orig], value: orig })), {
        // The word currently in the blank is shown as spent, not as another
        // choice -- offering it twice made the tray read as untouched after
        // an answer was placed. Any OTHER chip still swaps straight in.
        used: new Set(placed === null ? [] : [placed]),
        action: 'litWorkshopChip',
        disabled: submitted,
      })}
      ${submitted ? `
        <div class="quiz-feedback${correct ? '' : ' quiz-feedback-incorrect'}">
          <div class="quiz-feedback-line">${correct ? 'Correct.' : `Not quite — it is ${escBidi(item.options[item.answer])}.`}</div>
          ${rationale ? `<p class="quiz-feedback-explanation">${escBidi(rationale)}</p>` : ''}
          ${!correct && (item.rationales || [])[item.answer] ? `<p class="quiz-feedback-explanation">${escBidi(item.rationales[item.answer])}</p>` : ''}
        </div>` : ''}
      <div class="lit-drill-foot">
        ${submitted
          ? `<button class="btn btn-primary btn-block" data-action="litWorkshopNext">${isLast ? 'On to building sentences' : 'Next'}</button>`
          : `<button class="btn btn-primary lit-drill-check" data-action="litWorkshopCheck" ${placed === null ? 'disabled' : ''}>Check</button>`}
      </div>
    </section>`;
}

function litBuildHtml(state, chapter) {
  const lit = state.lit;
  const item = lit.build[lit.bIndex];
  if (!item) return litCompleteHtml(state, chapter);
  const submitted = lit.bSubmitted;
  const answer = lit.bSlots.map((ci) => (ci === null ? null : item.chips[ci].surface));
  const correct = answer.every((s, i) => s === item.solution[i]);
  const filled = lit.bSlots.every((s) => s !== null);
  const isLast = lit.bIndex + 1 >= lit.build.length;
  const wrongNote = submitted && !correct
    ? (lit.bSlots.map((ci) => (ci === null ? null : item.chips[ci])).find((chip) => chip && !chip.correct) || {}).note
    : '';
  return `
    <section class="lit-drill lit-build">
      <div class="lit-drill-head">
        <span class="card-kicker">Build the sentence</span>
        <span class="lit-drill-count">${lit.bIndex + 1} / ${lit.build.length}</span>
      </div>
      <p class="lit-drill-lede">${escBidi(item.en)}</p>
      <div class="lit-slot-card">
      <div class="lit-slots" lang="ar" dir="rtl">
        ${lit.bSlots.map((ci, i) => {
          const chip = ci === null ? null : item.chips[ci];
          const ok = submitted && chip && chip.surface === item.solution[i];
          const cls = ['lit-slot', chip ? '' : 'is-empty', submitted ? (ok ? 'is-correct' : 'is-incorrect') : ''].filter(Boolean).join(' ');
          return `<span class="${cls}" data-action="litBuildSlot" data-slot="${i}" role="button" tabindex="0"
            title="${chip ? 'Take this word back' : 'Word ' + (i + 1)}"
            aria-label="Word ${i + 1} of ${lit.bSlots.length}${chip ? `: ${esc(chip.surface)}. Activate to take it back.` : ', empty'}">${chip ? esc(chip.surface) : ''}</span>`;
        }).join('')}
      </div>
        <div class="lit-slot-hint">Tap a word below, then a slot — or tap a filled slot to take it back.</div>
      </div>
      <div class="lit-chip-label">Words</div>
      ${litChipsHtml(item.chips, {
        used: new Set(lit.bSlots.filter((s) => s !== null)),
        selected: lit.bSelected,
        action: 'litBuildChip',
        disabled: submitted,
      })}
      ${submitted ? `
        <div class="quiz-feedback${correct ? '' : ' quiz-feedback-incorrect'}">
          <div class="quiz-feedback-line">${correct ? 'Correct.' : 'Not quite.'}</div>
          ${correct ? '' : `<p class="lit-answer" lang="ar" dir="rtl">${esc(item.ar)}</p>`}
          ${wrongNote ? `<p class="quiz-feedback-explanation">${escBidi(wrongNote)}</p>` : ''}
        </div>` : ''}
      <div class="lit-drill-foot">
        ${submitted
          ? `<button class="btn btn-primary btn-block" data-action="litBuildNext">${isLast ? 'Finish the chapter' : 'Next sentence'}</button>`
          : `
            <button class="btn btn-secondary" data-action="litBuildClear" ${lit.bSlots.some((s) => s !== null) ? '' : 'disabled'}>Clear</button>
            <button class="btn btn-primary lit-drill-check" data-action="litBuildCheck" ${filled ? '' : 'disabled'}>Check</button>`}
      </div>
    </section>`;
}

function litCompleteHtml(state, chapter) {
  const lit = state.lit;
  const words = unknownWordsInChapter(chapter, state.litUnknown, lit.bookId);
  const pct = lit.total ? Math.round((lit.correct / lit.total) * 100) : 0;
  // Finishing a chapter unlocks the next one, but said so nowhere: the only
  // way on was back to the book and down the contents list to the row under
  // the one just cleared. Offered here instead, and it opens the same
  // Free-read/Practice modal a contents row does, so the choice of how to
  // read it is not taken away by the shortcut.
  const book = getLitBook(lit.bookId);
  const chIndex = book ? book.chapters.findIndex((c) => c.id === chapter.id) : -1;
  const nextCh = book && chIndex >= 0 ? book.chapters[chIndex + 1] : null;
  const nextOpen = nextCh && isChapterUnlocked(book, chIndex + 1, state.litProgress, state.forceUnlockAll);
  const nextChapterHtml = nextOpen
    ? `<button class="btn btn-primary btn-block lit-complete-next" data-action="nextLitChapter" data-chapter-id="${escAttr(nextCh.id)}">
         Next chapter · <bdi lang="ar" dir="rtl">${esc(nextCh.title.ar)}</bdi>
       </button>`
    : '';
  return `
    <section class="lit-complete plate">
      ${heroBadgeHtml('تمّت القراءة')}
      <h2 class="lit-complete-title" lang="ar" dir="rtl">${esc(chapter.title.ar)}</h2>
      <p class="lit-complete-sub">${escBidi(chapter.title.en)} — read, drilled and built.</p>
      ${heroLedgerHtml([
        ['Answered', `${lit.correct} / ${lit.total}`],
        ['Accuracy', `${pct}%`],
        ['Words marked', String(words.length)],
      ])}
      ${words.length ? `
        <p class="lit-complete-note">Still marked as unknown — they will keep coming back in this book’s later chapters:</p>
        <div class="lit-unknown-list">${words.map((w) => `<span class="lit-unknown-chip is-static"><bdi lang="ar">${esc(w.surface)}</bdi><span class="lit-unknown-gloss">${escBidi(w.gloss || '')}</span></span>`).join('')}</div>` : ''}
      ${nextChapterHtml}
      <div class="action-row">
        <button class="btn ${nextChapterHtml ? 'btn-secondary' : 'btn-primary'}" data-action="exitLitChapter">Back to the book</button>
        <button class="btn btn-secondary" data-action="rereadLitChapter">Read it again</button>
      </div>
    </section>`;
}

// One paragraph at a time, with its own questions under it -- the page
// turns rather than growing. Paragraphs already read stay reachable through
// the pager; their answered checks live on the session (lit.checks), so a
// revisited paragraph comes back exactly as it was left. Free-read sessions
// (lit.freeRead, chosen from the chapter's preview modal) drop the questions
// entirely, so the pager grows its own "Next" button instead of relying on
// the checks' advance button.
function litPagerHtml(state, chapter) {
  const lit = state.lit;
  const lastPara = lit.para + 1 >= chapter.paragraphs.length;
  return `
    <div class="lit-pager">
      <button class="lit-pager-btn" data-action="litPrevParagraph" ${lit.para > 0 ? '' : 'disabled'}>
        ${icon('arrowLeft', 14, 2)} Previous paragraph
      </button>
      <span class="lit-pager-count">Paragraph ${lit.para + 1} of ${chapter.paragraphs.length}${lit.freeRead ? ' · free read' : ''}</span>
      ${lit.freeRead ? `
      <button class="lit-pager-btn lit-pager-btn-next" data-action="litNextParagraph" ${lastPara ? 'disabled' : ''}>
        Next paragraph ${icon('arrowRight', 14, 2)}
      </button>` : ''}
    </div>`;
}

function litReadStageHtml(state, chapter) {
  const lit = state.lit;
  return `${litPagerHtml(state, chapter)}
    ${litParagraphHtml(state, chapter.paragraphs[lit.para], lit.para, true)}
    ${lit.freeRead ? '' : litChecksHtml(state, chapter.paragraphs[lit.para], lit.para)}`;
}

function litReadHtml(state) {
  const lit = state.lit;
  const chapter = lit && getLoadedChapter(lit.bookId, lit.chapterId);
  // The chapter is loaded by startLitFreeRead/startLitPractice before this
  // view is ever entered; if it somehow isn't (a save pointing at a chapter
  // that no longer exists), fall back rather than render a broken page.
  if (!chapter) return state.litBookId ? litBookHtml(state) : libraryHtml(state);
  const book = getLitBook(lit.bookId);
  const stageBody = lit.stage === 'read' ? litReadStageHtml(state, chapter)
    : lit.stage === 'workshop' ? litWorkshopHtml(state, chapter)
      : lit.stage === 'build' ? litBuildHtml(state, chapter)
        : litCompleteHtml(state, chapter);
  const pct = lit.stage === 'read'
    ? Math.round(((lit.para + 1) / chapter.paragraphs.length) * 100)
    : lit.stage === 'workshop'
      ? Math.round((lit.wIndex / Math.max(1, lit.workshop.length)) * 100)
      : lit.stage === 'build'
        ? Math.round((lit.bIndex / Math.max(1, lit.build.length)) * 100)
        : 100;

  return `
    <div class="lit-reader${state.litHoverTranslate === false ? ' no-hover-translate' : ''}">
      <div class="lit-reader-head">
        ${backLink('Back to the book', 'exitLitChapter')}
        <div class="lit-reader-titles">
          <span class="lit-reader-book">${escBidi(book ? book.title.en : '')}</span>
          <h1 class="lit-reader-title" lang="ar" dir="rtl">${esc(chapter.title.ar)}</h1>
          <span class="lit-reader-en">${escBidi(chapter.title.en)}</span>
        </div>
        ${lit.freeRead ? '' : `${litRailHtml(state)}${progressBar(pct)}`}
      </div>
      <div class="lit-reader-body">
        <div class="lit-page">${stageBody}</div>
        ${lit.stage === 'read' ? `
        <aside class="lit-aside" aria-label="Word notes">
          ${litWordCardHtml(state, chapter)}
          ${litUnknownListHtml(state, chapter)}
        </aside>` : ''}
      </div>
    </div>`;
}

// --- "Practice weak words" -- a book-wide sibling of the build stage above,
// reached from the book hero rather than from inside one chapter (see
// state.litPractice in js/main.js for why it's a separate session instead
// of reusing state.lit: its items span every chapter in the book, not one).

function litWordPracticeDrillHtml(p, item) {
  const submitted = p.submitted;
  const answer = p.slots.map((ci) => (ci === null ? null : item.chips[ci].surface));
  const correct = answer.every((s, i) => s === item.solution[i]);
  const filled = p.slots.every((s) => s !== null);
  const isLast = p.index + 1 >= p.queue.length;
  const wrongNote = submitted && !correct
    ? (p.slots.map((ci) => (ci === null ? null : item.chips[ci])).find((chip) => chip && !chip.correct) || {}).note
    : '';
  return `
    <section class="lit-drill lit-build">
      <div class="lit-drill-head">
        <span class="card-kicker">Build the sentence</span>
        <span class="lit-drill-count">${p.index + 1} / ${p.queue.length}</span>
      </div>
      <p class="lit-drill-lede">${escBidi(item.en)}</p>
      <div class="lit-slots" lang="ar" dir="rtl">
        ${p.slots.map((ci, i) => {
          const chip = ci === null ? null : item.chips[ci];
          const ok = submitted && chip && chip.surface === item.solution[i];
          const cls = ['lit-slot', chip ? '' : 'is-empty', submitted ? (ok ? 'is-correct' : 'is-incorrect') : ''].filter(Boolean).join(' ');
          return `<span class="${cls}" data-action="litWordPracticeSlot" data-slot="${i}" role="button" tabindex="0"
            title="${chip ? 'Take this word back' : 'Word ' + (i + 1)}"
            aria-label="Word ${i + 1} of ${p.slots.length}${chip ? `: ${esc(chip.surface)}. Activate to take it back.` : ', empty'}">${chip ? esc(chip.surface) : ''}</span>`;
        }).join('')}
      </div>
      ${litChipsHtml(item.chips, {
        used: new Set(p.slots.filter((s) => s !== null)),
        action: 'litWordPracticeChip',
        disabled: submitted,
      })}
      ${submitted ? `
        <div class="quiz-feedback-line ${correct ? 'correct' : 'incorrect'}">${correct ? 'Correct.' : 'Not quite.'}</div>
        ${correct ? '' : `<p class="lit-answer" lang="ar" dir="rtl">${esc(item.ar)}</p>`}
        ${wrongNote ? `<div class="quiz-feedback-explanation">${escBidi(wrongNote)}</div>` : ''}` : ''}
      <div class="action-row">
        ${submitted
          ? `<button class="btn btn-primary" data-action="litWordPracticeNext">${isLast ? 'Finish' : 'Next sentence'}</button>`
          : `<button class="btn btn-primary" data-action="litWordPracticeCheck" ${filled ? '' : 'disabled'}>Check</button>`}
        ${submitted ? '' : `<button class="btn btn-secondary" data-action="litWordPracticeClear" ${p.slots.some((s) => s !== null) ? '' : 'disabled'}>Clear</button>`}
      </div>
    </section>`;
}

function litWordPracticeCompleteHtml(p, book) {
  const pct = p.total ? Math.round((p.correct / p.total) * 100) : 0;
  return `
    <section class="lit-complete">
      ${heroBadgeHtml('تمّت المراجعة')}
      <h2 class="lit-complete-title" lang="ar" dir="rtl">${book ? esc(book.title.ar) : ''}</h2>
      <p class="lit-complete-sub">Weak-words practice — reviewed and scored.</p>
      ${heroLedgerHtml([
        ['Answered', `${p.correct} / ${p.total}`],
        ['Accuracy', `${pct}%`],
        ['Words retired', String(p.retired)],
      ])}
      <div class="action-row">
        <button class="btn btn-primary" data-action="exitLitWordPractice">Back to the book</button>
      </div>
    </section>`;
}

function litWordPracticeHtml(state) {
  const p = state.litPractice;
  if (!p) return state.litBookId ? litBookHtml(state) : libraryHtml(state);
  const book = getLitBook(p.bookId);
  const item = p.queue[p.index];
  const pct = Math.round((p.index / Math.max(1, p.queue.length)) * 100);
  const bodyHtml = item ? litWordPracticeDrillHtml(p, item) : litWordPracticeCompleteHtml(p, book);
  return `
    <div class="lit-reader">
      <div class="lit-reader-head">
        ${backLink('Back to the book', 'exitLitWordPractice')}
        <div class="lit-reader-titles">
          <span class="lit-reader-book">${escBidi(book ? book.title.en : '')}</span>
          <h1 class="lit-reader-title" lang="ar" dir="rtl">${book ? esc(book.title.ar) : ''}</h1>
          <span class="lit-reader-en">Practice weak words</span>
        </div>
        ${progressBar(pct)}
      </div>
      <div class="lit-reader-body" style="grid-template-columns:minmax(0,1fr);">
        <div class="lit-page">${bodyHtml}</div>
      </div>
    </div>`;
}

// --- top-level dispatch ---------------------------------------------------

export function render(state, MODULES, revealedKeys = new Set()) {
  let body;
  switch (state.view) {
    case 'module':
      body = modulePageHtml(state, MODULES);
      break;
    case 'lesson':
      body = lessonHtml(state, MODULES, revealedKeys);
      break;
    case 'quiz':
      body = quizHtml(state, MODULES);
      break;
    case 'lessonComplete':
      body = lessonCompleteHtml(state, MODULES);
      break;
    case 'practice':
      body = practiceHtml(state, MODULES);
      break;
    case 'practiceReview':
      body = practiceReviewHtml(state, MODULES);
      break;
    case 'schedule':
      body = scheduleHtml(state, MODULES, revealedKeys);
      break;
    case 'pathGroups':
      body = pathGroupsHtml(state, revealedKeys);
      break;
    case 'library':
      body = libraryHtml(state);
      break;
    case 'litBook':
      body = litBookHtml(state);
      break;
    case 'litRead':
      body = litReadHtml(state);
      break;
    case 'litWordPractice':
      body = litWordPracticeHtml(state);
      break;
    case 'path':
      body = pathMapHtml(state, revealedKeys);
      break;
    case 'masteryV2Complete':
      body = masteryV2CompleteHtml(state, MODULES);
      break;
    case 'settings':
      body = settingsHtml(state);
      break;
    case 'account':
      body = accountHtml(state);
      break;
    case 'achievements':
      body = achievementsHtml(state);
      break;
    default:
      body = dashboardHtml(state, MODULES, revealedKeys);
  }
  const isLiveQuestion = (state.view === 'quiz' && !state.quizShowResult) || state.view === 'practice';
  const mainClasses = ['main', isLiveQuestion ? 'question-mode' : ''].filter(Boolean).join(' ');
  const contentClasses = ['main-content', isLiveQuestion ? 'question-content' : ''].filter(Boolean).join(' ');
  // <main> is the landing point for focus after every screen change (see
  // rerender in js/main.js), so it carries the screen's own name and a
  // tabindex to be focusable at all. The name is the last crumb of the same
  // trail the back control and breadcrumb read, so what a screen reader
  // announces on arrival is what the breadcrumb says you arrived at.
  const trail = crumbTrail(state);
  const pageName = trail.length ? trail[trail.length - 1].label : '';
  return `${headerHtml(state, MODULES)}<main class="${mainClasses}" tabindex="-1" aria-label="${escAttr(pageName)}"><div class="${contentClasses}">${body}</div></main>${tabBarHtml(state)}${lessonPreviewHtml(state, MODULES)}${litChapterPreviewHtml(state)}${pathCheckpointSetupHtml(state)}${pathSkipAheadPromptHtml(state)}${toastHtml(state)}${badgeModalHtml(state)}${forceUnlockPromptHtml(state)}${unlockPromptHtml(state)}${resetModulePromptHtml(state, MODULES)}${leaveSessionPromptHtml(state)}`;
}

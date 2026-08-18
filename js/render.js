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
import { todayISO, normalizeLitTextScale, LIT_TEXT_SCALE_MIN, LIT_TEXT_SCALE_MAX } from './persistence.js';

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
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/>',
  'trash-2': '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/>',
  pointer: '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/>',
};

function icon(name, size = 16, strokeWidth = 1.6) {
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"
    aria-hidden="true" focusable="false">${ICON_PATHS[name]}</svg>`;
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

// --- Header -------------------------------------------------------------
// One bar, every screen: wordmark left, nav right -- Home, Schedule, and
// Settings, the only three screens that actually exist. On module/lesson/
// quiz screens the same right-hand slot swaps the tab list for a back-arrow
// + breadcrumb instead, so it's always exactly one bar, never two stacked.
// Streak/XP/level (no equivalent in the design handoff, which has no
// gamification layer) rides along in the same right-hand group as a small
// tabular cluster.

function headerHtml(state, MODULES) {
  const li = levelInfo(state.xp);
  const inCourse = state.view === 'module' || state.view === 'lesson' || state.view === 'quiz';
  const mod = inCourse ? MODULES.find((m) => m.id === state.moduleId) : null;
  const lesson = mod && (state.view === 'lesson' || state.view === 'quiz')
    ? mod.lessons.find((l) => l.id === state.lessonId)
    : null;
  // Falls back to the plain tab list if the course context is somehow gone
  // (e.g. a stale moduleId) rather than rendering a broken breadcrumb.
  const showCrumbs = inCourse && mod && (state.view === 'module' || lesson);
  // My Path isn't "inside" any single course the way Home/Schedule are --
  // both read as one specific course's own dashboard/planner, which is
  // exactly what My Path deliberately isn't (it spans fstu+sarf at once).
  const onPath = state.view === 'path' || state.view === 'pathGroups';
  // Same reasoning as onPath, for the Library: a book belongs to no course,
  // so neither Home nor Schedule (both of which mean "this course's") should
  // sit in the bar while one is open.
  const onLit = state.view === 'library' || state.view === 'litBook' || state.view === 'litRead' || state.view === 'litWordPractice';
  // A live practice/mastery session (quiz-like: graded, has its own
  // in-page "End session"/continue controls) -- same treatment as
  // module/lesson/quiz below, no top-bar tabs, so leaving it always goes
  // through exitPracticeSession (js/main.js) instead of a tab silently
  // orphaning state.practice/pathActive.
  const inSession = state.view === 'practice' || state.view === 'practiceReview' || state.view === 'masteryV2Complete';
  const isLiveQuestion = (state.view === 'quiz' && !state.quizShowResult) || state.view === 'practice';

  // Back button + breadcrumb live on the left, next to the brand -- "where
  // you are / how to get back" reads as one group there, distinct from the
  // right side's forward-navigation (tabs) and stats.
  let leftExtra = '';
  let rightInner = '';
  let mobileMenuInner = '';
  let dotsHtml = '';

  if (showCrumbs) {
    let crumbs;
    let backAction;
    let backExtra;
    if (state.view === 'module') {
      crumbs = [{ label: mod.title }];
      backAction = 'openDashboard';
      backExtra = '';
    } else if (state.view === 'lesson') {
      crumbs = [{ label: mod.title, action: 'openModule', extra: `data-module-id="${escAttr(mod.id)}"` }];
      // No static "mini title" markup here -- on the lesson view, main.js
      // clones the real page <h1> (and .concept-dots) into fixed-position
      // elements it drives continuously from scroll position, so the
      // title visually keeps traveling into this header instead of
      // crossfading with a separate pre-rendered copy. See
      // setupScrollObserver's docking section.
      backAction = 'openModule';
      backExtra = `data-module-id="${escAttr(mod.id)}"`;
    } else {
      crumbs = [
        { label: mod.title, action: 'openModule', extra: `data-module-id="${escAttr(mod.id)}"` },
        { label: lesson.title, action: 'backToLesson' },
        { label: 'Quiz', en: true },
      ];
      backAction = 'backToLesson';
      backExtra = '';
      const activeIdx = state.quizShowResult ? lesson.quiz.length - 1 : state.quizIndex;
      dotsHtml = `<div class="app-header-dots">${lesson.quiz.map((_, i) => {
        const cls = ['app-header-dot', i === activeIdx ? 'active' : '', i < activeIdx || state.quizShowResult ? 'done' : ''].join(' ').trim();
        return `<div class="${cls}"></div>`;
      }).join('')}</div>`;
    }

    // A lesson/quiz reached via My Path routes "back" to the path map
    // instead of the module page it would otherwise belong to -- the crumb
    // LABELS stay the same (still names the actual module/lesson for
    // context), only the arrow button's destination changes.
    if (state.pathActive) backAction = 'backToPath';

    const crumbsHtml = crumbs.map((c, i) => {
      const sep = i > 0 ? '<span class="app-header-crumb-sep">/</span>' : '';
      const nodeCls = ['app-header-crumb-current', c.en ? 'app-header-crumb-en' : ''].join(' ').trim();
      const node = c.action
        ? `<button class="app-header-crumb-link" data-action="${c.action}" ${c.extra || ''}>${esc(c.label)}</button>`
        : `<span class="${nodeCls}">${esc(c.label)}</span>`;
      return sep + node;
    }).join('');

    leftExtra = `
      <div class="app-header-crumbs-group">
        <button class="app-header-back" data-action="${backAction}" ${backExtra} aria-label="Back">${icon('arrowLeft', 16, 2)}</button>
        <div class="app-header-crumbs">${crumbsHtml}</div>
      </div>`;
  } else if (inSession) {
    // No tabs at all while a session is live -- same reasoning as the
    // crumbs branch above (module/lesson/quiz): the only sanctioned way
    // out is the session's own in-page "End session"/continue controls,
    // which route through exitPracticeSession (js/main.js) and know how
    // to get back to wherever the session actually started (My Path,
    // Schedule, a module, ...). A top-bar tab here would skip that and
    // strand state.practice/pathActive as orphaned data (see openSettings/
    // openSchedule/openAchievements in js/main.js for the defensive
    // cleanup that covers it if this is ever bypassed).
    rightInner = '';
  } else {
    // Highlights Schedule for the whole time a Revision session it launched
    // is running too, not just on the Schedule screen itself -- that
    // session has no module page of its own to look "active" under instead.
    const scheduleActive = state.view === 'schedule'
      || (state.practice && state.practice.source === 'revision');
    const tab = (label, action, active) =>
      `<button class="app-header-tab ${active ? 'is-active' : ''}" data-action="${action}">${esc(label)}</button>`;

    // My Path replaces Home/Schedule with its own "back" step where each
    // would sit -- neither reads as "this course's dashboard/planner"
    // while browsing something that spans both courses at once. A group's
    // own map (state.view === 'path') gets "All groups" where Home was
    // (its own back-navigation, one level up); the group-selection hub
    // itself has nothing further to go back to, so that slot is just empty.
    // Off of My Path but still in state.pathHome (a Settings/Schedule/
    // Achievements detour -- see state.pathHome in js/state.js), the slot
    // instead offers a direct way back in, since state.view alone can't
    // tell "detoured off My Path" from "detoured off a course dashboard"
    // once it's changed to 'settings'/'schedule'/'achievements'.
    const homeSlot = state.view === 'path' ? tab('← All groups', 'backToPathGroups', false)
      : onPath ? ''
        : state.view === 'litBook' || state.view === 'litRead' || state.view === 'litWordPractice' ? tab('← Library', 'openLibrary', false)
          : state.view === 'library' ? ''
            : state.pathHome ? tab('My Path', 'returnToPath', false)
              : state.litHome ? tab('Library', 'openLibrary', false)
                : tab('Home', 'openDashboard', state.view === 'dashboard');

    rightInner = `
      <nav class="app-header-nav" aria-label="Primary">
        ${homeSlot}
        ${onPath || onLit ? '' : tab('Schedule', 'openSchedule', scheduleActive)}
        ${tab('Settings', 'openSettings', state.view === 'settings')}
        ${tab('Account', 'openAccount', state.view === 'account')}
      </nav>`;
    mobileMenuInner = rightInner;
  }

  // Always rendered, on every screen (dashboard, module, lesson, quiz, ...)
  // -- reachable no matter where the learner currently is, not just from
  // Home. Names the active course and, rather than switching in place (the
  // old inline pill row), sends the learner back to the launch screen's
  // course picker (see openLaunch in js/main.js) to choose from there.
  // While browsing My Path (or detoured off it into Settings/Schedule/
  // Achievements -- state.pathHome, same reasoning as homeSlot above) this
  // reads "My Path" instead of a single course's name -- state.courseId
  // still holds whichever course a path lesson last activated (see
  // enterPathLesson), which would otherwise show a misleading
  // single-course label while actually spanning both.
  const activeCourse = COURSES.find((c) => c.id === state.courseId);
  const courseSwitchHtml = `
    <button class="app-header-course-btn" data-action="openLaunch" title="Switch course">
      ${icon('book', 14, 1.7)}
      <span>${onPath || state.pathHome ? 'My Path' : onLit || state.litHome ? 'Literature' : esc(activeCourse ? activeCourse.name : '')}</span>
    </button>`;
  const headerClasses = [
    'app-header',
    showCrumbs ? 'has-crumbs' : '',
    inSession ? 'in-session' : '',
    isLiveQuestion ? 'is-question-session' : '',
    dotsHtml ? 'has-dots' : '',
  ].filter(Boolean).join(' ');

  return `
    <header class="${headerClasses}">
      <div class="app-header-left">
        <button class="app-header-brand" data-action="openDashboard" title="Home" aria-label="Home">
          <span class="app-header-kicker">العلوم</span>
        </button>
        <span class="app-header-rule" aria-hidden="true"></span>
        ${courseSwitchHtml}
        ${leftExtra}
      </div>
      <div class="app-header-right">
        ${rightInner}
        <button class="app-header-stats" data-action="openAchievements" title="Achievements">
          <span class="app-header-stat" title="Current streak">${icon('flame', 15, 1.7)}${state.streak || 1}</span>
          <span class="app-header-stat" title="Total XP">${icon('star', 14, 1.8)}${state.xp} XP</span>
          <span class="app-header-level" title="Level ${li.level}">${li.level}</span>
        </button>
        ${mobileMenuInner ? `
          <details class="app-header-mobile-menu">
            <summary aria-label="Header menu"><span aria-hidden="true">...</span></summary>
            <div class="app-header-menu-panel">
              ${mobileMenuInner}
            </div>
          </details>` : ''}
      </div>
      ${dotsHtml}
    </header>`;
}

// --- Footer ---------------------------------------------------------------

function footerHtml(state) {
  const theme = THEMES[state.theme] || THEMES.manuscript;
  const face = FACES[bodyFaceKey(state.arabicFace)] || FACES.naskh;
  const heading = HEADING_FACES[headingFaceKey(state)] || HEADING_FACES.body;
  const faceLabel = face.name + (heading.font ? ` + ${heading.name}` : '');
  return `
    <footer class="app-footer">
      <span>The Sciences — a private study desk</span>
      <span class="app-footer-state">${esc(theme.name)} · ${esc(faceLabel)}</span>
    </footer>`;
}

function backLink(label, action, extra = '') {
  return `<button class="back-link" data-action="${action}" ${extra}>← ${esc(label)}</button>`;
}

function progressBar(pct) {
  return `<div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%"></div></div>`;
}

// --- Dashboard (Home) -------------------------------------------------
// Per the design handoff's Screen 1 -- hero panel, arabesque separator,
// chapters grid -- populated with real progress data rather than the
// handoff's fixed sample copy.

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

function cornerBracketsHtml() {
  return `
    <span aria-hidden="true" class="home-hero-corner tl"></span>
    <span aria-hidden="true" class="home-hero-corner tr"></span>
    <span aria-hidden="true" class="home-hero-corner bl"></span>
    <span aria-hidden="true" class="home-hero-corner br"></span>`;
}

function heroBadgeHtml(text) {
  return `
    <div class="home-hero-badge">
      <span class="home-hero-badge-mark" aria-hidden="true"></span>
      <span class="home-hero-badge-text" lang="ar" dir="rtl">${esc(text)}</span>
      <span class="home-hero-badge-mark" aria-hidden="true"></span>
    </div>`;
}

// `rows` is [label, value] pairs; value is inserted raw (tabular numbers,
// so callers pass already-formatted strings/numbers, not HTML).
function heroLedgerHtml(rows) {
  return `
    <dl class="home-ledger">
      ${rows.map(([label, value]) => `<div class="home-ledger-row"><dt class="home-ledger-label">${esc(label)}</dt><dd class="home-ledger-value">${value}</dd></div>`).join('')}
    </dl>`;
}

// title/body are inserted raw (callers esc/escBidi their own content, since
// title often wraps a term in <bdi>); badge/watermark are plain strings.
// sourceRef is a plain string too (e.g. "pp. 6–10") -- only the lesson hero
// (js/render.js's lessonHtml) passes it, so it never surfaces on the home
// hero or a module's lesson-list page, just inside the lesson itself.
function heroPanelHtml({ watermark, badge, title, body, actions, ledger, sourceRef }) {
  return `
    <section class="home-hero">
      ${watermark ? `<span aria-hidden="true" class="home-hero-watermark" lang="ar" dir="rtl">${esc(watermark)}</span>` : ''}
      <div class="home-hero-row">
        <div class="home-hero-main">
          ${badge ? heroBadgeHtml(badge) : ''}
          <h1 class="home-hero-title">${title}</h1>
          ${sourceRef ? `<p class="home-hero-source-ref">${esc(sourceRef)}</p>` : ''}
          ${body ? `<p class="home-hero-body">${body}</p>` : ''}
          ${actions ? `<div class="home-hero-actions">${actions}</div>` : ''}
        </div>
        ${ledger || ''}
      </div>
      ${cornerBracketsHtml()}
    </section>`;
}

function separatorHtml() {
  return `
    <div class="home-separator">
      <span class="home-separator-line" aria-hidden="true"></span>
      <span class="home-separator-icon" style="color:var(--color-accent);display:flex;">${ARABESQUE_SVG}</span>
      <span class="home-separator-line" aria-hidden="true"></span>
    </div>`;
}

// --- Launch screen (course picker) ---------------------------------------
// The very first thing the app shows on every boot, ahead of Home itself
// (see js/main.js: state.launchScreen, cleared by the chooseCourse action).
// Reuses the same hero-panel visual language (badge, arabesque-adjacent
// framing) as Home rather than inventing a new one, so it reads as the
// cover of the same book, not a separate app.

// Per-course lesson/module counts, computed straight from `course.modules`
// rather than via completedCount/isModuleComplete (content/index.js) --
// those resolve against the single active MODULES binding, so they can't
// answer "how far along is course X" for a course that isn't the active
// one, which is exactly what every card here needs to do at once.
function courseStats(course, completed) {
  let total = 0;
  let done = 0;
  course.modules.forEach((m) => {
    total += m.lessons.length;
    const doneMap = completed[m.id] || {};
    done += m.lessons.filter((l) => doneMap[l.id]).length;
  });
  return { total, done, moduleCount: course.modules.length };
}

function launchCourseCardHtml(course, index, state) {
  const { total, done, moduleCount } = courseStats(course, state.completed);
  const pct = total ? Math.round((done / total) * 100) : 0;
  const isCurrent = course.id === state.courseId;
  const unlocked = isCourseUnlocked(course, state.completed, state.unlockedCourses, state.forceUnlockAll);
  if (!unlocked) {
    return `
      <button class="launch-card locked" data-anim-key="lc${index}" data-action="openUnlockPrompt" data-target-type="course" data-target-id="${escAttr(course.id)}">
        <div class="launch-card-top">
          <span class="launch-card-kicker">${moduleCount} CHAPTER${moduleCount === 1 ? '' : 'S'}</span>
          <span class="tag tag-neutral">${icon('lock', 11, 2.6)} Locked</span>
        </div>
        <h3 class="launch-card-arabic" lang="ar" dir="rtl">${esc(course.arabicName)}</h3>
        <p class="launch-card-body">${esc(course.lockedMessage || 'Locked.')}</p>
        <span class="launch-card-cta">Unlock this course &rarr;</span>
      </button>`;
  }
  return `
    <button class="launch-card ${isCurrent ? 'is-current' : ''}" data-anim-key="lc${index}" data-action="chooseCourse" data-course-id="${escAttr(course.id)}">
      <div class="launch-card-top">
        <span class="launch-card-kicker">${moduleCount} CHAPTER${moduleCount === 1 ? '' : 'S'}</span>
        ${isCurrent ? '<span class="tag tag-accent">Last opened</span>' : ''}
      </div>
      <h3 class="launch-card-arabic" lang="ar" dir="rtl">${esc(course.arabicName)}</h3>
      <p class="launch-card-body">${escBidi(course.blurb)}</p>
      <div class="launch-card-footer">
        <span class="launch-card-track"><span class="launch-card-fill" style="width:${pct}%"></span></span>
        <span class="launch-card-meta">${done} / ${total}</span>
      </div>
      <span class="launch-card-cta">${done > 0 ? 'Continue' : 'Begin'} &rarr;</span>
    </button>`;
}

// "Sits on top of the courses" -- a small banner between the course
// picker's subtitle and its card grid, leading to My Path's group-selection
// screen (see openMyPath in js/main.js) rather than one specific course.
// UNUSED as of 2026-08-18: the only call site (launchHtml below) was
// removed to pull My Path out of the app -- kept here, along with the rest
// of My Path's render/main.js/state machinery and content/path-advanced.js,
// in case the feature comes back rather than being rebuilt from scratch.
// Progress phrasing reads live off PATH_TRACKS/state.pathNodeStatus via
// firstUnfinishedPathNodeIndex, the same derive-don't-store idiom the rest
// of the app uses for "how far along" (see e.g. content/index.js's
// completedCount).
// Always opens the group-selection screen (req: a separate "choose a
// group" hub, see openMyPath in js/main.js) -- the label just names overall
// progress across every POPULATED group, across BOTH tracks (only the
// introductory path's Group 1-and-the-advanced path's Group 1 exist so far;
// empty "Coming soon" groups don't count toward "started" either way).
function launchPathBannerHtml(state) {
  const populated = PATH_TRACKS.flatMap((t) => t.groups.filter((g) => g.sections.length));
  let groupsDone = 0;
  let anyStarted = false;
  populated.forEach((group) => {
    const skeleton = groupSkeleton(group);
    const idx = firstUnfinishedPathNodeIndex(skeleton, state.pathNodeStatus, state.completed);
    if (idx > 1) anyStarted = true;
    if (idx >= skeleton.length) groupsDone += 1;
  });
  const label = groupsDone > 0
    ? `Continue — ${groupsDone} of ${populated.length} group${populated.length === 1 ? '' : 's'} complete`
    : anyStarted ? 'Continue My Path' : 'Start My Path';
  return `
    <button class="launch-path-banner" data-anim-key="launchpathbanner" data-action="openMyPath">
      <div class="launch-path-banner-text">
        <span class="launch-path-banner-kicker">MY PATH</span>
        <span class="launch-path-banner-title">${esc(label)}</span>
        <span class="launch-path-banner-sub">Nahw + Sarf, introductory and advanced — guided routes through both.</span>
      </div>
      <span class="launch-path-banner-cta">${anyStarted ? 'Continue' : 'Begin'} &rarr;</span>
    </button>`;
}

// Literature sits alongside My Path rather than in the course grid: it isn't
// a course (see content-lit/index.js) and its cards below wouldn't mean the
// same thing -- "3 of 12 lessons" versus "a book you're partway through".
function launchLibraryBannerHtml(state) {
  const totals = LIT_BOOKS.reduce((acc, book) => {
    const { done, total } = bookProgress(book, state.litProgress);
    return { done: acc.done + done, total: acc.total + total };
  }, { done: 0, total: 0 });
  const label = totals.done > 0
    ? `Continue reading — ${totals.done} of ${totals.total} chapter${totals.total === 1 ? '' : 's'} read`
    : 'Start reading';
  return `
    <button class="launch-path-banner launch-lit-banner" data-anim-key="launchlitbanner" data-action="openLibrary">
      <div class="launch-path-banner-text">
        <span class="launch-path-banner-kicker">LITERATURE</span>
        <span class="launch-path-banner-title">${esc(label)}</span>
        <span class="launch-path-banner-sub">Graded classical readers — one paragraph at a time, with every word and phrase explained where it stands.</span>
      </div>
      <span class="launch-path-banner-cta">${totals.done > 0 ? 'Continue' : 'Open the library'} &rarr;</span>
    </button>`;
}

function launchHtml(state) {
  const cards = COURSES.map((c, i) => launchCourseCardHtml(c, i, state)).join('');
  return `
    <div class="launch-screen">
      <span aria-hidden="true" class="launch-watermark" lang="ar" dir="rtl">العلوم</span>
      <div class="launch-scroll">
      <div class="launch-inner">
        <div class="launch-head" data-anim-key="launchhead">
          <div class="launch-brand-row">
            <div class="launch-brand">
              <span class="launch-brand-kicker" lang="ar" dir="rtl">العلوم</span>
              <span class="launch-brand-rule" aria-hidden="true"></span>
              <span class="launch-brand-name">The Sciences</span>
            </div>
            ${heroBadgeHtml('وَالْعِلْمُ نُورٌ')}
          </div>
          <h1 class="launch-title">Choose a course</h1>
          <p class="launch-sub">Four paths through Arabic grammar. Pick one to enter its dashboard — you can switch anytime from the header.</p>
        </div>
        ${launchLibraryBannerHtml(state)}
        <div class="launch-grid">${cards}</div>
      </div>
      </div>
      ${unlockPromptHtml(state)}
    </div>`;
}

function homeHeroHtml(state, MODULES) {
  const continueInfo = findContinueLesson(state, MODULES);
  const lessonsCleared = totalLessonsCleared(state.completed);
  const li = levelInfo(state.xp);
  const ledger = heroLedgerHtml([
    ['Lessons done', `${lessonsCleared} / ${totalLessons()}`],
    ['Level', li.level],
    ['XP', state.xp],
    ['Streak', `${state.streak || 1}d`],
  ]);

  if (continueInfo) {
    const { mod, lesson, index } = continueInfo;
    const started = lessonsCleared > 0;
    const bankPool = getBankPool(mod.id, state.completed, state.forceUnlockAll);
    const actions = `
      <button class="ds-btn ds-btn-primary" data-action="continueLesson" data-module-id="${escAttr(mod.id)}" data-lesson-id="${escAttr(lesson.id)}">${started ? 'Continue' : 'Start'} lesson ${index + 1}</button>
      ${bankPool.length ? `<button class="ds-btn ds-btn-secondary" data-action="reviewModule" data-module-id="${escAttr(mod.id)}">Review ${bankPool.length} cards</button>` : ''}`;
    return heroPanelHtml({
      watermark: 'وَالْعِلْمُ نُورٌ',
      badge: mod.heading || mod.title,
      title: `${started ? 'Continue' : 'Begin'}: <bdi lang="ar">${esc(lesson.title)}</bdi>`,
      body: escBidi(lesson.subtitle || ''),
      actions,
      ledger,
    });
  }

  return heroPanelHtml({
    watermark: 'وَالْعِلْمُ نُورٌ',
    badge: 'تمّ بحمد الله',
    title: 'Every lesson, complete',
    body: `All ${totalLessons()} lessons across every chapter are done. Revisit anything from Schedule, or step back into a module to drill it further.`,
    actions: '<button class="ds-btn ds-btn-primary" data-action="openSchedule">Go to Schedule</button>',
    ledger,
  });
}

function dashboardHtml(state, MODULES, revealedKeys = new Set()) {
  let lastGroupKey = null;
  const cards = MODULES.map((m, i) => {
    // One divider per distinct (heading, subheading) pair -- every module
    // that starts a new pair gets its own line, always showing both the
    // heading (right) and the subheading (left); modules with no
    // subheading of their own repeat the heading there instead, rather
    // than leaving that side blank. Heading on the right, subheading on
    // the left is a two-child flex row relying on RTL + space-between
    // (the first DOM child lands at the inline-start, the right edge in
    // RTL) rather than separate left/right markup.
    const groupKey = `${m.heading || ''}|${m.subheading || ''}`;
    const groupChanged = groupKey !== lastGroupKey;
    lastGroupKey = groupKey;
    let chapterHtml = '';
    if (groupChanged && m.heading) {
      const subText = m.subheading || m.heading;
      chapterHtml = `<div class="home-chapter-heading" lang="ar" dir="rtl"><span class="home-chapter-heading-main">${esc(m.heading)}</span><span class="home-chapter-subheading">${esc(subText)}</span></div>`;
    }

    const done = completedCount(m.id, state.completed);
    const unlocked = isModuleUnlocked(m.id, state.completed, state.unlockedModules, state.forceUnlockAll);
    const cardKey = `dash_card_${m.id}`;
    // Row 1 (however many cards that turns out to be -- see js/main.js's
    // cascadeGrid/setupScrollObserver) is revealed on arrival rather than
    // gated behind the scroll trigger like every row after it; which cards
    // land in row 1 is a real-layout question, not something this string
    // render can know (auto-fit column count depends on window width, and
    // courses vary in how many modules share a first heading).
    // A locked module opens a confirmation prompt instead of just sitting
    // disabled, matching locked course/path cards without writing progress.
    const clickAttrs = unlocked
      ? `data-action="openModule" data-module-id="${escAttr(m.id)}"`
      : `data-action="openUnlockPrompt" data-target-type="module" data-target-id="${escAttr(m.id)}"`;
    return `${chapterHtml}
      <button class="${revealCls(cardKey, 'chapter-card', revealedKeys)}" data-reveal-key="${cardKey}" ${clickAttrs}>
        <div class="chapter-card-top">
          <span class="chapter-card-kicker">${unlocked ? `MODULE ${String(i + 1).padStart(2, '0')}` : icon('lock', 12, 2)}</span>
          <span class="chapter-card-arabic" lang="ar" dir="rtl">${esc(m.heading || '')}</span>
        </div>
        <h3 class="chapter-card-title" lang="ar" dir="rtl">${esc(m.title)}</h3>
        <p class="chapter-card-body">${escBidi(m.blurb)}</p>
        <div class="chapter-card-footer">
          <span class="chapter-card-track"><span class="chapter-card-fill" style="width:${m.lessons.length ? Math.round((done / m.lessons.length) * 100) : 0}%"></span></span>
          <span class="chapter-card-meta">${unlocked ? `${done} of ${m.lessons.length}` : 'Unlock module'}</span>
        </div>
      </button>`;
  }).join('');

  return `
    <div class="dashboard-page">
      ${homeHeroHtml(state, MODULES)}
      ${separatorHtml()}
      <section class="home-chapters">
        <h2>Chapters</h2>
        <div class="chapter-grid">${cards}</div>
      </section>
      <section class="home-badges-teaser">
        <div class="home-badges-teaser-head">
          <h2>Badges</h2>
          <button class="text-link-btn" data-action="openAchievements">View all achievements →</button>
        </div>
        ${state.badges.length ? `
        <div class="badges-row">
          ${state.badges.slice(-12).map((id) => `<span class="tag tag-outline badge-tag">${icon('award', 13, 2)}${esc(BADGE_DEFS[id].name)}</span>`).join('')}
        </div>` : '<p class="home-badges-empty">Earn your first badge by completing a lesson.</p>'}
      </section>
    </div>`;
}

// --- Module (lesson grid) ------------------------------------------------

function modulePageHtml(state, MODULES) {
  const mod = MODULES.find((m) => m.id === state.moduleId);
  if (!mod) return dashboardHtml(state, MODULES);

  const done = completedCount(mod.id, state.completed);
  const pct = mod.lessons.length ? Math.round((done / mod.lessons.length) * 100) : 0;
  const bankPool = getBankPool(mod.id, state.completed, state.forceUnlockAll);

  const rows = mod.lessons.map((lesson, i) => {
    const unlocked = isLessonUnlocked(mod.id, lesson.id, state.completed, state.unlockedModules, state.forceUnlockAll);
    const complete = isLessonComplete(mod.id, lesson.id, state.completed);
    // Mastered: this lesson's Mastery test (mixed تركيب+mcq, launched from
    // the "Start lesson" preview modal -- see lessonPreviewHtml) has been
    // passed at 100%. Display-only here; the row itself doesn't launch
    // Mastery directly, same click as ever (openLessonPreview).
    const masteryEntry = state.masteryV2[`${mod.id}_${lesson.id}`];
    const mastered = complete && masteryEntry && masteryEntry.passed;
    const rowCls = ['lesson-row', unlocked ? '' : 'locked', mastered ? 'mastered' : ''].join(' ').trim();
    const indicatorCls = ['lesson-row-indicator', unlocked ? '' : 'locked'].join(' ').trim();
    const indicator = !unlocked
      ? icon('lock', 17, 2)
      : complete
        ? icon('check', 19, 2.4)
        : String(i + 1);
    const tag = !unlocked
      ? `<span class="tag tag-neutral">Locked</span>`
      : mastered
        ? `<span class="tag tag-accent">${icon('award', 11, 2.6)} Mastered</span>`
        : complete
          ? `<span class="tag tag-accent">${icon('check', 11, 2.6)} Done</span>`
          : `<span class="tag tag-accent">Start</span>`;
    return `
    <button class="${rowCls}" data-anim-key="lr${i}" ${unlocked ? `data-action="openLessonPreview" data-lesson-id="${escAttr(lesson.id)}"` : 'disabled'}>
      <div class="${indicatorCls}">${indicator}</div>
      <div class="lesson-row-body">
        <h3>${esc(lesson.title)}</h3>
        <div class="lesson-row-subtitle">${escBidi(lesson.subtitle || '')}</div>
      </div>
      ${tag}
    </button>`;
  }).join('');

  const hero = heroPanelHtml({
    watermark: mod.title,
    badge: mod.heading || null,
    title: `<bdi lang="ar">${esc(mod.title)}</bdi>`,
    body: escBidi(mod.blurb),
    actions: `
      <button class="ds-btn ds-btn-secondary" ${bankPool.length ? 'data-action="openPractice"' : 'disabled'}>${icon('archive', 15, 1.7)} Practice Mode</button>
      ${done > 0 ? `<button class="ds-btn ds-btn-danger" data-action="openResetModulePrompt" data-module-id="${escAttr(mod.id)}">${icon('trash-2', 14, 1.7)} Reset progress</button>` : ''}`,
    ledger: heroLedgerHtml([
      ['Lessons done', `${done} / ${mod.lessons.length}`],
      ['Progress', `${pct}%`],
      ['Cards in pool', `${bankPool.length}`],
    ]),
  });

  return `
    <div class="hero-page">
      ${hero}
      ${separatorHtml()}
      <div class="col-wide">
        ${progressBar(pct)}
        ${state.practiceSetupOpen && state.practiceModuleId === mod.id ? practiceSetupPanelHtml(state, mod) : ''}
        <div class="lesson-list">${rows}</div>
      </div>
    </div>`;
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
    : `<button class="btn btn-primary" data-action="startLesson" data-lesson-id="${escAttr(lesson.id)}">Start lesson</button>`;

  return `
    <div class="modal-backdrop" data-anim-key="modalbd" data-action="closeLessonPreview">
      <div class="modal" data-anim-key="modal:${escAttr(lesson.id)}" role="dialog" aria-modal="true" aria-label="${escAttr(lesson.title)}">
        <div class="card-kicker modal-kicker">LESSON ${idx + 1} &middot; ${esc(mod.title)}</div>
        <h3>${esc(lesson.title)}</h3>
        <p class="modal-sub">${escBidi(lesson.subtitle || '')}</p>
        ${mastered ? `<div class="tag tag-accent" style="margin-top:8px;">${icon('award', 11, 2.6)} Mastered</div>` : ''}
        <div class="modal-buttons">
          <button class="btn btn-ghost" data-action="cancelLessonPreview">Cancel</button>
          ${actionButtons}
        </div>
      </div>
    </div>`;
}

// --- XP toast + badge-unlock modal ---------------------------------------

function toastHtml(state) {
  if (!state.toast) return '';
  return `<div class="xp-toast">${esc(state.toast)}</div>`;
}

function badgeModalHtml(state) {
  if (!state.badgeModal) return '';
  const b = state.badgeModal;
  return `
    <div class="modal-backdrop" data-anim-key="badgemodalbd" style="z-index:60;">
      <div class="modal" data-anim-key="badgemodal:${escAttr(b.id)}" role="dialog" aria-modal="true" aria-label="${escAttr(b.name)}">
        <div class="badge-modal-icon">${icon('award', 36, 1.6)}</div>
        <div class="badge-modal-title">Badge Earned</div>
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
    <div class="modal-backdrop" data-anim-key="forceunlockbd" data-action="closeForceUnlockPrompt">
      <div class="modal force-unlock-modal" data-anim-key="forceunlockmodal" role="dialog" aria-modal="true" aria-label="Turn off course locks">
        <div class="card-kicker modal-kicker">COURSE LOCKS</div>
        <h3>Unlock everything?</h3>
        <p class="modal-sub">This opens every lesson, path group, vocab item, Tarkeeb exercise, and quiz. It does not mark lessons complete, award badges, or change your scores.</p>
        <p class="modal-sub">You can turn course locks back on later and your original progress will still be there.</p>
        <div class="modal-buttons">
          <button class="ds-btn ds-btn-secondary" data-action="cancelForceUnlockAll">Cancel</button>
          <button class="ds-btn ds-btn-primary" data-action="confirmForceUnlockAll">Unlock everything</button>
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
    <div class="modal-backdrop" data-anim-key="resetmodbd" data-action="closeResetModulePrompt">
      <div class="modal" data-anim-key="resetmodmodal" role="dialog" aria-modal="true" aria-label="Reset module progress">
        <div class="card-kicker modal-kicker">RESET PROGRESS</div>
        <h3>${esc(mod.title)}</h3>
        <p class="modal-sub">This will clear all completed lessons, quiz scores, exercise states, and mastery results for this module. Your XP and badges are not affected.</p>
        <p class="modal-sub">This cannot be undone.</p>
        <div class="modal-buttons">
          <button class="ds-btn ds-btn-secondary" data-action="cancelResetModulePrompt">Cancel</button>
          <button class="ds-btn ds-btn-danger" data-action="confirmResetModule" data-module-id="${escAttr(mod.id)}">Reset module</button>
        </div>
      </div>
    </div>`;
}

// --- Advanced-course/path/module unlock prompt -----------------------------
// Opened from a locked launch-screen course card, a locked My Path
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
// the launch screen's course cards, My Path's group cards, and the
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
    <div class="unlock-modal-backdrop" data-anim-key="unlockmodalbd" data-action="closeUnlockPrompt">
      <div class="unlock-modal" data-anim-key="unlockmodal" role="dialog" aria-modal="true" aria-label="Unlock ${escAttr(label.noun)}">
        <span class="unlock-modal-icon">${icon('lock', 18, 1.8)}</span>
        <h3 class="unlock-modal-title">Unlock ${esc(label.name)}?</h3>
        <p class="unlock-modal-sub">${esc(label.message || '')}</p>
        <p class="unlock-modal-sub">This opens only this ${esc(label.noun)}. ${esc(consequence)}</p>
        <div class="unlock-modal-buttons">
          <button class="ds-btn ds-btn-secondary" data-action="closeUnlockPrompt">Cancel</button>
          <button class="ds-btn ds-btn-primary" data-action="confirmIndividualUnlock">Unlock ${esc(label.noun)}</button>
        </div>
      </div>
    </div>`;
  }
  const composition = unlockTestCompositionText(label.pool, label.length);
  const canStart = label.pool.length > 0;
  return `
    <div class="unlock-modal-backdrop" data-anim-key="unlockmodalbd" data-action="closeUnlockPrompt">
      <div class="unlock-modal" data-anim-key="unlockmodal" role="dialog" aria-modal="true" aria-label="Unlock test">
        <span class="unlock-modal-icon">${icon('lock', 18, 1.8)}</span>
        <h3 class="unlock-modal-title">${esc(label.name)} is locked</h3>
        <p class="unlock-modal-sub">${esc(label.message || '')}</p>
        <p class="unlock-modal-sub">Pass a test on ${esc(label.sourceDescription)} to unlock it early. ${esc(composition)}</p>
        <div class="unlock-modal-buttons">
          <button class="ds-btn ds-btn-secondary" data-action="closeUnlockPrompt">Cancel</button>
          ${canStart ? `<button class="ds-btn ds-btn-primary" data-action="startUnlockTest">Start Test</button>` : ''}
        </div>
      </div>
    </div>`;
}

// --- MCQ option rendering (shared) --------------------------------------

// `order` lists the ORIGINAL option indices in the order they should appear.
// data-option always carries the original index, so `selected` and `correct`
// stay meaningful no matter how the options are arranged on screen.
function renderMcqOptions({ options, correct, selected, submitted, actionName, extraData = '', animScope = '', order }) {
  const seq = order && order.length === options.length ? order : options.map((_, i) => i);
  return `
  <div class="mcq-options">
    ${seq.map((orig, pos) => {
      let cls = 'mcq-option';
      // Part of the anim key, so pass/fail feedback animates on the render
      // it appears -- but merely selecting an option does not replay it.
      let feedback = 'n';
      if (selected === orig) cls += ' selected';
      if (submitted) {
        if (orig === correct) {
          cls += ' correct';
          feedback = 'c';
        } else if (orig === selected) {
          cls += ' incorrect';
          feedback = 'x';
        }
      }
      return `<button class="${cls}" data-anim-key="${escAttr(animScope)}o${orig}${feedback}" data-action="${actionName}" data-option="${orig}" ${extraData} ${submitted ? 'disabled' : ''}>
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
function renderExerciseChoices({ options, correct, selected, submitted, actionName, extraData = '', animScope = '', order, prefix = '', revealedKeys = null }) {
  const seq = order && order.length === options.length ? order : options.map((_, i) => i);
  const choicesKey = prefix ? `${prefix}_choices` : '';
  const containerCls = choicesKey ? revealCls(choicesKey, 'exercise-choices', revealedKeys) : 'exercise-choices';
  const containerAttr = choicesKey ? ` data-reveal-key="${choicesKey}"` : '';

  return `
  <div class="${containerCls}"${containerAttr}>
    ${seq.map((orig) => {
      let cls = 'exercise-choice';
      let feedback = 'n';
      if (selected === orig) cls += ' selected';
      if (submitted) {
        if (orig === correct) {
          cls += ' correct';
          feedback = 'c';
        } else if (orig === selected) {
          cls += ' incorrect';
          feedback = 'x';
        }
      }
      return `<button class="${cls}" data-anim-key="${escAttr(animScope)}o${orig}${feedback}" data-action="${actionName}" data-option="${orig}" ${extraData} ${submitted ? 'disabled' : ''}><span>${escBidi(options[orig])}</span></button>`;
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
      const attr = itemKey ? ` data-reveal-key="${itemKey}"` : '';
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
      const attr = itemKey ? ` data-reveal-key="${itemKey}"` : '';
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
      const attr = itemKey ? ` data-reveal-key="${itemKey}"` : '';
      html += `<div class="${cls}"${attr}>${tarkeebDiagramReadOnlyHtml(line.tarkeebDiagram, colorOn)}</div>`;
      return;
    }

    const lineHtml = isolateArabicHtml(line.html);
    const cls = itemKey ? revealCls(itemKey, 'concept-line', revealedKeys, forceReveal) : 'concept-line';
    const attr = itemKey ? ` data-reveal-key="${itemKey}"` : '';

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
function revealCls(key, baseCls, revealedKeys, forceReveal = false) {
  const isRev = forceReveal || (revealedKeys && revealedKeys.has(key));
  return `${baseCls} reveal-on-scroll${isRev ? ' is-revealed' : ''}`;
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
    <div class="${revealCls(sbSumKey, 'card lesson-sidebar-card lesson-summary-card', null, true)}" data-reveal-key="${sbSumKey}">
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
// content-fstu/module-01.js), so unlike conceptBlockHtml's per-concept
// exercise this has no reveal-on-scroll treatment: it's always fully
// visible and interactive as soon as the reading content above it is.
function lessonExerciseCardHtml(state, mod, lesson) {
  const ex = lesson.exercise;
  if (!ex || !ex.items || !ex.items.length) return '';
  const items = ex.items;
  const idx = Math.min(state.lessonExIndex || 0, items.length);

  if (idx >= items.length) {
    return `
      <div class="card exercise-card lesson-exercise-card" data-anim-key="lessonex_done">
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
    <div class="card exercise-card lesson-exercise-card" data-anim-key="lessonex${idx}">
      <div class="card-kicker">EXERCISE · ${idx + 1} OF ${items.length}</div>
      ${ex.instructions ? `<p class="lesson-exercise-instructions">${isolateArabicHtml(ex.instructions)}</p>` : ''}
      <p class="exercise-prompt">${escBidi(item.prompt)}</p>
      ${renderMcqOptions({
        options: item.options,
        correct: item.correct,
        selected: exState.selected,
        submitted,
        actionName: 'selectLessonExerciseOption',
        animScope: `lessonex${idx}`,
        order: state.optionOrder[key],
      })}
      ${feedback}
      ${cornerBracketsHtml()}
    </div>`;
}

function conceptClarificationHtml(text, key, revealedKeys, forceReveal = false) {
  if (!text) return '';
  return `
    <div class="${revealCls(key, 'concept-clarification', revealedKeys, forceReveal)}" data-reveal-key="${key}">
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
    const btnKey = `ex_btn_${mod.id}_${lesson.id}_${i}`;
    tail = `<button class="${revealCls(btnKey, 'btn btn-outline', revealedKeys)}" data-reveal-key="${btnKey}" data-action="revealExercise" data-index="${i}">Show exercise</button>`;
  } else if (concept.exercise) {
    const ex = concept.exercise;
    const submitted = !!exState.submitted;
    const passed = !!exState.passed;
    const wasCorrect = exState.selected === ex.correct;
    const feedback = submitted
      ? `<div class="exercise-feedback ${wasCorrect ? 'correct' : 'incorrect'}">${wasCorrect ? icon('check', 13, 2.4) : ''}${wasCorrect ? 'Correct.' : `Not quite — the answer is ${escBidi(ex.options[ex.correct])}.`}</div>`
      : '';
    tail = `
    <div class="${revealCls(exCardKey, 'card exercise-card', revealedKeys)}" data-reveal-key="${exCardKey}">
      <div class="card-kicker">EXERCISE</div>
      <div class="exercise-content">
        <div class="exercise-left">
          <p class="${revealCls(`${exCardKey}_prompt`, 'exercise-prompt', revealedKeys)}" data-reveal-key="${exCardKey}_prompt">${escBidi(ex.prompt)}</p>
          ${feedback}
          <div class="action-row">
            ${!submitted ? checkButton('checkConceptExercise', exState.selected !== undefined && exState.selected !== null, `data-index="${i}"`) : ''}
            ${passed
              ? `<span class="tag tag-accent" data-anim-key="ex${i}ok">${icon('check', 11, 2.6)} Correct</span>`
              : submitted ? `<button class="btn btn-ghost" data-action="retryConceptExercise" data-index="${i}">Try again</button>` : ''}
          </div>
        </div>
        <div class="exercise-right">
          ${renderExerciseChoices({
            options: ex.options,
            correct: ex.correct,
            selected: exState.selected,
            submitted,
            actionName: 'selectConceptOption',
            extraData: `data-index="${i}"`,
            animScope: `ex${i}`,
            order: state.optionOrder[key],
            prefix: exCardKey,
            revealedKeys,
          })}
        </div>
      </div>
      ${cornerBracketsHtml()}
    </div>`;
  }

  return `
    <div class="concept-block" data-anim-key="c${i}" data-concept-index="${i}">
      <div class="card-kicker">// CONCEPT ${i + 1}</div>
      <h3 class="${revealCls(`${cbKey}_h3`, '', revealedKeys, isFirstConcept)}" data-reveal-key="${cbKey}_h3">${esc(concept.heading)}</h3>
      <div class="concept-body">${lines}</div>
      ${conceptClarificationHtml(concept.clarification, clKey, revealedKeys, isFirstConcept)}
      ${tail}
    </div>`;
}

function lessonHtml(state, MODULES, revealedKeys) {
  const mod = MODULES.find((m) => m.id === state.moduleId);
  const lesson = mod && mod.lessons.find((l) => l.id === state.lessonId);
  if (!mod || !lesson) return modulePageHtml(state, MODULES);

  const shown = conceptsToRender(lesson, state.exStates, mod.id, lesson.id);
  const readyForQuiz = isLessonReadyForQuiz(lesson, state.exStates, mod.id, lesson.id);
  const quizUnlocked = readyForQuiz || state.forceUnlockAll;

  const dots = lesson.concepts
    .map((_, i) => `<div class="concept-dot ${i < shown ? 'filled' : ''}"></div>`)
    .join('');

  const blocks = lesson.concepts
    .slice(0, shown)
    .map((_, i) => conceptBlockHtml(state, mod, lesson, i, revealedKeys))
    .join('');

  const exerciseCardHtml = lessonExerciseCardHtml(state, mod, lesson);

  const qpKey = `qp_${mod.id}_${lesson.id}`;
  const quizPromptBody = readyForQuiz
    ? `You've finished every concept and exercise in ${esc(lesson.title)}. Answer the quiz to complete this lesson.`
    : 'Course locks are off, so you can take the quiz now. Passing it will still complete this lesson normally.';
  const quizPrompt = quizUnlocked ? `
    <div class="${revealCls(qpKey, 'quiz-prompt', revealedKeys)}" data-reveal-key="${qpKey}">
      <div class="kicker">${readyForQuiz ? 'LESSON COMPLETE' : 'QUIZ UNLOCKED'}</div>
      <h3>Move onto the quiz?</h3>
      <p>${quizPromptBody}</p>
      <button class="ds-btn ds-btn-primary" data-action="gotoQuiz">Continue to quiz →</button>
    </div>` : '';

  const objectives = lesson.concepts.map((c, i) => {
    const reached = i < shown;
    const done = reached && isConceptExercisePassed(lesson, i, state.exStates, mod.id, lesson.id);
    const objKey = `sb_obj_item_${mod.id}_${lesson.id}_${i}`;
    const cls = revealCls(objKey, 'lesson-objective' + (done ? ' done' : '') + (reached ? ' clickable' : ''), revealedKeys);
    // Only concepts already reached actually exist in the page below to
    // scroll to -- anything further along in the lesson than the reader
    // has gotten isn't rendered yet, so it stays a plain (unclickable)
    // label of what's coming.
    const action = reached ? ` data-action="scrollToConcept" data-index="${i}"` : '';
    return `
      <div class="${cls}" data-reveal-key="${objKey}"${action}>
        <div class="lesson-objective-dot"></div>
        ${esc(c.heading)}
      </div>`;
  }).join('');

  const sbObjKey = `sb_obj_${mod.id}_${lesson.id}`;
  const sbSumKey = `sb_sum_${mod.id}_${lesson.id}`;
  const sbProgKey = `sb_prog_${mod.id}_${lesson.id}`;
  const summaryCardHtml = lessonSummaryCardHtml(lesson, state, mod, sbSumKey);

  const prog = lessonProgress(lesson, state.exStates, mod.id, lesson.id);
  const lessonIdx = mod.lessons.findIndex((l) => l.id === lesson.id);

  const hero = heroPanelHtml({
    watermark: lesson.title,
    badge: mod.heading || mod.title,
    title: `<bdi lang="ar">${esc(lesson.title)}</bdi>`,
    sourceRef: lesson.sourceRef,
    body: escBidi(lesson.subtitle || ''),
    ledger: heroLedgerHtml([
      ['Lesson', `${lessonIdx + 1} / ${mod.lessons.length}`],
      ['Concepts cleared', `${prog.done} / ${prog.total}`],
    ]),
  });

  return `
    <div class="hero-page">
      ${hero}
      ${separatorHtml()}
      <div class="col col-wide">
        <div class="concept-dots" style="justify-content:center;">${dots}</div>

        <div class="lesson-layout" style="margin-top:28px;">
          <div class="lesson-main">
            ${blocks}
            ${exerciseCardHtml}
            ${quizPrompt}
          </div>
          <div class="lesson-sidebar">
            <div class="${revealCls(sbObjKey, 'card lesson-sidebar-card', revealedKeys, true)}" data-reveal-key="${sbObjKey}">
              <div class="card-kicker">In This Lesson</div>
              <div class="lesson-objectives">${objectives}</div>
            </div>
            ${summaryCardHtml}
            <div class="${revealCls(sbProgKey, 'card lesson-sidebar-card lesson-progress-card', revealedKeys)}" data-reveal-key="${sbProgKey}">
              <div class="card-kicker" style="text-align:center;">Your Progress</div>
              <div class="lesson-progress-value">${prog.done}/${prog.total}</div>
              <div class="lesson-progress-label">concepts cleared</div>
            </div>
          </div>
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

  const confetti = frac === 1
    ? Array.from({ length: 10 }, (_, i) => `<span class="confetti-piece" style="left:${i * 9 + 5}%;animation-delay:${(i * 0.08).toFixed(2)}s;"></span>`).join('')
    : '';

  const footer = passed ? `
      <div class="action-row" style="justify-content:center;">
        <button class="btn btn-secondary" data-action="retakeQuiz">Retake Quiz</button>
        <button class="btn btn-primary" data-action="finishLesson">Finish Lesson →</button>
      </div>` : `
      <div class="action-row" style="justify-content:center;">
        <button class="btn btn-secondary" data-action="backToLesson">Back to Lesson</button>
        <button class="btn btn-primary" data-action="retakeQuiz">Retake Quiz</button>
      </div>`;

  return `
    <div class="quiz-result" data-anim-key="quizresult${state.quizAttempt || 0}">
      ${confetti}
      <div class="card-kicker" style="text-align:center;">Quiz Complete</div>
      <div class="quiz-result-score">${correct} / ${total}</div>
      <div class="page-header-hr"></div>
      <p class="quiz-result-message">${esc(message)}</p>
      <div class="quiz-result-tags">
        ${tier ? `<span class="tag tag-outline">${icon('award', 13, 2)} ${tier}</span>` : ''}
        ${best > 1 ? `<span class="tag tag-neutral">Best streak ${best}</span>` : ''}
      </div>
      ${footer}
      ${cornerBracketsHtml()}
    </div>`;
}

function quizHtml(state, MODULES) {
  const mod = MODULES.find((m) => m.id === state.moduleId);
  const lesson = mod && mod.lessons.find((l) => l.id === state.lessonId);
  if (!mod || !lesson) return modulePageHtml(state, MODULES);

  if (state.quizShowResult) {
    return `<div class="col">${quizResultHtml(state, mod, lesson)}</div>`;
  }

  const qi = state.quizIndex;
  const q = lesson.quiz[qi];
  const revealed = state.quizRevealed;
  const wasCorrect = state.quizSelected === q.correct;

  // Live, session-only streak/XP -- every already-committed answer plus the
  // current one once revealed.
  const settled = state.quizAnswers.map((a, i) => a === lesson.quiz[i].correct);
  if (revealed) settled.push(wasCorrect);
  const liveStreak = (() => {
    let run = 0;
    for (let i = settled.length - 1; i >= 0 && settled[i]; i--) run += 1;
    return run;
  })();
  const liveXp = settled.reduce((sum, ok) => sum + quizCosmeticXp(ok), 0);

  const scope = `q${state.quizAttempt || 0}i${qi}`;
  const feedback = revealed
    ? `<div class="quiz-feedback-line ${wasCorrect ? 'correct' : 'incorrect'}">${wasCorrect ? `Correct — +${quizCosmeticXp(true)} XP` : `Not quite — the answer is ${escBidi(q.options[q.correct])} — +${quizCosmeticXp(false)} XP`}</div>
       ${q.explanation ? `<div class="quiz-feedback-explanation">${escBidi(q.explanation)}</div>` : ''}`
    : '';

  return `
    <div class="col question-col quiz-question-col">
      <div class="quiz-question-single" data-anim-key="${scope}">
        <div class="quiz-gamify-strip">
          <span class="quiz-gamify-stat">${icon('flame', 15, 1.7)} ${liveStreak} streak</span>
          <span class="quiz-gamify-stat">${icon('star', 14, 1.8)} ${liveXp} XP</span>
        </div>
        <div class="card-kicker" style="text-align:center;">Question ${qi + 1} of ${lesson.quiz.length}</div>
        <h2>${escBidi(q.q)}</h2>
        ${renderMcqOptions({ options: q.options, correct: q.correct, selected: state.quizSelected, submitted: revealed, actionName: 'selectQuizOption', animScope: scope, order: state.quizOptionOrder[qi] })}
        ${feedback}
        <button class="btn btn-primary btn-block" data-action="nextQuizQuestion" style="margin-top:16px;" ${revealed ? '' : 'disabled'}>${qi + 1 < lesson.quiz.length ? 'Next Question' : 'See Results'}</button>
        ${cornerBracketsHtml()}
      </div>
    </div>`;
}

// --- Lesson complete ---------------------------------------------------

function lessonCompleteHtml(state, MODULES) {
  const mod = MODULES.find((m) => m.id === state.moduleId);
  const lesson = mod && mod.lessons.find((l) => l.id === state.lessonId);
  if (!mod || !lesson) return modulePageHtml(state, MODULES);

  const score = (state.quizScores[mod.id] || {})[lesson.id];
  const xpTag = score
    ? `<div class="tag tag-accent" style="margin:12px auto 0;font-size:13px;">+${xpForQuiz(score.correct, score.total)} XP</div>`
    : '';

  // A lesson reached via My Path (see enterPathLesson in js/main.js) routes
  // back to the path map instead of the module page it technically belongs
  // to -- the whole point of the path is not needing to think in terms of
  // "which module am I in".
  const buttons = state.pathActive
    ? `<button class="btn btn-primary" data-action="backToPath">Continue on My Path →</button>`
    : `
      <button class="btn btn-ghost" data-action="openModule" data-module-id="${escAttr(mod.id)}">Back to chapters</button>
      <button class="btn btn-primary" data-action="openPractice">Practice this chapter →</button>`;

  return `
    <div class="col complete-col">
      <div class="kicker" style="justify-content:center;display:flex;">LESSON CLEARED</div>
      <h1 style="text-align:center;">أحسنت! — Well done</h1>
      <p class="lede" style="text-align:center;margin:0 auto;">You've completed <strong>${esc(lesson.title)}</strong>. Progress saved to disk.</p>
      <div style="text-align:center;">${xpTag}</div>
      <div class="complete-buttons">${buttons}</div>
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
    return `<div class="${slotCls}" data-anim-key="ts:${escAttr(key)}:${i}:${slotState}" role="button" ${interactive ? 'tabindex="0"' : 'tabindex="-1" aria-disabled="true"'} aria-label="${escAttr(ariaLabel)}" data-action="tarkeebSlotClick" data-slot="${i}" data-key="${escAttr(key)}">${content}</div>`;
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
    <div class="tarkeeb-tray-label">Drag each label onto its slot (tap a filled slot to clear it)</div>
    <div class="tarkeeb-tray" dir="rtl">${tray}</div>
    <div class="action-row">
      ${!submitted ? checkButton('checkTarkeeb', allPlaced, `data-key="${escAttr(key)}"`) : ''}
      ${!submitted ? `<button class="btn btn-ghost" data-action="resetTarkeeb" data-key="${escAttr(key)}">Reset</button>` : ''}
      ${submitted ? `<span class="tag ${passed ? 'tag-accent' : 'tag-outline'}" data-anim-key="tk:${escAttr(key)}:${passed ? 'ok' : 'no'}">${passed ? '✓ Correct' : '✗ Not quite'}</span>` : ''}
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
    <div class="tarkeeb-col" data-anim-key="tc:${escAttr(key)}:${i}">
      <div class="tarkeeb-word">${esc(word)}</div>
      <div class="${slotCls}" data-anim-key="ts:${escAttr(key)}:${i}:${slotState}" role="button" ${interactive ? 'tabindex="0"' : 'tabindex="-1" aria-disabled="true"'} aria-label="${escAttr(ariaLabel)}" data-action="tarkeebSlotClick" data-slot="${i}" data-key="${escAttr(key)}">${chipText ? `<span class="tarkeeb-label-text">${esc(chipText)}</span>` : ''}</div>
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
    <div class="tarkeeb-tray-label">Drag each label onto its word (tap a filled slot to clear it)</div>
    <div class="tarkeeb-tray" dir="rtl">${tray}</div>
    <div class="action-row">
      ${!submitted ? checkButton('checkTarkeeb', allPlaced, `data-key="${escAttr(key)}"`) : ''}
      ${!submitted ? `<button class="btn btn-ghost" data-action="resetTarkeeb" data-key="${escAttr(key)}">Reset</button>` : ''}
      ${submitted ? `<span class="tag ${passed ? 'tag-accent' : 'tag-outline'}" data-anim-key="tk:${escAttr(key)}:${passed ? 'ok' : 'no'}">${passed ? '✓ Correct' : '✗ Not quite'}</span>` : ''}
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
  const tarkeebTranslationsOn = state.practiceTarkeebTranslations == null
    ? state.tarkeebTranslations !== false
    : state.practiceTarkeebTranslations !== false;
  const tarkeebTranslationControl = kind === 'tarkeeb' ? `
    <div class="practice-translation-setting">
      <span>Translation</span>
      <div class="practice-tabs practice-tabs-sub" role="group" aria-label="Tarkeeb translation visibility">
        <button class="practice-tab ${tarkeebTranslationsOn ? 'active' : ''}" data-action="setPracticeTarkeebTranslation" data-show="1">Show</button>
        <button class="practice-tab ${!tarkeebTranslationsOn ? 'active' : ''}" data-action="setPracticeTarkeebTranslation" data-show="0">Hide</button>
      </div>
    </div>` : '';
  const kindLabel = kind === 'tarkeeb' ? 'تركيب' : kind === 'vocab' ? 'Vocab' : 'MCQ';

  const emptyText = state.forceUnlockAll
    ? `No ${kindLabel} practice questions exist in this module.`
    : `Complete a lesson to unlock ${kindLabel} practice questions.`;
  const body = pool.length === 0
    ? `<p class="empty-state">${esc(emptyText)}</p>`
    : `
      <p class="lede">Choose how many to practice.</p>
      ${tarkeebTranslationControl}
      <div class="practice-count-grid">
        ${practiceCountOptions(pool.length).map((o) => `<button class="btn btn-outline practice-count-btn" data-action="startPractice" data-kind="${kind}" data-count="${o.count}">${o.label}</button>`).join('')}
      </div>`;

  return `
    <div class="card practice-popout" data-anim-key="practicepopout">
      <div class="practice-popout-head">
        <div class="practice-tabs">
          <button class="practice-tab ${kind === 'mcq' ? 'active' : ''}" data-action="setPracticeTab" data-kind="mcq">MCQ</button>
          ${hasTarkeeb ? `<button class="practice-tab ${kind === 'tarkeeb' ? 'active' : ''}" data-action="setPracticeTab" data-kind="tarkeeb">تركيب</button>` : ''}
          <button class="practice-tab ${kind === 'vocab' ? 'active' : ''}" data-action="setPracticeTab" data-kind="vocab">Vocab</button>
        </div>
        <button class="practice-popout-close" data-action="closePracticeSetup" aria-label="Close">✕</button>
      </div>
      ${kind === 'vocab' ? vocabTypeTabsHtml(vocabType, 'setPracticeVocabType') : ''}
      ${body}
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
// is the launch screen instead, but that's not a `body` this dispatcher
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
      <div class="col question-col practice-question-col tarkeeb-question-col">
        ${backLink('End session', 'endPracticeSession')}
        <div class="kicker">${sessionKicker(p, mod)}</div>
        <p class="lede">Question ${p.index + 1} of ${p.queue.length} ${p.combo > 1 ? `<span class="tag tag-accent">Combo ×${p.combo}</span>` : ''}</p>
        ${progressBar(progressPct)}
        <div class="card exercise-card" data-anim-key="practice:${p.startedAt}:${p.index}">
          ${body}
          ${cornerBracketsHtml()}
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
  const scope = `prac${p.startedAt}i${p.index}`;
  const feedback = p.submitted
    ? `<div class="quiz-feedback-line ${p.correct ? 'correct' : 'incorrect'}">${p.correct ? 'Correct.' : `Not quite — the answer is ${escBidi(entry.item.options[entry.item.correct])}.`}</div>
       ${entry.item.explanation ? `<div class="quiz-feedback-explanation">${escBidi(entry.item.explanation)}</div>` : ''}`
    : '';

  return `
    <div class="col question-col practice-question-col ${entry.item.kind === 'vocab' ? 'vocab-question-col' : 'mcq-question-col'}">
      ${backLink('End session', 'endPracticeSession')}
      <div class="kicker" style="justify-content:center;display:flex;">${sessionKicker(p, mod)}</div>
      <div class="quiz-question-single" data-anim-key="${scope}">
        <div class="quiz-gamify-strip">
          <span class="quiz-gamify-stat">${icon('flame', 15, 1.7)} ${p.combo || 0} streak</span>
          <span class="quiz-gamify-stat">${icon('star', 14, 1.8)} ${p.xpGained || 0} XP</span>
        </div>
        <div class="card-kicker" style="text-align:center;">Question ${p.index + 1} of ${p.queue.length}</div>
        <h2>${escBidi(entry.item.prompt)}</h2>
        ${renderMcqOptions({ options: entry.item.options, correct: entry.item.correct, selected: p.selected, submitted: p.submitted, actionName: 'selectPracticeOption', animScope: scope, order: state.optionOrder[key] })}
        ${feedback}
        <button class="btn btn-primary btn-block" data-action="nextPracticeQuestion" style="margin-top:16px;" ${p.submitted ? '' : 'disabled'}>${isLast ? 'See Results' : 'Next Question'}</button>
        ${cornerBracketsHtml()}
      </div>
    </div>`;
}

function practiceReviewHtml(state, MODULES) {
  const p = state.practice;
  if (!p) return modulePageHtml(state, MODULES);
  const total = p.log.length;
  const correctCount = p.log.filter((l) => l.correct).length;
  const pct = total ? Math.round((correctCount / total) * 100) : 0;
  const missedCount = total - correctCount;

  const rows = p.log.map((l, i) => `
    <div class="review-row ${l.correct ? 'correct' : 'incorrect'}">
      <span class="review-row-num">${i + 1}</span>
      <span class="review-row-title">${escBidi(l.title)}</span>
      <span class="tag ${l.correct ? 'tag-accent' : 'tag-outline'}">${l.correct ? '✓' : '✗'}</span>
    </div>`).join('');

  // The real total, not recomputed -- xpForPracticeCorrect scales with the
  // combo at the moment each answer landed, so a flat correctCount*rate
  // formula would only be right if the combo never varied.
  const xpGained = p.xpGained || 0;

  // EVERY My Path checkpoint (not just the section test) is now a real
  // pass/fail gate -- 70% for a normal attempt, 80% for the section test,
  // 100% for any node's own Mastery attempt (see pathCheckpointPassRatio in
  // js/state.js). Below that threshold nothing was marked done (and, for a
  // Mastery attempt, nothing was marked mastered either -- see
  // finalizePathSession in js/main.js), so the only sensible next step is
  // trying again, not "continue" (there's nothing new to continue to). A
  // session can also have ended EARLY, the instant passing became
  // mathematically impossible (see maybeEndSessionEarly) -- this screen
  // doesn't need to know which case it is; the log is just shorter.
  const pathNode = p.source === 'path' ? findPathNode(p.nodeId) : null;
  const pathPassRatio = pathNode ? pathCheckpointPassRatio(pathNode, p.mastery) : null;
  const pathPassed = pathNode && total > 0 && correctCount / total >= pathPassRatio;
  const isUnlockTest = p.source === 'unlockTest';
  const unlockPassed = isUnlockTest && total > 0 && correctCount / total >= UNLOCK_TEST_PASS_RATIO;

  // 'module' Practice Mode offers "Practice again" (reopens the per-module
  // popout) and returns to that module's page. 'revision' has no popout or
  // module page to go back to -- it offers to re-run a fresh quiz (the
  // module one or the vocab one, matching whichever this session was --
  // see p.kind) and otherwise returns to the Schedule tab. 'path' always
  // returns straight to the path map (its own next node picks up the
  // "what's next" job the other two sources need a button for) -- except a
  // FAILED checkpoint, which offers a retry instead since nothing new
  // unlocked to continue to. 'unlockTest' offers a retry on a fail, same as
  // a failed path checkpoint; on a pass it just closes (closePracticeReview/
  // exitPracticeSession in js/main.js already knows to land back on the
  // launch screen or dashboard, wherever the target's own card lives).
  // 'masteryV2' never reaches this screen -- it routes straight to
  // masteryV2Complete instead (see nextPracticeQuestion in js/main.js).
  const footer = p.source === 'revision' ? `
      <div class="complete-buttons">
        <button class="btn btn-primary" data-action="${p.kind === 'revisionVocab' ? 'startRevisionVocab' : 'startRevision'}">Revise again</button>
        <button class="btn btn-ghost" data-action="closePracticeReview">Back to Schedule</button>
      </div>` : pathNode && !pathPassed ? `
      <div class="complete-buttons">
        <button class="btn btn-primary" data-action="startPathCheckpoint" data-node-id="${escAttr(pathNode.id)}" ${p.mastery ? 'data-mastery="1"' : ''}>Retry${p.mastery ? ' Mastery' : ''}</button>
        <button class="btn btn-ghost" data-action="closePracticeReview">Back to Path</button>
      </div>` : p.source === 'path' ? `
      <div class="complete-buttons">
        <button class="btn btn-primary" data-action="closePracticeReview">${p.mastery ? 'Back to Path' : 'Continue on My Path →'}</button>
      </div>` : isUnlockTest ? `
      <div class="complete-buttons">
        ${unlockPassed ? '' : `<button class="btn btn-primary" data-action="retryUnlockTest">Retry Test</button>`}
        <button class="btn btn-ghost" data-action="closePracticeReview">${unlockPassed ? 'Continue' : 'Back'}</button>
      </div>` : `
      <div class="complete-buttons">
        <button class="btn btn-primary" data-action="openPractice">Practice again</button>
        <button class="btn btn-ghost" data-action="closePracticeReview">Back to chapters</button>
      </div>`;

  const kicker = pathNode
    ? `${p.mastery ? 'MASTERY · ' : ''}${pathPassed ? 'PASSED' : `NEED ${Math.round(pathPassRatio * 100)}%`}`
    : isUnlockTest
      ? (unlockPassed ? 'UNLOCKED' : `NEED ${Math.round(UNLOCK_TEST_PASS_RATIO * 100)}%`)
      : 'SESSION COMPLETE';

  return `
    <div class="col">
      <div class="kicker" style="justify-content:center;display:flex;">${kicker}</div>
      <h1 style="text-align:center;">${correctCount} / ${total} correct</h1>
      <div style="text-align:center;"><div class="tag tag-accent" style="font-size:13px;">+${xpGained} XP</div></div>
      <div class="stat-row">
        <div class="card stat-card"><div class="stat-kicker">Score</div><div class="stat-value">${pct}%</div></div>
        <div class="card stat-card"><div class="stat-kicker">Missed</div><div class="stat-value">${missedCount}</div></div>
      </div>
      <div class="review-list">${rows}</div>
      ${footer}
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

// Every element below that wants a staggered slide-in carries a
// data-anim-key scoped by the current scheduleTabAttempt (see state.js),
// so switching tabs -- which doesn't change state.view, and so wouldn't
// otherwise retrigger the usual "only animate a key once" entrance system
// (markEntrances in main.js) -- replays the whole cascade every single
// time, not just the first visit to each tab. The inline animation-delay
// is used instead of the nth-child stagger this app uses elsewhere (see
// .lesson-list .lesson-row:nth-child(N) in styles.css) because these
// panels' structure genuinely varies by state (an overdue warning, the
// lesson <select>, the mastery summary etc. each only sometimes render),
// so a fixed sibling-position map isn't reliable here the way it is for a
// lesson list of fixed shape.
function animAttr(key, order = 0) {
  const delay = (order * 0.07).toFixed(2);
  return `data-anim-key="${escAttr(key)}"${order ? ` style="animation-delay:${delay}s"` : ''}`;
}

function scheduleHtml(state, MODULES, revealedKeys) {
  const tab = state.scheduleTab || 'deadline';
  const attempt = state.scheduleTabAttempt || 0;
  const tabs = [
    { id: 'deadline', label: 'Deadline' },
    { id: 'revision', label: 'Revision' },
  ];
  const tabsHtml = tabs.map((t) => `<button class="practice-tab ${tab === t.id ? 'active' : ''}" data-action="setScheduleTab" data-tab="${t.id}">${t.label}</button>`).join('');

  const panel = tab === 'revision'
    ? scheduleRevisionHtml(state, MODULES, revealedKeys, attempt)
    : scheduleDeadlineHtml(state, MODULES, revealedKeys, attempt);

  const hero = heroPanelHtml({
    watermark: 'الجدول',
    badge: 'الجدول الزمني',
    title: 'Study Planner',
    body: 'Plan a deadline, or quiz yourself on a completed module or your vocab to keep it fresh.',
    ledger: heroLedgerHtml([
      ['Lessons cleared', `${totalLessonsCleared(state.completed)} / ${totalLessons()}`],
      ['Streak', `${state.streak || 1}d`],
      ['Deadline', esc(state.scheduleDeadline[state.courseId] || 'Not set')],
    ]),
  });

  return `
    <div class="hero-page">
      ${hero}
      ${separatorHtml()}
      <div class="col schedule-page">
        <div class="practice-tabs">${tabsHtml}</div>
        ${panel}
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

// The one deliberately-different reveal on this page: rather than the
// app's usual halfway-down-the-container trigger (see handleScrollReveal
// in main.js), this box waits until it's ~75% of the way down the visible
// container before sliding in -- reached via data-reveal-line, which
// handleScrollReveal reads per-element instead of assuming 0.5. The card
// itself is the one reveal-on-scroll target; its rows aren't independently
// scroll-gated at all -- they cascade in together via a plain CSS
// transition-delay keyed off the card's own .is-revealed (see
// .schedule-upcoming-rows in styles.css, the same technique
// .exercise-choices already uses), so "the box, and each of its
// sub-components" reads as one continuous reveal rather than several
// separate scroll-triggered pops.
function scheduleUpcomingHtml(state, MODULES, revealedKeys, attempt) {
  const upcoming = upcomingLessons(state, MODULES);
  if (!upcoming.length) return '';
  const rows = upcoming.map(({ mod, lesson, unlocked }) => {
    const cls = `schedule-upcoming-row ${unlocked ? 'unlocked' : 'locked'}`;
    const clickAttr = unlocked ? ` data-action="openModule" data-module-id="${escAttr(mod.id)}"` : '';
    return `
      <div class="${cls}"${clickAttr}>
        <span class="schedule-upcoming-icon">${unlocked ? icon('book', 15, 1.6) : icon('lock', 13, 2)}</span>
        <div class="schedule-upcoming-body">
          <div class="schedule-upcoming-title">${esc(lesson.title)}</div>
          <div class="schedule-upcoming-module">${esc(mod.title)}</div>
        </div>
        <span class="tag ${unlocked ? 'tag-accent' : 'tag-neutral'}">${unlocked ? 'Next' : 'Locked'}</span>
      </div>`;
  }).join('');
  const revealKey = `sched${attempt}_upnext`;
  return `
    <div class="${revealCls(revealKey, 'card schedule-upcoming-card', revealedKeys)}" data-reveal-key="${revealKey}" data-reveal-line="0.75" style="margin-top:16px;">
      <div class="card-kicker">UP NEXT</div>
      <div class="schedule-upcoming-rows">${rows}</div>
    </div>`;
}

// 12-hour labels for the reset-hour <select> below -- e.g. 4 -> "4:00 AM",
// 16 -> "4:00 PM". state.dailyResetHour itself stays a plain 0-23 int
// (that's what todayISO/main.js/persistence.js all consume); this is
// display-only.
function formatResetHour(h) {
  const period = h < 12 ? 'AM' : 'PM';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:00 ${period}`;
}

function scheduleDeadlineHtml(state, MODULES, revealedKeys, attempt) {
  const total = totalLessons();
  const cleared = totalLessonsCleared(state.completed);
  const remaining = Math.max(0, total - cleared);
  const resetHour = state.dailyResetHour || 0;

  // How many lessons were finished today specifically -- state.completed's
  // per-lesson value is already the ISO completion date (see main.js's
  // markLessonComplete). Scoped to this course's own modules only (state.
  // completed is a flat dict shared by every course, keyed by moduleId --
  // see COURSES' comment in content/index.js), so a lesson finished today in
  // a different course doesn't count toward this course's target.
  const deadline = state.scheduleDeadline[state.courseId];
  let completedToday = 0;
  MODULES.forEach((m) => {
    Object.values(state.completed[m.id] || {}).forEach((v) => { if (v === todayISO(resetHour)) completedToday += 1; });
  });

  // App-wide (not per-course, unlike the deadline below) -- it's also what
  // the streak's day boundary uses (see bootProgress in js/persistence.js),
  // so it lives at the top of the panel rather than folded into the
  // per-course deadline fields further down.
  const resetHourOptions = Array.from({ length: 24 }, (_, h) => `<option value="${h}" ${h === resetHour ? 'selected' : ''}>${formatResetHour(h)}</option>`).join('');
  const resetHourInput = `
    <div class="schedule-field" ${animAttr(`sched${attempt}_reset`, 0)}>
      <label for="schedule-reset-hour-input">Daily reset time</label>
      <select id="schedule-reset-hour-input" class="schedule-input" data-action="setDailyResetHour">${resetHourOptions}</select>
      <p class="lede" style="font-size:12.5px;margin-top:6px;">When a new day starts, for your streak and today's target below — study past midnight without it counting as tomorrow.</p>
    </div>`;

  const dateInput = `
    <div class="schedule-field" ${animAttr(`sched${attempt}_date`, 1)}>
      <label for="schedule-deadline-input">Target completion date</label>
      <input id="schedule-deadline-input" type="date" class="schedule-input" value="${escAttr(deadline || '')}" min="${todayISO(resetHour)}" data-action="setScheduleDeadline" />
    </div>`;
  const upcoming = scheduleUpcomingHtml(state, MODULES, revealedKeys, attempt);

  if (remaining === 0) {
    return `<div class="schedule-panel" ${animAttr(`sched${attempt}_panel`)}>${resetHourInput}${dateInput}<p class="lede" style="margin-top:16px;">You've completed every lesson in the course — nothing left to schedule.</p></div>`;
  }
  if (!deadline) {
    return `<div class="schedule-panel" ${animAttr(`sched${attempt}_panel`)}>${resetHourInput}${dateInput}${upcoming}<p class="empty-state">Pick a date to see how many lessons a day that works out to.</p></div>`;
  }

  const today = new Date(`${todayISO(resetHour)}T00:00:00`);
  const deadlineDate = new Date(`${deadline}T00:00:00`);
  const diffDays = Math.round((deadlineDate - today) / 86400000);
  const overdue = diffDays < 0;
  const dailyTarget = Math.ceil(remaining / Math.max(1, diffDays));
  const todayDone = Math.min(completedToday, dailyTarget);
  const todayPct = dailyTarget ? Math.round((todayDone / dailyTarget) * 100) : 100;

  return `
    <div class="schedule-panel" ${animAttr(`sched${attempt}_panel`)}>
      ${resetHourInput}
      ${dateInput}
      ${overdue ? `<p class="lede" style="margin-top:14px;color:var(--brick);" ${animAttr(`sched${attempt}_overdue`, 2)}>Your deadline was ${Math.abs(diffDays)} day${Math.abs(diffDays) === 1 ? '' : 's'} ago, with ${remaining} lesson${remaining === 1 ? '' : 's'} still left — catch up as soon as you can.</p>` : ''}
      <div class="stat-row" style="margin-top:20px;" ${animAttr(`sched${attempt}_stats`, 2)}>
        <div class="card stat-card"><div class="stat-kicker">Lessons left</div><div class="stat-value">${remaining}</div></div>
        <div class="card stat-card"><div class="stat-kicker">${overdue ? 'Days overdue' : 'Days left'}</div><div class="stat-value">${Math.abs(diffDays)}</div></div>
        <div class="card stat-card"><div class="stat-kicker">Today's target</div><div class="stat-value">${dailyTarget}</div></div>
      </div>
      <div class="card" style="margin-top:16px;" ${animAttr(`sched${attempt}_checklist`, 3)}>
        <div class="card-kicker">TODAY'S CHECKLIST</div>
        <p class="lede">${todayDone} / ${dailyTarget} lesson${dailyTarget === 1 ? '' : 's'} completed today</p>
        ${progressBar(todayPct)}
        <p class="lede" style="font-size:12.5px;margin-top:10px;">Recalculated every time you check — fall behind or get ahead and tomorrow's target just adjusts, no fixed plan to fall out of sync with.</p>
      </div>
      ${upcoming}
    </div>`;
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

  // Omitted entirely for a vocab-less course (annahw, sarf-advanced --
  // see courseHasVocab's own comment) rather than ever showing a
  // permanently-empty Vocab tab, same idea as the removed تركيب kind-tab's
  // old hasTarkeeb conditional.
  const kindTabs = hasVocab ? `
    <div class="practice-tabs" ${animAttr(`sched${attempt}_revkind`, 0)}>
      <button class="practice-tab ${kind === 'module' ? 'active' : ''}" data-action="setScheduleRevisionKind" data-kind="module">Module Quiz</button>
      <button class="practice-tab ${kind === 'vocab' ? 'active' : ''}" data-action="setScheduleRevisionKind" data-kind="vocab">Vocab</button>
    </div>` : '';
  const baseOrder = hasVocab ? 1 : 0;

  const body = kind === 'vocab'
    ? scheduleRevisionVocabHtml(state, attempt, baseOrder)
    : scheduleRevisionModuleHtml(state, MODULES, revealedKeys, attempt, baseOrder);

  return `<div class="schedule-panel" ${animAttr(`sched${attempt}_panel`)}>${kindTabs}${body}</div>`;
}

// The per-module mcq+تركيب quiz -- unchanged from its original standalone
// version, just re-homed as one of Revision's two kinds and taking
// `baseOrder` so its own entrance stagger picks up wherever the kind
// toggle above it (if any) left off. Each row is its own reveal-on-scroll
// target (see revealCls) rather than riding the panel's one-shot entrance
// stagger like the tabs around it -- js/main.js's cascadeGrid gives
// .revision-module-list the exact same "row 1 reveals on arrival, the rest
// as they're scrolled to" treatment as the dashboard's chapter cards and My
// Path's group cards.
function scheduleRevisionModuleHtml(state, MODULES, revealedKeys, attempt, baseOrder) {
  const eligible = state.forceUnlockAll ? MODULES : MODULES.filter((m) => isModuleComplete(m.id, state.completed));

  if (!eligible.length) {
    return `<p class="empty-state">${state.forceUnlockAll ? 'No Revision quizzes exist for this course yet.' : 'Complete every lesson in a module to unlock a Revision quiz for it.'}</p>`;
  }

  const mode = state.scheduleRevisionMode === 'random' ? 'random' : 'pick';
  const pickedId = mode === 'pick' && eligible.some((m) => m.id === state.scheduleRevisionModuleId)
    ? state.scheduleRevisionModuleId : null;

  const modeTabs = `
    <div class="practice-tabs" ${animAttr(`sched${attempt}_mode`, baseOrder)}>
      <button class="practice-tab ${mode === 'pick' ? 'active' : ''}" data-action="setScheduleRevisionMode" data-mode="pick">Pick a module</button>
      <button class="practice-tab ${mode === 'random' ? 'active' : ''}" data-action="setScheduleRevisionMode" data-mode="random">Random</button>
    </div>`;

  const moduleRowHtml = (m) => {
    const counts = moduleRevisionCounts(m.id, state.completed, state.forceUnlockAll);
    const compo = counts.tarkeeb ? `${counts.mcq} MCQ + ${counts.tarkeeb} تركيب` : `${counts.mcq} MCQ`;
    const rowKey = `sched${attempt}_revrow_${m.id}`;
    const rowCls = `revision-module-row${pickedId === m.id ? ' selected' : ''}`;
    return `
      <button class="${revealCls(rowKey, rowCls, revealedKeys)}" data-reveal-key="${rowKey}" data-action="setScheduleRevisionModule" data-module-id="${escAttr(m.id)}">
        <span class="revision-module-title">${esc(m.title)}</span>
        <span class="revision-module-meta">${compo}</span>
      </button>`;
  };

  const body = mode === 'pick'
    ? `<div class="revision-module-list" ${animAttr(`sched${attempt}_modulelist`, baseOrder + 1)}>${eligible.map(moduleRowHtml).join('')}</div>`
    : `<p class="lede" style="margin-top:14px;" ${animAttr(`sched${attempt}_random`, baseOrder + 1)}>One of your ${eligible.length} ${state.forceUnlockAll ? 'available' : 'completed'} module${eligible.length === 1 ? '' : 's'} will be picked at random when you start.</p>`;

  const canStart = mode === 'random' || !!pickedId;

  return `
    ${modeTabs}
    ${body}
    <p class="lede" style="margin-top:16px;" ${animAttr(`sched${attempt}_desc`, baseOrder + 2)}>30 questions in random order — 20 MCQ (split between the lesson quiz and book exercises) and 10 تركيب, each capped by what that module actually has.</p>
    <button class="btn btn-primary btn-block" style="margin-top:8px;" data-action="startRevision" ${canStart ? '' : 'disabled'}>Start Revision Quiz</button>`;
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
    return `<p class="empty-state">${state.forceUnlockAll ? 'No Vocab revision questions exist in this course yet.' : 'Complete a lesson to unlock Vocab revision questions.'}</p>`;
  }
  const eligibleCount = pool.filter((e) => {
    const v = state.vocabExposure[e.key];
    return !v || v.count < REVISION_VOCAB_LEARNED_COUNT;
  }).length;

  const direction = state.scheduleRevisionVocabDirection === 'ar-en' ? 'ar-en' : 'en-ar';
  const directionPicker = `
    <p class="lede" style="margin-top:14px;" ${animAttr(`sched${attempt}_vocabnote`, baseOrder)}>A few plural/مصدر questions are mixed in either way.</p>
    <div class="practice-tabs" ${animAttr(`sched${attempt}_vocabdir`, baseOrder)}>
      <button class="practice-tab ${direction === 'en-ar' ? 'active' : ''}" data-action="setScheduleRevisionVocabDirection" data-vocab-type="en-ar">EN → AR</button>
      <button class="practice-tab ${direction === 'ar-en' ? 'active' : ''}" data-action="setScheduleRevisionVocabDirection" data-vocab-type="ar-en">AR → EN</button>
    </div>`;

  return `
    ${directionPicker}
    <p class="lede" style="margin-top:16px;" ${animAttr(`sched${attempt}_vocabdesc`, baseOrder + 1)}>20 questions — mostly words you've already seen (the closer to learned, the more likely to come up), a few brand-new ones, and a handful of plural/مصدر questions. Answer a word correctly 10 times total (path sessions count too) and it stops appearing here.</p>
    ${eligibleCount
      ? `<button class="btn btn-primary btn-block" style="margin-top:8px;" data-action="startRevisionVocab">Start Vocab Revision</button>`
      : `<p class="empty-state">You've learned every unlocked vocab word — nothing left to revise.</p>`}`;
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

// Path-node reveal-on-scroll trigger: this list is a long single-column
// scroll (unlike the dashboard/My Path card grids, which use the default
// half-way line), so each node gets its own PATH_NODE_REVEAL_LINE override
// via data-reveal-line -- an item slides in once it's 65% of the way down
// the container instead of the usual 50%, so nodes reveal later/closer to
// where you're actually reading rather than jumping in a beat before you
// reach them.
const PATH_NODE_REVEAL_LINE = 0.65;

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
    <button class="${rowCls}" data-reveal-key="${nodeKey}" data-reveal-line="${PATH_NODE_REVEAL_LINE}" ${dataAttrs}>
      <div class="path-node-indicator">${indicator}</div>
      <div class="path-node-body">
        <span class="path-node-course-badge" lang="ar" dir="rtl">${esc(courseLabel)}</span>
        <h3>${esc(lesson.title)}</h3>
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
    <button class="${rowCls}" data-reveal-key="${nodeKey}" data-reveal-line="${PATH_NODE_REVEAL_LINE}" ${dataAttrs}>
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
    <div class="modal-backdrop" data-anim-key="pathcheckpointmodalbd" data-action="closePathCheckpointSetup">
      <div class="modal" data-anim-key="pathcheckpointmodal:${escAttr(node.id)}" role="dialog" aria-modal="true" aria-label="${escAttr(label)}">
        <div class="card-kicker modal-kicker" lang="ar" dir="rtl">${esc(label)}</div>
        <h3>${isVocab ? 'Which way do you want to translate?' : done ? 'Redo, or go for Mastery?' : 'Ready to start?'}</h3>
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
    <div class="modal-backdrop" data-anim-key="pathskipaheadmodalbd" data-action="closePathSkipAheadPrompt">
      <div class="modal" data-anim-key="pathskipaheadmodal:${escAttr(node.id)}" role="dialog" aria-modal="true" aria-label="Jump ahead">
        <div class="card-kicker modal-kicker" lang="ar" dir="rtl">${esc(node.label)}</div>
        <h3>Jump ahead to this ${scopeWord}?</h3>
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
    <div class="${rowCls}" data-reveal-key="${nodeKey}" data-reveal-line="${PATH_NODE_REVEAL_LINE}">
      <div class="path-node-indicator">${icon('award', 19, 2)}</div>
      <div class="path-node-body">
        <h3>${esc(node.label)}</h3>
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
    <button class="${rowCls}" data-reveal-key="${nodeKey}" data-reveal-line="${PATH_NODE_REVEAL_LINE}" ${dataAttrs}>
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
        <div class="path-section-heading" data-anim-key="pn${i}">
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
// the path isn't one long line") -- reached via the launch screen's My Path
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
      <div class="${revealCls(cardKey, 'path-group-card locked', revealedKeys)}" data-reveal-key="${cardKey}">
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
  // a locked course card on the launch screen.
  if (trackLocked) {
    const sectionCount = group.sections.length;
    const trackId = trackForGroup(group).id;
    return `
      <button class="${revealCls(cardKey, 'path-group-card locked unlockable', revealedKeys)}" data-reveal-key="${cardKey}" data-action="openUnlockPrompt" data-target-type="track" data-target-id="${escAttr(trackId)}">
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
    <button class="${revealCls(cardKey, rowCls, revealedKeys)}" data-reveal-key="${cardKey}" ${dataAttrs}>
      <div class="path-group-card-top">
        <span class="path-node-indicator">${!unlocked ? icon('lock', 17, 2) : complete ? icon('check', 19, 2.4) : icon('award', 18, 2)}</span>
        ${tag}
      </div>
      <h3 lang="ar" dir="rtl">${esc(group.title)}</h3>
      <p class="path-group-card-body">${sectionCount} section${sectionCount === 1 ? '' : 's'}</p>
      <span class="launch-card-track"><span class="launch-card-fill" style="width:${pct}%"></span></span>
      <span class="launch-card-meta">${doneCount} / ${total}</span>
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
  // path-groups-page: js/main.js's setupScrollObserver keys off this (like
  // .dashboard-page/.chapter-grid) to find each track's own .path-group-grid
  // and run the same scroll-reveal + left-to-right cascade the dashboard's
  // chapter cards use -- see setupCascadeReveal there.
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
    { title: 'Getting Started', cards: [card('first-steps', 0, null, null)] },
    { title: 'Level', cards: LEVEL_TIERS.map((t) => card(t.id, li.level, t.level, null)) },
    { title: 'Streak', cards: STREAK_TIERS.map((t) => card(t.id, streak, t.days, 'days')) },
    { title: 'Perfect Quizzes', cards: PERFECT_QUIZ_TIERS.map((t) => card(t.id, perfectCount, t.count, 'quizzes')) },
    { title: 'Practice Volume', cards: PRACTICE_TIERS.map((t) => card(t.id, state.practiceCorrectTotal || 0, t.count, 'drills')) },
    {
      title: 'Modules Completed',
      cards: [
        ...MODULE_TIERS.map((t) => card(t.id, modulesDone, t.count, 'modules')),
        card(MODULES_ALL_BADGE.id, modulesDone, totalModulesAllCourses(), 'modules'),
      ],
    },
    {
      title: 'Lessons Cleared',
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
      <span class="settings-toggle-pill">${tarkeebTranslationsOn ? 'Shown' : 'Hidden'}</span>
    </button>`;

  const tarkeebLabelColorToggle = `
    <button class="settings-toggle-row ${tarkeebLabelsBlueOn ? 'is-selected' : ''}" role="checkbox" aria-checked="${tarkeebLabelsBlueOn}" data-action="toggleTarkeebLabelsBlue">
      <span class="settings-toggle-copy">
        <span class="settings-toggle-title">Colour Tarkeeb labels</span>
        <span class="settings-toggle-sub">Introductory Nahw's diagram exercises show blue for primary sentence roles (فعل، فاعل، مبتدأ، خبر...) and green for secondary ones (نعت، مضاف، معطوف...); boxes and slots pick up the colour too. Advanced Nahw's labels turn blue.</span>
      </span>
      <span class="settings-toggle-pill">${tarkeebLabelsBlueOn ? 'Coloured' : 'Default'}</span>
    </button>`;

  const forceUnlockToggle = `
    <button class="settings-toggle-row settings-toggle-warning ${courseLocksOn ? 'is-selected' : ''}" role="checkbox" aria-checked="${courseLocksOn}" data-action="toggleCourseLocks">
      <span class="settings-toggle-copy">
        <span class="settings-toggle-title">Course locks</span>
        <span class="settings-toggle-sub">${courseLocksOn
          ? 'Lessons, modules, paths, vocab, Tarkeeb exercises, and quizzes unlock through normal progress.'
          : 'Everything is open by default. Turn this on if you want the course to unlock step by step.'}</span>
      </span>
      <span class="settings-toggle-pill">${courseLocksOn ? 'Locked' : 'Unlocked'}</span>
    </button>`;

  return `
    <div class="settings-page">
      <div class="settings-col">
        <span class="settings-kicker">Preferences</span>
        <h1 class="settings-title">The page, set to your hand</h1>
        <p class="settings-lede">Everything here changes only how the text is set. Nothing changes what is taught.</p>

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
        <p class="settings-group-sub">Independent of the paper -- any accent pairs with any ground.</p>
        <div class="accent-grid" role="radiogroup" aria-label="Accent colour">${accentChips}</div>

        <div class="lesson-size-control">
          <div class="lesson-size-head">
            <label class="lesson-size-label" for="lesson-text-scale">Lesson text size</label>
            <output class="lesson-size-value" for="lesson-text-scale" data-lesson-text-scale-value>${lessonTextScale}%</output>
          </div>
          <input id="lesson-text-scale" class="lesson-size-slider" type="range" min="85" max="130" step="5" value="${lessonTextScale}" data-action="setLessonTextScale" aria-label="Lesson text size">
          <div class="lesson-size-ticks" aria-hidden="true">
            <span>Small</span>
            <span>Default</span>
            <span>Large</span>
          </div>
          <div class="lesson-size-preview">
            <span class="settings-kicker">Lesson Preview</span>
            <p>A governing word changes the end of the word after it. Notice the ending, then read the sentence again.</p>
          </div>
        </div>

        <div class="lesson-size-control">
          <div class="lesson-size-head">
            <label class="lesson-size-label" for="lit-text-scale">Reading text size</label>
            <output class="lesson-size-value" for="lit-text-scale" data-lit-text-scale-value>${litTextScale}%</output>
          </div>
          <input id="lit-text-scale" class="lesson-size-slider" type="range" min="${LIT_TEXT_SCALE_MIN}" max="${LIT_TEXT_SCALE_MAX}" step="5" value="${litTextScale}" data-action="setLitTextScale" aria-label="Reading text size">
          <div class="lesson-size-ticks" aria-hidden="true">
            <span>Small</span>
            <span>Default</span>
            <span>Large</span>
          </div>
          <div class="lesson-size-preview">
            <span class="settings-kicker">Library Preview</span>
            <p class="lit-size-preview-line" lang="ar" dir="rtl">أَنَامُ مُبَكِّراً فِي اللَّيْلِ وَأَقُومُ مُبَكِّراً فِي الصَّبَاحِ</p>
          </div>
        </div>
        ${forceUnlockToggle}

        <hr class="settings-hr">

        <h2 class="settings-group-title">Arabic typeface</h2>
        <p class="settings-group-sub">Each specimen is set in the face it names.</p>
        <div class="face-list">
          <div class="face-group" role="radiogroup" aria-label="Arabic body face">${faceRows}</div>
          <h3 class="settings-group-title settings-subgroup-title">Arabic headings</h3>
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
            <button class="ds-btn ds-btn-ghost" data-action="resetAppearance">Reset to Manuscript &amp; Gold</button>
          </div>
        </div>
      </aside>
    </div>`;
}

function accountHtml(state) {
  const account = state.account || {};
  const working = account.status === 'working';
  const signedIn = !!account.user;
  const pendingSync = account.pendingSyncAction;
  const message = account.message
    ? `<div class="account-message" role="status">${esc(account.message)}</div>`
    : '';
  const cloud = account.cloudStatus;
  const local = account.localStatus;
  const autoUploadStatus = account.autoUploadStatus || 'idle';
  const autoUploadLabels = {
    idle: account.syncBaseMeta || cloud?.exists === false ? 'Ready' : 'Waiting',
    queued: 'Queued',
    uploading: 'Syncing',
    synced: 'On',
    paused: 'Paused',
    error: 'Needs attention',
  };
  const autoUploadMessage = account.autoUploadMessage
    || (account.syncBaseMeta || cloud?.exists === false
      ? 'Automatic sync will run after lesson, quiz, and practice progress.'
      : 'Use Upload or Download once to merge saves and enable automatic sync on this device.');
  const autoUploadHtml = signedIn ? `
    <div class="account-auto-sync account-auto-sync-${escAttr(autoUploadStatus)}">
      <span>Automatic sync</span>
      <strong>${esc(autoUploadLabels[autoUploadStatus] || autoUploadLabels.idle)}</strong>
      <p>${esc(autoUploadMessage)}</p>
    </div>` : '';
  const statusBlock = (title, status, refreshAction, emptyText) => `
    <div class="account-cloud-status">
      <h2 class="settings-group-title">${title}</h2>
      ${status?.error ? `<p class="settings-group-sub">${esc(status.error)}</p>`
        : status?.exists ? `
          <div class="account-status-grid">
            <span>XP</span><strong>${status.xp}</strong>
            <span>Badges</span><strong>${status.badges}</strong>
            <span>Completed lessons</span><strong>${status.completedLessons}</strong>
            <span>Exercise states</span><strong>${status.exerciseStates}</strong>
            <span>Practice history</span><strong>${status.practiceHistory}</strong>
            <span>Saved at</span><strong>${esc(formatDateTime(status.updatedAt))}</strong>
          </div>`
        : `<p class="settings-group-sub">${emptyText}</p>`}
      <button class="ds-btn ds-btn-ghost" data-action="${refreshAction}" ${working ? 'disabled' : ''}>Refresh status</button>
    </div>`;
  const saveStatusHtml = signedIn ? `
    ${statusBlock('Cloud save status', cloud, 'refreshCloudSaveStatus', 'No cloud save data found yet.')}
    ${statusBlock('This device save status', local, 'refreshLocalSaveStatus', 'No local save data found yet.')}` : '';
  const confirmPanel = pendingSync ? `
    <div class="account-confirm">
      <h2 class="settings-group-title">${pendingSync === 'download' ? 'Merge cloud save data?' : 'Merge this device save data?'}</h2>
      <p class="settings-group-sub">${pendingSync === 'download'
        ? 'This combines the cloud save with this device. Completed lessons, unlocked content, quiz results, practice progress, XP, and streaks are kept from whichever side is ahead.'
        : 'This combines this device with the cloud save. Completed lessons, unlocked content, quiz results, practice progress, XP, and streaks are kept from whichever side is ahead.'}</p>
      <div class="account-actions">
        <button class="ds-btn ds-btn-primary" data-action="confirmAccountSync" ${working ? 'disabled' : ''}>Confirm merge</button>
        <button class="ds-btn ds-btn-ghost" data-action="cancelAccountSync" ${working ? 'disabled' : ''}>Cancel</button>
      </div>
    </div>` : '';

  return `
    <div class="account-page">
      <div class="account-card">
        <span class="settings-kicker">Account</span>
        <h1 class="settings-title">${signedIn ? 'Your account' : 'Sign in'}</h1>
        <p class="settings-lede">${signedIn ? 'Your progress is connected to your account.' : 'Sign in or create an account to sync your progress across devices.'}</p>

        <hr class="settings-hr">

        ${signedIn ? `
          <div class="account-signed-in">
            <span class="settings-group-sub">Current account</span>
            <strong>${esc(account.user.email)}</strong>
          </div>
          <div class="account-actions">
            <button class="ds-btn ds-btn-primary" data-action="requestUploadAccountProgress" ${working ? 'disabled' : ''}>Upload save data</button>
            <button class="ds-btn ds-btn-secondary" data-action="requestDownloadAccountProgress" ${working ? 'disabled' : ''}>Download save data</button>
            <button class="ds-btn ds-btn-ghost" data-action="logoutAccount" ${working ? 'disabled' : ''}>Sign out</button>
          </div>
          ${autoUploadHtml}
          ${saveStatusHtml}
          ${confirmPanel}`
        : `
          <label class="account-label" for="account-email">Email</label>
          <input id="account-email" class="schedule-input account-input" type="email" autocomplete="email">
          <label class="account-label" for="account-password">Password</label>
          <input id="account-password" class="schedule-input account-input" type="password" autocomplete="current-password">
          <div class="account-actions">
            <button class="ds-btn ds-btn-primary" data-action="loginAccount" ${working ? 'disabled' : ''}>Sign in</button>
            <button class="ds-btn ds-btn-secondary" data-action="registerAccount" ${working ? 'disabled' : ''}>Create account</button>
          </div>`}
        ${message}
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
  return `
    <button class="lit-book" data-anim-key="litbook${index}" data-action="openLitBook" data-book-id="${escAttr(book.id)}">
      <span class="lit-book-spine" aria-hidden="true"></span>
      <span class="lit-book-face">
        <span class="lit-book-kicker">${esc(book.volumeLabel || '')}</span>
        <span class="lit-book-title" lang="ar" dir="rtl">${esc(book.title.ar)}</span>
        <span class="lit-book-rule" aria-hidden="true"></span>
        <span class="lit-book-author" lang="ar" dir="rtl">${esc(book.author.ar)}</span>
      </span>
      <span class="lit-book-foot">
        <span class="lit-book-meta">${done} / ${total} chapter${total === 1 ? '' : 's'}</span>
        <span class="lit-book-track"><span class="lit-book-fill" style="width:${pct}%"></span></span>
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
  const hero = heroPanelHtml({
    watermark: 'الأدب',
    badge: 'المكتبة',
    title: 'The Library',
    body: 'Graded readers, read the way a book is read: a paragraph at a time, with the translation a hover away and every word one click from its form. Each chapter ends with the patterns it just used and a set of sentences to build.',
  });
  let lastSeries = null;
  const cards = LIT_BOOKS.map((b, i) => {
    const series = bookSeries(b);
    const seriesKey = series ? series.ar : '';
    const seriesChanged = seriesKey !== lastSeries;
    lastSeries = seriesKey;
    const headingHtml = seriesChanged && series ? litShelfHeadingHtml(series) : '';
    return `${headingHtml}${litBookCardHtml(state, b, i)}`;
  }).join('');
  return `
    <div class="hero-page lit-library-page">
      ${hero}
      ${separatorHtml()}
      <div class="col-wide">
        <div class="lit-shelf">${cards}</div>
      </div>
    </div>`;
}

function litChapterRowHtml(state, book, chapter, index) {
  const unlocked = isChapterUnlocked(book, index, state.litProgress, state.forceUnlockAll);
  const done = isChapterDone(state.litProgress, book.id, chapter.id);
  const rec = chapterRecord(state.litProgress, book.id, chapter.id);
  const started = !done && rec && rec.para > 0;
  // A chapter that sits on one printed page is "p. 9", not "pp. 9" -- Qaṣaṣ
  // runs a chapter per page, so the single-page case is the common one there.
  const pageList = chapter.pages || [];
  const pages = pageList.length > 1
    ? `pp. ${pageList[0]}–${pageList[pageList.length - 1]}`
    : pageList.length === 1 ? `p. ${pageList[0]}` : '';
  const tag = !unlocked
    ? '<span class="tag tag-neutral">Locked</span>'
    : done
      ? `<span class="tag tag-accent">${icon('check', 11, 2.6)} Read</span>`
      : `<span class="tag tag-accent">${started ? 'Resume' : 'Read'}</span>`;
  return `
    <button class="lit-chapter${unlocked ? '' : ' locked'}${done ? ' is-done' : ''}" data-anim-key="litch${index}"
      ${unlocked ? `data-action="openLitChapterPreview" data-book-id="${escAttr(book.id)}" data-chapter-id="${escAttr(chapter.id)}"` : 'disabled'}>
      <span class="lit-chapter-num">${unlocked ? String(chapter.number).padStart(2, '0') : icon('lock', 15, 2)}</span>
      <span class="lit-chapter-body">
        <span class="lit-chapter-title" lang="ar" dir="rtl">${esc(chapter.title.ar)}</span>
        <span class="lit-chapter-en">${escBidi(chapter.title.en)}</span>
        <span class="lit-chapter-blurb">${escBidi(chapter.blurb || '')}</span>
      </span>
      <span class="lit-chapter-side">
        ${pages ? `<span class="lit-chapter-pages">${esc(pages)}</span>` : ''}
        ${tag}
      </span>
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
  const started = !done && rec && rec.para > 0;
  const practiceLabel = done ? 'Practice (drills)' : started ? 'Resume' : 'Practice';

  return `
    <div class="modal-backdrop" data-anim-key="modalbd" data-action="closeLitChapterPreview">
      <div class="modal lit-chapter-modal" data-anim-key="modal:${escAttr(chapter.id)}" role="dialog" aria-modal="true" aria-label="${escAttr(chapter.title.en)}">
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
  const weakCount = unknownLemmas(state.litUnknown, book.id).length;
  return `
    <div class="hero-page lit-book-page">
      <section class="lit-cover">
        <span aria-hidden="true" class="lit-cover-watermark" lang="ar" dir="rtl">${esc(book.title.ar)}</span>
        <div class="lit-cover-inner">
          ${heroBadgeHtml(book.volumeLabel || 'كتاب')}
          <h1 class="lit-cover-title" lang="ar" dir="rtl">${esc(book.title.ar)}</h1>
          <p class="lit-cover-author" lang="ar" dir="rtl">${esc(book.author.ar)}</p>
          <p class="lit-cover-body">${escBidi(book.blurb)}</p>
          ${heroLedgerHtml([
            ['Chapters read', `${done} / ${total}`],
            ['Words to practice', String(weakCount)],
            ['Book', book.title.en],
          ])}
          <div class="action-row">
            <button class="btn btn-secondary" ${weakCount ? `data-action="openLitWordPractice" data-book-id="${escAttr(book.id)}"` : 'disabled'}>${icon('archive', 15, 1.7)} Practice weak words (${weakCount})</button>
          </div>
        </div>
        ${cornerBracketsHtml()}
      </section>
      ${separatorHtml()}
      <div class="col-wide">
        <h2 class="lit-contents-head">Contents</h2>
        <div class="lit-contents">${book.chapters.map((c, i) => litChapterRowHtml(state, book, c, i)).join('')}</div>
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
  return `
    <article class="lit-para${active ? ' is-active' : ''}" data-anim-key="litpara${pi}">
      <div class="lit-para-gutter">
        <span class="lit-para-mark" aria-hidden="true">${pi + 1}</span>
        <button class="lit-para-en${fullOpen ? ' is-active' : ''}" data-action="litToggleFullPara" data-para="${pi}"
          aria-pressed="${fullOpen ? 'true' : 'false'}" title="This paragraph in English">EN</button>
        <button class="lit-para-hover-btn${hoverOn ? ' is-active' : ''}" data-action="toggleLitHoverTranslate"
          aria-pressed="${hoverOn ? 'true' : 'false'}" title="${hoverOn ? 'Hover translation: ON (click to turn off)' : 'Hover translation: OFF (click to turn on)'}">${icon('pointer', 11, 2)}</button>
      </div>
      <p class="lit-para-text" lang="ar" dir="rtl">${para.sentences.map((s) => litSentenceHtml(state, s)).join(' ')}</p>
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
      <section class="lit-checks lit-checks-bare" data-anim-key="litchecks${pi}">
        <button class="btn btn-primary btn-block" data-action="litNextParagraph">${advanceLabel}</button>
      </section>`;
  }

  return `
    <section class="lit-checks" data-anim-key="litchecks${pi}">
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
            animScope: `litc${pi}_${ci}${inEnglish ? 'e' : ''}`,
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
    <section class="lit-drill" data-anim-key="litw${lit.wIndex}">
      <div class="lit-drill-head">
        <span class="card-kicker">${esc(kicker)}</span>
        <span class="lit-drill-count">${lit.wIndex + 1} / ${lit.workshop.length}</span>
      </div>
      <p class="lit-drill-lede">${task}</p>
      ${item.base ? `<p class="lit-drill-base" lang="ar" dir="rtl">${esc(item.base)}</p>` : ''}
      ${item.type !== 'cloze' && item.en ? `<p class="lit-drill-sub">${escBidi(item.en)}</p>` : ''}
      <p class="lit-frame" lang="ar" dir="rtl">${item.pre ? `${esc(item.pre)} ` : ''}${slot}${item.post ? ` ${esc(item.post)}` : ''}</p>
      ${litChipsHtml((item.order || item.options.map((_, i) => i)).map((orig) => ({ surface: item.options[orig], value: orig })), {
        // The word currently in the blank is shown as spent, not as another
        // choice -- offering it twice made the tray read as untouched after
        // an answer was placed. Any OTHER chip still swaps straight in.
        used: new Set(placed === null ? [] : [placed]),
        action: 'litWorkshopChip',
        disabled: submitted,
      })}
      ${submitted ? `
        <div class="quiz-feedback-line ${correct ? 'correct' : 'incorrect'}">${correct ? 'Correct.' : `Not quite — it is ${escBidi(item.options[item.answer])}.`}</div>
        ${rationale ? `<div class="quiz-feedback-explanation">${escBidi(rationale)}</div>` : ''}
        ${!correct && (item.rationales || [])[item.answer] ? `<div class="quiz-feedback-explanation">${escBidi(item.rationales[item.answer])}</div>` : ''}` : ''}
      <div class="action-row">
        ${submitted
          ? `<button class="btn btn-primary" data-action="litWorkshopNext">${isLast ? 'On to building sentences' : 'Next'}</button>`
          : `<button class="btn btn-primary" data-action="litWorkshopCheck" ${placed === null ? 'disabled' : ''}>Check</button>`}
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
    <section class="lit-drill lit-build" data-anim-key="litb${lit.bIndex}">
      <div class="lit-drill-head">
        <span class="card-kicker">Build the sentence</span>
        <span class="lit-drill-count">${lit.bIndex + 1} / ${lit.build.length}</span>
      </div>
      <p class="lit-drill-lede">${escBidi(item.en)}</p>
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
      ${litChipsHtml(item.chips, {
        used: new Set(lit.bSlots.filter((s) => s !== null)),
        selected: lit.bSelected,
        action: 'litBuildChip',
        disabled: submitted,
      })}
      ${submitted ? `
        <div class="quiz-feedback-line ${correct ? 'correct' : 'incorrect'}">${correct ? 'Correct.' : 'Not quite.'}</div>
        ${correct ? '' : `<p class="lit-answer" lang="ar" dir="rtl">${esc(item.ar)}</p>`}
        ${wrongNote ? `<div class="quiz-feedback-explanation">${escBidi(wrongNote)}</div>` : ''}` : ''}
      <div class="action-row">
        ${submitted
          ? `<button class="btn btn-primary" data-action="litBuildNext">${isLast ? 'Finish the chapter' : 'Next sentence'}</button>`
          : `<button class="btn btn-primary" data-action="litBuildCheck" ${filled ? '' : 'disabled'}>Check</button>`}
        ${submitted ? '' : `<button class="btn btn-secondary" data-action="litBuildClear" ${lit.bSlots.some((s) => s !== null) ? '' : 'disabled'}>Clear</button>`}
      </div>
    </section>`;
}

function litCompleteHtml(state, chapter) {
  const lit = state.lit;
  const words = unknownWordsInChapter(chapter, state.litUnknown, lit.bookId);
  const pct = lit.total ? Math.round((lit.correct / lit.total) * 100) : 0;
  return `
    <section class="lit-complete" data-anim-key="litdone${lit.chapterId}">
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
      <div class="action-row">
        <button class="btn btn-primary" data-action="exitLitChapter">Back to the book</button>
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
        <aside class="lit-aside" aria-label="Word notes">
          ${litWordCardHtml(state, chapter)}
          ${litUnknownListHtml(state, chapter)}
        </aside>
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
    <section class="lit-drill lit-build" data-anim-key="litwp${p.index}">
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
    <section class="lit-complete" data-anim-key="litwpdone${p.bookId}">
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
  // Cover screen, ahead of the normal header/main/footer chrome entirely --
  // see launchHtml's own comment for why.
  if (state.launchScreen) return launchHtml(state);
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
  return `${headerHtml(state, MODULES)}<main class="${mainClasses}"><div class="${contentClasses}">${body}</div></main>${footerHtml(state)}${lessonPreviewHtml(state, MODULES)}${litChapterPreviewHtml(state)}${pathCheckpointSetupHtml(state)}${pathSkipAheadPromptHtml(state)}${toastHtml(state)}${badgeModalHtml(state)}${forceUnlockPromptHtml(state)}${unlockPromptHtml(state)}${resetModulePromptHtml(state, MODULES)}`;
}

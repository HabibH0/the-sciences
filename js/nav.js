// --- Navigation model -----------------------------------------------------
// One source of truth for the three questions every screen has to answer:
// which primary section am I in, what is the trail above me, and where does
// "back" go. Before this, each of those lived in its own ad-hoc expression --
// shellTabs computed `onLit`/`onSchedule`/`onAccount` inline, shellBackTarget
// carried a parallel switch, and the module page hard-coded its own crumb
// row -- so a new screen had to be remembered in three places and any two of
// them could (and did) disagree.
//
// Deliberately pure data + lookups: no DOM, no escaping, no markup. Callers
// in js/render.js turn what comes back into HTML (and do their own esc()),
// js/main.js turns it into history entries. That keeps this file safe to
// import from both without a cycle.

import { COURSES, getModule, moduleIndex, courseIdForModule } from '../content/index.js';
import { getLitBook } from '../content-lit/index.js';
import { findPathGroup } from '../content/paths.js';

// --- Primary sections -----------------------------------------------------
// The destinations that own a tab, in the order they appear in both bars.
// `href` exists so the tabs can be real links (see navLinkAttrs) -- it is
// never the thing that performs the navigation, only what the browser needs
// in order to offer "open in new tab" and cmd/ctrl-click.
//
// My Path (view 'pathGroups'/'path') deliberately has NO section here: it is
// currently unreachable from the UI, and adding an entry point is a product
// decision, not a wiring one. Its routes below still resolve, so a learner
// already parked there by persisted state keeps working history, back, and
// refresh -- see PATH_VIEWS.
export const SECTIONS = [
  { id: 'home', label: 'Home', icon: 'home', action: 'openDashboard', href: '#/' },
  { id: 'library', label: 'Library', icon: 'book', action: 'openLibrary', href: '#/library' },
  { id: 'schedule', label: 'Schedule', icon: 'calendar', action: 'openSchedule', href: '#/schedule' },
  { id: 'account', label: 'Account', icon: 'user', action: 'openAccount', href: '#/account' },
];

// Screens that belong to a section without being it -- the child pages whose
// parent tab has to stay lit while you are inside them (req: "if the user is
// inside a child page of a section, the parent navigation item should
// usually remain visibly active").
const LIT_VIEWS = new Set(['library', 'litBook', 'litRead', 'litWordPractice']);
const ACCOUNT_VIEWS = new Set(['account', 'settings', 'learningAids', 'courseProgression', 'achievements']);
const HOME_VIEWS = new Set(['dashboard', 'module', 'lesson', 'quiz', 'lessonComplete']);
export const PATH_VIEWS = new Set(['pathGroups', 'path']);

// A live drill has no screen of its own to look active under, so it borrows
// the section that launched it -- Revision belongs to Schedule, a module's
// Practice Mode and Mastery to Home, a path node to My Path (no tab).
function sessionSectionId(state) {
  const src = state.practice && state.practice.source;
  if (src === 'revision') return 'schedule';
  if (src === 'path') return null;
  if (state.pathActive) return null;
  return 'home';
}

// Which tab is current. Null means "no tab owns this screen" -- an unlock
// test with nowhere to return to, or anything under My Path.
export function sectionIdFor(state) {
  if (state.practice) return sessionSectionId(state);
  if (LIT_VIEWS.has(state.view)) return 'library';
  if (ACCOUNT_VIEWS.has(state.view)) return 'account';
  if (state.view === 'schedule') return 'schedule';
  if (PATH_VIEWS.has(state.view) || state.pathHome) return null;
  if (HOME_VIEWS.has(state.view)) return 'home';
  return null;
}

export function sectionById(id) {
  return SECTIONS.find((s) => s.id === id) || null;
}

// --- Labels ---------------------------------------------------------------

function courseFor(state) {
  return COURSES.find((c) => c.id === state.courseId) || null;
}

function moduleFor(state) {
  return state.moduleId ? getModule(state.moduleId) : null;
}

function lessonFor(state, mod) {
  if (!mod || !state.lessonId) return null;
  return (mod.lessons || []).find((l) => l.id === state.lessonId) || null;
}

// --- Trail ----------------------------------------------------------------
// The hierarchy above the current screen, root first, current page last.
// Every entry but the last is a real destination: `{ label, action, extra }`,
// where `extra` is the data-attribute string that action needs. The last
// entry is `{ label, current: true }`.
//
// Kept short on purpose (req: "keep labels concise", "use breadcrumbs only
// where hierarchy is deep enough to justify them") -- a screen one level
// below its section gets a two-entry trail, which callers render as a plain
// back row rather than a crumb chain.
export function crumbTrail(state) {
  const course = courseFor(state);
  // The root of a course trail is the course itself, not a generic "Home".
  // Home IS that course's module list, so listing both made the first two
  // crumbs two different names for one destination -- which is exactly what
  // a breadcrumb is not supposed to do.
  const courseRoot = { label: course ? course.name : 'Home', action: 'openDashboard' };
  const mod = moduleFor(state);
  const lesson = lessonFor(state, mod);
  const library = { label: 'Library', action: 'openLibrary' };
  const account = { label: 'Account', action: 'openAccount' };
  const modCrumb = mod
    ? { label: mod.title, lang: 'ar', action: 'openModule', extra: { 'module-id': mod.id } }
    : null;

  // A lesson opened from My Path belongs to the path, not to the module it
  // technically sits in -- not having to think in terms of "which module am
  // I in" is the point of the path, and every other affordance on those
  // screens already unwinds that way (see finishLesson/backToPath in
  // js/main.js). So the trail above it is the path's, which is also what
  // makes the back control say so instead of naming a module.
  if (state.pathActive && ['lesson', 'quiz', 'lessonComplete'].includes(state.view)) {
    const group = findPathGroup(state.pathGroupId);
    const tail = state.view === 'quiz'
      ? [
        lesson ? { label: lesson.title, lang: 'ar', action: 'backToLesson' } : null,
        { label: 'Quiz', current: true },
      ]
      : [{ label: lesson ? lesson.title : 'Lesson', lang: lesson ? 'ar' : null, current: true }];
    return [
      { label: 'My Path', action: 'backToPathGroups' },
      group
        ? { label: group.title, lang: 'ar', action: 'backToPath' }
        : { label: 'My Path', action: 'backToPath' },
      ...tail,
    ].filter(Boolean);
  }

  switch (state.view) {
    case 'module':
      return [
        courseRoot,
        { label: mod ? mod.title : `Module ${moduleIndex(state.moduleId) + 1}`, lang: mod ? 'ar' : null, current: true },
      ];
    case 'lesson':
    case 'lessonComplete':
      return [
        courseRoot,
        modCrumb,
        { label: lesson ? lesson.title : 'Lesson', lang: lesson ? 'ar' : null, current: true },
      ].filter(Boolean);
    case 'quiz':
      return [
        courseRoot,
        modCrumb,
        lesson ? { label: lesson.title, lang: 'ar', action: 'backToLesson' } : null,
        { label: 'Quiz', current: true },
      ].filter(Boolean);
    case 'litBook': {
      const book = getLitBook(state.litBookId);
      return [library, { label: book ? book.title.en : 'Book', current: true }];
    }
    case 'litRead':
    case 'litWordPractice': {
      const book = getLitBook(state.litBookId);
      return [
        library,
        book ? { label: book.title.en, action: 'openLitBook', extra: { 'book-id': book.id } } : null,
        { label: state.view === 'litWordPractice' ? 'Weak words' : 'Reading', current: true },
      ].filter(Boolean);
    }
    case 'achievements':
      return [account, { label: 'Achievements', current: true }];
    case 'settings':
      return [account, { label: 'Appearance', current: true }];
    case 'learningAids':
      return [account, { label: 'Learning aids', current: true }];
    case 'courseProgression':
      return [account, { label: 'Course progression', current: true }];
    case 'path': {
      const group = findPathGroup(state.pathGroupId);
      return [
        { label: 'My Path', action: 'backToPathGroups' },
        { label: group ? group.title : 'Group', lang: group ? 'ar' : null, current: true },
      ];
    }
    case 'pathGroups':
      return [{ label: 'My Path', current: true }];
    case 'library':
      return [{ label: 'Library', current: true }];
    case 'schedule':
      return [{ label: 'Schedule', current: true }];
    case 'account':
      return [{ label: 'Account', current: true }];
    default:
      return [{ label: course ? course.name : 'Home', current: true }];
  }
}

// Where the back control on this screen goes, and what it should be labelled.
// Derived from the trail rather than kept as its own switch, so back and
// breadcrumb can never point at different parents.
//
// `crumb` is the old one-line "where you are" string the app-backbar renders;
// `label` is the parent's own name, for the accessible name of a back control
// ("Back to الكلمة" reads better than a bare "Back", and a screen reader user
// gets told the destination rather than just the direction).
export function backTargetFor(state) {
  const trail = crumbTrail(state);
  const parent = [...trail].reverse().find((c) => c && c.action);
  const current = trail[trail.length - 1];
  const crumb = trail
    .slice(0, -1)
    .map((c) => c.label)
    .filter(Boolean)
    .join(' · ') || (current ? current.label : '');
  if (!parent) return null;
  return {
    action: parent.action,
    extra: parent.extra || null,
    label: parent.label,
    crumb,
  };
}

// --- Routes ---------------------------------------------------------------
// A real URL for every screen worth linking to, so a refresh, a bookmark, a
// second tab, and cmd-click all land where they say they will. The app is a
// state machine rather than a router, so these are a projection OF state, not
// the state itself: hashForState writes one on every trackable screen, and
// navFromHash reads one back into the same fields navSnapshot carries.
//
// Transient screens (a live practice/reading session) get no route of their
// own -- they aren't restorable, and pointing a URL at one would promise
// something a reload cannot keep. They resolve to their nearest stable
// parent instead, exactly as boot sanitation already does.

export function hashForState(state) {
  switch (state.view) {
    case 'module':
      return state.moduleId ? `#/module/${encodeURIComponent(state.moduleId)}` : '#/';
    case 'lesson':
    case 'lessonComplete':
      return state.moduleId && state.lessonId
        ? `#/module/${encodeURIComponent(state.moduleId)}/${encodeURIComponent(state.lessonId)}`
        : '#/';
    case 'quiz':
      return state.moduleId && state.lessonId
        ? `#/module/${encodeURIComponent(state.moduleId)}/${encodeURIComponent(state.lessonId)}/quiz`
        : '#/';
    case 'library':
      return '#/library';
    case 'litBook':
    case 'litRead':
    case 'litWordPractice':
      return state.litBookId ? `#/library/${encodeURIComponent(state.litBookId)}` : '#/library';
    case 'schedule':
      return '#/schedule';
    case 'account':
      return '#/account';
    case 'achievements':
      return '#/account/achievements';
    case 'settings':
      return '#/account/appearance';
    case 'learningAids':
      return '#/account/learning-aids';
    case 'courseProgression':
      return '#/account/progression';
    case 'pathGroups':
      return '#/path';
    case 'path':
      return state.pathGroupId ? `#/path/${encodeURIComponent(state.pathGroupId)}` : '#/path';
    default:
      return state.courseId ? `#/course/${encodeURIComponent(state.courseId)}` : '#/';
  }
}

// Parses a hash into the same shape navSnapshot produces, or null if it names
// nothing this app can show. Every id is validated against real content here
// rather than trusted, since a hash is user-typeable: an unknown module or
// book falls back to its section's index instead of rendering an empty
// screen.
export function navFromHash(hash) {
  const raw = String(hash || '').replace(/^#\/?/, '');
  const parts = raw.split('/').filter(Boolean).map(decodeURIComponent);
  if (!parts.length) return { view: 'dashboard' };

  switch (parts[0]) {
    case 'course': {
      const course = COURSES.find((c) => c.id === parts[1]);
      return course ? { view: 'dashboard', courseId: course.id } : { view: 'dashboard' };
    }
    case 'module': {
      const moduleId = parts[1];
      const courseId = moduleId && courseIdForModule(moduleId);
      if (!courseId) return { view: 'dashboard' };
      if (!parts[2]) return { view: 'module', courseId, moduleId };
      if (parts[3] === 'quiz') return { view: 'quiz', courseId, moduleId, lessonId: parts[2] };
      return { view: 'lesson', courseId, moduleId, lessonId: parts[2] };
    }
    case 'library': {
      if (!parts[1]) return { view: 'library', litHome: true };
      return getLitBook(parts[1])
        ? { view: 'litBook', litBookId: parts[1], litHome: true }
        : { view: 'library', litHome: true };
    }
    case 'schedule':
      return { view: 'schedule' };
    case 'account':
      if (parts[1] === 'achievements') return { view: 'achievements' };
      if (parts[1] === 'appearance') return { view: 'settings' };
      if (parts[1] === 'learning-aids') return { view: 'learningAids' };
      if (parts[1] === 'progression') return { view: 'courseProgression' };
      return { view: 'account' };
    case 'path': {
      if (!parts[1]) return { view: 'pathGroups', pathHome: true };
      const group = findPathGroup(parts[1]);
      return group && group.sections && group.sections.length
        ? { view: 'path', pathGroupId: group.id, pathHome: true }
        : { view: 'pathGroups', pathHome: true };
    }
    default:
      return null;
  }
}

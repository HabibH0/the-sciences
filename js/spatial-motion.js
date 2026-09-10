// Spatial transitions for the current course and lesson UI. State commits are
// synchronous; animation never owns navigation, grading or persistence.
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const EASE = 'cubic-bezier(.32,0,.18,1)';
const TIME = { page: 380, card: 340, panel: 260, visual: 220, open: 320, close: 260, progress: 280, expand: 300, collapse: 260 };
const depth = { catalog: 0, dashboard: 1, module: 2, lesson: 3, quiz: 4, lessonComplete: 5, practice: 3 };
const tabs = { catalog: 0, dashboard: 0, module: 0, lesson: 0, quiz: 0, lessonComplete: 0, practice: 0, library: 1, schedule: 2, account: 3 };
let previous = null, active = null, serial = 0;
const animations = new Set();
const disclosures = new Map();
const forwardActions = new Set(['studyNext', 'nextQuizQuestion', 'nextPracticeQuestion', 'gotoQuiz']);
const feedbackActions = new Set(['studyCheck', 'submitLogicAnswer', 'checkLessonQuiz', 'studyCorrect', 'logicCorrect', 'correctLessonQuiz']);
const selectionActions = new Set(['studyChoice', 'logicChoice', 'selectQuizOption']);

function run(el, frames, duration, extra = {}) {
  if (!el || reduced.matches || !duration) return null;
  const animation = el.animate(frames, { duration, easing: EASE, ...extra });
  animations.add(animation);
  animation.finished.catch(() => {}).finally(() => animations.delete(animation));
  return animation;
}

function stopActive() {
  const old = active;
  active = null;
  if (!old) return;
  old.animations.forEach(a => a?.cancel());
  old.layers.forEach(layer => layer.remove());
  old.restore.forEach(restore => restore());
}

export function spatialActionBlocked(action) {
  return !!active && ['page', 'card'].includes(active.kind) && forwardActions.has(action);
}

function relation(from, to) {
  if (from.route === to.route) return to.step < from.step ? -1 : 1;
  const a = tabs[from.view], b = tabs[to.view];
  if (a != null && b != null && a !== b) return b > a ? 1 : -1;
  if (depth[from.view] != null && depth[to.view] != null && depth[from.view] !== depth[to.view]) return depth[to.view] > depth[from.view] ? 1 : -1;
  if (from.moduleIndex !== to.moduleIndex) return to.moduleIndex > from.moduleIndex ? 1 : -1;
  return to.lessonIndex < from.lessonIndex ? -1 : 1;
}

function classify(from, to, action) {
  if (!from) return { kind: 'intro', direction: 1 };
  if (from.route !== to.route) return { kind: 'page', direction: relation(from, to) };
  if (from.notes !== to.notes) return { kind: to.notes ? 'notes-open' : 'notes-close', direction: 1 };
  if (from.step !== to.step) return { kind: 'card', direction: relation(from, to) };
  if (from.panel !== to.panel) return { kind: 'panel', scope: to.exercise ? 'response' : 'body', direction: to.group < from.group ? -1 : to.panelOrder < from.panelOrder ? -1 : 1 };
  if (feedbackActions.has(action)) return { kind: 'panel', scope: 'response', direction: /correct/i.test(action) && !/check|submit/i.test(action) ? -1 : 1 };
  if (from.visual !== to.visual) return { kind: 'visual', direction: 1 };
  if (selectionActions.has(action)) return { kind: 'selection', direction: 1 };
  return null;
}

function region(root, kind, scope) {
  if (kind.startsWith('notes')) return root.querySelector('.mz-notes-modal');
  if (scope === 'response') return root.querySelector('.mz-response');
  if (kind === 'visual') return root.querySelector('.mz-visual .logic-svg, .mz-nahw-example, .mz-sarf-table-content');
  if (kind === 'selection') return root.querySelector('.mz-choice.is-selected');
  if (kind === 'card' || kind === 'panel') return root.querySelector('[data-study-step], .quiz-body');
  return root.querySelector('.main-content');
}

// Retain the actual outgoing surface until its exit completes. Deep-cloning a
// card, rewriting every attribute and re-laying out its copy stalled mobile
// clicks. The real surface also preserves form values and SVG geometry.
function retainSurface(node) {
  if (!node) return null;
  const rect = node.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;
  const borderRadius = getComputedStyle(node).borderRadius;
  let backgroundColor = 'transparent';
  for (let surface = node; surface; surface = surface.parentElement) {
    const background = getComputedStyle(surface).backgroundColor;
    if (background !== 'rgba(0, 0, 0, 0)' && background !== 'transparent') { backgroundColor = background; break; }
  }
  const viewport = node.matches('.main-content') ? node.closest('.main').getBoundingClientRect() : null;
  const scrolls = [node, ...node.querySelectorAll('*')].flatMap(el => el.scrollTop || el.scrollLeft ? [{ el, top: el.scrollTop, left: el.scrollLeft }] : []);
  const layer = document.createElement('div');
  layer.className = 'mz-motion-layer';
  layer.setAttribute('aria-hidden', 'true');
  layer.inert = true;
  Object.assign(layer.style, { left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px` });
  const chain = [];
  for (let ancestor = node.parentElement; ancestor && ancestor !== document.body; ancestor = ancestor.parentElement) chain.unshift(ancestor);
  let parent = layer;
  for (const ancestor of chain) {
    const shell = ancestor.cloneNode(false);
    shell.removeAttribute('id');
    shell.classList.remove('screen-enter', 'screen-enter-back');
    Object.assign(shell.style, { display: 'block', position: 'absolute', inset: '0', width: '100%', height: '100%', minWidth: '0', minHeight: '0', maxWidth: 'none', maxHeight: 'none', margin: '0', padding: '0', border: '0', transform: 'none', animation: 'none', overflow: 'visible', background: 'transparent', boxShadow: 'none' });
    parent.append(shell); parent = shell;
  }
  const copy = node, prefix = `motion-${++serial}-`, ids = new Map();
  for (const el of [copy, ...copy.querySelectorAll('[id]')]) {
    if (el.id) { ids.set(el.id, prefix + el.id); el.id = prefix + el.id; }
  }
  for (const el of copy.querySelectorAll('[autofocus], [data-action]')) { el.removeAttribute('autofocus'); el.removeAttribute('data-action'); }
  for (const el of copy.querySelectorAll('svg [fill], svg [stroke], svg [filter], svg [clip-path], svg [mask], svg [href], svg [style]')) {
    for (const attr of [...el.attributes]) {
      let value = attr.value.replace(/url\(#([^)]+)\)/g, (match, id) => ids.has(id) ? `url(#${ids.get(id)})` : match);
      if (['href', 'xlink:href'].includes(attr.name) && value[0] === '#' && ids.has(value.slice(1))) value = '#' + ids.get(value.slice(1));
      if (value !== attr.value) el.setAttribute(attr.name, value);
    }
  }
  copy.querySelectorAll('script').forEach(el => el.remove());
  Object.assign(copy.style, { position: 'absolute', inset: '0', width: `${rect.width}px`, height: `${rect.height}px`, minWidth: '0', maxWidth: 'none', maxHeight: 'none', margin: '0', transform: 'none', boxSizing: 'border-box' });
  copy.style.backgroundColor = backgroundColor;
  layer.style.borderRadius = borderRadius;
  if (viewport) {
    layer.style.clipPath = `inset(${Math.max(0, viewport.top - rect.top)}px 0 ${Math.max(0, rect.bottom - viewport.bottom)}px)`;
  }
  parent.append(copy);
  document.body.append(layer);
  scrolls.forEach(({ el, top, left }) => { el.scrollTop = top; el.scrollLeft = left; });
  return { layer, copy, rect };
}

function meters(root) {
  return [...root.querySelectorAll('.mz-meter, .mz-hub-meter')].map(el => {
    const fill = el.firstElementChild;
    return { value: Number(el.getAttribute('aria-valuenow')), width: fill?.getBoundingClientRect().width || 0 };
  });
}

export function captureSpatialMotion(root, context, action) {
  let intent = classify(previous, context, action);
  if (intent?.kind === 'selection' && !root.querySelector('.mz-choices')) intent = null;
  const prior = previous;
  previous = context;
  let reversal = null;
  const returning = active && intent && active.kind === intent.kind && active.direction !== intent.direction
    && active.from?.route === context.route
    && (intent.kind === 'page' || intent.kind === 'card' && active.from.step === context.step);
  if (returning && active.incoming && active.distance) {
    const offset = new DOMMatrixReadOnly(getComputedStyle(active.incoming).transform).m41;
    reversal = Math.max(0, Math.min(1, 1 - Math.abs(offset / active.distance)));
  }
  // Settle a replaced region before measuring its authoritative geometry. Back
  // can interrupt a transition; a late finish callback cannot undo the new one.
  stopActive();
  settleDisclosures();
  const snap = { intent, prior, context, reversal, action, meters: meters(root), outgoing: null };
  if (intent?.kind === 'selection') snap.choices = [...root.querySelectorAll('.mz-choice')].map(el => {
    const style = getComputedStyle(el);
    return { key: el.dataset.option, selected: el.classList.contains('is-selected'), backgroundColor: style.backgroundColor, borderColor: style.borderColor, color: style.color };
  });
  if (!intent || reduced.matches) return snap;
  const node = region(root, intent.kind, intent.scope);
  if (!['visual', 'selection', 'intro', 'notes-open'].includes(intent.kind)) snap.outgoing = retainSurface(node);
  const backdrop = root.querySelector('.mz-notes-backdrop');
  if (intent.kind === 'notes-close' && backdrop) snap.backdropColor = getComputedStyle(backdrop).backgroundColor;
  return snap;
}

function own(record, animation) { if (animation) record.animations.push(animation); return animation; }

function inView(el) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < innerHeight;
}

// Choreography follows content roles, not every DOM child. No reading group
// fades or scales, and ordinary edits/saves never replay an entrance.
function choreograph(root, record, intent, action) {
  const groups = [];
  const add = (selector, start, offset = 'translateY(22px)', scope = root) => {
    [...scope.querySelectorAll(selector)].filter(inView).slice(0, 6).forEach((el, i) => groups.push({ el, delay: Math.min(180, start + i * 30), offset }));
  };
  if (['page', 'intro'].includes(intent.kind) && root.querySelector('.mz-hub')) {
    // Related content arrives as one group. The title and its statistics,
    // then the study action, then the outline form a calm reading order.
    add('.mz-hub-heading', 0, 'translateY(12px)');
    add('.mz-hub-resume', 60, 'translateY(16px)');
    add('.mz-hub-section-heading', 90, 'translateY(16px)');
    add('.mz-hub-outline > *, .mz-hub-module-lesson-list > ol > li', 110, 'translateY(18px)');
  } else if (['page', 'intro', 'card', 'panel'].includes(intent.kind)) {
    const scope = intent.scope === 'response' ? record.incoming || root : root;
    if (intent.scope !== 'response') {
      add('.mz-word-card-head, .mz-exercise-prompt', 0, 'translateY(16px)', scope);
      add('.mz-foundation-anchor, .mz-word-source, .mz-word-case-list > section', 40, 'translateY(24px)', scope);
      add('.mz-foundation-explanation, .mz-logic-prose', 80, 'translateY(24px)', scope);
      add('.mz-meaning-visual, .mz-visual', 110, 'translateX(26px)', scope);
    }
    add('.mz-choices > .mz-choice, .mz-fields > .mz-field, .mz-logic-field-group.is-active > .mz-field', 60, 'translateY(18px)', scope);
    add('.mz-feedback > h3, .mz-feedback > p, .mz-answer-comparison > div, .mz-logic-answer-rows > div, .mz-error > *', 25, 'translateY(16px)', scope);
    add('.mz-completed > h1, .mz-completed > p, .mz-result-score, .mz-completed-actions', 20, 'translateY(24px)');
    if (['studyNext', 'nextQuizQuestion'].includes(action)) {
      const mark = root.querySelector('.mz-completed-mark');
      if (inView(mark)) own(record, run(mark, [{ transform: 'translateY(20px) scale(.8)' }, { transform: 'translateY(-3px) scale(1.06)', offset: .7 }, { transform: 'none' }], 380, { delay: 70, fill: 'backwards' }));
    }
  }
  const seen = new Set();
  for (const { el, delay, offset } of groups) {
    if (seen.has(el) || [...seen].some(parent => parent.contains(el))) continue;
    seen.add(el);
    const turning = ['page', 'card', 'panel'].includes(intent.kind);
    // One continuous arrival: groups begin with their parent and travel in
    // the same direction. A small difference in settling time supplies the
    // reading order without a second, delayed movement after the card lands.
    const phase = Math.round(delay / 3);
    const travel = turning ? `translateX(${intent.direction * (6 + phase / 8)}px)`
      : offset.replace(/(-?\d+(?:\.\d+)?)px/g, (_, n) => `${Number(n) / 2}px`);
    own(record, run(el, [{ transform: travel }, { transform: 'none' }], turning ? TIME[intent.kind] + phase : 300, { delay: turning ? 0 : phase, fill: 'backwards' }));
  }
}

export function playSpatialMotion(root, snap) {
  const { intent, context, prior } = snap;
  delete root.dataset.spatialMotion;
  if (!reduced.matches && prior?.route === context.route) {
    [...root.querySelectorAll('.mz-meter, .mz-hub-meter')].forEach((meter, i) => {
      const old = snap.meters[i], fill = meter.firstElementChild;
      if (old && fill && old.value !== Number(meter.getAttribute('aria-valuenow'))) {
        fill.getAnimations().forEach(animation => animation.cancel());
        const width = fill.getBoundingClientRect().width;
        // A transform keeps progress on the compositor instead of laying
        // out the header on every animation frame.
        if (width) run(fill, [{ transform: `scaleX(${old.width / width})` }, { transform: 'scaleX(1)' }], TIME.progress);
      }
    });
  }
  if (!intent) return null;
  root.dataset.spatialMotion = intent.kind;
  if (reduced.matches) { snap.outgoing?.layer.remove(); return intent; }
  const record = { kind: intent.kind, direction: intent.direction, from: prior, animations: [], layers: snap.outgoing ? [snap.outgoing.layer] : [], restore: [] };
  active = record;
  let target = region(root, intent.kind, intent.scope);
  const outgoing = snap.outgoing;
  const finish = () => { if (active === record) stopActive(); };
  if (intent.kind === 'selection') {
    for (const el of root.querySelectorAll('.mz-choice')) {
      const old = snap.choices?.find(choice => choice.key === el.dataset.option);
      if (!old || old.selected === el.classList.contains('is-selected')) continue;
      const current = getComputedStyle(el);
      const { backgroundColor, borderColor, color } = old;
      own(record, run(el, [{ backgroundColor, borderColor, color }, { backgroundColor: current.backgroundColor, borderColor: current.borderColor, color: current.color }], 180));
    }
    own(record, run(target?.querySelector('.mz-choice-letter'), [{ transform: 'translateX(-6px) scale(.82)' }, { transform: 'scale(1.08)', offset: .7 }, { transform: 'none' }], 220));
  } else if (intent.kind === 'intro') {
    choreograph(root, record, intent, snap.action);
  } else if (intent.kind.startsWith('notes')) {
    const closing = intent.kind === 'notes-close';
    target = closing ? outgoing?.copy : target;
    if (!target) { finish(); return intent; }
    if (outgoing) outgoing.layer.classList.add('is-overlay');
    const mobile = matchMedia('(max-width: 700px)').matches;
    const travel = mobile ? 'translateY(70px)' : 'translateX(90px)';
    own(record, run(target, closing ? [{ transform: 'none', opacity: 1 }, { transform: travel, opacity: 0 }] : [{ transform: travel, opacity: 1 }, { transform: 'none', opacity: 1 }], closing ? TIME.close : TIME.open, { fill: 'forwards' }));
    let backdrop = root.querySelector('.mz-notes-backdrop');
    if (closing) {
      backdrop = document.createElement('div');
      backdrop.className = 'mz-motion-backdrop'; backdrop.setAttribute('aria-hidden', 'true'); backdrop.inert = true;
      backdrop.style.backgroundColor = snap.backdropColor;
      document.body.append(backdrop); record.layers.unshift(backdrop);
    }
    own(record, run(backdrop, [{ backgroundColor: closing ? snap.backdropColor : 'transparent' }, { backgroundColor: closing ? 'transparent' : getComputedStyle(backdrop).backgroundColor }], closing ? TIME.close : TIME.open));
  } else if (target) {
    const page = intent.kind === 'page', visual = intent.kind === 'visual';
    // Adjacent full-width surfaces share one edge throughout the movement.
    // Short travel with an outgoing fade was visually muddy on reading cards.
    const distance = visual ? 10 : target.getBoundingClientRect().width;
    const sign = intent.direction;
    const duration = snap.reversal == null ? TIME[intent.kind] || TIME.panel : Math.max(120, TIME[intent.kind] * snap.reversal);
    let responseChildren = null;
    if (intent.scope === 'response') {
      // Keep the real form mounted and focusable. Its children travel within
      // the response column; a second duplicate of the form is unnecessary.
      const element = target, overflow = element.style.overflow;
      element.style.overflow = 'clip';
      record.restore.push(() => { element.style.overflow = overflow; });
      responseChildren = [...target.children].filter(el => el.getBoundingClientRect().height > 0);
    }
    // Clip movement to the viewport. The lesson body already owns its own clip;
    // transform its contents, keeping header, footer and body geometry fixed.
    if (!page && !visual && intent.scope !== 'response' && target.firstElementChild) target = target.firstElementChild;
    record.incoming = target; record.distance = distance;
    const from = visual ? `translateY(${distance}px)` : `translateX(${distance * sign * (snap.reversal ?? 1)}px)`;
    for (const element of responseChildren || [target]) own(record, run(element, [{ transform: from }, { transform: 'none' }], duration));
    if (outgoing) {
      const departure = snap.reversal == null ? 'none' : `translateX(${-distance * sign * (1 - snap.reversal)}px)`;
      // Keep the departing surface offscreen while the last inner group
      // finishes. Otherwise the shorter parent animation would flash it back.
      own(record, run(outgoing.copy, [{ transform: departure }, { transform: `translateX(${-distance * sign}px)` }], duration, { fill: 'forwards' }));
    }
    if (page) {
      const main = root.querySelector('.main');
      const old = main.style.overflowX;
      main.style.overflowX = 'clip';
      record.restore.push(() => { main.style.overflowX = old; });
    }
  }
  if (snap.reversal == null && ['page', 'card', 'panel'].includes(intent.kind)) choreograph(root, record, intent, snap.action);
  if (!record.animations.length) finish();
  else Promise.allSettled(record.animations.map(a => a.finished)).then(finish);
  return intent;
}

export function toggleSpatialDisclosure(details) {
  const previous = disclosures.get(details);
  const open = !(previous ? previous.open : details.open);
  const from = details.getBoundingClientRect().height;
  previous?.animation?.cancel();
  disclosures.delete(details);
  details.style.height = ''; details.style.overflow = '';
  details.dataset.spatialTargetOpen = String(open);
  if (reduced.matches) { details.open = open; delete details.dataset.spatialTargetOpen; return open; }
  details.open = true;
  const style = getComputedStyle(details);
  const to = open ? details.getBoundingClientRect().height : details.querySelector('summary').getBoundingClientRect().height + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
  details.style.overflow = 'hidden';
  const animation = run(details, [{ height: `${from}px` }, { height: `${to}px` }], open ? TIME.expand : TIME.collapse);
  // Height already moves the rows and the following sections together. A
  // second stagger across each row fights that vertical opening gesture.
  const state = { open, animation };
  disclosures.set(details, state);
  animation.finished.then(() => {
    if (disclosures.get(details) !== state) return;
    details.open = open; details.style.height = ''; details.style.overflow = '';
    delete details.dataset.spatialTargetOpen; disclosures.delete(details);
  }).catch(() => {});
  return open;
}

function settleDisclosures() {
  disclosures.forEach(({ open, animation }, details) => {
    animation?.cancel(); details.open = open; details.style.height = ''; details.style.overflow = ''; delete details.dataset.spatialTargetOpen;
  });
  disclosures.clear();
}
function cancelMotion() {
  stopActive();
  animations.forEach(a => a.cancel()); animations.clear();
  settleDisclosures();
}
window.addEventListener('resize', cancelMotion);
reduced.addEventListener('change', cancelMotion);
document.addEventListener('visibilitychange', () => { if (document.hidden) cancelMotion(); });

// Phone-sized lesson pages are a presentation of the existing rendered state.
// They never grade, advance a lesson, or own an answer. main.js retains the
// position and all controls keep their original delegated actions and IDs.
export const MOBILE_LESSON_QUERY = '(max-width: 959px)';
const originals = new WeakMap();
// Repeated measurements of the same rendered screen can reuse its parts.
// A new render, viewport or font configuration gets a fresh pagination.
const layouts = new WeakMap();
const SHELL = '.mz-study, .la-session, .quiz-page';
const BODY = '.mz-study-body, .la-stage-body, .quiz-body';
const FOOT = '.mz-study-foot, .quiz-foot';
const CHECK = '.mz-check-row > .btn-primary, .la-exercise-footer > .btn-primary, .action-row > [data-action="checkTarkeeb"]';

function button(action, text, disabled = false) {
  const node = document.createElement('button');
  node.type = 'button'; node.className = 'btn btn-secondary';
  node.dataset.action = action; node.textContent = text; node.disabled = disabled;
  return node;
}

function shortAction(node) {
  if (!node) return null;
  const clone = node.cloneNode(true);
  const labels = {
    studyNext: 'Continue →', nextQuizQuestion: 'Continue →', nextPracticeQuestion: 'Continue →',
    studyCheck: 'Check answer', checkLessonQuiz: 'Check answer', submitLogicAnswer: 'Check answer',
    literatureCheck: 'Check answer', literatureNext: 'Continue →', literatureRetry: 'Try again',
  };
  clone.setAttribute('aria-label', clone.textContent.trim());
  if (labels[clone.dataset.action]) clone.textContent = labels[clone.dataset.action];
  // Logic answers are already in state; the delegated action submits them.
  if (clone.tagName === 'BUTTON') clone.type = 'button';
  clone.classList.remove('btn-block');
  return clone;
}

function stackTables(body) {
  for (const table of body.querySelectorAll('table')) {
    const rows = [...table.rows], headings = rows.filter(row => row.parentElement.tagName === 'THEAD');
    const labels = headings.flatMap(row => [...row.cells]);
    const list = document.createElement('div');
    list.className = 'screen-table';
    if (table.caption) list.append(table.caption.cloneNode(true));
    for (const row of rows.filter(row => !headings.includes(row))) {
      const entry = document.createElement('dl');
      for (const [index, cell] of [...row.cells].entries()) {
        const pair = document.createElement('div'), term = document.createElement('dt'), value = document.createElement('dd');
        if (labels[index]) term.append(...[...labels[index].childNodes].map(node => node.cloneNode(true)));
        else term.textContent = `Column ${index + 1}`;
        value.append(...[...cell.childNodes].map(node => node.cloneNode(true)));
        pair.append(term, value); entry.append(pair);
      }
      list.append(entry);
    }
    table.replaceWith(list);
  }
}

function stackAnalysis(body) {
  for (const grid of body.querySelectorAll('.tarkeeb-diagram-grid')) {
    const cells = [...grid.querySelectorAll(':scope > .tarkeeb-diagram-cell')];
    const rowLabels = [...grid.querySelectorAll(':scope > .tarkeeb-diagram-row-label')];
    const output = document.createElement('div'); output.className = 'screen-analysis';
    const sentence = document.createElement('p'); sentence.className = 'screen-analysis-source'; sentence.dir = 'rtl';
    for (const cell of cells) sentence.append(...[...cell.childNodes].map(node => node.cloneNode(true)), ' ');
    output.append(sentence);
    for (const slot of [...grid.children].filter(node => !cells.includes(node) && !rowLabels.includes(node))) {
      const [start, end] = slot.style.gridColumn.split('/').map(Number);
      const entry = document.createElement('section'); entry.className = 'screen-analysis-entry';
      const cue = document.createElement('div'); cue.className = 'screen-analysis-cue'; cue.dir = 'rtl';
      for (const cell of cells.slice(start - 1, (end || start + 1) - 1)) cue.append(...[...cell.childNodes].map(node => node.cloneNode(true)), ' ');
      const label = rowLabels.find(node => node.style.gridRow === slot.style.gridRow);
      if (label) { const note = label.cloneNode(true); note.removeAttribute('style'); entry.append(note); }
      entry.append(cue, ...[...slot.childNodes].map(node => node.cloneNode(true))); output.append(entry);
    }
    grid.parentElement.replaceWith(output);
  }
}

function repairIsolates(fragment) {
  // A Range may cut inside a Unicode isolate. Each continued Arabic run needs
  // both boundaries on its own page; otherwise punctuation can reorder again.
  for (const node of fragment.querySelectorAll('[dir="rtl"]')) {
    if (!/[\u2067\u2069]/.test(node.textContent)) continue;
    if (!node.textContent.startsWith('\u2067')) node.prepend('\u2067');
    if (!node.textContent.endsWith('\u2069')) node.append('\u2069');
  }
  return fragment;
}

function splitText(node) {
  if (node.querySelector('input, select, textarea, svg, button, [draggable="true"]')) return [];
  const text = node.textContent;
  const spaces = [...text.matchAll(/\s+/g)].map(match => match.index + match[0].length).filter(offset => offset < text.length);
  if (!spaces.length) return [];
  const offset = spaces.reduce((a, b) => Math.abs(a - text.length / 2) < Math.abs(b - text.length / 2) ? a : b);
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
  let current, consumed = 0;
  while ((current = walker.nextNode())) {
    if (consumed + current.length >= offset) break;
    consumed += current.length;
  }
  if (!current) return [];
  const before = document.createRange(), after = document.createRange();
  before.selectNodeContents(node); before.setEnd(current, offset - consumed);
  after.selectNodeContents(node); after.setStart(current, offset - consumed);
  return [before, after].map(range => {
    const clone = node.cloneNode(false);
    clone.append(range.cloneContents()); repairIsolates(clone);
    if (node.matches('button')) clone.setAttribute('aria-label', node.getAttribute('aria-label') || text.trim());
    return clone;
  });
}

function split(node, allowText = true) {
  if (node.matches('svg, input, select, textarea, img')) return [];
  if (node.matches('p, li, h1, h2, h3, h4, blockquote, button, .la-source, .mz-stimulus, .mz-control-help')) return allowText ? splitText(node) : [];
  const children = [...node.childNodes].filter(child => child.nodeType === 1 || child.textContent.trim());
  if (node.matches('.lesson-visual')) {
    const repeatSelector = innerHeight < 500 ? '.mz-sarf-example-nav' : '.mz-sarf-example-nav, .visual-switcher';
    const navs = children.filter(child => child.nodeType === 1 && child.matches(repeatSelector));
    const content = children.filter(child => !navs.includes(child));
    const parts = content.length > 1 ? content : content[0]?.nodeType === 1 ? split(content[0], allowText) : [];
    if (navs.length && parts.length) return parts.map(child => {
      const clone = node.cloneNode(false);
      clone.append(...navs.map(nav => nav.cloneNode(true)), child.cloneNode(true));
      return clone;
    });
  }
  if (children.length > 1) return children.map((child, index) => {
    const clone = node.cloneNode(false);
    if (node.matches('ol')) clone.start = (node.start || 1) + index;
    clone.append(child.cloneNode(true));
    return clone;
  });
  if (children[0]?.nodeType === 1) return split(children[0], allowText).map(child => {
    const clone = node.cloneNode(false); clone.append(child); return clone;
  });
  return allowText ? splitText(node) : [];
}

function contentWeight(node) {
  return node.textContent.length + node.querySelectorAll('*').length;
}

export function fitMobilePages(root, { index = 0, focusSelector = '', anchor = '' } = {}) {
  const shell = root.querySelector(SHELL), scroller = shell?.closest('.main-content');
  if (!shell || !scroller) return null;
  if (!matchMedia(MOBILE_LESSON_QUERY).matches && !originals.has(shell)) return null;
  const original = originals.get(shell) || shell.cloneNode(true);
  originals.set(shell, original);
  const restore = () => {
    shell.replaceChildren(...[...original.childNodes].map(node => node.cloneNode(true)));
    shell.classList.remove('screen-fit'); scroller.classList.remove('screen-fit-host');
    shell.style.removeProperty('--screen-height');
    shell.style.removeProperty('--screen-body-height');
  };
  restore();
  if (!matchMedia(MOBILE_LESSON_QUERY).matches) return null;
  const body = shell.querySelector(BODY);
  if (!body) return null;

  const oldFoot = shell.querySelector(FOOT);
  const advanceNode = oldFoot?.querySelector('.btn-primary') || body.querySelector('[data-action="nextPracticeQuestion"]');
  const advance = shortAction(advanceNode);
  if (advanceNode && body.contains(advanceNode)) advanceNode.remove();
  const previous = shortAction(oldFoot?.querySelector('[data-action="studyBack"], [data-action="backToLesson"]') || shell.querySelector('.la-back-step'));
  const checkNode = body.querySelector(CHECK), check = shortAction(checkNode);
  checkNode?.remove();
  const hint = body.querySelector('.mz-check-row [data-action="studyHint"], .mz-check-row [data-action="logicHint"], [data-action="literatureHelp"]');
  const help = hint?.cloneNode(true);
  hint?.remove();
  if (shell.querySelector('.mz-study-head [data-action="openStudyNotes"]')) body.querySelectorAll('.mz-check-row [data-action="openStudyNotes"]').forEach(node => node.remove());
  body.querySelectorAll('.mz-check-row:empty, .la-exercise-footer:empty').forEach(node => node.remove());
  // Keep session exit controls available without filling the footer with a
  // second row. Confirmation content is still part of the paginated material.
  const exit = oldFoot?.querySelector('[data-action="endPracticeSession"]');
  const endConfirmation = oldFoot?.querySelector('.practice-end-confirm');
  if (endConfirmation) body.append(endConfirmation.cloneNode(true));
  oldFoot?.remove(); shell.querySelector('.la-back-step')?.remove();
  stackTables(body);
  stackAnalysis(body);
  // Preserve the alignment of the few legacy text diagrams, while removing
  // the source-code indentation that needlessly widens them on a phone.
  for (const code of body.querySelectorAll('pre > code')) {
    const lines = code.textContent.split('\n'), nonempty = lines.filter(line => line.trim());
    const indent = Math.min(...nonempty.map(line => line.match(/^\s*/)[0].length));
    if (Number.isFinite(indent) && indent) code.textContent = lines.map(line => line.slice(indent)).join('\n');
  }

  const head = document.createElement('div'); head.className = 'screen-head';
  for (const child of [...shell.children]) if (child !== body) head.append(child);
  if (help) {
    help.classList.add('screen-hint');
    (head.querySelector('.mz-step-track, .la-session-top') || head).append(help);
  }
  if (exit) head.append(exit.cloneNode(true));
  const nav = document.createElement('footer'); nav.className = 'screen-nav';
  const status = document.createElement('button');
  status.type = 'button'; status.className = 'screen-position'; status.dataset.action = 'mobileFirstPage';
  status.setAttribute('aria-label', 'Return to the start of this step');
  status.textContent = '↺';
  status.title = 'Return to the start of this step';
  nav.append(button('mobilePreviousPage', '← Back'), status, button('mobileNextPage', 'Continue →'));
  shell.prepend(head); shell.append(nav);
  body.classList.add('screen-body'); body.tabIndex = -1;
  shell.classList.add('screen-fit'); scroller.classList.add('screen-fit-host');
  scroller.scrollTop = 0;
  const viewport = window.visualViewport;
  const bottom = Math.min(innerHeight, viewport ? viewport.offsetTop + viewport.height : innerHeight);
  const padding = parseFloat(getComputedStyle(scroller).paddingBottom) || 0;
  shell.style.setProperty('--screen-height', `${Math.max(180, Math.floor(bottom - shell.getBoundingClientRect().top - padding))}px`);
  shell.style.setProperty('--screen-body-height', `${body.clientHeight}px`);
  body.querySelectorAll('textarea').forEach(node => { node.rows = 3; });
  [...body.querySelectorAll('h1, h2, h3, p, li, button, input, select, textarea, svg, .la-source')].forEach((node, i) => { node.dataset.screenAnchor = String(i); });
  const metrics = `${body.clientWidth}:${body.clientHeight}:${document.documentElement.getAttribute('style')}:${JSON.stringify(document.documentElement.dataset)}:${document.fonts.status}`;
  const cached = layouts.get(shell);
  const reuse = cached?.metrics === metrics;
  const queue = reuse ? [] : [...body.children].map(node => node.cloneNode(true));
  const pages = reuse ? cached.pages.map(node => node.cloneNode(true)) : [];
  const makePage = () => { const page = document.createElement('div'); page.className = 'screen-page'; return page; };
  let page = makePage(), count = 0, splits = 0;
  body.replaceChildren(page);
  const fits = (candidate = page) => candidate.scrollHeight <= body.clientHeight
    && candidate.scrollWidth <= body.clientWidth
    && candidate.getBoundingClientRect().bottom <= body.getBoundingClientRect().bottom + 0.5;
  while (queue.length) {
    const block = queue.shift(); page.append(block);
    if (fits()) { count++; continue; }
    block.remove();
    if (count) {
      // Keep a label with its field, and a visual's controls with its example,
      // whenever that unit fits on a fresh page. Ordinary prose and choice
      // groups can use the remaining space on the current page.
      const keepTogether = '.mz-field, .lesson-visual, .mz-visual, .mz-list-entry, .mz-sentence-builder, .mz-venn-editor, dl > div';
      let fitsAlone = false;
      if (block.matches(keepTogether) || block.querySelector(keepTogether)) {
        const placed = [...page.childNodes];
        page.replaceChildren(block); fitsAlone = fits(); block.remove(); page.append(...placed);
      }
      const parts = fitsAlone ? [] : split(block, false);
      if (parts.length > 1 && parts.every(part => contentWeight(part) < contentWeight(block))) {
        queue.unshift(...parts);
        continue;
      }
      pages.push(page); page = makePage(); count = 0;
      body.replaceChildren(page); queue.unshift(block);
    } else {
      const parts = split(block);
      if (!parts.length || parts.some(part => contentWeight(part) >= contentWeight(block)) || ++splits > 1000) {
        // Never conceal an unsplittable control. The verification harness treats
        // this readable fallback as a failure so authored lessons are checked.
        page.append(block);
        const geometry = { body: [body.clientWidth, body.clientHeight], block: [block.scrollWidth, block.scrollHeight], svg: [...block.querySelectorAll('svg')].map(node => [node.getBoundingClientRect().width, node.getBoundingClientRect().height]), limit: shell.style.getPropertyValue('--screen-body-height') };
        restore();
        return { index: 0, count: 1, fits: false, reason: `${block.tagName}.${block.className}`, text: block.textContent.slice(0, 150), geometry };
      }
      queue.unshift(...parts);
    }
  }
  if (count || !pages.length) pages.push(page);
  if (!reuse) layouts.set(shell, { metrics, pages: pages.map(node => node.cloneNode(true)) });
  index = Math.max(0, Math.min(Number.isInteger(index) ? index : 0, pages.length - 1));
  const matchingPage = selector => pages.findIndex(part => part.querySelector(selector));
  if (anchor && !focusSelector) {
    const found = matchingPage(`[data-screen-anchor="${CSS.escape(anchor)}"]`);
    if (found >= 0) index = found;
  }
  if (focusSelector && !pages[index].querySelector(focusSelector)) {
    const found = matchingPage(focusSelector);
    if (found >= 0) index = found;
  }
  body.replaceChildren(pages[index]);
  // A continued visual can contribute several fragments to one page. Its
  // example switcher should appear once on that page, not once per fragment.
  const visualNavs = new Set();
  for (const visualNav of body.querySelectorAll('.mz-sarf-example-nav, .visual-switcher')) {
    const signature = visualNav.outerHTML;
    if (visualNavs.has(signature)) visualNav.remove();
    else visualNavs.add(signature);
  }
  const back = index ? button('mobilePreviousPage', '← Back') : previous || button('mobilePreviousPage', '← Back', true);
  back.className = 'btn btn-secondary'; back.textContent = '← Back';
  const next = index + 1 < pages.length ? button('mobileNextPage', 'Continue →') : check || advance;
  if (next) next.className = 'btn btn-primary';
  body.setAttribute('role', 'region');
  body.setAttribute('aria-label', `Step content, part ${index + 1} of ${pages.length}`);
  status.disabled = index === 0;
  nav.replaceChildren(back, status, next || document.createElement('span'));
  if (!fits(pages[index])) {
    layouts.delete(shell);
    if (reuse) return fitMobilePages(root, { index, focusSelector, anchor });
    restore();
    return { index: 0, count: 1, fits: false, reason: 'Navigation exceeded the reserved space' };
  }
  shell.dataset.screenPage = String(index + 1); shell.dataset.screenPages = String(pages.length);
  return { index, count: pages.length, fits: true, anchor: pages[index].querySelector('[data-screen-anchor]')?.dataset.screenAnchor || '' };
}

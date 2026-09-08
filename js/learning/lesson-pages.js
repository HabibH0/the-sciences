// Viewport pagination is a presentation concern: it never changes lesson
// steps, grading or source content. main.js owns the saved page position.
export const DESKTOP_LESSON_QUERY = '(min-width: 960px) and (min-height: 540px)';
const originals = new WeakMap();

function wrapParts(node, selector, parts) {
  return parts.map(part => {
    const clone = node.cloneNode(true);
    const target = selector ? clone.querySelector(selector) : clone;
    target.replaceChildren(part);
    return clone;
  });
}

// Keep table headings and rule labels with their continued content. Only
// split a paragraph when it cannot fit by itself, preserving inline markup.
function splitBlock(node) {
  if (!node) return [];
  // A diagram's controls and their explanation must remain on one page.
  if (node.querySelector('[data-action]')) return [];
  const table = node.matches('table') ? node : node.matches('.concept-table-wrap, .concept-table-scroll') ? node.querySelector('table') : null;
  if (table) {
    const rows = [...table.querySelectorAll('tbody > tr')];
    if (rows.length > 1) return rows.map(row => {
      const clone = node.cloneNode(true);
      clone.querySelector('tbody').replaceChildren(row.cloneNode(true));
      return clone;
    });
  }
  const box = node.matches('.concept-source-box') ? node.querySelector('.concept-source-box-body') : null;
  if (box) {
    const parts = box.children.length > 1 ? [...box.children].map(n => n.cloneNode(true)) : splitBlock(box.firstElementChild);
    if (parts.length) return wrapParts(node, '.concept-source-box-body', parts);
  }
  if (node.matches('p, li, blockquote') && !node.querySelector('button, input, svg, table')) {
    const text = node.textContent;
    const spaces = [...text.matchAll(/\s+/g)].map(m => m.index + m[0].length).filter(n => n > 0 && n < text.length);
    if (!spaces.length) return [];
    const offset = spaces.reduce((a, b) => Math.abs(b - text.length / 2) < Math.abs(a - text.length / 2) ? b : a);
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
    let current, consumed = 0;
    while ((current = walker.nextNode())) {
      if (consumed + current.length >= offset) break;
      consumed += current.length;
    }
    const before = document.createRange(), after = document.createRange();
    before.selectNodeContents(node); before.setEnd(current, offset - consumed);
    after.selectNodeContents(node); after.setStart(current, offset - consumed);
    return [before, after].map(range => {
      const clone = node.cloneNode(false);
      clone.append(range.cloneContents());
      return clone;
    });
  }
  if (node.matches('div, section, aside, ul, ol, figure, details, blockquote')) {
    const children = [...node.children];
    const labels = children.filter(n => n.matches('h2, h3, h4, summary, .concept-source-box-label, .visual-heading'));
    const content = children.filter(n => !labels.includes(n));
    if (content.length > 1) return content.map((child, index) => {
      const clone = node.cloneNode(false);
      if (node.matches('ol')) clone.start = (node.start || 1) + index;
      clone.append(...labels.map(n => n.cloneNode(true)), child.cloneNode(true));
      return clone;
    });
    if (content.length === 1) return splitBlock(content[0]).map(part => {
      const clone = node.cloneNode(false);
      clone.append(...labels.map(n => n.cloneNode(true)), part);
      return clone;
    });
  }
  return [];
}

function contentBlocks(article) {
  const copy = article.querySelector('.mz-teaching-copy');
  const blocks = [];
  for (const child of copy.children) {
    if (child.matches('.mz-eyebrow, h2')) continue;
    if (child.matches('.mz-prose') && child.children.length) {
      for (const block of child.children) {
        const wrapper = child.cloneNode(false);
        wrapper.append(block.cloneNode(true));
        blocks.push(wrapper);
      }
    } else blocks.push(child.cloneNode(true));
  }
  for (const visual of article.children) {
    if (visual === copy) continue;
    const wrapper = document.createElement('div');
    wrapper.className = 'mz-page-visual';
    wrapper.append(visual.cloneNode(true));
    blocks.push(wrapper);
  }
  return blocks;
}

export function fitLessonPages(root, requestedPage = 0) {
  const study = root.querySelector('.mz-study');
  const body = study?.querySelector('.mz-study-body');
  const article = body?.querySelector(':scope > .mz-teaching');
  if (!article) return null;
  // A resize sees the displayed page; a full application render supplies a
  // fresh article. Restore the original before measuring either case.
  const original = originals.get(body) || article.cloneNode(true);
  originals.set(body, original);
  body.replaceChildren(original.cloneNode(true));
  study.classList.remove('is-paged');
  study.style.removeProperty('--study-height');
  if (!matchMedia(DESKTOP_LESSON_QUERY).matches) return null;

  const scroller = study.closest('.main-content');
  const bottom = parseFloat(getComputedStyle(scroller).paddingBottom) || 0;
  const top = study.getBoundingClientRect().top + scroller.scrollTop;
  study.style.setProperty('--study-height', `${Math.floor(innerHeight - top - bottom)}px`);
  study.classList.add('is-paged');
  scroller.scrollTop = 0;
  const fits = element => Math.max(element.scrollHeight, element.getBoundingClientRect().height) <= body.clientHeight + 1;
  const pages = [];
  if (fits(body.firstElementChild)) pages.push(body.firstElementChild.cloneNode(true));
  else {
    const frame = original.cloneNode(false);
    frame.classList.remove('has-visual');
    const copy = original.querySelector('.mz-teaching-copy').cloneNode(false);
    for (const header of original.querySelector('.mz-teaching-copy').children) {
      if (header.matches('.mz-eyebrow, h2')) copy.append(header.cloneNode(true));
    }
    frame.append(copy);
    const queue = contentBlocks(original);
    let page = frame.cloneNode(true), count = 0, splits = 0;
    body.replaceChildren(page);
    while (queue.length) {
      const block = queue.shift();
      block.classList.add('mz-page-chunk');
      if (!count) {
        page.classList.toggle('mz-page-visual-only', pages.length > 0 && block.matches('.mz-page-visual'));
        page.classList.toggle('mz-page-reference-only', pages.length > 0 && !!block.querySelector('table, .tarkeeb-diagram'));
      }
      page.querySelector('.mz-teaching-copy').append(block);
      if (fits(page)) { count++; continue; }
      block.remove();
      if (count) {
        pages.push(page.cloneNode(true));
        page = frame.cloneNode(true); count = 0;
        body.replaceChildren(page); queue.unshift(block);
      } else {
        const parts = splitBlock(block);
        if (!parts.length || parts.some(part => part.textContent.length >= block.textContent.length) || ++splits > 200) {
          // An exceptionally small window or indivisible visual must stay
          // readable. Never hide content merely to pass a height constraint.
          study.classList.remove('is-paged');
          body.replaceChildren(original.cloneNode(true));
          return { index: 0, count: 1, fits: false };
        }
        queue.unshift(...parts);
      }
    }
    if (count) pages.push(page.cloneNode(true));
  }
  const desired = requestedPage === 'detail' ? pages.findIndex(page => page.querySelector('[data-study-detail]')) : requestedPage;
  const index = Math.max(0, Math.min(Number.isInteger(desired) ? desired : 0, pages.length - 1));
  body.replaceChildren(pages[index]);
  const heading = body.querySelector('.mz-teaching-copy > h2');
  if (heading) heading.tabIndex = -1;
  const back = study.querySelector('[data-action="studyBack"]');
  if (back && index > 0) back.disabled = false;
  const next = study.querySelector('[data-action="studyNext"]');
  if (next && index + 1 < pages.length) next.textContent = 'Continue →';
  body.setAttribute('role', 'region');
  body.setAttribute('aria-label', `Lesson content, page ${index + 1} of ${pages.length}`);
  study.dataset.readingPage = String(index + 1);
  study.dataset.readingPages = String(pages.length);
  return { index, count: pages.length, fits: true };
}

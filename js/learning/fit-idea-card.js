// Authored layouts use fixed, responsive type roles. Measure the result without
// changing text size, content or pagination between cards.
export function fitIdeaCard(root) {
  const shell = root.querySelector('.mz-word-lesson');
  const body = shell?.querySelector('.mz-study-body');
  const content = body?.firstElementChild;
  if (!content) return null;
  const fits = () => content.scrollHeight <= body.clientHeight + 1
    && content.scrollWidth <= body.clientWidth + 1
    && content.getBoundingClientRect().height <= body.clientHeight + 1;
  body.scrollTop = 0;
  body.scrollLeft = 0;
  const result = { fits: fits(), scale: 1, fontSize: getComputedStyle(body).fontSize };
  shell.dataset.cardFits = String(result.fits);
  return result;
}

// Only rendered learning text changes. IDs, original answers, source content,
// attributes and code samples retain their exact values.
export function learningPunctuation(root) {
  for (const region of root.querySelectorAll('.mz-study, .mz-notes-content, .la-session, .quiz-page, .concept-body, .lit-reader-body')) {
    const walker = document.createTreeWalker(region, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.textContent.includes('\u2014') && !node.parentElement.closest('script, style, pre, code')) node.textContent = node.textContent.replace(/\s*\u2014\s*/g, '; ');
    }
  }
}

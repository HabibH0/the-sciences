// Same-lesson actions should not rebuild the page around the learner. Compare
// authored HTML (not animated DOM styles) and replace only changed regions.
// Any change outside the study surface falls back to the normal full render.
let previous = null;

const markup = node => node?.outerHTML || '';
const attributes = node => [...node.attributes].map(a => `${a.name}=${a.value}`).join('|');
function copyAttributes(target, source) {
  for (const a of [...target.attributes]) if (!source.hasAttribute(a.name)) target.removeAttribute(a.name);
  for (const a of source.attributes) if (target.getAttribute(a.name) !== a.value) target.setAttribute(a.name, a.value);
}

export function mountStudyRender(root, html, sameRoute) {
  const template = document.createElement('template');
  template.innerHTML = html;
  const fresh = template.content.querySelector('.mz-study.mz-word-lesson');
  const current = root.querySelector('.mz-study.mz-word-lesson');
  const main = template.content.querySelector('.main');
  const content = main?.querySelector('.main-content');
  const head = fresh?.querySelector(':scope > .mz-study-head');
  const body = fresh?.querySelector(':scope > .mz-study-body');
  const foot = fresh?.querySelector(':scope > .mz-study-foot');
  const notes = content?.querySelector(':scope > .mz-notes-backdrop');
  const exercise = body?.querySelector(':scope > .mz-exercise');
  const prompt = exercise?.querySelector(':scope > .mz-exercise-prompt');
  const response = exercise?.querySelector(':scope > .mz-response');
  const next = fresh && body && head && foot ? {
    outside: [...template.content.childNodes].filter(n => n !== main).map(n => n.outerHTML || n.textContent).join(''),
    main: attributes(main), content: attributes(content), study: attributes(fresh),
    head: markup(head), body: markup(body), foot: markup(foot), notes: markup(notes),
    prompt: markup(prompt), response: markup(response), step: fresh.dataset.step,
  } : null;
  const old = previous;
  previous = next;
  if (!sameRoute || !current || !next || !old || old.outside !== next.outside || old.main !== next.main || old.content !== next.content) {
    root.replaceChildren(template.content);
    return false;
  }

  copyAttributes(current, fresh);
  function replacePart(selector, node, unchanged, before = null) {
    const existing = current.querySelector(`:scope > ${selector}`);
    if (existing && unchanged) return;
    if (existing) existing.replaceWith(node);
    else current.insertBefore(node, before);
  }
  replacePart('.mz-study-head', head, old.head === next.head, current.firstElementChild);
  const currentBody = current.querySelector(':scope > .mz-study-body');
  const currentExercise = currentBody?.querySelector(':scope > .mz-exercise');
  if (currentBody && currentExercise && exercise && old.step === next.step) {
    copyAttributes(currentExercise, exercise);
    for (const [selector, node, unchanged] of [
      ['.mz-exercise-prompt', prompt, old.prompt === next.prompt],
      ['.mz-response', response, old.response === next.response],
    ]) {
      const existing = currentExercise.querySelector(`:scope > ${selector}`);
      if (existing && unchanged) continue;
      if (existing) existing.replaceWith(node);
      else currentExercise.append(node);
    }
  } else replacePart('.mz-study-body', body, old.body === next.body, current.querySelector(':scope > .mz-study-foot'));
  replacePart('.mz-study-foot', foot, old.foot === next.foot);
  const oldNotes = current.parentElement.querySelector(':scope > .mz-notes-backdrop');
  if (old.notes !== next.notes) {
    oldNotes?.remove();
    if (notes) current.after(notes);
  }
  return true;
}

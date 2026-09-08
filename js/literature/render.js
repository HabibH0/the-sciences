import { esc, escAttr, escBidi } from '../html.js';
import { LITERATURE_LESSONS, LITERATURE_STAGES, literatureLesson, loadedLiteratureLesson } from '../../content-lit/learning/index.js';
import { ORDER_TYPES, CHOICE_TYPES, latestRun, currentLiteratureStep, stepPassed, responseReady, gradeLiterature, exerciseAttempts, exerciseFeedback, optionOrder, helpSteps, runMetrics, literatureInsights, PHASES } from './engine.js';

const LABELS = { prepare: 'Prepare', notice: 'Notice', manipulate: 'Practise', decode: 'Decode', understand: 'Understand', clean: 'Clean read', transfer: 'Reuse' };
const ar = text => `<span lang="ar" dir="rtl">${esc(text)}</span>`;
const btn = (label, action, extra = '', secondary = false) => `<button class="btn ${secondary ? 'btn-secondary' : 'btn-primary'}" data-action="${action}" ${extra}>${escBidi(label)}</button>`;
const lessonLink = (lesson, label) => `<a class="btn btn-primary" href="#/literature/lesson/${escAttr(lesson.id)}" data-action="openLiteratureLesson" data-literature-id="${escAttr(lesson.id)}">${esc(label)}</a>`;

export function literatureHomeHtml(state) {
  const insight = literatureInsights(LITERATURE_LESSONS, state.literature);
  const started = LITERATURE_LESSONS.map(l => ({ lesson: l, run: latestRun(state.literature, l) }))
    .filter(({ lesson, run }) => run && !runMetrics(lesson, run).complete).sort((a, b) => b.run.updatedAt - a.run.updatedAt)[0];
  const next = started?.lesson || LITERATURE_LESSONS.find(l => !insight.completed.includes(l.id)) || LITERATURE_LESSONS[0];
  const constructions = new Set(LITERATURE_LESSONS.flatMap(l => l.constructions.map(c => c.id)));
  const vocabulary = new Set(LITERATURE_LESSONS.flatMap(l => l.vocabulary.map(v => v.id)));
  const strengthened = ids => [...ids].filter(id => insight.knowledge[id]?.independentContexts >= 2).length;
  const trend = insight.trend;
  return `<section class="la-home">
    <header class="la-home-heading"><p class="kicker">Literature · Arabic in use</p><h1>Make real Arabic familiar.</h1>
      <p>Learn the language inside a short passage. Notice how it works, piece it together, then use it somewhere new.</p>
      <p class="la-home-ar" lang="ar" dir="rtl">مِنَ الْكَلِمَةِ إِلَى الْمَعْنَى</p></header>
    <div class="la-start"><div><span class="kicker">${started ? 'Continue your lesson' : insight.completed.length === LITERATURE_LESSONS.length ? 'Revisit the language' : 'Your next lesson'} · ${next.minutes} minutes</span>
      <h2>${esc(next.title)}</h2><p>${escBidi(next.objectives[0].text)}</p></div>${lessonLink(next, started ? 'Continue lesson' : 'Open lesson')}</div>
    ${insight.completed.length ? `<p class="la-progress-summary">${insight.completed.length} / ${LITERATURE_LESSONS.length} lessons completed · ${strengthened(constructions)} constructions strengthened · ${strengthened(vocabulary)} words strengthened</p>
      <p class="la-progress-note">On your last ${trend.length} completed attempt${trend.length === 1 ? '' : 's'}, you decoded ${trend.filter(t => t.independent).length} passage${trend.filter(t => t.independent).length === 1 ? '' : 's'} correctly on the first try without decoding hints. <span>Strengthened means recognised independently in at least two exercise contexts.</span></p>` : ''}
    <div class="la-path">${LITERATURE_STAGES.map(stage => `<section class="la-stage" aria-labelledby="stage-${stage.id}">
      <div class="la-stage-heading"><span class="la-stage-number">${stage.id}</span><div><h2 id="stage-${stage.id}">${esc(stage.title)}</h2><p>${esc(stage.description)}</p></div></div>
      <ol>${LITERATURE_LESSONS.filter(l => l.stage === stage.id).map(l => {
        const done = insight.completed.includes(l.id), run = latestRun(state.literature, l);
        return `<li><a href="#/literature/lesson/${escAttr(l.id)}" data-action="openLiteratureLesson" data-literature-id="${escAttr(l.id)}" class="la-lesson-row">
          <span class="la-row-copy"><strong>${esc(l.title)}</strong><span>${escBidi(l.objectives[0].text)}</span><small>${done ? 'Completed · revisit anytime' : run ? 'In progress · saved' : `${l.minutes} minutes`}</small></span><span class="la-row-ar" lang="ar" dir="rtl">${esc(l.titleAr)}</span><span aria-hidden="true">${done ? '✓' : '→'}</span></a></li>`;
      }).join('')}</ol></section>`).join('')}</div>
    <aside class="la-library-link"><h2>Read beyond the lesson</h2><p>Your full collection, vocabulary notes and reading history are here for exploration and consolidation.</p>
      <a class="btn btn-secondary" href="#/library/books" data-action="openLiteratureSources">Browse authors & works</a>
      <p class="la-progress-note">This is a curated starter path through five language stages. Longer and more difficult classical texts remain in the source collection; they are not yet a complete taught curriculum.</p></aside>
  </section>`;
}

function sourceCredit(lesson) {
  const source = lesson.source;
  return `<p class="la-source-credit">${escBidi(source.work.en)} · ${esc(source.volume)} · ${escBidi(source.title.en)}${source.pages.length ? ` · p. ${esc(source.pages.join('–'))}` : ''}<br>${escBidi(source.author.en)}${lesson.genre === 'poetry' ? ' · verse as reproduced in this reader' : ''}</p>`;
}
function sourceText(lesson, chunked = false) {
  return `<div class="la-source${lesson.genre === 'poetry' ? ' la-verse' : ''}${lesson.source.text.length > 100 ? ' la-source-long' : ''}" lang="ar" dir="rtl">${chunked ? lesson.chunks.map(c => `<span class="la-meaning-chunk">${esc(c)}</span>`).join(' ') : esc(lesson.source.text)}</div>`;
}

function orientationHtml(lesson) {
  return `<div class="la-orientation"><p class="kicker">${lesson.minutes} minutes · ${lesson.genre === 'poetry' ? 'One bayt' : 'A short authentic passage'}</p>
    <h1 class="la-focus" tabindex="-1">${esc(lesson.title)}</h1><p>${escBidi(lesson.context)}</p>
    <h2>By the end, you can…</h2><ul>${lesson.objectives.map(o => `<li>${escBidi(o.text)}</li>`).join('')}</ul>
    <p>Start with the language. You’ll return to the original with less help, then try it in a new context.</p>${sourceCredit(lesson)}
    ${btn('Begin with the language', 'literatureAcknowledge', 'data-value="ready"')}</div>`;
}

function helpHtml(lesson, step, run) {
  const levels = helpSteps(lesson, step), count = Math.min(levels.length, run.help[step.id] || 0), shown = levels[count - 1];
  return `<div class="la-help-area">${shown ? `<aside class="la-help" aria-live="polite" tabindex="-1"><strong>${esc(shown.label || 'A useful clue')}</strong>${shown.kind === 'chunks' ? '<p>Read each group as one unit of meaning. The original above is now chunked.</p>' : `<p${shown.arabic ? ' lang="ar" dir="rtl" class="la-help-ar"' : ''}>${shown.arabic ? esc(shown.text) : escBidi(shown.text)}</p>`}</aside>` : ''}
    ${count < levels.length ? `<button class="la-text-button" data-action="literatureHelp">${count ? esc(levels[count].label || 'Another clue') : 'I need a clue'}${step.phase === 'decode' ? ` <span>(${count + 1} / ${levels.length})</span>` : ''}</button>` : '<span class="la-progress-note">All support is open. Use it to try the Arabic again.</span>'}</div>`;
}

function exerciseHtml(lesson, step, run, state) {
  const draft = run.drafts[step.id] || {}, attempts = exerciseAttempts(run, step), last = attempts.at(-1);
  const passed = stepPassed(run, step), submitted = passed || (draft.checking && !!last);
  const response = submitted && last ? last.answer : draft.answer;
  const order = ORDER_TYPES.has(step.type), group = step.type === 'chunk_sentence';
  const choicesOpen = step.phase !== 'decode' || draft.revealed || attempts.length > 0;
  const selected = Array.isArray(response) ? response : [];
  const source = ['decode', 'understand'].includes(step.phase) ? sourceText(lesson, step.phase === 'decode' && (run.help[step.id] || 0) > 0)
    : step.arabic ? `<div class="la-source${step.type === 'poetry_reorder' ? ' la-verse' : ''}" lang="ar" dir="rtl">${esc(step.arabic)}</div>` : '';
  const buttons = optionOrder(run, step).map(i => `<button type="button" class="la-option${(group || order ? selected.includes(i) : response === i) ? ' is-selected' : ''}" data-action="literatureSelect" data-value="${i}" ${submitted || (order && selected.includes(i)) ? 'disabled' : ''} ${!order ? `aria-pressed="${(group ? selected.includes(i) : response === i) ? 'true' : 'false'}"` : ''}><span lang="ar" dir="rtl">${esc(step.options[i])}</span></button>`).join('');
  const concept = step.concept;
  const studied = concept && !!state.completed?.[concept.moduleId]?.[concept.lessonId];
  return `<div class="la-exercise" data-exercise-type="${escAttr(step.type)}" data-exercise-id="${escAttr(step.id)}">
    ${step.phase === 'transfer' ? '<p class="la-transfer-note">New context · use the language you learned</p>' : ''}
    <h1 class="la-focus la-prompt" tabindex="-1" dir="auto">${escBidi(step.prompt)}</h1>${source}
    ${step.instructions && step.instructions !== step.prompt ? `<p class="la-instruction">${escBidi(step.instructions)}</p>` : ''}
    ${choicesOpen ? `<div class="la-response">
      ${order ? `<p class="la-instruction">Choose chunks in reading order, starting on the right. Select a placed chunk to remove it.</p><div class="la-built" dir="rtl" aria-label="Your sentence" aria-live="polite">${selected.length ? selected.map(i => `<button class="la-placed" data-action="literatureSelect" data-value="${i}" ${submitted ? 'disabled' : ''} aria-label="${escAttr(`Remove ${step.options[i]}`)}">${ar(step.options[i])}</button>`).join('') : '<span class="la-placeholder">Build your sentence here</span>'}</div>` : group ? '<p class="la-instruction">Select every word belonging to the requested phrase.</p>' : ''}
      <div class="la-options${order || group ? ' la-chunk-bank' : ''}" ${order || group ? 'dir="rtl"' : ''} role="group" aria-label="${order ? 'Available chunks' : 'Your interpretation'}">${buttons}</div>
    </div>` : `<p class="la-decode-invitation">Work out the meaning before opening the interpretations. If a part blocks you, ask for one clue at a time.</p>${btn('I’m ready to interpret', 'literatureReveal', '', true)}`}
    ${submitted ? `<div class="la-feedback ${passed ? 'is-correct' : 'needs-retry'}" role="status" tabindex="-1"><strong>${passed ? attempts.length > 1 ? 'Repaired — read it once more.' : 'That fits the Arabic.' : 'Revisit this relationship.'}</strong><p>${escBidi(exerciseFeedback(step, last))}</p>${!passed && attempts.length > 1 ? '<p class="la-progress-note">A clue is available below; your first attempt stays recorded.</p>' : ''}</div>` : ''}
    <div class="la-assistance">${order && !submitted ? '<button class="la-text-button" data-action="literatureClear">Clear sentence</button>' : ''}${!passed || step.phase === 'decode' ? helpHtml(lesson, step, run) : ''}
      ${concept ? `<div class="la-concept"><button class="la-text-button" data-action="literatureConcept" aria-expanded="${draft.conceptOpen ? 'true' : 'false'}">${studied ? 'Apply your Naḥw knowledge' : 'A quick Naḥw connection'} · ${ar(concept.label)}</button>${draft.conceptOpen ? `<p>${escBidi(concept.note)}</p><a href="#/module/${escAttr(concept.moduleId)}/${escAttr(concept.lessonId)}" target="_blank" rel="noopener">Review this concept in another tab</a>` : ''}</div>` : ''}</div>
    <footer class="la-exercise-footer">${submitted ? passed ? btn(step.phase === 'transfer' && lesson.exercises.filter(e => e.phase === 'transfer').at(-1).id === step.id ? 'See what you learned' : 'Continue', 'literatureNext') : btn('Try the Arabic again', 'literatureRetry') : choicesOpen ? btn('Check my answer', 'literatureCheck', responseReady(step, response) ? '' : 'disabled') : ''}</footer>
  </div>`;
}

function cleanHtml(lesson) {
  return `<div class="la-clean"><p class="kicker">The original, on its own</p><h1 class="la-focus" tabindex="-1">Read it again.</h1>
    <p>Follow the words and their relationships directly.</p>${sourceText(lesson)}
    <fieldset><legend>How did this reading feel?</legend><div class="la-clean-choices">${btn('I followed it directly', 'literatureAcknowledge', 'data-value="independent"', true)}${btn('It took some effort', 'literatureAcknowledge', 'data-value="with-effort"', true)}${btn('I still need support', 'literatureAcknowledge', 'data-value="needs-support"', true)}</div></fieldset>
    <p class="la-progress-note">This is your reflection, not a score. Next, try the language in a fresh context.</p>
    <button class="la-text-button" data-action="literatureReturnDecode">Revisit the decoding support</button></div>`;
}

function completeHtml(lesson, run, state) {
  const metrics = runMetrics(lesson, run), insight = literatureInsights(LITERATURE_LESSONS, state.literature);
  const candidates = LITERATURE_LESSONS.filter(l => !insight.completed.includes(l.id));
  const next = candidates.find(l => l.stage <= lesson.stage + 1 && l.exercises.some(e => e.targets.some(id => insight.knowledge[id]?.status === 'struggled'))) || candidates[0];
  return `<div class="la-complete"><p class="kicker">Lesson complete</p><h1 class="la-focus" tabindex="-1">This Arabic is more familiar now.</h1>${sourceText(lesson)}
    <h2>Language you worked with</h2><ul>${lesson.objectives.map(o => `<li>${escBidi(o.text)}</li>`).join('')}</ul>
    <dl class="la-results"><div><dt>Original passage</dt><dd>${metrics.independentDecode ? 'Understood on the first try without decoding hints' : 'Understood with support or correction'}</dd></div><div><dt>New contexts</dt><dd>${metrics.independentTransfer} / ${metrics.transferTotal} correct on the first try without hints</dd></div></dl>
    <p>${metrics.independentTransfer === metrics.transferTotal ? 'You recognised the language beyond the original passage. Future encounters will show how well it stays with you.' : 'The new examples needed some work. That is useful evidence: revisit this language in another context before treating it as secure.'}</p>
    <div class="la-complete-actions">${next ? lessonLink(next, `Next: ${next.title}`) : btn('Back to your literature path', 'openLibrary')}${btn('Practise this lesson again', 'restartLiteratureLesson', '', true)}</div>
    <p class="la-progress-note">A new attempt keeps your previous learning evidence.</p>
    ${btn('Read the full source chapter', 'readLiteratureSource', '', true)}${sourceCredit(lesson)}</div>`;
}

export function literatureLessonHtml(state) {
  const definition = literatureLesson(state.literatureLessonId), lesson = loadedLiteratureLesson(state.literatureLessonId);
  if (!definition) return literatureHomeHtml(state);
  const run = lesson && latestRun(state.literature, lesson);
  if (!lesson || !run) return `<section class="la-session"><p class="kicker">Literature</p><h1>${esc(definition.title)}</h1><p role="status">${esc(state.literatureError || 'Loading the lesson and its source…')}</p>${state.literatureError ? btn('Retry loading', 'retryLiteratureLesson') : ''}${btn('Back to Literature', 'openLibrary', '', true)}</section>`;
  const { index, step, steps } = currentLiteratureStep(lesson, run);
  return `<section class="la-session" data-literature-lesson="${escAttr(lesson.id)}" data-literature-phase="${step?.phase || 'complete'}">
    <div class="la-session-top"><button class="la-text-button" data-action="openLibrary">← Literature <span>· progress saved</span></button><div class="mz-meter" role="progressbar" aria-label="Lesson progress" aria-valuemin="0" aria-valuemax="${steps.length}" aria-valuenow="${Math.min(index + 1, steps.length)}"><span style="width:${Math.min(index + 1, steps.length) / steps.length * 100}%"></span></div>${!step ? '<span>Complete</span>' : ''}</div>
    <ol class="la-phase-rail" aria-label="Lesson phases">${PHASES.map(phase => `<li ${step?.phase === phase ? 'aria-current="step"' : ''} class="${step?.phase === phase ? 'is-current' : ''}">${LABELS[phase]}</li>`).join('')}</ol>
    <div class="la-stage-body">${!step ? completeHtml(lesson, run, state) : step.type === 'orientation' ? orientationHtml(lesson) : step.type === 'clean' ? cleanHtml(lesson) : exerciseHtml(lesson, step, run, state)}</div>
    ${step && index > 0 ? '<button class="la-text-button la-back-step" data-action="literatureBack">← Previous step</button>' : ''}
  </section>`;
}

import { esc, escAttr, escBidi } from '../html.js';
import { LITERATURE_LESSONS, ALL_SESSIONS, ARCHETYPES, literatureLesson, loadedLiteratureLesson } from '../../content-lit/learning/index.js';
import { ORDER_TYPES, latestRun, currentLiteratureStep, stepPassed, responseReady, exerciseAttempts, exerciseFeedback, optionOrder, helpSteps, gradeLiterature } from './engine.js';
import { courseHomeHtml, learningSnapshot, sessionLink } from './dashboard.js';
import { placementRecommendation, recommendSession, lexicalCoverage } from './model.js';

const LABELS = { prepare: 'Learn', notice: 'Notice', manipulate: 'Practise', decode: 'Understand', understand: 'Understand', clean: 'Read independently', transfer: 'Transfer', review:'Review', assess:'Try new Arabic' };
const ar = text => `<span lang="ar" dir="rtl">${esc(text)}</span>`;
const btn = (label, action, extra = '', secondary = false) => `<button class="btn ${secondary ? 'btn-secondary' : 'btn-primary'}" data-action="${action}" ${extra}>${escBidi(label)}</button>`;
const lessonLink = (lesson, label) => `<a class="btn btn-primary" href="#/literature/lesson/${escAttr(lesson.id)}" data-action="openLiteratureLesson" data-literature-id="${escAttr(lesson.id)}">${esc(label)}</a>`;

export const literatureHomeHtml = courseHomeHtml;

function sourceCredit(lesson) {
  const source = lesson.source;
  if(source.kind==='practice')return '<p class="la-source-credit">Curated practice examples · source quotations are identified separately.</p>';
  return `<p class="la-source-credit">${escBidi(source.work.en)} · ${esc(source.volume)} · ${escBidi(source.title.en)}${source.pages.length ? ` · p. ${esc(source.pages.join('–'))}` : ''}<br>${escBidi(source.author.en)}${lesson.genre === 'poetry' ? ' · verse as reproduced in this reader' : ''}</p>`;
}
function sourceText(lesson, chunked = false) {
  return `<div class="la-source${lesson.genre === 'poetry' ? ' la-verse' : ''}${lesson.source.text.length > 100 ? ' la-source-long' : ''}" lang="ar" dir="rtl">${chunked ? lesson.chunks.map(c => `<span class="la-meaning-chunk">${esc(c)}</span>`).join(' ') : esc(lesson.source.text)}</div>`;
}

function orientationHtml(lesson) {
  return `<div class="la-orientation"><p class="kicker">${lesson.minutes} minutes · ${esc(ARCHETYPES[lesson.archetype]?.title||'Learning session')}</p>
    <h1 class="la-focus" tabindex="-1">${esc(lesson.title)}</h1><p>${escBidi(lesson.context)}</p>
    <h2>You’ll learn to…</h2><ul>${lesson.objectives.map(o => `<li>${escBidi(o.text)}</li>`).join('')}</ul>
    <p>${esc(ARCHETYPES[lesson.archetype]?.purpose||'')}</p>${sourceCredit(lesson)}
    ${btn('Begin with the language', 'literatureAcknowledge', 'data-value="ready"')}</div>`;
}

function helpHtml(lesson, step, run) {
  const levels = helpSteps(lesson, step), count = Math.min(levels.length, run.help[step.id] || 0), shown = levels[count - 1];
  return `<div class="la-help-area">${shown ? `<aside class="la-help" aria-live="polite" tabindex="-1"><strong>${esc(shown.label || 'A useful clue')}</strong>${shown.kind === 'chunks' ? '<p>Read each group as one unit of meaning. The original above is now chunked.</p>' : `<p${shown.arabic ? ' lang="ar" dir="rtl" class="la-help-ar"' : ''}>${shown.arabic ? esc(shown.text) : escBidi(shown.text)}</p>`}</aside>` : ''}
    ${count < levels.length ? `<button class="la-text-button" data-action="literatureHelp">${count ? esc(levels[count].label || 'Another clue') : 'I need a clue'}${step.phase === 'decode' ? ` <span>(${count + 1} / ${levels.length})</span>` : ''}</button>` : '<span class="la-progress-note">All support is open. Use it to try the Arabic again.</span>'}</div>`;
}

function matchingHtml(step, selected, submitted) {
  const row=(i,active)=>`<li class="${active?'is-current':''}"><span lang="ar" dir="rtl">${esc(step.stems[i])}</span><small>الكَلِمَةُ: ${ar(step.focusWords?.[i]||'')}</small>${selected[i]===undefined?'':`<span class="la-match-result"><button class="la-text-button" data-action="literatureSelect" data-value="${selected[i]}" ${submitted?'disabled':''}>${ar(step.options[selected[i]])} ↶</button></span>`}</li>`;
  return selected.length<step.stems.length&&!submitted?`<ol class="la-match-stems">${row(selected.length,true)}</ol><p class="la-instruction" aria-live="polite">Sentence ${selected.length+1} / ${step.stems.length} · Choose its meaning.</p>`:
    `<p class="la-instruction" aria-live="polite">${selected.length} pairs placed.</p><details class="la-match-review"><summary>Review your pairings</summary><ol class="la-match-stems">${step.stems.map((_,i)=>row(i,false)).join('')}</ol></details>`;
}

function exerciseHtml(lesson, step, run, state) {
  const draft = run.drafts[step.id] || {}, attempts = exerciseAttempts(run, step), last = attempts.at(-1);
  const passed = stepPassed(run, step), correct = last && gradeLiterature(step,last.answer), submitted = passed || (draft.checking && !!last);
  const response = submitted && last ? last.answer : draft.answer;
  const order = ORDER_TYPES.has(step.type), group = ['chunk_sentence','clause_boundary'].includes(step.type), matching=step.type==='match_pairs', typed=step.type==='typed_recall';
  const choicesOpen = step.phase !== 'decode' || draft.revealed || attempts.length > 0;
  const selected = Array.isArray(response) ? response : [];
  const source = step.useSource || ['decode', 'understand'].includes(step.phase) ? sourceText(lesson, (step.useSource || step.phase === 'decode') && (run.help[step.id] || 0) > 0)
    : step.arabic ? `<div class="la-source${step.type === 'poetry_reorder' ? ' la-verse' : ''}" lang="ar" dir="rtl">${esc(step.arabic)}</div>` : '';
  const buttons = optionOrder(run, step).filter(i=>!matching||!selected.includes(i)).map(i => `<button type="button" class="la-option${(group || order || matching ? selected.includes(i) : response === i) ? ' is-selected' : ''}" data-action="literatureSelect" data-value="${i}" ${submitted || ((order || matching) && selected.includes(i)) ? 'disabled' : ''} ${!order ? `aria-pressed="${(group || matching ? selected.includes(i) : response === i) ? 'true' : 'false'}"` : ''}><span lang="ar" dir="rtl">${esc(step.options[i])}</span></button>`).join('');
  const concept = step.concept;
  const studied = concept && !!state.completed?.[concept.moduleId]?.[concept.lessonId];
  return `<div class="la-exercise" data-exercise-type="${escAttr(step.type)}" data-exercise-id="${escAttr(step.id)}">
    ${step.phase === 'transfer' ? '<p class="la-transfer-note">New context · use the language you learned</p>' : ''}
    ${step.type==='rapid_recognition'?'<p class="la-transfer-note">A short decision · aim for accuracy, then fluency. There is no time limit.</p>':''}
    ${step.assessment?'<p class="la-transfer-note">Your first answer matters · help is optional</p>':''}
    <h1 class="la-focus la-prompt" tabindex="-1" dir="auto">${escBidi(step.prompt)}</h1>${source}
    ${step.instructions && step.instructions !== step.prompt ? `<p class="la-instruction">${escBidi(step.instructions)}</p>` : ''}
    ${choicesOpen ? `<div class="la-response">
      ${matching?matchingHtml(step,selected,submitted):''}
      ${typed?`<label class="la-recall-label" for="literature-recall">اُكْتُبْ بِالْعَرَبِيَّةِ <small>Diacritics are optional. You can use a clue.</small></label><input id="literature-recall" class="la-recall" lang="ar" dir="rtl" type="text" maxlength="500" autocomplete="off" spellcheck="false" value="${escAttr(typeof response==='string'?response:'')}" ${submitted?'disabled':''} aria-describedby="recall-note"><p id="recall-note" class="la-muted">Short, constrained recall; accepted wording is checked without vowel marks.</p>`:''}
      ${order ? `<p class="la-instruction">Choose chunks in reading order, starting on the right. Select a placed chunk to remove it.</p><div class="la-built" dir="rtl" aria-label="Your sentence" aria-live="polite">${selected.length ? selected.map(i => `<button class="la-placed" data-action="literatureSelect" data-value="${i}" ${submitted ? 'disabled' : ''} aria-label="${escAttr(`Remove ${step.options[i]}`)}">${ar(step.options[i])}</button>`).join('') : '<span class="la-placeholder">Build your sentence here</span>'}</div>` : group ? `<p class="la-instruction">${step.type==='clause_boundary'?'Mark the word where the clause ends.':'Select every word belonging to the requested phrase.'}</p>` : ''}
      ${typed?'':`<div class="la-options${order || group ? ' la-chunk-bank' : ''}" ${order || group ? 'dir="rtl"' : ''} role="group" aria-label="${order ? 'Available chunks' : matching?'Available meanings':'Your interpretation'}">${buttons}</div>`}
    </div>` : `<p class="la-decode-invitation">Read the Arabic. Ask for a clue if you need one.</p>${btn('I’m ready to interpret', 'literatureReveal', '', true)}`}
    ${submitted ? `<div class="la-feedback ${correct ? 'is-correct' : 'needs-retry'}" role="status" tabindex="-1"><strong>${correct ? attempts.length > 1 ? 'Repaired — read it once more.' : 'That fits the Arabic.' : matching && Array.isArray(response)?`${response.filter((v,i)=>v===step.answer[i]).length} / ${step.answer.length} pairs fit. Revisit the others.`:'Revisit this relationship.'}</strong><p>${escBidi(exerciseFeedback(step, last))}</p>${!correct && typed?`<p lang="ar" dir="rtl">${esc(step.answer)}</p>`:''}${step.assessment&&!correct?'<p class="la-progress-note">This first answer helps identify what to review. You can continue.</p>':''}${!correct && attempts.length > 1 ? '<p class="la-progress-note">A clue is available below; your first attempt stays recorded.</p>' : ''}</div>` : ''}
    <div class="la-assistance">${(order||matching) && !submitted ? '<button class="la-text-button" data-action="literatureClear">Clear response</button>' : ''}${!passed || step.phase === 'decode' || step.assessment ? helpHtml(lesson, step, run) : ''}
      ${concept ? `<div class="la-concept"><button class="la-text-button" data-action="literatureConcept" aria-expanded="${draft.conceptOpen ? 'true' : 'false'}">${studied ? 'Apply your Naḥw knowledge' : 'A quick Naḥw connection'} · ${ar(concept.label)}</button>${draft.conceptOpen ? `<p>${escBidi(concept.note)}</p><a href="#/module/${escAttr(concept.moduleId)}/${escAttr(concept.lessonId)}" target="_blank" rel="noopener">Review this concept in another tab</a>` : ''}</div>` : ''}</div>
    ${step.sourceCredit?sourceCredit({source:step.sourceCredit}):''}
    <footer class="la-exercise-footer">${submitted ? passed ? btn('Continue', 'literatureNext') : btn('Try the Arabic again', 'literatureRetry') : choicesOpen ? btn(step.assessment?'Submit first answer':'Check my answer', 'literatureCheck', responseReady(step, response) ? '' : 'disabled') : ''}</footer>
  </div>`;
}

function cleanHtml(lesson) {
  return `<div class="la-clean"><p class="kicker">The original, on its own</p><h1 class="la-focus" tabindex="-1">Read it again.</h1>
    ${sourceText(lesson)}
    <fieldset><legend>How did this reading feel?</legend><div class="la-clean-choices">${btn('I followed it directly', 'literatureAcknowledge', 'data-value="independent"', true)}${btn('It took some effort', 'literatureAcknowledge', 'data-value="with-effort"', true)}${btn('I still need support', 'literatureAcknowledge', 'data-value="needs-support"', true)}</div></fieldset>
    <button class="la-text-button" data-action="literatureReturnDecode">Revisit the decoding support</button></div>`;
}

function completeHtml(lesson, run, state) {
  const model=learningSnapshot(state.literature), placement=placementRecommendation(ALL_SESSIONS,state.literature);
  const next=recommendSession(ALL_SESSIONS,state.literature,model,placement).lesson;
  const result=model.sessions.find(s=>s.id===run.id);
  const coverage=lexicalCoverage(lesson,model.knowledge);
  if(lesson.kind==='diagnostic')return `<div class="la-complete"><p class="kicker">Placement complete</p><h1 class="la-focus" tabindex="-1">Start with Stage ${placement?.stage||1}.</h1><p>This recommendation uses your first answers and help use. It is a starting point, and every stage remains available.</p><ul>${(placement?.scores||[]).map(s=>`<li>Stage ${s.stage}: ${s.correct}/${s.total} independent first answers</li>`).join('')}</ul><div class="la-complete-actions">${next?sessionLink(next,'Begin the recommended session',true):''}${btn('Choose a different stage','openLibrary','',true)}</div></div>`;
  return `<div class="la-complete"><p class="kicker">${lesson.kind==='checkpoint'?'Checkpoint recorded':'Session complete'}</p><h1 class="la-focus" tabindex="-1">${lesson.kind==='checkpoint'?'See what transferred.':'Keep this language growing.'}</h1>${lesson.source.text?sourceText(lesson):''}
    <h2>Language you worked with</h2><ul>${lesson.objectives.map(o=>`<li>${escBidi(o.text)}</li>`).join('')}</ul>
    <dl class="la-results"><div><dt>First answers without help</dt><dd>${result?.independent||0} / ${result?.tested||0}</dd></div><div><dt>Help opened</dt><dd>${result?.hints||0} steps${result?.translations?' · source translation used':''}</dd></div>${result?.transfer?`<div><dt>Transfer questions</dt><dd>${result.transferCorrect} / ${result.transfer} first answers without help</dd></div>`:''}</dl>
    <p>Completion records the work you did. Strong knowledge needs independent success across contexts and a later retention check.</p>
    ${coverage?`<p class="la-muted">Of ${coverage.total} curated vocabulary targets here: ${coverage.known} strong, ${coverage.learning} developing, ${coverage.unknown} untested. This is target coverage, not coverage of every word in the passage.</p>`:''}
    <div class="la-complete-actions">${next?sessionLink(next,next.id===lesson.id?'Review more language':`Next: ${next.title}`,true):''}${btn('Back to the course','openLibrary','',true)}${btn('Try this session again','restartLiteratureLesson','',true)}</div>
    ${sourceCredit(lesson)}${lesson.source.kind!=='practice'?btn('Read the full source chapter','readLiteratureSource','',true):''}</div>`;
}

export function literatureLessonHtml(state) {
  const definition = literatureLesson(state.literatureLessonId), lesson = loadedLiteratureLesson(state.literatureLessonId);
  if (!definition) return literatureHomeHtml(state);
  const run = lesson && latestRun(state.literature, lesson);
  if (!lesson || !run) return `<section class="la-session"><p class="kicker">Literature</p><h1>${esc(definition.title)}</h1><p role="status">${esc(state.literatureError || 'Loading the lesson and its source…')}</p>${state.literatureError ? btn('Retry loading', 'retryLiteratureLesson') : ''}${btn('Back to Literature', 'openLibrary', '', true)}</section>`;
  const { index, step, steps } = currentLiteratureStep(lesson, run);
  return `<section class="la-session" data-literature-lesson="${escAttr(lesson.id)}" data-literature-phase="${step?.phase || 'complete'}">
    <div class="la-session-top"><button class="la-text-button" data-action="openLibrary">← Literature <span>· progress saved</span></button><div class="mz-meter" role="progressbar" aria-label="Lesson progress" aria-valuemin="0" aria-valuemax="${steps.length}" aria-valuenow="${Math.min(index + 1, steps.length)}"><span style="width:${Math.min(index + 1, steps.length) / steps.length * 100}%"></span></div>${!step ? '<span>Complete</span>' : ''}</div>
    ${step ? `<p class="la-phase-label" aria-label="Current lesson phase">${LABELS[step.phase]}</p>` : ''}
    <div class="la-stage-body">${!step ? completeHtml(lesson, run, state) : step.type === 'orientation' ? orientationHtml(lesson) : step.type === 'clean' ? cleanHtml(lesson) : exerciseHtml(lesson, step, run, state)}</div>
    ${step && index > 0 ? '<button class="la-text-button la-back-step" data-action="literatureBack">← Previous step</button>' : ''}
  </section>`;
}

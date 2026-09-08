import { esc, escAttr, escBidi } from '../html.js';
import { ALL_SESSIONS, LITERATURE_LESSONS, LITERATURE_STAGES, LITERATURE_UNITS, GUIDED_LESSONS, LEARNING_ITEMS, PUBLISHED_UNITS, ARCHETYPES } from '../../content-lit/learning/index.js';
import { latestRun } from './engine.js';
import { courseProgress, placementRecommendation, recommendSession } from './model.js';

export function learningSnapshot(progress, now=Date.now()) {
  return courseProgress(ALL_SESSIONS,LEARNING_ITEMS,progress,now);
}
export const sessionLink=(lesson,label,primary=false)=>`<a class="${primary?'btn btn-primary':'la-session-link'}" href="#/literature/lesson/${escAttr(lesson.id)}" data-action="openLiteratureLesson" data-literature-id="${escAttr(lesson.id)}">${esc(label)}</a>`;
const arabic=value=>`<span lang="ar" dir="rtl">${esc(value)}</span>`;
const date=value=>new Date(value).toLocaleDateString(undefined,{month:'short',day:'numeric'});
function knowledgeTable(items) {
  if(!items.length)return '<p class="la-muted">Evidence will appear after you work with this language.</p>';
  return `<div class="la-table-scroll"><table class="la-evidence-table"><thead><tr><th>Language</th><th>Current evidence</th><th>Next review</th></tr></thead><tbody>${items.map(k=>`<tr><th scope="row">${k.kind==='skill'?esc(k.title):arabic(k.ar)}${k.root?`<small lang="ar" dir="rtl">${esc(k.root)}</small>`:''}<small>${esc(k.gloss||k.meaning||'')}</small></th><td><strong>${esc(k.status)}</strong><small>${k.independentContexts} independent contexts · ${k.retention} delayed recoveries</small><small>${k.failures} first-answer errors · ${k.helped} helped encounters</small>${k.kind==='vocabulary'?`<small>${esc(k.receptive)} · ${esc(k.productive)}</small>`:''}</td><td>${k.dueAt?date(k.dueAt):'After first practice'}</td></tr>`).join('')}</tbody></table></div>`;
}
function independenceHtml(model) {
  const {earlier,recent}=model.independence;
  if(!recent)return '<p class="la-muted">Your first attempts, help use and new-context results will build a picture of reading independence.</p>';
  return `<div class="la-independence"><h3>Reading independence</h3><p>First answers without help · a course measure, not a proficiency level.</p>${[earlier&&{...earlier,label:'Earlier sessions'}, {...recent,label:'Recent sessions'}].filter(Boolean).map(row=>`<div class="la-trend-row"><span>${row.label} <small>(${row.samples})</small></span><meter min="0" max="100" value="${row.independent}" aria-label="${row.label}: independent first answers">${row.independent}%</meter><strong>${row.independent}%</strong></div>`).join('')}<p class="la-muted">Recent sessions: ${recent.hints.toFixed(1)} help steps per session; translation opened in ${recent.translations}%. ${recent.unseen===null?'No transfer responses yet.':`New-context first answers: ${recent.unseen}%.`} Stages sampled: ${recent.stages.join(', ')}.</p>${earlier?`<p class="la-muted">Earlier: ${earlier.hints.toFixed(1)} help steps; translation in ${earlier.translations}%. Different stages and tasks can affect this comparison.</p>`:'<p class="la-muted">An earlier comparison will appear after six tested sessions.</p>'}</div>`;
}

export function courseHomeHtml(state) {
  const model=learningSnapshot(state.literature),placement=placementRecommendation(ALL_SESSIONS,state.literature),recommendation=recommendSession(ALL_SESSIONS,state.literature,model,placement);
  const next=recommendation.lesson, stageId=state.literature?.preferences?.stage || placement?.stage || next?.stage || 1;
  const vocabulary=Object.values(model.knowledge).filter(k=>k.kind==='vocabulary'), seen=vocabulary.filter(k=>k.encounters), strong=seen.filter(k=>['Strong','Mastered'].includes(k.status));
  const roots=new Map();
  seen.filter(v=>v.root).forEach(v=>{if(!roots.has(v.root))roots.set(v.root,[]);roots.get(v.root).push(v);});
  const oldRuns=Object.values(state.literature?.runs||{}).filter(r=>!ALL_SESSIONS.some(l=>l.id===r.lessonId&&l.revision===r.revision)).length;
  return `<section class="la-home">
    <header class="la-home-heading"><div><p class="kicker">Arabic through literature</p><h1>Make this Arabic familiar.</h1><p>Learn the language. Understand the passage. Carry it into new Arabic.</p></div><a href="#/library/books" data-action="openLiteratureSources">Source collection →</a></header>
    ${next?`<div class="la-start"><div><span class="kicker">${esc(recommendation.reason)}</span><h2>${esc(next.title)}</h2><p>${esc(ARCHETYPES[next.archetype]?.title||'Practice')} · about ${next.minutes} minutes</p></div>${sessionLink(next,latestRun(state.literature,next)&&!model.completed.includes(next.id)?'Continue':'Begin session',true)}</div>`:''}
    <div class="la-progress-line"><p>${model.completed.filter(id=>GUIDED_LESSONS.some(l=>l.id===id)).length} / ${GUIDED_LESSONS.length} guided lessons · ${seen.length} vocabulary item${seen.length===1?'':'s'} encountered · ${strong.length} strong after delayed practice</p></div>
    <details class="la-development"><summary>Your Arabic is developing</summary>
      ${independenceHtml(model)}
      ${model.comprehensionByStage.length?`<details><summary>Comprehension at each stage</summary><p>Recent first answers to comprehension questions, without help. Compare within a stage; the language and tasks differ between stages.</p><ul class="la-history">${model.comprehensionByStage.map(row=>`<li><strong>Stage ${row.stage}: ${row.independent}/${row.tested} independent</strong><small>${row.earlierTested?`Earlier: ${row.earlierIndependent}/${row.earlierTested} · `:''}${row.hints} questions with help · ${row.checkpoints} completed passage checks · last practised ${date(row.lastAt)}</small></li>`).join('')}</ul></details>`:''}
      <h3>This week</h3><p>${model.history.lessons} distinct sessions completed · ${model.history.vocabularyEncountered} vocabulary items practised · ${model.history.strengthened.length} items newly strong.</p>
      <details><summary>Vocabulary · ${seen.length} encountered / ${vocabulary.length} planned targets</summary><p>Recognition and typed recall are tracked separately. Tier 1–2 words receive ongoing review; genre words receive targeted review. Unfamiliar source-specific words remain local glosses.</p>${knowledgeTable(seen)}${roots.size?`<details><summary>Word families you have encountered</summary><ul class="la-family-list">${[...roots].map(([root,items])=>`<li>${arabic(root)} · ${items.map(v=>arabic(v.ar)).join('، ')} <small>${items.filter(v=>v.independentContexts>=2).length} recognised across contexts</small></li>`).join('')}</ul></details>`:''}</details>
      <details><summary>Literary constructions</summary>${knowledgeTable(Object.values(model.knowledge).filter(k=>k.kind==='construction'&&k.encounters))}</details>
      <details><summary>Reading skills</summary>${knowledgeTable(Object.values(model.knowledge).filter(k=>k.kind==='skill'&&k.encounters))}</details>
      <details><summary>Recent sessions and checkpoints</summary>${model.history.recent.length?`<ol class="la-history">${model.history.recent.map(s=>`<li>${sessionLink(ALL_SESSIONS.find(l=>l.id===s.lessonId),s.title)}<small>${date(s.at)} · ${s.complete?'Completed':'In progress'} · ${s.independent}/${s.tested} first answers without help · ${s.hints} help steps${s.translations?' · translation used':''}</small></li>`).join('')}</ol>`:'<p>No sessions recorded yet.</p>'}</details>
      ${oldRuns?`<p class="la-muted">${oldRuns} earlier lesson attempts remain saved. Revised lessons require fresh evidence; old completion is not imported as mastery.</p>`:''}
    </details>
    ${model.review.length?`<details class="la-review-due"><summary>${model.review.length} item${model.review.length===1?' is':'s are'} ready for review</summary><p>${model.review.slice(0,12).map(k=>k.ar?arabic(k.ar):esc(k.title)).join(' · ')}</p>${sessionLink(ALL_SESSIONS.find(l=>l.kind==='adaptive-review'),'Review due language',true)}</details>`:''}
    <div class="la-course-title"><h2>Your course</h2><p>6 stages · ${PUBLISHED_UNITS.length} published units · ${GUIDED_LESSONS.length} guided lessons, 12 reviews, 12 checkpoints and 6 cumulative readings.</p></div>
    <details class="la-placement-options"><summary>${placement?`Placement suggests Stage ${placement.stage}`:'Choose your starting point'}</summary><p>Use the short diagnostic or choose a stage yourself. Every published unit stays available.</p>${sessionLink(ALL_SESSIONS.find(l=>l.kind==='diagnostic'),'Take the placement check')}<div class="la-stage-choices">${LITERATURE_STAGES.map(s=>`<button class="la-text-button" data-action="literatureChooseStage" data-stage="${s.id}" aria-pressed="${stageId===s.id}">${s.id}. ${esc(s.title)}</button>`).join('')}</div></details>
    <div class="la-path">${LITERATURE_STAGES.map(stage=>{
      const units=PUBLISHED_UNITS.filter(u=>u.stage===stage.id),remaining=LITERATURE_UNITS.filter(u=>u.stage===stage.id&&!units.includes(u));
      return `<details class="la-stage la-course-stage" ${stage.id===stageId?'open':''}><summary><span class="la-stage-number">${stage.id}</span><span><strong>${esc(stage.title)}</strong><small>${esc(stage.description)}</small></span><span>${units.length} ${units.length===1?'unit':'units'}</span></summary>
      ${units.map(unit=>{const lessons=LITERATURE_LESSONS.filter(l=>l.unit===unit.id),done=lessons.filter(l=>model.completed.includes(l.id)).length;return `<details class="la-unit" ${next?.unit===unit.id?'open':''}><summary><span><strong>${esc(unit.title)}</strong><small>${esc(unit.objective)}</small></span><small>${done}/${lessons.length} sessions</small></summary><ol>${lessons.map(l=>`<li><a class="la-lesson-row" href="#/literature/lesson/${escAttr(l.id)}" data-action="openLiteratureLesson" data-literature-id="${escAttr(l.id)}"><span class="la-row-copy"><strong>${esc(l.title)}</strong><small>${esc(ARCHETYPES[l.archetype]?.title||'Practice')} · ${l.minutes} min${model.completed.includes(l.id)?' · Completed':latestRun(state.literature,l)?' · In progress':''}</small></span><span class="la-row-ar" lang="ar" dir="rtl">${esc(l.titleAr)}</span><span aria-hidden="true">${model.completed.includes(l.id)?'✓':'→'}</span></a></li>`).join('')}</ol></details>`;}).join('')}
      <p class="la-stage-challenge">${sessionLink(LITERATURE_LESSONS.find(l=>l.stage===stage.id&&l.kind==='cumulative'),'Cumulative reading · '+(model.completed.includes(`cumulative-stage-${stage.id}`)?'Completed':'Put it together'))}</p>
      <details class="la-planned"><summary>Curriculum ahead · ${remaining.length} units in authoring</summary><p>These units have learning objectives but no published lessons yet.</p><ul>${remaining.map(u=>`<li><strong>${esc(u.title)}</strong> — ${esc(u.objective)}</li>`).join('')}</ul></details></details>`;
    }).join('')}</div>
  </section>`;
}

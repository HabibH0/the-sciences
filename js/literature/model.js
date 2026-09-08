import { gradeLiterature, exerciseAttempts, runComplete, lessonSteps, CHOICE_TYPES, normalizeArabicAnswer } from './engine.js';

export const DAY = 86400000;
const sourceKey = lesson => lesson.source?.bookId ? `${lesson.source.bookId}/${lesson.source.chapterId}/${(lesson.source.sentenceIds || lesson.source.sentences?.map(s=>s.id) || []).join(',')}` : null;
const exerciseContext = (lesson, e, slot) => e.contextIds?.[slot] || e.contextId || normalizeArabicAnswer(e.arabic || (Array.isArray(e.answer) ? e.answer.map(i=>e.options[i]).join(' ') : sourceKey(lesson) || `${lesson.id}/${e.id}`));

// All aggregates are derived from immutable, synced attempts. A saved correct
// flag, progress bar or self-report is never accepted as mastery evidence.
export function learnerEvidence(lessons, progress) {
  const definitions = new Map(lessons.map(l=>[l.id,l]));
  const events = [], sessions = [], firstContextAt = new Map();
  for (const run of Object.values(progress?.runs || {})) {
    const lesson = definitions.get(run.lessonId);
    if (!lesson || lesson.revision !== run.revision) continue;
    const active = lessonSteps(lesson, run).filter(e=>e.targets);
    let tested = 0, independent = 0, transfer = 0, transferCorrect = 0, errors = 0;
    for (const e of active) {
      const attempts = exerciseAttempts(run,e).filter(a=>a.at >= run.startedAt);
      if (!attempts.length) continue;
      tested++;
      const first = attempts[0], last = attempts.at(-1), correct = gradeLiterature(e, first.answer);
      // Help on the same source contaminates later source questions, even if
      // the second question itself has no hint clicks.
      const sourceHelp = (e.useSource || ['decode','understand','assess'].includes(e.phase)) ? Math.max(0,...lesson.exercises.filter(x => !x.arabic && ['decode','understand','assess'].includes(x.phase)).map(x=>first.support?.[x.id] || 0)) : 0;
      const hints = Math.max(first.hints || 0, sourceHelp);
      const translation = e.support ? e.support.some((h,i)=>h.kind === 'translation' && hints > i) : e.source ? hints>=3 : sourceHelp >= 5;
      const independentAnswer = correct && hints === 0;
      if (independentAnswer) independent++;
      if (!correct) errors++;
      const isTransfer = e.phase === 'transfer' || e.assessment || e.transfer === true;
      if (isTransfer) { transfer++; if (independentAnswer) transferCorrect++; }
      const targets = [...new Set([...(e.targets || []), ...(e.skills || [])])];
      for (const target of targets) {
        const slot = e.targetSlots?.indexOf(target) ?? -1;
        const targetCorrect = slot >= 0 ? first.answer?.[slot] === e.answer[slot] : correct;
        const recovered = slot >= 0 ? last.answer?.[slot] === e.answer[slot] : gradeLiterature(e,last.answer);
        const context = exerciseContext(lesson,e,slot);
        const previous = firstContextAt.get(context);
        if (previous === undefined || first.at < previous) firstContextAt.set(context,first.at);
        events.push({ id:`${first.id}/${target}`, attemptId:first.id, target, context, at:first.at, lastAt:last.at,
          lessonId:lesson.id, runId:run.id, exerciseId:e.id, stage:e.level || lesson.stage, unit:lesson.unit,
          archetype:lesson.archetype, kind:lesson.kind, firstCorrect:targetCorrect, independent:targetCorrect && hints === 0,
          responseIndependent:independentAnswer, recovered, retries:attempts.length-1, hints, translation, transfer:isTransfer, checkpoint:e.assessment === true,
          productive:e.evidenceMode === 'productive' && e.type === 'typed_recall',
          arabicContext:e.type === 'typed_recall' || e.type === 'match_pairs' || /[\u0600-\u06ff]/.test(e.options?.[0] || ''),
          choice:CHOICE_TYPES.has(e.type), responseMs:first.responseMs || 0,
          sourceKey:e.source ? sourceKey({source:e.source}) : e.useSource || ['decode','understand','assess'].includes(e.phase) ? sourceKey(lesson) : null,
        });
      }
    }
    if (tested) sessions.push({id:run.id, lessonId:lesson.id, title:lesson.title, at:run.updatedAt, startedAt:run.startedAt, stage:lesson.stage, kind:lesson.kind, archetype:lesson.archetype, complete:runComplete(lesson,run), tested, independent, transfer, transferCorrect, errors, hints:Object.values(run.help).reduce((a,b)=>a+b,0), vocabularyHints:lesson.exercises.reduce((n,e)=>n + ((run.help[e.id] || 0) >= 2 && e.phase==='decode' ? 1:0),0), structuralHints:lesson.exercises.reduce((n,e)=>n + ((run.help[e.id] || 0) >= 3 && e.phase==='decode' ? 1:0),0), translations:lesson.exercises.filter(e=>e.support ? e.support.some((h,i)=>h.kind==='translation'&&(run.help[e.id]||0)>i) : e.source?(run.help[e.id]||0)>=3:(e.phase==='decode'||e.useSource)&&(run.help[e.id]||0)>=5).length});
  }
  events.sort((a,b)=>a.at-b.at || a.id.localeCompare(b.id));
  for (const event of events) {
    const archiveView = event.sourceKey && progress?.sourceViews?.[event.sourceKey.split('/').slice(0,2).join('/')];
    event.unseen = event.transfer && firstContextAt.get(event.context) === event.at && !(archiveView && archiveView <= event.at);
  }
  for (const session of sessions) {
    const novel = events.filter(e=>e.runId===session.id && e.unseen);
    session.unseenTested = new Set(novel.map(e=>e.attemptId)).size;
    session.unseenCorrect = new Set(novel.filter(e=>e.responseIndependent).map(e=>e.attemptId)).size;
  }
  return { events, sessions:sessions.sort((a,b)=>a.at-b.at) };
}

export function targetMastery(events, now = Date.now()) {
  const contexts = new Set(), independentContexts = new Set(), days = new Set(), productiveContexts = new Set();
  let score = 0, failures = 0, helped = 0, independent = 0, transfer = 0, retention = 0, interval = 0, dueAt = 0, lastAt = 0, lastFailureAt = 0, lastSuccessAt = 0;
  // One item cannot acquire ten successes by being repeated ten times today.
  const sessions = new Set();
  for (const e of events) {
    contexts.add(e.context);
    if (e.hints) helped++;
    if (!e.firstCorrect) { failures++; lastFailureAt = e.at; }
    const key = `${e.context}/${Math.floor(e.at/DAY)}`;
    const counts = !sessions.has(key);
    sessions.add(key);
    if (counts && e.independent) {
      independent++; independentContexts.add(e.context); days.add(Math.floor(e.at/DAY));
      if (e.productive) productiveContexts.add(e.context);
      if (e.unseen) transfer++;
      if (lastAt && e.at-lastAt >= 7*DAY) retention++;
      score += e.unseen ? 2 : e.arabicContext ? 1.2 : 0.6;
      lastSuccessAt = e.at;
      // One scheduling advance per day, irrespective of number of exercises.
      if (!lastAt || e.at-lastAt >= DAY*0.8) interval = interval ? Math.min(60, Math.max(3,interval*2.2)) : 1;
      dueAt = e.at + Math.max(1,interval)*DAY;
    } else if (!e.independent) {
      score = Math.max(0,score-(e.firstCorrect ? 0.2:1));
      interval = 0;
      dueAt = e.lastAt + (e.recovered ? DAY : 10*60*1000);
    }
    lastAt = Math.max(lastAt,e.lastAt);
  }
  const span = events.length ? (lastAt-events[0].at)/DAY : 0;
  const strong = independentContexts.size >= 3 && days.size >= 3 && transfer >= 1 && retention >= 1 && score >= 5;
  const mastered = strong && independentContexts.size >= 6 && days.size >= 5 && span >= 21 && retention >= 2 && transfer >= 2;
  const unresolved = lastFailureAt >= lastSuccessAt && lastFailureAt > 0;
  const status = !events.length ? 'New' : unresolved || (dueAt > 0 && dueAt <= now) ? 'Needs review' : mastered ? 'Mastered' : strong ? 'Strong' : independentContexts.size >= 2 ? 'Developing' : 'Learning';
  return {status, encounters:events.length, contexts:contexts.size, independentContexts:independentContexts.size, independent, failures, helped, transfer, retention, days:days.size, firstAt:events[0]?.at || 0, lastAt, dueAt, intervalDays:interval,
    receptive:independentContexts.size >= 2 ? 'Recognised across contexts' : independent ? 'Recognised independently' : helped ? 'Recognised with help' : events.length ? 'Introduced' : 'Unseen',
    productive:productiveContexts.size >= 3 && days.size >= 3 ? 'Developing recall' : productiveContexts.size ? 'Practised recall' : 'Not yet tested', productiveContexts:productiveContexts.size,
    priority:unresolved ? 100+failures : dueAt && now>=dueAt ? 20+Math.min(60,(now-dueAt)/DAY) : 0,
    rapidMedianMs:(()=>{const times=events.filter(e=>e.archetype==='rapid-recognition'&&e.independent&&e.responseMs>0&&e.responseMs<60000).map(e=>e.responseMs).sort((a,b)=>a-b);return times.length>=3?times[Math.floor(times.length/2)]:null;})(),
  };
}

export function courseProgress(lessons, items, progress, now = Date.now()) {
  const {events,sessions} = learnerEvidence(lessons,progress), byTarget = new Map();
  events.forEach(e=>{ if(!byTarget.has(e.target))byTarget.set(e.target,[]);byTarget.get(e.target).push(e); });
  const knowledge = Object.fromEntries(items.map(item=>[item.id,{...item,...targetMastery(byTarget.get(item.id)||[],now)}]));
  const completed = [...new Set(sessions.filter(s=>s.complete).map(s=>s.lessonId))];
  // Placement tests the ceiling as well as foundations. Unstudied diagnostic
  // mistakes recommend a starting stage; they do not create a revision backlog.
  const review = Object.values(knowledge).filter(k=>k.encounters && k.tier!==4 && k.dueAt<=now && byTarget.get(k.id)?.some(e=>e.kind!=='diagnostic')).sort((a,b)=>b.priority-a.priority || a.dueAt-b.dueAt || a.id.localeCompare(b.id));
  const testedSessions = sessions.filter(s=>!['adaptive-review','review','diagnostic'].includes(s.kind));
  const summarize = rows => rows.length ? {samples:rows.length, independent:Math.round(100*rows.reduce((n,s)=>n+s.independent,0)/rows.reduce((n,s)=>n+s.tested,0)), hints:rows.reduce((n,s)=>n+s.hints,0)/rows.length, translations:Math.round(100*rows.filter(s=>s.translations>0).length/rows.length), unseen:rows.reduce((n,s)=>n+s.unseenTested,0)?Math.round(100*rows.reduce((n,s)=>n+s.unseenCorrect,0)/rows.reduce((n,s)=>n+s.unseenTested,0)):null, stages:[...new Set(rows.map(s=>s.stage))]} : null;
  const recent = testedSessions.slice(-5), earlier = testedSessions.slice(-10,-5);
  const comprehension = events.filter(e=>e.target==='skill-comprehension' && e.kind!=='diagnostic');
  const comprehensionByStage = [...new Set(comprehension.map(e=>e.stage))].sort((a,b)=>a-b).map(stage=>{
    const rows=comprehension.filter(e=>e.stage===stage), recent=rows.slice(-10), earlier=rows.slice(-20,-10);
    return {stage,tested:recent.length,independent:recent.filter(e=>e.responseIndependent).length,
      earlierTested:earlier.length,earlierIndependent:earlier.filter(e=>e.responseIndependent).length,
      hints:recent.filter(e=>e.hints>0).length,lastAt:rows.at(-1).at,
      checkpoints:sessions.filter(s=>s.stage===stage&&s.complete&&['checkpoint','cumulative'].includes(s.kind)).length};
  });
  const recentEvents = events.filter(e=>e.at>=now-7*DAY);
  const strengthened = Object.keys(knowledge).filter(id=>{
    const past=(byTarget.get(id)||[]).filter(e=>e.at<now-7*DAY);
    return ['Strong','Mastered'].includes(knowledge[id].status) && !['Strong','Mastered'].includes(targetMastery(past,now-7*DAY).status);
  });
  return {events,sessions,knowledge,completed,review,comprehensionByStage,independence:{recent:summarize(recent),earlier:summarize(earlier)}, history:{lessons:[...new Set(sessions.filter(s=>s.complete&&s.at>=now-7*DAY).map(s=>s.lessonId))].length, vocabularyEncountered:[...new Set(recentEvents.filter(e=>knowledge[e.target]?.kind==='vocabulary').map(e=>e.target))].length, strengthened, recent:sessions.slice(-8).reverse()}};
}

export function placementRecommendation(lessons, progress) {
  const diagnostic = lessons.find(l=>l.kind==='diagnostic');
  if (!diagnostic) return null;
  const runs=Object.values(progress?.runs||{}).filter(r=>r.lessonId===diagnostic.id&&r.revision===diagnostic.revision).sort((a,b)=>b.startedAt-a.startedAt);
  const run=runs.find(r=>runComplete(diagnostic,r));
  if(!run)return null;
  const scores = Array.from({length:6},(_,i)=>{const rows=diagnostic.exercises.filter(e=>e.level===i+1);const passed=rows.filter(e=>{const a=exerciseAttempts(run,e)[0];return a&&gradeLiterature(e,a.answer)&&a.hints===0;}).length;return {stage:i+1,correct:passed,total:rows.length};});
  let stage=1;
  // A ceiling result alone cannot skip missing foundations.
  for(const row of scores){if(row.total && row.correct/row.total>=0.67)stage=Math.min(6,row.stage+1);else break;}
  return {stage,scores,at:run.updatedAt};
}

export function recommendSession(lessons, progress, model, placement) {
  const override=progress?.preferences?.stage;
  const current = Object.values(progress?.runs||{}).sort((a,b)=>b.updatedAt-a.updatedAt).map(r=>({r,l:lessons.find(l=>l.id===r.lessonId&&l.revision===r.revision)})).find(({r,l})=>l&&!runComplete(l,r)&&(!override||l.stage===override||l.adaptive)&&!(override&&l.kind==='diagnostic'));
  if(current)return {lesson:current.l,reason:'Continue where you left off'};
  const daily=lessons.find(l=>l.kind==='adaptive-review');
  if(model.review.length && daily)return {lesson:daily,reason:`Review ${model.review.length} due language items`};
  if(!placement && !progress?.preferences?.stage && !model.completed.length)return {lesson:lessons.find(l=>l.kind==='diagnostic'),reason:'Find a useful starting point'};
  const stage=progress?.preferences?.stage || placement?.stage || 1;
  const available=lessons.filter(l=>!['diagnostic','adaptive-review'].includes(l.kind) && !model.completed.includes(l.id) && l.stage>=stage);
  // A published checkpoint follows its unit's lessons/review in course order.
  const next=available[0];
  return next ? {lesson:next,reason:next.kind==='checkpoint'?'Try your unit mastery check':next.kind==='cumulative'?'Read a cumulative passage':next.kind==='review'?'Consolidate this unit':`Continue ${next.unitTitle || 'your course'}`} : {lesson:daily,reason:'Keep the language familiar with a review'};
}

export function selectReviewExercises(lesson, model, now=Date.now(), limit=8) {
  const latest = new Map(model.events.map(e=>[e.context,e.at]));
  const used=new Set(), covered=new Set(), selected=[];
  const candidates=model.review.length ? model.review : Object.values(model.knowledge).filter(k=>k.encounters).sort((a,b)=>a.dueAt-b.dueAt);
  for(const item of candidates){
    const choices=lesson.exercises.filter(e=>(e.targets.includes(item.id)||e.skills?.includes(item.id))&&!used.has(e.id)&&!e.targets.some(id=>covered.has(id)));
    choices.sort((a,b)=>(latest.get(a.contextId)||0)-(latest.get(b.contextId)||0)||a.id.localeCompare(b.id));
    if(choices[0]){selected.push(choices[0].id);used.add(choices[0].id);choices[0].targets.forEach(id=>covered.add(id));}
    if(selected.length>=limit)break;
  }
  return selected.length?selected:lesson.flow.slice(0,limit);
}

// Coverage refers to curated lexical targets only, never all running tokens.
export function lexicalCoverage(lesson, knowledge) {
  const ids=[...new Set((lesson.vocabulary||[]).map(v=>v.id))];
  if(!ids.length)return null;
  const known=ids.filter(id=>['Strong','Mastered'].includes(knowledge[id]?.status)).length;
  const learning=ids.filter(id=>knowledge[id]?.encounters && !['Strong','Mastered'].includes(knowledge[id]?.status)).length;
  return {total:ids.length, known, learning, unknown:ids.length-known-learning};
}

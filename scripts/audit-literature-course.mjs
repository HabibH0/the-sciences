import {writeFile} from 'node:fs/promises';
import {ALL_SESSIONS,GUIDED_LESSONS,LITERATURE_LESSONS,LITERATURE_STAGES,LITERATURE_UNITS,PUBLISHED_UNITS,LEARNING_ITEMS,loadLiteratureLesson} from '../content-lit/learning/index.js';
import {LEXICON} from '../content-lit/learning/lexicon.js';
import {CONSTRUCTION_BANK} from '../content-lit/learning/construction-bank.js';
import {CHOICE_TYPES,validateLiteratureLesson} from '../js/literature/engine.js';

export async function auditCourse() {
  const errors=[],warnings=[],known=new Set(LEARNING_ITEMS.map(i=>i.id));
  const contexts=new Map(LEXICON.map(v=>[v.id,new Set()])), exposures=new Map(LEXICON.map(v=>[v.id,new Set()])), reviewed=new Set();
  const sequences=new Map(),sourceUse=new Map(),stageGrowth=[],unitGrowth=[],introduced=new Set();
  const sourceIds=ref=>ref?.sentenceIds?.map(id=>`${ref.bookId}/${ref.chapterId}/${id}`)||[];
  for(const d of ALL_SESSIONS) {
    const l=await loadLiteratureLesson(d.id);errors.push(...validateLiteratureLesson(l,known));
    for(const key of sourceIds(d.source)) {
      if(!sourceUse.has(key))sourceUse.set(key,[]);sourceUse.get(key).push({id:d.id,reserved:!!d.reserved});
    }
    for(const e of d.exercises) {
      for(const key of sourceIds(e.source)) {
        if(!sourceUse.has(key))sourceUse.set(key,[]);sourceUse.get(key).push({id:d.id,reserved:!!e.reserved});
      }
      if(!e.skills?.length)errors.push(`${d.id}/${e.id}: no transferable skill`);
      for(const target of e.targets) {
        if(contexts.has(target)) {
          const slot=e.targetSlots?.indexOf(target);
          contexts.get(target).add(e.contextIds?.[slot]||e.contextId||e.arabic||`${d.id}/${e.id}`);
          if(d.kind!=='adaptive-review')exposures.get(target).add(d.id);
          if(['review','adaptive-review'].includes(d.kind)||e.phase==='review')reviewed.add(target);
        }
      }
    }
    if(d.kind==='lesson') {
      const sequence=d.flow.map(id=>d.exercises.find(e=>e.id===id)?.type||id).join(' → ');
      const previous=sequences.get(sequence)||[];previous.push(d.id);sequences.set(sequence,previous);
      const first=d.vocabulary.map(v=>v.id).filter(id=>!introduced.has(id));first.forEach(id=>introduced.add(id));
      if(first.length> (d.archetype==='vocabulary-immersion'?15:7))warnings.push(`${d.id}: ${first.length} newly introduced words`);
    }
  }
  for(const [key,uses] of sourceUse)if(uses.some(u=>u.reserved)&&new Set(uses.map(u=>u.id)).size>1)errors.push(`Reserved source reused: ${key}: ${uses.map(u=>u.id).join(', ')}`);
  for(const [sequence,ids] of sequences)if(ids.length>1)warnings.push(`Repeated exercise sequence: ${ids.join(', ')}`);
  for(let i=2;i<GUIDED_LESSONS.length;i++)if(GUIDED_LESSONS.slice(i-2,i+1).every(l=>l.archetype===GUIDED_LESSONS[i].archetype))warnings.push(`Three consecutive ${GUIDED_LESSONS[i].archetype} lessons ending ${GUIDED_LESSONS[i].id}`);
  let cumulative=new Set();
  for(const stage of LITERATURE_STAGES) {
    const words=new Set(GUIDED_LESSONS.filter(l=>l.stage===stage.id).flatMap(l=>l.vocabulary.map(v=>v.id)));
    const novel=[...words].filter(v=>!cumulative.has(v));words.forEach(v=>cumulative.add(v));
    stageGrowth.push({stage:stage.id,newTargets:novel.length,cumulativeTargets:cumulative.size});
    if(novel.length<10)warnings.push(`Stage ${stage.id}: weak lexical growth (${novel.length})`);
  }
  for(const unit of PUBLISHED_UNITS) {
    const rows=LITERATURE_LESSONS.filter(l=>l.unit===unit.id),words=new Set(rows.flatMap(l=>l.vocabulary.map(v=>v.id)));
    const practice=rows.filter(l=>l.kind==='lesson');
    if(!rows.some(l=>l.kind==='review'))errors.push(`${unit.id}: missing review`);
    if(!rows.some(l=>l.kind==='checkpoint'))errors.push(`${unit.id}: missing unseen checkpoint`);
    const under=[...words].filter(id=>(exposures.get(id)?.size||0)<2);
    if(under.length)warnings.push(`${unit.id}: under-reinforced items ${under.join(', ')}`);
    unitGrowth.push({unit:unit.id,lessons:practice.length,targetVocabulary:words.size,plannedTestedExposures:[...words].reduce((n,id)=>n+(exposures.get(id)?.size||0),0),underReinforced:under});
  }
  const distribution={};GUIDED_LESSONS.forEach(l=>distribution[l.archetype]=(distribution[l.archetype]||0)+1);
  const mostlyChoice=GUIDED_LESSONS.filter(l=>l.exercises.filter(e=>CHOICE_TYPES.has(e.type)).length/l.exercises.length>0.5);
  const arabicDominant=GUIDED_LESSONS.filter(l=>l.exercises.filter(e=>!/[a-zA-Z]{3}/.test(e.prompt)).length/l.exercises.length>=0.6);
  if(mostlyChoice.length/GUIDED_LESSONS.length>0.4)warnings.push('More than 40% of lessons are mostly multiple choice');
  for(const v of LEXICON) {
    if(!reviewed.has(v.id))errors.push(`Never reviewed: ${v.id}`);
    if(new Set(v.examples.map(e=>e.text)).size!==v.examples.length)errors.push(`Repeated lexical contexts: ${v.id}`);
    if(exposures.get(v.id).size<2)warnings.push(`Vocabulary appears in only one lesson/session: ${v.id}`);
  }
  const summary={stages:LITERATURE_STAGES.length,units:{plannedArchitecture:LITERATURE_UNITS.length,published:PUBLISHED_UNITS.length,inAuthoring:LITERATURE_UNITS.length-PUBLISHED_UNITS.length},guidedLessons:GUIDED_LESSONS.length,publishedCourseSessions:LITERATURE_LESSONS.length,totalIncludingPlacementAndAdaptiveReview:ALL_SESSIONS.length,lessonArchetypes:Object.keys(distribution).length,archetypeDistribution:distribution,allSessionArchetypes:new Set(ALL_SESSIONS.map(l=>l.archetype)).size,uniqueTargetVocabulary:LEXICON.length,curatedLexicalContexts:LEXICON.reduce((n,v)=>n+v.examples.length,0),vocabularyWith2PlusSessionExposures:[...exposures.values()].filter(v=>v.size>=2).length,vocabularyWith3PlusSessionExposures:[...exposures.values()].filter(v=>v.size>=3).length,vocabularyWith5PlusSessionExposures:[...exposures.values()].filter(v=>v.size>=5).length,wordsIntroducedButNeverReviewed:LEXICON.filter(v=>!reviewed.has(v.id)).map(v=>v.id),constructionsTracked:LEARNING_ITEMS.filter(i=>i.kind==='construction').length,constructionRepairExamples:CONSTRUCTION_BANK.reduce((n,c)=>n+c.examples.length,0),skillsTracked:LEARNING_ITEMS.filter(i=>i.kind==='skill').length,reviewSessions:LITERATURE_LESSONS.filter(l=>l.kind==='review').length,adaptiveReview:1,masteryChecks:LITERATURE_LESSONS.filter(l=>l.kind==='checkpoint').length,unseenAssessments:LITERATURE_LESSONS.filter(l=>['checkpoint','cumulative'].includes(l.kind)).length,fullPassageChallenges:LITERATURE_LESSONS.filter(l=>l.kind==='cumulative').length,averageNewVocabularyPerGuidedLesson:Number((LEXICON.length/GUIDED_LESSONS.length).toFixed(2)),mostlyMultipleChoiceLessonPercent:Number((100*mostlyChoice.length/GUIDED_LESSONS.length).toFixed(1)),arabicDominantLessons:arabicDominant.length,explicitArabicLessonFlows:GUIDED_LESSONS.filter(l=>l.language==='ar'||l.archetype==='arabic-only').length,transferExercises:GUIDED_LESSONS.flatMap(l=>l.exercises).filter(e=>e.phase==='transfer').length,sourceSentences:new Set([...sourceUse.keys()]).size,distinctActivitySequences:sequences.size,stageGrowth,unitGrowth,errors,warnings,
    countingNotes:['Published units contain four guided lessons, review and a reserved checkpoint. Each stage also has a cumulative reading.','Exposure counts are planned sessions containing an actual target-bearing activity; the adaptive bank is excluded from these session counts.','432 lexical examples and 86 construction repairs are authored practice, not attributed quotations.','Strong vocabulary is learner-specific and requires delayed evidence; 144 targets is not a claim of 144 acquired words.','Units in authoring have objectives but do not count as published content.']};
  return summary;
}
if(process.argv[1]?.replaceAll('\\','/').endsWith('audit-literature-course.mjs')) {
  const audit=await auditCourse();await writeFile('content-lit/learning/course-audit.json',JSON.stringify(audit,null,2)+'\n');
  console.log(JSON.stringify(audit,null,2));if(audit.errors.length)process.exitCode=1;
}

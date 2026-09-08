import assert from 'node:assert/strict';
import { ALL_SESSIONS, GUIDED_LESSONS, LEARNING_ITEMS, PUBLISHED_UNITS, DAILY_REVIEW, PLACEMENT, loadLiteratureLesson, LITERATURE_STAGES } from '../content-lit/learning/index.js';
import { createLiteratureRun, updateLiteratureRun, currentLiteratureStep, gradeLiterature, runComplete, normalizeLiterature, mergeLiterature, validateLiteratureLesson, reconcileLiteratureRun, lessonSteps, emptyLiterature, recordLiteratureSourceView } from '../js/literature/engine.js';
import { courseProgress, targetMastery, learnerEvidence, placementRecommendation, recommendSession, selectReviewExercises, DAY } from '../js/literature/model.js';
import { literatureLessonHtml, literatureHomeHtml } from '../js/literature/render.js';
import { mergeProgressData } from '../js/storage/syncClient.js';
import { navFromHash, hashForState } from '../js/nav.js';
import { LEXICON } from '../content-lit/learning/lexicon.js';

let clock=Date.UTC(2026,0,1), serial=0, rendered=0, tested=0;
const saved=emptyLiterature(),targets=new Set(LEARNING_ITEMS.map(i=>i.id));
const change=(l,r,a,v)=>updateLiteratureRun(l,r,a,v,++clock,`attempt-${++serial}`);
const html=(l,r)=>{const renderedHtml=literatureLessonHtml({view:'litLesson',literatureLessonId:l.id,literature:{...emptyLiterature(),runs:{[r.id]:r}},completed:{}});assert(!renderedHtml.includes('undefined'),l.id);rendered++;return renderedHtml;};
function answer(l,r,step,value=step.answer) {
  if(step.type==='typed_recall')return change(l,r,'text',value);
  for(const val of Array.isArray(value)?value:[value])r=change(l,r,'select',val);
  return r;
}
for(const definition of ALL_SESSIONS) {
  const l=await loadLiteratureLesson(definition.id);
  assert.deepEqual(validateLiteratureLesson(l,targets),[]);
  assert.deepEqual(navFromHash(hashForState({view:'litLesson',literatureLessonId:l.id})),{view:'litLesson',literatureLessonId:l.id,litHome:true});
  let r=createLiteratureRun(l,`run-${l.id}`,++clock,l.adaptive?l.flow:[]);
  html(l,r);
  const limit=lessonSteps(l,r).length*3;
  for(let n=0;currentLiteratureStep(l,r).step;n++) {
    assert(n<limit,`No infinite progression: ${l.id}`);
    const {step}=currentLiteratureStep(l,r);
    if(['orientation','clean'].includes(step.type)) {r=change(l,r,'acknowledge',step.type==='clean'?'independent':'ready');continue;}
    tested++;
    const before=r.position;r=change(l,r,'next');assert.equal(r.position,before,'Unanswered steps cannot be skipped');
    if(step.phase==='decode')r=change(l,r,'reveal');
    html(l,r);
    // Wrong then correct is still failure on the first attempt. Assessments
    // record wrong first attempts and allow continuation without forced success.
    const wrong=step.type==='typed_recall'?'جواب مختلف':Array.isArray(step.answer)?[...step.answer].reverse():(step.answer+1)%step.options.length;
    if(!gradeLiterature(step,wrong)) {
      r=answer(l,r,step,wrong);r=change(l,r,'check');html(l,r);
      assert.equal(r.attempts.at(-1).answer instanceof Array,Array.isArray(wrong));
      if(step.assessment){r=change(l,r,'next');continue;}
      const first=JSON.stringify(r.attempts);r=change(l,r,'retry');assert.equal(JSON.stringify(r.attempts),first);
    }
    r=answer(l,r,step);r=change(l,r,'check');assert(html(l,r).includes('is-correct'));
    const restored=normalizeLiterature(JSON.parse(JSON.stringify({runs:{[r.id]:r}}))).runs[r.id];
    assert.deepEqual(restored,r,'JSON refresh must preserve all evidence and input');
    r=change(l,reconcileLiteratureRun(l,restored),'next');
  }
  assert(runComplete(l,r));html(l,r);saved.runs[r.id]=r;clock+=DAY;
}
assert.equal(LITERATURE_STAGES.length,6);assert.equal(PUBLISHED_UNITS.length,12);assert.equal(GUIDED_LESSONS.length,48);
assert.equal(LEARNING_ITEMS.filter(i=>i.kind==='vocabulary').length,144);
const model=courseProgress(ALL_SESSIONS,LEARNING_ITEMS,saved,clock);
assert(model.review.length>0);assert(!Object.values(model.knowledge).some(k=>k.status==='Mastered'),'Corrected answers cannot manufacture mastery');
assert(literatureHomeHtml({literature:saved}).includes('Reading independence'));
assert(placementRecommendation(ALL_SESSIONS,saved).stage===1,'Failed placement should recommend foundations');
assert(recommendSession(ALL_SESSIONS,saved,model,placementRecommendation(ALL_SESSIONS,saved)).lesson===DAILY_REVIEW);
const selection=selectReviewExercises(DAILY_REVIEW,model,clock);
assert(selection.length>0&&selection.length<=8);assert.equal(new Set(selection).size,selection.length);
assert(selection.every(id=>DAILY_REVIEW.exercises.some(e=>e.id===id)));
assert.deepEqual(mergeLiterature(saved,saved),saved,'Idempotent merge');
const a=structuredClone(saved),b=structuredClone(saved);const firstId=Object.keys(a.runs)[0];
b.runs[firstId].attempts.push({...b.runs[firstId].attempts[0],id:'remote-new-attempt',at:++clock});
b.preferences={stage:4,updatedAt:clock};
assert.deepEqual(mergeLiterature(a,b),mergeLiterature(b,a),'Commutative merge preserves independent device writes');
const merged=mergeProgressData({litProgress:{'qiraah-v1/ch1':{done:true}},literature:a},{literature:b});
assert(merged.litProgress['qiraah-v1/ch1'].done);assert.equal(merged.literature.preferences.stage,4);
assert(merged.literature.runs[firstId].attempts.some(a=>a.id==='remote-new-attempt'));
assert.deepEqual(normalizeLiterature(JSON.parse('{"runs":{"__proto__":{"lessonId":"x"},"constructor":{"lessonId":"x"}}}')).runs,{});

// Strong evidence requires separate contexts, days and actual delayed retention.
const event=(context,day,extra={})=>({context,at:day*DAY,lastAt:day*DAY,independent:true,firstCorrect:true,recovered:true,hints:0,unseen:true,arabicContext:true,productive:false,...extra});
assert.equal(targetMastery([event('a',1)],DAY).status,'Learning');
assert.notEqual(targetMastery(Array.from({length:30},()=>event('a',1)),DAY).status,'Strong');
assert.equal(targetMastery([event('a',1),event('b',2),event('c',10)],10*DAY).status,'Strong');
assert.equal(targetMastery([event('a',1),event('b',2),event('c',10)],40*DAY).status,'Needs review');
assert.equal(targetMastery([event('a',1),event('b',2),event('c',10),event('d',18),event('e',24),event('f',32)],32*DAY).status,'Mastered');
const failed=targetMastery([event('a',1),event('b',2),event('c',10),event('d',11,{independent:false,firstCorrect:false,recovered:false})],11*DAY);
assert.equal(failed.status,'Needs review');assert.equal(failed.productive,'Not yet tested');
assert(targetMastery([event('a',1,{productive:true})],DAY).productive==='Practised recall');
assert(gradeLiterature({type:'typed_recall',answer:'مَكْتُوبٌ'},'مكتوب'));
assert(!gradeLiterature({type:'typed_recall',answer:'مَكْتُوبٌ'},'كاتب'));

// Every published lexical target has enough real authored contexts to reach
// Strong after independent delayed review. Three clicks today still cannot.
const retentionProgress=emptyLiterature();
for (const word of LEXICON) {
  const firstLesson=GUIDED_LESSONS.find(l=>l.exercises.some(e=>e.contextId===`lex-${word.id}-0`||e.contextIds?.includes(`lex-${word.id}-0`)));
  assert(firstLesson,`${word.id}: initial context exists`);
  const firstExercise=firstLesson.exercises.find(e=>e.contextId===`lex-${word.id}-0`||e.contextIds?.includes(`lex-${word.id}-0`));
  const pairs=[[firstLesson,firstExercise,1],...[1,2].map((n)=>[DAILY_REVIEW,DAILY_REVIEW.exercises.find(e=>e.id===`lex-${word.id}-${n}`),n===1?2:10])];
  for(const [l,e,day] of pairs) {
    const run=createLiteratureRun(l,`retention-${word.id}-${day}`,day*DAY,l.adaptive?[e.id]:[]);
    run.attempts=[{id:`retention-answer-${word.id}-${day}`,exerciseId:e.id,at:day*DAY+1000,answer:e.answer,hints:0,support:{},responseMs:1000}];
    run.updatedAt=day*DAY+1000;retentionProgress.runs[run.id]=run;
  }
}
const retained=courseProgress(ALL_SESSIONS,LEARNING_ITEMS,retentionProgress,10*DAY+2000);
assert.equal(LEXICON.filter(v=>retained.knowledge[v.id].status==='Strong').length,144,'All targets can become strong through actual delayed contexts');

// Partial matching gives evidence only to the pairs actually matched correctly.
const matchLesson=await loadLiteratureLesson('daily-vocabulary');
const match=matchLesson.exercises.find(e=>e.type==='match_pairs');
let mr=createLiteratureRun(matchLesson,'partial-match',clock);
mr.attempts=[{id:'partial-answer',exerciseId:match.id,at:clock+1,answer:match.answer.map((v,i)=>i===0?1:i===1?0:v),hints:0,support:{},responseMs:1000}];
const me=learnerEvidence([matchLesson],{runs:{[mr.id]:mr}}).events;
assert(!me.find(e=>e.target===match.targetSlots[0]).independent);
assert(me.find(e=>e.target===match.targetSlots[2]).independent);

// A diagnostic is retrievable after reload, and a perfect placement reaches 6.
const diagnostic=await loadLiteratureLesson(PLACEMENT.id);let pr=createLiteratureRun(diagnostic,'perfect-placement',clock);
pr.acknowledged.orientation='ready';pr.attempts=diagnostic.exercises.map((e,i)=>({id:`diagnostic-${i}`,exerciseId:e.id,at:clock+i+1,answer:e.answer,hints:0,support:{},responseMs:1000}));
assert.equal(placementRecommendation(ALL_SESSIONS,{runs:{[pr.id]:pr}}).stage,6);
const placementOnly={runs:{[pr.id]:pr}};
assert.equal(recommendSession(ALL_SESSIONS,placementOnly,courseProgress(ALL_SESSIONS,LEARNING_ITEMS,placementOnly,clock+DAY),placementRecommendation(ALL_SESSIONS,placementOnly)).lesson.stage,6);
const exposure = recordLiteratureSourceView({runs:{[pr.id]:pr}},'qiraah-v1','ch19',clock-1);
const exposed = learnerEvidence([diagnostic],exposure).events;
assert(!exposed.find(e=>e.exerciseId==='placement-1').unseen,'Opening the archive excludes later answers from unseen evidence');
assert(exposed.find(e=>e.exerciseId==='placement-2').unseen,'Other source passages stay unexposed');
assert.equal(Object.keys(exposure.runs).length,1,'Reading creates no successful run');
const laterExposure = recordLiteratureSourceView(exposure,'qiraah-v1','ch19',clock+100);
assert.equal(laterExposure.sourceViews['qiraah-v1/ch19'],clock-1,'Preserve the first exposure');
assert.deepEqual(mergeLiterature(exposure,laterExposure),mergeLiterature(laterExposure,exposure));
assert.equal(normalizeLiterature({sourceViews:{'__proto__/x':1}}).sourceViews['__proto__/x'],undefined);
pr.attempts[0].hints=1;assert.equal(placementRecommendation(ALL_SESSIONS,{runs:{[pr.id]:pr}}).stage,1);
const placementModel=courseProgress(ALL_SESSIONS,LEARNING_ITEMS,placementOnly,clock+DAY);
assert.equal(placementModel.review.length,0,'Placement alone cannot create a review backlog of unstudied language');
assert.equal(recommendSession(ALL_SESSIONS,placementOnly,placementModel,placementRecommendation(ALL_SESSIONS,placementOnly)).lesson.id,'early-morning');
console.log(`Literature course verified: ${ALL_SESSIONS.length} sessions, ${tested} activity states, ${rendered} renders. Progression, failure, placement, retention, partial evidence, review selection, refresh and sync passed.`);

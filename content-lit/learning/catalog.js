import { LESSONS as LEGACY } from './lessons.js';
import { EXTENDED_LESSONS } from './extended-lessons.js';
import { CHECKPOINTS, CUMULATIVE, PLACEMENT } from './assessments.js';
export { PLACEMENT } from './assessments.js';
import { LITERATURE_UNITS, LEGACY_PLANS, TYPE_SKILLS, SKILLS } from './curriculum.js';
import { LEXICON, LEXICON_BY_ID, unitVocabulary, vocabularyMatch, vocabularyRecall } from './lexicon.js';
import { CONSTRUCTION_BANK } from './construction-bank.js';
import { choice, order, recall } from './activities.js';

const unique = rows => [...new Map(rows.map(row=>[row.id,row])).values()];
function enrichExercise(exercise, lesson) {
  return { ...exercise, language:lesson.language, skills: exercise.skills || (TYPE_SKILLS[exercise.type] || []).map(id=>`skill-${id}`),
    contextId:exercise.contextId || (exercise.phase==='transfer' ? `transfer-${lesson.id}-${exercise.id}` : undefined),
    provenance:exercise.provenance || (exercise.phase==='transfer' ? 'authored-practice' : 'source-study'),
  };
}
function legacyLesson(raw) {
  const [stage,unit,archetype,plan] = LEGACY_PLANS[raw.id];
  const exercises = raw.exercises.map(e=>({...e}));
  const ids = new Set(exercises.map(e=>e.id));
  // Early authoring modules use numeric transfer IDs; the original modules use
  // named ones. Resolve only those two explicit historical naming conventions.
  const remap = id => ids.has(id)||id==='clean'?id:id==='transfer-1'?'transfer-build':id==='transfer-2'?'transfer-meaning':id;
  const flow = plan.filter(id=>id!=='phrase').map(remap);
  const selected = exercises.filter(e=>flow.includes(e.id));
  const lesson = {...raw,revision:2,stage,unit,archetype,kind:'lesson',flow,exercises:selected};
  if(raw.id==='until-the-moment') {
    const boundary={id:'condition-boundary',type:'clause_boundary',phase:'notice',prompt:'Select the word after which the time condition ends and the response begins.',options:['حَتَّى','إِذَا','انْتَهَى','الْوَقْتُ','وَضُرِبَ','الْجَرَسُ','خَرَجْتُ','مِنَ','الْمَدْرَسَةِ'],answer:[5],targets:['hatta-idha'],hint:'خَرَجْتُ is the action that follows the completed time condition.',explanation:'The condition ends at الْجَرَسُ. خَرَجْتُ begins its outcome.'};
    lesson.exercises.push(boundary);lesson.flow.splice(lesson.flow.indexOf('decode'),0,boundary.id);
  }
  // Real rapid practice consists of several short decisions, not the same long
  // passage with a speed label. Timing is recorded without a punitive timer.
  if(archetype==='rapid-recognition') {
    const rapid = [
      ['rapid-before','جَاءَ قَبْلَ الْغُرُوبِ.','هَلْ كَانَتِ الشَّمْسُ قَدْ غَرَبَتْ؟','لَا','نَعَمْ','قبل puts arrival before sunset.','before'],
      ['rapid-after','قَرَأَ ثُمَّ نَامَ.','أَيُّ الْفِعْلَيْنِ أَوَّلٌ؟','قَرَأَ','نَامَ','ثم puts sleep after reading.','thumma-sequence'],
      ['rapid-duration','مَكَثَ ثَلَاثَ سَاعَاتٍ.','هَلْ ثَلَاثٌ وَقْتُ السَّاعَةِ؟','لَا، هِيَ مُدَّةٌ.','نَعَمْ، السَّاعَةُ الثَّالِثَةُ.','The phrase measures duration.','duration'],
      ['rapid-wait','اِنْتَظَرَ حَتَّى وَصَلَ أَخُوهُ.','مَا حَدُّ الِانْتِظَارِ؟','وُصُولُ أَخِيهِ','خُرُوجُ أَخِيهِ','حتى names the endpoint.','time-until'],
    ].map(([id,ar,prompt,a,b,feedback,target])=>choice(id,'rapid_recognition','notice',ar,prompt,[[a,feedback],[b,feedback]],target,feedback));
    lesson.exercises.push(...rapid);lesson.flow.splice(2,0,...rapid.map(e=>e.id));
  }
  if(archetype==='arabic-only') {
    lesson.language='ar';
    if(raw.id==='some-days') {
      lesson.context='نَفْهَمُ الْفَرْقَ بَيْنَ بَعْضِ الْأَيَّامِ وَكُلِّ يَوْمٍ.';
      lesson.objectives=[{id:'frequency',text:'فَهْمُ بَعْضِ الْأَيَّامِ وَأَحْيَانًا وَالتَّمْيِيزُ بَيْنَهُمَا وَبَيْنَ دَائِمًا.'}];
      lesson.support={vocabulary:'أَمْكُثُ: أَبْقَى.',structure:'فِي بَعْضِ الْأَيَّامِ تُحَدِّدُ وَقْتَ الْمُكْثِ.',paraphrase:'أَبْقَى فِي الْبَيْتِ أَحْيَانًا.',explanation:'بَعْضُ الْأَيَّامِ لَيْسَتْ كُلَّ الْأَيَّامِ.'};
      lesson.exercises=[
        choice('frequency','choose_meaning','decode','','هَلْ يَمْكُثُ فِي الْبَيْتِ كُلَّ يَوْمٍ؟',[['لَا، فِي بَعْضِ الْأَيَّامِ.','بَعْضٌ لَيْسَتْ كُلًّا.'],['نَعَمْ، كُلَّ يَوْمٍ.','النَّصُّ يَقُولُ بَعْضِ الْأَيَّامِ.']], 'some-days','اُنْظُرْ إِلَى بَعْضِ.'),
        order('restore','manipulate','رَتِّبْ: الزَّمَنُ أَوَّلًا ثُمَّ الْفِعْلُ وَالْمَكَانُ.',['فِي بَعْضِ الْأَيَّامِ','أَمْكُثُ','فِي الْبَيْتِ'],['some-days','stay'],'بَعْضُ الْأَيَّامِ زَمَنُ الْمُكْثِ.'),
        recall('new-frequency','transfer','أَزُورُ صَدِيقِي أَحْيَانًا.','أَكْمِلْ بِمَعْنَى أَحْيَانًا: فِي … الْأَيَّامِ.','بعض','some-days','أَحْيَانًا = فِي بَعْضِ الْأَوْقَاتِ.','أَحْيَانًا لَا تَعْنِي دَائِمًا.'),
        vocabularyRecall(LEXICON_BY_ID.get('stay'),2,'transfer'),
      ];
    } else {
      lesson.context='نَمَيِّزُ بَيْنَ قِلَّةِ الثَّمَنِ وَنَظَافَةِ الثَّوْبِ.';
      lesson.objectives=[{id:'contrast',text:'فَهْمُ الْمُقَابَلَةِ بِلَكِنَّ وَالْفَرْقِ بَيْنَ الثَّمَنِ وَالنَّظَافَةِ.'}];
      lesson.support={vocabulary:'رَخِيصَةٌ: قَلِيلَةُ الثَّمَنِ.',structure:'هَا تَعُودُ إِلَى الثِّيَابِ.',paraphrase:'الثِّيَابُ قَلِيلَةُ الثَّمَنِ وَهِيَ نَظِيفَةٌ.',explanation:'لَا يَلْزَمُ مِنْ قِلَّةِ الثَّمَنِ أَنْ يَكُونَ الثَّوْبُ وَسِخًا.'};
      lesson.exercises=[
        choice('contrast','arabic_paraphrase','decode','','هَلِ الثِّيَابُ الرَّخِيصَةُ وَسِخَةٌ فِي النَّصِّ؟',[['لَا، هِيَ نَظِيفَةٌ.','لَكِنَّهَا تَصِلُ بَيْنَ وَصْفَيْنِ مُخْتَلِفَيْنِ.'],['نَعَمْ، هِيَ وَسِخَةٌ.','رَخِيصَةٌ تَصِفُ الثَّمَنَ فَقَطْ.']], ['lakin-contrast','inexpensive'],'الثَّمَنُ لَيْسَ هُوَ النَّظَافَةَ.'),
        order('restore','manipulate','اِبْدَأْ بِالثَّمَنِ ثُمَّ الْمُقَابَلَةِ.',['الثِّيَابُ رَخِيصَةٌ','وَلَكِنَّهَا','نَظِيفَةٌ'],['lakin-contrast','pronoun-ha'],'هَا تَعُودُ إِلَى الثِّيَابِ.'),
        recall('new-contrast','transfer','الْبَيْتُ صَغِيرٌ وَ… جَمِيلٌ.','أَكْمِلْ بِأَدَاةِ الْمُقَابَلَةِ وَضَمِيرِ الْبَيْتِ.','لكنه','lakin-contrast','لَكِنَّ + هُ','الْبَيْتُ صَغِيرٌ وَلَكِنَّهُ جَمِيلٌ.'),
        vocabularyRecall(LEXICON_BY_ID.get('inexpensive'),2,'transfer'),
      ];
    }
    lesson.flow=lesson.exercises.map(e=>e.id).concat('clean');
  }
  return lesson;
}
const guided = [...LEGACY.map(legacyLesson),...EXTENDED_LESSONS];
export const GUIDED_LESSONS = [];
export const COURSE_LESSONS = [];
for(const unit of LITERATURE_UNITS) {
  const lessons=guided.filter(l=>l.unit===unit.id);
  if(!lessons.length)continue;
  const words=unitVocabulary(unit.id);
  for(const [index,l] of lessons.entries()) {
    if(l.archetype==='arabic-only')l.language='ar';
    // Distribute genuinely new vocabulary, then re-encounter earlier targets
    // in later lessons. Selection remains local to a coherent language unit.
    const own=words.slice(index*Math.ceil(words.length/lessons.length),(index+1)*Math.ceil(words.length/lessons.length));
    l.vocabulary=unique([...(l.vocabulary||[]).map(v=>LEXICON_BY_ID.get(v.id)||v),...own]);
    l.unitTitle=unit.title;
    if(l.archetype!=='vocabulary-immersion' && own.length) {
      const match=vocabularyMatch(own,`${l.id}-lexical`,0);
      l.exercises.push(match);l.flow.splice(l.archetype==='context-inference'?1:0,0,match.id);
      const retrieve=vocabularyRecall(own[0],0);
      if(!l.exercises.some(e=>e.id===retrieve.id)){l.exercises.push(retrieve);l.flow.splice(Math.max(1,l.flow.length-2),0,retrieve.id);}
    }
    if(index>0) {
      const earlier=words.slice(0,Math.min(index*2,words.length));
      if(earlier.length>=2) {
        const revisit=vocabularyMatch(earlier.slice(-2),`${l.id}-revisit`,2,'review');
        l.exercises.push(revisit);l.flow.splice(Math.max(0,l.flow.length-1),0,revisit.id);
        l.vocabulary=unique([...l.vocabulary,...earlier.slice(-2)]);
      }
    }
    l.exercises=l.exercises.map(e=>enrichExercise(e,l));
    l.targetSkills=[...new Set(l.exercises.flatMap(e=>e.skills))];
    l.difficulty={vocabularyRarity:unit.stage>=5?3:unit.stage>=3?2:1,syntacticDepth:Math.min(4,Math.ceil(unit.stage/2)),dependencyDistance:unit.stage>=3?'long':'short',implicitInformation:unit.stage>=5?'high':'low',unusualOrder:unit.stage===6?'high':unit.stage>=3?'some':'low',rhetoric:unit.stage>=5?'high':'low',scaffolding:index===0?'guided':index===lessons.length-1?'reduced':'available',lexicalTargets:l.vocabulary.length};
    l.reviewLinks=[`review-${unit.id}`,`checkpoint-${unit.id}`,'daily-literature-review'];
    GUIDED_LESSONS.push(l);COURSE_LESSONS.push(l);
  }
  const constructions=unique(lessons.flatMap(l=>l.constructions||[]));
  const repair=CONSTRUCTION_BANK.filter(c=>constructions.some(x=>x.id===c.id)).slice(0,3).map(c=>({...c.examples[0]}));
  const reviewExercises=[vocabularyMatch(words.slice(0,Math.ceil(words.length/2)),`review-${unit.id}-a`,1,'review'),...repair.slice(0,1),vocabularyMatch(words.slice(Math.ceil(words.length/2)),`review-${unit.id}-b`,1,'review'),...words.filter((_,i)=>i%3===0).map(v=>vocabularyRecall(v,2,'review')),...repair.slice(1)];
  const review={id:`review-${unit.id}`,revision:1,kind:'review',stage:unit.stage,unit:unit.id,unitTitle:unit.title,archetype:'review-mix',title:`Review: ${unit.title}`,titleAr:'مُرَاجَعَةٌ فِي سِيَاقٍ جَدِيدٍ',minutes:10,source:{kind:'practice'},context:'Retrieve this unit’s vocabulary and structures in different contexts. Help remains available and is recorded.',objectives:[{id:`review-${unit.id}`,text:unit.objective}],vocabulary:words,constructions,chunks:[],support:{},exercises:reviewExercises,flow:reviewExercises.map(e=>e.id),reviewLinks:['daily-literature-review']};
  review.exercises=review.exercises.map(e=>enrichExercise(e,review));
  COURSE_LESSONS.push(review,CHECKPOINTS.find(l=>l.unit===unit.id));
  const isLastPublished=!LITERATURE_UNITS.some(u=>u.stage===unit.stage&&LITERATURE_UNITS.indexOf(u)>LITERATURE_UNITS.indexOf(unit)&&guided.some(l=>l.unit===u.id));
  if(isLastPublished)COURSE_LESSONS.push(CUMULATIVE.find(l=>l.stage===unit.stage));
}
for(const lesson of [...CHECKPOINTS,...CUMULATIVE,PLACEMENT]) {
  lesson.exercises=lesson.exercises.map(e=>enrichExercise(e,lesson));
  lesson.targetSkills=[...new Set(lesson.exercises.flatMap(e=>e.skills))];
}
const repairExercises=[...LEXICON.flatMap(v=>[1,2].map(i=>vocabularyRecall(v,i,'review'))),...CONSTRUCTION_BANK.flatMap(c=>c.examples)];
for(const e of repairExercises) {
  if(!e.id.startsWith('repair-'))continue;
  const id=e.targets[0];
  const skills=['skill-constructions','skill-comprehension',...(TYPE_SKILLS[e.type]||[]).map(id=>`skill-${id}`)];
  if(/pronoun|reference|dialogue|subject/.test(id))skills.push('skill-reference');
  if(/lamma|sequence|until|time|reason|purpose|while|contrast/.test(id))skills.push('skill-clause-links');
  if(/image|simile|impression|rhetorical|metonymic/.test(id))skills.push('skill-inference');
  if(/image|simile|bata|protection/.test(id))skills.push('skill-poetry');
  if(/causative|akhadha/.test(id))skills.push('skill-morphology');
  e.skills=[...new Set(skills)];
}
export const DAILY_REVIEW={id:'daily-literature-review',revision:1,stage:1,unit:'review',archetype:'micro-drill',kind:'adaptive-review',adaptive:true,title:'Your language review',titleAr:'مُرَاجَعَتُكَ الْيَوْمَ',minutes:8,source:{kind:'practice'},context:'A short selection based on due words and weak structures. The next example is chosen from your saved history.',objectives:[{id:'recover',text:'Retrieve older language in a different context and show what has stayed with you.'}],vocabulary:[],constructions:[],chunks:[],support:{},exercises:repairExercises.map(e=>enrichExercise(e,{})),flow:repairExercises.slice(0,8).map(e=>e.id)};
export const ALL_SESSIONS=[...COURSE_LESSONS,PLACEMENT,DAILY_REVIEW];
export const LEARNING_ITEMS=unique([...LEXICON,...guided.flatMap(l=>(l.constructions||[]).map(c=>({...c,kind:'construction',tier:2}))),...CONSTRUCTION_BANK.map(({examples,...c})=>c),...SKILLS]);
export const PUBLISHED_UNITS=LITERATURE_UNITS.filter(u=>GUIDED_LESSONS.some(l=>l.unit===u.id));

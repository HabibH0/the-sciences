import { card as c, rows as r, part as p, visual as v, question as q, plan } from '../nahw-course/helpers.js';
const clarification = { line: 'clarification' };

export const plans = {
  'as-06/l1': plan(21, 'Frozen Verbs', [
    [c('One tense-form, with a particular meaning',0,1,2),c('Most frozen verbs have past form',r(3,0),4),c('Commands with a fixed meaning',r(3,2)),c('The book’s two main divisions',5,6),c('Read the extra imperfect examples carefully',r(3,1),7)],
    [c('Negation and nearness',r(0,0,1)),c('Hope and beginning',r(0,2,3),1)],
    [c('Praise and blame',r(0,0,1)),c('Exception: the word class matters',r(0,2),1,2),c('A dispute about classification',3,clarification)],
    [c('The settled command pair',0,r(1,0,1),4),c('Two commonly added commands',r(1,2,3),2,3,clarification)],
  ], [
    ['جامد','Restricted to one tense-form in the relevant use, not necessarily one person or number.'],
    ['Past form','Negation, nearness, hope, beginning, praise, blame and exception.'],
    ['Command form','هَبْ = ظُنَّ; تَعَلَّمْ = اعْلَمْ. تعال and هلم are disputed additions.'],
    ['Classification','A particle or noun falls outside this division of verbs.'],
  ], {copy:{
    '0:1':'Verbs divide into جامد and متصرف.',
    '0:2':'جامد stays in one tense-form in the stated meaning. It may still change for person or number: ليس، لست، لسنا. Its past form does not require past-time meaning.',
    '0:4':'This is the largest frozen group. These verbs lack an imperfect and command in the uses being classified.',
    '0:5':'The prose concentrates on past-only and command-only verbs.',
    '0:7':'The course table adds an imperfect-only category. It reports يسوي, “equal”, and يهيط, “cry out”, as restricted uses. Its يبغي, “desires/seeks”, is unsuitable: بغى يبغي conjugates. Do not memorise that ordinary verb as frozen.',
    '1:1':'أخذ الرجل يقرأ means “the man began to read”. The auxiliary “begin” is past-only in this account: not يأخذ الرجل يقرأ. Ordinary أخذ يأخذ, “take”, still conjugates.',
    '2:1':'The source flags disagreement over word class.',
    '2:3':'Some classify خلا، عدا، حاشا as particles; the Kūfans classify نعم and بئس as nouns.',
    '2:clarification':'This concerns classification, not the meanings “except”, “praise” or “blame”. Only a verb can be جامد in this division. On a particle or noun analysis, the word falls outside it. The verbal uses listed here are classified as past-only.',
    '3:0':'Only a small group remains in command form.',
    '3:3':'“No third” concerns the settled pair; these two additions are disputed.',
    '3:4':'هَبْ meaning “suppose” differs from the command of وهب, “give”. تَعَلَّمْ meaning “know” differs from regular تعلّم, “learn”. Classify the particular meaning.',
    '3:clarification':'Some trace تعال to تعالى. هلم is an اسم فعل in Ḥijāzī usage; in Tamīmī usage it is a verb that changes with its addressee.',
  },boxCopy:{'0:0':['الجامد: ما لازم صورة واحدة.'],'0:6':['ملازم للمضي، أو ملازم للأمرية.'],'2:2':['في بعض الألفاظ خلاف: أفعال أم حروف أم أسماء؟']},
  tableCopy:{'0:3':{0:['ملازم للمضي','Past form only.','ليس: is not; عسى: perhaps; نعم: excellent; خلا: except.'],1:['ملازم للمضارعة','An extra category in the course table.','يسوي؛ يهيط. The listed يبغي needs correction.'],2:['ملازم للأمرية','No past or imperfect in this meaning.','هَبْ: suppose. تَعَلَّمْ: know.']},
  '1:0':{0:['ليس','أخوات كان: negation.','ليس زيد قائما: Zayd is not standing.'],1:['كرب','المقاربة: nearness.','كرب الأمر ينتهي: the matter was about to end, like كاد.'],2:['عسى؛ حرى؛ اخلولق','الرجاء: hope.','Perhaps, or likely to happen.'],3:['أنشأ؛ طفق؛ أخذ؛ جعل؛ علق','الشروع: beginning.','أخذ الرجل يقرأ: the man began to read.']},
  '2:0':{0:['نعم؛ حبذا','المدح: praise.','نعم الرجل زيد: what an excellent man Zayd is!'],1:['بئس؛ ساء','الذم: blame.','The opposite of praise.'],2:['خلا؛ عدا؛ حاشا','الاستثناء: exception.','جاء القوم خلا زيدًا: except Zayd, with verbal خلا. The source’s زيدٍ illustrates the particle reading.']},
  '3:1':{0:['هَبْ','ظُنَّ: suppose.','هب زيدا مسافرا: suppose Zayd is travelling.'],1:['تَعَلَّمْ','اعْلَمْ: know.','A fixed meaning distinct from “learn”.'],2:['تعال','Come.',''],3:['هلم','Come here; bring.','']},
  },analysisPrompt:'Match each verb group to its family.',analysisHint:'Distinguish negation, nearness and hope.',
  analysisLabels:{'one of أخوات كان (kān’s sisters), used to negate':'أخوات كان','one of أفعال المُقارَبَة (verbs of imminence)':'المقاربة','one of أفعال الرَّجاء (verbs of hope)':'الرجاء'},
  analysisText:{'table-1-0':{'لَيْسَ — is not':'لَيْسَ','كَرَبَ':'كَرَبَ','عَسَى، حَرَى، اخْلَوْلَقَ':'عَسَى؛ حَرَى؛ اخْلَوْلَقَ'}},
  }),
  'as-06/l2': plan(22, 'Full and Partial Conjugation', [
    [c('A verb that has more than one tense-form',0,1,3),c('Full or partial conjugation',r(2,0,1))],
    [c('Both root sizes can conjugate fully',0,1,2)],
    [c('Partial conjugation lacks a command',0,1,3,4),c('The four continuation auxiliaries',r(2,0,1,2,3))],
    [c('Nearness in past and imperfect forms',r(0,0,1),1,2),c('Meaning does not settle conjugation',clarification)],
  ], [
    ['متصرف','Does not stay in one tense-form.'],
    ['تام','Past, imperfect and command; the commonest class.'],
    ['ناقص','Past and imperfect only in the uses studied here.'],
    ['Meaning','Continuation and nearness must be checked verb by verb.'],
  ], {copy:{
    '0:1':'The opposite of جامد: ما لازم صورة واحدة.',
    '0:3':'The distinction asks whether more than one tense-form is used.',
    '1:1':'All three forms are available. This is the commonest class.',
    '1:2':'نصر, “help”, is bare triliteral; دحرج, “roll”, is bare quadriliteral. Both conjugate fully: نصر ينصر انصر؛ دحرج يدحرج دحرج.',
    '2:1':'The source’s partial class has past and imperfect forms only. It includes continuation and nearness auxiliaries.',
    '2:4':'The continuation sense requires negation or a related negative context: ما زال زيد قائما means “Zayd remained standing”. Other meanings can conjugate differently; bare زال does not by itself mean “remain”.',
    '3:2':'كاد and أوشك express that something is about to happen; they do not assert its completion. In these auxiliary uses, the source gives past and imperfect, with no command.',
    '3:clarification':'The source classes كرب as past-only, but كاد يكاد and أوشك يوشك as partially conjugating. All express nearness. The classification concerns the forms used in this auxiliary sense, not every lexical use or rare attestation.',
  },boxCopy:{'1:0':['تام التصرف: الماضي والمضارع والأمر.'],'2:0':['ناقص التصرف: الماضي والمضارع فقط.'],'2:3':['أفعال الاستمرار بمعنى بقي.']},
  tableCopy:{'0:2':{0:['تام التصرف','Past, imperfect and command.'],1:['ناقص التصرف','Past and imperfect only here.']},'2:2':{0:['زال','يزال'],1:['برح','يبرح'],2:['فتئ','يفتأ'],3:['انفكّ','ينفكّ']}},patternTables:['2:2','3:0'],
  tableTitles:{'2:2':'Continuation stems, used with negation or a related context'},
  analysisPrompt:'Match the past stem to its imperfect.',analysisHint:'Recall the continuation auxiliaries.',
  }),
  'as-06/l3': plan(23, 'From Past to Imperfect to Command', [
    [c('Choose the imperfect prefix',0,1,2),c('Its vowel depends on the past stem',r(3,0,1),4)],
    [c('A triliteral’s فاء and عين',0,1)],
    [c('An added initial ت keeps internal vowels',0,1,r(2,0)),c('Otherwise, kasra before the last letter',r(2,1),3),c('Remove an initial added hamza',r(2,2))],
    [c('Build from the addressed imperfect',0,1),c('A vowelled start needs no hamza',p(2,0)),c('Supply a pronounceable beginning',p(2,1)),c('وصل and قطع are different',clarification)],
  ], [
    ['Prefix','Ḍamma for a four-letter past stem; fatḥa otherwise.'],
    ['Triliteral','فاء has sukūn; learn عين’s attested vowel and باب.'],
    ['Other stems','Initial added ت retains internal vowels; otherwise kasra before the last letter. Remove initial added hamza.'],
    ['Command','Start with the addressed jussive. Remove the prefix; supply the required beginning.'],
  ], {copy:{
    '0:0':'Add one of أ، ن، ي، ت to form the imperfect.',
    '0:2':'Person, number and gender determine the prefix. The active past stem’s length determines its vowel.',
    '0:4':'Count the past stem, not just its roots: دحرج، أكرم، عظّم، قاتل have four letters, giving يُدحرج، يُكرم، يُعظّم، يُقاتل. Three-letter كتب and six-letter استغفر give يَكتب and يَستغفر.',
    '1:1':'ينصر: help, with ḍamma; يفتح: open, with fatḥa; يضرب: strike, with kasra. Past عين fatḥa alone does not determine the choice: learn the attested باب and its constraints. Weak-letter changes apply to the underlying pattern afterwards.',
    '2:1':'For a past stem longer than three letters, first check its beginning.',
    '2:3':'Keeping internal vowels is the added-ت exception; kasra before the last letter is the default. Final grammatical endings and weak-letter changes are separate.',
    '3:0':'Begin with the jussive form addressing the learner, such as تَنْصُرْ. Then remove the imperfect prefix and check the new beginning.',
    '3:clarification':'Sukūn means no vowel, not a silent consonant. Standard Arabic does not begin an utterance with such a cluster. انصر، افتح، انطلق، استغفر use همزة وصل, omitted in connected speech. أَكْرِمْ restores أفعل’s همزة قطع, pronounced even in connection.',
  },copyParts:{'3:2':[
    'عَظِّمْ: magnify. تَشارَكْ: share. تَعَلَّمْ: learn. After removing the imperfect prefix, each begins with a vowelled consonant, so no hamza is needed.',
    'اُنْصُرْ: help. اِفْتَحْ: open. اِضْرِبْ: strike. أَكْرِمْ: honour. اِنْطَلِقْ: set off. اِسْتَغْفِرْ: seek forgiveness. Removing the prefix leaves an initial sukūn, so a hamza is required. أكرم uses قطع; the others use وصل.',
  ]},boxCopy:{'1:0':['في الثلاثي: تسكين الفاء وتحريك العين حسب نص اللغة.','يَنْصُرُ؛ يَفْتَحُ؛ يَضْرِبُ.'],'3:1':['حذف حرف المضارعة.','إن كان أول الباقي ساكنا، زيدت همزة.']},
  tableCopy:{'0:3':{0:['Past stem: four letters','Prefix ḍamma.','يُدحرج: he rolls.'],1:['Other past stem lengths','Prefix fatḥa.','يَكتب: writes; يَنطلق: sets off; يَستغفر: seeks forgiveness.']},
  '2:2':{0:['Begins with added ت','يتشارك: shares; يتعلّم: learns; يتدحرج: rolls. Retain the stem’s internal vowels.'],1:['Other beginnings','يعظّم: magnifies; يقاتل: fights. Give the penultimate letter kasra.'],2:['Initial added hamza','أكرم gives يكرم, “honours”; استخرج gives يستخرج, “extracts”. Drop the initial added hamza.']}},
  visuals:{'3:1':v('No added beginning',['تَعَلَّمْ','Learn.']), '3:2':v('The prefix is removed',['تَسْتَغْفِرْ','Addressed jussive'],['اِسْتَغْفِرْ','Command'])},
  analysisPrompt:'Match each imperfect group to the rule it illustrates.',analysisHint:'Look for added ت, penultimate kasra or a removed hamza.',
  analysisLabels:{'بَقِيَ على حالِهِ إن كان مَبْدُوءًا بِتاءٍ زائِدَةٍ — it stays as it is, if it begins with an added تاء':'Initial ت: retain vowels','وإلَّا كُسِرَ ما قَبْلَ آخِرِهِ — otherwise, the letter before its last one takes a كسرة':'Penultimate kasra','وحُذِفَتِ الهَمْزَةُ الزائِدَةُ في أَوَّلِهِ إن كانَتْ — and the added همزة at its start, if any, is dropped':'Remove initial hamza'},
  analysisText:{'table-2-2':{'يَتَشارَك — he shares, يَتَعَلَّم — he learns, يَتَدَحْرَج — he rolls (himself)':'يَتَشارَك؛ يَتَعَلَّم؛ يَتَدَحْرَج','يُعَظِّم — he magnifies, يُقاتِل — he fights':'يُعَظِّم؛ يُقاتِل','يُكْرِم — he honors, يَسْتَخْرِج — he extracts':'يُكْرِم؛ يَسْتَخْرِج'}},
  }),
};
export const checks = {
  'as-06/l1':[
    q('What defines a جامد verb in a particular use?', ['It stays in one tense-form.','It has no مصدر.','It takes no فاعل.','It is always لازم.'],'Distinguish tense-forms from person and number.'),
    q('أخذ الرجل يقرأ means “the man began to read”. How is this auxiliary أخذ classified?', ['An imperfect cannot follow it.','Past-only جامد.','متعدّ.','ناقص التصرف.'],'Ordinary أخذ يأخذ, “take”, is a different use.'),
    q('If خلا، عدا and حاشا are analysed as particles, what follows here?', ['They are متصرفة.','They are command-only.','Nothing changes.','They fall outside this division of verbs.'],'First identify the word class.'),
    q('What does هب mean in هب زيدا مسافرا?', ['اذهب: go.','اعلم: know.','ظنّ: suppose.','أعط: give.'],'Use its frozen meaning.'),
  ],
  'as-06/l2':[
    q('Past and imperfect exist, but no command. Classify this verb.', ['جامد.','تام التصرف.','Outside this division.','ناقص التصرف.'],'It has more than one tense-form.'),
    q('Which class is the commonest?', null, 'Most verbs have all three tense-forms.'),
    q('In continuation constructions, what meaning do زال، برح، فتئ and انفك share?', ['عسى: hoping.','أخذ: beginning.','بقي: remaining.','كاد: nearing.'],'Recall ما زال زيد قائما.'),
    q('How does the source distinguish auxiliary كرب and كاد?', ['كرب: past only; كاد: past and imperfect.','كرب transitive; كاد intransitive.','كاد frozen; كرب conjugating.','They do not differ.'],'Shared meaning does not determine conjugation.'),
  ],
  'as-06/l3':[
    q('Why is يَستغفر’s prefix vowel fatḥa?', ['Its root is weak.','It is augmented.','Its past stem has six letters, not four.','Its first root is س.'],'Count the active past stem.'),
    q('What determines a bare triliteral’s imperfect عين vowel?', ['Letter count.','Sound or weak roots alone.','Its prefix vowel.','Attested usage and باب.'],'Past fatḥa alone permits more than one pairing.'),
    q('What happens to أكرم’s initial hamza in يكرم?', ['The added initial hamza is dropped.','It becomes ي.','It moves to the end.','It doubles.'],'An added hamza differs from a root hamza.'),
    q('Why does تعلّم need no added hamza, while استغفر does?', ['استغفر is bare triliteral.','تعلّم has no imperfect prefix.','Their remaining beginnings are vowelled and unvowelled.','تعلّم is frozen.'],'Check the start after removing the prefix.'),
  ],
};
export const quizzes = {
  'as-06/l1':[q('What defines الجامد?', ['More than one tense-form.','Past and imperfect only.','One or more additions.','One tense-form in the stated use.']),q('Which two frozen classes does the book’s prose discuss?'),q('Which family includes ليس?'),q('Which family includes عسى، حرى and اخلولق?'),q('Which is the source’s settled command-only pair?'),q('Who are reported to classify نعم and بئس as nouns?')],
  'as-06/l2':[q('What defines المتصرف?', ['One tense-form.','Only past and imperfect.','Only command.','More than one tense-form.']),q('What are its two classes?'),q('How are نصر and دحرج classified?'),q('What does the partial class studied here lack?'),q('What do continuation auxiliaries mean in their negative construction?'),q('Which family includes كاد and أوشك?')],
  'as-06/l3':[q('Which active past stem gives prefix ḍamma?', ['Four letters.','Three letters.','Five letters.','Six letters.']),q('In the regular underlying triliteral imperfect, what happens to فاء?'),q('What happens to internal vowels after an added initial ت?', ['The first letter takes ḍamma.','They remain as in the past stem.','The penultimate always takes kasra.','ت is removed.']),q('What do يكرم and يستخرج both illustrate?'),q('Starting with the addressed jussive, what is the first command-building step?'),q('After removing the prefix, when is an initial hamza needed?')],
};
export const practice = {
  'as-06/l1':[q('What does صورة واحدة mean in this division?', ['One tense-form: past, imperfect or command.','One وزن.','One meaning.','One باب.'],'It does not prohibit changes for person and number.')],
  'as-06/l2':[q('How do the two definitions relate?', null, 'One stays in a tense-form; the other does not.')],
  'as-06/l3':[q('Why does يُدحرج have prefix ḍamma?', ['Its past stem has four letters.','Its past stem has three letters.','It is augmented.','Its root is weak.'],'Count دحرج’s stem letters.')],
};

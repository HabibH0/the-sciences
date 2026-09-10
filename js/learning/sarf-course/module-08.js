import { card as c, rows as r, part as p, visual as v, question as q, plan } from '../nahw-course/helpers.js';
const clarification = { line: 'clarification' };

export const plans = {
  'as-08/l3': plan(30, 'Passive Imperfects and Intransitive Verbs', [
    [c('Ḍamma first; fatḥa before the last',0,1,2)],
    [c('Hollow imperfects take alif',0,r(1,0,1),2)],
    [c('An intransitive passive',0,1,r(2,0,1),3)],
    [c('Can the noun leave its restricted role?',0,r(1,0)),c('Does it add sufficiently specific information?',r(1,1),2),c('A suitable prepositional phrase',3,4),c('Why fixed constructions are excluded',5,clarification)],
  ], [
    ['Imperfect','First ḍamma; penultimate fatḥa, even beneath إدغام.'],
    ['Hollow','يقول gives يُقال; يبيع gives يُباع.'],
    ['Intransitive','An eligible adverbial, verbal noun or prepositional phrase stands in.'],
    ['Eligibility','تصرف concerns grammatical freedom; اختصاص concerns informative specification.'],
  ], {copy:{
    '0:1':'Ali is struck; the sold item is returned. Underlying يُرْدَدُ shows the penultimate fatḥa hidden in يُرَدّ.',
    '0:2':'Compare the general past rule: both begin with ḍamma. The past has penultimate kasra; the imperfect has fatḥa.',
    '1:2':'يقول: he says; يُقال: it is said. يبيع: he sells; يُباع: it is sold. Hollow passive formation transfers the vowel and changes the weak letter to alif. This does not mean every و or ي after fatḥa becomes alif: قَوْل and سَيْر retain theirs.',
    '2:1':'لازم has no direct object. An eligible adverbial, verbal noun or prepositional phrase stands in. The first two must be متصرف and مختص.',
    '2:3':'Travelling took place on Friday; standing before the prince; a good sitting. An adverbial or verbal noun is promoted.',
    '3:0':'Here تصرف concerns a noun’s grammatical uses, not a verb’s tense-forms.',
    '3:2':'يوم الجمعة specifies by إضافة; ضرب شديد by description. عمل الصالحين names a particular kind of action, also through إضافة. These ways of specifying can overlap.',
    '3:4':'فُرح بقدوم محمد means “delight was felt at Muhammad’s arrival”. The informative prepositional phrase supplies the required complement. In the source’s condition, the preposition must not be confined to one fixed use.',
    '3:5':'The source excludes عند، إذا، سبحان and معاذ from promotion because of their restricted adverbial or verbal-noun constructions.',
    '3:clarification':'This does not mean عند is always accusative: مِن عند is possible, but it remains a restricted adverbial use. A candidate must permit promotion and add information. مختص does not mean grammatically definite: ضرب شديد is indefinite but specified.',
  },boxCopy:{'0:0':['ضمّ الأول وفتح ما قبل الآخر، ولو تقديرا.','يُضْرَبُ عليّ؛ يُرَدُّ المبيع.'],'1:0':['يَقُولُ: يُقَالُ؛ يَبِيعُ: يُبَاعُ.'],'2:0':['الظرف والمصدر: متصرفان مختصان.'],'3:3':['أو المجرور الذي لم يلزم الجار له طريقة واحدة.','فُرِحَ بِقُدُومِ مُحَمَّدٍ.']},
  tableCopy:{'2:2':{0:['الظرف','سِيرَ يومُ الجمعة؛ وُقِفَ أمامُ الأمير.'],1:['المصدر','جُلِسَ جلوسٌ حسنٌ.']},'3:1':{0:['متصرف','Can leave its restricted adverbial or cognate-accusative use and take other noun roles.',''],1:['مختص','Specified by إضافة, description or a particular kind.','صِيم يومُ الجمعة؛ ضُرِب ضربٌ شديد؛ عُمِل عملُ الصالحين.']}},patternTables:['1:1'],
  analysisPrompt:'Choose the passive imperfect for each active form.',analysisHint:'The hollow passive has initial ḍamma and internal alif.',
  }),
  'as-08/l2': plan(29, 'Building the Passive Past', [
    [c('Ḍamma first; kasra before the last',0,1),c('A merged letter can hide the kasra',2,3,4)],
    [c('An added ت: also vowel the second letter',r(0,0),p(1,0)),c('Initial وصل: also vowel the third letter',r(0,1),p(1,1)),c('Count the written stem positions',clarification)],
    [c('A hollow past with ياء',0,1,2),c('The reported واو alternative',3,4)],
    [c('The majority’s doubled-verb vowel',0,p(2,0)),c('Reported kasra readings',1,p(2,1)),c('Explain the vowel transfer',3,4)],
  ], [
    ['General','Ḍamma first, kasra before the last, even beneath إدغام.'],
    ['Prefixes','Added ت: also second ḍamma. Initial وصل: also third ḍamma.'],
    ['Hollow','قيل، بيع; the source also reports إشمام and a واو alternative.'],
    ['Doubled','Majority ḍamma; reported kasra and Ibn Mālik’s إشمام.'],
  ], {copy:{
    '0:1':'ضُرب علي: Ali was struck. This general case excludes initial همزة وصل, added ت and a hollow عين appearing as alif. Each needs the adjustments that follow.',
    '0:2':'تقديرا allows the vowel to be hidden by assimilation.',
    '0:4':'رُدّ المبيع: the sold item was returned. Before إدغام, رُدِدَ، مُدِدَ، عُدِدَ show the required kasra on the first of the two matching roots.',
    '1:clarification':'Count from the written stem’s beginning. In اُستُخرج, ت is third even though خ, the first root, is fourth. In اُنطُلق, ط is third. Retain intervening sukūn and penultimate kasra; do not count additions before the first root to locate the extra ḍamma.',
    '2:0':'Hollow verbs require a weak-letter adjustment.',
    '2:2':'The garment was sold; the saying was said; this was chosen; he was obeyed. The source also permits إشمام, blending a trace of ḍamma into the kasra. These vowel alternatives are constrained when they would cause ambiguity.',
    '2:4':'The source also reports retaining ḍamma and using wāw: بُوع. Its verse means “Would that, though does wishing help? Would that youth were sold, so I could buy it.” This is a reported alternative to the usual بِيع.',
    '3:0':'The general doubled form hides its عين kasra under إدغام.',
    '3:4':'For the kasra account, remove فاء’s own vowel, transfer عين’s kasra to فاء, then merge. Ibn Mālik also permits إشمام here, extending the alternatives of باع to doubled verbs such as حبّ.',
  },copyParts:{'1:1':[
    'تُعُلِّمَ الحساب: arithmetic was learned. تُقُوتِلَ مع زيد: fighting took place with Zayd. Both begin with added ت, so the first and second letters take ḍamma; penultimate kasra remains.',
    'اُنْطُلِقَ بزيد: Zayd was taken along. اُسْتُخْرِجَ المعدن: the mineral was extracted. Initial همزة وصل takes ḍamma, as does the third letter; the penultimate takes kasra.',
  ],'3:2':[
    'The majority require فاء ḍamma: شُدّ, “was pulled tight”, and مُدّ, “was stretched”. The Kūfans permit kasra, attributed to Banū Ḍabba.',
    'The source reports رِدّت, “was returned”, and رِدّوا, “were sent back”, with kasra. It is describing transmitted variant readings; the familiar ḍamma forms remain the general model.',
  ]},boxCopy:{'0:0':['ضمّ الأول وكسر ما قبل الآخر.','ضُرِبَ عَلِيٌّ.'],'0:3':['رُدَّ المبيعُ.','قبل الإدغام: رُدِدَ؛ مُدِدَ؛ عُدِدَ.'],'2:1':['قال: قِيلَ القولُ؛ باع: بِيعَ الثوبُ.','اختار: اخْتِيرَ هذا؛ انقاد: انْقِيدَ له.'],'2:3':['لَيْتَ وهل ينفع شيئا ليتُ','ليتَ شبابا بُوعَ فاشتريتُ'],'3:1':['هَذِهِ بِضَاعَتُنَا رِدَّتْ إِلَيْنَا [12:65]','وَلَوْ رِدُّوا لَعَادُوا لِمَا نُهُوا عَنْهُ [6:28]'],'3:3':['نقل حركة العين إلى الفاء.','ابن مالك: «وما لباع قد يُرى لنحو حبّ».']},
  tableCopy:{'1:0':{0:['Added initial ت','Ḍamma on first and second.','تُعُلِّمَ الحساب؛ تُقُوتِلَ مع زيد.'],1:['Initial همزة وصل','Ḍamma on first and third.','اُنْطُلِقَ بزيد؛ اُسْتُخْرِجَ المعدن.']}},
  visuals:{'3:0':v('The ordinary models',['شُدَّ','Was pulled tight'],['مُدَّ','Was stretched'])},
  analysisPrompt:'Which extra ḍamma do these passive past forms require?',analysisHint:'Locate the initial added ت or همزة وصل.',
  analysisLabels:{'ضُمَّ الثاني مع الأوَّلِ — the second letter takes a ضمة along with the first':'First and second letters','ضُمَّ الثالثُ مع الأوَّلِ — the third letter takes a ضمة along with the first':'First and third letters'},
  analysisText:{'table-1-0':{'تُعُلِّمَ الحِسابُ ، تُقُوتِلَ مع زَيْدٍ':'تُعُلِّمَ؛ تُقُوتِلَ','انْطُلِقَ بِزَيْدٍ ، اسْتُخْرِجَ المَعْدِنُ':'اُنْطُلِقَ؛ اُسْتُخْرِجَ'}},
  }),
  'as-08/l1': plan(28, 'Active, Passive and the Replacement Subject', [
    [c('Two ways to present an event',r(0,0,1),1,2)],
    [c('Unknown or already understood',0,1,r(2,0,1),3),c('Passive form directs attention',clarification)],
    [c('An available direct object has priority',0,1,2)],
    [c('A prepositional phrase or verbal noun',0,1,r(2,0,1)),c('An adverbial can be promoted',r(2,2),3,4)],
  ], [
    ['معلوم','An active verb has a stated or understood فاعل.'],
    ['مجهول','The agent is omitted; another element becomes نائب الفاعل.'],
    ['Focus','An agent may be unknown or already understood.'],
    ['Priority','The direct object normally takes priority; other eligible elements can stand in.'],
  ], {copy:{
    '0:2':'Muhammad memorised the lesson. محمد is the active subject. In حُفظ الدرس, the agent is not named; الدرس is نائب الفاعل. Active subjects can also be pronouns. Passive form does not mean that an event had no agent.',
    '1:1':'Two possible purposes point in opposite directions.',
    '1:3':'The thief is unknown; the sender of rain, Allah, is understood in this example. The same passive form serves either context.',
    '1:clarification':'The passive can focus attention on the goods or the rain whether the agent is unknown or already understood. “مجهول” names the grammatical form; it does not claim that every listener is ignorant of the agent.',
    '2:0':'The direct object is the normal replacement for the omitted agent.',
    '2:2':'The disagreement concerns an available direct object: Sībawayh gives it priority; the Kūfans permit another eligible element instead. Without an available object, other kinds can stand in. The source’s absolute wording needs this condition.',
    '3:1':'Besides the direct object, three kinds are listed, subject to eligibility conditions.',
    '3:4':'“Ramadan was fasted”; “sitting took place before the prince”. رمضان and أمام الأمير are promoted adverbials here. Whatever stands in, the verb must take passive form. The following lessons explain its vowels.',
  },boxCopy:{'1:0':['حذف الفاعل لغرض لفظي أو معنوي.'],'2:1':['الأصل في النيابة المفعول به.','مع وجوده، سيبويه يقدّمه؛ والكوفيون يجيزون غيره.'],'3:0':['ينوب عن الفاعل غير المفعول به أيضا.']},
  tableCopy:{'0:0':{0:['مبني للفاعل','معلوم','Its فاعل is expressed or understood.'],1:['مبني للمفعول','مجهول','Its agent is omitted and another element stands in: حُفظ الدرس.']},'1:2':{0:['الجهل به','سُرق المتاع: the goods were stolen.'],1:['العلم به','أُنزل المطر: the rain was sent down.']},'3:2':{0:['الجار والمجرور','لما سُقط في أيديهم [7:149]: when they were overcome with remorse.'],1:['المصدر','فإذا نُفخ في الصور نفخة واحدة [69:13]: when the Horn is blown with one blast.'],2:['الظرف','صِيمَ رمضانُ؛ جُلِسَ أمامُ الأميرِ.']}},
  analysisPrompt:'Identify what stands in for the agent.',analysisHint:'Distinguish prepositional phrase, verbal noun and adverbial.',
  analysisText:{'table-3-2':{'﴿لَمَّا سُقِطَ في أَيْدِيهِمْ﴾ — when they fell into remorse':'سُقِطَ في أَيْدِيهِمْ','﴿فإذا نُفِخَ في الصُّورِ نَفْخَةٌ واحِدَةٌ﴾ — then when the Horn is blown with a single blast':'نُفِخَ في الصُّورِ نَفْخَةٌ واحِدَةٌ','صِيمَ رَمَضانُ ، جُلِسَ أمامُ الأميرِ':'صِيمَ رَمَضانُ؛ جُلِسَ أمامُ الأميرِ'}},
  }),
};
export const checks = {
  'as-08/l3':[
    q('How do the two general passive rules differ?', ['The past leaves the penultimate unchanged.','Past: penultimate kasra; imperfect: fatḥa.','Only the past has first-letter ḍamma.','The imperfect leaves its prefix unchanged.'],'Both start with ḍamma.'),
    q('What explains يقول becoming يُقال?', ['The hollow passive pattern yields internal alif.','Delete و and independently insert ا.','Being hollow alone determines all its vowels.','Prefix ḍamma alone causes it.'],'This is not a rule for every و after fatḥa.'),
    q('Why does an intransitive passive need another eligible element?', ['It has no مصدر.','It is always frozen.','It has no direct object to promote.','Its form cannot change.'],'Consider what can become نائب الفاعل.'),
    q('Why are عند، إذا، سبحان and معاذ excluded from promotion here?', ['All are verbal nouns.','Their restricted constructions do not permit it.','All are particles.','They satisfy both conditions.'],'Leaving accusative only for a fixed preposition is insufficient.'),
  ],
  'as-08/l2':[
    q('How does رُدّ satisfy the penultimate-kasra rule?', ['Doubled verbs are excluded.','Kasra became ḍamma.','It is not passive.','Its underlying رُدِدَ has kasra.'],'Undo إدغام to see the underlying vowels.'),
    q('Which letter takes the extra ḍamma in اُسْتُخْرِجَ?', ['Fourth: خ.','None.','Third: ت.','Second: س.'],'Count written stem positions.'),
    q('How does قال become قيل?', ['Alif stays.','Alif becomes ي; the first root takes kasra.','Alif is simply deleted.','Alif becomes و.'],'Use the usual kasra form.'),
    q('How does the source explain the kasra in رِدّت?', ['Delete عين.','Replace the doubled root with ي.','Clear فاء’s vowel, then transfer عين’s kasra to it.','Move فاء’s vowel to عين.'],'The receiving letter must first lose its own vowel.'),
  ],
  'as-08/l1':[
    q('What does passive مجهول leave unmentioned?', ['The tense.','The agent, though the event still has one.','There is no agent at all.','The verb’s meaning.'],'The name describes a construction.'),
    q('Why is the agent omitted in the source’s أُنزل المطر example?', ['Already understood.','Unknown.','Avoiding an unpleasant word.','The verb is intransitive.'],'The example assumes the sender of rain is known.'),
    q('With a direct object available, what do Sībawayh and the Kūfans dispute?', ['Whether another element may stand in instead.','Whether an agent may be omitted.','Whether passive vowels change.','Whether the promoted object is nominative.'],'The object itself is an agreed candidate.'),
    q('What is نائب الفاعل in نُفخ في الصور نفخة واحدة?', ['في الصور.','An adverbial.','There is none.','نفخة واحدة: the verbal noun.'],'The described blast is promoted.'),
  ],
};
export const quizzes = {
  'as-08/l3':[q('What is the general passive-imperfect rule?'),q('What is the passive of يقول?'),q('What can support an intransitive passive?', ['تمييز.','An eligible ظرف، مصدر or جار ومجرور.','Its direct object.','حال.']),q('What does متصرف mean for these nouns?', ['A conjugating verb.','Able to leave the restricted adverbial or مصدر use.','Specified by addition or description.','Forming an imperfect.']),q('How is ضرب شديد specified?'),q('Which cannot stand in for the agent?')],
  'as-08/l2':[q('What is the general passive-past rule?'),q('With an added initial ت, where is the extra ḍamma?'),q('With initial همزة وصل, where is the extra ḍamma?'),q('In the usual قيل/بيع formation, what replaces the hollow alif?'),q('What vowel do the majority require on doubled فاء?'),q('To which dialect does the source attribute doubled فاء kasra?')],
  'as-08/l1':[q('What is another name for المبني للفاعل?'),q('What defines المبني للمفعول?', ['Its active subject is named.','It does not reach an object.','It stays in one tense-form.','Its agent is omitted and another element stands in.']),q('Which purpose does سرق المتاع illustrate here?'),q('When a direct object is available, what does Sībawayh give priority?'),q('What stands in for the agent in سقط في أيديهم?'),q('What must happen to the verb when another element stands in?')],
};
export const practice = {
  'as-08/l3':[q('What changes يَضْرِب to يُضْرَب?', ['First kasra; penultimate fatḥa.','Only penultimate fatḥa.','First ḍamma; penultimate fatḥa.','First ḍamma; penultimate kasra.'],'Check both vowel positions.')],
  'as-08/l2':[q('Which cases need adjustments to the general passive-past rule?', ['Bare, augmented and attached.','Initial وصل, added ت, or hollow alif.','Triliteral, quadriliteral and doubled.','Intransitive, frozen and weak.'],'Recall the three exclusions in the rule’s statement.')],
  'as-08/l1':[q('Classify حفظ محمد الدرس.', ['Intransitive.','Frozen.','Active.','Passive.'],'Muhammad is named as the doer.')],
};

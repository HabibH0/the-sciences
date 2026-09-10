import { card as c, rows as r, part as p, visual as v, question as q, plan } from './helpers.js';

export const plans = {
  '30/l1': plan(135, 'Predicates of Incomplete Verbs', [
    [c('The predicate completes كان', 0, 1, 2)],
    [c('Before the verb’s اسم', 0, 1, 2)],
    [c('Before the verb itself', 0, 1, 2), c('The boundary of ما دام', 3, p(4,0)), c('Negation and fronting', p(4,1))],
    [c('Negating like ليس: ما', 0, 1, 2, 3, r(4,0)), c('لا and لات in this pattern', r(4,1,2))],
    [c('Two accounts of لات', 0, 1, 2)],
  ], [
    ['Predicate', 'خبر كان has نصب, visibly or by grammatical position.'],
    ['Order', 'It may precede the اسم, and sometimes the verb.'],
    ['Boundary', 'Do not move a صلة element before مصدرية ما; distinguish other negators.'],
    ['Negators', 'Operating ما, لا and لات share ليس’s رفع الاسم ونصب الخبر.'],
  ], { copy:{
    '0:0':'كان and its incomplete sisters need a predicate to complete their predication.',
    '0:2':'خبر كان has نصب, unlike the ordinary raised predicate. إنه كان صديقا نبيا gives two accusative predicates in the source’s account: “a man of truth, a prophet”. نبيا can also receive an adjective analysis. A clausal predicate has محل نصب rather than a visible accusative ending.',
    '1:0':'Both ordinary predicates and these predicates can change order under their conditions.',
    '1:2':'ليس سواءً عالمٌ وجهولٌ, “a knowledgeable person and an ignorant one are not equal”, places سواءً before عالمٌ, اسم ليس. The verb remains first; وجهول is coordinated with the اسم.',
    '2:0':'A permitted predicate can precede the verb itself.',
    '2:2':'قائما كان زيد corresponds to كان زيد قائما. The source lists كان, ليس, بات, أصبح, أمسى and ظل. Fronting before ليس is disputed; the other listed verbs admit it under the normal conditions.',
    '3:0':'Certain negating particles can operate like ليس under their own conditions.',
    '3:2':'They raise the اسم and assign نصب to the خبر. This shared government does not erase their individual restrictions.',
    '4:0':'Grammarians differ about the formation of لات.',
    '4:2':'One account treats لات as an independent particle. Another derives it from لا plus an added تاء, compared with ربت and ثمت, with an emphatic function. Neither changes the accusative predicate in the ليس-like analysis of ولات حين مناص.',
  }, copyParts:{'2:4':[
    'In ما دام زيد قائما, مصدرية ظرفية ما begins the clause interpreted as a duration. قائما cannot be carried out of its صلة to make قائما ما دام زيد. This boundary does not forbid every possible internal reordering.',
    'The taught rule also blocks crossing نافية ما in ما زال زيد قائما and ما انفك. Ordinary لا in لا يزال is different: منصورا لا يزال الحق is permitted in an established account. The source’s broad restriction must not treat every negator as ما.',
  ]}, boxCopy:{'0:1':['خبر كان وأخواتها يتمم المعنى، وحكمه النصب.'],'1:1':['قد يتقدم خبر كان وأخواتها على اسمها.'],'2:1':['قد يتقدم الخبر على فعله الناسخ.'],'2:3':['لا يتقدم معمول الصلة على ما المصدرية.'],'3:1':['عمل ليس: رفع الاسم ونصب الخبر.'],'3:3':['يذكر المصدر: ما، لا، لات؛ وتذكر كتب أخرى إن النافية أيضا.'],'4:1':['لات: حرف مستقل، أو لا مع تاء زائدة.']}, tableCopy:{'3:4':{0:['ما','ما هذا بشرا','بشرا: خبر ما منصوب'],1:['لا','لا شيءٌ مشابها لله','مشابها: خبر لا في عمل ليس'],2:['لات','ولات حين مناص','حين: خبر منصوب في التحليل المتبع']}}, visuals:{'2:2':v('Different boundaries',['ما زال','Do not cross نافية ما'],['لا يزال','Ordinary لا can permit fronting'])}, analysisItemLabels:{'bank-19':{'خبر ليس منصوب':'خبر كان منصوب','اسم ليس مرفوع':'فاعل مرفوع'}}, analysisLabels:{'فعل ناقص، وجملته خبر إنّ':'فعل ناقص؛ الجملة خبر إنّ','فعل ناقص، وجملته خبر مبتدأ':'فعل ناقص؛ الجملة خبر مبتدأ','معطوف على اسم ليس مرفوع':'معطوف على اسم ليس','معطوف على خبر ليس منصوب':'معطوف على خبر ليس'} }),
  '30/l2': plan(136, 'The Noun of لا النافية للجنس', [
    [c('An إضافة noun after لا', 0, 1, p(2,0)), c('A noun with its own complement', p(2,1))],
    [c('Singular and broken-plural forms', 0, r(1,0)), c('The sound feminine plural', r(1,1)), c('Dual and sound masculine plural', r(1,2))],
    [c('Definite nouns: لا is inoperative', 0, 1)],
    [c('A built first noun', 0, 1, r(2,0,1,2)), c('A raised first noun: two choices', r(2,3,4))],
    [c('An understood اسم in لا عليك', 0, 1)],
  ], [
    ['Government', 'لا النافية للجنس assigns نصب to its اسم and رفع to its خبر.'],
    ['اسم', 'مضاف and شبيه بالمضاف are inflected; مفرد is built in محل نصب.'],
    ['Repetition', 'Five patterns distinguish building, accusative inflection and رفع.'],
    ['Omission', 'لا عليك illustrates an understood بأس; it is a limited attested construction.'],
  ], { copy:{
    '0:0':'Operating لا النافية للجنس negates the category: it assigns نصب to its اسم and رفع to its خبر, like إنّ in government. The source’s “accusative خبر” reverses these roles.',
    '1:0':'مفرد here means neither مضاف nor شبيه بالمضاف, even if the noun is dual or plural. It is built in محل نصب in the taught account.',
    '2:1':'لا الشمس ينبغي لها أن تدرك القمر ولا الليل سابق النهار repeats inoperative لا before definite الشمس and الليل. These are raised subjects, not built اسم لا forms. The usual rule requires repetition in this pattern; it does not mean that every negation of a definite referent everywhere requires repeated لا.',
    '3:0':'Five coordinated patterns: each eligible اسم directly follows its لا. “No separator” concerns that pair.',
    '4:1':'لا عليك means لا بأس عليك, “no harm upon you” or “never mind”. The omitted اسم is recoverable. This is permitted, not obligatory. Many grammarians treat such اسم omission as rare or limited to attested wording, not a freely applicable rule whenever a noun can be guessed.',
  }, copyParts:{'0:2':[
    'لا عملَ مراءٍ مقبولٌ, “no show-off’s work is accepted”: عملَ has actual نصب because it is مضاف to مراءٍ. مقبولٌ is the raised predicate.',
    'لا عاصيا أمه وأباه ناجحٌ, “no one disobedient to his parents succeeds”: عاصيا governs أمه as its object, with أباه coordinated. It is شبيه بالمضاف, not an إضافة, and therefore has actual نصب. ناجحٌ is خبر لا.',
  ]}, boxCopy:{'0:1':['المضاف والشبيه بالمضاف: اسم لا منصوب لفظا.'],'2:0':['لا مع المعرفة مهملة، وتكرر في هذا النمط.'],'3:1':['تكرار لا: خمسة أوجه.']}, tableCopy:{'1:1':{0:['مفرد أو جمع تكسير','Built on فتح','لا رجلَ؛ لا رجالَ'],1:['جمع مؤنث سالم','Built on فتح or كسر in the taught variants','لا مسلماتَ؛ لا مسلماتِ'],2:['مثنى أو جمع مذكر سالم','Built on ياء','لا رجلينِ؛ لا مسلمينَ']},'3:2':{0:['بناء + بناء','فتح بلا تنوين','فلا رفثَ ولا فسوقَ ولا جدالَ في الحج'],1:['بناء + رفع','الثاني ضم وتنوين','لا حولَ ولا قوةٌ إلا بالله'],2:['بناء + نصب','الثاني فتح وتنوين','لا حولَ ولا قوةً إلا بالله'],3:['Raised + raised','Both have رفع','لا بيعٌ فيه ولا خلةٌ ولا شفاعةٌ'],4:['Raised + built','Raised رفث and فسوق; built جدال in the cited reading','فلا رفثٌ ولا فسوقٌ ولا جدالَ في الحج']}}, visuals:{'0:1':v('Complement without إضافة',['عاصيا','The accusative اسم لا'],['أمه وأباه','Its object and coordinated object'])}, analysisLabels:{'اسم لا منصوب لفظًا، لأنه مضاف':'اسم لا منصوب، مضاف','اسم لا منصوب لفظًا، لأنه شبيه بالمضاف':'اسم لا منصوب، شبيه مضاف','اسم لا مبني على الياء في محل نصب (مثنى)':'اسم لا مبني على الياء','مفعول به لـ"عاصيًا" منصوب':'مفعول عاصيا منصوب','مفعول به لـ"عاصيًا" مرفوع':'مفعول عاصيا مرفوع','معطوف على "أمَّه" منصوب':'معطوف على أمه منصوب','معطوف على "أمَّه" مجرور':'معطوف على أمه مجرور'} }),
  '30/l3': plan(137, 'Genitive Form and Grammatical Role', [
    [c('Government by a preposition', 0, 1, 2)],
    [c('Government by إضافة', 0), c('A counted noun with genitive إضافة', 1, 2, 3)],
    [c('Surface case and sentence role', 0, 1, 2), c('A subject with a genitive ending', 3)],
    [c('An object with a genitive ending', 0, 1, 2)],
  ], [
    ['Direct جر', 'A preposition or إضافة assigns the genitive form.'],
    ['Overlap', 'A counted noun such as أيام can be genitive by إضافة.'],
    ['زائد', 'An augmenting preposition affects the ending, while the sentence role remains.'],
    ['Examples', 'بالله after كفى: subject. من شيء after نشرك: object.'],
  ], { copy:{
    '0:0':'After رفع and نصب, the source groups direct جر into two types. Dependents that follow another noun’s case belong to the following topic.',
    '0:2':'أوفوا المكيال والميزان بالقسط, “give full measure and weight with justice”: القسط has جر from the preposition باء.',
    '1:0':'أجيب دعوة الداع, “I answer the caller’s call”: الداع is genitive as the إضافة complement of دعوة. The governing relation is إضافة, without a preposition before الداع.',
    '1:2':'Earlier chapters give the detailed preposition and إضافة rules. Their effects can cross the source’s broad topic categories, including counted-noun specifications.',
    '1:3':'في ستة أيام, “in six days”: أيام specifies the count but syntactically has جر by إضافة to ستة. Its broad تمييز label does not make it accusative.',
    '2:0':'An augmenting preposition, حرف جر زائد, can change the visible ending while the noun retains a subject or object position.',
    '2:2':'زائد is a grammatical term, not “meaningless”. Such particles can reinforce the expression; identify both surface جر and the retained sentence role.',
    '2:3':'وكفى بالله وكيلا, “Allah suffices as a trustee”: the باء is زائد in the adopted analysis. الله has جر لفظا and رفع محلا as subject of كفى. Compare وكفى الله وكيلا.',
    '3:0':'An object can show the same surface جر.',
    '3:2':'ما كان لنا أن نشرك بالله من شيء, “it was not for us to associate anything with Allah”: شيء has جر لفظا after زائد من, but نصب محلا as object of نشرك. Compare أن نشرك بالله شيئا.',
  }, boxCopy:{'0:1':['الجر المباشر: بحرف الجر أو بالإضافة.'],'1:1':['قد يكون المعدود مجرورا بالإضافة.'],'2:1':['قد يجتمع الجر لفظا مع الرفع أو النصب محلا.']}, visuals:{'1:0':v('The call of its caller',['دعوة','The construct noun'],['الداع','Genitive إضافة complement']),'2:1':v('Two aspects of بالله after كفى',['الجر لفظا','Visible prepositional case'],['الرفع محلا','Subject of كفى'])}, analysisLabels:{'فعل أمر وفاعله (واو الجماعة)':'أمر وواو الجماعة فاعله','فعل أمر وفاعله (نون النسوة)':'أمر ونون النسوة فاعله','مفعول به أول منصوب':'مفعول به منصوب','معطوف على المفعول به منصوب':'معطوف على المفعول','مجرور لفظًا لكنه مرفوع محلًّا':'مجرور لفظا، مرفوع محلا','مجرور لفظًا لكنه منصوب محلًّا':'مجرور لفظا، منصوب محلا','اسم مجرور بحرف الجر':'مجرور بحرف جر','مضاف إليه مجرور بالإضافة':'مضاف إليه مجرور'} }),
  '30/l4': plan(138, 'Description and Agreement', [
    [c('A description follows its noun', 0, 1, 2, 3)],
    [c('A derivative used descriptively', 0, 1, 2)],
    [c('A demonstrative description', 0, r(1,0)), c('Possession with ذو and its forms', r(1,1)), c('A مصدر used as a description', r(1,2)), c('A relative description', r(1,3)), c('A number describing its noun', r(1,4)), c('A descriptive relation with ياء النسبة', 2, 3)],
    [c('Describing the noun itself', 0, 1, r(2,0), p(3,0)), c('Describing something related', r(2,1), p(3,1))],
    [c('The link to the described noun', 0, 1), c('Where the description is attributed', 2)],
    [c('The description can replace its noun', 0, 1)],
  ], [
    ['Terms', 'نعت or صفة; its noun is منعوت or موصوف.'],
    ['Form', 'A derivative or a form interpreted descriptively.'],
    ['Relation', 'حقيقي describes the noun; سببي describes something related to it.'],
    ['Link and omission', 'Keep the returning relation; a recoverable منعوت may be omitted.'],
  ], { copy:{
    '0:0':'A تابع follows its متبوع in case. Grammarians differ over its governing عامل; “following” does not mean it has no government at all.',
    '0:1':'The source counts five تابع types; this lesson treats the first, النعت.',
    '0:3':'The description is نعت or صفة. Its described noun is منعوت or موصوف.',
    '1:0':'The first word-form pattern is a مشتق carrying descriptive verbal meaning.',
    '1:2':'وقال رجل مؤمن, “a believing man said”: مؤمن is اسم فاعل from آمن. It describes رجل and follows its رفع.',
    '2:0':'Other forms work through a descriptive interpretation. The table concerns word-form نعت, not an exhaustive account of clausal descriptions.',
    '2:3':'كوكب دري, “a brilliant star”, describes pearl-like brightness. In the source’s classification, ياء النسبة makes a noun descriptive without making it a verbal derivative like اسم الفاعل. This is an extension beyond the متن’s explicit list.',
    '3:0':'Ask whether the quality belongs to the noun or to something related.',
    '4:1':'The related entity normally has a returning pronoun. In شديد العقاب, the source treats أل as supplying the relation expressed by شديد عقابه. This is an analytical account of the relation; العقاب in the إضافة wording is genitive, not a visibly raised subject. Its descriptive analysis in context is also disputed.',
    '4:2':'القرية الظالم أهلها attributes wrongdoing to the people through their relation to the town. Compare the direct description مكة المكرمة, honoring the city itself. مكة المكرمة is conventional Arabic wording, not a Quran quotation as the source claims. These examples distinguish direct and related attribution.',
    '5:1':'واعملوا صالحا, “do righteous deeds”, is understood as واعملوا عملا صالحا. Context supplies the omitted منعوت عملا; its description صالحا stands in its place. In this مصدر reconstruction, it functions as a substitute for the absolute object.',
  }, copyParts:{'3:3':[
    'مؤمن describes رجل itself and normally matches its case, definiteness, gender and number. A derivative has an understood returning bearer: subject with اسم الفاعل, deputy subject with اسم المفعول. Established agreement conventions still apply.',
    'In من هذه القرية الظالم أهلها, الظالم describes the town’s people. It follows القرية in جر and definiteness, and its gender relates to أهل. With a following overt bearer it normally remains singular, rather than copying that bearer’s number as the source says.',
  ]}, boxCopy:{'0:2':['النعت، أو الصفة: وصف يتبع منعوته في الإعراب.'],'1:1':['مشتق: اسم فاعل، اسم مفعول، صفة مشبهة.'],'2:2':['ياء النسبة تجعل الاسم وصفا منسوبا.'],'3:1':['حقيقي: وصف للمنعوت؛ سببي: وصف لما يتعلق به.'],'4:0':['للسببي رابط بالمنعوت؛ وقد تفسر أل بالنّيابة عن الضمير.']}, tableCopy:{'2:1':{
    0:['اسم إشارة','اذهبوا بقميصي هذا','هذا: المشار إليه, in the source’s نعت account'],
    1:['ذو وفروعها','جنتين ذواتي أكل خمط','Possessing: ذو، ذوا، ذوو، ذات، أولات; ذواتي means صاحبتي'],
    2:['مصدر غير ميمي','رجل عدل','عدل describes emphatically as عادل. The source’s fragment بهتان كاذبين does not clearly illustrate a مصدر as نعت.'],
    3:['موصول ذو أل','اعبدوا ربكم الذي خلقكم','الذي describes ربكم; the source contrasts these forms with general من and ما.'],
    4:['عدد','في ظلمات ثلاث','ثلاث describes how many ظلمات'],
  },'3:2':{0:['حقيقي','Case, definiteness, gender, number','An understood bearer','رجل مؤمن'],1:['سببي','Case and definiteness of the منعوت','An overt related bearer','القرية الظالم أهلها']}}, visuals:{'4:1':v('Direct and related attribution',['مكة المكرمة','Honor attributed to the city'],['القرية الظالم أهلها','Wrongdoing attributed to its people'])}, analysisPrompt:'Use the lesson’s نعت analysis.', analysisLabels:{'نعت (مشتق بمعنى الفعل: اسم فاعل) مرفوع':'نعت مرفوع: اسم فاعل','نعت (مشتق بمعنى الفعل: اسم مفعول) مرفوع':'نعت مرفوع: اسم مفعول','نعت (مشابه للمشتق: اسم إشارة) مرفوع':'نعت مرفوع: اسم إشارة','اسم مجرور بالباء (منعوت، مضاف لياء المتكلم)':'منعوت مجرور، مضاف لياء المتكلم','اسم مجرور بالباء (منعوت، مضاف لكاف الخطاب)':'منعوت مجرور، مضاف لكاف الخطاب'}, analysisItemLabels:{'bank-18':{'مبتدأ مرفوع':'مفعول به منصوب'},'bank-19':{'بدل مجرور':'بدل منصوب'}} }),
};

export const checks = {
  '30/l1':[
    q('What case belongs to خبر كان?', ['نصب','رفع','جر','Always بناء على الفتح'], 'Compare its government with the ordinary predicate.'),
    q('Can خبر ليس precede its اسم in ليس سواء عالم وجهول?', ['Yes, while ليس stays first','No, every predicate has fixed order','Only ليس ever permits this','Only كان permits this'], 'سواء precedes عالم.'),
    q('Why can قائما not move before مصدرية ما in ما دام زيد قائما?', ['It cannot cross the boundary of its صلة','دام has no predicate','قائما can never be fronted','زيد must always immediately follow دام'], 'The restriction concerns crossing ما.'),
    q('Why is بشرا accusative in ما هذا بشرا?', ['Operating ما shares ليس’s negative government','بشرا is always accusative','هذا assigns accusative case','ما is مصدرية here'], 'Here ما raises its اسم and assigns نصب to its خبر.'),
    q('Does the origin dispute change لات’s predicate case in the taught analysis?', ['No, it remains منصوب','Only one account has a predicate','Only one account permits نصب','Neither has a predicate'], 'Separate word formation from government.'),
  ],
  '30/l2':[
    q('What is عاصيا when it governs أمه in لا عاصيا أمه ...?', ['شبيه بالمضاف, with actual نصب','مضاف, built on فتح','مفرد, built in محل نصب','It cannot be اسم لا'], 'Its complement is an object, not مضاف إليه.'),
    q('On what is رجلين built in لا رجلين?', ['ياء','فتح','فتح or كسر','ضم'], 'The noun is dual.'),
    q('Why is لا repeated before الشمس and الليل in the taught pattern?', ['They are definite; لا is inoperative','Both nouns are feminine','Each noun everywhere requires a new لا','Every و automatically requires لا'], 'Definiteness prevents the جنس-governing construction.'),
    q('Which pattern is لا بيعٌ فيه ولا خلةٌ ولا شفاعةٌ?', ['Raised first and following nouns','All built on فتح','Built first, raised second','Raised first, built second'], 'Read the visible ضم with tanwin.'),
    q('Is omitting بأس in لا عليك obligatory?', ['No, it is an attested permitted omission','Yes, whenever context allows','Yes, لا cannot keep an اسم','It is allowed only with إضافة'], 'لا بأس عليك also remains possible.'),
  ],
  '30/l3':[
    q('What gives القسط its جر in بالقسط?', ['The preposition باء','إضافة','A retained subject role','A retained object role'], 'This باء is an ordinary preposition.'),
    q('What gives أيام its case in في ستة أيام?', ['إضافة to ستة','Accusative تمييز government','A subject position','Direct government by في'], 'في governs ستة; أيام completes the count’s إضافة.'),
    q('What is الله’s role in كفى بالله وكيلا?', ['Subject in محل رفع','Object in محل نصب','مبتدأ in محل رفع','إضافة complement'], 'The زائد باء affects the visible ending.'),
    q('What is شيء’s role in أن نشرك بالله من شيء?', ['Object in محل نصب','Subject in محل رفع','مبتدأ in محل رفع','Adjective in محل نصب'], 'Compare نشرك بالله شيئا.'),
  ],
  '30/l4':[
    q('How does a نعت receive its case pattern?', ['It follows its متبوع','It always has نصب','It always has رفع','It has no case'], 'Distinguish dependency from a fixed case.'),
    q('What kind of descriptive form is مؤمن?', ['A verbal derivative','A form resembling a derivative','A demonstrative','A non-mimi مصدر'], 'It is اسم فاعل from آمن.'),
    q('How does the source classify descriptive دري?', ['Nisba makes a noun descriptive','Every nisba is اسم فاعل','Nisba can only name nationality','Tanwin itself makes it a derivative'], 'The pearl relation is expressed by ياء النسبة.'),
    q('Why is الظالم masculine in القرية الظالم أهلها?', ['Its related bearer is أهل','A نعت never agrees','القرية is masculine','الظالم is a second predicate'], 'The سببي gender relation concerns its following bearer.'),
    q('What supplies the returning relation in the source’s شديد العقاب account?', ['أل on العقاب','Tanwin on شديد','No relation is needed','An ordinary حقيقي hidden subject'], 'Compare شديد عقابه in the stated account.'),
    q('What happened to عملا in واعملوا صالحا?', ['It is understood; صالحا stands in its place','It became the adjective','أل replaced it','It remains visibly written'], 'Compare واعملوا عملا صالحا.'),
  ],
};

export const quizzes = {
  '30/l1':[
    q('What is the case of خبر كان?', ['نصب','رفع','جر','بناء']),
    q('What does سواء precede in ليس سواء عالم وجهول?', ['اسم ليس, عالم','ليس itself','The whole sentence','Nothing']),
    q('What does قائما precede in قائما كان زيد?', ['The incomplete verb itself','Only its اسم','A negating particle','An ordinary verbal subject']),
    q('Why is قائما ما دام زيد blocked?', ['A صلة element cannot precede مصدرية ما','دام has no predicate','قائما can only be حال','زيد must become indefinite']),
    q('What meaning connects operating ما, لا and لات with ليس?', ['Negation','The same initial letter','Prepositional government','Mandatory repetition']),
    q('Does لات’s origin dispute change its predicate in the taught analysis?', ['No, its predicate retains نصب','Only one view admits a predicate','The views necessarily give different cases','Neither view admits a predicate']),
  ],
  '30/l2':[
    q('What is عملَ in لا عمل مراء مقبول?', ['Inflected with نصب','Built on فتح','Built on ياء','Raised']),
    q('What is رجلَ in لا رجل?', ['Built on فتح in محل نصب','Inflected with نصب','Built on ياء','Raised']),
    q('On what is رجلين built in لا رجلين?', ['ياء','فتح','كسر','ضم']),
    q('What does the usual definite-noun pattern require?', ['Inoperative لا repeated','Omission of لا','Turning the definite noun indefinite','No change to operating جنس لا']),
    q('How many patterns are taught with the eligible repeated لا construction?', ['Five','Two','Three','Seven']),
    q('What is the omission of بأس in لا عليك?', ['Permitted in this attested construction','Obligatory','Impossible','Obligatory only with إضافة']),
  ],
  '30/l3':[
    q('How many types of direct جر does the source group?', ['Two','Three','Four','Five']),
    q('What governs الداع in أجيب دعوة الداع?', ['إضافة','An ordinary preposition','An augmenting preposition','It is actually nominative']),
    q('Is أيام accusative in في ستة أيام?', ['No, it has إضافة جر','Yes, every specification has نصب','Yes, merely because a number precedes','No, في directly governs it']),
    q('What is الله in كفى بالله وكيلا?', ['Subject in محل رفع','Object in محل نصب','مبتدأ in محل رفع','إضافة complement']),
    q('What is شيء in نشرك بالله من شيء?', ['Object in محل نصب','Subject in محل رفع','مبتدأ in محل رفع','An adjective']),
    q('Does زائد prepositional جر erase the underlying sentence role?', ['No, it retains its role','Yes, its prior role disappears','Yes, it becomes indeclinable','It retains the role only after باء']),
  ],
  '30/l4':[
    q('What defines النعت?', ['A description following its noun in case','A noun with an unrelated fixed case','The described noun itself','A coordinating particle']),
    q('What form is مؤمن in رجل مؤمن?', ['A verbal derivative','A form resembling one','A non-mimi مصدر','A number']),
    q('What form is هذا in the source’s قميصي هذا description?', ['A form interpreted descriptively','A verbal derivative','A non-mimi مصدر','A relative noun']),
    q('What bearer follows الظالم in the سببي example?', ['An overt related noun','A second hidden pronoun','No bearer','A pronoun attached to القرية']),
    q('What represents the relation in the source’s شديد العقاب account?', ['أل on العقاب','Tanwin on شديد','No relation is required','An ordinary حقيقي hidden subject']),
    q('What happened to عملا in واعملوا صالحا?', ['It is omitted; صالحا stands in its place','It became the description','أل replaced it','It is still visibly present']),
  ],
};

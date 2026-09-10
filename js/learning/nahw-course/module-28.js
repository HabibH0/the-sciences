import { card as c, rows as r, part as p, visual as v, question as q, plan } from './helpers.js';

export const plans = {
  '28/l1': plan(130, 'Clarifying a Word or Quantity', [
    [c('What does the specification clarify?', 0, 1, 2, 3)],
    [c('An explicit number', 0, r(1,0), p(2,0)), c('An unspecified number', r(1,1), p(2,1))],
    [c('Volume and capacity', 0, r(1,0), p(2,0)), c('Weight', r(1,1), p(2,1)), c('Area', r(1,2), p(2,2))],
    [c('An approximate quantity', 0, 1, 2)],
    [c('An expression treated like a measure', 0, 1, 2), c('An object made from the specified material', 3, 4, 5)],
  ], [
    ['تمييز', 'Specifies a word or relation; may reinforce meaning.'],
    ['Number', 'صريح gives a count; مبهم leaves the count unspecified.'],
    ['Measure', 'الكيل, الوزن and المساحة specify volume, weight and area.'],
    ['Extensions', 'Approximate measures, measure-like expressions and material constructions.'],
  ], { copy:{
    '0:0':'التمييز is the seventh منصوب in this sequence.',
    '0:2':'It normally supplies an indefinite noun explaining what is meant. Sometimes the intended kind is already clear and the specification reinforces it.',
    '0:3':'تمييز المفرد clarifies a word, often a number or measure. تمييز النسبة, also تمييز الجملة, clarifies a relation expressed by the sentence. مفرد here does not mean singular in number.',
    '1:0':'A number may state an explicit count or leave the count unspecified.',
    '2:0':'المقدار names a measured quantity. Its three source categories use volume, weight and area.',
    '3:0':'ما يشبه المقدار uses a sensory estimate instead of a standardized measure.',
    '3:2':'“There is not a palm’s width of cloud in the sky.” قدر راحة estimates an extent using the palm. سحابا specifies what fills that extent. The distinction is standardized measurement versus approximation, not whether the hand is a physical object.',
    '4:0':'Two more constructions extend the quantity pattern.',
    '4:2':'ولو جئنا بمثله مددا, “even if We brought the like of it as reinforcement”, illustrates ما أجري مجرى المقادير in the source’s تمييز account. مددا clarifies بمثله, which expresses equivalence without a measuring unit. A حال analysis also exists.',
    '4:3':'In عندي خاتم فضة, “I have a silver ring”, the ring is a formed object made from the specified material. This is ما هو فرع للتمييز: the preceding object is a فرع of the material named by the تمييز.',
    '4:5':'The source notes variation in classifying such extensions. Keep their meanings clear: مماثلة in بمثله مددا, and material in خاتم فضة. For the latter, the إضافة form خاتمُ فضةٍ is more usual.',
  }, copyParts:{'1:2':[
    'In رأيت أحد عشر كوكبا, “I saw eleven stars”, كوكبا answers “eleven of what?” It specifies the explicit number أحد عشر.',
    'كم آتيناهم من آية بينة, “how many a clear sign We gave them”, leaves the count unspecified. آية identifies what is counted. This verse admits discussions of interrogative and declarative كم; either way, its number is مبهم.',
  ],'2:2':[
    'عندي لتر لبنا, “I have a litre of milk”: لتر names a volume unit; لبنا specifies milk. A unit is not itself the measuring instrument.',
    'مثقال ذرة خيرا specifies good measured by weight. In the source’s تمييز account, خيرا clarifies the quantity; a بدل analysis is also recorded. ذرة remains the إضافة complement of مثقال.',
    'عندي جريب نخلا names an area planted with palms. جريب is a traditional area unit, not the measuring tool; نخلا specifies the palms occupying it.',
  ]}, boxCopy:{'0:1':['التمييز: ما يرفع الإبهام عن مفرد أو نسبة.'],'4:1':['ما أجري مجرى المقادير: ما يوضح بتمييز دون مقدار حقيقي.'],'4:4':['خاتمٌ فضةً؛ والإضافة خاتمُ فضةٍ أكثر استعمالا.']}, tableCopy:{'1:1':{0:['عدد صريح','رأيت أحد عشر كوكبا','Eleven stars'],1:['عدد مبهم','كم آتيناهم من آية بينة','An unspecified count of clear signs']},'2:1':{0:['الكيل','Volume','عندي لتر لبنا','A litre of milk'],1:['الوزن','Weight','مثقال ذرة خيرا','An atom’s weight of good'],2:['المساحة','Area','عندي جريب نخلا','An area of palms']}}, analysisItemLabels:{'bank-18':{'العدد الصريح':'عدد صريح، مفعول به','تمييز مفرد منصوب':'تمييز نسبة منصوب','مفعول به منصوب':'فاعل مرفوع','العدد الصريح منصوب':'عدد صريح في محل رفع'},'bank-19':{'مبتدأ مؤخر':'خبر مقدم مرفوع'}} }),
  '28/l2': plan(131, 'Clarifying Relations and Number Rules', [
    [c('No reconstructed earlier role', 0, 1, 2, 3)],
    [c('From a subject relation', 0, 1, 2), c('From a direct-object relation', 3, 4)],
    [c('From a subject of predication', 0, 1, 2), c('The related اسم كان pattern', 3, 4)],
    [c('The normal indefinite form', 0, 1, 2), c('Why some specifications are genitive', 3, 4), c('Numbers 3 through 10', 5, r(6,0), p(7,0)), c('Hundreds and thousands', r(6,1), p(7,1)), c('Numbers 11 through 99', r(6,2), p(7,2))],
    [c('Asking how many', 0, 1, 2, 3), c('Expressing abundance with من', 4, 5, p(6,0)), c('Expressing abundance without من', p(6,1))],
    [c('Form and separation after كم', 0, 1, 2), c('A separated specification with من', 3, 4), c('An understood specification', 5), c('A specification can reinforce meaning', 6, 7, 8)],
  ], [
    ['Relation', 'غير محول; or محول from subject, object or مبتدأ.'],
    ['Explicit counts', '3–10: plural جر. 100/1000: singular جر. 11–99: singular نصب.'],
    ['كم', 'Interrogative: normally singular نصب. Declarative: normally جر.'],
    ['Context', 'A specification may be understood or reinforce meaning.'],
  ], { copy:{
    '0:0':'تمييز النسبة clarifies the sentence’s relation. Its first type is غير محول.',
    '0:3':'لله دره فارسا means ما أعظم فروسيته, “what a horseman he is!” In this تمييز account, فارسا has no reconstructed earlier subject or object role. The reconstruction is grammatical, not historical.',
    '1:0':'محوّل relates the specification to another grammatical role. The source associates the change with emphasis and specification.',
    '1:2':'واشتعل الرأس شيبا attributes the spreading whiteness to the head as a whole, intensifying the image. The usual reconstructed relation is اشتعل شيب الرأس, with شيب as subject. This corrects the source’s awkward شاب شيب الرأس paraphrase.',
    '1:4':'فجرنا الأرض عيونا, “We caused the earth to burst forth with springs”, corresponds to فجرنا عيونَ الأرض. عيون is the original direct-object relation; الأرضَ becomes the expressed object. The wording emphasizes the abundance across the earth.',
    '2:0':'A third source is مبتدأ, including the corresponding اسم كان or اسم إنّ relation.',
    '2:2':'أنا أكثر منك مالا, “I have more wealth than you”, corresponds to مالي أكثر من مالك. مال is related to the original مبتدأ; أنا takes the subject position in the expressed comparison.',
    '2:4':'وكان الإنسان أكثر شيء جدلا describes the human as most disputatious among creatures. The reconstructed كان جدال الإنسان أكثر شيء places جدال as اسم كان. It is grouped with مبتدأ, not a claim that disputation is merely the largest feature within a person.',
    '3:0':'Two general points precede the number rules.',
    '3:2':'The normal تمييز is indefinite: كوكبا and شيبا are examples.',
    '3:4':'The source includes التمييز among المنصوبات by تغليب, its dominant pattern. In a broad use of “specification”, some forms instead have جر by إضافة or a preposition. Their actual syntax must still be identified.',
    '3:5':'For explicit counts, the number determines the following specification’s form.',
    '4:0':'The two uses of كم have different normal patterns.',
    '4:3':'كم يوما لبثت, “how many days did you stay?”, has singular accusative يوما. The specification may be omitted when recoverable: كم لبثتم can mean كم يوما لبثتم. This is the normal rule; a preposition before interrogative كم can also license جر of its specification.',
    '5:0':'The specification’s form and distance from كم need separate attention.',
    '5:2':'The normal declarative pattern has an adjacent indefinite specification, singular or plural. The source also admits forms with أل and separation. Generic أل, as in القرون, needs interpretation; this is not unrestricted permission for every definite noun. Separation does not universally require من: accusative constructions are also attested.',
    '5:4':'كم أهلكنا قبلهم من القرون, “how many generations before them We destroyed”, has separation by أهلكنا قبلهم and an overt من governing القرون. The source’s rule describes this chosen genitive construction; it should not exclude all other separated patterns.',
    '5:5':'وكم علمته نظم القوافي فلما قال قافية هجاني, “how often I taught him verse, yet when he made a verse he lampooned me.” Context supplies كم مرة علمته. A recoverable specification may be omitted after declarative كم too.',
    '5:6':'A تمييز can reinforce something already understood.',
    '5:8':'إن عدة الشهور عند الله اثنا عشر شهرا already identifies months through الشهور. شهرا reinforces the known category rather than resolving a new uncertainty.',
  }, copyParts:{'3:7':[
    'ثلاثة أيام, “three days”, illustrates 3–10: the counted noun is plural and genitive by إضافة.',
    'فأماته الله مائة عام and كألف سنة illustrate مائة and ألف: the counted noun is singular and genitive by إضافة.',
    'أحد عشر كوكبا illustrates 11–99: a singular accusative specification. “Everywhere else” in the source is too broad; one, two and compound counts have their own constructions.',
  ],'4:6':[
    'كم من فئة قليلة غلبت فئة كثيرة بإذن الله expresses abundance: many a small party overcame a large one by Allah’s permission. فئة is genitive after the overt من in this example.',
    'كم ملوك باد ملكهم ونعيم سوقة بادوا has plural ملوك in جر without an overt من: many kings and their kingdoms, and prosperous common people, passed away. The source posits a hidden من; the إضافة account is also established. The visible جر does not settle that disagreement.',
  ]}, boxCopy:{'0:1':['غير محول: لا يرد في التحليل إلى فاعل أو مفعول أو مبتدأ.'],'3:3':['يدرج التمييز في المنصوبات تغليبا في اصطلاح المصدر.'],'4:4':['تمييز كم الخبرية مجرور في النمط المعتاد؛ بمن أو بالإضافة.'],'5:1':['تمييز كم الخبرية: مفرد أو جمع؛ والأصل التنكير والاتصال.']}, tableCopy:{'3:6':{0:['3–10','Plural genitive by إضافة','ثلاثة أيام'],1:['100 / 1000','Singular genitive by إضافة','مائة عام؛ ألف سنة'],2:['11–99','Singular accusative','أحد عشر كوكبا']}}, visuals:{'3:0':v('The usual indefiniteness',['كوكبا','A star, after a number'],['شيبا','White hair, in a relation']),'4:2':v('Abundance without a written من',['كم ملوك','Genitive specification'],['من مقدرة / إضافة','Different accounts of its government'])}, analysisLabels:{'تمييز نسبة محوّل من الفاعل منصوب':'تمييز محول من الفاعل','تمييز نسبة محوّل من المبتدأ منصوب':'تمييز محول من المبتدأ','تمييز نسبة محوّل من المفعول به منصوب':'تمييز محول من المفعول','تمييز نسبة غير محوّل منصوب':'تمييز غير محول منصوب'} }),
};

export const checks = {
  '28/l1':[
    q('What does تمييز normally clarify?', ['A vague word or sentence relation','A verb’s tense','Only an explicit number','Only an omitted subject'], 'Identify what needs specification.'),
    q('What does كوكبا specify in أحد عشر كوكبا?', ['What the eleven are','Who saw them','The manner of seeing','The time of seeing'], 'The number needs a counted kind.'),
    q('What does لتر measure in لتر لبنا?', ['الكيل','الوزن','المساحة','العدد الصريح'], 'A litre is a volume unit.'),
    q('What category describes قدر راحة سحابا?', ['ما يشبه المقدار','الكيل','الوزن','العدد المبهم'], 'The palm provides an approximate extent.'),
    q('Which form is more usual for a silver ring?', ['خاتمُ فضةٍ, with إضافة','خاتمٌ فضةً, always','Both are equally rare','Neither is grammatical'], 'Compare the material construction’s alternatives.'),
  ],
  '28/l2':[
    q('What does غير محول mean for فارسا in لله دره فارسا?', ['No reconstructed earlier grammatical role','Originally a subject','Originally a direct object','Originally a مبتدأ'], 'Consider the adopted تمييز account.'),
    q('Which reconstructed role underlies شيبا in اشتعل الرأس شيبا?', ['فاعل','مفعول به','مبتدأ','خبر إنّ'], 'Compare اشتعل شيب الرأس.'),
    q('Which source category includes جدلا in وكان الإنسان أكثر شيء جدلا?', ['مبتدأ وما في حكمه','فاعل','مفعول به','غير محول'], 'اسم كان corresponds to the subject of predication.'),
    q('What is the counted noun’s pattern after 3–10?', ['Plural genitive by إضافة','Singular accusative','Plural nominative','Singular genitive after من'], 'Compare ثلاثة أيام.'),
    q('What is يوما in كم يوما لبثت?', ['Singular accusative','Genitive after من','Genitive by إضافة','Nominative'], 'This is ordinary interrogative كم.'),
    q('What governs القرون in كم أهلكنا قبلهم من القرون?', ['An overt preposition','An accusative number','إضافة to كم','An omitted specification'], 'Identify the written من.'),
  ],
};

export const quizzes = {
  '28/l1':[
    q('What are the two main تمييز kinds?', ['تمييز المفرد وتمييز النسبة','اسم عين واسم معنى','اسم صريح واسم مؤول','مقدار وشبه مقدار']),
    q('What kind of number is أحد عشر?', ['صريح','مبهم','مقدار','شبه مقدار']),
    q('What kind of number does كم express?', ['مبهم','صريح','كيل','وزن']),
    q('Which measure category includes مثقال?', ['الوزن','الكيل','المساحة','شبه المقدار']),
    q('What category describes قدر راحة سحابا?', ['ما يشبه المقدار','الكيل','الوزن','العدد الصريح']),
    q('What category is taught for خاتمٌ فضةً?', ['ما هو فرع للتمييز','الكيل','الوزن','العدد المبهم']),
  ],
  '28/l2':[
    q('What kind of تمييز نسبة is فارسا in the taught praise construction?', ['غير محول','محول من الفاعل','محول من المفعول','محول من المبتدأ']),
    q('What reconstructed role underlies عيونا in فجرنا الأرض عيونا?', ['مفعول به','فاعل','مبتدأ','خبر كان']),
    q('What reconstructed role underlies مالا in أنا أكثر منك مالا?', ['مبتدأ','فاعل','مفعول به','اسم إنّ']),
    q('How do the counted nouns after 100/1000 and 3–10 differ?', ['Singular versus plural; both genitive by إضافة','Accusative versus genitive','Only 3–10 permit a specification','Only 100/1000 specify a relation']),
    q('Why are يوما and فئةٍ different after their respective كم examples?', ['Interrogative normally takes نصب; declarative here has من','Both must always take نصب','They reverse word and relation specification','Declarative كم never has a specification']),
    q('What does شهرا do after إن عدة الشهور ... اثنا عشر?', ['Reinforces an already known category','Reconstructs an earlier subject','Completes إضافة to الشهور','Serves as خبر إنّ']),
  ],
};

import { card as c, rows as r, part as p, visual as v, question as q, plan } from '../nahw-course/helpers.js';
const list = (title, refs, items) => ({ ...c(title, ...refs), lists: [items] });

export const plans = {
  'as-01/l1': plan(1, 'What Morphology Studies', [
    [c('The ordinary meaning: change', 0, 1, 2), c('An activity and its rules', 3, r(4,0,1), 5)],
    [list('The words morphology studies', [0,1,2,3,4], [3,4]), c('Forms that only resemble derivation', 5, 6)],
    [c('Origins and benefit', 0, r(1,0,1), 2), c('Sources and responsibility', r(1,2,3))],
    [list('Four features of a word’s shape', [0,1,2,3,4,5], [2,3,4,5]), c('A word carries an assigned meaning', 6, 7)],
  ], [
    ['صرف', 'Change in ordinary usage; forming words and studying their rules technically.'],
    ['Scope', 'أسماء متمكنة and أفعال متصرفة; root letters, additions and sound changes.'],
    ['بناء', 'Vowels, sukūn, letter count and order make up a word’s shape.'],
    ['Purpose', 'Correct individual words in speech and writing; distinct from syntactic إعراب and بناء.'],
  ], { copy: {
    '0:0':'الصرف, also called التصريف, means “change” in ordinary Arabic.',
    '0:2':'تصريف الرياح is the turning or changing of the winds: تغييرها.',
    '0:3':'The technical term names both an activity and a discipline.',
    '0:5':'Syntactic إعراب and بناء belong to نحو. Here, أبنية means word shapes, a different use of بناء.',
    '1:1':'Study Arabic words through صحة and إعلال, original and added letters, and related changes.',
    '1:2':'The normal domain consists of:',
    '1:3':'الأسماء المتمكنة: nouns that decline.',
    '1:4':'الأفعال المتصرفة: verbs that conjugate.',
    '1:6':'Some relative and demonstrative nouns have forms resembling duals, plurals or diminutives. The source calls these صوري, formal resemblance, rather than real derivation of a متمكن noun. For example, اللذان corresponds to الذي.',
    '2:0':'The source introduces the discipline through these principles.',
    '2:2':'نحو protects syntactic endings; صرف protects the individual word’s form.',
    '3:0':'أبنية is the plural of بناء: the observable shape of a word.',
    '3:2':'حركة: its vowels.', '3:3':'سكون: absence of a vowel.',
    '3:4':'عدد الحروف: its letter count.', '3:5':'ترتيب: the letters’ order.',
    '3:7':'كلمة is a single expression assigned to a meaning. Uttering it brings that assigned meaning to mind.',
  }, tableCopy:{
    '0:4':{0:['عملي','Forming different patterns from one أصل for meanings that require those forms.','اسم الفاعل والمفعول؛ اسم التفضيل؛ التثنية والجمع'],1:['علمي','Principles explaining word shapes, excluding syntactic إعراب and بناء.','The discipline governing those changes.']},
    '2:1':{0:['الواضع','The source names معاذ بن مسلم الهَرّاء, with doubled ر, and reports another attribution to سيدنا علي كرّم الله وجهه.'],1:['الثمرة','Avoiding errors in individual words and observing Arabic rules in writing.'],2:['الاستمداد','The speech of الله تعالى, His Messenger ﷺ and the Arabs.'],3:['حكمه','The source states وجوب كفائي: a communal obligation, lifted from others when enough people undertake it.']},
  }, visuals:{'3:0':v('The vowel changes the form',['عَلِمَ','He knew'],['عُلِمَ','It was known'])},
  analysisPrompt:'Match each definition to its sense of صرف.', analysisHint:'عملي names the activity; علمي names the principles that explain it.',
  analysisText:{'table-0-4':{
    'The Two Technical Senses':'معنيا الصرف',
    'turning the one أصل into different أمثلة, for intended meanings that cannot be reached any other way':'Forming words for their intended meanings',
    'a body of أصول by which the أحوال of أبنية الكلمة are known — those states which are neither إعراب nor بناء':'Principles explaining word shapes, excluding إعراب and بناء',
  }}, analysisLabels:{'بالمعنى العَمَلي':'عملي','بالمعنى العِلْمي':'علمي'} }),

  'as-01/l2': plan(2, 'Word Classes and Their Signs', [
    [c('Independent meaning and tense', 0, 1, r(2,0,1), 3), c('A particle depends on other words', r(2,2), 4, 5, 6)],
    [list('Six ways to recognise a noun', [0,1,2,3,4,5,6], [1,2,3,4,5,6]), c('Find noun signs in a sentence', 7, 8, 9, 10), c('Calling upon Ibrāhīm', 11, 12, 13)],
    [c('قد, س and سوف', 0, r(1,0,1), p(2,0)), c('نصب and جزم identify a verb', r(1,2,3), p(2,1)), c('Two kinds of attached تاء', r(1,4,5), p(2,2)), c('Heavy and light emphasis', r(1,6), 3), c('Addressing a feminine singular', r(1,7), p(2,3))],
    [c('A particle accepts neither set', 0, 1, 2), c('Test acceptance in actual usage', 3, 4, 5, 6)],
  ], [
    ['Meaning', 'اسم and فعل carry independent meaning; فعل also carries tense.'],
    ['اسم', 'جر، أل، تنوين، إضافة، إسناد إليه، نداء. One valid sign suffices.'],
    ['فعل', 'قد، س/سوف، نواصب، جوازم، تاء الفاعل، تاء التأنيث، نون التوكيد، ياء المخاطبة.'],
    ['حرف', 'Accepts neither set as a particle in its normal use.'],
  ], { copy:{
    '0:1':'Three classes: اسم, فعل and حرف.',
    '0:3':'Independent meaning separates اسم and فعل from حرف; tense distinguishes فعل from اسم.',
    '0:4':'A حرف contributes meaning through its construction.',
    '0:6':'Particles are outside the normal scope of صرف. The following signs therefore concern nouns and verbs.',
    '1:0':'Accepting any one valid sign establishes an اسم.',
    '1:1':'حرف جر: the noun receives جر.', '1:2':'أل: the noun marker.',
    '1:3':'تنوين: ordinary nominal tanwīn.', '1:4':'إضافة: the noun is مضاف.',
    '1:5':'إسناد إليه: something is said about it.', '1:6':'نداء: the noun is called upon.',
    '1:7':'“Praise belongs to Allah, originator of creation from nothing.”',
    '1:10':'In the إضافة reading, منشئ governs الخلق as its genitive complement. A participle reading with الخلقَ as object requires منشئٍ. عدمٍ has tanwīn in connected speech; pausing omits its sound.',
    '1:11':'“O Ibrāhīm, you have fulfilled the vision.”',
    '1:13':'يا إبراهيم shows نداء; الرؤيا repeats the sign أل. Calling supplies a new sign, although أل already appeared in الحمد.',
    '2:0':'The source lists eight verb signs. Each has a Quran example except تاء التأنيث الساكنة.',
    '2:3':'“He will certainly be imprisoned and be among the humbled.” يُسْجَنَنَّ has heavy, doubled نون; يَكُونًا has light نون, written here with alif.',
    '3:0':'A particle has no corresponding positive marker in these lists.',
    '3:2':'It accepts none of the features distinctive of اسم or فعل. Test whether a word can take a sign, not whether a sign happens to be visible.',
    '3:3':'The noun and verb signs reflect how those classes are used: with أل or نداء, or with a tense-related particle such as قد.',
    '3:4':'A حرف lacks independent meaning and does not accept either class’s markers in its ordinary particle use.',
    '3:6':'Try the noun and verb tests in established Arabic usage. Quoting the name of a particle can make that expression function as a noun.',
  }, copyParts:{'2:2':[
    'قد أفلح: “He has succeeded who purifies himself.” سنقرئك: “We shall make you recite, so you will not forget.” ولسوف يعطيك: “Your Lord will give you, and you will be satisfied.”',
    'لن تنالوا: “You will not attain righteousness until you spend from what you love.” لم يلد ولم يولد: “He neither begets nor is begotten.” لن and لم enter verbs.',
    'وسعت: “Our Lord, You encompass everything in mercy and knowledge.” سقيت: “The wage for watering for us.” Both contain subject تاء. The silent feminine تاء is a separate sign.',
    'ارجعي: “Return to your Lord, well-pleased and pleasing.” The attached ي is ياء المخاطبة.',
  ]}, boxCopy:{'1:8':['الحَمْدُ لِلَّهِ مُنْشِئِ الخَلْقِ مِنْ عَدَمٍ'],'3:5':['العبرة بقبول العلامة، لا بوجودها في كل استعمال.']}, tableCopy:{
    '0:2':{0:['اسم','Meaning without tense in its form','رَجُل؛ كِتَاب'],1:['فعل','Meaning with tense in its form','كَتَبَ؛ يَقْرَأُ؛ احْفَظْ'],2:['حرف','Meaning understood through other words','هَلْ؛ فِي؛ لَمْ']},
    '1:9':{0:['الحمد','أل and إسناد إليه'],1:['لله','جر by the لام'],2:['عدم','جر by مِنْ']},
    '2:1':{0:['قد','قَدْ أَفْلَحَ مَنْ تَزَكَّى [الأعلى: ١٤]'],1:['س / سوف','سَنُقْرِئُكَ فَلَا تَنْسَى [الأعلى: ٦]؛ وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى [الضحى: ٥]'],2:['النواصب','لَنْ تَنَالُوا الْبِرَّ حَتَّى تُنْفِقُوا مِمَّا تُحِبُّونَ [آل عمران: ٩٢]'],3:['الجوازم','لَمْ يَلِدْ وَلَمْ يُولَدْ [الإخلاص: ٣]'],4:['تاء الفاعل','رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَحْمَةً وَعِلْمًا [غافر: ٧]؛ أَجْرَ مَا سَقَيْتَ لَنَا [القصص: ٢٥]'],5:['تاء التأنيث الساكنة','Listed without a cited شاهد.'],6:['نون التوكيد','لَيُسْجَنَنَّ وَلَيَكُونًا مِنَ الصَّاغِرِينَ [يوسف: ٣٢]'],7:['ياء المخاطبة','ارْجِعِي إِلَى رَبِّكِ رَاضِيَةً مَرْضِيَّةً [الفجر: ٢٨]']},
  }, analysisPrompt:'Classify these words.',analysisHint:'Ask whether the form carries tense and whether its meaning depends on another word.',
  analysisLabels:{'الاسْم':'اسم','الفِعْل':'فعل','الحَرْف':'حرف'} }),

  'as-01/l3': plan(3, 'Weighing Three Root Letters', [
    [c('Match the root to ف ع ل', 0, 1, 2, 3)],
    [list('What the scale records', [0,1,2,3,4,5], [1,2,3,4])],
    [c('Keep the vowels and sukūn', 0, 1, 2, 3)],
    [c('Name the three root positions', 0, 1), c('Root names travel with the root', 2, 3, 4)],
  ], [
    ['ميزان', 'Represent three root letters with ف، ع، ل.'],
    ['Shape', 'Record vowels, sukūn, roots, additions, order and deletion.'],
    ['Example', 'قَمَر: فَعَل. حِمْل: فِعْل. كَرُمَ: فَعُلَ.'],
    ['Root names', 'In استخرج, خ is فاء, ر is عين and ج is لام.'],
  ], { copy:{
    '0:0':'Three root letters are the common starting point, represented by ف, ع and ل.',
    '0:2':'For انكسر, match ك س ر to ف ع ل and retain the added ان: انْكَسَرَ = انْفَعَلَ.',
    '0:3':'Match the relevant form. Later rules explain deletion, transposition and cases where the underlying form governs the scale.',
    '1:0':'The scale records four connected features:',
    '1:1':'حركات وسكنات: vowels and sukūn.',
    '1:2':'أصول وزوائد: roots and additions.',
    '1:3':'تقدم وتأخر: the letters’ order.',
    '1:4':'ذكر وحذف: retained and deleted letters.',
    '1:5':'Rules about additions, deletion and transposition record the corresponding feature.',
    '2:0':'Three roots, no additions: match the vowels.',
    '2:2':'Continue through the other ثلاثي patterns.',
    '2:3':'Only حركة and سكون change; ف ع ل stays fixed.',
    '3:0':'Name each root position using its corresponding scale letter.',
    '3:3':'In اسْتَخْرَجَ = اسْتَفْعَلَ, خ remains فاء, ر عين and ج لام. Added letters do not rename the root positions.',
    '3:4':'Thus مضاعف العين, معتل اللام and مهموز الفاء identify root positions even in a longer word.',
  }, tableCopy:{'2:1':{0:['قَمَر','فَعَل','فتحة on فاء and عين'],1:['حِمْل','فِعْل','كسرة on فاء; sukūn on عين'],2:['كَرُمَ','فَعُلَ','فتحة on فاء; ضمة on عين']}},
  visuals:{'0:0':v('Root and scale',['ك','ف'],['س','ع'],['ر','ل']),'3:1':v('Still خ ر ج',['خ','فاء الكلمة'],['ر','عين الكلمة'],['ج','لام الكلمة'])},
  patternTables:['2:1'],
  analysisPrompt:'Choose each word’s وزن.',analysisHint:'Match each vowel and sukūn to the corresponding root position.',
  analysisText:{'table-2-1':{'جِمْل':'حِمْل'}},analysisLabels:{'فَعُل':'فَعُلَ'} }),

  'as-01/l4': plan(4, 'Roots, Additions and Changed Order', [
    [c('Four roots: extend the scale', 0, r(1,0,1), 2, 3), c('Five roots: add a second لام', r(1,2))],
    [c('Repeat the corresponding root letter', 0, 1), c('Same وزن, different structure', 2, 3, 4)],
    [c('Keep an added letter itself', 0, r(1,0,1,2,3)), c('Repetition and addition together', r(1,4), 2)],
    [c('An exchanged تاء still has its place', 0, 1, 2), c('Trace the original تاء', 3, 4)],
    [c('Delete the corresponding letter', 0, 1, r(3,0,1,2), 4), c('Transpose the scale too', 2, r(3,3))],
  ], [
    ['Roots', 'For four or five roots, extend ف ع ل with one or two لام letters.'],
    ['Repetition', 'Repeat the matching scale letter; retain other additions themselves.'],
    ['Substitution', 'اضطرب weighs افتعل in the taught account, retaining original تاء.'],
    ['Deletion and order', 'قُلْ: فُلْ. قاضٍ: فاعٍ. عِدَة: عِلَة. جاه: عَفَل.'],
  ], { copy:{
    '0:0':'If the root itself has four letters, add one لام; for five, add two.',
    '0:2':'Extend the scale at its end with لام, not with another ف or ع.',
    '0:3':'The five quadriliteral examples share فَعْلَل. The past verbs also show final فتحة; nouns take their own endings. جحمرش has a separate five-root pattern.',
    '1:0':'If a root letter is repeated, repeat its counterpart in the scale.',
    '1:2':'دحرج has four roots. جلبب has three, with the third repeated. Both have the pattern فَعْلَلَ.',
    '1:4':'The وزن alone does not distinguish these histories: دحرج is رباعي مجرد; جلبب is مضاعف اللام.',
    '2:0':'Match the roots to ف ع ل and retain an added letter itself. سألتمونيها collects ten possible additions; a letter in that list can also be original.',
    '2:2':'In مَرْمَرِيس, repeating فع records repeated roots; ي is an addition kept as itself: فَعْفَعِيل.',
    '3:0':'A replacement for تاء الافتعال is normally weighed using the original تاء.',
    '3:2':'اضْطَرَبَ weighs افْتَعَلَ. The pronounced ط replaces ت. الرضي also permits reflecting the replacement in the scale.',
    '3:4':'These stages show the ت that the usual scale retains. This is not the only situation where an underlying form matters; إعلال has related rules.',
    '4:0':'The scale records deletion and transposition.',
    '4:1':'Delete the missing letter’s counterpart.',
    '4:2':'When root letters change order through قلب مكاني, move their scale counterparts too.',
    '4:4':'عِدَة comes from و ع د. Deleting واو, فاء الكلمة, leaves the scale عِلَة.',
  }, tableCopy:{
    '0:1':{0:['دَحْرَجَ؛ بَعْثَرَ؛ وَسْوَسَ','Four-root verbs; دحرج means “roll”','فَعْلَلَ'],1:['جَعْفَر؛ ثَعْلَب','Four-root nouns','فَعْلَل'],2:['جَحْمَرِش','Five roots; “an old woman”','فَعْلَلِل']},
    '1:1':{0:['قَدَّمَ','فَعَّلَ','مضاعف العين'],1:['جَلْبَبَ','فَعْلَلَ','مضاعف اللام']},
    '4:3':{0:['قُلْ','فُلْ','عين deleted'],1:['قَاضٍ','فَاعٍ','لام deleted'],2:['عِدَة','عِلَة','فاء deleted'],3:['جَاه','عَفَل','عين placed before فاء']},
  }, visuals:{'1:1':v('The same pattern',['دحرج','Four original letters'],['جلبب','Three roots; لام repeated'])},
  patternTables:['1:1','2:1','4:3'],
  analysisPrompt:'Choose the وزن that keeps the additions in place.',analysisHint:'Represent roots with ف ع ل; retain additions such as ا, ت and س.',
  }),
};

export const checks = {
  'as-01/l1':[
    q('What defines الصرف in its scientific sense?', ['Forming patterns from one أصل.', 'Principles explaining word shapes beyond إعراب and بناء.', 'Change, as in تصريف الرياح.', 'Avoiding errors in individual words.'], 'Distinguish the activity, its principles and its benefit.'),
    q('How does the source classify اللذان in relation to الذي?', ['إعلال, not تثنية.', 'صوري لا حقيقي.', 'حقيقي because its form changed.', 'A نحو operation because it is مبني.'], 'This is the source’s exception for relative and demonstrative forms.'),
    q('What does the source mean by وجوب كفائي?', ['Recommended, never obligatory.', 'Only for those who know نحو.', 'Required of every individual.', 'A communal duty fulfilled when enough undertake it.'], 'The ruling concerns the community’s need.'),
    q('Do عَلِمَ and عُلِمَ have the same بناء?', ['No; their vowels differ.', 'No; only because passive voice belongs to نحو.', 'Yes; vowels change only إعراب.', 'Yes; letters and order alone determine بناء.'], 'The definition includes حركة and سكون.'),
  ],
  'as-01/l2':[
    q('Which tense belongs to the command احْفَظْ?', ['An estimated tense that does not count.', 'None; it is اسم فعل.', 'Future: action sought after speaking.', 'Past.'], 'A command asks for an action to follow.'),
    q('Which sign identifies إبراهيم as an اسم in يا إبراهيم?', ['نداء.', 'إسناد إليه.', 'إضافة.', 'No sign establishes it.'], 'Identify what يا is doing here.'),
    q('Which sign identifies يعطي in ولسوف يعطيك ربك فترضى?', ['The لام before سوف.', 'سوف.', 'The attached ك.', 'ربك as مسند إليه.'], 'Which particle enters the verb itself?'),
    q('What identifies a حرف in these lists?', ['Accepting حروف الجر.', 'Accepting none of the noun or verb signs.', 'A separate positive marker of dependent meaning.', 'Accepting أل without tanwīn.'], 'Compare its acceptance with both classes.'),
  ],
  'as-01/l3':[
    q('Why begin with a three-letter scale?', ['The letters are all additions.', 'These letters cannot undergo إعلال.', 'Three-root words predominate.', 'These are the easiest letters to pronounce.'], 'The scale follows the common root structure.'),
    q('قُلْ weighs فُلْ. Which feature is being recorded?', ['Vowels and sukūn.', 'Roots and additions.', 'Earlier and later positions.', 'Retained and deleted letters.'], 'The counterpart of و is absent.'),
    q('What distinguishes the أوزان of قَمَر, حِمْل and كَرُمَ?', ['Letter count.', 'Vowels and sukūn.', 'Roots and additions.', 'Letter order.'], 'Each uses the same three scale letters.'),
    q('In مُجْتَهِد = مُفْتَعِل, which letter is عين الكلمة?', ['ت','م','ج','ه'], 'Find the middle root letter, not the second written letter.'),
  ],
  'as-01/l4':[
    q('زَلْزَلَ has four roots. What is its وزن?', ['فَعَّلَ','فَعْفَلَ','افْتَعَلَ','فَعْلَلَ'], 'Extend the three-root scale at its end.'),
    q('What distinguishes دحرج and جلبب, both فَعْلَلَ?', ['جلبب adds a letter from سألتمونيها.', 'دحرج has five roots; جلبب has four.', 'They have the same root structure.', 'دحرج has four roots; جلبب repeats its third root.'], 'Ask where the final letter comes from.'),
    q('Why retain م and ت in مُجْتَهِد = مُفْتَعِل?', ['They cannot match ف ع ل.', 'The word has four roots.', 'They are additions, kept as themselves.', 'They are roots; ج ه د are additions.'], 'Distinguish additions from ج ه د.'),
    q('What is the usual وزن of ازْدَجَرَ?', ['انْفَعَلَ','فَعْلَلَ','افْدَعَلَ','افْتَعَلَ'], 'The د replaces تاء الافتعال.'),
    q('Why does عِدَة weigh عِلَة?', ['Its عين is deleted.', 'Its لام is deleted.', 'No deletion; only reversal.', 'Its واو, فاء الكلمة, is deleted.'], 'Return to the root و ع د.'),
  ],
};

export const quizzes = {
  'as-01/l1':[q('What does صرف mean in ordinary Arabic?'),q('What does تصريف الرياح illustrate?'),q('Why exclude إعراب and بناء from the scientific definition?'),q('Which two word classes form صرف’s normal domain?'),q('Whom does the source name as واضع علم الصرف?'),q('Which list gives the features of a word’s بناء?')],
  'as-01/l2':[q('What distinguishes اسم and فعل in these definitions?'),q('How many noun signs does this source list?'),q('Which is NOT a listed verb sign?'),q('Which sign appears in ارجعي إلى ربك?'),q('Which sign appears in لم يلد ولم يولد?'),q('How is a حرف identified?')],
  'as-01/l3':[q('Why begin with three root positions?'),q('In ordinary forms, what does مصورة بصورة الموزون require?'),q('Which is NOT one of the four stated functions of the scale?'),q('What is the وزن of انْكَسَرَ?'),q('What does كَرُمَ = فَعُلَ record?'),q('Which letter is لام الكلمة in اسْتَخْرَجَ?')],
  'as-01/l4':[q('What is the وزن of دَحْرَجَ?'),q('What is the five-root وزن of جَحْمَرِش?'),q('How is an added letter from سألتمونيها represented?'),q('What is the وزن of مَرْمَرِيس?'),q('Why does اضطرب normally weigh افتعل?'),q('What happened in جَاه = عَفَل?')],
};

export const practice = {
  'as-01/l1':[q('Which set illustrates the practical results of صرف?', ['صحيح، معتل، مهموز، مضعف','مبتدأ، خبر، فاعل، مفعول','اسم الفاعل والمفعول؛ التفضيل؛ تثنية وجمع','مرفوع، منصوب، مجرور، مجزوم'], 'Think of forming words for different intended meanings.')],
  'as-01/l2':[q('What do اسم and فعل share that حرف lacks?', null, 'Ask whether the meaning is independently understood.')],
  'as-01/l3':[q('Why is فِعْل the wrong وزن for ضَرَبَ?', ['An addition is missing.', 'The scale letters are wrong.', 'Its vowels must match: فَعَلَ.', 'The order is wrong.'], 'Compare the vowels letter by letter.')],
  'as-01/l4':[q('How do you weigh a word with four original letters?', ['Repeat عين.', 'Add one لام.', 'Add two لام letters.', 'Keep the fourth letter itself.'], 'The scale needs a fourth root position.')],
};

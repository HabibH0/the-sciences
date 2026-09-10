import { card as c, rows as r, visual as v, question as q, plan } from '../nahw-course/helpers.js';
const clarification = { line: 'clarification' };
const list = (title, refs, items) => ({ ...c(title, ...refs), lists: [items] });

export const plans = {
  'as-03/l1': plan(8, 'Sound Roots and Weak Letters', [
    [list('Why these letters are called weak', [0,1,2,3,4,5], [3,4,5])],
    [c('Classify the roots, not the additions', 0,1,2,3,4)],
    [c('لين and مد describe the letter’s setting', 0, r(1,0,1), 2), c('Why alif always has both descriptions', 3,4,clarification)],
    [c('One weak root is enough', 0,1,2,3,4)],
  ], [
    ['صحيح', 'No weak root. Added letters do not affect this test.'],
    ['معتل', 'At least one weak root: و، ا، ي.'],
    ['لين', 'Here: a weak letter with sukūn after fatḥa.'],
    ['مد', 'Sukūn after a matching vowel. Alif is always both مد and لين here.'],
  ], {copy:{
    '0:0':'العلة means illness or weakness. The weak letters و، ا، ي are collected in واي.',
    '0:2':'These letters frequently undergo إعلال. The three operations are:',
    '0:3':'قلب: replacing one letter with another.',
    '0:4':'حذف: deleting a letter.',
    '0:5':'نقل الحركة: moving its vowel to the preceding letter. Deletion and substitution are not exclusive to weak letters.',
    '1:0':'The classification tests the أصول, the original letters.',
    '1:2':'كتب and جلس contain only sound root letters. The test also applies to roots with more than three letters.',
    '1:3':'An added weak letter does not make the root معتل.',
    '1:4':'كاتب، ضارب، عامل have added alif. Their roots كتب، ضرب، عمل remain sound.',
    '2:0':'These names depend on sukūn and the preceding vowel, using the source’s terminology.',
    '2:2':'Matching means fatḥa before alif, ḍamma before wāw, and kasra before yāʾ.',
    '2:4':'Wāw and yāʾ can carry vowels or follow a non-matching vowel.',
    '2:clarification':'وعد and يسر begin with vowelled weak letters. In ثوب and سيف, the still letter after fatḥa is لين, not مد. In يقول and قيل it is مد. Alif always has sukūn after fatḥa, so meets both descriptions here.',
    '3:0':'Return to the original letters when classifying a word.',
    '3:2':'وجد: found. قال: said. سعى: strove.',
    '3:3':'One weak root is sufficient; the majority being sound does not make the verb صحيح.',
    '3:4':'The weak position is first in وجد, middle in قال and last in سعى. Alif may represent an underlying wāw or yāʾ, as in قال from ق و ل.',
  }, boxCopy:{'0:1':['يصيب أحرف العلة الإعلال بالقلب والحذف ونقل الحركة.'], '2:3':['الألف حرف علة ومد ولين؛ لسكونها وفتح ما قبلها دائما.']},
  tableCopy:{'2:1':{0:['حرف لين','Sukūn after fatḥa','ثَوْب؛ سَيْف'],1:['حرف مد','Sukūn after a matching vowel','قَالَ؛ يَقُولُ؛ قِيلَا']}},
  analysisPrompt:'Match the examples to the sound description.', analysisHint:'After fatḥa, still wāw/yāʾ is لين. A matching vowel gives مد.',
  analysisLabels:{'حَرْفُ لِين':'حرف لين','حَرْفُ مَدّ':'حرف مد'} }),

  'as-03/l2': plan(9, 'Three Descriptions of Sound Roots', [
    [c('سالم excludes three features', 0,1,2), c('Every سالم is صحيح', 3,4,5)],
    [c('Two kinds of doubling', 0,1,2,3)],
    [c('The same second and third roots', 0,1), c('Why this doubling needs special rules', 2,3,clarification)],
    [c('A repeated pair of roots', 0,1,2)],
    [c('Hamza is a sound root letter', 0,1,2,3)],
  ], [
    ['سالم', 'No weak root, hamza or doubling. Every سالم is صحيح, but not conversely.'],
    ['مضعف ثلاثي ومزيده', 'عين and لام are identical; extra letters do not change the root type.'],
    ['مضعف رباعي', 'فاء matches first لام; عين matches second لام, as زلزل.'],
    ['مهموز', 'Has an original hamza. Hamza is sound but excludes سالم.'],
  ], {copy:{
    '0:1':'The source describes sound roots as سالم، مضعف or مهموز.',
    '0:2':'ضرب: struck. نصر: helped. قعد and جلس: sat. Each root is free of all three excluded features.',
    '0:4':'صحيح requires absence of weak roots only.',
    '0:5':'سالم also excludes hamza and doubling. A doubled or hamzated sound root therefore disproves the reverse statement.',
    '1:1':'الأصم, “the deaf”, is the source’s other name, referring to شدة, strength or density. It does not mean doubled letters can never separate.',
    '1:3':'Distinguish three original letters, with possible additions, from four original letters.',
    '2:1':'فرّ: fled. مدّ: extended. امتدّ: extended. استمدّ: drew help. The last two add letters to a three-letter root with matching عين and لام.',
    '2:3':'This wording singles out the special rules of three-root doubling.',
    '2:clarification':'Such rules govern merging, vowels and separation when pronouns attach. The four-root زلزل conjugates like دحرج; it lacks this particular merging problem, though morphology still studies it.',
    '3:1':'زلزل: shook. عسعس: grew dark. قلقل: agitated.',
    '3:2':'Read the four positions as ف ع ل ل. The first pair repeats: ز ل ز ل. The two لام positions need not match each other.',
    '4:1':'أخذ: took. سأل: asked. قرأ: read.',
    '4:2':'Hamza occurs in the first, middle and last root positions respectively.',
    '4:3':'Hamza is not a حرف علة. These are صحيح roots, but the additional exclusion of hamza prevents سالم.',
  }, boxCopy:{'0:0':['السالم: ما سلمت أصوله من أحرف العلة والهمزة والتضعيف.','ضَرَبَ؛ نَصَرَ؛ قَعَدَ؛ جَلَسَ'],'1:2':['المضعف قسمان: مضعف الثلاثي ومزيده، ومضعف الرباعي.']},
  visuals:{'3:0':v('Repeated root pair',['ز ل','First pair'],['ز ل','Repeated pair'])} }),

  'as-03/l3': plan(10, 'Initial and Middle Weak Roots', [
    [c('Locate the weak root', 0,1,r(2,0,1,2)), c('Two weak roots form لفيف', r(2,3),3)],
    [c('المثال has a weak first root', 0,1,2,3), c('Compare the past forms', r(4,0,1,2))],
    [c('الأجوف has a weak middle root', 0,1,2,3), c('Why it is called ذو الثلاثة', 4,5,6)],
    [c('Three vowelled subject pronouns', 0,1,2,r(3,0,1,2),4)],
  ], [
    ['مثال', 'Weak فاء: وعد، يسر.'],
    ['أجوف', 'Weak عين: قال، باع.'],
    ['ذو الثلاثة', 'قلت and بعت have three written letters including تاء الفاعل.'],
    ['Subject suffixes', 'تاء الفاعل، نا، نون النسوة share middle-root deletion in these hollow forms.'],
  ], {copy:{
    '0:1':'A single weak root gives three possibilities according to its position.',
    '0:3':'لفيف has two weak roots, either adjacent or separated by a sound root.',
    '1:1':'وعد: promised. يسر: was easy.',
    '1:3':'The name records resemblance to صحيح in the usual simple past: the weak first root remains in وعد and its illustrated conjugations.',
    '2:1':'قال: said. باع: sold.',
    '2:3':'“Hollow” means its middle root is weak, not sound. It does not mean every form has an unpronounced gap.',
    '2:4':'A second name records what happens with تاء الفاعل.',
    '2:6':'The middle weak letter disappears. The three-letter count includes attached ت; it is not the number of surviving roots.',
    '3:0':'Three pronouns share this deletion.',
    '3:2':'Each is an attached, vowelled subject.',
    '3:4':'قلنا has four letters. These hollow forms share middle-root deletion, not an identical written count.',
  }, boxCopy:{'0:0':['المعتل أربعة أقسام: مثال، أجوف، ناقص، لفيف.'],'3:1':['تاء الفاعل؛ نا المتكلمين؛ نون النسوة.']},
  tableCopy:{'1:4':{0:['أجوف','قَالَ؛ قُلْتُ','Substitution in قال; deletion in قلت.'],1:['ناقص','رَمَى؛ رَمَوْا','Substitution in رمى; deletion of the final root in رموا. Its wāw is the plural subject.'],2:['مثال','وَعَدَ؛ وَعَدْتُ؛ وَعَدُوا','No substitution or deletion of the weak root in these past forms.']}},
  tableTitles:{'1:4':'Compare the illustrated past forms'},
  analysisPrompt:'Match each weak position to its category.',analysisHint:'Locate the weak فاء, عين or لام.',
  analysisLabels:{'المِثَال':'المثال','الأَجْوَف':'الأجوف','النَّاقِص':'الناقص'} }),

  'as-03/l4': plan(11, 'Final Weak Roots and Two Weak Roots', [
    [c('ناقص can lose its final root', 0,1,2,3), c('Why it is called ذو الأربعة', 4,5,6,clarification)],
    [c('A sound root separates two weak roots', 0,1,2,3,4)],
    [c('Two adjacent weak roots', 0,1,2,3,4)],
    [c('The same root tests apply to nouns', 0,1,r(2,0,1,2)), c('Final weakness and two weak roots', r(2,3,4,5),3), c('Hamza and doubling in nouns', r(2,6,7,8))],
  ], [
    ['ناقص', 'Weak لام. غزت and رمت lose it; غزوت and رميت retain its underlying wāw or yāʾ.'],
    ['لفيف مفروق', 'Weak فاء and لام separated by sound عين: وفى.'],
    ['لفيف مقرون', 'Adjacent weak عين and لام: طوى and روى.'],
    ['Nouns', 'The same root classifications apply. This does not transfer verb conjugation rules to nouns.'],
  ], {copy:{
    '0:1':'غزا: waged war. رمى: threw.',
    '0:3':'The name records deletion of the final root in some forms, such as غزت and رمت.',
    '0:4':'Its second name uses the count with تاء الفاعل.',
    '0:6':'These forms retain the original wāw or yāʾ.',
    '0:clarification':'Compare ق ل ت, three letters, with غ ز و ت and ر م ي ت, four. غزت has feminine ت and loses the weak root; غزوت has subject ت and retains it. Count the illustrated forms, including the suffix.',
    '1:0':'لفيف has two weak roots and divides by their arrangement.',
    '1:2':'وفى means “fulfilled”.',
    '1:4':'Its فاء و and لام ى are separated by sound عين ف.',
    '2:1':'طوى: folded. روى: narrated.',
    '2:3':'Their two weak roots are next to one another.',
    '2:4':'مفروق has a sound root between them; مقرون has no intervening root.',
    '3:1':'Apply the same tests of original letters to nouns. The category names transfer; verb conjugation rules do not.',
    '3:3':'Wāw and yāʾ examples occur in pairs: وجه/يمن، قول/سيف، دلو/ظبي، جو/حي. The position determines the category.',
  }, boxCopy:{'0:5':['ويسمى ذا الأربعة: غَزَوْتُ؛ رَمَيْتُ.'],'1:1':['اللفيف المفروق: ما اعتلت فاؤه ولامه، نحو وَفَى.']},
  tableCopy:{'3:2':{1:['وَجْه؛ يُمْن','مثال']}},
  analysisPrompt:'Apply the root classification to each noun group.',analysisHint:'Look for no weak root, a weak first root, or a weak middle root.',
  analysisText:{'table-3-2':{'وَجْه، يَمُن':'وَجْه؛ يُمْن'}} }),
};

export const checks = {
  'as-03/l1':[
    q('Why are و، ا، ي called weak letters?', ['They occur only in verbs.','They frequently undergo قلب، حذف and نقل الحركة.','They can never carry a vowel.','They are always additions.'],'Think of their frequent changes.'),
    q('Why is ضارب sound despite its alif?', ['The alif is added; the roots are sound.','Alif is a sound letter.','Every noun is sound.','Only the first root matters.'],'Classify the original letters.'),
    q('In ثَوْب, what describes the still wāw after fatḥa?', ['Neither: it is sound.','لين, not مد.','مد, not لين.','Both مد and لين.'],'Fatḥa does not match wāw in kind.'),
    q('One of a verb’s roots is weak. What is the verb?', ['سالم','Its position decides whether it is weak.','معتل','صحيح, if most roots are sound.'],'One weak root suffices.'),
  ],
  'as-03/l2':[
    q('Why is every سالم صحيح, but not conversely?', ['سالم excludes weakness, hamza and doubling; صحيح only weakness.','Only سالم must have three roots.','Only صحيح excludes additions.','The terms mean exactly the same.'],'Compare the exclusions.'),
    q('What is the other name of مضعف, and why?', ['سالم: no weak roots.','أصم: its strength or density.','أجوف: its hollow middle.','أصم: its letters can never separate.'],'The name refers to شدة.'),
    q('Why is استمدّ doubled triliteral despite its additions?', ['All its written letters are roots.','فاء and first لام match.','It starts with hamza.','Three roots remain; عين and لام match.'],'Separate roots from additions.'),
    q('Which positions match in زلزل?', ['عين and first لام.','فاء and عين.','Only the two لام positions.','فاء/first لام and عين/second لام.'],'Read ز ل ز ل as two repeated pairs.'),
    q('Why is مهموز sound but excluded from سالم?', ['Hamza is sound, but سالم excludes it.','Hamza is a weak letter.','Only initial hamza is sound.','Every مهموز is doubled.'],'صحيح and سالم have different exclusions.'),
  ],
  'as-03/l3':[
    q('One weak root, in the middle: which category?', null, 'Name the weak عين category.'),
    q('What resemblance gives المثال its name?', ['Its weak root sounds like a sound letter.','It is the model for every category.','Its imperfect always matches صحيح.','Its illustrated past retains the weak root without إعلال.'],'Compare وعد، وعدت، وعدوا.'),
    q('Why is الأجوف called ذو الثلاثة?', ['قلت has three letters including subject ت.','It has three root letters.','Its عين can be three different letters.','It has three kinds of إعلال.'],'Count the resulting conjugated form.'),
    q('Which are the three attached vowelled subject pronouns?', ['تاء الفاعل، واو الجماعة، ياء المخاطبة','نون التوكيد، نون النسوة، نا','ألف الاثنين، واو الجماعة، ياء المخاطبة','تاء الفاعل، نا المتكلمين، نون النسوة'],'Compare قلت، قلنا، قلن.'),
  ],
  'as-03/l4':[
    q('What does غزوت illustrate about الناقص?', ['Four letters, but its name records deletion.','Four letters: ذو الأربعة.','Three letters: ذو الثلاثة.','Five letters.'],'Include attached ت in the count.'),
    q('Which root in وفى separates the weak letters?', ['عين: ف.','فاء: و.','لام: ى.','None; all three are weak.'],'Locate the sound root between them.'),
    q('How does لفيف مقرون differ from مفروق?', ['Its weak roots are adjacent; مفروق has a sound root between.','All three roots are weak.','Only مقرون can contain both wāw and yāʾ.','Its فاء must be weak.'],'Compare طوى with وفى.'),
    q('Which sound letter separates the weak roots in وحي?', null, 'Look between wāw and yāʾ.'),
  ],
};
export const quizzes = {
  'as-03/l1':[q('What does العلة mean in ordinary usage?'),q('Which letters does واي collect?'),q('What defines الصحيح?', ['One weak root.','No added letters.','Roots free of weak letters.','Roots free of weakness, hamza and doubling.']),q('What defines المعتل?'),q('Sukūn after a matching vowel gives which name?'),q('In the source’s terminology, which letter is always علة، مد and لين?')],
  'as-03/l2':[q('Which three descriptions does the source give للصحيح?'),q('What does سالم exclude?'),q('What is another name for المضعف?'),q('Which roots match in مضعف الثلاثي?'),q('Classify زلزل، عسعس and قلقل.'),q('What defines المهموز?')],
  'as-03/l3':[q('What are the four weak-root categories?'),q('What defines المثال?'),q('What defines الأجوف?'),q('Classify وعد and يسر.'),q('Why is الأجوف so named?', ['It resembles صحيح.','Its weak roots are adjacent.','Its middle root is weak, not sound.','It loses its final root.']),q('How many attached vowelled subject pronouns are listed?')],
  'as-03/l4':[q('What defines الناقص?'),q('Why is الناقص so named?'),q('What is its second name?'),q('What defines اللفيف المفروق?'),q('Classify طوى and روى.'),q('Do these root categories also apply to nouns?', ['Only the sound categories.','Yes, using the same root criteria.','No, they belong only to verbs.','Only سالم and مهموز.'])],
};
export const practice = {
  'as-03/l1':[q('Which three operations frequently affect weak letters?', null, 'Recall substitution, deletion and moving a vowel.')],
  'as-03/l2':[q('How many features does سالم exclude?', null, 'Count weakness, hamza and doubling.')],
  'as-03/l3':[q('What determines مثال، أجوف or ناقص for a single weak root?', null, 'Locate the weak root within the word.')],
  'as-03/l4':[q('Which category includes غزا and رمى?', null, 'Their final root is weak.')],
};

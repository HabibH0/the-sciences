import { card as c, rows as r, part as p, visual as v, question as q, plan } from '../nahw-course/helpers.js';
const clarification = { line:'clarification' };

export const plans = {
  'as-15/l3': plan(55, 'The Alif-and-Tāʾ Plural and Noun Endings', [
    [c('Plural with added alif and tāʾ',p(0,0),1),c('1–2. Female names and nouns ending in ة',p(0,1),r(2,0,1)),c('Four recorded exceptions',p(0,2),3)],
    [c('3. A feminine alif ending',p(0,0),1),c('The book’s two excluded adjective families',p(0,1),2)],
    [c('4–5. Diminutives and non-rational descriptions',p(0,0),r(1,0,1)),c('6. Five-letter nouns in this inventory',p(0,1),r(1,2)),c('Other recorded alif-and-tāʾ plurals',p(0,2),2)],
    [c('Compare noun endings in the dual',0,r(1,0)),c('Compare the sound masculine plural',r(1,1)),c('Compare eligible alif-and-tāʾ forms',r(1,2)),c('منقوص: restore or omit the root yāʾ',2),c('مقصور: omit alif before ون and ين',p(3,0)),c('مقصور: yāʾ before the dual or ات',p(3,1)),c('ممدود: identify the kind of hamza',p(3,2),clarification)],
  ],[
    ['ات','Six regular categories in the book, with stated exceptions.'],
    ['منقوص','Root ي returns in the dual; it drops before ون and ين.'],
    ['مقصور','Alif drops before masculine-plural endings.'],
    ['ممدود','Root hamza stays; feminine hamza regularly becomes و.'],
  ],{copy:{
    '0:1':'فاطمات and زينبات name more than two using added alif and tāʾ. Remove a singular’s ة before adding ات. Six regular categories follow.',
    '0:3':'The source excepts امرأة, woman; شاة, sheep; قُلَة, a plaything; أَمَة, an enslaved woman. قُلَة has single ل, unlike قُلَّة, jug. These are reported lexical restrictions; the book’s reason is lack of attested ات plurals.',
    '1:1':'سلمى and حبلى have مقصورة; صحراء and حسناء have ممدودة. Both contain long ā. This category concerns feminine alif, not every noun ending in ا، ى or اء.',
    '1:2':'The source excludes adjectival فعلاء corresponding to أفعل, as حمراء / أحمر, and فعلى corresponding to فعلان, as عطشى / عطشان. This parallels its masculine-plural restrictions. Apply the stated descriptive use; transferred proper names require separate consideration.',
    '2:2':'The book lists سموات / سماء, skies; سجلات / سجلّ, registers; أمهات / أمّ, mothers, as recorded outside its six headings. These examples do not license adding ات indiscriminately to every noun.',
    '3:0':'Ending rules and plural eligibility are separate questions. These families compare sound, منقوص، مقصور and ممدود endings.',
    '3:2':'قاضٍ and داعٍ restore root ي in قاضيان and داعيان. The root ي is omitted before both masculine-plural endings: قاضون / قاضين؛ داعون / داعين. The ي of ين is the suffix’s letter. Eligible feminine قاضية / داعية give قاضيات / داعيات.',
    '3:clarification':'A feminine hamza regularly changes to و in حمراوان and صحراوات. It does not “revert” to an original root و, nor is the cause simply that two alifs ceased to be adjacent. Root hamza remains; other hamza classes have their own rules.',
  },copyParts:{
    '0:0':['جمع بألف وتاء مزيدتين: فاطمات؛ زينبات.','أعلام الإناث؛ وما ختم بالتاء.','المستثنى في المصدر: امرأة؛ شاة؛ قُلَة؛ أَمَة.'],
    '1:0':['ألف التأنيث: سلمى؛ حبلى؛ صحراء؛ حسناء.','المستثنى: فعلاء مؤنث أفعل؛ وفعلى مؤنث فعلان.'],
    '2:0':['مصغّر غير العاقل ووصفه: جُبيل؛ دُريهم؛ شامخ؛ معدود.','الخماسي الذي لم يسمع له تكسير: سرادق؛ حمّام؛ إصطبل.','ومن السماع: سموات؛ سجلات؛ أمهات.'],
    '3:3':['أعلى / أعلَوْن؛ مصطفى / مصطفَوْن. Omit final alif and retain the preceding fatḥa. The و belongs to the plural ending; alif does not turn into it. In نصب and جر: أعلَيْن؛ مصطفَيْن.','For alif beyond the third letter, the dual and ات formation use ي: حبليان؛ مستدعَيان؛ حبليات؛ مصطفَيات. The last requires eligible feminine use, such as مصطفى used as a woman’s name; an ordinary male name uses مصطفَون.','Root hamza remains: قرّاءان؛ قرّاؤون؛ وضّاؤون. With eligible feminine قرّاءة, the plural is قرّاءات. Feminine hamza regularly becomes و: حمراوان؛ صحراوات.'],
  },tableCopy:{
    '0:2':{0:['Female proper names','The name category.','زينب؛ هند؛ مريم'],1:['Nouns ending in ة','Even a male name can qualify.','فاطمة؛ طلحة: فاطمات؛ طلحات']},
    '2:1':{0:['Diminutive of a non-rational noun','The diminutive qualifies.','جُبيل: little mountain; دُريهم: little dirham.'],1:['Non-rational description','The descriptive use qualifies.','شامخ: towering mountain; معدود: counted day.'],2:['Five-letter noun','No recorded broken plural in this account; count doubled consonants.','سُرادق: enclosure; حمّام: bathhouse; إصطبل: stable.']},
    '3:1':{0:['Dual','رجلان؛ دلوان','قاضيان؛ داعيان','حبليان؛ مستدعَيان','قرّاءان؛ حمراوان'],1:['Masculine plural','مسلمون؛ طالبون','قاضون؛ داعون','أعلَوْن؛ مصطفَوْن','قرّاؤون؛ وضّاؤون'],2:['Alif-and-tāʾ plural','زينبات؛ مريمات','قاضيات؛ داعيات','حبليات؛ مصطفَيات','قرّاءات؛ صحراوات']},
  },tableExamples:{'3:1':{
    0:{heading:'Dual endings',items:[['رَجُلان؛ دَلْوان','Sound or similar'],['قاضيان؛ داعيان','منقوص'],['حُبْلَيان؛ مُسْتَدْعَيان','مقصور'],['قَرّاءان؛ حَمْراوان','ممدود']]},
    1:{heading:'Sound masculine endings',items:[['مسلمون؛ طالبون','Sound'],['قاضون؛ داعون','منقوص'],['أعلَوْن؛ مصطفَوْن','مقصور'],['قرّاؤون؛ وضّاؤون','ممدود']]},
    2:{heading:'Eligible feminine forms',items:[['زينبات؛ مريمات','Sound'],['قاضيات؛ داعيات','Root ي remains'],['حُبْلَيات؛ مصطفَيات','Beyond third: alif → ي'],['قرّاءات؛ صحراوات','Root / feminine hamza']],note:'مصطفى is a woman’s name here; قرّاءات corresponds to feminine قرّاءة. Eligibility still applies.'},
  }},analysisPrompt:'Identify the regular ات category.',analysisHint:'Distinguish diminutive, description and the five-letter category.',
  visuals:{'3:6':v('The hamza’s role determines the form',['قَرّاء','Root hamza remains'],['حَمْراء','Feminine hamza regularly becomes و'])},
  analysisText:{'table-2-1':{'جُبَيل (little rock, from جَبَل), دُرَيْهِم (little dirham, from دِرْهَم)':'جُبيل؛ دُريهم','شامخ, describing a جَبَل (towering); معدود, describing a يوم (counted)':'شامخ of a mountain; معدود of a day.','سُرَادِق (a tent enclosure or courtyard cover), حَمّام (a bath-house), إصْطَبل (a stable)':'سُرادق؛ حمّام؛ إصطبل'}},
  analysisLabels:{'مُصَغَّر غير العاقل — the diminutive of a non-rational noun':'Diminutive','وَصْف غير العاقل — a descriptive adjective for a non-rational noun':'Description','كل خُماسيّ لم يُسْمَع له جمع تكسير — any five-letter noun with no attested broken plural':'Five letters; no recorded تكسير'},
  }),
  'as-15/l4': plan(56, 'How Broken Plurals Change a Noun', [
    [c('A plural formed by reshaping',p(0,0),1),c('An estimated change: same spoken form',p(0,1),2)],
    [c('Vowels alone can change',0,p(1,0),r(2,0)),c('Addition or deletion alone',p(1,1),r(2,1)),c('Omit the singular’s ة',p(1,2),r(2,2))],
    [c('Vowels and an added alif',0,p(1,0),r(2,0)),c('Vowels and a deleted alif',p(1,1),r(2,1)),c('Vowels, deletion and addition together',p(1,2),r(2,2)),c('Seven kinds of change in this account',clarification)],
    [c('A broad class and 27 pattern entries',p(0,0),1),c('Two accounts of paucity and abundance',p(0,1),2)],
  ],[
    ['Broken plural','Change the singular’s form, visibly or in analysis.'],
    ['Seven changes','One estimated; six visible kinds.'],
    ['Inventory','27 patterns here: four قلة, 23 كثرة.'],
    ['Usage','Learn lexical plurals and applicable pattern rules together.'],
  ],{copy:{
    '0:1':'تكسير contrasts with the two sound-plural endings. The book calls the class سماعي: lexical usage determines which plural a word takes. This does not abolish productive subrules for particular patterns; the class is not a random list without structure.',
    '0:2':'فُلْك means ship or ships: singular like قُفْل, plural like أُسْد. هِجان describes fine, pale camels: singular like كِتاب, plural like رِجال. The source’s كهجان includes comparison ك, not a root letter. The analysis changes although the pronunciation does not.',
    '1:0':'Visible change may affect vowels, add letters or delete letters.',
    '2:0':'Some patterns combine vowel change with addition or deletion.',
    '2:clarification':'The seven categories are: estimated change; vowels; addition; deletion; vowels + addition; vowels + deletion; all three. This is the book’s analysis of form change, not seven plural suffixes.',
    '3:1':'Broken plurals occur with rational and non-rational nouns, masculine and feminine. This breadth does not mean every noun accepts every pattern. The source counts 27 pattern entries: four for قلة and the remaining 23 for كثرة.',
    '3:2':'One account sets قلة at 3–10 and كثرة at 11 upward. Another starts both at 3, with only قلة ending at 10. These are semantic accounts of the patterns; context and established usage can extend a plural beyond its basic range.',
  },copyParts:{
    '0:0':['جمع التكسير: أكثر من اثنين بتغيير صورة المفرد.','تغيير مقدر: فُلْك؛ هِجان، للمفرد والجمع.'],
    '1:1':['الشكل فقط: أَسَد؛ أُسْد.','الزيادة فقط: صِنْو؛ صِنْوان.','النقص فقط: تُخَمَة؛ تُخَم.'],
    '2:1':['الشكل والزيادة: رَجُل؛ رِجال.','الشكل والنقص: كِتاب؛ كُتُب.','الثلاثة معا: غُلام؛ غِلْمان.'],
    '3:0':['عام في العقلاء وغيرهم، ذكورا وإناثا. أبنيته ٢٧: أربعة للقلة، والباقي للكثرة.','قول: القلة ٣–١٠؛ والكثرة ١١ فما فوق. قول آخر: تبدأ الكثرة من ٣.'],
  },tableCopy:{'1:2':{0:['Vowels only','أَسَد ← أُسْد','Lion / lions. The same consonants; fatḥa + fatḥa becomes ḍamma + sukūn.'],1:['Addition only','صِنْو ← صِنْوان','A counterpart / counterparts, such as palms from one root. Initial kasra and medial sukūn remain; plural ان is added. This is a broken plural, not the dual.'],2:['Deletion only','تُخَمَة ← تُخَم','Indigestion / bouts of it. The ة disappears; initial ḍamma and following fatḥa remain.']},
    '2:2':{0:['Vowels + addition','رَجُل ← رِجال','Man / men. The initial vowels change, and alif is added after ج.'],1:['Vowels + deletion','كِتاب ← كُتُب','Book / books. Initial kasra becomes ḍamma; ت has ḍamma; the alif disappears.'],2:['All three','غُلام ← غِلْمان','Boy / boys. Vowels change; the alif after ل is removed; a new alif after م and final ن are added. The two alifs occupy different positions.']}},
  analysisPrompt:'Identify the visible change in each plural.',analysisHint:'Compare vowels, added letters and omitted letters.',
  analysisLabels:{'بالشكل فقط — vowelling only':'Vowels only','بالزيادة فقط — addition only':'Addition only','بالنقص فقط — deletion only':'Deletion only'},
  }),
  'as-15/l1': plan(53, 'Singular and Dual Nouns', [
    [c('Number is another independent classification',0,1,2)],
    [c('Form a dual from a singular',p(0,0),1),c('Meaning “two” is not enough',p(0,1),2)],
    [c('1. Begin with a singular',0,p(1,0),p(2,0)),c('2. Begin with a declining noun',p(1,1),p(2,1),3),c('3. Wording, pattern and meaning must agree',p(1,2),4,r(5,0)),c('Different patterns or different senses',r(5,1,2),clarification)],
    [c('4. Reconsider a name’s unique reference',p(0,0),r(1,0)),c('5. Two counterparts or conventional تغليب',p(0,1),r(1,1)),c('6. An established substitute supplies the dual',p(0,2),r(1,2))],
  ],[
    ['Number','مفرد، مثنى، مجموع: one, two, more than two.'],
    ['Dual','Singular plus ان in رفع or ين in نصب and جر.'],
    ['Conditions','Six conditions govern regular formation.'],
    ['Distinguish','Dual formation, attached forms and conventional تغليب.'],
  ],{copy:{
    '0:1':'Number sits alongside جامد / مشتق، مجرد / مزيد، مذكر / مؤنث and the four noun-ending classes.',
    '0:2':'رجل، امرأة، قلم and كتاب each name one. The source’s alternative definition excludes duals, plurals, their attached forms and the five nouns أب، أخ، حم، فو، ذو. That last exclusion concerns case-ending classes: these five can still be singular in number.',
    '1:1':'رجلان / رجلين؛ امرأتان / امرأتين؛ كتابان / كتابين؛ قلمان / قلمين. Add ان for رفع, or ين for نصب and جر, to a singular noun, not to its bare root.',
    '1:2':'كلا / كلتا mean both; اثنان / اثنتان mean two. زوج can mean a pair or one mate; شفع means an even pair. Their two-meaning is lexical, not produced by attaching the dual ending to an independent singular. They do not all share one declension.',
    '2:0':'Six conditions govern regular dual formation in this account.',
    '2:3':'The source treats these as having the dual’s form rather than being regular duals. Their singular bases هذا، هذه، الذي، التي are indeclinable. Analysis of the dual-looking forms themselves differs; calling them invariably مبني is too absolute.',
    '2:4':'Both members must agree in wording, pattern and meaning. Ordinary كتابان combines two instances of كتاب. Conventional extensions are a separate question.',
    '2:clarification':'عَين meaning eye and عَين meaning spring share spelling and pattern, but differ in sense. The source excludes combining them by ordinary regular dual formation. This is not a claim that context or reported rhetorical usage can never combine distinct senses.',
  },boxCopy:{'0:0':['الاسم: مفرد، ومثنى، ومجموع.','المفرد: ما دل على واحد.']},
  copyParts:{
    '1:0':['المثنى: ما دل على اثنين بزيادة ألف ونون، أو ياء ونون.','ليست تثنية قياسية: كلا؛ كلتا؛ اثنان؛ اثنتان؛ زوج؛ شفع.'],
    '2:1':['١. مفرد: فلا تثنية لمثنى أو مجموع على حاله.','٢. معرب؛ واللذان وهذان ومؤنثهما على صورة المثنى.','٣. الاتفاق في اللفظ والوزن والمعنى.'],
    '2:2':['Do not simply add another dual suffix to an existing dual or plural: رجلانان and زيدونان are not the ordinary rule. A word transferred into a proper name raises separate treatment.','اللذان، هذان، اللتان and هاتان resemble duals. They are not formed by just appending ان to unchanged independent singulars.'],
    '3:0':['٤. منكّر: لا يبقى العلم على دلالته على الفرد الواحد.','٥. له مماثل؛ والقمران للشمس والقمر تغليب.','٦. لا يستغنى بتثنية غيره عنه: سيّان يغني عن تثنية سواء.'],
  },tableCopy:{
    '2:5':{0:['العُمَران','أبو بكر وعمر','Different wording. This is not an ordinary dual of two matching names.'],1:['العَمْران','عَمْرو وعُمَر','Different patterns: fatḥa + sukūn versus ḍamma + fatḥa.'],2:['العَيْنان','Eye and flowing spring.','Different senses of عين.']},
    '3:1':{0:['منكّر','A name first means a bearer of that name, rather than one unique individual. The resulting dual can become definite with أل.','الزيدان: the two people named Zayd.'],1:['له مماثل','With the familiar unique sun and moon intended, القمران is conventional تغليب. One name covers both, rather than two moons.','الشمس والقمر: القمران'],2:['لا يستغنى بغيره','The source uses سيّان, from سيّ, for two equals instead of regularly dualising سواء. An established substitute is intended, not any available synonym.','سواء؛ سيّ؛ سِيّان']}},
  analysisPrompt:'Identify the remaining dual condition.',analysisHint:'Unique naming, a counterpart, or an established substitute.',
  analysisText:{'table-3-1':{'الشمس and القمر are each unique, so neither dualizes on its own; القَمَران, used loosely for the sun and the moon, is تغليب (one word extended by convention), not a real تثنية':'The sun and moon are called القمران by تغليب.','سَواء (equal) is not dualized, because Arabic dualizes its synonym سيّ instead, giving سِيّان':'The established dual سيّان supplies “two equals”.'}},
  analysisLabels:{'له مُمَاثِل — having a genuine counterpart of its own kind':'A matching counterpart','ألّا يُستغنى عنه بتثنية غيره — not being replaceable by dualizing a synonym':'No established substitute'},
  }),
  'as-15/l2': plan(54, 'The Sound Masculine Plural', [
    [c('Three plural types; one sound masculine ending',0,1,2),c('Eligibility comes before the ending',3)],
    [c('Proper names: five conditions',0,1),c('A male proper name, not any common noun',r(2,0,1))],
    [c('Rational reference, no ة and no fused compound',0,r(1,0,1,2)),c('Apply the conditions to the intended use',clarification)],
    [c('Descriptions: reference and a clear ending',0,p(1,0),r(2,0,1,2)),c('Two excluded adjective families',p(1,1),r(2,3,4)),c('Descriptions shared across genders',p(1,2),r(2,5),3)],
  ],[
    ['Ending','ون in رفع; ين in نصب and جر.'],
    ['Names','A male rational referent, no ة, no fused compound.'],
    ['Descriptions','Male rational reference plus the stated pattern conditions.'],
    ['Usage','Distinguish the book’s rule from attested or later permissions.'],
  ],{copy:{
    '0:1':'The plural classes are مذكر سالم، مؤنث سالم and تكسير.',
    '0:2':'الزيدون / الزيدين؛ الصالحون / الصالحين. The ending is ون in رفع and ين in نصب and جر. سالم contrasts with internal broken-plural reshaping; regular adjustments to weak endings can still occur.',
    '0:3':'Check the singular’s eligibility before adding an ending. Proper names and descriptions have different conditions, alongside the general formation requirements recalled from the dual lesson.',
    '1:0':'Count five conditions here: a proper name; male reference; rational reference; no ة; no fused compound. The course’s “four” was a miscount.',
    '2:clarification':'The course totals six dual conditions plus five name conditions as eleven. Apply their meanings, not a mechanical checklist: pluralising a name means multiple bearers of it. Compound restrictions here concern fused names like سيبويه; other compound types have their own treatment.',
    '3:0':'A description need not be a proper name. The source gives six restrictions, grouping reference, ending and pattern.',
    '3:3':'صبور is active فعول; جريح is passive فعيل in the shared-gender use. The book excludes these uses from the regular sound plural. The Cairo Academy later permitted gender ة and sound plurals for active فعول, so صبورون is not universally invalid in modern usage.',
  },boxCopy:{'0:0':['جمع المذكر السالم: أكثر من اثنين بزيادة واو ونون، أو ياء ونون.'],'1:1':['علم لمذكر عاقل، خال من التاء والتركيب.'],'2:0':['لاحق: اسم فرس؛ طلحة: فيه تاء؛ سيبويه: مركب مزجي.']},
  copyParts:{'3:1':['صفة لمذكر عاقل، خالية من التاء.','ليست أَفْعَل مؤنثه فَعْلاء، ولا فَعْلان مؤنثه فَعْلَى.','ولا مما يستوي فيه المذكر والمؤنث: عَدْل؛ صبور؛ جريح.']},
  tableCopy:{'1:2':{0:['علم','رَجُلون','رجل is a common noun, not a proper name.'],1:['مذكر','زينبون','زينب names a woman.']},
    '2:1':{0:['عاقل','لاحقون','لاحق here names a horse.'],1:['خال من التاء','طلحون','طلحة has ة. This is the book’s restriction; Kufan grammarians permitted the shortened plural.'],2:['غير مركب مزجي','سيبويهون','سيبويه is a fused compound name.']},
    '3:2':{0:['لمذكر','مرضعون','مرضع here describes a nursing woman.'],1:['لعاقل','فارهون','فاره here describes a fine horse.'],2:['بلا تاء','علامتون','علّامة has ة, even with a male referent.'],3:['ليس أفعل / فعلاء','أحمرون','أحمر has feminine حمراء.'],4:['ليس فعلان / فعلى','عطشانون','عطشان has feminine عطشى.'],5:['غير مشترك الصيغة','عدلون؛ صبورون؛ جريحون','عدل، صبور and جريح use one form for both genders in the senses considered.']}},
  analysisPrompt:'Identify why the book excludes each proposed plural.',analysisHint:'Use the named referent and the noun’s form.',
  analysisLabels:{'عاقل — naming a rational being':'Rational referent','خاليًا من التاء — carrying no تاء at all':'No ة','خاليًا من التركيب — not a compound name':'No fused compound'},
  }),
};
export const checks = {
  'as-15/l3':[
    q('Why can طلحة give طلحات despite naming a man?', ['Its ة ending qualifies it.','It names a female being.','It has five letters.','It has no broken plural.'],'The ending condition does not require female reference.'),
    q('What does the book’s حمراء restriction mirror?', ['Its restriction on masculine أحمرون.','حمراء has a female referent.','حمراء has five letters.','حمراء lacks a broken plural.'],'The paired adjective family is excluded in that account.'),
    q('Why does سرادق regularly give سرادقات in this inventory?', ['Five letters, with no recorded broken plural.','Female proper name.','Non-rational diminutive.','Feminine alif.'],'This is the sixth category.'),
    q('If مصطفى is used as a woman’s name, which ات form follows?', ['مصطفَيات: alif changes to ي.','مصطفَون: masculine ending.','مصطفاوات: retain alif.','مصطفَيان: dual ending.'],'The alif is beyond the third letter; the feminine use supplies eligibility.'),
  ],
  'as-15/l4':[
    q('Why is فلك’s singular/plural change مقدّر?', ['The same spoken form has singular and plural analyses.','A letter is added.','A letter is deleted.','Its vowels audibly change.'],'Compare its singular and plural counterparts.'),
    q('What changes in صِنْو / صِنْوان?', ['Addition only.','Vowels only.','Deletion only.','All three.'],'The stated original vowels stay the same.'),
    q('What changes in غُلام / غِلْمان?', ['Vowels, deletion and addition.','Vowels only.','Addition only.','Deletion only.'],'Compare where the alif occurs in each form.'),
    q('Where can كثرة begin in the second account?', ['Three.','Only eleven.','Ten.','It has no lower bound.'],'Both classes share a starting point in that account.'),
  ],
  'as-15/l1':[
    q('What is the positive definition of مفرد?', ['The definition by exclusions.','A female being.','What names one, as رجل and كتاب.','Anything without a visible ending.'],'The positive definition states what it names.'),
    q('Why is كلا not a regularly formed dual?', ['It has two unrelated senses.','Its two-meaning is lexical, not added by a dual suffix.','It is always indeclinable.','It can never change with case.'],'Meaning two and forming a dual are different.'),
    q('Why does the source exclude عينان for an eye and a spring?', ['عين is indeclinable.','The two senses differ.','عين is one of the five nouns.','It forbids all rhetorical combination.'],'Regular formation needs agreement in meaning too.'),
    q('What is القمران when it means the sun and moon?', ['Two instances of the same noun.','Conventional تغليب: one name covers both.','Exactly the same formation as كلا.','One of the five nouns.'],'This is the reported combined expression.'),
  ],
  'as-15/l2':[
    q('Why is this plural called سالم?', ['It only has male referents.','It preserves the singular against broken-plural reshaping.','It always uses ون.','Every noun can take it.'],'Regular weak-ending adjustments can still occur.'),
    q('Why does رجل not regularly give رجلون?', ['It is not a proper name.','It is feminine.','It has ة.','It is a compound.'],'The underived-name rule requires علمية.'),
    q('لاحق names a horse. Which condition fails?', ['Rational reference.','Proper naming.','Absence of ة.','Absence of composition.'],'The name belongs to a horse in this example.'),
    q('Why does the book exclude عدل، صبور and جريح in these uses?', ['One descriptive form serves both genders.','They are indeclinable.','They are all underived nouns.','They have ة.'],'This asks for the source’s shared-gender rule.'),
  ],
};
export const quizzes = {
  'as-15/l3':[q('What is added in the ات plural?', ['Alif and tāʾ.','Wāw and nūn, or yāʾ and nūn.','Alif and nūn only.','The quiescent feminine verb ending.']),q('Which category permits طلحة / طلحات?', ['The ة ending.','Female names.','Non-rational diminutives.','Feminine alif.']),q('The book excludes descriptive حمراء from the ات plural. What does that parallel?', ['Its exclusion of أحمر from the masculine sound plural.','The five-noun rule.','The five-letter rule.','A ban on diminutives.']),q('Why are سرادق، حمّام and إصطبل in this category?', ['Five-letter nouns with no recorded broken plural in this account.','Female names.','Diminutives.','Feminine-alif nouns.']),q('How does the book classify سموات، سجلات and أمهات?', ['Recorded outside its six regular headings.','Female names.','Non-rational diminutives.','All have feminine alif in the singular.']),q('What happens to the final alif in أعلى / أعلَوْن and مصطفى / مصطفَوْن?', ['It is omitted; و belongs to the plural suffix.','It becomes ي.','It remains before the suffix.','It becomes hamza.'])],
  'as-15/l4':[q('How is a broken plural formed?', ['By changing the singular’s form.','By adding ات alone.','By adding ون or ين alone.','Only by replacing a weak letter.']),q('How is the identical singular/plural فلك analysed?', ['With an estimated change.','Visible vowel change.','Visible addition.','All three visible changes.']),q('What changes in تُخَمة / تُخَم?', ['Deletion only.','Addition only.','Vowels only.','Vowels and deletion.']),q('What changes in كتاب / كُتُب?', ['Vowels and deletion.','Deletion only.','Vowels only.','All three.']),q('How many pattern entries does the source count?', ['27 total, four for قلة.','20 total, six for قلة.','30 total, five for قلة.','15 total, two for قلة.']),q('What makes the class عامّ?', ['Rational or non-rational, masculine or feminine nouns can use it.','Only proper names use it.','Only descriptions use it.','Only five-letter nouns use it.'])],
  'as-15/l1':[q('Which categories classify number?', ['مفرد؛ مثنى؛ مجموع','مذكر؛ مؤنث؛ مشترك','جامد؛ مشتق؛ مزيد','منقوص؛ مقصور؛ ممدود']),q('Why are كلا and the other listed two-words not regular dual formations?', ['Their two-meaning is lexical.','They are not nouns.','They are all five-noun forms.','They are all feminine in form.']),q('Why are هذان and اللذان treated separately from ordinary dual formation?', ['Their bases are indeclinable; the source treats them as dual-shaped.','Their bases are plurals.','They lack any counterpart.','They are already indefinite.']),q('What differs between عين as eye and as spring?', ['Meaning.','Wording.','Singularity.','Definiteness.']),q('What is القمران for the sun and moon?', ['Conventional تغليب.','Two matching moons.','A masculine plural.','One of the five nouns.']),q('Why does the source use سيّان rather than regularly dualising سواء?', ['The established synonym supplies the dual.','There can be no two equals.','سواء is indeclinable.','Its two instances differ in pattern.'])],
  'as-15/l2':[q('Which three kinds divide plurals?', ['مذكر سالم؛ مؤنث سالم؛ تكسير','مفرد؛ مثنى؛ مجموع','قلة؛ كثرة only','جامد؛ مشتق']),q('Which endings form جمع المذكر السالم?', ['ون in رفع; ين in نصب and جر.','ان in every case.','ات.','ين only in رفع.']),q('Which requirement does رجل fail as an underived noun?', ['Proper naming.','Male reference.','Rational reference.','No ة.']),q('Which requirement does لاحق, a horse’s name, fail?', ['Rational reference.','Proper naming.','No ة.','No compound structure.']),q('Which condition does مرضع, a nursing woman, fail?', ['A male description.','A rational description.','No ة.','Not أفعل / فعلاء.']),q('Why does the book exclude عدل، صبور and جريح in the given senses?', ['Their forms are shared across genders.','They are all underived.','They carry ة.','They are proper names.'])],
};
export const practice = {
  'as-15/l3':[q('Which plural type is فاطمات / زينبات?', ['The alif-and-tāʾ plural.','The sound masculine plural.','The broken plural.','The dual.'],'Read the added ending.')],
  'as-15/l4':[q('What does the book call broken plurals as a class?', ['سماعي: lexical usage matters alongside pattern subrules.','Entirely predictable from one universal rule.','Restricted to proper names.','Restricted to rational beings.'],'The source label does not erase productive pattern rules.')],
  'as-15/l1':[q('What does the fifth noun division classify?', ['Number: singular, dual and plural.','Gender.','Declension.','Root and added letters.'],'It asks how many are named.')],
  'as-15/l2':[q('What are the three plural kinds?', ['مذكر سالم؛ مؤنث سالم؛ تكسير','مفرد؛ مثنى؛ مجموع','حقيقي؛ مجازي','قياسي؛ سماعي only'],'The singular and dual are number categories, not plural kinds.')],
};

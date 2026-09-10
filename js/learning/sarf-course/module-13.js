import { card as c, rows as r, part as p, visual as v, question as q, plan } from '../nahw-course/helpers.js';

export const plans = {
  'as-13/l3': plan(48, 'Other Uses of Tāʾ and Short Alif', [
    [c('Tāʾ can mark an individual or a collective',0,r(1,0,1),p(2,0)),c('Tāʾ can strengthen a description',r(1,2,3)),c('Compensation for a missing root position',r(1,4,5)),c('Compensation for a final root or long vowel',r(1,6,7),p(2,1))],
    [c('The two forms of feminine alif',0,1),c('Why the extended form ends in hamza',r(2,0,1),3)],
    [c('فُعَلَى: calamity and place names',0,r(1,0)),c('فُعْلَى: plant, quality and event noun',r(1,1)),c('فَعَلَى: a river and swift animals',r(1,2)),c('فَعْلَى: plural, event noun and description',r(1,3))],
    [c('Single and doubled عين',r(0,0,1)),c('Four consonants before alif',r(0,2)),c('فِعْلَى: two recorded plurals and a مصدر',r(0,3),1)],
  ],[
    ['Tāʾ','Can mark an individual, intensity or compensation.'],
    ['Feminine alif','مقصورة or ممدودة, two forms of the marker.'],
    ['Patterns','Eight selected short-alif entries; vowels matter.'],
    ['Usage','A shared pattern may carry different word classes.'],
  ],{copy:{
    '0:0':'A final ة does not always mark a female referent.',
    '1:1':'The second feminine marker is ألف, with two forms.',
    '1:3':'In this traditional analysis, the feminine alif after another alif becomes hamza: حمراء، عذراء. This explains the feminine ending specifically. Not every noun ending in اء has a feminine hamza.',
    '2:0':'These are eight selected entries, introduced by منها, “among them”. The full book records further patterns.',
    '3:1':'The book reports only حِجْلَى and ظِرْبَى as plurals on فِعْلَى. ذِكْرَى shares the shape but is a مصدر, remembrance; it is not a third plural. This is a reported inventory, not a definition of every word on the pattern.',
    '0:2':'',
  },copyParts:{'0:2':['لَبِن / لَبِنَة moves from kind to individual; كَمْء / كَمْأة reverses that relation. The ة identifies a unit or kind, not necessarily biological sex.','تعويض covers four entries here. Three concern a root position; the fourth concerns a long vowel, which is not itself necessarily a root letter.']},
  boxCopy:{'1:0':['المقصورة: ألف مفردة، كحُبْلَى وبُشْرَى.','الممدودة: ألف قبلها ألف، فتقلب الثانية همزة، كحمراء وعذراء.']},
  tableCopy:{
    '0:1':{0:['تمييز الواحد','One member of the kind.','لَبِن / لَبِنَة: bricks / a brick; تمر / تمرة: dates / a date; نمل / نملة: ants / an ant.'],1:['عكسه','The ة form names the collective.','كَمْء / كَمْأة: a truffle / truffles.'],2:['المبالغة','Intensify the description.','راوية: prolific narrator.'],3:['زيادة المبالغة','Strengthen an already intensive form.','عَلَّامة: great scholar. The book means added intensity, not a functionless suffix.'],4:['تعويض الفاء','Replace the lost first root.','عِدة from و ع د: و is omitted.'],5:['تعويض العين','The source calls this compensation for عين.','إقامة from ق و م: إعلال and deletion produce this form; the compensatory ة follows.'],6:['تعويض اللام','Replace the lost final root.','سنة: final ه or و, under the recorded analyses.'],7:['تعويض المدّة','Replace a deleted long vowel.','تَزْكِية: ة compensates the missing تفعيل long vowel.']},
    '1:2':{0:['مقصورة','A single final alif, written ى in these examples.','حُبْلَى؛ بُشْرَى'],1:['ممدودة','The second of two underlying alifs becomes hamza.','حَمْرَاء؛ عَذْرَاء']},
    '2:1':{0:['فُعَلَى','أُرَبَى؛ أُدَمَى؛ شُعَبَى','Ḍamma then fatḥa: a calamity; two place names.'],1:['فُعْلَى','بُهْمَى؛ حُبْلَى؛ بُشْرَى','Ḍamma then sukūn: a plant; pregnant; good news as مصدر.'],2:['فَعَلَى','بَرَدَى؛ حَيَدَى؛ بَشَكَى','Fatḥas: the river Baradā; a swift donkey; a swift she-camel.'],3:['فَعْلَى','مَرْضَى؛ نَجْوَى؛ شَبْعَى','Fatḥa then sukūn: sick people; private conversation; a woman who is full. The book reads شبعى, not سبعى.']},
    '3:0':{0:['فُعَالَى','حُبَارَى؛ سُكَارَى؛ عُلَادَى','Initial ḍamma, single عين: bustard; drunk people; a sturdy camel.'],1:['فُعَّلَى','سُمَّهَى','Initial ḍamma, doubled عين with fatḥa: falsehood or nonsense.'],2:['فِعَلَّى','سِبَطْرَى','A swaggering gait. Expanded فِعَلْلَى shows the four consonants س ب ط ر. The compact repeated ل notation does not double ط or ر.'],3:['فِعْلَى','حِجْلَى؛ ظِرْبَى','Kasra then sukūn: plurals of حَجَلَة, partridge, and ظَرِبان, a small foul-smelling animal.']},
  },patternTables:['2:1','3:0'],analysisPrompt:'Match each example family to its pattern.',analysisHint:'Compare the first two vowels.',
  analysisText:{'table-2-1':{'أُرَبَى (calamity); أُدَمَى وشُعَبَى (اسما موضعين — two place names)':'أُرَبَى؛ أُدَمَى؛ شُعَبَى','بُهْمَى (اسم نبت — a plant); حُبْلَى (صفة — pregnant); بُشْرَى (مصدر — good news)':'بُهْمَى؛ حُبْلَى؛ بُشْرَى','بَرَدى (اسم نهر — a river\'s name); حَيَدَى (صفة لحمار — a donkey swift in its gait); بَشَكَى (صفة لناقة — a she-camel swift in her pace)':'بَرَدَى؛ حَيَدَى؛ بَشَكَى'}},
  }),
  'as-13/l4': plan(49, 'Patterns of Extended Feminine Alif', [
    [c('فَعْلَاء: noun, مصدر and description',0,1,r(2,0)),c('Wednesday and a crouched position',r(2,1,2))],
    [c('Ninth and tenth of Muḥarram',r(0,0)),c('Burrow openings and greatness',r(0,1,2))],
    [c('The first vowel has three variants',0,1,r(2,0)),c('Kasra and ḍamma give other members',r(2,1,2)),c('An added ن in the pattern name',3,4)],
    [c('A kind of date and a plural of شيخ',r(0,0,1),1)],
  ],[
    ['Inventory','Ten selected extended-alif entries.'],
    ['Vowels','Read the stated variants, not just the consonants.'],
    ['Root analysis','The ن in فُنْعُلَاء marks an addition.'],
    ['Word class','The same ending can occur in several word classes.'],
  ],{copy:{
    '0:1':'Ten selected extended-alif pattern entries follow the eight selected short-alif entries. These are not exhaustive totals for either ending.',
    '2:1':'The first vowel may be fatḥa, kasra or ḍamma; عين keeps fatḥa. These variants form one inventory entry. جَنَفَاء illustrates initial fatḥa.',
    '2:4':'The ن in فُنْعُلَاء is written literally because it is added. خُنْفُسَاء, beetle, has root خ ف س in this analysis, with the ن added between the first two roots.',
    '3:1':'مَشْيُوخَاء is the plural example explicitly identified in this selection, from شيخ, elder. That does not mean these pattern families cannot elsewhere contain plurals. The full book also discusses collective meaning in طَرْفَاء.',
  },boxCopy:{'0:0':['وللممدودة أوزان، منها:'],'2:0':['فُعَلاء: بفتح العين وتثليث الفاء.'],'2:3':['فُنْعُلَاء: خُنْفُسَاء.','ضمتان بينهما ساكن.']},
  tableCopy:{
    '0:2':{0:['فَعْلَاء','صَحْرَاء؛ رَغْبَاء؛ حَمْرَاء','Fatḥa then sukūn: desert as noun; eager desire as مصدر; feminine of أحمر as description.'],1:['أَفْعِلَاء','أَرْبِعَاء','Wednesday. Opening fatḥa then sukūn; عين is reported with any of the three vowels, and ل is single.'],2:['فُعْلُلَاء','قُرْفُصَاء','Two ḍammas around a sukūn. A crouched sitting position, arms around the knees.']},
    '1:0':{0:['فَاعُولَاء','تَاسُوعَاء؛ عَاشُورَاء','The ninth and tenth of Muḥarram.'],1:['فَاعِلَاء','قَاصِعَاء؛ نَافِقَاء','Two openings of a jerboa’s burrow. عين has kasra.'],2:['فِعْلِيَاء','كِبْرِيَاء','Greatness or pride. Two kasras around a sukūn; ي is single.']},
    '2:2':{0:['فَعَلَاء','جَنَفَاء','Place; fatḥa.'],1:['فِعَلَاء','سِيَرَاء','Striped silk; kasra.'],2:['فُعَلَاء','نُفَسَاء','Woman after childbirth; ḍamma.']},
    '3:0':{0:['فَعِيلَاء','قَرِيثَاء','A variety of dates; ث has three dots. Fatḥa then kasra.'],1:['مَفْعُولَاء','مَشْيُوخَاء','Plural of شيخ, elder.']},
  },patternTables:['0:2','1:0','2:2','3:0'],analysisPrompt:'Match the first example families to their patterns.',analysisHint:'Separate فَعْلاء, أَفْعِلاء and فُعْلُلاء.',
  analysisText:{'table-0-2':{'صحراء (اسمًا — a desert); رَغْباء (مصدرًا — eager desire); حمراء (صفة لمؤنث أَفْعَل — the feminine of أَحْمَر, red)':'صَحْرَاء؛ رَغْبَاء؛ حَمْرَاء','أَربِعاء (Wednesday)':'أَرْبِعَاء','قُرْفُصاء (a particular way of sitting, crouched with the arms around the knees)':'قُرْفُصَاء'}},
  }),
  'as-13/l1': plan(46, 'Gender: Meaning and Word Form', [
    [c('Arabic nouns have grammatical gender',0,1,2),c('Real and figurative feminine',3,4)],
    [c('Agreement reveals gender',0,r(1,0,1)),c('Verb endings and diminutives',r(1,2,3)),c('Numbers reveal the singular noun’s gender',r(1,4),2)],
    [c('A separate question: form and meaning',0,1),c('Three combinations in proper names',r(2,0,1,2),3),c('Keep the two classifications distinct',4,5)],
    [c('The unmarked form and feminine markers',0,1,2)],
  ],[
    ['Gender','Grammatical gender need not reflect biological sex.'],
    ['Evidence','Agreement, diminutives and number usage reveal gender.'],
    ['Two questions','Is the referent female? Does the word carry a marker?'],
    ['Markers','تاء and ألف, with short and extended forms of ألف.'],
  ],{copy:{
    '0:1':'رجل, man; كتاب, book; كرسيّ, chair: all are masculine. Grammatical gender applies to inanimate nouns too.',
    '0:2':'Within feminine nouns, حقيقي names a female being; مجازي has feminine grammatical treatment without a female referent.',
    '0:4':'فاطمة and هند name women: حقيقي. أذن, ear; نار, fire; شمس, sun: مجازي. The historical definition uses حِر for female genital anatomy, not “womb” as the course gloss claimed.',
    '1:0':'Usage reveals feminine gender, especially without a visible marker. Figurative feminine nouns can also have ة, as شجرة does; they are not all visibly unmarked.',
    '1:2':'With numbers 3–10, consult the counted noun’s singular: بئر is feminine, so ثلاث آبار has no number تاء. Masculine nouns instead take the تاء form. The book calls number usage the clearest of these signs.',
    '2:0':'This division compares a name’s outward marker with its referent.',
    '2:3':'طلحة has ة but names a man. هند names a woman without a marker. فاطمة has both. عاشوراء is considered here as a woman’s proper name; the ordinary day name does not name a woman.',
    '2:5':'حقيقي / مجازي concerns feminine reference and agreement. لفظي / معنوي compares form and meaning. طلحة remains grammatically masculine when naming a man, despite the formal feminine marker.',
    '3:1':'Calling masculine أصل describes the unmarked morphological model. It does not mean every feminine noun has a visible suffix: هند and شمس already disprove that.',
    '3:2':'The two marker types are تاء and ألف; ألف has مقصورة and ممدودة forms. The following lessons present eight and ten selected pattern entries, respectively, without exhausting the language.',
  },boxCopy:{
    '0:0':['الاسم: مذكر أو مؤنث.','المذكر: رجل؛ كتاب؛ كرسيّ.'],
    '0:3':['المؤنث الحقيقي: ما دل على ذات حِر.','والمجازي: ما ليس كذلك.'],
    '2:1':['لفظي: اسم رجل فيه علامة، كطلحة وزكرياء.','معنوي: اسم امرأة بلا علامة، كمريم وهند وزينب.','لفظي ومعنوي: كفاطمة وسلمى وعاشوراء.'],
    '2:4':['الحقيقي والمجازي: هل المسمّى أنثى؟','اللفظي والمعنوي: هل توجد علامة؟ وهل المسمّى أنثى؟'],
    '3:0':['التذكير أصل؛ والتأنيث فرع.','علامتاه: التاء والألف.'],
  },tableCopy:{
    '1:1':{0:['ضمير مؤنث','Feminine reference.','الشمس رأيتُها','The sun: I saw it.'],1:['اسم إشارة','Feminine هذه.','هذه الشمس','This sun.'],2:['تاء الفعل','Feminine verb agreement.','طلعتِ الشمس','The sun rose.'],3:['تاء التصغير','Appears in the diminutive.','أُذَيْنَة','Diminutive of أذن, ear.'],4:['عدد بلا تاء','Number 3–10 contrasts with singular gender.','ثلاث آبار','Three wells; singular بئر.']},
    '2:2':{0:['لفظي','A man’s name with a feminine marker.','طلحة؛ زكرياء'],1:['معنوي','A woman’s name without a marker.','مريم؛ هند؛ زينب'],2:['لفظي ومعنوي','A woman’s name with a marker.','فاطمة؛ سلمى؛ عاشوراء']},
  },analysisPrompt:'Classify the names by form and meaning.',analysisHint:'Check both the marker and who is named.',
  analysisText:{'table-2-2':{'طلحة، زكريَّاء (men\'s names)':'طلحة؛ زكرياء: men','مَرْيم، هند، زينب (women\'s names)':'مريم؛ هند؛ زينب: women','فاطمة، سَلْمَى، عاشُوراء (women\'s names)':'فاطمة؛ سلمى؛ عاشوراء: women'}},
  analysisLabels:{'لفظيّ — in wording only':'لفظي','معنويّ — in meaning only':'معنوي','لفظيّ ومعنويّ — both':'لفظي ومعنوي'},
  }),
  'as-13/l2': plan(47, 'When Feminine Tāʾ Appears', [
    [c('Tāʾ can distinguish feminine reference',0,1,2)],
    [c('A lexical description can identify the feminine',0,1),c('Five descriptions and their senses',r(2,0,1,2)),c('Nursing and remaining unmarried',r(2,3,4),3),c('Underived nouns depend on recorded usage',4,5,6)],
    [c('Five adjectival patterns usually omit tāʾ',0,1,2),c('بغيّ: a reshaped فعول in this account',3,4),c('Passive فعيل with its described noun',5,6)],
    [c('Three further patterns without ordinary gender tāʾ',0,r(1,0,1,2)),c('Recorded feminine exceptions',2)],
  ],[
    ['Purpose','Gender distinction is one use of تاء.'],
    ['Meaning','A lexical feminine description may need no marker.'],
    ['Patterns','فعول، فعيل، مفعال، مفعيل، مفعل have conditions.'],
    ['Usage','Sense, the described noun and attested exceptions matter.'],
  ],{copy:{
    '0:1':'قامتْ هند has past-tense تاء ساكنة. هي تقوم has a vowelled imperfect prefix. صائمة and ظريفة have noun تاء. In تقوم, the prefix can also address a man; هي supplies the feminine reading here.',
    '0:2':'These illustrate gender distinction, not every use of تاء. Other purposes follow in the next lesson.',
    '1:1':'Shared descriptions regularly contrast صابر and صابرة. A lexical description already understood of females may omit تاء. This is a rule about the intended sense, not an absolute ban on every related form.',
    '1:3':'مرضع describes one with the capacity or role of nursing; مرضعة can present actual nursing, as in [22:2]. عانس is common of women but is also recorded of men. The source’s “women only, never تاء” wording is therefore too broad.',
    '1:5':'رجل / رَجُلَة, man / woman described as manly; إنسان / إنسانة; فتى / فتاة, young man / young woman. Such underived pairs are learned from usage, not freely generated by the derived-adjective rule.',
    '2:0':'Five adjectival patterns have a usual restriction on gender تاء.',
    '2:2':'صبور means one who bears patiently, an active فعول: رجل صبور؛ امرأة صبور. Passive فعول follows the usual feminine rule instead, as ركوبة does for an animal ridden. Meaning is part of the condition.',
    '2:4':'“Your mother was not unchaste.” The book analyses بغيّ as فعول with underlying بَغُوي, then و and ي assimilate. In that account, the feminine referent does not require تاء. Other analyses of the word are reported in grammar.',
    '2:6':'In the source’s rule, passive فعيل follows its described noun: رجل جريح؛ امرأة جريح. Active meaning permits امرأة رحيمة. Used independently, رأيت قتيلة marks the feminine referent. Both meaning and construction matter.',
    '3:0':'These are adjectival patterns, not a ban on ة in every noun with similar letters.',
    '3:2':'مِيقَانَة, a credulous woman, is a recorded مفعال exception; مِسْكِينَة, wretched or poor, is a مفعيل exception. Feminine مسكين without ة is also heard. No named مفعل exception is given here.',
  },boxCopy:{
    '0:0':['قامتْ هند؛ هي تقوم.','صائمة؛ ظريفة.','التاء تميّز المؤنث من المذكر.'],
    '1:0':['حائض؛ حائل؛ فارك؛ مرضع؛ عانس.'],
    '1:4':['وفي الجامد سُمعت: رَجُلَة؛ إنسانة؛ فتاة.'],
    '1:6':['المشتق: انظر إلى المعنى.','الجامد: ارجع إلى السماع.'],
    '2:1':['فَعُول بمعنى فاعل: رجل صبور؛ امرأة صبور.'],
    '2:3':['وَمَا كَانَتْ أُمُّكِ بَغِيًّا [19:28]'],
    '2:5':['فَعِيل بمعنى مفعول، إن تبع موصوفه.','امرأة جريح؛ امرأة رحيمة؛ رأيت قتيلة.'],
  },tableCopy:{
    '1:2':{0:['حائض','Menstruating, in the lexical feminine description.'],1:['حائل','Not pregnant, in this sense.'],2:['فارك','A woman disliking her husband.'],3:['مرضع','One whose role or capacity is nursing.'],4:['عانس','Remaining unmarried beyond the customary age; also used of men.']},
    '3:1':{0:['مِفْعَال','مِهْذَار','Very talkative.'],1:['مِفْعِيل','مِعْطِير','Heavily perfumed.'],2:['مِفْعَل','مِغْشَم','Rash or heedless.']},
  },patternTables:['3:1'],analysisPrompt:'Match each description to its pattern.',analysisHint:'Look for the long alif or yāʾ.',
  }),
};
export const checks = {
  'as-13/l3':[
    q('What does ة compensate for in عِدة?', ['The first root, و.','The middle root.','The final root.','A long vowel.'],'The root is و ع د.'),
    q('Why does the feminine ending in حمراء become hamza?', ['It follows another alif in the traditional analysis.','It replaces a missing root.','It intensifies the description.','It is the final root.'],'The two underlying alifs cannot both remain.'),
    q('Which pattern do بُهْمَى، حُبْلَى and بُشْرَى share?', ['فُعْلَى','فُعَلَى','فَعَلَى','فَعْلَى'],'Ḍamma then sukūn.'),
    q('What does the book report about plurals on فِعْلَى?', ['Only حِجْلَى and ظِرْبَى were found.','It is the commonest plural pattern.','It never forms plurals.','Every word on it is a plural.'],'ذِكْرَى is a مصدر, not a third plural.'),
  ],
  'as-13/l4':[
    q('What word class is رَغْبَاء here?', ['مصدر: eager desire.','A place name.','Feminine of أفعل.','A plural.'],'Its shape also occurs in other word classes.'),
    q('Which pattern joins تاسوعاء and عاشوراء?', ['فَاعُولَاء','فَاعِلَاء','فِعْلِيَاء','فُعْلُلَاء'],'Notice the long ū after عين.'),
    q('What does تثليث الفاء mean?', ['First-vowel fatḥa, kasra or ḍamma.','Only sukūn.','Only fatḥa or ḍamma.','Only kasra or ḍamma.'],'عين keeps fatḥa in this entry.'),
    q('مَشْيُوخَاء is the plural of which noun?', ['شَيْخ','شَيْخَة','مَشْيَخَة','شائخ'],'The source gives the noun meaning elder.'),
  ],
  'as-13/l1':[
    q('What kind of feminine are أذن and شمس?', ['مجازي: feminine grammar without a female referent.','حقيقي: a female referent.','لفظي: both visibly marked.','Masculine: both inanimate.'],'Grammatical gender extends beyond biological sex.'),
    q('Why is the number ثلاث in ثلاث آبار?', ['Numbers 3–10 contrast with the gender of singular بئر.','آبار lacks أل.','Every broken plural takes this number form.','A demonstrative precedes it.'],'Consult the singular noun’s gender.'),
    q('طلحة names a man and carries ة. Which category fits?', ['لفظي','معنوي','لفظي ومعنوي','حقيقي'],'Its form has the marker; its referent is male.'),
    q('What does calling masculine أصل mean here?', ['It is the unmarked morphological model.','It is always a male living being.','Every feminine word must visibly end in ة.','Feminine nouns are less common.'],'This is a statement about grammatical marking.'),
  ],
  'as-13/l2':[
    q('Which تاء is vowelled in the feminine example?', ['The prefix in هي تقوم.','The past ending in قامتْ.','Neither.','Both are normally quiescent.'],'Distinguish the prefix from the past-tense ending.'),
    q('Why can the lexical description حائض omit ة?', ['Its intended description already identifies feminine reference.','All فاعل words reject ة.','It is an underived masculine noun.','Its final consonant replaces ة.'],'The condition concerns the intended lexical sense.'),
    q('Why does رأيت قتيلة use ة in the source’s rule?', ['The passive description stands without its described noun.','فعيل is always active.','Every passive فعيل must have ة.','قتيلة is a verb.'],'Compare امرأة جريح, where the described noun is present.'),
    q('What is recorded alongside feminine مسكينة?', ['مسكين without ة is also heard.','Only مسكينة is possible.','Only a masculine referent is possible.','The word must become معطيرة.'],'Both feminine forms are recorded.'),
  ],
};
export const quizzes = {
  'as-13/l3':[q('What does ة mark in لَبِن / لَبِنَة?', ['One member of a kind.','Intensity.','Compensation.','The kind instead of the individual.']),q('What does ة mark in كَمْء / كَمْأة?', ['The collective.','One individual.','Intensity.','The missing first root.']),q('What unites عِدة، إقامة، سنة and تزكية here?', ['Compensation.','One member of a kind.','Intensity.','A functionless addition.']),q('Why does the feminine alif of حمراء appear as hamza?', ['Another alif precedes it.','It replaces the final root.','It intensifies meaning.','It compensates a long vowel.']),q('حُبْلَى and بُشْرَى illustrate which marker?', ['ألف مقصورة','ألف ممدودة','تاء التعويض','تاء المبالغة']),q('How many short-alif entries are selected here?', ['Eight.','Six.','Ten.','Four.'])],
  'as-13/l4':[q('How many extended-alif entries are selected here?', ['Ten.','Eight.','Six.','Twelve.']),q('How do صحراء and حمراء differ here?', ['Noun; feminine description corresponding to أفعل.','Description; noun.','Both مصادر.','Both plurals.']),q('What does قُرْفُصَاء name?', ['A crouched sitting position.','A weekday.','A variety of dates.','A striped garment.']),q('What do قاصعاء and نافقاء name?', ['Two openings of a jerboa’s burrow.','Two names for one day.','Two date varieties.','Two striped garments.']),q('What does تثليث الفاء change in this entry?', ['The first vowel; عين stays fatḥa.','It doubles فاء.','It adds three عين positions.','It limits the word to three uses.']),q('Which pattern explicitly marks the added ن in خنفساء?', ['فُنْعُلَاء','فَعِيلَاء','مَفْعُولَاء','فَاعِلَاء'])],
  'as-13/l1':[q('What distinguishes حقيقي from مجازي?', ['Whether the feminine referent is a female being.','Whether the word has ة.','Whether the noun is plural.','Whether it begins with أل.']),q('Which pair illustrates مجازي?', ['نار؛ شمس','فاطمة؛ هند','رجل؛ كتاب','طلحة؛ زكرياء']),q('Which sign does the book call clearest?', ['Number usage.','A feminine pronoun.','A demonstrative.','Diminutive ة.']),q('طلحة and زكرياء, as men’s names, illustrate which category?', ['لفظي','معنوي','لفظي ومعنوي','حقيقي']),q('مريم، هند and زينب illustrate which category?', ['معنوي','لفظي','لفظي ومعنوي','مذكر']),q('Which gender is treated as the unmarked model?', ['مذكر','مؤنث','Both have obligatory markers.','Neither.'])],
  'as-13/l2':[q('What is the basic gender function of تاء here?', ['Distinguish feminine from masculine.','Always intensify meaning.','Always replace a root.','Always form a collective.']),q('Which list gives the book’s unmarked feminine descriptions?', ['حائض؛ حائل؛ فارك؛ مرضع؛ عانس','صائم؛ ظريف؛ صابر؛ رحيم؛ كريم','منصور؛ مقتول؛ مضروب؛ مكتوب؛ معلوم','كتاب؛ قلم؛ بيت؛ كرسي؛ باب']),q('How are underived feminine pairs established?', ['By recorded usage.','By freely adding ة to every noun.','By replacing every final vowel.','By the فعول rule alone.']),q('Why is امرأة صبور unmarked by ة?', ['فعول has active meaning.','فعول has passive meaning.','صبور is a verb.','All feminine nouns lack markers.']),q('When does passive فعيل omit gender ة in this rule?', ['When it follows its described noun.','Only when it has active meaning.','Only when used independently.','Without any condition.']),q('Which pattern is مِهْذَار?', ['مِفْعَال','مِفْعِيل','مِفْعَل','فَعُول'])],
};
export const practice = {
  'as-13/l3':[q('What does لَبِن name before adding ة?', ['Bricks collectively.','One brick.','Dates.','Ants.'],'Adding ة identifies one brick.')],
  'as-13/l4':[q('How many extended-alif entries are taught here?', ['Ten.','Eight.','Six.','Twelve.'],'This is a selected inventory.')],
  'as-13/l1':[q('What do رجل، كتاب and كرسيّ share?', ['Masculine grammatical gender.','Feminine grammatical gender.','Female reference.','A feminine suffix.'],'Gender applies to people and things.')],
  'as-13/l2':[q('How is the feminine ending in قامتْ described?', ['ساكنة','متحركة','A prefix.','A noun suffix.'],'The تاء follows the past verb.')],
};

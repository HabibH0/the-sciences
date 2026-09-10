import { card as c, rows as r, visual as v, question as q, plan } from '../nahw-course/helpers.js';
const clarification = { line: 'clarification' };

export const plans = {
  'as-02/l1': plan(5, 'Past Form and Time Reference', [
    [c('Usually before the moment of speech', 0, 1, 2)],
    [c('Words that perform an agreement', 0, 1, 2)],
    [c('A past form in a future condition', 0, r(1,0)), c('A promise expressed as accomplished', r(1,1), 2, clarification)],
    [c('Distinguish the two تاء endings', 0, 1, 2)],
  ], [
    ['ماضٍ', 'Usually indicates an event before زمن التكلم.'],
    ['Exceptions', 'A contract can be performed now; a condition or rhetorical promise can concern later time.'],
    ['تاء الفاعل', 'An attached subject pronoun, as in قرأتُ.'],
    ['تاء التأنيث', 'Marks a feminine subject, as in قرأتْ هند.'],
  ], {copy:{
    '0:0':'Measure the event’s time against زمن التكلم, the moment of speaking.',
    '0:2':'غالبا, “usually”, matters: a past form need not always refer to a past event.',
    '1:0':'أفعال العقود can perform an agreement through the utterance itself.',
    '1:2':'When بعتك or زوجتك performs the agreement, the event coincides with speaking. The same past forms can also report an earlier agreement in another context.',
    '2:0':'A past form can express a condition concerning the future.',
    '2:2':'The form remains ماضٍ even when the context points forward.',
    '2:clarification':'The condition supplies future reference in إن زرتني. In the source’s reading of أعطيناك الكوثر, the past presents a promised gift as certain. This rhetorical account does not exclude interpretations of الكوثر as good already bestowed.',
    '3:0':'Accepting either attached تاء identifies the past form.',
    '3:2':'Subject تاء is vowelled and is itself the فاعل. The feminine تاء has original sukūn and marks femininity; هند is the subject. A connecting vowel does not turn feminine تاء into a subject pronoun.',
  }, tableCopy:{'2:1':{0:['إِنْ زُرْتَنِي أُكْرِمْكَ','“If you visit me, I will honour you.” إن الشرطية makes the visit future in this example.'],1:['إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ','“We have given you al-Kawthar.” The source illustrates a promised gift expressed as already accomplished.']}},
  visuals:{'3:0':v('Pronoun or marker',['قَرَأْتُ','تُ is the subject'],['قَرَأَتْ هِنْدُ','تْ marks femininity; هند is subject'])},
  analysisPrompt:'Identify the attached تاء.',analysisHint:'Is ت itself the subject, or does it mark the subject’s femininity?',
  analysisLabels:{'تَاءُ الفَاعِل':'تاء الفاعل','تَاءُ التَّأْنِيثِ السَّاكِنَة':'تاء التأنيث الساكنة'} }),

  'as-02/l2': plan(6, 'The Imperfect and Its Time Clues', [
    [c('Present, future or continuation', 0, 1, 2, 3)],
    [c('لم changes time without changing form', 0, 1, 2, 3)],
    [c('A present-time reading', 0, r(1,0), 2), c('Negation in the present', r(1,1,2)), c('Context can specify future time', 3, 4, 5, clarification)],
    [c('س and سوف point forward', 0, r(1,0,1)), c('Future reference with نصب', r(1,2,3)), c('A future condition with إن', r(1,4), 2)],
    [c('Recognise the form after لم', 0, 1, 2, 3, 4)],
  ], [
    ['مضارع', 'Can express present, future or continuing meaning.'],
    ['قرائن الحال', 'لام الابتداء and negative لا/ما support the source’s present reading; context still matters.'],
    ['قرائن الاستقبال', 'س، سوف، لن، أن، إن in their stated uses.'],
    ['Recognition', 'Accepts لم and begins with an imperfect prefix from أ ن ي ت.'],
  ], {copy:{
    '0:0':'An unqualified مضارع can refer to present or future time.',
    '0:2':'It can also express استمرار, continuing meaning.',
    '0:3':'A context or particle can specify the time. The form alone does not settle it.',
    '1:0':'The qualification غالبا allows forms whose reference differs from the usual present or future.',
    '1:2':'لم normally negates a past event while the verb remains مضارع. لم يلد ولم يولد means “He neither begets nor is begotten”; its denial is not restricted to a temporary past state.',
    '1:3':'Form and time reference are different: ماضٍ can point forward and مضارع can be used with past negation.',
    '2:0':'The source associates لام الابتداء and negative لا and ما with الحال.',
    '2:2':'These examples support a present or continuing reading; they do not establish that these particles always exclude the future.',
    '2:3':'An explicit time expression can establish a different reading.',
    '2:5':'“Your Lord will judge between them on the Day of Resurrection.” يوم القيامة places the judging in the future despite the لام.',
    '2:clarification':'The لام reinforces the statement; it does not override يوم القيامة. Context likewise matters with negative لا and ما. Compare the present grief in ليحزنني with the future judging in ليحكم.',
    '3:0':'The source groups five future clues: س، سوف، لن، أن المصدرية and إن الشرطية.',
    '3:2':'Their grammar differs: س and سوف mark futurity; لن and أن assign نصب; إن الشرطية assigns جزم. Here they share future reference.',
    '4:0':'Distinguish a test of the verb from its opening prefix.',
    '4:2':'The test is accepting لم. Its prefix comes from أ ن ي ت, collected in أنيت: hamza, nūn, yāʾ and tāʾ.',
    '4:3':'The same لم يلد ولم يولد example illustrates both the time shift and the recognition test.',
    '4:4':'The ability to follow لم proves the form is مضارع, even when its reference is past.',
  }, boxCopy:{'0:1':['المضارع يدل على حدث في زمن التكلم أو بعده غالبا، أو على الاستمرار.','يَقْرَأُ؛ يَكْتُبُ: صالح للحال والاستقبال.'],'4:1':['علامته قبول لم؛ وأحرف المضارعة أ، ن، ي، ت.']},
  tableCopy:{'2:1':{0:['لام الابتداء','إِنِّي لَيَحْزُنُنِي أَنْ تَذْهَبُوا بِهِ [يوسف: ١٣]','“It grieves me that you should take him away.”'],1:['لا النافية','لَا يُحِبُّ اللهُ الْجَهْرَ بِالسُّوءِ مِنَ الْقَوْلِ [النساء: ١٤٨]','“Allah does not like public mention of evil in speech.”'],2:['ما النافية','وَمَا تَدْرِي نَفْسٌ مَاذَا تَكْسِبُ غَدًا [لقمان: ٣٤]','“No soul knows what it will earn tomorrow.” The knowing is denied now; the earning is tomorrow.']},
  '3:1':{0:['س','سَيَقُولُ السُّفَهَاءُ مِنَ النَّاسِ مَا وَلَّاهُمْ عَنْ قِبْلَتِهِمُ الَّتِي كَانُوا عَلَيْهَا [البقرة: ١٤٢]','“The foolish will ask what turned them from their former qiblah.”'],1:['سوف','وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى [الضحى: ٥]','“Your Lord will give you, and you will be satisfied.”'],2:['لن','لَنْ تَنَالُوا الْبِرَّ حَتَّى تُنْفِقُوا مِمَّا تُحِبُّونَ [آل عمران: ٩٢]','“You will not attain righteousness until you spend from what you love.”'],3:['أن','وَأَنْ تَصُومُوا خَيْرٌ لَكُمْ [البقرة: ١٨٤]','“That you fast is better for you.”'],4:['إن الشرطية','إِنْ يَنْصُرْكُمُ اللهُ فَلَا غَالِبَ لَكُمْ [آل عمران: ١٦٠]','“If Allah helps you, none can overcome you.”']}},
  analysisPrompt:'Which particle points this verb forward?',analysisHint:'Look at the particle attached to or directly before the verb.',
  analysisText:{'table-3-1':{
    '﴿سَيَقُولُ السُّفَهَاءُ مِنَ النَّاسِ مَا وَلَّاهُمْ عَنْ قِبْلَتِهِمُ الَّتِي كَانُوا عَلَيْهَا﴾ [البقرة: ١٤٢]':'سَيَقُولُ السُّفَهَاءُ',
    '﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى﴾ [الضحى: ٥]':'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ',
    '﴿لَنْ تَنَالُوا الْبِرَّ حَتَّى تُنْفِقُوا مِمَّا تُحِبُّونَ﴾ [آل عمران: ٩٢]':'لَنْ تَنَالُوا الْبِرَّ',
  }} }),

  'as-02/l3': plan(7, 'Commands and Verb Nouns', [
    [c('A command seeks an action', 0, 1, 2, 3)],
    [c('Read the markers with the meaning', 0, 1, 2), c('The form itself must request', 3, 4, clarification)],
    [c('Verbal meaning without verb markers', 0, 1, 2, 3)],
    [c('Past and present اسم فعل', 0, r(1,0,1)), c('The commonest kind: a request', r(1,2), 2, 3)],
  ], [
    ['أمر', 'Its form seeks an action after the moment of speaking.'],
    ['Signs', 'Acceptance of نون التوكيد and ياء المخاطبة must be read with that meaning.'],
    ['اسم فعل', 'Expresses a verb’s meaning without accepting its verbal markers.'],
    ['Three meanings', 'هيهات/شتان: past. وي/أف: present. صه/آمين: command, the commonest type.'],
  ], {copy:{
    '0:0':'The command is defined through طلب, seeking an action.',
    '0:2':'اجتهد means “strive”. Its form seeks action after speaking, whereas a future مضارع can simply report it.',
    '0:3':'Unlike the two preceding definitions, the source does not add غالبا here. A command can also seek continuation of an action already begun.',
    '1:1':'The source combines acceptance of نون التوكيد and ياء المخاطبة with the form’s own meaning of طلب.',
    '1:2':'Both markers also occur with مضارع. Neither marker by itself establishes أمر.',
    '1:4':'Request from لام or prohibitive لا does not turn a مضارع into فعل أمر.',
    '1:clarification':'The shared suffixes exclude ماضٍ and حرف. Unlike past تاء or imperfect لم, neither is exclusive. Direct طلب by the form identifies أمر.',
    '2:0':'A word can express a verb’s meaning without being a verb.',
    '2:2':'Both conditions matter: verbal meaning and non-acceptance of verbal markers. صه means اسكت but does not take the verb’s endings.',
    '2:3':'These forms are called أسماء أفعال because their meaning is verbal while their word class is nominal.',
    '3:0':'اسم الفعل has three meaning-based categories, parallel to the verb.',
    '3:3':'اسم فعل أمر is the commonest of the three categories.',
  }, tableCopy:{'1:3':{0:['اجْتَهِدْ؛ اجْتَهِدِي؛ اجْتَهِدَنَّ','Accepts both suffixes','Direct command.'],1:['تَجْتَهِدِينَ؛ تَجْتَهِدَنَّ','Accepts both suffixes','Unqualified report.']},
  '3:1':{0:['اسم فعل ماضٍ','هَيْهَاتَ؛ شَتَّانَ','بَعُدَ؛ افْتَرَقَ','“Far removed”; “how different”.'],1:['اسم فعل مضارع','وَيْ؛ أُفٍّ','أَتَعَجَّبُ؛ أَتَضَجَّرُ','“How amazing!”; “Ugh!”'],2:['اسم فعل أمر','صَهْ؛ آمِينَ','اسْكُتْ؛ اسْتَجِبْ','“Be quiet”; “answer our prayer”.']}},
  analysisPrompt:'Classify each group of أسماء الأفعال.',analysisHint:'Match each word to its equivalent verb’s tense or request.',
  analysisLabels:{'اسْمُ فِعْلٍ مَاضٍ':'اسم فعل ماضٍ','اسْمُ فِعْلٍ مُضَارِعٍ':'اسم فعل مضارع','اسْمُ فِعْلٍ أَمْرٍ':'اسم فعل أمر'} }),
};

export const checks = {
  'as-02/l1':[
    q('Why does the past-tense definition include غالبا?', ['Some past forms refer to non-past events.', 'Some past events use other forms.', 'Otherwise it overlaps with أمر.', 'The word adds no meaning.'], 'Distinguish the form from its time reference.'),
    q('بعتك هذا الكتاب performs a sale now. What is exceptional?', ['It has no past marker.', 'It is مبني.', 'The event coincides with speaking.', 'It accepts تاء الفاعل.'], 'Compare the event with زمن التكلم.'),
    q('Why is زرتني future in إن زرتني أكرمك?', ['إن الشرطية supplies that conditional reference.', 'Only because أكرمك follows.', 'It is actually past.', 'Because it has تاء الفاعل.'], 'Look at the conditional construction.'),
    q('Which تاء appears in قَرَأَتْ هِنْدُ?', ['An addition with no function.', 'تاء الفاعل.', 'تاء التأنيث الساكنة.', 'تاء المضارعة.'], 'هند is the subject; ت is a marker.'),
  ],
  'as-02/l2':[
    q('Without context, what times can مضارع express?', ['Future only.', 'Present or future.', 'Past only.', 'Present only.'], 'It is صالح للحال والاستقبال.'),
    q('What normally gives لم يلد its past-negative construction?', ['لم.', 'Only the jussive ending.', 'Nothing; it must be present only.', 'The passive form.'], 'Distinguish the particle’s function from the verse’s unrestricted denial.'),
    q('Why is ليحكم future with يوم القيامة?', ['إن cancels لام.', 'The verb is مبني.', 'The explicit time governs the reading.', 'It must be لام القسم.'], 'The time expression is explicit.'),
    q('What time does إن الشرطية normally give a following مضارع?', ['Still wholly unspecified.', 'Present.', 'Future.', 'Past.'], 'Use its conditional function, not a different إن.'),
    q('Which letters are collected in أنيت?', ['ا ن ي ت','ء ن و ت','س ت ي ن','ء ن ي ت'], 'The first prefix is hamza, not a long alif.'),
  ],
  'as-02/l3':[
    q('What distinguishes أمر from a future report?', ['أمر is past.', 'مضارع cannot be future.', 'أمر has no time reference.', 'أمر seeks the action.'], 'Its definition uses طلب.'),
    q('What do نون التوكيد and ياء المخاطبة alone establish?', ['أمر only.', 'أمر or مضارع.', 'ماضٍ.', 'اسم فعل.'], 'The signs are shared by two verb types.'),
    q('Why is صه, meaning اسكت, an اسم فعل?', ['It is مبني.', 'It has three letters.', 'It has verbal meaning without verb markers.', 'It expresses no command.'], 'Apply both halves of the definition.'),
    q('Which type is هيهات, meaning بَعُدَ?', ['اسم فعل ماضٍ','اسم فعل مضارع','اسم فعل أمر','فعل ماضٍ'], 'Its meaning is past, but it is not a verb.'),
  ],
};
export const quizzes = {
  'as-02/l1':[q('What defines الماضي?', ['Present or future event.', 'A request for future action.', 'Verbal meaning without verb markers.', 'An event before speaking, usually.']),q('Which heading covers performative بعتك and زوجتك?'),q('Which illustrates future reference in the source’s reading?', ['قام زيد: an ordinary past report.', 'بعتك: a sale performed now.', 'إنا أعطيناك الكوثر: a promised gift expressed as certain.', 'شرب: an ordinary past report.']),q('What are the two past-tense signs?'),q('Which تاء is attached in قرأتُ?'),q('Which is NOT a past form?')],
  'as-02/l2':[q('What defines المضارع?', ['Usually an event before speaking.', 'Present, future or continuing meaning.', 'A request for future action.', 'Having an imperfect prefix only.']),q('What identifies the مضارع form?'),q('Which clues support the source’s default present reading?'),q('Which clue operates in وأن تصوموا خير لكم?'),q('Which mnemonic collects أحرف المضارعة?'),q('Without context, a مضارع is described as what?')],
  'as-02/l3':[q('What defines الأمر?', ['Seeking an action after speaking.', 'Accepting نون and ياء alone.', 'Verbal meaning without markers.', 'Merely indicating a future action.']),q('What is the sign of الأمر?', ['Accepting لم.', 'Accepting نون/ياء with direct command meaning.', 'Beginning with أنيت.', 'Accepting تاء الفاعل.']),q('What defines اسم فعل?', ['Verbal meaning without verbal markers.', 'Independent meaning with tense as a verb.', 'Any fixed verb.', 'Any noun derived from a verb.']),q('What does شتان mean?'),q('Which type of اسم فعل is أفٍ?'),q('Which type is the commonest?')],
};
export const practice = {
  'as-02/l1':[q('What reference point defines the three verb types?', ['زمن التكلم: the moment of speaking.', 'زمن الحدث: the action’s time.', 'When the sentence is written.', 'When the listener understands.'], 'Compare each event with the act of speaking.')],
  'as-02/l2':[q('What does أو للاستمرار admit?', ['Verbs after لم.', 'Passive verbs.', 'Present اسم فعل forms.', 'A continuing state beyond a single fixed event.'], 'Think of continuing rather than momentary meaning.')],
  'as-02/l3':[q('Which word gives the command definition its force?', null, 'Find the word that expresses طلب.')],
};

// Module 02 — الماضي والمضارع والأمر (Past, Present and Imperative)
//
// Covers Week 3 of the Advanced Sarf course: التقسيم الأول للفعل, the first
// of the seven divisions of الفعل in شذا العرف في فن الصرف by أحمد الحملاوي.
// Definitions, examples and شواهد are kept faithful to the source. Concept
// bodies are short by design (a sentence or two, not teaching prose);
// quiz/bank question text is English with Arabic morphological terms left in
// Arabic.
//
// Scope: the definitions of الماضي, المضارع and الأمر with the علامة of each;
// the force of the قيد غالبًا in the first two definitions and the cases it
// admits (أفعال العقود, الماضي in the sense of the future, المضارع after لم);
// what fixes المضارع to الحال or to الاستقبال; أحرف المضارعة; and أسماء
// الأفعال in their three kinds. التقسيم الثاني (الصحيح والمعتل) follows in
// Module 03.
//
// 2026-08-12: revised so every Quranic شاهد, Core Text quotation, and
// Arabic-to-Arabic اسم الفعل gloss (بمعنى) carries an inline English
// translation alongside it, matching the restructuring content/module-01.js
// and content-sarf/module-01.js already went through — a learner should
// never need to already know what an untranslated Arabic phrase in this
// lesson means to follow the lesson or answer a question about it. The two
// شواهد tables in L2 (معيِّنات الحال and الاستقبال) gained a Translation
// column in place of a separate summary paragraph; four L3 bank items and
// one L3 quiz item whose options were four bare Arabic words (اسم الفعل
// meaning-matching) now carry an English gloss on every option; L1's third
// quiz item was rebuilt to test the same ماضٍ-in-future-meaning fact using
// this lesson's own already-glossed examples instead of three untranslated
// ayat drawn from later lessons. No grammar facts, examples, counts, or
// correct answers changed in substance.

export default {
  id: 'as-02',
  title: 'الماضي والمضارع والأمر',
  heading: 'الفعل',
  blurb: 'The first division of الفعل: ماضٍ، مضارع، أمر — each with its defining علامة — plus أسماء الأفعال.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'الماضي',
      subtitle: 'The Past Verb — its definition, the weight of the word غالبًا, and the two تاءان that identify it',
      concepts: [
        {
          heading: 'تعريف الماضي',
          lines: [
            { html: `The first of the three أقسام of الفعل by tense is defined in a single line, and one word in it decides the whole lesson.`, list: false },
            { box: { title: 'Core Text', lines: [
              `الماضي: ما يَدُلُّ على حُدُوثِ شيءٍ قَبْلَ زَمَنِ التَّكَلُّمِ غَالِبًا`,
              `نحو: قَامَ، وقَعَدَ، وأَكَلَ، وشَرِبَ`,
            ] } },
            { html: `What indicates that something happened before the moment of speaking — <em>usually</em>. That غالبًا is doing real work: without it the definition would be false, because a handful of ماضي forms do not refer to past time at all. The next two concepts are those cases.`, list: false },
          ],
          exercise: {
            prompt: `The definition of الماضي is qualified with غالبًا. What would be wrong with dropping that word?`,
            kind: 'mcq',
            options: ['Some forms that are ماضٍ do not indicate past time, so the definition would exclude them', 'Some forms that indicate past time are not ماضٍ', 'The definition would then overlap with الأمر', 'Nothing — غالبًا is a stylistic addition only'],
            correct: 0,
          },
        },
        {
          heading: 'أفعال العقود',
          lines: [
            { html: `The first class the قيد غالبًا rescues is named directly.`, list: false },
            { box: { title: 'Core Text', lines: [
              `خَرَجَ منه أَفْعَالُ العُقُودِ، نحو: بِعْتُكَ، زَوَّجْتُكَ`,
            ] } },
            { html: `These are the verbs by which contracts are concluded. They are ماضٍ in form, but the selling and the marrying happen <em>as the words are uttered</em>, not before. The event is simultaneous with the speech, so it is غالبًا that lets them stay ماضٍ.`, list: false },
          ],
          exercise: {
            prompt: `A man says بِعْتُكَ هذا الكتاب and the sale takes effect at that moment. Why is this an exception to the definition of الماضي؟`,
            kind: 'mcq',
            options: ['Because the verb has no علامة of الماضي', 'Because the verb is مبني, not معرب', 'Because the event coincides with the speech rather than preceding it', 'Because بِعْتُ carries تاء الفاعل'],
            correct: 2,
          },
        },
        {
          heading: 'الماضي في معنى المستقبل',
          lines: [
            { html: `A second class of exception: a ماضي form whose event lies in the <em>future</em>.`, list: false },
            { table: { headers: ['المثال', 'What it shows'], rows: [
              ['إِنْ زُرْتَنِي أُكْرِمْكَ', 'زُرْتَنِي is ماضٍ in form, but the visit lies ahead — إِنْ الشرطية has thrown it forward'],
              ['﴿إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ﴾', 'أَعْطَيْنَا is ماضٍ, yet the giving is promised, not completed — the ماضي form conveys the certainty of the promise'],
            ] } },
            { html: `In both cases the form says past and the meaning says future, which is exactly why غالبًا stands in the definition.`, list: false },
          ],
          clarification: `Why would Arabic put a future event in the ماضي form at all? For two different reasons in these two examples. After إِنْ الشرطية the ماضي form loses its own time reference and simply supplies the condition — the time is then fixed by the شرط structure, not by the verb. In ﴿إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ﴾ the reason is rhetorical: casting a promise in the ماضي presents it as already accomplished, and so as beyond doubt. The form is the same; what makes it non-past differs.`,
          exercise: {
            prompt: `In إِنْ زُرْتَنِي أُكْرِمْكَ — if you visit me, I will honor you — what has displaced the past-time reference of زُرْتَنِي؟`,
            kind: 'mcq',
            options: ['إِنْ الشرطية, which throws the condition forward', 'The presence of أُكْرِمْكَ after it', 'Nothing — the visit really is in the past', 'تاء الفاعل attached to it'],
            correct: 0,
          },
        },
        {
          heading: 'علامتا الماضي',
          lines: [
            { html: `الماضي is identified by accepting either of two تاءان.`, list: false },
            { table: { title: 'The Two Signs', headers: ['العلامة', 'المثال'], rows: [
              ['تَاءُ الفَاعِل', 'قَرَأْتُ'],
              ['تَاءُ التَّأْنِيثِ السَّاكِنَة', 'قَرَأَتْ هِنْدُ'],
            ] } },
            { html: `The two are easy to confuse in writing, since both are a تاء on the end. They are told apart by their vowel: تاء الفاعل is متحركة and is itself the فاعل, while تاء التأنيث is ساكنة and merely marks the فاعل as feminine.`, list: false },
          ],
          exercise: {
            prompt: `In قَرَأَتْ هِنْدُ, the تاء carries a sukūn and هِنْدُ is the فاعل. Which تاء is it?`,
            kind: 'mcq',
            options: ['A تاء زائدة with no grammatical role', 'تاء الفاعل', 'تاء التأنيث الساكنة', 'تاء المضارعة'],
            correct: 2,
          },
        },
      ],
      quiz: [
        {
          q: 'What is the definition of الماضي؟',
          options: ['Indicates something happening at, or after, زمن التكلم', 'Calls for something to happen after زمن التكلم', 'Indicates the meaning of a فعل without accepting any of its verbal علامات', 'Indicates something happened before زمن التكلم, usually'],
          correct: 3,
        },
        {
          q: 'بِعْتُكَ and زَوَّجْتُكَ form an exception under which heading?',
          options: ['أفعال القلوب', 'أفعال العقود', 'أسماء الأفعال', 'أحرف المضارعة'],
          correct: 1,
        },
        {
          q: 'Which of these shows a ماضي form carrying a future meaning?',
          options: ['قَامَ زَيْدٌ — Zayd stood, an ordinary ماضٍ referring to the past', 'بِعْتُكَ — I sell it to you, ماضٍ in form for a sale completed at the moment of speech', '﴿إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ﴾ — indeed We have given you al-Kawthar, where the giving is a promise, not yet completed', 'شَرِبَ — he drank, an ordinary ماضٍ with no exception at all'],
          correct: 2,
        },
        {
          q: 'What are the two علامات of الماضي؟',
          options: ['قَدْ والسين', 'لام الابتداء ولا النافية', 'نون التوكيد وياء المخاطبة', 'تاء الفاعل وتاء التأنيث الساكنة'],
          correct: 3,
        },
        {
          q: 'In قَرَأْتُ, which تاء is attached?',
          options: ['تاء التأنيث الساكنة', 'تاء الفاعل', 'تاء المضارعة', 'تاء الافتعال'],
          correct: 1,
        },
        {
          q: 'Which of these is NOT an example of الماضي؟',
          options: ['يَكْتُبُ', 'قَامَ', 'قَعَدَ', 'شَرِبَ'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'زمن التكلم',
          kind: 'mcq',
          prompt: 'The definitions of all three verb types are fixed relative to a single reference point. What is it?',
          options: ['زمن التكلم — the moment of speaking', 'زمن الحدث — the moment of the action', 'The time the sentence is written', 'The time the listener understands it'],
          correct: 0,
        },
        {
          title: 'قام وقعد',
          kind: 'mcq',
          prompt: 'قَامَ، قَعَدَ، أَكَلَ and شَرِبَ all illustrate what?',
          options: ['أسماء الأفعال الماضية', 'The ordinary case of الماضي, where the event precedes the speech', 'أفعال العقود', 'الماضي carrying a future meaning'],
          correct: 1,
        },
        {
          title: 'قوة غالبًا',
          kind: 'mcq',
          prompt: 'In which of the three verb definitions does the qualifier غالبًا occur?',
          options: ['In the definition of اسم الفعل', 'In the definitions of both الماضي and المضارع', 'In the definition of الماضي only', 'In the definition of الأمر only'],
          correct: 1,
        },
        {
          title: 'زوَّجتك',
          kind: 'mcq',
          prompt: 'زَوَّجْتُكَ, spoken to conclude a marriage, is ماضٍ in form. When does the event it names occur?',
          options: ['At the moment of the speech', 'After the speech', 'It names no event at all', 'Before the speech'],
          correct: 0,
        },
        {
          title: 'العقود',
          kind: 'mcq',
          prompt: 'What do بِعْتُكَ and زَوَّجْتُكَ have in common that makes them a single category?',
          options: ['Both are مزيد verbs', 'Both are أسماء أفعال', 'Both conclude a contract by being uttered', 'Both carry تاء التأنيث'],
          correct: 2,
        },
        {
          title: 'الكوثر',
          kind: 'mcq',
          prompt: 'In ﴿إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ﴾ — indeed We have given you al-Kawthar — what is the relationship between the verb’s form and its time?',
          options: ['The form is مضارع while the giving is past', 'Both form and meaning are past', 'The verb is an اسم فعل ماضٍ', 'The form is ماضٍ while the giving is promised, not yet completed'],
          correct: 3,
        },
        {
          title: 'إن زرتني',
          kind: 'mcq',
          prompt: 'In إِنْ زُرْتَنِي أُكْرِمْكَ — if you visit me, I will honor you — which verb form is ماضٍ؟',
          options: ['Both', 'Neither', 'زُرْتَنِي', 'أُكْرِمْكَ'],
          correct: 2,
        },
        {
          title: 'الشرط والزمن',
          kind: 'mcq',
          prompt: 'What does إِنْ الشرطية do to the time reference of the ماضي verb after it?',
          options: ['It makes it simultaneous with the speech', 'It leaves it untouched', 'It fixes it more firmly in the past', 'It throws it forward — the condition lies ahead of the speech'],
          correct: 3,
        },
        {
          title: 'صيغة ومعنى',
          kind: 'mcq',
          prompt: 'What do أفعال العقود and ﴿إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ﴾ — indeed We have given you al-Kawthar — share?',
          options: ['In both, the verb takes تاء الفاعل', 'In both, the verb follows a شرط', 'In both, the ماضي form does not carry past time', 'In both, the verb is مزيد'],
          correct: 2,
        },
        {
          title: 'تاء الفاعل',
          kind: 'mcq',
          prompt: 'What distinguishes تاء الفاعل from تاء التأنيث in writing?',
          options: ['تاء الفاعل is متحركة, تاء التأنيث ساكنة', 'تاء الفاعل comes first in the word', 'تاء الفاعل is doubled', 'They cannot be distinguished'],
          correct: 0,
        },
        {
          title: 'دور التاءين',
          kind: 'mcq',
          prompt: 'What grammatical role does تاء الفاعل play, as against تاء التأنيث الساكنة?',
          options: ['Neither has a role — both are زوائد', 'تاء التأنيث is the فاعل; تاء الفاعل marks gender', 'تاء الفاعل is itself the فاعل; تاء التأنيث only marks the فاعل as feminine', 'Both are the فاعل'],
          correct: 2,
        },
        {
          title: 'قرأتُ وقرأتْ',
          kind: 'mcq',
          prompt: 'قَرَأْتُ and قَرَأَتْ hold the same letters. What separates them?',
          options: ['One is مجرد and the other مزيد', 'Their أوزان differ', 'The vowel on the final تاء, and with it which تاء is present', 'One is ماضٍ and the other مضارع'],
          correct: 2,
        },
        {
          title: 'العلامة الواحدة',
          kind: 'mcq',
          prompt: 'A verb accepts تاء التأنيث الساكنة but the speaker never attaches تاء الفاعل to it. Is it still ماضٍ؟',
          options: ['Only if it accepts نون التوكيد as well', 'Yes — accepting either تاء establishes it', 'No — both must be demonstrated', 'Only if it also indicates past time'],
          correct: 1,
        },
        {
          title: 'قرأتْ هند',
          kind: 'mcq',
          prompt: 'In قَرَأَتْ هِنْدُ, what is the فاعل؟',
          options: ['A ضمير مستتر', 'There is none', 'The تاء', 'هِنْدُ'],
          correct: 3,
        },
        {
          title: 'حدوث الشيء',
          kind: 'mcq',
          prompt: 'The definition says ما يدل على حدوث شيء. What does حدوث contribute?',
          options: ['That the verb must be ثلاثي', 'That the event must be complete', 'That the verb indicates an event occurring, not a static meaning', 'That the verb must be مبني للمعلوم'],
          correct: 2,
        },
        {
          title: 'الماضي والحرف',
          kind: 'mcq',
          prompt: 'A word indicates a past event but accepts neither تاء الفاعل nor تاء التأنيث الساكنة. What follows?',
          options: ['It is a فعل أمر', 'It is a حرف', 'It is not a فعل ماضٍ, whatever it means', 'It is a فعل ماضٍ, since meaning decides'],
          correct: 2,
        },
        {
          title: 'العلامة والمعنى',
          kind: 'mcq',
          prompt: 'Which is decisive in classifying a verb as ماضٍ — the علامة it accepts, or the time it refers to?',
          options: ['The time — the علامة is only a rough guide', 'Both must agree, or the word is not a verb', 'Neither; الوزن decides', 'The علامة — as the exceptions under غالبًا show, the time may depart from it'],
          correct: 3,
        },
        {
          title: 'أكل وشرب',
          kind: 'mcq',
          prompt: 'أَكَلَ and شَرِبَ are both listed as ماضٍ. On what ground does each qualify?',
          options: ['Each carries a دلالة على الطلب', 'Each accepts the two تاءان and indicates an event before the speech', 'Each begins with a حرف من أحرف المضارعة', 'Each can stand after لَمْ'],
          correct: 1,
        },
        {
          title: 'الفعل والزمن',
          kind: 'mcq',
          prompt: 'All three verb types are defined relative to زمن التكلم. Which one covers the time before it?',
          options: ['الماضي', 'المضارع', 'الأمر', 'اسم الفعل'],
          correct: 0,
        },
        {
          title: 'أفعال العقود والصيغة',
          kind: 'mcq',
          prompt: 'Would بِعْتُكَ still accept تاء الفاعل, despite its exceptional time reference?',
          options: ['Only if the sale is completed', 'Only in the third person', 'Yes — the تاء is already attached to it, and that is the sign', 'No — the exception removes the sign as well'],
          correct: 2,
        },
        {
          title: 'الاستثناء والقاعدة',
          kind: 'mcq',
          prompt: 'Do أفعال العقود cease to be أفعال ماضية because of their time reference?',
          options: ['Yes — they are reclassified as مضارع', 'Yes — they become أسماء أفعال', 'They are neither ماضٍ nor مضارع', 'No — they remain ماضية by form and sign; غالبًا simply admits them'],
          correct: 3,
        },
        {
          title: 'قبل زمن التكلم',
          kind: 'mcq',
          prompt: 'Which phrase in the definition of الماضي fixes it relative to the speech?',
          options: ['ما يدل على', 'قبل زمن التكلم', 'حدوث شيء', 'غالبًا'],
          correct: 1,
        },
        {
          title: 'تمييز التاءات',
          kind: 'mcq',
          prompt: 'A verb ends in a تاء with a ḍamma, and there is no separate فاعل in the sentence. Which تاء is it?',
          options: ['تاء المضارعة', 'It cannot be determined', 'تاء الفاعل', 'تاء التأنيث الساكنة'],
          correct: 2,
        },
        {
          title: 'أول التقاسيم',
          kind: 'mcq',
          prompt: 'Into what three things does the first division of الفعل split it?',
          options: ['صحيح، معتل، مهموز', 'مجرد، مزيد، ملحق', 'لازم، متعدٍّ، جامد', 'ماضٍ، مضارع، أمر'],
          correct: 3,
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'المضارع',
      subtitle: 'The Present Verb — its two possible times, the particles that fix it to one, its علامة, and أحرف المضارعة',
      concepts: [
        {
          heading: 'تعريف المضارع',
          lines: [
            { html: `Where the ماضي was fixed to one side of the moment of speaking, the مضارع straddles it.`, list: false },
            { box: { title: 'Core Text', lines: [
              `المضارع: ما دَلَّ على حُدُوثِ شيءٍ في زَمَنِ التَّكَلُّمِ أو بَعْدَهُ غالِبًا، أو لِلاسْتِمْرَارِ`,
              `نحو: يَقْرَأُ ويَكْتُبُ، فهو صَالِحٌ لِلْحَالِ والاسْتِقْبَالِ`,
            ] } },
            { html: `So it indicates something happening at, or after, زمن التكلم — usually — or else standing for الاستمرار (continuation).`, list: false },
            { html: `صَالِحٌ للحال والاستقبال is the point of the whole section: on its own a مضارع is ambiguous between now and later. Everything that follows is about what removes that ambiguity.`, list: false },
          ],
          exercise: {
            prompt: `A مضارع verb stands alone with nothing before it. What is its time reference?`,
            kind: 'mcq',
            options: ['Fixed to الاستقبال', 'Ambiguous — صالح للحال والاستقبال', 'Fixed to الماضي', 'Fixed to الحال'],
            correct: 1,
          },
        },
        {
          heading: 'ما خرج من التعريف',
          lines: [
            { html: `As with الماضي, the word غالبًا admits exceptions.`, list: false },
            { box: { title: 'Core Text', lines: [
              `خَرَجَ منه ﴿لَمْ يَلِدْ وَلَمْ يُولَدْ﴾`,
            ] } },
            { html: `Excluded from the definition is "He begets not, nor is He begotten." يَلِدْ and يُولَدْ are مضارع in form, but لَمْ has turned their meaning to the past — so here the form says present or future and the meaning says past.`, list: false },
            { html: `Note the symmetry with the previous lesson: الماضي could be pulled forward in time, and المضارع can be pushed back. In both cases the form is unaffected.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿لَمْ يَلِدْ وَلَمْ يُولَدْ﴾, what has moved the verbs' meaning into the past?`,
            kind: 'mcq',
            options: ['لَمْ, which negates and shifts the meaning to past time', 'The jussive ending', 'Nothing — the verbs refer to the present', 'The passive form of يُولَدْ'],
            correct: 0,
          },
        },
        {
          heading: 'ما يعينه للحال',
          lines: [
            { html: `Three things fix a مضارع to the present: <bdi>لَامُ الابْتِدَاءِ</bdi>, and the two negating particles <bdi>لا</bdi> and <bdi>ما</bdi>.`, list: false },
            { table: { title: 'شواهد التعيين للحال', headers: ['المعيِّن', 'الشاهد', 'Translation'], rows: [
              ['لام الابتداء', '﴿إِنِّي لَيَحْزُنُنِي أَنْ تَذْهَبُوا بِهِ﴾ [يوسف: ١٣]', 'Indeed it grieves me that you should take him away'],
              ['لا النافية', '﴿لَا يُحِبُّ اللهُ الْجَهْرَ بِالسُّوءِ مِنَ الْقَوْلِ﴾ [النساء: ١٤٨]', 'Allah does not like the public mention of evil in speech'],
              ['ما النافية', '﴿وَمَا تَدْرِي نَفْسٌ مَاذَا تَكْسِبُ غَدًا﴾ [لقمان: ٣٤]', 'No soul knows what it will earn tomorrow'],
            ] } },
            { html: `In every case something present is being asserted, not something still to come.`, list: false },
            { html: `But لام الابتداء does not always succeed:`, list: false },
            { box: { title: 'Core Text', lines: [
              `خَرَجَ منه ﴿إِنَّ رَبَّكَ لَيَحْكُمُ بَيْنَهُمْ يَوْمَ القِيَامَةِ﴾`,
            ] } },
            { html: `Excluded from it is indeed your Lord will judge between them on the Day of Resurrection. The لام is there, yet يَوْمَ القِيَامَةِ plainly places the judging in the future.`, list: false },
          ],
          clarification: `Why does the لام fail in ﴿إِنَّ رَبَّكَ لَيَحْكُمُ بَيْنَهُمْ يَوْمَ القِيَامَةِ﴾ but succeed in ﴿إِنِّي لَيَحْزُنُنِي أَنْ تَذْهَبُوا بِهِ﴾? Because these particles fix the time by default, not by force. When nothing else in the sentence speaks to time, the لام settles the مضارع on الحال. When something else does — here the explicit يَوْمَ القِيَامَةِ — that explicit statement wins, and the لام is left indicating emphasis only. The same logic applies to لا and ما: they point to the present unless the context says otherwise.`,
          exercise: {
            prompt: `The لام is present in ﴿إِنَّ رَبَّكَ لَيَحْكُمُ بَيْنَهُمْ يَوْمَ القِيَامَةِ﴾, yet the verb is not fixed to الحال. Why?`,
            kind: 'mcq',
            options: ['إِنَّ cancels the effect of the لام', 'The verb is مبني, so no تعيين applies', 'يَوْمَ القِيَامَةِ states the time explicitly, and overrides the لام', 'The لام here is لام القسم, not لام الابتداء'],
            correct: 2,
          },
        },
        {
          heading: 'ما يعينه للاستقبال',
          lines: [
            { html: `Five things fix a مضارع to the future: <bdi>السِّين</bdi>, <bdi>سَوْفَ</bdi>, <bdi>لَنْ</bdi>, <bdi>أَنْ</bdi> and <bdi>إِنْ</bdi>.`, list: false },
            { table: { title: 'شواهد التعيين للاستقبال', headers: ['المعيِّن', 'الشاهد', 'Translation'], rows: [
              ['السين', '﴿سَيَقُولُ السُّفَهَاءُ مِنَ النَّاسِ مَا وَلَّاهُمْ عَنْ قِبْلَتِهِمُ الَّتِي كَانُوا عَلَيْهَا﴾ [البقرة: ١٤٢]', 'The foolish among the people will say: what has turned them from the qiblah they used to face?'],
              ['سَوْفَ', '﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى﴾ [الضحى: ٥]', 'Your Lord will surely give to you, and you will be satisfied'],
              ['لَنْ', '﴿لَنْ تَنَالُوا الْبِرَّ حَتَّى تُنْفِقُوا مِمَّا تُحِبُّونَ﴾ [آل عمران: ٩٢]', 'You will never attain righteousness until you spend from what you love'],
              ['أَنْ', '﴿وَأَنْ تَصُومُوا خَيْرٌ لَكُمْ﴾ [البقرة: ١٨٤]', 'That you fast is better for you'],
              ['إِنْ', '﴿إِنْ يَنْصُرْكُمُ اللهُ فَلَا غَالِبَ لَكُمْ﴾ [آل عمران: ١٦٠]', 'If الله helps you, none can overcome you'],
            ] } },
            { html: `These five do quite different grammatical jobs — السين and سوف merely mark futurity, لَنْ and أَنْ are نواصب, and إِنْ is أداة شرط جازمة. What unites them here is only their effect on time.`, list: false },
          ],
          exercise: {
            prompt: `A مضارع is preceded by إِنْ. Which group does that place it in, and what time does it then carry?`,
            kind: 'mcq',
            options: ['It remains صالح for both', 'Among the معيِّنات للحال — the present', 'Among the معيِّنات للاستقبال — the future', 'Among the exceptions under غالبًا — the past'],
            correct: 2,
          },
        },
        {
          heading: 'علامته وأحرف المضارعة',
          lines: [
            { html: `The مضارع has one test to identify it and one requirement on its opening letter.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وعَلَامَتُهُ: أن يَصِحَّ وُقُوعُهُ بَعْدَ لَمْ، نحو: ﴿لَمْ يَلِدْ وَلَمْ يُولَدْ﴾`,
              `ولا بُدَّ أن يكونَ مَبْدُوءًا بِحَرْفٍ من حُرُوفِ أَنَيْتُ، وتُسَمَّى أَحْرُفَ المُضَارَعَةِ`,
            ] } },
            { html: `The test is whether the verb can stand after لَمْ; the requirement is that it open with one of ء، ن، ي، ت, collected in the mnemonic أَنَيْتُ.`, list: false },
            { html: `Note that the same آية which was an exception to the definition is the شاهد for the علامة. لَمْ shifts the meaning to the past, but the ability to sit after لَمْ at all is precisely what proves the form is مضارع.`, list: false },
          ],
          exercise: {
            prompt: `أَنَيْتُ collects the أحرف المضارعة. Which four letters does it stand for?`,
            kind: 'mcq',
            options: ['الألف والنون والياء والتاء', 'الهمزة والنون والواو والتاء', 'السين والتاء والياء والنون', 'الهمزة والنون والياء والتاء'],
            correct: 3,
          },
        },
      ],
      quiz: [
        {
          q: 'What is the definition of المضارع؟',
          options: ['Indicates something happened before زمن التكلم, usually', 'Indicates something happening at, or after, زمن التكلم — usually, or for الاستمرار', 'Calls for something to happen after زمن التكلم', 'Begins with one of the أحرف المضارعة'],
          correct: 1,
        },
        {
          q: 'What is the علامة of المضارع؟',
          options: ['أن يقبل نون التوكيد', 'أن يقبل قَدْ', 'أن يقبل تاء الفاعل', 'أن يصحّ وقوعه بعد لَمْ'],
          correct: 3,
        },
        {
          q: 'Which three things fix المضارع to الحال؟',
          options: ['أَنْ وإِنْ ولَنْ', 'قَدْ ولَمْ ولَنْ', 'السين وسوف ولن', 'لام الابتداء ولا وما النافيتان'],
          correct: 3,
        },
        {
          q: 'In ﴿وَأَنْ تَصُومُوا خَيْرٌ لَكُمْ﴾ — that you fast is better for you — which معيِّن is at work?',
          options: ['سَوْفَ', 'أَنْ', 'إِنْ', 'السين'],
          correct: 1,
        },
        {
          q: 'What are أحرف المضارعة collected in?',
          options: ['يَنْمُو', 'سألتمونيها', 'أَنَيْتُ', 'أنيت وهيت'],
          correct: 2,
        },
        {
          q: 'On its own, a مضارع verb is described as:',
          options: ['مختص بالاستقبال', 'صالح للماضي والحال', 'صالح للحال والاستقبال', 'مختص بالحال'],
          correct: 2,
        },
      ],
      bank: [
        {
          title: 'الاستمرار',
          kind: 'mcq',
          prompt: 'The definition of المضارع adds أو للاستمرار. What does that clause admit?',
          options: ['Verbs after لَمْ', 'Verbs in the passive', 'أسماء الأفعال المضارعة', 'Verbs expressing a continuing state rather than a single event at a fixed time'],
          correct: 3,
        },
        {
          title: 'يقرأ ويكتب',
          kind: 'mcq',
          prompt: 'يَقْرَأُ and يَكْتُبُ, standing alone, indicate what time?',
          options: ['The present only', 'The future only', 'The past', 'Either the present or the future — they are صالح for both'],
          correct: 3,
        },
        {
          title: 'لم يلد',
          kind: 'mcq',
          prompt: '﴿لَمْ يَلِدْ وَلَمْ يُولَدْ﴾ — He begets not, nor is He begotten — serves two separate roles in the treatment of المضارع. What are they?',
          options: ['As an exception to the definition, and as the شاهد for the علامة', 'As a شاهد for لام الابتداء, and for لا النافية', 'As an exception, and as a شاهد for الاستقبال', 'As a شاهد for الأمر, and for المضارع'],
          correct: 0,
        },
        {
          title: 'قلب الزمن',
          kind: 'mcq',
          prompt: 'What does لَمْ do to the meaning of the مضارع after it?',
          options: ['Fixes it to the present', 'Fixes it to the future', 'Leaves the time unchanged', 'Turns it to past time while negating it'],
          correct: 3,
        },
        {
          title: 'تناظر الاستثناءين',
          kind: 'mcq',
          prompt: 'What is the symmetry between the exceptions under الماضي and those under المضارع؟',
          options: ['A ماضي form may carry future meaning, and a مضارع form may carry past meaning', 'Both admit أسماء الأفعال', 'Both concern أفعال العقود', 'Both concern verbs after لَمْ'],
          correct: 0,
        },
        {
          title: 'لام الابتداء',
          kind: 'mcq',
          prompt: 'Which شاهد shows لام الابتداء fixing المضارع to الحال؟',
          options: ['﴿لَنْ تَنَالُوا الْبِرَّ﴾ — you will never attain righteousness', '﴿لَمْ يَلِدْ وَلَمْ يُولَدْ﴾ — He begets not, nor is He begotten', '﴿إِنِّي لَيَحْزُنُنِي أَنْ تَذْهَبُوا بِهِ﴾ — indeed it grieves me that you should take him away', '﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى﴾ — your Lord will surely give to you, and you will be satisfied'],
          correct: 2,
        },
        {
          title: 'ليحكم بينهم',
          kind: 'mcq',
          prompt: '﴿إِنَّ رَبَّكَ لَيَحْكُمُ بَيْنَهُمْ يَوْمَ الْقِيَامَةِ﴾ — indeed your Lord will judge between them on the Day of Resurrection — is marked خرج منه. What is it an exception to?',
          options: ['To the علامة of المضارع', 'To ما النافية fixing it to الحال', 'To لام الابتداء fixing المضارع to الحال', 'To the definition of المضارع'],
          correct: 2,
        },
        {
          title: 'قوة السياق',
          kind: 'mcq',
          prompt: 'What overrides لام الابتداء in ﴿لَيَحْكُمُ بَيْنَهُمْ يَوْمَ الْقِيَامَةِ﴾ — he will judge between them on the Day of Resurrection؟',
          options: ['The verb beginning with a ياء', 'An explicit statement of time in the sentence', 'The presence of إِنَّ', 'The verb being مرفوع'],
          correct: 1,
        },
        {
          title: 'لا النافية',
          kind: 'mcq',
          prompt: 'In ﴿لَا يُحِبُّ اللهُ الْجَهْرَ بِالسُّوءِ مِنَ الْقَوْلِ﴾ — Allah does not like the public mention of evil in speech — which معيِّن is at work?',
          options: ['لَنْ', 'لا النافية fixing المضارع to الحال', 'لام الابتداء', 'ما النافية'],
          correct: 1,
        },
        {
          title: 'ما النافية',
          kind: 'mcq',
          prompt: 'In ﴿وَمَا تَدْرِي نَفْسٌ مَاذَا تَكْسِبُ غَدًا﴾ — no soul knows what it will earn tomorrow — which particle is the معيِّن للحال؟',
          options: ['مَاذَا', 'غَدًا', 'The و at the start', 'ما النافية before تَدْرِي'],
          correct: 3,
        },
        {
          title: 'غدًا وتكسب',
          kind: 'mcq',
          prompt: 'In ﴿وَمَا تَدْرِي نَفْسٌ مَاذَا تَكْسِبُ غَدًا﴾ — no soul knows what it will earn tomorrow — تَكْسِبُ is followed by غَدًا. What does the نفي fix to the present, then?',
          options: ['تَدْرِي — the not-knowing is now, about what will be earned tomorrow', 'تَكْسِبُ — the earning is now', 'Both verbs equally', 'Neither'],
          correct: 0,
        },
        {
          title: 'خمسة معيِّنات',
          kind: 'mcq',
          prompt: 'Which list gives the five things that fix المضارع to الاستقبال؟',
          options: ['قَدْ، السين، سوف، لن، إن', 'السين، سوف، لَنْ، أَنْ، إِنْ', 'السين، سوف، لَمْ، لَنْ، أَنْ', 'لام الابتداء، لا، ما، لن، أن'],
          correct: 1,
        },
        {
          title: 'سيقول السفهاء',
          kind: 'mcq',
          prompt: 'In ﴿سَيَقُولُ السُّفَهَاءُ مِنَ النَّاسِ﴾ — the foolish among the people will say — which معيِّن is at work?',
          options: ['سَوْفَ', 'أَنْ', 'إِنْ', 'السين'],
          correct: 3,
        },
        {
          title: 'ولسوف يعطيك',
          kind: 'mcq',
          prompt: '﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى﴾ — your Lord will surely give to you, and you will be satisfied — contains both a لام and سَوْفَ. Which fixes the time?',
          options: ['Neither', 'سَوْفَ, to الاستقبال', 'The لام, to الحال', 'Both, in conflict'],
          correct: 1,
        },
        {
          title: 'لن تنالوا',
          kind: 'mcq',
          prompt: 'لَنْ in ﴿لَنْ تَنَالُوا الْبِرَّ﴾ — you will never attain righteousness — does two things at once. What are they?',
          options: ['Fixes it to الاستقبال, and makes it مجزوم', 'Negates it without affecting time or إعراب', 'Fixes the verb to الاستقبال, and makes it منصوب', 'Fixes it to الحال, and makes it منصوب'],
          correct: 2,
        },
        {
          title: 'إن ينصركم',
          kind: 'mcq',
          prompt: 'إِنْ in ﴿إِنْ يَنْصُرْكُمُ اللهُ فَلَا غَالِبَ لَكُمْ﴾ — if الله helps you, none can overcome you — is which kind of particle?',
          options: ['شرطية جازمة, and it fixes the verb to الاستقبال', 'ناصبة, fixing the verb to الاستقبال', 'نافية, fixing the verb to الحال', 'مخففة من الثقيلة'],
          correct: 0,
        },
        {
          title: 'أن وإن',
          kind: 'mcq',
          prompt: 'أَنْ and إِنْ both fix المضارع to الاستقبال. How do they differ in their grammatical effect?',
          options: ['أَنْ is ناصبة; إِنْ is شرطية جازمة', 'أَنْ is جازمة; إِنْ is ناصبة', 'Both are ناصبة', 'Neither affects الإعراب'],
          correct: 0,
        },
        {
          title: 'وظائف مختلفة',
          kind: 'mcq',
          prompt: 'What do the five معيِّنات للاستقبال have in common?',
          options: ['All are حروف نفي', 'Only their effect on time — their grammatical functions differ', 'All are نواصب', 'All are جوازم'],
          correct: 1,
        },
        {
          title: 'الاختبار بلم',
          kind: 'mcq',
          prompt: 'A word can grammatically stand after لَمْ. What does that establish?',
          options: ['That it is جامد, not متصرف', 'That it is a فعل مضارع', 'That it is a فعل ماضٍ', 'That it refers to past time'],
          correct: 1,
        },
        {
          title: 'أحرف المضارعة',
          kind: 'mcq',
          prompt: 'What must every مضارع verb begin with?',
          options: ['A حرف زائد of any kind', 'A همزة', 'One of the letters of أَنَيْتُ', 'One of the letters of سألتمونيها'],
          correct: 2,
        },
        {
          title: 'شرط لا علامة',
          kind: 'mcq',
          prompt: 'A word begins with a ياء but cannot stand after لَمْ. Is it a مضارع؟',
          options: ['Yes — beginning with a ياء is sufficient', 'Yes, but only if it also indicates the present', 'It is an اسم فعل مضارع', 'No — beginning with a حرف مضارعة is necessary but the علامة is the test after لَمْ'],
          correct: 3,
        },
        {
          title: 'صلاحيته للزمنين',
          kind: 'mcq',
          prompt: 'Why do the معيِّنات matter for المضارع in a way they do not for الماضي or الأمر؟',
          options: ['Because the مضارع has no علامة of its own', 'Because the مضارع cannot be negated', 'Because the مضارع has no fixed أحرف', 'Because the مضارع is صالح for both الحال and الاستقبال, so something is needed to settle which'],
          correct: 3,
        },
        {
          title: 'التعيين للحال',
          kind: 'mcq',
          prompt: 'A مضارع is preceded by لا النافية and the sentence says nothing else about time. What time does it carry?',
          options: ['الحال', 'الاستقبال', 'الماضي', 'It remains ambiguous'],
          correct: 0,
        },
        {
          title: 'يحزنني',
          kind: 'mcq',
          prompt: 'In ﴿إِنِّي لَيَحْزُنُنِي أَنْ تَذْهَبُوا بِهِ﴾ — indeed it grieves me that you should take him away — the لام fixes يَحْزُنُنِي to الحال. What fixes تَذْهَبُوا؟',
          options: ['أَنْ before it, to الاستقبال', 'The same لام, to الحال', 'Nothing — it stays ambiguous', 'إِنَّ, to الحال'],
          correct: 0,
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'الأمر وأسماء الأفعال',
      subtitle: 'The Imperative and the Verbal Nouns — الأمر with its علامة, and the words that carry a verb’s meaning without being verbs',
      concepts: [
        {
          heading: 'تعريف الأمر',
          lines: [
            { html: `The third and last of the tense divisions is defined not by what it indicates but by what it seeks.`, list: false },
            { box: { title: 'Core Text', lines: [
              `الأمر: ما يُطْلَبُ بِهِ حُصُولُ شيءٍ بَعْدَ زَمَنِ التَّكَلُّمِ، نحو: اجْتَهِدْ`,
            ] } },
            { html: `الأمر is that by which the occurrence of something is sought, after the moment of speaking — for example اجْتَهِدْ, strive! Two things separate it from المضارع, which can also point to the future. First, its definition is built on الطلب, not on mere indication. Second, its time is settled by that طلب — you cannot command what has already happened.`, list: false },
            { html: `Note also that no غالبًا appears here: unlike the first two definitions, this one admits no exception.`, list: false },
          ],
          exercise: {
            prompt: `Both الأمر and a مضارع after السين can point to future time. What separates them in the definition?`,
            kind: 'mcq',
            options: ['الأمر is fixed to the past', 'The مضارع cannot refer to the future', 'الأمر carries no time reference at all', 'الأمر seeks the event (الطلب); the مضارع merely indicates it'],
            correct: 3,
          },
        },
        {
          heading: 'علامة الأمر',
          lines: [
            { box: { title: 'Core Text', lines: [
              `وعَلَامَتُهُ أن يَقْبَلَ نُونَ التَّوْكِيدِ ويَاءَ المُخَاطَبَةِ: مع دَلَالَتِهِ على الطَّلَبِ`,
            ] } },
            { html: `Its sign is that it accepts نون التوكيد and ياء المخاطبة, together with its indicating الطلب (a request).`, list: false },
            { html: `That final clause is not decorative. نون التوكيد and ياء المخاطبة both attach to المضارع as well, so on their own they prove only that the word is a verb — not which kind.`, list: false },
            { table: { headers: ['الصيغة (Form)', 'العلامتان (The Two Signs)', 'دلالة الطلب؟ (Indicates a Request?)'], rows: [
              ['اجْتَهِدْ / اجْتَهِدِي / اجْتَهِدَنَّ', 'Accepts both', 'Yes — so it is أمر'],
              ['تَجْتَهِدِينَ / تَجْتَهِدَنَّ', 'Accepts both', 'No — so it is مضارع'],
            ] } },
            { html: `So the test for الأمر is the two signs <em>and</em> the طلب together — either alone is insufficient.`, list: false },
          ],
          clarification: `Why does الأمر need a two-part test when الماضي and المضارع each get a clean single sign? Because الأمر has no sign of its own. تاء الفاعل and تاء التأنيث الساكنة attach to nothing but الماضي, and standing after لَمْ is possible for nothing but المضارع — each is exclusive. But نون التوكيد and ياء المخاطبة attach to both الأمر and المضارع, so they establish only that the word is one of those two. الطلب is what then narrows it down. Read the علامة as a filter in two stages: the two signs rule out الماضي and الحرف, and الطلب rules out المضارع.`,
          exercise: {
            prompt: `A verb accepts ياء المخاطبة and نون التوكيد. What has that established, before considering الطلب؟`,
            kind: 'mcq',
            options: ['That it is an أمر', 'That it is either أمر or مضارع', 'That it is a ماضٍ', 'That it is an اسم فعل'],
            correct: 1,
          },
        },
        {
          heading: 'تعريف اسم الفعل',
          lines: [
            { html: `A word can mean what a verb means without being one, and the باب gives that case its own name.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وأمَّا ما يَدُلُّ على مَعَانِي الأفْعَالِ ولا يَقْبَلُ عَلَامَاتِهَا، فيُقَالُ له اسْمُ فِعْلٍ`,
            ] } },
            { html: `Two halves to the definition, and both are required: it must carry a verb's meaning, and it must refuse the verb's signs. A word that carries the meaning <em>and</em> takes the signs is simply a verb.`, list: false },
            { html: `This is why they are called أسماء and not أفعال: the meaning is verbal, but the word behaves as a noun.`, list: false },
          ],
          exercise: {
            prompt: `صَهْ means be quiet (اسْكُتْ). Why is it an اسم فعل rather than a فعل أمر?`,
            kind: 'mcq',
            options: ['Because it is مبني', 'Because it has only three letters', 'Because it carries the meaning but does not accept the علامات of الفعل', 'Because its meaning is not really a command'],
            correct: 2,
          },
        },
        {
          heading: 'أقسام اسم الفعل الثلاثة',
          lines: [
            { html: `اسم الفعل divides in parallel with الفعل itself.`, list: false },
            { table: { title: 'The Three Kinds', headers: ['القسم', 'أمثلة', 'بمعنى', 'Meaning'], rows: [
              ['اسْمُ فِعْلٍ مَاضٍ', 'هَيْهَاتَ، شَتَّانَ', 'بَعُدَ، افْتَرَقَ', 'to be far (هَيْهَاتَ); to differ, be separated (شَتَّانَ)'],
              ['اسْمُ فِعْلٍ مُضَارِعٍ', 'وَيْ، أُفٍّ', 'أَتَعَجَّبُ، أَتَضَجَّرُ', 'how amazing! (وَيْ); ugh, how tiresome! (أُفٍّ)'],
              ['اسْمُ فِعْلٍ أَمْرٍ', 'صَهْ، آمِينَ', 'اسْكُتْ، اسْتَجِبْ', 'be quiet (صَهْ); answer [our prayer] (آمِينَ)'],
            ] } },
            { box: { title: 'Core Text', lines: [
              `وهو أَكْثَرُهَا وُجُودًا`,
            ] } },
            { html: `Said of the third kind: اسم فعل أمر is the commonest of the three.`, list: false },
          ],
          exercise: {
            prompt: `هَيْهَاتَ means to be far (بَعُدَ). Which kind of اسم فعل is it?`,
            kind: 'mcq',
            options: ['اسم فعل ماضٍ', 'اسم فعل مضارع', 'اسم فعل أمر', 'It is a فعل ماضٍ, not an اسم فعل'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'What is the definition of الأمر؟',
          options: ['Calls for something to happen after زمن التكلم', 'Accepts نون التوكيد and ياء المخاطبة', 'Indicates the meaning of a فعل without accepting its علامات', 'Indicates something happening after زمن التكلم'],
          correct: 0,
        },
        {
          q: 'What is the علامة of الأمر؟',
          options: ['أن يصح وقوعه بعد لم', 'أن يقبل نون التوكيد وياء المخاطبة مع دلالته على الطلب', 'أن يُبدأ بحرف من أحرف أنيت', 'أن يقبل تاء الفاعل'],
          correct: 1,
        },
        {
          q: 'What is an اسم فعل؟',
          options: ['Indicates the meanings of الأفعال without accepting any of their علامات', 'Indicates a meaning independent in understanding, with time as part of it', 'Any فعل جامد', 'Any اسم derived from a فعل'],
          correct: 0,
        },
        {
          q: 'شَتَّانَ is an اسم فعل meaning:',
          options: ['to differ, be separated (افْتَرَقَ)', 'how amazing! (أَتَعَجَّبُ)', 'be quiet (اسْكُتْ)', 'to be far (بَعُدَ)'],
          correct: 0,
        },
        {
          q: 'أُفٍّ is which kind of اسم فعل؟',
          options: ['أمر', 'It is a حرف, not an اسم فعل', 'ماضٍ', 'مضارع'],
          correct: 3,
        },
        {
          q: 'Which kind of اسم فعل is described as أكثرها وجودًا؟',
          options: ['اسم فعل أمر', 'They are equally common', 'اسم فعل ماضٍ', 'اسم فعل مضارع'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'الطلب',
          kind: 'mcq',
          prompt: 'Which word in the definition of الأمر carries the weight of the whole definition?',
          options: ['يُطلَب', 'حصول', 'شيء', 'بعد'],
          correct: 0,
        },
        {
          title: 'اجتهد',
          kind: 'mcq',
          prompt: 'In اجْتَهِدْ, when does the striving that is sought occur?',
          options: ['At the moment of speaking', 'Before the moment of speaking', 'At no fixed time', 'After the moment of speaking'],
          correct: 3,
        },
        {
          title: 'غياب غالبًا',
          kind: 'mcq',
          prompt: 'Unlike الماضي and المضارع, the definition of الأمر carries no غالبًا. What does that indicate?',
          options: ['No exception to the definition is admitted', 'The definition is incomplete', 'الأمر has no time reference', 'الأمر has no علامة'],
          correct: 0,
        },
        {
          title: 'الأمر والمضارع',
          kind: 'mcq',
          prompt: 'Both الأمر and a مضارع after السين can point to future time. What settles the difference?',
          options: ['Only the مضارع has a time reference', 'الأمر is مبني and the مضارع معرب', 'الأمر seeks the event; the مضارع reports it', 'Only الأمر accepts نون التوكيد'],
          correct: 2,
        },
        {
          title: 'العلامتان المشتركتان',
          kind: 'mcq',
          prompt: 'Why do نون التوكيد and ياء المخاطبة not settle الأمر on their own?',
          options: ['Because المضارع accepts them too', 'Because الماضي accepts them too', 'Because they are also علامات للاسم', 'Because they are حروف زائدة'],
          correct: 0,
        },
        {
          title: 'الاختبار على مرحلتين',
          kind: 'mcq',
          prompt: 'The علامة of الأمر works in two stages. What does each stage rule out?',
          options: ['The two signs rule out المضارع; الطلب rules out الماضي', 'The two signs rule out الاسم; الطلب rules out الحرف', 'Both stages rule out the same thing', 'The two signs rule out الماضي and الحرف; الطلب rules out المضارع'],
          correct: 3,
        },
        {
          title: 'تجتهدين',
          kind: 'mcq',
          prompt: 'تَجْتَهِدِينَ accepts ياء المخاطبة. Is it an أمر؟',
          options: ['It is an اسم فعل أمر', 'No — it carries no دلالة على الطلب, so it is مضارع', 'Yes — the ياء settles it', 'Yes, but only in the feminine'],
          correct: 1,
        },
        {
          title: 'علامات حصرية',
          kind: 'mcq',
          prompt: 'What is special about تاء الفاعل and standing after لَمْ, as against نون التوكيد and ياء المخاطبة?',
          options: ['All four are shared', 'The first two are exclusive to one verb type each; the second two are shared', 'The first two are shared; the second two are exclusive', 'All four are exclusive'],
          correct: 1,
        },
        {
          title: 'اجتهدنَّ',
          kind: 'mcq',
          prompt: 'اجْتَهِدَنَّ carries نون التوكيد and seeks an action. What is it?',
          options: ['فعل ماضٍ', 'اسم فعل أمر', 'فعل أمر', 'فعل مضارع'],
          correct: 2,
        },
        {
          title: 'شطرا التعريف',
          kind: 'mcq',
          prompt: 'The definition of اسم الفعل has two conditions. What are they?',
          options: ['That it be مبني, and that it be ثلاثي', 'That it be a طلب, and that it be مفرد', 'That it carry a verb’s meaning, and that it refuse the verb’s علامات', 'That it carry a verb’s meaning, and that it accept the verb’s علامات'],
          correct: 2,
        },
        {
          title: 'لماذا اسم؟',
          kind: 'mcq',
          prompt: 'Why is an اسم فعل called an اسم when its meaning is verbal?',
          options: ['Because the meaning is verbal but the word behaves as a noun, refusing the verb’s signs', 'Because it is derived from a noun', 'Because it can take أل', 'Because it has no time reference'],
          correct: 0,
        },
        {
          title: 'المعنى وحده لا يكفي',
          kind: 'mcq',
          prompt: 'A word carries a verb’s meaning AND accepts the verb’s علامات. What is it?',
          options: ['A حرف', 'An اسم مشتق', 'Simply a فعل', 'An اسم فعل'],
          correct: 2,
        },
        {
          title: 'هيهات',
          kind: 'mcq',
          prompt: 'هَيْهَاتَ means:',
          options: ['how amazing! (أَتَعَجَّبُ)', 'answer [our prayer] (اسْتَجِبْ)', 'to be far (بَعُدَ)', 'to differ, be separated (افْتَرَقَ)'],
          correct: 2,
        },
        {
          title: 'وَيْ',
          kind: 'mcq',
          prompt: 'وَيْ means:',
          options: ['how amazing! (أَتَعَجَّبُ)', 'how tiresome! (أَتَضَجَّرُ)', 'to be far (بَعُدَ)', 'be quiet (اسْكُتْ)'],
          correct: 0,
        },
        {
          title: 'صه',
          kind: 'mcq',
          prompt: 'صَهْ means:',
          options: ['answer [our prayer] (اسْتَجِبْ)', 'to differ, be separated (افْتَرَقَ)', 'how tiresome! (أَتَضَجَّرُ)', 'be quiet (اسْكُتْ)'],
          correct: 3,
        },
        {
          title: 'آمين',
          kind: 'mcq',
          prompt: 'آمِينَ is an اسم فعل أمر meaning:',
          options: ['be quiet (اسْكُتْ)', 'to be far (بَعُدَ)', 'how amazing! (أَتَعَجَّبُ)', 'answer [our prayer] (اسْتَجِبْ)'],
          correct: 3,
        },
        {
          title: 'أُفٍّ',
          kind: 'mcq',
          prompt: 'أُفٍّ means how tiresome! (أَتَضَجَّرُ). Which kind of اسم فعل does that make it?',
          options: ['It is a حرف of complaint', 'اسم فعل مضارع', 'اسم فعل ماضٍ', 'اسم فعل أمر'],
          correct: 1,
        },
        {
          title: 'ثلاثة أقسام',
          kind: 'mcq',
          prompt: 'On what basis is اسم الفعل divided into three kinds?',
          options: ['On whether it accepts أل', 'On the tense of the verb whose meaning it carries', 'On the number of its letters', 'On whether it is مبني or معرب'],
          correct: 1,
        },
        {
          title: 'أكثرها وجودًا',
          kind: 'mcq',
          prompt: 'Which kind of اسم فعل is the most frequently occurring?',
          options: ['أمر', 'ماضٍ', 'مضارع', 'They occur equally'],
          correct: 0,
        },
        {
          title: 'شتان وهيهات',
          kind: 'mcq',
          prompt: 'What do شَتَّانَ and هَيْهَاتَ have in common?',
          options: ['Both accept تاء الفاعل', 'Both are أسماء أفعال ماضية', 'Both mean to be far (بَعُدَ)', 'Both are أسماء أفعال أمر'],
          correct: 1,
        },
        {
          title: 'اختبار اسم الفعل',
          kind: 'mcq',
          prompt: 'How would you show that هَيْهَاتَ is not a فعل ماضٍ despite meaning to be far (بَعُدَ)؟',
          options: ['By showing it begins with a حرف مضارعة', 'By showing it accepts neither تاء الفاعل nor تاء التأنيث الساكنة', 'By showing it does not refer to the past', 'By showing it cannot stand after لَمْ'],
          correct: 1,
        },
        {
          title: 'اسم فعل أم فعل؟',
          kind: 'mcq',
          prompt: 'اسْكُتْ and صَهْ carry the same meaning. What is the difference between them?',
          options: ['They differ only in length', 'صَهْ carries no طلب', 'اسْكُتْ accepts the علامات of الفعل; صَهْ does not, so it is an اسم فعل', 'صَهْ is a فعل and اسْكُتْ an اسم فعل'],
          correct: 2,
        },
        {
          title: 'الأقسام الأربعة',
          kind: 'mcq',
          prompt: 'Alongside the three kinds of فعل, one further category is treated in this division. What is it?',
          options: ['الفعل الجامد', 'الفعل المزيد', 'حرف المضارعة', 'اسم الفعل'],
          correct: 3,
        },
        {
          title: 'الطلب والزمن',
          kind: 'mcq',
          prompt: 'Why can the time of الأمر never be the past?',
          options: ['Because its definition contains غالبًا', 'Because what is sought cannot already have happened', 'Because الأمر accepts نون التوكيد', 'Because الأمر is مبني'],
          correct: 1,
        },
      ],
    },
  ],
};

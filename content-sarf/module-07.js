// Module 07 — المتعدي واللازم (The Transitive Verb and the Intransitive)
//
// Covers Week 14 of the Advanced Sarf course: التقسيم الخامس للفعل من حيث
// التعدي واللزوم, from شذا العرف في فن الصرف by أحمد الحملاوي. Definitions,
// verb lists, شواهد and examples are kept faithful to the source. Quiz/bank
// question text is English with Arabic morphological terms left in Arabic.
//
// Scope: the definitions of المتعدي and اللازم with the two علامات of the
// first; the three kinds of متعدٍّ — to one object, to two (أفعال القلوب,
// أفعال التصيير, and أعطى وأخواتها), and to three; the eight أسباب by which a
// لازم verb becomes متعدٍّ, including التضمين and نزع الخافض; and the five by
// which a متعدٍّ verb becomes لازم.
// التقسيم السادس (المعلوم والمجهول) follows in Module 08.
//
// 2026-08-12: restructured to match content/module-01.js's (Advanced Nahw)
// revamped presentation style, per explicit instruction — same facts,
// counts, and lesson/concept boundaries, no new grammar content. Every
// concept-level Arabic quotation, definition, rule, or example that
// previously sat bare in a generic 'Core Text' box, or as an untranslated
// fragment inside an `html` line, now gets a specific Definition/Rule/
// Careful/Example/Meaning box holding only the Arabic capsule, immediately
// followed by a full English translation and explanation in the surrounding
// prose — so a learner never has to read Arabic unaided to follow a lesson;
// the Arabic stays for reference, not as a comprehension requirement. Every
// example sentence, شاهد, and آية that previously appeared without an
// English gloss (حَفِظَ مُحَمَّدٌ الدَّرْسَ, ظَنَّ الطالِبُ الدَّرْسَ سَهْلًا,
// أَعْطَى زَيدٌ عَمْرًا دِرْهَمًا, شَهِدَ اللَّهُ أَنَّهُ, and the rest) was
// translated. The four `clarification` fields this module carried were
// folded into their concept's `lines` as ordinary prose, the same
// distillation applied to content-sarf/module-01.js. Several bank items in
// L3/L4 referencing "this division," "the eight أسباب," or "the previous
// lesson" were reworded to name أسباب تعدية اللازم (L3, eight) and أسباب
// لزوم المتعدي (L4, five) explicitly, since a learner can hit either
// lesson's bank items out of order in Practice Mode and the two lists are
// easy to conflate without an explicit name. No grammar content, MCQ
// correct answers, or lesson/concept counts changed.

export default {
  id: 'as-07',
  title: 'المتعدي واللازم',
  heading: 'الفعل',
  blurb: 'الفعل divided by transitivity: how to test for it, and the ways a verb crosses over — or is held back.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'المتعدي وعلامتاه',
      subtitle: 'The Transitive Verb — its definition, the two signs that identify it, and the trap of the مفعول مطلق',
      concepts: [
        {
          heading: 'قسما الفعل وتعريف المتعدي',
          lines: [
            { html: `<bdi>الفعل</bdi> (the verb) divides into two kinds by whether its effect reaches beyond the person doing it. This lesson names the first kind and gives the two signs used to test for it.`, list: false },
            { box: { title: 'Core Text', lines: [
              `يَنْقَسِمُ الفِعْلُ إلى مُتَعَدٍّ ولازِمٍ`,
            ] } },
            { html: `الفعل divides into <bdi>مُتَعَدٍّ</bdi> (transitive) and <bdi>لازِم</bdi> (intransitive). Each division carries a second name that describes what it does.`, list: false },
            { table: { headers: ['القسم (Division)', 'ويُسَمَّى أيضًا (Also Called)'], rows: [
              ['مُتَعَدٍّ', 'مُجاوِزًا — "one that crosses over," because its effect passes beyond the doer'],
              ['لازِم', 'قاصِرًا — "one that falls short," because its effect stops at the doer'],
            ] } },
            { box: { title: 'Definition', lines: [
              `المُتَعَدِّي عِنْدَ الإطْلاقِ: ما يُجاوِزُ الفاعِلَ إلى المَفْعُولِ بِهِ بِنَفْسِهِ`,
            ] } },
            { html: `<bdi>المتعدي</bdi>, in its unqualified sense (<bdi>عِنْدَ الإطْلاقِ</bdi>), is a verb whose effect crosses over from the <bdi>فاعل</bdi> (the doer) to a <bdi>مفعول به</bdi> (a direct object) by itself — with no preposition needed to carry it across.`, list: false },
            { box: { title: 'Example', lines: [`حَفِظَ مُحَمَّدٌ الدَّرْسَ`] } },
            { html: `Muhammad memorized the lesson. <bdi>حَفِظَ</bdi> (memorized) reaches its object, <bdi>الدَّرْسَ</bdi> (the lesson), directly, with nothing standing between the verb and the thing it acted on.`, list: false },
            { html: `<bdi>بِنَفْسِهِ</bdi> — "by itself" — is the operative word in that definition: a verb that reaches its object only through a <bdi>حرف جر</bdi> (a preposition) does not count as متعدٍّ in this unqualified sense. That case gets its own name later in this course.`, list: false },
          ],
          exercise: {
            prompt: `The definition of المتعدي adds بِنَفْسِهِ — "by itself". What does that exclude?`,
            kind: 'mcq',
            options: ['Verbs that are مزيد', 'Verbs whose فاعل is a ضمير', 'Verbs that reach their object only through a حرف جر', 'Verbs with more than one object'],
            correct: 2,
          },
        },
        {
          heading: 'العلامة الأولى: هاء تعود إلى غير المصدر',
          lines: [
            { html: `Two signs identify a متعدٍّ verb. The first turns on what a <bdi>هاء</bdi> — the pronoun suffix meaning "him" or "it" — refers back to when it attaches to the verb.`, list: false },
            { box: { title: 'Definition', lines: [
              `أن تَتَّصِلَ بِهِ هاءٌ تَعُودُ إلى غَيْرِ المَصْدَرِ`,
            ] } },
            { html: `The first sign: a هاء attaches to the verb, referring back to something other than the verb's own <bdi>مصدر</bdi> (its verbal noun).`, list: false },
            { box: { title: 'Example', lines: [`زَيْدٌ ضَرَبَهُ عَمْرٌو`] } },
            { html: `Zayd — Amr struck him. The هاء on <bdi>ضَرَبَهُ</bdi> (struck him) refers back to زيد, a person the striking actually landed on — something only a transitive verb can produce.`, list: false },
            { html: `<bdi>إلى غَيْرِ المَصْدَرِ</bdi> — "referring to other than the مصدر" — is the whole point of the sign, because a هاء that refers back to the verb's own مصدر attaches just as readily to a لازم verb as to a متعدٍّ one:`, list: false },
            { table: { title: 'الهاء العائدة على المصدر (A هاء Referring Back to its Own مصدر)', headers: ['المثال (Example)', 'الترجمة (Translation)', 'نوع الفعل (Type of Verb)'], rows: [
              ['الضَّرْبُ ضَرَبَهُ زَيْدٌ', 'The striking — Zayd struck it', 'الفعل المُتَعَدِّي'],
              ['الفَرْحُ فَرِحَهُ زَيْدٌ', 'The joy — Zayd rejoiced it', 'الفعل اللازِم'],
            ] } },
            { box: { title: 'Rule', lines: [
              `الهاءُ في مِثْلِ ذَلِكَ لَيْسَتْ بِمَفْعُولٍ بِهِ، إنَّما هي مَفْعُولٌ مُطْلَقٌ`,
            ] } },
            { html: `In both rows above, that هاء is not a مفعول به (a direct object) at all — it is a <bdi>مفعول مطلق</bdi>, a cognate object: the action's own name, said again for emphasis. A مفعول مطلق attaches to any verb, transitive or not, so it proves nothing about transitivity.`, list: false },
            { html: `The sign therefore reduces to a single question: what does the attached هاء refer back to? In <bdi>زَيْدٌ ضَرَبَهُ عَمْرٌو</bdi> it refers to زيد, an actual person the striking landed on. In <bdi>الفَرْحُ فَرِحَهُ زَيْدٌ</bdi> it refers to الفَرْح, the verb's own مصدر — the phrase amounts to saying "Zayd rejoiced the rejoicing," which every verb can do, transitive or not. So the sign is not "does a هاء attach" but "does a هاء attach that refers to something other than the action itself."`, list: false },
          ],
          exercise: {
            prompt: `In الفَرْحُ فَرِحَهُ زَيْدٌ — "the joy, Zayd rejoiced it" — a هاء has attached to the verb فَرِحَ. Why does that not prove فَرِحَ is متعدٍّ؟`,
            kind: 'mcq',
            options: ['The sentence is not well formed', 'The هاء refers back to the مصدر and is a مفعول مطلق, not a مفعول به', 'The هاء is زائدة', 'فَرِحَ has no مصدر'],
            correct: 1,
          },
        },
        {
          heading: 'العلامة الثانية: اسم المفعول التام',
          lines: [
            { html: `The second sign leaves pronouns aside and asks instead what shape the verb's <bdi>اسم مفعول</bdi> (passive participle) takes.`, list: false },
            { box: { title: 'Definition', lines: [
              `أن يُصاغَ منه اسْمُ مَفْعُولٍ تامٌّ، أي غَيْرُ مُقْتَرِنٍ بِحَرْفِ جَرٍّ أو ظَرْفٍ`,
            ] } },
            { html: `The second sign: a complete اسم مفعول can be formed from the verb — <bdi>تامّ</bdi> meaning complete in itself, not needing a حرف جر or a ظرف (an adverbial) attached to prop it up.`, list: false },
            { box: { title: 'Example', lines: [`مَضْرُوب`] } },
            { html: `Struck. مَضْرُوب stands on its own as a complete word with a complete meaning — struck by someone, understood, without anything further needing to be said.`, list: false },
            { html: `تامّ is what does the sorting here. A لازم verb also yields an اسم مفعول, but only one that needs a preposition attached before it makes sense — <bdi>مَذْهُوبٌ بِهِ</bdi> ("gone with," i.e. departed with) rather than a bare <bdi>مَذْهُوب</bdi>. Only a متعدٍّ verb produces a form that is complete by itself.`, list: false },
          ],
          exercise: {
            prompt: `A لازم verb also has an اسم مفعول, but it only makes sense with a حرف جر or ظرف attached — مَذْهُوبٌ بِهِ, not a bare مَذْهُوب. What does that show about the second علامة؟`,
            kind: 'mcq',
            options: ['The تام form is the only one that is مبني', 'Because otherwise it would be a مصدر', 'A لازم verb also yields an اسم مفعول, but never a تام one — only a متعدٍّ verb does', 'A لازم verb yields no اسم مفعول at all'],
            correct: 2,
          },
        },
        {
          heading: 'أقسام المتعدي',
          lines: [
            { html: `With the definition and the two signs settled, المتعدي itself splits further by how many objects the verb takes.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وهو على ثَلاثَةِ أَقْسامٍ`,
            ] } },
            { html: `And it — المتعدي — falls into three divisions.`, list: false },
            { table: { headers: ['القسم (Division)', 'البيان (Explanation)'], rows: [
              ['ما يَتَعَدَّى إلى مَفْعُولٍ واحِدٍ — what takes a single مفعول', 'وهو كَثِيرٌ — this is the common case'],
              ['ما يَتَعَدَّى إلى مَفْعُولَيْنِ — what takes two مفعولين', 'إما أن يكونَ أَصْلُهُما المُبْتَدَأَ والخَبَرَ، وإمَّا لا — either the two objects were originally a مبتدأ and its خبر, or they were not'],
              ['ما يَتَعَدَّى إلى ثَلاثَةِ مَفاعِيلَ — what takes three مفاعيل', 'وهو بابُ أَعْلَمَ وأَرَى — this is باب أعلم وأرى'],
            ] } },
            { html: `The middle category — verbs that take two objects — splits again by where those two objects came from, and that split is the subject of the next lesson.`, list: false },
          ],
          exercise: {
            prompt: `Which of the three kinds of متعدٍّ (one object, two objects, or three) is described in the source as كَثِير — common?`,
            kind: 'mcq',
            options: ['باب أعلم وأرى, which takes three مفاعيل', 'ما يتعدى إلى مفعول واحد — the verb that takes a single object', 'ما يتعدى إلى مفعولين — the verb that takes two objects', 'ما يتعدى إلى ثلاثة مفاعيل'],
            correct: 1,
          },
        },
      ],
      quiz: [
        {
          q: 'What is the other name for المتعدي؟',
          options: ['الجامِد', 'المُجاوِز', 'القاصِر', 'المُطاوِع'],
          correct: 1,
        },
        {
          q: 'What is the other name for اللازم؟',
          options: ['القاصِر', 'المُجاوِز', 'الناقِص', 'المُتَصَرِّف'],
          correct: 0,
        },
        {
          q: 'What is the definition of المتعدي؟',
          options: ['One or more letters have been added to it', 'Its effect passes from the فاعل to a مفعول به by itself', 'Its effect does not pass from the فاعل to a مفعول به', 'Sticks to a single form'],
          correct: 1,
        },
        {
          q: 'The first علامة of المتعدي is that a هاء attaches to it referring to:',
          options: ['المصدر', 'الفاعل', 'الظرف', 'غير المصدر'],
          correct: 3,
        },
        {
          q: 'In الضَّرْبُ ضَرَبَهُ زَيْدٌ, what is the هاء؟',
          options: ['فاعل', 'حال', 'مفعول مطلق', 'مفعول به'],
          correct: 2,
        },
        {
          q: 'The second علامة is that a اسم مفعول تام can be built from it. تام means:',
          options: ['غير مقترِن بحرف جر أو ظرف', 'مقترِن بحرف جر', 'مبني للمجهول', 'مشتق من الثلاثي'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'مجاوز وقاصر',
          kind: 'mcq',
          prompt: 'الفعل divides into المتعدي and اللازم. Which pair of second names goes with that division?',
          options: ['التام والناقص', 'المجاوز للمتعدي، والقاصر للازم', 'القاصر للمتعدي، والمجاوز للازم', 'الجامد والمتصرف'],
          correct: 1,
        },
        {
          title: 'حفظ محمد الدرس',
          kind: 'mcq',
          prompt: 'حَفِظَ مُحَمَّدٌ الدَّرْسَ. Which element is the مفعول به؟',
          options: ['مُحَمَّدٌ', 'حَفِظَ', 'There is none', 'الدَّرْسَ'],
          correct: 3,
        },
        {
          title: 'بنفسه',
          kind: 'mcq',
          prompt: 'ذَهَبْتُ بِعَلِيٍّ reaches its object through a حرف جر. Is that verb متعدٍّ عند الإطلاق؟',
          options: ['Yes — it reaches an object either way', 'Yes, but only in the ماضي', 'It is جامد', 'No — the definition requires that it reach the object بنفسه'],
          correct: 3,
        },
        {
          title: 'زيد ضربه عمرو',
          kind: 'mcq',
          prompt: 'In زَيْدٌ ضَرَبَهُ عَمْرٌو, what does the هاء refer back to?',
          options: ['الضَّرْب', 'Nothing — it is زائدة', 'زَيْد', 'عَمْرو'],
          correct: 2,
        },
        {
          title: 'الفرح فرِحه زيد',
          kind: 'mcq',
          prompt: 'In الفَرْحُ فَرِحَهُ زَيْدٌ, what does the هاء refer back to?',
          options: ['الفَرْح — the verb’s own مصدر', 'زَيْد', 'A hidden مفعول به', 'Nothing'],
          correct: 0,
        },
        {
          title: 'المفعول المطلق',
          kind: 'mcq',
          prompt: 'Why can a هاء referring to the مصدر attach to a لازم verb as readily as to a متعدٍّ؟',
          options: ['Because it is a مفعول مطلق — the action named again — which any verb admits', 'Because لازم verbs may take one object', 'Because the مصدر is always متعدٍّ', 'Because the هاء is زائدة in that case'],
          correct: 0,
        },
        {
          title: 'صياغة السؤال',
          kind: 'mcq',
          prompt: 'The first علامة reduces to one question. Which?',
          options: ['Is the verb مجرد or مزيد?', 'What does the attached هاء refer back to?', 'Does a هاء attach at all?', 'Is the verb ثلاثي?'],
          correct: 1,
        },
        {
          title: 'مضروب',
          kind: 'mcq',
          prompt: 'مَضْرُوب is the model for which علامة؟',
          options: ['The first — a هاء attaches to the verb', 'Neither — it is a مصدر', 'Both equally', 'The second — a اسم مفعول تام can be built from the verb'],
          correct: 3,
        },
        {
          title: 'مذهوب به',
          kind: 'mcq',
          prompt: 'A لازم verb yields مَذْهُوبٌ بِهِ rather than a bare مَذْهُوب. What does that show?',
          options: ['Its اسم مفعول is a مصدر', 'Its اسم مفعول is not تام, so the second علامة is not met', 'It has no اسم مفعول', 'It is جامد'],
          correct: 1,
        },
        {
          title: 'شرط التمام',
          kind: 'mcq',
          prompt: 'The condition تام rules out a form مقترِن بحرف جر أو ظرف. Why does that matter?',
          options: ['Such forms are ungrammatical', 'Such forms are مصادر', 'Such forms belong to النحو not الصرف', 'A form needing that prop shows the verb does not reach an object on its own'],
          correct: 3,
        },
        {
          title: 'أقسام ثلاثة',
          kind: 'mcq',
          prompt: 'On what basis is المتعدي divided into three?',
          options: ['On how many مفاعيل it takes', 'On whether it is مجرد or مزيد', 'On whether it is ثلاثي or رباعي', 'On whether it is جامد or متصرف'],
          correct: 0,
        },
        {
          title: 'المتعدي لاثنين',
          kind: 'mcq',
          prompt: 'The category of two objects splits further. On what basis?',
          options: ['On whether the two objects were originally a مبتدأ and a خبر', 'On whether the verb is ثلاثي', 'On whether the verb is جامد', 'On whether the objects are definite'],
          correct: 0,
        },
        {
          title: 'باب أعلم وأرى',
          kind: 'mcq',
          prompt: 'باب أَعْلَمَ وأَرَى is which of the three kinds?',
          options: ['المتعدي إلى مفعول واحد', 'اللازم', 'المتعدي إلى ثلاثة مفاعيل', 'المتعدي إلى مفعولين'],
          correct: 2,
        },
        {
          title: 'فهم المسألة',
          kind: 'mcq',
          prompt: 'فَهِمَ المسألةَ is an example of which kind?',
          options: ['المتعدي إلى ثلاثة', 'اللازم', 'المتعدي إلى مفعول واحد', 'المتعدي إلى مفعولين'],
          correct: 2,
        },
        {
          title: 'العلامتان',
          kind: 'mcq',
          prompt: 'What are the two علامات of المتعدي؟',
          options: ['A هاء attaching that refers to other than the مصدر, and a تام اسم مفعول', 'A هاء attaching that refers to the مصدر, and a تام اسم مفعول', 'قبول قَدْ, and قبول السين', 'قبول تاء الفاعل, and قبول نون التوكيد'],
          correct: 0,
        },
        {
          title: 'اختبار حفظ',
          kind: 'mcq',
          prompt: 'Apply the second علامة to حَفِظَ. What form does it yield?',
          options: ['حِفْظ', 'حافِظ', 'مَحْفُوظ — complete in itself, so حَفِظَ is متعدٍّ', 'مَحْفُوظٌ بِهِ'],
          correct: 2,
        },
        {
          title: 'اختبار قعد',
          kind: 'mcq',
          prompt: 'Apply the second علامة to قَعَدَ. What is the result?',
          options: ['مَقْعُود, which is تام', 'قاعِد, which is تام', 'The test does not apply to it', 'No تام اسم مفعول is available, so قَعَدَ is لازم'],
          correct: 3,
        },
        {
          title: 'عند الإطلاق',
          kind: 'mcq',
          prompt: 'The definition begins المتعدي عند الإطلاق. What does that phrase signal?',
          options: ['That the verb is always متعدٍّ', 'That the definition is approximate', 'That the verb is مطلق in its meaning', 'That this is the sense of متعدٍّ when the word is used without qualification'],
          correct: 3,
        },
        {
          title: 'دور المصدر',
          kind: 'mcq',
          prompt: 'What role does the مصدر play in the first علامة؟',
          options: ['It marks the case the sign must exclude, since a هاء referring to it proves nothing', 'It is the object the verb reaches', 'It is the فاعل', 'It has no role'],
          correct: 0,
        },
        {
          title: 'ترتيب النظر',
          kind: 'mcq',
          prompt: 'To classify a verb as متعدٍّ or لازم, what do you ask first?',
          options: ['How many letters it has', 'Whether it is جامد or متصرف', 'Which باب it belongs to', 'Whether its action passes beyond the فاعل to a مفعول به without a حرف جر'],
          correct: 3,
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'أقسام المتعدي',
      subtitle: 'One Object, Two, or Three — أفعال القلوب, أفعال التصيير, أعطى وأخواتها, and باب أعلم وأرى',
      concepts: [
        {
          heading: 'المتعدي إلى مفعول واحد',
          lines: [
            { html: `The first of the three أقسام needs no further machinery — it is the default case.`, list: false },
            { box: { title: 'Definition', lines: [
              `ما يَتَعَدَّى إلى مَفْعُولٍ واحِدٍ، وهو كَثِيرٌ`,
            ] } },
            { html: `What takes a single مفعول — and this is the common case.`, list: false },
            { box: { title: 'Example', lines: [`حَفِظَ مُحَمَّدٌ الدَّرْسَ، وفَهِمَ المَسْأَلَةَ`] } },
            { html: `Muhammad memorized the lesson, and he understood the issue. One فاعل, one مفعول به in each — the action passes from the first straight to the second, with nothing further to account for.`, list: false },
          ],
          exercise: {
            prompt: `Which of the three kinds of متعدٍّ (one object, two objects, or three) needs no further subdivision?`,
            kind: 'mcq',
            options: ['المتعدي إلى مفعولين', 'المتعدي إلى ثلاثة مفاعيل', 'All three are subdivided', 'المتعدي إلى مفعول واحد'],
            correct: 3,
          },
        },
        {
          heading: 'أفعال القلوب',
          lines: [
            { html: `The two-object verbs split into two branches by where their objects came from. The first branch is the one whose two objects began life as a sentence of their own — a مبتدأ and its خبر.`, list: false },
            { box: { title: 'Core Text', lines: [
              `إمَّا أن يكونَ أَصْلُهُما المُبْتَدَأَ والخَبَرَ، وهو ظَنَّ وأَخَواتُها`,
            ] } },
            { html: `Either the origin of the two objects is a مبتدأ (a topic) and its خبر (its predicate) — and this branch is <bdi>ظَنَّ وأَخَواتُها</bdi>, "ظَنَّ and its sisters."`, list: false },
            { box: { title: 'Definition', lines: [
              `أفعال القلوب: أفعالٌ تَدُلُّ على الاعْتِقادِ أو الظَّنِّ أو اليَقِينِ، وتَنْصِبُ مفعولين`,
            ] } },
            { html: `<bdi>أفعال القلوب</bdi> — "verbs of the heart" — are verbs indicating belief, supposition, or certainty, and they put both of their objects in the accusative.`, list: false },
            { table: { title: 'أهمّها (The Most Important)', headers: ['الفعل (Verb)', 'المعنى (Meaning)'], rows: [
              ['ظَنَّ، حَسِبَ، خالَ، زَعَمَ', 'for الظَّنّ (supposition)'],
              ['عَلِمَ، رَأَى، وَجَدَ', 'العِلْمِيَّة (certainty, knowledge)'],
              ['دَرَى', 'for اليَقِين (certainty)'],
            ] } },
            { box: { title: 'Example', lines: [
              `ظَنَّ الطالِبُ الدَّرْسَ سَهْلًا ، عَلِمْتُ الطالِبَ مُجْتَهِدًا ، وَجَدْتُ النَّصَّ واضِحًا`,
            ] } },
            { html: `The student thought the lesson [was] easy; I knew the student [to be] hardworking; I found the text clear.`, list: false },
            { html: `Strip the verb from any of the three and a complete جملة اسمية (nominal sentence) is left behind — <bdi>الدَّرْسُ سَهْلٌ</bdi>, "the lesson is easy" — which is exactly what <bdi>أصلهما المبتدأ والخبر</bdi> means in practice.`, list: false },
          ],
          exercise: {
            prompt: `In ظَنَّ الطالِبُ الدَّرْسَ سَهْلًا — "the student thought the lesson [was] easy" — what were الدَّرْسَ and سَهْلًا originally?`,
            kind: 'mcq',
            options: ['A فاعل and a حال', 'A مضاف and a مضاف إليه', 'A مبتدأ and its خبر', 'Two مفعولان unrelated to each other'],
            correct: 2,
          },
        },
        {
          heading: 'أفعال التصيير وأعطى وأخواتها',
          lines: [
            { html: `The second family within ظَنَّ وأخواتها changes the object's state rather than reporting a belief about it.`, list: false },
            { box: { title: 'Definition', lines: [
              `أفعال التَّصْيِير: أفعالٌ تَجْعَلُ المَفْعُولَ يَتَحَوَّلُ مِن حالَةٍ إلى أُخْرَى، وتَنْصِبُ مَفْعُولَيْنِ كذلك`,
            ] } },
            { html: `<bdi>أفعال التصيير</bdi> — "verbs of transformation" — are verbs that make the object shift from one state into another, and they too put both objects in the accusative. Their best-known members are <bdi>جَعَلَ، صَيَّرَ، اتَّخَذَ، رَدَّ، تَرَكَ</bdi>.`, list: false },
            { box: { title: 'Example', lines: [
              `جَعَلْتُ التُّرابَ ذَهَبًا ، صَيَّرَ المُعَلِّمُ الدَّرْسَ سَهْلًا ، تَرَكَ الرَّجُلُ البابَ مَفْتُوحًا`,
            ] } },
            { html: `I made the dust [into] gold; the teacher made the lesson easy; the man left the door open. In each, the first object moves from one state into the second.`, list: false },
            { html: `That exhausts the first branch — objects whose origin was a مبتدأ and خبر. The second branch is the one whose two objects never formed a sentence together at all:`, list: false },
            { box: { title: 'Core Text', lines: [
              `وإمَّا لا، وهو أَعْطَى وأَخَواتُها`,
            ] } },
            { html: `Or [their origin is] not [a مبتدأ and خبر] — and this branch is <bdi>أَعْطَى وأَخَواتُها</bdi>, "أعطى and its sisters."`, list: false },
            { box: { title: 'Example', lines: [`أَعْطَى زَيدٌ عَمْرًا دِرْهَمًا`] } },
            { html: `Zayd gave Amr a dirham. <bdi>عَمْرٌو دِرْهَمٌ</bdi> — "Amr [is] a dirham" — asserts nothing, since Amr is not a dirham. The two objects here are simply a recipient (<bdi>عَمْرًا</bdi>) and a thing given (<bdi>دِرْهَمًا</bdi>), not a topic-and-predicate pair.`, list: false },
            { html: `The test for which branch a two-object verb belongs to is exactly this: strip the verb away and see whether the two objects still make a sentence. Drop ظَنَّ from ظَنَّ الطالِبُ الدَّرْسَ سَهْلًا and الدَّرْسُ سَهْلٌ remains — a complete جملة اسمية. Do the same to أَعْطَى زَيدٌ عَمْرًا دِرْهَمًا and عَمْرٌو دِرْهَمٌ is left, which asserts nothing. That is why أعطى وأخواتها form the "وإمَّا لا" branch: their two objects are simply two separate things the giving involved, a recipient and a thing given, never a claim that one is the other.`, list: false },
          ],
          exercise: {
            prompt: `Strip the verb from أَعْطَى زَيدٌ عَمْرًا دِرْهَمًا — "Zayd gave Amr a dirham" — and the two remaining objects, عَمْرًا and دِرْهَمًا, do not form a sentence. What does that establish?`,
            kind: 'mcq',
            options: ['That their أصل is not a مبتدأ and خبر, so أعطى belongs to the second branch', 'That أعطى takes only one object', 'That أعطى is لازم', 'That أعطى is a فعل قلبي'],
            correct: 0,
          },
        },
        {
          heading: 'المتعدي إلى ثلاثة مفاعيل',
          lines: [
            { html: `The third and last division of المتعدي is the smallest — a single named pattern.`, list: false },
            { box: { title: 'Definition', lines: [
              `ما يَتَعَدَّى إلى ثَلاثَةِ مَفاعِيلَ، وهو بابُ أَعْلَمَ وأَرَى`,
            ] } },
            { html: `What takes three مفاعيل — this is <bdi>بابُ أَعْلَمَ وأَرَى</bdi>, "the pattern of أَعْلَمَ and أَرَى."`, list: false },
            { box: { title: 'Example', lines: [`أَعْلَمَ زَيدٌ عَمْرًا الدَّرْسَ سَهْلًا`] } },
            { html: `Zayd informed Amr that the lesson was easy. زيد is the فاعل, and all three of عَمْرًا، الدَّرْسَ، سَهْلًا are مفاعيل.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿كَذَٰلِكَ يُرِيهِمُ اللَّهُ أَعْمَالَهُمْ حَسَرَاتٍ عَلَيْهِمْ﴾ [البقرة: ١٦٧]`] } },
            { html: `Thus will الله show them their deeds as regrets upon them. The same three-object structure: اللَّهُ is the فاعل, and أَعْمَالَهُمْ and حَسَرَاتٍ are the two further مفاعيل beside the implied هم (them) already attached to the verb.`, list: false },
            { html: `أَعْلَمَ and أَرَى are the أَفْعَلَ forms of عَلِمَ and رَأَى — the same pair singled out earlier as the only two verbs of two objects that the added همزة raises to three.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿يُرِيهِمُ اللَّهُ أَعْمَالَهُمْ حَسَرَاتٍ عَلَيْهِمْ﴾ — "thus will الله show them their deeds as regrets upon them" — how many مفاعيل does the verb يُرِي take?`,
            kind: 'mcq',
            options: ['واحد', 'None — it is لازم', 'ثلاثة', 'اثنان'],
            correct: 2,
          },
        },
      ],
      quiz: [
        {
          q: 'أفعال القلوب indicate:',
          options: ['المطاوعة', 'الاعتقاد أو الظن أو اليقين', 'التحول من حالة إلى أخرى', 'الطلب'],
          correct: 1,
        },
        {
          q: 'Which set gives أفعال التصيير؟',
          options: ['أَعْطَى، مَنَحَ، كَسا', 'جَعَلَ، صَيَّرَ، اتَّخَذَ، رَدَّ، تَرَكَ', 'ظَنَّ، حَسِبَ، خالَ، زَعَمَ', 'عَلِمَ، رَأَى، وَجَدَ، دَرَى'],
          correct: 1,
        },
        {
          q: 'دَرَى is classed under which sense?',
          options: ['الظن', 'العِلمية', 'التصيير', 'اليقين'],
          correct: 3,
        },
        {
          q: 'أَعْطَى زَيدٌ عَمْرًا دِرْهَمًا belongs to which branch?',
          options: ['المتعدي لاثنين ليس أصلهما المبتدأ والخبر', 'المتعدي لاثنين أصلهما المبتدأ والخبر', 'المتعدي لواحد', 'المتعدي لثلاثة'],
          correct: 0,
        },
        {
          q: 'Which باب takes three مفاعيل؟',
          options: ['باب أَعْطَى وأخواتها', 'باب جَعَلَ وصَيَّرَ', 'باب أَعْلَمَ وأَرَى', 'باب ظَنَّ وأخواتها'],
          correct: 2,
        },
        {
          q: 'جَعَلْتُ التُّرابَ ذَهَبًا illustrates which family?',
          options: ['أفعال القلوب', 'أعطى وأخواتها', 'باب أعلم وأرى', 'أفعال التصيير'],
          correct: 3,
        },
      ],
      bank: [
        {
          title: 'أصلهما المبتدأ والخبر',
          kind: 'mcq',
          prompt: 'What does أصلهما المبتدأ والخبر mean in practice?',
          options: ['The two objects refer to the same thing', 'The verb was originally intransitive', 'Strip the verb and the two objects still form a sentence', 'The two objects are both definite'],
          correct: 2,
        },
        {
          title: 'ظنَّ وأخواتها',
          kind: 'mcq',
          prompt: 'ظَنَّ وأخواتها covers which two families together?',
          options: ['أفعال المقاربة والرجاء', 'أفعال القلوب وأفعال التصيير', 'أفعال القلوب وأعطى وأخواتها', 'أفعال التصيير وباب أعلم'],
          correct: 1,
        },
        {
          title: 'أفعال الظن',
          kind: 'mcq',
          prompt: 'Which four verbs are grouped under للظن؟',
          options: ['أَعْطَى، كَسا، مَنَحَ، أَلْبَسَ', 'ظَنَّ، حَسِبَ، خالَ، زَعَمَ', 'عَلِمَ، رَأَى، وَجَدَ، دَرَى', 'جَعَلَ، صَيَّرَ، اتَّخَذَ، رَدَّ'],
          correct: 1,
        },
        {
          title: 'العلمية',
          kind: 'mcq',
          prompt: 'Which three verbs are grouped as العِلمية؟',
          options: ['جَعَلَ، صَيَّرَ، تَرَكَ', 'أَعْلَمَ، أَرَى، أَعْطَى', 'عَلِمَ، رَأَى، وَجَدَ', 'ظَنَّ، حَسِبَ، خالَ'],
          correct: 2,
        },
        {
          title: 'علمت الطالب مجتهدًا',
          kind: 'mcq',
          prompt: 'In عَلِمْتُ الطالِبَ مُجْتَهِدًا, how many مفعولان does the verb take?',
          options: ['None', 'اثنان', 'واحد', 'ثلاثة'],
          correct: 1,
        },
        {
          title: 'وجدت النص واضحًا',
          kind: 'mcq',
          prompt: 'Strip the verb from وَجَدْتُ النَّصَّ واضِحًا. What remains?',
          options: ['A مضاف and مضاف إليه', 'النَّصُّ واضِحٌ — a complete جملة اسمية', 'Nothing meaningful', 'النَّصَّ واضِحًا, still منصوبان'],
          correct: 1,
        },
        {
          title: 'تعريف التصيير',
          kind: 'mcq',
          prompt: 'What do أفعال التصيير do?',
          options: ['Express a request', 'Express mutual action', 'Make the مفعول move from one state to another', 'Express belief or supposition'],
          correct: 2,
        },
        {
          title: 'صيَّر المعلم الدرس',
          kind: 'mcq',
          prompt: 'صَيَّرَ المُعَلِّمُ الدَّرْسَ سَهْلًا. What changed state?',
          options: ['Nothing changed state', 'الدَّرْس — it moved from difficult to easy', 'المُعَلِّم', 'سَهْلًا'],
          correct: 1,
        },
        {
          title: 'ترك الباب مفتوحًا',
          kind: 'mcq',
          prompt: 'تَرَكَ الرَّجُلُ البابَ مَفْتُوحًا. Which family does تَرَكَ belong to here?',
          options: ['أفعال الشروع', 'أفعال التصيير', 'أفعال القلوب', 'أعطى وأخواتها'],
          correct: 1,
        },
        {
          title: 'عمرو درهم',
          kind: 'mcq',
          prompt: 'Stripping أَعْطَى leaves عَمْرٌو دِرْهَمٌ. Why does that fail as a test?',
          options: ['It is grammatically impossible', 'The two words are both definite', 'The verb is لازم', 'It asserts nothing — Amr is not a dirham'],
          correct: 3,
        },
        {
          title: 'مفعولا أعطى',
          kind: 'mcq',
          prompt: 'What are the two objects of أعطى in relation to each other?',
          options: ['A subject and its predicate', 'A described thing and its description', 'A possessor and a possession', 'A recipient and a thing given — two separate things the giving involved'],
          correct: 3,
        },
        {
          title: 'أعلم وأرى',
          kind: 'mcq',
          prompt: 'What are أَعْلَمَ and أَرَى derived from?',
          options: ['ظَنَّ and حَسِبَ', 'جَعَلَ and صَيَّرَ', 'عَلِمَ and رَأَى, by the همزة', 'أَعْطَى and كَسا'],
          correct: 2,
        },
        {
          title: 'الهمزة والثلاثة',
          kind: 'mcq',
          prompt: 'Why are عَلِمَ and رَأَى singled out among the two-object verbs?',
          options: ['They are the only أفعال قلوب', 'They are the only verbs with a همزة', 'They are the only verbs of certainty', 'They are the only verbs متعدٍّ لاثنين that the همزة raises to three'],
          correct: 3,
        },
        {
          title: 'أعلم زيد عمرًا',
          kind: 'mcq',
          prompt: 'In أَعْلَمَ زَيدٌ عَمْرًا الدَّرْسَ سَهْلًا, which word is the فاعل؟',
          options: ['زَيدٌ', 'عَمْرًا', 'الدَّرْسَ', 'سَهْلًا'],
          correct: 0,
        },
        {
          title: 'يريهم الله',
          kind: 'mcq',
          prompt: 'In ﴿يُرِيهِمُ اللَّهُ أَعْمَالَهُمْ حَسَرَاتٍ عَلَيْهِمْ﴾, which is the first مفعول؟',
          options: ['The هم attached to يُرِي', 'أَعْمَالَهُمْ', 'حَسَرَاتٍ', 'اللَّهُ'],
          correct: 0,
        },
        {
          title: 'المفعول الثالث',
          kind: 'mcq',
          prompt: 'In ﴿كَذَٰلِكَ يُرِيهِمُ اللَّهُ أَعْمَالَهُمْ حَسَرَاتٍ عَلَيْهِمْ﴾, which word is the third مفعول؟',
          options: ['اللَّهُ', 'أَعْمَالَهُمْ', 'The هم attached to يُرِي', 'حَسَرَاتٍ'],
          correct: 3,
        },
        {
          title: 'خالَ وزعم',
          kind: 'mcq',
          prompt: 'خالَ and زَعَمَ sit under which sense?',
          options: ['العِلمية', 'التصيير', 'الظن', 'اليقين'],
          correct: 2,
        },
        {
          title: 'نصب المفعولين',
          kind: 'mcq',
          prompt: 'Both أفعال القلوب and أفعال التصيير are said to تنصب مفعولين. What does that assert?',
          options: ['Each governs one object', 'Each is لازم', 'Each governs a مبتدأ and خبر without changing their case', 'Each governs two objects in the accusative'],
          correct: 3,
        },
        {
          title: 'اتخذ وردّ',
          kind: 'mcq',
          prompt: 'اتَّخَذَ and رَدَّ appear in which list?',
          options: ['باب أعلم وأرى', 'أفعال التصيير', 'أفعال القلوب', 'أعطى وأخواتها'],
          correct: 1,
        },
        {
          title: 'الفرق بين الفرعين',
          kind: 'mcq',
          prompt: 'What single test separates the two branches of the two-object verbs?',
          options: ['Whether the two objects, with the verb removed, form a sentence', 'Whether the verb is ثلاثي', 'Whether the objects are definite', 'Whether the verb is مزيد'],
          correct: 0,
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'أسباب تعدي اللازم',
      subtitle: 'Eight Routes to Transitivity — from the همزة to نزع الخافض, and the caution that the whole matter is سماعي',
      concepts: [
        {
          heading: 'اللازم، والأسباب الثلاثة الأولى',
          lines: [
            { html: `With المتعدي fully defined, this lesson turns to <bdi>اللازم</bdi> and the eight <bdi>أسباب تعدية اللازم</bdi> — the eight ways a verb that is intransitive by origin can still be made to take an object.`, list: false },
            { box: { title: 'Definition', lines: [
              `اللازِم: ما لَمْ يُجاوِزِ الفاعِلَ إلى المَفْعُولِ بِهِ`,
            ] } },
            { html: `اللازم is a verb whose effect does not cross over from the فاعل to a مفعول به.`, list: false },
            { box: { title: 'Example', lines: [`كقَعَدَ مُحَمَّدٌ، وخَرَجَ عَلِيٌّ`] } },
            { html: `As in: Muhammad sat, and Ali went out. Neither verb reaches an object; the action stays with the doer and goes no further.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وأَسْبابُ تَعَدِّي الفِعْلِ اللازِمِ أَصالَةً ثَمانِيَةٌ`,
            ] } },
            { html: `And the أسباب — the causes — by which a verb لازم by origin becomes transitive are eight. A verb that is لازم by origin can still be brought to take an object, and eight routes are listed for doing that. The first three all work the same way: adding a letter to the verb.`, list: false },
            { table: { headers: ['#', 'السبب (Cause)', 'المثال (Example)', 'الترجمة (Translation)'], rows: [
              ['١', 'الهَمْزَةُ', 'أَكْرَمَ زَيدٌ عَمْرًا', 'Zayd honored Amr'],
              ['٢', 'التَّضْعِيفُ', 'فَرَّحْتُ زَيْدًا', 'I made Zayd happy'],
              ['٣', 'زِيادَةُ أَلِفِ المُفاعَلَةِ — adding the ألف of المفاعلة', 'جالَسَ زَيْدٌ العُلَماءَ', 'Zayd sat with the scholars'],
            ] } },
            { html: `These three are the أَفْعَلَ، فَعَّلَ and فَاعَلَ patterns covered earlier in this course, now seen from the angle of what they do to transitivity: each adds a letter to a لازم root, and each addition gives the verb an object it did not have before.`, list: false },
          ],
          exercise: {
            prompt: `فَرَّحْتُ زَيْدًا — "I made Zayd happy." Which of the eight أسباب تعدية اللازم has made the verb transitive?`,
            kind: 'mcq',
            options: ['التضعيف — doubling the عين', 'الهمزة', 'ألف المفاعلة', 'التضمين'],
            correct: 0,
          },
        },
        {
          heading: 'السببان الرابع والخامس',
          lines: [
            { html: `Two more of the eight أسباب, neither one adding a letter to the root the way the first three did.`, list: false },
            { table: { headers: ['#', 'السبب (Cause)', 'المثال (Example)', 'الترجمة (Translation)', 'ملاحظة (Note)'], rows: [
              ['٤', 'زِيادَةُ حَرْفِ الجَرِّ — adding a حرف جر', 'ذَهَبْتُ بِعَلِيٍّ', 'I went off with Ali — i.e. I took Ali away', 'مُتَعَدٍّ مَعْنًى'],
              ['٥', 'زِيادَةُ الهَمْزَةِ والسِّينِ والتاءِ — adding الهمزة والسين والتاء', 'اسْتَخْرَجَ زَيْدٌ المالَ', 'Zayd extracted the money', '—'],
            ] } },
            { html: `The note on the fourth matters: adding a حرف جر makes the verb transitive <bdi>معنًى</bdi> — in sense — but not <bdi>بنفسه</bdi>, "by itself," which is what Lesson 1's unqualified definition of المتعدي required. ذَهَبْتُ بِعَلِيٍّ reaches عَلِيّ only through the preposition بِـ, so it counts as متعدٍّ only in this qualified, "in sense," way. The fifth سبب is the familiar اسْتَفْعَلَ pattern.`, list: false },
          ],
          exercise: {
            prompt: `ذَهَبْتُ بِعَلِيٍّ — "I went off with Ali" — is marked متعدٍّ معنًى, not a plain متعدٍّ. How does that differ from a plain متعدٍّ؟`,
            kind: 'mcq',
            options: ['The verb reaches its object only in the past tense', 'The verb reaches its object through a حرف جر, not بنفسه', 'The verb takes two objects', 'The verb is لازم after all'],
            correct: 1,
          },
        },
        {
          heading: 'السادس: التضمين النحوي',
          lines: [
            { html: `The sixth route adds nothing to the verb's form at all. It changes what the verb means.`, list: false },
            { box: { title: 'Definition', lines: [
              `التَّضْمِينُ النَّحْوِيُّ: أن تُشْرَبَ كَلِمَةٌ لازِمَةٌ مَعْنَى كَلِمَةٍ مُتَعَدِّيَةٍ، لِتَتَعَدَّى تَعْدِيَتَها`,
            ] } },
            { html: `<bdi>التضمين النحوي</bdi> — "grammatical infusion" — is when a لازم word is made to absorb the meaning of a متعدٍّ word, so that it takes on that word's grammar, its transitivity, along with its meaning.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿ولا تَعْزِمُوا عُقْدَةَ النِّكاحِ حَتَّى يَبْلُغَ الْكِتابُ أَجَلَهُ﴾ [البقرة: ٢٣٥]`] } },
            { html: `And do not resolve upon the marriage contract until the decreed term reaches its end. عَزَمَ does not ordinarily take a direct object — it normally needs عَلَى (عَزَمَ عَلَى) — yet here it governs عُقْدَةَ النِّكاحِ directly, because it has absorbed the sense of <bdi>نَوَى</bdi> ("intended"), which does take a direct object.`, list: false },
            { box: { title: 'Core Text', lines: [`ضُمِّنَ (تَعْزِمُوا) مَعْنَى (تَنْوُوا)، فعُدِّيَ تَعْدِيَتَهُ`] } },
            { html: `تَعْزِمُوا was made to absorb the meaning of تَنْوُوا, and so it was given تَنْوُوا's transitivity.`, list: false },
            { box: { title: 'Example', lines: [`ومنه: رَحُبَتْكُمُ الطاعَةُ، أي وَسِعَتْكُمُ الطاعَةُ`] } },
            { html: `And of this kind: "obedience was ample enough for you" — meaning "obedience encompassed you." <bdi>رَحُبَ</bdi> (to be spacious) does not ordinarily take a direct object either; here it absorbs the sense of <bdi>وَسِعَ</bdi> ("to encompass," which does), and reaches كُم (you) directly along with it.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿ولا تَعْزِمُوا عُقْدَةَ النِّكاحِ﴾ — "and do not resolve upon the marriage contract" — تَعْزِمُوا governs its object directly, though عَزَمَ normally needs عَلَى. Whose meaning has تَعْزِمُوا absorbed to explain that?`,
            kind: 'mcq',
            options: ['تَنْوُوا — "intend", which does take a direct object', 'تَبْلُغُوا', 'تَعْقِدُوا', 'تَحْذَرُوا'],
            correct: 0,
          },
        },
        {
          heading: 'السابع والثامن، والحق في المسألة',
          lines: [
            { html: `The seventh سبب is a special case of dropping a preposition.`, list: false },
            { box: { title: 'Rule', lines: [`السابع: حَذْفُ حَرْفِ الجَرِّ تَوَسُّعًا`] } },
            { html: `The seventh: dropping the حرف جر <bdi>تَوَسُّعًا</bdi> — for stylistic ease.`, list: false },
            { box: { title: 'Core Text', lines: [`كقولِهِ: تَمُرُّونَ الدِّيارَ ولَمْ تَعُوجُوا ... كَلامُكُم عَلَيَّ إذَنْ حَرامُ`] } },
            { html: `As in the line: you pass by the abodes without turning aside; your speech to me is then forbidden. The line means <bdi>تَمُرُّونَ بالدِّيارِ</bdi> — "you pass by the abodes" — but the باء has simply been dropped and the noun left in the accusative in its place.`, list: false },
            { box: { title: 'Rule', lines: [`يُسَمَّى هذا النَّصْبُ: النَّصْبُ بِنَزْعِ الخافِضِ`] } },
            { html: `That accusative, produced by dropping the preposition, has its own name: <bdi>النصب بنزع الخافض</bdi>, "the accusative from stripping away the lowering [particle]."`, list: false },
            { box: { title: 'Rule', lines: [`ويَطَّرِدُ حَذْفُهُ مع (أَنَّ) و(أَنْ)`] } },
            { html: `And dropping the preposition is regular usage — not a poetic license — before the two particles <bdi>أَنَّ</bdi> and <bdi>أَنْ</bdi>:`, list: false },
            { table: { title: 'الاطراد مع أنَّ وأنْ (Regular Usage before أنَّ and أنْ)', headers: ['الشاهد (Evidence)', 'الترجمة (Translation)', 'التقدير (Implied Reading)'], rows: [
              ['﴿شَهِدَ اللَّهُ أَنَّهُ لا إلَهَ إلاَّ هُوَ﴾ [آل عمران: ١٨]', 'Allah bears witness that there is no god but He', 'i.e. شَهِدَ اللهُ بِأَنَّهُ — with the باء restored'],
              ['﴿أَوَعَجِبْتُمْ أَنْ جَاءَكُمْ ذِكْرٌ مِنْ رَبِّكُمْ﴾ [الأعراف: ٦٣، ٦٩]', 'Or were you amazed that a reminder came to you from your Lord?', 'i.e. عَجِبْتُمْ مِنْ أَنْ جَاءَكُمْ — with مِنْ restored'],
            ] } },
            { html: `In both آيتان the preposition — بـ in the first, مِن in the second — has dropped out before أنّ/أن, and the clause each one introduces is left in the accusative in its place.`, list: false },
            { box: { title: 'Rule', lines: [`الثامن: تَحْوِيلُ اللازِمِ إلى بابِ (نَصَرَ) لِقَصْدِ المُغالَبَةِ`] } },
            { html: `The eighth: converting a لازم verb to the pattern of <bdi>نَصَرَ</bdi> for the purpose of <bdi>المُغالَبَة</bdi> — contest, outdoing someone at the action.`, list: false },
            { box: { title: 'Example', lines: [`قاعَدْتُهُ فَقَعَدْتُهُ فأنا أَقْعُدُهُ`] } },
            { html: `I vied with him in sitting, and I outdid him at it — so now I outdo him at it. This is the same المغالبة mechanism covered earlier under فَاعَلَ, now seen for what it does to transitivity: قَعَدَ (to sit) is لازم on its own, but once recast for المغالبة on the pattern of نَصَرَ, it takes ـهُ (him) as a direct object — the person being outdone.`, list: false },
            { html: `Having listed all eight, the source closes by qualifying every one of them at once.`, list: false },
            { box: { title: 'Rule', lines: [
              `والحَقُّ أنَّ تَعْدِيَةَ الفِعْلِ سَماعِيَّةٌ، فما سُمِعَتْ تَعْدِيَتُهُ بِحَرْفٍ لا يَجُوزُ تَعْدِيَتُهُ بِغَيْرِهِ، وما لم تُسْمَعْ تَعْدِيَتُهُ، لا يَجُوزُ أن يُعَدَّى بِهذه الأَسْبابِ`,
            ] } },
            { html: `And the truth of the matter is that a verb's transitivity is <bdi>سماعية</bdi> — known only from what has actually been heard in Arabic usage, not freely constructed. A verb heard taking its object with one particular حرف may not be given a different one; and a verb never heard taking an object at all may not be made transitive by any of these eight أسباب.`, list: false },
            { box: { title: 'Careful', lines: [`وبَعْضُهُم جَعَلَ زِيادَةَ الهَمْزَةِ في الثُلاثِيِّ اللازِمِ لِقَصْدِ تَعْدِيَتِهِ قِياسًا مُطَّرِدًا`] } },
            { html: `Some grammarians make a single partial exception: adding the همزة to a ثلاثي لازم verb specifically to make it transitive is treated by them as a regular, productive rule (<bdi>قياسي مطرد</bdi>) rather than something that must be individually attested for each verb.`, list: false },
            { html: `So the eight أسباب are a description of how transitivity has in fact been produced in attested Arabic — not a licence to apply them at will to any verb one chooses.`, list: false },
          ],
          exercise: {
            prompt: `A لازم verb has never been heard taking an object anywhere in attested Arabic. May you make it transitive yourself by applying one of the eight أسباب تعدية اللازم؟`,
            kind: 'mcq',
            options: ['No — تعدية الفعل is سماعية, and the أسباب describe what has been heard rather than licensing new forms', 'Yes — any of the eight may be applied', 'Yes, but only the همزة', 'Only if the verb is ثلاثي'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'What is the definition of اللازم؟',
          options: ['Its effect passes from the فاعل to a مفعول به by itself', 'Sticks to a single form', 'Passes to two مفعولين', 'Its effect does not pass from the فاعل to a مفعول به'],
          correct: 3,
        },
        {
          q: 'How many أسباب are there for making a لازم verb transitive?',
          options: ['ستة', 'عشرة', 'ثمانية', 'خمسة'],
          correct: 2,
        },
        {
          q: 'جالَسَ زَيْدٌ العُلَماءَ illustrates which سبب؟',
          options: ['زيادة ألف المفاعلة', 'الهمزة', 'التضعيف', 'التضمين'],
          correct: 0,
        },
        {
          q: 'اسْتَخْرَجَ زَيْدٌ المالَ illustrates which سبب؟',
          options: ['التضعيف', 'نزع الخافض', 'زيادة الهمزة والسين والتاء', 'زيادة حرف الجر'],
          correct: 2,
        },
        {
          q: 'What is النصب بنزع الخافض؟',
          options: ['تضمين فعل معنى فعل آخر', 'تحويل اللازم إلى باب نصر', 'حذف حرف الجر توسعًا, leaving the noun منصوبًا', 'زيادة حرف الجر'],
          correct: 2,
        },
        {
          q: 'تعدية الفعل is described as:',
          options: ['قياسية مطردة', 'واجبة', 'ممنوعة', 'سماعية'],
          correct: 3,
        },
      ],
      bank: [
        {
          title: 'قعد وخرج',
          kind: 'mcq',
          prompt: 'قَعَدَ مُحَمَّدٌ and خَرَجَ عَلِيٌّ illustrate:',
          options: ['المتعدي لاثنين', 'الجامد', 'اللازم', 'المتعدي لواحد'],
          correct: 2,
        },
        {
          title: 'أكرم زيد عمرًا',
          kind: 'mcq',
          prompt: 'أَكْرَمَ زَيدٌ عَمْرًا illustrates which سبب؟',
          options: ['ألف المفاعلة', 'زيادة حرف الجر', 'الهمزة', 'التضعيف'],
          correct: 2,
        },
        {
          title: 'الأسباب الثلاثة الأولى',
          kind: 'mcq',
          prompt: 'Of the eight أسباب تعدية اللازم, what do the first three have in common?',
          options: ['Each involves a حرف جر', 'Each adds a letter — the patterns أَفْعَلَ, فَعَّلَ and فَاعَلَ', 'Each removes a letter', 'Each changes the باب'],
          correct: 1,
        },
        {
          title: 'جالس والمفاعلة',
          kind: 'mcq',
          prompt: 'جالَسَ زَيْدٌ العُلَماءَ shows the لازم verb جَلَسَ made متعدٍّ by which سبب؟',
          options: ['التضعيف', 'الهمزة', 'زيادة ألف المفاعلة', 'زيادة حرف الجر'],
          correct: 2,
        },
        {
          title: 'متعدٍّ معنى',
          kind: 'mcq',
          prompt: 'Which of the eight أسباب produces a verb that is متعدٍّ معنًى rather than بنفسه؟',
          options: ['التضعيف', 'نزع الخافض', 'زيادة حرف الجر', 'الهمزة'],
          correct: 2,
        },
        {
          title: 'الهمزة والسين والتاء',
          kind: 'mcq',
          prompt: 'The fifth سبب names three added letters. Which وزن do they form?',
          options: ['تَفَاعَلَ', 'اسْتَفْعَلَ', 'افْتَعَلَ', 'انْفَعَلَ'],
          correct: 1,
        },
        {
          title: 'تعريف التضمين',
          kind: 'mcq',
          prompt: 'What is التضمين النحوي, as it produces transitivity?',
          options: ['A letter is added to the verb', 'The verb is moved to باب نصر', 'A لازم word is made to carry the meaning of a متعدٍّ word, and so its grammar', 'A حرف جر is dropped'],
          correct: 2,
        },
        {
          title: 'رحُبتكم الطاعة',
          kind: 'mcq',
          prompt: 'رَحُبَتْكُمُ الطاعَةُ means:',
          options: ['obedience grew narrow for you', 'you intended obedience', 'you resolved upon obedience', 'obedience had room enough for you'],
          correct: 3,
        },
        {
          title: 'صيغة التضمين',
          kind: 'mcq',
          prompt: 'Unlike the first three of the eight أسباب تعدية اللازم, which each add a letter to the verb, what does التضمين change?',
          options: ['Nothing changes', 'The verb’s وزن', 'Only the verb’s meaning, by absorbing another word’s sense', 'The verb’s حركات'],
          correct: 2,
        },
        {
          title: 'تمرُّون الديار',
          kind: 'mcq',
          prompt: 'تَمُرُّونَ الدِّيارَ is understood as تَمُرُّونَ بالدِّيارِ. What has happened?',
          options: ['The verb has moved to باب نصر', 'A حرف جر has been dropped توسعًا, leaving الديار منصوبة', 'A حرف جر has been added', 'The verb has absorbed another verb’s meaning'],
          correct: 1,
        },
        {
          title: 'اسم الظاهرة',
          kind: 'mcq',
          prompt: 'What name is given to the accusative that results from dropping a حرف جر؟',
          options: ['التضمين', 'المفعول المطلق', 'المغالبة', 'النصب بنزع الخافض'],
          correct: 3,
        },
        {
          title: 'الاطراد مع أنَّ وأنْ',
          kind: 'mcq',
          prompt: 'With which two particles is the dropping of the حرف جر described as مطَّرِد؟',
          options: ['أَنَّ وأَنْ', 'إِنَّ وإِنْ', 'أَنْ ولَنْ', 'كَيْ ولامِ التعليل'],
          correct: 0,
        },
        {
          title: 'شهد الله',
          kind: 'mcq',
          prompt: '﴿شَهِدَ اللَّهُ أَنَّهُ لا إلَهَ إلاَّ هُوَ﴾ is understood as:',
          options: ['شَهِدَ اللهُ مِنْ أَنَّهُ', 'شَهِدَ اللهُ فِي أَنَّهُ', 'شَهِدَ اللهُ بِأَنَّهُ', 'شَهِدَ اللهُ عَلى أَنَّهُ'],
          correct: 2,
        },
        {
          title: 'أوعجبتم',
          kind: 'mcq',
          prompt: '﴿أَوَعَجِبْتُمْ أَنْ جَاءَكُمْ ذِكْرٌ مِنْ رَبِّكُمْ﴾ is understood as:',
          options: ['عَجِبْتُمْ إِلى أَنْ جَاءَكُمْ', 'عَجِبْتُمْ مِنْ أَنْ جَاءَكُمْ', 'عَجِبْتُمْ بِأَنْ جَاءَكُمْ', 'عَجِبْتُمْ عَلى أَنْ جَاءَكُمْ'],
          correct: 1,
        },
        {
          title: 'قاعدته فقعدته',
          kind: 'mcq',
          prompt: 'قاعَدْتُهُ فَقَعَدْتُهُ فأنا أَقْعُدُهُ illustrates which سبب؟',
          options: ['التضمين', 'نزع الخافض', 'زيادة الهمزة', 'تحويل اللازم إلى باب نصر لقصد المغالبة'],
          correct: 3,
        },
        {
          title: 'المغالبة والباب',
          kind: 'mcq',
          prompt: 'Which باب does the لازم verb move to when المغالبة is intended?',
          options: ['باب فَتَحَ', 'باب كَرُمَ', 'باب نَصَرَ', 'باب ضَرَبَ'],
          correct: 2,
        },
        {
          title: 'قيد السماع',
          kind: 'mcq',
          prompt: 'A verb has been heard taking its object with a particular حرف. May you use a different one?',
          options: ['No — لا يجوز تعديته بغيره', 'Yes, any حرف جر will do', 'Yes, if the meaning is preserved', 'Only in poetry'],
          correct: 0,
        },
        {
          title: 'الاستثناء',
          kind: 'mcq',
          prompt: 'Which single case is reported as قياسي مطرد rather than سماعي, and on whose view?',
          options: ['The همزة on a ثلاثي لازم, on the view of بعضهم', 'التضعيف, by agreement', 'نزع الخافض, on the Kūfan view', 'التضمين, by agreement'],
          correct: 0,
        },
        {
          title: 'وظيفة الأسباب',
          kind: 'mcq',
          prompt: 'Given that تعدية is سماعية, what are the eight أسباب actually doing?',
          options: ['Defining the مفعول به', 'Describing how transitivity has in fact been produced in attested Arabic', 'Licensing new transitive forms at will', 'Listing the أوزان of the مزيد'],
          correct: 1,
        },
        {
          title: 'تمييز التضمين ونزع الخافض',
          kind: 'mcq',
          prompt: 'What separates التضمين from نزع الخافض؟',
          options: ['نزع الخافض lends the verb another meaning', 'التضمين adds a letter to the verb', 'They are two names for the same thing', 'التضمين lends the verb another verb’s meaning; نزع الخافض simply drops a حرف جر'],
          correct: 3,
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'أسباب لزوم المتعدي',
      subtitle: 'Five Routes Back — how a verb that takes an object comes to stop taking one',
      concepts: [
        {
          heading: 'التضمين',
          lines: [
            { html: `The traffic runs both ways. This lesson covers the five <bdi>أسباب لزوم المتعدي</bdi> — five routes that take a verb transitive by origin and leave it لازم instead.`, list: false },
            { box: { title: 'Rule', lines: [
              `وأَسْبابُ لُزُومِ الفِعْلِ المُتَعَدِّي أَصالَةً خَمْسَةٌ`,
              `هذه الأسبابُ عَكْسُ ما تَقَدَّمَ، فإنَّها تَجْعَلُ الفِعْلَ المُتَعَدِّي لازِمًا`,
            ] } },
            { html: `And the causes by which a verb متعدٍّ by origin becomes لازم are five. These أسباب are the reverse of what preceded them — they make a متعدٍّ verb لازم, where the previous lesson's eight made a لازم verb متعدٍّ.`, list: false },
            { box: { title: 'Definition', lines: [
              `الأوَّل: التَّضْمِينُ، وهو أن تُشْرَبَ كَلِمَةٌ مُتَعَدِّيَةٌ مَعْنَى كَلِمَةٍ لازِمَةٍ، لِتَصِيرَ مِثْلَها`,
            ] } },
            { html: `The first: <bdi>التضمين</bdi>, the mirror image of the sixth سبب from the previous lesson. Here a متعدٍّ word is made to absorb the meaning of a لازم word, so that it becomes لازم like it.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿فَلْيَحْذَرِ الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ﴾ [النور: ٦٣]`] } },
            { html: `So let those beware who dissent from his order. <bdi>خالَفَ</bdi> would ordinarily take its object directly; here it is followed by <bdi>عَنْ</bdi> instead, which is the tell.`, list: false },
            { box: { title: 'Rule', lines: [`ضُمِّنَ يُخالِفُ مَعْنَى يَخْرُجُ، فصارَ لازِمًا مِثْلَهُ`, `والشاهِدُ دُخُولُ (عَنْ) بَعْدَ الفِعْلِ يُخالِفُ`] } },
            { html: `يُخالِفُ was made to absorb the meaning of <bdi>يَخْرُجُ</bdi> ("to go out from"), and so became لازم like it, reaching its complement only through عَنْ. The شاهد — the evidence — is exactly that: عَنْ appearing after يُخالِفُ, a preposition it would not need if it still meant simply "to oppose."`, list: false },
          ],
          exercise: {
            prompt: `In ﴿يُخَالِفُونَ عَنْ أَمْرِهِ﴾ — "who dissent from his order" — what is the شاهد that التضمين has occurred, turning the ordinarily direct-object verb خالَفَ into one needing a preposition?`,
            kind: 'mcq',
            options: ['The preposition عَنْ following يُخالِفُ, which would otherwise take its object directly', 'The plural form of the verb', 'The word أَمْرِهِ being مضافًا', 'The لام in فَلْيَحْذَرِ'],
            correct: 0,
          },
        },
        {
          heading: 'التحويل إلى فَعُلَ',
          lines: [
            { html: `The second سبب moves the verb to a whole different وزن.`, list: false },
            { box: { title: 'Rule', lines: [
              `الثاني: تَحْوِيلُ الفِعْلِ المُتَعَدِّي إلى (فَعُلَ) بِضَمِّ العَيْنِ، لِقَصْدِ التَعَجُّبِ والمُبالَغَةِ`,
            ] } },
            { html: `The second: converting the متعدٍّ verb to <bdi>فَعُلَ</bdi>, with a ضمة on the عين, for the purpose of <bdi>التعجب</bdi> (exclaiming wonder) and <bdi>المبالغة</bdi> (emphasis).`, list: false },
            { box: { title: 'Example', lines: [`ضَرُبَ زَيدٌ: أي ما أَضْرَبَهُ`] } },
            { html: `ضَرُبَ زَيدٌ — meaning "how capable he is of striking!" <bdi>ضَرَبَ</bdi> (he struck) takes a direct object; recast as <bdi>ضَرُبَ</bdi> on الباب الخامس, it takes none, because it no longer reports a striking — it exclaims at the man's capacity for it.`, list: false },
            { html: `This is the same operation covered earlier under الباب الخامس, where فَعُلَ was described as the باب of <bdi>الأوصاف الخِلْقِيَّة</bdi> (innate qualities), and a verb moved there for التعجب was said to <bdi>تَنْسَلِخُ عن الحَدَثِ</bdi> — "shed its event." That shedding is exactly why transitivity goes with it. An object is something the event lands on; once the form stops naming an event and starts naming a quality of the subject instead, there is nothing left for an object to attach to. So losing transitivity here is not a separate rule — it follows automatically from what moving to فَعُلَ already does to the verb's meaning.`, list: false },
          ],
          exercise: {
            prompt: `ضَرَبَ is متعدٍّ but ضَرُبَ (recast on الباب الخامس for التعجب) is لازم. Why does the shift to فَعُلَ cost the verb its object?`,
            kind: 'mcq',
            options: ['The form stops naming an event and names a quality of the subject, leaving nothing for an object to attach to', 'The ḍamma blocks the accusative', 'فَعُلَ verbs have no مصدر', 'The object is merely omitted, not lost'],
            correct: 0,
          },
        },
        {
          heading: 'صيرورته مطاوعًا، وضعف العامل',
          lines: [
            { html: `Two more of the five أسباب لزوم المتعدي, neither one changing the verb's وزن the way the second did.`, list: false },
            { table: { headers: ['#', 'السبب (Cause)', 'الشاهد أو المثال (Evidence or Example)', 'الترجمة (Translation)'], rows: [
              ['٣', 'صَيْرُورَتُهُ مُطاوِعًا — its becoming a مطاوع', 'كَسَرْتُهُ فانْكَسَرَ', 'I broke it, and it broke'],
              ['٤', 'ضَعْفُ العامِلِ بِتَأْخِيرِهِ — the weakening of the عامل by its being delayed', '﴿إِنْ كُنْتُمْ لِلرُّؤْيَا تَعْبُرُونَ﴾ [يوسف: ٤٣]', 'if you are able to interpret visions'],
            ] } },
            { html: `The third is the <bdi>مطاوعة</bdi> covered earlier under انْفَعَلَ: <bdi>كَسَرْتُهُ</bdi> (I broke it) is متعدٍّ, but <bdi>انْكَسَرَ</bdi> (it broke, it became broken) has no object of its own — its فاعل, the thing that broke, is the very thing that received the breaking. A verb that names the effect landing on its own فاعل has nothing left over for a separate مفعول به.`, list: false },
            { html: `The fourth is subtler. <bdi>عَبَرَ الرُّؤْيَا</bdi> (to interpret a vision) would take its object directly, but in the ayah the object الرؤيا has been fronted before the verb, and the verb pushed to the end of the clause. That reordering weakens the verb's governing power, and a لام is supplied to carry the noun instead — the evidence being exactly that added لام, on <bdi>لِلرُّؤْيَا</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿إِنْ كُنْتُمْ لِلرُّؤْيَا تَعْبُرُونَ﴾ — "if you are able to interpret visions" — عَبَرَ would ordinarily reach الرؤيا directly. Why is a لام supplied before الرؤيا here instead?`,
            kind: 'mcq',
            options: ['The لام is required by إِنْ', 'The verb has been pushed after its object, weakening its government', 'الرؤيا is a مصدر', 'The verb has absorbed another verb’s meaning'],
            correct: 1,
          },
        },
        {
          heading: 'الضرورة الشعرية',
          lines: [
            { html: `The fifth and last سبب is different in kind from the other four — it belongs to poetry alone.`, list: false },
            { box: { title: 'Rule', lines: [`الخامس: الضَّرُورَةُ (الشِعْرِيَّة)`] } },
            { html: `The fifth: <bdi>الضرورة الشعرية</bdi> — metrical necessity.`, list: false },
            { box: { title: 'Core Text', lines: [`كقولِهِ: تَبَلَتْ فُؤادَكَ في المَنامِ خَرِيدَةٌ ... تَسْقِي الضَّجِيعَ بِبارِدٍ بَسَّامِ`] } },
            { html: `As in the line: a bashful, wide-eyed girl captivated your heart in a dream — she gives her sleeping companion to drink from something cool and smiling.`, list: false },
            { box: { title: 'Meaning', lines: [`أي تَسْقِي رِيقًا بارِدًا`] } },
            { html: `Meaning: she gives cool saliva to drink. <bdi>تَسْقِي</bdi> (she gives to drink) would take its object — رِيقًا (saliva) — directly; the باء attached to بِبارِدٍ appears only because the poem's metre required an extra syllable there.`, list: false },
            { html: `This last سبب differs in kind from the other four: it is not a fact about the Arabic language as spoken and heard, but a licence a poet takes under metrical pressure, and nothing follows from it for ordinary usage — no prose speaker may reach for it to justify a construction.`, list: false },
          ],
          exercise: {
            prompt: `Of the five أسباب لزوم المتعدي, how does الضرورة الشعرية differ from the other four?`,
            kind: 'mcq',
            options: ['It is a licence taken under metrical pressure, not a fact about ordinary usage', 'It applies only to لازم verbs', 'It applies only in the Qur’an', 'It produces a permanent change in the verb'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'How many أسباب are there for a متعدٍّ verb becoming لازم؟',
          options: ['ثمانية', 'ستة', 'ثلاثة', 'خمسة'],
          correct: 3,
        },
        {
          q: 'In ﴿يُخَالِفُونَ عَنْ أَمْرِهِ﴾, whose meaning has يُخالِفُ absorbed?',
          options: ['يَعْصِي', 'يَبْتَعِدُ', 'يَخْرُجُ', 'يَحْذَرُ'],
          correct: 2,
        },
        {
          q: 'ضَرُبَ زَيدٌ means:',
          options: ['he struck him repeatedly', 'he was struck a blow', 'he became one who strikes', 'an expression of تعجب — "how well he strikes!"'],
          correct: 3,
        },
        {
          q: 'كَسَرْتُهُ فانْكَسَرَ illustrates which سبب of لزوم؟',
          options: ['التضمين', 'ضعف العامل بتأخيره', 'الضرورة', 'صيرورته مطاوعًا'],
          correct: 3,
        },
        {
          q: 'What is the شاهد in ﴿إِنْ كُنْتُمْ لِلرُّؤْيَا تَعْبُرُونَ﴾؟',
          options: ['ضم العين', 'زيادة اللام', 'دخول عن', 'حذف حرف الجر'],
          correct: 1,
        },
        {
          q: 'The verse تَبَلَتْ فُؤادَكَ في المَنامِ خَرِيدَةٌ illustrates which سبب؟',
          options: ['الضرورة الشعرية', 'التضمين', 'المطاوعة', 'ضعف العامل'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'عكس الأسباب',
          kind: 'mcq',
          prompt: 'How do the five أسباب لزوم المتعدي relate to the eight أسباب تعدية اللازم covered in the previous lesson?',
          options: ['They run in the opposite direction — making a متعدٍّ verb لازم', 'They are the same eight, restated', 'They apply only to لازم verbs', 'They apply only to رباعي verbs'],
          correct: 0,
        },
        {
          title: 'التضمين في الاتجاهين',
          kind: 'mcq',
          prompt: 'التضمين appears both among the أسباب تعدية اللازم and among the أسباب لزوم المتعدي. What differs between the two uses?',
          options: ['One applies to nouns', 'One is قياسي and the other سماعي', 'Which way the borrowing runs — لازم taking a متعدٍّ meaning, or the reverse', 'One is نحوي and the other صرفي'],
          correct: 2,
        },
        {
          title: 'معنى يخالف بعد التضمين',
          kind: 'mcq',
          prompt: 'In ﴿فَلْيَحْذَرِ الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ﴾, يُخالِفُ has absorbed the meaning of which verb?',
          options: ['يَعْصِي', 'يَخْرُجُ', 'يَبْتَعِدُ', 'يَتَجاوَزُ'],
          correct: 1,
        },
        {
          title: 'خالف بلا تضمين',
          kind: 'mcq',
          prompt: 'Without التضمين, how would خالَفَ reach its object?',
          options: ['Directly, with no حرف جر', 'With عَنْ', 'With مِنْ', 'It would take no object at all'],
          correct: 0,
        },
        {
          title: 'دور حرف الجر',
          kind: 'mcq',
          prompt: 'In cases of التضمين, what is the usual tell that it has occurred?',
          options: ['A letter is added to the verb', 'The object is dropped entirely', 'A preposition appears that the verb does not ordinarily take', 'The verb changes باب'],
          correct: 2,
        },
        {
          title: 'ضم العين',
          kind: 'mcq',
          prompt: 'The second سبب moves the verb to فَعُلَ. Which vowel is on the عين؟',
          options: ['سكون', 'ضمة', 'فتحة', 'كسرة'],
          correct: 1,
        },
        {
          title: 'غرض التحويل',
          kind: 'mcq',
          prompt: 'For what purpose is a متعدٍّ verb recast on فَعُلَ؟',
          options: ['الطلب', 'التعجب والمبالغة', 'المطاوعة', 'التعدية'],
          correct: 1,
        },
        {
          title: 'الانسلاخ عن الحدث',
          kind: 'mcq',
          prompt: 'A verb moved to فَعُلَ for التعجب is said to shed its حدث. What follows for its object?',
          options: ['The object becomes مرفوعًا', 'The verb takes two objects instead', 'Nothing follows', 'There is no event left for an object to attach to, so the verb becomes لازم'],
          correct: 3,
        },
        {
          title: 'الباب الخامس',
          kind: 'mcq',
          prompt: 'Which باب is فَعُلَ بضم العين in the ماضي والمضارع؟',
          options: ['السادس', 'الخامس', 'الأول', 'الرابع'],
          correct: 1,
        },
        {
          title: 'المطاوعة واللزوم',
          kind: 'mcq',
          prompt: 'Why does a verb become لازم when it becomes مطاوع؟',
          options: ['It sheds its حدث', 'Its subject is the thing acted upon, so there is nothing further for it to act on', 'Its object is merely omitted', 'Its وزن forbids an accusative'],
          correct: 1,
        },
        {
          title: 'انكسر',
          kind: 'mcq',
          prompt: 'Which وزن does انْكَسَرَ carry, and what is its single meaning?',
          options: ['افْتَعَلَ — الاتخاذ', 'افْعَلَّ — قوة اللون', 'تَفَعَّلَ — التكلف', 'انْفَعَلَ — المطاوعة'],
          correct: 3,
        },
        {
          title: 'تأخير العامل',
          kind: 'mcq',
          prompt: 'What weakens the verb in ﴿إِنْ كُنْتُمْ لِلرُّؤْيَا تَعْبُرُونَ﴾؟',
          options: ['It is مجزوم', 'It has been placed after the noun it governs', 'It is in the مضارع', 'It follows كُنْتُمْ'],
          correct: 1,
        },
        {
          title: 'اللام العائضة',
          kind: 'mcq',
          prompt: 'In ﴿إِنْ كُنْتُمْ لِلرُّؤْيَا تَعْبُرُونَ﴾, what compensates for the verb’s weakened government after being pushed to the end?',
          options: ['A دون is inserted', 'A لام is supplied to carry the noun', 'The noun is made مرفوعًا', 'A second فعل is added'],
          correct: 1,
        },
        {
          title: 'عبر الرؤيا',
          kind: 'mcq',
          prompt: 'Without the fronting, how would عَبَرَ reach الرؤيا؟',
          options: ['Directly, as عَبَرَ الرُّؤْيَا', 'With a لام', 'With a باء', 'With عَنْ'],
          correct: 0,
        },
        {
          title: 'تسقي الضجيع',
          kind: 'mcq',
          prompt: 'تَسْقِي الضَّجِيعَ بِبارِدٍ بَسَّامِ is understood as:',
          options: ['تَسْقِي بِالماءِ البارِدِ', 'تَسْقِي مِنْ بارِدٍ', 'تَسْقِي على بارِدٍ', 'تَسْقِي رِيقًا بارِدًا'],
          correct: 3,
        },
        {
          title: 'الباء في البيت',
          kind: 'mcq',
          prompt: 'Why does the باء appear in تَسْقِي الضَّجِيعَ بِبارِدٍ؟',
          options: ['تَسْقِي always takes a باء', 'The verb has absorbed another meaning', 'The object was fronted', 'The metre required it — it is a ضرورة شعرية'],
          correct: 3,
        },
        {
          title: 'حجية الضرورة',
          kind: 'mcq',
          prompt: 'What can be inferred about ordinary usage from a ضرورة شعرية؟',
          options: ['Nothing — it is a licence, not a fact about the language', 'That the construction is standard', 'That the verb is permanently لازم', 'That the verb is جامد'],
          correct: 0,
        },
        {
          title: 'معنى ضَرُبَ',
          kind: 'mcq',
          prompt: 'ضَرُبَ زَيدٌ (recast on فَعُلَ) means:',
          options: ['He struck someone', 'He was struck', 'ما أَضْرَبَهُ — how capable he is of striking', 'He intends to strike'],
          correct: 2,
        },
        {
          title: 'اتجاها التقسيم',
          kind: 'mcq',
          prompt: 'Taking the أسباب تعدية اللازم and the أسباب لزوم المتعدي together, how many أسباب are given in all across the two lessons?',
          options: ['خمسة', 'عشرة', 'ثلاثة عشر — ثمانية للتعدية وخمسة للزوم', 'ثمانية'],
          correct: 2,
        },
        {
          title: 'تصنيف الأسباب',
          kind: 'mcq',
          prompt: 'Of the five أسباب of لزوم, which one is not a fact about the language at all?',
          options: ['الضرورة الشعرية', 'التضمين', 'المطاوعة', 'ضعف العامل بتأخيره'],
          correct: 0,
        },
      ],
    },
  ],
};

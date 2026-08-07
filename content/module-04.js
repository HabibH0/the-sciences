// Module 04 — حروف الجر (The جار Letters)
//
// Content is adapted from a bilingual Anki deck
// (النَحْوُ__2 الْعَامِلِ وَغَيْرِ الْعَامِلِ__2 الْحَرْفِ__1 الْحَرْفِ الْعَامِلِ__1 الحرف الجر.apkg,
// 129 notes) prepared for this conversion. Definitions and examples are kept
// faithful to the source notes. Concept bodies are short by design (a
// sentence or two, not teaching prose); quiz/bank question text is English
// with Arabic grammatical terms left in Arabic.
//
// The source deck covers حروف الجر (§1 of الحرف العامل, itself §2 of
// الحرف, itself §2 of العامل وغير العامل) — its three أضرب (أصلي، شبيه
// بالزائد، زائد), the thirteen أصلية حروف one at a time, أحرف القسم، مذ
// ومنذ، حذف حرف الجر، and تعدد المعمول/التضمين. The other حروف العاملة
// (إلى الفعل) and حروف غير العاملة are covered in later modules.

export default {
  id: '04',
  title: 'حروف الجر',
  heading: 'العامل وغير العامل',
  subheading: 'الحرف العامل',
  blurb: 'حروف الجر: the thirteen prepositions, their core meanings, and when one is dropped or added only for emphasis.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'أضرب حروف الجر',
      subtitle: 'Foundations — عامل حروف that govern الاسم and الفعل, and the three أضرب of حروف الجر',
      sourceRef: 'p. 41',
      concepts: [
        {
          heading: 'الحروف العاملة: في الاسم وفي الفعل',
          lines: [
            { html: `<bdi>الْحُرُوفُ الْعَامِلَة</bdi> split into two types by what they govern: حروف that عمل في <bdi>الِاسْم</bdi>, and حروف that عمل في <bdi>الْفِعْل</bdi>.`, list: false },
            { html: `The first type further divides into four categories by what it does to its اسم:`, list: false },
            { table: { headers: ['Category', 'Effect on اسم / خبر'], rows: [
              ['حُرُوفُ الْجَرّ', 'puts a single اسم in جَرّ'],
              ['إِلَّا', 'puts a single اسم in نَصْب'],
              ['الْحُرُوفُ الْمُشَبَّهَةُ بِالْفِعْل (and لَا لِنَفْيِ الْجِنْس)', 'اسم in نصب, خَبَر in رَفْع'],
              ['الْحُرُوفُ الْمُشَبَّهَةُ بِلَيْس', 'اسم in رفع, خبر in نصب'],
            ] } },
            { html: `This module is built entirely on the first of these four — حروف الجر.`, list: false },
          ],
          exercise: {
            prompt: `Among the four categories of حروف تعمل في الاسم, which one is this whole module built around؟`,
            kind: 'mcq',
            options: ['حروف الجر', 'إلا', 'الحروف المشبهة بالفعل', 'الحروف المشبهة بليس'],
            correct: 0,
          },
        },
        {
          heading: 'أضرب حروف الجر الثلاثة',
          lines: [
            { html: `حروف الجر themselves fall into three <bdi>أَضْرُب</bdi>:`, list: false },
            { table: { headers: ['ضرب', 'Definition'], rows: [
              ['حَرْفُ الْجَرِّ الْأَصْلِيّ', 'carries a specific meaning (مَعْنًى خَاصّ), and with its مَجْرُور occupies a مَحَلّ as the مَعْمُول of a فِعْل or شِبْهِ الْفِعْل'],
              ['حَرْفُ الْجَرِّ الشَّبِيهُ بِالزَّائِد', 'also carries a specific meaning, but with its مجرور it is NOT the معمول of a فعل or شبه الفعل'],
              ['حَرْفُ الْجَرِّ الزَّائِد (also حَرْفُ صِلَة)', 'carries no meaning beyond تَأْكِيد (emphasis); like الشبيه بالزائد, not a معمول either'],
            ] } },
          ],
          exercise: {
            prompt: `What distinguishes حرف الجر الأصلي from the other two أضرب؟`,
            kind: 'mcq',
            options: ['Its جار ومجرور is a معمول occupying a محل governed by a فعل or شبه الفعل', 'It conveys no meaning at all', 'Its مجرور must always be a ضمير', 'It never takes a مجرور'],
            correct: 0,
          },
        },
        {
          heading: 'حرف صلة، والتعلّق',
          lines: [
            { html: `<bdi>حَرْفُ صِلَة</bdi> is the alternate name for حرف الجر الزائد.`, list: false },
            { html: `Because حرف الجر الأصلي's جار ومجرور is a معمول — it occupies a محل governed by a فعل or شبه الفعل — its meaning must always relate back to that governing word; this relationship is called <bdi>التَّعَلُّق</bdi>.`, list: false },
            { html: `الشبيه بالزائد and الزائد need no تعلق at all, since neither is ever a معمول.`, list: false },
          ],
          exercise: {
            prompt: `Why must the جار والمجرور of a حرف الجر الأصلي "attach" (تعلّق) to something؟`,
            kind: 'mcq',
            options: ['Because it is a معمول occupying a محل governed by a فعل or شبه الفعل, so its meaning always relates back to that governor', 'Because Arabic grammar requires every حرف to precede a فعل', 'Because التعلق only applies to الحروف الزائدة', "It doesn't need to attach — attachment is optional"],
            correct: 0,
          },
        },
        {
          heading: 'حروف الجر الأصلية الثلاثة عشر',
          lines: [
            { html: `The thirteen <bdi>حُرُوفُ الْجَرِّ الْأَصْلِيَّة</bdi> are:`, list: false },
            { html: `<bdi>الْبَاء، مِنْ، إِلَى، عَنْ، عَلَى، اللَّام، فِي، الْكَاف، حَتَّى، وَاوُ الْقَسَم، تَاءُ الْقَسَم، مُذْ، مُنْذُ</bdi>`, list: true, bullet: true },
            { html: `Every lesson from here on works through this list, group by group.`, list: false },
          ],
          exercise: {
            prompt: `How many حروف جر أصلية are there؟`,
            kind: 'mcq',
            options: ['ثلاثة عشر', 'أحد عشر', 'عشرة', 'خمسة عشر'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'Into how many أقسام do حروف تعمل في الاسم divide؟',
          options: ['أربعة', 'اثنان', 'ثلاثة', 'خمسة'],
          correct: 0,
        },
        {
          q: 'Which of the four categories of حروف تعمل في الاسم puts a single اسم in نصب؟',
          options: ['إلا', 'حروف الجر', 'الحروف المشبهة بالفعل', 'الحروف المشبهة بليس'],
          correct: 0,
        },
        {
          q: 'حرف الجر الأصلي is defined as a حرف that:',
          options: ['carries a معنى خاص and, with its مجرور, is a معمول of a فعل or شبه الفعل', 'carries no meaning beyond التوكيد', 'carries a معنى خاص but is never a معمول', 'only ever precedes a ضمير'],
          correct: 0,
        },
        {
          q: 'حرف الجر الشبيه بالزائد differs from حرف الجر الزائد in that it:',
          options: ['carries a specific meaning, while الزائد conveys only توكيد', 'is always a معمول, while الزائد never is', 'never takes a مجرور', 'is one of the thirteen أصلية'],
          correct: 0,
        },
        {
          q: 'What is the alternative name for حرف الجر الزائد؟',
          options: ['حرف صلة', 'حرف عطف', 'حرف تنبيه', 'حرف جواب'],
          correct: 0,
        },
        {
          q: 'How many حروف جر أصلية are there؟',
          options: ['ثلاثة عشر', 'أحد عشر', 'عشرة', 'خمسة عشر'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'أقسام العاملة',
          kind: 'mcq',
          prompt: 'What does الحرف العامل govern؟',
          options: ['الاسم or الفعل', 'الاسم only, never الفعل', 'الفعل only, never الاسم', 'Neither — عامل حروف govern nothing'],
          correct: 0,
        },
        {
          title: 'حروف تجر اسما واحدا',
          kind: 'mcq',
          prompt: 'Which category of حروف تعمل في الاسم puts a single اسم in جر؟',
          options: ['حروف الجر', 'إلا', 'الحروف المشبهة بالفعل', 'الحروف المشبهة بليس'],
          correct: 0,
        },
        {
          title: 'إلا في الاستثناء',
          kind: 'mcq',
          prompt: 'Among the four categories of حروف تعمل في الاسم, إلا puts its اسم in:',
          options: ['نصب', 'جر', 'رفع', 'لا شيء'],
          correct: 0,
        },
        {
          title: 'الحروف المشبهة بالفعل',
          kind: 'mcq',
          prompt: 'الحروف المشبهة بالفعل (and لا لنفي الجنس) put the اسم in نصب and the خبر in:',
          options: ['رفع', 'نصب', 'جر', 'لا خبر لها'],
          correct: 0,
        },
        {
          title: 'الحروف المشبهة بليس',
          kind: 'mcq',
          prompt: 'الحروف المشبهة بليس put the اسم in رفع and the خبر in:',
          options: ['نصب', 'رفع', 'جر', 'لا تعمل في الخبر'],
          correct: 0,
        },
        {
          title: 'تعريف الأصلي',
          kind: 'mcq',
          prompt: 'A حرف whose جار ومجرور occupies a محل as معمول of a فعل or شبه الفعل is called:',
          options: ['حرف الجر الأصلي', 'حرف الجر الزائد', 'حرف الجر الشبيه بالزائد', 'حرف عطف'],
          correct: 0,
        },
        {
          title: 'تعريف الشبيه بالزائد',
          kind: 'mcq',
          prompt: 'حرف الجر الشبيه بالزائد carries a specific meaning, but unlike الأصلي, its جار ومجرور:',
          options: ['is not a معمول of a فعل or شبه فعل', 'is always a معمول of a فعل', 'must be omitted', 'has no مجرور at all'],
          correct: 0,
        },
        {
          title: 'تعريف الزائد',
          kind: 'mcq',
          prompt: 'حرف الجر الزائد conveys no meaning beyond:',
          options: ['التوكيد', 'التبعيض', 'التشبيه', 'الظرفية'],
          correct: 0,
        },
        {
          title: 'حرف صلة',
          kind: 'mcq',
          prompt: 'حرف صلة is another name for:',
          options: ['حرف الجر الزائد', 'حرف الجر الأصلي', 'حرف الجر الشبيه بالزائد', 'حرف القسم'],
          correct: 0,
        },
        {
          title: 'عدد الأصلية',
          kind: 'mcq',
          prompt: 'How many حروف جر أصلية exist in total؟',
          options: ['ثلاثة عشر', 'أحد عشر', 'عشرة', 'خمسة عشر'],
          correct: 0,
        },
        {
          title: 'من الأصلية؟ (١)',
          kind: 'mcq',
          prompt: 'Which of these is one of the thirteen حروف الجر الأصلية؟',
          options: ['اللام', 'لن', 'قد', 'لو'],
          correct: 0,
        },
        {
          title: 'من الأصلية؟ (٢)',
          kind: 'mcq',
          prompt: 'Which of these is NOT one of the thirteen حروف الجر الأصلية؟',
          options: ['هل', 'مذ', 'منذ', 'حتى'],
          correct: 0,
        },
        {
          title: 'التعلق',
          kind: 'mcq',
          prompt: "Why must a حرف الجر الأصلي's جار ومجرور تعلّق (attach) to something؟",
          options: ['Because it is a معمول occupying a محل governed by a فعل or شبه الفعل', 'Because every حرف must precede a فعل', 'Because التعلق is only for حروف زائدة', 'There is no grammatical reason'],
          correct: 0,
        },
        {
          title: 'من يحتاج تعلقا؟',
          kind: 'mcq',
          prompt: 'التعلق (needing to attach to a governing فعل or شبه الفعل) applies to which ضرب؟',
          options: ['حرف الجر الأصلي فقط', 'الأضرب الثلاثة كلها', 'حرف الجر الزائد فقط', 'لا شيء منها'],
          correct: 0,
        },
        {
          title: 'محور الوحدة',
          kind: 'mcq',
          prompt: 'This module is built around which one of the four categories of حروف تعمل في الاسم؟',
          options: ['حروف الجر', 'إلا', 'الحروف المشبهة بالفعل', 'الحروف المشبهة بليس'],
          correct: 0,
        },
        {
          title: 'الأضرب الثلاثة',
          kind: 'mcq',
          prompt: 'حروف الجر themselves divide, by their عمل, into:',
          options: ['أصلي، شبيه بالزائد، وزائد', 'قياسي وسماعي', 'مذكر ومؤنث', 'مفرد ومركب'],
          correct: 0,
        },
        {
          title: 'مثال حرف مشبه بالفعل',
          kind: 'mcq',
          prompt: 'إنَّ, as an example of الحروف المشبهة بالفعل, puts its اسم in نصب and its خبر in:',
          options: ['رفع', 'نصب', 'جر', 'لا تعمل'],
          correct: 0,
        },
        {
          title: 'مثال حرف مشبه بليس',
          kind: 'mcq',
          prompt: 'ليس, as an example of الحروف المشبهة بليس, puts its اسم in رفع and its خبر in:',
          options: ['نصب', 'رفع', 'جر', 'لا تعمل'],
          correct: 0,
        },
        {
          title: 'الفرق الجوهري في المعمولية',
          kind: 'mcq',
          prompt: 'What single fact makes حرف الجر الأصلي different in kind from the other two أضرب — not just in how much meaning it carries؟',
          options: ['Only it is ever a معمول of a فعل or شبه فعل', 'Only it can be omitted', 'Only it takes a مجرور', 'Only it is one of the thirteen أصلية'],
          correct: 0,
        },
        {
          title: 'وجه الشبه بين الشبيه بالزائد والزائد',
          kind: 'mcq',
          prompt: 'What do حرف الجر الشبيه بالزائد and حرف الجر الزائد have in common؟',
          options: ['Neither is a معمول of a فعل or شبه فعل', 'Both convey no meaning at all', 'Both are among the thirteen أصلية', 'Both require تعلق'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿بِسْمِ اللَّهِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify what الباء does to its اسم here.',
          sentence: 'بِسْمِ اللَّهِ',
          translation: 'In the name of Allah.',
          cells: ['بِسْمِ', 'اللَّهِ'],
          rows: [
            { position: 'above', label: 'حروف الجر', labels: [
              { start: 0, end: 1, role: 'تجر اسمًا واحدًا' },
            ] },
          ],
          distractors: ['تنصب اسمًا واحدًا', 'ترفع اسمًا وتنصب خبرًا'],
        },
        {
          title: 'تركيب: قَامَ الْقَوْمُ إِلَّا زَيْدًا',
          kind: 'tarkeeb',
          instruction: 'Identify what إلا does to the اسم after it here.',
          sentence: 'قَامَ الْقَوْمُ إِلَّا زَيْدًا',
          translation: 'The people stood, except Zayd.',
          cells: ['قَامَ', 'الْقَوْمُ', 'إِلَّا', 'زَيْدًا'],
          rows: [
            { position: 'above', label: 'إلا', labels: [
              { start: 3, end: 3, role: 'تنصب اسمًا واحدًا' },
            ] },
          ],
          distractors: ['تجر اسمًا واحدًا', 'ترفع اسمًا وتنصب خبرًا'],
        },
        {
          title: 'تركيب: ﴿إِنَّ اللَّهَ غَفُورٌ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify اسم إنّ and خبرها, and their إعراب.',
          sentence: 'إِنَّ اللَّهَ غَفُورٌ',
          translation: 'Indeed, Allah is Forgiving.',
          cells: ['إِنَّ', 'اللَّهَ', 'غَفُورٌ'],
          rows: [
            { position: 'above', label: 'الحروف المشبهة بالفعل', labels: [
              { start: 1, end: 1, role: 'اسمها، منصوب' },
              { start: 2, end: 2, role: 'خبرها، مرفوع' },
            ] },
          ],
          distractors: ['مرفوع', 'منصوب'],
        },
        {
          title: 'تركيب: لَيْسَ الطَّالِبُ كَسْلَانَ',
          kind: 'tarkeeb',
          instruction: 'Identify اسم ليس and خبرها, and their إعراب.',
          sentence: 'لَيْسَ الطَّالِبُ كَسْلَانَ',
          translation: 'The student is not lazy.',
          cells: ['لَيْسَ', 'الطَّالِبُ', 'كَسْلَانَ'],
          rows: [
            { position: 'above', label: 'الحروف المشبهة بليس', labels: [
              { start: 1, end: 1, role: 'اسمها، مرفوع' },
              { start: 2, end: 2, role: 'خبرها، منصوب' },
            ] },
          ],
          distractors: ['مرفوع', 'منصوب'],
        },
      ],
    },

    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'الباء ومِن',
      subtitle: 'The Two Most Frequent حروف — معنى ووظائف الباء ومِن across the Quran',
      sourceRef: 'pp. 42–45',
      concepts: [
        {
          heading: 'الباء: معناها الأصلي ووظائفها',
          lines: [
            { html: `The core meaning of <bdi>الْبَاء</bdi> is <bdi>الْإِلْصَاق</bdi> — attachment, the joining of one thing to another.`, list: false },
            { html: `With its مجرور it can take on nine different وظائف (as a <bdi>شِبْهُ جُمْلَة</bdi>):`, list: false },
            { html: `<bdi>الْمَفْعُولُ الْمُطْلَق</bdi>، <bdi>الْمَفْعُولُ بِهِ</bdi>، <bdi>الْمَفْعُولُ فِيهِ</bdi> (مكانا أو زمانا)، <bdi>الْمَفْعُولُ لَهُ</bdi>، <bdi>الْمَفْعُولُ مَعَهُ</bdi>، <bdi>الْحَال</bdi>، <bdi>التَّمْيِيز</bdi>، <bdi>الْآلَة</bdi>، <bdi>الْعِوَض</bdi>`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `الإلصاق (attachment/adhesion) is the core meaning of which حرف جر؟`,
            kind: 'mcq',
            options: ['الباء', 'من', 'في', 'اللام'],
            correct: 0,
          },
        },
        {
          heading: 'الباء: أمثلة من القرآن',
          lines: [
            { html: `A few of الباء's nine وظائف, worked through:`, list: false },
            { table: { headers: ['Verse', 'Phrase', 'وظيفة'], rows: [
              ['﴿خُذِ الْكِتَابَ بِقُوَّةٍ﴾', 'بِقُوَّةٍ', 'الْمَفْعُولُ الْمُطْلَق — "take it with a strong taking"'],
              ['﴿فَلَمَّا ذَهَبُوا بِهِ﴾', 'بِهِ', 'الْمَفْعُولُ بِهِ (غَيْرُ صَرِيح)'],
              ['﴿وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ﴾', 'بِبَدْرٍ', 'الْمَفْعُولُ فِيهِ — لِلْمَكَان'],
              ['﴿ادْخُلُوهَا بِسَلَامٍ آمِنِينَ﴾', 'بِسَلَامٍ', 'الْحَال — "enter it in a state of peace"'],
            ] } },
          ],
          exercise: {
            prompt: `In ﴿خذ الكتاب بقوة﴾, بقوة functions as:`,
            kind: 'mcq',
            options: ['المفعول المطلق', 'المفعول به', 'الحال', 'التمييز'],
            correct: 0,
          },
        },
        {
          heading: 'مِن: معناها الأصلي ووظائفها',
          lines: [
            { html: `The core meaning of <bdi>مِنْ</bdi> is <bdi>ابْتِدَاءُ الْغَايَة</bdi> — the starting point of an extent.`, list: false },
            { html: `With its مجرور it can take six of the same وظائف الباء takes:`, list: false },
            { html: `<bdi>الْمَفْعُولُ بِهِ</bdi>، <bdi>الْمَفْعُولُ فِيهِ</bdi> (مكانا أو زمانا)، <bdi>الْمَفْعُولُ لَهُ</bdi>، <bdi>التَّمْيِيز</bdi>، <bdi>الْعِوَض</bdi>، <bdi>الْآلَة</bdi>`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `ابتداء الغاية (the starting point of an extent) is the core meaning of:`,
            kind: 'mcq',
            options: ['مِن', 'إلى', 'عن', 'حتى'],
            correct: 0,
          },
        },
        {
          heading: 'مِن: أمثلة من القرآن',
          lines: [
            { table: { headers: ['Verse', 'Phrase', 'وظيفة'], rows: [
              ['﴿مِنَ الْمَسْجِدِ الْحَرَامِ﴾', 'مِنَ الْمَسْجِدِ', 'الْمَفْعُولُ فِيهِ — لِلْمَكَان'],
              ['﴿تَرَىٰ أَعْيُنَهُمْ تَفِيضُ مِنَ الدَّمْعِ﴾', 'مِنَ الدَّمْعِ', 'التَّمْيِيز — specifying what overflows'],
              ['﴿أَرَضِيتُم بِالْحَيَاةِ الدُّنْيَا مِنَ الْآخِرَةِ﴾', 'مِنَ الْآخِرَةِ', 'الْعِوَض — in exchange for the Hereafter'],
              ['﴿يَنظُرُونَ مِن طَرْفٍ خَفِيٍّ﴾', 'مِن طَرْفٍ', 'الْآلَة — the furtive glance as instrument'],
            ] } },
          ],
          exercise: {
            prompt: `In ﴿ترى أعينهم تفيض من الدمع﴾, من الدمع functions as:`,
            kind: 'mcq',
            options: ['التمييز', 'المفعول به', 'الحال', 'المفعول المطلق'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'What is the core meaning of الباء؟',
          options: ['الإلصاق', 'ابتداء الغاية', 'انتهاء الغاية', 'المجاوزة'],
          correct: 0,
        },
        {
          q: 'In ﴿ولقد نصركم الله ببدر﴾, what is the function of الباء with its مجرور؟',
          options: ['المفعول فيه (مكان)', 'المفعول به', 'الحال', 'التمييز'],
          correct: 0,
        },
        {
          q: 'In ﴿يكتبون الكتاب بأيديهم﴾, بأيديهم is:',
          options: ['الآلة', 'العوض', 'الحال', 'المفعول له'],
          correct: 0,
        },
        {
          q: 'What is the core meaning of مِن؟',
          options: ['ابتداء الغاية', 'الإلصاق', 'الاستعلاء', 'التشبيه'],
          correct: 0,
        },
        {
          q: 'In ﴿يجعلون أصابعهم في آذانهم من الصواعق﴾, من الصواعق functions as:',
          options: ['المفعول له', 'المفعول به', 'الآلة', 'العوض'],
          correct: 0,
        },
        {
          q: 'In ﴿أرضيتم بالحياة الدنيا من الآخرة﴾, من الآخرة functions as:',
          options: ['العوض', 'التمييز', 'المفعول فيه', 'الحال'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'الباء والإلصاق',
          kind: 'mcq',
          prompt: 'الإلصاق means:',
          options: ['attachment/adhesion — joining one thing to another', 'the starting point of an extent', 'being above/upon', 'likening or comparison'],
          correct: 0,
        },
        {
          title: 'عدد وظائف الباء',
          kind: 'mcq',
          prompt: 'How many distinct وظائف can الباء with its مجرور take؟',
          options: ['تسعة', 'ستة', 'سبعة', 'خمسة'],
          correct: 0,
        },
        {
          title: 'الباء: المفعول به',
          kind: 'mcq',
          prompt: 'In ﴿فلما ذهبوا به﴾, به functions as:',
          options: ['المفعول به (غير صريح)', 'المفعول المطلق', 'الحال', 'الآلة'],
          correct: 0,
        },
        {
          title: 'الباء: المفعول فيه للزمان',
          kind: 'mcq',
          prompt: 'In ﴿يسبحون له بالليل والنهار﴾, بالليل والنهار is:',
          options: ['المفعول فيه (زمان)', 'المفعول فيه (مكان)', 'الحال', 'التمييز'],
          correct: 0,
        },
        {
          title: 'الباء: المفعول له',
          kind: 'mcq',
          prompt: 'In ﴿فأهلكناهم بذنوبهم﴾, بذنوبهم functions as:',
          options: ['المفعول له', 'المفعول به', 'العوض', 'الآلة'],
          correct: 0,
        },
        {
          title: 'الباء: المفعول معه',
          kind: 'mcq',
          prompt: 'In ﴿وقد دخلوا بالكفر﴾, بالكفر functions as:',
          options: ['المفعول معه', 'الحال', 'التمييز', 'المفعول المطلق'],
          correct: 0,
        },
        {
          title: 'الباء: التمييز',
          kind: 'mcq',
          prompt: 'In يملأ الميزان بالحسنات, بالحسنات functions as:',
          options: ['التمييز', 'الحال', 'الآلة', 'العوض'],
          correct: 0,
        },
        {
          title: 'الباء: العوض',
          kind: 'mcq',
          prompt: 'In ﴿اشتروا الضلالة بالهدى﴾, بالهدى functions as:',
          options: ['العوض', 'المفعول له', 'الحال', 'الآلة'],
          correct: 0,
        },
        {
          title: 'مِن: المفعول به',
          kind: 'mcq',
          prompt: 'In أنا تائب من كل ذنب, من كل ذنب functions as:',
          options: ['المفعول به (غير صريح)', 'المفعول فيه', 'التمييز', 'العوض'],
          correct: 0,
        },
        {
          title: 'مِن: المفعول فيه للزمان',
          kind: 'mcq',
          prompt: 'In ﴿أسس على التقوى من أول يوم﴾, من أول يوم functions as:',
          options: ['المفعول فيه (زمان)', 'المفعول فيه (مكان)', 'الحال', 'الآلة'],
          correct: 0,
        },
        {
          title: 'وظائف مِن',
          kind: 'mcq',
          prompt: 'Which of these is NOT one of the six وظائف مِن can take with its مجرور؟',
          options: ['الحال', 'المفعول به', 'التمييز', 'العوض'],
          correct: 0,
        },
        {
          title: 'وظائف الباء',
          kind: 'mcq',
          prompt: 'Which of these is NOT one of the nine وظائف الباء can take with its مجرور؟',
          options: ['انتهاء الغاية', 'المفعول المطلق', 'الحال', 'الآلة'],
          correct: 0,
        },
        {
          title: 'الباء والوظائف المشتركة مع مِن',
          kind: 'mcq',
          prompt: 'Both الباء and مِن can put their مجرور in the role of:',
          options: ['المفعول به، المفعول فيه، المفعول له، والآلة', 'التمييز فقط', 'الحال فقط', 'لا وظيفة مشتركة بينهما'],
          correct: 0,
        },
        {
          title: 'الفرق بين معنى الباء ومِن',
          kind: 'mcq',
          prompt: 'How does الإلصاق (الباء) differ from ابتداء الغاية (مِن) as core meanings؟',
          options: ['الإلصاق indicates joining between two things, while ابتداء الغاية indicates a starting point', "There's no difference between them", 'Both indicate الاستعلاء', 'Both indicate التشبيه'],
          correct: 0,
        },
        {
          title: 'مثال آخر على المفعول فيه بالباء',
          kind: 'mcq',
          prompt: 'ببدر in ﴿ولقد نصركم الله ببدر﴾ specifies:',
          options: ['المكان (place)', 'الزمان (time)', 'السبب (cause)', 'الأداة (instrument)'],
          correct: 0,
        },
        {
          title: 'مثال آخر على التمييز بمن',
          kind: 'mcq',
          prompt: 'من الدمع in ﴿ترى أعينهم تفيض من الدمع﴾ specifies:',
          options: ['what overflows (تمييز)', 'the place (مفعول فيه)', 'the instrument (آلة)', 'the exchange (عوض)'],
          correct: 0,
        },
        {
          title: 'شبه الجملة',
          kind: 'mcq',
          prompt: 'الباء (or مِن) plus its مجرور is together called:',
          options: ['شبه جملة', 'جملة اسمية', 'جملة فعلية', 'مفرد'],
          correct: 0,
        },
        {
          title: 'الآلة بالباء',
          kind: 'mcq',
          prompt: 'In ﴿يكتبون الكتاب بأيديهم﴾, what does الآلة mean here؟',
          options: ['the instrument used — their hands', 'the place written', 'the time of writing', 'the reason for writing'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿خُذِ الْكِتَابَ بِقُوَّةٍ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of بِقُوَّةٍ.',
          sentence: 'خُذِ الْكِتَابَ بِقُوَّةٍ',
          translation: 'Take the Scripture with strength.',
          cells: ['خُذِ', 'الْكِتَابَ', 'بِقُوَّةٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'المفعول المطلق' },
            ] },
          ],
          distractors: ['المفعول به', 'الحال'],
        },
        {
          title: 'تركيب: ﴿فَلَمَّا ذَهَبُوا بِهِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of بِهِ.',
          sentence: 'فَلَمَّا ذَهَبُوا بِهِ',
          translation: 'And when they went with him.',
          cells: ['ذَهَبُوا', 'بِهِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'المفعول به' },
            ] },
          ],
          distractors: ['المفعول المطلق', 'الحال'],
        },
        {
          title: 'تركيب: ﴿وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of بِبَدْرٍ.',
          sentence: 'وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ',
          translation: 'And Allah had already given you victory at Badr.',
          cells: ['نَصَرَكُمُ', 'اللَّهُ', 'بِبَدْرٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'المفعول فيه (مكان)' },
            ] },
          ],
          distractors: ['المفعول فيه (زمان)', 'المفعول به'],
        },
        {
          title: 'تركيب: ﴿يُسَبِّحُونَ لَهُ بِاللَّيْلِ وَالنَّهَارِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of بِاللَّيْلِ وَالنَّهَارِ.',
          sentence: 'يُسَبِّحُونَ لَهُ بِاللَّيْلِ وَالنَّهَارِ',
          translation: 'They glorify Him by night and day.',
          cells: ['يُسَبِّحُونَ', 'لَهُ', 'بِاللَّيْلِ', 'وَالنَّهَارِ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'المفعول فيه (زمان)' },
            ] },
          ],
          distractors: ['المفعول فيه (مكان)', 'الحال'],
        },
        {
          title: 'تركيب: ﴿فَأَهْلَكْنَاهُمْ بِذُنُوبِهِمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of بِذُنُوبِهِمْ.',
          sentence: 'فَأَهْلَكْنَاهُمْ بِذُنُوبِهِمْ',
          translation: 'So We destroyed them for their sins.',
          cells: ['أَهْلَكْنَاهُمْ', 'بِذُنُوبِهِمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'المفعول له' },
            ] },
          ],
          distractors: ['المفعول معه', 'الآلة'],
        },
        {
          title: 'تركيب: ﴿وَقَدْ دَخَلُوا بِالْكُفْرِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of بِالْكُفْرِ.',
          sentence: 'وَقَدْ دَخَلُوا بِالْكُفْرِ',
          translation: 'And they had entered with disbelief.',
          cells: ['دَخَلُوا', 'بِالْكُفْرِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'المفعول معه' },
            ] },
          ],
          distractors: ['المفعول له', 'الحال'],
        },
        {
          title: 'تركيب: ﴿ادْخُلُوهَا بِسَلَامٍ آمِنِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of بِسَلَامٍ.',
          sentence: 'ادْخُلُوهَا بِسَلَامٍ آمِنِينَ',
          translation: 'Enter it in peace, secure.',
          cells: ['ادْخُلُوهَا', 'بِسَلَامٍ', 'آمِنِينَ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'الحال' },
            ] },
          ],
          distractors: ['المفعول معه', 'الآلة'],
        },
        {
          title: 'تركيب: ﴿يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of بِأَيْدِيهِمْ.',
          sentence: 'يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ',
          translation: 'They write the book with their own hands.',
          cells: ['يَكْتُبُونَ', 'الْكِتَابَ', 'بِأَيْدِيهِمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'الآلة' },
            ] },
          ],
          distractors: ['الحال', 'المفعول له'],
        },
        {
          title: 'تركيب: أَنَا تَائِبٌ مِنْ كُلِّ ذَنْبٍ',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of مِنْ كُلِّ ذَنْبٍ.',
          sentence: 'أَنَا تَائِبٌ مِنْ كُلِّ ذَنْبٍ',
          translation: 'I repent from every sin.',
          cells: ['أَنَا', 'تَائِبٌ', 'مِنْ', 'كُلِّ', 'ذَنْبٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 4, role: 'المفعول به' },
            ] },
          ],
          distractors: ['المفعول فيه (مكان)', 'التمييز'],
        },
        {
          title: 'تركيب: ﴿أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِنَ الْمَسْجِدِ الْحَرَامِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of مِنَ الْمَسْجِدِ الْحَرَامِ.',
          sentence: 'أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِنَ الْمَسْجِدِ الْحَرَامِ',
          translation: 'He took His servant by night from al-Masjid al-Haram.',
          cells: ['أَسْرَىٰ', 'بِعَبْدِهِ', 'لَيْلًا', 'مِنَ', 'الْمَسْجِدِ', 'الْحَرَامِ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 5, role: 'المفعول فيه (مكان)' },
            ] },
          ],
          distractors: ['المفعول فيه (زمان)', 'المفعول به'],
        },
        {
          title: 'تركيب: ﴿أُسِّسَ عَلَى التَّقْوَىٰ مِنْ أَوَّلِ يَوْمٍ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of مِنْ أَوَّلِ يَوْمٍ.',
          sentence: 'أُسِّسَ عَلَى التَّقْوَىٰ مِنْ أَوَّلِ يَوْمٍ',
          translation: 'It was founded on righteousness from the first day.',
          cells: ['أُسِّسَ', 'عَلَى', 'التَّقْوَىٰ', 'مِنْ', 'أَوَّلِ', 'يَوْمٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 5, role: 'المفعول فيه (زمان)' },
            ] },
          ],
          distractors: ['المفعول فيه (مكان)', 'المفعول له'],
        },
        {
          title: 'تركيب: ﴿يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِمْ مِنَ الصَّوَاعِقِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of مِنَ الصَّوَاعِقِ.',
          sentence: 'يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِمْ مِنَ الصَّوَاعِقِ',
          translation: 'They put their fingers in their ears from the thunderclaps.',
          cells: ['يَجْعَلُونَ', 'أَصَابِعَهُمْ', 'فِي', 'آذَانِهِمْ', 'مِنَ', 'الصَّوَاعِقِ'],
          rows: [
            { position: 'above', labels: [
              { start: 4, end: 5, role: 'المفعول له' },
            ] },
          ],
          distractors: ['المفعول به', 'الآلة'],
        },
        {
          title: 'تركيب: ﴿تَرَىٰ أَعْيُنَهُمْ تَفِيضُ مِنَ الدَّمْعِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of مِنَ الدَّمْعِ.',
          sentence: 'تَرَىٰ أَعْيُنَهُمْ تَفِيضُ مِنَ الدَّمْعِ',
          translation: 'You see their eyes overflowing with tears.',
          cells: ['تَرَىٰ', 'أَعْيُنَهُمْ', 'تَفِيضُ', 'مِنَ', 'الدَّمْعِ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 4, role: 'التمييز' },
            ] },
          ],
          distractors: ['العوض', 'الآلة'],
        },
        {
          title: 'تركيب: ﴿أَرَضِيتُم بِالْحَيَاةِ الدُّنْيَا مِنَ الْآخِرَةِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of مِنَ الْآخِرَةِ.',
          sentence: 'أَرَضِيتُم بِالْحَيَاةِ الدُّنْيَا مِنَ الْآخِرَةِ',
          translation: 'Are you satisfied with the life of this world instead of the Hereafter?',
          cells: ['أَرَضِيتُمْ', 'بِالْحَيَاةِ', 'الدُّنْيَا', 'مِنَ', 'الْآخِرَةِ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 4, role: 'العوض' },
            ] },
          ],
          distractors: ['التمييز', 'المفعول به'],
        },
        {
          title: 'تركيب: ﴿يَنظُرُونَ مِن طَرْفٍ خَفِيٍّ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of مِن طَرْفٍ.',
          sentence: 'يَنظُرُونَ مِن طَرْفٍ خَفِيٍّ',
          translation: 'They look with a furtive glance.',
          cells: ['يَنظُرُونَ', 'مِنْ', 'طَرْفٍ', 'خَفِيٍّ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'الآلة' },
            ] },
          ],
          distractors: ['التمييز', 'العوض'],
        },
      ],
    },

    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'إلى وعن وعلى',
      subtitle: 'Extent and Elevation — معنى ووظائف إلى، عن، and على',
      sourceRef: 'pp. 45–47',
      concepts: [
        {
          heading: 'إلى: معناها ووظائفها',
          lines: [
            { html: `The core meaning of <bdi>إِلَى</bdi> is <bdi>انْتِهَاءُ الْغَايَة</bdi> — the end point of an extent, the counterpart of مِن's ابتداء الغاية.`, list: false },
            { html: `With its مجرور it takes three وظائف: <bdi>الْمَفْعُولُ بِهِ</bdi>، <bdi>الْمَفْعُولُ فِيهِ</bdi> (مكانا أو زمانا)، <bdi>الْمَفْعُولُ مَعَهُ</bdi>.`, list: false },
            { html: `In ﴿ثُمَّ أَتِمُّوا الصِّيَامَ إِلَى اللَّيْلِ﴾, إلى الليل is <bdi>الْمَفْعُولُ فِيهِ</bdi> — <bdi>لِلزَّمَان</bdi> — "until night".`, list: false },
            { html: `In ﴿وَلَا تَأْكُلُوا أَمْوَالَهُمْ إِلَىٰ أَمْوَالِكُمْ﴾, إلى أموالكم is <bdi>الْمَفْعُولُ مَعَهُ</bdi> — "together with your own wealth".`, list: false },
          ],
          exercise: {
            prompt: `انتهاء الغاية (the end point of an extent) is the core meaning of:`,
            kind: 'mcq',
            options: ['إلى', 'مِن', 'عن', 'على'],
            correct: 0,
          },
        },
        {
          heading: 'عن: معناها ووظائفها، وعن الاسمية',
          lines: [
            { html: `The core meaning of <bdi>عَنْ</bdi> is <bdi>الْمُجَاوَزَة</bdi> — passing beyond or moving away from.`, list: false },
            { html: `With its مجرور it takes four وظائف: <bdi>الْمَفْعُولُ بِهِ</bdi>، <bdi>الْمَفْعُولُ فِيهِ</bdi> (مكانا أو زمانا)، <bdi>الْمَفْعُولُ لَهُ</bdi>، <bdi>الْعِوَض</bdi> — as in the ḥadīth «حُجَّ عَنْ أَبِيكَ» ("on behalf of your father").`, list: false },
            { html: `When عن is preceded by مِن, it stops being a حرف جر and becomes an <bdi>اسم</bdi> meaning <bdi>جَانِب</bdi> (side), as in جِئْتُ مِنْ عَنْ يَمِينِهِ — "I came from his right side".`, list: false },
          ],
          exercise: {
            prompt: `When is عن an اسم, and what does it then mean؟`,
            kind: 'mcq',
            options: ['When preceded by مِن, meaning جانب (side)', 'When preceded by على, meaning استعلاء', 'عن is always a حرف, never an اسم', 'When it ends a جملة, meaning انتهاء'],
            correct: 0,
          },
        },
        {
          heading: 'على: معناها ووظائفها',
          lines: [
            { html: `The core meaning of <bdi>عَلَى</bdi> is <bdi>الِاسْتِعْلَاء</bdi> — being above or upon.`, list: false },
            { html: `With its مجرور it takes five وظائف: <bdi>الْمَفْعُولُ بِهِ</bdi>، <bdi>الْمَفْعُولُ فِيهِ</bdi> (مكانا أو زمانا)، <bdi>الْمَفْعُولُ لَهُ</bdi>، <bdi>الْمَفْعُولُ مَعَهُ</bdi>، <bdi>الْحَال</bdi>.`, list: false },
            { html: `In ﴿وَدَخَلَ الْمَدِينَةَ عَلَىٰ حِينِ غَفْلَةٍ مِّنْ أَهْلِهَا﴾, على حين غفلة is <bdi>الْمَفْعُولُ فِيهِ</bdi> — <bdi>لِلزَّمَان</bdi>.`, list: false },
            { html: `In ﴿فَمَا آمَنَ لِمُوسَىٰ إِلَّا ذُرِّيَّةٌ مِّن قَوْمِهِ عَلَىٰ خَوْفٍ مِّن فِرْعَوْنَ﴾, على خوف is <bdi>الْحَال</bdi> — they believed while being in a state of fear.`, list: false },
          ],
          exercise: {
            prompt: `الاستعلاء (being above/upon) is the core meaning of:`,
            kind: 'mcq',
            options: ['على', 'عن', 'إلى', 'حتى'],
            correct: 0,
          },
        },
        {
          heading: 'إلى وعن وعلى: مقارنة الوظائف',
          lines: [
            { html: `إلى، عن، and على all share the ability to put their مجرور in the role of <bdi>الْمَفْعُولُ بِهِ</bdi> (غَيْرُ صَرِيح) and <bdi>الْمَفْعُولُ فِيهِ</bdi> (مكانا وزمانا).`, list: false },
            { table: { headers: ['وظيفة', 'Which حروف mark it'], rows: [
              ['الْمَفْعُولُ لَهُ', 'عن وعلى فقط'],
              ['الْمَفْعُولُ مَعَهُ', 'إلى وعلى فقط'],
              ['الْحَال', 'على وحدها'],
              ['الْعِوَض', 'عن وحدها'],
            ] } },
          ],
          exercise: {
            prompt: `Which وظيفة can على mark that neither إلى nor عن can؟`,
            kind: 'mcq',
            options: ['الحال', 'المفعول به', 'المفعول فيه', 'التمييز'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'What is the core meaning of إلى؟',
          options: ['انتهاء الغاية', 'ابتداء الغاية', 'المجاوزة', 'الاستعلاء'],
          correct: 0,
        },
        {
          q: 'In ﴿ولا تأكلوا أموالهم إلى أموالكم﴾, إلى أموالكم functions as:',
          options: ['المفعول معه', 'المفعول به', 'التمييز', 'العوض'],
          correct: 0,
        },
        {
          q: 'What is the core meaning of عن؟',
          options: ['المجاوزة', 'الاستعلاء', 'التشبيه', 'الظرفية'],
          correct: 0,
        },
        {
          q: 'In the ḥadīth «حج عن أبيك», عن أبيك functions as:',
          options: ['العوض', 'المفعول به', 'الحال', 'الآلة'],
          correct: 0,
        },
        {
          q: 'What is the core meaning of على؟',
          options: ['الاستعلاء', 'انتهاء الغاية', 'المجاوزة', 'الإلصاق'],
          correct: 0,
        },
        {
          q: 'In ﴿فما آمن لموسى إلا ذرية من قومه على خوف من فرعون﴾, على خوف functions as:',
          options: ['الحال', 'المفعول به', 'المفعول له', 'العوض'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'إلى: المفعول به',
          kind: 'mcq',
          prompt: 'In ﴿حبب إليكم الإيمان﴾, إليكم functions as:',
          options: ['المفعول به (غير صريح)', 'المفعول فيه', 'الحال', 'العوض'],
          correct: 0,
        },
        {
          title: 'إلى: المفعول فيه للمكان',
          kind: 'mcq',
          prompt: 'In ﴿إلى المسجد الأقصى﴾, إلى المسجد functions as:',
          options: ['المفعول فيه (مكان)', 'المفعول فيه (زمان)', 'المفعول معه', 'الحال'],
          correct: 0,
        },
        {
          title: 'عدد وظائف إلى',
          kind: 'mcq',
          prompt: 'How many وظائف can إلى with its مجرور take؟',
          options: ['ثلاثة', 'أربعة', 'خمسة', 'ستة'],
          correct: 0,
        },
        {
          title: 'عن: المفعول به',
          kind: 'mcq',
          prompt: 'In ﴿وينهون عن المنكر﴾, عن المنكر functions as:',
          options: ['المفعول به (غير صريح)', 'المفعول فيه', 'الحال', 'العوض'],
          correct: 0,
        },
        {
          title: 'عن: المفعول فيه للمكان',
          kind: 'mcq',
          prompt: 'In ﴿هو يقبل التوبة عن عباده﴾, عن عباده functions as:',
          options: ['المفعول فيه (مكان)', 'المفعول به', 'الحال', 'العوض'],
          correct: 0,
        },
        {
          title: 'عن: المفعول فيه للزمان',
          kind: 'mcq',
          prompt: 'In ﴿عما قليل ليصبحن نادمين﴾, عن قليل functions as:',
          options: ['المفعول فيه (زمان)', 'المفعول فيه (مكان)', 'الحال', 'العوض'],
          correct: 0,
        },
        {
          title: 'عن: المفعول له',
          kind: 'mcq',
          prompt: 'In ﴿وما نحن بتاركي آلهتنا عن قولك﴾, عن قولك functions as:',
          options: ['المفعول له', 'المفعول به', 'الحال', 'التمييز'],
          correct: 0,
        },
        {
          title: 'عدد وظائف عن',
          kind: 'mcq',
          prompt: 'How many وظائف can عن with its مجرور take؟',
          options: ['أربعة', 'ثلاثة', 'خمسة', 'ستة'],
          correct: 0,
        },
        {
          title: 'على: المفعول به',
          kind: 'mcq',
          prompt: 'In ﴿أنعمت عليهم﴾, عليهم functions as:',
          options: ['المفعول به (غير صريح)', 'المفعول فيه', 'الحال', 'العوض'],
          correct: 0,
        },
        {
          title: 'على: المفعول فيه للمكان',
          kind: 'mcq',
          prompt: 'In ﴿وعليها وعلى الفلك تحملون﴾, على الفلك functions as:',
          options: ['المفعول فيه (مكان)', 'المفعول فيه (زمان)', 'المفعول له', 'الحال'],
          correct: 0,
        },
        {
          title: 'على: المفعول له',
          kind: 'mcq',
          prompt: 'In ﴿سخرها لكم لتكبروا الله على ما هداكم﴾, على ما هداكم functions as:',
          options: ['المفعول له', 'المفعول به', 'الحال', 'المفعول معه'],
          correct: 0,
        },
        {
          title: 'على: المفعول معه',
          kind: 'mcq',
          prompt: 'In ﴿ويطعمون الطعام على حبه مسكينا﴾, على حبه functions as:',
          options: ['المفعول معه', 'الحال', 'المفعول له', 'العوض'],
          correct: 0,
        },
        {
          title: 'عدد وظائف على',
          kind: 'mcq',
          prompt: 'How many وظائف can على with its مجرور take؟',
          options: ['خمسة', 'أربعة', 'ثلاثة', 'ستة'],
          correct: 0,
        },
        {
          title: 'عن الاسمية',
          kind: 'mcq',
          prompt: 'جئت من عن يمينه — here عن is:',
          options: ['اسم بمعنى جانب', 'حرف جر بمعنى المجاوزة', 'فعل ماضٍ', 'ظرف زمان'],
          correct: 0,
        },
        {
          title: 'المشترك بين الثلاثة',
          kind: 'mcq',
          prompt: 'Which وظيفة do إلى، عن، and على all three share the ability to mark؟',
          options: ['المفعول به والمفعول فيه', 'الحال فقط', 'العوض فقط', 'التمييز فقط'],
          correct: 0,
        },
        {
          title: 'العوض بين عن وعلى',
          kind: 'mcq',
          prompt: 'العوض, among إلى، عن، and على, belongs uniquely to:',
          options: ['عن', 'على', 'إلى', 'لا واحد منها'],
          correct: 0,
        },
        {
          title: 'المفعول معه بين الثلاثة',
          kind: 'mcq',
          prompt: 'المفعول معه, among إلى، عن، and على, can be marked by:',
          options: ['إلى وعلى فقط', 'عن وعلى فقط', 'الثلاثة جميعا', 'إلى وحدها'],
          correct: 0,
        },
        {
          title: 'انتهاء الغاية وابتداؤها',
          kind: 'mcq',
          prompt: 'انتهاء الغاية (إلى) is the direct counterpart of the meaning of which حرف؟',
          options: ['مِن (ابتداء الغاية)', 'عن (المجاوزة)', 'على (الاستعلاء)', 'الباء (الإلصاق)'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿حُبِّبَ إِلَيْكُمُ الْإِيمَانُ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of إِلَيْكُمُ.',
          sentence: 'حُبِّبَ إِلَيْكُمُ الْإِيمَانُ',
          translation: 'Faith has been made beloved to you.',
          cells: ['حُبِّبَ', 'إِلَيْكُمُ', 'الْإِيمَانُ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'المفعول به' },
            ] },
          ],
          distractors: ['المفعول فيه (مكان)', 'الحال'],
        },
        {
          title: 'تركيب: ﴿أَسْرَىٰ بِعَبْدِهِ إِلَى الْمَسْجِدِ الْأَقْصَى﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of إِلَى الْمَسْجِدِ الْأَقْصَى.',
          sentence: 'أَسْرَىٰ بِعَبْدِهِ إِلَى الْمَسْجِدِ الْأَقْصَى',
          translation: 'He took His servant to al-Masjid al-Aqsa.',
          cells: ['أَسْرَىٰ', 'بِعَبْدِهِ', 'إِلَى', 'الْمَسْجِدِ', 'الْأَقْصَى'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 4, role: 'المفعول فيه (مكان)' },
            ] },
          ],
          distractors: ['المفعول فيه (زمان)', 'المفعول به'],
        },
        {
          title: 'تركيب: ﴿ثُمَّ أَتِمُّوا الصِّيَامَ إِلَى اللَّيْلِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of إِلَى اللَّيْلِ.',
          sentence: 'ثُمَّ أَتِمُّوا الصِّيَامَ إِلَى اللَّيْلِ',
          translation: 'Then complete the fast until night.',
          cells: ['أَتِمُّوا', 'الصِّيَامَ', 'إِلَى', 'اللَّيْلِ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'المفعول فيه (زمان)' },
            ] },
          ],
          distractors: ['المفعول فيه (مكان)', 'المفعول معه'],
        },
        {
          title: 'تركيب: ﴿وَلَا تَأْكُلُوا أَمْوَالَهُمْ إِلَىٰ أَمْوَالِكُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of إِلَىٰ أَمْوَالِكُمْ.',
          sentence: 'وَلَا تَأْكُلُوا أَمْوَالَهُمْ إِلَىٰ أَمْوَالِكُمْ',
          translation: 'And do not consume their wealth together with your own wealth.',
          cells: ['تَأْكُلُوا', 'أَمْوَالَهُمْ', 'إِلَىٰ', 'أَمْوَالِكُمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'المفعول معه' },
            ] },
          ],
          distractors: ['المفعول فيه (زمان)', 'المفعول به'],
        },
        {
          title: 'تركيب: ﴿وَيَنْهَوْنَ عَنِ الْمُنكَرِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of عَنِ الْمُنكَرِ.',
          sentence: 'وَيَنْهَوْنَ عَنِ الْمُنكَرِ',
          translation: 'And they forbid wrongdoing.',
          cells: ['يَنْهَوْنَ', 'عَنِ', 'الْمُنكَرِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'المفعول به' },
            ] },
          ],
          distractors: ['المفعول له', 'العوض'],
        },
        {
          title: 'تركيب: هُوَ يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of عَنْ عِبَادِهِ.',
          sentence: 'هُوَ يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ',
          translation: 'He accepts repentance from His servants.',
          cells: ['يَقْبَلُ', 'التَّوْبَةَ', 'عَنْ', 'عِبَادِهِ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'المفعول فيه (مكان)' },
            ] },
          ],
          distractors: ['المفعول له', 'العوض'],
        },
        {
          title: 'تركيب: ﴿عَمَّا قَلِيلٍ لَيُصْبِحُنَّ نَادِمِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of عَمَّا قَلِيلٍ.',
          sentence: 'عَمَّا قَلِيلٍ لَيُصْبِحُنَّ نَادِمِينَ',
          translation: 'In a little while they will surely become regretful.',
          cells: ['عَمَّا', 'قَلِيلٍ', 'لَيُصْبِحُنَّ', 'نَادِمِينَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'المفعول فيه (زمان)' },
            ] },
          ],
          distractors: ['المفعول فيه (مكان)', 'المفعول له'],
        },
        {
          title: 'تركيب: ﴿وَمَا نَحْنُ بِتَارِكِي آلِهَتِنَا عَنْ قَوْلِكَ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of عَنْ قَوْلِكَ.',
          sentence: 'وَمَا نَحْنُ بِتَارِكِي آلِهَتِنَا عَنْ قَوْلِكَ',
          translation: 'And we are not abandoning our gods because of your word.',
          cells: ['نَحْنُ', 'بِتَارِكِي', 'آلِهَتِنَا', 'عَنْ', 'قَوْلِكَ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 4, role: 'المفعول له' },
            ] },
          ],
          distractors: ['المفعول به', 'العوض'],
        },
        {
          title: 'تركيب: ﴿أَنْعَمْتَ عَلَيْهِمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of عَلَيْهِمْ.',
          sentence: 'أَنْعَمْتَ عَلَيْهِمْ',
          translation: 'You have bestowed favor upon them.',
          cells: ['أَنْعَمْتَ', 'عَلَيْهِمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'المفعول به' },
            ] },
          ],
          distractors: ['المفعول فيه (مكان)', 'الحال'],
        },
        {
          title: 'تركيب: ﴿وَعَلَيْهَا وَعَلَى الْفُلْكِ تُحْمَلُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of عَلَى الْفُلْكِ.',
          sentence: 'وَعَلَيْهَا وَعَلَى الْفُلْكِ تُحْمَلُونَ',
          translation: 'And upon them, and upon ships, you are carried.',
          cells: ['عَلَيْهَا', 'عَلَى', 'الْفُلْكِ', 'تُحْمَلُونَ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'المفعول فيه (مكان)' },
            ] },
          ],
          distractors: ['المفعول فيه (زمان)', 'المفعول به'],
        },
        {
          title: 'تركيب: ﴿وَدَخَلَ الْمَدِينَةَ عَلَىٰ حِينِ غَفْلَةٍ مِّنْ أَهْلِهَا﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of عَلَىٰ حِينِ غَفْلَةٍ.',
          sentence: 'وَدَخَلَ الْمَدِينَةَ عَلَىٰ حِينِ غَفْلَةٍ مِّنْ أَهْلِهَا',
          translation: 'And he entered the city at a time of inattention by its people.',
          cells: ['دَخَلَ', 'الْمَدِينَةَ', 'عَلَىٰ', 'حِينِ', 'غَفْلَةٍ', 'مِنْ', 'أَهْلِهَا'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 4, role: 'المفعول فيه (زمان)' },
            ] },
          ],
          distractors: ['المفعول فيه (مكان)', 'الحال'],
        },
        {
          title: 'تركيب: سَخَّرَهَا لَكُمْ لِتُكَبِّرُوا اللَّهَ عَلَىٰ مَا هَدَاكُمْ',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of عَلَىٰ مَا هَدَاكُمْ.',
          sentence: 'سَخَّرَهَا لَكُمْ لِتُكَبِّرُوا اللَّهَ عَلَىٰ مَا هَدَاكُمْ',
          translation: 'He subjected them to you so that you may glorify Allah for guiding you.',
          cells: ['سَخَّرَهَا', 'لَكُمْ', 'لِتُكَبِّرُوا', 'اللَّهَ', 'عَلَىٰ', 'مَا', 'هَدَاكُمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 4, end: 6, role: 'المفعول له' },
            ] },
          ],
          distractors: ['المفعول معه', 'الحال'],
        },
        {
          title: 'تركيب: ﴿وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of عَلَىٰ حُبِّهِ.',
          sentence: 'وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا',
          translation: 'And they feed food, despite love for it, to the needy.',
          cells: ['يُطْعِمُونَ', 'الطَّعَامَ', 'عَلَىٰ', 'حُبِّهِ', 'مِسْكِينًا'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'المفعول معه' },
            ] },
          ],
          distractors: ['المفعول له', 'الحال'],
        },
        {
          title: 'تركيب: ﴿فَمَا آمَنَ لِمُوسَىٰ إِلَّا ذُرِّيَّةٌ مِّن قَوْمِهِ عَلَىٰ خَوْفٍ مِّن فِرْعَوْنَ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of عَلَىٰ خَوْفٍ.',
          sentence: 'فَمَا آمَنَ لِمُوسَىٰ إِلَّا ذُرِّيَّةٌ مِّن قَوْمِهِ عَلَىٰ خَوْفٍ مِّن فِرْعَوْنَ',
          translation: 'None believed in Moses, except a few of his people, in fear of Pharaoh.',
          cells: ['آمَنَ', 'لِمُوسَىٰ', 'إِلَّا', 'ذُرِّيَّةٌ', 'مِنْ', 'قَوْمِهِ', 'عَلَىٰ', 'خَوْفٍ', 'مِنْ', 'فِرْعَوْنَ'],
          rows: [
            { position: 'above', labels: [
              { start: 6, end: 7, role: 'الحال' },
            ] },
          ],
          distractors: ['المفعول له', 'المفعول معه'],
        },
      ],
    },

    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'اللام وفي والكاف وحتى',
      subtitle: 'Ownership, Containment, and Comparison — اللام، في، الكاف، and حتى',
      sourceRef: 'pp. 48–50',
      concepts: [
        {
          heading: 'اللام: معانيها الثلاثة',
          lines: [
            { html: `<bdi>اللَّام</bdi> carries three core meanings:`, list: false },
            { table: { headers: ['Meaning', 'Example'], rows: [
              ['التَّخْصِيص (also الِاسْتِحْقَاق)', '﴿الْحَمْدُ لِلَّهِ﴾'],
              ['الْمِلْك', '﴿لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ﴾'],
              ['شِبْهُ الْمِلْك (also النِّسْبَة)', '﴿لَآيَاتٍ لِّلْمُؤْمِنِينَ﴾'],
            ] } },
            { html: `التخصيص and الملك differ in what they connect: التخصيص holds between a <b>meaning</b> and an <b>entity</b> (الحمد لله), while الملك holds between an <b>entity</b> and an <b>entity</b> (له ما في السماوات).`, list: false },
          ],
          exercise: {
            prompt: `التخصيص and الملك, two of the three core meanings of اللام, differ in that:`,
            kind: 'mcq',
            options: ['التخصيص holds between a meaning and an entity, الملك between two entities', 'التخصيص is only Quranic, الملك is not', 'الملك always precedes a ضمير', 'There is no real difference between them'],
            correct: 0,
          },
        },
        {
          heading: 'اللام: وظائفها، ولام التعليل والعاقبة',
          lines: [
            { html: `With its مجرور, اللام takes three وظائف: <bdi>الْمَفْعُولُ بِهِ</bdi>، <bdi>الْمَفْعُولُ فِيهِ</bdi> (مكانا أو زمانا)، <bdi>الْمَفْعُولُ لَهُ</bdi>.`, list: false },
            { html: `When اللام + مجرور is a مفعول له, it splits by whether the outcome was intended:`, list: false },
            { table: { headers: ['Name', 'Outcome', 'Example'], rows: [
              ['لَامُ التَّعْلِيل (also وَالْحِكْمَة)', 'intended by the agent (عَنْ قَصْدِ الْفَاعِل)', '﴿لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا﴾'],
              ['لَامُ الْعَاقِبَة (also لَامُ الصَّيْرُورَة, لَامُ الْمَآل)', 'never intended by the agent (نَتِيجَةٌ عَنْ غَيْرِ قَصْد)', '﴿فَالْتَقَطَهُ آلُ فِرْعَوْنَ لِيَكُونَ لَهُمْ عَدُوًّا وَحَزَنًا﴾'],
            ] } },
          ],
          exercise: {
            prompt: `What is لام العاقبة؟`,
            kind: 'mcq',
            options: ['A لام marking a result the agent never intended, unlike لام التعليل', 'A لام that only appears with أفعال الأمر', 'Another name for لام الجحود', 'A لام that never takes a مجرور'],
            correct: 0,
          },
        },
        {
          heading: 'في: معناها ووظائفها',
          lines: [
            { html: `The core meaning of <bdi>فِي</bdi> is <bdi>الظَّرْفِيَّة</bdi> — containment, one thing occurring within another.`, list: false },
            { html: `With its مجرور it takes four وظائف: <bdi>الْمَفْعُولُ بِهِ</bdi>، <bdi>الْمَفْعُولُ فِيهِ</bdi> (مكانا أو زمانا)، <bdi>الْمَفْعُولُ لَهُ</bdi>، <bdi>الْمَفْعُولُ مَعَهُ</bdi>.`, list: false },
            { html: `In ﴿شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ﴾, فيه is <bdi>الْمَفْعُولُ فِيهِ</bdi> — <bdi>لِلزَّمَان</bdi>.`, list: false },
            { html: `In ﴿فَادْخُلِي فِي عِبَادِي﴾, في عبادي is <bdi>الْمَفْعُولُ مَعَهُ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `الظرفية (containment) is the core meaning of:`,
            kind: 'mcq',
            options: ['في', 'على', 'حتى', 'الكاف'],
            correct: 0,
          },
        },
        {
          heading: 'الكاف: معناها وقيدها',
          lines: [
            { html: `The core meaning of <bdi>الْكَاف</bdi> is <bdi>التَّشْبِيه</bdi> — likening or comparison.`, list: false },
            { html: `With its مجرور it can mark <bdi>الْمَفْعُولُ الْمُطْلَق</bdi>, as in ﴿رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا﴾, or <bdi>الْمَفْعُولُ لَهُ</bdi>, as in ﴿وَاذْكُرُوهُ كَمَا هَدَاكُمْ﴾.`, list: false },
            { html: `A restriction unique to الكاف: its مجرور can only be an <bdi>اسم ظاهر</bdi> — an overt noun — never a <bdi>ضمير</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `What restriction applies to the مجرور of الكاف؟`,
            kind: 'mcq',
            options: ['It can only be an اسم ظاهر, never a ضمير', 'It must always be مؤنث', 'It must always be جمع', 'There is no restriction'],
            correct: 0,
          },
        },
        {
          heading: 'حتى: معناها وقيدها، والفرق بينها وبين إلى',
          lines: [
            { html: `Like إلى, the core meaning of <bdi>حَتَّى</bdi> (as a جر حرف) is <bdi>انْتِهَاءُ الْغَايَة</bdi>.`, list: false },
            { html: `With its مجرور it can mark <bdi>الْمَفْعُولُ فِيهِ</bdi> — مكانا (سِرْنَا حَتَّى مَكَّة) or زمانا (﴿سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ﴾) — or <bdi>الْمَفْعُولُ لَهُ</bdi>, as in ﴿وَقَاتِلُوهُمْ حَتَّىٰ لَا تَكُونَ فِتْنَةٌ﴾.`, list: false },
            { html: `Its مجرور, like الكاف's, can only be an <bdi>اسم ظاهر</bdi>.`, list: false },
            { html: `حتى differs from إلى in what may follow it: what comes after حتى must be either the <b>final part</b> of what precedes it (قُمْتُ اللَّيْلَ حَتَّى آخِرِهِ — not حَتَّى نِصْفِهِ) or <b>connected to its end</b> (قُمْتُ اللَّيْلَ حَتَّى الصَّبَاحِ); إلى carries no such restriction.`, list: false },
          ],
          exercise: {
            prompt: `What is the difference between حتى and إلى regarding what follows them؟`,
            kind: 'mcq',
            options: ['حتى requires what follows to be the final part of, or connected to the end of, what precedes it — إلى has no such restriction', 'إلى is stricter than حتى', 'حتى never takes a مجرور at all', 'They are identical in every respect'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'اللام carries three core meanings. Which of these is one of them؟',
          options: ['شبه الملك (النسبة)', 'الإلصاق', 'الاستعلاء', 'التشبيه'],
          correct: 0,
        },
        {
          q: 'لام العاقبة, unlike لام التعليل, marks a result that is:',
          options: ['not intended by the agent (غير مقصود)', 'always intended by the agent', 'impossible to express in Arabic', 'only found with أفعال الأمر'],
          correct: 0,
        },
        {
          q: 'What is the core meaning of في؟',
          options: ['الظرفية', 'الاستعلاء', 'التشبيه', 'المجاوزة'],
          correct: 0,
        },
        {
          q: 'In ﴿فادخلي في عبادي﴾, في عبادي functions as:',
          options: ['المفعول معه', 'المفعول به', 'الحال', 'التمييز'],
          correct: 0,
        },
        {
          q: 'What restriction applies to the مجرور of both الكاف and حتى؟',
          options: ['It must be an اسم ظاهر, never a ضمير', 'It must be مرفوع', 'It must be نكرة', 'It must be a فعل'],
          correct: 0,
        },
        {
          q: 'حتى differs from إلى in that what follows حتى must be:',
          options: ['the final part of, or connected to the end of, what precedes it', 'always a زمان, never a مكان', 'always negated', 'always a جملة فعلية'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'التخصيص',
          kind: 'mcq',
          prompt: '﴿الحمد لله﴾ illustrates which meaning of اللام؟',
          options: ['التخصيص (الاستحقاق)', 'الملك', 'شبه الملك (النسبة)', 'التشبيه'],
          correct: 0,
        },
        {
          title: 'الملك',
          kind: 'mcq',
          prompt: '﴿له ما في السماوات وما في الأرض﴾ illustrates which meaning of اللام؟',
          options: ['الملك', 'التخصيص', 'شبه الملك', 'الظرفية'],
          correct: 0,
        },
        {
          title: 'شبه الملك',
          kind: 'mcq',
          prompt: '﴿لآيات للمؤمنين﴾ illustrates which meaning of اللام؟',
          options: ['شبه الملك (النسبة)', 'الملك', 'التخصيص', 'الاستعلاء'],
          correct: 0,
        },
        {
          title: 'اللام: المفعول به',
          kind: 'mcq',
          prompt: 'In ﴿ووهبنا له إسحاق ويعقوب﴾, له functions as:',
          options: ['المفعول به (غير صريح)', 'المفعول فيه', 'المفعول له', 'الحال'],
          correct: 0,
        },
        {
          title: 'اللام: المفعول فيه للمكان',
          kind: 'mcq',
          prompt: 'In ﴿دعانا لجنبه أو قاعدا أو قائما﴾, لجنبه functions as:',
          options: ['المفعول فيه (مكان)', 'المفعول فيه (زمان)', 'المفعول له', 'الحال'],
          correct: 0,
        },
        {
          title: 'اللام: المفعول فيه للزمان',
          kind: 'mcq',
          prompt: 'In ﴿ونضع الموازين القسط ليوم القيامة﴾, ليوم القيامة functions as:',
          options: ['المفعول فيه (زمان)', 'المفعول فيه (مكان)', 'المفعول له', 'المفعول معه'],
          correct: 0,
        },
        {
          title: 'لام التعليل',
          kind: 'mcq',
          prompt: '﴿ليكون للعالمين نذيرا﴾ illustrates:',
          options: ['لام التعليل — an outcome intended by the agent', 'لام العاقبة — an unintended outcome', 'لام الجحود', 'لام التقوية'],
          correct: 0,
        },
        {
          title: 'أسماء أخرى للام العاقبة',
          kind: 'mcq',
          prompt: 'لام العاقبة is also called:',
          options: ['لام الصيرورة أو لام المآل', 'لام التعليل أو لام الحكمة', 'لام الجحود', 'لام التبيين'],
          correct: 0,
        },
        {
          title: 'في: المفعول به',
          kind: 'mcq',
          prompt: 'In ﴿ويسارعون في الخيرات﴾, في الخيرات functions as:',
          options: ['المفعول به (غير صريح)', 'المفعول فيه', 'الحال', 'المفعول له'],
          correct: 0,
        },
        {
          title: 'في: المفعول له',
          kind: 'mcq',
          prompt: 'In ﴿قالت فذلكن الذي لمتنني فيه﴾, فيه functions as:',
          options: ['المفعول له', 'المفعول به', 'الحال', 'المفعول معه'],
          correct: 0,
        },
        {
          title: 'عدد وظائف في',
          kind: 'mcq',
          prompt: 'How many وظائف can في with its مجرور take؟',
          options: ['أربعة', 'ثلاثة', 'خمسة', 'ستة'],
          correct: 0,
        },
        {
          title: 'الكاف: المفعول المطلق',
          kind: 'mcq',
          prompt: 'In ﴿رب ارحمهما كما ربياني صغيرا﴾, كما functions as:',
          options: ['المفعول المطلق', 'المفعول له', 'الحال', 'التمييز'],
          correct: 0,
        },
        {
          title: 'الكاف: المفعول له',
          kind: 'mcq',
          prompt: 'In ﴿واذكروه كما هداكم﴾, كما functions as:',
          options: ['المفعول له', 'المفعول المطلق', 'الحال', 'العوض'],
          correct: 0,
        },
        {
          title: 'حتى: المفعول فيه للمكان',
          kind: 'mcq',
          prompt: 'سرنا حتى مكة — حتى مكة functions as:',
          options: ['المفعول فيه (مكان)', 'المفعول فيه (زمان)', 'المفعول له', 'الحال'],
          correct: 0,
        },
        {
          title: 'حتى: المفعول له',
          kind: 'mcq',
          prompt: 'In ﴿وقاتلوهم حتى لا تكون فتنة﴾, حتى لا تكون فتنة functions as:',
          options: ['المفعول له', 'المفعول فيه', 'الحال', 'التمييز'],
          correct: 0,
        },
        {
          title: 'حتى الصحيح والخاطئ',
          kind: 'mcq',
          prompt: 'Which of these is a valid use of حتى, given its restriction on what follows it؟',
          options: ['قمت الليل حتى الصباح', 'قمت الليل حتى نصفه', 'قمت الليل حتى وسطه', 'قمت الليل حتى بعضه'],
          correct: 0,
        },
        {
          title: 'الظرفية أم معاني اللام؟',
          kind: 'mcq',
          prompt: 'Which حرف has الظرفية as its core meaning — distinct from any of the three meanings of اللام؟',
          options: ['في', 'اللام', 'الكاف', 'حتى'],
          correct: 0,
        },
        {
          title: 'قيد مشترك',
          kind: 'mcq',
          prompt: 'الكاف and حتى share which restriction on their مجرور؟',
          options: ['It must be an اسم ظاهر', 'It must be مؤنث', 'It must be a ضمير', 'It must be جمع'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿الْحَمْدُ لِلَّهِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which meaning of اللام لِلَّهِ illustrates.',
          sentence: 'الْحَمْدُ لِلَّهِ',
          translation: 'Praise be to Allah.',
          cells: ['الْحَمْدُ', 'لِلَّهِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'التخصيص' },
            ] },
          ],
          distractors: ['الملك', 'شبه الملك'],
        },
        {
          title: 'تركيب: ﴿لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which meaning of اللام لَهُ illustrates.',
          sentence: 'لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ',
          translation: 'To Him belongs whatever is in the heavens and whatever is on the earth.',
          cells: ['لَهُ', 'مَا', 'فِي', 'السَّمَاوَاتِ', 'وَمَا', 'فِي', 'الْأَرْضِ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'الملك' },
            ] },
          ],
          distractors: ['التخصيص', 'شبه الملك'],
        },
        {
          title: 'تركيب: ﴿لَآيَاتٍ لِّلْمُؤْمِنِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which meaning of اللام لِلْمُؤْمِنِينَ illustrates.',
          sentence: 'لَآيَاتٍ لِّلْمُؤْمِنِينَ',
          translation: 'Surely [these are] signs for the believers.',
          cells: ['لَآيَاتٍ', 'لِلْمُؤْمِنِينَ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'شبه الملك' },
            ] },
          ],
          distractors: ['التخصيص', 'الملك'],
        },
        {
          title: 'تركيب: ﴿وَوَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of لَهُ.',
          sentence: 'وَوَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ',
          translation: 'And We granted him Isaac and Jacob.',
          cells: ['وَهَبْنَا', 'لَهُ', 'إِسْحَاقَ', 'وَيَعْقُوبَ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'المفعول به' },
            ] },
          ],
          distractors: ['المفعول فيه (مكان)', 'المفعول له'],
        },
        {
          title: 'تركيب: ﴿دَعَانَا لِجَنبِهِ أَوْ قَاعِدًا أَوْ قَائِمًا﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of لِجَنبِهِ.',
          sentence: 'دَعَانَا لِجَنبِهِ أَوْ قَاعِدًا أَوْ قَائِمًا',
          translation: 'He calls upon Us lying on his side, or sitting, or standing.',
          cells: ['دَعَانَا', 'لِجَنبِهِ', 'أَوْ', 'قَاعِدًا', 'أَوْ', 'قَائِمًا'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'المفعول فيه (مكان)' },
            ] },
          ],
          distractors: ['المفعول فيه (زمان)', 'المفعول به'],
        },
        {
          title: 'تركيب: ﴿وَنَضَعُ الْمَوَازِينَ الْقِسْطَ لِيَوْمِ الْقِيَامَةِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of لِيَوْمِ الْقِيَامَةِ.',
          sentence: 'وَنَضَعُ الْمَوَازِينَ الْقِسْطَ لِيَوْمِ الْقِيَامَةِ',
          translation: 'And We place the scales of justice for the Day of Resurrection.',
          cells: ['نَضَعُ', 'الْمَوَازِينَ', 'الْقِسْطَ', 'لِيَوْمِ', 'الْقِيَامَةِ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 4, role: 'المفعول فيه (زمان)' },
            ] },
          ],
          distractors: ['المفعول فيه (مكان)', 'المفعول له'],
        },
        {
          title: 'تركيب: ﴿لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا﴾',
          kind: 'tarkeeb',
          instruction: 'Classify this اللام: لام التعليل (intended) or لام العاقبة (unintended)؟',
          sentence: 'لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا',
          translation: 'That he may be a warner to the worlds.',
          cells: ['لِيَكُونَ', 'لِلْعَالَمِينَ', 'نَذِيرًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 2, role: 'لام التعليل' },
            ] },
          ],
          distractors: ['لام العاقبة', 'لام الجحود'],
        },
        {
          title: 'تركيب: ﴿فَالْتَقَطَهُ آلُ فِرْعَوْنَ لِيَكُونَ لَهُمْ عَدُوًّا وَحَزَنًا﴾',
          kind: 'tarkeeb',
          instruction: 'Classify this اللام: لام التعليل (intended) or لام العاقبة (unintended)؟',
          sentence: 'فَالْتَقَطَهُ آلُ فِرْعَوْنَ لِيَكُونَ لَهُمْ عَدُوًّا وَحَزَنًا',
          translation: "So Pharaoh's family picked him up so that he would become an enemy and a grief for them.",
          cells: ['الْتَقَطَهُ', 'آلُ', 'فِرْعَوْنَ', 'لِيَكُونَ', 'لَهُمْ', 'عَدُوًّا', 'وَحَزَنًا'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 6, role: 'لام العاقبة' },
            ] },
          ],
          distractors: ['لام التعليل', 'لام الجحود'],
        },
        {
          title: 'تركيب: ﴿وَيُسَارِعُونَ فِي الْخَيْرَاتِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of فِي الْخَيْرَاتِ.',
          sentence: 'وَيُسَارِعُونَ فِي الْخَيْرَاتِ',
          translation: 'And they hasten to good deeds.',
          cells: ['يُسَارِعُونَ', 'فِي', 'الْخَيْرَاتِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'المفعول به' },
            ] },
          ],
          distractors: ['المفعول فيه (مكان)', 'الحال'],
        },
        {
          title: 'تركيب: ﴿رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of فِي الدُّنْيَا.',
          sentence: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً',
          translation: 'Our Lord, give us in this world [that which is] good.',
          cells: ['آتِنَا', 'فِي', 'الدُّنْيَا', 'حَسَنَةً'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'المفعول فيه (مكان)' },
            ] },
          ],
          distractors: ['المفعول فيه (زمان)', 'المفعول به'],
        },
        {
          title: 'تركيب: ﴿شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of فِيهِ.',
          sentence: 'شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ',
          translation: 'The month of Ramadan in which the Quran was sent down.',
          cells: ['شَهْرُ', 'رَمَضَانَ', 'الَّذِي', 'أُنزِلَ', 'فِيهِ', 'الْقُرْآنُ'],
          rows: [
            { position: 'above', labels: [
              { start: 4, end: 4, role: 'المفعول فيه (زمان)' },
            ] },
          ],
          distractors: ['المفعول فيه (مكان)', 'المفعول معه'],
        },
        {
          title: 'تركيب: ﴿فَادْخُلِي فِي عِبَادِي﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the وظيفة of فِي عِبَادِي.',
          sentence: 'فَادْخُلِي فِي عِبَادِي',
          translation: 'So enter among My servants.',
          cells: ['ادْخُلِي', 'فِي', 'عِبَادِي'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'المفعول معه' },
            ] },
          ],
          distractors: ['المفعول به', 'المفعول فيه (مكان)'],
        },
      ],
    },

    // ---------------------------------------------------------------- L5
    {
      id: 'l5',
      title: 'أحرف القسم ومذ ومنذ',
      subtitle: 'Oaths and Duration — the three أحرف القسم, and مذ/منذ for elapsed time',
      sourceRef: 'pp. 51–53',
      concepts: [
        {
          heading: 'أحرف القسم الثلاثة، وإعرابها',
          lines: [
            { html: `The three <bdi>أَحْرُفُ الْقَسَم</bdi> are <bdi>الْوَاو</bdi>, <bdi>التَّاء</bdi>, and <bdi>الْبَاء</bdi> — the original one (<bdi>أَصْلُ أَحْرُفِ الْقَسَم</bdi>) being <bdi>بَاءُ الْقَسَم</bdi>.`, list: false },
            { table: { headers: ['حرف', 'Example'], rows: [
              ['وَاوُ الْقَسَم', '﴿وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ﴾'],
              ['تَاءُ الْقَسَم', '﴿تَاللَّهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾'],
            ] } },
            { html: `Whichever حرف is used, the حرف plus its مجرور stands as the <bdi>الْمَفْعُولُ بِهِ</bdi> of an omitted <bdi>فِعْل</bdi> whose <bdi>تَقْدِير</bdi> is <bdi>أُقْسِمُ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `Which حرف قسم is the "original" (أصل) of the أحرف القسم؟`,
            kind: 'mcq',
            options: ['باء القسم', 'واو القسم', 'تاء القسم', 'لام القسم'],
            correct: 0,
          },
        },
        {
          heading: 'قيود أحرف القسم الثلاثة',
          lines: [
            { html: `Each حرف قسم carries its own restrictions.`, list: false },
            { html: `<bdi>تَاءُ الْقَسَم</bdi> is restricted to <bdi>لَفْظُ الْجَلَالَة</bdi> — <bdi>تَاللَّهِ</bdi> is valid, but not <bdi>تَالْعَصْرِ</bdi> or <bdi>تَالرَّحْمَٰنِ</bdi>.`, list: true, bullet: true },
            { html: `The مجرور of <bdi>وَاوُ الْقَسَم</bdi> and <bdi>تَاءُ الْقَسَم</bdi> can only be an <bdi>اسم ظاهر</bdi>, never a <bdi>ضَمِير</bdi>.`, list: true, bullet: true },
            { html: `With <bdi>بَاءُ الْقَسَم</bdi> the <bdi>فِعْلُ الْقَسَم</bdi> (أُقْسِمُ) may be either mentioned (﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾) or omitted (﴿فَبِعِزَّتِكَ لَأُغْوِيَنَّهُمْ أَجْمَعِينَ﴾); with الواو and التاء it is never mentioned.`, list: true, bullet: true },
            { html: `Unlike الواو and التاء, الباء can also attach to a <bdi>ضَمِير</bdi>, not only an اسم ظاهر — as in بِكَ لَأَفْعَلَنَّ.`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `Can the فعل القسم be mentioned with واو القسم or تاء القسم؟`,
            kind: 'mcq',
            options: ['No — with الواو and التاء the فعل القسم is always omitted', 'Yes, always mentioned with both', 'Only with واو القسم', 'Only with تاء القسم'],
            correct: 0,
          },
        },
        {
          heading: 'مذ ومنذ: وظيفتهما وشرط الفعل قبلهما',
          lines: [
            { html: `<bdi>مُذْ</bdi> and <bdi>مُنْذُ</bdi> with their مجرور mark <bdi>الْمَفْعُولُ فِيهِ</bdi>, as in مَا تَرَكْتُ صَلَاةً مُذْ يَوْمِ الْبُلُوغِ and تَجِبُ الصَّلَاةُ مُنْذُ يَوْمِ الْبُلُوغِ.`, list: false },
            { html: `The فعل before them must be <bdi>فِعْلًا مَاضِيًا</bdi> that is either <b>negated</b> (مَا رَأَيْتُهُ مُنْذُ يَوْمِ الْجُمُعَةِ) or <b>affirmative and extended in duration</b> (نِمْتُ مُنْذُ بَعْدِ الْعِشَاءِ) — not a momentary affirmative like سَقَطْتُ مُنْذُ طُلُوعِ الشَّمْسِ.`, list: false },
            { html: `Their مجرور, in turn, can only be an <bdi>اسم ظاهر</bdi> denoting <b>past or present time</b>.`, list: false },
          ],
          exercise: {
            prompt: `What condition applies to the فعل preceding مذ and منذ؟`,
            kind: 'mcq',
            options: ['It must be فعلا ماضيا, either negated or affirmative-and-extended', 'It must always be فعل أمر', 'It must always be فعل مضارع', 'There is no condition on it'],
            correct: 0,
          },
        },
        {
          heading: 'مذ ومنذ: التعريف والإضافة إلى جملة',
          lines: [
            { html: `Definiteness of the مجرور maps onto an English distinction: definite (<bdi>مَعْرِفَة</bdi>) reads as "since" (مُنْذُ الْجُمُعَةِ = since Friday), while indefinite (<bdi>نَكِرَة</bdi>) reads as "for" (مُنْذُ يَوْمَيْنِ = for two days).`, list: false },
            { html: `The same split governs meaning: مذ/منذ carry the sense of <bdi>فِي</bdi> when the مجرور is a definite اسم denoting the <b>present</b> (مَا رَأَيْتُهُ مُنْذُ الْيَوْمِ), and the sense of <bdi>مِنْ وَإِلَى</bdi> when it denotes the <b>past</b>.`, list: false },
            { html: `Their إعراب follows the same logic:`, list: false },
            { table: { headers: ['With a present-time اسم', 'With a past-time اسم'], rows: [
              ['مَجْرُور وُجُوبًا (both مذ and منذ)', 'منذ: مَجْرُور تَرْجِيحًا — مذ: مَرْفُوع preferred instead (مُذْ يَوْمَانِ)'],
            ] } },
            { html: `When a full <bdi>جُمْلَة</bdi> follows مذ/منذ, they are treated as <b>أسماء in <bdi>إِضَافَة</bdi></b> to it — because a جر حرف cannot enter upon a جملة, only an اسم مضاف can.`, list: false },
          ],
          exercise: {
            prompt: `Why must مذ/منذ be أسماء when followed by a جملة؟`,
            kind: 'mcq',
            options: ['Because a جر حرف cannot enter upon a جملة, and only an اسم can be مضاف to one', 'Because جمل are always مبنية', 'Because مذ/منذ are never حروف at all', 'There is no real reason — it is arbitrary'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'What is the إعراب of واو القسم / تاء القسم with their مجرور؟',
          options: ['المفعول به of an omitted فعل تقديره أقسم', 'المفعول المطلق', 'الفاعل', 'الحال'],
          correct: 0,
        },
        {
          q: 'What restriction applies to تاء القسم specifically؟',
          options: ['It is restricted to لفظ الجلالة', 'It can attach to any اسم', 'It can attach to a ضمير', 'It requires a negated فعل'],
          correct: 0,
        },
        {
          q: 'What can باء القسم attach to that الواو and التاء cannot؟',
          options: ['A ضمير (مضمر), as well as an اسم ظاهر', 'A جملة فعلية', 'A فعل مضارع', 'Nothing — all three behave identically'],
          correct: 0,
        },
        {
          q: 'What function do مذ and منذ with their مجرور take؟',
          options: ['المفعول فيه', 'المفعول به', 'المفعول له', 'الحال'],
          correct: 0,
        },
        {
          q: 'How does definiteness of the مجرور of منذ map onto English؟',
          options: ['معرفة → since; نكرة → for', 'معرفة → for; نكرة → since', 'Both always mean since', 'Definiteness has no effect on meaning'],
          correct: 0,
        },
        {
          q: 'What is the إعراب of the اسم after مذ with a past-time meaning؟',
          options: ['مرفوع is preferred (though مجرور is also possible)', 'مجرور وجوبا, no alternative', 'منصوب دائما', 'It cannot follow a past-time اسم at all'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'مثال واو القسم',
          kind: 'mcq',
          prompt: '﴿والعصر إن الإنسان لفي خسر﴾ illustrates:',
          options: ['واو القسم', 'تاء القسم', 'باء القسم', 'لام القسم'],
          correct: 0,
        },
        {
          title: 'مثال تاء القسم',
          kind: 'mcq',
          prompt: '﴿تالله تفتأ تذكر يوسف﴾ illustrates:',
          options: ['تاء القسم', 'واو القسم', 'باء القسم', 'كاف القسم'],
          correct: 0,
        },
        {
          title: 'تالله لا تالعصر',
          kind: 'mcq',
          prompt: 'Why is تَالْعَصْرِ not valid Arabic, unlike تَاللَّهِ؟',
          options: ['تاء القسم is restricted to لفظ الجلالة alone', 'العصر cannot ever be مجرورا', 'تاء القسم does not exist', 'العصر is not a اسم'],
          correct: 0,
        },
        {
          title: 'مجرور الواو والتاء',
          kind: 'mcq',
          prompt: 'The مجرور of واو القسم and تاء القسم must be:',
          options: ['اسم ظاهر, never a ضمير', 'ضمير فقط', 'فعل مضارع', 'جملة فعلية'],
          correct: 0,
        },
        {
          title: 'ذكر فعل القسم مع الباء',
          kind: 'mcq',
          prompt: '﴿لا أقسم بيوم القيامة﴾ shows فعل القسم:',
          options: ['mentioned, since الباء allows either mentioning or omitting it', 'omitted, since الباء never allows mentioning it', 'replaced by a ضمير', 'impossible with الباء'],
          correct: 0,
        },
        {
          title: 'حذف فعل القسم مع الباء',
          kind: 'mcq',
          prompt: '﴿فبعزتك لأغوينهم أجمعين﴾ shows فعل القسم:',
          options: ['omitted — one of the two options الباء allows', 'mentioned explicitly', 'replaced by واو القسم', 'ungrammatical'],
          correct: 0,
        },
        {
          title: 'الباء تتصل بالمضمر',
          kind: 'mcq',
          prompt: 'بِكَ لَأَفْعَلَنَّ shows باء القسم attaching to:',
          options: ['a ضمير (مضمر)', 'only an اسم ظاهر', 'a جملة فعلية', 'nothing — this phrase is invalid'],
          correct: 0,
        },
        {
          title: 'مذ ومنذ: المثال',
          kind: 'mcq',
          prompt: 'ما تركت صلاة مذ يوم البلوغ — مذ يوم البلوغ functions as:',
          options: ['المفعول فيه', 'المفعول به', 'الحال', 'التمييز'],
          correct: 0,
        },
        {
          title: 'شرط الفعل: منفي',
          kind: 'mcq',
          prompt: 'ما رأيته منذ يوم الجمعة is valid because the فعل before منذ is:',
          options: ['ماضٍ منفي', 'ماضٍ مثبت لحظي', 'مضارع', 'فعل أمر'],
          correct: 0,
        },
        {
          title: 'شرط الفعل: مثبت ممتد',
          kind: 'mcq',
          prompt: 'نمت منذ بعد العشاء is valid because نام here is:',
          options: ['ماضٍ مثبت ممتد (extended in duration)', 'ماضٍ مثبت لحظي (momentary)', 'مضارع', 'منفي'],
          correct: 0,
        },
        {
          title: 'شرط الفعل: ما لا يصح',
          kind: 'mcq',
          prompt: 'سقطت منذ طلوع الشمس is NOT valid usage because سقط here is:',
          options: ['ماضٍ مثبت لحظي — momentary, not extended', 'ماضٍ منفي', 'مضارع', 'فعل أمر'],
          correct: 0,
        },
        {
          title: 'مذ/منذ بمعنى في',
          kind: 'mcq',
          prompt: 'مذ/منذ carry the meaning of في when the مجرور is:',
          options: ['a definite اسم denoting the present', 'an indefinite اسم denoting the past', 'any ضمير', 'a فعل مضارع'],
          correct: 0,
        },
        {
          title: 'since أم for؟',
          kind: 'mcq',
          prompt: 'منذ يومين, with an indefinite مجرور, translates into English as:',
          options: ['for two days', 'since two days', 'two days ago exactly', 'never'],
          correct: 0,
        },
        {
          title: 'إعراب بعد منذ مع الماضي',
          kind: 'mcq',
          prompt: 'منذ يومين — the إعراب of the اسم after منذ here is:',
          options: ['مجرور, preferred (ترجيحا) with past-time أسماء', 'مرفوع وجوبا', 'منصوب وجوبا', 'لا إعراب له'],
          correct: 0,
        },
        {
          title: 'إعراب بعد مذ مع الماضي',
          kind: 'mcq',
          prompt: 'مذ يومان — the إعراب of the اسم after مذ here is:',
          options: ['مرفوع, preferred with past-time أسماء', 'مجرور وجوبا, لا بديل', 'منصوب وجوبا', 'لا إعراب له'],
          correct: 0,
        },
        {
          title: 'جملة بعد مذ',
          kind: 'mcq',
          prompt: 'ما اغتبت أحدا مذ علمت الغيبة محرمة — here مذ is treated as:',
          options: ['an اسم مضاف to the جملة after it', 'a حرف جر عادي', 'فعل ماضٍ', 'ضمير منفصل'],
          correct: 0,
        },
        {
          title: 'المفعول فيه بمذ ومنذ',
          kind: 'mcq',
          prompt: 'تجب الصلاة منذ يوم البلوغ — منذ يوم البلوغ functions as:',
          options: ['المفعول فيه', 'المفعول به', 'الحال', 'العوض'],
          correct: 0,
        },
        {
          title: 'أصل أحرف القسم',
          kind: 'mcq',
          prompt: 'باء القسم is called the أصل of the أحرف القسم because:',
          options: ['الواو and التاء are treated as substitutes branching from it', 'it is the only one mentioned in the Quran', 'it is the newest of the three', 'it never attaches to a ضمير'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which حرف قسم appears.',
          sentence: 'وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',
          translation: 'By Time, indeed mankind is in loss.',
          cells: ['وَ', 'الْعَصْرِ', 'إِنَّ', 'الْإِنسَانَ', 'لَفِي', 'خُسْرٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'واو القسم' },
            ] },
          ],
          distractors: ['تاء القسم', 'باء القسم'],
        },
        {
          title: 'تركيب: ﴿تَاللَّهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which حرف قسم appears.',
          sentence: 'تَاللَّهِ تَفْتَأُ تَذْكُرُ يُوسُفَ',
          translation: 'By Allah, you will not cease remembering Joseph.',
          cells: ['تَاللَّهِ', 'تَفْتَأُ', 'تَذْكُرُ', 'يُوسُفَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تاء القسم' },
            ] },
          ],
          distractors: ['واو القسم', 'باء القسم'],
        },
        {
          title: 'تركيب: ﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which حرف قسم appears, and whether فعل القسم is mentioned or omitted.',
          sentence: 'لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ',
          translation: 'I swear by the Day of Resurrection.',
          cells: ['أُقْسِمُ', 'بِيَوْمِ', 'الْقِيَامَةِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'باء القسم' },
              { start: 0, end: 0, role: 'فعل القسم مذكور' },
            ] },
          ],
          distractors: ['واو القسم', 'تاء القسم'],
        },
        {
          title: 'تركيب: مَا رَأَيْتُهُ مُنْذُ يَوْمِ الْجُمُعَةِ',
          kind: 'tarkeeb',
          instruction: 'Classify رَأَيْتُهُ, the فعل before منذ.',
          sentence: 'مَا رَأَيْتُهُ مُنْذُ يَوْمِ الْجُمُعَةِ',
          translation: 'I have not seen him since Friday.',
          cells: ['مَا', 'رَأَيْتُهُ', 'مُنْذُ', 'يَوْمِ', 'الْجُمُعَةِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'ماضٍ منفي' },
            ] },
          ],
          distractors: ['ماضٍ مثبت ممتد', 'ماضٍ مثبت لحظي'],
        },
        {
          title: 'تركيب: نِمْتُ مُنْذُ بَعْدِ الْعِشَاءِ',
          kind: 'tarkeeb',
          instruction: 'Classify نِمْتُ, the فعل before منذ.',
          sentence: 'نِمْتُ مُنْذُ بَعْدِ الْعِشَاءِ',
          translation: 'I have been sleeping since after the night prayer.',
          cells: ['نِمْتُ', 'مُنْذُ', 'بَعْدِ', 'الْعِشَاءِ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'ماضٍ مثبت ممتد' },
            ] },
          ],
          distractors: ['ماضٍ منفي', 'ماضٍ مثبت لحظي'],
        },
        {
          title: 'تركيب: سَقَطْتُ مُنْذُ طُلُوعِ الشَّمْسِ',
          kind: 'tarkeeb',
          instruction: 'Classify سَقَطْتُ, the فعل before منذ — and is this usage صحيح؟',
          sentence: 'سَقَطْتُ مُنْذُ طُلُوعِ الشَّمْسِ',
          translation: '"I fell since sunrise" (momentary — invalid usage).',
          cells: ['سَقَطْتُ', 'مُنْذُ', 'طُلُوعِ', 'الشَّمْسِ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'ماضٍ مثبت لحظي (غير صحيح)' },
            ] },
          ],
          distractors: ['ماضٍ منفي', 'ماضٍ مثبت ممتد'],
        },
        {
          title: 'تركيب: لَمْ أَرَهُ مُنْذُ الْجُمُعَةِ',
          kind: 'tarkeeb',
          instruction: 'مُنْذُ الْجُمُعَةِ has a معرفة مجرور — how does it read in English?',
          sentence: 'لَمْ أَرَهُ مُنْذُ الْجُمُعَةِ',
          translation: 'I have not seen him ___ Friday.',
          cells: ['لَمْ', 'أَرَهُ', 'مُنْذُ', 'الْجُمُعَةِ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'since' },
            ] },
          ],
          distractors: ['for', 'until'],
        },
        {
          title: 'تركيب: غِبْتُ مُنْذُ يَوْمَيْنِ',
          kind: 'tarkeeb',
          instruction: 'مُنْذُ يَوْمَيْنِ has a نكرة مجرور — how does it read in English?',
          sentence: 'غِبْتُ مُنْذُ يَوْمَيْنِ',
          translation: 'I have been absent ___ two days.',
          cells: ['غِبْتُ', 'مُنْذُ', 'يَوْمَيْنِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'for' },
            ] },
          ],
          distractors: ['since', 'until'],
        },
        {
          title: 'تركيب: مَا رَأَيْتُهُ مُنْذُ الْيَوْمِ',
          kind: 'tarkeeb',
          instruction: 'الْيَوْمِ is a present-time معرفة. What is the إعراب of the اسم after منذ here?',
          sentence: 'مَا رَأَيْتُهُ مُنْذُ الْيَوْمِ',
          translation: 'I have not seen him today.',
          cells: ['مَا', 'رَأَيْتُهُ', 'مُنْذُ', 'الْيَوْمِ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 3, role: 'مجرور وجوبا' },
            ] },
          ],
          distractors: ['مجرور ترجيحا', 'مرفوع مفضل'],
        },
        {
          title: 'تركيب: هُوَ هُنَا مُذْ يَوْمَانِ',
          kind: 'tarkeeb',
          instruction: 'يَوْمَانِ is past-time. With مذ specifically, what is the preferred إعراب؟',
          sentence: 'هُوَ هُنَا مُذْ يَوْمَانِ',
          translation: 'He has been here for two days.',
          cells: ['هُوَ', 'هُنَا', 'مُذْ', 'يَوْمَانِ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 3, role: 'مرفوع مفضل' },
            ] },
          ],
          distractors: ['مجرور وجوبا', 'مجرور ترجيحا'],
        },
      ],
    },

    // ---------------------------------------------------------------- L6
    {
      id: 'l6',
      title: 'الشبيه بالزائد والزائد',
      subtitle: 'Beyond the Thirteen — حروف شبيهة بالزائد, حروف زائدة, and when a حرف الجر disappears',
      sourceRef: 'pp. 53–60',
      concepts: [
        {
          heading: 'حروف الشبيه بالزائد الثلاثة: رُبَّ',
          lines: [
            { html: `Three حروف make up <bdi>الشَّبِيهُ بِالزَّائِد</bdi>: <bdi>رُبَّ</bdi>, <bdi>مِنِ التَّبْعِيضِيَّة</bdi>, and <bdi>حَاشَا</bdi>.`, list: false },
            { html: `<bdi>رُبَّ</bdi> expresses either <bdi>تَكْثِير</bdi> (abundance) or <bdi>تَقْلِيل</bdi> (scarcity) of its مجرور — context (<bdi>الْقَرِينَة</bdi>) decides which, as in رُبَّ شَهْوَةٍ تُورِثُ حُزْنًا طَوِيلًا.`, list: false },
            { html: `It must appear at the <bdi>صَدْرُ الْكَلَام</bdi> — the very start of the utterance — though a vocative حرف may precede it, as in «يَا رُبَّ كَاسِيَاتٍ فِي الدُّنْيَا عَارِيَاتٍ فِي الْآخِرَةِ».`, list: false },
            { html: `Its مجرور can only be an indefinite overt اسم (اسم ظاهر نكرة), or an ambiguous ضمير clarified by a تمييز, as in رُبَّهُ رَجُلًا كَرِيمًا لَقِيتُهُ — and it is usually <bdi>مَوْصُوف</bdi> as well, by a single word or by a جملة.`, list: false },
          ],
          exercise: {
            prompt: `Where must رُبَّ appear in the جملة? Any exception؟`,
            kind: 'mcq',
            options: ['Only at the صدر الكلام — with the exception that a vocative حرف may precede it', 'It may appear anywhere in the جملة freely', 'Only at the very end of the جملة', 'It can never begin a جملة'],
            correct: 0,
          },
        },
        {
          heading: 'رُبَّ: ما الكافة، والتخفيف، والحذف؛ ومِن التبعيضية وحاشا',
          lines: [
            { html: `Adding <bdi>مَا الْكَافَّة</bdi> to رُبَّ stops it from operating (<bdi>كَفَّتْهَا عَنِ الْعَمَل</bdi>), shifts the تكثير/تقليل onto the <b>فعل</b> instead, and lets it enter upon <bdi>جُمَل فِعْلِيَّة</bdi> (رُبَّمَا يَصُومُ زَيْدٌ) and definite أسماء (رُبَّمَا زَيْدٌ يَصُومُ).`, list: false },
            { html: `رُبَّمَا can also be lightened (<bdi>تَخْفِيف</bdi>) to <bdi>رُبَمَا</bdi>, as in ﴿رُبَمَا يَوَدُّ الَّذِينَ كَفَرُوا لَوْ كَانُوا مُسْلِمِينَ﴾; رُبَّ itself can be omitted while its عمل remains — frequently after <bdi>الْوَاو</bdi>, rarely after <bdi>الْفَاء</bdi> — as in وَلَيْلٍ كَمَوْجِ الْبَحْرِ أَرْخَىٰ سُدُولَهُ.`, list: false },
            { html: `مِنْ can also carry رُبَّ's meaning when <bdi>مَا</bdi> follows it (<bdi>مِمَّا</bdi>).`, list: false },
            { html: `<bdi>مِنِ التَّبْعِيضِيَّة</bdi> ("some of") appears in ﴿وَلَقَدْ جَاءَكَ مِن نَّبَإِ الْمُرْسَلِينَ﴾ and عِنْدِي مِنْ مَاءٍ; <bdi>حَاشَا</bdi> appears in هَلَكَ النَّاسُ حَاشَا الْعَالِمِ.`, list: false },
            { html: `All three are called شبيه بالزائد because — like الزائد — neither هي nor its مجرور is ever a معمول of a فعل or شبه فعل, but unlike الزائد, each still carries a real meaning of its own.`, list: false },
          ],
          exercise: {
            prompt: `Understanding: why are رب، من التبعيضية، حاشا called "similar to the redundant" (شبيه بالزائد)؟`,
            kind: 'mcq',
            options: ['Neither they nor their مجرور is ever a معمول of a فعل or شبه فعل, yet each still carries a real meaning', 'Because they can all be omitted freely', 'Because they only appear in poetry', 'Because they never take a مجرور at all'],
            correct: 0,
          },
        },
        {
          heading: 'حروف الجر الزائدة الأربعة: الباء الزائدة قياسا',
          lines: [
            { html: `Four حروف make up <bdi>حُرُوفُ الْجَرِّ الزَّائِدَة</bdi>: <bdi>الْبَاءُ الزَّائِدَة</bdi>, <bdi>مِنِ الزَّائِدَة</bdi>, <bdi>اللَّامُ الزَّائِدَة</bdi>, and <bdi>الْكَافُ الزَّائِدَة</bdi>.`, list: false },
            { html: `الباء الزائدة occurs by regular rule (<bdi>قِيَاسًا</bdi>) in five places:`, list: false },
            { table: { headers: ['#', 'Place', 'Example'], rows: [
              ['1', 'خَبَر of نَفْي with لَيْسَ and مَا', '﴿وَأَنَّ اللَّهَ لَيْسَ بِظَلَّامٍ لِّلْعَبِيدِ﴾ / ﴿وَمَا رَبُّكَ بِظَلَّامٍ لِّلْعَبِيدِ﴾'],
              ['2', 'خبر of اسْتِفْهَام with هَلْ', 'هَلْ زَيْدٌ بِقَائِمٍ؟'],
              ['3', 'التَّأْكِيدُ الْمَعْنَوِيّ with نَفْس', 'نَظَّفَ الْأَمِيرُ الْمَسْجِدَ بِنَفْسِهِ'],
              ['4', 'فَاعِل of أَفْعِلْ بِهِ (تَعَجُّب)', '﴿أَسْمِعْ بِهِمْ وَأَبْصِرْ﴾'],
              ['5', 'مُبْتَدَأ after إِذَا الْفُجَائِيَّة', 'دَخَلَ الرَّجُلُ فَإِذَا بِابْنِهِ يُصَلِّي'],
            ] } },
          ],
          exercise: {
            prompt: `Where does الباء الزائدة occur by regular rule (قياسا)? (5 places)`,
            kind: 'mcq',
            options: [
              'خبر نفي (ليس/ما)، خبر استفهام (هل)، تأكيد معنوي (نفس)، فاعل أفعِل به، مبتدأ بعد إذا الفجائية',
              'خبر نفي (ليس/ما)، خبر استفهام (هل)، تأكيد معنوي (نفس)، مفعول به، مبتدأ بعد إذا الفجائية',
              'خبر إثبات، خبر استفهام (هل)، تأكيد معنوي (نفس)، فاعل أفعِل به، مبتدأ بعد إذا الفجائية',
              'خبر نفي (ليس/ما)، خبر استفهام (هل)، توكيد لفظي، فاعل أفعِل به، خبر بعد إذا الفجائية',
            ],
            correct: 0,
          },
        },
        {
          heading: 'الباء الزائدة سماعا؛ ومِن الزائدة',
          lines: [
            { html: `الباء الزائدة also occurs by transmission alone (<bdi>سَمَاعًا</bdi>) in three places:`, list: false },
            { html: `on the مُبْتَدَأ with the word حَسْب — «بِحَسْبِكَ أَن تَصُومَ كُلَّ شَهْرٍ ثَلَاثَةَ أَيَّامٍ»`, list: true, bullet: true },
            { html: `on the خَبَر of حسب — حَسْبُكَ بِزَيْدٍ`, list: true, bullet: true },
            { html: `on the فَاعِل of كَفَى when it means حسب — ﴿كَفَى بِاللَّهِ شَهِيدًا﴾`, list: true, bullet: true },
            { html: `كفى does NOT take this زائدة باء when it instead means <bdi>وَقَى</bdi> (to protect), as in ﴿وَكَفَى اللَّهُ الْمُؤْمِنِينَ الْقِتَالَ﴾.`, list: false },
            { html: `<bdi>مِنِ الزَّائِدَة</bdi> occurs on the تَمْيِيز of كَمِ الْخَبَرِيَّة (﴿كَمْ آتَيْنَاهُم مِّنْ آيَةٍ بَيِّنَةٍ﴾), and in non-affirmative speech (كَلَام غَيْرُ مُوجَب): نَفْي (﴿مَا جَاءَنَا مِن بَشِيرٍ وَلَا نَذِيرٍ﴾), اسْتِفْهَام meaning نفي (﴿هَلْ مِنْ خَالِقٍ غَيْرُ اللَّهِ﴾), or plain استفهام with هل (﴿هَلْ مِن مَّزِيدٍ﴾).`, list: false },
          ],
          exercise: {
            prompt: `When does كفى NOT take الباء الزائدة on its فاعل؟`,
            kind: 'mcq',
            options: ['When كفى means وقى (to protect), not حسب', 'كفى always takes it, with no exception', 'When the فاعل is a ضمير', 'When كفى is فعل أمر'],
            correct: 0,
          },
        },
        {
          heading: 'اللام الزائدة والكاف الزائدة',
          lines: [
            { html: `اللام الزائدة occurs in four places:`, list: false },
            { table: { headers: ['#', 'Place', 'Example'], rows: [
              ['1', 'خَبَر of a negated كَانَ — called لَامُ الْجُحُود', '﴿فَمَا كَانَ اللَّهُ لِيَظْلِمَهُمْ﴾'],
              ['2', 'فَاعِل — لَامُ التَّبْيِين', '﴿هَيْتَ لَكَ﴾'],
              ['3', 'fronted مَعْمُول of a فعل', '﴿إِن كُنتُمْ لِلرُّؤْيَا تَعْبُرُونَ﴾'],
              ['4', 'معمول of شِبْهِ الْفِعْل — لَامُ التَّقْوِيَة, strengthening its weak government', '﴿فَعَّالٌ لِّمَا يُرِيدُ﴾'],
            ] } },
            { html: `<bdi>الْكَافُ الزَّائِدَة</bdi> appears in ﴿لَيْسَ كَمِثْلِهِ شَيْءٌ﴾: were الكاف not زائدة here, the phrase would mean "there is nothing like His like" — implying He has a like — so the زائدة reading avoids this and simply emphasises the نفي of any similarity.`, list: false },
          ],
          exercise: {
            prompt: `What would ﴿ليس كمثله شيء﴾ imply if the كاف were NOT redundant؟`,
            kind: 'mcq',
            options: ['That He has a "like" — "nothing is like His like" — which the زائدة reading avoids', 'Nothing would change in meaning at all', 'The آية would become grammatically invalid', 'It would mean the exact opposite'],
            correct: 0,
          },
        },
        {
          heading: 'حروف عند البعض، وحذف حرف الجر، والتضمين',
          lines: [
            { html: `Four حروف are treated as جر حروف only <bdi>عِنْدَ الْبَعْض</bdi>:`, list: false },
            { table: { headers: ['حرف', 'Where / condition'], rows: [
              ['لَعَلَّ', 'in the dialect of عُقَيْل — لَعَلَّ اللَّهِ فَضَّلَكُمْ عَلَيْنَا'],
              ['خَلَا and عَدَا', 'in اسْتِثْنَاء, though most grammarians treat them as أَفْعَال'],
              ['مَتَى', 'meaning مِن, in the dialect of هُذَيْل'],
              ['كَيْ', 'meaning اللام of reason before مَا الِاسْتِفْهَامِيَّة — كَيْمَهْ عَصَيْتَ اللَّهَ؟ (= لِمَهْ)'],
            ] } },
            { html: `A حرف الجر may also be omitted (<bdi>حُذِفَ وَإِيصَال</bdi>, also <bdi>اتِّسَاع</bdi>): by regular rule (قِيَاسًا) before <bdi>أَنْ</bdi> and <bdi>أَنَّ</bdi> (﴿يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ﴾, أصل: بأن) — or by transmission (سَمَاعًا) (﴿إِنَّ عَادًا كَفَرُوا رَبَّهُمْ﴾, أصل: بربهم); the اسم left behind is called <bdi>مَنْصُوبٌ بِنَزْعِ الْخَافِض</bdi>.`, list: false },
            { html: `Separately: a single <bdi>عَامِل</bdi> cannot take two معمولات from the same aspect (<bdi>جِهَة</bdi>) except by <bdi>تَبَعِيَّة</bdi> — سَافَرْتُ صَبَاحًا وَمَسَاءً, not سَافَرْتُ صَبَاحًا مَسَاءً — though it CAN take two ظرفان from two different جهتين, as in ﴿يَتَوَارَىٰ مِنَ الْقَوْمِ مِن سُوءِ مَا بُشِّرَ بِهِ﴾.`, list: false },
            { html: `<bdi>التَّضْمِين</bdi> is when a <bdi>ظَرْفُ اللَّغْو</bdi> is made the معمول of a <b>different, omitted</b> فعل: ﴿وَلَا تَأْكُلُوا أَمْوَالَهُمْ إِلَىٰ أَمْوَالِكُمْ﴾ = لَا تَأْكُلُوا أَمْوَالَهُمْ وَلَا تَضُمُّوهَا إِلَىٰ أَمْوَالِكُمْ.`, list: false },
          ],
          exercise: {
            prompt: `What is the omission of حرف الجر called, and what is the resulting اسم called؟`,
            kind: 'mcq',
            options: ['حذف وإيصال (or اتساع); the اسم left behind is منصوب بنزع الخافض', 'التضمين; the اسم is مجرور بالمجاورة', 'القلب; the اسم is مرفوع بنزع الخافض', 'الحذف has no name in النحو'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'رُبَّ expresses either تكثير or تقليل. What decides which one is meant؟',
          options: ['Context (القرينة)', 'The gender of its مجرور', 'Whether ما follows it', 'It always means تكثير, never تقليل'],
          correct: 0,
        },
        {
          q: 'What can the مجرور of رُبَّ be؟',
          options: ['An indefinite اسم ظاهر, or an ambiguous ضمير clarified by a تمييز', 'Any definite اسم', 'Only a ضمير', 'Only a جملة فعلية'],
          correct: 0,
        },
        {
          q: 'What does ما الكافة do when added to رُبَّ؟',
          options: ['Stops it from operating, and lets it enter جمل فعلية and definite أسماء', 'Makes it operate more strongly', 'Turns it into a فعل', 'Restricts it to poetry only'],
          correct: 0,
        },
        {
          q: 'Where does اللام الزائدة occur? (4 places)',
          options: [
            'خبر كان المنفية، الفاعل، معمول الفعل المقدَّم، معمول شبه الفعل',
            'خبر كان المثبتة، الفاعل، معمول الفعل المقدَّم، معمول شبه الفعل',
            'خبر كان المنفية، المفعول به، معمول الفعل المؤخَّر، معمول شبه الفعل',
            'خبر كان المنفية، الفاعل، معمول الفعل المقدَّم، معمول الفعل التام',
          ],
          correct: 0,
        },
        {
          q: 'خلا and عدا, used in الاستثناء, are treated by most grammarians as:',
          options: ['أفعال, not جر حروف', 'جر حروف only', 'أسماء', 'ظروف زمان'],
          correct: 0,
        },
        {
          q: 'A single عامل can take two ظرفان at once when:',
          options: ['they come from two different جهتين', 'they come from the same جهة', 'one of them is محذوف', 'it is never possible at all'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'الحروف الثلاثة الشبيهة بالزائد',
          kind: 'mcq',
          prompt: 'رُبَّ، من التبعيضية، and حاشا together make up:',
          options: ['حروف الجر الشبيهة بالزائد', 'حروف الجر الزائدة', 'حروف الجر الأصلية', 'أحرف القسم'],
          correct: 0,
        },
        {
          title: 'موضع رُبَّ',
          kind: 'mcq',
          prompt: '«يا رب كاسيات في الدنيا عاريات في الآخرة» shows رُبَّ preceded by:',
          options: ['a vocative حرف, the one exception to its صدر الكلام rule', 'a حرف جر آخر', 'a فعل ماضٍ', 'nothing — this is invalid Arabic'],
          correct: 0,
        },
        {
          title: 'مجرور رب موصوف',
          kind: 'mcq',
          prompt: 'The مجرور of رُبَّ is usually موصوف — described — by:',
          options: ['a single word or a جملة', 'a تمييز only, never anything else', 'a حال only', 'it is never described'],
          correct: 0,
        },
        {
          title: 'تخفيف ربما',
          kind: 'mcq',
          prompt: '﴿ربما يود الذين كفروا لو كانوا مسلمين﴾ shows رُبَّمَا:',
          options: ['lightened (تخفيف) to رُبَمَا', 'used with its full تشديد', 'replaced by مِن', 'used without ما الكافة'],
          correct: 0,
        },
        {
          title: 'حذف رب',
          kind: 'mcq',
          prompt: 'وليل كموج البحر أرخى سدوله — the جر here comes from:',
          options: ['an omitted رُبَّ whose عمل remains', 'a stated رُبَّ', 'الباء الزائدة', 'اللام الزائدة'],
          correct: 0,
        },
        {
          title: 'من بمعنى رب',
          kind: 'mcq',
          prompt: '«كان صلى الله عليه وسلم مما يحرك شفتيه» — من here carries the meaning of:',
          options: ['رُبَّ, because ما follows it (مما)', 'التبعيض', 'ابتداء الغاية, its usual meaning', 'الزائدة'],
          correct: 0,
        },
        {
          title: 'مثال حاشا',
          kind: 'mcq',
          prompt: 'هلك الناس حاشا العالمِ illustrates:',
          options: ['حاشا as حرف جر شبيه بالزائد', 'حاشا as فعل استثناء', 'حاشا as اسم', 'حاشا as ظرف'],
          correct: 0,
        },
        {
          title: 'الباء الزائدة: خبر نفي',
          kind: 'mcq',
          prompt: '﴿وما ربك بظلام للعبيد﴾ — بظلام illustrates الباء الزائدة in:',
          options: ['خبر نفي with ما', 'خبر استفهام with هل', 'التأكيد المعنوي', 'فاعل أفعِل به'],
          correct: 0,
        },
        {
          title: 'الباء الزائدة: التأكيد المعنوي',
          kind: 'mcq',
          prompt: 'نظف الأمير المسجد بنفسه illustrates الباء الزائدة in:',
          options: ['التأكيد المعنوي with نفس', 'خبر نفي', 'فاعل أفعِل به', 'مبتدأ بعد إذا الفجائية'],
          correct: 0,
        },
        {
          title: 'الباء الزائدة: فاعل أفعِل به',
          kind: 'mcq',
          prompt: '﴿أسمع بهم وأبصر﴾ illustrates الباء الزائدة on:',
          options: ['the فاعل of أفعِل به (تعجب)', 'the خبر of نفي', 'the مبتدأ after إذا الفجائية', 'the تمييز of كم'],
          correct: 0,
        },
        {
          title: 'الباء الزائدة سماعا: فاعل كفى',
          kind: 'mcq',
          prompt: '﴿كفى بالله شهيدا﴾ illustrates الباء الزائدة on:',
          options: ['the فاعل of كفى (meaning حسب)', 'the خبر of كفى', 'the مفعول به of كفى', 'nothing — الباء here is أصلية'],
          correct: 0,
        },
        {
          title: 'كفى بمعنى وقى',
          kind: 'mcq',
          prompt: '﴿وكفى الله المؤمنين القتال﴾ — كفى here does NOT take الباء الزائدة because it means:',
          options: ['وقى (to protect), not حسب', 'حسب, its usual meaning here', 'ظن', 'ترك'],
          correct: 0,
        },
        {
          title: 'من الزائدة: تمييز كم',
          kind: 'mcq',
          prompt: '﴿كم آتيناهم من آية بينة﴾ illustrates مِن الزائدة on:',
          options: ['the تمييز of كم الخبرية', 'the فاعل', 'the مبتدأ', 'the حال'],
          correct: 0,
        },
        {
          title: 'من الزائدة: كلام غير موجب',
          kind: 'mcq',
          prompt: '﴿ما جاءنا من بشير ولا نذير﴾ illustrates مِن الزائدة in:',
          options: ['نفي, one of the three كلام غير موجب contexts', 'كلام موجب مثبت', 'الاستثناء', 'القسم'],
          correct: 0,
        },
        {
          title: 'لام الجحود',
          kind: 'mcq',
          prompt: '﴿فما كان الله ليظلمهم﴾ illustrates:',
          options: ['لام الجحود — the زائدة لام on the خبر of a negated كان', 'لام التبيين', 'لام التقوية', 'لام الأمر'],
          correct: 0,
        },
        {
          title: 'لام التقوية',
          kind: 'mcq',
          prompt: '﴿فعال لما يريد﴾ illustrates:',
          options: ['لام التقوية — strengthening the weak government of شبه الفعل', 'لام الجحود', 'لام التبيين', 'لام العاقبة'],
          correct: 0,
        },
        {
          title: 'لعل عند عقيل',
          kind: 'mcq',
          prompt: 'لعل اللهِ فضلكم علينا, treating لعل as a حرف جر, reflects the dialect of:',
          options: ['عقيل', 'هذيل', 'قريش', 'تميم'],
          correct: 0,
        },
        {
          title: 'التضمين',
          kind: 'mcq',
          prompt: 'التضمين, with a ظرف اللغو, means the ظرف is made the معمول of:',
          options: ['a different, omitted فعل', 'the same فعل it already belongs to', 'no فعل at all — it becomes مبتدأ', 'a حرف جر instead of a فعل'],
          correct: 0,
        },
        {
          title: 'تركيب: رُبَّ شَهْوَةٍ تُورِثُ حُزْنًا طَوِيلًا',
          kind: 'tarkeeb',
          instruction: 'Classify رُبَّ: شبيه بالزائد or زائد؟',
          sentence: 'رُبَّ شَهْوَةٍ تُورِثُ حُزْنًا طَوِيلًا',
          translation: 'Many a desire brings about long sorrow.',
          cells: ['رُبَّ', 'شَهْوَةٍ', 'تُورِثُ', 'حُزْنًا', 'طَوِيلًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'شبيه بالزائد' },
            ] },
          ],
          distractors: ['زائد', 'أصلي'],
        },
        {
          title: 'تركيب: هَلَكَ النَّاسُ حَاشَا الْعَالِمِ',
          kind: 'tarkeeb',
          instruction: 'Classify حَاشَا: شبيه بالزائد or زائد؟',
          sentence: 'هَلَكَ النَّاسُ حَاشَا الْعَالِمِ',
          translation: 'The people perished, except the scholar.',
          cells: ['هَلَكَ', 'النَّاسُ', 'حَاشَا', 'الْعَالِمِ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'شبيه بالزائد' },
            ] },
          ],
          distractors: ['زائد', 'أصلي'],
        },
        {
          title: 'تركيب: ﴿وَمَا رَبُّكَ بِظَلَّامٍ لِّلْعَبِيدِ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify الباء in بِظَلَّامٍ: شبيه بالزائد or زائد؟ Then identify its موضع.',
          sentence: 'وَمَا رَبُّكَ بِظَلَّامٍ لِّلْعَبِيدِ',
          translation: 'And your Lord is not ever unjust to His servants.',
          cells: ['رَبُّكَ', 'بِظَلَّامٍ', 'لِلْعَبِيدِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'زائد' },
            ] },
            { position: 'below', labels: [
              { start: 1, end: 1, role: 'خبر نفي' },
            ] },
          ],
          distractors: ['شبيه بالزائد', 'خبر استفهام'],
        },
        {
          title: 'تركيب: نَظَّفَ الْأَمِيرُ الْمَسْجِدَ بِنَفْسِهِ',
          kind: 'tarkeeb',
          instruction: 'Identify the موضع of الباء الزائدة in بِنَفْسِهِ.',
          sentence: 'نَظَّفَ الْأَمِيرُ الْمَسْجِدَ بِنَفْسِهِ',
          translation: 'The prince cleaned the mosque himself.',
          cells: ['نَظَّفَ', 'الْأَمِيرُ', 'الْمَسْجِدَ', 'بِنَفْسِهِ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 3, role: 'التأكيد المعنوي' },
            ] },
          ],
          distractors: ['خبر نفي', 'فاعل أفعِل به'],
        },
        {
          title: 'تركيب: ﴿أَسْمِعْ بِهِمْ وَأَبْصِرْ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the موضع of الباء الزائدة in بِهِمْ.',
          sentence: 'أَسْمِعْ بِهِمْ وَأَبْصِرْ',
          translation: 'How well they hear and how well they see!',
          cells: ['أَسْمِعْ', 'بِهِمْ', 'وَأَبْصِرْ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'فاعل أفعِل به' },
            ] },
          ],
          distractors: ['خبر نفي', 'التأكيد المعنوي'],
        },
        {
          title: 'تركيب: دَخَلَ الرَّجُلُ فَإِذَا بِابْنِهِ يُصَلِّي',
          kind: 'tarkeeb',
          instruction: 'Identify the موضع of الباء الزائدة in بِابْنِهِ.',
          sentence: 'دَخَلَ الرَّجُلُ فَإِذَا بِابْنِهِ يُصَلِّي',
          translation: 'The man entered, and suddenly there was his son praying.',
          cells: ['دَخَلَ', 'الرَّجُلُ', 'فَإِذَا', 'بِابْنِهِ', 'يُصَلِّي'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 3, role: 'مبتدأ بعد إذا الفجائية' },
            ] },
          ],
          distractors: ['خبر نفي', 'فاعل أفعِل به'],
        },
        {
          title: 'تركيب: ﴿فَمَا كَانَ اللَّهُ لِيَظْلِمَهُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which اللام الزائدة this is.',
          sentence: 'فَمَا كَانَ اللَّهُ لِيَظْلِمَهُمْ',
          translation: 'And Allah would not ever wrong them.',
          cells: ['كَانَ', 'اللَّهُ', 'لِيَظْلِمَهُمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'لام الجحود' },
            ] },
          ],
          distractors: ['لام التبيين', 'لام التقوية'],
        },
        {
          title: 'تركيب: ﴿هَيْتَ لَكَ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which اللام الزائدة this is.',
          sentence: 'هَيْتَ لَكَ',
          translation: 'Come, you.',
          cells: ['هَيْتَ', 'لَكَ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'لام التبيين' },
            ] },
          ],
          distractors: ['لام الجحود', 'لام التقوية'],
        },
        {
          title: 'تركيب: ﴿فَعَّالٌ لِّمَا يُرِيدُ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which اللام الزائدة this is.',
          sentence: 'فَعَّالٌ لِّمَا يُرِيدُ',
          translation: 'A doer of whatever He intends.',
          cells: ['فَعَّالٌ', 'لِمَا', 'يُرِيدُ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'لام التقوية' },
            ] },
          ],
          distractors: ['لام الجحود', 'لام التبيين'],
        },
        {
          title: 'تركيب: لَعَلَّ اللَّهِ فَضَّلَكُمْ عَلَيْنَا',
          kind: 'tarkeeb',
          instruction: 'Treating لعل as a حرف جر here reflects which dialect؟',
          sentence: 'لَعَلَّ اللَّهِ فَضَّلَكُمْ عَلَيْنَا',
          translation: 'Perhaps Allah has favored you over us.',
          cells: ['لَعَلَّ', 'اللَّهِ', 'فَضَّلَكُمْ', 'عَلَيْنَا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'لغة عقيل' },
            ] },
          ],
          distractors: ['لغة هذيل', 'لغة تميم'],
        },
        {
          title: 'تركيب: كَيْمَهْ عَصَيْتَ اللَّهَ',
          kind: 'tarkeeb',
          instruction: 'كَيْ here carries the meaning of اللام of reason. What licenses treating it as a حرف جر؟',
          sentence: 'كَيْمَهْ عَصَيْتَ اللَّهَ',
          translation: 'Why did you disobey Allah?',
          cells: ['كَيْمَهْ', 'عَصَيْتَ', 'اللَّهَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'قبل ما الاستفهامية' },
            ] },
          ],
          distractors: ['لغة عقيل', 'لغة هذيل'],
        },
        {
          title: 'تركيب: ﴿يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ﴾',
          kind: 'tarkeeb',
          instruction: 'Is the omitted حرف جر before أَنْ here قياسا or سماعا؟',
          sentence: 'يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ',
          translation: 'He commands you to render trusts [to whom they are due].',
          cells: ['يَأْمُرُكُمْ', 'أَنْ', 'تُؤَدُّوا', 'الْأَمَانَاتِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 3, role: 'قياسا' },
            ] },
          ],
          distractors: ['سماعا', 'ممتنع'],
        },
        {
          title: 'تركيب: ﴿وَاشْهَدُوا أَنِّي بَرِيءٌ﴾',
          kind: 'tarkeeb',
          instruction: 'Is the omitted حرف جر before أَنِّي here قياسا or سماعا؟',
          sentence: 'وَاشْهَدُوا أَنِّي بَرِيءٌ',
          translation: 'And bear witness that I am free [of that].',
          cells: ['اشْهَدُوا', 'أَنِّي', 'بَرِيءٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'قياسا' },
            ] },
          ],
          distractors: ['سماعا', 'ممتنع'],
        },
        {
          title: 'تركيب: ﴿إِنَّ عَادًا كَفَرُوا رَبَّهُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Is the omitted حرف جر before رَبَّهُمْ here قياسا or سماعا؟',
          sentence: 'إِنَّ عَادًا كَفَرُوا رَبَّهُمْ',
          translation: "Indeed, 'Aad disbelieved in their Lord.",
          cells: ['عَادًا', 'كَفَرُوا', 'رَبَّهُمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'سماعا' },
            ] },
          ],
          distractors: ['قياسا', 'ممتنع'],
        },
      ],
    },
  ],
};

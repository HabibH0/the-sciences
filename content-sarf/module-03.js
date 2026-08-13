// Module 03 — الصحيح والمعتل (The Sound Verb and the Weak Verb)
//
// Covers Week 4 of the Advanced Sarf course: التقسيم الثاني للفعل, from
// شذا العرف في فن الصرف by أحمد الحملاوي. Definitions, examples and
// terminology are kept faithful to the source. Concept bodies are short by
// design (a sentence or two, not teaching prose); quiz/bank question text is
// English with Arabic morphological terms left in Arabic.
//
// Scope: حروف العلة and why they are so called; the definitions of الصحيح and
// المعتل and the force of the قيد أصوله; حرف اللين and حرف المد, and why the
// ألف is always both; أقسام الصحيح (سالم، مضعَّف، مهموز) including the split
// between مضعف الثلاثي and مضعف الرباعي; أقسام المعتل (مثال، أجوف، ناقص،
// لفيف بقسميه) with the reason behind each name; ضمائر الرفع المتحركة
// المتصلة; and the running of the same divisions through الاسم.
// التقسيم الثالث (المجرد والمزيد) follows in Module 04.
//
// 2026-08-12: restructured to match content/module-01.js's (Advanced Nahw)
// revamped presentation style, per explicit instruction — same facts,
// counts, and lesson/concept boundaries, no new grammar content. Every
// concept previously carried one undifferentiated "Core Text" box holding
// several lines of unglossed Arabic; each is now split into its own
// Definition/Rule box per distinct source sentence (matching how
// content/module-01.js and this course's own module-01.js separate a
// defining statement from the reasoning behind a name), and every box is
// now followed immediately by a full English rendering of what it says, not
// just a paraphrase of its upshot — so the lesson reads start to finish
// without the learner needing to parse the Arabic quotes themselves. The
// Arabic stays in place alongside the translation: it is still there for
// anyone who wants it, but the English carries the lesson on its own.

export default {
  id: 'as-03',
  title: 'الصحيح والمعتل',
  heading: 'الفعل',
  blurb: 'الفعل and الاسم alike, divided by whether a حرف علة sits among their أصول: الصحيح and المعتل.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'الصحيح والمعتل',
      subtitle: 'The Basic Division — حروف العلة, the two definitions, the قيد that limits them to the أصول, and حرفا المد واللين',
      concepts: [
        {
          heading: 'العلة وحروفها',
          lines: [
            { html: `<bdi>العِلَّة</bdi> in the language means المَرَض والضَّعْف — sickness and weakness. Grammarians borrow that name for three specific letters: <bdi>الواو</bdi>, <bdi>الألف</bdi>, and <bdi>الياء</bdi>, collected together under the label <bdi>وَاي</bdi>.`, list: false },
            { box: { title: 'Rule', lines: [
              `يُصِيبُهَا الإِعْلَالُ بِكَثْرَةٍ بِالقَلْبِ والحَذْفِ ونَقْلِ الحَرَكَةِ عنها`,
            ] } },
            { html: `Change (<bdi>الإعلال</bdi>) befalls them frequently — by substitution, by deletion, and by moving the vowel off them. That sentence is the whole reason for the name: <bdi>وَاي</bdi> is descriptive, not arbitrary. Three things keep happening to these three letters and to no others:`, list: false },
            { html: `<bdi>القَلْب</bdi> — being turned into another letter.`, list: true, bullet: true },
            { html: `<bdi>الحَذْف</bdi> — being dropped altogether.`, list: true, bullet: true },
            { html: `<bdi>نَقْلُ الحَرَكَة</bdi> — having their vowel moved off them onto the letter before.`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `Why are الواو والألف والياء called حروف علة؟`,
            kind: 'mcq',
            options: ['Because they occur only in the أفعال', 'Because they are weak letters, frequently subject to قلب، حذف and نقل الحركة', 'Because they cannot bear a حركة at all', 'Because they are always زوائد'],
            correct: 1,
          },
        },
        {
          heading: 'تعريف الصحيح',
          lines: [
            { html: `With حروف العلة identified, شذا العرف opens its first division of the فعل by asking whether any of them sit among a word's root letters.`, list: false },
            { box: { title: 'Definition', lines: [
              `الصَّحِيح: ما خَلَتْ أُصُولُهُ مِنْ أَحْرُفِ العِلَّة، نحو: كَتَبَ وجَلَسَ`,
            ] } },
            { html: `الصحيح: that whose root letters (<bdi>أصوله</bdi>) are free of the حروف العلة — for example, كَتَبَ (he wrote) and جَلَسَ (he sat). In plain terms: a verb whose three root letters are all sound, none of them ا، و or ي.`, list: false },
            { html: `أُصُولُه is the operative word. It ties the ruling to the root letters alone, دُونَ الزَّائِدَة (excluding anything added) — so a زائد حرف علة does not make a word معتل.`, list: false },
            { html: `That is why كَاتِب، ضَارِب، عَامِل, derived from كَتَبَ، ضَرَبَ، عَمِلَ, all remain صحيح: each contains an ألف, but that ألف is زائدة, not one of the three أصول.`, list: false },
          ],
          exercise: {
            prompt: `ضَارِب contains an ألف, yet it counts as صحيح. Why?`,
            kind: 'mcq',
            options: ['Because the ألف is زائدة, and the definition speaks only of the أصول', 'Because the ألف is not a حرف علة', 'Because it is an اسم rather than a فعل', 'Because its فاء is صحيحة'],
            correct: 0,
          },
        },
        {
          heading: 'حرف اللين وحرف المد',
          lines: [
            { html: `A حرف علة picks up a further name from its own vowelling and from the vowel before it.`, list: false },
            { table: { title: 'The Two Further Names', headers: ['الاسم (Name)', 'الشرط (Condition)', 'المثال (Example)'], rows: [
              ['حَرْفُ لِين', 'ساكن (quiescent), preceded by a fatḥa', 'ثَوْب، سَيْف'],
              ['حَرْفُ مَدّ', 'ساكن, with the vowel before it matching it in kind (مُجَانَسَة)', 'قَالَ، يَقُولُ، قِيلَا'],
            ] } },
            { html: `<bdi>المُجَانَسَة</bdi> means the preceding vowel matches the letter in kind: fatḥa before ألف, ḍamma before واو, kasra before ياء. One of the three letters then satisfies every condition at once:`, list: false },
            { box: { title: 'Rule', lines: [
              `فَعَلَى ذلك لا تَنْفَكُّ الأَلِفُ عن كَوْنِهَا حَرْفَ عِلَّةٍ، ومَدٍّ، ولِينٍ، لِسُكُونِهَا وفَتْحِ ما قَبْلَهَا دَائِمًا، بِخِلَافِ أُخْتَيْهَا`,
            ] } },
            { html: `So the ألف never fails to be a حرف علة, a حرف مد, and a حرف لين all at once, because it is always quiescent with a fatḥa before it — unlike its two sisters (<bdi>أختيها</bdi>). Its two sisters are الواو and الياء: each of those can be one without the other, since either can carry its own vowel or sit after a vowel that does not match it, while the ألف has no such freedom.`, list: false },
          ],
          clarification: `Why is the ألف always all three, while its two sisters are not? Because the ألف has no other state available to it: it cannot carry a حركة, so it is always ساكنة, and the only vowel that can precede it is a fatḥa. A fatḥa then does two jobs at once: it opens before the letter, which satisfies لين, and it is the جنس of an ألف, which satisfies مد. الواو and الياء, by contrast, can carry a حركة (وَعَدَ, يَسَرَ), can be ساكنة after a non-matching vowel (ثَوْب, سَيْف — لين but not مد), or ساكنة after a matching one (يَقُولُ, قِيلَ — مد but not لين, since a ḍamma and a kasra do not open). Only for the ألف do the two conditions collapse into one.`,
          exercise: {
            prompt: `In ثَوْب, the واو is ساكنة and a fatḥa precedes it. What is it?`,
            kind: 'mcq',
            options: ['Neither — it is a حرف صحيح here', 'حرف لين only — the fatḥa does not match the واو in kind', 'حرف مد only', 'Both حرف مد and حرف لين'],
            correct: 1,
          },
        },
        {
          heading: 'تعريف المعتل',
          lines: [
            { html: `Every root letter has now been sorted into one of two camps: free of أحرف العلة, or not. The second camp gets the matching definition.`, list: false },
            { box: { title: 'Definition', lines: [
              `المُعْتَلّ: ما كانَ أَحَدُ أُصُولِهِ حَرْفَ عِلَّةٍ، نحو: وَجَدَ، وقَالَ، وسَعَى`,
            ] } },
            { html: `المعتل: that one of whose root letters is a حرف علة — for example, وَجَدَ (he found), قَالَ (he said), and سَعَى (he strove). A verb one of whose root letters is ا، و or ي.`, list: false },
            { html: `Note that أَحَدُ is enough: one weak root letter makes the whole verb معتل. The two definitions are therefore exhaustive and mutually exclusive — every verb is one or the other.`, list: false },
            { html: `Those three examples cover the three positions: وَجَدَ is weak in its فاء, قَالَ in its عين, and سَعَى in its لام. Those positions are what the أقسام المعتل are built on.`, list: false },
          ],
          exercise: {
            prompt: `A verb has one حرف علة among its three أصول and two sound letters. What is it?`,
            kind: 'mcq',
            options: ['سالم', 'It depends on which position the weak letter occupies', 'معتل — one weak أصل is enough', 'صحيح — the majority of its أصول are sound'],
            correct: 2,
          },
        },
      ],
      quiz: [
        {
          q: 'What does العلة mean لغةً؟',
          options: ['القلب والحذف', 'السكون والحركة', 'الأصالة والزيادة', 'المرض والضعف'],
          correct: 3,
        },
        {
          q: 'Which three letters are collected in واي؟',
          options: ['الواو والألف والياء', 'الواو والألف والهمزة', 'الألف والياء والنون', 'الواو والياء والتاء'],
          correct: 0,
        },
        {
          q: 'What is the definition of الصحيح؟',
          options: ['One of its root letters is a حرف علة', 'Free of any زائد letters', 'Its root letters are free of أحرف العلة', 'Its root letters are free of أحرف العلة, الهمزة, and doubling'],
          correct: 2,
        },
        {
          q: 'What is the definition of المعتل؟',
          options: ['Its عين is معتل', 'One of its root letters is a حرف علة', 'All of its root letters are أحرف علة', 'One of its root letters is a همزة'],
          correct: 1,
        },
        {
          q: 'A حرف علة is ساكن and the vowel before it matches it in kind. What is it called?',
          options: ['حرف زائد', 'حرف مد', 'حرف لين', 'حرف صحيح'],
          correct: 1,
        },
        {
          q: 'Which حرف علة is always حرف علة, مد and لين all at once?',
          options: ['الياء', 'All three equally', 'الألف', 'الواو'],
          correct: 2,
        },
      ],
      bank: [
        {
          title: 'الإعلال',
          kind: 'mcq',
          prompt: 'Which three operations are named as what befalls حروف العلة frequently?',
          options: ['الحذف، الزيادة، التضعيف', 'القلب، الحذف، نقل الحركة', 'الإدغام، الإبدال، الحذف', 'القلب، الإدغام، الزيادة'],
          correct: 1,
        },
        {
          title: 'وجه التسمية',
          kind: 'mcq',
          prompt: 'What links the لغوي meaning of العلة to the naming of these three letters?',
          options: ['There is no link — the name is conventional', 'العلة means weakness, and these are the letters that behave weakly', 'العلة means change, and these letters change others', 'العلة means cause, and these letters cause إعلال in others'],
          correct: 1,
        },
        {
          title: 'نقل الحركة',
          kind: 'mcq',
          prompt: 'What is نقل الحركة, as one of the things that befalls a حرف علة؟',
          options: ['It is turned into a different letter', 'It is dropped from the word', 'It is doubled', 'Its vowel is moved off it onto the preceding letter'],
          correct: 3,
        },
        {
          title: 'كتب وجلس',
          kind: 'mcq',
          prompt: 'كَتَبَ and جَلَسَ are examples of what?',
          options: ['المضعَّف', 'الصحيح', 'المعتل', 'المهموز'],
          correct: 1,
        },
        {
          title: 'قوة أصوله',
          kind: 'mcq',
          prompt: 'What does the word أصوله in the definition of الصحيح establish?',
          options: ['That the verb must have three sound letters', 'That the ruling attaches to the root letters only, not the زوائد', 'That the verb must be ثلاثي', 'That the verb must be مجرد'],
          correct: 1,
        },
        {
          title: 'كاتب وعامل',
          kind: 'mcq',
          prompt: 'كَاتِب, عَامِل and ضَارِب each contain an ألف. Are they صحيح or معتل؟',
          options: ['صحيح — the ألف is زائدة, not one of the أصول', 'معتل — an ألف is a حرف علة wherever it sits', 'معتل الوسط, since the ألف is second', 'It cannot be determined without the ميزان'],
          correct: 0,
        },
        {
          title: 'الأصل والزائد',
          kind: 'mcq',
          prompt: 'A verb has four letters, one of which is a زائد واو. Its three أصول are all sound. What is it?',
          options: ['أجوف', 'لفيف', 'صحيح', 'معتل'],
          correct: 2,
        },
        {
          title: 'شرط اللين',
          kind: 'mcq',
          prompt: 'What are the two conditions for a حرف علة to be a حرف لين؟',
          options: ['That it be ساكن, and that a matching vowel precede it', 'That it be متحرك, and that a fatḥa precede it', 'That it be at the end of the word', 'That it be ساكن, and that a fatḥa precede it'],
          correct: 3,
        },
        {
          title: 'شرط المد',
          kind: 'mcq',
          prompt: 'What are the two conditions for a حرف علة to be a حرف مد؟',
          options: ['That it be ساكن, and that the vowel before it match it in kind', 'That it be ساكن, and that a fatḥa precede it', 'That it be متحرك, and that it be an أصل', 'That it be preceded by a sukūn'],
          correct: 0,
        },
        {
          title: 'ثوب وسيف',
          kind: 'mcq',
          prompt: 'The واو of ثَوْب and the ياء of سَيْف are ساكنتان after a fatḥa. What does that make them?',
          options: ['حرفان صحيحان', 'حرفان زائدان', 'حرفا لين', 'حرفا مد'],
          correct: 2,
        },
        {
          title: 'قال يقول قيلا',
          kind: 'mcq',
          prompt: 'What do the weak letters of قَالَ، يَقُولُ and قِيلَا have in common?',
          options: ['الإعلال بالقلب', 'المضعَّف', 'حرف المد', 'حرف اللين'],
          correct: 2,
        },
        {
          title: 'المجانسة',
          kind: 'mcq',
          prompt: 'Which vowel is the جنس of the واو, for the purposes of المد؟',
          options: ['الضمة', 'الفتحة', 'الكسرة', 'The sukūn'],
          correct: 0,
        },
        {
          title: 'جنس الياء',
          kind: 'mcq',
          prompt: 'Which vowel must precede a ساكنة ياء for it to be a حرف مد؟',
          options: ['الفتحة', 'Any vowel', 'الكسرة', 'الضمة'],
          correct: 2,
        },
        {
          title: 'يقول',
          kind: 'mcq',
          prompt: 'In يَقُولُ, the واو is ساكنة after a ḍamma. What is it?',
          options: ['حرف صحيح', 'A زائد', 'حرف مد only — the ḍamma matches it in kind but does not open before it', 'حرف لين only'],
          correct: 2,
        },
        {
          title: 'لماذا الألف',
          kind: 'mcq',
          prompt: 'Why can the ألف never fail to be a حرف مد؟',
          options: ['It is always ساكنة with a fatḥa before it, which is its own جنس', 'It is always متحركة', 'It is always an أصل', 'It always sits in the عين position'],
          correct: 0,
        },
        {
          title: 'بخلاف أختيها',
          kind: 'mcq',
          prompt: 'What are the أختان referred to in بخلاف أختيها؟',
          options: ['الواو والهمزة', 'الياء والنون', 'الواو والياء', 'الألف والهمزة'],
          correct: 2,
        },
        {
          title: 'مد ولين معًا',
          kind: 'mcq',
          prompt: 'Can a letter be both حرف مد and حرف لين at the same time?',
          options: ['Only in the case of the واو', 'Yes — any ساكن letter after a matching vowel satisfies both', 'No — the two are mutually exclusive', 'Only in the case of the ألف, whose preceding fatḥa satisfies both conditions'],
          correct: 3,
        },
        {
          title: 'وجد وقال وسعى',
          kind: 'mcq',
          prompt: 'وَجَدَ، قَالَ and سَعَى are all معتل. What does the set of three together illustrate?',
          options: ['They cover the three حروف علة', 'They cover the three tenses', 'They cover the three أوزان of الثلاثي', 'They cover the three positions: فاء, عين and لام'],
          correct: 3,
        },
        {
          title: 'أحد أصوله',
          kind: 'mcq',
          prompt: 'How many weak أصول does a verb need in order to be معتل؟',
          options: ['All three', 'It depends on the position', 'One', 'Two'],
          correct: 2,
        },
        {
          title: 'قسمة حاصرة',
          kind: 'mcq',
          prompt: 'Can a verb be neither صحيح nor معتل؟',
          options: ['Yes — the مهموز is a third category', 'Yes — a verb with a زائد حرف علة is neither', 'No — the two definitions are exhaustive and mutually exclusive', 'Yes — the مضعَّف is a third category'],
          correct: 2,
        },
        {
          title: 'وجد',
          kind: 'mcq',
          prompt: 'In وَجَدَ, which position carries the حرف علة؟',
          options: ['الفاء', 'العين', 'اللام', 'None — it is صحيح'],
          correct: 0,
        },
        {
          title: 'سعى',
          kind: 'mcq',
          prompt: 'In سَعَى, which position carries the حرف علة؟',
          options: ['العين', 'Both the عين and the لام', 'اللام', 'الفاء'],
          correct: 2,
        },
        {
          title: 'حرف علة متحرك',
          kind: 'mcq',
          prompt: 'The واو in وَعَدَ carries a fatḥa. Is it a حرف مد or لين؟',
          options: ['حرف لين', 'Both', 'Neither — both require the letter to be ساكن', 'حرف مد'],
          correct: 2,
        },
        {
          title: 'الصحة والزيادة',
          kind: 'mcq',
          prompt: 'Two words are built from the same three sound أصول, one with a زائد واو and one without. How do they compare?',
          options: ['The one with the واو is معتل', 'The one with the واو is أجوف', 'Neither can be classified without the وزن', 'Both are صحيح, since the ruling ignores the زوائد'],
          correct: 3,
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'أقسام الصحيح',
      subtitle: 'The Three Kinds of Sound Verb — سالم، مضعَّف، مهموز, and why only the ثلاثي مضعَّف concerns the صرفي',
      concepts: [
        {
          heading: 'السالم',
          lines: [
            { box: { title: 'Definition', lines: [
              `يَنْقَسِمُ الصَّحِيحُ إلى سَالِمٍ، ومُضَعَّفٍ، ومَهْمُوزٍ`,
              `السَّالِم: ما سَلِمَتْ أُصُولُهُ مِنْ أَحْرُفِ العِلَّةِ والهَمْزَةِ والتَّضْعِيفِ، كَضَرَبَ، ونَصَرَ، وقَعَدَ، وجَلَسَ`,
            ] } },
            { html: `الصحيح divides into سالم, مضعَّف, and مهموز. السالم: that whose root letters are free of أحرف العلة, the همزة, and doubling (التضعيف) — for example ضَرَبَ (he struck), نَصَرَ (he helped), قَعَدَ (he sat), and جَلَسَ (he sat). So السالم is the verb whose root letters clear three hurdles at once, and the other two divisions are each named for one hurdle it fails to clear.`, list: false },
            { box: { title: 'Rule', lines: [
              `فإِذَنْ يَكُونُ كُلُّ سَالِمٍ صَحِيحًا، ولا عَكْسَ`,
            ] } },
            { html: `It follows that every سالم is صحيح, but not the reverse. الصحيح only requires clearing the first hurdle — freedom from أحرف العلة. السالم requires clearing all three, so every سالم automatically counts as صحيح, while plenty of صحيح verbs — anything مضعَّف or مهموز — are not سالم.`, list: false },
          ],
          exercise: {
            prompt: `Why does every سالم count as صحيح while the reverse does not hold?`,
            kind: 'mcq',
            options: ['السالم must be free of علة, همزة and تضعيف; الصحيح need only be free of علة', 'السالم must be ثلاثي while الصحيح need not be', 'الصحيح must be free of زوائد while السالم need not be', 'The two terms are in fact equivalent'],
            correct: 0,
          },
        },
        {
          heading: 'المضعَّف وقسماه',
          lines: [
            { box: { title: 'Definition', lines: [
              `المُضَعَّف: ويُقَالُ له الأَصَمُّ لِشِدَّتِهِ`,
            ] } },
            { html: `المضعَّف, also called <bdi>الأَصَمّ</bdi> — the deaf one — for the density (<bdi>شِدَّة</bdi>) of its doubled letter. The second name comes from how a doubled consonant sounds: packed together with no vowel breaking it up.`, list: false },
            { box: { title: 'Rule', lines: [
              `يَنْقَسِمُ إلى قِسْمَيْنِ: مُضَعَّفُ الثُّلَاثِيِّ ومَزِيدُه، ومُضَعَّفُ الرُّبَاعِيِّ`,
            ] } },
            { html: `It divides into two: مضعَّف الثلاثي (with its مزيد forms), and مضعَّف الرباعي. The two قسمان that follow are defined by which positions in the word match, so they never overlap.`, list: false },
          ],
          exercise: {
            prompt: `What second name is given to المضعَّف, and why?`,
            kind: 'mcq',
            options: ['السَّالِم, because it is free of علة', 'الأَصَمّ, from the density (شِدَّة) of the doubled letter', 'الأَجْوَف, from the hollowness of its middle', 'الأَصَمّ, because its letters cannot be separated in speech'],
            correct: 1,
          },
        },
        {
          heading: 'مضعَّف الثلاثي ومزيده',
          lines: [
            { box: { title: 'Definition', lines: [
              `ما كانَتْ عَيْنُهُ ولَامُهُ مِنْ جِنْسٍ وَاحِدٍ، نحو: فَرَّ، مَدَّ، وامْتَدَّ، واسْتَمَدَّ`,
            ] } },
            { html: `That whose عين and لام are one and the same letter — for example فَرَّ (he fled), مَدَّ (he extended), امْتَدَّ (it extended), and اسْتَمَدَّ (he drew help). امْتَدَّ and اسْتَمَدَّ are listed alongside the bare forms to show that مزيد forms belong here too — the letters added on top of the root do not move a word out of this قسم.`, list: false },
            { box: { title: 'Rule', lines: [
              `وهو مَحَلُّ نَظَرِ الصَّرْفِيِّ`,
            ] } },
            { html: `And this — not the رباعي — is what the صرفي actually studies closely.`, list: false },
          ],
          clarification: `Why single out the ثلاثي مضعَّف as محل نظر الصرفي? Because it is the one that carries صرف rulings of its own — الإدغام, نقل الحركة, and what happens when ضمائر are attached to it. Those are all rules that have to be learned, and they follow from the عين and لام being identical. The رباعي مضعَّف has no such rulings peculiar to it: زَلْزَلَ behaves exactly like دَحْرَجَ throughout its conjugation, so once you know the رباعي you know it, and nothing further needs saying.`,
          exercise: {
            prompt: `اسْتَمَدَّ has four letters, yet it belongs to مضعَّف الثلاثي ومزيده rather than مضعَّف الرباعي. Why?`,
            kind: 'mcq',
            options: ['Its four letters are all أصول', 'Its فاء and first لام match', 'Because it begins with a همزة', 'Its أصول are three, with the عين and لام identical; the rest are زوائد'],
            correct: 3,
          },
        },
        {
          heading: 'مضعَّف الرباعي',
          lines: [
            { box: { title: 'Definition', lines: [
              `ما كانَتْ فَاؤُهُ ولَامُهُ الأُولَى مِنْ جِنْسٍ، وعَيْنُهُ ولَامُهُ الثَّانِيَةُ مِنْ جِنْسٍ، كَزَلْزَلَ، وعَسْعَسَ، وقَلْقَلَ`,
            ] } },
            { html: `That whose فاء and first لام are the same letter, and whose عين and second لام are the same letter — for example زَلْزَلَ (he shook), عَسْعَسَ (it grew dark), and قَلْقَلَ (he agitated).`, list: false },
            { html: `Read against the ميزان: a رباعي weighs فَعْلَلَ, so its four positions are ف ع ل ل. Here ف matches the first ل, and ع matches the second — the whole first half repeats as the second half.`, list: false },
          ],
          exercise: {
            prompt: `In زَلْزَلَ, which pairs of positions match?`,
            kind: 'mcq',
            options: ['The عين with the first لام', 'The فاء with the عين', 'The two لامان with each other only', 'الفاء with the first لام, and the عين with the second لام'],
            correct: 3,
          },
        },
        {
          heading: 'المهموز',
          lines: [
            { box: { title: 'Definition', lines: [
              `المَهْمُوز: ما كانَ أَحَدُ أُصُولِهِ هَمْزَةً، نحو: أَخَذَ، وسَأَلَ، وقَرَأَ`,
            ] } },
            { html: `المهموز: that one of whose root letters is a هَمْزَة — for example أَخَذَ (he took), سَأَلَ (he asked), and قَرَأَ (he read). A verb one of whose root letters is a هَمْزَة.`, list: false },
            { html: `As with المعتل, the three cover the three positions — أَخَذَ is مهموز الفاء, سَأَلَ مهموز العين, and قَرَأَ مهموز اللام.`, list: false },
            { html: `Note that the همزة is a حرف صحيح, not a حرف علة. That is why المهموز sits inside الصحيح and not beside المعتل, even though it is excluded from السالم.`, list: false },
          ],
          exercise: {
            prompt: `المهموز is a kind of صحيح, yet it is excluded from السالم. What explains both facts at once?`,
            kind: 'mcq',
            options: ['The همزة is صحيح, not a حرف علة, but السالم additionally excludes الهمزة', 'The همزة is a حرف علة, but a weak one', 'المهموز is صحيح only when the همزة is its فاء', 'السالم excludes only التضعيف, and المهموز happens to be مضعَّف'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'Into what three kinds does الصحيح divide?',
          options: ['سالم، مضعَّف، مهموز', 'مثال، أجوف، ناقص', 'مجرد، مزيد، ملحق', 'ماضٍ، مضارع، أمر'],
          correct: 0,
        },
        {
          q: 'What is السالم free of?',
          options: ['الحروف الزائدة', 'أحرف العلة والهمزة والتضعيف', 'أحرف العلة فقط', 'الهمزة والتضعيف فقط'],
          correct: 1,
        },
        {
          q: 'What is the other name of المضعَّف؟',
          options: ['السَّالِم', 'الأَبْتَر', 'الأَصَمّ', 'الأَجْوَف'],
          correct: 2,
        },
        {
          q: 'مضعَّف الثلاثي is defined by which two positions matching?',
          options: ['العين واللام', 'الفاء والعين', 'الفاء واللام', 'اللامان'],
          correct: 0,
        },
        {
          q: 'زَلْزَلَ، عَسْعَسَ and قَلْقَلَ are examples of:',
          options: ['اللفيف المقرون', 'مضعَّف الرباعي', 'مضعَّف الثلاثي', 'المهموز'],
          correct: 1,
        },
        {
          q: 'What is المهموز؟',
          options: ['One of its root letters is a همزة', 'One of its root letters is a حرف علة', 'Its عين and لام are of the same kind', 'Its root letters are free of الهمزة'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'ثلاث عقبات',
          kind: 'mcq',
          prompt: 'How many things must السالم be free of?',
          options: ['Three — حروف العلة, الهمزة and التضعيف', 'Two — حروف العلة and الهمزة', 'One — حروف العلة', 'Four'],
          correct: 0,
        },
        {
          title: 'ضرب ونصر',
          kind: 'mcq',
          prompt: 'ضَرَبَ، نَصَرَ، قَعَدَ and جَلَسَ are all examples of:',
          options: ['المثال', 'السالم', 'المضعَّف', 'المهموز'],
          correct: 1,
        },
        {
          title: 'ولا عكس',
          kind: 'mcq',
          prompt: 'كل سالم صحيح ولا عكس. Which of these is a صحيح that is not سالم؟',
          options: ['مَدَّ', 'ضَرَبَ', 'جَلَسَ', 'نَصَرَ'],
          correct: 0,
        },
        {
          title: 'العموم والخصوص',
          kind: 'mcq',
          prompt: 'What is the relationship between الصحيح and السالم؟',
          options: ['السالم is a subset of الصحيح', 'الصحيح is a subset of السالم', 'They are equivalent', 'They are mutually exclusive'],
          correct: 0,
        },
        {
          title: 'الأصم',
          kind: 'mcq',
          prompt: 'Why is المضعَّف called الأَصَمّ؟',
          options: ['Because its letters are silent', 'Because it has no حرف علة to hear', 'Because it takes no إعلال', 'لِشِدَّتِه — the density of the doubled letter'],
          correct: 3,
        },
        {
          title: 'قسما المضعَّف',
          kind: 'mcq',
          prompt: 'Into what two kinds does المضعَّف divide?',
          options: ['مضعَّف الثلاثي ومزيده، ومضعَّف الرباعي', 'مضعَّف الفاء ومضعَّف اللام', 'مضعَّف الماضي ومضعَّف المضارع', 'مضعَّف السالم ومضعَّف المهموز'],
          correct: 0,
        },
        {
          title: 'فرَّ ومدَّ',
          kind: 'mcq',
          prompt: 'فَرَّ and مَدَّ are مضعَّف الثلاثي. What do their عين and لام have in common?',
          options: ['They are both حروف علة', 'They are both همزة', 'They are both زوائد', 'They are the same letter'],
          correct: 3,
        },
        {
          title: 'امتدَّ واستمدَّ',
          kind: 'mcq',
          prompt: 'Why do امْتَدَّ and اسْتَمَدَّ fall under مضعَّف الثلاثي rather than a category of their own?',
          options: ['They are رباعي in their أصول', 'They are مهموز as well as مضعَّف', 'Their فاء and لام match', 'They are مزيد forms built on a ثلاثي مضعَّف أصل'],
          correct: 3,
        },
        {
          title: 'محل نظر الصرفي',
          kind: 'mcq',
          prompt: 'Which kind of مضعَّف is described as محل نظر الصرفي؟',
          options: ['Both equally', 'Neither — المضعَّف belongs to النحو', 'مضعَّف الثلاثي ومزيده', 'مضعَّف الرباعي'],
          correct: 2,
        },
        {
          title: 'أحكام صرفية',
          kind: 'mcq',
          prompt: 'What kind of rulings does the ثلاثي مضعَّف carry that the رباعي مضعَّف does not?',
          options: ['الإعلال بالقلب and الحذف', 'Rules of الوزن', 'Rules of التصغير', 'الإدغام, نقل الحركة, and what happens when ضمائر are attached'],
          correct: 3,
        },
        {
          title: 'زلزل ودحرج',
          kind: 'mcq',
          prompt: 'Why does the رباعي مضعَّف need no rulings of its own?',
          options: ['It conjugates exactly like any other رباعي, such as دَحْرَجَ', 'It never occurs in the Qur’an', 'It has no مضارع', 'It is always سالم'],
          correct: 0,
        },
        {
          title: 'عسعس',
          kind: 'mcq',
          prompt: 'In عَسْعَسَ, which letter is the عين of the word?',
          options: ['The second ع', 'The second س', 'The first س', 'The first ع'],
          correct: 2,
        },
        {
          title: 'وزن المضعَّف الرباعي',
          kind: 'mcq',
          prompt: 'What is the وزن of قَلْقَلَ؟',
          options: ['فَعْفَلَ', 'افْتَعَلَ', 'فَعْلَلَ', 'فَعَّلَ'],
          correct: 2,
        },
        {
          title: 'تمييز المضعَّفين',
          kind: 'mcq',
          prompt: 'A four-letter verb has its first and third letters identical and its second and fourth identical. Which kind of مضعَّف is it?',
          options: ['مضعَّف الرباعي', 'مضعَّف الثلاثي', 'A مزيد of a ثلاثي مضعَّف', 'Neither — it is سالم'],
          correct: 0,
        },
        {
          title: 'أخذ',
          kind: 'mcq',
          prompt: 'In أَخَذَ, which position carries the همزة؟',
          options: ['It is زائدة', 'الفاء', 'العين', 'اللام'],
          correct: 1,
        },
        {
          title: 'سأل',
          kind: 'mcq',
          prompt: 'In سَأَلَ, which position carries the همزة؟',
          options: ['اللام', 'Both the فاء and the عين', 'العين', 'الفاء'],
          correct: 2,
        },
        {
          title: 'قرأ',
          kind: 'mcq',
          prompt: 'In قَرَأَ, which position carries the همزة؟',
          options: ['العين', 'None — the همزة is زائدة', 'اللام', 'الفاء'],
          correct: 2,
        },
        {
          title: 'الهمزة والعلة',
          kind: 'mcq',
          prompt: 'Why does المهموز fall under الصحيح rather than المعتل؟',
          options: ['Because it never undergoes إعلال', 'The همزة is a حرف صحيح, not one of ا و ي', 'The همزة is a حرف علة but a strong one', 'Because it is always in the فاء position'],
          correct: 1,
        },
        {
          title: 'صحيح لا سالم',
          kind: 'mcq',
          prompt: 'Which two of the three kinds of صحيح fail to qualify as سالم؟',
          options: ['السالم and المهموز', 'None — all three are سالم', 'المضعَّف and المهموز', 'السالم and المضعَّف'],
          correct: 2,
        },
        {
          title: 'تصنيف مدَّ',
          kind: 'mcq',
          prompt: 'How is مَدَّ classified across the two levels of division?',
          options: ['معتل, and within that أجوف', 'صحيح, and within that سالم', 'معتل, and within that ناقص', 'صحيح, and within that مضعَّف الثلاثي'],
          correct: 3,
        },
        {
          title: 'تصنيف سأل',
          kind: 'mcq',
          prompt: 'How is سَأَلَ classified across the two levels of division?',
          options: ['صحيح, and within that مضعَّف', 'صحيح, and within that مهموز', 'معتل, and within that أجوف', 'صحيح, and within that سالم'],
          correct: 1,
        },
        {
          title: 'قعد وجلس',
          kind: 'mcq',
          prompt: 'What do قَعَدَ and جَلَسَ demonstrate about السالم؟',
          options: ['Its أصول carry no زوائد', 'It is always ثلاثي مجرد', 'Its عين is always مفتوحة', 'Its أصول carry no علة, no همزة and no تضعيف'],
          correct: 3,
        },
        {
          title: 'مضعَّف ومهموز',
          kind: 'mcq',
          prompt: 'Could a single verb be both مضعَّف and مهموز؟',
          options: ['Only if it is رباعي', 'Only if the همزة is زائدة', 'Yes — the two conditions concern different letters and can coexist', 'No — the categories are mutually exclusive'],
          correct: 2,
        },
        {
          title: 'ترتيب التصنيف',
          kind: 'mcq',
          prompt: 'To classify a verb under this division, what do you check first?',
          options: ['Whether any of its أصول is a حرف علة, which settles صحيح or معتل', 'Whether it carries a همزة', 'Whether its عين and لام match', 'Whether it is مجرد or مزيد'],
          correct: 0,
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'المثال والأجوف',
      subtitle: 'Weak in the فاء and Weak in the عين — the first two kinds of معتل, why each is so named, and ضمائر الرفع المتحركة',
      concepts: [
        {
          heading: 'أقسام المعتل الأربعة',
          lines: [
            { box: { title: 'Definition', lines: [
              `يَنْقَسِمُ المُعْتَلُّ إلى مِثَالٍ، وأَجْوَفَ، ونَاقِصٍ، ولَفِيفٍ`,
            ] } },
            { html: `المعتل divides into مِثَال, أَجْوَف, نَاقِص, and لَفِيف. Four kinds, and each is named for where the weakness falls.`, list: false },
            { table: { title: 'The Four Kinds at a Glance', headers: ['القسم (Kind)', 'الموضع المعتل (The Weak Position)'], rows: [
              ['المِثَال', 'الفاء'],
              ['الأَجْوَف', 'العين'],
              ['النَّاقِص', 'اللام'],
              ['اللَّفِيف', 'موضعان اثنان'],
            ] } },
            { html: `The first three take one weak position each; اللفيف is the case of two, and it splits further according to whether those two are adjacent or separated.`, list: false },
          ],
          exercise: {
            prompt: `A verb has exactly one weak أصل, and it is the middle letter. Which قسم is it?`,
            kind: 'mcq',
            options: ['الأجوف', 'المثال', 'الناقص', 'اللفيف المقرون'],
            correct: 0,
          },
        },
        {
          heading: 'المثال',
          lines: [
            { box: { title: 'Definition', lines: [
              `المِثَال: ما اعْتَلَّتْ فَاؤُهُ، نحو: وَعَدَ ويَسَرَ`,
            ] } },
            { html: `المثال: that whose فاء is weak — for example وَعَدَ (he promised) and يَسَرَ (it became easy).`, list: false },
            { box: { title: 'Rule', lines: [
              `وسُمِّيَ بذلك لأنَّهُ يُمَاثِلُ الصَّحِيحَ في عَدَمِ إِعْلَالِ مَاضِيهِ`,
            ] } },
            { html: `It is named that because it resembles (<bdi>يُمَاثِلُ</bdi>) الصحيح in one respect: its ماضي undergoes no إعلال. That resemblance holds for this قسم alone, as the table below shows.`, list: false },
            { table: { title: 'Why the resemblance holds only for المثال', headers: ['القسم (Kind)', 'ماضيه (Its ماضي Form)', 'ما وقع فيه (What Happened to It)'], rows: [
              ['الأجوف', 'قَالَ / قُلْتُ', 'إعلال — by قَلْب (substitution) in قَالَ, and by حَذْف (deletion) in قُلْتُ'],
              ['الناقص', 'رَمَى / رَمَوْا', 'إعلال — by قَلْب in رَمَى, and by حَذْف in رَمَوْا'],
              ['المثال', 'وَعَدَ / وَعَدْتُ / وَعَدُوا', 'لا إعلال في الماضي — no حذف and no قلب'],
            ] } },
          ],
          exercise: {
            prompt: `On what ground is المثال so named?`,
            kind: 'mcq',
            options: ['Its فاء resembles a حرف صحيح in sound', 'It is the model on which the other أقسام are built', 'Its مضارع resembles that of the صحيح', 'Its ماضي resembles that of the صحيح, undergoing no إعلال'],
            correct: 3,
          },
        },
        {
          heading: 'الأجوف',
          lines: [
            { box: { title: 'Definition', lines: [
              `الأَجْوَف: ما اعْتَلَّتْ عَيْنُهُ، نحو: قَالَ وبَاعَ`,
            ] } },
            { html: `الأجوف: that whose عين is weak — for example قَالَ (he said) and بَاعَ (he sold).`, list: false },
            { box: { title: 'Rule', lines: [
              `وسُمِّيَ بذلك لِخُلُوِّ جَوْفِهِ، أي وَسَطِهِ، مِنَ الحَرْفِ الصَّحِيحِ`,
            ] } },
            { html: `It is named that for the emptiness of its <bdi>جَوْف</bdi> — that is, its middle — of a sound letter. Hollow, in other words, because its middle position has no solid consonant sitting in it.`, list: false },
            { html: `It carries a second name as well, and that one is a test rather than a description:`, list: false },
            { box: { title: 'Rule', lines: [
              `ويُسَمَّى أيضًا ذَا الثَّلَاثَةِ، لأنَّهُ عِنْدَ إِسْنَادِهِ لِتَاءِ الفَاعِلِ يَصِيرُ مَعَهَا على ثَلَاثَةِ أَحْرُفٍ، كَقُلْتُ وبِعْتُ، في قَالَ وبَاعَ`,
            ] } },
            { html: `It is also called <bdi>ذُو الثَّلَاثَة</bdi> — the one with three — because when تاء الفاعل is attached to it, it comes with it to three letters, as in قُلْتُ and بِعْتُ from قَالَ and بَاعَ. Attach تاء الفاعل and count what is left: the عين drops, so قَالَ becomes قُلْتُ — three letters in all.`, list: false },
          ],
          exercise: {
            prompt: `Why is the أجوف also called ذو الثلاثة؟`,
            kind: 'mcq',
            options: ['Because with تاء الفاعل attached it comes to three letters, as قَالَ becomes قُلْتُ', 'Because it has three أصول', 'Because three letters may occupy its عين', 'Because it has three forms of إعلال'],
            correct: 0,
          },
        },
        {
          heading: 'ضمائر الرفع المتحركة المتصلة',
          lines: [
            { html: `The ذو الثلاثة test was stated with تاء الفاعل, but the ruling is wider than that one pronoun.`, list: false },
            { box: { title: 'Rule', lines: [
              `هذا الحُكْمُ يَشْمَلُ ضَمَائِرَ الرَّفْعِ المُتَحَرِّكَةِ، المُتَّصِلَةِ`,
              `وهي ثَلَاثَةٌ: تَاءُ الفَاعِلِ، ونَا المُتَكَلِّمِينَ، ونُونُ النِّسْوَةِ`,
            ] } },
            { html: `This ruling extends to every vowelled, attached subject pronoun (<bdi>ضَمَائِر الرَّفْع المُتَحَرِّكَة المُتَّصِلَة</bdi>). There are three of them: تَاءُ الفَاعِلِ, نَا المُتَكَلِّمِينَ, and نُونُ النِّسْوَةِ. Any one of the three produces the same effect.`, list: false },
            { table: { headers: ['الضمير (Pronoun)', 'المثال (Example)'], rows: [
              ['تاء الفاعل', 'قُلْتُ'],
              ['نا المتكلمين', 'نحن قُلْنَا'],
              ['نون النسوة', 'هُنَّ قُلْنَ شيئًا'],
            ] } },
            { html: `All three are <bdi>متحركة</bdi> — they carry a vowel — and all three are <bdi>متصلة</bdi>, attached directly to the verb. That combination is what forces the عين to drop.`, list: false },
          ],
          exercise: {
            prompt: `Which three pronouns make up ضمائر الرفع المتحركة المتصلة؟`,
            kind: 'mcq',
            options: ['تاء الفاعل، واو الجماعة، ياء المخاطبة', 'نون التوكيد، نون النسوة، نا المتكلمين', 'ألف الاثنين، واو الجماعة، ياء المخاطبة', 'تاء الفاعل، نا المتكلمين، نون النسوة'],
            correct: 3,
          },
        },
      ],
      quiz: [
        {
          q: 'Into what four kinds does المعتل divide?',
          options: ['سالم، مضعَّف، مهموز، لفيف', 'مجرد، مزيد، ملحق، أصم', 'واوي، يائي، ألفي، مهموز', 'مثال، أجوف، ناقص، لفيف'],
          correct: 3,
        },
        {
          q: 'What is المثال؟',
          options: ['Its فاء and لام are معتل', 'Its فاء is معتل', 'Its عين is معتل', 'Its لام is معتل'],
          correct: 1,
        },
        {
          q: 'What is الأجوف؟',
          options: ['Its عين is معتل', 'Its فاء is معتل', 'Its لام is معتل', 'Its عين and لام are معتل'],
          correct: 0,
        },
        {
          q: 'وَعَدَ and يَسَرَ are examples of:',
          options: ['اللفيف', 'المثال', 'الأجوف', 'الناقص'],
          correct: 1,
        },
        {
          q: 'Why is the أجوف so named?',
          options: ['لمماثلته الصحيح', 'لاقتران حرفي العلة فيه', 'لخلو جوفه — its middle is empty of a sound letter', 'لنقصانه بحذف آخره'],
          correct: 2,
        },
        {
          q: 'How many ضمائر رفع متحركة متصلة are there?',
          options: ['اثنان', 'أربعة', 'خمسة', 'ثلاثة'],
          correct: 3,
        },
      ],
      bank: [
        {
          title: 'مواضع الاعتلال',
          kind: 'mcq',
          prompt: 'The first three أقسام of المعتل are distinguished by what?',
          options: ['Which single position carries the حرف علة', 'Which حرف علة it is', 'Whether the verb is مجرد or مزيد', 'Whether the ماضي undergoes إعلال'],
          correct: 0,
        },
        {
          title: 'اللفيف',
          kind: 'mcq',
          prompt: 'What sets اللفيف apart from the other three أقسام؟',
          options: ['Its weak letter is always an ألف', 'It never undergoes إعلال', 'It is always رباعي', 'Two of its positions are weak, not one'],
          correct: 3,
        },
        {
          title: 'يسر',
          kind: 'mcq',
          prompt: 'يَسَرَ is a مثال. Which letter is its weak فاء؟',
          options: ['الراء', 'It has none — it is صحيح', 'الياء', 'السين'],
          correct: 2,
        },
        {
          title: 'مماثلة الصحيح',
          kind: 'mcq',
          prompt: 'What exactly does the مثال resemble the صحيح in?',
          options: ['In having no حرف علة at all', 'In its وزن', 'In its ماضي undergoing no إعلال', 'In accepting تاء الفاعل'],
          correct: 2,
        },
        {
          title: 'وعدتُ ووعدوا',
          kind: 'mcq',
          prompt: 'What do وَعَدَ، وَعَدْتُ and وَعَدُوا show when set side by side?',
          options: ['That the مثال has no مضارع', 'That the واو stands untouched through the ماضي — no حذف and no قلب', 'That the واو is dropped in some forms', 'That the واو turns into an ألف'],
          correct: 1,
        },
        {
          title: 'إعلال الأجوف',
          kind: 'mcq',
          prompt: 'قَالَ and قُلْتُ show two different kinds of إعلال. Which pair?',
          options: ['القلب in قَالَ, and الحذف in قُلْتُ', 'الحذف in قَالَ, and القلب in قُلْتُ', 'نقل الحركة in both', 'الإدغام in both'],
          correct: 0,
        },
        {
          title: 'إعلال الناقص',
          kind: 'mcq',
          prompt: 'رَمَى and رَمَوْا show which two kinds of إعلال؟',
          options: ['الحذف in رَمَى, and القلب in رَمَوْا', 'نقل الحركة in both', 'Neither undergoes إعلال', 'القلب in رَمَى, and الحذف in رَمَوْا'],
          correct: 3,
        },
        {
          title: 'قال وباع',
          kind: 'mcq',
          prompt: 'قَالَ and بَاعَ are examples of:',
          options: ['المثال', 'الناقص', 'اللفيف المقرون', 'الأجوف'],
          correct: 3,
        },
        {
          title: 'الجوف',
          kind: 'mcq',
          prompt: 'What does جوف mean in the name الأجوف؟',
          options: ['The root as a whole', 'الوسط — the middle of the word', 'The end of the word', 'The beginning of the word'],
          correct: 1,
        },
        {
          title: 'ذو الثلاثة',
          kind: 'mcq',
          prompt: 'قَالَ becomes قُلْتُ with تاء الفاعل. How many letters is that in all?',
          options: ['أربعة', 'خمسة', 'اثنان', 'ثلاثة'],
          correct: 3,
        },
        {
          title: 'بعتُ',
          kind: 'mcq',
          prompt: 'بَاعَ becomes بِعْتُ with تاء الفاعل. What has happened to the عين؟',
          options: ['It has been dropped', 'It has been turned into a ياء', 'Its vowel has moved to the فاء and it remains', 'It has been doubled'],
          correct: 0,
        },
        {
          title: 'الاسمان',
          kind: 'mcq',
          prompt: 'The أجوف carries two names. What is the difference between them?',
          options: ['أجوف applies to the واوي and ذو الثلاثة to the يائي', 'They apply to different verbs', 'أجوف describes its shape; ذو الثلاثة states a test you can perform', 'أجوف is the نحوي name and ذو الثلاثة the صرفي'],
          correct: 2,
        },
        {
          title: 'شمول الحكم',
          kind: 'mcq',
          prompt: 'The ذو الثلاثة rule is demonstrated with تاء الفاعل but applies more widely. To what?',
          options: ['To نون التوكيد as well', 'To all ضمائر الرفع المتحركة المتصلة', 'To all ضمائر النصب', 'To all ضمائر, whether متصلة or منفصلة'],
          correct: 1,
        },
        {
          title: 'قلنا',
          kind: 'mcq',
          prompt: 'In نحن قُلْنَا, which ضمير is attached?',
          options: ['نون النسوة', 'تاء الفاعل', 'واو الجماعة', 'نا المتكلمين'],
          correct: 3,
        },
        {
          title: 'قلنَ',
          kind: 'mcq',
          prompt: 'In هُنَّ قُلْنَ شيئًا, which ضمير is attached?',
          options: ['نا المتكلمين', 'نون التوكيد', 'تاء التأنيث الساكنة', 'نون النسوة'],
          correct: 3,
        },
        {
          title: 'متحركة ومتصلة',
          kind: 'mcq',
          prompt: 'Two conditions qualify the ضمائر in question. What are they?',
          options: ['That they be ضمائر نصب, and متصلة', 'That they be متحركة, and متصلة to the verb', 'That they be ساكنة, and متصلة', 'That they be متحركة, and منفصلة'],
          correct: 1,
        },
        {
          title: 'قلنَ ونون النسوة',
          kind: 'mcq',
          prompt: 'Both قُلْنَا and قُلْنَ contain a نون. What distinguishes the two?',
          options: ['They are the same ضمير', 'نا المتكلمين in the first, نون النسوة in the second', 'نون النسوة in the first, نا المتكلمين in the second', 'نون التوكيد in the first'],
          correct: 1,
        },
        {
          title: 'أصل قال',
          kind: 'mcq',
          prompt: 'قَالَ is أجوف, so its عين is a حرف علة. Which letter appears there in the ماضي؟',
          options: ['A ياء, unchanged', 'Nothing — the عين has been dropped', 'An ألف, resulting from قلب', 'A واو, unchanged'],
          correct: 2,
        },
        {
          title: 'المثال والأجوف',
          kind: 'mcq',
          prompt: 'Both وَعَدَ and قَالَ have a حرف علة among their أصول. Why does only one undergo إعلال in the ماضي؟',
          options: ['وَعَدَ has no حرف علة at all', 'The weak letter of وَعَدَ is its فاء, which stands firm; that of قَالَ is its عين, which does not', 'وَعَدَ is صحيح', 'قَالَ is مضعَّف'],
          correct: 1,
        },
        {
          title: 'تصنيف باع',
          kind: 'mcq',
          prompt: 'How is بَاعَ classified across the two levels of division?',
          options: ['معتل, and within that ناقص', 'معتل, and within that أجوف', 'صحيح, and within that سالم', 'معتل, and within that مثال'],
          correct: 1,
        },
        {
          title: 'تصنيف وعد',
          kind: 'mcq',
          prompt: 'How is وَعَدَ classified across the two levels of division?',
          options: ['صحيح, and within that سالم', 'معتل, and within that أجوف', 'صحيح, and within that مهموز', 'معتل, and within that مثال'],
          correct: 3,
        },
        {
          title: 'عدد الأقسام',
          kind: 'mcq',
          prompt: 'Counting اللفيف as a single قسم, how many kinds do الصحيح and المعتل produce between them?',
          options: ['ثمانية', 'سبعة — ثلاثة للصحيح وأربعة للمعتل', 'ستة', 'خمسة'],
          correct: 1,
        },
        {
          title: 'اختبار ذي الثلاثة',
          kind: 'mcq',
          prompt: 'A ثلاثي verb comes to three letters when تاء الفاعل is attached. What does that establish?',
          options: ['That it is ناقص', 'That it is مثال', 'That it is صحيح', 'That it is أجوف — its عين has dropped'],
          correct: 3,
        },
        {
          title: 'خلو الجوف',
          kind: 'mcq',
          prompt: 'The name أجوف says the word’s middle is empty of what?',
          options: ['A همزة', 'A حرف صحيح', 'A حركة', 'A حرف زائد'],
          correct: 1,
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'الناقص واللفيف في الاسم',
      subtitle: 'Weak in the لام, the two kinds of لفيف, and the same seven divisions applied to nouns',
      concepts: [
        {
          heading: 'الناقص',
          lines: [
            { box: { title: 'Definition', lines: [
              `النَّاقِص: ما اعْتَلَّتْ لَامُهُ، نحو: غَزَا ورَمَى`,
            ] } },
            { html: `الناقص: that whose لام is weak — for example غَزَا (he waged war) and رَمَى (he threw).`, list: false },
            { box: { title: 'Rule', lines: [
              `وسُمِّيَ بذلك لِنُقْصَانِهِ، بِحَذْفِ آخِرِهِ في بَعْضِ التَّصَارِيفِ، كَغَزَتْ ورَمَتْ`,
            ] } },
            { html: `It is named that for its deficiency (<bdi>نُقْصَان</bdi>) — its last letter is dropped in some of its conjugations, as in غَزَتْ and رَمَتْ.`, list: false },
            { html: `Like the أجوف, it has a counting name too:`, list: false },
            { box: { title: 'Rule', lines: [
              `ويُسَمَّى أيضًا ذَا الأَرْبَعَةِ، لأنَّهُ عِنْدَ إِسْنَادِهِ لِتَاءِ الفَاعِلِ يَصِيرُ مَعَهَا على أَرْبَعَةِ أَحْرُفٍ، نحو غَزَوْتُ ورَمَيْتُ`,
            ] } },
            { html: `It is also called <bdi>ذَا الأَرْبَعَةِ</bdi> — the one with four — because when تاء الفاعل is attached to it, it comes with it to four letters, as in غَزَوْتُ and رَمَيْتُ. Set the two counting names side by side: with تاء الفاعل attached, the أجوف comes to three letters and the ناقص to four. The أجوف loses its weak letter; the ناقص keeps it and merely undoes its قلب.`, list: false },
          ],
          clarification: `Why does the ناقص come to four letters where the أجوف comes to three? Because the two lose different things. In قُلْتُ the عين has genuinely been dropped, leaving ق + ل + ت. In غَزَوْتُ nothing has been dropped at all: the لام is still there — it simply reverts from the ألف of غَزَا to its underlying واو, giving غ + ز + و + ت. The name ذو الأربعة is therefore a way of stating that the ناقص retains all three أصول under إسناد, in contrast to the أجوف. Note that the حذف mentioned in its own naming (غَزَتْ, رَمَتْ) happens in a different context — with تاء التأنيث الساكنة, not with تاء الفاعل.`,
          exercise: {
            prompt: `غَزَا becomes غَزَوْتُ with تاء الفاعل. How many letters is that, and what does the name record?`,
            kind: 'mcq',
            options: ['Four, but the name records the حذف instead', 'Four — hence ذو الأربعة', 'Three — hence ذو الثلاثة', 'Five'],
            correct: 1,
          },
        },
        {
          heading: 'اللفيف المفروق',
          lines: [
            { html: `The fourth kind is the one with two weak positions rather than one, and it splits in two.`, list: false },
            { box: { title: 'Definition', lines: [
              `واللَّفِيفُ قِسْمَانِ`,
              `المَفْرُوق: وهو ما اعْتَلَّتْ فَاؤُهُ ولَامُهُ، نحو: وَفَى`,
            ] } },
            { html: `اللفيف is two kinds. المفروق: that whose فاء and لام are both weak — for example وَفَى (he fulfilled).`, list: false },
            { box: { title: 'Rule', lines: [
              `وسُمِّيَ بذلك لِكَوْنِ الحَرْفِ الصَّحِيحِ فَارِقًا بَيْنَ حَرْفَيِ العِلَّةِ`,
            ] } },
            { html: `It is named that because the sound letter separates (<bdi>فَارِق</bdi>) between the two weak letters. المفروق is weak in the first and third positions, and called separated because the sound letter stands between the two weak ones.`, list: false },
          ],
          exercise: {
            prompt: `In وَفَى, which position holds the sound letter?`,
            kind: 'mcq',
            options: ['العين — and its standing between the two weak letters is what makes the verb مفروق', 'الفاء', 'اللام', 'None — all three are weak'],
            correct: 0,
          },
        },
        {
          heading: 'اللفيف المقرون',
          lines: [
            { box: { title: 'Definition', lines: [
              `المَقْرُون: وهو ما اعْتَلَّتْ عَيْنُهُ ولَامُهُ، نحو: طَوَى ورَوَى`,
            ] } },
            { html: `المقرون: that whose عين and لام are both weak — for example طَوَى (he folded) and رَوَى (he narrated).`, list: false },
            { box: { title: 'Rule', lines: [
              `وسُمِّيَ بذلك لِاقْتِرَانِ حَرْفَيِ العِلَّةِ بَعْضِهِمَا بِبَعْضٍ`,
            ] } },
            { html: `It is named that because the two weak letters sit joined (<bdi>اقْتِرَان</bdi>) to one another. المقرون is weak in the second and third positions, and called joined because the two weak letters sit next to each other.`, list: false },
            { html: `The two names are therefore describing the same fact from opposite sides: مفروق where a sound letter comes between, مقرون where none does.`, list: false },
          ],
          exercise: {
            prompt: `What distinguishes اللفيف المقرون from اللفيف المفروق؟`,
            kind: 'mcq',
            options: ['In المقرون the two weak letters are adjacent; in المفروق a sound letter separates them', 'In المقرون all three أصول are weak', 'In المقرون the weak letters are واو and ياء; in المفروق they are both واو', 'In المقرون the فاء is weak; in المفروق it is not'],
            correct: 0,
          },
        },
        {
          heading: 'جريان التقاسيم في الاسم',
          lines: [
            { box: { title: 'Rule', lines: [
              `وهذه التَّقَاسِيمُ التي جَرَتْ في الفِعْلِ، تَجْرِي أيضًا في الاسْمِ`,
            ] } },
            { html: `These divisions that ran through الفعل also run through الاسم. Everything just established for الفعل transfers to الاسم unchanged — same categories, same criteria, applied to the noun's own أصول.`, list: false },
            { table: { title: 'The Same Divisions Applied to الاسم', headers: ['الاسم', 'قسمه'], rows: [
              ['شَمْس', 'سالم'],
              ['وَجْه، يَمُن', 'مثال'],
              ['قَوْل، سَيْف', 'أجوف'],
              ['دَلْو، ظَبْي', 'ناقص'],
              ['وَحْي', 'لفيف مفروق'],
              ['جَوّ، حَيّ', 'لفيف مقرون'],
              ['أَمْر، بِئْر، نَبَأ', 'مهموز'],
              ['حَدّ', 'مضاعف ثلاثي'],
              ['بُلْبُل', 'مضعَّف رباعي'],
            ] } },
            { html: `Each pair shows the same category with a واو in one member and a ياء in the other — وَجْه against يَمُن, قَوْل against سَيْف, دَلْو against ظَبْي, جَوّ against حَيّ.`, list: false },
          ],
          exercise: {
            prompt: `وَحْي is classed as لفيف مفروق. Which of its letters is the sound one standing between the two weak letters?`,
            kind: 'mcq',
            options: ['It has none', 'الحاء', 'الواو', 'الياء'],
            correct: 1,
          },
        },
      ],
      quiz: [
        {
          q: 'What is الناقص؟',
          options: ['Its عين is معتل', 'Its فاء is معتل', 'Its عين and لام are معتل', 'Its لام is معتل'],
          correct: 3,
        },
        {
          q: 'Why is الناقص so named?',
          options: ['لخلو جوفه من الحرف الصحيح', 'لمماثلته الصحيح', 'لاقتران حرفي العلة فيه', 'لنقصانه بحذف آخره في بعض التصاريف'],
          correct: 3,
        },
        {
          q: 'What is the second name of الناقص؟',
          options: ['ذو الأربعة', 'ذو الثلاثة', 'الأصمّ', 'المفروق'],
          correct: 0,
        },
        {
          q: 'What is اللفيف المفروق؟',
          options: ['Its عين and لام are معتل', 'Its فاء and عين are معتل', 'All three of its root letters are معتل', 'Its فاء and لام are معتل'],
          correct: 3,
        },
        {
          q: 'طَوَى and رَوَى are examples of:',
          options: ['اللفيف المفروق', 'الناقص', 'الأجوف', 'اللفيف المقرون'],
          correct: 3,
        },
        {
          q: 'Do these divisions apply to الاسم as well as الفعل؟',
          options: ['Only the أقسام of الصحيح do', 'Yes — the same categories run through الاسم unchanged', 'No — they are peculiar to الفعل', 'Only السالم and المهموز do'],
          correct: 1,
        },
      ],
      bank: [
        {
          title: 'غزا ورمى',
          kind: 'mcq',
          prompt: 'غَزَا and رَمَى are examples of:',
          options: ['اللفيف المقرون', 'الناقص', 'الأجوف', 'المثال'],
          correct: 1,
        },
        {
          title: 'غزتْ ورمتْ',
          kind: 'mcq',
          prompt: 'What do غَزَتْ and رَمَتْ demonstrate?',
          options: ['The حذف of the last letter that gives الناقص its name', 'The قلب of the لام into an ألف', 'The counting test of ذو الأربعة', 'That the ناقص accepts تاء الفاعل'],
          correct: 0,
        },
        {
          title: 'غزوتُ ورميتُ',
          kind: 'mcq',
          prompt: 'What do غَزَوْتُ and رَمَيْتُ demonstrate?',
          options: ['That the عين is dropped', 'That the ناقص resembles the صحيح', 'That with تاء الفاعل the ناقص comes to four letters', 'That the لام is dropped'],
          correct: 2,
        },
        {
          title: 'ثلاثة وأربعة',
          kind: 'mcq',
          prompt: 'Why does the أجوف come to three letters with تاء الفاعل while the ناقص comes to four?',
          options: ['The أجوف loses its عين; the ناقص keeps its لام, which merely reverts to its underlying letter', 'The ناقص gains an extra letter', 'The أجوف is always ثلاثي and the ناقص رباعي', 'The تاء counts differently in each'],
          correct: 0,
        },
        {
          title: 'رميتُ',
          kind: 'mcq',
          prompt: 'رَمَى becomes رَمَيْتُ. What has the ألف reverted to?',
          options: ['A همزة', 'Nothing — it has been dropped', 'A ياء', 'A واو'],
          correct: 2,
        },
        {
          title: 'غزوتُ',
          kind: 'mcq',
          prompt: 'غَزَا becomes غَزَوْتُ. What has the ألف reverted to?',
          options: ['A همزة', 'It has been dropped', 'A واو', 'A ياء'],
          correct: 2,
        },
        {
          title: 'وفى',
          kind: 'mcq',
          prompt: 'وَفَى is an example of:',
          options: ['الناقص', 'اللفيف المفروق', 'اللفيف المقرون', 'المثال'],
          correct: 1,
        },
        {
          title: 'الحرف الفارق',
          kind: 'mcq',
          prompt: 'What earns اللفيف المفروق its name?',
          options: ['Its فاء is separated from its لام by two letters', 'Its حروف علة are dropped in conjugation', 'A حرف صحيح stands between its two حروف علة', 'Its two حروف علة differ from one another'],
          correct: 2,
        },
        {
          title: 'الاقتران',
          kind: 'mcq',
          prompt: 'What earns اللفيف المقرون its name?',
          options: ['Its حروف علة are of the same kind', 'It is joined to the أجوف in its rulings', 'Its لام is joined to its فاء', 'Its two حروف علة sit next to each other'],
          correct: 3,
        },
        {
          title: 'مواضع اللفيفين',
          kind: 'mcq',
          prompt: 'Which two positions are weak in اللفيف المقرون؟',
          options: ['الفاء واللام', 'الفاء والعين', 'اللامان', 'العين واللام'],
          correct: 3,
        },
        {
          title: 'وجهان لحقيقة واحدة',
          kind: 'mcq',
          prompt: 'The names مفروق and مقرون describe the same fact from opposite sides. What fact?',
          options: ['Whether a sound letter comes between the two weak letters', 'Which حرف علة is involved', 'Whether the verb is ثلاثي or رباعي', 'Whether the ماضي undergoes إعلال'],
          correct: 0,
        },
        {
          title: 'شمس',
          kind: 'mcq',
          prompt: 'شَمْس is classed as:',
          options: ['مهموز', 'مضعَّف', 'مثال', 'سالم'],
          correct: 3,
        },
        {
          title: 'وجه ويمن',
          kind: 'mcq',
          prompt: 'وَجْه and يَمُن are both classed as مثال. What do they show together?',
          options: ['That the مثال is always سالم العين', 'That the مثال undergoes إعلال', 'That the مثال may be واوي or يائي', 'That the مثال must be an اسم'],
          correct: 2,
        },
        {
          title: 'قول وسيف',
          kind: 'mcq',
          prompt: 'قَوْل and سَيْف are classed as:',
          options: ['أجوف', 'ناقص', 'مثال', 'لفيف مقرون'],
          correct: 0,
        },
        {
          title: 'دلو وظبي',
          kind: 'mcq',
          prompt: 'دَلْو and ظَبْي are classed as:',
          options: ['ناقص', 'أجوف', 'لفيف مفروق', 'مثال'],
          correct: 0,
        },
        {
          title: 'جوّ وحيّ',
          kind: 'mcq',
          prompt: 'جَوّ and حَيّ are classed as:',
          options: ['ناقص', 'لفيف مقرون', 'لفيف مفروق', 'مضعَّف'],
          correct: 1,
        },
        {
          title: 'حيّ',
          kind: 'mcq',
          prompt: 'حَيّ is لفيف مقرون rather than مضعَّف, despite its doubled letter. Why?',
          options: ['It is رباعي', 'Its همزة excludes it from المضعَّف', 'Its عين and لام are both ياء — حروف علة, which places it under المعتل', 'Its فاء and لام match'],
          correct: 2,
        },
        {
          title: 'أمر وبئر ونبأ',
          kind: 'mcq',
          prompt: 'أَمْر، بِئْر and نَبَأ are classed as مهموز. What do the three together show?',
          options: ['Three different kinds of همزة', 'That المهموز is always an اسم', 'That المهموز is a kind of معتل', 'The همزة in each of the three positions: فاء, عين and لام'],
          correct: 3,
        },
        {
          title: 'حدّ',
          kind: 'mcq',
          prompt: 'حَدّ is classed as:',
          options: ['مضاعف ثلاثي', 'مضعَّف رباعي', 'لفيف مقرون', 'سالم'],
          correct: 0,
        },
        {
          title: 'بلبل',
          kind: 'mcq',
          prompt: 'بُلْبُل is classed as:',
          options: ['مهموز', 'مضعَّف رباعي', 'مضاعف ثلاثي', 'سالم'],
          correct: 1,
        },
        {
          title: 'حدّ وبلبل',
          kind: 'mcq',
          prompt: 'What distinguishes حَدّ from بُلْبُل, given that both are مضعَّف؟',
          options: ['حَدّ carries a همزة', 'حَدّ has its عين and لام matching; بُلْبُل has two matching pairs across four أصول', 'حَدّ is رباعي and بُلْبُل ثلاثي', 'حَدّ is an اسم and بُلْبُل a فعل'],
          correct: 1,
        },
        {
          title: 'الواوي واليائي',
          kind: 'mcq',
          prompt: 'Why do the noun examples come in pairs — وَجْه with يَمُن, قَوْل with سَيْف, دَلْو with ظَبْي؟',
          options: ['To show each category with a واو in one member and a ياء in the other', 'To show the singular and the plural of each', 'To show the اسم and the فعل of each root', 'To show the مجرد and the مزيد of each'],
          correct: 0,
        },
        {
          title: 'تصنيف طوى',
          kind: 'mcq',
          prompt: 'How is طَوَى classified across the two levels of division?',
          options: ['معتل, and within that ناقص', 'صحيح, and within that مضعَّف', 'معتل, and within that لفيف مقرون', 'معتل, and within that لفيف مفروق'],
          correct: 2,
        },
        {
          title: 'ثمانية أقسام',
          kind: 'mcq',
          prompt: 'Counting اللفيف as two, how many categories does this division ultimately produce?',
          options: ['ستة', 'تسعة', 'ثمانية — ثلاثة للصحيح وخمسة للمعتل', 'سبعة'],
          correct: 2,
        },
      ],
    },
  ],
};

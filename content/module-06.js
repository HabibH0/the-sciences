// Module 06 — النواصب والجوازم (Subjunctive- and Jussive-Forcing Letters)
//
// Content is adapted from a bilingual Anki deck
// (النَحْوُ__2 الْعَامِلِ وَغَيْرِ الْعَامِلِ__2 الْحَرْفِ__1 الْحَرْفِ الْعَامِلِ__3 الحرف العامل الى الفعل.apkg,
// 28 notes) prepared for this conversion. Definitions and examples are kept
// faithful to the source notes. Concept bodies are short by design (a
// sentence or two, not teaching prose); quiz/bank question text is English
// with Arabic grammatical terms left in Arabic. This is a noticeably
// smaller source deck than Modules 04–05 (28 notes vs. 62–129), so it
// naturally divides into 3 lessons rather than 4–6 — the topic itself
// (عامل حروف that reach into الفعل, not الاسم) is simply narrower.
//
// The source deck covers الحرف العامل الى الفعل (§3 of الحرف العامل, itself
// §2 of الحرف, itself §2 of العامل وغير العامل): the four نواصب المضارع
// (أنْ، كي، لن، إذن) with the rules for إضمار أنْ, and جوازم المضارع — the
// four جازمة لفعل واحد (لم، لما، لام الأمر، لا الناهية) and the two جازمة
// لفعلين (إنْ، إذما) governing a شرط + جواب.

export default {
  id: '06',
  title: 'النواصب والجوازم',
  heading: 'العامل وغير العامل',
  subheading: 'الحرف العامل',
  blurb: 'النواصب والجوازم: the particles that put the مضارع in the subjunctive or the jussive.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'نواصب المضارع: أنْ وكي',
      subtitle: 'Subjunctive Particles — the two categories of حروف تعمل في الفعل, أنْ الناصبة, and كي',
      sourceRef: 'pp. 73–77',
      concepts: [
        {
          heading: 'حروف تعمل في الفعل: نواصب وجوازم',
          lines: [
            { html: `<bdi>حُرُوف</bdi> operating on the <bdi>فِعْل</bdi> (specifically the مضارع) split into two categories: حروف putting المضارع in <bdi>نَصْب</bdi> — the <bdi>نَوَاصِب</bdi>, and حروف putting المضارع in <bdi>جَزْم</bdi> — the <bdi>جَوَازِم</bdi>.`, list: false },
            { html: `Four حروف make up the نواصب:`, list: false },
            { html: `<bdi>أَنْ، كَيْ، لَنْ، إِذَنْ</bdi>`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `What are the two categories of حروف operating on the فعل؟`,
            kind: 'mcq',
            options: ['حروف تنصب المضارع (نواصب), and حروف تجزم المضارع (جوازم)', 'حروف تنصب الاسم, and حروف تجره', 'حروف تعمل في الماضي فقط, and حروف تعمل في الأمر فقط', 'حروف زائدة, and حروف أصلية'],
            correct: 0,
          },
        },
        {
          heading: 'أنْ الناصبة (المصدرية)',
          lines: [
            { html: `<bdi>أَنْ الناصبة</bdi> is a <bdi>حَرْفُ مَصْدَر</bdi>, as in ﴿أَلَا تُحِبُّونَ أَنْ يَغْفِرَ اللَّهُ لَكُمْ﴾.`, list: false },
            { html: `After a فعل قلب, it must be told apart from أنْ المخففة (the lightened form of أنّ, covered last module):`, list: false },
            { table: { headers: ['Preceding فعل', 'Reading', 'Example'], rows: [
              ['فعل of certainty (يقين)', 'مخففة', '﴿عَلِمَ أَنْ سَيَكُونُ مِنْكُمْ مَرْضَىٰ﴾'],
              ['فعل of supposition (ظن)', 'both readings possible', '﴿وَحَسِبُوا أَلَّا تَكُونَ فِتْنَةٌ﴾'],
              ['no فعل قلب at all', 'مصدرية', '﴿نَطْمَعُ أَنْ يَغْفِرَ لَنَا رَبُّنَا خَطَايَانَا﴾'],
            ] } },
          ],
          exercise: {
            prompt: `How do you distinguish أنْ الناصبة (المصدرية) from أنْ المخففة after a فعل قلب؟`,
            kind: 'mcq',
            options: ['After a فعل يقين it is مخففة; after a فعل ظن both are possible; with no فعل قلب it is مصدرية', 'أنْ is always مصدرية, regardless of what precedes it', 'أنْ is always مخففة whenever a فعل قلب precedes it, with no exception', 'The distinction only matters in poetry, never in the Qurʾān'],
            correct: 0,
          },
        },
        {
          heading: 'كي',
          lines: [
            { html: `<bdi>كَيْ</bdi> is a <bdi>حَرْفُ مَصْدَرٍ لِلتَّعْلِيل</bdi> (purpose), as in ﴿فَرَجَعْنَاكَ إِلَىٰ أُمِّكَ كَيْ تَقَرَّ عَيْنُهَا﴾.`, list: false },
            { html: `It is preceded by the <bdi>لَامُ الْجَرّ</bdi>, whether explicit (﴿لِكَيْلَا يَعْلَمَ بَعْدَ عِلْمٍ شَيْئًا﴾) or implied (تُقَدَّر), as in ﴿كَيْ تَقَرَّ عَيْنُهَا﴾ (i.e. لِكَيْ).`, list: false },
          ],
          exercise: {
            prompt: `What precedes كي؟`,
            kind: 'mcq',
            options: ['اللام الجارة, whether explicit or implied', 'واو القسم always', 'حرف تنبيه', 'Nothing ever precedes it'],
            correct: 0,
          },
        },
        {
          heading: 'لن',
          lines: [
            { html: `<bdi>لَنْ</bdi> emphasises the <bdi>نَفْي</bdi> of the <b>future</b>, as in ﴿فَلَنْ أُكَلِّمَ الْيَوْمَ إِنْسِيًّا﴾.`, list: false },
            { html: `It only indicates <bdi>التَّأْبِيد</bdi> (perpetuity) when contextual evidence (<bdi>قَرِينَة</bdi>) supports that, as in ﴿لَنْ يَخْلُقُوا ذُبَابًا﴾ — لن on its own does not mean "never."`, list: false },
          ],
          exercise: {
            prompt: `Does لن by itself imply eternity (that something will NEVER happen)؟`,
            kind: 'mcq',
            options: ['No — it emphasises negation of the future; تأبيد only comes from contextual قرينة', 'Yes, لن always and only means eternal negation', 'No, لن only ever negates the past', "Yes, but only when it precedes a فعل أمر"],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'How many نواصب المضارع are there؟',
          options: ['أربعة', 'ثلاثة', 'خمسة', 'اثنان'],
          correct: 0,
        },
        {
          q: 'List the four نواصب المضارع.',
          options: ['أنْ، كي، لن، إذن', 'لم، لما، لا، لام الأمر', 'إنْ، إذما، لو، لولا', 'هل، ما، لا، أم'],
          correct: 0,
        },
        {
          q: '﴿نَطْمَعُ أَنْ يَغْفِرَ لَنَا رَبُّنَا خَطَايَانَا﴾ — أنْ here, with no فعل قلب preceding it, is:',
          options: ['مصدرية', 'مخففة من أنّ', 'زائدة', 'شرطية'],
          correct: 0,
        },
        {
          q: 'كي carries the meaning of:',
          options: ['التعليل (purpose)', 'التوقع', 'الاستدراك', 'التمني'],
          correct: 0,
        },
        {
          q: '﴿لِكَيْلَا يَعْلَمَ بَعْدَ عِلْمٍ شَيْئًا﴾ shows كي preceded by an explicit:',
          options: ['لام الجر', 'لام الأمر', 'لام القسم', 'لام الابتداء'],
          correct: 0,
        },
        {
          q: '﴿لَنْ يَخْلُقُوا ذُبَابًا﴾ carries a sense of تأبيد (perpetuity) because of:',
          options: ['a contextual قرينة, not لن itself', 'لن always meaning perpetual negation', 'the فعل خلق being جامد', 'the plural فاعل واو الجماعة'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'نواصب أم جوازم؟',
          kind: 'mcq',
          prompt: 'حروف that put المضارع in نصب are called:',
          options: ['النواصب', 'الجوازم', 'العوامل الجازمة', 'حروف العطف'],
          correct: 0,
        },
        {
          title: 'جوازم أم نواصب؟',
          kind: 'mcq',
          prompt: 'حروف that put المضارع in جزم are called:',
          options: ['الجوازم', 'النواصب', 'حروف التوكيد', 'حروف الاستثناء'],
          correct: 0,
        },
        {
          title: 'أنْ حرف مصدر',
          kind: 'mcq',
          prompt: '﴿أَلَا تُحِبُّونَ أَنْ يَغْفِرَ اللَّهُ لَكُمْ﴾ — أنْ here is:',
          options: ['حرف مصدر (الناصبة)', 'حرف نفي', 'حرف جواب', 'حرف تنبيه'],
          correct: 0,
        },
        {
          title: 'أنْ بعد فعل يقين',
          kind: 'mcq',
          prompt: '﴿عَلِمَ أَنْ سَيَكُونُ مِنْكُمْ مَرْضَىٰ﴾ — أنْ here, after a فعل يقين, is:',
          options: ['مخففة من أنّ', 'مصدرية ناصبة', 'زائدة', 'شرطية جازمة'],
          correct: 0,
        },
        {
          title: 'أنْ بعد فعل ظن',
          kind: 'mcq',
          prompt: '﴿وَحَسِبُوا أَلَّا تَكُونَ فِتْنَةٌ﴾ — after this فعل ظن, أنْ can be read as:',
          options: ['both مخففة and مصدرية', 'مخففة only, never مصدرية', 'مصدرية only, never مخففة', 'neither reading is valid here'],
          correct: 0,
        },
        {
          title: 'كي للتعليل',
          kind: 'mcq',
          prompt: "﴿فَرَجَعْنَاكَ إِلَىٰ أُمِّكَ كَيْ تَقَرَّ عَيْنُهَا﴾ illustrates كي's meaning of:",
          options: ['التعليل (purpose)', 'التوقع', 'الاستدراك', 'التمني'],
          correct: 0,
        },
        {
          title: 'لام مقدرة قبل كي',
          kind: 'mcq',
          prompt: 'In ﴿كَيْ تَقَرَّ عَيْنُهَا﴾, the لام before كي is:',
          options: ['implied (مقدرة), i.e. لكي', 'explicit and written out', 'impossible — لام never precedes كي', 'a لام القسم'],
          correct: 0,
        },
        {
          title: 'لن ونفي المستقبل',
          kind: 'mcq',
          prompt: '﴿فَلَنْ أُكَلِّمَ الْيَوْمَ إِنْسِيًّا﴾ illustrates لن:',
          options: ['emphasising negation of the future', 'negating the past', 'negating a command', 'expressing hope'],
          correct: 0,
        },
        {
          title: 'لن والتأبيد',
          kind: 'mcq',
          prompt: 'لن indicates تأبيد (perpetuity) only when:',
          options: ['a contextual قرينة supports that reading', 'it is repeated twice in a row', 'it precedes a فعل أمر', 'it is followed by لا الزائدة'],
          correct: 0,
        },
        {
          title: 'عدد النواصب',
          kind: 'mcq',
          prompt: 'How many نواصب المضارع are there in total؟',
          options: ['أربعة', 'ثلاثة', 'خمسة', 'ستة'],
          correct: 0,
        },
        {
          title: 'أنْ الناصبة تنصب',
          kind: 'mcq',
          prompt: 'أنْ الناصبة puts the مضارع in:',
          options: ['نصب', 'جزم', 'رفع', 'جر'],
          correct: 0,
        },
        {
          title: 'الفعل بعد لا يقين ولا ظن',
          kind: 'mcq',
          prompt: 'When no فعل قلب at all precedes أنْ, it is read as:',
          options: ['مصدرية', 'مخففة من أنّ', 'زائدة بلا معنى', 'نافية'],
          correct: 0,
        },
        {
          title: 'كي بلا لام',
          kind: 'mcq',
          prompt: 'Can كي occur with the لام before it only implied, not written?',
          options: ['Yes, as in ﴿كَيْ تَقَرَّ عَيْنُهَا﴾', 'No, the لام must always be written out', 'No, كي never takes a لام at all', 'Yes, but only in poetry'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿أَلَا تُحِبُّونَ أَنْ يَغْفِرَ اللَّهُ لَكُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify أَنْ here.',
          sentence: 'أَلَا تُحِبُّونَ أَنْ يَغْفِرَ اللَّهُ لَكُمْ',
          translation: 'Do you not love that Allah should forgive you?',
          cells: ['تُحِبُّونَ', 'أَنْ', 'يَغْفِرَ', 'اللَّهُ', 'لَكُمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'حرف مصدر (الناصبة)' },
            ] },
          ],
          distractors: ['مخففة من أنّ', 'زائدة'],
        },
        {
          title: 'تركيب: ﴿عَلِمَ أَنْ سَيَكُونُ مِنْكُمْ مَرْضَىٰ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify أَنْ, following this فعل يقين.',
          sentence: 'عَلِمَ أَنْ سَيَكُونُ مِنْكُمْ مَرْضَىٰ',
          translation: 'He knew that there will be among you sick people.',
          cells: ['عَلِمَ', 'أَنْ', 'سَيَكُونُ', 'مِنْكُمْ', 'مَرْضَىٰ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'مخففة من أنّ' },
            ] },
          ],
          distractors: ['مصدرية ناصبة', 'كلا الوجهين'],
        },
        {
          title: 'تركيب: ﴿وَحَسِبُوا أَلَّا تَكُونَ فِتْنَةٌ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify أَلَّا (أنْ), following this فعل ظن.',
          sentence: 'وَحَسِبُوا أَلَّا تَكُونَ فِتْنَةٌ',
          translation: 'And they thought there would be no trial.',
          cells: ['حَسِبُوا', 'أَلَّا', 'تَكُونَ', 'فِتْنَةٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'كلا الوجهين' },
            ] },
          ],
          distractors: ['مخففة من أنّ فقط', 'مصدرية فقط'],
        },
        {
          title: 'تركيب: ﴿نَطْمَعُ أَنْ يَغْفِرَ لَنَا رَبُّنَا خَطَايَانَا﴾',
          kind: 'tarkeeb',
          instruction: 'Classify أَنْ — no فعل قلب precedes it here.',
          sentence: 'نَطْمَعُ أَنْ يَغْفِرَ لَنَا رَبُّنَا خَطَايَانَا',
          translation: 'We hope that our Lord will forgive us our sins.',
          cells: ['نَطْمَعُ', 'أَنْ', 'يَغْفِرَ', 'لَنَا', 'رَبُّنَا', 'خَطَايَانَا'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'مصدرية' },
            ] },
          ],
          distractors: ['مخففة من أنّ', 'زائدة'],
        },
        {
          title: 'تركيب: ﴿فَرَجَعْنَاكَ إِلَىٰ أُمِّكَ كَيْ تَقَرَّ عَيْنُهَا﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the meaning of كي, and the implied حرف before it.',
          sentence: 'فَرَجَعْنَاكَ إِلَىٰ أُمِّكَ كَيْ تَقَرَّ عَيْنُهَا',
          translation: 'So We restored you to your mother that her eye might be content.',
          cells: ['رَجَعْنَاكَ', 'إِلَىٰ', 'أُمِّكَ', 'كَيْ', 'تَقَرَّ', 'عَيْنُهَا'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 3, role: 'حرف تعليل (واللام مقدرة)' },
            ] },
          ],
          distractors: ['تأكيد نفي المستقبل', 'حرف جواب'],
        },
        {
          title: 'تركيب: ﴿فَلَنْ أُكَلِّمَ الْيَوْمَ إِنْسِيًّا﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the meaning of لن here.',
          sentence: 'فَلَنْ أُكَلِّمَ الْيَوْمَ إِنْسِيًّا',
          translation: 'So today I will not speak to any human.',
          cells: ['لَنْ', 'أُكَلِّمَ', 'الْيَوْمَ', 'إِنْسِيًّا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تأكيد نفي المستقبل' },
            ] },
          ],
          distractors: ['حرف تعليل', 'حرف جواب'],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'إذن، وإضمار أنْ',
      subtitle: "Iḏan, and Hidden أنْ — إذن's three conditions, and where أنْ is implied جوازا or وجوبا",
      sourceRef: 'pp. 74–77',
      concepts: [
        {
          heading: 'إذن: تعريفها وشروطها',
          lines: [
            { html: `<bdi>إِذَنْ</bdi> is the حرف of response (<bdi>لِلْجَوَاب</bdi>), as in إِذَنْ تَدْخُلَ الْجَنَّةَ (said to one who says أُطِيعُ اللَّهَ).`, list: false },
            { html: `It operates on three conditions:`, list: false },
            { html: `it stands at صَدْرُ الْكَلَام`, list: true, bullet: true },
            { html: `a future-tense فعل follows it`, list: true, bullet: true },
            { html: `nothing separates it from the فعل — except a قَسَم, as in إِذَنْ وَاللَّهِ أُكْرِمَكَ`, list: true, bullet: true },
            { html: `After a <bdi>وَاو</bdi> or <bdi>فَاء</bdi>, both عمل and إهمال are allowed, with إهمال predominant, as in ﴿فَإِذًا لَا يُؤْتُونَ النَّاسَ نَقِيرًا﴾. In the muṣḥaf it is written with an <bdi>أَلِف</bdi>: ﴿فَإِذًا﴾.`, list: false },
          ],
          exercise: {
            prompt: `What are the three conditions for إذن to operate؟`,
            kind: 'mcq',
            options: ["It stands at صدر الكلام, a future فعل follows it, and nothing separates it from that فعل except a قسم", 'It must always be preceded by واو or فاء', 'It must always be followed by a فعل ماضٍ', 'It must be repeated twice in the same جملة'],
            correct: 0,
          },
        },
        {
          heading: 'إضمار أنْ جوازا',
          lines: [
            { html: `أنْ is implied optionally (<bdi>جَوَازًا</bdi>) in two places:`, list: false },
            { html: `after the لَامُ الْجَرّ, so long as it is not joined with لَا النَّافِيَة — as in ﴿لِيَغْفِرَ لَكَ اللَّهُ﴾, but NOT after لِئَلَّا, where أن must appear explicitly, as in ﴿لِئَلَّا يَكُونَ لِلنَّاسِ عَلَيْكُمْ حُجَّةٌ﴾`, list: true, bullet: true },
            { html: `after a حَرْفُ عَطْف preceded by an explicit (غَيْرُ مُؤَوَّل) اسم, as in ﴿وَمَا كَانَ لِبَشَرٍ أَنْ يُكَلِّمَهُ اللَّهُ إِلَّا وَحْيًا أَوْ مِنْ وَرَاءِ حِجَابٍ أَوْ يُرْسِلَ رَسُولًا﴾`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `Where is أنْ implied OPTIONALLY (جوازا)؟`,
            kind: 'mcq',
            options: ['After لام الجر not joined with لا النافية, and after a حرف عطف preceded by an explicit اسم', 'Only ever after حتى', 'Only ever after واو الصرف', 'It is never implied optionally — always either obligatory or forbidden'],
            correct: 0,
          },
        },
        {
          heading: 'إضمار أنْ وجوبا',
          lines: [
            { html: `أنْ is implied OBLIGATORILY (<bdi>وُجُوبًا</bdi>) in five places:`, list: false },
            { table: { headers: ['#', 'Place', 'Example'], rows: [
              ['1', 'after حَتَّى', '﴿لَنْ تَنَالُوا الْبِرَّ حَتَّىٰ تُنْفِقُوا مِمَّا تُحِبُّونَ﴾'],
              ['2', 'after لَامُ الْجُحُود', '﴿وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ﴾'],
              ['3', 'after أَوْ meaning إِلَىٰ أَنْ or إِلَّا أَنْ', '—'],
              ['4', 'after وَاوُ الصَّرْف (المعية) preceded by نفي or a verbal request', '—'],
              ['5', 'after فَاءُ السَّبَبِيَّة preceded by نفي or a verbal request', '—'],
            ] } },
          ],
          exercise: {
            prompt: `After how many things is أنْ implied OBLIGATORILY before a مضارع منصوب؟`,
            kind: 'mcq',
            options: ['خمسة', 'ثلاثة', 'سبعة', 'اثنان'],
            correct: 0,
          },
        },
        {
          heading: 'أو (إلى أن / إلا أن)، وواو الصرف',
          lines: [
            { html: `<bdi>أَوْ</bdi> before a مضارع منصوب carries one of two meanings:`, list: false },
            { table: { headers: ['Meaning', 'Example'], rows: [
              ['إلى أن', 'لَأَسْتَسْهِلَنَّ الصَّعْبَ أَوْ أُدْرِكَ الْمُنَى'],
              ['إلا أن', 'كَسَرْتُ كُعُوبَهَا أَوْ تَسْتَقِيمَا'],
            ] } },
            { html: `<bdi>وَاوُ الصَّرْف</bdi> (المعية) is the واو that, with an implied أن, puts the فعل in نصب; it must be preceded by <b>نفي</b> (﴿وَلَمَّا يَعْلَمِ اللَّهُ الَّذِينَ جَاهَدُوا مِنْكُمْ وَيَعْلَمَ الصَّابِرِينَ﴾) or by a <b>verbal request</b> (﴿يَا لَيْتَنَا نُرَدُّ وَلَا نُكَذِّبَ بِآيَاتِ رَبِّنَا وَنَكُونَ مِنَ الْمُؤْمِنِينَ﴾).`, list: false },
          ],
          exercise: {
            prompt: `What must precede واو الصرف (المعية) for it to put the following فعل in نصب؟`,
            kind: 'mcq',
            options: ['نفي or a verbal request', 'a فعل أمر only', 'a حرف جر only', 'Nothing — it always operates regardless of context'],
            correct: 0,
          },
        },
        {
          heading: 'فاء السببية، وأمثلة سماعية',
          lines: [
            { html: `Like واو الصرف, <bdi>فَاءُ السَّبَبِيَّة</bdi> licenses نصب on the following فعل when preceded by <bdi>نَفْي</bdi> or a verbal request — <bdi>الْأَمْر، النَّهْي، الِاسْتِفْهَام، التَّمَنِّي، التَّرَجِّي، الْعَرْض،</bdi> or <bdi>التَّحْضِيض</bdi>, as in أَسْلِمْ فَتَدْخُلَ الْجَنَّةَ.`, list: false },
            { html: `Separately, a handful of نصب-by-implied-أنْ examples are <bdi>سَمَاعِيّ</bdi> — heard but not extended by analogy — such as مُرْهُ يَحْفِرَهَا and خُذِ اللِّصَّ قَبْلَ يَأْخُذَكَ.`, list: false },
          ],
          exercise: {
            prompt: `List the request-types that license نصب after فاء السببية.`,
            kind: 'mcq',
            options: ['الأمر، النهي، الاستفهام، التمني، الترجي، العرض، والتحضيض (plus نفي)', 'الأمر والنهي فقط, nothing else', 'Only الاستفهام licenses it', 'None — فاء السببية never licenses نصب'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'إذن is the حرف of:',
          options: ['الجواب (response)', 'الشرط', 'الاستثناء', 'التعليل'],
          correct: 0,
        },
        {
          q: 'How is إذن written in the muṣḥaf?',
          options: ['With an alif: فإذا', 'Exactly as إذن', 'With a تنوين only', "It never appears in the muṣḥaf"],
          correct: 0,
        },
        {
          q: '﴿لِئَلَّا يَكُونَ لِلنَّاسِ عَلَيْكُمْ حُجَّةٌ﴾ — here أن must:',
          options: ['appear explicitly, not be implied', 'be implied, never written', 'be dropped along with لا', 'convert into أنّ المشددة'],
          correct: 0,
        },
        {
          q: '﴿وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ﴾ shows أنْ implied obligatorily after:',
          options: ['لام الجحود', 'حتى', 'أو', 'فاء السببية'],
          correct: 0,
        },
        {
          q: 'كَسَرْتُ كُعُوبَهَا أَوْ تَسْتَقِيمَا — أو here means:',
          options: ['إلا أن', 'إلى أن', 'إذ ذاك', 'حتى أن'],
          correct: 0,
        },
        {
          q: 'مُرْهُ يَحْفِرَهَا, with implied أنْ, is an example that is:',
          options: ['سماعي, not extended by analogy', 'قياسي, freely extendable', 'شرطية, entailing the جزم', 'من مواضع الوجوب الخمسة'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'شروط إذن الثلاثة',
          kind: 'mcq',
          prompt: 'إذن operates on three conditions. One of them is that:',
          options: ['it stands at صدر الكلام', 'it must be preceded by واو', 'it must be followed by فعل ماضٍ', 'nothing may ever separate it from anything'],
          correct: 0,
        },
        {
          title: 'الفصل بقسم',
          kind: 'mcq',
          prompt: 'إِذَنْ وَاللَّهِ أُكْرِمَكَ shows إذن separated from its فعل by:',
          options: ['a قسم', 'a نفي حرف', 'a حرف جر', 'a ضمير منفصل'],
          correct: 0,
        },
        {
          title: 'إذن بعد فاء',
          kind: 'mcq',
          prompt: '﴿فَإِذًا لَا يُؤْتُونَ النَّاسَ نَقِيرًا﴾ — after الفاء, إذن here shows:',
          options: ['الإهمال (the predominant option after و/ف)', 'الإعمال only', 'both are equally rare', 'إذن cannot follow فاء at all'],
          correct: 0,
        },
        {
          title: 'إضمار أنْ جوازا: لام الجر',
          kind: 'mcq',
          prompt: '﴿لِيَغْفِرَ لَكَ اللَّهُ﴾ shows أنْ implied:',
          options: ['جوازا, after لام الجر', 'وجوبا, after حتى', 'وجوبا, after لام الجحود', 'جوازا, after فاء السببية'],
          correct: 0,
        },
        {
          title: 'إضمار أنْ جوازا: بعد عطف',
          kind: 'mcq',
          prompt: '﴿وَمَا كَانَ لِبَشَرٍ أَنْ يُكَلِّمَهُ اللَّهُ إِلَّا وَحْيًا أَوْ مِنْ وَرَاءِ حِجَابٍ أَوْ يُرْسِلَ رَسُولًا﴾ shows أنْ implied جوازا after a حرف عطف preceded by:',
          options: ['an explicit (غير مؤول) اسم', 'a فعل أمر', 'a حرف نفي', 'a قسم'],
          correct: 0,
        },
        {
          title: 'إضمار أنْ وجوبا: حتى',
          kind: 'mcq',
          prompt: '﴿لَنْ تَنَالُوا الْبِرَّ حَتَّىٰ تُنْفِقُوا مِمَّا تُحِبُّونَ﴾ shows أنْ implied وجوبا after:',
          options: ['حتى', 'لام الجحود', 'أو', 'واو الصرف'],
          correct: 0,
        },
        {
          title: 'إضمار أنْ وجوبا: لام الجحود',
          kind: 'mcq',
          prompt: '﴿وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ﴾ shows أنْ implied وجوبا after:',
          options: ['لام الجحود', 'حتى', 'فاء السببية', 'أو'],
          correct: 0,
        },
        {
          title: 'أو بمعنى إلى أن',
          kind: 'mcq',
          prompt: 'لَأَسْتَسْهِلَنَّ الصَّعْبَ أَوْ أُدْرِكَ الْمُنَى — أو here means:',
          options: ['إلى أن', 'إلا أن', 'أم', 'ثم'],
          correct: 0,
        },
        {
          title: 'واو الصرف بعد نفي',
          kind: 'mcq',
          prompt: '﴿وَلَمَّا يَعْلَمِ اللَّهُ الَّذِينَ جَاهَدُوا مِنْكُمْ وَيَعْلَمَ الصَّابِرِينَ﴾ shows واو الصرف preceded by:',
          options: ['نفي (لما)', 'طلب', 'قسم', 'استفهام'],
          correct: 0,
        },
        {
          title: 'واو الصرف بعد طلب',
          kind: 'mcq',
          prompt: '﴿يَا لَيْتَنَا نُرَدُّ وَلَا نُكَذِّبَ بِآيَاتِ رَبِّنَا وَنَكُونَ مِنَ الْمُؤْمِنِينَ﴾ shows واو الصرف preceded by which kind of طلب?',
          options: ['التمني (يا ليتنا)', 'الأمر', 'النهي', 'الاستفهام'],
          correct: 0,
        },
        {
          title: 'فاء السببية بعد أمر',
          kind: 'mcq',
          prompt: 'أَسْلِمْ فَتَدْخُلَ الْجَنَّةَ shows فاء السببية licensing نصب after:',
          options: ['الأمر', 'النهي', 'الاستفهام', 'العرض'],
          correct: 0,
        },
        {
          title: 'فاء السببية بعد نهي',
          kind: 'mcq',
          prompt: '﴿وَلَا تَطْغَوْا فِيهِ فَيَحِلَّ عَلَيْكُمْ غَضَبِي﴾ shows فاء السببية licensing نصب after:',
          options: ['النهي', 'الأمر', 'الترجي', 'التحضيض'],
          correct: 0,
        },
        {
          title: 'فاء السببية بعد استفهام',
          kind: 'mcq',
          prompt: '﴿مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ﴾ shows فاء السببية licensing نصب after:',
          options: ['الاستفهام', 'الأمر', 'النهي', 'التمني'],
          correct: 0,
        },
        {
          title: 'مثال سماعي',
          kind: 'mcq',
          prompt: 'خُذِ اللِّصَّ قَبْلَ يَأْخُذَكَ, with implied أنْ, is:',
          options: ['سماعي, heard but not extended by analogy', 'قياسي, freely productive', 'a case of وجوب إضمار', 'invalid Arabic entirely'],
          correct: 0,
        },
        {
          title: 'عدد مواضع الوجوب',
          kind: 'mcq',
          prompt: 'How many مواضع require إضمار أنْ وجوبا؟',
          options: ['خمسة', 'اثنان', 'ثلاثة', 'سبعة'],
          correct: 0,
        },
        {
          title: 'عدد مواضع الجواز',
          kind: 'mcq',
          prompt: 'How many مواضع allow إضمار أنْ جوازا?',
          options: ['اثنان', 'خمسة', 'ثلاثة', 'واحد'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿لِيَغْفِرَ لَكَ اللَّهُ﴾',
          kind: 'tarkeeb',
          instruction: 'Is أنْ implied here جوازا or وجوبا? Then classify this as قياسي or سماعي.',
          sentence: 'لِيَغْفِرَ لَكَ اللَّهُ',
          translation: 'That Allah may forgive you.',
          cells: ['لِيَغْفِرَ', 'لَكَ', 'اللَّهُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'جوازا (لام الجر)' },
            ] },
            { position: 'below', labels: [
              { start: 0, end: 0, role: 'قياسي' },
            ] },
          ],
          distractors: ['وجوبا (حتى)', 'سماعي'],
        },
        {
          title: 'تركيب: ﴿لَنْ تَنَالُوا الْبِرَّ حَتَّىٰ تُنْفِقُوا مِمَّا تُحِبُّونَ﴾',
          kind: 'tarkeeb',
          instruction: 'Is أنْ implied here جوازا or وجوبا?',
          sentence: 'لَنْ تَنَالُوا الْبِرَّ حَتَّىٰ تُنْفِقُوا مِمَّا تُحِبُّونَ',
          translation: 'You will not attain righteousness until you spend from that which you love.',
          cells: ['تَنَالُوا', 'الْبِرَّ', 'حَتَّىٰ', 'تُنْفِقُوا', 'مِمَّا', 'تُحِبُّونَ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'وجوبا (حتى)' },
            ] },
          ],
          distractors: ['جوازا (لام الجر)', 'وجوبا (لام الجحود)'],
        },
        {
          title: 'تركيب: ﴿وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Is أنْ implied here جوازا or وجوبا؟',
          sentence: 'وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ',
          translation: 'And Allah would not let your faith go to waste.',
          cells: ['كَانَ', 'اللَّهُ', 'لِيُضِيعَ', 'إِيمَانَكُمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'وجوبا (لام الجحود)' },
            ] },
          ],
          distractors: ['جوازا (لام الجر)', 'وجوبا (حتى)'],
        },
        {
          title: 'تركيب: ﴿وَلَمَّا يَعْلَمِ اللَّهُ الَّذِينَ جَاهَدُوا مِنْكُمْ وَيَعْلَمَ الصَّابِرِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'What precedes واو الصرف here?',
          sentence: 'وَلَمَّا يَعْلَمِ اللَّهُ الَّذِينَ جَاهَدُوا مِنْكُمْ وَيَعْلَمَ الصَّابِرِينَ',
          translation: 'Not yet knowing those of you who strive, and knowing the steadfast.',
          cells: ['لَمَّا', 'يَعْلَمِ', 'اللَّهُ', 'الَّذِينَ', 'جَاهَدُوا', 'مِنْكُمْ', 'وَيَعْلَمَ', 'الصَّابِرِينَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'نفي' },
            ] },
          ],
          distractors: ['طلب (أمر)', 'استفهام'],
        },
        {
          title: 'تركيب: أَسْلِمْ فَتَدْخُلَ الْجَنَّةَ',
          kind: 'tarkeeb',
          instruction: 'What precedes فاء السببية here؟',
          sentence: 'أَسْلِمْ فَتَدْخُلَ الْجَنَّةَ',
          translation: 'Submit [to Allah], and you will enter Paradise.',
          cells: ['أَسْلِمْ', 'فَتَدْخُلَ', 'الْجَنَّةَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'طلب (أمر)' },
            ] },
          ],
          distractors: ['نفي', 'استفهام'],
        },
        {
          title: 'تركيب: مُرْهُ يَحْفِرَهَا',
          kind: 'tarkeeb',
          instruction: 'Classify this instance of implied أنْ.',
          sentence: 'مُرْهُ يَحْفِرَهَا',
          translation: 'Order him to dig it.',
          cells: ['مُرْهُ', 'يَحْفِرَهَا'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'سماعي' },
            ] },
          ],
          distractors: ['قياسي'],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'جوازم المضارع',
      subtitle: 'Jussive Particles — لم ولما ولام الأمر ولا الناهية, and إنْ وإذما governing a شرط',
      sourceRef: 'pp. 77–80',
      concepts: [
        {
          heading: 'ضربا جوازم المضارع',
          lines: [
            { html: `جزم حروف split into two subtypes:`, list: false },
            { table: { headers: ['Subtype', 'حروف'], rows: [
              ['put ONE فعل in جزم', 'لَمْ، لَمَّا، لَامُ الْأَمْر، لَا النَّاهِيَة'],
              ['put TWO أفعال in جزم', 'إِنْ، إِذْمَا'],
            ] } },
          ],
          exercise: {
            prompt: `What are the two subtypes of جزم حروف؟`,
            kind: 'mcq',
            options: ['حروف تجزم فعلا واحدا (أربعة), and حروف تجزم فعلين (اثنان)', 'حروف تجزم الاسم, and حروف تجزم الفعل', 'حروف قياسية, and حروف سماعية', 'حروف أصلية, and حروف زائدة'],
            correct: 0,
          },
        },
        {
          heading: 'لم ولما',
          lines: [
            { html: `<bdi>لَمْ</bdi> negates the مضارع and converts its meaning to the past, as in ﴿لَمْ يَلِدْ وَلَمْ يُولَدْ﴾.`, list: false },
            { html: `<bdi>لَمَّا</bdi> does the same but adds an <b>expectation that it will yet occur</b> (<bdi>مَعَ تَوَقُّعِ الْحُصُول</bdi>), as in ﴿وَلَمَّا يَدْخُلِ الْإِيمَانُ فِي قُلُوبِكُمْ﴾.`, list: false },
            { html: `An example combining <bdi>لَامُ الْأَمْر</bdi> and <bdi>لَا النَّاهِيَة</bdi> together is ﴿فَمَنْ كَانَ يَرْجُو لِقَاءَ رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا﴾.`, list: false },
          ],
          exercise: {
            prompt: `How does لما differ from لم؟`,
            kind: 'mcq',
            options: ['لما adds an expectation that the negated act will yet occur (توقع الحصول)', 'لما negates the future, while لم negates the past', 'لما only ever negates a فعل أمر', 'There is no difference between them at all'],
            correct: 0,
          },
        },
        {
          heading: 'شرط بفعلين: التسمية والمثال',
          lines: [
            { html: `In a <bdi>شَرْط</bdi> governing two أفعال, the first فعل is called the <bdi>شَرْط</bdi> (condition) and the second is the <bdi>جَوَابُ الشَّرْط</bdi>, also called <bdi>الْجَزَاء</bdi>.`, list: false },
            { html: `<bdi>إِنِ الشَّرْطِيَّة</bdi> governs exactly this pair, as in ﴿إِنْ تَجْتَنِبُوا كَبَائِرَ مَا تُنْهَوْنَ عَنْهُ نُكَفِّرْ عَنْكُمْ سَيِّئَاتِكُمْ وَنُدْخِلْكُمْ مُدْخَلًا كَرِيمًا﴾.`, list: false },
          ],
          exercise: {
            prompt: `In a شرط governing two أفعال, what are the two أفعال called؟`,
            kind: 'mcq',
            options: ['The first is الشرط; the second is جواب الشرط (also called الجزاء)', 'Both are simply called أفعال الشرط with no distinction', 'The first is الجزاء; the second is الشرط', 'The first is المسند; the second is المسند إليه'],
            correct: 0,
          },
        },
        {
          heading: 'مواضع إضمار إنْ',
          lines: [
            { html: `إِنْ الشرطية is implied (<bdi>مُقَدَّرَة</bdi>) before a مضارع مجزوم after four things:`, list: false },
            { table: { headers: ['#', 'After', 'Example'], rows: [
              ['1', 'طَلَب', '﴿تَعَالَوْا أَتْلُ﴾ (= إِنْ تَتَعَالَوْا أَتْلُ)'],
              ['2', 'اسْتِفْهَام', 'هَلْ تَزُورُنَا نُكْرِمْكَ'],
              ['3', 'تَمَنٍّ', 'لَيْتَكَ عِنْدِي أَخْدِمْكَ'],
              ['4', 'عَرْض', 'أَلَا تَنْزِلُ بِنَا تُصِبْ خَيْرًا'],
            ] } },
          ],
          exercise: {
            prompt: `After how many things is إنْ implied (مقدرة) before a مضارع مجزوم؟`,
            kind: 'mcq',
            options: ['أربعة', 'اثنان', 'ثلاثة', 'خمسة'],
            correct: 0,
          },
        },
        {
          heading: 'ما الزائدة، وتوافق الأزمنة',
          lines: [
            { html: `When redundant <bdi>مَا</bdi> is added after إنْ, it adds <bdi>تَوْكِيد</bdi>, and the condition فعل then takes the <bdi>نُونُ التَّوْكِيد</bdi>, as in ﴿وَإِمَّا يَنْزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ فَاسْتَعِذْ بِاللَّهِ﴾.`, list: false },
            { html: `The two أفعال after إنْ may combine tenses freely:`, list: false },
            { table: { headers: ['Combination', 'Example'], rows: [
              ['both مضارع', '﴿وَإِنْ تَعُودُوا نَعُدْ﴾'],
              ['both ماضٍ', '﴿وَإِنْ عُدْتُمْ عُدْنَا﴾'],
              ['مضارع then ماضٍ', 'مَنْ يَقُمْ لَيْلَةَ الْقَدْرِ … غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ'],
              ['ماضٍ then مضارع — جزم or رفع both allowed', '﴿مَنْ كَانَ يُرِيدُ حَرْثَ الْآخِرَةِ نَزِدْ لَهُ فِي حَرْثِهِ﴾'],
            ] } },
          ],
          exercise: {
            prompt: `What happens when redundant ما is added after إنْ؟`,
            kind: 'mcq',
            options: ['It emphasises, and the condition فعل then takes the نون التوكيد', 'It cancels the شرط meaning entirely', 'It converts إنْ into إنّ المشددة', 'It forces both أفعال into the ماضي tense'],
            correct: 0,
          },
        },
        {
          heading: 'الفاء قبل الجواب، وإذما',
          lines: [
            { html: `When <bdi>الْفَاء</bdi> is added before جواب الشرط, إنْ then does <b>not</b> operate on that جواب, as in ﴿وَإِنْ يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ﴾.`, list: false },
            { html: `<bdi>إِذْمَا</bdi> is a جزم حرف carrying the meaning of إنْ, as in إِذْمَا تَتُبْ تُقْبَلْ تَوْبَتُكَ.`, list: false },
          ],
          exercise: {
            prompt: `What happens to إنْ's government of جواب الشرط when الفاء is added before it؟`,
            kind: 'mcq',
            options: ['إنْ no longer operates on that جواب', 'إنْ operates even more strongly on it', 'The whole جملة becomes اسمية', 'إذن replaces إنْ automatically'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'List the four جوازم تجزم فعلا واحدا.',
          options: ['لم، لما، لام الأمر، لا الناهية', 'إنْ، إذما، لو، لولا', 'أنْ، كي، لن، إذن', 'هل، ما، لا، أم'],
          correct: 0,
        },
        {
          q: 'لم negates the مضارع and converts its meaning to:',
          options: ['الماضي', 'المستقبل', 'الحال المستمر', 'الأمر'],
          correct: 0,
        },
        {
          q: 'In a شرط بفعلين, the second فعل is called جواب الشرط, also known as:',
          options: ['الجزاء', 'العلة', 'التعليل', 'التوكيد'],
          correct: 0,
        },
        {
          q: 'هَلْ تَزُورُنَا نُكْرِمْكَ shows إنْ implied after:',
          options: ['استفهام', 'طلب', 'تمنٍّ', 'عرض'],
          correct: 0,
        },
        {
          q: 'When redundant ما follows إنْ, the شرط فعل takes:',
          options: ['نون التوكيد', 'تاء التأنيث', 'ياء المخاطبة', 'واو الجماعة'],
          correct: 0,
        },
        {
          q: 'إذما carries the meaning of:',
          options: ['إنْ', 'لو', 'لولا', 'لعل'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'جوازم فعل واحد',
          kind: 'mcq',
          prompt: 'Which of these جوازم puts only ONE فعل in جزم?',
          options: ['لم', 'إنْ', 'إذما', 'both إنْ and إذما'],
          correct: 0,
        },
        {
          title: 'جوازم فعلين',
          kind: 'mcq',
          prompt: 'Which two جوازم put TWO أفعال in جزم?',
          options: ['إنْ وإذما', 'لم ولما', 'لام الأمر ولا الناهية', 'لن وكي'],
          correct: 0,
        },
        {
          title: 'لم يلد ولم يولد',
          kind: 'mcq',
          prompt: '﴿لَمْ يَلِدْ وَلَمْ يُولَدْ﴾ illustrates لم:',
          options: ['negating the مضارع, converting it to past meaning', 'negating a فعل أمر', 'negating a فعل ماضٍ directly', 'requesting something'],
          correct: 0,
        },
        {
          title: 'لما وتوقع الحصول',
          kind: 'mcq',
          prompt: '﴿وَلَمَّا يَدْخُلِ الْإِيمَانُ فِي قُلُوبِكُمْ﴾ — لما here adds a sense of:',
          options: ['توقع الحصول (expectation it will yet occur)', 'استحالة الحصول (impossibility)', 'تكرار الحصول (repetition)', 'نفي التوقع كليا'],
          correct: 0,
        },
        {
          title: 'لام الأمر ولا الناهية معا',
          kind: 'mcq',
          prompt: '﴿فَمَنْ كَانَ يَرْجُو لِقَاءَ رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا﴾ contains both:',
          options: ['لام الأمر ولا الناهية', 'لم ولما', 'إنْ وإذما', 'كي ولن'],
          correct: 0,
        },
        {
          title: 'الشرط والجزاء',
          kind: 'mcq',
          prompt: 'In ﴿إِنْ تَجْتَنِبُوا كَبَائِرَ مَا تُنْهَوْنَ عَنْهُ نُكَفِّرْ عَنْكُمْ سَيِّئَاتِكُمْ﴾, تجتنبوا is the:',
          options: ['شرط', 'جواب الشرط (الجزاء)', 'مبتدأ', 'حال'],
          correct: 0,
        },
        {
          title: 'إنْ مقدرة بعد طلب',
          kind: 'mcq',
          prompt: '﴿تَعَالَوْا أَتْلُ﴾ (= إن تتعالوا أتل) shows إنْ implied after:',
          options: ['طلب', 'استفهام', 'تمنٍّ', 'عرض'],
          correct: 0,
        },
        {
          title: 'إنْ مقدرة بعد تمنٍّ',
          kind: 'mcq',
          prompt: 'لَيْتَكَ عِنْدِي أَخْدِمْكَ shows إنْ implied after:',
          options: ['تمنٍّ', 'طلب', 'استفهام', 'عرض'],
          correct: 0,
        },
        {
          title: 'إنْ مقدرة بعد عرض',
          kind: 'mcq',
          prompt: 'أَلَا تَنْزِلُ بِنَا تُصِبْ خَيْرًا shows إنْ implied after:',
          options: ['عرض', 'استفهام', 'تمنٍّ', 'طلب'],
          correct: 0,
        },
        {
          title: 'إما وتوكيد الجزم',
          kind: 'mcq',
          prompt: '﴿وَإِمَّا يَنْزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ فَاسْتَعِذْ بِاللَّهِ﴾ shows إنْ with redundant ما, and the فعل taking:',
          options: ['نون التوكيد', 'تاء التأنيث الساكنة', 'ياء المخاطبة', 'واو الجماعة'],
          correct: 0,
        },
        {
          title: 'كلا الفعلين مضارع',
          kind: 'mcq',
          prompt: '﴿وَإِنْ تَعُودُوا نَعُدْ﴾ shows the شرط and جواب as:',
          options: ['both مضارع', 'both ماضٍ', 'مضارع then ماضٍ', 'ماضٍ then مضارع'],
          correct: 0,
        },
        {
          title: 'كلا الفعلين ماضٍ',
          kind: 'mcq',
          prompt: '﴿وَإِنْ عُدْتُمْ عُدْنَا﴾ shows the شرط and جواب as:',
          options: ['both ماضٍ', 'both مضارع', 'مضارع then ماضٍ', 'ماضٍ then مضارع'],
          correct: 0,
        },
        {
          title: 'الفاء تمنع عمل إنْ',
          kind: 'mcq',
          prompt: '﴿وَإِنْ يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ﴾ — إنْ does NOT operate on the جواب here because of:',
          options: ['الفاء preceding the جواب', 'the جواب being جملة اسمية', 'the شرط being فعل ماضٍ', 'the presence of إلا'],
          correct: 0,
        },
        {
          title: 'إذما بمعنى إنْ',
          kind: 'mcq',
          prompt: 'إِذْمَا تَتُبْ تُقْبَلْ تَوْبَتُكَ — إذما here carries the meaning of:',
          options: ['إنْ', 'لو', 'كي', 'لن'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿لَمْ يَلِدْ وَلَمْ يُولَدْ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify لم: how many أفعال does it jazm, and what does it add beyond plain نفي؟',
          sentence: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
          translation: 'He neither begets nor is born.',
          cells: ['لَمْ', 'يَلِدْ', 'وَلَمْ', 'يُولَدْ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'فعلا واحدا' },
            ] },
            { position: 'below', labels: [
              { start: 0, end: 1, role: 'نفي وقلب للماضي فقط' },
            ] },
          ],
          distractors: ['فعلين', 'نفي مع توقع الحصول'],
        },
        {
          title: 'تركيب: ﴿وَلَمَّا يَدْخُلِ الْإِيمَانُ فِي قُلُوبِكُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify لما: what does it add beyond plain نفي؟',
          sentence: 'وَلَمَّا يَدْخُلِ الْإِيمَانُ فِي قُلُوبِكُمْ',
          translation: 'And faith has not yet entered your hearts.',
          cells: ['لَمَّا', 'يَدْخُلِ', 'الْإِيمَانُ', 'فِي', 'قُلُوبِكُمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'نفي وقلب للماضي مع توقع الحصول' },
            ] },
          ],
          distractors: ['نفي وقلب للماضي فقط', 'نفي المستقبل'],
        },
        {
          title: 'تركيب: ﴿فَمَنْ كَانَ يَرْجُو لِقَاءَ رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا﴾',
          kind: 'tarkeeb',
          instruction: 'Identify لام الأمر and لا الناهية.',
          sentence: 'فَمَنْ كَانَ يَرْجُو لِقَاءَ رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا',
          translation: 'So whoever hopes to meet his Lord, let him do righteous work and not associate anyone in the worship of his Lord.',
          cells: ['كَانَ', 'يَرْجُو', 'لِقَاءَ', 'رَبِّهِ', 'فَلْيَعْمَلْ', 'عَمَلًا', 'صَالِحًا', 'وَلَا', 'يُشْرِكْ', 'بِعِبَادَةِ', 'رَبِّهِ', 'أَحَدًا'],
          rows: [
            { position: 'above', labels: [
              { start: 4, end: 4, role: 'لام الأمر' },
              { start: 7, end: 8, role: 'لا الناهية' },
            ] },
          ],
          distractors: ['لم', 'لما'],
        },
        {
          title: 'تركيب: ﴿إِنْ تَجْتَنِبُوا كَبَائِرَ مَا تُنْهَوْنَ عَنْهُ نُكَفِّرْ عَنْكُمْ سَيِّئَاتِكُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify الشرط and جواب الشرط.',
          sentence: 'إِنْ تَجْتَنِبُوا كَبَائِرَ مَا تُنْهَوْنَ عَنْهُ نُكَفِّرْ عَنْكُمْ سَيِّئَاتِكُمْ',
          translation: 'If you avoid the major sins forbidden to you, We will remove from you your lesser sins.',
          cells: ['تَجْتَنِبُوا', 'كَبَائِرَ', 'مَا', 'تُنْهَوْنَ', 'عَنْهُ', 'نُكَفِّرْ', 'عَنْكُمْ', 'سَيِّئَاتِكُمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 4, role: 'الشرط' },
              { start: 5, end: 7, role: 'جواب الشرط (الجزاء)' },
            ] },
          ],
          distractors: ['مبتدأ', 'حال'],
        },
        {
          title: 'تركيب: إِذْمَا تَتُبْ تُقْبَلْ تَوْبَتُكَ',
          kind: 'tarkeeb',
          instruction: 'Classify إذما: how many أفعال does it jazm, and what does it mean?',
          sentence: 'إِذْمَا تَتُبْ تُقْبَلْ تَوْبَتُكَ',
          translation: 'Whenever you repent, your repentance will be accepted.',
          cells: ['إِذْمَا', 'تَتُبْ', 'تُقْبَلْ', 'تَوْبَتُكَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'فعلين، بمعنى إنْ' },
            ] },
          ],
          distractors: ['فعلا واحدا'],
        },
        {
          title: 'تركيب: ﴿تَعَالَوْا أَتْلُ﴾',
          kind: 'tarkeeb',
          instruction: 'إنْ is implied before أتل. After what does it become implied here?',
          sentence: 'تَعَالَوْا أَتْلُ',
          translation: 'Come, I will recite [to you].',
          cells: ['تَعَالَوْا', 'أَتْلُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'طلب' },
            ] },
          ],
          distractors: ['استفهام', 'تمنٍّ'],
        },
        {
          title: 'تركيب: هَلْ تَزُورُنَا نُكْرِمْكَ',
          kind: 'tarkeeb',
          instruction: 'إنْ is implied before نكرمك. After what does it become implied here?',
          sentence: 'هَلْ تَزُورُنَا نُكْرِمْكَ',
          translation: 'If you visit us, we will honor you.',
          cells: ['هَلْ', 'تَزُورُنَا', 'نُكْرِمْكَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'استفهام' },
            ] },
          ],
          distractors: ['طلب', 'عرض'],
        },
        {
          title: 'تركيب: لَيْتَكَ عِنْدِي أَخْدِمْكَ',
          kind: 'tarkeeb',
          instruction: 'إنْ is implied before أخدمك. After what does it become implied here?',
          sentence: 'لَيْتَكَ عِنْدِي أَخْدِمْكَ',
          translation: 'I wish you were with me — I would serve you.',
          cells: ['لَيْتَكَ', 'عِنْدِي', 'أَخْدِمْكَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'تمنٍّ' },
            ] },
          ],
          distractors: ['طلب', 'استفهام'],
        },
        {
          title: 'تركيب: أَلَا تَنْزِلُ بِنَا تُصِبْ خَيْرًا',
          kind: 'tarkeeb',
          instruction: 'إنْ is implied before تصب. After what does it become implied here?',
          sentence: 'أَلَا تَنْزِلُ بِنَا تُصِبْ خَيْرًا',
          translation: "Won't you stay with us? You will find good.",
          cells: ['أَلَا', 'تَنْزِلُ', 'بِنَا', 'تُصِبْ', 'خَيْرًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 2, role: 'عرض' },
            ] },
          ],
          distractors: ['طلب', 'استفهام'],
        },
        {
          title: 'تركيب: ﴿وَإِنْ تَعُودُوا نَعُدْ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify the tense combination of شرط + جواب.',
          sentence: 'وَإِنْ تَعُودُوا نَعُدْ',
          translation: 'And if you return [to hostility], We will return.',
          cells: ['إِنْ', 'تَعُودُوا', 'نَعُدْ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'مضارع ثم مضارع' },
            ] },
          ],
          distractors: ['ماضٍ ثم ماضٍ', 'مضارع ثم ماضٍ'],
        },
        {
          title: 'تركيب: ﴿وَإِنْ عُدْتُمْ عُدْنَا﴾',
          kind: 'tarkeeb',
          instruction: 'Classify the tense combination of شرط + جواب.',
          sentence: 'وَإِنْ عُدْتُمْ عُدْنَا',
          translation: 'And if you return, We will return.',
          cells: ['إِنْ', 'عُدْتُمْ', 'عُدْنَا'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'ماضٍ ثم ماضٍ' },
            ] },
          ],
          distractors: ['مضارع ثم مضارع', 'مضارع ثم ماضٍ'],
        },
      ],
    },
  ],
};

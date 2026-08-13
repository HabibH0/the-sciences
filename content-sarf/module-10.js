// Module 10 — أوزان الاسم المجرد (The Patterns of the Bare Noun)
//
// Covers Week 17 of the Advanced Sarf course: التقسيم الأول للاسم من حيث
// التجرُّد والزيادة, opening الباب الثاني of شذا العرف في فن الصرف by
// أحمد الحملاوي. Patterns, example nouns, glosses and شواهد are kept faithful
// to the source.
//
// 2026-08-12: rewritten to match content/module-01.js’s (Advanced Nahw)
// revamped presentation style, per explicit instruction. Same facts, counts,
// and lesson boundaries as the prior draft — no new grammar content — but
// every Arabic example word, matn quote, and technical term now carries an
// explicit English gloss in the surrounding prose or table cell, so the
// lesson can be followed without independently parsing the Arabic first;
// the Arabic stays for authenticity and as additional material, not as the
// only carrier of the point. Quiz and bank questions were rebalanced away
// from bare vocabulary recall (which the prior draft leaned on heavily —
// "X means: ...") toward the pattern-recognition and reasoning skills the
// باب is actually teaching: matching a vowelling to its وزن, telling
// adjacent أوزان apart, and following why a given pattern is common, rare,
// or does not exist. A handful of vocabulary items remain where the meaning
// is itself load-bearing (e.g. دُئِل as the sole attested example of a rare
// pattern); one word (بِلِز) is presented without an asserted English gloss,
// since no confidently-sourced one is available — see the note at its first
// mention. As with Module 09, there are no تركيب items: this course has
// none, being sarf rather than nahw.
//
// Scope: the division of الاسم into مجرد and مزيد, and of the مجرد into
// ثلاثي، رباعي، خماسي; the ten agreed أوزان of the ثلاثي with an اسم and a
// صفة for each; why the القسمة العقلية yields twelve and what becomes of the
// two that are missing; التخفيف of certain أوزان; the five أوزان of the رباعي
// plus الأخفش’s addition; the four of the خماسي; and the closing تنبيه on the
// minimum and maximum length of a noun.
// التقسيم الثاني للاسم (المصادر والمشتقات) follows in Module 11.

export default {
  id: 'as-10',
  title: 'أوزان الاسم المجرد',
  heading: 'الاسم',
  blurb: 'الاسم divided by whether letters have been added to it: the attested patterns of every noun length.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'أوزان الثلاثي المجرد العشرة',
      subtitle: 'The Ten Patterns — grouped by the vowel on the فاء, each with an اسم and a صفة',
      concepts: [
        {
          heading: 'انقسام الاسم: مجرَّد ومزيد',
          lines: [
            { html: `With the seven divisions of <bdi>الفعل</bdi> (the verb) complete, the same kind of question is now put to <bdi>الاسم</bdi> (the noun): does it carry only its root letters, or has something been added to it?`, list: false },
            { box: { title: 'Core Text', lines: [
              `يَنْقَسِمُ الاسْمُ إلى مُجَرَّدٍ ومَزِيدٍ`,
            ] } },
            { html: `The noun divides into two: <bdi>مُجَرَّد</bdi> — bare, made of nothing but its root letters — and <bdi>مَزِيد</bdi> — augmented, carrying one or more extra letters beyond the root. <bdi>كَتِف</bdi> (a shoulder) is مجرد: every letter in it is a root letter. <bdi>مَكْتُوب</bdi> (written) is مزيد: the م and the و are additions to the root ك ت ب.`, list: false },
            { box: { title: 'Core Text', lines: [
              `والمُجَرَّدُ إلى ثُلاثِيٍّ، ورُباعِيٍّ، وخُماسِيٍّ`,
            ] } },
            { html: `And the bare noun (<bdi>المجرد</bdi>) divides three ways by how many root letters it has: <bdi>ثُلاثِيّ</bdi> (three), <bdi>رُباعِيّ</bdi> (four), and <bdi>خُماسِيّ</bdi> (five).`, list: false },
            { box: { title: 'Careful', lines: [`مُجَرَّدُ الفِعْلِ لا يَتَجاوَزُ الرُّباعِيَّ؛ ومُجَرَّدُ الاسْمِ يَبْلُغُ الخُماسِيَّ`] } },
            { html: `That third branch, الخماسي, has no counterpart in the bare verb — a bare verb tops out at four root letters, never five. A bare noun runs one letter further, to five, as in <bdi>سَفَرْجَل</bdi> (a fruit — the quince) and <bdi>قِرْطَعْب</bdi> (something small and trifling). Both are covered in full in Lesson 3.`, list: false },
            { box: { title: 'Core Text', lines: [
              `فَأَوْزانُ الثُّلاثِيِّ المُتَّفَقِ عليها عَشَرَةٌ`,
            ] } },
            { html: `This lesson stays with the three-letter noun. Its <bdi>أوزان</bdi> — the vowelling patterns it is measured against, using ف ع ل as the scale — number ten, and that count is <bdi>مُتَّفَق عليها</bdi>: agreed upon, not disputed among grammarians. (One further pattern is disputed rather than agreed; Lesson 2 covers it.) The ten are grouped below by which vowel opens the word, on its فاء — its first root letter.`, list: false },
          ],
          exercise: {
            prompt: `Into how many kinds does the bare (مجرد) noun divide, as against the bare verb, and how do the two counts differ?`,
            kind: 'mcq',
            options: ['Both divide into three kinds, identically', 'The noun divides into two, the verb into three', `The noun’s مجرد divides three ways — ثلاثي، رباعي، خماسي — one more than the verb’s، which stops at رباعي`, 'Neither divides at all; only المزيد does'],
            correct: 2,
          },
        },
        {
          heading: 'الأوزان المفتوحة الفاء',
          lines: [
            { html: `Four of the ten patterns open with a <bdi>فتحة</bdi> (fatḥa) on the فاء, the first root letter. Each is illustrated with an <bdi>اسم</bdi> (a plain noun) and a <bdi>صفة</bdi> (an adjective) built on the same vowelling.`, list: false },
            { table: { headers: ['الوزن', 'الضبط (Vowelling)', 'اسم (Noun)', 'صفة (Adjective)'], rows: [
              ['فَعْل', 'بفتح فسكون — fatḥa on the فاء, سكون on the عين', 'سَهْم (an arrow)', 'سَهْل (easy)'],
              ['فَعَل', 'بفتحتين — fatḥa on both', 'قَمَر (the moon)', 'بَطَل (a hero)'],
              ['فَعِل', 'بفتح فكسر — fatḥa then kasra', 'كَتِف (a shoulder)', 'حَذِر (cautious, wary)'],
              ['فَعُل', 'بفتح فضم — fatḥa then ḍamma', 'عَضُد (the upper arm; also: strength)', 'يَقُظ (awake, vigilant)'],
            ] } },
            { html: `Each وزن appears twice — once carried by a plain noun, once by an adjective — because the pattern itself only records vowelling, not word class. <bdi>كَتِف</bdi> and <bdi>حَذِر</bdi> weigh the identical وزن, فَعِل, even though one names a body part and the other describes a temperament: knowing a word is اسم or صفة tells you nothing about which of the ten أوزان it will turn out to be.`, list: false },
          ],
          exercise: {
            prompt: `كَتِف (a shoulder) and حَذِر (cautious) carry the same vowelling — a fatḥa on the فاء, a kasra on the عين. What وزن is that, and what does the pairing show about how أوزان classify words?`,
            kind: 'mcq',
            options: ['فَعُل — بفتح فضم; the pairing shows اسم and صفة take different أوزان', 'فَعِل — بفتح فكسر; the pairing shows the وزن tracks vowelling only, not whether the word is اسم or صفة', 'فَعْل — بفتح فسكون; the pairing shows both words are أسماء', 'فَعَل — بفتحتين; the pairing shows both words share one meaning'],
            correct: 1,
          },
        },
        {
          heading: 'الأوزان المكسورة الفاء',
          lines: [
            { html: `Three of the ten patterns open with a <bdi>كسرة</bdi> (kasra) on the فاء.`, list: false },
            { table: { headers: ['الوزن', 'الضبط (Vowelling)', 'اسم (Noun)', 'صفة (Adjective)'], rows: [
              ['فِعْل', 'بكسر فسكون — kasra then سكون', 'حِمْل (a load, a burden)', 'نِكْس (a weakling — lit. one who has relapsed into sickness)'],
              ['فِعَل', 'بكسر ففتح — kasra then fatḥa', 'عِنَب (grapes)', 'زِيَم (scattered, dispersed)'],
              ['فِعِل', 'بكسرتين — kasra on both', 'إبِل (camels)', 'بِلِز (a صفة cited only as an example of this pattern — no widely agreed English gloss survives for it)'],
            ] } },
            { html: `فِعِل is the odd one among the three, and the matn says so directly:`, list: false },
            { box: { title: 'Core Text', lines: [
              `وهذا الوَزْنُ قَلِيلٌ، حتى ادَّعى سِيبَوَيْهِ أنَّهُ لم يَرِدْ منه إلَّا إبِل`,
            ] } },
            { html: `This وزن is rare (<bdi>قَلِيل</bdi>) — so rare that سيبويه claimed nothing at all is attested on it besides إبِل itself. بِلِز is offered only as the theoretical صفة shape of the pattern, not as a word سيبويه would have accepted as genuine evidence for it.`, list: false },
          ],
          exercise: {
            prompt: `What did سيبويه claim about the rare pattern فِعِل (kasra on both فاء and عين)?`,
            kind: 'mcq',
            options: ['That it is confined to صفات and never appears as a plain noun', 'That it is in fact the commonest of the ten أوزان', 'That nothing genuinely attested came on it besides إبِل', 'That the pattern does not exist at all'],
            correct: 2,
          },
        },
        {
          heading: 'الأوزان المضمومة الفاء',
          lines: [
            { html: `The last three of the ten open with a <bdi>ضمة</bdi> (ḍamma) on the فاء.`, list: false },
            { table: { headers: ['الوزن', 'الضبط (Vowelling)', 'اسم (Noun)', 'صفة (Adjective)'], rows: [
              ['فُعْل', 'بضم فسكون — ḍamma then سكون', 'قُفْل (a lock)', 'حُلْو (sweet)'],
              ['فُعَل', 'بضم ففتح — ḍamma then fatḥa', 'صُرَد (a bird — a shrike)', 'حُطَم (one who breaks rank)'],
              ['فُعُل', 'بضمتين — ḍamma on both', 'عُنُق (a neck)', 'ناقة سُرُح (a swift she-camel — سُرُح glosses as سَرِيعة, swift)'],
            ] } },
            { html: `Four أوزان open on a fatḥa, three on a kasra, three on a ḍamma — 4 + 3 + 3 = 10, which is the count the باب opened with. The only thing that ever varies between one ثلاثي وزن and the next is this pair of vowels, on the فاء and the عين; the letters weighed are always ف ع ل, in the same order, for every one of the ten.`, list: false },
          ],
          exercise: {
            prompt: `How do the ten أوزان distribute across the three possible vowels of the فاء?`,
            kind: 'mcq',
            options: ['خمسة بالفتح، وثلاثة بالكسر، واثنان بالضم', 'أربعة بكل واحد إلا الضم، فثلاثة', 'أربعة بالفتح، وثلاثة بالكسر، وثلاثة بالضم', 'ثلاثة بكل واحد، وواحد زائد لا يُنسب إلى فاء بعينها'],
            correct: 2,
          },
        },
      ],
      quiz: [
        {
          q: 'Into what two does الاسم divide in this باب؟',
          options: ['مجرَّد ومزيد', 'ثلاثي ورباعي', 'اسم وصفة', 'متمكن ومبني'],
          correct: 0,
        },
        {
          q: 'Into what three does the مجرد of الاسم divide?',
          options: ['ثلاثي وخماسي وسداسي', 'مفرد ومثنى وجمع', 'ثلاثي ورباعي وخماسي', 'ثلاثي ورباعي فقط'],
          correct: 2,
        },
        {
          q: 'How many أوزان of the ثلاثي are agreed (متفق عليها) upon?',
          options: ['ستة', 'عشرة', 'اثنا عشر', 'ثمانية'],
          correct: 1,
        },
        {
          q: 'سَهْم (an arrow) and سَهْل (easy) share a vowelling — fatḥa then سكون. Which وزن is that?',
          options: ['فَعْل', 'فَعَل', 'فِعْل', 'فُعْل'],
          correct: 0,
        },
        {
          q: 'عِنَب (grapes) and زِيَم (scattered) share a vowelling — kasra then fatḥa. Which وزن is that?',
          options: ['فِعَل', 'فَعَل', 'فِعِل', 'فُعَل'],
          correct: 0,
        },
        {
          q: 'عُنُق (a neck) and ناقة سُرُح (a swift she-camel) share a vowelling — ḍamma on both. Which وزن is that?',
          options: ['فُعَل', 'فِعِل', 'فُعُل', 'فُعْل'],
          correct: 2,
        },
      ],
      bank: [
        {
          title: 'الخماسي في الاسم',
          kind: 'mcq',
          prompt: 'The مجرد of الاسم includes a خماسي (five-letter) branch; that of الفعل does not. What follows from that difference?',
          options: ['A verb has no مجرد at all', 'The two divisions have nothing to do with each other', 'A noun’s bare root may run to five letters, a verb’s bare root to four at most', 'A noun is always physically longer than a verb'],
          correct: 2,
        },
        {
          title: 'اسم وصفة',
          kind: 'mcq',
          prompt: 'Every one of the ten أوزان is illustrated with both an اسم and a صفة. Why?',
          options: ['Only أسماء may be weighed against ف ع ل', 'Only صفات may be weighed against ف ع ل', 'The two take entirely different sets of أوزان', 'The same pattern serves both, since a وزن records vowelling, not word class'],
          correct: 3,
        },
        {
          title: 'قمر وبطل',
          kind: 'mcq',
          prompt: 'قَمَر (the moon) and بَطَل (a hero) carry a fatḥa on both letters. Which وزن is that?',
          options: ['فَعِل', 'فَعُل', 'فَعَل', 'فَعْل'],
          correct: 2,
        },
        {
          title: 'عضُد ويقُظ',
          kind: 'mcq',
          prompt: 'عَضُد (the upper arm) and يَقُظ (awake) carry a fatḥa then a ḍamma. Which وزن is that?',
          options: ['فُعُل', 'فَعَل', 'فَعُل', 'فَعِل'],
          correct: 2,
        },
        {
          title: 'حِمل ونِكس',
          kind: 'mcq',
          prompt: 'حِمْل (a load) and نِكْس (a weakling) carry a kasra then سكون. Which وزن is that?',
          options: ['فُعْل', 'فِعْل', 'فِعَل', 'فَعْل'],
          correct: 1,
        },
        {
          title: 'إبِل وبِلِز',
          kind: 'mcq',
          prompt: 'إبِل (camels) and بِلِز carry a kasra on both letters. Which وزن is that, and how common is it?',
          options: ['فِعِل — common, with dozens of attested examples', 'فِعَل — the commonest of the three كسر-opening أوزان', 'فِعِل — rare, with سيبويه holding إبِل to be its only genuine example', 'فُعِل — reserved almost entirely for the passive verb'],
          correct: 2,
        },
        {
          title: 'دعوى سيبويه',
          kind: 'mcq',
          prompt: 'سيبويه’s claim about the pattern فِعِل concerns which word specifically?',
          options: ['بِلِز — that it alone is attested, and إبِل is not', 'عِنَب — that it is the pattern’s only real example', 'حِمْل — that nothing besides it came on فِعِل', 'إبِل — that nothing else genuinely came on that وزن'],
          correct: 3,
        },
        {
          title: 'قُفل وحُلو',
          kind: 'mcq',
          prompt: 'قُفْل (a lock) and حُلْو (sweet) carry a ḍamma then سكون. Which وزن is that?',
          options: ['فُعَل', 'فُعُل', 'فِعْل', 'فُعْل'],
          correct: 3,
        },
        {
          title: 'صُرَد وحُطَم',
          kind: 'mcq',
          prompt: 'صُرَد (a shrike) and حُطَم (one who breaks rank) carry a ḍamma then a fatḥa. Which وزن is that?',
          options: ['فَعَل', 'فُعَل', 'فُعْل', 'فُعُل'],
          correct: 1,
        },
        {
          title: 'المفتوحة',
          kind: 'mcq',
          prompt: 'How many of the ten أوزان open on a fatḥa?',
          options: ['اثنان', 'أربعة', 'ثلاثة', 'خمسة'],
          correct: 1,
        },
        {
          title: 'المكسورة',
          kind: 'mcq',
          prompt: 'How many of the ten أوزان open on a kasra?',
          options: ['اثنان', 'خمسة', 'ثلاثة', 'أربعة'],
          correct: 2,
        },
        {
          title: 'تصنيف عنق',
          kind: 'mcq',
          prompt: 'عُنُق carries a ḍamma on both its فاء and its عين. Which of the ten أوزان is that?',
          options: ['فَعُل', 'فُعُل', 'فُعْل', 'فُعَل'],
          correct: 1,
        },
        {
          title: 'تمييز فَعُل وفُعُل',
          kind: 'mcq',
          prompt: 'عَضُد weighs فَعُل and قُفْل’s صفة حُلْو weighs فُعْل. What actually separates فَعُل from فُعُل — not the letters, which are identical in both?',
          options: ['The vowel on the عين — a ḍamma against a سكون', 'The number of letters in the word', 'Whether the word is an اسم or a صفة', 'The vowel on the فاء — a fatḥa against a ḍamma'],
          correct: 3,
        },
        {
          title: 'تمييز فِعَل وفَعِل',
          kind: 'mcq',
          prompt: 'عِنَب weighs فِعَل, and كَتِف weighs فَعِل. Both patterns use one fatḥa and one kasra. What is the actual difference?',
          options: ['فِعَل has an extra letter that فَعِل lacks', 'They are the same وزن under two names', 'The two vowels appear in the same order but the pattern’s opening vowel is swapped: kasra-then-fatḥa against fatḥa-then-kasra', 'فَعِل never appears with a صفة'],
          correct: 2,
        },
        {
          title: 'عدد الأوزان',
          kind: 'mcq',
          prompt: 'Four أوزان open on a fatḥa, three on a kasra, three on a ḍamma. What does that sum give?',
          options: ['The ten agreed أوزان of the ثلاثي', 'The أوزان of the رباعي', 'The أوزان of the خماسي', 'The أوزان of المزيد'],
          correct: 0,
        },
        {
          title: 'موضع الضبط',
          kind: 'mcq',
          prompt: 'Across all ten ثلاثي أوزان, what is the only thing that ever varies from one وزن to the next?',
          options: ['The vowels on the فاء and the عين — the letters ف ع ل themselves never change', 'The total number of letters in the word', 'The order the letters ف ع ل appear in', 'Whether the word is an اسم or a صفة'],
          correct: 0,
        },
        {
          title: 'وزن سهم',
          kind: 'mcq',
          prompt: 'A word carries a fatḥa on its فاء and سكون on its عين — the same shape as سَهْم. Which of the ten أوزان does it weigh?',
          options: ['فَعِل', 'فَعُل', 'فَعْل', 'فَعَل'],
          correct: 2,
        },
        {
          title: 'حذِر ويقُظ',
          kind: 'mcq',
          prompt: 'حَذِر (cautious) and يَقُظ (awake) are both صفات on ثلاثي أوزان, but not the same one. What distinguishes them?',
          options: ['حَذِر weighs فَعِل (fatḥa-kasra); يَقُظ weighs فَعُل (fatḥa-ḍamma) — the vowel on the عين differs', 'حَذِر is مزيد; يَقُظ is مجرد', 'They differ in the vowel on the فاء, not the عين', 'They are in fact the same وزن'],
          correct: 0,
        },
        {
          title: 'اسم وصفة على وزن واحد',
          kind: 'mcq',
          prompt: 'صُرَد (a bird) and حُطَم (one who breaks rank) — one a plain noun, one a description of a person — are given as the same وزن, فُعَل. What does pairing an اسم with a صفة on every وزن establish?',
          options: ['That اسم and صفة are really the same part of speech', 'That a وزن classifies vowelling only — word class is a separate question entirely', 'That صفات always outnumber أسماء on any given وزن', 'That أسماء never share a وزن with a صفة'],
          correct: 1,
        },
        {
          title: 'نِكس',
          kind: 'mcq',
          prompt: 'نِكْس is given as the صفة example for فِعْل. What does it describe?',
          options: ['Something sweet', 'A swift she-camel', 'A weak, base person — literally one who has relapsed into sickness', 'A load or burden'],
          correct: 2,
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'القسمة العقلية والتخفيف',
      subtitle: 'Twelve in Theory, Ten in Use — the two patterns the language declines, and the lightening of those it keeps',
      concepts: [
        {
          heading: 'القسمة العقلية تقتضي اثني عشر',
          lines: [
            { html: `Ten أوزان are attested and agreed upon, but working out every mathematically possible combination — <bdi>القِسْمَةُ العَقْلِيَّة</bdi>, reasoned division — predicts more than that.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وكانَتِ القِسْمَةُ العَقْلِيَّةُ تَقْتَضِي اثْنَيْ عَشَرَ وَزْنًا`,
              `لأنَّ حَرَكاتِ الفاءِ ثَلاثٌ، وهي: الفَتْحُ والضَّمُّ والكَسْرُ`,
              `ويَجْرِي ذلك في العَيْنِ أيضًا، ويَزِيدُ السُّكُونَ`,
              `والثَّلاثَةُ في الأَرْبَعَةِ باثْنَيْ عَشَرَ`,
            ] } },
            { html: `Reasoned division actually calls for twelve أوزان, not ten. The فاء (the first root letter) may carry one of three vowels — <bdi>الفَتْح</bdi>, <bdi>الضَّمّ</bdi>, or <bdi>الكَسْر</bdi> (fatḥa, ḍamma, kasra). The same three are possible on the عين (the second root letter) too, and the عين gains one option the فاء does not have: <bdi>السُّكُون</bdi>, carrying no vowel at all. Three possibilities for the فاء, times four for the عين, gives twelve.`, list: false },
            { box: { title: 'Rule', lines: [`لا يُبْتَدَأُ بِالسَّاكِنِ`] } },
            { html: `The reason the فاء cannot take a سكون is a general rule of Arabic, not something particular to nouns: <bdi>لا يُبْتَدَأُ بِالسَّاكِن</bdi> — one does not begin an utterance with a silent, unvowelled letter, because there is nothing before it for the voice to lean on. Since the فاء is a word’s first letter, it must carry one of the three vowels; the عين sits inside the word and is free to carry any of the three, or none.`, list: false },
            { html: `Twelve in theory, ten agreed in use — two of the twelve are missing from the ثلاثي list, each for its own reason. The next two concepts cover them.`, list: false },
          ],
          clarification: `The arithmetic is worth spelling out fully because it recurs later in this same lesson’s تنبيه on total counts. Three vowels for the فاء (فتح، ضم، كسر) is a fixed ceiling: a word’s first sound must be vowelled, so there is no fourth option to add. The عين’s fourth option, سكون, exists only because the عين is not a word’s first letter — nothing stops a medial letter from carrying no vowel at all. Multiply the two (3 × 4) and the theoretical maximum is twelve وزنًا. The ten attested أوزان of Lesson 1 already account for ten of those twelve combinations; the remaining two are what the next two concepts explain.`,
          exercise: {
            prompt: `Why does the عين have four possible states while the فاء has only three?`,
            kind: 'mcq',
            options: ['The عين may be dropped from the word entirely', 'A سكون is available to the عين but not to a word’s first letter, which cannot begin unvowelled', 'The عين may carry two vowels at once', 'The فاء is always فتح by convention, so it is not really counted'],
            correct: 1,
          },
        },
        {
          heading: 'فُعِل: قليل',
          lines: [
            { box: { title: 'Core Text', lines: [
              `يَقِلُّ فُعِل بِضَمٍّ فَكَسْرٍ، كدُئِل: اسْمٌ لِدُوَيْبةٍ، أو اسْمُ قَبِيلَةٍ`,
              `لأنَّ هذا الوَزْنَ قُصِدَ تَخْصِيصُهُ بِالفِعْلِ المَبْنِيِّ لِلْمَجْهُولِ`,
            ] } },
            { html: `The first of the two missing أوزان is <bdi>فُعِل</bdi> — ḍamma then kasra. It is <bdi>قَلِيل</bdi>: not impossible, but rare among nouns. The one example the matn gives is <bdi>دُئِل</bdi>, a name for either a small weasel-like creature (<bdi>دُوَيْبَة</bdi>) or a tribe — the tribe of أبو الأسود الدؤلي, traditionally credited as the first person to codify نحو.`, list: false },
            { html: `The reason for its rarity has nothing to do with nouns as such: this exact shape — ḍamma on the first letter, kasra just before the last — was set aside for a specific job in الفعل, the <bdi>فعل مبني للمجهول</bdi> (the passive verb), the shape ضُرِبَ takes. With that job already claimed, the language mostly left فُعِل alone as a noun pattern.`, list: false },
          ],
          exercise: {
            prompt: `Why is فُعِل (ḍamma then kasra) rare among nouns, even though it is not impossible?`,
            kind: 'mcq',
            options: ['The two vowels are physically hard to move between', 'It yields no coherent meaning when applied to a noun', 'It is confined to صفات and never used for a plain noun', 'The pattern was set aside for the الفعل المبني للمجهول (the passive verb), leaving little room for it among nouns'],
            correct: 3,
          },
        },
        {
          heading: 'فِعُل: غير موجود',
          lines: [
            { box: { title: 'Core Text', lines: [
              `وأمَّا فِعُل، بِكَسْرٍ فَضَمٍّ، فغَيْرُ مَوْجُودٍ، وذلك لِعُسْرِ الانْتِقالِ من كَسْرٍ إلى ضَمٍّ`,
            ] } },
            { html: `The second missing pattern is <bdi>فِعُل</bdi> — kasra then ḍamma — and unlike فُعِل, it does not occur at all (<bdi>غَيْر مَوْجُود</bdi>). The reason given is purely phonetic: moving the mouth straight from a kasra into a ḍamma (<bdi>عُسْرُ الانْتِقالِ مِنْ كَسْرٍ إلى ضَمٍّ</bdi>, the difficulty of moving from kasra to ḍamma) is awkward to pronounce. The same pairing was refused for the same reason among the أبواب of the ثلاثي verb — فَعِلَ يَفْعُل is not one of the attested بابs.`, list: false },
            { html: `One apparent counter-example is raised and then explained away. A قراءة (a transmitted reading) of the verse below is reported <bdi>بكسر فضم</bdi> — kasra then ḍamma:`, list: false },
            { box: { title: 'Example', lines: [`﴿وَالسَّمَاءِ ذَاتِ الْحِبُكِ﴾`] } },
            { html: `"By the sky full of paths" — <bdi>الحِبُك</bdi> here names the interwoven tracks or paths across the sky, and on this reading its vowelling is كسرة then ضمة, apparently landing right on the pattern just ruled out. Two answers are offered.`, list: false },
            { table: { headers: ['الجواب (Answer)', 'البيان (Explanation)'], rows: [
              ['تَداخُلُ اللُّغَتَيْنِ — the overlap of two dialects', 'Two separate dialectal forms exist side by side — حُبُكٌ, with a ḍamma on both letters, and حِبِكٌ, with a kasra on both. What is heard in حِبُك is a blend: the كسرة on the فاء is borrowed from the second dialect, the ضمة on the عين from the first, so the word is not really one new وزن but two existing ones spliced together.'],
              ['الإتْباع — vowel assimilation', 'The حاء’s كسرة is not the وزن’s own vowel at all. It has slipped into agreement with the كسرة on the تاء of the preceding word, ذَاتِ — a purely phonetic accommodation to a neighbouring sound, not evidence of a genuine فِعُل noun.'],
            ] } },
            { html: `Either way, the apparent counter-example turns out not to be a plain instance of فِعُل once its vowelling is traced to its actual source.`, list: false },
          ],
          exercise: {
            prompt: `What reason does the matn give for فِعُل (kasra then ḍamma) not existing at all among the ten أوزان?`,
            kind: 'mcq',
            options: ['The pattern was reserved for the passive verb, exactly as with فُعِل', 'It happens to coincide with an existing فعل pattern and was avoided to prevent confusion', 'It yields no coherent meaning for a noun', 'عُسْرُ الانتقال من كسر إلى ضم — moving the mouth from kasra to ḍamma is awkward to pronounce'],
            correct: 3,
          },
        },
        {
          heading: 'التخفيف',
          lines: [
            { box: { title: 'Core Text', lines: [
              `ثمَّ إنَّ بَعْضَ هذه الأَوْزانِ قد يُخَفَّفُ`,
            ] } },
            { html: `Some of the ten أوزان may be <bdi>يُخَفَّف</bdi> — lightened — in ordinary pronunciation, without the word actually changing which وزن it belongs to. Lightening is a spoken variant on the same pattern, not a different pattern.`, list: false },
            { table: { headers: ['الحالة (Case)', 'التخفيف (The Lightening)', 'المثال (Example)'], rows: [
              ['نحو كَتِف (a shoulder)', 'بِإسْكانِ العَيْنِ فقط، أو بِهِ مع كَسْرِ الفاءِ — dropping the vowel on the عين alone, or that together with switching the فاء to a kasra', 'كَتْف ، كِتْف'],
              ['إذا كان ثانيه حَرْفَ حَلْقٍ — if the word’s second letter is one of the حروف الحلق, the six throat letters (ء هـ ح خ ع غ)', 'a further lightening is possible too, بِكَسْرَتَيْنِ (kasra on both letters), giving four dialectal forms (لُغات) in all', 'كفَخِذ (a thigh)'],
              ['نحو عَضُد، إبِل، وعُنُق (upper arm, camels, neck)', 'يُخَفَّفُ بِإسْكانِ العَيْنِ — lightened by dropping the vowel on the عين', 'عَضْد ، إبْل ، عُنْق'],
            ] } },
            { html: `<bdi>فَخِذ</bdi> (a thigh) is the fullest case: كسرة on both letters is the base form, and because its second letter, خ, is a <bdi>حرف حلق</bdi> (a letter articulated in the throat), all four lightenings above are attested for it — فَخِذ، فَخْذ، فِخْذ، and فِخِذ.`, list: false },
            { box: { title: 'Core Text', lines: [
              `ومِثْلُ الاسْمِ في ذلك الفِعْلُ كشَهِد`,
            ] } },
            { html: `The verb lightens the same way: <bdi>شَهِد</bdi> (he witnessed) may lighten to شَهْد, exactly as كَتِف lightens to كَتْف. Since the same rule applies to both أسماء and أفعال, this is not a fact about nouns specifically — it is a fact about which vowel sequences the tongue tolerates.`, list: false },
          ],
          exercise: {
            prompt: `فَخِذ (a thigh) is said to admit four لغات (dialectal pronunciations) — one more than كَتِف’s two. What earns it that extra one?`,
            kind: 'mcq',
            options: ['Its second letter is a حرف حلق (a throat letter), which admits a further lightening to كسرتين on both letters', 'It is a صفة rather than a plain اسم', 'It is رباعي rather than ثلاثي', 'Its فاء is مضمومة rather than مكسورة'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'How many أوزان does the reasoned division (القسمة العقلية) predict for the ثلاثي, before attestation narrows the count?',
          options: ['اثنا عشر', 'عشرة', 'تسعة', 'ستة'],
          correct: 0,
        },
        {
          q: 'Why does the عين have four possible states where the فاء has three?',
          options: ['The عين may be dropped from the word', 'It carries the same three vowels plus سكون, which a word’s first letter cannot take', 'It carries the same three vowels plus شدة', 'A fourth vowel is available to it that the فاء lacks'],
          correct: 1,
        },
        {
          q: 'دُئِل — a name for a small creature, or for a tribe — is the sole clear example of which وزن؟',
          options: ['فُعِل', 'فِعُل', 'فِعِل', 'فُعُل'],
          correct: 0,
        },
        {
          q: 'فُعِل is rare among nouns because the pattern was set aside for:',
          options: ['الصفة المشبهة', 'اسم التفضيل', 'الفعل المبني للمجهول (the passive verb)', 'الفعل المبني للفاعل (the active verb)'],
          correct: 2,
        },
        {
          q: 'Which of the twelve theoretically possible أوزان is said to not exist at all (غير موجود)?',
          options: ['فِعُل', 'فُعِل', 'فِعِل', 'فُعُل'],
          correct: 0,
        },
        {
          q: 'كَتِف may be lightened in how many ways, before the extra حرف حلق rule is even considered?',
          options: ['واحدة فقط', 'ثلاث', 'أربع', 'اثنتان — إسكان العين وحده، أو ذلك مع كسر الفاء'],
          correct: 3,
        },
      ],
      bank: [
        {
          title: 'ثلاثة في أربعة',
          kind: 'mcq',
          prompt: 'Which multiplication produces the twelve theoretically possible أوزان?',
          options: ['Three times three, plus three left over', 'Two possibilities times six', 'The three vowels of the فاء times the four possible states of the عين', 'Four possibilities on the فاء times three on the عين'],
          correct: 2,
        },
        {
          title: 'لماذا لا يُسكَّن الأول',
          kind: 'mcq',
          prompt: 'Why can a word’s first letter — its فاء — never carry a سكون?',
          options: ['Because an utterance cannot begin on an unvowelled letter, with nothing before it for the voice to lean on', 'Because the ميزان forbids it by convention', 'Because it would turn the word رباعيًّا', 'Because it would turn the word into a صفة'],
          correct: 0,
        },
        {
          title: 'اثنا عشر وعشرة',
          kind: 'mcq',
          prompt: 'Twelve أوزان in theory, ten agreed in use. How many are missing, and which two?',
          options: ['ثلاثة، غير محددة', 'لا شيء — العددان متطابقان', 'اثنان — فُعِل وفِعُل', 'واحد فقط — فِعُل'],
          correct: 2,
        },
        {
          title: 'حال الوزنين',
          kind: 'mcq',
          prompt: 'فُعِل and فِعُل are the two missing أوزان, but they are not missing for the same reason. How do their statuses differ?',
          options: ['فُعِل is rare but attested; فِعُل does not occur at all', 'Both are entirely unattested', 'Both are rare but attested', 'فِعُل is merely rare; فُعِل does not occur at all'],
          correct: 0,
        },
        {
          title: 'دُئِل',
          kind: 'mcq',
          prompt: 'دُئِل, the sole clear example of فُعِل, names:',
          options: ['A type of lock', 'A claw', 'A satchel for books', 'A small weasel-like creature (دُوَيْبَة), or a tribe'],
          correct: 3,
        },
        {
          title: 'ضُرِبَ',
          kind: 'mcq',
          prompt: 'Which verb form carries exactly the shape ضُمَّ أوَّلُهُ وكُسِرَ ما قَبْلَ آخِرِهِ — ḍamma first, kasra before the last letter — the same shape as فُعِل؟',
          options: ['الماضي المبني للمجهول (the passive), as in ضُرِبَ', 'الماضي المبني للفاعل (the active)', 'المضارع', 'الأمر'],
          correct: 0,
        },
        {
          title: 'عسر الانتقال',
          kind: 'mcq',
          prompt: 'The reason given for فِعُل’s non-existence is phonetic rather than functional. What exactly is the difficulty?',
          options: ['The عين cannot physically carry a ḍamma', 'The pattern clashes with an existing فعل form and was avoided', 'Moving the tongue straight from a kasra to a ḍamma is awkward', 'A kasra cannot follow a سكون in Arabic'],
          correct: 2,
        },
        {
          title: 'ذات الحِبُك',
          kind: 'mcq',
          prompt: '﴿وَالسَّمَاءِ ذَاتِ الْحِبُكِ﴾, read بكسر فضم, is raised as a possible exception. An exception to which claim?',
          options: ['That فُعِل is rare among nouns', 'That the ten أوزان are all that is agreed upon', 'That certain أوزان may be lightened', 'That فِعُل does not exist at all'],
          correct: 3,
        },
        {
          title: 'تداخل اللغتين',
          kind: 'mcq',
          prompt: 'On the تداخل اللغتين (overlap of two dialects) account of حِبُك, which two independently-attested forms have been blended?',
          options: ['حِبِك بكسرتين and حَبِك بفتح فكسر', 'حُبُك بضمتين and حِبِك بكسرتين', 'حُبْك and حِبْك, both بسكون العين', 'حَبَك بفتحتين and حُبُك بضمتين'],
          correct: 1,
        },
        {
          title: 'موضع كل لغة',
          kind: 'mcq',
          prompt: 'On the تداخل اللغتين account of حِبُك, which dialect supplies which vowel?',
          options: ['Both vowels come from the same single dialect, حُبُك', 'The كسرة on the فاء comes from حِبِك, the ضمة on the عين from حُبُك', 'The كسرة comes from حُبُك, the ضمة from حِبِك', 'Both vowels come from حِبِك alone'],
          correct: 1,
        },
        {
          title: 'الإتباع',
          kind: 'mcq',
          prompt: 'On the الإتباع (assimilation) account of حِبُك, why does the حاء carry a كسرة?',
          options: ['To match the vowel on the following عين', 'To avoid placing a ḍamma directly after a سكون', 'To mark the word as a صفة', 'It has assimilated to the كسرة on the تاء of the preceding word, ذَاتِ, not to any vowel of its own وزن'],
          correct: 3,
        },
        {
          title: 'تخفيف كتِف',
          kind: 'mcq',
          prompt: 'What are the two ordinary lightenings available to كَتِف, before the extra حرف حلق rule applies?',
          options: ['كُتْف, and كَتُف', 'None — كَتِف does not lighten', 'كَتْف (dropping the عين’s vowel alone), and كِتْف (that together with a kasra on the فاء)', 'كِتِف, and كَتُف'],
          correct: 2,
        },
        {
          title: 'أربع لغات',
          kind: 'mcq',
          prompt: 'فَخِذ (a thigh) is attested in four لغات. What are they?',
          options: ['فَخِذ، فُخْذ، فِخْذ، فَخُذ', 'فَخِذ، فَخَذ، فَخُذ، فَخْذ', 'فَخِذ and فِخِذ only', 'فَخِذ، فَخْذ، فِخْذ، فِخِذ'],
          correct: 3,
        },
        {
          title: 'شرط اللغة الرابعة',
          kind: 'mcq',
          prompt: 'What extra condition unlocks a word’s fourth لغة, the one كَتِف itself does not reach?',
          options: ['That the word’s second letter be one of the six حروف الحلق', 'That the word be a صفة rather than an اسم', 'That the word be رباعي rather than ثلاثي', 'That the فاء already carry a ضمة'],
          correct: 0,
        },
        {
          title: 'تخفيف عضُد',
          kind: 'mcq',
          prompt: 'How are عَضُد، إبِل and عُنُق lightened in speech?',
          options: ['They do not lighten at all', 'بإسكان العين — by dropping the vowel on the عين', 'بكسر الفاء', 'بضم الفاء'],
          correct: 1,
        },
        {
          title: 'شهِد',
          kind: 'mcq',
          prompt: 'شَهِد (he witnessed) is brought in alongside كَتِف. What point does it establish?',
          options: ['That the verb has ten أوزان, like the noun', 'That the verb also reaches four لغات', 'That the verb never lightens', 'That الفعل lightens by the same rule as الاسم — this is a fact about vowel sequences, not about nouns specifically'],
          correct: 3,
        },
        {
          title: 'أثر التخفيف على الوزن',
          kind: 'mcq',
          prompt: 'كَتِف lightened to كَتْف moves the word from which وزن to which?',
          options: ['فَعْل to فَعِل', 'فِعْل to فَعْل', 'فَعِل to فَعْل', 'فَعِل to فِعْل'],
          correct: 2,
        },
        {
          title: 'كِتْف',
          kind: 'mcq',
          prompt: 'كِتْف, the second lightening of كَتِف, itself carries which وزن?',
          options: ['فُعْل', 'فِعْل', 'فَعْل', 'فِعِل'],
          correct: 1,
        },
        {
          title: 'العلة والوجود',
          kind: 'mcq',
          prompt: 'One of the two missing أوزان is barred for a phonetic reason, the other for a functional one. Which is which?',
          options: ['فِعُل is barred phonetically; فُعِل is limited functionally', 'فُعِل is barred phonetically; فِعُل is limited functionally', 'Both are barred for the same phonetic reason', 'Both are limited for the same functional reason'],
          correct: 0,
        },
        {
          title: 'حروف الحلق',
          kind: 'mcq',
          prompt: 'The fourth لغة of فَخِذ depends on the letter category حروف الحلق. Which letters make up that set?',
          options: ['حروف العلة — و ا ي', 'أحرف المضارعة — أ ن ي ت', 'الهمزة والهاء والحاء والخاء والعين والغين', 'حروف الزيادة'],
          correct: 2,
        },
        {
          title: 'إبْل',
          kind: 'mcq',
          prompt: 'إبِل lightened becomes إبْل, dropping the vowel on its second letter. Which وزن does the lightened form carry?',
          options: ['فُعْل', 'فِعْل', 'فِعِل', 'فَعْل'],
          correct: 1,
        },
        {
          title: 'موضع التخفيف',
          kind: 'mcq',
          prompt: 'Across كَتِف، عَضُد، إبِل and عُنُق, which letter’s vowel is the one being dropped when the word is lightened?',
          options: ['اللام', 'It varies from word to word', 'العين', 'الفاء'],
          correct: 2,
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'أوزان الرباعي والخماسي',
      subtitle: 'Beyond Three Letters — five patterns for the رباعي, four for the خماسي, and the limits on a noun’s length',
      concepts: [
        {
          heading: 'أوزان الرباعي الخمسة',
          lines: [
            { html: `The second branch of the bare noun is the <bdi>رباعي</bdi> (four-letter root).`, list: false },
            { box: { title: 'Core Text', lines: [
              `وأَوْزانُ الاسْمِ الرُّباعِيِّ المُجَرَّدِ المُتَّفَقِ عليها خَمْسَةٌ`,
            ] } },
            { html: `Five agreed أوزان — where the bare رباعي <em>verb</em> had exactly one shape, فَعْلَلَ.`, list: false },
            { table: { headers: ['الوزن', 'الضبط', 'المثال'], rows: [
              ['فَعْلَل', 'فتحة on the first and third letters, سكون on the second', 'جَعْفَر (a personal name — Jaʿfar)'],
              ['فِعْلِل', 'كسرة on both first and third, سكون on the second', 'زِبْرِج (ornamentation, finery — لِلزِّينَة)'],
              ['فُعْلُل', 'ضمة on both first and third, سكون on the second', 'بُرْثُن (a claw — specifically a lion’s claw, لِمَخْلِبِ الأَسَد)'],
              ['فِعَلّ', 'كسرة then فتحة, with the doubled (شدة-carrying) لام', 'قِمَطْر (a case or satchel for books)'],
              ['فِعْلَل', 'كسرة, then سكون, then فتحة', 'دِرْهَم (a dirham — a coin and unit of weight)'],
            ] } },
            { html: `Three of the five carry the same vowel on their first and third letters — فَعْلَل، فِعْلِل، فُعْلُل all repeat one vowel twice — and the remaining two, فِعَلّ and فِعْلَل, break that symmetry.`, list: false },
          ],
          exercise: {
            prompt: `دِرْهَم carries a kasra, then سكون, then a fatḥa. Which of the five رباعي أوزان is that?`,
            kind: 'mcq',
            options: ['فَعْلَل', 'فِعَلّ', 'فِعْلَل', 'فِعْلِل'],
            correct: 2,
          },
        },
        {
          heading: 'زيادة الأخفش',
          lines: [
            { html: `The matn’s own wording — <bdi>المُتَّفَق عليها</bdi>, agreed upon — signals that a sixth pattern exists but is disputed.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وزادَ الأَخْفَشُ وَزْنَ فُعْلَل، بِضَمٍّ فَسُكُونٍ فَفَتْحٍ، كجُخْدَب: اسْمٌ لِلْأَسَدِ`,
              `وبَعْضُهُم يَقُولُ إنَّهُ فَرْعُ جُخْدُب بِالضَّمِّ. والصَّحِيحُ أنَّهُ أَصْلٌ ولكنَّهُ قَلِيلٌ`,
            ] } },
            { html: `الأخفش added a sixth رباعي وزن: <bdi>فُعْلَل</bdi> — ḍamma, then سكون, then fatḥa — illustrated by <bdi>جُخْدَب</bdi>, a name for the lion. The dispute is not over whether جُخْدَب is genuinely said; it is over what it <em>is</em>: some hold it a mere variant pronunciation of جُخْدُب (with a ضمة in that third slot instead of a فتحة), rather than a distinct وزن in its own right. The view the matn settles on is that it is a genuine, independent أصل — just a rare one.`, list: false },
            { html: `So the رباعي أوزان number five where all grammarians agree, or six once الأخفش’s addition is admitted.`, list: false },
          ],
          exercise: {
            prompt: `Some hold جُخْدَب to be nothing more than a variant of جُخْدُب, rather than its own وزن. What verdict does the matn itself give?`,
            kind: 'mcq',
            options: ['That جُخْدَب is really خماسي, not رباعي', 'That it is a genuine أصل — a real pattern in its own right — though rare', 'That it is indeed just a branch (فرع) of جُخْدُب, as the objectors say', 'That جُخْدَب is not attested at all'],
            correct: 1,
          },
        },
        {
          heading: 'أوزان الخماسي الأربعة',
          lines: [
            { html: `The third and last branch of the bare noun is the <bdi>خماسي</bdi> (five-letter root) — the category that, as Lesson 1 noted, has no counterpart at all among the أفعال.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وأَوْزانُ الخُماسِيِّ أَرْبَعَةٌ`,
            ] } },
            { table: { headers: ['الوزن', 'الضبط', 'المثال'], rows: [
              ['فَعَلَّل', 'all three vowels فتحة, with the first لام doubled', 'سَفَرْجَل (a fruit — the quince)'],
              ['فَعْلَلِل', 'فتحة on the first and third letters, كسرة on the fourth', 'جَحْمَرِش (an old woman)'],
              ['فِعْلَلّ', 'كسرة, then سكون, then فتحة, with the second لام doubled', 'قِرْطَعْب (something small and trifling)'],
              ['فُعَلِّل', 'ضمة, then فتحة, then the doubled first لام carrying a كسرة', 'قُذَعْمِل (something small and trifling, synonymous with قِرْطَعْب)'],
            ] } },
            { html: `Three of the four carry a شدة (a doubled letter), and they differ in exactly which لام it lands on: the first لام in فَعَلَّل and فُعَلِّل, the second in فِعْلَلّ. Only فَعْلَلِل carries no doubled letter at all.`, list: false },
          ],
          exercise: {
            prompt: `قِرْطَعْب and قُذَعْمِل are synonyms — both mean something small and trifling — but weigh different أوزان. What actually distinguishes their patterns?`,
            kind: 'mcq',
            options: ['The شدة falls on the second لام in فِعْلَلّ (قِرْطَعْب) and on the first in فُعَلِّل (قُذَعْمِل)', 'One word is رباعي and the other خماسي', 'Only one of the two carries a شدة at all', 'They in fact share one وزن'],
            correct: 0,
          },
        },
        {
          heading: 'التنبيه: حدود طول الاسم',
          lines: [
            { html: `The باب closes by totalling the three lessons and fixing the floor and ceiling on how long a noun’s root can be.`, list: false },
            { box: { title: 'Core Text', lines: [
              `قد عَلِمْتَ مما تَقَدَّمَ أنَّ الاسْمَ المُتَمَكِّنَ لا تَقِلُّ حُرُوفُهُ الأَصْلِيَّةُ عن ثَلاثَةٍ، إلَّا إذا دَخَلَهُ الحَذْفُ`,
              `كيَد ودَم، وعِدَة وسِنَة`,
              `وأنَّ أَوْزانَ المُجَرَّدِ منه عِشْرُونَ، أو واحِدٌ وعِشْرُونَ`,
              `وأمَّا المَزِيدُ فيه فأَوْزانُهُ كَثِيرَةٌ، ولا يَتَجاوَزُ بِالزِيادَةِ سَبْعَةَ أَحْرُفٍ، كما أنَّ الفِعْلَ لا يَتَجاوَزُ بِالزِيادَةِ سِتَّةً`,
            ] } },
            { html: `An <bdi>اسم مُتَمَكِّن</bdi> (a declinable noun) never shows fewer than three root letters — unless <bdi>حَذْف</bdi> (elision) has taken one away. Four words are cited as examples: <bdi>يَد</bdi> (a hand) and <bdi>دَم</bdi> (blood) each dropped their لام, the third root letter — يد’s full root is ي د ي, and دم’s is د م و; <bdi>عِدَة</bdi> (a promise) and <bdi>سِنَة</bdi> (drowsiness, slumber) each dropped their فاء, the first root letter, an و — their full roots are و ع د and و س ن — and each grew a تاء مربوطة at the end to compensate for the letter lost at the front.`, list: false },
            { html: `The running total of أوزان across all three lessons is <bdi>عِشْرُون، أو واحِد وعِشْرُون</bdi> — twenty, or twenty-one. And the ceiling on how long a noun may grow once <bdi>زيادة</bdi> (augmentation) is added is seven letters — one more than the six-letter ceiling given earlier for the augmented verb.`, list: false },
          ],
          clarification: `The count twenty, or twenty-one is the running total from all three lessons, and it is worth assembling explicitly. Start with the ten agreed ثلاثي أوزان from Lesson 1; add the rare-but-attested فُعِل from Lesson 2, and the ثلاثي alone gives eleven. Add five for the رباعي and four for the خماسي, both from this lesson, and the total reaches twenty. Admit الأخفش’s disputed sixth رباعي وزن, فُعْلَل, as well, and the total becomes twenty-one. The two figures in the matn are not vagueness — they are a direct record of the one point still argued over: whether that sixth رباعي pattern counts.`,
          exercise: {
            prompt: `يَد، دَم، عِدَة and سِنَة each show only two letters, below the usual three-letter floor. What accounts for that?`,
            kind: 'mcq',
            options: ['Each has undergone حذف — a root letter has been dropped, not that the root itself only ever had two', 'Nouns are permitted to have as few as two أصول', 'They are مبنية (indeclinable) rather than مُتَمَكِّنة, so the three-letter floor does not apply to them', 'They are مزيدة (augmented), not مجردة'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'How many أوزان of the رباعي are agreed upon?',
          options: ['عشرة', 'خمسة', 'أربعة', 'ستة'],
          correct: 1,
        },
        {
          q: 'جَعْفَر carries a fatḥa on its first and third letters, سكون on its second. Which وزن is that?',
          options: ['فَعْلَل', 'فِعْلِل', 'فُعْلُل', 'فِعْلَل'],
          correct: 0,
        },
        {
          q: 'Which وزن did الأخفش add to the رباعي, illustrated by جُخْدَب — a name for the lion?',
          options: ['فِعَلّ', 'فَعْلَل', 'فَعَلَّل', 'فُعْلَل'],
          correct: 3,
        },
        {
          q: 'How many أوزان does the خماسي have?',
          options: ['خمسة', 'ثلاثة', 'ستة', 'أربعة'],
          correct: 3,
        },
        {
          q: 'سَفَرْجَل (the quince) carries all-فتحة vowelling with a doubled first لام. Which خماسي وزن is that?',
          options: ['فِعْلَلّ', 'فُعَلِّل', 'فَعَلَّل', 'فَعْلَلِل'],
          correct: 2,
        },
        {
          q: 'What is the ceiling on how many letters a noun may reach once augmentation (الزيادة) is added?',
          options: ['ثمانية', 'سبعة', 'ستة', 'خمسة'],
          correct: 1,
        },
      ],
      bank: [
        {
          title: 'زِبْرِج',
          kind: 'mcq',
          prompt: 'زِبْرِج carries كسرة on its first and third letters. Which وزن is that, and what does the word mean?',
          options: ['فُعْلُل — a claw', 'فِعَلّ — a satchel for books', 'فِعْلَل — a dirham', 'فِعْلِل — ornamentation, finery'],
          correct: 3,
        },
        {
          title: 'بُرْثُن',
          kind: 'mcq',
          prompt: 'بُرْثُن carries ضمة on its first and third letters. Which وزن is that, and what does the word mean?',
          options: ['فِعَلّ — a book satchel', 'فُعْلُل — a claw, specifically the lion’s', 'فِعْلِل — ornamentation', 'فَعْلَل — a personal name'],
          correct: 1,
        },
        {
          title: 'قِمَطْر',
          kind: 'mcq',
          prompt: 'قِمَطْر carries كسرة then فتحة with a doubled لام. Which وزن is that, and what does the word mean?',
          options: ['فِعْلَل — a dirham', 'فُعْلَل — الأخفش’s addition, meaning lion', 'فَعْلَل — a personal name', 'فِعَلّ — a case for books'],
          correct: 3,
        },
        {
          title: 'شدة قِمَطر',
          kind: 'mcq',
          prompt: 'What sets the وزن فِعَلّ apart in shape from the other four رباعي أوزان?',
          options: ['Its فاء carries a ضمة, unlike any of the others', 'It has five letters rather than four', 'Its لام carries a شدة — a doubled letter', 'Its second letter carries a سكون'],
          correct: 2,
        },
        {
          title: 'التماثل في الأوزان',
          kind: 'mcq',
          prompt: 'فَعْلَل, فِعْلِل and فُعْلُل share a structural feature that فِعَلّ and فِعْلَل do not. What is it?',
          options: ['Each carries a فتحة on its third letter regardless of the rest', 'Each is خماسي rather than رباعي', 'Each repeats the same vowel on its first and third letters', 'Each carries a شدة'],
          correct: 2,
        },
        {
          title: 'جُخْدَب',
          kind: 'mcq',
          prompt: 'جُخْدَب, الأخفش’s disputed addition to the رباعي أوزان, means:',
          options: ['اسم للأسد — a name for the lion', 'A claw', 'A fruit', 'An old woman'],
          correct: 0,
        },
        {
          title: 'خلاف في جُخدَب',
          kind: 'mcq',
          prompt: 'What exactly is disputed about جُخْدَب?',
          options: ['Whether it is an اسم or a صفة', 'Whether it is a genuine وزن in its own right, or merely a variant pronunciation of جُخْدُب', 'Whether it is رباعي or خماسي', 'Whether the word is attested in Arabic at all'],
          correct: 1,
        },
        {
          title: 'عدد أوزان الرباعي',
          kind: 'mcq',
          prompt: 'Counting الأخفش’s addition alongside the five agreed أوزان, how many رباعي أوزان are there in total?',
          options: ['ستة', 'خمسة', 'سبعة', 'أربعة'],
          correct: 0,
        },
        {
          title: 'جَحْمَرِش',
          kind: 'mcq',
          prompt: 'جَحْمَرِش carries فتحة on its first and third letters, كسرة on its fourth. Which وزن is that, and what does the word mean?',
          options: ['فُعَلِّل — a small, trifling thing', 'فَعْلَلِل — an old woman', 'فَعَلَّل — a fruit', 'فِعْلَلّ — a small, trifling thing'],
          correct: 1,
        },
        {
          title: 'قِرْطَعْب',
          kind: 'mcq',
          prompt: 'قِرْطَعْب carries كسرة، سكون، then فتحة, with a doubled second لام. Which خماسي وزن is that?',
          options: ['فَعْلَلِل', 'فِعْلَلّ', 'فُعَلِّل', 'فَعَلَّل'],
          correct: 1,
        },
        {
          title: 'قُذَعْمِل',
          kind: 'mcq',
          prompt: 'قُذَعْمِل carries ضمة، فتحة، then a doubled first لام carrying كسرة. Which خماسي وزن is that?',
          options: ['فُعَلِّل', 'فِعْلَلّ', 'فَعَلَّل', 'فَعْلَلِل'],
          correct: 0,
        },
        {
          title: 'الشدة في الخماسي',
          kind: 'mcq',
          prompt: 'How many of the four خماسي أوزان carry a شدة (a doubled letter) somewhere in the pattern?',
          options: ['أربعة، كلها', 'ثلاثة — فَعَلَّل، فِعْلَلّ، فُعَلِّل', 'اثنان فقط', 'واحد فقط'],
          correct: 1,
        },
        {
          title: 'ضبط فَعَلَّل',
          kind: 'mcq',
          prompt: 'فَعَلَّل is described as all فتحات with one doubled لام. Which لام carries the شدة?',
          options: ['الثانية', 'كلتاهما', 'لا واحدة منهما', 'الأولى'],
          correct: 3,
        },
        {
          title: 'ضبط فُعَلِّل',
          kind: 'mcq',
          prompt: 'In فُعَلِّل, the doubled first لام itself carries which vowel?',
          options: ['سكون', 'كسرة', 'فتحة', 'ضمة'],
          correct: 1,
        },
        {
          title: 'حد الأصول',
          kind: 'mcq',
          prompt: 'What is the minimum number of أصول (root letters) an اسم مُتَمَكِّن may show?',
          options: ['ثلاثة, unless حذف has taken one away', 'اثنان, always', 'أربعة', 'There is no fixed minimum'],
          correct: 0,
        },
        {
          title: 'يد ودم',
          kind: 'mcq',
          prompt: 'يَد (a hand) and دَم (blood) each show only two letters. What has actually happened to their roots?',
          options: ['They genuinely have only two أصول, as an exception', 'They are مبنية, so the three-letter rule does not apply', 'They are مزيدة, having lost a زائد rather than an أصل', 'Each has dropped its لام, the third root letter — يد’s root is ي د ي, دم’s is د م و'],
          correct: 3,
        },
        {
          title: 'عِدَة وسِنَة',
          kind: 'mcq',
          prompt: 'عِدَة (a promise) and سِنَة (drowsiness) each dropped which root letter, and what compensates for it?',
          options: ['Their لام, compensated by a shortened vowel', 'Their عين, compensated by a doubled لام', 'Their فاء — an و — compensated by a تاء مربوطة added at the end', 'No root letter was dropped; both are genuinely two-letter roots'],
          correct: 2,
        },
        {
          title: 'دِرهَم',
          kind: 'mcq',
          prompt: 'دِرْهَم (a dirham) carries كسرة، سكون، then فتحة. Which of the five رباعي أوزان is that?',
          options: ['فَعْلَل', 'فِعْلِل', 'فِعْلَل', 'فُعْلُل'],
          correct: 2,
        },
        {
          title: 'عشرون أو واحد وعشرون',
          kind: 'mcq',
          prompt: 'The matn gives two possible totals for the أوزان of the bare noun — twenty, or twenty-one. What accounts for the two figures?',
          options: ['A simple miscount in transmission', 'Whether الأخفش’s disputed رباعي addition, فُعْلَل, is counted', 'Whether the خماسي branch is included at all', 'Whether صفات are tallied separately from أسماء'],
          correct: 1,
        },
        {
          title: 'جمع الأوزان',
          kind: 'mcq',
          prompt: 'Eleven أوزان for the ثلاثي (ten agreed, plus the rare فُعِل), five for the رباعي, four for the خماسي. What is the sum, before الأخفش’s addition is counted?',
          options: ['اثنان وعشرون', 'عشرون', 'تسعة عشر', 'أحد وعشرون'],
          correct: 1,
        },
        {
          title: 'أوزان المزيد',
          kind: 'mcq',
          prompt: 'What does the matn say about the أوزان of the augmented (مزيد) noun, as against the twenty or twenty-one of the bare noun?',
          options: ['They are numerous, and are not enumerated in this باب', 'They also total exactly twenty-one', 'There are only four of them', 'There are none — a noun cannot take زيادة'],
          correct: 0,
        },
        {
          title: 'الحدان',
          kind: 'mcq',
          prompt: 'A bare noun reaches at most five letters; an augmented one reaches at most seven. What accounts for the jump from five to seven?',
          options: ['التخفيف lightens the word enough to add two more letters', 'الإلحاق alone accounts for the extra two letters', 'الزيادة — augmentation added on top of the bare خماسي root', 'الحذف, which paradoxically lengthens some nouns'],
          correct: 2,
        },
        {
          title: 'الخماسي والفعل',
          kind: 'mcq',
          prompt: 'A five-letter root is possible for a bare noun but not for a bare verb. Why the difference?',
          options: ['Nouns and verbs are in fact governed by the same ceiling', 'A bare verb’s root reaches four letters at most; a bare noun’s reaches five', 'Verbs never take زيادة, while nouns always do', 'Nouns never take زيادة, while verbs always do'],
          correct: 1,
        },
        {
          title: 'ترتيب الأقسام',
          kind: 'mcq',
          prompt: 'Which sequence correctly gives the أوزان counts in order — ثلاثي، رباعي، خماسي؟',
          options: ['عشرة، أربعة، خمسة', 'عشرة، خمسة، أربعة', 'خمسة، عشرة، أربعة', 'أربعة، خمسة، عشرة'],
          correct: 1,
        },
        {
          title: 'سبعة أحرف',
          kind: 'mcq',
          prompt: 'The seven-letter ceiling given here for the augmented noun is compared to a ceiling given earlier for a different word class. Which?',
          options: ['الحرف, which never exceeds three letters', 'The augmented verb, whose ceiling by زيادة is six letters', 'The bare noun, whose own ceiling is five letters', 'The ثلاثي verb specifically'],
          correct: 1,
        },
      ],
    },
  ],
};

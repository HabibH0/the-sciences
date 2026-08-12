// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 8 -- غَضَبُ اللَّهِ.
// Printed pages 67 (bottom, right after ch7's closing line and the
// heading) through 68 (top, ending before ch9's heading الرَّسُولُ partway
// down the same page). Transcribed by hand from the scan (vision OCR,
// 300dpi render) against ../CHAPTER-FORMAT.md.
//
// The narrator turns from description to indignant rhetorical question --
// why wouldn't Allah be angry at people who walk on His earth, eat His
// provision, and repay Him with disbelief and shirk? Allah's anger has
// real consequences (withheld rain, failing crops, shrinking numbers), but
// the people neither reason nor repent -- setting up ch9's turn to الرَّسُولُ,
// the messenger Allah will send them (Nūḥ, though not yet named).
//
// Grammar / lexical notes:
//   -- أَلِهَذَا (qs-v3-c08-003, x2) fuses three morphemes onto the
//      demonstrative: the interrogative hamza أَ, the preposition لِ, and
//      هَذَا itself -- tagged features 'part+prep+dem.m', extending the
//      established fused-proclitic pattern (extra proclitics as extra
//      atoms in their group) to a triple fusion for the first time.
//   -- لَظُلْمٌ (qs-v3-c08-006/007) is the emphatic لَ fused onto the
//      already-taught noun ظُلْم after إِنَّ, matching the precedent
//      established for لَشَيْطَانٌ (qasas-v3 ch3) and لَأَنتَ (qasas-v2 ch22).
//   -- بِاللَّهِ (qs-v3-c08-004/005, x2) is tagged as a single token with
//      lemma اللَّه, features 'prep+gen', matching the established
//      preposition-fused-onto-proper-noun convention (بِيُوسُفَ, qasas-v2
//      ch11).
//   -- The repeated line إِنَّ هَذَا لَظُلْمٌ عَظِيمٌ! (qs-v3-c08-006/007) is
//      kept as two separate sentence entries for the printed repetition,
//      matching the established repeated-line handling elsewhere in the
//      corpus (qasas-v3 ch2).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): غَضِبَ، اللَّه، عَلَى،
//      النَّاس، غَضَب، شَدِيد، لَعَنَ، لِمَاذَا، لَا، خَلَقَ، رَزَقَ، مَشَى، أَرْض،
//      أَكَلَ، رِزْق، أَشْرَكَ، إِنَّ، هَذَا، عَظِيم، حَبَسَ، مَطَر، عَقَلَ، مَا (النافية)
//      are all already taught and are NOT re-listed in newWords here.
//
// 6 new words (كَفَرَ، ضَيَّقَ، قَلَّ، حَرْث، نَسْل، تَابَ).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch8',
  title: { ar: 'غَضَبُ اللَّهِ', en: 'The Wrath of Allah' },
  newWords: ['كَفَرَ', 'ضَيَّقَ', 'قَلَّ', 'حَرْث', 'نَسْل', 'تَابَ'],
  lemmas: {
    كَفَرَ: { gloss: 'to disbelieve' },
    ضَيَّقَ: { gloss: 'to make difficult, constrict' },
    قَلَّ: { gloss: 'to become few, scarce' },
    حَرْث: { gloss: 'cultivation, tillage' },
    نَسْل: { gloss: 'offspring, progeny' },
    تَابَ: { gloss: 'to repent' },
  },
  paragraphs: [
    {
      en: "Allah grew intensely angry with the people and cursed them -- and why shouldn't He? Is it for this that He created them, is it for this that He provides for them -- that they walk on His earth and disbelieve in Him, eat His provision and associate others with Him? That is a great injustice indeed! Allah's anger showed: He withheld the rain and made things difficult for them, cultivation grew scarce and offspring grew scarce -- but the people neither reasoned nor repented.",
      sentences: [
        {
          id: 'qs-v3-c08-001',
          ar: 'وَغَضِبَ اللَّهُ عَلَى النَّاسِ غَضَبًا شَدِيدًا وَلَعَنَهُمْ.',
          en: 'Allah grew intensely angry with the people and cursed them.',
          tokens: [
            { surface: 'وَغَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be angry; and grew angry' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'with, at' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'غَضَبًا', lemma: 'غَضَب', pos: 'noun', features: 'indef.acc', gloss: 'wrath, i.e. intensely' },
            { surface: 'شَدِيدًا', lemma: 'شَدِيد', pos: 'adj', features: 'indef.acc', gloss: 'intense' },
            { surface: 'وَلَعَنَهُمْ', lemma: 'لَعَنَ', pos: 'verb', features: 'conj+perf.3ms+3mp', root: 'ل ع ن', gloss: 'to curse; and cursed them' },
          ],
        },
        {
          id: 'qs-v3-c08-002',
          ar: 'وَلِمَاذَا لَا يَغْضَبُ اللَّهُ عَلَى النَّاسِ وَلَا يَلْعَنُهُمْ؟',
          en: "And why shouldn't Allah be angry with the people and curse them?",
          tokens: [
            { surface: 'وَلِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'conj+adv', gloss: 'and why' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَغْضَبُ', lemma: 'غَضِبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be angry; would be angry' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'with, at' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَلْعَنُهُمْ', lemma: 'لَعَنَ', pos: 'verb', features: 'impf.3ms+3mp', root: 'ل ع ن', gloss: 'to curse; would curse them' },
          ],
        },
        {
          id: 'qs-v3-c08-003',
          ar: 'أَلِهَذَا خَلَقَهُمْ، أَلِهَذَا يَرْزُقُهُمْ؟',
          en: 'Is it for this that He created them, is it for this that He provides for them?',
          tokens: [
            { surface: 'أَلِهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'part+prep+dem.m', gloss: 'is it for this...?' },
            { surface: 'خَلَقَهُمْ', lemma: 'خَلَقَ', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to create; He created them' },
            { surface: 'أَلِهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'part+prep+dem.m', gloss: 'is it for this...?' },
            { surface: 'يَرْزُقُهُمْ', lemma: 'رَزَقَ', pos: 'verb', features: 'impf.3ms+3mp', root: 'ر ز ق', gloss: 'to provide for; He provides for them' },
          ],
        },
        {
          id: 'qs-v3-c08-004',
          ar: 'يَمْشُونَ عَلَى أَرْضِ اللَّهِ وَيَكْفُرُونَ بِاللَّهِ!',
          en: "They walk upon Allah's earth and disbelieve in Allah!",
          tokens: [
            { surface: 'يَمْشُونَ', lemma: 'مَشَى', pos: 'verb', features: 'impf.3mp', root: 'م ش ي', gloss: 'to walk; they walk' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'أَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'gen.constr', gloss: 'the earth of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَيَكْفُرُونَ', lemma: 'كَفَرَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ك ف ر', gloss: 'to disbelieve; and disbelieving' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
          ],
        },
        {
          id: 'qs-v3-c08-005',
          ar: 'وَيَأْكُلُونَ رِزْقَ اللَّهِ وَيُشْرِكُونَ بِاللَّهِ!',
          en: "They eat Allah's provision and associate others with Allah!",
          tokens: [
            { surface: 'وَيَأْكُلُونَ', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to eat; and eating' },
            { surface: 'رِزْقَ', lemma: 'رِزْق', pos: 'noun', features: 'acc.constr', gloss: 'the provision of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَيُشْرِكُونَ', lemma: 'أَشْرَكَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to associate (with Allah); and associating' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'with Allah' },
          ],
        },
        {
          id: 'qs-v3-c08-006',
          ar: 'إِنَّ هَذَا لَظُلْمٌ عَظِيمٌ!',
          en: 'That is a great injustice indeed!',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'لَظُلْمٌ', lemma: 'ظُلْم', pos: 'noun', features: 'part+indef.nom', gloss: 'truly an injustice' },
            { surface: 'عَظِيمٌ', lemma: 'عَظِيم', pos: 'adj', features: 'indef.nom', gloss: 'great' },
          ],
        },
        {
          id: 'qs-v3-c08-007',
          ar: 'إِنَّ هَذَا لَظُلْمٌ عَظِيمٌ!',
          en: 'That is a great injustice indeed!',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'لَظُلْمٌ', lemma: 'ظُلْم', pos: 'noun', features: 'part+indef.nom', gloss: 'truly an injustice' },
            { surface: 'عَظِيمٌ', lemma: 'عَظِيم', pos: 'adj', features: 'indef.nom', gloss: 'great' },
          ],
        },
        {
          id: 'qs-v3-c08-008',
          ar: 'غَضِبَ اللَّهُ عَلَى النَّاسِ،',
          en: 'Allah grew angry with the people,',
          tokens: [
            { surface: 'غَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be angry; grew angry' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'with, at' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v3-c08-009',
          ar: 'وَحَبَسَ الْمَطَرَ وَضَيَّقَ عَلَيْهِمْ.',
          en: 'and withheld the rain, and made things difficult for them.',
          tokens: [
            { surface: 'وَحَبَسَ', lemma: 'حَبَسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to withhold; and withheld' },
            { surface: 'الْمَطَرَ', lemma: 'مَطَر', pos: 'noun', features: 'def.acc', gloss: 'the rain' },
            { surface: 'وَضَيَّقَ', lemma: 'ضَيَّقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ض ي ق', gloss: 'to make difficult, constrict; and made difficult' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
          ],
        },
        {
          id: 'qs-v3-c08-010',
          ar: 'وَقَلَّ الْحَرْثُ وَقَلَّ النَّسْلُ.',
          en: 'Cultivation grew scarce, and offspring grew scarce.',
          tokens: [
            { surface: 'وَقَلَّ', lemma: 'قَلَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق ل ل', gloss: 'to become scarce; and grew scarce' },
            { surface: 'الْحَرْثُ', lemma: 'حَرْث', pos: 'noun', features: 'def.nom', root: 'ح ر ث', gloss: 'cultivation' },
            { surface: 'وَقَلَّ', lemma: 'قَلَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق ل ل', gloss: 'to become scarce; and grew scarce' },
            { surface: 'النَّسْلُ', lemma: 'نَسْل', pos: 'noun', features: 'def.nom', root: 'ن س ل', gloss: 'offspring' },
          ],
        },
        {
          id: 'qs-v3-c08-011',
          ar: 'وَلَكِنَّ النَّاسَ مَا عَقَلُوا، وَلَكِنَّ النَّاسَ مَا تَابُوا.',
          en: 'But the people did not reason, and the people did not repent.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'عَقَلُوا', lemma: 'عَقَلَ', pos: 'verb', features: 'perf.3mp', gloss: 'to reason, understand; reasoned' },
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَابُوا', lemma: 'تَابَ', pos: 'verb', features: 'perf.3mp', root: 'ت و ب', gloss: 'to repent; repented' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا غَضِبَ اللَّهُ عَلَى النَّاسِ وَلَعَنَهُمْ؟',
          options: [
            'لِأَنَّهُمْ يَمْشُونَ عَلَى أَرْضِهِ وَيَكْفُرُونَ بِهِ وَيُشْرِكُونَ بِهِ',
            'لِأَنَّهُمْ لَمْ يَبْنُوا مَسَاجِدَ',
            'لِأَنَّهُمْ سَافَرُوا بَعِيدًا',
          ],
          answer: 0,
          qEn: 'Why did Allah grow angry with the people and curse them?',
          optionsEn: [
            'Because they walk on His earth, disbelieve in Him, and associate others with Him',
            'Because they did not build mosques',
            'Because they traveled far away',
          ],
        },
        {
          q: 'كَيْفَ عَاقَبَ اللَّهُ النَّاسَ؟',
          options: [
            'حَبَسَ الْمَطَرَ فَقَلَّ الْحَرْثُ وَقَلَّ النَّسْلُ',
            'أَرْسَلَ إِلَيْهِمْ مَلَكًا فَوْرًا',
            'أَغْرَقَهُمْ فِي الْبَحْرِ فَوْرًا',
          ],
          answer: 0,
          qEn: 'How did Allah punish the people?',
          optionsEn: [
            'He withheld the rain, so cultivation and offspring grew scarce',
            'He sent them an angel immediately',
            'He drowned them in the sea immediately',
          ],
        },
        {
          q: 'كَيْفَ اسْتَجَابَ النَّاسُ لِغَضَبِ اللَّهِ وَعِقَابِهِ؟',
          options: [
            'مَا عَقَلُوا وَمَا تَابُوا',
            'عَقَلُوا وَتَابُوا فَوْرًا',
            'تَرَكُوا التَّمَاثِيلَ كُلَّهَا',
          ],
          answer: 0,
          qEn: "How did the people respond to Allah's anger and punishment?",
          optionsEn: [
            'They neither reasoned nor repented',
            'They reasoned and repented at once',
            'They abandoned all the statues',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلِمَاذَا لَا',
        post: 'اللَّهُ عَلَى النَّاسِ وَلَا يَلْعَنُهُمْ؟',
        en: "And why shouldn't Allah be angry with the people and curse them?",
        options: ['يَغْضَبُ', 'غَضِبَ', 'يَغْضَبَ', 'غَاضِب'],
        answer: 0,
        rationales: [
          'Imperfect indicative -- a general, rhetorical question, matching لَا + imperfect.',
          'Perfect -- wrong tense; this asks a standing, general question, not about one completed action.',
          'Subjunctive (missing the final damma) -- wrong mood; nothing here calls for the subjunctive.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'يَمْشُونَ عَلَى أَرْضِ اللَّهِ وَ',
        post: 'بِاللَّهِ!',
        en: "They walk upon Allah's earth and disbelieve in Allah!",
        options: ['يَكْفُرُونَ', 'كَفَرُوا', 'يَكْفُرَ', 'كَافِرُونَ'],
        answer: 0,
        rationales: [
          'Imperfect indicative, 3rd masculine plural -- matches يَمْشُونَ\'s tense, both describing their ongoing behavior.',
          'Perfect -- wrong tense; breaks the parallel with يَمْشُونَ.',
          'Subjunctive -- wrong mood; nothing here calls for the subjunctive.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَكِنَّ النَّاسَ مَا عَقَلُوا، وَلَكِنَّ النَّاسَ مَا',
        post: '.',
        en: 'But the people did not reason, and the people did not repent.',
        options: ['تَابُوا', 'يَتُوبُونَ', 'تَابَ', 'تَائِبُونَ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- matches عَقَلُوا\'s tense and number in the parallel clause.',
          'Imperfect -- wrong tense; breaks the parallel with عَقَلُوا.',
          'Wrong number -- singular, but النَّاس takes a plural verb here (as عَقَلُوا shows).',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَتُوبُ الرَّجُلُ إِلَى اللَّهِ',
        pre: '',
        post: 'إِلَى اللَّهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَتُوبُ', 'يَتُوبُ', 'تَتُوبُ', 'نَتُوبُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَتُوبُ الرَّجُلُ إِلَى اللَّهِ',
        pre: '',
        post: 'إِلَى اللَّهِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَتُوبُ', 'يَتُوبُ', 'أَتُوبُ', 'نَتُوبُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَتُوبُ الرَّجُلُ إِلَى اللَّهِ',
        pre: '',
        post: 'إِلَى اللَّهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَتُوبُونَ', 'يَتُوبُ', 'تَتُوبُ', 'نَتُوبُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

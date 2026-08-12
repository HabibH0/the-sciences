// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 6 -- مِنَ الصُّوَرِ
// إِلَى التَّمَاثِيلِ. Printed page 66 (top portion) -- the whole chapter sits
// in the top half of the page, ending before ch7's heading مِنَ التَّمَاثِيلِ
// إِلَى الأَصْنَامِ partway down the same page. Transcribed by hand from the
// scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// The second step of the slide: flat images give way to carved statues,
// set up in houses and even mosques. The narrator is careful to note that,
// at this stage, the people still worship Allah alone and know perfectly
// well that these are just stones of no power -- they only seek blessing
// through them and revere them because they are statues of the righteous.
// That reasoning becomes the seed ch7 (already visible in its own heading,
// "from statues to idols") will show curdling into real shirk once the
// generation that remembers the righteous men themselves has passed away.
//
// Grammar / lexical notes:
//   -- تِمْثَال / تَمَاثِيل (statue(s), qs-v3-c06-001 onward) is a new lemma
//      kept distinct from the already-taught صُورَة ("image," qasas-v3 ch5)
//      -- the chapter's own title marks the shift from one to the other.
//   -- رَزَقَ and تَبَرَّكَ (qs-v3-c06-005) are new; تَبَرَّكَ (form V) is kept
//      distinct from the already-taught مُبَارَك (qasas-v2 ch25) despite the
//      shared root ب ر ك, matching the established
//      distinct-lemma-per-derived-form convention.
//   -- تَعْظِيم (qs-v3-c06-006, a masdar noun) is new and kept distinct from
//      the already-taught verb عَظَّمَ, matching the established
//      verb/noun-despite-shared-root pattern.
//   -- The long compound sentence qs-v3-c06-005 is kept as a single sentence
//      entry (rather than split at its internal comma) because the printed
//      text governs it with one terminal period, matching how other long
//      coordinated clause-chains have been kept whole elsewhere in the
//      corpus.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): اِنْتَقَلَ، مِنْ، إِلَى،
//      صُورَة، عَمِلَ، صَالِح، كَثِير، وَضَعَ، فِي، بَيْت، مَسْجِد، كَانَ، عَبَدَ، اللَّه،
//      لَا، أَشْرَكَ، بِ، شَيْء، عَرَفَ، أَنَّ، هَذِهِ، حِجَارَة، نَفَعَ، ضَرَّ، لَكِنَّ،
//      يَتَبَرَّكُونَ (تَبَرَّكَ)، عَظَّمَ، لِأَنَّ، كَثُرَ، إِذَا، مَاتَ، رَجُل، لِ، سَمَّى، اِسْم
//      are all already taught (or newly introduced this chapter per the
//      notes above) and are NOT re-listed in newWords here.
//
// 4 new words (تِمْثَال، رَزَقَ، تَبَرَّكَ، تَعْظِيم).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch6',
  title: { ar: 'مِنَ الصُّوَرِ إِلَى التَّمَاثِيلِ', en: 'From Images to Statues' },
  newWords: ['تِمْثَال', 'رَزَقَ', 'تَبَرَّكَ', 'تَعْظِيم'],
  lemmas: {
    تِمْثَال: { gloss: 'statue' },
    رَزَقَ: { gloss: 'to provide for, sustain' },
    تَبَرَّكَ: { gloss: 'to seek blessing' },
    تَعْظِيم: { gloss: 'veneration, reverence' },
  },
  paragraphs: [
    {
      en: "They moved on from flat images to carved statues, making many for the righteous and placing them in their houses and even their mosques. They still worshiped Allah alone, associating nothing with Him, and they knew perfectly well these were just statues of the righteous -- mere stone, unable to benefit, harm, or provide for them. But they sought blessing through them and revered them precisely because they were statues of the righteous. The statues, and reverence for them, kept multiplying -- and whenever a righteous man among them died, they would make a statue for him too and name it after him.",
      sentences: [
        {
          id: 'qs-v3-c06-001',
          ar: 'وَانْتَقَلُوا مِنَ الصُّوَرِ إِلَى التَّمَاثِيلِ.',
          en: 'They moved on from images to statues.',
          tokens: [
            { surface: 'وَانْتَقَلُوا', lemma: 'اِنْتَقَلَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ن ق ل', gloss: 'to move on; and they moved on' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الصُّوَرِ', lemma: 'صُورَة', pos: 'noun', features: 'def.gen.pl', root: 'ص و ر', gloss: 'the images' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'التَّمَاثِيلِ', lemma: 'تِمْثَال', pos: 'noun', features: 'def.gen.pl', root: 'م ث ل', gloss: 'the statues' },
          ],
        },
        {
          id: 'qs-v3-c06-002',
          ar: 'وَعَمِلُوا لِلصَّالِحِينَ تَمَاثِيلَ كَثِيرَةً، وَوَضَعُوهَا فِي بُيُوتِهِمْ وَفِي مَسَاجِدِهِمْ.',
          en: 'They made many statues for the righteous, and placed them in their houses and in their mosques.',
          tokens: [
            { surface: 'وَعَمِلُوا', lemma: 'عَمِلَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ع م ل', gloss: 'to make; and they made' },
            { surface: 'لِلصَّالِحِينَ', lemma: 'صَالِح', pos: 'adj', features: 'prep+def.gen.pl', gloss: 'for the righteous' },
            { surface: 'تَمَاثِيلَ', lemma: 'تِمْثَال', pos: 'noun', features: 'indef.acc.pl', root: 'م ث ل', gloss: 'statues' },
            { surface: 'كَثِيرَةً', lemma: 'كَثِير', pos: 'adj', features: 'indef.acc.f', root: 'ك ث ر', gloss: 'many' },
            { surface: 'وَوَضَعُوهَا', lemma: 'وَضَعَ', pos: 'verb', features: 'conj+perf.3mp+3fs', gloss: 'to place; and placed them' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'بُيُوتِهِمْ', lemma: 'بَيْت', pos: 'noun', features: 'gen.pl+3mp', gloss: 'their houses' },
            { surface: 'وَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and in' },
            { surface: 'مَسَاجِدِهِمْ', lemma: 'مَسْجِد', pos: 'noun', features: 'gen.pl+3mp', gloss: 'their mosques' },
          ],
        },
        {
          id: 'qs-v3-c06-003',
          ar: 'وَكَانُوا يَعْبُدُونَ اللَّهَ لَا يُشْرِكُونَ بِهِ شَيْئًا.',
          en: 'They worshiped Allah, associating nothing with Him.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and they were' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', root: 'ع ب د', gloss: 'to worship; worshiping' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُشْرِكُونَ', lemma: 'أَشْرَكَ', pos: 'verb', features: 'impf.3mp', gloss: 'to associate (with Allah); associating' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with Him' },
            { surface: 'شَيْئًا', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v3-c06-004',
          ar: 'وَكَانُوا يَعْرِفُونَ أَنَّ هَذِهِ تَمَاثِيلُ لِلصَّالِحِينَ.',
          en: 'They knew that these were statues of the righteous.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and they were' },
            { surface: 'يَعْرِفُونَ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3mp', gloss: 'to know; knowing' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'تَمَاثِيلُ', lemma: 'تِمْثَال', pos: 'noun', features: 'indef.nom.pl', root: 'م ث ل', gloss: 'statues' },
            { surface: 'لِلصَّالِحِينَ', lemma: 'صَالِح', pos: 'adj', features: 'prep+def.gen.pl', gloss: 'of the righteous' },
          ],
        },
        {
          id: 'qs-v3-c06-005',
          ar: 'وَأَنَّ هَذِهِ حِجَارَةٌ لَا تَنْفَعُهُمْ وَلَا تَضُرُّهُمْ وَلَا تَرْزُقُهُمْ وَلَكِنَّهُمْ كَانُوا يَتَبَرَّكُونَ بِهَا وَيُعَظِّمُونَهَا، لِأَنَّهَا تَمَاثِيلُ لِلصَّالِحِينَ.',
          en: 'and that these were stones that could not benefit them, harm them, or provide for them -- but they used to seek blessing through them and revere them, because they were statues of the righteous.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'حِجَارَةٌ', lemma: 'حِجَارَة', pos: 'noun', features: 'indef.nom', gloss: 'stones' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَنْفَعُهُمْ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3fs+3mp', gloss: 'to benefit; it benefits them' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَضُرُّهُمْ', lemma: 'ضَرَّ', pos: 'verb', features: 'impf.3fs+3mp', gloss: 'to harm; it harms them' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَرْزُقُهُمْ', lemma: 'رَزَقَ', pos: 'verb', features: 'impf.3fs+3mp', root: 'ر ز ق', gloss: 'to provide for; it provides for them' },
            { surface: 'وَلَكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'يَتَبَرَّكُونَ', lemma: 'تَبَرَّكَ', pos: 'verb', features: 'impf.3mp', root: 'ب ر ك', gloss: 'to seek blessing; seeking blessing' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'through them' },
            { surface: 'وَيُعَظِّمُونَهَا', lemma: 'عَظَّمَ', pos: 'verb', features: 'conj+impf.3mp+3fs', gloss: 'to revere; and revering them' },
            { surface: 'لِأَنَّهَا', lemma: 'لِأَنَّ', pos: 'part', features: 'part+3fs', root: 'أ ن ن', gloss: 'because it/they were' },
            { surface: 'تَمَاثِيلُ', lemma: 'تِمْثَال', pos: 'noun', features: 'indef.nom.pl', root: 'م ث ل', gloss: 'statues' },
            { surface: 'لِلصَّالِحِينَ', lemma: 'صَالِح', pos: 'adj', features: 'prep+def.gen.pl', gloss: 'of the righteous' },
          ],
        },
        {
          id: 'qs-v3-c06-006',
          ar: 'وَكَثُرَتْ هَذِهِ التَّمَاثِيلُ فِيهِمْ، وَكَثُرَ تَعْظِيمُهَا.',
          en: 'These statues multiplied among them, and reverence for them increased.',
          tokens: [
            { surface: 'وَكَثُرَتْ', lemma: 'كَثُرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to multiply, increase; and multiplied' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'التَّمَاثِيلُ', lemma: 'تِمْثَال', pos: 'noun', features: 'def.nom.pl', root: 'م ث ل', gloss: 'the statues' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'وَكَثُرَ', lemma: 'كَثُرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to multiply, increase; and increased' },
            { surface: 'تَعْظِيمُهَا', lemma: 'تَعْظِيم', pos: 'noun', features: 'nom+3fs', root: 'ع ظ م', gloss: 'reverence for them' },
          ],
        },
        {
          id: 'qs-v3-c06-007',
          ar: 'وَإِذَا مَاتَ فِيهِمْ رَجُلٌ صَالِحٌ عَمِلُوا لَهُ تِمْثَالًا وَسَمَّوْهُ بِاسْمِهِ.',
          en: 'Whenever a righteous man died among them, they made a statue for him and named it after him.',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and whenever' },
            { surface: 'مَاتَ', lemma: 'مَاتَ', pos: 'verb', features: 'perf.3ms', root: 'م و ت', gloss: 'to die; died' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', gloss: 'a man' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'adj', features: 'indef.nom', gloss: 'righteous' },
            { surface: 'عَمِلُوا', lemma: 'عَمِلَ', pos: 'verb', features: 'perf.3mp', root: 'ع م ل', gloss: 'to make; they made' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'تِمْثَالًا', lemma: 'تِمْثَال', pos: 'noun', features: 'indef.acc', root: 'م ث ل', gloss: 'a statue' },
            { surface: 'وَسَمَّوْهُ', lemma: 'سَمَّى', pos: 'verb', features: 'conj+perf.3mp+3ms', gloss: 'to name; and named it' },
            { surface: 'بِاسْمِهِ', lemma: 'اِسْم', pos: 'noun', features: 'prep+gen+3ms', gloss: 'with, after his name' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا صَنَعَ النَّاسُ بَعْدَ الصُّوَرِ؟',
          options: [
            'عَمِلُوا تَمَاثِيلَ لِلصَّالِحِينَ وَوَضَعُوهَا فِي بُيُوتِهِمْ وَمَسَاجِدِهِمْ',
            'تَرَكُوا الصُّوَرَ وَالتَّمَاثِيلَ جَمِيعًا',
            'بَاعُوا الصُّوَرَ وَاشْتَرَوْا بُيُوتًا',
          ],
          answer: 0,
          qEn: 'What did the people do after the images?',
          optionsEn: [
            'They made statues of the righteous and placed them in their houses and mosques',
            'They abandoned both the images and the statues',
            'They sold the images and bought houses',
          ],
        },
        {
          q: 'لِمَاذَا كَانُوا يَتَبَرَّكُونَ بِالتَّمَاثِيلِ وَيُعَظِّمُونَهَا مَعَ عِلْمِهِمْ أَنَّهَا حِجَارَةٌ؟',
          options: [
            'لِأَنَّهَا تَمَاثِيلُ لِلصَّالِحِينَ',
            'لِأَنَّهَا كَانَتْ غَالِيَةَ الثَّمَنِ',
            'لِأَنَّ الشَّيْطَانَ أَمَرَهُمْ بِذَلِكَ مُبَاشَرَةً',
          ],
          answer: 0,
          qEn: 'Why did they seek blessing through the statues and revere them, knowing they were just stone?',
          optionsEn: [
            'Because they were statues of the righteous',
            'Because they were expensive',
            'Because the Devil directly ordered them to',
          ],
        },
        {
          q: 'مَاذَا كَانَ يَحْدُثُ إِذَا مَاتَ فِيهِمْ رَجُلٌ صَالِحٌ آخَرُ؟',
          options: [
            'كَانُوا يَعْمَلُونَ لَهُ تِمْثَالًا وَيُسَمُّونَهُ بِاسْمِهِ',
            'كَانُوا يَنْسَوْنَهُ فَوْرًا',
            'كَانُوا يَحْرِقُونَ تَمَاثِيلَ الصَّالِحِينَ',
          ],
          answer: 0,
          qEn: 'What happened whenever another righteous man among them died?',
          optionsEn: [
            'They would make a statue for him and name it after him',
            'They would forget him immediately',
            'They would burn the statues of the righteous',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَعَمِلُوا لِلصَّالِحِينَ',
        post: 'كَثِيرَةً، وَوَضَعُوهَا فِي بُيُوتِهِمْ وَفِي مَسَاجِدِهِمْ.',
        en: 'They made many statues for the righteous, and placed them in their houses and in their mosques.',
        options: ['تَمَاثِيلَ', 'تَمَاثِيلُ', 'تِمْثَالًا', 'التَّمَاثِيلَ'],
        answer: 0,
        rationales: [
          'Indefinite accusative plural -- object of عَمِلُوا, matching كَثِيرَةً\'s indefinite accusative agreement.',
          'Nominative -- wrong case; this is the object of a verb, not a subject.',
          'Singular -- wrong number; كَثِيرَةً and the plural sense both call for the plural.',
          'Definite -- wrong; these are not yet specific, known statues.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَإِنَّ هَذِهِ حِجَارَةٌ لَا تَنْفَعُهُمْ وَلَا تَضُرُّهُمْ وَلَا',
        post: '،',
        en: 'and these were stones that could not benefit them, harm them, or provide for them,',
        options: ['تَرْزُقُهُمْ', 'رَزَقَتْهُمْ', 'يَرْزُقُهُمْ', 'رَازِقَةٌ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd feminine singular + 3rd masculine plural object -- matches تَنْفَعُهُمْ and تَضُرُّهُمْ\'s tense and agreement (حِجَارَة is grammatically feminine).',
          'Perfect -- wrong tense; breaks the parallel with the imperfect verbs before it.',
          'Wrong gender -- masculine, but the subject حِجَارَة is feminine.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَإِذَا مَاتَ فِيهِمْ رَجُلٌ صَالِحٌ عَمِلُوا لَهُ تِمْثَالًا وَ',
        post: 'بِاسْمِهِ.',
        en: 'Whenever a righteous man died among them, they made a statue for him and named it after him.',
        options: ['سَمَّوْهُ', 'سَمَّاهُ', 'يُسَمُّونَهُ', 'مُسَمًّى'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural + 3rd masculine singular object -- "and they named it," matching عَمِلُوا\'s tense and number.',
          'Perfect, 3rd masculine singular -- wrong number; the subject here is "they," not "he."',
          'Imperfect -- wrong tense; breaks the parallel with the perfect عَمِلُوا.',
          'Passive participle -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَتَبَرَّكُ الرَّجُلُ بِالتِّمْثَالِ',
        pre: '',
        post: 'بِالتِّمْثَالِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَتَبَرَّكُ', 'يَتَبَرَّكُ', 'تَتَبَرَّكُ', 'نَتَبَرَّكُ'],
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
        base: 'يَتَبَرَّكُ الرَّجُلُ بِالتِّمْثَالِ',
        pre: '',
        post: 'بِالتِّمْثَالِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَتَبَرَّكُ', 'يَتَبَرَّكُ', 'أَتَبَرَّكُ', 'نَتَبَرَّكُ'],
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
        base: 'يَتَبَرَّكُ الرَّجُلُ بِالتِّمْثَالِ',
        pre: '',
        post: 'بِالتِّمْثَالِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَتَبَرَّكُونَ', 'يَتَبَرَّكُ', 'تَتَبَرَّكُ', 'نَتَبَرَّكُ'],
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

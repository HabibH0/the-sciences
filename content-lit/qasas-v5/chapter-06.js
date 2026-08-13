// قَصَصُ النَّبِيِّينَ, volume 5 «نَاقَةُ ثَمُودَ», chapter 6 -- دِعَايَةُ
// الأَغْنِيَاءِ. Printed pages 102 (from ch6's own heading box, right after
// ch5's closing mockery) - 103 (top portion only, ending before ch7's own
// box قَدْ أَخْطَأَ ظَنُّنَا partway down that page). Transcribed by hand from
// the scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md and
// QASAS_VOLUME_MAP.md's volume 5 table.
//
// The wealthy notice some of their own people drifting toward Ṣāliḥ and,
// fearing for their standing, launch a propaganda campaign against him --
// almost the entire chapter is their own speech, quoted straight from the
// Qur'an (Sūrat al-Muʾminūn 23:33-38): he is only a man like themselves;
// obeying a mere human would be ruinous; resurrection after becoming dust
// and bones is absurd and "far off"; this present life is all there is; and
// he is nothing but a liar fabricating claims against Allah.
//
// Grammar / lexical notes:
//   -- This chapter's own narration is a single sentence (qs-v5-c06-001/002)
//      before the elite's speech takes over entirely; every remaining
//      sentence (qs-v5-c06-003 through -013) is Qur'an 23:33-38, tokenized
//      and glossed exactly like ordinary narration and split into
//      ﴿﴾-bracketed fragments at natural phrase boundaries, per the shared
//      brief and the qasas-v3 ch16 precedent for long ayah runs.
//   -- مِمَّا (qs-v5-c06-004) is مِنْ + مَا fused into one surface form, tagged
//      lemma 'مَا', pos 'rel', features 'prep+rel' -- parallel to لِمَا
//      (qs-v5-c06-009) tagged the same way, both matching the format's
//      general fused-proclitic convention extended to a relative pronoun
//      rather than a noun.
//   -- وَلَئِنْ (qs-v5-c06-006) fuses وَ + the emphatic لَ (لام التوكيد) + إِنْ
//      (conditional) onto one surface form; tagged on the base lemma إِنْ,
//      features 'conj+part' -- the emphatic لَ has no separate atom in the
//      documented grammar, so it is absorbed into the fused part segment
//      rather than invented a new one, the same conservative choice ch3
//      made for the mushaf's وَلَٰكِنَّ.
//   -- لَخَاسِرُونَ (qs-v5-c06-007) similarly fuses the emphatic لَ onto the
//      predicate of إِنَّ (خَاسِرُونَ, nominative plural), tagged 'part+pl.nom'
//      on lemma خَاسِر -- matching the corpus's existing لَشَيْطَانٌ-type
//      pattern for an emphatic لَ fused onto a predicate noun/participle.
//   -- بَشَر، أَطَاعَ، وَعَدَ، دُنْيَا، حَيِيَ، كَذِب، مُؤْمِن all check out as
//      already-taught in earlier volumes despite feeling central to this
//      chapter's own vocabulary -- confirmed against the corpus grep, not
//      re-listed as new.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): رَأَى، بَعْض، نَاس، إِلَى،
//      صَالِح (qasas-v5 ch4/5)، خَافَ، عَلَى، قَالَ، مَا، هَذَا، إِلَّا، بَشَر، مِثْل،
//      أَكَلَ، مِنْ، شَرِبَ، أَطَاعَ، إِنَّ، إِذاً، أَيَعِدُ (from وَعَدَ)، أَنَّ، إِذَا،
//      مَاتَ، كَانَ، هِيَ، الدُّنْيَا، حَيِيَ، نَحْنُ، هُوَ، رَجُل، اللَّه، كَذِب، مُؤْمِن
//      are all already taught and are NOT re-listed in newWords here.
//
// 10 new words (مَالَ، رِيَاسَة، خَاسِر، تُرَاب، عَظْم، مُخْرَج، هَيْهَاتَ، حَيَاة،
// مَبْعُوث، اِفْتَرَى).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch6',
  title: { ar: 'دِعَايَةُ الْأَغْنِيَاءِ', en: "The Wealthy's Campaign" },
  newWords: ['مَالَ', 'رِيَاسَة', 'خَاسِر', 'تُرَاب', 'عَظْم', 'مُخْرَج', 'هَيْهَاتَ', 'حَيَاة', 'مَبْعُوث', 'اِفْتَرَى'],
  lemmas: {
    مَالَ: { gloss: 'to incline, lean toward' },
    رِيَاسَة: { gloss: 'leadership, headship' },
    خَاسِر: { gloss: 'a loser' },
    تُرَاب: { gloss: 'dust, dirt' },
    عَظْم: { gloss: 'a bone' },
    مُخْرَج: { gloss: 'brought forth, resurrected' },
    هَيْهَاتَ: { gloss: 'far off, impossible' },
    حَيَاة: { gloss: 'life' },
    مَبْعُوث: { gloss: 'resurrected, raised up' },
    اِفْتَرَى: { gloss: 'to fabricate, invent a lie' },
  },
  paragraphs: [
    {
      en: 'The wealthy saw that some of the people were inclining toward Ṣāliḥ, so they feared for their standing and said: "This is nothing but a man like you, eating what you eat and drinking what you drink. If you obey a man like yourselves, you will surely be losers then. Does he promise you that when you die and become dust and bones you will be brought forth? Far, far off is what you are promised! There is nothing but our life in this world -- we die and we live, and we will not be resurrected. He is nothing but a man who has fabricated a lie against Allah, and we are not believers in him."',
      sentences: [
        {
          id: 'qs-v5-c06-001',
          ar: 'وَرَأَى الْأَغْنِيَاءُ أَنَّ بَعْضَ النَّاسِ يَمِيلُونَ إِلَى صَالِحٍ',
          en: 'The wealthy saw that some of the people were inclining toward Ṣāliḥ,',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to see; and saw' },
            { surface: 'الْأَغْنِيَاءُ', lemma: 'غَنِيّ', pos: 'noun', features: 'pl.def.nom', gloss: 'the wealthy' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'بَعْضَ', lemma: 'بَعْض', pos: 'noun', features: 'constr.acc', gloss: 'some of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'يَمِيلُونَ', lemma: 'مَالَ', pos: 'verb', features: 'impf.3mp', root: 'م ي ل', gloss: 'to incline, lean; incline' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'toward' },
            { surface: 'صَالِحٍ', lemma: 'صَالِح', pos: 'proper', features: 'gen', gloss: 'Ṣāliḥ' },
          ],
        },
        {
          id: 'qs-v5-c06-002',
          ar: 'فَخَافُوا عَلَى رِيَاسَتِهِمْ وَقَالُوا:',
          en: 'so they feared for their standing and said:',
          tokens: [
            { surface: 'فَخَافُوا', lemma: 'خَافَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to fear; so they feared' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'رِيَاسَتِهِمْ', lemma: 'رِيَاسَة', pos: 'noun', features: 'gen+3mp', root: 'ر أ س', gloss: 'their leadership, standing' },
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v5-c06-003',
          ar: '﴿مَا هَذَا إِلَّا بَشَرٌ مِثْلُكُمْ',
          en: '"This is nothing but a man like you,',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, but' },
            { surface: 'بَشَرٌ', lemma: 'بَشَر', pos: 'noun', features: 'indef.nom', gloss: 'a human being' },
            { surface: 'مِثْلُكُمْ', lemma: 'مِثْل', pos: 'noun', features: 'nom+2mp', gloss: 'like you' },
          ],
        },
        {
          id: 'qs-v5-c06-004',
          ar: 'يَأْكُلُ مِمَّا تَأْكُلُونَ مِنْهُ وَيَشْرَبُ مِمَّا تَشْرَبُونَ﴾.',
          en: 'eating what you eat and drinking what you drink."',
          tokens: [
            { surface: 'يَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to eat; eats' },
            { surface: 'مِمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'from what' },
            { surface: 'تَأْكُلُونَ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.2mp', gloss: 'to eat; you eat' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from it' },
            { surface: 'وَيَشْرَبُ', lemma: 'شَرِبَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to drink; and drinks' },
            { surface: 'مِمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'from what' },
            { surface: 'تَشْرَبُونَ', lemma: 'شَرِبَ', pos: 'verb', features: 'impf.2mp', gloss: 'to drink; you drink' },
          ],
        },
        {
          id: 'qs-v5-c06-005',
          ar: '﴿وَلَئِنْ أَطَعْتُمْ بَشَراً مِثْلَكُمْ',
          en: '"If you obey a man like yourselves,',
          tokens: [
            { surface: 'وَلَئِنْ', lemma: 'إِنْ', pos: 'part', features: 'conj+part', gloss: 'and if indeed' },
            { surface: 'أَطَعْتُمْ', lemma: 'أَطَاعَ', pos: 'verb', features: 'perf.2mp', root: 'ط و ع', gloss: 'to obey; you obeyed' },
            { surface: 'بَشَراً', lemma: 'بَشَر', pos: 'noun', features: 'indef.acc', gloss: 'a human being' },
            { surface: 'مِثْلَكُمْ', lemma: 'مِثْل', pos: 'noun', features: 'acc+2mp', gloss: 'like you' },
          ],
        },
        {
          id: 'qs-v5-c06-006',
          ar: 'إِنَّكُمْ إِذاً لَخَاسِرُونَ﴾.',
          en: 'you will surely be losers then."',
          tokens: [
            { surface: 'إِنَّكُمْ', lemma: 'إِنَّ', pos: 'part', features: 'part+2mp', gloss: 'indeed you' },
            { surface: 'إِذاً', lemma: 'إِذاً', pos: 'adv', features: 'adv', gloss: 'then, in that case' },
            { surface: 'لَخَاسِرُونَ', lemma: 'خَاسِر', pos: 'adj', features: 'part+pl.nom', root: 'خ س ر', gloss: 'surely losers' },
          ],
        },
        {
          id: 'qs-v5-c06-007',
          ar: '﴿أَيَعِدُكُمْ أَنَّكُمْ إِذَا مِتُّمْ وَكُنْتُمْ تُرَاباً وَعِظَاماً',
          en: '"Does he promise you that when you die and become dust and bones,',
          tokens: [
            { surface: 'أَيَعِدُكُمْ', lemma: 'وَعَدَ', pos: 'verb', features: 'part+impf.3ms+2mp', gloss: 'to promise; does he promise you' },
            { surface: 'أَنَّكُمْ', lemma: 'أَنَّ', pos: 'part', features: 'part+2mp', gloss: 'that you' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'مِتُّمْ', lemma: 'مَاتَ', pos: 'verb', features: 'perf.2mp', gloss: 'to die; you die' },
            { surface: 'وَكُنْتُمْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.2mp', root: 'ك و ن', gloss: 'to be, become; and become' },
            { surface: 'تُرَاباً', lemma: 'تُرَاب', pos: 'noun', features: 'indef.acc', root: 'ت ر ب', gloss: 'dust' },
            { surface: 'وَعِظَاماً', lemma: 'عَظْم', pos: 'noun', features: 'conj+pl.indef.acc', root: 'ع ظ م', gloss: 'and bones' },
          ],
        },
        {
          id: 'qs-v5-c06-008',
          ar: 'أَنَّكُمْ مُخْرَجُونَ﴾.',
          en: 'you will be brought forth?"',
          tokens: [
            { surface: 'أَنَّكُمْ', lemma: 'أَنَّ', pos: 'part', features: 'part+2mp', gloss: 'that you' },
            { surface: 'مُخْرَجُونَ', lemma: 'مُخْرَج', pos: 'adj', features: 'pl.nom', root: 'خ ر ج', gloss: 'brought forth, resurrected' },
          ],
        },
        {
          id: 'qs-v5-c06-009',
          ar: '﴿هَيْهَاتَ هَيْهَاتَ لِمَا تُوعَدُونَ﴾.',
          en: '"Far, far off is what you are promised!"',
          tokens: [
            { surface: 'هَيْهَاتَ', lemma: 'هَيْهَاتَ', pos: 'part', features: 'part', gloss: 'far off, impossible' },
            { surface: 'هَيْهَاتَ', lemma: 'هَيْهَاتَ', pos: 'part', features: 'part', gloss: 'far off, impossible' },
            { surface: 'لِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'for what' },
            { surface: 'تُوعَدُونَ', lemma: 'وَعَدَ', pos: 'verb', features: 'pass+impf.2mp', gloss: 'to promise; you are promised' },
          ],
        },
        {
          id: 'qs-v5-c06-010',
          ar: '﴿إِنْ هِيَ إِلَّا حَيَاتُنَا الدُّنْيَا نَمُوتُ وَنَحْيَا',
          en: '"There is nothing but our life in this world -- we die and we live,',
          tokens: [
            { surface: 'إِنْ', lemma: 'إِنْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'هِيَ', lemma: 'هِيَ', pos: 'noun', features: '3fs', gloss: 'it' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, but' },
            { surface: 'حَيَاتُنَا', lemma: 'حَيَاة', pos: 'noun', features: 'nom+1p', root: 'ح ي ي', gloss: 'our life' },
            { surface: 'الدُّنْيَا', lemma: 'دُنْيَا', pos: 'adj', features: 'def.nom', gloss: 'the worldly, this world' },
            { surface: 'نَمُوتُ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.1p', gloss: 'to die; we die' },
            { surface: 'وَنَحْيَا', lemma: 'حَيِيَ', pos: 'verb', features: 'conj+impf.1p', gloss: 'to live; and we live' },
          ],
        },
        {
          id: 'qs-v5-c06-011',
          ar: 'وَمَا نَحْنُ بِمَبْعُوثِينَ﴾.',
          en: 'and we will not be resurrected."',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'بِمَبْعُوثِينَ', lemma: 'مَبْعُوث', pos: 'noun', features: 'prep+pl.gen', root: 'ب ع ث', gloss: 'resurrected' },
          ],
        },
        {
          id: 'qs-v5-c06-012',
          ar: '﴿إِنْ هُوَ إِلَّا رَجُلٌ افْتَرَى عَلَى اللَّهِ كَذِباً',
          en: '"He is nothing but a man who has fabricated a lie against Allah,',
          tokens: [
            { surface: 'إِنْ', lemma: 'إِنْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, but' },
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', gloss: 'a man' },
            { surface: 'افْتَرَى', lemma: 'اِفْتَرَى', pos: 'verb', features: 'perf.3ms', root: 'ف ر ي', gloss: 'to fabricate, invent falsely; has fabricated' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'كَذِباً', lemma: 'كَذِب', pos: 'noun', features: 'indef.acc', gloss: 'a lie' },
          ],
        },
        {
          id: 'qs-v5-c06-013',
          ar: 'وَمَا نَحْنُ لَهُ بِمُؤْمِنِينَ﴾.',
          en: 'and we are not believers in him."',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'in him' },
            { surface: 'بِمُؤْمِنِينَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'prep+pl.gen', gloss: 'believers' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا خَافَ الْأَغْنِيَاءُ مِنْ دَعْوَةِ صَالِحٍ؟',
          options: ['لِأَنَّهُمْ رَأَوْا بَعْضَ النَّاسِ يَمِيلُونَ إِلَيْهِ فَخَافُوا عَلَى رِيَاسَتِهِمْ', 'لِأَنَّهُ هَدَّدَهُمْ بِالْقَتْلِ', 'لِأَنَّهُ طَلَبَ مِنْهُمْ أَمْوَالَهُمْ'],
          answer: 0,
          qEn: "Why were the wealthy afraid of Ṣāliḥ's call?",
          optionsEn: ['Because they saw some people inclining toward him and feared for their standing', 'Because he threatened to kill them', 'Because he demanded their wealth'],
        },
        {
          q: 'مَاذَا قَالَ الْأَغْنِيَاءُ عَنْ صَالِحٍ؟',
          options: ['قَالُوا: مَا هَذَا إِلَّا بَشَرٌ مِثْلُكُمْ', 'قَالُوا: هُوَ مَلَكٌ نَزَلَ مِنَ السَّمَاءِ', 'قَالُوا: هُوَ أَحْكَمُ رَجُلٍ فِي الْأَرْضِ'],
          answer: 0,
          qEn: 'What did the wealthy say about Ṣāliḥ?',
          optionsEn: ['They said: This is nothing but a man like you', 'They said: He is an angel who descended from the sky', 'They said: He is the wisest man on earth'],
        },
        {
          q: 'بِمَاذَا وَصَفَ الْأَغْنِيَاءُ الْبَعْثَ بَعْدَ الْمَوْتِ؟',
          options: ['قَالُوا هَيْهَاتَ هَيْهَاتَ لِمَا تُوعَدُونَ، وَمَا نَحْنُ بِمَبْعُوثِينَ', 'قَالُوا نُؤْمِنُ بِهِ إِيمَاناً كَامِلاً', 'قَالُوا لَا نَعْرِفُ عَنْهُ شَيْئاً'],
          answer: 0,
          qEn: 'How did the wealthy describe resurrection after death?',
          optionsEn: ['They said: Far, far off is what you are promised! We will not be resurrected', 'They said: We believe in it completely', 'They said: We know nothing about it'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَمَا هَذَا إِلَّا',
        post: 'مِثْلُكُمْ يَأْكُلُ مِمَّا تَأْكُلُونَ.',
        en: 'This is nothing but a man like you, eating what you eat.',
        options: ['بَشَرٌ', 'بَشَراً', 'بَشَرٍ', 'الْبَشَرُ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- predicate of the nominal sentence هَذَا؛ إِلَّا does not change the base case.',
          'Accusative -- wrong case; nothing here governs the accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong definiteness; the text introduces him indefinitely as "a human being."',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَئِنْ أَطَعْتُمْ',
        post: 'مِثْلَكُمْ إِنَّكُمْ إِذاً لَخَاسِرُونَ.',
        en: 'If you obey a man like yourselves, you will surely be losers then.',
        options: ['بَشَراً', 'بَشَرٌ', 'بَشَرٍ', 'الْبَشَرَ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- direct object of أَطَعْتُمْ.',
          'Nominative -- wrong case for a direct object.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong definiteness; the text describes him indefinitely.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنْ هُوَ إِلَّا رَجُلٌ',
        post: 'عَلَى اللَّهِ كَذِباً.',
        en: 'He is nothing but a man who has fabricated a lie against Allah.',
        options: ['افْتَرَى', 'يَفْتَرِي', 'مُفْتَرٍ', 'افْتَرَوْا'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- matches رَجُلٌ, describing a completed act.',
          'Imperfect -- wrong tense for a completed accusation.',
          'Active participle (noun) -- wrong part of speech for this position.',
          '3rd masculine plural -- wrong number; رَجُلٌ is singular.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَمِيلُ الرَّجُلُ إِلَى الْحَقِّ',
        pre: '',
        post: 'إِلَى الْحَقِّ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَمِيلُ', 'يَمِيلُ', 'تَمِيلُ', 'نَمِيلُ'],
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
        base: 'يَمِيلُ الرَّجُلُ إِلَى الْحَقِّ',
        pre: '',
        post: 'إِلَى الْحَقِّ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَمِيلُ', 'يَمِيلُ', 'أَمِيلُ', 'نَمِيلُ'],
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
        base: 'يَمِيلُ الرَّجُلُ إِلَى الْحَقِّ',
        pre: '',
        post: 'إِلَى الْحَقِّ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَمِيلُونَ', 'يَمِيلُ', 'تَمِيلُ', 'نَمِيلُ'],
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

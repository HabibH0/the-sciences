// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 2 -- حَسَدُ
// الشَّيْطَانِ. Printed page 63 (top portion only) -- the whole chapter sits
// in the top half of the page, ending before ch3's heading فِكْرَةُ
// الشَّيْطَانِ partway down the same page. Transcribed by hand from the scan
// (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// Iblīs's jealous internal monologue at the sight of Adam's united,
// God-worshiping descendants -- rhetorical questions building to his
// resolve to take revenge. The author repeats إِنَّ ذَلِكَ لَا يَكُونُ! and
// لَا بُدَّ أَنْ يَكُونَ ذَلِكَ! verbatim for emphasis exactly as printed, so
// each repetition is kept as its own sentence entry (same printed-text
// fidelity already practiced for repeated lines elsewhere in the corpus).
//
// Grammar / lexical notes:
//   -- أَلَا (qs-v3-c02-002/003/012) is the interrogative hamza fused onto
//      the already-taught negator لَا (rhetorical "is it not the case
//      that...?"), tagged features 'part+neg' -- the same fused-particle
//      pattern already used for أَلَمْ (qasas-v2 ch24) and أَئِنَّكَ
//      (qasas-v2 ch22). Distinct from ch22's own أَمَا ("did he not"),
//      which fuses onto a different base.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لَكِنْ، كَيْفَ، رَضِيَ
//      (qasas-v2 ch15)، ذُرِّيَّة (ch1)، هَذَا، زَالَ (qasas-v2 ch21)، نَاس،
//      عَبَدَ، اللَّه، أُمَّة (ch1)، وَاحِد، لَا، إِنَّ، ذَلِكَ، كَانَ، هَلْ، دَخَلَ
//      (qasas-v1 ch5)، آدَم، جَنَّة (qasas-v1 ch14)، نَار (qasas-v1 ch6)،
//      لَمْ، سَجَدَ، مِنْ، اِبْن، مَعَ، أَنْ
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 6 new words (إِبْلِيس، اِخْتَلَفَ، طَرَدَ، لَعَنَ، اِنْتَقَمَ، بُدّ).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch2',
  title: { ar: 'حَسَدُ الشَّيْطَانِ', en: "The Devil's Envy" },
  newWords: ['إِبْلِيس', 'اِخْتَلَفَ', 'طَرَدَ', 'لَعَنَ', 'اِنْتَقَمَ', 'بُدّ'],
  lemmas: {
    إِبْلِيس: { gloss: 'Iblīs (the Devil, Satan)' },
    اِخْتَلَفَ: { gloss: 'to differ, disagree' },
    طَرَدَ: { gloss: 'to expel, drive out' },
    لَعَنَ: { gloss: 'to curse' },
    اِنْتَقَمَ: { gloss: 'to take revenge' },
    بُدّ: { gloss: 'escape, way out (لَا بُدَّ: must, inevitably)' },
  },
  paragraphs: [
    {
      en: 'But how could Iblīs and his offspring be content with this? Would people still be worshiping Allah? Would people still be one nation, not differing? That will not be! That will not be! Should Adam\'s offspring enter Paradise, while Iblīs and his offspring enter the Fire? That will not be, that will not be! Indeed, he did not prostrate to Adam,',
      sentences: [
        {
          id: 'qs-v3-c02-001',
          ar: 'وَلَكِنْ كَيْفَ يَرْضَى إِبْلِيسُ وَذُرِّيَّتُهُ بِهَذَا؟',
          en: 'But how could Iblīs and his offspring be content with this?',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'يَرْضَى', lemma: 'رَضِيَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be content; would be content' },
            { surface: 'إِبْلِيسُ', lemma: 'إِبْلِيس', pos: 'proper', features: 'nom', gloss: 'Iblīs' },
            { surface: 'وَذُرِّيَّتُهُ', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his offspring' },
            { surface: 'بِهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'prep+dem.m', gloss: 'with this' },
          ],
        },
        {
          id: 'qs-v3-c02-002',
          ar: 'أَلَا يَزَالُ النَّاسُ يَعْبُدُونَ اللَّهَ؟',
          en: 'Would people still be worshiping Allah?',
          tokens: [
            { surface: 'أَلَا', lemma: 'لَا', pos: 'part', features: 'part+neg', gloss: "isn't it that...? (rhetorical)" },
            { surface: 'يَزَالُ', lemma: 'زَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to cease; still (continue)' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship; worshiping' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v3-c02-003',
          ar: 'أَلَا يَزَالُ النَّاسُ أُمَّةً وَاحِدَةً لَا يَخْتَلِفُونَ؟',
          en: 'Would people still be one nation, not differing?',
          tokens: [
            { surface: 'أَلَا', lemma: 'لَا', pos: 'part', features: 'part+neg', gloss: "isn't it that...? (rhetorical)" },
            { surface: 'يَزَالُ', lemma: 'زَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to cease; still (continue)' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'أُمَّةً', lemma: 'أُمَّة', pos: 'noun', features: 'indef.acc', gloss: 'a nation' },
            { surface: 'وَاحِدَةً', lemma: 'وَاحِد', pos: 'adj', features: 'indef.acc.f', gloss: 'one' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَخْتَلِفُونَ', lemma: 'اِخْتَلَفَ', pos: 'verb', features: 'impf.3mp', root: 'خ ل ف', gloss: 'to differ, disagree; differing' },
          ],
        },
        {
          id: 'qs-v3-c02-004',
          ar: 'إِنَّ ذَلِكَ لَا يَكُونُ!',
          en: 'That will not be!',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; will be' },
          ],
        },
        {
          id: 'qs-v3-c02-005',
          ar: 'إِنَّ ذَلِكَ لَا يَكُونُ!',
          en: 'That will not be!',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; will be' },
          ],
        },
        {
          id: 'qs-v3-c02-006',
          ar: 'هَلْ يَدْخُلُ ذُرِّيَّةُ آدَمَ الْجَنَّةَ،',
          en: "Should Adam's offspring enter Paradise,",
          tokens: [
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: 'is it that? (question)' },
            { surface: 'يَدْخُلُ', lemma: 'دَخَلَ', pos: 'verb', features: 'impf.3ms', root: 'د خ ل', gloss: 'to enter; enters' },
            { surface: 'ذُرِّيَّةُ', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'constr.nom', gloss: 'the offspring of' },
            { surface: 'آدَمَ', lemma: 'آدَم', pos: 'proper', features: 'gen', gloss: 'Adam' },
            { surface: 'الْجَنَّةَ', lemma: 'جَنَّة', pos: 'noun', features: 'def.acc', gloss: 'Paradise' },
          ],
        },
        {
          id: 'qs-v3-c02-007',
          ar: 'وَيَدْخُلُ إِبْلِيسُ وَذُرِّيَّتُهُ النَّارَ؟',
          en: 'while Iblīs and his offspring enter the Fire?',
          tokens: [
            { surface: 'وَيَدْخُلُ', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+impf.3ms', root: 'د خ ل', gloss: 'to enter; and enters' },
            { surface: 'إِبْلِيسُ', lemma: 'إِبْلِيس', pos: 'proper', features: 'nom', gloss: 'Iblīs' },
            { surface: 'وَذُرِّيَّتُهُ', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his offspring' },
            { surface: 'النَّارَ', lemma: 'نَار', pos: 'noun', features: 'def.acc', gloss: 'the Fire' },
          ],
        },
        {
          id: 'qs-v3-c02-008',
          ar: 'إِنَّ ذَلِكَ لَا يَكُونُ،',
          en: 'That will not be,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; will be' },
          ],
        },
        {
          id: 'qs-v3-c02-009',
          ar: 'إِنَّ ذَلِكَ لَا يَكُونُ!',
          en: 'that will not be!',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; will be' },
          ],
        },
        {
          id: 'qs-v3-c02-010',
          ar: 'إِنَّهُ لَمْ يَسْجُدْ لِآدَمَ',
          en: 'Indeed, he did not prostrate to Adam,',
          tokens: [
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'did not' },
            { surface: 'يَسْجُدْ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3ms', gloss: 'to prostrate; he prostrate' },
            { surface: 'لِآدَمَ', lemma: 'آدَم', pos: 'proper', features: 'prep+gen', gloss: 'to Adam' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا لَمْ يَرْضَ إِبْلِيسُ عَنْ حَالِ ذُرِّيَّةِ آدَمَ؟',
          options: ['لِأَنَّهُمْ كَانُوا أُمَّةً وَاحِدَةً يَعْبُدُونَ اللَّهَ وَلَا يَخْتَلِفُونَ', 'لِأَنَّهُمْ كَانُوا فُقَرَاءَ', 'لِأَنَّهُمْ لَمْ يَبْنُوا بُيُوتاً كَثِيرَةً'],
          answer: 0,
          qEn: "Why was Iblīs unhappy with Adam's offspring's situation?",
          optionsEn: ['Because they were one nation worshiping Allah and not differing', 'Because they were poor', 'Because they had not built many houses'],
        },
        {
          q: 'لِمَاذَا طَرَدَ اللَّهُ إِبْلِيسَ وَلَعَنَهُ؟',
          options: ['لِأَنَّهُ لَمْ يَسْجُدْ لِآدَمَ', 'لِأَنَّهُ كَذَبَ عَلَى النَّاسِ', 'لِأَنَّهُ سَرَقَ مِنْ ذُرِّيَّةِ آدَمَ'],
          answer: 0,
          qEn: 'Why did Allah expel and curse Iblīs?',
          optionsEn: ['Because he did not prostrate to Adam', 'Because he lied to people', "Because he stole from Adam's offspring"],
        },
      ],
    },
    {
      en: 'so Allah expelled him and cursed him. Would he not take revenge on the sons of Adam, so that they enter the Fire with him? That must be! It must be.',
      sentences: [
        {
          id: 'qs-v3-c02-011',
          ar: 'فَطَرَدَهُ اللَّهُ وَلَعَنَهُ.',
          en: 'so Allah expelled him and cursed him.',
          tokens: [
            { surface: 'فَطَرَدَهُ', lemma: 'طَرَدَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ط ر د', gloss: 'to expel, drive out; so expelled him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'وَلَعَنَهُ', lemma: 'لَعَنَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ل ع ن', gloss: 'to curse; and cursed him' },
          ],
        },
        {
          id: 'qs-v3-c02-012',
          ar: 'أَلَا يَنْتَقِمُ مِنْ بَنِي آدَمَ',
          en: 'Would he not take revenge on the sons of Adam,',
          tokens: [
            { surface: 'أَلَا', lemma: 'لَا', pos: 'part', features: 'part+neg', gloss: "isn't it that...? (rhetorical)" },
            { surface: 'يَنْتَقِمُ', lemma: 'اِنْتَقَمَ', pos: 'verb', features: 'impf.3ms', root: 'ن ق م', gloss: 'to take revenge; take revenge' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.gen', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'آدَمَ', lemma: 'آدَم', pos: 'proper', features: 'gen', gloss: 'Adam' },
          ],
        },
        {
          id: 'qs-v3-c02-013',
          ar: 'فَيَدْخُلُوا مَعَهُ النَّارَ؟',
          en: 'so that they enter the Fire with him?',
          tokens: [
            { surface: 'فَيَدْخُلُوا', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+impf.3mp', root: 'د خ ل', gloss: 'to enter; so that they enter' },
            { surface: 'مَعَهُ', lemma: 'مَعَ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
            { surface: 'النَّارَ', lemma: 'نَار', pos: 'noun', features: 'def.acc', gloss: 'the Fire' },
          ],
        },
        {
          id: 'qs-v3-c02-014',
          ar: 'لَا بُدَّ أَنْ يَكُونَ ذَلِكَ!',
          en: 'That must be!',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'بُدَّ', lemma: 'بُدّ', pos: 'noun', features: 'acc', root: 'ب د د', gloss: 'escape, way out' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; be' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v3-c02-015',
          ar: 'لَا بُدَّ أَنْ يَكُونَ ذَلِكَ.',
          en: 'It must be.',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'بُدَّ', lemma: 'بُدّ', pos: 'noun', features: 'acc', root: 'ب د د', gloss: 'escape, way out' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; be' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَرَّرَ إِبْلِيسُ أَنْ يَفْعَلَ؟',
          options: ['أَنْ يَنْتَقِمَ مِنْ بَنِي آدَمَ فَيَدْخُلُوا مَعَهُ النَّارَ', 'أَنْ يَطْلُبَ الْمَغْفِرَةَ مِنَ اللَّهِ', 'أَنْ يَسْجُدَ لِآدَمَ أَخِيراً'],
          answer: 0,
          qEn: 'What did Iblīs resolve to do?',
          optionsEn: ["To take revenge on Adam's sons and drag them into the Fire with him", 'To seek forgiveness from Allah', 'To finally prostrate to Adam'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَكِنْ كَيْفَ',
        post: 'إِبْلِيسُ وَذُرِّيَّتُهُ بِهَذَا؟',
        en: 'But how could Iblīs and his offspring be content with this?',
        options: ['يَرْضَى', 'رَضِيَ', 'يَرْضَ', 'رَاضٍ'],
        answer: 0,
        rationales: [
          'Imperfect indicative -- a general, ongoing question, matching كَيْفَ + imperfect.',
          'Perfect -- wrong tense; this is a standing, general question, not a completed action.',
          'Jussive (short imperfect) -- wrong mood; nothing here calls for the jussive.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنَّهُ لَمْ يَسْجُدْ لِآدَمَ فَطَرَدَهُ اللَّهُ',
        post: '.',
        en: 'He did not prostrate to Adam, so Allah expelled him and cursed him.',
        options: ['وَلَعَنَهُ', 'وَلَعَنَ', 'وَلُعِنَ', 'وَلَعَنَتْهُ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular + 3rd masculine singular object -- "and cursed him," matching فَطَرَدَهُ\'s tense and structure.',
          'Missing object suffix -- "and cursed," with no "him."',
          'Passive -- wrong voice; Allah is the one cursing, not the one cursed.',
          'Wrong subject gender -- "she cursed him."',
        ],
      },
      {
        type: 'cloze',
        pre: 'أَلَا يَنْتَقِمُ مِنْ بَنِي آدَمَ فَيَدْخُلُوا مَعَهُ',
        post: '؟',
        en: 'Would he not take revenge on the sons of Adam, so that they enter the Fire with him?',
        options: ['النَّارَ', 'النَّارُ', 'نَاراً', 'النَّارِ'],
        answer: 0,
        rationales: [
          'Accusative, definite -- object of يَدْخُلُوا.',
          'Nominative -- wrong case; this is the object of a verb.',
          'Indefinite -- wrong; a specific, known Fire is meant.',
          'Genitive -- wrong case for a direct object.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَنْتَقِمُ الرَّجُلُ مِنْ عَدُوِّهِ',
        pre: '',
        post: 'مِنْ عَدُوِّهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَنْتَقِمُ', 'يَنْتَقِمُ', 'تَنْتَقِمُ', 'نَنْتَقِمُ'],
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
        base: 'يَنْتَقِمُ الرَّجُلُ مِنْ عَدُوِّهِ',
        pre: '',
        post: 'مِنْ عَدُوِّهِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَنْتَقِمُ', 'يَنْتَقِمُ', 'أَنْتَقِمُ', 'نَنْتَقِمُ'],
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
        base: 'يَنْتَقِمُ الرَّجُلُ مِنْ عَدُوِّهِ',
        pre: '',
        post: 'مِنْ عَدُوِّهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَنْتَقِمُونَ', 'يَنْتَقِمُ', 'تَنْتَقِمُ', 'نَنْتَقِمُ'],
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

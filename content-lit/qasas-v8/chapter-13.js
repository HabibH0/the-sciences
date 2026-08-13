// قَصَصُ النَّبِيِّينَ, volume 8 «قِصَّةُ سَيِّدِنَا شُعَيْبٍ», chapter 13 --
// عَاقِبَةُ أُمَّةٍ كَذَّبَتْ نَبِيَّهَا. Printed page 222 only -- continues
// directly after ch12's closing Qurʾān quote and this chapter's own
// heading box, on the same crowded final page, right before ch14's own
// heading further down. Transcribed by hand from the scan (vision OCR,
// 200-400dpi renders) against ../CHAPTER-FORMAT.md.
//
// The ending is the one ending every nation that denies its prophet and
// disbelieves Allah's favor receives -- given here word for word from the
// Qurʾān (al-Aʿrāf 7:91-92): the earthquake seizes them, and by morning
// they lie lifeless in their homes, as if they had never dwelt there at
// all; those who denied Shuʿayb were the very ones who lost.
//
// Grammar / lexical notes:
//   -- كَأَن لَّمْ يَغْنَوْا فِيهَا (qs-v8-c13-005) is an idiom, "as if they had
//      never dwelt there" -- كَأَن is كَأَنَّ lightened (already-taught
//      lemma, reused here on its own printed spelling without the shadda,
//      cf. qasas-v8 ch12's header comment on a parallel lightening), and
//      لَّمْ يَغْنَوْا negates the dwelling entirely into the past, so the
//      whole clause reads as a comparison against total absence -- "it is
//      as though they were never there" -- rather than an ordinary past
//      negation. A construction worth flagging for learners since neither
//      half translates literally on its own.
//   -- The second Qurʾān line is printed as two back-to-back clauses that
//      both open with الَّذِينَ كَذَّبُوا شُعَيْبًا, verbatim, one right after
//      the other -- transcribed here as two separate sentence entries
//      (qs-v8-c13-005/-006) exactly as printed, per the instruction not
//      to silently collapse a repeated line (cf. qasas-v3 ch22's header
//      comment on a printed-twice closing ayah).
//   -- غَنِيَ (qs-v8-c13-005, form I "to dwell, live [somewhere]") is a
//      distinct lemma from the already-taught adjective غَنِيّ ("rich,"
//      qasas-v3 ch11/12/14/15, qasas-v5 ch4) -- same root, different part
//      of speech, a distinction this volume's own ch3 header comment
//      already flags by name as a model case (cf. غَنِيّ/غَنِيَ).
//   -- جَاثِم (qs-v8-c13-004, active participle "fallen still, crouching
//      lifeless") describes bodies felled where they stood, face down and
//      unmoving -- a stock Qurʾānic image for a people struck by sudden
//      punishment.
//   -- دَار (qs-v8-c13-004, "house, home"), خَاسِر ("the losers"), عَاقِبَة
//      ("the end, outcome"), and نِعْمَة ("blessing, favor") all LOOK like
//      natural candidates for this chapter's newWords -- checked by hand
//      and confirmed already taught (دَار: qiraah-v2 ch62/63/70, sharing
//      the corpus's global lexicon across both courses per
//      QASAS_AGENT_BRIEF.md §6; خَاسِر: qasas-v3 ch21, qasas-v5 ch6;
//      عَاقِبَة: qasas-v8's own ch5; نِعْمَة: qasas-v4 ch2/ch6 and others)
//      -- so none are re-listed in newWords here, only glossed inline.
//      دَار as a noun ("house") coexists with the already-established verb
//      lemma دَار ("to turn, rotate," qiraah-v2 ch62/70) as two separate
//      same-spelling, different-part-of-speech lemmas, matching the
//      corpus's own explicit precedent for exactly this pair.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ، عَاقِبَة، وَاحِد،
//      كُلّ، أُمَّة، كَذَّبَ، نَبِيّ، كَفَرَ، بِ، نِعْمَة، اللَّه، أَخَذَ، فِي، دَار، الَّذِي،
//      شُعَيْب، كَأَنَّ، لَمْ، هُمْ، خَاسِر، أَصْبَحَ are all already taught and are
//      NOT re-listed in newWords here.
//
// 3 new words (رَجْفَة، جَاثِم، غَنِيَ) -- another short word-list for
// another short, single-Qurʾān-quote chapter.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch13',
  title: { ar: 'عَاقِبَةُ أُمَّةٍ كَذَّبَتْ نَبِيَّهَا', en: 'The Fate of a Nation That Denied Its Prophet' },
  newWords: ['رَجْفَة', 'جَاثِم', 'غَنِيَ'],
  lemmas: {
    رَجْفَة: { gloss: 'earthquake, violent tremor' },
    جَاثِم: { gloss: 'fallen still, crouching lifeless' },
    غَنِيَ: { gloss: 'to dwell, live (somewhere)' },
  },
  paragraphs: [
    {
      en: "And the end was one and the same -- the end of every nation that denied its prophet and disbelieved Allah's favor:",
      sentences: [
        {
          id: 'qs-v8-c13-001',
          ar: 'وَكَانَتِ الْعَاقِبَةُ وَاحِدَةً،',
          en: 'And the end was one and the same,',
          tokens: [
            { surface: 'وَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be; and was' },
            { surface: 'الْعَاقِبَةُ', lemma: 'عَاقِبَة', pos: 'noun', features: 'def.nom', gloss: 'the end, outcome' },
            { surface: 'وَاحِدَةً', lemma: 'وَاحِد', pos: 'adj', features: 'indef.acc.f', gloss: 'one, the same' },
          ],
        },
        {
          id: 'qs-v8-c13-002',
          ar: 'عَاقِبَةَ كُلِّ أُمَّةٍ كَذَّبَتْ نَبِيَّهَا،',
          en: 'the end of every nation that denied its prophet',
          tokens: [
            { surface: 'عَاقِبَةَ', lemma: 'عَاقِبَة', pos: 'noun', features: 'acc', gloss: 'the end of' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'أُمَّةٍ', lemma: 'أُمَّة', pos: 'noun', features: 'indef.gen', gloss: 'a nation' },
            { surface: 'كَذَّبَتْ', lemma: 'كَذَّبَ', pos: 'verb', features: 'perf.3fs', gloss: 'to deny, call a liar; denied' },
            { surface: 'نَبِيَّهَا', lemma: 'نَبِيّ', pos: 'noun', features: 'acc+3fs', gloss: 'its prophet' },
          ],
        },
        {
          id: 'qs-v8-c13-003',
          ar: 'وَكَفَرَتْ بِنِعْمَةِ اللَّهِ:',
          en: "and disbelieved Allah's favor:",
          tokens: [
            { surface: 'وَكَفَرَتْ', lemma: 'كَفَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to disbelieve; and disbelieved' },
            { surface: 'بِنِعْمَةِ', lemma: 'نِعْمَة', pos: 'noun', features: 'prep+gen.constr', gloss: 'in the favor of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَ الْكَاتِبُ عَاقِبَةَ كُلِّ أُمَّةٍ كَذَّبَتْ نَبِيَّهَا؟',
          options: ['كَانَتِ الْعَاقِبَةُ وَاحِدَةً لِكُلِّ أُمَّةٍ كَذَّبَتْ نَبِيَّهَا وَكَفَرَتْ بِنِعْمَةِ اللَّهِ', 'كَانَتْ مُخْتَلِفَةً بِاخْتِلَافِ الأُمَمِ', 'لَمْ يَذْكُرِ الْكِتَابُ شَيْئاً عَنْهَا'],
          answer: 0,
          qEn: "How did the author describe the end of every nation that denied its prophet?",
          optionsEn: ["The end was one and the same for every nation that denied its prophet and disbelieved Allah's favor", 'It differed from nation to nation', 'The book says nothing about it'],
        },
      ],
    },
    {
      en: '"So the earthquake seized them, and they lay lifeless in their homes come morning. Those who denied Shuʿayb -- it was as if they had never dwelt there. Those who denied Shuʿayb -- they were the very ones who lost."',
      sentences: [
        {
          id: 'qs-v8-c13-004',
          ar: '﴿فَأَخَذَتْهُمُ الرَّجْفَةُ فَأَصْبَحُوا فِي دَارِهِمْ جَاثِمِينَ﴾',
          en: '"So the earthquake seized them, and they lay lifeless in their homes come morning.',
          tokens: [
            { surface: 'فَأَخَذَتْهُمُ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+perf.3fs+3mp', gloss: 'to seize, take; so seized them' },
            { surface: 'الرَّجْفَةُ', lemma: 'رَجْفَة', pos: 'noun', features: 'def.nom', root: 'ر ج ف', gloss: 'the earthquake, violent tremor' },
            { surface: 'فَأَصْبَحُوا', lemma: 'أَصْبَحَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to become, wake to find oneself; and became' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'دَارِهِمْ', lemma: 'دَار', pos: 'noun', features: 'gen+3mp', gloss: 'their home' },
            { surface: 'جَاثِمِينَ', lemma: 'جَاثِم', pos: 'noun', features: 'pl.acc', root: 'ج ث م', gloss: 'fallen still, lifeless' },
          ],
        },
        {
          id: 'qs-v8-c13-005',
          ar: '﴿الَّذِينَ كَذَّبُوا شُعَيْبًا كَأَن لَّمْ يَغْنَوْا فِيهَا﴾',
          en: 'Those who denied Shuʿayb -- it was as if they had never dwelt there.',
          tokens: [
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'those who' },
            { surface: 'كَذَّبُوا', lemma: 'كَذَّبَ', pos: 'verb', features: 'perf.3mp', gloss: 'to deny, call a liar; denied' },
            { surface: 'شُعَيْبًا', lemma: 'شُعَيْب', pos: 'proper', features: 'acc', gloss: 'Shuʿayb' },
            { surface: 'كَأَن', lemma: 'كَأَنَّ', pos: 'part', features: 'part', gloss: 'as if' },
            { surface: 'لَّمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not, never' },
            { surface: 'يَغْنَوْا', lemma: 'غَنِيَ', pos: 'verb', features: 'impf.3mp', root: 'غ ن ي', gloss: 'to dwell, live; had dwelt' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it, there' },
          ],
        },
        {
          id: 'qs-v8-c13-006',
          ar: '﴿الَّذِينَ كَذَّبُوا شُعَيْبًا كَانُوا هُمُ الْخَاسِرِينَ﴾.',
          en: 'Those who denied Shuʿayb -- they were the very ones who lost."',
          tokens: [
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'those who' },
            { surface: 'كَذَّبُوا', lemma: 'كَذَّبَ', pos: 'verb', features: 'perf.3mp', gloss: 'to deny, call a liar; denied' },
            { surface: 'شُعَيْبًا', lemma: 'شُعَيْب', pos: 'proper', features: 'acc', gloss: 'Shuʿayb' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', gloss: 'to be; were' },
            { surface: 'هُمُ', lemma: 'هُمْ', pos: 'noun', features: '3mp', gloss: 'they' },
            { surface: 'الْخَاسِرِينَ', lemma: 'خَاسِر', pos: 'noun', features: 'pl.def.acc', gloss: 'the losers' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا أَصَابَ قَوْمَ شُعَيْبٍ بَعْدَ تَكْذِيبِهِمْ لَهُ؟',
          options: ['أَخَذَتْهُمُ الرَّجْفَةُ فَأَصْبَحُوا فِي دَارِهِمْ جَاثِمِينَ', 'هَاجَرُوا إِلَى بِلَادٍ أُخْرَى', 'عَادُوا إِلَى دِينِ شُعَيْبٍ'],
          answer: 0,
          qEn: "What befell Shuʿayb's people after they denied him?",
          optionsEn: ['The earthquake seized them, and they lay lifeless in their homes', 'They emigrated to another land', 'They returned to Shuʿayb\'s religion'],
        },
        {
          q: 'مَاذَا وَصَفَتِ الآيَةُ حَالَ دِيَارِهِمْ بَعْدَ الرَّجْفَةِ؟',
          options: ['كَأَنَّهُمْ لَمْ يَعِيشُوا فِيهَا قَطُّ', 'كَأَنَّهَا مَازَالَتْ عَامِرَةً بِأَهْلِهَا', 'كَأَنَّ الرَّجْفَةَ لَمْ تُصِبْهَا'],
          answer: 0,
          qEn: "How did the verse describe their homes after the earthquake?",
          optionsEn: ['As if they had never lived there at all', 'As if they were still full of their people', 'As if the earthquake had never struck them'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَأَخَذَتْهُمُ',
        post: 'فَأَصْبَحُوا فِي دَارِهِمْ جَاثِمِينَ.',
        en: 'So the earthquake seized them, and they lay lifeless in their homes.',
        options: ['الرَّجْفَةُ', 'الرَّجْفَةَ', 'الرَّجْفَةِ', 'رَجْفَةٌ'],
        answer: 0,
        rationales: [
          'Definite nominative -- the subject of فَأَخَذَتْهُمُ, matching the printed فَأَخَذَتْهُمُ الرَّجْفَةُ.',
          'Accusative -- wrong case; the subject of a verb is nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Indefinite -- wrong; the earthquake is a known, specific event here, so it takes the definite article.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَأَصْبَحُوا فِي دَارِهِمْ',
        post: '.',
        en: 'and they lay lifeless in their homes.',
        options: ['جَاثِمِينَ', 'جَاثِمُونَ', 'جَاثِمٌ', 'جُثُومًا'],
        answer: 0,
        rationales: [
          'Plural accusative -- the predicate of أَصْبَحُوا, which takes the accusative, matching the printed جَاثِمِينَ.',
          'Plural nominative -- wrong case; the predicate of أَصْبَحَ is accusative, not nominative.',
          'Singular -- wrong number; the subject هُمْ (they) is plural.',
          'Verbal noun ("lying still") -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'الَّذِينَ كَذَّبُوا شُعَيْبًا كَانُوا هُمُ',
        post: '.',
        en: 'Those who denied Shuʿayb -- they were the very ones who lost.',
        options: ['الْخَاسِرِينَ', 'الْخَاسِرُونَ', 'خَاسِرٌ', 'خُسْرَانًا'],
        answer: 0,
        rationales: [
          'Plural accusative -- the predicate of كَانُوا, which takes the accusative, matching the printed text.',
          'Plural nominative -- wrong case; the predicate of كَانَ is accusative, not nominative.',
          'Indefinite singular -- wrong number; the subject الَّذِينَ (those who) is plural.',
          'Verbal noun ("loss") -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُكَذِّبُ الرَّجُلُ نَبِيَّهُ',
        pre: '',
        post: 'نَبِيَّهُ',
        targetPerson: 'أَنتُمْ',
        targetEn: 'you all (m)',
        options: ['تُكَذِّبُونَ', 'يُكَذِّبُ', 'أُكَذِّبُ', 'نُكَذِّبُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural imperfect -- matches أَنتُمْ.',
          '3rd masculine singular -- the base form, not shifted to "you all."',
          '1st singular -- wrong person; the target is "you all," not "I."',
          '1st plural -- wrong person; the target is "you all," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَكْفُرُ الرَّجُلُ بِالنِّعْمَةِ',
        pre: '',
        post: 'بِالنِّعْمَةِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَكْفُرُونَ', 'يَكْفُرُ', 'تَكْفُرُ', 'نَكْفُرُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong person and gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَغْنَى الرَّجُلُ فِي الدَّارِ',
        pre: '',
        post: 'فِي الدَّارِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَغْنَى', 'يَغْنَى', 'تَغْنَى', 'نَغْنَى'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is "I," not "we."',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 17 -- سِيَاحَةٌ وَدَعْوَةٌ. Printed page 262
// only -- the whole chapter sits between ch16's closing line (the Aal-Imran
// 3:53 quote) and ch18's heading الْحَوَارِيُّونَ يَطْلُبُونَ مَائِدَةً مِنَ
// السَّمَاءِ further down the same page. Transcribed by hand from the scan
// (vision OCR, 150dpi render) against ../CHAPTER-FORMAT.md.
//
// A single dense sentence (in the printed text, one long run of coordinated
// clauses) describing how Isa spent most of his time travelling from place
// to place, calling the Israelites to Allah and guiding their "stray sheep"
// back to their Lord -- and bearing the resulting hardship, hunger, and
// privation patiently and gratefully.
//
// Grammar / lexical notes:
//   -- The printed sentence has almost no internal commas past its first
//      two clauses; house convention (ch14/ch16) is to split a long printed
//      run at its natural وَ-coordinated verb-clause boundaries even where
//      no comma is printed, which is what sentences 003-005 and 007-010 do.
//   -- خِرَافَهُمُ الضَّالَّةَ ("their stray sheep") is figurative for
//      wayward Israelites; خَرُوف (new) is tagged as the ordinary literal
//      noun and glossed with the figurative sense noted.
//   -- ضَالّ (new) is the active participle of the already-taught verb
//      ضَلَّ (ضَلَالَة/ضَلَال already known as nouns), tagged as its own
//      lemma per the participle-as-distinct-lemma convention (cf. صَابِر
//      below, already known, from صَبَرَ).
//   -- اِنْتِقَال (new, verbal noun "moving from place to place") is
//      distinct from the already-taught verb اِنْتَقَلَ, per the noun-beside-
//      verb convention.
//   -- Shared lexicon check (known-lemmas.txt): كَانَ، سَيِّد، عِيسَى (this
//      volume's own chapter 16, mine)، أَكْثَر، فِي، مِنْ، إِلَى، مَكَان، دَعَا،
//      إِسْرَائِيل (new here -- see below)، اللَّه، هَدَى، رَبّ، اِتَّفَقَ، لِ،
//      هَذِهِ، رَخَاء، ذَلِكَ، صَابِر، قَبِلَ، هَذَا، صَبَرَ، عَلَى، بِ، مَعَ
//      are all already taught (عِيسَى per this volume's ch16, transcribed by
//      me) and are NOT re-listed in newWords here.
//   -- إِسْرَائِيل (new) is this volume's proper noun for the Israelites;
//      not in the cross-book known-lemmas list, tagged new here as my
//      first use of it (per the brief's note on this volume's core proper
//      nouns).
//
// 18 new words -- this chapter is unusually vocabulary-dense, matching the
// register shift the brief warns about (classical expository prose, not
// simple narrative): قَضَى، وَقْت، سِيَاحَة، اِنْتِقَال، إِسْرَائِيل، خَرُوف،
// ضَالّ، جَوْلَة، رِحْلَة، يُسْر، عُسْر، ضِيق، تَحَمَّلَ، شَاكِر، جُوع، اِجْتَزَأَ،
// سَدَّ، رَمَق.
//
// No page footnotes (book_note) on this page for this chapter.
export const CHAPTER = {
  id: 'ch17',
  title: { ar: 'سِيَاحَةٌ وَدَعْوَةٌ', en: 'Travel and Preaching' },
  newWords: [
    'وَقْت', 'سِيَاحَة', 'اِنْتِقَال', 'خَرُوف', 'ضَالّ', 'جَوْلَة',
    'رِحْلَة', 'يُسْر', 'عُسْر', 'ضِيق', 'تَحَمَّلَ', 'شَاكِر',
    'جُوع', 'اِجْتَزَأَ', 'رَمَق',
  ],
  lemmas: {
    قَضَى: { gloss: 'to spend (time); to fulfill, decide' },
    وَقْت: { gloss: 'time' },
    سِيَاحَة: { gloss: 'travel, wandering' },
    اِنْتِقَال: { gloss: 'moving, relocating' },
    إِسْرَائِيل: { gloss: 'Israel (Banu Isra\'il, the Israelites)' },
    خَرُوف: { gloss: 'sheep' },
    ضَالّ: { gloss: 'stray, astray' },
    جَوْلَة: { gloss: 'tour, circuit' },
    رِحْلَة: { gloss: 'journey' },
    يُسْر: { gloss: 'ease' },
    عُسْر: { gloss: 'hardship, difficulty' },
    ضِيق: { gloss: 'constriction, hardship' },
    تَحَمَّلَ: { gloss: 'to bear, endure' },
    شَاكِر: { gloss: 'thankful, grateful' },
    جُوع: { gloss: 'hunger' },
    اِجْتَزَأَ: { gloss: 'to make do with, be content with' },
    سَدَّ: { gloss: 'to fill, satisfy, stave off' },
    رَمَق: { gloss: 'the last breath of life; bare sustenance' },
  },
  paragraphs: [
    {
      en: "Our master Isa used to spend most of his time in travel, moving from place to place, calling the Israelites to Allah and guiding their stray sheep back to their Lord and Master. In these tours and journeys he met with ease and hardship, constriction and comfort by turns -- and he bore that patiently, accepted it gratefully, endured hunger, and made do with whatever would keep him alive.",
      sentences: [
        {
          id: 'qs-v12-c17-001',
          ar: 'وَكَانَ سَيِّدُنَا عِيسَى يَقْضِي أَكْثَرَ أَوْقَاتِهِ فِي السِّيَاحَةِ،',
          en: 'Our master Isa used to spend most of his time in travel,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'سَيِّدُنَا', lemma: 'سَيِّد', pos: 'noun', features: 'nom+1p', gloss: 'our master' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'nom', gloss: 'Isa (Jesus)' },
            { surface: 'يَقْضِي', lemma: 'قَضَى', pos: 'verb', features: 'impf.3ms', gloss: 'to spend (time); spends' },
            { surface: 'أَكْثَرَ', lemma: 'أَكْثَر', pos: 'noun', features: 'acc.constr', gloss: 'most of' },
            { surface: 'أَوْقَاتِهِ', lemma: 'وَقْت', pos: 'noun', features: 'pl.gen+3ms', root: 'و ق ت', gloss: 'his time(s)' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السِّيَاحَةِ', lemma: 'سِيَاحَة', pos: 'noun', features: 'def.gen', root: 'س ي ح', gloss: 'travel, wandering' },
          ],
        },
        {
          id: 'qs-v12-c17-002',
          ar: 'وَالِانْتِقَالِ مِنْ مَكَانٍ إِلَى مَكَانٍ،',
          en: 'and moving from place to place,',
          tokens: [
            { surface: 'وَالِانْتِقَالِ', lemma: 'اِنْتِقَال', pos: 'noun', features: 'conj+def.gen', root: 'ن ق ل', gloss: 'moving, relocating' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'مَكَانٍ', lemma: 'مَكَان', pos: 'noun', features: 'indef.gen', gloss: 'a place' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مَكَانٍ', lemma: 'مَكَان', pos: 'noun', features: 'indef.gen', gloss: 'a place' },
          ],
        },
        {
          id: 'qs-v12-c17-003',
          ar: 'يَدْعُو بَنِي إِسْرَائِيلَ إِلَى اللَّهِ',
          en: 'calling the Israelites to Allah',
          tokens: [
            { surface: 'يَدْعُو', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms', gloss: 'to call, invite; calling' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'constr.pl', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v12-c17-004',
          ar: 'وَيَهْدِي خِرَافَهُمُ الضَّالَّةَ إِلَى رَبِّهَا وَسَيِّدِهَا',
          en: 'and guiding their stray sheep back to their Lord and Master,',
          tokens: [
            { surface: 'وَيَهْدِي', lemma: 'هَدَى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to guide; and guiding' },
            { surface: 'خِرَافَهُمُ', lemma: 'خَرُوف', pos: 'noun', features: 'pl.acc+3mp', root: 'خ ر ف', gloss: 'their sheep' },
            { surface: 'الضَّالَّةَ', lemma: 'ضَالّ', pos: 'adj', features: 'def.acc.f', root: 'ض ل ل', gloss: 'the stray, straying' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'رَبِّهَا', lemma: 'رَبّ', pos: 'noun', features: 'gen+3fs', gloss: 'its Lord' },
            { surface: 'وَسَيِّدِهَا', lemma: 'سَيِّد', pos: 'noun', features: 'conj+gen+3fs', gloss: 'and its master' },
          ],
        },
        {
          id: 'qs-v12-c17-005',
          ar: 'وَيَتَّفِقُ لَهُ فِي هَذِهِ الْجَوْلَاتِ وَالرَّحَلَاتِ الْيُسْرُ وَالْعُسْرُ،',
          en: 'and in these tours and journeys he met with ease and hardship,',
          tokens: [
            { surface: 'وَيَتَّفِقُ', lemma: 'اِتَّفَقَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to occur, happen to; and there occurs' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الْجَوْلَاتِ', lemma: 'جَوْلَة', pos: 'noun', features: 'def.gen.pl', root: 'ج و ل', gloss: 'the tours' },
            { surface: 'وَالرَّحَلَاتِ', lemma: 'رِحْلَة', pos: 'noun', features: 'conj+def.gen.pl', root: 'ر ح ل', gloss: 'and the journeys' },
            { surface: 'الْيُسْرُ', lemma: 'يُسْر', pos: 'noun', features: 'def.nom', root: 'ي س ر', gloss: 'ease' },
            { surface: 'وَالْعُسْرُ', lemma: 'عُسْر', pos: 'noun', features: 'conj+def.nom', root: 'ع س ر', gloss: 'and hardship' },
          ],
        },
        {
          id: 'qs-v12-c17-006',
          ar: 'وَالضِّيقُ وَالرَّخَاءُ،',
          en: 'constriction and comfort, by turns,',
          tokens: [
            { surface: 'وَالضِّيقُ', lemma: 'ضِيق', pos: 'noun', features: 'conj+def.nom', root: 'ض ي ق', gloss: 'constriction, hardship' },
            { surface: 'وَالرَّخَاءُ', lemma: 'رَخَاء', pos: 'noun', features: 'conj+def.nom', gloss: 'ease, comfort' },
          ],
        },
        {
          id: 'qs-v12-c17-007',
          ar: 'وَيَتَحَمَّلُ ذَلِكَ صَابِراً،',
          en: 'and he bore that patiently,',
          tokens: [
            { surface: 'وَيَتَحَمَّلُ', lemma: 'تَحَمَّلَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ح م ل', gloss: 'to bear, endure; and he bears' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'صَابِراً', lemma: 'صَابِر', pos: 'adj', features: 'indef.acc', gloss: 'patiently, as one who bears patiently' },
          ],
        },
        {
          id: 'qs-v12-c17-008',
          ar: 'وَيَقْبَلُ هَذَا شَاكِراً،',
          en: 'and accepted this gratefully,',
          tokens: [
            { surface: 'وَيَقْبَلُ', lemma: 'قَبِلَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to accept; and he accepts' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'شَاكِراً', lemma: 'شَاكِر', pos: 'adj', features: 'indef.acc', root: 'ش ك ر', gloss: 'gratefully, as one who is thankful' },
          ],
        },
        {
          id: 'qs-v12-c17-009',
          ar: 'وَيَصْبِرُ عَلَى الْجُوعِ،',
          en: 'and endured hunger,',
          tokens: [
            { surface: 'وَيَصْبِرُ', lemma: 'صَبَرَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to be patient; and he is patient' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'with, over' },
            { surface: 'الْجُوعِ', lemma: 'جُوع', pos: 'noun', features: 'def.gen', root: 'ج و ع', gloss: 'hunger' },
          ],
        },
        {
          id: 'qs-v12-c17-010',
          ar: 'وَيَجْتَزِئُ بِمَا يَسُدُّ الرَّمَقَ.',
          en: 'and made do with whatever would keep him alive.',
          tokens: [
            { surface: 'وَيَجْتَزِئُ', lemma: 'اِجْتَزَأَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ج ز أ', gloss: 'to make do with; and he makes do' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'with what' },
            { surface: 'يَسُدُّ', lemma: 'سَدَّ', pos: 'verb', features: 'impf.3ms', root: 'س د د', gloss: 'to fill, stave off; keeps' },
            { surface: 'الرَّمَقَ', lemma: 'رَمَق', pos: 'noun', features: 'def.acc', root: 'ر م ق', gloss: 'the last breath of life, bare sustenance' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ يَقْضِي سَيِّدُنَا عِيسَى أَكْثَرَ وَقْتِهِ؟',
          options: ['فِي السِّيَاحَةِ وَالِانْتِقَالِ مِنْ مَكَانٍ إِلَى مَكَانٍ يَدْعُو بَنِي إِسْرَائِيلَ إِلَى اللَّهِ', 'فِي بَيْتِهِ لَا يُغَادِرُهُ', 'فِي التِّجَارَةِ وَجَمْعِ الْمَالِ'],
          answer: 0,
          qEn: 'How did our master Isa spend most of his time?',
          optionsEn: ['In travel, moving from place to place, calling the Israelites to Allah', 'In his house, never leaving it', 'In trade and accumulating wealth'],
        },
        {
          q: 'كَيْفَ كَانَ يَتَحَمَّلُ عِيسَى الْيُسْرَ وَالْعُسْرَ فِي رَحَلَاتِهِ؟',
          options: ['يَتَحَمَّلُ ذَلِكَ صَابِراً وَيَقْبَلُهُ شَاكِراً', 'يَشْكُو ذَلِكَ لِلنَّاسِ دَائِماً', 'يَتْرُكُ السِّيَاحَةَ إِذَا اشْتَدَّ الْعُسْرُ'],
          answer: 0,
          qEn: 'How did Isa bear the ease and hardship of his journeys?',
          optionsEn: ['He bore it patiently and accepted it gratefully', 'He constantly complained to people about it', 'He gave up travel whenever hardship intensified'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ سَيِّدُنَا عِيسَى يَقْضِي أَكْثَرَ أَوْقَاتِهِ فِي',
        post: '.',
        en: 'Our master Isa used to spend most of his time in travel.',
        options: ['السِّيَاحَةِ', 'السِّيَاحَةَ', 'السِّيَاحَةُ', 'سِيَاحَة'],
        answer: 0,
        rationales: [
          'Genitive, definite -- object of the preposition فِي, matching the taught pattern.',
          'Accusative -- wrong case; a preposition requires the genitive.',
          'Nominative -- wrong case for the same reason.',
          'Indefinite -- wrong; the definite noun is meant here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَيَتَحَمَّلُ ذَلِكَ',
        post: '، وَيَقْبَلُ هَذَا شَاكِراً.',
        en: 'and he bore that patiently, and accepted this gratefully.',
        options: ['صَابِراً', 'صَابِرٌ', 'صَابِرٍ', 'صَبَرَ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- ḥāl (circumstantial state), matching the taught pattern.',
          'Nominative -- wrong case; a ḥāl is accusative.',
          'Genitive -- wrong case for the same reason.',
          'Verb -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَيَجْتَزِئُ بِمَا',
        post: 'الرَّمَقَ.',
        en: 'and made do with whatever would keep him alive.',
        options: ['يَسُدُّ', 'سَدَّ', 'سُدَّ', 'يَسُدَّ'],
        answer: 0,
        rationales: [
          'Indicative imperfect -- describing his ongoing habit, matching the taught pattern.',
          'Perfect -- wrong tense; a recurring habit is meant, not a single past event.',
          'Passive -- wrong voice; the sustenance itself does the "filling", it is not "filled".',
          'Subjunctive -- nothing here requires the subjunctive.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَصْبِرُ الرَّجُلُ عَلَى الْجُوعِ',
        pre: '',
        post: 'عَلَى الْجُوعِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَصْبِرُ', 'يَصْبِرُ', 'تَصْبِرُ', 'نَصْبِرُ'],
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
        base: 'يَصْبِرُ الرَّجُلُ عَلَى الْجُوعِ',
        pre: '',
        post: 'عَلَى الْجُوعِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَصْبِرُونَ', 'يَصْبِرُ', 'تَصْبِرُ', 'نَصْبِرُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَصْبِرُ الرَّجُلُ عَلَى الْجُوعِ',
        pre: '',
        post: 'عَلَى الْجُوعِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَصْبِرُ', 'يَصْبِرُ', 'أَصْبِرُ', 'نَصْبِرُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

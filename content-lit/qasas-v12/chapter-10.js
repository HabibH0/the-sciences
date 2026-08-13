// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 10 -- دَعْوَتُهُ إِلَى الدِّينِ وَتَكْذِيبُهُ
// الْيَهُودَ. Printed page 257 only -- the whole chapter sits between its
// own heading and ch11's heading الْيَهُودُ يَنْصُبُونَ لَهُ الْحَرْبَ, both on the
// same page. Transcribed by hand from the scan (vision OCR, 150dpi
// render) against ../CHAPTER-FORMAT.md.
//
// A single-paragraph pivot chapter: despite the miracles of chapter 9,
// the Jews denied much of what they had imagined about and exaggerated
// regarding religion, inverting Allah's rulings (forbidding what He had
// permitted, permitting what He had forbidden). So the Messiah set about
// calling them back to religion's true spirit and essence: love for Allah
// above every other love, mercy and respect for humanity, compassion for
// the poor, and pure, unadulterated monotheism -- rejecting everything
// that pre-Islamic-style custom and false belief had allowed to creep
// into the prophets' religion. This sets up chapter 11's account of the
// Jews moving from denial to open hostility.
//
// Grammar / lexical notes:
//   -- Per house convention (ch6/7/8/9 in this same chapter set) the one
//      long printed sentence is split at its natural clause/comma
//      boundaries into short sentences -- no rewording, same printed
//      order.
//   -- وَالْحُبُّ لِلَّهِ حُبًّا يَغْلِبُ عَلَى كُلِّ حُبٍّ (sentence 005) is printed
//      with الْحُبُّ in the nominative, not the genitive one would expect
//      if it simply continued the "يَدْعُوهُمْ إِلَى..." list governing the
//      surrounding clauses. Read as intended: it is a short independent
//      nominal sentence ("and love for Allah is a love that overcomes
//      every other love") inserted into the list, and the following
//      clause (سَنَة 006, وَالرَّحْمَةِ عَلَى...) resumes the genitive list
//      after it. Transcribed exactly as printed rather than "corrected"
//      to genitive.
//   -- لِلَّهِ (005) fuses لِ directly onto the proper noun اللَّه, matching
//      the established prep+full-noun fusion convention already used for
//      بِنُوحٍ/بِاللَّهِ elsewhere in this corpus.
//   -- حَرَّمَ/أَحَلَّ (002, 003) are tagged as distinct form-II/form-IV
//      lemmas (both new) -- "to forbid" vs "to permit," a deliberate
//      paired opposition in the print (they forbade what Allah permitted,
//      and permitted what Allah forbade).
//   -- عَقَائِدَ (009) shows a fatḥa ending though it is genitive, because
//      it is a diptote broken plural (منتهى الجموع pattern) governed by
//      مِنْ in the same coordinated list as عَادَاتٍ جَاهِلِيَّةٍ -- tagged
//      'indef.gen.pl' despite the visible fatḥa, matching how مِصْرَ (ch6)
//      was similarly handled for a diptote singular.
//   -- Shared lexicon check (known from vols 1-3 / Qirā'ah, per
//      known-lemmas.txt): قَامَ، حَقِيقَة، حُبّ، غَلَبَ، رَحْمَة، تَوْحِيد، خَالِص، دِين،
//      دَعَا، دَخَلَ، نَبِيّ -- are all already taught and NOT re-listed in
//      newWords here. يَهُود (ch8), رُوح (ch9), عَادَة and جَاهِلِيّ (ch6), and
//      فَقِير (ch8) were already introduced earlier in this same chapter set
//      and are likewise not re-listed. Function words/particles and اللَّه
//      are treated as permanent background vocabulary as in earlier
//      chapters.
//
// 11 new words (كَذَّبَ، تَخَيَّلَ، غَلَا، حَرَّمَ، أَحَلَّ، لُبَاب، أَصْل، إِنْسَانِيَّة،
// اِحْتِرَام، مُوَاسَاة، رَفْض، بَاطِل) -- 12 counting all listed; see the array
// below for the exact set.
//
// No page footnotes (book_note) on page 257 for this chapter.
export const CHAPTER = {
  id: 'ch10',
  title: { ar: 'دَعْوَتُهُ إِلَى الدِّينِ وَتَكْذِيبُهُ الْيَهُودَ', en: "His Call to Religion and the Jews' Denial" },
  newWords: [
    'كَذَّبَ', 'تَخَيَّلَ', 'حَرَّمَ', 'أَحَلَّ', 'رَفْض', 'بَاطِل',
  ],
  lemmas: {
    كَذَّبَ: { gloss: 'to deny, call false' },
    تَخَيَّلَ: { gloss: 'to imagine, fancy' },
    غَلَا: { gloss: 'to exceed bounds, go to extremes' },
    حَرَّمَ: { gloss: 'to forbid, prohibit' },
    أَحَلَّ: { gloss: 'to permit, make lawful' },
    لُبَاب: { gloss: 'essence, core, kernel' },
    أَصْل: { gloss: 'root, origin, foundation' },
    إِنْسَانِيَّة: { gloss: 'humanity, mankind' },
    اِحْتِرَام: { gloss: 'respect' },
    مُوَاسَاة: { gloss: 'compassion, solidarity, comforting' },
    رَفْض: { gloss: 'rejection, refusal' },
    بَاطِل: { gloss: 'false, null, void' },
  },
  paragraphs: [
    {
      en: "The Jews denied much of what they had imagined about religion and gone to excess in, forbidding what Allah had made lawful and permitting what Allah had made unlawful. So he set about calling them to the spirit of religion, its essence, its root, and its true reality -- and love for Allah is a love that overcomes every other love -- and to mercy toward humanity and respect for it, and compassion for the poor; and he called them to pure, unadulterated monotheism, and to rejecting everything that had crept into the prophets' religion by way of pagan customs and false beliefs.",
      sentences: [
        {
          id: 'qs-v12-c10-001',
          ar: 'وَكَذَّبَ الْيَهُودُ فِي كَثِيرٍ مِمَّا تَخَيَّلُوهُ وَغَلَوْا فِيهِ،',
          en: 'The Jews denied much of what they had imagined about and gone to excess in,',
          tokens: [
            { surface: 'وَكَذَّبَ', lemma: 'كَذَّبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك ذ ب', gloss: 'to deny, call false; and denied' },
            { surface: 'الْيَهُودُ', lemma: 'يَهُود', pos: 'noun', features: 'def.nom.pl', gloss: 'the Jews' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, regarding' },
            { surface: 'كَثِيرٍ', lemma: 'كَثِير', pos: 'noun', features: 'indef.gen', gloss: 'much (of)' },
            { surface: 'مِمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of what' },
            { surface: 'تَخَيَّلُوهُ', lemma: 'تَخَيَّلَ', pos: 'verb', features: 'perf.3mp+3ms', root: 'خ ي ل', gloss: 'to imagine, fancy; they imagined' },
            { surface: 'وَغَلَوْا', lemma: 'غَلَا', pos: 'verb', features: 'conj+perf.3mp', root: 'غ ل و', gloss: 'to go to excess; and exaggerated' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in it' },
          ],
        },
        {
          id: 'qs-v12-c10-002',
          ar: 'وَحَرَّمُوا مَا أَحَلَّهُ اللَّهُ،',
          en: 'forbidding what Allah had made lawful,',
          tokens: [
            { surface: 'وَحَرَّمُوا', lemma: 'حَرَّمَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ح ر م', gloss: 'to forbid; and they forbade' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'أَحَلَّهُ', lemma: 'أَحَلَّ', pos: 'verb', features: 'perf.3ms+3ms', root: 'ح ل ل', gloss: 'to permit; had permitted it' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v12-c10-003',
          ar: 'وَأَحَلُّوا مَا حَرَّمَهُ اللَّهُ،',
          en: 'and permitting what Allah had made unlawful,',
          tokens: [
            { surface: 'وَأَحَلُّوا', lemma: 'أَحَلَّ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to permit; and they permitted' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'حَرَّمَهُ', lemma: 'حَرَّمَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to forbid; had forbidden it' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v12-c10-004',
          ar: 'فَقَامَ يَدْعُوهُمْ إِلَى رُوحِ الدِّينِ وَلُبَابِهِ وَأَصْلِهِ وَحَقِيقَتِهِ،',
          en: 'So he set about calling them to the spirit of religion, its essence, its root, and its true reality,',
          tokens: [
            { surface: 'فَقَامَ', lemma: 'قَامَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to rise, set about; so he set about' },
            { surface: 'يَدْعُوهُمْ', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to call; calling them' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'رُوحِ', lemma: 'رُوح', pos: 'noun', features: 'gen.constr', gloss: 'the spirit of' },
            { surface: 'الدِّينِ', lemma: 'دِين', pos: 'noun', features: 'def.gen', gloss: 'religion' },
            { surface: 'وَلُبَابِهِ', lemma: 'لُبَاب', pos: 'noun', features: 'conj+gen+3ms', root: 'ل ب ب', gloss: 'and its essence' },
            { surface: 'وَأَصْلِهِ', lemma: 'أَصْل', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and its root' },
            { surface: 'وَحَقِيقَتِهِ', lemma: 'حَقِيقَة', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and its true reality' },
          ],
        },
        {
          id: 'qs-v12-c10-005',
          ar: 'وَالْحُبُّ لِلَّهِ حُبًّا يَغْلِبُ عَلَى كُلِّ حُبٍّ،',
          en: 'and love for Allah is a love that overcomes every other love,',
          tokens: [
            { surface: 'وَالْحُبُّ', lemma: 'حُبّ', pos: 'noun', features: 'conj+def.nom', root: 'ح ب ب', gloss: 'and love' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'for Allah' },
            { surface: 'حُبًّا', lemma: 'حُبّ', pos: 'noun', features: 'indef.acc', gloss: 'a love' },
            { surface: 'يَغْلِبُ', lemma: 'غَلَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to overcome, prevail; that overcomes' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'حُبٍّ', lemma: 'حُبّ', pos: 'noun', features: 'indef.gen', gloss: 'love' },
          ],
        },
        {
          id: 'qs-v12-c10-006',
          ar: 'وَالرَّحْمَةِ عَلَى الْإِنْسَانِيَّةِ وَاحْتِرَامِهَا وَالْمُوَاسَاةِ لِلْفُقَرَاءِ،',
          en: 'and to mercy toward humanity, respect for it, and compassion for the poor,',
          tokens: [
            { surface: 'وَالرَّحْمَةِ', lemma: 'رَحْمَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and mercy' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'toward' },
            { surface: 'الْإِنْسَانِيَّةِ', lemma: 'إِنْسَانِيَّة', pos: 'noun', features: 'def.gen', root: 'أ ن س', gloss: 'humanity, mankind' },
            { surface: 'وَاحْتِرَامِهَا', lemma: 'اِحْتِرَام', pos: 'noun', features: 'conj+gen+3fs', root: 'ح ر م', gloss: 'and respect for it' },
            { surface: 'وَالْمُوَاسَاةِ', lemma: 'مُوَاسَاة', pos: 'noun', features: 'conj+def.gen', root: 'أ س و', gloss: 'and compassion' },
            { surface: 'لِلْفُقَرَاءِ', lemma: 'فَقِير', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'for the poor' },
          ],
        },
        {
          id: 'qs-v12-c10-007',
          ar: 'وَيَدْعُوهُمْ إِلَى التَّوْحِيدِ الْخَالِصِ،',
          en: 'and he called them to pure, unadulterated monotheism,',
          tokens: [
            { surface: 'وَيَدْعُوهُمْ', lemma: 'دَعَا', pos: 'verb', features: 'conj+impf.3ms+3mp', gloss: 'to call; and calling them' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'التَّوْحِيدِ', lemma: 'تَوْحِيد', pos: 'noun', features: 'def.gen', gloss: 'monotheism' },
            { surface: 'الْخَالِصِ', lemma: 'خَالِص', pos: 'adj', features: 'def.gen', gloss: 'pure, sincere' },
          ],
        },
        {
          id: 'qs-v12-c10-008',
          ar: 'وَرَفْضِ كُلِّ مَا دَخَلَ عَلَى دِينِ الْأَنْبِيَاءِ مِنْ عَادَاتٍ جَاهِلِيَّةٍ،',
          en: "and to rejecting everything that had crept into the prophets' religion by way of pagan customs,",
          tokens: [
            { surface: 'وَرَفْضِ', lemma: 'رَفْض', pos: 'noun', features: 'conj+gen.constr', root: 'ر ف ض', gloss: 'and rejecting' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'everything (that)' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'دَخَلَ', lemma: 'دَخَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to enter; had entered' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'دِينِ', lemma: 'دِين', pos: 'noun', features: 'gen.constr', gloss: 'the religion of' },
            { surface: 'الْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'def.gen.pl', gloss: 'the prophets' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'by way of, of' },
            { surface: 'عَادَاتٍ', lemma: 'عَادَة', pos: 'noun', features: 'pl.indef.gen', gloss: 'customs' },
            { surface: 'جَاهِلِيَّةٍ', lemma: 'جَاهِلِيّ', pos: 'adj', features: 'indef.gen.f', gloss: 'pagan, of pre-Islamic ignorance' },
          ],
        },
        {
          id: 'qs-v12-c10-009',
          ar: 'وَعَقَائِدَ بَاطِلَةٍ.',
          en: 'and false beliefs.',
          tokens: [
            { surface: 'وَعَقَائِدَ', lemma: 'عَقِيدَة', pos: 'noun', features: 'conj+indef.gen.pl', gloss: 'and beliefs' },
            { surface: 'بَاطِلَةٍ', lemma: 'بَاطِل', pos: 'adj', features: 'indef.gen.f', root: 'ب ط ل', gloss: 'false, null' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ الْيَهُودُ بِمَا أَحَلَّهُ اللَّهُ وَمَا حَرَّمَهُ؟',
          options: ['حَرَّمُوا مَا أَحَلَّهُ اللَّهُ وَأَحَلُّوا مَا حَرَّمَهُ', 'اتَّبَعُوا حُكْمَ اللَّهِ بِدِقَّةٍ', 'لَمْ يَهْتَمُّوا بِذَلِكَ أَصْلًا'],
          answer: 0,
          qEn: 'What did the Jews do with what Allah had made lawful and unlawful?',
          optionsEn: ['They forbade what Allah had permitted and permitted what He had forbidden', "They followed Allah's ruling precisely", 'They paid no attention to it at all'],
        },
        {
          q: 'إِلَامَ دَعَا الْمَسِيحُ الْيَهُودَ؟',
          options: ['إِلَى رُوحِ الدِّينِ وَحَقِيقَتِهِ وَالتَّوْحِيدِ الْخَالِصِ', 'إِلَى تَرْكِ الدِّينِ كُلِّيًّا', 'إِلَى الِانْتِقَامِ مِنَ الرُّومَانِ'],
          answer: 0,
          qEn: 'What did the Messiah call the Jews to?',
          optionsEn: ['To the spirit and true reality of religion and to pure monotheism', 'To abandoning religion entirely', 'To taking revenge on the Romans'],
        },
        {
          q: 'مَاذَا رَفَضَ الْمَسِيحُ فِي دَعْوَتِهِ؟',
          options: ['كُلَّ مَا دَخَلَ عَلَى دِينِ الْأَنْبِيَاءِ مِنْ عَادَاتٍ جَاهِلِيَّةٍ وَعَقَائِدَ بَاطِلَةٍ', 'الِاهْتِمَامَ بِالْفُقَرَاءِ وَالضُّعَفَاءِ', 'التَّوْحِيدَ الْخَالِصَ'],
          answer: 0,
          qEn: 'What did the Messiah reject in his call?',
          optionsEn: ["Everything that had entered the prophets' religion by way of pagan customs and false beliefs", 'Caring for the poor and weak', 'Pure monotheism'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَحَرَّمُوا مَا',
        post: 'اللَّهُ.',
        en: 'They forbade what Allah had made lawful.',
        options: ['أَحَلَّهُ', 'حَرَّمَهُ', 'يُحِلُّهُ', 'مُحَلِّلٌ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular + object suffix -- "He had permitted it," matching the printed contrast (forbidding what He permitted).',
          'The opposite verb ("He had forbidden it") -- wrong meaning; would make the sentence say the same thing twice instead of contrasting.',
          'Imperfect -- wrong tense; the whole sentence narrates a completed past reversal.',
          'Active participle (noun) -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَحَلُّوا مَا',
        post: 'اللَّهُ.',
        en: 'And they permitted what Allah had made unlawful.',
        options: ['حَرَّمَهُ', 'أَحَلَّهُ', 'يُحَرِّمُهُ', 'مُحَرَّمٌ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular + object suffix -- "He had forbidden it," matching the printed contrast (permitting what He forbade).',
          'The opposite verb ("He had permitted it") -- wrong meaning; would remove the contrast the sentence is making.',
          'Imperfect -- wrong tense; the sentence narrates a completed past reversal.',
          'Passive participle (adjective, "forbidden") -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَقَامَ يَدْعُوهُمْ',
        post: 'رُوحِ الدِّينِ وَلُبَابِهِ.',
        en: 'So he set about calling them to the spirit of religion and its essence.',
        options: ['إِلَى', 'مِنْ', 'عَنْ', 'فِي'],
        answer: 0,
        rationales: [
          'إِلَى -- "to," the preposition that pairs with دَعَا لـ.../دَعَا إِلَى... in the sense "call someone to something," matching the print.',
          'مِنْ ("from") -- wrong preposition; it would reverse the meaning to calling them away from religion.',
          'عَنْ ("about, away from") -- also the wrong sense for a call toward something.',
          'فِي ("in") -- does not fit the verb-preposition pairing used here.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَدْعُوهُمْ إِلَى التَّوْحِيدِ الْخَالِصِ',
        pre: '',
        post: 'إِلَى التَّوْحِيدِ الْخَالِصِ',
        targetPerson: 'أَنَا',
        targetEn: 'I (call them)',
        options: ['أَدْعُوهُمْ', 'يَدْعُوهُمْ', 'تَدْعُوهُمْ', 'نَدْعُوهُمْ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- you.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَدْعُوهُمْ إِلَى التَّوْحِيدِ الْخَالِصِ',
        pre: '',
        post: 'إِلَى التَّوْحِيدِ الْخَالِصِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we (call them)',
        options: ['نَدْعُوهُمْ', 'يَدْعُوهُمْ', 'تَدْعُوهُمْ', 'أَدْعُوهُمْ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- you.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'كَذَّبَ الْيَهُودُ فِي كَثِيرٍ مِمَّا تَخَيَّلُوهُ',
        pre: '',
        post: 'فِي كَثِيرٍ مِمَّا تَخَيَّلُوهُ',
        targetPerson: 'هِيَ',
        targetEn: 'she (denied)',
        options: ['كَذَّبَتِ', 'كَذَّبَ', 'كَذَّبُوا', 'كَذَّبْتَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- the base form, not shifted to "she."',
          '3rd masculine plural -- they (m).',
          '2nd masculine singular -- you.',
        ],
      },
    ],
  },
};

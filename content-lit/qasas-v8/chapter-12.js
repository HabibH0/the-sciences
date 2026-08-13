// قَصَصُ النَّبِيِّينَ, volume 8 «قِصَّةُ سَيِّدِنَا شُعَيْبٍ», chapter 12 --
// بَلْ قَالُوا مِثْلَ مَا قَالَ الأَوَّلُونَ. Printed page 222 only -- this whole
// chapter sits on the same crowded closing page as ch11's tail end, ch13,
// and ch14, right after ch11's closing Qurʾān quote and this chapter's own
// heading box, continuing directly into ch13's heading further down the
// same page. Transcribed by hand from the scan (vision OCR, 200-400dpi
// renders) against ../CHAPTER-FORMAT.md.
//
// None of Shuʿayb's decisive argument moves them. Rather, they fall back
// on the very same lines every rejecting nation before them used against
// its own prophet, quoted word for word from the Qurʾān (ash-Shuʿarāʾ
// 26:185-187): you are only bewitched, you are nothing but a man like us
// and we think you are surely a liar, so bring down a piece of the sky
// upon us if you are telling the truth.
//
// Grammar / lexical notes:
//   -- The Qurʾān quote's three printed lines are each split into two
//      shorter ﴿﴾-wrapped fragments (qs-v8-c12-004 through -007) rather
//      than transcribed as three long lines, per the house convention of
//      splitting at natural clause boundaries (ch3/ch5's header comments)
//      -- each half still reads as a complete accusation on its own.
//   -- مِثْلَمَا (qs-v8-c12-002) is tagged as its own fused lemma, distinct
//      from the plain noun مِثْل it is built on, matching the corpus's
//      existing treatment of fused "-مَا" combining adverbs printed as one
//      word (cf. كَمَا, qasas-v8 ch3's header comment) rather than split
//      back into مِثْلَ + مَا.
//   -- لَمِنَ (qs-v8-c12-005) is لام التوكيد (the emphatic lām) fused onto
//      مِنَ, tagged under the already-taught lemma مِنْ with a leading
//      part+ segment for the fused lām, not a new lemma -- matching how
//      qs-v8-c03-003's فَقَدْ fuses a particle onto قَدْ the same way.
//   -- وَإِنْ (qs-v8-c12-005) here is إِنْ الْمُخَفَّفَةُ مِنَ الثَّقِيلَةِ (إِنْ
//      lightened from إِنَّ), confirmed by the لام الفارقة on the following
//      لَمِنَ -- tagged under the already-taught lemma إِنَّ with the sense
//      "indeed," not the ordinary conditional إِنْ "if" that appears two
//      sentences later in qs-v8-c12-007 with its ordinary sense; same
//      printed shape, two different grammatical readings, tagged on
//      their own merits per the corpus's standing practice (cf. ch3's
//      أَخَافُ/أَخَافَ note).
//   -- كِسَفًا (qs-v8-c12-006) is the broken plural/collective of the
//      singular كِسْفَة ("a piece, fragment") -- tagged under the singular
//      dictionary lemma per the corpus's established broken-plural-cites-
//      singular convention (cf. أَصْحَاب/صَاحِب, qasas-v8 ch3's header
//      comment).
//   -- أَسْقَطَ (qs-v8-c12-006, form IV "to cause to fall, drop [something]")
//      is a distinct lemma from the plain form I verb سَقَطَ ("to fall,"
//      already taught, e.g. qasas-v4 ch9/ch11, qasas-v6 ch3/ch8) --
//      different measure, causative sense, matching the corpus's existing
//      derived-measure-gets-its-own-lemma practice (cf. خَافَ/أَخَافَ).
//   -- مُسَحَّر (qs-v8-c12-003), كَاذِب (qs-v8-c12-005), and صَادِق
//      (qs-v8-c12-007) all LOOK like natural candidates for this chapter's
//      newWords at first glance -- checked by hand against every existing
//      chapter module and confirmed already taught (مُسَحَّر: qasas-v5
//      ch9; كَاذِب: qasas-v2 ch8/ch20, qasas-v4 ch7; صَادِق: qasas-v1
//      ch14 and several later volumes) -- so none are re-listed in
//      newWords here, only glossed inline.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لَمْ، نَفَعَ، ذَلِكَ، بَلْ،
//      قَالَ، أَوَّل، إِنَّمَا، أَنْتَ، مِنْ، وَمَا، إِلَّا، بَشَر، مِثْل، ظَنَّ، إِنَّ، عَلَى،
//      مِنَ، السَّمَاء، إِنْ، كَانَ، مُسَحَّر، كَاذِب، صَادِق are all already taught
//      and are NOT re-listed in newWords here.
//
// 3 new words (مِثْلَمَا، أَسْقَطَ، كِسْفَة) -- the shortest word-list yet in
// this volume, fitting the shortest chapter: barely a paragraph of
// narration bridging into one compact Qurʾān quote.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch12',
  title: { ar: 'بَلْ قَالُوا مِثْلَ مَا قَالَ الأَوَّلُونَ', en: 'Rather They Said Like Those Before Them' },
  newWords: ['مِثْلَمَا', 'أَسْقَطَ', 'كِسْفَة'],
  lemmas: {
    مِثْلَمَا: { gloss: 'just as, the same as' },
    أَسْقَطَ: { gloss: 'to cause to fall, drop (something)' },
    كِسْفَة: { gloss: 'a piece, fragment' },
  },
  paragraphs: [
    {
      en: "None of it moved them. Rather, they said just as those before them had said:",
      sentences: [
        {
          id: 'qs-v8-c12-001',
          ar: 'فَلَمْ يَنْفَعْهُمْ ذَلِكَ،',
          en: 'But that did not benefit them,',
          tokens: [
            { surface: 'فَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'but...not' },
            { surface: 'يَنْفَعْهُمْ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to benefit; did not benefit them' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v8-c12-002',
          ar: 'بَلْ قَالُوا مِثْلَمَا قَالَ الأَوَّلُونَ:',
          en: 'rather, they said just as those before them had said:',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; they said' },
            { surface: 'مِثْلَمَا', lemma: 'مِثْلَمَا', pos: 'conj', features: 'conj', root: 'م ث ل', gloss: 'just as, the same as' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'الأَوَّلُونَ', lemma: 'أَوَّل', pos: 'noun', features: 'pl.def.nom', gloss: 'the former peoples, the ancients' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ قَوْمُ شُعَيْبٍ بَعْدَ أَنْ لَمْ تَنْفَعْهُمْ نَصِيحَتُهُ؟',
          options: ['قَالُوا مِثْلَمَا قَالَ الأَوَّلُونَ مِنَ الأُمَمِ الْمُكَذِّبَةِ', 'اعْتَذَرُوا وَآمَنُوا بِهِ', 'طَلَبُوا مِنْهُ الْمَزِيدَ مِنَ النَّصَائِحِ'],
          answer: 0,
          qEn: "What did Shuʿayb's people do once his counsel failed to move them?",
          optionsEn: ['They said just as the rejecting nations before them had said', 'They apologized and believed in him', 'They asked him for more counsel'],
        },
      ],
    },
    {
      en: '"They said: You are only one of those bewitched. You are but a human being like us, and indeed we think you are surely a liar. So bring down upon us a piece of the sky, if you are telling the truth."',
      sentences: [
        {
          id: 'qs-v8-c12-003',
          ar: '﴿قَالُوا إِنَّمَا أَنتَ مِنَ الْمُسَحَّرِينَ﴾',
          en: '"They said: You are only one of those bewitched.',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; they said' },
            { surface: 'إِنَّمَا', lemma: 'إِنَّمَا', pos: 'part', features: 'part', gloss: 'only, merely' },
            { surface: 'أَنتَ', lemma: 'أَنْتَ', pos: 'noun', features: '2ms', gloss: 'you' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, among' },
            { surface: 'الْمُسَحَّرِينَ', lemma: 'مُسَحَّر', pos: 'adj', features: 'pl.def.gen', gloss: 'bewitched, affected by magic' },
          ],
        },
        {
          id: 'qs-v8-c12-004',
          ar: '﴿وَمَا أَنتَ إِلَّا بَشَرٌ مِّثْلُنَا﴾',
          en: 'You are but a human being like us,',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'أَنتَ', lemma: 'أَنْتَ', pos: 'noun', features: '2ms', gloss: 'you' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, but' },
            { surface: 'بَشَرٌ', lemma: 'بَشَر', pos: 'noun', features: 'indef.nom', gloss: 'a human being' },
            { surface: 'مِّثْلُنَا', lemma: 'مِثْل', pos: 'noun', features: 'nom+1p', gloss: 'like us' },
          ],
        },
        {
          id: 'qs-v8-c12-005',
          ar: '﴿وَإِن نَّظُنُّكَ لَمِنَ الْكَاذِبِينَ﴾',
          en: 'and indeed we think you are surely a liar.',
          tokens: [
            { surface: 'وَإِن', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'نَّظُنُّكَ', lemma: 'ظَنَّ', pos: 'verb', features: 'impf.1p+2ms', gloss: 'to think, suppose; we think you' },
            { surface: 'لَمِنَ', lemma: 'مِنْ', pos: 'prep', features: 'part+prep', gloss: 'surely among' },
            { surface: 'الْكَاذِبِينَ', lemma: 'كَاذِب', pos: 'noun', features: 'pl.def.gen', gloss: 'the liars' },
          ],
        },
        {
          id: 'qs-v8-c12-006',
          ar: '﴿فَأَسْقِطْ عَلَيْنَا كِسَفًا مِّنَ السَّمَاءِ﴾',
          en: 'So bring down upon us a piece of the sky,',
          tokens: [
            { surface: 'فَأَسْقِطْ', lemma: 'أَسْقَطَ', pos: 'verb', features: 'conj+imp.2ms', root: 'س ق ط', gloss: 'to cause to fall, drop; so drop!' },
            { surface: 'عَلَيْنَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+1p', gloss: 'upon us' },
            { surface: 'كِسَفًا', lemma: 'كِسْفَة', pos: 'noun', features: 'pl.indef.acc', root: 'ك س ف', gloss: 'a piece, fragment' },
            { surface: 'مِّنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'السَّمَاءِ', lemma: 'سَمَاء', pos: 'noun', features: 'def.gen', gloss: 'the sky' },
          ],
        },
        {
          id: 'qs-v8-c12-007',
          ar: '﴿إِن كُنتَ مِنَ الصَّادِقِينَ﴾.',
          en: 'if you are telling the truth."',
          tokens: [
            { surface: 'إِن', lemma: 'إِنْ', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'كُنتَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2ms', gloss: 'to be; you are' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الصَّادِقِينَ', lemma: 'صَادِق', pos: 'adj', features: 'pl.def.gen', gloss: 'the truthful' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا اتَّهَمَ قَوْمُ شُعَيْبٍ نَبِيَّهُمْ فِي هَذِهِ الآيَاتِ؟',
          options: ['بِأَنَّهُ مِنَ الْمُسَحَّرِينَ، وَمَا هُوَ إِلَّا بَشَرٌ مِثْلُهُمْ، وَأَنَّهُ لَمِنَ الْكَاذِبِينَ', 'بِأَنَّهُ سَاحِرٌ عَظِيمٌ يُخْشَى مِنْهُ', 'بِأَنَّهُ مَلِكٌ يَطْمَعُ فِي مُلْكِهِمْ'],
          answer: 0,
          qEn: "What did Shuʿayb's people accuse their prophet of in these verses?",
          optionsEn: ['That he was bewitched, that he was only a man like them, and that he was surely a liar', 'That he was a great sorcerer to be feared', 'That he was a king coveting their kingdom'],
        },
        {
          q: 'مَاذَا طَلَبُوا مِنْ شُعَيْبٍ لِيُصَدِّقُوهُ؟',
          options: ['أَنْ يُسْقِطَ عَلَيْهِمْ كِسَفًا مِّنَ السَّمَاءِ إِنْ كَانَ مِنَ الصَّادِقِينَ', 'أَنْ يُطْعِمَهُمْ مِنْ مَالِهِ', 'أَنْ يُحَارِبَ أَعْدَاءَهُمْ'],
          answer: 0,
          qEn: 'What did they demand of Shuʿayb before they would believe him?',
          optionsEn: ['That he bring down upon them a piece of the sky, if he were telling the truth', 'That he feed them from his own wealth', 'That he fight their enemies'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالُوا إِنَّمَا أَنتَ مِنَ',
        post: '.',
        en: 'They said: You are only one of those bewitched.',
        options: ['الْمُسَحَّرِينَ', 'السَّاحِرِينَ', 'الْمُسَافِرِينَ', 'التَّاجِرِينَ'],
        answer: 0,
        rationales: [
          'Plural definite genitive -- matches the printed مِنَ الْمُسَحَّرِينَ, "the bewitched."',
          'Wrong word -- "the sorcerers" (one who casts magic), not "the bewitched" (one it is cast upon).',
          'Wrong word -- "the travelers," unrelated to the accusation in the verse.',
          'Wrong word -- "the merchants," unrelated to the accusation in the verse.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَأَسْقِطْ عَلَيْنَا',
        post: 'مِّنَ السَّمَاءِ إِن كُنتَ مِنَ الصَّادِقِينَ.',
        en: 'So bring down upon us a piece of the sky, if you are telling the truth.',
        options: ['كِسَفًا', 'كِسَفٌ', 'كِسَفٍ', 'الْكِسَفَ'],
        answer: 0,
        rationales: [
          'Indefinite accusative -- the object of فَأَسْقِطْ, matching the printed كِسَفًا.',
          'Nominative -- wrong case; the object of a verb is accusative, not nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong; the piece of sky is not previously mentioned, so it stays indefinite.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِن كُنتَ مِنَ',
        post: '.',
        en: 'If you are telling the truth.',
        options: ['الصَّادِقِينَ', 'الصَّادِقُونَ', 'صَادِقٌ', 'الصِّدْقِ'],
        answer: 0,
        rationales: [
          'Plural definite genitive -- the second term of the prepositional phrase مِنَ الصَّادِقِينَ, matching the printed text.',
          'Nominative plural -- wrong case; a preposition governs the genitive, not the nominative.',
          'Indefinite singular -- wrong number; the phrase names a whole group, "the truthful."',
          'Verbal noun ("truthfulness") -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُسْقِطُ الرَّجُلُ كِسَفًا مِنَ السَّمَاءِ',
        pre: '',
        post: 'كِسَفًا مِنَ السَّمَاءِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m)',
        options: ['تُسْقِطُ', 'يُسْقِطُ', 'أُسْقِطُ', 'نُسْقِطُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular imperfect -- matches أَنْتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '1st plural -- wrong person; the target is "you," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَظُنُّ الرَّجُلُ ذَلِكَ',
        pre: '',
        post: 'ذَلِكَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَظُنُّ', 'يَظُنُّ', 'تَظُنُّ', 'أَظُنُّ'],
        answer: 0,
        rationales: [
          '1st plural imperfect -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person; the target is "we," not "you."',
          '1st singular -- wrong number; the target is "we," not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'يَقُولُ الرَّجُلُ مِثْلَمَا قَالَ الأَوَّلُونَ',
        pre: '',
        post: 'مِثْلَمَا قَالَ الأَوَّلُونَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَقُولُونَ', 'يَقُولُ', 'تَقُولُ', 'نَقُولُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong person and gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

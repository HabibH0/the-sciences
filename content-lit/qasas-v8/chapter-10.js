// قَصَصُ النَّبِيِّينَ, volume 8 «قِصَّةُ سَيِّدِنَا شُعَيْبٍ», chapter 10 --
// السَّهْمُ الأَخِيرُ. Printed page 221 only (a short chapter, right after
// ch9's closing Qurʾān quote and the heading box, ending right before
// ch11's heading حُجَّةٌ قَاطِعَةٌ further down the same page). Source text
// verified against the scan by the lead session; transcribed here against
// ../CHAPTER-FORMAT.md.
//
// Their argument spent, the arrogant among Shuʿayb's people fire the same
// last arrow every proud, rejecting nation has fired at its own prophet and
// his followers: a threat of exile quoted word for word from the Qurʾān
// (al-Aʿrāf 7:88), closing on Shuʿayb's own two-word retort.
//
// Grammar / lexical notes:
//   -- The single Qurʾān verse (7:88, qs-v8-c10-005 through -008) is split
//      into four ﴿﴾-wrapped fragments rather than the two the source
//      material's own headnote suggested -- at 21 tokens the verse runs
//      well past the 3-9 token buildable-fragment ceiling documented in
//      ../CHAPTER-FORMAT.md, so it is split more generously, at its natural
//      clause boundaries (each فَاصِلَة/verb boundary), matching this
//      volume's own established practice of prioritizing the 3-9 rule over
//      a fixed fragment count (cf. ch3's six-way split of Hūd 11:84-85).
//   -- الْمَلَأُ (qs-v8-c10-005) reuses the already-taught lemma مَلَأ
//      ("the chiefs, nobles," qasas-v3 ch13) rather than being newly
//      declared, even though an early working list of this chapter's new
//      words had flagged it as a candidate -- it bare-matches an existing
//      corpus entry with the identical sense.
//   -- Likewise مُتَكَبِّر، مِلَّة، لَمَّا، اِنْقَطَعَ، أَخْرَجَ (used for
//      لَنُخْرِجَنَّكَ), قَرْيَة, and عَادَ (used for لَتَعُودُنَّ) all bare-match
//      already-taught corpus lemmas with the sense needed here and so are
//      glossed inline rather than re-declared in newWords.
//   -- أَتْبَاعِهِ (qs-v8-c10-004) is tagged under the singular lemma تَابِع
//      ("follower"), not the broken-plural surface أَتْبَاع itself, matching
//      the corpus's broken-plural-cites-singular convention already used
//      for أَصْحَاب/صَاحِب (qasas-v8 ch3). Neither تَابِع nor أَتْبَاع bare-match
//      any existing corpus entry, so تَابِع is declared fresh here as this
//      chapter's own new word.
//   -- كَارِهِينَ (qs-v8-c10-008) is tagged under its own lemma كَارِه
//      ("hating, averse"), not the verb it derives from, matching the
//      corpus's established participle-as-its-own-noun-lemma convention
//      (مُؤْمِن distinct from آمَنَ, qasas-v8 ch4/ch5; see also this volume's
//      ch9 header comment on قَادِر/قَاهِر/أَهْوَن).
//   -- لَنُخْرِجَنَّكَ and لَتَعُودُنَّ (qs-v8-c10-006/007) are energetic-mood
//      imperfects (لَ + verb + emphatic نَّ) -- the feature-string grammar
//      has no atom for the energetic mood (per QASAS_AGENT_BRIEF.md §4's
//      note that mood is not encodable), so both are tagged with their
//      plain base person/number features under the fused-لَ 'part+impf...'
//      pattern, matching the identical precedent already in the corpus at
//      qasas-v12/chapter-35.js's لَيُؤْمِنَنَّ ('part+impf.3ms').
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لَمَّا، اِنْقَطَعَ، الَّذِي،
//      مِنْ، كُلّ، أُمَّة، عَلَى، نَبِيّ، مَلَأ، الَّذِينَ، أَوْ، فِي، قَالَ، شُعَيْب، آمَنَ،
//      مَعَ، قَرْيَة، مِلَّة، كَانَ are all already taught and are NOT
//      re-listed in newWords here. أَخِير ("last, final") was already
//      introduced in this volume's own ch7 (qs-v8-c07's أَخِيراً) -- reused
//      here in its adjectival form rather than re-declared.
//
// 6 new words (حُجَّة، سَهْم، أَطْلَقَ، تَابِع، اِسْتَكْبَرَ، كَارِه).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch10',
  title: { ar: 'السَّهْمُ الأَخِيرُ', en: 'The Last Arrow' },
  newWords: ['حُجَّة', 'سَهْم', 'أَطْلَقَ', 'تَابِع', 'اِسْتَكْبَرَ', 'كَارِه'],
  lemmas: {
    حُجَّة: { gloss: 'argument, proof' },
    سَهْم: { gloss: 'arrow' },
    أَطْلَقَ: { gloss: 'to loose, let fly, launch' },
    تَابِع: { gloss: 'follower' },
    اِسْتَكْبَرَ: { gloss: 'to act arrogantly, be haughty' },
    كَارِه: { gloss: 'hating, averse' },
  },
  paragraphs: [
    {
      en: "When their argument ran out, the arrogant fired the same last arrow every proud one of every nation has fired at their prophet and his followers:",
      sentences: [
        {
          id: 'qs-v8-c10-001',
          ar: 'وَلَمَّا انْقَطَعَتْ حُجَّتُهُمْ',
          en: 'When their argument ran out,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'and when' },
            { surface: 'انْقَطَعَتْ', lemma: 'اِنْقَطَعَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be cut off, run out; ran out' },
            { surface: 'حُجَّتُهُمْ', lemma: 'حُجَّة', pos: 'noun', features: 'nom+3mp', root: 'ح ج ج', gloss: 'their argument' },
          ],
        },
        {
          id: 'qs-v8-c10-002',
          ar: 'أَطْلَقُوا السَّهْمَ الأَخِيرَ',
          en: 'they loosed the last arrow',
          tokens: [
            { surface: 'أَطْلَقُوا', lemma: 'أَطْلَقَ', pos: 'verb', features: 'perf.3mp', root: 'ط ل ق', gloss: 'to loose, let fly, launch; they loosed' },
            { surface: 'السَّهْمَ', lemma: 'سَهْم', pos: 'noun', features: 'def.acc', root: 'س ه م', gloss: 'the arrow' },
            { surface: 'الأَخِيرَ', lemma: 'أَخِير', pos: 'adj', features: 'def.acc', root: 'أ خ ر', gloss: 'the last, final' },
          ],
        },
        {
          id: 'qs-v8-c10-003',
          ar: 'الَّذِي أَطْلَقَهُ الْمُتَكَبِّرُونَ مِنْ كُلِّ أُمَّةٍ',
          en: 'that the arrogant of every nation have loosed',
          tokens: [
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'that which' },
            { surface: 'أَطْلَقَهُ', lemma: 'أَطْلَقَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'ط ل ق', gloss: 'to loose; loosed it' },
            { surface: 'الْمُتَكَبِّرُونَ', lemma: 'مُتَكَبِّر', pos: 'noun', features: 'pl.def.nom', gloss: 'the arrogant ones' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'أُمَّةٍ', lemma: 'أُمَّة', pos: 'noun', features: 'indef.gen', gloss: 'a nation' },
          ],
        },
        {
          id: 'qs-v8-c10-004',
          ar: 'عَلَى نَبِيِّهِمْ وَأَتْبَاعِهِ:',
          en: 'at their prophet and his followers:',
          tokens: [
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'نَبِيِّهِمْ', lemma: 'نَبِيّ', pos: 'noun', features: 'gen+3mp', gloss: 'their prophet' },
            { surface: 'وَأَتْبَاعِهِ', lemma: 'تَابِع', pos: 'noun', features: 'conj+pl.gen+3ms', root: 'ت ب ع', gloss: 'and his followers' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ الْمُتَكَبِّرُونَ مِنْ قَوْمِ شُعَيْبٍ لَمَّا انْقَطَعَتْ حُجَّتُهُمْ؟',
          options: ['أَطْلَقُوا السَّهْمَ الْأَخِيرَ الَّذِي يُطْلِقُهُ كُلُّ مُتَكَبِّرٍ عَلَى نَبِيِّهِ', 'اعْتَذَرُوا لِشُعَيْبٍ', 'آمَنُوا بِرِسَالَتِهِ'],
          answer: 0,
          qEn: "What did the arrogant among Shuʿayb's people do once their argument ran out?",
          optionsEn: ['They fired the last arrow that every arrogant one fires at his prophet', 'They apologized to Shuʿayb', 'They believed in his message'],
        },
      ],
    },
    {
      en: '"The chiefs who were arrogant among his people said: We will surely expel you, O Shuʿayb, and those who believed with you, from our town, or you will surely return to our religion." He said: "Even if we are averse to it?"',
      sentences: [
        {
          id: 'qs-v8-c10-005',
          ar: '﴿قَالَ الْمَلَأُ الَّذِينَ اسْتَكْبَرُوا مِن قَوْمِهِ﴾',
          en: '"The chiefs who were arrogant among his people said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'الْمَلَأُ', lemma: 'مَلَأ', pos: 'noun', features: 'def.nom', gloss: 'the chiefs, nobles' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'who' },
            { surface: 'اسْتَكْبَرُوا', lemma: 'اِسْتَكْبَرَ', pos: 'verb', features: 'perf.3mp', root: 'ك ب ر', gloss: 'to act arrogantly; were arrogant' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
          ],
        },
        {
          id: 'qs-v8-c10-006',
          ar: '﴿لَنُخْرِجَنَّكَ يَاشُعَيْبُ وَالَّذِينَ آمَنُوا مَعَكَ مِن قَرْيَتِنَا﴾',
          en: 'We will surely expel you, O Shuʿayb, and those who believed with you, from our town,',
          tokens: [
            { surface: 'لَنُخْرِجَنَّكَ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'part+impf.1p+2ms', gloss: 'to expel, drive out; we will surely expel you' },
            { surface: 'يَاشُعَيْبُ', lemma: 'شُعَيْب', pos: 'proper', features: 'voc', gloss: 'O Shuʿayb' },
            { surface: 'وَالَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'conj+pl.rel', gloss: 'and those who' },
            { surface: 'آمَنُوا', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3mp', gloss: 'to believe; believed' },
            { surface: 'مَعَكَ', lemma: 'مَعَ', pos: 'prep', features: 'prep+2ms', gloss: 'with you' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَرْيَتِنَا', lemma: 'قَرْيَة', pos: 'noun', features: 'gen+1p', gloss: 'our town' },
          ],
        },
        {
          id: 'qs-v8-c10-007',
          ar: '﴿أَوْ لَتَعُودُنَّ فِي مِلَّتِنَا﴾',
          en: 'or you will surely return to our religion."',
          tokens: [
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'لَتَعُودُنَّ', lemma: 'عَادَ', pos: 'verb', features: 'part+impf.2mp', gloss: 'to return; you will surely return' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مِلَّتِنَا', lemma: 'مِلَّة', pos: 'noun', features: 'gen+1p', gloss: 'our religion' },
          ],
        },
        {
          id: 'qs-v8-c10-008',
          ar: '﴿قَالَ أَوَلَوْ كُنَّا كَارِهِينَ﴾.',
          en: 'He said: "Even if we are averse to it?"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; he said' },
            { surface: 'أَوَلَوْ', lemma: 'لَوْ', pos: 'conj', features: 'part+conj+conj', gloss: 'even if' },
            { surface: 'كُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'perf.1p', gloss: 'to be; we are' },
            { surface: 'كَارِهِينَ', lemma: 'كَارِه', pos: 'noun', features: 'pl.acc', root: 'ك ر ه', gloss: 'hating, averse to it' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا هَدَّدَ الْمَلَأُ الْمُسْتَكْبِرُونَ شُعَيْباً وَمَنْ آمَنَ مَعَهُ بِهِ؟',
          options: ['بِإِخْرَاجِهِمْ مِنَ الْقَرْيَةِ إِلَّا أَنْ يَعُودُوا إِلَى مِلَّتِهِمْ', 'بِسَجْنِهِمْ', 'بِمُصَادَرَةِ أَمْوَالِهِمْ'],
          answer: 0,
          qEn: 'What did the arrogant chiefs threaten Shuʿayb and those who believed with him with?',
          optionsEn: ['Expelling them from the town unless they returned to their religion', 'Imprisoning them', 'Confiscating their wealth'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَمَّا انْقَطَعَتْ حُجَّتُهُمْ',
        post: 'السَّهْمَ الأَخِيرَ.',
        en: 'When their argument ran out, they loosed the last arrow.',
        options: ['أَطْلَقُوا', 'أَطْلَقَ', 'يُطْلِقُونَ', 'مُطْلِقُونَ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- matches the completed-action narration and the plural subject "they."',
          '3rd masculine singular -- wrong number; the subject is a group, not one man.',
          'Imperfect -- wrong tense; the narration reports a completed act.',
          'Active participle (noun) -- wrong part of speech for the main verb of this clause.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ الْمَلَأُ الَّذِينَ',
        post: 'مِن قَوْمِهِ: لَنُخْرِجَنَّكَ يَاشُعَيْبُ.',
        en: 'The chiefs who were arrogant among his people said: We will surely expel you, O Shuʿayb.',
        options: ['اسْتَكْبَرُوا', 'يَسْتَكْبِرُونَ', 'مُسْتَكْبِرُونَ', 'اسْتَكْبَرَ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- matches الَّذِينَ and the completed-action narration.',
          'Imperfect -- wrong tense; the verse narrates something already true of them.',
          'Active participle (noun) -- wrong part of speech for a relative clause\'s verb.',
          '3rd masculine singular -- wrong number; الَّذِينَ is plural.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ الْمَلَأُ:',
        post: 'يَاشُعَيْبُ وَالَّذِينَ آمَنُوا مَعَكَ مِن قَرْيَتِنَا.',
        en: 'The chiefs said: We will surely expel you, O Shuʿayb, and those who believed with you, from our town.',
        options: ['لَنُخْرِجَنَّكَ', 'نُخْرِجُكَ', 'أَخْرَجْنَاكَ', 'يُخْرِجُونَكَ'],
        answer: 0,
        rationales: [
          'Emphatic لَ + energetic imperfect -- the required form for a solemn threat, matching the printed verse.',
          'Plain imperfect, no لَ or energetic نَّ -- too weak for the emphatic threat the verse makes.',
          'Perfect -- wrong tense; the expulsion has not yet happened.',
          '3rd masculine plural -- wrong subject; the chiefs are speaking as "we," not "they."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُخْرِجُ الرَّجُلُ الْغَرِيبَ مِنَ الْقَرْيَةِ',
        pre: '',
        post: 'الْغَرِيبَ مِنَ الْقَرْيَةِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نُخْرِجُ', 'يُخْرِجُ', 'تُخْرِجُ', 'أُخْرِجُ'],
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
        base: 'يُخْرِجُ الرَّجُلُ الْغَرِيبَ مِنَ الْقَرْيَةِ',
        pre: '',
        post: 'الْغَرِيبَ مِنَ الْقَرْيَةِ',
        targetPerson: 'أَنتُمْ',
        targetEn: 'you all (m)',
        options: ['تُخْرِجُونَ', 'يُخْرِجُ', 'نُخْرِجُ', 'أُخْرِجُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural imperfect -- matches أَنتُمْ.',
          '3rd masculine singular -- the base form, not shifted to "you all."',
          '1st plural -- wrong person; the target is "you all," not "we."',
          '1st singular -- wrong person; the target is "you all," not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'يُخْرِجُ الرَّجُلُ الْغَرِيبَ مِنَ الْقَرْيَةِ',
        pre: '',
        post: 'الْغَرِيبَ مِنَ الْقَرْيَةِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يُخْرِجُونَ', 'يُخْرِجُ', 'تُخْرِجُونَ', 'نُخْرِجُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd masculine plural -- wrong person; this is "they," not "you all."',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

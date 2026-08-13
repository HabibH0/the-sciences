// قَصَصُ النَّبِيِّينَ, volume 8 «قِصَّةُ سَيِّدِنَا شُعَيْبٍ», chapter 6 --
// جَوَابُ قَوْمِهِ. Printed pages 218 (bottom, right after ch5's closing
// Qurʾān quote and the chapter heading box) through 219 (ending right before
// ch7's heading box). Transcribed from the verified source text against
// ../CHAPTER-FORMAT.md.
//
// Their sharpest minds pick over Shuʿayb's call and its reasoning in mocking
// self-satisfaction, as if they had cracked a riddle -- then answer him in
// the Qurʾān's own words (Hūd 11:87): does your prayer command you to
// abandon our fathers' gods, or to stop doing as we please with our own
// money? You are (they sneer) the forbearing, right-minded one.
//
// Grammar / lexical notes:
//   -- دَقَّقَ (qs-v8-c06-001) is 3rd masculine singular despite its subject
//      أَذْكِيَاؤُهُمْ being plural -- standard verb-initial (VSO) agreement in
//      Arabic marks gender only when the verb precedes its subject, never
//      number.
//   -- يَاشُعَيْبُ (qs-v8-c06-005) is tokenized as one fused surface (vocative
//      particle + proper noun, no space in the mushaf text), matching the
//      already-established يَاقَوْمِ convention (qasas-v8 ch3/ch5): lemma is
//      the addressed noun itself (here شُعَيْب), features open with the
//      vocative's own 'part' atom.
//   -- The Qurʾān quote (Hūd 11:87, qs-v8-c06-005 through -007) is split into
//      three ﴿﴾-wrapped fragments and annotated with full tokens exactly
//      like ordinary narration, per the house convention established in
//      qasas-v3/chapter-16.js and continued through this volume's ch1-ch5.
//   -- سِرّ، حَلِيم، and رَشِيد were flagged as candidate new words for this
//      chapter in the draft assignment table, but lookup against the wider
//      corpus shows all three already taught elsewhere (سِرّ "secret" as a
//      noun, حَلِيم and رَشِيد as adjectives with the same senses used here)
//      -- dropped from newWords per CHAPTER-FORMAT.md's shared-lexicon rule
//      and reused with their existing lemma spellings.
//   -- دَقَّقَ and تَعْلِيل are not on the draft assignment table but are
//      genuinely new to the corpus (verified against lookup and against
//      every finished qasas-v8 chapter) -- added here as this chapter's own
//      fair-game new words.
//   -- أَذْكِيَاءُ (qs-v8-c06-001, "the sharp/clever ones") is tagged under
//      its already-taught singular lemma ذَكِيّ, matching the corpus's
//      broken-plural-cites-singular convention (cf. أَصْحَاب/صَاحِب, ch3).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَدْ، فِي، تَفْسِير، هَذِهِ،
//      دَعْوَة، قَالَ، شُعَيْب، صَلَاة، أَمَرَ، أَنْ، تَرَكَ، مَا، يَعْبُدُ (عَبَدَ)،
//      أَب، أَوْ، فَعَلَ، مَال، شَاءَ، إِنَّ، أَنتَ، سِرّ، حَلِيم، رَشِيد، كَأَنَّ،
//      يَا، قَوْم are all already taught and are NOT re-listed in newWords
//      here.
//
// 7 new words (دَقَّقَ، تَعْلِيل، تِيه، زَهْو، اِكْتَشَفَ، فَكَّ، لُغْز).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch6',
  title: { ar: 'جَوَابُ قَوْمِهِ', en: 'The Response of His People' },
  newWords: ['دَقَّقَ', 'تَعْلِيل', 'تِيه', 'زَهْو', 'اِكْتَشَفَ', 'فَكَّ', 'لُغْز'],
  lemmas: {
    دَقَّقَ: { gloss: 'to scrutinize, examine closely' },
    تَعْلِيل: { gloss: 'reasoning, rationale, justification' },
    تِيه: { gloss: 'arrogance, self-conceit' },
    زَهْو: { gloss: 'vanity, pride' },
    اِكْتَشَفَ: { gloss: 'to discover' },
    فَكَّ: { gloss: 'to solve, decipher, undo' },
    لُغْز: { gloss: 'a riddle, puzzle' },
  },
  paragraphs: [
    {
      en: "Their sharpest minds pored over the meaning of this call and its reasoning, and said, in arrogance and self-satisfaction, as if they had discovered a secret or solved a riddle:",
      sentences: [
        {
          id: 'qs-v8-c06-001',
          ar: 'وَقَدْ دَقَّقَ أَذْكِيَاؤُهُمْ فِي تَفْسِيرِ هَذِهِ الدَّعْوَةِ وَتَعْلِيلِهَا،',
          en: 'Their sharpest minds pored over the meaning of this call and its reasoning,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'دَقَّقَ', lemma: 'دَقَّقَ', pos: 'verb', features: 'perf.3ms', root: 'د ق ق', gloss: 'to scrutinize, examine closely; scrutinized' },
            { surface: 'أَذْكِيَاؤُهُمْ', lemma: 'ذَكِيّ', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their sharp, clever ones' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'تَفْسِيرِ', lemma: 'تَفْسِير', pos: 'noun', features: 'gen.constr', gloss: 'the interpretation of' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الدَّعْوَةِ', lemma: 'دَعْوَة', pos: 'noun', features: 'def.gen', gloss: 'the call' },
            { surface: 'وَتَعْلِيلِهَا', lemma: 'تَعْلِيل', pos: 'noun', features: 'conj+gen+3fs', root: 'ع ل ل', gloss: 'and its reasoning, its justification' },
          ],
        },
        {
          id: 'qs-v8-c06-002',
          ar: 'وَقَالُوا فِي تِيهٍ وَزَهْوٍ،',
          en: 'and said, in arrogance and self-satisfaction,',
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and said' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'تِيهٍ', lemma: 'تِيه', pos: 'noun', features: 'indef.gen', root: 'ت ي ه', gloss: 'arrogance, self-conceit' },
            { surface: 'وَزَهْوٍ', lemma: 'زَهْو', pos: 'noun', features: 'conj+indef.gen', root: 'ز ه و', gloss: 'and vanity, pride' },
          ],
        },
        {
          id: 'qs-v8-c06-003',
          ar: 'كَأَنَّهُمُ اكْتَشَفُوا سِرًّا،',
          en: 'as if they had discovered a secret,',
          tokens: [
            { surface: 'كَأَنَّهُمُ', lemma: 'كَأَنَّ', pos: 'part', features: 'part+3mp', gloss: 'as if they' },
            { surface: 'اكْتَشَفُوا', lemma: 'اِكْتَشَفَ', pos: 'verb', features: 'perf.3mp', root: 'ك ش ف', gloss: 'to discover; discovered' },
            { surface: 'سِرًّا', lemma: 'سِرّ', pos: 'noun', features: 'indef.acc', gloss: 'a secret' },
          ],
        },
        {
          id: 'qs-v8-c06-004',
          ar: 'أَوْ فَكُّوا لُغْزاً:',
          en: 'or solved a riddle:',
          tokens: [
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'فَكُّوا', lemma: 'فَكَّ', pos: 'verb', features: 'perf.3mp', root: 'ف ك ك', gloss: 'to solve, decipher, undo; solved' },
            { surface: 'لُغْزاً', lemma: 'لُغْز', pos: 'noun', features: 'indef.acc', root: 'ل غ ز', gloss: 'a riddle, puzzle' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ اسْتَقْبَلَ أَذْكِيَاءُ قَوْمِ شُعَيْبٍ دَعْوَتَهُ؟',
          options: ['دَقَّقُوا فِي تَفْسِيرِهَا وَقَالُوا فِي تِيهٍ وَزَهْوٍ كَأَنَّهُمُ اكْتَشَفُوا سِرًّا أَوْ فَكُّوا لُغْزاً', 'قَبِلُوهَا فَوْراً وَآمَنُوا بِهَا', 'لَمْ يَسْمَعُوهَا أَصْلاً'],
          answer: 0,
          qEn: "How did the sharpest minds among Shuʿayb's people receive his call?",
          optionsEn: ['They pored over its meaning in arrogance and self-satisfaction, as if they had discovered a secret or solved a riddle', 'They accepted it at once and believed in it', 'They never even heard it'],
        },
      ],
    },
    {
      en: "\"They said, 'O Shuʿayb, does your prayer command you that we abandon what our fathers worship, or that we do as we wish with our own wealth? Indeed you are the forbearing, right-minded one.'\"",
      sentences: [
        {
          id: 'qs-v8-c06-005',
          ar: '﴿قَالُوا يَاشُعَيْبُ أَصَلَاتُكَ تَأْمُرُكَ أَن نَّتْرُكَ مَا يَعْبُدُ آبَاؤُنَا﴾',
          en: '"They said, \'O Shuʿayb, does your prayer command you that we abandon what our fathers worship,',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; they said' },
            { surface: 'يَاشُعَيْبُ', lemma: 'شُعَيْب', pos: 'proper', features: 'part+nom', gloss: 'O Shuʿayb' },
            { surface: 'أَصَلَاتُكَ', lemma: 'صَلَاة', pos: 'noun', features: 'part+nom+2ms', gloss: 'does your prayer...?' },
            { surface: 'تَأْمُرُكَ', lemma: 'أَمَرَ', pos: 'verb', features: 'impf.3fs+2ms', gloss: 'to command; commands you' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'نَّتْرُكَ', lemma: 'تَرَكَ', pos: 'verb', features: 'impf.1p', gloss: 'to leave; we leave' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3ms', gloss: 'to worship; worships' },
            { surface: 'آبَاؤُنَا', lemma: 'أَب', pos: 'noun', features: 'pl.nom+1p', root: 'أ ب و', gloss: 'our fathers' },
          ],
        },
        {
          id: 'qs-v8-c06-006',
          ar: '﴿أَوْ أَن نَّفْعَلَ فِي أَمْوَالِنَا مَا نَشَاءُ﴾',
          en: 'or that we do as we wish with our own wealth?',
          tokens: [
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'نَّفْعَلَ', lemma: 'فَعَلَ', pos: 'verb', features: 'impf.1p', gloss: 'to do; we do' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'أَمْوَالِنَا', lemma: 'مَال', pos: 'noun', features: 'pl.gen+1p', gloss: 'our wealth' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'نَشَاءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.1p', gloss: 'to wish, will; we wish' },
          ],
        },
        {
          id: 'qs-v8-c06-007',
          ar: '﴿إِنَّكَ لَأَنتَ الْحَلِيمُ الرَّشِيدُ﴾.',
          en: 'Indeed you are the forbearing, right-minded one.\'"',
          tokens: [
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'لَأَنتَ', lemma: 'أَنتَ', pos: 'noun', features: 'part+2ms', gloss: 'surely you' },
            { surface: 'الْحَلِيمُ', lemma: 'حَلِيم', pos: 'adj', features: 'def.nom', gloss: 'the forbearing, patient' },
            { surface: 'الرَّشِيدُ', lemma: 'رَشِيد', pos: 'adj', features: 'def.nom', gloss: 'the mature, of sound judgment' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا سَأَلَ الْقَوْمُ شُعَيْباً فِي رَدِّهِمْ عَلَيْهِ بِحَسَبِ الآيَةِ؟',
          options: ['أَصَلَاتُكَ تَأْمُرُكَ أَن نَّتْرُكَ مَا يَعْبُدُ آبَاؤُنَا أَوْ أَن نَّفْعَلَ فِي أَمْوَالِنَا مَا نَشَاءُ', 'مَتَى سَتَتْرُكُنَا وَتَذْهَبُ إِلَى بَلَدٍ آخَرَ؟', 'كَمْ عُمْرُكَ يَا شُعَيْبُ؟'],
          answer: 0,
          qEn: 'What did the people ask Shuʿayb in their reply to him, according to the verse?',
          optionsEn: ['Does your prayer command you to abandon what our fathers worship, or to stop doing as we wish with our own wealth?', 'When will you leave us and go to another land?', 'How old are you, Shuʿayb?'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَقَدْ',
        post: 'أَذْكِيَاؤُهُمْ فِي تَفْسِيرِ هَذِهِ الدَّعْوَةِ وَتَعْلِيلِهَا.',
        en: 'Their sharpest minds had scrutinized the interpretation of this call and its rationale.',
        options: ['دَقَّقَ', 'دَقَّقُوا', 'يُدَقِّقُ', 'مُدَقِّق'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- correct verb-initial agreement (gender only, not number) with the following plural subject.',
          'Perfect, 3rd masculine plural -- wrong; plural agreement only applies when the subject comes before the verb.',
          'Imperfect -- wrong tense; the scrutinizing is reported as a completed act.',
          'Active participle -- wrong part of speech for the main verb of the clause.',
        ],
      },
      {
        type: 'cloze',
        pre: 'كَأَنَّهُمُ',
        post: 'سِرًّا، أَوْ فَكُّوا لُغْزاً.',
        en: 'As if they had discovered a secret, or solved a riddle.',
        options: ['اكْتَشَفُوا', 'يَكْتَشِفُونَ', 'اكْتَشَفَ', 'مُكْتَشِفُونَ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- matches كَأَنَّهُمُ, "as if they."',
          'Imperfect -- wrong tense; the mockery describes something they treat as already accomplished.',
          '3rd masculine singular -- wrong number; the subject is plural ("they").',
          'Active participle -- wrong part of speech for the main verb of the clause.',
        ],
      },
      {
        type: 'cloze',
        pre: 'أَصَلَاتُكَ تَأْمُرُكَ أَن',
        post: 'مَا يَعْبُدُ آبَاؤُنَا؟',
        en: 'Does your prayer command you that we leave what our fathers worship?',
        options: ['نَّتْرُكَ', 'تَرَكْنَا', 'يَتْرُكُونَ', 'تَارِكُونَ'],
        answer: 0,
        rationales: [
          'Subjunctive imperfect, 1st plural -- the required form after أَنْ, "that we leave."',
          'Perfect -- wrong tense/mood; أَنْ requires the (subjunctive) imperfect.',
          '3rd masculine plural -- wrong person; the speakers mean "we," not "they."',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَكْتَشِفُ الرَّجُلُ سِرًّا',
        pre: '',
        post: 'سِرًّا',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَكْتَشِفُ', 'يَكْتَشِفُ', 'تَكْتَشِفُ', 'نَكْتَشِفُ'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَكْتَشِفُ الرَّجُلُ سِرًّا',
        pre: '',
        post: 'سِرًّا',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you all (m)',
        options: ['تَكْتَشِفُونَ', 'يَكْتَشِفُ', 'أَكْتَشِفُ', 'نَكْتَشِفُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural imperfect -- matches أَنْتُمْ.',
          '3rd masculine singular -- the base form, not shifted to "you all."',
          '1st singular -- wrong person; the target is "you all," not "I."',
          '1st plural -- wrong person; the target is "you all," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَكْتَشِفُ الرَّجُلُ سِرًّا',
        pre: '',
        post: 'سِرًّا',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَكْتَشِفُونَ', 'يَكْتَشِفُ', 'تَكْتَشِفُونَ', 'نَكْتَشِفُ'],
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

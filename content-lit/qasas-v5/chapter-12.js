// قَصَصُ النَّبِيِّينَ, volume 5 «نَاقَةُ ثَمُودَ», chapter 12 -- طُغْيَانُ
// ثَمُودَ. Printed pages 107 (from ch12's own heading box, right after
// ch11's closing lines on the rota) - 108 (top portion only, ending before
// ch13's own box الْعَذَابُ partway down that page). Transcribed by hand
// from the scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md
// and QASAS_VOLUME_MAP.md's volume 5 table.
//
// Rather than accept the fair rota Ṣāliḥ arranged, the people grow
// resentful of losing even one day's water to the she-camel their own
// livestock keep fleeing from -- and though Ṣāliḥ has already warned them
// not to harm it, two men volunteer on the spot to kill it. They wait for
// it to come out, then shoot it with an arrow and cut its throat.
//
// Grammar / lexical notes:
//   -- الشَّقِيَّانِ / جَلَسَا / يَنْتَظِرَانِ (qs-v5-c12-009) are all DUAL
//      forms -- the noun carries the documented 'du' number atom (def.nom.du),
//      but CHAPTER-FORMAT.md's person-code list (1s 1p 2ms 2fs 3ms 3fs 3mp
//      3fp) has no 3rd-person dual verb code at all. Rather than invent an
//      undocumented atom, both dual verbs here fall back to the nearest
//      documented code, '3mp' -- an acknowledged approximation (these are
//      genuinely dual verb forms, جَلَسَا/يَنْتَظِرَانِ, not the plural
//      جَلَسُوا/يَنْتَظِرُونَ they're tagged as), flagged here for whoever
//      extends the schema with a real dual-verb atom later.
//   -- ذَهَبَ (qs-v5-c12-009) stays singular (3ms) even though its subject
//      الشَّقِيَّانِ is dual, per the standard Arabic rule that a verb
//      preceding its subject (VS order) agrees in gender only, not number.
//   -- حَذِرَ (qs-v5-c12-005, "to be wary, take heed") is a new, distinct
//      lemma from the already-taught causative حَذَّرَ ("to warn," qasas-v2),
//      matching the corpus's same-root-different-lemma convention.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لَكِنْ، اِسْتَكْبَرَ، قَوْم،
//      طَغَى، قَالَ، لِمَاذَا، لَا، شَرِبَ، مَاشِيَة (qasas-v5 ch11)، كُلّ، يَوْم،
//      نَاس، مِنْ، هَذِهِ، نَاقَة (qasas-v5 ch10)، الَّتِي، نَفَرَ (qasas-v5 ch11)،
//      كَانَ، صَالِح (qasas-v5 ch4/5)، قَدْ، حَذَّرَ، أَنْ، أَهَانَ، لَكِنَّ، مَنْ، قَتَلَ،
//      قَامَ، رَجُل، أَنَا، آخَر، ذَهَبَ، جَلَسَ، اِنْتَظَرَ، خُرُوج، حَتَّى، إِذَا، خَرَجَ،
//      أَوَّل، ثَانِي
//      are all already taught and are NOT re-listed in newWords here.
//
// 6 new words (ضَجِرَ، حَذِرَ، شَقِيّ، رَمَى، سَهْم، نَحَرَ).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch12',
  title: { ar: 'طُغْيَانُ ثَمُودَ', en: 'The Tyranny of Thamūd' },
  newWords: ['ضَجِرَ', 'حَذِرَ', 'شَقِيّ', 'رَمَى', 'سَهْم', 'نَحَرَ'],
  lemmas: {
    ضَجِرَ: { gloss: 'to be annoyed, fed up' },
    حَذِرَ: { gloss: 'to be wary, take heed' },
    شَقِيّ: { gloss: 'a wretch, miscreant' },
    رَمَى: { gloss: 'to shoot, throw' },
    سَهْم: { gloss: 'an arrow' },
    نَحَرَ: { gloss: 'to slaughter (a camel), cut the throat of' },
  },
  paragraphs: [
    {
      en: 'But the people grew arrogant and rebelled, and said: "Why does our livestock not drink every day?" The people grew fed up with this she-camel their own livestock kept bolting from. Ṣāliḥ had already warned them not to harm this she-camel, but they did not take heed. They said: "Who will kill this she-camel?" A man stood up and said: "I will!" And another stood up and said: "I will!" The two wretches went off and sat waiting for the she-camel to come out; until, when the she-camel came out, the first shot it with an arrow, and the second cut its throat and killed it.',
      sentences: [
        {
          id: 'qs-v5-c12-001',
          ar: 'وَلَكِنِ اسْتَكْبَرَ الْقَوْمُ وَطَغَوْا،',
          en: 'But the people grew arrogant and rebelled,',
          tokens: [
            { surface: 'وَلَكِنِ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'اسْتَكْبَرَ', lemma: 'اِسْتَكْبَرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to grow arrogant; grew arrogant' },
            { surface: 'الْقَوْمُ', lemma: 'قَوْم', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'وَطَغَوْا', lemma: 'طَغَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to rebel, transgress; and rebelled' },
          ],
        },
        {
          id: 'qs-v5-c12-002',
          ar: 'وَقَالُوا:',
          en: 'and said:',
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v5-c12-003',
          ar: 'لِمَاذَا لَا تَشْرَبُ مَاشِيَتُنَا كُلَّ يَوْمٍ؟',
          en: '"Why does our livestock not drink every day?"',
          tokens: [
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'adv', gloss: 'why' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَشْرَبُ', lemma: 'شَرِبَ', pos: 'verb', features: 'impf.3fs', gloss: 'to drink; does...drink' },
            { surface: 'مَاشِيَتُنَا', lemma: 'مَاشِيَة', pos: 'noun', features: 'nom+1p', root: 'م ش ي', gloss: 'our livestock' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يَوْم', pos: 'noun', features: 'indef.gen', gloss: 'day' },
          ],
        },
        {
          id: 'qs-v5-c12-004',
          ar: 'وَضَجِرَ النَّاسُ مِنْ هَذِهِ النَّاقَةِ الَّتِي تَنْفِرُ مِنْهَا مَاشِيَتُهُمْ.',
          en: 'The people grew fed up with this she-camel their own livestock kept bolting from.',
          tokens: [
            { surface: 'وَضَجِرَ', lemma: 'ضَجِرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ض ج ر', gloss: 'to be annoyed, fed up; and grew fed up' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'النَّاقَةِ', lemma: 'نَاقَة', pos: 'noun', features: 'def.gen', gloss: 'the she-camel' },
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.f', gloss: 'which' },
            { surface: 'تَنْفِرُ', lemma: 'نَفَرَ', pos: 'verb', features: 'impf.3fs', root: 'ن ف ر', gloss: 'to flee, bolt; bolts' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from it' },
            { surface: 'مَاشِيَتُهُمْ', lemma: 'مَاشِيَة', pos: 'noun', features: 'nom+3mp', root: 'م ش ي', gloss: 'their livestock' },
          ],
        },
        {
          id: 'qs-v5-c12-005',
          ar: 'وَكَانَ صَالِحٌ قَدْ حَذَّرَهُمْ مِنْ أَنْ يُهِينُوا هَذِهِ النَّاقَةَ،',
          en: 'Ṣāliḥ had already warned them not to harm this she-camel,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and had' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'already' },
            { surface: 'حَذَّرَهُمْ', lemma: 'حَذَّرَ', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to warn; warned them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يُهِينُوا', lemma: 'أَهَانَ', pos: 'verb', features: 'impf.3mp', gloss: 'to harm, disgrace; they harm' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'النَّاقَةَ', lemma: 'نَاقَة', pos: 'noun', features: 'def.acc', gloss: 'the she-camel' },
          ],
        },
        {
          id: 'qs-v5-c12-006',
          ar: 'وَلَكِنَّهُمْ لَمْ يَحْذَرُوا.',
          en: 'but they did not take heed.',
          tokens: [
            { surface: 'وَلَكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَحْذَرُوا', lemma: 'حَذِرَ', pos: 'verb', features: 'impf.3mp', root: 'ح ذ ر', gloss: 'to be wary, take heed; they took heed' },
          ],
        },
        {
          id: 'qs-v5-c12-007',
          ar: 'قَالُوا:',
          en: 'They said:',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v5-c12-008',
          ar: 'مَنْ يَقْتُلْ هَذِهِ النَّاقَةَ؟',
          en: '"Who will kill this she-camel?"',
          tokens: [
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'يَقْتُلْ', lemma: 'قَتَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to kill; will kill' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'النَّاقَةَ', lemma: 'نَاقَة', pos: 'noun', features: 'def.acc', gloss: 'the she-camel' },
          ],
        },
        {
          id: 'qs-v5-c12-009',
          ar: 'قَامَ رَجُلٌ وَقَالَ:',
          en: 'A man stood up and said:',
          tokens: [
            { surface: 'قَامَ', lemma: 'قَامَ', pos: 'verb', features: 'perf.3ms', gloss: 'to stand up; stood up' },
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', gloss: 'a man' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v5-c12-010',
          ar: 'أَنَا!',
          en: '"I will!"',
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
          ],
        },
        {
          id: 'qs-v5-c12-011',
          ar: 'وَقَامَ الْآخَرُ وَقَالَ:',
          en: 'And another stood up and said:',
          tokens: [
            { surface: 'وَقَامَ', lemma: 'قَامَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to stand up; and stood up' },
            { surface: 'الْآخَرُ', lemma: 'آخَر', pos: 'noun', features: 'def.nom', gloss: 'the other' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v5-c12-012',
          ar: 'أَنَا!',
          en: '"I will!"',
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
          ],
        },
        {
          id: 'qs-v5-c12-013',
          ar: 'وَذَهَبَ الشَّقِيَّانِ وَجَلَسَا يَنْتَظِرَانِ خُرُوجَ النَّاقَةِ؛',
          en: 'The two wretches went off and sat waiting for the she-camel to come out;',
          tokens: [
            { surface: 'وَذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to go; and went' },
            { surface: 'الشَّقِيَّانِ', lemma: 'شَقِيّ', pos: 'noun', features: 'du.def.nom', root: 'ش ق و', gloss: 'the two wretches' },
            { surface: 'وَجَلَسَا', lemma: 'جَلَسَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to sit; and (the two of them) sat' },
            { surface: 'يَنْتَظِرَانِ', lemma: 'اِنْتَظَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to wait; (the two of them) waiting' },
            { surface: 'خُرُوجَ', lemma: 'خُرُوج', pos: 'noun', features: 'constr.acc', gloss: 'the coming out of' },
            { surface: 'النَّاقَةِ', lemma: 'نَاقَة', pos: 'noun', features: 'def.gen', gloss: 'the she-camel' },
          ],
        },
        {
          id: 'qs-v5-c12-014',
          ar: 'حَتَّى إِذَا خَرَجَتِ النَّاقَةُ رَمَاهَا الْأَوَّلُ بِسَهْمٍ،',
          en: 'until, when the she-camel came out, the first shot it with an arrow,',
          tokens: [
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'until' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'خَرَجَتِ', lemma: 'خَرَجَ', pos: 'verb', features: 'perf.3fs', gloss: 'to come out; came out' },
            { surface: 'النَّاقَةُ', lemma: 'نَاقَة', pos: 'noun', features: 'def.nom', gloss: 'the she-camel' },
            { surface: 'رَمَاهَا', lemma: 'رَمَى', pos: 'verb', features: 'perf.3ms+3fs', root: 'ر م ي', gloss: 'to shoot, throw; shot it' },
            { surface: 'الْأَوَّلُ', lemma: 'أَوَّل', pos: 'noun', features: 'def.nom', gloss: 'the first' },
            { surface: 'بِسَهْمٍ', lemma: 'سَهْم', pos: 'noun', features: 'prep+indef.gen', root: 'س ه م', gloss: 'with an arrow' },
          ],
        },
        {
          id: 'qs-v5-c12-015',
          ar: 'وَنَحَرَهَا الثَّانِي فَقَتَلَهَا.',
          en: 'and the second cut its throat and killed it.',
          tokens: [
            { surface: 'وَنَحَرَهَا', lemma: 'نَحَرَ', pos: 'verb', features: 'conj+perf.3ms+3fs', root: 'ن ح ر', gloss: 'to slaughter, cut the throat of; and cut its throat' },
            { surface: 'الثَّانِي', lemma: 'ثَانِي', pos: 'noun', features: 'def.nom', gloss: 'the second' },
            { surface: 'فَقَتَلَهَا', lemma: 'قَتَلَ', pos: 'verb', features: 'conj+perf.3ms+3fs', gloss: 'to kill; so killed it' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ الْقَوْمُ عَنِ النَّاقَةِ بَعْدَ أَنِ اسْتَكْبَرُوا وَطَغَوْا؟',
          options: ['قَالُوا: لِمَاذَا لَا تَشْرَبُ مَاشِيَتُنَا كُلَّ يَوْمٍ؟', 'قَالُوا: هَذِهِ النَّاقَةُ أَجْمَلُ مِنْ كُلِّ الْمَاشِيَةِ', 'قَالُوا: يَجِبُ أَنْ نُكْرِمَ هَذِهِ النَّاقَةَ'],
          answer: 0,
          qEn: 'What did the people say about the she-camel after they grew arrogant and rebelled?',
          optionsEn: ['They said: Why does our livestock not drink every day?', 'They said: This she-camel is more beautiful than all the livestock', 'They said: We must honor this she-camel'],
        },
        {
          q: 'مِمَّ كَانَ صَالِحٌ قَدْ حَذَّرَ قَوْمَهُ؟',
          options: ['حَذَّرَهُمْ مِنْ أَنْ يُهِينُوا النَّاقَةَ', 'حَذَّرَهُمْ مِنَ السَّفَرِ لَيْلاً', 'حَذَّرَهُمْ مِنْ أَكْلِ الزَّرْعِ'],
          answer: 0,
          qEn: 'What had Ṣāliḥ warned his people against?',
          optionsEn: ['He had warned them not to harm the she-camel', 'He had warned them against traveling at night', 'He had warned them against eating the crops'],
        },
        {
          q: 'كَيْفَ قَتَلَ الرَّجُلَانِ النَّاقَةَ؟',
          options: ['رَمَاهَا الْأَوَّلُ بِسَهْمٍ وَنَحَرَهَا الثَّانِي فَقَتَلَهَا', 'خَنَقَاهَا بِحَبْلٍ', 'أَلْقَيَاهَا مِنْ فَوْقِ الْجَبَلِ'],
          answer: 0,
          qEn: 'How did the two men kill the she-camel?',
          optionsEn: ['The first shot it with an arrow and the second cut its throat and killed it', 'They strangled it with a rope', 'They threw it off the top of the mountain'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَقَالُوا: لِمَاذَا لَا',
        post: 'مَاشِيَتُنَا كُلَّ يَوْمٍ؟',
        en: 'And they said: Why does our livestock not drink every day?',
        options: ['تَشْرَبُ', 'يَشْرَبُ', 'شَرِبَتْ', 'تَشْرَبُونَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular imperfect -- matches مَاشِيَتُنَا ("our livestock"), grammatically feminine.',
          '3rd masculine singular -- wrong gender; مَاشِيَة is feminine.',
          'Perfect -- wrong tense; the complaint is about an ongoing, repeated situation.',
          '2nd person plural -- wrong person; the subject is "our livestock," not "you all."',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ صَالِحٌ قَدْ حَذَّرَهُمْ مِنْ أَنْ',
        post: 'هَذِهِ النَّاقَةَ.',
        en: 'Ṣāliḥ had already warned them not to harm this she-camel.',
        options: ['يُهِينُوا', 'يُهِينُونَ', 'أَهَانُوا', 'يُهِينَ'],
        answer: 0,
        rationales: [
          'Subjunctive imperfect, 3rd masculine plural -- أَنْ requires the subjunctive, which drops the نَ from the plural imperfect.',
          'Indicative imperfect (with نَ) -- wrong mood; أَنْ governs the subjunctive.',
          'Perfect -- wrong tense; أَنْ governs the imperfect, not the perfect.',
          '3rd masculine singular subjunctive -- wrong number; the subject (the people) is plural.',
        ],
      },
      {
        type: 'cloze',
        pre: 'حَتَّى إِذَا خَرَجَتِ النَّاقَةُ رَمَاهَا',
        post: 'بِسَهْمٍ.',
        en: 'until, when the she-camel came out, the first shot it with an arrow.',
        options: ['الْأَوَّلُ', 'الْأَوَّلَ', 'الْأَوَّلِ', 'أَوَّلُ'],
        answer: 0,
        rationales: [
          'Nominative, definite -- subject of رَمَاهَا, matching the printed الْأَوَّلُ.',
          'Accusative -- wrong case; the subject of a verb is nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Indefinite -- wrong definiteness; the text specifies "the first" of the two named men.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَقْتُلُ الرَّجُلُ النَّاقَةَ',
        pre: '',
        post: 'النَّاقَةَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَقْتُلُ', 'يَقْتُلُ', 'تَقْتُلُ', 'نَقْتُلُ'],
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
        base: 'يَقْتُلُ الرَّجُلُ النَّاقَةَ',
        pre: '',
        post: 'النَّاقَةَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَقْتُلُ', 'يَقْتُلُ', 'أَقْتُلُ', 'نَقْتُلُ'],
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
        base: 'يَقْتُلُ الرَّجُلُ النَّاقَةَ',
        pre: '',
        post: 'النَّاقَةَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَقْتُلُونَ', 'يَقْتُلُ', 'تَقْتُلُ', 'نَقْتُلُ'],
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

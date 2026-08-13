// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 25. Printed page 266, from its own boxed
// heading at the very top of the page down to ch26's heading مُشْكِلَة, which
// begins partway down the same page -- that heading box is the visible stop
// boundary for this chapter (ch26 belongs to a different agent's batch).
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md.
//
// Content: a short analytical aside on why the Jews framed their complaint
// to the Roman governor in political rather than religious terms. Their
// talk was calculated -- full of cunning and craftiness, deliberately
// tinged with a political coloring -- because they knew a purely religious
// complaint would not move the Roman rulers, whose own policy was not to
// interfere in Jewish religious affairs. So they mixed their case with
// politics instead, knowing that would actually provoke a response. One
// long periodic sentence in the original, split here at its natural clause
// boundaries per house convention (qasas-v3/chapter-14.js).
//
// Grammar / lexical notes:
//   -- مَمْلُوء (new, "filled") is the passive participle of the verb مَلَأَ
//      ("to fill"); only the participle form actually occurs on this page
//      (كَلَامًا مَمْلُوءًا), so only مَمْلُوء is listed in newWords/lemmas, not
//      the base verb itself, matching the same policy used for تَخَلُّص in
//      qasas-v12/chapter-23.js.
//   -- مَصْبُوغًا ("dyed, tinged," qs-v12-c25-002) is the already-taught
//      passive participle of صَبَغَ (qasas-v2 ch4's صَبَغُوهُ) -- reused here
//      unchanged, not re-listed as new.
//   -- سِيَاسِيّ (new, adjective "political") and دِينِيّ (new, adjective
//      "religious") are both nisbah adjectives distinct from their
//      already-taught underlying nouns سِيَاسَة ("politics") and دِين
//      ("religion") -- noun vs. derived-adjective, same root, separate
//      lemmas per the corpus's convention.
//   -- الْحُكَّامَ (qs-v12-c25-003, "the rulers") is simply the sound plural
//      of the already-taught singular حَاكِم -- same lemma, not re-listed.
//   -- أَثَارَ (new, "to stir up, provoke") is a distinct lemma from the
//      unrelated-looking but same-root-family verbs of unrest used
//      elsewhere in this volume; it does not occur in known-lemmas.txt
//      under any vocalization checked.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, against
//      known-lemmas.txt): كَانَ، مَصْبُوغ، جَانِب، عَرَفَ، أَنَّ، لَا، قَدْ، مِنْ،
//      سِيَاسَة، أَنْ، فِي، ذَلِكَ، حَاكِم
//      are all already taught and are NOT re-listed in newWords here.
//
// 10 new words (مَمْلُوء، دَهَاء، مَكْر، صِبْغَة، سِيَاسِيّ، أَثَارَ، دِينِيّ، هَيَّجَ،
// تَدَخَّلَ، خَلَطَ).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch25',
  title: { ar: 'مَكْرٌ وَدَهَاءٌ', en: 'Cunning and Craftiness' },
  newWords: [
    'مَمْلُوء', 'مَكْر', 'صِبْغَة', 'سِيَاسِيّ', 'أَثَارَ', 'هَيَّجَ',
    'تَدَخَّلَ', 'خَلَطَ',
  ],
  lemmas: {
    مَمْلُوء: { gloss: 'filled' },
    دَهَاء: { gloss: 'craftiness, shrewdness' },
    مَكْر: { gloss: 'cunning, guile' },
    صِبْغَة: { gloss: 'coloring, tinge' },
    سِيَاسِيّ: { gloss: 'political' },
    أَثَارَ: { gloss: 'to stir up, provoke' },
    دِينِيّ: { gloss: 'religious' },
    هَيَّجَ: { gloss: 'to incite, agitate' },
    تَدَخَّلَ: { gloss: 'to interfere, intervene' },
    خَلَطَ: { gloss: 'to mix' },
  },
  paragraphs: [
    {
      en: "It was talk full of cunning and craftiness, tinged with a political coloring. They knew that the religious angle would not stir up or provoke the rulers, since it was their policy not to interfere in the Jews' religious affairs -- and so they mixed their talk with politics instead.",
      sentences: [
        {
          id: 'qs-v12-c25-001',
          ar: 'وَكَانَ كَلَامًا مَمْلُوءًا بِالْمَكْرِ وَالدَّهَاءِ،',
          en: 'It was talk full of cunning and craftiness,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'كَلَامًا', lemma: 'كَلَام', pos: 'noun', features: 'indef.acc', gloss: 'speech, talk' },
            { surface: 'مَمْلُوءًا', lemma: 'مَمْلُوء', pos: 'adj', features: 'indef.acc', root: 'م ل أ', gloss: 'filled' },
            { surface: 'بِالْمَكْرِ', lemma: 'مَكْر', pos: 'noun', features: 'prep+def.gen', gloss: 'with cunning' },
            { surface: 'وَالدَّهَاءِ', lemma: 'دَهَاء', pos: 'noun', features: 'conj+def.gen', gloss: 'and craftiness' },
          ],
        },
        {
          id: 'qs-v12-c25-002',
          ar: 'مَصْبُوغًا بِالصِّبْغَةِ السِّيَاسِيَّةِ،',
          en: 'tinged with a political coloring,',
          tokens: [
            { surface: 'مَصْبُوغًا', lemma: 'مَصْبُوغ', pos: 'adj', features: 'indef.acc', gloss: 'dyed, tinged' },
            { surface: 'بِالصِّبْغَةِ', lemma: 'صِبْغَة', pos: 'noun', features: 'prep+def.gen', gloss: 'with the coloring' },
            { surface: 'السِّيَاسِيَّةِ', lemma: 'سِيَاسِيّ', pos: 'adj', features: 'def.gen.f', gloss: 'political' },
          ],
        },
        {
          id: 'qs-v12-c25-003',
          ar: 'وَكَانُوا يَعْرِفُونَ أَنَّ الْجَانِبَ الدِّينِيَّ لَا يُثِيرُ الْحُكَّامَ',
          en: 'They knew that the religious angle would not stir up the rulers',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they were' },
            { surface: 'يَعْرِفُونَ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3mp', gloss: 'to know; knowing' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْجَانِبَ', lemma: 'جَانِب', pos: 'noun', features: 'def.acc', gloss: 'the aspect, side' },
            { surface: 'الدِّينِيَّ', lemma: 'دِينِيّ', pos: 'adj', features: 'def.acc', gloss: 'religious' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُثِيرُ', lemma: 'أَثَارَ', pos: 'verb', features: 'impf.3ms', gloss: 'to stir up, provoke; provokes' },
            { surface: 'الْحُكَّامَ', lemma: 'حَاكِم', pos: 'noun', features: 'def.acc.pl', gloss: 'the rulers' },
          ],
        },
        {
          id: 'qs-v12-c25-004',
          ar: 'وَلَا يُهَيِّجُهُمْ،',
          en: 'or agitate them,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُهَيِّجُهُمْ', lemma: 'هَيَّجَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to incite, agitate; agitates them' },
          ],
        },
        {
          id: 'qs-v12-c25-005',
          ar: 'فَقَدْ كَانَ مِنْ سِيَاسَتِهِمْ',
          en: 'since it was part of their policy',
          tokens: [
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'for indeed' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; it was' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'part of' },
            { surface: 'سِيَاسَتِهِمْ', lemma: 'سِيَاسَة', pos: 'noun', features: 'gen+3mp', gloss: 'their policy' },
          ],
        },
        {
          id: 'qs-v12-c25-006',
          ar: 'أَنْ لَا يَتَدَخَّلُوا فِي أُمُورِ الْيَهُودِ الدِّينِيَّةِ،',
          en: "not to interfere in the Jews' religious affairs,",
          tokens: [
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتَدَخَّلُوا', lemma: 'تَدَخَّلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to interfere; interfere' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أُمُورِ', lemma: 'أَمْر', pos: 'noun', features: 'pl.constr.gen', gloss: 'the affairs of' },
            { surface: 'الْيَهُودِ', lemma: 'يَهُود', pos: 'proper', features: 'def.gen', gloss: 'the Jews' },
            { surface: 'الدِّينِيَّةِ', lemma: 'دِينِيّ', pos: 'adj', features: 'def.gen.f', gloss: 'religious' },
          ],
        },
        {
          id: 'qs-v12-c25-007',
          ar: 'وَلِذَلِكَ خَلَطُوا الْكَلَامَ بِالسِّيَاسَةِ.',
          en: 'and so they mixed their talk with politics instead.',
          tokens: [
            { surface: 'وَلِذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'conj+prep+dem.m', gloss: 'and therefore' },
            { surface: 'خَلَطُوا', lemma: 'خَلَطَ', pos: 'verb', features: 'perf.3mp', gloss: 'to mix; mixed' },
            { surface: 'الْكَلَامَ', lemma: 'كَلَام', pos: 'noun', features: 'def.acc', gloss: 'the speech' },
            { surface: 'بِالسِّيَاسَةِ', lemma: 'سِيَاسَة', pos: 'noun', features: 'prep+def.gen', gloss: 'with politics' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَ كَانَ كَلَامُ الْيَهُودِ مَمْلُوءًا؟',
          options: ['بِالْمَكْرِ وَالدَّهَاءِ وَمَصْبُوغًا بِالصِّبْغَةِ السِّيَاسِيَّةِ', 'بِالصِّدْقِ وَالْإِخْلَاصِ', 'بِالْعِلْمِ وَالْحِكْمَةِ فَقَطْ'],
          answer: 0,
          qEn: "What was the Jews' talk full of?",
          optionsEn: ['Cunning and craftiness, tinged with a political coloring', 'Truthfulness and sincerity', 'Only knowledge and wisdom'],
        },
        {
          q: 'لِمَاذَا خَلَطَ الْيَهُودُ كَلَامَهُمْ بِالسِّيَاسَةِ عِنْدَ الْحَاكِمِ؟',
          options: ['لِأَنَّهُمْ عَرَفُوا أَنَّ الْجَانِبَ الدِّينِيَّ لَا يُثِيرُ الْحُكَّامَ، وَكَانَ مِنْ سِيَاسَتِهِمْ أَلَّا يَتَدَخَّلُوا فِي أُمُورِ الْيَهُودِ الدِّينِيَّةِ', 'لِأَنَّهُمْ لَمْ يَكُونُوا يَعْرِفُونَ شَيْئًا عَنِ الدِّينِ', 'لِأَنَّ الْحَاكِمَ طَلَبَ مِنْهُمْ ذَلِكَ'],
          answer: 0,
          qEn: 'Why did the Jews mix their talk with politics before the governor?',
          optionsEn: ['Because they knew the religious angle would not stir the rulers, and it was their policy not to interfere in the Jews’ religious affairs', 'Because they knew nothing about religion', 'Because the governor asked them to'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ كَلَامًا مَمْلُوءًا',
        post: 'وَالدَّهَاءِ.',
        en: 'It was talk full of cunning and craftiness.',
        options: ['بِالْمَكْرِ', 'بِالْمَكْرَ', 'بِالْمَكْرُ', 'الْمَكْرُ'],
        answer: 0,
        rationales: [
          'Genitive after بِ -- object of the preposition, matching the printed بِالْمَكْرِ.',
          'Accusative -- wrong case; a preposition requires the genitive.',
          'Nominative -- wrong case for the same reason.',
          'Missing the preposition بِ entirely -- wrong construction.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانُوا',
        post: 'أَنَّ الْجَانِبَ الدِّينِيَّ لَا يُثِيرُ الْحُكَّامَ.',
        en: 'They knew that the religious angle would not stir the rulers.',
        options: ['يَعْرِفُونَ', 'يَعْرِفُ', 'عَرَفُوا', 'تَعْرِفُونَ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine plural -- with كَانُوا forms the "used to know" construction, agreeing with the plural subject.',
          '3rd masculine singular -- wrong number; the subject (the Jews) is plural.',
          'Perfect -- wrong tense; كَانَ + imperfect is needed for the ongoing "used to" sense.',
          '2nd masculine plural -- wrong person; the sentence describes "they," not "you."',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَقَدْ كَانَ مِنْ سِيَاسَتِهِمْ أَنْ لَا',
        post: 'فِي أُمُورِ الْيَهُودِ الدِّينِيَّةِ.',
        en: "It was their policy not to interfere in the Jews' religious affairs.",
        options: ['يَتَدَخَّلُوا', 'يَتَدَخَّلَ', 'تَتَدَخَّلُوا', 'يَتَدَخَّلُونَ'],
        answer: 0,
        rationales: [
          'Subjunctive, 3rd masculine plural, after أَنْ -- agrees with the plural rulers and matches the printed form.',
          '3rd masculine singular -- wrong number.',
          '2nd masculine plural -- wrong person; the sentence describes "they," not "you."',
          'Indicative rather than subjunctive -- wrong mood after أَنْ.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَعْرِفُ الْحَاكِمُ ذَلِكَ',
        pre: '',
        post: 'ذَلِكَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَعْرِفُونَ', 'يَعْرِفُ', 'تَعْرِفُ', 'نَعْرِفُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd masculine singular / 3rd feminine singular -- wrong person or gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْرِفُ الْحَاكِمُ ذَلِكَ',
        pre: '',
        post: 'ذَلِكَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَعْرِفُ', 'يَعْرِفُ', 'تَعْرِفُ', 'نَعْرِفُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; the target is "I," not "you."',
          '1st plural -- wrong number; the target is singular.',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْرِفُ الْحَاكِمُ ذَلِكَ',
        pre: '',
        post: 'ذَلِكَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَعْرِفُ', 'يَعْرِفُ', 'تَعْرِفُ', 'أَعْرِفُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person; the target is "we," not "you."',
          '1st singular -- wrong number; the target is plural.',
        ],
      },
    ],
  },
};

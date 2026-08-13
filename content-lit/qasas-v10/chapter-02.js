// قَصَصُ النَّبِيِّينَ, volume 10 «قِصَّةُ سَيِّدِنَا أَيُّوبَ وَسَيِّدِنَا يُونُسَ»,
// chapter 2 -- صَبْرُ أَيُّوبَ. Printed page 238, top box only -- a single
// short paragraph ending before ch3's heading مِحْنَةٌ وَمِنْحَةٌ partway down
// the same page. Transcribed by hand from the scan (vision OCR, 300dpi
// render) against ../CHAPTER-FORMAT.md.
//
// One sentence, describing Ayyūb's patience through the trial: no
// complaint, no reproach, no discontent, no anger -- for many long years.
//
// Grammar / lexical notes:
//   -- The printed paragraph is one long sentence with only one internal
//      comma; split here into five shorter entries at natural clause
//      boundaries (house convention, matching qasas-v3 ch7/ch9/ch10/ch12/
//      ch13 -- see that chapter's header note) so each stays within the
//      3-9 token build-stage window: the four parallel لَا + imperfect
//      negations are paired two-by-two (qs-v10-c02-003/004) since each
//      alone is only 2 tokens (below the 3-token floor) and thus not
//      build-eligible on its own -- no reordering or rewording, just
//      regrouping the same printed words.
//   -- طِوَالاً (qs-v10-c02-005) is the broken plural of the already-known
//      طَوِيل ("long," qasas-v1/-v2/-v3), agreeing with the plural سِنِينَ --
//      tagged lemma طَوِيل, features pl.indef.acc, not a separate lemma.
//   -- شَاكِراً (qs-v10-c02-001) reuses شَاكِر, taught two chapters ago at
//      ch1 of this same volume -- not re-listed in newWords here.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ، ذَلِكَ، كُلّ،
//      صَابِر، شَاكِر (this volume, ch1)، لِسَان (ch1)، ذِكْر، شُكْر، لَا،
//      شَكَا، غَضِبَ، عَلَى، سَنَة، طَوِيل
//      are all already taught and are NOT re-listed in newWords here.
//
// 5 new words (رَغْم، لَهِجَ، تَعَتَّبَ، تَذَمَّرَ، دَامَ).
//
// No page footnotes (book_note) for this chapter's box.
export const CHAPTER = {
  id: 'ch2',
  title: { ar: 'صَبْرُ أَيُّوبَ', en: 'The Patience of Ayyūb' },
  newWords: ['رَغْم', 'لَهِجَ', 'تَعَتَّبَ', 'تَذَمَّرَ', 'دَامَ'],
  lemmas: {
    'رَغْم': { gloss: 'despite, in spite of' },
    'لَهِجَ': { gloss: 'to be constantly occupied with, murmur' },
    'تَعَتَّبَ': { gloss: 'to grumble, reproach' },
    'تَذَمَّرَ': { gloss: 'to murmur in discontent' },
    'دَامَ': { gloss: 'to last, continue' },
  },
  paragraphs: [
    {
      en: 'And despite all that, he remained patient and grateful, his tongue murmuring in remembrance and thanks -- not complaining, not grumbling, not murmuring in discontent, and not growing angry; and he continued so for many long years.',
      sentences: [
        {
          id: 'qs-v10-c02-001',
          ar: 'وَكَانَ رَغْمَ ذَلِكَ كُلِّهِ صَابِراً شَاكِراً،',
          en: 'And despite all that he remained patient and grateful,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and he remained' },
            { surface: 'رَغْمَ', lemma: 'رَغْم', pos: 'prep', features: 'prep', gloss: 'despite, in spite of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'كُلِّهِ', lemma: 'كُلّ', pos: 'noun', features: 'gen+3ms', gloss: 'all of it' },
            { surface: 'صَابِراً', lemma: 'صَابِر', pos: 'adj', features: 'indef.acc', gloss: 'patient' },
            { surface: 'شَاكِراً', lemma: 'شَاكِر', pos: 'adj', features: 'indef.acc', gloss: 'grateful, thankful' },
          ],
        },
        {
          id: 'qs-v10-c02-002',
          ar: 'يَلْهَجُ لِسَانُهُ بِالذِّكْرِ وَالشُّكْرِ،',
          en: 'his tongue murmuring in remembrance and thanks,',
          tokens: [
            { surface: 'يَلْهَجُ', lemma: 'لَهِجَ', pos: 'verb', features: 'impf.3ms', root: 'ل ه ج', gloss: 'to be constantly occupied with; murmuring' },
            { surface: 'لِسَانُهُ', lemma: 'لِسَان', pos: 'noun', features: 'nom+3ms', gloss: 'his tongue' },
            { surface: 'بِالذِّكْرِ', lemma: 'ذِكْر', pos: 'noun', features: 'prep+def.gen', gloss: 'with remembrance' },
            { surface: 'وَالشُّكْرِ', lemma: 'شُكْر', pos: 'noun', features: 'conj+def.gen', gloss: 'and gratitude' },
          ],
        },
        {
          id: 'qs-v10-c02-003',
          ar: 'لَا يَشْكُو وَلَا يَتَعَتَّبُ،',
          en: 'not complaining, and not grumbling,',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَشْكُو', lemma: 'شَكَا', pos: 'verb', features: 'impf.3ms', gloss: 'to complain; complaining' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَتَعَتَّبُ', lemma: 'تَعَتَّبَ', pos: 'verb', features: 'impf.3ms', root: 'ع ت ب', gloss: 'to grumble, reproach; grumbling' },
          ],
        },
        {
          id: 'qs-v10-c02-004',
          ar: 'وَلَا يَتَذَمَّرُ وَلَا يَغْضَبُ،',
          en: 'not murmuring in discontent, and not growing angry,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَتَذَمَّرُ', lemma: 'تَذَمَّرَ', pos: 'verb', features: 'impf.3ms', root: 'ذ م ر', gloss: 'to murmur in discontent; murmuring' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَغْضَبُ', lemma: 'غَضِبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to become angry; growing angry' },
          ],
        },
        {
          id: 'qs-v10-c02-005',
          ar: 'وَدَامَ عَلَى ذَلِكَ سِنِينَ طِوَالاً.',
          en: 'and he continued so for many long years.',
          tokens: [
            { surface: 'وَدَامَ', lemma: 'دَامَ', pos: 'verb', features: 'conj+perf.3ms', root: 'د و م', gloss: 'to last, continue; and he continued' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in, upon (so)' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'سِنِينَ', lemma: 'سَنَة', pos: 'noun', features: 'pl.acc', gloss: 'years' },
            { surface: 'طِوَالاً', lemma: 'طَوِيل', pos: 'adj', features: 'pl.indef.acc', gloss: 'long' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ أَيُّوبُ رَغْمَ الابْتِلَاءِ؟',
          options: ['صَابِراً شَاكِراً يَذْكُرُ اللَّهَ دَائِماً', 'غَاضِباً مِنَ اللَّهِ', 'يَائِساً مِنَ الرَّحْمَةِ'],
          answer: 0,
          qEn: 'How was Ayyūb despite the trial?',
          optionsEn: ['Patient and grateful, constantly remembering Allah', 'Angry at Allah', 'Despairing of mercy'],
        },
        {
          q: 'هَلْ كَانَ أَيُّوبُ يَشْكُو أَوْ يَغْضَبُ؟',
          options: ['لَا، لَمْ يَكُنْ يَشْكُو وَلَا يَغْضَبُ', 'نَعَمْ، كَانَ يَشْكُو كَثِيراً', 'كَانَ يَغْضَبُ أَحْيَاناً'],
          answer: 0,
          qEn: 'Did Ayyūb complain or grow angry?',
          optionsEn: ['No, he neither complained nor grew angry', 'Yes, he complained often', 'He grew angry sometimes'],
        },
        {
          q: 'كَمْ مِنَ الزَّمَنِ دَامَ أَيُّوبُ عَلَى هَذَا الصَّبْرِ؟',
          options: ['سِنِينَ طِوَالاً', 'أَيَّاماً قَلِيلَةً', 'شَهْراً وَاحِداً'],
          answer: 0,
          qEn: 'How long did Ayyūb continue in this patience?',
          optionsEn: ['Many long years', 'A few days', 'A single month'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'كَانَ صَابِراً شَاكِراً،',
        post: 'لِسَانُهُ بِالذِّكْرِ وَالشُّكْرِ.',
        en: 'He was patient and grateful, his tongue murmuring in remembrance and thanks.',
        options: ['يَلْهَجُ', 'لَهِجَ', 'تَلْهَجُ', 'لَاهِج'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect -- "murmuring," matching the printed يَلْهَجُ.',
          'Perfect -- wrong tense; the sentence describes an ongoing state.',
          '2nd/3rd feminine singular -- wrong form for this subject.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'لَا',
        post: 'وَلَا يَتَعَتَّبُ.',
        en: 'He does not complain, nor does he grumble.',
        options: ['يَشْكُو', 'شَكَا', 'تَشْكُو', 'شَاكٍ'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect -- matches the printed لَا يَشْكُو.',
          'Perfect -- wrong tense; the sentence describes an ongoing habit.',
          '2nd/3rd feminine singular -- wrong person and gender.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَدَامَ عَلَى ذَلِكَ',
        post: 'طِوَالاً.',
        en: 'And he continued so for many long years.',
        options: ['سِنِينَ', 'سَنَةً', 'سَنَوَاتٌ', 'سِنِينِ'],
        answer: 0,
        rationales: [
          'Accusative plural -- adverbial accusative of duration, matching the printed سِنِينَ.',
          'Singular -- wrong number; the sentence uses the plural.',
          'Nominative plural -- wrong case; duration here is accusative, not nominative.',
          'Genitive plural -- wrong case; nothing here governs the genitive.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَشْكُو الرَّجُلُ دَائِماً',
        pre: '',
        post: 'الرَّجُلُ دَائِماً',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَشْكُو', 'يَشْكُو', 'تَشْكُو', 'نَشْكُو'],
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
        base: 'يَشْكُو الرَّجُلُ دَائِماً',
        pre: '',
        post: 'الرَّجُلُ دَائِماً',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَشْكُو', 'يَشْكُو', 'أَشْكُو', 'نَشْكُو'],
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
        base: 'يَشْكُو الرَّجُلُ دَائِماً',
        pre: '',
        post: 'الرَّجُلُ دَائِماً',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَشْكُونَ', 'يَشْكُو', 'تَشْكُو', 'نَشْكُو'],
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

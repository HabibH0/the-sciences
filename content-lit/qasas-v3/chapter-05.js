// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 5 -- صُوَرُ
// الصَّالِحِينَ. Printed page 65 only (from the heading, right after ch4's
// closing lines on the same page, through the bottom of the page) --
// ends before ch6's heading مِنَ الصُّوَرِ إِلَى التَّمَاثِيلِ, which opens
// page 66. Transcribed by hand from the scan (vision OCR, 300dpi render)
// against ../CHAPTER-FORMAT.md.
//
// The Devil, having primed the people's grief and longing in ch4, now walks
// them step by step into his real proposal: since they can no longer look
// at the righteous men themselves, let them make images of them to look at
// instead. The people are taken with the idea and comply -- the first,
// still-innocent-seeming step of the slide that ch6/ch7 (already visible in
// their own headings, "from images to statues," "from statues to idols")
// will carry all the way to idol-worship.
//
// Grammar / lexical notes:
//   -- أُعْجِبَ (qs-v3-c05-008) is the passive of a NEW form IV verb أَعْجَبَ
//      ("to please, impress"), tagged with the base active lemma per the
//      established passive convention (قِيلَ -> lemma قَالَ, qasas-v3 ch1);
//      features 'pass+perf.3ms'. أُعْجِبَ بِ- is the fixed idiom "was taken
//      with, impressed by."
//   -- صُورَة (qs-v3-c05-007/009, plural صُوَر/الصُّوَر) and صَوَّرَ
//      (qs-v3-c05-008) share the root ص و ر but are tagged as distinct
//      noun/verb lemmas, matching the established
//      verb/noun-despite-shared-root pattern (ذِكْر/ذَكَرَ, qasas-v3 ch4).
//   -- عَمِلَ (qs-v3-c05-007, اِعْمَلُوا) turns out not to have been taught
//      anywhere in the corpus yet despite its frequency in ordinary speech
//      -- confirmed genuinely new via grep, not an oversight.
//   -- أُولَئِكَ (qs-v3-c05-009) reuses the demonstrative just introduced in
//      ch4; هَؤُلَاءِ does not appear in this chapter.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَالَ، الشَّيْطَانُ، كَيْفَ،
//      حُزْن، عَلَى، شَدِيد، إِلَى، عَظِيم، لِمَاذَا، لَا، نَظَرَ، كُلّ، يَوْم، سَبِيل،
//      ذَلِكَ، قَدْ، مَاتَ، لِ، النَّاس، رَأْي، إِبْلِيس، صَالِح، كَانَ، هَذِهِ، إِذَا،
//      رَأَى، ذَكَرَ، أُولَئِكَ
//      are all already taught and are NOT re-listed in newWords here.
//
// 6 new words (اِشْتِيَاق، صُورَة، أَعْجَبَ، صَوَّرَ، صَبَاح، عَمِلَ).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch5',
  title: { ar: 'صُوَرُ الصَّالِحِينَ', en: 'Images of the Righteous' },
  newWords: ['اِشْتِيَاق', 'صُورَة', 'أَعْجَبَ', 'صَوَّرَ', 'صَبَاح', 'عَمِلَ'],
  lemmas: {
    اِشْتِيَاق: { gloss: 'longing, yearning' },
    صُورَة: { gloss: 'image, picture' },
    أَعْجَبَ: { gloss: 'to please, impress (passive: to be taken with, impressed by)' },
    صَوَّرَ: { gloss: 'to make an image of, depict' },
    صَبَاح: { gloss: 'morning' },
    عَمِلَ: { gloss: 'to do, make' },
  },
  paragraphs: [
    {
      lines: true,
      en: "The Devil asks: how deep is their grief, their longing? When they admit it is intense, he asks why they don't look at these men every day -- but how, they object, when they've died? His answer: make images of them, and look at the images every morning. The people are taken with Iblīs's idea and make images of the righteous, looking at them daily -- and every time they see the images, they remember those righteous men.",
      sentences: [
        {
          id: 'qs-v3-c05-001',
          ar: 'قَالَ الشَّيْطَانُ: فَكَيْفَ حُزْنُكُمْ عَلَيْهِمْ؟',
          en: 'The Devil said: "So how is your grief for them?"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'الشَّيْطَانُ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.nom', root: 'ش ط ن', gloss: 'the Devil' },
            { surface: 'فَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'so how' },
            { surface: 'حُزْنُكُمْ', lemma: 'حُزْن', pos: 'noun', features: 'nom+2mp', root: 'ح ز ن', gloss: 'your grief' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'for, over them' },
          ],
        },
        {
          id: 'qs-v3-c05-002',
          ar: 'قَالُوا: شَدِيدٌ.',
          en: 'They said: "Intense."',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; they said' },
            { surface: 'شَدِيدٌ', lemma: 'شَدِيد', pos: 'adj', features: 'indef.nom', gloss: 'intense' },
          ],
        },
        {
          id: 'qs-v3-c05-003',
          ar: 'قَالَ: وَكَيْفَ اشْتِيَاقُكُمْ إِلَيْهِمْ؟',
          en: 'He said: "And how is your longing for them?"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'اشْتِيَاقُكُمْ', lemma: 'اِشْتِيَاق', pos: 'noun', features: 'nom+2mp', root: 'ش و ق', gloss: 'your longing' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'for, toward them' },
          ],
        },
        {
          id: 'qs-v3-c05-004',
          ar: 'قَالُوا: عَظِيمٌ!',
          en: 'They said: "Great!"',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; they said' },
            { surface: 'عَظِيمٌ', lemma: 'عَظِيم', pos: 'adj', features: 'indef.nom', root: 'ع ظ م', gloss: 'great' },
          ],
        },
        {
          id: 'qs-v3-c05-005',
          ar: 'قَالَ: وَلِمَاذَا لَا تَنْظُرُونَ إِلَيْهِمْ كُلَّ يَوْمٍ؟',
          en: 'He said: "Then why don\'t you look at them every day?"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'وَلِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'conj+adv', gloss: 'and why' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَنْظُرُونَ', lemma: 'نَظَرَ', pos: 'verb', features: 'impf.2mp', gloss: 'to look; you look' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'at them' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', root: 'ك ل ل', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يَوْم', pos: 'noun', features: 'indef.gen', gloss: 'day' },
          ],
        },
        {
          id: 'qs-v3-c05-006',
          ar: 'قَالُوا: وَكَيْفَ السَّبِيلُ إِلَى ذَلِكَ وَقَدْ مَاتُوا؟',
          en: 'They said: "But how is there a way to that, when they have died?"',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; they said' },
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'السَّبِيلُ', lemma: 'سَبِيل', pos: 'noun', features: 'def.nom', gloss: 'the way' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'when, given that' },
            { surface: 'مَاتُوا', lemma: 'مَاتَ', pos: 'verb', features: 'perf.3mp', root: 'م و ت', gloss: 'to die; they have died' },
          ],
        },
        {
          id: 'qs-v3-c05-007',
          ar: 'قَالَ: اِعْمَلُوا لَهُمْ صُوَرًا وَانْظُرُوا إِلَيْهَا كُلَّ صَبَاحٍ.',
          en: 'He said: "Make images of them, and look at them every morning."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'اِعْمَلُوا', lemma: 'عَمِلَ', pos: 'verb', features: 'imp.2mp', root: 'ع م ل', gloss: 'to do, make; make!' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'صُوَرًا', lemma: 'صُورَة', pos: 'noun', features: 'pl.indef.acc', root: 'ص و ر', gloss: 'images' },
            { surface: 'وَانْظُرُوا', lemma: 'نَظَرَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to look; and look!' },
            { surface: 'إِلَيْهَا', lemma: 'إِلَى', pos: 'prep', features: 'prep+3fs', gloss: 'at them (f.)' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', root: 'ك ل ل', gloss: 'every' },
            { surface: 'صَبَاحٍ', lemma: 'صَبَاح', pos: 'noun', features: 'indef.gen', root: 'ص ب ح', gloss: 'morning' },
          ],
        },
        {
          id: 'qs-v3-c05-008',
          ar: 'وَأُعْجِبَ النَّاسُ بِرَأْيِ إِبْلِيسَ وَصَوَّرُوا الصَّالِحِينَ',
          en: "The people were taken with Iblīs's idea and made images of the righteous men",
          tokens: [
            { surface: 'وَأُعْجِبَ', lemma: 'أَعْجَبَ', pos: 'verb', features: 'conj+pass+perf.3ms', root: 'ع ج ب', gloss: 'to please, impress; and was pleased, taken with' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'بِرَأْيِ', lemma: 'رَأْي', pos: 'noun', features: 'prep+gen.constr', gloss: 'by the opinion, idea of' },
            { surface: 'إِبْلِيسَ', lemma: 'إِبْلِيس', pos: 'proper', features: 'gen', gloss: 'Iblīs' },
            { surface: 'وَصَوَّرُوا', lemma: 'صَوَّرَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ص و ر', gloss: 'to make an image of; and made images of' },
            { surface: 'الصَّالِحِينَ', lemma: 'صَالِح', pos: 'adj', features: 'def.acc.pl', gloss: 'the righteous' },
          ],
        },
        {
          id: 'qs-v3-c05-009',
          ar: 'وَكَانُوا يَنْظُرُونَ إِلَى هَذِهِ الصُّوَرِ كُلَّ يَوْمٍ، وَإِذَا رَأَوْهَا ذَكَرُوا أُولَئِكَ الصَّالِحِينَ.',
          en: 'They used to look at these images every day, and whenever they saw them, they remembered those righteous men.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and they were' },
            { surface: 'يَنْظُرُونَ', lemma: 'نَظَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to look; they look' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الصُّوَرِ', lemma: 'صُورَة', pos: 'noun', features: 'def.gen.pl', root: 'ص و ر', gloss: 'the images' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', root: 'ك ل ل', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يَوْم', pos: 'noun', features: 'indef.gen', gloss: 'day' },
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and whenever' },
            { surface: 'رَأَوْهَا', lemma: 'رَأَى', pos: 'verb', features: 'perf.3mp+3fs', gloss: 'to see; they saw it' },
            { surface: 'ذَكَرُوا', lemma: 'ذَكَرَ', pos: 'verb', features: 'perf.3mp', root: 'ذ ك ر', gloss: 'to remember; they remembered' },
            { surface: 'أُولَئِكَ', lemma: 'أُولَئِكَ', pos: 'dem', features: 'dem.pl', gloss: 'those' },
            { surface: 'الصَّالِحِينَ', lemma: 'صَالِح', pos: 'adj', features: 'def.acc.pl', gloss: 'the righteous' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا اقْتَرَحَ الشَّيْطَانُ عَلَى النَّاسِ بَعْدَ أَنْ ذَكَرُوا حُزْنَهُمْ وَاشْتِيَاقَهُمْ؟',
          options: [
            'أَنْ يَعْمَلُوا صُوَرًا لِلصَّالِحِينَ وَيَنْظُرُوا إِلَيْهَا كُلَّ صَبَاحٍ',
            'أَنْ يَبْنُوا لَهُمْ بُيُوتًا كَبِيرَةً',
            'أَنْ يَنْسَوْهُمْ وَلَا يَذْكُرُوهُمْ',
          ],
          answer: 0,
          qEn: 'What did the Devil suggest to the people after they described their grief and longing?',
          optionsEn: [
            'That they make images of the righteous men and look at them every morning',
            'That they build them large houses',
            'That they forget them and not remember them',
          ],
        },
        {
          q: 'كَيْفَ اسْتَقْبَلَ النَّاسُ رَأْيَ إِبْلِيسَ؟',
          options: [
            'أُعْجِبُوا بِهِ وَصَوَّرُوا الصَّالِحِينَ',
            'رَفَضُوهُ وَشَتَمُوا إِبْلِيسَ',
            'خَافُوا مِنْهُ وَهَرَبُوا',
          ],
          answer: 0,
          qEn: "How did the people receive Iblīs's idea?",
          optionsEn: [
            'They were taken with it and made images of the righteous men',
            'They rejected it and cursed Iblīs',
            'They were afraid of it and fled',
          ],
        },
        {
          q: 'مَاذَا كَانَ النَّاسُ يَفْعَلُونَ إِذَا رَأَوُا الصُّوَرَ؟',
          options: [
            'يَذْكُرُونَ أُولَئِكَ الصَّالِحِينَ',
            'يَكْسِرُونَ الصُّوَرَ',
            'يَبِيعُونَ الصُّوَرَ',
          ],
          answer: 0,
          qEn: 'What did the people do whenever they saw the images?',
          optionsEn: [
            'They remembered those righteous men',
            'They broke the images',
            'They sold the images',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالَ: وَلِمَاذَا لَا',
        post: 'إِلَيْهِمْ كُلَّ يَوْمٍ؟',
        en: 'He said: "Then why don\'t you look at them every day?"',
        options: ['تَنْظُرُونَ', 'نَظَرْتُمْ', 'تَنْظُرَنَّ', 'نَاظِرُونَ'],
        answer: 0,
        rationales: [
          'Imperfect indicative, 2nd masculine plural -- "you look," matching لَا for a present-tense question.',
          'Perfect -- wrong tense; the Devil is asking about a habit they could start, not one already done.',
          'Energetic mood -- wrong; nothing here calls for emphasis of that kind.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'النَّاسُ بِرَأْيِ إِبْلِيسَ وَصَوَّرُوا الصَّالِحِينَ',
        en: "The people were taken with Iblīs's idea and made images of the righteous men",
        options: ['أُعْجِبَ', 'أَعْجَبَ', 'يُعْجِبُ', 'مُعْجَب'],
        answer: 0,
        rationales: [
          'Passive perfect, 3rd masculine singular -- "was pleased, taken with," matching the intransitive sense needed with بِرَأْيِ.',
          'Active perfect -- wrong voice; this would mean "pleased," with the people as the one doing the pleasing.',
          'Active imperfect -- wrong tense and voice.',
          'Passive participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَإِذَا رَأَوْهَا',
        post: 'أُولَئِكَ الصَّالِحِينَ.',
        en: 'and whenever they saw them, they remembered those righteous men.',
        options: ['ذَكَرُوا', 'يَذْكُرُونَ', 'ذَكَرَ', 'اُذْكُرُوا'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- "they remembered," matching رَأَوْهَا\'s tense in this إِذَا-clause.',
          'Imperfect -- wrong tense; breaks the parallel with the perfect رَأَوْهَا.',
          '3rd masculine singular -- wrong number; the subject is plural (they).',
          'Imperative -- wrong mood; this is a narrated fact, not a command.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُصَوِّرُ الرَّجُلُ صَدِيقَهُ',
        pre: '',
        post: 'صَدِيقَهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُصَوِّرُ', 'يُصَوِّرُ', 'تُصَوِّرُ', 'نُصَوِّرُ'],
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
        base: 'يُصَوِّرُ الرَّجُلُ صَدِيقَهُ',
        pre: '',
        post: 'صَدِيقَهُ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تُصَوِّرُ', 'يُصَوِّرُ', 'أُصَوِّرُ', 'نُصَوِّرُ'],
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
        base: 'يُصَوِّرُ الرَّجُلُ صَدِيقَهُ',
        pre: '',
        post: 'صَدِيقَهُ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يُصَوِّرُونَ', 'يُصَوِّرُ', 'تُصَوِّرُ', 'نُصَوِّرُ'],
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

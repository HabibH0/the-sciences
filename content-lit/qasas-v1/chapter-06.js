// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 6 -- نَارٌ بَارِدَةٌ.
// Printed pages 14-15. Transcribed by hand from the scan (vision OCR, 300dpi
// render) against QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// Two Qurʾānic quotations (21:68 «حَرِّقُوهُ وَانصُرُوا ءَالِهَتَكُمْ» and 21:69
// «يَٰنَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ») -- sentences
// qs-v1-c06-008/009 and -013 through -016. Each is split into fragments of
// at most 2 tokens (per QASAS_AGENT_BRIEF.md §6's workaround, same as ch4-5)
// so none is build-eligible; note that a 3-token split of 21:69 was tried
// first and rejected -- «كُونِي بَرْدًا» plus a vocative نَارُ still carries a
// real (non-artifactual) case/bināʾ mark, so it had to be split further to
// stay safely under the 3-token threshold. Do not merge these back or pull
// them into a workshop frame.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch6',
  title: { ar: 'نَارٌ بَارِدَةٌ', en: 'A Cool Fire' },
  newWords: [
    'اِجْتَمَعَ', 'عِقَاب', 'جَزَاء', 'جَوَاب', 'حَرَّقَ', 'نَصَرَ', 'أَوْقَدَ',
    'نَار', 'أَلْقَى', 'بَرْد', 'سَلَام', 'سَالِم', 'تَحَيَّرَ', 'أَهَانَ',
  ],
  lemmas: {
    'اِجْتَمَعَ': { gloss: 'to gather' },
    'عِقَاب': { gloss: 'punishment' },
    'جَزَاء': { gloss: 'recompense, penalty' },
    'جَوَاب': { gloss: 'answer' },
    'حَرَّقَ': { gloss: 'to burn' },
    'نَصَرَ': { gloss: 'to help, support' },
    'أَوْقَدَ': { gloss: 'to kindle' },
    'نَار': { gloss: 'fire' },
    'أَلْقَى': { gloss: 'to throw, cast' },
    'بَرْد': { gloss: 'cold, coolness' },
    'سَلَام': { gloss: 'peace, safety' },
    'سَالِم': { gloss: 'safe, unharmed' },
    'تَحَيَّرَ': { gloss: 'to be bewildered' },
    'أَهَانَ': { gloss: 'to insult, disgrace' },
    'هَكَذَا': { gloss: 'thus, like this' },
  },
  paragraphs: [
    {
      en: 'The people gathered and said: What shall we do? Ibrāhīm has broken the idols and insulted the gods! And the people asked: What is Ibrāhīm\'s punishment? What is Ibrāhīm\'s penalty?',
      sentences: [
        {
          id: 'qs-v1-c06-001',
          ar: 'اجْتَمَعَ النَّاسُ وَقَالُوا:',
          en: 'The people gathered and said:',
          tokens: [
            { surface: 'اجْتَمَعَ', lemma: 'اِجْتَمَعَ', pos: 'verb', features: 'perf.3ms', root: 'ج م ع', gloss: 'to gather' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق و ل', gloss: 'and they said' },
          ],
        },
        {
          id: 'qs-v1-c06-002',
          ar: 'مَاذَا نَفْعَلُ؟',
          en: 'What shall we do?',
          tokens: [
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'نَفْعَلُ', lemma: 'فَعَلَ', pos: 'verb', features: 'impf.1p', root: 'ف ع ل', gloss: 'to do' },
          ],
        },
        {
          id: 'qs-v1-c06-003',
          ar: 'إِنَّ إِبْرَاهِيمَ كَسَرَ الْأَصْنَامَ وَأَهَانَ الْآلِهَةَ!',
          en: 'Ibrāhīm has broken the idols and insulted the gods!',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'acc', gloss: 'Ibrāhīm' },
            { surface: 'كَسَرَ', lemma: 'كَسَرَ', pos: 'verb', features: 'perf.3ms', root: 'ك س ر', gloss: 'to break' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
            { surface: 'وَأَهَانَ', lemma: 'أَهَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ه و ن', gloss: 'to insult, disgrace' },
            { surface: 'الْآلِهَةَ', lemma: 'إِلَٰه', pos: 'noun', features: 'pl.def.acc', root: 'أ ل ه', gloss: 'gods' },
          ],
        },
        {
          id: 'qs-v1-c06-004',
          ar: 'وَسَأَلَ النَّاسُ:',
          en: 'And the people asked:',
          tokens: [
            { surface: 'وَسَأَلَ', lemma: 'سَأَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س أ ل', gloss: 'and asked' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
          ],
        },
        {
          id: 'qs-v1-c06-005',
          ar: 'مَا عِقَابُ إِبْرَاهِيمَ؟',
          en: "What is Ibrāhīm's punishment?",
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'عِقَابُ', lemma: 'عِقَاب', pos: 'noun', features: 'nom.constr', root: 'ع ق ب', gloss: 'punishment' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c06-006',
          ar: 'مَا جَزَاءُ إِبْرَاهِيمَ؟',
          en: "What is Ibrāhīm's penalty?",
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'جَزَاءُ', lemma: 'جَزَاء', pos: 'noun', features: 'nom.constr', root: 'ج ز ي', gloss: 'recompense, penalty' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَرَّرَ النَّاسُ أَنْ يَفْعَلُوا بِإِبْرَاهِيمَ؟',
          options: ['أَنْ يُحَرِّقُوهُ بِالنَّارِ', 'أَنْ يَسْجُنُوهُ', 'أَنْ يُسَامِحُوهُ'],
          answer: 0,
          qEn: 'What did the people decide to do with Ibrāhīm?',
          optionsEn: ['Burn him with fire', 'Imprison him', 'Forgive him'],
        },
        {
          q: 'كَيْفَ كَانَ حَالُ إِبْرَاهِيمَ بَعْدَ النَّارِ؟',
          options: ['مَسْرُورًا سَالِمًا', 'خَائِفًا', 'مَرِيضًا'],
          answer: 0,
          qEn: 'How was Ibrāhīm after the fire?',
          optionsEn: ['Joyful and unharmed', 'Afraid', 'Sick'],
        },
      ],
    },
    {
      en: 'The answer was: Burn him and support your gods. And so it was: They kindled a fire and threw Ibrāhīm into it. But Allah helped Ibrāhīm, and said to the fire: O fire, be coolness and safety upon Ibrāhīm.',
      sentences: [
        {
          id: 'qs-v1-c06-007',
          ar: 'كَانَ الْجَوَابُ:',
          en: 'The answer was:',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'الْجَوَابُ', lemma: 'جَوَاب', pos: 'noun', features: 'def.nom', root: 'ج و ب', gloss: 'answer' },
          ],
        },
        {
          id: 'qs-v1-c06-008',
          ar: '﴿حَرِّقُوهُ',
          en: 'Burn him',
          tokens: [
            { surface: 'حَرِّقُوهُ', lemma: 'حَرَّقَ', pos: 'verb', features: 'imp.2mp+3ms', root: 'ح ر ق', gloss: 'to burn; burn him' },
          ],
        },
        {
          id: 'qs-v1-c06-009',
          ar: 'وَانصُرُوا ءَالِهَتَكُمْ﴾.',
          en: 'and support your gods.',
          tokens: [
            { surface: 'وَانصُرُوا', lemma: 'نَصَرَ', pos: 'verb', features: 'conj+imp.2mp', root: 'ن ص ر', gloss: 'to help, support' },
            { surface: 'ءَالِهَتَكُمْ', lemma: 'إِلَٰه', pos: 'noun', features: 'pl.acc+2mp', root: 'أ ل ه', gloss: 'your gods' },
          ],
        },
        {
          id: 'qs-v1-c06-010',
          ar: 'وَهَكَذَا كَانَ:',
          en: 'And so it was:',
          tokens: [
            { surface: 'وَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'conj+adv', gloss: 'thus, like this' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
          ],
        },
        {
          id: 'qs-v1-c06-011',
          ar: 'أَوْقَدُوا نَارًا وَأَلْقَوْا فِيهَا إِبْرَاهِيمَ.',
          en: 'They kindled a fire and threw Ibrāhīm into it.',
          tokens: [
            { surface: 'أَوْقَدُوا', lemma: 'أَوْقَدَ', pos: 'verb', features: 'perf.3mp', root: 'و ق د', gloss: 'to kindle' },
            { surface: 'نَارًا', lemma: 'نَار', pos: 'noun', features: 'indef.acc', root: 'ن و ر', gloss: 'fire' },
            { surface: 'وَأَلْقَوْا', lemma: 'أَلْقَى', pos: 'verb', features: 'conj+perf.3mp', root: 'ل ق ي', gloss: 'to throw, cast' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'into it' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'acc', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c06-012',
          ar: 'وَلَكِنَّ اللَّهَ نَصَرَ إِبْرَاهِيمَ وَقَالَ لِلنَّارِ:',
          en: 'But Allah helped Ibrāhīm, and said to the fire:',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'نَصَرَ', lemma: 'نَصَرَ', pos: 'verb', features: 'perf.3ms', root: 'ن ص ر', gloss: 'to help, support' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'acc', gloss: 'Ibrāhīm' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'لِلنَّارِ', lemma: 'نَار', pos: 'noun', features: 'prep+def.gen', root: 'ن و ر', gloss: 'to the fire' },
          ],
        },
        {
          id: 'qs-v1-c06-013',
          ar: '﴿يَنَارُ',
          en: 'O fire,',
          tokens: [
            { surface: 'يَنَارُ', lemma: 'نَار', pos: 'noun', features: 'part+nom', root: 'ن و ر', gloss: 'O fire' },
          ],
        },
        {
          id: 'qs-v1-c06-014',
          ar: 'كُونِي بَرْدًا',
          en: 'be coolness',
          tokens: [
            { surface: 'كُونِي', lemma: 'كَانَ', pos: 'verb', features: 'imp.2fs', root: 'ك و ن', gloss: 'to be; be (addressing the fire, f.)' },
            { surface: 'بَرْدًا', lemma: 'بَرْد', pos: 'noun', features: 'indef.acc', root: 'ب ر د', gloss: 'cold, coolness' },
          ],
        },
        {
          id: 'qs-v1-c06-015',
          ar: 'وَسَلَامًا',
          en: 'and safety',
          tokens: [
            { surface: 'وَسَلَامًا', lemma: 'سَلَام', pos: 'noun', features: 'conj+indef.acc', root: 'س ل م', gloss: 'peace, safety' },
          ],
        },
        {
          id: 'qs-v1-c06-016',
          ar: 'عَلَى إِبْرَاهِيمَ﴾.',
          en: 'upon Ibrāhīm.',
          tokens: [
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِلنَّارِ عِنْدَمَا أَلْقَوْا إِبْرَاهِيمَ فِيهَا؟',
          options: ['صَارَتْ بَرْدًا وَسَلَامًا عَلَيْهِ', 'احْتَرَقَ فِيهَا', 'خَمَدَتْ فَجْأَةً'],
          answer: 0,
          qEn: 'What happened to the fire when they threw Ibrāhīm into it?',
          optionsEn: ['It became cool and safe for him', 'He burned in it', 'It suddenly went out'],
        },
      ],
    },
    {
      en: 'And so it was, the fire became coolness and safety upon Ibrāhīm. And the people saw that Ibrāhīm was joyful, and that Ibrāhīm was safe, and the people were astonished and bewildered.',
      sentences: [
        {
          id: 'qs-v1-c06-017',
          ar: 'وَهَكَذَا كَانَ،',
          en: 'And so it was,',
          tokens: [
            { surface: 'وَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'conj+adv', gloss: 'thus, like this' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
          ],
        },
        {
          id: 'qs-v1-c06-018',
          ar: 'كَانَتِ النَّارُ بَرْدًا وَسَلَامًا عَلَى إِبْرَاهِيمَ.',
          en: 'the fire became coolness and safety upon Ibrāhīm.',
          tokens: [
            { surface: 'كَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', root: 'ك و ن', gloss: 'to be; became' },
            { surface: 'النَّارُ', lemma: 'نَار', pos: 'noun', features: 'def.nom', root: 'ن و ر', gloss: 'fire' },
            { surface: 'بَرْدًا', lemma: 'بَرْد', pos: 'noun', features: 'indef.acc', root: 'ب ر د', gloss: 'cold, coolness' },
            { surface: 'وَسَلَامًا', lemma: 'سَلَام', pos: 'noun', features: 'conj+indef.acc', root: 'س ل م', gloss: 'and safety' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c06-019',
          ar: 'وَرَأَى النَّاسُ أَنَّ إِبْرَاهِيمَ مَسْرُورٌ،',
          en: 'And the people saw that Ibrāhīm was joyful,',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ر أ ي', gloss: 'and saw' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'acc', gloss: 'Ibrāhīm' },
            { surface: 'مَسْرُورٌ', lemma: 'مَسْرُور', pos: 'adj', features: 'indef.nom', root: 'س ر ر', gloss: 'joyful, pleased' },
          ],
        },
        {
          id: 'qs-v1-c06-020',
          ar: 'وَأَنَّ إِبْرَاهِيمَ سَالِمٌ',
          en: 'and that Ibrāhīm was safe,',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'acc', gloss: 'Ibrāhīm' },
            { surface: 'سَالِمٌ', lemma: 'سَالِم', pos: 'adj', features: 'indef.nom', root: 'س ل م', gloss: 'safe, unharmed' },
          ],
        },
        {
          id: 'qs-v1-c06-021',
          ar: 'وَدَهِشَ النَّاسُ وَتَحَيَّرُوا.',
          en: 'and the people were astonished and bewildered.',
          tokens: [
            { surface: 'وَدَهِشَ', lemma: 'دَهِشَ', pos: 'verb', features: 'conj+perf.3ms', root: 'د ه ش', gloss: 'to be astonished' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'وَتَحَيَّرُوا', lemma: 'تَحَيَّرَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ح ي ر', gloss: 'to be bewildered' },
          ],
        },
      ],
      checks: [],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَكِنَّ اللَّهَ',
        post: 'إِبْرَاهِيمَ.',
        en: 'But Allah helped Ibrāhīm.',
        options: ['نَصَرَ', 'نَصَرَتْ', 'يَنْصُرُ', 'نَصَرُوا'],
        answer: 0,
        rationales: [
          '3rd masculine singular perfect -- اللهُ takes masculine agreement.',
          '3rd feminine singular -- wrong gender.',
          "Imperfect -- but this is a completed past event.",
          'Plural -- but the subject is singular in form.',
        ],
      },
      {
        type: 'cloze',
        pre: '',
        post: 'النَّارُ بَرْدًا وَسَلَامًا عَلَى إِبْرَاهِيمَ.',
        en: 'The fire became coolness and safety upon Ibrāhīm.',
        options: ['كَانَتِ', 'كَانَ', 'يَكُونُ', 'كُنَّ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- agrees with النَّار, a feminine noun.',
          '3rd masculine singular -- wrong gender.',
          'Imperfect -- but this is a completed past event.',
          '3rd feminine plural -- but only one fire is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَرَأَى النَّاسُ أَنَّ إِبْرَاهِيمَ',
        post: '، وَأَنَّ إِبْرَاهِيمَ سَالِمٌ',
        en: 'And the people saw that Ibrāhīm was joyful, and that Ibrāhīm was safe,',
        options: ['مَسْرُورٌ', 'مَسْرُورًا', 'مَسْرُورٍ', 'مَسْرُورُونَ'],
        answer: 0,
        rationales: [
          'خبر أَنَّ is nominative -- أَنَّ إِبْرَاهِيمَ مَسْرُورٌ.',
          'Accusative -- but the khabar of أَنَّ takes the nominative.',
          'Genitive -- nothing governs the genitive here.',
          'Plural -- but only Ibrāhīm, one person, is meant.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'كُونِي بَرْدًا',
        pre: '',
        post: 'بَرْدًا',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['كُنْ', 'كُونِي', 'كُونُوا', 'كُنَّ'],
        answer: 0,
        rationales: [
          'Masculine singular imperative -- matches أَنْتَ.',
          'Feminine singular -- you (f.), the form already given.',
          'Masculine plural -- you all (m.).',
          'Feminine plural -- you all (f.).',
        ],
      },
      {
        type: 'shift',
        base: 'كُونِي بَرْدًا',
        pre: '',
        post: 'بَرْدًا',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (pl. m.)',
        options: ['كُونُوا', 'كُنْ', 'كُونِي', 'كُنَّ'],
        answer: 0,
        rationales: [
          'Masculine plural imperative -- matches أَنْتُمْ.',
          'Masculine singular -- you (one m.).',
          'Feminine singular -- the form already given.',
          'Feminine plural -- you all (f.).',
        ],
      },
      {
        type: 'shift',
        base: 'كُونِي بَرْدًا',
        pre: '',
        post: 'بَرْدًا',
        targetPerson: 'أَنْتُنَّ',
        targetEn: 'you (pl. f.)',
        options: ['كُنَّ', 'كُنْ', 'كُونِي', 'كُونُوا'],
        answer: 0,
        rationales: [
          'Feminine plural imperative -- matches أَنْتُنَّ.',
          'Masculine singular.',
          'Feminine singular -- one woman only.',
          'Masculine plural.',
        ],
      },
    ],
  },
};

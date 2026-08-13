// قَصَصُ النَّبِيِّينَ, volume 9, chapter 9 -- الْمَلِكَةُ تَسْتَشِيرُ أَرْكَانَ
// دَوْلَتِهَا. Printed pages 229 (from its own heading box, right after ch8's
// closing sentence) through 230 (top of the page only), ending right before
// ch10's heading هَدِيَّةُ مُسَاوَمَةٍ on that page. Transcribed by hand from
// the scan (vision OCR, 200dpi render) against ../CHAPTER-FORMAT.md.
//
// The narrator pauses to characterise the Queen fairly: sensible, not
// hasty in judgment, with wide experience of the ways of kings and the
// history of conquerors -- her reasoning simply failed her on the one
// question of knowing and worshipping the true God. Rather than let royal
// zeal seize her or decide alone, she brought the letter -- unlike any
// other, from one of the greatest kings of her time and a Prophet calling
// to Allah -- before the men of counsel among the pillars of her state.
//
// Grammar / lexical notes:
//   -- دَاعٍ (unit 010, "one who calls, a caller") is the active-participle
//      lemma of the already-taught verb دَعَا, kept as its own distinct
//      lemma per the established participle-as-distinct-lemma convention
//      (صَالِح، سَاجِد، كَافِر, etc. -- qasas-v3 ch17's header note).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): عَاقِل، خَانَ، إِلَٰه، رَأْي،
//      أَهْل، عَقْل، كِتَاب، مَلِك، سُلَيْمَان، اللَّه، نَبِيّ، عِبَادَة، بِلَاد،
//      حَمِيَّة، دَوْلَة
//      are all already taught and are NOT re-listed in newWords here.
//
// 10 new words (جَامِع، مُتَسَرِّع، تَجْرِبَة، سِيرَة، فَاتِح، اِسْتَبَدَّ، رُكْن،
// سَائِر، دَاعٍ، مَعْرِفَة).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch9',
  title: { ar: 'الْمَلِكَةُ تَسْتَشِيرُ أَرْكَانَ دَوْلَتِهَا', en: 'The Queen Consults the Pillars of Her State' },
  newWords: ['جَامِع', 'مُتَسَرِّع', 'تَجْرِبَة', 'سِيرَة', 'فَاتِح', 'اِسْتَبَدَّ', 'رُكْن', 'سَائِر', 'دَاعٍ', 'مَعْرِفَة'],
  lemmas: {
    جَامِع: { gloss: 'combining, bringing together' },
    مُتَسَرِّع: { gloss: 'hasty, rash' },
    تَجْرِبَة: { gloss: 'an experience' },
    سِيرَة: { gloss: 'a biography, way of life' },
    فَاتِح: { gloss: 'a conqueror' },
    اِسْتَبَدَّ: { gloss: 'to act alone, monopolise a decision' },
    رُكْن: { gloss: 'a pillar' },
    سَائِر: { gloss: 'the rest of, other' },
    دَاعٍ: { gloss: 'one who calls, a caller' },
    مَعْرِفَة: { gloss: 'knowledge, recognition' },
  },
  paragraphs: [
    {
      en: "Sulaymān combined both of these (gentleness and firmness). The woman who ruled this land was sensible, not hasty in judgment; she had wide experience of the ways of kings and the history of conquerors, and her reasoning had failed her only in knowing and worshipping the true God -- royal zeal did not seize her, nor did she act alone on her own opinion. So she brought the men of counsel among the pillars of her state to learn of this letter, which was unlike any other letter: it was a letter from one of the greatest kings of her time, and from a Prophet calling to Allah.",
      sentences: [
        {
          id: 'qs-v9-c09-001',
          ar: 'فَقَدْ كَانَ سُلَيْمَانُ جَامِعاً بَيْنَهُمَا،',
          en: 'Sulaymān combined both of these (gentleness and firmness).',
          tokens: [
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'indeed' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'سُلَيْمَانُ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'nom', gloss: 'Sulaymān' },
            { surface: 'جَامِعاً', lemma: 'جَامِع', pos: 'adj', features: 'indef.acc', root: 'ج م ع', gloss: 'combining' },
            { surface: 'بَيْنَهُمَا', lemma: 'بَيْنَ', pos: 'prep', features: 'prep+3md', gloss: 'both of these' },
          ],
        },
        {
          id: 'qs-v9-c09-002',
          ar: 'وَكَانَتِ الْمَرْأَةُ الَّتِي تَحْكُمُ هَذِهِ الْبِلَادَ عَاقِلَةً غَيْرَ مُتَسَرِّعَةٍ فِي الْحُكْمِ،',
          en: 'The woman who ruled this land was sensible, not hasty in judgment;',
          tokens: [
            { surface: 'وَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be; and was' },
            { surface: 'الْمَرْأَةُ', lemma: 'مَرْأَة', pos: 'noun', features: 'def.nom', gloss: 'the woman' },
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.f', gloss: 'who' },
            { surface: 'تَحْكُمُ', lemma: 'حَكَمَ', pos: 'verb', features: 'impf.3fs', gloss: 'to rule; ruled' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْبِلَادَ', lemma: 'بِلَاد', pos: 'noun', features: 'def.acc', gloss: 'the land' },
            { surface: 'عَاقِلَةً', lemma: 'عَاقِل', pos: 'adj', features: 'indef.acc.f', gloss: 'sensible' },
            { surface: 'غَيْرَ', lemma: 'غَيْر', pos: 'noun', features: 'acc.constr', gloss: 'not' },
            { surface: 'مُتَسَرِّعَةٍ', lemma: 'مُتَسَرِّع', pos: 'adj', features: 'indef.gen.f', root: 'س ر ع', gloss: 'hasty' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْحُكْمِ', lemma: 'حُكْم', pos: 'noun', features: 'def.gen', gloss: 'judgment' },
          ],
        },
        {
          id: 'qs-v9-c09-003',
          ar: 'عِنْدَهَا تَجَارِبُ وَاسِعَةٌ مِنْ سِيَرِ الْمُلُوكِ وَأَخْبَارِ الْفَاتِحِينَ،',
          en: 'she had wide experience of the ways of kings and the history of conquerors,',
          tokens: [
            { surface: 'عِنْدَهَا', lemma: 'عِنْدَ', pos: 'prep', features: 'prep+3fs', gloss: 'she had' },
            { surface: 'تَجَارِبُ', lemma: 'تَجْرِبَة', pos: 'noun', features: 'pl.indef.nom', gloss: 'experience' },
            { surface: 'وَاسِعَةٌ', lemma: 'وَاسِع', pos: 'adj', features: 'indef.nom.f', gloss: 'wide' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'سِيَرِ', lemma: 'سِيرَة', pos: 'noun', features: 'pl.constr.gen', gloss: 'the ways of' },
            { surface: 'الْمُلُوكِ', lemma: 'مَلِك', pos: 'noun', features: 'pl.def.gen', gloss: 'kings' },
            { surface: 'وَأَخْبَارِ', lemma: 'خَبَر', pos: 'noun', features: 'conj+pl.constr.gen', gloss: 'and the history of' },
            { surface: 'الْفَاتِحِينَ', lemma: 'فَاتِح', pos: 'noun', features: 'pl.def.gen', root: 'ف ت ح', gloss: 'conquerors' },
          ],
        },
        {
          id: 'qs-v9-c09-004',
          ar: 'وَإِنَّمَا خَانَهَا عَقْلُهَا فِي مَعْرِفَةِ الْإِلَهِ وَعِبَادَتِهِ',
          en: 'and her reasoning had failed her only in knowing and worshipping the true God,',
          tokens: [
            { surface: 'وَإِنَّمَا', lemma: 'إِنَّمَا', pos: 'part', features: 'conj+part', gloss: 'and only' },
            { surface: 'خَانَهَا', lemma: 'خَانَ', pos: 'verb', features: 'perf.3ms+3fs', gloss: 'to fail, betray; failed her' },
            { surface: 'عَقْلُهَا', lemma: 'عَقْل', pos: 'noun', features: 'nom+3fs', gloss: 'her reasoning' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مَعْرِفَةِ', lemma: 'مَعْرِفَة', pos: 'noun', features: 'constr.gen', root: 'ع ر ف', gloss: 'knowing' },
            { surface: 'الْإِلَهِ', lemma: 'إِلَٰه', pos: 'noun', features: 'def.gen', gloss: 'the God' },
            { surface: 'وَعِبَادَتِهِ', lemma: 'عِبَادَة', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and worshipping Him' },
          ],
        },
        {
          id: 'qs-v9-c09-005',
          ar: 'فَلَمْ تَأْخُذْهَا حَمِيَّةُ الْمُلُوكِ،',
          en: 'royal zeal did not seize her,',
          tokens: [
            { surface: 'فَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and did not' },
            { surface: 'تَأْخُذْهَا', lemma: 'أَخَذَ', pos: 'verb', features: 'impf.3fs+3fs', gloss: 'to seize; seize her' },
            { surface: 'حَمِيَّةُ', lemma: 'حَمِيَّة', pos: 'noun', features: 'constr.nom', gloss: 'the zeal of' },
            { surface: 'الْمُلُوكِ', lemma: 'مَلِك', pos: 'noun', features: 'pl.def.gen', gloss: 'kings' },
          ],
        },
        {
          id: 'qs-v9-c09-006',
          ar: 'وَلَمْ تَسْتَبِدَّ بِالرَّأْيِ،',
          en: 'nor did she act alone on her own opinion.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and did not' },
            { surface: 'تَسْتَبِدَّ', lemma: 'اِسْتَبَدَّ', pos: 'verb', features: 'impf.3fs', root: 'ب د د', gloss: 'to act alone; act alone' },
            { surface: 'بِالرَّأْيِ', lemma: 'رَأْي', pos: 'noun', features: 'prep+def.gen', gloss: 'on the opinion' },
          ],
        },
        {
          id: 'qs-v9-c09-007',
          ar: 'فَاطَّلَعَتْ أَهْلَ الرَّأْيِ مِنْ أَرْكَانِ دَوْلَتِهَا عَلَى هَذَا الْكِتَابِ',
          en: 'So she brought the men of counsel among the pillars of her state to learn of this letter,',
          tokens: [
            { surface: 'فَاطَّلَعَتْ', lemma: 'اِطَّلَعَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to inform, let learn of; so she informed' },
            { surface: 'أَهْلَ', lemma: 'أَهْل', pos: 'noun', features: 'acc.constr', gloss: 'the people of' },
            { surface: 'الرَّأْيِ', lemma: 'رَأْي', pos: 'noun', features: 'def.gen', gloss: 'counsel' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'أَرْكَانِ', lemma: 'رُكْن', pos: 'noun', features: 'pl.constr.gen', gloss: 'the pillars of' },
            { surface: 'دَوْلَتِهَا', lemma: 'دَوْلَة', pos: 'noun', features: 'gen+3fs', gloss: 'her state' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem', gloss: 'this' },
            { surface: 'الْكِتَابِ', lemma: 'كِتَاب', pos: 'noun', features: 'def.gen', gloss: 'the letter' },
          ],
        },
        {
          id: 'qs-v9-c09-008',
          ar: 'الَّذِي لَمْ يَكُنْ كَسَائِرِ الْكُتُبِ،',
          en: 'which was unlike any other letter:',
          tokens: [
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'which' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'was not' },
            { surface: 'يَكُنْ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be; was' },
            { surface: 'كَسَائِرِ', lemma: 'سَائِر', pos: 'noun', features: 'prep+constr.gen', gloss: 'like the rest of' },
            { surface: 'الْكُتُبِ', lemma: 'كِتَاب', pos: 'noun', features: 'pl.def.gen', gloss: 'the letters' },
          ],
        },
        {
          id: 'qs-v9-c09-009',
          ar: 'إِنَّهُ كِتَابٌ مِنْ أَعْظَمِ الْمُلُوكِ فِي زَمَانِهَا',
          en: 'it was a letter from one of the greatest kings of her time,',
          tokens: [
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed it' },
            { surface: 'كِتَابٌ', lemma: 'كِتَاب', pos: 'noun', features: 'indef.nom', gloss: 'a letter' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَعْظَمِ', lemma: 'أَعْظَم', pos: 'noun', features: 'constr.gen', gloss: 'the greatest of' },
            { surface: 'الْمُلُوكِ', lemma: 'مَلِك', pos: 'noun', features: 'pl.def.gen', gloss: 'kings' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'زَمَانِهَا', lemma: 'زَمَن', pos: 'noun', features: 'gen+3fs', gloss: 'her time' },
          ],
        },
        {
          id: 'qs-v9-c09-010',
          ar: 'وَمِنْ نَبِيٍّ دَاعٍ إِلَى اللَّهِ.',
          en: 'and from a Prophet calling to Allah.',
          tokens: [
            { surface: 'وَمِنْ', lemma: 'مِنْ', pos: 'prep', features: 'conj+prep', gloss: 'and from' },
            { surface: 'نَبِيٍّ', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.gen', gloss: 'a Prophet' },
            { surface: 'دَاعٍ', lemma: 'دَاعٍ', pos: 'adj', features: 'indef.gen', root: 'د ع و', gloss: 'calling' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَتِ الْمَلِكَةُ الَّتِي تَحْكُمُ سَبَأَ؟',
          options: ['عَاقِلَةً غَيْرَ مُتَسَرِّعَةٍ فِي الْحُكْمِ، عِنْدَهَا تَجَارِبُ وَاسِعَةٌ', 'مُتَسَرِّعَةً جَاهِلَةً بِالسِّيَاسَةِ', 'ضَعِيفَةَ الرَّأْيِ لَا تَسْتَشِيرُ أَحَداً'],
          answer: 0,
          qEn: 'How was the queen who ruled Sabaʾ?',
          optionsEn: ['Sensible, not hasty in judgment, with wide experience', 'Hasty and ignorant of statecraft', 'Weak in opinion and never consulted anyone'],
        },
        {
          q: 'فِي أَيِّ شَيْءٍ خَانَهَا عَقْلُهَا؟',
          options: ['فِي مَعْرِفَةِ الْإِلَهِ الْحَقِّ وَعِبَادَتِهِ', 'فِي إِدَارَةِ شُؤُونِ الدَّوْلَةِ', 'فِي مُعَامَلَةِ رَعِيَّتِهَا'],
          answer: 0,
          qEn: 'In what did her reasoning fail her?',
          optionsEn: ['In knowing and worshipping the true God', 'In managing state affairs', 'In treating her subjects'],
        },
        {
          q: 'مَاذَا فَعَلَتِ الْمَلِكَةُ بَعْدَ أَنْ وَصَلَهَا الْكِتَابُ؟',
          options: ['أَطْلَعَتْ عَلَيْهِ أَهْلَ الرَّأْيِ مِنْ أَرْكَانِ دَوْلَتِهَا وَلَمْ تَسْتَبِدَّ بِرَأْيِهَا', 'مَزَّقَتِ الْكِتَابَ فَوْراً', 'أَخْفَتِ الْكِتَابَ عَنْ قَوْمِهَا'],
          answer: 0,
          qEn: 'What did the queen do after the letter reached her?',
          optionsEn: ['She informed the men of counsel among the pillars of her state and did not act alone', 'She tore up the letter at once', 'She hid the letter from her people'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَتِ الْمَرْأَةُ الَّتِي تَحْكُمُ هَذِهِ الْبِلَادَ',
        post: 'غَيْرَ مُتَسَرِّعَةٍ فِي الْحُكْمِ.',
        en: 'The woman who ruled this land was sensible, not hasty in judgment.',
        options: ['عَاقِلَةً', 'عَاقِلَةٌ', 'عَاقِلَةِ', 'عَاقِلٌ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- predicate of كَانَتِ, matching the printed كَانَتِ الْمَرْأَةُ ... عَاقِلَةً.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Masculine -- wrong gender; الْمَرْأَةُ (the woman) takes a feminine predicate.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَلَمْ تَأْخُذْهَا حَمِيَّةُ الْمُلُوكِ وَلَمْ',
        post: 'بِالرَّأْيِ.',
        en: 'Royal zeal did not seize her, nor did she act alone on her own opinion.',
        options: ['تَسْتَبِدَّ', 'تَسْتَبِدُّ', 'اسْتَبَدَّتْ', 'يَسْتَبِدَّ'],
        answer: 0,
        rationales: [
          'Jussive after لَمْ, 3rd feminine singular -- matches the printed لَمْ تَسْتَبِدَّ.',
          'Indicative imperfect -- wrong mood; لَمْ requires the jussive.',
          'Perfect -- wrong; لَمْ requires the jussive imperfect, not the perfect.',
          '3rd masculine singular -- wrong gender; the subject is الْمَلِكَة (feminine).',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنَّهُ كِتَابٌ مِنْ أَعْظَمِ الْمُلُوكِ وَمِنْ',
        post: 'دَاعٍ إِلَى اللَّهِ.',
        en: 'It was a letter from one of the greatest kings and from a Prophet calling to Allah.',
        options: ['نَبِيٍّ', 'نَبِيٌّ', 'نَبِيّاً', 'النَّبِيِّ'],
        answer: 0,
        rationales: [
          'Genitive, indefinite -- object of the preposition مِنْ, matching the printed وَمِنْ نَبِيٍّ.',
          'Nominative -- wrong case; a preposition requires the genitive.',
          'Accusative -- wrong case for the same reason.',
          'Definite -- wrong; the printed word is indefinite, paired with أَعْظَمِ الْمُلُوكِ.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'تَسْتَبِدُّ الْمَلِكَةُ بِالرَّأْيِ',
        pre: '',
        post: 'بِالرَّأْيِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَسْتَبِدُّ', 'تَسْتَبِدُّ', 'يَسْتَبِدُّ', 'نَسْتَبِدُّ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd feminine singular -- the base form, not shifted to "I."',
          '3rd masculine singular -- wrong person and gender.',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَخُونُ الْعَقْلُ صَاحِبَهُ',
        pre: '',
        post: 'صَاحِبَهُ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَخُونُونَ', 'يَخُونُ', 'تَخُونُ', 'نَخُونُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '3rd feminine singular -- wrong gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'أَعْرِفُ الْإِلَهَ الْحَقَّ',
        pre: '',
        post: 'الْإِلَهَ الْحَقَّ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَعْرِفُ', 'أَعْرِفُ', 'يَعْرِفُ', 'نَعْرِفُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '1st singular -- the base form, not shifted to "she."',
          '3rd masculine singular -- wrong gender; the target is "she," not "he."',
          '1st plural -- wrong person; the target is "she," not "we."',
        ],
      },
    ],
  },
};

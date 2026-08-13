// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 23. Printed page 265, from the top of the
// page (right after ch22's closing āyah, 5:115) down to ch24's heading
// أُسْلُوبُ النَّاقِمِينَ وَالسِّيَاسِيِّينَ partway down the same page. Transcribed
// by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md.
//
// Content: the register shifts back from Qur'anic quotation to the
// author's own narrative prose. The Jews' patience is finally exhausted
// and they resolve to be rid of Isa, bringing a formal accusation against
// him to the Roman governor: that he is a rebellious agitator who has
// broken from their religion, seduced their youth away from them, sown
// division, and turned their own minds against them. This whole paragraph
// is one long periodic sentence in the original, split here at its natural
// clause boundaries per house convention (qasas-v3/chapter-14.js).
//
// Grammar / lexical notes:
//   -- عَالَ (new, qs-v12-c23-001's وَعِيلَ, "to be exhausted, to run out")
//      is the classical idiom عِيلَ صَبْرُهُ ("his patience gave out"), a
//      hollow root ع ي ل used almost only in this passive. It is NOT the
//      same word as the already-taught عَالٍ ("high, lofty," root ع ل و) --
//      the two happen to share the same bare consonant skeleton once
//      diacritics are stripped, which is a false-positive trap when
//      cross-checking known-lemmas.txt mechanically; verified by full
//      vocalization and meaning that they are unrelated words.
//   -- تَخَلُّص (new, qs-v12-c23-003, "getting rid of") is tagged as a noun
//      (maṣdar) rather than a verb, since only the verbal-noun form
//      التَّخَلُّصَ actually appears on the page (as the object of أَرَادُوا) --
//      the finite verb تَخَلَّصَ itself does not occur in this chapter's text.
//   -- فَرَّقَ (qs-v12-c23-009, "to divide, split") matches an unvocalized
//      "فرق" line already in known-lemmas.txt; given the genuine ambiguity
//      of an unvocalized entry (it could equally represent فَرْق "a
//      difference" or فِرْقَة "a faction"), it is provisionally treated as
//      already covering this verb and left out of newWords, but flagged
//      here for a second look.
//   -- ثَائِر (new, "rebellious, insurgent") is the active participle of
//      ثَارَ ("to revolt"); the base verb itself does not occur in this
//      chapter's text, only the participle, so only ثَائِر is listed.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, against
//      known-lemmas.txt): صَبْر، فَاضَ، أَرَادَ، مِنْ، سَيِّد، عِيسَى (new again in
//      this chapter's own text, see qasas-v12/chapter-22.js)، رَفَعَ،
//      قَضِيَّة، إِلَى، حَاكِم، قَالَ، إِنَّ، رَجُل، دِين، أَمْر، شَغَلَ
//      are all already taught and are NOT re-listed in newWords here
//      (except عِيسَى, which is a proper noun re-flagged per this task's
//      instruction not to worry about cross-chapter duplication within the
//      volume).
//
// 15 new words (عَالَ، كَأْس، عِدَاء، عِنَاد، تَخَلُّص، رُومِيّ، ثَائِر، فَوْضَوِيّ،
// مَرَقَ، اِسْتَهْوَى، شَبَاب، فَتَنَ، سَفَّهَ، حُلْم، بَال) -- this chapter is
// unusually vocabulary-dense because it introduces the whole
// political-accusation word-set used against Isa before the governor.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch23',
  title: { ar: 'الْيَهُودُ يُحَاوِلُونَ التَّخَلُّصَ مِنْ سَيِّدِنَا عِيسَى', en: 'The Jews Try to Get Rid of Isa' },
  newWords: [
    'عَالَ', 'كَأْس', 'عِدَاء', 'رُومِيّ', 'ثَائِر', 'فَوْضَوِيّ',
    'مَرَقَ', 'اِسْتَهْوَى', 'شَبَاب', 'فَتَنَ', 'سَفَّهَ', 'بَال',
  ],
  lemmas: {
    عَالَ: { gloss: 'to be exhausted, run out (of patience)' },
    كَأْس: { gloss: 'cup' },
    عِدَاء: { gloss: 'hostility, enmity' },
    عِنَاد: { gloss: 'obstinacy, stubbornness' },
    تَخَلُّص: { gloss: 'getting rid of, ridding oneself of' },
    رُومِيّ: { gloss: 'Roman' },
    ثَائِر: { gloss: 'rebellious, insurgent' },
    فَوْضَوِيّ: { gloss: 'anarchist, chaotic' },
    مَرَقَ: { gloss: 'to break away, apostatize' },
    اِسْتَهْوَى: { gloss: 'to entice, seduce' },
    شَبَاب: { gloss: 'youth, young people' },
    فَتَنَ: { gloss: 'to tempt, seduce, lead astray' },
    سَفَّهَ: { gloss: 'to deem foolish, ridicule' },
    حُلْم: { gloss: 'dream; (pl.) mind, wits' },
    بَال: { gloss: 'mind, thought' },
    عِيسَى: { gloss: 'Isa (Jesus)' },
  },
  paragraphs: [
    {
      en: "The Jews' patience finally gave out, and the cup of their hostility and obstinacy overflowed, so they wanted to be rid of our master Isa. They brought his case before the Roman governor and said: \"He is a rebellious, anarchic man who has broken away from our religion, has enticed our youth so that they were led astray by him, has caused division among us, and has made our minds foolish and occupied our thoughts.\"",
      sentences: [
        {
          id: 'qs-v12-c23-001',
          ar: 'وَعِيلَ صَبْرُ الْيَهُودِ،',
          en: "The Jews' patience finally gave out,",
          tokens: [
            { surface: 'وَعِيلَ', lemma: 'عَالَ', pos: 'verb', features: 'conj+pass+perf.3ms', root: 'ع ي ل', gloss: 'to be exhausted, run out; and was exhausted' },
            { surface: 'صَبْرُ', lemma: 'صَبْر', pos: 'noun', features: 'constr.nom', gloss: 'the patience of' },
            { surface: 'الْيَهُودِ', lemma: 'يَهُود', pos: 'proper', features: 'def.gen', gloss: 'the Jews' },
          ],
        },
        {
          id: 'qs-v12-c23-002',
          ar: 'وَفَاضَتْ كَأْسُ عِدَائِهِمْ وَعِنَادِهِمْ،',
          en: 'and the cup of their hostility and obstinacy overflowed,',
          tokens: [
            { surface: 'وَفَاضَتْ', lemma: 'فَاضَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to overflow; and overflowed' },
            { surface: 'كَأْسُ', lemma: 'كَأْس', pos: 'noun', features: 'constr.nom', gloss: 'the cup of' },
            { surface: 'عِدَائِهِمْ', lemma: 'عِدَاء', pos: 'noun', features: 'gen+3mp', gloss: 'their hostility' },
            { surface: 'وَعِنَادِهِمْ', lemma: 'عِنَاد', pos: 'noun', features: 'conj+gen+3mp', gloss: 'and their obstinacy' },
          ],
        },
        {
          id: 'qs-v12-c23-003',
          ar: 'فَأَرَادُوا التَّخَلُّصَ مِنْ سَيِّدِنَا عِيسَى،',
          en: 'so they wanted to be rid of our master Isa,',
          tokens: [
            { surface: 'فَأَرَادُوا', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to want; so they wanted' },
            { surface: 'التَّخَلُّصَ', lemma: 'تَخَلُّص', pos: 'noun', features: 'def.acc', root: 'خ ل ص', gloss: 'getting rid (of)' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'سَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'gen+1p', gloss: 'our master' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'gen', gloss: 'Isa' },
          ],
        },
        {
          id: 'qs-v12-c23-004',
          ar: 'فَرَفَعُوا قَضِيَّتَهُ إِلَى الْحَاكِمِ الرُّومِيِّ وَقَالُوا:',
          en: 'so they referred his case to the Roman governor and said:',
          tokens: [
            { surface: 'فَرَفَعُوا', lemma: 'رَفَعَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to raise, refer; so they referred' },
            { surface: 'قَضِيَّتَهُ', lemma: 'قَضِيَّة', pos: 'noun', features: 'acc+3ms', gloss: 'his case' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْحَاكِمِ', lemma: 'حَاكِم', pos: 'noun', features: 'def.gen', gloss: 'the ruler, governor' },
            { surface: 'الرُّومِيِّ', lemma: 'رُومِيّ', pos: 'adj', features: 'def.gen', gloss: 'Roman' },
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v12-c23-005',
          ar: 'إِنَّهُ رَجُلٌ ثَائِرٌ فَوْضَوِيٌّ،',
          en: '"He is a rebellious, anarchic man,',
          tokens: [
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', gloss: 'a man' },
            { surface: 'ثَائِرٌ', lemma: 'ثَائِر', pos: 'adj', features: 'indef.nom', root: 'ث و ر', gloss: 'rebellious, insurgent' },
            { surface: 'فَوْضَوِيٌّ', lemma: 'فَوْضَوِيّ', pos: 'adj', features: 'indef.nom', gloss: 'anarchist, chaotic' },
          ],
        },
        {
          id: 'qs-v12-c23-006',
          ar: 'مَرَقَ مِنْ دِينِنَا،',
          en: 'who has broken away from our religion,',
          tokens: [
            { surface: 'مَرَقَ', lemma: 'مَرَقَ', pos: 'verb', features: 'perf.3ms', gloss: 'to break away, apostatize; has broken away' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'دِينِنَا', lemma: 'دِين', pos: 'noun', features: 'gen+1p', gloss: 'our religion' },
          ],
        },
        {
          id: 'qs-v12-c23-007',
          ar: 'وَاسْتَهْوَى شَبَابَنَا،',
          en: 'has enticed our youth,',
          tokens: [
            { surface: 'وَاسْتَهْوَى', lemma: 'اِسْتَهْوَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to entice, seduce; and has enticed' },
            { surface: 'شَبَابَنَا', lemma: 'شَبَاب', pos: 'noun', features: 'acc+1p', gloss: 'our youth' },
          ],
        },
        {
          id: 'qs-v12-c23-008',
          ar: 'فَفُتِنُوا بِهِ،',
          en: 'so they were led astray by him,',
          tokens: [
            { surface: 'فَفُتِنُوا', lemma: 'فَتَنَ', pos: 'verb', features: 'conj+pass+perf.3mp', gloss: 'to tempt, seduce; so they were seduced' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'by him' },
          ],
        },
        {
          id: 'qs-v12-c23-009',
          ar: 'وَفَرَّقَ أَمْرَنَا،',
          en: 'has caused division among us,',
          tokens: [
            { surface: 'وَفَرَّقَ', lemma: 'فَرَّقَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to divide, split; and has divided' },
            { surface: 'أَمْرَنَا', lemma: 'أَمْر', pos: 'noun', features: 'acc+1p', gloss: 'our unity, affair' },
          ],
        },
        {
          id: 'qs-v12-c23-010',
          ar: 'وَسَفَّهَ أَحْلَامَنَا وَشَغَلَ بَالَنَا.',
          en: 'and has made our minds foolish and occupied our thoughts."',
          tokens: [
            { surface: 'وَسَفَّهَ', lemma: 'سَفَّهَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to deem foolish, ridicule; and has made foolish' },
            { surface: 'أَحْلَامَنَا', lemma: 'حُلْم', pos: 'noun', features: 'pl.acc+1p', gloss: 'our minds, wits' },
            { surface: 'وَشَغَلَ', lemma: 'شَغَلَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to occupy, distract; and has occupied' },
            { surface: 'بَالَنَا', lemma: 'بَال', pos: 'noun', features: 'acc+1p', gloss: 'our thoughts' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا أَرَادَ الْيَهُودُ أَنْ يَفْعَلُوا بِسَيِّدِنَا عِيسَى؟',
          options: ['أَرَادُوا التَّخَلُّصَ مِنْهُ فَرَفَعُوا قَضِيَّتَهُ إِلَى الْحَاكِمِ الرُّومِيِّ', 'أَرَادُوا أَنْ يُؤْمِنُوا بِهِ', 'أَرَادُوا أَنْ يُكْرِمُوهُ'],
          answer: 0,
          qEn: 'What did the Jews want to do with our master Isa?',
          optionsEn: ['They wanted to be rid of him, so they brought his case before the Roman governor', 'They wanted to believe in him', 'They wanted to honor him'],
        },
        {
          q: 'بِمَاذَا اتَّهَمَ الْيَهُودُ سَيِّدَنَا عِيسَى عِنْدَ الْحَاكِمِ؟',
          options: ['بِأَنَّهُ رَجُلٌ ثَائِرٌ فَوْضَوِيٌّ مَرَقَ مِنْ دِينِهِمْ وَفَرَّقَ أَمْرَهُمْ', 'بِأَنَّهُ سَرَقَ أَمْوَالَهُمْ', 'بِأَنَّهُ لَمْ يَتَكَلَّمْ مَعَهُمْ قَطُّ'],
          answer: 0,
          qEn: 'What did the Jews accuse our master Isa of before the governor?',
          optionsEn: ['That he was a rebellious anarchist who broke from their religion and caused division among them', 'That he stole their wealth', 'That he never spoke to them at all'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'إِنَّهُ رَجُلٌ',
        post: 'فَوْضَوِيٌّ.',
        en: 'He is a rebellious, anarchic man.',
        options: ['ثَائِرٌ', 'ثَائِرًا', 'ثَائِرٍ', 'ثُوَّار'],
        answer: 0,
        rationales: [
          'Indefinite nominative -- a second predicate noun after إِنَّهُ رَجُلٌ, agreeing with رَجُلٌ.',
          'Accusative -- wrong case; nothing here governs the accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural -- wrong number; a single man is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَاسْتَهْوَى',
        post: 'فَفُتِنُوا بِهِ.',
        en: 'He enticed our youth, so they were led astray by him.',
        options: ['شَبَابَنَا', 'شَبَابُنَا', 'شَبَابِنَا', 'شَبَابَهُمْ'],
        answer: 0,
        rationales: [
          'Accusative -- direct object of اسْتَهْوَى, "our youth."',
          'Nominative -- wrong case; a direct object needs the accusative.',
          'Genitive -- wrong case for the same reason.',
          '"their youth" -- wrong possessor; the youth belong to "us" (the Jews speaking), not a third party.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَسَفَّهَ أَحْلَامَنَا وَشَغَلَ',
        post: '.',
        en: 'and made our minds foolish and occupied our thoughts.',
        options: ['بَالَنَا', 'بَالُنَا', 'بَالِنَا', 'بَالَهُمْ'],
        answer: 0,
        rationales: [
          'Accusative -- direct object of شَغَلَ, "our thoughts."',
          'Nominative -- wrong case; a direct object needs the accusative.',
          'Genitive -- wrong case for the same reason.',
          '"their thoughts" -- wrong possessor; the speakers mean their own minds.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'مَرَقَ الرَّجُلُ مِنْ دِينِنَا',
        pre: '',
        post: 'مِنْ دِينِنَا',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (ms)',
        options: ['مَرَقْتَ', 'مَرَقَ', 'مَرَقْتُ', 'مَرَقُوا'],
        answer: 0,
        rationales: [
          '2nd masculine singular perfect -- matches أَنْتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '3rd masculine plural -- wrong person and number.',
        ],
      },
      {
        type: 'shift',
        base: 'مَرَقَ الرَّجُلُ مِنْ دِينِنَا',
        pre: '',
        post: 'مِنْ دِينِنَا',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['مَرَقُوا', 'مَرَقَ', 'مَرَقْتَ', 'مَرَقْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine plural perfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd masculine singular -- wrong person; the target is "they," not "you."',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'مَرَقَ الرَّجُلُ مِنْ دِينِنَا',
        pre: '',
        post: 'مِنْ دِينِنَا',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['مَرَقْنَا', 'مَرَقَ', 'مَرَقْتَ', 'مَرَقُوا'],
        answer: 0,
        rationales: [
          '1st plural perfect -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person; the target is "we," not "you."',
          '3rd masculine plural -- wrong person; the target is "we," not "they."',
        ],
      },
    ],
  },
};

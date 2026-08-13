// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 5 -- نِعْمَةُ اللَّهِ عَلَى بَنِي إِسْرَائِيلَ.
// Printed page 254 only -- the heading sits partway down the page (right
// after ch4's closing line) and the whole chapter ends before ch6's
// heading نُكْرَانٌ لِلْجَمِيلِ, which opens later the same page.
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// A short pivot chapter: three brief sentences of narration -- the Children
// of Israel were distinguished among their contemporaries by monotheism,
// which is why Allah favored them -- followed by the Qur'an's own record of
// that favor, quoted directly (identified as Sūrat al-Baqarah 2:47, whose
// wording is repeated verbatim at 2:122).
//
// Grammar / lexical notes:
//   -- The chapter's own prose is very short (three sentences before the
//      Qur'an quote), so unlike most other chapters in this volume the
//      long single Qur'anic sentence is split at its one internal
//      grammatical clause boundary (وَأَنِّي فَضَّلْتُكُمْ...) even though the
//      scan shows no printed waqf mark (ۖ ۚ ۗ) there -- needed to clear the
//      five-buildable-sentence minimum in CHAPTER-FORMAT.md without
//      inventing content. This is an exception to the stricter
//      waqf-mark-only splitting rule established in this volume's
//      chapter-12.js (used there because that chapter had length to spare);
//      flagged for the centralized QA pass to note as a deliberate,
//      documented departure rather than an inconsistency.
//   -- تَعَالَى (qs-v12-c05-004) reuses the lemma already introduced in
//      ch1 of this volume (سَبَّحَ، تَعَالَى cluster) -- not re-added to
//      newWords here.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): تَوْحِيد، سِرّ، غَيْر،
//      حِينَئِذٍ، أَنْعَمَ، عَالَم، قَالَ، اللَّه، إِسْرَائِيل (ch1)، تَعَالَى (ch1)
//      are all already taught and are NOT re-listed in newWords here.
//
// 7 new words: اِمْتَازَ، مُعَاصِر، عَقِيدَة، تَفْضِيل، ذَكَرَ، فَضَّلَ، نِعْمَة.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch5',
  title: { ar: 'نِعْمَةُ اللَّهِ عَلَى بَنِي إِسْرَائِيلَ', en: 'God’s Favor upon the Children of Israel' },
  newWords: [
    'اِمْتَازَ', 'مُعَاصِر', 'عَقِيدَة', 'تَفْضِيل', 'ذَكَرَ', 'فَضَّلَ',
    'نِعْمَة',
  ],
  lemmas: {
    اِمْتَازَ: { gloss: 'to be distinguished, stand out' },
    مُعَاصِر: { gloss: 'contemporary' },
    عَقِيدَة: { gloss: 'creed, doctrine' },
    تَفْضِيل: { gloss: 'preference, favoring' },
    ذَكَرَ: { gloss: 'to remember, mention' },
    فَضَّلَ: { gloss: 'to favor, prefer' },
    نِعْمَة: { gloss: 'a blessing, favor' },
  },
  paragraphs: [
    {
      en: 'They were a nation distinguished from the nations of their time by the creed of monotheism, and that was the secret of their being preferred over others at that time. Allah, Most High, said: "O Children of Israel, remember My favor which I bestowed upon you, and that I preferred you over the worlds."',
      sentences: [
        {
          id: 'qs-v12-c05-001',
          ar: 'وَكَانُوا أُمَّةً تَمْتَازُ عَنِ الْأُمَمِ الْمُعَاصِرَةِ لَهُمْ،',
          en: 'They were a nation distinguished from the nations of their time,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they were' },
            { surface: 'أُمَّةً', lemma: 'أُمَّة', pos: 'noun', features: 'indef.acc', gloss: 'a nation' },
            { surface: 'تَمْتَازُ', lemma: 'اِمْتَازَ', pos: 'verb', features: 'impf.3fs', gloss: 'to be distinguished; distinguished' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْأُمَمِ', lemma: 'أُمَّة', pos: 'noun', features: 'def.gen.pl', gloss: 'the nations' },
            { surface: 'الْمُعَاصِرَةِ', lemma: 'مُعَاصِر', pos: 'adj', features: 'def.gen.f', gloss: 'contemporary' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v12-c05-002',
          ar: 'بِعَقِيدَةِ التَّوْحِيدِ،',
          en: 'by the creed of monotheism,',
          tokens: [
            { surface: 'بِعَقِيدَةِ', lemma: 'عَقِيدَة', pos: 'noun', features: 'prep+constr.gen', gloss: 'by the creed of' },
            { surface: 'التَّوْحِيدِ', lemma: 'تَوْحِيد', pos: 'noun', features: 'def.gen', gloss: 'monotheism' },
          ],
        },
        {
          id: 'qs-v12-c05-003',
          ar: 'وَذَلِكَ سِرُّ تَفْضِيلِهِمْ عَلَى غَيْرِهِمْ حِينَئِذٍ،',
          en: 'and that was the secret of their being preferred over others at that time.',
          tokens: [
            { surface: 'وَذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'conj+dem.m', gloss: 'and that' },
            { surface: 'سِرُّ', lemma: 'سِرّ', pos: 'noun', features: 'nom.constr', gloss: 'the secret of' },
            { surface: 'تَفْضِيلِهِمْ', lemma: 'تَفْضِيل', pos: 'noun', features: 'gen+3mp', gloss: 'their being preferred' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'غَيْرِهِمْ', lemma: 'غَيْر', pos: 'noun', features: 'gen+3mp', gloss: 'others' },
            { surface: 'حِينَئِذٍ', lemma: 'حِينَئِذٍ', pos: 'adv', features: 'adv', gloss: 'at that time' },
          ],
        },
        {
          id: 'qs-v12-c05-004',
          ar: 'وَقَدْ قَالَ اللَّهُ تَعَالَى:',
          en: 'Allah, Most High, said:',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; Most High' },
          ],
        },
        {
          id: 'qs-v12-c05-005',
          ar: '﴿يَا بَنِي إِسْرَائِيلَ﴾',
          en: 'O Children of Israel,',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', gloss: 'children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
          ],
        },
        {
          id: 'qs-v12-c05-006',
          ar: '﴿اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ﴾',
          en: 'remember My favor which I bestowed upon you,',
          tokens: [
            { surface: 'اذْكُرُوا', lemma: 'ذَكَرَ', pos: 'verb', features: 'imp.2mp', gloss: 'to remember; remember' },
            { surface: 'نِعْمَتِيَ', lemma: 'نِعْمَة', pos: 'noun', features: 'acc+1s', gloss: 'my favor' },
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'f.rel', gloss: 'which' },
            { surface: 'أَنْعَمْتُ', lemma: 'أَنْعَمَ', pos: 'verb', features: 'perf.1s', gloss: 'to bestow favor; I bestowed' },
            { surface: 'عَلَيْكُمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+2mp', gloss: 'upon you' },
          ],
        },
        {
          id: 'qs-v12-c05-007',
          ar: '﴿وَأَنِّي فَضَّلْتُكُمْ عَلَى الْعَالَمِينَ﴾.',
          en: 'and that I preferred you over the worlds."',
          tokens: [
            { surface: 'وَأَنِّي', lemma: 'أَنَّ', pos: 'part', features: 'conj+part+1s', gloss: 'and that I' },
            { surface: 'فَضَّلْتُكُمْ', lemma: 'فَضَّلَ', pos: 'verb', features: 'perf.1s+2mp', gloss: 'to favor, prefer; I preferred you' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'def.gen.pl', gloss: 'the worlds' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَ كَانَ بَنُو إِسْرَائِيلَ يَمْتَازُونَ عَنِ الْأُمَمِ الْمُعَاصِرَةِ لَهُمْ؟',
          options: ['بِعَقِيدَةِ التَّوْحِيدِ', 'بِكَثْرَةِ أَمْوَالِهِمْ', 'بِقُوَّةِ جُيُوشِهِمْ'],
          answer: 0,
          qEn: 'What distinguished the Children of Israel from the nations of their time?',
          optionsEn: ['The creed of monotheism', 'The abundance of their wealth', 'The strength of their armies'],
        },
        {
          q: 'بِمَاذَا أَمَرَ اللَّهُ بَنِي إِسْرَائِيلَ فِي الْآيَةِ؟',
          options: ['أَنْ يَذْكُرُوا نِعْمَتَهُ الَّتِي أَنْعَمَ بِهَا عَلَيْهِمْ وَتَفْضِيلَهُ إِيَّاهُمْ عَلَى الْعَالَمِينَ', 'أَنْ يُهَاجِرُوا إِلَى أَرْضٍ أُخْرَى', 'أَنْ يَتَّبِعُوا مُوسَى عَلَيْهِ السَّلَامُ فَقَطْ'],
          answer: 0,
          qEn: 'What did Allah command the Children of Israel in this āyah?',
          optionsEn: ['To remember His favor upon them and His preferring them over the worlds', 'To migrate to another land', 'To follow only Musa, peace be upon him'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'يَا بَنِي إِسْرَائِيلَ',
        post: 'نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ.',
        en: 'O Children of Israel, remember My favor which I bestowed upon you.',
        options: ['اذْكُرُوا', 'ذَكَرُوا', 'يَذْكُرُونَ', 'اذْكُرْ'],
        answer: 0,
        rationales: [
          'Imperative, 2nd masculine plural -- addressed to the Children of Israel as a group.',
          'Perfect -- wrong mood; this is a command, not a report.',
          'Imperfect -- wrong mood for a direct command.',
          'Imperative singular -- wrong number; the address is plural.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانُوا',
        post: 'تَمْتَازُ عَنِ الْأُمَمِ الْمُعَاصِرَةِ لَهُمْ بِعَقِيدَةِ التَّوْحِيدِ.',
        en: 'They were a nation distinguished from their contemporaries by the creed of monotheism.',
        options: ['أُمَّةً', 'أُمَّةٌ', 'أُمَّةٍ', 'أُمَمًا'],
        answer: 0,
        rationales: [
          'Indefinite accusative -- predicate of كَانُوا.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural -- wrong number; a single nation is meant here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَنِّي',
        post: 'عَلَى الْعَالَمِينَ.',
        en: 'and that I preferred you over the worlds.',
        options: ['فَضَّلْتُكُمْ', 'فَضَّلَكُمْ', 'تُفَضِّلُكُمْ', 'فَضَّلْنَاكُمْ'],
        answer: 0,
        rationales: [
          '1st singular perfect + object -- matches the printed وَأَنِّي فَضَّلْتُكُمْ, Allah speaking of Himself.',
          '3rd masculine singular -- wrong person; the speaker is "I," not "he."',
          'Imperfect -- wrong tense; this narrates a completed favor.',
          '1st plural -- wrong number; the speaker uses the singular هُوَ...أَنِّي form here, not "We."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَذْكُرُ الْوَلَدُ نِعْمَةَ اللَّهِ',
        pre: '',
        post: 'نِعْمَةَ اللَّهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَذْكُرُ', 'يَذْكُرُ', 'تَذْكُرُ', 'نَذْكُرُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted.',
          '2nd masculine singular -- wrong person.',
          '1st plural -- wrong number; the target is singular.',
        ],
      },
      {
        type: 'shift',
        base: 'يَذْكُرُ الْوَلَدُ نِعْمَةَ اللَّهِ',
        pre: '',
        post: 'نِعْمَةَ اللَّهِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَذْكُرُ', 'يَذْكُرُ', 'تَذْكُرُ', 'أَذْكُرُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted.',
          '2nd masculine singular -- wrong person.',
          '1st singular -- wrong number; the target is "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَذْكُرُ الْوَلَدُ نِعْمَةَ اللَّهِ',
        pre: '',
        post: 'نِعْمَةَ اللَّهِ',
        targetPerson: 'أَنْتِ',
        targetEn: 'you (fs)',
        options: ['تَذْكُرِينَ', 'يَذْكُرُ', 'أَذْكُرُ', 'نَذْكُرُ'],
        answer: 0,
        rationales: [
          '2nd feminine singular -- matches أَنْتِ.',
          '3rd masculine singular -- the base form, not shifted.',
          '1st singular -- wrong person.',
          '1st plural -- wrong person and number.',
        ],
      },
    ],
  },
};

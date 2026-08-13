// قَصَصُ النَّبِيِّينَ, volume 4 «الْعَاصِفَةُ», chapter 2 -- كُفْرَانُ عَادٍ.
// Printed pages 84 (after ch1's closing وَعُيُونٌ كَثِيرَةٌ) - 85 (top, ending
// before ch3's heading عُدْوَانُ عَادٍ). Transcribed by hand from a 200dpi
// render against ../CHAPTER-FORMAT.md.
//
// ʿĀd forgets both the Flood story their fathers told them and the reason
// Allah sent it, and slides straight into carving, worshiping, petitioning,
// and sacrificing to idols -- explicitly on the model of Nūḥ's own people
// (عَلَى أَثَرِ أُمَّةِ نُوحٍ). No Qur'anic quotation on these pages.
//
// Grammar / lexical notes:
//   -- لَمْ يَشْكُرُوا (qs-v4-c02-001) is this chapter's only لَمْ + jussive
//      instance -- tagged plain impf.3mp per the established
//      prohibitive/negating-jussive convention (mood not tracked
//      separately; see qasas-v1 ch11's header note).
//   -- وَلَكِنَّ (qs-v4-c02-001) reuses qasas-v2 ch4's tagging: pos 'conj',
//      features 'conj' -- the accusative it puts on عَاداً is captured on
//      عَاداً's own features (acc), not marked again on the particle.
//   -- Two قس-v4-c02-{006,007} both open with وَكَانُوا and are printed
//      across a line-wrap with no comma between them; split at that natural
//      clause boundary rather than kept as one 11-word run, matching the
//      no-punctuation split precedent already set in qasas-v3 ch1's header
//      note.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): وَلَكِنَّ، شَكَرَ، عَلَى،
//      هَذِهِ، نَسِيَ، قِصَّة، طُوفَان، الَّتِي، سَمِعَ، مِنْ، أَب، رَأَى، في، الأَرْض،
//      لِمَاذَا، أَرْسَلَ، اللَّه، أُمَّة، نُوح، صَارَ، عَبَدَ، صَنَم، كَمَا، كَانَ، حِجَارَة،
//      يَد، ثُمَّ، سَجَدَ، لِ، سَأَلَ، حَاجَة، دَعَا، ذَبَحَ، عَقْل، لَا، مَنَعَ، عِبَادَة،
//      هَدَى، عَاقِل، دُنْيَا، دِين are all already taught and NOT re-listed.
//
// 4 new words this chapter: نِعْمَة، أَثَر، نَحَتَ، غَبِيّ.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch2',
  title: { ar: 'كُفْرَانُ عَادٍ', en: 'The Ingratitude of ʿĀd' },
  newWords: ['نِعْمَة', 'أَثَر', 'نَحَتَ', 'غَبِيّ'],
  lemmas: {
    'نِعْمَة': { gloss: 'blessing, favor' },
    'أَثَر': { gloss: 'trace, mark' },
    'نَحَتَ': { gloss: 'to carve' },
    'غَبِيّ': { gloss: 'foolish, ignorant' },
  },
  paragraphs: [
    {
      en: "But ʿĀd did not thank Allah for these many blessings. They forgot the story of the Flood which they had heard from their fathers and had seen its traces in the earth -- forgetting why Allah had sent the Flood upon Nūḥ's nation. They began worshiping idols just as Nūḥ's nation had worshiped idols: they used to carve the idols from stone with their own hands, then prostrate to them and worship them, ask them for their needs, pray to them, and sacrifice to them -- following in the footsteps of Nūḥ's nation. Their minds did not stop them from worshiping idols, nor did their minds guide them: they were wise in worldly matters, but ignorant in religion.",
      sentences: [
        {
          id: 'qs-v4-c02-001',
          ar: 'وَلَكِنَّ عَاداً لَمْ يَشْكُرُوا اللَّهَ عَلَى هَذِهِ النِّعَمِ الْكَثِيرَةِ.',
          en: 'But ʿĀd did not thank Allah for these many blessings.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'عَاداً', lemma: 'عَاد', pos: 'proper', features: 'acc', gloss: 'ʿĀd' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَشْكُرُوا', lemma: 'شَكَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to thank; did not thank' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'النِّعَمِ', lemma: 'نِعْمَة', pos: 'noun', features: 'pl.def.gen', gloss: 'the blessings' },
            { surface: 'الْكَثِيرَةِ', lemma: 'كَثِير', pos: 'adj', features: 'def.gen.f', gloss: 'many, numerous' },
          ],
        },
        {
          id: 'qs-v4-c02-002',
          ar: 'وَنَسِيَتْ عَادٌ قِصَّةَ الطُّوفَانِ الَّتِي سَمِعُوهَا مِنْ آبَائِهِمْ',
          en: 'They forgot the story of the Flood which they had heard from their fathers',
          tokens: [
            { surface: 'وَنَسِيَتْ', lemma: 'نَسِيَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to forget; and forgot' },
            { surface: 'عَادٌ', lemma: 'عَاد', pos: 'proper', features: 'nom', gloss: 'ʿĀd' },
            { surface: 'قِصَّةَ', lemma: 'قِصَّة', pos: 'noun', features: 'acc.constr', gloss: 'the story of' },
            { surface: 'الطُّوفَانِ', lemma: 'طُوفَان', pos: 'noun', features: 'def.gen', gloss: 'the Flood' },
            { surface: 'الَّتِي', lemma: 'الَّتِي', pos: 'rel', features: 'rel', gloss: 'which' },
            { surface: 'سَمِعُوهَا', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.3mp+3fs', gloss: 'to hear; they heard it' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'آبَائِهِمْ', lemma: 'أَب', pos: 'noun', features: 'pl.gen+3mp', gloss: 'their fathers' },
          ],
        },
        {
          id: 'qs-v4-c02-003',
          ar: 'وَرَأَوْا آثَارَهُ فِي الأَرْضِ.',
          en: 'and had seen its traces in the earth.',
          tokens: [
            { surface: 'وَرَأَوْا', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to see; and they saw' },
            { surface: 'آثَارَهُ', lemma: 'أَثَر', pos: 'noun', features: 'pl.acc+3ms', gloss: 'its traces' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
          ],
        },
        {
          id: 'qs-v4-c02-004',
          ar: 'وَنَسُوا لِمَاذَا أَرْسَلَ اللَّهُ الطُّوفَانَ عَلَى أُمَّةِ نُوحٍ.',
          en: "They forgot why Allah had sent the Flood upon Nūḥ's nation.",
          tokens: [
            { surface: 'وَنَسُوا', lemma: 'نَسِيَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to forget; and they forgot' },
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'rel', features: 'rel', gloss: 'why' },
            { surface: 'أَرْسَلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to send; sent' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'الطُّوفَانَ', lemma: 'طُوفَان', pos: 'noun', features: 'def.acc', gloss: 'the Flood' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'أُمَّةِ', lemma: 'أُمَّة', pos: 'noun', features: 'constr.gen', gloss: 'the nation of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v4-c02-005',
          ar: 'وَصَارُوا يَعْبُدُونَ الأَصْنَامَ كَمَا كَانَتْ أُمَّةُ نُوحٍ تَعْبُدُ الأَصْنَامَ.',
          en: "They began worshiping idols just as Nūḥ's nation had worshiped idols.",
          tokens: [
            { surface: 'وَصَارُوا', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to become; and they began to' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship; worship' },
            { surface: 'الأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', gloss: 'the idols' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be; was' },
            { surface: 'أُمَّةُ', lemma: 'أُمَّة', pos: 'noun', features: 'constr.nom', gloss: 'the nation of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
            { surface: 'تَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3fs', gloss: 'to worship; worshiped' },
            { surface: 'الأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', gloss: 'the idols' },
          ],
        },
        {
          id: 'qs-v4-c02-006',
          ar: 'وَكَانُوا يَنْحِتُونَ الأَصْنَامَ مِنَ الْحِجَارَةِ بِأَيْدِيهِمْ',
          en: 'They used to carve the idols from stone with their own hands,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they used to' },
            { surface: 'يَنْحِتُونَ', lemma: 'نَحَتَ', pos: 'verb', features: 'impf.3mp', gloss: 'to carve; carve' },
            { surface: 'الأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', gloss: 'the idols' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْحِجَارَةِ', lemma: 'حِجَارَة', pos: 'noun', features: 'def.gen', gloss: 'the stone' },
            { surface: 'بِأَيْدِيهِمْ', lemma: 'يَد', pos: 'noun', features: 'prep+pl.gen+3mp', gloss: 'with their hands' },
          ],
        },
        {
          id: 'qs-v4-c02-007',
          ar: 'ثُمَّ يَسْجُدُونَ لَهَا وَيَعْبُدُونَهَا.',
          en: 'then prostrate to them and worship them.',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'يَسْجُدُونَ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to prostrate; prostrate' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'to them' },
            { surface: 'وَيَعْبُدُونَهَا', lemma: 'عَبَدَ', pos: 'verb', features: 'conj+impf.3mp+3fs', gloss: 'to worship; and worship them' },
          ],
        },
        {
          id: 'qs-v4-c02-008',
          ar: 'وَكَانُوا يَسْأَلُونَهَا حَاجَاتِهِمْ وَيَدْعُونَهَا وَيَذْبَحُونَ لَهَا',
          en: 'They used to ask them for their needs, pray to them, and sacrifice to them,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they used to' },
            { surface: 'يَسْأَلُونَهَا', lemma: 'سَأَلَ', pos: 'verb', features: 'impf.3mp+3fs', gloss: 'to ask; ask them (for)' },
            { surface: 'حَاجَاتِهِمْ', lemma: 'حَاجَة', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their needs' },
            { surface: 'وَيَدْعُونَهَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+impf.3mp+3fs', gloss: 'to call, pray to; and pray to them' },
            { surface: 'وَيَذْبَحُونَ', lemma: 'ذَبَحَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to slaughter; and sacrifice' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v4-c02-009',
          ar: 'وَكَانُوا عَلَى أَثَرِ أُمَّةِ نُوحٍ.',
          en: "following in the footsteps of Nūḥ's nation.",
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they were' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'أَثَرِ', lemma: 'أَثَر', pos: 'noun', features: 'constr.gen', gloss: 'the trace, path of' },
            { surface: 'أُمَّةِ', lemma: 'أُمَّة', pos: 'noun', features: 'constr.gen', gloss: 'the nation of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v4-c02-010',
          ar: 'وَكَانَتْ عُقُولُهُمْ لَا تَمْنَعُهُمْ مِنْ عِبَادَةِ الأَصْنَامِ.',
          en: 'Their minds did not stop them from worshiping idols.',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be; and was' },
            { surface: 'عُقُولُهُمْ', lemma: 'عَقْل', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their minds' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَمْنَعُهُمْ', lemma: 'مَنَعَ', pos: 'verb', features: 'impf.3fs+3mp', gloss: 'to prevent; prevent them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'constr.gen', gloss: 'the worship of' },
            { surface: 'الأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the idols' },
          ],
        },
        {
          id: 'qs-v4-c02-011',
          ar: 'وَكَانَتْ عُقُولُهُمْ لَا تَهْدِيهِمْ.',
          en: 'Their minds did not guide them,',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be; and was' },
            { surface: 'عُقُولُهُمْ', lemma: 'عَقْل', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their minds' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَهْدِيهِمْ', lemma: 'هَدَى', pos: 'verb', features: 'impf.3fs+3mp', gloss: 'to guide; guide them' },
          ],
        },
        {
          id: 'qs-v4-c02-012',
          ar: 'وَكَانُوا عُقَلَاءَ فِي الدُّنْيَا أَغْبِيَاءَ فِي الدِّينِ.',
          en: 'they were wise in worldly matters, but ignorant in religion.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they were' },
            { surface: 'عُقَلَاءَ', lemma: 'عَاقِل', pos: 'adj', features: 'pl.indef.acc', gloss: 'wise, sensible' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الدُّنْيَا', lemma: 'دُنْيَا', pos: 'noun', features: 'def.gen', gloss: 'this world' },
            { surface: 'أَغْبِيَاءَ', lemma: 'غَبِيّ', pos: 'adj', features: 'pl.indef.acc', gloss: 'foolish, ignorant' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الدِّينِ', lemma: 'دِين', pos: 'noun', features: 'def.gen', gloss: 'religion' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا نَسِيَتْ عَادٌ؟',
          options: ['قِصَّةَ الطُّوفَانِ وَلِمَاذَا أَرْسَلَهُ اللَّهُ', 'اسْمَ جَدِّهِمْ نُوحٍ', 'مَكَانَ بِلَادِهِمْ'],
          answer: 0,
          qEn: 'What did ʿĀd forget?',
          optionsEn: ['The story of the Flood and why Allah sent it', 'The name of their forefather Nūḥ', 'The location of their own land'],
        },
        {
          q: 'كَيْفَ صَارَتْ عَادٌ تَعْبُدُ الأَصْنَامَ؟',
          options: ['نَحَتُوهَا مِنَ الْحِجَارَةِ بِأَيْدِيهِمْ ثُمَّ عَبَدُوهَا', 'وَرِثُوهَا مِنَ الْفُرْسِ', 'اشْتَرَوْهَا مِنْ تُجَّارٍ غُرَبَاءَ'],
          answer: 0,
          qEn: 'How did ʿĀd come to worship idols?',
          optionsEn: ['They carved them from stone with their own hands, then worshiped them', 'They inherited them from the Persians', 'They bought them from foreign merchants'],
        },
        {
          q: 'كَيْفَ كَانَتْ عُقُولُ عَادٍ؟',
          options: ['عُقَلَاءَ في الدُّنْيَا أَغْبِيَاءَ في الدِّينِ', 'أَغْبِيَاءَ في كُلِّ شَيْءٍ', 'عُقَلَاءَ في الدِّينِ وَالدُّنْيَا مَعاً'],
          answer: 0,
          qEn: "How were ʿĀd's minds?",
          optionsEn: ['Wise in worldly matters, ignorant in religion', 'Foolish in everything', 'Wise in both religion and worldly matters'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَتْ عُقُولُهُمْ لَا',
        post: 'مِنْ عِبَادَةِ الأَصْنَامِ.',
        en: 'Their minds did not stop them from worshiping idols.',
        options: ['تَمْنَعُهُمْ', 'يَمْنَعُهُمْ', 'تَمْنَعُونَهُمْ', 'نَمْنَعُهُمْ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- agrees with the feminine plural/collective subject عُقُولُهُمْ.',
          '3rd masculine singular -- wrong gender.',
          '2nd/3rd masculine plural -- wrong subject entirely.',
          '1st plural -- wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانُوا يَنْحِتُونَ الأَصْنَامَ مِنَ',
        post: 'بِأَيْدِيهِمْ.',
        en: 'They used to carve the idols from stone with their own hands.',
        options: ['الْحِجَارَةِ', 'الْحِجَارَةَ', 'الْحِجَارَةُ', 'حِجَارَةٍ'],
        answer: 0,
        rationales: [
          'Genitive, definite -- object of the preposition مِنَ.',
          'Accusative -- wrong case; a preposition requires the genitive.',
          'Nominative -- wrong case for the same reason.',
          'Indefinite -- wrong; the stone just carved from is definite here (الحجارة, already mentioned as their material).',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانُوا عُقَلَاءَ في الدُّنْيَا',
        post: 'في الدِّينِ.',
        en: 'They were wise in worldly matters, but ignorant in religion.',
        options: ['أَغْبِيَاءَ', 'أَغْبِيَاءُ', 'أَغْبِيَاءِ', 'غَبِيًّا'],
        answer: 0,
        rationales: [
          'Accusative, plural -- second predicate of كَانُوا, matching عُقَلَاءَ.',
          'Nominative -- wrong case.',
          'Genitive -- wrong case.',
          'Singular -- wrong number; the subject هُمْ is plural.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَعْبُدُونَ الأَصْنَامَ',
        pre: '',
        post: 'الأَصْنَامَ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (m. pl.)',
        options: ['تَعْبُدُونَ', 'يَعْبُدُونَ', 'نَعْبُدُ', 'أَعْبُدُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنْتُمْ.',
          '3rd masculine plural -- they, the form already given.',
          '1st plural -- we.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْبُدُونَ الأَصْنَامَ',
        pre: '',
        post: 'الأَصْنَامَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَعْبُدُ', 'يَعْبُدُونَ', 'نَعْبُدُ', 'أَعْبُدُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine plural -- they, the form already given.',
          '1st plural -- we.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْبُدُونَ الأَصْنَامَ',
        pre: '',
        post: 'الأَصْنَامَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَعْبُدُ', 'يَعْبُدُونَ', 'تَعْبُدُ', 'أَعْبُدُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine plural -- they, the form already given.',
          '3rd/2nd feminine or masculine singular -- wrong.',
          '1st singular -- I.',
        ],
      },
    ],
  },
};

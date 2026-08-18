// قَصَصُ النَّبِيِّينَ, volume 4 «الْعَاصِفَةُ», chapter 7 -- جَوَابُ الْقَوْمِ.
// Printed pages 89 (after ch6's closing أَمْ هُوَ أَجَلُّ مِنَ الْحَيَوَانِ؟) - 90
// (top, ending before ch8's heading حِكْمَةُ هُودٍ). Transcribed by hand from
// a 200dpi render against ../CHAPTER-FORMAT.md.
//
// ʿĀd's first answer to Hūd: bafflement curdling into name-calling ("a fool
// or a madman"), then -- on his second attempt -- their nobles' direct
// accusation of foolishness and lying, quoted straight from the Qur'an
// (7:66), and Hūd's own reply (7:67-68) denying the charge and naming
// himself a trustworthy messenger.
//
// Grammar / lexical notes:
//   -- Three Qur'anic quotations this chapter (7:66, 7:67, 7:68) are each
//      split into ≤2-token fragments, the same workaround used in this
//      volume's ch6 for 7:65/11:50 and originally in qasas-v2 ch1 (see
//      QASAS_AGENT_BRIEF.md §6) -- every fragment falls under
//      BUILD_MIN_TOKENS (3), keeping them out of the build stage regardless
//      of the visible case marks on سَفَاهَةٍ، الْكَاذِبِينَ، رِسَالَاتِ، etc.
//   -- لَنَرَاكَ / لَنَظُنُّكَ (qs-v4-c07-{008,010}) fuse three segments: the
//      emphatic لَ (تَوْكِيد, tagged as a leading 'part' proclitic like other
//      fused particles in this corpus), the 1st-plural imperfect verb, and
//      the attached 2nd-person object -- features 'part+impf.1p+2ms',
//      extending the documented proclitic+main+enclitic pattern to three
//      segments (CHAPTER-FORMAT.md doesn't cap the count).
//   -- أَشْرَافُ (qs-v4-c07-014) reuses the already-taught شَرِيف ('noble')
//      in its broken-plural sense ('the nobles, chiefs of') -- not
//      re-listed in newWords, same lemma.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ، قَوْم، في، شُغْل،
//      أَكْل، شُرْب، لَهْو، لَعِب، قَدْ، رَضِيَ، حَيَاة، الدُّنْيَا، اِطْمَأَنَّ، بِ، قَلْب،
//      كَلَام، هُود، قَالَ، بَعْض، لِ، مَا، رَجُل (implicit via context)، مَاذَا،
//      أَرَادَ، نَحْنُ، لَا، فَهِمَ، أَوْ، لَمَّا، دَعَا، مَرَّة، آخَر، شَرِيف، إِنَّ، رَأَى،
//      ظَنَّ، مِنْ، كَاذِب، لَيْسَ، لَكِنَّ، رَسُول، رَبّ، عَالَم، بَلَّغَ، رِسَالَة، أَنَا،
//      نَاصِح، أَمِين are all already taught and NOT re-listed.
//
// 3 new words this chapter: ضَاقَ، سَفِيه، مَجْنُون.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch7',
  title: { ar: 'جَوَابُ الْقَوْمِ', en: 'The Response of the People' },
  newWords: ['ضَاقَ', 'سَفِيه', 'مَجْنُون'],
  lemmas: {
    'ضَاقَ': { gloss: 'to become narrow, distressed' },
    'سَفِيه': { gloss: 'foolish, unwise' },
    'مَجْنُون': { gloss: 'mad, possessed' },
  },
  paragraphs: [
    {
      lines: true,
      en: "The people were occupied with nothing but eating, drinking, amusement, and play. They were content with the worldly life and were at ease with it. Their hearts grew distressed at Hūd's words, and some of them said to others: 'What is Hūd saying? What does Hūd want? We do not understand his words!' They said: 'A fool, or a madman!' When Hūd called them once again, the nobles of his people said: 'Indeed we see you in foolishness, and indeed we think you to be among the liars.' He said: 'O my people, there is not in me any foolishness, but I am a messenger from the Lord of the worlds. I convey to you the messages of my Lord, and I am to you a trustworthy advisor.'",
      sentences: [
        {
          id: 'qs-v4-c07-001',
          ar: 'كَانَ الْقَوْمُ فِي شُغْلٍ مِنَ الأَكْلِ وَالشُّرْبِ وَاللَّهْوِ وَاللَّعِبِ.',
          en: 'The people were occupied with nothing but eating, drinking, amusement, and play.',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; were' },
            { surface: 'الْقَوْمُ', lemma: 'قَوْم', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'شُغْلٍ', lemma: 'شُغْل', pos: 'noun', features: 'indef.gen', gloss: 'occupation' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الأَكْلِ', lemma: 'أَكْل', pos: 'noun', features: 'def.gen', gloss: 'eating' },
            { surface: 'وَالشُّرْبِ', lemma: 'شُرْب', pos: 'noun', features: 'conj+def.gen', gloss: 'and drinking' },
            { surface: 'وَاللَّهْوِ', lemma: 'لَهْو', pos: 'noun', features: 'conj+def.gen', gloss: 'and amusement' },
            { surface: 'وَاللَّعِبِ', lemma: 'لَعِب', pos: 'noun', features: 'conj+def.gen', gloss: 'and play' },
          ],
        },
        {
          id: 'qs-v4-c07-002',
          ar: 'وَقَدْ رَضُوا بِالْحَيَاةِ الدُّنْيَا وَاطْمَأَنُّوا بِهَا.',
          en: 'They were content with the worldly life and were at ease with it.',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'رَضُوا', lemma: 'رَضِيَ', pos: 'verb', features: 'perf.3mp', gloss: 'to be content; were content' },
            { surface: 'بِالْحَيَاةِ', lemma: 'حَيَاة', pos: 'noun', features: 'prep+def.gen', gloss: 'with the life' },
            { surface: 'الدُّنْيَا', lemma: 'دُنْيَا', pos: 'adj', features: 'def.gen', gloss: 'worldly' },
            { surface: 'وَاطْمَأَنُّوا', lemma: 'اِطْمَأَنَّ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be at ease; and were at ease' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'with it' },
          ],
        },
        {
          id: 'qs-v4-c07-003',
          ar: 'ضَاقَ قَلْبُهُمْ بِكَلَامِ هُودٍ',
          en: "Their hearts grew distressed at Hūd's words,",
          tokens: [
            { surface: 'ضَاقَ', lemma: 'ضَاقَ', pos: 'verb', features: 'perf.3ms', gloss: 'to become distressed; grew distressed' },
            { surface: 'قَلْبُهُمْ', lemma: 'قَلْب', pos: 'noun', features: 'nom+3mp', gloss: 'their heart' },
            { surface: 'بِكَلَامِ', lemma: 'كَلَام', pos: 'noun', features: 'prep+constr.gen', gloss: 'at the words of' },
            { surface: 'هُودٍ', lemma: 'هُود', pos: 'proper', features: 'gen', gloss: 'Hūd' },
          ],
        },
        {
          id: 'qs-v4-c07-004',
          ar: 'وَقَالَ بَعْضُهُمْ لِبَعْضٍ:',
          en: 'and some of them said to others:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'بَعْضُهُمْ', lemma: 'بَعْض', pos: 'noun', features: 'nom+3mp', gloss: 'some of them' },
            { surface: 'لِبَعْضٍ', lemma: 'بَعْض', pos: 'noun', features: 'prep+indef.gen', gloss: 'to others' },
          ],
        },
        {
          id: 'qs-v4-c07-005',
          ar: 'مَا يَقُولُ هُودٌ؟',
          en: "'What is Hūd saying?",
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; is saying' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
          ],
        },
        {
          id: 'qs-v4-c07-006',
          ar: 'مَاذَا يُرِيدُ هُودٌ؟',
          en: 'What does Hūd want?',
          tokens: [
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3ms', gloss: 'to want; does want' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
          ],
        },
        {
          id: 'qs-v4-c07-007',
          ar: 'نَحْنُ لَا نَفْهَمُ كَلَامَهُ!',
          en: "We do not understand his words!'",
          tokens: [
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'نَفْهَمُ', lemma: 'فَهِمَ', pos: 'verb', features: 'impf.1p', gloss: 'to understand; understand' },
            { surface: 'كَلَامَهُ', lemma: 'كَلَام', pos: 'noun', features: 'acc+3ms', gloss: 'his speech' },
          ],
        },
        {
          id: 'qs-v4-c07-008',
          ar: 'قَالُوا:',
          en: 'They said:',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v4-c07-009',
          ar: 'سَفِيهٌ أَوْ مَجْنُونٌ!',
          en: "'A fool, or a madman!'",
          tokens: [
            { surface: 'سَفِيهٌ', lemma: 'سَفِيه', pos: 'noun', features: 'indef.nom', gloss: 'foolish' },
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'مَجْنُونٌ', lemma: 'مَجْنُون', pos: 'adj', features: 'indef.nom', gloss: 'mad, possessed' },
          ],
        },
        {
          id: 'qs-v4-c07-010',
          ar: 'وَلَمَّا دَعَاهُمْ هُودٌ مَرَّةً أُخْرَى،',
          en: 'When Hūd called them once again,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'and when' },
            { surface: 'دَعَاهُمْ', lemma: 'دَعَا', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to call; called them' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
            { surface: 'مَرَّةً', lemma: 'مَرَّة', pos: 'noun', features: 'indef.acc', gloss: 'a time' },
            { surface: 'أُخْرَى', lemma: 'آخَر', pos: 'adj', features: 'indef.acc.f', gloss: 'another' },
          ],
        },
        {
          id: 'qs-v4-c07-011',
          ar: 'قَالَ أَشْرَافُ قَوْمِهِ:',
          en: 'the nobles of his people said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'أَشْرَافُ', lemma: 'شَرِيف', pos: 'noun', features: 'pl.constr.nom', gloss: 'the nobles of' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
          ],
        },
        {
          id: 'qs-v4-c07-012',
          ar: '﴿إِنَّا لَنَرَاكَ',
          en: "'Indeed we see you",
          tokens: [
            { surface: 'إِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'part+1p', gloss: 'indeed we' },
            { surface: 'لَنَرَاكَ', lemma: 'رَأَى', pos: 'verb', features: 'part+impf.1p+2ms', gloss: 'to see; we surely see you' },
          ],
        },
        {
          id: 'qs-v4-c07-013',
          ar: 'فِي سَفَاهَةٍ',
          en: 'in foolishness,',
          tokens: [
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'سَفَاهَةٍ', lemma: 'سَفَاهَة', pos: 'noun', features: 'indef.gen', gloss: 'foolishness' },
          ],
        },
        {
          id: 'qs-v4-c07-014',
          ar: 'وَإِنَّا لَنَظُنُّكَ',
          en: 'and indeed we think you',
          tokens: [
            { surface: 'وَإِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1p', gloss: 'and indeed we' },
            { surface: 'لَنَظُنُّكَ', lemma: 'ظَنَّ', pos: 'verb', features: 'part+impf.1p+2ms', gloss: 'to think; we surely think you' },
          ],
        },
        {
          id: 'qs-v4-c07-015',
          ar: 'مِنَ الْكَاذِبِينَ﴾.',
          en: "to be among the liars.'",
          tokens: [
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْكَاذِبِينَ', lemma: 'كَاذِب', pos: 'noun', features: 'pl.def.gen', gloss: 'the liars' },
          ],
        },
        {
          id: 'qs-v4-c07-016',
          ar: '﴿قَالَ',
          en: 'He said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v4-c07-017',
          ar: 'يَاقَوْمِ',
          en: "'O my people,",
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: '1s', gloss: 'my people' },
          ],
        },
        {
          id: 'qs-v4-c07-018',
          ar: 'لَيْسَ بِي',
          en: 'there is not in me',
          tokens: [
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'بِي', lemma: 'بِ', pos: 'prep', features: 'prep+1s', gloss: 'in me' },
          ],
        },
        {
          id: 'qs-v4-c07-019',
          ar: 'سَفَاهَةٌ',
          en: 'any foolishness,',
          tokens: [
            { surface: 'سَفَاهَةٌ', lemma: 'سَفَاهَة', pos: 'noun', features: 'indef.nom', gloss: 'foolishness' },
          ],
        },
        {
          id: 'qs-v4-c07-020',
          ar: 'وَلَكِنِّي',
          en: 'but I am',
          tokens: [
            { surface: 'وَلَكِنِّي', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+1s', gloss: 'but I' },
          ],
        },
        {
          id: 'qs-v4-c07-021',
          ar: 'رَسُولٌ',
          en: 'a messenger',
          tokens: [
            { surface: 'رَسُولٌ', lemma: 'رَسُول', pos: 'noun', features: 'indef.nom', gloss: 'a messenger' },
          ],
        },
        {
          id: 'qs-v4-c07-022',
          ar: 'مِنْ رَبِّ',
          en: 'from the Lord of',
          tokens: [
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'constr.gen', gloss: 'the Lord of' },
          ],
        },
        {
          id: 'qs-v4-c07-023',
          ar: 'الْعَالَمِينَ﴾.',
          en: "the worlds.'",
          tokens: [
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the worlds' },
          ],
        },
        {
          id: 'qs-v4-c07-024',
          ar: '﴿أُبَلِّغُكُمْ',
          en: "'I convey to you",
          tokens: [
            { surface: 'أُبَلِّغُكُمْ', lemma: 'بَلَّغَ', pos: 'verb', features: 'impf.1s+2mp', gloss: 'to convey, deliver; I convey to you' },
          ],
        },
        {
          id: 'qs-v4-c07-025',
          ar: 'رِسَالَاتِ رَبِّي',
          en: 'the messages of my Lord,',
          tokens: [
            { surface: 'رِسَالَاتِ', lemma: 'رِسَالَة', pos: 'noun', features: 'pl.acc.constr', gloss: 'the messages of' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'gen+1s', gloss: 'my Lord' },
          ],
        },
        {
          id: 'qs-v4-c07-026',
          ar: 'وَأَنَا لَكُمْ',
          en: 'and I am to you',
          tokens: [
            { surface: 'وَأَنَا', lemma: 'أَنَا', pos: 'noun', features: 'conj+1s', gloss: 'and I' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
          ],
        },
        {
          id: 'qs-v4-c07-027',
          ar: 'نَاصِحٌ أَمِينٌ﴾.',
          en: "a trustworthy advisor.'",
          tokens: [
            { surface: 'نَاصِحٌ', lemma: 'نَاصِح', pos: 'noun', features: 'indef.nom', gloss: 'advising, an advisor' },
            { surface: 'أَمِينٌ', lemma: 'أَمِين', pos: 'adj', features: 'indef.nom', gloss: 'trustworthy' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ رَدُّ فِعْلِ الْقَوْمِ عَلَى كَلَامِ هُودٍ؟',
          options: ['ضَاقَ قَلْبُهُمْ بِهِ وَقَالُوا سَفِيهٌ أَوْ مَجْنُونٌ', 'فَرِحُوا بِهِ وَآمَنُوا بِهِ', 'لَمْ يَسْمَعُوهُ أَصْلاً'],
          answer: 0,
          qEn: "What was the people's reaction to Hūd's words?",
          optionsEn: ["They grew distressed at it and said 'a fool or a madman'", 'They rejoiced at it and believed him', 'They never heard it at all'],
        },
        {
          q: 'بِمَاذَا اتَّهَمَ أَشْرَافُ الْقَوْمِ هُوداً؟',
          options: ['بِالسَّفَاهَةِ وَالْكَذِبِ', 'بِالسَّرِقَةِ', 'بِأَنَّهُ غَرِيبٌ عَنْهُمْ'],
          answer: 0,
          qEn: 'What did the nobles of the people accuse Hūd of?',
          optionsEn: ['Foolishness and lying', 'Theft', 'Being a stranger to them'],
        },
        {
          q: 'بِمَاذَا وَصَفَ هُودٌ نَفْسَهُ عِنْدَمَا اتَّهَمُوهُ بِالسَّفَاهَةِ؟',
          options: ['رَسُولٌ مِنْ رَبِّ الْعَالَمِينَ نَاصِحٌ أَمِينٌ', 'مَلِكٌ مِنْ مُلُوكِ عَادٍ', 'سَاحِرٌ مَاهِرٌ'],
          answer: 0,
          qEn: 'How did Hūd describe himself when accused of foolishness?',
          optionsEn: ['A messenger from the Lord of the worlds, a trustworthy advisor', 'A king among the kings of ʿĀd', 'A skilled sorcerer'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'مَا',
        post: 'هُودٌ؟',
        en: 'What is Hūd saying?',
        options: ['يَقُولُ', 'تَقُولُ', 'يَقُولُونَ', 'أَقُولُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- agrees with هُودٌ.',
          '2nd masculine singular or 3rd feminine singular -- wrong person/gender.',
          'Plural -- wrong number; هُودٌ is one person.',
          '1st singular -- wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'نَحْنُ لَا',
        post: 'كَلَامَهُ!',
        en: 'We do not understand his words!',
        options: ['نَفْهَمُ', 'يَفْهَمُ', 'تَفْهَمُ', 'أَفْهَمُ'],
        answer: 0,
        rationales: [
          '1st plural -- agrees with نَحْنُ.',
          '3rd masculine singular -- he.',
          '2nd masculine singular -- you (m.).',
          '1st singular -- I.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَمَّا دَعَاهُمْ هُودٌ مَرَّةً',
        post: '،',
        en: 'When Hūd called them once again,',
        options: ['أُخْرَى', 'آخَرَ', 'أُخَرَ', 'آخَرِينَ'],
        answer: 0,
        rationales: [
          'Feminine singular -- agrees with the feminine noun مَرَّةً.',
          'Masculine singular -- wrong gender.',
          'Feminine plural -- wrong number; one further time is meant.',
          'Masculine plural -- wrong gender and number.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَفْهَمُ الرَّجُلُ كَلَامَهُ',
        pre: '',
        post: 'الرَّجُلُ كَلَامَهُ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَفْهَمُ', 'يَفْهَمُ', 'تَفْهَمُ', 'أَفْهَمُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَفْهَمُ الرَّجُلُ كَلَامَهُ',
        pre: '',
        post: 'الرَّجُلُ كَلَامَهُ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَفْهَمُ', 'يَفْهَمُ', 'نَفْهَمُ', 'أَفْهَمُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَفْهَمُ الرَّجُلُ كَلَامَهُ',
        pre: '',
        post: 'الرَّجُلُ كَلَامَهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَفْهَمُ', 'يَفْهَمُ', 'تَفْهَمُ', 'نَفْهَمُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

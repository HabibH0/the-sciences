// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 10 -- حِكْمَةُ
// يُوسُفَ. Printed page 38 (from ch9's closing إِنَّ الأَنْبِيَاءَ يَجُودُونَ
// بِالْخَيْرِ, two lines before that chapter's divider) - 39 (ending before
// ch11's heading مَوْعِظَةُ التَّوْحِيدِ). Transcribed by hand from the scan
// (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// Yūsuf reasons to himself about the psychology of a person in need, then
// deliberately delays interpreting the two men's dreams until after they
// have sat and calmed down -- turning the moment into an opening for
// dawah. One 4-token Qur'anic quotation (Sūrat Yūsuf 12:37 tail) is split
// into <=2-token pieces per the house workaround (qasas-v1 ch11's header
// note).
//
// Grammar / lexical notes:
//   -- qs-v2-c10-007 (أُخْبِرُكُمَا / يَأْتِيَكُمَا / طَعَامُكُمَا): this course's
//      first 2nd-person-dual object/possessor suffix, tagged with the
//      undocumented person code `2d` -- sanctioned the same way `2mp` and
//      `3d` are elsewhere (CHAPTER-FORMAT.md §4's "use them when the text
//      needs them" escape hatch; `3d` itself was introduced for dual verbs
//      / pronouns in qasas-v2 ch2 and reused throughout ch9).
//   -- qs-v2-c10-005 (فَلَوْ قُلْتُ ... لَسَمِعَا): this course's first لَوْ
//      ("if", contrary-to-fact/hypothetical), paired with its جَوَاب لَوْ
//      (apodosis) لَ -- tagged as a leading part+ fused proclitic on
//      سَمِعَا (features part+perf.3d), extending the same leading-particle
//      fusion pattern already used for لَامُ التَّعْلِيل (qasas-v2 ch7) and
//      لَامُ التَّوْكِيد (qasas-v2 ch3).
//   -- qs-v2-c10-{011} (ذَلِكُمَا مِمَّا عَلَّمَنِي رَبِّي): ذَلِكُمَا is the
//      dual-addressee form of the already-taught demonstrative ذَلِكَ,
//      tagged dem.m+2d (same safe-degradation + person-suffix pattern as
//      qs-v2-c09's أَحَدُهُمَا). مِمَّا is مِنْ fused onto the already-taught
//      relative pronoun مَا, tagged prep+rel.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَالَ, يُوسُف, نَفْس, إِنَّ,
//      الرَّجُلَيْنِ (رَجُل), إِلَى, سَمِعَ, شَيْء, أَهْل, سِجْن, لَكِنَّ, لَمْ, بَلْ,
//      أَخْبَرَ, تَأْوِيل, رُؤْيَا, قَبْلَ, أَنْ, أَتَى, طَعَام, جَلَسَ, ثُمَّ, عَالِم,
//      رَبّ, فَرِحَ, هُنَا, وَجَدَ, مَوْعِظَة are all already taught and NOT
//      re-listed in newWords here.
//
// 12 new words (سَاقَ، حَاجَة، صَاحِب، لَانَ، خَضَعَ، أَطَاعَ، لَوْ، اِسْتَعْجَلَ،
// اِطْمَأَنَّ، فُرْصَة، بَدَأَ، عَلَّمَ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch10',
  title: { ar: 'حِكْمَةُ يُوسُفَ', en: 'The Wisdom of Yūsuf' },
  newWords: [
    'سَاقَ', 'حَاجَة', 'صَاحِب', 'لَانَ', 'خَضَعَ', 'أَطَاعَ', 'لَوْ',
    'اِسْتَعْجَلَ', 'اِطْمَأَنَّ', 'فُرْصَة', 'بَدَأَ', 'عَلَّمَ',
  ],
  lemmas: {
    'سَاقَ': { gloss: 'to drive, lead' },
    'حَاجَة': { gloss: 'need' },
    'صَاحِب': { gloss: 'companion, one who has' },
    'لَانَ': { gloss: 'to soften, become gentle' },
    'خَضَعَ': { gloss: 'to submit, yield' },
    'أَطَاعَ': { gloss: 'to obey' },
    'لَوْ': { gloss: 'if (hypothetical)' },
    'اِسْتَعْجَلَ': { gloss: 'to hasten, hurry' },
    'اِطْمَأَنَّ': { gloss: 'to be reassured, at ease' },
    'فُرْصَة': { gloss: 'opportunity' },
    'بَدَأَ': { gloss: 'to begin' },
    'عَلَّمَ': { gloss: 'to teach' },
  },
  paragraphs: [
    {
      en: 'Yūsuf said to himself: Indeed need has driven these two men to me, and the one in need softens and submits, and the one in need obeys and listens. So if I said something to them, they -- and the whole prison -- would listen; but Yūsuf did not rush. Rather, he said to them: \'I will tell you both the interpretation of the dream before your food comes to you.',
      sentences: [
        {
          id: 'qs-v2-c10-001',
          ar: 'قَالَ يُوسُفُ فِي نَفْسِهِ:',
          en: 'Yūsuf said to himself:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, to' },
            { surface: 'نَفْسِهِ', lemma: 'نَفْس', pos: 'noun', features: 'gen+3ms', root: 'ن ف س', gloss: 'himself' },
          ],
        },
        {
          id: 'qs-v2-c10-002',
          ar: 'إِنَّ الْحَاجَةَ سَاقَتِ الرَّجُلَيْنِ إِلَيَّ.',
          en: 'Indeed need has driven these two men to me,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الْحَاجَةَ', lemma: 'حَاجَة', pos: 'noun', features: 'def.acc', root: 'ح و ج', gloss: 'need' },
            { surface: 'سَاقَتِ', lemma: 'سَاقَ', pos: 'verb', features: 'perf.3fs', root: 'س و ق', gloss: 'to drive, lead; drove' },
            { surface: 'الرَّجُلَيْنِ', lemma: 'رَجُل', pos: 'noun', features: 'du.def.acc', root: 'ر ج ل', gloss: 'the two men' },
            { surface: 'إِلَيَّ', lemma: 'إِلَى', pos: 'prep', features: 'prep+1s', gloss: 'to me' },
          ],
        },
        {
          id: 'qs-v2-c10-003',
          ar: 'وَإِنَّ صَاحِبَ الْحَاجَةِ يَلِينُ وَيَخْضَعُ.',
          en: 'and the one in need softens and submits,',
          tokens: [
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'صَاحِبَ', lemma: 'صَاحِب', pos: 'noun', features: 'acc.constr', root: 'ص ح ب', gloss: 'the one who has' },
            { surface: 'الْحَاجَةِ', lemma: 'حَاجَة', pos: 'noun', features: 'def.gen', root: 'ح و ج', gloss: 'need' },
            { surface: 'يَلِينُ', lemma: 'لَانَ', pos: 'verb', features: 'impf.3ms', root: 'ل ي ن', gloss: 'to soften, become gentle; softens' },
            { surface: 'وَيَخْضَعُ', lemma: 'خَضَعَ', pos: 'verb', features: 'conj+impf.3ms', root: 'خ ض ع', gloss: 'to submit, yield; and submits' },
          ],
        },
        {
          id: 'qs-v2-c10-004',
          ar: 'وَإِنَّ صَاحِبَ الْحَاجَةِ يُطِيعُ وَيَسْمَعُ.',
          en: 'and the one in need obeys and listens.',
          tokens: [
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'صَاحِبَ', lemma: 'صَاحِب', pos: 'noun', features: 'acc.constr', root: 'ص ح ب', gloss: 'the one who has' },
            { surface: 'الْحَاجَةِ', lemma: 'حَاجَة', pos: 'noun', features: 'def.gen', root: 'ح و ج', gloss: 'need' },
            { surface: 'يُطِيعُ', lemma: 'أَطَاعَ', pos: 'verb', features: 'impf.3ms', root: 'ط و ع', gloss: 'to obey; obeys' },
            { surface: 'وَيَسْمَعُ', lemma: 'سَمِعَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to hear, listen; and listens' },
          ],
        },
        {
          id: 'qs-v2-c10-005',
          ar: 'فَلَوْ قُلْتُ لَهُمَا شَيْئاً لَسَمِعَا وَسَمِعَ أَهْلُ السِّجْنِ وَلَكِنَّ يُوسُفَ لَمْ يَسْتَعْجِلْ.',
          en: 'So if I said something to them, they -- and the whole prison -- would listen; but Yūsuf did not rush.',
          tokens: [
            { surface: 'فَلَوْ', lemma: 'لَوْ', pos: 'part', features: 'conj+part', gloss: 'so if' },
            { surface: 'قُلْتُ', lemma: 'قَالَ', pos: 'verb', features: 'perf.1s', root: 'ق و ل', gloss: 'to say; I said, were I to say' },
            { surface: 'لَهُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+3d', gloss: 'to them both' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'something' },
            { surface: 'لَسَمِعَا', lemma: 'سَمِعَ', pos: 'verb', features: 'part+perf.3d', gloss: 'to hear, listen; they would indeed listen' },
            { surface: 'وَسَمِعَ', lemma: 'سَمِعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to hear, listen; and would listen' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', root: 'أ ه ل', gloss: 'people of' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part', gloss: 'but' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'did not' },
            { surface: 'يَسْتَعْجِلْ', lemma: 'اِسْتَعْجَلَ', pos: 'verb', features: 'impf.3ms', root: 'ع ج ل', gloss: 'to hasten, hurry; hastened' },
          ],
        },
        {
          id: 'qs-v2-c10-006',
          ar: 'بَلْ قَالَ لَهُمَا:',
          en: 'Rather, he said to them:',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'لَهُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+3d', gloss: 'to them both' },
          ],
        },
        {
          id: 'qs-v2-c10-007',
          ar: 'أَنَا أُخْبِرُكُمَا بِتَأْوِيلِ الرُّؤْيَا قَبْلَ أَنْ يَأْتِيَكُمَا طَعَامُكُمَا.',
          en: "'I will tell you both the interpretation of the dream before your food comes to you.",
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'أُخْبِرُكُمَا', lemma: 'أَخْبَرَ', pos: 'verb', features: 'impf.1s+2d', root: 'خ ب ر', gloss: 'to inform, tell; I will tell you both' },
            { surface: 'بِتَأْوِيلِ', lemma: 'تَأْوِيل', pos: 'noun', features: 'prep+gen.constr', root: 'أ و ل', gloss: 'the interpretation of' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.gen', root: 'ر أ ي', gloss: 'the dream' },
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'adv', features: 'acc.constr', gloss: 'before' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَأْتِيَكُمَا', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms+2d', root: 'أ ت ي', gloss: 'to come; comes to you both' },
            { surface: 'طَعَامُكُمَا', lemma: 'طَعَام', pos: 'noun', features: 'nom+2d', gloss: 'your (both) food' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ يُوسُفُ لِلرَّجُلَيْنِ قَبْلَ أَنْ يُفَسِّرَ رُؤْيَاهُمَا؟',
          options: ['سَأُخْبِرُكُمَا بِتَأْوِيلِ الرُّؤْيَا قَبْلَ أَنْ يَأْتِيَكُمَا طَعَامُكُمَا', 'لَنْ أُفَسِّرَ رُؤْيَاكُمَا', 'اِذْهَبَا إِلَى الْعَزِيزِ'],
          answer: 0,
          qEn: 'What did Yūsuf say to the two men before interpreting their dream?',
          optionsEn: ['I will tell you the interpretation before your food arrives', "I won't interpret your dream", 'Go to al-ʿAzīz'],
        },
        {
          q: 'مِمَّنْ تَعَلَّمَ يُوسُفُ عِلْمَ تَأْوِيلِ الرُّؤْيَا؟',
          options: ['مِنْ رَبِّهِ', 'مِنْ أَبِيهِ', 'مِنَ الْعَزِيزِ'],
          answer: 0,
          qEn: 'From whom did Yūsuf learn the knowledge of dream interpretation?',
          optionsEn: ['From his Lord', 'From his father', 'From al-ʿAzīz'],
        },
      ],
    },
    {
      en: 'So they sat down, reassured.\' Then Yūsuf said to them: \'I am knowledgeable in the interpretation of dreams -- that is part of what my Lord has taught me.\' So they rejoiced, reassured. And here Yūsuf found his opportunity, and began his sermon.',
      sentences: [
        {
          id: 'qs-v2-c10-008',
          ar: 'فَجَلَسَا وَاطْمَأَنَّا.',
          en: "So they sat down, reassured.'",
          tokens: [
            { surface: 'فَجَلَسَا', lemma: 'جَلَسَ', pos: 'verb', features: 'conj+perf.3d', root: 'ج ل س', gloss: 'to sit; so the two of them sat' },
            { surface: 'وَاطْمَأَنَّا', lemma: 'اِطْمَأَنَّ', pos: 'verb', features: 'conj+perf.3d', root: 'ط م أ ن', gloss: 'to be reassured, at ease; and were reassured' },
          ],
        },
        {
          id: 'qs-v2-c10-009',
          ar: 'ثُمَّ قَالَ لَهُمَا يُوسُفُ:',
          en: 'Then Yūsuf said to them:',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'لَهُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+3d', gloss: 'to them both' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c10-010',
          ar: 'أَنَا عَالِمٌ بِتَأْوِيلِ الرُّؤْيَا،',
          en: "'I am knowledgeable in the interpretation of dreams --",
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'عَالِمٌ', lemma: 'عَالِم', pos: 'adj', features: 'indef.nom', root: 'ع ل م', gloss: 'knowledgeable, learned' },
            { surface: 'بِتَأْوِيلِ', lemma: 'تَأْوِيل', pos: 'noun', features: 'prep+gen.constr', root: 'أ و ل', gloss: 'in the interpretation of' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.gen', root: 'ر أ ي', gloss: 'dreams' },
          ],
        },
        {
          id: 'qs-v2-c10-011',
          ar: '﴿ذَلِكُمَا مِمَّا',
          en: 'that is part of what',
          tokens: [
            { surface: 'ذَلِكُمَا', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m+2d', gloss: 'that (to you both)' },
            { surface: 'مِمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'from what' },
          ],
        },
        {
          id: 'qs-v2-c10-012',
          ar: 'عَلَّمَنِي رَبِّي﴾.',
          en: "my Lord has taught me.'",
          tokens: [
            { surface: 'عَلَّمَنِي', lemma: 'عَلَّمَ', pos: 'verb', features: 'perf.3ms+1s', root: 'ع ل م', gloss: 'to teach; taught me' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
          ],
        },
        {
          id: 'qs-v2-c10-013',
          ar: 'فَفَرِحَا وَاطْمَأَنَّا.',
          en: 'So they rejoiced, reassured.',
          tokens: [
            { surface: 'فَفَرِحَا', lemma: 'فَرِحَ', pos: 'verb', features: 'conj+perf.3d', root: 'ف ر ح', gloss: 'to rejoice; so the two of them rejoiced' },
            { surface: 'وَاطْمَأَنَّا', lemma: 'اِطْمَأَنَّ', pos: 'verb', features: 'conj+perf.3d', root: 'ط م أ ن', gloss: 'to be reassured, at ease; and were reassured' },
          ],
        },
        {
          id: 'qs-v2-c10-014',
          ar: 'وَهُنَا وَجَدَ يُوسُفُ الْفُرْصَةَ فَبَدَأَ مَوْعِظَتَهُ.',
          en: 'And here Yūsuf found his opportunity, and began his sermon.',
          tokens: [
            { surface: 'وَهُنَا', lemma: 'هُنَا', pos: 'adv', features: 'conj+adv', gloss: 'and here' },
            { surface: 'وَجَدَ', lemma: 'وَجَدَ', pos: 'verb', features: 'perf.3ms', root: 'و ج د', gloss: 'to find; found' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'الْفُرْصَةَ', lemma: 'فُرْصَة', pos: 'noun', features: 'def.acc', root: 'ف ر ص', gloss: 'opportunity' },
            { surface: 'فَبَدَأَ', lemma: 'بَدَأَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ب د أ', gloss: 'to begin; so began' },
            { surface: 'مَوْعِظَتَهُ', lemma: 'مَوْعِظَة', pos: 'noun', features: 'acc+3ms', root: 'و ع ظ', gloss: 'his sermon' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ الرَّجُلَانِ بَعْدَ أَنْ سَمِعَا كَلَامَ يُوسُفَ؟',
          options: ['جَلَسَا وَاطْمَأَنَّا', 'غَضِبَا وَبَكَيَا', 'خَرَجَا مِنَ السِّجْنِ'],
          answer: 0,
          qEn: 'What did the two men do after hearing Yūsuf\'s words?',
          optionsEn: ['They sat down and were reassured', 'They got angry and wept', 'They left the prison'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَجَلَسَا وَ',
        post: '.',
        en: 'So the two of them sat and were reassured.',
        options: ['اطْمَأَنَّا', 'اطْمَأَنَّ', 'اطْمَأَنُّوا', 'اطْمَأَنَّتَا'],
        answer: 0,
        rationales: [
          '3rd masculine dual perfect -- matches the dual subject (the two men), same person/number as جَلَسَا.',
          '3rd masculine singular -- wrong number.',
          '3rd masculine plural -- wrong number; only two men.',
          '3rd feminine dual -- wrong gender; the subject is two men.',
        ],
      },
      {
        type: 'cloze',
        pre: 'أَنَا عَالِمٌ بِتَأْوِيلِ',
        post: '.',
        en: 'I am knowledgeable in the interpretation of dreams.',
        options: ['الرُّؤْيَا', 'رُؤْيَا', 'رُؤْيَتِي', 'الرُّؤَى'],
        answer: 0,
        rationales: [
          'Definite -- "dreams" as a known category, matching how الرُّؤْيَا is used generically elsewhere in this course.',
          'Indefinite -- wrong; a specific known category needs the definite article here.',
          '"My dream" -- wrong meaning; Yūsuf means dreams in general, not one dream of his own.',
          'Plural "the dreams" -- this course consistently uses singular الرُّؤْيَا for this generic sense.',
        ],
      },
      {
        type: 'cloze',
        pre: 'ذَلِكُمَا مِمَّا',
        post: 'رَبِّي.',
        en: 'That is from what my Lord taught me.',
        options: ['عَلَّمَنِي', 'عَلَّمَنَا', 'عَلَّمَكَ', 'عَلَّمَهُ'],
        answer: 0,
        rationales: [
          "1st singular object -- 'taught me', matching Yūsuf speaking of himself.",
          "1st plural object -- 'taught us', wrong person.",
          "2nd masculine singular object -- 'taught you', wrong person.",
          "3rd masculine singular object -- 'taught him', wrong person.",
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَسْمَعُ الْكَلَامَ',
        pre: '',
        post: 'الْكَلَامَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَسْمَعُ', 'يَسْمَعُ', 'تَسْمَعُ', 'نَسْمَعُ'],
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
        base: 'يَسْمَعُ الْكَلَامَ',
        pre: '',
        post: 'الْكَلَامَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَسْمَعُ', 'أَسْمَعُ', 'تَسْمَعُ', 'يَسْمَعُونَ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine plural -- they (m.).',
        ],
      },
      {
        type: 'shift',
        base: 'يَسْمَعُ الْكَلَامَ',
        pre: '',
        post: 'الْكَلَامَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَسْمَعُونَ', 'يَسْمَعُ', 'نَسْمَعُ', 'تَسْمَعُونَ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
          '2nd masculine plural -- you all (m.).',
        ],
      },
    ],
  },
};

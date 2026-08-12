// قَصَصُ النَّبِيِّينَ لِلْأَطْفَالِ, volume 1, story «مَنْ كَسَرَ الأَصْنَامَ؟»,
// chapter «١ ـ بَائِعُ الأَصْنَامِ». Printed page 9. Transcribed by hand from
// the scan (vision OCR, 300dpi render) against QASAS_AGENT_BRIEF.md and
// ../CHAPTER-FORMAT.md, and checked line by line against the page.
//
// Register: third-person past narrative, existential/linking كَانَ used nine
// times on this single page -- the dominant frame is كَانَ + subject +
// imperfect-verb predicate ("used to do"), on آزَرُ three times running
// (يَبِيعُ / يَسْجُدُ / يَعْبُدُ) and once on النَّاسُ. The workshop below drills
// exactly that recycled substitution frame, per QASAS_AGENT_BRIEF.md §6.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch1',
  title: { ar: 'بَائِعُ الأَصْنَامِ', en: 'The Idol Seller' },
  // بَيْت is left off this list even though it first appears here: it is
  // already in qiraah-v1/chapter-01.js's lemmas (shared lexicon, see
  // QASAS_AGENT_BRIEF.md §6), which itself did not flag it as new -- treated
  // as basic/pre-known cross-course rather than this chapter's vocabulary.
  newWords: [
    'قَرْيَة', 'رَجُل', 'مَشْهُور', 'آزَر', 'بَاعَ',
    'صَنَم', 'كَبِير', 'كَثِير', 'نَاس', 'سَجَدَ', 'عَبَدَ', 'جِدّ',
  ],
  lemmas: {
    'قَرْيَة': { gloss: 'village' },
    'رَجُل': { gloss: 'man' },
    'مَشْهُور': { gloss: 'famous' },
    'آزَر': { gloss: 'Āzar' },
    'بَاعَ': { gloss: 'to sell' },
    'بَيْت': { gloss: 'house' },
    'صَنَم': { gloss: 'idol' },
    'كَبِير': { gloss: 'big, large' },
    'كَثِير': { gloss: 'much, many' },
    'نَاس': { gloss: 'people' },
    'سَجَدَ': { gloss: 'to prostrate' },
    'عَبَدَ': { gloss: 'to worship' },
    'جِدّ': { gloss: 'utmost (used adverbially: very, greatly)' },
    'كَانَ': { gloss: 'to be; there was/used to' },
    'اِسْم': { gloss: 'name' },
  },
  paragraphs: [
    {
      en: 'Many days ago -- very many -- there was, in a village, a very famous man. The name of this man was Āzar, and Āzar used to sell idols. In this village there was a very big house, and in this house there were idols, very many idols. The people used to prostrate to these idols; Āzar used to prostrate to these idols; Āzar used to worship these idols.',
      sentences: [
        {
          id: 'qs-v1-c01-001',
          ar: 'قَبْلَ أَيَّامٍ كَثِيرَةٍ،',
          en: 'Many days ago,',
          tokens: [
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'adv', features: 'acc.constr', gloss: 'before' },
            { surface: 'أَيَّامٍ', lemma: 'يَوْم', pos: 'noun', features: 'pl.indef.gen', root: 'ي و م', gloss: 'days' },
            { surface: 'كَثِيرَةٍ', lemma: 'كَثِير', pos: 'adj', features: 'indef.gen.f', root: 'ك ث ر', gloss: 'many' },
          ],
        },
        {
          id: 'qs-v1-c01-002',
          ar: 'كَثِيرَةٍ جِدًّا.',
          en: 'very many.',
          tokens: [
            { surface: 'كَثِيرَةٍ', lemma: 'كَثِير', pos: 'adj', features: 'indef.gen.f', root: 'ك ث ر', gloss: 'many' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, greatly' },
          ],
        },
        {
          id: 'qs-v1-c01-003',
          ar: 'كَانَ فِي قَرْيَةٍ رَجُلٌ مَشْهُورٌ جِدًّا.',
          en: 'There was, in a village, a very famous man.',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; there was' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'قَرْيَةٍ', lemma: 'قَرْيَة', pos: 'noun', features: 'indef.gen', root: 'ق ر ي', gloss: 'village' },
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', root: 'ر ج ل', gloss: 'man' },
            { surface: 'مَشْهُورٌ', lemma: 'مَشْهُور', pos: 'adj', features: 'indef.nom', root: 'ش ه ر', gloss: 'famous' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, greatly' },
          ],
        },
        {
          id: 'qs-v1-c01-004',
          ar: 'وَكَانَ اسْمُ هَذَا الرَّجُلِ آزَرَ.',
          en: 'And the name of this man was Āzar.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...was' },
            { surface: 'اسْمُ', lemma: 'اِسْم', pos: 'noun', features: 'nom.constr', root: 'س م و', gloss: 'name' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الرَّجُلِ', lemma: 'رَجُل', pos: 'noun', features: 'def.gen', root: 'ر ج ل', gloss: 'man' },
            { surface: 'آزَرَ', lemma: 'آزَر', pos: 'proper', features: 'acc', gloss: 'Āzar' },
          ],
        },
        {
          id: 'qs-v1-c01-005',
          ar: 'وَكَانَ آزَرُ يَبِيعُ الْأَصْنَامَ.',
          en: 'And Āzar used to sell idols.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...used to' },
            { surface: 'آزَرُ', lemma: 'آزَر', pos: 'proper', features: 'nom', gloss: 'Āzar' },
            { surface: 'يَبِيعُ', lemma: 'بَاعَ', pos: 'verb', features: 'impf.3ms', root: 'ب ي ع', gloss: 'to sell' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
          ],
        },
        {
          id: 'qs-v1-c01-006',
          ar: 'وَكَانَ فِي هَذِهِ الْقَرْيَةِ بَيْتٌ كَبِيرٌ جِدًّا.',
          en: 'And in this village there was a very big house.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and there was' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْقَرْيَةِ', lemma: 'قَرْيَة', pos: 'noun', features: 'def.gen', root: 'ق ر ي', gloss: 'village' },
            { surface: 'بَيْتٌ', lemma: 'بَيْت', pos: 'noun', features: 'indef.nom', root: 'ب ي ت', gloss: 'house' },
            { surface: 'كَبِيرٌ', lemma: 'كَبِير', pos: 'adj', features: 'indef.nom', root: 'ك ب ر', gloss: 'big, large' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, greatly' },
          ],
        },
        {
          id: 'qs-v1-c01-007',
          ar: 'وَكَانَ فِي هَذَا الْبَيْتِ أَصْنَامٌ،',
          en: 'And in this house there were idols,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and there were' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْبَيْتِ', lemma: 'بَيْت', pos: 'noun', features: 'def.gen', root: 'ب ي ت', gloss: 'house' },
            { surface: 'أَصْنَامٌ', lemma: 'صَنَم', pos: 'noun', features: 'pl.indef.nom', root: 'ص ن م', gloss: 'idols' },
          ],
        },
        {
          id: 'qs-v1-c01-008',
          ar: 'أَصْنَامٌ كَثِيرَةٌ جِدًّا.',
          en: 'very many idols.',
          tokens: [
            { surface: 'أَصْنَامٌ', lemma: 'صَنَم', pos: 'noun', features: 'pl.indef.nom', root: 'ص ن م', gloss: 'idols' },
            { surface: 'كَثِيرَةٌ', lemma: 'كَثِير', pos: 'adj', features: 'indef.nom.f', root: 'ك ث ر', gloss: 'many' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, greatly' },
          ],
        },
        {
          id: 'qs-v1-c01-009',
          ar: 'وَكَانَ النَّاسُ يَسْجُدُونَ لِهَذِهِ الْأَصْنَامِ.',
          en: 'And the people used to prostrate to these idols.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...used to' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'يَسْجُدُونَ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3mp', root: 'س ج د', gloss: 'to prostrate' },
            { surface: 'لِهَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'prep+dem.f', gloss: 'to this' },
            { surface: 'الْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.gen', root: 'ص ن م', gloss: 'idols' },
          ],
        },
        {
          id: 'qs-v1-c01-010',
          ar: 'وَكَانَ آزَرُ يَسْجُدُ لِهَذِهِ الْأَصْنَامِ.',
          en: 'And Āzar used to prostrate to these idols.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...used to' },
            { surface: 'آزَرُ', lemma: 'آزَر', pos: 'proper', features: 'nom', gloss: 'Āzar' },
            { surface: 'يَسْجُدُ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3ms', root: 'س ج د', gloss: 'to prostrate' },
            { surface: 'لِهَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'prep+dem.f', gloss: 'to this' },
            { surface: 'الْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.gen', root: 'ص ن م', gloss: 'idols' },
          ],
        },
        {
          id: 'qs-v1-c01-011',
          ar: 'وَكَانَ آزَرُ يَعْبُدُ هَذِهِ الْأَصْنَامَ.',
          en: 'And Āzar used to worship these idols.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...used to' },
            { surface: 'آزَرُ', lemma: 'آزَر', pos: 'proper', features: 'nom', gloss: 'Āzar' },
            { surface: 'يَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3ms', root: 'ع ب د', gloss: 'to worship' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this, these' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ كَانَ يَبِيعُ الْأَصْنَامَ؟',
          options: ['آزَرُ', 'إِبْرَاهِيمُ', 'الْمَلِكُ'],
          answer: 0,
          qEn: 'Who used to sell idols?',
          optionsEn: ['Āzar', 'Ibrāhīm', 'The king'],
        },
        {
          q: 'أَيْنَ كَانَتِ الْأَصْنَامُ الْكَثِيرَةُ؟',
          options: ['فِي الْبَيْتِ الْكَبِيرِ', 'فِي السُّوقِ', 'فِي الْمَسْجِدِ'],
          answer: 0,
          qEn: 'Where were the many idols?',
          optionsEn: ['In the big house', 'In the market', 'In the mosque'],
        },
        {
          q: 'مَاذَا كَانَ النَّاسُ يَفْعَلُونَ لِلْأَصْنَامِ؟',
          options: ['يَسْجُدُونَ لَهَا', 'يَكْسِرُونَهَا', 'يَبِيعُونَهَا'],
          answer: 0,
          qEn: 'What did the people use to do to the idols?',
          optionsEn: ['They prostrated to them', 'They broke them', 'They sold them'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ آزَرُ',
        post: 'الْأَصْنَامَ.',
        en: 'And Āzar used to sell idols.',
        options: ['يَبِيعُ', 'بَاعَ', 'تَبِيعُ', 'يَبِيعُونَ'],
        answer: 0,
        rationales: [
          '3rd person masculine singular, present -- matches آزَرُ.',
          "That's the perfect -- he sold once, not used to sell.",
          '2nd masculine or 3rd feminine singular -- you or she sell.',
          '3rd person masculine plural -- they sell.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ آزَرُ',
        post: 'لِهَذِهِ الْأَصْنَامِ.',
        en: 'And Āzar used to prostrate to these idols.',
        options: ['يَسْجُدُ', 'سَجَدَ', 'يَسْجُدُونَ', 'نَسْجُدُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular, present -- matches آزَرُ.',
          'Perfect -- he prostrated once, not used to.',
          '3rd masculine plural -- they prostrate.',
          '1st person plural -- we prostrate.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ آزَرُ',
        post: 'هَذِهِ الْأَصْنَامَ.',
        en: 'And Āzar used to worship these idols.',
        options: ['يَعْبُدُ', 'عَبَدَ', 'تَعْبُدُ', 'يَعْبُدَانِ'],
        answer: 0,
        rationales: [
          '3rd masculine singular, present.',
          'Perfect -- he worshipped once.',
          '2nd masculine or 3rd feminine singular.',
          'Dual -- the two of them worship.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ',
        post: 'يَسْجُدُونَ لِهَذِهِ الْأَصْنَامِ.',
        en: 'And the people used to prostrate to these idols.',
        options: ['النَّاسُ', 'آزَرُ', 'الرَّجُلُ', 'الْأَصْنَامُ'],
        answer: 0,
        rationales: [
          'The subject must agree with the plural verb يَسْجُدُونَ.',
          'آزَرُ is one person -- it takes the singular يَسْجُدُ.',
          'الرَّجُلُ is also singular.',
          'الْأَصْنَامُ is what they prostrate to, not who prostrates.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَعْبُدُ هَذِهِ الْأَصْنَامَ',
        pre: '',
        post: 'هَذِهِ الْأَصْنَامَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَعْبُدُ', 'يَعْبُدُ', 'تَعْبُدُ', 'نَعْبُدُ'],
        answer: 0,
        rationales: [
          '1st person singular -- matches أَنَا.',
          '3rd masculine singular -- he.',
          '2nd masculine or 3rd feminine singular.',
          '1st person plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْبُدُ هَذِهِ الْأَصْنَامَ',
        pre: '',
        post: 'هَذِهِ الْأَصْنَامَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَعْبُدُ', 'يَعْبُدُ', 'أَعْبُدُ', 'يَعْبُدُونَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he.',
          '1st person singular -- I.',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْبُدُ هَذِهِ الْأَصْنَامَ',
        pre: '',
        post: 'هَذِهِ الْأَصْنَامَ',
        targetPerson: 'هُمْ',
        targetEn: 'they',
        options: ['يَعْبُدُونَ', 'يَعْبُدُ', 'تَعْبُدُ', 'نَعْبُدُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular.',
          '2nd masculine or 3rd feminine singular.',
          '1st person plural.',
        ],
      },
      {
        type: 'shift',
        base: 'يَسْجُدُ لِلْأَصْنَامِ',
        pre: '',
        post: 'لِلْأَصْنَامِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَسْجُدُ', 'يَسْجُدُ', 'تَسْجُدِينَ', 'نَسْجُدُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he.',
          '2nd feminine singular -- you (f.).',
          '1st person plural -- we.',
        ],
      },
    ],
  },
};

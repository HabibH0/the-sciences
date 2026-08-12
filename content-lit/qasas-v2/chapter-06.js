// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 6 -- يُوسُفُ فِي
// الْبِئْرِ. Printed page 33 (from the divider, after ch5's closing وَلَكِنَّهُ
// صَبَرَ صَبْراً جَمِيلاً) - 34 (ending before ch7's heading مِنَ الْبِئْرِ إِلَى
// الْقَصْرِ). Transcribed by hand from the scan (vision OCR, 300dpi render)
// against ../CHAPTER-FORMAT.md.
//
// A short, quiet chapter: the brothers go home, eat, and forget; Yūsuf,
// alone in the well, does not sleep and does not forget. No Qur'anic
// quotation on these pages -- pure narrative, built almost entirely from
// vocabulary already taught (only 4 new words).
//
// Grammar notes:
//   -- qs-v2-c06-006 (وَلَا فِرَاشَ وَلَا طَعَامَ) is this course's first
//      لَا النَّافِيَة لِلْجِنْس ("لَا of absolute negation") -- لَا followed by
//      an indefinite noun with no tanwin in the reference grammar's own
//      terms, though CHAPTER-FORMAT.md has no atom for that fine a
//      distinction. Tagged the same way as any other لَا (pos:'part',
//      features:'neg') with the noun as plain indef.acc -- a safe
//      degradation, consistent with how other roleless constructions in
//      this course (cognate accusative, etc.) are handled.
//   -- qs-v2-c06-005 (وَيُوسُفُ فِي الْبِئْرِ) is a topic-fronted nominal
//      clause (مبتدأ وخبر) rather than a verbal one -- يُوسُفُ tagged
//      conj+nom like any other conjunction-fronted subject, no verb
//      required in tokens (CHAPTER-FORMAT.md doesn't require every sentence
//      to contain a verb).
//   -- Five more recycled كَانَ + accusative-predicate clauses in qs-v2-c06-
//      {013..018}, continuing the drill pattern from qasas-v2 ch4 -- built
//      into this chapter's workshop cloze.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): رَجَعَ (qasas-v1 ch5),
//      بَيْت, طَعَام, تَرَكَ, بِئْر, بَقِيَ, ذَكَرَ, لَيْل, أَحَد, عَمِيق, غَابَة,
//      مُظْلِم (all qasas-v1 or earlier qasas-v2 chapters) are already taught
//      and NOT re-listed in newWords here.
//
// 4 new words (فِرَاش، نَامَ، نَسِيَ، مُوحِش).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch6',
  title: { ar: 'يُوسُفُ فِي الْبِئْرِ', en: 'Yūsuf in the Well' },
  newWords: ['فِرَاش', 'نَامَ', 'نَسِيَ', 'مُوحِش'],
  lemmas: {
    'فِرَاش': { gloss: 'bedding, mattress' },
    'نَامَ': { gloss: 'to sleep' },
    'نَسِيَ': { gloss: 'to forget' },
    'مُوحِش': { gloss: 'desolate, eerie' },
  },
  paragraphs: [
    {
      en: 'The brothers went back to the house, and left Yūsuf in the well; the brothers ate the food, and slept on their bedding. As for Yūsuf, he was in the well, with no bedding and no food.',
      sentences: [
        {
          id: 'qs-v2-c06-001',
          ar: 'وَرَجَعَ الإِخْوَةُ إِلَى الْبَيْتِ،',
          en: 'The brothers went back to the house,',
          tokens: [
            { surface: 'وَرَجَعَ', lemma: 'رَجَعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر ج ع', gloss: 'to return; and returned' },
            { surface: 'الإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْبَيْتِ', lemma: 'بَيْت', pos: 'noun', features: 'def.gen', root: 'ب ي ت', gloss: 'the house' },
          ],
        },
        {
          id: 'qs-v2-c06-002',
          ar: 'وَتَرَكُوا يُوسُفَ فِي الْبِئْرِ',
          en: 'and left Yūsuf in the well;',
          tokens: [
            { surface: 'وَتَرَكُوا', lemma: 'تَرَكَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ت ر ك', gloss: 'to leave; and they left' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبِئْرِ', lemma: 'بِئْر', pos: 'noun', features: 'def.gen', root: 'ب أ ر', gloss: 'the well' },
          ],
        },
        {
          id: 'qs-v2-c06-003',
          ar: 'وَأَكَلَ الإِخْوَةُ الطَّعَامَ،',
          en: 'the brothers ate the food,',
          tokens: [
            { surface: 'وَأَكَلَ', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ ك ل', gloss: 'to eat; and ate' },
            { surface: 'الإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'الطَّعَامَ', lemma: 'طَعَام', pos: 'noun', features: 'def.acc', root: 'ط ع م', gloss: 'the food' },
          ],
        },
        {
          id: 'qs-v2-c06-004',
          ar: 'وَنَامُوا عَلَى الْفِرَاشِ.',
          en: 'and slept on their bedding.',
          tokens: [
            { surface: 'وَنَامُوا', lemma: 'نَامَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ن و م', gloss: 'to sleep; and they slept' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'الْفِرَاشِ', lemma: 'فِرَاش', pos: 'noun', features: 'def.gen', root: 'ف ر ش', gloss: 'the bedding' },
          ],
        },
        {
          id: 'qs-v2-c06-005',
          ar: 'وَيُوسُفُ فِي الْبِئْرِ،',
          en: 'As for Yūsuf, he was in the well,',
          tokens: [
            { surface: 'وَيُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'conj+nom', gloss: 'and Yūsuf, as for Yūsuf' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبِئْرِ', lemma: 'بِئْر', pos: 'noun', features: 'def.gen', root: 'ب أ ر', gloss: 'the well' },
          ],
        },
        {
          id: 'qs-v2-c06-006',
          ar: 'وَلَا فِرَاشَ وَلَا طَعَامَ.',
          en: 'with no bedding and no food.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and no' },
            { surface: 'فِرَاشَ', lemma: 'فِرَاش', pos: 'noun', features: 'indef.acc', root: 'ف ر ش', gloss: 'bedding' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and no' },
            { surface: 'طَعَامَ', lemma: 'طَعَام', pos: 'noun', features: 'indef.acc', root: 'ط ع م', gloss: 'food' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يَنْقُصُ يُوسُفَ فِي الْبِئْرِ؟',
          options: ['الْفِرَاشُ وَالطَّعَامُ', 'الْمَاءُ فَقَطْ', 'لَا شَيْءَ، كَانَ عِنْدَهُ كُلُّ شَيْءٍ'],
          answer: 0,
          qEn: 'What did Yūsuf lack in the well?',
          optionsEn: ['Bedding and food', 'Only water', 'Nothing, he had everything'],
        },
        {
          q: 'مَنْ نَسِيَ يُوسُفَ؟',
          options: ['الإِخْوَةُ', 'يَعْقُوبُ', 'لَا أَحَدَ'],
          answer: 0,
          qEn: 'Who forgot Yūsuf?',
          optionsEn: ['The brothers', 'Yaʿqūb', 'No one'],
        },
      ],
    },
    {
      en: 'The brothers forgot Yūsuf, and slept -- but Yūsuf did not sleep, and he did not forget anyone. Yaʿqūb kept remembering Yūsuf, and Yūsuf kept remembering Yaʿqūb.',
      sentences: [
        {
          id: 'qs-v2-c06-007',
          ar: 'وَنَسِيَ الإِخْوَانُ يُوسُفَ،',
          en: 'The brothers forgot Yūsuf,',
          tokens: [
            { surface: 'وَنَسِيَ', lemma: 'نَسِيَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن س ي', gloss: 'to forget; and forgot' },
            { surface: 'الإِخْوَانُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c06-008',
          ar: 'وَنَامُوا.',
          en: 'and slept --',
          tokens: [
            { surface: 'وَنَامُوا', lemma: 'نَامَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ن و م', gloss: 'to sleep; and they slept' },
          ],
        },
        {
          id: 'qs-v2-c06-009',
          ar: 'وَمَا نَامَ يُوسُفُ،',
          en: 'but Yūsuf did not sleep,',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَامَ', lemma: 'نَامَ', pos: 'verb', features: 'perf.3ms', root: 'ن و م', gloss: 'to sleep; slept' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c06-010',
          ar: 'وَمَا نَسِيَ أَحَداً.',
          en: 'and he did not forget anyone.',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَسِيَ', lemma: 'نَسِيَ', pos: 'verb', features: 'perf.3ms', root: 'ن س ي', gloss: 'to forget; forgot' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', root: 'أ ح د', gloss: 'anyone' },
          ],
        },
        {
          id: 'qs-v2-c06-011',
          ar: 'وَيَبْقَى يَعْقُوبُ يَذْكُرُ يُوسُفَ،',
          en: 'Yaʿqūb kept remembering Yūsuf,',
          tokens: [
            { surface: 'وَيَبْقَى', lemma: 'بَقِيَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ب ق ي', gloss: 'to remain, keep on; and keeps on' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'يَذْكُرُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'impf.3ms', root: 'ذ ك ر', gloss: 'to remember, mention; remembers' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c06-012',
          ar: 'وَيَبْقَى يُوسُفُ يَذْكُرُ يَعْقُوبَ.',
          en: 'and Yūsuf kept remembering Yaʿqūb.',
          tokens: [
            { surface: 'وَيَبْقَى', lemma: 'بَقِيَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ب ق ي', gloss: 'to remain, keep on; and keeps on' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'يَذْكُرُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'impf.3ms', root: 'ذ ك ر', gloss: 'to remember, mention; remembers' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'acc', gloss: 'Yaʿqūb' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'Yūsuf was in the well, and the well was deep. The well was in the forest, and the forest was desolate -- and that was at night, and the night was dark.',
      sentences: [
        {
          id: 'qs-v2-c06-013',
          ar: 'وَكَانَ يُوسُفُ فِي الْبِئْرِ',
          en: 'Yūsuf was in the well,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبِئْرِ', lemma: 'بِئْر', pos: 'noun', features: 'def.gen', root: 'ب أ ر', gloss: 'the well' },
          ],
        },
        {
          id: 'qs-v2-c06-014',
          ar: 'وَكَانَتِ الْبِئْرُ عَمِيقَةً.',
          en: 'and the well was deep.',
          tokens: [
            { surface: 'وَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'الْبِئْرُ', lemma: 'بِئْر', pos: 'noun', features: 'def.nom', root: 'ب أ ر', gloss: 'the well' },
            { surface: 'عَمِيقَةً', lemma: 'عَمِيق', pos: 'adj', features: 'indef.acc.f', root: 'ع م ق', gloss: 'deep' },
          ],
        },
        {
          id: 'qs-v2-c06-015',
          ar: 'وَكَانَتِ الْبِئْرُ فِي الْغَابَةِ،',
          en: 'The well was in the forest,',
          tokens: [
            { surface: 'وَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'الْبِئْرُ', lemma: 'بِئْر', pos: 'noun', features: 'def.nom', root: 'ب أ ر', gloss: 'the well' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْغَابَةِ', lemma: 'غَابَة', pos: 'noun', features: 'def.gen', root: 'غ ي ب', gloss: 'the forest' },
          ],
        },
        {
          id: 'qs-v2-c06-016',
          ar: 'وَكَانَتِ الْغَابَةُ مُوحِشَةً',
          en: 'and the forest was desolate --',
          tokens: [
            { surface: 'وَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'الْغَابَةُ', lemma: 'غَابَة', pos: 'noun', features: 'def.nom', root: 'غ ي ب', gloss: 'the forest' },
            { surface: 'مُوحِشَةً', lemma: 'مُوحِش', pos: 'adj', features: 'indef.acc.f', root: 'و ح ش', gloss: 'desolate, eerie' },
          ],
        },
        {
          id: 'qs-v2-c06-017',
          ar: 'وَكَانَ ذَلِكَ فِي اللَّيْلِ،',
          en: 'and that was at night,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, at' },
            { surface: 'اللَّيْلِ', lemma: 'لَيْل', pos: 'noun', features: 'def.gen', root: 'ل ي ل', gloss: 'the night' },
          ],
        },
        {
          id: 'qs-v2-c06-018',
          ar: 'وَكَانَ اللَّيْلُ مُظْلِماً.',
          en: 'and the night was dark.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'اللَّيْلُ', lemma: 'لَيْل', pos: 'noun', features: 'def.nom', root: 'ل ي ل', gloss: 'the night' },
            { surface: 'مُظْلِماً', lemma: 'مُظْلِم', pos: 'adj', features: 'indef.acc', root: 'ظ ل م', gloss: 'dark' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيْنَ كَانَتِ الْبِئْرُ؟',
          options: ['فِي غَابَةٍ مُوحِشَةٍ', 'قُرْبَ بَيْتِ يَعْقُوبَ', 'فِي الصَّحْرَاءِ'],
          answer: 0,
          qEn: 'Where was the well?',
          optionsEn: ['In a desolate forest', "Near Yaʿqūb's house", 'In the desert'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَتِ الْغَابَةُ',
        post: '',
        en: 'and the forest was desolate',
        options: ['مُوحِشَةً', 'مُوحِشٌ', 'مُوحِشاً', 'مُوحِشُونَ'],
        answer: 0,
        rationales: [
          'Accusative, feminine -- agrees with الْغَابَةُ (feminine) as the accusative predicate of كَانَتِ.',
          'Nominative -- wrong case.',
          'Masculine accusative -- wrong gender; الْغَابَةُ (the forest) is feminine.',
          'Masculine plural -- wrong number and gender.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ اللَّيْلُ',
        post: '.',
        en: 'and the night was dark.',
        options: ['مُظْلِماً', 'مُظْلِمَةً', 'مُظْلِمٌ', 'مُظْلِمُونَ'],
        answer: 0,
        rationales: [
          'Accusative, masculine -- agrees with اللَّيْلُ (masculine) as the accusative predicate of كَانَ.',
          'Feminine -- wrong gender; اللَّيْلُ (the night) is masculine.',
          'Nominative -- wrong case.',
          'Masculine plural -- wrong number.',
        ],
      },
      {
        type: 'cloze',
        pre: '',
        post: 'الْبِئْرُ عَمِيقَةً.',
        en: 'And the well was deep.',
        options: ['وَكَانَتِ', 'وَكَانَ', 'يَكُونُ', 'وَكَانُوا'],
        answer: 0,
        rationales: [
          "Perfect 'was', feminine -- agrees with the feminine subject الْبِئْرُ.",
          "Perfect 'was', masculine -- wrong gender; الْبِئْرُ is feminine.",
          "Imperfect 'is/will be' -- wrong tense for a completed description in the narrative.",
          "Perfect 'were', plural -- wrong number; الْبِئْرُ is singular.",
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَذْكُرُ يُوسُفَ',
        pre: '',
        post: 'يُوسُفَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَذْكُرُ', 'يَذْكُرُ', 'تَذْكُرُ', 'نَذْكُرُ'],
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
        base: 'يَذْكُرُ يُوسُفَ',
        pre: '',
        post: 'يُوسُفَ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَذْكُرُ', 'يَذْكُرُ', 'أَذْكُرُ', 'نَذْكُرُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَذْكُرُ يُوسُفَ',
        pre: '',
        post: 'يُوسُفَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَذْكُرُ', 'يَذْكُرُ', 'أَذْكُرُ', 'تَذْكُرُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
        ],
      },
    ],
  },
};

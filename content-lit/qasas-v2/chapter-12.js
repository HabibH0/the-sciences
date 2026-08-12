// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 12 -- تَأْوِيلُ
// الرُّؤْيَا. Printed page 41 (from ch11's closing ﴿وَلَكِنَّ أَكْثَرَ النَّاسِ لَا
// يَعْلَمُونَ﴾) - 42 (ending before ch13's heading رُؤْيَا الْمَلِكِ).
// Transcribed by hand from the scan (vision OCR, 300dpi render) against
// ../CHAPTER-FORMAT.md.
//
// Yūsuf finally gives the two men their interpretation, asks the future
// cupbearer to remember him to the king -- and is forgotten anyway,
// remaining in prison for years. Three short Qur'anic fragments (Sūrat
// Yūsuf 12:41 in full) are split into <=2-token pieces per the house
// workaround (qasas-v1 ch11's header note).
//
// Grammar / lexical notes:
//   -- qs-v2-c12-008 (فَيُصْلَبُ): this chapter's only passive, extending
//      the impf.pass pattern already established (qasas-v1 ch14's
//      impf.pass.2ms) to a new verb (صَلَبَ); qs-v2-c12-014's وَصُلِبَ
//      applies the same passive to the perfect, reusing qasas-v2 ch8's
//      conj+perf.pass.3ms pattern.
//   -- سَاقٍ (cupbearer, qs-v2-c12-{014,015}) is kept as its own lemma,
//      distinct from the already-taught verb سَقَى ("to give to drink") --
//      an active-participle/verb pair treated as separate lemmas, same as
//      عَالِم vs. عَلِمَ (qasas-v2 ch9) and جَوَاد vs. جَادَ (qasas-v2 ch9).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لَمَّا, فَرَغَ, يُوسُف,
//      مِنْ, مَوْعِظَة, أَخْبَرَ, تَأْوِيل, رُؤْيَا, قَالَ, أَحَد, سَقَى, رَبّ, خَمْر,
//      آخَر, أَكَلَ, طَيْر, رَأْس, ذَكَرَ, عِنْدَ, خَرَجَ, رَجُل, كَانَ, مَلِك, نَسِيَ,
//      أَنْ, سِجْن are all already taught and NOT re-listed in newWords here.
//
// 6 new words (أَمَّا، صَلَبَ، أَوَّل، سَاقٍ، سَنَة، أَقَامَ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch12',
  title: { ar: 'تَأْوِيلُ الرُّؤْيَا', en: 'The Interpretation of the Dream' },
  newWords: ['أَمَّا', 'صَلَبَ', 'أَوَّل', 'سَاقٍ', 'سَنَة', 'أَقَامَ'],
  lemmas: {
    'أَمَّا': { gloss: 'as for' },
    'صَلَبَ': { gloss: 'to crucify' },
    'أَوَّل': { gloss: 'first' },
    'سَاقٍ': { gloss: 'cupbearer' },
    'سَنَة': { gloss: 'year' },
    'أَقَامَ': { gloss: 'to reside, stay' },
  },
  paragraphs: [
    {
      en: 'When Yūsuf finished his sermon, he told the two of them the interpretation of the dream: he said: \'As for one of you two, he will pour wine for his master.\' \'But as for the other, he will be crucified, and the birds will eat from his head.\'',
      sentences: [
        {
          id: 'qs-v2-c12-001',
          ar: 'وَلَمَّا فَرَغَ يُوسُفُ مِنْ مَوْعِظَتِهِ',
          en: 'When Yūsuf finished his sermon,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'فَرَغَ', lemma: 'فَرَغَ', pos: 'verb', features: 'perf.3ms', gloss: 'to finish; finished' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, with' },
            { surface: 'مَوْعِظَتِهِ', lemma: 'مَوْعِظَة', pos: 'noun', features: 'gen+3ms', root: 'و ع ظ', gloss: 'his sermon' },
          ],
        },
        {
          id: 'qs-v2-c12-002',
          ar: 'أَخْبَرَهُمَا بِتَأْوِيلِ الرُّؤْيَا',
          en: 'he told the two of them the interpretation of the dream:',
          tokens: [
            { surface: 'أَخْبَرَهُمَا', lemma: 'أَخْبَرَ', pos: 'verb', features: 'perf.3ms+3d', root: 'خ ب ر', gloss: 'to inform, tell; told them both' },
            { surface: 'بِتَأْوِيلِ', lemma: 'تَأْوِيل', pos: 'noun', features: 'prep+gen.constr', root: 'أ و ل', gloss: 'the interpretation of' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.gen', root: 'ر أ ي', gloss: 'the dream' },
          ],
        },
        {
          id: 'qs-v2-c12-003',
          ar: 'قَالَ:',
          en: 'he said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v2-c12-004',
          ar: '﴿أَمَّا أَحَدُكُمَا',
          en: "'As for one of you two,",
          tokens: [
            { surface: 'أَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'part', gloss: 'as for' },
            { surface: 'أَحَدُكُمَا', lemma: 'أَحَد', pos: 'noun', features: 'nom+2d', root: 'أ ح د', gloss: 'one of you two' },
          ],
        },
        {
          id: 'qs-v2-c12-005',
          ar: 'فَيَسْقِي رَبَّهُ',
          en: 'he will pour wine',
          tokens: [
            { surface: 'فَيَسْقِي', lemma: 'سَقَى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to give to drink; will give to drink' },
            { surface: 'رَبَّهُ', lemma: 'رَبّ', pos: 'noun', features: 'acc+3ms', gloss: 'his master' },
          ],
        },
        {
          id: 'qs-v2-c12-006',
          ar: 'خَمْرًا﴾.',
          en: "for his master.'",
          tokens: [
            { surface: 'خَمْرًا', lemma: 'خَمْر', pos: 'noun', features: 'indef.acc', root: 'خ م ر', gloss: 'wine' },
          ],
        },
        {
          id: 'qs-v2-c12-007',
          ar: '﴿وَأَمَّا الآخَرُ',
          en: "'But as for the other,",
          tokens: [
            { surface: 'وَأَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'conj+part', gloss: 'and as for' },
            { surface: 'الآخَرُ', lemma: 'آخَر', pos: 'noun', features: 'def.nom', gloss: 'the other' },
          ],
        },
        {
          id: 'qs-v2-c12-008',
          ar: 'فَيُصْلَبُ فَتَأْكُلُ',
          en: 'he will be crucified, and',
          tokens: [
            { surface: 'فَيُصْلَبُ', lemma: 'صَلَبَ', pos: 'verb', features: 'conj+impf.pass.3ms', root: 'ص ل ب', gloss: 'to crucify; will be crucified' },
            { surface: 'فَتَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to eat; will eat' },
          ],
        },
        {
          id: 'qs-v2-c12-009',
          ar: 'الطَّيْرُ مِنْ',
          en: 'the birds will eat from',
          tokens: [
            { surface: 'الطَّيْرُ', lemma: 'طَيْر', pos: 'noun', features: 'def.nom', root: 'ط ي ر', gloss: 'the birds' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
          ],
        },
        {
          id: 'qs-v2-c12-010',
          ar: 'رَأْسِهِ﴾.',
          en: "his head.'",
          tokens: [
            { surface: 'رَأْسِهِ', lemma: 'رَأْس', pos: 'noun', features: 'gen+3ms', root: 'ر أ س', gloss: 'his head' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ يُوسُفُ لِأَحَدِ الرَّجُلَيْنِ عَنْ مُسْتَقْبَلِهِ؟',
          options: ['سَيَسْقِي رَبَّهُ خَمْرًا', 'سَيُصْلَبُ', 'سَيَخْرُجُ مِنَ الْبَلَدِ'],
          answer: 0,
          qEn: 'What did Yūsuf tell one of the two men about his future?',
          optionsEn: ['He would pour wine for his master', 'He would be crucified', 'He would leave the country'],
        },
      ],
    },
    {
      en: 'And he said to the first: \'Remember me before your master.\' The two men went out; the first became cupbearer to the king, and the other was crucified. But the cupbearer forgot to mention Yūsuf before the king. And Yūsuf remained in the prison for years.',
      sentences: [
        {
          id: 'qs-v2-c12-011',
          ar: 'وَقَالَ لِلأَوَّلِ:',
          en: 'And he said to the first:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'لِلأَوَّلِ', lemma: 'أَوَّل', pos: 'noun', features: 'prep+def.gen', root: 'أ و ل', gloss: 'to the first' },
          ],
        },
        {
          id: 'qs-v2-c12-012',
          ar: '﴿اذْكُرْنِي عِنْدَ',
          en: "'Remember me before",
          tokens: [
            { surface: 'اذْكُرْنِي', lemma: 'ذَكَرَ', pos: 'verb', features: 'imp.2ms+1s', gloss: 'to remember, mention; remember me!' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv', gloss: 'with' },
          ],
        },
        {
          id: 'qs-v2-c12-013',
          ar: 'رَبِّكَ﴾.',
          en: "your master.'",
          tokens: [
            { surface: 'رَبِّكَ', lemma: 'رَبّ', pos: 'noun', features: 'gen+2ms', gloss: 'your master' },
          ],
        },
        {
          id: 'qs-v2-c12-014',
          ar: 'وَخَرَجَ الرَّجُلَانِ، فَكَانَ الأَوَّلُ سَاقِياً لِلْمَلِكِ وَصُلِبَ الآخَرُ.',
          en: 'The two men went out; the first became cupbearer to the king, and the other was crucified.',
          tokens: [
            { surface: 'وَخَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to go out; and went out' },
            { surface: 'الرَّجُلَانِ', lemma: 'رَجُل', pos: 'noun', features: 'du.def.nom', root: 'ر ج ل', gloss: 'the two men' },
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; so became' },
            { surface: 'الأَوَّلُ', lemma: 'أَوَّل', pos: 'noun', features: 'def.nom', root: 'أ و ل', gloss: 'the first' },
            { surface: 'سَاقِياً', lemma: 'سَاقٍ', pos: 'noun', features: 'indef.acc', root: 'س ق ي', gloss: 'cupbearer' },
            { surface: 'لِلْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'prep+def.gen', gloss: 'to the king' },
            { surface: 'وَصُلِبَ', lemma: 'صَلَبَ', pos: 'verb', features: 'conj+perf.pass.3ms', root: 'ص ل ب', gloss: 'to crucify; and was crucified' },
            { surface: 'الآخَرُ', lemma: 'آخَر', pos: 'noun', features: 'def.nom', gloss: 'the other' },
          ],
        },
        {
          id: 'qs-v2-c12-015',
          ar: 'وَنَسِيَ السَّاقِي أَنْ يَذْكُرَ يُوسُفَ عِنْدَ الْمَلِكِ.',
          en: 'But the cupbearer forgot to mention Yūsuf before the king.',
          tokens: [
            { surface: 'وَنَسِيَ', lemma: 'نَسِيَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن س ي', gloss: 'to forget; and forgot' },
            { surface: 'السَّاقِي', lemma: 'سَاقٍ', pos: 'noun', features: 'def.nom', root: 'س ق ي', gloss: 'the cupbearer' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَذْكُرَ', lemma: 'ذَكَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to remember, mention; mention' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv', gloss: 'before' },
            { surface: 'الْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'def.gen', gloss: 'the king' },
          ],
        },
        {
          id: 'qs-v2-c12-016',
          ar: 'وَأَقَامَ يُوسُفُ فِي السِّجْنِ سِنِينَ.',
          en: 'And Yūsuf remained in the prison for years.',
          tokens: [
            { surface: 'وَأَقَامَ', lemma: 'أَقَامَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و م', gloss: 'to reside, stay; and remained' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'سِنِينَ', lemma: 'سَنَة', pos: 'noun', features: 'pl.indef.acc', root: 'س ن و', gloss: 'years' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا طَلَبَ يُوسُفُ مِنَ السَّاقِي؟',
          options: ['أَنْ يَذْكُرَهُ عِنْدَ الْمَلِكِ', 'أَنْ يُعْطِيَهُ مَالاً', 'أَنْ يُخْرِجَهُ مِنَ السِّجْنِ فَوْراً'],
          answer: 0,
          qEn: 'What did Yūsuf ask of the cupbearer?',
          optionsEn: ['To remember him before the king', 'To give him money', 'To get him out of prison immediately'],
        },
        {
          q: 'مَاذَا حَدَثَ بَعْدَ أَنْ خَرَجَ السَّاقِي مِنَ السِّجْنِ؟',
          options: ['نَسِيَ أَنْ يَذْكُرَ يُوسُفَ', 'أَخْبَرَ الْمَلِكَ بِيُوسُفَ فَوْراً', 'رَجَعَ إِلَى السِّجْنِ'],
          answer: 0,
          qEn: 'What happened after the cupbearer left the prison?',
          optionsEn: ['He forgot to mention Yūsuf', 'He told the king about Yūsuf immediately', 'He returned to the prison'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَكَانَ الأَوَّلُ',
        post: 'لِلْمَلِكِ.',
        en: 'The first became cupbearer to the king.',
        options: ['سَاقِياً', 'سَاقٍ', 'سَاقِينَ', 'سَاقِيَةً'],
        answer: 0,
        rationales: [
          "Accusative -- predicate of كَانَ, agreeing with the masculine singular subject الأَوَّلُ.",
          "Nominative (bare) -- wrong case; كَانَ's predicate must be accusative.",
          'Plural -- wrong number; الأَوَّلُ is a single person.',
          'Feminine -- wrong gender; الأَوَّلُ refers to a man.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَقَامَ يُوسُفُ فِي السِّجْنِ',
        post: '.',
        en: 'Yūsuf remained in the prison for years.',
        options: ['سِنِينَ', 'سَنَةً', 'سَنَةٌ', 'سِنُونَ'],
        answer: 0,
        rationales: [
          "Plural, oblique form -- matches the multi-year duration meant here (سِنِينَ).",
          "Singular 'a year' -- wrong number; the text means several years.",
          'Singular nominative -- wrong case and number.',
          'Plural nominative سِنُونَ -- wrong case for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ لِلأَوَّلِ:',
        post: 'عِنْدَ رَبِّكَ.',
        en: "He said to the first: 'Remember me before your master.'",
        options: ['اذْكُرْنِي', 'اذْكُرُونِي', 'اُذْكُرِينِي', 'يَذْكُرُنِي'],
        answer: 0,
        rationales: [
          '2nd masculine singular imperative + me -- matches addressing one man.',
          '2nd masculine plural imperative -- wrong number; addressing one person.',
          '2nd feminine singular imperative -- wrong gender.',
          '3rd masculine singular imperfect -- wrong mood; not a command.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَسْقِي رَبَّهُ',
        pre: '',
        post: 'رَبَّهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَسْقِي', 'يَسْقِي', 'تَسْقِي', 'نَسْقِي'],
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
        base: 'يَسْقِي رَبَّهُ',
        pre: '',
        post: 'رَبَّهُ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَسْقِي', 'أَسْقِي', 'تَسْقِي', 'يَسْقُونَ'],
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
        base: 'يَسْقِي رَبَّهُ',
        pre: '',
        post: 'رَبَّهُ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَسْقُونَ', 'يَسْقِي', 'نَسْقِي', 'تَسْقُونَ'],
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

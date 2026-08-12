// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 1 -- رُؤْيَا
// عَجِيبَةٌ. Printed pages 27 (top, volume 2's opening page -- see
// QASAS_AGENT_BRIEF.md §1) - 28 (top, before ch2's heading حَسَدُ
// الإِخْوَةِ). Transcribed by hand from the scan (vision OCR, 300dpi
// render) against QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// Opens the Yūsuf story: the dream of eleven stars, sun and moon
// prostrating to him, and Yaʿqūb's warning not to tell his brothers. One
// bracketed group is direct Qur'anic quotation (12:4, Yūsuf's own words to
// his father), split into fragments of at most 2 tokens each (same
// workaround as qasas-v1 ch4-16):
//   -- qs-v2-c01-{015..021}: ﴿يَاأَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا
//      وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ﴾ (12 words -- 7
//      fragments). The narrator's own "قَالَ:" immediately before it stays
//      plain prose (qs-v2-c01-014), outside the guillemets, matching how
//      the book itself prints it.
//
// Grammar notes:
//   -- أَحَدَ عَشَرَ ('eleven') reuses the pos:'num' pattern introduced in
//      qasas-v1 ch16 for اثْنَا عَشَرَ: أَحَدَ (lemma أَحَد -- already known
//      from qasas-v1 ch9/10 as 'anyone/someone' -- reused here in its
//      numeral sense) + عَشَرَ (lemma عَشَرَ, already known from ch16). Both
//      tagged pos:'num', features 'num'.
//   -- رُؤْيَا (dream/vision) is a noun ending in alif maqṣūra: it shows no
//      visible case mark in any of the three cases (unlike مَنَام, already
//      taught in qasas-v1 ch14), so it is never build-eligible on its own,
//      but is still tagged nom/acc/gen normally per its syntactic role.
//   -- لَا تُخْبِرْ (qs-v2-c01-035) is prohibitive جزم, not true imperative --
//      same impf.2ms tagging (retaining the imperfect تـ-prefix) as
//      established in qasas-v1 ch11/ch14 for لَا + jussive.
//   -- يَا وَلَدِي (qs-v2-c01-034) is مُنَادًى مُضَاف (a vocative construct
//      with an attached pronoun), which takes the accusative -- tagged
//      acc+1s, unlike the frozen, case-unmarked يَاأَبَتِ form used
//      elsewhere in the book.
//   -- Shared lexicon check (QASAS_AGENT_BRIEF.md §6): كَوْكَب، قَمَر، شَمْس،
//      سَجَدَ، تَعَجَّبَ، فَهِمَ، رَجُل، غَلَبَ، شَيْطَان، لَعِبَ، عَدُوّ، أَحَد،
//      كَثِير، عَرَفَ، نَاس are all already taught in qasas-v1 and so are
//      NOT re-listed in newWords here.
//
// 19 new words (غُلَام، جَمِيل، ذَكِيّ، جَمِيع، حَكَى، رُؤْيَا، بِشَارَة، عِلْم،
// نُبُوَّة، أَنْعَمَ، جَدّ، آل، شَيْخ، طَبِيعَة، إِنْسَان، أَخْبَرَ، حَسَدَ، شَأْن،
// قَدْ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch1',
  title: { ar: 'رُؤْيَا عَجِيبَةٌ', en: 'An Amazing Dream' },
  newWords: [
    'غُلَام', 'جَمِيل', 'ذَكِيّ', 'جَمِيع', 'حَكَى', 'رُؤْيَا', 'بِشَارَة', 'عِلْم',
    'نُبُوَّة', 'أَنْعَمَ', 'جَدّ', 'آل', 'شَيْخ', 'طَبِيعَة', 'إِنْسَان', 'أَخْبَرَ',
    'حَسَدَ', 'شَأْن', 'قَدْ', 'سَاجِد',
  ],
  lemmas: {
    'غُلَام': { gloss: 'young man, lad' },
    'جَمِيل': { gloss: 'handsome, beautiful' },
    'ذَكِيّ': { gloss: 'intelligent, clever' },
    'جَمِيع': { gloss: 'all, entirety' },
    'حَكَى': { gloss: 'to narrate, tell' },
    'رُؤْيَا': { gloss: 'dream, vision' },
    'بِشَارَة': { gloss: 'glad tiding, good news' },
    'عِلْم': { gloss: 'knowledge' },
    'نُبُوَّة': { gloss: 'prophethood' },
    'أَنْعَمَ': { gloss: 'to bestow favor, to bless' },
    'جَدّ': { gloss: 'grandfather' },
    'آل': { gloss: 'family, folk (of)' },
    'شَيْخ': { gloss: 'elder, old man' },
    'طَبِيعَة': { gloss: 'nature, disposition' },
    'إِنْسَان': { gloss: 'human being, person' },
    'أَخْبَرَ': { gloss: 'to inform, tell' },
    'حَسَدَ': { gloss: 'to envy' },
    'شَأْن': { gloss: 'matter, standing, distinction' },
    'قَدْ': { gloss: 'indeed, verily (with a perfect verb)' },
    'سَاجِد': { gloss: 'prostrating' },
  },
  paragraphs: [
    {
      en: 'Yūsuf was a young boy, and he had eleven brothers. And Yūsuf was a handsome young man, and Yūsuf was an intelligent young man, and his father Yaʿqūb loved him more than all his brothers. One night Yūsuf saw an amazing dream.',
      sentences: [
        {
          id: 'qs-v2-c01-001',
          ar: 'كَانَ يُوسُفُ وَلَدًا صَغِيرًا،',
          en: 'Yūsuf was a young boy,',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'وَلَدًا', lemma: 'وَلَد', pos: 'noun', features: 'indef.acc', root: 'و ل د', gloss: 'a boy' },
            { surface: 'صَغِيرًا', lemma: 'صَغِير', pos: 'adj', features: 'indef.acc', root: 'ص غ ر', gloss: 'young, small' },
          ],
        },
        {
          id: 'qs-v2-c01-002',
          ar: 'وَكَانَ لَهُ أَحَدَ عَشَرَ أَخًا.',
          en: 'and he had eleven brothers.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; had' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him, he had' },
            { surface: 'أَحَدَ', lemma: 'أَحَد', pos: 'num', features: 'num', root: 'أ ح د', gloss: 'one (forms "eleven" with عَشَرَ)' },
            { surface: 'عَشَرَ', lemma: 'عَشَرَ', pos: 'num', features: 'num', gloss: 'ten (forms the -teen numbers)' },
            { surface: 'أَخًا', lemma: 'أَخ', pos: 'noun', features: 'indef.acc', root: 'أ خ و', gloss: 'brothers' },
          ],
        },
        {
          id: 'qs-v2-c01-003',
          ar: 'وَكَانَ يُوسُفُ غُلَامًا جَمِيلًا،',
          en: 'And Yūsuf was a handsome young man,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'غُلَامًا', lemma: 'غُلَام', pos: 'noun', features: 'indef.acc', root: 'غ ل م', gloss: 'a young man, lad' },
            { surface: 'جَمِيلًا', lemma: 'جَمِيل', pos: 'adj', features: 'indef.acc', root: 'ج م ل', gloss: 'handsome' },
          ],
        },
        {
          id: 'qs-v2-c01-004',
          ar: 'وَكَانَ يُوسُفُ غُلَامًا ذَكِيًّا،',
          en: 'and Yūsuf was an intelligent young man,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'غُلَامًا', lemma: 'غُلَام', pos: 'noun', features: 'indef.acc', root: 'غ ل م', gloss: 'a young man, lad' },
            { surface: 'ذَكِيًّا', lemma: 'ذَكِيّ', pos: 'adj', features: 'indef.acc', root: 'ذ ك و', gloss: 'intelligent, clever' },
          ],
        },
        {
          id: 'qs-v2-c01-005',
          ar: 'وَكَانَ أَبُوهُ يَعْقُوبُ يُحِبُّهُ أَكْثَرَ مِنْ جَمِيعِ إِخْوَتِهِ.',
          en: 'and his father Yaʿqūb loved him more than all his brothers.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'أَبُوهُ', lemma: 'أَب', pos: 'noun', features: 'nom+3ms', root: 'أ ب و', gloss: 'his father' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'يُحِبُّهُ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms+3ms', root: 'ح ب ب', gloss: 'to love; loves him' },
            { surface: 'أَكْثَرَ', lemma: 'أَكْثَر', pos: 'adj', features: 'indef.acc', root: 'ك ث ر', gloss: 'more' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'جَمِيعِ', lemma: 'جَمِيع', pos: 'noun', features: 'gen.constr', root: 'ج م ع', gloss: 'all (of)' },
            { surface: 'إِخْوَتِهِ', lemma: 'أَخ', pos: 'noun', features: 'pl.gen+3ms', root: 'أ خ و', gloss: 'his brothers' },
          ],
        },
        {
          id: 'qs-v2-c01-006',
          ar: 'ذَاتَ لَيْلَةٍ رَأَى يُوسُفُ رُؤْيَا عَجِيبَةً.',
          en: 'One night Yūsuf saw an amazing dream.',
          tokens: [
            { surface: 'ذَاتَ', lemma: 'ذَات', pos: 'noun', features: 'acc.constr', gloss: 'one (idiom, mudāf of ذَاتَ لَيْلَةٍ)' },
            { surface: 'لَيْلَةٍ', lemma: 'لَيْلَة', pos: 'noun', features: 'indef.gen', root: 'ل ي ل', gloss: 'a night' },
            { surface: 'رَأَى', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms', root: 'ر أ ي', gloss: 'to see; saw' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'رُؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'indef.acc', root: 'ر أ ي', gloss: 'a dream, vision' },
            { surface: 'عَجِيبَةً', lemma: 'عَجِيب', pos: 'adj', features: 'indef.acc.f', root: 'ع ج ب', gloss: 'amazing, strange' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَنْ حَكَى يُوسُفُ رُؤْيَاهُ؟',
          options: ['لِأَبِيهِ يَعْقُوبَ', 'لِإِخْوَتِهِ', 'لِأُمِّهِ'],
          answer: 0,
          qEn: 'To whom did Yūsuf tell his dream?',
          optionsEn: ['To his father Yaʿqūb', 'To his brothers', 'To his mother'],
        },
      ],
    },
    {
      en: 'He saw eleven stars, and he saw the sun and the moon, all prostrating to him. Young Yūsuf was greatly amazed! And he did not understand this dream -- how could the stars and the sun and the moon prostrate to a man? Young Yūsuf went to his father Yaʿqūb',
      sentences: [
        {
          id: 'qs-v2-c01-007',
          ar: 'رَأَى أَحَدَ عَشَرَ كَوْكَبًا',
          en: 'He saw eleven stars,',
          tokens: [
            { surface: 'رَأَى', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms', root: 'ر أ ي', gloss: 'to see; saw' },
            { surface: 'أَحَدَ', lemma: 'أَحَد', pos: 'num', features: 'num', root: 'أ ح د', gloss: 'one (forms "eleven" with عَشَرَ)' },
            { surface: 'عَشَرَ', lemma: 'عَشَرَ', pos: 'num', features: 'num', gloss: 'ten (forms the -teen numbers)' },
            { surface: 'كَوْكَبًا', lemma: 'كَوْكَب', pos: 'noun', features: 'indef.acc', root: 'ك و ك ب', gloss: 'stars' },
          ],
        },
        {
          id: 'qs-v2-c01-008',
          ar: 'وَرَأَى الشَّمْسَ وَالْقَمَرَ كُلٌّ يَسْجُدُ لَهُ.',
          en: 'and he saw the sun and the moon, all prostrating to him.',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ر أ ي', gloss: 'to see; and saw' },
            { surface: 'الشَّمْسَ', lemma: 'شَمْس', pos: 'noun', features: 'def.acc', root: 'ش م س', gloss: 'the sun' },
            { surface: 'وَالْقَمَرَ', lemma: 'قَمَر', pos: 'noun', features: 'conj+def.acc', root: 'ق م ر', gloss: 'and the moon' },
            { surface: 'كُلٌّ', lemma: 'كُلّ', pos: 'noun', features: 'indef.nom', root: 'ك ل ل', gloss: 'each, all' },
            { surface: 'يَسْجُدُ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3ms', root: 'س ج د', gloss: 'to prostrate; prostrates' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v2-c01-009',
          ar: 'تَعَجَّبَ يُوسُفُ الصَّغِيرُ كَثِيرًا!',
          en: 'Young Yūsuf was greatly amazed!',
          tokens: [
            { surface: 'تَعَجَّبَ', lemma: 'تَعَجَّبَ', pos: 'verb', features: 'perf.3ms', root: 'ع ج ب', gloss: 'to be amazed' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'الصَّغِيرُ', lemma: 'صَغِير', pos: 'adj', features: 'def.nom', root: 'ص غ ر', gloss: 'the young' },
            { surface: 'كَثِيرًا', lemma: 'كَثِير', pos: 'adv', features: 'indef.acc', root: 'ك ث ر', gloss: 'greatly' },
          ],
        },
        {
          id: 'qs-v2-c01-010',
          ar: 'وَمَا فَهِمَ هَذِهِ الرُّؤْيَا',
          en: 'And he did not understand this dream --',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'فَهِمَ', lemma: 'فَهِمَ', pos: 'verb', features: 'perf.3ms', root: 'ف ه م', gloss: 'to understand; understood' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.acc', root: 'ر أ ي', gloss: 'the dream, vision' },
          ],
        },
        {
          id: 'qs-v2-c01-011',
          ar: 'كَيْفَ تَسْجُدُ الْكَوَاكِبُ وَالشَّمْسُ وَالْقَمَرُ لِرَجُلٍ؟',
          en: 'how could the stars and the sun and the moon prostrate to a man?',
          tokens: [
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'تَسْجُدُ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3fs', root: 'س ج د', gloss: 'to prostrate; prostrate' },
            { surface: 'الْكَوَاكِبُ', lemma: 'كَوْكَب', pos: 'noun', features: 'pl.def.nom', root: 'ك و ك ب', gloss: 'the stars' },
            { surface: 'وَالشَّمْسُ', lemma: 'شَمْس', pos: 'noun', features: 'conj+def.nom', root: 'ش م س', gloss: 'and the sun' },
            { surface: 'وَالْقَمَرُ', lemma: 'قَمَر', pos: 'noun', features: 'conj+def.nom', root: 'ق م ر', gloss: 'and the moon' },
            { surface: 'لِرَجُلٍ', lemma: 'رَجُل', pos: 'noun', features: 'prep+indef.gen', root: 'ر ج ل', gloss: 'to a man' },
          ],
        },
        {
          id: 'qs-v2-c01-012',
          ar: 'ذَهَبَ يُوسُفُ الصَّغِيرُ إِلَى أَبِيهِ يَعْقُوبَ',
          en: 'Young Yūsuf went to his father Yaʿqūb',
          tokens: [
            { surface: 'ذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'perf.3ms', root: 'ذ ه ب', gloss: 'to go; went' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'الصَّغِيرُ', lemma: 'صَغِير', pos: 'adj', features: 'def.nom', root: 'ص غ ر', gloss: 'the young' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أَبِيهِ', lemma: 'أَب', pos: 'noun', features: 'gen+3ms', root: 'أ ب و', gloss: 'his father' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'gen', gloss: 'Yaʿqūb' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا رَأَى يُوسُفُ فِي رُؤْيَاهُ؟',
          options: ['أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ يَسْجُدُونَ لَهُ', 'بَيْتًا كَبِيرًا', 'مَلِكًا عَلَى عَرْشٍ'],
          answer: 0,
          qEn: 'What did Yūsuf see in his dream?',
          optionsEn: ['Eleven stars and the sun and the moon prostrating to him', 'A great house', 'A king on a throne'],
        },
      ],
    },
    {
      en: 'and told him this amazing dream. He said: \'O my father, indeed I saw eleven stars and the sun and the moon;',
      sentences: [
        {
          id: 'qs-v2-c01-013',
          ar: 'وَحَكَى لَهُ هَذِهِ الرُّؤْيَا الْعَجِيبَةَ.',
          en: 'and told him this amazing dream.',
          tokens: [
            { surface: 'وَحَكَى', lemma: 'حَكَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ح ك ي', gloss: 'to narrate, tell; and told' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.acc', root: 'ر أ ي', gloss: 'the dream, vision' },
            { surface: 'الْعَجِيبَةَ', lemma: 'عَجِيب', pos: 'adj', features: 'def.acc.f', root: 'ع ج ب', gloss: 'the amazing, strange' },
          ],
        },
        {
          id: 'qs-v2-c01-014',
          ar: 'قَالَ:',
          en: 'He said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v2-c01-015',
          ar: '﴿يَاأَبَتِ',
          en: "'O my father,",
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أَبَتِ', lemma: 'أَب', pos: 'noun', features: '1s', root: 'أ ب و', gloss: 'my father (frozen vocative form)' },
          ],
        },
        {
          id: 'qs-v2-c01-016',
          ar: 'إِنِّي رَأَيْتُ',
          en: 'indeed I saw',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'رَأَيْتُ', lemma: 'رَأَى', pos: 'verb', features: 'perf.1s', root: 'ر أ ي', gloss: 'to see; I saw' },
          ],
        },
        {
          id: 'qs-v2-c01-017',
          ar: 'أَحَدَ عَشَرَ',
          en: 'eleven',
          tokens: [
            { surface: 'أَحَدَ', lemma: 'أَحَد', pos: 'num', features: 'num', root: 'أ ح د', gloss: 'one (forms "eleven" with عَشَرَ)' },
            { surface: 'عَشَرَ', lemma: 'عَشَرَ', pos: 'num', features: 'num', gloss: 'ten (forms the -teen numbers)' },
          ],
        },
        {
          id: 'qs-v2-c01-018',
          ar: 'كَوْكَبًا',
          en: 'stars',
          tokens: [
            { surface: 'كَوْكَبًا', lemma: 'كَوْكَب', pos: 'noun', features: 'indef.acc', root: 'ك و ك ب', gloss: 'stars' },
          ],
        },
        {
          id: 'qs-v2-c01-019',
          ar: 'وَالشَّمْسَ وَالْقَمَرَ',
          en: 'and the sun and the moon;',
          tokens: [
            { surface: 'وَالشَّمْسَ', lemma: 'شَمْس', pos: 'noun', features: 'conj+def.acc', root: 'ش م س', gloss: 'and the sun' },
            { surface: 'وَالْقَمَرَ', lemma: 'قَمَر', pos: 'noun', features: 'conj+def.acc', root: 'ق م ر', gloss: 'and the moon' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'I saw them prostrating to me.\' (Qur\'an 12:4) And his father Yaʿqūb was a prophet. Yaʿqūb rejoiced greatly at this dream. and he said: \'Allah has blessed you, O Yūsuf, so you will have a great standing. This dream is a glad tiding of knowledge and prophethood. Allah has indeed blessed your grandfather Isḥāq, and Allah has indeed blessed your grandfather Ibrāhīm. And He will bless you and bless the family of Yaʿqūb.',
      sentences: [
        {
          id: 'qs-v2-c01-020',
          ar: 'رَأَيْتُهُمْ',
          en: 'I saw them',
          tokens: [
            { surface: 'رَأَيْتُهُمْ', lemma: 'رَأَى', pos: 'verb', features: 'perf.1s+3mp', root: 'ر أ ي', gloss: 'to see; I saw them' },
          ],
        },
        {
          id: 'qs-v2-c01-021',
          ar: 'لِي سَاجِدِينَ﴾.',
          en: "prostrating to me.' (Qur'an 12:4)",
          tokens: [
            { surface: 'لِي', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'to me' },
            { surface: 'سَاجِدِينَ', lemma: 'سَاجِد', pos: 'adj', features: 'pl.acc', root: 'س ج د', gloss: 'prostrating' },
          ],
        },
        {
          id: 'qs-v2-c01-022',
          ar: 'وَكَانَ أَبُوهُ يَعْقُوبُ نَبِيًّا.',
          en: 'And his father Yaʿqūb was a prophet.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'أَبُوهُ', lemma: 'أَب', pos: 'noun', features: 'nom+3ms', root: 'أ ب و', gloss: 'his father' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'نَبِيًّا', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.acc', root: 'ن ب أ', gloss: 'a prophet' },
          ],
        },
        {
          id: 'qs-v2-c01-023',
          ar: 'فَرِحَ يَعْقُوبُ بِهَذِهِ الرُّؤْيَا كَثِيرًا.',
          en: 'Yaʿqūb rejoiced greatly at this dream.',
          tokens: [
            { surface: 'فَرِحَ', lemma: 'فَرِحَ', pos: 'verb', features: 'perf.3ms', root: 'ف ر ح', gloss: 'to rejoice; rejoiced' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'بِهَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'prep+dem.f', gloss: 'at this' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.gen', root: 'ر أ ي', gloss: 'the dream, vision' },
            { surface: 'كَثِيرًا', lemma: 'كَثِير', pos: 'adv', features: 'indef.acc', root: 'ك ث ر', gloss: 'greatly' },
          ],
        },
        {
          id: 'qs-v2-c01-024',
          ar: 'وَقَالَ: بَارَكَ اللَّهُ لَكَ يَا يُوسُفُ،',
          en: "and he said: 'Allah has blessed you, O Yūsuf,",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'بَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'perf.3ms', root: 'ب ر ك', gloss: 'to bless; has blessed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَكَ', lemma: 'لِ', pos: 'prep', features: 'prep+2ms', gloss: 'to you' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c01-025',
          ar: 'فَسَيَكُونُ لَكَ شَأْنٌ.',
          en: 'so you will have a great standing.',
          tokens: [
            { surface: 'فَسَيَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ك و ن', gloss: 'to be; so will be' },
            { surface: 'لَكَ', lemma: 'لِ', pos: 'prep', features: 'prep+2ms', gloss: 'to you, you will have' },
            { surface: 'شَأْنٌ', lemma: 'شَأْن', pos: 'noun', features: 'indef.nom', root: 'ش أ ن', gloss: 'a matter, standing, distinction' },
          ],
        },
        {
          id: 'qs-v2-c01-026',
          ar: 'هَذِهِ الرُّؤْيَا بِشَارَةٌ بِعِلْمٍ وَنُبُوَّةٍ.',
          en: 'This dream is a glad tiding of knowledge and prophethood.',
          tokens: [
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.nom', root: 'ر أ ي', gloss: 'the dream, vision' },
            { surface: 'بِشَارَةٌ', lemma: 'بِشَارَة', pos: 'noun', features: 'indef.nom', root: 'ب ش ر', gloss: 'a glad tiding' },
            { surface: 'بِعِلْمٍ', lemma: 'عِلْم', pos: 'noun', features: 'prep+indef.gen', root: 'ع ل م', gloss: 'of knowledge' },
            { surface: 'وَنُبُوَّةٍ', lemma: 'نُبُوَّة', pos: 'noun', features: 'conj+indef.gen', root: 'ن ب أ', gloss: 'and prophethood' },
          ],
        },
        {
          id: 'qs-v2-c01-027',
          ar: 'وَقَدْ أَنْعَمَ اللَّهُ عَلَى جَدِّكَ إِسْحَاقَ',
          en: 'Allah has indeed blessed your grandfather Isḥāq,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed (has)' },
            { surface: 'أَنْعَمَ', lemma: 'أَنْعَمَ', pos: 'verb', features: 'perf.3ms', root: 'ن ع م', gloss: 'to bestow favor; has bestowed favor' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'جَدِّكَ', lemma: 'جَدّ', pos: 'noun', features: 'gen+2ms', root: 'ج د د', gloss: 'your grandfather' },
            { surface: 'إِسْحَاقَ', lemma: 'إِسْحَاق', pos: 'proper', features: 'gen', gloss: 'Isḥāq' },
          ],
        },
        {
          id: 'qs-v2-c01-028',
          ar: 'وَقَدْ أَنْعَمَ اللَّهُ عَلَى جَدِّكَ إِبْرَاهِيمَ.',
          en: 'and Allah has indeed blessed your grandfather Ibrāhīm.',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed (has)' },
            { surface: 'أَنْعَمَ', lemma: 'أَنْعَمَ', pos: 'verb', features: 'perf.3ms', root: 'ن ع م', gloss: 'to bestow favor; has bestowed favor' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'جَدِّكَ', lemma: 'جَدّ', pos: 'noun', features: 'gen+2ms', root: 'ج د د', gloss: 'your grandfather' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v2-c01-029',
          ar: 'وَإِنَّهُ يُنْعِمُ عَلَيْكَ وَيُنْعِمُ عَلَى آلِ يَعْقُوبَ.',
          en: 'And He will bless you and bless the family of Yaʿqūb.',
          tokens: [
            { surface: 'وَإِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'and indeed he' },
            { surface: 'يُنْعِمُ', lemma: 'أَنْعَمَ', pos: 'verb', features: 'impf.3ms', root: 'ن ع م', gloss: 'to bestow favor; bestows favor' },
            { surface: 'عَلَيْكَ', lemma: 'عَلَى', pos: 'prep', features: 'prep+2ms', gloss: 'upon you' },
            { surface: 'وَيُنْعِمُ', lemma: 'أَنْعَمَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ن ع م', gloss: 'to bestow favor; and bestows favor' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'آلِ', lemma: 'آل', pos: 'noun', features: 'gen.constr', root: 'أ و ل', gloss: 'family (of)' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'gen', gloss: 'Yaʿqūb' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'And Yaʿqūb was a great elder, and he knew the natures of people. And he knew how Satan prevails, and how Satan plays with man. So he said: \'O my son, do not tell this dream to any of your brothers, for they will envy you and become an enemy to you.',
      sentences: [
        {
          id: 'qs-v2-c01-030',
          ar: 'وَكَانَ يَعْقُوبُ شَيْخًا كَبِيرًا،',
          en: 'And Yaʿqūb was a great elder,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'شَيْخًا', lemma: 'شَيْخ', pos: 'noun', features: 'indef.acc', root: 'ش ي خ', gloss: 'an elder, old man' },
            { surface: 'كَبِيرًا', lemma: 'كَبِير', pos: 'adj', features: 'indef.acc', root: 'ك ب ر', gloss: 'great, old' },
          ],
        },
        {
          id: 'qs-v2-c01-031',
          ar: 'وَكَانَ يَعْرِفُ طَبَائِعَ النَّاسِ.',
          en: 'and he knew the natures of people.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', root: 'ع ر ف', gloss: 'to know; knew' },
            { surface: 'طَبَائِعَ', lemma: 'طَبِيعَة', pos: 'noun', features: 'pl.acc.constr', root: 'ط ب ع', gloss: 'natures (of)' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', root: 'ن و س', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v2-c01-032',
          ar: 'وَكَانَ يَعْرِفُ كَيْفَ يَغْلِبُ الشَّيْطَانُ،',
          en: 'And he knew how Satan prevails,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', root: 'ع ر ف', gloss: 'to know; knew' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'يَغْلِبُ', lemma: 'غَلَبَ', pos: 'verb', features: 'impf.3ms', root: 'غ ل ب', gloss: 'to overcome, prevail; prevails' },
            { surface: 'الشَّيْطَانُ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.nom', root: 'ش ط ن', gloss: 'Satan, the devil' },
          ],
        },
        {
          id: 'qs-v2-c01-033',
          ar: 'وَكَيْفَ يَلْعَبُ الشَّيْطَانُ بِالْإِنْسَانِ.',
          en: 'and how Satan plays with man.',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'يَلْعَبُ', lemma: 'لَعِبَ', pos: 'verb', features: 'impf.3ms', root: 'ل ع ب', gloss: 'to play; plays' },
            { surface: 'الشَّيْطَانُ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.nom', root: 'ش ط ن', gloss: 'Satan, the devil' },
            { surface: 'بِالْإِنْسَانِ', lemma: 'إِنْسَان', pos: 'noun', features: 'prep+def.gen', root: 'أ ن س', gloss: 'with man, mankind' },
          ],
        },
        {
          id: 'qs-v2-c01-034',
          ar: 'فَقَالَ: يَا وَلَدِي،',
          en: "So he said: 'O my son,",
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; so said' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'وَلَدِي', lemma: 'وَلَد', pos: 'noun', features: 'acc+1s', root: 'و ل د', gloss: 'my son' },
          ],
        },
        {
          id: 'qs-v2-c01-035',
          ar: 'لَا تُخْبِرْ بِهَذِهِ الرُّؤْيَا أَحَدًا مِنْ إِخْوَتِكَ',
          en: 'do not tell this dream to any of your brothers,',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'do not' },
            { surface: 'تُخْبِرْ', lemma: 'أَخْبَرَ', pos: 'verb', features: 'impf.2ms', root: 'خ ب ر', gloss: 'to inform, tell; do not tell' },
            { surface: 'بِهَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'prep+dem.f', gloss: 'about this' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.gen', root: 'ر أ ي', gloss: 'the dream, vision' },
            { surface: 'أَحَدًا', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', root: 'أ ح د', gloss: 'anyone' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'إِخْوَتِكَ', lemma: 'أَخ', pos: 'noun', features: 'pl.gen+2ms', root: 'أ خ و', gloss: 'your brothers' },
          ],
        },
        {
          id: 'qs-v2-c01-036',
          ar: 'فَإِنَّهُمْ يَحْسُدُونَكَ وَيَكُونُونَ لَكَ عَدُوًّا.',
          en: 'for they will envy you and become an enemy to you.',
          tokens: [
            { surface: 'فَإِنَّهُمْ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3mp', gloss: 'for indeed they' },
            { surface: 'يَحْسُدُونَكَ', lemma: 'حَسَدَ', pos: 'verb', features: 'impf.3mp+2ms', root: 'ح س د', gloss: 'to envy; they envy you' },
            { surface: 'وَيَكُونُونَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ك و ن', gloss: 'to be; and they become' },
            { surface: 'لَكَ', lemma: 'لِ', pos: 'prep', features: 'prep+2ms', gloss: 'to you' },
            { surface: 'عَدُوًّا', lemma: 'عَدُوّ', pos: 'noun', features: 'indef.acc', root: 'ع د و', gloss: 'an enemy' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا نَهَى يَعْقُوبُ يُوسُفَ عَنْ إِخْبَارِ إِخْوَتِهِ؟',
          options: ['لِأَنَّهُمْ يَحْسُدُونَهُ وَيَكُونُونَ لَهُ عَدُوًّا', 'لِأَنَّهُمْ لَا يَفْهَمُونَ الرُّؤَى', 'لِأَنَّهُمْ بَعِيدُونَ عَنْهُ'],
          answer: 0,
          qEn: 'Why did Yaʿqūb forbid Yūsuf from telling his brothers?',
          optionsEn: ['Because they would envy him and become his enemy', 'Because they do not understand dreams', 'Because they were far away from him'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ يُوسُفُ غُلَامًا',
        post: '، وَكَانَ يُوسُفُ غُلَامًا ذَكِيًّا.',
        en: 'And Yūsuf was a handsome young man, and Yūsuf was an intelligent young man.',
        options: ['جَمِيلًا', 'جَمِيلٌ', 'جَمِيلٍ', 'جَمِيلَةً'],
        answer: 0,
        rationales: [
          'Accusative -- خَبَرُ كَانَ (predicate of كَانَ), matching the parallel ذَكِيًّا later in the sentence.',
          'Nominative -- wrong case for the predicate of كَانَ.',
          'Genitive -- nothing here governs the genitive.',
          "Feminine 'beautiful' -- wrong gender; غُلَامًا (a young man) is masculine.",
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالُوا: لِمَاذَا',
        post: 'أَبُونَا يُوسُفَ وَبِنْيَامِينَ أَكْثَرَ؟',
        en: 'They said: "Why does our father love Yūsuf and Binyāmīn more?"',
        options: ['يُحِبُّ', 'أُحِبُّ', 'تُحِبُّ', 'نُحِبُّ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches أَبُونَا (our father), the one doing the loving.',
          '1st singular -- I; wrong person.',
          '2nd masculine singular -- you; wrong person.',
          '1st plural -- we; wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَقَالَ: يَا وَلَدِي، لَا',
        post: 'بِهَذِهِ الرُّؤْيَا أَحَدًا مِنْ إِخْوَتِكَ.',
        en: 'So he said: "O my son, do not tell this dream to any of your brothers."',
        options: ['تُخْبِرْ', 'أَخْبَرَ', 'يُخْبِرُ', 'أُخْبِرُ'],
        answer: 0,
        rationales: [
          'Jussive after لَا (prohibitive) -- "do not tell", addressed to Yūsuf directly.',
          'Perfect "he informed" -- wrong tense/mood for a prohibition.',
          'Imperfect "he informs" -- wrong person; the addressee is Yūsuf (2ms), not "he".',
          'Imperfect "I inform" -- wrong person entirely.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَحْسُدُونَكَ وَيَكُونُونَ لَكَ عَدُوًّا',
        pre: '',
        post: 'وَيَكُونُونَ لَكَ عَدُوًّا',
        targetPerson: 'أَنَا',
        targetEn: 'I (object: "they envy me")',
        options: ['يَحْسُدُونَنِي', 'يَحْسُدُونَكَ', 'يَحْسُدُونَهُ', 'يَحْسُدُونَنَا'],
        answer: 0,
        rationales: [
          '"They envy me" -- 1st singular object suffix.',
          '"They envy you" -- the form already given.',
          '"They envy him" -- 3rd masculine singular object.',
          '"They envy us" -- 1st plural object.',
        ],
      },
      {
        type: 'shift',
        base: 'يَحْسُدُونَكَ وَيَكُونُونَ لَكَ عَدُوًّا',
        pre: '',
        post: 'وَيَكُونُونَ لَكَ عَدُوًّا',
        targetPerson: 'هُوَ',
        targetEn: 'him (object: "they envy him")',
        options: ['يَحْسُدُونَهُ', 'يَحْسُدُونَكَ', 'يَحْسُدُونَنِي', 'يَحْسُدُونَهَا'],
        answer: 0,
        rationales: [
          '"They envy him" -- 3rd masculine singular object suffix.',
          '"They envy you" -- the form already given.',
          '"They envy me" -- 1st singular object.',
          '"They envy her" -- 3rd feminine singular object.',
        ],
      },
      {
        type: 'shift',
        base: 'يَحْسُدُونَكَ وَيَكُونُونَ لَكَ عَدُوًّا',
        pre: '',
        post: 'وَيَكُونُونَ لَكَ عَدُوًّا',
        targetPerson: 'نَحْنُ',
        targetEn: 'us (object: "they envy us")',
        options: ['يَحْسُدُونَنَا', 'يَحْسُدُونَكَ', 'يَحْسُدُونَهُ', 'يَحْسُدُونَنِي'],
        answer: 0,
        rationales: [
          '"They envy us" -- 1st plural object suffix.',
          '"They envy you" -- the form already given.',
          '"They envy him" -- 3rd masculine singular object.',
          '"They envy me" -- 1st singular object.',
        ],
      },
    ],
  },
};

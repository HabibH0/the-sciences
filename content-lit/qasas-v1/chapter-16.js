// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 16 -- بَيْتُ
// الْمَقْدِس. Printed page 26, the closing chapter of volume 1 -- the page
// ends with a plain ornamental divider (٭٭٭) and no further chapter heading,
// and page 27 opens volume 2 «أَحْسَنُ الْقَصَصِ» (Yūsuf) with its own
// chapter 1, confirming volume 1 has exactly 16 chapters. Transcribed by
// hand from the scan (vision OCR, 300dpi render) against
// QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// A short bridge chapter: Ibrāhīm's second family through Sārah (Isḥāq,
// then Yaʿqūb, then Yūsuf and his eleven brothers), the raising of the
// second house for Allah -- al-Masjid al-Aqṣā / Bayt al-Maqdis in Syria --
// and a closing line that hands off directly into volume 2's Yūsuf story.
// No Qur'anic quotation on this page.
//
// Grammar notes:
//   -- بَيْتُ الْمَقْدِسِ / الْمَسْجِدُ الْأَقْصَى: rather than inventing new
//      multi-word proper-noun handling, these follow the same pattern
//      already used for خَلِيلَ اللَّهِ (ch14) -- a common noun in construct
//      (بَيْتُ nom.constr 'house (of)', الْمَسْجِدُ def.nom 'the mosque')
//      followed by the specific/defining word (الْمَقْدِسِ def.gen, root
//      ق د س; الْأَقْصَى def.nom, root ق ص و), not a single fused proper token.
//   -- أَبُوهُ / أَخُوهُ: the "five nouns" (الأسماء الخمسة) keep و in the
//      nominative when possessed -- roots tagged أ ب و / أ خ و respectively.
//   -- اثْنَا عَشَرَ ('twelve') is the first cardinal number tagged in the
//      course. Kept as two tokens, same two-tokens-one-idiom approach as
//      ذَاتَ لَيْلَةٍ in ch14: اثْنَا (lemma اِثْنَانِ 'two', pos num,
//      num.constr -- the dual noun's construct form before the following
//      عَشَرَ) and عَشَرَ (lemma عَشَرَ 'ten', pos num, bare num -- the
//      indeclinable component that forms 11-19). وَلَدًا after them is
//      tamyīz, plain indef.acc as with any singular noun after a compound
//      11-99 number. This pos:'num' usage is new to the course and is
//      documented here as the pattern to follow going forward.
//
// 11 new words (سَكَنَ، أَخ، كَمَا، مَسْجِد، مَقْدِس، أَقْصَى، حَوْلَ، اِثْنَانِ،
// عَشَرَ، قِصَّة، عَجِيب). الشَّام and الْقُرْآن are tagged pos:'proper' and so
// are not listed, consistent with how place names and other proper nouns
// have been handled since ch12.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch16',
  title: { ar: 'بَيْتُ الْمَقْدِسِ', en: 'Bayt al-Maqdis (Jerusalem)' },
  newWords: [
    'سَكَنَ', 'أَخ', 'كَمَا', 'مَسْجِد', 'مَقْدِس', 'أَقْصَى', 'حَوْلَ', 'اِثْنَانِ', 'عَشَرَ',
    'قِصَّة', 'عَجِيب',
  ],
  lemmas: {
    'سَكَنَ': { gloss: 'to dwell, settle' },
    'أَخ': { gloss: 'brother' },
    'كَمَا': { gloss: 'just as' },
    'مَسْجِد': { gloss: 'mosque' },
    'مَقْدِس': { gloss: 'sanctuary, holy place' },
    'أَقْصَى': { gloss: 'farthest' },
    'حَوْلَ': { gloss: 'around' },
    'اِثْنَانِ': { gloss: 'two' },
    'عَشَرَ': { gloss: 'ten (forms the -teen numbers)' },
    'قِصَّة': { gloss: 'story' },
    'عَجِيب': { gloss: 'amazing, strange' },
  },
  paragraphs: [
    {
      en: 'And Ibrāhīm had another wife, her name was Sārah. And Ibrāhīm had another son from Sārah, his name was Isḥāq. And Ibrāhīm settled in Syria, and Isḥāq settled there.',
      sentences: [
        {
          id: 'qs-v1-c16-001',
          ar: 'وَكَانَ لِإِبْرَاهِيمَ زَوْجٌ أُخْرَى،',
          en: 'And Ibrāhīm had another wife,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; had' },
            { surface: 'لِإِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'prep+gen', gloss: 'to Ibrāhīm' },
            { surface: 'زَوْجٌ', lemma: 'زَوْج', pos: 'noun', features: 'indef.nom', root: 'ز و ج', gloss: 'a wife' },
            { surface: 'أُخْرَى', lemma: 'آخَر', pos: 'adj', features: 'indef.nom.f', root: 'أ خ ر', gloss: 'another' },
          ],
        },
        {
          id: 'qs-v1-c16-002',
          ar: 'اسْمُهَا سَارَةُ.',
          en: 'her name was Sārah.',
          tokens: [
            { surface: 'اسْمُهَا', lemma: 'اِسْم', pos: 'noun', features: 'nom+3fs', root: 'س م و', gloss: 'her name' },
            { surface: 'سَارَةُ', lemma: 'سَارَة', pos: 'proper', features: 'nom', gloss: 'Sārah' },
          ],
        },
        {
          id: 'qs-v1-c16-003',
          ar: 'وَكَانَ لِإِبْرَاهِيمَ وَلَدٌ آخَرُ مِنْ سَارَةَ',
          en: 'And Ibrāhīm had another son from Sārah,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; had' },
            { surface: 'لِإِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'prep+gen', gloss: 'to Ibrāhīm' },
            { surface: 'وَلَدٌ', lemma: 'وَلَد', pos: 'noun', features: 'indef.nom', root: 'و ل د', gloss: 'a son' },
            { surface: 'آخَرُ', lemma: 'آخَر', pos: 'adj', features: 'indef.nom', root: 'أ خ ر', gloss: 'another' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'سَارَةَ', lemma: 'سَارَة', pos: 'proper', features: 'gen', gloss: 'Sārah' },
          ],
        },
        {
          id: 'qs-v1-c16-004',
          ar: 'اسْمُهُ إِسْحَاقُ.',
          en: 'his name was Isḥāq.',
          tokens: [
            { surface: 'اسْمُهُ', lemma: 'اِسْم', pos: 'noun', features: 'nom+3ms', root: 'س م و', gloss: 'his name' },
            { surface: 'إِسْحَاقُ', lemma: 'إِسْحَاق', pos: 'proper', features: 'nom', gloss: 'Isḥāq' },
          ],
        },
        {
          id: 'qs-v1-c16-005',
          ar: 'وَسَكَنَ إِبْرَاهِيمُ فِي الشَّامِ،',
          en: 'And Ibrāhīm settled in Syria,',
          tokens: [
            { surface: 'وَسَكَنَ', lemma: 'سَكَنَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ك ن', gloss: 'to dwell, settle; and settled' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الشَّامِ', lemma: 'شَام', pos: 'proper', features: 'def.gen', gloss: 'Syria' },
          ],
        },
        {
          id: 'qs-v1-c16-006',
          ar: 'وَسَكَنَ إِسْحَاقُ.',
          en: 'and Isḥāq settled there.',
          tokens: [
            { surface: 'وَسَكَنَ', lemma: 'سَكَنَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ك ن', gloss: 'to dwell, settle; and settled' },
            { surface: 'إِسْحَاقُ', lemma: 'إِسْحَاق', pos: 'proper', features: 'nom', gloss: 'Isḥāq' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنِ ابْنُ إِبْرَاهِيمَ مِنْ سَارَةَ؟',
          options: ['إِسْحَاقُ', 'إِسْمَاعِيلُ', 'يَعْقُوبُ'],
          answer: 0,
          qEn: "Who was Ibrāhīm's son from Sārah?",
          optionsEn: ['Isḥāq', 'Ismāʿīl', 'Yaʿqūb'],
        },
      ],
    },
    {
      en: 'And Isḥāq built a house for Allah in Syria, just as his father and his brother had built a house for Allah in Makkah. And this mosque which Isḥāq built in Syria is Bayt al-Maqdis. And it is al-Masjid al-Aqṣā which Allah blessed around it,',
      sentences: [
        {
          id: 'qs-v1-c16-007',
          ar: 'وَبَنَى إِسْحَاقُ بَيْتًا لِلَّهِ فِي الشَّامِ،',
          en: 'And Isḥāq built a house for Allah in Syria,',
          tokens: [
            { surface: 'وَبَنَى', lemma: 'بَنَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ب ن ي', gloss: 'to build; and built' },
            { surface: 'إِسْحَاقُ', lemma: 'إِسْحَاق', pos: 'proper', features: 'nom', gloss: 'Isḥāq' },
            { surface: 'بَيْتًا', lemma: 'بَيْت', pos: 'noun', features: 'indef.acc', root: 'ب ي ت', gloss: 'a house' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'for Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الشَّامِ', lemma: 'شَام', pos: 'proper', features: 'def.gen', gloss: 'Syria' },
          ],
        },
        {
          id: 'qs-v1-c16-008',
          ar: 'كَمَا بَنَى أَبُوهُ وَأَخُوهُ بَيْتًا لِلَّهِ فِي مَكَّةَ.',
          en: 'just as his father and his brother had built a house for Allah in Makkah.',
          tokens: [
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'بَنَى', lemma: 'بَنَى', pos: 'verb', features: 'perf.3ms', root: 'ب ن ي', gloss: 'to build; built' },
            { surface: 'أَبُوهُ', lemma: 'أَب', pos: 'noun', features: 'nom+3ms', root: 'أ ب و', gloss: 'his father' },
            { surface: 'وَأَخُوهُ', lemma: 'أَخ', pos: 'noun', features: 'conj+nom+3ms', root: 'أ خ و', gloss: 'and his brother' },
            { surface: 'بَيْتًا', lemma: 'بَيْت', pos: 'noun', features: 'indef.acc', root: 'ب ي ت', gloss: 'a house' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'for Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مَكَّةَ', lemma: 'مَكَّة', pos: 'proper', features: 'gen', root: 'م ك ك', gloss: 'Makkah' },
          ],
        },
        {
          id: 'qs-v1-c16-009',
          ar: 'وَهَذَا الْمَسْجِدُ الَّذِي بَنَاهُ إِسْحَاقُ فِي الشَّامِ',
          en: 'And this mosque which Isḥāq built in Syria',
          tokens: [
            { surface: 'وَهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'conj+dem.m', gloss: 'and this' },
            { surface: 'الْمَسْجِدُ', lemma: 'مَسْجِد', pos: 'noun', features: 'def.nom', root: 'س ج د', gloss: 'the mosque' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'which' },
            { surface: 'بَنَاهُ', lemma: 'بَنَى', pos: 'verb', features: 'perf.3ms+3ms', root: 'ب ن ي', gloss: 'to build; built it' },
            { surface: 'إِسْحَاقُ', lemma: 'إِسْحَاق', pos: 'proper', features: 'nom', gloss: 'Isḥāq' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الشَّامِ', lemma: 'شَام', pos: 'proper', features: 'def.gen', gloss: 'Syria' },
          ],
        },
        {
          id: 'qs-v1-c16-010',
          ar: 'هُوَ بَيْتُ الْمَقْدِسِ.',
          en: 'is Bayt al-Maqdis.',
          tokens: [
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'it, he' },
            { surface: 'بَيْتُ', lemma: 'بَيْت', pos: 'noun', features: 'nom.constr', root: 'ب ي ت', gloss: 'house (of)' },
            { surface: 'الْمَقْدِسِ', lemma: 'مَقْدِس', pos: 'noun', features: 'def.gen', root: 'ق د س', gloss: 'the sanctuary (Jerusalem)' },
          ],
        },
        {
          id: 'qs-v1-c16-011',
          ar: 'وَهُوَ الْمَسْجِدُ الْأَقْصَى',
          en: 'And it is al-Masjid al-Aqṣā',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and it' },
            { surface: 'الْمَسْجِدُ', lemma: 'مَسْجِد', pos: 'noun', features: 'def.nom', root: 'س ج د', gloss: 'the mosque' },
            { surface: 'الْأَقْصَى', lemma: 'أَقْصَى', pos: 'adj', features: 'def.nom', root: 'ق ص و', gloss: 'the farthest' },
          ],
        },
        {
          id: 'qs-v1-c16-012',
          ar: 'الَّذِي بَارَكَ اللَّهُ حَوْلَهُ',
          en: 'which Allah blessed around it,',
          tokens: [
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'which' },
            { surface: 'بَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'perf.3ms', root: 'ب ر ك', gloss: 'to bless; blessed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'حَوْلَهُ', lemma: 'حَوْلَ', pos: 'prep', features: 'prep+3ms', gloss: 'around it' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيْنَ بَنَى إِسْحَاقُ بَيْتًا لِلَّهِ؟',
          options: ['فِي الشَّامِ', 'فِي مَكَّةَ', 'فِي مِصْرَ'],
          answer: 0,
          qEn: 'Where did Isḥāq build a house for Allah?',
          optionsEn: ['In Syria', 'In Makkah', 'In Egypt'],
        },
      ],
    },
    {
      en: 'and Allah blessed the children of Isḥāq just as He blessed the children of Ismāʿīl, and among them were prophets and kings. And Isḥāq had a son named Yaʿqūb, and he was a prophet. And Yaʿqūb had twelve sons, among them Yūsuf ibn Yaʿqūb. And Yūsuf has an amazing story in the Qur\'an. And here is this story!',
      sentences: [
        {
          id: 'qs-v1-c16-013',
          ar: 'وَبَارَكَ اللَّهُ فِي أَوْلَادِ إِسْحَاقَ',
          en: 'and Allah blessed the children of Isḥāq',
          tokens: [
            { surface: 'وَبَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ب ر ك', gloss: 'to bless; and blessed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, regarding' },
            { surface: 'أَوْلَادِ', lemma: 'وَلَد', pos: 'noun', features: 'pl.gen.constr', root: 'و ل د', gloss: 'children (of)' },
            { surface: 'إِسْحَاقَ', lemma: 'إِسْحَاق', pos: 'proper', features: 'gen', gloss: 'Isḥāq' },
          ],
        },
        {
          id: 'qs-v1-c16-014',
          ar: 'كَمَا بَارَكَ فِي أَوْلَادِ إِسْمَاعِيلَ،',
          en: 'just as He blessed the children of Ismāʿīl,',
          tokens: [
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'بَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'perf.3ms', root: 'ب ر ك', gloss: 'to bless; He blessed' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, regarding' },
            { surface: 'أَوْلَادِ', lemma: 'وَلَد', pos: 'noun', features: 'pl.gen.constr', root: 'و ل د', gloss: 'children (of)' },
            { surface: 'إِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'gen', gloss: 'Ismāʿīl' },
          ],
        },
        {
          id: 'qs-v1-c16-015',
          ar: 'وَكَانَ فِيهِمْ أَنْبِيَاءُ وَمُلُوكٌ.',
          en: 'and among them were prophets and kings.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'أَنْبِيَاءُ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.indef.nom', root: 'ن ب أ', gloss: 'prophets' },
            { surface: 'وَمُلُوكٌ', lemma: 'مَلِك', pos: 'noun', features: 'conj+pl.indef.nom', root: 'م ل ك', gloss: 'and kings' },
          ],
        },
        {
          id: 'qs-v1-c16-016',
          ar: 'وَكَانَ لِإِسْحَاقَ وَلَدٌ اسْمُهُ يَعْقُوبُ',
          en: 'And Isḥāq had a son named Yaʿqūb,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; had' },
            { surface: 'لِإِسْحَاقَ', lemma: 'إِسْحَاق', pos: 'proper', features: 'prep+gen', gloss: 'to Isḥāq' },
            { surface: 'وَلَدٌ', lemma: 'وَلَد', pos: 'noun', features: 'indef.nom', root: 'و ل د', gloss: 'a son' },
            { surface: 'اسْمُهُ', lemma: 'اِسْم', pos: 'noun', features: 'nom+3ms', root: 'س م و', gloss: 'his name' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
          ],
        },
        {
          id: 'qs-v1-c16-017',
          ar: 'وَكَانَ نَبِيًّا.',
          en: 'and he was a prophet.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'نَبِيًّا', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.acc', root: 'ن ب أ', gloss: 'a prophet' },
          ],
        },
        {
          id: 'qs-v1-c16-018',
          ar: 'وَكَانَ يَعْقُوبُ لَهُ اثْنَا عَشَرَ وَلَدًا،',
          en: 'And Yaʿqūb had twelve sons,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; had' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him, he had' },
            { surface: 'اثْنَا', lemma: 'اِثْنَانِ', pos: 'num', features: 'num.constr', root: 'ث ن ي', gloss: 'two' },
            { surface: 'عَشَرَ', lemma: 'عَشَرَ', pos: 'num', features: 'num', gloss: 'ten (forms "twelve" with اثنا)' },
            { surface: 'وَلَدًا', lemma: 'وَلَد', pos: 'noun', features: 'indef.acc', root: 'و ل د', gloss: 'sons' },
          ],
        },
        {
          id: 'qs-v1-c16-019',
          ar: 'مِنْهُمْ يُوسُفُ بْنُ يَعْقُوبَ.',
          en: 'among them Yūsuf ibn Yaʿqūb.',
          tokens: [
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'بْنُ', lemma: 'اِبْن', pos: 'noun', features: 'nom.constr', root: 'ب ن ي', gloss: 'son (of)' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'gen', gloss: 'Yaʿqūb' },
          ],
        },
        {
          id: 'qs-v1-c16-020',
          ar: 'وَيُوسُفُ لَهُ قِصَّةٌ عَجِيبَةٌ فِي الْقُرْآنِ.',
          en: "And Yūsuf has an amazing story in the Qur'an.",
          tokens: [
            { surface: 'وَيُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'conj+nom', gloss: 'and Yūsuf' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him, he has' },
            { surface: 'قِصَّةٌ', lemma: 'قِصَّة', pos: 'noun', features: 'indef.nom', root: 'ق ص ص', gloss: 'a story' },
            { surface: 'عَجِيبَةٌ', lemma: 'عَجِيب', pos: 'adj', features: 'indef.nom.f', root: 'ع ج ب', gloss: 'amazing, strange' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْقُرْآنِ', lemma: 'قُرْآن', pos: 'proper', features: 'def.gen', root: 'ق ر أ', gloss: "the Qur'an" },
          ],
        },
        {
          id: 'qs-v1-c16-021',
          ar: 'وَإِلَيْكَ هَذِهِ الْقِصَّةُ!',
          en: 'And here is this story!',
          tokens: [
            { surface: 'وَإِلَيْكَ', lemma: 'إِلَى', pos: 'prep', features: 'conj+prep+2ms', gloss: 'and to you; and here is' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْقِصَّةُ', lemma: 'قِصَّة', pos: 'noun', features: 'def.nom', root: 'ق ص ص', gloss: 'the story' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَمْ وَلَدًا كَانَ لِيَعْقُوبَ؟',
          options: ['اثْنَا عَشَرَ وَلَدًا', 'عَشَرَةَ أَوْلَادٍ', 'سَبْعَةَ أَوْلَادٍ'],
          answer: 0,
          qEn: 'How many sons did Yaʿqūb have?',
          optionsEn: ['Twelve sons', 'Ten sons', 'Seven sons'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَهَذَا الْمَسْجِدُ الَّذِي',
        post: 'إِسْحَاقُ فِي الشَّامِ هُوَ بَيْتُ الْمَقْدِسِ.',
        en: 'And this mosque which Isḥāq built in Syria is Bayt al-Maqdis.',
        options: ['بَنَاهُ', 'بَنَى', 'بَنَاهَا', 'بَنَيْتُهُ'],
        answer: 0,
        rationales: [
          "'Built it (m.)' -- the object pronoun refers back to الْمَسْجِدُ, masculine.",
          'No object pronoun -- leaves "which built Isḥāq" without linking back to the mosque.',
          "'Built it (f.)' -- wrong gender; الْمَسْجِدُ is masculine.",
          "'I built it' -- wrong person; the builder here is إِسْحَاقُ, not the speaker.",
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ يَعْقُوبُ لَهُ',
        post: 'وَلَدًا، مِنْهُمْ يُوسُفُ بْنُ يَعْقُوبَ.',
        en: 'And Yaʿqūb had twelve sons, among them Yūsuf ibn Yaʿqūb.',
        options: ['اثْنَا عَشَرَ', 'اثْنَتَا عَشْرَةَ', 'عَشَرَةُ', 'اثْنَانِ'],
        answer: 0,
        rationales: [
          "'Twelve' (masculine compound) -- matches the masculine تَمْيِيز وَلَدًا.",
          "'Twelve' (feminine compound) -- wrong gender for وَلَدًا (masculine).",
          "'Ten' alone -- the text specifies twelve, not ten.",
          "'Two' alone, without عَشَرَ -- gives 'two', not 'twelve'.",
        ],
      },
      {
        type: 'cloze',
        pre: 'وَبَارَكَ اللَّهُ فِي أَوْلَادِ إِسْحَاقَ',
        post: 'بَارَكَ فِي أَوْلَادِ إِسْمَاعِيلَ.',
        en: 'and Allah blessed the children of Isḥāq just as He blessed the children of Ismāʿīl.',
        options: ['كَمَا', 'لَمَّا', 'أَيْنَ', 'مَعَ'],
        answer: 0,
        rationales: [
          "'Just as' -- draws the comparison between the two blessings.",
          "'When' -- wrong meaning; this is a comparison, not a time clause.",
          "'Where' -- wrong meaning entirely.",
          "'With' -- wrong meaning; nothing is accompanying anything here.",
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'سَكَنَ فِي الشَّامِ',
        pre: '',
        post: 'فِي الشَّامِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['سَكَنْتُ', 'سَكَنَ', 'سَكَنْتَ', 'سَكَنَّا'],
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
        base: 'سَكَنَ فِي الشَّامِ',
        pre: '',
        post: 'فِي الشَّامِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['سَكَنْتَ', 'سَكَنْتُ', 'سَكَنَ', 'سَكَنَّا'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '1st singular -- I.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'سَكَنَ فِي الشَّامِ',
        pre: '',
        post: 'فِي الشَّامِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['سَكَنَّا', 'سَكَنْتُ', 'سَكَنْتَ', 'سَكَنَ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine singular -- he, the form already given.',
        ],
      },
    ],
  },
};

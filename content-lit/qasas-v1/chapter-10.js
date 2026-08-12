// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 10 -- أَمَامَ الْمَلِكِ.
// Printed pages 18 (bottom half, after ch9) - 19 (full page). Transcribed by
// hand from the scan (vision OCR, 300dpi render) against
// QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// This chapter dramatizes the famous debate with the tyrant king (Namrūd,
// unnamed in this text) at Qur'an 2:258. Three bracketed groups are direct
// quotation and are split into fragments of at most 2 tokens each (same
// workaround as ch4-9), so none is build-eligible:
//   -- qs-v1-c10-013/014: ﴿الَّذِي يُحْيِ وَيُمِيتُ﴾
//   -- qs-v1-c10-016/017: ﴿أَنَا أُحْيِي وَأُمِيتُ﴾
//   -- qs-v1-c10-027 through -031: ﴿فَإِنَّ اللَّهَ يَأْتِي بِالشَّمْسِ مِنَ
//      الْمَشْرِقِ فَأْتِ بِهَا مِنَ الْمَغْرِبِ﴾ (a 10-word āyah, split into five
//      2-token pieces).
// Do not merge these back or pull them into a workshop frame.
//
// "وَقَالَ: أَنَا أُحْيِي وَأُمِيتُ، قَتَلْتُ رَجُلًا وَتَرَكْتُ رَجُلًا" (qs-v1-c10-020/021)
// has NO guillemets in print -- it is the author's own narrative expansion
// showing how the king "demonstrated" his claim, not a further Qur'anic
// quotation, so it is tokenized normally and IS build-eligible.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch10',
  title: { ar: 'أَمَامَ الْمَلِكِ', en: 'Before the King' },
  newWords: [
    'مَدِينَة', 'مَلِك', 'ظَالِم', 'غَضِبَ', 'طَلَبَ', 'خَافَ', 'إِلَّا', 'قَتَلَ',
    'تَرَكَ', 'آخَر', 'بَلِيد', 'مُشْرِك', 'كُلّ', 'أَفْهَمَ', 'أَتَى', 'مَشْرِق',
    'مَغْرِب', 'سَكَتَ', 'خَجِلَ',
  ],
  lemmas: {
    'مَدِينَة': { gloss: 'city' },
    'مَلِك': { gloss: 'king' },
    'ظَالِم': { gloss: 'unjust, a wrongdoer' },
    'غَضِبَ': { gloss: 'to become angry' },
    'طَلَبَ': { gloss: 'to summon, request, seek' },
    'خَافَ': { gloss: 'to fear' },
    'إِلَّا': { gloss: 'except' },
    'قَتَلَ': { gloss: 'to kill' },
    'تَرَكَ': { gloss: 'to leave, release, abandon' },
    'آخَر': { gloss: 'another, other' },
    'بَلِيد': { gloss: 'foolish, dull-witted' },
    'مُشْرِك': { gloss: 'idolater, one who associates partners with Allah' },
    'كُلّ': { gloss: 'every, all, each' },
    'أَفْهَمَ': { gloss: 'to make understand, explain to' },
    'أَتَى': { gloss: 'to come, bring' },
    'مَشْرِق': { gloss: 'east, place of sunrise' },
    'مَغْرِب': { gloss: 'west, place of sunset' },
    'سَكَتَ': { gloss: 'to fall silent' },
    'خَجِلَ': { gloss: 'to be ashamed, embarrassed' },
  },
  paragraphs: [
    {
      en: 'There was in the city a very great king, and very unjust. And the people used to prostrate to the king. And the king heard that Ibrāhīm prostrates to Allah and does not prostrate to anyone, so the king became angry and summoned Ibrāhīm.',
      sentences: [
        {
          id: 'qs-v1-c10-001',
          ar: 'كَانَ فِي الْمَدِينَةِ مَلِكٌ كَبِيرٌ جِدًّا،',
          en: 'There was in the city a very great king,',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; there was' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْمَدِينَةِ', lemma: 'مَدِينَة', pos: 'noun', features: 'def.gen', root: 'م د ن', gloss: 'the city' },
            { surface: 'مَلِكٌ', lemma: 'مَلِك', pos: 'noun', features: 'indef.nom', root: 'م ل ك', gloss: 'a king' },
            { surface: 'كَبِيرٌ', lemma: 'كَبِير', pos: 'adj', features: 'indef.nom', root: 'ك ب ر', gloss: 'great, big' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, greatly' },
          ],
        },
        {
          id: 'qs-v1-c10-002',
          ar: 'وَظَالِمٌ جِدًّا.',
          en: 'and very unjust.',
          tokens: [
            { surface: 'وَظَالِمٌ', lemma: 'ظَالِم', pos: 'adj', features: 'conj+indef.nom', root: 'ظ ل م', gloss: 'unjust' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, greatly' },
          ],
        },
        {
          id: 'qs-v1-c10-003',
          ar: 'وَكَانَ النَّاسُ يَسْجُدُونَ لِلْمَلِكِ.',
          en: 'And the people used to prostrate to the king.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; used to' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'يَسْجُدُونَ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3mp', root: 'س ج د', gloss: 'to prostrate; prostrate' },
            { surface: 'لِلْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'prep+def.gen', root: 'م ل ك', gloss: 'to the king' },
          ],
        },
        {
          id: 'qs-v1-c10-004',
          ar: 'وَسَمِعَ الْمَلِكُ أَنَّ إِبْرَاهِيمَ يَسْجُدُ لِلَّهِ',
          en: 'And the king heard that Ibrāhīm prostrates to Allah',
          tokens: [
            { surface: 'وَسَمِعَ', lemma: 'سَمِعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س م ع', gloss: 'to hear; heard' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the king' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'acc', gloss: 'Ibrāhīm' },
            { surface: 'يَسْجُدُ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3ms', root: 'س ج د', gloss: 'to prostrate; prostrates' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'to Allah' },
          ],
        },
        {
          id: 'qs-v1-c10-005',
          ar: 'وَلَا يَسْجُدُ لِأَحَدٍ',
          en: 'and does not prostrate to anyone,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَسْجُدُ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3ms', root: 'س ج د', gloss: 'to prostrate; prostrates' },
            { surface: 'لِأَحَدٍ', lemma: 'أَحَد', pos: 'noun', features: 'prep+indef.gen', root: 'أ ح د', gloss: 'to anyone' },
          ],
        },
        {
          id: 'qs-v1-c10-006',
          ar: 'فَغَضِبَ الْمَلِكُ وَطَلَبَ إِبْرَاهِيمَ.',
          en: 'so the king became angry and summoned Ibrāhīm.',
          tokens: [
            { surface: 'فَغَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'غ ض ب', gloss: 'to become angry; became angry' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the king' },
            { surface: 'وَطَلَبَ', lemma: 'طَلَبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ط ل ب', gloss: 'to summon; and summoned' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'acc', gloss: 'Ibrāhīm' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا غَضِبَ الْمَلِكُ مِنْ إِبْرَاهِيمَ؟',
          options: ['لِأَنَّهُ يَسْجُدُ لِلَّهِ وَلَا يَسْجُدُ لِلْمَلِكِ', 'لِأَنَّهُ كَسَرَ بَيْتَهُ', 'لِأَنَّهُ سَافَرَ بِلَا إِذْنِهِ'],
          answer: 0,
          qEn: 'Why was the king angry with Ibrāhīm?',
          optionsEn: ['Because he prostrates to Allah and not to the king', 'Because he broke his house', 'Because he traveled without his permission'],
        },
      ],
    },
    {
      en: 'Ibrāhīm came, and Ibrāhīm feared no one, except Allah. The king said: \'Who is your Lord, O Ibrāhīm?\' Ibrāhīm said: \'My Lord is Allah!\' The king said: \'Who is Allah, O Ibrāhīm?\' Ibrāhīm said: \'He who gives life and causes death.\' (Qur\'an 2:258)',
      sentences: [
        {
          id: 'qs-v1-c10-007',
          ar: 'وَجَاءَ إِبْرَاهِيمُ،',
          en: 'Ibrāhīm came,',
          tokens: [
            { surface: 'وَجَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج ي أ', gloss: 'to come; came' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c10-008',
          ar: 'وَكَانَ إِبْرَاهِيمُ لَا يَخَافُ أَحَدًا، إِلَّا اللَّهَ.',
          en: 'and Ibrāhīm feared no one, except Allah.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3ms', root: 'خ و ف', gloss: 'to fear; fears' },
            { surface: 'أَحَدًا', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', root: 'أ ح د', gloss: 'anyone' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v1-c10-009',
          ar: 'قَالَ الْمَلِكُ: مَنْ رَبُّكَ يَا إِبْرَاهِيمُ؟',
          en: "The king said: 'Who is your Lord, O Ibrāhīm?'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the king' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'رَبُّكَ', lemma: 'رَبّ', pos: 'noun', features: 'nom+2ms', root: 'ر ب ب', gloss: 'your Lord' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c10-010',
          ar: 'قَالَ إِبْرَاهِيمُ: رَبِّيَ اللَّهُ!',
          en: "Ibrāhīm said: 'My Lord is Allah!'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'رَبِّيَ', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', root: 'ر ب ب', gloss: 'my Lord' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v1-c10-011',
          ar: 'قَالَ الْمَلِكُ: مَنِ اللَّهُ يَا إِبْرَاهِيمُ؟',
          en: "The king said: 'Who is Allah, O Ibrāhīm?'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the king' },
            { surface: 'مَنِ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c10-012',
          ar: 'قَالَ إِبْرَاهِيمُ:',
          en: 'Ibrāhīm said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c10-013',
          ar: '﴿الَّذِي يُحْيِ',
          en: "'He who gives life",
          tokens: [
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'who, that (m.)' },
            { surface: 'يُحْيِ', lemma: 'أَحْيَا', pos: 'verb', features: 'impf.3ms', root: 'ح ي ي', gloss: 'to give life; gives life' },
          ],
        },
        {
          id: 'qs-v1-c10-014',
          ar: 'وَيُمِيتُ﴾.',
          en: "and causes death.' (Qur'an 2:258)",
          tokens: [
            { surface: 'وَيُمِيتُ', lemma: 'أَمَاتَ', pos: 'verb', features: 'conj+impf.3ms', root: 'م و ت', gloss: 'to cause death; and causes death' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'The king said: \'I give life and cause death.\' (Qur\'an 2:258) And the king summoned a man and killed him. And he summoned another man and released him. And he said: \'I give life and cause death;',
      sentences: [
        {
          id: 'qs-v1-c10-015',
          ar: 'قَالَ الْمَلِكُ:',
          en: 'The king said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the king' },
          ],
        },
        {
          id: 'qs-v1-c10-016',
          ar: '﴿أَنَا أُحْيِي',
          en: "'I give life",
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'أُحْيِي', lemma: 'أَحْيَا', pos: 'verb', features: 'impf.1s', root: 'ح ي ي', gloss: 'to give life; I give life' },
          ],
        },
        {
          id: 'qs-v1-c10-017',
          ar: 'وَأُمِيتُ﴾.',
          en: "and cause death.' (Qur'an 2:258)",
          tokens: [
            { surface: 'وَأُمِيتُ', lemma: 'أَمَاتَ', pos: 'verb', features: 'conj+impf.1s', root: 'م و ت', gloss: 'to cause death; and I cause death' },
          ],
        },
        {
          id: 'qs-v1-c10-018',
          ar: 'وَدَعَا الْمَلِكُ رَجُلًا وَقَتَلَهُ.',
          en: 'And the king summoned a man and killed him.',
          tokens: [
            { surface: 'وَدَعَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+perf.3ms', root: 'د ع و', gloss: 'to summon; and summoned' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the king' },
            { surface: 'رَجُلًا', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', root: 'ر ج ل', gloss: 'a man' },
            { surface: 'وَقَتَلَهُ', lemma: 'قَتَلَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ق ت ل', gloss: 'to kill; and killed him' },
          ],
        },
        {
          id: 'qs-v1-c10-019',
          ar: 'وَدَعَا رَجُلًا آخَرَ وَتَرَكَهُ.',
          en: 'And he summoned another man and released him.',
          tokens: [
            { surface: 'وَدَعَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+perf.3ms', root: 'د ع و', gloss: 'to summon; and summoned' },
            { surface: 'رَجُلًا', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', root: 'ر ج ل', gloss: 'a man' },
            { surface: 'آخَرَ', lemma: 'آخَر', pos: 'adj', features: 'indef.acc', root: 'أ خ ر', gloss: 'another' },
            { surface: 'وَتَرَكَهُ', lemma: 'تَرَكَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ت ر ك', gloss: 'to leave, release; and released him' },
          ],
        },
        {
          id: 'qs-v1-c10-020',
          ar: 'وَقَالَ: أَنَا أُحْيِي وَأُمِيتُ،',
          en: "And he said: 'I give life and cause death;",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'أُحْيِي', lemma: 'أَحْيَا', pos: 'verb', features: 'impf.1s', root: 'ح ي ي', gloss: 'to give life; I give life' },
            { surface: 'وَأُمِيتُ', lemma: 'أَمَاتَ', pos: 'verb', features: 'conj+impf.1s', root: 'م و ت', gloss: 'to cause death; and I cause death' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ حَاوَلَ الْمَلِكُ أَنْ يُثْبِتَ أَنَّهُ يُحْيِي وَيُمِيتُ؟',
          options: ['قَتَلَ رَجُلًا وَتَرَكَ رَجُلًا آخَرَ', 'بَنَى مَدِينَةً', 'سَافَرَ إِلَى الْمَشْرِقِ'],
          answer: 0,
          qEn: 'How did the king try to prove he gives life and causes death?',
          optionsEn: ['He killed one man and released another', 'He built a city', 'He traveled to the east'],
        },
      ],
    },
    {
      en: 'I killed one man and released another.\' The king was very foolish, and so is every idolater. And Ibrāhīm wanted to make the king understand, and make his people understand: so Ibrāhīm said to the king: \'Indeed Allah brings the sun from the east, so bring it from the west.\' (Qur\'an 2:258) The king was bewildered and fell silent. And the king was ashamed, and found no answer.',
      sentences: [
        {
          id: 'qs-v1-c10-021',
          ar: 'قَتَلْتُ رَجُلًا وَتَرَكْتُ رَجُلًا.',
          en: "I killed one man and released another.'",
          tokens: [
            { surface: 'قَتَلْتُ', lemma: 'قَتَلَ', pos: 'verb', features: 'perf.1s', root: 'ق ت ل', gloss: 'to kill; I killed' },
            { surface: 'رَجُلًا', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', root: 'ر ج ل', gloss: 'a man' },
            { surface: 'وَتَرَكْتُ', lemma: 'تَرَكَ', pos: 'verb', features: 'conj+perf.1s', root: 'ت ر ك', gloss: 'to leave, release; and I released' },
            { surface: 'رَجُلًا', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', root: 'ر ج ل', gloss: 'a man' },
          ],
        },
        {
          id: 'qs-v1-c10-022',
          ar: 'وَكَانَ الْمَلِكُ بَلِيدًا جِدًّا،',
          en: 'The king was very foolish,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the king' },
            { surface: 'بَلِيدًا', lemma: 'بَلِيد', pos: 'adj', features: 'indef.acc', root: 'ب ل د', gloss: 'foolish, dull-witted' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, greatly' },
          ],
        },
        {
          id: 'qs-v1-c10-023',
          ar: 'وَكَذَلِكَ كُلُّ مُشْرِكٍ.',
          en: 'and so is every idolater.',
          tokens: [
            { surface: 'وَكَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and likewise' },
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom.constr', root: 'ك ل ل', gloss: 'every' },
            { surface: 'مُشْرِكٍ', lemma: 'مُشْرِك', pos: 'noun', features: 'indef.gen', root: 'ش ر ك', gloss: 'idolater' },
          ],
        },
        {
          id: 'qs-v1-c10-024',
          ar: 'وَأَرَادَ إِبْرَاهِيمُ أَنْ يُفْهِمَ الْمَلِكَ،',
          en: 'And Ibrāhīm wanted to make the king understand,',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want, intend' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُفْهِمَ', lemma: 'أَفْهَمَ', pos: 'verb', features: 'impf.3ms', root: 'ف ه م', gloss: 'to make understand' },
            { surface: 'الْمَلِكَ', lemma: 'مَلِك', pos: 'noun', features: 'def.acc', root: 'م ل ك', gloss: 'the king' },
          ],
        },
        {
          id: 'qs-v1-c10-025',
          ar: 'وَيُفْهِمَ قَوْمَهُ:',
          en: 'and make his people understand:',
          tokens: [
            { surface: 'وَيُفْهِمَ', lemma: 'أَفْهَمَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ف ه م', gloss: 'to make understand' },
            { surface: 'قَوْمَهُ', lemma: 'قَوْم', pos: 'noun', features: 'acc+3ms', root: 'ق و م', gloss: 'his people' },
          ],
        },
        {
          id: 'qs-v1-c10-026',
          ar: 'فَقَالَ إِبْرَاهِيمُ لِلْمَلِكِ:',
          en: 'so Ibrāhīm said to the king:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'so said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'لِلْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'prep+def.gen', root: 'م ل ك', gloss: 'to the king' },
          ],
        },
        {
          id: 'qs-v1-c10-027',
          ar: '﴿فَإِنَّ اللَّهَ',
          en: "'Indeed Allah",
          tokens: [
            { surface: 'فَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v1-c10-028',
          ar: 'يَأْتِي بِالشَّمْسِ',
          en: 'brings the sun',
          tokens: [
            { surface: 'يَأْتِي', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms', root: 'أ ت ي', gloss: 'to come, bring; brings' },
            { surface: 'بِالشَّمْسِ', lemma: 'شَمْس', pos: 'noun', features: 'prep+def.gen', root: 'ش م س', gloss: 'with the sun' },
          ],
        },
        {
          id: 'qs-v1-c10-029',
          ar: 'مِنَ الْمَشْرِقِ',
          en: 'from the east,',
          tokens: [
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْمَشْرِقِ', lemma: 'مَشْرِق', pos: 'noun', features: 'def.gen', root: 'ش ر ق', gloss: 'the east' },
          ],
        },
        {
          id: 'qs-v1-c10-030',
          ar: 'فَأْتِ بِهَا',
          en: 'so bring it',
          tokens: [
            { surface: 'فَأْتِ', lemma: 'أَتَى', pos: 'verb', features: 'conj+imp.2ms', root: 'أ ت ي', gloss: 'to come, bring; so bring' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'with it' },
          ],
        },
        {
          id: 'qs-v1-c10-031',
          ar: 'مِنَ الْمَغْرِبِ﴾.',
          en: "from the west.' (Qur'an 2:258)",
          tokens: [
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْمَغْرِبِ', lemma: 'مَغْرِب', pos: 'noun', features: 'def.gen', root: 'غ ر ب', gloss: 'the west' },
          ],
        },
        {
          id: 'qs-v1-c10-032',
          ar: 'فَتَحَيَّرَ الْمَلِكُ وَسَكَتَ.',
          en: 'The king was bewildered and fell silent.',
          tokens: [
            { surface: 'فَتَحَيَّرَ', lemma: 'تَحَيَّرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ح ي ر', gloss: 'to be bewildered; and was bewildered' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the king' },
            { surface: 'وَسَكَتَ', lemma: 'سَكَتَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ك ت', gloss: 'to fall silent; and fell silent' },
          ],
        },
        {
          id: 'qs-v1-c10-033',
          ar: 'وَخَجِلَ الْمَلِكُ،',
          en: 'And the king was ashamed,',
          tokens: [
            { surface: 'وَخَجِلَ', lemma: 'خَجِلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ج ل', gloss: 'to be ashamed; and was ashamed' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the king' },
          ],
        },
        {
          id: 'qs-v1-c10-034',
          ar: 'وَمَا وَجَدَ جَوَابًا.',
          en: 'and found no answer.',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'وَجَدَ', lemma: 'وَجَدَ', pos: 'verb', features: 'perf.3ms', root: 'و ج د', gloss: 'to find; found' },
            { surface: 'جَوَابًا', lemma: 'جَوَاب', pos: 'noun', features: 'indef.acc', root: 'ج و ب', gloss: 'an answer' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا أَفْحَمَ إِبْرَاهِيمُ الْمَلِكَ؟',
          options: ['بِأَنْ يَأْتِيَ بِالشَّمْسِ مِنَ الْمَغْرِبِ', 'بِسُؤَالٍ عَنِ اسْمِهِ', 'بِسُؤَالٍ عَنْ عُمْرِهِ'],
          answer: 0,
          qEn: 'With what did Ibrāhīm silence the king?',
          optionsEn: ['By asking him to bring the sun from the west', 'By asking his name', 'By asking his age'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ إِبْرَاهِيمُ لَا يَخَافُ أَحَدًا، إِلَّا',
        post: '.',
        en: 'And Ibrāhīm feared no one, except Allah.',
        options: ['اللَّهَ', 'اللَّهُ', 'اللَّهِ', 'بِاللَّهِ'],
        answer: 0,
        rationales: [
          'Accusative -- the excepted noun after إِلَّا in a negated sentence takes the same case as the excluded item (أَحَدًا, accusative).',
          'Nominative -- wrong case here.',
          'Genitive -- nothing governs the genitive here.',
          'With a preposition -- unnecessary; no preposition governs this word.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ الْمَلِكُ: مَنْ',
        post: 'يَا إِبْرَاهِيمُ؟',
        en: "The king said: 'Who is your Lord, O Ibrāhīm?'",
        options: ['رَبُّكَ', 'رَبُّهُ', 'رَبُّهَا', 'رَبُّكُمْ'],
        answer: 0,
        rationales: [
          'Suffix كَ = "your (m. sing.)" -- the king is addressing Ibrāhīm directly.',
          'Suffix هُ = "his" -- wrong person; this is direct address.',
          'Suffix هَا = "her" -- wrong person and gender.',
          'Suffix كُمْ = "your (pl.)" -- wrong number; only Ibrāhīm is addressed.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَإِنَّ اللَّهَ يَأْتِي بِالشَّمْسِ مِنَ الْمَشْرِقِ فَ',
        post: 'بِهَا مِنَ الْمَغْرِبِ.',
        en: "'Indeed Allah brings the sun from the east, so bring it from the west.'",
        options: ['أْتِ', 'يَأْتِي', 'أَتَى', 'تَأْتِي'],
        answer: 0,
        rationales: [
          'Imperative (2 m. sing.) -- Ibrāhīm is commanding the king to bring the sun from the west.',
          'Indicative imperfect -- wrong mood; a command is needed here.',
          'Perfect -- wrong tense/mood; this is a command, not a past report.',
          '2nd feminine singular indicative -- wrong mood, and the king is masculine.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَنَا أُحْيِي وَأُمِيتُ',
        pre: '',
        post: 'وَأُمِيتُ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تُحْيِي', 'أُحْيِي', 'يُحْيِي', 'نُحْيِي'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '1st singular -- I, the form already given.',
          '3rd masculine singular -- he.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'أَنَا أُحْيِي وَأُمِيتُ',
        pre: '',
        post: 'وَأُمِيتُ',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يُحْيِي', 'أُحْيِي', 'تُحْيِي', 'نُحْيِي'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '1st singular -- I, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'أَنَا أُحْيِي وَأُمِيتُ',
        pre: '',
        post: 'وَأُمِيتُ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نُحْيِي', 'أُحْيِي', 'تُحْيِي', 'يُحْيِي'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '1st singular -- I, the form already given.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine singular -- he.',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 7 -- مَنْ رَبِّي؟
// Printed pages 15-16. Transcribed by hand from the scan (vision OCR, 300dpi
// render) against QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// This chapter dramatizes Ibrāhīm's search for his Lord (star, then moon,
// then sun, each rejected as it sets) -- the narrative underlying Qur'an
// 6:76-79. Only one phrase is an exact Qur'anic quotation, marked with
// guillemets in the print: «هَذَا رَبِّي هَذَا أَكْبَرُ» (6:78, on the sun).
// That phrase is split into two fragments of at most 2 tokens each
// (sentences qs-v1-c07-011/012), per the established workaround (see ch4-6)
// so neither is build-eligible. The many OTHER "هَذَا رَبِّي" / "لَا! هَذَا
// لَيْسَ بِرَبِّي" lines are the author's own narrative prose (no guillemets
// in print), not direct Qur'anic text, so they are transcribed and tokenized
// normally with no fragmentation.
//
// Heavy new-vocabulary chapter: night/star/moon/sun/dawn/cloud plus the
// living-everlasting-powerful triad (حَيّ، بَاقٍ، قَوِيّ) that recurs through
// the rest of the Ibrāhīm story. رَبّ itself is introduced here for the
// first time in this course (not present in the qiraah-v1 pilot lemma set).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch7',
  title: { ar: 'مَنْ رَبِّي؟', en: 'Who Is My Lord?' },
  newWords: [
    'ذَات', 'لَيْلَة', 'كَوْكَب', 'غَابَ', 'قَمَر', 'طَلَعَ', 'شَمْس', 'لَيْل',
    'رَبّ', 'حَيّ', 'مَاتَ', 'بَقِيَ', 'قَوِيّ', 'غَلَبَ', 'ضَعِيف', 'صُبْح', 'غَيْم',
  ],
  lemmas: {
    'ذَات': { gloss: "(idiom) ذَاتَ لَيْلَةٍ = 'one night'; lit. 'possessor of a night'" },
    'لَيْلَة': { gloss: 'a night (one instance)' },
    'كَوْكَب': { gloss: 'star' },
    'غَابَ': { gloss: 'to set, disappear' },
    'قَمَر': { gloss: 'moon' },
    'طَلَعَ': { gloss: 'to rise (sun, moon, stars)' },
    'شَمْس': { gloss: 'sun' },
    'لَيْل': { gloss: 'night(time), the night' },
    'رَبّ': { gloss: 'Lord' },
    'حَيّ': { gloss: 'living, alive' },
    'مَاتَ': { gloss: 'to die' },
    'بَقِيَ': { gloss: 'to remain, last; (as بَاقٍ) everlasting' },
    'قَوِيّ': { gloss: 'powerful, strong' },
    'غَلَبَ': { gloss: 'to overcome, defeat' },
    'ضَعِيف': { gloss: 'weak' },
    'صُبْح': { gloss: 'morning, dawn' },
    'غَيْم': { gloss: 'cloud(s)' },
  },
  paragraphs: [
    {
      en: 'One night, Ibrāhīm saw a star, and said: \'This is my Lord.\' But when the star set, Ibrāhīm said: \'No! This is not my Lord!\' And Ibrāhīm saw the moon and said: \'This is my Lord.\'',
      sentences: [
        {
          id: 'qs-v1-c07-001',
          ar: 'وَذَاتَ لَيْلَةٍ رَأَى إِبْرَاهِيمُ كَوْكَبًا،',
          en: 'One night, Ibrāhīm saw a star,',
          tokens: [
            { surface: 'وَذَاتَ', lemma: 'ذَات', pos: 'noun', features: 'conj+acc.constr', gloss: "one (idiom, mudāf of ذَاتَ لَيْلَةٍ)" },
            { surface: 'لَيْلَةٍ', lemma: 'لَيْلَة', pos: 'noun', features: 'indef.gen', root: 'ل ي ل', gloss: 'a night' },
            { surface: 'رَأَى', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms', root: 'ر أ ي', gloss: 'to see; saw' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'كَوْكَبًا', lemma: 'كَوْكَب', pos: 'noun', features: 'indef.acc', root: 'ك و ك ب', gloss: 'star' },
          ],
        },
        {
          id: 'qs-v1-c07-002',
          ar: 'فَقَالَ: هَذَا رَبِّي.',
          en: "and said: 'This is my Lord.'",
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', root: 'ر ب ب', gloss: 'my Lord' },
          ],
        },
        {
          id: 'qs-v1-c07-003',
          ar: 'وَلَمَّا غَابَ الْكَوْكَبُ،',
          en: 'But when the star set,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'غَابَ', lemma: 'غَابَ', pos: 'verb', features: 'perf.3ms', root: 'غ ي ب', gloss: 'to set, disappear' },
            { surface: 'الْكَوْكَبُ', lemma: 'كَوْكَب', pos: 'noun', features: 'def.nom', root: 'ك و ك ب', gloss: 'the star' },
          ],
        },
        {
          id: 'qs-v1-c07-004',
          ar: 'قَالَ إِبْرَاهِيمُ: لَا! هَذَا لَيْسَ بِرَبِّي!',
          en: "Ibrāhīm said: 'No! This is not my Lord!'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'بِرَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'prep+gen+1s', root: 'ر ب ب', gloss: 'my Lord' },
          ],
        },
        {
          id: 'qs-v1-c07-005',
          ar: 'وَرَأَى إِبْرَاهِيمُ الْقَمَرَ',
          en: 'And Ibrāhīm saw the moon',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ر أ ي', gloss: 'and saw' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'الْقَمَرَ', lemma: 'قَمَر', pos: 'noun', features: 'def.acc', root: 'ق م ر', gloss: 'the moon' },
          ],
        },
        {
          id: 'qs-v1-c07-006',
          ar: 'فَقَالَ: هَذَا رَبِّي.',
          en: "and said: 'This is my Lord.'",
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', root: 'ر ب ب', gloss: 'my Lord' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ إِبْرَاهِيمُ حِينَ رَأَى الْكَوْكَبَ أَوَّلَ مَرَّةٍ؟',
          options: ['هَذَا رَبِّي', 'هَذَا عَدُوِّي', 'هَذَا جَمِيلٌ'],
          answer: 0,
          qEn: 'What did Ibrāhīm say when he first saw the star?',
          optionsEn: ['This is my Lord', 'This is my enemy', 'This is beautiful'],
        },
      ],
    },
    {
      en: 'But when the moon set, Ibrāhīm said: \'No! This is not my Lord!\' Then the sun rose, and Ibrāhīm said: \'This is my Lord,\' \'this is greater.\' (Qur\'an 6:78)',
      sentences: [
        {
          id: 'qs-v1-c07-007',
          ar: 'وَلَمَّا غَابَ الْقَمَرُ،',
          en: 'But when the moon set,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'غَابَ', lemma: 'غَابَ', pos: 'verb', features: 'perf.3ms', root: 'غ ي ب', gloss: 'to set, disappear' },
            { surface: 'الْقَمَرُ', lemma: 'قَمَر', pos: 'noun', features: 'def.nom', root: 'ق م ر', gloss: 'the moon' },
          ],
        },
        {
          id: 'qs-v1-c07-008',
          ar: 'قَالَ إِبْرَاهِيمُ: لَا! هَذَا لَيْسَ بِرَبِّي!',
          en: "Ibrāhīm said: 'No! This is not my Lord!'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'بِرَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'prep+gen+1s', root: 'ر ب ب', gloss: 'my Lord' },
          ],
        },
        {
          id: 'qs-v1-c07-009',
          ar: 'وَطَلَعَتِ الشَّمْسُ،',
          en: 'Then the sun rose,',
          tokens: [
            { surface: 'وَطَلَعَتِ', lemma: 'طَلَعَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ط ل ع', gloss: 'to rise; rose' },
            { surface: 'الشَّمْسُ', lemma: 'شَمْس', pos: 'noun', features: 'def.nom', root: 'ش م س', gloss: 'the sun' },
          ],
        },
        {
          id: 'qs-v1-c07-010',
          ar: 'فَقَالَ إِبْرَاهِيمُ:',
          en: 'and Ibrāhīm said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c07-011',
          ar: '﴿هَذَا رَبِّي',
          en: "'This is my Lord,'",
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', root: 'ر ب ب', gloss: 'my Lord' },
          ],
        },
        {
          id: 'qs-v1-c07-012',
          ar: 'هَذَا أَكْبَرُ﴾.',
          en: "'this is greater.' (Qur'an 6:78)",
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'أَكْبَرُ', lemma: 'أَكْبَر', pos: 'adj', features: 'indef.nom', root: 'ك ب ر', gloss: 'greater, bigger' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'But when the sun set in the night, Ibrāhīm said: \'No! This is not my Lord.\' Indeed Allah is living -- He does not die. Indeed Allah is everlasting -- He does not disappear. Indeed Allah is powerful -- nothing overcomes Him. But the star is weak; the dawn overcomes it. And the moon is weak; the sun overcomes it. And the sun is weak; the night overcomes it, and the clouds overcome it. The star cannot help me, because it is weak. The moon cannot help me, because it is weak. The sun cannot help me, because it is weak. But Allah helps me, because Allah is living -- He does not die -- and everlasting -- He does not disappear -- and powerful -- nothing overcomes Him.',
      sentences: [
        {
          id: 'qs-v1-c07-013',
          ar: 'وَلَمَّا غَابَتِ الشَّمْسُ فِي اللَّيْلِ',
          en: 'But when the sun set in the night,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'غَابَتِ', lemma: 'غَابَ', pos: 'verb', features: 'perf.3fs', root: 'غ ي ب', gloss: 'to set, disappear' },
            { surface: 'الشَّمْسُ', lemma: 'شَمْس', pos: 'noun', features: 'def.nom', root: 'ش م س', gloss: 'the sun' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'اللَّيْلِ', lemma: 'لَيْل', pos: 'noun', features: 'def.gen', root: 'ل ي ل', gloss: 'the night' },
          ],
        },
        {
          id: 'qs-v1-c07-014',
          ar: 'قَالَ إِبْرَاهِيمُ: لَا! هَذَا لَيْسَ بِرَبِّي.',
          en: "Ibrāhīm said: 'No! This is not my Lord.'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'بِرَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'prep+gen+1s', root: 'ر ب ب', gloss: 'my Lord' },
          ],
        },
        {
          id: 'qs-v1-c07-015',
          ar: 'إِنَّ اللَّهَ حَيٌّ لَا يَمُوتُ.',
          en: 'Indeed Allah is living -- He does not die.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'حَيٌّ', lemma: 'حَيّ', pos: 'adj', features: 'indef.nom', root: 'ح ي ي', gloss: 'living' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَمُوتُ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.3ms', root: 'م و ت', gloss: 'to die; dies' },
          ],
        },
        {
          id: 'qs-v1-c07-016',
          ar: 'إِنَّ اللَّهَ بَاقٍ لَا يَغِيبُ.',
          en: 'Indeed Allah is everlasting -- He does not disappear.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'بَاقٍ', lemma: 'بَقِيَ', pos: 'adj', features: 'indef.nom', root: 'ب ق ي', gloss: 'everlasting, remaining (manqūṣ participle)' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَغِيبُ', lemma: 'غَابَ', pos: 'verb', features: 'impf.3ms', root: 'غ ي ب', gloss: 'to disappear; disappears' },
          ],
        },
        {
          id: 'qs-v1-c07-017',
          ar: 'إِنَّ اللَّهَ قَوِيٌّ لَا يَغْلِبُهُ شَيْءٌ.',
          en: 'Indeed Allah is powerful -- nothing overcomes Him.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'قَوِيٌّ', lemma: 'قَوِيّ', pos: 'adj', features: 'indef.nom', root: 'ق و ي', gloss: 'powerful, strong' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَغْلِبُهُ', lemma: 'غَلَبَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'غ ل ب', gloss: 'to overcome; overcomes him/it' },
            { surface: 'شَيْءٌ', lemma: 'شَيْء', pos: 'noun', features: 'indef.nom', root: 'ش ي أ', gloss: 'thing, anything' },
          ],
        },
        {
          id: 'qs-v1-c07-018',
          ar: 'وَالْكَوْكَبُ ضَعِيفٌ يَغْلِبُهُ الصُّبْحُ.',
          en: 'But the star is weak; the dawn overcomes it.',
          tokens: [
            { surface: 'وَالْكَوْكَبُ', lemma: 'كَوْكَب', pos: 'noun', features: 'conj+def.nom', root: 'ك و ك ب', gloss: 'and the star' },
            { surface: 'ضَعِيفٌ', lemma: 'ضَعِيف', pos: 'adj', features: 'indef.nom', root: 'ض ع ف', gloss: 'weak' },
            { surface: 'يَغْلِبُهُ', lemma: 'غَلَبَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'غ ل ب', gloss: 'to overcome; overcomes it' },
            { surface: 'الصُّبْحُ', lemma: 'صُبْح', pos: 'noun', features: 'def.nom', root: 'ص ب ح', gloss: 'the dawn, morning' },
          ],
        },
        {
          id: 'qs-v1-c07-019',
          ar: 'وَالْقَمَرُ ضَعِيفٌ تَغْلِبُهُ الشَّمْسُ.',
          en: 'And the moon is weak; the sun overcomes it.',
          tokens: [
            { surface: 'وَالْقَمَرُ', lemma: 'قَمَر', pos: 'noun', features: 'conj+def.nom', root: 'ق م ر', gloss: 'and the moon' },
            { surface: 'ضَعِيفٌ', lemma: 'ضَعِيف', pos: 'adj', features: 'indef.nom', root: 'ض ع ف', gloss: 'weak' },
            { surface: 'تَغْلِبُهُ', lemma: 'غَلَبَ', pos: 'verb', features: 'impf.3fs+3ms', root: 'غ ل ب', gloss: 'to overcome; overcomes it' },
            { surface: 'الشَّمْسُ', lemma: 'شَمْس', pos: 'noun', features: 'def.nom', root: 'ش م س', gloss: 'the sun' },
          ],
        },
        {
          id: 'qs-v1-c07-020',
          ar: 'وَالشَّمْسُ ضَعِيفَةٌ يَغْلِبُهَا اللَّيْلُ وَيَغْلِبُهَا الْغَيْمُ.',
          en: 'And the sun is weak; the night overcomes it, and the clouds overcome it.',
          tokens: [
            { surface: 'وَالشَّمْسُ', lemma: 'شَمْس', pos: 'noun', features: 'conj+def.nom', root: 'ش م س', gloss: 'and the sun' },
            { surface: 'ضَعِيفَةٌ', lemma: 'ضَعِيف', pos: 'adj', features: 'indef.nom.f', root: 'ض ع ف', gloss: 'weak' },
            { surface: 'يَغْلِبُهَا', lemma: 'غَلَبَ', pos: 'verb', features: 'impf.3ms+3fs', root: 'غ ل ب', gloss: 'to overcome; overcomes it' },
            { surface: 'اللَّيْلُ', lemma: 'لَيْل', pos: 'noun', features: 'def.nom', root: 'ل ي ل', gloss: 'the night' },
            { surface: 'وَيَغْلِبُهَا', lemma: 'غَلَبَ', pos: 'verb', features: 'conj+impf.3ms+3fs', root: 'غ ل ب', gloss: 'and overcomes it' },
            { surface: 'الْغَيْمُ', lemma: 'غَيْم', pos: 'noun', features: 'def.nom', root: 'غ ي م', gloss: 'the cloud(s)' },
          ],
        },
        {
          id: 'qs-v1-c07-021',
          ar: 'وَلَا يَنْصُرُنِي الْكَوْكَبُ لِأَنَّهُ ضَعِيفٌ.',
          en: 'The star cannot help me, because it is weak.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَنْصُرُنِي', lemma: 'نَصَرَ', pos: 'verb', features: 'impf.3ms+1s', root: 'ن ص ر', gloss: 'to help; helps me' },
            { surface: 'الْكَوْكَبُ', lemma: 'كَوْكَب', pos: 'noun', features: 'def.nom', root: 'ك و ك ب', gloss: 'the star' },
            { surface: 'لِأَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+3ms', gloss: 'because it' },
            { surface: 'ضَعِيفٌ', lemma: 'ضَعِيف', pos: 'adj', features: 'indef.nom', root: 'ض ع ف', gloss: 'weak' },
          ],
        },
        {
          id: 'qs-v1-c07-022',
          ar: 'وَلَا يَنْصُرُنِي الْقَمَرُ لِأَنَّهُ ضَعِيفٌ.',
          en: 'The moon cannot help me, because it is weak.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَنْصُرُنِي', lemma: 'نَصَرَ', pos: 'verb', features: 'impf.3ms+1s', root: 'ن ص ر', gloss: 'to help; helps me' },
            { surface: 'الْقَمَرُ', lemma: 'قَمَر', pos: 'noun', features: 'def.nom', root: 'ق م ر', gloss: 'the moon' },
            { surface: 'لِأَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+3ms', gloss: 'because it' },
            { surface: 'ضَعِيفٌ', lemma: 'ضَعِيف', pos: 'adj', features: 'indef.nom', root: 'ض ع ف', gloss: 'weak' },
          ],
        },
        {
          id: 'qs-v1-c07-023',
          ar: 'وَلَا تَنْصُرُنِي الشَّمْسُ لِأَنَّهَا ضَعِيفَةٌ.',
          en: 'The sun cannot help me, because it is weak.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَنْصُرُنِي', lemma: 'نَصَرَ', pos: 'verb', features: 'impf.3fs+1s', root: 'ن ص ر', gloss: 'to help; helps me' },
            { surface: 'الشَّمْسُ', lemma: 'شَمْس', pos: 'noun', features: 'def.nom', root: 'ش م س', gloss: 'the sun' },
            { surface: 'لِأَنَّهَا', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+3fs', gloss: 'because it' },
            { surface: 'ضَعِيفَةٌ', lemma: 'ضَعِيف', pos: 'adj', features: 'indef.nom.f', root: 'ض ع ف', gloss: 'weak' },
          ],
        },
        {
          id: 'qs-v1-c07-024',
          ar: 'وَيَنْصُرُنِي اللَّهُ.',
          en: 'But Allah helps me,',
          tokens: [
            { surface: 'وَيَنْصُرُنِي', lemma: 'نَصَرَ', pos: 'verb', features: 'conj+impf.3ms+1s', root: 'ن ص ر', gloss: 'and helps me' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v1-c07-025',
          ar: 'لِأَنَّ اللَّهَ حَيٌّ لَا يَمُوتُ.',
          en: 'because Allah is living -- He does not die --',
          tokens: [
            { surface: 'لِأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part', gloss: 'because' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'حَيٌّ', lemma: 'حَيّ', pos: 'adj', features: 'indef.nom', root: 'ح ي ي', gloss: 'living' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَمُوتُ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.3ms', root: 'م و ت', gloss: 'to die; dies' },
          ],
        },
        {
          id: 'qs-v1-c07-026',
          ar: 'وَبَاقٍ لَا يَغِيبُ.',
          en: 'and everlasting -- He does not disappear --',
          tokens: [
            { surface: 'وَبَاقٍ', lemma: 'بَقِيَ', pos: 'adj', features: 'conj+indef.nom', root: 'ب ق ي', gloss: 'and everlasting, remaining' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَغِيبُ', lemma: 'غَابَ', pos: 'verb', features: 'impf.3ms', root: 'غ ي ب', gloss: 'to disappear; disappears' },
          ],
        },
        {
          id: 'qs-v1-c07-027',
          ar: 'وَقَوِيٌّ لَا يَغْلِبُهُ شَيْءٌ.',
          en: 'and powerful -- nothing overcomes Him.',
          tokens: [
            { surface: 'وَقَوِيٌّ', lemma: 'قَوِيّ', pos: 'adj', features: 'conj+indef.nom', root: 'ق و ي', gloss: 'and powerful, strong' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَغْلِبُهُ', lemma: 'غَلَبَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'غ ل ب', gloss: 'to overcome; overcomes him' },
            { surface: 'شَيْءٌ', lemma: 'شَيْء', pos: 'noun', features: 'indef.nom', root: 'ش ي أ', gloss: 'thing, anything' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا رَفَضَ إِبْرَاهِيمُ الْكَوْكَبَ وَالْقَمَرَ وَالشَّمْسَ؟',
          options: ['لِأَنَّهَا تَغِيبُ وَتَضْعُفُ', 'لِأَنَّهَا بَعِيدَةٌ', 'لِأَنَّهُ لَا يَرَاهَا'],
          answer: 0,
          qEn: 'Why did Ibrāhīm reject the star, the moon, and the sun?',
          optionsEn: ['Because they set and are weak', 'Because they are far away', 'Because he could not see them'],
        },
        {
          q: 'لِمَاذَا اسْتَحَقَّ اللَّهُ وَحْدَهُ أَنْ يَكُونَ رَبًّا؟',
          options: ['لِأَنَّهُ حَيٌّ بَاقٍ قَوِيٌّ لَا يَغْلِبُهُ شَيْءٌ', 'لِأَنَّهُ أَكْبَرُ حَجْمًا', 'لِأَنَّ النَّاسَ اخْتَارُوهُ'],
          answer: 0,
          qEn: 'Why does Allah alone deserve to be Lord?',
          optionsEn: ['Because He is living, everlasting, and powerful -- nothing overcomes Him', 'Because He is the largest in size', 'Because the people chose Him'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَالشَّمْسُ',
        post: 'يَغْلِبُهَا اللَّيْلُ.',
        en: 'And the sun is weak; the night overcomes it.',
        options: ['ضَعِيفَةٌ', 'ضَعِيفٌ', 'ضَعِيفَتَانِ', 'ضُعَفَاءُ'],
        answer: 0,
        rationales: [
          'Feminine singular -- agrees with الشَّمْس, a feminine noun.',
          'Masculine singular -- wrong gender.',
          'Dual -- but only one sun is meant.',
          'Plural -- but only one sun is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَالْقَمَرُ ضَعِيفٌ',
        post: 'الشَّمْسُ.',
        en: 'And the moon is weak; the sun overcomes it.',
        options: ['تَغْلِبُهُ', 'يَغْلِبُهُ', 'تَغْلِبُهَا', 'يَغْلِبُهَا'],
        answer: 0,
        rationales: [
          '3rd feminine singular verb (agrees with الشَّمْسُ, the subject) + masculine object suffix هُ (referring back to الْقَمَر).',
          'Masculine verb -- but the subject الشَّمْسُ is feminine.',
          'Feminine object suffix هَا -- but the moon (الْقَمَر) it refers to is masculine.',
          'Wrong on both verb gender and object-suffix gender.',
        ],
      },
      {
        type: 'cloze',
        pre: '',
        post: 'اللَّهَ حَيٌّ لَا يَمُوتُ.',
        en: 'Indeed, Allah is living; He does not die.',
        options: ['إِنَّ', 'إِنْ', 'أَنَّ', 'لَعَلَّ'],
        answer: 0,
        rationales: [
          "إِنَّ = 'indeed' -- the correct sentence-opening particle that puts اللَّهَ in the accusative.",
          "إِنْ = 'if' -- a conditional particle, wrong meaning here.",
          "أَنَّ = 'that' -- introduces a subordinate clause, not a fresh sentence.",
          "لَعَلَّ = 'perhaps' -- wrong meaning here.",
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'لَا يَغْلِبُهُ شَيْءٌ',
        pre: 'لَا',
        post: 'شَيْءٌ',
        targetPerson: 'أَنَا',
        targetEn: 'me',
        options: ['يَغْلِبُنِي', 'يَغْلِبُهُ', 'يَغْلِبُكَ', 'يَغْلِبُهَا'],
        answer: 0,
        rationales: [
          'Object suffix نِي = "me" -- matches أَنَا.',
          'Object suffix هُ = "him/it" -- the form already given.',
          'Object suffix كَ = "you (m.)" -- wrong person.',
          'Object suffix هَا = "her/it" -- wrong person and gender.',
        ],
      },
      {
        type: 'shift',
        base: 'لَا يَغْلِبُهُ شَيْءٌ',
        pre: 'لَا',
        post: 'شَيْءٌ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['يَغْلِبُكَ', 'يَغْلِبُنِي', 'يَغْلِبُهُ', 'يَغْلِبُهَا'],
        answer: 0,
        rationales: [
          'Object suffix كَ = "you (m.)" -- matches أَنْتَ.',
          'Object suffix نِي = "me" -- wrong person.',
          'Object suffix هُ = "him/it" -- the form already given.',
          'Object suffix هَا = "her/it" -- wrong person and gender.',
        ],
      },
      {
        type: 'shift',
        base: 'لَا يَغْلِبُهُ شَيْءٌ',
        pre: 'لَا',
        post: 'شَيْءٌ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['يَغْلِبُهَا', 'يَغْلِبُهُ', 'يَغْلِبُنِي', 'يَغْلِبُكَ'],
        answer: 0,
        rationales: [
          'Object suffix هَا = "her/it" -- matches هِيَ.',
          'Object suffix هُ = "him/it" -- the form already given, wrong gender.',
          'Object suffix نِي = "me" -- wrong person.',
          'Object suffix كَ = "you (m.)" -- wrong person.',
        ],
      },
    ],
  },
};

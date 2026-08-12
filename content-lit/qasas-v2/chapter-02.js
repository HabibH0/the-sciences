// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 2 -- حَسَدُ
// الإِخْوَةِ. Printed page 28 (bottom, after ch1's closing warning) - 29
// (all, ending before ch3's heading وَفْدٌ إِلَى يَعْقُوبَ). Transcribed by
// hand from the scan (vision OCR, 300dpi render) against
// QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// The brothers' resentment builds and the plot against Yūsuf forms. No
// Qur'anic quotation on these pages -- pure narrative and dialogue.
//
// Grammar notes:
//   -- صَغِيرَانِ / ضَعِيفَانِ (qs-v2-c02-009) are this course's first dual
//      forms. The documented grammar (CHAPTER-FORMAT.md §4) lists `du` as
//      an atom but has no worked example combining it with def/indef the
//      way plural does (`pl.indef.nom`, established in qasas-v1 ch16) --
//      extended here by the same logic: number atom first, then indef/def,
//      then case, so `du.indef.nom`. هُمَا itself (the dual pronoun) is
//      tagged with the undocumented person code `3d`, sanctioned the same
//      way `2mp`/`3md` are elsewhere (CHAPTER-FORMAT.md §4's "use them
//      anyway" note) -- a safe degradation, not a validation failure.
//   -- حُبًّا (qs-v2-c02-003) is a cognate accusative (الْمَفْعُولُ الْمُطْلَق)
//      intensifying يُحِبُّهُمَا, not a separate object -- tagged plain
//      indef.acc like any other accusative noun; the construction itself
//      is carried by word order and gloss, matching how the format has no
//      separate role atom for it (§4's note on `role: construct_head`
//      losing its own field applies by extension here too).
//   -- حَسَدُهُمْ (qs-v2-c02-016) is the verbal noun (مصدر) of حَسَدَ,
//      already taught in ch1 as a verb -- tagged with its own lemma حَسَد
//      (not re-added to newWords, since a learner who knows the verb can
//      read the transparent related noun from gloss + root alone).
//   -- Shared lexicon check (QASAS_AGENT_BRIEF.md §6): أُمّ، أَلْقَى، غَضِبَ،
//      أَرْض، يَوْم، أَخَذَ، سَافَرَ، حِينَئِذٍ، بَلْ، بِئْر، قَوِيّ، اِجْتَمَعَ، قَتَلَ،
//      سَمِعَ، جَمِيع، لِمَاذَا are all already taught (qasas-v1 or qasas-v2
//      ch1) and so are NOT re-listed in newWords here.
//
// 13 new words (حُبّ، شَدِيد، مِثْل، أَمْر، بَعِيد، بَعْض، شَابّ، اِشْتَدَّ، طَرَحَ،
// خَالِص، طَرِيق، مُسَافِر، وَافَقَ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch2',
  title: { ar: 'حَسَدُ الإِخْوَةِ', en: "The Brothers' Envy" },
  newWords: [
    'حُبّ', 'شَدِيد', 'مِثْل', 'أَمْر', 'بَعِيد', 'بَعْض', 'شَابّ', 'اِشْتَدَّ', 'طَرَحَ',
    'خَالِص', 'طَرِيق', 'مُسَافِر', 'وَافَقَ',
  ],
  lemmas: {
    'حُبّ': { gloss: 'love' },
    'شَدِيد': { gloss: 'severe, intense' },
    'مِثْل': { gloss: 'like, similar to' },
    'أَمْر': { gloss: 'matter, affair' },
    'بَعِيد': { gloss: 'far, distant' },
    'بَعْض': { gloss: 'some (of)' },
    'شَابّ': { gloss: 'young man' },
    'اِشْتَدَّ': { gloss: 'to intensify, grow severe' },
    'طَرَحَ': { gloss: 'to throw, cast' },
    'خَالِص': { gloss: 'pure, exclusive' },
    'طَرِيق': { gloss: 'road, path' },
    'مُسَافِر': { gloss: 'traveler' },
    'وَافَقَ': { gloss: 'to agree' },
  },
  paragraphs: [
    {
      en: 'And Yūsuf had another brother from his mother, his name was Binyāmīn. And Yaʿqūb loved them both intensely, and he did not love anyone else the same. And the brothers envied Yūsuf and Binyāmīn and grew angry. They used to say:',
      sentences: [
        {
          id: 'qs-v2-c02-001',
          ar: 'وَكَانَ يُوسُفُ لَهُ أَخٌ آخَرُ مِنْ أُمِّهِ',
          en: 'And Yūsuf had another brother from his mother,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; had' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him, he had' },
            { surface: 'أَخٌ', lemma: 'أَخ', pos: 'noun', features: 'indef.nom', root: 'أ خ و', gloss: 'a brother' },
            { surface: 'آخَرُ', lemma: 'آخَر', pos: 'adj', features: 'indef.nom', root: 'أ خ ر', gloss: 'another' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أُمِّهِ', lemma: 'أُمّ', pos: 'noun', features: 'gen+3ms', root: 'أ م م', gloss: 'his mother' },
          ],
        },
        {
          id: 'qs-v2-c02-002',
          ar: 'اسْمُهُ بِنْيَامِينُ.',
          en: 'his name was Binyāmīn.',
          tokens: [
            { surface: 'اسْمُهُ', lemma: 'اِسْم', pos: 'noun', features: 'nom+3ms', root: 'س م و', gloss: 'his name' },
            { surface: 'بِنْيَامِينُ', lemma: 'بِنْيَامِين', pos: 'proper', features: 'nom', gloss: 'Binyāmīn (Benjamin)' },
          ],
        },
        {
          id: 'qs-v2-c02-003',
          ar: 'وَكَانَ يَعْقُوبُ يُحِبُّهُمَا حُبًّا شَدِيدًا،',
          en: 'And Yaʿqūb loved them both intensely,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'يُحِبُّهُمَا', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms+3d', root: 'ح ب ب', gloss: 'to love; loves them both' },
            { surface: 'حُبًّا', lemma: 'حُبّ', pos: 'noun', features: 'indef.acc', root: 'ح ب ب', gloss: 'a love' },
            { surface: 'شَدِيدًا', lemma: 'شَدِيد', pos: 'adj', features: 'indef.acc', root: 'ش د د', gloss: 'severe, intense' },
          ],
        },
        {
          id: 'qs-v2-c02-004',
          ar: 'وَكَانَ لَا يُحِبُّ مِثْلَهُمَا أَحَدًا.',
          en: 'and he did not love anyone else the same.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', root: 'ح ب ب', gloss: 'to love; loves' },
            { surface: 'مِثْلَهُمَا', lemma: 'مِثْل', pos: 'noun', features: 'acc+3d', root: 'م ث ل', gloss: 'like them both, the same as them' },
            { surface: 'أَحَدًا', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', root: 'أ ح د', gloss: 'anyone' },
          ],
        },
        {
          id: 'qs-v2-c02-005',
          ar: 'وَكَانَ الْإِخْوَةُ يَحْسُدُونَ يُوسُفَ وَبِنْيَامِينَ وَيَغْضَبُونَ،',
          en: 'And the brothers envied Yūsuf and Binyāmīn and grew angry.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'الْإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'يَحْسُدُونَ', lemma: 'حَسَدَ', pos: 'verb', features: 'impf.3mp', root: 'ح س د', gloss: 'to envy; envy' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'وَبِنْيَامِينَ', lemma: 'بِنْيَامِين', pos: 'proper', features: 'conj+acc', gloss: 'and Binyāmīn' },
            { surface: 'وَيَغْضَبُونَ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+impf.3mp', root: 'غ ض ب', gloss: 'to be angry; and grow angry' },
          ],
        },
        {
          id: 'qs-v2-c02-006',
          ar: 'كَانُوا يَقُولُونَ:',
          en: 'They used to say:',
          tokens: [
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; used to' },
            { surface: 'يَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3mp', root: 'ق و ل', gloss: 'to say; say' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا حَسَدَ الْإِخْوَةُ يُوسُفَ وَبِنْيَامِينَ؟',
          options: ['لِأَنَّ أَبَاهُمْ يُحِبُّهُمَا أَكْثَرَ', 'لِأَنَّهُمَا كَانَا يَكْذِبَانِ', 'لِأَنَّهُمَا أَخَذَا مَالَهُمْ'],
          answer: 0,
          qEn: 'Why did the brothers envy Yūsuf and Binyāmīn?',
          optionsEn: ['Because their father loved them more', 'Because they used to lie', 'Because they took their money'],
        },
      ],
    },
    {
      en: '\'Why does our father love Yūsuf and Binyāmīn more? And why does our father love Yūsuf and Binyāmīn when they are two small, weak boys? Why does he not love us like Yūsuf and Binyāmīn -- we are strong young men; this is an amazing thing.\'',
      sentences: [
        {
          id: 'qs-v2-c02-007',
          ar: 'لِمَاذَا يُحِبُّ أَبُونَا يُوسُفَ وَبِنْيَامِينَ أَكْثَرَ؟',
          en: "'Why does our father love Yūsuf and Binyāmīn more?",
          tokens: [
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'adv', gloss: 'why' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', root: 'ح ب ب', gloss: 'to love; loves' },
            { surface: 'أَبُونَا', lemma: 'أَب', pos: 'noun', features: 'nom+1p', root: 'أ ب و', gloss: 'our father' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'وَبِنْيَامِينَ', lemma: 'بِنْيَامِين', pos: 'proper', features: 'conj+acc', gloss: 'and Binyāmīn' },
            { surface: 'أَكْثَرَ', lemma: 'أَكْثَر', pos: 'adj', features: 'indef.acc', root: 'ك ث ر', gloss: 'more' },
          ],
        },
        {
          id: 'qs-v2-c02-008',
          ar: 'وَلِمَاذَا يُحِبُّ أَبُونَا يُوسُفَ وَبِنْيَامِينَ',
          en: 'And why does our father love Yūsuf and Binyāmīn',
          tokens: [
            { surface: 'وَلِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'conj+adv', gloss: 'and why' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', root: 'ح ب ب', gloss: 'to love; loves' },
            { surface: 'أَبُونَا', lemma: 'أَب', pos: 'noun', features: 'nom+1p', root: 'أ ب و', gloss: 'our father' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'وَبِنْيَامِينَ', lemma: 'بِنْيَامِين', pos: 'proper', features: 'conj+acc', gloss: 'and Binyāmīn' },
          ],
        },
        {
          id: 'qs-v2-c02-009',
          ar: 'وَهُمَا صَغِيرَانِ ضَعِيفَانِ؟',
          en: 'when they are two small, weak boys?',
          tokens: [
            { surface: 'وَهُمَا', lemma: 'هُمَا', pos: 'noun', features: 'conj+3d', gloss: 'and they both' },
            { surface: 'صَغِيرَانِ', lemma: 'صَغِير', pos: 'adj', features: 'du.indef.nom', root: 'ص غ ر', gloss: 'small, young (dual)' },
            { surface: 'ضَعِيفَانِ', lemma: 'ضَعِيف', pos: 'adj', features: 'du.indef.nom', root: 'ض ع ف', gloss: 'weak (dual)' },
          ],
        },
        {
          id: 'qs-v2-c02-010',
          ar: 'لِمَاذَا لَا يُحِبُّنَا مِثْلَ يُوسُفَ وَبِنْيَامِينَ',
          en: 'Why does he not love us like Yūsuf and Binyāmīn --',
          tokens: [
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'adv', gloss: 'why' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُحِبُّنَا', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms+1p', root: 'ح ب ب', gloss: 'to love; loves us' },
            { surface: 'مِثْلَ', lemma: 'مِثْل', pos: 'noun', features: 'acc.constr', root: 'م ث ل', gloss: 'like' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'وَبِنْيَامِينَ', lemma: 'بِنْيَامِين', pos: 'proper', features: 'conj+gen', gloss: 'and Binyāmīn' },
          ],
        },
        {
          id: 'qs-v2-c02-011',
          ar: 'نَحْنُ شُبَّانٌ أَقْوِيَاءُ،',
          en: 'we are strong young men;',
          tokens: [
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'شُبَّانٌ', lemma: 'شَابّ', pos: 'noun', features: 'pl.indef.nom', root: 'ش ب ب', gloss: 'young men' },
            { surface: 'أَقْوِيَاءُ', lemma: 'قَوِيّ', pos: 'adj', features: 'pl.indef.nom', root: 'ق و ي', gloss: 'strong' },
          ],
        },
        {
          id: 'qs-v2-c02-012',
          ar: 'هَذَا أَمْرٌ عَجِيبٌ.',
          en: "this is an amazing thing.'",
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'أَمْرٌ', lemma: 'أَمْر', pos: 'noun', features: 'indef.nom', root: 'أ م ر', gloss: 'a matter, thing' },
            { surface: 'عَجِيبٌ', lemma: 'عَجِيب', pos: 'adj', features: 'indef.nom', root: 'ع ج ب', gloss: 'amazing, strange' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'And Yūsuf was a young boy, so he told the dream to his brothers, and the brothers grew very angry when they heard the dream, and their envy intensified. And the brothers gathered one day and said: \'Kill Yūsuf, or cast him to a distant land.',
      sentences: [
        {
          id: 'qs-v2-c02-013',
          ar: 'وَكَانَ يُوسُفُ وَلَدًا صَغِيرًا،',
          en: 'And Yūsuf was a young boy,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'وَلَدًا', lemma: 'وَلَد', pos: 'noun', features: 'indef.acc', root: 'و ل د', gloss: 'a boy' },
            { surface: 'صَغِيرًا', lemma: 'صَغِير', pos: 'adj', features: 'indef.acc', root: 'ص غ ر', gloss: 'young, small' },
          ],
        },
        {
          id: 'qs-v2-c02-014',
          ar: 'فَحَكَى الرُّؤْيَا لِإِخْوَتِهِ',
          en: 'so he told the dream to his brothers,',
          tokens: [
            { surface: 'فَحَكَى', lemma: 'حَكَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ح ك ي', gloss: 'to narrate, tell; so told' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.acc', root: 'ر أ ي', gloss: 'the dream, vision' },
            { surface: 'لِإِخْوَتِهِ', lemma: 'أَخ', pos: 'noun', features: 'prep+pl.gen+3ms', root: 'أ خ و', gloss: 'to his brothers' },
          ],
        },
        {
          id: 'qs-v2-c02-015',
          ar: 'وَغَضِبَ الْإِخْوَةُ جِدًّا لَمَّا سَمِعُوا الرُّؤْيَا',
          en: 'and the brothers grew very angry when they heard the dream,',
          tokens: [
            { surface: 'وَغَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'غ ض ب', gloss: 'to be angry; and grew angry' },
            { surface: 'الْإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, greatly' },
            { surface: 'لَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'سَمِعُوا', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.3mp', root: 'س م ع', gloss: 'to hear; they heard' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.acc', root: 'ر أ ي', gloss: 'the dream, vision' },
          ],
        },
        {
          id: 'qs-v2-c02-016',
          ar: 'وَاشْتَدَّ حَسَدُهُمْ.',
          en: 'and their envy intensified.',
          tokens: [
            { surface: 'وَاشْتَدَّ', lemma: 'اِشْتَدَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'ش د د', gloss: 'to intensify, grow severe; and intensified' },
            { surface: 'حَسَدُهُمْ', lemma: 'حَسَد', pos: 'noun', features: 'nom+3mp', root: 'ح س د', gloss: 'their envy' },
          ],
        },
        {
          id: 'qs-v2-c02-017',
          ar: 'وَاجْتَمَعَ الْإِخْوَةُ يَوْمًا',
          en: 'And the brothers gathered one day',
          tokens: [
            { surface: 'وَاجْتَمَعَ', lemma: 'اِجْتَمَعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج م ع', gloss: 'to gather; and gathered' },
            { surface: 'الْإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'يَوْمًا', lemma: 'يَوْم', pos: 'noun', features: 'indef.acc', root: 'ي و م', gloss: 'one day' },
          ],
        },
        {
          id: 'qs-v2-c02-018',
          ar: 'وَقَالُوا: اقْتُلُوا يُوسُفَ',
          en: "and said: 'Kill Yūsuf,",
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق و ل', gloss: 'and said' },
            { surface: 'اقْتُلُوا', lemma: 'قَتَلَ', pos: 'verb', features: 'imp.2mp', root: 'ق ت ل', gloss: 'to kill; kill!' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c02-019',
          ar: 'أَوِ اطْرَحُوهُ أَرْضًا بَعِيدَةً.',
          en: 'or cast him to a distant land.',
          tokens: [
            { surface: 'أَوِ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'اطْرَحُوهُ', lemma: 'طَرَحَ', pos: 'verb', features: 'imp.2mp+3ms', root: 'ط ر ح', gloss: 'to throw, cast; cast him!' },
            { surface: 'أَرْضًا', lemma: 'أَرْض', pos: 'noun', features: 'indef.acc', root: 'أ ر ض', gloss: 'a land' },
            { surface: 'بَعِيدَةً', lemma: 'بَعِيد', pos: 'adj', features: 'indef.acc.f', root: 'ب ع د', gloss: 'far, distant' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا اقْتَرَحَ بَعْضُ الْإِخْوَةِ أَوَّلًا؟',
          options: ['قَتْلَ يُوسُفَ أَوْ طَرْحَهُ فِي أَرْضٍ بَعِيدَةٍ', 'بَيْعَ يُوسُفَ لِلْمَلِكِ', 'إِرْسَالَ يُوسُفَ إِلَى مِصْرَ'],
          answer: 0,
          qEn: 'What did some of the brothers first propose?',
          optionsEn: ['Killing Yūsuf or casting him to a distant land', 'Selling Yūsuf to the king', 'Sending Yūsuf to Egypt'],
        },
      ],
    },
    {
      en: 'then your father will be exclusively yours, and his love will be exclusively yours.\' One of them said: \'No, rather cast him into a well on a road -- some travelers will take him.\' And all the brothers agreed to it.',
      sentences: [
        {
          id: 'qs-v2-c02-020',
          ar: 'حِينَئِذٍ يَكُونُ أَبُوكُمْ لَكُمْ خَالِصًا،',
          en: "then your father will be exclusively yours,",
          tokens: [
            { surface: 'حِينَئِذٍ', lemma: 'حِينَئِذٍ', pos: 'adv', features: 'adv', gloss: 'then, at that time' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; will be' },
            { surface: 'أَبُوكُمْ', lemma: 'أَب', pos: 'noun', features: 'nom+2mp', root: 'أ ب و', gloss: 'your father' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'to you all' },
            { surface: 'خَالِصًا', lemma: 'خَالِص', pos: 'adj', features: 'indef.acc', root: 'خ ل ص', gloss: 'pure, exclusive' },
          ],
        },
        {
          id: 'qs-v2-c02-021',
          ar: 'وَيَكُونُ حُبُّهُ لَكُمْ خَالِصًا.',
          en: "and his love will be exclusively yours.'",
          tokens: [
            { surface: 'وَيَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ك و ن', gloss: 'to be; and will be' },
            { surface: 'حُبُّهُ', lemma: 'حُبّ', pos: 'noun', features: 'nom+3ms', root: 'ح ب ب', gloss: 'his love' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'to you all' },
            { surface: 'خَالِصًا', lemma: 'خَالِص', pos: 'adj', features: 'indef.acc', root: 'خ ل ص', gloss: 'pure, exclusive' },
          ],
        },
        {
          id: 'qs-v2-c02-022',
          ar: 'قَالَ أَحَدُهُمْ: لَا بَلْ أَلْقُوهُ فِي بِئْرٍ',
          en: "One of them said: 'No, rather cast him into a well",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'أَحَدُهُمْ', lemma: 'أَحَد', pos: 'noun', features: 'nom+3mp', root: 'أ ح د', gloss: 'one of them' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'أَلْقُوهُ', lemma: 'أَلْقَى', pos: 'verb', features: 'imp.2mp+3ms', root: 'ل ق ي', gloss: 'to throw, cast; cast him!' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, into' },
            { surface: 'بِئْرٍ', lemma: 'بِئْر', pos: 'noun', features: 'indef.gen', root: 'ب أ ر', gloss: 'a well' },
          ],
        },
        {
          id: 'qs-v2-c02-023',
          ar: 'فِي طَرِيقٍ يَأْخُذْهُ بَعْضُ الْمُسَافِرِينَ.',
          en: "on a road -- some travelers will take him.'",
          tokens: [
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'طَرِيقٍ', lemma: 'طَرِيق', pos: 'noun', features: 'indef.gen', root: 'ط ر ق', gloss: 'a road, path' },
            { surface: 'يَأْخُذْهُ', lemma: 'أَخَذَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'أ خ ذ', gloss: 'to take; will take him' },
            { surface: 'بَعْضُ', lemma: 'بَعْض', pos: 'noun', features: 'nom.constr', root: 'ب ع ض', gloss: 'some (of)' },
            { surface: 'الْمُسَافِرِينَ', lemma: 'مُسَافِر', pos: 'noun', features: 'pl.def.gen', root: 'س ف ر', gloss: 'the travelers' },
          ],
        },
        {
          id: 'qs-v2-c02-024',
          ar: 'وَوَافَقَ عَلَيْهِ جَمِيعُ الْإِخْوَةِ.',
          en: 'And all the brothers agreed to it.',
          tokens: [
            { surface: 'وَوَافَقَ', lemma: 'وَافَقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'و ف ق', gloss: 'to agree; and agreed' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to it' },
            { surface: 'جَمِيعُ', lemma: 'جَمِيع', pos: 'noun', features: 'nom.constr', root: 'ج م ع', gloss: 'all (of)' },
            { surface: 'الْإِخْوَةِ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.gen', root: 'أ خ و', gloss: 'the brothers' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَا الِاقْتِرَاحُ الَّذِي وَافَقَ عَلَيْهِ جَمِيعُ الْإِخْوَةِ؟',
          options: ['إِلْقَاؤُهُ فِي بِئْرٍ فِي طَرِيقٍ يَأْخُذُهُ الْمُسَافِرُونَ', 'قَتْلُهُ فِي الْحَالِ', 'تَرْكُهُ فِي الْبَيْتِ وَحْدَهُ'],
          answer: 0,
          qEn: 'What proposal did all the brothers agree to?',
          optionsEn: ['Casting him into a well on a road so travelers would take him', 'Killing him at once', 'Leaving him alone at home'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ يَعْقُوبُ يُحِبُّهُمَا حُبًّا',
        post: '.',
        en: 'And Yaʿqūb loved them both intensely.',
        options: ['شَدِيدًا', 'شَدِيدٌ', 'شَدِيدٍ', 'شَدِيدَةً'],
        answer: 0,
        rationales: [
          'Accusative -- describes حُبًّا, itself accusative as a cognate object.',
          'Nominative -- wrong case; nothing here calls for the subject/predicate case.',
          'Genitive -- nothing here governs the genitive.',
          "Feminine 'severe' -- wrong gender; حُبًّا (a love) is masculine.",
        ],
      },
      {
        type: 'cloze',
        pre: 'وَهُمَا صَغِيرَانِ',
        post: '؟',
        en: 'when they are two small, weak boys?',
        options: ['ضَعِيفَانِ', 'ضَعِيفٌ', 'ضَعِيفَةٌ', 'ضُعَفَاءُ'],
        answer: 0,
        rationales: [
          'Dual, nominative -- matches هُمَا and parallels صَغِيرَانِ.',
          'Singular -- wrong number; the subject هُمَا is dual.',
          'Feminine singular -- wrong number and (here) wrong gender agreement.',
          "Sound masculine plural 'weak (pl.)' -- wrong number; two people take the dual, not the plural.",
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالُوا: لَا بَلْ',
        post: 'هُ فِي بِئْرٍ فِي طَرِيقٍ يَأْخُذْهُ بَعْضُ الْمُسَافِرِينَ.',
        en: 'They said: "No, rather cast him into a well on a road -- some travelers will take him."',
        options: ['أَلْقُوا', 'أَلْقَى', 'يُلْقِي', 'أُلْقِي'],
        answer: 0,
        rationales: [
          'Imperative, masculine plural -- "cast!", addressed to the group of brothers.',
          "Perfect 'he cast' -- wrong tense/mood for a command.",
          "Imperfect 'he casts' -- wrong mood; a command needs the imperative.",
          "Passive 'was cast' -- wrong voice; the brothers are the ones casting.",
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُحِبُّهُمَا حُبًّا شَدِيدًا',
        pre: '',
        post: 'حُبًّا شَدِيدًا',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُحِبُّهُمَا', 'يُحِبُّهُمَا', 'تُحِبُّهُمَا', 'نُحِبُّهُمَا'],
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
        base: 'يُحِبُّهُمَا حُبًّا شَدِيدًا',
        pre: '',
        post: 'حُبًّا شَدِيدًا',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تُحِبُّهُمَا', 'أُحِبُّهُمَا', 'يُحِبُّهُمَا', 'نُحِبُّهُمَا'],
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
        base: 'يُحِبُّهُمَا حُبًّا شَدِيدًا',
        pre: '',
        post: 'حُبًّا شَدِيدًا',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نُحِبُّهُمَا', 'أُحِبُّهُمَا', 'تُحِبُّهُمَا', 'يُحِبُّهُمَا'],
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

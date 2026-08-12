// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 15 -- الْكَعْبَةُ.
// Printed pages 24 (bottom, after ch14's closing ṣalāt-o-salām lines) - 25
// (top, before ch16's heading بَيْتُ الْمَقْدِس). Transcribed by hand from the
// scan (vision OCR, 300dpi render) against QASAS_AGENT_BRIEF.md and
// ../CHAPTER-FORMAT.md.
//
// Ibrāhīm and Ismāʿīl raise the Kaʿbah together, and the chapter closes on
// its enduring role as the Muslims' direction of prayer and the destination
// of Ḥajj. One bracketed group is direct Qur'anic quotation (2:127, the
// builders' prayer of acceptance), split into fragments of at most 2 tokens
// each (same workaround as ch4-14; the ayah is rendered here in the book's
// normalized modern tashkil, matching how ch9-14 already transcribe
// Qur'anic quotes, rather than reproducing the printed page's Uthmani-style
// glyphs):
//   -- qs-v1-c15-{011..015}: ﴿رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ
//      الْعَلِيمُ﴾ (Qur'an 2:127) -- 8 words, 5 fragments.
//
// Grammar notes: رَبَّنَا (qs-v1-c15-011) is tagged acc+1p -- a vocative
// construct (مُنَادًى مُضَاف, accusative) with the attached 1p pronoun, the
// same trailing-person-segment convention used throughout for possessive
// suffixes (e.g. gen+1s, prep+3ms), just on the accusative vocative case
// here. مَعَ keeps the pos:'adv' choice already used in ch12/ch14 rather
// than ch4's earlier pos:'prep' tagging of the same word -- a pre-existing
// split in the corpus; not reconciled here, since neither reading affects
// validation and touching ch4 is out of scope for this chapter.
//
// 9 new words (نَقَلَ، بَنَى، جَبَل، يَد، تَوَجَّهَ، طَافَ، تَقَبَّلَ، سَمِيع، عَلِيم).
// الْكَعْبَة itself is tagged pos:'proper' (like مَكَّة، زَمْزَم) and so is not
// listed in newWords, consistent with how other place names have been
// handled since ch12. صَلَّى/سَلَّمَ reuse their ch14 lemma entries; here
// يُصَلُّونَ additionally carries the ritual-prayer sense ("to pray") rather
// than ch14's "to bless, invoke blessings upon", supplied as a token-level
// gloss override, same mechanism used throughout for polysemous verbs.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch15',
  title: { ar: 'الْكَعْبَةُ', en: 'The Kaʿbah' },
  newWords: [
    'نَقَلَ', 'بَنَى', 'جَبَل', 'يَد', 'تَوَجَّهَ', 'طَافَ', 'تَقَبَّلَ', 'سَمِيع', 'عَلِيم',
  ],
  lemmas: {
    'نَقَلَ': { gloss: 'to carry, transport' },
    'بَنَى': { gloss: 'to build' },
    'جَبَل': { gloss: 'mountain' },
    'يَد': { gloss: 'hand' },
    'تَوَجَّهَ': { gloss: 'to turn towards, face' },
    'طَافَ': { gloss: 'to circle, circumambulate' },
    'تَقَبَّلَ': { gloss: 'to accept' },
    'سَمِيع': { gloss: 'All-Hearing' },
    'عَلِيم': { gloss: 'All-Knowing' },
  },
  paragraphs: [
    {
      en: 'And Ibrāhīm went and returned after that, and wanted to build a house for Allah. And houses were many, but there was no house for Allah in which they worshipped Allah. And Ismāʿīl wanted to build a house for Allah with his father. And Ibrāhīm and Ismāʿīl carried stones from the mountains.',
      sentences: [
        {
          id: 'qs-v1-c15-001',
          ar: 'وَذَهَبَ إِبْرَاهِيمُ وَعَادَ بَعْدَ ذَلِكَ،',
          en: 'And Ibrāhīm went and returned after that,',
          tokens: [
            { surface: 'وَذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ذ ه ب', gloss: 'to go; and went' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'وَعَادَ', lemma: 'عَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع و د', gloss: 'to return; and returned' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v1-c15-002',
          ar: 'وَأَرَادَ أَنْ يَبْنِيَ بَيْتًا لِلَّهِ.',
          en: 'and wanted to build a house for Allah.',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want; and wanted' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَبْنِيَ', lemma: 'بَنَى', pos: 'verb', features: 'impf.3ms', root: 'ب ن ي', gloss: 'to build; build' },
            { surface: 'بَيْتًا', lemma: 'بَيْت', pos: 'noun', features: 'indef.acc', root: 'ب ي ت', gloss: 'a house' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'for Allah' },
          ],
        },
        {
          id: 'qs-v1-c15-003',
          ar: 'وَكَانَتِ الْبُيُوتُ كَثِيرَةً',
          en: 'And houses were many,',
          tokens: [
            { surface: 'وَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'الْبُيُوتُ', lemma: 'بَيْت', pos: 'noun', features: 'pl.def.nom', root: 'ب ي ت', gloss: 'the houses' },
            { surface: 'كَثِيرَةً', lemma: 'كَثِير', pos: 'adj', features: 'indef.acc.f', root: 'ك ث ر', gloss: 'many' },
          ],
        },
        {
          id: 'qs-v1-c15-004',
          ar: 'وَمَا كَانَ بَيْتٌ لِلَّهِ يَعْبُدُونَ فِيهِ اللَّهَ.',
          en: 'but there was no house for Allah in which they worshipped Allah.',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'بَيْتٌ', lemma: 'بَيْت', pos: 'noun', features: 'indef.nom', root: 'ب ي ت', gloss: 'a house' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'for Allah' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', root: 'ع ب د', gloss: 'to worship; they worship' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in it' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v1-c15-005',
          ar: 'وَأَرَادَ إِسْمَاعِيلُ أَنْ يَبْنِيَ بَيْتًا لِلَّهِ مَعَ وَالِدِهِ.',
          en: 'And Ismāʿīl wanted to build a house for Allah with his father.',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want; and wanted' },
            { surface: 'إِسْمَاعِيلُ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'nom', gloss: 'Ismāʿīl' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَبْنِيَ', lemma: 'بَنَى', pos: 'verb', features: 'impf.3ms', root: 'ب ن ي', gloss: 'to build; build' },
            { surface: 'بَيْتًا', lemma: 'بَيْت', pos: 'noun', features: 'indef.acc', root: 'ب ي ت', gloss: 'a house' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'for Allah' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'adv', features: 'adv', gloss: 'with' },
            { surface: 'وَالِدِهِ', lemma: 'وَالِد', pos: 'noun', features: 'gen+3ms', root: 'و ل د', gloss: 'his father' },
          ],
        },
        {
          id: 'qs-v1-c15-006',
          ar: 'وَنَقَلَ إِبْرَاهِيمُ وَإِسْمَاعِيلُ الْحِجَارَةَ مِنَ الْجِبَالِ.',
          en: 'And Ibrāhīm and Ismāʿīl carried stones from the mountains.',
          tokens: [
            { surface: 'وَنَقَلَ', lemma: 'نَقَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ق ل', gloss: 'to carry, transport; and carried' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'وَإِسْمَاعِيلُ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'conj+nom', gloss: 'and Ismāʿīl' },
            { surface: 'الْحِجَارَةَ', lemma: 'حِجَارَة', pos: 'noun', features: 'def.acc', root: 'ح ج ر', gloss: 'the stones' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْجِبَالِ', lemma: 'جَبَل', pos: 'noun', features: 'pl.def.gen', root: 'ج ب ل', gloss: 'the mountains' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا أَرَادَ إِبْرَاهِيمُ أَنْ يَبْنِيَ بَيْتًا؟',
          options: ['لِأَنَّهُ مَا كَانَ بَيْتٌ لِلَّهِ يَعْبُدُونَ فِيهِ اللَّهَ', 'لِأَنَّهُ أَرَادَ مَالًا', 'لِأَنَّ الْمَلِكَ أَمَرَهُ'],
          answer: 0,
          qEn: 'Why did Ibrāhīm want to build a house?',
          optionsEn: ['Because there was no house for Allah in which they worshipped Allah', 'Because he wanted wealth', 'Because the king commanded him'],
        },
      ],
    },
    {
      en: 'And Ibrāhīm was building the Kaʿbah with his hand, and Ismāʿīl was building the Kaʿbah with his hand. And Ibrāhīm was remembering Allah and supplicating. And Ismāʿīl was remembering Allah and supplicating. \'Our Lord, accept from us; indeed You are the All-Hearing, the All-Knowing.\' (Qur\'an 2:127)',
      sentences: [
        {
          id: 'qs-v1-c15-007',
          ar: 'وَكَانَ إِبْرَاهِيمُ يَبْنِي الْكَعْبَةَ بِيَدِهِ',
          en: 'And Ibrāhīm was building the Kaʿbah with his hand,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'يَبْنِي', lemma: 'بَنَى', pos: 'verb', features: 'impf.3ms', root: 'ب ن ي', gloss: 'to build; builds' },
            { surface: 'الْكَعْبَةَ', lemma: 'كَعْبَة', pos: 'proper', features: 'def.acc', root: 'ك ع ب', gloss: 'the Kaʿbah' },
            { surface: 'بِيَدِهِ', lemma: 'يَد', pos: 'noun', features: 'prep+gen+3ms', root: 'ي د ي', gloss: 'with his hand' },
          ],
        },
        {
          id: 'qs-v1-c15-008',
          ar: 'وَكَانَ إِسْمَاعِيلُ يَبْنِي الْكَعْبَةَ بِيَدِهِ.',
          en: 'and Ismāʿīl was building the Kaʿbah with his hand.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'إِسْمَاعِيلُ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'nom', gloss: 'Ismāʿīl' },
            { surface: 'يَبْنِي', lemma: 'بَنَى', pos: 'verb', features: 'impf.3ms', root: 'ب ن ي', gloss: 'to build; builds' },
            { surface: 'الْكَعْبَةَ', lemma: 'كَعْبَة', pos: 'proper', features: 'def.acc', root: 'ك ع ب', gloss: 'the Kaʿbah' },
            { surface: 'بِيَدِهِ', lemma: 'يَد', pos: 'noun', features: 'prep+gen+3ms', root: 'ي د ي', gloss: 'with his hand' },
          ],
        },
        {
          id: 'qs-v1-c15-009',
          ar: 'وَكَانَ إِبْرَاهِيمُ يَذْكُرُ اللَّهَ وَيَدْعُو.',
          en: 'And Ibrāhīm was remembering Allah and supplicating.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'يَذْكُرُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'impf.3ms', root: 'ذ ك ر', gloss: 'to remember, mention; remembers' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَيَدْعُو', lemma: 'دَعَا', pos: 'verb', features: 'conj+impf.3ms', root: 'د ع و', gloss: 'to call, supplicate; and supplicates' },
          ],
        },
        {
          id: 'qs-v1-c15-010',
          ar: 'وَكَانَ إِسْمَاعِيلُ يَذْكُرُ اللَّهَ وَيَدْعُو.',
          en: 'And Ismāʿīl was remembering Allah and supplicating.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'إِسْمَاعِيلُ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'nom', gloss: 'Ismāʿīl' },
            { surface: 'يَذْكُرُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'impf.3ms', root: 'ذ ك ر', gloss: 'to remember, mention; remembers' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَيَدْعُو', lemma: 'دَعَا', pos: 'verb', features: 'conj+impf.3ms', root: 'د ع و', gloss: 'to call, supplicate; and supplicates' },
          ],
        },
        {
          id: 'qs-v1-c15-011',
          ar: '﴿رَبَّنَا تَقَبَّلْ',
          en: "'Our Lord, accept",
          tokens: [
            { surface: 'رَبَّنَا', lemma: 'رَبّ', pos: 'noun', features: 'acc+1p', root: 'ر ب ب', gloss: 'our Lord' },
            { surface: 'تَقَبَّلْ', lemma: 'تَقَبَّلَ', pos: 'verb', features: 'imp.2ms', root: 'ق ب ل', gloss: 'to accept; accept!' },
          ],
        },
        {
          id: 'qs-v1-c15-012',
          ar: 'مِنَّا',
          en: 'from us;',
          tokens: [
            { surface: 'مِنَّا', lemma: 'مِنْ', pos: 'prep', features: 'prep+1p', gloss: 'from us' },
          ],
        },
        {
          id: 'qs-v1-c15-013',
          ar: 'إِنَّكَ أَنْتَ',
          en: 'indeed You are',
          tokens: [
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'أَنْتَ', lemma: 'أَنْتَ', pos: 'noun', features: '2ms', gloss: 'you' },
          ],
        },
        {
          id: 'qs-v1-c15-014',
          ar: 'السَّمِيعُ',
          en: 'the All-Hearing,',
          tokens: [
            { surface: 'السَّمِيعُ', lemma: 'سَمِيع', pos: 'adj', features: 'def.nom', root: 'س م ع', gloss: 'the All-Hearing' },
          ],
        },
        {
          id: 'qs-v1-c15-015',
          ar: 'الْعَلِيمُ﴾.',
          en: "the All-Knowing.' (Qur'an 2:127)",
          tokens: [
            { surface: 'الْعَلِيمُ', lemma: 'عَلِيم', pos: 'adj', features: 'def.nom', root: 'ع ل م', gloss: 'the All-Knowing' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ بَنَى الْكَعْبَةَ مَعَ إِبْرَاهِيمَ؟',
          options: ['إِسْمَاعِيلُ', 'هَاجَرُ', 'لُوطٌ'],
          answer: 0,
          qEn: 'Who built the Kaʿbah with Ibrāhīm?',
          optionsEn: ['Ismāʿīl', 'Hājar', 'Lūṭ'],
        },
      ],
    },
    {
      en: 'And Allah accepted from Ibrāhīm and Ismāʿīl, and blessed the Kaʿbah. We turn towards the Kaʿbah in every prayer. And the Muslims travel to the Kaʿbah in the days of Ḥajj, and they circle around it and pray near it. Allah blessed the Kaʿbah',
      sentences: [
        {
          id: 'qs-v1-c15-016',
          ar: 'وَتَقَبَّلَ اللَّهُ مِنْ إِبْرَاهِيمَ وَإِسْمَاعِيلَ',
          en: 'And Allah accepted from Ibrāhīm and Ismāʿīl,',
          tokens: [
            { surface: 'وَتَقَبَّلَ', lemma: 'تَقَبَّلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق ب ل', gloss: 'to accept; and accepted' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
            { surface: 'وَإِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'conj+gen', gloss: 'and Ismāʿīl' },
          ],
        },
        {
          id: 'qs-v1-c15-017',
          ar: 'وَبَارَكَ فِي الْكَعْبَةِ.',
          en: 'and blessed the Kaʿbah.',
          tokens: [
            { surface: 'وَبَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ب ر ك', gloss: 'to bless; and blessed' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, regarding' },
            { surface: 'الْكَعْبَةِ', lemma: 'كَعْبَة', pos: 'proper', features: 'def.gen', root: 'ك ع ب', gloss: 'the Kaʿbah' },
          ],
        },
        {
          id: 'qs-v1-c15-018',
          ar: 'نَحْنُ نَتَوَجَّهُ إِلَى الْكَعْبَةِ فِي كُلِّ صَلَاةٍ.',
          en: 'We turn towards the Kaʿbah in every prayer.',
          tokens: [
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'نَتَوَجَّهُ', lemma: 'تَوَجَّهَ', pos: 'verb', features: 'impf.1p', root: 'و ج ه', gloss: 'to turn towards; we turn towards' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'towards' },
            { surface: 'الْكَعْبَةِ', lemma: 'كَعْبَة', pos: 'proper', features: 'def.gen', root: 'ك ع ب', gloss: 'the Kaʿbah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', root: 'ك ل ل', gloss: 'every' },
            { surface: 'صَلَاةٍ', lemma: 'صَلَاة', pos: 'noun', features: 'indef.gen', root: 'ص ل و', gloss: 'a prayer' },
          ],
        },
        {
          id: 'qs-v1-c15-019',
          ar: 'وَيُسَافِرُ الْمُسْلِمُونَ إِلَى الْكَعْبَةِ فِي أَيَّامِ الْحَجِّ.',
          en: 'And the Muslims travel to the Kaʿbah in the days of Ḥajj,',
          tokens: [
            { surface: 'وَيُسَافِرُ', lemma: 'سَافَرَ', pos: 'verb', features: 'conj+impf.3ms', root: 'س ف ر', gloss: 'to travel; and travel' },
            { surface: 'الْمُسْلِمُونَ', lemma: 'مُسْلِم', pos: 'noun', features: 'pl.def.nom', root: 'س ل م', gloss: 'the Muslims' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْكَعْبَةِ', lemma: 'كَعْبَة', pos: 'proper', features: 'def.gen', root: 'ك ع ب', gloss: 'the Kaʿbah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, during' },
            { surface: 'أَيَّامِ', lemma: 'يَوْم', pos: 'noun', features: 'pl.gen.constr', root: 'ي و م', gloss: 'the days (of)' },
            { surface: 'الْحَجِّ', lemma: 'حَجّ', pos: 'noun', features: 'def.gen', root: 'ح ج ج', gloss: 'the Ḥajj' },
          ],
        },
        {
          id: 'qs-v1-c15-020',
          ar: 'وَيَطُوفُونَ بِالْكَعْبَةِ وَيُصَلُّونَ عِنْدَهَا.',
          en: 'and they circle around it and pray near it.',
          tokens: [
            { surface: 'وَيَطُوفُونَ', lemma: 'طَافَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ط و ف', gloss: 'to circle, circumambulate; and they circle' },
            { surface: 'بِالْكَعْبَةِ', lemma: 'كَعْبَة', pos: 'proper', features: 'prep+def.gen', root: 'ك ع ب', gloss: 'around the Kaʿbah' },
            { surface: 'وَيُصَلُّونَ', lemma: 'صَلَّى', pos: 'verb', features: 'conj+impf.3mp', root: 'ص ل و', gloss: 'to pray; and they pray' },
            { surface: 'عِنْدَهَا', lemma: 'عِنْدَ', pos: 'adv', features: 'adv+3fs', gloss: 'near it' },
          ],
        },
        {
          id: 'qs-v1-c15-021',
          ar: 'بَارَكَ اللَّهُ فِي الْكَعْبَةِ',
          en: 'Allah blessed the Kaʿbah',
          tokens: [
            { surface: 'بَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'perf.3ms', root: 'ب ر ك', gloss: 'to bless; blessed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, regarding' },
            { surface: 'الْكَعْبَةِ', lemma: 'كَعْبَة', pos: 'proper', features: 'def.gen', root: 'ك ع ب', gloss: 'the Kaʿbah' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يَفْعَلُ الْمُسْلِمُونَ عِنْدَ الْكَعْبَةِ فِي أَيَّامِ الْحَجِّ؟',
          options: ['يَطُوفُونَ بِهَا وَيُصَلُّونَ عِنْدَهَا', 'يَبْنُونَهَا مِنْ جَدِيدٍ', 'يَبِيعُونَ الْأَصْنَامَ'],
          answer: 0,
          qEn: 'What do the Muslims do at the Kaʿbah in the days of Ḥajj?',
          optionsEn: ['They circle around it and pray near it', 'They rebuild it from scratch', 'They sell idols'],
        },
      ],
    },
    {
      en: 'and accepted from Ibrāhīm and Ismāʿīl. May Allah bless Ibrāhīm and grant him peace. May Allah bless Ismāʿīl and grant him peace. And may Allah bless Muḥammad and grant him peace.',
      sentences: [
        {
          id: 'qs-v1-c15-022',
          ar: 'وَتَقَبَّلَ مِنْ إِبْرَاهِيمَ وَإِسْمَاعِيلَ.',
          en: 'and accepted from Ibrāhīm and Ismāʿīl.',
          tokens: [
            { surface: 'وَتَقَبَّلَ', lemma: 'تَقَبَّلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق ب ل', gloss: 'to accept; and accepted' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
            { surface: 'وَإِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'conj+gen', gloss: 'and Ismāʿīl' },
          ],
        },
        {
          id: 'qs-v1-c15-023',
          ar: 'صَلَّى اللَّهُ عَلَى إِبْرَاهِيمَ وَسَلَّمَ.',
          en: 'May Allah bless Ibrāhīm and grant him peace.',
          tokens: [
            { surface: 'صَلَّى', lemma: 'صَلَّى', pos: 'verb', features: 'perf.3ms', root: 'ص ل و', gloss: 'to bless, invoke blessings; may He bless' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
            { surface: 'وَسَلَّمَ', lemma: 'سَلَّمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ل م', gloss: 'to grant peace; and granted peace' },
          ],
        },
        {
          id: 'qs-v1-c15-024',
          ar: 'صَلَّى اللَّهُ عَلَى إِسْمَاعِيلَ وَسَلَّمَ.',
          en: 'May Allah bless Ismāʿīl and grant him peace.',
          tokens: [
            { surface: 'صَلَّى', lemma: 'صَلَّى', pos: 'verb', features: 'perf.3ms', root: 'ص ل و', gloss: 'to bless, invoke blessings; may He bless' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'إِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'gen', gloss: 'Ismāʿīl' },
            { surface: 'وَسَلَّمَ', lemma: 'سَلَّمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ل م', gloss: 'to grant peace; and granted peace' },
          ],
        },
        {
          id: 'qs-v1-c15-025',
          ar: 'وَصَلَّى اللَّهُ عَلَى مُحَمَّدٍ وَسَلَّمَ.',
          en: 'And may Allah bless Muḥammad and grant him peace.',
          tokens: [
            { surface: 'وَصَلَّى', lemma: 'صَلَّى', pos: 'verb', features: 'conj+perf.3ms', root: 'ص ل و', gloss: 'to bless; and may He bless' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'مُحَمَّدٍ', lemma: 'مُحَمَّد', pos: 'proper', features: 'gen', gloss: 'Muḥammad' },
            { surface: 'وَسَلَّمَ', lemma: 'سَلَّمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ل م', gloss: 'to grant peace; and granted peace' },
          ],
        },
      ],
      checks: [],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَمَا كَانَ',
        post: 'لِلَّهِ يَعْبُدُونَ فِيهِ اللَّهَ.',
        en: 'but there was no house for Allah in which they worshipped Allah.',
        options: ['بَيْتٌ', 'بَيْتًا', 'بَيْتٍ', 'الْبَيْتُ'],
        answer: 0,
        rationales: [
          'Nominative -- بَيْتٌ is the subject (اسْم كَانَ) of the negated existential كَانَ.',
          'Accusative -- wrong case for the subject of كَانَ here.',
          'Genitive -- nothing here governs the genitive.',
          "Definite 'the house' -- wrong, no house for Allah existed yet, so it must stay indefinite.",
        ],
      },
      {
        type: 'cloze',
        pre: 'نَحْنُ',
        post: 'إِلَى الْكَعْبَةِ فِي كُلِّ صَلَاةٍ.',
        en: 'We turn towards the Kaʿbah in every prayer.',
        options: ['نَتَوَجَّهُ', 'يَتَوَجَّهُ', 'تَتَوَجَّهُ', 'أَتَوَجَّهُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he.',
          '2nd masculine singular / 3rd feminine singular -- wrong person for نَحْنُ.',
          '1st singular -- I, not we.',
        ],
      },
      {
        type: 'cloze',
        pre: '﴿رَبَّنَا',
        post: 'مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ﴾.',
        en: "'Our Lord, accept from us; indeed You are the All-Hearing, the All-Knowing.'",
        options: ['تَقَبَّلْ', 'تَقَبَّلَ', 'يَتَقَبَّلُ', 'قَبِلْتَ'],
        answer: 0,
        rationales: [
          "Imperative -- 'accept!'; Ibrāhīm and Ismāʿīl are petitioning Allah directly.",
          "Perfect 3rd person 'he accepted' -- wrong, this is a request, not a report.",
          "Imperfect 3rd person 'he accepts' -- wrong person and not a request.",
          "A different verb form 'you accepted' -- wrong verb shape entirely.",
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَبْنِي الْكَعْبَةَ',
        pre: '',
        post: 'الْكَعْبَةَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَبْنِي', 'يَبْنِي', 'تَبْنِي', 'نَبْنِي'],
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
        base: 'يَبْنِي الْكَعْبَةَ',
        pre: '',
        post: 'الْكَعْبَةَ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَبْنِي', 'أَبْنِي', 'يَبْنِي', 'نَبْنِي'],
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
        base: 'يَبْنِي الْكَعْبَةَ',
        pre: '',
        post: 'الْكَعْبَةَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَبْنِي', 'أَبْنِي', 'تَبْنِي', 'يَبْنِي'],
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

// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 17 -- جَاءَ
// إِخْوَةُ يُوسُفَ. Printed page 47 (from the heading, right after ch16's
// closing وَاسْتَرَاحَ النَّاسُ جِدًّا وَحَمِدُوا اللَّهَ) - 48 (ending before ch18's
// heading بَيْنَ يُوسُفَ وَإِخْوَتِهِ on page 49). Transcribed by hand from the
// scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// Grammar / lexical notes:
//   -- Several long sentences are split at natural clause boundaries into
//      shorter teaching sentences (e.g. qs-v2-c17-{002,003}, {025,026,027}),
//      same practice as ch11/ch12/ch15/ch16 -- no content added or removed.
//   -- هَؤُلَاءِ ("these") is new -- the plural demonstrative, tagged
//      dem.pl, parallel to the already-taught dem.m هَذَا / dem.f هَذِهِ.
//   -- قَتْل (qs-v2-c17-026, "killing") is the verbal noun (مصدر) of the
//      already-taught verb قَتَلَ ("to kill", qasas-v2 ch2) -- a distinct
//      lemma sharing the root, same verb/verbal-noun split already used
//      for اِسْتَحَقَّ vs. حَقّ (ch9) and سَاقٍ vs. سَقَى-family (ch12).
//   -- حَفِظَ (qs-v2-c17-027, "to protect, guard") is a new verb lemma, kept
//      distinct from the already-taught adjective حَفِيظ (ch16, "watchful,
//      a careful guardian") though both share the root ح ف ظ.
//   -- مُنْكِر ("not recognizing, unaware") is the active participle of the
//      new verb أَنْكَرَ ("to deny, fail to recognize"), tagged as its own
//      lemma sharing the root ن ك ر -- same participle/verb split already
//      used for نَائِم/نَامَ, سَاجِد/سَجَدَ, سَاقٍ/سَقَى elsewhere in this course.
//   -- ﴿وَجَاءَ إِخْوَةُ يُوسُفَ فَدَخَلُوا عَلَيْهِ فَعَرَفَهُمْ وَهُمْ لَهُ مُنْكِرُونَ﴾
//      (Sūrat Yūsuf 12:58) is split into five <=2-token fragments
//      (qs-v2-c17-{018..022}) per the house convention for Qur'anic
//      quotations.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ, فِي, مِصْر, شَام,
//      أَخْبَرَ, يُوسُف, أَهْل, يَعْقُوب, رَحِيم, أَنَّ, جَوَاد, كَرِيم, هُوَ, عَلَى,
//      خَزَائِن, أَرْض, نَاس, ذَهَبَ, إِلَى, أَخَذَ, طَعَام, أَرْسَلَ, اِبْن, أَتَى, بَقِيَ,
//      عِنْدَ, وَالِد, لِأَنَّ, يُحِبُّ/أَحَبَّ, جِدّ, مَا, أَرَادَ, أَنْ, بَعُدَ, عَنْ, يَخَافُ/
//      خَافَ, كَمَا, تَوَجَّهَ, أَخ, لَا, يَعْرِفُ/عَرَفَ, الَّذِي, بِئْر, قَدْ, مَاتَ, كَيْفَ,
//      عَمِيق, غَابَة, مُوحِش, ذَلِكَ, لَيْل, مُظْلِم, دَخَلَ, لَكِنْ, لَكِنَّ, بَلْ, اللَّه,
//      أَلْقَى, قَتَلَ, قَالَ, لِ, شَيْء
//      are all already taught and NOT re-listed in newWords here.
//
// 8 new words (مَجَاعَة، ظَنَّ، هَؤُلَاءِ، مُنْكِر، أَنْكَرَ، قَتْل، حَفِظَ، فَضَحَ).
//
// Page footnote (book_note): the page 47 footnote glosses الطَّعَام as
// الْحُبُوب (grains) in this context.
export const CHAPTER = {
  id: 'ch17',
  title: { ar: 'جَاءَ إِخْوَةُ يُوسُفَ', en: "Yūsuf's Brothers Came" },
  newWords: ['مَجَاعَة', 'ظَنَّ', 'هَؤُلَاءِ', 'مُنْكِر', 'أَنْكَرَ', 'قَتْل', 'حَفِظَ', 'فَضَحَ'],
  lemmas: {
    'مَجَاعَة': { gloss: 'famine' },
    'ظَنَّ': { gloss: 'to think, suppose' },
    'هَؤُلَاءِ': { gloss: 'these' },
    'مُنْكِر': { gloss: 'not recognizing, unaware' },
    'أَنْكَرَ': { gloss: 'to deny, fail to recognize' },
    'قَتْل': { gloss: 'killing' },
    'حَفِظَ': { gloss: 'to protect, guard' },
    'فَضَحَ': { gloss: 'to expose, disgrace' },
  },
  paragraphs: [
    {
      en: 'There was a famine in Egypt and Syria, just as Yūsuf had foretold. The people of Syria heard, and Yaʿqūb heard, that in Egypt there was a merciful man, a generous and noble man, in charge of the treasuries of the land. People would go to him and take food, so Yaʿqūb sent his sons to Egypt to bring back food.',
      sentences: [
        {
          id: 'qs-v2-c17-001',
          ar: 'وَكَانَ فِي مِصْرَ وَالشَّامِ مَجَاعَةٌ كَمَا أَخْبَرَ يُوسُفُ.',
          en: 'There was a famine in Egypt and Syria, just as Yūsuf had foretold.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and there was' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'وَالشَّامِ', lemma: 'شَام', pos: 'proper', features: 'conj+def.gen', gloss: 'and Syria' },
            { surface: 'مَجَاعَةٌ', lemma: 'مَجَاعَة', pos: 'noun', features: 'indef.nom', root: 'ج و ع', gloss: 'famine' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'أَخْبَرَ', lemma: 'أَخْبَرَ', pos: 'verb', features: 'perf.3ms', root: 'خ ب ر', gloss: 'to inform, tell; had foretold' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c17-002',
          ar: 'وَسَمِعَ أَهْلُ الشَّامِ وَسَمِعَ يَعْقُوبُ',
          en: 'The people of Syria heard, and Yaʿqūb heard,',
          tokens: [
            { surface: 'وَسَمِعَ', lemma: 'سَمِعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س م ع', gloss: 'to hear; and heard' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', root: 'أ ه ل', gloss: 'people of' },
            { surface: 'الشَّامِ', lemma: 'شَام', pos: 'proper', features: 'def.gen', gloss: 'Syria' },
            { surface: 'وَسَمِعَ', lemma: 'سَمِعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س م ع', gloss: 'to hear; and heard' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: "Yaʿqūb" },
          ],
        },
        {
          id: 'qs-v2-c17-003',
          ar: 'أَنَّ فِي مِصْرَ رَجُلاً رَحِيماً.',
          en: 'that in Egypt there was a merciful man,',
          tokens: [
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'رَجُلاً', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', root: 'ر ج ل', gloss: 'a man' },
            { surface: 'رَحِيماً', lemma: 'رَحِيم', pos: 'adj', features: 'indef.acc', root: 'ر ح م', gloss: 'compassionate, merciful' },
          ],
        },
        {
          id: 'qs-v2-c17-004',
          ar: 'وَأَنَّ فِي مِصْرَ جَوَاداً كَرِيماً، وَهُوَ عَلَى خَزَائِنِ الأَرْضِ.',
          en: 'a generous and noble man, in charge of the treasuries of the land.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'جَوَاداً', lemma: 'جَوَاد', pos: 'adj', features: 'indef.acc', root: 'ج و د', gloss: 'generous' },
            { surface: 'كَرِيماً', lemma: 'كَرِيم', pos: 'adj', features: 'indef.acc', root: 'ك ر م', gloss: 'noble, generous' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'خَزَائِنِ', lemma: 'خَزَائِن', pos: 'noun', features: 'gen.constr', root: 'خ ز ن', gloss: 'the treasuries of' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', root: 'أ ر ض', gloss: 'the land' },
          ],
        },
        {
          id: 'qs-v2-c17-005',
          ar: 'وَكَانَ النَّاسُ يَذْهَبُونَ إِلَيْهِ وَيَأْخُذُونَ الطَّعَامَ',
          en: 'People would go to him and take food,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and were' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'يَذْهَبُونَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.3mp', gloss: 'to go; go' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'وَيَأْخُذُونَ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+impf.3mp', root: 'أ خ ذ', gloss: 'to take; and take' },
            { surface: 'الطَّعَامَ', lemma: 'طَعَام', pos: 'noun', features: 'def.acc', book_note: 'Page footnote glosses الطَّعَام here as الْحُبُوب, "grains."', gloss: 'the food' },
          ],
        },
        {
          id: 'qs-v2-c17-006',
          ar: 'وَأَرْسَلَ يَعْقُوبُ أَبْنَاءَهُ إِلَى مِصْرَ لِيَأْتُوا بِالطَّعَامِ.',
          en: 'so Yaʿqūb sent his sons to Egypt to bring back food.',
          tokens: [
            { surface: 'وَأَرْسَلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر س ل', gloss: 'to send; and sent' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: "Yaʿqūb" },
            { surface: 'أَبْنَاءَهُ', lemma: 'اِبْن', pos: 'noun', features: 'pl.acc+3ms', root: 'ب ن ي', gloss: 'his sons' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'لِيَأْتُوا', lemma: 'أَتَى', pos: 'verb', features: 'part+impf.3mp', root: 'أ ت ي', gloss: 'to come, bring; so that they might bring' },
            { surface: 'بِالطَّعَامِ', lemma: 'طَعَام', pos: 'noun', features: 'prep+def.gen', gloss: 'food' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا تَوَجَّهَ إِخْوَةُ يُوسُفَ إِلَى مِصْرَ؟',
          options: ['لِيَأْتُوا بِالطَّعَامِ بَعْدَ الْمَجَاعَةِ', 'لِيَزُورُوا الْمَلِكَ', 'لِيَعْمَلُوا فِي التِّجَارَةِ'],
          answer: 0,
          qEn: "Why did Yūsuf's brothers set out for Egypt?",
          optionsEn: ['To bring back food during the famine', 'To visit the king', 'To work in trade'],
        },
      ],
    },
    {
      en: 'Binyāmīn stayed behind with his father, because Yaʿqūb loved him greatly, and did not want him far from him; Yaʿqūb feared for him just as he had feared for Yūsuf. Yūsuf\'s brothers set out toward Yūsuf, not knowing he was their brother Yūsuf, not knowing he was the Yūsuf who had been in the well. They supposed he had died -- and how could he not have died, having been in the well?',
      sentences: [
        {
          id: 'qs-v2-c17-007',
          ar: 'وَبَقِيَ بِنْيَامِينُ عِنْدَ وَالِدِهِ لِأَنَّ يَعْقُوبَ كَانَ يُحِبُّهُ جِدًّا.',
          en: 'Binyāmīn stayed behind with his father, because Yaʿqūb loved him greatly,',
          tokens: [
            { surface: 'وَبَقِيَ', lemma: 'بَقِيَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ب ق ي', gloss: 'to remain, stay; and stayed' },
            { surface: 'بِنْيَامِينُ', lemma: 'بِنْيَامِين', pos: 'proper', features: 'nom', gloss: 'Binyāmīn (Benjamin)' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv', gloss: 'with, at' },
            { surface: 'وَالِدِهِ', lemma: 'وَالِد', pos: 'noun', features: 'gen+3ms', root: 'و ل د', gloss: 'his father' },
            { surface: 'لِأَنَّ', lemma: 'لِأَنَّ', pos: 'part', features: 'part', root: 'أ ن ن', gloss: 'because' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'acc', gloss: "Yaʿqūb" },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُحِبُّهُ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms+3ms', root: 'ح ب ب', gloss: 'to love; loved him' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, greatly' },
          ],
        },
        {
          id: 'qs-v2-c17-008',
          ar: 'وَمَا كَانَ يُرِيدُ أَنْ يَبْعُدَ عَنْهُ',
          en: 'and did not want him far from him;',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3ms', gloss: 'to want; want' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَبْعُدَ', lemma: 'بَعُدَ', pos: 'verb', features: 'impf.3ms', root: 'ب ع د', gloss: 'to be far; be far' },
            { surface: 'عَنْهُ', lemma: 'عَنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from him' },
          ],
        },
        {
          id: 'qs-v2-c17-009',
          ar: 'وَكَانَ يَعْقُوبُ يَخَافُ عَلَيْهِ كَمَا كَانَ يَخَافُ عَلَى يُوسُفَ.',
          en: 'Yaʿqūb feared for him just as he had feared for Yūsuf.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: "Yaʿqūb" },
            { surface: 'يَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3ms', root: 'خ و ف', gloss: 'to fear; feared' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3ms', root: 'خ و ف', gloss: 'to fear; feared' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c17-010',
          ar: 'وَتَوَجَّهَ إِخْوَةُ يُوسُفَ إِلَى يُوسُفَ',
          en: "Yūsuf's brothers set out toward Yūsuf,",
          tokens: [
            { surface: 'وَتَوَجَّهَ', lemma: 'تَوَجَّهَ', pos: 'verb', features: 'conj+perf.3ms', root: 'و ج ه', gloss: 'to turn towards, head towards; and headed towards' },
            { surface: 'إِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.nom.constr', root: 'أ خ و', gloss: 'brothers of' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c17-011',
          ar: 'وَهُمْ لَا يَعْرِفُونَ أَنَّهُ أَخُوهُمْ يُوسُفُ.',
          en: 'not knowing he was their brother Yūsuf,',
          tokens: [
            { surface: 'وَهُمْ', lemma: 'هُمْ', pos: 'noun', features: 'conj+3mp', gloss: 'while they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْرِفُونَ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3mp', gloss: 'to know, recognize; know' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'أَخُوهُمْ', lemma: 'أَخ', pos: 'noun', features: 'nom+3mp', root: 'أ خ و', gloss: 'their brother' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c17-012',
          ar: 'وَهُمْ لَا يَعْرِفُونَ أَنَّهُ يُوسُفُ الَّذِي كَانَ فِي الْبِئْرِ.',
          en: 'not knowing he was the Yūsuf who had been in the well.',
          tokens: [
            { surface: 'وَهُمْ', lemma: 'هُمْ', pos: 'noun', features: 'conj+3mp', gloss: 'while they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْرِفُونَ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3mp', gloss: 'to know, recognize; know' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'who, that (m.)' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; had been' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبِئْرِ', lemma: 'بِئْر', pos: 'noun', features: 'def.gen', root: 'ب أ ر', gloss: 'the well' },
          ],
        },
        {
          id: 'qs-v2-c17-013',
          ar: 'وَهُمْ يَظُنُّونَ أَنَّهُ قَدْ مَاتَ.',
          en: 'They supposed he had died --',
          tokens: [
            { surface: 'وَهُمْ', lemma: 'هُمْ', pos: 'noun', features: 'conj+3mp', gloss: 'and they' },
            { surface: 'يَظُنُّونَ', lemma: 'ظَنَّ', pos: 'verb', features: 'impf.3mp', root: 'ظ ن ن', gloss: 'to think, suppose; think' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed (already)' },
            { surface: 'مَاتَ', lemma: 'مَاتَ', pos: 'verb', features: 'perf.3ms', root: 'م و ت', gloss: 'to die; died' },
          ],
        },
        {
          id: 'qs-v2-c17-014',
          ar: 'وَكَيْفَ لَا يَمُوتُ وَقَدْ كَانَ فِي الْبِئْرِ؟',
          en: 'and how could he not have died, having been in the well?',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَمُوتُ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.3ms', root: 'م و ت', gloss: 'to die; would he die' },
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'when indeed' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; had been' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبِئْرِ', lemma: 'بِئْر', pos: 'noun', features: 'def.gen', root: 'ب أ ر', gloss: 'the well' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا لَمْ يَعْرِفِ الإِخْوَةُ يُوسُفَ؟',
          options: ['لِأَنَّهُمْ كَانُوا يَظُنُّونَ أَنَّهُ مَاتَ فِي الْبِئْرِ', 'لِأَنَّهُ كَانَ يَلْبَسُ قِنَاعاً', 'لِأَنَّهُمْ لَمْ يَرَوْهُ مِنْ قَبْلُ'],
          answer: 0,
          qEn: "Why didn't the brothers recognize Yūsuf?",
          optionsEn: ['Because they thought he had died in the well', 'Because he was wearing a mask', 'Because they had never seen him before'],
        },
      ],
    },
    {
      en: 'He had been in the well, and the well was deep; the well was in the forest, and the forest was eerie; and it happened at night, and the night was dark. \'And Yūsuf\'s brothers came Yūsuf, and they entered upon him, and he recognized them, while they, of him, were unaware.\'',
      sentences: [
        {
          id: 'qs-v2-c17-015',
          ar: 'كَانَ فِي الْبِئْرِ وَكَانَتِ الْبِئْرُ عَمِيقَةً.',
          en: 'He had been in the well, and the well was deep;',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; he was' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبِئْرِ', lemma: 'بِئْر', pos: 'noun', features: 'def.gen', root: 'ب أ ر', gloss: 'the well' },
            { surface: 'وَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'الْبِئْرُ', lemma: 'بِئْر', pos: 'noun', features: 'def.nom', root: 'ب أ ر', gloss: 'the well' },
            { surface: 'عَمِيقَةً', lemma: 'عَمِيق', pos: 'adj', features: 'indef.acc.f', root: 'ع م ق', gloss: 'deep' },
          ],
        },
        {
          id: 'qs-v2-c17-016',
          ar: 'وَكَانَتِ الْبِئْرُ فِي الْغَابَةِ، وَكَانَتِ الْغَابَةُ مُوحِشَةً.',
          en: 'the well was in the forest, and the forest was eerie;',
          tokens: [
            { surface: 'وَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'الْبِئْرُ', lemma: 'بِئْر', pos: 'noun', features: 'def.nom', root: 'ب أ ر', gloss: 'the well' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْغَابَةِ', lemma: 'غَابَة', pos: 'noun', features: 'def.gen', root: 'غ ي ب', gloss: 'the forest' },
            { surface: 'وَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'الْغَابَةُ', lemma: 'غَابَة', pos: 'noun', features: 'def.nom', root: 'غ ي ب', gloss: 'the forest' },
            { surface: 'مُوحِشَةً', lemma: 'مُوحِش', pos: 'adj', features: 'indef.acc.f', root: 'و ح ش', gloss: 'desolate, eerie' },
          ],
        },
        {
          id: 'qs-v2-c17-017',
          ar: 'وَكَانَ ذَلِكَ فِي اللَّيْلِ، وَكَانَ اللَّيْلُ مُظْلِماً.',
          en: 'and it happened at night, and the night was dark.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'اللَّيْلِ', lemma: 'لَيْل', pos: 'noun', features: 'def.gen', root: 'ل ي ل', gloss: 'the night' },
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'اللَّيْلُ', lemma: 'لَيْل', pos: 'noun', features: 'def.nom', root: 'ل ي ل', gloss: 'the night' },
            { surface: 'مُظْلِماً', lemma: 'مُظْلِم', pos: 'adj', features: 'indef.acc', root: 'ظ ل م', gloss: 'dark' },
          ],
        },
        {
          id: 'qs-v2-c17-018',
          ar: '﴿وَجَاءَ إِخْوَةُ﴾',
          en: "'And Yūsuf's brothers came",
          tokens: [
            { surface: 'وَجَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج ي أ', gloss: 'to come; and came' },
            { surface: 'إِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.nom.constr', root: 'أ خ و', gloss: 'brothers of' },
          ],
        },
        {
          id: 'qs-v2-c17-019',
          ar: '﴿يُوسُفَ فَدَخَلُوا﴾',
          en: 'Yūsuf, and they entered',
          tokens: [
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'فَدَخَلُوا', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+perf.3mp', root: 'د خ ل', gloss: 'to enter; and entered' },
          ],
        },
        {
          id: 'qs-v2-c17-020',
          ar: '﴿عَلَيْهِ فَعَرَفَهُمْ﴾',
          en: 'upon him, and he recognized them,',
          tokens: [
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
            { surface: 'فَعَرَفَهُمْ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to know, recognize; and recognized them' },
          ],
        },
        {
          id: 'qs-v2-c17-021',
          ar: '﴿وَهُمْ لَهُ﴾',
          en: 'while they, of him,',
          tokens: [
            { surface: 'وَهُمْ', lemma: 'هُمْ', pos: 'noun', features: 'conj+3mp', gloss: 'while they' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'of him' },
          ],
        },
        {
          id: 'qs-v2-c17-022',
          ar: '﴿مُنْكِرُونَ﴾.',
          en: "were unaware.'",
          tokens: [
            { surface: 'مُنْكِرُونَ', lemma: 'مُنْكِر', pos: 'noun', features: 'pl.nom', root: 'ن ك ر', gloss: 'not recognizing, unaware (ones)' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'They failed to recognize Yūsuf -- but Yūsuf did not fail to recognize them; rather, he recognized them. Yūsuf knew that these were the ones who had thrown him into the well, and that these were the ones who had wanted to kill him, but Allah had protected him. Yet Yūsuf said nothing to them, and did not expose them.',
      sentences: [
        {
          id: 'qs-v2-c17-023',
          ar: 'كَانُوا مُنْكِرِينَ لِيُوسُفَ لَا يَعْرِفُونَهُ،',
          en: 'They failed to recognize Yūsuf --',
          tokens: [
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'مُنْكِرِينَ', lemma: 'مُنْكِر', pos: 'noun', features: 'pl.acc', root: 'ن ك ر', gloss: 'not recognizing, unaware (ones)' },
            { surface: 'لِيُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'prep+gen', gloss: 'of Yūsuf' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْرِفُونَهُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3mp+3ms', gloss: 'to know, recognize; recognize him' },
          ],
        },
        {
          id: 'qs-v2-c17-024',
          ar: 'وَلَكِنْ مَا أَنْكَرَهُمْ يُوسُفُ بَلْ عَرَفَهُمْ.',
          en: 'but Yūsuf did not fail to recognize them; rather, he recognized them.',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أَنْكَرَهُمْ', lemma: 'أَنْكَرَ', pos: 'verb', features: 'perf.3ms+3mp', root: 'ن ك ر', gloss: 'to deny, fail to recognize; did not recognize them' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'عَرَفَهُمْ', lemma: 'عَرَفَ', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to know, recognize; recognized them' },
          ],
        },
        {
          id: 'qs-v2-c17-025',
          ar: 'عَرَفَ يُوسُفُ أَنَّ هَؤُلَاءِ هُمُ الَّذِينَ أَلْقَوْهُ فِي الْبِئْرِ.',
          en: 'Yūsuf knew that these were the ones who had thrown him into the well,',
          tokens: [
            { surface: 'عَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'perf.3ms', gloss: 'to know, recognize; knew' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'هُمُ', lemma: 'هُمْ', pos: 'noun', features: '3mp', gloss: 'they' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'who (pl.)' },
            { surface: 'أَلْقَوْهُ', lemma: 'أَلْقَى', pos: 'verb', features: 'perf.3mp+3ms', root: 'ل ق ي', gloss: 'to throw, cast; threw him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبِئْرِ', lemma: 'بِئْر', pos: 'noun', features: 'def.gen', root: 'ب أ ر', gloss: 'the well' },
          ],
        },
        {
          id: 'qs-v2-c17-026',
          ar: 'وَأَنَّ هَؤُلَاءِ هُمُ الَّذِينَ كَانُوا يُرِيدُونَ قَتْلَهُ',
          en: 'and that these were the ones who had wanted to kill him,',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'هُمُ', lemma: 'هُمْ', pos: 'noun', features: '3mp', gloss: 'they' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'who (pl.)' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; had been' },
            { surface: 'يُرِيدُونَ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3mp', gloss: 'to want; wanting' },
            { surface: 'قَتْلَهُ', lemma: 'قَتْل', pos: 'noun', features: 'acc+3ms', root: 'ق ت ل', gloss: 'to kill him' },
          ],
        },
        {
          id: 'qs-v2-c17-027',
          ar: 'وَلَكِنَّ اللَّهَ حَفِظَهُ.',
          en: 'but Allah had protected him.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part', gloss: 'but' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'حَفِظَهُ', lemma: 'حَفِظَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'ح ف ظ', gloss: 'to protect, guard; protected him' },
          ],
        },
        {
          id: 'qs-v2-c17-028',
          ar: 'وَلَكِنَّ يُوسُفَ لَمْ يَقُلْ لَهُمْ شَيْئاً وَلَمْ يَفْضَحْهُمْ.',
          en: 'Yet Yūsuf said nothing to them, and did not expose them.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part', gloss: 'but' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'did not' },
            { surface: 'يَقُلْ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', root: 'ق و ل', gloss: 'to say; say' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and did not' },
            { surface: 'يَفْضَحْهُمْ', lemma: 'فَضَحَ', pos: 'verb', features: 'impf.3ms+3mp', root: 'ف ض ح', gloss: 'to expose, disgrace; expose them' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ يُوسُفُ بَعْدَ أَنْ عَرَفَ إِخْوَتَهُ؟',
          options: ['لَمْ يَقُلْ لَهُمْ شَيْئاً وَلَمْ يَفْضَحْهُمْ', 'صَرَخَ عَلَيْهِمْ غَاضِباً', 'طَرَدَهُمْ مِنْ قَصْرِهِ'],
          answer: 0,
          qEn: 'What did Yūsuf do after he recognized his brothers?',
          optionsEn: ['He said nothing to them and did not expose them', 'He shouted at them angrily', 'He threw them out of his palace'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَهُمْ لَا يَعْرِفُونَ أَنَّهُ',
        post: 'يُوسُفُ.',
        en: 'not knowing that he was their brother Yūsuf.',
        options: ['أَخُوهُمْ', 'أَخَاهُمْ', 'إِخْوَتُهُمْ', 'أَخِيهِمْ'],
        answer: 0,
        rationales: [
          'Nominative -- خبر أنّ (predicate of أنّ), agreeing with the deferred subject يُوسُفُ.',
          'Accusative -- wrong case; the predicate of أنّ takes the nominative, not the accusative.',
          'Plural -- wrong number; refers to a single brother, Yūsuf.',
          'Genitive -- wrong case for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَتِ الْبِئْرُ فِي الْغَابَةِ، وَكَانَتِ الْغَابَةُ',
        post: '.',
        en: 'the well was in the forest, and the forest was eerie.',
        options: ['مُوحِشَةً', 'مُوحِشٌ', 'مُوحِشِينَ', 'مُوحِشَةٌ'],
        answer: 0,
        rationales: [
          'Accusative feminine -- predicate of كَانَتْ, agreeing with the feminine singular subject الْغَابَةُ.',
          'Masculine -- wrong gender; الْغَابَة is feminine.',
          'Plural -- wrong number; the subject is singular.',
          'Nominative -- wrong case; the predicate of كَانَ must be accusative.',
        ],
      },
      {
        type: 'cloze',
        pre: 'عَرَفَ يُوسُفُ أَنَّ هَؤُلَاءِ هُمُ الَّذِينَ',
        post: 'فِي الْبِئْرِ.',
        en: 'Yūsuf knew that these were the ones who had thrown him into the well.',
        options: ['أَلْقَوْهُ', 'أَلْقَاهُ', 'يُلْقُونَهُ', 'أَلْقَيْتُهُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural perfect -- agrees with الَّذِينَ (plural "who"), with the object suffix هُ for Yūsuf.',
          '3rd masculine singular -- wrong number; الَّذِينَ is plural.',
          'Imperfect tense -- wrong tense; this recalls a completed past event.',
          '1st singular -- I, not matching الَّذِينَ.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَحْفَظُ السِّرَّ',
        pre: '',
        post: 'السِّرَّ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَحْفَظُ', 'يَحْفَظُ', 'تَحْفَظُ', 'نَحْفَظُ'],
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
        base: 'يَحْفَظُ السِّرَّ',
        pre: '',
        post: 'السِّرَّ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَحْفَظُ', 'أَحْفَظُ', 'تَحْفَظُ', 'يَحْفَظُونَ'],
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
        base: 'يَحْفَظُ السِّرَّ',
        pre: '',
        post: 'السِّرَّ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَحْفَظُونَ', 'يَحْفَظُ', 'نَحْفَظُ', 'تَحْفَظُونَ'],
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

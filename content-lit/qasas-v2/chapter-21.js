// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 21 -- إِلَى
// يَعْقُوبَ. Printed pages 54 (from the heading, right after ch20's closing
// reflection) - 55 (ending right before ch22's heading «يَظْهَرُ السِّرُّ»,
// which opens page 56). Transcribed by hand from the scan (vision OCR,
// 300dpi render) against ../CHAPTER-FORMAT.md.
//
// Grammar / lexical notes:
//   -- This chapter is largely reflective/interior rather than narrated
//      dialogue -- the brothers' dread of facing Yaʿqūb, the eldest
//      brother's refusal to return at all, and then a run of parallel
//      "إِنَّ اللَّهَ لَا يَفْجَعُهُ ..." clauses giving Yaʿqūb's own reasoning
//      (qs-v2-c21-012 through 019) -- similar in register to the sermon
//      chapters (ch9-11), so a comparably dense new-word set even without
//      much dialogue.
//   -- Standalone participle lemma: مُمْتَحِن (qs-v2-c21-011, participle of
//      the already-taught اِمْتَحَنَ, ch18) follows the same convention as
//      حَافِظ/كَاذِب/سَارِق/مُؤَذِّن/رَاجِع/مُحْسِن (see qasas-v2 ch3/ch8/ch20).
//   -- خَفِيَّةً / مَخْفِيَّةً (qs-v2-c21-016/017) are kept as two distinct new
//      lemmas (خَفِيّ, adjective pattern فَعِيل, vs. مَخْفِيّ, passive-
//      participle pattern مَفْعُول) rather than merged into one, since the
//      page itself pairs them in parallel ("يَداً خَفِيَّةً" / "حِكْمَةً
//      مَخْفِيَّةً") specifically to contrast the two hidden-ness patterns --
//      genuine pedagogical value in keeping both.
//   -- لَمْ يَزَلْ (qs-v2-c21-018) is the idiom "continues to, keeps on" --
//      لَمْ (already taught) + يَزَلْ, jussive of the new lemma زَالَ ("to
//      cease"); negated, the pair together means the opposite of ceasing.
//   -- كَيُوسُفَ (qs-v2-c21-015) fuses the comparative كَ ("like, as") onto
//      the already-taught proper noun يُوسُف as a leading prep+ atom, same
//      as any other single-letter proclitic (see house convention) --
//      does not need its own lemma entry since the atom is generic.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): تَحَيَّرَ, الإِخْوَة, كَيْفَ,
//      رَجَعَ, إِلَى, أَب, مَاذَا, قَالَ, لِ, أَمْسِ, فِي, يُوسُف, الْيَوْم, بِنْيَامِين,
//      أَمَّا, كَبِير, أَبَى, أَنْ, يَعْقُوب, أَخ, سَرَقَ, مَا, إِلَّا, بِ, عَلِمَ, كَانَ,
//      حَافِظ (qasas-v2 ch3), لَمَّا, سَمِعَ, قِصَّة, اللَّه, يَد, اِمْتَحَنَ, أَنْتُمْ (2mp
//      atom, not needed here but noted for consistency), إِنَّ, هَذَا, ذَلِكَ,
//      عَبْد, ثُمَّ, أَنْعَمَ, اِبْن, مِصْرَ, أَيْضًا, قَدْ, قَبْلَ, اِثْنَانِ, لَا, يَكُونُ/كَانَ,
//      هُنَا, اطْمَأَنَّ, أَتَى, هُوَ, عَلِيم
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 15 new words (فَكَّرَ، فَجَعَ، شَهِدَ، غَيْب، جَمَعَ، مُصِيبَة، خَفِيّ، مَخْفِيّ،
// حِكْمَة، زَالَ، سَرَّ، ثَالِث، عَسَى، حَكِيم، مُمْتَحِن).
//
// No page footnotes (book_note) on these pages; the circled ayah numbers
// (٨١، ٨٣) are the standard Sūrat Yūsuf verse numbers and are not
// transcribed as text/tokens.
export const CHAPTER = {
  id: 'ch21',
  title: { ar: 'إِلَى يَعْقُوبَ', en: 'Back to Yaʿqūb' },
  newWords: [
    'فَكَّرَ', 'فَجَعَ', 'شَهِدَ', 'غَيْب', 'جَمَعَ', 'مُصِيبَة', 'خَفِيّ', 'مَخْفِيّ',
    'حِكْمَة', 'زَالَ', 'سَرَّ', 'ثَالِث', 'عَسَى', 'حَكِيم', 'مُمْتَحِن',
  ],
  lemmas: {
    فَكَّرَ: { gloss: 'to think, ponder' },
    فَجَعَ: { gloss: 'to bereave, strike with grief or loss' },
    شَهِدَ: { gloss: 'to witness, testify' },
    غَيْب: { gloss: 'the unseen, the hidden' },
    جَمَعَ: { gloss: 'to gather, combine' },
    مُصِيبَة: { gloss: 'calamity, affliction' },
    خَفِيّ: { gloss: 'hidden' },
    مَخْفِيّ: { gloss: 'concealed, hidden (by someone)' },
    حِكْمَة: { gloss: 'wisdom' },
    زَالَ: { gloss: 'to cease, stop (with لَمْ: to continue, keep on)' },
    سَرَّ: { gloss: 'to please, gladden' },
    ثَالِث: { gloss: 'third' },
    عَسَى: { gloss: 'perhaps, it may be that' },
    حَكِيم: { gloss: 'All-Wise' },
    مُمْتَحِن: { gloss: 'tester, one who tests' },
  },
  paragraphs: [
    {
      en: 'The brothers were bewildered -- how could they return to their father?! The brothers wondered what they would say to their father! They had bereaved him yesterday of Yūsuf -- would they bereave him today of Binyāmīn too! As for their eldest, he refused to return to Yaʿqūb, and said to his brothers: "Return to your father and say: O our father, your son has stolen, and we testify only to what we knew, and we were not keepers of the unseen."',
      sentences: [
        {
          id: 'qs-v2-c21-001',
          ar: 'وَتَحَيَّرَ الإِخْوَةُ كَيْفَ يَرْجِعُونَ إِلَى أَبِيهِمْ؟!',
          en: 'The brothers were bewildered -- how could they return to their father?!',
          tokens: [
            { surface: 'وَتَحَيَّرَ', lemma: 'تَحَيَّرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be bewildered; and were bewildered' },
            { surface: 'الإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'يَرْجِعُونَ', lemma: 'رَجَعَ', pos: 'verb', features: 'impf.3mp', root: 'ر ج ع', gloss: 'to return; they return' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أَبِيهِمْ', lemma: 'أَب', pos: 'noun', features: 'gen+3mp', root: 'أ ب و', gloss: 'their father' },
          ],
        },
        {
          id: 'qs-v2-c21-002',
          ar: 'وَفَكَّرَ الإِخْوَةُ مَاذَا يَقُولُونَ لأَبِيهِمْ؟!',
          en: 'The brothers wondered what they would say to their father!',
          tokens: [
            { surface: 'وَفَكَّرَ', lemma: 'فَكَّرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to think, ponder; and thought' },
            { surface: 'الإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3mp', root: 'ق و ل', gloss: 'to say; they say' },
            { surface: 'لأَبِيهِمْ', lemma: 'أَب', pos: 'noun', features: 'prep+gen+3mp', root: 'أ ب و', gloss: 'to their father' },
          ],
        },
        {
          id: 'qs-v2-c21-003',
          ar: 'إِنَّهُمْ فَجَعُوهُ أَمْسِ فِي يُوسُفَ،',
          en: 'They had bereaved him yesterday of Yūsuf --',
          tokens: [
            { surface: 'إِنَّهُمْ', lemma: 'إِنَّ', pos: 'part', features: 'part+3mp', gloss: 'indeed they' },
            { surface: 'فَجَعُوهُ', lemma: 'فَجَعَ', pos: 'verb', features: 'perf.3mp+3ms', gloss: 'to bereave; they bereaved him' },
            { surface: 'أَمْسِ', lemma: 'أَمْسِ', pos: 'adv', features: 'adv', gloss: 'yesterday' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'of, over' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c21-004',
          ar: 'أَفَيَفْجَعُونَهُ الْيَوْمَ فِي بِنْيَامِينَ!',
          en: 'would they bereave him today of Binyāmīn too!',
          tokens: [
            { surface: 'أَفَيَفْجَعُونَهُ', lemma: 'فَجَعَ', pos: 'verb', features: 'part+conj+impf.3mp+3ms', gloss: 'to bereave; so would they bereave him' },
            { surface: 'الْيَوْمَ', lemma: 'الْيَوْم', pos: 'noun', features: 'def.acc', gloss: 'today' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'of, over' },
            { surface: 'بِنْيَامِينَ', lemma: 'بِنْيَامِين', pos: 'proper', features: 'gen', gloss: 'Binyāmīn' },
          ],
        },
        {
          id: 'qs-v2-c21-005',
          ar: 'أَمَّا كَبِيرُهُمْ فَأَبَى أَنْ يَرْجِعَ إِلَى يَعْقُوبَ وَقَالَ لإِخْوَتِهِ:',
          en: 'As for their eldest, he refused to return to Yaʿqūb, and said to his brothers:',
          tokens: [
            { surface: 'أَمَّا', lemma: 'أَمَّا', pos: 'conj', features: 'conj', gloss: 'as for' },
            { surface: 'كَبِيرُهُمْ', lemma: 'كَبِير', pos: 'adj', features: 'nom+3mp', gloss: 'their eldest' },
            { surface: 'فَأَبَى', lemma: 'أَبَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to refuse; refused' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَرْجِعَ', lemma: 'رَجَعَ', pos: 'verb', features: 'impf.3ms', root: 'ر ج ع', gloss: 'to return; he return' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'gen', gloss: 'Yaʿqūb' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'لإِخْوَتِهِ', lemma: 'أَخ', pos: 'noun', features: 'prep+pl.gen+3ms', root: 'أ خ و', gloss: 'to his brothers' },
          ],
        },
        {
          id: 'qs-v2-c21-006',
          ar: '﴿ارْجِعُوا إِلَى أَبِيكُمْ فَقُولُوا يَا أَبَانَا',
          en: '"Return to your father and say: O our father,',
          tokens: [
            { surface: 'ارْجِعُوا', lemma: 'رَجَعَ', pos: 'verb', features: 'imp.2mp', root: 'ر ج ع', gloss: 'to return; return!' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أَبِيكُمْ', lemma: 'أَب', pos: 'noun', features: 'gen+2mp', root: 'أ ب و', gloss: 'your father' },
            { surface: 'فَقُولُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+imp.2mp', root: 'ق و ل', gloss: 'to say; and say!' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أَبَانَا', lemma: 'أَب', pos: 'noun', features: 'acc+1p', root: 'أ ب و', gloss: 'our father' },
          ],
        },
        {
          id: 'qs-v2-c21-007',
          ar: 'إِنَّ ابْنَكَ سَرَقَ وَمَا شَهِدْنَا إِلَّا',
          en: 'your son has stolen, and we testify only',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ابْنَكَ', lemma: 'اِبْن', pos: 'noun', features: 'acc+2ms', root: 'ب ن و', gloss: 'your son' },
            { surface: 'سَرَقَ', lemma: 'سَرَقَ', pos: 'verb', features: 'perf.3ms', root: 'س ر ق', gloss: 'to steal; stole' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'شَهِدْنَا', lemma: 'شَهِدَ', pos: 'verb', features: 'perf.1p', gloss: 'to witness, testify; we testified' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, only' },
          ],
        },
        {
          id: 'qs-v2-c21-008',
          ar: 'بِمَا عَلِمْنَا وَمَا كُنَّا لِلْغَيْبِ حَافِظِينَ﴾.',
          en: 'to what we knew, and we were not keepers of the unseen."',
          tokens: [
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'to what' },
            { surface: 'عَلِمْنَا', lemma: 'عَلِمَ', pos: 'verb', features: 'perf.1p', gloss: 'to know; we knew' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'كُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'perf.1p', root: 'ك و ن', gloss: 'to be; we were' },
            { surface: 'لِلْغَيْبِ', lemma: 'غَيْب', pos: 'noun', features: 'prep+def.gen', gloss: 'of the unseen' },
            { surface: 'حَافِظِينَ', lemma: 'حَافِظ', pos: 'noun', features: 'pl.indef.acc', root: 'ح ف ظ', gloss: 'keepers, guardians' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا رَفَضَ الابْنُ الْكَبِيرُ أَنْ يَرْجِعَ إِلَى يَعْقُوبَ؟',
          options: ['خَجِلاً مِنْ أَنْ يُوَاجِهَهُ بَعْدَ ضَيَاعِ بِنْيَامِينَ', 'لِأَنَّهُ وَجَدَ عَمَلاً فِي مِصْرَ', 'لِأَنَّ الْعَزِيزَ مَنَعَهُ مِنَ السَّفَرِ'],
          answer: 0,
          qEn: 'Why did the eldest son refuse to go back to Yaʿqūb?',
          optionsEn: ["Ashamed to face him after losing Binyāmīn too", 'Because he had found work in Egypt', 'Because al-ʿAzīz forbade him to travel'],
        },
      ],
    },
    {
      en: 'When Yaʿqūb heard the account, he knew that Allah had a hand in that, and that Allah was testing him. Yesterday he was bereaved of Yūsuf, and today he is bereaved of Binyāmīn -- but Allah does not gather two calamities upon him, Allah does not bereave him of two sons. Allah does not bereave him of two sons like Yūsuf and Binyāmīn. Allah has a hidden hand in that. Allah has a concealed wisdom in that. Allah continues to test His servants,',
      sentences: [
        {
          id: 'qs-v2-c21-009',
          ar: 'وَلَمَّا سَمِعَ يَعْقُوبُ الْقِصَّةَ عَلِمَ',
          en: 'When Yaʿqūb heard the account, he knew',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'سَمِعَ', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.3ms', root: 'س م ع', gloss: 'to hear; heard' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'الْقِصَّةَ', lemma: 'قِصَّة', pos: 'noun', features: 'def.acc', root: 'ق ص ص', gloss: 'the account, the story' },
            { surface: 'عَلِمَ', lemma: 'عَلِمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to know; he knew' },
          ],
        },
        {
          id: 'qs-v2-c21-010',
          ar: 'أَنَّ لِلَّهِ يَداً فِي ذَلِكَ',
          en: 'that Allah had a hand in that,',
          tokens: [
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'Allah has' },
            { surface: 'يَداً', lemma: 'يَد', pos: 'noun', features: 'indef.acc', gloss: 'a hand' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v2-c21-011',
          ar: 'وَأَنَّ اللَّهَ مُمْتَحِنُهُ.',
          en: 'and that Allah was testing him.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'conj', features: 'conj+conj', gloss: 'and that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'مُمْتَحِنُهُ', lemma: 'مُمْتَحِن', pos: 'noun', features: 'nom+3ms', gloss: 'his tester' },
          ],
        },
        {
          id: 'qs-v2-c21-012',
          ar: 'أَمْسِ فُجِعَ فِي يُوسُفَ وَالْيَوْمَ يُفْجَعُ فِي بِنْيَامِينَ',
          en: 'Yesterday he was bereaved of Yūsuf, and today he is bereaved of Binyāmīn --',
          tokens: [
            { surface: 'أَمْسِ', lemma: 'أَمْسِ', pos: 'adv', features: 'adv', gloss: 'yesterday' },
            { surface: 'فُجِعَ', lemma: 'فَجَعَ', pos: 'verb', features: 'perf.pass.3ms', gloss: 'to bereave; he was bereaved' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'of, over' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'وَالْيَوْمَ', lemma: 'الْيَوْم', pos: 'noun', features: 'conj+def.acc', gloss: 'and today' },
            { surface: 'يُفْجَعُ', lemma: 'فَجَعَ', pos: 'verb', features: 'impf.pass.3ms', gloss: 'to bereave; he is bereaved' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'of, over' },
            { surface: 'بِنْيَامِينَ', lemma: 'بِنْيَامِين', pos: 'proper', features: 'gen', gloss: 'Binyāmīn' },
          ],
        },
        {
          id: 'qs-v2-c21-013',
          ar: 'إِنَّ اللَّهَ لَا يَجْمَعُ عَلَيْهِ مُصِيبَتَيْنِ،',
          en: 'but Allah does not gather two calamities upon him,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَجْمَعُ', lemma: 'جَمَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to gather; he gather' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
            { surface: 'مُصِيبَتَيْنِ', lemma: 'مُصِيبَة', pos: 'noun', features: 'du.indef.acc', gloss: 'two calamities' },
          ],
        },
        {
          id: 'qs-v2-c21-014',
          ar: 'إِنَّ اللَّهَ لَا يَفْجَعُهُ فِي ابْنَيْنِ.',
          en: 'Allah does not bereave him of two sons.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَفْجَعُهُ', lemma: 'فَجَعَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to bereave; he bereave him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'ابْنَيْنِ', lemma: 'اِبْن', pos: 'noun', features: 'du.indef.gen', root: 'ب ن و', gloss: 'two sons' },
          ],
        },
        {
          id: 'qs-v2-c21-015',
          ar: 'إِنَّ اللَّهَ لَا يَفْجَعُهُ فِي ابْنَيْنِ كَيُوسُفَ وَبِنْيَامِينَ.',
          en: 'Allah does not bereave him of two sons like Yūsuf and Binyāmīn.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَفْجَعُهُ', lemma: 'فَجَعَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to bereave; he bereave him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'ابْنَيْنِ', lemma: 'اِبْن', pos: 'noun', features: 'du.indef.gen', root: 'ب ن و', gloss: 'two sons' },
            { surface: 'كَيُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'prep+gen', gloss: 'like Yūsuf' },
            { surface: 'وَبِنْيَامِينَ', lemma: 'بِنْيَامِين', pos: 'proper', features: 'conj+gen', gloss: 'and Binyāmīn' },
          ],
        },
        {
          id: 'qs-v2-c21-016',
          ar: 'إِنَّ لِلَّهِ فِي ذَلِكَ يَداً خَفِيَّةً.',
          en: 'Allah has a hidden hand in that.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'Allah has' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'يَداً', lemma: 'يَد', pos: 'noun', features: 'indef.acc', gloss: 'a hand' },
            { surface: 'خَفِيَّةً', lemma: 'خَفِيّ', pos: 'adj', features: 'indef.acc.f', gloss: 'hidden' },
          ],
        },
        {
          id: 'qs-v2-c21-017',
          ar: 'إِنَّ لِلَّهِ فِي ذَلِكَ حِكْمَةً مَخْفِيَّةً.',
          en: 'Allah has a concealed wisdom in that.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'Allah has' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'حِكْمَةً', lemma: 'حِكْمَة', pos: 'noun', features: 'indef.acc', gloss: 'a wisdom' },
            { surface: 'مَخْفِيَّةً', lemma: 'مَخْفِيّ', pos: 'adj', features: 'indef.acc.f', gloss: 'concealed' },
          ],
        },
        {
          id: 'qs-v2-c21-018',
          ar: 'إِنَّ اللَّهَ لَمْ يَزَلْ يَمْتَحِنُ عِبَادَهُ',
          en: 'Allah continues to test His servants,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'did not (with يَزَلْ: continues to)' },
            { surface: 'يَزَلْ', lemma: 'زَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to cease; cease (continues to)' },
            { surface: 'يَمْتَحِنُ', lemma: 'اِمْتَحَنَ', pos: 'verb', features: 'impf.3ms', gloss: 'to test; he test' },
            { surface: 'عِبَادَهُ', lemma: 'عَبْد', pos: 'noun', features: 'pl.acc+3ms', gloss: 'his servants' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ فَسَّرَ يَعْقُوبُ مَا حَدَثَ لِبِنْيَامِينَ؟',
          options: ['رَأَى فِيهِ يَداً خَفِيَّةً وَحِكْمَةً مِنَ اللَّهِ', 'ظَنَّ أَنَّ الإِخْوَةَ كَذَبُوا عَلَيْهِ', 'قَرَّرَ أَلَّا يُصَدِّقَ الْقِصَّةَ أَبَداً'],
          answer: 0,
          qEn: 'How did Yaʿqūb interpret what had happened to Binyāmīn?',
          optionsEn: ["He saw in it a hidden hand and wisdom from Allah", 'He assumed the brothers had lied to him', 'He decided never to believe the story'],
        },
      ],
    },
    {
      en: 'then gladdens them and blesses them. Now, the eldest son had stayed in Egypt and also refused to return to Canaan. Would he be bereaved a third time also, when he had already been bereaved before, of two? This cannot be. At this, Yaʿqūb was reassured, and said: "It may be that Allah will bring them all back to me -- He is the All-Knowing, the All-Wise."',
      sentences: [
        {
          id: 'qs-v2-c21-019',
          ar: 'ثُمَّ يَسُرُّهُمْ وَيُنْعِمُ عَلَيْهِمْ.',
          en: 'then gladdens them and blesses them.',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'يَسُرُّهُمْ', lemma: 'سَرَّ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to please, gladden; he gladden them' },
            { surface: 'وَيُنْعِمُ', lemma: 'أَنْعَمَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to bless, favor; and he bless' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
          ],
        },
        {
          id: 'qs-v2-c21-020',
          ar: 'ثُمَّ إِنَّ الابْنَ الْكَبِيرَ بَقِيَ فِي مِصْرَ',
          en: 'Now, the eldest son had stayed in Egypt',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then, now' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الابْنَ', lemma: 'اِبْن', pos: 'noun', features: 'def.acc', root: 'ب ن و', gloss: 'the son' },
            { surface: 'الْكَبِيرَ', lemma: 'كَبِير', pos: 'adj', features: 'def.acc', gloss: 'the eldest' },
            { surface: 'بَقِيَ', lemma: 'بَقِيَ', pos: 'verb', features: 'perf.3ms', root: 'ب ق ي', gloss: 'to stay, remain; stayed' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْرَ', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v2-c21-021',
          ar: 'وَأَبَى أَيْضًا أَنْ يَرْجِعَ إِلَى كَنْعَانَ.',
          en: 'and also refused to return to Canaan.',
          tokens: [
            { surface: 'وَأَبَى', lemma: 'أَبَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to refuse; and refused' },
            { surface: 'أَيْضًا', lemma: 'أَيْضًا', pos: 'adv', features: 'adv', gloss: 'also' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَرْجِعَ', lemma: 'رَجَعَ', pos: 'verb', features: 'impf.3ms', root: 'ر ج ع', gloss: 'to return; he return' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'كَنْعَانَ', lemma: 'كَنْعَان', pos: 'proper', features: 'gen', gloss: 'Canaan' },
          ],
        },
        {
          id: 'qs-v2-c21-022',
          ar: 'أَفَيُفْجَعُ فِي الثَّالِثِ أَيْضًا وَقَدْ فُجِعَ',
          en: 'Would he be bereaved a third time also, when he had already been bereaved',
          tokens: [
            { surface: 'أَفَيُفْجَعُ', lemma: 'فَجَعَ', pos: 'verb', features: 'part+conj+impf.pass.3ms', gloss: 'to bereave; so would he be bereaved' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'الثَّالِثِ', lemma: 'ثَالِث', pos: 'adj', features: 'def.gen', gloss: 'the third' },
            { surface: 'أَيْضًا', lemma: 'أَيْضًا', pos: 'adv', features: 'adv', gloss: 'also' },
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'when already' },
            { surface: 'فُجِعَ', lemma: 'فَجَعَ', pos: 'verb', features: 'perf.pass.3ms', gloss: 'to bereave; he was bereaved' },
          ],
        },
        {
          id: 'qs-v2-c21-023',
          ar: 'مِنْ قَبْلُ فِي اثْنَيْنِ.',
          en: 'before, of two?',
          tokens: [
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَبْلُ', lemma: 'قَبْلَ', pos: 'adv', features: 'adv', gloss: 'before, previously' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'اثْنَيْنِ', lemma: 'اِثْنَانِ', pos: 'num', features: 'indef.gen', gloss: 'two' },
          ],
        },
        {
          id: 'qs-v2-c21-024',
          ar: 'إِنَّ هَذَا لَا يَكُونُ.',
          en: 'This cannot be.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; it be' },
          ],
        },
        {
          id: 'qs-v2-c21-025',
          ar: 'وَهُنَا اطْمَأَنَّ يَعْقُوبُ وَقَالَ:',
          en: 'At this, Yaʿqūb was reassured, and said:',
          tokens: [
            { surface: 'وَهُنَا', lemma: 'هُنَا', pos: 'adv', features: 'conj+adv', gloss: 'and here, at this' },
            { surface: 'اطْمَأَنَّ', lemma: 'اِطْمَأَنَّ', pos: 'verb', features: 'perf.3ms', gloss: 'to feel reassured; was reassured' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v2-c21-026',
          ar: '﴿عَسَى اللَّهُ أَنْ يَأْتِيَنِي بِهِمْ جَمِيعًا',
          en: '"It may be that Allah will bring them all back to me --',
          tokens: [
            { surface: 'عَسَى', lemma: 'عَسَى', pos: 'verb', features: 'perf.3ms', gloss: 'perhaps, it may be that' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَأْتِيَنِي', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms+1s', gloss: 'to come, bring; he bring to me' },
            { surface: 'بِهِمْ', lemma: 'بِ', pos: 'prep', features: 'prep+3mp', gloss: 'with them' },
            { surface: 'جَمِيعًا', lemma: 'جَمِيع', pos: 'noun', features: 'indef.acc', root: 'ج م ع', gloss: 'all together' },
          ],
        },
        {
          id: 'qs-v2-c21-027',
          ar: 'إِنَّهُ هُوَ الْعَلِيمُ الْحَكِيمُ﴾.',
          en: 'He is the All-Knowing, the All-Wise."',
          tokens: [
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3ms', gloss: 'he' },
            { surface: 'الْعَلِيمُ', lemma: 'عَلِيم', pos: 'adj', features: 'def.nom', gloss: 'the All-Knowing' },
            { surface: 'الْحَكِيمُ', lemma: 'حَكِيم', pos: 'adj', features: 'def.nom', gloss: 'the All-Wise' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا خَتَمَ يَعْقُوبُ كَلَامَهُ بَعْدَ أَنِ اطْمَأَنَّ؟',
          options: ['بِرَجَاءِ أَنْ يَرُدَّ اللَّهُ إِلَيْهِ أَبْنَاءَهُ جَمِيعاً', 'بِدُعَاءٍ عَلَى الْعَزِيزِ', 'بِطَلَبِ الذَّهَابِ بِنَفْسِهِ إِلَى مِصْرَ'],
          answer: 0,
          qEn: "What did Yaʿqūb close his words with, once reassured?",
          optionsEn: ['Hope that Allah would return all his sons to him', 'A prayer against al-ʿAzīz', "A request to go to Egypt himself"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'إِنَّ اللَّهَ لَا',
        post: 'عَلَيْهِ مُصِيبَتَيْنِ.',
        en: 'Allah does not gather two calamities upon him.',
        options: ['يَجْمَعُ', 'جَمَعَ', 'يُجْمَعُ', 'اِجْمَعْ'],
        answer: 0,
        rationales: [
          'Imperfect indicative -- a general, ongoing truth, matching the taught pattern لَا + imperfect.',
          'Perfect -- wrong tense; this is a timeless statement, not a completed past action.',
          'Passive -- wrong voice; Allah is the one gathering (or not), not the one being gathered.',
          'Imperative -- wrong mood; this is a statement, not a command.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنَّ اللَّهَ لَمْ',
        post: 'يَمْتَحِنُ عِبَادَهُ ثُمَّ يَسُرُّهُمْ.',
        en: 'Allah continues to test His servants, then gladdens them.',
        options: ['يَزَلْ', 'يَزُولُ', 'زَالَ', 'تَزَلْ'],
        answer: 0,
        rationales: [
          'Jussive after لَمْ -- matches the taught idiom لَمْ يَزَلْ, "continues to."',
          'Indicative -- wrong mood; لَمْ requires the jussive.',
          'Perfect -- wrong tense; لَمْ requires an imperfect (jussive) verb.',
          '2nd/3rd feminine -- wrong gender/person; the subject اللَّه is masculine.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ يَعْقُوبُ: عَسَى اللَّهُ أَنْ',
        post: 'بِهِمْ جَمِيعًا.',
        en: 'Yaʿqūb said: "It may be that Allah will bring them all back to me."',
        options: ['يَأْتِيَنِي', 'يَأْتِينِي', 'أَتَانِي', 'يَأْتِيكُمْ'],
        answer: 0,
        rationales: [
          'Subjunctive after أَنْ + 1st singular object suffix -- matches the taught pattern.',
          'Indicative -- wrong mood; أَنْ requires the subjunctive.',
          'Perfect -- wrong tense; عَسَى ... أَنْ takes a subjunctive imperfect.',
          'Wrong object suffix -- "to you all," not "to me."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَمْتَحِنُ اللَّهُ عِبَادَهُ',
        pre: '',
        post: 'عِبَادَهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَمْتَحِنُ', 'يَمْتَحِنُ', 'تَمْتَحِنُ', 'نَمْتَحِنُ'],
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
        base: 'يَمْتَحِنُ اللَّهُ عِبَادَهُ',
        pre: '',
        post: 'عِبَادَهُ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَمْتَحِنُ', 'أَمْتَحِنُ', 'تَمْتَحِنُ', 'يَمْتَحِنُونَ'],
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
        base: 'يَمْتَحِنُ اللَّهُ عِبَادَهُ',
        pre: '',
        post: 'عِبَادَهُ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَمْتَحِنُ', 'يَمْتَحِنُ', 'أَمْتَحِنُ', 'نَمْتَحِنُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

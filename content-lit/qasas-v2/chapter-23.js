// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 23 -- يُوسُفُ
// يُرْسِلُ إِلَى يَعْقُوبَ. Printed pages 58 (from the heading, right after
// ch22's closing forgiveness scene higher up the same page) - 59 (ending
// right before ch24's heading «يَعْقُوبُ عِنْدَ يُوسُفَ», which opens partway
// down page 59). Transcribed by hand from the scan (vision OCR, 300dpi
// render) against ../CHAPTER-FORMAT.md. This is the shortest chapter's
// worth of source prose since ch14 -- Yūsuf's private grief at the
// separation, then his sending his shirt back with the brothers so Yaʿqūb
// may see again (Sūrat Yūsuf 12:93).
//
// Grammar / lexical notes:
//   -- Following ch14's precedent for sparse source material, the two long
//      printed sentences that carry internal commas are split at each
//      comma into their own sentence entries (qs-v2-c23-001/002 and
//      qs-v2-c23-005/006/007) rather than kept as one run-on entry -- this
//      matches how ch20-22 already split comma-joined coordinate clauses
//      (e.g. qs-v2-c22-036/037, qs-v2-c22-043/044) and comfortably clears
//      the validator's >=5 buildable-sentence floor (8 of 10 sentences
//      here are buildable).
//   -- ظَهَرَ ("to appear, come out") is new here despite being the verb in
//      ch22's own title «يَظْهَرُ السِّرُّ» -- titles are not tokenized, and a
//      corpus-wide grep confirms this is the first time the lemma is
//      actually tagged on a sentence token.
//   -- اِنْكَشَفَ (root ك ش ف) is a distinct new verb from ظَهَرَ -- both mean
//      roughly "come to light" but the page uses them as parallel synonyms
//      in the same rhetorical triplet (قَدِ انْكَشَفَ السِّرُّ، وَقَدْ ظَهَرَ
//      السِّرُّ) and each carries its own root, so both are tagged new.
//   -- تَقَرَّ عَيْنُ يَعْقُوبَ (qs-v2-c23-007) is the classical idiom "so that
//      Yaʿqūb's eye may be cooled/comforted" -- قَرَّ tagged as its own new
//      verb lemma (root ق ر ر) and عَيْن as its own new noun lemma, both
//      literal and glossed idiomatically in the sentence's en field.
//   -- بِقَمِيصِي (qs-v2-c23-009) reuses the already-taught noun lemma قَمِيص
//      (ch4/ch5) with a 1st-person possessive suffix; the بِ here is the
//      classical "go with X" = "take X" idiom, so the surface fuses as a
//      single token per the usual proclitic-fusion convention.
//   -- اذْهَبُوا and وَأْتُونِي (qs-v2-c23-009/010) are 2mp imperatives of the
//      already-taught verbs ذَهَبَ and أَتَى -- أَتَى's imperative was already
//      established with this exact gloss in ch14/ch18 (ائْتُونِي); ذَهَبَ's
//      imperative is tagged for the first time here, following the same
//      imp.2mp pattern already used throughout (ch2, ch11, ch13).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): اِشْتَاقَ (ch14/ch18),
//      يُوسُف، إِلَى، لِقَاء (ch14), يَعْقُوب، لَا، طَالَ (ch13), الآن (ch4)،
//      يَصْبِرُ/صَبَرَ (ch22), السِّرّ/سِرّ (ch22), الشَّرَاب/شَرَاب (qasas-v1
//      ch3/4), الطَّعَام/طَعَام (many chapters), أَب، اللَّه، أَنْ، يَعْقُوبُ، قَدْ،
//      كَانَ، مِنَ، الْحُزْن/حُزْن (ch5)، فَقَالَ/قَالَ، هَذَا، عَلَى، أَبِي، مَا (n/a
//      here), أَهْل (ch9), كَيْفَ (ch1 etc.), لِمَاذَا (ch2 etc.), أَرَادَ (ch5),
//      أَتَى (ch10, imperative already ch14/ch18), ذَهَبَ (imperative new,
//      see above)
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 12 new words (فِرَاق، طَابَ، اِنْكَشَفَ، ظَهَرَ، عَمِيَ، كَثْرَة، بُكَاء، وَجْه،
// بَصِير، أَجْمَع، قَرَّ، عَيْن).
//
// No page footnotes (book_note) on these pages; the circled ayah number
// (٩٣) is the standard Sūrat Yūsuf verse number and is not transcribed as
// text/tokens.
export const CHAPTER = {
  id: 'ch23',
  title: { ar: 'يُوسُفُ يُرْسِلُ إِلَى يَعْقُوبَ', en: 'Yūsuf Sends Word to Yaʿqūb' },
  newWords: [
    'فِرَاق', 'طَابَ', 'اِنْكَشَفَ', 'ظَهَرَ', 'عَمِيَ', 'كَثْرَة', 'بُكَاء',
    'وَجْه', 'بَصِير', 'أَجْمَع', 'قَرَّ', 'عَيْن',
  ],
  lemmas: {
    فِرَاق: { gloss: 'separation, parting' },
    طَابَ: { gloss: 'to be good, pleasant' },
    اِنْكَشَفَ: { gloss: 'to be uncovered, revealed, come to light' },
    ظَهَرَ: { gloss: 'to appear, become clear, come out' },
    عَمِيَ: { gloss: 'to become blind' },
    كَثْرَة: { gloss: 'abundance, much (of)' },
    بُكَاء: { gloss: 'weeping, crying' },
    وَجْه: { gloss: 'face' },
    بَصِير: { gloss: 'seeing, sighted' },
    أَجْمَع: { gloss: 'all together, altogether' },
    قَرَّ: { gloss: 'to be cool, settled (idiom: to be comforted, at ease)' },
    عَيْن: { gloss: 'eye' },
  },
  paragraphs: [
    {
      en: "Yūsuf's longing for his father has grown unbearable now that the secret is out -- how could he still be patient, when neither food nor drink nor sleep has been pleasant even to Yaʿqūb, who has wept himself blind with grief? So Yūsuf sends his own shirt back with the brothers: cast it over our father's face and he will see again, he tells them, and bring me your whole family, all together.",
      sentences: [
        {
          id: 'qs-v2-c23-001',
          ar: 'وَاشْتَاقَ يُوسُفُ إِلَى لِقَاءِ يَعْقُوبَ،',
          en: 'Yūsuf longed to meet Yaʿqūb,',
          tokens: [
            { surface: 'وَاشْتَاقَ', lemma: 'اِشْتَاقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ش و ق', gloss: 'to yearn, long for; and longed' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'لِقَاءِ', lemma: 'لِقَاء', pos: 'noun', features: 'gen.constr', root: 'ل ق ي', gloss: 'meeting of' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'gen', gloss: 'Yaʿqūb' },
          ],
        },
        {
          id: 'qs-v2-c23-002',
          ar: 'وَكَيْفَ لَا يَشْتَاقُ إِلَيْهِ وَقَدْ طَالَ الْفِرَاقُ.',
          en: 'and how could he not long for him, when the separation had grown long?',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَشْتَاقُ', lemma: 'اِشْتَاقَ', pos: 'verb', features: 'impf.3ms', root: 'ش و ق', gloss: 'to yearn, long for; he long' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'طَالَ', lemma: 'طَالَ', pos: 'verb', features: 'perf.3ms', root: 'ط و ل', gloss: 'to last long, extend; grew long' },
            { surface: 'الْفِرَاقُ', lemma: 'فِرَاق', pos: 'noun', features: 'def.nom', root: 'ف ر ق', gloss: 'the separation' },
          ],
        },
        {
          id: 'qs-v2-c23-003',
          ar: 'وَلِمَاذَا يَصْبِرُ الآنَ وَقَدْ ظَهَرَ السِّرُّ.',
          en: 'And why should he be patient now, when the secret had come out?',
          tokens: [
            { surface: 'وَلِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'conj+adv', gloss: 'and why' },
            { surface: 'يَصْبِرُ', lemma: 'صَبَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be patient; he be patient' },
            { surface: 'الآنَ', lemma: 'الآن', pos: 'adv', features: 'adv', gloss: 'now' },
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'ظَهَرَ', lemma: 'ظَهَرَ', pos: 'verb', features: 'perf.3ms', root: 'ظ ه ر', gloss: 'to appear, come out; came out' },
            { surface: 'السِّرُّ', lemma: 'سِرّ', pos: 'noun', features: 'def.nom', gloss: 'the secret' },
          ],
        },
        {
          id: 'qs-v2-c23-004',
          ar: 'وَكَيْفَ يَطِيبُ لَهُ الشَّرَابُ وَالطَّعَامُ وَأَبُوهُ لَا يَطِيبُ لَهُ شَرَابٌ وَلَا طَعَامٌ وَلَا مَنَامٌ.',
          en: "And how could drink and food be pleasant to him, when for his father neither drink nor food nor sleep has been pleasant?",
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'يَطِيبُ', lemma: 'طَابَ', pos: 'verb', features: 'impf.3ms', root: 'ط ي ب', gloss: 'to be pleasant, good; be pleasant' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'الشَّرَابُ', lemma: 'شَرَاب', pos: 'noun', features: 'def.nom', gloss: 'the drink' },
            { surface: 'وَالطَّعَامُ', lemma: 'طَعَام', pos: 'noun', features: 'conj+def.nom', gloss: 'and the food' },
            { surface: 'وَأَبُوهُ', lemma: 'أَب', pos: 'noun', features: 'conj+nom+3ms', root: 'أ ب و', gloss: 'and his father' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَطِيبُ', lemma: 'طَابَ', pos: 'verb', features: 'impf.3ms', root: 'ط ي ب', gloss: 'to be pleasant, good; be pleasant' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'شَرَابٌ', lemma: 'شَرَاب', pos: 'noun', features: 'indef.nom', gloss: 'drink' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'طَعَامٌ', lemma: 'طَعَام', pos: 'noun', features: 'indef.nom', gloss: 'food' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'مَنَامٌ', lemma: 'مَنَام', pos: 'noun', features: 'indef.nom', gloss: 'sleep' },
          ],
        },
        {
          id: 'qs-v2-c23-005',
          ar: 'قَدِ انْكَشَفَ السِّرُّ،',
          en: 'The secret had been uncovered,',
          tokens: [
            { surface: 'قَدِ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: '(emphasis on completed action)' },
            { surface: 'انْكَشَفَ', lemma: 'اِنْكَشَفَ', pos: 'verb', features: 'perf.3ms', root: 'ك ش ف', gloss: 'to be uncovered, revealed; was uncovered' },
            { surface: 'السِّرُّ', lemma: 'سِرّ', pos: 'noun', features: 'def.nom', gloss: 'the secret' },
          ],
        },
        {
          id: 'qs-v2-c23-006',
          ar: 'وَقَدْ ظَهَرَ السِّرُّ،',
          en: 'and the secret had come out,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'ظَهَرَ', lemma: 'ظَهَرَ', pos: 'verb', features: 'perf.3ms', root: 'ظ ه ر', gloss: 'to appear, come out; came out' },
            { surface: 'السِّرُّ', lemma: 'سِرّ', pos: 'noun', features: 'def.nom', gloss: 'the secret' },
          ],
        },
        {
          id: 'qs-v2-c23-007',
          ar: 'وَقَدْ أَرَادَ اللَّهُ أَنْ تَقَرَّ عَيْنُ يَعْقُوبَ.',
          en: "and Allah had willed that Yaʿqūb's eye be comforted.",
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', gloss: 'to want, intend; willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'تَقَرَّ', lemma: 'قَرَّ', pos: 'verb', features: 'impf.3fs', root: 'ق ر ر', gloss: 'to be cool, settled; be comforted' },
            { surface: 'عَيْنُ', lemma: 'عَيْن', pos: 'noun', features: 'constr.nom', root: 'ع ي ن', gloss: 'the eye of' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'gen', gloss: 'Yaʿqūb' },
          ],
        },
        {
          id: 'qs-v2-c23-008',
          ar: 'وَكَانَ يَعْقُوبُ قَدْ عَمِيَ مِنْ كَثْرَةِ الْبُكَاءِ وَالْحُزْنِ فَقَالَ يُوسُفُ:',
          en: 'Yaʿqūb had gone blind from so much weeping and grief, so Yūsuf said:',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: '(emphasis on completed action)' },
            { surface: 'عَمِيَ', lemma: 'عَمِيَ', pos: 'verb', features: 'perf.3ms', root: 'ع م ي', gloss: 'to become blind; had gone blind' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'كَثْرَةِ', lemma: 'كَثْرَة', pos: 'noun', features: 'constr.gen', root: 'ك ث ر', gloss: 'the abundance of' },
            { surface: 'الْبُكَاءِ', lemma: 'بُكَاء', pos: 'noun', features: 'def.gen', root: 'ب ك ي', gloss: 'the weeping' },
            { surface: 'وَالْحُزْنِ', lemma: 'حُزْن', pos: 'noun', features: 'conj+def.gen', gloss: 'and the grief' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; so said' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c23-009',
          ar: '﴿اذْهَبُوا بِقَمِيصِي هَذَا فَأَلْقُوهُ عَلَى وَجْهِ أَبِي يَأْتِ بَصِيرًا',
          en: '"Go with this shirt of mine and cast it over my father\'s face -- he will become seeing,',
          tokens: [
            { surface: 'اذْهَبُوا', lemma: 'ذَهَبَ', pos: 'verb', features: 'imp.2mp', root: 'ذ ه ب', gloss: 'to go; go!' },
            { surface: 'بِقَمِيصِي', lemma: 'قَمِيص', pos: 'noun', features: 'prep+gen+1s', gloss: 'with my shirt' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'فَأَلْقُوهُ', lemma: 'أَلْقَى', pos: 'verb', features: 'conj+imp.2mp+3ms', root: 'ل ق ي', gloss: 'to throw, cast; so cast it' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'وَجْهِ', lemma: 'وَجْه', pos: 'noun', features: 'constr.gen', root: 'و ج ه', gloss: 'the face of' },
            { surface: 'أَبِي', lemma: 'أَب', pos: 'noun', features: 'gen+1s', root: 'أ ب و', gloss: 'my father' },
            { surface: 'يَأْتِ', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms', root: 'أ ت ي', gloss: 'to come, bring; he will become' },
            { surface: 'بَصِيرًا', lemma: 'بَصِير', pos: 'adj', features: 'indef.acc', root: 'ب ص ر', gloss: 'seeing, sighted' },
          ],
        },
        {
          id: 'qs-v2-c23-010',
          ar: 'وَأْتُونِي بِأَهْلِكُمْ أَجْمَعِينَ﴾.',
          en: 'and bring me your whole family, all together."',
          tokens: [
            { surface: 'وَأْتُونِي', lemma: 'أَتَى', pos: 'verb', features: 'conj+imp.2mp+1s', root: 'أ ت ي', gloss: 'to come, bring; and bring me' },
            { surface: 'بِأَهْلِكُمْ', lemma: 'أَهْل', pos: 'noun', features: 'prep+gen+2mp', gloss: 'with your family' },
            { surface: 'أَجْمَعِينَ', lemma: 'أَجْمَع', pos: 'adj', features: 'pl.acc', root: 'ج م ع', gloss: 'all together' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا لَمْ يَعُدْ يُوسُفُ يَصْبِرُ؟',
          options: ['لِأَنَّ السِّرَّ قَدِ انْكَشَفَ وَظَهَرَ', 'لِأَنَّ إِخْوَتَهُ رَفَضُوا الْعَوْدَةَ إِلَى يَعْقُوبَ', 'لِأَنَّ الْمَلِكَ أَمَرَهُ بِذَلِكَ'],
          answer: 0,
          qEn: 'Why could Yūsuf no longer be patient?',
          optionsEn: ['Because the secret had been uncovered and had come out', "Because his brothers refused to return to Yaʿqūb", 'Because the king ordered him to act'],
        },
        {
          q: 'لِمَاذَا عَمِيَ يَعْقُوبُ؟',
          options: ['مِنْ كَثْرَةِ الْبُكَاءِ وَالْحُزْنِ عَلَى يُوسُفَ', 'مِنْ مَرَضٍ أَصَابَهُ', 'مِنْ كِبَرِ سِنِّهِ فَقَطْ'],
          answer: 0,
          qEn: 'Why had Yaʿqūb gone blind?',
          optionsEn: ['From so much weeping and grief over Yūsuf', 'From an illness that struck him', 'From old age alone'],
        },
        {
          q: 'مَاذَا أَمَرَ يُوسُفُ إِخْوَتَهُ أَنْ يَفْعَلُوا بِقَمِيصِهِ؟',
          options: ['أَنْ يُلْقُوهُ عَلَى وَجْهِ أَبِيهِ لِيَعُودَ بَصِيرًا', 'أَنْ يُلْقُوهُ فِي الْبِئْرِ', 'أَنْ يَتْرُكُوهُ عِنْدَ الْمَلِكِ'],
          answer: 0,
          qEn: "What did Yūsuf order his brothers to do with his shirt?",
          optionsEn: ["Cast it over their father's face so he would see again", 'Cast it into the well', "Leave it with the king"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَاشْتَاقَ يُوسُفُ إِلَى',
        post: 'يَعْقُوبَ.',
        en: 'Yūsuf longed to meet Yaʿqūb.',
        options: ['لِقَاءِ', 'لِقَاءً', 'لِقَاءٌ', 'لِقَاءَاتِ'],
        answer: 0,
        rationales: [
          'Genitive, construct -- لِقَاء is the first term of an إضافة with يَعْقُوبَ, and follows the preposition إِلَى.',
          'Accusative -- wrong case; this position follows a preposition and heads a construct, both requiring genitive.',
          'Nominative -- wrong case for the same reason.',
          'Plural -- wrong number; a single meeting is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَقَدْ أَرَادَ اللَّهُ أَنْ',
        post: 'عَيْنُ يَعْقُوبَ.',
        en: "Allah had willed that Yaʿqūb's eye be comforted.",
        options: ['تَقَرَّ', 'قَرَّتْ', 'يَقَرُّ', 'تَقُرُّ'],
        answer: 0,
        rationales: [
          'Subjunctive, 3rd feminine singular -- required after أَنْ, agreeing with the feminine noun عَيْن.',
          'Perfect -- wrong tense; أَنْ requires a subjunctive imperfect, not a completed action.',
          'Masculine -- wrong gender; عَيْن is feminine.',
          'Indicative (not subjunctive) -- wrong mood after أَنْ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'اذْهَبُوا بِقَمِيصِي هَذَا فَأَلْقُوهُ عَلَى وَجْهِ أَبِي',
        post: 'بَصِيرًا.',
        en: 'Go with this shirt of mine and cast it over my father\'s face -- he will become seeing.',
        options: ['يَأْتِ', 'يَأْتِي', 'أَتَى', 'يُؤْتَى'],
        answer: 0,
        rationales: [
          'Jussive/subjunctive-toned imperfect -- the short form used after the implied condition, matching the taught pattern.',
          'Full indicative imperfect -- wrong mood for this construction.',
          'Perfect -- wrong tense; this describes a result that has not happened yet.',
          'Passive -- wrong voice; the father himself becomes seeing, he is not "brought."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَعْمَى الرَّجُلُ مِنَ الْحُزْنِ',
        pre: '',
        post: 'مِنَ الْحُزْنِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَعْمَى', 'يَعْمَى', 'تَعْمَى', 'نَعْمَى'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular / 3rd feminine singular -- wrong person.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْمَى الرَّجُلُ مِنَ الْحُزْنِ',
        pre: '',
        post: 'مِنَ الْحُزْنِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَعْمَى', 'يَعْمَى', 'أَعْمَى', 'نَعْمَى'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْمَى الرَّجُلُ مِنَ الْحُزْنِ',
        pre: '',
        post: 'مِنَ الْحُزْنِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَعْمَوْنَ', 'يَعْمَى', 'تَعْمَى', 'نَعْمَى'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

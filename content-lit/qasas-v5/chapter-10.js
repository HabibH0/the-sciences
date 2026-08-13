// قَصَصُ النَّبِيِّينَ, volume 5 «نَاقَةُ ثَمُودَ», chapter 10 -- نَاقَةُ اللَّهِ.
// Printed pages 105 (from ch10's own heading box, right after ch9's closing
// Qur'an quote) - 106 (top portion only, ending before ch11's own box
// النَّوْبَةُ partway down that page). Transcribed by hand from the scan
// (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md and
// QASAS_VOLUME_MAP.md's volume 5 table.
//
// The people demand a sign: let Ṣāliḥ bring a pregnant she-camel straight
// out of the mountain rock. They are certain this is an impossible test he
// will fail -- everyone knows a she-camel can only be born of a she-camel,
// not sprout from earth or emerge from stone -- but Ṣāliḥ's faith in his
// Lord's power over all things is unshaken. He prays, and exactly as
// demanded, a pregnant she-camel comes out of the mountain and gives birth.
// The people are astonished, yet only a single one of them believes.
//
// Grammar / lexical notes:
//   -- نَاقَةً حَامِلاً (qs-v5-c10-002) introduces this chapter's own title
//      word, نَاقَة, alongside حَامِل (the active participle of the
//      already-taught حَمَلَ, used here adjectivally, "pregnant") -- both
//      recur through the rest of the volume and are not re-listed as new in
//      later chapters.
//   -- تَلِدُهَا (qs-v5-c10-003) reuses the already-taught وَلَدَ ("to give
//      birth to," passive وُلِدَ, qasas-v5 ch4) in its plain active voice,
//      with a 3fs object suffix referring back to النَّاقَة.
//   -- نَبَتَ (qs-v5-c10-004, intransitive "to grow, sprout") is a distinct
//      lemma from the already-taught causative أَنْبَتَ ("to make grow,"
//      qasas-v5 ch1) despite the shared root, matching this volume's
//      established same-root-different-lemma convention.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَالَ، صَالِح (qasas-v5
//      ch4/5)، أَيّ، آيَة، أَرَادَ، إِنْ، كَانَ، صَادِق، أَخْرَجَ، هَذَا، جَبَل، النَّاس،
//      عَلِمَ، أَنَّ، لَا، إِلَّا، مِنْ، أَرْض، حَجَر، أَيْقَنَ، عَجَزَ (qasas-v5 ch9)،
//      نَجَحَ، لَكِنَّ، قَوِيّ، رَبّ، عَلَى، كُلّ، شَيْء، قَدِير، دَعَا، كَمَا، طَلَبَ،
//      خَرَجَ، تَحَيَّرَ، دَهِشَ، آمَنَ، وَاحِد
//      are all already taught and are NOT re-listed in newWords here.
//
// 6 new words (نَاقَة، حَامِل، نَبَتَ، نَتَجَ، أَيْقَنَ، إِيمَان).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch10',
  title: { ar: 'نَاقَةُ اللَّهِ', en: 'The She-Camel of Allah' },
  newWords: ['نَاقَة', 'حَامِل', 'نَبَتَ', 'نَتَجَ', 'أَيْقَنَ', 'إِيمَان'],
  lemmas: {
    نَاقَة: { gloss: 'a she-camel' },
    حَامِل: { gloss: 'pregnant' },
    نَبَتَ: { gloss: 'to grow, sprout (intransitive)' },
    نَتَجَ: { gloss: 'to be born (of an animal)' },
    أَيْقَنَ: { gloss: 'to be certain, convinced' },
    إِيمَان: { gloss: 'faith, belief' },
  },
  paragraphs: [
    {
      en: 'Ṣāliḥ said: "And which sign do you want?" They said: "If you are truthful, then bring out for us from this mountain a pregnant she-camel!" The people knew that a she-camel is only born of a she-camel, and that a she-camel does not sprout from the earth or come forth from stone. They were certain Ṣāliḥ would fail and that they would succeed! But Ṣāliḥ had strong faith in his Lord, and knew that Allah has power over all things. So Ṣāliḥ prayed to Allah, and it happened just as the people had demanded: a pregnant she-camel came out of the mountain and gave birth. The people were astonished and amazed, but not one of them believed except a single man.',
      sentences: [
        {
          id: 'qs-v5-c10-001',
          ar: 'قَالَ صَالِحٌ:',
          en: 'Ṣāliḥ said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
          ],
        },
        {
          id: 'qs-v5-c10-002',
          ar: 'وَأَيَّ آيَةٍ تُرِيدُونَ؟',
          en: '"And which sign do you want?"',
          tokens: [
            { surface: 'وَأَيَّ', lemma: 'أَيّ', pos: 'noun', features: 'conj+acc.constr', gloss: 'and which' },
            { surface: 'آيَةٍ', lemma: 'آيَة', pos: 'noun', features: 'indef.gen', gloss: 'a sign' },
            { surface: 'تُرِيدُونَ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.2mp', gloss: 'to want; do you want' },
          ],
        },
        {
          id: 'qs-v5-c10-003',
          ar: 'قَالُوا:',
          en: 'They said:',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v5-c10-004',
          ar: 'إِنْ كُنْتَ صَادِقاً',
          en: '"If you are truthful,',
          tokens: [
            { surface: 'إِنْ', lemma: 'إِنْ', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'كُنْتَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2ms', root: 'ك و ن', gloss: 'to be; you are' },
            { surface: 'صَادِقاً', lemma: 'صَادِق', pos: 'adj', features: 'indef.acc', gloss: 'truthful' },
          ],
        },
        {
          id: 'qs-v5-c10-005',
          ar: 'فَأَخْرِجْ لَنَا مِنْ هَذَا الْجَبَلِ نَاقَةً حَامِلاً!',
          en: 'then bring out for us from this mountain a pregnant she-camel!"',
          tokens: [
            { surface: 'فَأَخْرِجْ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'conj+imp.2ms', root: 'خ ر ج', gloss: 'to bring out; so bring out' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْجَبَلِ', lemma: 'جَبَل', pos: 'noun', features: 'def.gen', gloss: 'the mountain' },
            { surface: 'نَاقَةً', lemma: 'نَاقَة', pos: 'noun', features: 'indef.acc', root: 'ن و ق', gloss: 'a she-camel' },
            { surface: 'حَامِلاً', lemma: 'حَامِل', pos: 'adj', features: 'indef.acc', root: 'ح م ل', gloss: 'pregnant' },
          ],
        },
        {
          id: 'qs-v5-c10-006',
          ar: 'وَكَانَ النَّاسُ يَعْلَمُونَ أَنَّ النَّاقَةَ لَا تَلِدُهَا إِلَّا النَّاقَةُ',
          en: 'The people knew that a she-camel is only born of a she-camel,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and were' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'يَعْلَمُونَ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.3mp', gloss: 'to know; knowing' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'النَّاقَةَ', lemma: 'نَاقَة', pos: 'noun', features: 'def.acc', gloss: 'the she-camel' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَلِدُهَا', lemma: 'وَلَدَ', pos: 'verb', features: 'impf.3fs+3fs', root: 'و ل د', gloss: 'to give birth to; gives birth to it' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'النَّاقَةُ', lemma: 'نَاقَة', pos: 'noun', features: 'def.nom', gloss: 'the she-camel' },
          ],
        },
        {
          id: 'qs-v5-c10-007',
          ar: 'وَأَنَّ النَّاقَةَ لَا تَنْبُتُ مِنَ الْأَرْضِ،',
          en: 'and that a she-camel does not sprout from the earth',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'النَّاقَةَ', lemma: 'نَاقَة', pos: 'noun', features: 'def.acc', gloss: 'the she-camel' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَنْبُتُ', lemma: 'نَبَتَ', pos: 'verb', features: 'impf.3fs', root: 'ن ب ت', gloss: 'to grow, sprout; sprouts' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
          ],
        },
        {
          id: 'qs-v5-c10-008',
          ar: 'وَلَا تَنْتُجُ مِنَ الْحَجَرِ.',
          en: 'or come forth from stone.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَنْتُجُ', lemma: 'نَتَجَ', pos: 'verb', features: 'impf.3fs', root: 'ن ت ج', gloss: 'to be born, come forth; comes forth' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْحَجَرِ', lemma: 'حَجَر', pos: 'noun', features: 'def.gen', gloss: 'the stone' },
          ],
        },
        {
          id: 'qs-v5-c10-009',
          ar: 'وَأَيْقَنُوا أَنَّ صَالِحاً سَيَعْجِزُ',
          en: 'They were certain Ṣāliḥ would fail',
          tokens: [
            { surface: 'وَأَيْقَنُوا', lemma: 'أَيْقَنَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ي ق ن', gloss: 'to be certain; and were certain' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'صَالِحاً', lemma: 'صَالِح', pos: 'proper', features: 'acc', gloss: 'Ṣāliḥ' },
            { surface: 'سَيَعْجِزُ', lemma: 'عَجَزَ', pos: 'verb', features: 'part+impf.3ms', gloss: 'to be unable, fail; will fail' },
          ],
        },
        {
          id: 'qs-v5-c10-010',
          ar: 'وَأَنَّهُمْ سَيَنْجَحُونَ!',
          en: 'and that they would succeed!',
          tokens: [
            { surface: 'وَأَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part+3mp', gloss: 'and that they' },
            { surface: 'سَيَنْجَحُونَ', lemma: 'نَجَحَ', pos: 'verb', features: 'part+impf.3mp', gloss: 'to succeed; will succeed' },
          ],
        },
        {
          id: 'qs-v5-c10-011',
          ar: 'وَلَكِنَّ صَالِحاً كَانَ قَوِيَّ الْإِيمَانِ بِرَبِّهِ،',
          en: 'But Ṣāliḥ had strong faith in his Lord,',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part', gloss: 'but' },
            { surface: 'صَالِحاً', lemma: 'صَالِح', pos: 'proper', features: 'acc', gloss: 'Ṣāliḥ' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'قَوِيَّ', lemma: 'قَوِيّ', pos: 'adj', features: 'acc.constr', gloss: 'strong of' },
            { surface: 'الْإِيمَانِ', lemma: 'إِيمَان', pos: 'noun', features: 'def.gen', root: 'أ م ن', gloss: 'faith' },
            { surface: 'بِرَبِّهِ', lemma: 'رَبّ', pos: 'noun', features: 'prep+gen+3ms', gloss: 'in his Lord' },
          ],
        },
        {
          id: 'qs-v5-c10-012',
          ar: 'وَكَانَ يَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
          en: 'and knew that Allah has power over all things.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يَعْلَمُ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to know; knowing' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
            { surface: 'قَدِيرٌ', lemma: 'قَدِير', pos: 'adj', features: 'indef.nom', gloss: 'capable, omnipotent' },
          ],
        },
        {
          id: 'qs-v5-c10-013',
          ar: 'فَدَعَا اللَّهَ صَالِحٌ،',
          en: 'So Ṣāliḥ prayed to Allah,',
          tokens: [
            { surface: 'فَدَعَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to call, pray to; so prayed to' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
          ],
        },
        {
          id: 'qs-v5-c10-014',
          ar: 'وَكَانَ كَمَا طَلَبَ النَّاسُ،',
          en: 'and it happened just as the people had demanded:',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be, happen; and happened' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'طَلَبَ', lemma: 'طَلَبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to demand; had demanded' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v5-c10-015',
          ar: 'خَرَجَتْ مِنَ الْجَبَلِ نَاقَةٌ حَامِلٌ وَوَلَدَتْ.',
          en: 'a pregnant she-camel came out of the mountain and gave birth.',
          tokens: [
            { surface: 'خَرَجَتْ', lemma: 'خَرَجَ', pos: 'verb', features: 'perf.3fs', gloss: 'to come out; came out' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, out of' },
            { surface: 'الْجَبَلِ', lemma: 'جَبَل', pos: 'noun', features: 'def.gen', gloss: 'the mountain' },
            { surface: 'نَاقَةٌ', lemma: 'نَاقَة', pos: 'noun', features: 'indef.nom', gloss: 'a she-camel' },
            { surface: 'حَامِلٌ', lemma: 'حَامِل', pos: 'adj', features: 'indef.nom', gloss: 'pregnant' },
            { surface: 'وَوَلَدَتْ', lemma: 'وَلَدَ', pos: 'verb', features: 'conj+perf.3fs', root: 'و ل د', gloss: 'to give birth; and gave birth' },
          ],
        },
        {
          id: 'qs-v5-c10-016',
          ar: 'وَتَحَيَّرَ النَّاسُ وَدُهِشُوا،',
          en: 'The people were astonished and amazed,',
          tokens: [
            { surface: 'وَتَحَيَّرَ', lemma: 'تَحَيَّرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be bewildered; and were bewildered' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'وَدُهِشُوا', lemma: 'دَهِشَ', pos: 'verb', features: 'conj+pass+perf.3mp', gloss: 'to be astonished; and were astonished' },
          ],
        },
        {
          id: 'qs-v5-c10-017',
          ar: 'وَلَكِنْ لَمْ يُؤْمِنْ مِنْهُمْ إِلَّا وَاحِدٌ.',
          en: 'but not one of them believed except a single man.',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُؤْمِنْ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3ms', gloss: 'to believe; believed' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'of them' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'وَاحِدٌ', lemma: 'وَاحِد', pos: 'noun', features: 'indef.nom', gloss: 'one, a single person' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا طَلَبَ قَوْمُ صَالِحٍ آيَةً مِنْهُ؟',
          options: ['طَلَبُوا أَنْ يُخْرِجَ لَهُمْ مِنَ الْجَبَلِ نَاقَةً حَامِلاً', 'طَلَبُوا أَنْ يُنْزِلَ عَلَيْهِمُ الْمَطَرَ', 'طَلَبُوا أَنْ يُحْيِيَ لَهُمْ مَيِّتاً'],
          answer: 0,
          qEn: "What sign did Ṣāliḥ's people demand from him?",
          optionsEn: ['They demanded he bring out a pregnant she-camel from the mountain', 'They demanded he bring down rain on them', 'They demanded he bring a dead person back to life'],
        },
        {
          q: 'لِمَاذَا أَيْقَنَ النَّاسُ أَنَّ صَالِحاً سَيَعْجِزُ؟',
          options: [
            'لِأَنَّهُمْ كَانُوا يَعْلَمُونَ أَنَّ النَّاقَةَ لَا تَنْبُتُ مِنَ الْأَرْضِ وَلَا تَنْتُجُ مِنَ الْحَجَرِ',
            'لِأَنَّ صَالِحاً كَانَ ضَعِيفَ الْإِيمَانِ',
            'لِأَنَّهُ لَمْ يَدْعُ اللَّهَ مِنْ قَبْلُ',
          ],
          answer: 0,
          qEn: 'Why were the people certain Ṣāliḥ would fail?',
          optionsEn: [
            'Because they knew a she-camel does not sprout from the earth or come forth from stone',
            'Because Ṣāliḥ had weak faith',
            'Because he had never prayed to Allah before',
          ],
        },
        {
          q: 'كَمْ مِنَ النَّاسِ آمَنَ بَعْدَ خُرُوجِ النَّاقَةِ؟',
          options: ['لَمْ يُؤْمِنْ مِنْهُمْ إِلَّا وَاحِدٌ', 'آمَنُوا كُلُّهُمْ', 'آمَنَ نِصْفُهُمْ'],
          answer: 0,
          qEn: "How many of the people believed after the she-camel's appearance?",
          optionsEn: ['Only a single one of them believed', 'All of them believed', 'Half of them believed'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ النَّاسُ يَعْلَمُونَ أَنَّ النَّاقَةَ لَا',
        post: 'إِلَّا النَّاقَةُ.',
        en: 'The people knew that a she-camel is only born of a she-camel.',
        options: ['تَلِدُهَا', 'وَلَدَتْهَا', 'يَلِدُهَا', 'تَلِدُهُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular imperfect + 3rd feminine singular object suffix -- matches النَّاقَةُ ("a she-camel") giving birth to "it" (the she-camel calf).',
          'Perfect -- wrong tense; the sentence states a general, timeless fact.',
          '3rd masculine singular -- wrong gender; النَّاقَةُ is feminine.',
          'Masculine object suffix -- wrong gender; the she-camel referred back to is feminine.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَكِنَّ صَالِحاً كَانَ',
        post: 'الْإِيمَانِ بِرَبِّهِ.',
        en: 'But Ṣāliḥ had strong faith in his Lord.',
        options: ['قَوِيَّ', 'قَوِيٌّ', 'قَوِيٍّ', 'أَقْوِيَاءَ'],
        answer: 0,
        rationales: [
          'Accusative, construct -- predicate of كَانَ and first term of an إضافة with الْإِيمَانِ.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural -- wrong number; a single person (Ṣāliḥ) is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَدَعَا اللَّهَ',
        post: '،',
        en: 'So Ṣāliḥ prayed to Allah,',
        options: ['صَالِحٌ', 'صَالِحاً', 'صَالِحٍ', 'صَالِحُ'],
        answer: 0,
        rationales: [
          'Nominative -- subject of دَعَا, matching the printed صَالِحٌ.',
          'Accusative -- wrong case; the subject of a verb is nominative, and اللَّهَ already carries the accusative as the object of دَعَا.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Bare (vocative-looking) form -- wrong; nothing here calls for direct address.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَطْلُبُ الرَّجُلُ آيَةً',
        pre: '',
        post: 'آيَةً',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَطْلُبُ', 'يَطْلُبُ', 'تَطْلُبُ', 'نَطْلُبُ'],
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
        base: 'يَطْلُبُ الرَّجُلُ آيَةً',
        pre: '',
        post: 'آيَةً',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَطْلُبُ', 'يَطْلُبُ', 'أَطْلُبُ', 'نَطْلُبُ'],
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
        base: 'يَطْلُبُ الرَّجُلُ آيَةً',
        pre: '',
        post: 'آيَةً',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَطْلُبُونَ', 'يَطْلُبُ', 'تَطْلُبُ', 'نَطْلُبُ'],
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

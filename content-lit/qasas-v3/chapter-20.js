// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 20 -- ابْنُ نُوحٍ.
// Printed pages 80 (from its own heading, right after ch19's closing
// line, down to the bottom) through 81 (top six sentences only, ending
// right before ch21's heading لَيْسَ مِنْ أَهْلِكَ on the same page).
// Transcribed by hand from the scan (vision OCR, 300dpi render) against
// ../CHAPTER-FORMAT.md.
//
// Nūḥ had a son who stood with the disbelievers. Seeing him amid the
// Flood, Nūḥ called out to him in the Qur'an's own words (Sūrat Hūd
// 11:42-43): "O my son, ride with us, and do not be with the
// disbelievers!" -- but the son answered that he would take shelter on a
// mountain instead, certain it would protect him from the water. Nūḥ
// warned him that today there is no protector at all from Allah's
// command, except whoever Allah has mercy on -- and then the waves came
// between them, and the son was among the drowned. Nūḥ grieved for his
// son (how could he not, when it was his own son?), and hoped his son
// might still be saved from the Fire on the Day of Resurrection, even
// though he had not been saved from the water. He reasoned that the
// Fire is more intense than water, and the punishment of the Hereafter
// even more severe than that of this world -- so hadn't Allah promised
// him that He would save his family? Yes indeed, Allah's promise is
// true! So Nūḥ wanted to intercede for his son with Allah.
//
// Grammar / lexical notes:
//   -- Every long printed sentence is split at its natural clause/
//      comma boundary into multiple shorter entries here (house
//      convention, ch7/ch9/ch10/ch12-19) -- no rewording, same printed
//      text and order. The one exception is qs-v3-c20-004
//      (﴿لَا عَاصِمَ الْيَوْمَ...إِلَّا مَن رَّحِمَ﴾, Hūd 11:43), a single
//      ﴿﴾-wrapped Qur'an ayah of 10 tokens -- kept whole rather than
//      split mid-ayah, matching the corpus's existing practice of never
//      breaking a Qur'an quotation apart internally (only ever
//      separating it from its surrounding narration, see ch18's closing
//      quote). It simply does not count toward the buildable-sentence
//      minimum, which is comfortably met elsewhere in this chapter.
//   -- يَبُنَيَّ (qs-v3-c20-002b) is tokenized as يَ (lemma يَا, the
//      vocative particle) + بُنَيَّ (new lemma بُنَيّ, a diminutive-of-
//      اِبْن with the speaker's "my" already fused into the printed
//      form) -- this is the same mushaf alif-dropping pattern already
//      documented for قَوْمِ-type vocatives (يَقَوْمِ -> يَ + قَوْم), not the
//      fused-but-full-alif proper-noun pattern documented in ch17 for
//      يَانُوحُ/يَاإِبْرَاهِيمُ, since بُنَيَّ is a common noun, not a proper
//      one.
//   -- عَصَمَ (new, "to protect, shelter") and عَاصِم (new, "a protector,"
//      its active participle) are tagged as two distinct lemmas,
//      matching the corpus's participle-as-distinct-lemma convention
//      already used for كَفَرَ/كَافِر and سَمَّى/مُسَمّى.
//   -- مُغْرَق (new, "one who is drowned," a passive participle) is its
//      own lemma, distinct from the already-taught verb أَغْرَقَ (ch18,
//      "to drown someone"), same root غ ر ق.
//   -- أَنْجَى (new, form IV "to save, rescue someone") is a distinct
//      lemma from the already-taught intransitive verb نَجَا (ch18, "to
//      be saved"), matching the corpus's distinct-lemma-per-derived-
//      verb-form convention already used for اِنْتَظَرَ beside نَظَرَ.
//   -- أَشَقّ (new, elative "more severe, more painful") stands as its
//      own lemma the same way أَشَدّ (ch18) does -- there is no plain
//      adjective شَاقّ/شَقّ anywhere in the corpus to derive it from, so
//      it is simply tagged directly as an elative, root ش ق ق.
//   -- بَيْنَ (new, "between") had never been tagged anywhere in the
//      corpus before this chapter despite being an extremely common
//      word -- confirmed via a corpus-wide grep before adding it here.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ، نُوح، مَعَ،
//      الْكَافِرِينَ، رَأَى، فِي، الطُّوفَان، قَالَ، إِلَى، جَبَل، مِنْ، مَاء، لَا، أَمْرِ،
//      اللَّه، إِلَّا، مَنْ، رَحِمَ، حَزِنَ، عَلَى، ابْن، كَيْفَ، هُوَ، أَرَادَ، أَنْ، نَجَا،
//      نَار، يَوْمَ، إِذْ، لَمْ، إِنَّ، أَشَدّ، عَذَابَ، الآخِرَة، أَمَا، وَعَدَ، أَنَّ، أَهْل،
//      وَعْد، حَقّ، عِنْدَ
//      are all already taught and are NOT re-listed in newWords here.
//
// 12 new words (رَكِبَ، أَوَى، عَصَمَ، عَاصِم، حَالَ، بَيْنَ، مُغْرَق، قِيَامَة،
// أَشَقّ، شَفَعَ، بَلَى، أَنْجَى) -- plus the diminutive noun بُنَيّ tagged
// inline above.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch20',
  title: { ar: 'ابْنُ نُوحٍ', en: "Nūḥ's Son" },
  newWords: ['رَكِبَ', 'أَوَى', 'عَصَمَ', 'عَاصِم', 'حَالَ', 'بَيْنَ', 'مُغْرَق', 'قِيَامَة', 'أَشَقّ', 'شَفَعَ', 'بَلَى', 'أَنْجَى', 'بُنَيّ'],
  lemmas: {
    رَكِبَ: { gloss: 'to ride, board' },
    أَوَى: { gloss: 'to take shelter, take refuge' },
    عَصَمَ: { gloss: 'to protect, shelter, save from' },
    عَاصِم: { gloss: 'a protector' },
    حَالَ: { gloss: 'to come between, intervene' },
    بَيْنَ: { gloss: 'between' },
    مُغْرَق: { gloss: 'one who is drowned' },
    قِيَامَة: { gloss: 'resurrection' },
    أَشَقّ: { gloss: 'more severe, more painful' },
    شَفَعَ: { gloss: 'to intercede' },
    بَلَى: { gloss: 'yes indeed! (affirming after a negative)' },
    أَنْجَى: { gloss: 'to save, rescue (someone)' },
    بُنَيّ: { gloss: 'my dear son, my little son (diminutive)' },
  },
  paragraphs: [
    {
      en: 'Nūḥ had a son who was with the disbelievers. And Nūḥ saw his son amid the Flood, and said: "O my son, ride with us, and do not be with the disbelievers!" "He said: I will take shelter on a mountain that will protect me from the water." "He said: there is no protector today from the command of Allah, except him on whom He has mercy." "And the waves came between them, and he was among the drowned."',
      sentences: [
        {
          id: 'qs-v3-c20-001',
          ar: 'وَكَانَ لِنُوحٍ ابْنٌ كَانَ مَعَ الْكَافِرِينَ.',
          en: 'Nūḥ had a son who was with the disbelievers.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and there was' },
            { surface: 'لِنُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'prep+gen', gloss: 'to/for Nūḥ (i.e. Nūḥ had)' },
            { surface: 'ابْنٌ', lemma: 'اِبْن', pos: 'noun', features: 'indef.nom', root: 'ب ن و', gloss: 'a son' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; who was' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'الْكَافِرِينَ', lemma: 'كَافِر', pos: 'noun', features: 'pl.def.gen', gloss: 'the disbelievers' },
          ],
        },
        {
          id: 'qs-v3-c20-002',
          ar: 'وَرَأَى نُوحٌ ابْنَهُ فِي الطُّوفَانِ فَقَالَ:',
          en: 'And Nūḥ saw his son amid the Flood, and said:',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to see; and saw' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'ابْنَهُ', lemma: 'اِبْن', pos: 'noun', features: 'acc+3ms', gloss: 'his son' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'amid, in' },
            { surface: 'الطُّوفَانِ', lemma: 'طُوفَان', pos: 'noun', features: 'def.gen', gloss: 'the Flood' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v3-c20-003',
          ar: '﴿يَبُنَيَّ ارْكَب مَّعَنَا وَلَا تَكُن مَّعَ الْكَافِرِينَ﴾.',
          en: '"O my son, ride with us, and do not be with the disbelievers!"',
          tokens: [
            { surface: 'يَ', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'بُنَيَّ', lemma: 'بُنَيّ', pos: 'noun', features: 'nom', root: 'ب ن و', gloss: 'my dear son' },
            { surface: 'ارْكَب', lemma: 'رَكِبَ', pos: 'verb', features: 'imp.2ms', root: 'ر ك ب', gloss: 'to ride, board; ride!' },
            { surface: 'مَّعَنَا', lemma: 'مَعَ', pos: 'prep', features: 'prep+1p', gloss: 'with us' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and do not' },
            { surface: 'تَكُن', lemma: 'كَانَ', pos: 'verb', features: 'impf.2ms', gloss: 'to be; be' },
            { surface: 'مَّعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'الْكَافِرِينَ', lemma: 'كَافِر', pos: 'noun', features: 'pl.def.gen', gloss: 'the disbelievers' },
          ],
        },
        {
          id: 'qs-v3-c20-004',
          ar: '﴿قَالَ سَآوِي إِلَى جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ﴾.',
          en: '"He said: I will take shelter on a mountain that will protect me from the water."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'سَآوِي', lemma: 'أَوَى', pos: 'verb', features: 'impf.1s', root: 'أ و ي', gloss: 'to take shelter; I will take shelter' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to, on' },
            { surface: 'جَبَلٍ', lemma: 'جَبَل', pos: 'noun', features: 'indef.gen', gloss: 'a mountain' },
            { surface: 'يَعْصِمُنِي', lemma: 'عَصَمَ', pos: 'verb', features: 'impf.3ms+1s', root: 'ع ص م', gloss: 'to protect; will protect me' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْمَاءِ', lemma: 'مَاء', pos: 'noun', features: 'def.gen', gloss: 'the water' },
          ],
        },
        {
          id: 'qs-v3-c20-005',
          ar: '﴿قَالَ لَا عَاصِمَ الْيَوْمَ مِنْ أَمْرِ اللَّهِ إِلَّا مَن رَّحِمَ﴾.',
          en: '"He said: there is no protector today from the command of Allah, except him on whom He has mercy."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'there is no' },
            { surface: 'عَاصِمَ', lemma: 'عَاصِم', pos: 'noun', features: 'indef.acc', root: 'ع ص م', gloss: 'a protector' },
            { surface: 'الْيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'def.acc', gloss: 'today' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَمْرِ', lemma: 'أَمْر', pos: 'noun', features: 'gen.constr', gloss: 'the command of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'مَن', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'him whom' },
            { surface: 'رَّحِمَ', lemma: 'رَحِمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to have mercy; He had mercy on' },
          ],
        },
        {
          id: 'qs-v3-c20-006',
          ar: '﴿وَحَالَ بَيْنَهُمَا الْمَوْجُ فَكَانَ مِنَ الْمُغْرَقِينَ﴾.',
          en: '"And the waves came between them, and he was among the drowned."',
          tokens: [
            { surface: 'وَحَالَ', lemma: 'حَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ح و ل', gloss: 'to come between; and came between' },
            { surface: 'بَيْنَهُمَا', lemma: 'بَيْنَ', pos: 'noun', features: 'acc+3d', root: 'ب ي ن', gloss: 'between them both' },
            { surface: 'الْمَوْجُ', lemma: 'مَوْج', pos: 'noun', features: 'def.nom', gloss: 'the waves' },
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and so he was' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْمُغْرَقِينَ', lemma: 'مُغْرَق', pos: 'noun', features: 'pl.def.gen', root: 'غ ر ق', gloss: 'the drowned' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ نُوحٌ لاِبْنِهِ حِينَ رَآهُ فِي الطُّوفَانِ؟',
          options: [
            'قَالَ لَهُ: يَا بُنَيَّ ارْكَبْ مَعَنَا وَلَا تَكُنْ مَعَ الْكَافِرِينَ',
            'قَالَ لَهُ: اذْهَبْ إِلَى الْبَحْرِ وَاسْبَحْ',
            'لَمْ يَقُلْ لَهُ شَيْئاً'
          ],
          answer: 0,
          qEn: 'What did Nūḥ say to his son when he saw him amid the Flood?',
          optionsEn: [
            'He said to him: O my son, ride with us and do not be with the disbelievers',
            'He said to him: go to the sea and swim',
            'He said nothing to him'
          ],
        },
        {
          q: 'لِمَاذَا رَفَضَ ابْنُ نُوحٍ رُكُوبَ السَّفِينَةِ؟',
          options: [
            'لِأَنَّهُ ظَنَّ أَنَّ الجَبَلَ سَيَعْصِمُهُ مِنَ الْمَاءِ',
            'لِأَنَّهُ لَمْ يَكُنْ يَعْرِفُ السِّبَاحَةَ',
            'لِأَنَّ أَبَاهُ لَمْ يَدْعُهُ إِلَى الرُّكُوبِ'
          ],
          answer: 0,
          qEn: "Why did Nūḥ's son refuse to board the ship?",
          optionsEn: [
            'Because he thought the mountain would protect him from the water',
            'Because he did not know how to swim',
            "Because his father never invited him to board"
          ],
        },
      ],
    },
    {
      en: 'And Nūḥ grieved over his son, and how could he not grieve, when he was his son? And he wanted his son to be saved from the Fire on the Day of Resurrection, since he had not been saved from the water yesterday. The Fire is indeed more intense than the water, and the punishment of the Hereafter is indeed more severe.',
      sentences: [
        {
          id: 'qs-v3-c20-007',
          ar: 'وَحَزِنَ نُوحٌ عَلَى ابْنِهِ،',
          en: 'And Nūḥ grieved over his son,',
          tokens: [
            { surface: 'وَحَزِنَ', lemma: 'حَزِنَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ح ز ن', gloss: 'to grieve; and grieved' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'ابْنِهِ', lemma: 'اِبْن', pos: 'noun', features: 'gen+3ms', gloss: 'his son' },
          ],
        },
        {
          id: 'qs-v3-c20-008',
          ar: 'وَكَيْفَ لا يَحْزَنُ وَهُوَ ابْنُهُ.',
          en: 'and how could he not grieve, when he was his son?',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَحْزَنُ', lemma: 'حَزِنَ', pos: 'verb', features: 'impf.3ms', gloss: 'to grieve; would he grieve' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'part', features: 'conj+3ms', gloss: 'when he' },
            { surface: 'ابْنُهُ', lemma: 'اِبْن', pos: 'noun', features: 'nom+3ms', gloss: 'his son' },
          ],
        },
        {
          id: 'qs-v3-c20-009',
          ar: 'وَأَرَادَ أَنْ يَنْجُوَ ابْنُهُ مِنَ النَّارِ يَوْمَ الْقِيَامَةِ',
          en: 'And he wanted his son to be saved from the Fire on the Day of Resurrection,',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want; and wanted' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that, to' },
            { surface: 'يَنْجُوَ', lemma: 'نَجَا', pos: 'verb', features: 'impf.3ms', gloss: 'to be saved; be saved' },
            { surface: 'ابْنُهُ', lemma: 'اِبْن', pos: 'noun', features: 'nom+3ms', gloss: 'his son' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'النَّارِ', lemma: 'نَار', pos: 'noun', features: 'def.gen', gloss: 'the Fire' },
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc.constr', gloss: 'the Day of' },
            { surface: 'الْقِيَامَةِ', lemma: 'قِيَامَة', pos: 'noun', features: 'def.gen', root: 'ق و م', gloss: 'the Resurrection' },
          ],
        },
        {
          id: 'qs-v3-c20-010',
          ar: 'إِذْ لَمْ يَنْجُ مِنَ الْمَاءِ أَمْسِ.',
          en: 'since he had not been saved from the water yesterday.',
          tokens: [
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'conj', features: 'conj', gloss: 'since, when' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَنْجُ', lemma: 'نَجَا', pos: 'verb', features: 'impf.3ms', gloss: 'to be saved; was saved' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْمَاءِ', lemma: 'مَاء', pos: 'noun', features: 'def.gen', gloss: 'the water' },
            { surface: 'أَمْسِ', lemma: 'أَمْس', pos: 'adv', features: 'adv', gloss: 'yesterday' },
          ],
        },
        {
          id: 'qs-v3-c20-011',
          ar: 'إِنَّ النَّارَ أَشَدُّ مِنَ الْمَاءِ،',
          en: 'The Fire is indeed more intense than the water,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'النَّارَ', lemma: 'نَار', pos: 'noun', features: 'def.acc', gloss: 'the Fire' },
            { surface: 'أَشَدُّ', lemma: 'أَشَدّ', pos: 'adj', features: 'indef.nom', gloss: 'more intense' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'الْمَاءِ', lemma: 'مَاء', pos: 'noun', features: 'def.gen', gloss: 'the water' },
          ],
        },
        {
          id: 'qs-v3-c20-012',
          ar: 'وَإِنَّ عَذَابَ الآخِرَةِ أَشَقُّ.',
          en: 'and the punishment of the Hereafter is indeed more severe.',
          tokens: [
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'عَذَابَ', lemma: 'عَذَاب', pos: 'noun', features: 'acc.constr', gloss: 'the punishment of' },
            { surface: 'الآخِرَةِ', lemma: 'آخِرَة', pos: 'noun', features: 'def.gen', root: 'أ خ ر', gloss: 'the Hereafter' },
            { surface: 'أَشَقُّ', lemma: 'أَشَقّ', pos: 'adj', features: 'indef.nom', root: 'ش ق ق', gloss: 'more severe, more painful' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'Did Allah not promise him that He would save his family? "Yes indeed!" Allah\'s promise is indeed true. So he wanted to intercede for his son with Allah.',
      sentences: [
        {
          id: 'qs-v3-c20-013',
          ar: 'أَمَا وَعَدَهُ اللَّهُ أَنَّهُ يُنْجِي أَهْلَهُ؟',
          en: 'Did Allah not promise him that He would save his family?',
          tokens: [
            { surface: 'أَمَا', lemma: 'أَمَا', pos: 'part', features: 'part', gloss: "did/does...not...?" },
            { surface: 'وَعَدَهُ', lemma: 'وَعَدَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to promise; promised him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'يُنْجِي', lemma: 'أَنْجَى', pos: 'verb', features: 'impf.3ms', root: 'ن ج و', gloss: 'to save, rescue; would save' },
            { surface: 'أَهْلَهُ', lemma: 'أَهْل', pos: 'noun', features: 'acc+3ms', gloss: 'his family' },
          ],
        },
        {
          id: 'qs-v3-c20-014',
          ar: 'بَلَى!',
          en: '"Yes indeed!"',
          tokens: [
            { surface: 'بَلَى', lemma: 'بَلَى', pos: 'part', features: 'part', gloss: 'yes indeed! (affirming after a negative)' },
          ],
        },
        {
          id: 'qs-v3-c20-015',
          ar: 'إِنَّ وَعْدَ اللَّهِ حَقٌّ.',
          en: "Allah's promise is indeed true.",
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'وَعْدَ', lemma: 'وَعْد', pos: 'noun', features: 'acc.constr', gloss: 'the promise of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'حَقٌّ', lemma: 'حَقّ', pos: 'noun', features: 'indef.nom', gloss: 'true, a truth' },
          ],
        },
        {
          id: 'qs-v3-c20-016',
          ar: 'فَأَرَادَ أَنْ يَشْفَعَ لاِبْنِهِ عِنْدَ اللَّهِ.',
          en: 'So he wanted to intercede for his son with Allah.',
          tokens: [
            { surface: 'فَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want; so he wanted' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَشْفَعَ', lemma: 'شَفَعَ', pos: 'verb', features: 'impf.3ms', root: 'ش ف ع', gloss: 'to intercede; intercede' },
            { surface: 'لاِبْنِهِ', lemma: 'اِبْن', pos: 'noun', features: 'prep+gen+3ms', gloss: 'for his son' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep', gloss: 'with, in the presence of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا أَرَادَ نُوحٌ بَعْدَ أَنْ حَزِنَ عَلَى ابْنِهِ؟',
          options: [
            'أَرَادَ أَنْ يَشْفَعَ لاِبْنِهِ عِنْدَ اللَّهِ لِيَنْجُوَ مِنَ النَّارِ يَوْمَ الْقِيَامَةِ',
            'أَرَادَ أَنْ يَتْرُكَ الدَّعْوَةَ إِلَى اللَّهِ',
            'أَرَادَ أَنْ يَغْضَبَ عَلَى قَوْمِهِ'
          ],
          answer: 0,
          qEn: 'What did Nūḥ want after he grieved over his son?',
          optionsEn: [
            'He wanted to intercede for his son with Allah, so he might be saved from the Fire on the Day of Resurrection',
            'He wanted to abandon calling people to Allah',
            'He wanted to grow angry at his people'
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالَ نُوحٌ لاِبْنِهِ: يَا بُنَيَّ',
        post: 'مَعَنَا وَلَا تَكُنْ مَعَ الْكَافِرِينَ.',
        en: 'Nūḥ said to his son: O my son, ride with us and do not be with the disbelievers.',
        options: ['ارْكَبْ', 'رَكِبْتَ', 'يَرْكَبُ', 'ارْكَبُوا'],
        answer: 0,
        rationales: [
          '2nd masculine singular imperative -- "ride!", matching the printed ارْكَب مَعَنَا, a direct command to his son.',
          'Perfect -- wrong tense/mood; a command needs the imperative, not the perfect.',
          '3rd masculine singular imperfect -- wrong person; the command addresses the son directly as "you."',
          '2nd masculine plural imperative -- wrong number; Nūḥ addresses his son alone here, not a group.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ ابْنُ نُوحٍ: سَآوِي إِلَى جَبَلٍ',
        post: 'مِنَ الْمَاءِ.',
        en: "Nūḥ's son said: I will take shelter on a mountain that will protect me from the water.",
        options: ['يَعْصِمُنِي', 'عَصَمَنِي', 'أَعْصِمُ', 'عَاصِمٌ'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect + 1st singular object -- "will protect me," matching the printed يَعْصِمُنِي, describing what the mountain will do.',
          'Perfect -- wrong tense; the son is describing a future hope, not something already completed.',
          '1st singular -- wrong subject; it is the mountain that protects, not "I."',
          'Active participle (noun) -- wrong part of speech for this position, which needs an inflected verb.',
        ],
      },
      {
        type: 'cloze',
        pre: 'أَمَا وَعَدَهُ اللَّهُ أَنَّهُ',
        post: 'أَهْلَهُ؟ بَلَى! إِنَّ وَعْدَ اللَّهِ حَقٌّ.',
        en: "Did Allah not promise him that He would save his family? Yes indeed, Allah's promise is true.",
        options: ['يُنْجِي', 'يَنْجُو', 'أَنْجَى', 'نَاجٍ'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect of أَنْجَى (form IV, "to save someone") -- matches the printed أَنَّهُ يُنْجِي أَهْلَهُ, since Allah is the one doing the saving.',
          'Imperfect of نَجَا (form I, "to be saved") -- wrong voice; the sentence needs "save," with an object (أَهْلَهُ), not the intransitive "be saved."',
          'Perfect -- wrong tense; the promise concerns what Allah would do, which needs the imperfect after أَنَّهُ.',
          'Active participle (noun, "one who saves") -- wrong part of speech for this position, which needs an inflected verb.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَعْصِمُ الجَبَلُ ابْنَ نُوحٍ مِنَ الْمَاءِ',
        pre: '',
        post: 'ابْنَ نُوحٍ مِنَ الْمَاءِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m)',
        options: ['تَعْصِمُ', 'يَعْصِمُ', 'أَعْصِمُ', 'نَعْصِمُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular imperfect -- matches أَنْتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '1st plural -- wrong person; the target is "you," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'حَزِنَ نُوحٌ عَلَى ابْنِهِ',
        pre: '',
        post: 'عَلَى ابْنِهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['حَزِنْتُ', 'حَزِنَ', 'حَزِنْتَ', 'حَزِنَّا'],
        answer: 0,
        rationales: [
          '1st singular perfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَشْفَعُ نُوحٌ لاِبْنِهِ عِنْدَ اللَّهِ',
        pre: '',
        post: 'لاِبْنِهِ عِنْدَ اللَّهِ',
        targetPerson: 'هُم',
        targetEn: 'they (m)',
        options: ['يَشْفَعُونَ', 'يَشْفَعُ', 'تَشْفَعُ', 'نَشْفَعُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُم.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '3rd/2nd feminine singular -- wrong person and number.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

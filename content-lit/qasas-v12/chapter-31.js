// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ»,
// chapter 31 -- وَلَكِنْ شُبِّهَ لَهُمْ. Printed page 269 only -- the chapter
// begins partway down the page, right after the closing line of ch30 (about
// the Sanhedrin's haste to hand the young man over), and ends before ch32's
// heading تَنْفِيذُ حُكْمٍ further down the same page. Transcribed by hand
// from the scan (vision OCR, 150dpi render) against ../CHAPTER-FORMAT.md.
//
// The procession reaches the gallows. Custody passes from the Roman civil
// police to the execution squad, who in the noise and confusion simply grab
// the young man who happens to be carrying the cross-beam -- assuming
// without any doubt that he is the condemned man. He shouts and protests his
// innocence, insisting he had only been forced to carry the wood and had no
// part in the judgment or the crucifixion itself, but the execution squad --
// Romans and Greeks, not native Aramaic/Hebrew speakers -- pay no attention
// and cannot even understand his language. This is Nadwi's narrative
// scene-setting for the Qur'anic denial of the crucifixion that follows in
// ch34: the false identification of the condemned man is the natural-history
// mechanism behind "shubbiha lahum."
//
// Grammar / lexical notes:
//   -- وَاخْتَلَطَ الْحَابِلُ بِالنَّابِلِ (qs-v12-c31-005) is a fixed classical
//      idiom, literally "the rope-caster got mixed up with the arrow-shooter,"
//      i.e. "everything descended into chaos/confusion." حَابِل and نَابِل are
//      tagged as their own noun lemmas (root ح ب ل / ن ب ل) rather than folded
//      into anything else, since the idiom's two halves don't occur outside it.
//   -- Distinct-lemma-per-derived-form/root (chapter-14.js's convention,
//      pervasive in this crucifixion-narrative chapter given its concentrated
//      thematic vocabulary): حَمَلَ (verb, "to carry," already taught) vs.
//      حَامِل (qs-v12-c31-007, its active participle, "one who carries") vs.
//      حَمْل (qs-v12-c31-012, the verbal noun "the carrying"/"a load") are all
//      kept as three separate lemmas sharing root ح م ل. Likewise صَلَبَ
//      (verb, already taught) vs. صَلِيب (qs-v12-c31-004, the physical
//      "cross") vs. صَلْب (qs-v12-c31-008, the masdar "crucifixion" as an act)
//      vs. مَصْلُوب (the passive participle, first used in ch32) are four
//      separate lemmas sharing root ص ل ب. Likewise صِيَاح/صَاحَ and
//      ضَجِيج/ضَجَّ (noun vs. verb pairs, ch31/ch32) and شَكّ (noun, already
//      taught) vs. شَكَّ (qs-v12-c31-008's verb "to doubt," newly introduced
//      here) follow the same rule.
//   -- الْمَحْكُومُ (qs-v12-c31-008) is the passive participle of the
//      already-taught verb حَكَمَ ("to judge, rule"), kept as its own lemma
//      per the participle-as-distinct-lemma convention.
//   -- الرُّومِ and الْيُونَانِ (qs-v12-c31-015) are tagged pos:'noun' rather
//      than 'proper': grammatically they behave as ordinary, fully-declining
//      definite plural common nouns for a people (like النَّاس، قَوْم), not
//      as a single uniquely-named entity the way آدَم or مِصْر are. The same
//      call is made for الْيَهُود (ch32) and النَّصَارَى (ch35).
//   -- Known-lemmas.txt discrepancy: the supplied cross-chapter lemma list
//      does not contain مِنْ، فِي، عَلَى، إِلَى، لَا، مَا، أَنَّ، أَنْ، كَانَ، ذَلِكَ،
//      هُوَ، هُمْ or شَيْء, despite these being used freely as already-known,
//      unglossed background vocabulary throughout the actually-shipped
//      qasas-v3/chapter-01.js, chapter-06.js and chapter-14.js (chapter-14's
//      own "Shared lexicon check" comment explicitly lists أَنْ، مِنْ، فِي،
//      كَانَ، أَنَّ، إِذَا، لَا، إِلَى as already taught, and chapter-01.js's
//      lists شَيْء as already taught since qasas-v1 ch3). Treated here as a
//      gap in the consolidation tool, not a real gap in the learner's
//      vocabulary -- these words are treated as already known throughout
//      this chapter (and the rest of this batch) and are NOT added to
//      newWords. Flagged for a second look.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, beyond the basic function
//      words just noted): هَكَذَا، وَصَلَ، أَخَذَ، أُمَّة، اِبْن، اِلْتَفَتَ، بَاب،
//      حَاكِم، حَمَلَ، حُكْم، رَأَى، سَيِّد، شَأْن، شَابّ، صَلَبَ، فَهِمَ، كَثُرَ،
//      لِأَنَّ، يَد are all already taught and are NOT re-listed in newWords.
//
// 27 new words (مَوْكِب، مَشْنَق، تَقَدَّمَ، شُرْطَة، تَسَلَّمَ، مَدَنِيّ، صَلِيب،
// اِخْتَلَطَ، حَابِل، نَابِل، ضَجِيج، حَامِل، شَكَّ، مَحْكُوم، صَلْب، صَاحَ، ضَجَّ،
// أَعْلَنَ، بَرَاءَة، إِنَّمَا، كَلَّفَ، حَمْل، عُود، سُخْرَة، لُغَة، رُوم، يُونَان) --
// unusually dense, matching this volume's noted shift into sophisticated
// expository/narrative vocabulary and this scene's concentrated
// execution-and-crucifixion word-set that recurs through the rest of the
// volume's climax.
//
// No page footnotes (book_note) on page 269.
export const CHAPTER = {
  id: 'ch31',
  title: { ar: 'وَلَكِنْ شُبِّهَ لَهُمْ', en: '"But It Was Made to Appear So to Them"' },
  newWords: [
    'مَوْكِب', 'تَقَدَّمَ', 'تَسَلَّمَ', 'مَدَنِيّ', 'اِخْتَلَطَ', 'حَابِل',
    'نَابِل', 'ضَجِيج', 'حَامِل', 'شَكَّ', 'صَاحَ', 'ضَجَّ',
    'أَعْلَنَ', 'بَرَاءَة', 'سُخْرَة', 'لُغَة', 'رُوم',
  ],
  lemmas: {
    مَوْكِب: { gloss: 'procession, convoy' },
    مَشْنَق: { gloss: 'gallows, place of execution' },
    تَقَدَّمَ: { gloss: 'to come forward, advance' },
    شُرْطَة: { gloss: 'police' },
    تَسَلَّمَ: { gloss: 'to take over, take receipt of' },
    مَدَنِيّ: { gloss: 'civilian' },
    صَلِيب: { gloss: 'cross (the object)' },
    اِخْتَلَطَ: { gloss: 'to become mixed up, thrown into confusion' },
    حَابِل: { gloss: 'rope-caster (idiom, see book_note)' },
    نَابِل: { gloss: 'arrow-shooter (idiom, see book_note)' },
    ضَجِيج: { gloss: 'clamor, uproar (noun)' },
    حَامِل: { gloss: 'one carrying, bearer (participle)' },
    شَكَّ: { gloss: 'to doubt (verb)' },
    مَحْكُوم: { gloss: 'the one sentenced, judged (passive participle)' },
    صَلْب: { gloss: 'crucifixion (the act)' },
    صَاحَ: { gloss: 'to cry out, shout' },
    ضَجَّ: { gloss: 'to clamor, raise an uproar (verb)' },
    أَعْلَنَ: { gloss: 'to announce, declare' },
    بَرَاءَة: { gloss: 'innocence' },
    إِنَّمَا: { gloss: 'rather, only, but in fact' },
    كَلَّفَ: { gloss: 'to charge, task (someone) with' },
    حَمْل: { gloss: 'the carrying (verbal noun)' },
    عُود: { gloss: 'wooden beam, piece of wood' },
    سُخْرَة: { gloss: 'forced labor, compulsion' },
    لُغَة: { gloss: 'language' },
    رُوم: { gloss: 'Romans, Byzantines' },
    يُونَان: { gloss: 'Greeks' },
  },
  paragraphs: [
    {
      en: "And so the procession reached the gate of the gallows: the execution squad stepped forward and took charge of the matter from the civilian police. They saw the young man carrying the cross, and in the noise everything became a chaotic blur, and the clamor grew loud, so they seized the hand of the young man carrying the cross -- not doubting for a moment that he was the one sentenced to crucifixion. He was crying out and protesting, proclaiming his innocence and insisting he had nothing to do with the sentence or the crucifixion, and that he had only been forced, unjustly, to carry the wooden beam -- but the execution squad paid no attention to any of this, and could not even understand his language, because they were Romans and Greeks, the ruling nation.",
      sentences: [
        {
          id: 'qs-v12-c31-001',
          ar: 'وَهَكَذَا وَصَلَ الْمَوْكِبُ إِلَى بَابِ الْمَشْنَقِ،',
          en: 'And so the procession reached the gate of the gallows,',
          tokens: [
            { surface: 'وَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'conj+adv', gloss: 'and thus, and so' },
            { surface: 'وَصَلَ', lemma: 'وَصَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to arrive; arrived' },
            { surface: 'الْمَوْكِبُ', lemma: 'مَوْكِب', pos: 'noun', features: 'def.nom', root: 'و ك ب', gloss: 'the procession' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'بَابِ', lemma: 'بَاب', pos: 'noun', features: 'constr.gen', gloss: 'the gate of' },
            { surface: 'الْمَشْنَقِ', lemma: 'مَشْنَق', pos: 'noun', features: 'def.gen', root: 'ش ن ق', gloss: 'the gallows' },
          ],
        },
        {
          id: 'qs-v12-c31-002',
          ar: 'فَتَقَدَّمَ شُرْطَةُ الْمَشْنَقِ،',
          en: 'so the gallows police stepped forward,',
          tokens: [
            { surface: 'فَتَقَدَّمَ', lemma: 'تَقَدَّمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق د م', gloss: 'to come forward; so came forward' },
            { surface: 'شُرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'constr.nom', root: 'ش ر ط', gloss: 'the police of' },
            { surface: 'الْمَشْنَقِ', lemma: 'مَشْنَق', pos: 'noun', features: 'def.gen', gloss: 'the gallows' },
          ],
        },
        {
          id: 'qs-v12-c31-003',
          ar: 'وَتَسَلَّمُوا الْأَمْرَ مِنَ الشُّرْطَةِ الْمَدَنِيِّينَ،',
          en: 'and took over the matter from the civilian police,',
          tokens: [
            { surface: 'وَتَسَلَّمُوا', lemma: 'تَسَلَّمَ', pos: 'verb', features: 'conj+perf.3mp', root: 'س ل م', gloss: 'to take over; and took over' },
            { surface: 'الْأَمْرَ', lemma: 'أَمْر', pos: 'noun', features: 'def.acc', gloss: 'the matter' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الشُّرْطَةِ', lemma: 'شُرْطَة', pos: 'noun', features: 'def.gen', gloss: 'the police' },
            { surface: 'الْمَدَنِيِّينَ', lemma: 'مَدَنِيّ', pos: 'adj', features: 'def.gen.pl', root: 'م د ن', gloss: 'the civilian' },
          ],
        },
        {
          id: 'qs-v12-c31-004',
          ar: 'وَرَأَوْا الشَّابَّ يَحْمِلُ الصَّلِيبَ،',
          en: 'and saw the young man carrying the cross,',
          tokens: [
            { surface: 'وَرَأَوْا', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to see; and saw' },
            { surface: 'الشَّابَّ', lemma: 'شَابّ', pos: 'noun', features: 'def.acc', gloss: 'the young man' },
            { surface: 'يَحْمِلُ', lemma: 'حَمَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to carry; carrying' },
            { surface: 'الصَّلِيبَ', lemma: 'صَلِيب', pos: 'noun', features: 'def.acc', root: 'ص ل ب', gloss: 'the cross' },
          ],
        },
        {
          id: 'qs-v12-c31-005',
          ar: 'وَاخْتَلَطَ الْحَابِلُ بِالنَّابِلِ،',
          en: 'and everything fell into confusion,',
          tokens: [
            { surface: 'وَاخْتَلَطَ', lemma: 'اِخْتَلَطَ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ل ط', gloss: 'to become mixed up; and became mixed up' },
            { surface: 'الْحَابِلُ', lemma: 'حَابِل', pos: 'noun', features: 'def.nom', root: 'ح ب ل', gloss: 'the rope-caster (idiom)' },
            { surface: 'بِالنَّابِلِ', lemma: 'نَابِل', pos: 'noun', features: 'prep+def.gen', root: 'ن ب ل', gloss: 'with the arrow-shooter (idiom)' },
          ],
        },
        {
          id: 'qs-v12-c31-006',
          ar: 'وَكَثُرَ الضَّجِيجُ،',
          en: 'and the clamor grew loud,',
          tokens: [
            { surface: 'وَكَثُرَ', lemma: 'كَثُرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to increase; and increased' },
            { surface: 'الضَّجِيجُ', lemma: 'ضَجِيج', pos: 'noun', features: 'def.nom', root: 'ض ج ج', gloss: 'the clamor' },
          ],
        },
        {
          id: 'qs-v12-c31-007',
          ar: 'فَأَخَذُوا بِيَدِ الشَّابِّ الْحَامِلِ لِلصَّلِيبِ،',
          en: 'so they seized the hand of the young man carrying the cross,',
          tokens: [
            { surface: 'فَأَخَذُوا', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to take; so took' },
            { surface: 'بِيَدِ', lemma: 'يَد', pos: 'noun', features: 'prep+constr.gen', gloss: 'by the hand of' },
            { surface: 'الشَّابِّ', lemma: 'شَابّ', pos: 'noun', features: 'def.gen', gloss: 'the young man' },
            { surface: 'الْحَامِلِ', lemma: 'حَامِل', pos: 'noun', features: 'def.gen', root: 'ح م ل', gloss: 'the one carrying' },
            { surface: 'لِلصَّلِيبِ', lemma: 'صَلِيب', pos: 'noun', features: 'prep+def.gen', gloss: 'for the cross' },
          ],
        },
        {
          id: 'qs-v12-c31-008',
          ar: 'وَهُمْ لَا يَشُكُّونَ فِي أَنَّهُ هُوَ الْمَحْكُومُ عَلَيْهِ بِالصَّلْبِ،',
          en: 'not doubting for a moment that he was the one sentenced to crucifixion,',
          tokens: [
            { surface: 'وَهُمْ', lemma: 'هُمْ', pos: 'noun', features: 'conj+3mp', gloss: 'and they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَشُكُّونَ', lemma: 'شَكَّ', pos: 'verb', features: 'impf.3mp', root: 'ش ك ك', gloss: 'to doubt; doubt' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'that' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he' },
            { surface: 'الْمَحْكُومُ', lemma: 'مَحْكُوم', pos: 'noun', features: 'def.nom', root: 'ح ك م', gloss: 'the one sentenced' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'against him' },
            { surface: 'بِالصَّلْبِ', lemma: 'صَلْب', pos: 'noun', features: 'prep+def.gen', root: 'ص ل ب', gloss: 'to crucifixion' },
          ],
        },
        {
          id: 'qs-v12-c31-009',
          ar: 'وَهُوَ يَصِيحُ،',
          en: 'while he was crying out,',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he' },
            { surface: 'يَصِيحُ', lemma: 'صَاحَ', pos: 'verb', features: 'impf.3ms', root: 'ص ي ح', gloss: 'to cry out; crying out' },
          ],
        },
        {
          id: 'qs-v12-c31-010',
          ar: 'وَيَضِجُّ،',
          en: 'and protesting loudly,',
          tokens: [
            { surface: 'وَيَضِجُّ', lemma: 'ضَجَّ', pos: 'verb', features: 'conj+impf.3ms', root: 'ض ج ج', gloss: 'to clamor; and clamoring' },
          ],
        },
        {
          id: 'qs-v12-c31-011',
          ar: 'وَيُعْلِنُ بَرَاءَتَهُ وَأَنَّهُ لَا شَأْنَ لَهُ بِالْحُكْمِ وَالصَّلْبِ،',
          en: 'proclaiming his innocence and that he had nothing to do with the sentence or the crucifixion,',
          tokens: [
            { surface: 'وَيُعْلِنُ', lemma: 'أَعْلَنَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ع ل ن', gloss: 'to announce; and announcing' },
            { surface: 'بَرَاءَتَهُ', lemma: 'بَرَاءَة', pos: 'noun', features: 'acc+3ms', root: 'ب ر أ', gloss: 'his innocence' },
            { surface: 'وَأَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'and that he' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'شَأْنَ', lemma: 'شَأْن', pos: 'noun', features: 'indef.acc', gloss: 'concern' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'بِالْحُكْمِ', lemma: 'حُكْم', pos: 'noun', features: 'prep+def.gen', gloss: 'with the judgment' },
            { surface: 'وَالصَّلْبِ', lemma: 'صَلْب', pos: 'noun', features: 'conj+def.gen', gloss: 'and the crucifixion' },
          ],
        },
        {
          id: 'qs-v12-c31-012',
          ar: 'وَإِنَّمَا كُلِّفَ حَمْلَ الْعُودِ سُخْرَةً وَظُلْماً،',
          en: 'and that he had only been forced, unjustly, to carry the wooden beam,',
          tokens: [
            { surface: 'وَإِنَّمَا', lemma: 'إِنَّمَا', pos: 'part', features: 'conj+part', gloss: 'and only, rather' },
            { surface: 'كُلِّفَ', lemma: 'كَلَّفَ', pos: 'verb', features: 'pass+perf.3ms', root: 'ك ل ف', gloss: 'to task with; was tasked with' },
            { surface: 'حَمْلَ', lemma: 'حَمْل', pos: 'noun', features: 'acc.constr', root: 'ح م ل', gloss: 'the carrying of' },
            { surface: 'الْعُودِ', lemma: 'عُود', pos: 'noun', features: 'def.gen', root: 'ع و د', gloss: 'the wooden beam' },
            { surface: 'سُخْرَةً', lemma: 'سُخْرَة', pos: 'noun', features: 'indef.acc', root: 'س خ ر', gloss: 'as forced labor' },
            { surface: 'وَظُلْماً', lemma: 'ظُلْم', pos: 'noun', features: 'conj+indef.acc', gloss: 'and unjustly' },
          ],
        },
        {
          id: 'qs-v12-c31-013',
          ar: 'وَشُرْطَةُ الْمَشْنَقِ لَا يَلْتَفِتُونَ إِلَى ذَلِكَ،',
          en: 'but the gallows police paid no attention to any of this,',
          tokens: [
            { surface: 'وَشُرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'conj+constr.nom', gloss: 'and the police of' },
            { surface: 'الْمَشْنَقِ', lemma: 'مَشْنَق', pos: 'noun', features: 'def.gen', gloss: 'the gallows' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَلْتَفِتُونَ', lemma: 'اِلْتَفَتَ', pos: 'verb', features: 'impf.3mp', gloss: 'to pay attention; pay attention' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v12-c31-014',
          ar: 'وَلَا يَفْهَمُونَ لُغَتَهُ،',
          en: 'and could not understand his language,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَفْهَمُونَ', lemma: 'فَهِمَ', pos: 'verb', features: 'impf.3mp', gloss: 'to understand; understand' },
            { surface: 'لُغَتَهُ', lemma: 'لُغَة', pos: 'noun', features: 'acc+3ms', root: 'ل غ و', gloss: 'his language' },
          ],
        },
        {
          id: 'qs-v12-c31-015',
          ar: 'لِأَنَّهُمْ مِنَ الرُّومِ وَالْيُونَانِ الْأُمَّةِ الْحَاكِمَةِ.',
          en: 'because they were Romans and Greeks, the ruling nation.',
          tokens: [
            { surface: 'لِأَنَّهُمْ', lemma: 'لِأَنَّ', pos: 'part', features: 'part+3mp', gloss: 'because they' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الرُّومِ', lemma: 'رُوم', pos: 'noun', features: 'def.gen', gloss: 'the Romans' },
            { surface: 'وَالْيُونَانِ', lemma: 'يُونَان', pos: 'noun', features: 'conj+def.gen', gloss: 'and the Greeks' },
            { surface: 'الْأُمَّةِ', lemma: 'أُمَّة', pos: 'noun', features: 'def.gen', gloss: 'the nation' },
            { surface: 'الْحَاكِمَةِ', lemma: 'حَاكِم', pos: 'adj', features: 'def.gen.f', gloss: 'the ruling' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ الشَّابُّ يَحْمِلُ؟',
          options: ['الصَّلِيبَ', 'سَيْفاً', 'كِتَاباً'],
          answer: 0,
          qEn: 'What was the young man carrying?',
          optionsEn: ['The cross', 'A sword', 'A book'],
        },
        {
          q: 'لِمَاذَا لَمْ تَفْهَمْ شُرْطَةُ الْمَشْنَقِ كَلَامَ الشَّابِّ؟',
          options: ['لِأَنَّهُمْ مِنَ الرُّومِ وَالْيُونَانِ وَلَا يَفْهَمُونَ لُغَتَهُ', 'لِأَنَّهُ كَانَ أَخْرَسَ', 'لِأَنَّهُمْ كَانُوا نَائِمِينَ'],
          answer: 0,
          qEn: "Why couldn't the gallows police understand the young man's words?",
          optionsEn: ['Because they were Romans and Greeks and did not understand his language', 'Because he was mute', 'Because they were asleep'],
        },
        {
          q: 'مَاذَا كَانَ الشَّابُّ يَقُولُ عَنْ نَفْسِهِ؟',
          options: ['إِنَّهُ بَرِيءٌ وَلَا شَأْنَ لَهُ بِالْحُكْمِ وَالصَّلْبِ', 'إِنَّهُ هُوَ الْمُجْرِمُ الْحَقِيقِيُّ', 'إِنَّهُ لَا يَعْرِفُ شَيْئاً عَنِ الْقَضِيَّةِ'],
          answer: 0,
          qEn: 'What did the young man say about himself?',
          optionsEn: ['That he was innocent and had nothing to do with the sentence or the crucifixion', 'That he was the real culprit', 'That he knew nothing about the case'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَهَكَذَا',
        post: 'الْمَوْكِبُ إِلَى بَابِ الْمَشْنَقِ.',
        en: 'And so the procession reached the gate of the gallows.',
        options: ['وَصَلَ', 'يَصِلُ', 'صِلْ', 'وَاصَلَ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- a completed arrival, matching the narrative\'s past tense.',
          'Imperfect -- wrong tense; this is narration of a completed event.',
          'Imperative -- wrong mood; this is narration, not a command.',
          'Form III "to continue, keep at" -- wrong verb entirely for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَأَخَذُوا بِيَدِ الشَّابِّ',
        post: 'لِلصَّلِيبِ.',
        en: 'So they seized the hand of the young man carrying the cross.',
        options: ['الْحَامِلِ', 'حَمَلَ', 'يَحْمِلُ', 'حَامِلاً'],
        answer: 0,
        rationales: [
          'Definite genitive participle -- agrees with الشَّابِّ as its attributive description, matching the printed frame.',
          'Perfect verb -- wrong part of speech for this position, which needs an adjectival participle.',
          'Imperfect verb -- wrong part of speech, same reason.',
          'Indefinite accusative -- wrong case and state; the position needs a definite genitive agreeing with الشَّابِّ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'الضَّجِيجُ.',
        en: 'And the clamor grew loud.',
        options: ['كَثُرَ', 'كَثُرَتْ', 'يَكْثُرُ', 'أَكْثَرَ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- agrees with masculine الضَّجِيجُ, matching the narrative\'s past tense.',
          'Feminine -- wrong gender; الضَّجِيجُ is masculine.',
          'Imperfect -- wrong tense for this completed-action narration.',
          'Form IV "to make abundant" -- wrong verb; the text uses the simple form I.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَحْمِلُ الشَّابُّ الصَّلِيبَ',
        pre: '',
        post: 'الصَّلِيبَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَحْمِلُ', 'يَحْمِلُ', 'تَحْمِلُ', 'نَحْمِلُ'],
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
        base: 'يَحْمِلُ الشَّابُّ الصَّلِيبَ',
        pre: '',
        post: 'الصَّلِيبَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَحْمِلُ', 'يَحْمِلُ', 'أَحْمِلُ', 'نَحْمِلُ'],
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
        base: 'يَحْمِلُ الشَّابُّ الصَّلِيبَ',
        pre: '',
        post: 'الصَّلِيبَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَحْمِلُونَ', 'يَحْمِلُ', 'تَحْمِلُ', 'نَحْمِلُ'],
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

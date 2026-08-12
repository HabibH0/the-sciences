// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 19 -- الطُّوفَانُ.
// Printed pages 79 (from its own heading, partway down the page, right
// after ch18's closing Qur'an quote, down to the bottom) through 80
// (top six sentences only, ending right before ch20's heading ابْنُ نُوحٍ
// on the same page). Transcribed by hand from the scan (vision OCR,
// 300dpi render) against ../CHAPTER-FORMAT.md.
//
// Allah's promised punishment finally arrives: the sky pours down rain
// without end, until it seems like a sieve that cannot hold water back;
// water gushes up from the ground too, flowing until it surrounds the
// people from every side. Allah reveals to Nūḥ to take aboard whoever
// has believed, along with his own family, and a mated pair -- male and
// female -- of every animal and bird, for the Flood is universal and no
// human or animal will escape it. Nūḥ does exactly this: the believers
// and the animal pairs board with him, and the ship sails off, riding
// waves like mountains. The rest of the people scramble up onto every
// high place and hill, fleeing Allah's punishment -- but there is no
// refuge from Allah except in Allah Himself.
//
// Grammar / lexical notes:
//   -- Every long printed sentence is split at its natural clause/
//      colon/comma boundary into multiple shorter entries here (house
//      convention, ch7/ch9/ch10/ch12-18) -- no rewording, same printed
//      text and order. Allah's two-part instruction to Nūḥ (still one
//      printed sentence broken by a colon, then a further printed
//      sentence broken by a comma) is split into qs-v3-c19-005/006 and
//      qs-v3-c19-007/008/009 respectively, matching the colon/comma.
//   -- طُوفَان (new, "the Flood, the Deluge" -- also this chapter's own
//      title) had never been tagged anywhere in the corpus before this
//      chapter, despite the word نُوحٍ الطُّوفَان being central to the whole
//      story -- confirmed via a corpus-wide grep before adding it here.
//   -- عَامّ (new, "general, universal," root ع م م) is an UNRELATED
//      homograph to the already-taught عَام ("a year," root ع و م, used
//      repeatedly in ch16/ch17's أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَاماً) -- flagged
//      here to prevent the two from being confused with each other
//      later, matching the corpus's existing same-chapter-homonym-
//      flagging practice (نَجَّار/نَجَا in ch18, أَمَا/أَمَاتَ in ch12).
//   -- طَائِر (new, "a bird," an active-participle noun) is a distinct
//      lemma from the already-taught collective noun طَيْر ("the
//      bird(s)"), matching the corpus's participle-as-distinct-lemma
//      convention already used for كَافِر beside كَفَرَ and مُسَمّى beside
//      سَمَّى.
//   -- وَعْد (new, "a promise," a verbal noun) is a distinct lemma from
//      the already-taught verb وَعَدَ (ch17), matching the corpus's
//      noun-beside-verb-same-root convention already used for
//      نَصِيحَة/نَصَحَ and دَعْوَة/دَعَا.
//   -- أَمْطَرَ (new, form IV "to rain, send down rain," root م ط ر) shares
//      its root with the already-taught noun مَطَر ("the rain") but is
//      its own lemma as a distinct verb; unrelated to the already-taught
//      verb حَبَسَ ("to withhold"), which happened to describe the *lack*
//      of rain back in ch16.
//   -- لِأَنَّ ("because") is NOT listed in newWords here even though this
//      is its first appearance in volume 3 -- it already has precedent
//      elsewhere in the corpus (qasas-v2 ch16/17/18, and even earlier in
//      this very volume as لِأَنَّهَا in ch6), so it is tagged as its own
//      lemma 'لِأَنَّ' (features 'part', root 'أ ن ن') per the more recent
//      house convention, matching the qasas-v2 usage rather than the
//      older أَنَّ+'prep+part' fusion seen in qasas-v1 ch7/ch8.
//   -- كَالْجِبَالِ (qs-v3-c19-014) tokenizes as lemma جَبَل with features
//      'prep+pl.def.gen', folding كَ ("like") into the prep slot exactly
//      as the corpus already does for بِ/فِ-type fused prepositions (see
//      qasas-v3 ch9's كَالْبَشَرِ -> lemma بَشَر, 'prep+def.gen').
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): جَاءَ، اللَّه، سَمَاء،
//      حَتَّى، لا، مَاء، النَّاس، مِنْ، كُلّ، أَوْحَى، إِلَى، نُوح، أَخَذَ، مَعَ، مَنْ،
//      آمَنَ، بِ، قَوْم، أَهْل، حَيَوَان، إِنْسَان، نَجَا، كَذَلِكَ، فَعَلَ، كَانَ، فِي،
//      سَفِينَة، زَوْج، سَارَ، جَرَى، جَبَل، مَكَان، عَذَاب، لَكِنْ، إِلَّا
//      are all already taught and are NOT re-listed in newWords here.
//
// 21 new words (وَعْد، عِيَاذ، أَمْطَرَ، مِنْخَلَة، أَمْسَكَ، نَبَعَ، سَالَ، أَحَاطَ،
// جَانِب، طَائِر، ذَكَر، أُنْثَى، عَامّ، رَبْوَة، فَرَّ، مَلْجَأ، كَأَنَّ، عَالٍ، مَوْج،
// اِرْتَقَى، طُوفَان) -- the chapter opens a new semantic field around
// weather, flooding, and terrain, on top of introducing the book's own
// title word.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch19',
  title: { ar: 'الطُّوفَانُ', en: 'The Flood' },
  newWords: ['وَعْد', 'عِيَاذ', 'أَمْطَرَ', 'مِنْخَلَة', 'أَمْسَكَ', 'نَبَعَ', 'سَالَ', 'أَحَاطَ', 'جَانِب', 'طَائِر', 'ذَكَر', 'أُنْثَى', 'عَامّ', 'رَبْوَة', 'فَرَّ', 'مَلْجَأ', 'كَأَنَّ', 'عَالٍ', 'مَوْج', 'اِرْتَقَى', 'طُوفَان'],
  lemmas: {
    وَعْد: { gloss: 'a promise' },
    عِيَاذ: { gloss: 'refuge, seeking refuge (idiom: "we seek refuge in Allah!")' },
    أَمْطَرَ: { gloss: 'to rain, send down rain' },
    مِنْخَلَة: { gloss: 'a sieve' },
    أَمْسَكَ: { gloss: 'to hold, withhold, hold back' },
    نَبَعَ: { gloss: 'to gush forth, spring up' },
    سَالَ: { gloss: 'to flow' },
    أَحَاطَ: { gloss: 'to surround, encompass' },
    جَانِب: { gloss: 'a side' },
    طَائِر: { gloss: 'a bird' },
    ذَكَر: { gloss: 'a male' },
    أُنْثَى: { gloss: 'a female' },
    عَامّ: { gloss: 'general, universal' },
    رَبْوَة: { gloss: 'a hill, high ground' },
    فَرَّ: { gloss: 'to flee' },
    مَلْجَأ: { gloss: 'a refuge, a shelter' },
    كَأَنَّ: { gloss: 'as if, as though' },
    عَالٍ: { gloss: 'high, elevated' },
    مَوْج: { gloss: 'waves, a wave' },
    اِرْتَقَى: { gloss: 'to climb up, ascend' },
    طُوفَان: { gloss: 'the Flood, the Deluge' },
  },
  paragraphs: [
    {
      en: 'And Allah\'s promise came -- so we seek refuge in Allah! The sky rained, and rained, and rained, and rained. until it was as if the sky were a sieve that could not hold water back. And water gushed forth and flowed until it surrounded the people from every side. And Allah revealed to Nūḥ: "Take with you whoever has believed in you, from your people and your family."',
      sentences: [
        {
          id: 'qs-v3-c19-001',
          ar: 'وَجَاءَ وَعْدُ اللَّهِ فَالْعِيَاذُ بِاللَّهِ!',
          en: 'And Allah\'s promise came -- so we seek refuge in Allah!',
          tokens: [
            { surface: 'وَجَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج ي أ', gloss: 'to come; and came' },
            { surface: 'وَعْدُ', lemma: 'وَعْد', pos: 'noun', features: 'nom.constr', root: 'و ع د', gloss: 'the promise of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'فَالْعِيَاذُ', lemma: 'عِيَاذ', pos: 'noun', features: 'conj+def.nom', root: 'ع و ذ', gloss: 'so refuge (i.e. we seek refuge!)' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
          ],
        },
        {
          id: 'qs-v3-c19-002',
          ar: 'أَمْطَرَتِ السَّمَاءُ وَأَمْطَرَتْ وَأَمْطَرَتْ وَأَمْطَرَتْ.',
          en: 'The sky rained, and rained, and rained, and rained.',
          tokens: [
            { surface: 'أَمْطَرَتِ', lemma: 'أَمْطَرَ', pos: 'verb', features: 'perf.3fs', root: 'م ط ر', gloss: 'to rain, send down rain; rained' },
            { surface: 'السَّمَاءُ', lemma: 'سَمَاء', pos: 'noun', features: 'def.nom', root: 'س م و', gloss: 'the sky' },
            { surface: 'وَأَمْطَرَتْ', lemma: 'أَمْطَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to rain; and rained' },
            { surface: 'وَأَمْطَرَتْ', lemma: 'أَمْطَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to rain; and rained' },
            { surface: 'وَأَمْطَرَتْ', lemma: 'أَمْطَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to rain; and rained' },
          ],
        },
        {
          id: 'qs-v3-c19-003',
          ar: 'حَتَّى كَأَنَّ السَّمَاءَ مِنْخَلَةٌ لا تُمْسِكُ مَاءً.',
          en: 'until it was as if the sky were a sieve that could not hold water back.',
          tokens: [
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'until' },
            { surface: 'كَأَنَّ', lemma: 'كَأَنَّ', pos: 'part', features: 'part', root: 'ك أ ن', gloss: 'as if, as though' },
            { surface: 'السَّمَاءَ', lemma: 'سَمَاء', pos: 'noun', features: 'def.acc', gloss: 'the sky' },
            { surface: 'مِنْخَلَةٌ', lemma: 'مِنْخَلَة', pos: 'noun', features: 'indef.nom', root: 'ن خ ل', gloss: 'a sieve' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُمْسِكُ', lemma: 'أَمْسَكَ', pos: 'verb', features: 'impf.3fs', root: 'م س ك', gloss: 'to hold, withhold; hold back' },
            { surface: 'مَاءً', lemma: 'مَاء', pos: 'noun', features: 'indef.acc', gloss: 'water' },
          ],
        },
        {
          id: 'qs-v3-c19-004',
          ar: 'وَنَبَعَ الْمَاءُ وَسَالَ حَتَّى أَحَاطَ بِالنَّاسِ مِنْ كُلِّ جَانِبٍ.',
          en: 'And water gushed forth and flowed until it surrounded the people from every side.',
          tokens: [
            { surface: 'وَنَبَعَ', lemma: 'نَبَعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ب ع', gloss: 'to gush forth, spring up; and gushed forth' },
            { surface: 'الْمَاءُ', lemma: 'مَاء', pos: 'noun', features: 'def.nom', gloss: 'the water' },
            { surface: 'وَسَالَ', lemma: 'سَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ي ل', gloss: 'to flow; and flowed' },
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'until' },
            { surface: 'أَحَاطَ', lemma: 'أَحَاطَ', pos: 'verb', features: 'perf.3ms', root: 'ح و ط', gloss: 'to surround, encompass; surrounded' },
            { surface: 'بِالنَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'prep+def.gen', root: 'ن و س', gloss: 'the people' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'جَانِبٍ', lemma: 'جَانِب', pos: 'noun', features: 'indef.gen', root: 'ج ن ب', gloss: 'a side' },
          ],
        },
        {
          id: 'qs-v3-c19-005',
          ar: 'وَأَوْحَى اللَّهُ إِلَى نُوحٍ:',
          en: 'And Allah revealed to Nūḥ:',
          tokens: [
            { surface: 'وَأَوْحَى', lemma: 'أَوْحَى', pos: 'verb', features: 'conj+perf.3ms', root: 'و ح ي', gloss: 'to reveal, inspire; and revealed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v3-c19-006',
          ar: 'خُذْ مَعَكَ مَنْ آمَنَ بِكَ مِنْ قَوْمِكَ وَأَهْلِكَ.',
          en: '"Take with you whoever has believed in you, from your people and your family."',
          tokens: [
            { surface: 'خُذْ', lemma: 'أَخَذَ', pos: 'verb', features: 'imp.2ms', root: 'أ خ ذ', gloss: 'to take; take!' },
            { surface: 'مَعَكَ', lemma: 'مَعَ', pos: 'prep', features: 'prep+2ms', gloss: 'with you' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whoever' },
            { surface: 'آمَنَ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3ms', root: 'أ م ن', gloss: 'to believe; has believed' },
            { surface: 'بِكَ', lemma: 'بِ', pos: 'prep', features: 'prep+2ms', gloss: 'in you' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَوْمِكَ', lemma: 'قَوْم', pos: 'noun', features: 'gen+2ms', gloss: 'your people' },
            { surface: 'وَأَهْلِكَ', lemma: 'أَهْل', pos: 'noun', features: 'conj+gen+2ms', root: 'أ ه ل', gloss: 'and your family' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَتِ السَّمَاءُ حِينَ جَاءَ وَعْدُ اللَّهِ؟',
          options: [
            'أَمْطَرَتِ السَّمَاءُ حَتَّى كَأَنَّهَا مِنْخَلَةٌ لا تُمْسِكُ مَاءً',
            'أَظْلَمَتِ السَّمَاءُ وَلَمْ تُمْطِرْ',
            'صَارَتِ السَّمَاءُ صَافِيَةً بِلَا سَحَابٍ'
          ],
          answer: 0,
          qEn: "What did the sky do when Allah's promise came?",
          optionsEn: [
            'The sky rained until it was as if it were a sieve that could not hold water back',
            'The sky darkened but did not rain',
            'The sky became clear, without a cloud'
          ],
        },
      ],
    },
    {
      en: 'And Allah revealed to Nūḥ to take with him, from every animal and bird, a pair -- a male and a female. Because the Flood was universal -- no human or animal could escape it. And so Nūḥ did, so with him in the ship was whoever had believed in him, from his people, and from every animal and bird, a pair.',
      sentences: [
        {
          id: 'qs-v3-c19-007',
          ar: 'وَأَوْحَى اللَّهُ إِلَى نُوحٍ',
          en: 'And Allah revealed to Nūḥ',
          tokens: [
            { surface: 'وَأَوْحَى', lemma: 'أَوْحَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to reveal; and revealed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v3-c19-008',
          ar: 'أَنْ يَأْخُذَ مَعَهُ مِنْ كُلِّ حَيَوَانٍ وَطَائِرٍ زَوْجاً،',
          en: 'to take with him, from every animal and bird, a pair --',
          tokens: [
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَأْخُذَ', lemma: 'أَخَذَ', pos: 'verb', features: 'impf.3ms', gloss: 'to take; take' },
            { surface: 'مَعَهُ', lemma: 'مَعَ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'حَيَوَانٍ', lemma: 'حَيَوَان', pos: 'noun', features: 'indef.gen', gloss: 'an animal' },
            { surface: 'وَطَائِرٍ', lemma: 'طَائِر', pos: 'noun', features: 'conj+indef.gen', root: 'ط ي ر', gloss: 'and a bird' },
            { surface: 'زَوْجاً', lemma: 'زَوْج', pos: 'noun', features: 'indef.acc', root: 'ز و ج', gloss: 'a pair, a mate' },
          ],
        },
        {
          id: 'qs-v3-c19-009',
          ar: 'ذَكَراً وَأُنْثَى.',
          en: 'a male and a female.',
          tokens: [
            { surface: 'ذَكَراً', lemma: 'ذَكَر', pos: 'noun', features: 'indef.acc', root: 'ذ ك ر', gloss: 'a male' },
            { surface: 'وَأُنْثَى', lemma: 'أُنْثَى', pos: 'noun', features: 'conj+indecl', root: 'أ ن ث', gloss: 'and a female' },
          ],
        },
        {
          id: 'qs-v3-c19-010',
          ar: 'لأَنَّ الطُّوفَانَ عَامٌّ لا يَنْجُو مِنْهُ إِنْسَانٌ وَلَا حَيَوَانٌ.',
          en: 'Because the Flood was universal -- no human or animal could escape it.',
          tokens: [
            { surface: 'لأَنَّ', lemma: 'لِأَنَّ', pos: 'part', features: 'part', root: 'أ ن ن', gloss: 'because' },
            { surface: 'الطُّوفَانَ', lemma: 'طُوفَان', pos: 'noun', features: 'def.acc', root: 'ط و ف', gloss: 'the Flood' },
            { surface: 'عَامٌّ', lemma: 'عَامّ', pos: 'adj', features: 'indef.nom', root: 'ع م م', gloss: 'general, universal' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَنْجُو', lemma: 'نَجَا', pos: 'verb', features: 'impf.3ms', gloss: 'to be saved, escape; escape' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from it' },
            { surface: 'إِنْسَانٌ', lemma: 'إِنْسَان', pos: 'noun', features: 'indef.nom', gloss: 'a human' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not, nor' },
            { surface: 'حَيَوَانٌ', lemma: 'حَيَوَان', pos: 'noun', features: 'indef.nom', gloss: 'an animal' },
          ],
        },
        {
          id: 'qs-v3-c19-011',
          ar: 'وَكَذَلِكَ فَعَلَ نُوْحٌ،',
          en: 'And so Nūḥ did,',
          tokens: [
            { surface: 'وَكَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and thus, and so' },
            { surface: 'فَعَلَ', lemma: 'فَعَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to do; did' },
            { surface: 'نُوْحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v3-c19-012',
          ar: 'فَكَانَ مَعَهُ فِي السَّفِينَةِ مَنْ آمَنَ بِهِ مِنْ قَوْمِهِ',
          en: 'so with him in the ship was whoever had believed in him, from his people,',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; so there was' },
            { surface: 'مَعَهُ', lemma: 'مَعَ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السَّفِينَةِ', lemma: 'سَفِينَة', pos: 'noun', features: 'def.gen', gloss: 'the ship' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whoever' },
            { surface: 'آمَنَ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3ms', gloss: 'to believe; had believed' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'in him' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
          ],
        },
        {
          id: 'qs-v3-c19-013',
          ar: 'وَمِنْ كُلِّ حَيَوَانٍ وَطَائِرٍ زَوْجٌ.',
          en: 'and from every animal and bird, a pair.',
          tokens: [
            { surface: 'وَمِنْ', lemma: 'مِنْ', pos: 'prep', features: 'conj+prep', gloss: 'and from' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'حَيَوَانٍ', lemma: 'حَيَوَان', pos: 'noun', features: 'indef.gen', gloss: 'an animal' },
            { surface: 'وَطَائِرٍ', lemma: 'طَائِر', pos: 'noun', features: 'conj+indef.gen', gloss: 'and a bird' },
            { surface: 'زَوْجٌ', lemma: 'زَوْج', pos: 'noun', features: 'indef.nom', gloss: 'a pair, a mate' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا أَمَرَ اللَّهُ نُوحاً أَنْ يَأْخُذَ مَعَهُ فِي السَّفِينَةِ؟',
          options: [
            'مَنْ آمَنَ بِهِ مِنْ قَوْمِهِ وَأَهْلِهِ، وَمِنْ كُلِّ حَيَوَانٍ وَطَائِرٍ زَوْجاً ذَكَراً وَأُنْثَى',
            'الذَّهَبَ وَالْفِضَّةَ وَكُلَّ مَا يَمْلِكُ',
            'الأَغْنِيَاءَ مِنْ قَوْمِهِ فَقَطْ'
          ],
          answer: 0,
          qEn: 'What did Allah command Nūḥ to take with him on the ship?',
          optionsEn: [
            'Whoever had believed in him from his people and family, and a pair -- male and female -- of every animal and bird',
            'Gold, silver, and everything he owned',
            'Only the rich among his people'
          ],
        },
      ],
    },
    {
      en: 'And the ship sailed, running with them amid waves like mountains. And the people climbed up every high place and every hill, fleeing from Allah\'s punishment. But there is no refuge from Allah except in Him.',
      sentences: [
        {
          id: 'qs-v3-c19-014',
          ar: 'وَسَارَتِ السَّفِينَةُ تَجْرِي بِهِمْ فِي مَوْجٍ كَالْجِبَالِ.',
          en: 'And the ship sailed, running with them amid waves like mountains.',
          tokens: [
            { surface: 'وَسَارَتِ', lemma: 'سَارَ', pos: 'verb', features: 'conj+perf.3fs', root: 'س ي ر', gloss: 'to travel, sail; and sailed' },
            { surface: 'السَّفِينَةُ', lemma: 'سَفِينَة', pos: 'noun', features: 'def.nom', gloss: 'the ship' },
            { surface: 'تَجْرِي', lemma: 'جَرَى', pos: 'verb', features: 'impf.3fs', root: 'ج ر ي', gloss: 'to run, flow; running' },
            { surface: 'بِهِمْ', lemma: 'بِ', pos: 'prep', features: 'prep+3mp', gloss: 'with them' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, amid' },
            { surface: 'مَوْجٍ', lemma: 'مَوْج', pos: 'noun', features: 'indef.gen', root: 'م و ج', gloss: 'waves' },
            { surface: 'كَالْجِبَالِ', lemma: 'جَبَل', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'like the mountains' },
          ],
        },
        {
          id: 'qs-v3-c19-015',
          ar: 'وَارْتَقَى الْقَوْمُ كُلَّ مَكَانٍ عَالٍ وَكُلَّ رَبْوَةٍ',
          en: 'And the people climbed up every high place and every hill,',
          tokens: [
            { surface: 'وَارْتَقَى', lemma: 'اِرْتَقَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ر ق ي', gloss: 'to climb up, ascend; and climbed up' },
            { surface: 'الْقَوْمُ', lemma: 'قَوْم', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'مَكَانٍ', lemma: 'مَكَان', pos: 'noun', features: 'indef.gen', gloss: 'a place' },
            { surface: 'عَالٍ', lemma: 'عَالٍ', pos: 'adj', features: 'indef.gen', root: 'ع ل و', gloss: 'high, elevated' },
            { surface: 'وَكُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'conj+acc.constr', gloss: 'and every' },
            { surface: 'رَبْوَةٍ', lemma: 'رَبْوَة', pos: 'noun', features: 'indef.gen', root: 'ر ب و', gloss: 'a hill' },
          ],
        },
        {
          id: 'qs-v3-c19-016',
          ar: 'يَفِرُّونَ مِنْ عَذَابِ اللَّهِ.',
          en: "fleeing from Allah's punishment.",
          tokens: [
            { surface: 'يَفِرُّونَ', lemma: 'فَرَّ', pos: 'verb', features: 'impf.3mp', root: 'ف ر ر', gloss: 'to flee; fleeing' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عَذَابِ', lemma: 'عَذَاب', pos: 'noun', features: 'gen.constr', gloss: 'the punishment of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v3-c19-017',
          ar: 'وَلَكِنْ لا مَلْجَأَ مِنَ اللَّهِ إِلَّا إِلَيْهِ.',
          en: 'But there is no refuge from Allah except in Him.',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'there is no' },
            { surface: 'مَلْجَأَ', lemma: 'مَلْجَأ', pos: 'noun', features: 'indef.acc', root: 'ل ج أ', gloss: 'a refuge' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to Him' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيْنَ ارْتَقَى بَاقِي الْقَوْمِ يَفِرُّونَ مِنْ عَذَابِ اللَّهِ، وَهَلْ نَفَعَهُمْ ذَلِكَ؟',
          options: [
            'ارْتَقَوْا كُلَّ مَكَانٍ عَالٍ وَكُلَّ رَبْوَةٍ، وَلَكِنْ لا مَلْجَأَ مِنَ اللَّهِ إِلَّا إِلَيْهِ',
            'رَكِبُوا سُفُناً أُخْرَى فَنَجَوْا',
            'اخْتَبَأُوا فِي بُيُوتِهِمْ فَنَجَوْا'
          ],
          answer: 0,
          qEn: "Where did the rest of the people climb up to, fleeing Allah's punishment, and did it help them?",
          optionsEn: [
            'They climbed up every high place and every hill, but there is no refuge from Allah except in Him',
            'They rode other ships and were saved',
            'They hid in their houses and were saved'
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'أَمْطَرَتِ السَّمَاءُ حَتَّى',
        post: 'السَّمَاءَ مِنْخَلَةٌ لا تُمْسِكُ مَاءً.',
        en: 'The sky rained until it was as if the sky were a sieve that could not hold water back.',
        options: ['كَأَنَّ', 'أَنَّ', 'لَكِنَّ', 'إِنَّ'],
        answer: 0,
        rationales: [
          '"as if" -- matches the printed حَتَّى كَأَنَّ السَّمَاءَ, introducing a hypothetical comparison.',
          '"that" -- wrong sense; أَنَّ reports a fact, it does not introduce a hypothetical comparison.',
          '"but" -- wrong sense; there is no contrast here, only a comparison.',
          '"indeed" -- wrong sense; إِنَّ emphasizes a fact, it does not mean "as if."',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ اللَّهُ لِنُوحٍ:',
        post: 'مَعَكَ مَنْ آمَنَ بِكَ مِنْ قَوْمِكَ وَأَهْلِكَ.',
        en: 'Allah said to Nūḥ: take with you whoever has believed in you, from your people and your family.',
        options: ['خُذْ', 'أَخَذْتَ', 'يَأْخُذُ', 'خُذُوا'],
        answer: 0,
        rationales: [
          '2nd masculine singular imperative -- "take!", matching the printed خُذْ مَعَكَ, a direct command to Nūḥ.',
          'Perfect -- wrong tense/mood; a command needs the imperative, not the perfect.',
          '3rd masculine singular imperfect -- wrong person; the command addresses Nūḥ directly as "you."',
          '2nd masculine plural imperative -- wrong number; Allah addresses Nūḥ alone here, not a group.',
        ],
      },
      {
        type: 'cloze',
        pre: 'الطُّوفَانُ عَامٌّ لا',
        post: 'مِنْهُ إِنْسَانٌ وَلَا حَيَوَانٌ.',
        en: 'The Flood was universal -- no human or animal could escape it.',
        options: ['يَنْجُو', 'نَجَا', 'يُنْجِي', 'نَاجٍ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine singular, after لا -- "escapes/could escape," matching the printed لا يَنْجُو.',
          'Perfect -- wrong tense; the statement is a general, ongoing truth about the Flood, which needs the imperfect.',
          'Form IV ("to save someone else") -- wrong voice; the sentence needs "escape," not "save."',
          'Active participle (noun, "one who escapes") -- wrong part of speech for this position, which needs an inflected verb.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'تُمْسِكُ السَّمَاءُ مَاءً',
        pre: '',
        post: 'مَاءً',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m)',
        options: ['تُمْسِكُ', 'يُمْسِكُ', 'أُمْسِكُ', 'نُمْسِكُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular imperfect -- matches أَنْتَ (identical in form to the 3rd feminine singular used in the base, but here reassigned to "you").',
          '3rd masculine singular -- wrong person; the target is "you," not "he."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '1st plural -- wrong person; the target is "you," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَأْخُذُ نُوحٌ مَعَهُ مَنْ آمَنَ بِهِ',
        pre: '',
        post: 'مَعَهُ مَنْ آمَنَ بِهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['آخُذُ', 'يَأْخُذُ', 'تَأْخُذُ', 'نَأْخُذُ'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَفِرُّ الْقَوْمُ مِنْ عَذَابِ اللَّهِ',
        pre: '',
        post: 'مِنْ عَذَابِ اللَّهِ',
        targetPerson: 'هُم',
        targetEn: 'they (m)',
        options: ['يَفِرُّونَ', 'يَفِرُّ', 'تَفِرُّ', 'نَفِرُّ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُم, and is the exact form printed in the chapter (يَفِرُّونَ).',
          '3rd masculine singular -- wrong number; the target is plural هُم, not a single "he."',
          '3rd/2nd feminine singular -- wrong person and number.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

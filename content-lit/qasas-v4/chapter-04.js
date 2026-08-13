// قَصَصُ النَّبِيِّينَ, volume 4 «الْعَاصِفَةُ», chapter 4 -- قُصُورُ عَادٍ.
// Printed pages 86 (after ch3's closing بِالآخِرَةِ) - 87 (top, ending before
// ch5's heading هُودٌ الرَّسُولُ). Transcribed by hand from a 200dpi render
// against ../CHAPTER-FORMAT.md.
//
// From moral indictment (ch3) to material critique: ʿĀd pours its stolen
// leisure into ever-taller palaces built from vanity and never from need,
// while its own poor go homeless and the "foolish" rich leave their houses
// standing empty -- an early image of wealth divorced from any belief in
// being answerable for it in the Hereafter. No Qur'anic quotation on these
// pages.
//
// Grammar / lexical notes:
//   -- لَا شُغْلَ لَهُمْ (qs-v4-c04-001) and لَا سَاكِنَ فِيهَا (qs-v4-c04-012) are
//      both لَا النَّافِيَةُ لِلْجِنْسِ (categorical negation) -- the noun after لَا
//      is mabnī on fatḥa, not a normal case ending. Tagged indef.acc for
//      consistency with the rest of the corpus (CHAPTER-FORMAT.md has no
//      separate atom for mabnī state), matching how other frozen-fatḥa forms
//      are handled elsewhere in the project.
//   -- الأَغْبِيَاءِ (qs-v4-c04-012) reuses ch2's غَبِيّ ('foolish') for the
//      same rich-but-senseless characterization, now definite and plural --
//      not re-listed in newWords since the lemma was already taught earlier
//      in this volume.
//   -- Three consecutive وَكَانُوا + imperfect habitual-past clauses
//      (qs-v4-c04-{006,008,010}, all "they used to build...") are this
//      chapter's recycled frame, built into the workshop below.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ، عَادٍ، لَا، لِ، إِلَّا،
//      بَعْض، عَلَى، في، قَصْر، عَالٍ، بَيْت، أَمْوَال (مَال)، مَاء، حِجَارَة، رَأَى،
//      مَكَان، أَوْ، أَرْض، بَنَى، يَسْكُنُونَ (سَكَنَ)، مَاتَ، غَيْر، حَاجَة، نَاس،
//      وَجَدَ، أَكَلَ، لَبِسَ، فَقِير، غَبِيّ، عَرَفَ، آمَنَ، آخِرَة are all already
//      taught and NOT re-listed.
//
// 15 new words this chapter: شُغْل، أَكْل، شُرْب، لَهْو، لَعِب، فَخَرَ، بِنَاء، وَاسِع،
// ضَاعَ، طِين، خَالٍ، مُرْتَفِع، رَفِيع، دَائِم، أَبَداً، سَاكِن -- wait, that lists 16;
// the true count is 15 since شُغْل is already taught (qasas-v3 ch18, 'the
// work, task') and is NOT re-listed below despite appearing in this
// chapter's very first sentence.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch4',
  title: { ar: 'قُصُورُ عَادٍ', en: 'The Palaces of ʿĀd' },
  newWords: [
    'أَكْل', 'شُرْب', 'لَهْو', 'لَعِب', 'فَخَرَ', 'بِنَاء', 'وَاسِع', 'ضَاعَ', 'طِين', 'خَالٍ', 'مُرْتَفِع', 'رَفِيع', 'دَائِم', 'أَبَداً', 'سَاكِن',
  ],
  lemmas: {
    'شُغْل': { gloss: 'occupation, task' },
    'أَكْل': { gloss: 'eating' },
    'شُرْب': { gloss: 'drinking' },
    'لَهْو': { gloss: 'amusement' },
    'لَعِب': { gloss: 'play' },
    'فَخَرَ': { gloss: 'to boast, take pride' },
    'بِنَاء': { gloss: 'building, construction' },
    'وَاسِع': { gloss: 'spacious, wide' },
    'ضَاعَ': { gloss: 'to be lost, wasted' },
    'طِين': { gloss: 'clay, mud' },
    'خَالٍ': { gloss: 'empty, vacant' },
    'مُرْتَفِع': { gloss: 'elevated, raised' },
    'رَفِيع': { gloss: 'lofty, tall' },
    'دَائِم': { gloss: 'forever, lasting' },
    'أَبَداً': { gloss: 'ever, never' },
    'سَاكِن': { gloss: 'dweller, inhabitant' },
  },
  paragraphs: [
    {
      en: "ʿĀd had no occupation but eating, drinking, amusement, and play. Some of them would boast over others in building lofty palaces and spacious houses. Their wealth was wasted on water, clay, and stone -- they never saw an empty spot or elevated ground without building a lofty palace on it. They built houses as if they would dwell in them forever and never die. They built palaces without any need, while the people could find nothing to eat or wear. The poor among them could not find a house to live in, while the houses of the foolish stood empty -- and whoever saw them and saw their palaces knew that they did not believe in the Hereafter.",
      sentences: [
        {
          id: 'qs-v4-c04-001',
          ar: 'وَكَانَ عَادٌ لَا شُغْلَ لَهُمْ إِلَّا الأَكْلُ وَالشُّرْبُ وَاللَّهْوُ وَاللَّعِبُ.',
          en: 'ʿĀd had no occupation but eating, drinking, amusement, and play.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'عَادٌ', lemma: 'عَاد', pos: 'proper', features: 'nom', gloss: 'ʿĀd' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'شُغْلَ', lemma: 'شُغْل', pos: 'noun', features: 'indef.acc', gloss: 'occupation, task' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'الأَكْلُ', lemma: 'أَكْل', pos: 'noun', features: 'def.nom', gloss: 'eating' },
            { surface: 'وَالشُّرْبُ', lemma: 'شُرْب', pos: 'noun', features: 'conj+def.nom', gloss: 'and drinking' },
            { surface: 'وَاللَّهْوُ', lemma: 'لَهْو', pos: 'noun', features: 'conj+def.nom', gloss: 'and amusement' },
            { surface: 'وَاللَّعِبُ', lemma: 'لَعِب', pos: 'noun', features: 'conj+def.nom', gloss: 'and play' },
          ],
        },
        {
          id: 'qs-v4-c04-002',
          ar: 'وَكَانَ بَعْضُهُمْ يَفْخَرُ عَلَى بَعْضٍ فِي بِنَاءِ الْقُصُورِ الْعَالِيَةِ وَالْبُيُوتِ الْوَاسِعَةِ.',
          en: 'Some of them would boast over others in building lofty palaces and spacious houses.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'بَعْضُهُمْ', lemma: 'بَعْض', pos: 'noun', features: 'nom+3mp', gloss: 'some of them' },
            { surface: 'يَفْخَرُ', lemma: 'فَخَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to boast; boasted' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'بَعْضٍ', lemma: 'بَعْض', pos: 'noun', features: 'indef.gen', gloss: 'others' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'بِنَاءِ', lemma: 'بِنَاء', pos: 'noun', features: 'constr.gen', gloss: 'the building of' },
            { surface: 'الْقُصُورِ', lemma: 'قَصْر', pos: 'noun', features: 'pl.def.gen', gloss: 'the palaces' },
            { surface: 'الْعَالِيَةِ', lemma: 'عَالٍ', pos: 'adj', features: 'def.gen.f', gloss: 'high, lofty' },
            { surface: 'وَالْبُيُوتِ', lemma: 'بَيْت', pos: 'noun', features: 'conj+pl.def.gen', gloss: 'and the houses' },
            { surface: 'الْوَاسِعَةِ', lemma: 'وَاسِع', pos: 'adj', features: 'def.gen.f', gloss: 'spacious' },
          ],
        },
        {
          id: 'qs-v4-c04-003',
          ar: 'وَكَانَتْ أَمْوَالُهُمْ تَضِيعُ فِي الْمَاءِ وَالطِّينِ وَالْحِجَارَةِ',
          en: 'Their wealth was wasted on water, clay, and stone --',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be; and was' },
            { surface: 'أَمْوَالُهُمْ', lemma: 'مَال', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their wealth' },
            { surface: 'تَضِيعُ', lemma: 'ضَاعَ', pos: 'verb', features: 'impf.3fs', gloss: 'to be wasted, lost; was wasted' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'الْمَاءِ', lemma: 'مَاء', pos: 'noun', features: 'def.gen', gloss: 'water' },
            { surface: 'وَالطِّينِ', lemma: 'طِين', pos: 'noun', features: 'conj+def.gen', gloss: 'and clay' },
            { surface: 'وَالْحِجَارَةِ', lemma: 'حِجَارَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and stone' },
          ],
        },
        {
          id: 'qs-v4-c04-004',
          ar: 'وَكَانُوا لَا يَرَوْنَ مَكَاناً خَالِياً أَوْ أَرْضاً مُرْتَفِعَةً',
          en: 'they never saw an empty spot or elevated ground',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they were' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرَوْنَ', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp', gloss: 'to see; they saw' },
            { surface: 'مَكَاناً', lemma: 'مَكَان', pos: 'noun', features: 'indef.acc', gloss: 'a place' },
            { surface: 'خَالِياً', lemma: 'خَالٍ', pos: 'adj', features: 'indef.acc', gloss: 'empty, vacant' },
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'أَرْضاً', lemma: 'أَرْض', pos: 'noun', features: 'indef.acc', gloss: 'a land' },
            { surface: 'مُرْتَفِعَةً', lemma: 'مُرْتَفِع', pos: 'adj', features: 'indef.acc.f', gloss: 'elevated' },
          ],
        },
        {
          id: 'qs-v4-c04-005',
          ar: 'إِلَّا بَنَوْا عَلَيْهَا قَصْراً رَفِيعاً.',
          en: 'without building a lofty palace on it.',
          tokens: [
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'بَنَوْا', lemma: 'بَنَى', pos: 'verb', features: 'perf.3mp', gloss: 'to build; they built' },
            { surface: 'عَلَيْهَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+3fs', gloss: 'upon it' },
            { surface: 'قَصْراً', lemma: 'قَصْر', pos: 'noun', features: 'indef.acc', gloss: 'a palace' },
            { surface: 'رَفِيعاً', lemma: 'رَفِيع', pos: 'adj', features: 'indef.acc', gloss: 'lofty, tall' },
          ],
        },
        {
          id: 'qs-v4-c04-006',
          ar: 'وَكَانُوا يَبْنُونَ بُيُوتاً كَأَنَّمَا يَسْكُنُونَ فِيهَا دَائِماً',
          en: 'They built houses as if they would dwell in them forever,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they used to' },
            { surface: 'يَبْنُونَ', lemma: 'بَنَى', pos: 'verb', features: 'impf.3mp', gloss: 'to build; build' },
            { surface: 'بُيُوتاً', lemma: 'بَيْت', pos: 'noun', features: 'pl.indef.acc', gloss: 'houses' },
            { surface: 'كَأَنَّمَا', lemma: 'كَأَنَّمَا', pos: 'part', features: 'part', gloss: 'as if' },
            { surface: 'يَسْكُنُونَ', lemma: 'سَكَنَ', pos: 'verb', features: 'impf.3mp', gloss: 'to dwell; they dwelt' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in them' },
            { surface: 'دَائِماً', lemma: 'دَائِم', pos: 'adv', features: 'indef.acc', gloss: 'forever' },
          ],
        },
        {
          id: 'qs-v4-c04-007',
          ar: 'وَلَا يَمُوتُونَ أَبَداً.',
          en: 'and never die.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَمُوتُونَ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.3mp', gloss: 'to die; they die' },
            { surface: 'أَبَداً', lemma: 'أَبَداً', pos: 'adv', features: 'adv', gloss: 'ever, never' },
          ],
        },
        {
          id: 'qs-v4-c04-008',
          ar: 'وَكَانُوا يَبْنُونَ قُصُوراً مِنْ غَيْرِ حَاجَةٍ',
          en: 'They built palaces without any need,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they used to' },
            { surface: 'يَبْنُونَ', lemma: 'بَنَى', pos: 'verb', features: 'impf.3mp', gloss: 'to build; build' },
            { surface: 'قُصُوراً', lemma: 'قَصْر', pos: 'noun', features: 'pl.indef.acc', gloss: 'palaces' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'غَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'constr.gen', gloss: 'without' },
            { surface: 'حَاجَةٍ', lemma: 'حَاجَة', pos: 'noun', features: 'indef.gen', gloss: 'need' },
          ],
        },
        {
          id: 'qs-v4-c04-009',
          ar: 'وَالنَّاسُ لَا يَجِدُونَ مَا يَأْكُلُونَ وَيَلْبَسُونَ.',
          en: 'while the people could find nothing to eat or wear.',
          tokens: [
            { surface: 'وَالنَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'conj+def.nom', gloss: 'while the people' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَجِدُونَ', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to find; found' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَأْكُلُونَ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to eat; they could eat' },
            { surface: 'وَيَلْبَسُونَ', lemma: 'لَبِسَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to wear; and wear' },
          ],
        },
        {
          id: 'qs-v4-c04-010',
          ar: 'وَكَانَ الْفُقَرَاءُ مِنْهُمْ لَا يَجِدُونَ بَيْتاً يَسْكُنُونَ فِيهِ',
          en: 'The poor among them could not find a house to live in,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and were' },
            { surface: 'الْفُقَرَاءُ', lemma: 'فَقِير', pos: 'noun', features: 'pl.def.nom', gloss: 'the poor' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَجِدُونَ', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to find; could find' },
            { surface: 'بَيْتاً', lemma: 'بَيْت', pos: 'noun', features: 'indef.acc', gloss: 'a house' },
            { surface: 'يَسْكُنُونَ', lemma: 'سَكَنَ', pos: 'verb', features: 'impf.3mp', gloss: 'to dwell; they could dwell' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in it' },
          ],
        },
        {
          id: 'qs-v4-c04-011',
          ar: 'وَبُيُوتُ الأَغْبِيَاءِ لَا سَاكِنَ فِيهَا،',
          en: 'while the houses of the foolish stood empty,',
          tokens: [
            { surface: 'وَبُيُوتُ', lemma: 'بَيْت', pos: 'noun', features: 'conj+pl.constr.nom', gloss: 'while the houses of' },
            { surface: 'الأَغْبِيَاءِ', lemma: 'غَبِيّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the foolish' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'سَاكِنَ', lemma: 'سَاكِن', pos: 'noun', features: 'indef.acc', gloss: 'dweller, inhabitant' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in them' },
          ],
        },
        {
          id: 'qs-v4-c04-012',
          ar: 'وَمَنْ رَآهُمْ وَرَأَى قُصُورَهُمْ',
          en: 'Whoever saw them and saw their palaces',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and whoever' },
            { surface: 'رَآهُمْ', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to see; saw them' },
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to see; and saw' },
            { surface: 'قُصُورَهُمْ', lemma: 'قَصْر', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their palaces' },
          ],
        },
        {
          id: 'qs-v4-c04-013',
          ar: 'عَرَفَ أَنَّهُمْ لَا يُؤْمِنُونَ بِالآخِرَةِ.',
          en: 'knew that they did not believe in the Hereafter.',
          tokens: [
            { surface: 'عَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'perf.3ms', gloss: 'to know; knew' },
            { surface: 'أَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'part+3mp', gloss: 'that they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُؤْمِنُونَ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3mp', gloss: 'to believe; believed' },
            { surface: 'بِالآخِرَةِ', lemma: 'آخِرَة', pos: 'noun', features: 'prep+def.gen', gloss: 'in the Hereafter' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَا كَانَ شُغْلُ عَادٍ؟',
          options: ['الأَكْلُ وَالشُّرْبُ وَاللَّهْوُ وَاللَّعِبُ', 'الزِّرَاعَةُ وَالتِّجَارَةُ', 'طَلَبُ الْعِلْمِ'],
          answer: 0,
          qEn: 'What was ʿĀd occupied with?',
          optionsEn: ['Eating, drinking, amusement, and play', 'Farming and trade', 'Seeking knowledge'],
        },
        {
          q: 'لِمَاذَا كَانَتْ بُيُوتُ الأَغْبِيَاءِ لَا سَاكِنَ فِيهَا؟',
          options: ['لأَنَّهُمْ كَانُوا يَبْنُونَ قُصُوراً مِنْ غَيْرِ حَاجَةٍ', 'لأَنَّهُمْ كَانُوا فُقَرَاءَ', 'لأَنَّ الْقُصُورَ كَانَتْ بَعِيدَةً عَنِ الْمَاءِ'],
          answer: 0,
          qEn: 'Why did the houses of the foolish stand empty?',
          optionsEn: ['Because they built palaces without any need', 'Because they were poor', 'Because the palaces were far from water'],
        },
        {
          q: 'مَاذَا عَرَفَ مَنْ رَأَى قُصُورَ عَادٍ؟',
          options: ['أَنَّهُمْ لَا يُؤْمِنُونَ بِالآخِرَةِ', 'أَنَّهُمْ كَانُوا عُلَمَاءَ', 'أَنَّهُمْ كَانُوا فُقَرَاءَ'],
          answer: 0,
          qEn: "What did whoever saw ʿĀd's palaces come to know?",
          optionsEn: ['That they did not believe in the Hereafter', 'That they were scholars', 'That they were poor'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانُوا يَبْنُونَ بُيُوتاً',
        post: 'يَسْكُنُونَ فِيهَا دَائِماً.',
        en: 'They built houses as if they would dwell in them forever.',
        options: ['كَأَنَّمَا', 'لِأَنَّهُمْ', 'حَتَّى', 'وَلَكِنَّ'],
        answer: 0,
        rationales: [
          "'As if' -- introduces the false comparison the whole sentence is built on.",
          "'Because' -- wrong meaning; this is not a stated reason.",
          "'Until' -- wrong meaning; no endpoint is being described.",
          "'But' -- wrong meaning; no contrast is being introduced here.",
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ الْفُقَرَاءُ مِنْهُمْ لَا يَجِدُونَ',
        post: 'يَسْكُنُونَ فِيهِ.',
        en: 'The poor among them could not find a house to live in.',
        options: ['بَيْتاً', 'بَيْتٌ', 'الْبَيْتَ', 'بُيُوتاً'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- the direct object of يَجِدُونَ, and singular since one house is meant per person.',
          'Nominative -- wrong case; the object of a verb takes the accusative.',
          'Definite -- wrong; no particular house has been mentioned yet.',
          'Plural -- wrong number for "a house" in this context.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَتْ أَمْوَالُهُمْ',
        post: 'في الْمَاءِ وَالطِّينِ وَالْحِجَارَةِ.',
        en: 'Their wealth was wasted on water, clay, and stone.',
        options: ['تَضِيعُ', 'يَضِيعُ', 'تَضِيعَانِ', 'يَضِيعُونَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- agrees with the plural/collective subject أَمْوَالُهُمْ.',
          '3rd masculine singular -- wrong gender.',
          'Dual -- wrong number.',
          '3rd masculine plural -- wrong gender and wrong number for a non-human plural.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَبْنُونَ قُصُوراً مِنْ غَيْرِ حَاجَةٍ',
        pre: '',
        post: 'قُصُوراً مِنْ غَيْرِ حَاجَةٍ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (m. pl.)',
        options: ['تَبْنُونَ', 'يَبْنُونَ', 'نَبْنِي', 'أَبْنِي'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنْتُمْ.',
          '3rd masculine plural -- they, the form already given.',
          '1st plural -- we.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَبْنُونَ قُصُوراً مِنْ غَيْرِ حَاجَةٍ',
        pre: '',
        post: 'قُصُوراً مِنْ غَيْرِ حَاجَةٍ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَبْنِي', 'يَبْنُونَ', 'تَبْنُونَ', 'أَبْنِي'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine plural -- they, the form already given.',
          '2nd masculine plural -- you (pl.).',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَبْنُونَ قُصُوراً مِنْ غَيْرِ حَاجَةٍ',
        pre: '',
        post: 'قُصُوراً مِنْ غَيْرِ حَاجَةٍ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَبْنِي', 'يَبْنُونَ', 'تَبْنِي', 'نَبْنِي'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine plural -- they, the form already given.',
          '2nd masculine or 3rd feminine singular -- wrong person.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

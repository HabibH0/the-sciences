// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 15 -- إِيمَانُ عَامَّةِ النَّاسِ وَفُقَرَائِهِمْ.
// Printed page 261 (top), ending before ch16's heading نَحْنُ أَنْصَارُ اللَّهِ,
// which opens later the same page. Transcribed by hand from the scan
// (vision OCR, 150dpi render) against ../CHAPTER-FORMAT.md and
// QASAS_AGENT_BRIEF.md.
//
// Having despaired of the chiefs and the wealthy (ch14), ʿĪsā turns to
// ordinary working people and the poor -- souls softened by honest manual
// labor, untouched by the vanities of lineage and rank that kept the elite
// away. A group of them believe: fullers, fishermen, and people of trades.
//
// Grammar / lexical notes:
//   -- s005's اِسْتَصْغَرُوهُ ("they deemed him insignificant") is transcribed
//      with ص (ṣād), giving the real classical root ص غ ر (صَغُرَ, "to be
//      small") in its form-X sense "to consider small/insignificant" --
//      the small-print scan glyph is genuinely hard to distinguish from ض
//      (ḍād) at this resolution, but ض غ ر is not an attested Arabic root,
//      while اِسْتَصْغَرَ is both a real, common word and fits the context
//      exactly (the chiefs underestimated ʿĪsā for lacking worldly power).
//      Flagged for a second look against a sharper scan if one becomes
//      available.
//   -- جَاءَ (s003) and مُعْجِزَة (s004) are NOT re-listed in newWords --
//      both already introduced earlier in this volume (ch1 and ch3
//      respectively).
//   -- صَيَّادُو (s014, "fishermen of," construct plural nominative before
//      a following genitive) keeps its و ending unelided, matching the
//      printed سليم plural construct spelling before إضافة.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لَمَّا، يَئِسَ، عِيسَى
//      (ch1)، كُفْر (ch12)، رَأَى، جَاءَ (ch1)، آيَة، مُعْجِزَة (ch3)، نَفْس،
//      صَاحِب، فَقِير، لَانَ، قَلْب، صَفَا، أَكَلَ، نَسَب، آمَنَ، أَهْل، نَاس، كَانَ،
//      قَدْ
//      are all already taught and are NOT re-listed in newWords here.
//
// 25 new words: شَاهَدَ، عِنَاد، جَحَدَ، بَيِّن، بَاهِر، اِسْتَيْقَنَ، اِسْتَصْغَرَ، حَوْل،
// طَوْل، أَقْبَلَ، عَامَّة، كَدّ، يَمِين، عَرَق، جَبِين، تَفَاخَرَ، تَطَاوَلَ، جَاه، مَنْصِب،
// طَائِفَة، قَصَّار، صَيَّاد، سَمَك، حِرْفَة، مِهْنَة.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch15',
  title: { ar: 'إِيمَانُ عَامَّةِ النَّاسِ وَفُقَرَائِهِمْ', en: 'The Faith of the Common People and the Poor' },
  newWords: [
    'عِنَاد', 'جَحَدَ', 'بَيِّن', 'اِسْتَيْقَنَ', 'اِسْتَصْغَرَ', 'حَوْل',
    'طَوْل', 'أَقْبَلَ', 'عَامَّة', 'كَدّ', 'يَمِين', 'عَرَق',
    'جَبِين', 'تَفَاخَرَ', 'تَطَاوَلَ', 'جَاه', 'مَنْصِب', 'طَائِفَة',
    'قَصَّار', 'صَيَّاد', 'سَمَك', 'حِرْفَة', 'مِهْنَة',
  ],
  lemmas: {
    شَاهَدَ: { gloss: 'to witness, observe' },
    عِنَاد: { gloss: 'obstinacy' },
    جَحَدَ: { gloss: 'to deny, reject' },
    بَيِّن: { gloss: 'clear, evident' },
    بَاهِر: { gloss: 'dazzling, astonishing' },
    اِسْتَيْقَنَ: { gloss: 'to be certain of' },
    اِسْتَصْغَرَ: { gloss: 'to deem insignificant, belittle' },
    حَوْل: { gloss: 'power, might' },
    طَوْل: { gloss: 'capability, resource' },
    أَقْبَلَ: { gloss: 'to turn toward, approach' },
    عَامَّة: { gloss: 'the common people' },
    كَدّ: { gloss: 'toil, hard labor' },
    يَمِين: { gloss: 'right hand' },
    عَرَق: { gloss: 'sweat' },
    جَبِين: { gloss: 'brow, forehead' },
    تَفَاخَرَ: { gloss: 'to boast (to one another)' },
    تَطَاوَلَ: { gloss: 'to act superior, overreach' },
    جَاه: { gloss: 'status, rank' },
    مَنْصِب: { gloss: 'a post, position' },
    طَائِفَة: { gloss: 'a group, party' },
    قَصَّار: { gloss: 'a fuller, launderer' },
    صَيَّاد: { gloss: 'a fisherman, hunter' },
    سَمَك: { gloss: 'fish' },
    حِرْفَة: { gloss: 'a trade, craft' },
    مِهْنَة: { gloss: 'an occupation, profession' },
  },
  paragraphs: [
    {
      en: 'When Isa despaired of them, and witnessed their obstinacy and disbelief, and saw that they had denied what he had brought them of clear signs and dazzling miracles their own souls were certain of, and had belittled him because he was not a man of power and resource, he turned to the common people and the poor among them. Their hearts had grown soft and their souls pure, because they ate by the toil of their right hand and the sweat of their brow; they did not boast of lineage, nor act superior through status or position. So a group of them believed -- among them fullers, fishermen, and people of trades and crafts.',
      sentences: [
        {
          id: 'qs-v12-c15-001',
          ar: 'وَلَمَّا يَئِسَ عِيسَى مِنْهُمْ،',
          en: 'When Isa despaired of them,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'when' },
            { surface: 'يَئِسَ', lemma: 'يَئِسَ', pos: 'verb', features: 'perf.3ms', gloss: 'to despair; despaired' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'nom', gloss: 'Isa' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'of them' },
          ],
        },
        {
          id: 'qs-v12-c15-002',
          ar: 'وَشَاهَدَ فِيهِمُ الْعِنَادَ وَالْكُفْرَ،',
          en: 'and witnessed their obstinacy and disbelief,',
          tokens: [
            { surface: 'وَشَاهَدَ', lemma: 'شَاهَدَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to witness; and witnessed' },
            { surface: 'فِيهِمُ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'in them' },
            { surface: 'الْعِنَادَ', lemma: 'عِنَاد', pos: 'noun', features: 'def.acc', gloss: 'the obstinacy' },
            { surface: 'وَالْكُفْرَ', lemma: 'كُفْر', pos: 'noun', features: 'conj+def.acc', gloss: 'and disbelief' },
          ],
        },
        {
          id: 'qs-v12-c15-003',
          ar: 'وَرَأَى أَنَّهُمْ قَدْ جَحَدُوا بِمَا جَاءَ بِهِ مِنْ آيَاتٍ بَيِّنَاتٍ،',
          en: 'and saw that they had denied what he had brought them of clear signs,',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to see; and saw' },
            { surface: 'أَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'part+3mp', gloss: 'that they' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'جَحَدُوا', lemma: 'جَحَدَ', pos: 'verb', features: 'perf.3mp', gloss: 'to deny; denied' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'what' },
            { surface: 'جَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms', gloss: 'to come, bring; he brought' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with it' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'آيَاتٍ', lemma: 'آيَة', pos: 'noun', features: 'indef.gen.pl', gloss: 'signs' },
            { surface: 'بَيِّنَاتٍ', lemma: 'بَيِّن', pos: 'adj', features: 'indef.gen.pl.f', gloss: 'clear' },
          ],
        },
        {
          id: 'qs-v12-c15-004',
          ar: 'وَمُعْجِزَاتٍ بَاهِرَاتٍ اسْتَيْقَنَتْهَا أَنْفُسُهُمْ،',
          en: 'and dazzling miracles their own souls were certain of,',
          tokens: [
            { surface: 'وَمُعْجِزَاتٍ', lemma: 'مُعْجِزَة', pos: 'noun', features: 'conj+indef.gen.pl', gloss: 'and miracles' },
            { surface: 'بَاهِرَاتٍ', lemma: 'بَاهِر', pos: 'adj', features: 'indef.gen.pl.f', gloss: 'dazzling' },
            { surface: 'اسْتَيْقَنَتْهَا', lemma: 'اِسْتَيْقَنَ', pos: 'verb', features: 'perf.3fs+3fs', gloss: 'to be certain of; were certain of it' },
            { surface: 'أَنْفُسُهُمْ', lemma: 'نَفْس', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their own souls' },
          ],
        },
        {
          id: 'qs-v12-c15-005',
          ar: 'وَاسْتَصْغَرُوهُ لِأَنَّهُ لَمْ يَكُنْ صَاحِبَ حَوْلٍ وَطَوْلٍ،',
          en: 'and had belittled him because he was not a man of power and resource,',
          tokens: [
            { surface: 'وَاسْتَصْغَرُوهُ', lemma: 'اِسْتَصْغَرَ', pos: 'verb', features: 'conj+perf.3mp+3ms', root: 'ص غ ر', gloss: 'to deem insignificant; and belittled him' },
            { surface: 'لِأَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+3ms', gloss: 'because he' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَكُنْ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be; was' },
            { surface: 'صَاحِبَ', lemma: 'صَاحِب', pos: 'noun', features: 'acc.constr', gloss: 'a man of' },
            { surface: 'حَوْلٍ', lemma: 'حَوْل', pos: 'noun', features: 'indef.gen', gloss: 'power' },
            { surface: 'وَطَوْلٍ', lemma: 'طَوْل', pos: 'noun', features: 'conj+indef.gen', gloss: 'and resource' },
          ],
        },
        {
          id: 'qs-v12-c15-006',
          ar: 'أَقْبَلَ عَلَى عَامَّةِ النَّاسِ وَفُقَرَائِهِمْ،',
          en: 'he turned to the common people and the poor among them.',
          tokens: [
            { surface: 'أَقْبَلَ', lemma: 'أَقْبَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to turn toward; turned' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عَامَّةِ', lemma: 'عَامَّة', pos: 'noun', features: 'constr.gen', gloss: 'the common people of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'وَفُقَرَائِهِمْ', lemma: 'فَقِير', pos: 'noun', features: 'conj+pl.gen+3mp', gloss: 'and the poor among them' },
          ],
        },
        {
          id: 'qs-v12-c15-007',
          ar: 'وَقَدْ لَانَتْ قُلُوبُهُمْ،',
          en: 'Their hearts had grown soft,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'لَانَتْ', lemma: 'لَانَ', pos: 'verb', features: 'perf.3fs', gloss: 'to soften; had grown soft' },
            { surface: 'قُلُوبُهُمْ', lemma: 'قَلْب', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their hearts' },
          ],
        },
        {
          id: 'qs-v12-c15-008',
          ar: 'وَصَفَتْ نُفُوسُهُمْ،',
          en: 'and their souls pure,',
          tokens: [
            { surface: 'وَصَفَتْ', lemma: 'صَفَا', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to become pure; and grew pure' },
            { surface: 'نُفُوسُهُمْ', lemma: 'نَفْس', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their souls' },
          ],
        },
        {
          id: 'qs-v12-c15-009',
          ar: 'لِأَنَّهُمْ يَأْكُلُونَ بِكَدِّ يَمِينِهِمْ وَعَرَقِ جَبِينِهِمْ،',
          en: 'because they ate by the toil of their right hand and the sweat of their brow;',
          tokens: [
            { surface: 'لِأَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+3mp', gloss: 'because they' },
            { surface: 'يَأْكُلُونَ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to eat; eat' },
            { surface: 'بِكَدِّ', lemma: 'كَدّ', pos: 'noun', features: 'prep+constr.gen', gloss: 'by the toil of' },
            { surface: 'يَمِينِهِمْ', lemma: 'يَمِين', pos: 'noun', features: 'gen+3mp', gloss: 'their right hand' },
            { surface: 'وَعَرَقِ', lemma: 'عَرَق', pos: 'noun', features: 'conj+constr.gen', gloss: 'and the sweat of' },
            { surface: 'جَبِينِهِمْ', lemma: 'جَبِين', pos: 'noun', features: 'gen+3mp', gloss: 'their brow' },
          ],
        },
        {
          id: 'qs-v12-c15-010',
          ar: 'لَا يَتَفَاخَرُونَ بِنَسَبٍ،',
          en: 'they did not boast of lineage,',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتَفَاخَرُونَ', lemma: 'تَفَاخَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to boast; boast' },
            { surface: 'بِنَسَبٍ', lemma: 'نَسَب', pos: 'noun', features: 'prep+indef.gen', gloss: 'of lineage' },
          ],
        },
        {
          id: 'qs-v12-c15-011',
          ar: 'وَلَا يَتَطَاوَلُونَ بِجَاهٍ وَمَنْصِبٍ،',
          en: 'nor act superior through status or position.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَتَطَاوَلُونَ', lemma: 'تَطَاوَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to act superior; act superior' },
            { surface: 'بِجَاهٍ', lemma: 'جَاه', pos: 'noun', features: 'prep+indef.gen', gloss: 'through status' },
            { surface: 'وَمَنْصِبٍ', lemma: 'مَنْصِب', pos: 'noun', features: 'conj+indef.gen', gloss: 'or position' },
          ],
        },
        {
          id: 'qs-v12-c15-012',
          ar: 'فَآمَنَتْ مِنْهُمْ طَائِفَةٌ،',
          en: 'So a group of them believed --',
          tokens: [
            { surface: 'فَآمَنَتْ', lemma: 'آمَنَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to believe; so believed' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'of them' },
            { surface: 'طَائِفَةٌ', lemma: 'طَائِفَة', pos: 'noun', features: 'indef.nom', gloss: 'a group' },
          ],
        },
        {
          id: 'qs-v12-c15-013',
          ar: 'فِيهَا الْقَصَّارُونَ،',
          en: 'among them fullers,',
          tokens: [
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'among them' },
            { surface: 'الْقَصَّارُونَ', lemma: 'قَصَّار', pos: 'noun', features: 'def.nom.pl', gloss: 'the fullers' },
          ],
        },
        {
          id: 'qs-v12-c15-014',
          ar: 'وَفِيهَا صَيَّادُو الْأَسْمَاكِ،',
          en: 'fishermen,',
          tokens: [
            { surface: 'وَفِيهَا', lemma: 'فِي', pos: 'prep', features: 'conj+prep+3fs', gloss: 'and among them' },
            { surface: 'صَيَّادُو', lemma: 'صَيَّاد', pos: 'noun', features: 'pl.constr.nom', gloss: 'the fishermen of' },
            { surface: 'الْأَسْمَاكِ', lemma: 'سَمَك', pos: 'noun', features: 'def.gen.pl', gloss: 'fish' },
          ],
        },
        {
          id: 'qs-v12-c15-015',
          ar: 'وَفِيها أَهْلُ الْحِرَفِ وَالْمِهَنِ.',
          en: 'and people of trades and crafts.',
          tokens: [
            { surface: 'وَفِيها', lemma: 'فِي', pos: 'prep', features: 'conj+prep+3fs', gloss: 'and among them' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', gloss: 'the people of' },
            { surface: 'الْحِرَفِ', lemma: 'حِرْفَة', pos: 'noun', features: 'def.gen.pl', gloss: 'trades' },
            { surface: 'وَالْمِهَنِ', lemma: 'مِهْنَة', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and crafts' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا أَقْبَلَ عِيسَى عَلَى عَامَّةِ النَّاسِ وَفُقَرَائِهِمْ؟',
          options: ['لِأَنَّ الرُّؤَسَاءَ جَحَدُوا بِآيَاتِهِ وَاسْتَصْغَرُوهُ', 'لِأَنَّهُمْ كَانُوا أَغْنَى مِنَ الرُّؤَسَاءِ', 'لِأَنَّهُ لَمْ يَجِدْ أَحَدًا غَيْرَهُمْ فِي الْبَلَدِ'],
          answer: 0,
          qEn: 'Why did Isa turn to the common people and the poor?',
          optionsEn: ['Because the chiefs had denied his signs and belittled him', 'Because they were richer than the chiefs', 'Because he could find no one else in the land'],
        },
        {
          q: 'لِمَاذَا لَانَتْ قُلُوبُ عَامَّةِ النَّاسِ وَفُقَرَائِهِمْ؟',
          options: ['لِأَنَّهُمْ يَأْكُلُونَ بِكَدِّ أَيْدِيهِمْ وَلَا يَتَفَاخَرُونَ بِنَسَبٍ وَلَا جَاهٍ', 'لِأَنَّهُمْ كَانُوا مِنْ نَسْلِ الْأَنْبِيَاءِ', 'لِأَنَّهُمْ كَانُوا يَخْدُمُونَ فِي بَلَاطِ الْمَلِكِ'],
          answer: 0,
          qEn: 'Why had the hearts of the common people and the poor grown soft?',
          optionsEn: ['Because they ate by the toil of their own hands and did not boast of lineage or status', 'Because they were descended from the prophets', 'Because they served in the king’s court'],
        },
        {
          q: 'مَنْ كَانَ مِنَ الطَّائِفَةِ الَّتِي آمَنَتْ بِعِيسَى؟',
          options: ['الْقَصَّارُونَ وَصَيَّادُو الْأَسْمَاكِ وَأَهْلُ الْحِرَفِ وَالْمِهَنِ', 'رُؤَسَاءُ الْيَهُودِ وَأَحْبَارُهُمْ', 'أَغْنِيَاءُ التُّجَّارِ وَكِبَارُ الْمُلَّاكِ'],
          answer: 0,
          qEn: 'Who was among the group that believed in Isa?',
          optionsEn: ['Fullers, fishermen, and people of trades and crafts', 'The chiefs of the Jews and their rabbis', 'Wealthy merchants and great landowners'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'لِأَنَّهُمْ يَأْكُلُونَ بِكَدِّ يَمِينِهِمْ وَعَرَقِ جَبِينِهِمْ، لَا',
        post: 'بِنَسَبٍ، وَلَا يَتَطَاوَلُونَ بِجَاهٍ وَمَنْصِبٍ.',
        en: 'They ate by the toil of their right hand and the sweat of their brow; they did not boast of lineage, nor act superior through status or position.',
        options: ['يَتَفَاخَرُونَ', 'تَفَاخَرُوا', 'يَتَفَاخَرُ', 'مُتَفَاخِرُونَ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine plural -- habitual present, matching the parallel وَلَا يَتَطَاوَلُونَ.',
          'Perfect -- wrong tense; the sentence describes an ongoing habit, not a one-time past event.',
          'Imperfect singular -- wrong number; the subject is plural.',
          'Active participle (noun) plural -- wrong part of speech after لَا in this construction.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَقَدْ',
        post: 'قُلُوبُهُمْ، وَصَفَتْ نُفُوسُهُمْ.',
        en: 'Their hearts had grown soft, and their souls pure.',
        options: ['لَانَتْ', 'لَانَ', 'يَلِينُ', 'لَانُوا'],
        answer: 0,
        rationales: [
          'Perfect, 3rd feminine singular -- agrees with the feminine plural قُلُوبُهُمْ (non-human plurals take feminine singular verb agreement).',
          'Masculine -- wrong gender agreement for a plural noun of things.',
          'Imperfect -- wrong tense; the sentence narrates a completed change.',
          'Masculine plural -- wrong agreement pattern; non-human plurals take singular verb agreement.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَآمَنَتْ مِنْهُمْ',
        post: '، فِيهَا الْقَصَّارُونَ وَصَيَّادُو الْأَسْمَاكِ.',
        en: 'So a group of them believed -- among them fullers and fishermen.',
        options: ['طَائِفَةٌ', 'طَائِفَةً', 'طَائِفَةٍ', 'طَوَائِفُ'],
        answer: 0,
        rationales: [
          'Indefinite nominative -- subject of فَآمَنَتْ.',
          'Accusative -- wrong case; the subject of a verb takes the nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural -- wrong number; a single group is meant, agreeing with the singular verb فَآمَنَتْ.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَتَفَاخَرُ الرَّجُلُ بِنَسَبِهِ',
        pre: '',
        post: 'بِنَسَبِهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَتَفَاخَرُ', 'يَتَفَاخَرُ', 'تَتَفَاخَرُ', 'نَتَفَاخَرُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted.',
          '2nd masculine singular -- wrong person.',
          '1st plural -- wrong number; the target is singular.',
        ],
      },
      {
        type: 'shift',
        base: 'يَتَفَاخَرُ الرَّجُلُ بِنَسَبِهِ',
        pre: '',
        post: 'بِنَسَبِهِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَتَفَاخَرُ', 'يَتَفَاخَرُ', 'تَتَفَاخَرُ', 'أَتَفَاخَرُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted.',
          '2nd masculine singular -- wrong person.',
          '1st singular -- wrong number; the target is "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَتَفَاخَرُ الرَّجُلُ بِنَسَبِهِ',
        pre: '',
        post: 'بِنَسَبِهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَتَفَاخَرُونَ', 'يَتَفَاخَرُ', 'تَتَفَاخَرُ', 'نَتَفَاخَرُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted.',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- wrong person.',
        ],
      },
    ],
  },
};

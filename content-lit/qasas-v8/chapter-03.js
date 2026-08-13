// قَصَصُ النَّبِيِّينَ, volume 8 «قِصَّةُ سَيِّدِنَا شُعَيْبٍ», chapter 3 --
// وَإِلَى مَدْيَنَ أَخَاهُمْ شُعَيْبًا. Printed pages 215 (bottom, right after
// ch2's bridging paragraph and the volume-title graphic) through 216 (top,
// ending right before ch4's heading box). Transcribed by hand from the scan
// (vision OCR, 200-400dpi renders) against ../CHAPTER-FORMAT.md.
//
// The Shuʿayb narrative proper opens: Madyan and the Aykah ("the Thicket")
// sat on the great trade roads linking Yemen/Syria and Iraq/Egypt along the
// Red Sea coast. Like every nation before them they fell into shirk, and
// added their own signature sin -- cheating the measure and the scale,
// waylaying caravans, spreading corruption -- the way of the arrogant
// wealthy who fear no reckoning. Allah sends them their own brother
// Shuʿayb, and the chapter closes with his founding call quoted word for
// word from the Qurʾān.
//
// Grammar / lexical notes:
//   -- The Qurʾān quote (Hūd 11:84-85, qs-v8-c03-016 through -021) is split
//      into six ﴿﴾-wrapped fragments and annotated with full tokens exactly
//      like ordinary narration, per the house convention established in
//      qasas-v3/chapter-16.js and continued in this volume's ch1/ch2.
//   -- غَيْرُهُ (qs-v8-c03-016) is nominative despite following the
//      genitive-triggering زَائِدَة مِنْ on إِلَٰهٍ -- it agrees with إِلَٰهٍ's
//      *local* case (مبتدأ مؤخر, nominative), not its apparent (لفظي)
//      genitive, a standard تابع على المحل reading of this exact Qurʾānic
//      construction.
//   -- أَخَافَ (qs-v8-c03-010, form IV "to frighten") is a distinct lemma
//      from the already-taught خَافَ (form I "to fear") -- different
//      measure, different transitivity, matching the corpus's existing
//      practice of tagging derived-measure verbs as their own lemma when
//      the sense shifts (cf. غَنِيّ/غَنِيَ). NOTE this is NOT the same word
//      as أَخَافُ in qs-v8-c03-018's Qurʾān quote, which is plain خَافَ's own
//      1st-person imperfect ("I fear") -- same surface-looking أ- prefix,
//      two different verbs (person marker vs. causative measure); tag each
//      on its own morphology, never by surface resemblance alone.
//   -- أَصْحَاب (qs-v8-c03-001/002, "companions of, people of") is tagged
//      under its already-taught singular لِemma صَاحِب, matching the
//      corpus's broken-plural-cites-singular convention (cf. وَلَد/أَوْلَاد).
//      Likewise أَشْيَاء (qs-v8-c03-020) cites the singular شَيْء.
//   -- تِجَارِيَّة (qs-v8-c03-003, "commercial," adj.) is already taught.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): فِي، قِصَّة، نَبِيّ، اللَّه،
//      الَّذِي، أَرْسَلَ، إِلَى، صَاحِب، تِجَارَة، تِجَارِيّ، يَمَن، شَام، عِرَاق (root
//      only)، مِصْر، بَحْر، أَحْمَر، أَشْرَكَ، غَيْر، كَمَا، كَانَ، أُمَّة، عَصْر، كُلّ،
//      شَأْن، غَنِيّ، قَوِيّ، حِسَاب، خَشِيَ (root only)، عَذَاب، بَعَثَ، خَافَ،
//      خَيْر، رَأَى، يَوْم، نَاس، شَيْء، أَرْض، دَعَا، أَنذَرَ، قَالَ، لِ، يَا، قَوْم،
//      عَبَدَ، مَا، مِنْ are all already taught and are NOT re-listed in
//      newWords here.
//
// 25 new words (مَدْيَن، شُعَيْب، أَيْكَة، سِلْعَة، جَادَّة، سَاحِل، زِيَادَة، نَقَصَ،
// مِكْيَال، مِيزَان، طَفَّفَ، كَيْل، تَعَرَّضَ، قَافِلَة، تَوَعَّدَ، أَخَافَ، عَاثَ، رَجَا،
// أَوْفَى، بَخَسَ، قِسْط، مُفْسِد، مُحِيط، عِرَاق (proper), خَشِيَ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch3',
  title: { ar: 'وَإِلَى مَدْيَنَ أَخَاهُمْ شُعَيْبًا', en: 'And to Madyan, Their Brother Shuʿayb' },
  newWords: ['مَدْيَن', 'شُعَيْب', 'أَيْكَة', 'سِلْعَة', 'جَادَّة', 'عِرَاق', 'سَاحِل', 'زِيَادَة', 'نَقَصَ', 'مِكْيَال', 'مِيزَان', 'طَفَّفَ', 'كَيْل', 'تَعَرَّضَ', 'قَافِلَة', 'تَوَعَّدَ', 'أَخَافَ', 'عَاثَ', 'رَجَا', 'خَشِيَ', 'أَوْفَى', 'بَخَسَ', 'قِسْط', 'مُفْسِد', 'مُحِيط'],
  lemmas: {
    مَدْيَن: { gloss: 'Madyan (Midian)' },
    شُعَيْب: { gloss: 'Shuʿayb' },
    أَيْكَة: { gloss: 'the Thicket (people of the Aykah)' },
    سِلْعَة: { gloss: 'goods, merchandise' },
    جَادَّة: { gloss: 'highway, main road' },
    عِرَاق: { gloss: 'Iraq' },
    سَاحِل: { gloss: 'coast, shore' },
    زِيَادَة: { gloss: 'addition, increase' },
    نَقَصَ: { gloss: 'to diminish, shortchange' },
    مِكْيَال: { gloss: 'measure, measuring vessel' },
    مِيزَان: { gloss: 'scale, balance' },
    طَفَّفَ: { gloss: 'to give short measure' },
    كَيْل: { gloss: 'measuring, the measure' },
    تَعَرَّضَ: { gloss: 'to accost, waylay' },
    قَافِلَة: { gloss: 'caravan' },
    تَوَعَّدَ: { gloss: 'to threaten' },
    أَخَافَ: { gloss: 'to frighten' },
    عَاثَ: { gloss: 'to spread corruption, wreak havoc' },
    رَجَا: { gloss: 'to hope for, expect' },
    خَشِيَ: { gloss: 'to fear, dread' },
    أَوْفَى: { gloss: 'to give in full' },
    بَخَسَ: { gloss: 'to shortchange, defraud' },
    قِسْط: { gloss: 'fairness, justice' },
    مُفْسِد: { gloss: 'a corrupter' },
    مُحِيط: { gloss: 'all-encompassing' },
  },
  paragraphs: [
    {
      en: "It holds the story of Allah's prophet Shuʿayb, whom Allah sent to Madyan and the companions of the Thicket -- people of trade and goods, for they sat on the great trade highway between Yemen and Syria, and between Iraq and Egypt, on the coast of the Red Sea.",
      sentences: [
        {
          id: 'qs-v8-c03-001',
          ar: 'فِيهِ قِصَّةُ نَبِيِّ اللَّهِ شُعَيْبٍ الَّذِي أَرْسَلَهُ اللَّهُ إِلَى مَدْيَنَ وَأَصْحَابِ الأَيْكَةِ،',
          en: "It holds the story of Allah's prophet Shuʿayb, whom Allah sent to Madyan and the companions of the Thicket,",
          tokens: [
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in it' },
            { surface: 'قِصَّةُ', lemma: 'قِصَّة', pos: 'noun', features: 'nom.constr', gloss: 'the story of' },
            { surface: 'نَبِيِّ', lemma: 'نَبِيّ', pos: 'noun', features: 'gen.constr', gloss: 'the prophet of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'شُعَيْبٍ', lemma: 'شُعَيْب', pos: 'proper', features: 'gen', gloss: 'Shuʿayb' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'whom' },
            { surface: 'أَرْسَلَهُ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to send; sent him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مَدْيَنَ', lemma: 'مَدْيَن', pos: 'proper', features: 'gen', gloss: 'Madyan' },
            { surface: 'وَأَصْحَابِ', lemma: 'صَاحِب', pos: 'noun', features: 'conj+pl.gen.constr', gloss: 'and the companions of' },
            { surface: 'الأَيْكَةِ', lemma: 'أَيْكَة', pos: 'noun', features: 'def.gen', root: 'أ ي ك', gloss: 'the Thicket' },
          ],
        },
        {
          id: 'qs-v8-c03-002',
          ar: 'وَهُمْ أَصْحَابُ تِجَارَةٍ وَسِلَعٍ،',
          en: 'people of trade and goods,',
          tokens: [
            { surface: 'وَهُمْ', lemma: 'هُمْ', pos: 'noun', features: 'conj+3mp', gloss: 'and they' },
            { surface: 'أَصْحَابُ', lemma: 'صَاحِب', pos: 'noun', features: 'pl.nom.constr', gloss: 'companions of' },
            { surface: 'تِجَارَةٍ', lemma: 'تِجَارَة', pos: 'noun', features: 'indef.gen', gloss: 'trade' },
            { surface: 'وَسِلَعٍ', lemma: 'سِلْعَة', pos: 'noun', features: 'conj+pl.indef.gen', root: 'س ل ع', gloss: 'and goods' },
          ],
        },
        {
          id: 'qs-v8-c03-003',
          ar: 'فَقَدْ كَانُوا عَلَى الْجَادَّةِ التِّجَارِيَّةِ الْكَبِيرَةِ بَيْنَ الْيَمَنِ وَالشَّامِ،',
          en: 'for they sat on the great trade highway between Yemen and Syria,',
          tokens: [
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'for indeed' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', gloss: 'to be; they were' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'الْجَادَّةِ', lemma: 'جَادَّة', pos: 'noun', features: 'def.gen', root: 'ج د د', gloss: 'the highway' },
            { surface: 'التِّجَارِيَّةِ', lemma: 'تِجَارِيّ', pos: 'adj', features: 'def.gen.f', gloss: 'the commercial, trade' },
            { surface: 'الْكَبِيرَةِ', lemma: 'كَبِير', pos: 'adj', features: 'def.gen.f', gloss: 'the great' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'الْيَمَنِ', lemma: 'يَمَن', pos: 'proper', features: 'def.gen', gloss: 'Yemen' },
            { surface: 'وَالشَّامِ', lemma: 'شَام', pos: 'proper', features: 'conj+def.gen', gloss: 'and Syria' },
          ],
        },
        {
          id: 'qs-v8-c03-004',
          ar: 'وَبَيْنَ الْعِرَاقِ وَمِصْرَ عَلَى سَاحِلِ الْبَحْرِ الأَحْمَرِ.',
          en: 'and between Iraq and Egypt, on the coast of the Red Sea.',
          tokens: [
            { surface: 'وَبَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'conj+prep', gloss: 'and between' },
            { surface: 'الْعِرَاقِ', lemma: 'عِرَاق', pos: 'proper', features: 'def.gen', root: 'ع ر ق', gloss: 'Iraq' },
            { surface: 'وَمِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'conj+gen', gloss: 'and Egypt' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'سَاحِلِ', lemma: 'سَاحِل', pos: 'noun', features: 'gen.constr', root: 'س ح ل', gloss: 'the coast of' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
            { surface: 'الأَحْمَرِ', lemma: 'أَحْمَر', pos: 'adj', features: 'def.gen', gloss: 'the red' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيْنَ كَانَ يَسْكُنُ أَصْحَابُ مَدْيَنَ وَالأَيْكَةِ؟',
          options: ['عَلَى الْجَادَّةِ التِّجَارِيَّةِ الْكَبِيرَةِ بَيْنَ الْيَمَنِ وَالشَّامِ وَالْعِرَاقِ وَمِصْرَ عَلَى سَاحِلِ الْبَحْرِ الأَحْمَرِ', 'فِي جَزِيرَةٍ بَعِيدَةٍ لَا يَصِلُ إِلَيْهَا أَحَدٌ', 'فِي الصَّحْرَاءِ بَعِيداً عَنْ كُلِّ طَرِيقٍ'],
          answer: 0,
          qEn: 'Where did the people of Madyan and the Aykah live?',
          optionsEn: ['On the great trade highway between Yemen and Syria, Iraq and Egypt, on the Red Sea coast', 'On a remote island no one could reach', 'In the desert, far from any road'],
        },
      ],
    },
    {
      en: "They associated partners with Allah, as every nation before every prophet had done in every age, and in addition to that they shortchanged the measure and the scale, gave short measure, waylaid caravans, threatening and frightening them, and went about spreading corruption in the land -- the way of the arrogant wealthy who neither expect a reckoning nor dread a punishment.",
      sentences: [
        {
          id: 'qs-v8-c03-005',
          ar: 'كَانُوا يُشْرِكُونَ بِاللَّهِ غَيْرَهُ،',
          en: 'They associated partners with Allah,',
          tokens: [
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', gloss: 'to be; they were' },
            { surface: 'يُشْرِكُونَ', lemma: 'أَشْرَكَ', pos: 'verb', features: 'impf.3mp', gloss: 'to associate partners; associating' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'with Allah' },
            { surface: 'غَيْرَهُ', lemma: 'غَيْر', pos: 'noun', features: 'acc+3ms', gloss: 'other than Him' },
          ],
        },
        {
          id: 'qs-v8-c03-006',
          ar: 'كَمَا كَانَتْ أُمَمُ الأَنْبِيَاءِ فِي كُلِّ عَصْرٍ،',
          en: 'as every nation before every prophet had done in every age,',
          tokens: [
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be; were' },
            { surface: 'أُمَمُ', lemma: 'أُمَّة', pos: 'noun', features: 'pl.nom.constr', gloss: 'the nations of' },
            { surface: 'الأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the prophets' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'عَصْرٍ', lemma: 'عَصْر', pos: 'noun', features: 'indef.gen', gloss: 'era, age' },
          ],
        },
        {
          id: 'qs-v8-c03-007',
          ar: 'وَكَانُوا زِيَادَةً إِلَى ذَلِكَ يَنقُصُونَ الْمِكْيَالَ وَالْمِيزَانَ،',
          en: 'and in addition to that they shortchanged the measure and the scale,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they were' },
            { surface: 'زِيَادَةً', lemma: 'زِيَادَة', pos: 'noun', features: 'acc', root: 'ز ي د', gloss: 'in addition' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'يَنقُصُونَ', lemma: 'نَقَصَ', pos: 'verb', features: 'impf.3mp', root: 'ن ق ص', gloss: 'to diminish; shortchanging' },
            { surface: 'الْمِكْيَالَ', lemma: 'مِكْيَال', pos: 'noun', features: 'def.acc', root: 'ك ي ل', gloss: 'the measure' },
            { surface: 'وَالْمِيزَانَ', lemma: 'مِيزَان', pos: 'noun', features: 'conj+def.acc', root: 'و ز ن', gloss: 'and the scale' },
          ],
        },
        {
          id: 'qs-v8-c03-008',
          ar: 'وَيُطَفِّفُونَ فِي الْكَيْلِ،',
          en: 'gave short measure,',
          tokens: [
            { surface: 'وَيُطَفِّفُونَ', lemma: 'طَفَّفَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ط ف ف', gloss: 'to give short measure; and giving short measure' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْكَيْلِ', lemma: 'كَيْل', pos: 'noun', features: 'def.gen', root: 'ك ي ل', gloss: 'the measuring' },
          ],
        },
        {
          id: 'qs-v8-c03-009',
          ar: 'وَيَتَعَرَّضُونَ لِلْقَوَافِلِ،',
          en: 'waylaid caravans,',
          tokens: [
            { surface: 'وَيَتَعَرَّضُونَ', lemma: 'تَعَرَّضَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ع ر ض', gloss: 'to waylay, accost; and waylaying' },
            { surface: 'لِلْقَوَافِلِ', lemma: 'قَافِلَة', pos: 'noun', features: 'prep+pl.def.gen', root: 'ق ف ل', gloss: 'the caravans' },
          ],
        },
        {
          id: 'qs-v8-c03-010',
          ar: 'فَيَتَوَعَّدُونَهَا وَيُخِيفُونَهَا،',
          en: 'threatening and frightening them,',
          tokens: [
            { surface: 'فَيَتَوَعَّدُونَهَا', lemma: 'تَوَعَّدَ', pos: 'verb', features: 'conj+impf.3mp+3fs', root: 'و ع د', gloss: 'to threaten; and threatening them' },
            { surface: 'وَيُخِيفُونَهَا', lemma: 'أَخَافَ', pos: 'verb', features: 'conj+impf.3mp+3fs', root: 'خ و ف', gloss: 'to frighten; and frightening them' },
          ],
        },
        {
          id: 'qs-v8-c03-011',
          ar: 'وَيَعِيثُونَ فِي الأَرْضِ فَسَاداً،',
          en: 'and went about spreading corruption in the land,',
          tokens: [
            { surface: 'وَيَعِيثُونَ', lemma: 'عَاثَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ع ي ث', gloss: 'to spread corruption; and going about' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
            { surface: 'فَسَاداً', lemma: 'فَسَاد', pos: 'noun', features: 'indef.acc', gloss: 'corrupting' },
          ],
        },
        {
          id: 'qs-v8-c03-012',
          ar: 'شَأْنُ الأَغْنِيَاءِ الأَقْوِيَاءِ الَّذِينَ لَا يَرْجُونَ حِسَاباً',
          en: 'the way of the arrogant wealthy who neither expect a reckoning',
          tokens: [
            { surface: 'شَأْنُ', lemma: 'شَأْن', pos: 'noun', features: 'nom.constr', gloss: 'the way of' },
            { surface: 'الأَغْنِيَاءِ', lemma: 'غَنِيّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the wealthy' },
            { surface: 'الأَقْوِيَاءِ', lemma: 'قَوِيّ', pos: 'adj', features: 'pl.def.gen', gloss: 'the powerful' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'who' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرْجُونَ', lemma: 'رَجَا', pos: 'verb', features: 'impf.3mp', root: 'ر ج و', gloss: 'to hope for, expect; expecting' },
            { surface: 'حِسَاباً', lemma: 'حِسَاب', pos: 'noun', features: 'indef.acc', gloss: 'a reckoning' },
          ],
        },
        {
          id: 'qs-v8-c03-013',
          ar: 'وَلَا يَخْشَوْنَ عَذَاباً.',
          en: 'nor dread a punishment.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَخْشَوْنَ', lemma: 'خَشِيَ', pos: 'verb', features: 'impf.3mp', root: 'خ ش ي', gloss: 'to fear, dread; dreading' },
            { surface: 'عَذَاباً', lemma: 'عَذَاب', pos: 'noun', features: 'indef.acc', gloss: 'a punishment' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ أَهْلُ مَدْيَنَ يَفْعَلُونَ زِيَادَةً عَلَى الشِّرْكِ؟',
          options: ['كَانُوا يَنقُصُونَ الْمِكْيَالَ وَالْمِيزَانَ وَيَتَعَرَّضُونَ لِلْقَوَافِلِ وَيَعِيثُونَ فِي الأَرْضِ فَسَاداً', 'كَانُوا يُطْعِمُونَ الْفُقَرَاءَ وَيُسَاعِدُونَ الْمُسَافِرِينَ', 'كَانُوا يَبْنُونَ الْمَسَاجِدَ'],
          answer: 0,
          qEn: 'What did the people of Madyan do in addition to shirk?',
          optionsEn: ['They shortchanged the measure and scale, waylaid caravans, and spread corruption in the land', 'They fed the poor and helped travelers', 'They built mosques'],
        },
      ],
    },
    {
      en: 'So Allah sent them His messenger Shuʿayb, calling them and warning them, saying to them: "O my people, worship Allah -- you have no god other than Him. Do not shortchange the measure and the scale; I see you in prosperity, and I fear for you the punishment of an all-encompassing day. And O my people, give the measure and the scale in full with fairness, and do not defraud people of their due, and do not go about the earth spreading corruption."',
      sentences: [
        {
          id: 'qs-v8-c03-014',
          ar: 'فَبَعَثَ اللَّهُ إِلَيْهِمْ رَسُولَهُ شُعَيْباً يَدْعُوهُمْ وَيُنْذِرُهُمْ،',
          en: 'So Allah sent them His messenger Shuʿayb, calling them and warning them,',
          tokens: [
            { surface: 'فَبَعَثَ', lemma: 'بَعَثَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to send, raise up; so sent' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'رَسُولَهُ', lemma: 'رَسُول', pos: 'noun', features: 'acc+3ms', gloss: 'His messenger' },
            { surface: 'شُعَيْباً', lemma: 'شُعَيْب', pos: 'proper', features: 'acc', gloss: 'Shuʿayb' },
            { surface: 'يَدْعُوهُمْ', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to call; calling them' },
            { surface: 'وَيُنْذِرُهُمْ', lemma: 'أَنذَرَ', pos: 'verb', features: 'conj+impf.3ms+3mp', gloss: 'to warn; and warning them' },
          ],
        },
        {
          id: 'qs-v8-c03-015',
          ar: 'وَيَقُولُ لَهُمْ:',
          en: 'saying to them:',
          tokens: [
            { surface: 'وَيَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to say; and saying' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v8-c03-016',
          ar: '﴿يَاقَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ﴾',
          en: '"O my people, worship Allah -- you have no god other than Him.',
          tokens: [
            { surface: 'يَاقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'part+1s', gloss: 'O my people' },
            { surface: 'اعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'imp.2mp', gloss: 'to worship; worship!' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'لَكُم', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'you have' },
            { surface: 'مِّنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'any' },
            { surface: 'إِلَٰهٍ', lemma: 'إِلَه', pos: 'noun', features: 'indef.gen', gloss: 'god' },
            { surface: 'غَيْرُهُ', lemma: 'غَيْر', pos: 'noun', features: 'nom+3ms', gloss: 'other than Him' },
          ],
        },
        {
          id: 'qs-v8-c03-017',
          ar: '﴿وَلَا تَنقُصُوا الْمِكْيَالَ وَالْمِيزَانَ﴾',
          en: 'Do not shortchange the measure and the scale;',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and do not' },
            { surface: 'تَنقُصُوا', lemma: 'نَقَصَ', pos: 'verb', features: 'impf.2mp', gloss: 'to diminish; shortchange' },
            { surface: 'الْمِكْيَالَ', lemma: 'مِكْيَال', pos: 'noun', features: 'def.acc', gloss: 'the measure' },
            { surface: 'وَالْمِيزَانَ', lemma: 'مِيزَان', pos: 'noun', features: 'conj+def.acc', gloss: 'and the scale' },
          ],
        },
        {
          id: 'qs-v8-c03-018',
          ar: '﴿إِنِّي أَرَاكُم بِخَيْرٍ وَإِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ مُّحِيطٍ﴾',
          en: 'I see you in prosperity, and I fear for you the punishment of an all-encompassing day.',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'أَرَاكُم', lemma: 'رَأَى', pos: 'verb', features: 'impf.1s+2mp', gloss: 'to see; I see you' },
            { surface: 'بِخَيْرٍ', lemma: 'خَيْر', pos: 'noun', features: 'prep+indef.gen', gloss: 'in prosperity' },
            { surface: 'وَإِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1s', gloss: 'and indeed I' },
            { surface: 'أَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.1s', gloss: 'to fear; I fear' },
            { surface: 'عَلَيْكُمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'عَذَابَ', lemma: 'عَذَاب', pos: 'noun', features: 'acc.constr', gloss: 'the punishment of' },
            { surface: 'يَوْمٍ', lemma: 'يَوْم', pos: 'noun', features: 'indef.gen', gloss: 'a day' },
            { surface: 'مُّحِيطٍ', lemma: 'مُحِيط', pos: 'adj', features: 'indef.gen', root: 'ح و ط', gloss: 'all-encompassing' },
          ],
        },
        {
          id: 'qs-v8-c03-019',
          ar: '﴿وَيَاقَوْمِ أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ﴾',
          en: 'And O my people, give the measure and the scale in full with fairness,',
          tokens: [
            { surface: 'وَيَاقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'conj+part+1s', gloss: 'and O my people' },
            { surface: 'أَوْفُوا', lemma: 'أَوْفَى', pos: 'verb', features: 'imp.2mp', root: 'و ف ي', gloss: 'to give in full; give in full!' },
            { surface: 'الْمِكْيَالَ', lemma: 'مِكْيَال', pos: 'noun', features: 'def.acc', gloss: 'the measure' },
            { surface: 'وَالْمِيزَانَ', lemma: 'مِيزَان', pos: 'noun', features: 'conj+def.acc', gloss: 'and the scale' },
            { surface: 'بِالْقِسْطِ', lemma: 'قِسْط', pos: 'noun', features: 'prep+def.gen', root: 'ق س ط', gloss: 'with fairness' },
          ],
        },
        {
          id: 'qs-v8-c03-020',
          ar: '﴿وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ﴾',
          en: 'and do not defraud people of their due,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and do not' },
            { surface: 'تَبْخَسُوا', lemma: 'بَخَسَ', pos: 'verb', features: 'impf.2mp', root: 'ب خ س', gloss: 'to defraud, shortchange; defraud' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'أَشْيَاءَهُمْ', lemma: 'شَيْء', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their things, their due' },
          ],
        },
        {
          id: 'qs-v8-c03-021',
          ar: '﴿وَلَا تَعْثَوْا فِي الأَرْضِ مُفْسِدِينَ﴾.',
          en: 'and do not go about the earth spreading corruption."',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and do not' },
            { surface: 'تَعْثَوْا', lemma: 'عَاثَ', pos: 'verb', features: 'impf.2mp', gloss: 'to spread corruption; go about' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
            { surface: 'مُفْسِدِينَ', lemma: 'مُفْسِد', pos: 'noun', features: 'pl.acc', root: 'ف س د', gloss: 'as corrupters' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا أَمَرَ شُعَيْبٌ قَوْمَهُ فِي دَعْوَتِهِ؟',
          options: ['بِعِبَادَةِ اللَّهِ وَحْدَهُ، وَإِيفَاءِ الْمِكْيَالِ وَالْمِيزَانِ، وَتَرْكِ الْفَسَادِ فِي الأَرْضِ', 'بِجَمْعِ الْمَالِ بِأَيِّ وَسِيلَةٍ', 'بِتَرْكِ التِّجَارَةِ كُلِّيّاً'],
          answer: 0,
          qEn: 'What did Shuʿayb command his people in his call?',
          optionsEn: ['To worship Allah alone, give the measure and scale in full, and stop corrupting the earth', 'To gather wealth by any means', 'To abandon trade entirely'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَا',
        post: 'الْمِكْيَالَ وَالْمِيزَانَ.',
        en: 'And do not shortchange the measure and the scale.',
        options: ['تَنقُصُوا', 'تَنقُصُ', 'نَقَصْتُمْ', 'نَاقِصُونَ'],
        answer: 0,
        rationales: [
          'Jussive imperfect, 2nd masculine plural -- the required form after لَا النَّاهِيَة (prohibitive لا).',
          '2nd masculine singular -- wrong number; the command is to the whole people.',
          'Perfect -- wrong tense; a prohibition needs the imperfect.',
          'Active participle (noun) -- wrong part of speech for a command.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنِّي أَرَاكُم بِخَيْرٍ وَإِنِّي',
        post: 'عَلَيْكُمْ عَذَابَ يَوْمٍ مُّحِيطٍ.',
        en: 'I see you in prosperity, and I fear for you the punishment of an all-encompassing day.',
        options: ['أَخَافُ', 'يَخَافُ', 'خِفْتُ', 'مَخُوف'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches إِنِّي, "I fear."',
          '3rd masculine singular -- wrong person; the speaker is "I," not "he."',
          'Perfect -- wrong tense; the fear is ongoing, not a completed past event.',
          'Passive participle ("feared, dreaded") -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَيَاقَوْمِ',
        post: 'الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ.',
        en: 'And O my people, give the measure and the scale in full with fairness.',
        options: ['أَوْفُوا', 'وَفَّيْتُمْ', 'يُوفُونَ', 'مُوفُونَ'],
        answer: 0,
        rationales: [
          '2nd masculine plural imperative -- the required command form.',
          'Perfect -- wrong tense; this is a command, not a report of a past act.',
          '3rd masculine plural imperfect -- wrong person; the command addresses "you," not "they."',
          'Active participle (noun) -- wrong part of speech for a command.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخَافُ الرَّجُلُ الْعَذَابَ',
        pre: '',
        post: 'الْعَذَابَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَخَافُ', 'يَخَافُ', 'تَخَافُ', 'نَخَافُ'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَخَافُ الرَّجُلُ الْعَذَابَ',
        pre: '',
        post: 'الْعَذَابَ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you all (m)',
        options: ['تَخَافُونَ', 'يَخَافُ', 'أَخَافُ', 'نَخَافُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural imperfect -- matches أَنْتُمْ.',
          '3rd masculine singular -- the base form, not shifted to "you all."',
          '1st singular -- wrong person; the target is "you all," not "I."',
          '1st plural -- wrong person; the target is "you all," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَخَافُ الرَّجُلُ الْعَذَابَ',
        pre: '',
        post: 'الْعَذَابَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَخَافُونَ', 'يَخَافُ', 'تَخَافُونَ', 'نَخَافُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd masculine plural -- wrong person; this is "they," not "you all."',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

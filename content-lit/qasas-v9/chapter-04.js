// قَصَصُ النَّبِيِّينَ, volume 9, chapter 4 -- نِعْمَةُ اللَّهِ عَلَى سُلَيْمَانَ.
// Printed pages 225 (from its own heading box, further down the page than
// ch3) through 226 (top few lines only), ending right before ch5's heading
// فِقْهٌ دَقِيقٌ وَعِلْمٌ عَمِيقٌ on page 226. Transcribed by hand from the scan
// (vision OCR, 200dpi render) against ../CHAPTER-FORMAT.md.
//
// Sulaymān's own favours, mirroring ch2's Dāwūd chapter in shape: the wind
// obeying his command, and the strong and skilled among jinn and rebellious
// devils carrying out his orders on massive building projects. Quotes four
// consecutive āyāt: al-Anbiyāʾ 21:81-82 (the wind, and diving/working
// devils kept as his guards) and Sabaʾ 34:12-13 (the wind's two-month reach,
// molten copper, jinn working under his authority, and the jinn crafting
// him sanctuaries, statues, basins like troughs, and fixed cauldrons).
//
// Grammar / lexical notes:
//   -- مَارِد (new, "a rebellious one, insurgent") and عَاتٍ (qasas-v9 ch1,
//      "a tyrant") are near-synonyms describing the same class of jinn here
//      as ch1's وَالْعُتَاةَ described human tyrants -- kept as distinct
//      lemmas since the two words are lexically unrelated, not variants of
//      one root.
//   -- يَزِغْ (unit 017, "turns away, deviates") is jussive after مَنْ + a
//      conditional sense, glossed active; the format has no jussive atom so
//      it is tagged impf.3ms per the established mood convention (no mood
//      atom exists -- QASAS_AGENT_BRIEF.md §4).
//   -- All four āyāt (Anbiyāʾ 21:81-82, Sabaʾ 34:12-13) are wrapped in their
//      own ﴿﴾ sentences and split at natural clause breaks to stay at or
//      under nine tokens each, matching the qasas-v3 ch17 precedent.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): رِيح، أَمْر، حَمَلَ، مَكَان،
//      أَسْرَعَ، زَمَن، شَيْطَان، نَفَّذَ، عَالِم، عَمَل، حَافِظ، عَيْن، يَد، رَبّ،
//      شَاءَ، تِمْثَال، آل، قَلِيل، اللَّه، سُلَيْمَان، جِنّ، بَارَكَ، أَرْض، كُلّ،
//      شَيْء، ذَلِكَ، مِنْ
//      are all already taught and are NOT re-listed in newWords here.
//
// 21 new words -- the volume's densest chapter yet, carrying four Qur'anic
// āyāt back to back with their own specialised architectural/craft
// vocabulary (مِحْرَاب، تِمْثَال، جَفْنَة، قِدْر، رَاسِيَة).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch4',
  title: { ar: 'نِعْمَةُ اللَّهِ عَلَى سُلَيْمَانَ', en: "Allah's Blessing upon Sulaymān" },
  newWords: ['مَارِد', 'كَمَّلَ', 'مَشْرُوع', 'عُمْرَانِيّ', 'بِنَائِيّ', 'عِمْلَاق', 'عَاصِف', 'غَاصَ', 'دُونَ', 'غُدُوّ', 'رَوَاح', 'أَسَالَ', 'قِطْر', 'إِذْن', 'زَاغَ', 'أَذَاقَ', 'سَعِير', 'مِحْرَاب', 'جَفْنَة', 'قِدْر', 'رَاسِيَة', 'شَكُور'],
  lemmas: {
    مَارِد: { gloss: 'a rebellious one, insurgent' },
    كَمَّلَ: { gloss: 'to complete' },
    مَشْرُوع: { gloss: 'a project' },
    عُمْرَانِيّ: { gloss: 'relating to construction, urban' },
    بِنَائِيّ: { gloss: 'relating to building' },
    عِمْلَاق: { gloss: 'giant, colossal' },
    عَاصِف: { gloss: 'violently blowing (of wind)' },
    غَاصَ: { gloss: 'to dive' },
    دُونَ: { gloss: 'besides, other than' },
    غُدُوّ: { gloss: "a morning's journey" },
    رَوَاح: { gloss: "an evening's journey" },
    أَسَالَ: { gloss: 'to melt, cause to flow' },
    قِطْر: { gloss: 'molten copper' },
    إِذْن: { gloss: 'permission' },
    زَاغَ: { gloss: 'to deviate, turn away' },
    أَذَاقَ: { gloss: 'to cause to taste' },
    سَعِير: { gloss: 'a blazing fire' },
    مِحْرَاب: { gloss: 'a sanctuary, prayer-chamber' },
    جَفْنَة: { gloss: 'a large basin' },
    قِدْر: { gloss: 'a cauldron' },
    رَاسِيَة: { gloss: 'fixed, firmly set' },
    شَكُور: { gloss: 'most grateful' },
  },
  paragraphs: [
    {
      en: "As for Sulaymān, Allah subjected to him the winds, running by his command and carrying him from place to place, and swifter than time, and subjected to him the strong and the skilled among the jinn and the rebellious among the devils, carrying out his orders and completing his colossal construction and building projects. \"And to Sulaymān (We subjected) the wind, violently blowing, running by his command to the land which We had blessed, and We were Knowing of all things. And of the devils were some who dove for him and did work besides that, and We were keeping watch over them. And to Sulaymān (We subjected) the wind: its morning course was a month and its evening course was a month, and We caused a spring of molten copper to flow for him. And of the jinn were some who worked before him by the permission of his Lord, and whoever of them deviated from Our command, We would make him taste of the punishment of the Blaze. They worked for him what he willed of sanctuaries, statues, basins like troughs, and fixed cauldrons: work, O family of Dāwūd, in gratitude, and few of My servants are truly grateful.\"",
      sentences: [
        {
          id: 'qs-v9-c04-001',
          ar: 'فَأَمَّا سُلَيْمَانُ فَقَدْ سَخَّرَ اللَّهُ لَهُ الرِّيَاحَ تَجْرِي بِأَمْرِهِ',
          en: 'As for Sulaymān, Allah subjected to him the winds, running by his command,',
          tokens: [
            { surface: 'فَأَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'conj+part', gloss: 'as for' },
            { surface: 'سُلَيْمَانُ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'nom', gloss: 'Sulaymān' },
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'then indeed' },
            { surface: 'سَخَّرَ', lemma: 'سَخَّرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to subjugate; subjected' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'الرِّيَاحَ', lemma: 'رِيح', pos: 'noun', features: 'pl.def.acc', gloss: 'the winds' },
            { surface: 'تَجْرِي', lemma: 'جَرَى', pos: 'verb', features: 'impf.3fs', gloss: 'to run, flow; running' },
            { surface: 'بِأَمْرِهِ', lemma: 'أَمْر', pos: 'noun', features: 'prep+gen+3ms', gloss: 'by his command' },
          ],
        },
        {
          id: 'qs-v9-c04-002',
          ar: 'وَتَحْمِلُهُ مِنْ مَكَانٍ إِلَى مَكَانٍ،',
          en: 'and carrying him from place to place,',
          tokens: [
            { surface: 'وَتَحْمِلُهُ', lemma: 'حَمَلَ', pos: 'verb', features: 'conj+impf.3fs+3ms', gloss: 'to carry; and carrying him' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'مَكَانٍ', lemma: 'مَكَان', pos: 'noun', features: 'indef.gen', gloss: 'a place' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مَكَانٍ', lemma: 'مَكَان', pos: 'noun', features: 'indef.gen', gloss: 'a place' },
          ],
        },
        {
          id: 'qs-v9-c04-003',
          ar: 'وَأَسْرَعَ زَمَانٍ،',
          en: 'and swifter than time,',
          tokens: [
            { surface: 'وَأَسْرَعَ', lemma: 'أَسْرَعَ', pos: 'adj', features: 'conj+acc.constr', gloss: 'swifter than' },
            { surface: 'زَمَانٍ', lemma: 'زَمَن', pos: 'noun', features: 'indef.gen', gloss: 'time' },
          ],
        },
        {
          id: 'qs-v9-c04-004',
          ar: 'وَسَخَّرَ لَهُ الْأَقْوِيَاءَ وَالْحَاذِقِينَ مِنَ الْجِنِّ',
          en: 'and subjected to him the strong and the skilled among the jinn',
          tokens: [
            { surface: 'وَسَخَّرَ', lemma: 'سَخَّرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to subjugate; and subjected' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'الْأَقْوِيَاءَ', lemma: 'قَوِيّ', pos: 'noun', features: 'pl.def.acc', gloss: 'the strong' },
            { surface: 'وَالْحَاذِقِينَ', lemma: 'حَاذِق', pos: 'adj', features: 'conj+pl.def.acc', gloss: 'and the skilled' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْجِنِّ', lemma: 'جِنّ', pos: 'noun', features: 'def.gen', gloss: 'the jinn' },
          ],
        },
        {
          id: 'qs-v9-c04-005',
          ar: 'وَالْمَارِدِينَ مِنَ الشَّيَاطِينِ،',
          en: 'and the rebellious among the devils,',
          tokens: [
            { surface: 'وَالْمَارِدِينَ', lemma: 'مَارِد', pos: 'adj', features: 'conj+pl.def.acc', gloss: 'and the rebellious' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الشَّيَاطِينِ', lemma: 'شَيْطَان', pos: 'noun', features: 'pl.def.gen', gloss: 'the devils' },
          ],
        },
        {
          id: 'qs-v9-c04-006',
          ar: 'يُنَفِّذُونَ أَوَامِرَهُ',
          en: 'carrying out his orders',
          tokens: [
            { surface: 'يُنَفِّذُونَ', lemma: 'نَفَّذَ', pos: 'verb', features: 'impf.3mp', gloss: 'to carry out; carrying out' },
            { surface: 'أَوَامِرَهُ', lemma: 'أَمْر', pos: 'noun', features: 'pl.acc+3ms', gloss: 'his orders' },
          ],
        },
        {
          id: 'qs-v9-c04-007',
          ar: 'وَيُكَمِّلُونَ مَشَارِيعَهُ الْعُمْرَانِيَّةَ وَالْبِنَائِيَّةَ الْعِمْلَاقَةَ.',
          en: 'and completing his colossal construction and building projects.',
          tokens: [
            { surface: 'وَيُكَمِّلُونَ', lemma: 'كَمَّلَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ك م ل', gloss: 'to complete; and completing' },
            { surface: 'مَشَارِيعَهُ', lemma: 'مَشْرُوع', pos: 'noun', features: 'pl.acc+3ms', root: 'ش ر ع', gloss: 'his projects' },
            { surface: 'الْعُمْرَانِيَّةَ', lemma: 'عُمْرَانِيّ', pos: 'adj', features: 'def.acc.f', gloss: 'the construction' },
            { surface: 'وَالْبِنَائِيَّةَ', lemma: 'بِنَائِيّ', pos: 'adj', features: 'conj+def.acc.f', gloss: 'and the building' },
            { surface: 'الْعِمْلَاقَةَ', lemma: 'عِمْلَاق', pos: 'adj', features: 'def.acc.f', gloss: 'the colossal' },
          ],
        },
        {
          id: 'qs-v9-c04-008',
          ar: '﴿وَلِسُلَيْمَانَ الرِّيحَ عَاصِفَةً تَجْرِي بِأَمْرِهِ﴾',
          en: '"And to Sulaymān (We subjected) the wind, violently blowing, running by his command,',
          tokens: [
            { surface: 'وَلِسُلَيْمَانَ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'conj+prep+gen', gloss: 'and to Sulaymān' },
            { surface: 'الرِّيحَ', lemma: 'رِيح', pos: 'noun', features: 'def.acc', gloss: 'the wind' },
            { surface: 'عَاصِفَةً', lemma: 'عَاصِف', pos: 'adj', features: 'indef.acc.f', gloss: 'violently blowing' },
            { surface: 'تَجْرِي', lemma: 'جَرَى', pos: 'verb', features: 'impf.3fs', gloss: 'to run; running' },
            { surface: 'بِأَمْرِهِ', lemma: 'أَمْر', pos: 'noun', features: 'prep+gen+3ms', gloss: 'by his command' },
          ],
        },
        {
          id: 'qs-v9-c04-009',
          ar: '﴿إِلَى الْأَرْضِ الَّتِي بَارَكْنَا فِيهَا﴾',
          en: 'to the land which We had blessed,',
          tokens: [
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the land' },
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.f', gloss: 'which' },
            { surface: 'بَارَكْنَا', lemma: 'بَارَكَ', pos: 'verb', features: 'perf.1p', gloss: 'to bless; We blessed' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
          ],
        },
        {
          id: 'qs-v9-c04-010',
          ar: '﴿وَكُنَّا بِكُلِّ شَيْءٍ عَالِمِينَ﴾',
          en: 'and We were Knowing of all things.',
          tokens: [
            { surface: 'وَكُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to be; and We were' },
            { surface: 'بِكُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'prep+constr.gen', gloss: 'of all' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
            { surface: 'عَالِمِينَ', lemma: 'عَالِم', pos: 'adj', features: 'pl.acc', gloss: 'Knowing' },
          ],
        },
        {
          id: 'qs-v9-c04-011',
          ar: '﴿وَمِنَ الشَّيَاطِينِ مَنْ يَغُوصُونَ لَهُ﴾',
          en: 'And of the devils were some who dove for him',
          tokens: [
            { surface: 'وَمِنَ', lemma: 'مِنْ', pos: 'prep', features: 'conj+prep', gloss: 'and of' },
            { surface: 'الشَّيَاطِينِ', lemma: 'شَيْطَان', pos: 'noun', features: 'pl.def.gen', gloss: 'the devils' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'some who' },
            { surface: 'يَغُوصُونَ', lemma: 'غَاصَ', pos: 'verb', features: 'impf.3mp', root: 'غ و ص', gloss: 'to dive; dove' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
          ],
        },
        {
          id: 'qs-v9-c04-012',
          ar: '﴿وَيَعْمَلُونَ عَمَلاً دُونَ ذَلِكَ﴾',
          en: 'and did work besides that,',
          tokens: [
            { surface: 'وَيَعْمَلُونَ', lemma: 'عَمِلَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to do; and did' },
            { surface: 'عَمَلاً', lemma: 'عَمَل', pos: 'noun', features: 'indef.acc', gloss: 'work' },
            { surface: 'دُونَ', lemma: 'دُونَ', pos: 'prep', features: 'prep', gloss: 'besides' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v9-c04-013',
          ar: '﴿وَكُنَّا لَهُمْ حَافِظِينَ﴾.',
          en: 'and We were keeping watch over them.',
          tokens: [
            { surface: 'وَكُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to be; and We were' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'over them' },
            { surface: 'حَافِظِينَ', lemma: 'حَافِظ', pos: 'adj', features: 'pl.acc', gloss: 'keeping watch' },
          ],
        },
        {
          id: 'qs-v9-c04-014',
          ar: '﴿وَلِسُلَيْمَانَ الرِّيحَ غُدُوُّهَا شَهْرٌ وَرَوَاحُهَا شَهْرٌ﴾',
          en: '"And to Sulaymān (We subjected) the wind: its morning course was a month and its evening course was a month,',
          tokens: [
            { surface: 'وَلِسُلَيْمَانَ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'conj+prep+gen', gloss: 'and to Sulaymān' },
            { surface: 'الرِّيحَ', lemma: 'رِيح', pos: 'noun', features: 'def.acc', gloss: 'the wind' },
            { surface: 'غُدُوُّهَا', lemma: 'غُدُوّ', pos: 'noun', features: 'nom+3fs', root: 'غ د و', gloss: 'its morning course' },
            { surface: 'شَهْرٌ', lemma: 'شَهْر', pos: 'noun', features: 'indef.nom', gloss: 'a month' },
            { surface: 'وَرَوَاحُهَا', lemma: 'رَوَاح', pos: 'noun', features: 'conj+nom+3fs', root: 'ر و ح', gloss: 'and its evening course' },
            { surface: 'شَهْرٌ', lemma: 'شَهْر', pos: 'noun', features: 'indef.nom', gloss: 'a month' },
          ],
        },
        {
          id: 'qs-v9-c04-015',
          ar: '﴿وَأَسَلْنَا لَهُ عَيْنَ الْقِطْرِ﴾',
          en: 'and We caused a spring of molten copper to flow for him,',
          tokens: [
            { surface: 'وَأَسَلْنَا', lemma: 'أَسَالَ', pos: 'verb', features: 'conj+perf.1p', root: 'س ي ل', gloss: 'to melt, cause to flow; and We caused to flow' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'عَيْنَ', lemma: 'عَيْن', pos: 'noun', features: 'acc.constr', gloss: 'the spring of' },
            { surface: 'الْقِطْرِ', lemma: 'قِطْر', pos: 'noun', features: 'def.gen', gloss: 'molten copper' },
          ],
        },
        {
          id: 'qs-v9-c04-016',
          ar: '﴿وَمِنَ الْجِنِّ مَنْ يَعْمَلُ بَيْنَ يَدَيْهِ بِإِذْنِ رَبِّهِ﴾',
          en: 'and of the jinn were some who worked before him by the permission of his Lord,',
          tokens: [
            { surface: 'وَمِنَ', lemma: 'مِنْ', pos: 'prep', features: 'conj+prep', gloss: 'and of' },
            { surface: 'الْجِنِّ', lemma: 'جِنّ', pos: 'noun', features: 'def.gen', gloss: 'the jinn' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'some who' },
            { surface: 'يَعْمَلُ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to work; worked' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'before' },
            { surface: 'يَدَيْهِ', lemma: 'يَد', pos: 'noun', features: 'du.gen+3ms', gloss: 'his hands' },
            { surface: 'بِإِذْنِ', lemma: 'إِذْن', pos: 'noun', features: 'prep+constr.gen', root: 'أ ذ ن', gloss: 'by the permission of' },
            { surface: 'رَبِّهِ', lemma: 'رَبّ', pos: 'noun', features: 'gen+3ms', gloss: 'his Lord' },
          ],
        },
        {
          id: 'qs-v9-c04-017',
          ar: '﴿وَمَنْ يَزِغْ مِنْهُمْ عَنْ أَمْرِنَا نُذِقْهُ مِنْ عَذَابِ السَّعِيرِ﴾',
          en: 'and whoever of them deviated from Our command, We would make him taste of the punishment of the Blaze.',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and whoever' },
            { surface: 'يَزِغْ', lemma: 'زَاغَ', pos: 'verb', features: 'impf.3ms', root: 'ز ي غ', gloss: 'to deviate; deviates' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'of them' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَمْرِنَا', lemma: 'أَمْر', pos: 'noun', features: 'gen+1p', gloss: 'Our command' },
            { surface: 'نُذِقْهُ', lemma: 'أَذَاقَ', pos: 'verb', features: 'impf.1p+3ms', root: 'ذ و ق', gloss: 'to make taste; We make him taste' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'عَذَابِ', lemma: 'عَذَاب', pos: 'noun', features: 'constr.gen', gloss: 'the punishment of' },
            { surface: 'السَّعِيرِ', lemma: 'سَعِير', pos: 'noun', features: 'def.gen', gloss: 'the Blaze' },
          ],
        },
        {
          id: 'qs-v9-c04-018',
          ar: '﴿يَعْمَلُونَ لَهُ مَا يَشَاءُ مِنْ مَحَارِيبَ وَتَمَاثِيلَ﴾',
          en: '"They worked for him what he willed of sanctuaries and statues,',
          tokens: [
            { surface: 'يَعْمَلُونَ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to work; they worked' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَشَاءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3ms', gloss: 'to will; he willed' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'مَحَارِيبَ', lemma: 'مِحْرَاب', pos: 'noun', features: 'pl.indef.gen', root: 'ح ر ب', gloss: 'sanctuaries' },
            { surface: 'وَتَمَاثِيلَ', lemma: 'تِمْثَال', pos: 'noun', features: 'conj+pl.indef.gen', gloss: 'and statues' },
          ],
        },
        {
          id: 'qs-v9-c04-019',
          ar: '﴿وَجِفَانٍ كَالْجَوَابِ وَقُدُورٍ رَاسِيَاتٍ﴾',
          en: 'and basins like troughs, and fixed cauldrons:',
          tokens: [
            { surface: 'وَجِفَانٍ', lemma: 'جَفْنَة', pos: 'noun', features: 'conj+pl.indef.gen', root: 'ج ف ن', gloss: 'and basins' },
            { surface: 'كَالْجَوَابِ', lemma: 'جَابِيَة', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'like troughs' },
            { surface: 'وَقُدُورٍ', lemma: 'قِدْر', pos: 'noun', features: 'conj+pl.indef.gen', root: 'ق د ر', gloss: 'and cauldrons' },
            { surface: 'رَاسِيَاتٍ', lemma: 'رَاسِيَة', pos: 'adj', features: 'pl.indef.gen', gloss: 'fixed' },
          ],
        },
        {
          id: 'qs-v9-c04-020',
          ar: '﴿اعْمَلُوا آلَ دَاوُودَ شُكْراً﴾',
          en: 'work, O family of Dāwūd, in gratitude,',
          tokens: [
            { surface: 'اعْمَلُوا', lemma: 'عَمِلَ', pos: 'verb', features: 'imp.2mp', gloss: 'to work; work' },
            { surface: 'آلَ', lemma: 'آل', pos: 'noun', features: 'acc.constr', gloss: 'family of' },
            { surface: 'دَاوُودَ', lemma: 'دَاوُد', pos: 'proper', features: 'gen', gloss: 'Dāwūd' },
            { surface: 'شُكْراً', lemma: 'شُكْر', pos: 'noun', features: 'indef.acc', gloss: 'in gratitude' },
          ],
        },
        {
          id: 'qs-v9-c04-021',
          ar: '﴿وَقَلِيلٌ مِنْ عِبَادِيَ الشَّكُورُ﴾.',
          en: 'and few of My servants are truly grateful."',
          tokens: [
            { surface: 'وَقَلِيلٌ', lemma: 'قَلِيل', pos: 'adj', features: 'conj+indef.nom', gloss: 'and few' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'عِبَادِيَ', lemma: 'عَبْد', pos: 'noun', features: 'pl.gen+1s', gloss: 'My servants' },
            { surface: 'الشَّكُورُ', lemma: 'شَكُور', pos: 'adj', features: 'def.nom', root: 'ش ك ر', gloss: 'the truly grateful' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا سَخَّرَ اللَّهُ لِسُلَيْمَانَ لِيَنْتَقِلَ بِهِ؟',
          options: ['الرِّيَاحَ تَجْرِي بِأَمْرِهِ', 'الْخَيْلَ فَقَطْ', 'السُّفُنَ فَقَطْ'],
          answer: 0,
          qEn: 'What did Allah subject to Sulaymān to travel with?',
          optionsEn: ['The winds, running by his command', 'Only horses', 'Only ships'],
        },
        {
          q: 'مَنْ كَانَ يُنَفِّذُ أَوَامِرَ سُلَيْمَانَ وَيُكَمِّلُ مَشَارِيعَهُ؟',
          options: ['الْأَقْوِيَاءُ وَالْحَاذِقُونَ مِنَ الْجِنِّ وَالْمَارِدُونَ مِنَ الشَّيَاطِينِ', 'أَهْلُ بَيْتِهِ فَقَطْ', 'لَا أَحَدَ'],
          answer: 0,
          qEn: 'Who carried out Sulaymān\'s orders and completed his projects?',
          optionsEn: ['The strong and skilled among the jinn and the rebellious among the devils', 'Only his household', 'No one'],
        },
        {
          q: 'مَاذَا كَانَ يُصِيبُ الشَّيْطَانَ الَّذِي يَزِيغُ عَنْ أَمْرِ اللَّهِ؟',
          options: ['يُذَاقُ مِنْ عَذَابِ السَّعِيرِ', 'يُكَافَأُ بِالْمَالِ', 'لَا شَيْءَ يُصِيبُهُ'],
          answer: 0,
          qEn: "What would happen to a devil who deviated from Allah's command?",
          optionsEn: ['He would be made to taste the punishment of the Blaze', 'He would be rewarded with wealth', 'Nothing would happen to him'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'سَخَّرَ اللَّهُ لِسُلَيْمَانَ الرِّيَاحَ',
        post: 'بِأَمْرِهِ.',
        en: "Allah subjected to Sulaymān the winds, running by his command.",
        options: ['تَجْرِي', 'تَجْرِيَ', 'يَجْرِي', 'جَرَتْ'],
        answer: 0,
        rationales: [
          '3rd feminine singular indicative -- a plain descriptive clause after الرِّيَاحَ, matching the printed تَجْرِي بِأَمْرِهِ.',
          'Subjunctive form -- wrong mood; nothing here calls for أَنْ or a subjunctive particle.',
          'Masculine -- wrong gender; الرِّيَاحَ (winds) as antecedent takes the feminine verb here.',
          'Perfect ("ran") -- wrong tense; the scene describes an ongoing state.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ اللَّهُ: اعْمَلُوا آلَ دَاوُودَ',
        post: '.',
        en: 'Allah said: work, O family of Dāwūd, in gratitude.',
        options: ['شُكْراً', 'شُكْرٌ', 'شُكْرِ', 'الشُّكْرُ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- an adverbial object describing manner ("in gratitude"), matching the printed اعْمَلُوا ... شُكْراً.',
          'Nominative -- wrong case; this position is an adverbial accusative, not a subject.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong; the printed word is indefinite.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَمَنْ يَزِغْ مِنْهُمْ عَنْ أَمْرِنَا نُذِقْهُ مِنْ',
        post: 'السَّعِيرِ.',
        en: 'and whoever of them deviated from Our command, We would make him taste of the punishment of the Blaze.',
        options: ['عَذَابِ', 'عَذَابٌ', 'عَذَاباً', 'الْعَذَابُ'],
        answer: 0,
        rationales: [
          'Genitive, construct -- object of the preposition مِنْ and first term of an إضافة with السَّعِير, matching the printed مِنْ عَذَابِ السَّعِيرِ.',
          'Nominative -- wrong case; a preposition requires the genitive.',
          'Accusative -- wrong case for the same reason.',
          'Definite, non-construct -- wrong; the construct here takes السَّعِير directly as its second term.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَعْمَلُ الْجِنِّيُّ بِإِذْنِ رَبِّهِ',
        pre: '',
        post: 'بِإِذْنِ رَبِّهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَعْمَلُونَ', 'يَعْمَلُ', 'تَعْمَلُ', 'نَعْمَلُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '3rd feminine singular -- wrong person and gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'أَغُوصُ فِي الْبَحْرِ',
        pre: '',
        post: 'فِي الْبَحْرِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَغُوصُ', 'أَغُوصُ', 'يَغُوصُ', 'نَغُوصُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '1st singular -- the base form, not shifted to "she."',
          '3rd masculine singular -- wrong gender; the target is "she," not "he."',
          '1st plural -- wrong person; the target is "she," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَشَاءُ سُلَيْمَانُ بِنَاءَ مِحْرَابٍ',
        pre: '',
        post: 'بِنَاءَ مِحْرَابٍ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَشَاءُ', 'يَشَاءُ', 'تَشَاءُ', 'نَشَاءُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
    ],
  },
};

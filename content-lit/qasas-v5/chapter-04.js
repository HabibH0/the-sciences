// قَصَصُ النَّبِيِّينَ, volume 5 «نَاقَةُ ثَمُودَ», chapter 4 -- صَالِحٌ عَلَيْهِ الصَّلَاةُ وَالسَّلَامُ.
// Printed pages 99-101 (from the ch3-closing scene through the ch4 heading
// box and its full narrative, ending right before ch5's heading دَعْوَةُ
// صَالِحٍ). Transcribed by hand against ../CHAPTER-FORMAT.md and the shared
// v5 brief (verified Arabic already provided, not re-OCR'd here).
//
// Allah decides to send Thamūd a messenger, as He had sent one to Nūḥ's and
// ʿĀd's nations before, and Ṣāliḥ is introduced: a boy of noble birth,
// outstanding and right-minded, in whom the people place great worldly
// hope -- they and his own father imagine him becoming rich, prominent,
// admired, riding out with servants at his back. But Allah's plan for him
// is greater than any of that: prophethood, and the charge of leading his
// people out of darkness into light.
//
// Grammar / lexical notes:
//   -- صَالِحٌ is tagged pos: 'proper', a regular triptote (nom صَالِحٌ, acc
//      صَالِحاً qs-v5-c04-018, gen not yet needed here) per the v5 brief.
//      It is NOT added to newWords, however: the fully-vowelled lemma
//      string 'صَالِح' already occurs in the taught corpus 12 times, both
//      as the common adjective "righteous" (qasas-v2 ch25, qasas-v3
//      ch5/6/11/21) and once already as this very proper noun (qasas-v8
//      ch1, gloss 'Ṣāliḥ', written in parallel). Since novelty is tracked
//      by exact lemma spelling and the string is already present, the
//      brief's own instruction to "prefer NOT listing something as new
//      over falsely claiming novelty" governs here over the narrative
//      framing "introduced here for the first time" -- the grammar note
//      (triptote, don't diptote-tag) still applies in full.
//   -- وُلِدَ (qs-v5-c04-006) is the passive of a NEW verb وَلَدَ ("to give
//      birth to"), tagged pass+perf.3ms -- distinct from the already-known
//      noun وَلَد ("child, boy") reused two sentences later as كَانَ's
//      predicate.
//   -- لِيُخْرِجَهُمْ (qs-v5-c04-030) is a lām-of-purpose fused onto a
//      subjunctive verb, not the preposition لِ fused onto a noun --
//      tagged 'part+impf.3ms+3mp' on the verb's own lemma أَخْرَجَ, matching
//      the majority convention already in the corpus (qasas-v2 ch7/ch17,
//      qasas-v6 ch11) over the minority 'prep+impf' alternative (qasas-v2
//      ch22, qasas-v6 ch16) -- both exist, this chapter follows the more
//      common one.
//   -- غَيْرَ ذَلِكَ (qs-v5-c04-028) is tagged 'acc.constr' on غَيْر (idafa
//      to the following ذَلِكَ), matching the parallel أَجَلَ اللَّهِ
//      construction already tagged 'acc.constr' in qasas-v3 ch16.
//   -- بِأَعْلَى صَوْتِهِ does not occur in this chapter (it opens ch5), but
//      the pattern's own precedent (qasas-v3 ch13, أَعْلَى tagged pos:
//      'adj', features 'prep+constr') is reused there.
//   -- Shared lexicon check (CHAPTER-FORMAT.md's own conventions and the
//      grep of all prior chapters): أَرَادَ، اللَّه، أَنْ، أَرْسَلَ، إِلَيْهِمْ،
//      رَسُول، كَمَا، إِلَى، أُمَّة، نُوح، عَاد، إِنَّ، لَا، رَضِيَ (يَرْضَى)، لِ،
//      عَبْد (عِبَاد)، كُفْر، أَحَبَّ (يُحِبُّ)، فَسَاد، فِي، أَرْض، كَانَ، رَجُل،
//      اِسْم، شَرِيف، رَشِيد، نَاس، رَجَاء، كَبِير، شَأْن، رَأَى، أَنَّ، مِنْ،
//      غَنِيّ، قَصْر، جَمِيل، بُسْتَان، أَب، اِبْن، مَال، عَظِيم، خَرَجَ، سَلَّمَ،
//      فُلَان، سُرُور، إِذَا، سَمِعَ، غَنِيّ، لَكِنَّ، غَيْر، ذَلِكَ، نُبُوَّة،
//      قَوْم، نُور، هَلْ، فَوْق، شَرَف are all already taught and are NOT
//      re-listed in newWords here.
//
// 14 new words (وَلَدَ، نَشَأَ، صَلَاح، نَجِيب، أَشَارَ، كَسَبَ، وَرَاءَ، خَادِم،
// كَمْ، شَرَّفَ، ظُلْمَة، كَرَامَة، فَرَس، سَعِيد).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch4',
  title: { ar: 'صَالِحٌ عَلَيْهِ الصَّلَاةُ وَالسَّلَامُ', en: 'Ṣāliḥ, Peace Be Upon Him' },
  newWords: ['وَلَدَ', 'نَشَأَ', 'صَلَاح', 'نَجِيب', 'أَشَارَ', 'كَسَبَ', 'وَرَاءَ', 'خَادِم', 'كَمْ', 'شَرَّفَ', 'ظُلْمَة', 'كَرَامَة', 'فَرَس', 'سَعِيد'],
  lemmas: {
    وَلَدَ: { gloss: 'to give birth to; (pass.) to be born' },
    نَشَأَ: { gloss: 'to grow up, arise' },
    صَلَاح: { gloss: 'righteousness, goodness' },
    نَجِيب: { gloss: 'outstanding, of noble character' },
    أَشَارَ: { gloss: 'to point to, indicate, gesture' },
    كَسَبَ: { gloss: 'to earn, gain' },
    وَرَاءَ: { gloss: 'behind' },
    خَادِم: { gloss: 'a servant' },
    كَمْ: { gloss: 'how much, how great! (exclamatory)' },
    شَرَّفَ: { gloss: 'to honor, ennoble' },
    ظُلْمَة: { gloss: 'darkness' },
    كَرَامَة: { gloss: 'honor, dignity' },
    فَرَس: { gloss: 'a horse' },
    سَعِيد: { gloss: 'happy' },
  },
  paragraphs: [
    {
      en: "Allah wanted to send them a messenger, just as He had sent one to Nūḥ's nation, and had sent a messenger to ʿĀd. Indeed, Allah does not accept disbelief for His servants; indeed, Allah does not love corruption on the earth. Among them was a man named Ṣāliḥ, born into a noble house, who grew up with intellect and righteousness. He was a truly outstanding boy, a truly right-minded boy, whom the people would point to, saying: 'This is Ṣāliḥ, this is Ṣāliḥ!' The people had great hope in him, saying: 'He will have a great standing, he will have a great standing!' People thought Ṣāliḥ would become one of their nobles, and one of their wealthy men. They thought he would have a beautiful palace and a great orchard. His father thought his son would earn great wealth through his intellect and go about among the people -- riding out on a horse, the servants behind him, the people greeting him, saying: 'This is so-and-so's son, this is so-and-so's son!' How great would his joy be when he heard the people saying he was truly happy, that his son was truly rich! But Allah wanted something else: Allah wanted to honor him with prophethood and send him to his people, to bring them out of darkness into light. And is there any honor above that? Is there any dignity above that?",
      sentences: [
        {
          id: 'qs-v5-c04-001',
          ar: 'وَأَرَادَ اللَّهُ أَنْ يُرْسِلَ إِلَيْهِمْ رَسُولاً،',
          en: 'Allah wanted to send them a messenger,',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want; and wanted' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُرْسِلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'impf.3ms', root: 'ر س ل', gloss: 'to send; send' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'رَسُولاً', lemma: 'رَسُول', pos: 'noun', features: 'indef.acc', gloss: 'a messenger' },
          ],
        },
        {
          id: 'qs-v5-c04-002',
          ar: 'كَمَا أَرْسَلَ إِلَى أُمَّةِ نُوحٍ وَأَرْسَلَ إِلَى عَادٍ رَسُولاً.',
          en: "just as He had sent one to Nūḥ's nation and sent a messenger to ʿĀd.",
          tokens: [
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'أَرْسَلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'perf.3ms', root: 'ر س ل', gloss: 'to send; sent' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أُمَّةِ', lemma: 'أُمَّة', pos: 'noun', features: 'constr.gen', gloss: 'the nation of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
            { surface: 'وَأَرْسَلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر س ل', gloss: 'to send; and sent' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عَادٍ', lemma: 'عَاد', pos: 'proper', features: 'gen', gloss: 'ʿĀd' },
            { surface: 'رَسُولاً', lemma: 'رَسُول', pos: 'noun', features: 'indef.acc', gloss: 'a messenger' },
          ],
        },
        {
          id: 'qs-v5-c04-003',
          ar: 'إِنَّ اللَّهَ لَا يَرْضَى لِعِبَادِهِ الْكُفْرَ،',
          en: 'Indeed, Allah does not accept disbelief for His servants,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرْضَى', lemma: 'رَضِيَ', pos: 'verb', features: 'impf.3ms', root: 'ر ض ي', gloss: 'to accept, be pleased with; accepts' },
            { surface: 'لِعِبَادِهِ', lemma: 'عَبْد', pos: 'noun', features: 'prep+gen+3ms', gloss: 'for His servants' },
            { surface: 'الْكُفْرَ', lemma: 'كُفْر', pos: 'noun', features: 'def.acc', gloss: 'disbelief' },
          ],
        },
        {
          id: 'qs-v5-c04-004',
          ar: 'إِنَّ اللَّهَ لَا يُحِبُّ الْفَسَادَ فِي الْأَرْضِ.',
          en: 'Indeed, Allah does not love corruption on the earth.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', root: 'ح ب ب', gloss: 'to love; loves' },
            { surface: 'الْفَسَادَ', lemma: 'فَسَاد', pos: 'noun', features: 'def.acc', gloss: 'corruption' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, on' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
          ],
        },
        {
          id: 'qs-v5-c04-005',
          ar: 'وَكَانَ فِيهِمْ رَجُلٌ اسْمُهُ صَالِحٌ،',
          en: 'Among them was a man named Ṣāliḥ,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and there was' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', gloss: 'a man' },
            { surface: 'اسْمُهُ', lemma: 'اِسْم', pos: 'noun', features: 'nom+3ms', gloss: 'his name' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
          ],
        },
        {
          id: 'qs-v5-c04-006',
          ar: 'وُلِدَ فِي بَيْتٍ شَرِيفٍ،',
          en: 'born into a noble house,',
          tokens: [
            { surface: 'وُلِدَ', lemma: 'وَلَدَ', pos: 'verb', features: 'pass+perf.3ms', root: 'و ل د', gloss: 'to give birth to; was born' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, into' },
            { surface: 'بَيْتٍ', lemma: 'بَيْت', pos: 'noun', features: 'indef.gen', gloss: 'a house' },
            { surface: 'شَرِيفٍ', lemma: 'شَرِيف', pos: 'adj', features: 'indef.gen', gloss: 'noble' },
          ],
        },
        {
          id: 'qs-v5-c04-007',
          ar: 'وَنَشَأَ عَلَى عَقْلٍ وَصَلَاحٍ.',
          en: 'and grew up with intellect and righteousness.',
          tokens: [
            { surface: 'وَنَشَأَ', lemma: 'نَشَأَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ش أ', gloss: 'to grow up, arise; and grew up' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'with, upon' },
            { surface: 'عَقْلٍ', lemma: 'عَقْل', pos: 'noun', features: 'indef.gen', gloss: 'intellect' },
            { surface: 'وَصَلَاحٍ', lemma: 'صَلَاح', pos: 'noun', features: 'conj+indef.gen', root: 'ص ل ح', gloss: 'and righteousness' },
          ],
        },
        {
          id: 'qs-v5-c04-008',
          ar: 'وَكَانَ وَلَداً نَجِيباً جِدّاً،',
          en: 'He was a truly outstanding boy,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'وَلَداً', lemma: 'وَلَد', pos: 'noun', features: 'indef.acc', gloss: 'a boy' },
            { surface: 'نَجِيباً', lemma: 'نَجِيب', pos: 'adj', features: 'indef.acc', root: 'ن ج ب', gloss: 'outstanding, of noble character' },
            { surface: 'جِدّاً', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', gloss: 'very' },
          ],
        },
        {
          id: 'qs-v5-c04-009',
          ar: 'وَكَانَ وَلَداً رَشِيداً جِدّاً،',
          en: 'a truly right-minded boy,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'وَلَداً', lemma: 'وَلَد', pos: 'noun', features: 'indef.acc', gloss: 'a boy' },
            { surface: 'رَشِيداً', lemma: 'رَشِيد', pos: 'adj', features: 'indef.acc', gloss: 'right-minded, mature' },
            { surface: 'جِدّاً', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', gloss: 'very' },
          ],
        },
        {
          id: 'qs-v5-c04-010',
          ar: 'يُشِيرُ إِلَيْهِ النَّاسُ.',
          en: 'whom the people would point to.',
          tokens: [
            { surface: 'يُشِيرُ', lemma: 'أَشَارَ', pos: 'verb', features: 'impf.3ms', root: 'ش و ر', gloss: 'to point to, indicate; points to' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'at him' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v5-c04-011',
          ar: 'وَيَقُولُونَ:',
          en: 'saying:',
          tokens: [
            { surface: 'وَيَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to say; and they say' },
          ],
        },
        {
          id: 'qs-v5-c04-012',
          ar: 'هَذَا صَالِحٌ،',
          en: '"This is Ṣāliḥ,',
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
          ],
        },
        {
          id: 'qs-v5-c04-013',
          ar: 'هَذَا صَالِحٌ.',
          en: 'this is Ṣāliḥ!"',
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
          ],
        },
        {
          id: 'qs-v5-c04-014',
          ar: 'وَكَانَ لِلنَّاسِ فِيهِ رَجَاءٌ كَبِيرٌ،',
          en: 'The people had great hope in him,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and there was' },
            { surface: 'لِلنَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'prep+def.gen', gloss: 'for the people' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in him' },
            { surface: 'رَجَاءٌ', lemma: 'رَجَاء', pos: 'noun', features: 'indef.nom', gloss: 'hope' },
            { surface: 'كَبِيرٌ', lemma: 'كَبِير', pos: 'adj', features: 'indef.nom', gloss: 'great' },
          ],
        },
        {
          id: 'qs-v5-c04-015',
          ar: 'يَقُولُونَ:',
          en: 'saying:',
          tokens: [
            { surface: 'يَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3mp', gloss: 'to say; they say' },
          ],
        },
        {
          id: 'qs-v5-c04-016',
          ar: 'سَيَكُونُ لَهُ شَأْنٌ،',
          en: '"He will have a great standing,',
          tokens: [
            { surface: 'سَيَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; will be' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him, he will have' },
            { surface: 'شَأْنٌ', lemma: 'شَأْن', pos: 'noun', features: 'indef.nom', gloss: 'a standing, status' },
          ],
        },
        {
          id: 'qs-v5-c04-017',
          ar: 'سَيَكُونُ لَهُ شَأْنٌ.',
          en: 'he will have a great standing!"',
          tokens: [
            { surface: 'سَيَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; will be' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him, he will have' },
            { surface: 'شَأْنٌ', lemma: 'شَأْن', pos: 'noun', features: 'indef.nom', gloss: 'a standing, status' },
          ],
        },
        {
          id: 'qs-v5-c04-018',
          ar: 'يَرَى النَّاسُ أَنَّ صَالِحاً يَكُونُ مِنْ أَشْرَافِهِمْ،',
          en: 'People thought Ṣāliḥ would become one of their nobles,',
          tokens: [
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', gloss: 'to see, think; think' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'صَالِحاً', lemma: 'صَالِح', pos: 'proper', features: 'acc', gloss: 'Ṣāliḥ' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; would become' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'one of' },
            { surface: 'أَشْرَافِهِمْ', lemma: 'شَرِيف', pos: 'noun', features: 'pl.gen+3mp', root: 'ش ر ف', gloss: 'their nobles' },
          ],
        },
        {
          id: 'qs-v5-c04-019',
          ar: 'وَيَكُونُ مِنْ أَغْنِيَائِهِمْ.',
          en: 'and one of their wealthy men.',
          tokens: [
            { surface: 'وَيَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ك و ن', gloss: 'to be; and would become' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'one of' },
            { surface: 'أَغْنِيَائِهِمْ', lemma: 'غَنِيّ', pos: 'noun', features: 'pl.gen+3mp', gloss: 'their wealthy' },
          ],
        },
        {
          id: 'qs-v5-c04-020',
          ar: 'وَيَرَوْنَ أَنَّهُ سَيَكُونُ لَهُ قَصْرٌ جَمِيلٌ وَبُسْتَانٌ كَبِيرٌ.',
          en: 'They thought he would have a beautiful palace and a great orchard.',
          tokens: [
            { surface: 'وَيَرَوْنَ', lemma: 'رَأَى', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to see, think; and they think' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'سَيَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; will have' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him, he will have' },
            { surface: 'قَصْرٌ', lemma: 'قَصْر', pos: 'noun', features: 'indef.nom', gloss: 'a palace' },
            { surface: 'جَمِيلٌ', lemma: 'جَمِيل', pos: 'adj', features: 'indef.nom', gloss: 'beautiful' },
            { surface: 'وَبُسْتَانٌ', lemma: 'بُسْتَان', pos: 'noun', features: 'conj+indef.nom', gloss: 'and an orchard' },
            { surface: 'كَبِيرٌ', lemma: 'كَبِير', pos: 'adj', features: 'indef.nom', gloss: 'great' },
          ],
        },
        {
          id: 'qs-v5-c04-021',
          ar: 'وَيَرَى أَبُوهُ أَنَّ ابْنَهُ يَكْسِبُ بِعَقْلِهِ مَالاً عَظِيماً وَيَخْرُجُ فِي النَّاسِ.',
          en: 'His father thought his son would earn great wealth through his intellect and go about among the people.',
          tokens: [
            { surface: 'وَيَرَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to see, think; and thinks' },
            { surface: 'أَبُوهُ', lemma: 'أَب', pos: 'noun', features: 'nom+3ms', gloss: 'his father' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'ابْنَهُ', lemma: 'اِبْن', pos: 'noun', features: 'acc+3ms', gloss: 'his son' },
            { surface: 'يَكْسِبُ', lemma: 'كَسَبَ', pos: 'verb', features: 'impf.3ms', root: 'ك س ب', gloss: 'to earn, gain; earns' },
            { surface: 'بِعَقْلِهِ', lemma: 'عَقْل', pos: 'noun', features: 'prep+gen+3ms', gloss: 'through his intellect' },
            { surface: 'مَالاً', lemma: 'مَال', pos: 'noun', features: 'indef.acc', gloss: 'wealth' },
            { surface: 'عَظِيماً', lemma: 'عَظِيم', pos: 'adj', features: 'indef.acc', gloss: 'great' },
            { surface: 'وَيَخْرُجُ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+impf.3ms', root: 'خ ر ج', gloss: 'to go out; and goes about' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v5-c04-022',
          ar: 'يَخْرُجُ عَلَى فَرَسٍ وَوَرَاءَهُ الْخَدَمُ،',
          en: 'riding out on a horse, the servants behind him,',
          tokens: [
            { surface: 'يَخْرُجُ', lemma: 'خَرَجَ', pos: 'verb', features: 'impf.3ms', root: 'خ ر ج', gloss: 'to go out; goes out' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'فَرَسٍ', lemma: 'فَرَس', pos: 'noun', features: 'indef.gen', root: 'ف ر س', gloss: 'a horse' },
            { surface: 'وَوَرَاءَهُ', lemma: 'وَرَاءَ', pos: 'prep', features: 'conj+prep+3ms', gloss: 'and behind him' },
            { surface: 'الْخَدَمُ', lemma: 'خَادِم', pos: 'noun', features: 'pl.def.nom', root: 'خ د م', gloss: 'the servants' },
          ],
        },
        {
          id: 'qs-v5-c04-023',
          ar: 'فَيُسَلِّمُ عَلَيْهِ النَّاسُ،',
          en: 'the people greeting him,',
          tokens: [
            { surface: 'فَيُسَلِّمُ', lemma: 'سَلَّمَ', pos: 'verb', features: 'conj+impf.3ms', root: 'س ل م', gloss: 'to greet; and greet' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'him' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v5-c04-024',
          ar: 'وَيَقُولُونَ هَذَا ابْنُ فُلَانٍ،',
          en: 'saying: "This is so-and-so\'s son,',
          tokens: [
            { surface: 'وَيَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to say; and they say' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'ابْنُ', lemma: 'اِبْن', pos: 'noun', features: 'constr.nom', gloss: 'the son of' },
            { surface: 'فُلَانٍ', lemma: 'فُلَان', pos: 'noun', features: 'indef.gen', gloss: 'so-and-so' },
          ],
        },
        {
          id: 'qs-v5-c04-025',
          ar: 'هَذَا ابْنُ فُلَانٍ!',
          en: 'this is so-and-so\'s son!"',
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'ابْنُ', lemma: 'اِبْن', pos: 'noun', features: 'constr.nom', gloss: 'the son of' },
            { surface: 'فُلَانٍ', lemma: 'فُلَان', pos: 'noun', features: 'indef.gen', gloss: 'so-and-so' },
          ],
        },
        {
          id: 'qs-v5-c04-026',
          ar: 'وَكَمْ يَكُونُ سُرُورُهُ إِذَا سَمِعَ النَّاسَ يَقُولُونَ إِنَّهُ سَعِيدٌ جِدّاً،',
          en: 'How great would his joy be when he heard the people saying he was truly happy,',
          tokens: [
            { surface: 'وَكَمْ', lemma: 'كَمْ', pos: 'adv', features: 'conj+adv', gloss: 'and how much, how great!' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; is, would be' },
            { surface: 'سُرُورُهُ', lemma: 'سُرُور', pos: 'noun', features: 'nom+3ms', gloss: 'his joy' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'سَمِعَ', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to hear; he heard' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'يَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3mp', gloss: 'to say; saying' },
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'سَعِيدٌ', lemma: 'سَعِيد', pos: 'adj', features: 'indef.nom', root: 'س ع د', gloss: 'happy' },
            { surface: 'جِدّاً', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', gloss: 'very' },
          ],
        },
        {
          id: 'qs-v5-c04-027',
          ar: 'إِنَّ ابْنَهُ غَنِيٌّ جِدّاً.',
          en: 'that his son was truly rich!',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'that, indeed' },
            { surface: 'ابْنَهُ', lemma: 'اِبْن', pos: 'noun', features: 'acc+3ms', gloss: 'his son' },
            { surface: 'غَنِيٌّ', lemma: 'غَنِيّ', pos: 'adj', features: 'indef.nom', gloss: 'rich' },
            { surface: 'جِدّاً', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', gloss: 'very' },
          ],
        },
        {
          id: 'qs-v5-c04-028',
          ar: 'وَلَكِنَّ اللَّهَ أَرَادَ غَيْرَ ذَلِكَ،',
          en: 'But Allah wanted something else,',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', root: 'ر و د', gloss: 'to want; wanted' },
            { surface: 'غَيْرَ', lemma: 'غَيْر', pos: 'noun', features: 'acc.constr', gloss: 'other than' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v5-c04-029',
          ar: 'إِنَّ اللَّهَ أَرَادَ أَنْ يُشَرِّفَهُ بِالنُّبُوَّةِ وَيُرْسِلَهُ إِلَى قَوْمِهِ،',
          en: 'Allah wanted to honor him with prophethood and send him to his people,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', root: 'ر و د', gloss: 'to want; wanted' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُشَرِّفَهُ', lemma: 'شَرَّفَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'ش ر ف', gloss: 'to honor, ennoble; honor him' },
            { surface: 'بِالنُّبُوَّةِ', lemma: 'نُبُوَّة', pos: 'noun', features: 'prep+def.gen', gloss: 'with prophethood' },
            { surface: 'وَيُرْسِلَهُ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'conj+impf.3ms+3ms', root: 'ر س ل', gloss: 'to send; and send him' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
          ],
        },
        {
          id: 'qs-v5-c04-030',
          ar: 'لِيُخْرِجَهُمْ مِنَ الظُّلُمَاتِ إِلَى النُّورِ.',
          en: 'to bring them out of darkness into light.',
          tokens: [
            { surface: 'لِيُخْرِجَهُمْ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'part+impf.3ms+3mp', root: 'خ ر ج', gloss: 'to bring out; so that he might bring them out' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, out of' },
            { surface: 'الظُّلُمَاتِ', lemma: 'ظُلْمَة', pos: 'noun', features: 'pl.def.gen', root: 'ظ ل م', gloss: 'the darkness' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'النُّورِ', lemma: 'نُور', pos: 'noun', features: 'def.gen', gloss: 'the light' },
          ],
        },
        {
          id: 'qs-v5-c04-031',
          ar: 'وَهَلْ فَوْقَ ذَلِكَ شَرَفٌ؟',
          en: 'And is there any honor above that?',
          tokens: [
            { surface: 'وَهَلْ', lemma: 'هَلْ', pos: 'part', features: 'conj+part', gloss: 'and is there' },
            { surface: 'فَوْقَ', lemma: 'فَوْق', pos: 'adv', features: 'adv', gloss: 'above' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'شَرَفٌ', lemma: 'شَرَف', pos: 'noun', features: 'indef.nom', gloss: 'honor' },
          ],
        },
        {
          id: 'qs-v5-c04-032',
          ar: 'وَهَلْ فَوْقَ ذَلِكَ كَرَامَةٌ؟',
          en: 'Is there any dignity above that?',
          tokens: [
            { surface: 'وَهَلْ', lemma: 'هَلْ', pos: 'part', features: 'conj+part', gloss: 'and is there' },
            { surface: 'فَوْقَ', lemma: 'فَوْق', pos: 'adv', features: 'adv', gloss: 'above' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'كَرَامَةٌ', lemma: 'كَرَامَة', pos: 'noun', features: 'indef.nom', root: 'ك ر م', gloss: 'dignity' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ كَانَ صَالِحٌ؟',
          options: ['رَجُلٌ نَجِيبٌ رَشِيدٌ نَشَأَ عَلَى عَقْلٍ وَصَلَاحٍ', 'مَلِكٌ مِنْ مُلُوكِ ثَمُودَ', 'تَاجِرٌ غَنِيٌّ مِنْ عَادٍ'],
          answer: 0,
          qEn: 'Who was Ṣāliḥ?',
          optionsEn: ['An outstanding, right-minded man who grew up with intellect and righteousness', 'A king among the kings of Thamūd', 'A wealthy merchant from ʿĀd'],
        },
        {
          q: 'مَاذَا كَانَ يَرَى أَبُو صَالِحٍ؟',
          options: ['أَنَّ ابْنَهُ يَكْسِبُ مَالاً عَظِيماً وَيَخْرُجُ فِي النَّاسِ', 'أَنَّ ابْنَهُ سَيَكُونُ فَقِيراً', 'أَنَّ ابْنَهُ سَيُسَافِرُ إِلَى أَرْضٍ بَعِيدَةٍ'],
          answer: 0,
          qEn: "What did Ṣāliḥ's father think?",
          optionsEn: ['That his son would earn great wealth and go about among the people', 'That his son would become poor', 'That his son would travel to a distant land'],
        },
        {
          q: 'مَاذَا أَرَادَ اللَّهُ أَنْ يَفْعَلَ بِصَالِحٍ؟',
          options: ['أَنْ يُشَرِّفَهُ بِالنُّبُوَّةِ وَيُرْسِلَهُ إِلَى قَوْمِهِ', 'أَنْ يَجْعَلَهُ مَلِكاً عَلَى ثَمُودَ', 'أَنْ يُعْطِيَهُ قَصْراً وَبُسْتَاناً كَبِيراً'],
          answer: 0,
          qEn: 'What did Allah want to do with Ṣāliḥ?',
          optionsEn: ['Honor him with prophethood and send him to his people', 'Make him king over Thamūd', 'Give him a palace and a great orchard'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ',
        post: 'نَجِيباً جِدّاً.',
        en: 'He was a truly outstanding boy.',
        options: ['وَلَداً', 'وَلَدٌ', 'وَلَدٍ', 'أَوْلَاد'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- predicate of كَانَ.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural -- wrong number; a single boy is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَنَشَأَ عَلَى عَقْلٍ وَ',
        post: '.',
        en: 'And he grew up with intellect and righteousness.',
        options: ['صَلَاحٍ', 'صَلَاحٌ', 'صَلَاحاً', 'صَلَاح'],
        answer: 0,
        rationales: [
          'Genitive, indefinite -- conjoined with عَقْلٍ after عَلَى, which governs the genitive.',
          'Nominative -- wrong case; nothing here governs the nominative.',
          'Accusative -- wrong case; عَلَى governs the genitive, not the accusative.',
          'No case ending shown -- this position needs a fully inflected noun.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنَّ اللَّهَ لَا يَرْضَى لِعِبَادِهِ',
        post: '.',
        en: 'Indeed, Allah does not accept disbelief for His servants.',
        options: ['الْكُفْرَ', 'الْكُفْرُ', 'الْكُفْرِ', 'كُفْراً'],
        answer: 0,
        rationales: [
          'Definite, accusative -- direct object of يَرْضَى.',
          'Nominative -- wrong case for a direct object.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Indefinite -- wrong definiteness; the text has الْكُفْرَ with the definite article.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخْرُجُ الرَّجُلُ عَلَى فَرَسٍ',
        pre: '',
        post: 'عَلَى فَرَسٍ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَخْرُجُ', 'يَخْرُجُ', 'تَخْرُجُ', 'نَخْرُجُ'],
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
        base: 'يَخْرُجُ الرَّجُلُ عَلَى فَرَسٍ',
        pre: '',
        post: 'عَلَى فَرَسٍ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَخْرُجُ', 'يَخْرُجُ', 'أَخْرُجُ', 'نَخْرُجُ'],
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
        base: 'يَخْرُجُ الرَّجُلُ عَلَى فَرَسٍ',
        pre: '',
        post: 'عَلَى فَرَسٍ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَخْرُجُونَ', 'يَخْرُجُ', 'تَخْرُجُ', 'نَخْرُجُ'],
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

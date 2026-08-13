// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 6 -- ٦ - خَمْسُ آيَاتٍ ("Five Signs"). Starts at the
// chapter-6 heading box on page 174 (which follows the tail end of chapter
// 4's own text and its closing Qur'anic quote, ﴿وَقَالُوا مَهْمَا تَأْتِنَا بِهِ
// مِنْ ءَايَةٍ...﴾ Al-Aʿrāf 7:132 -- not part of this chapter), continues
// through page 175 and page 176, and ends at page 176's last line, "فَلَما
// كَشَفَ اللَّهُ عَنْهُمُ الْبَلاَءَ نَكَثُوا عَهْدَهُمْ ." -- page 177 opens with a
// further Qur'anic quote (Al-Aʿrāf 7:133, naming all five signs together)
// and then the chapter-7 heading, neither belonging here. Transcribed by
// hand from the scan (vision OCR) against ../CHAPTER-FORMAT.md and
// QASAS_AGENT_BRIEF.md. No corrections applied to the raw transcript for
// this chapter.
//
// This chapter has no embedded Qur'anic quotations at all -- unusual for
// this corpus, but correct: pages 174-176 are the narrator Nadwī's own
// prose recounting the five plagues (flood, locusts, lice, frogs, blood),
// with the summary Qur'anic ayah naming all five only arriving on page 177
// (outside this chapter, belonging to chapter 7's own opening).
//
// Segmentation note: several source lines carry commas that merely list
// coordinated objects/predicates within a single clause rather than
// marking a clause boundary (e.g. qs-v7-c06-012's three coordinated
// objects of عَلِمَ); these are kept as one sentence rather than fragmented,
// per CHAPTER-FORMAT.md's "roughly" latitude on where to split. Commas
// that separate genuinely independent clauses (their own subject+verb, or
// complete nominal predications) are split, including several short
// parallel nominal clauses Nadwī uses for rhetorical repetition (the
// "الْقَمَّلُ فِي X" run at qs-v7-c06-019/020/021/022, and the "فِي X ضَفَادِعُ"
// run at qs-v7-c06-028/029/030).
//
// `workshop.cloze`/`workshop.shift` are built from this chapter's own
// recycled patterns, per the task brief's explicit pointer: the عَجِزَ/
// عَجِزَتْ ("was powerless") thread continues from chapter 5 into this one
// (qs-v7-c06-010, -035 x2, -039 -- four more instances), and the وَبَعَثَ
// اللَّهُ عَلَيْهِمْ ("Allah sent upon them...") frame that introduces each
// plague (qs-v7-c06-001, -015, -027, -036) supplies the cloze material.
// Neither drill draws on any Qur'anic material (there is none in this
// chapter to draw on regardless).
//
// Grammar / lexical notes:
//   -- عَجْزَ (qs-v7-c06-012, "the incapacity of", a coordinated object
//      alongside ضَعْفَ) is tagged as its own new nominal lemma رather than
//      folding into the freshly-taught verb عَجِزَ (introduced chapter 5) --
//      following this volume's own established precedent (ch1's نِعْمَة
//      tagged new despite أَنْعَمَ being known) of treating a verb and its
//      verbal noun as separate lemma decisions.
//   -- ضَعْفَ (qs-v7-c06-012) and ضَعُفُوا (qs-v7-c06-038), by contrast, are
//      both treated as already known: the lexicon export lists "ضعف"
//      against three separate qiraah-v2 chapters (34, 39, 60), suggesting
//      the root's noun/verb/adjective forms were already taught broadly
//      across that span, unlike عَجِزَ/عَجْز which have no precedent at all.
//   -- تُولَدُ (qs-v7-c06-020, "is being born") reuses the already-taught
//      verb lemma وَلَدَ (qiraah-v2 ch37/39) rather than the already-taught
//      but distinct noun lemma وَلَد ("child, offspring") -- different POS,
//      same root, kept apart per this corpus's consistent practice.
//   -- عَهْدَهُمْ (qs-v7-c06-041, "their covenant") reuses the lemma عَهْد
//      introduced in this volume's own chapter 5 with the "era, time"
//      sense -- one lemma, its second sense ("covenant, pact") carried by
//      this token's own gloss, as flagged in chapter 5's header.
//   -- هَامَانَ (qs-v7-c06-012) and بَنِي إِسْرَائِيلَ (qs-v7-c06-040) both
//      reuse the lemmas introduced in this volume's own chapter 5.
//   -- تِلْكَ (qs-v7-c06-033) is treated as an already-known bedrock
//      demonstrative, on the same reasoning as هَذَا/هَذِهِ/ذَلِكَ flagged in
//      this volume's ch1 header (a lexicon.txt export gap, not genuinely
//      new vocabulary) -- not added to newWords.
//
// Shared lexicon check (grepped against the supplied lexicon.txt export,
// plus this volume's own chapters 1, 2, and 5):
// بَعَثَ (qasas-v7 ch1)، اللَّه، آيَة (qasas-v2 ch4)، آخَر (qasas-v1 ch10)،
// أَرْسَلَ (qasas-v1 ch14)، مَطَر (qasas-v2 ch9)، فَاضَ (qiraah-v1 ch26)، نِيل
// (qasas-v7 ch5)، أَمْطَرَ (qasas-v3 ch19)، سَمَاء (qasas-v2 ch11)، حَتَّى
// (qasas-v2 ch19)، غَرِقَ (qasas-v3 ch22)، زَرْع (qasas-v7 ch5)، حَقْل
// (qiraah-v2 ch46)، حَبَّة (qيراah-v2 ch33)، ثَمَر (qasas-v7 ch5)، عَادَ
// (qasas-v1 ch14)، هُوَ، شَكَا (qasas-v2 ch8)، قِلَّة (qiraah-v2 ch36)،
// مَاء (qasas-v1 ch12)، كَثْرَة (qasas-v2 ch23)، ثُمَّ (bedrock)، أَكَلَ
// (qasas-v1 ch2)، وَقَعَ (qasas-v2 ch24)، شَجَرَة (qيراah-v2 ch59)، لَا،
// شَيْء، جُنْد (qasas-v7 ch1)، فِرْعَوْن (qasas-v7 ch1)، شُرْطَة (qasas-v7
// ch5)، عَنْ (bedrock)، قَاتَلَ (qيراah-v2 ch38)، قِتَال (qيراah-v1 ch30)،
// عَمِلَ (qيراah-v2 ch40)، سَيْف (qيراah-v2 ch66)، سَهْم (qيراah-v2 ch45)،
// هُنَالِكَ (qيراah-v2 ch40)، عَلِمَ (qasas-v1 ch5)، أَهْل (qasas-v2 ch9)، مِصْر
// (qasas-v2 ch7)، هَامَان (qasas-v7 ch5)، حِيلَة (qيراah-v2 ch56)، لَكِنَّ
// (qasas-v1 ch6/14)، لَمْ (qasas-v2 ch4)، تَنَبَّهَ (qasas-v3 ch21)، جُنْداً
// (qasas-v7 ch1)، ذَلِكَ (bedrock)، عِيَاذ (qasas-v3 ch19)، بِ، فِرَاش
// (qasas-v2 ch6)، فِي، ثَوْب (qيراah-v1 ch26)، رَأْس (qasas-v2 ch9)، طَارَ
// (qيراah-v2 ch36)، نَوْم (qيراah-v2 ch36)، حَتَّى، أَنْجَدَ (qيراah-v2 ch50)،
// طَعَام (qasas-v1 ch2)، شَرَاب (qasas-v1 ch3)، مَلابِس (qيراah-v2 ch37)،
// سَئِمَ (qيراah-v1 ch26)، هَذِهِ (bedrock)، اِنْتَشَرَ (qasas-v3 ch1)، جَمِيع
// (qasas-v2 ch1)، نَاحِيَة (qيراah-v1 ch28)، بَيْت (qيراah-v2 ch38)، وَثَبَ
// (qيراah-v2 ch47)، هُنَا (qasas-v1 ch11)، هُنَاكَ (bedrock)، قَفَزَ (qيراah-v2
// ch71)، يَقْتُلُونَ<-قَتَلَ (qasas-v1 ch10)، وَاحِد (qasas-v2 ch11)، إِلَّا
// (qasas-v1 ch10)، أَتَى (qasas-v7 ch1)، عَشَرَة (qيراah-v2 ch36)، أَخْرَجَ
// (qasas-v2 ch7)، ظَهَرَ (qasas-v2 ch23)، خَمْس (qيراah-v1 ch30)، وَلَدَ
// (qيراah-v2 ch37)، كَأَنَّ (bedrock)، حَارِس<-new (see newWords)، خَامِس
// (qيراah-v2 ch39)، دَم (qasas-v2 ch4)، سَالَ (qيراah-v1 ch26)، أَنْف
// (qيراah-v2 ch57)، ضَعُفَ/ضَعْف (qيراah-v2 ch34/39/60 -- see note above)،
// تَعِبَ (qيراah-v2 ch34)، طَبِيب (qيراah-v2 ch34)، نَفَعَ (qasas-v1 ch2)،
// رَأَى (qasas-v1 ch2)، قَالَ، دَعَا (qasas-v1 ch8)، لِ، رَبّ (qasas-v1 ch7)،
// أَنْ، كَشَفَ (qيراah-v2 ch66)، بَلاَء (qيراah-v2 ch48)، تَابَ (qasas-v3
// ch8)، آمَنَ (qasas-v3 ch14)، مَعَ (bedrock)، اِبْن (qasas-v1 ch14)،
// إِسْرَائِيل (qasas-v7 ch5)، لَمَّا (qasas-v1 ch7)، عَهْد (qasas-v7 ch5)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 25 new words (تَلِفَ، وَبَال، بَيْنَمَا، جَرَاد، وَذَرَ، اِعْتَبَرَ، قَمَّل، تَسَلَّطَ،
// شَعْر، بَاتَ، قَصَعَ، سَبَّ، أَصْبَحَ، ضِفْدَع، تَنَغَّصَ، عَيْش، فَشَا، نَقَّ، حَارِس،
// رُعَاف، عِلاَج، دَوَاء، كُلَّمَا، نَكَثَ، عَجْز).
//
// Two page footnotes (book_note), both glossing rare verbs with the
// author's own one-line Arabic definitions: page 175 on يَقْصَعُونَ
// ("قصع القملة بظفره: قتلها") and page 176 on تَنِقُّ ("تصوت").
export const CHAPTER = {
  id: 'ch6',
  title: { ar: 'خَمْسُ آيَاتٍ', en: 'Five Signs' },
  newWords: [
    'تَلِفَ', 'وَبَال', 'بَيْنَمَا', 'جَرَاد', 'وَذَرَ', 'اِعْتَبَرَ', 'قَمَّل', 'تَسَلَّطَ',
    'شَعْر', 'بَاتَ', 'قَصَعَ', 'سَبَّ', 'أَصْبَحَ', 'ضِفْدَع', 'تَنَغَّصَ', 'عَيْش',
    'فَشَا', 'نَقَّ', 'حَارِس', 'رُعَاف', 'عِلاَج', 'دَوَاء', 'كُلَّمَا', 'نَكَثَ', 'عَجْز',
  ],
  lemmas: {
    'تَلِفَ': { gloss: 'to spoil, be ruined' },
    'وَبَال': { gloss: 'calamity, harmful consequence' },
    'بَيْنَمَا': { gloss: 'while, whereas' },
    'جَرَاد': { gloss: 'locusts' },
    'وَذَرَ': { gloss: 'to leave, let be' },
    'اِعْتَبَرَ': { gloss: 'to take heed, learn a lesson' },
    'قَمَّل': { gloss: 'lice' },
    'تَسَلَّطَ': { gloss: 'to dominate, take control (over)' },
    'شَعْر': { gloss: 'hair' },
    'بَاتَ': { gloss: 'to spend the night (doing something)' },
    'قَصَعَ': { gloss: 'to crush (e.g. a louse) with the fingernail', book_note: 'قصع القملة بظفره: قتلها.' },
    'سَبَّ': { gloss: 'to curse, revile' },
    'أَصْبَحَ': { gloss: 'to become; to reach morning' },
    'ضِفْدَع': { gloss: 'frog' },
    'تَنَغَّصَ': { gloss: 'to become troubled, spoiled' },
    'عَيْش': { gloss: 'life, livelihood' },
    'فَشَا': { gloss: 'to spread, become widespread' },
    'نَقَّ': { gloss: 'to croak', book_note: 'تصوت.' },
    'حَارِس': { gloss: 'guard' },
    'رُعَاف': { gloss: 'nosebleed' },
    'عِلاَج': { gloss: 'treatment, cure' },
    'دَوَاء': { gloss: 'medicine' },
    'كُلَّمَا': { gloss: 'whenever' },
    'نَكَثَ': { gloss: 'to break (a covenant, an oath)' },
    'عَجْز': { gloss: 'incapacity, powerlessness' },
  },
  paragraphs: [
    {
      en: "Then Allah sent upon them another sign. He sent the rains upon them, and the Nile overflowed. The sky rained, and rained, and rained, and rained, and rained, until the crops and the fields were flooded, and the grain and the fruits were ruined. The rain turned into a calamity for them. While they were complaining of the scarcity of water, suddenly they were complaining of its abundance! Then He sent upon them the locusts, devouring the crops and the fields and swarming upon the trees, leaving nothing of them behind.",
      sentences: [
        {
          id: 'qs-v7-c06-001',
          ar: 'وَبَعَثَ اللَّهُ عَلَيْهِمْ آيَةً أُخْرَى.',
          en: 'Then Allah sent upon them another sign.',
          tokens: [
            { surface: 'وَبَعَثَ', lemma: 'بَعَثَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to send, raise up; and sent' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'آيَةً', lemma: 'آيَة', pos: 'noun', features: 'indef.acc', gloss: 'a sign' },
            { surface: 'أُخْرَى', lemma: 'آخَر', pos: 'adj', features: 'indef.acc.f', gloss: 'another' },
          ],
        },
        {
          id: 'qs-v7-c06-002',
          ar: 'أَرْسَلَ عَلَيْهِمُ الأَمْطَارَ،',
          en: 'He sent the rains upon them,',
          tokens: [
            { surface: 'أَرْسَلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to send; sent' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'الأَمْطَارَ', lemma: 'مَطَر', pos: 'noun', features: 'pl.def.acc', gloss: 'the rains' },
          ],
        },
        {
          id: 'qs-v7-c06-003',
          ar: 'فَفَاضَ النِّيلُ.',
          en: 'and the Nile overflowed.',
          tokens: [
            { surface: 'فَفَاضَ', lemma: 'فَاضَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to overflow; so overflowed' },
            { surface: 'النِّيلُ', lemma: 'نِيل', pos: 'proper', features: 'def.nom', gloss: 'the Nile' },
          ],
        },
        {
          id: 'qs-v7-c06-004',
          ar: 'وَأَمْطَرَتِ السَّمَاءُ وَأَمْطَرَتْ وَأَمْطَرَتْ وَأَمْطَرَتْ وَأَمْطَرَتْ.',
          en: 'The sky rained, and rained, and rained, and rained, and rained.',
          tokens: [
            { surface: 'وَأَمْطَرَتِ', lemma: 'أَمْطَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to rain; and rained' },
            { surface: 'السَّمَاءُ', lemma: 'سَمَاء', pos: 'noun', features: 'def.nom', gloss: 'the sky' },
            { surface: 'وَأَمْطَرَتْ', lemma: 'أَمْطَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and rained' },
            { surface: 'وَأَمْطَرَتْ', lemma: 'أَمْطَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and rained' },
            { surface: 'وَأَمْطَرَتْ', lemma: 'أَمْطَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and rained' },
            { surface: 'وَأَمْطَرَتْ', lemma: 'أَمْطَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and rained' },
          ],
        },
        {
          id: 'qs-v7-c06-005',
          ar: 'حَتَّى غَرِقَتِ الزُّرُوعُ وَالْحُقُولُ،',
          en: 'until the crops and the fields were flooded,',
          tokens: [
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'until' },
            { surface: 'غَرِقَتِ', lemma: 'غَرِقَ', pos: 'verb', features: 'perf.3fs', gloss: 'to drown, be flooded; were flooded' },
            { surface: 'الزُّرُوعُ', lemma: 'زَرْع', pos: 'noun', features: 'pl.def.nom', gloss: 'the crops' },
            { surface: 'وَالْحُقُولُ', lemma: 'حَقْل', pos: 'noun', features: 'conj+pl.def.nom', gloss: 'and the fields' },
          ],
        },
        {
          id: 'qs-v7-c06-006',
          ar: 'وَتَلِفَتِ الْحُبُوبُ وَالثِّمَارُ.',
          en: 'and the grain and the fruits were ruined.',
          tokens: [
            { surface: 'وَتَلِفَتِ', lemma: 'تَلِفَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to spoil, be ruined; and were ruined' },
            { surface: 'الْحُبُوبُ', lemma: 'حَبَّة', pos: 'noun', features: 'pl.def.nom', gloss: 'the grain' },
            { surface: 'وَالثِّمَارُ', lemma: 'ثَمَر', pos: 'noun', features: 'conj+pl.def.nom', gloss: 'and the fruits' },
          ],
        },
        {
          id: 'qs-v7-c06-007',
          ar: 'وَعَادَ الْمَطَرُ عَلَيْهِمْ وَبَالاً.',
          en: 'The rain turned into a calamity for them.',
          tokens: [
            { surface: 'وَعَادَ', lemma: 'عَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to become, turn into; and became' },
            { surface: 'الْمَطَرُ', lemma: 'مَطَر', pos: 'noun', features: 'def.nom', gloss: 'the rain' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'وَبَالاً', lemma: 'وَبَال', pos: 'noun', features: 'indef.acc', gloss: 'a calamity' },
          ],
        },
        {
          id: 'qs-v7-c06-008',
          ar: 'وَبَيْنَمَا هُمْ يَشْكُونَ قِلَّةَ الْمَاءِ إِذَا هُمْ يَشْكُونَ كَثْرَةَ الْمِيَاهِ.',
          en: 'While they were complaining of the scarcity of water, suddenly they were complaining of its abundance!',
          tokens: [
            { surface: 'وَبَيْنَمَا', lemma: 'بَيْنَمَا', pos: 'conj', features: 'conj+conj', gloss: 'and while' },
            { surface: 'هُمْ', lemma: 'هُمْ', pos: 'noun', features: '3mp', gloss: 'they' },
            { surface: 'يَشْكُونَ', lemma: 'شَكَا', pos: 'verb', features: 'impf.3mp', gloss: 'to complain; complaining' },
            { surface: 'قِلَّةَ', lemma: 'قِلَّة', pos: 'noun', features: 'acc.constr', gloss: 'the scarcity of' },
            { surface: 'الْمَاءِ', lemma: 'مَاء', pos: 'noun', features: 'def.gen', gloss: 'water' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'when suddenly, behold' },
            { surface: 'هُمْ', lemma: 'هُمْ', pos: 'noun', features: '3mp', gloss: 'they' },
            { surface: 'يَشْكُونَ', lemma: 'شَكَا', pos: 'verb', features: 'impf.3mp', gloss: 'to complain; complaining' },
            { surface: 'كَثْرَةَ', lemma: 'كَثْرَة', pos: 'noun', features: 'acc.constr', gloss: 'the abundance of' },
            { surface: 'الْمِيَاهِ', lemma: 'مَاء', pos: 'noun', features: 'pl.def.gen', gloss: 'the waters' },
          ],
        },
        {
          id: 'qs-v7-c06-009',
          ar: 'ثُمَّ أَرْسَلَ عَلَيْهِمُ الْجَرَادَ يَأْكُلُ الزُّرُوعَ وَالْحُقُولَ وَيَقَعُ عَلَى الأَشْجَارِ فَلا يَذَرُ مِنْهَا شَيْئاً.',
          en: 'Then He sent upon them the locusts, devouring the crops and the fields and swarming upon the trees, leaving nothing of them behind.',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'أَرْسَلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to send; sent' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'الْجَرَادَ', lemma: 'جَرَاد', pos: 'noun', features: 'def.acc', gloss: 'the locusts' },
            { surface: 'يَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to eat; devouring' },
            { surface: 'الزُّرُوعَ', lemma: 'زَرْع', pos: 'noun', features: 'pl.acc', gloss: 'the crops' },
            { surface: 'وَالْحُقُولَ', lemma: 'حَقْل', pos: 'noun', features: 'conj+pl.acc', gloss: 'and the fields' },
            { surface: 'وَيَقَعُ', lemma: 'وَقَعَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to fall, land; and swarming' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'الأَشْجَارِ', lemma: 'شَجَرَة', pos: 'noun', features: 'pl.def.gen', gloss: 'the trees' },
            { surface: 'فَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَذَرُ', lemma: 'وَذَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to leave, let be; leaving' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'of them' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ عِنْدَمَا أَرْسَلَ اللَّهُ الأَمْطَارَ عَلَى فِرْعَوْنَ وَقَوْمِهِ؟',
          options: ['فَاضَ النِّيلُ وَغَرِقَتِ الزُّرُوعُ وَالْحُقُولُ', 'جَفَّتِ الأَرْضُ تَمَاماً', 'لَمْ يَتَغَيَّرْ شَيْءٌ'],
          answer: 0,
          qEn: 'What happened when Allah sent the rains upon Pharaoh and his people?',
          optionsEn: ['The Nile overflowed, and the crops and fields were flooded', 'The land dried up completely', 'Nothing changed at all'],
        },
        {
          q: 'مَاذَا أَرْسَلَ اللَّهُ عَلَيْهِمْ بَعْدَ الأَمْطَارِ؟',
          options: ['الْجَرَادَ الَّذِي أَكَلَ الزُّرُوعَ وَالْحُقُولَ', 'الرِّيَاحَ الْبَارِدَةَ', 'الْحَيَّاتِ'],
          answer: 0,
          qEn: 'What did Allah send upon them after the rains?',
          optionsEn: ['The locusts, which ate the crops and the fields', 'Cold winds', 'Snakes'],
        },
      ],
    },
    {
      en: "Pharaoh's soldiers and his police were powerless to fight the army of Allah -- how could they fight it, when swords had no effect on it, and arrows had no effect on it? There the people of Egypt learned of Pharaoh's weakness, and Hāmān's incapacity, and the police's lack of any stratagem. But they did not take heed! They did not awaken! So Allah sent upon them another host: that was the lice. The lice took control over them -- God forbid! Lice in the bedding, lice in the clothes, lice in the head, lice in the hair. Their sleep vanished, and they spent their nights crushing the lice and cursing it, until morning came. How could they fight it -- swords had no effect on the lice, and arrows had no effect on it, and neither their soldiers nor their police could help them against it.",
      sentences: [
        {
          id: 'qs-v7-c06-010',
          ar: 'وَعَجِزَتْ جُنُودُ فِرْعَوْنَ وَشُرْطَتُهُ عَنْ قِتَالِ جُنْدِ اللَّهِ.',
          en: "Pharaoh's soldiers and his police were powerless to fight the army of Allah.",
          tokens: [
            { surface: 'وَعَجِزَتْ', lemma: 'عَجِزَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be powerless; and were powerless' },
            { surface: 'جُنُودُ', lemma: 'جُنْد', pos: 'noun', features: 'pl.nom.constr', gloss: 'the soldiers of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَشُرْطَتُهُ', lemma: 'شُرْطَة', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his police' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'قِتَالِ', lemma: 'قِتَال', pos: 'noun', features: 'constr.gen', gloss: 'the fighting of' },
            { surface: 'جُنْدِ', lemma: 'جُنْد', pos: 'noun', features: 'constr.gen', gloss: 'the army of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c06-011',
          ar: 'وَكَيْفَ يُقَاتِلُونَهُ وَلا تَعْمَلُ فِيهِ السُّيُوفُ وَلا تَعْمَلُ فِيهِ السِّهَامُ.',
          en: 'How could they fight it, when swords had no effect on it, and arrows had no effect on it?',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'conj+part', gloss: 'and how' },
            { surface: 'يُقَاتِلُونَهُ', lemma: 'قَاتَلَ', pos: 'verb', features: 'impf.3mp+3ms', gloss: 'to fight; would they fight it' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَعْمَلُ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.3fs', gloss: 'to work, have effect; have effect' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'on it' },
            { surface: 'السُّيُوفُ', lemma: 'سَيْف', pos: 'noun', features: 'pl.def.nom', gloss: 'the swords' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَعْمَلُ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.3fs', gloss: 'to work, have effect; have effect' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'on it' },
            { surface: 'السِّهَامُ', lemma: 'سَهْم', pos: 'noun', features: 'pl.def.nom', gloss: 'the arrows' },
          ],
        },
        {
          id: 'qs-v7-c06-012',
          ar: 'هُنَالِكَ عَلِمَ أَهْلُ مِصْرَ ضَعْفَ فِرْعَوْنَ، وَعَجْزَ هَامَانَ، وقِلَّةَ حِيلَةِ الشُّرْطَةِ.',
          en: "There the people of Egypt learned of Pharaoh's weakness, and Hāmān's incapacity, and the police's lack of any stratagem.",
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there, at that point' },
            { surface: 'عَلِمَ', lemma: 'عَلِمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to know; learned' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', gloss: 'the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'ضَعْفَ', lemma: 'ضَعْف', pos: 'noun', features: 'acc.constr', gloss: 'the weakness of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَعَجْزَ', lemma: 'عَجْز', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the incapacity of' },
            { surface: 'هَامَانَ', lemma: 'هَامَان', pos: 'proper', features: 'gen', gloss: 'Hāmān' },
            { surface: 'وقِلَّةَ', lemma: 'قِلَّة', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the paucity of' },
            { surface: 'حِيلَةِ', lemma: 'حِيلَة', pos: 'noun', features: 'constr.gen', gloss: 'the stratagem of' },
            { surface: 'الشُّرْطَةِ', lemma: 'شُرْطَة', pos: 'noun', features: 'def.gen', gloss: 'the police' },
          ],
        },
        {
          id: 'qs-v7-c06-013',
          ar: 'وَلكِنَّهُمْ لَمْ يَعْتَبِرُوا!',
          en: 'But they did not take heed!',
          tokens: [
            { surface: 'وَلكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْتَبِرُوا', lemma: 'اِعْتَبَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to take heed, learn a lesson; take heed' },
          ],
        },
        {
          id: 'qs-v7-c06-014',
          ar: 'وَلَكِنَّهُمْ لَمْ يَتَنَبَّهُوا!',
          en: 'They did not awaken!',
          tokens: [
            { surface: 'وَلَكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتَنَبَّهُوا', lemma: 'تَنَبَّهَ', pos: 'verb', features: 'impf.3mp', gloss: 'to take notice, awaken; take notice' },
          ],
        },
        {
          id: 'qs-v7-c06-015',
          ar: 'فَبَعَثَ اللَّهُ عَلَيْهِمْ جُنْداً آخَرَ،',
          en: 'So Allah sent upon them another host:',
          tokens: [
            { surface: 'فَبَعَثَ', lemma: 'بَعَثَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to send; so sent' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'جُنْداً', lemma: 'جُنْد', pos: 'noun', features: 'indef.acc', gloss: 'a host, troop' },
            { surface: 'آخَرَ', lemma: 'آخَر', pos: 'adj', features: 'indef.acc', gloss: 'other' },
          ],
        },
        {
          id: 'qs-v7-c06-016',
          ar: 'ذَلِكَ هُوَ الْقَمَّلُ.',
          en: 'that was the lice.',
          tokens: [
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he, it' },
            { surface: 'الْقَمَّلُ', lemma: 'قَمَّل', pos: 'noun', features: 'def.nom', gloss: 'the lice' },
          ],
        },
        {
          id: 'qs-v7-c06-017',
          ar: 'وَتَسَلَّطَ عَلَيْهِمُ الْقَمَّلُ،',
          en: 'The lice took control over them --',
          tokens: [
            { surface: 'وَتَسَلَّطَ', lemma: 'تَسَلَّطَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to dominate, take control; and took control' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'over them' },
            { surface: 'الْقَمَّلُ', lemma: 'قَمَّل', pos: 'noun', features: 'def.nom', gloss: 'the lice' },
          ],
        },
        {
          id: 'qs-v7-c06-018',
          ar: 'فالْعِيَاذُ بِاللَّهِ!',
          en: 'God forbid!',
          tokens: [
            { surface: 'فالْعِيَاذُ', lemma: 'عِيَاذ', pos: 'noun', features: 'conj+def.nom', gloss: 'refuge (idiom: God forbid!)' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
          ],
        },
        {
          id: 'qs-v7-c06-019',
          ar: 'الْقَمَّلُ في الْفِرَاشِ،',
          en: 'Lice in the bedding,',
          tokens: [
            { surface: 'الْقَمَّلُ', lemma: 'قَمَّل', pos: 'noun', features: 'def.nom', gloss: 'the lice' },
            { surface: 'في', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْفِرَاشِ', lemma: 'فِرَاش', pos: 'noun', features: 'def.gen', gloss: 'the bedding' },
          ],
        },
        {
          id: 'qs-v7-c06-020',
          ar: 'وَالْقَمَّلُ فِي الثِّيَابِ،',
          en: 'lice in the clothes,',
          tokens: [
            { surface: 'وَالْقَمَّلُ', lemma: 'قَمَّل', pos: 'noun', features: 'conj+def.nom', gloss: 'and the lice' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الثِّيَابِ', lemma: 'ثَوْب', pos: 'noun', features: 'pl.def.gen', gloss: 'the clothes' },
          ],
        },
        {
          id: 'qs-v7-c06-021',
          ar: 'والْقَمَّلُ فِي الرَّأْسِ،',
          en: 'lice in the head,',
          tokens: [
            { surface: 'والْقَمَّلُ', lemma: 'قَمَّل', pos: 'noun', features: 'conj+def.nom', gloss: 'and the lice' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الرَّأْسِ', lemma: 'رَأْس', pos: 'noun', features: 'def.gen', gloss: 'the head' },
          ],
        },
        {
          id: 'qs-v7-c06-022',
          ar: 'وَالْقَمَّلُ فِي الشَّعْرِ.',
          en: 'lice in the hair.',
          tokens: [
            { surface: 'وَالْقَمَّلُ', lemma: 'قَمَّل', pos: 'noun', features: 'conj+def.nom', gloss: 'and the lice' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الشَّعْرِ', lemma: 'شَعْر', pos: 'noun', features: 'def.gen', gloss: 'the hair' },
          ],
        },
        {
          id: 'qs-v7-c06-023',
          ar: 'فَطَارَ نَوْمُهُمْ وَبَاتُوا يَقْصَعُونَ الْقَمَّلَ وَيَسُبُّونَهُ،',
          en: 'Their sleep vanished, and they spent their nights crushing the lice and cursing it,',
          tokens: [
            { surface: 'فَطَارَ', lemma: 'طَارَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to fly; and flew away, vanished' },
            { surface: 'نَوْمُهُمْ', lemma: 'نَوْم', pos: 'noun', features: 'nom+3mp', gloss: 'their sleep' },
            { surface: 'وَبَاتُوا', lemma: 'بَاتَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to spend the night (doing); and they spent the night' },
            { surface: 'يَقْصَعُونَ', lemma: 'قَصَعَ', pos: 'verb', features: 'impf.3mp', gloss: 'to crush (with the fingernail); crushing' },
            { surface: 'الْقَمَّلَ', lemma: 'قَمَّل', pos: 'noun', features: 'def.acc', gloss: 'the lice' },
            { surface: 'وَيَسُبُّونَهُ', lemma: 'سَبَّ', pos: 'verb', features: 'conj+impf.3mp+3ms', gloss: 'to curse, revile; and cursing it' },
          ],
        },
        {
          id: 'qs-v7-c06-024',
          ar: 'حَتَّى يُصْبِحُوا.',
          en: 'until morning came.',
          tokens: [
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'until' },
            { surface: 'يُصْبِحُوا', lemma: 'أَصْبَحَ', pos: 'verb', features: 'impf.3mp', gloss: 'to become, reach morning; they reached morning' },
          ],
        },
        {
          id: 'qs-v7-c06-025',
          ar: 'وَكَيْفَ يُقَاتِلُونَهُ وَالْقَمَّلُ لا تَعْمَلُ فِيهِ السُّيُوفُ وَلا تَعْمَلُ فِيهِ السِّهَامُ،',
          en: 'How could they fight it -- swords had no effect on the lice, and arrows had no effect on it,',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'conj+part', gloss: 'and how' },
            { surface: 'يُقَاتِلُونَهُ', lemma: 'قَاتَلَ', pos: 'verb', features: 'impf.3mp+3ms', gloss: 'to fight; would they fight it' },
            { surface: 'وَالْقَمَّلُ', lemma: 'قَمَّل', pos: 'noun', features: 'conj+def.nom', gloss: 'when the lice' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَعْمَلُ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.3fs', gloss: 'to work, have effect; have effect' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'on it' },
            { surface: 'السُّيُوفُ', lemma: 'سَيْف', pos: 'noun', features: 'pl.def.nom', gloss: 'the swords' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَعْمَلُ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.3fs', gloss: 'to work, have effect; have effect' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'on it' },
            { surface: 'السِّهَامُ', lemma: 'سَهْم', pos: 'noun', features: 'pl.def.nom', gloss: 'the arrows' },
          ],
        },
        {
          id: 'qs-v7-c06-026',
          ar: 'ولا يُنْجِدُهُمْ في ذلِكَ جُنُودُهُمْ وَشُرْطَتُهُمْ.',
          en: 'and neither their soldiers nor their police could help them against it.',
          tokens: [
            { surface: 'ولا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُنْجِدُهُمْ', lemma: 'أَنْجَدَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to aid, help; avail them' },
            { surface: 'في', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ذلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that, this matter' },
            { surface: 'جُنُودُهُمْ', lemma: 'جُنْد', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their soldiers' },
            { surface: 'وَشُرْطَتُهُمْ', lemma: 'شُرْطَة', pos: 'noun', features: 'conj+nom+3mp', gloss: 'and their police' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا عَجَزَ جُنُودُ فِرْعَوْنَ عَنْ قِتَالِ الْقَمَّلِ؟',
          options: ['لِأَنَّ السُّيُوفَ وَالسِّهَامَ لا تَعْمَلُ فِيهِ', 'لِأَنَّهُمْ هَرَبُوا مِنَ الْمَعْرَكَةِ', 'لِأَنَّهُمْ لَمْ يَرَوُا الْقَمَّلَ'],
          answer: 0,
          qEn: "Why were Pharaoh's soldiers powerless to fight the lice?",
          optionsEn: ['Because swords and arrows had no effect on it', 'Because they fled the battle', 'Because they never saw the lice'],
        },
        {
          q: 'أَيْنَ كَانَ الْقَمَّلُ يَنْتَشِرُ حَسَبَ النَّصِّ؟',
          options: ['فِي الْفِرَاشِ وَالثِّيَابِ وَالرَّأْسِ وَالشَّعْرِ', 'فِي السَّمَاءِ فَقَطْ', 'فِي مِيَاهِ النِّيلِ فَقَطْ'],
          answer: 0,
          qEn: 'Where did the lice spread, according to the text?',
          optionsEn: ['In the bedding, the clothes, the head, and the hair', 'In the sky only', 'In the waters of the Nile only'],
        },
      ],
    },
    {
      en: "Then Allah sent upon them the frogs: frogs in the food, frogs in the drink, frogs among their very clothes. They grew weary of these frogs, and their life became miserable. The frogs spread and multiplied through every corner of the house. This one croaks, and this one leaps here, and that one hops there. They could not kill one frog but ten would come, nor remove one but five more would appear, as though being born right there in the house. The guards were powerless, and the police were powerless, against the frogs.",
      sentences: [
        {
          id: 'qs-v7-c06-027',
          ar: 'ثُم بَعَثَ اللَّهُ عَلَيْهِمُ الضَّفَادِعَ،',
          en: 'Then Allah sent upon them the frogs:',
          tokens: [
            { surface: 'ثُم', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'بَعَثَ', lemma: 'بَعَثَ', pos: 'verb', features: 'perf.3ms', gloss: 'to send; sent' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'الضَّفَادِعَ', lemma: 'ضِفْدَع', pos: 'noun', features: 'pl.def.acc', gloss: 'the frogs' },
          ],
        },
        {
          id: 'qs-v7-c06-028',
          ar: 'فَفي الطَّعَامِ ضَفَادِعُ،',
          en: 'frogs in the food,',
          tokens: [
            { surface: 'فَفي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'then in' },
            { surface: 'الطَّعَامِ', lemma: 'طَعَام', pos: 'noun', features: 'def.gen', gloss: 'the food' },
            { surface: 'ضَفَادِعُ', lemma: 'ضِفْدَع', pos: 'noun', features: 'pl.indef.nom', gloss: 'frogs' },
          ],
        },
        {
          id: 'qs-v7-c06-029',
          ar: 'وفي الشَّرَابِ ضَفَادِعُ،',
          en: 'frogs in the drink,',
          tokens: [
            { surface: 'وفي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and in' },
            { surface: 'الشَّرَابِ', lemma: 'شَرَاب', pos: 'noun', features: 'def.gen', gloss: 'the drink' },
            { surface: 'ضَفَادِعُ', lemma: 'ضِفْدَع', pos: 'noun', features: 'pl.indef.nom', gloss: 'frogs' },
          ],
        },
        {
          id: 'qs-v7-c06-030',
          ar: 'وَبَيْنَ مَلابِسِهِمْ ضَفَادِعُ.',
          en: 'frogs among their very clothes.',
          tokens: [
            { surface: 'وَبَيْنَ', lemma: 'بَيْنَ', pos: 'noun', features: 'conj+acc', gloss: 'and among' },
            { surface: 'مَلابِسِهِمْ', lemma: 'مَلابِس', pos: 'noun', features: 'gen+3mp', gloss: 'their clothes' },
            { surface: 'ضَفَادِعُ', lemma: 'ضِفْدَع', pos: 'noun', features: 'pl.indef.nom', gloss: 'frogs' },
          ],
        },
        {
          id: 'qs-v7-c06-031',
          ar: 'وَسَئِمُوا هَذِهِ الضَّفَادِعَ وَتَنَغَّصَ عَيْشُهُمْ.',
          en: 'They grew weary of these frogs, and their life became miserable.',
          tokens: [
            { surface: 'وَسَئِمُوا', lemma: 'سَئِمَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to grow weary of; and grew weary of' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الضَّفَادِعَ', lemma: 'ضِفْدَع', pos: 'noun', features: 'pl.def.acc', gloss: 'the frogs' },
            { surface: 'وَتَنَغَّصَ', lemma: 'تَنَغَّصَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to become troubled, spoiled; and became troubled' },
            { surface: 'عَيْشُهُمْ', lemma: 'عَيْش', pos: 'noun', features: 'nom+3mp', gloss: 'their life' },
          ],
        },
        {
          id: 'qs-v7-c06-032',
          ar: 'وانْتَشَرَتِ الضَّفَادِعُ وَفَشَتْ في جَمِيعِ أَنْحَاءِ الْبَيْتِ.',
          en: 'The frogs spread and multiplied through every corner of the house.',
          tokens: [
            { surface: 'وانْتَشَرَتِ', lemma: 'اِنْتَشَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to spread; and spread' },
            { surface: 'الضَّفَادِعُ', lemma: 'ضِفْدَع', pos: 'noun', features: 'pl.def.nom', gloss: 'the frogs' },
            { surface: 'وَفَشَتْ', lemma: 'فَشَا', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to spread, become widespread; and became widespread' },
            { surface: 'في', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'جَمِيعِ', lemma: 'جَمِيع', pos: 'noun', features: 'constr.gen', gloss: 'all of' },
            { surface: 'أَنْحَاءِ', lemma: 'نَاحِيَة', pos: 'noun', features: 'pl.constr.gen', gloss: 'the parts of' },
            { surface: 'الْبَيْتِ', lemma: 'بَيْت', pos: 'noun', features: 'def.gen', gloss: 'the house' },
          ],
        },
        {
          id: 'qs-v7-c06-033',
          ar: 'تِلْكَ تَنِقُّ وَهَذِهِ تَثِبُ هُنَا وَتِلْكَ تَقْفِزُ هُنَاكَ.',
          en: 'This one croaks, and this one leaps here, and that one hops there.',
          tokens: [
            { surface: 'تِلْكَ', lemma: 'تِلْكَ', pos: 'dem', features: 'dem.f', gloss: 'that (one)' },
            { surface: 'تَنِقُّ', lemma: 'نَقَّ', pos: 'verb', features: 'impf.3fs', gloss: 'to croak; croaks' },
            { surface: 'وَهَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'conj+dem.f', gloss: 'and this (one)' },
            { surface: 'تَثِبُ', lemma: 'وَثَبَ', pos: 'verb', features: 'impf.3fs', gloss: 'to leap, jump; leaps' },
            { surface: 'هُنَا', lemma: 'هُنَا', pos: 'adv', features: 'adv', gloss: 'here' },
            { surface: 'وَتِلْكَ', lemma: 'تِلْكَ', pos: 'dem', features: 'conj+dem.f', gloss: 'and that (one)' },
            { surface: 'تَقْفِزُ', lemma: 'قَفَزَ', pos: 'verb', features: 'impf.3fs', gloss: 'to jump, hop; hops' },
            { surface: 'هُنَاكَ', lemma: 'هُنَاكَ', pos: 'adv', features: 'adv', gloss: 'there' },
          ],
        },
        {
          id: 'qs-v7-c06-034',
          ar: 'وَلا يَقْتُلُونَ وَاحِدَةً إِلَّا وَتَأْتِي عَشْرٌ وَلا يُخْرِجُونَ وَاحِدَةً إِلاَّ وَتَظْهَرُ خَمْسٌ تُولَدُ كَأَنَّهَا في الْبَيْتِ.',
          en: 'They could not kill one frog but ten would come, nor remove one but five more would appear, as though being born right there in the house.',
          tokens: [
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَقْتُلُونَ', lemma: 'قَتَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to kill; they kill' },
            { surface: 'وَاحِدَةً', lemma: 'وَاحِد', pos: 'num', features: 'indef.acc.f', gloss: 'one' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'but, except' },
            { surface: 'وَتَأْتِي', lemma: 'أَتَى', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to come; but there comes' },
            { surface: 'عَشْرٌ', lemma: 'عَشَرَة', pos: 'num', features: 'indef.nom', gloss: 'ten' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُخْرِجُونَ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'impf.3mp', gloss: 'to remove, take out; they remove' },
            { surface: 'وَاحِدَةً', lemma: 'وَاحِد', pos: 'num', features: 'indef.acc.f', gloss: 'one' },
            { surface: 'إِلاَّ', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'but, except' },
            { surface: 'وَتَظْهَرُ', lemma: 'ظَهَرَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to appear; but there appears' },
            { surface: 'خَمْسٌ', lemma: 'خَمْس', pos: 'num', features: 'indef.nom', gloss: 'five' },
            { surface: 'تُولَدُ', lemma: 'وَلَدَ', pos: 'verb', features: 'pass+impf.3fs', gloss: 'to be born; being born' },
            { surface: 'كَأَنَّهَا', lemma: 'كَأَنَّ', pos: 'part', features: 'part+3fs', gloss: 'as though it' },
            { surface: 'في', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبَيْتِ', lemma: 'بَيْت', pos: 'noun', features: 'def.gen', gloss: 'the house' },
          ],
        },
        {
          id: 'qs-v7-c06-035',
          ar: 'عَجِزَتِ الْحُرَّاسُ وَعَجِزَتِ الشُّرْطَةُ عَنِ الضَّفَادِعِ.',
          en: 'The guards were powerless, and the police were powerless, against the frogs.',
          tokens: [
            { surface: 'عَجِزَتِ', lemma: 'عَجِزَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be powerless; were powerless' },
            { surface: 'الْحُرَّاسُ', lemma: 'حَارِس', pos: 'noun', features: 'pl.def.nom', gloss: 'the guards' },
            { surface: 'وَعَجِزَتِ', lemma: 'عَجِزَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and were powerless' },
            { surface: 'الشُّرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'def.nom', gloss: 'the police' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'الضَّفَادِعِ', lemma: 'ضِفْدَع', pos: 'noun', features: 'pl.def.gen', gloss: 'the frogs' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيْنَ وُجِدَتِ الضَّفَادِعُ؟',
          options: ['فِي الطَّعَامِ وَالشَّرَابِ وَبَيْنَ الْمَلابِسِ', 'فِي السَّمَاءِ فَقَطْ', 'فِي الصَّحْرَاءِ الْبَعِيدَةِ'],
          answer: 0,
          qEn: 'Where were the frogs found?',
          optionsEn: ['In the food, the drink, and among their clothes', 'In the sky only', 'In a distant desert'],
        },
        {
          q: 'مَاذَا كَانَ يَحْدُثُ كُلَّمَا حَاوَلُوا التَّخَلُّصَ مِنَ الضَّفَادِعِ؟',
          options: ['كُلَّمَا قَتَلُوا وَاحِدَةً أَتَتْ عَشْرٌ، وَكُلَّمَا أَخْرَجُوا وَاحِدَةً ظَهَرَتْ خَمْسٌ', 'كَانَتِ الضَّفَادِعُ تَخْتَفِي فَوْراً', 'لَمْ يُحَاوِلُوا التَّخَلُّصَ مِنْهَا'],
          answer: 0,
          qEn: 'What happened whenever they tried to get rid of the frogs?',
          optionsEn: ['Whenever they killed one, ten came; whenever they removed one, five appeared', 'The frogs vanished at once', 'They never tried to get rid of them'],
        },
      ],
    },
    {
      en: "Then Allah sent upon them a fifth sign: that was the blood. Blood flowed from their very noses, and they grew weak and exhausted. The physicians were powerless against it, and no medicine helped them. Every time they saw a sign, they would say to Mūsā: pray to your Lord for us, that He remove this affliction from us, and we will repent, and believe, and send the Children of Israel with you. But whenever Allah removed the affliction from them, they broke their word.",
      sentences: [
        {
          id: 'qs-v7-c06-036',
          ar: 'وَبَعَثَ اللَّهُ عَلَيْهِمْ آيَةً خَامِسَةً،',
          en: 'Then Allah sent upon them a fifth sign:',
          tokens: [
            { surface: 'وَبَعَثَ', lemma: 'بَعَثَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to send; and sent' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'آيَةً', lemma: 'آيَة', pos: 'noun', features: 'indef.acc', gloss: 'a sign' },
            { surface: 'خَامِسَةً', lemma: 'خَامِس', pos: 'adj', features: 'indef.acc.f', gloss: 'fifth' },
          ],
        },
        {
          id: 'qs-v7-c06-037',
          ar: 'ذلِكَ هُوَ الدَّمُ.',
          en: 'that was the blood.',
          tokens: [
            { surface: 'ذلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he, it' },
            { surface: 'الدَّمُ', lemma: 'دَم', pos: 'noun', features: 'def.nom', gloss: 'the blood' },
          ],
        },
        {
          id: 'qs-v7-c06-038',
          ar: 'فَسَالَ الرُّعَافُ مِنْ آنَافِهِمْ وَضَعُفُوا وَتَعِبُوا جِدّاً.',
          en: 'Blood flowed from their very noses, and they grew weak and exhausted.',
          tokens: [
            { surface: 'فَسَالَ', lemma: 'سَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to flow; so flowed' },
            { surface: 'الرُّعَافُ', lemma: 'رُعَاف', pos: 'noun', features: 'def.nom', gloss: 'the nosebleed' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'آنَافِهِمْ', lemma: 'أَنْف', pos: 'noun', features: 'pl.gen+3mp', gloss: 'their noses' },
            { surface: 'وَضَعُفُوا', lemma: 'ضَعُفَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to become weak; and became weak' },
            { surface: 'وَتَعِبُوا', lemma: 'تَعِبَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to become tired; and grew tired' },
            { surface: 'جِدّاً', lemma: 'جِدّ', pos: 'noun', features: 'indef.acc', gloss: 'very much' },
          ],
        },
        {
          id: 'qs-v7-c06-039',
          ar: 'وَعَجِزَ الأَطِبَّاءُ عَنِ الْعِلاَجِ وَلَمْ يَنْفَعْهُمْ دَوَاءٌ.',
          en: 'The physicians were powerless against it, and no medicine helped them.',
          tokens: [
            { surface: 'وَعَجِزَ', lemma: 'عَجِزَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be powerless; and were powerless' },
            { surface: 'الأَطِبَّاءُ', lemma: 'طَبِيب', pos: 'noun', features: 'pl.def.nom', gloss: 'the physicians' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'الْعِلاَجِ', lemma: 'عِلاَج', pos: 'noun', features: 'def.gen', gloss: 'treatment' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَنْفَعْهُمْ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to benefit; did benefit them' },
            { surface: 'دَوَاءٌ', lemma: 'دَوَاء', pos: 'noun', features: 'indef.nom', gloss: 'a medicine' },
          ],
        },
        {
          id: 'qs-v7-c06-040',
          ar: 'وَكُلَّمَا رَأَوْا آيَةً قَالُوا لِمُوسى ادْعُ لَنَا رَبَّكَ أَنْ يَكْشِفَ عَنَّا الْبَلاَءَ وَنَتُوبُ وَنُؤْمِنُ وَنُرْسِلَ مَعَكَ بَنِي إِسْرَائِيلَ.',
          en: 'Every time they saw a sign, they would say to Mūsā: pray to your Lord for us, that He remove this affliction from us, and we will repent, and believe, and send the Children of Israel with you.',
          tokens: [
            { surface: 'وَكُلَّمَا', lemma: 'كُلَّمَا', pos: 'conj', features: 'conj+conj', gloss: 'and whenever' },
            { surface: 'رَأَوْا', lemma: 'رَأَى', pos: 'verb', features: 'perf.3mp', gloss: 'to see; they saw' },
            { surface: 'آيَةً', lemma: 'آيَة', pos: 'noun', features: 'indef.acc', gloss: 'a sign' },
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; they said' },
            { surface: 'لِمُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'prep+gen', gloss: 'to Mūsā' },
            { surface: 'ادْعُ', lemma: 'دَعَا', pos: 'verb', features: 'imp.2ms', gloss: 'to call, pray; pray!' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'رَبَّكَ', lemma: 'رَبّ', pos: 'noun', features: 'acc+2ms', gloss: 'your Lord' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَكْشِفَ', lemma: 'كَشَفَ', pos: 'verb', features: 'impf.3ms', gloss: 'to remove, uncover; remove' },
            { surface: 'عَنَّا', lemma: 'عَنْ', pos: 'prep', features: 'prep+1p', gloss: 'from us' },
            { surface: 'الْبَلاَءَ', lemma: 'بَلاَء', pos: 'noun', features: 'def.acc', gloss: 'the affliction' },
            { surface: 'وَنَتُوبُ', lemma: 'تَابَ', pos: 'verb', features: 'conj+impf.1p', gloss: 'to repent; and we will repent' },
            { surface: 'وَنُؤْمِنُ', lemma: 'آمَنَ', pos: 'verb', features: 'conj+impf.1p', gloss: 'to believe; and we will believe' },
            { surface: 'وَنُرْسِلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'conj+impf.1p', gloss: 'to send; and we will send' },
            { surface: 'مَعَكَ', lemma: 'مَعَ', pos: 'prep', features: 'prep+2ms', gloss: 'with you' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', gloss: 'the Children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
          ],
        },
        {
          id: 'qs-v7-c06-041',
          ar: 'فَلَما كَشَفَ اللَّهُ عَنْهُمُ الْبَلاَءَ نَكَثُوا عَهْدَهُمْ.',
          en: 'But whenever Allah removed the affliction from them, they broke their word.',
          tokens: [
            { surface: 'فَلَما', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'then when' },
            { surface: 'كَشَفَ', lemma: 'كَشَفَ', pos: 'verb', features: 'perf.3ms', gloss: 'to remove; removed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَنْهُمُ', lemma: 'عَنْ', pos: 'prep', features: 'prep+3mp', gloss: 'from them' },
            { surface: 'الْبَلاَءَ', lemma: 'بَلاَء', pos: 'noun', features: 'def.acc', gloss: 'the affliction' },
            { surface: 'نَكَثُوا', lemma: 'نَكَثَ', pos: 'verb', features: 'perf.3mp', gloss: 'to break (a covenant); they broke' },
            { surface: 'عَهْدَهُمْ', lemma: 'عَهْد', pos: 'noun', features: 'acc+3mp', gloss: 'their covenant' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَا الآيَةُ الْخَامِسَةُ الَّتِي بَعَثَهَا اللَّهُ عَلَيْهِمْ؟',
          options: ['الدَّمُ', 'الظَّلامُ', 'الرِّيحُ'],
          answer: 0,
          qEn: 'What was the fifth sign that Allah sent upon them?',
          optionsEn: ['Blood', 'Darkness', 'Wind'],
        },
        {
          q: 'مَاذَا كَانُوا يَعِدُونَ مُوسَى كُلَّمَا رَأَوْا آيَةً، وَمَاذَا فَعَلُوا بَعْدَ كَشْفِ الْبَلاَءِ؟',
          options: ['وَعَدُوا بِالتَّوْبَةِ وَالإِيمَانِ، وَلكِنَّهُمْ نَكَثُوا عَهْدَهُمْ', 'وَفَوْا بِوَعْدِهِمْ دَائِماً', 'لَمْ يَعِدُوا بِشَيْءٍ قَطُّ'],
          answer: 0,
          qEn: 'What did they promise Mūsā whenever they saw a sign, and what did they do after the affliction was removed?',
          optionsEn: ['They promised repentance and belief, but they broke their word', 'They always kept their promise', 'They never promised anything at all'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: 'اللَّهُ عَلَيْهِمْ آيَةً أُخْرَى.',
        en: 'Then Allah sent upon them another sign.',
        options: ['وَبَعَثَ', 'وَبَعَثَتْ', 'وَبَعَثُوا', 'وَبَعَثْتُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- agrees with اللَّهُ.',
          '3rd feminine singular -- wrong; اللَّه is treated as masculine.',
          '3rd masculine plural -- wrong; the subject is singular.',
          '1st singular -- wrong person entirely.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَبَعَثَ اللَّهُ عَلَيْهِمْ جُنْداً آخَرَ، ذَلِكَ هُوَ',
        post: '.',
        en: 'So Allah sent upon them another host: that was the lice.',
        options: ['الْقَمَّلُ', 'الْقَمَّلَ', 'الْقَمَّلِ', 'قَمَّلٌ'],
        answer: 0,
        rationales: [
          'Nominative, definite -- predicate of the equational sentence ذَلِكَ هُوَ ...',
          'Accusative -- wrong case; nothing here governs the accusative.',
          'Genitive -- wrong case; nothing governs the genitive here.',
          'Indefinite -- wrong; the referent is specific and definite.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'اللَّهُ عَلَيْهِمْ آيَةً خَامِسَةً، ذَلِكَ هُوَ الدَّمُ.',
        en: 'And Allah sent upon them a fifth sign: that was the blood.',
        options: ['بَعَثَ', 'بَعَثَتْ', 'بَعَثُوا', 'بَعَثْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- agrees with اللَّهُ.',
          '3rd feminine singular -- wrong gender.',
          '3rd masculine plural -- wrong number.',
          '1st plural -- wrong person.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'عَجِزَ فِرْعَوْنُ عَنْ قِتَالِ جُنْدِ اللَّهِ',
        pre: '',
        post: 'عَنْ قِتَالِ جُنْدِ اللَّهِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['عَجِزْتَ', 'عَجِزَ', 'عَجِزَتْ', 'عَجَزْنَا'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he, the form already given.',
          '3rd feminine singular -- she.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'عَجِزَ فِرْعَوْنُ عَنْ قِتَالِ جُنْدِ اللَّهِ',
        pre: '',
        post: 'عَنْ قِتَالِ جُنْدِ اللَّهِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['عَجَزْنَا', 'عَجِزَ', 'عَجِزْتَ', 'عَجِزُوا'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he.',
          '2nd masculine singular -- you.',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'عَجِزَ فِرْعَوْنُ عَنْ قِتَالِ جُنْدِ اللَّهِ',
        pre: '',
        post: 'عَنْ قِتَالِ جُنْدِ اللَّهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['عَجِزُوا', 'عَجِزَ', 'عَجِزْتَ', 'عَجَزْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

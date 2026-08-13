// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 1 -- قِصَّةٌ خَارِقَةٌ لِلْعَادَةِ. Printed page
// 250 only -- the whole chapter is a single unbroken paragraph ending
// before ch2's heading أَمْرٌ كُلُّهُ عَجَبٌ, which begins lower on page 251
// (the top of 251 is still this chapter's two closing Qur'an quotations).
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// This volume opens with dense classical apologetic/expository prose --
// a very different register from vols 1-3's simple narrative. Chapter 1
// is the author's own philosophical opening: ʿĪsā's story is one long
// miracle that suspended the "laws of nature" people had come to treat
// as an unshakeable god in Allah's place; the chapter closes with two
// Qur'anic citations (Yā-Sīn 36:82 and al-Ḥashr 59:24 -- the second
// embedded inside a still-longer citation of al-Ḥashr's closing verse)
// and a third (Āl ʿImrān 3:59) likening ʿĪsā's birth to Adam's creation.
//
// House convention followed throughout (see qasas-v3/chapter-14.js):
// the single printed paragraph is split at every comma into short
// clause-level sentences, several of them one-word/short fragments of a
// long coordinated list (this mirrors the printed punctuation exactly,
// per QASAS_AGENT_BRIEF.md step 3). Each Qur'anic quotation is kept in
// its own ﴿﴾-wrapped sentence, separated from its narrating clause, and
// tokenized/translated like ordinary prose with no truncation -- the
// shipped convention confirmed by chapter-14.js, superseding the old
// brief note about deliberately keeping Qur'an quotes non-buildable.
//
// Grammar / lexical notes:
//   -- ﷺ (qs-v12-c01-003) is tagged as its own token (lemma 'ﷺ', pos
//      'part', no features) rather than spelled out, matching how it is
//      printed; its gloss carries the full "peace and blessings of
//      Allah be upon him" formula since nothing else in the token can.
//   -- آخِرُ ("last," qs-v12-c01-002) is tagged as a distinct lemma from
//      the unrelated-looking but etymologically connected آخَر/آخِرَة
//      family (both already known) -- different vocalization pattern,
//      different sense ("last of" vs. "another"/"the Hereafter").
//   -- إِنَّمَا (qs-v12-c01-018, opening the Yā-Sīn quotation) is treated
//      as its own restrictive-particle lemma rather than folded onto the
//      already-foundational إِنَّ, since it carries a distinct idiomatic
//      sense ("only, verily") -- flagged for a second look, as the
//      corpus has no precedent either way for إِنَّ + مَا compounds
//      (contrast لَمَا in qasas-v3/chapter-01.js, which *was* folded
//      onto its base particle).
//   -- تَعَالَى (qs-v12-c01-024) is tagged pos 'verb', features 'perf.3ms'
//      as the epithet-verb "is Exalted" following اللَّه، by analogy with
//      how the corpus tags other epithet predicates.
//   -- خَالِق (qs-v12-c01-019/020), قَادِر, مُرِيد, صَانِع, بَارِئ, مُصَوِّر are
//      all tagged as their own participle/agent-noun lemmas, distinct
//      from any underlying verb, per the corpus's
//      participle-is-its-own-lemma convention (see chapter-14.js's own
//      notes on طَارِد/مُؤْمِن). خَالِق recurs unchanged between its first
//      use (s019) and the Qur'an quotation (s020) -- one lemma, not
//      re-added to newWords the second time.
//   -- مَثَل (qs-v12-c01-025, "likeness, parable") is a distinct lemma
//      from the already-known مِثْل ("like, similar") -- different noun
//      pattern, same root م ث ل, different sense, per the corpus's
//      same-root-distinct-lemma convention.
//   -- تَصْدِيق, دُونَ, اِسْم/الْأَسْمَاء, and غَيْر are treated as already known
//      (see shared lexicon check below) even though this volume opener
//      spells them fully vowelled for the first time in v12 itself.
//   -- Closed-class function words and a short list of hyper-frequent
//      copulas/verbs (هُوَ، هِيَ، ذَلِكَ، هَذَا، مَنْ، مَا، الَّذِي، لَا، فِي، عَلَى،
//      مِنْ، إِلَى، إِنَّ، أَنَّ، أَنْ، قَالَ، كَانَ، شَيْء، عِنْدَ، ثُمَّ، قَبْلَ) never
//      appear in known-lemmas.txt despite being used in literally every
//      one of the 63 prior chapter files scanned -- they are evidently
//      assumed pre-requisite vocabulary the newWords system never
//      tracks, not genuinely new. Treated as foundational here and not
//      added to newWords; flagged for a second look since this is an
//      inference from corpus behavior, not a documented rule.
//   -- مُحَمَّد is treated the same way: pervasive across dozens of
//      qiraah-v1/v2 chapters (as lemma "محمد") but never present in
//      known-lemmas.txt, so treated as already-foundational rather than
//      re-introduced as new here. Flagged for a second look.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): سَيِّد، نَبِيّ، اللَّه،
//      قِصَّة، حِكْمَة، أَمْر، كُلّ، شَيْء، رَسُول، آدَم، مَاء، أُمّ، أَب، سَمَاء، أَرْض،
//      عَزِيز، حَكِيم، خَلْق، عِلْم (not yet used but establishing), زَالَ، حَالَ،
//      أَحَاطَ، غَلَبَ، أَرَادَ، إِذَا، غَيْر، دُونَ، اِسْم، تَصْدِيق، آمَنَ، حُكْم are
//      all already known and are NOT re-listed in newWords here.
//
// 42 new words, the largest single-chapter count in the corpus so far --
// expected for this volume's philosophical opening register: دَوْر، جَاءَ،
// آخِر، تَجَلَّى، إِرَادَة، قَاهِر، قُدْرَة، مُطْلَق، دَقِيق، خَارِق، عَادَة، حَارَ، لُبّ،
// نَسَخَ، قَانُون، طَبِيعِيّ، إِيمَان، تَجْرِبَة، مُشَاهَدَة، طِبّ، نَامُوس، تَغَيَّرَ،
// تَبَدَّلَ، جَهِلَ، هَانَ، وِلَادَة، طِين، أَهْوَن، أَيْسَر، تَعَالَى، مَثَل، تُرَاب،
// قَادِر، مُرِيد، خَالِق، صَانِع، بَارِئ، مُصَوِّر، حُسْنَى، سَبَّحَ، إِنَّمَا، عِيسَى.
// عِيسَى (Isa/Jesus) is the volume's central figure, introduced here at
// its true first occurrence.
//
// No page footnotes (book_note) on page 250.
export const CHAPTER = {
  id: 'ch1',
  title: { ar: 'قِصَّةٌ خَارِقَةٌ لِلْعَادَةِ', en: 'An Extraordinary Story' },
  newWords: [
    'دَوْر', 'جَاءَ', 'آخِر', 'تَجَلَّى', 'إِرَادَة', 'قَاهِر',
    'قُدْرَة', 'مُطْلَق', 'دَقِيق', 'خَارِق', 'عَادَة', 'حَارَ',
    'لُبّ', 'نَسَخَ', 'قَانُون', 'طَبِيعِيّ', 'إِيمَان', 'تَجْرِبَة',
    'مُشَاهَدَة', 'طِبّ', 'نَامُوس', 'تَغَيَّرَ', 'تَبَدَّلَ', 'جَهِلَ',
    'هَانَ', 'وِلَادَة', 'طِين', 'أَهْوَن', 'أَيْسَر', 'تَعَالَى',
    'مَثَل', 'تُرَاب', 'قَادِر', 'مُرِيد', 'خَالِق', 'صَانِع',
    'بَارِئ', 'مُصَوِّر', 'حُسْنَى', 'سَبَّحَ', 'إِنَّمَا', 'عِيسَى',
  ],
  lemmas: {
    دَوْر: { gloss: 'turn, era, role' },
    جَاءَ: { gloss: 'to come' },
    آخِر: { gloss: 'last, final' },
    تَجَلَّى: { gloss: 'to be manifested, revealed' },
    إِرَادَة: { gloss: 'will, volition' },
    قَاهِر: { gloss: 'overwhelming, all-compelling' },
    قُدْرَة: { gloss: 'power, ability' },
    مُطْلَق: { gloss: 'absolute, unrestricted' },
    دَقِيق: { gloss: 'precise, exact, subtle' },
    خَارِق: { gloss: 'extraordinary, miraculous (lit. piercing through)' },
    عَادَة: { gloss: 'custom, norm, the ordinary' },
    حَارَ: { gloss: 'to be bewildered, perplexed' },
    لُبّ: { gloss: 'mind, intellect, kernel' },
    نَسَخَ: { gloss: 'to abrogate, supersede' },
    قَانُون: { gloss: 'law, statute' },
    طَبِيعِيّ: { gloss: 'natural' },
    إِيمَان: { gloss: 'faith, belief' },
    تَجْرِبَة: { gloss: 'experience, experiment' },
    مُشَاهَدَة: { gloss: 'observation' },
    طِبّ: { gloss: 'medicine' },
    نَامُوس: { gloss: 'law, statute (esp. of nature)' },
    تَغَيَّرَ: { gloss: 'to change' },
    تَبَدَّلَ: { gloss: 'to alter, be replaced' },
    جَهِلَ: { gloss: 'to be ignorant of' },
    هَانَ: { gloss: 'to become easy' },
    وِلَادَة: { gloss: 'birth' },
    طِين: { gloss: 'clay, mud' },
    أَهْوَن: { gloss: 'easier' },
    أَيْسَر: { gloss: 'simpler, more readily accepted' },
    تَعَالَى: { gloss: 'to be exalted (of Allah)' },
    مَثَل: { gloss: 'likeness, parable, example' },
    تُرَاب: { gloss: 'dust, soil' },
    قَادِر: { gloss: 'capable, omnipotent' },
    مُرِيد: { gloss: 'willing, having will' },
    خَالِق: { gloss: 'creator, creating' },
    صَانِع: { gloss: 'maker, fashioning' },
    بَارِئ: { gloss: 'originator' },
    مُصَوِّر: { gloss: 'fashioner, giver of forms' },
    حُسْنَى: { gloss: 'most beautiful (fem. elative)' },
    سَبَّحَ: { gloss: 'to glorify' },
    إِنَّمَا: { gloss: 'only, verily' },
    عِيسَى: { gloss: 'Isa (Jesus)' },
  },
  paragraphs: [
    {
      en: "Then comes the turn of our master ʿĪsā, the last of the messengers before our Prophet Muḥammad, the Messenger of Allah ﷺ -- a story in which Allah's overwhelming will, absolute power, and precise wisdom were all manifested. His whole affair is extraordinary, and his birth was extraordinary: minds were bewildered by it, the laws of nature were suspended for it, and believing and assenting to it grew hard for whoever had come to believe in the laws of nature as a changeless, unshifting god, whoever trusted only in experiment and observation, and in the rulings of medicine and nature as an unalterable law -- ignorant of the power of Allah that encompasses and overpowers all things, and of His will, which nothing can withstand: \"His command, when He wills a thing, is only to say to it, 'Be,' and it is.\" Yet this faith is easy for whoever believes in Allah as a capable, willing Creator and Maker -- \"He is Allah, the Creator, the Originator, the Fashioner; His are the most beautiful names; whatever is in the heavens and earth glorifies Him, and He is the Almighty, the Wise\" -- and who believes in the creation of Adam from water and clay, with neither mother nor father: for a birth from a mother without a father is easier and readier to accept than a birth with neither mother nor father, and that is why Allah Most High says: \"Truly, the likeness of ʿĪsā with Allah is as the likeness of Adam: He created him from dust, then said to him, 'Be,' and he was.\"",
      sentences: [
        {
          id: 'qs-v12-c01-001',
          ar: 'وَيَجِيءُ دَوْرُ سَيِّدِنَا عِيسَى،',
          en: 'Then comes the turn of our master ʿĪsā,',
          tokens: [
            { surface: 'وَيَجِيءُ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ج ي أ', gloss: 'to come; and comes' },
            { surface: 'دَوْرُ', lemma: 'دَوْر', pos: 'noun', features: 'nom.constr', root: 'د و ر', gloss: 'the turn of' },
            { surface: 'سَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'gen+1p', gloss: 'our master' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'gen', gloss: 'Isa (Jesus)' },
          ],
        },
        {
          id: 'qs-v12-c01-002',
          ar: 'وَهُوَ آخِرُ الرُّسُلِ،',
          en: 'the last of the messengers,',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he' },
            { surface: 'آخِرُ', lemma: 'آخِر', pos: 'noun', features: 'nom.constr', gloss: 'the last of' },
            { surface: 'الرُّسُلِ', lemma: 'رَسُول', pos: 'noun', features: 'def.gen.pl', gloss: 'the messengers' },
          ],
        },
        {
          id: 'qs-v12-c01-003',
          ar: 'قَبْلَ نَبِيِّنَا مُحَمَّدٍ رَسُولِ اللَّهِ ﷺ،',
          en: 'before our Prophet Muḥammad, the Messenger of Allah ﷺ,',
          tokens: [
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'prep', features: 'prep', gloss: 'before' },
            { surface: 'نَبِيِّنَا', lemma: 'نَبِيّ', pos: 'noun', features: 'gen+1p', gloss: 'our prophet' },
            { surface: 'مُحَمَّدٍ', lemma: 'مُحَمَّد', pos: 'proper', features: 'gen', gloss: 'Muhammad' },
            { surface: 'رَسُولِ', lemma: 'رَسُول', pos: 'noun', features: 'gen.constr', gloss: 'the messenger of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'ﷺ', lemma: 'ﷺ', pos: 'part', gloss: 'peace and blessings of Allah be upon him' },
          ],
        },
        {
          id: 'qs-v12-c01-004',
          ar: 'وَهِيَ قِصَّةٌ تَجَلَّتْ فِيهَا إِرَادَةُ اللَّهِ الْقَاهِرَةُ،',
          en: "and it is a story in which Allah's overwhelming will was manifested,",
          tokens: [
            { surface: 'وَهِيَ', lemma: 'هِيَ', pos: 'noun', features: 'conj+3fs', gloss: 'and it (is)' },
            { surface: 'قِصَّةٌ', lemma: 'قِصَّة', pos: 'noun', features: 'indef.nom', gloss: 'a story' },
            { surface: 'تَجَلَّتْ', lemma: 'تَجَلَّى', pos: 'verb', features: 'perf.3fs', root: 'ج ل و', gloss: 'to be manifested; was manifested' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in which' },
            { surface: 'إِرَادَةُ', lemma: 'إِرَادَة', pos: 'noun', features: 'nom.constr', root: 'ر و د', gloss: 'the will of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'الْقَاهِرَةُ', lemma: 'قَاهِر', pos: 'adj', features: 'def.nom.f', root: 'ق ه ر', gloss: 'overwhelming, all-compelling' },
          ],
        },
        {
          id: 'qs-v12-c01-005',
          ar: 'وَقُدْرَةُ اللَّهِ الْمُطْلَقَةُ،',
          en: "and Allah's absolute power,",
          tokens: [
            { surface: 'وَقُدْرَةُ', lemma: 'قُدْرَة', pos: 'noun', features: 'conj+nom.constr', root: 'ق د ر', gloss: 'and the power of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'الْمُطْلَقَةُ', lemma: 'مُطْلَق', pos: 'adj', features: 'def.nom.f', root: 'ط ل ق', gloss: 'absolute, unrestricted' },
          ],
        },
        {
          id: 'qs-v12-c01-006',
          ar: 'وَحِكْمَةُ اللَّهِ الدَّقِيقَةُ،',
          en: "and Allah's precise wisdom,",
          tokens: [
            { surface: 'وَحِكْمَةُ', lemma: 'حِكْمَة', pos: 'noun', features: 'conj+nom.constr', gloss: 'and the wisdom of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'الدَّقِيقَةُ', lemma: 'دَقِيق', pos: 'adj', features: 'def.nom.f', root: 'د ق ق', gloss: 'precise, exact, subtle' },
          ],
        },
        {
          id: 'qs-v12-c01-007',
          ar: 'فَأَمْرُهُ كُلُّهُ خَارِقٌ لِلْعَادَةِ،',
          en: 'so his whole affair is extraordinary,',
          tokens: [
            { surface: 'فَأَمْرُهُ', lemma: 'أَمْر', pos: 'noun', features: 'conj+nom+3ms', gloss: 'so his affair' },
            { surface: 'كُلُّهُ', lemma: 'كُلّ', pos: 'noun', features: 'nom+3ms', gloss: 'all of it' },
            { surface: 'خَارِقٌ', lemma: 'خَارِق', pos: 'adj', features: 'indef.nom', root: 'خ ر ق', gloss: 'extraordinary, miraculous' },
            { surface: 'لِلْعَادَةِ', lemma: 'عَادَة', pos: 'noun', features: 'prep+def.gen', root: 'ع و د', gloss: 'the norm, the ordinary' },
          ],
        },
        {
          id: 'qs-v12-c01-008',
          ar: 'وَوِلَادَتُهُ خَارِقَةٌ لِلْعَادَةِ،',
          en: 'and his birth was extraordinary,',
          tokens: [
            { surface: 'وَوِلَادَتُهُ', lemma: 'وِلَادَة', pos: 'noun', features: 'conj+nom+3ms', root: 'و ل د', gloss: 'and his birth' },
            { surface: 'خَارِقَةٌ', lemma: 'خَارِق', pos: 'adj', features: 'indef.nom.f', gloss: 'extraordinary' },
            { surface: 'لِلْعَادَةِ', lemma: 'عَادَة', pos: 'noun', features: 'prep+def.gen', gloss: 'the norm, the ordinary' },
          ],
        },
        {
          id: 'qs-v12-c01-009',
          ar: 'حَارَتْ فِيهَا الْأَلْبَابُ،',
          en: 'minds were bewildered by it,',
          tokens: [
            { surface: 'حَارَتْ', lemma: 'حَارَ', pos: 'verb', features: 'perf.3fs', root: 'ح ي ر', gloss: 'to be bewildered; were bewildered' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'by it' },
            { surface: 'الْأَلْبَابُ', lemma: 'لُبّ', pos: 'noun', features: 'def.nom.pl', gloss: 'minds, intellects' },
          ],
        },
        {
          id: 'qs-v12-c01-010',
          ar: 'وَنُسِخَتْ فِيهَا الْقَوَانِينُ الطَّبِيعِيَّةُ،',
          en: 'the laws of nature were abrogated by it,',
          tokens: [
            { surface: 'وَنُسِخَتْ', lemma: 'نَسَخَ', pos: 'verb', features: 'conj+pass+perf.3fs', root: 'ن س خ', gloss: 'to abrogate; and were abrogated' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'by it' },
            { surface: 'الْقَوَانِينُ', lemma: 'قَانُون', pos: 'noun', features: 'def.nom.pl', gloss: 'the laws' },
            { surface: 'الطَّبِيعِيَّةُ', lemma: 'طَبِيعِيّ', pos: 'adj', features: 'def.nom.f', root: 'ط ب ع', gloss: 'natural' },
          ],
        },
        {
          id: 'qs-v12-c01-011',
          ar: 'وَشَقَّ الْإِيمَانُ بِهَا وَالتَّصْدِيقُ لَهَا عَلَى مَنْ آمَنَ بِالْقَوَانِينِ الطَّبِيعِيَّةِ كَإِلَهٍ لَا يَزُولُ وَلَا يَحُولُ،',
          en: 'and believing and assenting to it grew hard for whoever had believed in the laws of nature as a changeless, unshifting god,',
          tokens: [
            { surface: 'وَشَقَّ', lemma: 'شَقَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to become difficult; and it became difficult' },
            { surface: 'الْإِيمَانُ', lemma: 'إِيمَان', pos: 'noun', features: 'def.nom', root: 'أ م ن', gloss: 'faith, belief' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'وَالتَّصْدِيقُ', lemma: 'تَصْدِيق', pos: 'noun', features: 'conj+def.nom', gloss: 'and the affirmation of' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'of it' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for, upon' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whoever' },
            { surface: 'آمَنَ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3ms', gloss: 'to believe; believed' },
            { surface: 'بِالْقَوَانِينِ', lemma: 'قَانُون', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'in the laws' },
            { surface: 'الطَّبِيعِيَّةِ', lemma: 'طَبِيعِيّ', pos: 'adj', features: 'def.gen.f', gloss: 'natural' },
            { surface: 'كَإِلَهٍ', lemma: 'إِلَٰه', pos: 'noun', features: 'prep+indef.gen', gloss: 'as a god' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَزُولُ', lemma: 'زَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to cease, pass away; ceases' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَحُولُ', lemma: 'حَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to change, shift; changes' },
          ],
        },
        {
          id: 'qs-v12-c01-012',
          ar: 'وَآمَنَ بِالتَّجْرِبَةِ،',
          en: 'and believed in experiment,',
          tokens: [
            { surface: 'وَآمَنَ', lemma: 'آمَنَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to believe; and believed' },
            { surface: 'بِالتَّجْرِبَةِ', lemma: 'تَجْرِبَة', pos: 'noun', features: 'prep+def.gen', root: 'ج ر ب', gloss: 'experience, experiment' },
          ],
        },
        {
          id: 'qs-v12-c01-013',
          ar: 'وَالْمُشَاهَدَةِ،',
          en: 'and observation,',
          tokens: [
            { surface: 'وَالْمُشَاهَدَةِ', lemma: 'مُشَاهَدَة', pos: 'noun', features: 'conj+def.gen', root: 'ش ه د', gloss: 'and observation' },
          ],
        },
        {
          id: 'qs-v12-c01-014',
          ar: 'وَبِأَحْكَامِ الطِّبِّ وَالطَّبِيعَةِ كَنَامُوسٍ لَا يَتَغَيَّرُ وَلَا يَتَبَدَّلُ،',
          en: 'and in the rulings of medicine and nature as an unalterable, unchanging law,',
          tokens: [
            { surface: 'وَبِأَحْكَامِ', lemma: 'حُكْم', pos: 'noun', features: 'conj+prep+pl.gen.constr', gloss: 'and by the rulings of' },
            { surface: 'الطِّبِّ', lemma: 'طِبّ', pos: 'noun', features: 'def.gen', gloss: 'medicine' },
            { surface: 'وَالطَّبِيعَةِ', lemma: 'طَبِيعَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and nature' },
            { surface: 'كَنَامُوسٍ', lemma: 'نَامُوس', pos: 'noun', features: 'prep+indef.gen', gloss: 'as a law, statute' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتَغَيَّرُ', lemma: 'تَغَيَّرَ', pos: 'verb', features: 'impf.3ms', root: 'غ ي ر', gloss: 'to change; changes' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَتَبَدَّلُ', lemma: 'تَبَدَّلَ', pos: 'verb', features: 'impf.3ms', root: 'ب د ل', gloss: 'to alter, be replaced; changes' },
          ],
        },
        {
          id: 'qs-v12-c01-015',
          ar: 'وَجَهِلَ قُدْرَةَ اللَّهِ الَّتِي أَحَاطَتْ بِكُلِّ شَيْءٍ،',
          en: 'ignorant of the power of Allah that encompasses all things,',
          tokens: [
            { surface: 'وَجَهِلَ', lemma: 'جَهِلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج ه ل', gloss: 'to be ignorant of; and was ignorant of' },
            { surface: 'قُدْرَةَ', lemma: 'قُدْرَة', pos: 'noun', features: 'acc.constr', gloss: 'the power of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'f.rel', gloss: 'which' },
            { surface: 'أَحَاطَتْ', lemma: 'أَحَاطَ', pos: 'verb', features: 'perf.3fs', gloss: 'to encompass; encompasses' },
            { surface: 'بِكُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'prep+gen.constr', gloss: 'with every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
          ],
        },
        {
          id: 'qs-v12-c01-016',
          ar: 'وَغَلَبَتْ عَلَى كُلِّ شَيْءٍ،',
          en: 'and overpowers all things,',
          tokens: [
            { surface: 'وَغَلَبَتْ', lemma: 'غَلَبَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to overpower, prevail; and prevails' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
          ],
        },
        {
          id: 'qs-v12-c01-017',
          ar: 'وَإِرَادَتَهُ الَّتِي لَا يَحُولُ دُونَهَا شَيْءٌ:',
          en: 'and of His will, which nothing can withstand:',
          tokens: [
            { surface: 'وَإِرَادَتَهُ', lemma: 'إِرَادَة', pos: 'noun', features: 'conj+acc+3ms', gloss: 'and His will' },
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'f.rel', gloss: 'which' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَحُولُ', lemma: 'حَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to stand in the way; stands in the way' },
            { surface: 'دُونَهَا', lemma: 'دُونَ', pos: 'prep', features: 'prep+3fs', gloss: 'against it' },
            { surface: 'شَيْءٌ', lemma: 'شَيْء', pos: 'noun', features: 'indef.nom', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v12-c01-018',
          ar: '﴿إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَنْ يَقُولَ لَهُ كُنْ فَيَكُونُ﴾',
          en: '"His command, when He wills a thing, is only to say to it, \'Be,\' and it is."',
          tokens: [
            { surface: 'إِنَّمَا', lemma: 'إِنَّمَا', pos: 'part', features: 'part', gloss: 'verily, only' },
            { surface: 'أَمْرُهُ', lemma: 'أَمْر', pos: 'noun', features: 'nom+3ms', gloss: 'His affair' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', gloss: 'to want; wills' },
            { surface: 'شَيْئًا', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'a thing' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَقُولَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; say' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to it' },
            { surface: 'كُنْ', lemma: 'كَانَ', pos: 'verb', features: 'imp.2ms', gloss: 'to be; Be!' },
            { surface: 'فَيَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to be; and it is' },
          ],
        },
        {
          id: 'qs-v12-c01-019',
          ar: 'وَهَانَ هَذَا الْإِيمَانُ عَلَى مَنْ آمَنَ بِاللَّهِ كَإِلَهٍ قَادِرٍ مُرِيدٍ خَالِقٍ صَانِعٍ،',
          en: 'Yet this faith is easy for whoever believes in Allah as a capable, willing Creator and Maker,',
          tokens: [
            { surface: 'وَهَانَ', lemma: 'هَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ه و ن', gloss: 'to become easy; and became easy' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem', gloss: 'this' },
            { surface: 'الْإِيمَانُ', lemma: 'إِيمَان', pos: 'noun', features: 'def.nom', gloss: 'faith, belief' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whoever' },
            { surface: 'آمَنَ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3ms', gloss: 'to believe; believes' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
            { surface: 'كَإِلَهٍ', lemma: 'إِلَٰه', pos: 'noun', features: 'prep+indef.gen', gloss: 'as a god' },
            { surface: 'قَادِرٍ', lemma: 'قَادِر', pos: 'adj', features: 'indef.gen', root: 'ق د ر', gloss: 'capable, omnipotent' },
            { surface: 'مُرِيدٍ', lemma: 'مُرِيد', pos: 'adj', features: 'indef.gen', root: 'ر و د', gloss: 'having will' },
            { surface: 'خَالِقٍ', lemma: 'خَالِق', pos: 'adj', features: 'indef.gen', root: 'خ ل ق', gloss: 'creating, creator' },
            { surface: 'صَانِعٍ', lemma: 'صَانِع', pos: 'adj', features: 'indef.gen', root: 'ص ن ع', gloss: 'making, fashioning' },
          ],
        },
        {
          id: 'qs-v12-c01-020',
          ar: '﴿هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْأَسْمَاءُ الْحُسْنَى يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ﴾',
          en: '"He is Allah, the Creator, the Originator, the Fashioner; His are the most beautiful names; whatever is in the heavens and earth glorifies Him, and He is the Almighty, the Wise."',
          tokens: [
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'He' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'الْخَالِقُ', lemma: 'خَالِق', pos: 'noun', features: 'def.nom', gloss: 'the Creator' },
            { surface: 'الْبَارِئُ', lemma: 'بَارِئ', pos: 'noun', features: 'def.nom', root: 'ب ر أ', gloss: 'the Originator' },
            { surface: 'الْمُصَوِّرُ', lemma: 'مُصَوِّر', pos: 'noun', features: 'def.nom', root: 'ص و ر', gloss: 'the Fashioner, the Giver of Forms' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to Him (belong)' },
            { surface: 'الْأَسْمَاءُ', lemma: 'اِسْم', pos: 'noun', features: 'def.nom.pl', gloss: 'the names' },
            { surface: 'الْحُسْنَى', lemma: 'حُسْنَى', pos: 'adj', features: 'def.f', root: 'ح س ن', gloss: 'most beautiful' },
            { surface: 'يُسَبِّحُ', lemma: 'سَبَّحَ', pos: 'verb', features: 'impf.3ms', root: 'س ب ح', gloss: 'to glorify; glorifies' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'Him' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'whatever' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السَّمَاوَاتِ', lemma: 'سَمَاء', pos: 'noun', features: 'def.gen.pl', gloss: 'the heavens' },
            { surface: 'وَالْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'conj+def.gen', gloss: 'and the earth' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and He' },
            { surface: 'الْعَزِيزُ', lemma: 'عَزِيز', pos: 'adj', features: 'def.nom', gloss: 'the Almighty' },
            { surface: 'الْحَكِيمُ', lemma: 'حَكِيم', pos: 'adj', features: 'def.nom', gloss: 'the Wise' },
          ],
        },
        {
          id: 'qs-v12-c01-021',
          ar: 'وَآمَنَ بِخَلْقِ آدَمَ مِنْ مَاءٍ وَطِينٍ،',
          en: 'and who believes in the creation of Adam from water and clay,',
          tokens: [
            { surface: 'وَآمَنَ', lemma: 'آمَنَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to believe; and believed' },
            { surface: 'بِخَلْقِ', lemma: 'خَلْق', pos: 'noun', features: 'prep+gen.constr', gloss: 'in the creation of' },
            { surface: 'آدَمَ', lemma: 'آدَم', pos: 'proper', features: 'gen', gloss: 'Adam' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'مَاءٍ', lemma: 'مَاء', pos: 'noun', features: 'indef.gen', gloss: 'water' },
            { surface: 'وَطِينٍ', lemma: 'طِين', pos: 'noun', features: 'conj+indef.gen', gloss: 'and clay' },
          ],
        },
        {
          id: 'qs-v12-c01-022',
          ar: 'وَمِنْ غَيْرِ أُمٍّ وَأَبٍ،',
          en: 'with neither mother nor father,',
          tokens: [
            { surface: 'وَمِنْ', lemma: 'مِنْ', pos: 'prep', features: 'conj+prep', gloss: 'and from' },
            { surface: 'غَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'gen.constr', gloss: 'without' },
            { surface: 'أُمٍّ', lemma: 'أُمّ', pos: 'noun', features: 'indef.gen', gloss: 'a mother' },
            { surface: 'وَأَبٍ', lemma: 'أَب', pos: 'noun', features: 'conj+indef.gen', gloss: 'and a father' },
          ],
        },
        {
          id: 'qs-v12-c01-023',
          ar: 'وَوِلَادَةٌ مِنْ أُمٍّ مِنْ غَيْرِ أَبٍ أَهْوَنُ وَأَيْسَرُ لِلتَّصْدِيقِ مِنْ وِلَادَةٍ مِنْ غَيْرِ أُمٍّ وَأَبٍ،',
          en: 'for a birth from a mother without a father is easier and readier to accept than a birth with neither mother nor father,',
          tokens: [
            { surface: 'وَوِلَادَةٌ', lemma: 'وِلَادَة', pos: 'noun', features: 'conj+indef.nom', gloss: 'and a birth' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أُمٍّ', lemma: 'أُمّ', pos: 'noun', features: 'indef.gen', gloss: 'a mother' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'without' },
            { surface: 'غَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'gen.constr', gloss: 'without' },
            { surface: 'أَبٍ', lemma: 'أَب', pos: 'noun', features: 'indef.gen', gloss: 'a father' },
            { surface: 'أَهْوَنُ', lemma: 'أَهْوَن', pos: 'adj', features: 'indef.nom', root: 'ه و ن', gloss: 'easier' },
            { surface: 'وَأَيْسَرُ', lemma: 'أَيْسَر', pos: 'adj', features: 'conj+indef.nom', root: 'ي س ر', gloss: 'and simpler' },
            { surface: 'لِلتَّصْدِيقِ', lemma: 'تَصْدِيق', pos: 'noun', features: 'prep+def.gen', gloss: 'for belief, affirmation' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'وِلَادَةٍ', lemma: 'وِلَادَة', pos: 'noun', features: 'indef.gen', gloss: 'a birth' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'without' },
            { surface: 'غَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'gen.constr', gloss: 'without' },
            { surface: 'أُمٍّ', lemma: 'أُمّ', pos: 'noun', features: 'indef.gen', gloss: 'a mother' },
            { surface: 'وَأَبٍ', lemma: 'أَب', pos: 'noun', features: 'conj+indef.gen', gloss: 'and a father' },
          ],
        },
        {
          id: 'qs-v12-c01-024',
          ar: 'لِذَلِكَ يَقُولُ اللَّهُ تَعَالَى:',
          en: 'and that is why Allah Most High says:',
          tokens: [
            { surface: 'لِذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'prep+dem', gloss: 'therefore' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; says' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', root: 'ع ل و', gloss: 'to be exalted; is exalted' },
          ],
        },
        {
          id: 'qs-v12-c01-025',
          ar: '﴿إِنَّ مَثَلَ عِيسَى عِنْدَ اللَّهِ كَمَثَلِ آدَمَ خَلَقَهُ مِن تُرَابٍ ثُمَّ قَالَ لَهُ كُن فَيَكُونُ﴾',
          en: '"Truly, the likeness of ʿĪsā with Allah is as the likeness of Adam: He created him from dust, then said to him, \'Be,\' and he was."',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'مَثَلَ', lemma: 'مَثَل', pos: 'noun', features: 'acc.constr', root: 'م ث ل', gloss: 'the likeness of' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'gen', gloss: 'Isa' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep', gloss: 'with, in the sight of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'كَمَثَلِ', lemma: 'مَثَل', pos: 'noun', features: 'prep+gen.constr', gloss: 'like the likeness of' },
            { surface: 'آدَمَ', lemma: 'آدَم', pos: 'proper', features: 'gen', gloss: 'Adam' },
            { surface: 'خَلَقَهُ', lemma: 'خَلَقَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to create; He created him' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'تُرَابٍ', lemma: 'تُرَاب', pos: 'noun', features: 'indef.gen', root: 'ت ر ب', gloss: 'dust' },
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'كُن', lemma: 'كَانَ', pos: 'verb', features: 'imp.2ms', gloss: 'to be; Be!' },
            { surface: 'فَيَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to be; and it is' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ فِي الْقَوَانِينِ الطَّبِيعِيَّةِ بِسَبَبِ قِصَّةِ سَيِّدِنَا عِيسَى؟',
          options: ['نُسِخَتْ فِيهَا الْقَوَانِينُ الطَّبِيعِيَّةُ وَحَارَتْ فِيهَا الْأَلْبَابُ', 'بَقِيَتِ الْقَوَانِينُ كَمَا هِيَ دُونَ تَغْيِيرٍ', 'ازْدَادَتِ الْقَوَانِينُ الطَّبِيعِيَّةُ قُوَّةً'],
          answer: 0,
          qEn: 'What happened to the laws of nature because of the story of our master ʿĪsā?',
          optionsEn: ['The natural laws were abrogated by it, and minds were bewildered', 'The laws stayed exactly as they were, unchanged', 'The natural laws grew even stronger'],
        },
        {
          q: 'عَلَى مَنْ شَقَّ الْإِيمَانُ بِهَذِهِ الْقِصَّةِ؟',
          options: ['عَلَى مَنْ آمَنَ بِالْقَوَانِينِ الطَّبِيعِيَّةِ كَإِلَهٍ لَا يَزُولُ وَلَا يَحُولُ', 'عَلَى مَنْ عَرَفَ قُدْرَةَ اللَّهِ الْمُطْلَقَةَ', 'عَلَى الْأَنْبِيَاءِ وَحْدَهُمْ'],
          answer: 0,
          qEn: 'For whom was believing this story difficult?',
          optionsEn: ['For whoever believed in the laws of nature as an unshifting god', "For whoever knew Allah's absolute power", 'For the prophets alone'],
        },
        {
          q: 'بِمَاذَا شَبَّهَ اللَّهُ وِلَادَةَ عِيسَى فِي الْآيَةِ الْأَخِيرَةِ؟',
          options: ['بِخَلْقِ آدَمَ مِنْ تُرَابٍ', 'بِخَلْقِ الْمَلَائِكَةِ مِنْ نُورٍ', 'بِخَلْقِ الْجِنِّ مِنْ نَارٍ'],
          answer: 0,
          qEn: "To what did Allah liken ʿĪsā's birth in the final verse?",
          optionsEn: ['To the creation of Adam from dust', 'To the creation of the angels from light', 'To the creation of the jinn from fire'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'بِالتَّجْرِبَةِ، وَالْمُشَاهَدَةِ.',
        en: 'And he believed in experiment and observation.',
        options: ['آمَنَ', 'يُؤْمِنُ', 'آمِنْ', 'مُؤْمِن'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- a completed act of belief, matching the narration here.',
          'Imperfect -- wrong tense; the sentence narrates a completed act.',
          'Imperative -- wrong mood; this is narration, not a command.',
          'Active participle (noun) -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'فِيهَا الْقَوَانِينُ الطَّبِيعِيَّةُ.',
        en: 'And the laws of nature were abrogated by it.',
        options: ['نُسِخَتْ', 'نَسَخَتْ', 'يُنْسَخُ', 'نَاسِخَة'],
        answer: 0,
        rationales: [
          'Passive perfect, 3rd feminine singular -- the laws were abrogated, agreeing with feminine الْقَوَانِينُ.',
          'Active perfect -- wrong voice; the laws did not abrogate something else.',
          'Passive imperfect, masculine -- wrong tense and wrong gender agreement.',
          'Active participle (noun) -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِذَا أَرَادَ شَيْئًا أَنْ يَقُولَ لَهُ',
        post: 'فَيَكُونُ.',
        en: "When He wills a thing, He only says to it, 'Be,' and it is.",
        options: ['كُنْ', 'كَانَ', 'تَكُونُ', 'كَائِن'],
        answer: 0,
        rationales: [
          'Imperative, 2nd masculine singular -- the divine command "Be," matching the printed Qur\'anic text.',
          'Perfect -- wrong mood; this position is a command, not a narrated past event.',
          'Imperfect, 2nd/3rd feminine singular -- wrong mood and wrong form for a command.',
          'Active participle (noun, "being/existent") -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'آمَنَ الرَّجُلُ بِاللَّهِ',
        pre: '',
        post: 'بِاللَّهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['آمَنْتُ', 'آمَنَ', 'آمَنَتْ', 'آمَنُوا'],
        answer: 0,
        rationales: [
          '1st singular perfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '3rd feminine singular -- wrong person and gender.',
          '3rd masculine plural -- wrong person and number.',
        ],
      },
      {
        type: 'shift',
        base: 'آمَنَ الرَّجُلُ بِاللَّهِ',
        pre: '',
        post: 'بِاللَّهِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['آمَنَتْ', 'آمَنَ', 'آمَنْتُ', 'آمَنُوا'],
        answer: 0,
        rationales: [
          '3rd feminine singular perfect -- matches هِيَ.',
          '3rd masculine singular -- the base form, not shifted to "she."',
          '1st singular -- wrong person; the target is "she," not "I."',
          '3rd masculine plural -- wrong person and number.',
        ],
      },
      {
        type: 'shift',
        base: 'آمَنَ الرَّجُلُ بِاللَّهِ',
        pre: '',
        post: 'بِاللَّهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['آمَنُوا', 'آمَنَ', 'آمَنَتْ', 'آمَنَّا'],
        answer: 0,
        rationales: [
          '3rd masculine plural perfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '3rd feminine singular -- wrong person and gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

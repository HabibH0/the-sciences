// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 6 -- وِلَادَةُ مُوسَى.
// Printed page 119 only -- the chapter box sits partway down the page,
// after the closing Qur'an citation (28:4, «إِنَّ فِرْعَوْنَ عَلَا فِي الْأَرْضِ...»)
// that belongs to chapter 5 (not transcribed here -- outside this batch's
// assignment); ch6's own text runs from «وَأَرَادَ اللَّهُ...» to the end of
// the page, ending cleanly before ch7's heading «٧ - فِي النِّيلِ» which
// opens page 120. Transcribed by hand from the scan (vision OCR, 200dpi
// render) against ../CHAPTER-FORMAT.md.
//
// Opening chapter of Mūsā's story proper: Allah's decree that the very
// child Pharaoh fears will be the one to end his rule, deliver the
// Children of Israel, and turn people from the worship of men to the
// worship of Allah alone.
//
// Grammar / lexical notes:
//   -- The four parallel «وُلِدَ ذَلِكَ الْمَوْلُودُ الَّذِي قَدَّرَ اللَّهُ أَنْ
//      ...» clauses are printed as four separate period-terminated
//      sentences (not comma-joined), so the first two (qs-v6-c06-002,
//      -003) are kept whole. The last two are split at the أَنْ boundary
//      into a shared frame + complement pair (qs-v6-c06-004a/004b,
//      005a/005b) -- both halves would otherwise run 11-14 tokens and
//      fail the build stage's 3-9 token window. This mirrors the
//      precedent already in the corpus of splitting a single printed
//      clause at a subordinate-clause boundary with no comma present
//      (qs-v2-c22-012/013, "وَأَرْسَلَ يَعْقُوبُ أَبْنَاءَهُ إِلَى مِصْرَ" /
//      "لِيَبْحَثُوا عَنْ يُوسُفَ..."). The repeated frame is intentional --
//      Nadwi drills the same "قَدَّرَ اللَّهُ أَنْ..." construction four times
//      running, exactly the kind of recycled substitution pattern the
//      corpus leans on (cf. the five-كان pilot chapter) -- so it is also
//      the basis for this chapter's workshop cloze items.
//   -- قَدَّرَ ("to decree, ordain") is a new lemma distinct from the
//      already-taught قَدَرَ ("to be able," qasas-v1 ch5) -- same root,
//      different verb form and meaning, not a re-use.
//   -- وَلَدَ / وُلِدَ ("to give birth to" / passive "to be born") is new as
//      a verb lemma even though the related noun وَلَد ("child, son") is
//      already taught (qasas-v1 ch2) -- different part of speech, not
//      folded into the noun entry.
//   -- كَانَ فِرْعَوْنُ يَخَافُهُ وَيَحْذَرُهُ (qs-v6-c06-001) is كَانَ + imperfect
//      ("was fearing/used to fear"), the past-habitual/continuous
//      construction -- distinct from the كَانَ + accusative-predicate
//      pattern drilled elsewhere in this volume.
//   -- بَنِي إِسْرَائِيلَ reuses the already-taught اِبْن ("son") as its
//      construct plural بَنِي, per the established convention (qs-v2-c22
//      reused اِبْن for بْنُ in "يُوسُفُ بْنُ يَعْقُوبَ"); إِسْرَائِيل itself is new.
//   -- Basic demonstratives/particles (ذَلِكَ, هَذَا, لَيْسَ, ثُمَّ, لِ, عِنْدَ,
//      إِنَّمَا, قَالَ, يَوْم) are treated as assumed baseline vocabulary
//      throughout this batch, consistent with their total absence from
//      every existing chapter's newWords/lemmas despite constant use in
//      the worked examples (qs-v3-c01, qs-v2-c22) -- they carry inline
//      token glosses but are never re-taught, so none of them are added
//      to newWords here either.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): اللَّه، أَنْ، فِي، مَا،
//      كَانَ، خَافَ (qasas-v1 ch10)، ذَلِكَ، الَّذِي (qasas-v1 ch9)، عَلَى، يَد
//      (qasas-v1 ch15)، مُلْك (qasas-v2 ch24)، ذَهَبَ (qasas-v1 ch11)، نَاس
//      (qasas-v1 ch1)، مِنْ، إِلَى، عَبَدَ، عِبَادَة (qasas-v1 ch1)، نُور
//      (qasas-v3 ch7/etc.)، وَ، بِ، أَرَادَ (qasas-v1 ch5)، وَقَعَ (qasas-v3
//      ch7)، أَنَا/أَنْتَ-family pronouns
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 15 new words (وَلَدَ، مَوْلُود، قَدَّرَ، خَلَاص، فِرْعَوْن، إِسْرَائِيل، عِمْرَان،
// ظُلْمَة، رَغْم، جُنْد، شَهْر، شُرْطَة، رَقَابَة، حَذِرَ، ثَلَاثَة).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch6',
  title: { ar: 'وِلَادَةُ مُوسَى', en: 'The Birth of Mūsā' },
  newWords: [
    'وَلَدَ', 'مَوْلُود', 'قَدَّرَ', 'خَلَاص', 'فِرْعَوْن', 'إِسْرَائِيل', 'عِمْرَان',
    'ظُلْمَة', 'رَغْم', 'جُنْد', 'شَهْر', 'شُرْطَة', 'رَقَابَة', 'حَذِرَ', 'ثَلَاثَة',
  ],
  lemmas: {
    وَلَدَ: { gloss: 'to give birth to; (passive) to be born' },
    مَوْلُود: { gloss: 'newborn, the one born' },
    قَدَّرَ: { gloss: 'to decree, ordain, decide beforehand' },
    خَلَاص: { gloss: 'deliverance, salvation' },
    فِرْعَوْن: { gloss: 'Pharaoh' },
    إِسْرَائِيل: { gloss: 'Israel (Yaʿqūb); "Banū Isrāʾīl" -- the Children of Israel' },
    عِمْرَان: { gloss: 'ʿImrān, Mūsā\'s father' },
    ظُلْمَة: { gloss: 'darkness' },
    رَغْم: { gloss: 'spite; "ʿalā raghmi" -- in spite of' },
    جُنْد: { gloss: 'soldiers, army' },
    شَهْر: { gloss: 'month' },
    شُرْطَة: { gloss: 'police' },
    رَقَابَة: { gloss: 'surveillance, watching' },
    حَذِرَ: { gloss: 'to be wary of, beware of' },
    ثَلَاثَة: { gloss: 'three' },
  },
  paragraphs: [
    {
      en: "Allah willed that what Pharaoh feared and dreaded would truly happen. That newborn was born -- the one through whom, Allah had decreed, Pharaoh's kingdom would be lost, the deliverance of the Children of Israel would come, people would be brought out of the worship of men into the worship of Allah, and out of darkness into light. Mūsā son of ʿImrān was born in spite of Pharaoh and his soldiers, and he lived three months in spite of the police and their surveillance.",
      sentences: [
        {
          id: 'qs-v6-c06-001',
          ar: 'وَأَرَادَ اللَّهُ أَنْ يَقَعَ مَا كَانَ فِرْعَوْنُ يَخَافُهُ وَيَحْذَرُهُ.',
          en: 'Allah willed that what Pharaoh feared and was wary of would come to pass.',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want, intend; and willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَقَعَ', lemma: 'وَقَعَ', pos: 'verb', features: 'impf.3ms', root: 'و ق ع', gloss: 'to happen, occur; would happen' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'يَخَافُهُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to fear; he fears it' },
            { surface: 'وَيَحْذَرُهُ', lemma: 'حَذِرَ', pos: 'verb', features: 'conj+impf.3ms+3ms', root: 'ح ذ ر', gloss: 'to be wary of; and is wary of it' },
          ],
        },
        {
          id: 'qs-v6-c06-002',
          ar: 'وُلِدَ ذَلِكَ الْمَوْلُودُ الَّذِي قَدَّرَ اللَّهُ أَنْ يَذْهَبَ مُلْكُ فِرْعَوْنَ عَلَى يَدِهِ.',
          en: "That newborn was born -- the one through whom Allah had decreed that Pharaoh's kingdom would be lost.",
          tokens: [
            { surface: 'وُلِدَ', lemma: 'وَلَدَ', pos: 'verb', features: 'pass+perf.3ms', root: 'و ل د', gloss: 'to give birth to; was born' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'الْمَوْلُودُ', lemma: 'مَوْلُود', pos: 'noun', features: 'def.nom', root: 'و ل د', gloss: 'the newborn' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'قَدَّرَ', lemma: 'قَدَّرَ', pos: 'verb', features: 'perf.3ms', root: 'ق د ر', gloss: 'to decree, ordain; decreed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَذْهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to go; would be lost (lit. would go)' },
            { surface: 'مُلْكُ', lemma: 'مُلْك', pos: 'noun', features: 'constr.nom', gloss: 'the dominion of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'at, through (idiom: at his hand)' },
            { surface: 'يَدِهِ', lemma: 'يَد', pos: 'noun', features: 'gen+3ms', gloss: 'his hand' },
          ],
        },
        {
          id: 'qs-v6-c06-003',
          ar: 'وُلِدَ ذَلِكَ الْمَوْلُودُ الَّذِي قَدَّرَ اللَّهُ أَنْ يَكُونَ خَلَاصُ بَنِي إِسْرَائِيلَ عَلَى يَدِهِ.',
          en: 'That newborn was born -- the one through whom Allah had decreed that the deliverance of the Children of Israel would come.',
          tokens: [
            { surface: 'وُلِدَ', lemma: 'وَلَدَ', pos: 'verb', features: 'pass+perf.3ms', root: 'و ل د', gloss: 'to give birth to; was born' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'الْمَوْلُودُ', lemma: 'مَوْلُود', pos: 'noun', features: 'def.nom', root: 'و ل د', gloss: 'the newborn' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'قَدَّرَ', lemma: 'قَدَّرَ', pos: 'verb', features: 'perf.3ms', root: 'ق د ر', gloss: 'to decree, ordain; decreed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; would be' },
            { surface: 'خَلَاصُ', lemma: 'خَلَاص', pos: 'noun', features: 'constr.nom', gloss: 'the deliverance of' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.gen', root: 'ب ن و', gloss: 'the sons/children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'at, through' },
            { surface: 'يَدِهِ', lemma: 'يَد', pos: 'noun', features: 'gen+3ms', gloss: 'his hand' },
          ],
        },
        {
          id: 'qs-v6-c06-004a',
          ar: 'وُلِدَ ذَلِكَ الْمَوْلُودُ الَّذِي قَدَّرَ اللَّهُ',
          en: 'That newborn was born -- the one Allah had decreed',
          tokens: [
            { surface: 'وُلِدَ', lemma: 'وَلَدَ', pos: 'verb', features: 'pass+perf.3ms', root: 'و ل د', gloss: 'to give birth to; was born' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'الْمَوْلُودُ', lemma: 'مَوْلُود', pos: 'noun', features: 'def.nom', root: 'و ل د', gloss: 'the newborn' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'قَدَّرَ', lemma: 'قَدَّرَ', pos: 'verb', features: 'perf.3ms', root: 'ق د ر', gloss: 'to decree, ordain; decreed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v6-c06-004b',
          ar: 'أَنْ يُخْرِجَ النَّاسَ مِنْ عِبَادَةِ النَّاسِ إِلَى عِبَادَةِ اللَّهِ.',
          en: 'would bring people out of the worship of men into the worship of Allah.',
          tokens: [
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يُخْرِجَ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'impf.3ms', gloss: 'to bring out; would bring out' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, out of' },
            { surface: 'عِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'constr.gen', gloss: 'the worship of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'men, people' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to, into' },
            { surface: 'عِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'constr.gen', gloss: 'the worship of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v6-c06-005a',
          ar: 'وُلِدَ ذَلِكَ الْمَوْلُودُ الَّذِي قَدَّرَ اللَّهُ',
          en: 'That newborn was born -- the one Allah had decreed',
          tokens: [
            { surface: 'وُلِدَ', lemma: 'وَلَدَ', pos: 'verb', features: 'pass+perf.3ms', root: 'و ل د', gloss: 'to give birth to; was born' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'الْمَوْلُودُ', lemma: 'مَوْلُود', pos: 'noun', features: 'def.nom', root: 'و ل د', gloss: 'the newborn' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'قَدَّرَ', lemma: 'قَدَّرَ', pos: 'verb', features: 'perf.3ms', root: 'ق د ر', gloss: 'to decree, ordain; decreed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v6-c06-005b',
          ar: 'أَنْ يُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ.',
          en: 'would bring people out of darkness into light.',
          tokens: [
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يُخْرِجَ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'impf.3ms', gloss: 'to bring out; would bring out' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, out of' },
            { surface: 'الظُّلُمَاتِ', lemma: 'ظُلْمَة', pos: 'noun', features: 'pl.def.gen', root: 'ظ ل م', gloss: 'the darknesses' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to, into' },
            { surface: 'النُّورِ', lemma: 'نُور', pos: 'noun', features: 'def.gen', gloss: 'the light' },
          ],
        },
        {
          id: 'qs-v6-c06-006',
          ar: 'وُلِدَ مُوسَى بْنُ عِمْرَانَ عَلَى رَغْمِ فِرْعَوْنَ وَجُنُودِهِ.',
          en: 'Mūsā son of ʿImrān was born, in spite of Pharaoh and his soldiers.',
          tokens: [
            { surface: 'وُلِدَ', lemma: 'وَلَدَ', pos: 'verb', features: 'pass+perf.3ms', root: 'و ل د', gloss: 'to give birth to; was born' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'بْنُ', lemma: 'اِبْن', pos: 'noun', features: 'constr.nom', root: 'ب ن و', gloss: 'son of' },
            { surface: 'عِمْرَانَ', lemma: 'عِمْرَان', pos: 'proper', features: 'gen', gloss: 'ʿImrān' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'رَغْمِ', lemma: 'رَغْم', pos: 'noun', features: 'constr.gen', gloss: 'in spite of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَجُنُودِهِ', lemma: 'جُنْد', pos: 'noun', features: 'conj+pl.gen+3ms', root: 'ج ن د', gloss: 'and his soldiers' },
          ],
        },
        {
          id: 'qs-v6-c06-007',
          ar: 'وَعَاشَ مُوسَى ثَلَاثَةَ أَشْهُرٍ عَلَى رَغْمِ الشُّرْطَةِ وَرَقَابَتِهِمْ.',
          en: 'And Mūsā lived three months, in spite of the police and their surveillance.',
          tokens: [
            { surface: 'وَعَاشَ', lemma: 'عَاشَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ي ش', gloss: 'to live; and lived' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'ثَلَاثَةَ', lemma: 'ثَلَاثَة', pos: 'num', features: 'acc.constr', gloss: 'three' },
            { surface: 'أَشْهُرٍ', lemma: 'شَهْر', pos: 'noun', features: 'pl.indef.gen', gloss: 'months' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'رَغْمِ', lemma: 'رَغْم', pos: 'noun', features: 'constr.gen', gloss: 'in spite of' },
            { surface: 'الشُّرْطَةِ', lemma: 'شُرْطَة', pos: 'noun', features: 'def.gen', gloss: 'the police' },
            { surface: 'وَرَقَابَتِهِمْ', lemma: 'رَقَابَة', pos: 'noun', features: 'conj+gen+3mp', gloss: 'and their surveillance' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَمْ شَهْرًا عَاشَ مُوسَى عَلَى رَغْمِ الشُّرْطَةِ وَرَقَابَتِهِمْ؟',
          options: ['ثَلَاثَةَ أَشْهُرٍ', 'سِتَّةَ أَشْهُرٍ', 'شَهْرًا وَاحِدًا'],
          answer: 0,
          qEn: 'How many months did Mūsā live in spite of the police and their surveillance?',
          optionsEn: ['Three months', 'Six months', 'One month'],
        },
        {
          q: 'مَنْ وَالِدُ مُوسَى؟',
          options: ['عِمْرَانُ', 'فِرْعَوْنُ', 'هَامَانُ'],
          answer: 0,
          qEn: "Who is Mūsā's father?",
          optionsEn: ['ʿImrān', 'Pharaoh', 'Hāmān'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وُلِدَ ذَلِكَ الْمَوْلُودُ الَّذِي قَدَّرَ اللَّهُ أَنْ',
        post: 'مُلْكُ فِرْعَوْنَ عَلَى يَدِهِ.',
        en: "That newborn was born, the one Allah had decreed that Pharaoh's kingdom would be lost through.",
        options: ['يَذْهَبَ', 'يَذْهَبُ', 'ذَهَبَ', 'يَذْهَبُونَ'],
        answer: 0,
        rationales: [
          'Subjunctive, 3rd masculine singular -- required after أَنْ, matching the taught pattern.',
          'Indicative -- wrong mood; أَنْ governs the subjunctive.',
          'Perfect -- wrong tense; the decree looks ahead, not to a completed event.',
          'Plural -- wrong number; the subject مُلْكُ ("the dominion") is singular.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وُلِدَ ذَلِكَ الْمَوْلُودُ الَّذِي قَدَّرَ اللَّهُ أَنْ',
        post: 'خَلَاصُ بَنِي إِسْرَائِيلَ عَلَى يَدِهِ.',
        en: 'That newborn was born, the one Allah had decreed that the deliverance of the Children of Israel would come through.',
        options: ['يَكُونَ', 'كَانَ', 'تَكُونَ', 'يَكُونُونَ'],
        answer: 0,
        rationales: [
          'Subjunctive, 3rd masculine singular -- required after أَنْ, matching the taught pattern.',
          'Perfect -- wrong tense; the decree looks ahead.',
          '3rd feminine singular -- wrong gender; the subject خَلَاصُ is masculine.',
          'Plural -- wrong number; خَلَاصُ is singular.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخَافُ فِرْعَوْنُ مُوسَى',
        pre: '',
        post: 'فِرْعَوْنُ مُوسَى',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَخَافُ', 'يَخَافُ', 'تَخَافُ', 'نَخَافُ'],
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
        base: 'يَخَافُ فِرْعَوْنُ مُوسَى',
        pre: '',
        post: 'فِرْعَوْنُ مُوسَى',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَخَافُونَ', 'يَخَافُ', 'تَخَافُ', 'نَخَافُ'],
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

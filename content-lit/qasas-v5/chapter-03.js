// قَصَصُ النَّبِيِّينَ, volume 5 «نَاقَةُ ثَمُودَ», chapter 3 -- عِبَادَةُ الْأَصْنَامِ.
// Printed pages 98 (from ch3's own heading box, partway down the page right
// after ch2's closing line) - 99 (ending before ch4's own box صَالِحٌ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ). Transcribed by hand from the scan (vision OCR,
// 300dpi render) against ../CHAPTER-FORMAT.md and QASAS_VOLUME_MAP.md's
// volume 5 table.
//
// Thamūd's arrogance (ch2) was not enough for them: they went further and
// carved idols out of stone to worship, just as Nūḥ's people and ʿĀd had
// done before them -- Allah had made them masters over stone, but out of
// their own ignorance they became its servants. The chapter turns to the
// narrator's own outrage, quoting Qur'an 10:44 on Allah never wronging
// people (people wrong themselves), then a string of rhetorical questions
// pressing the absurdity: the very stone they carve with their own hands
// cannot refuse or disobey them, yet they submit and fall prostrate before
// it -- does the strong worship the weak? does a master bow to his own
// slave? -- closing on the consequence: forgetting Allah, they forgot
// themselves, refused to worship Him, and so Allah abased them.
//
// Grammar / lexical notes:
//   -- سَاجِدِينَ (qs-v5-c03-014, "prostrating") is the corpus's existing
//      lemma سَاجِد, already tagged pos 'adj', features 'pl.acc' elsewhere
//      (qasas-v2 ch1/ch24) for exactly this circumstantial-accusative
//      (حَال) use after وَقَعُوا -- "and fell, prostrating" -- so it is
//      tagged the same way here rather than treated as a new grammatical
//      shape, even though this is the first time this volume's own text
//      uses a حَال construction.
//   -- The interrogative hamza on أَيَعْبُدُ / أَيَسْجُدُ (qs-v5-c03-015/016) is
//      tagged as a fused 'part' proclitic before the verb's own impf.3ms,
//      matching the corpus's established pattern for a fused interrogative
//      أَ (cf. أَتَحْفَظُونَ -> 'part+impf.2mp', أَأَنتَ -> 'part+2ms').
//   -- ﴿إِنَّ اللَّهَ لَا يَظْلِمُ النَّاسَ شَيْئاً وَلَٰكِنَّ النَّاسَ أَنْفُسَهُمْ
//      يَظْلِمُونَ﴾ (Qur'an 10:44, qs-v5-c03-009/010) is tokenized and glossed
//      like ordinary narration, split into two ﴿﴾-bracketed fragments at
//      the وَلَٰكِنَّ boundary, per the qasas-v3 ch16 precedent for long ayah
//      runs. The printed mushaf spelling وَلَٰكِنَّ (with dagger-alif) is kept
//      verbatim in `ar`; its lemma is still لَكِنَّ, matching how the
//      mushaf-vs-plain-narration spelling distinction is handled elsewhere
//      in this corpus (cf. يَقَوْمِ vs يَا قَوْمِ in qasas-v3 ch16). In the
//      second fragment, أَنْفُسَهُمْ is fronted before its governing verb
//      يَظْلِمُونَ for emphasis ("it is themselves that people wrong");
//      النَّاسَ is tagged accusative as the ism of لَكِنَّ, and أَنْفُسَهُمْ is
//      tagged as the (fronted) direct object of يَظْلِمُونَ.
//   -- Several clause boundaries split a single printed run at a
//      coordinating وَ/بَلْ or before a قَدْ-clause even where the source
//      prints no comma (qs-v5-c03-001/002, 003/004 splits at the comma
//      that is present; 005/006, 007 kept whole, 008 kept whole, 011/012/
//      013 split at ! and at the إِنَّ-subject/predicate boundary, 015/016
//      split at each ؟) -- matching the shared brief's "when in doubt,
//      split" guidance and this volume's own established practice from
//      chapter 2.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لَمْ، هَذَا، بَلْ، نَحَتَ،
//      حِجَارَة، عَبَدَ، صَنَم، صَارَ، كَمَا، كَانَ، أُمَّة، نُوح، كَذَلِكَ، عَاد، إِنَّ،
//      اللَّه، قَدْ، جَعَلَ، مَلِك، لَكِنَّ، مِنْ، رَزَقَ، طَيِّب، أَهَانَ، نَفْس،
//      إِنْسَان، لَا، ظَلَمَ، نَاس، شَيْء، عَجَب، حَجَر، الَّذِي، يَد، أَبَى، خَضَعَ،
//      لِ، وَقَعَ، قَوِيّ، ضَعِيف، سَيِّد، عَبْد، نَسِيَ، أَنْ (all already taught)
//      are NOT re-listed in newWords here.
//
// 6 new words (كَفَى، جَهْل، عَابِد، كَرَّمَ، عَصَى، أَذَلَّ).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch3',
  title: { ar: 'عِبَادَةُ الْأَصْنَامِ', en: 'The Worship of Idols' },
  newWords: ['كَفَى', 'جَهْل', 'عَابِد', 'كَرَّمَ', 'عَصَى', 'أَذَلَّ'],
  lemmas: {
    كَفَى: { gloss: 'to suffice, be enough' },
    جَهْل: { gloss: 'ignorance' },
    عَابِد: { gloss: 'a worshipper' },
    كَرَّمَ: { gloss: 'to honor, ennoble' },
    عَصَى: { gloss: 'to disobey' },
    أَذَلَّ: { gloss: 'to abase, humiliate' },
  },
  paragraphs: [
    {
      en: "Yet this was not enough for them -- rather, they carved the stone and worshipped idols. And they came to worship the stone just as Nūḥ's nation had worshipped it, and so did ʿĀd. Allah had indeed made them kings over stone, but out of their own ignorance they became worshippers of stone. Allah had honored them and provided for them from the good things, but they disgraced themselves and disgraced mankind. \"Indeed, Allah does not wrong the people in the least, but it is themselves that the people wrong.\" How astonishing! The stone that they carve with their own hands does not refuse and does not disobey them -- yet they submitted to it and fell down prostrating! Does the strong worship the weak? Does the master bow down to his own servant? But they forgot Allah, so they forgot themselves, and refused to worship Allah, so Allah abased them.",
      sentences: [
        {
          id: 'qs-v5-c03-001',
          ar: 'وَلَمْ يَكْفِهِمْ هَذَا',
          en: 'Yet this was not enough for them,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and...not, yet...not' },
            { surface: 'يَكْفِهِمْ', lemma: 'كَفَى', pos: 'verb', features: 'impf.3ms+3mp', root: 'ك ف ي', gloss: 'to suffice, be enough; was not enough for them' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
          ],
        },
        {
          id: 'qs-v5-c03-002',
          ar: 'بَلْ نَحَتُوا الْحِجَارَةَ وَعَبَدُوا الْأَصْنَامَ.',
          en: 'rather, they carved the stone and worshipped idols.',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'نَحَتُوا', lemma: 'نَحَتَ', pos: 'verb', features: 'perf.3mp', root: 'ن ح ت', gloss: 'to carve; carved' },
            { surface: 'الْحِجَارَةَ', lemma: 'حِجَارَة', pos: 'noun', features: 'def.acc', gloss: 'the stone' },
            { surface: 'وَعَبَدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ع ب د', gloss: 'to worship; and worshipped' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'the idols' },
          ],
        },
        {
          id: 'qs-v5-c03-003',
          ar: 'وَصَارُوا يَعْبُدُونَ الْحِجَارَةَ كَمَا كَانَتْ أُمَّةُ نُوحٍ تَعْبُدُهَا،',
          en: "And they came to worship the stone just as Nūḥ's nation had worshipped it,",
          tokens: [
            { surface: 'وَصَارُوا', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ص ي ر', gloss: 'to become, come to; and came to' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', root: 'ع ب د', gloss: 'to worship; worship' },
            { surface: 'الْحِجَارَةَ', lemma: 'حِجَارَة', pos: 'noun', features: 'def.acc', gloss: 'the stone' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', root: 'ك و ن', gloss: 'to be; had been' },
            { surface: 'أُمَّةُ', lemma: 'أُمَّة', pos: 'noun', features: 'constr.nom', gloss: 'the nation of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
            { surface: 'تَعْبُدُهَا', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3fs+3fs', root: 'ع ب د', gloss: 'to worship; worshipped it' },
          ],
        },
        {
          id: 'qs-v5-c03-004',
          ar: 'وَكَذَلِكَ عَادٌ.',
          en: 'and so did ʿĀd.',
          tokens: [
            { surface: 'وَكَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and likewise' },
            { surface: 'عَادٌ', lemma: 'عَاد', pos: 'proper', features: 'nom', gloss: 'ʿĀd' },
          ],
        },
        {
          id: 'qs-v5-c03-005',
          ar: 'إِنَّ اللَّهَ قَدْ جَعَلَهُمْ مُلُوكَ الْحِجَارَةِ',
          en: 'Allah had indeed made them kings over stone,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed, already' },
            { surface: 'جَعَلَهُمْ', lemma: 'جَعَلَ', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to make; made them' },
            { surface: 'مُلُوكَ', lemma: 'مَلِك', pos: 'noun', features: 'pl.constr.acc', root: 'م ل ك', gloss: 'kings of' },
            { surface: 'الْحِجَارَةِ', lemma: 'حِجَارَة', pos: 'noun', features: 'def.gen', gloss: 'the stone' },
          ],
        },
        {
          id: 'qs-v5-c03-006',
          ar: 'وَلَكِنَّهُمْ مِنْ جَهْلِهِمْ صَارُوا عُبَّادَ الْحِجَارَةِ.',
          en: 'but out of their own ignorance they became worshippers of stone.',
          tokens: [
            { surface: 'وَلَكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'out of, from' },
            { surface: 'جَهْلِهِمْ', lemma: 'جَهْل', pos: 'noun', features: 'gen+3mp', root: 'ج ه ل', gloss: 'their ignorance' },
            { surface: 'صَارُوا', lemma: 'صَارَ', pos: 'verb', features: 'perf.3mp', root: 'ص ي ر', gloss: 'to become; became' },
            { surface: 'عُبَّادَ', lemma: 'عَابِد', pos: 'noun', features: 'pl.constr.acc', root: 'ع ب د', gloss: 'worshippers of' },
            { surface: 'الْحِجَارَةِ', lemma: 'حِجَارَة', pos: 'noun', features: 'def.gen', gloss: 'the stone' },
          ],
        },
        {
          id: 'qs-v5-c03-007',
          ar: 'إِنَّ اللَّهَ كَرَّمَهُمْ وَرَزَقَهُمْ مِنَ الطَّيِّبَاتِ.',
          en: 'Allah had honored them and provided for them from the good things.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'كَرَّمَهُمْ', lemma: 'كَرَّمَ', pos: 'verb', features: 'perf.3ms+3mp', root: 'ك ر م', gloss: 'to honor, ennoble; honored them' },
            { surface: 'وَرَزَقَهُمْ', lemma: 'رَزَقَ', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to provide; and provided for them' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, with' },
            { surface: 'الطَّيِّبَاتِ', lemma: 'طَيِّب', pos: 'noun', features: 'pl.def.gen', gloss: 'the good things' },
          ],
        },
        {
          id: 'qs-v5-c03-008',
          ar: 'وَلَكِنَّهُمْ أَهَانُوا أَنْفُسَهُمْ وَأَهَانُوا الْإِنْسَانَ.',
          en: 'But they disgraced themselves and disgraced mankind.',
          tokens: [
            { surface: 'وَلَكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'أَهَانُوا', lemma: 'أَهَانَ', pos: 'verb', features: 'perf.3mp', root: 'ه و ن', gloss: 'to disgrace, insult; disgraced' },
            { surface: 'أَنْفُسَهُمْ', lemma: 'نَفْس', pos: 'noun', features: 'pl.acc+3mp', root: 'ن ف س', gloss: 'themselves' },
            { surface: 'وَأَهَانُوا', lemma: 'أَهَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ه و ن', gloss: 'to disgrace, insult; and disgraced' },
            { surface: 'الْإِنْسَانَ', lemma: 'إِنْسَان', pos: 'noun', features: 'def.acc', gloss: 'mankind, humanity' },
          ],
        },
        {
          id: 'qs-v5-c03-009',
          ar: '﴿إِنَّ اللَّهَ لَا يَظْلِمُ النَّاسَ شَيْئاً',
          en: '"Indeed, Allah does not wrong the people in the least,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَظْلِمُ', lemma: 'ظَلَمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to wrong; wrongs' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', root: 'ن و س', gloss: 'the people' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', root: 'ش ي أ', gloss: 'anything, in the least' },
          ],
        },
        {
          id: 'qs-v5-c03-010',
          ar: 'وَلَٰكِنَّ النَّاسَ أَنْفُسَهُمْ يَظْلِمُونَ﴾.',
          en: 'but it is themselves that the people wrong."',
          tokens: [
            { surface: 'وَلَٰكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part', gloss: 'but' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', root: 'ن و س', gloss: 'the people' },
            { surface: 'أَنْفُسَهُمْ', lemma: 'نَفْس', pos: 'noun', features: 'pl.acc+3mp', root: 'ن ف س', gloss: 'themselves' },
            { surface: 'يَظْلِمُونَ', lemma: 'ظَلَمَ', pos: 'verb', features: 'impf.3mp', gloss: 'to wrong; wrong' },
          ],
        },
        {
          id: 'qs-v5-c03-011',
          ar: 'عَجَباً!',
          en: 'How astonishing!',
          tokens: [
            { surface: 'عَجَباً', lemma: 'عَجَب', pos: 'noun', features: 'indef.acc', gloss: 'a wonder, something amazing' },
          ],
        },
        {
          id: 'qs-v5-c03-012',
          ar: 'إِنَّ الْحَجَرَ الَّذِي يَنْحِتُونَهُ بِأَيْدِيهِمْ',
          en: 'The stone that they carve with their own hands',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الْحَجَرَ', lemma: 'حَجَر', pos: 'noun', features: 'def.acc', gloss: 'the stone' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'that, which' },
            { surface: 'يَنْحِتُونَهُ', lemma: 'نَحَتَ', pos: 'verb', features: 'impf.3mp+3ms', root: 'ن ح ت', gloss: 'to carve; they carve it' },
            { surface: 'بِأَيْدِيهِمْ', lemma: 'يَد', pos: 'noun', features: 'prep+pl.gen+3mp', root: 'ي د ي', gloss: 'with their hands' },
          ],
        },
        {
          id: 'qs-v5-c03-013',
          ar: 'فَلَا يَأْبَى وَلَا يَعْصِيهِمْ.',
          en: 'does not refuse and does not disobey them.',
          tokens: [
            { surface: 'فَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'yet not, and not' },
            { surface: 'يَأْبَى', lemma: 'أَبَى', pos: 'verb', features: 'impf.3ms', root: 'أ ب ي', gloss: 'to refuse; refuses' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَعْصِيهِمْ', lemma: 'عَصَى', pos: 'verb', features: 'impf.3ms+3mp', root: 'ع ص ي', gloss: 'to disobey; disobeys them' },
          ],
        },
        {
          id: 'qs-v5-c03-014',
          ar: 'قَدْ خَضَعُوا لَهُ وَوَقَعُوا سَاجِدِينَ!',
          en: 'Yet they submitted to it and fell down prostrating!',
          tokens: [
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed, already' },
            { surface: 'خَضَعُوا', lemma: 'خَضَعَ', pos: 'verb', features: 'perf.3mp', root: 'خ ض ع', gloss: 'to submit, yield; submitted' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to it' },
            { surface: 'وَوَقَعُوا', lemma: 'وَقَعَ', pos: 'verb', features: 'conj+perf.3mp', root: 'و ق ع', gloss: 'to fall; and fell' },
            { surface: 'سَاجِدِينَ', lemma: 'سَاجِد', pos: 'adj', features: 'pl.acc', root: 'س ج د', gloss: 'prostrating' },
          ],
        },
        {
          id: 'qs-v5-c03-015',
          ar: 'أَيَعْبُدُ الْقَوِيُّ الضَّعِيفَ؟',
          en: 'Does the strong worship the weak?',
          tokens: [
            { surface: 'أَيَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'part+impf.3ms', root: 'ع ب د', gloss: 'to worship; does...worship' },
            { surface: 'الْقَوِيُّ', lemma: 'قَوِيّ', pos: 'adj', features: 'def.nom', root: 'ق و ي', gloss: 'the strong one' },
            { surface: 'الضَّعِيفَ', lemma: 'ضَعِيف', pos: 'adj', features: 'def.acc', root: 'ض ع ف', gloss: 'the weak one' },
          ],
        },
        {
          id: 'qs-v5-c03-016',
          ar: 'أَيَسْجُدُ السَّيِّدُ لِعَبْدِهِ؟',
          en: 'Does the master bow down to his own servant?',
          tokens: [
            { surface: 'أَيَسْجُدُ', lemma: 'سَجَدَ', pos: 'verb', features: 'part+impf.3ms', root: 'س ج د', gloss: 'to prostrate; does...bow down' },
            { surface: 'السَّيِّدُ', lemma: 'سَيِّد', pos: 'noun', features: 'def.nom', root: 'س و د', gloss: 'the master' },
            { surface: 'لِعَبْدِهِ', lemma: 'عَبْد', pos: 'noun', features: 'prep+gen+3ms', root: 'ع ب د', gloss: 'to his servant' },
          ],
        },
        {
          id: 'qs-v5-c03-017',
          ar: 'وَلَكِنَّهُمْ نَسُوا اللَّهَ فَنَسُوا أَنْفُسَهُمْ،',
          en: 'But they forgot Allah, so they forgot themselves,',
          tokens: [
            { surface: 'وَلَكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'نَسُوا', lemma: 'نَسِيَ', pos: 'verb', features: 'perf.3mp', gloss: 'to forget; forgot' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'فَنَسُوا', lemma: 'نَسِيَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to forget; so forgot' },
            { surface: 'أَنْفُسَهُمْ', lemma: 'نَفْس', pos: 'noun', features: 'pl.acc+3mp', root: 'ن ف س', gloss: 'themselves' },
          ],
        },
        {
          id: 'qs-v5-c03-018',
          ar: 'وَأَبَوْا أَنْ يَعْبُدُوا اللَّهَ فَأَذَلَّهُمُ اللَّهُ.',
          en: 'and refused to worship Allah, so Allah abased them.',
          tokens: [
            { surface: 'وَأَبَوْا', lemma: 'أَبَى', pos: 'verb', features: 'conj+perf.3mp', root: 'أ ب ي', gloss: 'to refuse; and refused' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', root: 'ع ب د', gloss: 'to worship; worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'فَأَذَلَّهُمُ', lemma: 'أَذَلَّ', pos: 'verb', features: 'conj+perf.3ms+3mp', root: 'ذ ل ل', gloss: 'to abase, humiliate; so abased them' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَتْ ثَمُودُ بِالْحِجَارَةِ؟',
          options: ['نَحَتُوهَا وَعَبَدُوا الْأَصْنَامَ الَّتِي صَنَعُوهَا مِنْهَا', 'بَاعُوهَا لِعَادٍ', 'بَنَوْا بِهَا مَسَاجِدَ لِعِبَادَةِ اللَّهِ'],
          answer: 0,
          qEn: 'What did Thamūd do with the stone?',
          optionsEn: ['They carved it and worshipped the idols they made from it', 'They sold it to ʿĀd', 'They built mosques from it to worship Allah'],
        },
        {
          q: 'مَاذَا قَالَ اللَّهُ تَعَالَى فِي الْآيَةِ عَنِ الظُّلْمِ؟',
          options: ['إِنَّ اللَّهَ لَا يَظْلِمُ النَّاسَ شَيْئاً وَلَٰكِنَّ النَّاسَ أَنْفُسَهُمْ يَظْلِمُونَ', 'إِنَّ اللَّهَ يَظْلِمُ مَنْ يَشَاءُ', 'إِنَّ النَّاسَ لَا يَظْلِمُونَ أَنْفُسَهُمْ أَبَداً'],
          answer: 0,
          qEn: 'What did Allah say in the verse about wrongdoing?',
          optionsEn: ['Indeed Allah does not wrong the people at all, but the people wrong themselves', 'Indeed Allah wrongs whomever He wills', 'Indeed the people never wrong themselves'],
        },
        {
          q: 'لِمَاذَا أَذَلَّ اللَّهُ ثَمُودَ؟',
          options: ['لِأَنَّهُمْ نَسُوا اللَّهَ وَأَبَوْا أَنْ يَعْبُدُوهُ', 'لِأَنَّهُمْ لَمْ يَنْحِتُوا مَا يَكْفِي مِنَ الْحِجَارَةِ', 'لِأَنَّهُمْ رَفَضُوا بِنَاءَ الْقُصُورِ'],
          answer: 0,
          qEn: 'Why did Allah abase Thamūd?',
          optionsEn: ['Because they forgot Allah and refused to worship Him', 'Because they had not carved enough stone', 'Because they refused to build palaces'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَكِنَّهُمْ مِنْ جَهْلِهِمْ',
        post: 'عُبَّادَ الْحِجَارَةِ.',
        en: 'but out of their own ignorance they became worshippers of stone.',
        options: ['صَارُوا', 'صَارَ', 'يَصِيرُونَ', 'صِرْنَ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- matches the plural subject هُمْ (Thamūd).',
          '3rd masculine singular -- wrong number; the subject is plural.',
          'Imperfect -- wrong tense; the sentence narrates a completed change in the past.',
          '3rd feminine plural -- wrong gender; هُمْ is masculine.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَلَا يَأْبَى وَلَا',
        post: '.',
        en: 'does not refuse and does not disobey them.',
        options: ['يَعْصِيهِمْ', 'يَعْصِيهِمَا', 'عَصَاهُمْ', 'تَعْصِيهِمْ'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect + 3rd masculine plural object suffix -- matches الْحَجَرُ ("the stone," masc. singular) disobeying "them" (the people).',
          'Dual object suffix -- wrong number; "them" here is plural, not two.',
          'Perfect -- wrong tense; it must match يَأْبَى, which is imperfect.',
          '2nd/3rd feminine singular -- wrong gender; الْحَجَرُ is masculine.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَبَوْا أَنْ',
        post: 'اللَّهَ فَأَذَلَّهُمُ اللَّهُ.',
        en: 'and refused to worship Allah, so Allah abased them.',
        options: ['يَعْبُدُوا', 'يَعْبُدُونَ', 'عَبَدُوا', 'يَعْبُدَ'],
        answer: 0,
        rationales: [
          'Subjunctive imperfect, 3rd masculine plural -- أَنْ drops the نَ from the plural imperfect.',
          'Indicative imperfect (with نَ) -- wrong mood; أَنْ requires the subjunctive, which drops the نَ.',
          'Perfect -- wrong tense; أَنْ governs the imperfect, not the perfect.',
          '3rd masculine singular subjunctive -- wrong number; the subject هُمْ is plural.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَعْبُدُ الرَّجُلُ الْحِجَارَةَ',
        pre: '',
        post: 'الْحِجَارَةَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَعْبُدُ', 'يَعْبُدُ', 'تَعْبُدُ', 'نَعْبُدُ'],
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
        base: 'يَعْبُدُ الرَّجُلُ الْحِجَارَةَ',
        pre: '',
        post: 'الْحِجَارَةَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَعْبُدُ', 'يَعْبُدُ', 'أَعْبُدُ', 'نَعْبُدُ'],
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
        base: 'يَعْبُدُ الرَّجُلُ الْحِجَارَةَ',
        pre: '',
        post: 'الْحِجَارَةَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَعْبُدُونَ', 'يَعْبُدُ', 'تَعْبُدُ', 'نَعْبُدُ'],
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

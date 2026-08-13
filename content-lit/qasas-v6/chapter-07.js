// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 7 -- فِي النِّيلِ.
// Printed pages 120-121, ending right before ch8's heading «٨ - فِي قَصْرِ
// فِرْعَوْنَ» which opens partway down page 121. Transcribed by hand from
// the scan (vision OCR, 200dpi render) against ../CHAPTER-FORMAT.md.
//
// Mūsā's mother's fear for her newborn, Allah's inspiration to place him
// in a chest on the Nile, and the closing citation of Qur'an 28:7 (the
// actual revelation) confirming what she was told to do.
//
// Grammar / lexical notes:
//   -- Several long printed sentences with no internal comma are split at
//      a clause boundary anyway (qs-v6-c07-007/-008 stays whole, but note
//      -004/-005/-006 and -012/-013/-014 are split at commas that ARE
//      present in print), consistent with "sentence = one clause" per
//      CHAPTER-FORMAT.md and the corpus precedent already used in ch6's
//      header. qs-v6-c07-006/-018 keep "عُيُونُ الْغُرَابِ وَشَامَّةُ النَّمْلِ"
//      ("eyes of a crow, nose of an ant" -- an idiom for uncannily sharp
//      senses) together across its printed comma rather than fragmenting
//      the idiom into a 2-token orphan.
//   -- The Qur'an quotation (28:7, qs-v6-c07-021 through -024) is
//      transcribed in full with ﴿ ﴾ exactly as printed, split at natural
//      pause points into short fragments and tokenized/translated like
//      any other clause, per the corpus's real precedent (see
//      qasas-v2/chapter-22.js) -- not specially flagged or excluded.
//   -- رَادُّوهُ / جَاعِلُوهُ (qs-v6-c07-024) are active participles (اسم
//      فاعل) in pseudo-construct with an attached object pronoun ("surely
//      returning him," "making him") -- tagged pos 'noun' with the
//      pronoun as a bare person segment, since CHAPTER-FORMAT.md's
//      enclitic mapping documents only the plain possessive case
//      (gen+1s) and not this participle-plus-object pattern. Flagging
//      for a second look rather than asserting confidence.
//   -- الْمُرْسَلِينَ reuses the already-taught verb أَرْسَلَ (qasas-v1
//      ch14) rather than a new lemma -- transparent passive participle
//      used substantively ("those sent," i.e. messengers/prophets).
//   -- أَحْفَظَ (qs-v6-c07-015) is a new elative-pattern (أَفْعَل) adjective
//      lemma, "safer/more protective," built on the already-taught verb
//      حَفِظَ (qasas-v3, "to protect, guard") -- not folded into that
//      entry, matching how other elatives (أَكْبَر، أَحَبّ) got their own
//      lemma rows elsewhere in the corpus.
//   -- Basic particles/function words (لَكِنْ, هَذَا, ذَلِكَ, لَيْسَ, ثُمَّ, مَا,
//      مَنْ, مَاذَا) are treated as baseline per the convention noted in
//      ch6's header -- inline-glossed, not added to newWords.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): خَافَ، أُمّ، مُوسَى، عَلَى،
//      مَوْلُود (qasas-v6 ch6)، جَمِيل (qasas-v2 ch1)، كَيْفَ، لَا، طِفْل
//      (qasas-v1 ch12)، قَدْ، شُرْطَة (qasas-v6 ch6)، فِي، أُمّ، أَخْفَى (qasas-v2
//      ch7)، اللَّه، عَيْن (qasas-v2 ch23)، أَلْقَى (qasas-v1 ch6)، أَكْبَر،
//      حَفِظَ، بَيْت (qasas-v1 ch1)، مَكَان (qasas-v2 ch9)، عَدُوّ (qasas-v1
//      ch9)، فَعَلَ، أَمَرَ (qasas-v1 ch9)، وَضَعَ (qasas-v1 ch3)، صَبَرَ
//      (qasas-v2 ch5)، أَوْحَى (qasas-v3 ch11)، حَزِنَ (qasas-v2 ch4)، رَدَّ
//      (qasas-v2 ch19)، جَعَلَ (qasas-v1 ch8)، أَرْسَلَ (qasas-v1 ch14)، إِنَّ،
//      إِذَا، مِنْ، إِلَى، بِ، وَ، فَكَّرَ (qasas-v2 ch21)، فِي
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 22 new words (مِرْصَاد، اِخْتَطَفَ، عَشَرَة، حِجْر، أُسْرَة، صَنَعَ، غُرَاب،
// شَامَّة، نَمْل، هُنَالِكَ، أَغَاثَ، أَلْهَمَ، صُنْدُوق، حَنُون، أَرْضَعَ، تَنَفَّسَ،
// تَوَكَّلَ، اِعْتَمَدَ، وَحْي، أَحْفَظَ، جَزِعَ، يَمّ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch7',
  title: { ar: 'فِي النِّيلِ', en: 'In the Nile' },
  newWords: [
    'مِرْصَاد', 'اِخْتَطَفَ', 'عَشَرَة', 'حِجْر', 'صَنَعَ', 'غُرَاب',
    'شَامَّة', 'نَمْل', 'هُنَالِكَ', 'أَلْهَمَ', 'صُنْدُوق', 'حَنُون',
    'أَرْضَعَ', 'تَنَفَّسَ', 'تَوَكَّلَ', 'اِعْتَمَدَ', 'وَحْي', 'أَحْفَظَ', 'جَزِعَ', 'يَمّ',
  ],
  lemmas: {
    مِرْصَاد: { gloss: 'ambush, place of watching; "bi-mirṣād" -- lying in wait' },
    اِخْتَطَفَ: { gloss: 'to snatch away, kidnap' },
    عَشَرَة: { gloss: 'ten; (pl.) tens, dozens' },
    حِجْر: { gloss: 'lap, bosom, care' },
    صَنَعَ: { gloss: 'to do, make' },
    غُرَاب: { gloss: 'crow, raven' },
    شَامَّة: { gloss: 'sense of smell' },
    نَمْل: { gloss: 'ants' },
    هُنَالِكَ: { gloss: 'thereupon, at that point' },
    أَلْهَمَ: { gloss: 'to inspire' },
    صُنْدُوق: { gloss: 'chest, box' },
    حَنُون: { gloss: 'tender, affectionate' },
    أَرْضَعَ: { gloss: 'to nurse, breastfeed (a baby)' },
    تَنَفَّسَ: { gloss: 'to breathe' },
    تَوَكَّلَ: { gloss: 'to put one\'s trust in, rely on (Allah)' },
    اِعْتَمَدَ: { gloss: 'to depend, rely on' },
    وَحْي: { gloss: 'revelation' },
    أَحْفَظَ: { gloss: 'safer, more protective (elative of حَفِظَ)' },
    جَزِعَ: { gloss: 'to be distressed, anxious' },
    يَمّ: { gloss: 'sea, large body of water' },
  },
  paragraphs: [
    {
      en: "But Mūsā's mother feared for her beautiful newborn -- how could she not, when the enemy of children lay in wait, when the police had already snatched away dozens of children from their own mothers' arms, even within her own family? What was the poor mother to do, and where could she hide this beautiful child, when the police had the eyes of a crow and the sense of smell of an ant? Then Allah came to her rescue and inspired her to place him in a chest and cast him into the Nile. Allah is greater! How could a loving mother place her child in a chest and cast him into the river -- who would nurse him inside it, how would he even breathe? All of this weighed on the tender mother's mind, but she put her trust in Allah and relied on His revelation -- after all, no house could keep a child safer than that chest.",
      sentences: [
        {
          id: 'qs-v6-c07-001',
          ar: 'وَلَكِنْ خَافَتْ أُمُّ مُوسَى عَلَى مَوْلُودِهَا الْجَمِيلِ،',
          en: "But Mūsā's mother feared for her beautiful newborn,",
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'خَافَتْ', lemma: 'خَافَ', pos: 'verb', features: 'perf.3fs', gloss: 'to fear; feared' },
            { surface: 'أُمُّ', lemma: 'أُمّ', pos: 'noun', features: 'constr.nom', gloss: 'the mother of' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for, over' },
            { surface: 'مَوْلُودِهَا', lemma: 'مَوْلُود', pos: 'noun', features: 'gen+3fs', gloss: 'her newborn' },
            { surface: 'الْجَمِيلِ', lemma: 'جَمِيل', pos: 'adj', features: 'def.gen', gloss: 'beautiful' },
          ],
        },
        {
          id: 'qs-v6-c07-002',
          ar: 'وَكَيْفَ لَا تَخَافُ وَعَدُوُّ الْأَطْفَالِ بِمِرْصَادٍ؟',
          en: 'and how could she not fear, when the enemy of children lay in wait?',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3fs', gloss: 'to fear; would she fear' },
            { surface: 'وَعَدُوُّ', lemma: 'عَدُوّ', pos: 'noun', features: 'conj+constr.nom', gloss: 'while the enemy of' },
            { surface: 'الْأَطْفَالِ', lemma: 'طِفْل', pos: 'noun', features: 'pl.def.gen', gloss: 'the children' },
            { surface: 'بِمِرْصَادٍ', lemma: 'مِرْصَاد', pos: 'noun', features: 'prep+indef.gen', gloss: 'lying in wait' },
          ],
        },
        {
          id: 'qs-v6-c07-003',
          ar: 'وَكَيْفَ لَا تَخَافُ وَقَدِ اخْتَطَفَتِ الشُّرْطَةُ عَشَرَاتٍ مِنَ الْأَطْفَالِ مِنْ حِجْرِ الْأُمَّهَاتِ فِي أُسْرَتِهَا.',
          en: "And how could she not fear, when the police had already snatched away dozens of children from their mothers' laps, even within her own family.",
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3fs', gloss: 'to fear; would she fear' },
            { surface: 'وَقَدِ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'when already' },
            { surface: 'اخْتَطَفَتِ', lemma: 'اِخْتَطَفَ', pos: 'verb', features: 'perf.3fs', root: 'خ ط ف', gloss: 'to snatch away; snatched away' },
            { surface: 'الشُّرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'def.nom', gloss: 'the police' },
            { surface: 'عَشَرَاتٍ', lemma: 'عَشَرَة', pos: 'noun', features: 'pl.indef.acc', gloss: 'dozens' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْأَطْفَالِ', lemma: 'طِفْل', pos: 'noun', features: 'pl.def.gen', gloss: 'the children' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'حِجْرِ', lemma: 'حِجْر', pos: 'noun', features: 'constr.gen', gloss: 'the lap of' },
            { surface: 'الْأُمَّهَاتِ', lemma: 'أُمّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the mothers' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'within' },
            { surface: 'أُسْرَتِهَا', lemma: 'أُسْرَة', pos: 'noun', features: 'gen+3fs', gloss: 'her (own) family' },
          ],
        },
        {
          id: 'qs-v6-c07-004',
          ar: 'مَاذَا تَصْنَعُ الْأُمُّ الْمِسْكِينَةُ،',
          en: 'What was the poor mother to do,',
          tokens: [
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'part', features: 'part', gloss: 'what' },
            { surface: 'تَصْنَعُ', lemma: 'صَنَعَ', pos: 'verb', features: 'impf.3fs', gloss: 'to do, make; is to do' },
            { surface: 'الْأُمُّ', lemma: 'أُمّ', pos: 'noun', features: 'def.nom', gloss: 'the mother' },
            { surface: 'الْمِسْكِينَةُ', lemma: 'مِسْكِين', pos: 'adj', features: 'def.nom', gloss: 'poor, wretched' },
          ],
        },
        {
          id: 'qs-v6-c07-005',
          ar: 'وَأَيْنَ تُخْفِي هَذَا الْمَوْلُودَ الْجَمِيلَ',
          en: 'and where could she hide this beautiful newborn,',
          tokens: [
            { surface: 'وَأَيْنَ', lemma: 'أَيْن', pos: 'adv', features: 'conj+adv', gloss: 'and where' },
            { surface: 'تُخْفِي', lemma: 'أَخْفَى', pos: 'verb', features: 'impf.3fs', gloss: 'to hide, conceal; could she hide' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْمَوْلُودَ', lemma: 'مَوْلُود', pos: 'noun', features: 'def.acc', gloss: 'the newborn' },
            { surface: 'الْجَمِيلَ', lemma: 'جَمِيل', pos: 'adj', features: 'def.acc', gloss: 'beautiful' },
          ],
        },
        {
          id: 'qs-v6-c07-006',
          ar: 'وَالشُّرْطَةُ لَهُمْ عُيُونُ الْغُرَابِ، وَشَامَّةُ النَّمْلِ؟',
          en: 'when the police had the eyes of a crow and the sense of smell of an ant?',
          tokens: [
            { surface: 'وَالشُّرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'conj+def.nom', gloss: 'while the police' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'have' },
            { surface: 'عُيُونُ', lemma: 'عَيْن', pos: 'noun', features: 'pl.constr.nom', gloss: 'the eyes of' },
            { surface: 'الْغُرَابِ', lemma: 'غُرَاب', pos: 'noun', features: 'def.gen', gloss: 'the crow' },
            { surface: 'وَشَامَّةُ', lemma: 'شَامَّة', pos: 'noun', features: 'conj+constr.nom', gloss: 'and the sense of smell of' },
            { surface: 'النَّمْلِ', lemma: 'نَمْل', pos: 'noun', features: 'def.gen', gloss: 'the ant' },
          ],
        },
        {
          id: 'qs-v6-c07-007',
          ar: 'هُنَالِكَ أَغَاثَ اللَّهُ الْأُمَّ الْمِسْكِينَةَ وَأَلْهَمَهَا أَنْ تَضَعَهُ فِي صُنْدُوقٍ وَتُلْقِيَهُ فِي النِّيلِ.',
          en: 'At that, Allah came to the poor mother\'s rescue and inspired her to place him in a chest and cast him into the Nile.',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'thereupon, at that point' },
            { surface: 'أَغَاثَ', lemma: 'أَغَاثَ', pos: 'verb', features: 'perf.3ms', root: 'غ و ث', gloss: 'to come to the rescue of; came to the rescue of' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'الْأُمَّ', lemma: 'أُمّ', pos: 'noun', features: 'def.acc', gloss: 'the mother' },
            { surface: 'الْمِسْكِينَةَ', lemma: 'مِسْكِين', pos: 'adj', features: 'def.acc', gloss: 'poor, wretched' },
            { surface: 'وَأَلْهَمَهَا', lemma: 'أَلْهَمَ', pos: 'verb', features: 'conj+perf.3ms+3fs', root: 'ل ه م', gloss: 'to inspire; and inspired her' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'تَضَعَهُ', lemma: 'وَضَعَ', pos: 'verb', features: 'impf.3fs+3ms', gloss: 'to place; she place him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'صُنْدُوقٍ', lemma: 'صُنْدُوق', pos: 'noun', features: 'indef.gen', gloss: 'a chest' },
            { surface: 'وَتُلْقِيَهُ', lemma: 'أَلْقَى', pos: 'verb', features: 'conj+impf.3fs+3ms', gloss: 'to cast, throw; and cast him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'النِّيلِ', lemma: 'نِيل', pos: 'proper', features: 'def.gen', gloss: 'the Nile' },
          ],
        },
        {
          id: 'qs-v6-c07-008',
          ar: 'اللَّهُ أَكْبَرُ!',
          en: 'Allah is greater!',
          tokens: [
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَكْبَرُ', lemma: 'أَكْبَر', pos: 'adj', features: 'nom', gloss: 'greatest, greater' },
          ],
        },
        {
          id: 'qs-v6-c07-009',
          ar: 'كَيْفَ تَضَعُ الْأُمُّ الْحَنُونُ طِفْلَهَا فِي صُنْدُوقٍ وَتُلْقِيهِ فِي النِّيلِ؟!',
          en: 'How could the tender mother place her child in a chest and cast him into the Nile?!',
          tokens: [
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'تَضَعُ', lemma: 'وَضَعَ', pos: 'verb', features: 'impf.3fs', gloss: 'to place; would place' },
            { surface: 'الْأُمُّ', lemma: 'أُمّ', pos: 'noun', features: 'def.nom', gloss: 'the mother' },
            { surface: 'الْحَنُونُ', lemma: 'حَنُون', pos: 'adj', features: 'def.nom', gloss: 'tender, affectionate' },
            { surface: 'طِفْلَهَا', lemma: 'طِفْل', pos: 'noun', features: 'acc+3fs', gloss: 'her child' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'صُنْدُوقٍ', lemma: 'صُنْدُوق', pos: 'noun', features: 'indef.gen', gloss: 'a chest' },
            { surface: 'وَتُلْقِيهِ', lemma: 'أَلْقَى', pos: 'verb', features: 'conj+impf.3fs+3ms', gloss: 'to cast; and cast him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'النِّيلِ', lemma: 'نِيل', pos: 'proper', features: 'def.gen', gloss: 'the Nile' },
          ],
        },
        {
          id: 'qs-v6-c07-010',
          ar: 'مَنْ يُرْضِعُ الطِّفْلَ فِي الصُّنْدُوقِ؟',
          en: 'Who will nurse the child inside the chest?',
          tokens: [
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'يُرْضِعُ', lemma: 'أَرْضَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to nurse; will nurse' },
            { surface: 'الطِّفْلَ', lemma: 'طِفْل', pos: 'noun', features: 'def.acc', gloss: 'the child' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'inside' },
            { surface: 'الصُّنْدُوقِ', lemma: 'صُنْدُوق', pos: 'noun', features: 'def.gen', gloss: 'the chest' },
          ],
        },
        {
          id: 'qs-v6-c07-011',
          ar: 'وَكَيْفَ يَتَنَفَّسُ الطِّفْلُ فِي الصُّنْدُوقِ؟!',
          en: 'And how will the child breathe inside the chest?!',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'يَتَنَفَّسُ', lemma: 'تَنَفَّسَ', pos: 'verb', features: 'impf.3ms', root: 'ن ف س', gloss: 'to breathe; will breathe' },
            { surface: 'الطِّفْلُ', lemma: 'طِفْل', pos: 'noun', features: 'def.nom', gloss: 'the child' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'inside' },
            { surface: 'الصُّنْدُوقِ', lemma: 'صُنْدُوق', pos: 'noun', features: 'def.gen', gloss: 'the chest' },
          ],
        },
        {
          id: 'qs-v6-c07-012',
          ar: 'كُلُّ ذَلِكَ فَكَّرَتْ فِيهِ الْأُمُّ الْحَنُونُ',
          en: 'All of that the tender mother thought about,',
          tokens: [
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom', gloss: 'all of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'فَكَّرَتْ', lemma: 'فَكَّرَ', pos: 'verb', features: 'perf.3fs', gloss: 'to think, ponder; thought' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'about it' },
            { surface: 'الْأُمُّ', lemma: 'أُمّ', pos: 'noun', features: 'def.nom', gloss: 'the mother' },
            { surface: 'الْحَنُونُ', lemma: 'حَنُون', pos: 'adj', features: 'def.nom', gloss: 'tender, affectionate' },
          ],
        },
        {
          id: 'qs-v6-c07-013',
          ar: 'وَلَكِنَّهَا تَوَكَّلَتْ عَلَى اللَّهِ،',
          en: 'but she put her trust in Allah,',
          tokens: [
            { surface: 'وَلَكِنَّهَا', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+3fs', gloss: 'but she' },
            { surface: 'تَوَكَّلَتْ', lemma: 'تَوَكَّلَ', pos: 'verb', features: 'perf.3fs', root: 'و ك ل', gloss: 'to trust, rely on; trusted' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v6-c07-014',
          ar: 'وَاعْتَمَدَتْ عَلَى وَحْيِ اللَّهِ.',
          en: "and relied on Allah's revelation.",
          tokens: [
            { surface: 'وَاعْتَمَدَتْ', lemma: 'اِعْتَمَدَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ع م د', gloss: 'to rely, depend on; and relied on' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'وَحْيِ', lemma: 'وَحْي', pos: 'noun', features: 'constr.gen', gloss: 'the revelation of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v6-c07-015',
          ar: 'وَلَيْسَ الْبَيْتُ أَحْفَظَ لِلطِّفْلِ مِنَ الصُّنْدُوقِ!',
          en: 'And the house is no safer for the child than the chest!',
          tokens: [
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to not be; and is not' },
            { surface: 'الْبَيْتُ', lemma: 'بَيْت', pos: 'noun', features: 'def.nom', gloss: 'the house' },
            { surface: 'أَحْفَظَ', lemma: 'أَحْفَظ', pos: 'adj', features: 'indef.acc', root: 'ح ف ظ', gloss: 'safer, more protective' },
            { surface: 'لِلطِّفْلِ', lemma: 'طِفْل', pos: 'noun', features: 'prep+def.gen', gloss: 'for the child' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'الصُّنْدُوقِ', lemma: 'صُنْدُوق', pos: 'noun', features: 'def.gen', gloss: 'the chest' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا خَافَتْ أُمُّ مُوسَى عَلَى مَوْلُودِهَا؟',
          options: ['لِأَنَّ الشُّرْطَةَ كَانَتْ تَخْتَطِفُ الْأَطْفَالَ', 'لِأَنَّهُ كَانَ مَرِيضاً', 'لِأَنَّ فِرْعَوْنَ كَانَ صَدِيقَهَا'],
          answer: 0,
          qEn: "Why did Mūsā's mother fear for her newborn?",
          optionsEn: ['Because the police were snatching children away', 'Because he was ill', 'Because Pharaoh was her friend'],
        },
        {
          q: 'مَاذَا أَلْهَمَ اللَّهُ أُمَّ مُوسَى أَنْ تَفْعَلَ؟',
          options: ['أَنْ تَضَعَهُ فِي صُنْدُوقٍ وَتُلْقِيَهُ فِي النِّيلِ', 'أَنْ تُخْفِيَهُ فِي بَيْتِ جَارَتِهَا', 'أَنْ تَهْرُبَ بِهِ إِلَى بَلَدٍ آخَرَ'],
          answer: 0,
          qEn: 'What did Allah inspire Mūsā\'s mother to do?',
          optionsEn: ['To place him in a chest and cast him into the Nile', "To hide him in her neighbor's house", 'To flee with him to another country'],
        },
      ],
    },
    {
      en: "Here, the police are everywhere, and the enemy of children lies in wait; they have the eyes of a crow and the sense of smell of an ant. So the poor mother did as Allah commanded her: she placed her beautiful child in a chest and cast him into the Nile. The tender mother was overcome with distress, then steadied herself and put her trust in Allah -- for Allah had revealed to Mūsā's mother: \"Nurse him, and when you fear for him, cast him into the sea, and do not fear and do not grieve: We will surely return him to you and make him one of the messengers.\"",
      sentences: [
        {
          id: 'qs-v6-c07-016',
          ar: 'هُنَا الشُّرْطَةُ فِي كُلِّ مَكَانٍ،',
          en: 'Here, the police are everywhere,',
          tokens: [
            { surface: 'هُنَا', lemma: 'هُنَا', pos: 'adv', features: 'adv', gloss: 'here' },
            { surface: 'الشُّرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'def.nom', gloss: 'the police' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'مَكَانٍ', lemma: 'مَكَان', pos: 'noun', features: 'indef.gen', gloss: 'place' },
          ],
        },
        {
          id: 'qs-v6-c07-017',
          ar: 'وَعَدُوُّ الْأَطْفَالِ بِمِرْصَادٍ.',
          en: 'and the enemy of children lies in wait.',
          tokens: [
            { surface: 'وَعَدُوُّ', lemma: 'عَدُوّ', pos: 'noun', features: 'conj+constr.nom', gloss: 'and the enemy of' },
            { surface: 'الْأَطْفَالِ', lemma: 'طِفْل', pos: 'noun', features: 'pl.def.gen', gloss: 'the children' },
            { surface: 'بِمِرْصَادٍ', lemma: 'مِرْصَاد', pos: 'noun', features: 'prep+indef.gen', gloss: 'lying in wait' },
          ],
        },
        {
          id: 'qs-v6-c07-018',
          ar: 'وَالشُّرْطَةُ لَهُمْ عُيُونُ الْغُرَابِ وَشَامَّةُ النَّمْلِ.',
          en: 'The police have the eyes of a crow and the sense of smell of an ant.',
          tokens: [
            { surface: 'وَالشُّرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'conj+def.nom', gloss: 'and the police' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'have' },
            { surface: 'عُيُونُ', lemma: 'عَيْن', pos: 'noun', features: 'pl.constr.nom', gloss: 'the eyes of' },
            { surface: 'الْغُرَابِ', lemma: 'غُرَاب', pos: 'noun', features: 'def.gen', gloss: 'the crow' },
            { surface: 'وَشَامَّةُ', lemma: 'شَامَّة', pos: 'noun', features: 'conj+constr.nom', gloss: 'and the sense of smell of' },
            { surface: 'النَّمْلِ', lemma: 'نَمْل', pos: 'noun', features: 'def.gen', gloss: 'the ant' },
          ],
        },
        {
          id: 'qs-v6-c07-019',
          ar: 'وَفَعَلَتِ الْأُمُّ الْمِسْكِينَةُ مَا أَمَرَهَا اللَّهُ وَوَضَعَتْ طِفْلَهَا الْجَمِيلَ فِي صُنْدُوقٍ وَأَلْقَتْهُ فِي النِّيلِ.',
          en: 'So the poor mother did as Allah commanded her: she placed her beautiful child in a chest and cast him into the Nile.',
          tokens: [
            { surface: 'وَفَعَلَتِ', lemma: 'فَعَلَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to do; and did' },
            { surface: 'الْأُمُّ', lemma: 'أُمّ', pos: 'noun', features: 'def.nom', gloss: 'the mother' },
            { surface: 'الْمِسْكِينَةُ', lemma: 'مِسْكِين', pos: 'adj', features: 'def.nom', gloss: 'poor, wretched' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'أَمَرَهَا', lemma: 'أَمَرَ', pos: 'verb', features: 'perf.3ms+3fs', gloss: 'to command; commanded her' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'وَوَضَعَتْ', lemma: 'وَضَعَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to place; and placed' },
            { surface: 'طِفْلَهَا', lemma: 'طِفْل', pos: 'noun', features: 'acc+3fs', gloss: 'her child' },
            { surface: 'الْجَمِيلَ', lemma: 'جَمِيل', pos: 'adj', features: 'def.acc', gloss: 'beautiful' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'صُنْدُوقٍ', lemma: 'صُنْدُوق', pos: 'noun', features: 'indef.gen', gloss: 'a chest' },
            { surface: 'وَأَلْقَتْهُ', lemma: 'أَلْقَى', pos: 'verb', features: 'conj+perf.3fs+3ms', gloss: 'to cast; and cast him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'النِّيلِ', lemma: 'نِيل', pos: 'proper', features: 'def.gen', gloss: 'the Nile' },
          ],
        },
        {
          id: 'qs-v6-c07-020',
          ar: 'وَجَزِعَتِ الْأُمُّ الْحَنُونُ ثُمَّ صَبَرَتْ وَتَوَكَّلَتْ عَلَى اللَّهِ.',
          en: 'The tender mother was distressed, then she was patient and put her trust in Allah.',
          tokens: [
            { surface: 'وَجَزِعَتِ', lemma: 'جَزِعَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ج ز ع', gloss: 'to be distressed; and was distressed' },
            { surface: 'الْأُمُّ', lemma: 'أُمّ', pos: 'noun', features: 'def.nom', gloss: 'the mother' },
            { surface: 'الْحَنُونُ', lemma: 'حَنُون', pos: 'adj', features: 'def.nom', gloss: 'tender, affectionate' },
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'صَبَرَتْ', lemma: 'صَبَرَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be patient; was patient' },
            { surface: 'وَتَوَكَّلَتْ', lemma: 'تَوَكَّلَ', pos: 'verb', features: 'conj+perf.3fs', root: 'و ك ل', gloss: 'to trust, rely on; and trusted' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v6-c07-021',
          ar: '﴿وَأَوْحَيْنَا إِلَى أُمِّ مُوسَى أَنْ أَرْضِعِيهِ',
          en: '"We revealed to Mūsā\'s mother: Nurse him,',
          tokens: [
            { surface: 'وَأَوْحَيْنَا', lemma: 'أَوْحَى', pos: 'verb', features: 'conj+perf.1p', gloss: 'to reveal, inspire; and We revealed' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أُمِّ', lemma: 'أُمّ', pos: 'noun', features: 'constr.gen', gloss: 'the mother of' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'أَرْضِعِيهِ', lemma: 'أَرْضَعَ', pos: 'verb', features: 'imp.2fs+3ms', gloss: 'to nurse; nurse him!' },
          ],
        },
        {
          id: 'qs-v6-c07-022',
          ar: 'فَإِذَا خِفْتِ عَلَيْهِ فَأَلْقِيهِ فِي الْيَمِّ',
          en: 'and when you fear for him, cast him into the sea,',
          tokens: [
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'خِفْتِ', lemma: 'خَافَ', pos: 'verb', features: 'perf.2fs', gloss: 'to fear; you fear' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'فَأَلْقِيهِ', lemma: 'أَلْقَى', pos: 'verb', features: 'conj+imp.2fs+3ms', gloss: 'to cast; then cast him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'الْيَمِّ', lemma: 'يَمّ', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
          ],
        },
        {
          id: 'qs-v6-c07-023',
          ar: 'وَلَا تَخَافِي وَلَا تَحْزَنِي',
          en: 'and do not fear and do not grieve --',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَخَافِي', lemma: 'خَافَ', pos: 'verb', features: 'impf.2fs', gloss: 'to fear; fear' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَحْزَنِي', lemma: 'حَزِنَ', pos: 'verb', features: 'impf.2fs', gloss: 'to grieve; grieve' },
          ],
        },
        {
          id: 'qs-v6-c07-024',
          ar: 'إِنَّا رَادُّوهُ إِلَيْكِ وَجَاعِلُوهُ مِنَ الْمُرْسَلِينَ﴾.',
          en: 'We will surely return him to you and make him one of the messengers."',
          tokens: [
            { surface: 'إِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'part+1p', gloss: 'indeed We' },
            { surface: 'رَادُّوهُ', lemma: 'رَدَّ', pos: 'noun', features: 'pl.nom+3ms', gloss: 'surely returning him' },
            { surface: 'إِلَيْكِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+2fs', gloss: 'to you' },
            { surface: 'وَجَاعِلُوهُ', lemma: 'جَعَلَ', pos: 'noun', features: 'conj+pl.nom+3ms', gloss: 'and making him' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'one of' },
            { surface: 'الْمُرْسَلِينَ', lemma: 'أَرْسَلَ', pos: 'noun', features: 'pl.def.gen', gloss: 'the messengers' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا وَعَدَ اللَّهُ أُمَّ مُوسَى فِي وَحْيِهِ؟',
          options: ['أَنَّهُ سَيَرُدُّ إِلَيْهَا مُوسَى وَيَجْعَلُهُ مِنَ الْمُرْسَلِينَ', 'أَنَّهُ سَيُغْرِقُ فِرْعَوْنَ فَوْراً', 'أَنَّهُ سَيُعْطِيهَا طِفْلاً آخَرَ'],
          answer: 0,
          qEn: "What did Allah promise Mūsā's mother in His revelation?",
          optionsEn: ['That He would return Mūsā to her and make him one of the messengers', 'That He would drown Pharaoh at once', 'That He would give her another child'],
        },
        {
          q: 'مَاذَا كَانَتِ الشُّرْطَةُ تَفْعَلُ بِالْأَطْفَالِ؟',
          options: ['كَانَتْ تَخْتَطِفُهُمْ مِنْ حِجْرِ أُمَّهَاتِهِمْ', 'كَانَتْ تُطْعِمُهُمْ وَتَكْسُوهُمْ', 'كَانَتْ تُعَلِّمُهُمْ فِي الْقَصْرِ'],
          answer: 0,
          qEn: 'What was the police doing to the children?',
          optionsEn: ["Snatching them away from their mothers' laps", 'Feeding and clothing them', 'Teaching them in the palace'],
        },
      ],
    },
  ],
};

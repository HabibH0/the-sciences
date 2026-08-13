// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 37 -- مِنَ التَّوْحِيدِ الْخَالِصِ إِلَى عَقِيدَةٍ
// غَامِضَةٍ. Spans the bottom half of printed page 272 (right after ch36's
// closing Qur'an quote and this chapter's own heading box), all of page
// 273, and the first few lines at the very top of page 274 (the Qur'an
// quote that closes the chapter runs on before ch38's heading box, which
// only appears further down page 274). Transcribed by hand from the scan
// (vision OCR, 150dpi render) against ../CHAPTER-FORMAT.md.
//
// NOTE on page range: the task brief lists this chapter as pp. 272-273,
// but the scan shows its closing Qur'an quote (Sūrat al-Mā'idah 5:75-76)
// continuing onto the first four lines of page 274, above ch38's heading
// box. Reporting pages=[272, 273, 274] accordingly -- flagged for a
// second look in case that top-of-274 fragment was meant to belong to a
// differently-numbered chapter break.
//
// One of history's strangest religious developments, Nadwi writes: the
// Masih's own pure, simple call -- worship Allah alone, ask only Him,
// turn only to Him -- hardened over time into a vague creed and a
// complicated philosophy. His followers' excessive praise carried him
// out of the bounds of a human being into the bounds of divinity: they
// called him "son of Allah," said Allah had taken a son, said Allah
// Himself *is* the Masih son of Maryam, and turned the One, Eternal God
// into a family of three -- Father, Son, and Holy Spirit. They likewise
// elevated Maryam to sanctification and worship, calling her "Mother of
// God," with statues and icons of her filling the churches and Christians
// bowing, vowing, and praying to her. The chapter closes by quoting the
// Qur'an's own rebuttal (Sūrat al-Mā'idah 5:75-76): the Masih was only a
// messenger like those before him, and he and his mother were ordinary
// human beings who ate food like anyone else.
//
// Grammar / lexical notes:
//   -- Every long printed sentence is split at its natural clause/comma
//      boundary into multiple shorter entries here (house convention,
//      matching qasas-v3/chapter-14.js); short parallel noun-phrase items
//      sharing one governing preposition are kept together in one entry
//      rather than split into one-word fragments (e.g. qs-v12-c37-006's
//      four وَ-coordinated objects of "تَحَوَّلَتْ...مِنَ").
//   -- The two Qur'an quotes are wrapped in ﴿ ﴾ on the `ar` string per the
//      qasas-v3/chapter-14.js precedent (bracket glyphs are not their own
//      tokens); printed ayah-end medallion numbers are kept in `ar` as
//      plain parenthesised digits, e.g. "(٧٥)", and are likewise not
//      tokenized. Tokenized and translated in full, no shortening.
//   -- The disbelievers' three quoted claims (qs-v12-c37-010/011/012:
//      «الْمَسِيحُ ابْنُ اللَّهِ», «اتَّخَذَ اللَّهُ وَلَدًا», «إِنَّ اللَّهَ هُوَ الْمَسِيحُ ابْنُ
//      مَرْيَمَ») are the author's own quotation of their words, not Qur'an
//      text, so they are treated as ordinary drillable prose (no special
//      marking needed either way, since the corpus does not truncate
//      Qur'an quotes for buildability either -- see CHAPTER-FORMAT.md).
//   -- وَلَدَ (qs-v12-c37-013's يَلِدْ/يُولَدْ, form I "to beget/be born") is a
//      distinct lemma from the already-taught noun وَلَد ("child, son"),
//      per the noun-vs-verb-same-root convention (qasas-v3 ch14's
//      رِسَالَة/رَسُول-style note). Passive يُولَدْ keeps the same verb lemma
//      with a pass feature, matching how قِيلَ stayed under قَالَ in
//      qasas-v3/chapter-01.js.
//   -- مُنْكِر (qs-v12-c37-021, active participle "denying") is tagged as
//      its own lemma, distinct from the already-taught verb أَنْكَرَ, per
//      the participle-as-distinct-lemma convention -- even though the
//      underlying verb is independently known, the participle is not.
//   -- اِعْتَقَدَ (form VIII, "to hold as a belief/creed") is a distinct
//      lemma from the already-taught noun عَقِيدَة/عِبَادَة-family words;
//      same root ع ق د as تَعْقِيد and مُعَقَّد but three separate printed
//      words with three separate lemmas, matching the corpus's
//      same-root-different-part-of-speech convention.
//   -- أُمِّ الْمَسِيحِ (qs-v12-c37-017) is transcribed with a genitive كسرة
//      on أُمِّ, since it is a badal (apposition) to the genitive مَرْيَمَ
//      (object of فِي), not an accusative -- the scan's small-font
//      ḥarakah was hard to distinguish from a fatḥah at this resolution,
//      so this is flagged for a second look against the original page.
//   -- يَأْكُلَانِ/كَانَا (qs-v12-c37-024) are dual verb forms; the
//      documented feature grammar has no dual person code, so `3d` is
//      used here per CHAPTER-FORMAT.md's guidance that an unlisted atom
//      degrades gracefully rather than breaking anything.
//   -- Judgment call carried over from ch36's header: the closed set of
//      most-basic function words/pronouns/proper names (مِنْ، فِي، بِ، لِ،
//      عَلَى، مَا، يَا، إِلَى، إِنَّ، أَنَّ، اللَّه، قَالَ، كَانَ، النَّاس، ابْن، عَنْ،
//      هُوَ، لَا، مَنْ، كَيْفَ، ثُمَّ، قَبْل، أَنَّى) is treated as already known
//      and not added to newWords, matching the demonstrated convention in
//      qasas-v3/chapter-01.js and chapter-14.js's own header notes, even
//      though several of these are individually absent from the
//      consolidated known-lemmas list.
//
// No page footnotes (book_note) on pages 272-274 for this chapter.
//
// 51 new words -- this chapter is unusually vocabulary-dense because it
// is the volume's first sustained block of abstract theological prose
// (غَرِيب، تَارِيخ، دَمَعَ، ذَابَ، تَحَوَّلَ، سَهْل، سَائِغ، غُمُوض، تَعْقِيد، تَحْرِيف،
// وَحْد، سُؤَال، اِلْتِجَاء، عَقِيدَة، غَامِض، فَلْسَفَة، مُعَقَّد، غَلَا، تَابِع، أَطْرَى،
// إِطْرَاء، حَدّ، بَشَرِيَّة، أُلُوهِيَّة، صَمَد، وَلَدَ، أُسْرَة، مُؤَلَّف، ثَلَاثَة، عُضْو،
// رُوح، قُدُس، اِعْتَقَدَ، عَامَلَ، دَرَجَة، تَقْدِيس، شَاعَ، كَنِيسَة، نَصَارَى، لُجُوء،
// نَذْر، اِنْحِنَاء، مُنْكِر، تَعَالَى، اِسْتَبْشَعَ، فَعَلَ، خَلَا، بَيَّنَ، أَفَكَ، ضَرّ، نَفْع).
export const CHAPTER = {
  id: 'ch37',
  title: { ar: 'مِنَ التَّوْحِيدِ الْخَالِصِ إِلَى عَقِيدَةٍ غَامِضَةٍ', en: 'From Pure Monotheism to a Vague Creed' },
  newWords: [
    'تَارِيخ', 'دَمَعَ', 'ذَابَ', 'تَحَوَّلَ', 'سَهْل', 'سَائِغ',
    'غُمُوض', 'تَعْقِيد', 'تَحْرِيف', 'وَحْد', 'اِلْتِجَاء', 'غَامِض',
    'فَلْسَفَة', 'مُعَقَّد', 'تَابِع', 'أَطْرَى', 'إِطْرَاء', 'أُلُوهِيَّة',
    'صَمَد', 'أُسْرَة', 'مُؤَلَّف', 'ثَلَاثَة', 'عُضْو', 'دَرَجَة',
    'شَاعَ', 'كَنِيسَة', 'نَذْر', 'اِنْحِنَاء', 'اِسْتَبْشَعَ', 'فَعَلَ',
    'خَلَا', 'بَيَّنَ', 'أَفَكَ', 'ضَرّ', 'نَفْع',
  ],
  lemmas: {
    غَرِيب: { gloss: 'strange thing, curiosity' },
    تَارِيخ: { gloss: 'history' },
    دَمَعَ: { gloss: 'to shed tears, weep' },
    ذَابَ: { gloss: 'to melt' },
    تَحَوَّلَ: { gloss: 'to change, transform' },
    سَهْل: { gloss: 'easy' },
    سَائِغ: { gloss: 'agreeable, palatable' },
    غُمُوض: { gloss: 'ambiguity, vagueness' },
    تَعْقِيد: { gloss: 'complication' },
    تَحْرِيف: { gloss: 'distortion' },
    وَحْد: { gloss: 'alone, by oneself' },
    سُؤَال: { gloss: 'asking, petitioning' },
    اِلْتِجَاء: { gloss: 'seeking refuge' },
    عَقِيدَة: { gloss: 'creed, belief' },
    غَامِض: { gloss: 'vague, obscure' },
    فَلْسَفَة: { gloss: 'philosophy' },
    مُعَقَّد: { gloss: 'complicated' },
    غَلَا: { gloss: 'to go to excess, exaggerate' },
    تَابِع: { gloss: 'follower' },
    أَطْرَى: { gloss: 'to praise excessively' },
    إِطْرَاء: { gloss: 'excessive praise' },
    حَدّ: { gloss: 'limit, bound' },
    بَشَرِيَّة: { gloss: 'humanity, human nature' },
    أُلُوهِيَّة: { gloss: 'divinity, godhood' },
    صَمَد: { gloss: 'the Eternal, the Self-Sufficient' },
    وَلَدَ: { gloss: 'to beget; (passive) to be born' },
    أُسْرَة: { gloss: 'family' },
    مُؤَلَّف: { gloss: 'composed, made up (of)' },
    ثَلَاثَة: { gloss: 'three' },
    عُضْو: { gloss: 'member' },
    رُوح: { gloss: 'spirit' },
    قُدُس: { gloss: 'holiness' },
    اِعْتَقَدَ: { gloss: 'to believe, hold as a creed' },
    عَامَلَ: { gloss: 'to treat, deal with' },
    دَرَجَة: { gloss: 'degree, level' },
    تَقْدِيس: { gloss: 'sanctification' },
    شَاعَ: { gloss: 'to become widespread' },
    كَنِيسَة: { gloss: 'church' },
    نَصَارَى: { gloss: 'Christians' },
    لُجُوء: { gloss: 'resorting (to), taking refuge' },
    نَذْر: { gloss: 'vow, votive offering' },
    اِنْحِنَاء: { gloss: 'bowing' },
    مُنْكِر: { gloss: 'denying' },
    تَعَالَى: { gloss: 'to be exalted (epithet of Allah)' },
    اِسْتَبْشَعَ: { gloss: 'to find abhorrent, loathsome' },
    فَعَلَ: { gloss: 'to do' },
    خَلَا: { gloss: 'to pass away, precede' },
    بَيَّنَ: { gloss: 'to make clear, clarify' },
    أَفَكَ: { gloss: 'to be deluded, turned away (passive)' },
    ضَرّ: { gloss: 'harm' },
    نَفْع: { gloss: 'benefit' },
  },
  paragraphs: [
    {
      en: "One of the strangest things in the history of religions -- something that brings tears to the eyes and makes hearts melt -- is that al-Masih's message changed from pure monotheism, from the easy and agreeable religion far removed from all ambiguity, complication, distortion, and far-fetched interpretation, from the call to worship Allah alone, to ask only of Him, to seek refuge only in Him, and to love Him purely -- into a vague creed and a complicated philosophy. His followers went to excess over him and praised him so extravagantly that they carried him out of the bounds of humanity into the bounds of divinity: they said, \"al-Masih is the son of Allah,\" and they said, \"Allah has taken a son,\" and they said, \"Indeed Allah, He is al-Masih, son of Maryam.\" They turned the One, Eternal, Self-Sufficient God -- who neither begets nor is begotten -- into a family made up of three members, each of them a god, saying: the Father, the Son, and the Holy Spirit. They also held beliefs about Maryam, mother of al-Masih, and treated her in a way that raised her to the level of sanctification and worship, saying \"Mother of God\" -- and statues and images of her spread through the churches, with Christians submitting to her by resorting to her, praying, vowing, and bowing. Allah, Exalted is He, spoke denying what they had come to believe and finding abhorrent what they had done: \"al-Masih, son of Maryam, was nothing but a messenger; messengers had indeed passed away before him, and his mother was a woman of truth; both of them used to eat food. See how We make the signs clear to them, then see how they are deluded! Say: Do you worship, besides Allah, that which has no power to harm or benefit you? And it is Allah who is the All-Hearing, the All-Knowing.\"",
      sentences: [
        {
          id: 'qs-v12-c37-001',
          ar: 'وَمِنْ غَرَائِبِ تَارِيخِ الْأَدْيَانِ،',
          en: 'One of the strange things in the history of religions,',
          tokens: [
            { surface: 'وَمِنْ', lemma: 'مِنْ', pos: 'prep', features: 'conj+prep', gloss: 'and of' },
            { surface: 'غَرَائِبِ', lemma: 'غَرِيب', pos: 'noun', features: 'pl.constr.gen', root: 'غ ر ب', gloss: 'the strange things of' },
            { surface: 'تَارِيخِ', lemma: 'تَارِيخ', pos: 'noun', features: 'constr.gen', gloss: 'the history of' },
            { surface: 'الْأَدْيَانِ', lemma: 'دِين', pos: 'noun', features: 'def.gen.pl', gloss: 'the religions' },
          ],
        },
        {
          id: 'qs-v12-c37-002',
          ar: 'وَمِمَّا تَدْمَعُ لَهُ الْعُيُونُ، وَتَذُوبُ لَهُ الْقُلُوبُ،',
          en: 'and something that brings tears to the eyes and makes hearts melt,',
          tokens: [
            { surface: 'وَمِمَّا', lemma: 'مَا', pos: 'rel', features: 'conj+prep+rel', gloss: 'and that which' },
            { surface: 'تَدْمَعُ', lemma: 'دَمَعَ', pos: 'verb', features: 'impf.3fs', gloss: 'to weep, shed tears; weep' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'over it' },
            { surface: 'الْعُيُونُ', lemma: 'عَيْن', pos: 'noun', features: 'def.nom.pl', gloss: 'the eyes' },
            { surface: 'وَتَذُوبُ', lemma: 'ذَابَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to melt; and melt' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for it' },
            { surface: 'الْقُلُوبُ', lemma: 'قَلْب', pos: 'noun', features: 'def.nom.pl', gloss: 'the hearts' },
          ],
        },
        {
          id: 'qs-v12-c37-003',
          ar: 'أَنَّهُ تَحَوَّلَتْ دَعْوَةُ الْمَسِيحِ مِنَ التَّوْحِيدِ الْخَالِصِ،',
          en: "is that al-Masih's message changed from pure monotheism,",
          tokens: [
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that (it)' },
            { surface: 'تَحَوَّلَتْ', lemma: 'تَحَوَّلَ', pos: 'verb', features: 'perf.3fs', root: 'ح و ل', gloss: 'to change, transform; changed' },
            { surface: 'دَعْوَةُ', lemma: 'دَعْوَة', pos: 'noun', features: 'constr.nom', gloss: 'the message of' },
            { surface: 'الْمَسِيحِ', lemma: 'الْمَسِيح', pos: 'proper', features: 'gen', gloss: 'al-Masih' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'التَّوْحِيدِ', lemma: 'تَوْحِيد', pos: 'noun', features: 'def.gen', gloss: 'monotheism' },
            { surface: 'الْخَالِصِ', lemma: 'خَالِص', pos: 'adj', features: 'def.gen', gloss: 'pure' },
          ],
        },
        {
          id: 'qs-v12-c37-004',
          ar: 'وَالدِّينِ السَّهْلِ السَّائِغِ، الْبَعِيدِ عَنْ كُلِّ غُمُوضٍ وَتَعْقِيدٍ،',
          en: 'and from the easy, agreeable religion, far removed from all ambiguity and complication,',
          tokens: [
            { surface: 'وَالدِّينِ', lemma: 'دِين', pos: 'noun', features: 'conj+def.gen', gloss: 'and the religion' },
            { surface: 'السَّهْلِ', lemma: 'سَهْل', pos: 'adj', features: 'def.gen', gloss: 'easy' },
            { surface: 'السَّائِغِ', lemma: 'سَائِغ', pos: 'adj', features: 'def.gen', root: 'س و غ', gloss: 'agreeable, palatable' },
            { surface: 'الْبَعِيدِ', lemma: 'بَعِيد', pos: 'adj', features: 'def.gen', gloss: 'far removed' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'all' },
            { surface: 'غُمُوضٍ', lemma: 'غُمُوض', pos: 'noun', features: 'indef.gen', root: 'غ م ض', gloss: 'ambiguity' },
            { surface: 'وَتَعْقِيدٍ', lemma: 'تَعْقِيد', pos: 'noun', features: 'conj+indef.gen', root: 'ع ق د', gloss: 'and complication' },
          ],
        },
        {
          id: 'qs-v12-c37-005',
          ar: 'وَتَحْرِيفٍ وَتَأْوِيلٍ بَعِيدٍ،',
          en: 'distortion and far-fetched interpretation,',
          tokens: [
            { surface: 'وَتَحْرِيفٍ', lemma: 'تَحْرِيف', pos: 'noun', features: 'conj+indef.gen', root: 'ح ر ف', gloss: 'and distortion' },
            { surface: 'وَتَأْوِيلٍ', lemma: 'تَأْوِيل', pos: 'noun', features: 'conj+indef.gen', gloss: 'and interpretation' },
            { surface: 'بَعِيدٍ', lemma: 'بَعِيد', pos: 'adj', features: 'indef.gen', gloss: 'far-fetched' },
          ],
        },
        {
          id: 'qs-v12-c37-006',
          ar: 'وَالدَّعْوَةِ إِلَى عِبَادَةِ اللَّهِ وَحْدَهُ، وَالسُّؤَالِ مِنْهُ، وَالِالْتِجَاءِ إِلَيْهِ، وَحُبِّهِ الْخَالِصِ،',
          en: 'and from the call to worship Allah alone, to ask only of Him, to seek refuge only in Him, and to love Him purely,',
          tokens: [
            { surface: 'وَالدَّعْوَةِ', lemma: 'دَعْوَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and the call' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'constr.gen', gloss: 'the worship of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَحْدَهُ', lemma: 'وَحْد', pos: 'noun', features: 'acc+3ms', gloss: 'alone' },
            { surface: 'وَالسُّؤَالِ', lemma: 'سُؤَال', pos: 'noun', features: 'conj+def.gen', gloss: 'and the asking' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'of Him' },
            { surface: 'وَالِالْتِجَاءِ', lemma: 'اِلْتِجَاء', pos: 'noun', features: 'conj+def.gen', root: 'ل ج أ', gloss: 'and seeking refuge' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to Him' },
            { surface: 'وَحُبِّهِ', lemma: 'حُبّ', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and love of Him' },
            { surface: 'الْخَالِصِ', lemma: 'خَالِص', pos: 'adj', features: 'def.gen', gloss: 'pure' },
          ],
        },
        {
          id: 'qs-v12-c37-007',
          ar: 'إِلَى عَقِيدَةٍ غَامِضَةٍ، وَفَلْسَفَةٍ مُعَقَّدَةٍ،',
          en: 'into a vague creed and a complicated philosophy,',
          tokens: [
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to, into' },
            { surface: 'عَقِيدَةٍ', lemma: 'عَقِيدَة', pos: 'noun', features: 'indef.gen', gloss: 'a creed' },
            { surface: 'غَامِضَةٍ', lemma: 'غَامِض', pos: 'adj', features: 'indef.gen.f', gloss: 'vague' },
            { surface: 'وَفَلْسَفَةٍ', lemma: 'فَلْسَفَة', pos: 'noun', features: 'conj+indef.gen', gloss: 'and a philosophy' },
            { surface: 'مُعَقَّدَةٍ', lemma: 'مُعَقَّد', pos: 'adj', features: 'indef.gen.f', root: 'ع ق د', gloss: 'complicated' },
          ],
        },
        {
          id: 'qs-v12-c37-008',
          ar: 'فَغَلَا فِيهِ أَتْبَاعُهُ،',
          en: 'His followers went to excess over him,',
          tokens: [
            { surface: 'فَغَلَا', lemma: 'غَلَا', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to go to excess; and went to excess' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'over him' },
            { surface: 'أَتْبَاعُهُ', lemma: 'تَابِع', pos: 'noun', features: 'pl.nom+3ms', gloss: 'his followers' },
          ],
        },
        {
          id: 'qs-v12-c37-009',
          ar: 'وَأَطْرَوْهُ إِطْرَاءً خَرَجَ بِهِ مِنْ حُدُودِ الْبَشَرِيَّةِ إِلَى حُدُودِ الْأُلُوهِيَّةِ،',
          en: 'and praised him so excessively that it carried him out of the bounds of humanity into the bounds of divinity,',
          tokens: [
            { surface: 'وَأَطْرَوْهُ', lemma: 'أَطْرَى', pos: 'verb', features: 'conj+perf.3mp+3ms', root: 'ط ر و', gloss: 'to praise excessively; and they praised him excessively' },
            { surface: 'إِطْرَاءً', lemma: 'إِطْرَاء', pos: 'noun', features: 'indef.acc', gloss: 'excessive praise' },
            { surface: 'خَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'perf.3ms', gloss: 'to go out; went out' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'حُدُودِ', lemma: 'حَدّ', pos: 'noun', features: 'pl.constr.gen', gloss: 'the bounds of' },
            { surface: 'الْبَشَرِيَّةِ', lemma: 'بَشَرِيَّة', pos: 'noun', features: 'def.gen', root: 'ب ش ر', gloss: 'humanity' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'حُدُودِ', lemma: 'حَدّ', pos: 'noun', features: 'pl.constr.gen', gloss: 'the bounds of' },
            { surface: 'الْأُلُوهِيَّةِ', lemma: 'أُلُوهِيَّة', pos: 'noun', features: 'def.gen', root: 'أ ل ه', gloss: 'divinity' },
          ],
        },
        {
          id: 'qs-v12-c37-010',
          ar: 'فَقَالُوا: ﴿الْمَسِيحُ ابْنُ اللَّهِ﴾.',
          en: 'so they said: "al-Masih is the son of Allah."',
          tokens: [
            { surface: 'فَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; so they said' },
            { surface: 'الْمَسِيحُ', lemma: 'الْمَسِيح', pos: 'proper', features: 'nom', gloss: 'al-Masih' },
            { surface: 'ابْنُ', lemma: 'ابْن', pos: 'noun', features: 'nom.constr', gloss: 'son of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v12-c37-011',
          ar: 'وَقَالُوا: ﴿اتَّخَذَ اللَّهُ وَلَداً﴾',
          en: 'And they said: "Allah has taken a son."',
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and they said' },
            { surface: 'اتَّخَذَ', lemma: 'اتَّخَذَ', pos: 'verb', features: 'perf.3ms', root: 'أ خ ذ', gloss: 'to take, adopt; took' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'وَلَداً', lemma: 'وَلَد', pos: 'noun', features: 'indef.acc', gloss: 'a son' },
          ],
        },
        {
          id: 'qs-v12-c37-012',
          ar: 'وَقَالُوا: ﴿إِنَّ اللَّهَ هُوَ الْمَسِيحُ ابْنُ مَرْيَمَ﴾',
          en: 'And they said: "Indeed Allah, He is al-Masih, son of Maryam."',
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and they said' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'He' },
            { surface: 'الْمَسِيحُ', lemma: 'الْمَسِيح', pos: 'proper', features: 'nom', gloss: 'al-Masih' },
            { surface: 'ابْنُ', lemma: 'ابْن', pos: 'noun', features: 'nom.constr', gloss: 'son of' },
            { surface: 'مَرْيَمَ', lemma: 'مَرْيَم', pos: 'proper', features: 'gen', gloss: 'Maryam' },
          ],
        },
        {
          id: 'qs-v12-c37-013',
          ar: 'وَجَعَلُوا مِنَ الْإِلَهِ الْوَاحِدِ الصَّمَدِ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ،',
          en: 'They turned the One, Eternal God, who neither begets nor is begotten,',
          tokens: [
            { surface: 'وَجَعَلُوا', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to make; and they made' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْإِلَهِ', lemma: 'إِلَٰه', pos: 'noun', features: 'def.gen', gloss: 'the god' },
            { surface: 'الْوَاحِدِ', lemma: 'وَاحِد', pos: 'adj', features: 'def.gen', gloss: 'the One' },
            { surface: 'الصَّمَدِ', lemma: 'صَمَد', pos: 'adj', features: 'def.gen', gloss: 'the Eternal, Self-Sufficient' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَلِدْ', lemma: 'وَلَدَ', pos: 'verb', features: 'impf.3ms', root: 'و ل د', gloss: 'to beget; did not beget' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُولَدْ', lemma: 'وَلَدَ', pos: 'verb', features: 'pass+impf.3ms', gloss: 'to be born; was not born' },
          ],
        },
        {
          id: 'qs-v12-c37-014',
          ar: 'أُسْرَةً مُؤَلَّفَةً مِنْ ثَلَاثَةِ أَعْضَاءٍ،',
          en: 'into a family made up of three members,',
          tokens: [
            { surface: 'أُسْرَةً', lemma: 'أُسْرَة', pos: 'noun', features: 'indef.acc', gloss: 'a family' },
            { surface: 'مُؤَلَّفَةً', lemma: 'مُؤَلَّف', pos: 'adj', features: 'indef.acc.f', root: 'أ ل ف', gloss: 'composed' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'ثَلَاثَةِ', lemma: 'ثَلَاثَة', pos: 'num', features: 'constr.gen', gloss: 'three' },
            { surface: 'أَعْضَاءٍ', lemma: 'عُضْو', pos: 'noun', features: 'indef.gen.pl', gloss: 'members' },
          ],
        },
        {
          id: 'qs-v12-c37-015',
          ar: 'كُلُّهُمْ إِلَهٌ،',
          en: 'each of them a god,',
          tokens: [
            { surface: 'كُلُّهُمْ', lemma: 'كُلّ', pos: 'noun', features: 'nom+3mp', gloss: 'all of them' },
            { surface: 'إِلَهٌ', lemma: 'إِلَٰه', pos: 'noun', features: 'indef.nom', gloss: 'a god' },
          ],
        },
        {
          id: 'qs-v12-c37-016',
          ar: 'فَقَالُوا: الْأَبُ وَالِابْنُ وَرُوحُ الْقُدُسِ،',
          en: 'so they said: the Father, the Son, and the Holy Spirit,',
          tokens: [
            { surface: 'فَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; so they said' },
            { surface: 'الْأَبُ', lemma: 'أَب', pos: 'noun', features: 'def.nom', gloss: 'the Father' },
            { surface: 'وَالِابْنُ', lemma: 'ابْن', pos: 'noun', features: 'conj+def.nom', gloss: 'and the Son' },
            { surface: 'وَرُوحُ', lemma: 'رُوح', pos: 'noun', features: 'conj+constr.nom', gloss: 'and the Spirit of' },
            { surface: 'الْقُدُسِ', lemma: 'قُدُس', pos: 'noun', features: 'def.gen', gloss: 'holiness' },
          ],
        },
        {
          id: 'qs-v12-c37-017',
          ar: 'وَاعْتَقَدُوا فِي مَرْيَمَ أُمِّ الْمَسِيحِ وَعَامَلُوهَا بِمَا يَبْلُغُ بِهَا إِلَى دَرَجَةِ التَّقْدِيسِ وَالْعِبَادَةِ،',
          en: 'They also held beliefs about Maryam, mother of al-Masih, and treated her in a way that raised her to the level of sanctification and worship,',
          tokens: [
            { surface: 'وَاعْتَقَدُوا', lemma: 'اِعْتَقَدَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ع ق د', gloss: 'to hold a belief; and they held a belief' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'مَرْيَمَ', lemma: 'مَرْيَم', pos: 'proper', features: 'gen', gloss: 'Maryam' },
            { surface: 'أُمِّ', lemma: 'أُمّ', pos: 'noun', features: 'gen.constr', gloss: 'mother of' },
            { surface: 'الْمَسِيحِ', lemma: 'الْمَسِيح', pos: 'proper', features: 'gen', gloss: 'al-Masih' },
            { surface: 'وَعَامَلُوهَا', lemma: 'عَامَلَ', pos: 'verb', features: 'conj+perf.3mp+3fs', root: 'ع م ل', gloss: 'to treat, deal with; and they treated her' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'in a way that' },
            { surface: 'يَبْلُغُ', lemma: 'بَلَغَ', pos: 'verb', features: 'impf.3ms', gloss: 'to reach; reaches' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'with her' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'دَرَجَةِ', lemma: 'دَرَجَة', pos: 'noun', features: 'constr.gen', gloss: 'the degree of' },
            { surface: 'التَّقْدِيسِ', lemma: 'تَقْدِيس', pos: 'noun', features: 'def.gen', root: 'ق د س', gloss: 'sanctification' },
            { surface: 'وَالْعِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and worship' },
          ],
        },
        {
          id: 'qs-v12-c37-018',
          ar: 'فَقَالُوا: «أُمُّ اللَّهِ»',
          en: 'saying: "Mother of God."',
          tokens: [
            { surface: 'فَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; so they said' },
            { surface: 'أُمُّ', lemma: 'أُمّ', pos: 'noun', features: 'nom.constr', gloss: 'mother of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v12-c37-019',
          ar: 'وَشَاعَتْ لَهَا تَمَاثِيلُ وَصُوَرٌ فِي الْكَنَائِسِ،',
          en: 'Statues and images of her spread through the churches,',
          tokens: [
            { surface: 'وَشَاعَتْ', lemma: 'شَاعَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to become widespread; and became widespread' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'of her' },
            { surface: 'تَمَاثِيلُ', lemma: 'تِمْثَال', pos: 'noun', features: 'indef.nom.pl', gloss: 'statues' },
            { surface: 'وَصُوَرٌ', lemma: 'صُورَة', pos: 'noun', features: 'conj+indef.nom.pl', gloss: 'and images' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْكَنَائِسِ', lemma: 'كَنِيسَة', pos: 'noun', features: 'def.gen.pl', root: 'ك ن س', gloss: 'the churches' },
          ],
        },
        {
          id: 'qs-v12-c37-020',
          ar: 'يَخْضَعُ لَهَا النَّصَارَى بِاللُّجُوءِ وَالدُّعَاءِ، وَالنَّذْرِ وَالِانْحِنَاءِ،',
          en: 'and Christians submit to her by resorting to her, praying, vowing, and bowing,',
          tokens: [
            { surface: 'يَخْضَعُ', lemma: 'خَضَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to submit; submit' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'to her' },
            { surface: 'النَّصَارَى', lemma: 'نَصَارَى', pos: 'noun', features: 'def.nom', gloss: 'the Christians' },
            { surface: 'بِاللُّجُوءِ', lemma: 'لُجُوء', pos: 'noun', features: 'prep+def.gen', root: 'ل ج أ', gloss: 'by resorting' },
            { surface: 'وَالدُّعَاءِ', lemma: 'دُعَاء', pos: 'noun', features: 'conj+def.gen', gloss: 'and supplication' },
            { surface: 'وَالنَّذْرِ', lemma: 'نَذْر', pos: 'noun', features: 'conj+def.gen', gloss: 'and vowing' },
            { surface: 'وَالِانْحِنَاءِ', lemma: 'اِنْحِنَاء', pos: 'noun', features: 'conj+def.gen', root: 'ح ن و', gloss: 'and bowing' },
          ],
        },
        {
          id: 'qs-v12-c37-021',
          ar: 'وَقَدْ قَالَ اللَّهُ تَعَالَى مُنْكِراً مَا اعْتَقَدُوهُ،',
          en: 'Allah, Exalted is He, spoke, denying what they had come to believe,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; Exalted is He' },
            { surface: 'مُنْكِراً', lemma: 'مُنْكِر', pos: 'noun', features: 'indef.acc', root: 'ن ك ر', gloss: 'denying' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'اعْتَقَدُوهُ', lemma: 'اِعْتَقَدَ', pos: 'verb', features: 'perf.3mp+3ms', gloss: 'to believe; they believed it' },
          ],
        },
        {
          id: 'qs-v12-c37-022',
          ar: 'مُسْتَبْشِعاً مَا فَعَلُوهُ.',
          en: 'and finding abhorrent what they had done.',
          tokens: [
            { surface: 'مُسْتَبْشِعاً', lemma: 'اِسْتَبْشَعَ', pos: 'noun', features: 'indef.acc', root: 'ب ش ع', gloss: 'finding abhorrent' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'فَعَلُوهُ', lemma: 'فَعَلَ', pos: 'verb', features: 'perf.3mp+3ms', gloss: 'to do; they did it' },
          ],
        },
        {
          id: 'qs-v12-c37-023',
          ar: '﴿مَا الْمَسِيحُ ابْنُ مَرْيَمَ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ',
          en: 'al-Masih, son of Maryam, was nothing but a messenger; messengers had indeed passed away before him,',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'الْمَسِيحُ', lemma: 'الْمَسِيح', pos: 'proper', features: 'nom', gloss: 'al-Masih' },
            { surface: 'ابْنُ', lemma: 'ابْن', pos: 'noun', features: 'nom.constr', gloss: 'son of' },
            { surface: 'مَرْيَمَ', lemma: 'مَرْيَم', pos: 'proper', features: 'gen', gloss: 'Maryam' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, but' },
            { surface: 'رَسُولٌ', lemma: 'رَسُول', pos: 'noun', features: 'indef.nom', gloss: 'a messenger' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'خَلَتْ', lemma: 'خَلَا', pos: 'verb', features: 'perf.3fs', root: 'خ ل و', gloss: 'to pass, precede; had passed' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَبْلِهِ', lemma: 'قَبْل', pos: 'noun', features: 'gen+3ms', gloss: 'before him' },
            { surface: 'الرُّسُلُ', lemma: 'رَسُول', pos: 'noun', features: 'def.nom.pl', gloss: 'the messengers' },
          ],
        },
        {
          id: 'qs-v12-c37-024',
          ar: 'وَأُمُّهُ صِدِّيقَةٌ كَانَا يَأْكُلَانِ الطَّعَامَ.',
          en: 'and his mother was a woman of truth; both of them used to eat food.',
          tokens: [
            { surface: 'وَأُمُّهُ', lemma: 'أُمّ', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his mother' },
            { surface: 'صِدِّيقَةٌ', lemma: 'صِدِّيق', pos: 'noun', features: 'indef.nom.f', gloss: 'a woman of truth' },
            { surface: 'كَانَا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3d', gloss: 'to be; both used to' },
            { surface: 'يَأْكُلَانِ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3d', gloss: 'to eat; both eat' },
            { surface: 'الطَّعَامَ', lemma: 'طَعَام', pos: 'noun', features: 'def.acc', gloss: 'the food' },
          ],
        },
        {
          id: 'qs-v12-c37-025',
          ar: 'انظُرْ كَيْفَ نُبَيِّنُ لَهُمُ الْآيَاتِ',
          en: 'See how We make the signs clear to them,',
          tokens: [
            { surface: 'انظُرْ', lemma: 'نَظَرَ', pos: 'verb', features: 'imp.2ms', gloss: 'to look; see' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'نُبَيِّنُ', lemma: 'بَيَّنَ', pos: 'verb', features: 'impf.1p', root: 'ب ي ن', gloss: 'to make clear; We make clear' },
            { surface: 'لَهُمُ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'الْآيَاتِ', lemma: 'آيَة', pos: 'noun', features: 'def.acc.pl', gloss: 'the signs' },
          ],
        },
        {
          id: 'qs-v12-c37-026',
          ar: 'ثُمَّ انظُرْ أَنَّى يُؤْفَكُونَ (٧٥)',
          en: 'then see how they are turned away in delusion!',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'انظُرْ', lemma: 'نَظَرَ', pos: 'verb', features: 'imp.2ms', gloss: 'to look; see' },
            { surface: 'أَنَّى', lemma: 'أَنَّى', pos: 'adv', features: 'adv', gloss: 'how, whither' },
            { surface: 'يُؤْفَكُونَ', lemma: 'أَفَكَ', pos: 'verb', features: 'pass+impf.3mp', root: 'أ ف ك', gloss: 'to be deluded, turned away; they are deluded' },
          ],
        },
        {
          id: 'qs-v12-c37-027',
          ar: 'قُلْ أَتَعْبُدُونَ مِن دُونِ اللَّهِ مَا لَا يَمْلِكُ لَكُمْ ضَرّاً وَلَا نَفْعاً',
          en: 'Say: Do you worship, besides Allah, that which has no power to harm or benefit you?',
          tokens: [
            { surface: 'قُلْ', lemma: 'قَالَ', pos: 'verb', features: 'imp.2ms', gloss: 'to say; say' },
            { surface: 'أَتَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'part+impf.2mp', gloss: 'to worship; do you worship' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'دُونِ', lemma: 'دُون', pos: 'noun', features: 'constr.gen', gloss: 'besides, other than' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'that which' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَمْلِكُ', lemma: 'مَلَكَ', pos: 'verb', features: 'impf.3ms', gloss: 'to possess, have power; has power' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'ضَرّاً', lemma: 'ضَرّ', pos: 'noun', features: 'indef.acc', gloss: 'harm' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَفْعاً', lemma: 'نَفْع', pos: 'noun', features: 'indef.acc', gloss: 'benefit' },
          ],
        },
        {
          id: 'qs-v12-c37-028',
          ar: 'وَاللَّهُ هُوَ السَّمِيعُ الْعَلِيمُ (٧٦)﴾.',
          en: 'And it is Allah who is the All-Hearing, the All-Knowing."',
          tokens: [
            { surface: 'وَاللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'conj+nom', gloss: 'and Allah' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'He' },
            { surface: 'السَّمِيعُ', lemma: 'سَمِيع', pos: 'adj', features: 'def.nom', gloss: 'the All-Hearing' },
            { surface: 'الْعَلِيمُ', lemma: 'عَلِيم', pos: 'adj', features: 'def.nom', gloss: 'the All-Knowing' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِدَعْوَةِ الْمَسِيحِ عَبْرَ التَّارِيخِ؟',
          options: [
            'تَحَوَّلَتْ مِنَ التَّوْحِيدِ الْخَالِصِ إِلَى عَقِيدَةٍ غَامِضَةٍ وَفَلْسَفَةٍ مُعَقَّدَةٍ',
            'بَقِيَتْ عَلَى التَّوْحِيدِ الْخَالِصِ كَمَا هِيَ',
            'اخْتَفَتْ تَمَاماً مِنَ التَّارِيخِ',
          ],
          answer: 0,
          qEn: "What happened to al-Masih's message over the course of history?",
          optionsEn: [
            'It changed from pure monotheism into a vague creed and a complicated philosophy',
            'It remained on pure monotheism just as it was',
            'It vanished completely from history',
          ],
        },
        {
          q: 'مَاذَا قَالَ أَتْبَاعُ الْمَسِيحِ بَعْدَ أَنْ غَلَوْا فِيهِ؟',
          options: [
            'قَالُوا: الْمَسِيحُ ابْنُ اللَّهِ، وَاتَّخَذَ اللَّهُ وَلَداً',
            'قَالُوا: هُوَ رَسُولٌ مِثْلُ سَائِرِ الرُّسُلِ',
            'قَالُوا: لَا نَعْرِفُ عَنْهُ شَيْئاً',
          ],
          answer: 0,
          qEn: "What did al-Masih's followers say after they went to excess over him?",
          optionsEn: [
            'They said: al-Masih is the son of Allah, and Allah has taken a son',
            'They said: he is a messenger like the rest of the messengers',
            'They said: we know nothing about him',
          ],
        },
        {
          q: 'بِمَاذَا وَصَفَ الْقُرْآنُ الْمَسِيحَ وَأُمَّهُ فِي الْآيَةِ؟',
          options: [
            'رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ، وَأُمُّهُ صِدِّيقَةٌ كَانَا يَأْكُلَانِ الطَّعَامَ',
            'إِلَهَانِ مِن دُونِ اللَّهِ',
            'مَلَاكَانِ نَزَلَا مِنَ السَّمَاءِ',
          ],
          answer: 0,
          qEn: "How does the Qur'an describe al-Masih and his mother in the verse?",
          optionsEn: [
            'A messenger before whom messengers had indeed passed away, and his mother was a woman of truth; both of them used to eat food',
            'Two gods besides Allah',
            'Two angels who descended from heaven',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: ': الْمَسِيحُ ابْنُ اللَّهِ.',
        en: 'So they said: "al-Masih is the son of Allah."',
        options: ['فَقَالُوا', 'فَيَقُولُونَ', 'فَقُلْ', 'فَقَائِلُونَ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- matches the recurring narrative frame (فَقَالُوا/وَقَالُوا + quoted claim) used three times in this chapter.',
          'Imperfect -- wrong tense; the narration is past.',
          'Imperative -- wrong mood and person for this narration.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَجَعَلُوا مِنَ الْإِلَهِ الْوَاحِدِ الصَّمَدِ',
        post: 'مُؤَلَّفَةً مِنْ ثَلَاثَةِ أَعْضَاءٍ.',
        en: 'They turned the One, Eternal God into a family made up of three members.',
        options: ['أُسْرَةً', 'أُسْرَةٌ', 'أُسْرَةِ', 'أُسَر'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- second object of جَعَلَ ("made X into Y").',
          'Nominative -- wrong case; the second object of جَعَلَ is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural -- wrong number; one single family is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'أَنَّهُ تَحَوَّلَتْ',
        post: 'الْمَسِيحِ مِنَ التَّوْحِيدِ الْخَالِصِ إِلَى عَقِيدَةٍ غَامِضَةٍ.',
        en: "That al-Masih's message changed from pure monotheism to a vague creed.",
        options: ['دَعْوَةُ', 'دَعْوَةَ', 'دَعْوَةِ', 'دَعْوَتَهُ'],
        answer: 0,
        rationales: [
          'Nominative, construct -- subject of تَحَوَّلَتْ and first term of an إضافة with الْمَسِيحِ.',
          'Accusative -- wrong case; the subject of a verb is nominative.',
          'Genitive -- wrong case for the same reason.',
          'With a possessive suffix -- wrong; the construct here takes الْمَسِيحِ directly as the second term.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'قَالَ التِّلْمِيذُ: الْمَسِيحُ ابْنُ اللَّهِ',
        pre: '',
        post: 'التِّلْمِيذُ: الْمَسِيحُ ابْنُ اللَّهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['قَالُوا', 'قَالَ', 'قَالَتْ', 'قُلْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'قَالَ التِّلْمِيذُ: الْمَسِيحُ ابْنُ اللَّهِ',
        pre: '',
        post: 'التِّلْمِيذُ: الْمَسِيحُ ابْنُ اللَّهِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['قُلْنَا', 'قَالَ', 'قَالُوا', 'قَالَتْ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '3rd masculine plural -- they.',
          '3rd feminine singular -- wrong person and gender.',
        ],
      },
      {
        type: 'shift',
        base: 'قَالَ التِّلْمِيذُ: الْمَسِيحُ ابْنُ اللَّهِ',
        pre: '',
        post: 'التِّلْمِيذُ: الْمَسِيحُ ابْنُ اللَّهِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['قَالَتْ', 'قَالَ', 'قَالُوا', 'قُلْنَا'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- the base form, not shifted to "she."',
          '3rd masculine plural -- they.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

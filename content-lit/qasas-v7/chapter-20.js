// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 20 (FINAL CHAPTER of this volume) -- ٢٠ - بَنُو
// إِسْرَائِيلَ بَعْدَ مُوسى ("The Children of Israel After Mūsā"). Pages
// 211-212 -- from the heading at the top of page 211 (right after chapter
// 19's close) through the end of page 212, which ends with a TRIPLE-ROSETTE
// ornamental divider. Transcribed by hand from the scan (vision OCR)
// against ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// IMPORTANT for future maintainers, per house practice of documenting how
// a volume closes (cf. qasas-v3/chapter-22.js's own header): the
// triple-rosette divider on page 212 closes not just this chapter but the
// ENTIRE volume -- this is the last page of «Mūsā vs. Pharaoh through the
// Exodus» (volume 7 of this 12-volume-equivalent work). The story
// continues into volume 8, about Shuʿayb, which is a SEPARATE book (its
// own chapter numbering, its own qasas-v8 shell) -- not part of volume 7
// and out of scope for this file. Per the standing instruction for this
// project, work on this shell stops here once volume 7 is complete.
//
// This chapter is almost entirely the author's own narrative/rhetorical
// prose -- an elegy for Mūsā and an indictment of the Children of
// Israel's ingratitude -- unlike chapter 19's Qur'an-heavy page. It
// contains two short embedded Qur'anic quotations (Baqarah 2:61's
// "ضُرِبَتْ عَلَيْهِمُ الذِّلَّةُ..." fragment, and the closing "وَمَا ظَلَمَهُمُ
// اللَّهُ..." formula, cf. Naḥl 16:118 and its parallels) -- both short
// (8 and 7 tokens) with visible case-marked common nouns, left as
// ordinary prose per instruction rather than shortened or fragmented.
//
// Segmentation: several long printed sentences are split at their natural
// clause/coordination boundary into multiple shorter entries (house
// convention, e.g. qasas-v3/chapter-22.js's header), matching no reworded
// text, same printed order. Most notably the two rhetorical refrains this
// page is built from -- see below.
//
// Grammar / lexical / transcription notes, flagged rather than silently
// resolved:
//   -- qs-v7-c20-009b ("أَشْفَقُ خَلْقِ اللَّهِ عَلَيْهِمْ..."): the supplied
//      transcript renders this word identically to the following verb
//      ("أَشْفَقَ خَلْقِ اللَّهِ عَلَيْهِمْ وَأَشْفَقَ عَلَيْهِمْ..."), i.e. with what
//      reads as a fatḥa. Read strictly as a Form-IV verb (أَشْفَقَ, "he had
//      compassion"), the following "خَلْقِ اللَّهِ" (genitive construct) has
//      no governor and the sentence does not parse. Read instead as the
//      elative adjective أَشْفَقُ ("most compassionate of," nominative
//      predicate governing خَلْقِ اللَّهِ as its مضاف إليه) it parses cleanly
//      and matches the well-attested rhetorical pattern "أَشْفَقُ خَلْقِ اللَّهِ
//      عَلَى..." One letter's vowel (fatḥa->ḍamma) is corrected here on
//      THIS FIRST occurrence only; the second occurrence ("وَأَشْفَقَ عَلَيْهِمْ
//      مِنْ آبَائِهِمْ") is kept as the plain Form-IV verb, which parses
//      correctly as printed. Flagging this explicitly as a judgment call,
//      not a certainty -- a second pair of eyes against the actual scan
//      would be valuable here.
//   -- ذلِكَ is printed throughout this page without the internal alif
//      (ذلِكَ, not ذَلِكَ) -- five times (qs-v7-c20-008, 010a, 011a, 012a,
//      015). Transcribed here exactly as printed in `surface`/`ar`, but
//      tagged under the already-taught lemma ذَلِكَ (bedrock, used
//      unflagged since qasas-v1) rather than as a new spelling variant --
//      this is read as a print/rendering convention of this edition, not
//      a different word.
//   -- بَنُو إِسْرَائِيلَ (qs-v7-c20-001) is tokenized as TWO tokens per
//      house convention: بَنُو with lemma اِبْن (pl.constr + case), and
//      إِسْرَائِيلَ as its own proper-noun lemma (gen). إِسْرَائِيل itself was
//      already introduced as new in qasas-v6/chapter-03.js (this story's
//      direct narrative predecessor -- confirmed relevant per that
//      volume's own framing) and is NOT re-listed in newWords here.
//   -- The two rhetorical refrains this page is built from are kept as
//      short, clean, repeating clauses on purpose -- they are this
//      chapter's dominant construction and the source of `workshop`
//      below:
//        * page 211: الَّذِي أَنْجَاهُمْ.../الَّذِي فَرَقَ.../الَّذِي ظَلَّلَ.../الَّذِي
//          فَجَّرَ... -- four parallel headless-relative clauses, all with
//          الَّذِي referring back to اللَّه and a perfect-tense verb.
//        * page 212: ذلِكَ الَّذِي كَانَ يَحْنُو.../ذلِكَ الَّذِي سَبُّوهُ.../ذلِكَ
//          الَّذِي خَلَّصَهُمْ... -- three parallel ذلِكَ الَّذِي + perfect-verb
//          clauses, referring back to Mūsā.
//      Per instruction, `workshop.cloze`/`workshop.shift` are built only
//      from this recycled prose pattern (see below), never from either
//      embedded Qur'anic fragment.
//   -- يُذَبِّحُونَ (qs-v7-c20-004c) reuses the already-taught lemma ذَبَحَ
//      (qasas-v1 ch14) rather than a new lemma -- same root, intensive/
//      iterative Form II sense ("slaughtering [repeatedly/many]"), same
//      convention as this corpus's existing practice of not re-teaching a
//      derived form of an already-known root unless the sense is
//      genuinely distinct (contrast with خَلَّصَ below, which IS tagged
//      new despite sharing a root-adjacent shape with the already-known
//      خَلَّى "to leave, vacate" -- different root entirely, خ ل ص vs
//      خ ل ي, not a derivational relationship).
//   -- ٱلذِّلَّةُ (qs-v7-c20-002, Qur'anic) is tagged under lemma 'ذُلّ'
//      rather than a separate 'ذِلَّة' entry, matching the precedent
//      already set by qasas-v7/chapter-17.js (its own header: "ذِلَّةٌ ...
//      and ذُلّ ... merged under one lemma 'ذُلّ'"). ذُلّ is itself already
//      new as of chapter 17 and is NOT re-listed in newWords here.
//   -- وَالسَّلْوى (qs-v7-c20-006b) is tagged under lemma 'سَلْوَى' (matching
//      the exact spelling already established by qasas-v7/chapter-09.js,
//      where السَّلْوَى/مَنّ/مَشْرَب/غَمَام were all first introduced) even
//      though this page's own transcript prints the surface without the
//      internal fatḥa diacritic (سَلْوى, not سَلْوَى) -- `surface` still
//      matches the scan exactly; only `lemma` is aligned to the
//      already-established citation spelling so "mark as unknown"
//      resolves to the same lemma either chapter is read from.
//
// IMPORTANT re: mid-session vocabulary re-check -- chapters 3-18 of this
// volume did not exist on disk when this chapter's vocabulary was first
// checked (only ch1-2 existed at the time -- other agents were still
// writing the rest of the volume in parallel). Chapters 3-17 appeared
// mid-session; re-grepping against them before finalizing surfaced SEVEN
// more already-taught lemmas, removed from newWords accordingly: غَمَام،
// مَنّ، مَشْرَب، سَلْوَى (all four qasas-v7 ch9), ذُلّ (qasas-v7 ch17, also
// absorbing ذِلَّة per the note above), كُلَّمَا (qasas-v7 ch6/ch11).
// Chapter 18 still did not exist at finalization time and could not be
// checked.
//
// Scope note on what counts as "already known" for this volume (same
// scope as chapter-19.js's header): qasas-v1, v2, v3, qiraah-v1, qiraah-v2
// (via the supplied lexicon.txt export), qasas-v6 (this story's direct
// narrative predecessor), and this volume's own chapters 1-17 (all that
// existed on disk by finalization time -- see note above). Volumes v4,
// v5, v8-v12 were NOT consulted for known-word status.
//
// Shared lexicon check (grepped against lexicon.txt, qasas-v1/2/3,
// qasas-v6, and this volume's own chapters 1-17):
// تَوَفَّى (qiraah-v2 ch60, reused for the passive تُوُفِّيَ)، مُوسَى (qasas-v7
// ch1)، اِبْن (qasas-v1 ch14)، إِسْرَائِيل (qasas-v6 ch3, not re-listed)، فِي،
// أَرْض (qasas-v1 ch13)، عِقَاب (qasas-v1 ch6)، مِنَ، اللَّه، جَزَاء (qasas-v1
// ch6)، عَمَل (qiraah-v2 ch40)، ضَرَبَ (qasas-v1 ch4/11)، عَلَى، غَضَب
// (qasas-v2 ch8)، إِنَّ، قَدْ (qasas-v2 ch1)، جَعَلَ (qasas-v1 ch8)، الَّذِي
// (qasas-v1 ch9)، نَبِيّ (qasas-v1 ch8)، مَلِك (qasas-v1 ch10)، آتَى (qasas-v2
// ch11)، لَمْ (qasas-v2 ch4)، عَالَم (qasas-v3 ch22)، أَنْجَى (qasas-v3 ch20)،
// آل (qasas-v2 ch1)، فِرْعَوْن (qasas-v7 ch1)، سَامَ (qasas-v6 ch11/20)، سُوء
// (qasas-v7 ch1)، عَذَاب (qasas-v3 ch11)، ذَبَحَ (qasas-v1 ch14, reused)،
// اِبْن، اِسْتَحْيَا (qasas-v2 ch16)، نِسَاء (qasas-v3 ch1)، فَرَقَ (qiraah-v2
// ch61)، بِ، بَحْر (qasas-v2 ch9)، أَغْرَقَ (qasas-v3 ch18)، نَظَرَ (qiraah-v2
// ch38)، أَنْزَلَ (qasas-v3 ch12)، فَجَّرَ (qiraah-v2 ch45)، لِ، عَيْن (qiraah-v2
// ch64)، وَسَّعَ (qiraah-v2 ch68)، غَمَام (qasas-v7 ch9), مَنّ (qasas-v7 ch9),
// سَلْوَى (qasas-v7 ch9, see note above), مَشْرَب (qasas-v7 ch9), كَانَ، كُلّ
// (qasas-v1 ch10)، ذَلِكَ (bedrock, see note above)، أَنْ، كَفَرَ (qasas-v3
// ch8)، آيَة (qasas-v2 ch4)، عَصَى (qiraah-v2 ch38)، أَغْضَبَ (qasas-v6
// ch21)، خَلْق (qasas-v2 ch11)، مُرْضِع (qasas-v6 ch9/10)، يَتِيم (qiraah-v1
// ch24)، حَنُون (qasas-v6 ch7/10)، أُمّ (qasas-v1 ch13)، سَبَّ (qasas-v6
// ch21)، دَعَا (qasas-v1 ch8)، كُلَّمَا (qasas-v7 ch6/ch11), ضَحِكَ (qasas-v2
// ch9)، بَكَى (qasas-v2 ch5)، أَخْرَجَ (qasas-v2 ch7)، سِجْن (qasas-v2 ch8)،
// مِصْر (qasas-v2 ch7)، بَرّ (qasas-v2 ch9)، حُرِّيَّة (qasas-v6 ch14)، شَرَف
// (qasas-v3 ch12)، حَيَاة (qiraah-v2 ch51)، عَبْد (qasas-v2 ch9)، شَقِيّ
// (qiraah-v2 ch48)، حُرّ (qasas-v2 ch9)، شَرِيف (qasas-v3 ch14)، آذَى
// (qiraah-v2 ch52)، عَانَدَ (qiraah-v2 ch38)، سَخِرَ (qiraah-v2 ch61)، عِنْدَ
// (qasas-v1 ch15)، اِسْتَحَقَّ (qasas-v2 ch9)، بَلَى (qasas-v3 ch20)، أَكْثَر
// (qasas-v3 ch17)، لَكِنَّ (qasas-v1 ch6/14)، ظَلَمَ (qasas-v6 ch2)، نَفْس
// (qasas-v1 ch2)، إِلَى، هَذَا (bedrock)، ذُلّ (qasas-v7 ch17, see note above)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 21 new words (تَاهَ، تِيه، مَسْكَنَة، بَاءَ، أَسْخَطَ، عَصْر، ظَلَّلَ، مَأْكَل، اِعْتَدَى،
// أَشْفَقَ، حَنَا، حُنُوّ، فَطِيم، جَفَا، رَثَى، خَلَّصَ، أَسْر، أَهْوَن، وَجِيه، خِزْي، دَائِم)
// -- still high, but expected for a dense elegiac/rhetorical closing
// chapter with many one-off derivational forms, comparable to this
// volume's own chapter 1 (33 new words for the same reason -- a
// register-dense passage rather than plain narrative). (Seven more
// candidates turned out to already be taught earlier in this same volume
// once chapters 3-17 became available mid-session; see note above.)
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch20',
  title: { ar: 'بَنُو إِسْرَائِيلَ بَعْدَ مُوسى', en: 'The Children of Israel After Mūsā' },
  newWords: [
    'مَسْكَنَة', 'بَاءَ', 'أَسْخَطَ', 'عَصْر', 'ظَلَّلَ', 'مَأْكَل', 'اِعْتَدَى',
    'أَشْفَقَ', 'حَنَا', 'حُنُوّ', 'فَطِيم', 'جَفَا', 'رَثَى', 'خَلَّصَ', 'أَسْر', 'أَهْوَن',
    'وَجِيه', 'خِزْي', 'دَائِم',
  ],
  lemmas: {
    'مَسْكَنَة': { gloss: 'wretchedness' },
    'بَاءَ': { gloss: 'to return laden with, incur' },
    'أَسْخَطَ': { gloss: 'to enrage, cause wrath' },
    'عَصْر': { gloss: 'era, age, time' },
    'ظَلَّلَ': { gloss: 'to shade, overshadow' },
    'مَأْكَل': { gloss: 'food' },
    'اِعْتَدَى': { gloss: 'to transgress' },
    'أَشْفَقَ': { gloss: 'to be compassionate; most compassionate' },
    'حَنَا': { gloss: 'to be tender, incline compassionately towards' },
    'حُنُوّ': { gloss: 'tenderness' },
    'فَطِيم': { gloss: 'weaned child' },
    'جَفَا': { gloss: 'to be harsh with, estrange' },
    'رَثَى': { gloss: 'to lament, grieve for' },
    'خَلَّصَ': { gloss: 'to deliver, rescue' },
    'أَسْر': { gloss: 'captivity' },
    'أَهْوَن': { gloss: 'more/most contemptible' },
    'وَجِيه': { gloss: 'distinguished, of high standing' },
    'خِزْي': { gloss: 'disgrace' },
    'دَائِم': { gloss: 'perpetual, everlasting' },
  },
  paragraphs: [
    {
      en: 'Mūsā passed away while the Children of Israel were wandering lost in the land, a punishment from Allah and the recompense of their own deeds. "Abasement and wretchedness were struck upon them, and they returned laden with anger from Allah." They had angered Allah, who had made prophets among them, made them kings, and given them what He had given no one else in the world in their time.',
      sentences: [
        {
          id: 'qs-v7-c20-001',
          ar: 'وَتُوُفِّيَ مُوسى وَبَنُو إِسْرَائِيلَ يَتِيهُونَ فِي الْأَرْضِ عِقَاباً مِنَ اللَّهِ وَجَزَاءَ أَعْمَالِهِمْ .',
          en: 'Mūsā passed away while the Children of Israel were wandering lost in the land, a punishment from Allah and the recompense of their deeds.',
          tokens: [
            { surface: 'وَتُوُفِّيَ', lemma: 'تَوَفَّى', pos: 'verb', features: 'conj+perf.pass.3ms', gloss: 'to pass away; and passed away' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'وَبَنُو', lemma: 'اِبْن', pos: 'noun', features: 'conj+pl.constr.nom', gloss: 'and the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'يَتِيهُونَ', lemma: 'تَاهَ', pos: 'verb', features: 'impf.3mp', root: 'ت ي ه', gloss: 'to wander lost; wandering' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the land' },
            { surface: 'عِقَاباً', lemma: 'عِقَاب', pos: 'noun', features: 'indef.acc', gloss: 'as a punishment' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَجَزَاءَ', lemma: 'جَزَاء', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the recompense of' },
            { surface: 'أَعْمَالِهِمْ', lemma: 'عَمَل', pos: 'noun', features: 'pl.gen+3mp', gloss: 'their deeds' },
          ],
        },
        {
          // Baqarah 2:61 fragment. 8 tokens, case-marked common nouns
          // throughout -- naturally buildable per instruction.
          id: 'qs-v7-c20-002',
          ar: '﴿وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ وَٱلْمَسْكَنَةُ وَبَآءُو بِغَضَبٍ مِّنَ ٱللَّهِ﴾ .',
          en: '"And abasement and wretchedness were struck upon them, and they returned laden with anger from Allah."',
          tokens: [
            { surface: 'وَضُرِبَتْ', lemma: 'ضَرَبَ', pos: 'verb', features: 'conj+perf.pass.3fs', gloss: 'to strike; and was struck' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'ٱلذِّلَّةُ', lemma: 'ذُلّ', pos: 'noun', features: 'def.nom', root: 'ذ ل ل', gloss: 'abasement' },
            { surface: 'وَٱلْمَسْكَنَةُ', lemma: 'مَسْكَنَة', pos: 'noun', features: 'conj+def.nom', root: 'س ك ن', gloss: 'and wretchedness' },
            { surface: 'وَبَآءُو', lemma: 'بَاءَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ب و أ', gloss: 'to return laden with, incur; and they incurred' },
            { surface: 'بِغَضَبٍ', lemma: 'غَضَب', pos: 'noun', features: 'prep+indef.gen', gloss: 'anger' },
            { surface: 'مِّنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'ٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c20-003a',
          ar: 'إِنَّهُمْ قَدْ أَسْخَطُوا اللَّهَ الَّذِي جَعَلَ فِيهِمْ أَنْبِيَاءَ،',
          en: 'They had angered Allah, who had made prophets among them,',
          tokens: [
            { surface: 'إِنَّهُمْ', lemma: 'إِنَّ', pos: 'part', features: 'part+3mp', gloss: 'indeed they' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: '[had]' },
            { surface: 'أَسْخَطُوا', lemma: 'أَسْخَطَ', pos: 'verb', features: 'perf.3mp', root: 'س خ ط', gloss: 'to enrage, cause wrath; angered' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'جَعَلَ', lemma: 'جَعَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to make, place; had made' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'أَنْبِيَاءَ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.acc', gloss: 'prophets' },
          ],
        },
        {
          id: 'qs-v7-c20-003b',
          ar: 'وَجَعَلَهُمْ مُلُوكاً،',
          en: 'made them kings,',
          tokens: [
            { surface: 'وَجَعَلَهُمْ', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to make; and made them' },
            { surface: 'مُلُوكاً', lemma: 'مَلِك', pos: 'noun', features: 'pl.indef.acc', gloss: 'kings' },
          ],
        },
        {
          id: 'qs-v7-c20-003c',
          ar: 'وآتَاهُمْ مَا لَمْ يُؤْتِ أَحَداً مِنَ الْعَالَمِينَ فِي عَصْرِهِمْ .',
          en: 'and had given them what He had given no one else in the world in their time.',
          tokens: [
            { surface: 'وآتَاهُمْ', lemma: 'آتَى', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to give; and gave them' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُؤْتِ', lemma: 'آتَى', pos: 'verb', features: 'impf.3ms', gloss: 'to give; He gave' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, among' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the worlds, mankind' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'عَصْرِهِمْ', lemma: 'عَصْر', pos: 'noun', features: 'gen+3mp', root: 'ع ص ر', gloss: 'their time, era' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ عُوقِبَ بَنُو إِسْرَائِيلَ بَعْدَ وَفَاةِ مُوسى؟',
          options: ['تَاهُوا فِي الْأَرْضِ عِقَاباً مِنَ اللَّهِ وَجَزَاءَ أَعْمَالِهِمْ', 'عَاشُوا فِي نِعْمَةٍ دَائِمَةٍ', 'رَجَعُوا فَوْراً إِلى مِصْرَ'],
          answer: 0,
          qEn: 'How were the Children of Israel punished after Mūsā died?',
          optionsEn: ['They wandered lost in the land, a punishment from Allah and the recompense of their deeds', 'They lived in constant blessing', 'They returned to Egypt at once'],
        },
        {
          q: 'مَاذَا فَعَلَ اللَّهُ لِبَنِي إِسْرَائِيلَ قَبْلَ أَنْ يُسْخِطُوهُ؟',
          options: ['جَعَلَ فِيهِمْ أَنْبِيَاءَ وَجَعَلَهُمْ مُلُوكاً وَآتَاهُمْ مَا لَمْ يُؤْتِ أَحَداً مِنَ الْعَالَمِينَ', 'تَرَكَهُمْ وَحْدَهُمْ بِلا عَوْنٍ', 'عَاقَبَهُمْ مُنْذُ الْبِدَايَةِ'],
          answer: 0,
          qEn: 'What had Allah done for the Children of Israel before they angered Him?',
          optionsEn: ['He made prophets among them, made them kings, and gave them what He gave no one else in the world', 'He left them alone without any help', 'He had punished them from the very beginning'],
        },
      ],
    },
    {
      en: "He who saved them from Pharaoh's household, as it subjected them to the worst torment, slaughtering their sons and sparing their women. He who split the sea for them and saved them, and drowned Pharaoh's household as they looked on. He who shaded them with clouds and sent down manna and quails upon them. He who caused springs to gush for them from the earth, and gave them ample food and drink.",
      sentences: [
        {
          id: 'qs-v7-c20-004a',
          ar: 'الَّذِي أَنْجَاهُمْ مِنْ آلِ فِرْعَوْنَ',
          en: 'He who saved them from the household of Pharaoh,',
          tokens: [
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'he who' },
            { surface: 'أَنْجَاهُمْ', lemma: 'أَنْجَى', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to save, rescue; saved them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'آلِ', lemma: 'آل', pos: 'noun', features: 'gen.constr', gloss: 'the household of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
          ],
        },
        {
          id: 'qs-v7-c20-004b',
          ar: 'يَسُومُونَهُمْ سُوءَ الْعَذَابِ',
          en: 'as it subjected them to the worst torment,',
          tokens: [
            { surface: 'يَسُومُونَهُمْ', lemma: 'سَامَ', pos: 'verb', features: 'impf.3mp+3mp', gloss: 'to subject to, inflict upon; subjecting them' },
            { surface: 'سُوءَ', lemma: 'سُوء', pos: 'noun', features: 'acc.constr', gloss: 'the worst of' },
            { surface: 'الْعَذَابِ', lemma: 'عَذَاب', pos: 'noun', features: 'def.gen', gloss: 'the torment' },
          ],
        },
        {
          id: 'qs-v7-c20-004c',
          ar: 'يُذَبِّحُونَ أَبْنَاءَهُمْ وَيَسْتَحْيُونَ نِسَاءَهُمْ .',
          en: 'slaughtering their sons and sparing their women.',
          tokens: [
            { surface: 'يُذَبِّحُونَ', lemma: 'ذَبَحَ', pos: 'verb', features: 'impf.3mp', gloss: 'to slaughter; slaughtering' },
            { surface: 'أَبْنَاءَهُمْ', lemma: 'اِبْن', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their sons' },
            { surface: 'وَيَسْتَحْيُونَ', lemma: 'اِسْتَحْيَا', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to let live, spare; and sparing' },
            { surface: 'نِسَاءَهُمْ', lemma: 'نِسَاء', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their women' },
          ],
        },
        {
          id: 'qs-v7-c20-005a',
          ar: 'الَّذِي فَرَقَ بِهِمُ الْبَحْرَ فَأَنْجَاهُمْ',
          en: 'He who split the sea for them and saved them,',
          tokens: [
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'he who' },
            { surface: 'فَرَقَ', lemma: 'فَرَقَ', pos: 'verb', features: 'perf.3ms', gloss: 'to part, split; split' },
            { surface: 'بِهِمُ', lemma: 'بِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'الْبَحْرَ', lemma: 'بَحْر', pos: 'noun', features: 'def.acc', gloss: 'the sea' },
            { surface: 'فَأَنْجَاهُمْ', lemma: 'أَنْجَى', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to save; and saved them' },
          ],
        },
        {
          id: 'qs-v7-c20-005b',
          ar: 'وَأَغْرَقَ آلَ فِرْعَوْنَ وَهُمْ يَنْظُرُونَ .',
          en: "and drowned Pharaoh's household as they looked on.",
          tokens: [
            { surface: 'وَأَغْرَقَ', lemma: 'أَغْرَقَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to drown; and drowned' },
            { surface: 'آلَ', lemma: 'آل', pos: 'noun', features: 'acc.constr', gloss: 'the household of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَهُمْ', lemma: 'هُمْ', pos: 'noun', features: 'conj+3mp', gloss: 'while they' },
            { surface: 'يَنْظُرُونَ', lemma: 'نَظَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to look; looking on' },
          ],
        },
        {
          id: 'qs-v7-c20-006a',
          ar: 'الَّذِي ظَلَّلَ عَلَيْهِمُ الْغَمَامَ',
          en: 'He who shaded them with clouds',
          tokens: [
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'he who' },
            { surface: 'ظَلَّلَ', lemma: 'ظَلَّلَ', pos: 'verb', features: 'perf.3ms', root: 'ظ ل ل', gloss: 'to shade, overshadow; shaded' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'over them' },
            { surface: 'الْغَمَامَ', lemma: 'غَمَام', pos: 'noun', features: 'def.acc', root: 'غ م م', gloss: 'clouds' },
          ],
        },
        {
          id: 'qs-v7-c20-006b',
          ar: 'وَأَنْزَلَ عَلَيْهِمُ الْمَنَّ وَالسَّلْوى .',
          en: 'and sent down manna and quails upon them.',
          tokens: [
            { surface: 'وَأَنْزَلَ', lemma: 'أَنْزَلَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to send down; and sent down' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'الْمَنَّ', lemma: 'مَنّ', pos: 'noun', features: 'def.acc', root: 'م ن ن', gloss: 'manna' },
            { surface: 'وَالسَّلْوى', lemma: 'سَلْوَى', pos: 'noun', features: 'conj+def.acc', root: 'س ل و', gloss: 'and quails' },
          ],
        },
        {
          id: 'qs-v7-c20-007a',
          ar: 'الَّذِي فَجَّرَ لَهُمْ مِنَ الْأَرْضِ عُيُوناً،',
          en: 'He who caused springs to gush for them from the earth,',
          tokens: [
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'he who' },
            { surface: 'فَجَّرَ', lemma: 'فَجَّرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to cause to gush; caused to gush' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
            { surface: 'عُيُوناً', lemma: 'عَيْن', pos: 'noun', features: 'pl.indef.acc', gloss: 'springs' },
          ],
        },
        {
          id: 'qs-v7-c20-007b',
          ar: 'وَوَسَّعَ لَهُمْ فِي مَأْكَلٍ وَمَشْرَبٍ .',
          en: 'and gave them ample food and drink.',
          tokens: [
            { surface: 'وَوَسَّعَ', lemma: 'وَسَّعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to widen, make ample; and made ample' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مَأْكَلٍ', lemma: 'مَأْكَل', pos: 'noun', features: 'indef.gen', root: 'أ ك ل', gloss: 'food' },
            { surface: 'وَمَشْرَبٍ', lemma: 'مَشْرَب', pos: 'noun', features: 'conj+indef.gen', root: 'ش ر ب', gloss: 'and drink' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ آلُ فِرْعَوْنَ بِبَنِي إِسْرَائِيلَ قَبْلَ أَنْ يُنْجِيَهُمُ اللَّهُ؟',
          options: ['كَانُوا يَسُومُونَهُمْ سُوءَ الْعَذَابِ وَيُذَبِّحُونَ أَبْنَاءَهُمْ', 'كَانُوا يُكْرِمُونَهُمْ غَايَةَ الإِكْرَامِ', 'كَانُوا يُشَارِكُونَهُمُ الْمُلْكَ'],
          answer: 0,
          qEn: "What had Pharaoh's household done to the Children of Israel before Allah saved them?",
          optionsEn: ['They subjected them to the worst torment and slaughtered their sons', 'They honored them greatly', 'They shared the kingship with them'],
        },
        {
          q: 'بِمَاذَا أَنْعَمَ اللَّهُ عَلَيْهِمْ بَعْدَ نَجَاتِهِمْ؟',
          options: ['ظَلَّلَ عَلَيْهِمُ الْغَمَامَ وَأَنْزَلَ عَلَيْهِمُ الْمَنَّ وَالسَّلْوى وَفَجَّرَ لَهُمُ الْعُيُونَ', 'تَرَكَهُمْ بِلا طَعَامٍ وَلا شَرَابٍ', 'أَعَادَهُمْ إِلى مِصْرَ فَوْراً'],
          answer: 0,
          qEn: 'What blessings did Allah grant them after their deliverance?',
          optionsEn: ['He shaded them with clouds, sent down manna and quails, and made springs gush for them', 'He left them without food or drink', 'He returned them to Egypt at once'],
        },
      ],
    },
    {
      en: "And the recompense for all that was that they disbelieved in the signs of Allah, disobeyed, and transgressed. And they angered their own prophet Mūsā -- the most compassionate of Allah's creation towards them, more compassionate towards them than their own fathers and mothers.",
      sentences: [
        {
          id: 'qs-v7-c20-008',
          ar: 'وَكَانَ جَزَاءُ كُلِّ ذلِكَ أَنْ كَفَرُوا بِآيَاتِ اللَّهِ وَعَصَوْا وَاعْتَدَوا .',
          en: 'And the recompense for all that was that they disbelieved in the signs of Allah, disobeyed, and transgressed.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'جَزَاءُ', lemma: 'جَزَاء', pos: 'noun', features: 'nom.constr', gloss: 'the recompense of' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'all of' },
            { surface: 'ذلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'كَفَرُوا', lemma: 'كَفَرَ', pos: 'verb', features: 'perf.3mp', gloss: 'to disbelieve; disbelieved' },
            { surface: 'بِآيَاتِ', lemma: 'آيَة', pos: 'noun', features: 'prep+pl.gen.constr', gloss: 'in the signs of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَعَصَوْا', lemma: 'عَصَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to disobey; and disobeyed' },
            { surface: 'وَاعْتَدَوا', lemma: 'اِعْتَدَى', pos: 'verb', features: 'conj+perf.3mp', root: 'ع د و', gloss: 'to transgress; and transgressed' },
          ],
        },
        {
          id: 'qs-v7-c20-009a',
          ar: 'وَأَغْضَبُوا نَبِيَّهُمْ مُوسى',
          en: 'And they angered their prophet Mūsā --',
          tokens: [
            { surface: 'وَأَغْضَبُوا', lemma: 'أَغْضَبَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to anger, enrage; and angered' },
            { surface: 'نَبِيَّهُمْ', lemma: 'نَبِيّ', pos: 'noun', features: 'acc+3mp', gloss: 'their prophet' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
          ],
        },
        {
          // First "أَشْفَقَ" corrected to the elative أَشْفَقُ -- see header note.
          id: 'qs-v7-c20-009b',
          ar: 'أَشْفَقُ خَلْقِ اللَّهِ عَلَيْهِمْ وَأَشْفَقَ عَلَيْهِمْ مِنْ آبَائِهِمْ وَأُمَّهَاتِهِمْ .',
          en: "the most compassionate of Allah's creation towards them, more compassionate towards them than their own fathers and mothers.",
          tokens: [
            { surface: 'أَشْفَقُ', lemma: 'أَشْفَقَ', pos: 'adj', features: 'nom.constr', root: 'ش ف ق', gloss: 'the most compassionate of' },
            { surface: 'خَلْقِ', lemma: 'خَلْق', pos: 'noun', features: 'gen.constr', gloss: 'the creation of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'towards them' },
            { surface: 'وَأَشْفَقَ', lemma: 'أَشْفَقَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be compassionate; and was more compassionate' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'towards them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'آبَائِهِمْ', lemma: 'أَب', pos: 'noun', features: 'pl.gen+3mp', gloss: 'their fathers' },
            { surface: 'وَأُمَّهَاتِهِمْ', lemma: 'أُمّ', pos: 'noun', features: 'conj+pl.gen+3mp', gloss: 'and their mothers' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ جَزَاءُ بَنِي إِسْرَائِيلَ عَلى كُلِّ هذِهِ النِّعَمِ؟',
          options: ['أَنْ كَفَرُوا بِآيَاتِ اللَّهِ وَعَصَوْا وَاعْتَدَوا وَأَغْضَبُوا نَبِيَّهُمْ مُوسى', 'أَنْ شَكَرُوا اللَّهَ وَاتَّبَعُوا مُوسى', 'أَنْ سَكَتُوا وَلَمْ يَفْعَلُوا شَيْئاً'],
          answer: 0,
          qEn: 'How did the Children of Israel repay all these blessings?',
          optionsEn: ['By disbelieving in the signs of Allah, disobeying, transgressing, and angering their prophet Mūsā', 'By thanking Allah and following Mūsā', 'By staying silent and doing nothing at all'],
        },
      ],
    },
    {
      en: "That is the one who was tender towards them with the tenderness of a nursing mother towards her weaned child, and like the loving mother towards the orphan. That is the one they cursed, yet he prayed for them; whenever they mocked him, he wept for them, and whenever they were harsh with him, he grieved for them.",
      sentences: [
        {
          id: 'qs-v7-c20-010a',
          ar: 'ذلِكَ الَّذِي كَانَ يَحْنُو عَلَيْهِمْ حُنُوَّ الْمُرْضِعِ عَلى الْفَطِيمِ،',
          en: 'That is the one who was tender towards them with the tenderness of a nursing mother towards her weaned child,',
          tokens: [
            { surface: 'ذلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'يَحْنُو', lemma: 'حَنَا', pos: 'verb', features: 'impf.3ms', root: 'ح ن و', gloss: 'to be tender, incline compassionately; being tender' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'towards them' },
            { surface: 'حُنُوَّ', lemma: 'حُنُوّ', pos: 'noun', features: 'acc.constr', root: 'ح ن و', gloss: 'the tenderness of' },
            { surface: 'الْمُرْضِعِ', lemma: 'مُرْضِع', pos: 'noun', features: 'def.gen', gloss: 'the nursing mother' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'towards' },
            { surface: 'الْفَطِيمِ', lemma: 'فَطِيم', pos: 'noun', features: 'def.gen', root: 'ف ط م', gloss: 'the weaned child' },
          ],
        },
        {
          id: 'qs-v7-c20-010b',
          ar: 'والْأُمِّ الْحَنُونِ عَلى الْيَتِيمِ .',
          en: 'and like the loving mother towards the orphan.',
          tokens: [
            { surface: 'والْأُمِّ', lemma: 'أُمّ', pos: 'noun', features: 'conj+def.gen', gloss: 'and the mother' },
            { surface: 'الْحَنُونِ', lemma: 'حَنُون', pos: 'adj', features: 'def.gen', gloss: 'loving, compassionate' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'towards' },
            { surface: 'الْيَتِيمِ', lemma: 'يَتِيم', pos: 'noun', features: 'def.gen', gloss: 'the orphan' },
          ],
        },
        {
          id: 'qs-v7-c20-011a',
          ar: 'ذلِكَ الَّذِي سَبُّوهُ دَعَا لَهُمْ',
          en: 'That is the one they cursed, [yet] he prayed for them,',
          tokens: [
            { surface: 'ذلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one whom' },
            { surface: 'سَبُّوهُ', lemma: 'سَبَّ', pos: 'verb', features: 'perf.3mp+3ms', gloss: 'to curse, insult; they cursed him' },
            { surface: 'دَعَا', lemma: 'دَعَا', pos: 'verb', features: 'perf.3ms', gloss: 'to pray, call; he prayed' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
          ],
        },
        {
          id: 'qs-v7-c20-011b',
          ar: 'وَكُلَّمَا ضَحِكُوا عَلَيْهِ بَكى لَهُمْ وَكُلَّمَا جَفَوْهُ رَثى لَهُمْ .',
          en: 'and whenever they mocked him, he wept for them, and whenever they were harsh with him, he grieved for them.',
          tokens: [
            { surface: 'وَكُلَّمَا', lemma: 'كُلَّمَا', pos: 'conj', features: 'conj+conj', gloss: 'and whenever' },
            { surface: 'ضَحِكُوا', lemma: 'ضَحِكَ', pos: 'verb', features: 'perf.3mp', gloss: 'to laugh, mock; they mocked' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'at him' },
            { surface: 'بَكى', lemma: 'بَكَى', pos: 'verb', features: 'perf.3ms', gloss: 'to weep; he wept' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'وَكُلَّمَا', lemma: 'كُلَّمَا', pos: 'conj', features: 'conj+conj', gloss: 'and whenever' },
            { surface: 'جَفَوْهُ', lemma: 'جَفَا', pos: 'verb', features: 'perf.3mp+3ms', root: 'ج ف و', gloss: 'to be harsh with, estrange; they were harsh with him' },
            { surface: 'رَثى', lemma: 'رَثَى', pos: 'verb', features: 'perf.3ms', root: 'ر ث ي', gloss: 'to lament, grieve for; he grieved' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ مُوسى يُعَامِلُ قَوْمَهُ رَغْمَ إِسَاءَتِهِمْ إِلَيْهِ؟',
          options: ['كَانَ يَحْنُو عَلَيْهِمْ وَيَدْعُو لَهُمْ وَيَبْكِي لَهُمْ إِذَا ضَحِكُوا عَلَيْهِ', 'كَانَ يَنْتَقِمُ مِنْهُمْ', 'كَانَ يَتْرُكُهُمْ وَلا يُبَالِي بِهِمْ'],
          answer: 0,
          qEn: 'How did Mūsā treat his people despite their mistreatment of him?',
          optionsEn: ['He was tender towards them, prayed for them, and wept for them when they mocked him', 'He took revenge on them', 'He abandoned them and paid them no attention'],
        },
      ],
    },
    {
      en: 'That is the one who delivered them from Pharaoh\'s captivity and brought them out of the prison of Egypt to the shore of freedom and honor -- from the life of wretched slaves to the life of free, honorable men. Yet they angered him, harmed him, defied him, mocked him, and made him the most contemptible of men among them, though he was distinguished in the sight of Allah. Do they not deserve this punishment, disgrace, abasement, wretchedness, and endless wandering, and deserve never to prosper? Yes indeed! They deserve all that and more, for their own deeds: "And Allah did not wrong them, but it was themselves that they wronged."',
      sentences: [
        {
          id: 'qs-v7-c20-012a',
          ar: 'ذلِكَ الَّذِي خَلَّصَهُمْ مِنْ أَسْرِ فِرْعَوْنَ وَأَخْرَجَهُمْ مِنْ سِجْنِ مِصْرَ إِلى بَرِّ الْحُرِّيَّةِ وَالشَّرَفِ،',
          en: "That is the one who delivered them from Pharaoh's captivity and brought them out of the prison of Egypt to the shore of freedom and honor,",
          tokens: [
            { surface: 'ذلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'خَلَّصَهُمْ', lemma: 'خَلَّصَ', pos: 'verb', features: 'perf.3ms+3mp', root: 'خ ل ص', gloss: 'to deliver, rescue; delivered them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَسْرِ', lemma: 'أَسْر', pos: 'noun', features: 'gen.constr', root: 'أ س ر', gloss: 'the captivity of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَأَخْرَجَهُمْ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to bring out; and brought them out' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'سِجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'gen.constr', gloss: 'the prison of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'بَرِّ', lemma: 'بَرّ', pos: 'noun', features: 'gen.constr', gloss: 'the shore of' },
            { surface: 'الْحُرِّيَّةِ', lemma: 'حُرِّيَّة', pos: 'noun', features: 'def.gen', gloss: 'freedom' },
            { surface: 'وَالشَّرَفِ', lemma: 'شَرَف', pos: 'noun', features: 'conj+def.gen', gloss: 'and honor' },
          ],
        },
        {
          id: 'qs-v7-c20-012b',
          ar: 'وَمِنْ حَيَاةِ الْعَبِيدِ الْأَشْقِيَاءِ،',
          en: 'from the life of wretched slaves,',
          tokens: [
            { surface: 'وَمِنْ', lemma: 'مِنْ', pos: 'prep', features: 'conj+prep', gloss: 'and from' },
            { surface: 'حَيَاةِ', lemma: 'حَيَاة', pos: 'noun', features: 'constr.gen', gloss: 'the life of' },
            { surface: 'الْعَبِيدِ', lemma: 'عَبْد', pos: 'noun', features: 'pl.def.gen', gloss: 'the slaves' },
            { surface: 'الْأَشْقِيَاءِ', lemma: 'شَقِيّ', pos: 'adj', features: 'pl.def.gen', gloss: 'wretched' },
          ],
        },
        {
          id: 'qs-v7-c20-012c',
          ar: 'إِلى حَيَاةِ الْأَحْرَارِ الشُّرَفَاءِ .',
          en: 'to the life of free, honorable men.',
          tokens: [
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'حَيَاةِ', lemma: 'حَيَاة', pos: 'noun', features: 'constr.gen', gloss: 'the life of' },
            { surface: 'الْأَحْرَارِ', lemma: 'حُرّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the free men' },
            { surface: 'الشُّرَفَاءِ', lemma: 'شَرِيف', pos: 'adj', features: 'pl.def.gen', gloss: 'honorable' },
          ],
        },
        {
          id: 'qs-v7-c20-013a',
          ar: 'قَدْ أَغْضَبُوهُ وَآذَوْهُ وَعَانَدُوهُ وَسَخِرُوا مِنْهُ وَجَعَلُوهُ أَهْوَنَ رَجُلٍ فِيهِمْ',
          en: 'Yet they angered him, harmed him, defied him, mocked him, and made him the most contemptible of men among them,',
          tokens: [
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: '[indeed]' },
            { surface: 'أَغْضَبُوهُ', lemma: 'أَغْضَبَ', pos: 'verb', features: 'perf.3mp+3ms', gloss: 'to anger; they angered him' },
            { surface: 'وَآذَوْهُ', lemma: 'آذَى', pos: 'verb', features: 'conj+perf.3mp+3ms', gloss: 'to harm; and harmed him' },
            { surface: 'وَعَانَدُوهُ', lemma: 'عَانَدَ', pos: 'verb', features: 'conj+perf.3mp+3ms', gloss: 'to defy, oppose; and defied him' },
            { surface: 'وَسَخِرُوا', lemma: 'سَخِرَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to mock; and mocked' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'at him' },
            { surface: 'وَجَعَلُوهُ', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+perf.3mp+3ms', gloss: 'to make; and made him' },
            { surface: 'أَهْوَنَ', lemma: 'أَهْوَن', pos: 'adj', features: 'acc.constr', root: 'ه و ن', gloss: 'the most contemptible of' },
            { surface: 'رَجُلٍ', lemma: 'رَجُل', pos: 'noun', features: 'indef.gen', gloss: 'man' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
          ],
        },
        {
          id: 'qs-v7-c20-013b',
          ar: 'وَكَانَ عِنْدَ اللَّهِ وَجِيهاً .',
          en: 'though he was distinguished in the sight of Allah.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; yet he was' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv', gloss: 'with, in the sight of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَجِيهاً', lemma: 'وَجِيه', pos: 'adj', features: 'indef.acc', root: 'و ج ه', gloss: 'distinguished, of high standing' },
          ],
        },
        {
          id: 'qs-v7-c20-014a',
          ar: 'أَلا يَسْتَحِقُّونَ هذَا الْعِقَابَ وَالْخِزْيَ وَالذُّلَّ وَالْمَسْكَنَةَ وَالتِّيهَ الدَّائِمَ',
          en: 'Do they not deserve this punishment, disgrace, abasement, wretchedness, and endless wandering,',
          tokens: [
            { surface: 'أَلا', lemma: 'لَا', pos: 'part', features: 'part+neg', gloss: 'do...not?' },
            { surface: 'يَسْتَحِقُّونَ', lemma: 'اِسْتَحَقَّ', pos: 'verb', features: 'impf.3mp', gloss: 'to deserve; do they deserve' },
            { surface: 'هذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْعِقَابَ', lemma: 'عِقَاب', pos: 'noun', features: 'def.acc', gloss: 'the punishment' },
            { surface: 'وَالْخِزْيَ', lemma: 'خِزْي', pos: 'noun', features: 'conj+def.acc', root: 'خ ز ي', gloss: 'and the disgrace' },
            { surface: 'وَالذُّلَّ', lemma: 'ذُلّ', pos: 'noun', features: 'conj+def.acc', root: 'ذ ل ل', gloss: 'and the abasement' },
            { surface: 'وَالْمَسْكَنَةَ', lemma: 'مَسْكَنَة', pos: 'noun', features: 'conj+def.acc', gloss: 'and the wretchedness' },
            { surface: 'وَالتِّيهَ', lemma: 'تِيه', pos: 'noun', features: 'conj+def.acc', root: 'ت ي ه', gloss: 'and the wandering' },
            { surface: 'الدَّائِمَ', lemma: 'دَائِم', pos: 'adj', features: 'def.acc', gloss: 'endless, perpetual' },
          ],
        },
        {
          id: 'qs-v7-c20-014b',
          ar: 'وَأَلَّا يُفْلِحُوا أَبَداً؟',
          en: 'and deserve never to prosper?',
          tokens: [
            { surface: 'وَأَلَّا', lemma: 'أَنْ', pos: 'conj', features: 'conj+conj+neg', gloss: 'and that...not' },
            { surface: 'يُفْلِحُوا', lemma: 'أَفْلَحَ', pos: 'verb', features: 'impf.3mp', root: 'ف ل ح', gloss: 'to succeed, prosper; prosper' },
            { surface: 'أَبَداً', lemma: 'أَبَداً', pos: 'adv', features: 'adv', gloss: 'ever, never' },
          ],
        },
        {
          id: 'qs-v7-c20-015',
          ar: 'بَلى! إِنَّهُمْ يَسْتَحِقُّونَ كُلَّ ذلِكَ وَأَكْثَرَ بِأَعْمَالِهِمْ:',
          en: 'Yes indeed! They deserve all that and more, for their own deeds:',
          tokens: [
            { surface: 'بَلى', lemma: 'بَلَى', pos: 'part', features: 'part', gloss: 'yes indeed' },
            { surface: 'إِنَّهُمْ', lemma: 'إِنَّ', pos: 'part', features: 'part+3mp', gloss: 'indeed they' },
            { surface: 'يَسْتَحِقُّونَ', lemma: 'اِسْتَحَقَّ', pos: 'verb', features: 'impf.3mp', gloss: 'to deserve; deserve' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'all of' },
            { surface: 'ذلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'وَأَكْثَرَ', lemma: 'أَكْثَر', pos: 'adj', features: 'conj+acc', gloss: 'and more' },
            { surface: 'بِأَعْمَالِهِمْ', lemma: 'عَمَل', pos: 'noun', features: 'prep+pl.gen+3mp', gloss: 'for their deeds' },
          ],
        },
        {
          // Cf. Naḥl 16:118 and its parallels.
          id: 'qs-v7-c20-016',
          ar: '﴿وَمَا ظَلَمَهُمُ ٱللَّهُ وَلَٰكِن كَانُوٓا۟ أَنفُسَهُمْ يَظْلِمُونَ﴾ .',
          en: '"And Allah did not wrong them, but it was themselves that they wronged."',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'ظَلَمَهُمُ', lemma: 'ظَلَمَ', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to wrong; wronged them' },
            { surface: 'ٱللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'وَلَٰكِن', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'كَانُوٓا۟', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', gloss: 'to be; they were' },
            { surface: 'أَنفُسَهُمْ', lemma: 'نَفْس', pos: 'noun', features: 'pl.acc+3mp', gloss: 'themselves' },
            { surface: 'يَظْلِمُونَ', lemma: 'ظَلَمَ', pos: 'verb', features: 'impf.3mp', gloss: 'to wrong; wronging' },
          ],
        },
      ],
      checks: [
        {
          q: 'مِمَّ خَلَّصَ مُوسى بَنِي إِسْرَائِيلَ؟',
          options: ['مِنْ أَسْرِ فِرْعَوْنَ وَسِجْنِ مِصْرَ إِلى بَرِّ الْحُرِّيَّةِ وَالشَّرَفِ', 'مِنَ الْفَقْرِ فَقَطْ', 'مِنَ الْمَرَضِ فَقَطْ'],
          answer: 0,
          qEn: 'What did Mūsā deliver the Children of Israel from?',
          optionsEn: ["From Pharaoh's captivity and the prison of Egypt, to the shore of freedom and honor", 'From poverty alone', 'From illness alone'],
        },
        {
          q: 'مَاذَا يَسْتَحِقُّ بَنُو إِسْرَائِيلَ حَسَبَ خَاتِمَةِ الْفَصْلِ؟',
          options: ['الْعِقَابَ وَالْخِزْيَ وَالذُّلَّ وَالْمَسْكَنَةَ وَالتِّيهَ الدَّائِمَ', 'الْمَغْفِرَةَ الْفَوْرِيَّةَ', 'مُلْكاً جَدِيداً أَعْظَمَ مِنَ الأَوَّلِ'],
          answer: 0,
          qEn: 'According to the chapter\'s closing, what do the Children of Israel deserve?',
          optionsEn: ['Punishment, disgrace, abasement, wretchedness, and endless wandering', 'Immediate forgiveness', 'A new kingdom greater than the first'],
        },
      ],
    },
  ],
  workshop: {
    // Built only from this chapter's own recycled narrator prose -- the
    // page-211 الَّذِي.../page-212 ذلِكَ الَّذِي... refrains (both referring
    // back to Allah and Mūsā respectively, always followed by a perfect
    // verb) -- never from either embedded Qur'anic fragment, per
    // instruction.
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: 'أَنْجَاهُمْ مِنْ آلِ فِرْعَوْنَ يَسُومُونَهُمْ سُوءَ الْعَذَابِ.',
        en: 'He who saved them from the household of Pharaoh, as it subjected them to the worst torment.',
        options: ['الَّذِي', 'الَّتِي', 'الَّذِينَ', 'اللَّتِي'],
        answer: 0,
        rationales: [
          'Masculine singular relative pronoun -- refers back to اللَّه, the implicit subject of this whole refrain.',
          'Feminine singular -- wrong gender.',
          'Masculine plural -- wrong number; the antecedent (Allah) is singular.',
          'Feminine dual -- wrong gender and number.',
        ],
      },
      {
        type: 'cloze',
        pre: 'ذلِكَ',
        post: 'خَلَّصَهُمْ مِنْ أَسْرِ فِرْعَوْنَ وَأَخْرَجَهُمْ مِنْ سِجْنِ مِصْرَ.',
        en: 'That is the one who delivered them from the captivity of Pharaoh and brought them out of the prison of Egypt.',
        options: ['الَّذِي', 'الَّتِي', 'الَّذِينَ', 'اللَّتِي'],
        answer: 0,
        rationales: [
          'Masculine singular relative pronoun -- refers back to مُوسَى.',
          'Feminine singular -- wrong gender.',
          'Masculine plural -- wrong number; the antecedent (Mūsā) is singular.',
          'Feminine dual -- wrong gender and number.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'عَلَيْهِمُ الْغَمَامَ وَأَنْزَلَ عَلَيْهِمُ الْمَنَّ وَالسَّلْوى.',
        en: 'and he shaded them with clouds and sent down manna and quails upon them.',
        options: ['ظَلَّلَ', 'يُظَلِّلُ', 'ظَلَّلَتْ', 'ظَلَّلُوا'],
        answer: 0,
        rationales: [
          '3rd masculine singular perfect -- matches the subject الَّذِي, referring back to Allah.',
          'Imperfect -- wrong tense; this narrates a completed past action.',
          '3rd feminine singular -- wrong gender; the subject is masculine (Allah).',
          '3rd masculine plural -- wrong number; the subject is singular (Allah).',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَنْجَى اللَّهُ بَنِي إِسْرَائِيلَ مِنْ آلِ فِرْعَوْنَ',
        pre: '',
        post: 'اللَّهُ بَنِي إِسْرَائِيلَ مِنْ آلِ فِرْعَوْنَ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m)',
        options: ['أَنْجَيْتَ', 'أَنْجَى', 'أَنْجَتْ', 'أَنْجَوْا'],
        answer: 0,
        rationales: [
          '2nd masculine singular perfect -- matches أَنْتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '3rd feminine singular -- wrong gender and person.',
          '3rd masculine plural -- wrong number and person.',
        ],
      },
      {
        type: 'shift',
        base: 'أَنْجَى اللَّهُ بَنِي إِسْرَائِيلَ مِنْ آلِ فِرْعَوْنَ',
        pre: '',
        post: 'اللَّهُ بَنِي إِسْرَائِيلَ مِنْ آلِ فِرْعَوْنَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['أَنْجَيْنَا', 'أَنْجَى', 'أَنْجَتْ', 'أَنْجَوْا'],
        answer: 0,
        rationales: [
          '1st plural perfect -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '3rd feminine singular -- wrong gender and person.',
          '3rd masculine plural -- wrong person.',
        ],
      },
      {
        type: 'shift',
        base: 'أَنْجَى اللَّهُ بَنِي إِسْرَائِيلَ مِنْ آلِ فِرْعَوْنَ',
        pre: '',
        post: 'اللَّهُ بَنِي إِسْرَائِيلَ مِنْ آلِ فِرْعَوْنَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['أَنْجَوْا', 'أَنْجَى', 'أَنْجَتْ', 'أَنْجَيْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine plural perfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '3rd feminine singular -- wrong gender and number.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 17 -- ١٧ - جُبْنُ بَنِي إِسْرَائِيلَ ("The Cowardice of the
// Children of Israel"). Pages 202-204, from the chapter heading at the top
// of page 202 through the end of page 204, ending just before the ch18
// heading box at the top of page 205. Transcribed by hand from the scan
// (vision-read, not OCR) against ../CHAPTER-FORMAT.md and
// QASAS_AGENT_BRIEF.md. Source transcript supplied pre-verified; no
// corrections applied against it in this range.
//
// Five Qur'anic quotations are embedded in the narrator's prose: Al-A'raf
// 7:152 (qs-v7-c17-002, the golden calf), Al-Ma'idah 5:20 (qs-v7-c17-015),
// and three consecutive fragments of Al-Ma'idah 5:21-23 (qs-v7-c17-018,
// 020, 022, 024) forming the "enter the Holy Land" exchange. All are
// transcribed in full and tokenized normally, matching this task's
// explicit instruction not to fragment quotations to dodge the build
// stage. Verse-end number glyphs printed in the source are not
// transcribed, matching this corpus's established convention (see
// qasas-v7 ch1's header). Several of the shorter quotes (qs-v7-c17-022,
// 024) fall inside the build stage's 3-9 token window and carry a
// case-marked common noun (e.g. غَٰلِبُونَ, خَٰسِرِينَ as predicate nouns) --
// left as ordinary prose per instruction, an accepted limitation rather
// than something engineered around.
//
// `workshop.cloze`/`workshop.shift` are built only from the narrator's own
// connective prose, never from a Qur'anic quotation: cloze drills the
// أَنْ + subjunctive complement after أَرَادَ (the chapter's own repeated
// "فَأَرَادَ مُوسَى... أَنْ" / "فَأَرَادَ أَنْ" pattern) plus one كَانَ + imperfect
// drill; shift drills أَرَادَ itself across persons on an author-style frame
// (not a verbatim chapter sentence, matching the register of the worked
// example in qasas-v3/chapter-01.js's own workshop.shift, which likewise
// builds a plain SVO frame from the chapter's dominant root rather than
// quoting a sentence verbatim).
//
// Judgment calls / things flagged for a second pair of eyes:
//   -- ذِلَّةٌ (qs-v7-c17-002, Qur'anic) and ذُلّ (qs-v7-c17-004, the
//      author's own prose) are near-synonyms from the same root (ذ ل ل,
//      patterns فِعْلَة and فُعْل) -- merged under one lemma 'ذُلّ' rather than
//      taught as two separate new words, to avoid doubling up near-
//      identical vocabulary for the learner. Flagging the merge rather
//      than asserting it silently.
//   -- قَضَى (qs-v7-c17-008, "to spend time," يَقْضُونَ) and قَضَاء
//      (qs-v7-c17-017, "decree," لِقَضَاءِ) are tagged as two distinct new
//      lemmas (verb vs. verbal noun), following this corpus's established
//      convention of splitting verb/maṣdar pairs into separate lemmas
//      (e.g. qasas-v7 ch2's هِدَايَة kept distinct from the already-known
//      verb هَدَى). Likewise هَانَ (I, "to be easy") and هَوَّنَ (II, "to make
//      easy") are kept as separate new lemmas, matching the already-
//      established خَافَ (known) / خَوَّفَ (new, ch1) split for the same verb
//      pattern.
//   -- أَخْرَجَ (qs-v7-c17-012, Form IV "to expel") is tagged new and kept
//      distinct from the already-known خَرَجَ (Form I "to exit"), same
//      reasoning as above.
//   -- آمِن (qs-v7-c17-029, "safe") is tagged new despite the very close
//      family -- إِيمَان, آمَنَ -- being already taught; it does not itself
//      appear in the supplied lexicon export or in qasas-v7 ch1/ch2, so
//      flagged as new rather than assumed known.
//   -- أَمَامَكُمُ (qs-v7-c17-016): tagged acc (ẓarf/adverbial of place) with a
//      trailing +2mp segment for the attached possessive pronoun, per
//      CHAPTER-FORMAT.md's guidance to use best judgment on enclitic
//      case/role beyond the one documented example (gen+1s).
//   -- A small set of very basic function words -- عَنْ, كَيْفَ, ثُمَّ, أَنْتَ,
//      أَيْضاً, فَضَّلَ -- do not appear anywhere in the supplied lexicon.txt
//      export, matching the same kind of gap already flagged in qasas-v7
//      ch1's header for يَوْم/هَذَا/جَاءَ. Treated as lexicon-export gaps, not
//      genuinely new vocabulary, and NOT added to newWords here --
//      flagging the inference rather than silently asserting it.
//
// Shared lexicon check (grepped against lexicon.txt and qasas-v7
// ch1/ch2's own newWords): سَفِينَة (qasas-v3 ch18)، صَبْر/صَبَرَ (qasas-v2
// ch5)، غُلَام (qasas-v2 ch1)، حُرّ (qasas-v2 ch9)، حُكْم (qasas-v2 ch11)،
// شَدِيد (qasas-v2 ch2)، طَبِيعَة (qasas-v2 ch1)، عَالَم (qasas-v1 ch8)، آتَى
// (qasas-v2 ch11)، أَخَذَ (qasas-v1 ch4)، خَافَ (qasas-v1 ch10)، رَدَّ (qasas-v2
// ch19)، عَدُوّ (qasas-v1 ch9)، غَلَبَ (qasas-v1 ch7)، مَلِك (qasas-v1 ch10)،
// نَبِيّ (qasas-v1 ch8)، اِرْتَدَّ (qasas-v2 ch24)، أَنْعَمَ (qasas-v2 ch1)، بَاب
// (qasas-v2 ch15)، بُدّ (qasas-v3 ch2)، جَوَاب (qasas-v1 ch6)، خَاسِر (qasas-v3
// ch21)، خَرَجَ (qasas-v1 ch4/12)، دَخَلَ (qasas-v1 ch5)، سَالِم (qasas-v1 ch6)،
// سَمِعَ (qasas-v1 ch2)، مُؤْمِن (qasas-v3 ch14)، وَقَعَ (qasas-v2 ch24)، قَدَّرَ
// (qiraah-v2 ch56)، لَنْ (qasas-v2 ch19)، حَتَّى (qasas-v2 ch19)، لِأَنَّ
// (qasas-v2 ch11)، كَذَلِكَ (qasas-v1 ch9)، إِنَّ، الَّذِي (qasas-v1 ch9)، إِذْ
// (qasas-v1 ch9)، جَعَلَ (qasas-v1 ch8)، أَحَد (qasas-v1 ch9)، نَالَ (qasas-v3
// ch12)، غَضَب (qasas-v2 ch8)، جَزَى (qasas-v2 ch20)، سَكَنَ (qasas-v1 ch16)،
// مِصْر (qasas-v2 ch7)، دَم (qasas-v2 ch4)، طِفْل (qasas-v1 ch4)، شَابّ
// (qasas-v2 ch2)، اتَّخَذَ (qiraah-v2 ch36)، بَنُو/بَنِي إِسْرَائِيل (اِبْن known
// qasas-v1 ch14; إِسْرَائِيل already introduced elsewhere in this volume per
// task instruction, NOT re-added here)، جَبَّار/نِعْمَة/ذَكَرَ/تَعَالَى (all
// already new in qasas-v7 ch1/ch2, reused here -- تَعَالَى reused in its
// distinct "Exalted is He" sense rather than ch2's "come!" sense, same
// lemma, homographic usage) are all already taught (or reused per the
// notes above) and are NOT re-listed in newWords here.
//
// 47 new words (عِجْل، ذُلّ، هَوَان، شَبَّ، شَابَ، بَرَدَ، عِرْق، حَلَمَ، سِيَادَة،
// تَحَدَّثَ، غَزْو، جِهَاد، قَضَى، قَضَاء، غُرْبَة، وَطَن، وَحْي، مُقَدَّس، اسْتَوْلَى، أُولُو،
// أَمَام، اِنْتَزَعَ، كَتَبَ، هَانَ، هَوَّنَ، نَشَأَ، عُبُودِيَّة، ضَعْف، جُبْن، شَوَّقَ، نَشِطَ،
// كَرِهَ، ذَلِيل، لَائِق، أَصْبَحَ، وَقَار، سُكُون، تَوَكَّلَ، أَثَّرَ، حَذِرَ، دُبُر، اِنْقَلَبَ،
// دُخُول، مُعْجِزَة، اِفْتَرَى، أَخْرَجَ، آمِن) -- unusually high for a 3-page
// chapter, but this passage carries a dense, distinctive descriptive
// vocabulary cluster (aging/cowardice/exile imagery) on top of five
// embedded Qur'anic quotations, similar in kind to why qasas-v7 ch1 ran
// high (33 words over 4 pages).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch17',
  title: { ar: 'جُبْنُ بَنِي إِسْرَائِيلَ', en: 'The Cowardice of the Children of Israel' },
  newWords: [
    'ذُلّ', 'شَبَّ', 'شَابَ', 'بَرَدَ', 'عِرْق', 'حَلَمَ', 'سِيَادَة',
    'تَحَدَّثَ', 'غَزْو', 'جِهَاد', 'قَضَاء', 'غُرْبَة', 'وَطَن', 'وَحْي', 'اسْتَوْلَى', 'أُولُو', 'اِنْتَزَعَ', 'كَتَبَ', 'هَانَ', 'هَوَّنَ', 'نَشَأَ',
    'ضَعْف', 'جُبْن', 'شَوَّقَ', 'نَشِطَ', 'كَرِهَ', 'لَائِق',
    'وَقَار', 'سُكُون', 'أَثَّرَ', 'حَذِرَ', 'دُبُر', 'اِنْقَلَبَ',
    'دُخُول', 'مُعْجِزَة', 'اِفْتَرَى', 'أَخْرَجَ', ],
  lemmas: {
    'ذُلّ': { gloss: 'abasement, humiliation' },
    'شَبَّ': { gloss: 'to grow up, come of age' },
    'شَابَ': { gloss: 'to grow old, turn grey' },
    'بَرَدَ': { gloss: 'to grow cold' },
    'عِرْق': { gloss: 'vein (pl. عُرُوق)' },
    'حَلَمَ': { gloss: 'to dream' },
    'سِيَادَة': { gloss: 'leadership, dominance' },
    'تَحَدَّثَ': { gloss: 'to speak, talk' },
    'غَزْو': { gloss: 'raiding, military conquest' },
    'جِهَاد': { gloss: 'striving, struggle (jihad)' },
    'قَضَاء': { gloss: 'decree, ruling' },
    'غُرْبَة': { gloss: 'exile, being a stranger' },
    'وَطَن': { gloss: 'homeland' },
    'وَحْي': { gloss: 'revelation' },
    'اسْتَوْلَى': { gloss: 'to seize control of, dominate' },
    'أُولُو': { gloss: 'possessors of (construct plural of ذُو)' },
    'اِنْتَزَعَ': { gloss: 'to wrest away, wrench out' },
    'كَتَبَ': { gloss: 'to write; to decree, ordain' },
    'هَانَ': { gloss: 'to be or become easy, of little account' },
    'هَوَّنَ': { gloss: 'to make easy, facilitate' },
    'نَشَأَ': { gloss: 'to grow up, arise' },
    'ضَعْف': { gloss: 'weakness' },
    'جُبْن': { gloss: 'cowardice' },
    'شَوَّقَ': { gloss: 'to entice, whet the desire of' },
    'نَشِطَ': { gloss: 'to be energetic, eager' },
    'كَرِهَ': { gloss: 'to hate, dislike' },
    'لَائِق': { gloss: 'fitting, proper, suitable' },
    'وَقَار': { gloss: 'dignity, solemnity' },
    'سُكُون': { gloss: 'stillness, calm' },
    'أَثَّرَ': { gloss: 'to influence, affect' },
    'حَذِرَ': { gloss: 'to beware of, be wary of' },
    'دُبُر': { gloss: 'back (of the body) (pl. أَدْبَار)' },
    'اِنْقَلَبَ': { gloss: 'to turn back, be overturned, become' },
    'دُخُول': { gloss: 'entering, entry' },
    'مُعْجِزَة': { gloss: 'miracle' },
    'اِفْتَرَى': { gloss: 'to fabricate, invent (a lie)' },
    'أَخْرَجَ': { gloss: 'to expel, drive out, bring out' },
  },
  paragraphs: [
    {
      en: "Allah, the Exalted, said: \"Indeed, those who took up the calf, wrath from their Lord will befall them, and humiliation in the life of this world -- thus do We recompense the fabricators of lies.\" And so it is with the worshippers of the calf until the Day of Resurrection, and so it is with the idolaters until the Day of Resurrection! The Children of Israel had grown up in servitude in Egypt, in abasement and disgrace -- the children grew up in it and the youths grew old in it, and the blood ran cold in their veins. They came to no longer dream of leadership, nor speak of raiding or striving. The Children of Israel spent their days in exile, having no homeland and no rule of their own. So Mūsā wanted, by Allah's revelation, that they enter the Holy Land and dwell there as free kings.",
      sentences: [
        {
          id: 'qs-v7-c17-001',
          ar: 'وَقَالَ اللَّهُ تَعَالَى:',
          en: 'Allah, the Exalted, said:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', root: 'ع ل و', gloss: 'to be exalted; the Exalted' },
          ],
        },
        {
          // Al-A'raf 7:152.
          id: 'qs-v7-c17-002',
          ar: '﴿إِنَّ ٱلَّذِينَ ٱتَّخَذُوا۟ ٱلْعِجْلَ سَيَنَالُهُمْ غَضَبٌ مِّن رَّبِّهِمْ وَذِلَّةٌ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا وَكَذَٰلِكَ نَجْزِى ٱلْمُفْتَرِينَ﴾.',
          en: '"Indeed, those who took up the calf, wrath from their Lord will befall them, and humiliation in the life of this world -- thus do We recompense the fabricators [of lies]."',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ٱلَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'rel.pl', gloss: 'those who' },
            { surface: 'ٱتَّخَذُوا۟', lemma: 'اِتَّخَذَ', pos: 'verb', features: 'perf.3mp', root: 'ا خ ذ', gloss: 'to take up; took up' },
            { surface: 'ٱلْعِجْلَ', lemma: 'عِجْل', pos: 'noun', features: 'def.acc', root: 'ع ج ل', gloss: 'the calf' },
            { surface: 'سَيَنَالُهُمْ', lemma: 'نَالَ', pos: 'verb', features: 'part+impf.3ms+3mp', root: 'ن ي ل', gloss: 'to befall, attain; will befall them' },
            { surface: 'غَضَبٌ', lemma: 'غَضَب', pos: 'noun', features: 'indef.nom', root: 'غ ض ب', gloss: 'wrath' },
            { surface: 'مِّن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'رَّبِّهِمْ', lemma: 'رَبّ', pos: 'noun', features: 'gen+3mp', root: 'ر ب ب', gloss: 'their Lord' },
            { surface: 'وَذِلَّةٌ', lemma: 'ذُلّ', pos: 'noun', features: 'conj+indef.nom', root: 'ذ ل ل', gloss: 'and humiliation' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ٱلْحَيَوٰةِ', lemma: 'حَيَاة', pos: 'noun', features: 'def.gen', root: 'ح ي ي', gloss: 'the life' },
            { surface: 'ٱلدُّنْيَا', lemma: 'دُنْيَا', pos: 'adj', features: 'def.gen', root: 'د ن و', gloss: 'worldly' },
            { surface: 'وَكَذَٰلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and thus' },
            { surface: 'نَجْزِى', lemma: 'جَزَى', pos: 'verb', features: 'impf.1p', root: 'ج ز ي', gloss: 'to recompense; We recompense' },
            { surface: 'ٱلْمُفْتَرِينَ', lemma: 'اِفْتَرَى', pos: 'noun', features: 'pl.def.acc', root: 'ف ر ي', gloss: 'the fabricators [of lies]' },
          ],
        },
        {
          id: 'qs-v7-c17-003',
          ar: 'وَكَذَلِكَ عُبَّادُ الْعِجْلِ إِلى يَوْمِ الْقِيَامَةِ وَكَذَلِكَ الْمُشْرِكُونَ إِلى يَوْمِ الْقِيَامَةِ!',
          en: 'And so it is with the worshippers of the calf until the Day of Resurrection, and so it is with the idolaters until the Day of Resurrection!',
          tokens: [
            { surface: 'وَكَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and thus, likewise' },
            { surface: 'عُبَّادُ', lemma: 'عَبَدَ', pos: 'noun', features: 'pl.nom.constr', root: 'ع ب د', gloss: 'the worshippers of' },
            { surface: 'الْعِجْلِ', lemma: 'عِجْل', pos: 'noun', features: 'def.gen', root: 'ع ج ل', gloss: 'the calf' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'until' },
            { surface: 'يَوْمِ', lemma: 'يَوْم', pos: 'noun', features: 'constr.gen', root: 'ي و م', gloss: 'the day of' },
            { surface: 'الْقِيَامَةِ', lemma: 'قِيَامَة', pos: 'noun', features: 'def.gen', root: 'ق و م', gloss: 'the Resurrection' },
            { surface: 'وَكَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and thus, likewise' },
            { surface: 'الْمُشْرِكُونَ', lemma: 'أَشْرَكَ', pos: 'noun', features: 'pl.def.nom', root: 'ش ر ك', gloss: 'the idolaters' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'until' },
            { surface: 'يَوْمِ', lemma: 'يَوْم', pos: 'noun', features: 'constr.gen', root: 'ي و م', gloss: 'the day of' },
            { surface: 'الْقِيَامَةِ', lemma: 'قِيَامَة', pos: 'noun', features: 'def.gen', root: 'ق و م', gloss: 'the Resurrection' },
          ],
        },
        {
          id: 'qs-v7-c17-004',
          ar: 'نَشَأَ بَنُو إِسْرَائِيلَ عَلى الْعُبُودِيَّةِ فِي مِصْرَ وَعَلى الذُّلِّ وَالْهَوَانِ،',
          en: 'The Children of Israel had grown up in servitude in Egypt, in abasement and disgrace,',
          tokens: [
            { surface: 'نَشَأَ', lemma: 'نَشَأَ', pos: 'verb', features: 'perf.3ms', root: 'ن ش أ', gloss: 'to grow up, arise; grew up' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.nom.constr', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in, upon' },
            { surface: 'الْعُبُودِيَّةِ', lemma: 'عُبُودِيَّة', pos: 'noun', features: 'def.gen', root: 'ع ب د', gloss: 'servitude' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'وَعَلى', lemma: 'عَلَى', pos: 'prep', features: 'conj+prep', gloss: 'and in' },
            { surface: 'الذُّلِّ', lemma: 'ذُلّ', pos: 'noun', features: 'def.gen', root: 'ذ ل ل', gloss: 'abasement' },
            { surface: 'وَالْهَوَانِ', lemma: 'هَوَان', pos: 'noun', features: 'conj+def.gen', root: 'ه و ن', gloss: 'and disgrace' },
          ],
        },
        {
          id: 'qs-v7-c17-005',
          ar: 'وَشَبَّ عَلَيْهِ الْأَطْفَالُ وَشَابَ عَلَيْهِ الشُّبَّانُ.',
          en: 'the children grew up in it and the youths grew old in it.',
          tokens: [
            { surface: 'وَشَبَّ', lemma: 'شَبَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'ش ب ب', gloss: 'to grow up; and grew up' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'in it, upon it' },
            { surface: 'الْأَطْفَالُ', lemma: 'طِفْل', pos: 'noun', features: 'pl.def.nom', root: 'ط ف ل', gloss: 'the children' },
            { surface: 'وَشَابَ', lemma: 'شَابَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ش ي ب', gloss: 'to grow old, turn grey; and grew old' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'in it, upon it' },
            { surface: 'الشُّبَّانُ', lemma: 'شَابّ', pos: 'noun', features: 'pl.def.nom', root: 'ش ب ب', gloss: 'the youths' },
          ],
        },
        {
          id: 'qs-v7-c17-006',
          ar: 'وَبَرَدَ فِي عُرُوقِهِمُ الدَّمُ.',
          en: 'The blood ran cold in their veins.',
          tokens: [
            { surface: 'وَبَرَدَ', lemma: 'بَرَدَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ب ر د', gloss: 'to grow cold; and grew cold' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'عُرُوقِهِمُ', lemma: 'عِرْق', pos: 'noun', features: 'pl.gen+3mp', root: 'ع ر ق', gloss: 'their veins' },
            { surface: 'الدَّمُ', lemma: 'دَم', pos: 'noun', features: 'def.nom', root: 'د م و', gloss: 'the blood' },
          ],
        },
        {
          id: 'qs-v7-c17-007',
          ar: 'وأَصْبَحُوا لا يَحْلُمُونَ بِسِيَادَةٍ وَلا يَتَحَدَّثُونَ بِغَزْوٍ وَلا جِهَادٍ.',
          en: 'They came to no longer dream of leadership, nor speak of raiding or striving.',
          tokens: [
            { surface: 'وأَصْبَحُوا', lemma: 'أَصْبَحَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ص ب ح', gloss: 'to become; and they became' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَحْلُمُونَ', lemma: 'حَلَمَ', pos: 'verb', features: 'impf.3mp', root: 'ح ل م', gloss: 'to dream' },
            { surface: 'بِسِيَادَةٍ', lemma: 'سِيَادَة', pos: 'noun', features: 'prep+indef.gen', root: 'س و د', gloss: 'of leadership' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'يَتَحَدَّثُونَ', lemma: 'تَحَدَّثَ', pos: 'verb', features: 'impf.3mp', root: 'ح د ث', gloss: 'to speak, talk' },
            { surface: 'بِغَزْوٍ', lemma: 'غَزْو', pos: 'noun', features: 'prep+indef.gen', root: 'غ ز و', gloss: 'of raiding' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'جِهَادٍ', lemma: 'جِهَاد', pos: 'noun', features: 'indef.gen', root: 'ج ه د', gloss: 'striving, jihad' },
          ],
        },
        {
          id: 'qs-v7-c17-008',
          ar: 'كَانَ بَنُو إِسْرَائِيلَ يَقْضُونَ أَيَّامَهُمْ فِي الْغُرْبَةِ لَيْسَ لَهُمْ وَطَنٌ وَلا حُكْمٌ.',
          en: 'The Children of Israel spent their days in exile, having no homeland and no rule of their own.',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.nom.constr', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'يَقْضُونَ', lemma: 'قَضَى', pos: 'verb', features: 'impf.3mp', root: 'ق ض ي', gloss: 'to spend (time); spending' },
            { surface: 'أَيَّامَهُمْ', lemma: 'يَوْم', pos: 'noun', features: 'pl.acc+3mp', root: 'ي و م', gloss: 'their days' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْغُرْبَةِ', lemma: 'غُرْبَة', pos: 'noun', features: 'def.gen', root: 'غ ر ب', gloss: 'exile' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', root: 'ل ي س', gloss: 'to not be; having not' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'وَطَنٌ', lemma: 'وَطَن', pos: 'noun', features: 'indef.nom', root: 'و ط ن', gloss: 'a homeland' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and no' },
            { surface: 'حُكْمٌ', lemma: 'حُكْم', pos: 'noun', features: 'indef.nom', gloss: 'rule' },
          ],
        },
        {
          id: 'qs-v7-c17-009',
          ar: 'فَأَرَادَ مُوسى بِوَحْيِ اللَّهِ أَنْ يَدْخُلُوا الْأَرْضَ الْمُقَدَّسَةَ وَيَسْكُنُوا فِيهَا مُلُوكاً أَحْرَاراً.',
          en: "So Mūsā wanted, by Allah's revelation, that they enter the Holy Land and dwell there as free kings.",
          tokens: [
            { surface: 'فَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want; so wanted' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'بِوَحْيِ', lemma: 'وَحْي', pos: 'noun', features: 'prep+constr.gen', root: 'و ح ي', gloss: 'by the revelation of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَدْخُلُوا', lemma: 'دَخَلَ', pos: 'verb', features: 'impf.3mp', root: 'د خ ل', gloss: 'to enter; they enter' },
            { surface: 'الْأَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'def.acc', gloss: 'the land' },
            { surface: 'الْمُقَدَّسَةَ', lemma: 'مُقَدَّس', pos: 'adj', features: 'def.acc.f', root: 'ق د س', gloss: 'the sanctified, holy' },
            { surface: 'وَيَسْكُنُوا', lemma: 'سَكَنَ', pos: 'verb', features: 'conj+impf.3mp', root: 'س ك ن', gloss: 'to dwell; and dwell' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'مُلُوكاً', lemma: 'مَلِك', pos: 'noun', features: 'pl.indef.acc', gloss: 'kings' },
            { surface: 'أَحْرَاراً', lemma: 'حُرّ', pos: 'adj', features: 'pl.indef.acc', gloss: 'free' },
          ],
        },
      ],
      checks: [
        {
          q: 'عَلامَ نَشَأَ بَنُو إِسْرَائِيلَ فِي مِصْرَ؟',
          options: ['عَلَى الْعُبُودِيَّةِ وَالذُّلِّ وَالْهَوَانِ', 'عَلَى الْعِزِّ وَالسِّيَادَةِ', 'عَلَى الْعِلْمِ وَالْحِكْمَةِ'],
          answer: 0,
          qEn: 'What did the Children of Israel grow up on in Egypt?',
          optionsEn: ['Servitude, abasement, and disgrace', 'Might and leadership', 'Knowledge and wisdom'],
        },
        {
          q: 'مَاذَا أَرَادَ مُوسى بِوَحْيِ اللَّهِ؟',
          options: ['أَنْ يَدْخُلُوا الْأَرْضَ الْمُقَدَّسَةَ وَيَسْكُنُوا فِيهَا مُلُوكاً أَحْرَاراً', 'أَنْ يَبْقَوْا فِي مِصْرَ', 'أَنْ يُحَارِبُوا فِرْعَوْنَ فَوْراً'],
          answer: 0,
          qEn: "What did Mūsā want, by Allah's revelation?",
          optionsEn: ['That they enter the Holy Land and dwell there as free kings', 'That they remain in Egypt', 'That they fight Pharaoh at once'],
        },
      ],
    },
    {
      en: "But Mūsā knew the nature of cowardice and weakness in the Children of Israel. So he wanted to encourage them and make the matter easier for them, because the Holy Land had been seized by a tyrannical people, possessors of strength and possessors of great might; and the Children of Israel could not enter the Holy Land until they drove out these tyrants from it. So he reminded them of Allah's blessings upon them and how He had favored them above all the worlds, so that they would be eager for striving in the way of Allah and would hate this lowly, unfitting life. [Qur'an:] \"And when Mūsā said to his people: O my people, remember the favor of Allah upon you, when He made among you prophets and made you kings and gave you what He had given no one else among the worlds.\" Then he said to them: 'Indeed the Holy Land lies before you, so you have nothing left but to rise up and wrest it from your enemies. And indeed, when Allah decrees something for someone and ordains it for him, it becomes easy for him to attain it, and there is no repelling the decree of Allah.'",
      sentences: [
        {
          id: 'qs-v7-c17-010',
          ar: 'وَلَكِنَّ مُوسى كَانَ يَعْرِفُ طَبِيعَةَ الْجُبْنِ وَالضَّعْفِ فِي بَنِي إِسْرَائِيلَ.',
          en: 'But Mūsā knew the nature of cowardice and weakness in the Children of Israel.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', root: 'ع ر ف', gloss: 'to know; knowing' },
            { surface: 'طَبِيعَةَ', lemma: 'طَبِيعَة', pos: 'noun', features: 'acc.constr', root: 'ط ب ع', gloss: 'the nature of' },
            { surface: 'الْجُبْنِ', lemma: 'جُبْن', pos: 'noun', features: 'def.gen', root: 'ج ب ن', gloss: 'cowardice' },
            { surface: 'وَالضَّعْفِ', lemma: 'ضَعْف', pos: 'noun', features: 'conj+def.gen', root: 'ض ع ف', gloss: 'and weakness' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.gen.constr', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
          ],
        },
        {
          id: 'qs-v7-c17-011',
          ar: 'فَأَرَادَ أَنْ يُشَوِّقَهُمْ وأَنْ يُهَوِّنَ عَلَيْهِمُ الْأَمْرَ لِأَنَّ الْأَرْضَ الْمُقَدَّسَةَ قَدْ اسْتَوْلى عَلَيها قَوْمٌ جَبَّارُونَ أُولُو قُوَّةٍ وَأُولُو بَأْسٍ شَدِيدٍ.',
          en: 'So he wanted to encourage them and make the matter easier for them, because the Holy Land had been seized by a tyrannical people, possessors of strength and possessors of great might.',
          tokens: [
            { surface: 'فَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want; so wanted' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُشَوِّقَهُمْ', lemma: 'شَوَّقَ', pos: 'verb', features: 'impf.3ms+3mp', root: 'ش و ق', gloss: 'to entice, encourage; encourage them' },
            { surface: 'وأَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj+conj', gloss: 'and to' },
            { surface: 'يُهَوِّنَ', lemma: 'هَوَّنَ', pos: 'verb', features: 'impf.3ms', root: 'ه و ن', gloss: 'to make easy; make easy' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'الْأَمْرَ', lemma: 'أَمْر', pos: 'noun', features: 'def.acc', gloss: 'the matter' },
            { surface: 'لِأَنَّ', lemma: 'لِأَنَّ', pos: 'part', features: 'part', gloss: 'because' },
            { surface: 'الْأَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'def.acc', gloss: 'the land' },
            { surface: 'الْمُقَدَّسَةَ', lemma: 'مُقَدَّس', pos: 'adj', features: 'def.acc.f', root: 'ق د س', gloss: 'the sanctified, holy' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اسْتَوْلى', lemma: 'اسْتَوْلَى', pos: 'verb', features: 'perf.3ms', root: 'و ل ي', gloss: 'to seize control of; had seized' },
            { surface: 'عَلَيها', lemma: 'عَلَى', pos: 'prep', features: 'prep+3fs', gloss: 'over it' },
            { surface: 'قَوْمٌ', lemma: 'قَوْم', pos: 'noun', features: 'indef.nom', root: 'ق و م', gloss: 'a people' },
            { surface: 'جَبَّارُونَ', lemma: 'جَبَّار', pos: 'adj', features: 'pl.indef.nom', root: 'ج ب ر', gloss: 'tyrannical' },
            { surface: 'أُولُو', lemma: 'أُولُو', pos: 'noun', features: 'nom.constr', gloss: 'possessors of' },
            { surface: 'قُوَّةٍ', lemma: 'قُوَّة', pos: 'noun', features: 'indef.gen', root: 'ق و ي', gloss: 'strength' },
            { surface: 'وَأُولُو', lemma: 'أُولُو', pos: 'noun', features: 'conj+nom.constr', gloss: 'and possessors of' },
            { surface: 'بَأْسٍ', lemma: 'بَأْس', pos: 'noun', features: 'indef.gen', root: 'ب أ س', gloss: 'might' },
            { surface: 'شَدِيدٍ', lemma: 'شَدِيد', pos: 'adj', features: 'indef.gen', gloss: 'great, severe' },
          ],
        },
        {
          id: 'qs-v7-c17-012',
          ar: 'ولا يَدْخُلُ بَنُو اسْرَائِيلَ الأَرْضَ الْمُقَدَّسَةَ حَتّى يُخْرِجُوا مِنْهَا هؤُلاءِ الْجَبَّارِينَ.',
          en: 'And the Children of Israel could not enter the Holy Land until they drove out these tyrants from it.',
          tokens: [
            { surface: 'ولا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَدْخُلُ', lemma: 'دَخَلَ', pos: 'verb', features: 'impf.3ms', root: 'د خ ل', gloss: 'to enter' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.nom.constr', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'اسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'الأَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'def.acc', gloss: 'the land' },
            { surface: 'الْمُقَدَّسَةَ', lemma: 'مُقَدَّس', pos: 'adj', features: 'def.acc.f', root: 'ق د س', gloss: 'the sanctified, holy' },
            { surface: 'حَتّى', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'until' },
            { surface: 'يُخْرِجُوا', lemma: 'أَخْرَجَ', pos: 'verb', features: 'impf.3mp', root: 'خ ر ج', gloss: 'to expel, drive out; they drive out' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from it' },
            { surface: 'هؤُلاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'الْجَبَّارِينَ', lemma: 'جَبَّار', pos: 'adj', features: 'pl.def.acc', root: 'ج ب ر', gloss: 'the tyrants' },
          ],
        },
        {
          id: 'qs-v7-c17-013',
          ar: 'فَذَكَرَ نِعَمَ اللَّهِ عَلَيْهِمْ وَمَا فَضَّلَهُمْ بِهِ عَلى الْعَالَمِينَ،',
          en: 'So he reminded them of Allah\'s blessings upon them and how He had favored them above all the worlds,',
          tokens: [
            { surface: 'فَذَكَرَ', lemma: 'ذَكَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ذ ك ر', gloss: 'to mention, remind; so mentioned' },
            { surface: 'نِعَمَ', lemma: 'نِعْمَة', pos: 'noun', features: 'pl.acc.constr', root: 'ن ع م', gloss: 'the blessings of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'and how' },
            { surface: 'فَضَّلَهُمْ', lemma: 'فَضَّلَ', pos: 'verb', features: 'perf.3ms+3mp', root: 'ف ض ل', gloss: 'to favor; He favored them' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with it, thereby' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'above, over' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the worlds' },
          ],
        },
        {
          id: 'qs-v7-c17-014',
          ar: 'حَتّى يَنْشَطُوا لِلْجِهَادِ فِي سَبِيلِ اللَّهِ وَحَتّى يَكْرَهُوا هذِهِ الْحَياةَ الذَّلِيلَةَ غَيْرَ اللَّائِقَةِ.',
          en: 'so that they would be eager for striving in the way of Allah and would hate this lowly, unfitting life.',
          tokens: [
            { surface: 'حَتّى', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'so that' },
            { surface: 'يَنْشَطُوا', lemma: 'نَشِطَ', pos: 'verb', features: 'impf.3mp', root: 'ن ش ط', gloss: 'to be energetic, eager' },
            { surface: 'لِلْجِهَادِ', lemma: 'جِهَاد', pos: 'noun', features: 'prep+def.gen', root: 'ج ه د', gloss: 'for striving' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'سَبِيلِ', lemma: 'سَبِيل', pos: 'noun', features: 'constr.gen', gloss: 'the way of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَحَتّى', lemma: 'حَتَّى', pos: 'conj', features: 'conj+conj', gloss: 'and so that' },
            { surface: 'يَكْرَهُوا', lemma: 'كَرِهَ', pos: 'verb', features: 'impf.3mp', root: 'ك ر ه', gloss: 'to hate, dislike' },
            { surface: 'هذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْحَياةَ', lemma: 'حَيَاة', pos: 'noun', features: 'def.acc', root: 'ح ي ي', gloss: 'the life' },
            { surface: 'الذَّلِيلَةَ', lemma: 'ذَلِيل', pos: 'adj', features: 'def.acc.f', root: 'ذ ل ل', gloss: 'lowly, abject' },
            { surface: 'غَيْرَ', lemma: 'غَيْر', pos: 'noun', features: 'acc.constr', gloss: 'not, without' },
            { surface: 'اللَّائِقَةِ', lemma: 'لَائِق', pos: 'adj', features: 'def.gen.f', root: 'ل ي ق', gloss: 'fitting, proper' },
          ],
        },
        {
          // Al-Ma'idah 5:20.
          id: 'qs-v7-c17-015',
          ar: '﴿وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِۦ يَقَوِّمِ ٱذْكُرُوٓا۟ نِعْمَةَ ٱللَّهِ عَلَيْكُمْ إِذْ جَعَلَ فِيكُمْ أَنۢبِيَآءَ وَجَعَلَكُم مُّلُوكًا وَءَاتَىٰكُم مَّا لَمْ يُؤْتِ أَحَدًا مِّنَ ٱلْعَٰلَمِينَ﴾.',
          en: '"And [recall] when Mūsā said to his people: O my people, remember the favor of Allah upon you, when He made among you prophets and made you kings and gave you what He had given no one else among the worlds."',
          tokens: [
            { surface: 'وَإِذْ', lemma: 'إِذْ', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'مُوسَىٰ', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'لِقَوْمِهِۦ', lemma: 'قَوْم', pos: 'noun', features: 'prep+gen+3ms', root: 'ق و م', gloss: 'to his people' },
            { surface: 'يَقَوِّمِ', lemma: 'قَوْم', pos: 'noun', features: 'part+gen+1s', root: 'ق و م', gloss: 'O my people' },
            { surface: 'ٱذْكُرُوٓا۟', lemma: 'ذَكَرَ', pos: 'verb', features: 'imp.2mp', root: 'ذ ك ر', gloss: 'to remember; remember!' },
            { surface: 'نِعْمَةَ', lemma: 'نِعْمَة', pos: 'noun', features: 'acc.constr', root: 'ن ع م', gloss: 'the favor of' },
            { surface: 'ٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'عَلَيْكُمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+2mp', gloss: 'upon you' },
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'جَعَلَ', lemma: 'جَعَلَ', pos: 'verb', features: 'perf.3ms', root: 'ج ع ل', gloss: 'to make; He made' },
            { surface: 'فِيكُمْ', lemma: 'فِي', pos: 'prep', features: 'prep+2mp', gloss: 'among you' },
            { surface: 'أَنۢبِيَآءَ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.indef.acc', root: 'ن ب أ', gloss: 'prophets' },
            { surface: 'وَجَعَلَكُم', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+perf.3ms+2mp', root: 'ج ع ل', gloss: 'and made you' },
            { surface: 'مُّلُوكًا', lemma: 'مَلِك', pos: 'noun', features: 'pl.indef.acc', gloss: 'kings' },
            { surface: 'وَءَاتَىٰكُم', lemma: 'آتَى', pos: 'verb', features: 'conj+perf.3ms+2mp', root: 'ا ت ي', gloss: 'to give; and gave you' },
            { surface: 'مَّا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُؤْتِ', lemma: 'آتَى', pos: 'verb', features: 'impf.3ms', root: 'ا ت ي', gloss: 'to give; He had given' },
            { surface: 'أَحَدًا', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
            { surface: 'مِّنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'ٱلْعَٰلَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the worlds' },
          ],
        },
        {
          id: 'qs-v7-c17-016',
          ar: 'ثُمَّ قَالَ لَهُمْ إِنَّ أَمَامَكُمُ الْأَرْضَ الْمُقَدَّسَةَ فَلَيْسَ لَكُمْ إِلَّا أَنْ تَقُومُوا وَتَنْتَزِعُوها مِنْ أَعْدَائِكُمْ.',
          en: 'Then he said to them: "Indeed the Holy Land lies before you, so you have nothing left but to rise up and wrest it from your enemies."',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'أَمَامَكُمُ', lemma: 'أَمَام', pos: 'noun', features: 'acc+2mp', gloss: 'before you' },
            { surface: 'الْأَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'def.acc', gloss: 'the land' },
            { surface: 'الْمُقَدَّسَةَ', lemma: 'مُقَدَّس', pos: 'adj', features: 'def.acc.f', root: 'ق د س', gloss: 'the sanctified, holy' },
            { surface: 'فَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ل ي س', gloss: 'to not be; so there is not' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'تَقُومُوا', lemma: 'قَامَ', pos: 'verb', features: 'impf.2mp', root: 'ق و م', gloss: 'to rise up; you rise up' },
            { surface: 'وَتَنْتَزِعُوها', lemma: 'اِنْتَزَعَ', pos: 'verb', features: 'conj+impf.2mp+3fs', root: 'ن ز ع', gloss: 'to wrest away; and wrest it away' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَعْدَائِكُمْ', lemma: 'عَدُوّ', pos: 'noun', features: 'pl.gen+2mp', gloss: 'your enemies' },
          ],
        },
        {
          id: 'qs-v7-c17-017',
          ar: 'وَإِنَّ اللَّهَ إِذَا كَتَبَ لِأَحَدٍ شَيْئاً وَقَدَّرَهُ لَهُ فَقَدْ هَانَ عَلَيْهِ أَنْ يَأْخُذَهُ فَلا رَادَّ لِقَضَاءِ اللَّهِ.',
          en: 'And indeed, when Allah decrees something for someone and ordains it for him, it becomes easy for him to attain it, and there is no repelling the decree of Allah.',
          tokens: [
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'when' },
            { surface: 'كَتَبَ', lemma: 'كَتَبَ', pos: 'verb', features: 'perf.3ms', root: 'ك ت ب', gloss: 'to write, decree; decrees' },
            { surface: 'لِأَحَدٍ', lemma: 'أَحَد', pos: 'noun', features: 'prep+indef.gen', gloss: 'for someone' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'something' },
            { surface: 'وَقَدَّرَهُ', lemma: 'قَدَّرَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ق د ر', gloss: 'to ordain; and ordains it' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'then indeed' },
            { surface: 'هَانَ', lemma: 'هَانَ', pos: 'verb', features: 'perf.3ms', root: 'ه و ن', gloss: 'to be easy; becomes easy' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَأْخُذَهُ', lemma: 'أَخَذَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to take; attain it' },
            { surface: 'فَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and there is no' },
            { surface: 'رَادَّ', lemma: 'رَدَّ', pos: 'noun', features: 'indef.nom', root: 'ر د د', gloss: 'one who repels' },
            { surface: 'لِقَضَاءِ', lemma: 'قَضَاء', pos: 'noun', features: 'prep+constr.gen', root: 'ق ض ي', gloss: 'the decree of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا أَرَادَ مُوسى أَنْ يُشَوِّقَ بَنِي إِسْرَائِيلَ؟',
          options: ['لِأَنَّ الْأَرْضَ الْمُقَدَّسَةَ قَدِ اسْتَوْلى عَلَيْهَا قَوْمٌ جَبَّارُونَ', 'لِأَنَّهُمْ كَانُوا يُرِيدُونَ الْحَرْبَ', 'لِأَنَّ فِرْعَوْنَ أَمَرَهُ بِذَلِكَ'],
          answer: 0,
          qEn: 'Why did Mūsā want to encourage the Children of Israel?',
          optionsEn: ['Because the Holy Land had been seized by a tyrannical people', 'Because they wanted war', 'Because Pharaoh commanded him to'],
        },
        {
          q: 'مَاذَا قَالَ مُوسى لِقَوْمِهِ عَنْ نِعْمَةِ اللَّهِ عَلَيْهِمْ؟',
          options: ['جَعَلَ فِيهِمْ أَنْبِيَاءَ وَجَعَلَهُمْ مُلُوكاً وَآتَاهُمْ مَا لَمْ يُؤْتِ أَحَداً مِنَ الْعَالَمِينَ', 'لَمْ يَذْكُرْ لَهُمْ شَيْئاً', 'قَالَ إِنَّ اللَّهَ نَسِيَهُمْ'],
          answer: 0,
          qEn: "What did Mūsā tell his people about Allah's favor upon them?",
          optionsEn: ['He made among them prophets, made them kings, and gave them what He had given no one else among the worlds', 'He mentioned nothing to them', 'He said Allah had forgotten them'],
        },
      ],
    },
    {
      en: '[Qur\'an:] "O my people, enter the Holy Land which Allah has decreed for you." And he feared that the nature of cowardice would overcome them, so he said: [Qur\'an:] "And do not turn back on your heels, lest you become losers." But what Mūsā had feared came to pass, and their answer to everything he said was:',
      sentences: [
        {
          // Al-Ma'idah 5:21a.
          id: 'qs-v7-c17-018',
          ar: '﴿يَقَوِّمِ ٱدْخُلُوا۟ ٱلْأَرْضَ ٱلْمُقَدَّسَةَ ٱلَّتِى كَتَبَ ٱللَّهُ لَكُمْ﴾.',
          en: '"O my people, enter the Holy Land which Allah has decreed for you."',
          tokens: [
            { surface: 'يَقَوِّمِ', lemma: 'قَوْم', pos: 'noun', features: 'part+gen+1s', root: 'ق و م', gloss: 'O my people' },
            { surface: 'ٱدْخُلُوا۟', lemma: 'دَخَلَ', pos: 'verb', features: 'imp.2mp', root: 'د خ ل', gloss: 'to enter; enter!' },
            { surface: 'ٱلْأَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'def.acc', gloss: 'the land' },
            { surface: 'ٱلْمُقَدَّسَةَ', lemma: 'مُقَدَّس', pos: 'adj', features: 'def.acc.f', root: 'ق د س', gloss: 'the sanctified, holy' },
            { surface: 'ٱلَّتِى', lemma: 'الَّذِي', pos: 'rel', features: 'rel.f', gloss: 'which' },
            { surface: 'كَتَبَ', lemma: 'كَتَبَ', pos: 'verb', features: 'perf.3ms', root: 'ك ت ب', gloss: 'to decree; decreed' },
            { surface: 'ٱللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
          ],
        },
        {
          id: 'qs-v7-c17-019',
          ar: 'وَخَافَ أَنْ تَغْلِبَهُمْ طَبِيعَةُ الْجُبْنِ فَقَالَ:',
          en: 'And he feared that the nature of cowardice would overcome them, so he said:',
          tokens: [
            { surface: 'وَخَافَ', lemma: 'خَافَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to fear; and feared' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'تَغْلِبَهُمْ', lemma: 'غَلَبَ', pos: 'verb', features: 'impf.3fs+3mp', root: 'غ ل ب', gloss: 'to overcome; overcome them' },
            { surface: 'طَبِيعَةُ', lemma: 'طَبِيعَة', pos: 'noun', features: 'nom.constr', root: 'ط ب ع', gloss: 'the nature of' },
            { surface: 'الْجُبْنِ', lemma: 'جُبْن', pos: 'noun', features: 'def.gen', root: 'ج ب ن', gloss: 'cowardice' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'so said' },
          ],
        },
        {
          // Al-Ma'idah 5:21b.
          id: 'qs-v7-c17-020',
          ar: '﴿وَلا تَرْتَدُّوا۟ عَلَىٰٓ أَدْبَارِكُمْ فَتَنقَلِبُوا۟ خَٰسِرِينَ﴾.',
          en: '"And do not turn back on your heels, lest you become losers."',
          tokens: [
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and do not' },
            { surface: 'تَرْتَدُّوا۟', lemma: 'اِرْتَدَّ', pos: 'verb', features: 'impf.2mp', root: 'ر د د', gloss: 'to turn back; turn back' },
            { surface: 'عَلَىٰٓ', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'أَدْبَارِكُمْ', lemma: 'دُبُر', pos: 'noun', features: 'pl.gen+2mp', root: 'د ب ر', gloss: 'your backs, heels' },
            { surface: 'فَتَنقَلِبُوا۟', lemma: 'اِنْقَلَبَ', pos: 'verb', features: 'conj+impf.2mp', root: 'ق ل ب', gloss: 'to turn back, become; and become' },
            { surface: 'خَٰسِرِينَ', lemma: 'خَاسِر', pos: 'noun', features: 'pl.acc', gloss: 'losers' },
          ],
        },
        {
          id: 'qs-v7-c17-021',
          ar: 'وَوَقَعَ مَا كَانَ يَحْذَرُهُ مُوسى، فَكَانَ جَوَابُهُمْ عَلى كُلِّ مَا قَالَ مُوسى.',
          en: 'And what Mūsā had feared came to pass, and their answer to everything Mūsā said was:',
          tokens: [
            { surface: 'وَوَقَعَ', lemma: 'وَقَعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to happen; and happened' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'was' },
            { surface: 'يَحْذَرُهُ', lemma: 'حَذِرَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'ح ذ ر', gloss: 'to fear, be wary of; fearing it' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'and was' },
            { surface: 'جَوَابُهُمْ', lemma: 'جَوَاب', pos: 'noun', features: 'nom+3mp', gloss: 'their answer' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
          ],
        },
      ],
      checks: [
        {
          q: 'مِمَّ خَافَ مُوسى عَلى قَوْمِهِ؟',
          options: ['أَنْ تَغْلِبَهُمْ طَبِيعَةُ الْجُبْنِ فَيَرْتَدُّوا خَاسِرِينَ', 'أَنْ يَنْتَصِرُوا عَلَى الْجَبَّارِينَ بِسُرْعَةٍ', 'أَنْ يَدْخُلُوا الْأَرْضَ الْمُقَدَّسَةَ فَوْراً'],
          answer: 0,
          qEn: 'What did Mūsā fear for his people?',
          optionsEn: ['That the nature of cowardice would overcome them and they would turn back as losers', 'That they would quickly defeat the tyrants', 'That they would enter the Holy Land at once'],
        },
      ],
    },
    {
      lines: true,
      en: '[Qur\'an:] "O Mūsā, indeed in it is a tyrannical people, and we will never enter it until they leave it." And they said, with a show of dignity and calm: [Qur\'an:] "But if they leave it, then we shall enter." [Qur\'an:] "Two men from among those who feared [Allah], upon whom He had bestowed His favor, said: Enter upon them through the gate; for if you enter it, you will surely be victorious. And put your trust in Allah, if you are believers." But that did not move them, and they said: "If entering is unavoidable, then you go in with a miracle; and when we hear that you have entered it, we will come and enter too, safe and secure."',
      sentences: [
        {
          // Al-Ma'idah 5:22a.
          id: 'qs-v7-c17-022',
          ar: '﴿يَٰمُوسَىٰٓ إِنَّ فِيهَا قَوْمًا جَبَّارِينَ وَإِنَّا لَن نَّدْخُلَهَا حَتَّىٰ يَخْرُجُوا۟ مِنْهَا﴾.',
          en: '"O Mūsā, indeed in it is a tyrannical people, and we will never enter it until they leave it."',
          tokens: [
            { surface: 'يَٰمُوسَىٰٓ', lemma: 'مُوسَى', pos: 'proper', features: 'part', gloss: 'O Mūsā' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'قَوْمًا', lemma: 'قَوْم', pos: 'noun', features: 'indef.acc', root: 'ق و م', gloss: 'a people' },
            { surface: 'جَبَّارِينَ', lemma: 'جَبَّار', pos: 'adj', features: 'pl.indef.acc', root: 'ج ب ر', gloss: 'tyrannical' },
            { surface: 'وَإِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1p', gloss: 'and indeed we' },
            { surface: 'لَن', lemma: 'لَنْ', pos: 'part', features: 'part', gloss: 'never' },
            { surface: 'نَّدْخُلَهَا', lemma: 'دَخَلَ', pos: 'verb', features: 'impf.1p+3fs', root: 'د خ ل', gloss: 'we enter it' },
            { surface: 'حَتَّىٰ', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'until' },
            { surface: 'يَخْرُجُوا۟', lemma: 'خَرَجَ', pos: 'verb', features: 'impf.3mp', gloss: 'to leave; they leave' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from it' },
          ],
        },
        {
          id: 'qs-v7-c17-023',
          ar: 'وَقَالُوا فِي وَقَارٍ وَسُكُونٍ:',
          en: 'And they said, with a show of dignity and calm:',
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق و ل', gloss: 'and said' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'وَقَارٍ', lemma: 'وَقَار', pos: 'noun', features: 'indef.gen', root: 'و ق ر', gloss: 'dignity' },
            { surface: 'وَسُكُونٍ', lemma: 'سُكُون', pos: 'noun', features: 'conj+indef.gen', root: 'س ك ن', gloss: 'and calm' },
          ],
        },
        {
          // Al-Ma'idah 5:22b.
          id: 'qs-v7-c17-024',
          ar: '﴿فَإِن يَخْرُجُوا۟ مِنْهَا فَإِنَّا دَٰخِلُونَ﴾.',
          en: '"But if they leave it, then we shall enter."',
          tokens: [
            { surface: 'فَإِن', lemma: 'إِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but if' },
            { surface: 'يَخْرُجُوا۟', lemma: 'خَرَجَ', pos: 'verb', features: 'impf.3mp', gloss: 'they leave' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from it' },
            { surface: 'فَإِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1p', gloss: 'then indeed we' },
            { surface: 'دَٰخِلُونَ', lemma: 'دَخَلَ', pos: 'noun', features: 'pl.nom', root: 'د خ ل', gloss: 'entering' },
          ],
        },
        {
          // Al-Ma'idah 5:23.
          id: 'qs-v7-c17-025',
          ar: '﴿قَالَ رَجُلَانِ مِنَ ٱلَّذِينَ يَخَافُونَ أَنْعَمَ ٱللَّهُ عَلَيْهِمَا ٱدْخُلُوا۟ عَلَيْهِمُ ٱلْبَابَ فَإِذَا دَخَلْتُمُوهُ فَإِنَّكُمْ غَٰلِبُونَ وَعَلَى ٱللَّهِ فَتَوَكَّلُوٓا۟ إِن كُنتُم مُّؤْمِنِينَ﴾.',
          en: '"Two men from among those who feared [Allah], upon whom He had bestowed His favor, said: Enter upon them through the gate; for if you enter it, you will surely be victorious. And put your trust in Allah, if you are believers."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'رَجُلَانِ', lemma: 'رَجُل', pos: 'noun', features: 'du.indef.nom', gloss: 'two men' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from among' },
            { surface: 'ٱلَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'rel.pl', gloss: 'those who' },
            { surface: 'يَخَافُونَ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3mp', gloss: 'fear' },
            { surface: 'أَنْعَمَ', lemma: 'أَنْعَمَ', pos: 'verb', features: 'perf.3ms', root: 'ن ع م', gloss: 'to bestow favor; had bestowed favor' },
            { surface: 'ٱللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَيْهِمَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+3md', gloss: 'upon the two of them' },
            { surface: 'ٱدْخُلُوا۟', lemma: 'دَخَلَ', pos: 'verb', features: 'imp.2mp', root: 'د خ ل', gloss: 'to enter; enter!' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'ٱلْبَابَ', lemma: 'بَاب', pos: 'noun', features: 'def.acc', gloss: 'the gate' },
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'then if' },
            { surface: 'دَخَلْتُمُوهُ', lemma: 'دَخَلَ', pos: 'verb', features: 'perf.2mp+3ms', root: 'د خ ل', gloss: 'you enter it' },
            { surface: 'فَإِنَّكُمْ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+2mp', gloss: 'then indeed you' },
            { surface: 'غَٰلِبُونَ', lemma: 'غَلَبَ', pos: 'noun', features: 'pl.nom', root: 'غ ل ب', gloss: 'victorious' },
            { surface: 'وَعَلَى', lemma: 'عَلَى', pos: 'prep', features: 'conj+prep', gloss: 'and upon' },
            { surface: 'ٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'فَتَوَكَّلُوٓا۟', lemma: 'تَوَكَّلَ', pos: 'verb', features: 'conj+imp.2mp', root: 'و ك ل', gloss: 'to trust, rely; then trust' },
            { surface: 'إِن', lemma: 'إِنْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'كُنتُم', lemma: 'كَانَ', pos: 'verb', features: 'perf.2mp', root: 'ك و ن', gloss: 'you are' },
            { surface: 'مُّؤْمِنِينَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'pl.acc', gloss: 'believers' },
          ],
        },
        {
          id: 'qs-v7-c17-026',
          ar: 'وَلَكِنَّ ذلِكَ لَمْ يُؤَثِّرْ فِيهِمْ وَقَالُوا:',
          en: 'But that did not move them, and they said:',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'ذلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُؤَثِّرْ', lemma: 'أَثَّرَ', pos: 'verb', features: 'impf.3ms', root: 'أ ث ر', gloss: 'to influence, affect' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'in them' },
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق و ل', gloss: 'and said' },
          ],
        },
        {
          id: 'qs-v7-c17-027',
          ar: 'إِذَا كَانَ لا بُدَّ مِنَ الدُّخُولِ فَادْخُلْ أَنْتَ بِمُعْجِزَةٍ،',
          en: 'If entering is unavoidable, then you go in with a miracle,',
          tokens: [
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'was, is' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'بُدَّ', lemma: 'بُدّ', pos: 'noun', features: 'acc', gloss: 'escape, avoiding' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الدُّخُولِ', lemma: 'دُخُول', pos: 'noun', features: 'def.gen', root: 'د خ ل', gloss: 'the entering' },
            { surface: 'فَادْخُلْ', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+imp.2ms', root: 'د خ ل', gloss: 'then enter!' },
            { surface: 'أَنْتَ', lemma: 'أَنْتَ', pos: 'noun', features: '2ms', gloss: 'you' },
            { surface: 'بِمُعْجِزَةٍ', lemma: 'مُعْجِزَة', pos: 'noun', features: 'prep+indef.gen', root: 'ع ج ز', gloss: 'with a miracle' },
          ],
        },
        {
          id: 'qs-v7-c17-028',
          ar: 'فَإِذَا سَمِعْنَا أَنَّكَ قَدْ دَخَلْتَهَا،',
          en: 'and when we hear that you have entered it,',
          tokens: [
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'then when' },
            { surface: 'سَمِعْنَا', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.1p', gloss: 'we hear' },
            { surface: 'أَنَّكَ', lemma: 'أَنَّ', pos: 'part', features: 'part+2ms', gloss: 'that you' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed, already' },
            { surface: 'دَخَلْتَهَا', lemma: 'دَخَلَ', pos: 'verb', features: 'perf.2ms+3fs', root: 'د خ ل', gloss: 'you entered it' },
          ],
        },
        {
          id: 'qs-v7-c17-029',
          ar: 'جِئْنَا فَدَخَلْنَا نَحْنُ أَيْضاً آمِنِينَ سَالِمِينَ.',
          en: 'we will come and enter too, safe and secure.',
          tokens: [
            { surface: 'جِئْنَا', lemma: 'جَاءَ', pos: 'verb', features: 'perf.1p', gloss: 'to come; we come' },
            { surface: 'فَدَخَلْنَا', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+perf.1p', root: 'د خ ل', gloss: 'and we enter' },
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'أَيْضاً', lemma: 'أَيْضاً', pos: 'adv', features: 'adv', gloss: 'also' },
            { surface: 'آمِنِينَ', lemma: 'آمِن', pos: 'adj', features: 'pl.acc', root: 'أ م ن', gloss: 'safe' },
            { surface: 'سَالِمِينَ', lemma: 'سَالِم', pos: 'adj', features: 'pl.acc', gloss: 'secure' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ جَوَابُ بَنِي إِسْرَائِيلَ عَلى دَعْوَةِ مُوسى لِدُخُولِ الْأَرْضِ الْمُقَدَّسَةِ؟',
          options: ['إِنَّ فِيهَا قَوْماً جَبَّارِينَ وَإِنَّا لَنْ نَدْخُلَهَا حَتَّى يَخْرُجُوا مِنْهَا', 'قَالُوا نَعَمْ نَدْخُلُهَا مَعَكَ فَوْراً', 'سَكَتُوا وَلَمْ يُجِيبُوا'],
          answer: 0,
          qEn: "How did the Children of Israel answer Mūsā's call to enter the Holy Land?",
          optionsEn: ['Indeed in it is a tyrannical people, and we will never enter it until they leave it', 'They said: Yes, we will enter it with you at once', 'They stayed silent and did not answer'],
        },
        {
          q: 'مَاذَا طَلَبَ بَنُو إِسْرَائِيلَ مِنْ مُوسى بَعْدَ أَنْ لَمْ تُؤَثِّرْ فِيهِمْ نَصِيحَةُ الرَّجُلَيْنِ؟',
          options: ['أَنْ يَدْخُلَ هُوَ وَرَبُّهُ بِمُعْجِزَةٍ وَيَدْخُلُوا هُمْ بَعْدَهُ آمِنِينَ', 'أَنْ يَتْرُكَهُمْ وَحْدَهُمْ', 'أَنْ يُقَاتِلَ الْجَبَّارِينَ بِنَفْسِهِ'],
          answer: 0,
          qEn: "What did the Children of Israel demand of Mūsā after the two men's counsel failed to move them?",
          optionsEn: ['That he and his Lord go in and fight with a miracle, and they would enter safely after him', 'That he leave them alone', 'That he fight the tyrants himself'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَأَرَادَ مُوسى بِوَحْيِ اللَّهِ أَنْ',
        post: 'الْأَرْضَ الْمُقَدَّسَةَ.',
        en: "So Mūsā wanted, by Allah's revelation, that they enter the Holy Land.",
        options: ['يَدْخُلُوا', 'دَخَلُوا', 'يَدْخُلُونَ', 'دَخَلْنَا'],
        answer: 0,
        rationales: [
          'Subjunctive after أَنْ -- correct, "that they enter."',
          'Perfect -- wrong; أَنْ requires the subjunctive imperfect, not the perfect.',
          'Indicative imperfect (with ن) -- wrong; أَنْ drops the ن and requires the subjunctive.',
          'Wrong person -- "we entered," not "they enter."',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَأَرَادَ أَنْ',
        post: 'وَأَنْ يُهَوِّنَ عَلَيْهِمُ الْأَمْرَ.',
        en: 'So he wanted to encourage them and to make the matter easier for them.',
        options: ['يُشَوِّقَهُمْ', 'شَوَّقَهُمْ', 'يُشَوِّقُهُمْ', 'شَوِّقْهُمْ'],
        answer: 0,
        rationales: [
          'Subjunctive after أَنْ, with the object suffix -- correct.',
          'Perfect -- wrong tense for a purpose clause after أَنْ.',
          'Indicative (with ُ) -- wrong; أَنْ takes the subjunctive, which drops the final ُ.',
          'Imperative -- wrong; this is not a command form here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَكِنَّ مُوسى كَانَ',
        post: 'طَبِيعَةَ الْجُبْنِ وَالضَّعْفِ فِي بَنِي إِسْرَائِيلَ.',
        en: 'But Mūsā knew the nature of cowardice and weakness in the Children of Israel.',
        options: ['يَعْرِفُ', 'عَرَفَ', 'يَعْرِفُونَ', 'نَعْرِفُ'],
        answer: 0,
        rationales: [
          'Imperfect after كَانَ -- correct, forming "was knowing/used to know."',
          'Perfect -- wrong; كَانَ + perfect does not give this continuous sense as taught.',
          '3rd plural -- wrong person/number; the subject is مُوسى, singular.',
          '1st plural -- wrong person; "we know," not "he knew."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَرَادَ مُوسى الدُّخُولَ',
        pre: '',
        post: 'الدُّخُولَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَرَدْتُ', 'أَرَادَ', 'أَرَدْنَا', 'أَرَدْتَ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
          '2nd masculine singular -- you.',
        ],
      },
      {
        type: 'shift',
        base: 'أَرَادَ مُوسى الدُّخُولَ',
        pre: '',
        post: 'الدُّخُولَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['أَرَادُوا', 'أَرَادَ', 'أَرَدْنَا', 'أَرَدْتُمْ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
          '2nd masculine plural -- you all.',
        ],
      },
      {
        type: 'shift',
        base: 'أَرَادَ مُوسى الدُّخُولَ',
        pre: '',
        post: 'الدُّخُولَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['أَرَدْنَا', 'أَرَادَ', 'أَرَادُوا', 'أَرَدْتُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '3rd masculine plural -- they.',
          '1st singular -- I.',
        ],
      },
    ],
  },
};

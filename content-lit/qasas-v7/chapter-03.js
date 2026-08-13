// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 3 -- ٣ - زَوْجُ فِرْعَوْنَ ("Pharaoh's Wife").
// Pages 166-169, from the heading at the top of page 166 through the ayah
// (at-Taḥrīm 66:11) that ends right before the ch4 heading box partway down
// page 169. Transcribed by hand from the scan (vision OCR) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// One correction applied to the raw transcription, per instruction (verified
// against the scan image directly): the page 166 heading's diacritics, which
// the transcript flagged as unclear/unconfirmed, are confirmed to read
// «٣ - زَوْجُ فِرْعَوْنَ».
//
// Page 167 opens with a near-verbatim repeat of the sentence pair that opens
// page 166 ("أَرَاهُ اللَّهُ أَنَّهُ مَلِكُ الْعُقُولِ..." / "وَأَنَّ لَهُ سُلْطَاناً
// عَلَى..."). Per instruction this is deliberate authorial rhetorical
// repetition (echoing the chapter's opening as a rhetorical turn before
// pivoting to the story of Āsiya's hidden faith), not a transcription
// artifact -- both occurrences are transcribed faithfully as separate
// sentences (qs-v7-c03-001/002 and qs-v7-c03-011/012).
//
// Grammar / lexical notes:
//   -- بَنِي إِسْرَائِيلَ does not occur in this chapter (it first appears in
//      ch4's title and text); nothing to tokenize here on that convention.
//   -- جُنَّ جُنُونُ فِرْعَوْنَ (qs-v7-c03-004b) is a reduplicative idiom, lit.
//      "Pharaoh's madness went mad" = "he flew into a rage". جُنَّ tagged as
//      its own new verb lemma جَنَّ (pass+perf.3ms), distinct from the noun
//      جُنُون which is already taught (qiraah-v2 ch44) and reused unchanged.
//   -- بَرَقَ / رَعَدَ (qs-v7-c03-005b, "he flashed [with anger] and
//      thundered") are tagged as new verb lemmas, form-I, despite the
//      corpus already teaching the unrelated form-IV أَبْرَقَ (qiraah-v2
//      ch47, "to flash/telegraph") and the noun بَرْقِيَّة (qiraah-v1 ch28,
//      "telegram") -- different derivational pattern/sense, so flagged as
//      distinct rather than silently reused, matching this corpus's
//      established homograph convention (cf. qasas-v7 ch1's عَاد/عَادَ note).
//   -- صَاحَبَ (qs-v7-c03-024, Luqmān 31:15's وَصَاحِبْهُمَا) and جَاهَدَ
//      (same āyah's جَٰهَدَاكَ) both reuse already-taught lemmas (qiraah-v2
//      ch66 and ch68 respectively) rather than being tagged new.
//   -- بَارّاً (qs-v7-c03-023, "dutiful [toward parents]") is tagged as its
//      own new lemma بَارّ, a فَاعِل-pattern participle, kept distinct from
//      the already-taught noun بَرّ/بِرّ (qiraah-v2 ch35) on the same root --
//      different derivational pattern, flagging the homograph rather than
//      reusing.
//   -- مَثَل ("example, parable", qs-v7-c03-027/028, ضَرَبَ ... مَثَلاً "gave
//      an example") is tagged new and kept distinct from the vocalically
//      different, already-taught مِثْل ("like, similar", qasas-v2 ch2) --
//      same root, different word.
//   -- The Luqmān 31:15 āyah (qs-v7-c03-024) uses two undocumented dual
//      person atoms not in CHAPTER-FORMAT.md's list (1s 1p 2ms 2fs 3ms 3fs
//      3mp 3fp): "3d" for a dual verbal subject (جَٰهَدَاكَ, "the two of them
//      strove against you") and for a dual object/oblique suffix (تُطِعْهُمَا,
//      بِهِمَا in qs-v7-c03-023). Per the brief's explicit guidance this is
//      safe -- an unrecognised atom just prints literally -- so used here
//      rather than mis-tagging as plural.
//   -- Several extremely common function words do not appear anywhere in
//      the supplied shared-lexicon export -- هُوَ، مَاذَا، أَوْ، عَنْ، عِنْدَ --
//      matching the export-gap pattern already flagged in this volume's
//      ch1 header (هَذَا، جَاءَ، يَوْم, etc.). Treated as lexicon.txt export
//      gaps, not genuinely new vocabulary, and NOT added to newWords.
//   -- واستقامت (qs-v7-c03-025a) is transcribed exactly as it appears in the
//      source transcript, which is missing internal diacritics on this one
//      word (unlike the fully-vowelled text around it) -- preserved
//      faithfully per instruction rather than guessed at; intended reading
//      is وَٱسْتَقَامَتِ (اِسْتَقَامَ, already taught qiraah-v2 ch66).
//   -- Qur'anic quotations (qs-v7-c03-024, 028) are transcribed in full and
//      tokenized normally, without fragmentation, per the current task
//      brief (superseding the older 2-token-fragment workaround). Both run
//      well over 9 tokens and are automatically outside the build stage's
//      3-9 token drillable window. Verse-end pause/number glyphs printed in
//      the source (e.g. "(١٥)", "(١١)") are not transcribed, matching this
//      corpus's established convention. Quotations are drawn from Luqmān
//      31:15 and at-Taḥrīm 66:11.
//   -- `workshop.cloze`/`workshop.shift` are built only from the narrator's
//      own recycled prose patterns (the repeated وَأَنَّ لَهُ سُلْطَاناً عَلَى...
//      frame, and the repeated لَمْ يَشْعُرْ/تَشْعُرْ negation), never from a
//      Qur'anic quotation, per instruction.
//
// Shared lexicon check (grepped against the supplied lexicon.txt export,
// plus qasas-v7 ch1/ch2's own tokens for this-volume proper nouns):
// كَانَ، فِرْعَوْن (qasas-v7 ch1)، أَنَّ (qasas-v1 ch2)، مَلِك (qasas-v1 ch10)،
// كَمَا (bedrock, see note above -- not in export but كَ and مَا are both
// independently bedrock)، عَقْل (qiraah-v1 ch25, qiraah-v2 ch50)، جِسْم
// (qiraah-v2 ch33/47)، سُلْطَان (qiraah-v2 ch60)، عَلَى، قَلْب (qiraah-v2
// ch38)، لِسَان (qiraah-v2 ch65)، لَيْسَ (qasas-v1 ch12)، أَحَد (qasas-v1
// ch9)، فِي، مِصْر (qasas-v2 ch7)، أَنْ، أَوْ (bedrock)، آمَنَ (qasas-v3 ch14)،
// شَيْء (qasas-v1 ch3)، مُوسَى (qasas-v7 ch1)، أَقْصَى (qasas-v1 ch16)، أَذِنَ
// (qiraah-v2 ch39)، قَامَ (qasas-v2 ch7)، قَعَدَ (qiraah-v2 ch32/38/60)،
// كَيْفَ (qiraah-v2 ch38)، قَبْلَ (qiraah-v2 ch38)، عَاشَ (qasas-v3 ch1)،
// عَصَى (qiraah-v2 ch38)، أَكَلَ (qasas-v1 ch2)، كَفَرَ (qasas-v3 ch8)، أَنَا
// (qasas-v7 ch2)، نَفْس (qasas-v1 ch2)، اللَّه، نَسِيَ (qasas-v2 ch6)، آيَة
// (qasas-v2 ch4)، بَيْت (qiraah-v2 ch38)، أَهْل (qasas-v2 ch9)، حَالَ (qasas-v3
// ch20)، بَيْنَ (qasas-v3 ch20)، رَجُل (qasas-v1 ch1)، مَرْء (qiraah-v2 ch69)،
// دَخَلَ (qasas-v1 ch5)، إِيمَان (qiraah-v2 ch45)، هُوَ (bedrock, see note
// above)، لا، شَعَرَ (qasas-v7 ch2)، مَلَكَ (qiraah-v2 ch32/47)، اِمْرَأَة
// (qasas-v2 ch7)، رَغْم (qiraah-v2 ch66)، زَوْج (qiraah-v1 ch24)، خَلْق
// (qasas-v2 ch11)، أَحَبّ (qasas-v2 ch8)، نَاس، إِلَى، صَنَعَ (qiraah-v2 ch38)،
// ذَلِكَ (bedrock, see ch1 header)، عَيْن (qiraah-v2 ch64)، غُرَاب (qiraah-v2
// ch52)، لَوْ (qasas-v1 ch10/15)، عَلِمَ (qasas-v1 ch5)، مَاذَا (bedrock)،
// فَعَلَ (qasas-v7 ch1)، إِنَّ، لَكِنَّ (qasas-v1 ch6/14)، أَطَاعَ (qasas-v2
// ch10)، لَكِنْ (qasas-v1 ch13)، طَاعَة (qiraah-v2 ch43)، وَلَد (qasas-v3
// ch1)، أَب (qasas-v1 ch3)، رَشِيد (qasas-v1 ch2)، شِرْك (qasas-v2 ch11)،
// إِنْ (qasas-v1 ch14)، جَاهَدَ (qiraah-v2 ch68)، أَشْرَكَ (qasas-v2 ch11)، بِ،
// عِلْم (qasas-v2 ch1)، صَاحَبَ (qiraah-v2 ch66)، دُنْيَا (qasas-v2 ch25)،
// اِتَّبَعَ (qasas-v2 ch11)، سَبِيل (qasas-v2 ch20)، مَنْ، إِلَى، ثُمَّ (bedrock)،
// كَانَ، عَمِلَ (qiraah-v2 ch40)، اِسْتَقَامَ (qiraah-v2 ch66)، عَبَدَ (qasas-v1
// ch1)، عَدُوّ (qasas-v1 ch9)، خَافَ (qasas-v1 ch10)، رَضِيَ (qiraah-v2
// ch38/39)، عَنْ (bedrock)، أَنْجَى (qasas-v3 ch20)، عَمَل (qiraah-v2 ch40)،
// ضَرَبَ (qasas-v1 ch4/11)، مُؤْمِن (qiraah-v2 ch57)، شَجَاعَة (qiraah-v2
// ch47)، الَّذِي (qasas-v1 ch9)، إِذْ (qasas-v1 ch9)، قَالَ، رَبّ (qasas-v1
// ch7)، بَنَى (qasas-v1 ch15)، لِ، عِنْدَ (bedrock)، جَنَّة (qasas-v1 ch14)،
// قَوْم (qasas-v1 ch3/8)، ظَالِم (qasas-v1 ch10)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 22 new words (إِذْن، مَمْلَكَة، جَنَّ، بَرَقَ، رَعَدَ، أَوْلَى، أَعْلَم، شُرْطَة،
// شَامَّة، نَمْل، أَقْرَب، مَخْلُوق، مَعْصِيَة، خَالِق، بَارّ، مَعْرُوف، أَنَابَ، مَرْجِع،
// نَبَّأَ، تَبَرَّأَ، مَثَل، نَجَّى).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch3',
  title: { ar: 'زَوْجُ فِرْعَوْنَ', en: "Pharaoh's Wife" },
  newWords: [
    'إِذْن', 'مَمْلَكَة', 'جَنَّ', 'بَرَقَ', 'رَعَدَ', 'أَوْلَى', 'أَعْلَم', 'شُرْطَة',
    'شَامَّة', 'نَمْل', 'أَقْرَب', 'مَخْلُوق', 'مَعْصِيَة', 'خَالِق', 'بَارّ', 'مَعْرُوف',
    'أَنَابَ', 'مَرْجِع', 'نَبَّأَ', 'تَبَرَّأَ', 'مَثَل', 'نَجَّى',
  ],
  lemmas: {
    'إِذْن': { gloss: 'permission, leave' },
    'مَمْلَكَة': { gloss: 'kingdom, realm' },
    'جَنَّ': { gloss: 'to be driven mad, become frenzied' },
    'بَرَقَ': { gloss: 'to flash, flare up (in anger)' },
    'رَعَدَ': { gloss: 'to thunder, rage' },
    'أَوْلَى': { gloss: 'more worthy, more entitled' },
    'أَعْلَم': { gloss: 'most knowledgeable' },
    'شُرْطَة': { gloss: 'police' },
    'شَامَّة': { gloss: 'sense of smell (idiom: keen as an ant\'s)' },
    'نَمْل': { gloss: 'ants' },
    'أَقْرَب': { gloss: 'nearer, closer' },
    'مَخْلُوق': { gloss: 'created being, creature' },
    'مَعْصِيَة': { gloss: 'disobedience, sin' },
    'خَالِق': { gloss: 'the Creator' },
    'بَارّ': { gloss: 'dutiful, devoted (to one\'s parents)' },
    'مَعْرُوف': { gloss: 'kindly, fair; what is right' },
    'أَنَابَ': { gloss: 'to turn in repentance' },
    'مَرْجِع': { gloss: 'place of return' },
    'نَبَّأَ': { gloss: 'to inform, tell' },
    'تَبَرَّأَ': { gloss: 'to disavow, dissociate oneself (from)' },
    'مَثَل': { gloss: 'example, parable, similitude' },
    'نَجَّى': { gloss: 'to save, deliver' },
  },
  paragraphs: [
    {
      en: "Pharaoh believed that he was king of minds just as he was king of bodies, and that he held power over hearts just as he held power over tongues. No one in Egypt could believe or hold any belief except by his permission. Whenever anyone in the farthest reaches of Egypt's kingdom believed in Mūsā, Pharaoh flew into a rage. He would pace about and fume, flash with anger and thunder, saying: 'How can he believe in Mūsā before I permit him? He lives in my kingdom and disobeys me, eats my provision and denies me!' 'I have more right over every man in Egypt than he has over himself!' Yet Pharaoh forgot that he himself lived in Allah's kingdom and disobeyed Him, ate Allah's provision and disbelieved in Him. And Allah showed him a sign in his own house, a sign in his own family.",
      sentences: [
        {
          id: 'qs-v7-c03-001',
          ar: 'وَكَانَ فِرْعَوْنُ يَعْتَقِدُ أَنَّهُ مَلِكُ الْعُقُولِ كَمَا أَنَّهُ مَلِكُ الأَجْسَامِ.',
          en: 'Pharaoh believed that he was king of minds just as he was king of bodies.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'يَعْتَقِدُ', lemma: 'اِعْتَقَدَ', pos: 'verb', features: 'impf.3ms', root: 'ع ق د', gloss: 'to believe, hold as a belief' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'مَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'nom.constr', gloss: 'king of' },
            { surface: 'الْعُقُولِ', lemma: 'عَقْل', pos: 'noun', features: 'pl.def.gen', root: 'ع ق ل', gloss: 'the minds' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'مَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'nom.constr', gloss: 'king of' },
            { surface: 'الأَجْسَامِ', lemma: 'جِسْم', pos: 'noun', features: 'pl.def.gen', root: 'ج س م', gloss: 'the bodies' },
          ],
        },
        {
          id: 'qs-v7-c03-002',
          ar: 'وَأَنَّ لَهُ سُلْطَاناً عَلَى الْقُلُوبِ كَمَا أَنَّ لَهُ سُلْطَاناً عَلَى الأَلْسِنَةِ.',
          en: 'and that he held power over hearts just as he held power over tongues.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'he had' },
            { surface: 'سُلْطَاناً', lemma: 'سُلْطَان', pos: 'noun', features: 'indef.acc', gloss: 'power' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'الْقُلُوبِ', lemma: 'قَلْب', pos: 'noun', features: 'pl.def.gen', root: 'ق ل ب', gloss: 'the hearts' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'he had' },
            { surface: 'سُلْطَاناً', lemma: 'سُلْطَان', pos: 'noun', features: 'indef.acc', gloss: 'power' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'الأَلْسِنَةِ', lemma: 'لِسَان', pos: 'noun', features: 'pl.def.gen', root: 'ل س ن', gloss: 'the tongues' },
          ],
        },
        {
          id: 'qs-v7-c03-003',
          ar: 'وَلَيْسَ لأَحَدٍ فِي مِصْرَ أَنْ يَعْتَقِدَ شَيْئاً أَوْ يُؤْمِنَ بِشَيْءٍ إِلَّا بِإِذْنِهِ.',
          en: 'No one in Egypt could believe or hold any belief except by his permission.',
          tokens: [
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to not be; and it is not [permitted]' },
            { surface: 'لأَحَدٍ', lemma: 'أَحَد', pos: 'noun', features: 'prep+indef.gen', gloss: 'for anyone' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَعْتَقِدَ', lemma: 'اِعْتَقَدَ', pos: 'verb', features: 'impf.3ms', gloss: 'to believe' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'يُؤْمِنَ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3ms', gloss: 'to believe' },
            { surface: 'بِشَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'prep+indef.gen', gloss: 'in anything' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'بِإِذْنِهِ', lemma: 'إِذْن', pos: 'noun', features: 'prep+gen+3ms', root: 'ا ذ ن', gloss: 'by his permission' },
          ],
        },
        {
          id: 'qs-v7-c03-004',
          ar: 'وَكَانَ إِذَا آمَنَ أَحَدٌ بِمُوسَى فِي أَقْصَى مَمْلَكَةِ مِصْرَ جُنَّ جُنُونُ فِرْعَوْنَ.',
          en: "Whenever anyone in the farthest reaches of Egypt's kingdom believed in Mūsā, Pharaoh flew into a rage.",
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and it was [that]' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'whenever' },
            { surface: 'آمَنَ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3ms', gloss: 'to believe; believed' },
            { surface: 'أَحَدٌ', lemma: 'أَحَد', pos: 'noun', features: 'indef.nom', gloss: 'anyone' },
            { surface: 'بِمُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'prep+gen', gloss: 'in Mūsā' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أَقْصَى', lemma: 'أَقْصَى', pos: 'adj', features: 'gen.constr', gloss: 'the farthest [reach] of' },
            { surface: 'مَمْلَكَةِ', lemma: 'مَمْلَكَة', pos: 'noun', features: 'constr.gen', root: 'م ل ك', gloss: 'the kingdom of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'جُنَّ', lemma: 'جَنَّ', pos: 'verb', features: 'pass+perf.3ms', root: 'ج ن ن', gloss: 'to be driven mad; went wild' },
            { surface: 'جُنُونُ', lemma: 'جُنُون', pos: 'noun', features: 'nom.constr', root: 'ج ن ن', gloss: "the madness of [Pharaoh flew into a rage]" },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
          ],
        },
        {
          id: 'qs-v7-c03-005',
          ar: 'وَقَامَ فِرْعَوْنُ وَقَعَدَ،',
          en: 'He would pace about,',
          tokens: [
            { surface: 'وَقَامَ', lemma: 'قَامَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و م', gloss: 'to stand, arise; and he stood' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'وَقَعَدَ', lemma: 'قَعَدَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to sit; and sat' },
          ],
        },
        {
          id: 'qs-v7-c03-006',
          ar: 'وَبَرَقَ فِرْعَوْنُ وَرَعَدَ.',
          en: 'flashed with anger and thundered.',
          tokens: [
            { surface: 'وَبَرَقَ', lemma: 'بَرَقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ب ر ق', gloss: 'to flash, flare up in anger; and flashed' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'وَرَعَدَ', lemma: 'رَعَدَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر ع د', gloss: 'to thunder, rage; and thundered' },
          ],
        },
        {
          id: 'qs-v7-c03-007',
          ar: 'وَقَالَ كَيْفَ يَكُونُ لَهُ أَنْ يُؤْمِنَ بِمُوسَى قَبْلَ أَنْ آذَنَ لَهُ؟!',
          en: "and said: 'How can he believe in Mūsā before I permit him?!'",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'part', gloss: 'how' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; can it be' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُؤْمِنَ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3ms', gloss: 'to believe' },
            { surface: 'بِمُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'prep+gen', gloss: 'in Mūsā' },
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'prep', features: 'prep', gloss: 'before' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'آذَنَ', lemma: 'أَذِنَ', pos: 'verb', features: 'impf.1s', gloss: 'to permit; I permit' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'him' },
          ],
        },
        {
          id: 'qs-v7-c03-008',
          ar: 'يَعِيشُ فِي مَمْلَكَتِي وَيَعْصِينِي،',
          en: "'He lives in my kingdom and disobeys me,",
          tokens: [
            { surface: 'يَعِيشُ', lemma: 'عَاشَ', pos: 'verb', features: 'impf.3ms', gloss: 'to live' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مَمْلَكَتِي', lemma: 'مَمْلَكَة', pos: 'noun', features: 'gen+1s', gloss: 'my kingdom' },
            { surface: 'وَيَعْصِينِي', lemma: 'عَصَى', pos: 'verb', features: 'conj+impf.3ms+1s', gloss: 'to disobey; and disobeys me' },
          ],
        },
        {
          id: 'qs-v7-c03-009',
          ar: 'وَيَأْكُلُ رِزْقِي وَيَكْفُرُنِي؟!',
          en: "eats my provision and denies me?!'",
          tokens: [
            { surface: 'وَيَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to eat; and eats' },
            { surface: 'رِزْقِي', lemma: 'رِزْق', pos: 'noun', features: 'acc+1s', gloss: 'my provision' },
            { surface: 'وَيَكْفُرُنِي', lemma: 'كَفَرَ', pos: 'verb', features: 'conj+impf.3ms+1s', gloss: 'to disbelieve; and denies me' },
          ],
        },
        {
          id: 'qs-v7-c03-010',
          ar: 'أَنَا أَوْلَى بِكُلِّ رَجُلٍ فِي مِصْرَ مِنْ نَفْسِهِ!',
          en: "'I have more right over every man in Egypt than he has over himself!'",
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'أَوْلَى', lemma: 'أَوْلَى', pos: 'adj', features: 'nom', root: 'و ل ي', gloss: 'more worthy, more entitled' },
            { surface: 'بِكُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'prep+constr.gen', gloss: 'over every' },
            { surface: 'رَجُلٍ', lemma: 'رَجُل', pos: 'noun', features: 'indef.gen', gloss: 'man' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'نَفْسِهِ', lemma: 'نَفْس', pos: 'noun', features: 'gen+3ms', gloss: 'himself' },
          ],
        },
        {
          id: 'qs-v7-c03-011',
          ar: 'وَيَنْسَى فِرْعَوْنُ أَنَّهُ يَعِيشُ فِي مَمْلَكَةِ اللَّهِ وَيَعْصِيهِ،',
          en: 'Yet Pharaoh forgot that he himself lived in Allah\'s kingdom and disobeyed Him,',
          tokens: [
            { surface: 'وَيَنْسَى', lemma: 'نَسِيَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to forget; yet forgets' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'يَعِيشُ', lemma: 'عَاشَ', pos: 'verb', features: 'impf.3ms', gloss: 'to live' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مَمْلَكَةِ', lemma: 'مَمْلَكَة', pos: 'noun', features: 'constr.gen', gloss: 'the kingdom of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَيَعْصِيهِ', lemma: 'عَصَى', pos: 'verb', features: 'conj+impf.3ms+3ms', gloss: 'and disobeys Him' },
          ],
        },
        {
          id: 'qs-v7-c03-012',
          ar: 'وَيَأْكُلُ رِزْقَ اللَّهِ وَيَكْفُرُ بِهِ.',
          en: 'ate Allah\'s provision and disbelieved in Him.',
          tokens: [
            { surface: 'وَيَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'and eats' },
            { surface: 'رِزْقَ', lemma: 'رِزْق', pos: 'noun', features: 'acc.constr', gloss: 'the provision of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَيَكْفُرُ', lemma: 'كَفَرَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'and disbelieves' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'in Him' },
          ],
        },
        {
          id: 'qs-v7-c03-013',
          ar: 'وَأَرَاهُ اللَّهُ آيَةً فِي بَيْتِهِ،',
          en: 'And Allah showed him a sign in his own house,',
          tokens: [
            { surface: 'وَأَرَاهُ', lemma: 'أَرَى', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to show; and showed him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'آيَةً', lemma: 'آيَة', pos: 'noun', features: 'indef.acc', gloss: 'a sign' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'بَيْتِهِ', lemma: 'بَيْت', pos: 'noun', features: 'gen+3ms', gloss: 'his house' },
          ],
        },
        {
          id: 'qs-v7-c03-014',
          ar: 'آيَةً فِي أَهْلِهِ.',
          en: 'a sign in his own family.',
          tokens: [
            { surface: 'آيَةً', lemma: 'آيَة', pos: 'noun', features: 'indef.acc', gloss: 'a sign' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أَهْلِهِ', lemma: 'أَهْل', pos: 'noun', features: 'gen+3ms', gloss: 'his family' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ فِرْعَوْنُ يَعْتَقِدُ عَنْ نَفْسِهِ؟',
          options: ['أَنَّهُ مَلِكُ الْعُقُولِ وَالْقُلُوبِ كَمَا هُوَ مَلِكُ الأَجْسَامِ وَالأَلْسِنَةِ', 'أَنَّهُ عَبْدٌ ضَعِيفٌ مِثْلُ سَائِرِ النَّاسِ', 'أَنَّهُ لَا يَمْلِكُ شَيْئاً'],
          answer: 0,
          qEn: 'What did Pharaoh believe about himself?',
          optionsEn: ['That he was king of minds and hearts just as he was king of bodies and tongues', 'That he was a weak servant like everyone else', 'That he owned nothing at all'],
        },
        {
          q: 'مَاذَا كَانَ يَحْدُثُ لِفِرْعَوْنَ إِذَا آمَنَ أَحَدٌ بِمُوسَى بِغَيْرِ إِذْنِهِ؟',
          options: ['كَانَ يَقُومُ وَيَقْعُدُ وَيَغْضَبُ غَضَباً شَدِيداً', 'كَانَ يَفْرَحُ وَيَشْكُرُ اللَّهَ', 'كَانَ لَا يُبَالِي بِذَلِكَ'],
          answer: 0,
          qEn: 'What happened to Pharaoh whenever someone believed in Mūsā without his permission?',
          optionsEn: ['He would pace about and fly into a furious rage', 'He would rejoice and thank Allah', 'He would not care at all'],
        },
      ],
    },
    {
      en: "Allah showed him: he thought himself king of minds as he was king of bodies, and that he held power over hearts as he held power over tongues -- yet Allah comes between a man and his family, and Allah comes between a person and his own heart. Faith entered Pharaoh's house while he did not perceive it and had no power over it at all. Pharaoh's wife believed in Allah and disbelieved in Pharaoh; she believed in Mūsā despite being the wife of the king of Egypt. She believed in Mūsā -- she who knew Pharaoh better than any of God's creatures, and was dearest to him of all people. Pharaoh's police did nothing and did not notice, for all their keen senses. Even Pharaoh himself, closest of all people to her, did not notice. And had Pharaoh known, what could he have done? He rules over the body, but he does not rule over the mind.",
      sentences: [
        {
          id: 'qs-v7-c03-015',
          ar: 'أَرَاهُ اللَّهُ أَنَّهُ مَلِكُ الْعُقُولِ كَمَا أَنَّهُ مَلِكُ الأَجْسَامِ.',
          en: 'Allah showed him: he thought himself king of minds as he was king of bodies.',
          tokens: [
            { surface: 'أَرَاهُ', lemma: 'أَرَى', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to show; showed him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'مَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'nom.constr', gloss: 'king of' },
            { surface: 'الْعُقُولِ', lemma: 'عَقْل', pos: 'noun', features: 'pl.def.gen', gloss: 'the minds' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'مَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'nom.constr', gloss: 'king of' },
            { surface: 'الأَجْسَامِ', lemma: 'جِسْم', pos: 'noun', features: 'pl.def.gen', gloss: 'the bodies' },
          ],
        },
        {
          id: 'qs-v7-c03-016',
          ar: 'وَأَنَّ لَهُ سُلْطَاناً عَلَى الْقُلُوبِ كَمَا أَنَّ لَهُ سُلْطَاناً عَلَى الأَلْسِنَةِ.',
          en: 'and that he held power over hearts as he held power over tongues.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'he had' },
            { surface: 'سُلْطَاناً', lemma: 'سُلْطَان', pos: 'noun', features: 'indef.acc', gloss: 'power' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'الْقُلُوبِ', lemma: 'قَلْب', pos: 'noun', features: 'pl.def.gen', gloss: 'the hearts' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'as' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'he had' },
            { surface: 'سُلْطَاناً', lemma: 'سُلْطَان', pos: 'noun', features: 'indef.acc', gloss: 'power' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'الأَلْسِنَةِ', lemma: 'لِسَان', pos: 'noun', features: 'pl.def.gen', gloss: 'the tongues' },
          ],
        },
        {
          id: 'qs-v7-c03-017',
          ar: 'وَأَنَّ اللَّهَ يَحُولُ بَيْنَ الرَّجُلِ وَأَهْلِهِ،',
          en: 'Yet Allah comes between a man and his family,',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'yet that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'يَحُولُ', lemma: 'حَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to intervene, come between' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'الرَّجُلِ', lemma: 'رَجُل', pos: 'noun', features: 'def.gen', gloss: 'the man' },
            { surface: 'وَأَهْلِهِ', lemma: 'أَهْل', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his family' },
          ],
        },
        {
          id: 'qs-v7-c03-018',
          ar: 'وَأَنَّ اللَّهَ يَحُولُ بَيْنَ الْمَرْءِ وَقَلْبِهِ.',
          en: 'and Allah comes between a person and his own heart.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'يَحُولُ', lemma: 'حَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to intervene, come between' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'الْمَرْءِ', lemma: 'مَرْء', pos: 'noun', features: 'def.gen', gloss: 'the person' },
            { surface: 'وَقَلْبِهِ', lemma: 'قَلْب', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his heart' },
          ],
        },
        {
          id: 'qs-v7-c03-019',
          ar: 'دَخَلَ الإيمَانُ فِي بَيْتِ فِرْعَوْنَ وَهُوَ لا يَشْعُرُ،',
          en: "Faith entered Pharaoh's house while he did not perceive it,",
          tokens: [
            { surface: 'دَخَلَ', lemma: 'دَخَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to enter; entered' },
            { surface: 'الإيمَانُ', lemma: 'إِيمَان', pos: 'noun', features: 'def.nom', gloss: 'faith' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'بَيْتِ', lemma: 'بَيْت', pos: 'noun', features: 'constr.gen', gloss: 'the house of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'while he' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَشْعُرُ', lemma: 'شَعَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to perceive' },
          ],
        },
        {
          id: 'qs-v7-c03-020',
          ar: 'وَلا يَمْلِكُ شَيْئاً.',
          en: 'and had no power over it at all.',
          tokens: [
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَمْلِكُ', lemma: 'مَلَكَ', pos: 'verb', features: 'impf.3ms', gloss: 'to own, have power over' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v7-c03-021',
          ar: 'وَآمَنَتِ امْرَأَةُ فِرْعَوْنَ بِاللَّهِ وَكَفَرَتْ بِفِرْعَوْنَ.',
          en: "Pharaoh's wife believed in Allah and disbelieved in Pharaoh.",
          tokens: [
            { surface: 'وَآمَنَتِ', lemma: 'آمَنَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and believed' },
            { surface: 'امْرَأَةُ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'nom.constr', gloss: 'the wife of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
            { surface: 'وَكَفَرَتْ', lemma: 'كَفَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and disbelieved' },
            { surface: 'بِفِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'prep+gen', gloss: 'in Pharaoh' },
          ],
        },
        {
          id: 'qs-v7-c03-022',
          ar: 'وَآمَنَتْ بِمُوسَى عَلَى رَغْمِ زَوْجِهَا مَلِكِ مِصْرَ.',
          en: 'She believed in Mūsā despite being the wife of the king of Egypt.',
          tokens: [
            { surface: 'وَآمَنَتْ', lemma: 'آمَنَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and believed' },
            { surface: 'بِمُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'prep+gen', gloss: 'in Mūsā' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'despite' },
            { surface: 'رَغْمِ', lemma: 'رَغْم', pos: 'noun', features: 'constr.gen', gloss: 'the spite of (idiom: despite)' },
            { surface: 'زَوْجِهَا', lemma: 'زَوْج', pos: 'noun', features: 'gen+3fs', gloss: 'her husband' },
            { surface: 'مَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'gen', gloss: 'king of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v7-c03-023',
          ar: 'آمَنَتْ بِمُوسَى أَعْلَمُ خَلْقِ اللَّهِ بِفِرْعَوْنَ وَأَحَبُّ النَّاسِ إِلَيْهِ.',
          en: 'She believed in Mūsā -- she who knew Pharaoh better than any of God\'s creatures, and was dearest to him of all people.',
          tokens: [
            { surface: 'آمَنَتْ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3fs', gloss: 'believed' },
            { surface: 'بِمُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'prep+gen', gloss: 'in Mūsā' },
            { surface: 'أَعْلَمُ', lemma: 'أَعْلَم', pos: 'adj', features: 'nom.constr', root: 'ع ل م', gloss: 'the most knowledgeable of' },
            { surface: 'خَلْقِ', lemma: 'خَلْق', pos: 'noun', features: 'constr.gen', gloss: 'the creation of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'بِفِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'prep+gen', gloss: 'about Pharaoh' },
            { surface: 'وَأَحَبُّ', lemma: 'أَحَبّ', pos: 'adj', features: 'conj+nom.constr', gloss: 'and the dearest of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v7-c03-024',
          ar: 'وَلَمْ يَصْنَعْ شُرْطَةُ فِرْعَوْنَ شَيْئاً،',
          en: "Pharaoh's police did nothing,",
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَصْنَعْ', lemma: 'صَنَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to do, make' },
            { surface: 'شُرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'nom.constr', root: 'ش ر ط', gloss: 'the police of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v7-c03-025',
          ar: 'وَلَمْ يَشْعُرُوا بِذَلِكَ وَلَهُمْ شَامَّةُ النَّمْلِ وَعُيُونُ الْغُرَابِ.',
          en: 'and did not notice, for all their keen senses.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَشْعُرُوا', lemma: 'شَعَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to perceive' },
            { surface: 'بِذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'prep+dem.m', gloss: 'of that' },
            { surface: 'وَلَهُمْ', lemma: 'لِ', pos: 'prep', features: 'conj+prep+3mp', gloss: 'though they had' },
            { surface: 'شَامَّةُ', lemma: 'شَامَّة', pos: 'noun', features: 'nom.constr', root: 'ش م م', gloss: 'the keen smell of' },
            { surface: 'النَّمْلِ', lemma: 'نَمْل', pos: 'noun', features: 'def.gen', root: 'ن م ل', gloss: 'the ant' },
            { surface: 'وَعُيُونُ', lemma: 'عَيْن', pos: 'noun', features: 'conj+pl.nom.constr', gloss: 'and the eyes of' },
            { surface: 'الْغُرَابِ', lemma: 'غُرَاب', pos: 'noun', features: 'def.gen', gloss: 'the crow' },
          ],
        },
        {
          id: 'qs-v7-c03-026',
          ar: 'وَلَمْ يَشْعُرْ بِذَلِكَ فِرْعَوْنُ وَهُوَ أَقْرَبُ النَّاسِ إِلَيْهَا.',
          en: 'Even Pharaoh himself, closest of all people to her, did not notice.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَشْعُرْ', lemma: 'شَعَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to perceive' },
            { surface: 'بِذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'prep+dem.m', gloss: 'of that' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'though he was' },
            { surface: 'أَقْرَبُ', lemma: 'أَقْرَب', pos: 'adj', features: 'nom.constr', root: 'ق ر ب', gloss: 'the nearest of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'إِلَيْهَا', lemma: 'إِلَى', pos: 'prep', features: 'prep+3fs', gloss: 'to her' },
          ],
        },
        {
          id: 'qs-v7-c03-027',
          ar: 'وَلَوْ عَلِمَ بِذَلِكَ فِرْعَوْنُ مَاذَا فَعَلَ؟',
          en: 'And had Pharaoh known, what could he have done?',
          tokens: [
            { surface: 'وَلَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj+conj', gloss: 'and if' },
            { surface: 'عَلِمَ', lemma: 'عَلِمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to know; knew' },
            { surface: 'بِذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'prep+dem.m', gloss: 'of that' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'part', features: 'part', gloss: 'what' },
            { surface: 'فَعَلَ', lemma: 'فَعَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to do; would he have done' },
          ],
        },
        {
          id: 'qs-v7-c03-028',
          ar: 'إِنَّهُ يَمْلِكُ الْجِسْمَ وَلَكِنَّهُ لا يَمْلِكُ الْعَقْلَ.',
          en: 'He rules over the body, but he does not rule over the mind.',
          tokens: [
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'يَمْلِكُ', lemma: 'مَلَكَ', pos: 'verb', features: 'impf.3ms', gloss: 'to rule over' },
            { surface: 'الْجِسْمَ', lemma: 'جِسْم', pos: 'noun', features: 'def.acc', gloss: 'the body' },
            { surface: 'وَلَكِنَّهُ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'but he' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَمْلِكُ', lemma: 'مَلَكَ', pos: 'verb', features: 'impf.3ms', gloss: 'to rule over' },
            { surface: 'الْعَقْلَ', lemma: 'عَقْل', pos: 'noun', features: 'def.acc', gloss: 'the mind' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ آمَنَتْ بِاللَّهِ فِي بَيْتِ فِرْعَوْنَ وَهُوَ لَا يَشْعُرُ؟',
          options: ['امْرَأَةُ فِرْعَوْنَ', 'أُخْتُ مُوسَى', 'إِحْدَى خَادِمَاتِ الْقَصْرِ'],
          answer: 0,
          qEn: "Who believed in Allah inside Pharaoh's own house without him perceiving it?",
          optionsEn: ["Pharaoh's wife", "Mūsā's sister", 'One of the palace maids'],
        },
        {
          q: 'لِمَاذَا لَمْ يَشْعُرْ فِرْعَوْنُ وَلَا شُرْطَتُهُ بِإِيمَانِ امْرَأَتِهِ؟',
          options: ['لِأَنَّ اللَّهَ يَحُولُ بَيْنَ الْمَرْءِ وَقَلْبِهِ وَبَيْنَ الرَّجُلِ وَأَهْلِهِ', 'لِأَنَّهَا كَانَتْ بَعِيدَةً عَنْهُمْ', 'لِأَنَّهُمْ كَانُوا نَائِمِينَ دَائِماً'],
          answer: 0,
          qEn: "Why did neither Pharaoh nor his police notice his wife's faith?",
          optionsEn: ["Because Allah comes between a person and his heart, and between a man and his own family", 'Because she was far away from them', 'Because they were always asleep'],
        },
      ],
    },
    {
      en: "He had power over the tongue, but he had no power over the heart. A wife must obey her husband, but no creature is to be obeyed in disobedience to the Creator. A child must obey his parents and be dutiful and upright toward them, but he need not obey them into idolatry. [Qur'an: 'But if the two of them strive to make you associate with Me what you have no knowledge of, do not obey them; yet keep their company in this world with kindness, and follow the way of those who turn to Me. Then to Me is your return, and I will inform you of what you used to do.']",
      sentences: [
        {
          id: 'qs-v7-c03-029',
          ar: 'وَإِنَّ لَهُ سُلْطَاناً عَلَى اللِّسَانِ وَلَيْسَ لَهُ عَلَى الْقَلْبِ سُلْطَانٌ.',
          en: 'He had power over the tongue, but he had no power over the heart.',
          tokens: [
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'indeed' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'he had' },
            { surface: 'سُلْطَاناً', lemma: 'سُلْطَان', pos: 'noun', features: 'indef.acc', gloss: 'power' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'اللِّسَانِ', lemma: 'لِسَان', pos: 'noun', features: 'def.gen', gloss: 'the tongue' },
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'but he did not have' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'he' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'الْقَلْبِ', lemma: 'قَلْب', pos: 'noun', features: 'def.gen', gloss: 'the heart' },
            { surface: 'سُلْطَانٌ', lemma: 'سُلْطَان', pos: 'noun', features: 'indef.nom', gloss: 'power' },
          ],
        },
        {
          id: 'qs-v7-c03-030',
          ar: 'عَلَى الْمَرْأَةِ أَنْ تُطِيعَ زَوْجَهَا وَلَكِنْ لا طَاعَةَ لِمَخْلُوقٍ فِي مَعْصِيَةِ الْخَالِقِ.',
          en: 'A wife must obey her husband, but no creature is to be obeyed in disobedience to the Creator.',
          tokens: [
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon, incumbent on' },
            { surface: 'الْمَرْأَةِ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'def.gen', gloss: 'the wife' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'تُطِيعَ', lemma: 'أَطَاعَ', pos: 'verb', features: 'impf.3fs', gloss: 'to obey' },
            { surface: 'زَوْجَهَا', lemma: 'زَوْج', pos: 'noun', features: 'acc+3fs', gloss: 'her husband' },
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'طَاعَةَ', lemma: 'طَاعَة', pos: 'noun', features: 'indef.acc', gloss: 'obedience [is due]' },
            { surface: 'لِمَخْلُوقٍ', lemma: 'مَخْلُوق', pos: 'noun', features: 'prep+indef.gen', root: 'خ ل ق', gloss: 'to a created being' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مَعْصِيَةِ', lemma: 'مَعْصِيَة', pos: 'noun', features: 'constr.gen', root: 'ع ص ي', gloss: 'disobedience to' },
            { surface: 'الْخَالِقِ', lemma: 'خَالِق', pos: 'noun', features: 'def.gen', root: 'خ ل ق', gloss: 'the Creator' },
          ],
        },
        {
          id: 'qs-v7-c03-031',
          ar: 'عَلَى الْوَلَدِ أَنْ يُطِيعَ أَبَوَيْهِ وَأَنْ يَكُونَ بِهِمَا بَارّاً رَشِيداً وَلَكِنْ لَيْسَ لَهُ أَنْ يُطِيعَهُمَا فِي الشِّرْكِ.',
          en: 'A child must obey his parents and be dutiful and upright toward them, but he need not obey them into idolatry.',
          tokens: [
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon, incumbent on' },
            { surface: 'الْوَلَدِ', lemma: 'وَلَد', pos: 'noun', features: 'def.gen', gloss: 'the child' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُطِيعَ', lemma: 'أَطَاعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to obey' },
            { surface: 'أَبَوَيْهِ', lemma: 'أَب', pos: 'noun', features: 'du.acc+3ms', gloss: 'his two parents' },
            { surface: 'وَأَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj+conj', gloss: 'and to' },
            { surface: 'يَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be' },
            { surface: 'بِهِمَا', lemma: 'بِ', pos: 'prep', features: 'prep+3d', gloss: 'to them both' },
            { surface: 'بَارّاً', lemma: 'بَارّ', pos: 'adj', features: 'indef.acc', root: 'ب ر ر', gloss: 'dutiful' },
            { surface: 'رَشِيداً', lemma: 'رَشِيد', pos: 'adj', features: 'indef.acc', gloss: 'upright' },
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'it is not [required]' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُطِيعَهُمَا', lemma: 'أَطَاعَ', pos: 'verb', features: 'impf.3ms+3d', gloss: 'obey them both' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الشِّرْكِ', lemma: 'شِرْك', pos: 'noun', features: 'def.gen', gloss: 'idolatry' },
          ],
        },
        {
          id: 'qs-v7-c03-032',
          ar: '﴿وَإِن جَٰهَدَاكَ عَلَىٰٓ أَن تُشْرِكَ بِى مَا لَيْسَ لَكَ بِهِۦ عِلْمٌ فَلَا تُطِعْهُمَا وَصَاحِبْهُمَا فِى ٱلدُّنْيَا مَعْرُوفًا وَٱتَّبِعْ سَبِيلَ مَنْ أَنَابَ إِلَىَّ ثُمَّ إِلَىَّ مَرْجِعُكُمْ فَأُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ﴾.',
          en: '"But if the two of them strive to make you associate with Me what you have no knowledge of, do not obey them; yet keep their company in this world with kindness, and follow the way of those who turn to Me. Then to Me is your return, and I will inform you of what you used to do."',
          tokens: [
            { surface: 'وَإِن', lemma: 'إِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but if' },
            { surface: 'جَٰهَدَاكَ', lemma: 'جَاهَدَ', pos: 'verb', features: 'perf.3d+2ms', root: 'ج ه د', gloss: 'to strive against; the two of them strove against you' },
            { surface: 'عَلَىٰٓ', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'تُشْرِكَ', lemma: 'أَشْرَكَ', pos: 'verb', features: 'impf.2ms', gloss: 'to associate partners; you associate' },
            { surface: 'بِى', lemma: 'بِ', pos: 'prep', features: 'prep+1s', gloss: 'with Me' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'لَكَ', lemma: 'لِ', pos: 'prep', features: 'prep+2ms', gloss: 'for you' },
            { surface: 'بِهِۦ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'of it' },
            { surface: 'عِلْمٌ', lemma: 'عِلْم', pos: 'noun', features: 'indef.nom', gloss: 'knowledge' },
            { surface: 'فَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'then do not' },
            { surface: 'تُطِعْهُمَا', lemma: 'أَطَاعَ', pos: 'verb', features: 'impf.2ms+3d', gloss: 'obey them both' },
            { surface: 'وَصَاحِبْهُمَا', lemma: 'صَاحَبَ', pos: 'verb', features: 'conj+imp.2ms+3d', root: 'ص ح ب', gloss: 'to accompany; yet keep company with them both' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ٱلدُّنْيَا', lemma: 'دُنْيَا', pos: 'noun', features: 'def.gen', gloss: 'this world' },
            { surface: 'مَعْرُوفًا', lemma: 'مَعْرُوف', pos: 'adj', features: 'indef.acc', root: 'ع ر ف', gloss: 'with kindness' },
            { surface: 'وَٱتَّبِعْ', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'conj+imp.2ms', gloss: 'and follow' },
            { surface: 'سَبِيلَ', lemma: 'سَبِيل', pos: 'noun', features: 'acc.constr', gloss: 'the way of' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'those who' },
            { surface: 'أَنَابَ', lemma: 'أَنَابَ', pos: 'verb', features: 'perf.3ms', root: 'ن و ب', gloss: 'to turn in repentance' },
            { surface: 'إِلَىَّ', lemma: 'إِلَى', pos: 'prep', features: 'prep+1s', gloss: 'to Me' },
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'إِلَىَّ', lemma: 'إِلَى', pos: 'prep', features: 'prep+1s', gloss: 'to Me' },
            { surface: 'مَرْجِعُكُمْ', lemma: 'مَرْجِع', pos: 'noun', features: 'nom+2mp', root: 'ر ج ع', gloss: 'your return' },
            { surface: 'فَأُنَبِّئُكُم', lemma: 'نَبَّأَ', pos: 'verb', features: 'conj+impf.1s+2mp', root: 'ن ب أ', gloss: 'to inform; then I will inform you' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of what' },
            { surface: 'كُنتُمْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2mp', gloss: 'you used to' },
            { surface: 'تَعْمَلُونَ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.2mp', gloss: 'to do' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَتَى لَا تَجِبُ طَاعَةُ الزَّوْجِ أَوِ الْوَالِدَيْنِ؟',
          options: ['فِي مَعْصِيَةِ الْخَالِقِ وَالشِّرْكِ بِهِ', 'فِي كُلِّ الأَحْوَالِ يَجِبُ أَنْ تَكُونَ الطَّاعَةُ', 'لَا تَجِبُ الطَّاعَةُ أَبَداً'],
          answer: 0,
          qEn: "When is obedience to a husband or one's parents not required?",
          optionsEn: ['When it means disobeying the Creator or associating partners with Him', 'Obedience is always required in every case', 'Obedience is never required at all'],
        },
        {
          q: 'مَاذَا يَجِبُ عَلَى الْوَلَدِ نَحْوَ وَالِدَيْهِ؟',
          options: ['أَنْ يُطِيعَهُمَا وَيَكُونَ بِهِمَا بَارّاً رَشِيداً', 'أَنْ يَتْرُكَهُمَا إِذَا كَبِرَ', 'أَنْ يُطِيعَهُمَا فِي كُلِّ شَيْءٍ وَلَوْ فِي الشِّرْكِ'],
          answer: 0,
          qEn: 'What must a child do toward his parents?',
          optionsEn: ['Obey them and be dutiful and upright toward them', 'Leave them once he grows up', 'Obey them in everything, even in idolatry'],
        },
      ],
    },
    {
      en: "Pharaoh's wife remained steadfast in faith, worshiping Allah in the very house of Allah's enemy. She feared Allah and disavowed before Him what Pharaoh did. Allah was pleased with Pharaoh's wife and saved her from Pharaoh and his deeds, and made her an example for the believers for her faith and her courage. [Qur'an: 'And Allah sets forth an example for those who believe: the wife of Pharaoh, when she said, \"My Lord, build for me a house near You in Paradise, and save me from Pharaoh and his deeds, and save me from the wrongdoing people.\"']",
      sentences: [
        {
          id: 'qs-v7-c03-033',
          ar: 'واستقامت امْرَأَةُ فِرْعَوْنَ عَلَى الإيمَانِ،',
          en: "Pharaoh's wife remained steadfast in faith,",
          tokens: [
            { surface: 'واستقامت', lemma: 'اِسْتَقَامَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to remain steadfast, be upright' },
            { surface: 'امْرَأَةُ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'nom.constr', gloss: 'the wife of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in, upon' },
            { surface: 'الإيمَانِ', lemma: 'إِيمَان', pos: 'noun', features: 'def.gen', gloss: 'faith' },
          ],
        },
        {
          id: 'qs-v7-c03-034',
          ar: 'وَكَانَتْ تَعْبُدُ اللَّهَ فِي بَيْتِ عَدُوِّ اللَّه.',
          en: "worshiping Allah in the very house of Allah's enemy.",
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and she was' },
            { surface: 'تَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3fs', gloss: 'worshiping' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'بَيْتِ', lemma: 'بَيْت', pos: 'noun', features: 'constr.gen', gloss: 'the house of' },
            { surface: 'عَدُوِّ', lemma: 'عَدُوّ', pos: 'noun', features: 'constr.gen', gloss: 'the enemy of' },
            { surface: 'اللَّه', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c03-035',
          ar: 'وَكَانَتْ تَخَافُ اللَّهَ وَتَتَبَرَّأُ إِلَى اللَّهِ مِمَّا يَعْمَلُ فِرْعَوْنُ.',
          en: 'She feared Allah and disavowed before Him what Pharaoh did.',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and she was' },
            { surface: 'تَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3fs', gloss: 'fearing' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَتَتَبَرَّأُ', lemma: 'تَبَرَّأَ', pos: 'verb', features: 'conj+impf.3fs', root: 'ب ر أ', gloss: 'to disavow, dissociate oneself; and disavowing' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'before' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'مِمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of what' },
            { surface: 'يَعْمَلُ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.3ms', gloss: 'did' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
          ],
        },
        {
          id: 'qs-v7-c03-036',
          ar: 'وَرَضِيَ اللَّهُ عَنِ امْرَأَةِ فِرْعَوْنَ وَأَنْجَاهَا اللَّهُ مِنْ فِرْعَوْنَ وَعَمَلِهِ وَضَرَبَهَا اللَّهُ مَثَلاً لِلْمُؤْمِنِينَ لإيمَانِهَا وَشَجَاعَتِهَا.',
          en: "Allah was pleased with Pharaoh's wife and saved her from Pharaoh and his deeds, and made her an example for the believers for her faith and her courage.",
          tokens: [
            { surface: 'وَرَضِيَ', lemma: 'رَضِيَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be pleased; and was pleased' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'امْرَأَةِ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'constr.gen', gloss: 'the wife of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَأَنْجَاهَا', lemma: 'أَنْجَى', pos: 'verb', features: 'conj+perf.3ms+3fs', gloss: 'to save; and saved her' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَعَمَلِهِ', lemma: 'عَمَل', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his deeds' },
            { surface: 'وَضَرَبَهَا', lemma: 'ضَرَبَ', pos: 'verb', features: 'conj+perf.3ms+3fs', gloss: 'to give (an example); and made her' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مَثَلاً', lemma: 'مَثَل', pos: 'noun', features: 'indef.acc', root: 'م ث ل', gloss: 'an example' },
            { surface: 'لِلْمُؤْمِنِينَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'for the believers' },
            { surface: 'لإيمَانِهَا', lemma: 'إِيمَان', pos: 'noun', features: 'prep+gen+3fs', gloss: 'for her faith' },
            { surface: 'وَشَجَاعَتِهَا', lemma: 'شَجَاعَة', pos: 'noun', features: 'conj+gen+3fs', gloss: 'and her courage' },
          ],
        },
        {
          id: 'qs-v7-c03-037',
          ar: '﴿وَضَرَبَ ٱللَّهُ مَثَلًا لِّلَّذِينَ ءَامَنُوا۟ ٱمْرَأَتَ فِرْعَوْنَ إِذْ قَالَتْ رَبِّ ٱبْنِ لِى عِندَكَ بَيْتًا فِى ٱلْجَنَّةِ وَنَجِّنِى مِن فِرْعَوْنَ وَعَمَلِهِۦ وَنَجِّنِى مِنَ ٱلْقَوْمِ ٱلظَّٰلِمِينَ﴾.',
          en: '"And Allah sets forth an example for those who believe: the wife of Pharaoh, when she said, \'My Lord, build for me a house near You in Paradise, and save me from Pharaoh and his deeds, and save me from the wrongdoing people.\'"',
          tokens: [
            { surface: 'وَضَرَبَ', lemma: 'ضَرَبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and set forth' },
            { surface: 'ٱللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مَثَلًا', lemma: 'مَثَل', pos: 'noun', features: 'indef.acc', gloss: 'an example' },
            { surface: 'لِّلَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'prep+rel.pl', gloss: 'for those who' },
            { surface: 'ءَامَنُوا۟', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3mp', gloss: 'believed' },
            { surface: 'ٱمْرَأَتَ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'acc.constr', gloss: 'the wife of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'قَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fs', gloss: 'she said' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'gen+1s', gloss: 'my Lord' },
            { surface: 'ٱبْنِ', lemma: 'بَنَى', pos: 'verb', features: 'imp.2ms', gloss: 'to build; build!' },
            { surface: 'لِى', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'for me' },
            { surface: 'عِندَكَ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep+2ms', gloss: 'with You' },
            { surface: 'بَيْتًا', lemma: 'بَيْت', pos: 'noun', features: 'indef.acc', gloss: 'a house' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ٱلْجَنَّةِ', lemma: 'جَنَّة', pos: 'noun', features: 'def.gen', gloss: 'Paradise' },
            { surface: 'وَنَجِّنِى', lemma: 'نَجَّى', pos: 'verb', features: 'conj+imp.2ms+1s', root: 'ن ج و', gloss: 'to save; and save me' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَعَمَلِهِۦ', lemma: 'عَمَل', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his deeds' },
            { surface: 'وَنَجِّنِى', lemma: 'نَجَّى', pos: 'verb', features: 'conj+imp.2ms+1s', gloss: 'and save me' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'ٱلْقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'ٱلظَّٰلِمِينَ', lemma: 'ظَالِم', pos: 'noun', features: 'pl.def.gen', gloss: 'the wrongdoing' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ اللَّهُ بِامْرَأَةِ فِرْعَوْنَ لِإِيمَانِهَا وَشَجَاعَتِهَا؟',
          options: ['رَضِيَ عَنْهَا وَأَنْجَاهَا وَضَرَبَهَا مَثَلاً لِلْمُؤْمِنِينَ', 'عَاقَبَهَا مَعَ فِرْعَوْنَ', 'نَسِيَهَا وَلَمْ يَذْكُرْهَا'],
          answer: 0,
          qEn: "What did Allah do for Pharaoh's wife because of her faith and courage?",
          optionsEn: ['He was pleased with her, saved her, and made her an example for believers', 'He punished her along with Pharaoh', 'He forgot her and never mentioned her'],
        },
        {
          q: 'بِمَاذَا دَعَتِ امْرَأَةُ فِرْعَوْنَ رَبَّهَا؟',
          options: ['أَنْ يَبْنِيَ لَهَا بَيْتاً عِنْدَهُ فِي الْجَنَّةِ وَيُنَجِّيَهَا مِنْ فِرْعَوْنَ', 'أَنْ يَرُدَّ فِرْعَوْنَ إِلَى الإِيمَانِ', 'أَنْ يُعْطِيَهَا مُلْكَ مِصْرَ'],
          answer: 0,
          qEn: "What did Pharaoh's wife pray to her Lord for?",
          optionsEn: ['That He build her a house with Him in Paradise and save her from Pharaoh', 'That He bring Pharaoh back to faith', 'That He give her the kingdom of Egypt'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَأَنَّ لَهُ',
        post: 'عَلَى الْقُلُوبِ.',
        en: 'and that he held power over hearts.',
        options: ['سُلْطَاناً', 'سُلْطَانٌ', 'سُلْطَانٍ', 'سُلْطَانَهُ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- predicate of أَنَّ.',
          'Nominative -- wrong case; the predicate of أَنَّ is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'With a possessive suffix -- wrong; no pronoun is called for here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَمْ',
        post: 'بِذَلِكَ فِرْعَوْنُ وَهُوَ أَقْرَبُ النَّاسِ إِلَيْهَا.',
        en: 'Pharaoh did not perceive it, though he was the closest person to her.',
        options: ['يَشْعُرْ', 'يَشْعُرُ', 'شَعَرَ', 'يَشْعُرُونَ'],
        answer: 0,
        rationales: [
          'Jussive after لَمْ -- matches the taught pattern.',
          'Plain indicative -- wrong; لَمْ requires the jussive.',
          'Perfect -- wrong; لَمْ negates the imperfect (jussive), not the perfect.',
          'Plural -- wrong number; the subject فِرْعَوْنُ is singular.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنَّهُ يَمْلِكُ الْجِسْمَ وَلَكِنَّهُ لا',
        post: 'الْعَقْلَ.',
        en: 'He rules over the body but he does not rule over the mind.',
        options: ['يَمْلِكُ', 'مَلَكَ', 'يَمْلِكُونَ', 'اِمْلِكْ'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect -- matches the taught pattern.',
          'Perfect -- wrong tense; the parallel clause needs the imperfect.',
          'Plural -- wrong number; the subject هُوَ (فِرْعَوْن) is singular.',
          'Imperative -- wrong mood entirely for a negated statement.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَشْعُرُ فِرْعَوْنُ بِذَلِكَ',
        pre: '',
        post: 'بِذَلِكَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَشْعُرُ', 'يَشْعُرُ', 'تَشْعُرُ', 'نَشْعُرُ'],
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
        base: 'يَشْعُرُ فِرْعَوْنُ بِذَلِكَ',
        pre: '',
        post: 'بِذَلِكَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَشْعُرُ', 'يَشْعُرُ', 'أَشْعُرُ', 'نَشْعُرُ'],
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
        base: 'يَشْعُرُ فِرْعَوْنُ بِذَلِكَ',
        pre: '',
        post: 'بِذَلِكَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَشْعُرُونَ', 'يَشْعُرُ', 'تَشْعُرُ', 'نَشْعُرُ'],
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

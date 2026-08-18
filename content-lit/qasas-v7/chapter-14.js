// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 14 -- ١٤ - التَّوْرَاةُ ("The Torah"). Starts at the
// chapter-14 heading box partway down page 194 (right after chapter 13's
// "الشَّرِيعَةُ" closes on the trees-of-the-wilderness image), continues
// through pages 195-196-197, up to (not including) the chapter-15 heading
// box partway down page 197. Transcribed by hand from the scan (vision
// OCR) against ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md, from the
// supplied transcript C:\...\scratchpad\transcript-187-199.txt (page 194's
// "CHAPTER HEADING: ١٤" through the "CHAPTER HEADING: ١٥" marker on page
// 197). No corrections needed against the transcript; nothing looked
// grammatically off.
//
// Register: the Qur'anic Sinai/Torah-revelation narrative -- a dense
// cluster of Qur'anic quotations (mostly al-A'rāf 7:142-144/155, with
// Ṭā-Hā 20:83-84, al-An'ām 6:103, al-Ḥashr 59:21, and al-Baqarah 2:55
// woven in) framing Nadwī's own connective prose. Every quotation is
// transcribed in full and tokenized normally, per current instruction,
// without artificial fragmentation to dodge the build stage's 3-9 token
// window -- most run 8-20+ tokens and are automatically safe; none is used
// as `workshop` material (see below). Verse references are given in each
// sentence's code comment where reasonably identifiable; none is asserted
// with more certainty than the wording supports.
//
// POST-WRITE CORRECTION: after drafting this chapter, other qasas-v7
// chapters completed by parallel agents became visible on disk. Checking
// their newWords against this chapter's draft list surfaced one word this
// chapter had independently tagged new that an EARLIER chapter already
// introduces: أَدْرَكَ (chapter 8, glossed there "to overtake, catch up
// with, reach" -- a motion sense; this chapter's own use, "لَا تُدْرِكُهُ
// الْأَبْصَارُ", is the extended perception sense "to perceive, grasp". Same
// Form IV verb, same root د ر ك, ordinary polysemy rather than a
// homograph in the بَالَغَ/بَالِغ sense, so it is NOT re-taught here --
// removed from newWords/lemmas; the token's own inline gloss covers the
// contextual sense regardless.) Separately (not a correction to this
// chapter, just flagged for whoever reconciles the later one): this
// chapter's own طُور and خَرَّ are independently re-tagged new by chapter
// 15, which comes after this chapter and should have deferred to it.
//
// `workshop.cloze`/`workshop.shift` are built only from Nadwī's own
// recurring narrator frame -- "أَمَرَ اللَّهُ مُوسَى أَنْ..." /
// "وَأَمَرَهُ اللَّهُ أَنْ..." (qs-v7-c14-003, 011, 024) -- never from a
// Qur'anic quotation.
//
// Judgment calls / things flagged for a second pair of eyes:
//   -- هَارُون (qs-v7-c14-014, inside the Qur'anic "وَقَالَ مُوسَىٰ لِأَخِيهِ
//      هَـٰرُونَ") is tagged new here per the task brief's explicit
//      instruction: it is Hārūn's first appearance anywhere in this
//      volume (checked against qasas-v7 ch1-2 and the supplied
//      lexicon.txt export -- absent from both).
//   -- عَجِلَ (root ع ج ل, "to hasten") already covers, per its own taught
//      gloss "to hasten (someone)" (qiraah-v1 ch25, qiraah-v2 ch35 -- the
//      latter's own worked example is Form IV أَعْجَلَهُمُ, "hastened
//      them"), both Form I and the causative Form IV. This chapter extends
//      that one lemma by analogy to a THIRD derived form, reflexive Form V
//      تَعَجَّلَ (qs-v7-c14-008, "he hastened himself/hurried") -- flagging
//      the extension explicitly rather than asserting it silently, since
//      the documented precedent only covers I and IV.
//   -- طُور (qs-v7-c14-003, "the Mount [Sinai]") is tagged as its own new
//      noun lemma, kept distinct from the lexicon's existing "طور" entry
//      (qiraah-v2 ch33), which on inspection is the differently-vowelled
//      common noun طَوْر ("a stage, phase") -- a genuine homograph, not a
//      re-teaching of the same word. طُور is tagged pos:'noun' rather than
//      pos:'proper' since it recurs bare with the definite article later
//      in the narrative ("إِلَى الطُّورِ", qs-v7-c14-008) exactly like an
//      ordinary common noun, not only in construct with سِينَاء.
//   -- إِيَّا (qs-v7-c14-030, the independent object-pronoun stem in
//      "وَإِيَّـٰىَ") is tagged pos:'noun' with a bare person-only features
//      string ('conj+1s'), following qasas-v7 ch1/ch2's own precedent for
//      tagging bare independent pronouns (هِيَ, أَنَا, أَنْتُمْ) as
//      pos:'noun' rather than inventing a new pos.
//   -- بَصَر (qs-v7-c14-016, "sight, eyesight", inside "لَا تُدْرِكُهُ
//      الْأَبْصَارُ") is NOT tagged new -- it is already taught (qiraah-v2
//      ch33), distinct from the already-taught verb أَبْصَرَ (qasas-v1
//      ch11) and the adjective بَصِير (qasas-v2 ch23).
//   -- دَكّ (qs-v7-c14-020, "جَعَلَهُ دَكًّا", "leveled it to the ground") is
//      tagged as a standalone new noun lemma -- the second object of
//      جَعَلَ in a very compact idiom, glossed on its own rather than
//      folded into any other entry.
//   -- ثُمَّ, حَتَّى (as subordinator "until, so that"), سَوْفَ (future
//      particle), and كَمَا are treated as already-known bedrock function
//      words, consistent with qasas-v7 ch1's header precedent for
//      هَذَا/هَذِهِ/ذَلِكَ/جَاءَ -- common grammatical particles not
//      individually verified against the lexicon export line by line, but
//      of the same closed-class, high-frequency kind as those flagged
//      already. حَتَّى itself IS independently confirmed in the lexicon
//      (qiraah-v2 ch40, qasas-v2 ch19).
//
// Shared lexicon check (grepped against the supplied lexicon.txt export,
// plus qasas-v7 ch1/2/13's own headers for this volume's running list):
// أَرَادَ (qasas-v1 ch5)، اللَّه، أَنْ، لَا، ضَاعَ (qيraah-v2 ch37)، بَنُو/بَنِي
// إِسْرَائِيل (introduced qasas-v7 ch13, NOT re-listed here)، كَمَا، أُمَّة
// (qasas-v3 ch1)، غَيْر، كِتَاب (qasas-v7 ch2)، هُدًى (qasas-v1 ch8، reused
// for the noun هُدًى)، مِنْ، خَبَطَ/خَبْط/عَشْوَاء (introduced qasas-v7 ch13,
// reused here, NOT re-listed)، مُوسَى (qasas-v7 ch1)، تَطَهَّرَ->new، صَامَ
// ->new، ثَلاَثِين->new، يَوْم، أَتَى (qasas-v7 ch1)، طُور->new (see note
// above)، سِينَاء->new، حَتَّى (qيraah-v2 ch40، qasas-v2 ch19)، كَلَّمَ
// (qasas-v2 ch18)، رَبّ، يَتَلَقَّى->تَلَقَّى (qasas-v7 ch13)، كَانَ، إِمَام
// (qيraah-v1 ch31، qيraah-v2 ch40)، اِخْتَارَ (qasas-v3 ch11)، قَوْم، سَبْعِين
// (qيraah-v2 ch56)، رَجُل، شَاهِد (qيraah-v2 ch64)، جُحْد->new، قَالَ، أَخ
// (qيraah-v1 ch26)، هَارُون->new (see note above)، خَلَفَ->new، فِي،
// أَصْلَحَ (qيraah-v1 ch28، qيraah-v2 ch57)، اِتَّبَعَ (qasas-v2 ch11)،
// سَبِيل، مُفْسِد->new، جَمَاعَة (qيraah-v2 ch72، qasas-v2 ch7)، بُدّ
// (qيraah-v1 ch29، qيraah-v2 ch49، qasas-v3 ch2)، سَارَ (qيraah-v1
// ch26/ch35، qasas-v2 ch24)، مِيقَات->new، لَكِنَّ، حَثَّ (qيraah-v2 ch52)،
// شَوْق (qيraah-v2 ch39)، عَجِلَ (qيraah-v1 ch25، qيraah-v2 ch35 -- see note
// above)، سَبَقَ (qasas-v3 ch15)، عَنْ، أَثَر->new، إِلَيْكَ->إِلَى، رَضِيَ
// (qيraah-v2 ch38/ch39، qasas-v2 ch15)، أَتَمَّ->new، أَرْبَعِين (qيraah-v1
// ch29، qيraah-v2 ch60)، لَيْلَة (qasas-v1 ch7)، وَصَلَ (qيraah-v2 ch38،
// qasas-v1 ch12)، نَاجَى (qيraah-v2 ch59)، قَرَّبَ (qيraah-v1 ch29، Form II
// distinct from Form I قَرُبَ per that chapter's own documented split)،
// أَدْنَى (qيraah-v1 ch29)، زَادَ (qasas-v3 ch7)، أَرَى (qasas-v7 ch1)،
// نَظَرَ (qasas-v1 ch14)، يَعْلَمُ→عَلِمَ، اِسْتَطَاعَ (qasas-v7 ch13)،
// أَدْرَكَ (qasas-v7 ch8 -- see post-write correction note above)، بَصَر
// (qيraah-v2 ch33)، لَطِيف (qيraah-v2
// ch36/ch40)، خَبِير (qيraah-v2 ch61)، جَبَل (qasas-v1 ch15)، حَمَلَ
// (qيraah-v2 ch49، qasas-v2 ch9/ch20)، فَضْل (qasas-v2 ch11)، أَنزَلَ
// (qasas-v3 ch12)، قُرْآن (qيraah-v2 ch72)، خَشَعَ (qيraah-v2 ch43)،
// تَصَدَّعَ->new، خَشْيَة (qيraah-v2 ch43)، لَنْ (qasas-v2 ch19، qasas-v3
// ch17)، اسْتَقَرَّ->new، مَكَان (qasas-v2 ch9)، سَوْفَ، تَجَلَّى->new، جَعَلَ
// (qasas-v1 ch8)، دَكّ->new، خَرَّ->new، صَعِقَ->new، أَفَاقَ (qيraah-v2
// ch50)، سُبْحَان، تَابَ (qasas-v3 ch8)، أَنَا، أَوَّل (qasas-v2 ch12)،
// مُؤْمِن (qيraah-v2 ch57، qasas-v3 ch14)، اِصْطَفَى->new، النَّاس، رِسَالَة
// (qيraah-v2 ch49، qasas-v3 ch11)، كَلاَم (qيraah-v2 ch44، qasas-v3 ch9)،
// أَخَذَ (qيraah-v1 ch26)، آتَى (qasas-v2 ch11)، شَكَرَ (qيraah-v2 ch35،
// qasas-v2 ch11/ch24)، لَوْح->new، مَوْعِظَة (qasas-v2 ch9)، تَفْصِيل
// (qيraah-v2 ch61)، شَيْء، أَمَرَ (qيraah-v1 ch24، qيraah-v2 ch39/ch57،
// qasas-v1 ch8، qasas-v2 ch2)، قُوَّة، أَحْسَن (qasas-v2 ch8)، لَمَّا،
// أَخْبَرَ (qيraah-v2 ch34، qasas-v2 ch1)، أَنْعَمَ (qيraah-v2 ch36،
// qasas-v2 ch1)، وَقَاحَة->new، جَسَارَة->new، نُؤْمِنَ→آمَنَ، جَهْرَة->new،
// غَضِبَ (qasas-v1 ch3/ch10، qasas-v2 ch8)، جُرْأَة->new، صَاعِقَة (qيraah-v2
// ch47)، تَحَمَّلَ (qيraah-v2 ch33/ch46)، الَّذِي، خَلَقَ (qيraah-v2 ch33،
// qasas-v1 ch9، qasas-v2 ch11)، كَيْفَ، دَعَا (qasas-v1 ch8)، شَاءَ
// (qيraah-v2 ch34، qasas-v1 ch14)، أَهْلَكَ (qasas-v7 ch2)، قَبْلَ (qيraah-v2
// ch38، qيraah-v1 ch29، qasas-v3 ch7/ch21)، إِيَّا->new (see note above)،
// فَعَلَ (qasas-v7 ch1)، سَفِيه->new، أَجَابَ (qasas-v3 ch4)، دُعَاء
// (qasas-v2 ch25)، بَعَثَ (qasas-v7 ch1)، بَعْدَ، مَوْت (qيraah-v1 ch29،
// qيraah-v2 ch38/ch49، qasas-v2 ch25)، لَعَلَّ (qيraah-v2 ch38)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 26 new words (تَطَهَّرَ، صَامَ، ثَلاَثِين، طُور، سِينَاء، جُحْد، هَارُون، خَلَفَ،
// مُفْسِد، مِيقَات، أَثَر، أَتَمَّ، تَصَدَّعَ، اِسْتَقَرَّ، تَجَلَّى، دَكّ، خَرَّ،
// صَعِقَ، اِصْطَفَى، لَوْح، وَقَاحَة، جَسَارَة، جَهْرَة، جُرْأَة، إِيَّا، سَفِيه) --
// dense but expected for the Sinai theophany's specialised vocabulary.
//
// No page footnotes recorded as book_note on these pages.
export const CHAPTER = {
  id: 'ch14',
  title: { ar: 'التَّوْرَاةُ', en: 'The Torah' },
  newWords: [
    'تَطَهَّرَ', 'صَامَ', 'ثَلاَثِين', 'طُور', 'سِينَاء', 'جُحْد', 'هَارُون', 'خَلَفَ',
    'مُفْسِد', 'مِيقَات', 'أَثَر', 'أَتَمَّ', 'تَصَدَّعَ', 'اِسْتَقَرَّ', 'تَجَلَّى',
    'دَكّ', 'خَرَّ', 'صَعِقَ', 'اِصْطَفَى', 'لَوْح', 'وَقَاحَة', 'جَسَارَة', 'جَهْرَة',
    'جُرْأَة', 'إِيَّا', 'سَفِيه',
  ],
  lemmas: {
    'تَطَهَّرَ': { gloss: 'to purify oneself' },
    'صَامَ': { gloss: 'to fast' },
    'ثَلاَثِين': { gloss: 'thirty' },
    'طُور': { gloss: 'the Mount (esp. Mount Sinai)' },
    'سِينَاء': { gloss: 'Sinai' },
    'جُحْد': { gloss: 'denial, obstinate refusal (to believe)' },
    'هَارُون': { gloss: 'Hārūn (Aaron)' },
    'خَلَفَ': { gloss: 'to succeed, take the place of' },
    'مُفْسِد': { gloss: 'corruptor, one who spreads corruption' },
    'مِيقَات': { gloss: 'appointed time, appointed place' },
    'أَثَر': { gloss: 'trace, track, footstep' },
    'أَتَمَّ': { gloss: 'to complete' },
    'تَصَدَّعَ': { gloss: 'to crack, split apart' },
    'اِسْتَقَرَّ': { gloss: 'to settle, become firm' },
    'تَجَلَّى': { gloss: 'to manifest, appear in glory' },
    'دَكّ': { gloss: 'a leveling, crushing flat' },
    'خَرَّ': { gloss: 'to fall down, collapse' },
    'صَعِقَ': { gloss: 'thunderstruck, struck unconscious' },
    'اِصْطَفَى': { gloss: 'to choose, select' },
    'لَوْح': { gloss: 'tablet (pl. أَلْوَاح)' },
    'وَقَاحَة': { gloss: 'impudence, insolence' },
    'جَسَارَة': { gloss: 'audacity, boldness' },
    'جَهْرَة': { gloss: 'openly, publicly, plainly' },
    'جُرْأَة': { gloss: 'boldness, daring' },
    'إِيَّا': { gloss: '(independent object-pronoun stem)' },
    'سَفِيه': { gloss: 'fool, foolish one (pl. سُفَهَاء)' },
  },
  paragraphs: [
    {
      en: 'Allah willed that the Children of Israel not be lost, as other nations were lost without a book or guidance from Allah, and willed that they not flounder blindly as other nations floundered blindly.',
      sentences: [
        {
          id: 'qs-v7-c14-001',
          ar: 'وَأَرَادَ اللَّهُ أَنْ لَا يَضِيعَ بَنُو إِسْرَائِيلَ كَمَا ضَاعَتْ أُمَمٌ بِغَيْرِ كِتَابٍ وَهُدًى مِنَ اللَّهِ.',
          en: 'Allah willed that the Children of Israel not be lost, as other nations were lost without a book or guidance from Allah.',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want; and willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَضِيعَ', lemma: 'ضَاعَ', pos: 'verb', features: 'impf.3ms', root: 'ض ي ع', gloss: 'to be lost' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons, children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'part', features: 'part', gloss: 'as' },
            { surface: 'ضَاعَتْ', lemma: 'ضَاعَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be lost; were lost' },
            { surface: 'أُمَمٌ', lemma: 'أُمَّة', pos: 'noun', features: 'pl.indef.nom', gloss: 'nations' },
            { surface: 'بِغَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'prep+constr.gen', gloss: 'without' },
            { surface: 'كِتَابٍ', lemma: 'كِتَاب', pos: 'noun', features: 'indef.gen', gloss: 'a book' },
            { surface: 'وَهُدًى', lemma: 'هُدًى', pos: 'noun', features: 'conj+indef.gen', root: 'ه د ي', gloss: 'or guidance' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c14-002',
          ar: 'وَأَرَادَ اللَّهُ أَنْ لَا يَخْبِطُوا خَبْطَ عَشْوَاءَ كَمَا خَبَطَتْ أُمَمٌ خَبْطَ عَشْوَاءَ.',
          en: 'and willed that they not flounder blindly, as other nations floundered blindly.',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَخْبِطُوا', lemma: 'خَبَطَ', pos: 'verb', features: 'impf.3mp', gloss: 'to flounder, strike blindly' },
            { surface: 'خَبْطَ', lemma: 'خَبْط', pos: 'noun', features: 'acc.constr', gloss: 'the blind floundering of' },
            { surface: 'عَشْوَاءَ', lemma: 'عَشْوَاء', pos: 'noun', features: 'indef.gen', gloss: 'a blind one (she-camel)' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'part', features: 'part', gloss: 'as' },
            { surface: 'خَبَطَتْ', lemma: 'خَبَطَ', pos: 'verb', features: 'perf.3fs', gloss: 'floundered' },
            { surface: 'أُمَمٌ', lemma: 'أُمَّة', pos: 'noun', features: 'pl.indef.nom', gloss: 'nations' },
            { surface: 'خَبْطَ', lemma: 'خَبْط', pos: 'noun', features: 'acc.constr', gloss: 'the blind floundering of' },
            { surface: 'عَشْوَاءَ', lemma: 'عَشْوَاء', pos: 'noun', features: 'indef.gen', gloss: 'a blind one (she-camel)' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا أَرَادَ اللَّهُ أَنْ يُعْطِيَ بَنِي إِسْرَائِيلَ كِتَاباً وَهُدًى؟',
          options: ['لِئَلَّا يَضِيعُوا وَيَخْبِطُوا خَبْطَ عَشْوَاءَ كَمَا فَعَلَتْ أُمَمٌ أُخْرَى', 'لِأَنَّهُمْ طَلَبُوا ذَلِكَ مِنَ اللَّهِ', 'لِيَكُونُوا أَغْنَى الْأُمَمِ'],
          answer: 0,
          qEn: 'Why did Allah want to give the Children of Israel a book and guidance?',
          optionsEn: ['So they would not be lost and flounder blindly, as other nations did', 'Because they had asked Allah for it', 'So they would become the wealthiest of nations'],
        },
      ],
    },
    {
      en: "Allah commanded Mūsā to purify himself and to fast thirty days, then come to Mount Sinai, so that his Lord would speak to him and he would receive a book to be their guide. Mūsā chose seventy men from his people to be witnesses to that, for the Children of Israel were a stubbornly denying people. \u201cAnd Mūsā said to his brother Hārūn, 'Take my place among my people, set things right, and do not follow the way of those who spread corruption'\u201d \u2014 for a community must have a leader.",
      sentences: [
        {
          id: 'qs-v7-c14-003',
          ar: 'أَمَرَ اللَّهُ مُوسَى أَنْ يَتَطَهَّرَ وَأَنْ يَصُومَ ثَلَاثِينَ يَوْمًا ثُمَّ يَأْتِيَ إِلَى طُورِ سِينَاءَ حَتَّى يُكَلِّمَهُ رَبُّهُ وَيَتَلَقَّى كِتَابًا يَكُونُ لَهُمُ الْإِمَامَ.',
          en: 'Allah commanded Mūsā to purify himself and to fast thirty days, then come to Mount Sinai, so that his Lord would speak to him and he would receive a book to be their guide.',
          tokens: [
            { surface: 'أَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to command' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَتَطَهَّرَ', lemma: 'تَطَهَّرَ', pos: 'verb', features: 'impf.3ms', root: 'ط ه ر', gloss: 'to purify oneself' },
            { surface: 'وَأَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj+conj', gloss: 'and to' },
            { surface: 'يَصُومَ', lemma: 'صَامَ', pos: 'verb', features: 'impf.3ms', root: 'ص و م', gloss: 'to fast' },
            { surface: 'ثَلَاثِينَ', lemma: 'ثَلاَثِين', pos: 'num', features: 'acc', gloss: 'thirty' },
            { surface: 'يَوْمًا', lemma: 'يَوْم', pos: 'noun', features: 'indef.acc', gloss: 'a day, days' },
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'يَأْتِيَ', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms', gloss: 'to come' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'طُورِ', lemma: 'طُور', pos: 'noun', features: 'constr.gen', root: 'ط و ر', gloss: 'the Mount of' },
            { surface: 'سِينَاءَ', lemma: 'سِينَاء', pos: 'proper', features: 'gen', gloss: 'Sinai' },
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'so that' },
            { surface: 'يُكَلِّمَهُ', lemma: 'كَلَّمَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to speak to; would speak to him' },
            { surface: 'رَبُّهُ', lemma: 'رَبّ', pos: 'noun', features: 'nom+3ms', gloss: 'his Lord' },
            { surface: 'وَيَتَلَقَّى', lemma: 'تَلَقَّى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'and receive' },
            { surface: 'كِتَابًا', lemma: 'كِتَاب', pos: 'noun', features: 'indef.acc', gloss: 'a book' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be' },
            { surface: 'لَهُمُ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'الْإِمَامَ', lemma: 'إِمَام', pos: 'noun', features: 'def.acc', gloss: 'the guide, leader' },
          ],
        },
        {
          id: 'qs-v7-c14-004',
          ar: 'اخْتَارَ مُوسَى مِنْ قَوْمِهِ سَبْعِينَ رَجُلًا يَكُونُونَ عَلَى ذَلِكَ مِنَ الشَّاهِدِينَ',
          en: 'Mūsā chose seventy men from his people to be witnesses to that,',
          tokens: [
            { surface: 'اخْتَارَ', lemma: 'اِخْتَارَ', pos: 'verb', features: 'perf.3ms', gloss: 'to choose' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
            { surface: 'سَبْعِينَ', lemma: 'سَبْعِين', pos: 'num', features: 'acc', gloss: 'seventy' },
            { surface: 'رَجُلًا', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', gloss: 'men' },
            { surface: 'يَكُونُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3mp', gloss: 'to be' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الشَّاهِدِينَ', lemma: 'شَاهِد', pos: 'noun', features: 'pl.def.gen', gloss: 'the witnesses' },
          ],
        },
        {
          id: 'qs-v7-c14-005',
          ar: 'لِأَنَّ بَنِي إِسْرَائِيلَ قَوْمٌ جُحْدٌ.',
          en: 'for the Children of Israel were a stubbornly denying people.',
          tokens: [
            { surface: 'لِأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part', gloss: 'because' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', root: 'ب ن و', gloss: 'the sons, children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'قَوْمٌ', lemma: 'قَوْم', pos: 'noun', features: 'indef.nom', gloss: 'a people' },
            { surface: 'جُحْدٌ', lemma: 'جُحْد', pos: 'noun', features: 'indef.nom', root: 'ج ح د', gloss: 'stubbornly denying, obstinate' },
          ],
        },
        {
          // al-A'rāf 7:142.
          id: 'qs-v7-c14-006',
          ar: '\u{FD3E}وَقَالَ مُوسَىٰ لِأَخِيهِ هَـٰرُونَ ٱخْلُفْنِى فِى قَوْمِى وَأَصْلِحْ وَلَا تَتَّبِعْ سَبِيلَ ٱلْمُفْسِدِينَ\u{FD3F}',
          en: '"And Mūsā said to his brother Hārūn, \u2018Take my place among my people, set things right, and do not follow the way of those who spread corruption,\u2019"',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
            { surface: 'مُوسَىٰ', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'لِأَخِيهِ', lemma: 'أَخ', pos: 'noun', features: 'prep+gen+3ms', gloss: 'to his brother' },
            { surface: 'هَـٰرُونَ', lemma: 'هَارُون', pos: 'proper', features: 'gen', gloss: 'Hārūn (Aaron)' },
            { surface: 'ٱخْلُفْنِى', lemma: 'خَلَفَ', pos: 'verb', features: 'imp.2ms+1s', root: 'خ ل ف', gloss: 'to succeed, replace; take my place!' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'قَوْمِى', lemma: 'قَوْم', pos: 'noun', features: 'gen+1s', gloss: 'my people' },
            { surface: 'وَأَصْلِحْ', lemma: 'أَصْلَحَ', pos: 'verb', features: 'conj+imp.2ms', gloss: 'to set right; and set right' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَتَّبِعْ', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'impf.2ms', gloss: 'to follow' },
            { surface: 'سَبِيلَ', lemma: 'سَبِيل', pos: 'noun', features: 'acc.constr', gloss: 'the way of' },
            { surface: 'ٱلْمُفْسِدِينَ', lemma: 'مُفْسِد', pos: 'noun', features: 'pl.def.gen', root: 'ف س د', gloss: 'those who spread corruption' },
          ],
        },
        {
          id: 'qs-v7-c14-007',
          ar: 'لِأَنَّ الْجَمَاعَةَ لَا بُدَّ لَهَا مِنْ إِمَامٍ.',
          en: 'for a community must have a leader.',
          tokens: [
            { surface: 'لِأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part', gloss: 'because' },
            { surface: 'الْجَمَاعَةَ', lemma: 'جَمَاعَة', pos: 'noun', features: 'def.acc', gloss: 'the community' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'بُدَّ', lemma: 'بُدّ', pos: 'noun', features: 'acc', gloss: 'escape, way out' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'for it' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'إِمَامٍ', lemma: 'إِمَام', pos: 'noun', features: 'indef.gen', gloss: 'a leader' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا أَمَرَ اللَّهُ مُوسَى أَنْ يَفْعَلَ قَبْلَ الذَّهَابِ إِلَى الطُّورِ؟',
          options: ['أَنْ يَتَطَهَّرَ وَيَصُومَ ثَلَاثِينَ يَوْماً', 'أَنْ يَجْمَعَ الْمَالَ', 'أَنْ يَبْنِيَ بَيْتاً جَدِيداً'],
          answer: 0,
          qEn: 'What did Allah command Mūsā to do before going to the Mount?',
          optionsEn: ['To purify himself and fast thirty days', 'To gather wealth', 'To build a new house'],
        },
        {
          q: 'مَنِ اسْتَخْلَفَ مُوسَى عَلَى قَوْمِهِ حِينَ ذَهَبَ إِلَى الطُّورِ؟',
          options: ['أَخَاهُ هَارُونَ', 'أَحَدَ السَّبْعِينَ رَجُلاً', 'لَمْ يَسْتَخْلِفْ أَحَداً'],
          answer: 0,
          qEn: 'Whom did Mūsā appoint as his deputy over his people when he went to the Mount?',
          optionsEn: ['His brother Hārūn', 'One of the seventy men', 'He appointed no one'],
        },
      ],
    },
    {
      lines: true,
      en: "Mūsā set out for his Lord's appointed meeting, but longing for his Lord urged him on, so he hastened and went ahead to the Mount. \u201cAnd what made you hasten ahead of your people, O Mūsā?\u201d \u201cHe said, 'They are there following in my footsteps, and I hastened to You, my Lord, so that You would be pleased.'\u201d Allah commanded him to complete his Lord's appointed time, forty nights. Mūsā reached Mount Sinai, and his Lord spoke to him, conversed privately with him, drew him near, and brought him closer \u2014 and that increased him in longing, so he said: \u201cMy Lord, show me, that I may look at You.\u201d",
      sentences: [
        {
          id: 'qs-v7-c14-008',
          ar: 'سَارَ مُوسَى لِمِيقَاتِ رَبِّهِ، وَلَكِنَّهُ حَثَّهُ الشَّوْقُ إِلَى رَبِّهِ فَتَعَجَّلَ وَسَبَقَ إِلَى الطُّورِ.',
          en: "Mūsā set out for his Lord's appointed meeting, but longing for his Lord urged him on, so he hastened and went ahead to the Mount.",
          tokens: [
            { surface: 'سَارَ', lemma: 'سَارَ', pos: 'verb', features: 'perf.3ms', gloss: 'to set out, journey' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'لِمِيقَاتِ', lemma: 'مِيقَات', pos: 'noun', features: 'prep+constr.gen', root: 'و ق ت', gloss: 'for the appointed meeting of' },
            { surface: 'رَبِّهِ', lemma: 'رَبّ', pos: 'noun', features: 'gen+3ms', gloss: 'his Lord' },
            { surface: 'وَلَكِنَّهُ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'but he' },
            { surface: 'حَثَّهُ', lemma: 'حَثَّ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to urge; urged him' },
            { surface: 'الشَّوْقُ', lemma: 'شَوْق', pos: 'noun', features: 'def.nom', gloss: 'the longing' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'رَبِّهِ', lemma: 'رَبّ', pos: 'noun', features: 'gen+3ms', gloss: 'his Lord' },
            { surface: 'فَتَعَجَّلَ', lemma: 'عَجِلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ج ل', gloss: 'to hasten; so he hastened' },
            { surface: 'وَسَبَقَ', lemma: 'سَبَقَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to go ahead; and went ahead' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الطُّورِ', lemma: 'طُور', pos: 'noun', features: 'def.gen', gloss: 'the Mount' },
          ],
        },
        {
          // Ṭā-Hā 20:83.
          id: 'qs-v7-c14-009',
          ar: '\u{FD3E}وَمَآ أَعْجَلَكَ عَن قَوْمِكَ يَـٰمُوسَىٰ\u{FD3F}',
          en: '"And what made you hasten ahead of your people, O Mūsā?"',
          tokens: [
            { surface: 'وَمَآ', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'and what' },
            { surface: 'أَعْجَلَكَ', lemma: 'عَجِلَ', pos: 'verb', features: 'perf.3ms+2ms', gloss: 'to make hasten; made you hasten' },
            { surface: 'عَن', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from, ahead of' },
            { surface: 'قَوْمِكَ', lemma: 'قَوْم', pos: 'noun', features: 'gen+2ms', gloss: 'your people' },
            { surface: 'يَـٰمُوسَىٰ', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'O Mūsā' },
          ],
        },
        {
          // Ṭā-Hā 20:84.
          id: 'qs-v7-c14-010',
          ar: '\u{FD3E}قَالَ هُمْ أُولَآءِ عَلَىٰٓ أَثَرِى وَعَجِلْتُ إِلَيْكَ رَبِّ لِتَرْضَىٰ\u{FD3F}',
          en: '"He said, \u2018They are there following in my footsteps, and I hastened to You, my Lord, so that You would be pleased.\u2019"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; he said' },
            { surface: 'هُمْ', lemma: 'هُمْ', pos: 'noun', features: '3mp', gloss: 'they' },
            { surface: 'أُولَآءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these, there' },
            { surface: 'عَلَىٰٓ', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on, following' },
            { surface: 'أَثَرِى', lemma: 'أَثَر', pos: 'noun', features: 'gen+1s', root: 'ا ث ر', gloss: 'my track, footsteps' },
            { surface: 'وَعَجِلْتُ', lemma: 'عَجِلَ', pos: 'verb', features: 'conj+perf.1s', gloss: 'to hasten; and I hastened' },
            { surface: 'إِلَيْكَ', lemma: 'إِلَى', pos: 'prep', features: 'prep+2ms', gloss: 'to You' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
            { surface: 'لِتَرْضَىٰ', lemma: 'رَضِيَ', pos: 'verb', features: 'prep+impf.2ms', gloss: 'to be pleased; so that You be pleased' },
          ],
        },
        {
          id: 'qs-v7-c14-011',
          ar: 'وَأَمَرَهُ اللَّهُ أَنْ يُتِمَّ مِيقَاتَ رَبِّهِ أَرْبَعِينَ لَيْلَةً.',
          en: "Allah commanded him to complete his Lord's appointed time, forty nights.",
          tokens: [
            { surface: 'وَأَمَرَهُ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'and commanded him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُتِمَّ', lemma: 'أَتَمَّ', pos: 'verb', features: 'impf.3ms', root: 'ت م م', gloss: 'to complete' },
            { surface: 'مِيقَاتَ', lemma: 'مِيقَات', pos: 'noun', features: 'acc.constr', gloss: 'the appointed time of' },
            { surface: 'رَبِّهِ', lemma: 'رَبّ', pos: 'noun', features: 'gen+3ms', gloss: 'his Lord' },
            { surface: 'أَرْبَعِينَ', lemma: 'أَرْبَعِين', pos: 'num', features: 'acc', gloss: 'forty' },
            { surface: 'لَيْلَةً', lemma: 'لَيْلَة', pos: 'noun', features: 'indef.acc', gloss: 'a night, nights' },
          ],
        },
        {
          id: 'qs-v7-c14-012',
          ar: 'وَصَلَ مُوسَى إِلَى طُورِ سِينَاءَ فَكَلَّمَهُ رَبُّهُ وَنَاجَاهُ وَقَرَّبَهُ وَأَدْنَاهُ،',
          en: 'Mūsā reached Mount Sinai, and his Lord spoke to him, conversed privately with him, drew him near, and brought him closer,',
          tokens: [
            { surface: 'وَصَلَ', lemma: 'وَصَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to arrive, reach' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'طُورِ', lemma: 'طُور', pos: 'noun', features: 'constr.gen', gloss: 'the Mount of' },
            { surface: 'سِينَاءَ', lemma: 'سِينَاء', pos: 'proper', features: 'gen', gloss: 'Sinai' },
            { surface: 'فَكَلَّمَهُ', lemma: 'كَلَّمَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to speak to; and spoke to him' },
            { surface: 'رَبُّهُ', lemma: 'رَبّ', pos: 'noun', features: 'nom+3ms', gloss: 'his Lord' },
            { surface: 'وَنَاجَاهُ', lemma: 'نَاجَى', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to converse privately with; and conversed with him' },
            { surface: 'وَقَرَّبَهُ', lemma: 'قَرَّبَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to bring near; and drew him near' },
            { surface: 'وَأَدْنَاهُ', lemma: 'أَدْنَى', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to bring close; and brought him closer' },
          ],
        },
        {
          id: 'qs-v7-c14-013',
          ar: 'فَزَادَهُ ذَلِكَ شَوْقًا فَقَالَ:',
          en: 'and that increased him in longing, so he said:',
          tokens: [
            { surface: 'فَزَادَهُ', lemma: 'زَادَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to increase; and that increased him' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'شَوْقًا', lemma: 'شَوْق', pos: 'noun', features: 'indef.acc', gloss: 'in longing' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'so he said' },
          ],
        },
        {
          // al-A'rāf 7:143a.
          id: 'qs-v7-c14-014',
          ar: '\u{FD3E}رَبِّ أَرِنِى أَنظُرْ إِلَيْكَ\u{FD3F}.',
          en: '"My Lord, show me, that I may look at You."',
          tokens: [
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
            { surface: 'أَرِنِى', lemma: 'أَرَى', pos: 'verb', features: 'imp.2ms+1s', gloss: 'to show; show me' },
            { surface: 'أَنظُرْ', lemma: 'نَظَرَ', pos: 'verb', features: 'impf.1s', gloss: 'to look; that I may look' },
            { surface: 'إِلَيْكَ', lemma: 'إِلَى', pos: 'prep', features: 'prep+2ms', gloss: 'at You' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا تَعَجَّلَ مُوسَى وَسَبَقَ قَوْمَهُ إِلَى الطُّورِ؟',
          options: ['لِأَنَّ الشَّوْقَ إِلَى رَبِّهِ حَثَّهُ', 'لِأَنَّهُ خَافَ مِنْ قَوْمِهِ', 'لِأَنَّ الطَّرِيقَ كَانَتْ قَصِيرَةً'],
          answer: 0,
          qEn: 'Why did Mūsā hasten and go ahead of his people to the Mount?',
          optionsEn: ['Because longing for his Lord urged him on', 'Because he feared his people', 'Because the road was short'],
        },
      ],
    },
    {
      en: '\u201cBut Vision cannot perceive Him, while He perceives all vision; and He is the Subtle, the All-Aware.\u201d Indeed the mountains cannot bear His speech, let alone His light. \u201cIf We had sent this Qur\u2019an down upon a mountain, you would have seen it humbled, split apart from fear of Allah.\u201d \u201cHe said, \u2018You will not see Me, but look at the mountain: if it remains in its place, then you will see Me.\u2019\u201d \u201cAnd when his Lord manifested His glory to the mountain, He leveled it to the ground, and Mūsā fell down thunderstruck.\u201d \u201cAnd when he recovered, he said, \u201cGlory be to You! I turn to You in repentance, and I am the first of the believers.\u201d\u201d \u201cHe said, \u2018O Mūsā, I have chosen you above the people with My messages and My speech, so take what I have given you, and be among the thankful.\u2019\u201d',
      sentences: [
        {
          id: 'qs-v7-c14-015',
          ar: 'وَاللَّهُ يَعْلَمُ أَنَّ مُوسَى لَا يَسْتَطِيعُ ذَلِكَ لِأَنَّ اللَّهَ',
          en: 'But Allah knows that Mūsā could not do that, because Allah',
          tokens: [
            { surface: 'وَاللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'conj+nom', gloss: 'and Allah' },
            { surface: 'يَعْلَمُ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to know; knows' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْتَطِيعُ', lemma: 'اِسْتَطَاعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be able' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'لِأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part', gloss: 'because' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          // al-An'ām 6:103.
          id: 'qs-v7-c14-016',
          ar: '\u{FD3E}لَّا تُدْرِكُهُ ٱلْأَبْصَـٰرُ وَهُوَ يُدْرِكُ ٱلْأَبْصَـٰرَ وَهُوَ ٱللَّطِيفُ ٱلْخَبِيرُ\u{FD3F}.',
          en: '"Vision cannot perceive Him, while He perceives all vision; and He is the Subtle, the All-Aware."',
          tokens: [
            { surface: 'لَّا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُدْرِكُهُ', lemma: 'أَدْرَكَ', pos: 'verb', features: 'impf.3fs+3ms', root: 'د ر ك', gloss: 'to perceive; perceive Him' },
            { surface: 'ٱلْأَبْصَـٰرُ', lemma: 'بَصَر', pos: 'noun', features: 'pl.def.nom', gloss: 'the sights, vision' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'while He' },
            { surface: 'يُدْرِكُ', lemma: 'أَدْرَكَ', pos: 'verb', features: 'impf.3ms', gloss: 'to perceive; perceives' },
            { surface: 'ٱلْأَبْصَـٰرَ', lemma: 'بَصَر', pos: 'noun', features: 'pl.def.acc', gloss: 'the sights, vision' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and He' },
            { surface: 'ٱللَّطِيفُ', lemma: 'لَطِيف', pos: 'adj', features: 'def.nom', gloss: 'the Subtle' },
            { surface: 'ٱلْخَبِيرُ', lemma: 'خَبِير', pos: 'adj', features: 'def.nom', gloss: 'the All-Aware' },
          ],
        },
        {
          id: 'qs-v7-c14-017',
          ar: 'وَإِنَّ الْجِبَالَ لَا تَسْتَطِيعُ أَنْ تَحْمِلَ كَلَامَهُ فَضْلًا عَنْ نُورِهِ.',
          en: 'Indeed the mountains cannot bear His speech, let alone His light.',
          tokens: [
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'الْجِبَالَ', lemma: 'جَبَل', pos: 'noun', features: 'pl.def.acc', gloss: 'the mountains' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَسْتَطِيعُ', lemma: 'اِسْتَطَاعَ', pos: 'verb', features: 'impf.3fs', gloss: 'to be able' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'تَحْمِلَ', lemma: 'حَمَلَ', pos: 'verb', features: 'impf.3fs', gloss: 'to bear, carry' },
            { surface: 'كَلَامَهُ', lemma: 'كَلاَم', pos: 'noun', features: 'acc+3ms', gloss: 'His speech' },
            { surface: 'فَضْلًا', lemma: 'فَضْل', pos: 'noun', features: 'indef.acc', gloss: 'let alone' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'نُورِهِ', lemma: 'نُور', pos: 'noun', features: 'gen+3ms', gloss: 'His light' },
          ],
        },
        {
          // al-Ḥashr 59:21.
          id: 'qs-v7-c14-018',
          ar: '\u{FD3E}لَوْ أَنزَلْنَا هَـٰذَا ٱلْقُرْءَانَ عَلَىٰ جَبَلٍ لَّرَأَيْتَهُۥ خَـٰشِعًا مُّتَصَدِّعًا مِّنْ خَشْيَةِ ٱللَّهِ\u{FD3F}.',
          en: '"If We had sent this Qur\u2019an down upon a mountain, you would have seen it humbled, split apart from fear of Allah."',
          tokens: [
            { surface: 'لَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'أَنزَلْنَا', lemma: 'أَنزَلَ', pos: 'verb', features: 'perf.1p', gloss: 'to send down; We had sent down' },
            { surface: 'هَـٰذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'ٱلْقُرْءَانَ', lemma: 'قُرْآن', pos: 'noun', features: 'def.acc', gloss: 'the Qur\u2019an' },
            { surface: 'عَلَىٰ', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'جَبَلٍ', lemma: 'جَبَل', pos: 'noun', features: 'indef.gen', gloss: 'a mountain' },
            { surface: 'لَّرَأَيْتَهُۥ', lemma: 'رَأَى', pos: 'verb', features: 'part+perf.2ms+3ms', gloss: 'to see; you would have seen it' },
            { surface: 'خَـٰشِعًا', lemma: 'خَشَعَ', pos: 'adj', features: 'indef.acc', gloss: 'humbled' },
            { surface: 'مُّتَصَدِّعًا', lemma: 'تَصَدَّعَ', pos: 'adj', features: 'indef.acc', root: 'ص د ع', gloss: 'split apart, cracked' },
            { surface: 'مِّنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'خَشْيَةِ', lemma: 'خَشْيَة', pos: 'noun', features: 'constr.gen', gloss: 'fear of' },
            { surface: 'ٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          // al-A'rāf 7:143b.
          id: 'qs-v7-c14-019',
          ar: '\u{FD3E}قَالَ لَن تَرَىٰنِى وَلَـٰكِنِ ٱنظُرْ إِلَى ٱلْجَبَلِ فَإِنِ ٱسْتَقَرَّ مَكَانَهُۥ فَسَوْفَ تَرَىٰنِى\u{FD3F}.',
          en: '"He said, \u2018You will not see Me, but look at the mountain: if it remains in its place, then you will see Me.\u2019"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; he said' },
            { surface: 'لَن', lemma: 'لَنْ', pos: 'part', features: 'neg', gloss: 'will not' },
            { surface: 'تَرَىٰنِى', lemma: 'رَأَى', pos: 'verb', features: 'impf.2ms+1s', gloss: 'to see; you will see me' },
            { surface: 'وَلَـٰكِنِ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'ٱنظُرْ', lemma: 'نَظَرَ', pos: 'verb', features: 'imp.2ms', gloss: 'to look; look' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'ٱلْجَبَلِ', lemma: 'جَبَل', pos: 'noun', features: 'def.gen', gloss: 'the mountain' },
            { surface: 'فَإِنِ', lemma: 'إِنْ', pos: 'conj', features: 'conj+conj', gloss: 'so if' },
            { surface: 'ٱسْتَقَرَّ', lemma: 'اِسْتَقَرَّ', pos: 'verb', features: 'perf.3ms', root: 'ق ر ر', gloss: 'to settle, remain firm' },
            { surface: 'مَكَانَهُۥ', lemma: 'مَكَان', pos: 'noun', features: 'acc+3ms', gloss: 'its place' },
            { surface: 'فَسَوْفَ', lemma: 'سَوْفَ', pos: 'part', features: 'conj+part', gloss: 'then will' },
            { surface: 'تَرَىٰنِى', lemma: 'رَأَى', pos: 'verb', features: 'impf.2ms+1s', gloss: 'you will see me' },
          ],
        },
        {
          // al-A'rāf 7:143c.
          id: 'qs-v7-c14-020',
          ar: '\u{FD3E}فَلَمَّا تَجَلَّىٰ رَبُّهُۥ لِلْجَبَلِ جَعَلَهُۥ دَكًّا وَخَرَّ مُوسَىٰ صَعِقًا\u{FD3F}.',
          en: '"And when his Lord manifested His glory to the mountain, He leveled it to the ground, and Mūsā fell down thunderstruck."',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'تَجَلَّىٰ', lemma: 'تَجَلَّى', pos: 'verb', features: 'perf.3ms', root: 'ج ل و', gloss: 'to manifest, appear in glory' },
            { surface: 'رَبُّهُۥ', lemma: 'رَبّ', pos: 'noun', features: 'nom+3ms', gloss: 'his Lord' },
            { surface: 'لِلْجَبَلِ', lemma: 'جَبَل', pos: 'noun', features: 'prep+def.gen', gloss: 'to the mountain' },
            { surface: 'جَعَلَهُۥ', lemma: 'جَعَلَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to make; He made it' },
            { surface: 'دَكًّا', lemma: 'دَكّ', pos: 'noun', features: 'indef.acc', root: 'د ك ك', gloss: 'crushed, leveled to the ground' },
            { surface: 'وَخَرَّ', lemma: 'خَرَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ر ر', gloss: 'to fall down; and fell down' },
            { surface: 'مُوسَىٰ', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'صَعِقًا', lemma: 'صَعِقَ', pos: 'adj', features: 'indef.acc', root: 'ص ع ق', gloss: 'thunderstruck' },
          ],
        },
        {
          // al-A'rāf 7:143d.
          id: 'qs-v7-c14-021',
          ar: '\u{FD3E}فَلَمَّآ أَفَاقَ قَالَ سُبْحَـٰنَكَ تُبْتُ إِلَيْكَ وَأَنَا۠ أَوَّلُ ٱلْمُؤْمِنِينَ\u{FD3F}.',
          en: '"And when he recovered, he said, \u2018Glory be to You! I turn to You in repentance, and I am the first of the believers.\u2019"',
          tokens: [
            { surface: 'فَلَمَّآ', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'أَفَاقَ', lemma: 'أَفَاقَ', pos: 'verb', features: 'perf.3ms', gloss: 'to recover consciousness' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; he said' },
            { surface: 'سُبْحَـٰنَكَ', lemma: 'سُبْحَان', pos: 'noun', features: 'acc+2ms', gloss: 'glory be to You' },
            { surface: 'تُبْتُ', lemma: 'تَابَ', pos: 'verb', features: 'perf.1s', gloss: 'to repent, turn back; I turn' },
            { surface: 'إِلَيْكَ', lemma: 'إِلَى', pos: 'prep', features: 'prep+2ms', gloss: 'to You' },
            { surface: 'وَأَنَا۠', lemma: 'أَنَا', pos: 'noun', features: 'conj+1s', gloss: 'and I' },
            { surface: 'أَوَّلُ', lemma: 'أَوَّل', pos: 'noun', features: 'nom.constr', gloss: 'the first of' },
            { surface: 'ٱلْمُؤْمِنِينَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'pl.def.gen', gloss: 'the believers' },
          ],
        },
        {
          // al-A'rāf 7:144.
          id: 'qs-v7-c14-022',
          ar: '\u{FD3E}قَالَ يَـٰمُوسَىٰٓ إِنِّى ٱصْطَفَيْتُكَ عَلَى ٱلنَّاسِ بِرِسَـٰلَـٰتِى وَبِكَلَـٰمِى فَخُذْ مَآ ءَاتَيْتُكَ وَكُن مِّنَ ٱلشَّـٰكِرِينَ\u{FD3F}.',
          en: '"He said, \u2018O Mūsā, I have chosen you above the people with My messages and My speech, so take what I have given you, and be among the thankful.\u2019"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; He said' },
            { surface: 'يَـٰمُوسَىٰٓ', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'O Mūsā' },
            { surface: 'إِنِّى', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'ٱصْطَفَيْتُكَ', lemma: 'اِصْطَفَى', pos: 'verb', features: 'perf.1s+2ms', root: 'ص ف و', gloss: 'to choose; I have chosen you' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'above' },
            { surface: 'ٱلنَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'بِرِسَـٰلَـٰتِى', lemma: 'رِسَالَة', pos: 'noun', features: 'prep+pl.gen+1s', gloss: 'with My messages' },
            { surface: 'وَبِكَلَـٰمِى', lemma: 'كَلاَم', pos: 'noun', features: 'conj+prep+gen+1s', gloss: 'and My speech' },
            { surface: 'فَخُذْ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+imp.2ms', gloss: 'to take; so take' },
            { surface: 'مَآ', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'ءَاتَيْتُكَ', lemma: 'آتَى', pos: 'verb', features: 'perf.1s+2ms', gloss: 'to give; I have given you' },
            { surface: 'وَكُن', lemma: 'كَانَ', pos: 'verb', features: 'conj+imp.2ms', gloss: 'and be' },
            { surface: 'مِّنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'ٱلشَّـٰكِرِينَ', lemma: 'شَكَرَ', pos: 'noun', features: 'pl.def.gen', gloss: 'the thankful' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا لَمْ يَسْتَطِعْ مُوسَى أَنْ يَرَى اللَّهَ فِي الدُّنْيَا؟',
          options: ['لِأَنَّ الْأَبْصَارَ لَا تُدْرِكُ اللَّهَ وَهُوَ اللَّطِيفُ الْخَبِيرُ', 'لِأَنَّ اللَّهَ غَضِبَ عَلَيْهِ', 'لِأَنَّهُ لَمْ يَصُمْ بِمَا فِيهِ الْكِفَايَةُ'],
          answer: 0,
          qEn: 'Why could Mūsā not see Allah in this world?',
          optionsEn: ['Because vision cannot perceive Allah, and He is the Subtle, the All-Aware', 'Because Allah was angry with him', 'Because he had not fasted enough'],
        },
        {
          q: 'مَاذَا حَدَثَ لِلْجَبَلِ حِينَ تَجَلَّى اللَّهُ لَهُ؟',
          options: ['جَعَلَهُ اللَّهُ دَكّاً وَخَرَّ مُوسَى صَعِقاً', 'بَقِيَ الْجَبَلُ كَمَا هُوَ دُونَ تَغَيُّرٍ', 'صَارَ الْجَبَلُ أَعْلَى مِمَّا كَانَ'],
          answer: 0,
          qEn: 'What happened to the mountain when Allah manifested His glory to it?',
          optionsEn: ['Allah leveled it to the ground, and Mūsā fell down thunderstruck', 'The mountain stayed exactly as it was, unchanged', 'The mountain became higher than before'],
        },
      ],
    },
    {
      en: "Mūsā took the tablets, containing everything the Children of Israel needed, as admonition and detailed explanation of everything. And Allah commanded him to hold it firmly, and to command his people to take the best of it.",
      sentences: [
        {
          id: 'qs-v7-c14-023',
          ar: 'أَخَذَ مُوسَى الْأَلْوَاحَ وَفِيهَا كُلُّ مَا يَحْتَاجُ إِلَيْهِ بَنُو إِسْرَائِيلَ مَوْعِظَةً وَتَفْصِيلًا لِكُلِّ شَيْءٍ.',
          en: 'Mūsā took the tablets, containing everything the Children of Israel needed, as admonition and detailed explanation of everything.',
          tokens: [
            { surface: 'أَخَذَ', lemma: 'أَخَذَ', pos: 'verb', features: 'perf.3ms', gloss: 'to take' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'الْأَلْوَاحَ', lemma: 'لَوْح', pos: 'noun', features: 'pl.def.acc', root: 'ل و ح', gloss: 'the tablets' },
            { surface: 'وَفِيهَا', lemma: 'فِي', pos: 'prep', features: 'conj+prep+3fs', gloss: 'and in them' },
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom', gloss: 'all, everything' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'that which' },
            { surface: 'يَحْتَاجُ', lemma: 'اِحْتَاجَ', pos: 'verb', features: 'impf.3ms', gloss: 'to need' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'of it' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', gloss: 'the sons, children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'مَوْعِظَةً', lemma: 'مَوْعِظَة', pos: 'noun', features: 'indef.acc', gloss: 'as admonition' },
            { surface: 'وَتَفْصِيلًا', lemma: 'تَفْصِيل', pos: 'noun', features: 'conj+indef.acc', gloss: 'and detailed explanation' },
            { surface: 'لِكُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'prep+constr.gen', gloss: 'of everything' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
          ],
        },
        {
          id: 'qs-v7-c14-024',
          ar: 'وَأَمَرَهُ اللَّهُ أَنْ يَأْخُذَهَا بِقُوَّةٍ وَيَأْمُرَ قَوْمَهُ أَنْ يَأْخُذُوا بِأَحْسَنِهَا.',
          en: 'And Allah commanded him to hold it firmly, and to command his people to take the best of it.',
          tokens: [
            { surface: 'وَأَمَرَهُ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'and commanded him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَأْخُذَهَا', lemma: 'أَخَذَ', pos: 'verb', features: 'impf.3ms+3fs', gloss: 'to take it' },
            { surface: 'بِقُوَّةٍ', lemma: 'قُوَّة', pos: 'noun', features: 'prep+indef.gen', gloss: 'with strength, firmly' },
            { surface: 'وَيَأْمُرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'and to command' },
            { surface: 'قَوْمَهُ', lemma: 'قَوْم', pos: 'noun', features: 'acc+3ms', gloss: 'his people' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَأْخُذُوا', lemma: 'أَخَذَ', pos: 'verb', features: 'impf.3mp', gloss: 'to take' },
            { surface: 'بِأَحْسَنِهَا', lemma: 'أَحْسَن', pos: 'adj', features: 'prep+gen+3fs', gloss: 'the best of it' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ فِي الْأَلْوَاحِ الَّتِي أَخَذَهَا مُوسَى؟',
          options: ['كُلُّ مَا يَحْتَاجُ إِلَيْهِ بَنُو إِسْرَائِيلَ مَوْعِظَةً وَتَفْصِيلاً لِكُلِّ شَيْءٍ', 'أَسْمَاءُ الْأَنْبِيَاءِ فَقَطْ', 'قِصَّةُ حَيَاةِ مُوسَى وَحْدَهُ'],
          answer: 0,
          qEn: 'What was in the tablets that Mūsā took?',
          optionsEn: ['Everything the Children of Israel needed, as admonition and detailed explanation of everything', 'Only the names of the prophets', "The story of Mūsā's life alone"],
        },
      ],
    },
    {
      en: "And when Mūsā reached the seventy men of his people and told them what Allah had bestowed upon him, they said, insolently and audaciously: \u201cWe will not believe you until we see Allah openly.\u201d Allah became angry at this insolence and boldness, and the thunderbolt seized them while they were looking. And they realized that they could not bear this thunderbolt which Allah had created \u2014 so how could they bear the light of Allah! Mūsā called upon his Lord and said: \u201cMy Lord, if You had willed, You could have destroyed them before, and me as well \u2014 would You destroy us for what the foolish among us have done?\u201d And Allah answered his prayer and raised them after their death, that they might be grateful.",
      sentences: [
        {
          id: 'qs-v7-c14-025',
          ar: 'وَلَمَّا وَصَلَ مُوسَى إِلَى السَّبْعِينَ رَجُلًا مِنْ قَوْمِهِ وَأَخْبَرَهُمْ بِمَا أَنْعَمَ اللَّهُ عَلَيْهِ قَالُوا فِي وَقَاحَةٍ وَجَسَارَةٍ:',
          en: 'And when Mūsā reached the seventy men of his people and told them what Allah had bestowed upon him, they said, insolently and audaciously:',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'وَصَلَ', lemma: 'وَصَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to reach' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'السَّبْعِينَ', lemma: 'سَبْعِين', pos: 'num', features: 'def.gen', gloss: 'the seventy' },
            { surface: 'رَجُلًا', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', gloss: 'men' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
            { surface: 'وَأَخْبَرَهُمْ', lemma: 'أَخْبَرَ', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to tell, inform; and told them' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of what' },
            { surface: 'أَنْعَمَ', lemma: 'أَنْعَمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to bestow favor; had bestowed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; they said' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, with' },
            { surface: 'وَقَاحَةٍ', lemma: 'وَقَاحَة', pos: 'noun', features: 'indef.gen', root: 'و ق ح', gloss: 'insolence' },
            { surface: 'وَجَسَارَةٍ', lemma: 'جَسَارَة', pos: 'noun', features: 'conj+indef.gen', root: 'ج س ر', gloss: 'and audacity' },
          ],
        },
        {
          // al-Baqarah 2:55.
          id: 'qs-v7-c14-026',
          ar: '\u{FD3E}لَن نُّؤْمِنَ لَكَ حَتَّىٰ نَرَى ٱللَّهَ جَهْرَةً\u{FD3F}.',
          en: '"We will not believe you until we see Allah openly."',
          tokens: [
            { surface: 'لَن', lemma: 'لَنْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'نُّؤْمِنَ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.1p', gloss: 'to believe; we believe' },
            { surface: 'لَكَ', lemma: 'لِ', pos: 'prep', features: 'prep+2ms', gloss: 'you' },
            { surface: 'حَتَّىٰ', lemma: 'حَتَّى', pos: 'prep', features: 'prep', gloss: 'until' },
            { surface: 'نَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.1p', gloss: 'to see; we see' },
            { surface: 'ٱللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'جَهْرَةً', lemma: 'جَهْرَة', pos: 'noun', features: 'indef.acc', root: 'ج ه ر', gloss: 'openly, plainly' },
          ],
        },
        {
          id: 'qs-v7-c14-027',
          ar: 'غَضِبَ اللَّهُ عَلَى هَذِهِ الْوَقَاحَةِ وَالْجُرْأَةِ فَأَخَذَتْهُمُ الصَّاعِقَةُ وَهُمْ يَنْظُرُونَ.',
          en: 'Allah became angry at this insolence and boldness, and the thunderbolt seized them while they were looking.',
          tokens: [
            { surface: 'غَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to become angry' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْوَقَاحَةِ', lemma: 'وَقَاحَة', pos: 'noun', features: 'def.gen', gloss: 'the insolence' },
            { surface: 'وَالْجُرْأَةِ', lemma: 'جُرْأَة', pos: 'noun', features: 'conj+def.gen', root: 'ج ر أ', gloss: 'and the boldness' },
            { surface: 'فَأَخَذَتْهُمُ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+perf.3fs+3mp', gloss: 'to seize; and seized them' },
            { surface: 'الصَّاعِقَةُ', lemma: 'صَاعِقَة', pos: 'noun', features: 'def.nom', gloss: 'the thunderbolt' },
            { surface: 'وَهُمْ', lemma: 'هُمْ', pos: 'noun', features: 'conj+3mp', gloss: 'while they' },
            { surface: 'يَنْظُرُونَ', lemma: 'نَظَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'were looking' },
          ],
        },
        {
          id: 'qs-v7-c14-028',
          ar: 'وَرَأَوْا أَنَّهُمْ لَا يَتَحَمَّلُونَ هَذِهِ الصَّاعِقَةَ الَّتِي خَلَقَهَا اللَّهُ فَكَيْفَ يَتَحَمَّلُونَ نُورَ اللَّهِ!',
          en: 'And they realized that they could not bear this thunderbolt which Allah had created \u2014 so how could they bear the light of Allah!',
          tokens: [
            { surface: 'وَرَأَوْا', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to see, realize; and they realized' },
            { surface: 'أَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'part+3mp', gloss: 'that they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتَحَمَّلُونَ', lemma: 'تَحَمَّلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to bear, endure' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الصَّاعِقَةَ', lemma: 'صَاعِقَة', pos: 'noun', features: 'def.acc', gloss: 'the thunderbolt' },
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.f', gloss: 'which' },
            { surface: 'خَلَقَهَا', lemma: 'خَلَقَ', pos: 'verb', features: 'perf.3ms+3fs', gloss: 'to create; created it' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'فَكَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'conj+part', gloss: 'so how' },
            { surface: 'يَتَحَمَّلُونَ', lemma: 'تَحَمَّلَ', pos: 'verb', features: 'impf.3mp', gloss: 'bear' },
            { surface: 'نُورَ', lemma: 'نُور', pos: 'noun', features: 'acc.constr', gloss: 'the light of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c14-029',
          ar: 'وَدَعَا مُوسَى رَبَّهُ وَقَالَ:',
          en: 'Mūsā called upon his Lord and said:',
          tokens: [
            { surface: 'وَدَعَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to call upon; and called upon' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'رَبَّهُ', lemma: 'رَبّ', pos: 'noun', features: 'acc+3ms', gloss: 'his Lord' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
          ],
        },
        {
          // al-A'rāf 7:155.
          id: 'qs-v7-c14-030',
          ar: '\u{FD3E}رَبِّ لَوْ شِئْتَ أَهْلَكْتَهُم مِّن قَبْلُ وَإِيَّـٰىَ أَتُهْلِكُنَا بِمَا فَعَلَ ٱلسُّفَهَآءُ مِنَّآ\u{FD3F}؟!',
          en: '"My Lord, if You had willed, You could have destroyed them before, and me as well \u2014 would You destroy us for what the foolish among us have done?"',
          tokens: [
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
            { surface: 'لَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'شِئْتَ', lemma: 'شَاءَ', pos: 'verb', features: 'perf.2ms', gloss: 'to will; You had willed' },
            { surface: 'أَهْلَكْتَهُم', lemma: 'أَهْلَكَ', pos: 'verb', features: 'perf.2ms+3mp', gloss: 'to destroy; You destroyed them' },
            { surface: 'مِّن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَبْلُ', lemma: 'قَبْلَ', pos: 'adv', features: 'adv', gloss: 'before' },
            { surface: 'وَإِيَّـٰىَ', lemma: 'إِيَّا', pos: 'noun', features: 'conj+1s', gloss: 'and me' },
            { surface: 'أَتُهْلِكُنَا', lemma: 'أَهْلَكَ', pos: 'verb', features: 'part+impf.2ms+1p', gloss: 'would You destroy us?' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'for what' },
            { surface: 'فَعَلَ', lemma: 'فَعَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to do; have done' },
            { surface: 'ٱلسُّفَهَآءُ', lemma: 'سَفِيه', pos: 'noun', features: 'pl.def.nom', root: 'س ف ه', gloss: 'the foolish' },
            { surface: 'مِنَّآ', lemma: 'مِنْ', pos: 'prep', features: 'prep+1p', gloss: 'among us' },
          ],
        },
        {
          id: 'qs-v7-c14-031',
          ar: 'وَأَجَابَ اللَّهُ دُعَاءَهُ وَبَعَثَهُمْ مِنْ بَعْدِ مَوْتِهِمْ لَعَلَّهُمْ يَشْكُرُونَ.',
          en: 'And Allah answered his prayer and raised them after their death, that they might be grateful.',
          tokens: [
            { surface: 'وَأَجَابَ', lemma: 'أَجَابَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to answer; and answered' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'دُعَاءَهُ', lemma: 'دُعَاء', pos: 'noun', features: 'acc+3ms', gloss: 'his prayer' },
            { surface: 'وَبَعَثَهُمْ', lemma: 'بَعَثَ', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to raise up; and raised them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'بَعْدِ', lemma: 'بَعْدَ', pos: 'noun', features: 'constr.gen', gloss: 'after' },
            { surface: 'مَوْتِهِمْ', lemma: 'مَوْت', pos: 'noun', features: 'gen+3mp', gloss: 'their death' },
            { surface: 'لَعَلَّهُمْ', lemma: 'لَعَلَّ', pos: 'part', features: 'part+3mp', gloss: 'that they might' },
            { surface: 'يَشْكُرُونَ', lemma: 'شَكَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to be thankful' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا طَلَبَ السَّبْعُونَ رَجُلاً مِنَ اللَّهِ فَغَضِبَ اللَّهُ لِذَلِكَ؟',
          options: ['أَنْ يَرَوُا اللَّهَ جَهْرَةً', 'أَنْ يُنْزِلَ عَلَيْهِمُ الطَّعَامَ وَالشَّرَابَ', 'أَنْ يُعِيدَهُمْ إِلَى مِصْرَ فَوْراً'],
          answer: 0,
          qEn: 'What did the seventy men demand of Allah, for which Allah became angry with them?',
          optionsEn: ['To see Allah openly', 'That He send down food and drink upon them', 'That He return them to Egypt at once'],
        },
        {
          q: 'مَاذَا فَعَلَ اللَّهُ بِالسَّبْعِينَ رَجُلاً بَعْدَ أَنْ دَعَا مُوسَى رَبَّهُ؟',
          options: ['أَجَابَ دُعَاءَهُ وَبَعَثَهُمْ مِنْ بَعْدِ مَوْتِهِمْ', 'تَرَكَهُمْ أَمْوَاتاً إِلَى الْأَبَدِ', 'عَاقَبَ مُوسَى بَدَلاً مِنْهُمْ'],
          answer: 0,
          qEn: "What did Allah do with the seventy men after Mūsā prayed to his Lord?",
          optionsEn: ['He answered his prayer and raised them after their death', 'He left them dead forever', 'He punished Mūsā instead of them'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: 'اللَّهُ مُوسَى أَنْ يَتَطَهَّرَ وَأَنْ يَصُومَ ثَلَاثِينَ يَوْماً.',
        en: 'Allah commanded Mūsā to purify himself and to fast thirty days.',
        options: ['أَمَرَ', 'أَمَرَتْ', 'أَمَرُوا', 'يَأْمُرُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular perfect -- matches اللَّهُ, the taught pattern.',
          '3rd feminine singular -- wrong gender.',
          '3rd masculine plural -- wrong number.',
          'Imperfect -- wrong tense; the narration is in the past.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَمَرَهُ اللَّهُ أَنْ',
        post: 'مِيقَاتَ رَبِّهِ أَرْبَعِينَ لَيْلَةً.',
        en: "And Allah commanded him to complete his Lord's appointed time, forty nights.",
        options: ['يُتِمَّ', 'يُتِمُّ', 'تُتِمَّ', 'يُتِمُّونَ'],
        answer: 0,
        rationales: [
          'Subjunctive after أَنْ -- matches the taught construction.',
          'Indicative form -- wrong mood after أَنْ.',
          'Feminine -- wrong gender; the subject is مُوسَى.',
          'Plural -- wrong number; the subject is singular.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَمَرَهُ اللَّهُ أَنْ يَأْخُذَهَا بِقُوَّةٍ وَ',
        post: 'قَوْمَهُ أَنْ يَأْخُذُوا بِأَحْسَنِهَا.',
        en: 'And Allah commanded him to hold it firmly, and to command his people to take the best of it.',
        options: ['يَأْمُرَ', 'يَأْمُرُ', 'أَمَرَ', 'يَأْمُرُونَ'],
        answer: 0,
        rationales: [
          'Subjunctive after أَنْ, coordinated with يَأْخُذَهَا -- matches the taught construction.',
          'Indicative -- wrong mood after أَنْ.',
          'Perfect -- wrong tense here.',
          'Plural -- wrong number; the subject is مُوسَى.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَمَرَ اللَّهُ مُوسَى أَنْ يَتَطَهَّرَ',
        pre: '',
        post: 'اللَّهُ مُوسَى أَنْ يَتَطَهَّرَ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['أَمَرْتَ', 'أَمَرَ', 'أَمَرْتُ', 'أَمَرُوا'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'أَمَرَ اللَّهُ مُوسَى أَنْ يَتَطَهَّرَ',
        pre: '',
        post: 'اللَّهُ مُوسَى أَنْ يَتَطَهَّرَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['أَمَرَتْ', 'أَمَرَ', 'أَمَرْتَ', 'أَمَرُوا'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you.',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'أَمَرَ اللَّهُ مُوسَى أَنْ يَتَطَهَّرَ',
        pre: '',
        post: 'اللَّهُ مُوسَى أَنْ يَتَطَهَّرَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['أَمَرُوا', 'أَمَرَ', 'أَمَرَتْ', 'أَمَرْتَ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '3rd feminine singular -- she.',
          '2nd masculine singular -- you.',
        ],
      },
    ],
  },
};

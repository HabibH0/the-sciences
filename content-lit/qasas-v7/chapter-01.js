// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus; printed Arabic volume title not verified against a scan by this
// session -- left undescribed here rather than guessed), chapter 1 --
// ١ - مُؤْمِنُ آلِ فِرْعَوْنَ ("The Believer of Pharaoh's
// Household"). Pages 160-163, ending just before the ch2 heading box that
// appears partway down page 163 (placed here after the closing Qur'anic
// exhortation ﴿...أَهْدِكُمْ سَبِيلَ الرَّشَادِ﴾ -- Ghāfir 40:38 -- which reads as
// the natural close of the man's public speech; ch2 "نصيحة الرجل" then
// shifts register from direct speech to the narrator's own exposition of
// the man's insight, beginning "وَعَلِمَ الرَّجُلُ الرَّشِيدُ..."). Transcribed
// by hand from the scan (vision OCR) against ../CHAPTER-FORMAT.md and
// QASAS_AGENT_BRIEF.md. One correction applied against the scan: page 163's
// transcript literally read "وَيَذَلَ لَهُمْ وُدَّهُ" (not a word); corrected to
// "وَبَذَلَ لَهُمْ وُدَّهُ" (بَذَلَ, "to give/expend freely" -- already-taught
// lemma, qiraah-v2 ch35).
//
// This chapter is built substantially from an extended, only lightly
// paraphrased quotation of the believing man's speech in Sūrat Ghāfir
// (40:28-38), with one embedded cross-reference to Sūrat ʿAbasa (80:34-37)
// describing the Day of Judgment. Per the current task brief's explicit
// guidance (superseding the fragment-into-2-token-units workaround used in
// some earlier-authored volumes of this corpus, e.g. qasas-v11/ch3): every
// quotation is transcribed in full and tokenized normally, without
// artificial fragmentation. Long ayāt (most of them here, 10-23 tokens) are
// automatically safe from the build stage's 3-9 token window. A handful of
// SHORT Qur'anic quotations (qs-v7-c01-006, 008, 019, 020, 022, 045) fall
// inside that window and carry a case-marked non-proper word -- these are
// left as ordinary sentences per instruction; being pulled into the
// ordinary build/decoy pool is an accepted limitation, not something
// engineered around. Verse-end pause/number glyphs printed in the source
// (e.g. "(٣١)", "(٣٤)") are not transcribed into any `ar` string or
// tokenized, matching this corpus's established convention (see qasas-v11
// ch3's header) -- noted here instead: quotations are drawn from Ghāfir
// 40:28, 29, 30-31, 32-33, 34, 38, plus ʿAbasa 80:34-37, Az-Zukhruf 43:67,
// and Al-Muʾminūn 23:101 (the last three are the narrator's own inserted
// cross-references illustrating "the Day of Resurrection", not part of the
// believing man's Ghāfir speech itself).
//
// `workshop.cloze`/`workshop.shift` are built only from the narrator's own
// connective prose (وَقَالَ / وَخَوَّفَهُمُ / وَأَرَادَ / وَوَعَظَ + الرَّجُلُ الرَّشِيدُ),
// never from a Qur'anic quotation, per instruction.
//
// Judgment calls / things flagged for a second pair of eyes:
//   -- Several extremely common words (يَوْم "day", هَذَا/هَذِهِ "this", ذَلِكَ
//      "that", جَاءَ "to come") do not appear anywhere in the supplied
//      shared-lexicon export, despite being used unflagged (not in
//      newWords) from the corpus's earliest chapters onward -- e.g.
//      qasas-v1/chapter-04.js tags 'يَوْمُ'/'يَوْم' and 'جَاءَ'/'to come' in its
//      own tokens without listing either in that chapter's newWords, and
//      qasas-v3/chapter-01.js's own header cites هَذِهِ as already taught in
//      qasas-v1 ch1. Treated here as lexicon.txt export gaps rather than
//      genuinely new vocabulary, and NOT added to newWords -- flagging the
//      inference rather than asserting it silently.
//   -- يُوسُف (Yūsuf) is likewise absent from the lexicon export despite
//      being the title character of the already-transcribed qasas-v2
//      volume and used with pos:'proper' unflagged from that volume's own
//      chapter 1 onward. Treated as already known (not a "clearly central"
//      proper noun of *this* story per the task's stated exception, which
//      names only مُوسَى and فِرْعَوْن), not re-taught here.
//   -- سَكْرَة ("a stupor/spell of intoxication", pattern فَعْلَة) is tagged
//      new despite the adjective سَكْرَان ("drunk") being already taught
//      (qiraah-v2 ch66) -- different derivational pattern/POS, judged
//      distinct enough to gloss. سُكَارَى in ch2 (plural of سَكْرَان, not of
//      سَكْرَة) reuses the already-taught adjective's lemma.
//   -- عَاد (the destroyed nation ʿĀd, qs-v7-c01-015) is tagged new as a
//      proper noun despite the verb عَادَ ("to return") already being
//      taught (qasas-v1 ch14) under the identical consonant skeleton --
//      different word entirely, flagging the homograph rather than
//      silently reusing the verb's lemma.
//   -- حَقَّ قَدْرِهَا / قَدْرَهُ (qs-v7-c01-030, 032): قَدَّرَ (form II, "to
//      value, estimate") and قَدَرَ (form I, reused for تَقْدِرُوهُ "you
//      valued") are both already-taught lemmas (qiraah-v2 ch56;
//      qasas-v1 ch5); the noun قَدْر ("worth, due measure") is tagged new
//      as a distinct nominal lemma from either verb.
//   -- أَرَى (qs-v7-c01-013, "I show", form IV causative of رَأَى) is tagged
//      new and kept distinct from the already-taught رَأَى ("to see",
//      qasas-v1 ch2) and from هَدَى ("to guide", qasas-v1 ch8, reused
//      as-is for أَهْدِيكُمْ/أَهْدِكُمْ's causative sense in qs-v7-c01-013/045).
//   -- مَالَهُمْ (qs-v7-c01-025, Nadwī's own prose, printed with no internal
//      space unlike the later verbatim Qur'anic "مَا لَكُم" at
//      qs-v7-c01-027) is kept as ONE token to preserve exact `ar`
//      reconstruction, tagged lemma 'مَا' with a compound features string
//      ('neg+prep.3mp') that has no single clean precedent in the format
//      doc -- flagging this fusion rather than silently inventing a rule.
//   -- تَنَادٍ (qs-v7-c01-027, "the Mutual Calling", Ghāfir 40:32's own name
//      for the Day of Judgment) and هَادٍ ("a guide", active participle)
//      are each given their own new lemma entry despite being Qur'anic
//      hapax-type forms in this passage, since the learner will want them
//      glossed.
//
// Shared lexicon check (grepped against the supplied lexicon.txt export):
// لَمَّا (qasas-v1 ch7)، أَرَادَ (qasas-v1 ch5)، أَنْ (qasas-v1 ch5)، قَتَلَ
// (qasas-v1 ch10)، قَامَ (qasas-v2 ch7)، رَجُل (qasas-v1 ch1)، مِنْ، آل
// (qasas-v2 ch1)، إِيمَان (qiraah-v2 ch45)، قَالَ، رَبّ (qasas-v1 ch7)، قَدْ
// (qasas-v2 ch1)، جَاءَ (bedrock, see note above)، رَشِيد (qasas-v1 ch2)،
// تَعَرَّضَ (qiraah-v2 ch47)، آذَى (qiraah-v2 ch52)، إِذَا (qasas-v1 ch9)، لَمْ
// (qasas-v2 ch4)، آمَنَ (qasas-v3 ch14)، تَرَكَ (qasas-v1 ch10)، سَبِيل
// (qasas-v2 ch20)، إِنْ (qasas-v1 ch14)، كَانَ، كَاذِب (qasas-v2 ch8)، عَلَى،
// كَذِب (qasas-v2 ch5)، وَقَعَ (qasas-v2 ch24)، نَبِيّ (qasas-v1 ch8)، لِ،
// صَادِق (qasas-v1 ch14)، أَصَابَ (qiراah-v2 ch34/52)، بَعْض (qasas-v2 ch2)،
// الَّذِي (qasas-v1 ch9)، وَعَدَ (qasas-v3 ch17)، يَا، أَخ (qiraah-v1 ch26)،
// لَا، مُلْك (qasas-v2 ch11)، قُوَّة (qiraah-v2 ch46)، جُنْد->new (see
// newWords)، قَوْم (qasas-v1 ch3/8)، ظَاهِر (qiraah-v2 ch46)، فِي، أَرْض
// (qasas-v1 ch13)، نَصَرَ (qasas-v1 ch6)، بَأْس (qiraah-v2 ch34)، اللَّه،
// جَوَاب (qasas-v1 ch6)، إِلَّا (qasas-v1 ch10)، رَأَى (qasas-v1 ch2)، ظَالِم
// (qasas-v1 ch10)، مِثْل (qasas-v2 ch2)، حِزْب (qiraah-v2 ch35)، نُوح
// (qasas-v3 ch11)، بَعْدَ، ظُلْم (qasas-v2 ch20)، عَبْد (qasas-v2 ch9)، خَافَ
// (qasas-v1 ch10)، قِيَامَة (qasas-v3 ch20)، فَرَّ (qasas-v3 ch19)، مَرْء
// (qiraah-v2 ch69)، أُمّ (qasas-v1 ch13)، أَب (qasas-v1 ch3)، اِبْن
// (qasas-v1 ch14)، كُلّ (qasas-v1 ch10)، أَغْنَى->new, خَلِيل (qasas-v1
// ch8)، اِتَّقَى (qasas-v2 ch22)، نَسَب (qasas-v3 ch21)، بَيْنَ (qasas-v3
// ch20)، تَسَاءَلَ->new, نَادَى (qasas-v2 ch7)، مَلِك (qasas-v1 ch10)، وَاحِد
// (qasas-v2 ch11)، قَهَّار (qasas-v2 ch11)، فَزِعَ (qiraah-v2 ch57)، نَاس،
// صَرَخَ (qiraah-v2 ch50)، مُدْبِر (qiraah-v2 ch37)، عَاصِم (qasas-v3 ch20)،
// وَهَبَ (qiraah-v2 ch71)، عَرَفَ (qasas-v1 ch2)، فَضْل (qasas-v2 ch11)،
// قَدَّرَ (qiraah-v2 ch56)، حَقّ (qasas-v2 ch9)، ذَهَبَ (qasas-v1 ch11)،
// تَأَسَّفَ (qasas-v1 ch5/11)، يُوسُف (bedrock, see note above)، سَلام
// (qasas-v1 ch6)، قَدَرَ (qasas-v1 ch5)، مَاتَ (qasas-v1 ch7)، سُبْحَانَ
// (qasas-v3 ch1)، هَذَا/هَذِهِ/ذَلِكَ (bedrock, see note above)، لَنْ (qasas-v2
// ch19)، زَالَ (qasas-v2 ch21)، شَكّ (qasas-v2 ch22)، هَلَكَ (qasas-v2 ch22)،
// رَسُول (qasas-v2 ch15)، قَبْلُ (qiraah-v2 ch38)، اِتَّبَعَ (qasas-v2 ch11)،
// هَدَى (qasas-v1 ch8)، نَدِمَ->new, وَعَظَ (qasas-v3 ch21)، بَذَلَ (qiraah-v2
// ch35)، وُدّ (qasas-v3 ch7)، نَصِيحَة (qasas-v3 ch16)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 33 new words (فِرْعَوْن، مُوسَى، كَتَمَ، بَيِّنَة، خَلَّى، وَيْل، اِغْتَرَّ، جُنْد،
// حَذَّرَ، سُوء، عَاقِبَة، مَصِير، دَأْب، عَاد، ثَمُود، خَوَّفَ، صَاحِبَة، أَغْنَى، جَبَّار،
// وَلَّى، تَنَادٍ، أَضَلَّ، هَادٍ، نِعْمَة، قَدْر، صَلاة، بَعَثَ، نَدِمَ، أَرَى، رَشَاد،
// يَوْمَئِذٍ، أَتَى، فَعَلَ) -- unusually high, but this chapter is built
// substantially from Ghāfir's extended quotation, which is genuinely
// vocabulary-dense.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch1',
  title: { ar: 'مُؤْمِنُ آلِ فِرْعَوْنَ', en: "The Believer of Pharaoh's Household" },
  newWords: [
    'فِرْعَوْن', 'مُوسَى', 'كَتَمَ', 'بَيِّنَة', 'خَلَّى', 'وَيْل', 'اِغْتَرَّ', 'جُنْد',
    'حَذَّرَ', 'سُوء', 'عَاقِبَة', 'مَصِير', 'دَأْب', 'عَاد', 'ثَمُود', 'خَوَّفَ',
    'صَاحِبَة', 'أَغْنَى', 'جَبَّار', 'وَلَّى', 'تَنَادٍ', 'أَضَلَّ', 'هَادٍ', 'نِعْمَة',
    'قَدْر', 'صَلاة', 'بَعَثَ', 'نَدِمَ', 'أَرَى', 'رَشَاد', 'يَوْمَئِذٍ', 'أَتَى', 'فَعَلَ',
  ],
  lemmas: {
    'فِرْعَوْن': { gloss: 'Pharaoh' },
    'مُوسَى': { gloss: 'Mūsā (Moses)' },
    'كَتَمَ': { gloss: 'to conceal, hide' },
    'بَيِّنَة': { gloss: 'clear proof, evidence' },
    'خَلَّى': { gloss: 'to leave, let go, vacate' },
    'وَيْل': { gloss: 'woe' },
    'اِغْتَرَّ': { gloss: 'to be deceived, deluded (by)' },
    'جُنْد': { gloss: 'troops, army (pl. جُنُود)' },
    'حَذَّرَ': { gloss: 'to warn' },
    'سُوء': { gloss: 'evil, harm' },
    'عَاقِبَة': { gloss: 'outcome, consequence, end' },
    'مَصِير': { gloss: 'fate, destiny' },
    'دَأْب': { gloss: 'habit, wont, way' },
    'عَاد': { gloss: 'ʿĀd (an ancient destroyed nation)' },
    'ثَمُود': { gloss: 'Thamūd (an ancient destroyed nation)' },
    'خَوَّفَ': { gloss: 'to frighten, warn' },
    'صَاحِبَة': { gloss: 'female companion, wife' },
    'أَغْنَى': { gloss: 'to avail, suffice, benefit' },
    'جَبَّار': { gloss: 'tyrant, compeller, almighty' },
    'وَلَّى': { gloss: 'to turn away, flee' },
    'تَنَادٍ': { gloss: 'mutual calling out (name of the Day of Judgment)' },
    'أَضَلَّ': { gloss: 'to lead astray' },
    'هَادٍ': { gloss: 'guide' },
    'نِعْمَة': { gloss: 'blessing, favor' },
    'قَدْر': { gloss: 'measure, worth, due' },
    'صَلاة': { gloss: 'prayer, blessing' },
    'بَعَثَ': { gloss: 'to send, raise up, resurrect' },
    'نَدِمَ': { gloss: 'to regret' },
    'أَرَى': { gloss: 'to show, cause to see' },
    'رَشَاد': { gloss: 'right conduct, guidance' },
    'يَوْمَئِذٍ': { gloss: 'that day, on that day' },
    'أَتَى': { gloss: 'to come' },
    'فَعَلَ': { gloss: 'to do, make' },
  },
  paragraphs: [
    {
      en: "When Pharaoh wanted to kill Mūsā, a man from Pharaoh's household arose who concealed his faith, and said: 'Will you kill a man for saying, My Lord is Allah, when he has brought you clear proofs from your Lord?' The wise man from Pharaoh's household said: 'Why do you harass Mūsā, and why do you harm him? If you will not believe him, then leave him and his affair alone, and let his way go free. If he is lying, his lie is upon himself; but if you harm him, and assail him, and he turns out to be a prophet, then woe to you! And if he is truthful, some of what he promises you will befall you.'",
      sentences: [
        {
          id: 'qs-v7-c01-001',
          ar: 'وَلَمَّا أَرَادَ فِرْعَوْنُ أَنْ يَقْتُلَ مُوسَى قَامَ رَجُلٌ مِنْ آلِ فِرْعَوْنَ يَكْتُمُ إِيمَانَهُ وَقَالَ:',
          en: "When Pharaoh wanted to kill Mūsā, a man from Pharaoh's household arose who concealed his faith, and said:",
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', root: 'ر و د', gloss: 'to want; wanted' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَقْتُلَ', lemma: 'قَتَلَ', pos: 'verb', features: 'impf.3ms', root: 'ق ت ل', gloss: 'to kill' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'قَامَ', lemma: 'قَامَ', pos: 'verb', features: 'perf.3ms', root: 'ق و م', gloss: 'to stand, arise; arose' },
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', root: 'ر ج ل', gloss: 'a man' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'آلِ', lemma: 'آل', pos: 'noun', features: 'constr.gen', root: 'ا و ل', gloss: 'the household of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'يَكْتُمُ', lemma: 'كَتَمَ', pos: 'verb', features: 'impf.3ms', root: 'ك ت م', gloss: 'to conceal; concealing' },
            { surface: 'إِيمَانَهُ', lemma: 'إِيمَان', pos: 'noun', features: 'acc+3ms', root: 'ا م ن', gloss: 'his faith' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
          ],
        },
        {
          // Ghāfir 40:28a.
          id: 'qs-v7-c01-002',
          ar: '﴿أَتَقْتُلُونَ رَجُلًا أَن يَقُولَ رَبِّيَ اللَّهُ وَقَدْ جَآءَكُم بِٱلْبَيِّنَٰتِ مِن رَّبِّكُمْ﴾.',
          en: '"Will you kill a man for saying, My Lord is Allah, when he has brought you clear proofs from your Lord?"',
          tokens: [
            { surface: 'أَتَقْتُلُونَ', lemma: 'قَتَلَ', pos: 'verb', features: 'part+impf.2mp', root: 'ق ت ل', gloss: 'to kill; will you kill?' },
            { surface: 'رَجُلًا', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', root: 'ر ج ل', gloss: 'a man' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'for, that' },
            { surface: 'يَقُولَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', root: 'ق و ل', gloss: 'to say; saying' },
            { surface: 'رَبِّيَ', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', root: 'ر ب ب', gloss: 'my Lord' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'when indeed' },
            { surface: 'جَآءَكُم', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms+2mp', root: 'ج ي أ', gloss: 'to come; has come to you' },
            { surface: 'بِٱلْبَيِّنَٰتِ', lemma: 'بَيِّنَة', pos: 'noun', features: 'prep+pl.def.gen', root: 'ب ي ن', gloss: 'with the clear proofs' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'رَّبِّكُمْ', lemma: 'رَبّ', pos: 'noun', features: 'gen+2mp', root: 'ر ب ب', gloss: 'your Lord' },
          ],
        },
        {
          id: 'qs-v7-c01-003',
          ar: 'وَقَالَ الرَّجُلُ الرَّشِيدُ مِنْ آلِ فِرْعَوْنَ:',
          en: "The wise man from Pharaoh's household said:",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
            { surface: 'الرَّشِيدُ', lemma: 'رَشِيد', pos: 'adj', features: 'def.nom', root: 'ر ش د', gloss: 'the wise, rightly-guided' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'آلِ', lemma: 'آل', pos: 'noun', features: 'constr.gen', root: 'ا و ل', gloss: 'the household of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
          ],
        },
        {
          id: 'qs-v7-c01-004',
          ar: 'لِمَاذَا تَتَعَرَّضُونَ لِمُوسَى وَلِمَاذَا تُؤْذُونَهُ؟',
          en: 'Why do you harass Mūsā, and why do you harm him?',
          tokens: [
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'part', features: 'part', gloss: 'why' },
            { surface: 'تَتَعَرَّضُونَ', lemma: 'تَعَرَّضَ', pos: 'verb', features: 'impf.2mp', root: 'ع ر ض', gloss: 'to expose oneself to, harass' },
            { surface: 'لِمُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'prep+gen', gloss: 'to Mūsā' },
            { surface: 'وَلِمَاذَا', lemma: 'لِمَاذَا', pos: 'part', features: 'conj+part', gloss: 'and why' },
            { surface: 'تُؤْذُونَهُ', lemma: 'آذَى', pos: 'verb', features: 'impf.2mp+3ms', root: 'ا ذ ي', gloss: 'to harm; do you harm him' },
          ],
        },
        {
          id: 'qs-v7-c01-005',
          ar: 'إِذَا لَمْ تُؤْمِنُوا بِهِ فَاتْرُكُوهُ وَشَأْنَهُ وَخَلُّوا سَبِيلَهُ.',
          en: 'If you will not believe him, then leave him and his affair, and let his way go free.',
          tokens: [
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُؤْمِنُوا', lemma: 'آمَنَ', pos: 'verb', features: 'impf.2mp', root: 'ا م ن', gloss: 'to believe' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'in him' },
            { surface: 'فَاتْرُكُوهُ', lemma: 'تَرَكَ', pos: 'verb', features: 'conj+imp.2mp+3ms', root: 'ت ر ك', gloss: 'to leave; then leave him' },
            { surface: 'وَشَأْنَهُ', lemma: 'شَأْن', pos: 'noun', features: 'conj+acc+3ms', root: 'ش أ ن', gloss: 'and his affair' },
            { surface: 'وَخَلُّوا', lemma: 'خَلَّى', pos: 'verb', features: 'conj+imp.2mp', root: 'خ ل ي', gloss: 'to leave, let go; and let go' },
            { surface: 'سَبِيلَهُ', lemma: 'سَبِيل', pos: 'noun', features: 'acc+3ms', root: 'س ب ل', gloss: 'his way' },
          ],
        },
        {
          // Ghāfir 40:28b.
          id: 'qs-v7-c01-006',
          ar: '﴿وَإِن يَكُ كَٰذِبًا فَعَلَيْهِ كَذِبُهُ﴾.',
          en: '"If he is lying, his lie is upon himself."',
          tokens: [
            { surface: 'وَإِن', lemma: 'إِنْ', pos: 'conj', features: 'conj+conj', gloss: 'and if' },
            { surface: 'يَكُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; is' },
            { surface: 'كَٰذِبًا', lemma: 'كَاذِب', pos: 'adj', features: 'indef.acc', root: 'ك ذ ب', gloss: 'lying, a liar' },
            { surface: 'فَعَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'conj+prep+3ms', gloss: 'then upon him' },
            { surface: 'كَذِبُهُ', lemma: 'كَذِب', pos: 'noun', features: 'nom+3ms', root: 'ك ذ ب', gloss: 'his lie' },
          ],
        },
        {
          id: 'qs-v7-c01-007',
          ar: 'وَإِذَا آذَيْتُمُوهُ وَوَقَعْتُمْ بِهِ وَكَانَ نَبِيّاً فَلَكُمُ الْوَيْلُ.',
          en: 'And if you harm him, and assail him, and he turns out to be a prophet, then woe to you!',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and if' },
            { surface: 'آذَيْتُمُوهُ', lemma: 'آذَى', pos: 'verb', features: 'perf.2mp+3ms', root: 'ا ذ ي', gloss: 'to harm; you harmed him' },
            { surface: 'وَوَقَعْتُمْ', lemma: 'وَقَعَ', pos: 'verb', features: 'conj+perf.2mp', root: 'و ق ع', gloss: 'to fall upon, assail; and you assailed' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'him' },
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and he was' },
            { surface: 'نَبِيّاً', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.acc', root: 'ن ب أ', gloss: 'a prophet' },
            { surface: 'فَلَكُمُ', lemma: 'لِ', pos: 'prep', features: 'conj+prep+2mp', gloss: 'then to you' },
            { surface: 'الْوَيْلُ', lemma: 'وَيْل', pos: 'noun', features: 'def.nom', root: 'و ي ل', gloss: 'the woe' },
          ],
        },
        {
          // Ghāfir 40:28c.
          id: 'qs-v7-c01-008',
          ar: '﴿وَإِن يَكُ صَادِقًا يُصِبْكُم بَعْضُ ٱلَّذِى يَعِدُكُمْ﴾.',
          en: '"And if he is truthful, some of what he promises you will befall you."',
          tokens: [
            { surface: 'وَإِن', lemma: 'إِنْ', pos: 'conj', features: 'conj+conj', gloss: 'and if' },
            { surface: 'يَكُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; is' },
            { surface: 'صَادِقًا', lemma: 'صَادِق', pos: 'adj', features: 'indef.acc', root: 'ص د ق', gloss: 'truthful' },
            { surface: 'يُصِبْكُم', lemma: 'أَصَابَ', pos: 'verb', features: 'impf.3ms+2mp', root: 'ص و ب', gloss: 'to strike, befall; will befall you' },
            { surface: 'بَعْضُ', lemma: 'بَعْض', pos: 'noun', features: 'constr.nom', root: 'ب ع ض', gloss: 'some of' },
            { surface: 'ٱلَّذِى', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'that which' },
            { surface: 'يَعِدُكُمْ', lemma: 'وَعَدَ', pos: 'verb', features: 'impf.3ms+2mp', root: 'و ع د', gloss: 'to promise; he promises you' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ قَامَ لِيُدَافِعَ عَنْ مُوسَى أَمَامَ فِرْعَوْنَ؟',
          options: ['رَجُلٌ رَشِيدٌ مِنْ آلِ فِرْعَوْنَ يَكْتُمُ إِيمَانَهُ', 'أَخُو مُوسَى', 'أَحَدُ السَّحَرَةِ'],
          answer: 0,
          qEn: 'Who stood up to defend Mūsā before Pharaoh?',
          optionsEn: ["A wise man from Pharaoh's household who concealed his faith", "Mūsā's brother", 'One of the magicians'],
        },
        {
          q: 'مَاذَا قَالَ الرَّجُلُ الرَّشِيدُ لِقَوْمِهِ عَنْ مُوسَى؟',
          options: ['إِذَا لَمْ تُؤْمِنُوا بِهِ فَاتْرُكُوهُ وَشَأْنَهُ', 'اُقْتُلُوهُ فَوْراً', 'لَا تَسْمَعُوا لَهُ أَبَداً'],
          answer: 0,
          qEn: "What did the wise man tell his people about Mūsā?",
          optionsEn: ['If you will not believe him, then leave him and his affair alone', 'Kill him at once', 'Never listen to him at all'],
        },
      ],
    },
    {
      en: "'O my brothers, do not be deluded by your dominion, nor be deluded by your strength and your armies! [Qur'an: O my people, yours is the kingship today, dominant in the land -- but who will help us against Allah's might, should it come upon us?]' Pharaoh's answer was to say: [Qur'an: 'I show you only what I see, and I guide you only to the way of right conduct.'] The wise man wanted to warn his people of the evil end and the fate of the wrongdoers, so he said: [Qur'an: 'O my people, I fear for you the like of the day of the [allied] factions -- the like of the fate of the people of Nūḥ, and ʿĀd, and Thamūd, and those after them; and Allah wills no injustice for His servants.']",
      sentences: [
        {
          id: 'qs-v7-c01-009',
          ar: 'وَيَا إِخْوَانِي لا تَغْتَرُّوا بِمُلْكِكُمْ،',
          en: 'O my brothers, do not be deluded by your dominion,',
          tokens: [
            { surface: 'وَيَا', lemma: 'يَا', pos: 'part', features: 'conj+part', gloss: 'and O' },
            { surface: 'إِخْوَانِي', lemma: 'أَخ', pos: 'noun', features: 'pl.nom+1s', root: 'ا خ و', gloss: 'my brothers' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَغْتَرُّوا', lemma: 'اِغْتَرَّ', pos: 'verb', features: 'impf.2mp', root: 'غ ر ر', gloss: 'to be deluded, deceived' },
            { surface: 'بِمُلْكِكُمْ', lemma: 'مُلْك', pos: 'noun', features: 'prep+gen+2mp', root: 'م ل ك', gloss: 'by your dominion' },
          ],
        },
        {
          id: 'qs-v7-c01-010',
          ar: 'وَلا تَغْتَرُّوا بِقُوَّتِكُمْ وَجُنُودِكُمْ.',
          en: 'nor be deluded by your strength and your armies.',
          tokens: [
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'تَغْتَرُّوا', lemma: 'اِغْتَرَّ', pos: 'verb', features: 'impf.2mp', root: 'غ ر ر', gloss: 'to be deluded, deceived' },
            { surface: 'بِقُوَّتِكُمْ', lemma: 'قُوَّة', pos: 'noun', features: 'prep+gen+2mp', root: 'ق و ي', gloss: 'by your strength' },
            { surface: 'وَجُنُودِكُمْ', lemma: 'جُنْد', pos: 'noun', features: 'conj+pl.gen+2mp', root: 'ج ن د', gloss: 'and your armies' },
          ],
        },
        {
          // Ghāfir 40:29a.
          id: 'qs-v7-c01-011',
          ar: '﴿يَٰقَوْمِ لَكُمُ ٱلْمُلْكُ ٱلْيَوْمَ ظَٰهِرِينَ فِى ٱلْأَرْضِ فَمَن يَنصُرُنَا مِنۢ بَأْسِ ٱللَّهِ إِن جَآءَنَا﴾!',
          en: '"O my people, yours is the kingship today, dominant in the land -- but who will help us against Allah\'s might, should it come upon us?"',
          tokens: [
            { surface: 'يَٰقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'part+gen+1s', root: 'ق و م', gloss: 'O my people' },
            { surface: 'لَكُمُ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'yours, to you' },
            { surface: 'ٱلْمُلْكُ', lemma: 'مُلْك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the kingship' },
            { surface: 'ٱلْيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'def.acc', root: 'ي و م', gloss: 'today' },
            { surface: 'ظَٰهِرِينَ', lemma: 'ظَاهِر', pos: 'adj', features: 'pl.acc', root: 'ظ ه ر', gloss: 'dominant, manifest' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ٱلْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', root: 'ا ر ض', gloss: 'the land' },
            { surface: 'فَمَن', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'so who' },
            { surface: 'يَنصُرُنَا', lemma: 'نَصَرَ', pos: 'verb', features: 'impf.3ms+1p', root: 'ن ص ر', gloss: 'to help; will help us' },
            { surface: 'مِنۢ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'بَأْسِ', lemma: 'بَأْس', pos: 'noun', features: 'constr.gen', root: 'ب أ س', gloss: 'the might of' },
            { surface: 'ٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'إِن', lemma: 'إِنْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'جَآءَنَا', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms+1p', root: 'ج ي أ', gloss: 'to come; comes to us' },
          ],
        },
        {
          id: 'qs-v7-c01-012',
          ar: 'وَكَانَ جَوَابُ فِرْعَوْنَ أَنْ قَالَ:',
          en: "Pharaoh's answer was to say:",
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'جَوَابُ', lemma: 'جَوَاب', pos: 'noun', features: 'nom.constr', root: 'ج و ب', gloss: 'the answer of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
          ],
        },
        {
          // Ghāfir 40:29b.
          id: 'qs-v7-c01-013',
          ar: '﴿مَآ أُرِيكُمْ إِلَّا مَآ أَرَىٰ وَمَآ أَهْدِيكُمْ إِلَّا سَبِيلَ ٱلرَّشَٰدِ﴾.',
          en: '"I show you only what I see, and I guide you only to the way of right conduct."',
          tokens: [
            { surface: 'مَآ', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أُرِيكُمْ', lemma: 'أَرَى', pos: 'verb', features: 'impf.1s+2mp', root: 'ر ا ي', gloss: 'to show; I show you' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, only' },
            { surface: 'مَآ', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'أَرَىٰ', lemma: 'رَأَى', pos: 'verb', features: 'impf.1s', root: 'ر أ ي', gloss: 'to see; I see' },
            { surface: 'وَمَآ', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'أَهْدِيكُمْ', lemma: 'هَدَى', pos: 'verb', features: 'impf.1s+2mp', root: 'ه د ي', gloss: 'to guide; I guide you' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, only' },
            { surface: 'سَبِيلَ', lemma: 'سَبِيل', pos: 'noun', features: 'acc.constr', root: 'س ب ل', gloss: 'the way of' },
            { surface: 'ٱلرَّشَٰدِ', lemma: 'رَشَاد', pos: 'noun', features: 'def.gen', root: 'ر ش د', gloss: 'right conduct' },
          ],
        },
        {
          id: 'qs-v7-c01-014',
          ar: 'وَأَرَادَ الرَّجُلُ الرَّشِيدُ أَنْ يُحَذِّرَ قَوْمَهُ سُوءَ الْعَاقِبَةِ وَمَصِيرَ الظَّالِمِينَ فَقَالَ:',
          en: 'The wise man wanted to warn his people of the evil end and the fate of the wrongdoers, so he said:',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'and wanted' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
            { surface: 'الرَّشِيدُ', lemma: 'رَشِيد', pos: 'adj', features: 'def.nom', root: 'ر ش د', gloss: 'the wise' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُحَذِّرَ', lemma: 'حَذَّرَ', pos: 'verb', features: 'impf.3ms', root: 'ح ذ ر', gloss: 'to warn' },
            { surface: 'قَوْمَهُ', lemma: 'قَوْم', pos: 'noun', features: 'acc+3ms', root: 'ق و م', gloss: 'his people' },
            { surface: 'سُوءَ', lemma: 'سُوء', pos: 'noun', features: 'acc.constr', root: 'س و أ', gloss: 'the evil of' },
            { surface: 'الْعَاقِبَةِ', lemma: 'عَاقِبَة', pos: 'noun', features: 'def.gen', root: 'ع ق ب', gloss: 'the outcome, the end' },
            { surface: 'وَمَصِيرَ', lemma: 'مَصِير', pos: 'noun', features: 'conj+acc.constr', root: 'ص ي ر', gloss: 'and the fate of' },
            { surface: 'الظَّالِمِينَ', lemma: 'ظَالِم', pos: 'noun', features: 'pl.def.gen', root: 'ظ ل م', gloss: 'the wrongdoers' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'so he said' },
          ],
        },
        {
          // Ghāfir 40:30-31.
          id: 'qs-v7-c01-015',
          ar: '﴿يَٰقَوْمِ إِنِّىٓ أَخَافُ عَلَيْكُم مِّثْلَ يَوْمِ ٱلْأَحْزَابِ مِثْلَ دَأْبِ قَوْمِ نُوحٍ وَعَادٍ وَثَمُودَ وَٱلَّذِينَ مِنۢ بَعْدِهِمْ وَمَا ٱللَّهُ يُرِيدُ ظُلْمًا لِّلْعِبَادِ﴾.',
          en: '"O my people, I fear for you the like of the day of the [allied] factions -- the like of the fate of the people of Nūḥ, and ʿĀd, and Thamūd, and those after them; and Allah wills no injustice for His servants."',
          tokens: [
            { surface: 'يَٰقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'part+gen+1s', root: 'ق و م', gloss: 'O my people' },
            { surface: 'إِنِّىٓ', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'أَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.1s', root: 'خ و ف', gloss: 'to fear; I fear' },
            { surface: 'عَلَيْكُم', lemma: 'عَلَى', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'مِّثْلَ', lemma: 'مِثْل', pos: 'noun', features: 'acc.constr', root: 'م ث ل', gloss: 'the like of' },
            { surface: 'يَوْمِ', lemma: 'يَوْم', pos: 'noun', features: 'constr.gen', root: 'ي و م', gloss: 'the day of' },
            { surface: 'ٱلْأَحْزَابِ', lemma: 'حِزْب', pos: 'noun', features: 'pl.def.gen', root: 'ح ز ب', gloss: 'the factions, the confederates' },
            { surface: 'مِثْلَ', lemma: 'مِثْل', pos: 'noun', features: 'acc.constr', root: 'م ث ل', gloss: 'the like of' },
            { surface: 'دَأْبِ', lemma: 'دَأْب', pos: 'noun', features: 'constr.gen', root: 'د أ ب', gloss: 'the wont, way of' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'constr.gen', root: 'ق و م', gloss: 'the people of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
            { surface: 'وَعَادٍ', lemma: 'عَاد', pos: 'proper', features: 'conj+gen', gloss: 'and ʿĀd' },
            { surface: 'وَثَمُودَ', lemma: 'ثَمُود', pos: 'proper', features: 'conj+gen', gloss: 'and Thamūd' },
            { surface: 'وَٱلَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'conj+rel.pl', gloss: 'and those who' },
            { surface: 'مِنۢ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'بَعْدِهِمْ', lemma: 'بَعْدَ', pos: 'noun', features: 'gen+3mp', root: 'ب ع د', gloss: 'after them' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'ٱللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'يُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3ms', root: 'ر و د', gloss: 'to want; wills' },
            { surface: 'ظُلْمًا', lemma: 'ظُلْم', pos: 'noun', features: 'indef.acc', root: 'ظ ل م', gloss: 'injustice' },
            { surface: 'لِّلْعِبَادِ', lemma: 'عَبْد', pos: 'noun', features: 'prep+pl.def.gen', root: 'ع ب د', gloss: 'for the servants' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا حَذَّرَ الرَّجُلُ الرَّشِيدُ قَوْمَهُ؟',
          options: ['مِثْلَ يَوْمِ الْأَحْزَابِ وَمَصِيرِ قَوْمِ نُوحٍ وَعَادٍ وَثَمُودَ', 'مِنَ الْجُوعِ وَالْفَقْرِ', 'مِنَ الْمَرَضِ'],
          answer: 0,
          qEn: 'What did the wise man warn his people about?',
          optionsEn: ['The like of the day of the factions, and the fate of the people of Nūḥ, ʿĀd, and Thamūd', 'Hunger and poverty', 'Illness'],
        },
        {
          q: 'بِمَاذَا أَجَابَ فِرْعَوْنُ الرَّجُلَ الرَّشِيدَ؟',
          options: ['مَا أُرِيكُمْ إِلَّا مَا أَرَى', 'اِعْتَرَفَ بِخَطَئِهِ', 'سَكَتَ وَلَمْ يَرُدَّ'],
          answer: 0,
          qEn: 'How did Pharaoh answer the wise man?',
          optionsEn: ['I show you only what I see', 'He admitted his error', 'He was silent and did not respond'],
        },
      ],
    },
    {
      en: "The wise man warned them of the Day of Resurrection. And what is the Day of Resurrection? [Qur'an: The Day when a man flees from his brother, and his mother and his father, and his companion and his children -- every man among them, that Day, will have a concern of his own that occupies him. Friends on that Day will be enemies to one another, except the righteous. There will be no kinship ties between them on that Day, nor will they ask after one another.] On the Day when the Almighty King calls out: [Qur'an: To whom belongs the kingship today? To Allah, the One, the All-Subduing.] On the Day when the people are terrified and cry out, and call to one another, and on the Day when they turn away fleeing, having no protector at all from Allah -- the wise man said: [Qur'an: O my people, I fear for you the Day of Mutual Calling, the Day you will turn your backs fleeing, having no protector from Allah; and whomever Allah sends astray has no guide.]",
      sentences: [
        {
          id: 'qs-v7-c01-016',
          ar: 'وَخَوَّفَهُمُ الرَّجُلُ الرَّشِيدُ يَوْمَ الْقِيَامَةِ.',
          en: 'The wise man warned them of the Day of Resurrection.',
          tokens: [
            { surface: 'وَخَوَّفَهُمُ', lemma: 'خَوَّفَ', pos: 'verb', features: 'conj+perf.3ms+3mp', root: 'خ و ف', gloss: 'to frighten, warn; and warned them' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
            { surface: 'الرَّشِيدُ', lemma: 'رَشِيد', pos: 'adj', features: 'def.nom', root: 'ر ش د', gloss: 'the wise' },
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc.constr', root: 'ي و م', gloss: 'the day of' },
            { surface: 'الْقِيَامَةِ', lemma: 'قِيَامَة', pos: 'noun', features: 'def.gen', root: 'ق و م', gloss: 'the Resurrection' },
          ],
        },
        {
          id: 'qs-v7-c01-017',
          ar: 'وَمَا يَوْمُ الْقِيَامَةِ؟',
          en: 'And what is the Day of Resurrection?',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+rel', gloss: 'and what' },
            { surface: 'يَوْمُ', lemma: 'يَوْم', pos: 'noun', features: 'nom.constr', root: 'ي و م', gloss: 'the day of' },
            { surface: 'الْقِيَامَةِ', lemma: 'قِيَامَة', pos: 'noun', features: 'def.gen', root: 'ق و م', gloss: 'the Resurrection' },
          ],
        },
        {
          // ʿAbasa 80:34-37 -- Nadwī's own inserted cross-reference, not part
          // of the believing man's Ghāfir speech.
          id: 'qs-v7-c01-018',
          ar: '﴿يَوْمَ يَفِرُّ ٱلْمَرْءُ مِنْ أَخِيهِ وَأُمِّهِ وَأَبِيهِ وَصَٰحِبَتِهِ وَبَنِيهِ لِكُلِّ ٱمْرِئٍ مِّنْهُمْ يَوْمَئِذٍ شَأْنٌ يُغْنِيهِ﴾.',
          en: '"The Day when a man flees from his brother, and his mother and his father, and his companion and his children -- every man among them, that Day, will have a concern of his own that occupies him."',
          tokens: [
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc', root: 'ي و م', gloss: 'the day when' },
            { surface: 'يَفِرُّ', lemma: 'فَرَّ', pos: 'verb', features: 'impf.3ms', root: 'ف ر ر', gloss: 'to flee; flees' },
            { surface: 'ٱلْمَرْءُ', lemma: 'مَرْء', pos: 'noun', features: 'def.nom', root: 'م ر أ', gloss: 'the man' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَخِيهِ', lemma: 'أَخ', pos: 'noun', features: 'gen+3ms', root: 'ا خ و', gloss: 'his brother' },
            { surface: 'وَأُمِّهِ', lemma: 'أُمّ', pos: 'noun', features: 'conj+gen+3ms', root: 'ا م م', gloss: 'and his mother' },
            { surface: 'وَأَبِيهِ', lemma: 'أَب', pos: 'noun', features: 'conj+gen+3ms', root: 'ا ب و', gloss: 'and his father' },
            { surface: 'وَصَٰحِبَتِهِ', lemma: 'صَاحِبَة', pos: 'noun', features: 'conj+gen+3ms', root: 'ص ح ب', gloss: 'and his companion' },
            { surface: 'وَبَنِيهِ', lemma: 'اِبْن', pos: 'noun', features: 'conj+pl.gen+3ms', root: 'ب ن و', gloss: 'and his sons' },
            { surface: 'لِكُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'prep+constr.gen', root: 'ك ل ل', gloss: 'for every' },
            { surface: 'ٱمْرِئٍ', lemma: 'مَرْء', pos: 'noun', features: 'indef.gen', root: 'م ر أ', gloss: 'man' },
            { surface: 'مِّنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'يَوْمَئِذٍ', lemma: 'يَوْمَئِذٍ', pos: 'adv', features: 'adv', root: 'ي و م', gloss: 'that day' },
            { surface: 'شَأْنٌ', lemma: 'شَأْن', pos: 'noun', features: 'indef.nom', root: 'ش أ ن', gloss: 'a concern, affair' },
            { surface: 'يُغْنِيهِ', lemma: 'أَغْنَى', pos: 'verb', features: 'impf.3ms+3ms', root: 'غ ن ي', gloss: 'to suffice, occupy; that occupies him' },
          ],
        },
        {
          // Az-Zukhruf 43:67 -- short Qur'anic quote (7 tokens) carrying a
          // case-marked common noun; left as ordinary prose per instruction
          // rather than fragmented to dodge the build stage.
          id: 'qs-v7-c01-019',
          ar: '﴿ٱلْأَخِلَّآءُ يَوْمَئِذٍۭ بَعْضُهُمْ لِبَعْضٍ عَدُوٌّ إِلَّا ٱلْمُتَّقِينَ﴾.',
          en: '"Friends on that Day will be enemies to one another, except the righteous."',
          tokens: [
            { surface: 'ٱلْأَخِلَّآءُ', lemma: 'خَلِيل', pos: 'noun', features: 'pl.def.nom', root: 'خ ل ل', gloss: 'the friends' },
            { surface: 'يَوْمَئِذٍۭ', lemma: 'يَوْمَئِذٍ', pos: 'adv', features: 'adv', root: 'ي و م', gloss: 'that day' },
            { surface: 'بَعْضُهُمْ', lemma: 'بَعْض', pos: 'noun', features: 'nom+3mp', root: 'ب ع ض', gloss: 'some of them' },
            { surface: 'لِبَعْضٍ', lemma: 'بَعْض', pos: 'noun', features: 'prep+indef.gen', root: 'ب ع ض', gloss: 'to some, one another' },
            { surface: 'عَدُوٌّ', lemma: 'عَدُوّ', pos: 'noun', features: 'indef.nom', root: 'ع د و', gloss: 'an enemy' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'ٱلْمُتَّقِينَ', lemma: 'اِتَّقَى', pos: 'noun', features: 'pl.def.acc', root: 'و ق ي', gloss: 'the righteous, God-fearing' },
          ],
        },
        {
          // Al-Muʾminūn 23:101 -- short Qur'anic quote, same handling.
          id: 'qs-v7-c01-020',
          ar: '﴿فَلَآ أَنسَابَ بَيْنَهُمْ يَوْمَئِذٍ وَلَا يَتَسَآءَلُونَ﴾.',
          en: '"There will be no kinship ties between them on that Day, nor will they ask after one another."',
          tokens: [
            { surface: 'فَلَآ', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'so no' },
            { surface: 'أَنسَابَ', lemma: 'نَسَب', pos: 'noun', features: 'pl.acc', root: 'ن س ب', gloss: 'kinship ties' },
            { surface: 'بَيْنَهُمْ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep+3mp', gloss: 'between them' },
            { surface: 'يَوْمَئِذٍ', lemma: 'يَوْمَئِذٍ', pos: 'adv', features: 'adv', root: 'ي و م', gloss: 'that day' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'يَتَسَآءَلُونَ', lemma: 'تَسَاءَلَ', pos: 'verb', features: 'impf.3mp', root: 'س أ ل', gloss: 'to ask one another' },
          ],
        },
        {
          id: 'qs-v7-c01-021',
          ar: 'يَوْمَ يُنَادِي الْمَلِكُ الْجَبَّارُ:',
          en: 'On the Day when the Almighty King calls out:',
          tokens: [
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc', root: 'ي و م', gloss: 'the day when' },
            { surface: 'يُنَادِي', lemma: 'نَادَى', pos: 'verb', features: 'impf.3ms', root: 'ن د و', gloss: 'to call out; calls out' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the King' },
            { surface: 'الْجَبَّارُ', lemma: 'جَبَّار', pos: 'adj', features: 'def.nom', root: 'ج ب ر', gloss: 'the Almighty, the Compeller' },
          ],
        },
        {
          // Ghāfir 40:16.
          id: 'qs-v7-c01-022',
          ar: '﴿لِمَنِ ٱلْمُلْكُ ٱلْيَوْمَ لِلَّهِ ٱلْوَٰحِدِ ٱلْقَهَّارِ﴾.',
          en: '"To whom belongs the kingship today? To Allah, the One, the All-Subduing."',
          tokens: [
            { surface: 'لِمَنِ', lemma: 'مَنْ', pos: 'rel', features: 'prep+rel', gloss: 'to whom' },
            { surface: 'ٱلْمُلْكُ', lemma: 'مُلْك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the kingship' },
            { surface: 'ٱلْيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'def.acc', root: 'ي و م', gloss: 'today' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'to Allah' },
            { surface: 'ٱلْوَٰحِدِ', lemma: 'وَاحِد', pos: 'adj', features: 'def.gen', root: 'و ح د', gloss: 'the One' },
            { surface: 'ٱلْقَهَّارِ', lemma: 'قَهَّار', pos: 'adj', features: 'def.gen', root: 'ق ه ر', gloss: 'the All-Subduing' },
          ],
        },
        {
          id: 'qs-v7-c01-023',
          ar: 'يَوْمَ يَفْزَعُ النَّاسُ وَيَصْرُخُونَ،',
          en: 'On the Day when the people are terrified and cry out,',
          tokens: [
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc', root: 'ي و م', gloss: 'the day when' },
            { surface: 'يَفْزَعُ', lemma: 'فَزِعَ', pos: 'verb', features: 'impf.3ms', root: 'ف ز ع', gloss: 'to be terrified' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'وَيَصْرُخُونَ', lemma: 'صَرَخَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ص ر خ', gloss: 'to scream, cry out; and cry out' },
          ],
        },
        {
          id: 'qs-v7-c01-024',
          ar: 'وَيُنَادِي بَعْضُهُمْ بَعْضاً،',
          en: 'and call out to one another,',
          tokens: [
            { surface: 'وَيُنَادِي', lemma: 'نَادَى', pos: 'verb', features: 'conj+impf.3ms', root: 'ن د و', gloss: 'to call; and calls' },
            { surface: 'بَعْضُهُمْ', lemma: 'بَعْض', pos: 'noun', features: 'nom+3mp', root: 'ب ع ض', gloss: 'some of them' },
            { surface: 'بَعْضاً', lemma: 'بَعْض', pos: 'noun', features: 'indef.acc', root: 'ب ع ض', gloss: 'some, one another' },
          ],
        },
        {
          // "مَالَهُمْ" printed with no internal space in the source (unlike
          // the verbatim Qur'anic "مَا لَكُم" at qs-v7-c01-027) -- kept as one
          // token to preserve exact `ar` reconstruction; see file header.
          id: 'qs-v7-c01-025',
          ar: 'وَيَوْمَ يُوَلُّونَ مُدْبِرِينَ مَالَهُمْ مِنَ اللَّهِ مِنْ عَاصِمٍ.',
          en: 'and on the Day when they turn their backs fleeing, having no protector at all from Allah.',
          tokens: [
            { surface: 'وَيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'conj+acc', root: 'ي و م', gloss: 'and the day when' },
            { surface: 'يُوَلُّونَ', lemma: 'وَلَّى', pos: 'verb', features: 'impf.3mp', root: 'و ل ي', gloss: 'to turn away; they turn' },
            { surface: 'مُدْبِرِينَ', lemma: 'مُدْبِر', pos: 'noun', features: 'pl.acc', root: 'د ب ر', gloss: 'fleeing, turning back' },
            { surface: 'مَالَهُمْ', lemma: 'مَا', pos: 'part', features: 'neg+prep.3mp', gloss: 'nothing is theirs, they have no' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'any' },
            { surface: 'عَاصِمٍ', lemma: 'عَاصِم', pos: 'noun', features: 'indef.gen', root: 'ع ص م', gloss: 'protector' },
          ],
        },
        {
          id: 'qs-v7-c01-026',
          ar: 'فَقَالَ الرَّجُلُ الرَّشِيدُ:',
          en: 'the wise man said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'so he said' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
            { surface: 'الرَّشِيدُ', lemma: 'رَشِيد', pos: 'adj', features: 'def.nom', root: 'ر ش د', gloss: 'the wise' },
          ],
        },
        {
          // Ghāfir 40:32-33.
          id: 'qs-v7-c01-027',
          ar: '﴿وَيَٰقَوْمِ إِنِّىٓ أَخَافُ عَلَيْكُمْ يَوْمَ ٱلتَّنَادِ يَوْمَ تُوَلُّونَ مُدْبِرِينَ مَا لَكُم مِّنَ ٱللَّهِ مِنْ عَاصِمٍ وَمَن يُضْلِلِ ٱللَّهُ فَمَا لَهُۥ مِنْ هَادٍ﴾.',
          en: '"O my people, I fear for you the Day of Mutual Calling -- the Day you will turn your backs fleeing, having no protector from Allah; and whomever Allah sends astray has no guide."',
          tokens: [
            { surface: 'وَيَٰقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'conj+part+gen+1s', root: 'ق و م', gloss: 'and O my people' },
            { surface: 'إِنِّىٓ', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'أَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.1s', root: 'خ و ف', gloss: 'to fear; I fear' },
            { surface: 'عَلَيْكُمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc.constr', root: 'ي و م', gloss: 'the day of' },
            { surface: 'ٱلتَّنَادِ', lemma: 'تَنَادٍ', pos: 'noun', features: 'def.gen', root: 'ن د و', gloss: 'the Mutual Calling' },
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc', root: 'ي و م', gloss: 'the day when' },
            { surface: 'تُوَلُّونَ', lemma: 'وَلَّى', pos: 'verb', features: 'impf.2mp', root: 'و ل ي', gloss: 'to turn away; you turn' },
            { surface: 'مُدْبِرِينَ', lemma: 'مُدْبِر', pos: 'noun', features: 'pl.acc', root: 'د ب ر', gloss: 'fleeing' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'nothing' },
            { surface: 'لَكُم', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'مِّنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'ٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'any' },
            { surface: 'عَاصِمٍ', lemma: 'عَاصِم', pos: 'noun', features: 'indef.gen', root: 'ع ص م', gloss: 'protector' },
            { surface: 'وَمَن', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and whoever' },
            { surface: 'يُضْلِلِ', lemma: 'أَضَلَّ', pos: 'verb', features: 'impf.3ms', root: 'ض ل ل', gloss: 'to lead astray; leads astray' },
            { surface: 'ٱللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'فَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'then not' },
            { surface: 'لَهُۥ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'any' },
            { surface: 'هَادٍ', lemma: 'هَادٍ', pos: 'noun', features: 'indef.gen', root: 'ه د ي', gloss: 'guide' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يَحْدُثُ يَوْمَ الْقِيَامَةِ لِلْأَخِلَّاءِ؟',
          options: ['يَكُونُ بَعْضُهُمْ لِبَعْضٍ عَدُوّاً إِلَّا الْمُتَّقِينَ', 'يَبْقَوْنَ أَصْدِقَاءَ كَمَا كَانُوا', 'لَا يَتَذَكَّرُونَ بَعْضَهُمْ'],
          answer: 0,
          qEn: 'What happens to friends on the Day of Resurrection?',
          optionsEn: ['They become enemies to one another, except the righteous', 'They remain friends as before', 'They do not remember one another'],
        },
        {
          q: 'لِمَنِ الْمُلْكُ يَوْمَ الْقِيَامَةِ؟',
          options: ['لِلَّهِ الْوَاحِدِ الْقَهَّارِ', 'لِفِرْعَوْنَ', 'لِلْمَلِكِ الْجَبَّارِ نَفْسِهِ'],
          answer: 0,
          qEn: 'To whom does sovereignty belong on the Day of Resurrection?',
          optionsEn: ['To Allah, the One, the All-Subduing', 'To Pharaoh', 'To the mighty king himself'],
        },
      ],
    },
    {
      en: "The wise man said: 'Allah has granted you a blessing, but you did not recognize its worth, nor value it as it truly deserved, until, when it was gone, you grieved over it. That was the prophet Yūsuf -- Allah's prayer and peace be upon him -- whom you knew, yet did not value as he deserved. But when he died, you said: Glory be to Allah, a prophet, none like Yūsuf! A king, none like Yūsuf! A man, none like Yūsuf! And who is there for us, a prophet after him? Who is there for us like him?'",
      sentences: [
        {
          id: 'qs-v7-c01-028',
          ar: 'وَقَالَ الرَّجُلُ الرَّشِيدُ:',
          en: 'The wise man said:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
            { surface: 'الرَّشِيدُ', lemma: 'رَشِيد', pos: 'adj', features: 'def.nom', root: 'ر ش د', gloss: 'the wise' },
          ],
        },
        {
          id: 'qs-v7-c01-029',
          ar: 'إِنَّ اللَّهَ قَدْ وَهَبَكُمْ نِعْمَةً وَلَكِنَّكُمْ مَا عَرَفْتُمْ فَضْلَهَا',
          en: 'Allah has granted you a blessing, but you did not recognize its worth,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed, already' },
            { surface: 'وَهَبَكُمْ', lemma: 'وَهَبَ', pos: 'verb', features: 'perf.3ms+2mp', root: 'و ه ب', gloss: 'to grant; granted you' },
            { surface: 'نِعْمَةً', lemma: 'نِعْمَة', pos: 'noun', features: 'indef.acc', root: 'ن ع م', gloss: 'a blessing' },
            { surface: 'وَلَكِنَّكُمْ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+2mp', gloss: 'but you' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'عَرَفْتُمْ', lemma: 'عَرَفَ', pos: 'verb', features: 'perf.2mp', root: 'ع ر ف', gloss: 'to know, recognize' },
            { surface: 'فَضْلَهَا', lemma: 'فَضْل', pos: 'noun', features: 'acc+3fs', root: 'ف ض ل', gloss: 'its worth, value' },
          ],
        },
        {
          id: 'qs-v7-c01-030',
          ar: 'وَمَا قَدَّرْتُمُوهَا حَقَّ قَدْرِهَا حَتَّى إِذَا ذَهَبَتْ تَأَسَّفْتُمْ عَلَيْهَا.',
          en: 'nor valued it as it truly deserved, until, when it was gone, you grieved over it.',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'قَدَّرْتُمُوهَا', lemma: 'قَدَّرَ', pos: 'verb', features: 'perf.2mp+3fs', root: 'ق د ر', gloss: 'to value, estimate; you valued it' },
            { surface: 'حَقَّ', lemma: 'حَقّ', pos: 'noun', features: 'acc.constr', root: 'ح ق ق', gloss: 'the due right of' },
            { surface: 'قَدْرِهَا', lemma: 'قَدْر', pos: 'noun', features: 'gen+3fs', root: 'ق د ر', gloss: 'its worth' },
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'prep', features: 'prep', gloss: 'until' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'when' },
            { surface: 'ذَهَبَتْ', lemma: 'ذَهَبَ', pos: 'verb', features: 'perf.3fs', root: 'ذ ه ب', gloss: 'to go; it went (was gone)' },
            { surface: 'تَأَسَّفْتُمْ', lemma: 'تَأَسَّفَ', pos: 'verb', features: 'perf.2mp', root: 'ا س ف', gloss: 'to regret, grieve' },
            { surface: 'عَلَيْهَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+3fs', gloss: 'over it' },
          ],
        },
        {
          id: 'qs-v7-c01-031',
          ar: 'ذَلِكَ يُوسُفُ النَّبِيُّ عَلَيْهِ صَلاةُ اللَّهِ وَسَلامُهُ',
          en: "That was the prophet Yūsuf -- Allah's prayer and peace be upon him --",
          tokens: [
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'النَّبِيُّ', lemma: 'نَبِيّ', pos: 'noun', features: 'def.nom', root: 'ن ب أ', gloss: 'the prophet' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
            { surface: 'صَلاةُ', lemma: 'صَلاة', pos: 'noun', features: 'nom.constr', root: 'ص ل و', gloss: 'the prayer of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَسَلامُهُ', lemma: 'سَلام', pos: 'noun', features: 'conj+nom+3ms', root: 'س ل م', gloss: 'and His peace' },
          ],
        },
        {
          id: 'qs-v7-c01-032',
          ar: 'الَّذِي عَرَفْتُمُوهُ وَلَمْ تَقْدِرُوهُ قَدْرَهُ.',
          en: 'whom you knew, yet did not value as he deserved.',
          tokens: [
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'whom' },
            { surface: 'عَرَفْتُمُوهُ', lemma: 'عَرَفَ', pos: 'verb', features: 'perf.2mp+3ms', root: 'ع ر ف', gloss: 'to know; you knew him' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَقْدِرُوهُ', lemma: 'قَدَرَ', pos: 'verb', features: 'impf.2mp+3ms', root: 'ق د ر', gloss: 'to value; you valued him' },
            { surface: 'قَدْرَهُ', lemma: 'قَدْر', pos: 'noun', features: 'acc+3ms', root: 'ق د ر', gloss: 'his worth' },
          ],
        },
        {
          id: 'qs-v7-c01-033',
          ar: 'ولكِنَّهُ لَمَّا مَاتَ قُلْتُمْ:',
          en: 'But when he died, you said:',
          tokens: [
            { surface: 'ولكِنَّهُ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'but he' },
            { surface: 'لَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'مَاتَ', lemma: 'مَاتَ', pos: 'verb', features: 'perf.3ms', root: 'م و ت', gloss: 'to die; died' },
            { surface: 'قُلْتُمْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.2mp', root: 'ق و ل', gloss: 'to say; you said' },
          ],
        },
        {
          id: 'qs-v7-c01-034',
          ar: 'سُبْحَانَ اللَّهِ نَبِيٌّ وَلا كَيُوسُفَ!',
          en: '"Glory be to Allah -- a prophet, none like Yūsuf!"',
          tokens: [
            { surface: 'سُبْحَانَ', lemma: 'سُبْحَانَ', pos: 'noun', features: 'acc.constr', root: 'س ب ح', gloss: 'glory of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'نَبِيٌّ', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.nom', root: 'ن ب أ', gloss: 'a prophet' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'كَيُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'prep+gen', gloss: 'like Yūsuf' },
          ],
        },
        {
          id: 'qs-v7-c01-035',
          ar: 'مَلِكٌ وَلا كَيُوسُفَ!',
          en: 'A king, none like Yūsuf!',
          tokens: [
            { surface: 'مَلِكٌ', lemma: 'مَلِك', pos: 'noun', features: 'indef.nom', root: 'م ل ك', gloss: 'a king' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'كَيُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'prep+gen', gloss: 'like Yūsuf' },
          ],
        },
        {
          id: 'qs-v7-c01-036',
          ar: 'رَجُلٌ وَلا كَيُوسُفَ!',
          en: 'A man, none like Yūsuf!',
          tokens: [
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', root: 'ر ج ل', gloss: 'a man' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'كَيُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'prep+gen', gloss: 'like Yūsuf' },
          ],
        },
        {
          id: 'qs-v7-c01-037',
          ar: 'وَمَنْ لَنَا بِنَبِيٍّ بَعْدَهُ؟!',
          en: 'And who is there for us -- a prophet after him?',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and who' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'بِنَبِيٍّ', lemma: 'نَبِيّ', pos: 'noun', features: 'prep+indef.gen', root: 'ن ب أ', gloss: 'with a prophet' },
            { surface: 'بَعْدَهُ', lemma: 'بَعْدَ', pos: 'noun', features: 'acc+3ms', root: 'ب ع د', gloss: 'after him' },
          ],
        },
        {
          id: 'qs-v7-c01-038',
          ar: 'مَنْ لَنَا بِمِثْلِهِ؟!',
          en: 'Who is there for us like him?',
          tokens: [
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'بِمِثْلِهِ', lemma: 'مِثْل', pos: 'noun', features: 'prep+gen+3ms', root: 'م ث ل', gloss: 'like him' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنِ النَّبِيُّ الَّذِي ذَكَرَهُ الرَّجُلُ الرَّشِيدُ مِثَالاً عَلَى نِعْمَةِ اللَّهِ الَّتِي لَمْ يُقَدِّرُوهَا؟',
          options: ['يُوسُفُ عَلَيْهِ صَلاةُ اللَّهِ وَسَلامُهُ', 'إِبْرَاهِيمُ', 'نُوحٌ'],
          answer: 0,
          qEn: "Which prophet did the wise man cite as an example of Allah's blessing they failed to value?",
          optionsEn: ["Yūsuf, upon him be Allah's prayer and peace", 'Ibrāhīm', 'Nūḥ'],
        },
        {
          q: 'مَاذَا قَالَ النَّاسُ حِينَ مَاتَ يُوسُفُ؟',
          options: ['سُبْحَانَ اللَّهِ! نَبِيٌّ وَلَا كَيُوسُفَ!', 'لَمْ يَحْزَنُوا عَلَيْهِ', 'قَالُوا إِنَّهُ لَمْ يَكُنْ مُهِمّاً'],
          answer: 0,
          qEn: 'What did the people say when Yūsuf died?',
          optionsEn: ['Glory be to Allah! A prophet, none like Yūsuf!', 'They did not grieve for him', 'They said he was unimportant'],
        },
      ],
    },
    {
      en: "'Never! None like him will come!' [Qur'an: And Yūsuf had already come to you before with clear proofs, yet you continued in doubt about what he brought you, until, when he perished, you said: Allah will never send a messenger after him.] So too will you do after this prophet also, and you will regret it! The man admonished his people, and gave them his affection and his counsel freely. [Qur'an: And he who believed said: O my people, follow me; I will guide you to the way of right conduct.]",
      sentences: [
        {
          id: 'qs-v7-c01-039',
          ar: 'أَبَداً!',
          en: 'Never!',
          tokens: [
            { surface: 'أَبَداً', lemma: 'أَبَداً', pos: 'adv', features: 'indef.acc', root: 'ا ب د', gloss: 'never, ever' },
          ],
        },
        {
          id: 'qs-v7-c01-040',
          ar: 'لَنْ يَأْتِيَ مِثْلُهُ!',
          en: 'None like him will come!',
          tokens: [
            { surface: 'لَنْ', lemma: 'لَنْ', pos: 'part', features: 'part', gloss: 'will never' },
            { surface: 'يَأْتِيَ', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms', root: 'ا ت ي', gloss: 'to come; will come' },
            { surface: 'مِثْلُهُ', lemma: 'مِثْل', pos: 'noun', features: 'nom+3ms', root: 'م ث ل', gloss: 'his like' },
          ],
        },
        {
          // Ghāfir 40:34.
          id: 'qs-v7-c01-041',
          ar: '﴿وَلَقَدْ جَآءَكُمْ يُوسُفُ مِن قَبْلُ بِٱلْبَيِّنَٰتِ فَمَا زِلْتُمْ فِى شَكٍّ مِّمَّا جَآءَكُم بِهِۦ حَتَّىٰٓ إِذَا هَلَكَ قُلْتُمْ لَن يَبْعَثَ ٱللَّهُ مِنۢ بَعْدِهِۦ رَسُولًا﴾.',
          en: '"And Yūsuf had already come to you before with clear proofs, yet you continued in doubt about what he brought you, until, when he perished, you said: Allah will never send a messenger after him."',
          tokens: [
            { surface: 'وَلَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed already' },
            { surface: 'جَآءَكُمْ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms+2mp', root: 'ج ي أ', gloss: 'to come; came to you' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَبْلُ', lemma: 'قَبْلُ', pos: 'adv', features: 'adv', gloss: 'before' },
            { surface: 'بِٱلْبَيِّنَٰتِ', lemma: 'بَيِّنَة', pos: 'noun', features: 'prep+pl.def.gen', root: 'ب ي ن', gloss: 'with the clear proofs' },
            { surface: 'فَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'yet not' },
            { surface: 'زِلْتُمْ', lemma: 'زَالَ', pos: 'verb', features: 'perf.2mp', root: 'ز ي ل', gloss: 'to cease; you ceased (continued)' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'شَكٍّ', lemma: 'شَكّ', pos: 'noun', features: 'indef.gen', root: 'ش ك ك', gloss: 'doubt' },
            { surface: 'مِّمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'about what' },
            { surface: 'جَآءَكُم', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms+2mp', root: 'ج ي أ', gloss: 'to come; he brought you' },
            { surface: 'بِهِۦ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with it' },
            { surface: 'حَتَّىٰٓ', lemma: 'حَتَّى', pos: 'prep', features: 'prep', gloss: 'until' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'when' },
            { surface: 'هَلَكَ', lemma: 'هَلَكَ', pos: 'verb', features: 'perf.3ms', root: 'ه ل ك', gloss: 'to perish; perished' },
            { surface: 'قُلْتُمْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.2mp', root: 'ق و ل', gloss: 'to say; you said' },
            { surface: 'لَن', lemma: 'لَنْ', pos: 'part', features: 'part', gloss: 'will never' },
            { surface: 'يَبْعَثَ', lemma: 'بَعَثَ', pos: 'verb', features: 'impf.3ms', root: 'ب ع ث', gloss: 'to send, raise up; will send' },
            { surface: 'ٱللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مِنۢ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'بَعْدِهِۦ', lemma: 'بَعْدَ', pos: 'noun', features: 'gen+3ms', root: 'ب ع د', gloss: 'after him' },
            { surface: 'رَسُولًا', lemma: 'رَسُول', pos: 'noun', features: 'indef.acc', root: 'ر س ل', gloss: 'a messenger' },
          ],
        },
        {
          id: 'qs-v7-c01-042',
          ar: 'كَذَلِكَ تَفْعَلُونَ بَعْدَ هَذا النَّبِيِّ أَيْضاً!',
          en: 'So too will you do after this prophet also!',
          tokens: [
            { surface: 'كَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'adv', gloss: 'thus, likewise' },
            { surface: 'تَفْعَلُونَ', lemma: 'فَعَلَ', pos: 'verb', features: 'impf.2mp', root: 'ف ع ل', gloss: 'to do; you do' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'هَذا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'النَّبِيِّ', lemma: 'نَبِيّ', pos: 'noun', features: 'def.gen', root: 'ن ب أ', gloss: 'the prophet' },
            { surface: 'أَيْضاً', lemma: 'أَيْضاً', pos: 'adv', features: 'indef.acc', gloss: 'also' },
          ],
        },
        {
          id: 'qs-v7-c01-043',
          ar: 'وَتَنْدَمُونَ!',
          en: 'And you will regret it!',
          tokens: [
            { surface: 'وَتَنْدَمُونَ', lemma: 'نَدِمَ', pos: 'verb', features: 'conj+impf.2mp', root: 'ن د م', gloss: 'to regret; and you regret' },
          ],
        },
        {
          id: 'qs-v7-c01-044',
          ar: 'وَوَعَظَ الرَّجُلُ قَوْمَهُ وَبَذَلَ لَهُمْ وُدَّهُ وَنَصِيحَتَهُ.',
          en: 'The man admonished his people, and gave them his affection and his counsel freely.',
          tokens: [
            { surface: 'وَوَعَظَ', lemma: 'وَعَظَ', pos: 'verb', features: 'conj+perf.3ms', root: 'و ع ظ', gloss: 'to admonish; and admonished' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
            { surface: 'قَوْمَهُ', lemma: 'قَوْم', pos: 'noun', features: 'acc+3ms', root: 'ق و م', gloss: 'his people' },
            { surface: 'وَبَذَلَ', lemma: 'بَذَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ب ذ ل', gloss: 'to give freely, expend; and gave' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'وُدَّهُ', lemma: 'وُدّ', pos: 'noun', features: 'acc+3ms', root: 'و د د', gloss: 'his affection' },
            { surface: 'وَنَصِيحَتَهُ', lemma: 'نَصِيحَة', pos: 'noun', features: 'conj+acc+3ms', root: 'ن ص ح', gloss: 'and his counsel' },
          ],
        },
        {
          // Ghāfir 40:38.
          id: 'qs-v7-c01-045',
          ar: '﴿وَقَالَ ٱلَّذِىٓ ءَامَنَ يَٰقَوْمِ ٱتَّبِعُونِ أَهْدِكُمْ سَبِيلَ ٱلرَّشَادِ﴾.',
          en: '"And he who believed said: O my people, follow me; I will guide you to the way of right conduct."',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'ٱلَّذِىٓ', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'ءَامَنَ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3ms', root: 'ا م ن', gloss: 'to believe; believed' },
            { surface: 'يَٰقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'part+gen+1s', root: 'ق و م', gloss: 'O my people' },
            { surface: 'ٱتَّبِعُونِ', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'imp.2mp+1s', root: 'ت ب ع', gloss: 'to follow; follow me' },
            { surface: 'أَهْدِكُمْ', lemma: 'هَدَى', pos: 'verb', features: 'impf.1s+2mp', root: 'ه د ي', gloss: 'to guide; I will guide you' },
            { surface: 'سَبِيلَ', lemma: 'سَبِيل', pos: 'noun', features: 'acc.constr', root: 'س ب ل', gloss: 'the way of' },
            { surface: 'ٱلرَّشَادِ', lemma: 'رَشَاد', pos: 'noun', features: 'def.gen', root: 'ر ش د', gloss: 'right conduct' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِلْقَوْمِ بَعْدَ مَوْتِ يُوسُفَ حَسَبَ الْقُرْآنِ؟',
          options: ['بَقُوا فِي شَكٍّ ثُمَّ قَالُوا لَنْ يَبْعَثَ اللَّهُ مِنْ بَعْدِهِ رَسُولاً', 'آمَنُوا كُلُّهُمْ بِرِسَالَتِهِ', 'نَسُوهُ تَمَاماً'],
          answer: 0,
          qEn: "What happened to the people after Yūsuf's death, according to the Qurʾān?",
          optionsEn: ['They remained in doubt, then said Allah would never send a messenger after him', 'They all believed his message', 'They forgot him completely'],
        },
        {
          q: 'مَاذَا فَعَلَ الرَّجُلُ الرَّشِيدُ مَعَ قَوْمِهِ؟',
          options: ['وَعَظَهُمْ وَبَذَلَ لَهُمْ وُدَّهُ وَنَصِيحَتَهُ', 'تَرَكَهُمْ فَوْراً دُونَ كَلامٍ', 'اِنْضَمَّ إِلَى فِرْعَوْنَ ضِدَّهُمْ'],
          answer: 0,
          qEn: 'What did the wise man do for his people?',
          optionsEn: ['He admonished them and gave them his affection and counsel freely', 'He left them at once without a word', 'He joined Pharaoh against them'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: 'الرَّجُلُ الرَّشِيدُ مِنْ آلِ فِرْعَوْنَ:',
        en: "The wise man from Pharaoh's household said:",
        options: ['وَقَالَ', 'وَقَالَتْ', 'وَقَالُوا', 'أَقُولُ'],
        answer: 0,
        rationales: [
          '3rd masc. sing. perfect -- matches "the man" (singular).',
          '3rd fem. sing. -- wrong gender.',
          '3rd masc. plural -- wrong; the subject is singular.',
          '1st person -- wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: '',
        post: 'الرَّجُلُ قَوْمَهُ وَبَذَلَ لَهُمْ وُدَّهُ وَنَصِيحَتَهُ.',
        en: 'The man admonished his people, and gave them his affection and counsel freely.',
        options: ['وَوَعَظَ', 'وَوَعَظَتْ', 'وَوَعَظُوا', 'يَعِظُ'],
        answer: 0,
        rationales: [
          '3rd masc. sing. perfect -- matches "the man."',
          '3rd fem. sing. -- wrong gender.',
          '3rd masc. plural -- wrong; the subject is singular.',
          'Imperfect -- wrong tense; the story is past narration.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَرَادَ الرَّجُلُ الرَّشِيدُ أَنْ',
        post: 'قَوْمَهُ سُوءَ الْعَاقِبَةِ.',
        en: 'The wise man wanted to warn his people of the evil end.',
        options: ['يُحَذِّرَ', 'يُحَذِّرُ', 'حَذَّرَ', 'حَذَّرُوا'],
        answer: 0,
        rationales: [
          'Subjunctive after أَنْ -- correct, matching أَرَادَ أَنْ + subjunctive.',
          'Indicative -- wrong mood after أَنْ.',
          'Perfect -- wrong; the clause needs the subjunctive after أَنْ.',
          '3rd plural -- wrong number and mood.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'قَالَ الرَّجُلُ الرَّشِيدُ',
        pre: '',
        post: 'الرَّجُلُ الرَّشِيدُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['قُلْتُ', 'قَالَ', 'قَالَتْ', 'قُلْنَا'],
        answer: 0,
        rationales: [
          '1st singular perfect -- matches أَنَا.',
          '3rd masc. sing. -- he, the form given.',
          '3rd fem. sing. -- she.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'قَالَ الرَّجُلُ الرَّشِيدُ',
        pre: '',
        post: 'الرَّجُلُ الرَّشِيدُ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['قَالَتْ', 'قَالَ', 'قُلْتُ', 'قُلْنَا'],
        answer: 0,
        rationales: [
          '3rd fem. sing. -- matches هِيَ.',
          '3rd masc. sing. -- he, the form given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'قَالَ الرَّجُلُ الرَّشِيدُ',
        pre: '',
        post: 'الرَّجُلُ الرَّشِيدُ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['قَالُوا', 'قَالَ', 'قَالَتْ', 'نَقُولُ'],
        answer: 0,
        rationales: [
          '3rd masc. plural -- matches هُمْ.',
          '3rd masc. sing. -- he, the form given.',
          '3rd fem. sing. -- she.',
          '1st plural imperfect -- wrong tense and person.',
        ],
      },
    ],
  },
};

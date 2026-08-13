// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 38 -- عِيسَى يَدْعُو إِلَى عِبَادَةِ اللَّهِ وَحْدَهُ.
// Printed page 274 only -- begins after ch37's closing Qur'an quote
// (Sūrat al-Mā'idah 5:75-76, whose last lines sit at the very top of this
// page before this chapter's own heading box) and ends before ch39's
// heading box on page 275. Transcribed by hand from the scan (vision OCR,
// 150dpi render) against ../CHAPTER-FORMAT.md.
//
// After chapter 37 traced how later Christianity drifted from Isa's own
// teaching, this short chapter turns to Isa's own words as the Gospel
// itself records them: a direct call to worship Allah alone, quoted
// twice (Matthew 4:10 and Luke 4:8, in near-identical wording) from the
// Injil. It then quotes the Qur'an's own commentary on the general
// principle (Sūrat Āl 'Imrān 3:79-80): no prophet given the Scripture,
// judgment, and prophethood would ever tell people to worship him
// instead of Allah -- he would only ever call them to be devoted
// servants of the Lord, never to take angels or prophets as lords.
//
// Grammar / lexical notes:
//   -- The two Gospel citations (qs-v12-c38-003/004) are quoted with «» as
//      printed (not the ﴿ ﴾ used for Qur'an text elsewhere in this
//      volume), since they are Bible quotations, not Qur'anic ones. The
//      parenthetical chapter:verse citations "(مَتَّى ٤: ١٠)" and "(لُوقَا
//      ٤: ٨)" are dropped from `ar` entirely rather than left untokenized --
//      unlike the Qur'an's own ayah-medallion numbers elsewhere in this
//      volume (digits only), "مَتَّى"/"لُوقَا" are real Arabic words and so
//      cannot be excluded from the tokens-spell-out-ar check the way bare
//      digits and punctuation can. The reference is kept in `en` instead
//      (matching own-book precedent for citations that don't tokenize).
//   -- إِلَهِكَ in both Gospel citations is transcribed with a genitive
//      kasra (badal/apposition to الرَّبِّ, both governed by لِ), matching
//      the standard Arabic Bible rendering of Matthew 4:10 / Luke 4:8
//      ("لِلرَّبِّ إِلَهِكَ تَسْجُدُ") -- the scan's small-font ḥarakah was hard
//      to distinguish from a fatḥah at this resolution, so this is
//      flagged for a second look against the original page, same as
//      ch37's أُمِّ الْمَسِيحِ note.
//   -- The Qur'an quote (qs-v12-c38-006 through 010) is Sūrat Āl 'Imrān
//      3:79-80, wrapped in ﴿ ﴾ and split at its own internal clause
//      boundaries per the house convention; tokenized and translated in
//      full with no shortening.
//   -- قَوْل (qs-v12-c38-002/004, verbal noun "a saying, statement") is a
//      distinct lemma from the already-taught verb قَالَ, per the
//      noun-vs-verb-same-root convention used throughout this volume.
//   -- مَلَك ("angel", known -- taught earlier in this volume) supplies
//      the plural الْمَلَائِكَة in qs-v12-c38-009; not re-listed in
//      newWords here.
//   -- Judgment call carried over from ch36/ch37's headers: the closed
//      set of most-basic function words/pronouns (مِنْ، فِي، بِ، لِ، عَلَى،
//      مَا، إِلَى، إِنَّ، أَنَّ، اللَّه، قَالَ، كَانَ، النَّاس، أَنْ، ثُمَّ، بَعْدَ، إِذْ)
//      is treated as already known and not added to newWords.
//
// No page footnotes (book_note) on this page.
//
// 7 new words (مَكْتُوب، إِنْجِيل، جَاءَ، قَوْل، رَبَّانِيّ، دَرَسَ، كِتَاب) -- a
// short list, since most of this chapter's vocabulary (نَبِيّ، حُكْم،
// نُبُوَّة، عَلَّمَ، مَلَك، أَمَرَ، كُفْر، مُسْلِم، آتَى، عَبَدَ، عَبْد، دُون، غَيْر،
// أَنْتُمْ، لَكِنْ) was already established earlier in this volume or the
// prior books.
export const CHAPTER = {
  id: 'ch38',
  title: { ar: 'عِيسَى يَدْعُو إِلَى عِبَادَةِ اللَّهِ وَحْدَهُ', en: 'Isa Calls to Worship of Allah Alone' },
  newWords: [
    'مَكْتُوب', 'دَرَسَ',
  ],
  lemmas: {
    مَكْتُوب: { gloss: 'written' },
    إِنْجِيل: { gloss: 'the Gospel' },
    جَاءَ: { gloss: 'to come' },
    قَوْل: { gloss: 'saying, statement' },
    رَبَّانِيّ: { gloss: 'devoted servant of the Lord, godly scholar' },
    دَرَسَ: { gloss: 'to study' },
    كِتَاب: { gloss: 'Scripture, book' },
  },
  paragraphs: [
    {
      en: "Isa called, like the other prophets, to the worship of Allah alone. This is borne out by his own words in the Gospel: \"It is written: To the Lord your God you shall bow down, and Him alone you shall worship\" (Matthew 4:10), and his saying: \"It is written: To the Lord your God you shall bow down, and Him alone you shall worship\" (Luke 4:8). And Allah, Exalted is He, said: \"It is not for a human being that Allah should give him the Scripture, judgment, and prophethood, and then he should say to the people: Be servants to me instead of Allah -- but rather: Be devoted servants of the Lord, since you used to teach the Scripture and used to study it. Nor would he command you to take the angels and the prophets as lords. Would he command you to disbelief after you had submitted to Allah?\"",
      sentences: [
        {
          id: 'qs-v12-c38-001',
          ar: 'وَقَدْ دَعَا كَغَيْرِهِ مِنَ الْأَنْبِيَاءِ إِلَى عِبَادَةِ اللَّهِ وَحْدَهُ،',
          en: 'Isa called, like the other prophets, to the worship of Allah alone,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'دَعَا', lemma: 'دَعَا', pos: 'verb', features: 'perf.3ms', gloss: 'to call, invite; called' },
            { surface: 'كَغَيْرِهِ', lemma: 'غَيْر', pos: 'noun', features: 'prep+gen+3ms', gloss: 'like others besides him' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'def.gen.pl', gloss: 'the prophets' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'constr.gen', gloss: 'the worship of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَحْدَهُ', lemma: 'وَحْد', pos: 'noun', features: 'acc+3ms', gloss: 'alone' },
          ],
        },
        {
          id: 'qs-v12-c38-002',
          ar: 'فَجَاءَ مِنْ قَوْلِهِ فِي الْإِنْجِيلِ:',
          en: 'This is borne out by his own words in the Gospel:',
          tokens: [
            { surface: 'فَجَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to come; and there came' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَوْلِهِ', lemma: 'قَوْل', pos: 'noun', features: 'gen+3ms', gloss: 'his saying' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْإِنْجِيلِ', lemma: 'إِنْجِيل', pos: 'proper', features: 'def.gen', gloss: 'the Gospel' },
          ],
        },
        {
          id: 'qs-v12-c38-003',
          ar: '«مَكْتُوبٌ لِلرَّبِّ إِلَهِكَ تَسْجُدُ، وَلَهُ وَحْدَهُ تَعْبُدُ»',
          en: '"It is written: To the Lord your God you shall bow down, and Him alone you shall worship" (Matthew 4:10),',
          tokens: [
            { surface: 'مَكْتُوبٌ', lemma: 'مَكْتُوب', pos: 'adj', features: 'indef.nom', root: 'ك ت ب', gloss: 'written' },
            { surface: 'لِلرَّبِّ', lemma: 'رَبّ', pos: 'noun', features: 'prep+def.gen', gloss: 'to the Lord' },
            { surface: 'إِلَهِكَ', lemma: 'إِلَٰه', pos: 'noun', features: 'gen+2ms', gloss: 'your God' },
            { surface: 'تَسْجُدُ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.2ms', gloss: 'to prostrate, bow down; you shall bow down' },
            { surface: 'وَلَهُ', lemma: 'لِ', pos: 'prep', features: 'conj+prep+3ms', gloss: 'and Him' },
            { surface: 'وَحْدَهُ', lemma: 'وَحْد', pos: 'noun', features: 'acc+3ms', gloss: 'alone' },
            { surface: 'تَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2ms', gloss: 'to worship; you shall worship' },
          ],
        },
        {
          id: 'qs-v12-c38-004',
          ar: 'وَقَوْلُهُ: «مَكْتُوبٌ لِلرَّبِّ إِلَهِكَ تَسْجُدُ وَلَهُ وَحْدَهُ تَعْبُدُ».',
          en: 'and his saying: "It is written: To the Lord your God you shall bow down, and Him alone you shall worship" (Luke 4:8).',
          tokens: [
            { surface: 'وَقَوْلُهُ', lemma: 'قَوْل', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his saying' },
            { surface: 'مَكْتُوبٌ', lemma: 'مَكْتُوب', pos: 'adj', features: 'indef.nom', gloss: 'written' },
            { surface: 'لِلرَّبِّ', lemma: 'رَبّ', pos: 'noun', features: 'prep+def.gen', gloss: 'to the Lord' },
            { surface: 'إِلَهِكَ', lemma: 'إِلَٰه', pos: 'noun', features: 'gen+2ms', gloss: 'your God' },
            { surface: 'تَسْجُدُ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.2ms', gloss: 'to prostrate, bow down; you shall bow down' },
            { surface: 'وَلَهُ', lemma: 'لِ', pos: 'prep', features: 'conj+prep+3ms', gloss: 'and Him' },
            { surface: 'وَحْدَهُ', lemma: 'وَحْد', pos: 'noun', features: 'acc+3ms', gloss: 'alone' },
            { surface: 'تَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2ms', gloss: 'to worship; you shall worship' },
          ],
        },
        {
          id: 'qs-v12-c38-005',
          ar: 'وَقَدْ قَالَ اللَّهُ تَعَالَى:',
          en: 'And Allah, Exalted is He, said:',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; Exalted is He' },
          ],
        },
        {
          id: 'qs-v12-c38-006',
          ar: '﴿مَا كَانَ لِبَشَرٍ أَن يُؤْتِيَهُ اللَّهُ الْكِتَابَ وَالْحُكْمَ وَالنُّبُوَّةَ',
          en: 'It is not for a human being that Allah should give him the Scripture, judgment, and prophethood,',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'لِبَشَرٍ', lemma: 'بَشَر', pos: 'noun', features: 'prep+indef.gen', gloss: 'for a human being' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يُؤْتِيَهُ', lemma: 'آتَى', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to give; should give him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'الْكِتَابَ', lemma: 'كِتَاب', pos: 'noun', features: 'def.acc', gloss: 'the Scripture' },
            { surface: 'وَالْحُكْمَ', lemma: 'حُكْم', pos: 'noun', features: 'conj+def.acc', gloss: 'and judgment' },
            { surface: 'وَالنُّبُوَّةَ', lemma: 'نُبُوَّة', pos: 'noun', features: 'conj+def.acc', gloss: 'and prophethood' },
          ],
        },
        {
          id: 'qs-v12-c38-007',
          ar: 'ثُمَّ يَقُولَ لِلنَّاسِ كُونُوا عِبَادًا لِّي مِن دُونِ اللَّهِ',
          en: 'and then he should say to the people: Be servants to me instead of Allah,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'يَقُولَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; should say' },
            { surface: 'لِلنَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'prep+def.gen', gloss: 'to the people' },
            { surface: 'كُونُوا', lemma: 'كَانَ', pos: 'verb', features: 'imp.2mp', gloss: 'to be; be' },
            { surface: 'عِبَادًا', lemma: 'عَبْد', pos: 'noun', features: 'indef.acc.pl', gloss: 'servants' },
            { surface: 'لِّي', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'to me' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'instead of' },
            { surface: 'دُونِ', lemma: 'دُون', pos: 'noun', features: 'constr.gen', gloss: 'besides' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v12-c38-008',
          ar: 'وَلَٰكِن كُونُوا رَبَّانِيِّينَ بِمَا كُنتُمْ تُعَلِّمُونَ الْكِتَابَ وَبِمَا كُنتُمْ تَدْرُسُونَ (٧٩)',
          en: 'but rather: Be devoted servants of the Lord, since you used to teach the Scripture and used to study it.',
          tokens: [
            { surface: 'وَلَٰكِن', lemma: 'لَكِنْ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'كُونُوا', lemma: 'كَانَ', pos: 'verb', features: 'imp.2mp', gloss: 'to be; be' },
            { surface: 'رَبَّانِيِّينَ', lemma: 'رَبَّانِيّ', pos: 'noun', features: 'indef.acc.pl', gloss: 'devoted servants of the Lord' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'because' },
            { surface: 'كُنتُمْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2mp', gloss: 'to be; you used to' },
            { surface: 'تُعَلِّمُونَ', lemma: 'عَلَّمَ', pos: 'verb', features: 'impf.2mp', gloss: 'to teach; you teach' },
            { surface: 'الْكِتَابَ', lemma: 'كِتَاب', pos: 'noun', features: 'def.acc', gloss: 'the Scripture' },
            { surface: 'وَبِمَا', lemma: 'مَا', pos: 'rel', features: 'conj+prep+rel', gloss: 'and because' },
            { surface: 'كُنتُمْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2mp', gloss: 'to be; you used to' },
            { surface: 'تَدْرُسُونَ', lemma: 'دَرَسَ', pos: 'verb', features: 'impf.2mp', gloss: 'to study; you study' },
          ],
        },
        {
          id: 'qs-v12-c38-009',
          ar: 'وَلَا يَأْمُرَكُمْ أَن تَتَّخِذُوا الْمَلَائِكَةَ وَالنَّبِيِّينَ أَرْبَابًا',
          en: 'Nor would he command you to take the angels and the prophets as lords.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَأْمُرَكُمْ', lemma: 'أَمَرَ', pos: 'verb', features: 'impf.3ms+2mp', gloss: 'to command; would command you' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'تَتَّخِذُوا', lemma: 'اتَّخَذَ', pos: 'verb', features: 'impf.2mp', gloss: 'to take, adopt; take' },
            { surface: 'الْمَلَائِكَةَ', lemma: 'مَلَك', pos: 'noun', features: 'def.acc.pl', gloss: 'the angels' },
            { surface: 'وَالنَّبِيِّينَ', lemma: 'نَبِيّ', pos: 'noun', features: 'conj+def.acc.pl', gloss: 'and the prophets' },
            { surface: 'أَرْبَابًا', lemma: 'رَبّ', pos: 'noun', features: 'indef.acc.pl', gloss: 'lords' },
          ],
        },
        {
          id: 'qs-v12-c38-010',
          ar: 'أَيَأْمُرُكُم بِالْكُفْرِ بَعْدَ إِذْ أَنتُم مُّسْلِمُونَ (٨٠)﴾.',
          en: 'Would he command you to disbelief after you had submitted to Allah?"',
          tokens: [
            { surface: 'أَيَأْمُرُكُم', lemma: 'أَمَرَ', pos: 'verb', features: 'part+impf.3ms+2mp', gloss: 'to command; would he command you' },
            { surface: 'بِالْكُفْرِ', lemma: 'كُفْر', pos: 'noun', features: 'prep+def.gen', gloss: 'with disbelief' },
            { surface: 'بَعْدَ', lemma: 'بَعْد', pos: 'noun', features: 'acc', gloss: 'after' },
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'أَنتُم', lemma: 'أَنْتُمْ', pos: 'noun', features: '2mp', gloss: 'you' },
            { surface: 'مُّسْلِمُونَ', lemma: 'مُسْلِم', pos: 'noun', features: 'indef.nom.pl', gloss: 'Muslims, submitters' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا دَعَا عِيسَى قَوْمَهُ؟',
          options: [
            'دَعَاهُمْ كَغَيْرِهِ مِنَ الْأَنْبِيَاءِ إِلَى عِبَادَةِ اللَّهِ وَحْدَهُ',
            'دَعَاهُمْ إِلَى عِبَادَتِهِ هُوَ',
            'لَمْ يَدْعُهُمْ إِلَى شَيْءٍ',
          ],
          answer: 0,
          qEn: 'What did Isa call his people to?',
          optionsEn: [
            'He called them, like the other prophets, to the worship of Allah alone',
            'He called them to worship him',
            'He did not call them to anything',
          ],
        },
        {
          q: 'مَاذَا جَاءَ فِي الْإِنْجِيلِ عَنْ قَوْلِ عِيسَى؟',
          options: [
            'مَكْتُوبٌ لِلرَّبِّ إِلَهِكَ تَسْجُدُ وَلَهُ وَحْدَهُ تَعْبُدُ',
            'مَكْتُوبٌ اعْبُدُونِي أَنَا',
            'لَمْ يَرِدْ فِيهِ شَيْءٌ عَنْ ذَلِكَ',
          ],
          answer: 0,
          qEn: "What does the Gospel record of Isa's own words?",
          optionsEn: [
            'It is written: To the Lord your God you shall bow down, and Him alone you shall worship',
            'It is written: worship me alone',
            'Nothing about this is recorded in it',
          ],
        },
        {
          q: 'مَاذَا قَالَ اللَّهُ تَعَالَى عَمَّنْ يُؤْتِيهِ الْكِتَابَ وَالْحُكْمَ وَالنُّبُوَّةَ؟',
          options: [
            'مَا كَانَ لِبَشَرٍ أَنْ يَدْعُوَ النَّاسَ لِعِبَادَتِهِ مِنْ دُونِ اللَّهِ، بَلْ يَدْعُوهُمْ لِيَكُونُوا رَبَّانِيِّينَ',
            'أَنَّهُ يَحِقُّ لَهُ أَنْ يُعْبَدَ',
            'لَمْ يَذْكُرْ شَيْئاً عَنْ هَذَا الْأَمْرِ',
          ],
          answer: 0,
          qEn: 'What did Allah, Exalted is He, say about one given the Scripture, judgment, and prophethood?',
          optionsEn: [
            'That it is not for a human being to call people to worship him instead of Allah; rather he should call them to be devoted servants of the Lord',
            'That he has the right to be worshiped',
            'He said nothing about this matter',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'مَكْتُوبٌ لِلرَّبِّ إِلَهِكَ',
        post: '، وَلَهُ وَحْدَهُ تَعْبُدُ.',
        en: 'It is written: To the Lord your God you shall bow down, and Him alone you shall worship.',
        options: ['تَسْجُدُ', 'يَسْجُدُ', 'اسْجُدْ', 'سَاجِد'],
        answer: 0,
        rationales: [
          '2nd masculine singular imperfect -- matches the parallel تَعْبُدُ later in the same recurring frame ("to the Lord... you shall X").',
          '3rd masculine singular -- wrong person; the verse addresses "you."',
          'Imperative -- wrong mood for this quoted statement.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَٰكِن',
        post: 'رَبَّانِيِّينَ بِمَا كُنتُمْ تُعَلِّمُونَ الْكِتَابَ.',
        en: 'But be devoted servants of the Lord, since you used to teach the Scripture.',
        options: ['كُونُوا', 'كَانُوا', 'يَكُونُونَ', 'كَائِنُونَ'],
        answer: 0,
        rationales: [
          'Imperative, 2nd masculine plural -- matches the recurring كُونُوا frame used twice in this quote.',
          'Perfect -- wrong mood; this is a command, not narration.',
          'Imperfect -- wrong mood for the same reason.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَقَدْ دَعَا',
        post: 'مِنَ الْأَنْبِيَاءِ إِلَى عِبَادَةِ اللَّهِ وَحْدَهُ.',
        en: 'He called, like the other prophets, to the worship of Allah alone.',
        options: ['كَغَيْرِهِ', 'كَغَيْرِهَا', 'كَغَيْرِهِمْ', 'كَغَيْرِي'],
        answer: 0,
        rationales: [
          'Masculine singular suffix -- matches عِيسَى ("he").',
          'Feminine singular suffix -- wrong gender.',
          'Plural suffix -- wrong number; Isa alone is meant.',
          '1st singular suffix -- wrong person; the sentence is about him, not the speaker.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'تَعْبُدُ اللَّهَ وَحْدَهُ',
        pre: '',
        post: 'اللَّهَ وَحْدَهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَعْبُدُ', 'تَعْبُدُ', 'يَعْبُدُ', 'نَعْبُدُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '2nd masculine singular -- the base form, not shifted to "I."',
          '3rd masculine singular -- he.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'تَعْبُدُ اللَّهَ وَحْدَهُ',
        pre: '',
        post: 'اللَّهَ وَحْدَهُ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَعْبُدُونَ', 'تَعْبُدُ', 'يَعْبُدُ', 'نَعْبُدُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '2nd masculine singular -- the base form, not shifted to "they."',
          '3rd masculine singular -- he.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'تَعْبُدُ اللَّهَ وَحْدَهُ',
        pre: '',
        post: 'اللَّهَ وَحْدَهُ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَعْبُدُ', 'تَعْبُدُ', 'يَعْبُدُ', 'أَعْبُدُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '2nd masculine singular -- the base form, not shifted to "we."',
          '3rd masculine singular -- he.',
          '1st singular -- I.',
        ],
      },
    ],
  },
};

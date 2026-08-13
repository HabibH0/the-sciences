// قَصَصُ النَّبِيِّينَ, volume 9 «قِصَّةُ سَيِّدِنَا دَاوُدَ، وَسَيِّدِنَا سُلَيْمَانَ»,
// chapter 1 -- الْقُرْآنُ يَتَحَدَّثُ عَنْ آلَاءِ اللَّهِ.
// Printed page 223 (from the volume's opening basmala/title page) through the
// top of page 224, ending right before ch2's heading نِعْمَةُ اللَّهِ عَلَى
// دَاوُدَ partway down that page. Transcribed by hand from the scan (vision
// OCR, 200dpi render) against ../CHAPTER-FORMAT.md. Titles for this whole
// volume were cross-checked against the book's own topical index (p.285) --
// note this corrects QASAS_VOLUME_MAP.md's ch3 title from شُكْرَةٌ to the
// index's own شُكْرُهُ.
//
// An unnumbered paragraph opens the volume before the "١" heading box: the
// Qur'an does not limit itself to recounting Allah's Days and the abuse His
// messengers suffered, but also recounts many favours (آلاء) He granted
// specific prophets -- Dāwūd and Sulaymān among them, then Ayyūb and Yūnus,
// then Zakariyyā and Yaḥyā (naming every story this whole PDF volume-block
// will go on to cover, through volume 12). The chapter proper then opens on
// Dāwūd and Sulaymān specifically: Allah established them in the earth,
// widened their dominion, and taught them what people did not know, quoting
// Sūrat an-Naml 27:15-16 (the two Prophets' own grateful reply, and
// Sulaymān's declaration to mankind that he was taught the speech of birds).
//
// Grammar / lexical notes:
//   -- لَقِيَهُ (unit 002) keeps a resumptive pronoun on the مَا-relative
//      ("that which the Prophets and Messengers met -- it"), a standard
//      classical construction; contrast unit 003's لَقِيَتْ, which has no
//      resumptive pronoun and instead simply agrees in gender with its
//      following subject هَذِهِ الْأُمَمُ (fem.), verb-before-subject style.
//   -- سَخَّرَ (new, "to subjugate, put to use") and سُخْرِيَّة (new,
//      "mockery, ridicule") share the root س خ ر but diverge in meaning --
//      kept as two separate lemmas, not conflated.
//   -- أُوتِينَا (Naml 27:16) is tagged under the already-taught lemma آتَى
//      (qasas corpus, form IV "to give"), not a new lemma -- it is آتَى's own
//      passive (pass+impf.1p), the same "أُوتِيَ = passive of آتَى" relation
//      already implicit wherever آتَى appears active elsewhere.
//   -- Both Qur'an quotes (An-Naml 27:15 and 27:16) are kept in their own
//      ﴿﴾-wrapped sentences and split at natural clause breaks to stay at or
//      under nine tokens, matching the qasas-v3 ch17 precedent -- no
//      shortening for its own sake, no rewording.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): ذِكْر، يَوْم، اللَّه،
//      لَقِيَ، قَتْل، قَتَلَ، بِ، نَبِيّ، حَكَى، أَنْعَمَ، قَوِيّ، حَيَوَان، عِلْم،
//      فَضْل، مُبِين، دُعَاء، بَصِير، كَثِير، مَلِك (implicit)، قَوْم، شَكَرَ،
//      شُكْر، عَبْد، حَكَمَ، حَقّ، سَبِيل، عَذَاب، جِنّ، رِيح، شَيْطَان، مَاء،
//      شَمْس، سَجَدَ، أُمَّة، أَرْض، طَيْر، مُلْك، أَتَى، آتَى، رَسُول
//      are all already taught and are NOT re-listed in newWords here.
//
// 26 new words -- an unusually dense chapter, expected of the volume's own
// scene-setting opener: it names five prophets never before seen in this
// corpus and introduces the register of Qur'anic favour/gratitude vocabulary
// (آلَاء، نِعْمَة، شُكْر's whole semantic field) that the rest of the volume
// leans on repeatedly.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch1',
  title: { ar: 'الْقُرْآنُ يَتَحَدَّثُ عَنْ آلَاءِ اللَّهِ', en: 'The Quran Speaks of the Bounties of Allah' },
  newWords: [
    'اِقْتَصَرَ', 'تَكْذِيب', 'سُخْرِيَّة', 'إِهَانَة', 'مُطَارَدَة', 'بَعَثَ',
    'عُقُوبَة', 'هَلَاك', 'دَمَار', 'اِسْتِهْزَاء', 'كَيْد', 'هَمّ', 'مَرَّ',
    'تَحَدَّثَ', 'آلَاء', 'بَسْط', 'اِخْتِصَار', 'نِعْمَة', 'مَكَّنَ', 'وَسَّعَ', 'مَدَّ',
    'سَخَّرَ', 'عَاتٍ', 'اِنْقَادَ', 'جَمَاد', 'وَرِثَ', 'مَنْطِق',
  ],
  lemmas: {
    اِقْتَصَرَ: { gloss: 'to limit oneself to' },
    تَكْذِيب: { gloss: 'denial, calling a liar' },
    سُخْرِيَّة: { gloss: 'mockery, ridicule' },
    إِهَانَة: { gloss: 'humiliation, insult' },
    مُطَارَدَة: { gloss: 'pursuit, hounding' },
    بَعَثَ: { gloss: 'to send, raise up' },
    عُقُوبَة: { gloss: 'punishment' },
    هَلَاك: { gloss: 'destruction, ruin' },
    دَمَار: { gloss: 'devastation, ruin' },
    اِسْتِهْزَاء: { gloss: 'mocking, scoffing' },
    كَيْد: { gloss: 'scheming, plotting' },
    هَمّ: { gloss: 'intent, resolve to do' },
    مَرَّ: { gloss: 'to pass by, have passed' },
    تَحَدَّثَ: { gloss: 'to speak, discourse' },
    آلَاء: { gloss: 'bounties, favours (of Allah)' },
    بَسْط: { gloss: 'expansion, detail' },
    اِخْتِصَار: { gloss: 'summary, brevity' },
    نِعْمَة: { gloss: 'a blessing, favour' },
    مَكَّنَ: { gloss: 'to establish, empower' },
    وَسَّعَ: { gloss: 'to widen, expand' },
    مَدَّ: { gloss: 'to extend, stretch out' },
    سَخَّرَ: { gloss: 'to subjugate, put to service' },
    عَاتٍ: { gloss: 'a tyrant, a rebellious one' },
    اِنْقَادَ: { gloss: 'to submit, be led' },
    جَمَاد: { gloss: 'an inanimate thing' },
    وَرِثَ: { gloss: 'to inherit' },
    مَنْطِق: { gloss: 'speech, language' },
  },
  paragraphs: [
    {
      en: "The Quran did not limit itself to mentioning Allah's Days and the denial, mockery, humiliation, and pursuit the Prophets and Messengers met from the nations they were sent to, nor to what punishment, torment, destruction, and ruin these nations met for denying the Messengers, mocking them, scheming against them, and intending to kill them -- as has already passed before you in the Stories of the Prophets.",
      sentences: [
        {
          id: 'qs-v9-c01-001',
          ar: 'وَلَمْ يَقْتَصِرِ الْقُرْآنُ عَلَى ذِكْرِ أَيَّامِ اللَّهِ',
          en: "The Quran did not limit itself to mentioning Allah's Days",
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and did not' },
            { surface: 'يَقْتَصِرِ', lemma: 'اِقْتَصَرَ', pos: 'verb', features: 'impf.3ms', root: 'ق ص ر', gloss: 'to limit oneself; limit itself' },
            { surface: 'الْقُرْآنُ', lemma: 'قُرْآن', pos: 'proper', features: 'def.nom', gloss: 'the Quran' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ذِكْرِ', lemma: 'ذِكْر', pos: 'noun', features: 'constr.gen', gloss: 'the mentioning of' },
            { surface: 'أَيَّامِ', lemma: 'يَوْم', pos: 'noun', features: 'pl.constr.gen', gloss: 'the days of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v9-c01-002',
          ar: 'وَمَا لَقِيَهُ الْأَنْبِيَاءُ وَالرُّسُلُ مِنْ تَكْذِيبٍ وَسُخْرِيَّةٍ وَإِهَانَةٍ وَمُطَارَدَةٍ مِنَ الْأُمَمِ الَّتِي بُعِثُوا فِيهَا،',
          en: 'nor to what denial, mockery, humiliation, and pursuit the Prophets and Messengers met from the nations they were sent to,',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'and what' },
            { surface: 'لَقِيَهُ', lemma: 'لَقِيَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to meet, encounter; met it' },
            { surface: 'الْأَنْبِيَاءُ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.nom', gloss: 'the Prophets' },
            { surface: 'وَالرُّسُلُ', lemma: 'رَسُول', pos: 'noun', features: 'conj+pl.def.nom', gloss: 'and the Messengers' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'تَكْذِيبٍ', lemma: 'تَكْذِيب', pos: 'noun', features: 'indef.gen', root: 'ك ذ ب', gloss: 'denial' },
            { surface: 'وَسُخْرِيَّةٍ', lemma: 'سُخْرِيَّة', pos: 'noun', features: 'conj+indef.gen', root: 'س خ ر', gloss: 'and mockery' },
            { surface: 'وَإِهَانَةٍ', lemma: 'إِهَانَة', pos: 'noun', features: 'conj+indef.gen', root: 'ه و ن', gloss: 'and humiliation' },
            { surface: 'وَمُطَارَدَةٍ', lemma: 'مُطَارَدَة', pos: 'noun', features: 'conj+indef.gen', root: 'ط ر د', gloss: 'and pursuit' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْأُمَمِ', lemma: 'أُمَّة', pos: 'noun', features: 'pl.def.gen', gloss: 'the nations' },
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.f', gloss: 'that' },
            { surface: 'بُعِثُوا', lemma: 'بَعَثَ', pos: 'verb', features: 'pass+perf.3mp', root: 'ب ع ث', gloss: 'to send, raise up; they were sent' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'to (them)' },
          ],
        },
        {
          id: 'qs-v9-c01-003',
          ar: 'وَمَا لَقِيَتْ هَذِهِ الْأُمَمُ مِنْ عُقُوبَةٍ وَعَذَابٍ وَهَلَاكٍ وَدَمَارٍ لِتَكْذِيبِهَا لِلرُّسُلِ وَاسْتِهْزَائِهَا بِهِمْ وَكَيْدِهَا لَهُمْ وَهَمِّهَا بِقَتْلِهِمْ،',
          en: 'nor to what punishment, torment, destruction, and ruin these nations met for denying the Messengers, mocking them, scheming against them, and intending to kill them,',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'and what' },
            { surface: 'لَقِيَتْ', lemma: 'لَقِيَ', pos: 'verb', features: 'perf.3fs', gloss: 'to meet, encounter; met' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الْأُمَمُ', lemma: 'أُمَّة', pos: 'noun', features: 'pl.def.nom', gloss: 'the nations' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'عُقُوبَةٍ', lemma: 'عُقُوبَة', pos: 'noun', features: 'indef.gen', root: 'ع ق ب', gloss: 'punishment' },
            { surface: 'وَعَذَابٍ', lemma: 'عَذَاب', pos: 'noun', features: 'conj+indef.gen', gloss: 'and torment' },
            { surface: 'وَهَلَاكٍ', lemma: 'هَلَاك', pos: 'noun', features: 'conj+indef.gen', root: 'ه ل ك', gloss: 'and destruction' },
            { surface: 'وَدَمَارٍ', lemma: 'دَمَار', pos: 'noun', features: 'conj+indef.gen', root: 'د م ر', gloss: 'and ruin' },
            { surface: 'لِتَكْذِيبِهَا', lemma: 'تَكْذِيب', pos: 'noun', features: 'prep+constr.gen+3fs', gloss: 'for its denying' },
            { surface: 'لِلرُّسُلِ', lemma: 'رَسُول', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'of the Messengers' },
            { surface: 'وَاسْتِهْزَائِهَا', lemma: 'اِسْتِهْزَاء', pos: 'noun', features: 'conj+constr.gen+3fs', root: 'ه ز أ', gloss: 'and its mocking' },
            { surface: 'بِهِمْ', lemma: 'بِ', pos: 'prep', features: 'prep+3mp', gloss: 'of them' },
            { surface: 'وَكَيْدِهَا', lemma: 'كَيْد', pos: 'noun', features: 'conj+constr.gen+3fs', gloss: 'and its scheming' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'against them' },
            { surface: 'وَهَمِّهَا', lemma: 'هَمّ', pos: 'noun', features: 'conj+constr.gen+3fs', gloss: 'and its intending' },
            { surface: 'بِقَتْلِهِمْ', lemma: 'قَتْل', pos: 'noun', features: 'prep+constr.gen+3mp', gloss: 'to kill them' },
          ],
        },
        {
          id: 'qs-v9-c01-004',
          ar: 'كَمَا مَرَّ بِكُمْ فِي قَصَصِ النَّبِيِّينَ.',
          en: 'as has already passed before you in the Stories of the Prophets.',
          tokens: [
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'as' },
            { surface: 'مَرَّ', lemma: 'مَرَّ', pos: 'verb', features: 'perf.3ms', root: 'م ر ر', gloss: 'to pass; passed' },
            { surface: 'بِكُمْ', lemma: 'بِ', pos: 'prep', features: 'prep+2mp', gloss: 'before you' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'قَصَصِ', lemma: 'قَصَص', pos: 'noun', features: 'constr.gen', gloss: 'the stories of' },
            { surface: 'النَّبِيِّينَ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the Prophets' },
          ],
        },
        {
          id: 'qs-v9-c01-005',
          ar: 'بَلْ تَحَدَّثَ الْقُرْآنُ كَثِيراً عَنْ آلَاءِ اللَّهِ،',
          en: 'Rather, the Quran speaks much of the bounties of Allah,',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'تَحَدَّثَ', lemma: 'تَحَدَّثَ', pos: 'verb', features: 'perf.3ms', root: 'ح د ث', gloss: 'to speak, discourse; speaks' },
            { surface: 'الْقُرْآنُ', lemma: 'قُرْآن', pos: 'proper', features: 'def.nom', gloss: 'the Quran' },
            { surface: 'كَثِيراً', lemma: 'كَثِير', pos: 'adv', features: 'indef.acc', gloss: 'much' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'آلَاءِ', lemma: 'آلَاء', pos: 'noun', features: 'constr.gen', root: 'أ ل و', gloss: 'the bounties of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v9-c01-006',
          ar: 'وَحَكَى فِي بَسْطٍ أَحْيَاناً وَفِي اخْتِصَارٍ أَحْيَاناً عَنْ نِعَمٍ كَثِيرَةٍ،',
          en: 'and narrates, at times at length and at times in brief, of many blessings,',
          tokens: [
            { surface: 'وَحَكَى', lemma: 'حَكَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to narrate; and narrates' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'بَسْطٍ', lemma: 'بَسْط', pos: 'noun', features: 'indef.gen', root: 'ب س ط', gloss: 'length, expansion' },
            { surface: 'أَحْيَاناً', lemma: 'أَحْيَان', pos: 'adv', features: 'pl.indef.acc', gloss: 'at times' },
            { surface: 'وَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and at' },
            { surface: 'اخْتِصَارٍ', lemma: 'اِخْتِصَار', pos: 'noun', features: 'indef.gen', root: 'خ ص ر', gloss: 'brevity, a summary' },
            { surface: 'أَحْيَاناً', lemma: 'أَحْيَان', pos: 'adv', features: 'pl.indef.acc', gloss: 'at times' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'نِعَمٍ', lemma: 'نِعْمَة', pos: 'noun', features: 'pl.indef.gen', root: 'ن ع م', gloss: 'blessings' },
            { surface: 'كَثِيرَةٍ', lemma: 'كَثِير', pos: 'adj', features: 'indef.gen.f', gloss: 'many' },
          ],
        },
        {
          id: 'qs-v9-c01-007',
          ar: 'أَنْعَمَ بِهَا عَلَى كَثِيرٍ مِنَ الْأَنْبِيَاءِ،',
          en: 'which He bestowed upon many of the Prophets,',
          tokens: [
            { surface: 'أَنْعَمَ', lemma: 'أَنْعَمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to bestow, favour; bestowed' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'with them' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'كَثِيرٍ', lemma: 'كَثِير', pos: 'noun', features: 'indef.gen', gloss: 'many' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the Prophets' },
          ],
        },
        {
          id: 'qs-v9-c01-008',
          ar: 'مِنْهُمْ دَاوُدُ وَسُلَيْمَانُ،',
          en: 'among them Dāwūd and Sulaymān,',
          tokens: [
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'دَاوُدُ', lemma: 'دَاوُد', pos: 'proper', features: 'nom', gloss: 'Dāwūd' },
            { surface: 'وَسُلَيْمَانُ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'conj+nom', gloss: 'and Sulaymān' },
          ],
        },
        {
          id: 'qs-v9-c01-009',
          ar: 'وَمِنْهُمْ أَيُّوبُ وَيُونُسُ،',
          en: 'and among them Ayyūb and Yūnus,',
          tokens: [
            { surface: 'وَمِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'conj+prep+3mp', gloss: 'and among them' },
            { surface: 'أَيُّوبُ', lemma: 'أَيُّوب', pos: 'proper', features: 'nom', gloss: 'Ayyūb' },
            { surface: 'وَيُونُسُ', lemma: 'يُونُس', pos: 'proper', features: 'conj+nom', gloss: 'and Yūnus' },
          ],
        },
        {
          id: 'qs-v9-c01-010',
          ar: 'وَمِنْهُمْ زَكَرِيَّا وَيَحْيَى.',
          en: 'and among them Zakariyyā and Yaḥyā.',
          tokens: [
            { surface: 'وَمِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'conj+prep+3mp', gloss: 'and among them' },
            { surface: 'زَكَرِيَّا', lemma: 'زَكَرِيَّا', pos: 'proper', features: 'nom', gloss: 'Zakariyyā' },
            { surface: 'وَيَحْيَى', lemma: 'يَحْيَى', pos: 'proper', features: 'conj+nom', gloss: 'and Yaḥyā' },
          ],
        },
        {
          id: 'qs-v9-c01-011',
          ar: 'فَأَمَّا دَاوُدُ وَسُلَيْمَانُ فَقَدْ مَكَّنَ اللَّهُ لَهُمَا فِي الْأَرْضِ،',
          en: 'As for Dāwūd and Sulaymān, Allah established them both in the earth,',
          tokens: [
            { surface: 'فَأَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'conj+part', gloss: 'as for' },
            { surface: 'دَاوُدُ', lemma: 'دَاوُد', pos: 'proper', features: 'nom', gloss: 'Dāwūd' },
            { surface: 'وَسُلَيْمَانُ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'conj+nom', gloss: 'and Sulaymān' },
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'then indeed' },
            { surface: 'مَكَّنَ', lemma: 'مَكَّنَ', pos: 'verb', features: 'perf.3ms', root: 'م ك ن', gloss: 'to establish; established' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَهُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+3md', gloss: 'them both' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
          ],
        },
        {
          id: 'qs-v9-c01-012',
          ar: 'وَوَسَّعَ لَهُمَا فِي الْمُلْكِ،',
          en: 'widened their dominion,',
          tokens: [
            { surface: 'وَوَسَّعَ', lemma: 'وَسَّعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'و س ع', gloss: 'to widen; and widened' },
            { surface: 'لَهُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+3md', gloss: 'for them both' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْمُلْكِ', lemma: 'مُلْك', pos: 'noun', features: 'def.gen', gloss: 'the dominion' },
          ],
        },
        {
          id: 'qs-v9-c01-013',
          ar: 'وَمَدَّ لَهُمَا فِي الْعِلْمِ،',
          en: 'extended their knowledge,',
          tokens: [
            { surface: 'وَمَدَّ', lemma: 'مَدَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'م د د', gloss: 'to extend; and extended' },
            { surface: 'لَهُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+3md', gloss: 'for them both' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْعِلْمِ', lemma: 'عِلْم', pos: 'noun', features: 'def.gen', gloss: 'the knowledge' },
          ],
        },
        {
          id: 'qs-v9-c01-014',
          ar: 'وَعَلَّمَهُمَا كَثِيراً مِمَّا جَهِلَهُ النَّاسُ،',
          en: 'and taught them both much of what people did not know,',
          tokens: [
            { surface: 'وَعَلَّمَهُمَا', lemma: 'عَلَّمَ', pos: 'verb', features: 'conj+perf.3ms+3md', gloss: 'to teach; and taught them both' },
            { surface: 'كَثِيراً', lemma: 'كَثِير', pos: 'noun', features: 'indef.acc', gloss: 'much' },
            { surface: 'مِمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of what' },
            { surface: 'جَهِلَهُ', lemma: 'جَهِلَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to not know; did not know it' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v9-c01-015',
          ar: 'وَسَخَّرَ لَهُمَا الْأَقْوِيَاءَ وَالْعُتَاةَ،',
          en: 'and subjected to them the mighty and the tyrants,',
          tokens: [
            { surface: 'وَسَخَّرَ', lemma: 'سَخَّرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س خ ر', gloss: 'to subjugate; and subjected' },
            { surface: 'لَهُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+3md', gloss: 'to them both' },
            { surface: 'الْأَقْوِيَاءَ', lemma: 'قَوِيّ', pos: 'noun', features: 'pl.def.acc', gloss: 'the mighty' },
            { surface: 'وَالْعُتَاةَ', lemma: 'عَاتٍ', pos: 'noun', features: 'conj+pl.def.acc', root: 'ع ت و', gloss: 'and the tyrants' },
          ],
        },
        {
          id: 'qs-v9-c01-016',
          ar: 'وَمَا لَا يَنْقَادُ مِنَ الْحَيَوَانَاتِ وَالْجَمَادَاتِ،',
          en: 'and what does not submit of the animals and inanimate things,',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'and what' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَنْقَادُ', lemma: 'اِنْقَادَ', pos: 'verb', features: 'impf.3ms', root: 'ق و د', gloss: 'to submit, be led; submits' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْحَيَوَانَاتِ', lemma: 'حَيَوَان', pos: 'noun', features: 'pl.def.gen', gloss: 'the animals' },
            { surface: 'وَالْجَمَادَاتِ', lemma: 'جَمَاد', pos: 'noun', features: 'conj+pl.def.gen', gloss: 'and the inanimate things' },
          ],
        },
        {
          id: 'qs-v9-c01-017',
          ar: 'فَقَالَ:',
          en: 'so He said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; so He said' },
          ],
        },
        {
          id: 'qs-v9-c01-018',
          ar: '﴿وَلَقَدْ آتَيْنَا دَاوُودَ وَسُلَيْمَانَ عِلْماً﴾',
          en: '"And We had certainly given Dāwūd and Sulaymān knowledge,',
          tokens: [
            { surface: 'وَلَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and certainly' },
            { surface: 'آتَيْنَا', lemma: 'آتَى', pos: 'verb', features: 'perf.1p', gloss: 'to give; We gave' },
            { surface: 'دَاوُودَ', lemma: 'دَاوُد', pos: 'proper', features: 'acc', gloss: 'Dāwūd' },
            { surface: 'وَسُلَيْمَانَ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'conj+acc', gloss: 'and Sulaymān' },
            { surface: 'عِلْماً', lemma: 'عِلْم', pos: 'noun', features: 'indef.acc', gloss: 'knowledge' },
          ],
        },
        {
          id: 'qs-v9-c01-019',
          ar: '﴿وَقَالَا الْحَمْدُ لِلَّهِ الَّذِي فَضَّلَنَا﴾',
          en: 'and they both said: praise be to Allah, who has favoured us',
          tokens: [
            { surface: 'وَقَالَا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3md', gloss: 'to say; and they both said' },
            { surface: 'الْحَمْدُ', lemma: 'حَمْد', pos: 'noun', features: 'def.nom', gloss: 'the praise' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'to Allah' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'فَضَّلَنَا', lemma: 'فَضَّلَ', pos: 'verb', features: 'perf.3ms+1p', gloss: 'to favour; favoured us' },
          ],
        },
        {
          id: 'qs-v9-c01-020',
          ar: '﴿عَلَى كَثِيرٍ مِنْ عِبَادِهِ الْمُؤْمِنِينَ﴾',
          en: 'over many of His believing servants."',
          tokens: [
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'كَثِيرٍ', lemma: 'كَثِير', pos: 'noun', features: 'indef.gen', gloss: 'many' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'عِبَادِهِ', lemma: 'عَبْد', pos: 'noun', features: 'pl.constr.gen+3ms', gloss: 'His servants' },
            { surface: 'الْمُؤْمِنِينَ', lemma: 'مُؤْمِن', pos: 'adj', features: 'pl.def.gen', gloss: 'the believing' },
          ],
        },
        {
          id: 'qs-v9-c01-021',
          ar: '﴿وَوَرِثَ سُلَيْمَانُ دَاوُودَ﴾',
          en: '"And Sulaymān inherited (the prophethood of) Dāwūd,',
          tokens: [
            { surface: 'وَوَرِثَ', lemma: 'وَرِثَ', pos: 'verb', features: 'conj+perf.3ms', root: 'و ر ث', gloss: 'to inherit; and inherited' },
            { surface: 'سُلَيْمَانُ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'nom', gloss: 'Sulaymān' },
            { surface: 'دَاوُودَ', lemma: 'دَاوُد', pos: 'proper', features: 'acc', gloss: 'Dāwūd' },
          ],
        },
        {
          id: 'qs-v9-c01-022',
          ar: '﴿وَقَالَ يَا أَيُّهَا النَّاسُ عُلِّمْنَا مَنْطِقَ الطَّيْرِ﴾',
          en: 'and said: O people, we have been taught the language of birds,',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أَيُّهَا', lemma: 'أَيُّهَا', pos: 'part', features: 'part', gloss: 'you' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'people' },
            { surface: 'عُلِّمْنَا', lemma: 'عَلَّمَ', pos: 'verb', features: 'pass+perf.1p', gloss: 'to teach; we have been taught' },
            { surface: 'مَنْطِقَ', lemma: 'مَنْطِق', pos: 'noun', features: 'acc.constr', root: 'ن ط ق', gloss: 'the language of' },
            { surface: 'الطَّيْرِ', lemma: 'طَيْر', pos: 'noun', features: 'def.gen', gloss: 'the birds' },
          ],
        },
        {
          id: 'qs-v9-c01-023',
          ar: '﴿وَأُوتِينَا مِنْ كُلِّ شَيْءٍ﴾',
          en: 'and have been given from all things.',
          tokens: [
            { surface: 'وَأُوتِينَا', lemma: 'آتَى', pos: 'verb', features: 'conj+pass+perf.1p', gloss: 'to give; and we have been given' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
          ],
        },
        {
          id: 'qs-v9-c01-024',
          ar: '﴿إِنَّ هَذَا لَهُوَ الْفَضْلُ الْمُبِينُ﴾.',
          en: 'Indeed, this is evident favour."',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem', gloss: 'this' },
            { surface: 'لَهُوَ', lemma: 'هُوَ', pos: 'part', features: 'part+3ms', gloss: 'is indeed' },
            { surface: 'الْفَضْلُ', lemma: 'فَضْل', pos: 'noun', features: 'def.nom', gloss: 'the favour' },
            { surface: 'الْمُبِينُ', lemma: 'مُبِين', pos: 'adj', features: 'def.nom', gloss: 'the evident' },
          ],
        },
      ],
      checks: [
        {
          q: 'هَلِ اقْتَصَرَ الْقُرْآنُ عَلَى ذِكْرِ أَيَّامِ اللَّهِ فَقَطْ؟',
          options: ['لَا، بَلْ تَحَدَّثَ أَيْضاً كَثِيراً عَنْ آلَاءِ اللَّهِ عَلَى الْأَنْبِيَاءِ', 'نَعَمْ، لَمْ يَذْكُرْ شَيْئاً آخَرَ', 'تَحَدَّثَ فَقَطْ عَنْ عَذَابِ الْأُمَمِ'],
          answer: 0,
          qEn: "Did the Quran limit itself only to mentioning Allah's Days?",
          optionsEn: ["No, it also spoke much of Allah's bounties upon the Prophets", 'Yes, it mentioned nothing else', 'It only spoke of the punishment of nations'],
        },
        {
          q: 'مَنِ الْأَنْبِيَاءُ الَّذِينَ ذُكِرُوا فِي هَذِهِ الْمُقَدِّمَةِ؟',
          options: ['دَاوُدُ وَسُلَيْمَانُ وَأَيُّوبُ وَيُونُسُ وَزَكَرِيَّا وَيَحْيَى', 'إِبْرَاهِيمُ وَإِسْمَاعِيلُ فَقَطْ', 'مُوسَى وَهَارُونُ فَقَطْ'],
          answer: 0,
          qEn: 'Which Prophets are named in this introduction?',
          optionsEn: ['Dāwūd, Sulaymān, Ayyūb, Yūnus, Zakariyyā, and Yaḥyā', 'Only Ibrāhīm and Ismāʿīl', 'Only Mūsā and Hārūn'],
        },
        {
          q: 'مَاذَا فَعَلَ اللَّهُ لِدَاوُدَ وَسُلَيْمَانَ؟',
          options: ['مَكَّنَ لَهُمَا فِي الْأَرْضِ وَوَسَّعَ لَهُمَا فِي الْمُلْكِ وَالْعِلْمِ', 'تَرَكَهُمَا بِلَا مُلْكٍ وَلَا عِلْمٍ', 'أَعْطَاهُمَا الْمَالَ فَقَطْ'],
          answer: 0,
          qEn: 'What did Allah do for Dāwūd and Sulaymān?',
          optionsEn: ['He established them in the earth and widened their dominion and knowledge', 'He left them with neither dominion nor knowledge', 'He gave them only wealth'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَمْ يَقْتَصِرِ الْقُرْآنُ عَلَى ذِكْرِ أَيَّامِ',
        post: '،',
        en: "The Quran did not limit itself to mentioning Allah's Days,",
        options: ['اللَّهِ', 'اللَّهُ', 'اللَّهَ', 'لِلَّهِ'],
        answer: 0,
        rationales: [
          'Genitive -- second term of the إضافة with أَيَّام, matching the printed أَيَّامِ اللَّهِ.',
          'Nominative -- wrong case; the second term of an إضافة is always genitive.',
          'Accusative -- wrong case for the same reason.',
          'With a fused preposition ("to Allah") -- wrong; no preposition governs this word here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَأَمَّا دَاوُدُ وَسُلَيْمَانُ فَقَدْ مَكَّنَ',
        post: 'لَهُمَا فِي الْأَرْضِ.',
        en: "As for Dāwūd and Sulaymān, Allah established them both in the earth.",
        options: ['اللَّهُ', 'اللَّهَ', 'اللَّهِ', 'وَاللَّهُ'],
        answer: 0,
        rationales: [
          'Nominative -- subject of مَكَّنَ, matching the printed مَكَّنَ اللَّهُ لَهُمَا.',
          'Accusative -- wrong case; the subject of a verb is nominative, not accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'With a coordinating وَ -- wrong; nothing is being coordinated with اللَّه in this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ سُلَيْمَانُ: يَا أَيُّهَا النَّاسُ عُلِّمْنَا',
        post: 'الطَّيْرِ.',
        en: 'Sulaymān said: O people, we have been taught the language of birds.',
        options: ['مَنْطِقَ', 'مَنْطِقٌ', 'مَنْطِقِ', 'مَنَاطِقَ'],
        answer: 0,
        rationales: [
          'Accusative, construct -- object of عُلِّمْنَا and first term of an إضافة with الطَّيْر, matching the printed عُلِّمْنَا مَنْطِقَ الطَّيْرِ.',
          'Nominative -- wrong case; the object of a passive verb here still takes the accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Broken plural ("regions/districts", an unrelated word) -- wrong meaning entirely.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَقْتَصِرُ الْكَاتِبُ عَلَى الْمُقَدِّمَةِ',
        pre: '',
        post: 'عَلَى الْمُقَدِّمَةِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَقْتَصِرُ', 'يَقْتَصِرُ', 'تَقْتَصِرُ', 'نَقْتَصِرُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يُعَلِّمُ اللَّهُ سُلَيْمَانَ مَنْطِقَ الطَّيْرِ',
        pre: '',
        post: 'سُلَيْمَانَ مَنْطِقَ الطَّيْرِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نُعَلِّمُ', 'يُعَلِّمُ', 'تُعَلِّمُ', 'أُعَلِّمُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person; this is "we," not "you."',
          '1st singular -- wrong number; the target is plural نَحْنُ, not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'تَنْقَادُ الْحَيَوَانَاتُ لِسُلَيْمَانَ',
        pre: '',
        post: 'لِسُلَيْمَانَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَنْقَادُونَ', 'تَنْقَادُ', 'أَنْقَادُ', 'نَنْقَادُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd feminine singular -- the base form (agreeing with الحيوانات), not shifted to "they."',
          '1st singular -- wrong person; the target is "they," not "I."',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

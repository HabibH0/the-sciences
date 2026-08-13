// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 3 -- بَنُو إِسْرَائِيلَ
// فِي مِصْرَ. Printed pages 114 (from the heading, mid-page, right after
// ch2's closing line "فَالْبِلادُ بِلادُكُمْ...") - 115, ending right before
// ch4's heading «فِرْعَوْنُ مِصْرَ» which opens partway down page 115.
// Transcribed by hand from the scan (vision OCR, 200dpi render) against
// ../CHAPTER-FORMAT.md.
//
// A time-skip chapter: generations pass, Banū Isrāʾīl's own character and
// standing in Egypt decline, and Yūsuf's memory fades from the Egyptians'
// gratitude into indifference and outright contempt -- setting up ch4's
// hostile Pharaoh.
//
// Grammar / lexical notes:
//   -- The label «بني إسرائيل» (qs-v6-c03-003) is printed unvowelled inside
//      guillemets, exactly as «القِبْط» is elsewhere in this volume
//      (qasas-v6/chapter-11.js) -- the book's own convention for
//      introducing a term as a fixed label. Surface transcribed exactly as
//      printed (no ḥarakāt); tokenized as بني (lemma اِبْن, construct
//      plural "sons/children of", pos noun -- matching how بَنِي
//      إِسْرَائِيلَ is tagged everywhere else it appears vowelled) + إسرائيل
//      (lemma إِسْرَائِيل, proper).
//   -- قُرًى-style broken plurals stay under their singular lemma per the
//      established convention (qasas-v3/chapter-01.js's قُرًى -> قَرْيَة):
//      الْبِلَادِ (qs-v6-c03-010) is tagged lemma بَلَد, not a separate
//      "بِلَاد" entry.
//   -- دُعَاءَ (qs-v6-c03-004) reuses the already-taught lemma دُعَاء
//      ("supplication, prayer") but means "the calling of" here (verbal
//      noun of دَعَا, not "prayer") -- token-level gloss overrides the
//      lemma default for this sense, per CHAPTER-FORMAT.md's fallback
//      rule; the lemma entry itself is left untouched.
//   -- عَزِيزُ (qs-v6-c03-012) reuses the already-taught lemma عَزِيز
//      ("dear, precious") in its established Qaṣaṣ-vol-2 sense as Yūsuf's
//      master's title ("the ʿAzīz/minister of Egypt"), same token-gloss
//      override pattern.
//   -- حَفِظَ (qs-v6-c03-002) reuses the already-taught lemma ("to
//      protect, guard") with a contextual token gloss "to keep in mind,
//      remember" -- the sense here is memory, not protection.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6; cross-checked against
//      known_lemmas.json, volumes 1-3 + this volume's chapters so far):
//      هَكَذَا (qasas-v1/ch6), كَانَ, مُدَّة (qasas-v1/ch14), طَوِيل
//      (qasas-v2/ch20), قَدْ, حَفِظَ (qasas-v2/ch17), أَهْل, مِصْرَ, مَا, قَالَ,
//      عَرَفَ (qasas-v1/ch2), لِ, كَنْعَانِيّ (qasas-v2/ch20), فَضْل
//      (qasas-v2/ch11), هَؤُلَاءِ (qasas-v2/ch17), الَّذِي, يُدْعَوْنَ/دَعَا،
//      إِسْرَائِيل (qasas-v6/ch6), صَاحِب (qasas-v2/ch10), شَرَف
//      (qasas-v3/ch12), مَال (qasas-v2/ch16), لَكِنْ (qasas-v1/ch13), حَال
//      (qasas-v2/ch22), بَعْدَ, ذَلِكَ, تَرَكَ (qasas-v1/ch10), دَعْوَة
//      (qasas-v3/ch18), إِلَى, اللَّه, دُعَاء (qasas-v2, see note above),
//      خَلْق (qasas-v2/ch11), سَقَطَ (qasas-v6/ch8), عَلَى, الدُّنْيَا
//      (qasas-v2/ch25), أَيْضاً, صَارَ, نَظَرَ (qasas-v1/ch14), غَيْر
//      (qasas-v2/ch9), أَب (qasas-v1/ch3), النَّاسُ, حَسَدَ (qasas-v2/ch1),
//      غَنِيّ (qasas-v3/ch11), فَقِير (qasas-v2/ch9), غَرِيب (qasas-v6/ch16),
//      جَاءَ, مِنْ, بَلَد (qasas-v1/ch11), آخَر (qasas-v1/ch10), لَيْسَ, حَقّ
//      (qasas-v2/ch9), فِي, بَعْض (qasas-v2/ch2), يُوسُف, رَأَى (qasas-v1/ch2),
//      اِشْتَرَى (qasas-v2/ch7), عَزِيز (qasas-v2/ch3, see note above),
//      حَكَمَ (qasas-v2/ch25), نَسِيَ (qasas-v2/ch6), كَثِير (qasas-v1/ch1),
//      كَرَم (qasas-v6/ch1), إِحْسَان (qasas-v6/ch1)
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 8 new words (تَغَيَّرَ، فَسَدَ، خُلُق، سَائِر، اِمْتَازَ، اِحْتَقَرَ، اِعْتَقَدَ،
// مِصْرِيّ). No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch3',
  title: { ar: 'بَنُو إِسْرَائِيلَ فِي مِصْرَ', en: 'The Children of Israel in Egypt' },
  newWords: ['تَغَيَّرَ', 'فَسَدَ', 'خُلُق', 'سَائِر', 'اِمْتَازَ', 'اِحْتَقَرَ', 'اِعْتَقَدَ', 'مِصْرِيّ'],
  lemmas: {
    تَغَيَّرَ: { gloss: 'to change' },
    فَسَدَ: { gloss: 'to become corrupt, spoil' },
    خُلُق: { gloss: 'character, morals (pl. أَخْلَاق)' },
    سَائِر: { gloss: 'the rest (of), all (of)' },
    اِمْتَازَ: { gloss: 'to be distinguished, set apart' },
    اِحْتَقَرَ: { gloss: 'to despise, hold in contempt' },
    اِعْتَقَدَ: { gloss: 'to believe, hold as a conviction' },
    مِصْرِيّ: { gloss: 'Egyptian' },
  },
  paragraphs: [
    {
      en: "And so it went for a long time. Egypt's people remembered what had been said and recognized the Canaanites' favor -- these Canaanites, who used to be called \"Banū Isrāʾīl\" (the Children of Israel), were people of honor and wealth.",
      sentences: [
        {
          id: 'qs-v6-c03-001',
          ar: 'وَهَكَذَا كَانَ مُدَّةً طَوِيلَةً!',
          en: 'And so it was for a long time!',
          tokens: [
            { surface: 'وَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'conj+adv', gloss: 'and thus, and so' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; it was' },
            { surface: 'مُدَّةً', lemma: 'مُدَّة', pos: 'noun', features: 'indef.acc', gloss: 'a period, for a while' },
            { surface: 'طَوِيلَةً', lemma: 'طَوِيل', pos: 'adj', features: 'indef.acc.f', gloss: 'long' },
          ],
        },
        {
          id: 'qs-v6-c03-002',
          ar: 'فَقَدْ حَفِظَ أَهْلُ مِصْرَ مَا قَالُوا وَعَرَفُوا لِلْكِنْعَانِيِّينَ الْفَضْلَ.',
          en: "Egypt's people had indeed kept in mind what had been said, and recognized the Canaanites' favor.",
          tokens: [
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'حَفِظَ', lemma: 'حَفِظَ', pos: 'verb', features: 'perf.3ms', gloss: 'to protect, guard; kept in mind' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'constr.nom', gloss: 'the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; they said' },
            { surface: 'وَعَرَفُوا', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to know; and recognized' },
            { surface: 'لِلْكِنْعَانِيِّينَ', lemma: 'كَنْعَانِيّ', pos: 'noun', features: 'prep+def.pl.gen', gloss: 'to the Canaanites' },
            { surface: 'الْفَضْلَ', lemma: 'فَضْل', pos: 'noun', features: 'def.acc', gloss: 'the favor, grace' },
          ],
        },
        {
          id: 'qs-v6-c03-003',
          ar: 'وَكَانَ هَؤُلَاءِ الْكَنْعَانِيُّونَ الَّذِينَ كَانُوا يُدْعَوْنَ «بني إسرائيل» أَصْحَابَ شَرَفٍ وَأَمْوَالٍ.',
          en: 'These Canaanites, who used to be called "Banū Isrāʾīl," were people of honor and wealth.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'الْكَنْعَانِيُّونَ', lemma: 'كَنْعَانِيّ', pos: 'noun', features: 'def.pl.nom', gloss: 'the Canaanites' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'rel.pl', gloss: 'who' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; used to' },
            { surface: 'يُدْعَوْنَ', lemma: 'دَعَا', pos: 'verb', features: 'pass+impf.3mp', root: 'د ع و', gloss: 'to call; be called' },
            { surface: 'بني', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr', root: 'ب ن و', gloss: 'sons/children of' },
            { surface: 'إسرائيل', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'أَصْحَابَ', lemma: 'صَاحِب', pos: 'noun', features: 'pl.acc.constr', gloss: 'people of, possessors of' },
            { surface: 'شَرَفٍ', lemma: 'شَرَف', pos: 'noun', features: 'indef.gen', gloss: 'honor' },
            { surface: 'وَأَمْوَالٍ', lemma: 'مَال', pos: 'noun', features: 'conj+indef.gen.pl', gloss: 'and wealth' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يُدْعَى هَؤُلَاءِ الْكَنْعَانِيُّونَ؟',
          options: ['بَنُو إِسْرَائِيلَ', 'الْقِبْط', 'الْفَرَاعِنَة'],
          answer: 0,
          qEn: 'What were these Canaanites called?',
          optionsEn: ['Banū Isrāʾīl (the Children of Israel)', 'the Copts', 'the Pharaohs'],
        },
      ],
    },
    {
      en: 'But conditions changed after that: their character grew corrupt, they abandoned the call to Allah and the calling of people to Allah, and they fell for this world. People\'s regard for them changed too, and they came to look at them differently from how they used to look at their own fathers. They became like everyone else, no longer distinguished from other people except by lineage.',
      sentences: [
        {
          id: 'qs-v6-c03-004',
          ar: 'وَلَكِنْ تَغَيَّرَتِ الْأَحْوَالُ بَعْدَ ذَلِكَ، فَقَدْ فَسَدَتْ أَخْلَاقُهُمْ، وَتَرَكُوا الدَّعْوَةَ إِلَى اللَّهِ وَدُعَاءَ الْخَلْقِ إِلَى اللَّهِ، وَسَقَطُوا عَلَى الدُّنْيَا.',
          en: 'But conditions changed after that: their character grew corrupt, they abandoned the call to Allah and the calling of people to Allah, and they fell for this world.',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'تَغَيَّرَتِ', lemma: 'تَغَيَّرَ', pos: 'verb', features: 'perf.3fs', root: 'غ ي ر', gloss: 'to change; changed' },
            { surface: 'الْأَحْوَالُ', lemma: 'حَال', pos: 'noun', features: 'def.pl.nom', gloss: 'the conditions' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'فَسَدَتْ', lemma: 'فَسَدَ', pos: 'verb', features: 'perf.3fs', root: 'ف س د', gloss: 'to become corrupt; grew corrupt' },
            { surface: 'أَخْلَاقُهُمْ', lemma: 'خُلُق', pos: 'noun', features: 'pl.nom+3mp', root: 'خ ل ق', gloss: 'their character' },
            { surface: 'وَتَرَكُوا', lemma: 'تَرَكَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to leave, abandon; and abandoned' },
            { surface: 'الدَّعْوَةَ', lemma: 'دَعْوَة', pos: 'noun', features: 'def.acc', gloss: 'the call' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَدُعَاءَ', lemma: 'دُعَاء', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the calling of' },
            { surface: 'الْخَلْقِ', lemma: 'خَلْق', pos: 'noun', features: 'def.gen', gloss: 'creation; people, mankind' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَسَقَطُوا', lemma: 'سَقَطَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to fall; and fell' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'الدُّنْيَا', lemma: 'الدُّنْيَا', pos: 'noun', features: 'def.acc', gloss: 'this world' },
          ],
        },
        {
          id: 'qs-v6-c03-005',
          ar: 'وَتَغَيَّرَ لَهُمُ النَّاسُ أَيْضاً وَصَارُوا يَنْظُرُونَ إِلَيْهِمْ بِغَيْرِ مَا كَانُوا يَنْظُرُونَ إِلَى آبَائِهِمْ.',
          en: "People's regard for them changed too, and they came to look at them differently from how they used to look at their own fathers.",
          tokens: [
            { surface: 'وَتَغَيَّرَ', lemma: 'تَغَيَّرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'غ ي ر', gloss: 'to change; and changed' },
            { surface: 'لَهُمُ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'toward them' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'أَيْضاً', lemma: 'أَيْضاً', pos: 'adv', features: 'adv', gloss: 'also, too' },
            { surface: 'وَصَارُوا', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to become; and came to' },
            { surface: 'يَنْظُرُونَ', lemma: 'نَظَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to look; looking' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'at them' },
            { surface: 'بِغَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'prep+constr.gen', gloss: 'differently from' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what, how' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; used to' },
            { surface: 'يَنْظُرُونَ', lemma: 'نَظَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'looking' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'آبَائِهِمْ', lemma: 'أَب', pos: 'noun', features: 'pl.gen+3mp', root: 'أ ب و', gloss: 'their fathers' },
          ],
        },
        {
          id: 'qs-v6-c03-006',
          ar: 'وَصَارُوا كَسَائِرِ النَّاسِ، لا يَمْتَازُونَ عَنِ النَّاسِ إِلَّا بِالنَّسَبِ.',
          en: 'They became like everyone else, distinguished from other people only by lineage.',
          tokens: [
            { surface: 'وَصَارُوا', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to become; and became' },
            { surface: 'كَسَائِرِ', lemma: 'سَائِر', pos: 'noun', features: 'prep+constr.gen', gloss: 'like the rest of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'people' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَمْتَازُونَ', lemma: 'اِمْتَازَ', pos: 'verb', features: 'impf.3mp', root: 'م ي ز', gloss: 'to be distinguished; distinguished' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'people' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'بِالنَّسَبِ', lemma: 'نَسَب', pos: 'noun', features: 'prep+def.gen', gloss: 'by lineage' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِأَخْلَاقِ بَنِي إِسْرَائِيلَ بَعْدَ ذَلِكَ؟',
          options: ['فَسَدَتْ وَتَرَكُوا الدَّعْوَةَ إِلَى اللَّهِ', 'بَقِيَتْ صَالِحَةً كَمَا كَانَتْ', 'تَحَسَّنَتْ أَكْثَرَ'],
          answer: 0,
          qEn: "What happened to Banū Isrāʾīl's character after that?",
          optionsEn: ['It grew corrupt, and they abandoned the call to Allah', 'It stayed as good as before', 'It improved further'],
        },
      ],
    },
    {
      en: 'People came to envy the rich among them and despise the poor among them.',
      sentences: [
        {
          id: 'qs-v6-c03-007',
          ar: 'وَصَارَ النَّاسُ يَحْسُدُونَ الْغَنِيَّ مِنْهُمْ، وَيَحْتَقِرُونَ الْفَقِيرَ مِنْهُمْ.',
          en: 'People came to envy the rich among them, and despise the poor among them.',
          tokens: [
            { surface: 'وَصَارَ', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to become; and came to' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'يَحْسُدُونَ', lemma: 'حَسَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to envy; envying' },
            { surface: 'الْغَنِيَّ', lemma: 'غَنِيّ', pos: 'noun', features: 'def.acc', gloss: 'the rich one' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'وَيَحْتَقِرُونَ', lemma: 'اِحْتَقَرَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ح ق ر', gloss: 'to despise; and despising' },
            { surface: 'الْفَقِيرَ', lemma: 'فَقِير', pos: 'noun', features: 'def.acc', gloss: 'the poor one' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ صَارَ النَّاسُ يَتَعَامَلُونَ مَعَ الْغَنِيِّ وَالْفَقِيرِ مِنْ بَنِي إِسْرَائِيلَ؟',
          options: ['يَحْسُدُونَ الْغَنِيَّ وَيَحْتَقِرُونَ الْفَقِيرَ', 'يُكْرِمُونَ كِلَيْهِمَا', 'لا يَهْتَمُّونَ بِهِمَا'],
          answer: 0,
          qEn: 'How did people come to treat the rich and the poor of Banū Isrāʾīl?',
          optionsEn: ['Envying the rich and despising the poor', 'Honoring both', 'Paying neither any attention'],
        },
      ],
    },
    {
      en: "Egypt's people came to look at them as a stranger who had come from another land, with no right in Egypt -- Egypt's people believed that they alone were the true people of the land, and that Egypt belonged to the Egyptians. Some of Egypt's people even saw Yūsuf himself as nothing but a stranger who had come from Canaan and been bought by Egypt's ʿAzīz -- as if no Canaanite had any right to rule Egypt -- and many people forgot Yūsuf's favor, generosity, and kindness.",
      sentences: [
        {
          id: 'qs-v6-c03-008',
          ar: 'وَصَارَ أَهْلُ مِصْرَ يَنْظُرُونَ إِلَيْهِمْ كَغَرِيبٍ جَاءَ مِنْ بَلَدٍ آخَرَ.',
          en: "Egypt's people came to look at them as a stranger who had come from another land.",
          tokens: [
            { surface: 'وَصَارَ', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to become; and came to' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'constr.nom', gloss: 'the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'يَنْظُرُونَ', lemma: 'نَظَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to look; looking' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'at them' },
            { surface: 'كَغَرِيبٍ', lemma: 'غَرِيب', pos: 'noun', features: 'prep+indef.gen', gloss: 'as a stranger' },
            { surface: 'جَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms', gloss: 'to come; who came' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'بَلَدٍ', lemma: 'بَلَد', pos: 'noun', features: 'indef.gen', gloss: 'a land' },
            { surface: 'آخَرَ', lemma: 'آخَر', pos: 'adj', features: 'indef.gen', gloss: 'another' },
          ],
        },
        {
          id: 'qs-v6-c03-009',
          ar: 'وَلَيْسَ لَهُ حَقٌّ فِي مِصْرَ.',
          en: 'and he has no right in Egypt.',
          tokens: [
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to not be; and is not' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to/for him' },
            { surface: 'حَقٌّ', lemma: 'حَقّ', pos: 'noun', features: 'indef.nom', gloss: 'a right' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v6-c03-010',
          ar: 'وَكَانَ أَهْلُ مِصْرَ يَعْتَقِدُونَ أَنَّهُمْ هُمْ أَهْلُ الْبِلَادِ وَأَنَّ مِصْرَ لِلْمَصْرِيِّينَ.',
          en: 'Egypt\'s people believed that they alone were the true people of the land, and that Egypt belonged to the Egyptians.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'constr.nom', gloss: 'the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'يَعْتَقِدُونَ', lemma: 'اِعْتَقَدَ', pos: 'verb', features: 'impf.3mp', root: 'ع ق د', gloss: 'to believe; believing' },
            { surface: 'أَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'part+3mp', gloss: 'that they' },
            { surface: 'هُمْ', lemma: 'هُمْ', pos: 'noun', features: '3mp', gloss: '[themselves]' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'constr.nom', gloss: 'the people of' },
            { surface: 'الْبِلَادِ', lemma: 'بَلَد', pos: 'noun', features: 'def.gen.pl', gloss: 'the land' },
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'acc', gloss: 'Egypt' },
            { surface: 'لِلْمَصْرِيِّينَ', lemma: 'مِصْرِيّ', pos: 'noun', features: 'prep+def.pl.gen', gloss: 'belongs to the Egyptians' },
          ],
        },
        {
          id: 'qs-v6-c03-011',
          ar: 'وَيَرَى بَعْضُ أَهْلِ مِصْرَ أَنَّ يُوسُفَ كَانَ غَرِيباً جَاءَ مِنْ كَنْعَانَ.',
          en: "Some of Egypt's people see that Yūsuf was a stranger who had come from Canaan.",
          tokens: [
            { surface: 'وَيَرَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+impf.3ms', root: 'ر أ ي', gloss: 'to see; and sees' },
            { surface: 'بَعْضُ', lemma: 'بَعْض', pos: 'noun', features: 'constr.nom', gloss: 'some of' },
            { surface: 'أَهْلِ', lemma: 'أَهْل', pos: 'noun', features: 'constr.gen', gloss: 'the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'غَرِيباً', lemma: 'غَرِيب', pos: 'noun', features: 'indef.acc', gloss: 'a stranger' },
            { surface: 'جَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms', gloss: 'to come; who came' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'كَنْعَانَ', lemma: 'كَنْعَان', pos: 'proper', features: 'gen', gloss: 'Canaan' },
          ],
        },
        {
          id: 'qs-v6-c03-012',
          ar: 'وَاشْتَرَاهُ عَزِيزُ مِصْرَ.',
          en: "and Egypt's ʿAzīz (minister) had bought him.",
          tokens: [
            { surface: 'وَاشْتَرَاهُ', lemma: 'اِشْتَرَى', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to buy; and bought him' },
            { surface: 'عَزِيزُ', lemma: 'عَزِيز', pos: 'noun', features: 'constr.nom', gloss: 'the ʿAzīz (chief minister) of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v6-c03-013',
          ar: 'وَلَيْسَ لِلْكَنْعَانِيِّ أَنْ يَحْكُمَ مِصْرَ.',
          en: 'and it is not for a Canaanite to rule Egypt.',
          tokens: [
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to not be; and is not' },
            { surface: 'لِلْكَنْعَانِيِّ', lemma: 'كَنْعَانِيّ', pos: 'noun', features: 'prep+def.gen', gloss: 'for the Canaanite' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَحْكُمَ', lemma: 'حَكَمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to rule' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'acc', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v6-c03-014',
          ar: 'وَنَسِيَ كَثِيرٌ مِنَ النَّاسِ فَضْلَ يُوسُفَ وَكَرَمَهُ وَإِحْسَانَهُ.',
          en: "and many people forgot Yūsuf's favor, generosity, and kindness.",
          tokens: [
            { surface: 'وَنَسِيَ', lemma: 'نَسِيَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to forget; and forgot' },
            { surface: 'كَثِيرٌ', lemma: 'كَثِير', pos: 'noun', features: 'indef.nom', gloss: 'many' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'فَضْلَ', lemma: 'فَضْل', pos: 'noun', features: 'acc.constr', gloss: 'the favor of' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'وَكَرَمَهُ', lemma: 'كَرَم', pos: 'noun', features: 'conj+acc+3ms', gloss: 'and his generosity' },
            { surface: 'وَإِحْسَانَهُ', lemma: 'إِحْسَان', pos: 'noun', features: 'conj+acc+3ms', gloss: 'and his kindness' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يَعْتَقِدُ أَهْلُ مِصْرَ عَنْ بِلَادِهِمْ؟',
          options: ['أَنَّهُمْ هُمْ أَهْلُ الْبِلَادِ وَأَنَّ مِصْرَ لِلْمَصْرِيِّينَ', 'أَنَّ مِصْرَ لِبَنِي إِسْرَائِيلَ', 'أَنَّهُمْ لا يَعْرِفُونَ مَنْ يَمْلِكُ مِصْرَ'],
          answer: 0,
          qEn: "What did Egypt's people believe about their land?",
          optionsEn: ['That they alone were the true people of the land, and Egypt belonged to the Egyptians', 'That Egypt belonged to Banū Isrāʾīl', "That they didn't know who owned Egypt"],
        },
        {
          q: 'مَاذَا نَسِيَ كَثِيرٌ مِنَ النَّاسِ؟',
          options: ['فَضْلَ يُوسُفَ وَكَرَمَهُ وَإِحْسَانَهُ', 'اِسْمَ يُوسُفَ', 'قِصَّةَ يُوسُفَ كُلَّهَا'],
          answer: 0,
          qEn: 'What did many people forget?',
          optionsEn: ["Yūsuf's favor, generosity, and kindness", "Yūsuf's name", 'the whole story of Yūsuf'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَصَارَ أَهْلُ مِصْرَ يَنْظُرُونَ إِلَيْهِمْ',
        post: 'جَاءَ مِنْ بَلَدٍ آخَرَ.',
        en: "Egypt's people came to look at them as a stranger who had come from another land.",
        options: ['كَغَرِيبٍ', 'كَغَرِيبٌ', 'كَغَرِيباً', 'الْغَرِيبِ'],
        answer: 0,
        rationales: [
          'Genitive, indefinite -- object of the preposition كَ, matching the taught pattern.',
          'Nominative -- wrong case; a preposition requires the genitive.',
          'Accusative -- wrong case for the same reason.',
          'Definite -- wrong; the stranger is unspecified, not "the" stranger.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ أَهْلُ مِصْرَ يَعْتَقِدُونَ أَنَّهُمْ هُمْ أَهْلُ الْبِلَادِ وَأَنَّ',
        post: 'لِلْمَصْرِيِّينَ.',
        en: "Egypt's people believed that they were the people of the land, and that Egypt belonged to the Egyptians.",
        options: ['مِصْرَ', 'مِصْرُ', 'مِصْرٌ', 'مِصْرِ'],
        answer: 0,
        rationales: [
          'Accusative -- اسم أَنَّ, matching the taught pattern.',
          'Nominative -- wrong case; أَنَّ puts its subject in the accusative.',
          'Indefinite nominative tanwīn -- doubly wrong (case and مِصْر is a proper noun, never indefinite).',
          'Genitive -- wrong case for the same reason.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَحْسُدُ الرَّجُلُ الْغَنِيَّ',
        pre: '',
        post: 'الْغَنِيَّ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَحْسُدُونَ', 'يَحْسُدُ', 'تَحْسُدُ', 'نَحْسُدُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular / 3rd feminine singular -- wrong gender/person.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَحْسُدُ الرَّجُلُ الْغَنِيَّ',
        pre: '',
        post: 'الْغَنِيَّ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَحْسُدُ', 'يَحْسُدُ', 'أَحْسُدُ', 'نَحْسُدُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 4 «الْعَاصِفَةُ», chapter 5 -- هُودٌ الرَّسُولُ.
// Printed pages 87 (after ch4's closing بِالآخِرَةِ) - 88 (top, ending before
// ch6's heading دَعْوَةُ هُودٍ). Transcribed by hand from a 200dpi render
// against ../CHAPTER-FORMAT.md.
//
// A hinge chapter: after three chapters of pure description, the narrative
// turns explanatory (why Allah sends a messenger at all, why one of their
// own) and then names Hūd for the first time, born and raised among ʿĀd
// itself. No Qur'anic quotation on these pages.
//
// Grammar / lexical notes:
//   -- هُودٌ is a proper noun and, per the convention established in this
//      volume's ch1 header note (matching qasas-v2 ch1's treatment of
//      يُوسُف/يَعْقُوب), is NOT added to newWords -- only its lemmas entry for
//      the word-card fallback gloss.
//   -- وُلِدَ (qs-v4-c05-011) is the passive of وَلَدَ ('to give birth'), a
//      distinct lemma from the already-taught noun وَلَد ('child, son') --
//      tagged pass+perf.3ms, following the same pass-first ordering already
//      established for قِيلَ (qasas-v3 ch1) and يُقَالُ (this volume's ch1).
//   -- Three أَرَادَ اللَّهُ أَنْ + imperfect clauses (qs-v4-c05-{001,008,009})
//      are this chapter's recycled frame, built into the workshop below.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): أَرَادَ، اللَّه، أَنْ،
//      أَرْسَلَ، إِلَى، عَادٍ، رَسُول، إِنَّ، لَا، رَضِيَ، عَبْد، كُفْر، أَحَبَّ، فَسَاد،
//      في، الأَرْض، كَانَ، عَقْل، إِلَّا، أَكْل، شُرْب، لَهْو، لَعِب، بِنَاء، بَيْت،
//      قَدْ، لِأَنَّ، الدِّين، عَاقِل، الدُّنْيَا، غَبِيّ، عَبَدَ، حِجَارَة، عَقَلَ، هَدَى،
//      هَذَا، نَفْس، عَرَفَ، فَهِمَ، كَلَام، ذَلِكَ، شَرِيف are all already taught and
//      NOT re-listed.
//
// 5 new words this chapter: اِسْتَعْمَلَ، فَسَدَ، وَلَدَ، نَشَأَ، صَلَاح.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch5',
  title: { ar: 'هُودٌ الرَّسُولُ', en: 'Hūd the Messenger' },
  newWords: ['اِسْتَعْمَلَ', 'فَسَدَ', 'وَلَدَ', 'نَشَأَ', 'صَلَاح'],
  lemmas: {
    'هُود': { gloss: 'Hūd (the messenger sent to ʿĀd)' },
    'اِسْتَعْمَلَ': { gloss: 'to use' },
    'فَسَدَ': { gloss: 'to become corrupt, spoiled' },
    'وَلَدَ': { gloss: 'to give birth (to)' },
    'نَشَأَ': { gloss: 'to grow up' },
    'صَلَاح': { gloss: 'righteousness, soundness' },
  },
  paragraphs: [
    {
      en: "Allah willed to send ʿĀd a messenger. Allah is not pleased with disbelief for His servants, and Allah does not love corruption in the earth. ʿĀd used their minds for nothing but eating, drinking, amusement, play, and building houses. Their minds became corrupt because they did not use them in religion, and ʿĀd was wise in worldly matters, foolish in religion -- worshiping stones and not using their reason. So Allah willed to send them a messenger to guide them. Allah willed this messenger to be one of themselves, whom they knew and whose speech they understood. Hūd was that messenger: he was born into a noble house among ʿĀd and grew up with reason and righteousness.",
      sentences: [
        {
          id: 'qs-v4-c05-001',
          ar: 'وَأَرَادَ اللَّهُ أَنْ يُرْسِلَ إِلَى عَادٍ رَسُولاً.',
          en: 'Allah willed to send ʿĀd a messenger.',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want, intend; and willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يُرْسِلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to send; send' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عَادٍ', lemma: 'عَاد', pos: 'proper', features: 'gen', gloss: 'ʿĀd' },
            { surface: 'رَسُولاً', lemma: 'رَسُول', pos: 'noun', features: 'indef.acc', gloss: 'a messenger' },
          ],
        },
        {
          id: 'qs-v4-c05-002',
          ar: 'إِنَّ اللَّهَ لَا يَرْضَى لِعِبَادِهِ الْكُفْرَ،',
          en: 'Allah is not pleased with disbelief for His servants,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرْضَى', lemma: 'رَضِيَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be pleased; is pleased' },
            { surface: 'لِعِبَادِهِ', lemma: 'عَبْد', pos: 'noun', features: 'prep+pl.gen+3ms', gloss: 'for His servants' },
            { surface: 'الْكُفْرَ', lemma: 'كُفْر', pos: 'noun', features: 'def.acc', gloss: 'disbelief' },
          ],
        },
        {
          id: 'qs-v4-c05-003',
          ar: 'إِنَّ اللَّهَ لَا يُحِبُّ الْفَسَادَ فِي الأَرْضِ.',
          en: 'and Allah does not love corruption in the earth.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', gloss: 'to love; loves' },
            { surface: 'الْفَسَادَ', lemma: 'فَسَاد', pos: 'noun', features: 'def.acc', gloss: 'corruption' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
          ],
        },
        {
          id: 'qs-v4-c05-004',
          ar: 'وَكَانَ عَادٌ لَا يَسْتَعْمِلُونَ عُقُولَهُمْ إِلَّا فِي الأَكْلِ وَالشُّرْبِ وَاللَّهْوِ وَاللَّعِبِ وَبِنَاءِ الْبُيُوتِ.',
          en: 'ʿĀd used their minds for nothing but eating, drinking, amusement, play, and building houses.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'عَادٌ', lemma: 'عَاد', pos: 'proper', features: 'nom', gloss: 'ʿĀd' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْتَعْمِلُونَ', lemma: 'اِسْتَعْمَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to use; used' },
            { surface: 'عُقُولَهُمْ', lemma: 'عَقْل', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their minds' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الأَكْلِ', lemma: 'أَكْل', pos: 'noun', features: 'def.gen', gloss: 'eating' },
            { surface: 'وَالشُّرْبِ', lemma: 'شُرْب', pos: 'noun', features: 'conj+def.gen', gloss: 'and drinking' },
            { surface: 'وَاللَّهْوِ', lemma: 'لَهْو', pos: 'noun', features: 'conj+def.gen', gloss: 'and amusement' },
            { surface: 'وَاللَّعِبِ', lemma: 'لَعِب', pos: 'noun', features: 'conj+def.gen', gloss: 'and play' },
            { surface: 'وَبِنَاءِ', lemma: 'بِنَاء', pos: 'noun', features: 'conj+constr.gen', gloss: 'and the building of' },
            { surface: 'الْبُيُوتِ', lemma: 'بَيْت', pos: 'noun', features: 'pl.def.gen', gloss: 'houses' },
          ],
        },
        {
          id: 'qs-v4-c05-005',
          ar: 'وَقَدْ فَسَدَتْ عُقُولُهُمْ لأَنَّهُمْ لَا يَسْتَعْمِلُونَهَا فِي الدِّينِ',
          en: 'Their minds became corrupt because they did not use them in religion,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'فَسَدَتْ', lemma: 'فَسَدَ', pos: 'verb', features: 'perf.3fs', gloss: 'to become corrupt; became corrupt' },
            { surface: 'عُقُولُهُمْ', lemma: 'عَقْل', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their minds' },
            { surface: 'لأَنَّهُمْ', lemma: 'لِأَنَّ', pos: 'part', features: 'part+3mp', gloss: 'because they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْتَعْمِلُونَهَا', lemma: 'اِسْتَعْمَلَ', pos: 'verb', features: 'impf.3mp+3fs', gloss: 'to use; did not use it' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الدِّينِ', lemma: 'دِين', pos: 'noun', features: 'def.gen', gloss: 'religion' },
          ],
        },
        {
          id: 'qs-v4-c05-006',
          ar: 'وَكَانَ عَادٌ عُقَلَاءَ فِي الدُّنْيَا أَغْبِيَاءَ فِي الدِّينِ،',
          en: 'and ʿĀd was wise in worldly matters, foolish in religion --',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'عَادٌ', lemma: 'عَاد', pos: 'proper', features: 'nom', gloss: 'ʿĀd' },
            { surface: 'عُقَلَاءَ', lemma: 'عَاقِل', pos: 'adj', features: 'pl.indef.acc', gloss: 'wise' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الدُّنْيَا', lemma: 'دُنْيَا', pos: 'noun', features: 'def.gen', gloss: 'this world' },
            { surface: 'أَغْبِيَاءَ', lemma: 'غَبِيّ', pos: 'adj', features: 'pl.indef.acc', gloss: 'foolish' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الدِّينِ', lemma: 'دِين', pos: 'noun', features: 'def.gen', gloss: 'religion' },
          ],
        },
        {
          id: 'qs-v4-c05-007',
          ar: 'يَعْبُدُونَ الْحِجَارَةَ وَلَا يَعْقِلُونَ.',
          en: 'worshiping stones and not using their reason.',
          tokens: [
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship; worshiping' },
            { surface: 'الْحِجَارَةَ', lemma: 'حِجَارَة', pos: 'noun', features: 'def.acc', gloss: 'stones' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَعْقِلُونَ', lemma: 'عَقَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to reason, understand; reasoning' },
          ],
        },
        {
          id: 'qs-v4-c05-008',
          ar: 'فَأَرَادَ اللَّهُ أَنْ يُرْسِلَ إِلَيْهِمْ رَسُولاً يَهْدِيهِمْ.',
          en: 'So Allah willed to send them a messenger to guide them.',
          tokens: [
            { surface: 'فَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want, intend; so willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يُرْسِلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to send; send' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'رَسُولاً', lemma: 'رَسُول', pos: 'noun', features: 'indef.acc', gloss: 'a messenger' },
            { surface: 'يَهْدِيهِمْ', lemma: 'هَدَى', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to guide; who would guide them' },
          ],
        },
        {
          id: 'qs-v4-c05-009',
          ar: 'وَأَرَادَ اللَّهُ أَنْ يَكُونَ هَذَا الرَّسُولُ مِنْ أَنْفُسِهِمْ،',
          en: 'Allah willed this messenger to be one of themselves,',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want, intend; and willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be; be' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الرَّسُولُ', lemma: 'رَسُول', pos: 'noun', features: 'def.nom', gloss: 'the messenger' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَنْفُسِهِمْ', lemma: 'نَفْس', pos: 'noun', features: 'pl.gen+3mp', gloss: 'themselves' },
          ],
        },
        {
          id: 'qs-v4-c05-010',
          ar: 'يَعْرِفُونَهُ وَيَفْهَمُونَ كَلَامَهُ.',
          en: 'whom they knew and whose speech they understood.',
          tokens: [
            { surface: 'يَعْرِفُونَهُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3mp+3ms', gloss: 'to know; whom they knew' },
            { surface: 'وَيَفْهَمُونَ', lemma: 'فَهِمَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to understand; and understood' },
            { surface: 'كَلَامَهُ', lemma: 'كَلَام', pos: 'noun', features: 'acc+3ms', gloss: 'his speech' },
          ],
        },
        {
          id: 'qs-v4-c05-011',
          ar: 'كَانَ هُودٌ ذَلِكَ الرَّسُولَ،',
          en: 'Hūd was that messenger --',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'الرَّسُولَ', lemma: 'رَسُول', pos: 'noun', features: 'def.acc', gloss: 'the messenger' },
          ],
        },
        {
          id: 'qs-v4-c05-012',
          ar: 'وُلِدَ فِي بَيْتٍ شَرِيفٍ فِي عَادٍ',
          en: 'he was born into a noble house among ʿĀd',
          tokens: [
            { surface: 'وُلِدَ', lemma: 'وَلَدَ', pos: 'verb', features: 'pass+perf.3ms', gloss: 'to give birth; was born' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'بَيْتٍ', lemma: 'بَيْت', pos: 'noun', features: 'indef.gen', gloss: 'a house' },
            { surface: 'شَرِيفٍ', lemma: 'شَرِيف', pos: 'adj', features: 'indef.gen', gloss: 'noble' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'عَادٍ', lemma: 'عَاد', pos: 'proper', features: 'gen', gloss: 'ʿĀd' },
          ],
        },
        {
          id: 'qs-v4-c05-013',
          ar: 'وَنَشَأَ عَلَى عَقْلٍ وَصَلَاحٍ.',
          en: 'and grew up with reason and righteousness.',
          tokens: [
            { surface: 'وَنَشَأَ', lemma: 'نَشَأَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to grow up; and grew up' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon, with' },
            { surface: 'عَقْلٍ', lemma: 'عَقْل', pos: 'noun', features: 'indef.gen', gloss: 'reason, intellect' },
            { surface: 'وَصَلَاحٍ', lemma: 'صَلَاح', pos: 'noun', features: 'conj+indef.gen', gloss: 'and righteousness' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا أَرَادَ اللَّهُ أَنْ يُرْسِلَ رَسُولاً إِلَى عَادٍ؟',
          options: ['لِيَهْدِيَهُمْ، لأَنَّ اللَّهَ لَا يَرْضَى الْكُفْرَ وَلَا يُحِبُّ الْفَسَادَ', 'لِيُخْبِرَهُمْ بِأَخْبَارِ الأُمَمِ السَّابِقَةِ', 'لِيَأْخُذَ مِنْهُمُ الْمَالَ'],
          answer: 0,
          qEn: 'Why did Allah will to send a messenger to ʿĀd?',
          optionsEn: ['To guide them, since Allah is not pleased with disbelief and does not love corruption', 'To tell them news of the earlier nations', 'To take wealth from them'],
        },
        {
          q: 'لِمَاذَا فَسَدَتْ عُقُولُ عَادٍ؟',
          options: ['لأَنَّهُمْ لَمْ يَسْتَعْمِلُوهَا في الدِّينِ', 'لأَنَّهُمْ كَانُوا مَرْضَى', 'لأَنَّهُمْ كَانُوا صِغَاراً'],
          answer: 0,
          qEn: "Why did ʿĀd's minds become corrupt?",
          optionsEn: ['Because they did not use them in religion', 'Because they were sick', 'Because they were young'],
        },
        {
          q: 'مَنْ كَانَ هُودٌ وَأَيْنَ نَشَأَ؟',
          options: ['رَسُولُ اللَّهِ إِلَى عَادٍ، وُلِدَ وَنَشَأَ فِيهِمْ', 'رَجُلٌ غَرِيبٌ جَاءَ مِنْ بِلَادٍ بَعِيدَةٍ', 'مَلِكٌ مِنْ مُلُوكِ عَادٍ'],
          answer: 0,
          qEn: 'Who was Hūd, and where did he grow up?',
          optionsEn: ["Allah's messenger to ʿĀd, born and raised among them", 'A stranger who came from a distant land', 'A king of ʿĀd'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَأَرَادَ اللَّهُ أَنْ',
        post: 'إِلَى عَادٍ رَسُولاً.',
        en: 'Allah willed to send ʿĀd a messenger.',
        options: ['يُرْسِلَ', 'أَرْسَلَ', 'يُرْسِلُونَ', 'مُرْسِلٌ'],
        answer: 0,
        rationales: [
          'Imperfect, singular -- the verb pattern that follows أَنْ.',
          'Perfect tense -- wrong; أَنْ is followed by an imperfect verb, not a completed one.',
          'Plural -- wrong number; the subject is اللَّهُ, singular.',
          'A participle, not a verb -- cannot serve as the main verb here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنَّ اللَّهَ لَا',
        post: 'الْفَسَادَ في الأَرْضِ.',
        en: 'Allah does not love corruption in the earth.',
        options: ['يُحِبُّ', 'يُحِبَّانِ', 'يُحِبُّونَ', 'أُحِبُّ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- agrees with اللَّهَ.',
          'Dual -- wrong number.',
          '3rd masculine plural -- wrong number.',
          '1st singular -- wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'كَانَ هُودٌ ذَلِكَ',
        post: '،',
        en: 'Hūd was that messenger --',
        options: ['الرَّسُولَ', 'الرَّسُولُ', 'الرَّسُولِ', 'رَسُولاً'],
        answer: 0,
        rationales: [
          'Accusative, definite -- the predicate of كَانَ, referring back to the specific messenger already named.',
          'Nominative -- wrong case; the predicate of كَانَ takes the accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Indefinite -- wrong; ذَلِكَ الرَّسُولَ points to one specific, already-mentioned messenger.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَعْرِفُ النَّاسُ الرَّسُولَ',
        pre: '',
        post: 'النَّاسُ الرَّسُولَ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَعْرِفُ', 'يَعْرِفُ', 'أَعْرِفُ', 'نَعْرِفُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْرِفُ النَّاسُ الرَّسُولَ',
        pre: '',
        post: 'النَّاسُ الرَّسُولَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَعْرِفُ', 'يَعْرِفُ', 'تَعْرِفُ', 'أَعْرِفُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْرِفُ النَّاسُ الرَّسُولَ',
        pre: '',
        post: 'النَّاسُ الرَّسُولَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَعْرِفُ', 'يَعْرِفُ', 'تَعْرِفُ', 'نَعْرِفُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

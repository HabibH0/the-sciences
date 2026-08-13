// قَصَصُ النَّبِيِّينَ, volume 5 «نَاقَةُ ثَمُودَ», chapter 11 -- النَّوْبَةُ.
// Printed pages 106 (from ch11's own heading box, right after ch10's closing
// line) - 107 (top portion only, ending before ch12's own box طُغْيَانُ
// ثَمُودَ partway down that page). Transcribed by hand from the scan (vision
// OCR, 300dpi render) against ../CHAPTER-FORMAT.md and QASAS_VOLUME_MAP.md's
// volume 5 table.
//
// Ṣāliḥ names the she-camel for what it is -- a sign from Allah Himself,
// created by His own power in answer to the people's own demand -- and
// warns them, in the Qur'an's own words, not to harm it. It costs them
// nothing: it grazes and drinks freely, with plentiful fodder and water for
// everyone. But its sheer size and strangeness of form terrify Thamūd's own
// livestock, which bolt whenever it comes to drink -- so Ṣāliḥ settles the
// dispute with a rota: the she-camel drinks one day, the people's own
// livestock the next, turn and turn about.
//
// Grammar / lexical notes:
//   -- ﴿وَلَا تَمَسُّوهَا بِسُوءٍ فَيَأْخُذَكُمْ عَذَابٌ قَرِيبٌ﴾ (qs-v5-c11-002,
//      Qur'an 11:64/26:156) is tokenized and glossed fully like ordinary
//      narration, kept inside ﴿﴾, per the shared brief.
//   -- غَرِيبَةً (qs-v5-c11-009, "strange [in form]") is new despite feeling
//      like a basic adjective -- confirmed absent from the corpus grep,
//      unlike several superficially similar words that turned out to
//      already be taught elsewhere in this volume.
//   -- نَوْبَة (qs-v5-c11-016/018, "turn, rota") is this chapter's own title
//      word, introduced in its closing sentences once the rota itself is
//      established.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَالَ، صَالِح (qasas-v5
//      ch4/5)، هَذِهِ، نَاقَة (qasas-v5 ch10)، اللَّه، آيَة، سَأَلَ، خَلَقَ، لِ، لَا،
//      عَذَاب، قَرِيب، إِنَّ، أَكَلَ، فِي، أَرْض، شَرِبَ، ذَهَبَ، لَيْسَ، عَلَى، مَاء،
//      كَثِير، كَانَ، كَبِير، جِدّ، خَلْق، خَافَ، مِنْ، جَاءَ، كُلَّمَا، فَرَّ (qasas-v5
//      ch9)، رَأَى، ذَلِكَ، يَوْم، كَذَلِكَ، إِذَا، قَوْم
//      are all already taught and are NOT re-listed in newWords here.
//
// 9 new words (قُدْرَة، اِحْتَرَمَ، مَسَّ، سُوء، عَلَف، غَرِيب، مَاشِيَة، نَفَرَ، نَوْبَة).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch11',
  title: { ar: 'النَّوْبَةُ', en: 'The Turn (drinking-day rota)' },
  newWords: ['قُدْرَة', 'اِحْتَرَمَ', 'مَسَّ', 'سُوء', 'عَلَف', 'غَرِيب', 'مَاشِيَة', 'نَفَرَ', 'نَوْبَة'],
  lemmas: {
    قُدْرَة: { gloss: 'power, ability' },
    اِحْتَرَمَ: { gloss: 'to respect, honor' },
    مَسَّ: { gloss: 'to touch' },
    سُوء: { gloss: 'harm, evil' },
    عَلَف: { gloss: 'fodder' },
    غَرِيب: { gloss: 'strange, unfamiliar' },
    مَاشِيَة: { gloss: 'livestock' },
    نَفَرَ: { gloss: 'to flee, bolt' },
    نَوْبَة: { gloss: 'a turn, a rota' },
  },
  paragraphs: [
    {
      en: 'Ṣāliḥ said: "This is the she-camel of Allah, and this is the sign of Allah! You asked, and He created it for you by His power. So respect this she-camel -- \'do not touch it with harm, lest a near punishment seize you.\' This she-camel eats on Allah\'s earth, drinks, and goes about freely, and its fodder and water are not upon you -- fodder is plentiful and water is plentiful." This she-camel was very large and strange in form, so the people\'s livestock feared it and bolted from it. Whenever it came to drink, the livestock would bolt and flee. Ṣāliḥ saw this and said: "The she-camel has a day, and your livestock has a day. So one day this she-camel drinks, and one day your livestock drinks." And so it was: whenever it was the she-camel\'s turn, it would go and drink, and whenever it was the turn of the people\'s livestock, it would go and drink.',
      sentences: [
        {
          id: 'qs-v5-c11-001',
          ar: 'قَالَ صَالِحٌ:',
          en: 'Ṣāliḥ said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
          ],
        },
        {
          id: 'qs-v5-c11-002',
          ar: 'هَذِهِ نَاقَةُ اللَّهِ،',
          en: '"This is the she-camel of Allah,',
          tokens: [
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'نَاقَةُ', lemma: 'نَاقَة', pos: 'noun', features: 'constr.nom', gloss: 'the she-camel of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v5-c11-003',
          ar: 'وَهَذِهِ آيَةُ اللَّهِ!',
          en: 'and this is the sign of Allah!',
          tokens: [
            { surface: 'وَهَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'conj+dem.f', gloss: 'and this' },
            { surface: 'آيَةُ', lemma: 'آيَة', pos: 'noun', features: 'constr.nom', gloss: 'the sign of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v5-c11-004',
          ar: 'سَأَلْتُمْ فَخَلَقَهَا لَكُمْ بِقُدْرَتِهِ.',
          en: 'You asked, and He created it for you by His power.',
          tokens: [
            { surface: 'سَأَلْتُمْ', lemma: 'سَأَلَ', pos: 'verb', features: 'perf.2mp', gloss: 'to ask; you asked' },
            { surface: 'فَخَلَقَهَا', lemma: 'خَلَقَ', pos: 'verb', features: 'conj+perf.3ms+3fs', gloss: 'to create; so He created it' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'بِقُدْرَتِهِ', lemma: 'قُدْرَة', pos: 'noun', features: 'prep+gen+3ms', root: 'ق د ر', gloss: 'by His power' },
          ],
        },
        {
          id: 'qs-v5-c11-005',
          ar: 'فَاحْتَرِمُوا هَذِهِ النَّاقَةَ',
          en: 'So respect this she-camel --',
          tokens: [
            { surface: 'فَاحْتَرِمُوا', lemma: 'اِحْتَرَمَ', pos: 'verb', features: 'conj+imp.2mp', root: 'ح ر م', gloss: 'to respect, honor; so respect' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'النَّاقَةَ', lemma: 'نَاقَة', pos: 'noun', features: 'def.acc', gloss: 'the she-camel' },
          ],
        },
        {
          id: 'qs-v5-c11-006',
          ar: '﴿وَلَا تَمَسُّوهَا بِسُوءٍ فَيَأْخُذَكُمْ عَذَابٌ قَرِيبٌ﴾.',
          en: '\'do not touch it with harm, lest a near punishment seize you.\'"',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَمَسُّوهَا', lemma: 'مَسَّ', pos: 'verb', features: 'impf.2mp+3fs', root: 'م س س', gloss: 'to touch; touch it' },
            { surface: 'بِسُوءٍ', lemma: 'سُوء', pos: 'noun', features: 'prep+indef.gen', root: 'س و أ', gloss: 'with harm' },
            { surface: 'فَيَأْخُذَكُمْ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+impf.3ms+2mp', gloss: 'to seize; lest it seize you' },
            { surface: 'عَذَابٌ', lemma: 'عَذَاب', pos: 'noun', features: 'indef.nom', gloss: 'a punishment' },
            { surface: 'قَرِيبٌ', lemma: 'قَرِيب', pos: 'adj', features: 'indef.nom', gloss: 'near, imminent' },
          ],
        },
        {
          id: 'qs-v5-c11-007',
          ar: 'وَإِنَّ هَذِهِ النَّاقَةَ تَأْكُلُ فِي أَرْضِ اللَّهِ وَتَشْرَبُ وَتَذْهَبُ،',
          en: "This she-camel eats on Allah's earth, drinks, and goes about freely,",
          tokens: [
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'النَّاقَةَ', lemma: 'نَاقَة', pos: 'noun', features: 'def.acc', gloss: 'the she-camel' },
            { surface: 'تَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3fs', gloss: 'to eat; eats' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'أَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'constr.gen', gloss: "the earth of" },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَتَشْرَبُ', lemma: 'شَرِبَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to drink; and drinks' },
            { surface: 'وَتَذْهَبُ', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to go; and goes about' },
          ],
        },
        {
          id: 'qs-v5-c11-008',
          ar: 'وَلَيْسَ عَلَيْكُمْ عَلَفُهَا وَمَاؤُهَا،',
          en: 'and its fodder and water are not upon you --',
          tokens: [
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to not be; and is not' },
            { surface: 'عَلَيْكُمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+2mp', gloss: 'upon you' },
            { surface: 'عَلَفُهَا', lemma: 'عَلَف', pos: 'noun', features: 'nom+3fs', root: 'ع ل ف', gloss: 'its fodder' },
            { surface: 'وَمَاؤُهَا', lemma: 'مَاء', pos: 'noun', features: 'conj+nom+3fs', gloss: 'and its water' },
          ],
        },
        {
          id: 'qs-v5-c11-009',
          ar: 'فَالْعَلَفُ كَثِيرٌ وَالْمَاءُ كَثِيرٌ.',
          en: 'fodder is plentiful and water is plentiful.',
          tokens: [
            { surface: 'فَالْعَلَفُ', lemma: 'عَلَف', pos: 'noun', features: 'conj+def.nom', gloss: 'the fodder' },
            { surface: 'كَثِيرٌ', lemma: 'كَثِير', pos: 'adj', features: 'indef.nom', gloss: 'plentiful' },
            { surface: 'وَالْمَاءُ', lemma: 'مَاء', pos: 'noun', features: 'conj+def.nom', gloss: 'and the water' },
            { surface: 'كَثِيرٌ', lemma: 'كَثِير', pos: 'adj', features: 'indef.nom', gloss: 'plentiful' },
          ],
        },
        {
          id: 'qs-v5-c11-010',
          ar: 'وَكَانَتْ هَذِهِ النَّاقَةُ كَبِيرَةً جِدّاً وَغَرِيبَةً فِي الْخَلْقِ،',
          en: 'This she-camel was very large and strange in form,',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'النَّاقَةُ', lemma: 'نَاقَة', pos: 'noun', features: 'def.nom', gloss: 'the she-camel' },
            { surface: 'كَبِيرَةً', lemma: 'كَبِير', pos: 'adj', features: 'indef.acc.f', gloss: 'large' },
            { surface: 'جِدّاً', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', gloss: 'very' },
            { surface: 'وَغَرِيبَةً', lemma: 'غَرِيب', pos: 'adj', features: 'conj+indef.acc.f', gloss: 'strange, unfamiliar' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْخَلْقِ', lemma: 'خَلْق', pos: 'noun', features: 'def.gen', gloss: 'form, creation' },
          ],
        },
        {
          id: 'qs-v5-c11-011',
          ar: 'فَكَانَتْ مَاشِيَتُهُمْ تَخَافُهَا وَتَنْفِرُ مِنْهَا.',
          en: "so the people's livestock feared it and bolted from it.",
          tokens: [
            { surface: 'فَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; so was' },
            { surface: 'مَاشِيَتُهُمْ', lemma: 'مَاشِيَة', pos: 'noun', features: 'nom+3mp', root: 'م ش ي', gloss: 'their livestock' },
            { surface: 'تَخَافُهَا', lemma: 'خَافَ', pos: 'verb', features: 'impf.3fs+3fs', gloss: 'to fear; fearing it' },
            { surface: 'وَتَنْفِرُ', lemma: 'نَفَرَ', pos: 'verb', features: 'conj+impf.3fs', root: 'ن ف ر', gloss: 'to flee, bolt; and bolting' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from it' },
          ],
        },
        {
          id: 'qs-v5-c11-012',
          ar: 'وَكَانَتْ كُلَّمَا جَاءَتْ تَشْرَبُ نَفَرَتِ الْمَاشِيَةُ وَفَرَّتْ.',
          en: 'Whenever it came to drink, the livestock would bolt and flee.',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and it was' },
            { surface: 'كُلَّمَا', lemma: 'كُلَّمَا', pos: 'adv', features: 'adv', gloss: 'whenever' },
            { surface: 'جَاءَتْ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3fs', gloss: 'to come; came' },
            { surface: 'تَشْرَبُ', lemma: 'شَرِبَ', pos: 'verb', features: 'impf.3fs', gloss: 'to drink; to drink' },
            { surface: 'نَفَرَتِ', lemma: 'نَفَرَ', pos: 'verb', features: 'perf.3fs', root: 'ن ف ر', gloss: 'to flee, bolt; bolted' },
            { surface: 'الْمَاشِيَةُ', lemma: 'مَاشِيَة', pos: 'noun', features: 'def.nom', gloss: 'the livestock' },
            { surface: 'وَفَرَّتْ', lemma: 'فَرَّ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to flee; and fled' },
          ],
        },
        {
          id: 'qs-v5-c11-013',
          ar: 'رَأَى صَالِحٌ ذَلِكَ فَقَالَ:',
          en: 'Ṣāliḥ saw this and said:',
          tokens: [
            { surface: 'رَأَى', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms', gloss: 'to see; saw' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v5-c11-014',
          ar: 'لِلنَّاقَةِ يَوْمٌ وَلِمَاشِيَتِكُمْ يَوْمٌ.',
          en: '"The she-camel has a day, and your livestock has a day.',
          tokens: [
            { surface: 'لِلنَّاقَةِ', lemma: 'نَاقَة', pos: 'noun', features: 'prep+def.gen', gloss: 'for the she-camel, it has' },
            { surface: 'يَوْمٌ', lemma: 'يَوْم', pos: 'noun', features: 'indef.nom', gloss: 'a day' },
            { surface: 'وَلِمَاشِيَتِكُمْ', lemma: 'مَاشِيَة', pos: 'noun', features: 'conj+prep+gen+2mp', root: 'م ش ي', gloss: 'and for your livestock, it has' },
            { surface: 'يَوْمٌ', lemma: 'يَوْم', pos: 'noun', features: 'indef.nom', gloss: 'a day' },
          ],
        },
        {
          id: 'qs-v5-c11-015',
          ar: 'فَيَوْماً تَشْرَبُ هَذِهِ النَّاقَةُ،',
          en: 'So one day this she-camel drinks,',
          tokens: [
            { surface: 'فَيَوْماً', lemma: 'يَوْم', pos: 'noun', features: 'conj+indef.acc', gloss: 'so one day' },
            { surface: 'تَشْرَبُ', lemma: 'شَرِبَ', pos: 'verb', features: 'impf.3fs', gloss: 'to drink; drinks' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'النَّاقَةُ', lemma: 'نَاقَة', pos: 'noun', features: 'def.nom', gloss: 'the she-camel' },
          ],
        },
        {
          id: 'qs-v5-c11-016',
          ar: 'وَيَوْماً تَشْرَبُ مَاشِيَتُكُمْ.',
          en: 'and one day your livestock drinks."',
          tokens: [
            { surface: 'وَيَوْماً', lemma: 'يَوْم', pos: 'noun', features: 'conj+indef.acc', gloss: 'and one day' },
            { surface: 'تَشْرَبُ', lemma: 'شَرِبَ', pos: 'verb', features: 'impf.3fs', gloss: 'to drink; drinks' },
            { surface: 'مَاشِيَتُكُمْ', lemma: 'مَاشِيَة', pos: 'noun', features: 'nom+2mp', root: 'م ش ي', gloss: 'your livestock' },
          ],
        },
        {
          id: 'qs-v5-c11-017',
          ar: 'وَكَذَلِكَ كَانَ،',
          en: 'And so it was:',
          tokens: [
            { surface: 'وَكَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and likewise' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be, happen; it was' },
          ],
        },
        {
          id: 'qs-v5-c11-018',
          ar: 'فَإِذَا كَانَتْ نَوْبَةُ النَّاقَةِ ذَهَبَتْ فَشَرِبَتْ.',
          en: "whenever it was the she-camel's turn, it would go and drink,",
          tokens: [
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'whenever' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'نَوْبَةُ', lemma: 'نَوْبَة', pos: 'noun', features: 'constr.nom', root: 'ن و ب', gloss: 'the turn of' },
            { surface: 'النَّاقَةِ', lemma: 'نَاقَة', pos: 'noun', features: 'def.gen', gloss: 'the she-camel' },
            { surface: 'ذَهَبَتْ', lemma: 'ذَهَبَ', pos: 'verb', features: 'perf.3fs', gloss: 'to go; it went' },
            { surface: 'فَشَرِبَتْ', lemma: 'شَرِبَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to drink; and drank' },
          ],
        },
        {
          id: 'qs-v5-c11-019',
          ar: 'وَإِذَا كَانَتْ نَوْبَةُ مَاشِيَةِ الْقَوْمِ ذَهَبَتْ فَشَرِبَتْ.',
          en: "and whenever it was the turn of the people's livestock, it would go and drink.",
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and whenever' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'نَوْبَةُ', lemma: 'نَوْبَة', pos: 'noun', features: 'constr.nom', root: 'ن و ب', gloss: 'the turn of' },
            { surface: 'مَاشِيَةِ', lemma: 'مَاشِيَة', pos: 'noun', features: 'constr.gen', root: 'م ش ي', gloss: 'the livestock of' },
            { surface: 'الْقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'ذَهَبَتْ', lemma: 'ذَهَبَ', pos: 'verb', features: 'perf.3fs', gloss: 'to go; it went' },
            { surface: 'فَشَرِبَتْ', lemma: 'شَرِبَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to drink; and drank' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ صَالِحٌ لِقَوْمِهِ عَنِ النَّاقَةِ؟',
          options: ['قَالَ: هَذِهِ نَاقَةُ اللَّهِ وَآيَتُهُ فَاحْتَرِمُوهَا وَلَا تَمَسُّوهَا بِسُوءٍ', 'قَالَ: هَذِهِ نَاقَتِي أَنَا وَلَيْسَتْ آيَةً', 'قَالَ: اذْبَحُوا هَذِهِ النَّاقَةَ لِلَّهِ'],
          answer: 0,
          qEn: 'What did Ṣāliḥ tell his people about the she-camel?',
          optionsEn: ['He said: This is the she-camel of Allah and His sign, so respect it and do not touch it with harm', 'He said: This is my own she-camel, not a sign', 'He said: Slaughter this she-camel for Allah'],
        },
        {
          q: 'لِمَاذَا كَانَتْ مَاشِيَةُ الْقَوْمِ تَخَافُ مِنَ النَّاقَةِ؟',
          options: ['لِأَنَّهَا كَانَتْ كَبِيرَةً جِدّاً وَغَرِيبَةً فِي الْخَلْقِ', 'لِأَنَّهَا كَانَتْ تُهَاجِمُهَا', 'لِأَنَّهَا كَانَتْ مَرِيضَةً'],
          answer: 0,
          qEn: "Why did the people's livestock fear the she-camel?",
          optionsEn: ['Because it was very large and strange in form', 'Because it attacked them', 'Because it was sick'],
        },
        {
          q: 'كَيْفَ قَسَّمَ صَالِحٌ الْمَاءَ بَيْنَ النَّاقَةِ وَمَاشِيَةِ الْقَوْمِ؟',
          options: ['جَعَلَ لِلنَّاقَةِ يَوْماً وَلِمَاشِيَتِهِمْ يَوْماً', 'مَنَعَ الْمَاشِيَةَ مِنَ الْمَاءِ كُلِّيّاً', 'جَعَلَ النَّاقَةَ تَشْرَبُ مَعَ الْمَاشِيَةِ فِي وَقْتٍ وَاحِدٍ'],
          answer: 0,
          qEn: "How did Ṣāliḥ divide the water between the she-camel and the people's livestock?",
          optionsEn: ['He gave the she-camel one day and their livestock one day', 'He barred the livestock from water entirely', 'He had the she-camel drink together with the livestock at the same time'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَاحْتَرِمُوا هَذِهِ',
        post: '﴿وَلَا تَمَسُّوهَا بِسُوءٍ﴾.',
        en: 'So respect this she-camel -- do not touch it with harm.',
        options: ['النَّاقَةَ', 'النَّاقَةُ', 'النَّاقَةِ', 'نَاقَةً'],
        answer: 0,
        rationales: [
          'Accusative, definite -- direct object of اِحْتَرِمُوا.',
          'Nominative -- wrong case for a direct object.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Indefinite -- wrong definiteness; the text refers to the specific she-camel already named.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَيْسَ عَلَيْكُمْ',
        post: 'وَمَاؤُهَا.',
        en: 'and its fodder and water are not upon you.',
        options: ['عَلَفُهَا', 'عَلَفَهَا', 'عَلَفِهَا', 'عَلَفٌ'],
        answer: 0,
        rationales: [
          'Nominative, "its" -- the delayed subject of the negated لَيْسَ.',
          'Accusative -- wrong case; لَيْسَ does not put its subject in the accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Indefinite, no possessor -- missing the required "its."',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَإِذَا كَانَتْ',
        post: 'النَّاقَةِ ذَهَبَتْ فَشَرِبَتْ.',
        en: "Whenever it was the she-camel's turn, it would go and drink.",
        options: ['نَوْبَةُ', 'نَوْبَةَ', 'نَوْبَةٍ', 'نَوْبَاتُ'],
        answer: 0,
        rationales: [
          'Nominative, construct -- the subject of كَانَتْ and first term of an إضافة with النَّاقَةِ.',
          'Accusative -- wrong case; the subject of كَانَ is nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural -- wrong number; a single turn is meant each time.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَشْرَبُ الرَّجُلُ مَاءً',
        pre: '',
        post: 'مَاءً',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَشْرَبُ', 'يَشْرَبُ', 'تَشْرَبُ', 'نَشْرَبُ'],
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
        base: 'يَشْرَبُ الرَّجُلُ مَاءً',
        pre: '',
        post: 'مَاءً',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَشْرَبُ', 'يَشْرَبُ', 'أَشْرَبُ', 'نَشْرَبُ'],
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
        base: 'يَشْرَبُ الرَّجُلُ مَاءً',
        pre: '',
        post: 'مَاءً',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَشْرَبُونَ', 'يَشْرَبُ', 'تَشْرَبُ', 'نَشْرَبُ'],
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

// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 5 -- مَنْ فَعَلَ هَذَا؟
// Printed pages 13-14. Transcribed by hand from the scan (vision OCR, 300dpi
// render) against QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// Four Qurʾānic quotations (21:59 partial, 21:60, 21:62, 21:63) -- sentences
// qs-v1-c05-006 through -018. Per QASAS_AGENT_BRIEF.md §6 there is no field
// to mark "don't drill this", so each ayah is split into fragments of at
// most 2 tokens, which disqualifies every one of them from the build stage
// (BUILD_MIN_TOKENS is 3) without altering a single diacritic. Do not merge
// these fragments back together, and do not pull any of them into a
// workshop cloze/shift frame.
//
// Grammatical note for QA: صَنَم (idol, masc.) takes masculine singular
// agreement (يَقْدِرُ) even though أَصْنَام (its broken plural) takes feminine
// singular agreement elsewhere in this chapter (لَا تَسْمَعُ...) -- both
// correct, not a typo; a singular masculine noun and its own broken plural
// agree differently.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch5',
  title: { ar: 'مَنْ فَعَلَ هَذَا؟', en: 'Who Did This?' },
  newWords: [
    'رَجَعَ', 'دَخَلَ', 'أَرَادَ', 'تَعَجَّبَ', 'دَهِشَ', 'تَأَسَّفَ', 'فَتًى',
    'إِلَٰه', 'قَدَرَ', 'مَشَى', 'تَحَرَّكَ', 'عَلِمَ', 'عَقَلَ', 'خَجِلَ', 'حَجَر',
  ],
  lemmas: {
    'رَجَعَ': { gloss: 'to return' },
    'دَخَلَ': { gloss: 'to enter' },
    'أَرَادَ': { gloss: 'to want, intend' },
    'تَعَجَّبَ': { gloss: 'to be amazed' },
    'دَهِشَ': { gloss: 'to be astonished' },
    'تَأَسَّفَ': { gloss: 'to be sorry, regret' },
    'فَتًى': { gloss: 'young man' },
    'إِلَٰه': { gloss: 'god, deity' },
    'قَدَرَ': { gloss: 'to be able' },
    'مَشَى': { gloss: 'to walk' },
    'تَحَرَّكَ': { gloss: 'to move' },
    'عَلِمَ': { gloss: 'to know' },
    'عَقَلَ': { gloss: 'to reason, understand' },
    'خَجِلَ': { gloss: 'to feel ashamed' },
    'حَجَر': { gloss: 'a stone' },
    'كَيْفَ': { gloss: 'how' },
    'بَلْ': { gloss: 'rather' },
    'إِنْ': { gloss: 'if' },
    'إِنَّ': { gloss: 'indeed, verily' },
  },
  paragraphs: [
    {
      en: "The people came back and went into the house of the idols, meaning to prostrate to them since it was a feast day -- but they were amazed and astonished, sorry and angry. They said: 'Who did this to our gods?' 'We heard a young man mentioning them, called Ibrāhīm.' 'Was it you who did this to our gods, O Ibrāhīm?' 'Rather it was done by this, their biggest one -- so ask them, if they can speak!' Yet the people knew the idols were stones, that stone neither hears nor speaks, that the biggest idol too was only a stone, unable to walk or move, unable to break the other idols. So they said to Ibrāhīm: 'You know the idols cannot speak.' Ibrāhīm said: 'Then how can you worship idols that neither harm nor benefit? How can you ask idols that neither speak nor hear? Do you not understand anything at all -- will you not reason?' And the people fell silent, ashamed.",
      sentences: [
        {
          id: 'qs-v1-c05-001',
          ar: 'وَرَجَعَ النَّاسُ وَدَخَلُوا فِي بَيْتِ الْأَصْنَامِ.',
          en: 'And the people came back and went into the house of the idols.',
          tokens: [
            { surface: 'وَرَجَعَ', lemma: 'رَجَعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر ج ع', gloss: 'to return' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'وَدَخَلُوا', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+perf.3mp', root: 'د خ ل', gloss: 'to enter' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, into' },
            { surface: 'بَيْتِ', lemma: 'بَيْت', pos: 'noun', features: 'gen.constr', root: 'ب ي ت', gloss: 'house' },
            { surface: 'الْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.gen', root: 'ص ن م', gloss: 'idols' },
          ],
        },
        {
          id: 'qs-v1-c05-002',
          ar: 'وَأَرَادَ النَّاسُ أَنْ يَسْجُدُوا لِلْأَصْنَامِ لِأَنَّهُ يَوْمُ عِيدٍ.',
          en: 'And the people meant to prostrate to the idols, because it was a feast day.',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want, intend' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَسْجُدُوا', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3mp', root: 'س ج د', gloss: 'to prostrate' },
            { surface: 'لِلْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'prep+pl.def.gen', root: 'ص ن م', gloss: 'to the idols' },
            { surface: 'لِأَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+3ms', gloss: 'because it' },
            { surface: 'يَوْمُ', lemma: 'يَوْم', pos: 'noun', features: 'nom.constr', root: 'ي و م', gloss: 'day' },
            { surface: 'عِيدٍ', lemma: 'عِيد', pos: 'noun', features: 'indef.gen', root: 'ع ي د', gloss: 'feast, festival' },
          ],
        },
        {
          id: 'qs-v1-c05-003',
          ar: 'وَلَكِنْ تَعَجَّبَ النَّاسُ وَدَهِشُوا.',
          en: 'But the people were amazed and astonished.',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'تَعَجَّبَ', lemma: 'تَعَجَّبَ', pos: 'verb', features: 'perf.3ms', root: 'ع ج ب', gloss: 'to be amazed' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'وَدَهِشُوا', lemma: 'دَهِشَ', pos: 'verb', features: 'conj+perf.3mp', root: 'د ه ش', gloss: 'to be astonished' },
          ],
        },
        {
          id: 'qs-v1-c05-004',
          ar: 'وَتَأَسَّفَ النَّاسُ وَغَضِبُوا.',
          en: 'And the people were sorry and grew angry.',
          tokens: [
            { surface: 'وَتَأَسَّفَ', lemma: 'تَأَسَّفَ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ س ف', gloss: 'to be sorry, regret' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'وَغَضِبُوا', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3mp', root: 'غ ض ب', gloss: 'to become angry' },
          ],
        },
        {
          id: 'qs-v1-c05-005',
          ar: 'قَالُوا:',
          en: 'They said:',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v1-c05-006',
          ar: '﴿مَن فَعَلَ',
          en: 'Who did',
          tokens: [
            { surface: 'مَن', lemma: 'مَن', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'فَعَلَ', lemma: 'فَعَلَ', pos: 'verb', features: 'perf.3ms', root: 'ف ع ل', gloss: 'to do' },
          ],
        },
        {
          id: 'qs-v1-c05-007',
          ar: 'هَذَا بِآلِهَتِنَا﴾؟',
          en: 'this to our gods?',
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'بِآلِهَتِنَا', lemma: 'إِلَٰه', pos: 'noun', features: 'prep+pl.gen+1p', root: 'أ ل ه', gloss: 'to our gods' },
          ],
        },
        {
          id: 'qs-v1-c05-008',
          ar: '﴿قَالُوا سَمِعْنَا فَتًى',
          en: 'We heard a young man',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; they said' },
            { surface: 'سَمِعْنَا', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.1p', root: 'س م ع', gloss: 'to hear; we heard' },
            { surface: 'فَتًى', lemma: 'فَتًى', pos: 'noun', features: 'indef.acc', root: 'ف ت ي', gloss: 'young man' },
          ],
        },
        {
          id: 'qs-v1-c05-009',
          ar: 'يَذْكُرُهُمْ يُقَالُ',
          // Compound enclitic on a verb (object pronoun, not a possessive) --
          // per QASAS_AGENT_BRIEF.md §4 this exact case isn't fully specced;
          // trailing 3mp is used here for "mentions THEM", best judgement.
          en: 'mentioning them, who is called',
          tokens: [
            { surface: 'يَذْكُرُهُمْ', lemma: 'ذَكَرَ', pos: 'verb', features: 'impf.3ms+3mp', root: 'ذ ك ر', gloss: 'to mention; mentions them' },
            { surface: 'يُقَالُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.pass.3ms', root: 'ق و ل', gloss: 'to be said, to be called' },
          ],
        },
        {
          id: 'qs-v1-c05-010',
          ar: 'لَهُ إِبْرَاهِيمُ﴾.',
          en: 'Ibrāhīm.',
          tokens: [
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c05-011',
          ar: '﴿قَالُوا أَأَنتَ فَعَلْتَ',
          en: 'Was it you who did',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; they said' },
            { surface: 'أَأَنتَ', lemma: 'أَنْتَ', pos: 'noun', features: 'part+2ms', gloss: 'are you' },
            { surface: 'فَعَلْتَ', lemma: 'فَعَلَ', pos: 'verb', features: 'perf.2ms', root: 'ف ع ل', gloss: 'to do; you did' },
          ],
        },
        {
          id: 'qs-v1-c05-012',
          ar: 'هَذَا بِآلِهَتِنَا',
          en: 'this to our gods,',
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'بِآلِهَتِنَا', lemma: 'إِلَٰه', pos: 'noun', features: 'prep+pl.gen+1p', root: 'أ ل ه', gloss: 'to our gods' },
          ],
        },
        {
          id: 'qs-v1-c05-013',
          ar: 'يَاإِبْرَاهِيمُ﴾؟',
          en: 'O Ibrāhīm?',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c05-014',
          ar: '﴿قَالَ بَلْ فَعَلَهُ',
          en: 'He said: rather, it was done by',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'فَعَلَهُ', lemma: 'فَعَلَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'ف ع ل', gloss: 'to do; he did it' },
          ],
        },
        {
          id: 'qs-v1-c05-015',
          ar: 'كَبِيرُهُمْ هَذَا',
          en: 'this, their biggest one --',
          tokens: [
            { surface: 'كَبِيرُهُمْ', lemma: 'كَبِير', pos: 'noun', features: 'nom+3mp', root: 'ك ب ر', gloss: 'their biggest one, their chief' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
          ],
        },
        {
          id: 'qs-v1-c05-016',
          ar: 'فَاسْأَلُوهُمْ',
          en: 'so ask them,',
          tokens: [
            { surface: 'فَاسْأَلُوهُمْ', lemma: 'سَأَلَ', pos: 'verb', features: 'conj+imp.2mp+3mp', root: 'س أ ل', gloss: 'to ask; so ask them' },
          ],
        },
        {
          id: 'qs-v1-c05-017',
          ar: 'إِن كَانُوا',
          en: 'if they are',
          tokens: [
            { surface: 'إِن', lemma: 'إِنْ', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; they were/are' },
          ],
        },
        {
          id: 'qs-v1-c05-018',
          ar: 'يَنطِقُونَ﴾.',
          en: 'able to speak.',
          tokens: [
            { surface: 'يَنطِقُونَ', lemma: 'نَطَقَ', pos: 'verb', features: 'impf.3mp', root: 'ن ط ق', gloss: 'to speak, utter' },
          ],
        },
        {
          id: 'qs-v1-c05-019',
          ar: 'وَكَانَ النَّاسُ يَعْرِفُونَ أَنَّ الْأَصْنَامَ حِجَارَةٌ.',
          en: 'Yet the people knew that the idols were stones.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...knew' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'يَعْرِفُونَ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3mp', root: 'ع ر ف', gloss: 'to know' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
            { surface: 'حِجَارَةٌ', lemma: 'حِجَارَة', pos: 'noun', features: 'indef.nom', root: 'ح ج ر', gloss: 'stones' },
          ],
        },
        {
          id: 'qs-v1-c05-020',
          ar: 'وَكَانُوا يَعْرِفُونَ أَنَّ الْحِجَارَةَ لَا تَسْمَعُ وَلَا تَنْطِقُ.',
          en: 'And they knew that stone neither hears nor speaks.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and they knew' },
            { surface: 'يَعْرِفُونَ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3mp', root: 'ع ر ف', gloss: 'to know' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْحِجَارَةَ', lemma: 'حِجَارَة', pos: 'noun', features: 'def.acc', root: 'ح ج ر', gloss: 'stone(s)' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَسْمَعُ', lemma: 'سَمِعَ', pos: 'verb', features: 'impf.3fs', root: 'س م ع', gloss: 'to hear' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَنْطِقُ', lemma: 'نَطَقَ', pos: 'verb', features: 'impf.3fs', root: 'ن ط ق', gloss: 'to speak, utter' },
          ],
        },
        {
          id: 'qs-v1-c05-021',
          ar: 'وَكَانُوا يَعْرِفُونَ أَنَّ الصَّنَمَ الْأَكْبَرَ أَيْضًا حَجَرٌ.',
          en: 'And they knew that the biggest idol, too, was a stone.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and they knew' },
            { surface: 'يَعْرِفُونَ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3mp', root: 'ع ر ف', gloss: 'to know' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الصَّنَمَ', lemma: 'صَنَم', pos: 'noun', features: 'def.acc', root: 'ص ن م', gloss: 'idol' },
            { surface: 'الْأَكْبَرَ', lemma: 'أَكْبَر', pos: 'adj', features: 'def.acc', root: 'ك ب ر', gloss: 'biggest' },
            { surface: 'أَيْضًا', lemma: 'أَيْضًا', pos: 'adv', features: 'indef.acc', gloss: 'also, too' },
            { surface: 'حَجَرٌ', lemma: 'حَجَر', pos: 'noun', features: 'indef.nom', root: 'ح ج ر', gloss: 'a stone' },
          ],
        },
        {
          id: 'qs-v1-c05-022',
          ar: 'وَأَنَّ الصَّنَمَ الْأَكْبَرَ لَا يَقْدِرُ أَنْ يَمْشِيَ وَيَتَحَرَّكَ.',
          en: 'And that the biggest idol could not walk or move.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'الصَّنَمَ', lemma: 'صَنَم', pos: 'noun', features: 'def.acc', root: 'ص ن م', gloss: 'idol' },
            { surface: 'الْأَكْبَرَ', lemma: 'أَكْبَر', pos: 'adj', features: 'def.acc', root: 'ك ب ر', gloss: 'biggest' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَقْدِرُ', lemma: 'قَدَرَ', pos: 'verb', features: 'impf.3ms', root: 'ق د ر', gloss: 'to be able' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَمْشِيَ', lemma: 'مَشَى', pos: 'verb', features: 'impf.3ms', root: 'م ش ي', gloss: 'to walk' },
            { surface: 'وَيَتَحَرَّكَ', lemma: 'تَحَرَّكَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ح ر ك', gloss: 'to move' },
          ],
        },
        {
          id: 'qs-v1-c05-023',
          ar: 'وَأَنَّ الصَّنَمَ الْأَكْبَرَ لَا يَقْدِرُ أَنْ يَكْسِرَ الْأَصْنَامَ.',
          en: 'And that the biggest idol could not break the idols.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'الصَّنَمَ', lemma: 'صَنَم', pos: 'noun', features: 'def.acc', root: 'ص ن م', gloss: 'idol' },
            { surface: 'الْأَكْبَرَ', lemma: 'أَكْبَر', pos: 'adj', features: 'def.acc', root: 'ك ب ر', gloss: 'biggest' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَقْدِرُ', lemma: 'قَدَرَ', pos: 'verb', features: 'impf.3ms', root: 'ق د ر', gloss: 'to be able' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَكْسِرَ', lemma: 'كَسَرَ', pos: 'verb', features: 'impf.3ms', root: 'ك س ر', gloss: 'to break' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
          ],
        },
        {
          id: 'qs-v1-c05-024',
          ar: 'فَقَالُوا لِإِبْرَاهِيمَ:',
          en: 'So they said to Ibrāhīm:',
          tokens: [
            { surface: 'فَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق و ل', gloss: 'so they said' },
            { surface: 'لِإِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'prep+gen', gloss: 'to Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c05-025',
          ar: 'أَنْتَ تَعْلَمُ أَنَّ الْأَصْنَامَ لَا تَنْطِقُ.',
          en: 'You know that the idols do not speak.',
          tokens: [
            { surface: 'أَنْتَ', lemma: 'أَنْتَ', pos: 'noun', features: '2ms', gloss: 'you' },
            { surface: 'تَعْلَمُ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.2ms', root: 'ع ل م', gloss: 'to know' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَنْطِقُ', lemma: 'نَطَقَ', pos: 'verb', features: 'impf.3fs', root: 'ن ط ق', gloss: 'to speak, utter' },
          ],
        },
        {
          id: 'qs-v1-c05-026',
          ar: 'قَالَ إِبْرَاهِيمُ:',
          en: 'Ibrāhīm said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c05-027',
          ar: 'فَكَيْفَ تَعْبُدُونَ الْأَصْنَامَ وَإِنَّهَا لَا تَضُرُّ وَلَا تَنْفَعُ؟!!',
          en: 'So how can you worship idols that neither harm nor benefit?!',
          tokens: [
            { surface: 'فَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'so how' },
            { surface: 'تَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2mp', root: 'ع ب د', gloss: 'to worship' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
            { surface: 'وَإِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3fs', gloss: 'when/while they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَضُرُّ', lemma: 'ضَرَّ', pos: 'verb', features: 'impf.3fs', root: 'ض ر ر', gloss: 'to harm' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَنْفَعُ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3fs', root: 'ن ف ع', gloss: 'to benefit' },
          ],
        },
        {
          id: 'qs-v1-c05-028',
          ar: 'وَكَيْفَ تَسْأَلُونَ الْأَصْنَامَ وَإِنَّهَا لَا تَنْطِقُ وَلَا تَسْمَعُ؟',
          en: 'And how can you ask idols that neither speak nor hear?',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'تَسْأَلُونَ', lemma: 'سَأَلَ', pos: 'verb', features: 'impf.2mp', root: 'س أ ل', gloss: 'to ask' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
            { surface: 'وَإِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3fs', gloss: 'when/while they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَنْطِقُ', lemma: 'نَطَقَ', pos: 'verb', features: 'impf.3fs', root: 'ن ط ق', gloss: 'to speak, utter' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَسْمَعُ', lemma: 'سَمِعَ', pos: 'verb', features: 'impf.3fs', root: 'س م ع', gloss: 'to hear' },
          ],
        },
        {
          id: 'qs-v1-c05-029',
          ar: 'أَلَا تَفْهَمُونَ شَيْئًا،',
          en: 'Do you not understand anything,',
          tokens: [
            { surface: 'أَلَا', lemma: 'أَلَا', pos: 'part', features: 'part', gloss: 'do you not' },
            { surface: 'تَفْهَمُونَ', lemma: 'فَهِمَ', pos: 'verb', features: 'impf.2mp', root: 'ف ه م', gloss: 'to understand' },
            { surface: 'شَيْئًا', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', root: 'ش ي أ', gloss: 'thing, anything' },
          ],
        },
        {
          id: 'qs-v1-c05-030',
          ar: 'أَفَلَا تَعْقِلُونَ؟',
          en: 'will you not reason?',
          tokens: [
            { surface: 'أَفَلَا', lemma: 'أَفَلَا', pos: 'part', features: 'part', gloss: 'will you not' },
            { surface: 'تَعْقِلُونَ', lemma: 'عَقَلَ', pos: 'verb', features: 'impf.2mp', root: 'ع ق ل', gloss: 'to reason, understand' },
          ],
        },
        {
          id: 'qs-v1-c05-031',
          ar: 'وَسَكَتَ النَّاسُ وَخَجِلُوا!!',
          en: 'And the people fell silent, ashamed!',
          tokens: [
            { surface: 'وَسَكَتَ', lemma: 'سَكَتَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ك ت', gloss: 'to fall silent' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'وَخَجِلُوا', lemma: 'خَجِلَ', pos: 'verb', features: 'conj+perf.3mp', root: 'خ ج ل', gloss: 'to feel ashamed' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ النَّاسُ عِنْدَمَا رَأَوُا الْأَصْنَامَ مَكْسُورَةً؟',
          options: ['مَن فَعَلَ هَذَا بِآلِهَتِنَا', 'هَذَا عَجِيبٌ جِدًّا', 'لَا بَأْسَ'],
          answer: 0,
          qEn: 'What did the people say when they saw the idols broken?',
          optionsEn: ['Who did this to our gods?', 'This is very strange', 'No matter'],
        },
        {
          q: 'مَنْ قَالَ النَّاسُ إِنَّهُ فَعَلَ ذَلِكَ؟',
          options: ['فَتًى يُقَالُ لَهُ إِبْرَاهِيمُ', 'رَجُلٌ غَرِيبٌ', 'لَا أَحَدَ'],
          answer: 0,
          qEn: 'Who did the people say did this?',
          optionsEn: ['A young man called Ibrāhīm', 'A stranger', 'No one'],
        },
        {
          q: 'مَاذَا قَالَ إِبْرَاهِيمُ عَنِ الصَّنَمِ الْأَكْبَرِ؟',
          options: ['فَاسْأَلُوهُمْ إِنْ كَانُوا يَنْطِقُونَ', 'إِنَّهُ ذَهَبِيٌّ', 'إِنَّهُ يَتَكَلَّمُ'],
          answer: 0,
          qEn: 'What did Ibrāhīm say about the biggest idol?',
          optionsEn: ['So ask them, if they can speak', 'It is made of gold', 'It can talk'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَأَنَّ الصَّنَمَ الْأَكْبَرَ لَا',
        post: 'أَنْ يَمْشِيَ وَيَتَحَرَّكَ.',
        en: 'And that the biggest idol could not walk or move.',
        options: ['يَقْدِرُ', 'تَقْدِرُ', 'قَدَرَ', 'يَقْدِرُونَ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches الصَّنَم, a masculine noun.',
          '2nd masculine or 3rd feminine singular -- wrong agreement here.',
          "That's the perfect -- once was able, not the standing fact stated.",
          "Plural -- but only one idol is meant.",
        ],
      },
      {
        type: 'cloze',
        pre: 'فَقَالُوا لِإِبْرَاهِيمَ: أَنْتَ',
        post: 'أَنَّ الْأَصْنَامَ لَا تَنْطِقُ.',
        en: 'So they said to Ibrāhīm: You know that the idols do not speak.',
        options: ['تَعْلَمُ', 'يَعْلَمُ', 'أَعْلَمُ', 'تَعْلَمُونَ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he.',
          '1st person singular -- I.',
          '2nd masculine plural -- addressing more than one.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ إِبْرَاهِيمُ: فَكَيْفَ',
        post: 'الْأَصْنَامَ وَإِنَّهَا لَا تَضُرُّ وَلَا تَنْفَعُ؟',
        en: 'Ibrāhīm said: So how can you worship idols that neither harm nor benefit?',
        options: ['تَعْبُدُونَ', 'يَعْبُدُونَ', 'تَعْبُدُ', 'نَعْبُدُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- Ibrāhīm addresses the whole people.',
          '3rd masculine plural -- they.',
          '2nd masculine singular -- only one person.',
          '1st person plural -- we.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَقْدِرُ أَنْ يَمْشِيَ',
        pre: '',
        post: 'أَنْ يَمْشِيَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَقْدِرُ', 'يَقْدِرُ', 'تَقْدِرُ', 'نَقْدِرُ'],
        answer: 0,
        rationales: [
          '1st person singular -- matches أَنَا.',
          '3rd masculine singular -- he.',
          '2nd masculine or 3rd feminine singular.',
          '1st person plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَقْدِرُ أَنْ يَمْشِيَ',
        pre: '',
        post: 'أَنْ يَمْشِيَ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَقْدِرُ', 'يَقْدِرُ', 'أَقْدِرُ', 'تَقْدِرِينَ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he.',
          '1st person singular -- I.',
          '2nd feminine singular -- you (f.).',
        ],
      },
      {
        type: 'shift',
        base: 'يَقْدِرُ أَنْ يَمْشِيَ',
        pre: '',
        post: 'أَنْ يَمْشِيَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَقْدِرُ', 'يَقْدِرُ', 'أَقْدِرُ', 'يَقْدِرُونَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he.',
          '1st person singular -- I.',
          '3rd masculine plural -- they.',
        ],
      },
    ],
  },
};

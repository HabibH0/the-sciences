// قَصَصُ النَّبِيِّينَ, volume 8 «قِصَّةُ سَيِّدِنَا شُعَيْبٍ», chapter 5 --
// أَبٌ رَحِيمٌ وَمُعَلِّمٌ حَكِيمٌ. Printed pages 217 (bottom, right after ch4's
// closing Qurʾān quote and the chapter heading box) through 218 (ending
// right before ch6's heading box). Transcribed by hand from the scan
// (vision OCR, 200-400dpi renders) against ../CHAPTER-FORMAT.md.
//
// Shuʿayb varies his approach and shows real skill in counsel, the way of a
// merciful father and a wise teacher -- and the chapter is almost entirely
// one long Qurʾān quotation (Hūd 11:84-86), re-opening with the same
// worship-and-fair-measure call already quoted in ch3 before continuing
// past where that quote stopped: a clear proof has come from your Lord, do
// not corrupt the earth after it has been set right, do not sit on every
// road threatening and turning people from Allah's way, and remember how
// few you once were before He multiplied you.
//
// Grammar / lexical notes:
//   -- qs-v8-c05-005/008 repeat two clauses verbatim from ch3's Qurʾān quote
//      (يَاقَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ and وَلَا تَبْخَسُوا
//      النَّاسَ أَشْيَاءَهُمْ) -- the scan re-quotes them here as the printed
//      text does, so they are transcribed again rather than deduplicated,
//      matching this volume's established practice (see ch4's header
//      comment for the same call on 11:85-86's overlap).
//   -- أَوْعَدَ (qs-v8-c05-011, form IV "to threaten") is a distinct lemma
//      from the already-taught تَوَعَّدَ (form V, qasas-v8 ch3) -- same root
//      و ع د, different measure, matching the corpus's existing practice of
//      giving each derived-measure verb its own lemma.
//   -- نَوَّعَ and كَثَّرَ (qs-v8-c05-001, -013, form II verbs "to vary" and
//      "to multiply [something]") are distinct lemmas from the unrelated
//      noun نَوْع and the already-taught form I verb كَثُرَ -- different
//      measure/part of speech despite the shared root.
//   -- بَغَى (qs-v8-c05-012, form I "to seek, desire") is a distinct lemma
//      from an unrelated noun sense of the same root already in the corpus
//      -- tagged fresh here on its verbal sense and usage.
//   -- ذَلِكُمْ (qs-v8-c05-010) reuses the already-taught demonstrative
//      lemma ذَلِكَ -- it is simply ذَلِكَ's 2nd-plural-addressee form (the
//      كُمْ swaps in for كَ the way a pronoun would), not a separate lemma.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لِ، فِي، النَّصِيحَة، شَأْن،
//      أَب، رَحِيم، حَكِيم، قَالَ، يَا، قَوْم، عَبَدَ، اللَّه، مَا، لِ، مِنْ، إِلَٰه، غَيْر،
//      قَدْ، جَاءَ، رَبّ، أَوْفَى، كَيْل، مِيزَان، لَا، بَخَسَ، نَاس، شَيْء، أَفْسَدَ، فِي،
//      أَرْض، بَعْدَ، إِصْلَاح، خَيْر، إِنْ، كَانَ، مُؤْمِن، كُلّ، عَنْ، سَبِيل، مَنْ، آمَنَ،
//      بِ، ذَكَرَ، إِذْ، قَلِيل، نَظَرَ، كَيْفَ، مُفْسِد are all already taught and
//      are NOT re-listed in newWords here.
//
// 13 new words (خِطَاب، تَفَنَّنَ، مُعَلِّم، بَيِّنَة، قَعَدَ، صِرَاط، صَدَّ، أَوْعَدَ،
// عِوَج، نَوَّعَ، كَثَّرَ، بَغَى، عَاقِبَة).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch5',
  title: { ar: 'أَبٌ رَحِيمٌ وَمُعَلِّمٌ حَكِيمٌ', en: 'A Merciful Father and a Wise Teacher' },
  newWords: ['خِطَاب', 'تَفَنَّنَ', 'مُعَلِّم', 'بَيِّنَة', 'قَعَدَ', 'صِرَاط', 'صَدَّ', 'أَوْعَدَ', 'عِوَج', 'نَوَّعَ', 'كَثَّرَ', 'بَغَى', 'عَاقِبَة'],
  lemmas: {
    خِطَاب: { gloss: 'address, manner of speaking' },
    تَفَنَّنَ: { gloss: 'to show skill, be inventive' },
    مُعَلِّم: { gloss: 'teacher' },
    بَيِّنَة: { gloss: 'a clear proof' },
    قَعَدَ: { gloss: 'to sit' },
    صِرَاط: { gloss: 'a path, road' },
    صَدَّ: { gloss: 'to turn away, hinder' },
    أَوْعَدَ: { gloss: 'to threaten' },
    عِوَج: { gloss: 'crookedness' },
    نَوَّعَ: { gloss: 'to vary, diversify' },
    كَثَّرَ: { gloss: 'to multiply, increase' },
    بَغَى: { gloss: 'to seek, desire' },
    عَاقِبَة: { gloss: 'the end, outcome' },
  },
  paragraphs: [
    {
      en: 'He varies his approach with them, and shows real skill in counsel, the way of a merciful father and a wise teacher, and says:',
      sentences: [
        {
          id: 'qs-v8-c05-001',
          ar: 'وَيُنَوِّعُ لَهُمْ فِي الْخِطَابِ،',
          en: 'He varies his approach with them,',
          tokens: [
            { surface: 'وَيُنَوِّعُ', lemma: 'نَوَّعَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ن و ع', gloss: 'to vary; and varies' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْخِطَابِ', lemma: 'خِطَاب', pos: 'noun', features: 'def.gen', root: 'خ ط ب', gloss: 'the address, speech' },
          ],
        },
        {
          id: 'qs-v8-c05-002',
          ar: 'وَيَتَفَنَّنُ فِي النَّصِيحَةِ،',
          en: 'and shows real skill in counsel,',
          tokens: [
            { surface: 'وَيَتَفَنَّنُ', lemma: 'تَفَنَّنَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ف ن ن', gloss: 'to show skill; and shows skill' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'النَّصِيحَةِ', lemma: 'نَصِيحَة', pos: 'noun', features: 'def.gen', gloss: 'the counsel' },
          ],
        },
        {
          id: 'qs-v8-c05-003',
          ar: 'شَأْنَ الأَبِ الرَّحِيمِ وَالْمُعَلِّمِ الْحَكِيمِ،',
          en: 'the way of a merciful father and a wise teacher,',
          tokens: [
            { surface: 'شَأْنَ', lemma: 'شَأْن', pos: 'noun', features: 'acc', gloss: 'in the manner of' },
            { surface: 'الأَبِ', lemma: 'أَب', pos: 'noun', features: 'def.gen', gloss: 'the father' },
            { surface: 'الرَّحِيمِ', lemma: 'رَحِيم', pos: 'adj', features: 'def.gen', gloss: 'the merciful' },
            { surface: 'وَالْمُعَلِّمِ', lemma: 'مُعَلِّم', pos: 'noun', features: 'conj+def.gen', root: 'ع ل م', gloss: 'and the teacher' },
            { surface: 'الْحَكِيمِ', lemma: 'حَكِيم', pos: 'adj', features: 'def.gen', gloss: 'the wise' },
          ],
        },
        {
          id: 'qs-v8-c05-004',
          ar: 'فَيَقُولُ:',
          en: 'and says:',
          tokens: [
            { surface: 'فَيَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to say; and says' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَ الْكَاتِبُ طَرِيقَةَ شُعَيْبٍ فِي نُصْحِ قَوْمِهِ؟',
          options: ['شَأْنَ الأَبِ الرَّحِيمِ وَالْمُعَلِّمِ الْحَكِيمِ', 'شَأْنَ الْقَاضِي الصَّارِمِ', 'شَأْنَ الْجُنْدِيِّ الْغَاضِبِ'],
          answer: 0,
          qEn: "How does the author describe Shuʿayb's manner of advising his people?",
          optionsEn: ['The way of a merciful father and a wise teacher', 'The way of a strict judge', 'The way of an angry soldier'],
        },
      ],
    },
    {
      en: '"O my people, worship Allah -- you have no god other than Him. A clear proof has come to you from your Lord, so give the measure and the scale in full, and do not defraud people of their due, and do not corrupt the earth after it has been set right -- that is better for you, if you are believers. And do not sit on every road threatening and turning from Allah\'s way whoever believes in Him, seeking to make it crooked. And remember when you were few, and He multiplied you, and look how the end of the corrupters was."',
      sentences: [
        {
          id: 'qs-v8-c05-005',
          ar: '﴿يَاقَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ﴾',
          en: '"O my people, worship Allah -- you have no god other than Him.',
          tokens: [
            { surface: 'يَاقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'part+1s', gloss: 'O my people' },
            { surface: 'اعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'imp.2mp', gloss: 'to worship; worship!' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'لَكُم', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'you have' },
            { surface: 'مِّنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'any' },
            { surface: 'إِلَٰهٍ', lemma: 'إِلَه', pos: 'noun', features: 'indef.gen', gloss: 'god' },
            { surface: 'غَيْرُهُ', lemma: 'غَيْر', pos: 'noun', features: 'nom+3ms', gloss: 'other than Him' },
          ],
        },
        {
          id: 'qs-v8-c05-006',
          ar: '﴿قَدْ جَاءَتْكُم بَيِّنَةٌ مِّن رَّبِّكُمْ﴾',
          en: 'A clear proof has come to you from your Lord,',
          tokens: [
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'جَاءَتْكُم', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3fs+2mp', gloss: 'to come; has come to you' },
            { surface: 'بَيِّنَةٌ', lemma: 'بَيِّنَة', pos: 'noun', features: 'indef.nom', root: 'ب ي ن', gloss: 'a clear proof' },
            { surface: 'مِّن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'رَّبِّكُمْ', lemma: 'رَبّ', pos: 'noun', features: 'gen+2mp', gloss: 'your Lord' },
          ],
        },
        {
          id: 'qs-v8-c05-007',
          ar: '﴿فَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ﴾',
          en: 'so give the measure and the scale in full,',
          tokens: [
            { surface: 'فَأَوْفُوا', lemma: 'أَوْفَى', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to give in full; so give in full!' },
            { surface: 'الْكَيْلَ', lemma: 'كَيْل', pos: 'noun', features: 'def.acc', gloss: 'the measure' },
            { surface: 'وَالْمِيزَانَ', lemma: 'مِيزَان', pos: 'noun', features: 'conj+def.acc', gloss: 'and the scale' },
          ],
        },
        {
          id: 'qs-v8-c05-008',
          ar: '﴿وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ﴾',
          en: 'and do not defraud people of their due,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and do not' },
            { surface: 'تَبْخَسُوا', lemma: 'بَخَسَ', pos: 'verb', features: 'impf.2mp', gloss: 'to defraud; defraud' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'أَشْيَاءَهُمْ', lemma: 'شَيْء', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their due' },
          ],
        },
        {
          id: 'qs-v8-c05-009',
          ar: '﴿وَلَا تُفْسِدُوا فِي الأَرْضِ بَعْدَ إِصْلَاحِهَا﴾',
          en: 'and do not corrupt the earth after it has been set right --',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and do not' },
            { surface: 'تُفْسِدُوا', lemma: 'أَفْسَدَ', pos: 'verb', features: 'impf.2mp', gloss: 'to corrupt; corrupt' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'إِصْلَاحِهَا', lemma: 'إِصْلَاح', pos: 'noun', features: 'gen+3fs', gloss: 'its rectification' },
          ],
        },
        {
          id: 'qs-v8-c05-010',
          ar: '﴿ذَلِكُمْ خَيْرٌ لَّكُمْ إِن كُنتُم مُّؤْمِنِينَ﴾',
          en: 'that is better for you, if you are believers.',
          tokens: [
            { surface: 'ذَلِكُمْ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m+2mp', gloss: 'that (to you all)' },
            { surface: 'خَيْرٌ', lemma: 'خَيْر', pos: 'noun', features: 'indef.nom', gloss: 'better' },
            { surface: 'لَّكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'إِن', lemma: 'إِنْ', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'كُنتُم', lemma: 'كَانَ', pos: 'verb', features: 'perf.2mp', gloss: 'to be; you are' },
            { surface: 'مُّؤْمِنِينَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'pl.acc', gloss: 'believers' },
          ],
        },
        {
          id: 'qs-v8-c05-011',
          ar: '﴿وَلَا تَقْعُدُوا بِكُلِّ صِرَاطٍ تُوعِدُونَ وَتَصُدُّونَ﴾',
          en: "And do not sit on every road threatening and turning away",
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and do not' },
            { surface: 'تَقْعُدُوا', lemma: 'قَعَدَ', pos: 'verb', features: 'impf.2mp', root: 'ق ع د', gloss: 'to sit; sit' },
            { surface: 'بِكُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'prep+gen.constr', gloss: 'on every' },
            { surface: 'صِرَاطٍ', lemma: 'صِرَاط', pos: 'noun', features: 'indef.gen', root: 'ص ر ط', gloss: 'a road' },
            { surface: 'تُوعِدُونَ', lemma: 'أَوْعَدَ', pos: 'verb', features: 'impf.2mp', root: 'و ع د', gloss: 'to threaten; threatening' },
            { surface: 'وَتَصُدُّونَ', lemma: 'صَدَّ', pos: 'verb', features: 'conj+impf.2mp', root: 'ص د د', gloss: 'to turn away, hinder; and turning away' },
          ],
        },
        {
          id: 'qs-v8-c05-012',
          ar: '﴿عَن سَبِيلِ اللَّهِ مَنْ آمَنَ بِهِ وَتَبْغُونَهَا عِوَجًا﴾',
          en: "whoever believes in Him from Allah's way, seeking to make it crooked.",
          tokens: [
            { surface: 'عَن', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'سَبِيلِ', lemma: 'سَبِيل', pos: 'noun', features: 'gen.constr', gloss: 'the way of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whoever' },
            { surface: 'آمَنَ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3ms', gloss: 'to believe; believes' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'in Him' },
            { surface: 'وَتَبْغُونَهَا', lemma: 'بَغَى', pos: 'verb', features: 'conj+impf.2mp+3fs', root: 'ب غ ي', gloss: 'to seek; and seeking it' },
            { surface: 'عِوَجًا', lemma: 'عِوَج', pos: 'noun', features: 'indef.acc', root: 'ع و ج', gloss: 'crookedness' },
          ],
        },
        {
          id: 'qs-v8-c05-013',
          ar: '﴿وَاذْكُرُوا إِذْ كُنتُمْ قَلِيلًا فَكَثَّرَكُمْ﴾',
          en: 'And remember when you were few, and He multiplied you,',
          tokens: [
            { surface: 'وَاذْكُرُوا', lemma: 'ذَكَرَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to remember; and remember' },
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'كُنتُمْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2mp', gloss: 'to be; you were' },
            { surface: 'قَلِيلًا', lemma: 'قَلِيل', pos: 'noun', features: 'indef.acc', gloss: 'few' },
            { surface: 'فَكَثَّرَكُمْ', lemma: 'كَثَّرَ', pos: 'verb', features: 'conj+perf.3ms+2mp', root: 'ك ث ر', gloss: 'to multiply; and multiplied you' },
          ],
        },
        {
          id: 'qs-v8-c05-014',
          ar: '﴿وَانظُرُوا كَيْفَ كَانَ عَاقِبَةُ الْمُفْسِدِينَ﴾.',
          en: 'and look how the end of the corrupters was."',
          tokens: [
            { surface: 'وَانظُرُوا', lemma: 'نَظَرَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to look; and look' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'عَاقِبَةُ', lemma: 'عَاقِبَة', pos: 'noun', features: 'nom.constr', root: 'ع ق ب', gloss: 'the end of' },
            { surface: 'الْمُفْسِدِينَ', lemma: 'مُفْسِد', pos: 'noun', features: 'pl.def.gen', gloss: 'the corrupters' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يَحْدُثُ لِمَنْ يَقْعُدُ عَلَى الطَّرِيقِ يُهَدِّدُ الْمُؤْمِنِينَ وَيَصُدُّهُمْ عَنْ سَبِيلِ اللَّهِ، بِحَسَبِ الآيَةِ؟',
          options: ['يُذَكَّرُ بِأَنَّهُمْ كَانُوا قَلِيلاً فَكَثَّرَهُمُ اللَّهُ، وَيُنْظَرُ كَيْفَ كَانَتْ عَاقِبَةُ الْمُفْسِدِينَ', 'لَا شَيْءَ، فَهَذَا حَقُّهُ', 'يُكَافَأُ عَلَى ذَلِكَ'],
          answer: 0,
          qEn: 'What does the verse point to for those who sit on the road threatening believers and turning them from Allah\'s way?',
          optionsEn: ['They are reminded they were once few and Allah multiplied them, and told to look at the end of the corrupters', 'Nothing -- this is their right', 'They are rewarded for it'],
        },
        {
          q: 'بِمَاذَا وَصَفَ اللَّهُ الأَمْرَ الَّذِي جَاءَ بِهِ شُعَيْبٌ لِقَوْمِهِ؟',
          options: ['بَيِّنَةٌ مِنْ رَبِّهِمْ', 'حِكَايَةٌ قَدِيمَةٌ', 'رَأْيٌ شَخْصِيٌّ لِشُعَيْبٍ'],
          answer: 0,
          qEn: "How did Allah describe what Shuʿayb brought to his people?",
          optionsEn: ['A clear proof from their Lord', 'An old tale', "Shuʿayb's own personal opinion"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَدْ جَاءَتْكُم',
        post: 'مِّن رَّبِّكُمْ فَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ.',
        en: 'A clear proof has come to you from your Lord, so give the measure and the scale in full.',
        options: ['بَيِّنَةٌ', 'بَيِّنَةً', 'بَيِّنَةٍ', 'الْبَيِّنَةُ'],
        answer: 0,
        rationales: [
          'Indefinite nominative -- the subject of جَاءَتْكُم.',
          'Accusative -- wrong case; the subject of a verb is nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong; the proof is introduced here for the first time, so it is indefinite.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَا تَقْعُدُوا بِكُلِّ',
        post: 'تُوعِدُونَ وَتَصُدُّونَ عَن سَبِيلِ اللَّهِ.',
        en: "Do not sit on every road threatening and turning away from Allah's way.",
        options: ['صِرَاطٍ', 'صِرَاطاً', 'الصِّرَاطُ', 'صِرَاطُ'],
        answer: 0,
        rationales: [
          'Indefinite genitive -- the second term of the construct بِكُلِّ.',
          'Accusative -- wrong case; a construct\'s second term is genitive.',
          'Definite nominative -- wrong definiteness and case for this position.',
          'Nominative, no tanwīn -- wrong case for the second term of a construct.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَاذْكُرُوا إِذْ كُنتُمْ',
        post: 'فَكَثَّرَكُمْ.',
        en: 'And remember when you were few, and He multiplied you.',
        options: ['قَلِيلًا', 'قَلِيلٌ', 'قَلِيلٍ', 'أَقَلّ'],
        answer: 0,
        rationales: [
          'Indefinite accusative -- the predicate of كُنتُمْ, which takes the accusative.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative, not nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Elative ("fewer") -- wrong word; the sentence states a fact, not a comparison.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَذْكُرُ الرَّجُلُ النِّعْمَةَ',
        pre: '',
        post: 'النِّعْمَةَ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you all (m)',
        options: ['اذْكُرُوا', 'يَذْكُرُ', 'اذْكُرْ', 'نَذْكُرُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural imperative -- matches أَنْتُمْ commanded to remember.',
          '3rd masculine singular imperfect -- the base form, not shifted to a command for "you all."',
          '2nd masculine singular imperative -- wrong number; the target is plural.',
          '1st plural imperfect -- wrong person and mood.',
        ],
      },
      {
        type: 'shift',
        base: 'يَنظُرُ الرَّجُلُ إِلَى الْعَاقِبَةِ',
        pre: '',
        post: 'إِلَى الْعَاقِبَةِ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you all (m)',
        options: ['انظُرُوا', 'يَنظُرُ', 'انظُرْ', 'نَنظُرُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural imperative -- matches أَنْتُمْ commanded to look.',
          '3rd masculine singular imperfect -- the base form, not shifted to a command.',
          '2nd masculine singular imperative -- wrong number; the target is plural.',
          '1st plural imperfect -- wrong person and mood.',
        ],
      },
      {
        type: 'shift',
        base: 'كَانَ الرَّجُلُ قَلِيلًا',
        pre: '',
        post: 'قَلِيلًا',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you all (m)',
        options: ['كُنتُمْ', 'كَانَ', 'كُنتَ', 'كُنَّا'],
        answer: 0,
        rationales: [
          '2nd masculine plural perfect -- matches أَنْتُمْ.',
          '3rd masculine singular -- the base form, not shifted to "you all."',
          '2nd masculine singular -- wrong number; the target is plural.',
          '1st plural -- wrong person; the target is "you all," not "we."',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 8 -- فِي قَصْرِ
// فِرْعَوْنَ. Printed pages 121 (from the heading, partway down) - 122 -
// 123 (up to before ch9's heading «٩ - مَنْ يُرْضِعُ الطِّفْلَ؟؟» which opens
// partway down page 123). Transcribed by hand from the scan (vision OCR,
// 200dpi render) against ../CHAPTER-FORMAT.md.
//
// Pharaoh finds the chest on the Nile, the queen falls in love with the
// child inside and intercedes for his life over a servant's objection,
// and Mūsā grows up in the very palace of the man decreed to lose his
// throne because of him -- closing with the Qur'an's own verdict (28:8)
// that Pharaoh, Hāmān, and their soldiers were sinners.
//
// Grammar / lexical notes:
//   -- Long printed sentences with no internal comma are frequently split
//      at a clause boundary (e.g. qs-v6-c08-002a/002b at "وَ", -003a/003b,
//      -020a/020b), matching the precedent already used in ch6/ch7 for
//      keeping units inside the build stage's 3-9 token window.
//   -- qs-v6-c08-017b («﴿قُرَّتُ عَيْنٍ لِي وَلَكَ...») begins the Qur'an
//      quotation of 28:9. **The scan reads «لَا نَقْتُلُوهُ»** (1st person
//      plural, "let us not kill him") where the standard Mushaf text of
//      28:9 has «لَا تَقْتُلُوهُ» (2nd person plural imperative, "do not
//      kill him," addressed to Pharaoh's court). Transcribed exactly as
//      printed at 200dpi; flagging for a human check against the physical
//      book in case of a subtle ن/ت misread on the reviewer's end too.
//      Ayah 28:9 is quoted only up to «وَلَدًا» -- the scan does not carry
//      the ayah's closing «وَهُمْ لَا يَشْعُرُونَ».
//   -- The 28:8 quotation (qs-v6-c08-023) is likewise split at natural
//      pause points and transcribed in full with ﴿ ﴾, per the corpus's
//      real precedent (qasas-v2/chapter-22.js) -- not specially flagged.
//   -- رِجْل ("leg, foot") and حِجْر (ch7, "lap") are new lemmas distinct
//      from the already-taught رَجُل ("man") and حَجَر ("stone")
//      respectively -- true homographs once diacritics are stripped, but
//      different words with different meanings, not re-uses.
//   -- آلُ فِرْعَوْنَ ("Pharaoh's household/people") reuses the
//      already-taught noun آل (qasas-v2 ch1).
//   -- طِفْلًا يَذْهَبُ مُلْكُهُ عَلَى يَدِهِ (qs-v6-c08-020) echoes ch6's
//      وُلِدَ...أَنْ يَذْهَبَ مُلْكُ فِرْعَوْنَ عَلَى يَدِهِ almost verbatim --
//      Nadwi restating the chapter's opening decree now that it is
//      visibly happening under Pharaoh's own roof.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ، فِرْعَوْن (qasas-v6
//      ch6)، قَصْر (qasas-v2 ch7)، عَلَى، النِّيل (qasas-v6 ch7)، مِنْ، إِلَى،
//      جَلَسَ (qasas-v1 ch2)، رَأَى (qasas-v1 ch14 family)، مَعَ، مَلِك
//      (qasas-v1 ch15)، مِصْرَ (qasas-v2 ch7)، إِذْ، مَوْج (qasas-v3 ch19)،
//      قَبَّلَ (qasas-v3 ch7)، سَيِّد (qasas-v1 ch12)، أَحَد (qasas-v1 ch10)،
//      أَخْرَجَ (qasas-v2 ch7)، تَحَيَّرَ (qasas-v1 ch12)، بَعْض (qasas-v2 ch2)،
//      بُدّ (qasas-v3 ch2)، ذَبَحَ (qasas-v1 ch14)، صَدْر (qasas-v2 ch9)، شَفَعَ
//      (qasas-v3 ch20)، عَيْن (qasas-v2 ch23)، قَتَلَ (qasas-v1 ch10)، عَسَى
//      (qasas-v2 ch21)، نَفَعَ (qasas-v1 ch2)، هَكَذَا (qasas-v1 ch6)، رَغْم
//      (qasas-v6 ch6)، أَخْطَأَ (qasas-v3 ch15)، شَأْن (qasas-v2 ch5)، جُنْد
//      (qasas-v6 ch6)، آل (qasas-v2 ch1)، عَدُوّ (qasas-v1 ch9)، حُزْن (qasas-v2
//      ch5)، خَاطِئ (qasas-v2 ch8)، هَذَا، ذَلِكَ، بِ، وَ
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 20 new words (شَاطِئ، تَنَقَّلَ، تَنَزَّهَ، تَحْت، رِجْل، بَيْنَمَا، سَقَطَ، خَشَبَة،
// قَرُبَ، خَادِم، اِبْتَسَمَ، إِسْرَائِيلِيّ، ضَمَّ، قُرَّة، اِتَّخَذَ، اِهْتَدَى، رَبَّى،
// وَزِير، هَامَان، اِلْتَقَطَ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch8',
  title: { ar: 'فِي قَصْرِ فِرْعَوْنَ', en: "In Pharaoh's Palace" },
  newWords: [
    'شَاطِئ', 'تَنَقَّلَ', 'تَنَزَّهَ', 'تَحْت', 'رِجْل', 'بَيْنَمَا', 'سَقَطَ', 'خَشَبَة',
    'قَرُبَ', 'اِبْتَسَمَ', 'إِسْرَائِيلِيّ', 'ضَمَّ', 'قُرَّة', 'اِتَّخَذَ',
    'اِهْتَدَى', 'رَبَّى', 'وَزِير', 'هَامَان', 'اِلْتَقَطَ',
  ],
  lemmas: {
    شَاطِئ: { gloss: 'shore, bank' },
    تَنَقَّلَ: { gloss: 'to move about, go from place to place' },
    تَنَزَّهَ: { gloss: 'to stroll, take a walk' },
    تَحْت: { gloss: 'under, beneath' },
    رِجْل: { gloss: 'leg, foot' },
    بَيْنَمَا: { gloss: 'while, during which' },
    سَقَطَ: { gloss: 'to fall' },
    خَشَبَة: { gloss: 'a piece of wood, plank' },
    قَرُبَ: { gloss: 'to draw near, approach' },
    اِبْتَسَمَ: { gloss: 'to smile' },
    إِسْرَائِيلِيّ: { gloss: 'Israelite' },
    ضَمَّ: { gloss: 'to embrace, hold close, clasp' },
    قُرَّة: { gloss: 'coolness, comfort; "qurratu ʿayn" -- joy/comfort of the eye' },
    اِتَّخَذَ: { gloss: 'to take, adopt' },
    اِهْتَدَى: { gloss: 'to be guided, find one\'s way (to)' },
    رَبَّى: { gloss: 'to raise, bring up (a child)' },
    وَزِير: { gloss: 'minister, vizier' },
    هَامَان: { gloss: 'Hāmān, Pharaoh\'s minister' },
    اِلْتَقَطَ: { gloss: 'to pick up, retrieve' },
  },
  paragraphs: [
    {
      en: "Pharaoh had many palaces along the Nile's bank, and moved between them, strolling by the river. One day, as he sat watching it flow beneath his feet, the queen of Egypt was strolling with him, watching the Nile flow too -- and while the two of them strolled, their eyes fell together on a chest, tossed about by the Nile's waves as if the river were kissing it.",
      sentences: [
        {
          id: 'qs-v6-c08-001',
          ar: 'كَانَ فِرْعَوْنُ لَهُ قُصُورٌ كَثِيرَةٌ عَلَى شَاطِئِ النِّيلِ.',
          en: 'Pharaoh had many palaces along the bank of the Nile.',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'he had' },
            { surface: 'قُصُورٌ', lemma: 'قَصْر', pos: 'noun', features: 'pl.indef.nom', gloss: 'palaces' },
            { surface: 'كَثِيرَةٌ', lemma: 'كَثِير', pos: 'adj', features: 'indef.nom', gloss: 'many' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on, along' },
            { surface: 'شَاطِئِ', lemma: 'شَاطِئ', pos: 'noun', features: 'constr.gen', gloss: 'the bank of' },
            { surface: 'النِّيلِ', lemma: 'نِيل', pos: 'proper', features: 'def.gen', gloss: 'the Nile' },
          ],
        },
        {
          id: 'qs-v6-c08-002a',
          ar: 'وَكَانَ يَتَنَقَّلُ مِنْ قَصْرٍ إِلَى قَصْرٍ',
          en: 'He would move from palace to palace,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and used to' },
            { surface: 'يَتَنَقَّلُ', lemma: 'تَنَقَّلَ', pos: 'verb', features: 'impf.3ms', root: 'ن ق ل', gloss: 'to move about; move' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَصْرٍ', lemma: 'قَصْر', pos: 'noun', features: 'indef.gen', gloss: 'palace' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'قَصْرٍ', lemma: 'قَصْر', pos: 'noun', features: 'indef.gen', gloss: 'palace' },
          ],
        },
        {
          id: 'qs-v6-c08-002b',
          ar: 'وَيَتَنَزَّهُ عَلَى شَاطِئِ النِّيلِ.',
          en: 'strolling along the bank of the Nile.',
          tokens: [
            { surface: 'وَيَتَنَزَّهُ', lemma: 'تَنَزَّهَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ن ز ه', gloss: 'to stroll; and strolls' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'along' },
            { surface: 'شَاطِئِ', lemma: 'شَاطِئ', pos: 'noun', features: 'constr.gen', gloss: 'the bank of' },
            { surface: 'النِّيلِ', lemma: 'نِيل', pos: 'proper', features: 'def.gen', gloss: 'the Nile' },
          ],
        },
        {
          id: 'qs-v6-c08-003a',
          ar: 'وَكَانَ يَوْماً جَالِساً عَلَى شَاطِئِ النِّيلِ يَتَنَزَّهُ',
          en: 'One day, he was sitting on the bank of the Nile, strolling by it,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يَوْماً', lemma: 'يَوْم', pos: 'noun', features: 'indef.acc', gloss: 'one day' },
            { surface: 'جَالِساً', lemma: 'جَلَسَ', pos: 'adj', features: 'indef.acc', gloss: 'sitting' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'شَاطِئِ', lemma: 'شَاطِئ', pos: 'noun', features: 'constr.gen', gloss: 'the bank of' },
            { surface: 'النِّيلِ', lemma: 'نِيل', pos: 'proper', features: 'def.gen', gloss: 'the Nile' },
            { surface: 'يَتَنَزَّهُ', lemma: 'تَنَزَّهَ', pos: 'verb', features: 'impf.3ms', gloss: 'to stroll; strolling' },
          ],
        },
        {
          id: 'qs-v6-c08-003b',
          ar: 'وَيَرَى إِلَى النَّهْرِ يَجْرِي تَحْتَ رِجْلَيْهِ.',
          en: 'watching the river flow beneath his feet.',
          tokens: [
            { surface: 'وَيَرَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to see, watch; and watching' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'النَّهْرِ', lemma: 'نَهْر', pos: 'noun', features: 'def.gen', gloss: 'the river' },
            { surface: 'يَجْرِي', lemma: 'جَرَى', pos: 'verb', features: 'impf.3ms', gloss: 'to flow; flowing' },
            { surface: 'تَحْتَ', lemma: 'تَحْت', pos: 'prep', features: 'prep', gloss: 'beneath' },
            { surface: 'رِجْلَيْهِ', lemma: 'رِجْل', pos: 'noun', features: 'du.gen+3ms', gloss: 'his two feet' },
          ],
        },
        {
          id: 'qs-v6-c08-004a',
          ar: 'وَكَانَتْ مَعَهُ مَلِكَةُ مِصْرَ تَتَنَزَّهُ مَعَ الْمَلِكِ',
          en: 'The queen of Egypt was with him, strolling with the king,',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'مَعَهُ', lemma: 'مَعَ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
            { surface: 'مَلِكَةُ', lemma: 'مَلِكَة', pos: 'noun', features: 'constr.nom', gloss: 'the queen of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'تَتَنَزَّهُ', lemma: 'تَنَزَّهَ', pos: 'verb', features: 'impf.3fs', gloss: 'to stroll; strolling' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'الْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'def.gen', gloss: 'the king' },
          ],
        },
        {
          id: 'qs-v6-c08-004b',
          ar: 'وَتَرَى إِلَى النِّيلِ يَجْرِي',
          en: 'watching the Nile flow,',
          tokens: [
            { surface: 'وَتَرَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to see, watch; and watching' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'النِّيلِ', lemma: 'نِيل', pos: 'proper', features: 'def.gen', gloss: 'the Nile' },
            { surface: 'يَجْرِي', lemma: 'جَرَى', pos: 'verb', features: 'impf.3ms', gloss: 'to flow; flowing' },
          ],
        },
        {
          id: 'qs-v6-c08-004c',
          ar: 'وَبَيْنَمَا يَتَنَزَّهَانِ إِذْ وَقَعَ بَصَرُهُمَا عَلَى صُنْدُوقٍ',
          en: 'when, while the two of them were strolling, their eyes fell on a chest,',
          tokens: [
            { surface: 'وَبَيْنَمَا', lemma: 'بَيْنَمَا', pos: 'adv', features: 'conj+adv', gloss: 'and while' },
            { surface: 'يَتَنَزَّهَانِ', lemma: 'تَنَزَّهَ', pos: 'verb', features: 'impf.3md', gloss: 'to stroll; the two of them stroll' },
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'وَقَعَ', lemma: 'وَقَعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to fall, happen; fell' },
            { surface: 'بَصَرُهُمَا', lemma: 'بَصَر', pos: 'noun', features: 'nom+3md', gloss: 'the sight/gaze of the two of them' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'صُنْدُوقٍ', lemma: 'صُنْدُوق', pos: 'noun', features: 'indef.gen', gloss: 'a chest' },
          ],
        },
        {
          id: 'qs-v6-c08-004d',
          ar: 'تَلْعَبُ بِهِ أَمْوَاجُ النِّيلِ كَأَنَّمَا تُقَبِّلُهُ.',
          en: 'the waves of the Nile playing with it as if kissing it.',
          tokens: [
            { surface: 'تَلْعَبُ', lemma: 'لَعِبَ', pos: 'verb', features: 'impf.3fs', gloss: 'to play; play' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with it' },
            { surface: 'أَمْوَاجُ', lemma: 'مَوْج', pos: 'noun', features: 'pl.constr.nom', gloss: 'the waves of' },
            { surface: 'النِّيلِ', lemma: 'نِيل', pos: 'proper', features: 'def.gen', gloss: 'the Nile' },
            { surface: 'كَأَنَّمَا', lemma: 'كَأَنَّمَا', pos: 'part', features: 'part', gloss: 'as if' },
            { surface: 'تُقَبِّلُهُ', lemma: 'قَبَّلَ', pos: 'verb', features: 'impf.3fs+3ms', gloss: 'to kiss; kissing it' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيْنَ كَانَ فِرْعَوْنُ يَتَنَزَّهُ؟',
          options: ['عَلَى شَاطِئِ النِّيلِ', 'فِي السُّوقِ', 'فِي الصَّحْرَاءِ'],
          answer: 0,
          qEn: 'Where did Pharaoh like to stroll?',
          optionsEn: ['On the bank of the Nile', 'In the market', 'In the desert'],
        },
        {
          q: 'عَلَى مَاذَا وَقَعَ بَصَرُ فِرْعَوْنَ وَالْمَلِكَةِ؟',
          options: ['عَلَى صُنْدُوقٍ تَلْعَبُ بِهِ أَمْوَاجُ النِّيلِ', 'عَلَى قَارِبٍ صَغِيرٍ', 'عَلَى سَمَكَةٍ كَبِيرَةٍ'],
          answer: 0,
          qEn: 'What did the gaze of Pharaoh and the queen fall upon?',
          optionsEn: ['A chest tossed by the waves of the Nile', 'A small boat', 'A big fish'],
        },
      ],
    },
    {
      en: 'Pharaoh asked if his companion saw the chest -- some said it was only driftwood, but as it drew near everyone agreed it was truly a chest. The king ordered a servant to bring it out; when it was opened, a beautiful smiling boy lay inside, and everyone -- Pharaoh included -- was amazed. One of the servants said the boy was an Israelite and must be put to death, but the queen saw him, love for him entered her heart, and she clasped him to her chest and kissed him.',
      sentences: [
        {
          id: 'qs-v6-c08-005',
          ar: 'هَلْ تَرَى يَا سَيِّدِي ذَلِكَ الصُّنْدُوقَ؟',
          en: 'Do you see that chest, my lord?',
          tokens: [
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: 'is it that? (question)' },
            { surface: 'تَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.2ms', gloss: 'to see; do you see' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'سَيِّدِي', lemma: 'سَيِّد', pos: 'noun', features: 'nom+1s', gloss: 'my lord' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'الصُّنْدُوقَ', lemma: 'صُنْدُوق', pos: 'noun', features: 'def.acc', gloss: 'the chest' },
          ],
        },
        {
          id: 'qs-v6-c08-006',
          ar: 'أَيْنَ الصُّنْدُوقُ فِي النِّيلِ؟',
          en: 'Where is a chest in the Nile?',
          tokens: [
            { surface: 'أَيْنَ', lemma: 'أَيْن', pos: 'adv', features: 'adv', gloss: 'where' },
            { surface: 'الصُّنْدُوقُ', lemma: 'صُنْدُوق', pos: 'noun', features: 'def.nom', gloss: 'the chest' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'النِّيلِ', lemma: 'نِيل', pos: 'proper', features: 'def.gen', gloss: 'the Nile' },
          ],
        },
        {
          id: 'qs-v6-c08-007',
          ar: 'إِنَّمَا هِيَ خَشَبَةٌ سَقَطَتْ فِي النِّيلِ.',
          en: 'It is only a plank that fell into the Nile.',
          tokens: [
            { surface: 'إِنَّمَا', lemma: 'إِنَّمَا', pos: 'part', features: 'part', gloss: 'only' },
            { surface: 'هِيَ', lemma: 'هِيَ', pos: 'noun', features: 'nom.3fs', gloss: 'it' },
            { surface: 'خَشَبَةٌ', lemma: 'خَشَبَة', pos: 'noun', features: 'indef.nom', gloss: 'a plank' },
            { surface: 'سَقَطَتْ', lemma: 'سَقَطَ', pos: 'verb', features: 'perf.3fs', gloss: 'to fall; that fell' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'النِّيلِ', lemma: 'نِيل', pos: 'proper', features: 'def.gen', gloss: 'the Nile' },
          ],
        },
        {
          id: 'qs-v6-c08-008',
          ar: 'لَا يَا سَيِّدِي إِنَّمَا هُوَ صُنْدُوقٌ!',
          en: 'No, my lord, it is truly a chest!',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'سَيِّدِي', lemma: 'سَيِّد', pos: 'noun', features: 'nom+1s', gloss: 'my lord' },
            { surface: 'إِنَّمَا', lemma: 'إِنَّمَا', pos: 'part', features: 'part', gloss: 'only, truly' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3ms', gloss: 'it' },
            { surface: 'صُنْدُوقٌ', lemma: 'صُنْدُوق', pos: 'noun', features: 'indef.nom', gloss: 'a chest' },
          ],
        },
        {
          id: 'qs-v6-c08-009',
          ar: 'وَقَرُبَ الصُّنْدُوقُ، فَقَالَ النَّاسُ:',
          en: 'The chest drew near, and the people said:',
          tokens: [
            { surface: 'وَقَرُبَ', lemma: 'قَرُبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to draw near; and drew near' },
            { surface: 'الصُّنْدُوقُ', lemma: 'صُنْدُوق', pos: 'noun', features: 'def.nom', gloss: 'the chest' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v6-c08-010',
          ar: 'نَعَمْ هَذَا صُنْدُوقٌ!',
          en: 'Yes, this is a chest!',
          tokens: [
            { surface: 'نَعَمْ', lemma: 'نَعَمْ', pos: 'part', features: 'part', gloss: 'yes' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'صُنْدُوقٌ', lemma: 'صُنْدُوق', pos: 'noun', features: 'indef.nom', gloss: 'a chest' },
          ],
        },
        {
          id: 'qs-v6-c08-011a',
          ar: 'وَأَمَرَ الْمَلِكُ أَحَدَ الْخَدَمِ،',
          en: 'The king ordered one of the servants,',
          tokens: [
            { surface: 'وَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to command; and commanded' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', gloss: 'the king' },
            { surface: 'أَحَدَ', lemma: 'أَحَد', pos: 'noun', features: 'constr.acc', gloss: 'one of' },
            { surface: 'الْخَدَمِ', lemma: 'خَادِم', pos: 'noun', features: 'pl.def.gen', gloss: 'the servants' },
          ],
        },
        {
          id: 'qs-v6-c08-011b',
          ar: 'وَقَالَ: إِلَيْكَ هَذَا الصُّنْدُوقَ!',
          en: 'saying: "Bring me this chest!"',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'إِلَيْكَ', lemma: 'إِلَى', pos: 'prep', features: 'prep+2ms', gloss: 'bring here to you (idiom)' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الصُّنْدُوقَ', lemma: 'صُنْدُوق', pos: 'noun', features: 'def.acc', gloss: 'the chest' },
          ],
        },
        {
          id: 'qs-v6-c08-012',
          ar: 'وَذَهَبَ الْخَادِمُ وَأَخْرَجَ الصُّنْدُوقَ!',
          en: 'The servant went and brought out the chest!',
          tokens: [
            { surface: 'وَذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to go; and went' },
            { surface: 'الْخَادِمُ', lemma: 'خَادِم', pos: 'noun', features: 'def.nom', gloss: 'the servant' },
            { surface: 'وَأَخْرَجَ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to bring out; and brought out' },
            { surface: 'الصُّنْدُوقَ', lemma: 'صُنْدُوق', pos: 'noun', features: 'def.acc', gloss: 'the chest' },
          ],
        },
        {
          id: 'qs-v6-c08-013',
          ar: 'وَفُتِحَ الصُّنْدُوقُ فَإِذَا فِيهِ غُلَامٌ جَمِيلٌ يَتَبَسَّمُ.',
          en: 'The chest was opened, and there inside it was a beautiful boy, smiling.',
          tokens: [
            { surface: 'وَفُتِحَ', lemma: 'فَتَحَ', pos: 'verb', features: 'conj+pass+perf.3ms', gloss: 'to open; and was opened' },
            { surface: 'الصُّنْدُوقُ', lemma: 'صُنْدُوق', pos: 'noun', features: 'def.nom', gloss: 'the chest' },
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'conj', features: 'conj+conj', gloss: 'and there' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in it' },
            { surface: 'غُلَامٌ', lemma: 'غُلَام', pos: 'noun', features: 'indef.nom', gloss: 'a boy' },
            { surface: 'جَمِيلٌ', lemma: 'جَمِيل', pos: 'adj', features: 'indef.nom', gloss: 'beautiful' },
            { surface: 'يَتَبَسَّمُ', lemma: 'اِبْتَسَمَ', pos: 'verb', features: 'impf.3ms', root: 'ب س م', gloss: 'to smile; smiling' },
          ],
        },
        {
          id: 'qs-v6-c08-014',
          ar: 'وَتَحَيَّرَ النَّاسُ، كُلٌّ يَأْخُذُهُ وَيَرَاهُ.',
          en: 'The people were astonished, everyone taking him and looking at him.',
          tokens: [
            { surface: 'وَتَحَيَّرَ', lemma: 'تَحَيَّرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be bewildered, astonished; and were astonished' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'كُلٌّ', lemma: 'كُلّ', pos: 'noun', features: 'indef.nom', gloss: 'everyone' },
            { surface: 'يَأْخُذُهُ', lemma: 'أَخَذَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to take; taking him' },
            { surface: 'وَيَرَاهُ', lemma: 'رَأَى', pos: 'verb', features: 'conj+impf.3ms+3ms', gloss: 'to see; and looking at him' },
          ],
        },
        {
          id: 'qs-v6-c08-015',
          ar: 'وَتَحَيَّرَ فِرْعَوْنُ وَرَآهُ.',
          en: 'Pharaoh too was astonished, and looked at him.',
          tokens: [
            { surface: 'وَتَحَيَّرَ', lemma: 'تَحَيَّرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be bewildered, astonished; and was astonished' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'وَرَآهُ', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to see; and looked at him' },
          ],
        },
        {
          id: 'qs-v6-c08-016a',
          ar: 'قَالَ بَعْضُ الْخَدَمِ:',
          en: 'One of the servants said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'بَعْضُ', lemma: 'بَعْض', pos: 'noun', features: 'constr.nom', gloss: 'some of' },
            { surface: 'الْخَدَمِ', lemma: 'خَادِم', pos: 'noun', features: 'pl.def.gen', gloss: 'the servants' },
          ],
        },
        {
          id: 'qs-v6-c08-016b',
          ar: 'إِنَّ هَذَا الْغُلَامَ إِسْرَائِيلِيٌّ',
          en: '"This boy is an Israelite,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْغُلَامَ', lemma: 'غُلَام', pos: 'noun', features: 'def.acc', gloss: 'the boy' },
            { surface: 'إِسْرَائِيلِيٌّ', lemma: 'إِسْرَائِيلِيّ', pos: 'adj', features: 'indef.nom', gloss: 'Israelite' },
          ],
        },
        {
          id: 'qs-v6-c08-016c',
          ar: 'وَلَا بُدَّ لِلْمَلِكِ أَنْ يَذْبَحَهُ.',
          en: 'and the king must have him slaughtered."',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and no' },
            { surface: 'بُدَّ', lemma: 'بُدّ', pos: 'noun', features: 'acc', gloss: 'escape, way out' },
            { surface: 'لِلْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'prep+def.gen', gloss: 'for the king' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'but that' },
            { surface: 'يَذْبَحَهُ', lemma: 'ذَبَحَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to slaughter; he slaughter him' },
          ],
        },
        {
          id: 'qs-v6-c08-017',
          ar: 'وَرَأَتْهُ الْمَلِكَةُ، وَدَخَلَ حُبُّهُ فِي قَلْبِهَا',
          en: 'The queen saw him, and love for him entered her heart,',
          tokens: [
            { surface: 'وَرَأَتْهُ', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3fs+3ms', gloss: 'to see; and saw him' },
            { surface: 'الْمَلِكَةُ', lemma: 'مَلِكَة', pos: 'noun', features: 'def.nom', gloss: 'the queen' },
            { surface: 'وَدَخَلَ', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to enter; and entered' },
            { surface: 'حُبُّهُ', lemma: 'حُبّ', pos: 'noun', features: 'nom+3ms', gloss: 'love for him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'قَلْبِهَا', lemma: 'قَلْب', pos: 'noun', features: 'gen+3fs', gloss: 'her heart' },
          ],
        },
        {
          id: 'qs-v6-c08-018',
          ar: 'فَضَمَّتْهُ إِلَى صَدْرِهَا وَقَبَّلَتْهُ.',
          en: 'so she clasped him to her chest and kissed him.',
          tokens: [
            { surface: 'فَضَمَّتْهُ', lemma: 'ضَمَّ', pos: 'verb', features: 'conj+perf.3fs+3ms', gloss: 'to embrace, clasp; so clasped him' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'صَدْرِهَا', lemma: 'صَدْر', pos: 'noun', features: 'gen+3fs', gloss: 'her chest' },
            { surface: 'وَقَبَّلَتْهُ', lemma: 'قَبَّلَ', pos: 'verb', features: 'conj+perf.3fs+3ms', gloss: 'to kiss; and kissed him' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ فِي الصُّنْدُوقِ عِنْدَمَا فُتِحَ؟',
          options: ['غُلَامٌ جَمِيلٌ يَتَبَسَّمُ', 'ذَهَبٌ وَفِضَّةٌ', 'أَوْرَاقٌ قَدِيمَةٌ'],
          answer: 0,
          qEn: 'What was in the chest when it was opened?',
          optionsEn: ['A beautiful smiling boy', 'Gold and silver', 'Old papers'],
        },
        {
          q: 'مَاذَا قَالَ بَعْضُ الْخَدَمِ عَنِ الْغُلَامِ؟',
          options: ['إِنَّهُ إِسْرَائِيلِيٌّ وَلَا بُدَّ أَنْ يُذْبَحَ', 'إِنَّهُ اِبْنُ الْمَلِكِ', 'إِنَّهُ سَاحِرٌ'],
          answer: 0,
          qEn: 'What did one of the servants say about the boy?',
          optionsEn: ['That he was an Israelite who must be slaughtered', 'That he was the king\'s son', 'That he was a sorcerer'],
        },
      ],
    },
    {
      en: 'The queen interceded for him before the king with the Qur\'an\'s own words -- "a joy to the eye for me and you; do not kill him, perhaps he will benefit us, or we may adopt him as a son" -- and so Mūsā son of ʿImrān entered Pharaoh\'s palace and lived there in spite of Pharaoh and his police, who never found the Israelite child though they had the eyes of a crow and the sense of smell of an ant. Allah willed that Pharaoh, "the enemy of children," would himself raise the very child through whom his kingdom would be lost. Poor Pharaoh! He erred badly in Mūsā\'s case, and so did his minister Hāmān and his soldiers with him -- as the Qur\'an itself declares: Pharaoh\'s household picked him up only to have him become an enemy and a source of grief to them, for Pharaoh, Hāmān, and their soldiers were indeed sinners.',
      sentences: [
        {
          id: 'qs-v6-c08-019',
          ar: 'وَشَفَعَتْ لَهُ عِنْدَ الْمَلِكِ وَقَالَتْ:',
          en: 'She interceded for him before the king and said:',
          tokens: [
            { surface: 'وَشَفَعَتْ', lemma: 'شَفَعَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to intercede; and interceded' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv', gloss: 'before, with' },
            { surface: 'الْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'def.gen', gloss: 'the king' },
            { surface: 'وَقَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ق و ل', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v6-c08-020',
          ar: '﴿قُرَّتُ عَيْنٍ لِي وَلَكَ',
          en: '"A joy to the eye, for me and for you --',
          tokens: [
            { surface: 'قُرَّتُ', lemma: 'قُرَّة', pos: 'noun', features: 'constr.nom', gloss: 'a joy/comfort of' },
            { surface: 'عَيْنٍ', lemma: 'عَيْن', pos: 'noun', features: 'indef.gen', gloss: 'eye' },
            { surface: 'لِي', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'to me' },
            { surface: 'وَلَكَ', lemma: 'لِ', pos: 'prep', features: 'conj+prep+2ms', gloss: 'and to you' },
          ],
        },
        {
          id: 'qs-v6-c08-021',
          ar: 'لَا نَقْتُلُوهُ عَسَى أَنْ يَنْفَعَنَا',
          en: 'let us not kill him -- perhaps he will benefit us,',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'نَقْتُلُوهُ', lemma: 'قَتَلَ', pos: 'verb', features: 'impf.1p+3ms', gloss: 'to kill; let us kill him' },
            { surface: 'عَسَى', lemma: 'عَسَى', pos: 'verb', features: 'perf.3ms', gloss: 'perhaps, it may be that' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَنْفَعَنَا', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3ms+1p', gloss: 'to benefit; he benefit us' },
          ],
        },
        {
          id: 'qs-v6-c08-022',
          ar: 'أَوْ نَتَّخِذَهُ وَلَداً﴾.',
          en: 'or we may adopt him as a son."',
          tokens: [
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'نَتَّخِذَهُ', lemma: 'اِتَّخَذَ', pos: 'verb', features: 'impf.1p+3ms', root: 'أ خ ذ', gloss: 'to take, adopt; we adopt him' },
            { surface: 'وَلَداً', lemma: 'وَلَد', pos: 'noun', features: 'indef.acc', gloss: 'as a son' },
          ],
        },
        {
          id: 'qs-v6-c08-023a',
          ar: 'وَهَكَذَا دَخَلَ مُوسَى بْنُ عِمْرَانَ قَصْرَ فِرْعَوْنَ،',
          en: 'And so Mūsā son of ʿImrān entered Pharaoh\'s palace,',
          tokens: [
            { surface: 'وَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'conj+adv', gloss: 'and thus' },
            { surface: 'دَخَلَ', lemma: 'دَخَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to enter; entered' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'بْنُ', lemma: 'اِبْن', pos: 'noun', features: 'constr.nom', root: 'ب ن و', gloss: 'son of' },
            { surface: 'عِمْرَانَ', lemma: 'عِمْرَان', pos: 'proper', features: 'gen', gloss: 'ʿImrān' },
            { surface: 'قَصْرَ', lemma: 'قَصْر', pos: 'noun', features: 'constr.acc', gloss: 'the palace of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
          ],
        },
        {
          id: 'qs-v6-c08-023b',
          ar: 'وَعَاشَ عَلَى رَغْمِ فِرْعَوْنَ وَشُرْطَتِهِ.',
          en: 'and lived there in spite of Pharaoh and his police.',
          tokens: [
            { surface: 'وَعَاشَ', lemma: 'عَاشَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ي ش', gloss: 'to live; and lived' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'رَغْمِ', lemma: 'رَغْم', pos: 'noun', features: 'constr.gen', gloss: 'in spite of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَشُرْطَتِهِ', lemma: 'شُرْطَة', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his police' },
          ],
        },
        {
          id: 'qs-v6-c08-024a',
          ar: 'وَلَمْ يَهْتَدِ الشُّرْطَةُ إِلَى هَذَا الْمَوْلُودِ الْإِسْرَائِيلِيِّ،',
          en: 'The police never found this Israelite newborn,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and did not' },
            { surface: 'يَهْتَدِ', lemma: 'اِهْتَدَى', pos: 'verb', features: 'impf.3ms', root: 'ه د ي', gloss: 'to be guided, find; find (their way to)' },
            { surface: 'الشُّرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'def.nom', gloss: 'the police' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْمَوْلُودِ', lemma: 'مَوْلُود', pos: 'noun', features: 'def.gen', gloss: 'the newborn' },
            { surface: 'الْإِسْرَائِيلِيِّ', lemma: 'إِسْرَائِيلِيّ', pos: 'adj', features: 'def.gen', gloss: 'Israelite' },
          ],
        },
        {
          id: 'qs-v6-c08-024b',
          ar: 'وَلَهُمْ عُيُونُ الْغُرَابِ وَشَامَّةُ النَّمْلِ.',
          en: 'even though they had the eyes of a crow and the sense of smell of an ant.',
          tokens: [
            { surface: 'وَلَهُمْ', lemma: 'لِ', pos: 'prep', features: 'conj+prep+3mp', gloss: 'and they have' },
            { surface: 'عُيُونُ', lemma: 'عَيْن', pos: 'noun', features: 'pl.constr.nom', gloss: 'the eyes of' },
            { surface: 'الْغُرَابِ', lemma: 'غُرَاب', pos: 'noun', features: 'def.gen', gloss: 'the crow' },
            { surface: 'وَشَامَّةُ', lemma: 'شَامَّة', pos: 'noun', features: 'conj+constr.nom', gloss: 'and the sense of smell of' },
            { surface: 'النَّمْلِ', lemma: 'نَمْل', pos: 'noun', features: 'def.gen', gloss: 'the ant' },
          ],
        },
        {
          id: 'qs-v6-c08-025a',
          ar: 'وَأَرَادَ اللَّهُ أَنْ يُرَبِّيَ فِرْعَوْنُ «عَدُوُّ الْأَطْفَالِ» طِفْلاً',
          en: 'Allah willed that Pharaoh -- "the enemy of children" -- would himself raise a child',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want, will; and willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يُرَبِّيَ', lemma: 'رَبَّى', pos: 'verb', features: 'impf.3ms', root: 'ر ب و', gloss: 'to raise; would raise' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'عَدُوُّ', lemma: 'عَدُوّ', pos: 'noun', features: 'constr.nom', gloss: 'the enemy of' },
            { surface: 'الْأَطْفَالِ', lemma: 'طِفْل', pos: 'noun', features: 'pl.def.gen', gloss: 'children' },
            { surface: 'طِفْلاً', lemma: 'طِفْل', pos: 'noun', features: 'indef.acc', gloss: 'a child' },
          ],
        },
        {
          id: 'qs-v6-c08-025b',
          ar: 'يَذْهَبُ مُلْكُهُ عَلَى يَدِهِ.',
          en: 'through whose hand his own kingdom would be lost.',
          tokens: [
            { surface: 'يَذْهَبُ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to go; would be lost' },
            { surface: 'مُلْكُهُ', lemma: 'مُلْك', pos: 'noun', features: 'nom+3ms', gloss: 'his kingdom' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'at, through' },
            { surface: 'يَدِهِ', lemma: 'يَد', pos: 'noun', features: 'gen+3ms', gloss: 'his hand' },
          ],
        },
        {
          id: 'qs-v6-c08-026a',
          ar: 'مِسْكِينٌ فِرْعَوْنُ!',
          en: 'Poor Pharaoh!',
          tokens: [
            { surface: 'مِسْكِينٌ', lemma: 'مِسْكِين', pos: 'adj', features: 'indef.nom', gloss: 'poor, wretched' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
          ],
        },
        {
          id: 'qs-v6-c08-026b',
          ar: 'لَقَدْ أَخْطَأَ فِي شَأْنِ مُوسَى.',
          en: 'He erred badly in Mūsā\'s case.',
          tokens: [
            { surface: 'لَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'part+part', gloss: 'indeed' },
            { surface: 'أَخْطَأَ', lemma: 'أَخْطَأَ', pos: 'verb', features: 'perf.3ms', gloss: 'to err, make a mistake; erred' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'شَأْنِ', lemma: 'شَأْن', pos: 'noun', features: 'constr.gen', gloss: 'the matter of' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
          ],
        },
        {
          id: 'qs-v6-c08-027',
          ar: 'وَقَدْ أَخْطَأَ مَعَهُ وَزِيرُهُ هَامَانُ وَجُنُودُهُ.',
          en: 'And with him erred his minister Hāmān and his soldiers.',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'أَخْطَأَ', lemma: 'أَخْطَأَ', pos: 'verb', features: 'perf.3ms', gloss: 'to err; erred' },
            { surface: 'مَعَهُ', lemma: 'مَعَ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
            { surface: 'وَزِيرُهُ', lemma: 'وَزِير', pos: 'noun', features: 'nom+3ms', gloss: 'his minister' },
            { surface: 'هَامَانُ', lemma: 'هَامَان', pos: 'proper', features: 'nom', gloss: 'Hāmān' },
            { surface: 'وَجُنُودُهُ', lemma: 'جُنْد', pos: 'noun', features: 'conj+pl.nom+3ms', gloss: 'and his soldiers' },
          ],
        },
        {
          id: 'qs-v6-c08-028a',
          ar: '﴿فَالْتَقَطَهُ آلُ فِرْعَوْنَ',
          en: '"So Pharaoh\'s household picked him up,',
          tokens: [
            { surface: 'فَالْتَقَطَهُ', lemma: 'اِلْتَقَطَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ل ق ط', gloss: 'to pick up, retrieve; so picked him up' },
            { surface: 'آلُ', lemma: 'آل', pos: 'noun', features: 'constr.nom', gloss: 'the household of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
          ],
        },
        {
          id: 'qs-v6-c08-028b',
          ar: 'لِيَكُونَ لَهُمْ عَدُوّاً وَحَزَناً',
          en: 'only for him to become an enemy and a grief to them --',
          tokens: [
            { surface: 'لِيَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'prep+impf.3ms', root: 'ك و ن', gloss: 'to be; for him to become' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'عَدُوّاً', lemma: 'عَدُوّ', pos: 'noun', features: 'indef.acc', gloss: 'an enemy' },
            { surface: 'وَحَزَناً', lemma: 'حُزْن', pos: 'noun', features: 'conj+indef.acc', gloss: 'and a grief' },
          ],
        },
        {
          id: 'qs-v6-c08-028c',
          ar: 'إِنَّ فِرْعَوْنَ وَهَامَانَ وَجُنُودَهُمَا كَانُوا خَاطِئِينَ﴾.',
          en: 'indeed Pharaoh, Hāmān, and their soldiers were sinners."',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'acc', gloss: 'Pharaoh' },
            { surface: 'وَهَامَانَ', lemma: 'هَامَان', pos: 'proper', features: 'conj+acc', gloss: 'and Hāmān' },
            { surface: 'وَجُنُودَهُمَا', lemma: 'جُنْد', pos: 'noun', features: 'conj+pl.acc+3md', gloss: 'and their two soldiers (armies)' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'خَاطِئِينَ', lemma: 'خَاطِئ', pos: 'adj', features: 'pl.acc', gloss: 'sinners' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا طَلَبَتِ الْمَلِكَةُ مِنَ الْمَلِكِ فِي شَأْنِ الْغُلَامِ؟',
          options: ['أَلَّا يَقْتُلُوهُ وَأَنْ يَتَّخِذُوهُ وَلَداً', 'أَنْ يُعِيدُوهُ إِلَى النِّيلِ', 'أَنْ يَبِيعُوهُ فِي السُّوقِ'],
          answer: 0,
          qEn: "What did the queen ask the king regarding the boy?",
          optionsEn: ['Not to kill him and to adopt him as a son', 'To return him to the Nile', 'To sell him in the market'],
        },
        {
          q: 'مَنْ أَخْطَأَ مَعَ فِرْعَوْنَ فِي شَأْنِ مُوسَى؟',
          options: ['وَزِيرُهُ هَامَانُ وَجُنُودُهُ', 'أُمُّ مُوسَى', 'الْمَلِكَةُ'],
          answer: 0,
          qEn: "Who erred alongside Pharaoh in Mūsā's case?",
          optionsEn: ['His minister Hāmān and his soldiers', "Mūsā's mother", 'The queen'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'كَانَ فِرْعَوْنُ لَهُ',
        post: 'كَثِيرَةٌ عَلَى شَاطِئِ النِّيلِ.',
        en: 'Pharaoh had many palaces along the bank of the Nile.',
        options: ['قُصُورٌ', 'قُصُوراً', 'قُصُورِ', 'قَصْرٌ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite plural -- subject of the possessive كَانَ لَهُ construction, matching the taught pattern.',
          'Accusative -- wrong case; nothing here governs the accusative.',
          'Genitive -- wrong case; this noun is the subject, not a construct/prepositional object.',
          'Singular -- wrong number; Pharaoh had many (كَثِيرَةٌ) palaces.',
        ],
      },
    ],
    shift: [],
  },
};

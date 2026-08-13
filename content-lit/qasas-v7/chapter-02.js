// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus; printed Arabic volume title not verified against a scan by this
// session -- left undescribed here rather than guessed), chapter 2 --
// ٢ - نَصِيحَةُ الرَّجُلِ ("The Man's Advice"). Starts at the
// heading box that appears partway down page 163 (placed here right after
// ch1's closing Qur'anic exhortation, at "وَعَلِمَ الرَّجُلُ الرَّشِيدُ..." --
// see chapter-01.js's header for the reasoning), continues through page
// 164, and ends on page 165 (no heading box until page 166's chapter 3).
// Transcribed by hand from the scan (vision OCR) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md. One correction applied
// against the scan: page 165's "إِبْرَاهِيمُ" is followed by a stylized
// "عليه السلام" glyph in the source, transcribed here as the standard
// honorific phrase "إِبْرَاهِيمُ عَلَيْهِ السَّلامُ" and tokenized following
// qasas-v10/chapter-06.js's precedent (يُونُسُ عَلَيْهِ السَّلَامُ): عَلَيْهِ as
// prep+3ms on lemma عَلَى, السَّلامُ as its own noun (def.nom, lemma سَلام).
//
// Continues ch1's extended quotation of the believing man's speech in
// Sūrat Ghāfir (40:39-45). Per the current task brief's explicit guidance
// (superseding the fragment-into-2-token-units workaround used in some
// earlier-authored volumes of this corpus, e.g. qasas-v11/ch3): every
// quotation is transcribed in full and tokenized normally, without
// artificial fragmentation. Long ayāt are automatically safe from the
// build stage's 3-9 token window; one short quotation (qs-v7-c02-014, 9
// tokens) carries a case-marked common noun and is left as ordinary prose
// per instruction rather than fragmented. Verse-end pause/number glyphs
// printed in the source are not transcribed, matching this corpus's
// established convention -- quotations here are drawn from Ghāfir 40:39,
// 41, 42, 43, 44, 45.
//
// `workshop.cloze`/`workshop.shift` are built only from the narrator's own
// connective prose (وَعَلِمَ / وَعَرَفَ + الرَّجُلُ (الرَّشِيدُ), and the "السَّكْرَانُ
// مَا يَسْمَعُ" pattern), never from a Qur'anic quotation, per instruction.
//
// Judgment calls / things flagged for a second pair of eyes:
//   -- سُكَارَى (qs-v7-c02-005, plural "drunk [people]") reuses the
//      already-taught adjective lemma سَكْرَان (qiraah-v2 ch66) as its
//      broken plural, matching the corpus's convention of tagging
//      irregular plurals under their singular lemma (e.g. qasas-v6
//      ch06's بَنِي under اِبْن). This is distinct from سَكْرَة ("a stupor",
//      pattern فَعْلَة), tagged new in ch1 and reused here (qs-v7-c02-001,
//      005) -- a different derivational pattern from the same root.
//   -- بَالَغَ (qs-v7-c02-013, form III "to persist, go to extremes") is
//      tagged new and kept distinct from the already-taught adjective
//      بَالِغ (qiraah-v2 ch62, "of age, reaching") -- same root, different
//      derivational pattern and sense, flagging the homograph rather than
//      silently reusing the adjective's lemma.
//   -- عَلَيْهِ صَلاةُ اللَّهِ وَسَلامُهُ (ch1, qs-v7-c01-031) vs. عَلَيْهِ السَّلامُ
//      here (qs-v7-c02-020): these are two different constructions in the
//      source (Nadwī's own elaborated phrasing vs. the fixed honorific
//      idiom after Ibrāhīm's name) and are tokenized differently on
//      purpose, not inconsistently.
//
// Shared lexicon check (grepped against the supplied lexicon.txt export):
// عَلِمَ (qasas-v1 ch5)، رَجُل، رَشِيد (qasas-v1 ch2)، أَنَّ (qasas-v1 ch2)،
// قَوْم (qasas-v1 ch3/8)، فِي، حَيَاة (qiraah-v2 ch51)، دُنْيَا (qasas-v2
// ch25)، فِرْعَوْن/مُوسَى (introduced qasas-v7 ch1, NOT re-listed here)،
// مُلْك (qasas-v2 ch11)، قُوَّة (qiraah-v2 ch46)، لَكِنَّ (qasas-v1 ch6/14)،
// هَذِهِ (bedrock, see ch1 header)، زَائِل (qiraah-v1 ch25)، عَرَفَ
// (qasas-v1 ch2)، مَنَعَ (qasas-v1 ch2)، اِتِّبَاع (qiraah-v2 ch39)، ذَلِكَ
// (bedrock, see ch1 header)، سَكْرَان (qiraah-v2 ch66)، سَمِعَ (qasas-v1
// ch2)، حَيْثُ (qiraah-v2 ch36)، لا، صَوْت (qasas-v3 ch13)، أَرَادَ
// (qasas-v1 ch5)، أَنْ، نَبَّهَ (qasas-v3 ch21)، مِنْ، غَفْلَة (qiraah-v1 ch26)،
// قَالَ، إِنَّمَا/أَنَّ، مَتَاع (qasas-v2 ch5)، إِنَّ، آخِرَة (qasas-v2 ch25)، هِيَ،
// دَار (qiraah-v1 ch24)، جَاهِل (qasas-v2 ch22)، دَعَا (qasas-v1 ch8)، إِلَى،
// كُفْر (qasas-v2 ch22)، شِرْك (qasas-v2 ch11)، دِين (qasas-v2 ch11)، أَب
// (qasas-v1 ch3)، إِذَا (qasas-v1 ch9)، رَجَعَ (qasas-v1 ch5)، لَمَّا
// (qasas-v1 ch7)، دَعْوَة (qasas-v3 ch18)، لَيْسَ (qasas-v1 ch12)، عِلْم
// (qasas-v2 ch1)، أَنَا، عَزِيز (qasas-v2 ch7)، كَفَرَ (qasas-v3 ch8)،
// أَشْرَكَ (qasas-v2 ch11)، اللَّه، بِ، أَيّ (qiraah-v2 ch38)، نَبِيّ
// (qasas-v1 ch8)، جَاءَ (bedrock, see ch1 header)، إِلَٰه (qasas-v1 ch5)،
// نَزَلَ (qasas-v1 ch12)، اسْم (qasas-v2 ch11)، سَمَّى (qasas-v2 ch11/qasas-v3
// ch6)، أَنْتُمْ (qasas-v2 ch11)، أَنزَلَ (qasas-v3 ch12)، سُلْطَان (qiraah-v2
// ch60)، هَؤُلَاءِ (qasas-v2 ch17)، رَسُول (qasas-v2 ch15)، إِبْرَاهِيم
// (qasas-v1 ch2)، يُوسُف (bedrock, see ch1 header)، هَذَا (bedrock, see ch1
// header)، سَلام (qasas-v1 ch6)، كُلّ (qasas-v1 ch10)، شَيْء (qiraah-v2
// ch38)، آيَة (qasas-v2 ch4)، مَكَان (qasas-v2 ch9)، يَئِسَ (qasas-v2 ch21ـ
// actually qasas-v3 ch17)، سَئِمَ (qiraah-v1 ch26)، تَرَكَ (qasas-v1 ch10)،
// أَمْر (qasas-v2 ch2)، بَصِير (qasas-v2 ch23)، عَبْد (qasas-v2 ch9)، غَضِبَ
// (qasas-v1 ch3/10)، آل (qasas-v2 ch1)، قَتَلَ (qasas-v1 ch10)، عَصَمَ
// (qasas-v3 ch20)، عَدُوّ (qasas-v1 ch9)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 21 new words (سَكْرَة، مَغْرُور، حُلْم، ظِلّ، شَعَرَ، قَرَار، طَفِقَ، تَعَالَى، بَالَغَ،
// نَجَاة، غَفَّار، كِتَاب، جَرَم، هِدَايَة، بَلَادَة، ذَكَرَ، فَوَّضَ، أَهْلَكَ، وَقَى، سَيِّئَة،
// مَكَرَ، حَاقَ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch2',
  title: { ar: 'نَصِيحَةُ الرَّجُلِ', en: "The Man's Advice" },
  newWords: [
    'سَكْرَة', 'مَغْرُور', 'حُلْم', 'ظِلّ', 'شَعَرَ', 'قَرَار', 'طَفِقَ', 'تَعَالَى',
    'بَالَغَ', 'نَجَاة', 'غَفَّار', 'كِتَاب', 'جَرَم', 'هِدَايَة', 'بَلَادَة', 'ذَكَرَ',
    'فَوَّضَ', 'أَهْلَكَ', 'وَقَى', 'سَيِّئَة', 'مَكَرَ', 'حَاقَ',
  ],
  lemmas: {
    'سَكْرَة': { gloss: 'stupor, intoxication' },
    'مَغْرُور': { gloss: 'deluded, deceived' },
    'حُلْم': { gloss: 'dream' },
    'ظِلّ': { gloss: 'shadow' },
    'شَعَرَ': { gloss: 'to feel, sense, perceive' },
    'قَرَار': { gloss: 'settledness, permanence, abode' },
    'طَفِقَ': { gloss: 'to set about (doing), begin' },
    'تَعَالَى': { gloss: 'to come! (imperative تَعَالَوْا)' },
    'بَالَغَ': { gloss: 'to go to extremes, persist, exaggerate' },
    'نَجَاة': { gloss: 'salvation, safety, deliverance' },
    'غَفَّار': { gloss: 'All-Forgiving' },
    'كِتَاب': { gloss: 'book, scripture' },
    'جَرَم': { gloss: '(no) doubt (idiom لَا جَرَمَ)' },
    'هِدَايَة': { gloss: 'guidance' },
    'بَلَادَة': { gloss: 'dullness, obtuseness' },
    'ذَكَرَ': { gloss: 'to remember, mention' },
    'فَوَّضَ': { gloss: 'to entrust, delegate, commit' },
    'أَهْلَكَ': { gloss: 'to destroy' },
    'وَقَى': { gloss: 'to protect, shield' },
    'سَيِّئَة': { gloss: 'evil deed, misfortune' },
    'مَكَرَ': { gloss: 'to scheme, plot' },
    'حَاقَ': { gloss: 'to befall, close in on, envelop' },
  },
  paragraphs: [
    {
      en: "The wise man knew that his people were in the stupor of worldly life, and that Pharaoh was deluded by his dominion and his power. But this life is a dream among dreams, and the world a fading shadow. The man understood what kept the people from following Mūsā -- that was because they were drunk with the intoxication of the world. And the drunk man neither hears nor perceives. That was because, being so, they did not hear the voice of Mūsā.",
      sentences: [
        {
          id: 'qs-v7-c02-001',
          ar: 'وَعَلِمَ الرَّجُلُ الرَّشِيدُ أَنَّ الْقَوْمَ فِي سَكْرَةٍ مِنَ الْحَيَاةِ الدُّنْيَا.',
          en: 'The wise man knew that his people were in the stupor of worldly life.',
          tokens: [
            { surface: 'وَعَلِمَ', lemma: 'عَلِمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ل م', gloss: 'to know; and knew' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
            { surface: 'الرَّشِيدُ', lemma: 'رَشِيد', pos: 'adj', features: 'def.nom', root: 'ر ش د', gloss: 'the wise' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْقَوْمَ', lemma: 'قَوْم', pos: 'noun', features: 'def.acc', root: 'ق و م', gloss: 'the people' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'سَكْرَةٍ', lemma: 'سَكْرَة', pos: 'noun', features: 'indef.gen', root: 'س ك ر', gloss: 'a stupor, intoxication' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْحَيَاةِ', lemma: 'حَيَاة', pos: 'noun', features: 'def.gen', root: 'ح ي ي', gloss: 'the life' },
            { surface: 'الدُّنْيَا', lemma: 'دُنْيَا', pos: 'adj', features: 'def.gen', root: 'د ن و', gloss: 'worldly, of this world' },
          ],
        },
        {
          id: 'qs-v7-c02-002',
          ar: 'وأَنَّ فِرْعَوْنَ مَغْرُورٌ بِمُلْكِهِ وَقُوَّتِهِ.',
          en: 'and that Pharaoh was deluded by his dominion and his power.',
          tokens: [
            { surface: 'وأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'acc', gloss: 'Pharaoh' },
            { surface: 'مَغْرُورٌ', lemma: 'مَغْرُور', pos: 'adj', features: 'indef.nom', root: 'غ ر ر', gloss: 'deluded' },
            { surface: 'بِمُلْكِهِ', lemma: 'مُلْك', pos: 'noun', features: 'prep+gen+3ms', root: 'م ل ك', gloss: 'by his dominion' },
            { surface: 'وَقُوَّتِهِ', lemma: 'قُوَّة', pos: 'noun', features: 'conj+gen+3ms', root: 'ق و ي', gloss: 'and his power' },
          ],
        },
        {
          id: 'qs-v7-c02-003',
          ar: 'وَلكِنَّ هَذِهِ الْحَيَاةَ حُلْمٌ مِنَ الأَحْلامِ وَأَنَّ الدُّنْيَا ظِلٌّ زَائِلٌ.',
          en: 'But this life is a dream among dreams, and the world a fading shadow.',
          tokens: [
            { surface: 'وَلكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْحَيَاةَ', lemma: 'حَيَاة', pos: 'noun', features: 'def.acc', root: 'ح ي ي', gloss: 'the life' },
            { surface: 'حُلْمٌ', lemma: 'حُلْم', pos: 'noun', features: 'indef.nom', root: 'ح ل م', gloss: 'a dream' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الأَحْلامِ', lemma: 'حُلْم', pos: 'noun', features: 'pl.def.gen', root: 'ح ل م', gloss: 'the dreams' },
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'الدُّنْيَا', lemma: 'دُنْيَا', pos: 'noun', features: 'def.nom', root: 'د ن و', gloss: 'the world' },
            { surface: 'ظِلٌّ', lemma: 'ظِلّ', pos: 'noun', features: 'indef.nom', root: 'ظ ل ل', gloss: 'a shadow' },
            { surface: 'زَائِلٌ', lemma: 'زَائِل', pos: 'adj', features: 'indef.nom', root: 'ز و ل', gloss: 'fading, vanishing' },
          ],
        },
        {
          id: 'qs-v7-c02-004',
          ar: 'وَعَرَفَ الرَّجُلُ مَا يَمْنَعُ الْقَوْمَ مِنِ اتِّبَاعِ مُوسَى،',
          en: 'The man understood what kept the people from following Mūsā --',
          tokens: [
            { surface: 'وَعَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ر ف', gloss: 'to know; and understood' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَمْنَعُ', lemma: 'مَنَعَ', pos: 'verb', features: 'impf.3ms', root: 'م ن ع', gloss: 'to prevent; keeps' },
            { surface: 'الْقَوْمَ', lemma: 'قَوْم', pos: 'noun', features: 'def.acc', root: 'ق و م', gloss: 'the people' },
            { surface: 'مِنِ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'اتِّبَاعِ', lemma: 'اِتِّبَاع', pos: 'noun', features: 'constr.gen', root: 'ت ب ع', gloss: 'the following of' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
          ],
        },
        {
          id: 'qs-v7-c02-005',
          ar: 'ذَلِكَ بِأَنَّهُمْ سُكَارَى بِسَكْرَةِ الدُّنْيَا.',
          en: 'that was because they were drunk with the intoxication of the world.',
          tokens: [
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'بِأَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+3mp', gloss: 'because they' },
            { surface: 'سُكَارَى', lemma: 'سَكْرَان', pos: 'adj', features: 'pl', root: 'س ك ر', gloss: 'drunk' },
            { surface: 'بِسَكْرَةِ', lemma: 'سَكْرَة', pos: 'noun', features: 'prep+constr.gen', root: 'س ك ر', gloss: 'with the intoxication of' },
            { surface: 'الدُّنْيَا', lemma: 'دُنْيَا', pos: 'noun', features: 'def.gen', root: 'د ن و', gloss: 'the world' },
          ],
        },
        {
          id: 'qs-v7-c02-006',
          ar: 'وَالسَّكْرَانُ مَا يَسْمَعُ وَمَا يَشْعُرُ.',
          en: 'And the drunk man neither hears nor perceives.',
          tokens: [
            { surface: 'وَالسَّكْرَانُ', lemma: 'سَكْرَان', pos: 'noun', features: 'conj+def.nom', root: 'س ك ر', gloss: 'and the drunk one' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْمَعُ', lemma: 'سَمِعَ', pos: 'verb', features: 'impf.3ms', root: 'س م ع', gloss: 'to hear' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَشْعُرُ', lemma: 'شَعَرَ', pos: 'verb', features: 'impf.3ms', root: 'ش ع ر', gloss: 'to feel, perceive' },
          ],
        },
        {
          id: 'qs-v7-c02-007',
          ar: 'ذَلِكَ بِأَنَّهُمْ حَيْثُ لا يَسْمَعُونَ صَوْتَ مُوسَى.',
          en: 'That was because, being so, they did not hear the voice of Mūsā.',
          tokens: [
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'بِأَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+3mp', gloss: 'because they' },
            { surface: 'حَيْثُ', lemma: 'حَيْثُ', pos: 'adv', features: 'adv', gloss: 'being as they were, since' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْمَعُونَ', lemma: 'سَمِعَ', pos: 'verb', features: 'impf.3mp', root: 'س م ع', gloss: 'to hear' },
            { surface: 'صَوْتَ', lemma: 'صَوْت', pos: 'noun', features: 'acc.constr', root: 'ص و ت', gloss: 'the voice of' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا لَمْ يَتَّبِعِ الْقَوْمُ مُوسَى حَسَبَ فَهْمِ الرَّجُلِ الرَّشِيدِ؟',
          options: ['لِأَنَّهُمْ سُكَارَى بِسَكْرَةِ الدُّنْيَا فَلَا يَسْمَعُونَ وَلَا يَشْعُرُونَ', 'لِأَنَّهُمْ لَمْ يَرَوْا مُعْجِزَاتِهِ', 'لِأَنَّ مُوسَى لَمْ يَتَكَلَّمْ مَعَهُمْ'],
          answer: 0,
          qEn: "Why, in the wise man's understanding, did the people not follow Mūsā?",
          optionsEn: ['Because they were drunk with the intoxication of the world, so they neither heard nor perceived', 'Because they had not seen his miracles', 'Because Mūsā never spoke to them'],
        },
        {
          q: 'كَيْفَ وَصَفَ الرَّجُلُ الرَّشِيدُ الْحَيَاةَ الدُّنْيَا؟',
          options: ['حُلْمٌ مِنَ الْأَحْلَامِ وَظِلٌّ زَائِلٌ', 'نِعْمَةٌ دَائِمَةٌ لَا تَزُولُ', 'أَفْضَلُ مِنَ الْآخِرَةِ'],
          answer: 0,
          qEn: 'How did the wise man describe worldly life?',
          optionsEn: ['A dream among dreams, and a fading shadow', 'A permanent blessing that never ends', 'Better than the Hereafter'],
        },
      ],
    },
    {
      en: "So he wanted to rouse them from their heedlessness, and said: [Qur'an: O my people, this worldly life is only [passing] enjoyment, and indeed the Hereafter -- that is the home of permanence.] The ignorant among his people set about calling him to disbelief and idolatry, and calling him to the religion of the forefathers. Whenever he said to them, 'Come to Allah!', they would say to him, 'Return to the religion of the forefathers!' And when they persisted in that call, he said to them: [Qur'an: O my people, how is it that I call you to salvation, while you call me to the Fire? You call me to disbelieve in Allah and associate with Him what I have no knowledge of, while I call you to the Almighty, the All-Forgiving.] And the wise man said to them: 'Which prophet ever came from your gods?'",
      sentences: [
        {
          id: 'qs-v7-c02-008',
          ar: 'فَأَرَادَ أَنْ يُنَبِّهَهُمْ مِنْ غَفْلَتِهِمْ فَقَالَ:',
          en: 'So he wanted to rouse them from their heedlessness, and said:',
          tokens: [
            { surface: 'فَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want; so wanted' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُنَبِّهَهُمْ', lemma: 'نَبَّهَ', pos: 'verb', features: 'impf.3ms+3mp', root: 'ن ب ه', gloss: 'to rouse, alert; rouse them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'غَفْلَتِهِمْ', lemma: 'غَفْلَة', pos: 'noun', features: 'gen+3mp', root: 'غ ف ل', gloss: 'their heedlessness' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'so he said' },
          ],
        },
        {
          // Ghāfir 40:39.
          id: 'qs-v7-c02-009',
          ar: '﴿يَٰقَوْمِ إِنَّمَا هَٰذِهِ ٱلْحَيَوٰةُ ٱلدُّنْيَا مَتَٰعٌ وَإِنَّ ٱلْأَخِرَةَ هِىَ دَارُ ٱلْقَرَارِ﴾.',
          en: '"O my people, this worldly life is only [passing] enjoyment, and indeed the Hereafter -- that is the home of permanence."',
          tokens: [
            { surface: 'يَٰقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'part+gen+1s', root: 'ق و م', gloss: 'O my people' },
            { surface: 'إِنَّمَا', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'only, indeed just' },
            { surface: 'هَٰذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'ٱلْحَيَوٰةُ', lemma: 'حَيَاة', pos: 'noun', features: 'def.nom', root: 'ح ي ي', gloss: 'the life' },
            { surface: 'ٱلدُّنْيَا', lemma: 'دُنْيَا', pos: 'adj', features: 'def.nom', root: 'د ن و', gloss: 'worldly' },
            { surface: 'مَتَٰعٌ', lemma: 'مَتَاع', pos: 'noun', features: 'indef.nom', root: 'م ت ع', gloss: 'enjoyment, provision' },
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'ٱلْأَخِرَةَ', lemma: 'آخِرَة', pos: 'noun', features: 'def.acc', root: 'ا خ ر', gloss: 'the Hereafter' },
            { surface: 'هِىَ', lemma: 'هِيَ', pos: 'noun', features: '3fs', gloss: 'she, it' },
            { surface: 'دَارُ', lemma: 'دَار', pos: 'noun', features: 'nom.constr', root: 'د و ر', gloss: 'the home of' },
            { surface: 'ٱلْقَرَارِ', lemma: 'قَرَار', pos: 'noun', features: 'def.gen', root: 'ق ر ر', gloss: 'permanence' },
          ],
        },
        {
          id: 'qs-v7-c02-010',
          ar: 'وَطَفِقَ الْجُهَّالُ مِنْ قَوْمِهِ يَدْعُونَهُ إِلَى الْكُفْرِ وَالشِّرْكِ',
          en: 'The ignorant among his people set about calling him to disbelief and idolatry,',
          tokens: [
            { surface: 'وَطَفِقَ', lemma: 'طَفِقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ط ف ق', gloss: 'to set about, begin; and set about' },
            { surface: 'الْجُهَّالُ', lemma: 'جَاهِل', pos: 'noun', features: 'pl.def.nom', root: 'ج ه ل', gloss: 'the ignorant ones' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', root: 'ق و م', gloss: 'his people' },
            { surface: 'يَدْعُونَهُ', lemma: 'دَعَا', pos: 'verb', features: 'impf.3mp+3ms', root: 'د ع و', gloss: 'to call; calling him' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْكُفْرِ', lemma: 'كُفْر', pos: 'noun', features: 'def.gen', root: 'ك ف ر', gloss: 'disbelief' },
            { surface: 'وَالشِّرْكِ', lemma: 'شِرْك', pos: 'noun', features: 'conj+def.gen', root: 'ش ر ك', gloss: 'and idolatry' },
          ],
        },
        {
          id: 'qs-v7-c02-011',
          ar: 'وَيَدْعُونَهُ إِلَى دِينِ الآبَاءِ.',
          en: 'and calling him to the religion of the forefathers.',
          tokens: [
            { surface: 'وَيَدْعُونَهُ', lemma: 'دَعَا', pos: 'verb', features: 'conj+impf.3mp+3ms', root: 'د ع و', gloss: 'and calling him' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'دِينِ', lemma: 'دِين', pos: 'noun', features: 'constr.gen', root: 'د ي ن', gloss: 'the religion of' },
            { surface: 'الآبَاءِ', lemma: 'أَب', pos: 'noun', features: 'pl.def.gen', root: 'ا ب و', gloss: 'the forefathers' },
          ],
        },
        {
          id: 'qs-v7-c02-012',
          ar: 'فَإِذَا قَالَ لَهُمْ تَعَالُوْا إِلَى اللَّهِ! قَالُوا لَهُ ارْجِعْ إِلَى دِينِ الآبَاءِ!',
          en: "Whenever he said to them, 'Come to Allah!', they would say to him, 'Return to the religion of the forefathers!'",
          tokens: [
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'whenever' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'تَعَالُوْا', lemma: 'تَعَالَى', pos: 'verb', features: 'imp.2mp', root: 'ع ل و', gloss: 'to come!; come!' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; they said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'ارْجِعْ', lemma: 'رَجَعَ', pos: 'verb', features: 'imp.2ms', root: 'ر ج ع', gloss: 'to return; return!' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'دِينِ', lemma: 'دِين', pos: 'noun', features: 'constr.gen', root: 'د ي ن', gloss: 'the religion of' },
            { surface: 'الآبَاءِ', lemma: 'أَب', pos: 'noun', features: 'pl.def.gen', root: 'ا ب و', gloss: 'the forefathers' },
          ],
        },
        {
          id: 'qs-v7-c02-013',
          ar: 'وَلَمَّا بَالَغُوا فِي الدَّعْوَةِ قَالَ لَهُمْ:',
          en: 'And when they persisted in that call, he said to them:',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'بَالَغُوا', lemma: 'بَالَغَ', pos: 'verb', features: 'perf.3mp', root: 'ب ل غ', gloss: 'to persist, go to extremes' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الدَّعْوَةِ', lemma: 'دَعْوَة', pos: 'noun', features: 'def.gen', root: 'د ع و', gloss: 'the call' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          // Ghāfir 40:41.
          id: 'qs-v7-c02-014',
          ar: '﴿وَيَٰقَوْمِ مَا لِىٓ أَدْعُوكُمْ إِلَى ٱلنَّجَوٰةِ وَتَدْعُونَنِىٓ إِلَى ٱلنَّارِ﴾.',
          en: '"O my people, how is it that I call you to salvation, while you call me to the Fire?"',
          tokens: [
            { surface: 'وَيَٰقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'conj+part+gen+1s', root: 'ق و م', gloss: 'and O my people' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لِىٓ', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: '[is it] with me' },
            { surface: 'أَدْعُوكُمْ', lemma: 'دَعَا', pos: 'verb', features: 'impf.1s+2mp', root: 'د ع و', gloss: 'to call; I call you' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ٱلنَّجَوٰةِ', lemma: 'نَجَاة', pos: 'noun', features: 'def.gen', root: 'ن ج و', gloss: 'salvation' },
            { surface: 'وَتَدْعُونَنِىٓ', lemma: 'دَعَا', pos: 'verb', features: 'conj+impf.2mp+1s', root: 'د ع و', gloss: 'and you call me' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ٱلنَّارِ', lemma: 'نَار', pos: 'noun', features: 'def.gen', root: 'ن و ر', gloss: 'the Fire' },
          ],
        },
        {
          // Ghāfir 40:42.
          id: 'qs-v7-c02-015',
          ar: '﴿تَدْعُونَنِى لِأَكْفُرَ بِٱللَّهِ وَأُشْرِكَ بِهِۦ مَا لَيْسَ لِى بِهِۦ عِلْمٌ وَأَنَا۠ أَدْعُوكُمْ إِلَى ٱلْعَزِيزِ ٱلْغَفَّٰرِ﴾.',
          en: '"You call me to disbelieve in Allah and associate with Him what I have no knowledge of, while I call you to the Almighty, the All-Forgiving."',
          tokens: [
            { surface: 'تَدْعُونَنِى', lemma: 'دَعَا', pos: 'verb', features: 'impf.2mp+1s', root: 'د ع و', gloss: 'to call; you call me' },
            { surface: 'لِأَكْفُرَ', lemma: 'كَفَرَ', pos: 'verb', features: 'prep+impf.1s', root: 'ك ف ر', gloss: 'to disbelieve; that I disbelieve' },
            { surface: 'بِٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
            { surface: 'وَأُشْرِكَ', lemma: 'أَشْرَكَ', pos: 'verb', features: 'conj+impf.1s', root: 'ش ر ك', gloss: 'to associate; and I associate' },
            { surface: 'بِهِۦ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with Him' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', root: 'ل ي س', gloss: 'to not be; is not' },
            { surface: 'لِى', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'for me' },
            { surface: 'بِهِۦ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'of it' },
            { surface: 'عِلْمٌ', lemma: 'عِلْم', pos: 'noun', features: 'indef.nom', root: 'ع ل م', gloss: 'knowledge' },
            { surface: 'وَأَنَا۠', lemma: 'أَنَا', pos: 'noun', features: 'conj+1s', gloss: 'while I' },
            { surface: 'أَدْعُوكُمْ', lemma: 'دَعَا', pos: 'verb', features: 'impf.1s+2mp', root: 'د ع و', gloss: 'to call; I call you' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ٱلْعَزِيزِ', lemma: 'عَزِيز', pos: 'adj', features: 'def.gen', root: 'ع ز ز', gloss: 'the Almighty' },
            { surface: 'ٱلْغَفَّٰرِ', lemma: 'غَفَّار', pos: 'adj', features: 'def.gen', root: 'غ ف ر', gloss: 'the All-Forgiving' },
          ],
        },
        {
          id: 'qs-v7-c02-016',
          ar: 'وَقَالَ لَهُمُ الرَّجُلُ الرَّشِيدُ:',
          en: 'And the wise man said to them:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'لَهُمُ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
            { surface: 'الرَّشِيدُ', lemma: 'رَشِيد', pos: 'adj', features: 'def.nom', root: 'ر ش د', gloss: 'the wise' },
          ],
        },
        {
          id: 'qs-v7-c02-017',
          ar: 'أَيُّ نَبِيٍّ جَاءَ مِنْ آلِهَتِكُمْ؟',
          en: 'Which prophet ever came from your gods?',
          tokens: [
            { surface: 'أَيُّ', lemma: 'أَيّ', pos: 'noun', features: 'nom.constr', root: 'ا ي ي', gloss: 'which' },
            { surface: 'نَبِيٍّ', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.gen', root: 'ن ب أ', gloss: 'prophet' },
            { surface: 'جَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms', root: 'ج ي أ', gloss: 'to come; came' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'آلِهَتِكُمْ', lemma: 'إِلَٰه', pos: 'noun', features: 'pl.gen+2mp', root: 'ا ل ه', gloss: 'your gods' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ الرَّجُلُ الرَّشِيدُ عَنِ الدُّنْيَا فِي الآيَةِ الْقُرْآنِيَّةِ؟',
          options: ['هَذِهِ الْحَيَاةُ الدُّنْيَا مَتَاعٌ وَإِنَّ الآخِرَةَ هِيَ دَارُ الْقَرَارِ', 'الدُّنْيَا خَيْرٌ مِنَ الآخِرَةِ', 'لَا فَرْقَ بَيْنَ الدُّنْيَا وَالآخِرَةِ'],
          answer: 0,
          qEn: 'What did the wise man say about this world, quoting the Qurʾān?',
          optionsEn: ['This worldly life is [only] enjoyment, and indeed the Hereafter is the home of permanence', 'This world is better than the Hereafter', 'There is no difference between this world and the Hereafter'],
        },
        {
          q: 'بِمَاذَا كَانَ الْجُهَّالُ يَدْعُونَ الرَّجُلَ الرَّشِيدَ؟',
          options: ['إِلَى الْكُفْرِ وَالشِّرْكِ وَدِينِ الآبَاءِ', 'إِلَى اتِّبَاعِ مُوسَى', 'إِلَى تَرْكِ فِرْعَوْنَ'],
          answer: 0,
          qEn: 'What did the ignorant among his people call the wise man to?',
          optionsEn: ['To disbelief, idolatry, and the religion of their forefathers', 'To follow Mūsā', 'To abandon Pharaoh'],
        },
      ],
    },
    {
      en: "'And what book ever came down, and who called to it?' [Qur'an: They are nothing but names you and your fathers have named, for which Allah has sent down no authority.] These are the messengers of Allah -- they called to Allah: that was Ibrāhīm, peace be upon him, and Yūsuf, and this is the prophet of Allah, Mūsā. In everything there is a sign of Him! And in every place there is a call to Him. [Qur'an: No doubt, that to which you call me has no call [worth answering], in this world or in the Hereafter.] And when the man despaired of guiding them, and grew weary of their dullness, he left them and said to them: [Qur'an: You will remember what I say to you, and I entrust my affair to Allah; indeed Allah is All-Seeing of [His] servants.] The people grew angry, and Pharaoh's household wanted to kill him, but Allah protected him and destroyed his enemies. [Qur'an: So Allah protected him from the evils of what they plotted, and the worst of punishment enveloped Pharaoh's household.]",
      sentences: [
        {
          id: 'qs-v7-c02-018',
          ar: 'وَأَيُّ كِتَابٍ نَزَلَ؟',
          en: 'And what book ever came down?',
          tokens: [
            { surface: 'وَأَيُّ', lemma: 'أَيّ', pos: 'noun', features: 'conj+nom.constr', root: 'ا ي ي', gloss: 'and which' },
            { surface: 'كِتَابٍ', lemma: 'كِتَاب', pos: 'noun', features: 'indef.gen', root: 'ك ت ب', gloss: 'book' },
            { surface: 'نَزَلَ', lemma: 'نَزَلَ', pos: 'verb', features: 'perf.3ms', root: 'ن ز ل', gloss: 'to descend; came down' },
          ],
        },
        {
          id: 'qs-v7-c02-019',
          ar: 'وَمَنْ دَعَا إِلَيْهِ؟',
          en: 'And who called to it?',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and who' },
            { surface: 'دَعَا', lemma: 'دَعَا', pos: 'verb', features: 'perf.3ms', root: 'د ع و', gloss: 'to call; called' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to it' },
          ],
        },
        {
          // Ghāfir 40:...
          id: 'qs-v7-c02-020',
          ar: '﴿إِنْ هِىَ إِلَّآ أَسْمَآءٌ سَمَّيْتُمُوهَآ أَنتُمْ وَءَابَآؤُكُم مَّآ أَنزَلَ ٱللَّهُ بِهَا مِن سُلْطَٰنٍ﴾.',
          en: '"They are nothing but names you and your fathers have named, for which Allah has sent down no authority."',
          tokens: [
            { surface: 'إِنْ', lemma: 'إِنْ', pos: 'neg', features: 'neg', gloss: 'not' },
            { surface: 'هِىَ', lemma: 'هِيَ', pos: 'noun', features: '3fs', gloss: 'they (fs)' },
            { surface: 'إِلَّآ', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, but' },
            { surface: 'أَسْمَآءٌ', lemma: 'اسْم', pos: 'noun', features: 'pl.indef.nom', root: 'س م و', gloss: 'names' },
            { surface: 'سَمَّيْتُمُوهَآ', lemma: 'سَمَّى', pos: 'verb', features: 'perf.2mp+3fs', root: 'س م و', gloss: 'to name; you named them' },
            { surface: 'أَنتُمْ', lemma: 'أَنْتُمْ', pos: 'noun', features: '2mp', gloss: 'you' },
            { surface: 'وَءَابَآؤُكُم', lemma: 'أَب', pos: 'noun', features: 'conj+pl.nom+2mp', root: 'ا ب و', gloss: 'and your fathers' },
            { surface: 'مَّآ', lemma: 'مَا', pos: 'neg', features: 'neg', gloss: 'not' },
            { surface: 'أَنزَلَ', lemma: 'أَنزَلَ', pos: 'verb', features: 'perf.3ms', root: 'ن ز ل', gloss: 'to send down; sent down' },
            { surface: 'ٱللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'for them' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'any' },
            { surface: 'سُلْطَٰنٍ', lemma: 'سُلْطَان', pos: 'noun', features: 'indef.gen', root: 'س ل ط', gloss: 'authority' },
          ],
        },
        {
          id: 'qs-v7-c02-021',
          ar: 'وَهَؤُلاءِ رُسُلُ اللَّهِ دَعَوْا إِلَى اللَّهِ،',
          en: 'These are the messengers of Allah -- they called to Allah,',
          tokens: [
            { surface: 'وَهَؤُلاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'conj+dem.pl', gloss: 'and these' },
            { surface: 'رُسُلُ', lemma: 'رَسُول', pos: 'noun', features: 'pl.nom.constr', root: 'ر س ل', gloss: 'the messengers of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'دَعَوْا', lemma: 'دَعَا', pos: 'verb', features: 'perf.3mp', root: 'د ع و', gloss: 'to call; they called' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c02-022',
          ar: 'ذَلِكَ إِبْرَاهِيمُ عَلَيْهِ السَّلامُ وَيُوسُفُ وَهَذَا نَبِيُّ اللَّهِ مُوسَى.',
          en: 'That was Ibrāhīm, peace be upon him, and Yūsuf, and this is the prophet of Allah, Mūsā.',
          tokens: [
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
            { surface: 'السَّلامُ', lemma: 'سَلام', pos: 'noun', features: 'def.nom', root: 'س ل م', gloss: 'peace' },
            { surface: 'وَيُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'conj+nom', gloss: 'and Yūsuf' },
            { surface: 'وَهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'conj+dem.m', gloss: 'and this' },
            { surface: 'نَبِيُّ', lemma: 'نَبِيّ', pos: 'noun', features: 'nom.constr', root: 'ن ب أ', gloss: 'the prophet of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
          ],
        },
        {
          id: 'qs-v7-c02-023',
          ar: 'وَفِي كُلِّ شَيْءٍ لَهُ آيَةٌ!',
          en: 'In everything there is a sign of Him!',
          tokens: [
            { surface: 'وَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', root: 'ك ل ل', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', root: 'ش ي أ', gloss: 'thing' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for/of Him' },
            { surface: 'آيَةٌ', lemma: 'آيَة', pos: 'noun', features: 'indef.nom', root: 'ا ي ي', gloss: 'a sign' },
          ],
        },
        {
          id: 'qs-v7-c02-024',
          ar: 'وَفِي كُلِّ مَكَانٍ لَهُ دَعْوَةٌ.',
          en: 'And in every place there is a call to Him.',
          tokens: [
            { surface: 'وَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', root: 'ك ل ل', gloss: 'every' },
            { surface: 'مَكَانٍ', lemma: 'مَكَان', pos: 'noun', features: 'indef.gen', root: 'ك و ن', gloss: 'place' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for/of Him' },
            { surface: 'دَعْوَةٌ', lemma: 'دَعْوَة', pos: 'noun', features: 'indef.nom', root: 'د ع و', gloss: 'a call' },
          ],
        },
        {
          // Ghāfir 40:43b.
          id: 'qs-v7-c02-025',
          ar: '﴿لَا جَرَمَ أَنَّمَا تَدْعُونَنِىٓ إِلَيْهِ لَيْسَ لَهُۥ دَعْوَةٌ فِى ٱلدُّنْيَا وَلَا فِى ٱلْأَخِرَةِ﴾.',
          en: '"No doubt, that to which you call me has no call [worth answering], in this world or in the Hereafter."',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'neg', features: 'neg', gloss: 'no' },
            { surface: 'جَرَمَ', lemma: 'جَرَم', pos: 'noun', features: 'acc', root: 'ج ر م', gloss: 'doubt (idiom: no doubt)' },
            { surface: 'أَنَّمَا', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that which, indeed that' },
            { surface: 'تَدْعُونَنِىٓ', lemma: 'دَعَا', pos: 'verb', features: 'impf.2mp+1s', root: 'د ع و', gloss: 'to call; you call me' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to it' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', root: 'ل ي س', gloss: 'to not be; has not' },
            { surface: 'لَهُۥ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for it' },
            { surface: 'دَعْوَةٌ', lemma: 'دَعْوَة', pos: 'noun', features: 'indef.nom', root: 'د ع و', gloss: 'a call' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ٱلدُّنْيَا', lemma: 'دُنْيَا', pos: 'noun', features: 'def.gen', root: 'د ن و', gloss: 'this world' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ٱلْأَخِرَةِ', lemma: 'آخِرَة', pos: 'noun', features: 'def.gen', root: 'ا خ ر', gloss: 'the Hereafter' },
          ],
        },
        {
          id: 'qs-v7-c02-026',
          ar: 'وَلَمَّا يَئِسَ الرَّجُلُ مِنْ هِدَايَتِهِمْ وَسَئِمَ الرَّجُلُ مِنْ بَلادَتِهِمْ تَرَكَهُمْ وَقَالَ لَهُمْ:',
          en: 'And when the man despaired of guiding them, and grew weary of their dullness, he left them and said to them:',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'يَئِسَ', lemma: 'يَئِسَ', pos: 'verb', features: 'perf.3ms', root: 'ي أ س', gloss: 'to despair; despaired' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'هِدَايَتِهِمْ', lemma: 'هِدَايَة', pos: 'noun', features: 'gen+3mp', root: 'ه د ي', gloss: 'guiding them' },
            { surface: 'وَسَئِمَ', lemma: 'سَئِمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س أ م', gloss: 'to grow weary; and grew weary' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'بَلادَتِهِمْ', lemma: 'بَلَادَة', pos: 'noun', features: 'gen+3mp', root: 'ب ل د', gloss: 'their dullness' },
            { surface: 'تَرَكَهُمْ', lemma: 'تَرَكَ', pos: 'verb', features: 'perf.3ms+3mp', root: 'ت ر ك', gloss: 'to leave; left them' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          // Ghāfir 40:44.
          id: 'qs-v7-c02-027',
          ar: '﴿فَسَتَذْكُرُونَ مَآ أَقُولُ لَكُمْ وَأُفَوِّضُ أَمْرِىٓ إِلَى ٱللَّهِ إِنَّ ٱللَّهَ بَصِيرٌۢ بِٱلْعِبَادِ﴾.',
          en: '"You will remember what I say to you, and I entrust my affair to Allah; indeed Allah is All-Seeing of [His] servants."',
          tokens: [
            { surface: 'فَسَتَذْكُرُونَ', lemma: 'ذَكَرَ', pos: 'verb', features: 'conj+impf.2mp', root: 'ذ ك ر', gloss: 'to remember; so you will remember' },
            { surface: 'مَآ', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'أَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.1s', root: 'ق و ل', gloss: 'to say; I say' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
            { surface: 'وَأُفَوِّضُ', lemma: 'فَوَّضَ', pos: 'verb', features: 'conj+impf.1s', root: 'ف و ض', gloss: 'to entrust; and I entrust' },
            { surface: 'أَمْرِىٓ', lemma: 'أَمْر', pos: 'noun', features: 'acc+1s', root: 'ا م ر', gloss: 'my affair' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ٱللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'بَصِيرٌۢ', lemma: 'بَصِير', pos: 'adj', features: 'indef.nom', root: 'ب ص ر', gloss: 'All-Seeing' },
            { surface: 'بِٱلْعِبَادِ', lemma: 'عَبْد', pos: 'noun', features: 'prep+pl.def.gen', root: 'ع ب د', gloss: 'of the servants' },
          ],
        },
        {
          id: 'qs-v7-c02-028',
          ar: 'وَغَضِبَ النَّاسُ وَأَرَادَ آلُ فِرْعَوْنَ أَنْ يَقْتُلُوهُ',
          en: "The people grew angry, and Pharaoh's household wanted to kill him,",
          tokens: [
            { surface: 'وَغَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'غ ض ب', gloss: 'to become angry; and grew angry' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'and wanted' },
            { surface: 'آلُ', lemma: 'آل', pos: 'noun', features: 'nom.constr', root: 'ا و ل', gloss: 'the household of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَقْتُلُوهُ', lemma: 'قَتَلَ', pos: 'verb', features: 'impf.3mp+3ms', root: 'ق ت ل', gloss: 'to kill; kill him' },
          ],
        },
        {
          id: 'qs-v7-c02-029',
          ar: 'وَلَكِنَّ اللَّهَ عَصَمَهُ وَأَهْلَكَ أَعْدَاءَهُ.',
          en: 'but Allah protected him and destroyed his enemies.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'عَصَمَهُ', lemma: 'عَصَمَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'ع ص م', gloss: 'to protect; protected him' },
            { surface: 'وَأَهْلَكَ', lemma: 'أَهْلَكَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ه ل ك', gloss: 'to destroy; and destroyed' },
            { surface: 'أَعْدَاءَهُ', lemma: 'عَدُوّ', pos: 'noun', features: 'pl.acc+3ms', root: 'ع د و', gloss: 'his enemies' },
          ],
        },
        {
          // Ghāfir 40:45.
          id: 'qs-v7-c02-030',
          ar: '﴿فَوَقَىٰهُ ٱللَّهُ سَيِّـَٔاتِ مَا مَكَرُوا۟ وَحَاقَ بِـَٔالِ فِرْعَوْنَ سُوٓءُ ٱلْعَذَابِ﴾.',
          en: "\"So Allah protected him from the evils of what they plotted, and the worst of punishment enveloped Pharaoh's household.\"",
          tokens: [
            { surface: 'فَوَقَىٰهُ', lemma: 'وَقَى', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'و ق ي', gloss: 'to protect; so protected him' },
            { surface: 'ٱللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'سَيِّـَٔاتِ', lemma: 'سَيِّئَة', pos: 'noun', features: 'pl.acc.constr', root: 'س و أ', gloss: 'the evils of' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'مَكَرُوا۟', lemma: 'مَكَرَ', pos: 'verb', features: 'perf.3mp', root: 'م ك ر', gloss: 'to scheme, plot; they plotted' },
            { surface: 'وَحَاقَ', lemma: 'حَاقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ح ي ق', gloss: 'to befall, envelop; and enveloped' },
            { surface: 'بِـَٔالِ', lemma: 'آل', pos: 'noun', features: 'prep+constr.gen', root: 'ا و ل', gloss: 'the household of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'سُوٓءُ', lemma: 'سُوء', pos: 'noun', features: 'nom.constr', root: 'س و أ', gloss: 'the worst of' },
            { surface: 'ٱلْعَذَابِ', lemma: 'عَذَاب', pos: 'noun', features: 'def.gen', root: 'ع ذ ب', gloss: 'the punishment' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنِ الرُّسُلُ الَّذِينَ ذَكَرَهُمُ الرَّجُلُ الرَّشِيدُ أَمْثِلَةً عَلَى مَنْ دَعَا إِلَى اللَّهِ؟',
          options: ['إِبْرَاهِيمُ وَيُوسُفُ وَمُوسَى', 'نُوحٌ وَهُودٌ وَصَالِحٌ', 'دَاوُدُ وَسُلَيْمَانُ'],
          answer: 0,
          qEn: 'Which messengers did the wise man cite as examples of those who called to Allah?',
          optionsEn: ['Ibrāhīm, Yūsuf, and Mūsā', 'Nūḥ, Hūd, and Ṣāliḥ', 'Dāwūd and Sulaymān'],
        },
        {
          q: 'مَاذَا حَدَثَ لِلرَّجُلِ الرَّشِيدِ فِي النِّهَايَةِ؟',
          options: ['أَرَادَ آلُ فِرْعَوْنَ قَتْلَهُ وَلَكِنَّ اللَّهَ عَصَمَهُ وَأَهْلَكَ أَعْدَاءَهُ', 'قَتَلَهُ فِرْعَوْنُ فِعْلاً', 'آمَنَ فِرْعَوْنُ بِسَبَبِهِ'],
          answer: 0,
          qEn: 'What happened to the wise man in the end?',
          optionsEn: ["Pharaoh's household wanted to kill him, but Allah protected him and destroyed his enemies", 'Pharaoh actually killed him', 'Pharaoh believed because of him'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: 'الرَّجُلُ الرَّشِيدُ أَنَّ الْقَوْمَ فِي سَكْرَةٍ مِنَ الْحَيَاةِ الدُّنْيَا.',
        en: 'The wise man knew that his people were in the stupor of worldly life.',
        options: ['وَعَلِمَ', 'وَعَلِمَتْ', 'وَعَلِمُوا', 'يَعْلَمُ'],
        answer: 0,
        rationales: [
          '3rd masc. sing. perfect -- matches "the man" (singular).',
          '3rd fem. sing. -- wrong gender.',
          '3rd masc. plural -- wrong; the subject is singular.',
          'Imperfect -- wrong tense; the story is past narration.',
        ],
      },
      {
        type: 'cloze',
        pre: '',
        post: 'الرَّجُلُ مَا يَمْنَعُ الْقَوْمَ مِنِ اتِّبَاعِ مُوسَى.',
        en: 'The man understood what kept the people from following Mūsā.',
        options: ['وَعَرَفَ', 'وَعَرَفَتْ', 'وَعَرَفُوا', 'يَعْرِفُ'],
        answer: 0,
        rationales: [
          '3rd masc. sing. perfect -- matches "the man" (singular).',
          '3rd fem. sing. -- wrong gender.',
          '3rd masc. plural -- wrong; the subject is singular.',
          'Imperfect -- wrong tense; the story is past narration.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَالسَّكْرَانُ مَا',
        post: 'وَمَا يَشْعُرُ.',
        en: 'And the drunk man neither hears nor perceives.',
        options: ['يَسْمَعُ', 'تَسْمَعُ', 'يَسْمَعُونَ', 'سَمِعَ'],
        answer: 0,
        rationales: [
          '3rd masc. sing. imperfect -- matches السَّكْرَانُ (singular).',
          '2nd masc. / 3rd fem. sing. -- wrong gender.',
          '3rd masc. plural -- wrong number.',
          'Perfect -- wrong tense; the context is general, not a one-time past event.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'عَلِمَ الرَّجُلُ الرَّشِيدُ',
        pre: '',
        post: 'الرَّجُلُ الرَّشِيدُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['عَلِمْتُ', 'عَلِمَ', 'عَلِمَتْ', 'عَلِمْنَا'],
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
        base: 'عَلِمَ الرَّجُلُ الرَّشِيدُ',
        pre: '',
        post: 'الرَّجُلُ الرَّشِيدُ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['عَلِمْنَا', 'عَلِمَ', 'عَلِمْتُ', 'عَلِمَتْ'],
        answer: 0,
        rationales: [
          '1st plural perfect -- matches نَحْنُ.',
          '3rd masc. sing. -- he, the form given.',
          '1st singular -- I.',
          '3rd fem. sing. -- she.',
        ],
      },
      {
        type: 'shift',
        base: 'عَلِمَ الرَّجُلُ الرَّشِيدُ',
        pre: '',
        post: 'الرَّجُلُ الرَّشِيدُ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['عَلِمَتْ', 'عَلِمَ', 'عَلِمْتُ', 'عَلِمْنَا'],
        answer: 0,
        rationales: [
          '3rd fem. sing. -- matches هِيَ.',
          '3rd masc. sing. -- he, the form given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

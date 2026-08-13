// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā عليه السلام, part 1), chapter 11 --
// إِلَى قَصْرِ فِرْعَوْنَ. Printed pages 127 (from partway down, right after
// ch10's closing Qur'an quote 28:13 and its title box) -- 128 (up to ch12's
// title box, partway down). Transcribed by hand from the scan (vision OCR,
// 200dpi render) against ../CHAPTER-FORMAT.md. This is the first chapter of
// my assigned run (11-15); chapters 1-10 of this volume are being
// transcribed concurrently by another batch and were not available to me,
// so every lemma below -- including the volume's own protagonist names --
// is checked only against known_lemmas.json (volumes 1-3) per my
// instructions, and is marked "new" at its first appearance in MY batch
// even though most (مُوسَى، فِرْعَوْن، إِسْرَائِيل especially) almost certainly
// were already introduced in this volume's own chapters 1-10. This is
// expected to be reconciled centrally; flagging it here so it isn't
// mistaken for an oversight.
//
// Grammar / lexical notes:
//   -- لَمَّا (qs-v6-c11-001, "when," + perfect) is tagged as its own new
//      particle lemma: not present in known_lemmas.json despite إِذَا، لَوْ،
//      إِذْ all being formally taught in v1-3, and it is central to this
//      volume's narrative register per the assignment brief -- so unlike
//      the ordinary prepositions/الالإل articles below, it gets a proper
//      newWords entry.
//   -- Bare prepositions/conjunctions (فِي، إِلَى، مِنْ، عَلَى، بِ، لِ، كَ، وَ،
//      فَ) and bare demonstratives/pronouns (هَذَا، ذَلِكَ، هُوَ، هُمْ) are
//      treated the same way qasas-v3/chapter-01.js treats them: given an
//      inline token gloss but never added to newWords/lemmas, matching the
//      precedent that none of these appear as keys in known_lemmas.json
//      despite heavy use across v1-3.
//   -- لَيْسَ (qs-v6-c11-013) is tagged as new despite being a closed-class
//      copula-negator, on the same reasoning as كَانَ (which *was* formally
//      taught, qasas-v1 ch1): it governs its own predicate case the way
//      كَانَ does and recurs constantly through this volume, so it earns a
//      real entry rather than the bare-preposition treatment above.
//   -- أَلِأَنَّهُمْ (qs-v6-c11-013, -014) is أَ (interrogative) + لِأَنَّ
//      (already-taught "because," qasas-v2 ch11) + هُمْ -- tagged under the
//      reused lemma لِأَنَّ with the interrogative hamza folded into
//      features, not a new lemma.
//   -- بَنُو إِسْرَائِيلَ ("Children/Sons of Israel") is بَنُو, the construct
//      plural of the already-taught اِبْن (qasas-v1 ch14), + إِسْرَائِيل, a
//      new proper noun (first appearance in my batch).
//   -- مُعَامَلَةَ الْحَمِيرِ وَالدَّوَابِّ (qs-v6-c11-008) is a cognate/manner
//      accusative construction ("they treated them [the] treatment of
//      donkeys") -- مُعَامَلَة tagged as its own noun lemma (verbal noun of
//      عَامَلَ) rather than folded into a verb entry, since the verb itself
//      (يُعَامِلُونَ) is a distinct token earlier in the same sentence.
//   -- صَبَاحَ مَسَاءَ (qs-v6-c11-009) is an adverbial-accusative idiom,
//      "morning and evening" = "constantly." صَبَاح is already taught
//      (qasas-v3 ch5); مَسَاء is new.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَصْر (qasas-v2 ch7),
//      مَلِك (qasas-v1 ch10), كَمَا (qasas-v1 ch16), زَالَ (qasas-v2 ch21),
//      هَكَذَا (qasas-v1 ch6), غَنِيّ (qasas-v3 ch11), كَيْفَ (qasas-v1 ch5),
//      رَأَى (qasas-v1 ch2), أَهْل (qasas-v2 ch9), جَاعَ (qasas-v2 ch16),
//      عَذَاب (qasas-v3 ch11), كَانَ (qasas-v1 ch1), سَكَتَ (qasas-v1 ch4),
//      لَكِنْ (qasas-v1 ch13), قَوْم (qasas-v1 ch3), نَبِيّ (qasas-v1 ch8),
//      كَرِيم (qasas-v2 ch8), مَا (qasas-v1 ch4), ذَنْب (qasas-v2 ch24),
//      لِأَنَّ (qasas-v2 ch11)
//      are all already taught and are NOT re-listed in newWords here.
//
// 22 new words (لَمَّا، مُوسَى، أَتَمَّ، رَضَاعَة، نَشَأَ، فِرْعَوْن، مَهَابَة،
// إِسْرَائِيل، شَقِيَ، دَابَّة، مُعَامَلَة، حِمَار، اِسْتَخْدَمَ، سَامَ، سُوء، مَسَاء،
// غَاظَ، إِهَانَة، أُسْرَة، لَيْسَ، قِبْطِيّ، كَنْعَان).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch11',
  title: { ar: 'إِلَى قَصْرِ فِرْعَوْنَ', en: "To Pharaoh's Palace" },
  newWords: [
    'لَمَّا', 'مُوسَى', 'أَتَمَّ', 'رَضَاعَة', 'نَشَأَ', 'مَهَابَة',
    'شَقِيَ', 'دَابَّة', 'مُعَامَلَة', 'حِمَار', 'اِسْتَخْدَمَ', 'سَامَ',
    'سُوء', 'مَسَاء', 'غَاظَ', 'إِهَانَة', 'لَيْسَ', 'قِبْطِيّ', 'كَنْعَان',
  ],
  lemmas: {
    لَمَّا: { gloss: 'when (+ perfect, past narrative)' },
    مُوسَى: { gloss: 'Mūsā (Moses)' },
    أَتَمَّ: { gloss: 'to complete, finish' },
    رَضَاعَة: { gloss: 'nursing, breastfeeding (period)' },
    نَشَأَ: { gloss: 'to grow up, be raised' },
    مَهَابَة: { gloss: 'awe, dread (of authority)' },
    شَقِيَ: { gloss: 'to suffer, be wretched' },
    دَابَّة: { gloss: 'beast, mount, animal (pl. دَوَابّ)' },
    مُعَامَلَة: { gloss: 'treatment, dealing (with someone)' },
    حِمَار: { gloss: 'donkey (pl. حَمِير)' },
    اِسْتَخْدَمَ: { gloss: 'to employ, put to work, use' },
    سَامَ: { gloss: 'to subject (someone) to, inflict (upon)' },
    سُوء: { gloss: 'evil, harm, ill (treatment)' },
    مَسَاء: { gloss: 'evening' },
    غَاظَ: { gloss: 'to anger, vex, enrage' },
    إِهَانَة: { gloss: 'insult, humiliation' },
    لَيْسَ: { gloss: 'to not be (negating copula, + accusative predicate)' },
    قِبْطِيّ: { gloss: 'a Copt (native Egyptian, as distinct from Banū Isrāʾīl)' },
    كَنْعَان: { gloss: 'Canaan' },
  },
  paragraphs: [
    {
      en: "When Mūsā's mother finished nursing him, she returned him to the palace, and Mūsā grew up there just as the sons of kings grow up. And so the awe of kings and the wealthy vanished from Mūsā's heart.",
      sentences: [
        {
          id: 'qs-v6-c11-001',
          ar: 'وَلَمَّا أَتَمَّتْ أُمُّ مُوسَى رَضَاعَتَهُ رَدَّتْهُ إِلَى الْقَصْرِ.',
          en: "When Mūsā's mother finished his nursing, she returned him to the palace.",
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'أَتَمَّتْ', lemma: 'أَتَمَّ', pos: 'verb', features: 'perf.3fs', root: 'ت م م', gloss: 'to complete, finish; completed' },
            { surface: 'أُمُّ', lemma: 'أُمّ', pos: 'noun', features: 'constr.nom', gloss: 'the mother of' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'رَضَاعَتَهُ', lemma: 'رَضَاعَة', pos: 'noun', features: 'acc+3ms', root: 'ر ض ع', gloss: 'his nursing (period)' },
            { surface: 'رَدَّتْهُ', lemma: 'رَدَّ', pos: 'verb', features: 'perf.3fs+3ms', gloss: 'to give back, return; returned him' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْقَصْرِ', lemma: 'قَصْر', pos: 'noun', features: 'def.gen', gloss: 'the palace' },
          ],
        },
        {
          id: 'qs-v6-c11-002',
          ar: 'وَنَشَأَ مُوسَى فِي قَصْرِ الْمَلِكِ كَمَا يَنْشَأُ أَبْنَاءُ الْمُلُوكِ.',
          en: 'And Mūsā grew up in the king\'s palace, just as the sons of kings grow up.',
          tokens: [
            { surface: 'وَنَشَأَ', lemma: 'نَشَأَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ش أ', gloss: 'to grow up; and grew up' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'قَصْرِ', lemma: 'قَصْر', pos: 'noun', features: 'constr.gen', gloss: 'the palace of' },
            { surface: 'الْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'def.gen', gloss: 'the king' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'يَنْشَأُ', lemma: 'نَشَأَ', pos: 'verb', features: 'impf.3ms', root: 'ن ش أ', gloss: 'to grow up; grows up' },
            { surface: 'أَبْنَاءُ', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'الْمُلُوكِ', lemma: 'مَلِك', pos: 'noun', features: 'pl.def.gen', gloss: 'kings' },
          ],
        },
        {
          id: 'qs-v6-c11-003',
          ar: 'وَهَكَذَا زَالَتْ مِنْ قَلْبِ مُوسَى مَهَابَةُ الْمُلُوكِ وَالْأَغْنِيَاءِ.',
          en: "And so the awe of kings and the wealthy vanished from Mūsā's heart.",
          tokens: [
            { surface: 'وَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'conj+adv', gloss: 'and thus' },
            { surface: 'زَالَتْ', lemma: 'زَالَ', pos: 'verb', features: 'perf.3fs', gloss: 'to cease, vanish; vanished' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَلْبِ', lemma: 'قَلْب', pos: 'noun', features: 'constr.gen', gloss: 'the heart of' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'مَهَابَةُ', lemma: 'مَهَابَة', pos: 'noun', features: 'constr.nom', root: 'ه ي ب', gloss: 'the awe of' },
            { surface: 'الْمُلُوكِ', lemma: 'مَلِك', pos: 'noun', features: 'pl.def.gen', gloss: 'kings' },
            { surface: 'وَالْأَغْنِيَاءِ', lemma: 'غَنِيّ', pos: 'noun', features: 'conj+pl.def.gen', gloss: 'and the wealthy' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيْنَ نَشَأَ مُوسَى؟',
          options: ['فِي قَصْرِ الْمَلِكِ', 'فِي بَيْتِ أُمِّهِ فِي الْبَلَدِ', 'فِي الصَّحْرَاءِ'],
          answer: 0,
          qEn: 'Where did Mūsā grow up?',
          optionsEn: ["In the king's palace", "In his mother's house in the town", 'In the desert'],
        },
      ],
    },
    {
      en: "Mūsā saw with his own eyes how Pharaoh and his household lived in luxury while the Children of Israel suffered so they could enjoy it -- how the Children of Israel went hungry so Pharaoh's animals could eat their fill, how they were treated like donkeys and beasts of burden, put to forced labor and subjected to the worst torment. Mūsā watched all this, morning and evening, and stayed silent.",
      sentences: [
        {
          id: 'qs-v6-c11-004',
          ar: 'وَرَأَى مُوسَى بِعَيْنَيْهِ كَيْفَ يَنْعَمُ فِرْعَوْنُ وَأَهْلُهُ.',
          en: 'Mūsā saw with his own eyes how Pharaoh and his household lived in luxury,',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to see; and saw' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'بِعَيْنَيْهِ', lemma: 'عَيْن', pos: 'noun', features: 'prep+du.gen+3ms', gloss: 'with his own two eyes' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'يَنْعَمُ', lemma: 'نَعِمَ', pos: 'verb', features: 'impf.3ms', root: 'ن ع م', gloss: 'to live in ease/luxury; lives in luxury' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'وَأَهْلُهُ', lemma: 'أَهْل', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his household' },
          ],
        },
        {
          id: 'qs-v6-c11-005',
          ar: 'وَكَيْفَ يَشْقَى بَنُو إِسْرَائِيلَ لِيَنْعَمَ فِرْعَوْنُ وَأَهْلُهُ.',
          en: 'and how the Children of Israel suffered so that Pharaoh and his household might live in luxury.',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'يَشْقَى', lemma: 'شَقِيَ', pos: 'verb', features: 'impf.3ms', root: 'ش ق ي', gloss: 'to suffer, be wretched; suffer' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'لِيَنْعَمَ', lemma: 'نَعِمَ', pos: 'verb', features: 'part+impf.3ms', root: 'ن ع م', gloss: 'so that...might live in luxury' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'وَأَهْلُهُ', lemma: 'أَهْل', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his household' },
          ],
        },
        {
          id: 'qs-v6-c11-006',
          ar: 'وَكَيْفَ يَجُوعُ بَنُو إِسْرَائِيلَ لِتَشْبَعَ دَوَابُّ فِرْعَوْنَ.',
          en: "and how the Children of Israel went hungry so that Pharaoh's animals might be full.",
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'يَجُوعُ', lemma: 'جَاعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be hungry; go hungry' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'لِتَشْبَعَ', lemma: 'شَبِعَ', pos: 'verb', features: 'part+impf.3fs', root: 'ش ب ع', gloss: 'to be full, sated; so that...might be sated' },
            { surface: 'دَوَابُّ', lemma: 'دَابَّة', pos: 'noun', features: 'pl.constr.nom', root: 'د ب ب', gloss: 'the animals of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
          ],
        },
        {
          id: 'qs-v6-c11-007',
          ar: 'وَكَيْفَ يُعَامِلُونَ بَنِي إِسْرَائِيلَ مُعَامَلَةَ الْحَمِيرِ وَالدَّوَابِّ.',
          en: 'and how they treated the Children of Israel the way one treats donkeys and beasts of burden.',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'يُعَامِلُونَ', lemma: 'عَامَلَ', pos: 'verb', features: 'impf.3mp', root: 'ع م ل', gloss: 'to treat, deal with; they treat' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'مُعَامَلَةَ', lemma: 'مُعَامَلَة', pos: 'noun', features: 'acc.constr', root: 'ع م ل', gloss: 'the treatment of' },
            { surface: 'الْحَمِيرِ', lemma: 'حِمَار', pos: 'noun', features: 'pl.def.gen', root: 'ح م ر', gloss: 'donkeys' },
            { surface: 'وَالدَّوَابِّ', lemma: 'دَابَّة', pos: 'noun', features: 'conj+pl.def.gen', root: 'د ب ب', gloss: 'and beasts' },
          ],
        },
        {
          id: 'qs-v6-c11-008',
          ar: 'وَكَيْفَ يَسْتَخْدِمُونَهُمْ وَيَسُومُونَهُمْ سُوءَ الْعَذَابِ.',
          en: 'and how they put them to forced labor and subjected them to the worst torment.',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'يَسْتَخْدِمُونَهُمْ', lemma: 'اِسْتَخْدَمَ', pos: 'verb', features: 'impf.3mp+3mp', root: 'خ د م', gloss: 'to employ, put to work; they employ them' },
            { surface: 'وَيَسُومُونَهُمْ', lemma: 'سَامَ', pos: 'verb', features: 'conj+impf.3mp+3mp', root: 'س و م', gloss: 'to subject to; and subject them to' },
            { surface: 'سُوءَ', lemma: 'سُوء', pos: 'noun', features: 'acc.constr', root: 'س و أ', gloss: 'the worst of' },
            { surface: 'الْعَذَابِ', lemma: 'عَذَاب', pos: 'noun', features: 'def.gen', gloss: 'the torment' },
          ],
        },
        {
          id: 'qs-v6-c11-009',
          ar: 'وَكَانَ مُوسَى يَرَى ذَلِكَ صَبَاحَ مَسَاءَ وَيَسْكُتُ.',
          en: 'Mūsā used to see that morning and evening, and stayed silent.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', gloss: 'to see; used to see' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'صَبَاحَ', lemma: 'صَبَاح', pos: 'noun', features: 'acc', gloss: 'morning' },
            { surface: 'مَسَاءَ', lemma: 'مَسَاء', pos: 'noun', features: 'acc', root: 'م س و', gloss: 'evening' },
            { surface: 'وَيَسْكُتُ', lemma: 'سَكَتَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to fall silent; and stays silent' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ بَنُو إِسْرَائِيلَ يَشْقَوْنَ وَيَجُوعُونَ؟',
          options: ['لِيَنْعَمَ فِرْعَوْنُ وَأَهْلُهُ وَتَشْبَعَ دَوَابُّهُ', 'لِأَنَّهُمْ كُسَالَى', 'لِأَنَّهُمْ أَغْنِيَاءُ'],
          answer: 0,
          qEn: 'Why did the Children of Israel suffer and go hungry?',
          optionsEn: ["So that Pharaoh and his household could live in luxury and his animals could eat their fill", 'Because they were lazy', 'Because they were rich'],
        },
      ],
    },
    {
      en: "But that used to anger Mūsā -- and how could the humiliation of his people and family not anger him? They are the sons of prophets, sons of the noble. What fault do the Children of Israel bear -- is it because they are not Copts? Is it because they are from Canaan? This is no fault! This is no fault!",
      sentences: [
        {
          id: 'qs-v6-c11-010',
          ar: 'وَلَكِنْ كَانَ مُوسَى يَغِيظُهُ ذَلِكَ.',
          en: 'But that used to anger Mūsā.',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'يَغِيظُهُ', lemma: 'غَاظَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'غ ي ظ', gloss: 'to anger, vex; vexes him' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v6-c11-011',
          ar: 'وَكَيْفَ لَا يَغِيظُهُ إِهَانَةُ قَوْمِهِ وَأُسْرَتِهِ.',
          en: 'And how could the humiliation of his people and his family not anger him?',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَغِيظُهُ', lemma: 'غَاظَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'غ ي ظ', gloss: 'to anger, vex; angers him' },
            { surface: 'إِهَانَةُ', lemma: 'إِهَانَة', pos: 'noun', features: 'constr.nom', root: 'ه و ن', gloss: 'the humiliation of' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
            { surface: 'وَأُسْرَتِهِ', lemma: 'أُسْرَة', pos: 'noun', features: 'conj+gen+3ms', root: 'أ س ر', gloss: 'and his family' },
          ],
        },
        {
          id: 'qs-v6-c11-012',
          ar: 'وَهُمْ أَبْنَاءُ الْأَنْبِيَاءِ، وَهُمْ أَبْنَاءُ الْكِرَامِ.',
          en: 'They are the sons of prophets, and they are the sons of the noble.',
          tokens: [
            { surface: 'وَهُمْ', lemma: 'هُوَ', pos: 'noun', features: 'conj+nom.3mp', gloss: 'and they' },
            { surface: 'أَبْنَاءُ', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'الْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the prophets' },
            { surface: 'وَهُمْ', lemma: 'هُوَ', pos: 'noun', features: 'conj+nom.3mp', gloss: 'and they' },
            { surface: 'أَبْنَاءُ', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'الْكِرَامِ', lemma: 'كَرِيم', pos: 'noun', features: 'pl.def.gen', gloss: 'the noble' },
          ],
        },
        {
          id: 'qs-v6-c11-013',
          ar: 'وَمَا ذَنْبُ بَنِي إِسْرَائِيلَ، أَلِأَنَّهُمْ لَيْسُوا أَقْبَاطاً؟!',
          en: 'What fault do the Children of Israel bear -- is it because they are not Copts?!',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+part', gloss: 'and what' },
            { surface: 'ذَنْبُ', lemma: 'ذَنْب', pos: 'noun', features: 'constr.nom', gloss: 'the fault of' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.gen', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'أَلِأَنَّهُمْ', lemma: 'لِأَنَّ', pos: 'conj', features: 'part+conj+3mp', gloss: 'is it because they' },
            { surface: 'لَيْسُوا', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3mp', gloss: 'to not be; are not' },
            { surface: 'أَقْبَاطاً', lemma: 'قِبْطِيّ', pos: 'noun', features: 'pl.indef.acc', gloss: 'Copts' },
          ],
        },
        {
          id: 'qs-v6-c11-014',
          ar: 'أَلِأَنَّهُمْ مِنْ كَنْعَانَ؟!',
          en: 'Is it because they are from Canaan?!',
          tokens: [
            { surface: 'أَلِأَنَّهُمْ', lemma: 'لِأَنَّ', pos: 'conj', features: 'part+conj+3mp', gloss: 'is it because they' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'كَنْعَانَ', lemma: 'كَنْعَان', pos: 'proper', features: 'gen', gloss: 'Canaan' },
          ],
        },
        {
          id: 'qs-v6-c11-015',
          ar: 'هَذَا لَيْسَ بِذَنْبٍ!',
          en: 'This is no fault!',
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'to not be; is not' },
            { surface: 'بِذَنْبٍ', lemma: 'ذَنْب', pos: 'noun', features: 'prep+indef.gen', gloss: 'a fault' },
          ],
        },
        {
          id: 'qs-v6-c11-016',
          ar: 'هَذَا لَيْسَ بِذَنْبٍ!',
          en: 'This is no fault!',
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'to not be; is not' },
            { surface: 'بِذَنْبٍ', lemma: 'ذَنْب', pos: 'noun', features: 'prep+indef.gen', gloss: 'a fault' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَ الْكَاتِبُ بَنِي إِسْرَائِيلَ؟',
          options: ['أَبْنَاءُ الْأَنْبِيَاءِ وَأَبْنَاءُ الْكِرَامِ', 'أَقْبَاطٌ مِنْ مِصْرَ', 'قَوْمٌ لَا ذَنْبَ لَهُمْ وَلَا فَضْلَ'],
          answer: 0,
          qEn: 'How does the author describe the Children of Israel?',
          optionsEn: ['Sons of prophets and sons of the noble', 'Copts from Egypt', 'A people with neither fault nor virtue'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَمَّا أَتَمَّتْ أُمُّ مُوسَى رَضَاعَتَهُ',
        post: 'إِلَى الْقَصْرِ.',
        en: "When Mūsā's mother finished his nursing, she returned him to the palace.",
        options: ['رَدَّتْهُ', 'رَدَّتْهَا', 'رَدَّهُ', 'رَدُّوهُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular perfect + object pronoun "him" -- matches the mother (fem. subject) returning Mūsā (masc. object).',
          'Wrong object pronoun -- "her," not "him."',
          '3rd masculine singular -- wrong gender for the subject (the mother).',
          '3rd plural -- wrong number; only the mother is the subject.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'كَانَ مُوسَى يَرَى ذَلِكَ وَيَسْكُتُ',
        pre: '',
        post: 'يَرَى ذَلِكَ وَيَسْكُتُ',
        targetPerson: 'هُمَا',
        targetEn: 'they two (m.)',
        options: ['كَانَا', 'كَانَ', 'كَانَتْ', 'كُنَّا'],
        answer: 0,
        rationales: [
          '3rd masculine dual -- matches هُمَا.',
          '3rd masculine singular -- he, the form already given.',
          '3rd feminine singular -- she.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'كَانَ مُوسَى يَرَى ذَلِكَ وَيَسْكُتُ',
        pre: '',
        post: 'يَرَى ذَلِكَ وَيَسْكُتُ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['كُنْتَ', 'كَانَ', 'كُنْتُ', 'كُنَّ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '2nd feminine plural -- you all (f.).',
        ],
      },
    ],
  },
};

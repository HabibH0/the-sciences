// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 14 -- مِنْ مِصْرَ
// إِلَى مَدْيَنَ. Printed pages 133 (heading, partway down, right after
// ch13's closing Qur'an citation 28:20-21) - 134 (top only), ending right
// before ch15's heading «فِي مَدْيَنَ» which opens partway down page 134.
// Transcribed by hand from the scan (vision OCR, 200dpi render) against
// ../CHAPTER-FORMAT.md.
//
// A transitional, essayistic chapter: where can Mūsā possibly flee when
// all of Egypt is Pharaoh's kingdom? Nadwi answers with Madyan -- a free
// desert land outside Pharaoh's reach -- and pivots into an editorial
// aside contrasting free Bedouin poverty with enslaved city comfort
// (qs-v6-c14-008/009's parallel exclamations يَا حَبَّذَا / وَيَا شَقَاوَةَ are
// a deliberate rhetorical antithesis, not a repeated construction error),
// before closing on Mūsā's departure and the Qur'an's own account
// (28:22) of his prayer toward Madyan.
//
// Grammar / lexical notes:
//   -- شَآمَةُ (as OCR'd at first pass) is corrected to the already-taught
//      lemma شَامَّة (qasas-v6/ch7, ch12): the idiom «عُيُونُ الْغُرَابِ
//      وَشَامَّةُ النَّمْلِ» ("a crow's eyes and an ant's sense of smell," for
//      uncanny perceptiveness) reuses the exact idiom already established
//      for Pharaoh's police -- confirms this is the same stock phrase,
//      not a new word.
//   -- شَقَاوَةَ (qs-v6-c14-009) is an exclamatory accusative parallel to
//      عَجَباً (qasas-v6/ch9) and حَبَّذَا earlier in the same pair of
//      sentences -- "how wretched is..."; tagged as its own lemma since
//      it is a distinct root/word from حَبَّذَا, not a variant of it.
//   -- بِلَادٌ (qs-v6-c14-006/007) reuses the already-established
//      convention of tagging this broken plural under the singular
//      lemma بَلَد (see qasas-v6/ch3's note on the same word).
//   -- Shared lexicon check (cross-checked against known_lemmas.json,
//      volumes 1-3 + this volume's chapters so far): إِلَى, أَيْنَ
//      (qasas-v2/ch11), ذَهَبَ, مُوسَى, مِصْرَ, كُلّ, مَمْلَكَة (qasas-v6/ch22),
//      لِ, فِرْعَوْن, شُرْطَة, مِرْصَاد (qasas-v6/ch7), عَيْن, غُرَاب
//      (qasas-v6/ch7), نَمْل (qasas-v6/ch7), أَلْهَمَ (qasas-v6/ch7), اللَّه,
//      أَنْ, مَدْيَن, وَصَلَ (qasas-v1/ch12), يَد, إِنَّ, قَرْيَة (qasas-v1/ch1),
//      لَيْسَ, فِي, مَدِينَة (qasas-v1/ch10), قَصْر (qasas-v2/ch7), سُوق
//      (qasas-v2/ch7), لَكِنَّ, بَعِيد (qasas-v2/ch2), مِنْ, حُرّ (qasas-v2/ch9),
//      تَحْتَ (qasas-v6/ch4), حُكْم (qasas-v2/ch11), يَا, مَعَ, هُنَالِكَ
//      (qasas-v6/ch7), أَصْبَحَ, أَحَد, لا, خَافَ (qasas-v1/ch10), بَاتَ
//      (qasas-v6/ch16), شَرّ (qasas-v2/ch3), ذَبَحَ (qasas-v1/ch14), اِبْن,
//      قَصَدَ (qasas-v1/ch12), خَرَجَ (qasas-v1/ch4), خَافَ, تَرَقَّبَ
//      (qasas-v6/ch12), نَامَ (qasas-v2/ch6), عَنْ, اِسْم, دَعَا, طَلَبَ, نَصْر
//      (qasas-v2/ch13), لَمَّا, تَوَجَّهَ (qasas-v1/ch15), قَالَ, عَسَى
//      (qasas-v2/ch21), رَبّ, هَدَى, سَوَاء (qasas-v6/ch2), سَبِيل
//      (qasas-v2/ch20)
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 15 new words (عَرَبِيّ، حَيْثُ، بَادِيَة، مَدَنِيَّة، سَعِيد، حَبَّذَا، بَدَاوَة،
// حُرِّيَّة، عَدْل، شَقَاوَة، عُبُودِيَّة، ذُلّ، سَطْوَة، قَهْر، تَبِعَ، تِلْقَاءَ --
// 16 counting all; a reflective/editorial chapter is naturally
// vocabulary-dense). No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch14',
  title: { ar: 'مِنْ مِصْرَ إِلَى مَدْيَنَ', en: 'From Egypt to Madyan' },
  newWords: ['عَرَبِيّ', 'حَيْثُ', 'بَادِيَة', 'مَدَنِيَّة', 'سَعِيد', 'حَبَّذَا', 'بَدَاوَة', 'حُرِّيَّة', 'عَدْل', 'شَقَاوَة', 'عُبُودِيَّة', 'ذُلّ', 'سَطْوَة', 'قَهْر', 'تَبِعَ', 'تِلْقَاءَ'],
  lemmas: {
    عَرَبِيّ: { gloss: 'Arab, Arabian' },
    حَيْثُ: { gloss: 'where, in that' },
    بَادِيَة: { gloss: 'desert, open countryside' },
    مَدَنِيَّة: { gloss: 'urban civilization, city life' },
    سَعِيد: { gloss: 'fortunate, happy' },
    حَبَّذَا: { gloss: 'how excellent/wonderful is...!' },
    بَدَاوَة: { gloss: 'nomadic (Bedouin) life' },
    حُرِّيَّة: { gloss: 'freedom' },
    عَدْل: { gloss: 'justice' },
    شَقَاوَة: { gloss: 'how wretched is...!; misery' },
    عُبُودِيَّة: { gloss: 'servitude, slavery' },
    ذُلّ: { gloss: 'humiliation, disgrace' },
    سَطْوَة: { gloss: 'tyranny, violent power' },
    قَهْر: { gloss: 'oppression, subjugation' },
    تَبِعَ: { gloss: 'to follow' },
    تِلْقَاءَ: { gloss: 'toward, facing' },
  },
  paragraphs: [
    {
      en: "But where could Mūsā go, when all of Egypt was Pharaoh's kingdom?! Pharaoh's police lay in wait, with a crow's eyes and an ant's sense of smell!",
      sentences: [
        {
          id: 'qs-v6-c14-001',
          ar: 'وَلَكِنْ إِلَى أَيْنَ يَذْهَبُ مُوسَى، وَمِصْرُ كُلُّهَا مَمْلَكَةٌ لِفِرْعَوْنَ؟!',
          en: "But where could Mūsā go, when all of Egypt was Pharaoh's kingdom?!",
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أَيْنَ', lemma: 'أَيْنَ', pos: 'adv', features: 'adv', gloss: 'where' },
            { surface: 'يَذْهَبُ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to go; could go' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'وَمِصْرُ', lemma: 'مِصْر', pos: 'proper', features: 'conj+nom', gloss: 'and Egypt' },
            { surface: 'كُلُّهَا', lemma: 'كُلّ', pos: 'noun', features: 'nom+3fs', gloss: 'all of it' },
            { surface: 'مَمْلَكَةٌ', lemma: 'مَمْلَكَة', pos: 'noun', features: 'indef.nom', gloss: 'a kingdom' },
            { surface: 'لِفِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'prep+gen', gloss: "Pharaoh's" },
          ],
        },
        {
          id: 'qs-v6-c14-002',
          ar: 'وَشُرْطَةُ فِرْعَوْنَ بِالْمِرْصَادِ، وَلَهُمْ عُيُونُ الْغُرَابِ وَشَامَّةُ النَّمْلِ!',
          en: "Pharaoh's police lay in wait, with a crow's eyes and an ant's sense of smell!",
          tokens: [
            { surface: 'وَشُرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'conj+constr.nom', gloss: 'and the police of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: "Pharaoh's" },
            { surface: 'بِالْمِرْصَادِ', lemma: 'مِرْصَاد', pos: 'noun', features: 'prep+def.gen', gloss: 'lay in wait' },
            { surface: 'وَلَهُمْ', lemma: 'لِ', pos: 'prep', features: 'conj+prep+3mp', gloss: 'and to them [belong]' },
            { surface: 'عُيُونُ', lemma: 'عَيْن', pos: 'noun', features: 'nom.constr.pl', gloss: 'the eyes of' },
            { surface: 'الْغُرَابِ', lemma: 'غُرَاب', pos: 'noun', features: 'def.gen', gloss: 'the crow' },
            { surface: 'وَشَامَّةُ', lemma: 'شَامَّة', pos: 'noun', features: 'conj+nom.constr', gloss: 'and the sense of smell of' },
            { surface: 'النَّمْلِ', lemma: 'نَمْل', pos: 'noun', features: 'def.gen', gloss: 'the ant' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ مِنَ الصَّعْبِ عَلَى مُوسَى أَنْ يَهْرُبَ؟',
          options: ['لِأَنَّ مِصْرَ كُلَّهَا مَمْلَكَةٌ لِفِرْعَوْنَ وَشُرْطَتَهُ بِالْمِرْصَادِ', 'لِأَنَّهُ لَا يَعْرِفُ الطَّرِيقَ', 'لِأَنَّهُ كَانَ مَرِيضاً'],
          answer: 0,
          qEn: 'Why was it hard for Mūsā to escape?',
          optionsEn: ["Because all of Egypt was Pharaoh's kingdom and his police lay in wait", "Because he didn't know the way", 'Because he was sick'],
        },
      ],
    },
    {
      en: "Allah inspired Mūsā to go to Madyan, the Arab land, where Pharaoh's hand could not reach him. Madyan was desert and villages, without Egypt's urban civilization -- it had no palaces of Egypt and no markets of Egypt. But it was a fortunate land, because it was far from Pharaoh, and fortunate because it was a free land, not under Pharaoh's rule.",
      sentences: [
        {
          id: 'qs-v6-c14-003',
          ar: 'أَلْهَمَ اللَّهُ مُوسَى أَنْ يَذْهَبَ إِلَى مَدْيَنَ الْبَلَدَ الْعَرَبِيَّ، حَيْثُ لا تَصِلُ إِلَيْهِ يَدُ فِرْعَوْنَ.',
          en: "Allah inspired Mūsā to go to Madyan, the Arab land, where Pharaoh's hand could not reach him.",
          tokens: [
            { surface: 'أَلْهَمَ', lemma: 'أَلْهَمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to inspire; inspired' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَذْهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'subj.3ms', gloss: 'go' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مَدْيَنَ', lemma: 'مَدْيَن', pos: 'proper', features: 'acc', gloss: 'Madyan' },
            { surface: 'الْبَلَدَ', lemma: 'بَلَد', pos: 'noun', features: 'def.acc', gloss: 'the land' },
            { surface: 'الْعَرَبِيَّ', lemma: 'عَرَبِيّ', pos: 'adj', features: 'def.acc', root: 'ع ر ب', gloss: 'Arab' },
            { surface: 'حَيْثُ', lemma: 'حَيْثُ', pos: 'adv', features: 'adv', root: 'ح ي ث', gloss: 'where' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَصِلُ', lemma: 'وَصَلَ', pos: 'verb', features: 'impf.3fs', gloss: 'to reach; could reach' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'him' },
            { surface: 'يَدُ', lemma: 'يَد', pos: 'noun', features: 'nom.constr', gloss: 'the hand of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: "Pharaoh's" },
          ],
        },
        {
          id: 'qs-v6-c14-004',
          ar: 'إِنَّ مَدْيَنَ بَادِيَةٌ وَقُرًى لَيْسَ فِيهَا مَدَنِيَّةُ مِصْرَ.',
          en: "Madyan was desert and villages, without Egypt's urban civilization.",
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'مَدْيَنَ', lemma: 'مَدْيَن', pos: 'proper', features: 'acc', gloss: 'Madyan' },
            { surface: 'بَادِيَةٌ', lemma: 'بَادِيَة', pos: 'noun', features: 'indef.nom', root: 'ب د و', gloss: 'desert, countryside' },
            { surface: 'وَقُرًى', lemma: 'قَرْيَة', pos: 'noun', features: 'conj+indef.nom.pl', gloss: 'and villages' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'to not be; without' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'مَدَنِيَّةُ', lemma: 'مَدَنِيَّة', pos: 'noun', features: 'nom.constr', root: 'م د ن', gloss: 'the urban civilization of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v6-c14-005',
          ar: 'وَلَيْسَ فِيهَا قُصُورُ مِصْرَ وَأَسْوَاقُ مِصْرَ.',
          en: 'It had no palaces of Egypt and no markets of Egypt.',
          tokens: [
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and had no' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'قُصُورُ', lemma: 'قَصْر', pos: 'noun', features: 'nom.pl.constr', gloss: 'the palaces of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'وَأَسْوَاقُ', lemma: 'سُوق', pos: 'noun', features: 'conj+nom.pl.constr', gloss: 'and the markets of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v6-c14-006',
          ar: 'وَلَكِنَّهَا بِلَادٌ سَعِيدَةٌ لِأَنَّهَا بَعِيدَةٌ مِنْ فِرْعَوْنَ.',
          en: 'But it was a fortunate land, because it was far from Pharaoh.',
          tokens: [
            { surface: 'وَلَكِنَّهَا', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3fs', gloss: 'but it' },
            { surface: 'بِلَادٌ', lemma: 'بَلَد', pos: 'noun', features: 'indef.nom.pl', gloss: 'a land' },
            { surface: 'سَعِيدَةٌ', lemma: 'سَعِيد', pos: 'adj', features: 'indef.nom.f', root: 'س ع د', gloss: 'fortunate' },
            { surface: 'لِأَنَّهَا', lemma: 'لِأَنَّ', pos: 'part', features: 'part+3fs', gloss: 'because it' },
            { surface: 'بَعِيدَةٌ', lemma: 'بَعِيد', pos: 'adj', features: 'indef.nom.f', gloss: 'far' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
          ],
        },
        {
          id: 'qs-v6-c14-007',
          ar: 'وَإِنَّهَا سَعِيدَةٌ لِأَنَّهَا بِلَادٌ حُرَّةٌ لَيْسَتْ تَحْتَ حُكْمِ فِرْعَوْنَ.',
          en: 'And it was fortunate because it was a free land, not under Pharaoh\'s rule.',
          tokens: [
            { surface: 'وَإِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3fs', gloss: 'and it' },
            { surface: 'سَعِيدَةٌ', lemma: 'سَعِيد', pos: 'adj', features: 'indef.nom.f', root: 'س ع د', gloss: 'fortunate' },
            { surface: 'لِأَنَّهَا', lemma: 'لِأَنَّ', pos: 'part', features: 'part+3fs', gloss: 'because it' },
            { surface: 'بِلَادٌ', lemma: 'بَلَد', pos: 'noun', features: 'indef.nom.pl', gloss: 'a land' },
            { surface: 'حُرَّةٌ', lemma: 'حُرّ', pos: 'adj', features: 'indef.nom.f', gloss: 'free' },
            { surface: 'لَيْسَتْ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3fs', gloss: 'to not be; not' },
            { surface: 'تَحْتَ', lemma: 'تَحْتَ', pos: 'adv', features: 'adv', gloss: 'under' },
            { surface: 'حُكْمِ', lemma: 'حُكْم', pos: 'noun', features: 'constr.gen', gloss: 'the rule of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
          ],
        },
      ],
      checks: [
        {
          q: 'إِلَى أَيْنَ أَلْهَمَ اللَّهُ مُوسَى أَنْ يَذْهَبَ؟',
          options: ['إِلَى مَدْيَنَ، حَيْثُ لَا تَصِلُ إِلَيْهِ يَدُ فِرْعَوْنَ', 'إِلَى كَنْعَانَ', 'إِلَى بَابِلَ'],
          answer: 0,
          qEn: 'Where did Allah inspire Mūsā to go?',
          optionsEn: ["To Madyan, where Pharaoh's hand could not reach him", 'To Canaan', 'To Babylon'],
        },
      ],
    },
    {
      en: 'How wonderful is nomadic life with freedom and justice! And how wretched is city life with servitude and humiliation! There, everyone would rise fearing neither Pharaoh\'s tyranny nor his oppression, and everyone would sleep fearing neither Pharaoh\'s police nor their evil. There, no sons were slaughtered.',
      sentences: [
        {
          id: 'qs-v6-c14-008',
          ar: 'يَا حَبَّذَا الْبَدَاوَةُ مَعَ الْحُرِّيَّةِ وَالْعَدْلِ.',
          en: 'How wonderful is nomadic life with freedom and justice!',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: '(exclamation)' },
            { surface: 'حَبَّذَا', lemma: 'حَبَّذَا', pos: 'part', features: 'part', root: 'ح ب ب', gloss: 'how excellent is' },
            { surface: 'الْبَدَاوَةُ', lemma: 'بَدَاوَة', pos: 'noun', features: 'def.nom', root: 'ب د و', gloss: 'nomadic life' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'الْحُرِّيَّةِ', lemma: 'حُرِّيَّة', pos: 'noun', features: 'def.gen', root: 'ح ر ر', gloss: 'freedom' },
            { surface: 'وَالْعَدْلِ', lemma: 'عَدْل', pos: 'noun', features: 'conj+def.gen', root: 'ع د ل', gloss: 'and justice' },
          ],
        },
        {
          id: 'qs-v6-c14-009',
          ar: 'وَيَا شَقَاوَةَ الْمَدَنِيَّةِ مَعَ الْعُبُودِيَّةِ وَالذُّلِّ.',
          en: 'And how wretched is city life with servitude and humiliation!',
          tokens: [
            { surface: 'وَيَا', lemma: 'يَا', pos: 'part', features: 'conj+part', gloss: '(exclamation)' },
            { surface: 'شَقَاوَةَ', lemma: 'شَقَاوَة', pos: 'noun', features: 'acc', root: 'ش ق و', gloss: 'how wretched is' },
            { surface: 'الْمَدَنِيَّةِ', lemma: 'مَدَنِيَّة', pos: 'noun', features: 'def.gen', root: 'م د ن', gloss: 'city life' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'الْعُبُودِيَّةِ', lemma: 'عُبُودِيَّة', pos: 'noun', features: 'def.gen', root: 'ع ب د', gloss: 'servitude' },
            { surface: 'وَالذُّلِّ', lemma: 'ذُلّ', pos: 'noun', features: 'conj+def.gen', root: 'ذ ل ل', gloss: 'and humiliation' },
          ],
        },
        {
          id: 'qs-v6-c14-010',
          ar: 'هُنَالِكَ يُصْبِحُ كُلُّ أَحَدٍ لا يَخَافُ سَطْوَةَ فِرْعَوْنَ وَقَهْرِهِ.',
          en: "There, everyone would rise fearing neither Pharaoh's tyranny nor his oppression.",
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there' },
            { surface: 'يُصْبِحُ', lemma: 'أَصْبَحَ', pos: 'verb', features: 'impf.3ms', gloss: 'to rise (in the morning); rises' },
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.nom', gloss: 'every' },
            { surface: 'أَحَدٍ', lemma: 'أَحَد', pos: 'noun', features: 'indef.gen', gloss: 'one' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3ms', gloss: 'fearing' },
            { surface: 'سَطْوَةَ', lemma: 'سَطْوَة', pos: 'noun', features: 'acc.constr', root: 'س ط و', gloss: 'the tyranny of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: "Pharaoh's" },
            { surface: 'وَقَهْرِهِ', lemma: 'قَهْر', pos: 'noun', features: 'conj+gen+3ms', root: 'ق ه ر', gloss: 'and his oppression' },
          ],
        },
        {
          id: 'qs-v6-c14-011',
          ar: 'وَهُنَالِكَ يَبِيتُ كُلُّ أَحَدٍ لا يَخَافُ شُرْطَةَ فِرْعَوْنَ وَشَرَّهُ.',
          en: "And there, everyone would sleep fearing neither Pharaoh's police nor their evil.",
          tokens: [
            { surface: 'وَهُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and there' },
            { surface: 'يَبِيتُ', lemma: 'بَاتَ', pos: 'verb', features: 'impf.3ms', gloss: 'to spend the night; spends the night' },
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.nom', gloss: 'every' },
            { surface: 'أَحَدٍ', lemma: 'أَحَد', pos: 'noun', features: 'indef.gen', gloss: 'one' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3ms', gloss: 'fearing' },
            { surface: 'شُرْطَةَ', lemma: 'شُرْطَة', pos: 'noun', features: 'acc.constr', gloss: 'the police of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: "Pharaoh's" },
            { surface: 'وَشَرَّهُ', lemma: 'شَرّ', pos: 'noun', features: 'conj+acc+3ms', gloss: 'and their evil' },
          ],
        },
        {
          id: 'qs-v6-c14-012',
          ar: 'هُنَالِكَ لا تُذْبَحُ الْأَبْنَاءُ.',
          en: 'There, no sons were slaughtered.',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُذْبَحُ', lemma: 'ذَبَحَ', pos: 'verb', features: 'pass+impf.3fs', gloss: 'to slaughter; were slaughtered' },
            { surface: 'الْأَبْنَاءُ', lemma: 'اِبْن', pos: 'noun', features: 'def.pl.nom', root: 'ب ن و', gloss: 'the sons' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَا الَّذِي قَارَنَ بَيْنَهُ الْكَاتِبُ فِي هَذِهِ الْفِقْرَةِ؟',
          options: ['الْبَدَاوَةَ مَعَ الْحُرِّيَّةِ وَالْمَدَنِيَّةَ مَعَ الْعُبُودِيَّةِ', 'مِصْرَ وَبَابِلَ', 'الْغِنَى وَالْفَقْرَ فَقَطْ'],
          answer: 0,
          qEn: 'What did the author compare in this passage?',
          optionsEn: ['Nomadic life with freedom, and city life with servitude', 'Egypt and Babylon', 'Only wealth and poverty'],
        },
      ],
    },
    {
      en: 'Mūsā headed for Madyan. He left Egypt afraid, watching to see if anyone followed him, but the police were oblivious to him. Mūsā set out in the name of Allah, calling upon Allah and asking Him for help. "And when he turned his face toward Madyan, he said, \'Perhaps my Lord will guide me to the right way.\'"',
      sentences: [
        {
          id: 'qs-v6-c14-013',
          ar: 'قَصَدَ مُوسَى مَدْيَنَ.',
          en: 'Mūsā headed for Madyan.',
          tokens: [
            { surface: 'قَصَدَ', lemma: 'قَصَدَ', pos: 'verb', features: 'perf.3ms', gloss: 'to head for; headed for' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'مَدْيَنَ', lemma: 'مَدْيَن', pos: 'proper', features: 'acc', gloss: 'Madyan' },
          ],
        },
        {
          id: 'qs-v6-c14-014',
          ar: 'وَخَرَجَ مِنْ مِصْرَ خَائِفاً يَتَرَقَّبُ أَيَتْبَعُهُ أَحَدٌ، وَلَكِنْ نَامَ عَنْهُ الشُّرْطَةُ.',
          en: 'He left Egypt afraid, watching to see if anyone followed him, but the police were oblivious to him.',
          tokens: [
            { surface: 'وَخَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to leave; left' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'خَائِفاً', lemma: 'خَافَ', pos: 'adj', features: 'indef.acc', gloss: 'afraid' },
            { surface: 'يَتَرَقَّبُ', lemma: 'تَرَقَّبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to watch warily; watching' },
            { surface: 'أَيَتْبَعُهُ', lemma: 'تَبِعَ', pos: 'verb', features: 'part+impf.3ms+3ms', root: 'ت ب ع', gloss: 'to follow; whether follows him' },
            { surface: 'أَحَدٌ', lemma: 'أَحَد', pos: 'noun', features: 'indef.nom', gloss: 'anyone' },
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'نَامَ', lemma: 'نَامَ', pos: 'verb', features: 'perf.3ms', gloss: 'to sleep; were oblivious' },
            { surface: 'عَنْهُ', lemma: 'عَنْ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'الشُّرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'def.nom', gloss: 'the police' },
          ],
        },
        {
          id: 'qs-v6-c14-015',
          ar: 'خَرَجَ مُوسَى عَلَى اسْمِ اللَّهِ يَدْعُو اللَّهَ وَيَطْلُبُ مِنْهُ النَّصْرَ.',
          en: 'Mūsā set out in the name of Allah, calling upon Allah and asking Him for help.',
          tokens: [
            { surface: 'خَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'perf.3ms', gloss: 'to set out' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'اسْمِ', lemma: 'اِسْم', pos: 'noun', features: 'constr.gen', gloss: 'the name of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'يَدْعُو', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms', gloss: 'calling upon' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَيَطْلُبُ', lemma: 'طَلَبَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'and asking' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from Him' },
            { surface: 'النَّصْرَ', lemma: 'نَصْر', pos: 'noun', features: 'def.acc', gloss: 'help' },
          ],
        },
        {
          id: 'qs-v6-c14-016',
          ar: 'وَلَمَّا تَوَجَّهَ تِلْقَاءَ مَدْيَنَ قَالَ عَسَى رَبِّي أَن يَهْدِيَنِي سَوَاءَ السَّبِيلِ﴾.',
          en: 'And when he turned his face toward Madyan, he said, "Perhaps my Lord will guide me to the right way."',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'adv', features: 'conj+adv', gloss: 'and when' },
            { surface: 'تَوَجَّهَ', lemma: 'تَوَجَّهَ', pos: 'verb', features: 'perf.3ms', gloss: 'to turn towards; turned' },
            { surface: 'تِلْقَاءَ', lemma: 'تِلْقَاءَ', pos: 'noun', features: 'acc', root: 'ل ق ي', gloss: 'toward' },
            { surface: 'مَدْيَنَ', lemma: 'مَدْيَن', pos: 'proper', features: 'gen', gloss: 'Madyan' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'عَسَى', lemma: 'عَسَى', pos: 'verb', features: 'perf.3ms', gloss: 'perhaps' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَهْدِيَنِي', lemma: 'هَدَى', pos: 'verb', features: 'subj.3ms+1s', gloss: 'to guide; guide me' },
            { surface: 'سَوَاءَ', lemma: 'سَوَاء', pos: 'noun', features: 'acc.constr', gloss: 'the right of' },
            { surface: 'السَّبِيلِ', lemma: 'سَبِيل', pos: 'noun', features: 'def.gen', gloss: 'the way' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ خَرَجَ مُوسَى مِنْ مِصْرَ؟',
          options: ['خَائِفاً يَتَرَقَّبُ، عَلَى اسْمِ اللَّهِ يَدْعُوهُ وَيَطْلُبُ مِنْهُ النَّصْرَ', 'مُطْمَئِنّاً لَا يَخَافُ شَيْئاً', 'مَعَ جَيْشٍ كَبِيرٍ'],
          answer: 0,
          qEn: 'How did Mūsā leave Egypt?',
          optionsEn: ['Afraid and watchful, in the name of Allah, calling upon Him and asking for help', 'Calm, fearing nothing', 'With a large army'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَكِنَّهَا',
        post: 'سَعِيدَةٌ لِأَنَّهَا بَعِيدَةٌ مِنْ فِرْعَوْنَ.',
        en: 'But it was a fortunate land, because it was far from Pharaoh.',
        options: ['بِلَادٌ', 'بِلَادٍ', 'بِلَاداً', 'الْبِلَادُ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- predicate of the implied كَانَ/إنّ-type sentence, matching the taught pattern.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Accusative -- wrong case; this is a nominal predicate, not an accusative complement.',
          'Definite -- wrong; the predicate describing an unspecified quality of the land is indefinite.',
        ],
      },
      {
        type: 'cloze',
        pre: 'أَلْهَمَ اللَّهُ مُوسَى',
        post: 'يَذْهَبَ إِلَى مَدْيَنَ.',
        en: 'Allah inspired Mūsā to go to Madyan.',
        options: ['أَنْ', 'أَنَّ', 'إِنَّ', 'كَأَنَّ'],
        answer: 0,
        rationales: [
          'أَنْ + subjunctive -- the particle that introduces a purpose/result verbal clause, matching the taught pattern.',
          'أَنَّ -- wrong; this introduces a nominal (that-) clause with a noun/pronoun subject, not a verb directly.',
          'إِنَّ -- wrong; this is for emphatic statements, not purpose clauses.',
          'كَأَنَّ -- wrong meaning entirely ("as if").',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخَافُ الرَّجُلُ سَطْوَةَ فِرْعَوْنَ',
        pre: '',
        post: 'سَطْوَةَ فِرْعَوْنَ',
        targetPerson: 'هُنَّ',
        targetEn: 'they (f.)',
        options: ['يَخَفْنَ', 'يَخَافُ', 'تَخَافُ', 'نَخَافُ'],
        answer: 0,
        rationales: [
          '3rd feminine plural -- matches هُنَّ.',
          '3rd masculine singular -- he, the form already given.',
          '3rd feminine singular / 2nd masculine singular -- wrong number.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَخَافُ الرَّجُلُ سَطْوَةَ فِرْعَوْنَ',
        pre: '',
        post: 'سَطْوَةَ فِرْعَوْنَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَخَافُ', 'يَخَافُ', 'تَخَافُ', 'أَخَافُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular / 3rd feminine singular -- wrong person.',
          '1st singular -- I.',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 9, chapter 10 -- هَدِيَّةُ مُسَاوَمَةٍ.
// Printed page 230, from its own heading box (right after ch9's closing
// sentence) to the bottom of the page, ending right before ch11's heading
// الْمَلِكَةُ تَأْتِي خَاضِعَةً on page 231. Transcribed by hand from the scan
// (vision OCR, 200dpi render) against ../CHAPTER-FORMAT.md.
//
// When the pillars of her state begin flattering her with talk of their
// own strength and numbers -- courtiers in every age -- the Queen refuses
// their counsel, warns them of a bad outcome, and reminds them how
// conquering kings' conquered nations end after defeat. She decides on a
// test instead of war: send Sulaymān gifts and fine curios; if he accepts
// them, he is only a king, to be fought; if he refuses them, he is a
// Prophet, to be followed.
//
// Grammar / lexical notes:
//   -- مَفْتُوحَة (unit 007, "conquered") is the passive participle of the
//      already-taught verb فَتَحَ, kept as its own distinct lemma per the
//      participle-as-distinct-lemma convention.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): بَدَأَ، أَدْلَى، كَثْرَة،
//      شَأْن، جَلِيس، حَاكِم، أَرْسَلَ، اِمْتَحَنَ، قَبِلَ، اِتَّبَعَ، مَلِك، اللَّه،
//      دَوْلَة، أُمَّة، بِلَاد، سِيرَة، فَاتِح، سُلَيْمَان، هُوَ
//      are all already taught and are NOT re-listed in newWords here.
//
// 14 new words (قُوَّة، إِرْضَاء، تَمَلُّق، حَذَّرَ، سُوء، عَاقِبَة، ذَكَّرَ، مَفْتُوح،
// مَصِير، هَزِيمَة، اِنْكِسَار، هَدِيَّة، ظَرْف، قَاتَلَ).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch10',
  title: { ar: 'هَدِيَّةُ مُسَاوَمَةٍ', en: 'A Bargaining Gift' },
  newWords: ['قُوَّة', 'إِرْضَاء', 'تَمَلُّق', 'حَذَّرَ', 'سُوء', 'عَاقِبَة', 'ذَكَّرَ', 'مَفْتُوح', 'مَصِير', 'هَزِيمَة', 'اِنْكِسَار', 'هَدِيَّة', 'ظَرْف', 'قَاتَلَ'],
  lemmas: {
    قُوَّة: { gloss: 'strength, power' },
    إِرْضَاء: { gloss: 'pleasing, appeasement' },
    تَمَلُّق: { gloss: 'flattery' },
    حَذَّرَ: { gloss: 'to warn' },
    سُوء: { gloss: 'bad, evil (of an outcome)' },
    عَاقِبَة: { gloss: 'an outcome, consequence' },
    ذَكَّرَ: { gloss: 'to remind' },
    مَفْتُوح: { gloss: 'conquered' },
    مَصِير: { gloss: 'a fate, destiny' },
    هَزِيمَة: { gloss: 'a defeat' },
    اِنْكِسَار: { gloss: 'a rout, breaking' },
    هَدِيَّة: { gloss: 'a gift' },
    ظَرْف: { gloss: 'a fine curio' },
    قَاتَلَ: { gloss: 'to fight' },
  },
  paragraphs: [
    {
      en: "And when the pillars of her state began speaking up about their own strength and the number of their troops, out of appeasement and flattery -- as courtiers of kings and rulers do in every age and place -- she did not accept their words nor agree with them on it; rather, she warned them of a bad outcome and reminded them of the history of conquering kings among conquered nations, and their fate after defeat and rout, and said: this will be the fate of our land and our nation. And she said to them: I shall send Sulaymān gifts and fine curios and test him with them; if he accepts the gift, he is only a king, so fight him, but if he does not accept it, he is a Prophet, so follow him.",
      sentences: [
        {
          id: 'qs-v9-c10-001',
          ar: 'وَلَمَّا بَدَأَ أَرْكَانُ دَوْلَتِهَا يُدْلُونَ بِقُوَّتِهِمْ وَكَثْرَةِ جُيُوشِهِمْ',
          en: 'And when the pillars of her state began speaking up about their own strength and the number of their troops,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'and when' },
            { surface: 'بَدَأَ', lemma: 'بَدَأَ', pos: 'verb', features: 'perf.3ms', gloss: 'to begin; began' },
            { surface: 'أَرْكَانُ', lemma: 'رُكْن', pos: 'noun', features: 'pl.constr.nom', gloss: 'the pillars of' },
            { surface: 'دَوْلَتِهَا', lemma: 'دَوْلَة', pos: 'noun', features: 'gen+3fs', gloss: 'her state' },
            { surface: 'يُدْلُونَ', lemma: 'أَدْلَى', pos: 'verb', features: 'impf.3mp', gloss: 'to speak up, put forth; speaking up' },
            { surface: 'بِقُوَّتِهِمْ', lemma: 'قُوَّة', pos: 'noun', features: 'prep+gen+3mp', root: 'ق و ي', gloss: 'about their strength' },
            { surface: 'وَكَثْرَةِ', lemma: 'كَثْرَة', pos: 'noun', features: 'conj+constr.gen', gloss: 'and the number of' },
            { surface: 'جُيُوشِهِمْ', lemma: 'جَيْش', pos: 'noun', features: 'pl.gen+3mp', gloss: 'their troops' },
          ],
        },
        {
          id: 'qs-v9-c10-002',
          ar: 'إِرْضَاءً وَتَمَلُّقاً،',
          en: 'out of appeasement and flattery,',
          tokens: [
            { surface: 'إِرْضَاءً', lemma: 'إِرْضَاء', pos: 'noun', features: 'indef.acc', root: 'ر ض ي', gloss: 'appeasement' },
            { surface: 'وَتَمَلُّقاً', lemma: 'تَمَلُّق', pos: 'noun', features: 'conj+indef.acc', root: 'م ل ق', gloss: 'and flattery' },
          ],
        },
        {
          id: 'qs-v9-c10-003',
          ar: 'شَأْنَ جُلَسَاءِ الْمُلُوكِ وَالْحُكَّامِ فِي كُلِّ زَمَانٍ وَمَكَانٍ،',
          en: 'as courtiers of kings and rulers do in every age and place,',
          tokens: [
            { surface: 'شَأْنَ', lemma: 'شَأْن', pos: 'noun', features: 'acc.constr', gloss: 'the way of' },
            { surface: 'جُلَسَاءِ', lemma: 'جَلِيس', pos: 'noun', features: 'pl.constr.gen', gloss: 'the courtiers of' },
            { surface: 'الْمُلُوكِ', lemma: 'مَلِك', pos: 'noun', features: 'pl.def.gen', gloss: 'kings' },
            { surface: 'وَالْحُكَّامِ', lemma: 'حَاكِم', pos: 'noun', features: 'conj+pl.def.gen', gloss: 'and rulers' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'زَمَانٍ', lemma: 'زَمَن', pos: 'noun', features: 'indef.gen', gloss: 'age' },
            { surface: 'وَمَكَانٍ', lemma: 'مَكَان', pos: 'noun', features: 'conj+indef.gen', gloss: 'and place' },
          ],
        },
        {
          id: 'qs-v9-c10-004',
          ar: 'لَمْ تَقْبَلْ مَقَالَتَهُمْ',
          en: 'she did not accept their words',
          tokens: [
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'did not' },
            { surface: 'تَقْبَلْ', lemma: 'قَبِلَ', pos: 'verb', features: 'impf.3fs', gloss: 'to accept; accept' },
            { surface: 'مَقَالَتَهُمْ', lemma: 'مَقَالَة', pos: 'noun', features: 'acc+3mp', gloss: 'their words' },
          ],
        },
        {
          id: 'qs-v9-c10-005',
          ar: 'وَلَمْ تُوَافِقْهُمْ عَلَيْهَا،',
          en: 'nor agree with them on it;',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and did not' },
            { surface: 'تُوَافِقْهُمْ', lemma: 'وَافَقَ', pos: 'verb', features: 'impf.3fs+3mp', gloss: 'to agree with; agree with them' },
            { surface: 'عَلَيْهَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+3fs', gloss: 'on it' },
          ],
        },
        {
          id: 'qs-v9-c10-006',
          ar: 'بَلْ حَذَّرَتْهُمْ مِنْ سُوءِ الْعَاقِبَةِ',
          en: 'rather, she warned them of a bad outcome',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'حَذَّرَتْهُمْ', lemma: 'حَذَّرَ', pos: 'verb', features: 'perf.3fs+3mp', root: 'ح ذ ر', gloss: 'to warn; warned them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'سُوءِ', lemma: 'سُوء', pos: 'noun', features: 'constr.gen', gloss: 'the badness of' },
            { surface: 'الْعَاقِبَةِ', lemma: 'عَاقِبَة', pos: 'noun', features: 'def.gen', root: 'ع ق ب', gloss: 'the outcome' },
          ],
        },
        {
          id: 'qs-v9-c10-007',
          ar: 'وَذَكَّرَتْهُمْ بِسِيرَةِ الْمُلُوكِ الْفَاتِحِينَ فِي الْأُمَمِ الْمَفْتُوحَةِ',
          en: 'and reminded them of the history of conquering kings among conquered nations,',
          tokens: [
            { surface: 'وَذَكَّرَتْهُمْ', lemma: 'ذَكَّرَ', pos: 'verb', features: 'conj+perf.3fs+3mp', gloss: 'to remind; and reminded them' },
            { surface: 'بِسِيرَةِ', lemma: 'سِيرَة', pos: 'noun', features: 'prep+constr.gen', gloss: 'of the history of' },
            { surface: 'الْمُلُوكِ', lemma: 'مَلِك', pos: 'noun', features: 'pl.def.gen', gloss: 'the kings' },
            { surface: 'الْفَاتِحِينَ', lemma: 'فَاتِح', pos: 'noun', features: 'pl.def.gen', gloss: 'the conquering' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْأُمَمِ', lemma: 'أُمَّة', pos: 'noun', features: 'pl.def.gen', gloss: 'the nations' },
            { surface: 'الْمَفْتُوحَةِ', lemma: 'مَفْتُوح', pos: 'adj', features: 'def.gen.f', root: 'ف ت ح', gloss: 'the conquered' },
          ],
        },
        {
          id: 'qs-v9-c10-008',
          ar: 'وَمَصِيرِهَا بَعْدَ الْهَزِيمَةِ وَالِانْكِسَارِ،',
          en: 'and their fate after defeat and rout,',
          tokens: [
            { surface: 'وَمَصِيرِهَا', lemma: 'مَصِير', pos: 'noun', features: 'conj+gen+3fs', root: 'ص ي ر', gloss: 'and their fate' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'adv', features: 'adv', gloss: 'after' },
            { surface: 'الْهَزِيمَةِ', lemma: 'هَزِيمَة', pos: 'noun', features: 'def.gen', root: 'ه ز م', gloss: 'defeat' },
            { surface: 'وَالِانْكِسَارِ', lemma: 'اِنْكِسَار', pos: 'noun', features: 'conj+def.gen', root: 'ك س ر', gloss: 'and rout' },
          ],
        },
        {
          id: 'qs-v9-c10-009',
          ar: 'وَقَالَتْ: سَيَكُونُ هَذَا شَأْنَ بِلَادِنَا وَأُمَّتِنَا،',
          en: 'and said: this will be the fate of our land and our nation.',
          tokens: [
            { surface: 'وَقَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to say; and said' },
            { surface: 'سَيَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'part+impf.3ms', gloss: 'to be; will be' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem', gloss: 'this' },
            { surface: 'شَأْنَ', lemma: 'شَأْن', pos: 'noun', features: 'acc.constr', gloss: 'the fate of' },
            { surface: 'بِلَادِنَا', lemma: 'بِلَاد', pos: 'noun', features: 'gen+1p', gloss: 'our land' },
            { surface: 'وَأُمَّتِنَا', lemma: 'أُمَّة', pos: 'noun', features: 'conj+gen+1p', gloss: 'and our nation' },
          ],
        },
        {
          id: 'qs-v9-c10-010',
          ar: 'وَقَالَتْ لَهُمْ: إِنَّنِي سَأُرْسِلُ إِلَى سُلَيْمَانَ بِهَدَايَا وَظُرَفٍ',
          en: 'And she said to them: I shall send Sulaymān gifts and fine curios',
          tokens: [
            { surface: 'وَقَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to say; and said' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'إِنَّنِي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'سَأُرْسِلُ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'part+impf.1s', gloss: 'to send; I shall send' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'سُلَيْمَانَ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'gen', gloss: 'Sulaymān' },
            { surface: 'بِهَدَايَا', lemma: 'هَدِيَّة', pos: 'noun', features: 'prep+pl.indef.gen', gloss: 'with gifts' },
            { surface: 'وَظُرَفٍ', lemma: 'ظَرْف', pos: 'noun', features: 'conj+pl.indef.gen', gloss: 'and fine curios' },
          ],
        },
        {
          id: 'qs-v9-c10-011',
          ar: 'فَأَمْتَحِنُهُ بِهَا،',
          en: 'and test him with them;',
          tokens: [
            { surface: 'فَأَمْتَحِنُهُ', lemma: 'اِمْتَحَنَ', pos: 'verb', features: 'conj+impf.1s+3ms', gloss: 'to test; and I test him' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fp', gloss: 'with them' },
          ],
        },
        {
          id: 'qs-v9-c10-012',
          ar: 'فَإِنْ قَبِلَ الْهَدِيَّةَ فَهُوَ مَلِكٌ فَقَاتِلُوهُ،',
          en: 'if he accepts the gift, he is only a king, so fight him,',
          tokens: [
            { surface: 'فَإِنْ', lemma: 'إِنْ', pos: 'part', features: 'conj+part', gloss: 'so if' },
            { surface: 'قَبِلَ', lemma: 'قَبِلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to accept; he accepts' },
            { surface: 'الْهَدِيَّةَ', lemma: 'هَدِيَّة', pos: 'noun', features: 'def.acc', gloss: 'the gift' },
            { surface: 'فَهُوَ', lemma: 'هُوَ', pos: 'part', features: 'conj+part', gloss: 'then he' },
            { surface: 'مَلِكٌ', lemma: 'مَلِك', pos: 'noun', features: 'indef.nom', gloss: 'a king' },
            { surface: 'فَقَاتِلُوهُ', lemma: 'قَاتَلَ', pos: 'verb', features: 'conj+imp.2mp+3ms', root: 'ق ت ل', gloss: 'to fight; so fight him' },
          ],
        },
        {
          id: 'qs-v9-c10-013',
          ar: 'وَإِنْ لَمْ يَقْبَلْهَا فَهُوَ نَبِيٌّ فَاتَّبِعُوهُ.',
          en: 'but if he does not accept it, he is a Prophet, so follow him.',
          tokens: [
            { surface: 'وَإِنْ', lemma: 'إِنْ', pos: 'part', features: 'conj+part', gloss: 'and if' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَقْبَلْهَا', lemma: 'قَبِلَ', pos: 'verb', features: 'impf.3ms+3fs', gloss: 'to accept; he accepts it' },
            { surface: 'فَهُوَ', lemma: 'هُوَ', pos: 'part', features: 'conj+part', gloss: 'then he' },
            { surface: 'نَبِيٌّ', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.nom', gloss: 'a Prophet' },
            { surface: 'فَاتَّبِعُوهُ', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'conj+imp.2mp+3ms', gloss: 'to follow; so follow him' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَتِ الْمَلِكَةُ حِينَ حَاوَلَ رِجَالُهَا إِرْضَاءَهَا بِالْحَدِيثِ عَنْ قُوَّتِهِمْ؟',
          options: ['لَمْ تَقْبَلْ مَقَالَتَهُمْ وَحَذَّرَتْهُمْ مِنْ سُوءِ الْعَاقِبَةِ', 'وَافَقَتْهُمْ فَوْراً عَلَى الْحَرْبِ', 'طَرَدَتْهُمْ مِنْ مَجْلِسِهَا'],
          answer: 0,
          qEn: "What did the queen do when her men tried to please her by speaking of their strength?",
          optionsEn: ['She did not accept their words and warned them of a bad outcome', 'She agreed with them at once to go to war', 'She expelled them from her council'],
        },
        {
          q: 'بِمَاذَا قَرَّرَتِ الْمَلِكَةُ أَنْ تَخْتَبِرَ سُلَيْمَانَ؟',
          options: ['بِإِرْسَالِ هَدَايَا وَظُرَفٍ إِلَيْهِ', 'بِإِعْلَانِ الْحَرْبِ عَلَيْهِ مُبَاشَرَةً', 'بِتَجَاهُلِ كِتَابِهِ تَمَاماً'],
          answer: 0,
          qEn: 'How did the queen decide to test Sulaymān?',
          optionsEn: ['By sending him gifts and fine curios', 'By declaring war on him directly', 'By ignoring his letter entirely'],
        },
        {
          q: 'مَاذَا سَيَدُلُّ قَبُولُ سُلَيْمَانَ لِلْهَدِيَّةِ أَوْ رَفْضُهُ لَهَا بِحَسَبِ قَوْلِ الْمَلِكَةِ؟',
          options: ['إِنْ قَبِلَهَا فَهُوَ مَلِكٌ يُقَاتَلُ، وَإِنْ رَفَضَهَا فَهُوَ نَبِيٌّ يُتَّبَعُ', 'قَبُولُهُ يَعْنِي أَنَّهُ صَدِيقٌ، وَرَفْضُهُ يَعْنِي أَنَّهُ عَدُوٌّ', 'لَا فَرْقَ بَيْنَ قَبُولِهِ وَرَفْضِهِ'],
          answer: 0,
          qEn: "According to the queen, what would Sulaymān's accepting or refusing the gift show?",
          optionsEn: ['If he accepts it he is a king to be fought; if he refuses it he is a Prophet to be followed', 'Accepting means he is a friend, refusing means he is an enemy', 'There is no difference between accepting and refusing'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَمَّا بَدَأَ أَرْكَانُ دَوْلَتِهَا يُدْلُونَ',
        post: 'وَكَثْرَةِ جُيُوشِهِمْ.',
        en: 'And when the pillars of her state began speaking up about their own strength and the number of their troops.',
        options: ['بِقُوَّتِهِمْ', 'قُوَّتُهُمْ', 'قُوَّتَهُمْ', 'لِقُوَّتِهِمْ'],
        answer: 0,
        rationales: [
          'Genitive, with the preposition بِ -- object of يُدْلُونَ بِ ("speak up about"), matching the printed يُدْلُونَ بِقُوَّتِهِمْ.',
          'Nominative, no preposition -- wrong; the verb يُدْلُونَ takes its object with بِ, not as a bare subject.',
          'Accusative, no preposition -- wrong case; the verb governs this word through بِ, not directly.',
          'With لِ instead of بِ -- wrong preposition; the idiom is أَدْلَى بِ, not أَدْلَى لِ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَتِ الْمَلِكَةُ: إِنَّنِي',
        post: 'إِلَى سُلَيْمَانَ بِهَدَايَا.',
        en: 'The queen said: I shall send Sulaymān gifts.',
        options: ['سَأُرْسِلُ', 'أَرْسَلْتُ', 'أُرْسِلُ', 'سَتُرْسِلُ'],
        answer: 0,
        rationales: [
          'Future particle سَـ + 1st singular imperfect -- matches the printed سَأُرْسِلُ.',
          'Perfect -- wrong tense; the queen is announcing a future plan, not something already done.',
          'Plain imperfect without سَـ -- missing the future marker the printed text carries.',
          '2nd/3rd feminine singular -- wrong person; the speaker refers to herself, "I."',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَإِنْ قَبِلَ الْهَدِيَّةَ فَهُوَ مَلِكٌ',
        post: '.',
        en: 'if he accepts the gift, he is only a king, so fight him.',
        options: ['فَقَاتِلُوهُ', 'فَقَاتِلْهُ', 'قَاتَلَهُ', 'فَيُقَاتِلُهُ'],
        answer: 0,
        rationales: [
          'Imperative, 2nd masculine plural + object suffix -- addressed to the councillors as a group, matching the printed فَقَاتِلُوهُ.',
          'Imperative, 2nd masculine singular -- wrong number; the queen addresses several men, not one.',
          'Perfect -- wrong; this is a command about a hypothetical future, not a completed action.',
          '3rd masculine singular imperfect -- wrong; the sentence needs a command, not a description.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُحَذِّرُ الرَّجُلُ قَوْمَهُ مِنْ سُوءِ الْعَاقِبَةِ',
        pre: '',
        post: 'قَوْمَهُ مِنْ سُوءِ الْعَاقِبَةِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تُحَذِّرُ', 'يُحَذِّرُ', 'أُحَذِّرُ', 'نُحَذِّرُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- the base form, not shifted to "she."',
          '1st singular -- wrong person; the target is "she," not "I."',
          '1st plural -- wrong person; the target is "she," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'أَقْبَلُ الْهَدِيَّةَ مِنَ الْمَلِكِ',
        pre: '',
        post: 'الْهَدِيَّةَ مِنَ الْمَلِكِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَقْبَلُونَ', 'أَقْبَلُ', 'تَقْبَلُ', 'نَقْبَلُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '1st singular -- the base form, not shifted to "they."',
          '3rd feminine singular -- wrong person and gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'نُقَاتِلُ الْمَلِكَ الظَّالِمَ',
        pre: '',
        post: 'الْمَلِكَ الظَّالِمَ',
        targetPerson: 'أَنتُمْ',
        targetEn: 'you (pl.)',
        options: ['تُقَاتِلُونَ', 'نُقَاتِلُ', 'يُقَاتِلُ', 'أُقَاتِلُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنتُمْ.',
          '1st plural -- the base form, not shifted to "you (pl.)."',
          '3rd masculine singular -- wrong person; the target is "you," not "he."',
          '1st singular -- wrong person; the target is "you," not "I."',
        ],
      },
    ],
  },
};

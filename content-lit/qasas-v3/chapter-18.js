// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 18 -- السَّفِينَةُ.
// Printed pages 78 (from its own heading, right after ch17's closing
// line, down to the bottom) through 79 (top three sentences only,
// ending right before ch19's heading الطُّوفَانُ partway down the same
// page). Transcribed by hand from the scan (vision OCR, 300dpi render)
// against ../CHAPTER-FORMAT.md.
//
// Allah answers Nūḥ's supplication and resolves to drown his people --
// but wills equally that Nūḥ and the believers be saved -- so He orders
// Nūḥ to build a great ship. Nūḥ begins building it, and his people,
// seeing him at this strange work, find something to mock: ordinary
// folk taunt him for suddenly becoming a carpenter after a lifetime
// among the "lowest of the low," and demand to know how a ship in the
// middle of dry land is even supposed to move -- carried by jinn, dragged
// by oxen, walking on sand, or climbing a mountain? Nūḥ hears every jeer
// and bears it patiently, having already borne worse; he answers them,
// sometimes, with the Qur'an's own words (Sūrat Hūd 11:38): if you mock
// us, we will mock you back just as you mock now.
//
// Grammar / lexical notes:
//   -- Every long printed sentence is split at its natural clause/
//      question-mark/comma boundary into multiple shorter entries here
//      (house convention, ch7/ch9/ch10/ch12-17) -- no rewording, same
//      printed text and order. The closing Qur'an quote (Hūd 11:38,
//      qs-v3-c18-021) is kept in its own ﴿﴾-wrapped sentence, separated
//      from its narrating "he used to tell them sometimes:" clause.
//   -- دَعْوَة (new, "a call, supplication," a verbal noun) is a distinct
//      lemma from the already-taught verb دَعَا -- matches the corpus's
//      noun-beside-verb-same-root convention (رِسَالَة/رَسُول-style,
//      already used for نَذِير/أَنذَرَ and نَصِيحَة/نَصَحَ).
//   -- شُغْل (new, "work, a task, an occupation") is a near-synonym of
//      the already-taught عَمَل/عَمِلَ ("work"/"to work") but a distinct
//      printed word with its own lemma -- the book uses شُغْل
//      specifically for Nūḥ's shipbuilding, which his people find
//      bewildering precisely because it looks like no work they
//      recognize.
//   -- نَجَّار ("a carpenter") and نَجَا ("to be saved") are unrelated
//      despite the visual resemblance -- different roots (ن ج ر vs
//      ن ج و) and no connection in meaning; both happen to appear in
//      this same chapter (Nūḥ becomes a نَجَّار in order that his people
//      might يَنْجُوَ), which is exactly why it is worth flagging here to
//      prevent the two from being confused with each other later.
//   -- أَشَدّ (new, elative "more intense, worse") is its own lemma,
//      distinct from the already-taught adjective شَدِيد, matching the
//      corpus's elative-as-distinct-lemma convention already used for
//      أَكْبَر beside كَبِير.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): أَجَابَ، اللَّه، أَرَادَ،
//      أَنْ، لَكِنَّ، يُرِيدُ، كَذَلِكَ، مُؤْمِن، أَمَرَ، رَأَى، هَذَا، وَجَدَ، صَارَ،
//      مِنْ، مَا، يَا، نُوح، مَتَى، كُنَّا، قَالَ، لَكَ، لا، جَلَسَ، إِلَى، هَؤُلَاءِ،
//      أَرْذَل، كَلَام، سَمِعَ، أَيْنَ، مَشَى، هَذِهِ، إِنَّ، أَمْر، كُلّ، عَلَى، جَبَل،
//      بَحْر، هُنَا، بَعِيد، جِدّ، هَلْ، حَمَلَ، أَمْ، كَانَ، يَصْبِرُ، صَبَرَ، قَدْ،
//      سَمِعَ، إِن، كَمَا
//      are all already taught and are NOT re-listed in newWords here.
//
// 17 new words (أَغْرَقَ، نَجَا، دَعْوَة، صَنَعَ، سَفِينَة، شُغْل، سَخِرَ، نَجَّار،
// حَدَّاد، عَجَب، رَمْل، صَعِدَ، جِنّ، جَرَّ، ثَوْر، أَشَدّ، أَحْيَان) -- the
// densest chapter yet, since it opens an entirely new semantic field
// (shipbuilding, mockery, trades, animals and terrain) that nothing
// earlier in the book has touched.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch18',
  title: { ar: 'السَّفِينَةُ', en: 'The Ship' },
  newWords: ['أَغْرَقَ', 'نَجَا', 'دَعْوَة', 'صَنَعَ', 'سَفِينَة', 'شُغْل', 'سَخِرَ', 'نَجَّار', 'حَدَّاد', 'عَجَب', 'رَمْل', 'صَعِدَ', 'جِنّ', 'جَرَّ', 'ثَوْر', 'أَشَدّ', 'أَحْيَان'],
  lemmas: {
    أَغْرَقَ: { gloss: 'to drown, cause to drown' },
    نَجَا: { gloss: 'to be saved, escape' },
    دَعْوَة: { gloss: 'a call, a supplication' },
    صَنَعَ: { gloss: 'to make, build, craft' },
    سَفِينَة: { gloss: 'a ship' },
    شُغْل: { gloss: 'work, a task, an occupation' },
    سَخِرَ: { gloss: 'to mock, ridicule' },
    نَجَّار: { gloss: 'a carpenter' },
    حَدَّاد: { gloss: 'a blacksmith' },
    عَجَب: { gloss: 'a wonder, a strange thing' },
    رَمْل: { gloss: 'sand' },
    صَعِدَ: { gloss: 'to climb, ascend' },
    جِنّ: { gloss: 'jinn' },
    جَرَّ: { gloss: 'to pull, drag' },
    ثَوْر: { gloss: 'a bull, an ox' },
    أَشَدّ: { gloss: 'more intense, worse' },
    أَحْيَان: { gloss: 'times, occasions' },
  },
  paragraphs: [
    {
      en: 'Allah answered Nūḥ\'s supplication and resolved to drown his people, but Allah willed equally that Nūḥ and the believers be saved. So He ordered Nūḥ to build a great ship. Nūḥ began building a great ship. His people saw him at this work and found something to mock.',
      sentences: [
        {
          id: 'qs-v3-c18-001',
          ar: 'وَأَجَابَ اللَّهُ دَعْوَةَ نُوحٍ',
          en: "Allah answered Nūḥ's supplication",
          tokens: [
            { surface: 'وَأَجَابَ', lemma: 'أَجَابَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to answer; and answered' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'دَعْوَةَ', lemma: 'دَعْوَة', pos: 'noun', features: 'acc.constr', root: 'د ع و', gloss: 'the supplication of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v3-c18-002',
          ar: 'وَأَرَادَ أَنْ يُغْرِقَ قَوْمَهُ',
          en: 'and resolved to drown his people,',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want, resolve; and resolved' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُغْرِقَ', lemma: 'أَغْرَقَ', pos: 'verb', features: 'impf.3ms', root: 'غ ر ق', gloss: 'to drown; drown' },
            { surface: 'قَوْمَهُ', lemma: 'قَوْم', pos: 'noun', features: 'acc+3ms', gloss: 'his people' },
          ],
        },
        {
          id: 'qs-v3-c18-003',
          ar: 'وَلَكِنَّ اللَّهَ يُرِيدُ كَذَلِكَ أَنْ يَنْجُوَ نُوحٌ وَالْمُؤْمِنُونَ.',
          en: 'but Allah willed equally that Nūḥ and the believers be saved.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'يُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3ms', gloss: 'to want, will; wills' },
            { surface: 'كَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'adv', gloss: 'equally, likewise' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَنْجُوَ', lemma: 'نَجَا', pos: 'verb', features: 'impf.3ms', root: 'ن ج و', gloss: 'to be saved; be saved' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'وَالْمُؤْمِنُونَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'conj+def.nom.pl', gloss: 'and the believers' },
          ],
        },
        {
          id: 'qs-v3-c18-004',
          ar: 'فَأَمَرَ نُوْحاً أَنْ يَصْنَعَ سَفِينَةً كَبِيرَةً.',
          en: 'So He ordered Nūḥ to build a great ship.',
          tokens: [
            { surface: 'فَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to order; so He ordered' },
            { surface: 'نُوْحاً', lemma: 'نُوح', pos: 'proper', features: 'acc', gloss: 'Nūḥ' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَصْنَعَ', lemma: 'صَنَعَ', pos: 'verb', features: 'impf.3ms', root: 'ص ن ع', gloss: 'to make, build; build' },
            { surface: 'سَفِينَةً', lemma: 'سَفِينَة', pos: 'noun', features: 'indef.acc', root: 'س ف ن', gloss: 'a ship' },
            { surface: 'كَبِيرَةً', lemma: 'كَبِير', pos: 'adj', features: 'indef.acc.f', gloss: 'great, large' },
          ],
        },
        {
          id: 'qs-v3-c18-005',
          ar: 'وَبَدَأَ نُوْحٌ يَصْنَعُ سَفِينَةً كَبِيرَةً.',
          en: 'Nūḥ began building a great ship.',
          tokens: [
            { surface: 'وَبَدَأَ', lemma: 'بَدَأَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to begin; and began' },
            { surface: 'نُوْحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'يَصْنَعُ', lemma: 'صَنَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to make, build; building' },
            { surface: 'سَفِينَةً', lemma: 'سَفِينَة', pos: 'noun', features: 'indef.acc', gloss: 'a ship' },
            { surface: 'كَبِيرَةً', lemma: 'كَبِير', pos: 'adj', features: 'indef.acc.f', gloss: 'great, large' },
          ],
        },
        {
          id: 'qs-v3-c18-006',
          ar: 'وَرَآهُ قَوْمُهُ فِي هَذَا الشُّغْلِ فَوَجَدُوا شُغْلاً.',
          en: 'His people saw him at this work and found something to mock.',
          tokens: [
            { surface: 'وَرَآهُ', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to see; and saw him' },
            { surface: 'قَوْمُهُ', lemma: 'قَوْم', pos: 'noun', features: 'nom+3ms', gloss: 'his people' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الشُّغْلِ', lemma: 'شُغْل', pos: 'noun', features: 'def.gen', root: 'ش غ ل', gloss: 'the work, task' },
            { surface: 'فَوَجَدُوا', lemma: 'وَجَدَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to find; so they found' },
            { surface: 'شُغْلاً', lemma: 'شُغْل', pos: 'noun', features: 'indef.acc', gloss: 'work, an occupation (i.e. something to mock)' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا أَمَرَ اللَّهُ نُوحاً أَنْ يَصْنَعَ سَفِينَةً؟',
          options: [
            'لِأَنَّ اللَّهَ أَرَادَ أَنْ يُغْرِقَ قَوْمَهُ وَيُنْجِيَ نُوحاً وَالْمُؤْمِنِينَ',
            'لِأَنَّ نُوحاً أَرَادَ أَنْ يُسَافِرَ إِلَى بَلَدٍ بَعِيدٍ',
            'لِأَنَّ قَوْمَهُ طَلَبُوا مِنْهُ ذَلِكَ'
          ],
          answer: 0,
          qEn: 'Why did Allah order Nūḥ to build a ship?',
          optionsEn: [
            'Because Allah willed to drown his people and save Nūḥ and the believers',
            'Because Nūḥ wanted to travel to a distant land',
            'Because his people had asked him to'
          ],
        },
      ],
    },
    {
      en: 'They started to mock him. "What is this, Nūḥ? Since when have you become a carpenter? Didn\'t we tell you not to sit with these lowest of people? But you didn\'t listen to our words -- you sat with the carpenters and the blacksmiths, and so you became a carpenter! And where is this ship even going to travel, Nūḥ? Your whole affair is a wonder. Will it walk on the sand, or climb the mountain? The sea is very far from here -- will the jinn carry it, or will oxen drag it?',
      sentences: [
        {
          id: 'qs-v3-c18-007',
          ar: 'وَصَارُوا يَسْخَرُونَ مِنْهُ.',
          en: 'They started to mock him.',
          tokens: [
            { surface: 'وَصَارُوا', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to become; and began to' },
            { surface: 'يَسْخَرُونَ', lemma: 'سَخِرَ', pos: 'verb', features: 'impf.3mp', root: 'س خ ر', gloss: 'to mock; mock' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'at him' },
          ],
        },
        {
          id: 'qs-v3-c18-008',
          ar: 'مَا هَذَا يَا نُوحُ؟',
          en: '"What is this, Nūḥ?',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'نُوحُ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v3-c18-009',
          ar: 'مِنْ مَتَى صِرْتَ نَجَّاراً؟',
          en: 'Since when have you become a carpenter?',
          tokens: [
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, since' },
            { surface: 'مَتَى', lemma: 'مَتَى', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'صِرْتَ', lemma: 'صَارَ', pos: 'verb', features: 'perf.2ms', gloss: 'to become; have you become' },
            { surface: 'نَجَّاراً', lemma: 'نَجَّار', pos: 'noun', features: 'indef.acc', root: 'ن ج ر', gloss: 'a carpenter' },
          ],
        },
        {
          id: 'qs-v3-c18-010',
          ar: 'أَمَا كُنَّا نَقُولُ لَكَ لا تَجْلِسْ إِلَى هَؤُلَاءِ الأَرَاذِلِ.',
          en: "Didn't we tell you not to sit with these lowest of people?",
          tokens: [
            { surface: 'أَمَا', lemma: 'أَمَا', pos: 'part', features: 'part', gloss: "did/does...not...? (interrogative-negative)" },
            { surface: 'كُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'perf.1p', gloss: 'to be; we were' },
            { surface: 'نَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.1p', gloss: 'to say; saying' },
            { surface: 'لَكَ', lemma: 'لِ', pos: 'prep', features: 'prep+2ms', gloss: 'to you' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَجْلِسْ', lemma: 'جَلَسَ', pos: 'verb', features: 'impf.2ms', gloss: 'to sit; do not sit' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'الأَرَاذِلِ', lemma: 'أَرْذَل', pos: 'noun', features: 'def.gen.pl', gloss: 'the lowest, most base ones' },
          ],
        },
        {
          id: 'qs-v3-c18-011',
          ar: 'وَلَكِنَّكَ مَا سَمِعْتَ كَلَامَنَا',
          en: "But you didn't listen to our words --",
          tokens: [
            { surface: 'وَلَكِنَّكَ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+2ms', gloss: 'but you' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'سَمِعْتَ', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.2ms', gloss: 'to hear, listen; you listened' },
            { surface: 'كَلَامَنَا', lemma: 'كَلَام', pos: 'noun', features: 'acc+1p', gloss: 'our words' },
          ],
        },
        {
          id: 'qs-v3-c18-012',
          ar: 'وَجَلَسْتَ إِلَى النَّجَّارِينَ وَالْحَدَّادِينَ فَصِرْتَ نَجَّاراً!',
          en: 'you sat with the carpenters and the blacksmiths, and so you became a carpenter!',
          tokens: [
            { surface: 'وَجَلَسْتَ', lemma: 'جَلَسَ', pos: 'verb', features: 'conj+perf.2ms', gloss: 'to sit; and you sat' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'النَّجَّارِينَ', lemma: 'نَجَّار', pos: 'noun', features: 'pl.def.gen', gloss: 'the carpenters' },
            { surface: 'وَالْحَدَّادِينَ', lemma: 'حَدَّاد', pos: 'noun', features: 'conj+pl.def.gen', root: 'ح د د', gloss: 'and the blacksmiths' },
            { surface: 'فَصِرْتَ', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.2ms', gloss: 'to become; and so you became' },
            { surface: 'نَجَّاراً', lemma: 'نَجَّار', pos: 'noun', features: 'indef.acc', gloss: 'a carpenter' },
          ],
        },
        {
          id: 'qs-v3-c18-013',
          ar: 'وَأَيْنَ تَمْشِي هَذِهِ السَّفِينَةُ يَا نُوحُ؟',
          en: 'And where is this ship even going to travel, Nūḥ?',
          tokens: [
            { surface: 'وَأَيْنَ', lemma: 'أَيْنَ', pos: 'adv', features: 'conj+adv', gloss: 'and where' },
            { surface: 'تَمْشِي', lemma: 'مَشَى', pos: 'verb', features: 'impf.3fs', gloss: 'to walk, travel; will travel' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'السَّفِينَةُ', lemma: 'سَفِينَة', pos: 'noun', features: 'def.nom', gloss: 'the ship' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'نُوحُ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v3-c18-014',
          ar: 'إِنَّ أَمْرَكَ كُلَّهُ عَجَبٌ.',
          en: 'Your whole affair is a wonder.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'أَمْرَكَ', lemma: 'أَمْر', pos: 'noun', features: 'acc+2ms', gloss: 'your affair' },
            { surface: 'كُلَّهُ', lemma: 'كُلّ', pos: 'noun', features: 'acc+3ms', gloss: 'all of it' },
            { surface: 'عَجَبٌ', lemma: 'عَجَب', pos: 'noun', features: 'indef.nom', root: 'ع ج ب', gloss: 'a wonder, strange thing' },
          ],
        },
        {
          id: 'qs-v3-c18-015',
          ar: 'أَتَمْشِي هَذِهِ فِي الرَّمْلِ أَمْ تَصْعَدُ الجَبَلَ؟',
          en: 'Will it walk on the sand, or climb the mountain?',
          tokens: [
            { surface: 'أَتَمْشِي', lemma: 'مَشَى', pos: 'verb', features: 'impf.3fs', gloss: 'to walk; will it walk' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'الرَّمْلِ', lemma: 'رَمْل', pos: 'noun', features: 'def.gen', root: 'ر م ل', gloss: 'the sand' },
            { surface: 'أَمْ', lemma: 'أَمْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'تَصْعَدُ', lemma: 'صَعِدَ', pos: 'verb', features: 'impf.3fs', root: 'ص ع د', gloss: 'to climb, ascend; will it climb' },
            { surface: 'الجَبَلَ', lemma: 'جَبَل', pos: 'noun', features: 'def.acc', gloss: 'the mountain' },
          ],
        },
        {
          id: 'qs-v3-c18-016',
          ar: 'الْبَحْرُ مِنْ هُنَا بَعِيدٌ جِدًّا،',
          en: 'The sea is very far from here --',
          tokens: [
            { surface: 'الْبَحْرُ', lemma: 'بَحْر', pos: 'noun', features: 'def.nom', gloss: 'the sea' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'هُنَا', lemma: 'هُنَا', pos: 'adv', features: 'adv', gloss: 'here' },
            { surface: 'بَعِيدٌ', lemma: 'بَعِيد', pos: 'adj', features: 'indef.nom', gloss: 'far' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', gloss: 'very' },
          ],
        },
        {
          id: 'qs-v3-c18-017',
          ar: 'هَلْ يَحْمِلُهَا الْجِنُّ أَمْ تَجُرُّهَا الثِّيرَانُ؟',
          en: 'will the jinn carry it, or will oxen drag it?',
          tokens: [
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: '(question particle)' },
            { surface: 'يَحْمِلُهَا', lemma: 'حَمَلَ', pos: 'verb', features: 'impf.3ms+3fs', gloss: 'to carry; will carry it' },
            { surface: 'الْجِنُّ', lemma: 'جِنّ', pos: 'noun', features: 'def.nom', root: 'ج ن ن', gloss: 'the jinn' },
            { surface: 'أَمْ', lemma: 'أَمْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'تَجُرُّهَا', lemma: 'جَرَّ', pos: 'verb', features: 'impf.3fs+3fs', root: 'ج ر ر', gloss: 'to pull, drag; will drag it' },
            { surface: 'الثِّيرَانُ', lemma: 'ثَوْر', pos: 'noun', features: 'pl.def.nom', root: 'ث و ر', gloss: 'the oxen' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ سَخِرَ قَوْمُ نُوحٍ مِنْهُ حِينَ رَأَوْهُ يَصْنَعُ السَّفِينَةَ؟',
          options: [
            'قَالُوا لَهُ: مِنْ مَتَى صِرْتَ نَجَّاراً؟ وَسَأَلُوهُ كَيْفَ تَمْشِي السَّفِينَةُ فِي الرَّمْلِ أَوِ الجَبَلِ',
            'سَاعَدُوهُ فِي بِنَاءِ السَّفِينَةِ',
            'طَلَبُوا مِنْهُ أَنْ يُعَلِّمَهُمُ النِّجَارَةَ'
          ],
          answer: 0,
          qEn: "How did Nūḥ's people mock him when they saw him building the ship?",
          optionsEn: [
            'They said: since when have you become a carpenter? And asked how the ship would travel on sand or up a mountain',
            'They helped him build the ship',
            'They asked him to teach them carpentry'
          ],
        },
      ],
    },
    {
      en: 'Nūḥ used to hear all of that and bear it patiently -- he had already heard worse than this, and endured it! But he used to tell them, sometimes: "If you mock us, we will mock you back, just as you mock now."',
      sentences: [
        {
          id: 'qs-v3-c18-018',
          ar: 'وَكَانَ نُوْحٌ يَسْمَعُ كُلَّ ذَلِكَ وَيَصْبِرُ،',
          en: 'Nūḥ used to hear all of that and bear it patiently --',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and used to' },
            { surface: 'نُوْحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'يَسْمَعُ', lemma: 'سَمِعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to hear; hear' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'all of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'وَيَصْبِرُ', lemma: 'صَبَرَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to be patient, endure; and bear it patiently' },
          ],
        },
        {
          id: 'qs-v3-c18-019',
          ar: 'وَقَدْ سَمِعَ أَشَدَّ مِنْ هَذَا فَصَبَرَ!',
          en: 'he had already heard worse than this, and endured it!',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'سَمِعَ', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to hear; had heard' },
            { surface: 'أَشَدَّ', lemma: 'أَشَدّ', pos: 'adj', features: 'indef.acc', root: 'ش د د', gloss: 'more intense, worse' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'فَصَبَرَ', lemma: 'صَبَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be patient, endure; and endured' },
          ],
        },
        {
          id: 'qs-v3-c18-020',
          ar: 'وَلَكِنَّهُ كَانَ يَقُولُ لَهُمْ أَحْيَاناً:',
          en: 'But he used to tell them, sometimes:',
          tokens: [
            { surface: 'وَلَكِنَّهُ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+3ms', gloss: 'but he' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; used to' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; tell' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'أَحْيَاناً', lemma: 'أَحْيَان', pos: 'adv', features: 'indef.acc', root: 'ح ي ن', gloss: 'sometimes' },
          ],
        },
        {
          id: 'qs-v3-c18-021',
          ar: '﴿إِن تَسْخَرُوا مِنَّا فَإِنَّا نَسْخَرُ مِنكُمْ كَمَا تَسْخَرُونَ﴾.',
          en: '"If you mock us, we will mock you back, just as you mock now."',
          tokens: [
            { surface: 'إِن', lemma: 'إِنْ', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'تَسْخَرُوا', lemma: 'سَخِرَ', pos: 'verb', features: 'impf.2mp', gloss: 'to mock; you mock' },
            { surface: 'مِنَّا', lemma: 'مِنْ', pos: 'prep', features: 'prep+1p', gloss: 'at us' },
            { surface: 'فَإِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1p', gloss: 'then indeed we' },
            { surface: 'نَسْخَرُ', lemma: 'سَخِرَ', pos: 'verb', features: 'impf.1p', gloss: 'to mock; mock' },
            { surface: 'مِنكُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+2mp', gloss: 'at you' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'تَسْخَرُونَ', lemma: 'سَخِرَ', pos: 'verb', features: 'impf.2mp', gloss: 'to mock; you mock' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ نُوحٌ يَرُدُّ عَلَى سُخْرِيَةِ قَوْمِهِ؟',
          options: [
            'كَانَ يَسْمَعُ وَيَصْبِرُ، وَيَقُولُ لَهُمْ أَحْيَاناً: إِن تَسْخَرُوا مِنَّا فَإِنَّا نَسْخَرُ مِنكُمْ كَمَا تَسْخَرُونَ',
            'كَانَ يَغْضَبُ وَيَشْتُمُهُمْ',
            'كَانَ يَتْرُكُ الْعَمَلَ فِي السَّفِينَةِ خَوْفاً مِنْهُمْ'
          ],
          answer: 0,
          qEn: "How did Nūḥ respond to his people's mockery?",
          optionsEn: [
            'He listened and bore it patiently, sometimes telling them: if you mock us, we will mock you back just as you mock now',
            'He grew angry and cursed them',
            'He abandoned working on the ship out of fear of them'
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'أَرَادَ اللَّهُ أَنْ يُغْرِقَ قَوْمَ نُوحٍ وَلَكِنَّهُ أَرَادَ أَنْ',
        post: 'نُوحٌ وَالْمُؤْمِنُونَ.',
        en: 'Allah willed to drown Nūḥ\'s people, but He willed that Nūḥ and the believers be saved.',
        options: ['يَنْجُوَ', 'نَجَا', 'يُنْجِي', 'نَاجٍ'],
        answer: 0,
        rationales: [
          'Subjunctive imperfect, 3rd masculine singular, after أَنْ -- matches the printed أَنْ يَنْجُوَ نُوحٌ.',
          'Perfect -- wrong tense/mood; أَنْ requires the subjunctive imperfect, not the perfect.',
          'Form IV ("to save someone else") -- wrong voice; the sentence needs "be saved," not "save," and Nūḥ is the subject, not the object.',
          'Active participle (noun, "one who is saved") -- wrong part of speech for this position, which needs an inflected verb.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ قَوْمُ نُوحٍ: مِنْ مَتَى',
        post: 'نَجَّاراً؟',
        en: 'Nūḥ\'s people said: since when have you become a carpenter?',
        options: ['صِرْتَ', 'كُنْتَ', 'تَصِيرُ', 'صَارَ'],
        answer: 0,
        rationales: [
          '2nd masculine singular perfect of صَارَ -- "you became," matching the printed صِرْتَ نَجَّاراً, addressed directly to Nūḥ.',
          '2nd masculine singular perfect of كَانَ ("you were") -- wrong verb; the sentence asks about a change of state, which needs صَارَ, not كَانَ.',
          'Imperfect -- wrong tense; the question asks about something already completed.',
          '3rd masculine singular -- wrong person; the people are addressing Nūḥ directly as "you," not speaking about a third party.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ نُوحٌ لِقَوْمِهِ أَحْيَاناً: إِن تَسْخَرُوا مِنَّا',
        post: 'نَسْخَرُ مِنكُمْ كَمَا تَسْخَرُونَ.',
        en: 'Nūḥ told his people sometimes: if you mock us, then indeed we mock you back just as you mock now.',
        options: ['فَإِنَّا', 'فَإِنَّكُمْ', 'وَإِنَّا', 'لِأَنَّا'],
        answer: 0,
        rationales: [
          'فَ (jawāb of a conditional إِنْ) + إِنَّ + 1st plural -- "then indeed we," matching the printed فَإِنَّا نَسْخَرُ, correctly completing the إِنْ...فَ construction.',
          'Wrong person -- "then indeed you all" reverses who is doing the mocking back; the response clause needs "we," not "you."',
          'وَ instead of the required فَ -- wrong connective; the jawāb of a conditional إِنْ clause needs فَ, not a plain وَ.',
          '"because we" -- wrong sense; this is the answering clause of a conditional, not a causal clause.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَصْنَعُ نُوحٌ سَفِينَةً كَبِيرَةً',
        pre: '',
        post: 'سَفِينَةً كَبِيرَةً',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m)',
        options: ['تَصْنَعُ', 'يَصْنَعُ', 'أَصْنَعُ', 'نَصْنَعُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular imperfect -- matches أَنْتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '1st plural -- wrong person; the target is "you," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَسْمَعُ نُوحٌ كُلَّ ذَلِكَ وَيَصْبِرُ',
        pre: '',
        post: 'كُلَّ ذَلِكَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَسْمَعُ وَنَصْبِرُ', 'يَسْمَعُ وَيَصْبِرُ', 'تَسْمَعُ وَتَصْبِرُ', 'أَسْمَعُ وَأَصْبِرُ'],
        answer: 0,
        rationales: [
          '1st plural imperfect on both verbs -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd/3rd feminine singular -- wrong person and gender.',
          '1st singular -- wrong number; the target is plural نَحْنُ, not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'سَخِرَ قَوْمُ نُوحٍ مِنْهُ',
        pre: '',
        post: 'مِنْهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['سَخِرْتُ', 'سَخِرَ', 'سَخِرْتَ', 'سَخِرْنَا'],
        answer: 0,
        rationales: [
          '1st singular perfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
    ],
  },
};

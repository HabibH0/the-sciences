// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 12 -- مَاذَا أَجَابَهُ
// الْقَوْمُ؟. Printed pages 71 (bottom, right after ch11's closing line and
// the heading) through 72 (top, ending before ch13's heading بَيْنَ نُوحٍ
// وَقَوْمِهِ partway down the same page). Transcribed by hand from the scan
// (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// Nūḥ stands and declares himself Allah's messenger -- and his people
// answer in four distinct voices: ordinary people baffled that a man from
// among them suddenly claims prophethood; his own childhood friends,
// bewildered that someone who played and sat with them every day could
// receive revelation; the rich and arrogant, indignant that Allah would
// pick a poor man when "all the people" hadn't died out; and the ignorant,
// quoting the Qur'an's own record of their objection that a mere human
// messenger is beneath them and that Allah would have sent angels if He
// really willed it. The chapter closes on the ugliest charge of all: that
// Nūḥ is only after leadership and status.
//
// Grammar / lexical notes:
//   -- The opening line وَلَمَّا قَامَ نُوحٌ فِي قَوْمِهِ يَقُولُ: ﴿إِنِّي لَكُمْ
//      رَسُولٌ أَمِينٌ﴾ repeats ch11's closing self-introduction almost
//      verbatim (there: فَقَامَ ... يَقُولُ لِلنَّاسِ, no لِلنَّاسِ here) --
//      kept as its own sentence pair here per the established
//      repeated-line printed-text-fidelity practice (ch8's إِنَّ هَذَا
//      لَظُلْمٌ عَظِيمٌ!, ch9's افْعَلْ كَذَا).
//   -- Every long printed sentence is split at its natural clause/comma
//      boundary into multiple shorter entries here (house convention,
//      ch7/ch9/ch10) -- no rewording, same printed text and order. E.g.
//      the closing Qur'an quote ﴿وَلَوْ شَاءَ اللَّهُ لَأَنزَلَ مَلَائِكَةً مَّا
//      سَمِعْنَا بِهَذَا فِي آبَائِنَا الأَوَّلِينَ﴾ (11 tokens, Sūrat
//      al-Muʾminūn 23:24) is split into two ﴿﴾-wrapped fragments
//      (qs-v3-c12-019, -020), each independently bracketed per the
//      Qur'an-quote convention already used for long ayat (qasas-v2
//      ch14's ﴿ائْتُونِي بِهِ﴾ / ﴿أَسْتَخْلِصْهُ لِنَفْسِي﴾).
//   -- لَأَنزَلَ (qs-v3-c12-019) is لَ (jawāb-of-لَوْ emphatic لام) fused onto
//      the new verb أَنزَلَ, tagged 'part+perf.3ms' -- same fusion pattern
//      as qasas-v2 ch15's لَأَسْرَعَ.
//   -- أَمَاتَ (qs-v3-c12-014) and أَمَا (qs-v3-c12-013, -015, already its
//      own lemma per qasas-v2 ch22) are two different fusions: أَمَاتَ is
//      the interrogative hamza أَ + the already-taught verb مَاتَ
//      ('part+perf.3ms'); أَمَا is the frozen interrogative-negative
//      particle "did...not", a separate lemma entirely -- do not confuse.
//   -- أَصْدِقَاءُ (qs-v3-c12-007) is the new lemma صَدِيق's sound-ish broken
//      plural in construct ('pl.nom.constr'), matching the
//      plural-in-construct convention already used for أَبْنَاءُ/إِخْوَةُ etc.
//      المُتَكَبِّرُونَ and الجُهَّالُ are definite plurals of the new
//      participle-noun مُتَكَبِّر and the already-taught جَاهِل respectively
//      ('def.nom.pl').
//   -- بِالأَمْسِ (qs-v3-c12-005) fuses بِ onto the already-taught frozen
//      adverb أَمْس ('prep+def.adv'), matching the general prep+noun/adv
//      fusion convention (no separate بِ lemma).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لَمَّا، قَامَ، نُوح، فِي،
//      قَوْم، يَقُولُ (قَالَ)، إِنَّ، لِ، رَسُول، أَمِين، بَعْض، النَّاس، مَتَى، صَارَ،
//      هَذَا، نَبِيّ، كَانَ، رَجُل، مِنْ، الْيَوْم، أَنَا، اللَّه، إِلَى، مَعَ، لَعِبَ،
//      كُلّ، يَوْم، جَاءَ، نُبُوَّة، لَيْل، نَهَار، أَمْ، غَنِيّ، وَجَدَ، أَحَد، غَيْر،
//      مَاتَ، إِلَّا، فَقِير، جَاهِل، مَا (neg), بَشَر، مِثْل، لَوْ، شَاءَ، مَلَك، سَمِعَ،
//      أَب، أَوَّل، أَرَادَ، أَنْ، طَرِيق
//      are all already taught and are NOT re-listed in newWords here.
//
// 7 new words (صِغَر، صَدِيق، مُتَكَبِّر، رِيَاسَة، شَرَف، نَالَ، أَنزَلَ).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch12',
  title: { ar: 'مَاذَا أَجَابَهُ الْقَوْمُ؟', en: 'What Did the People Answer Him?' },
  newWords: ['صِغَر', 'صَدِيق', 'مُتَكَبِّر', 'رِيَاسَة', 'شَرَف', 'نَالَ', 'أَنزَلَ'],
  lemmas: {
    صِغَر: { gloss: 'childhood, youth' },
    صَدِيق: { gloss: 'friend' },
    مُتَكَبِّر: { gloss: 'arrogant, haughty (one)' },
    رِيَاسَة: { gloss: 'leadership, headship' },
    شَرَف: { gloss: 'honor, nobility' },
    نَالَ: { gloss: 'to attain, achieve' },
    أَنزَلَ: { gloss: 'to send down' },
  },
  paragraphs: [
    {
      en: 'And when Nūḥ stood among his people, saying: "I am to you a trustworthy messenger." some of the people stood up, saying: when did this man become a prophet? yesterday he was a man among us, and today he says: I am the messenger of Allah to you!',
      sentences: [
        {
          id: 'qs-v3-c12-001',
          ar: 'وَلَمَّا قَامَ نُوحٌ فِي قَوْمِهِ يَقُولُ:',
          en: 'And when Nūḥ stood among his people, saying:',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'قَامَ', lemma: 'قَامَ', pos: 'verb', features: 'perf.3ms', root: 'ق و م', gloss: 'to stand; stood' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; saying' },
          ],
        },
        {
          id: 'qs-v3-c12-002',
          ar: '﴿إِنِّي لَكُمْ رَسُولٌ أَمِينٌ﴾.',
          en: '"I am to you a trustworthy messenger."',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
            { surface: 'رَسُولٌ', lemma: 'رَسُول', pos: 'noun', features: 'indef.nom', gloss: 'a messenger' },
            { surface: 'أَمِينٌ', lemma: 'أَمِين', pos: 'adj', features: 'indef.nom', gloss: 'trustworthy' },
          ],
        },
        {
          id: 'qs-v3-c12-003',
          ar: 'قَامَ بَعْضُ النَّاسِ يَقُولُونَ:',
          en: 'some of the people stood up, saying:',
          tokens: [
            { surface: 'قَامَ', lemma: 'قَامَ', pos: 'verb', features: 'perf.3ms', gloss: 'to stand; stood up' },
            { surface: 'بَعْضُ', lemma: 'بَعْض', pos: 'noun', features: 'nom.constr', root: 'ب ع ض', gloss: 'some (of)' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'يَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3mp', gloss: 'to say; saying' },
          ],
        },
        {
          id: 'qs-v3-c12-004',
          ar: 'مَتَى صَارَ هَذَا نَبِيًّا؟',
          en: 'when did this man become a prophet?',
          tokens: [
            { surface: 'مَتَى', lemma: 'مَتَى', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'صَارَ', lemma: 'صَارَ', pos: 'verb', features: 'perf.3ms', root: 'ص ي ر', gloss: 'to become; became' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'نَبِيًّا', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.acc', root: 'ن ب أ', gloss: 'a prophet' },
          ],
        },
        {
          id: 'qs-v3-c12-005',
          ar: 'بِالأَمْسِ كَانَ رَجُلًا مِنَّا',
          en: 'yesterday he was a man among us,',
          tokens: [
            { surface: 'بِالأَمْسِ', lemma: 'أَمْس', pos: 'adv', features: 'prep+def.adv', gloss: 'yesterday' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'رَجُلًا', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', root: 'ر ج ل', gloss: 'a man' },
            { surface: 'مِنَّا', lemma: 'مِنْ', pos: 'prep', features: 'prep+1p', gloss: 'from us' },
          ],
        },
        {
          id: 'qs-v3-c12-006',
          ar: 'وَالْيَوْمَ يَقُولُ أَنَا رَسُولُ اللَّهِ إِلَيْكُمْ!',
          en: 'and today he says: I am the messenger of Allah to you!',
          tokens: [
            { surface: 'وَالْيَوْمَ', lemma: 'الْيَوْم', pos: 'noun', features: 'conj+def.acc', gloss: 'and today' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; says' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'رَسُولُ', lemma: 'رَسُول', pos: 'noun', features: 'nom.constr', root: 'ر س ل', gloss: 'messenger of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'إِلَيْكُمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'and Nūḥ\'s friends said: this man used to play with us in childhood and sit with us every day, so when did prophethood come to him? by night or by day! and the rich and the arrogant said:',
      sentences: [
        {
          id: 'qs-v3-c12-007',
          ar: 'وَقَالَ أَصْدِقَاءُ نُوحٍ:',
          en: "and Nūḥ's friends said:",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'أَصْدِقَاءُ', lemma: 'صَدِيق', pos: 'noun', features: 'pl.nom.constr', root: 'ص د ق', gloss: 'friends (of)' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v3-c12-008',
          ar: 'هَذَا كَانَ يَلْعَبُ مَعَنَا فِي الصِّغَرِ',
          en: 'this man used to play with us in childhood',
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; used to' },
            { surface: 'يَلْعَبُ', lemma: 'لَعِبَ', pos: 'verb', features: 'impf.3ms', root: 'ل ع ب', gloss: 'to play; play' },
            { surface: 'مَعَنَا', lemma: 'مَعَ', pos: 'prep', features: 'prep+1p', gloss: 'with us' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الصِّغَرِ', lemma: 'صِغَر', pos: 'noun', features: 'def.gen', root: 'ص غ ر', gloss: 'childhood, youth' },
          ],
        },
        {
          id: 'qs-v3-c12-009',
          ar: 'وَيَجْلِسُ مَعَنَا كُلَّ يَوْمٍ',
          en: 'and sit with us every day,',
          tokens: [
            { surface: 'وَيَجْلِسُ', lemma: 'جَلَسَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ج ل س', gloss: 'to sit; and sits' },
            { surface: 'مَعَنَا', lemma: 'مَعَ', pos: 'prep', features: 'prep+1p', gloss: 'with us' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يَوْم', pos: 'noun', features: 'indef.gen', gloss: 'a day' },
          ],
        },
        {
          id: 'qs-v3-c12-010',
          ar: 'فَمَتَى جَاءَتْهُ النُّبُوَّةُ؟',
          en: 'so when did prophethood come to him?',
          tokens: [
            { surface: 'فَمَتَى', lemma: 'مَتَى', pos: 'adv', features: 'conj+adv', gloss: 'so when' },
            { surface: 'جَاءَتْهُ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3fs+3ms', gloss: 'to come; came to him' },
            { surface: 'النُّبُوَّةُ', lemma: 'نُبُوَّة', pos: 'noun', features: 'def.nom', gloss: 'prophethood' },
          ],
        },
        {
          id: 'qs-v3-c12-011',
          ar: 'أَلَيْلًا أَمْ نَهَارًا!',
          en: 'by night or by day!',
          tokens: [
            { surface: 'أَلَيْلًا', lemma: 'لَيْل', pos: 'noun', features: 'part+indef.acc', gloss: 'by night' },
            { surface: 'أَمْ', lemma: 'أَمْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'نَهَارًا', lemma: 'نَهَار', pos: 'noun', features: 'indef.acc', gloss: 'by day' },
          ],
        },
        {
          id: 'qs-v3-c12-012',
          ar: 'وَقَالَ الأَغْنِيَاءُ وَالمُتَكَبِّرُونَ:',
          en: 'and the rich and the arrogant said:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'الأَغْنِيَاءُ', lemma: 'غَنِيّ', pos: 'adj', features: 'def.nom.pl', gloss: 'the rich' },
            { surface: 'وَالمُتَكَبِّرُونَ', lemma: 'مُتَكَبِّر', pos: 'noun', features: 'conj+def.nom.pl', root: 'ك ب ر', gloss: 'and the arrogant' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ أَصْدِقَاءُ نُوحٍ فِي صِغَرِهِ؟',
          options: [
            'هَذَا كَانَ يَلْعَبُ مَعَنَا وَيَجْلِسُ مَعَنَا كُلَّ يَوْمٍ، فَمَتَى جَاءَتْهُ النُّبُوَّةُ؟',
            'كَانَ نُوحٌ غَرِيبًا عَنَّا لَا نَعْرِفُهُ',
            'كَانَ نُوحٌ أَذْكَى النَّاسِ فِي صِغَرِهِ',
          ],
          answer: 0,
          qEn: "What did Nūḥ's childhood friends say?",
          optionsEn: [
            'This man used to play and sit with us every day -- so when did prophethood reach him?',
            'Nūḥ was a stranger to us, we do not know him',
            'Nūḥ was the cleverest of people in his childhood',
          ],
        },
      ],
    },
    {
      en: 'could Allah not find anyone but him? did all the people die out, that He found no one in the tribe but a poor man? and the ignorant said: "This is nothing but a human being like you." and they said: "If Allah had willed, He would have sent down angels, we never heard of this among our forefathers." And some of the people said that Nūḥ wants to attain leadership and honor by this means.',
      sentences: [
        {
          id: 'qs-v3-c12-013',
          ar: 'أَمَا وَجَدَ اللَّهُ أَحَدًا غَيْرَهُ؟',
          en: 'could Allah not find anyone but him?',
          tokens: [
            { surface: 'أَمَا', lemma: 'أَمَا', pos: 'part', features: 'part', gloss: 'did...not' },
            { surface: 'وَجَدَ', lemma: 'وَجَدَ', pos: 'verb', features: 'perf.3ms', gloss: 'to find; find' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَحَدًا', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
            { surface: 'غَيْرَهُ', lemma: 'غَيْر', pos: 'noun', features: 'acc.constr+3ms', root: 'غ ي ر', gloss: 'other than him' },
          ],
        },
        {
          id: 'qs-v3-c12-014',
          ar: 'أَمَاتَ النَّاسُ كُلُّهُمْ،',
          en: 'did all the people die out,',
          tokens: [
            { surface: 'أَمَاتَ', lemma: 'مَاتَ', pos: 'verb', features: 'part+perf.3ms', gloss: 'to die; did (he/it) die' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'كُلُّهُمْ', lemma: 'كُلّ', pos: 'noun', features: 'nom+3mp', gloss: 'all of them' },
          ],
        },
        {
          id: 'qs-v3-c12-015',
          ar: 'أَمَا وَجَدَ فِي الْقَوْمِ إِلَّا فَقِيرًا؟',
          en: 'that He found no one in the tribe but a poor man?',
          tokens: [
            { surface: 'أَمَا', lemma: 'أَمَا', pos: 'part', features: 'part', gloss: 'did...not' },
            { surface: 'وَجَدَ', lemma: 'وَجَدَ', pos: 'verb', features: 'perf.3ms', gloss: 'to find; find' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'def.gen', gloss: 'the tribe' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, only' },
            { surface: 'فَقِيرًا', lemma: 'فَقِير', pos: 'adj', features: 'indef.acc', root: 'ف ق ر', gloss: 'a poor man' },
          ],
        },
        {
          id: 'qs-v3-c12-016',
          ar: 'وَقَالَ الجُهَّالُ:',
          en: 'and the ignorant said:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'الجُهَّالُ', lemma: 'جَاهِل', pos: 'adj', features: 'def.nom.pl', gloss: 'the ignorant' },
          ],
        },
        {
          id: 'qs-v3-c12-017',
          ar: '﴿مَا هَذَا إِلَّا بَشَرٌ مِثْلُكُمْ﴾.',
          en: '"This is nothing but a human being like you."',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, only' },
            { surface: 'بَشَرٌ', lemma: 'بَشَر', pos: 'noun', features: 'indef.nom', gloss: 'a human being' },
            { surface: 'مِثْلُكُمْ', lemma: 'مِثْل', pos: 'noun', features: 'nom+2mp', root: 'م ث ل', gloss: 'like you' },
          ],
        },
        {
          id: 'qs-v3-c12-018',
          ar: 'وَقَالُوا:',
          en: 'and they said:',
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and they said' },
          ],
        },
        {
          id: 'qs-v3-c12-019',
          ar: '﴿وَلَوْ شَاءَ اللَّهُ لَأَنزَلَ مَلَائِكَةً﴾',
          en: '"If Allah had willed, He would have sent down angels,',
          tokens: [
            { surface: 'وَلَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj+conj', gloss: 'and if' },
            { surface: 'شَاءَ', lemma: 'شَاءَ', pos: 'verb', features: 'perf.3ms', root: 'ش ي أ', gloss: 'to will; willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَأَنزَلَ', lemma: 'أَنزَلَ', pos: 'verb', features: 'part+perf.3ms', root: 'ن ز ل', gloss: 'to send down; would send down' },
            { surface: 'مَلَائِكَةً', lemma: 'مَلَك', pos: 'noun', features: 'indef.acc.pl', gloss: 'angels' },
          ],
        },
        {
          id: 'qs-v3-c12-020',
          ar: '﴿مَّا سَمِعْنَا بِهَذَا فِي آبَائِنَا الأَوَّلِينَ﴾.',
          en: 'we never heard of this among our forefathers."',
          tokens: [
            { surface: 'مَّا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'سَمِعْنَا', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.1p', gloss: 'to hear; we heard' },
            { surface: 'بِهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'prep+dem.m', gloss: 'of this' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'آبَائِنَا', lemma: 'أَب', pos: 'noun', features: 'pl.gen+1p', gloss: 'our fathers' },
            { surface: 'الأَوَّلِينَ', lemma: 'أَوَّل', pos: 'adj', features: 'def.gen.pl', gloss: 'the first, the former' },
          ],
        },
        {
          id: 'qs-v3-c12-021',
          ar: 'وَقَالَ بَعْضُ النَّاسِ إِنَّ نُوحاً يُرِيدُ',
          en: 'And some of the people said that Nūḥ wants',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'بَعْضُ', lemma: 'بَعْض', pos: 'noun', features: 'nom.constr', root: 'ب ع ض', gloss: 'some (of)' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed, that' },
            { surface: 'نُوحاً', lemma: 'نُوح', pos: 'proper', features: 'acc', gloss: 'Nūḥ' },
            { surface: 'يُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3ms', gloss: 'to want; wants' },
          ],
        },
        {
          id: 'qs-v3-c12-022',
          ar: 'أَنْ يَنَالَ الرِّيَاسَةَ وَالشَّرَفَ بِهَذَا الطَّرِيقِ.',
          en: 'to attain leadership and honor by this means.',
          tokens: [
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَنَالَ', lemma: 'نَالَ', pos: 'verb', features: 'impf.3ms', root: 'ن ي ل', gloss: 'to attain, achieve; attain' },
            { surface: 'الرِّيَاسَةَ', lemma: 'رِيَاسَة', pos: 'noun', features: 'def.acc', root: 'ر أ س', gloss: 'leadership, headship' },
            { surface: 'وَالشَّرَفَ', lemma: 'شَرَف', pos: 'noun', features: 'conj+def.acc', root: 'ش ر ف', gloss: 'and honor' },
            { surface: 'بِهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'prep+dem.m', gloss: 'by this' },
            { surface: 'الطَّرِيقِ', lemma: 'طَرِيق', pos: 'noun', features: 'def.gen', gloss: 'the means, way' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا اسْتَنكَرَ الأَغْنِيَاءُ وَالمُتَكَبِّرُونَ اخْتِيَارَ نُوحٍ؟',
          options: [
            'لِأَنَّهُمْ رَأَوْا أَنَّ اللَّهَ اخْتَارَ فَقِيرًا وَلَمْ يَخْتَرْ أَحَدًا مِنْهُمْ',
            'لِأَنَّهُمْ أَرَادُوا أَنْ يَكُونُوا هُمُ الأَنْبِيَاءَ',
            'لِأَنَّهُمْ كَانُوا يُحِبُّونَ نُوحًا',
          ],
          answer: 0,
          qEn: 'Why did the rich and arrogant object to Nūḥ being chosen?',
          optionsEn: [
            'Because they saw that Allah chose a poor man and chose none of them',
            'Because they wanted to be the prophets themselves',
            'Because they loved Nūḥ',
          ],
        },
        {
          q: 'بِمَاذَا اتَّهَمَ بَعْضُ النَّاسِ نُوحًا فِي آخِرِ الْفَصْلِ؟',
          options: [
            'بِأَنَّهُ يُرِيدُ أَنْ يَنَالَ الرِّيَاسَةَ وَالشَّرَفَ بِهَذَا الطَّرِيقِ',
            'بِأَنَّهُ يُرِيدُ أَنْ يَتْرُكَ قَوْمَهُ',
            'بِأَنَّهُ يُرِيدُ أَمْوَالَ الأَغْنِيَاءِ',
          ],
          answer: 0,
          qEn: 'What did some of the people accuse Nūḥ of at the end of the chapter?',
          optionsEn: [
            'That he wants to attain leadership and honor by this means',
            'That he wants to abandon his people',
            'That he wants the wealth of the rich',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'كَانَ نُوحٌ',
        post: 'لِلرَّجُلِ فِي الصِّغَرِ.',
        en: 'Nūḥ was a friend to the man in childhood.',
        options: ['صَدِيقًا', 'صَدِيقٌ', 'أَصْدِقَاءَ', 'صَدَاقَةً'],
        answer: 0,
        rationales: [
          'Indefinite accusative -- predicate of كَانَ, matching the required case after it.',
          'Nominative -- wrong case; كَانَ\'s predicate takes the accusative.',
          'Plural -- wrong number; the subject نُوحٌ is singular.',
          'Different noun (abstract "friendship") -- wrong word for "a friend" here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَوْ شَاءَ اللَّهُ',
        post: 'مَلَائِكَةً.',
        en: 'If Allah had willed, He would have sent down angels.',
        options: ['لَأَنزَلَ', 'يُنْزِلُ', 'أَنْزِلْ', 'مُنْزَل'],
        answer: 0,
        rationales: [
          'لَ + perfect 3ms -- the jawāb-of-لَوْ construction, "would have sent down."',
          'Imperfect -- wrong tense; the response to لَوْ takes the perfect with لَ.',
          'Imperative -- wrong mood; this is a hypothetical statement, not a command.',
          'Passive participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ بَعْضُ النَّاسِ إِنَّ نُوحًا يُرِيدُ أَنْ',
        post: 'الرِّيَاسَةَ وَالشَّرَفَ.',
        en: 'Some of the people said that Nūḥ wants to attain leadership and honor.',
        options: ['يَنَالَ', 'نَالَ', 'يَنَالُ', 'نَيْل'],
        answer: 0,
        rationales: [
          'Subjunctive after أَنْ -- required after the particle أَنْ, matching يُرِيدُ أَنْ + verb.',
          'Perfect -- wrong tense; this follows أَنْ, which takes the imperfect.',
          'Indicative imperfect -- wrong mood; أَنْ requires the subjunctive form (same spelling change as elsewhere in the corpus).',
          'Verbal noun -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَلْعَبُ الْوَلَدُ مَعَ صَدِيقِهِ',
        pre: '',
        post: 'مَعَ صَدِيقِهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَلْعَبُ', 'يَلْعَبُ', 'تَلْعَبُ', 'نَلْعَبُ'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَلْعَبُ الْوَلَدُ مَعَ صَدِيقِهِ',
        pre: '',
        post: 'مَعَ صَدِيقِهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَلْعَبُونَ', 'يَلْعَبُ', 'تَلْعَبُ', 'أَلْعَبُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong person and gender.',
          '1st singular -- wrong person; the target is "they," not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'يَنَالُ الرَّجُلُ الرِّيَاسَةَ بِهَذَا الطَّرِيقِ',
        pre: '',
        post: 'الرِّيَاسَةَ بِهَذَا الطَّرِيقِ',
        targetPerson: 'أَنتَ',
        targetEn: 'you (ms)',
        options: ['تَنَالُ', 'يَنَالُ', 'أَنَالُ', 'نَنَالُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular imperfect -- matches أَنتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '1st plural -- wrong person and number.',
        ],
      },
    ],
  },
};

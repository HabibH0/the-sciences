// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 11 -- نُوحٌ
// الرَّسُولُ. Printed pages 70 (bottom, right after ch10's closing line and
// the heading) through 71 (top, ending before ch12's heading مَاذَا أَجَابَهُ
// الْقَوْمُ؟ partway down the same page). Transcribed by hand from the scan
// (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// The messenger finally gets a name: نُوح. Allah passes over the rich and
// powerful of his people and chooses him instead -- because Allah alone
// knows who can truly bear a message and a trust. The chapter lists his
// qualities (صَالِح، كَرِيم، عَاقِل، حَلِيم، نَاصِح، شَفِيق، صَادِق، أَمِين) before the
// revelation itself arrives, quoting Sūrat Nūḥ 71:1 directly, and closes
// with Nūḥ standing before his people to declare himself their messenger
// -- echoing the same self-introduction line used by earlier prophets in
// the Qur'an (cf. 26:107).
//
// Grammar / lexical notes:
//   -- نُوح is the FIRST tokenized appearance of the prophet's own name in
//      the corpus (earlier chapters referred only to "the Devil," "the
//      people," etc.) -- tagged pos 'proper', no root, matching the
//      إِبْلِيس/آدَم convention.
//   -- نَاصِح (qs-v3-c11-009) is the active-participle counterpart of the
//      already-taught verb نَصَحَ, tagged as its own lemma per the
//      established participle-as-distinct-lemma convention (صَالِح، سَاجِد,
//      etc.).
//   -- The Qur'an quotes (qs-v3-c11-012b, Sūrat Nūḥ 71:1; qs-v3-c11-013b,
//      cf. Sūrat ash-Shuʿarāʾ 26:107) are marked with ﴿﴾ exactly as
//      printed, matching the established Qur'an-quote convention.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): أَرَادَ، اللَّه، أَنْ،
//      أَرْسَلَ، إِلَى، قَوْم، كَانَ، فِي، لَكِنَّ، لَمْ، أَحَد، مِنْ، عَلِمَ، مَنْ، حَمَلَ،
//      رَجُل، صَالِح، كَرِيم، عَاقِل، حَلِيم، صَادِق، أَمِين، أَمَانَة، إِلَيْهِ (إِلَى)،
//      قَبْلَ، أَتَى، قَامَ، قَالَ، النَّاس، إِنَّ، لِ، رَسُول
//      are all already taught and are NOT re-listed in newWords here.
//
// 11 new words (نُوح، غَنِيّ، رَئِيس، اِخْتَارَ، رِسَالَة، نَاصِح، شَفِيق، أَوْحَى،
// أَنذَرَ، عَذَاب، أَلِيم).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch11',
  title: { ar: 'نُوحٌ الرَّسُولُ', en: 'Nūḥ the Messenger' },
  newWords: ['نُوح', 'غَنِيّ', 'رَئِيس', 'اِخْتَارَ', 'رِسَالَة', 'نَاصِح', 'شَفِيق', 'أَوْحَى', 'أَنذَرَ', 'عَذَاب', 'أَلِيم'],
  lemmas: {
    نُوح: { gloss: 'Nūḥ (Noah)' },
    غَنِيّ: { gloss: 'rich, wealthy' },
    رَئِيس: { gloss: 'chief, leader' },
    اِخْتَارَ: { gloss: 'to choose' },
    رِسَالَة: { gloss: 'message, mission' },
    نَاصِح: { gloss: 'advising, a counselor' },
    شَفِيق: { gloss: 'compassionate' },
    أَوْحَى: { gloss: 'to reveal, inspire' },
    أَنذَرَ: { gloss: 'to warn' },
    عَذَاب: { gloss: 'punishment' },
    أَلِيم: { gloss: 'painful' },
  },
  paragraphs: [
    {
      en: 'Allah wanted to send Nūḥ to his people. There were rich men and chiefs among the people, but Allah chose Nūḥ for His message, and did not choose anyone among them. Allah knows who bears His message, and Allah knows who bears His trust.',
      sentences: [
        {
          id: 'qs-v3-c11-001',
          ar: 'وَأَرَادَ اللَّهُ أَنْ يُرْسِلَ نُوحًا إِلَى قَوْمِهِ.',
          en: 'Allah wanted to send Nūḥ to his people.',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want; and wanted' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُرْسِلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to send; send' },
            { surface: 'نُوحًا', lemma: 'نُوح', pos: 'proper', features: 'acc', gloss: 'Nūḥ' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
          ],
        },
        {
          id: 'qs-v3-c11-002',
          ar: 'كَانَ فِي الْقَوْمِ أَغْنِيَاءُ وَرُؤَسَاءُ،',
          en: 'There were rich men and chiefs among the people,',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; there were' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'أَغْنِيَاءُ', lemma: 'غَنِيّ', pos: 'adj', features: 'indef.nom.pl', root: 'غ ن ي', gloss: 'rich men' },
            { surface: 'وَرُؤَسَاءُ', lemma: 'رَئِيس', pos: 'noun', features: 'conj+indef.nom.pl', root: 'ر أ س', gloss: 'and chiefs' },
          ],
        },
        {
          id: 'qs-v3-c11-003',
          ar: 'وَلَكِنَّ اللَّهَ اخْتَارَ نُوحًا لِرِسَالَتِهِ،',
          en: 'but Allah chose Nūḥ for His message,',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'اخْتَارَ', lemma: 'اِخْتَارَ', pos: 'verb', features: 'perf.3ms', root: 'خ ي ر', gloss: 'to choose; chose' },
            { surface: 'نُوحًا', lemma: 'نُوح', pos: 'proper', features: 'acc', gloss: 'Nūḥ' },
            { surface: 'لِرِسَالَتِهِ', lemma: 'رِسَالَة', pos: 'noun', features: 'prep+gen+3ms', root: 'ر س ل', gloss: 'for His message' },
          ],
        },
        {
          id: 'qs-v3-c11-004',
          ar: 'وَلَمْ يَخْتَرْ أَحَدًا مِنْهُمْ.',
          en: 'and did not choose anyone among them.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and did not' },
            { surface: 'يَخْتَرْ', lemma: 'اِخْتَارَ', pos: 'verb', features: 'impf.3ms', root: 'خ ي ر', gloss: 'to choose; choose' },
            { surface: 'أَحَدًا', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
          ],
        },
        {
          id: 'qs-v3-c11-005',
          ar: 'اللَّهُ يَعْلَمُ مَنْ يَحْمِلُ رِسَالَتَهُ،',
          en: 'Allah knows who bears His message,',
          tokens: [
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'يَعْلَمُ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to know; knows' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'يَحْمِلُ', lemma: 'حَمَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to bear, carry; bears' },
            { surface: 'رِسَالَتَهُ', lemma: 'رِسَالَة', pos: 'noun', features: 'acc+3ms', root: 'ر س ل', gloss: 'His message' },
          ],
        },
        {
          id: 'qs-v3-c11-006',
          ar: 'وَاللَّهُ يَعْلَمُ مَنْ يَحْمِلُ أَمَانَتَهُ.',
          en: 'and Allah knows who bears His trust.',
          tokens: [
            { surface: 'وَاللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'conj+nom', gloss: 'and Allah' },
            { surface: 'يَعْلَمُ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to know; knows' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'يَحْمِلُ', lemma: 'حَمَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to bear, carry; bears' },
            { surface: 'أَمَانَتَهُ', lemma: 'أَمَانَة', pos: 'noun', features: 'acc+3ms', gloss: 'His trust' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا اخْتَارَ اللَّهُ نُوحًا لِرِسَالَتِهِ دُونَ الْأَغْنِيَاءِ وَالرُّؤَسَاءِ؟',
          options: [
            'لِأَنَّ اللَّهَ يَعْلَمُ مَنْ يَحْمِلُ رِسَالَتَهُ وَأَمَانَتَهُ',
            'لِأَنَّ نُوحًا كَانَ أَغْنَى النَّاسِ',
            'لِأَنَّ الْقَوْمَ اخْتَارُوهُ بِأَنْفُسِهِمْ',
          ],
          answer: 0,
          qEn: "Why did Allah choose Nūḥ for His message rather than the rich men and chiefs?",
          optionsEn: [
            'Because Allah alone knows who can bear His message and His trust',
            'Because Nūḥ was the wealthiest of the people',
            'Because the people chose him themselves',
          ],
        },
      ],
    },
    {
      en: 'Nūḥ was a righteous, noble man, Nūḥ was a sensible, forbearing man. Nūḥ was an advising, compassionate counselor, Nūḥ was truthful and trustworthy -- Allah chose Nūḥ for His message and revealed to him: "Warn your people before a painful punishment comes to them." So Nūḥ stood among his people, telling them: "I am to you a trustworthy messenger."',
      sentences: [
        {
          id: 'qs-v3-c11-007',
          ar: 'وَكَانَ نُوحٌ رَجُلًا صَالِحًا كَرِيمًا،',
          en: 'Nūḥ was a righteous, noble man,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'رَجُلًا', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', gloss: 'a man' },
            { surface: 'صَالِحًا', lemma: 'صَالِح', pos: 'adj', features: 'indef.acc', gloss: 'righteous' },
            { surface: 'كَرِيمًا', lemma: 'كَرِيم', pos: 'adj', features: 'indef.acc', gloss: 'noble' },
          ],
        },
        {
          id: 'qs-v3-c11-008',
          ar: 'وَكَانَ نُوحٌ رَجُلًا عَاقِلًا حَلِيمًا.',
          en: 'Nūḥ was a sensible, forbearing man.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'رَجُلًا', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', gloss: 'a man' },
            { surface: 'عَاقِلًا', lemma: 'عَاقِل', pos: 'adj', features: 'indef.acc', gloss: 'sensible' },
            { surface: 'حَلِيمًا', lemma: 'حَلِيم', pos: 'adj', features: 'indef.acc', gloss: 'forbearing' },
          ],
        },
        {
          id: 'qs-v3-c11-009',
          ar: 'وَكَانَ نُوحٌ نَاصِحًا شَفِيقًا،',
          en: 'Nūḥ was an advising, compassionate counselor,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'نَاصِحًا', lemma: 'نَاصِح', pos: 'noun', features: 'indef.acc', root: 'ن ص ح', gloss: 'advising, a counselor' },
            { surface: 'شَفِيقًا', lemma: 'شَفِيق', pos: 'adj', features: 'indef.acc', root: 'ش ف ق', gloss: 'compassionate' },
          ],
        },
        {
          id: 'qs-v3-c11-010',
          ar: 'وَكَانَ نُوحٌ صَادِقًا أَمِينًا',
          en: 'Nūḥ was truthful and trustworthy --',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'صَادِقًا', lemma: 'صَادِق', pos: 'adj', features: 'indef.acc', gloss: 'truthful' },
            { surface: 'أَمِينًا', lemma: 'أَمِين', pos: 'adj', features: 'indef.acc', gloss: 'trustworthy' },
          ],
        },
        {
          id: 'qs-v3-c11-011',
          ar: 'اخْتَارَ اللَّهُ نُوحًا لِرِسَالَتِهِ',
          en: 'Allah chose Nūḥ for His message',
          tokens: [
            { surface: 'اخْتَارَ', lemma: 'اِخْتَارَ', pos: 'verb', features: 'perf.3ms', root: 'خ ي ر', gloss: 'to choose; chose' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'نُوحًا', lemma: 'نُوح', pos: 'proper', features: 'acc', gloss: 'Nūḥ' },
            { surface: 'لِرِسَالَتِهِ', lemma: 'رِسَالَة', pos: 'noun', features: 'prep+gen+3ms', root: 'ر س ل', gloss: 'for His message' },
          ],
        },
        {
          id: 'qs-v3-c11-012',
          ar: 'وَأَوْحَى إِلَيْهِ:',
          en: 'and revealed to him:',
          tokens: [
            { surface: 'وَأَوْحَى', lemma: 'أَوْحَى', pos: 'verb', features: 'conj+perf.3ms', root: 'و ح ي', gloss: 'to reveal, inspire; and revealed' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v3-c11-013',
          ar: '﴿أَنْ أَنذِرْ قَوْمَكَ مِن قَبْلِ أَن يَأْتِيَهُمْ عَذَابٌ أَلِيمٌ﴾.',
          en: '"Warn your people before a painful punishment comes to them."',
          tokens: [
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that, namely' },
            { surface: 'أَنذِرْ', lemma: 'أَنذَرَ', pos: 'verb', features: 'imp.2ms', root: 'ن ذ ر', gloss: 'to warn; warn!' },
            { surface: 'قَوْمَكَ', lemma: 'قَوْم', pos: 'noun', features: 'acc+2ms', gloss: 'your people' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَبْلِ', lemma: 'قَبْلَ', pos: 'adv', features: 'gen.constr', gloss: 'before' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَأْتِيَهُمْ', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to come; comes to them' },
            { surface: 'عَذَابٌ', lemma: 'عَذَاب', pos: 'noun', features: 'indef.nom', root: 'ع ذ ب', gloss: 'a punishment' },
            { surface: 'أَلِيمٌ', lemma: 'أَلِيم', pos: 'adj', features: 'indef.nom', root: 'أ ل م', gloss: 'painful' },
          ],
        },
        {
          id: 'qs-v3-c11-014',
          ar: 'فَقَامَ نُوحٌ فِي قَوْمِهِ يَقُولُ لِلنَّاسِ:',
          en: 'So Nūḥ stood among his people, telling them:',
          tokens: [
            { surface: 'فَقَامَ', lemma: 'قَامَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to stand; so stood' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; telling' },
            { surface: 'لِلنَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'prep+def.gen', gloss: 'to the people' },
          ],
        },
        {
          id: 'qs-v3-c11-015',
          ar: '﴿إِنِّي لَكُمْ رَسُولٌ أَمِينٌ﴾.',
          en: '"I am to you a trustworthy messenger."',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
            { surface: 'رَسُولٌ', lemma: 'رَسُول', pos: 'noun', features: 'indef.nom', gloss: 'a messenger' },
            { surface: 'أَمِينٌ', lemma: 'أَمِين', pos: 'adj', features: 'indef.nom', gloss: 'trustworthy' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَ الْكِتَابُ أَخْلَاقَ نُوحٍ؟',
          options: [
            'صَالِحًا كَرِيمًا عَاقِلًا حَلِيمًا نَاصِحًا شَفِيقًا صَادِقًا أَمِينًا',
            'غَنِيًّا قَوِيًّا شُجَاعًا فَقَطْ',
            'جَاهِلًا كَسْلَانًا وَلَكِنَّهُ أَمِينًا',
          ],
          answer: 0,
          qEn: "How did the book describe Nūḥ's character?",
          optionsEn: [
            'Righteous, noble, sensible, forbearing, an advising counselor, compassionate, truthful, and trustworthy',
            'Rich, strong, and brave only',
            'Ignorant and lazy, but trustworthy',
          ],
        },
        {
          q: 'مَاذَا أَوْحَى اللَّهُ إِلَى نُوحٍ؟',
          options: [
            'أَنْ يُنْذِرَ قَوْمَهُ مِنْ قَبْلِ أَنْ يَأْتِيَهُمْ عَذَابٌ أَلِيمٌ',
            'أَنْ يَبْنِيَ سَفِينَةً فَوْرًا',
            'أَنْ يَتْرُكَ قَوْمَهُ وَيُسَافِرَ بَعِيدًا',
          ],
          answer: 0,
          qEn: 'What did Allah reveal to Nūḥ?',
          optionsEn: [
            'To warn his people before a painful punishment comes to them',
            'To build a ship immediately',
            'To leave his people and travel far away',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَكِنَّ اللَّهَ',
        post: 'نُوحًا لِرِسَالَتِهِ، وَلَمْ يَخْتَرْ أَحَدًا مِنْهُمْ.',
        en: 'but Allah chose Nūḥ for His message, and did not choose anyone among them.',
        options: ['اخْتَارَ', 'يَخْتَارُ', 'اخْتَرْ', 'مُخْتَار'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- a completed choice, matching the following وَلَمْ يَخْتَرْ\'s past-tense framing.',
          'Imperfect -- wrong tense; this narrates a completed choice.',
          'Imperative -- wrong mood; this is narration, not a command.',
          'Passive participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ نُوحٌ',
        post: 'شَفِيقًا،',
        en: 'Nūḥ was an advising, compassionate counselor,',
        options: ['نَاصِحًا', 'نَاصِحٌ', 'نُصْحًا', 'نَصَحَ'],
        answer: 0,
        rationales: [
          'Indefinite accusative -- predicate of كَانَ, matching شَفِيقًا\'s case.',
          'Nominative -- wrong case; كَانَ\'s predicate takes the accusative.',
          'Verbal noun -- wrong part of speech for this position.',
          'Verb -- wrong part of speech; a predicate noun/participle is needed here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَوْحَى إِلَيْهِ: ﴿أَنْ',
        post: 'قَوْمَكَ مِن قَبْلِ أَن يَأْتِيَهُمْ عَذَابٌ أَلِيمٌ﴾.',
        en: 'and revealed to him: "Warn your people before a painful punishment comes to them."',
        options: ['أَنذِرْ', 'يُنْذِرُ', 'أَنْذَرَ', 'مُنْذِر'],
        answer: 0,
        rationales: [
          'Imperative, 2nd masculine singular -- a direct command, "warn!"',
          'Imperfect indicative -- wrong mood; a command is being given, not a statement.',
          'Perfect -- wrong tense; this is a command, not a completed action.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخْتَارُ الرَّجُلُ صَدِيقَهُ',
        pre: '',
        post: 'صَدِيقَهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَخْتَارُ', 'يَخْتَارُ', 'تَخْتَارُ', 'نَخْتَارُ'],
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
        base: 'يَخْتَارُ الرَّجُلُ صَدِيقَهُ',
        pre: '',
        post: 'صَدِيقَهُ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَخْتَارُ', 'يَخْتَارُ', 'أَخْتَارُ', 'نَخْتَارُ'],
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
        base: 'يَخْتَارُ الرَّجُلُ صَدِيقَهُ',
        pre: '',
        post: 'صَدِيقَهُ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَخْتَارُونَ', 'يَخْتَارُ', 'تَخْتَارُ', 'نَخْتَارُ'],
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

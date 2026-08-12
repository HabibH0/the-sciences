// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 14 -- رُؤْيَا
// إِبْرَاهِيمَ. Printed pages 22 (bottom, after ch13) - 24 (top, before ch15's
// heading) -- the longest chapter so far, spanning three pages. Transcribed
// by hand from the scan (vision OCR, 300dpi render) against
// QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// This is the Dhabīḥ narrative -- Ibrāhīm's vision of sacrificing Ismāʿīl,
// the origin of ʿĪd al-Aḍḥā. Two bracketed groups are direct Qur'anic
// quotation (37:102) and are split into fragments of at most 2 tokens each
// (same workaround as ch4-13):
//   -- qs-v1-c14-{015..019}: ﴿إِنِّي أَرَى فِي الْمَنَامِ أَنِّي أَذْبَحُكَ فَانظُرْ
//      مَاذَا تَرَى﴾ (the father's words, 9 words -- 5 fragments)
//   -- qs-v1-c14-{020..027}: ﴿قَالَ يَاأَبَتِ افْعَلْ مَا تُؤْمَرُ سَتَجِدُنِي إِن
//      شَاءَ اللَّهُ مِنَ الصَّابِرِينَ﴾ (the son's reply, 12 words -- 8
//      fragments)
// "وَقَالَ: اذْبَحْ هَذَا وَلَا تَذْبَحْ إِسْمَاعِيلَ" (qs-v1-c14-041/042) has NO
// guillemets in print -- it is the author's own narration of the angel's
// instruction (drawn from the ḥadīth/tafsīr tradition, not the Qur'anic text
// itself), so it is tokenized normally.
//
// Grammar notes: تُؤْمَرُ (qs-v1-c14-023) is a genuine passive imperfect --
// tagged impf.pass.2ms, combining the two documented aspect/voice atoms
// (impf, pass) in one segment, since Arabic passive verbs still carry a
// tense distinction that a bare "pass" atom alone would lose. This is the
// first passive-voice token in the course.
//
// Heavy new-vocabulary chapter (30 new items -- فَرِحَ، أَخَذَ، وَضَعَ were already
// introduced in ch4/ch3 and are reused here without re-listing) reflecting
// its length and its
// role introducing core ritual vocabulary (ذَبَحَ، أَضْحَى، مُسْلِم، جِبْرِيل)
// that recurs for the rest of the book.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch14',
  title: { ar: 'رُؤْيَا إِبْرَاهِيمَ', en: "Ibrāhīm's Vision" },
  newWords: [
    'عَادَ', 'مُدَّة', 'لَقِيَ', 'لَعِبَ', 'أَحَبَّ', 'مَنَام', 'ذَبَحَ', 'صَادِق',
    'نَظَرَ', 'إِنْ', 'شَاءَ', 'صَابِر', 'سِكِّين', 'بَلَغَ', 'مِنًى', 'اِضْطَجَعَ',
    'حُلْقُوم', 'أَكْثَر', 'اِبْن', 'نَجَحَ', 'اِمْتِحَان', 'أَرْسَلَ', 'جِبْرِيل',
    'كَبْش', 'جَنَّة', 'عَمَل', 'مُسْلِم', 'ذَبْح', 'أَضْحَى', 'صَلَّى', 'سَلَّمَ',
  ],
  lemmas: {
    'عَادَ': { gloss: 'to return' },
    'مُدَّة': { gloss: 'a period, a while' },
    'لَقِيَ': { gloss: 'to meet' },
    'لَعِبَ': { gloss: 'to play' },
    'أَحَبَّ': { gloss: 'to love' },
    'مَنَام': { gloss: 'dream, sleep' },
    'ذَبَحَ': { gloss: 'to slaughter, sacrifice' },
    'صَادِق': { gloss: 'truthful, true' },
    'نَظَرَ': { gloss: 'to look' },
    'إِنْ': { gloss: 'if' },
    'شَاءَ': { gloss: 'to will, wish' },
    'صَابِر': { gloss: 'patient, steadfast' },
    'سِكِّين': { gloss: 'knife' },
    'بَلَغَ': { gloss: 'to reach, arrive at' },
    'مِنًى': { gloss: 'Minā (a valley near Makkah)' },
    'اِضْطَجَعَ': { gloss: 'to lie down' },
    'حُلْقُوم': { gloss: 'throat' },
    'أَكْثَر': { gloss: 'more' },
    'اِبْن': { gloss: 'son' },
    'نَجَحَ': { gloss: 'to succeed, pass' },
    'اِمْتِحَان': { gloss: 'test, examination, trial' },
    'أَرْسَلَ': { gloss: 'to send' },
    'جِبْرِيل': { gloss: 'Jibrīl (Gabriel)' },
    'كَبْش': { gloss: 'ram' },
    'جَنَّة': { gloss: 'Paradise, garden' },
    'عَمَل': { gloss: 'deed, work, action' },
    'مُسْلِم': { gloss: 'a Muslim' },
    'ذَبْح': { gloss: 'sacrifice, slaughtering (verbal noun)' },
    'أَضْحَى': { gloss: 'al-Aḍḥā (the feast of sacrifice)' },
    'صَلَّى': { gloss: 'to bless, invoke blessings upon' },
    'سَلَّمَ': { gloss: 'to grant peace, salute' },
  },
  paragraphs: [
    {
      en: 'And Ibrāhīm returned to Makkah after a time. and he met Ismāʿīl and met Hājar, and Ibrāhīm rejoiced in his son Ismāʿīl. And Ismāʿīl was a young boy, running and playing and going out with his father.',
      sentences: [
        {
          id: 'qs-v1-c14-001',
          ar: 'وَعَادَ إِبْرَاهِيمُ إِلَى مَكَّةَ بَعْدَ مُدَّةٍ.',
          en: 'And Ibrāhīm returned to Makkah after a time.',
          tokens: [
            { surface: 'وَعَادَ', lemma: 'عَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع و د', gloss: 'to return; and returned' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مَكَّةَ', lemma: 'مَكَّة', pos: 'proper', features: 'gen', root: 'م ك ك', gloss: 'Makkah' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'مُدَّةٍ', lemma: 'مُدَّة', pos: 'noun', features: 'indef.gen', root: 'م د د', gloss: 'a period, a while' },
          ],
        },
        {
          id: 'qs-v1-c14-002',
          ar: 'وَلَقِيَ إِسْمَاعِيلَ',
          en: 'and he met Ismāʿīl',
          tokens: [
            { surface: 'وَلَقِيَ', lemma: 'لَقِيَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ل ق ي', gloss: 'to meet; and met' },
            { surface: 'إِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'acc', gloss: 'Ismāʿīl' },
          ],
        },
        {
          id: 'qs-v1-c14-003',
          ar: 'وَلَقِيَ هَاجَرَ،',
          en: 'and met Hājar,',
          tokens: [
            { surface: 'وَلَقِيَ', lemma: 'لَقِيَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ل ق ي', gloss: 'to meet; and met' },
            { surface: 'هَاجَرَ', lemma: 'هَاجَر', pos: 'proper', features: 'acc', gloss: 'Hājar' },
          ],
        },
        {
          id: 'qs-v1-c14-004',
          ar: 'وَفَرِحَ إِبْرَاهِيمُ بِوَلَدِهِ إِسْمَاعِيلَ.',
          en: 'and Ibrāhīm rejoiced in his son Ismāʿīl.',
          tokens: [
            { surface: 'وَفَرِحَ', lemma: 'فَرِحَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ف ر ح', gloss: 'to rejoice; and rejoiced' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'بِوَلَدِهِ', lemma: 'وَلَد', pos: 'noun', features: 'prep+gen+3ms', root: 'و ل د', gloss: 'in his son' },
            { surface: 'إِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'gen', gloss: 'Ismāʿīl' },
          ],
        },
        {
          id: 'qs-v1-c14-005',
          ar: 'وَكَانَ إِسْمَاعِيلُ وَلَدًا صَغِيرًا،',
          en: 'And Ismāʿīl was a young boy,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'إِسْمَاعِيلُ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'nom', gloss: 'Ismāʿīl' },
            { surface: 'وَلَدًا', lemma: 'وَلَد', pos: 'noun', features: 'indef.acc', root: 'و ل د', gloss: 'a boy' },
            { surface: 'صَغِيرًا', lemma: 'صَغِير', pos: 'adj', features: 'indef.acc', root: 'ص غ ر', gloss: 'young, small' },
          ],
        },
        {
          id: 'qs-v1-c14-006',
          ar: 'يَجْرِي وَيَلْعَبُ وَيَخْرُجُ مَعَ وَالِدِهِ.',
          en: 'running and playing and going out with his father.',
          tokens: [
            { surface: 'يَجْرِي', lemma: 'جَرَى', pos: 'verb', features: 'impf.3ms', root: 'ج ر ي', gloss: 'to run; runs' },
            { surface: 'وَيَلْعَبُ', lemma: 'لَعِبَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ل ع ب', gloss: 'to play; and plays' },
            { surface: 'وَيَخْرُجُ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+impf.3ms', root: 'خ ر ج', gloss: 'to go out; and goes out' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'adv', features: 'adv', gloss: 'with' },
            { surface: 'وَالِدِهِ', lemma: 'وَالِد', pos: 'noun', features: 'gen+3ms', root: 'و ل د', gloss: 'his father' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'And Ibrāhīm loved Ismāʿīl very much. And one night Ibrāhīm saw in a dream that he was sacrificing Ismāʿīl. And Ibrāhīm was a truthful prophet, and his dream was a true dream. And Ibrāhīm was the close friend of Allah,',
      sentences: [
        {
          id: 'qs-v1-c14-007',
          ar: 'وَكَانَ إِبْرَاهِيمُ يُحِبُّ إِسْمَاعِيلَ جِدًّا.',
          en: 'And Ibrāhīm loved Ismāʿīl very much.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', root: 'ح ب ب', gloss: 'to love; loves' },
            { surface: 'إِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'acc', gloss: 'Ismāʿīl' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very much' },
          ],
        },
        {
          id: 'qs-v1-c14-008',
          ar: 'وَذَاتَ لَيْلَةٍ رَأَى إِبْرَاهِيمُ فِي الْمَنَامِ',
          en: 'And one night Ibrāhīm saw in a dream',
          tokens: [
            { surface: 'وَذَاتَ', lemma: 'ذَات', pos: 'noun', features: 'conj+acc.constr', gloss: 'one (idiom, mudāf of ذَاتَ لَيْلَةٍ)' },
            { surface: 'لَيْلَةٍ', lemma: 'لَيْلَة', pos: 'noun', features: 'indef.gen', root: 'ل ي ل', gloss: 'a night' },
            { surface: 'رَأَى', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms', root: 'ر أ ي', gloss: 'to see; saw' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْمَنَامِ', lemma: 'مَنَام', pos: 'noun', features: 'def.gen', root: 'ن و م', gloss: 'the dream, sleep' },
          ],
        },
        {
          id: 'qs-v1-c14-009',
          ar: 'أَنَّهُ يَذْبَحُ إِسْمَاعِيلَ.',
          en: 'that he was sacrificing Ismāʿīl.',
          tokens: [
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'يَذْبَحُ', lemma: 'ذَبَحَ', pos: 'verb', features: 'impf.3ms', root: 'ذ ب ح', gloss: 'to slaughter, sacrifice; sacrifices' },
            { surface: 'إِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'acc', gloss: 'Ismāʿīl' },
          ],
        },
        {
          id: 'qs-v1-c14-010',
          ar: 'وَكَانَ إِبْرَاهِيمُ نَبِيًّا صَادِقًا،',
          en: 'And Ibrāhīm was a truthful prophet,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'نَبِيًّا', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.acc', root: 'ن ب أ', gloss: 'a prophet' },
            { surface: 'صَادِقًا', lemma: 'صَادِق', pos: 'adj', features: 'indef.acc', root: 'ص د ق', gloss: 'truthful' },
          ],
        },
        {
          id: 'qs-v1-c14-011',
          ar: 'وَكَانَ مَنَامُهُ مَنَامًا صَادِقًا.',
          en: 'and his dream was a true dream.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'مَنَامُهُ', lemma: 'مَنَام', pos: 'noun', features: 'nom+3ms', root: 'ن و م', gloss: 'his dream' },
            { surface: 'مَنَامًا', lemma: 'مَنَام', pos: 'noun', features: 'indef.acc', root: 'ن و م', gloss: 'a dream' },
            { surface: 'صَادِقًا', lemma: 'صَادِق', pos: 'adj', features: 'indef.acc', root: 'ص د ق', gloss: 'true' },
          ],
        },
        {
          id: 'qs-v1-c14-012',
          ar: 'وَكَانَ إِبْرَاهِيمُ خَلِيلَ اللَّهِ،',
          en: 'And Ibrāhīm was the close friend of Allah,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'خَلِيلَ', lemma: 'خَلِيل', pos: 'noun', features: 'acc.constr', root: 'خ ل ل', gloss: 'close friend (of)' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا رَأَى إِبْرَاهِيمُ فِي الْمَنَامِ؟',
          options: ['أَنَّهُ يَذْبَحُ إِسْمَاعِيلَ', 'أَنَّهُ يَبْنِي بَيْتًا', 'أَنَّهُ يُسَافِرُ إِلَى الشَّامِ'],
          answer: 0,
          qEn: 'What did Ibrāhīm see in the dream?',
          optionsEn: ['That he was sacrificing Ismāʿīl', 'That he was building a house', 'That he was traveling to Syria'],
        },
      ],
    },
    {
      en: 'so he wanted to do what Allah commanded him in the dream. And Ibrāhīm said to Ismāʿīl: \'Indeed I see in the dream that I am sacrificing you; so look -- what do you think?\' (Qur\'an 37:102)',
      sentences: [
        {
          id: 'qs-v1-c14-013',
          ar: 'فَأَرَادَ أَنْ يَفْعَلَ مَا أَمَرَهُ اللَّهُ فِي الْمَنَامِ.',
          en: 'so he wanted to do what Allah commanded him in the dream.',
          tokens: [
            { surface: 'فَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want; so wanted' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَفْعَلَ', lemma: 'فَعَلَ', pos: 'verb', features: 'impf.3ms', root: 'ف ع ل', gloss: 'to do; do' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'أَمَرَهُ', lemma: 'أَمَرَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'أ م ر', gloss: 'to command; commanded him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْمَنَامِ', lemma: 'مَنَام', pos: 'noun', features: 'def.gen', root: 'ن و م', gloss: 'the dream' },
          ],
        },
        {
          id: 'qs-v1-c14-014',
          ar: 'وَقَالَ إِبْرَاهِيمُ لِإِسْمَاعِيلَ:',
          en: 'And Ibrāhīm said to Ismāʿīl:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'لِإِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'prep+gen', gloss: 'to Ismāʿīl' },
          ],
        },
        {
          id: 'qs-v1-c14-015',
          ar: '﴿إِنِّي أَرَى',
          en: "'Indeed I see",
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'أَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.1s', root: 'ر أ ي', gloss: 'to see; I see' },
          ],
        },
        {
          id: 'qs-v1-c14-016',
          ar: 'فِي الْمَنَامِ',
          en: 'in the dream',
          tokens: [
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْمَنَامِ', lemma: 'مَنَام', pos: 'noun', features: 'def.gen', root: 'ن و م', gloss: 'the dream' },
          ],
        },
        {
          id: 'qs-v1-c14-017',
          ar: 'أَنِّي أَذْبَحُكَ',
          en: 'that I am sacrificing you;',
          tokens: [
            { surface: 'أَنِّي', lemma: 'أَنَّ', pos: 'part', features: 'part+1s', gloss: 'that I' },
            { surface: 'أَذْبَحُكَ', lemma: 'ذَبَحَ', pos: 'verb', features: 'impf.1s+2ms', root: 'ذ ب ح', gloss: 'to sacrifice; I sacrifice you' },
          ],
        },
        {
          id: 'qs-v1-c14-018',
          ar: 'فَانظُرْ',
          en: 'so look --',
          tokens: [
            { surface: 'فَانظُرْ', lemma: 'نَظَرَ', pos: 'verb', features: 'conj+imp.2ms', root: 'ن ظ ر', gloss: 'to look; so look' },
          ],
        },
        {
          id: 'qs-v1-c14-019',
          ar: 'مَاذَا تَرَى﴾.',
          en: "what do you think?' (Qur'an 37:102)",
          tokens: [
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'تَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.2ms', root: 'ر أ ي', gloss: 'to see; you see, you think' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'He said: \'O my father, do what you are commanded; you will find me, if Allah wills, among the patient.\' (Qur\'an 37:102)',
      sentences: [
        {
          id: 'qs-v1-c14-020',
          ar: '﴿قَالَ',
          en: 'He said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v1-c14-021',
          ar: 'يَاأَبَتِ',
          en: "'O my father,",
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أَبَتِ', lemma: 'أَب', pos: 'noun', features: '1s', root: 'أ ب و', gloss: 'my father (frozen vocative form)' },
          ],
        },
        {
          id: 'qs-v1-c14-022',
          ar: 'افْعَلْ',
          en: 'do',
          tokens: [
            { surface: 'افْعَلْ', lemma: 'فَعَلَ', pos: 'verb', features: 'imp.2ms', root: 'ف ع ل', gloss: 'to do; do!' },
          ],
        },
        {
          id: 'qs-v1-c14-023',
          ar: 'مَا تُؤْمَرُ',
          en: 'what you are commanded;',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'تُؤْمَرُ', lemma: 'أَمَرَ', pos: 'verb', features: 'impf.pass.2ms', root: 'أ م ر', gloss: 'to command; you are commanded' },
          ],
        },
        {
          id: 'qs-v1-c14-024',
          ar: 'سَتَجِدُنِي',
          en: 'you will find me,',
          tokens: [
            { surface: 'سَتَجِدُنِي', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.2ms+1s', root: 'و ج د', gloss: 'to find; you will find me' },
          ],
        },
        {
          id: 'qs-v1-c14-025',
          ar: 'إِنْ شَاءَ',
          en: 'if',
          tokens: [
            { surface: 'إِنْ', lemma: 'إِنْ', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'شَاءَ', lemma: 'شَاءَ', pos: 'verb', features: 'perf.3ms', root: 'ش ي أ', gloss: 'to will, wish; wills' },
          ],
        },
        {
          id: 'qs-v1-c14-026',
          ar: 'اللَّهُ',
          en: 'Allah wills,',
          tokens: [
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v1-c14-027',
          ar: 'مِنَ الصَّابِرِينَ﴾.',
          en: "among the patient.' (Qur'an 37:102)",
          tokens: [
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, among' },
            { surface: 'الصَّابِرِينَ', lemma: 'صَابِر', pos: 'noun', features: 'pl.def.gen', root: 'ص ب ر', gloss: 'the patient ones' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ رَدَّ إِسْمَاعِيلُ عَلَى وَالِدِهِ؟',
          options: ['قَالَ: افْعَلْ مَا تُؤْمَرُ سَتَجِدُنِي مِنَ الصَّابِرِينَ', 'رَفَضَ وَبَكَى', 'هَرَبَ مِنْ أَبِيهِ'],
          answer: 0,
          qEn: 'How did Ismāʿīl respond to his father?',
          optionsEn: ["He said: 'Do what you are commanded; you will find me among the patient'", 'He refused and cried', 'He fled from his father'],
        },
      ],
    },
    {
      en: 'And Ibrāhīm took Ismāʿīl with him and took a knife. And when Ibrāhīm reached Minā, he wanted to sacrifice Ismāʿīl. And Ismāʿīl lay down upon the ground. And Ibrāhīm wanted to sacrifice him,',
      sentences: [
        {
          id: 'qs-v1-c14-028',
          ar: 'وَأَخَذَ إِبْرَاهِيمُ إِسْمَاعِيلَ مَعَهُ',
          en: 'And Ibrāhīm took Ismāʿīl with him',
          tokens: [
            { surface: 'وَأَخَذَ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ خ ذ', gloss: 'to take; and took' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'إِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'acc', gloss: 'Ismāʿīl' },
            { surface: 'مَعَهُ', lemma: 'مَعَ', pos: 'adv', features: 'adv+3ms', gloss: 'with him' },
          ],
        },
        {
          id: 'qs-v1-c14-029',
          ar: 'وَأَخَذَ سِكِّينًا.',
          en: 'and took a knife.',
          tokens: [
            { surface: 'وَأَخَذَ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ خ ذ', gloss: 'to take; and took' },
            { surface: 'سِكِّينًا', lemma: 'سِكِّين', pos: 'noun', features: 'indef.acc', root: 'س ك ن', gloss: 'a knife' },
          ],
        },
        {
          id: 'qs-v1-c14-030',
          ar: 'وَلَمَّا بَلَغَ إِبْرَاهِيمُ مِنًى،',
          en: 'And when Ibrāhīm reached Minā,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'بَلَغَ', lemma: 'بَلَغَ', pos: 'verb', features: 'perf.3ms', root: 'ب ل غ', gloss: 'to reach, arrive at; reached' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'مِنًى', lemma: 'مِنًى', pos: 'proper', features: 'acc', gloss: 'Minā' },
          ],
        },
        {
          id: 'qs-v1-c14-031',
          ar: 'أَرَادَ أَنْ يَذْبَحَ إِسْمَاعِيلَ.',
          en: 'he wanted to sacrifice Ismāʿīl.',
          tokens: [
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', root: 'ر و د', gloss: 'to want; wanted' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَذْبَحَ', lemma: 'ذَبَحَ', pos: 'verb', features: 'impf.3ms', root: 'ذ ب ح', gloss: 'to sacrifice; sacrifice' },
            { surface: 'إِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'acc', gloss: 'Ismāʿīl' },
          ],
        },
        {
          id: 'qs-v1-c14-032',
          ar: 'وَاضْطَجَعَ إِسْمَاعِيلُ عَلَى الْأَرْضِ.',
          en: 'And Ismāʿīl lay down upon the ground.',
          tokens: [
            { surface: 'وَاضْطَجَعَ', lemma: 'اِضْطَجَعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ض ج ع', gloss: 'to lie down; and lay down' },
            { surface: 'إِسْمَاعِيلُ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'nom', gloss: 'Ismāʿīl' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', root: 'أ ر ض', gloss: 'the ground' },
          ],
        },
        {
          id: 'qs-v1-c14-033',
          ar: 'وَأَرَادَ إِبْرَاهِيمُ أَنْ يَذْبَحَهُ',
          en: 'And Ibrāhīm wanted to sacrifice him,',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want; and wanted' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَذْبَحَهُ', lemma: 'ذَبَحَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'ذ ب ح', gloss: 'to sacrifice; sacrifice him' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'so he placed the knife on Ismāʿīl\'s throat. But Allah wished to see whether His close friend would do what He commands him, and whether he loves Allah more or loves his son more. And Ibrāhīm succeeded in the test.',
      sentences: [
        {
          id: 'qs-v1-c14-034',
          ar: 'فَوَضَعَ السِّكِّينَ عَلَى حُلْقُومِ إِسْمَاعِيلَ.',
          en: "so he placed the knife on Ismāʿīl's throat.",
          tokens: [
            { surface: 'فَوَضَعَ', lemma: 'وَضَعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'و ض ع', gloss: 'to place, put; so placed' },
            { surface: 'السِّكِّينَ', lemma: 'سِكِّين', pos: 'noun', features: 'def.acc', root: 'س ك ن', gloss: 'the knife' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'حُلْقُومِ', lemma: 'حُلْقُوم', pos: 'noun', features: 'gen.constr', root: 'ح ل ق م', gloss: 'throat (of)' },
            { surface: 'إِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'gen', gloss: 'Ismāʿīl' },
          ],
        },
        {
          id: 'qs-v1-c14-035',
          ar: 'وَلَكِنَّ اللَّهَ يُحِبُّ أَنْ يَرَى',
          en: 'But Allah wished to see',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', root: 'ح ب ب', gloss: 'to love, wish; wishes' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see; see' },
          ],
        },
        {
          id: 'qs-v1-c14-036',
          ar: 'هَلْ يَفْعَلُ خَلِيلُهُ مَا يَأْمُرُهُ',
          en: 'whether His close friend would do what He commands him,',
          tokens: [
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: '(question particle) whether' },
            { surface: 'يَفْعَلُ', lemma: 'فَعَلَ', pos: 'verb', features: 'impf.3ms', root: 'ف ع ل', gloss: 'to do; does' },
            { surface: 'خَلِيلُهُ', lemma: 'خَلِيل', pos: 'noun', features: 'nom+3ms', root: 'خ ل ل', gloss: 'His close friend' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَأْمُرُهُ', lemma: 'أَمَرَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'أ م ر', gloss: 'to command; He commands him' },
          ],
        },
        {
          id: 'qs-v1-c14-037',
          ar: 'وَهَلْ يُحِبُّ اللَّهَ أَكْثَرَ',
          en: 'and whether he loves Allah more',
          tokens: [
            { surface: 'وَهَلْ', lemma: 'هَلْ', pos: 'part', features: 'conj+part', gloss: 'and whether' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', root: 'ح ب ب', gloss: 'to love; loves' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'أَكْثَرَ', lemma: 'أَكْثَر', pos: 'adj', features: 'indef.acc', root: 'ك ث ر', gloss: 'more' },
          ],
        },
        {
          id: 'qs-v1-c14-038',
          ar: 'أَوْ يُحِبُّ ابْنَهُ أَكْثَرَ.',
          en: 'or loves his son more.',
          tokens: [
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', root: 'ح ب ب', gloss: 'to love; loves' },
            { surface: 'ابْنَهُ', lemma: 'اِبْن', pos: 'noun', features: 'acc+3ms', root: 'ب ن ي', gloss: 'his son' },
            { surface: 'أَكْثَرَ', lemma: 'أَكْثَر', pos: 'adj', features: 'indef.acc', root: 'ك ث ر', gloss: 'more' },
          ],
        },
        {
          id: 'qs-v1-c14-039',
          ar: 'وَنَجَحَ إِبْرَاهِيمُ فِي الِامْتِحَانِ.',
          en: 'And Ibrāhīm succeeded in the test.',
          tokens: [
            { surface: 'وَنَجَحَ', lemma: 'نَجَحَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ج ح', gloss: 'to succeed; and succeeded' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الِامْتِحَانِ', lemma: 'اِمْتِحَان', pos: 'noun', features: 'def.gen', root: 'م ح ن', gloss: 'the test, examination' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'So Allah sent Jibrīl with a ram from Paradise, and said: \'Sacrifice this, and do not sacrifice Ismāʿīl.\' And Allah loved Ibrāhīm\'s deed, so He commanded the Muslims to sacrifice on the feast of al-Aḍḥā. May Allah bless Ibrāhīm the close friend and grant him peace. And may Allah bless his son Ismāʿīl and grant him peace.',
      sentences: [
        {
          id: 'qs-v1-c14-040',
          ar: 'فَأَرْسَلَ اللَّهُ جِبْرِيلَ بِكَبْشٍ مِنَ الْجَنَّةِ',
          en: 'So Allah sent Jibrīl with a ram from Paradise,',
          tokens: [
            { surface: 'فَأَرْسَلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر س ل', gloss: 'to send; so sent' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'جِبْرِيلَ', lemma: 'جِبْرِيل', pos: 'proper', features: 'acc', gloss: 'Jibrīl, Gabriel' },
            { surface: 'بِكَبْشٍ', lemma: 'كَبْش', pos: 'noun', features: 'prep+indef.gen', root: 'ك ب ش', gloss: 'with a ram' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْجَنَّةِ', lemma: 'جَنَّة', pos: 'noun', features: 'def.gen', root: 'ج ن ن', gloss: 'Paradise' },
          ],
        },
        {
          id: 'qs-v1-c14-041',
          ar: 'وَقَالَ: اذْبَحْ هَذَا',
          en: "and said: 'Sacrifice this,",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'اذْبَحْ', lemma: 'ذَبَحَ', pos: 'verb', features: 'imp.2ms', root: 'ذ ب ح', gloss: 'to sacrifice; sacrifice!' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
          ],
        },
        {
          id: 'qs-v1-c14-042',
          ar: 'وَلَا تَذْبَحْ إِسْمَاعِيلَ.',
          en: "and do not sacrifice Ismāʿīl.'",
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَذْبَحْ', lemma: 'ذَبَحَ', pos: 'verb', features: 'impf.2ms', root: 'ذ ب ح', gloss: 'to sacrifice; do not sacrifice' },
            { surface: 'إِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'acc', gloss: 'Ismāʿīl' },
          ],
        },
        {
          id: 'qs-v1-c14-043',
          ar: 'وَأَحَبَّ اللَّهُ عَمَلَ إِبْرَاهِيمَ،',
          en: "And Allah loved Ibrāhīm's deed,",
          tokens: [
            { surface: 'وَأَحَبَّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'ح ب ب', gloss: 'to love; and loved' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَمَلَ', lemma: 'عَمَل', pos: 'noun', features: 'acc.constr', root: 'ع م ل', gloss: 'deed (of)' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c14-044',
          ar: 'فَأَمَرَ الْمُسْلِمِينَ بِالذَّبْحِ فِي عِيدِ الْأَضْحَى.',
          en: 'so He commanded the Muslims to sacrifice on the feast of al-Aḍḥā.',
          tokens: [
            { surface: 'فَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ م ر', gloss: 'to command; so commanded' },
            { surface: 'الْمُسْلِمِينَ', lemma: 'مُسْلِم', pos: 'noun', features: 'pl.def.acc', root: 'س ل م', gloss: 'the Muslims' },
            { surface: 'بِالذَّبْحِ', lemma: 'ذَبْح', pos: 'noun', features: 'prep+def.gen', root: 'ذ ب ح', gloss: 'with sacrifice, to sacrifice' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'on, during' },
            { surface: 'عِيدِ', lemma: 'عِيد', pos: 'noun', features: 'gen.constr', root: 'ع ي د', gloss: 'feast (of)' },
            { surface: 'الْأَضْحَى', lemma: 'أَضْحَى', pos: 'noun', features: 'def.gen', root: 'ض ح و', gloss: 'al-Aḍḥā' },
          ],
        },
        {
          id: 'qs-v1-c14-045',
          ar: 'صَلَّى اللَّهُ عَلَى إِبْرَاهِيمَ الْخَلِيلِ وَسَلَّمَ.',
          en: 'May Allah bless Ibrāhīm the close friend and grant him peace.',
          tokens: [
            { surface: 'صَلَّى', lemma: 'صَلَّى', pos: 'verb', features: 'perf.3ms', root: 'ص ل و', gloss: 'to bless, invoke blessings; may He bless' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
            { surface: 'الْخَلِيلِ', lemma: 'خَلِيل', pos: 'noun', features: 'def.gen', root: 'خ ل ل', gloss: 'the close friend' },
            { surface: 'وَسَلَّمَ', lemma: 'سَلَّمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ل م', gloss: 'to grant peace; and granted peace' },
          ],
        },
        {
          id: 'qs-v1-c14-046',
          ar: 'وَصَلَّى اللَّهُ عَلَى ابْنِهِ إِسْمَاعِيلَ وَسَلَّمَ.',
          en: 'And may Allah bless his son Ismāʿīl and grant him peace.',
          tokens: [
            { surface: 'وَصَلَّى', lemma: 'صَلَّى', pos: 'verb', features: 'conj+perf.3ms', root: 'ص ل و', gloss: 'to bless; and may He bless' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'ابْنِهِ', lemma: 'اِبْن', pos: 'noun', features: 'gen+3ms', root: 'ب ن ي', gloss: 'his son' },
            { surface: 'إِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'gen', gloss: 'Ismāʿīl' },
            { surface: 'وَسَلَّمَ', lemma: 'سَلَّمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ل م', gloss: 'to grant peace; and granted peace' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا أَرْسَلَ اللَّهُ بَدَلًا مِنْ إِسْمَاعِيلَ؟',
          options: ['كَبْشًا مِنَ الْجَنَّةِ مَعَ جِبْرِيلَ', 'مَلَاكًا آخَرَ', 'مَاءً وَطَعَامًا'],
          answer: 0,
          qEn: 'What did Allah send instead of Ismāʿīl?',
          optionsEn: ['A ram from Paradise with Jibrīl', 'Another angel', 'Water and food'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '﴿إِنِّي أَرَى فِي الْمَنَامِ',
        post: 'أَذْبَحُكَ فَانظُرْ مَاذَا تَرَى﴾.',
        en: "'Indeed I see in the dream that I am sacrificing you; so look, what do you think?'",
        options: ['أَنِّي', 'أَنَّهُ', 'أَنَّكَ', 'أَنَّهَا'],
        answer: 0,
        rationales: [
          "1st person 'that I' -- Ibrāhīm is speaking about his own dream.",
          "3rd masculine 'that he' -- wrong person.",
          "2nd masculine 'that you' -- wrong person.",
          "3rd feminine 'that she' -- wrong person and gender.",
        ],
      },
      {
        type: 'cloze',
        pre: 'يَاأَبَتِ افْعَلْ مَا',
        post: '.',
        en: 'O my father, do what you are commanded.',
        options: ['تُؤْمَرُ', 'تَأْمُرُ', 'أَمَرْتَ', 'آمُرُ'],
        answer: 0,
        rationales: [
          "Passive imperfect -- 'what you are commanded' (by Allah); Ismāʿīl is the one receiving the command.",
          "Active 'you command' -- reverses who is commanding whom.",
          "'You commanded' -- wrong tense and voice.",
          "'I command' -- wrong person and voice.",
        ],
      },
      {
        type: 'cloze',
        pre: 'وَهَلْ يُحِبُّ اللَّهَ',
        post: 'أَوْ يُحِبُّ ابْنَهُ أَكْثَرَ؟',
        en: 'And does he love Allah more, or love his son more?',
        options: ['أَكْثَرَ', 'أَكْثَرُ', 'أَكْثَرِ', 'كَثِيرًا'],
        answer: 0,
        rationales: [
          'Accusative -- adverbial accusative of degree, matching the parallel أَكْثَرَ later in the sentence.',
          'Nominative -- wrong case for this adverbial usage.',
          'Genitive -- nothing here governs the genitive.',
          "كَثِيرًا = 'much' (positive degree) -- not the comparative 'more' needed here.",
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُحِبُّ اللَّهَ أَكْثَرَ',
        pre: '',
        post: 'اللَّهَ أَكْثَرَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُحِبُّ', 'يُحِبُّ', 'تُحِبُّ', 'نُحِبُّ'],
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
        base: 'يُحِبُّ اللَّهَ أَكْثَرَ',
        pre: '',
        post: 'اللَّهَ أَكْثَرَ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تُحِبُّ', 'أُحِبُّ', 'يُحِبُّ', 'نُحِبُّ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '1st singular -- I.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يُحِبُّ اللَّهَ أَكْثَرَ',
        pre: '',
        post: 'اللَّهَ أَكْثَرَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نُحِبُّ', 'أُحِبُّ', 'تُحِبُّ', 'يُحِبُّ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine singular -- he, the form already given.',
        ],
      },
    ],
  },
};

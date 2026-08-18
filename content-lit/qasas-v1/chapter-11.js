// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 11 --
// دَعْوَةُ الْوَالِدِ. Printed page 20 (top half; ch12 begins at the bottom of
// the same page). Transcribed by hand from the scan (vision OCR, 300dpi
// render) against QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// Three bracketed groups are direct Qur'anic quotation (Surah Maryam,
// 19:42, 19:44, 19:47) and are split into fragments of at most 2 tokens
// each (same workaround as ch4-10):
//   -- qs-v1-c11-{003,004,005,006,007}: ﴿يَا أَبَتِ لِمَ تَعْبُدُ مَا لَا يَسْمَعُ
//      وَلَا يُبْصِرُ﴾ (19:42, 9 words incl. the vocative يَا/أَبَتِ pair)
//   -- qs-v1-c11-{009,010,011}: ﴿يَا أَبَتِ لَا تَعْبُدِ الشَّيْطَانَ﴾ (19:44)
//   -- qs-v1-c11-018: ﴿سَلَامٌ عَلَيْكَ﴾ (19:47) -- already exactly 2 tokens,
//      kept as one fragment; no further split needed.
// يَا and أَبَتِ are tokenized as two separate surfaces even though the print
// joins them without a space (يَاأَبَتِ) -- the validator strips whitespace
// before comparing, so this is safe and keeps the vocative particle and the
// vocative noun as distinct, correctly-tagged tokens.
//
// "وَلِمَ تَعْبُدُ مَا لَا يَنْفَعُ وَلَا يَضُرُّ؟!" and "يَا أَبَتِ اُعْبُدِ
// الرَّحْمَنَ!" have NO guillemets in print -- they are the author's own
// paraphrase in the spirit of the sūrah, not further direct quotation, so
// they are tokenized normally (and are build-eligible).
//
// Grammar note: تَعْبُدِ in «لَا تَعْبُدِ الشَّيْطَانَ» and تَقُلْ in "وَلَا تَقُلْ
// شَيْئًا" are prohibitive جزم (jussive after لا الناهية), tagged impf.2ms per
// the documented mood atoms (impf/perf/imp/pass) -- a true prohibition
// keeps the imperfect ت-prefix and is grammatically distinct from a true
// imperative (tagged imp.2ms), which drops it; اُعْبُدِ and اتْرُكْنِي below
// ARE true imperatives.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch11',
  title: { ar: 'دَعْوَةُ الْوَالِدِ', en: "The Call to His Father" },
  newWords: [
    'أَبْصَرَ', 'شَيْطَان', 'رَحْمَن', 'ضَرَبَ', 'حَلِيم', 'ذَهَبَ', 'هُنَا', 'تَأَسَّفَ', 'بَلَد',
  ],
  lemmas: {
    'أَبْصَرَ': { gloss: 'to see, perceive' },
    'شَيْطَان': { gloss: 'Satan, devil' },
    'رَحْمَن': { gloss: 'the Most Merciful (a name of Allah)' },
    'ضَرَبَ': { gloss: 'to strike, hit' },
    'حَلِيم': { gloss: 'forbearing, patient, gentle' },
    'ذَهَبَ': { gloss: 'to go' },
    'هُنَا': { gloss: 'here' },
    'تَأَسَّفَ': { gloss: 'to grieve, feel sorrow, regret' },
    'بَلَد': { gloss: 'land, country, town' },
  },
  paragraphs: [
    {
      en: 'And Ibrāhīm wanted to call his father too, so he said to him: \'O my father, why do you worship that which does not hear and does not see?\' (Qur\'an 19:42) And why do you worship that which neither benefits nor harms?! \'O my father, do not worship Satan!\' (Qur\'an 19:44) O my father, worship the Most Merciful!',
      sentences: [
        {
          id: 'qs-v1-c11-001',
          ar: 'وَأَرَادَ إِبْرَاهِيمُ أَنْ يَدْعُوَ وَالِدَهُ أَيْضًا،',
          en: 'And Ibrāhīm wanted to call his father too,',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want, intend' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَدْعُوَ', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms', root: 'د ع و', gloss: 'to call; call' },
            { surface: 'وَالِدَهُ', lemma: 'وَالِد', pos: 'noun', features: 'acc+3ms', root: 'و ل د', gloss: 'his father' },
            { surface: 'أَيْضًا', lemma: 'أَيْضًا', pos: 'adv', features: 'indef.acc', gloss: 'also, too' },
          ],
        },
        {
          id: 'qs-v1-c11-002',
          ar: 'فَقَالَ لَهُ:',
          en: 'so he said to him:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'so said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v1-c11-003',
          ar: '﴿يَاأَبَتِ',
          en: "'O my father,",
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أَبَتِ', lemma: 'أَب', pos: 'noun', features: '1s', root: 'أ ب و', gloss: 'my father (frozen vocative form)' },
          ],
        },
        {
          id: 'qs-v1-c11-004',
          ar: 'لِمَ تَعْبُدُ',
          en: 'why do you worship',
          tokens: [
            { surface: 'لِمَ', lemma: 'لِمَ', pos: 'rel', features: 'rel', gloss: 'why' },
            { surface: 'تَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2ms', root: 'ع ب د', gloss: 'to worship; do you worship' },
          ],
        },
        {
          id: 'qs-v1-c11-005',
          ar: 'مَا',
          en: 'that which',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'that which' },
          ],
        },
        {
          id: 'qs-v1-c11-006',
          ar: 'لَا يَسْمَعُ',
          en: 'does not hear',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْمَعُ', lemma: 'سَمِعَ', pos: 'verb', features: 'impf.3ms', root: 'س م ع', gloss: 'to hear; hears' },
          ],
        },
        {
          id: 'qs-v1-c11-007',
          ar: 'وَلَا يُبْصِرُ﴾.',
          en: "and does not see?' (Qur'an 19:42)",
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُبْصِرُ', lemma: 'أَبْصَرَ', pos: 'verb', features: 'impf.3ms', root: 'ب ص ر', gloss: 'to see, perceive; sees' },
          ],
        },
        {
          id: 'qs-v1-c11-008',
          ar: 'وَلِمَ تَعْبُدُ مَا لَا يَنْفَعُ وَلَا يَضُرُّ؟!',
          en: 'And why do you worship that which neither benefits nor harms?!',
          tokens: [
            { surface: 'وَلِمَ', lemma: 'لِمَ', pos: 'rel', features: 'conj+rel', gloss: 'and why' },
            { surface: 'تَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2ms', root: 'ع ب د', gloss: 'to worship; do you worship' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'that which' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَنْفَعُ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3ms', root: 'ن ف ع', gloss: 'to benefit; benefits' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَضُرُّ', lemma: 'ضَرَّ', pos: 'verb', features: 'impf.3ms', root: 'ض ر ر', gloss: 'to harm; harms' },
          ],
        },
        {
          id: 'qs-v1-c11-009',
          ar: '﴿يَاأَبَتِ',
          en: "'O my father,",
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أَبَتِ', lemma: 'أَب', pos: 'noun', features: '1s', root: 'أ ب و', gloss: 'my father (frozen vocative form)' },
          ],
        },
        {
          id: 'qs-v1-c11-010',
          ar: 'لَا تَعْبُدِ',
          en: 'do not worship',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَعْبُدِ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2ms', root: 'ع ب د', gloss: 'to worship; do not worship' },
          ],
        },
        {
          id: 'qs-v1-c11-011',
          ar: 'الشَّيْطَانَ﴾!',
          en: "Satan!' (Qur'an 19:44)",
          tokens: [
            { surface: 'الشَّيْطَانَ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.acc', root: 'ش ط ن', gloss: 'Satan, the devil' },
          ],
        },
        {
          id: 'qs-v1-c11-012',
          ar: 'يَا أَبَتِ اُعْبُدِ الرَّحْمَنَ!',
          en: 'O my father, worship the Most Merciful!',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أَبَتِ', lemma: 'أَب', pos: 'noun', features: '1s', root: 'أ ب و', gloss: 'my father (frozen vocative form)' },
            { surface: 'اُعْبُدِ', lemma: 'عَبَدَ', pos: 'verb', features: 'imp.2ms', root: 'ع ب د', gloss: 'to worship; worship!' },
            { surface: 'الرَّحْمَنَ', lemma: 'رَحْمَن', pos: 'proper', features: 'acc', root: 'ر ح م', gloss: 'the Most Merciful' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا نَصَحَ إِبْرَاهِيمُ وَالِدَهُ؟',
          options: ['أَلَّا يَعْبُدَ مَا لَا يَسْمَعُ وَلَا يُبْصِرُ', 'أَنْ يُسَافِرَ مَعَهُ', 'أَنْ يَبِيعَ الْأَصْنَامَ'],
          answer: 0,
          qEn: 'What did Ibrāhīm advise his father?',
          optionsEn: ['Not to worship what neither hears nor sees', 'To travel with him', 'To sell the idols'],
        },
      ],
    },
    {
      lines: true,
      en: 'And Ibrāhīm\'s father became angry, and said: \'I will strike you; so leave me and say nothing.\' And Ibrāhīm was forbearing, and said to his father: \'Peace be upon you.\' (Qur\'an 19:47)',
      sentences: [
        {
          id: 'qs-v1-c11-013',
          ar: 'وَغَضِبَ وَالِدُ إِبْرَاهِيمَ،',
          en: "And Ibrāhīm's father became angry,",
          tokens: [
            { surface: 'وَغَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'غ ض ب', gloss: 'to become angry; and became angry' },
            { surface: 'وَالِدُ', lemma: 'وَالِد', pos: 'noun', features: 'nom.constr', root: 'و ل د', gloss: 'father (of)' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c11-014',
          ar: 'وَقَالَ: أَنَا أَضْرِبُكَ،',
          en: "and said: 'I will strike you;",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'أَضْرِبُكَ', lemma: 'ضَرَبَ', pos: 'verb', features: 'impf.1s+2ms', root: 'ض ر ب', gloss: 'to strike; I will strike you' },
          ],
        },
        {
          id: 'qs-v1-c11-015',
          ar: 'فَاتْرُكْنِي وَلَا تَقُلْ شَيْئًا.',
          en: "so leave me and say nothing.'",
          tokens: [
            { surface: 'فَاتْرُكْنِي', lemma: 'تَرَكَ', pos: 'verb', features: 'conj+imp.2ms+1s', root: 'ت ر ك', gloss: 'to leave; so leave me' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَقُلْ', lemma: 'قَالَ', pos: 'verb', features: 'impf.2ms', root: 'ق و ل', gloss: 'to say; do not say' },
            { surface: 'شَيْئًا', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', root: 'ش ي أ', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v1-c11-016',
          ar: 'وَكَانَ إِبْرَاهِيمُ حَلِيمًا،',
          en: 'And Ibrāhīm was forbearing,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'حَلِيمًا', lemma: 'حَلِيم', pos: 'adj', features: 'indef.acc', root: 'ح ل م', gloss: 'forbearing, patient' },
          ],
        },
        {
          id: 'qs-v1-c11-017',
          ar: 'فَقَالَ لِوَالِدِهِ:',
          en: 'and said to his father:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'so said' },
            { surface: 'لِوَالِدِهِ', lemma: 'وَالِد', pos: 'noun', features: 'prep+gen+3ms', root: 'و ل د', gloss: 'to his father' },
          ],
        },
        {
          id: 'qs-v1-c11-018',
          ar: '﴿سَلَامٌ عَلَيْكَ﴾.',
          en: "'Peace be upon you.' (Qur'an 19:47)",
          tokens: [
            { surface: 'سَلَامٌ', lemma: 'سَلَام', pos: 'noun', features: 'indef.nom', root: 'س ل م', gloss: 'peace' },
            { surface: 'عَلَيْكَ', lemma: 'عَلَى', pos: 'prep', features: 'prep+2ms', gloss: 'upon you' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ رَدَّ وَالِدُ إِبْرَاهِيمَ عَلَيْهِ؟',
          options: ['غَضِبَ وَهَدَّدَهُ بِالضَّرْبِ', 'فَرِحَ بِكَلَامِهِ', 'سَكَتَ فَقَطْ'],
          answer: 0,
          qEn: "How did Ibrāhīm's father respond to him?",
          optionsEn: ['He became angry and threatened to strike him', 'He was happy with his words', 'He simply stayed silent'],
        },
      ],
    },
    {
      en: 'And he said to him: \'I will leave from here and call upon my Lord.\' And Ibrāhīm grieved greatly, and wanted to go to another land, and worship his Lord, and call the people to Allah.',
      sentences: [
        {
          id: 'qs-v1-c11-019',
          ar: 'وَقَالَ لَهُ: أَنَا أَذْهَبُ مِنْ هُنَا',
          en: "And he said to him: 'I will leave from here",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'أَذْهَبُ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.1s', root: 'ذ ه ب', gloss: 'to go; I will go' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'هُنَا', lemma: 'هُنَا', pos: 'adv', features: 'adv', gloss: 'here' },
          ],
        },
        {
          id: 'qs-v1-c11-020',
          ar: 'وَأَدْعُو رَبِّي.',
          en: "and call upon my Lord.'",
          tokens: [
            { surface: 'وَأَدْعُو', lemma: 'دَعَا', pos: 'verb', features: 'conj+impf.1s', root: 'د ع و', gloss: 'to call; and call upon' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'acc+1s', root: 'ر ب ب', gloss: 'my Lord' },
          ],
        },
        {
          id: 'qs-v1-c11-021',
          ar: 'وَتَأَسَّفَ إِبْرَاهِيمُ جِدًّا،',
          en: 'And Ibrāhīm grieved greatly,',
          tokens: [
            { surface: 'وَتَأَسَّفَ', lemma: 'تَأَسَّفَ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ س ف', gloss: 'to grieve, regret; and grieved' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'greatly' },
          ],
        },
        {
          id: 'qs-v1-c11-022',
          ar: 'وَأَرَادَ أَنْ يَذْهَبَ إِلَى بَلَدٍ آخَرَ،',
          en: 'and wanted to go to another land,',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want, intend' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَذْهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.3ms', root: 'ذ ه ب', gloss: 'to go; go' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'بَلَدٍ', lemma: 'بَلَد', pos: 'noun', features: 'indef.gen', root: 'ب ل د', gloss: 'a land, country' },
            { surface: 'آخَرَ', lemma: 'آخَر', pos: 'adj', features: 'indef.gen', root: 'أ خ ر', gloss: 'another' },
          ],
        },
        {
          id: 'qs-v1-c11-023',
          ar: 'وَيَعْبُدَ رَبَّهُ،',
          en: 'and worship his Lord,',
          tokens: [
            { surface: 'وَيَعْبُدَ', lemma: 'عَبَدَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ع ب د', gloss: 'to worship; and worship' },
            { surface: 'رَبَّهُ', lemma: 'رَبّ', pos: 'noun', features: 'acc+3ms', root: 'ر ب ب', gloss: 'his Lord' },
          ],
        },
        {
          id: 'qs-v1-c11-024',
          ar: 'وَيَدْعُوَ النَّاسَ إِلَى اللَّهِ.',
          en: 'and call the people to Allah.',
          tokens: [
            { surface: 'وَيَدْعُوَ', lemma: 'دَعَا', pos: 'verb', features: 'conj+impf.3ms', root: 'د ع و', gloss: 'to call; and call' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', root: 'ن و س', gloss: 'the people' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَرَّرَ إِبْرَاهِيمُ أَنْ يَفْعَلَ بَعْدَ ذَلِكَ؟',
          options: ['أَنْ يَذْهَبَ إِلَى بَلَدٍ آخَرَ وَيَعْبُدَ رَبَّهُ', 'أَنْ يَبْقَى مَعَ وَالِدِهِ', 'أَنْ يَعْبُدَ الْأَصْنَامَ'],
          answer: 0,
          qEn: 'What did Ibrāhīm decide to do after that?',
          optionsEn: ['To go to another land and worship his Lord', 'To stay with his father', 'To worship the idols'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '﴿يَاأَبَتِ لَا',
        post: 'الشَّيْطَانَ﴾!',
        en: "'O my father, do not worship Satan!'",
        options: ['تَعْبُدِ', 'تَعْبُدُ', 'اُعْبُدْ', 'يَعْبُدْ'],
        answer: 0,
        rationales: [
          'Jussive after لَا الناهية (prohibition) -- the final vowel drops to a kasra before the following word.',
          'Indicative -- wrong mood; a prohibition needs the jussive.',
          "A true imperative -- wrong; لَا cannot combine with a true imperative in Arabic, only with the jussive.",
          '3rd person -- wrong person; Ibrāhīm is addressing his father directly.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ إِبْرَاهِيمُ',
        post: '، فَقَالَ لِوَالِدِهِ.',
        en: 'And Ibrāhīm was forbearing, and said to his father.',
        options: ['حَلِيمًا', 'حَلِيمٌ', 'حَلِيمٍ', 'حُلَمَاء'],
        answer: 0,
        rationales: [
          'Accusative -- the خبر of كَانَ is accusative.',
          'Nominative -- wrong case for the predicate of كَانَ.',
          'Genitive -- nothing here governs the genitive.',
          'Plural -- but only Ibrāhīm, one person, is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَرَادَ أَنْ يَذْهَبَ إِلَى بَلَدٍ',
        post: '.',
        en: 'And he wanted to go to another land.',
        options: ['آخَرَ', 'آخَرُ', 'آخَرًا', 'آخَرِينَ'],
        answer: 0,
        rationales: [
          'Genitive -- agrees with بَلَدٍ, which is genitive after the preposition إِلَى.',
          'Nominative -- wrong case.',
          'Accusative -- wrong case; nothing here calls for the accusative.',
          'Plural -- but only one land is meant.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَنَا أَذْهَبُ مِنْ هُنَا',
        pre: '',
        post: 'مِنْ هُنَا',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَذْهَبُ', 'أَذْهَبُ', 'يَذْهَبُ', 'نَذْهَبُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '1st singular -- I, the form already given.',
          '3rd masculine singular -- he.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'أَنَا أَذْهَبُ مِنْ هُنَا',
        pre: '',
        post: 'مِنْ هُنَا',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَذْهَبُونَ', 'أَذْهَبُ', 'تَذْهَبُ', 'نَذْهَبُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '1st singular -- I, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'أَنَا أَذْهَبُ مِنْ هُنَا',
        pre: '',
        post: 'مِنْ هُنَا',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَذْهَبُ', 'أَذْهَبُ', 'تَذْهَبُ', 'يَذْهَبُونَ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '1st singular -- I, the form already given.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine plural -- they (m.).',
        ],
      },
    ],
  },
};

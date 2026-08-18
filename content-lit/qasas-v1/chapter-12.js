// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 12 -- إِلَى
// مَكَّةَ. Printed pages 20 (bottom, after ch11) - 21 (full page).
// Transcribed by hand from the scan (vision OCR, 300dpi render) against
// QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// No guillemets/Qur'anic quotation on these pages -- this chapter is pure
// narrative prose (the emigration to Makkah, its barrenness, and the start
// of the famous "did Allah command you to do this? -- Yes -- then He will
// not neglect us" exchange with Hājar, echoing the ḥadīth tradition), so no
// build-eligibility fragmentation is needed anywhere in this chapter.
//
// Heavy landscape/travel vocabulary (grass, trees, well, river, animal,
// human) since this is the first description of Makkah's setting.
// مَكَّة, هَاجَر, and إِسْمَاعِيل are diptote proper nouns (ممنوع من الصرف) --
// their accusative/genitive forms show a bare fatḥah with no tanwīn, which
// is why عroperties like "مَكَّةَ" look identical whether the case is
// accusative or genitive; features are tagged for the grammatically correct
// case regardless of the surface twinning.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch12',
  title: { ar: 'إِلَى مَكَّةَ', en: 'To Makkah' },
  newWords: [
    'سَافَرَ', 'خَرَجَ', 'وَدَّعَ', 'قَصَدَ', 'مَعَ', 'زَوْج', 'عُشْب', 'شَجَر', 'بِئْر',
    'نَهْر', 'حَيَوَان', 'بَشَر', 'وَصَلَ', 'نَزَلَ', 'أَيْن', 'سَيِّد', 'مَاء', 'ضَيَّعَ',
    'نَعَمْ', 'إِذًا',
  ],
  lemmas: {
    'سَافَرَ': { gloss: 'to travel' },
    'خَرَجَ': { gloss: 'to leave, go out' },
    'وَدَّعَ': { gloss: 'to bid farewell to' },
    'قَصَدَ': { gloss: 'to head for, make for, intend' },
    'مَعَ': { gloss: 'with' },
    'زَوْج': { gloss: 'spouse (husband or wife)' },
    'عُشْب': { gloss: 'grass, herbage' },
    'شَجَر': { gloss: 'trees' },
    'بِئْر': { gloss: 'well' },
    'نَهْر': { gloss: 'river' },
    'حَيَوَان': { gloss: 'animal' },
    'بَشَر': { gloss: 'human being(s), mankind' },
    'وَصَلَ': { gloss: 'to arrive' },
    'نَزَلَ': { gloss: 'to descend, settle, alight' },
    'أَيْن': { gloss: 'where' },
    'سَيِّد': { gloss: 'master, lord' },
    'مَاء': { gloss: 'water' },
    'ضَيَّعَ': { gloss: 'to neglect, waste, lose, cause to be lost' },
    'نَعَمْ': { gloss: 'yes' },
    'إِذًا': { gloss: 'then, in that case' },
  },
  paragraphs: [
    {
      en: 'And Ibrāhīm\'s people became angry, and the king became angry, and Ibrāhīm\'s father became angry. And Ibrāhīm wanted to travel to another land and worship Allah there, and call the people to Allah.',
      sentences: [
        {
          id: 'qs-v1-c12-001',
          ar: 'وَغَضِبَ قَوْمُ إِبْرَاهِيمَ',
          en: "And Ibrāhīm's people became angry,",
          tokens: [
            { surface: 'وَغَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'غ ض ب', gloss: 'to become angry; and became angry' },
            { surface: 'قَوْمُ', lemma: 'قَوْم', pos: 'noun', features: 'nom.constr', root: 'ق و م', gloss: 'people (of)' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c12-002',
          ar: 'وَغَضِبَ الْمَلِكُ',
          en: 'and the king became angry,',
          tokens: [
            { surface: 'وَغَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'غ ض ب', gloss: 'to become angry; and became angry' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the king' },
          ],
        },
        {
          id: 'qs-v1-c12-003',
          ar: 'وَغَضِبَ وَالِدُ إِبْرَاهِيمَ.',
          en: "and Ibrāhīm's father became angry.",
          tokens: [
            { surface: 'وَغَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'غ ض ب', gloss: 'to become angry; and became angry' },
            { surface: 'وَالِدُ', lemma: 'وَالِد', pos: 'noun', features: 'nom.constr', root: 'و ل د', gloss: 'father (of)' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c12-004',
          ar: 'وَأَرَادَ إِبْرَاهِيمُ أَنْ يُسَافِرَ إِلَى بَلَدٍ آخَرَ',
          en: 'And Ibrāhīm wanted to travel to another land',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want, intend' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُسَافِرَ', lemma: 'سَافَرَ', pos: 'verb', features: 'impf.3ms', root: 'س ف ر', gloss: 'to travel' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'بَلَدٍ', lemma: 'بَلَد', pos: 'noun', features: 'indef.gen', root: 'ب ل د', gloss: 'a land' },
            { surface: 'آخَرَ', lemma: 'آخَر', pos: 'adj', features: 'indef.gen', root: 'أ خ ر', gloss: 'another' },
          ],
        },
        {
          id: 'qs-v1-c12-005',
          ar: 'وَيَعْبُدَ فِيهِ اللَّهَ',
          en: 'and worship Allah there,',
          tokens: [
            { surface: 'وَيَعْبُدَ', lemma: 'عَبَدَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ع ب د', gloss: 'to worship; and worship' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in it' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v1-c12-006',
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
      checks: [],
    },
    {
      en: 'And Ibrāhīm left his land and bid farewell to his father. And Ibrāhīm made for Makkah with his wife Hājar. And Makkah had no grass and no trees in it. And Makkah had no well and no river in it.',
      sentences: [
        {
          id: 'qs-v1-c12-007',
          ar: 'وَخَرَجَ إِبْرَاهِيمُ مِنْ بَلَدِهِ',
          en: 'And Ibrāhīm left his land',
          tokens: [
            { surface: 'وَخَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ر ج', gloss: 'to leave, go out; and left' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'بَلَدِهِ', lemma: 'بَلَد', pos: 'noun', features: 'gen+3ms', root: 'ب ل د', gloss: 'his land' },
          ],
        },
        {
          id: 'qs-v1-c12-008',
          ar: 'وَوَدَّعَ وَالِدَهُ.',
          en: 'and bid farewell to his father.',
          tokens: [
            { surface: 'وَوَدَّعَ', lemma: 'وَدَّعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'و د ع', gloss: 'to bid farewell to; and bid farewell to' },
            { surface: 'وَالِدَهُ', lemma: 'وَالِد', pos: 'noun', features: 'acc+3ms', root: 'و ل د', gloss: 'his father' },
          ],
        },
        {
          id: 'qs-v1-c12-009',
          ar: 'وَقَصَدَ إِبْرَاهِيمُ مَكَّةَ',
          en: 'And Ibrāhīm made for Makkah',
          tokens: [
            { surface: 'وَقَصَدَ', lemma: 'قَصَدَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق ص د', gloss: 'to head for, make for; and made for' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'مَكَّةَ', lemma: 'مَكَّة', pos: 'proper', features: 'acc', root: 'م ك ك', gloss: 'Makkah' },
          ],
        },
        {
          id: 'qs-v1-c12-010',
          ar: 'وَمَعَهُ زَوْجُهُ هَاجَرُ.',
          en: 'with his wife Hājar.',
          tokens: [
            { surface: 'وَمَعَهُ', lemma: 'مَعَ', pos: 'adv', features: 'conj+adv+3ms', gloss: 'and with him' },
            { surface: 'زَوْجُهُ', lemma: 'زَوْج', pos: 'noun', features: 'nom+3ms', root: 'ز و ج', gloss: 'his wife' },
            { surface: 'هَاجَرُ', lemma: 'هَاجَر', pos: 'proper', features: 'nom', gloss: 'Hājar' },
          ],
        },
        {
          id: 'qs-v1-c12-011',
          ar: 'وَكَانَتْ مَكَّةُ لَيْسَ فِيهَا عُشْبٌ وَلَا شَجَرٌ.',
          en: 'And Makkah had no grass and no trees in it.',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'مَكَّةُ', lemma: 'مَكَّة', pos: 'proper', features: 'nom', root: 'م ك ك', gloss: 'Makkah' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'عُشْبٌ', lemma: 'عُشْب', pos: 'noun', features: 'indef.nom', root: 'ع ش ب', gloss: 'grass, herbage' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'شَجَرٌ', lemma: 'شَجَر', pos: 'noun', features: 'indef.nom', root: 'ش ج ر', gloss: 'trees' },
          ],
        },
        {
          id: 'qs-v1-c12-012',
          ar: 'وَكَانَتْ مَكَّةُ لَيْسَ فِيهَا بِئْرٌ وَلَا نَهْرٌ.',
          en: 'And Makkah had no well and no river in it.',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'مَكَّةُ', lemma: 'مَكَّة', pos: 'proper', features: 'nom', root: 'م ك ك', gloss: 'Makkah' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'بِئْرٌ', lemma: 'بِئْر', pos: 'noun', features: 'indef.nom', root: 'ب أ ر', gloss: 'well' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَهْرٌ', lemma: 'نَهْر', pos: 'noun', features: 'indef.nom', root: 'ن ه ر', gloss: 'river' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَعَ مَنْ سَافَرَ إِبْرَاهِيمُ إِلَى مَكَّةَ؟',
          options: ['مَعَ زَوْجِهِ هَاجَرَ', 'مَعَ وَالِدِهِ', 'مَعَ الْمَلِكِ'],
          answer: 0,
          qEn: 'Who did Ibrāhīm travel to Makkah with?',
          optionsEn: ['With his wife Hājar', 'With his father', 'With the king'],
        },
        {
          q: 'كَيْفَ كَانَتْ مَكَّةُ عِنْدَمَا وَصَلَ إِلَيْهَا إِبْرَاهِيمُ؟',
          options: ['لَيْسَ فِيهَا عُشْبٌ وَلَا شَجَرٌ وَلَا مَاءٌ', 'مَدِينَةً كَبِيرَةً وَجَمِيلَةً', 'مَلِيئَةً بِالنَّاسِ'],
          answer: 0,
          qEn: 'What was Makkah like when Ibrāhīm arrived there?',
          optionsEn: ['It had no grass, no trees, and no water', 'A great and beautiful city', 'Full of people'],
        },
      ],
    },
    {
      lines: true,
      en: 'And Makkah had no animal and no human in it. And Ibrāhīm arrived at Makkah and settled in it. And Ibrāhīm left his wife Hājar and his son Ismāʿīl, and when Ibrāhīm wanted to leave, his wife Hājar said: \'To where, my master? Will you leave me here? Will you leave me when there is no water and no food here! Did Allah command you to do this?\' Ibrāhīm said: \'Yes!\' Hājar said: \'Then He will not neglect us!\'',
      sentences: [
        {
          id: 'qs-v1-c12-013',
          ar: 'وَكَانَتْ مَكَّةُ لَيْسَ فِيهَا حَيَوَانٌ وَلَا بَشَرٌ.',
          en: 'And Makkah had no animal and no human in it.',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'مَكَّةُ', lemma: 'مَكَّة', pos: 'proper', features: 'nom', root: 'م ك ك', gloss: 'Makkah' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'حَيَوَانٌ', lemma: 'حَيَوَان', pos: 'noun', features: 'indef.nom', root: 'ح ي و', gloss: 'animal' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'بَشَرٌ', lemma: 'بَشَر', pos: 'noun', features: 'indef.nom', root: 'ب ش ر', gloss: 'human being(s)' },
          ],
        },
        {
          id: 'qs-v1-c12-014',
          ar: 'وَوَصَلَ إِبْرَاهِيمُ إِلَى مَكَّةَ',
          en: 'And Ibrāhīm arrived at Makkah',
          tokens: [
            { surface: 'وَوَصَلَ', lemma: 'وَصَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'و ص ل', gloss: 'to arrive; and arrived' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مَكَّةَ', lemma: 'مَكَّة', pos: 'proper', features: 'gen', root: 'م ك ك', gloss: 'Makkah' },
          ],
        },
        {
          id: 'qs-v1-c12-015',
          ar: 'وَنَزَلَ فِيهَا.',
          en: 'and settled in it.',
          tokens: [
            { surface: 'وَنَزَلَ', lemma: 'نَزَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ز ل', gloss: 'to descend, settle; and settled' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
          ],
        },
        {
          id: 'qs-v1-c12-016',
          ar: 'وَتَرَكَ إِبْرَاهِيمُ زَوْجَهُ هَاجَرَ وَوَلَدَهُ إِسْمَاعِيلَ،',
          en: 'And Ibrāhīm left his wife Hājar and his son Ismāʿīl,',
          tokens: [
            { surface: 'وَتَرَكَ', lemma: 'تَرَكَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ت ر ك', gloss: 'to leave; and left' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'زَوْجَهُ', lemma: 'زَوْج', pos: 'noun', features: 'acc+3ms', root: 'ز و ج', gloss: 'his wife' },
            { surface: 'هَاجَرَ', lemma: 'هَاجَر', pos: 'proper', features: 'acc', gloss: 'Hājar' },
            { surface: 'وَوَلَدَهُ', lemma: 'وَلَد', pos: 'noun', features: 'conj+acc+3ms', root: 'و ل د', gloss: 'and his son' },
            { surface: 'إِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'acc', gloss: 'Ismāʿīl' },
          ],
        },
        {
          id: 'qs-v1-c12-017',
          ar: 'وَلَمَّا أَرَادَ إِبْرَاهِيمُ أَنْ يَذْهَبَ',
          en: 'and when Ibrāhīm wanted to leave,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', root: 'ر و د', gloss: 'to want; wanted' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَذْهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.3ms', root: 'ذ ه ب', gloss: 'to go; go' },
          ],
        },
        {
          id: 'qs-v1-c12-018',
          ar: 'قَالَتْ زَوْجُهُ هَاجَرُ:',
          en: 'his wife Hājar said:',
          tokens: [
            { surface: 'قَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fs', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'زَوْجُهُ', lemma: 'زَوْج', pos: 'noun', features: 'nom+3ms', root: 'ز و ج', gloss: 'his wife' },
            { surface: 'هَاجَرُ', lemma: 'هَاجَر', pos: 'proper', features: 'nom', gloss: 'Hājar' },
          ],
        },
        {
          id: 'qs-v1-c12-019',
          ar: 'إِلَى أَيْنَ يَا سَيِّدِي؟',
          en: "'To where, my master?",
          tokens: [
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أَيْنَ', lemma: 'أَيْن', pos: 'rel', features: 'rel', gloss: 'where' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'سَيِّدِي', lemma: 'سَيِّد', pos: 'noun', features: 'nom+1s', root: 'س و د', gloss: 'my master' },
          ],
        },
        {
          id: 'qs-v1-c12-020',
          ar: 'أَتَتْرُكُنِي هُنَا؟',
          en: 'Will you leave me here?',
          tokens: [
            { surface: 'أَتَتْرُكُنِي', lemma: 'تَرَكَ', pos: 'verb', features: 'part+impf.2ms+1s', root: 'ت ر ك', gloss: 'to leave; will you leave me' },
            { surface: 'هُنَا', lemma: 'هُنَا', pos: 'adv', features: 'adv', gloss: 'here' },
          ],
        },
        {
          id: 'qs-v1-c12-021',
          ar: 'أَتَتْرُكُنِي وَلَيْسَ هُنَا مَاءٌ وَلَا طَعَامٌ!',
          en: 'Will you leave me when there is no water and no food here!',
          tokens: [
            { surface: 'أَتَتْرُكُنِي', lemma: 'تَرَكَ', pos: 'verb', features: 'part+impf.2ms+1s', root: 'ت ر ك', gloss: 'to leave; will you leave me' },
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and there is not' },
            { surface: 'هُنَا', lemma: 'هُنَا', pos: 'adv', features: 'adv', gloss: 'here' },
            { surface: 'مَاءٌ', lemma: 'مَاء', pos: 'noun', features: 'indef.nom', root: 'م و ه', gloss: 'water' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'طَعَامٌ', lemma: 'طَعَام', pos: 'noun', features: 'indef.nom', root: 'ط ع م', gloss: 'food' },
          ],
        },
        {
          id: 'qs-v1-c12-022',
          ar: 'هَلْ أَمَرَكَ اللَّهُ بِهَذَا؟',
          en: "Did Allah command you to do this?'",
          tokens: [
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: '(question particle) do...?' },
            { surface: 'أَمَرَكَ', lemma: 'أَمَرَ', pos: 'verb', features: 'perf.3ms+2ms', root: 'أ م ر', gloss: 'to command; commanded you' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'بِهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'prep+dem.m', gloss: 'with this' },
          ],
        },
        {
          id: 'qs-v1-c12-023',
          ar: 'قَالَ إِبْرَاهِيمُ: نَعَمْ!',
          en: "Ibrāhīm said: 'Yes!'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'نَعَمْ', lemma: 'نَعَمْ', pos: 'part', features: 'part', gloss: 'yes' },
          ],
        },
        {
          id: 'qs-v1-c12-024',
          ar: 'قَالَتْ هَاجَرُ: إِذًا لَا يُضَيِّعُنَا!',
          en: "Hājar said: 'Then He will not neglect us!'",
          tokens: [
            { surface: 'قَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fs', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'هَاجَرُ', lemma: 'هَاجَر', pos: 'proper', features: 'nom', gloss: 'Hājar' },
            { surface: 'إِذًا', lemma: 'إِذًا', pos: 'adv', features: 'adv', gloss: 'then, in that case' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُضَيِّعُنَا', lemma: 'ضَيَّعَ', pos: 'verb', features: 'impf.3ms+1p', root: 'ض ي ع', gloss: 'to neglect, waste; will neglect us' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَتْ هَاجَرُ عِنْدَمَا عَرَفَتْ أَنَّ اللَّهَ أَمَرَ إِبْرَاهِيمَ بِتَرْكِهَا؟',
          options: ['إِذًا لَا يُضَيِّعُنَا', 'سَأَذْهَبُ مَعَكَ', 'لَنْ أَبْقَى هُنَا'],
          answer: 0,
          qEn: 'What did Hājar say when she learned that Allah had commanded Ibrāhīm to leave her?',
          optionsEn: ['Then He will not neglect us', 'I will go with you', 'I will not stay here'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'مَكَّةُ لَيْسَ فِيهَا عُشْبٌ وَلَا شَجَرٌ.',
        en: 'And Makkah had no grass and no trees in it.',
        options: ['كَانَتْ', 'كَانَ', 'يَكُونُ', 'كُنَّ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- agrees with مَكَّة, a feminine place name.',
          '3rd masculine singular -- wrong gender.',
          'Imperfect -- but this describes a past state.',
          '3rd feminine plural -- but only one place, Makkah, is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَتْ مَكَّةُ لَيْسَ فِيهَا',
        post: 'وَلَا شَجَرٌ.',
        en: 'And Makkah had no grass and no trees in it.',
        options: ['عُشْبٌ', 'عُشْبًا', 'عُشْبٍ', 'أَعْشَاب'],
        answer: 0,
        rationales: [
          'Nominative -- اسْم لَيْسَ, delayed after its predicate فِيهَا.',
          'Accusative -- wrong case for the subject of لَيْسَ.',
          'Genitive -- nothing here governs the genitive.',
          'Plural -- but عُشْب is a mass/collective noun, singular in form.',
        ],
      },
      {
        type: 'cloze',
        pre: '',
        post: 'هُنَا؟',
        en: 'Will you leave me here?',
        options: ['أَتَتْرُكُنِي', 'تَتْرُكُنِي', 'أَتْرُكُكَ', 'أَتَتْرُكُنَا'],
        answer: 0,
        rationales: [
          'Interrogative أَ + 2nd masculine singular + object suffix "me" -- Hājar is asking Ibrāhīm directly.',
          'Missing the interrogative أَ -- this would be a statement, not a question.',
          'Wrong person and object -- "do I leave you" reverses who is speaking.',
          'Wrong object suffix -- "us" instead of "me".',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَتَتْرُكُنِي هُنَا؟',
        pre: 'أَ',
        post: 'نِي هُنَا؟',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (pl. m.)',
        options: ['تَتْرُكُونَ', 'تَتْرُكُ', 'يَتْرُكُ', 'نَتْرُكُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنْتُمْ.',
          '2nd masculine singular -- the form already given.',
          '3rd masculine singular -- he.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'أَتَتْرُكُنِي هُنَا؟',
        pre: 'أَ',
        post: 'نِي هُنَا؟',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يَتْرُكُ', 'تَتْرُكُ', 'تَتْرُكُونَ', 'نَتْرُكُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '2nd masculine singular -- the form already given.',
          '2nd masculine plural -- you all (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'أَتَتْرُكُنِي هُنَا؟',
        pre: 'أَ',
        post: 'نِي هُنَا؟',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَتْرُكُونَ', 'تَتْرُكُ', 'يَتْرُكُ', 'نَتْرُكُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '2nd masculine singular -- the form already given.',
          '3rd masculine singular -- he.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

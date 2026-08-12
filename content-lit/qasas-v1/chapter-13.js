// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 13 -- بِئْرُ
// زَمْزَمَ. Printed page 22 (top two-thirds; ch14 begins at the bottom of the
// same page). Transcribed by hand from the scan (vision OCR, 300dpi render)
// against QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// No guillemets/Qur'anic quotation on this page -- pure narrative prose (the
// famous discovery of Zamzam, echoing the ḥadīth tradition of Hājar's sa'y
// between Ṣafā and Marwah), so no build-eligibility fragmentation is needed.
//
// The closing line "هَلْ شَرِبْتَ مَاءَ زَمْزَمَ؟" breaks the third-person
// narrative frame to address the reader directly in the 2nd person --
// tokenized like any other sentence, but worth flagging as a deliberate
// rhetorical device, not a transcription slip.
//
// الَّتِي (feminine relative pronoun) appears here for the first time,
// alongside its masculine counterpart الَّذِي already seen in ch9-10.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch13',
  title: { ar: 'بِئْرُ زَمْزَمَ', en: 'The Well of Zamzam' },
  newWords: [
    'عَطِشَ', 'أُمّ', 'لَكِنْ', 'أَرْض', 'صَفَا', 'مَرْوَة', 'جَرَى', 'بَارَكَ', 'حَجّ', 'مَرَّة',
  ],
  lemmas: {
    'عَطِشَ': { gloss: 'to be thirsty' },
    'أُمّ': { gloss: 'mother' },
    'لَكِنْ': { gloss: 'but, however (plain, non-emphatic)' },
    'أَرْض': { gloss: 'earth, ground, land' },
    'صَفَا': { gloss: 'Ṣafā (a hill by the Kaʿbah)' },
    'مَرْوَة': { gloss: 'Marwah (a hill by the Kaʿbah)' },
    'جَرَى': { gloss: 'to run, flow' },
    'بَارَكَ': { gloss: 'to bless' },
    'حَجّ': { gloss: 'the Ḥajj, pilgrimage' },
    'مَرَّة': { gloss: 'a time, once, an occasion' },
    'الَّتِي': { gloss: 'who, that, the one who (f.)' },
  },
  paragraphs: [
    {
      en: 'And Ismāʿīl became thirsty one time, and his mother wanted to give him water to drink -- but where was the water? Makkah had no well, and Makkah had no river! And Hājar was seeking water, running from Ṣafā to Marwah and from Marwah to Ṣafā.',
      sentences: [
        {
          id: 'qs-v1-c13-001',
          ar: 'وَعَطِشَ إِسْمَاعِيلُ مَرَّةً،',
          en: 'And Ismāʿīl became thirsty one time,',
          tokens: [
            { surface: 'وَعَطِشَ', lemma: 'عَطِشَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ط ش', gloss: 'to be thirsty; and became thirsty' },
            { surface: 'إِسْمَاعِيلُ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'nom', gloss: 'Ismāʿīl' },
            { surface: 'مَرَّةً', lemma: 'مَرَّة', pos: 'noun', features: 'indef.acc', root: 'م ر ر', gloss: 'a time, once' },
          ],
        },
        {
          id: 'qs-v1-c13-002',
          ar: 'وَأَرَادَتْ أُمُّهُ أَنْ تَسْقِيَهُ مَاءً',
          en: 'and his mother wanted to give him water to drink --',
          tokens: [
            { surface: 'وَأَرَادَتْ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ر و د', gloss: 'to want; and wanted' },
            { surface: 'أُمُّهُ', lemma: 'أُمّ', pos: 'noun', features: 'nom+3ms', root: 'أ م م', gloss: 'his mother' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'تَسْقِيَهُ', lemma: 'سَقَى', pos: 'verb', features: 'impf.3fs+3ms', root: 'س ق ي', gloss: 'to give to drink; give him to drink' },
            { surface: 'مَاءً', lemma: 'مَاء', pos: 'noun', features: 'indef.acc', root: 'م و ه', gloss: 'water' },
          ],
        },
        {
          id: 'qs-v1-c13-003',
          ar: 'وَلَكِنْ أَيْنَ الْمَاءُ؟',
          en: 'but where was the water?',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'أَيْنَ', lemma: 'أَيْن', pos: 'rel', features: 'rel', gloss: 'where' },
            { surface: 'الْمَاءُ', lemma: 'مَاء', pos: 'noun', features: 'def.nom', root: 'م و ه', gloss: 'the water' },
          ],
        },
        {
          id: 'qs-v1-c13-004',
          ar: 'وَمَكَّةُ لَيْسَ فِيهَا بِئْرٌ،',
          en: 'Makkah had no well,',
          tokens: [
            { surface: 'وَمَكَّةُ', lemma: 'مَكَّة', pos: 'proper', features: 'conj+nom', root: 'م ك ك', gloss: 'and Makkah' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'بِئْرٌ', lemma: 'بِئْر', pos: 'noun', features: 'indef.nom', root: 'ب أ ر', gloss: 'well' },
          ],
        },
        {
          id: 'qs-v1-c13-005',
          ar: 'وَمَكَّةُ لَيْسَ فِيهَا نَهْرٌ!',
          en: 'and Makkah had no river!',
          tokens: [
            { surface: 'وَمَكَّةُ', lemma: 'مَكَّة', pos: 'proper', features: 'conj+nom', root: 'م ك ك', gloss: 'and Makkah' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'نَهْرٌ', lemma: 'نَهْر', pos: 'noun', features: 'indef.nom', root: 'ن ه ر', gloss: 'river' },
          ],
        },
        {
          id: 'qs-v1-c13-006',
          ar: 'وَكَانَتْ هَاجَرُ تَطْلُبُ الْمَاءَ',
          en: 'And Hājar was seeking water,',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'هَاجَرُ', lemma: 'هَاجَر', pos: 'proper', features: 'nom', gloss: 'Hājar' },
            { surface: 'تَطْلُبُ', lemma: 'طَلَبَ', pos: 'verb', features: 'impf.3fs', root: 'ط ل ب', gloss: 'to seek; seeking' },
            { surface: 'الْمَاءَ', lemma: 'مَاء', pos: 'noun', features: 'def.acc', root: 'م و ه', gloss: 'the water' },
          ],
        },
        {
          id: 'qs-v1-c13-007',
          ar: 'وَتَجْرِي مِنَ الصَّفَا إِلَى الْمَرْوَةِ',
          en: 'running from Ṣafā to Marwah',
          tokens: [
            { surface: 'وَتَجْرِي', lemma: 'جَرَى', pos: 'verb', features: 'conj+impf.3fs', root: 'ج ر ي', gloss: 'to run, flow; and running' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الصَّفَا', lemma: 'صَفَا', pos: 'proper', features: 'gen', gloss: 'Ṣafā' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْمَرْوَةِ', lemma: 'مَرْوَة', pos: 'proper', features: 'def.gen', root: 'م ر و', gloss: 'Marwah' },
          ],
        },
        {
          id: 'qs-v1-c13-008',
          ar: 'وَمِنَ الْمَرْوَةِ إِلَى الصَّفَا.',
          en: 'and from Marwah to Ṣafā.',
          tokens: [
            { surface: 'وَمِنَ', lemma: 'مِنْ', pos: 'prep', features: 'conj+prep', gloss: 'and from' },
            { surface: 'الْمَرْوَةِ', lemma: 'مَرْوَة', pos: 'proper', features: 'def.gen', root: 'م ر و', gloss: 'Marwah' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الصَّفَا', lemma: 'صَفَا', pos: 'proper', features: 'gen', gloss: 'Ṣafā' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَتْ هَاجَرُ تَجْرِي بَيْنَ الصَّفَا وَالْمَرْوَةِ؟',
          options: ['كَانَتْ تَطْلُبُ الْمَاءَ لِإِسْمَاعِيلَ', 'كَانَتْ تَبْحَثُ عَنْ إِبْرَاهِيمَ', 'كَانَتْ تَلْعَبُ'],
          answer: 0,
          qEn: 'Why was Hājar running between Ṣafā and Marwah?',
          optionsEn: ['She was seeking water for Ismāʿīl', 'She was searching for Ibrāhīm', 'She was playing'],
        },
      ],
    },
    {
      en: 'And Allah helped Hājar, and helped Ismāʿīl, so He created water for them, and the water came out from the earth, and Ismāʿīl drank, and Hājar drank,',
      sentences: [
        {
          id: 'qs-v1-c13-009',
          ar: 'وَنَصَرَ اللَّهُ هَاجَرَ،',
          en: 'And Allah helped Hājar,',
          tokens: [
            { surface: 'وَنَصَرَ', lemma: 'نَصَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ص ر', gloss: 'to help; and helped' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'هَاجَرَ', lemma: 'هَاجَر', pos: 'proper', features: 'acc', gloss: 'Hājar' },
          ],
        },
        {
          id: 'qs-v1-c13-010',
          ar: 'وَنَصَرَ إِسْمَاعِيلَ،',
          en: 'and helped Ismāʿīl,',
          tokens: [
            { surface: 'وَنَصَرَ', lemma: 'نَصَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ص ر', gloss: 'to help; and helped' },
            { surface: 'إِسْمَاعِيلَ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'acc', gloss: 'Ismāʿīl' },
          ],
        },
        {
          id: 'qs-v1-c13-011',
          ar: 'فَخَلَقَ لَهُمَا مَاءً',
          en: 'so He created water for them,',
          tokens: [
            { surface: 'فَخَلَقَ', lemma: 'خَلَقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ل ق', gloss: 'to create; so created' },
            { surface: 'لَهُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+3md', gloss: 'for them both' },
            { surface: 'مَاءً', lemma: 'مَاء', pos: 'noun', features: 'indef.acc', root: 'م و ه', gloss: 'water' },
          ],
        },
        {
          id: 'qs-v1-c13-012',
          ar: 'وَخَرَجَ الْمَاءُ مِنَ الْأَرْضِ',
          en: 'and the water came out from the earth,',
          tokens: [
            { surface: 'وَخَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ر ج', gloss: 'to come out; and came out' },
            { surface: 'الْمَاءُ', lemma: 'مَاء', pos: 'noun', features: 'def.nom', root: 'م و ه', gloss: 'the water' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', root: 'أ ر ض', gloss: 'the earth, ground' },
          ],
        },
        {
          id: 'qs-v1-c13-013',
          ar: 'وَشَرِبَ إِسْمَاعِيلُ',
          en: 'and Ismāʿīl drank,',
          tokens: [
            { surface: 'وَشَرِبَ', lemma: 'شَرِبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ش ر ب', gloss: 'to drink; and drank' },
            { surface: 'إِسْمَاعِيلُ', lemma: 'إِسْمَاعِيل', pos: 'proper', features: 'nom', gloss: 'Ismāʿīl' },
          ],
        },
        {
          id: 'qs-v1-c13-014',
          ar: 'وَشَرِبَتْ هَاجَرُ',
          en: 'and Hājar drank,',
          tokens: [
            { surface: 'وَشَرِبَتْ', lemma: 'شَرِبَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ش ر ب', gloss: 'to drink; and drank' },
            { surface: 'هَاجَرُ', lemma: 'هَاجَر', pos: 'proper', features: 'nom', gloss: 'Hājar' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ خَرَجَ مَاءُ زَمْزَمَ؟',
          options: ['خَلَقَهُ اللَّهُ وَخَرَجَ مِنَ الْأَرْضِ', 'حَفَرَهُ إِبْرَاهِيمُ بِيَدِهِ', 'جَاءَ بِهِ رَجُلٌ مِنَ الْمَدِينَةِ'],
          answer: 0,
          qEn: 'How did the water of Zamzam come out?',
          optionsEn: ['Allah created it and it came out from the earth', 'Ibrāhīm dug it with his hand', 'A man brought it from the city'],
        },
      ],
    },
    {
      en: 'and the water remained, so it became the well of Zamzam. And Allah blessed Zamzam, and this is the well from which the people drink during the Ḥajj, and bring the water of Zamzam to their land. Have you drunk the water of Zamzam?',
      sentences: [
        {
          id: 'qs-v1-c13-015',
          ar: 'وَبَقِيَ الْمَاءُ',
          en: 'and the water remained,',
          tokens: [
            { surface: 'وَبَقِيَ', lemma: 'بَقِيَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ب ق ي', gloss: 'to remain; and remained' },
            { surface: 'الْمَاءُ', lemma: 'مَاء', pos: 'noun', features: 'def.nom', root: 'م و ه', gloss: 'the water' },
          ],
        },
        {
          id: 'qs-v1-c13-016',
          ar: 'فَكَانَ بِئْرَ زَمْزَمَ،',
          en: 'so it became the well of Zamzam.',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; so it became' },
            { surface: 'بِئْرَ', lemma: 'بِئْر', pos: 'noun', features: 'acc.constr', root: 'ب أ ر', gloss: 'well (of)' },
            { surface: 'زَمْزَمَ', lemma: 'زَمْزَم', pos: 'proper', features: 'gen', gloss: 'Zamzam' },
          ],
        },
        {
          id: 'qs-v1-c13-017',
          ar: 'فَبَارَكَ اللَّهُ فِي زَمْزَمَ',
          en: 'And Allah blessed Zamzam,',
          tokens: [
            { surface: 'فَبَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ب ر ك', gloss: 'to bless; and blessed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'زَمْزَمَ', lemma: 'زَمْزَم', pos: 'proper', features: 'gen', gloss: 'Zamzam' },
          ],
        },
        {
          id: 'qs-v1-c13-018',
          ar: 'وَهَذِهِ الْبِئْرُ الَّتِي يَشْرَبُ مِنْهَا النَّاسُ فِي الْحَجِّ',
          en: 'and this is the well from which the people drink during the Ḥajj,',
          tokens: [
            { surface: 'وَهَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'conj+dem.f', gloss: 'and this' },
            { surface: 'الْبِئْرُ', lemma: 'بِئْر', pos: 'noun', features: 'def.nom', root: 'ب أ ر', gloss: 'the well' },
            { surface: 'الَّتِي', lemma: 'الَّتِي', pos: 'rel', features: 'rel.f', gloss: 'which, that (f.)' },
            { surface: 'يَشْرَبُ', lemma: 'شَرِبَ', pos: 'verb', features: 'impf.3ms', root: 'ش ر ب', gloss: 'to drink; drink' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from it' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, during' },
            { surface: 'الْحَجِّ', lemma: 'حَجّ', pos: 'noun', features: 'def.gen', root: 'ح ج ج', gloss: 'the Ḥajj, pilgrimage' },
          ],
        },
        {
          id: 'qs-v1-c13-019',
          ar: 'وَيَأْتُونَ بِمَاءِ زَمْزَمَ إِلَى بَلَدِهِمْ.',
          en: 'and bring the water of Zamzam to their land.',
          tokens: [
            { surface: 'وَيَأْتُونَ', lemma: 'أَتَى', pos: 'verb', features: 'conj+impf.3mp', root: 'أ ت ي', gloss: 'to come, bring; and bring' },
            { surface: 'بِمَاءِ', lemma: 'مَاء', pos: 'noun', features: 'prep+gen.constr', root: 'م و ه', gloss: 'with the water (of)' },
            { surface: 'زَمْزَمَ', lemma: 'زَمْزَم', pos: 'proper', features: 'gen', gloss: 'Zamzam' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'بَلَدِهِمْ', lemma: 'بَلَد', pos: 'noun', features: 'gen+3mp', root: 'ب ل د', gloss: 'their land' },
          ],
        },
        {
          id: 'qs-v1-c13-020',
          ar: 'هَلْ شَرِبْتَ مَاءَ زَمْزَمَ؟',
          en: 'Have you drunk the water of Zamzam?',
          tokens: [
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: '(question particle) do...?' },
            { surface: 'شَرِبْتَ', lemma: 'شَرِبَ', pos: 'verb', features: 'perf.2ms', root: 'ش ر ب', gloss: 'to drink; have you drunk' },
            { surface: 'مَاءَ', lemma: 'مَاء', pos: 'noun', features: 'acc.constr', root: 'م و ه', gloss: 'water (of)' },
            { surface: 'زَمْزَمَ', lemma: 'زَمْزَم', pos: 'proper', features: 'gen', gloss: 'Zamzam' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يَفْعَلُ النَّاسُ بِمَاءِ زَمْزَمَ حَتَّى الْيَوْمَ؟',
          options: ['يَشْرَبُونَ مِنْهُ فِي الْحَجِّ وَيَأْخُذُونَهُ إِلَى بِلَادِهِمْ', 'يَبِيعُونَهُ فِي السُّوقِ', 'لَا يَسْتَخْدِمُونَهُ'],
          answer: 0,
          qEn: 'What do people do with the water of Zamzam to this day?',
          optionsEn: ['They drink from it during the Ḥajj and take it to their countries', 'They sell it in the market', 'They do not use it'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'أُمُّهُ أَنْ تَسْقِيَهُ مَاءً.',
        en: 'And his mother wanted to give him water to drink.',
        options: ['أَرَادَتْ', 'أَرَادَ', 'تُرِيدُ', 'أَرَدْنَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- agrees with أُمّ, a feminine noun.',
          '3rd masculine singular -- wrong gender.',
          'Imperfect -- but this is a completed past event.',
          '3rd feminine plural -- but only one mother is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَهَذِهِ الْبِئْرُ',
        post: 'يَشْرَبُ مِنْهَا النَّاسُ فِي الْحَجِّ.',
        en: 'And this is the well from which the people drink during the Ḥajj.',
        options: ['الَّتِي', 'الَّذِي', 'الَّذِينَ', 'اللَّاتِي'],
        answer: 0,
        rationales: [
          'Feminine singular relative pronoun -- refers back to الْبِئْر, a feminine noun.',
          'Masculine singular relative pronoun -- wrong gender.',
          'Masculine plural relative pronoun -- wrong number.',
          'Feminine plural relative pronoun -- wrong number; only one well is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَبَقِيَ الْمَاءُ فَكَانَ',
        post: 'زَمْزَمَ.',
        en: 'And the water remained, so it became the well of Zamzam.',
        options: ['بِئْرَ', 'بِئْرٌ', 'بِئْرٍ', 'آبَار'],
        answer: 0,
        rationales: [
          'Accusative -- خبر كَانَ, and the mudāf of the iḍāfa بِئْرَ زَمْزَمَ.',
          'Nominative -- wrong case for the predicate of كَانَ.',
          'Genitive -- nothing here governs the genitive.',
          'Plural -- but only one well is meant.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'هَلْ شَرِبْتَ مَاءَ زَمْزَمَ؟',
        pre: 'هَلْ',
        post: 'مَاءَ زَمْزَمَ؟',
        targetPerson: 'أَنْتِ',
        targetEn: 'you (f.)',
        options: ['شَرِبْتِ', 'شَرِبْتَ', 'شَرِبْتُ', 'شَرِبْتُمْ'],
        answer: 0,
        rationales: [
          '2nd feminine singular -- matches أَنْتِ.',
          '2nd masculine singular -- the form already given.',
          '1st singular -- I.',
          '2nd masculine plural -- you all (m.).',
        ],
      },
      {
        type: 'shift',
        base: 'هَلْ شَرِبْتَ مَاءَ زَمْزَمَ؟',
        pre: 'هَلْ',
        post: 'مَاءَ زَمْزَمَ؟',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (pl. m.)',
        options: ['شَرِبْتُمْ', 'شَرِبْتَ', 'شَرِبْتِ', 'شَرِبْنَ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنْتُمْ.',
          '2nd masculine singular -- the form already given.',
          '2nd feminine singular -- you (f.).',
          '3rd feminine plural -- they (f.).',
        ],
      },
      {
        type: 'shift',
        base: 'هَلْ شَرِبْتَ مَاءَ زَمْزَمَ؟',
        pre: 'هَلْ',
        post: 'مَاءَ زَمْزَمَ؟',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['شَرِبْتُ', 'شَرِبْتَ', 'شَرِبْتِ', 'شَرِبْنَا'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '2nd masculine singular -- the form already given.',
          '2nd feminine singular -- you (f.).',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

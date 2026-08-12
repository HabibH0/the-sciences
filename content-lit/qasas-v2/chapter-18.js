// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 18 -- بَيْنَ
// يُوسُفَ وَإِخْوَتِهِ. Printed page 49 (from the heading, right after ch17's
// closing وَلَمْ يَفْضَحْهُمْ) - 50 (ending before ch19's heading بَيْنَ يَعْقُوبَ
// وَأَبْنَائِهِ). Transcribed by hand from the scan (vision OCR, 300dpi
// render) against ../CHAPTER-FORMAT.md.
//
// Grammar / lexical notes:
//   -- This chapter is almost entirely dialogue (قَالَ:/قَالُوا: exchanges),
//      reusing the well/wolf/brothers vocabulary from ch2-5 heavily -- only
//      3 genuinely new words turned up (see below), a rare case where a
//      long, dense chapter needs very little new vocabulary.
//   -- Several long sentences are split at natural clause boundaries into
//      shorter teaching sentences (qs-v2-c18-{009,010}, {011,012}, {013,
//      014}), same practice as earlier chapters -- no content added.
//   -- عَلَيْهِمُ الصَّلَوَاتُ وَالسَّلَامُ (qs-v2-c18-005, "peace and blessings be
//      upon them") is the honorific formula for prophets, here covering
//      Yaʿqūb, Isḥāq and Ibrāhīm together -- tagged as its own short
//      nominal clause inside the sentence, same فِعْل-less "عَلَى + subject"
//      pattern already used for عَلَيْهِ / عَلَيْهَا elsewhere.
//   -- ﴿ائْتُونِي بِأَخٍ لَكُمْ مِنْ أَبِيكُمْ﴾ (Sūrat Yūsuf 12:59) is split into
//      three <=2-token fragments (qs-v2-c18-{021,022,023}) per the house
//      convention for Qur'anic quotations.
//   -- فَوُضِعَ (qs-v2-c18-025) extends the perf.pass pattern (established
//      qasas-v1 ch14, reused ch12) to the already-taught verb وَضَعَ.
//   -- 2mp ("you all") turns up repeatedly (أَنْتُمْ، أَبُوكُمْ، لَكُمْ، مَعَكُمْ،
//      أَبِيكُمْ، تَجِدُونَ، تَأْتُوا, and the imperative ائْتُونِي), since Yūsuf
//      is addressing his brothers as a group throughout -- the same
//      undocumented-but-sanctioned atom used since ch9-13 and ch14
//      (CHAPTER-FORMAT.md §4 escape hatch), not re-justified per token.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): يُوسُف, قَالَ, لِ, مِنْ,
//      أَيْنَ, أَنْتُمْ, مَنْ, أَب, اِبْن, إِسْحَاق, إِبْرَاهِيم, عَلَى, صَلَاة, سَلَام,
//      هَلْ, أَخ, آخَر, نَعَمْ, اِسْم, بِنْيَامِين, لِمَاذَا, لَمْ, أَتَى, مَعَ, لِأَنَّ,
//      وَالِد, لَا, يُحِبُّ/أَحَبَّ, أَنْ, بَعُدَ, عَنْ, أَيّ, شَيْء, هُوَ, وَلَد, صَغِير,
//      جِدّ, لَكِنْ, كَانَ, ذَهَبَ, مَرَّة, اِسْتَبَقَ, تَرَكَ, عِنْدَ, مَتَاع, أَكَلَ, ذِئْب,
//      ضَحِكَ, نَفْس, اِشْتَاقَ, اللَّه, أَرَادَ, يَعْقُوب, أَمَرَ, طَعَام, وَجَدَ, إِذَا,
//      أَمْوَال/مَال, وَضَعَ
//      are all already taught and NOT re-listed in newWords here.
//
// 4 new words (كَنْعَان، كَلَّمَ، اِمْتَحَنَ، ثَانِيَة).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch18',
  title: { ar: 'بَيْنَ يُوسُفَ وَإِخْوَتِهِ', en: 'Between Yūsuf and His Brothers' },
  newWords: ['كَنْعَان', 'كَلَّمَ', 'اِمْتَحَنَ', 'ثَانِيَة'],
  lemmas: {
    'كَنْعَان': { gloss: 'Canaan' },
    'كَلَّمَ': { gloss: 'to speak to' },
    'اِمْتَحَنَ': { gloss: 'to test, try' },
    'ثَانِيَة': { gloss: 'second' },
  },
  paragraphs: [
    {
      en: 'Yūsuf spoke to them and said to them: \'Where are you from?\' They said: \'From Canaan!\' He said: \'Who is your father?\' They said: \'Yaʿqūb, son of Isḥāq, son of Ibrāhīm -- peace and blessings be upon them.\' He said: \'Do you have another brother?\'',
      sentences: [
        {
          id: 'qs-v2-c18-001',
          ar: 'وَكَلَّمَهُمْ يُوسُفُ وَقَالَ لَهُمْ:',
          en: 'Yūsuf spoke to them and said to them:',
          tokens: [
            { surface: 'وَكَلَّمَهُمْ', lemma: 'كَلَّمَ', pos: 'verb', features: 'conj+perf.3ms+3mp', root: 'ك ل م', gloss: 'to speak to; and spoke to them' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v2-c18-002',
          ar: 'مِنْ أَيْنَ أَنْتُمْ؟',
          en: "'Where are you from?'",
          tokens: [
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَيْنَ', lemma: 'أَيْنَ', pos: 'adv', features: 'adv', gloss: 'where' },
            { surface: 'أَنْتُمْ', lemma: 'أَنْتُمْ', pos: 'noun', features: '2mp', gloss: 'you (pl.)' },
          ],
        },
        {
          id: 'qs-v2-c18-003',
          ar: 'قَالُوا: مِنْ كَنْعَانَ!',
          en: "They said: 'From Canaan!'",
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'كَنْعَانَ', lemma: 'كَنْعَان', pos: 'proper', features: 'gen', gloss: 'Canaan' },
          ],
        },
        {
          id: 'qs-v2-c18-004',
          ar: 'قَالَ: مَنْ أَبُوكُمْ؟',
          en: "He said: 'Who is your father?'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'أَبُوكُمْ', lemma: 'أَب', pos: 'noun', features: 'nom+2mp', root: 'أ ب و', gloss: 'your father' },
          ],
        },
        {
          id: 'qs-v2-c18-005',
          ar: 'قَالُوا: يَعْقُوبُ بْنُ إِسْحَاقَ بْنِ إِبْرَاهِيمَ (عَلَيْهِمُ الصَّلَوَاتُ وَالسَّلَامُ).',
          en: "They said: 'Yaʿqūb, son of Isḥāq, son of Ibrāhīm -- peace and blessings be upon them.'",
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: "Yaʿqūb" },
            { surface: 'بْنُ', lemma: 'اِبْن', pos: 'noun', features: 'nom.constr', root: 'ب ن ي', gloss: 'son of' },
            { surface: 'إِسْحَاقَ', lemma: 'إِسْحَاق', pos: 'proper', features: 'gen', gloss: 'Isḥāq' },
            { surface: 'بْنِ', lemma: 'اِبْن', pos: 'noun', features: 'gen.constr', root: 'ب ن ي', gloss: 'son of' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'الصَّلَوَاتُ', lemma: 'صَلَاة', pos: 'noun', features: 'pl.def.nom', root: 'ص ل و', gloss: 'the prayers, blessings' },
            { surface: 'وَالسَّلَامُ', lemma: 'سَلَام', pos: 'noun', features: 'conj+def.nom', root: 'س ل م', gloss: 'and the peace' },
          ],
        },
        {
          id: 'qs-v2-c18-006',
          ar: 'قَالَ: هَلْ لَكُمْ أَخٌ آخَرُ؟',
          en: "He said: 'Do you have another brother?'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: 'do' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'do you have' },
            { surface: 'أَخٌ', lemma: 'أَخ', pos: 'noun', features: 'indef.nom', root: 'أ خ و', gloss: 'a brother' },
            { surface: 'آخَرُ', lemma: 'آخَر', pos: 'noun', features: 'indef.nom', gloss: 'another' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا سَأَلَ يُوسُفُ إِخْوَتَهُ أَوَّلاً؟',
          options: ['مِنْ أَيْنَ هُمْ وَمَنْ أَبُوهُمْ', 'كَمْ عُمْرُهُمْ', 'لِمَاذَا جَاؤُوا إِلَى مِصْرَ'],
          answer: 0,
          qEn: 'What did Yūsuf ask his brothers first?',
          optionsEn: ['Where they were from and who their father was', 'How old they were', 'Why they had come to Egypt'],
        },
      ],
    },
    {
      en: 'They said: \'Yes, we have a brother named Binyāmīn!\' He said: \'Why didn\'t he come with you?\' They said: \'Because our father will not let him go, and does not want him far from him.\' He said: \'For what reason will he not let him go -- is he a very small child?\'',
      sentences: [
        {
          id: 'qs-v2-c18-007',
          ar: 'قَالُوا: نَعَمْ لَنَا أَخٌ اسْمُهُ بِنْيَامِينُ!',
          en: "They said: 'Yes, we have a brother named Binyāmīn!'",
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'نَعَمْ', lemma: 'نَعَمْ', pos: 'part', features: 'part', gloss: 'yes' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'we have' },
            { surface: 'أَخٌ', lemma: 'أَخ', pos: 'noun', features: 'indef.nom', root: 'أ خ و', gloss: 'a brother' },
            { surface: 'اسْمُهُ', lemma: 'اِسْم', pos: 'noun', features: 'nom+3ms', root: 'س م و', gloss: 'his name' },
            { surface: 'بِنْيَامِينُ', lemma: 'بِنْيَامِين', pos: 'proper', features: 'nom', gloss: 'Binyāmīn (Benjamin)' },
          ],
        },
        {
          id: 'qs-v2-c18-008',
          ar: 'قَالَ: لِمَاذَا لَمْ يَأْتِ مَعَكُمْ؟',
          en: "He said: 'Why didn't he come with you?'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'adv', gloss: 'why' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'did not' },
            { surface: 'يَأْتِ', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms', root: 'أ ت ي', gloss: 'to come; come' },
            { surface: 'مَعَكُمْ', lemma: 'مَعَ', pos: 'adv', features: 'adv+2mp', gloss: 'with you all' },
          ],
        },
        {
          id: 'qs-v2-c18-009',
          ar: 'قَالُوا: لِأَنَّ وَالِدَنَا لَا يَتْرُكُهُ',
          en: "They said: 'Because our father will not let him go,",
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'لِأَنَّ', lemma: 'لِأَنَّ', pos: 'part', features: 'part', root: 'أ ن ن', gloss: 'because' },
            { surface: 'وَالِدَنَا', lemma: 'وَالِد', pos: 'noun', features: 'acc+1p', root: 'و ل د', gloss: 'our father' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتْرُكُهُ', lemma: 'تَرَكَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to leave; let him' },
          ],
        },
        {
          id: 'qs-v2-c18-010',
          ar: 'وَلَا يُحِبُّ أَنْ يَبْعُدَ عَنْهُ.',
          en: "and does not want him far from him.'",
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', root: 'ح ب ب', gloss: 'to love, want; wants' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَبْعُدَ', lemma: 'بَعُدَ', pos: 'verb', features: 'impf.3ms', root: 'ب ع د', gloss: 'to be far; be far' },
            { surface: 'عَنْهُ', lemma: 'عَنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from him' },
          ],
        },
        {
          id: 'qs-v2-c18-011',
          ar: 'قَالَ: لِأَيِّ شَيْءٍ لَا يَتْرُكُهُ،',
          en: "He said: 'For what reason will he not let him go --",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'لِأَيِّ', lemma: 'أَيّ', pos: 'noun', features: 'prep+gen.constr', gloss: 'for what' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتْرُكُهُ', lemma: 'تَرَكَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to leave; let him' },
          ],
        },
        {
          id: 'qs-v2-c18-012',
          ar: 'هَلْ هُوَ وَلَدٌ صَغِيرٌ جِدًّا؟',
          en: "is he a very small child?'",
          tokens: [
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: 'is' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he' },
            { surface: 'وَلَدٌ', lemma: 'وَلَد', pos: 'noun', features: 'indef.nom', root: 'و ل د', gloss: 'a boy, child' },
            { surface: 'صَغِيرٌ', lemma: 'صَغِير', pos: 'adj', features: 'indef.nom', root: 'ص غ ر', gloss: 'young, small' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ الإِخْوَةُ عَنْ سَبَبِ عَدَمِ مَجِيءِ بِنْيَامِينَ؟',
          options: ['إِنَّ وَالِدَهُمْ لَا يَتْرُكُهُ يَبْعُدُ عَنْهُ', 'إِنَّهُ كَانَ مَرِيضاً', 'إِنَّهُ رَفَضَ الْمَجِيءَ بِنَفْسِهِ'],
          answer: 0,
          qEn: "What reason did the brothers give for Binyāmīn not coming?",
          optionsEn: ["Their father would not let him be far from him", "He was ill", "He himself refused to come"],
        },
      ],
    },
    {
      en: 'They said: \'No, but he had a brother named Yūsuf, who went out with us once; we went off racing and left Yūsuf with our belongings, and the wolf ate him. Yūsuf laughed to himself but said nothing, and Yūsuf longed for his brother Binyāmīn. Allah wished to test Yaʿqūb a second time.',
      sentences: [
        {
          id: 'qs-v2-c18-013',
          ar: 'قَالُوا: لَا، وَلَكِنْ كَانَ لَهُ أَخٌ اسْمُهُ يُوسُفُ،',
          en: "They said: 'No, but he had a brother named Yūsuf,",
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; there was' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him, he had' },
            { surface: 'أَخٌ', lemma: 'أَخ', pos: 'noun', features: 'indef.nom', root: 'أ خ و', gloss: 'a brother' },
            { surface: 'اسْمُهُ', lemma: 'اِسْم', pos: 'noun', features: 'nom+3ms', root: 'س م و', gloss: 'his name' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c18-014',
          ar: 'ذَهَبَ مَعَنَا مَرَّةً،',
          en: 'who went out with us once;',
          tokens: [
            { surface: 'ذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to go; went' },
            { surface: 'مَعَنَا', lemma: 'مَعَ', pos: 'adv', features: 'adv+1p', gloss: 'with us' },
            { surface: 'مَرَّةً', lemma: 'مَرَّة', pos: 'noun', features: 'indef.acc', root: 'م ر ر', gloss: 'a time, once' },
          ],
        },
        {
          id: 'qs-v2-c18-015',
          ar: 'وَذَهَبْنَا نَسْتَبِقُ وَتَرَكْنَا يُوسُفَ عِنْدَ مَتَاعِنَا فَأَكَلَهُ الذِّئْبُ.',
          en: 'we went off racing and left Yūsuf with our belongings, and the wolf ate him.',
          tokens: [
            { surface: 'وَذَهَبْنَا', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to go; and we went' },
            { surface: 'نَسْتَبِقُ', lemma: 'اِسْتَبَقَ', pos: 'verb', features: 'impf.1p', root: 'س ب ق', gloss: 'to race, compete; racing' },
            { surface: 'وَتَرَكْنَا', lemma: 'تَرَكَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to leave; and we left' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv', gloss: 'with' },
            { surface: 'مَتَاعِنَا', lemma: 'مَتَاع', pos: 'noun', features: 'gen+1p', root: 'م ت ع', gloss: 'our belongings' },
            { surface: 'فَأَكَلَهُ', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to eat; and ate him' },
            { surface: 'الذِّئْبُ', lemma: 'ذِئْب', pos: 'noun', features: 'def.nom', root: 'ذ أ ب', gloss: 'the wolf' },
          ],
        },
        {
          id: 'qs-v2-c18-016',
          ar: 'وَضَحِكَ يُوسُفُ فِي نَفْسِهِ وَلَكِنْ لَمْ يَقُلْ شَيْئاً',
          en: 'Yūsuf laughed to himself but said nothing,',
          tokens: [
            { surface: 'وَضَحِكَ', lemma: 'ضَحِكَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ض ح ك', gloss: 'to laugh; and laughed' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'نَفْسِهِ', lemma: 'نَفْس', pos: 'noun', features: 'gen+3ms', root: 'ن ف س', gloss: 'himself' },
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'did not' },
            { surface: 'يَقُلْ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', root: 'ق و ل', gloss: 'to say; say' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v2-c18-017',
          ar: 'وَاشْتَاقَ يُوسُفُ إِلَى أَخِيهِ بِنْيَامِينَ.',
          en: 'and Yūsuf longed for his brother Binyāmīn.',
          tokens: [
            { surface: 'وَاشْتَاقَ', lemma: 'اِشْتَاقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ش و ق', gloss: 'to yearn, long for; and longed' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'أَخِيهِ', lemma: 'أَخ', pos: 'noun', features: 'gen+3ms', root: 'أ خ و', gloss: 'his brother' },
            { surface: 'بِنْيَامِينَ', lemma: 'بِنْيَامِين', pos: 'proper', features: 'gen', gloss: 'Binyāmīn (Benjamin)' },
          ],
        },
        {
          id: 'qs-v2-c18-018',
          ar: 'وَأَرَادَ اللَّهُ أَنْ يَمْتَحِنَ يَعْقُوبَ مَرَّةً ثَانِيَةً.',
          en: 'Allah wished to test Yaʿqūb a second time.',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want, wish; and wished' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَمْتَحِنَ', lemma: 'اِمْتَحَنَ', pos: 'verb', features: 'impf.3ms', root: 'م ح ن', gloss: 'to test, try; test' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'acc', gloss: "Yaʿqūb" },
            { surface: 'مَرَّةً', lemma: 'مَرَّة', pos: 'noun', features: 'indef.acc', root: 'م ر ر', gloss: 'a time' },
            { surface: 'ثَانِيَةً', lemma: 'ثَانِيَة', pos: 'adj', features: 'indef.acc.f', root: 'ث ن ي', gloss: 'second' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'So Yūsuf ordered that they be given food, and said to them: \'Bring me a brother of yours, from your father.\' \'You will not find any food if you do not bring him.\' And Yūsuf ordered that their money be placed in their belongings.',
      sentences: [
        {
          id: 'qs-v2-c18-019',
          ar: 'فَأَمَرَ لَهُمْ يُوسُفُ بِالطَّعَامِ.',
          en: 'So Yūsuf ordered that they be given food,',
          tokens: [
            { surface: 'فَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ م ر', gloss: 'to command, order; so ordered' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'بِالطَّعَامِ', lemma: 'طَعَام', pos: 'noun', features: 'prep+def.gen', gloss: 'with food' },
          ],
        },
        {
          id: 'qs-v2-c18-020',
          ar: 'وَقَالَ لَهُمْ:',
          en: 'and said to them:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v2-c18-021',
          ar: '﴿ائْتُونِي بِأَخٍ﴾',
          en: "'Bring me a brother",
          tokens: [
            { surface: 'ائْتُونِي', lemma: 'أَتَى', pos: 'verb', features: 'imp.2mp+1s', root: 'أ ت ي', gloss: 'to come; bring (to me)!' },
            { surface: 'بِأَخٍ', lemma: 'أَخ', pos: 'noun', features: 'prep+indef.gen', root: 'أ خ و', gloss: 'a brother' },
          ],
        },
        {
          id: 'qs-v2-c18-022',
          ar: '﴿لَكُمْ مِنْ﴾',
          en: 'of yours, from',
          tokens: [
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'of yours' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
          ],
        },
        {
          id: 'qs-v2-c18-023',
          ar: '﴿أَبِيكُمْ﴾.',
          en: "your father.'",
          tokens: [
            { surface: 'أَبِيكُمْ', lemma: 'أَب', pos: 'noun', features: 'gen+2mp', root: 'أ ب و', gloss: 'your father' },
          ],
        },
        {
          id: 'qs-v2-c18-024',
          ar: 'وَلَا تَجِدُونَ طَعَاماً إِذَا لَمْ تَأْتُوا بِهِ.',
          en: "'You will not find any food if you do not bring him.'",
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَجِدُونَ', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.2mp', root: 'و ج د', gloss: 'to find; you find' },
            { surface: 'طَعَاماً', lemma: 'طَعَام', pos: 'noun', features: 'indef.acc', gloss: 'food' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'adv', features: 'adv', gloss: 'if, when' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'did not' },
            { surface: 'تَأْتُوا', lemma: 'أَتَى', pos: 'verb', features: 'impf.2mp', root: 'أ ت ي', gloss: 'to come, bring; you bring' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
          ],
        },
        {
          id: 'qs-v2-c18-025',
          ar: 'وَأَمَرَ يُوسُفُ بِأَمْوَالِهِمْ فَوُضِعَ فِي مَتَاعِهِمْ.',
          en: 'And Yūsuf ordered that their money be placed in their belongings.',
          tokens: [
            { surface: 'وَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ م ر', gloss: 'to command, order; and ordered' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'بِأَمْوَالِهِمْ', lemma: 'مَال', pos: 'noun', features: 'prep+pl.gen+3mp', root: 'م و ل', gloss: 'with their money' },
            { surface: 'فَوُضِعَ', lemma: 'وَضَعَ', pos: 'verb', features: 'conj+perf.pass.3ms', gloss: 'to place, set up; so it was placed' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مَتَاعِهِمْ', lemma: 'مَتَاع', pos: 'noun', features: 'gen+3mp', root: 'م ت ع', gloss: 'their belongings' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا طَلَبَ يُوسُفُ مِنْ إِخْوَتِهِ قَبْلَ أَنْ يُعْطِيَهُمُ الطَّعَامَ فِي الْمَرَّةِ الثَّانِيَةِ؟',
          options: ['أَنْ يَأْتُوا بِأَخِيهِمُ الآخَرِ', 'أَنْ يَدْفَعُوا ثَمَناً أَكْبَرَ', 'أَنْ يَبْقَوْا فِي مِصْرَ'],
          answer: 0,
          qEn: 'What did Yūsuf ask of his brothers before giving them food the second time?',
          optionsEn: ['To bring their other brother', 'To pay a higher price', 'To stay in Egypt'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالُوا: نَعَمْ لَنَا أَخٌ',
        post: 'بِنْيَامِينُ!',
        en: "They said: 'Yes, we have a brother named Binyāmīn!'",
        options: ['اسْمُهُ', 'اسْمَهُ', 'أَسْمَاؤُهُ', 'اسْمُهَا'],
        answer: 0,
        rationales: [
          'Nominative -- اسْم is the subject of its own small nominal sentence ("his name is Binyāmīn"), so it takes the nominative.',
          'Accusative -- wrong case for a subject.',
          'Plural -- wrong number; one brother has one name.',
          'Feminine -- wrong gender; the referent (the brother) is masculine.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَرَادَ اللَّهُ أَنْ',
        post: 'يَعْقُوبَ مَرَّةً ثَانِيَةً.',
        en: 'Allah wished to test Yaʿqūb a second time.',
        options: ['يَمْتَحِنَ', 'يَمْتَحِنُ', 'اِمْتَحَنَ', 'يُمْتَحَنَ'],
        answer: 0,
        rationales: [
          'Subjunctive -- after أَنْ, matching the taught pattern (أَنْ + subjunctive verb).',
          'Indicative -- wrong mood; أَنْ requires the subjunctive.',
          'Perfect tense -- wrong tense; أَنْ takes an imperfect verb.',
          'Passive -- wrong voice; Allah is the one testing, not being tested.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ لَهُمْ: ائْتُونِي بِأَخٍ لَكُمْ مِنْ',
        post: '.',
        en: "He said to them: 'Bring me a brother of yours, from your father.'",
        options: ['أَبِيكُمْ', 'أَبُوكُمْ', 'أَبَاكُمْ', 'أَبِيكُمَا'],
        answer: 0,
        rationales: [
          'Genitive -- object of the preposition مِنْ.',
          'Nominative -- wrong case; this position follows a preposition, which requires the genitive.',
          'Accusative -- wrong case for the same reason.',
          'Dual -- wrong number; addressed to all the brothers, not just two.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَمْتَحِنُ الطُّلَّابَ',
        pre: '',
        post: 'الطُّلَّابَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَمْتَحِنُ', 'يَمْتَحِنُ', 'تَمْتَحِنُ', 'نَمْتَحِنُ'],
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
        base: 'يَمْتَحِنُ الطُّلَّابَ',
        pre: '',
        post: 'الطُّلَّابَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَمْتَحِنُ', 'أَمْتَحِنُ', 'تَمْتَحِنُ', 'يَمْتَحِنُونَ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine plural -- they (m.).',
        ],
      },
      {
        type: 'shift',
        base: 'يَمْتَحِنُ الطُّلَّابَ',
        pre: '',
        post: 'الطُّلَّابَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَمْتَحِنُونَ', 'يَمْتَحِنُ', 'نَمْتَحِنُ', 'تَمْتَحِنُونَ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
          '2nd masculine plural -- you all (m.).',
        ],
      },
    ],
  },
};

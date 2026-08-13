// قَصَصُ النَّبِيِّينَ, volume 9, chapter 8 -- سُلَيْمَانُ يَدْعُو مَلِكَةَ سَبَإٍ
// إِلَى دِينِهِ. Printed pages 228 (from its own heading box, right after
// ch7's closing sentence) through 229 (top of the page only), ending right
// before ch9's heading الْمَلِكَةُ تَسْتَشِيرُ أَرْكَانَ دَوْلَتِهَا on that page.
// Transcribed by hand from the scan (vision OCR, 200dpi render) against
// ../CHAPTER-FORMAT.md.
//
// It distressed Sulaymān that a king and nation neighboured his kingdom
// unreached by his call and still sun-worshipping; prophetic religious
// zeal stirred in him, and he judged it right to write to their polytheist
// queen and ruler, calling her to Islam, obedience, and submission, before
// marching his overwhelming troops on her land. He wrote her an eloquent
// letter -- one that combined gentleness and firmness, a prophet's humility
// and a king's jealous authority.
//
// Grammar / lexical notes:
//   -- حَاكِمَتِهَا (unit 005, "her ruler," fem.) reuses the already-taught
//      participle lemma حَاكِم rather than a new fem.-specific lemma, per
//      the app's convention that lexical gender lives on the lemma card,
//      not a separate entry (CHAPTER-FORMAT.md's feature-string notes).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): شَقَّ، بَلَغَ، دَعْوَة، زَالَ،
//      حَاكِم، مُشْرِك، مَلِك، اللَّه، نَبِيّ، أُمَّة، شَمْس، عَبَدَ، فِي
//      are all already taught and are NOT re-listed in newWords here.
//
// 19 new words (جِوَار، ثَارَ، حَمِيَّة، دِينِيّ، نَبَوِيّ، صَوَاب، كَتَبَ، إِسْلَام،
// طَاعَة، اِسْتِسْلَام، زَحَفَ، بِلَاد، قَاهِر، كِتَاب، بَلِيغ، رِقَّة، صَرَامَة،
// تَوَاضُع، غَيْرَة).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch8',
  title: { ar: 'سُلَيْمَانُ يَدْعُو مَلِكَةَ سَبَإٍ إِلَى دِينِهِ', en: 'Sulaymān Calls the Queen of Sheba to His Religion' },
  newWords: ['جِوَار', 'ثَارَ', 'حَمِيَّة', 'دِينِيّ', 'نَبَوِيّ', 'صَوَاب', 'كَتَبَ', 'إِسْلَام', 'طَاعَة', 'اِسْتِسْلَام', 'زَحَفَ', 'بِلَاد', 'قَاهِر', 'كِتَاب', 'بَلِيغ', 'رِقَّة', 'صَرَامَة', 'تَوَاضُع', 'غَيْرَة'],
  lemmas: {
    جِوَار: { gloss: 'neighbouring, proximity' },
    ثَارَ: { gloss: 'to be stirred, rise up' },
    حَمِيَّة: { gloss: 'zeal, fervour' },
    دِينِيّ: { gloss: 'religious' },
    نَبَوِيّ: { gloss: 'prophetic' },
    صَوَاب: { gloss: 'the right, correct course' },
    كَتَبَ: { gloss: 'to write' },
    إِسْلَام: { gloss: 'submission to Allah, Islam' },
    طَاعَة: { gloss: 'obedience' },
    اِسْتِسْلَام: { gloss: 'submission, surrender' },
    زَحَفَ: { gloss: 'to march, advance' },
    بِلَاد: { gloss: 'a land, country' },
    قَاهِر: { gloss: 'overwhelming, conquering' },
    كِتَاب: { gloss: 'a letter, a book' },
    بَلِيغ: { gloss: 'eloquent' },
    رِقَّة: { gloss: 'gentleness, tenderness' },
    صَرَامَة: { gloss: 'firmness, resolve' },
    تَوَاضُع: { gloss: 'humility' },
    غَيْرَة: { gloss: 'jealous protectiveness' },
  },
  paragraphs: [
    {
      en: "It distressed the Prophet of Allah that there should be, neighbouring his kingdom, a king and a nation he did not know, whom his call had not reached, and who still worshipped the sun. Prophetic religious zeal stirred in him, and he judged it right to write to their polytheist queen and ruler and call her to Islam, obedience, and submission, before marching his overwhelming troops on her land. So he wrote her an eloquent letter, calling her in it to Islam and submission. The letter combined gentleness and firmness, a prophet's humility and a king's jealous authority.",
      sentences: [
        {
          id: 'qs-v9-c08-001',
          ar: 'وَشَقَّ عَلَى نَبِيِّ اللَّهِ أَنْ يَكُونَ بِجِوَارِ مَمْلَكَتِهِ مَلِكٌ وَأُمَّةٌ',
          en: 'It distressed the Prophet of Allah that there should be, neighbouring his kingdom, a king and a nation',
          tokens: [
            { surface: 'وَشَقَّ', lemma: 'شَقَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be distressing; and it distressed' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'نَبِيِّ', lemma: 'نَبِيّ', pos: 'noun', features: 'constr.gen', gloss: 'the Prophet of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be; there be' },
            { surface: 'بِجِوَارِ', lemma: 'جِوَار', pos: 'noun', features: 'prep+constr.gen', gloss: 'neighbouring' },
            { surface: 'مَمْلَكَتِهِ', lemma: 'مَمْلَكَة', pos: 'noun', features: 'gen+3ms', gloss: 'his kingdom' },
            { surface: 'مَلِكٌ', lemma: 'مَلِك', pos: 'noun', features: 'indef.nom', gloss: 'a king' },
            { surface: 'وَأُمَّةٌ', lemma: 'أُمَّة', pos: 'noun', features: 'conj+indef.nom', gloss: 'and a nation' },
          ],
        },
        {
          id: 'qs-v9-c08-002',
          ar: 'لَا يَعْرِفُهَا وَلَمْ يَبْلُغْهَا دَعْوَتُهُ،',
          en: "he did not know, whom his call had not reached,",
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْرِفُهَا', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms+3fs', gloss: 'to know; he knows it' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and did not' },
            { surface: 'يَبْلُغْهَا', lemma: 'بَلَغَ', pos: 'verb', features: 'impf.3ms+3fs', gloss: 'to reach; reach it' },
            { surface: 'دَعْوَتُهُ', lemma: 'دَعْوَة', pos: 'noun', features: 'nom+3ms', gloss: 'his call' },
          ],
        },
        {
          id: 'qs-v9-c08-003',
          ar: 'وَلَا تَزَالُ تَعْبُدُ الشَّمْسَ،',
          en: 'and who still worshipped the sun,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَزَالُ', lemma: 'زَالَ', pos: 'verb', features: 'impf.3fs', gloss: 'to cease; ceases (still)' },
            { surface: 'تَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3fs', gloss: 'to worship; worshipping' },
            { surface: 'الشَّمْسَ', lemma: 'شَمْس', pos: 'noun', features: 'def.acc', gloss: 'the sun' },
          ],
        },
        {
          id: 'qs-v9-c08-004',
          ar: 'وَثَارَتْ فِيهِ الْحَمِيَّةُ الدِّينِيَّةُ النَّبَوِيَّةُ،',
          en: 'Prophetic religious zeal stirred in him,',
          tokens: [
            { surface: 'وَثَارَتْ', lemma: 'ثَارَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ث و ر', gloss: 'to be stirred; and was stirred' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in him' },
            { surface: 'الْحَمِيَّةُ', lemma: 'حَمِيَّة', pos: 'noun', features: 'def.nom', root: 'ح م ي', gloss: 'the zeal' },
            { surface: 'الدِّينِيَّةُ', lemma: 'دِينِيّ', pos: 'adj', features: 'def.nom.f', gloss: 'the religious' },
            { surface: 'النَّبَوِيَّةُ', lemma: 'نَبَوِيّ', pos: 'adj', features: 'def.nom.f', gloss: 'the prophetic' },
          ],
        },
        {
          id: 'qs-v9-c08-005',
          ar: 'وَرَأَى مِنَ الصَّوَابِ أَنْ يَكْتُبَ إِلَى مَلِكَتِهَا وَحَاكِمَتِهَا الْمُشْرِكَةِ',
          en: 'and he judged it right to write to their polytheist queen and ruler',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to judge, see; and judged' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'as' },
            { surface: 'الصَّوَابِ', lemma: 'صَوَاب', pos: 'noun', features: 'def.gen', gloss: 'the right course' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَكْتُبَ', lemma: 'كَتَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to write; write' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مَلِكَتِهَا', lemma: 'مَلِكَة', pos: 'noun', features: 'gen+3fs', gloss: 'their queen' },
            { surface: 'وَحَاكِمَتِهَا', lemma: 'حَاكِم', pos: 'noun', features: 'conj+gen+3fs', gloss: 'and their ruler' },
            { surface: 'الْمُشْرِكَةِ', lemma: 'مُشْرِك', pos: 'adj', features: 'def.gen.f', gloss: 'the polytheist' },
          ],
        },
        {
          id: 'qs-v9-c08-006',
          ar: 'وَيَدْعُوَهَا إِلَى الْإِسْلَامِ وَالطَّاعَةِ وَالِاسْتِسْلَامِ،',
          en: 'and call her to Islam, obedience, and submission,',
          tokens: [
            { surface: 'وَيَدْعُوَهَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+impf.3ms+3fs', gloss: 'to call; and call her' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْإِسْلَامِ', lemma: 'إِسْلَام', pos: 'noun', features: 'def.gen', root: 'س ل م', gloss: 'Islam' },
            { surface: 'وَالطَّاعَةِ', lemma: 'طَاعَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and obedience' },
            { surface: 'وَالِاسْتِسْلَامِ', lemma: 'اِسْتِسْلَام', pos: 'noun', features: 'conj+def.gen', root: 'س ل م', gloss: 'and submission' },
          ],
        },
        {
          id: 'qs-v9-c08-007',
          ar: 'قَبْلَ أَنْ يَزْحَفَ عَلَى بِلَادِهَا بِجُنُودِهِ الْقَاهِرَةِ،',
          en: 'before marching his overwhelming troops on her land.',
          tokens: [
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'adv', features: 'adv', gloss: 'before' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَزْحَفَ', lemma: 'زَحَفَ', pos: 'verb', features: 'impf.3ms', root: 'ز ح ف', gloss: 'to march, advance; he march' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'بِلَادِهَا', lemma: 'بِلَاد', pos: 'noun', features: 'gen+3fs', gloss: 'her land' },
            { surface: 'بِجُنُودِهِ', lemma: 'جُنْد', pos: 'noun', features: 'prep+pl.gen+3ms', gloss: 'with his troops' },
            { surface: 'الْقَاهِرَةِ', lemma: 'قَاهِر', pos: 'adj', features: 'pl.def.gen', gloss: 'the overwhelming' },
          ],
        },
        {
          id: 'qs-v9-c08-008',
          ar: 'فَكَتَبَ إِلَيْهَا كِتَاباً بَلِيغاً',
          en: 'So he wrote her an eloquent letter,',
          tokens: [
            { surface: 'فَكَتَبَ', lemma: 'كَتَبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to write; so he wrote' },
            { surface: 'إِلَيْهَا', lemma: 'إِلَى', pos: 'prep', features: 'prep+3fs', gloss: 'to her' },
            { surface: 'كِتَاباً', lemma: 'كِتَاب', pos: 'noun', features: 'indef.acc', gloss: 'a letter' },
            { surface: 'بَلِيغاً', lemma: 'بَلِيغ', pos: 'adj', features: 'indef.acc', gloss: 'eloquent' },
          ],
        },
        {
          id: 'qs-v9-c08-009',
          ar: 'وَدَعَاهَا فِيهِ إِلَى الْإِسْلَامِ وَالِاسْتِسْلَامِ.',
          en: 'calling her in it to Islam and submission.',
          tokens: [
            { surface: 'وَدَعَاهَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+perf.3ms+3fs', gloss: 'to call; and called her' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in it' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْإِسْلَامِ', lemma: 'إِسْلَام', pos: 'noun', features: 'def.gen', gloss: 'Islam' },
            { surface: 'وَالِاسْتِسْلَامِ', lemma: 'اِسْتِسْلَام', pos: 'noun', features: 'conj+def.gen', gloss: 'and submission' },
          ],
        },
        {
          id: 'qs-v9-c08-010',
          ar: 'وَالْكِتَابُ يَجْمَعُ بَيْنَ الرِّقَّةِ وَالصَّرَامَةِ',
          en: 'The letter combined gentleness and firmness,',
          tokens: [
            { surface: 'وَالْكِتَابُ', lemma: 'كِتَاب', pos: 'noun', features: 'conj+def.nom', gloss: 'and the letter' },
            { surface: 'يَجْمَعُ', lemma: 'جَمَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to combine; combines' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'الرِّقَّةِ', lemma: 'رِقَّة', pos: 'noun', features: 'def.gen', root: 'ر ق ق', gloss: 'gentleness' },
            { surface: 'وَالصَّرَامَةِ', lemma: 'صَرَامَة', pos: 'noun', features: 'conj+def.gen', root: 'ص ر م', gloss: 'and firmness' },
          ],
        },
        {
          id: 'qs-v9-c08-011',
          ar: 'وَتَوَاضُعِ الْأَنْبِيَاءِ وَغَيْرَةِ الْمُلُوكِ.',
          en: "a prophet's humility and a king's jealous authority.",
          tokens: [
            { surface: 'وَتَوَاضُعِ', lemma: 'تَوَاضُع', pos: 'noun', features: 'conj+constr.gen', root: 'و ض ع', gloss: 'and the humility of' },
            { surface: 'الْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the prophets' },
            { surface: 'وَغَيْرَةِ', lemma: 'غَيْرَة', pos: 'noun', features: 'conj+constr.gen', gloss: 'and the jealous authority of' },
            { surface: 'الْمُلُوكِ', lemma: 'مَلِك', pos: 'noun', features: 'pl.def.gen', gloss: 'kings' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا شَقَّ عَلَى سُلَيْمَانَ أَمْرُ مَلِكَةِ سَبَإٍ؟',
          options: ['لِأَنَّهَا وَقَوْمَهَا كَانُوا يَعْبُدُونَ الشَّمْسَ وَلَمْ تَبْلُغْهُمْ دَعْوَتُهُ', 'لِأَنَّهَا كَانَتْ تُحَارِبُهُ', 'لِأَنَّهَا كَانَتْ فَقِيرَةً'],
          answer: 0,
          qEn: 'Why did the matter of the Queen of Sabaʾ distress Sulaymān?',
          optionsEn: ['Because she and her people worshipped the sun and his call had not reached them', 'Because she was at war with him', 'Because she was poor'],
        },
        {
          q: 'مَاذَا قَرَّرَ سُلَيْمَانُ أَنْ يَفْعَلَ قَبْلَ الزَّحْفِ عَلَى بِلَادِهَا؟',
          options: ['أَنْ يَكْتُبَ إِلَيْهَا كِتَاباً يَدْعُوهَا فِيهِ إِلَى الْإِسْلَامِ وَالِاسْتِسْلَامِ', 'أَنْ يُهَاجِمَهَا فَوْراً', 'أَنْ يَتَجَاهَلَهَا'],
          answer: 0,
          qEn: 'What did Sulaymān decide to do before marching on her land?',
          optionsEn: ['To write her a letter calling her to Islam and submission', 'To attack her immediately', 'To ignore her'],
        },
        {
          q: 'بِمَاذَا اتَّصَفَ كِتَابُ سُلَيْمَانَ؟',
          options: ['جَمَعَ بَيْنَ الرِّقَّةِ وَالصَّرَامَةِ وَتَوَاضُعِ الْأَنْبِيَاءِ وَغَيْرَةِ الْمُلُوكِ', 'كَانَ قَاسِياً بِلَا رِفْقٍ', 'كَانَ قَصِيراً جِدّاً بِلَا مَعْنَى'],
          answer: 0,
          qEn: "What characterized Sulaymān's letter?",
          optionsEn: ["It combined gentleness and firmness, a prophet's humility and a king's jealous authority", "It was harsh without any gentleness", "It was very short and meaningless"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'شَقَّ عَلَى نَبِيِّ اللَّهِ أَنْ',
        post: 'بِجِوَارِ مَمْلَكَتِهِ مَلِكٌ لَا يَعْرِفُهَا.',
        en: 'It distressed the Prophet of Allah that there should be, neighbouring his kingdom, a king he did not know.',
        options: ['يَكُونَ', 'كَانَ', 'يَكُونُ', 'كُنْ'],
        answer: 0,
        rationales: [
          'Subjunctive after أَنْ -- matches the printed أَنْ يَكُونَ.',
          'Perfect -- wrong; أَنْ requires a subjunctive imperfect, not the perfect.',
          'Indicative imperfect -- wrong mood; أَنْ requires the subjunctive.',
          'Imperative -- wrong; this is a description, not a command.',
        ],
      },
      {
        type: 'cloze',
        pre: 'رَأَى سُلَيْمَانُ مِنَ الصَّوَابِ أَنْ',
        post: 'إِلَى مَلِكَتِهَا.',
        en: 'Sulaymān judged it right to write to their queen.',
        options: ['يَكْتُبَ', 'كَتَبَ', 'يَكْتُبُ', 'اكْتُبْ'],
        answer: 0,
        rationales: [
          'Subjunctive after أَنْ -- matches the printed أَنْ يَكْتُبَ.',
          'Perfect -- wrong; أَنْ requires a subjunctive imperfect, not the perfect.',
          'Indicative imperfect -- wrong mood; أَنْ requires the subjunctive.',
          'Imperative -- wrong; this is a description, not a command.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَالْكِتَابُ يَجْمَعُ بَيْنَ الرِّقَّةِ',
        post: 'وَتَوَاضُعِ الْأَنْبِيَاءِ وَغَيْرَةِ الْمُلُوكِ.',
        en: "The letter combined gentleness and firmness, a prophet's humility and a king's jealous authority.",
        options: ['وَالصَّرَامَةِ', 'وَالصَّرَامَةُ', 'وَالصَّرَامَةَ', 'صَرَامَةٌ'],
        answer: 0,
        rationales: [
          'Genitive, coordinated with الرِّقَّةِ -- both objects of بَيْنَ, matching the printed بَيْنَ الرِّقَّةِ وَالصَّرَامَةِ.',
          'Nominative -- wrong case; بَيْنَ governs the genitive.',
          'Accusative -- wrong case for the same reason.',
          'Indefinite, uncoordinated -- wrong; the printed word is definite and joined by وَ.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَكْتُبُ كِتَاباً بَلِيغاً',
        pre: '',
        post: 'كِتَاباً بَلِيغاً',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَكْتُبُ', 'أَكْتُبُ', 'يَكْتُبُ', 'نَكْتُبُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '1st singular -- the base form, not shifted to "she."',
          '3rd masculine singular -- wrong gender; the target is "she," not "he."',
          '1st plural -- wrong person; the target is "she," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'تَزْحَفُ الْجُيُوشُ عَلَى الْبِلَادِ',
        pre: '',
        post: 'عَلَى الْبِلَادِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَزْحَفُ', 'تَزْحَفُ', 'يَزْحَفُ', 'نَزْحَفُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd feminine singular -- the base form, not shifted to "I."',
          '3rd masculine singular -- wrong person and gender.',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَدْعُو الْمَلِكُ النَّاسَ إِلَى الطَّاعَةِ',
        pre: '',
        post: 'النَّاسَ إِلَى الطَّاعَةِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَدْعُو', 'يَدْعُو', 'تَدْعُو', 'أَدْعُو'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person; this is "we," not "you."',
          '1st singular -- wrong number; the target is plural نَحْنُ, not "I."',
        ],
      },
    ],
  },
};

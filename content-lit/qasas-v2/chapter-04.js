// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 4 -- إِلَى
// الْغَابَةِ. Printed pages 31 (from the divider, after ch3's closing
// وَأَذِنَ يَعْقُوبُ لِيُوسُفَ) - 32 (ending before ch5's heading أَمَامَ
// يَعْقُوبَ and its opening Qur'an quotations). Transcribed by hand from the
// scan (vision OCR, 300dpi render) against QASAS_AGENT_BRIEF.md §7 (which
// gives this chapter as its pre-vetted pilot text) and ../CHAPTER-FORMAT.md.
// My own page-31/32 render was cross-checked line by line against the
// brief's transcription and the two matched exactly -- no corrections
// needed this time.
//
// The brothers cast Yūsuf into the well, Allah comforts him from within it,
// and the brothers fabricate the wolf story with Yūsuf's blood-stained
// shirt. No Qur'anic quotation on these pages -- pure narrative and
// dialogue.
//
// Grammar notes:
//   -- لَمْ (qs-v2-c04-{003,004}) is this course's first appearance of the
//      past-negating jussive particle (distinct from لَا and from لَمَّا,
//      both already taught) -- tagged pos:'part', features:'neg' exactly
//      like لَا (CHAPTER-FORMAT.md has no separate atom for it, and none is
//      needed: it's the same 'neg' role, just a different negator). The
//      verb it governs (يَرْحَمُوا, جزم) stays tagged plain impf.3mp, per the
//      prohibitive-جزم precedent already established for لَا + jussive
//      (qasas-v1 ch11's header note) -- mood is not tracked separately.
//   -- سَيَحْضُرُ / سَيَكُونُ (qs-v2-c04-{013,014}) carry the future سَ- prefix
//      fused into the surface form with no separate tag, matching the
//      precedent already set by qasas-v1 ch14's سَتَجِدُنِي -- the format has
//      no 'fut' atom, so the verb keeps its plain impf features.
//   -- Five recycled كَانَ + accusative-predicate clauses in qs-v2-c04-
//      {005..009} (وَكَانَ يُوسُفُ وَلَداً صَغِيراً، وَكَانَ قَلْبُهُ صَغِيراً،
//      وَكَانَتِ الْبِئْرُ عَمِيقَةً، وَكَانَتِ الْبِئْرُ مُظْلِمَةً، وَكَانَ يُوسُفُ
//      وَحِيداً) are exactly the drill material QASAS_AGENT_BRIEF.md §7
//      flags for workshop -- built into both cloze (case/gender agreement
//      on the predicate) and shift (person paradigm on أَخَافُ) below.
//   -- Shared lexicon check (QASAS_AGENT_BRIEF.md §6): جِدّ and اِجْتَمَعَ are
//      already taught (qasas-v2 ch2 and qasas-v1 ch6/qasas-v2 ch2
//      respectively) and so are NOT re-listed in newWords here, even
//      though QASAS_AGENT_BRIEF.md §7's own word list doesn't mention them
//      either way. بِئْر, خَافَ, كَبْش, ذَبَحَ, ذِئْب, شَأْن are likewise already
//      taught (qasas-v1 ch12/13/10/14, qasas-v2 ch1/3) and not re-listed --
//      note this diverges slightly from the brief's own §7 word list
//      (which names بِئْر and ذِئْب as "new"), since our actual teaching
//      order has already covered them by this point.
//
// 18 new words (غَابَة، عَمِيق، مُظْلِم، وَحِيد، قَلْب، رَحِمَ، بَشَّرَ، حَضَرَ، فَرَغَ،
// صَدَقَ، صَدَّقَ، دَم، آيَة، قَمِيص، صَبَغَ، حَزِنَ، لَمْ، الآن).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch4',
  title: { ar: 'إِلَى الْغَابَةِ', en: 'To the Forest' },
  newWords: [
    'غَابَة', 'عَمِيق', 'مُظْلِم', 'وَحِيد', 'قَلْب', 'رَحِمَ', 'بَشَّرَ', 'حَضَرَ', 'فَرَغَ',
    'صَدَقَ', 'صَدَّقَ', 'دَم', 'آيَة', 'قَمِيص', 'صَبَغَ', 'حَزِنَ', 'لَمْ', 'الآن',
  ],
  lemmas: {
    'غَابَة': { gloss: 'forest' },
    'عَمِيق': { gloss: 'deep' },
    'مُظْلِم': { gloss: 'dark' },
    'وَحِيد': { gloss: 'alone, solitary' },
    'قَلْب': { gloss: 'heart' },
    'رَحِمَ': { gloss: 'to have mercy (on)' },
    'بَشَّرَ': { gloss: 'to give glad tidings' },
    'حَضَرَ': { gloss: 'to come, be present' },
    'فَرَغَ': { gloss: 'to finish, be free (of)' },
    'صَدَقَ': { gloss: 'to speak truly, be truthful' },
    'صَدَّقَ': { gloss: 'to believe, confirm as true' },
    'دَم': { gloss: 'blood' },
    'آيَة': { gloss: 'sign, proof' },
    'قَمِيص': { gloss: 'shirt' },
    'صَبَغَ': { gloss: 'to dye' },
    'حَزِنَ': { gloss: 'to grieve, be sad' },
    'لَمْ': { gloss: 'not (negates the past, + jussive)' },
    'الآن': { gloss: 'now' },
  },
  paragraphs: [
    {
      en: 'And the brothers rejoiced greatly when Yaʿqūb gave Yūsuf permission. They went out to a forest and threw Yūsuf into a well in the forest, showing no mercy to young Yūsuf, nor to Yaʿqūb, the elderly old man. Yūsuf was a small boy, and his heart was small.',
      sentences: [
        {
          id: 'qs-v2-c04-001',
          ar: 'وَفَرِحَ الإِخْوَةُ كَثِيراً لَمَّا أَذِنَ يَعْقُوبُ لِيُوسُفَ.',
          en: 'And the brothers rejoiced greatly when Yaʿqūb gave Yūsuf permission.',
          tokens: [
            { surface: 'وَفَرِحَ', lemma: 'فَرِحَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ف ر ح', gloss: 'to rejoice; and rejoiced' },
            { surface: 'الإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'كَثِيراً', lemma: 'كَثِير', pos: 'adv', features: 'indef.acc', root: 'ك ث ر', gloss: 'greatly' },
            { surface: 'لَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'أَذِنَ', lemma: 'أَذِنَ', pos: 'verb', features: 'perf.3ms', root: 'أ ذ ن', gloss: 'to permit; permitted' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'لِيُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'prep+gen', gloss: 'to Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c04-002',
          ar: 'وَذَهَبُوا إِلَى غَابَةٍ وَأَلْقَوْا يُوسُفَ فِي بِئْرٍ فِي الْغَابَةِ',
          en: 'They went out to a forest and threw Yūsuf into a well in the forest,',
          tokens: [
            { surface: 'وَذَهَبُوا', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ذ ه ب', gloss: 'to go; and they went' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'غَابَةٍ', lemma: 'غَابَة', pos: 'noun', features: 'indef.gen', root: 'غ ي ب', gloss: 'a forest' },
            { surface: 'وَأَلْقَوْا', lemma: 'أَلْقَى', pos: 'verb', features: 'conj+perf.3mp', root: 'ل ق ي', gloss: 'to throw, cast; and they threw' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'بِئْرٍ', lemma: 'بِئْر', pos: 'noun', features: 'indef.gen', root: 'ب أ ر', gloss: 'a well' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْغَابَةِ', lemma: 'غَابَة', pos: 'noun', features: 'def.gen', root: 'غ ي ب', gloss: 'the forest' },
          ],
        },
        {
          id: 'qs-v2-c04-003',
          ar: 'وَلَمْ يَرْحَمُوا يُوسُفَ الصَّغِيرَ،',
          en: 'showing no mercy to young Yūsuf,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَرْحَمُوا', lemma: 'رَحِمَ', pos: 'verb', features: 'impf.3mp', root: 'ر ح م', gloss: 'to have mercy; they showed mercy' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'الصَّغِيرَ', lemma: 'صَغِير', pos: 'adj', features: 'def.acc', root: 'ص غ ر', gloss: 'the young, the small' },
          ],
        },
        {
          id: 'qs-v2-c04-004',
          ar: 'وَلَمْ يَرْحَمُوا يَعْقُوبَ الشَّيْخَ الْكَبِيرَ.',
          en: 'nor to Yaʿqūb, the elderly old man.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَرْحَمُوا', lemma: 'رَحِمَ', pos: 'verb', features: 'impf.3mp', root: 'ر ح م', gloss: 'to have mercy; they showed mercy' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'acc', gloss: 'Yaʿqūb' },
            { surface: 'الشَّيْخَ', lemma: 'شَيْخ', pos: 'noun', features: 'def.acc', root: 'ش ي خ', gloss: 'the elder, old man' },
            { surface: 'الْكَبِيرَ', lemma: 'كَبِير', pos: 'adj', features: 'def.acc', root: 'ك ب ر', gloss: 'old, elderly' },
          ],
        },
        {
          id: 'qs-v2-c04-005',
          ar: 'وَكَانَ يُوسُفُ وَلَداً صَغِيراً،',
          en: 'Yūsuf was a small boy,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'وَلَداً', lemma: 'وَلَد', pos: 'noun', features: 'indef.acc', root: 'و ل د', gloss: 'a boy' },
            { surface: 'صَغِيراً', lemma: 'صَغِير', pos: 'adj', features: 'indef.acc', root: 'ص غ ر', gloss: 'small, young' },
          ],
        },
        {
          id: 'qs-v2-c04-006',
          ar: 'وَكَانَ قَلْبُهُ صَغِيراً.',
          en: 'and his heart was small.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'قَلْبُهُ', lemma: 'قَلْب', pos: 'noun', features: 'nom+3ms', root: 'ق ل ب', gloss: 'his heart' },
            { surface: 'صَغِيراً', lemma: 'صَغِير', pos: 'adj', features: 'indef.acc', root: 'ص غ ر', gloss: 'small, young' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيْنَ أَلْقَى الإِخْوَةُ يُوسُفَ؟',
          options: ['فِي بِئْرٍ فِي الْغَابَةِ', 'فِي أَرْضٍ بَعِيدَةٍ', 'فِي بَيْتِ رَجُلٍ غَرِيبٍ'],
          answer: 0,
          qEn: 'Where did the brothers throw Yūsuf?',
          optionsEn: ['Into a well in the forest', 'Into a distant land', "Into a stranger's house"],
        },
      ],
    },
    {
      en: 'the well was deep, and the well was dark. And Yūsuf was alone. But Allah gave Yūsuf glad tidings and said to him: \'Do not grieve and do not fear -- Allah is with you, and you will have a great standing. The brothers will come to you, and you will tell them what they did.\'',
      sentences: [
        {
          id: 'qs-v2-c04-007',
          ar: 'وَكَانَتِ الْبِئْرُ عَمِيقَةً،',
          en: 'the well was deep,',
          tokens: [
            { surface: 'وَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'الْبِئْرُ', lemma: 'بِئْر', pos: 'noun', features: 'def.nom', root: 'ب أ ر', gloss: 'the well' },
            { surface: 'عَمِيقَةً', lemma: 'عَمِيق', pos: 'adj', features: 'indef.acc.f', root: 'ع م ق', gloss: 'deep' },
          ],
        },
        {
          id: 'qs-v2-c04-008',
          ar: 'وَكَانَتِ الْبِئْرُ مُظْلِمَةً.',
          en: 'and the well was dark.',
          tokens: [
            { surface: 'وَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'الْبِئْرُ', lemma: 'بِئْر', pos: 'noun', features: 'def.nom', root: 'ب أ ر', gloss: 'the well' },
            { surface: 'مُظْلِمَةً', lemma: 'مُظْلِم', pos: 'adj', features: 'indef.acc.f', root: 'ظ ل م', gloss: 'dark' },
          ],
        },
        {
          id: 'qs-v2-c04-009',
          ar: 'وَكَانَ يُوسُفُ وَحِيداً.',
          en: 'And Yūsuf was alone.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'وَحِيداً', lemma: 'وَحِيد', pos: 'adj', features: 'indef.acc', root: 'و ح د', gloss: 'alone' },
          ],
        },
        {
          id: 'qs-v2-c04-010',
          ar: 'وَلَكِنَّ اللَّهَ بَشَّرَ يُوسُفَ وَقَالَ لَهُ:',
          en: "But Allah gave Yūsuf glad tidings and said to him:",
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'بَشَّرَ', lemma: 'بَشَّرَ', pos: 'verb', features: 'perf.3ms', root: 'ب ش ر', gloss: 'to give glad tidings; gave glad tidings' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v2-c04-011',
          ar: 'لَا تَحْزَنْ وَلَا تَخَفْ',
          en: "'Do not grieve and do not fear --",
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَحْزَنْ', lemma: 'حَزِنَ', pos: 'verb', features: 'impf.2ms', root: 'ح ز ن', gloss: 'to grieve; do not grieve' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَخَفْ', lemma: 'خَافَ', pos: 'verb', features: 'impf.2ms', root: 'خ و ف', gloss: 'to fear; do not fear' },
          ],
        },
        {
          id: 'qs-v2-c04-012',
          ar: 'إِنَّ اللَّهَ مَعَكَ،',
          en: 'Allah is with you,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'مَعَكَ', lemma: 'مَعَ', pos: 'adv', features: 'adv+2ms', gloss: 'with you' },
          ],
        },
        {
          id: 'qs-v2-c04-013',
          ar: 'وَسَيَكُونُ لَكَ شَأْنٌ.',
          en: "and you will have a great standing.",
          tokens: [
            { surface: 'وَسَيَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ك و ن', gloss: 'to be; and will be' },
            { surface: 'لَكَ', lemma: 'لِ', pos: 'prep', features: 'prep+2ms', gloss: 'to you, you will have' },
            { surface: 'شَأْنٌ', lemma: 'شَأْن', pos: 'noun', features: 'indef.nom', root: 'ش أ ن', gloss: 'a standing, importance' },
          ],
        },
        {
          id: 'qs-v2-c04-014',
          ar: 'سَيَحْضُرُ إِلَيْكَ الإِخْوَةُ',
          en: 'The brothers will come to you,',
          tokens: [
            { surface: 'سَيَحْضُرُ', lemma: 'حَضَرَ', pos: 'verb', features: 'impf.3ms', root: 'ح ض ر', gloss: 'to come, be present; will come' },
            { surface: 'إِلَيْكَ', lemma: 'إِلَى', pos: 'prep', features: 'prep+2ms', gloss: 'to you' },
            { surface: 'الإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
          ],
        },
        {
          id: 'qs-v2-c04-015',
          ar: "وَتُخْبِرُهُمْ بِمَا فَعَلُوهُ.",
          en: "and you will tell them what they did.'",
          tokens: [
            { surface: 'وَتُخْبِرُهُمْ', lemma: 'أَخْبَرَ', pos: 'verb', features: 'conj+impf.2ms+3mp', root: 'خ ب ر', gloss: 'to inform; and you will tell them' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'about what' },
            { surface: 'فَعَلُوهُ', lemma: 'فَعَلَ', pos: 'verb', features: 'perf.3mp+3ms', root: 'ف ع ل', gloss: 'to do; they did it' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا بَشَّرَ اللَّهُ يُوسُفَ وَهُوَ فِي الْبِئْرِ؟',
          options: ['بِأَنَّهُ مَعَهُ وَسَيَكُونُ لَهُ شَأْنٌ', 'بِأَنَّ إِخْوَتَهُ سَيَنْدَمُونَ فَوْراً', 'بِأَنَّهُ سَيَعُودُ إِلَى أَبِيهِ غَداً'],
          answer: 0,
          qEn: 'What did Allah comfort Yūsuf with while he was in the well?',
          optionsEn: ['That He was with him and he would have a great standing', 'That his brothers would regret it at once', 'That he would return to his father tomorrow'],
        },
      ],
    },
    {
      en: 'When they had finished their business and thrown Yūsuf into the well, they gathered and said: \'What shall we tell our father?\' One of them said: \'Our father used to say, I fear the wolf will eat him -- so let us tell him: You have spoken truly, O our father, the wolf has indeed eaten him.\' The brothers agreed to that, and said: \'Yes, we shall tell him: O our father, the wolf has indeed eaten him.\'',
      sentences: [
        {
          id: 'qs-v2-c04-016',
          ar: 'وَلَمَّا فَرَغُوا مِنْ شَأْنِهِمْ وَأَلْقَوْا يُوسُفَ فِي الْبِئْرِ اجْتَمَعُوا',
          en: 'When they had finished their business and thrown Yūsuf into the well, they gathered',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'فَرَغُوا', lemma: 'فَرَغَ', pos: 'verb', features: 'perf.3mp', root: 'ف ر غ', gloss: 'to finish, be free of; they finished' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'شَأْنِهِمْ', lemma: 'شَأْن', pos: 'noun', features: 'gen+3mp', root: 'ش أ ن', gloss: 'their affair, their business' },
            { surface: 'وَأَلْقَوْا', lemma: 'أَلْقَى', pos: 'verb', features: 'conj+perf.3mp', root: 'ل ق ي', gloss: 'to throw, cast; and they threw' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبِئْرِ', lemma: 'بِئْر', pos: 'noun', features: 'def.gen', root: 'ب أ ر', gloss: 'the well' },
            { surface: 'اجْتَمَعُوا', lemma: 'اِجْتَمَعَ', pos: 'verb', features: 'perf.3mp', root: 'ج م ع', gloss: 'to gather; they gathered' },
          ],
        },
        {
          id: 'qs-v2-c04-017',
          ar: 'وَقَالُوا: مَاذَا نَقُولُ لِأَبِينَا؟',
          en: "and said: 'What shall we tell our father?'",
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق و ل', gloss: 'to say; and they said' },
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'نَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.1p', root: 'ق و ل', gloss: 'to say; shall we say' },
            { surface: 'لِأَبِينَا', lemma: 'أَب', pos: 'noun', features: 'prep+gen+1p', root: 'أ ب و', gloss: 'to our father' },
          ],
        },
        {
          id: 'qs-v2-c04-018',
          ar: 'قَالَ بَعْضُهُمْ: كَانَ أَبُونَا يَقُولُ أَخَافُ أَنْ يَأْكُلَهُ الذِّئْبُ',
          en: "One of them said: 'Our father used to say, I fear the wolf will eat him --",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'بَعْضُهُمْ', lemma: 'بَعْض', pos: 'noun', features: 'nom+3mp', root: 'ب ع ض', gloss: 'some of them' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; used to' },
            { surface: 'أَبُونَا', lemma: 'أَب', pos: 'noun', features: 'nom+1p', root: 'أ ب و', gloss: 'our father' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', root: 'ق و ل', gloss: 'to say; says' },
            { surface: 'أَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.1s', root: 'خ و ف', gloss: 'to fear; I fear' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَأْكُلَهُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'أ ك ل', gloss: 'to eat; it eats him' },
            { surface: 'الذِّئْبُ', lemma: 'ذِئْب', pos: 'noun', features: 'def.nom', root: 'ذ أ ب', gloss: 'the wolf' },
          ],
        },
        {
          id: 'qs-v2-c04-019',
          ar: 'فَنَقُولُ لَهُ صَدَقْتَ يَا أَبَانَا قَدْ أَكَلَهُ الذِّئْبُ،',
          en: "so let us tell him: You have spoken truly, O our father, the wolf has indeed eaten him.'",
          tokens: [
            { surface: 'فَنَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.1p', root: 'ق و ل', gloss: 'to say; so we shall say' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'صَدَقْتَ', lemma: 'صَدَقَ', pos: 'verb', features: 'perf.2ms', root: 'ص د ق', gloss: 'to speak truly; you have spoken truly' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أَبَانَا', lemma: 'أَب', pos: 'noun', features: 'acc+1p', root: 'أ ب و', gloss: 'our father' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed (+ perfect)' },
            { surface: 'أَكَلَهُ', lemma: 'أَكَلَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'أ ك ل', gloss: 'to eat; ate him' },
            { surface: 'الذِّئْبُ', lemma: 'ذِئْب', pos: 'noun', features: 'def.nom', root: 'ذ أ ب', gloss: 'the wolf' },
          ],
        },
        {
          id: 'qs-v2-c04-020',
          ar: 'وَافَقَ الإِخْوَةُ عَلَى ذَلِكَ،',
          en: 'The brothers agreed to that,',
          tokens: [
            { surface: 'وَافَقَ', lemma: 'وَافَقَ', pos: 'verb', features: 'perf.3ms', root: 'و ف ق', gloss: 'to agree; agreed' },
            { surface: 'الإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to, upon' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v2-c04-021',
          ar: 'وَقَالُوا نَعَمْ نَقُولُ لَهُ يَا أَبَانَا قَدْ أَكَلَهُ الذِّئْبُ.',
          en: "and said: 'Yes, we shall tell him: O our father, the wolf has indeed eaten him.'",
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق و ل', gloss: 'to say; and they said' },
            { surface: 'نَعَمْ', lemma: 'نَعَمْ', pos: 'part', features: 'part', gloss: 'yes' },
            { surface: 'نَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.1p', root: 'ق و ل', gloss: 'to say; we shall say' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أَبَانَا', lemma: 'أَب', pos: 'noun', features: 'acc+1p', root: 'أ ب و', gloss: 'our father' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed (+ perfect)' },
            { surface: 'أَكَلَهُ', lemma: 'أَكَلَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'أ ك ل', gloss: 'to eat; ate him' },
            { surface: 'الذِّئْبُ', lemma: 'ذِئْب', pos: 'noun', features: 'def.nom', root: 'ذ أ ب', gloss: 'the wolf' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'One of the brothers said: \'But what is the proof of that?\' They said: \'Its proof is the blood.\' So the brothers took a ram and slaughtered it, and took Yūsuf\'s shirt and dyed it. The brothers rejoiced greatly, and said: \'Now our father will believe us.\'',
      sentences: [
        {
          id: 'qs-v2-c04-022',
          ar: 'قَالَ بَعْضُ الإِخْوَانِ: وَلَكِنْ مَا آيَةُ ذَلِكَ؟',
          en: "One of the brothers said: 'But what is the proof of that?'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'بَعْضُ', lemma: 'بَعْض', pos: 'noun', features: 'nom.constr', root: 'ب ع ض', gloss: 'some of' },
            { surface: 'الإِخْوَانِ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.gen', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'آيَةُ', lemma: 'آيَة', pos: 'noun', features: 'nom.constr', root: 'أ ي ي', gloss: 'sign, proof of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v2-c04-023',
          ar: 'قَالُوا: آيَةُ ذَلِكَ الدَّمُ.',
          en: "They said: 'Its proof is the blood.'",
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'آيَةُ', lemma: 'آيَة', pos: 'noun', features: 'nom.constr', root: 'أ ي ي', gloss: 'sign, proof of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'الدَّمُ', lemma: 'دَم', pos: 'noun', features: 'def.nom', root: 'د م و', gloss: 'the blood' },
          ],
        },
        {
          id: 'qs-v2-c04-024',
          ar: 'وَأَخَذَ الإِخْوَةُ كَبْشاً وَذَبَحُوهُ.',
          en: 'So the brothers took a ram and slaughtered it,',
          tokens: [
            { surface: 'وَأَخَذَ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ خ ذ', gloss: 'to take; and took' },
            { surface: 'الإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'كَبْشاً', lemma: 'كَبْش', pos: 'noun', features: 'indef.acc', root: 'ك ب ش', gloss: 'a ram' },
            { surface: 'وَذَبَحُوهُ', lemma: 'ذَبَحَ', pos: 'verb', features: 'conj+perf.3mp+3ms', root: 'ذ ب ح', gloss: 'to slaughter; and they slaughtered it' },
          ],
        },
        {
          id: 'qs-v2-c04-025',
          ar: 'وَأَخَذُوا قَمِيصَ يُوسُفَ وَصَبَغُوهُ.',
          en: "and took Yūsuf's shirt and dyed it.",
          tokens: [
            { surface: 'وَأَخَذُوا', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+perf.3mp', root: 'أ خ ذ', gloss: 'to take; and they took' },
            { surface: 'قَمِيصَ', lemma: 'قَمِيص', pos: 'noun', features: 'acc.constr', root: 'ق م ص', gloss: 'shirt of' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: "Yūsuf's" },
            { surface: 'وَصَبَغُوهُ', lemma: 'صَبَغَ', pos: 'verb', features: 'conj+perf.3mp+3ms', root: 'ص ب غ', gloss: 'to dye; and they dyed it' },
          ],
        },
        {
          id: 'qs-v2-c04-026',
          ar: 'وَفَرِحَ الإِخْوَةُ جِدًّا:',
          en: 'The brothers rejoiced greatly,',
          tokens: [
            { surface: 'وَفَرِحَ', lemma: 'فَرِحَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ف ر ح', gloss: 'to rejoice; and rejoiced' },
            { surface: 'الإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, greatly' },
          ],
        },
        {
          id: 'qs-v2-c04-027',
          ar: 'وَقَالُوا الآنَ يُصَدِّقُ أَبُونَا.',
          en: "and said: 'Now our father will believe us.'",
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق و ل', gloss: 'to say; and they said' },
            { surface: 'الآنَ', lemma: 'الآن', pos: 'adv', features: 'adv', gloss: 'now' },
            { surface: 'يُصَدِّقُ', lemma: 'صَدَّقَ', pos: 'verb', features: 'impf.3ms', root: 'ص د ق', gloss: 'to believe, confirm true; will believe' },
            { surface: 'أَبُونَا', lemma: 'أَب', pos: 'noun', features: 'nom+1p', root: 'أ ب و', gloss: 'our father' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ أَقْنَعَ الإِخْوَةُ أَبَاهُمْ بِأَنَّ الذِّئْبَ أَكَلَ يُوسُفَ؟',
          options: ['صَبَغُوا قَمِيصَ يُوسُفَ بِالدَّمِ', 'أَحْضَرُوا يُوسُفَ نَفْسَهُ', 'لَمْ يُقْنِعُوهُ أَبَداً'],
          answer: 0,
          qEn: 'How did the brothers convince their father that the wolf ate Yūsuf?',
          optionsEn: ["They dyed Yūsuf's shirt with blood", 'They brought Yūsuf himself', 'They never convinced him'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ يُوسُفُ وَلَداً',
        post: '.',
        en: 'Yūsuf was a small boy.',
        options: ['صَغِيراً', 'صَغِيرٌ', 'صَغِيرَةً', 'صِغَاراً'],
        answer: 0,
        rationales: [
          'Accusative, masculine singular -- agrees with وَلَداً, itself the accusative predicate of كَانَ.',
          'Nominative -- wrong case; the predicate of كَانَ takes the accusative.',
          "Feminine 'small' -- wrong gender; وَلَداً (a boy) is masculine.",
          "Plural 'small (pl.)' -- wrong number; وَلَداً is singular.",
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَتِ الْبِئْرُ',
        post: '،',
        en: 'The well was deep,',
        options: ['عَمِيقَةً', 'عَمِيقٌ', 'عَمِيقاً', 'عَمِيقَةٌ'],
        answer: 0,
        rationales: [
          'Accusative, feminine -- agrees with الْبِئْرُ (feminine) as the accusative predicate of كَانَتِ.',
          'Nominative, feminine -- wrong case.',
          "Masculine 'deep' -- wrong gender; الْبِئْرُ (the well) is feminine.",
          'Nominative, feminine -- wrong case; still needs the accusative predicate.',
        ],
      },
      {
        type: 'cloze',
        pre: '',
        post: 'الْبِئْرُ مُظْلِمَةً.',
        en: 'And the well was dark.',
        options: ['وَكَانَتِ', 'وَكَانَ', 'يَكُونُ', 'وَكَانُوا'],
        answer: 0,
        rationales: [
          "Perfect 'was', feminine -- agrees with the feminine subject الْبِئْرُ.",
          "Perfect 'was', masculine -- wrong gender; الْبِئْرُ is feminine.",
          "Imperfect 'is/will be' -- wrong tense for a completed description in the narrative.",
          "Perfect 'were', plural -- wrong number; الْبِئْرُ is singular.",
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَخَافُ أَنْ يَأْكُلَهُ الذِّئْبُ',
        pre: '',
        post: 'أَنْ يَأْكُلَهُ الذِّئْبُ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَخَافُ', 'أَخَافُ', 'يَخَافُ', 'نَخَافُ'],
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
        base: 'أَخَافُ أَنْ يَأْكُلَهُ الذِّئْبُ',
        pre: '',
        post: 'أَنْ يَأْكُلَهُ الذِّئْبُ',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يَخَافُ', 'أَخَافُ', 'تَخَافُ', 'نَخَافُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '1st singular -- I, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'أَخَافُ أَنْ يَأْكُلَهُ الذِّئْبُ',
        pre: '',
        post: 'أَنْ يَأْكُلَهُ الذِّئْبُ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَخَافُ', 'أَخَافُ', 'تَخَافُ', 'يَخَافُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '1st singular -- I, the form already given.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine singular -- he.',
        ],
      },
    ],
  },
};

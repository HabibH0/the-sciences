// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 8 -- الْوَفَاءُ
// وَالأَمَانَةُ. Printed page 35 (from the divider, after ch7's closing
// إِنَّهُ وَلَدٌ رَشِيدٌ) - 36 (ending before ch9's heading مَوْعِظَةُ السَّجْنِ).
// Transcribed by hand from the scan (vision OCR, 300dpi render, plus
// targeted PIL crops to confirm several lines) against
// ../CHAPTER-FORMAT.md.
//
// Al-ʿAzīz's wife tempts Yūsuf, he refuses out of fear of Allah, and when
// her lie is exposed he chooses prison over dishonor. Four short Qur'anic
// fragments (Sūrat Yūsuf 12:29 partial, 12:31 partial, 12:33 partial x2)
// are split into <=2-token pieces per the house workaround (qasas-v1 ch11's
// header note).
//
// Grammar / lexical notes:
//   -- qs-v2-c08-014 (وَعُرِفَ يُوسُفُ): this course's first perfect passive
//      (contrast qasas-v1 ch14's imperfect passive impf.pass.2ms) -- tagged
//      conj+perf.pass.3ms, same atom order (mood before pass) extended to
//      the perfect.
//   -- qs-v2-c08-{016,017}: مَا هَذَا بَشَرًا is مَا الْحِجَازِيَّة (مَا acting like
//      لَيْسَ, "this is not..."), so its predicate بَشَرًا is accusative --
//      tagged plain indef.acc like any other accusative predicate; the
//      format has no separate atom for this construction (same
//      safe-degradation approach already used for other roleless
//      constructions in this course). مَا itself keeps the same
//      neg-particle tagging already established, since CHAPTER-FORMAT.md
//      doesn't distinguish مَا الْحِجَازِيَّة from ordinary negating مَا.
//   -- qs-v2-c08-017's إِنْ and qs-v2-c08-018's إِلَّا (إِنْ ... إِلَّا, "only,
//      nothing but") reuse the same lemmas already taught for إِنْ
//      (conditional, qasas-v1 ch14) and إِلَّا (qasas-v1 ch10) in their
//      distinct restrictive-negation sense -- same polysemous-particle
//      handling already used for مَا (rel/neg) and إِذَا (temporal/surprise)
//      elsewhere in this course.
//   -- qs-v2-c08-026 (رَأَى الْعَزِيزُ أَنْ يُرْسِلَ): رَأَى here is the idiomatic
//      "saw fit to, decided to" sense rather than literal sight -- same
//      lemma رَأَى (already taught), gloss extended per-token.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): سَيِّد, غَضِبَ, زَوْج,
//      عَرَفَ, بَشَر, إِلَّا, اِشْتَدَّ, حُبّ, بَعْدَ, يَوْم, دَخَلَ, اِمْرَأَة, الْعَزِيز,
//      أَكْرَمَ, خَافَ, أَحَد, رَأَى, أَرْسَلَ are all already taught and NOT
//      re-listed in newWords here.
//
// 18 new words (رَاوَدَ، خِيَانَة، أَبَى، خَانَ، كَلَّا، أَحْسَنَ، شَكَا، كَاذِب، أَمِين،
// خَاطِئ، جَمَال، مَلَك، كَرِيم، غَضَب، إِذَنْ، سِجْن، أَحَبّ، بَرِيء).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch8',
  title: { ar: 'الْوَفَاءُ وَالأَمَانَةُ', en: 'Faithfulness and Trustworthiness' },
  newWords: [
    'رَاوَدَ', 'خِيَانَة', 'أَبَى', 'خَانَ', 'كَلَّا', 'أَحْسَنَ', 'شَكَا', 'كَاذِب',
    'أَمِين', 'خَاطِئ', 'جَمَال', 'مَلَك', 'كَرِيم', 'غَضَب', 'إِذَنْ', 'سِجْن',
    'أَحَبّ', 'بَرِيء',
  ],
  lemmas: {
    'رَاوَدَ': { gloss: 'to solicit, tempt' },
    'خِيَانَة': { gloss: 'betrayal, treachery' },
    'أَبَى': { gloss: 'to refuse' },
    'خَانَ': { gloss: 'to betray' },
    'كَلَّا': { gloss: 'never! by no means!' },
    'أَحْسَنَ': { gloss: 'to do good (to), treat well' },
    'شَكَا': { gloss: 'to complain' },
    'كَاذِب': { gloss: 'lying, a liar' },
    'أَمِين': { gloss: 'trustworthy' },
    'خَاطِئ': { gloss: 'sinning, a sinner' },
    'جَمَال': { gloss: 'beauty' },
    'مَلَك': { gloss: 'angel' },
    'كَرِيم': { gloss: 'noble, generous' },
    'غَضَب': { gloss: 'anger' },
    'إِذَنْ': { gloss: 'then, in that case' },
    'سِجْن': { gloss: 'prison' },
    'أَحَبّ': { gloss: 'dearer, more beloved' },
    'بَرِيء': { gloss: 'innocent' },
  },
  paragraphs: [
    {
      en: 'Al-ʿAzīz\'s wife tried to tempt Yūsuf into betrayal, but Yūsuf refused, and said: \'Never! I will not betray my master, he has treated me well and honored me. Indeed I fear Allah.\'',
      sentences: [
        {
          id: 'qs-v2-c08-001',
          ar: 'وَرَاوَدَتْ امْرَأَةُ الْعَزِيزِ يُوسُفَ عَلَى الْخِيَانَةِ.',
          en: "Al-ʿAzīz's wife tried to tempt Yūsuf into betrayal,",
          tokens: [
            { surface: 'وَرَاوَدَتْ', lemma: 'رَاوَدَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ر و د', gloss: 'to solicit, tempt; and tried to tempt' },
            { surface: 'امْرَأَةُ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'nom.constr', root: 'م ر أ', gloss: 'wife of' },
            { surface: 'الْعَزِيزِ', lemma: 'الْعَزِيز', pos: 'proper', features: 'gen', root: 'ع ز ز', gloss: 'al-ʿAzīz' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'into, to' },
            { surface: 'الْخِيَانَةِ', lemma: 'خِيَانَة', pos: 'noun', features: 'def.gen', root: 'خ و ن', gloss: 'betrayal, treachery' },
          ],
        },
        {
          id: 'qs-v2-c08-002',
          ar: 'وَلَكِنَّ يُوسُفَ أَبَى،',
          en: 'but Yūsuf refused,',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'أَبَى', lemma: 'أَبَى', pos: 'verb', features: 'perf.3ms', root: 'أ ب ي', gloss: 'to refuse; refused' },
          ],
        },
        {
          id: 'qs-v2-c08-003',
          ar: 'وَقَالَ: كَلَّا!',
          en: "and said: 'Never!",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'كَلَّا', lemma: 'كَلَّا', pos: 'part', features: 'part', gloss: 'never! by no means!' },
          ],
        },
        {
          id: 'qs-v2-c08-004',
          ar: 'أَنَا لَا أَخُونُ سَيِّدِي،',
          en: 'I will not betray my master,',
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أَخُونُ', lemma: 'خَانَ', pos: 'verb', features: 'impf.1s', root: 'خ و ن', gloss: 'to betray; I betray' },
            { surface: 'سَيِّدِي', lemma: 'سَيِّد', pos: 'noun', features: 'gen+1s', root: 'س و د', gloss: 'my master' },
          ],
        },
        {
          id: 'qs-v2-c08-005',
          ar: 'إِنَّهُ أَحْسَنَ إِلَيَّ وَأَكْرَمَنِي.',
          en: 'he has treated me well and honored me.',
          tokens: [
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'أَحْسَنَ', lemma: 'أَحْسَنَ', pos: 'verb', features: 'perf.3ms', root: 'ح س ن', gloss: 'to treat well; treated well' },
            { surface: 'إِلَيَّ', lemma: 'إِلَى', pos: 'prep', features: 'prep+1s', gloss: 'to me' },
            { surface: 'وَأَكْرَمَنِي', lemma: 'أَكْرَمَ', pos: 'verb', features: 'conj+perf.3ms+1s', root: 'ك ر م', gloss: 'to honor; and honored me' },
          ],
        },
        {
          id: 'qs-v2-c08-006',
          ar: 'إِنِّي أَخَافُ اللَّهَ.',
          en: "Indeed I fear Allah.'",
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'أَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.1s', root: 'خ و ف', gloss: 'to fear; I fear' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا طَلَبَتِ امْرَأَةُ الْعَزِيزِ مِنْ يُوسُفَ؟",
          options: ['أَنْ يَخُونَ سَيِّدَهُ', 'أَنْ يُعَلِّمَهَا الْقِرَاءَةَ', 'أَنْ يَذْهَبَ مَعَهَا إِلَى السُّوقِ'],
          answer: 0,
          qEn: "What did al-ʿAzīz's wife ask of Yūsuf?",
          optionsEn: ['To betray his master', 'To teach her to read', 'To go with her to the market'],
        },
      ],
    },
    {
      en: 'Al-ʿAzīz\'s wife grew angry and complained to her husband. Al-ʿAzīz knew the woman was lying, and knew Yūsuf was trustworthy. So he said to his wife: \'Indeed you were among the sinners.\'',
      sentences: [
        {
          id: 'qs-v2-c08-007',
          ar: 'وَغَضِبَتِ امْرَأَةُ الْعَزِيزِ',
          en: "Al-ʿAzīz's wife grew angry",
          tokens: [
            { surface: 'وَغَضِبَتِ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3fs', root: 'غ ض ب', gloss: 'to become angry; and grew angry' },
            { surface: 'امْرَأَةُ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'nom.constr', root: 'م ر أ', gloss: 'wife of' },
            { surface: 'الْعَزِيزِ', lemma: 'الْعَزِيز', pos: 'proper', features: 'gen', root: 'ع ز ز', gloss: 'al-ʿAzīz' },
          ],
        },
        {
          id: 'qs-v2-c08-008',
          ar: 'وَشَكَتْ إِلَى زَوْجِهَا.',
          en: 'and complained to her husband.',
          tokens: [
            { surface: 'وَشَكَتْ', lemma: 'شَكَا', pos: 'verb', features: 'conj+perf.3fs', root: 'ش ك و', gloss: 'to complain; and complained' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'زَوْجِهَا', lemma: 'زَوْج', pos: 'noun', features: 'gen+3fs', root: 'ز و ج', gloss: 'her husband' },
          ],
        },
        {
          id: 'qs-v2-c08-009',
          ar: 'وَعَرَفَ الْعَزِيزُ أَنَّ الْمَرْأَةَ كَاذِبَةٌ.',
          en: 'Al-ʿAzīz knew the woman was lying,',
          tokens: [
            { surface: 'وَعَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ر ف', gloss: 'to know; and knew' },
            { surface: 'الْعَزِيزُ', lemma: 'الْعَزِيز', pos: 'proper', features: 'nom', root: 'ع ز ز', gloss: 'al-ʿAzīz' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْمَرْأَةَ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'def.acc', root: 'م ر أ', gloss: 'the woman' },
            { surface: 'كَاذِبَةٌ', lemma: 'كَاذِب', pos: 'adj', features: 'indef.nom.f', root: 'ك ذ ب', gloss: 'lying, a liar' },
          ],
        },
        {
          id: 'qs-v2-c08-010',
          ar: 'وَعَرَفَ أَنَّ يُوسُفَ أَمِينٌ.',
          en: 'and knew Yūsuf was trustworthy.',
          tokens: [
            { surface: 'وَعَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ر ف', gloss: 'to know; and knew' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'أَمِينٌ', lemma: 'أَمِين', pos: 'adj', features: 'indef.nom', root: 'أ م ن', gloss: 'trustworthy' },
          ],
        },
        {
          id: 'qs-v2-c08-011',
          ar: 'فَقَالَ لِزَوْجِهِ:',
          en: 'So he said to his wife:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; so said' },
            { surface: 'لِزَوْجِهِ', lemma: 'زَوْج', pos: 'noun', features: 'prep+gen+3ms', root: 'ز و ج', gloss: 'to his wife' },
          ],
        },
        {
          id: 'qs-v2-c08-012',
          ar: '﴿إِنَّكِ كُنتِ',
          en: "'Indeed you were",
          tokens: [
            { surface: 'إِنَّكِ', lemma: 'إِنَّ', pos: 'part', features: 'part+2fs', gloss: 'indeed you (f.)' },
            { surface: 'كُنتِ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2fs', root: 'ك و ن', gloss: 'to be; you were' },
          ],
        },
        {
          id: 'qs-v2-c08-013',
          ar: 'مِنَ الْخَاطِئِينَ﴾.',
          en: "among the sinners.'",
          tokens: [
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْخَاطِئِينَ', lemma: 'خَاطِئ', pos: 'noun', features: 'pl.def.gen', root: 'خ ط أ', gloss: 'sinners, those who err' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'Yūsuf became known in Egypt for his beauty, and whenever anyone saw him he would say: \'This is not a human being -- this is nothing but a noble angel.\'',
      sentences: [
        {
          id: 'qs-v2-c08-014',
          ar: 'وَعُرِفَ يُوسُفُ فِي مِصْرَ بِجَمَالِهِ،',
          en: 'Yūsuf became known in Egypt for his beauty,',
          tokens: [
            { surface: 'وَعُرِفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+perf.pass.3ms', root: 'ع ر ف', gloss: 'to know; and became known' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'بِجَمَالِهِ', lemma: 'جَمَال', pos: 'noun', features: 'prep+gen+3ms', root: 'ج م ل', gloss: 'for his beauty' },
          ],
        },
        {
          id: 'qs-v2-c08-015',
          ar: 'وَإِذَا رَآهُ أَحَدٌ قَالَ:',
          en: 'and whenever anyone saw him he would say:',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and when, whenever' },
            { surface: 'رَآهُ', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms+3ms', root: 'ر أ ي', gloss: 'to see; saw him' },
            { surface: 'أَحَدٌ', lemma: 'أَحَد', pos: 'noun', features: 'indef.nom', root: 'أ ح د', gloss: 'someone' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v2-c08-016',
          ar: '﴿مَا هَذَا',
          en: "'This is not",
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
          ],
        },
        {
          id: 'qs-v2-c08-017',
          ar: 'بَشَرًا إِنْ',
          en: 'a human being -- this is nothing',
          tokens: [
            { surface: 'بَشَرًا', lemma: 'بَشَر', pos: 'noun', features: 'indef.acc', gloss: 'a human being' },
            { surface: 'إِنْ', lemma: 'إِنْ', pos: 'part', features: 'neg', gloss: 'not (nothing ... but)' },
          ],
        },
        {
          id: 'qs-v2-c08-018',
          ar: 'هَذَا إِلَّا',
          en: 'but',
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, only' },
          ],
        },
        {
          id: 'qs-v2-c08-019',
          ar: 'مَلَكٌ كَرِيمٌ﴾.',
          en: "a noble angel.'",
          tokens: [
            { surface: 'مَلَكٌ', lemma: 'مَلَك', pos: 'noun', features: 'indef.nom', root: 'م ل ك', gloss: 'an angel' },
            { surface: 'كَرِيمٌ', lemma: 'كَرِيم', pos: 'adj', features: 'indef.nom', root: 'ك ر م', gloss: 'noble, generous' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ عَرَفَ النَّاسُ فِي مِصْرَ يُوسُفَ؟',
          options: ['بِجَمَالِهِ', 'بِثَرْوَتِهِ', 'بِقُوَّتِهِ'],
          answer: 0,
          qEn: 'How did the people of Egypt come to know Yūsuf?',
          optionsEn: ['By his beauty', 'By his wealth', 'By his strength'],
        },
      ],
    },
    {
      lines: true,
      en: 'The woman\'s anger intensified, and she said to Yūsuf: \'Then you shall go to prison!\' Yūsuf said: \'Prison is dearer to me.\' After some days, al-ʿAzīz decided to send Yūsuf to prison -- though al-ʿAzīz knew Yūsuf was innocent. And Yūsuf entered the prison.',
      sentences: [
        {
          id: 'qs-v2-c08-020',
          ar: 'وَاشْتَدَّ غَضَبُ الْمَرْأَةِ',
          en: "The woman's anger intensified,",
          tokens: [
            { surface: 'وَاشْتَدَّ', lemma: 'اِشْتَدَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'ش د د', gloss: 'to intensify; and intensified' },
            { surface: 'غَضَبُ', lemma: 'غَضَب', pos: 'noun', features: 'nom.constr', root: 'غ ض ب', gloss: 'anger of' },
            { surface: 'الْمَرْأَةِ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'def.gen', root: 'م ر أ', gloss: 'the woman' },
          ],
        },
        {
          id: 'qs-v2-c08-021',
          ar: 'وَقَالَتْ لِيُوسُفَ:',
          en: 'and she said to Yūsuf:',
          tokens: [
            { surface: 'وَقَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'لِيُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'prep+gen', gloss: 'to Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c08-022',
          ar: 'إِذَنْ تَذْهَبُ إِلَى السِّجْنِ!',
          en: "'Then you shall go to prison!'",
          tokens: [
            { surface: 'إِذَنْ', lemma: 'إِذَنْ', pos: 'part', features: 'part', gloss: 'then, in that case' },
            { surface: 'تَذْهَبُ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.2ms', root: 'ذ ه ب', gloss: 'to go; you will go' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
          ],
        },
        {
          id: 'qs-v2-c08-023',
          ar: 'قَالَ يُوسُفُ:',
          en: 'Yūsuf said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c08-024',
          ar: '﴿السِّجْنُ أَحَبُّ',
          en: "'Prison is dearer",
          tokens: [
            { surface: 'السِّجْنُ', lemma: 'سِجْن', pos: 'noun', features: 'def.nom', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'أَحَبُّ', lemma: 'أَحَبّ', pos: 'adj', features: 'indef.nom', root: 'ح ب ب', gloss: 'dearer, more beloved' },
          ],
        },
        {
          id: 'qs-v2-c08-025',
          ar: 'إِلَيَّ﴾.',
          en: "to me.'",
          tokens: [
            { surface: 'إِلَيَّ', lemma: 'إِلَى', pos: 'prep', features: 'prep+1s', gloss: 'to me' },
          ],
        },
        {
          id: 'qs-v2-c08-026',
          ar: 'وَبَعْدَ أَيَّامٍ رَأَى الْعَزِيزُ أَنْ يُرْسِلَ يُوسُفَ إِلَى السِّجْنِ.',
          en: 'After some days, al-ʿAzīz decided to send Yūsuf to prison --',
          tokens: [
            { surface: 'وَبَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'conj+prep', gloss: 'and after' },
            { surface: 'أَيَّامٍ', lemma: 'يَوْم', pos: 'noun', features: 'pl.indef.gen', gloss: 'days' },
            { surface: 'رَأَى', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms', root: 'ر أ ي', gloss: 'to see; saw fit, decided' },
            { surface: 'الْعَزِيزُ', lemma: 'الْعَزِيز', pos: 'proper', features: 'nom', root: 'ع ز ز', gloss: 'al-ʿAzīz' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that, to' },
            { surface: 'يُرْسِلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'impf.3ms', root: 'ر س ل', gloss: 'to send; would send' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
          ],
        },
        {
          id: 'qs-v2-c08-027',
          ar: 'وَكَانَ الْعَزِيزُ يَعْرِفُ أَنَّ يُوسُفَ بَرِيءٌ.',
          en: 'though al-ʿAzīz knew Yūsuf was innocent.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'الْعَزِيزُ', lemma: 'الْعَزِيز', pos: 'proper', features: 'nom', root: 'ع ز ز', gloss: 'al-ʿAzīz' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', root: 'ع ر ف', gloss: 'to know; knows' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'بَرِيءٌ', lemma: 'بَرِيء', pos: 'adj', features: 'indef.nom', root: 'ب ر أ', gloss: 'innocent' },
          ],
        },
        {
          id: 'qs-v2-c08-028',
          ar: 'وَدَخَلَ يُوسُفُ السِّجْنَ.',
          en: 'And Yūsuf entered the prison.',
          tokens: [
            { surface: 'وَدَخَلَ', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'د خ ل', gloss: 'to enter; and entered' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'السِّجْنَ', lemma: 'سِجْن', pos: 'noun', features: 'def.acc', root: 'س ج ن', gloss: 'the prison' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ يُوسُفُ عِنْدَمَا هَدَّدَتْهُ الْمَرْأَةُ بِالسِّجْنِ؟',
          options: ['السِّجْنُ أَحَبُّ إِلَيَّ', 'أَرْجُوكِ لَا تَفْعَلِي', 'سَأَذْهَبُ إِلَى أَبِي'],
          answer: 0,
          qEn: 'What did Yūsuf say when the woman threatened him with prison?',
          optionsEn: ['Prison is dearer to me', "Please don't do that", 'I will go to my father'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَعَرَفَ الْعَزِيزُ أَنَّ الْمَرْأَةَ',
        post: '.',
        en: 'Al-ʿAzīz knew the woman was lying.',
        options: ['كَاذِبَةٌ', 'كَاذِبَةً', 'كَاذِبٌ', 'كَاذِبِينَ'],
        answer: 0,
        rationales: [
          "Nominative, feminine -- أَنَّ puts its subject (الْمَرْأَةَ) in the accusative but keeps its own predicate nominative, agreeing with the feminine subject.",
          "Accusative, feminine -- wrong case; أَنَّ's predicate stays nominative.",
          'Masculine -- wrong gender; الْمَرْأَةَ (the woman) is feminine.',
          'Plural -- wrong number; الْمَرْأَةَ is singular.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَعَرَفَ أَنَّ يُوسُفَ',
        post: '.',
        en: 'and knew Yūsuf was trustworthy.',
        options: ['أَمِينٌ', 'أَمِينًا', 'أَمِينَةٌ', 'أُمَنَاءُ'],
        answer: 0,
        rationales: [
          "Nominative, masculine -- أَنَّ's predicate, agreeing with the masculine subject يُوسُفَ.",
          "Accusative -- wrong case; أَنَّ's predicate stays nominative.",
          'Feminine -- wrong gender; يُوسُفَ is masculine.',
          'Plural -- wrong number; the subject is a single person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ الْعَزِيزُ يَعْرِفُ أَنَّ يُوسُفَ',
        post: '.',
        en: 'And al-ʿAzīz knew that Yūsuf was innocent.',
        options: ['بَرِيءٌ', 'بَرِيئًا', 'بَرِيئَةٌ', 'أَبْرِيَاءُ'],
        answer: 0,
        rationales: [
          "Nominative, masculine -- أَنَّ's predicate, agreeing with the masculine subject يُوسُفَ.",
          "Accusative -- wrong case; أَنَّ's predicate stays nominative.",
          'Feminine -- wrong gender; يُوسُفَ is masculine.',
          'Plural -- wrong number; the subject is a single person.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'لَا أَخُونُ سَيِّدِي',
        pre: 'لَا',
        post: 'سَيِّدِي',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَخُونُ', 'أَخُونُ', 'يَخُونُ', 'نَخُونُ'],
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
        base: 'لَا أَخُونُ سَيِّدِي',
        pre: 'لَا',
        post: 'سَيِّدِي',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يَخُونُ', 'أَخُونُ', 'تَخُونُ', 'نَخُونُ'],
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
        base: 'لَا أَخُونُ سَيِّدِي',
        pre: 'لَا',
        post: 'سَيِّدِي',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَخُونُ', 'أَخُونُ', 'تَخُونُ', 'يَخُونُ'],
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

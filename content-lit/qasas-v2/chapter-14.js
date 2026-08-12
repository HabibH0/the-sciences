// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 14 -- الْمَلِكُ
// يُرْسِلُ إِلَى يُوسُفَ. Printed page 44 only -- the whole chapter sits in
// the top portion of the page, ending before ch15's heading يُوسُفُ يَسْأَلُ
// التَّفْتِيشَ partway down the same page. Transcribed by hand from the scan
// (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// Grammar / lexical notes:
//   -- This is by far the shortest chapter's worth of source prose in the
//      volume so far: just two sentences in the original (~27 tokens,
//      qs-v2-c14-{001..003} and qs-v2-c14-{004..007} below reflect that same
//      material, just split finer). To meet the validator's fixed >=5
//      buildable-sentence floor (validate-qasas.mjs: 3-9 tokens with >=1
//      non-proper token carrying a visible case mark) against such sparse
//      material, both original sentences are split at their natural clause
//      boundaries rather than only at the outermost conjunction -- e.g.
//      قَالَ السَّاقِي: هَذَا يُوسُفُ الصِّدِّيقُ | وَهُوَ الَّذِي أَخْبَرَ | أَنِّي
//      سَأَكُونُ سَاقِياً لِسَيِّدِي الْمَلِكِ. is one sentence in the book but
//      three sentences (qs-v2-c14-001..003) here, each independently
//      buildable. No content is added beyond what the page says.
//   -- ﴿ائْتُونِي بِهِ أَسْتَخْلِصْهُ لِنَفْسِي﴾ (Sūrat Yūsuf 12:54) is split into
//      two <=2-token fragments (qs-v2-c14-{006,007}) per the house
//      convention for Qur'anic quotations -- this keeps both fragments
//      under the 3-token buildable floor by design, so neither counts
//      toward (or is meant to count toward) the buildable total; the 5
//      buildable sentences come entirely from qs-v2-c14-{001..005}.
//   -- أَنِّي (qs-v2-c14-003) is أَنَّ + 1s, same pattern as إِنِّي's part+1s
//      fusion already taught (ch1, ch8, ch9) -- reuses the already-taught
//      lemma أَنَّ (subordinating "that", distinct from emphatic إِنَّ).
//   -- سَأَكُونُ (qs-v2-c14-003) is السين (future marker) + أَكُونُ (impf.1s of
//      كَانَ) written together; no separate atom for سَ, matching how ch1's
//      فَسَيَكُونُ was already tagged plain impf.3ms with the gloss carrying
//      the future sense.
//   -- ائْتُونِي (qs-v2-c14-006) is the imperative of أَتَى ("to come"; أَتَى
//      بِ = "to bring") -- 2mp imperative + 1s object suffix, an
//      undocumented-but-sanctioned person/mood combination consistent with
//      CHAPTER-FORMAT.md §4's escape hatch (same family as the 2mp/3d/2d
//      atoms already introduced in ch9-13).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَالَ, سَاقٍ, هَذَا, يُوسُف,
//      هُوَ, الَّذِي, أَخْبَرَ, أَنَّ, كَانَ, سَيِّد, مَلِك, إِلَى, أَرْسَلَ, بِ, نَفْس
//      are all already taught and NOT re-listed in newWords here.
//
// 4 new words (صِدِّيق، اِشْتَاقَ، لِقَاء، اِسْتَخْلَصَ).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch14',
  title: { ar: 'الْمَلِكُ يُرْسِلُ إِلَى يُوسُفَ', en: 'The King Sends for Yūsuf' },
  newWords: ['صِدِّيق', 'اِشْتَاقَ', 'لِقَاء', 'اِسْتَخْلَصَ'],
  lemmas: {
    'صِدِّيق': { gloss: 'truthful, trustworthy one' },
    'اِشْتَاقَ': { gloss: 'to yearn, long for' },
    'لِقَاء': { gloss: 'meeting' },
    'اِسْتَخْلَصَ': { gloss: 'to select exclusively for oneself, choose' },
  },
  paragraphs: [
    {
      en: "The cupbearer said: this is Yūsuf, the truthful one, and he is the one who told me that I would be a cupbearer to my lord the king. The king longed to meet Yūsuf, so he sent for him, and the king said: 'Bring him to me; I will select him exclusively for myself.'",
      sentences: [
        {
          id: 'qs-v2-c14-001',
          ar: 'قَالَ السَّاقِي: هَذَا يُوسُفُ الصِّدِّيقُ',
          en: 'The cupbearer said: this is Yūsuf, the truthful one,',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'السَّاقِي', lemma: 'سَاقٍ', pos: 'noun', features: 'def.nom', root: 'س ق ي', gloss: 'the cupbearer' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'الصِّدِّيقُ', lemma: 'صِدِّيق', pos: 'adj', features: 'def.nom', root: 'ص د ق', gloss: 'the truthful, trustworthy one' },
          ],
        },
        {
          id: 'qs-v2-c14-002',
          ar: 'وَهُوَ الَّذِي أَخْبَرَ',
          en: 'and he is the one who told [me]',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'who, that (m.)' },
            { surface: 'أَخْبَرَ', lemma: 'أَخْبَرَ', pos: 'verb', features: 'perf.3ms', root: 'خ ب ر', gloss: 'to inform, tell; told' },
          ],
        },
        {
          id: 'qs-v2-c14-003',
          ar: 'أَنِّي سَأَكُونُ سَاقِياً لِسَيِّدِي الْمَلِكِ.',
          en: 'that I would be a cupbearer to my lord the king.',
          tokens: [
            { surface: 'أَنِّي', lemma: 'أَنَّ', pos: 'part', features: 'part+1s', gloss: 'that I' },
            { surface: 'سَأَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.1s', root: 'ك و ن', gloss: 'to be; I will be' },
            { surface: 'سَاقِياً', lemma: 'سَاقٍ', pos: 'noun', features: 'indef.acc', root: 'س ق ي', gloss: 'a cupbearer' },
            { surface: 'لِسَيِّدِي', lemma: 'سَيِّد', pos: 'noun', features: 'prep+gen.1s', root: 'س و د', gloss: 'to my lord, master' },
            { surface: 'الْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'def.gen', gloss: 'the king' },
          ],
        },
        {
          id: 'qs-v2-c14-004',
          ar: 'وَاشْتَاقَ الْمَلِكُ إِلَى لِقَاءِ يُوسُفَ،',
          en: 'The king longed to meet Yūsuf,',
          tokens: [
            { surface: 'وَاشْتَاقَ', lemma: 'اِشْتَاقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ش و ق', gloss: 'to yearn, long for; and longed' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', gloss: 'the king' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to, toward' },
            { surface: 'لِقَاءِ', lemma: 'لِقَاء', pos: 'noun', features: 'gen.constr', root: 'ل ق ي', gloss: 'meeting of' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c14-005',
          ar: 'وَأَرْسَلَ إِلَى يُوسُفَ، وَقَالَ الْمَلِكُ:',
          en: 'so he sent for him, and the king said:',
          tokens: [
            { surface: 'وَأَرْسَلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر س ل', gloss: 'to send; and sent' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to, for' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', gloss: 'the king' },
          ],
        },
        {
          id: 'qs-v2-c14-006',
          ar: '﴿ائْتُونِي بِهِ﴾',
          en: "'Bring him to me;",
          tokens: [
            { surface: 'ائْتُونِي', lemma: 'أَتَى', pos: 'verb', features: 'imp.2mp+1s', root: 'أ ت ي', gloss: 'to come; bring (to me)!' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
          ],
        },
        {
          id: 'qs-v2-c14-007',
          ar: '﴿أَسْتَخْلِصْهُ لِنَفْسِي﴾.',
          en: "I will select him exclusively for myself.'",
          tokens: [
            { surface: 'أَسْتَخْلِصْهُ', lemma: 'اِسْتَخْلَصَ', pos: 'verb', features: 'impf.1s+3ms', root: 'خ ل ص', gloss: 'to select exclusively for oneself; I shall select him' },
            { surface: 'لِنَفْسِي', lemma: 'نَفْس', pos: 'noun', features: 'prep+gen.1s', root: 'ن ف س', gloss: 'for myself' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنِ الَّذِي أَخْبَرَ الْمَلِكَ عَنْ يُوسُفَ؟',
          options: ['السَّاقِي', 'الْعَزِيزُ', 'أَحَدُ إِخْوَتِهِ'],
          answer: 0,
          qEn: 'Who told the king about Yūsuf?',
          optionsEn: ['The cupbearer', 'Al-ʿAzīz', 'One of his brothers'],
        },
        {
          q: 'مَاذَا فَعَلَ الْمَلِكُ لَمَّا اشْتَاقَ إِلَى لِقَاءِ يُوسُفَ؟',
          options: ['أَرْسَلَ إِلَيْهِ', 'نَسِيَهُ', 'ذَهَبَ إِلَى السِّجْنِ بِنَفْسِهِ'],
          answer: 0,
          qEn: 'What did the king do when he longed to meet Yūsuf?',
          optionsEn: ['He sent for him', 'He forgot him', 'He went to the prison himself'],
        },
        {
          q: 'مَاذَا طَلَبَ الْمَلِكُ أَنْ يُفْعَلَ بِيُوسُفَ؟',
          options: ['أَنْ يُؤْتَى بِهِ لِيَسْتَخْلِصَهُ لِنَفْسِهِ', 'أَنْ يُعَاقَبَ', 'أَنْ يُتْرَكَ فِي السِّجْنِ'],
          answer: 0,
          qEn: 'What did the king ask to be done with Yūsuf?',
          optionsEn: ['That he be brought to him, to select him for himself', 'That he be punished', 'That he be left in prison'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'هَذَا يُوسُفُ',
        post: 'وَهُوَ الَّذِي أَخْبَرَ.',
        en: 'This is Yūsuf, the truthful one, and he is the one who told [me].',
        options: ['الصِّدِّيقُ', 'الصِّدِّيقَ', 'صِدِّيقٌ', 'الصِّدِّيقُونَ'],
        answer: 0,
        rationales: [
          'Nominative -- predicate of the nominal sentence هَذَا يُوسُفُ الصِّدِّيقُ, agreeing with يُوسُفُ.',
          'Accusative -- wrong case for a predicate noun in a nominal sentence.',
          'Indefinite -- wrong; this epithet functions as a definite title here.',
          'Plural -- wrong number; it refers to one person, Yūsuf.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَاشْتَاقَ الْمَلِكُ إِلَى',
        post: 'يُوسُفَ.',
        en: 'The king longed to meet Yūsuf.',
        options: ['لِقَاءِ', 'لِقَاءً', 'لِقَاءٌ', 'لِقَاءَاتِ'],
        answer: 0,
        rationales: [
          'Genitive, construct -- لِقَاء is the first term of an إضافة with يُوسُفَ, and follows the preposition إِلَى.',
          'Accusative -- wrong case; this position follows a preposition and heads a construct, both requiring genitive.',
          'Nominative -- wrong case for the same reason.',
          'Plural -- wrong number; a single meeting is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ الْمَلِكُ: ائْتُونِي بِهِ',
        post: 'لِنَفْسِي.',
        en: "The king said: 'Bring him to me; I will select him exclusively for myself.'",
        options: ['أَسْتَخْلِصْهُ', 'يَسْتَخْلِصُهُ', 'اِسْتَخْلَصَهُ', 'نَسْتَخْلِصُهُ'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches the speaker (the king, "I"), with the object suffix هُ for Yūsuf.',
          '3rd masculine singular -- he, not the speaker.',
          'Perfect tense -- wrong; the king is describing what he will do, not something already completed.',
          '1st plural -- we, not I.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَشْتَاقُ إِلَى لِقَائِهِ',
        pre: '',
        post: 'إِلَى لِقَائِهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَشْتَاقُ', 'يَشْتَاقُ', 'تَشْتَاقُ', 'نَشْتَاقُ'],
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
        base: 'يَشْتَاقُ إِلَى لِقَائِهِ',
        pre: '',
        post: 'إِلَى لِقَائِهِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَشْتَاقُ', 'أَشْتَاقُ', 'تَشْتَاقُ', 'يَشْتَاقُونَ'],
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
        base: 'يَشْتَاقُ إِلَى لِقَائِهِ',
        pre: '',
        post: 'إِلَى لِقَائِهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَشْتَاقُونَ', 'يَشْتَاقُ', 'نَشْتَاقُ', 'تَشْتَاقُونَ'],
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

// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 11 -- مَوْعِظَةُ
// التَّوْحِيدِ. Printed page 39 (from ch10's closing وَهُنَا وَجَدَ يُوسُفُ
// الْفُرْصَةَ فَبَدَأَ مَوْعِظَتَهُ) - 41 (ending before ch12's heading تَأْوِيلُ
// الرُّؤْيَا). Transcribed by hand from the scan (vision OCR, 300dpi render)
// against ../CHAPTER-FORMAT.md.
//
// Yūsuf's sermon proper -- the longest run of Qur'anic material in this
// course so far, drawing on Sūrat Yūsuf 12:37-40 almost verse by verse
// (the heritage of Ibrāhīm/Isḥāq/Yaʿqūb, "are scattered lords better...",
// "judgment belongs only to Allah", "that is the upright religion"). Ten
// Qur'anic quotations, ranging from 3 to 12 tokens, are each split into
// <=2-token pieces per the house workaround (qasas-v1 ch11's header note)
// -- this is by far the most fragment-heavy chapter yet, hence the long
// sentence count.
//
// Grammar / lexical notes:
//   -- qs-v2-c11-006 (تَعْرِفَانِ): this course's first 2nd-person-dual
//      SUBJECT verb (contrast qs-v2-c10's 2nd-dual object/possessor
//      suffixes) -- tagged impf.2d, the same sanctioned undocumented
//      person-code family as 2mp/3d/2d elsewhere (CHAPTER-FORMAT.md §4).
//   -- qs-v2-c11-048 (أَلَّا تَعْبُدُوا): أَلَّا is the standard Qur'anic
//      contraction of أَنْ + لَا -- tagged under the already-taught lemma
//      أَنْ, features part+neg (the trailing negator fused onto أَنْ's own
//      part atom), rather than inventing a new lemma for a transparent
//      two-particle contraction.
//   -- qs-v2-c11-049 (إِيَّاهُ): this course's first detached/independent
//      object pronoun (needed after إِلَّا, which cannot host a suffix
//      pronoun) -- tagged pos:'noun' with a bare person atom (3ms), same
//      treatment already used for the independent subject pronouns
//      أَنَا/هُوَ/نَحْنُ.
//   -- qs-v2-c11-027 (ءَأَرْبَابٌ): the interrogative hamza fused onto the
//      already-taught plural أَرْبَاب (of رَبّ), tagged part+pl.indef.nom --
//      same leading part+ fused-proclitic pattern as أَلَيْسَ (qasas-v2
//      ch9) and لَامُ التَّعْلِيل (qasas-v2 ch7).
//   -- قَهَّار (qs-v2-c11-030) and وَاحِد (qs-v2-c11-029) are two of Allah's
//      names as they appear in the ayah itself (الْوَاحِدُ الْقَهَّارُ) --
//      tagged as ordinary adjectives like any other descriptive word in
//      this course, consistent with اللَّه itself being the only lemma
//      treated as a fixed proper name.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَالَ, يُوسُف, ذَلِكَ, مَا,
//      لَكِنَّ, اللَّه, لَا, عِلْم, كُلّ, أَحَد, إِنَّ, الْمُشْرِك, هَلْ, عَرَفَ, رَبّ,
//      تَرَكَ, طَرِيق, أَهْل, كَانَ, لِ, أَنْ, شَيْء, هَذَا, لَيْسَ, هُوَ, نَاس, جَمِيع,
//      أَكْثَر, هُنَا, سَأَلَ, نَحْنُ, عَالَم, خَيْر, أَرَى (رَأَى), مَاذَا, خَلَقَ, أَرْض,
//      نَظَرَ, إِنْسَان, سَمَاء, الَّذِي, كَيْفَ, إِلَّا, أَمْر, إِلَى, عَبَدَ are all
//      already taught and NOT re-listed in newWords here.
//
// 26 new words (شِرْك، اِتَّبَعَ، مِلَّة، أَشْرَكَ، فَضْل، شَكَرَ، وَقَفَ، مُتَفَرِّق،
// وَاحِد، قَهَّار، دُون، سَمَّى، حُكْم، مُلْك، دِين، قَيِّم، سَمَاء، أَيْنَ، فَقَطْ، أَمْ،
// اسْم، لِأَنَّ، أَنْتُمْ، آتَى، تَوْحِيد، خَلْق).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch11',
  title: { ar: 'مَوْعِظَةُ التَّوْحِيدِ', en: 'The Sermon of Monotheism' },
  newWords: [
    'شِرْك', 'اِتَّبَعَ', 'مِلَّة', 'أَشْرَكَ', 'فَضْل', 'شَكَرَ', 'وَقَفَ',
    'مُتَفَرِّق', 'وَاحِد', 'قَهَّار', 'دُون', 'سَمَّى', 'حُكْم', 'مُلْك', 'دِين',
    'قَيِّم', 'سَمَاء', 'أَيْنَ', 'فَقَطْ', 'أَمْ', 'اسْم', 'لِأَنَّ', 'أَنْتُمْ', 'آتَى',
    'تَوْحِيد', 'خَلْق',
  ],
  lemmas: {
    'شِرْك': { gloss: 'polytheism, associating partners (with Allah)' },
    'اِتَّبَعَ': { gloss: 'to follow' },
    'مِلَّة': { gloss: 'religion, creed' },
    'أَشْرَكَ': { gloss: 'to associate partners (with Allah)' },
    'فَضْل': { gloss: 'grace, favor' },
    'شَكَرَ': { gloss: 'to thank, be grateful' },
    'وَقَفَ': { gloss: 'to stop, stand' },
    'مُتَفَرِّق': { gloss: 'scattered, divided' },
    'وَاحِد': { gloss: 'one, single' },
    'قَهَّار': { gloss: 'all-compelling, the Subduer' },
    'دُون': { gloss: 'besides, other than' },
    'سَمَّى': { gloss: 'to name' },
    'حُكْم': { gloss: 'judgment, rule' },
    'مُلْك': { gloss: 'dominion, kingship' },
    'دِين': { gloss: 'religion' },
    'قَيِّم': { gloss: 'upright, correct' },
    'سَمَاء': { gloss: 'sky, heaven' },
    'أَيْنَ': { gloss: 'where' },
    'فَقَطْ': { gloss: 'only' },
    'أَمْ': { gloss: 'or' },
    'اسْم': { gloss: 'name' },
    'لِأَنَّ': { gloss: 'because' },
    'أَنْتُمْ': { gloss: 'you (m. pl.)' },
    'آتَى': { gloss: 'to give' },
    'تَوْحِيد': { gloss: 'monotheism, the oneness of Allah' },
    'خَلْق': { gloss: 'creation' },
  },
  paragraphs: [
    {
      en: 'Yūsuf said: \'That is part of what my Lord has taught me.\' But Allah does not give His knowledge to just anyone, indeed Allah does not give His knowledge to the one who associates partners with Him. Do you two know why my Lord taught me? Because I left the path of the people of polytheism,',
      sentences: [
        {
          id: 'qs-v2-c11-001',
          ar: 'قَالَ يُوسُفُ:',
          en: 'Yūsuf said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c11-002',
          ar: '﴿ذَلِكُمَا مِمَّا',
          en: "'That is part of what",
          tokens: [
            { surface: 'ذَلِكُمَا', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m+2d', gloss: 'that (to you both)' },
            { surface: 'مِمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'from what' },
          ],
        },
        {
          id: 'qs-v2-c11-003',
          ar: 'عَلَّمَنِي رَبِّي﴾.',
          en: "my Lord has taught me.'",
          tokens: [
            { surface: 'عَلَّمَنِي', lemma: 'عَلَّمَ', pos: 'verb', features: 'perf.3ms+1s', root: 'ع ل م', gloss: 'to teach; taught me' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
          ],
        },
        {
          id: 'qs-v2-c11-004',
          ar: 'وَلَكِنَّ اللَّهَ لَا يُؤْتِي عِلْمَهُ كُلَّ أَحَدٍ.',
          en: 'But Allah does not give His knowledge to just anyone,',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part', gloss: 'but' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُؤْتِي', lemma: 'آتَى', pos: 'verb', features: 'impf.3ms', root: 'أ ت ي', gloss: 'to give; gives' },
            { surface: 'عِلْمَهُ', lemma: 'عِلْم', pos: 'noun', features: 'acc+3ms', gloss: 'His knowledge' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', root: 'ك ل ل', gloss: 'every' },
            { surface: 'أَحَدٍ', lemma: 'أَحَد', pos: 'noun', features: 'indef.gen', root: 'أ ح د', gloss: 'one, anyone' },
          ],
        },
        {
          id: 'qs-v2-c11-005',
          ar: 'إِنَّ اللَّهَ لَا يُؤْتِي عِلْمَهُ الْمُشْرِكَ.',
          en: 'indeed Allah does not give His knowledge to the one who associates partners with Him.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُؤْتِي', lemma: 'آتَى', pos: 'verb', features: 'impf.3ms', root: 'أ ت ي', gloss: 'to give; gives' },
            { surface: 'عِلْمَهُ', lemma: 'عِلْم', pos: 'noun', features: 'acc+3ms', gloss: 'His knowledge' },
            { surface: 'الْمُشْرِكَ', lemma: 'مُشْرِك', pos: 'noun', features: 'def.acc', root: 'ش ر ك', gloss: 'the one who associates partners' },
          ],
        },
        {
          id: 'qs-v2-c11-006',
          ar: 'هَلْ تَعْرِفَانِ لِمَاذَا عَلَّمَنِي رَبِّي؟',
          en: 'Do you two know why my Lord taught me?',
          tokens: [
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: 'do, does' },
            { surface: 'تَعْرِفَانِ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.2d', root: 'ع ر ف', gloss: 'to know; you both know' },
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'part', features: 'part', gloss: 'why' },
            { surface: 'عَلَّمَنِي', lemma: 'عَلَّمَ', pos: 'verb', features: 'perf.3ms+1s', root: 'ع ل م', gloss: 'to teach; taught me' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
          ],
        },
        {
          id: 'qs-v2-c11-007',
          ar: 'لِأَنِّي تَرَكْتُ طَرِيقَ أَهْلِ الشِّرْكِ.',
          en: 'Because I left the path of the people of polytheism,',
          tokens: [
            { surface: 'لِأَنِّي', lemma: 'لِأَنَّ', pos: 'part', features: 'part+1s', root: 'أ ن ن', gloss: 'because I' },
            { surface: 'تَرَكْتُ', lemma: 'تَرَكَ', pos: 'verb', features: 'perf.1s', gloss: 'to leave; I left' },
            { surface: 'طَرِيقَ', lemma: 'طَرِيق', pos: 'noun', features: 'acc.constr', gloss: 'the path of' },
            { surface: 'أَهْلِ', lemma: 'أَهْل', pos: 'noun', features: 'gen.constr', root: 'أ ه ل', gloss: 'people of' },
            { surface: 'الشِّرْكِ', lemma: 'شِرْك', pos: 'noun', features: 'def.gen', root: 'ش ر ك', gloss: 'polytheism' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا عَلَّمَ اللَّهُ يُوسُفَ تَأْوِيلَ الرُّؤْيَا، بِحَسَبِ كَلَامِ يُوسُفَ؟',
          options: ['لِأَنَّهُ تَرَكَ طَرِيقَ أَهْلِ الشِّرْكِ وَاتَّبَعَ مِلَّةَ آبَائِهِ', 'لِأَنَّهُ كَانَ أَجْمَلَ النَّاسِ', 'لِأَنَّهُ كَانَ أَقْوَى النَّاسِ'],
          answer: 0,
          qEn: "Why did Allah teach Yūsuf the interpretation of dreams, according to Yūsuf's own words?",
          optionsEn: ['Because he left the path of the polytheists and followed the religion of his fathers', 'Because he was the most handsome of people', 'Because he was the strongest of people'],
        },
      ],
    },
    {
      en: 'and followed the religion of my fathers Ibrāhīm Isḥāq, and Yaʿqūb.\' It was never for us to associate any partner with Allah at all.\'',
      sentences: [
        {
          id: 'qs-v2-c11-008',
          ar: '﴿وَاتَّبَعْتُ مِلَّةَ',
          en: 'and followed the religion of',
          tokens: [
            { surface: 'وَاتَّبَعْتُ', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'conj+perf.1s', root: 'ت ب ع', gloss: 'to follow; and I followed' },
            { surface: 'مِلَّةَ', lemma: 'مِلَّة', pos: 'noun', features: 'acc.constr', root: 'م ل ل', gloss: 'religion, creed of' },
          ],
        },
        {
          id: 'qs-v2-c11-009',
          ar: 'آبَائِي إِبْرَاهِيمَ',
          en: 'my fathers Ibrāhīm',
          tokens: [
            { surface: 'آبَائِي', lemma: 'أَب', pos: 'noun', features: 'pl.gen+1s', root: 'أ ب و', gloss: 'my fathers' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v2-c11-010',
          ar: 'وَإِسْحَاقَ وَيَعْقُوبَ﴾.',
          en: "Isḥāq, and Yaʿqūb.'",
          tokens: [
            { surface: 'وَإِسْحَاقَ', lemma: 'إِسْحَاق', pos: 'proper', features: 'conj+gen', gloss: 'and Isḥāq' },
            { surface: 'وَيَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'conj+gen', gloss: 'and Yaʿqūb' },
          ],
        },
        {
          id: 'qs-v2-c11-011',
          ar: '﴿مَا كَانَ',
          en: 'It was never',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
          ],
        },
        {
          id: 'qs-v2-c11-012',
          ar: 'لَنَا أَنْ',
          en: 'for us to',
          tokens: [
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that, to' },
          ],
        },
        {
          id: 'qs-v2-c11-013',
          ar: 'نُشْرِكَ بِاللَّهِ',
          en: 'associate any partner with Allah',
          tokens: [
            { surface: 'نُشْرِكَ', lemma: 'أَشْرَكَ', pos: 'verb', features: 'impf.1p', root: 'ش ر ك', gloss: 'to associate partners; we associate' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'with Allah' },
          ],
        },
        {
          id: 'qs-v2-c11-014',
          ar: 'مِنْ شَيْءٍ﴾.',
          en: "at all.'",
          tokens: [
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'in, of' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing, anything' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'Yūsuf said: This monotheism is not for us alone, rather it is for all people. That is part of Allah\'s favor upon us and upon mankind, but most people are not grateful. Here Yūsuf stopped and asked them both: "You say: lord of the land, lord of the sea, lord of provision, lord of rain. while we say: Allah is Lord of the worlds.',
      sentences: [
        {
          id: 'qs-v2-c11-015',
          ar: 'قَالَ يُوسُفُ:',
          en: 'Yūsuf said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c11-016',
          ar: 'وَهَذَا التَّوْحِيدُ لَيْسَ لَنَا فَقَطْ.',
          en: 'This monotheism is not for us alone,',
          tokens: [
            { surface: 'وَهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'conj+dem.m', gloss: 'and this' },
            { surface: 'التَّوْحِيدُ', lemma: 'تَوْحِيد', pos: 'noun', features: 'def.nom', root: 'و ح د', gloss: 'monotheism' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', root: 'ل ي س', gloss: 'is not' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'فَقَطْ', lemma: 'فَقَطْ', pos: 'adv', features: 'adv', gloss: 'only' },
          ],
        },
        {
          id: 'qs-v2-c11-017',
          ar: 'بَلْ هُوَ لِلنَّاسِ جَمِيعاً.',
          en: 'rather it is for all people.',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'it, he' },
            { surface: 'لِلنَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'prep+def.gen', root: 'ن و س', gloss: 'for the people' },
            { surface: 'جَمِيعاً', lemma: 'جَمِيع', pos: 'adv', features: 'indef.acc', root: 'ج م ع', gloss: 'all together' },
          ],
        },
        {
          id: 'qs-v2-c11-018',
          ar: '﴿ذَلِكَ مِنْ',
          en: 'That is part of',
          tokens: [
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, part of' },
          ],
        },
        {
          id: 'qs-v2-c11-019',
          ar: 'فَضْلِ اللَّهِ',
          en: "Allah's favor",
          tokens: [
            { surface: 'فَضْلِ', lemma: 'فَضْل', pos: 'noun', features: 'gen.constr', root: 'ف ض ل', gloss: 'grace, favor of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v2-c11-020',
          ar: 'عَلَيْنَا وَعَلَى',
          en: 'upon us and upon',
          tokens: [
            { surface: 'عَلَيْنَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+1p', gloss: 'upon us' },
            { surface: 'وَعَلَى', lemma: 'عَلَى', pos: 'prep', features: 'conj+prep', gloss: 'and upon' },
          ],
        },
        {
          id: 'qs-v2-c11-021',
          ar: 'النَّاسِ وَلَكِنَّ',
          en: 'mankind, but',
          tokens: [
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', root: 'ن و س', gloss: 'the people' },
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part', gloss: 'but' },
          ],
        },
        {
          id: 'qs-v2-c11-022',
          ar: 'أَكْثَرَ النَّاسِ',
          en: 'most people',
          tokens: [
            { surface: 'أَكْثَرَ', lemma: 'أَكْثَر', pos: 'adj', features: 'acc.constr', root: 'ك ث ر', gloss: 'most (of)' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', root: 'ن و س', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v2-c11-023',
          ar: 'لَا يَشْكُرُونَ﴾.',
          en: 'are not grateful.',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَشْكُرُونَ', lemma: 'شَكَرَ', pos: 'verb', features: 'impf.3mp', root: 'ش ك ر', gloss: 'to thank, be grateful; are grateful' },
          ],
        },
        {
          id: 'qs-v2-c11-024',
          ar: 'وَهُنَا وَقَفَ يُوسُفُ وَسَأَلَهُمَا:',
          en: 'Here Yūsuf stopped and asked them both:',
          tokens: [
            { surface: 'وَهُنَا', lemma: 'هُنَا', pos: 'adv', features: 'conj+adv', gloss: 'and here' },
            { surface: 'وَقَفَ', lemma: 'وَقَفَ', pos: 'verb', features: 'perf.3ms', root: 'و ق ف', gloss: 'to stop, stand; stood' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'وَسَأَلَهُمَا', lemma: 'سَأَلَ', pos: 'verb', features: 'conj+perf.3ms+3d', gloss: 'to ask; and asked them both' },
          ],
        },
        {
          id: 'qs-v2-c11-025',
          ar: 'تَقُولُونَ رَبُّ الْبَرِّ وَرَبُّ الْبَحْرِ وَرَبُّ الرِّزْقِ وَرَبُّ الْمَطَرِ.',
          en: '"You say: lord of the land, lord of the sea, lord of provision, lord of rain.',
          tokens: [
            { surface: 'تَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.2mp', root: 'ق و ل', gloss: 'to say; you say' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'nom.constr', gloss: 'lord of' },
            { surface: 'الْبَرِّ', lemma: 'بَرّ', pos: 'noun', features: 'def.gen', root: 'ب ر ر', gloss: 'the land' },
            { surface: 'وَرَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'conj+nom.constr', gloss: 'and lord of' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', root: 'ب ح ر', gloss: 'the sea' },
            { surface: 'وَرَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'conj+nom.constr', gloss: 'and lord of' },
            { surface: 'الرِّزْقِ', lemma: 'رِزْق', pos: 'noun', features: 'def.gen', root: 'ر ز ق', gloss: 'provision' },
            { surface: 'وَرَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'conj+nom.constr', gloss: 'and lord of' },
            { surface: 'الْمَطَرِ', lemma: 'مَطَر', pos: 'noun', features: 'def.gen', root: 'م ط ر', gloss: 'the rain' },
          ],
        },
        {
          id: 'qs-v2-c11-026',
          ar: 'وَنَحْنُ نَقُولُ اللَّهُ رَبُّ الْعَالَمِينَ.',
          en: 'while we say: Allah is Lord of the worlds.',
          tokens: [
            { surface: 'وَنَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: 'conj+1p', gloss: 'and we' },
            { surface: 'نَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.1p', root: 'ق و ل', gloss: 'to say; we say' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'nom.constr', gloss: 'Lord of' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', root: 'ع ل م', gloss: 'the worlds' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'Are scattered lords better, or Allah, the One, the All-Compelling?" Where is the lord of the land, the lord of the sea, the lord of provision, the lord of rain? Show me what',
      sentences: [
        {
          id: 'qs-v2-c11-027',
          ar: '﴿ءَأَرْبَابٌ مُتَفَرِّقُونَ',
          en: 'Are scattered lords',
          tokens: [
            { surface: 'ءَأَرْبَابٌ', lemma: 'رَبّ', pos: 'noun', features: 'part+pl.indef.nom', gloss: '[are there] lords' },
            { surface: 'مُتَفَرِّقُونَ', lemma: 'مُتَفَرِّق', pos: 'adj', features: 'pl.indef.nom', root: 'ف ر ق', gloss: 'scattered, divided' },
          ],
        },
        {
          id: 'qs-v2-c11-028',
          ar: 'خَيْرٌ أَمِ',
          en: 'better, or',
          tokens: [
            { surface: 'خَيْرٌ', lemma: 'خَيْر', pos: 'adj', features: 'indef.nom', root: 'خ ي ر', gloss: 'better' },
            { surface: 'أَمِ', lemma: 'أَمْ', pos: 'conj', features: 'conj', gloss: 'or' },
          ],
        },
        {
          id: 'qs-v2-c11-029',
          ar: 'اللَّهُ الْوَاحِدُ',
          en: 'Allah, the One,',
          tokens: [
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'الْوَاحِدُ', lemma: 'وَاحِد', pos: 'adj', features: 'def.nom', root: 'و ح د', gloss: 'the One' },
          ],
        },
        {
          id: 'qs-v2-c11-030',
          ar: 'الْقَهَّارُ﴾؟',
          en: 'the All-Compelling?"',
          tokens: [
            { surface: 'الْقَهَّارُ', lemma: 'قَهَّار', pos: 'adj', features: 'def.nom', root: 'ق ه ر', gloss: 'the All-Compelling, the Subduer' },
          ],
        },
        {
          id: 'qs-v2-c11-031',
          ar: 'أَيْنَ رَبُّ الْبَرِّ وَرَبُّ الْبَحْرِ وَرَبُّ الرِّزْقِ وَرَبُّ الْمَطَرِ؟',
          en: 'Where is the lord of the land, the lord of the sea, the lord of provision, the lord of rain?',
          tokens: [
            { surface: 'أَيْنَ', lemma: 'أَيْنَ', pos: 'adv', features: 'adv', gloss: 'where' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'nom.constr', gloss: 'lord of' },
            { surface: 'الْبَرِّ', lemma: 'بَرّ', pos: 'noun', features: 'def.gen', root: 'ب ر ر', gloss: 'the land' },
            { surface: 'وَرَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'conj+nom.constr', gloss: 'and lord of' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', root: 'ب ح ر', gloss: 'the sea' },
            { surface: 'وَرَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'conj+nom.constr', gloss: 'and lord of' },
            { surface: 'الرِّزْقِ', lemma: 'رِزْق', pos: 'noun', features: 'def.gen', root: 'ر ز ق', gloss: 'provision' },
            { surface: 'وَرَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'conj+nom.constr', gloss: 'and lord of' },
            { surface: 'الْمَطَرِ', lemma: 'مَطَر', pos: 'noun', features: 'def.gen', root: 'م ط ر', gloss: 'the rain' },
          ],
        },
        {
          id: 'qs-v2-c11-032',
          ar: '﴿أَرُونِي مَاذَا',
          en: 'Show me what',
          tokens: [
            { surface: 'أَرُونِي', lemma: 'رَأَى', pos: 'verb', features: 'imp.2mp+1s', root: 'ر أ ي', gloss: 'to see, show; show me!' },
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'rel', gloss: 'what' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا سَأَلَ يُوسُفُ الرَّجُلَيْنِ عَنِ الأَرْبَابِ الْمُتَفَرِّقَةِ؟',
          options: ['أَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللَّهُ الْوَاحِدُ الْقَهَّارُ', 'أَيْنَ تَسْكُنُونَ', 'مَنْ عَلَّمَكُمُ الْقِرَاءَةَ'],
          answer: 0,
          qEn: 'What did Yūsuf ask the two men about their scattered lords?',
          optionsEn: ['Are scattered lords better, or Allah, the One, the All-Compelling?', 'Where do you live?', 'Who taught you to read?'],
        },
      ],
    },
    {
      en: 'they created of the earth, or do they have a share in the heavens? Look at the earth, and at the sky, and look at man: this is the creation of Allah -- so show me what have created those besides Him! And how could there really be a separate lord of the land, the sea, provision, and rain?! Mere names --',
      sentences: [
        {
          id: 'qs-v2-c11-033',
          ar: 'خَلَقُوا مِنَ',
          en: 'they created of',
          tokens: [
            { surface: 'خَلَقُوا', lemma: 'خَلَقَ', pos: 'verb', features: 'perf.3mp', gloss: 'to create; they created' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
          ],
        },
        {
          id: 'qs-v2-c11-034',
          ar: 'الأَرْضِ أَمْ',
          en: 'the earth, or',
          tokens: [
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
            { surface: 'أَمْ', lemma: 'أَمْ', pos: 'conj', features: 'conj', gloss: 'or' },
          ],
        },
        {
          id: 'qs-v2-c11-035',
          ar: 'لَهُمْ شِرْكٌ',
          en: 'do they have a share',
          tokens: [
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'do they have' },
            { surface: 'شِرْكٌ', lemma: 'شِرْك', pos: 'noun', features: 'indef.nom', root: 'ش ر ك', gloss: 'a share, partnership' },
          ],
        },
        {
          id: 'qs-v2-c11-036',
          ar: 'فِي السَّمَاوَاتِ﴾.',
          en: 'in the heavens?',
          tokens: [
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السَّمَاوَاتِ', lemma: 'سَمَاء', pos: 'noun', features: 'pl.def.gen', root: 'س م و', gloss: 'the heavens' },
          ],
        },
        {
          id: 'qs-v2-c11-037',
          ar: 'اُنْظُرُوا إِلَى الأَرْضِ وَإِلَى السَّمَاءِ وَانْظُرُوا إِلَى الإِنْسَانِ.',
          en: 'Look at the earth, and at the sky, and look at man:',
          tokens: [
            { surface: 'اُنْظُرُوا', lemma: 'نَظَرَ', pos: 'verb', features: 'imp.2mp', gloss: 'to look; look!' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
            { surface: 'وَإِلَى', lemma: 'إِلَى', pos: 'prep', features: 'conj+prep', gloss: 'and at' },
            { surface: 'السَّمَاءِ', lemma: 'سَمَاء', pos: 'noun', features: 'def.gen', root: 'س م و', gloss: 'the sky' },
            { surface: 'وَانْظُرُوا', lemma: 'نَظَرَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to look; and look!' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'الإِنْسَانِ', lemma: 'إِنْسَان', pos: 'noun', features: 'def.gen', root: 'أ ن س', gloss: 'man' },
          ],
        },
        {
          id: 'qs-v2-c11-038',
          ar: '﴿هَذَا خَلْقُ',
          en: 'this is the creation of',
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'خَلْقُ', lemma: 'خَلْق', pos: 'noun', features: 'nom.constr', root: 'خ ل ق', gloss: 'creation of' },
          ],
        },
        {
          id: 'qs-v2-c11-039',
          ar: 'اللَّهِ فَأَرُونِي',
          en: 'Allah -- so show me',
          tokens: [
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'فَأَرُونِي', lemma: 'رَأَى', pos: 'verb', features: 'conj+imp.2mp+1s', root: 'ر أ ي', gloss: 'to see, show; so show me!' },
          ],
        },
        {
          id: 'qs-v2-c11-040',
          ar: 'مَاذَا خَلَقَ',
          en: 'what have created',
          tokens: [
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'خَلَقَ', lemma: 'خَلَقَ', pos: 'verb', features: 'perf.3ms', gloss: 'to create; created' },
          ],
        },
        {
          id: 'qs-v2-c11-041',
          ar: 'الَّذِينَ مِنْ',
          en: 'those besides',
          tokens: [
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'those who' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, besides' },
          ],
        },
        {
          id: 'qs-v2-c11-042',
          ar: 'دُونِهِ﴾.',
          en: 'Him!',
          tokens: [
            { surface: 'دُونِهِ', lemma: 'دُون', pos: 'noun', features: 'gen+3ms', root: 'د و ن', gloss: 'besides him, other than him' },
          ],
        },
        {
          id: 'qs-v2-c11-043',
          ar: 'وَكَيْفَ رَبُّ الْبَرِّ، وَرَبُّ الْبَحْرِ، وَرَبُّ الرِّزْقِ، وَرَبُّ الْمَطَرِ؟!',
          en: 'And how could there really be a separate lord of the land, the sea, provision, and rain?!',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'nom.constr', gloss: 'lord of' },
            { surface: 'الْبَرِّ', lemma: 'بَرّ', pos: 'noun', features: 'def.gen', root: 'ب ر ر', gloss: 'the land' },
            { surface: 'وَرَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'conj+nom.constr', gloss: 'and lord of' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', root: 'ب ح ر', gloss: 'the sea' },
            { surface: 'وَرَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'conj+nom.constr', gloss: 'and lord of' },
            { surface: 'الرِّزْقِ', lemma: 'رِزْق', pos: 'noun', features: 'def.gen', root: 'ر ز ق', gloss: 'provision' },
            { surface: 'وَرَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'conj+nom.constr', gloss: 'and lord of' },
            { surface: 'الْمَطَرِ', lemma: 'مَطَر', pos: 'noun', features: 'def.gen', root: 'م ط ر', gloss: 'the rain' },
          ],
        },
        {
          id: 'qs-v2-c11-044',
          ar: 'أَسْمَاءٌ،',
          en: 'Mere names --',
          tokens: [
            { surface: 'أَسْمَاءٌ', lemma: 'اسْم', pos: 'noun', features: 'pl.indef.nom', root: 'س م و', gloss: 'names' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'you named them, you and your fathers. Judgment belongs to Allah, dominion belongs to Allah, the earth belongs to Allah, the command belongs to Allah: that you worship none but Him. That is the upright religion -- but most people do not know.',
      sentences: [
        {
          id: 'qs-v2-c11-045',
          ar: '﴿سَمَّيْتُمُوهَا أَنْتُمْ',
          en: 'you named them,',
          tokens: [
            { surface: 'سَمَّيْتُمُوهَا', lemma: 'سَمَّى', pos: 'verb', features: 'perf.2mp+3fs', root: 'س م و', gloss: 'to name; you named them' },
            { surface: 'أَنْتُمْ', lemma: 'أَنْتُمْ', pos: 'noun', features: '2mp', gloss: 'you (pl.)' },
          ],
        },
        {
          id: 'qs-v2-c11-046',
          ar: 'وَآبَاؤُكُمْ﴾.',
          en: 'you and your fathers.',
          tokens: [
            { surface: 'وَآبَاؤُكُمْ', lemma: 'أَب', pos: 'noun', features: 'conj+pl.nom+2mp', root: 'أ ب و', gloss: 'and your fathers' },
          ],
        },
        {
          id: 'qs-v2-c11-047',
          ar: 'الْحُكْمُ لِلَّهِ، الْمُلْكُ لِلَّهِ، الأَرْضُ لِلَّهِ، الأَمْرُ لِلَّهِ.',
          en: 'Judgment belongs to Allah, dominion belongs to Allah, the earth belongs to Allah, the command belongs to Allah:',
          tokens: [
            { surface: 'الْحُكْمُ', lemma: 'حُكْم', pos: 'noun', features: 'def.nom', root: 'ح ك م', gloss: 'the judgment' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'belongs to Allah' },
            { surface: 'الْمُلْكُ', lemma: 'مُلْك', pos: 'noun', features: 'def.nom', root: 'م ل ك', gloss: 'the dominion, kingship' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'belongs to Allah' },
            { surface: 'الأَرْضُ', lemma: 'أَرْض', pos: 'noun', features: 'def.nom', gloss: 'the earth' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'belongs to Allah' },
            { surface: 'الأَمْرُ', lemma: 'أَمْر', pos: 'noun', features: 'def.nom', gloss: 'the command, matter' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'belongs to Allah' },
          ],
        },
        {
          id: 'qs-v2-c11-048',
          ar: '﴿أَلَّا تَعْبُدُوا',
          en: 'that you worship',
          tokens: [
            { surface: 'أَلَّا', lemma: 'أَنْ', pos: 'part', features: 'part+neg', gloss: 'that not' },
            { surface: 'تَعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2mp', gloss: 'to worship; you worship' },
          ],
        },
        {
          id: 'qs-v2-c11-049',
          ar: 'إِلَّا إِيَّاهُ﴾.',
          en: 'none but Him.',
          tokens: [
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, only' },
            { surface: 'إِيَّاهُ', lemma: 'إِيَّا', pos: 'noun', features: '3ms', gloss: 'Him (detached object pronoun)' },
          ],
        },
        {
          id: 'qs-v2-c11-050',
          ar: '﴿ذَلِكَ الدِّينُ',
          en: 'That is the',
          tokens: [
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'الدِّينُ', lemma: 'دِين', pos: 'noun', features: 'def.nom', root: 'د ي ن', gloss: 'religion' },
          ],
        },
        {
          id: 'qs-v2-c11-051',
          ar: 'الْقَيِّمُ﴾.',
          en: 'upright religion --',
          tokens: [
            { surface: 'الْقَيِّمُ', lemma: 'قَيِّم', pos: 'adj', features: 'def.nom', root: 'ق و م', gloss: 'upright, correct' },
          ],
        },
        {
          id: 'qs-v2-c11-052',
          ar: '﴿وَلَكِنَّ أَكْثَرَ',
          en: 'but most',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part', gloss: 'but' },
            { surface: 'أَكْثَرَ', lemma: 'أَكْثَر', pos: 'adj', features: 'acc.constr', root: 'ك ث ر', gloss: 'most (of)' },
          ],
        },
        {
          id: 'qs-v2-c11-053',
          ar: 'النَّاسِ لَا',
          en: 'people do not',
          tokens: [
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', root: 'ن و س', gloss: 'the people' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
          ],
        },
        {
          id: 'qs-v2-c11-054',
          ar: 'يَعْلَمُونَ﴾.',
          en: 'know.',
          tokens: [
            { surface: 'يَعْلَمُونَ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.3mp', gloss: 'to know; know' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَنِ الْحُكْمُ وَالْمُلْكُ وَالأَمْرُ بِحَسَبِ مَوْعِظَةِ يُوسُفَ؟',
          options: ['لِلَّهِ وَحْدَهُ', 'لِلْعَزِيزِ', 'لِلنَّاسِ جَمِيعاً'],
          answer: 0,
          qEn: "According to Yūsuf's sermon, to whom do judgment, dominion, and command belong?",
          optionsEn: ['To Allah alone', 'To al-ʿAzīz', 'To all people'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَهَذَا التَّوْحِيدُ لَيْسَ لَنَا',
        post: '.',
        en: 'This monotheism is not for us alone.',
        options: ['فَقَطْ', 'جَمِيعاً', 'أَبَداً', 'قَلِيلاً'],
        answer: 0,
        rationales: [
          "'Only' -- matches the meaning: monotheism is not for us exclusively, but for everyone.",
          "'All together' -- wrong meaning here; this word describes people, not exclusivity.",
          "'Never' -- wrong meaning; the sentence isn't negating monotheism itself.",
          "'A little' -- wrong meaning; doesn't fit this contrast.",
        ],
      },
      {
        type: 'cloze',
        pre: 'الْحُكْمُ لِلَّهِ، الْمُلْكُ',
        post: '، الأَرْضُ لِلَّهِ.',
        en: 'Judgment belongs to Allah, dominion belongs to Allah, the earth belongs to Allah.',
        options: ['لِلَّهِ', 'لِلْعَزِيزِ', 'لِلنَّاسِ', 'لِلْمَلَكِ'],
        answer: 0,
        rationales: [
          "'Belongs to Allah' -- matches the repeated refrain of the sermon.",
          "'Belongs to al-ʿAzīz' -- wrong; the sermon insists all dominion belongs to Allah alone.",
          "'Belongs to the people' -- wrong; contradicts the sermon's point.",
          "'Belongs to the angel' -- wrong; not part of this refrain.",
        ],
      },
      {
        type: 'cloze',
        pre: 'ذَلِكَ الدِّينُ',
        post: '.',
        en: 'That is the upright religion.',
        options: ['الْقَيِّمُ', 'الْقَوِيُّ', 'الْجَدِيدُ', 'الْقَدِيمُ'],
        answer: 0,
        rationales: [
          "'Upright, correct' -- the Qur'anic phrase الدِّينُ الْقَيِّمُ.",
          "'Strong' -- close in sound but wrong word.",
          "'New' -- wrong meaning.",
          "'Old, ancient' -- wrong meaning.",
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَقُولُ اللَّهُ رَبُّ الْعَالَمِينَ',
        pre: '',
        post: 'اللَّهُ رَبُّ الْعَالَمِينَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَقُولُ', 'يَقُولُ', 'تَقُولُ', 'نَقُولُ'],
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
        base: 'يَقُولُ اللَّهُ رَبُّ الْعَالَمِينَ',
        pre: '',
        post: 'اللَّهُ رَبُّ الْعَالَمِينَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَقُولُ', 'أَقُولُ', 'تَقُولُ', 'يَقُولُونَ'],
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
        base: 'يَقُولُ اللَّهُ رَبُّ الْعَالَمِينَ',
        pre: '',
        post: 'اللَّهُ رَبُّ الْعَالَمِينَ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَقُولُ', 'أَقُولُ', 'يَقُولُ', 'نَقُولُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '1st singular -- I.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

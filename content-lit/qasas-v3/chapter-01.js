// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 1 -- بَعْدَ آدَمَ.
// Printed page 62 only -- the whole chapter sits on one page, ending before
// ch2's heading حَسَدُ الشَّيْطَانِ partway down page 63. Transcribed by hand
// from the scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// Volume 3 opens the story of Nūḥ ﷺ: this first chapter is scene-setting
// prose about Adam's descendants multiplying across the earth, still
// united as one nation worshiping Allah alone, before the drift into
// idolatry that the rest of the volume will trace.
//
// Grammar / lexical notes:
//   -- قِيلَ (qs-v3-c01-005) is the passive of the already-taught قَالَ,
//      tagged pass+perf.3ms -- first passive-perfect instance in the
//      corpus (the only precedent so far, qs-v2-c19-301's تُغْلَبُوا, was
//      passive-imperfect); same documented 'pass' atom, ordered pass
//      first per that precedent.
//   -- هَذِهِ and هَؤُلَاءِ reuse their own already-taught demonstrative
//      lemmas (qasas-v1 ch1, qasas-v2 ch17 respectively) rather than
//      folding into هَذَا/ذَلِكَ.
//   -- لَمَا (qs-v3-c01-004) is لَ (جواب لو) + مَا (negator) fused onto one
//      surface form -- tagged as the already-taught negator مَا with
//      features 'part+neg', the same fused-particle pattern used
//      elsewhere for لَ-prefixed forms (e.g. qs-v2-c22-038's أَئِنَّكَ).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): بَارَكَ (qasas-v1
//      ch13/15/16, qasas-v2 ch1)، اللَّه، فِي، آدَم (qasas-v2 ch9)، رَجُل،
//      كَثِير، لَوْ (ch10/15)، رَجَعَ (qasas-v1 ch5)، رَأَى، وَلَد، عَرَفَ
//      (qasas-v1 ch2)، هَذِهِ (qasas-v1 ch1)، يَا، تَعَجَّبَ (qasas-v1 ch5)،
//      سُبْحَانَ (qasas-v2 ch22)، هَؤُلَاءِ (qasas-v2 ch17)، كُلّ، قَرْيَة
//      (qasas-v1 ch1)، بَنَى (qasas-v1 ch15)، بَيْت (qasas-v1 ch1)، الأَرْض،
//      زَرَعَ (qasas-v2 ch13)، نَاس (qasas-v1 ch1)، عَلَى، دِين (qasas-v2
//      ch11)، أَب، عَبَدَ (qasas-v1 ch1)، لَا، أَشْرَكَ (qasas-v2 ch11)، بِ،
//      شَيْء (qasas-v1 ch3)، وَاحِد (qasas-v2 ch11)، رَبّ
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 7 new words (ذُرِّيَّة، نِسَاء، اِنْتَشَرَ، كَثُرَ، حَرَثَ، عَاشَ، أُمَّة).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch1',
  title: { ar: 'بَعْدَ آدَمَ', en: 'After Adam' },
  newWords: ['ذُرِّيَّة', 'نِسَاء', 'اِنْتَشَرَ', 'كَثُرَ', 'حَرَثَ', 'عَاشَ', 'أُمَّة'],
  lemmas: {
    ذُرِّيَّة: { gloss: 'offspring, progeny, descendants' },
    نِسَاء: { gloss: 'women' },
    اِنْتَشَرَ: { gloss: 'to spread, scatter' },
    كَثُرَ: { gloss: 'to become many, multiply' },
    حَرَثَ: { gloss: 'to till, plow' },
    عَاشَ: { gloss: 'to live' },
    أُمَّة: { gloss: 'nation, community' },
  },
  paragraphs: [
    {
      en: 'Allah blessed Adam\'s offspring, and among them were many men and women. Adam\'s offspring spread out and multiplied. If Adam were to return and see his children, he would not recognize them. And if he were told, "This is your offspring, O Adam," he would be greatly amazed. and said: "Glory be to Allah! Are these all my children? Is all this my offspring?!"',
      sentences: [
        {
          id: 'qs-v3-c01-001',
          ar: 'بَارَكَ اللَّهُ فِي ذُرِّيَّةِ آدَمَ',
          en: "Allah blessed Adam's offspring,",
          tokens: [
            { surface: 'بَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'perf.3ms', gloss: 'to bless; blessed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ذُرِّيَّةِ', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'constr.gen', root: 'ذ ر أ', gloss: 'the offspring of' },
            { surface: 'آدَمَ', lemma: 'آدَم', pos: 'proper', features: 'gen', gloss: 'Adam' },
          ],
        },
        {
          id: 'qs-v3-c01-002',
          ar: 'فَكَانَ فِيهَا رِجَالٌ كَثِيرٌ وَنِسَاءٌ.',
          en: 'and among them were many men and women.',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'among them' },
            { surface: 'رِجَالٌ', lemma: 'رَجُل', pos: 'noun', features: 'pl.indef.nom', gloss: 'men' },
            { surface: 'كَثِيرٌ', lemma: 'كَثِير', pos: 'adj', features: 'indef.nom', gloss: 'many' },
            { surface: 'وَنِسَاءٌ', lemma: 'نِسَاء', pos: 'noun', features: 'conj+indef.nom', root: 'ن س و', gloss: 'and women' },
          ],
        },
        {
          id: 'qs-v3-c01-003',
          ar: 'وَانْتَشَرَتْ ذُرِّيَّةُ آدَمَ وَكَثُرَتْ.',
          en: "Adam's offspring spread out and multiplied.",
          tokens: [
            { surface: 'وَانْتَشَرَتْ', lemma: 'اِنْتَشَرَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ن ش ر', gloss: 'to spread, scatter; and spread' },
            { surface: 'ذُرِّيَّةُ', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'constr.nom', root: 'ذ ر أ', gloss: 'the offspring of' },
            { surface: 'آدَمَ', lemma: 'آدَم', pos: 'proper', features: 'gen', gloss: 'Adam' },
            { surface: 'وَكَثُرَتْ', lemma: 'كَثُرَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك ث ر', gloss: 'to become many, multiply; and multiplied' },
          ],
        },
        {
          id: 'qs-v3-c01-004',
          ar: 'فَلَوْ رَجَعَ آدَمُ وَرَأَى أَوْلَادَهُ لَمَا عَرَفَ.',
          en: 'If Adam were to return and see his children, he would not recognize them.',
          tokens: [
            { surface: 'فَلَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj+conj', gloss: 'so if' },
            { surface: 'رَجَعَ', lemma: 'رَجَعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to return; returned' },
            { surface: 'آدَمُ', lemma: 'آدَم', pos: 'proper', features: 'nom', gloss: 'Adam' },
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ر أ ي', gloss: 'to see; and saw' },
            { surface: 'أَوْلَادَهُ', lemma: 'وَلَد', pos: 'noun', features: 'pl.acc+3ms', gloss: 'his children' },
            { surface: 'لَمَا', lemma: 'مَا', pos: 'part', features: 'part+neg', gloss: 'then...not' },
            { surface: 'عَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'perf.3ms', gloss: 'to know, recognize; recognized' },
          ],
        },
        {
          id: 'qs-v3-c01-005',
          ar: 'وَلَوْ قِيلَ لَهُ هَذِهِ ذُرِّيَّتُكَ يَا آدَمُ لَتَعَجَّبَ كَثِيراً.',
          en: 'And if he were told, "This is your offspring, O Adam," he would be greatly amazed.',
          tokens: [
            { surface: 'وَلَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj+conj', gloss: 'and if' },
            { surface: 'قِيلَ', lemma: 'قَالَ', pos: 'verb', features: 'pass+perf.3ms', root: 'ق و ل', gloss: 'to say; it was said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'ذُرِّيَّتُكَ', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'nom+2ms', gloss: 'your offspring' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'آدَمُ', lemma: 'آدَم', pos: 'proper', features: 'nom', gloss: 'Adam' },
            { surface: 'لَتَعَجَّبَ', lemma: 'تَعَجَّبَ', pos: 'verb', features: 'part+perf.3ms', gloss: 'to be amazed; would be amazed' },
            { surface: 'كَثِيراً', lemma: 'كَثِير', pos: 'adj', features: 'indef.acc', gloss: 'greatly, much' },
          ],
        },
        {
          id: 'qs-v3-c01-006',
          ar: 'وَقَالَ: سُبْحَانَ اللَّهِ!',
          en: 'and said: "Glory be to Allah!',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'سُبْحَانَ', lemma: 'سُبْحَانَ', pos: 'noun', features: 'acc.constr', gloss: 'glory of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v3-c01-007',
          ar: 'هَؤُلَاءِ كُلُّهُمْ أَوْلَادِي؟',
          en: 'Are these all my children?',
          tokens: [
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'كُلُّهُمْ', lemma: 'كُلّ', pos: 'noun', features: 'nom+3mp', gloss: 'all of them' },
            { surface: 'أَوْلَادِي', lemma: 'وَلَد', pos: 'noun', features: 'nom+1s', gloss: 'my children' },
          ],
        },
        {
          id: 'qs-v3-c01-008',
          ar: 'هَذِهِ كُلُّهَا ذُرِّيَّتِي؟!',
          en: 'Is all this my offspring?!"',
          tokens: [
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'كُلُّهَا', lemma: 'كُلّ', pos: 'noun', features: 'nom+3fs', gloss: 'all of it' },
            { surface: 'ذُرِّيَّتِي', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'nom+1s', gloss: 'my offspring' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِذُرِّيَّةِ آدَمَ مَعَ مُرُورِ الزَّمَنِ؟',
          options: ['اِنْتَشَرَتْ وَكَثُرَتْ حَتَّى صَارَ فِيهَا رِجَالٌ كَثِيرٌ وَنِسَاءٌ', 'بَقِيَتْ قَلِيلَةً كَمَا كَانَتْ', 'اِخْتَفَتْ مِنَ الأَرْضِ'],
          answer: 0,
          qEn: "What happened to Adam's offspring over time?",
          optionsEn: ['They spread and multiplied until there were many men and women', 'They stayed as few as they started', 'They vanished from the earth'],
        },
      ],
    },
    {
      en: 'Adam\'s offspring had many villages, and they built many houses. They used to till the land, sow, and live. The people were on the religion of their father Adam, worshiping Allah and not associating anything with Him! The people were one nation, their father was Adam, and their Lord was Allah.',
      sentences: [
        {
          id: 'qs-v3-c01-009',
          ar: 'وَكَانَتْ لِذُرِّيَّةِ آدَمَ قُرًى كَثِيرَةٌ،',
          en: "Adam's offspring had many villages,",
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was (had)' },
            { surface: 'لِذُرِّيَّةِ', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'prep+constr.gen', gloss: 'to the offspring of' },
            { surface: 'آدَمَ', lemma: 'آدَم', pos: 'proper', features: 'gen', gloss: 'Adam' },
            { surface: 'قُرًى', lemma: 'قَرْيَة', pos: 'noun', features: 'pl.indef.nom', gloss: 'villages' },
            { surface: 'كَثِيرَةٌ', lemma: 'كَثِير', pos: 'adj', features: 'indef.nom.f', gloss: 'many' },
          ],
        },
        {
          id: 'qs-v3-c01-010',
          ar: 'وَبَنَوْا بُيُوتاً كَثِيرَةً.',
          en: 'and they built many houses.',
          tokens: [
            { surface: 'وَبَنَوْا', lemma: 'بَنَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to build; and built' },
            { surface: 'بُيُوتاً', lemma: 'بَيْت', pos: 'noun', features: 'pl.indef.acc', gloss: 'houses' },
            { surface: 'كَثِيرَةً', lemma: 'كَثِير', pos: 'adj', features: 'indef.acc.f', gloss: 'many' },
          ],
        },
        {
          id: 'qs-v3-c01-011',
          ar: 'وَكَانُوا يَحْرُثُونَ الأَرْضَ وَيَزْرَعُونَ وَيَعِيشُونَ.',
          en: 'They used to till the land, sow, and live.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and were' },
            { surface: 'يَحْرُثُونَ', lemma: 'حَرَثَ', pos: 'verb', features: 'impf.3mp', root: 'ح ر ث', gloss: 'to till, plow; till' },
            { surface: 'الأَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'def.acc', gloss: 'the land' },
            { surface: 'وَيَزْرَعُونَ', lemma: 'زَرَعَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to plant, sow; and sow' },
            { surface: 'وَيَعِيشُونَ', lemma: 'عَاشَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ع ي ش', gloss: 'to live; and live' },
          ],
        },
        {
          id: 'qs-v3-c01-012',
          ar: 'وَكَانَ النَّاسُ عَلَى دِينِ أَبِيهِمْ آدَمَ،',
          en: 'The people were on the religion of their father Adam,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'دِينِ', lemma: 'دِين', pos: 'noun', features: 'constr.gen', gloss: 'the religion of' },
            { surface: 'أَبِيهِمْ', lemma: 'أَب', pos: 'noun', features: 'gen+3mp', root: 'أ ب و', gloss: 'their father' },
            { surface: 'آدَمَ', lemma: 'آدَم', pos: 'proper', features: 'gen', gloss: 'Adam' },
          ],
        },
        {
          id: 'qs-v3-c01-013',
          ar: 'يَعْبُدُونَ اللَّهَ وَلَا يُشْرِكُونَ بِهِ شَيْئاً!',
          en: 'worshiping Allah and not associating anything with Him!',
          tokens: [
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship; worshiping' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُشْرِكُونَ', lemma: 'أَشْرَكَ', pos: 'verb', features: 'impf.3mp', gloss: 'to associate partners; associating' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with Him' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v3-c01-014',
          ar: 'وَكَانَ النَّاسُ أُمَّةً وَاحِدَةً وَأَبُوهُمْ آدَمُ وَرَبُّهُمُ اللَّهُ.',
          en: 'The people were one nation, their father was Adam, and their Lord was Allah.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'أُمَّةً', lemma: 'أُمَّة', pos: 'noun', features: 'indef.acc', root: 'أ م م', gloss: 'a nation' },
            { surface: 'وَاحِدَةً', lemma: 'وَاحِد', pos: 'adj', features: 'indef.acc.f', gloss: 'one' },
            { surface: 'وَأَبُوهُمْ', lemma: 'أَب', pos: 'noun', features: 'conj+nom+3mp', root: 'أ ب و', gloss: 'and their father' },
            { surface: 'آدَمُ', lemma: 'آدَم', pos: 'proper', features: 'nom', gloss: 'Adam' },
            { surface: 'وَرَبُّهُمُ', lemma: 'رَبّ', pos: 'noun', features: 'conj+nom+3mp', gloss: 'and their Lord' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يَفْعَلُ أَبْنَاءُ آدَمَ فِي قُرَاهُمْ؟',
          options: ['كَانُوا يَحْرُثُونَ الأَرْضَ وَيَزْرَعُونَ وَيَعِيشُونَ', 'كَانُوا لَا يَعْمَلُونَ شَيْئاً', 'كَانُوا يَتَقَاتَلُونَ دَائِماً'],
          answer: 0,
          qEn: "What did Adam's descendants do in their villages?",
          optionsEn: ['They tilled the land, sowed, and lived', 'They did not work at all', 'They were always fighting'],
        },
        {
          q: 'عَلَى أَيِّ دِينٍ كَانَ النَّاسُ فِي هَذَا الزَّمَنِ؟',
          options: ['كَانُوا أُمَّةً وَاحِدَةً يَعْبُدُونَ اللَّهَ وَلَا يُشْرِكُونَ بِهِ شَيْئاً', 'كَانُوا يَعْبُدُونَ الأَصْنَامَ', 'كَانَ لِكُلِّ قَرْيَةٍ دِينٌ مُخْتَلِفٌ'],
          answer: 0,
          qEn: 'What religion were the people on at this time?',
          optionsEn: ['They were one nation worshiping Allah alone, associating nothing with Him', 'They worshiped idols', 'Every village had a different religion'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'بَارَكَ اللَّهُ فِي',
        post: 'آدَمَ.',
        en: "Allah blessed Adam's offspring.",
        options: ['ذُرِّيَّةِ', 'ذُرِّيَّةَ', 'ذُرِّيَّةُ', 'ذُرِّيَّتِهِ'],
        answer: 0,
        rationales: [
          'Genitive, construct -- object of the preposition فِي and first term of an إضافة with آدَمَ.',
          'Accusative -- wrong case; a preposition requires the genitive.',
          'Nominative -- wrong case for the same reason.',
          'With a possessive suffix -- wrong; the construct here takes آدَمَ directly as the second term.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَلَوْ رَجَعَ آدَمُ وَرَأَى أَوْلَادَهُ',
        post: 'عَرَفَ.',
        en: 'If Adam were to return and see his children, he would not recognize them.',
        options: ['لَمَا', 'فَمَا', 'وَمَا', 'إِنَّمَا'],
        answer: 0,
        rationales: [
          'لَ + مَا -- the required جواب لَوْ (response clause) marker fused with the negator, matching the taught pattern.',
          'فَ + مَا -- wrong particle; a لَوْ-clause\'s response does not take فَ here.',
          'وَ + مَا -- wrong particle; this is not a coordinated negation.',
          '"only" -- wrong meaning entirely for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'كَانَ النَّاسُ',
        post: 'وَاحِدَةً يَعْبُدُونَ اللَّهَ.',
        en: 'The people were one nation, worshiping Allah.',
        options: ['أُمَّةً', 'أُمَّةٌ', 'أُمَّةِ', 'أُمَمًا'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- predicate of كَانَ, matching the taught pattern.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural -- wrong number; a single nation is meant.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَحْرُثُ الرَّجُلُ الأَرْضَ',
        pre: '',
        post: 'الأَرْضَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَحْرُثُ', 'يَحْرُثُ', 'تَحْرُثُ', 'نَحْرُثُ'],
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
        base: 'يَحْرُثُ الرَّجُلُ الأَرْضَ',
        pre: '',
        post: 'الأَرْضَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَحْرُثُ', 'يَحْرُثُ', 'أَحْرُثُ', 'نَحْرُثُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَحْرُثُ الرَّجُلُ الأَرْضَ',
        pre: '',
        post: 'الأَرْضَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَحْرُثُونَ', 'يَحْرُثُ', 'تَحْرُثُ', 'نَحْرُثُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

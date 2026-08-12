// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 13 -- رُؤْيَا
// الْمَلِكِ. Printed page 42 (from ch12's closing وَأَقَامَ يُوسُفُ فِي
// السِّجْنِ سِنِينَ) - 43 (ending before ch14's heading الْمَلِكُ يُرْسِلُ
// إِلَى يُوسُفَ). Transcribed by hand from the scan (vision OCR, 300dpi
// render) against ../CHAPTER-FORMAT.md.
//
// The king's seven-cows dream (Sūrat Yūsuf 12:43-49) told here entirely
// in the author's own paraphrase, not as a direct Qur'anic quotation --
// unlike every chapter since ch7, this one has NO bracketed ﴿﴾ material
// and needed no <=2-token fragment splitting.
//
// Grammar / lexical notes:
//   -- qs-v2-c13-013 (قَحْطٌ عَامٌ): عَامٌ ("a year") is tagked as a noun in
//      apposition to قَحْطٌ ("a drought [lasting] a year"), not as the verb
//      عَمَّ -- both stay indef.nom, safe degradation consistent with how
//      this course handles apposition elsewhere (no dedicated atom for it
//      in CHAPTER-FORMAT.md).
//   -- عِجَاف (qs-v2-c13-003) is the plural form itself used as the lemma
//      (no everyday singular counterpart worth teaching) -- tagged
//      indef.gen without a pl atom, same treatment as other plural-only
//      citation forms.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): رَأَى, مَلِك, مِصْر, رُؤْيَا,
//      عَجِيب, فِي, مَنَام, هَذِهِ, أَكَلَ, تَعَجَّبَ, سَأَلَ, تَأْوِيل, قَالَ, لَيْسَ,
//      شَيْء, لَكِنْ, سَاقٍ, لَا, بَلْ, أَخْبَرَ, ذَهَبَ, سِجْن, يُوسُف, عَنْ, كَانَ,
//      جَوَاد, كَرِيم, عَلَى, اللَّه, عَرَفَ, بَعْدَ, ذَلِكَ, تَرَكَ, إِلَّا, أَنْ, إِلَى,
//      نَاس are all already taught and NOT re-listed in newWords here.
//
// 23 new words (سَبْع، بَقَرَة، سَمِين، عِجَاف، سُنْبُلَة، أَخْضَر، يَابِس، جَلِيس،
// نَائِم، حَقِيقَة، مُشْفِق، بُخْل، دَلَّ، تَدْبِير، زَرَعَ، حَصَدَ، قَلِيل، قَحْط، عَام،
// خَزَنَ، طَالَ، نَصْر، أَخْصَبَ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch13',
  title: { ar: 'رُؤْيَا الْمَلِكِ', en: "The King's Dream" },
  newWords: [
    'سَبْع', 'بَقَرَة', 'سَمِين', 'عِجَاف', 'سُنْبُلَة', 'أَخْضَر', 'يَابِس',
    'جَلِيس', 'نَائِم', 'حَقِيقَة', 'مُشْفِق', 'بُخْل', 'دَلَّ', 'تَدْبِير', 'زَرَعَ',
    'حَصَدَ', 'قَلِيل', 'قَحْط', 'عَام', 'خَزَنَ', 'طَالَ', 'نَصْر', 'أَخْصَبَ',
  ],
  lemmas: {
    'سَبْع': { gloss: 'seven' },
    'بَقَرَة': { gloss: 'cow' },
    'سَمِين': { gloss: 'fat, plump' },
    'عِجَاف': { gloss: 'lean, thin (cows)' },
    'سُنْبُلَة': { gloss: 'ear of grain' },
    'أَخْضَر': { gloss: 'green' },
    'يَابِس': { gloss: 'dry' },
    'جَلِيس': { gloss: 'companion, one who sits with' },
    'نَائِم': { gloss: 'sleeper' },
    'حَقِيقَة': { gloss: 'reality, truth' },
    'مُشْفِق': { gloss: 'compassionate, kind' },
    'بُخْل': { gloss: 'stinginess' },
    'دَلَّ': { gloss: 'to indicate, point to, guide' },
    'تَدْبِير': { gloss: 'planning, management' },
    'زَرَعَ': { gloss: 'to plant, sow' },
    'حَصَدَ': { gloss: 'to harvest, reap' },
    'قَلِيل': { gloss: 'little, few' },
    'قَحْط': { gloss: 'drought, famine' },
    'عَام': { gloss: 'year' },
    'خَزَنَ': { gloss: 'to store' },
    'طَالَ': { gloss: 'to last long, extend' },
    'نَصْر': { gloss: 'help, relief, bounty' },
    'أَخْصَبَ': { gloss: 'to become fertile, abundant' },
  },
  paragraphs: [
    {
      en: 'The king of Egypt had an amazing dream. He saw in his sleep seven fat cows, and seven lean cows ate them. And the king saw seven green ears of grain and seven dry ones. The king was amazed at this strange dream and asked his companions to interpret it. They said: this means nothing -- a sleeper sees many things with no reality to them. But the cupbearer said: no, rather I will tell you the interpretation of this dream.',
      sentences: [
        {
          id: 'qs-v2-c13-001',
          ar: 'وَرَأَى مَلِكُ مِصْرَ رُؤْيَا عَجِيبَةً.',
          en: 'The king of Egypt had an amazing dream.',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ر أ ي', gloss: 'to see; and saw' },
            { surface: 'مَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'nom.constr', gloss: 'king of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'رُؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'indef.acc', root: 'ر أ ي', gloss: 'a dream' },
            { surface: 'عَجِيبَةً', lemma: 'عَجِيب', pos: 'adj', features: 'indef.acc.f', gloss: 'amazing, strange' },
          ],
        },
        {
          id: 'qs-v2-c13-002',
          ar: 'رَأَى فِي الْمَنَامِ سَبْعَ بَقَرَاتٍ سِمَانٍ.',
          en: 'He saw in his sleep seven fat cows,',
          tokens: [
            { surface: 'رَأَى', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms', root: 'ر أ ي', gloss: 'to see; saw' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْمَنَامِ', lemma: 'مَنَام', pos: 'noun', features: 'def.gen', gloss: 'sleep, dream' },
            { surface: 'سَبْعَ', lemma: 'سَبْع', pos: 'num', features: 'acc.constr', root: 'س ب ع', gloss: 'seven' },
            { surface: 'بَقَرَاتٍ', lemma: 'بَقَرَة', pos: 'noun', features: 'pl.indef.gen', root: 'ب ق ر', gloss: 'cows' },
            { surface: 'سِمَانٍ', lemma: 'سَمِين', pos: 'adj', features: 'pl.indef.gen', root: 'س م ن', gloss: 'fat, plump' },
          ],
        },
        {
          id: 'qs-v2-c13-003',
          ar: 'وَيَأْكُلُ هَذِهِ الْبَقَرَاتِ سَبْعُ بَقَرَاتٍ عِجَافٍ.',
          en: 'and seven lean cows ate them.',
          tokens: [
            { surface: 'وَيَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to eat; and ate' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الْبَقَرَاتِ', lemma: 'بَقَرَة', pos: 'noun', features: 'pl.def.acc', root: 'ب ق ر', gloss: 'the cows' },
            { surface: 'سَبْعُ', lemma: 'سَبْع', pos: 'num', features: 'nom.constr', root: 'س ب ع', gloss: 'seven' },
            { surface: 'بَقَرَاتٍ', lemma: 'بَقَرَة', pos: 'noun', features: 'pl.indef.gen', root: 'ب ق ر', gloss: 'cows' },
            { surface: 'عِجَافٍ', lemma: 'عِجَاف', pos: 'adj', features: 'indef.gen', root: 'ع ج ف', gloss: 'lean, thin' },
          ],
        },
        {
          id: 'qs-v2-c13-004',
          ar: 'وَرَأَى الْمَلِكُ سَبْعَ سُنْبُلَاتٍ خُضْرٍ وَسَبْعَ سُنْبُلَاتٍ يَابِسَاتٍ.',
          en: 'And the king saw seven green ears of grain and seven dry ones.',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ر أ ي', gloss: 'to see; and saw' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', gloss: 'the king' },
            { surface: 'سَبْعَ', lemma: 'سَبْع', pos: 'num', features: 'acc.constr', root: 'س ب ع', gloss: 'seven' },
            { surface: 'سُنْبُلَاتٍ', lemma: 'سُنْبُلَة', pos: 'noun', features: 'pl.indef.gen', root: 'س ن ب ل', gloss: 'ears of grain' },
            { surface: 'خُضْرٍ', lemma: 'أَخْضَر', pos: 'adj', features: 'pl.indef.gen', root: 'خ ض ر', gloss: 'green' },
            { surface: 'وَسَبْعَ', lemma: 'سَبْع', pos: 'num', features: 'conj+acc.constr', root: 'س ب ع', gloss: 'and seven' },
            { surface: 'سُنْبُلَاتٍ', lemma: 'سُنْبُلَة', pos: 'noun', features: 'pl.indef.gen', root: 'س ن ب ل', gloss: 'ears of grain' },
            { surface: 'يَابِسَاتٍ', lemma: 'يَابِس', pos: 'adj', features: 'pl.indef.gen', root: 'ي ب س', gloss: 'dry' },
          ],
        },
        {
          id: 'qs-v2-c13-005',
          ar: 'تَعَجَّبَ الْمَلِكُ مِنْ هَذِهِ الرُّؤْيَا الْعَجِيبَةِ وَسَأَلَ جُلَسَاءَهُ عَنْ تَأْوِيلِ الرُّؤْيَا.',
          en: 'The king was amazed at this strange dream and asked his companions to interpret it.',
          tokens: [
            { surface: 'تَعَجَّبَ', lemma: 'تَعَجَّبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be amazed; was amazed' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', gloss: 'the king' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.gen', root: 'ر أ ي', gloss: 'the dream' },
            { surface: 'الْعَجِيبَةِ', lemma: 'عَجِيب', pos: 'adj', features: 'def.gen.f', gloss: 'strange, amazing' },
            { surface: 'وَسَأَلَ', lemma: 'سَأَلَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to ask; and asked' },
            { surface: 'جُلَسَاءَهُ', lemma: 'جَلِيس', pos: 'noun', features: 'pl.acc+3ms', root: 'ج ل س', gloss: 'his companions' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'تَأْوِيلِ', lemma: 'تَأْوِيل', pos: 'noun', features: 'gen.constr', root: 'أ و ل', gloss: 'the interpretation of' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.gen', root: 'ر أ ي', gloss: 'the dream' },
          ],
        },
        {
          id: 'qs-v2-c13-006',
          ar: 'قَالُوا: هَذَا لَيْسَ بِشَيْءٍ، النَّائِمُ يَرَى أَشْيَاءَ كَثِيرَةً لَا حَقِيقَةَ لَهَا.',
          en: 'They said: this means nothing -- a sleeper sees many things with no reality to them.',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', root: 'ل ي س', gloss: 'is not' },
            { surface: 'بِشَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'prep+indef.gen', gloss: 'anything' },
            { surface: 'النَّائِمُ', lemma: 'نَائِم', pos: 'noun', features: 'def.nom', root: 'ن و م', gloss: 'the sleeper' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see; sees' },
            { surface: 'أَشْيَاءَ', lemma: 'شَيْء', pos: 'noun', features: 'pl.indef.acc', gloss: 'things' },
            { surface: 'كَثِيرَةً', lemma: 'كَثِير', pos: 'adj', features: 'indef.acc.f', gloss: 'many' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'حَقِيقَةَ', lemma: 'حَقِيقَة', pos: 'noun', features: 'indef.acc', root: 'ح ق ق', gloss: 'reality, truth' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v2-c13-007',
          ar: 'وَلَكِنْ قَالَ السَّاقِي: لَا، بَلْ أُخْبِرُكُمْ بِتَأْوِيلِ هَذِهِ الرُّؤْيَا.',
          en: "But the cupbearer said: no, rather I will tell you the interpretation of this dream.",
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'السَّاقِي', lemma: 'سَاقٍ', pos: 'noun', features: 'def.nom', root: 'س ق ي', gloss: 'the cupbearer' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'أُخْبِرُكُمْ', lemma: 'أَخْبَرَ', pos: 'verb', features: 'impf.1s+2mp', root: 'خ ب ر', gloss: 'to inform, tell; I will tell you all' },
            { surface: 'بِتَأْوِيلِ', lemma: 'تَأْوِيل', pos: 'noun', features: 'prep+gen.constr', root: 'أ و ل', gloss: 'the interpretation of' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.gen', root: 'ر أ ي', gloss: 'the dream' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا رَأَى مَلِكُ مِصْرَ فِي مَنَامِهِ؟',
          options: ['سَبْعَ بَقَرَاتٍ سِمَانٍ تَأْكُلُهُنَّ سَبْعٌ عِجَافٌ', 'أَسَداً يُطَارِدُهُ', 'بَحْراً مِنَ الذَّهَبِ'],
          answer: 0,
          qEn: 'What did the king of Egypt see in his sleep?',
          optionsEn: ['Seven fat cows eaten by seven lean ones', 'A lion chasing him', 'A sea of gold'],
        },
        {
          q: 'لِمَاذَا رَفَضَ جُلَسَاءُ الْمَلِكِ تَفْسِيرَ الرُّؤْيَا؟',
          options: ['قَالُوا إِنَّهَا أَحْلَامٌ لَا حَقِيقَةَ لَهَا', 'لَمْ يَفْهَمُوا الْعَرَبِيَّةَ', 'كَانُوا نَائِمِينَ'],
          answer: 0,
          qEn: "Why did the king's companions refuse to interpret the dream?",
          optionsEn: ['They said it was just meaningless dreams', "They didn't understand Arabic", 'They were asleep'],
        },
      ],
    },
    {
      en: 'The cupbearer went to the prison and asked Yūsuf about the interpretation of the king\'s dream. Yūsuf was generous, noble, and compassionate toward Allah\'s creatures, so he told him the interpretation. For Yūsuf was generous and noble and knew no stinginess. He told him the interpretation and guided him on what to do. He said: you will farm for seven years, and leave what you harvest in its ear, except a little that you eat. Then after that will come a year of drought in which you will eat what you stored, except a little. This drought will last seven years. After that, relief will come and the people will prosper. The cupbearer went and told the king the interpretation of his dream.',
      sentences: [
        {
          id: 'qs-v2-c13-008',
          ar: 'وَذَهَبَ السَّاقِي إِلَى السِّجْنِ وَسَأَلَ يُوسُفَ عَنْ تَأْوِيلِ رُؤْيَا الْمَلِكِ.',
          en: "The cupbearer went to the prison and asked Yūsuf about the interpretation of the king's dream.",
          tokens: [
            { surface: 'وَذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to go; and went' },
            { surface: 'السَّاقِي', lemma: 'سَاقٍ', pos: 'noun', features: 'def.nom', root: 'س ق ي', gloss: 'the cupbearer' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'وَسَأَلَ', lemma: 'سَأَلَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to ask; and asked' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'تَأْوِيلِ', lemma: 'تَأْوِيل', pos: 'noun', features: 'gen.constr', root: 'أ و ل', gloss: 'the interpretation of' },
            { surface: 'رُؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'gen.constr', root: 'ر أ ي', gloss: 'the dream of' },
            { surface: 'الْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'def.gen', gloss: 'the king' },
          ],
        },
        {
          id: 'qs-v2-c13-009',
          ar: 'كَانَ يُوسُفُ جَوَاداً كَرِيماً مُشْفِقاً عَلَى خَلْقِ اللَّهِ فَأَخْبَرَهُ بِالتَّأْوِيلِ.',
          en: "Yūsuf was generous, noble, and compassionate toward Allah's creatures, so he told him the interpretation.",
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'جَوَاداً', lemma: 'جَوَاد', pos: 'adj', features: 'indef.acc', root: 'ج و د', gloss: 'generous' },
            { surface: 'كَرِيماً', lemma: 'كَرِيم', pos: 'adj', features: 'indef.acc', root: 'ك ر م', gloss: 'noble, generous' },
            { surface: 'مُشْفِقاً', lemma: 'مُشْفِق', pos: 'adj', features: 'indef.acc', root: 'ش ف ق', gloss: 'compassionate, kind' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'toward' },
            { surface: 'خَلْقِ', lemma: 'خَلْق', pos: 'noun', features: 'gen.constr', root: 'خ ل ق', gloss: "creatures of" },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'فَأَخْبَرَهُ', lemma: 'أَخْبَرَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'خ ب ر', gloss: 'to inform, tell; so told him' },
            { surface: 'بِالتَّأْوِيلِ', lemma: 'تَأْوِيل', pos: 'noun', features: 'prep+def.gen', root: 'أ و ل', gloss: 'the interpretation' },
          ],
        },
        {
          id: 'qs-v2-c13-010',
          ar: 'وَكَانَ يُوسُفُ جَوَاداً كَرِيماً لَا يَعْرِفُ الْبُخْلَ.',
          en: 'For Yūsuf was generous and noble and knew no stinginess.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'جَوَاداً', lemma: 'جَوَاد', pos: 'adj', features: 'indef.acc', root: 'ج و د', gloss: 'generous' },
            { surface: 'كَرِيماً', lemma: 'كَرِيم', pos: 'adj', features: 'indef.acc', root: 'ك ر م', gloss: 'noble, generous' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', gloss: 'to know; knows' },
            { surface: 'الْبُخْلَ', lemma: 'بُخْل', pos: 'noun', features: 'def.acc', root: 'ب خ ل', gloss: 'stinginess' },
          ],
        },
        {
          id: 'qs-v2-c13-011',
          ar: 'فَأَخْبَرَ يُوسُفُ بِالتَّأْوِيلِ وَدَلَّ عَلَى التَّدْبِيرِ.',
          en: 'He told him the interpretation and guided him on what to do.',
          tokens: [
            { surface: 'فَأَخْبَرَ', lemma: 'أَخْبَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ب ر', gloss: 'to inform, tell; so told' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'بِالتَّأْوِيلِ', lemma: 'تَأْوِيل', pos: 'noun', features: 'prep+def.gen', root: 'أ و ل', gloss: 'the interpretation' },
            { surface: 'وَدَلَّ', lemma: 'دَلَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'د ل ل', gloss: 'to indicate, guide; and guided' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'التَّدْبِيرِ', lemma: 'تَدْبِير', pos: 'noun', features: 'def.gen', root: 'د ب ر', gloss: 'planning, management' },
          ],
        },
        {
          id: 'qs-v2-c13-012',
          ar: 'قَالَ: تَزْرَعُونَ سَبْعَ سِنِينَ، وَاتْرُكُوا مَا حَصَدْتُمْ فِي سُنْبُلِهِ إِلَّا قَلِيلاً مِمَّا تَأْكُلُونَ.',
          en: 'He said: you will farm for seven years, and leave what you harvest in its ear, except a little that you eat.',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'تَزْرَعُونَ', lemma: 'زَرَعَ', pos: 'verb', features: 'impf.2mp', root: 'ز ر ع', gloss: 'to plant, sow; you will plant' },
            { surface: 'سَبْعَ', lemma: 'سَبْع', pos: 'num', features: 'acc.constr', root: 'س ب ع', gloss: 'seven' },
            { surface: 'سِنِينَ', lemma: 'سَنَة', pos: 'noun', features: 'pl.indef.acc', root: 'س ن و', gloss: 'years' },
            { surface: 'وَاتْرُكُوا', lemma: 'تَرَكَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to leave; and leave!' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'حَصَدْتُمْ', lemma: 'حَصَدَ', pos: 'verb', features: 'perf.2mp', root: 'ح ص د', gloss: 'to harvest, reap; you harvested' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'سُنْبُلِهِ', lemma: 'سُنْبُلَة', pos: 'noun', features: 'gen+3ms', root: 'س ن ب ل', gloss: 'its ear (stalk)' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'قَلِيلاً', lemma: 'قَلِيل', pos: 'noun', features: 'indef.acc', root: 'ق ل ل', gloss: 'a little' },
            { surface: 'مِمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'from what' },
            { surface: 'تَأْكُلُونَ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.2mp', gloss: 'to eat; you eat' },
          ],
        },
        {
          id: 'qs-v2-c13-013',
          ar: 'وَيَكُونُ بَعْدَ ذَلِكَ قَحْطٌ عَامٌ تَأْكُلُونَ فِيهِ مَا خَزَنْتُمْ إِلَّا قَلِيلاً.',
          en: 'Then after that will come a year of drought in which you will eat what you stored, except a little.',
          tokens: [
            { surface: 'وَيَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ك و ن', gloss: 'to be; and there will be' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'acc.constr', gloss: 'after' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'قَحْطٌ', lemma: 'قَحْط', pos: 'noun', features: 'indef.nom', root: 'ق ح ط', gloss: 'a drought' },
            { surface: 'عَامٌ', lemma: 'عَام', pos: 'noun', features: 'indef.nom', root: 'ع و م', gloss: "[lasting] a year" },
            { surface: 'تَأْكُلُونَ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.2mp', gloss: 'to eat; you eat' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in it' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'خَزَنْتُمْ', lemma: 'خَزَنَ', pos: 'verb', features: 'perf.2mp', root: 'خ ز ن', gloss: 'to store; you stored' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'قَلِيلاً', lemma: 'قَلِيل', pos: 'noun', features: 'indef.acc', root: 'ق ل ل', gloss: 'a little' },
          ],
        },
        {
          id: 'qs-v2-c13-014',
          ar: 'وَيَطُولُ هَذَا الْقَحْطُ إِلَى سَبْعِ سِنِينَ.',
          en: 'This drought will last seven years.',
          tokens: [
            { surface: 'وَيَطُولُ', lemma: 'طَالَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ط و ل', gloss: 'to last long, extend; and will last' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْقَحْطُ', lemma: 'قَحْط', pos: 'noun', features: 'def.nom', root: 'ق ح ط', gloss: 'the drought' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'سَبْعِ', lemma: 'سَبْع', pos: 'num', features: 'gen.constr', root: 'س ب ع', gloss: 'seven' },
            { surface: 'سِنِينَ', lemma: 'سَنَة', pos: 'noun', features: 'pl.indef.gen', root: 'س ن و', gloss: 'years' },
          ],
        },
        {
          id: 'qs-v2-c13-015',
          ar: 'وَبَعْدَ ذَلِكَ يَأْتِي النَّصْرُ وَيُخْصِبُ النَّاسُ.',
          en: 'After that, relief will come and the people will prosper.',
          tokens: [
            { surface: 'وَبَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'conj+acc.constr', gloss: 'and after' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'يَأْتِي', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms', gloss: 'to come; comes' },
            { surface: 'النَّصْرُ', lemma: 'نَصْر', pos: 'noun', features: 'def.nom', root: 'ن ص ر', gloss: 'help, relief, bounty' },
            { surface: 'وَيُخْصِبُ', lemma: 'أَخْصَبَ', pos: 'verb', features: 'conj+impf.3ms', root: 'خ ص ب', gloss: 'to become fertile, abundant; and prosper' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v2-c13-016',
          ar: 'وَذَهَبَ السَّاقِي وَأَخْبَرَ الْمَلِكَ بِتَأْوِيلِ رُؤْيَاهُ.',
          en: 'The cupbearer went and told the king the interpretation of his dream.',
          tokens: [
            { surface: 'وَذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to go; and went' },
            { surface: 'السَّاقِي', lemma: 'سَاقٍ', pos: 'noun', features: 'def.nom', root: 'س ق ي', gloss: 'the cupbearer' },
            { surface: 'وَأَخْبَرَ', lemma: 'أَخْبَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ب ر', gloss: 'to inform, tell; and told' },
            { surface: 'الْمَلِكَ', lemma: 'مَلِك', pos: 'noun', features: 'def.acc', gloss: 'the king' },
            { surface: 'بِتَأْوِيلِ', lemma: 'تَأْوِيل', pos: 'noun', features: 'prep+gen.constr', root: 'أ و ل', gloss: 'the interpretation of' },
            { surface: 'رُؤْيَاهُ', lemma: 'رُؤْيَا', pos: 'noun', features: 'gen+3ms', root: 'ر أ ي', gloss: 'his dream' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا نَصَحَ يُوسُفُ بِأَنْ يَفْعَلَ النَّاسُ خِلَالَ سَنَوَاتِ الزَّرْعِ السَّبْعِ؟',
          options: ['أَنْ يَتْرُكُوا الْحَصَادَ فِي سُنْبُلِهِ إِلَّا قَلِيلاً', 'أَنْ يَأْكُلُوا كُلَّ الْمَحْصُولِ', 'أَنْ يَبِيعُوا كُلَّ شَيْءٍ فَوْراً'],
          answer: 0,
          qEn: 'What did Yūsuf advise the people to do during the seven years of planting?',
          optionsEn: ['Leave the harvest in its ear except a little', 'Eat all the produce', 'Sell everything immediately'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'كَانَ يُوسُفُ جَوَاداً كَرِيماً',
        post: 'عَلَى خَلْقِ اللَّهِ.',
        en: "Yūsuf was generous, noble, and compassionate toward Allah's creatures.",
        options: ['مُشْفِقاً', 'مُشْفِقٌ', 'مُشْفِقِينَ', 'مُشْفِقَةً'],
        answer: 0,
        rationales: [
          'Accusative -- predicate of كَانَ, agreeing with the masculine singular subject يُوسُفُ.',
          "Nominative -- wrong case; كَانَ's predicate must be accusative.",
          'Plural -- wrong number; the subject is a single person.',
          'Feminine -- wrong gender; يُوسُفُ is masculine.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَاتْرُكُوا مَا حَصَدْتُمْ فِي سُنْبُلِهِ إِلَّا',
        post: '.',
        en: 'And leave what you harvested in its ear, except a little.',
        options: ['قَلِيلاً', 'قَلِيلٌ', 'قَلِيلَةً', 'قَلِيلُونَ'],
        answer: 0,
        rationales: [
          'Accusative -- the excepted noun after إِلَّا in a positive sentence takes the accusative.',
          'Nominative -- wrong case for this position.',
          'Feminine -- wrong gender; refers to the (masculine) harvest.',
          'Plural -- wrong number; قَلِيلاً here means "a small amount," not "a few people."',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَيَطُولُ هَذَا الْقَحْطُ إِلَى سَبْعِ',
        post: '.',
        en: 'This drought will last seven years.',
        options: ['سِنِينَ', 'سَنَةً', 'سَنَةٌ', 'سِنُونَ'],
        answer: 0,
        rationales: [
          'Plural, oblique form -- matches the multi-year span, and agrees with the genitive سَبْعِ.',
          "Singular 'a year' -- wrong number; the text specifies seven years.",
          'Singular nominative -- wrong case and number.',
          'Plural nominative سِنُونَ -- wrong case; this position needs the genitive سِنِينَ.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَزْرَعُ الْحَقْلَ',
        pre: '',
        post: 'الْحَقْلَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَزْرَعُ', 'يَزْرَعُ', 'تَزْرَعُ', 'نَزْرَعُ'],
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
        base: 'يَزْرَعُ الْحَقْلَ',
        pre: '',
        post: 'الْحَقْلَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَزْرَعُ', 'أَزْرَعُ', 'تَزْرَعُ', 'يَزْرَعُونَ'],
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
        base: 'يَزْرَعُ الْحَقْلَ',
        pre: '',
        post: 'الْحَقْلَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَزْرَعُونَ', 'يَزْرَعُ', 'نَزْرَعُ', 'تَزْرَعُونَ'],
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

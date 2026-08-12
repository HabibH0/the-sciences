// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 16 -- عَلَى
// خَزَائِنِ الأَرْضِ. Printed page 45 (from the heading, right after ch15's
// closing وَخَرَجَ يُوسُفُ بَرِيئاً وَأَكْرَمَهُ الْمَلِكُ) - 47 (ending at the top,
// before ch17's heading جَاءَ إِخْوَةُ يُوسُفَ). Transcribed by hand from the
// scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// Grammar / lexical notes:
//   -- Long parallel sentences (e.g. the وَمَنْ كَانَ حَفِيظاً... / وَمَنْ كَانَ
//      عَلِيماً... pair, and the أَنْ يَتْرُكَ الأُمَرَاءَ يَأْكُلُونَ... sentence) are
//      split at their natural clause boundaries into shorter teaching
//      sentences, same practice as ch11/ch12/ch15 -- no content added.
//   -- خَزَائِن (qs-v2-c16-{008,010,020,023}, "treasuries") is the plural
//      form itself used as the lemma, root خ ز ن (linking it to the
//      already-taught verb خَزَنَ, "to store", ch13) -- its singular
//      (خِزَانَة) never appears in this chapter's text, so it is tagged
//      without a pl atom, same treatment ch13 gave عِجَاف.
//   -- أَمِير ("ruler, official") only ever appears here in its plural
//      الأُمَرَاءَ, but unlike خَزَائِن it is a common, independently useful
//      singular, so it is taught as the singular lemma with pl.def.acc
//      features rather than folded into a plural-only citation form. The
//      page's own footnote glosses الأُمَرَاء as "الْوُلَاةُ وَأَصْحَابُ الْأَمْرِ"
//      (rulers and those in charge of affairs) -- reflected in the gloss.
//   -- وَتَلْبَسُ بُيُوتُهُمْ (qs-v2-c16-007) is active voice as vowelled on the
//      page (تَلْبَسُ, not تُلْبَسُ) -- a personification parallel to the
//      previous sentence's كِلَابُهُمْ تَأْكُلُ ("their dogs eat [well]"): "their
//      houses wear [fine things]," i.e. are decked in finery, while
//      ordinary people can find nothing to eat or wear. Tagged as the
//      active verb it is written as, with the idiom carried in the gloss.
//   -- ﴿اجْعَلْنِي عَلَى خَزَائِنِ الأَرْضِ إِنِّي حَفِيظٌ عَلِيمٌ﴾ (Sūrat Yūsuf 12:55)
//      is split into four <=2-token fragments (qs-v2-c16-{019,020,021,022})
//      per the house convention for Qur'anic quotations.
//   -- يُنْتَفَعُ (qs-v2-c16-010) extends the impf.pass pattern (established
//      qasas-v1 ch14, reused ch12) to a new verb, اِنْتَفَعَ.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ, يُوسُف, عَلِمَ, أَنَّ,
//      نَاس, يَرَى/رَأَى, خَانَ, فِي, اللَّه, لَكِنَّ, لِأَنَّ, لَا, يَخَافُ/خَافَ, أَرْض,
//      وَجَدَ, مَنْ, إِلَّا, أَيْنَ, كَيْفَ, مِنْ, يُرِيدُ/أَرَادَ, أَنْ, تَرَكَ, يَقْدِرُ/قَدَرَ,
//      مَاتَ, حَقّ, قَالَ, لِ, مَلِك, جَعَلَ, هَكَذَا, أَمِين, مِصْر, جِدّ, بَيْت
//      are all already taught and NOT re-listed in newWords here.
//
// 13 new words (أَمَانَة، مَال، خَزَائِن، ضَائِع، أَمِير، كَلْب، لَبِسَ، حَفِيظ،
// اِنْتَفَعَ، جَاعَ، اِسْتَحْيَا، اِسْتَرَاحَ، حَمِدَ).
//
// Page footnote (book_note): the page 45 footnote glosses الأُمَرَاء as
// "الْوُلَاةُ وَأَصْحَابُ الْأَمْرِ" (rulers, those in charge of affairs).
export const CHAPTER = {
  id: 'ch16',
  title: { ar: 'عَلَى خَزَائِنِ الأَرْضِ', en: 'Over the Treasuries of the Land' },
  newWords: [
    'أَمَانَة', 'مَال', 'خَزَائِن', 'ضَائِع', 'أَمِير', 'كَلْب', 'لَبِسَ', 'حَفِيظ',
    'اِنْتَفَعَ', 'جَاعَ', 'اِسْتَحْيَا', 'اِسْتَرَاحَ', 'حَمِدَ',
  ],
  lemmas: {
    'أَمَانَة': { gloss: 'trustworthiness, honesty' },
    'مَال': { gloss: 'wealth, property, money' },
    'خَزَائِن': { gloss: 'treasuries, storehouses' },
    'ضَائِع': { gloss: 'lost, wasted, neglected' },
    'أَمِير': { gloss: 'ruler, official, one in authority', book_note: 'Page footnote glosses الأُمَرَاء as الْوُلَاةُ وَأَصْحَابُ الْأَمْرِ, "rulers and those in charge of affairs."' },
    'كَلْب': { gloss: 'dog' },
    'لَبِسَ': { gloss: 'to wear' },
    'حَفِيظ': { gloss: 'watchful, a careful guardian' },
    'اِنْتَفَعَ': { gloss: 'to benefit, profit (from)' },
    'جَاعَ': { gloss: 'to be hungry, starve' },
    'اِسْتَحْيَا': { gloss: 'to be ashamed, feel shy' },
    'اِسْتَرَاحَ': { gloss: 'to rest, relax' },
    'حَمِدَ': { gloss: 'to praise, thank' },
  },
  paragraphs: [
    {
      en: 'Yūsuf knew that trustworthiness was scarce among people, and that betrayal was common among them. He saw that people betray others where Allah\'s wealth is concerned, and that the land held many treasuries, but they were neglected -- neglected because the rulers did not fear Allah regarding them. So their dogs would eat well, while people could find nothing to eat; and their houses were decked in finery, while people could find nothing to wear. The treasuries of the land benefit no one except one who is both watchful and knowledgeable: whoever is watchful but not knowledgeable does not know where the treasuries are or how to use them, and whoever is knowledgeable but not watchful eats from them and betrays his trust.',
      sentences: [
        {
          id: 'qs-v2-c16-001',
          ar: 'وَكَانَ يُوسُفُ يَعْلَمُ أَنَّ الأَمَانَةَ قَلِيلَةٌ فِي النَّاسِ.',
          en: 'Yūsuf knew that trustworthiness was scarce among people,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'يَعْلَمُ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.3ms', root: 'ع ل م', gloss: 'to know; knew' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الأَمَانَةَ', lemma: 'أَمَانَة', pos: 'noun', features: 'def.acc', root: 'أ م ن', gloss: 'trustworthiness, honesty' },
            { surface: 'قَلِيلَةٌ', lemma: 'قَلِيل', pos: 'adj', features: 'indef.nom.f', root: 'ق ل ل', gloss: 'little, scarce' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', root: 'ن و س', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v2-c16-002',
          ar: 'وَكَانَ يُوسُفُ يَعْلَمُ أَنَّ الْخِيَانَةَ كَثِيرَةٌ فِي النَّاسِ.',
          en: 'and that betrayal was common among them.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'يَعْلَمُ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.3ms', root: 'ع ل م', gloss: 'to know; knew' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْخِيَانَةَ', lemma: 'خِيَانَة', pos: 'noun', features: 'def.acc', root: 'خ و ن', gloss: 'betrayal, treachery' },
            { surface: 'كَثِيرَةٌ', lemma: 'كَثِير', pos: 'adj', features: 'indef.nom.f', root: 'ك ث ر', gloss: 'much, common' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', root: 'ن و س', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v2-c16-003',
          ar: 'وَكَانَ يُوسُفُ يَرَى أَنَّ النَّاسَ يَخُونُونَ فِي أَمْوَالِ اللَّهِ.',
          en: "He saw that people betray others where Allah's wealth is concerned,",
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see; saw, considered' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'acc', root: 'ن و س', gloss: 'the people' },
            { surface: 'يَخُونُونَ', lemma: 'خَانَ', pos: 'verb', features: 'impf.3mp', root: 'خ و ن', gloss: 'to betray; betray' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, regarding' },
            { surface: 'أَمْوَالِ', lemma: 'مَال', pos: 'noun', features: 'pl.gen.constr', root: 'م و ل', gloss: 'wealth of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v2-c16-004',
          ar: 'وَكَانَ يَرَى أَنَّ فِي الأَرْضِ خَزَائِنَ كَثِيرَةً وَلَكِنَّهَا ضَائِعَةٌ.',
          en: 'and that the land held many treasuries, but they were neglected --',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see; saw, considered' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', root: 'أ ر ض', gloss: 'the land' },
            { surface: 'خَزَائِنَ', lemma: 'خَزَائِن', pos: 'noun', features: 'indef.acc', root: 'خ ز ن', gloss: 'treasuries' },
            { surface: 'كَثِيرَةً', lemma: 'كَثِير', pos: 'adj', features: 'indef.acc.f', root: 'ك ث ر', gloss: 'many' },
            { surface: 'وَلَكِنَّهَا', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+3fs', gloss: 'but it (f.)' },
            { surface: 'ضَائِعَةٌ', lemma: 'ضَائِع', pos: 'adj', features: 'indef.nom.f', root: 'ض ي ع', gloss: 'lost, wasted, neglected' },
          ],
        },
        {
          id: 'qs-v2-c16-005',
          ar: 'إِنَّهَا ضَائِعَةٌ لِأَنَّ الأُمَرَاءَ لَا يَخَافُونَ اللَّهَ فِيهَا.',
          en: 'neglected because the rulers did not fear Allah regarding them.',
          tokens: [
            { surface: 'إِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'part+3fs', gloss: 'indeed it' },
            { surface: 'ضَائِعَةٌ', lemma: 'ضَائِع', pos: 'adj', features: 'indef.nom.f', root: 'ض ي ع', gloss: 'lost, wasted, neglected' },
            { surface: 'لِأَنَّ', lemma: 'لِأَنَّ', pos: 'part', features: 'part', root: 'أ ن ن', gloss: 'because' },
            { surface: 'الأُمَرَاءَ', lemma: 'أَمِير', pos: 'noun', features: 'pl.def.acc', root: 'أ م ر', gloss: 'the rulers' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَخَافُونَ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3mp', root: 'خ و ف', gloss: 'to fear; fear' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'regarding them' },
          ],
        },
        {
          id: 'qs-v2-c16-006',
          ar: 'فَتَأْكُلُ كِلَابُهُمْ وَلَا يَجِدُ النَّاسُ مَا يَأْكُلُونَ.',
          en: 'So their dogs would eat well, while people could find nothing to eat;',
          tokens: [
            { surface: 'فَتَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to eat; so eat' },
            { surface: 'كِلَابُهُمْ', lemma: 'كَلْب', pos: 'noun', features: 'pl.nom+3mp', root: 'ك ل ب', gloss: 'their dogs' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَجِدُ', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3ms', root: 'و ج د', gloss: 'to find; finds' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَأْكُلُونَ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to eat; they eat' },
          ],
        },
        {
          id: 'qs-v2-c16-007',
          ar: 'وَتَلْبَسُ بُيُوتُهُمْ وَلَا يَجِدُ النَّاسُ مَا يَلْبَسُونَ.',
          en: 'and their houses were decked in finery, while people could find nothing to wear.',
          tokens: [
            { surface: 'وَتَلْبَسُ', lemma: 'لَبِسَ', pos: 'verb', features: 'conj+impf.3fs', root: 'ل ب س', gloss: 'to wear; and would wear (be decked in finery)' },
            { surface: 'بُيُوتُهُمْ', lemma: 'بَيْت', pos: 'noun', features: 'pl.nom+3mp', root: 'ب ي ت', gloss: 'their houses' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَجِدُ', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3ms', root: 'و ج د', gloss: 'to find; finds' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَلْبَسُونَ', lemma: 'لَبِسَ', pos: 'verb', features: 'impf.3mp', root: 'ل ب س', gloss: 'to wear; they wear' },
          ],
        },
        {
          id: 'qs-v2-c16-008',
          ar: 'وَلَا يَنْفَعُ النَّاسَ بِخَزَائِنِ الأَرْضِ إِلَّا مَنْ كَانَ حَفِيظاً عَلِيماً.',
          en: 'The treasuries of the land benefit no one except one who is both watchful and knowledgeable:',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَنْفَعُ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3ms', root: 'ن ف ع', gloss: 'to benefit; benefits' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'acc', root: 'ن و س', gloss: 'the people' },
            { surface: 'بِخَزَائِنِ', lemma: 'خَزَائِن', pos: 'noun', features: 'prep+gen.constr', root: 'خ ز ن', gloss: 'with the treasuries of' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', root: 'أ ر ض', gloss: 'the land' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; is' },
            { surface: 'حَفِيظاً', lemma: 'حَفِيظ', pos: 'adj', features: 'indef.acc', root: 'ح ف ظ', gloss: 'watchful, a careful guardian' },
            { surface: 'عَلِيماً', lemma: 'عَلِيم', pos: 'adj', features: 'indef.acc', root: 'ع ل م', gloss: 'knowledgeable' },
          ],
        },
        {
          id: 'qs-v2-c16-009',
          ar: 'وَمَنْ كَانَ حَفِيظاً وَمَا كَانَ عَلِيماً،',
          en: 'whoever is watchful but not knowledgeable',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and whoever' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; is' },
            { surface: 'حَفِيظاً', lemma: 'حَفِيظ', pos: 'adj', features: 'indef.acc', root: 'ح ف ظ', gloss: 'watchful, a careful guardian' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; is' },
            { surface: 'عَلِيماً', lemma: 'عَلِيم', pos: 'adj', features: 'indef.acc', root: 'ع ل م', gloss: 'knowledgeable' },
          ],
        },
        {
          id: 'qs-v2-c16-010',
          ar: 'لَا يَعْلَمُ أَيْنَ خَزَائِنُ الأَرْضِ وَكَيْفَ يُنْتَفَعُ بِهَا.',
          en: 'does not know where the treasuries are or how to use them,',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْلَمُ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.3ms', root: 'ع ل م', gloss: 'to know; knows' },
            { surface: 'أَيْنَ', lemma: 'أَيْنَ', pos: 'adv', features: 'adv', gloss: 'where' },
            { surface: 'خَزَائِنُ', lemma: 'خَزَائِن', pos: 'noun', features: 'nom.constr', root: 'خ ز ن', gloss: 'the treasuries of' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', root: 'أ ر ض', gloss: 'the land' },
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'يُنْتَفَعُ', lemma: 'اِنْتَفَعَ', pos: 'verb', features: 'impf.pass.3ms', root: 'ن ف ع', gloss: 'to benefit, profit (from); is benefited from' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'by it' },
          ],
        },
        {
          id: 'qs-v2-c16-011',
          ar: 'وَمَنْ كَانَ عَلِيماً وَمَا كَانَ حَفِيظاً،',
          en: 'and whoever is knowledgeable but not watchful',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and whoever' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; is' },
            { surface: 'عَلِيماً', lemma: 'عَلِيم', pos: 'adj', features: 'indef.acc', root: 'ع ل م', gloss: 'knowledgeable' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; is' },
            { surface: 'حَفِيظاً', lemma: 'حَفِيظ', pos: 'adj', features: 'indef.acc', root: 'ح ف ظ', gloss: 'watchful, a careful guardian' },
          ],
        },
        {
          id: 'qs-v2-c16-012',
          ar: 'يَأْكُلُ مِنْهَا وَيَخُونُ فِيهَا.',
          en: 'eats from them and betrays his trust.',
          tokens: [
            { surface: 'يَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to eat; eats' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from them' },
            { surface: 'وَيَخُونُ', lemma: 'خَانَ', pos: 'verb', features: 'conj+impf.3ms', root: 'خ و ن', gloss: 'to betray; and betrays' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'regarding them' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ يُوسُفُ يَرَى أَنَّ خَزَائِنَ الأَرْضِ ضَائِعَةٌ؟',
          options: ['لِأَنَّ الأُمَرَاءَ لَا يَخَافُونَ اللَّهَ فِيهَا', 'لِأَنَّهَا كَانَتْ فَارِغَةً', 'لِأَنَّ الْمَلِكَ نَسِيَهَا'],
          answer: 0,
          qEn: 'Why did Yūsuf see the treasuries of the land as neglected?',
          optionsEn: ['Because the rulers did not fear Allah regarding them', 'Because they were empty', 'Because the king had forgotten them'],
        },
        {
          q: 'لِمَاذَا كَانَ يُوسُفُ صَالِحاً لِهَذِهِ الْمَهَمَّةِ؟',
          options: ['لِأَنَّهُ كَانَ حَفِيظاً عَلِيماً لَا يَخُونُ وَلَا يَجْهَلُ', 'لِأَنَّهُ كَانَ أَقْوَى رَجُلٍ فِي مِصْرَ', 'لِأَنَّهُ كَانَ صَدِيقَ الْمَلِكِ'],
          answer: 0,
          qEn: 'Why was Yūsuf suited for this task?',
          optionsEn: ['Because he was watchful and knowledgeable -- he neither betrayed trust nor lacked knowledge', 'Because he was the strongest man in Egypt', "Because he was the king's friend"],
        },
      ],
    },
    {
      en: 'Yūsuf was watchful and knowledgeable. He did not want to let the rulers devour the people\'s wealth, he could not bear to see people go hungry and die, and he was never ashamed of the truth. So he said to the king: \'Set me over the treasuries of the land; I will be a watchful guardian, knowledgeable.\' And so Yūsuf became a trustworthy keeper of Egypt\'s treasuries. And the people rested at last and gave great thanks to Allah.',
      sentences: [
        {
          id: 'qs-v2-c16-013',
          ar: 'وَكَانَ يُوسُفُ حَفِيظاً عَلِيماً.',
          en: 'Yūsuf was watchful and knowledgeable.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'حَفِيظاً', lemma: 'حَفِيظ', pos: 'adj', features: 'indef.acc', root: 'ح ف ظ', gloss: 'watchful, a careful guardian' },
            { surface: 'عَلِيماً', lemma: 'عَلِيم', pos: 'adj', features: 'indef.acc', root: 'ع ل م', gloss: 'knowledgeable' },
          ],
        },
        {
          id: 'qs-v2-c16-014',
          ar: 'وَكَانَ يُوسُفُ لَا يُرِيدُ أَنْ يَتْرُكَ الأُمَرَاءَ',
          en: 'He did not want to let the rulers',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3ms', gloss: 'to want; want' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَتْرُكَ', lemma: 'تَرَكَ', pos: 'verb', features: 'impf.3ms', gloss: 'to leave; let' },
            { surface: 'الأُمَرَاءَ', lemma: 'أَمِير', pos: 'noun', features: 'pl.def.acc', root: 'أ م ر', gloss: 'the rulers' },
          ],
        },
        {
          id: 'qs-v2-c16-015',
          ar: 'يَأْكُلُونَ أَمْوَالَ النَّاسِ.',
          en: "devour the people's wealth,",
          tokens: [
            { surface: 'يَأْكُلُونَ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to eat; eat' },
            { surface: 'أَمْوَالَ', lemma: 'مَال', pos: 'noun', features: 'pl.acc.constr', root: 'م و ل', gloss: 'wealth of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', root: 'ن و س', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v2-c16-016',
          ar: 'وَكَانَ يُوسُفُ لَا يَقْدِرُ أَنْ يَرَى النَّاسَ يَجُوعُونَ وَيَمُوتُونَ.',
          en: 'he could not bear to see people go hungry and die,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَقْدِرُ', lemma: 'قَدَرَ', pos: 'verb', features: 'impf.3ms', root: 'ق د ر', gloss: 'to be able; is able' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see; see' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'acc', root: 'ن و س', gloss: 'the people' },
            { surface: 'يَجُوعُونَ', lemma: 'جَاعَ', pos: 'verb', features: 'impf.3mp', root: 'ج و ع', gloss: 'to be hungry, starve; go hungry' },
            { surface: 'وَيَمُوتُونَ', lemma: 'مَاتَ', pos: 'verb', features: 'conj+impf.3mp', root: 'م و ت', gloss: 'to die; and die' },
          ],
        },
        {
          id: 'qs-v2-c16-017',
          ar: 'وَكَانَ يُوسُفُ لَا يَسْتَحِي مِنَ الْحَقِّ.',
          en: 'and he was never ashamed of the truth.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْتَحِي', lemma: 'اِسْتَحْيَا', pos: 'verb', features: 'impf.3ms', root: 'ح ي ي', gloss: 'to be ashamed, feel shy; is ashamed' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْحَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'def.gen', root: 'ح ق ق', gloss: 'the truth' },
          ],
        },
        {
          id: 'qs-v2-c16-018',
          ar: 'فَقَالَ لِلْمَلِكِ:',
          en: "So he said to the king:",
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; so said' },
            { surface: 'لِلْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'prep+def.gen', gloss: 'to the king' },
          ],
        },
        {
          id: 'qs-v2-c16-019',
          ar: '﴿اجْعَلْنِي عَلَى﴾',
          en: "'Set me over",
          tokens: [
            { surface: 'اجْعَلْنِي', lemma: 'جَعَلَ', pos: 'verb', features: 'imp.2ms+1s', root: 'ج ع ل', gloss: 'to make, place, set; place me!' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
          ],
        },
        {
          id: 'qs-v2-c16-020',
          ar: '﴿خَزَائِنِ الأَرْضِ﴾',
          en: 'the treasuries of the land;',
          tokens: [
            { surface: 'خَزَائِنِ', lemma: 'خَزَائِن', pos: 'noun', features: 'gen.constr', root: 'خ ز ن', gloss: 'treasuries of' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', root: 'أ ر ض', gloss: 'the land' },
          ],
        },
        {
          id: 'qs-v2-c16-021',
          ar: '﴿إِنِّي حَفِيظٌ﴾',
          en: 'I will be a watchful guardian,',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'حَفِيظٌ', lemma: 'حَفِيظ', pos: 'adj', features: 'indef.nom', root: 'ح ف ظ', gloss: 'watchful, a careful guardian' },
          ],
        },
        {
          id: 'qs-v2-c16-022',
          ar: '﴿عَلِيمٌ﴾.',
          en: "knowledgeable.'",
          tokens: [
            { surface: 'عَلِيمٌ', lemma: 'عَلِيم', pos: 'adj', features: 'indef.nom', root: 'ع ل م', gloss: 'knowledgeable' },
          ],
        },
        {
          id: 'qs-v2-c16-023',
          ar: 'وَهَكَذَا كَانَ يُوسُفُ أَمِيناً لِخَزَائِنِ مِصْرَ.',
          en: "And so Yūsuf became a trustworthy keeper of Egypt's treasuries.",
          tokens: [
            { surface: 'وَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'conj+adv', gloss: 'and thus' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; became' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'أَمِيناً', lemma: 'أَمِين', pos: 'adj', features: 'indef.acc', root: 'أ م ن', gloss: 'trustworthy' },
            { surface: 'لِخَزَائِنِ', lemma: 'خَزَائِن', pos: 'noun', features: 'prep+gen.constr', root: 'خ ز ن', gloss: 'over the treasuries of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v2-c16-024',
          ar: 'وَاسْتَرَاحَ النَّاسُ جِدًّا وَحَمِدُوا اللَّهَ.',
          en: 'And the people rested at last and gave great thanks to Allah.',
          tokens: [
            { surface: 'وَاسْتَرَاحَ', lemma: 'اِسْتَرَاحَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و ح', gloss: 'to rest, relax; and rested' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, greatly' },
            { surface: 'وَحَمِدُوا', lemma: 'حَمِدَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ح م د', gloss: 'to praise, thank; and praised' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا طَلَبَ يُوسُفُ مِنَ الْمَلِكِ؟',
          options: ['أَنْ يَجْعَلَهُ عَلَى خَزَائِنِ الأَرْضِ', 'أَنْ يُعْطِيَهُ مَالاً كَثِيراً', 'أَنْ يُزَوِّجَهُ اِبْنَتَهُ'],
          answer: 0,
          qEn: 'What did Yūsuf ask of the king?',
          optionsEn: ['To be put in charge of the treasuries of the land', 'To be given a great deal of money', "To marry the king's daughter"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَا يَنْفَعُ النَّاسَ بِخَزَائِنِ الأَرْضِ إِلَّا مَنْ كَانَ',
        post: 'عَلِيماً.',
        en: 'The treasuries of the land benefit no one except one who is watchful and knowledgeable.',
        options: ['حَفِيظاً', 'حَفِيظٌ', 'حَفِيظِينَ', 'حَفِيظَةً'],
        answer: 0,
        rationales: [
          'Accusative -- predicate of كَانَ, agreeing with the masculine singular مَنْ.',
          'Nominative -- wrong case; the predicate of كَانَ must be accusative.',
          'Plural -- wrong number; مَنْ here refers to a single person.',
          'Feminine -- wrong gender; no feminine referent here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ يُوسُفُ لَا يَقْدِرُ أَنْ يَرَى النَّاسَ',
        post: 'وَيَمُوتُونَ.',
        en: 'Yūsuf could not bear to see people go hungry and die.',
        options: ['يَجُوعُونَ', 'يَجُوعُ', 'جَائِعُونَ', 'جَاعُوا'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- agrees with النَّاسَ as the object of يَرَى, parallel to وَيَمُوتُونَ.',
          '3rd masculine singular -- wrong number.',
          'Active participle -- wrong form; the parallel وَيَمُوتُونَ calls for a matching verb, not a participle.',
          'Perfect tense -- wrong tense; the scene is ongoing, matching the imperfect يَمُوتُونَ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَقَالَ لِلْمَلِكِ: اجْعَلْنِي عَلَى خَزَائِنِ الأَرْضِ إِنِّي',
        post: '.',
        en: "He said to the king: 'Set me over the treasuries of the land; I will be a knowledgeable guardian.'",
        options: ['حَفِيظٌ عَلِيمٌ', 'حَفِيظاً عَلِيماً', 'حَافِظٌ عَالِمٌ', 'حَفِيظَةٌ عَلِيمَةٌ'],
        answer: 0,
        rationales: [
          'Nominative -- both are خبر إنّ (predicate of إنّ), which takes the nominative case.',
          'Accusative -- wrong case; the predicate of إنّ is nominative, not accusative.',
          "Different pattern (فَاعِل) -- not the intensive حَفِيظ/عَلِيم forms of the Qur'anic verse.",
          'Feminine -- wrong gender; the speaker, Yūsuf, is masculine.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَسْتَرِيحُ بَعْدَ الْعَمَلِ',
        pre: '',
        post: 'بَعْدَ الْعَمَلِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَسْتَرِيحُ', 'يَسْتَرِيحُ', 'تَسْتَرِيحُ', 'نَسْتَرِيحُ'],
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
        base: 'يَسْتَرِيحُ بَعْدَ الْعَمَلِ',
        pre: '',
        post: 'بَعْدَ الْعَمَلِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَسْتَرِيحُ', 'أَسْتَرِيحُ', 'تَسْتَرِيحُ', 'يَسْتَرِيحُونَ'],
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
        base: 'يَسْتَرِيحُ بَعْدَ الْعَمَلِ',
        pre: '',
        post: 'بَعْدَ الْعَمَلِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَسْتَرِيحُونَ', 'يَسْتَرِيحُ', 'نَسْتَرِيحُ', 'تَسْتَرِيحُونَ'],
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

// القراءة الراشدة, volume one, chapter twenty-five -- شَرٌّ وَخَيْرٌ.
//
// Pages 96-97 (confirmed by the book's own "***" chapter-end divider partway
// down page 97 -- chapter 26, يَوْمٌ مَطِيْرٌ, starts cleanly at the top of
// page 98). Earlier reconnaissance guessed this chapter was a single page;
// rendering ahead to scope it showed three more couplets on page 97,
// attributed in print to "أَبُو الْعَتَاهِيَةِ" (Abu al-'Atahiyah) -- the same
// lesson chapter-23.js's page-92 correction already taught: always render
// through to the divider before finalizing a chapter's scope.
//
// THIS CHAPTER IS VERSE (hikam/aphorism couplets), the book's fifth verse
// chapter after chapter-03.js, chapter-05.js and chapter-21.js -- but unlike
// those three, it is not one continuous narrative poem: it is a string of
// independent two-line maxims (each bayt a self-contained nominal or
// imperative sentence), split into two paragraphs matching the print's own
// grouping -- seven unattributed proverbs (page 96) then three couplets
// explicitly attributed to Abu al-'Atahiyah (page 97). The attribution
// itself is not tokenized, matching how chapter-05.js leaves its own
// closing source note "(مَدَارِجُ الْقِرَاءَةِ)" out of the data.
//
// Same bayt-as-sentence convention as chapter-21.js: each line's two
// hemistichs (right column then left column in print) join into one
// `sentences[]` entry with `،` at the mid-bayt pause and `.` at the bayt
// end. Unlike chapter-21.js's lullaby, most rhyme (qāfiyah) words here keep
// a bare case vowel rather than going fully pausal/silent -- e.g. line 1's
// "الْكَذِبُ"/"الأَدَبُ" both end ـُ, and second-hemistich indefinite
// predicates drop their tanween nunation at the rhyme but keep the case
// vowel ("فَاضِحٌ" tanween in the first hemistich vs. "صَالِحُ" bare damma at
// the rhyme) -- printed exactly as scanned, not normalized. Sentence 5 is
// the one couplet that goes fully silent at both bayt-internal and bayt-
// final rhyme positions ("سَبَبْ" / "لَا يُحَبْ", both sukūn), and sentence 10
// keeps the same poetic alif in place of expected tanween that
// chapter-21.js's "دَائِمَا" already established ("نَفْسِكَا", "مُمْسِكَا").
// `workshop` is omitted for the same reason as the other verse chapters:
// substituting wrong conjugations into two-line maxims risks breaking the
// rhyme rather than testing grammar.
//
// `register` is "gnomic_aphorism_verse" -- nominal equational proverbs in
// paragraph 1, second-person imperative/prohibitive advice in paragraph 2.
//
// Sentence 10 ("مَالَكَ غَيْرُ نَفْسِكَا") is NOT "your wealth is nothing but
// yourself" (which would need "مَالُكَ" with a damma on the lam) -- the scan
// clearly shows a fatha: "مَا لَكَ" is the negation particle "مَا" plus
// "لَكَ" ("for you"), i.e. "you have nothing except yourself", printed
// without a word-gap because alif never ligatures to a following letter
// either way. Tokenized as two words accordingly: "مَا" (lemma "ما-نافية",
// chapter-24.js's own negation-particle lemma, reused as-is) + "لَكَ"
// (lemma "ل", the book's standing prep+pronoun lemma).
//
// Homograph notes -- five new disambiguating keys, all scoped to this
// chapter's own lemma dictionary (chapter-04.js's "كذب" is a VERB "to lie";
// chapter-01.js's "أمر" is a VERB "to order"; chapter-07.js/chapter-09.js's
// "قاتل" is a VERB "to fight"; chapter-09.js's "حذر" is a VERB "to warn";
// chapter-09.js's "خلق" is the noun "creation, mankind" -- none of that
// matches the senses this chapter needs):
//   - "كذب-اسم": the verbal noun "lying, falsehood" (sentences 1 and 7),
//     distinct from chapter-04.js's verb.
//   - "قاتل-صفة": the active-participle adjective "fatal, deadly"
//     ("دَاءٌ قَاتِلُ"), distinct from chapter-07.js's/chapter-09.js's verb
//     "to fight" (a form-III sense, unrelated to this form-I participle).
//   - "خلق-اخلاق": "الأَخْلَاقِ" as "character, morals" (from خُلُق, plural
//     أَخْلَاق), distinct from chapter-09.js's "الخَلْق" = "creation, mankind"
//     -- same root, different vocalization and sense entirely.
//   - "أمر-اسم": "الأُمُوْرِ" as the noun "matters, affairs", distinct from
//     chapter-01.js's verb "to order, instruct".
//   - "حذر-اسم": "حَذَرِ" as the noun "fear, caution", distinct from
//     chapter-09.js's verb "to warn" (a form-II sense).
// Everything else content-bearing is reused as-is from its established
// book-wide sense: "عمر" (age/life, chapter-02.js), "أدب" (good manners,
// chapter-01.js), "بر" (kindness/devotion, chapter-23.js), "مال" (wealth,
// chapter-09.js), "خير" (good/goodness, chapter-02.js/chapter-07.js),
// "غير" (other than, chapter-04.js), "نفس" (self, chapter-10.js/
// chapter-23.js), "أحب" (to love, chapter-09.js -- reused here for the
// PASSIVE "لَا يُحَبْ", same root and dictionary form, voice change only),
// and "ما-نافية" (negation, chapter-24.js).
//
// The five marginal footnotes the book prints for this chapter (خصلة، فاضح،
// عرق (أعراق)، شيمة on page 96, and تأنّى on page 97) are carried into
// `book_note` on their lemmas verbatim, matching chapter-21.js's own
// footnote handling.
export const CHAPTER = {
  id: 'ch25',
  title: {
    ar: 'شَرٌّ وَخَيْرٌ',
    en: 'Bad and Good'
  },
  pages: [
    96,
    97
  ],
  register: 'gnomic_aphorism_verse',
  newWords: [
    'شر',
    'مقال',
    'كذب-اسم',
    'خصلة',
    'بخل',
    'عيب',
    'فاضح',
    'جود',
    'ستر',
    'صالح',
    'عقل',
    'قاضي',
    'عادل',
    'عجب',
    'داء',
    'قاتل-صفة',
    'ضيف',
    'راحل',
    'ظل',
    'زائل',
    'سبب',
    'حب',
    'بخيل',
    'طهارة',
    'خلق-اخلاق',
    'كرم',
    'عرق',
    'نميمة',
    'غدر',
    'شيمة',
    'تأنى',
    'أمر-اسم',
    'سيما',
    'سرور',
    'عجل',
    'حذر-اسم',
    'فوات',
    'ممسك'
  ],
  lemmas: {
    'شر': { root: 'ش ر ر', pos: 'noun', gloss: 'the worst, evil', content: true },
    'مقال': { root: 'ق و ل', pos: 'noun', gloss: 'speech, saying', content: true },
    'كذب-اسم': { root: 'ك ذ ب', pos: 'noun', gloss: 'lying, falsehood', content: true },
    'خير': { root: 'خ ي ر', pos: 'noun', gloss: 'good, goodness; best; good deeds', content: true },
    'خصلة': { root: 'خ ص ل', pos: 'noun', gloss: 'trait, quality', content: true, book_note: 'خَصْلَةً جمع خِصَال: خُلُقٌ فِي الإِنسانِ يكونُ حسناً أو سيّئاً.' },
    'أدب': { root: 'أ د ب', pos: 'noun', gloss: 'good manners, etiquette', content: true },
    'بخل': { root: 'ب خ ل', pos: 'noun', gloss: 'stinginess, miserliness', content: true },
    'عيب': { root: 'ع ي ب', pos: 'noun', gloss: 'flaw, fault, disgrace', content: true },
    'فاضح': { root: 'ف ض ح', pos: 'adj', gloss: 'disgraceful, shameful', content: true, book_note: 'فَاضِحُ: مُخِلٌ بِالْحَيَاءِ.' },
    'جود': { root: 'ج و د', pos: 'noun', gloss: 'generosity', content: true },
    'ستر': { root: 'س ت ر', pos: 'noun', gloss: 'cover, veil', content: true },
    'صالح': { root: 'ص ل ح', pos: 'adj', gloss: 'good, becoming, proper', content: true },
    'عقل': { root: 'ع ق ل', pos: 'noun', gloss: 'reason, intellect', content: true },
    'قاضي': { root: 'ق ض ي', pos: 'noun', gloss: 'judge', content: true },
    'عادل': { root: 'ع د ل', pos: 'adj', gloss: 'just', content: true },
    'عجب': { root: 'ع ج ب', pos: 'noun', gloss: 'vanity, self-conceit', content: true },
    'داء': { root: 'د و ي', pos: 'noun', gloss: 'disease, ailment', content: true },
    'قاتل-صفة': { root: 'ق ت ل', pos: 'adj', gloss: 'fatal, deadly', content: true },
    'عمر': { root: 'ع م ر', pos: 'noun', gloss: 'age, life, lifespan', content: true },
    'ضيف': { root: 'ض ي ف', pos: 'noun', gloss: 'guest', content: true },
    'راحل': { root: 'ر ح ل', pos: 'adj', gloss: 'departing', content: true },
    'مال': { root: 'م و ل', pos: 'noun', gloss: 'wealth, money', content: true },
    'ظل': { root: 'ظ ل ل', pos: 'noun', gloss: 'shadow', content: true },
    'زائل': { root: 'ز و ل', pos: 'adj', gloss: 'vanishing, fleeting', content: true },
    'بر': { root: 'ب ر ر', pos: 'noun', gloss: 'kindness, devotion, piety', content: true },
    'حب': { root: 'ح ب ب', pos: 'noun', gloss: 'love', content: true },
    'سبب': { root: 'س ب ب', pos: 'noun', gloss: 'cause, reason', content: true },
    'إن': { root: '—', pos: 'part', gloss: 'indeed, verily', content: false },
    'بخيل': { root: 'ب خ ل', pos: 'noun', gloss: 'miser', content: true },
    'لا': { root: '—', pos: 'part', gloss: 'not, no', content: false },
    'أحب': { root: 'ح ب ب', pos: 'verb', gloss: 'to love, be fond of', content: true },
    'طهارة': { root: 'ط ه ر', pos: 'noun', gloss: 'purity', content: true },
    'خلق-اخلاق': { root: 'خ ل ق', pos: 'noun', gloss: 'character, morals', content: true },
    'من': { root: '—', pos: 'prep', gloss: 'from, of', content: false },
    'كرم': { root: 'ك ر م', pos: 'noun', gloss: 'nobility, generosity', content: true },
    'عرق': { root: 'ع ر ق', pos: 'noun', gloss: 'root, lineage', content: true, book_note: 'عِرْقٌ جمع أَعْرَاق: أصلُ كلِّ شيء. ويقال: تداركته أعراقُ صِدقٍ أو سوءٍ، ومجرى الدم في الجسد.' },
    'نميمة': { root: 'ن م م', pos: 'noun', gloss: 'backbiting, tale-carrying', content: true },
    'غدر': { root: 'غ د ر', pos: 'noun', gloss: 'treachery, betrayal', content: true },
    'شيمة': { root: 'ش ي م', pos: 'noun', gloss: 'trait, nature, disposition', content: true, book_note: 'شِيْمَةٌ جمع شِيَم: غريزة وطبيعة وسجية.' },
    'تأنى': { root: 'أ ن ي', pos: 'verb', gloss: 'to be deliberate, patient', content: true, book_note: 'تَأَنَّىٰ يَتَأَنَّى: أَمْهَلَ فُلاناً وترَفَّقَ به.' },
    'في': { root: '—', pos: 'prep', gloss: 'in', content: false },
    'أمر-اسم': { root: 'أ م ر', pos: 'noun', gloss: 'matter, affair', content: true },
    'سيما': { root: '—', pos: 'part', gloss: 'especially (in لا سيما)', content: false },
    'سرور': { root: 'س ر ر', pos: 'noun', gloss: 'joy, happiness', content: true },
    'عجل': { root: 'ع ج ل', pos: 'verb', gloss: 'to hasten', content: true },
    'إلى': { root: '—', pos: 'prep', gloss: 'to, towards', content: false },
    'حذر-اسم': { root: 'ح ذ ر', pos: 'noun', gloss: 'fear, caution', content: true },
    'فوات': { root: 'ف و ت', pos: 'noun', gloss: 'missing out, loss', content: true },
    'ما-نافية': { root: '—', pos: 'part', gloss: 'not, there is not', content: false },
    'ل': { root: '—', pos: 'prep', gloss: 'to, for', content: false },
    'غير': { root: 'غ ي ر', pos: 'noun', gloss: 'other than, not', content: true },
    'نفس': { root: 'ن ف س', pos: 'noun', gloss: 'self, soul', content: true },
    'كان': { root: 'ك و ن', pos: 'verb', gloss: 'to be', content: true },
    'عن': { root: '—', pos: 'prep', gloss: 'about, from; with', content: false },
    'ممسك': { root: 'م س ك', pos: 'adj', gloss: 'withholding, holding back', content: true }
  },
  paragraphs: [
    {
      id: 'p1',
      lines: true,
      en: 'The worst of speech is lying; the best of traits is good manners. Stinginess is a disgraceful flaw; generosity is a becoming veil. Reason is a just judge; vanity is a fatal disease. Life is a departing guest; wealth is a vanishing shadow. Kindness is a cause for love; indeed, the miser is not loved. Purity of character comes from noble lineage. Lying, backbiting, and treachery are the worst of traits.',
      sentences: [
        { id: 'qr1-25-001', page: 96, ar: 'شَرُّ الْمَقَالِ الْكَذِبُ، خَيْرُ الْخِصَالِ الأَدَبُ.', en: 'The worst of speech is lying; the best of traits is good manners.',
          tokens: [
            { surface: 'شَرُّ', lemma: 'شر', features: 'nom.constr', root: 'ش ر ر', pos: 'noun', gloss: 'the worst of' },
            { surface: 'الْمَقَالِ', lemma: 'مقال', features: 'def.gen', root: 'ق و ل', pos: 'noun', gloss: 'speech' },
            { surface: 'الْكَذِبُ', lemma: 'كذب-اسم', features: 'def.nom', root: 'ك ذ ب', pos: 'noun', gloss: 'lying, falsehood' },
            { surface: 'خَيْرُ', lemma: 'خير', features: 'nom.constr', root: 'خ ي ر', pos: 'noun', gloss: 'the best of' },
            { surface: 'الْخِصَالِ', lemma: 'خصلة', features: 'pl.def.gen', root: 'خ ص ل', pos: 'noun', gloss: 'traits' },
            { surface: 'الأَدَبُ', lemma: 'أدب', features: 'def.nom', root: 'أ د ب', pos: 'noun', gloss: 'good manners' }
          ]
        },
        { id: 'qr1-25-002', page: 96, ar: 'الْبُخْلُ عَيْبٌ فَاضِحٌ، وَالْجُوْدُ سِتْرٌ صَالِحُ.', en: 'Stinginess is a disgraceful flaw; generosity is a becoming veil.',
          tokens: [
            { surface: 'الْبُخْلُ', lemma: 'بخل', features: 'def.nom', root: 'ب خ ل', pos: 'noun', gloss: 'stinginess' },
            { surface: 'عَيْبٌ', lemma: 'عيب', features: 'indef.nom', root: 'ع ي ب', pos: 'noun', gloss: 'a flaw' },
            { surface: 'فَاضِحٌ', lemma: 'فاضح', features: 'indef.nom', root: 'ف ض ح', pos: 'adj', gloss: 'disgraceful' },
            { surface: 'وَالْجُوْدُ', lemma: 'جود', features: 'conj+def.nom', root: 'ج و د', pos: 'noun', gloss: 'and generosity' },
            { surface: 'سِتْرٌ', lemma: 'ستر', features: 'indef.nom', root: 'س ت ر', pos: 'noun', gloss: 'a cover, veil' },
            { surface: 'صَالِحُ', lemma: 'صالح', features: 'indef.nom', root: 'ص ل ح', pos: 'adj', gloss: 'good, becoming' }
          ]
        },
        { id: 'qr1-25-003', page: 96, ar: 'الْعَقْلُ قَاضٍ عَادِلُ، وَالْعُجْبُ دَاءٌ قَاتِلُ.', en: 'Reason is a just judge; vanity is a fatal disease.',
          tokens: [
            { surface: 'الْعَقْلُ', lemma: 'عقل', features: 'def.nom', root: 'ع ق ل', pos: 'noun', gloss: 'reason, intellect' },
            { surface: 'قَاضٍ', lemma: 'قاضي', features: 'indef.nom', root: 'ق ض ي', pos: 'noun', gloss: 'a judge' },
            { surface: 'عَادِلُ', lemma: 'عادل', features: 'indef.nom', root: 'ع د ل', pos: 'adj', gloss: 'just' },
            { surface: 'وَالْعُجْبُ', lemma: 'عجب', features: 'conj+def.nom', root: 'ع ج ب', pos: 'noun', gloss: 'and vanity' },
            { surface: 'دَاءٌ', lemma: 'داء', features: 'indef.nom', root: 'د و ي', pos: 'noun', gloss: 'a disease' },
            { surface: 'قَاتِلُ', lemma: 'قاتل-صفة', features: 'indef.nom', root: 'ق ت ل', pos: 'adj', gloss: 'fatal, deadly' }
          ]
        },
        { id: 'qr1-25-004', page: 96, ar: 'الْعُمْرُ ضَيْفٌ رَاحِلُ، وَالْمَالُ ظِلٌّ زَائِلُ.', en: 'Life is a departing guest; wealth is a vanishing shadow.',
          tokens: [
            { surface: 'الْعُمْرُ', lemma: 'عمر', features: 'def.nom', root: 'ع م ر', pos: 'noun', gloss: 'life, lifespan' },
            { surface: 'ضَيْفٌ', lemma: 'ضيف', features: 'indef.nom', root: 'ض ي ف', pos: 'noun', gloss: 'a guest' },
            { surface: 'رَاحِلُ', lemma: 'راحل', features: 'indef.nom', root: 'ر ح ل', pos: 'adj', gloss: 'departing' },
            { surface: 'وَالْمَالُ', lemma: 'مال', features: 'conj+def.nom', root: 'م و ل', pos: 'noun', gloss: 'and wealth' },
            { surface: 'ظِلٌّ', lemma: 'ظل', features: 'indef.nom', root: 'ظ ل ل', pos: 'noun', gloss: 'a shadow' },
            { surface: 'زَائِلُ', lemma: 'زائل', features: 'indef.nom', root: 'ز و ل', pos: 'adj', gloss: 'vanishing, fleeting' }
          ]
        },
        { id: 'qr1-25-005', page: 96, ar: 'الْبِرُّ لِلْحُبِّ سَبَبْ، إِنَّ الْبَخِيْلَ لَا يُحَبْ.', en: 'Kindness is a cause for love; indeed, the miser is not loved.',
          tokens: [
            { surface: 'الْبِرُّ', lemma: 'بر', features: 'def.nom', root: 'ب ر ر', pos: 'noun', gloss: 'kindness, devotion' },
            { surface: 'لِلْحُبِّ', lemma: 'حب', features: 'prep+def.gen', root: 'ح ب ب', pos: 'noun', gloss: 'for love' },
            { surface: 'سَبَبْ', lemma: 'سبب', features: 'indef.nom', root: 'س ب ب', pos: 'noun', gloss: 'a cause' },
            { surface: 'إِنَّ', lemma: 'إن', features: 'part', root: '—', pos: 'part', gloss: 'indeed' },
            { surface: 'الْبَخِيْلَ', lemma: 'بخيل', features: 'def.acc', root: 'ب خ ل', pos: 'noun', gloss: 'the miser' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'يُحَبْ', lemma: 'أحب', features: 'pass.impf.3ms', root: 'ح ب ب', pos: 'verb', gloss: 'is loved' }
          ]
        },
        { id: 'qr1-25-006', page: 96, ar: 'طَهَارَةُ الأَخْلَاقِ، مِنْ كَرَمِ الأَعْرَاقِ.', en: 'Purity of character comes from noble lineage.',
          tokens: [
            { surface: 'طَهَارَةُ', lemma: 'طهارة', features: 'nom.constr', root: 'ط ه ر', pos: 'noun', gloss: 'the purity of' },
            { surface: 'الأَخْلَاقِ', lemma: 'خلق-اخلاق', features: 'pl.def.gen', root: 'خ ل ق', pos: 'noun', gloss: 'character, morals' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'كَرَمِ', lemma: 'كرم', features: 'gen.constr', root: 'ك ر م', pos: 'noun', gloss: 'the nobility of' },
            { surface: 'الأَعْرَاقِ', lemma: 'عرق', features: 'pl.def.gen', root: 'ع ر ق', pos: 'noun', gloss: 'lineages, roots' }
          ]
        },
        { id: 'qr1-25-007', page: 96, ar: 'الْكِذْبُ وَالنَّمِيْمَةُ، وَالْغَدْرُ شَرُّ شِيْمَةٍ.', en: 'Lying, backbiting, and treachery are the worst of traits.',
          tokens: [
            { surface: 'الْكِذْبُ', lemma: 'كذب-اسم', features: 'def.nom', root: 'ك ذ ب', pos: 'noun', gloss: 'lying' },
            { surface: 'وَالنَّمِيْمَةُ', lemma: 'نميمة', features: 'conj+def.nom', root: 'ن م م', pos: 'noun', gloss: 'and backbiting' },
            { surface: 'وَالْغَدْرُ', lemma: 'غدر', features: 'conj+def.nom', root: 'غ د ر', pos: 'noun', gloss: 'and treachery' },
            { surface: 'شَرُّ', lemma: 'شر', features: 'nom.constr', root: 'ش ر ر', pos: 'noun', gloss: 'the worst of' },
            { surface: 'شِيْمَةٍ', lemma: 'شيمة', features: 'indef.gen', root: 'ش ي م', pos: 'noun', gloss: 'a trait' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَا هُوَ خَيْرُ الْخِصَالِ عِنْدَ الشَّاعِرِ؟',
          options: [ 'الأَدَبُ', 'الْمَالُ', 'الْعِلْمُ' ],
          answer: 0,
          qEn: 'What does the poet say is the best of traits?',
          optionsEn: [ 'Good manners', 'Wealth', 'Knowledge' ]
        },
        {
          q: 'بِمَاذَا شَبَّهَ الشَّاعِرُ الْمَالَ؟',
          options: [ 'بِظِلٍّ زَائِلٍ', 'بِضَيْفٍ رَاحِلٍ', 'بِدَاءٍ قَاتِلٍ' ],
          answer: 0,
          qEn: 'What did the poet compare wealth to?',
          optionsEn: [ 'A vanishing shadow', 'A departing guest', 'A fatal disease' ]
        }
      ]
    },
    {
      id: 'p2',
      lines: true,
      en: "Be deliberate in matters, especially in times of joy -- but hasten to good deeds, for fear of missing them. You have nothing but yourself; do not withhold from it. (Abu al-'Atahiyah)",
      sentences: [
        { id: 'qr1-25-008', page: 97, ar: 'تَأَنَّ فِي الأُمُوْرِ، لَا سِيَّمَا السُّرُوْرِ.', en: 'Be deliberate in matters, especially in times of joy.',
          tokens: [
            { surface: 'تَأَنَّ', lemma: 'تأنى', features: 'imp.2ms', root: 'أ ن ي', pos: 'verb', gloss: 'be deliberate, patient!' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الأُمُوْرِ', lemma: 'أمر-اسم', features: 'pl.def.gen', root: 'أ م ر', pos: 'noun', gloss: 'matters, affairs' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'not, no' },
            { surface: 'سِيَّمَا', lemma: 'سيما', features: 'part', root: '—', pos: 'part', gloss: 'especially' },
            { surface: 'السُّرُوْرِ', lemma: 'سرور', features: 'def.gen', root: 'س ر ر', pos: 'noun', gloss: 'joy, happiness' }
          ]
        },
        { id: 'qr1-25-009', page: 97, ar: 'وَاعْجَلْ إِلَى الْخَيْرَاتِ، مِنْ حَذَرِ الْفَوَاتِ.', en: 'But hasten to good deeds, for fear of missing them.',
          tokens: [
            { surface: 'وَاعْجَلْ', lemma: 'عجل', features: 'conj+imp.2ms', root: 'ع ج ل', pos: 'verb', gloss: 'and hasten!' },
            { surface: 'إِلَى', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to, towards' },
            { surface: 'الْخَيْرَاتِ', lemma: 'خير', features: 'pl.def.acc', root: 'خ ي ر', pos: 'noun', gloss: 'good deeds' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'for, out of' },
            { surface: 'حَذَرِ', lemma: 'حذر-اسم', features: 'gen.constr', root: 'ح ذ ر', pos: 'noun', gloss: 'fear of' },
            { surface: 'الْفَوَاتِ', lemma: 'فوات', features: 'def.gen', root: 'ف و ت', pos: 'noun', gloss: 'missing out, loss' }
          ]
        },
        { id: 'qr1-25-010', page: 97, ar: 'مَالَكَ غَيْرُ نَفْسِكَا، لَا تَكُ عَنْهَا مُمْسِكَا.', en: 'You have nothing but yourself; do not withhold from it.',
          tokens: [
            { surface: 'مَا', lemma: 'ما-نافية', features: 'part', root: '—', pos: 'part', gloss: 'not, there is not' },
            { surface: 'لَكَ', lemma: 'ل', features: 'prep+2ms', root: '—', pos: 'prep', gloss: 'for you' },
            { surface: 'غَيْرُ', lemma: 'غير', features: 'nom', root: 'غ ي ر', pos: 'noun', gloss: 'other than' },
            { surface: 'نَفْسِكَا', lemma: 'نفس', features: 'gen+2ms', root: 'ن ف س', pos: 'noun', gloss: 'yourself' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'تَكُ', lemma: 'كان', features: 'impf.2ms', root: 'ك و ن', pos: 'verb', gloss: 'be' },
            { surface: 'عَنْهَا', lemma: 'عن', features: 'prep+3fs', root: '—', pos: 'prep', gloss: 'from it' },
            { surface: 'مُمْسِكَا', lemma: 'ممسك', features: 'indef.acc', root: 'م س ك', pos: 'adj', gloss: 'withholding' }
          ]
        }
      ],
      checks: [
        {
          q: 'بِمَاذَا يَنْصَحُ أَبُو الْعَتَاهِيَةِ فِيْمَا يَخُصُّ الْخَيْرَاتِ؟',
          options: [ 'بِالْمُسَارَعَةِ إِلَيْهَا خَوْفَ الْفَوَاتِ', 'بِتَأْجِيْلِهَا', 'بِتَرْكِهَا لِغَيْرِهِ' ],
          answer: 0,
          qEn: "What does Abu al-'Atahiyah advise regarding good deeds?",
          optionsEn: [ 'To hasten to them for fear of missing them', 'To postpone them', 'To leave them to someone else' ]
        }
      ]
    }
  ]
};

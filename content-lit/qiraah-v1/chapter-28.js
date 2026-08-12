// القراءة الراشدة, volume one, chapter twenty-eight -- الْبَرِيْدُ (٢).
//
// Pages 104-106 (confirmed by the book's own "***" divider partway down
// page 106 -- chapter 29, مَنْ يَضَعُ الْحَجَرَ؟, starts cleanly at the top
// of page 107 with a photo of the Kaaba). Same title as chapter-27.js --
// the print marks this "(٢)" under "الْبَرِيْدُ", a second installment on
// the same topic, continuing straight on from chapter-27.js's "(١)" with
// no narrative gap: same two speakers (Khalid and Tariq), same register.
// English title distinguishes the two as "The Post" / "The Post (II)".
//
// register: 'dialogue', matching chapter-04.js/chapter-11.js/chapter-27.js.
// Where chapter-27.js traced a single letter's whole journey, this
// chapter turns to the postman himself: what he looks like (grey
// uniform, brass buttons, turban, leather satchel stuffed with mail),
// a second kind of postman who delivers telegrams by red bicycle instead
// of on foot, why one postman can't cover a whole city (many postmen,
// one per district), and how the post office affords wages and
// equipment for all of them (the postage stamp fee) -- closing with
// Khalid thanking Tariq and planning to write to his own friend Jameel,
// with Tariq happy to help.
//
// Homograph notes -- four new disambiguating keys, all against dict
// entries already on the books with an unrelated sense under the same
// spelling:
//   - "قدر-فعل" (paragraph 3, "كَيْفَ يَقْدِرُ رَجُلٌ وَاحِدٌ" -- "how can
//     one man manage...") is the Form I verb "to be able, have power
//     over" -- distinct from chapter-06.js's "قدر" = "pot, cooking-pot"
//     (same root, wholly unrelated noun).
//   - "ظهر-فعل" (paragraph 1, "عِمَامَتُهُ تَظْهَرُ مِنْ بَعِيْدٍ" -- "his
//     turban shows from afar") is the verb "to appear, be visible" --
//     distinct from chapter-06.js's "ظهر" = "Ẓuhr, midday" (the prayer
//     name, same root, unrelated derived sense).
//   - "طلب-فعل" (paragraph 1, "إِذَا طَلَبْتَ كِتَاباً" -- "if you ordered a
//     book") is the Form I verb "to request, order" -- distinct from
//     chapter-03.js's "طلب" = "seeking, pursuit" (the noun/maṣdar sense
//     used there in a book_note idiom).
//   - "سر-فعل" (paragraph 5, "يَسُرُّنِيْ أَنْ أُسَاعِدَكَ" -- "it pleases me
//     to help you") is the Form I verb "to please, gladden" -- distinct
//     from chapter-09.js's/chapter-22.js's "سر" = "secret; secretly"
//     (same root, unrelated noun sense).
//   - "جميل-اسم" (paragraph 5, "صَدِيْقِيْ جَمِيْلٍ" -- "my friend Jameel")
//     is the proper name -- distinct from the adjective "جميل" ("beautiful,
//     nice") already established in chapter-04.js and elsewhere.
// "مثل" (paragraph 2, "يَرْتَدِيْ مِثْلَ حُلَّةِ السَّاعِيْ" -- "wearing [the]
// like of the postman's uniform", i.e. "wearing the same kind of
// uniform as the postman") reuses chapter-03.js's existing noun entry
// as-is -- same word, same root, just its ordinary construct-noun use
// ("the likeness of...") rather than the book_note idiom chapter-03.js
// happened to introduce it with.
export const CHAPTER = {
  id: 'ch28',
  title: {
    ar: 'الْبَرِيْدُ',
    en: 'The Post (II)'
  },
  pages: [
    104,
    105,
    106
  ],
  register: 'dialogue',
  newWords: [
    'ارتدى',
    'حلة',
    'لون',
    'رمادي',
    'زر',
    'نحاسي',
    'عمامة',
    'حقيبة',
    'جلد',
    'ملآن',
    'ورقة',
    'لمع',
    'ظهر-فعل',
    'اشتاق',
    'خصوصا',
    'دراجة',
    'مستعجل',
    'وزع',
    'برقية',
    'قدر-فعل',
    'ناحية',
    'انفق',
    'اجرة',
    'مفيد',
    'اصلح',
    'كرامة',
    'سر-فعل',
    'طلب-فعل',
    'جميل-اسم'
  ],
  lemmas: {
    خالد: { root: '—', pos: 'proper', gloss: 'Khalid (name)', content: false },
    كيف: { root: 'ك ي ف', pos: 'part', gloss: 'how', content: false },
    كان: { root: 'ك و ن', pos: 'verb', gloss: 'to be', content: true },
    ساعي: { root: 'س ع ي', pos: 'noun', gloss: 'postman, courier', content: true },
    يا: { root: '—', pos: 'part', gloss: 'O (vocative)', content: false },
    طارق: { root: '—', pos: 'proper', gloss: 'Tariq (name)', content: false },
    أنا: { root: '—', pos: 'noun', gloss: 'I', content: false },
    'ما-نافية': { root: '—', pos: 'part', gloss: 'not', content: false },
    ما: { root: '—', pos: 'rel', gloss: 'what, that which', content: false },
    'أما': { root: '—', pos: 'part', gloss: 'as for; is it not that...?', content: false },
    أيضا: { root: '—', pos: 'adv', gloss: 'also', content: true },
    'لا': { root: '—', pos: 'part', gloss: 'not, no', content: false },
    بل: { root: '—', pos: 'part', gloss: 'rather', content: false },
    رأى: { root: 'ر أ ي', pos: 'verb', gloss: 'to see', content: true },
    قط: { root: '—', pos: 'adv', gloss: 'ever, at all', content: true },
    رجل: { root: 'ر ج ل', pos: 'noun', gloss: 'man', content: true },
    ارتدى: { root: 'ر د ي', pos: 'verb', gloss: 'to wear', content: true },
    حلة: { root: 'ح ل ل', pos: 'noun', gloss: 'uniform, suit', content: true },
    لون: { root: 'ل و ن', pos: 'noun', gloss: 'color', content: true },
    رمادي: { root: 'ر م د', pos: 'adj', gloss: 'grey, ash-colored', content: true },
    في: { root: '—', pos: 'prep', gloss: 'in', content: false },
    زر: { root: 'ز ر ر', pos: 'noun', gloss: 'button', content: true },
    نحاسي: { root: 'ن ح س', pos: 'adj', gloss: 'brass, coppery', content: true },
    على: { root: '—', pos: 'prep', gloss: 'on', content: false },
    رأس: { root: 'ر أ س', pos: 'noun', gloss: 'head', content: true },
    عمامة: { root: 'ع م م', pos: 'noun', gloss: 'turban', content: true },
    حمل: { root: 'ح م ل', pos: 'verb', gloss: 'to carry', content: true },
    حقيبة: { root: 'ح ق ب', pos: 'noun', gloss: 'bag, satchel', content: true },
    من: { root: '—', pos: 'prep', gloss: 'from', content: false },
    جلد: { root: 'ج ل د', pos: 'noun', gloss: 'leather, hide', content: true },
    نعم: { root: '—', pos: 'part', gloss: 'yes', content: false },
    قد: { root: '—', pos: 'part', gloss: 'indeed, already', content: false },
    هو: { root: '—', pos: 'noun', gloss: 'he, it', content: false },
    ملآن: { root: 'م ل أ', pos: 'adj', gloss: 'full', content: true },
    ورقة: { root: 'و ر ق', pos: 'noun', gloss: 'paper', content: true },
    ب: { root: '—', pos: 'prep', gloss: 'with, by', content: false },
    لمع: { root: 'ل م ع', pos: 'verb', gloss: 'to gleam, shine', content: true },
    'ظهر-فعل': { root: 'ظ ه ر', pos: 'verb', gloss: 'to appear, be visible', content: true },
    بعيد: { root: 'ب ع د', pos: 'adj', gloss: 'far', content: true },
    ذلك: { root: '—', pos: 'dem', gloss: 'that', content: false },
    بريد: { root: 'ب ر د', pos: 'noun', gloss: 'post, mail', content: true },
    ناس: { root: '—', pos: 'noun', gloss: 'people', content: true },
    انتظر: { root: 'ن ظ ر', pos: 'verb', gloss: 'to wait for', content: true },
    جدا: { root: '—', pos: 'adv', gloss: 'very much', content: true },
    اشتاق: { root: 'ش و ق', pos: 'verb', gloss: 'to yearn, long for', content: true },
    الى: { root: '—', pos: 'prep', gloss: 'to', content: false },
    خصوصا: { root: 'خ ص ص', pos: 'adv', gloss: 'especially', content: true },
    قرية: { root: 'ق ر ي', pos: 'noun', gloss: 'village', content: true },
    انت: { root: '—', pos: 'noun', gloss: 'you', content: false },
    إذا: { root: '—', pos: 'part', gloss: 'if', content: false },
    كتب: { root: 'ك ت ب', pos: 'verb', gloss: 'to write', content: true },
    كتاب: { root: 'ك ت ب', pos: 'noun', gloss: 'book; letter', content: true },
    جواب: { root: 'ج و ب', pos: 'noun', gloss: 'answer, response', content: true },
    'طلب-فعل': { root: 'ط ل ب', pos: 'verb', gloss: 'to request, order', content: true },
    تاجر: { root: 'ت ج ر', pos: 'noun', gloss: 'merchant', content: true },
    آخر: { root: 'أ خ ر', pos: 'adj', gloss: 'another, other', content: true },
    مثل: { root: 'م ث ل', pos: 'noun', gloss: 'likeness, example', content: true },
    لكن: { root: '—', pos: 'part', gloss: 'but', content: false },
    ليس: { root: '—', pos: 'verb', gloss: 'is not', content: false },
    عند: { root: '—', pos: 'prep', gloss: 'with, at, has', content: false },
    دراجة: { root: 'د ر ج', pos: 'noun', gloss: 'bicycle', content: true },
    احمر: { root: 'ح م ر', pos: 'adj', gloss: 'red', content: true },
    ذهب: { root: 'ذ ه ب', pos: 'verb', gloss: 'to go', content: true },
    سرعة: { root: 'س ر ع', pos: 'noun', gloss: 'speed, quickness', content: true },
    كأن: { root: '—', pos: 'part', gloss: 'as if', content: false },
    مستعجل: { root: 'ع ج ل', pos: 'adj', gloss: 'in a hurry', content: true },
    وزع: { root: 'و ز ع', pos: 'verb', gloss: 'to distribute', content: true },
    برقية: { root: 'ب ر ق', pos: 'noun', gloss: 'telegram', content: true },
    مكان: { root: 'ك و ن', pos: 'noun', gloss: 'place', content: true },
    وصل: { root: 'و ص ل', pos: 'verb', gloss: 'to arrive', content: true },
    سريع: { root: 'س ر ع', pos: 'adj', gloss: 'fast, quick', content: true },
    أن: { root: '—', pos: 'part', gloss: 'that; to (subjunctive)', content: false },
    ارسل: { root: 'ر س ل', pos: 'verb', gloss: 'to send', content: true },
    إلا: { root: '—', pos: 'part', gloss: 'except, only', content: false },
    عرف: { root: 'ع ر ف', pos: 'verb', gloss: 'to know, recognize', content: true },
    'قدر-فعل': { root: 'ق د ر', pos: 'verb', gloss: 'to be able, have power over', content: true },
    واحد: { root: 'و ح د', pos: 'num', gloss: 'one', content: true },
    جميع: { root: 'ج م ع', pos: 'noun', gloss: 'all, the whole of', content: true },
    ناحية: { root: 'ن ح و', pos: 'noun', gloss: 'district, direction', content: true },
    مدينة: { root: 'م د ن', pos: 'noun', gloss: 'city', content: true },
    كثير: { root: 'ك ث ر', pos: 'adj', gloss: 'much, many', content: true },
    كل: { root: 'ك ل ل', pos: 'noun', gloss: 'each, every', content: true },
    حي: { root: 'ح ي ي', pos: 'noun', gloss: 'neighborhood, quarter', content: true },
    بلد: { root: 'ب ل د', pos: 'noun', gloss: 'town, city', content: true },
    انفق: { root: 'ن ف ق', pos: 'verb', gloss: 'to spend', content: true },
    مال: { root: 'م و ل', pos: 'noun', gloss: 'money, wealth', content: true },
    خدم: { root: 'خ د م', pos: 'verb', gloss: 'to serve', content: true },
    مجانا: { root: 'م ج ن', pos: 'adv', gloss: 'free of charge', content: true },
    ركب: { root: 'ر ك ب', pos: 'verb', gloss: 'to ride', content: true },
    اين: { root: '—', pos: 'part', gloss: 'where', content: false },
    اتى: { root: 'أ ت ي', pos: 'verb', gloss: 'to come', content: true },
    هذه: { root: '—', pos: 'dem', gloss: 'this (f.)', content: false },
    إن: { root: '—', pos: 'part', gloss: 'indeed, verily', content: false },
    مكتب: { root: 'ك ت ب', pos: 'noun', gloss: 'office', content: true },
    اخذ: { root: 'أ خ ذ', pos: 'verb', gloss: 'to take', content: true },
    اجرة: { root: 'أ ج ر', pos: 'noun', gloss: 'fee, fare', content: true },
    'من-استفهام': { root: '—', pos: 'part', gloss: 'who, whoever', content: false },
    متى: { root: '—', pos: 'part', gloss: 'when', content: false },
    دفع: { root: 'د ف ع', pos: 'verb', gloss: 'to pay, push', content: true },
    أخ: { root: 'أ خ و', pos: 'noun', gloss: 'brother', content: true },
    هذا: { root: '—', pos: 'dem', gloss: 'this (m.)', content: false },
    اشترى: { root: 'ش ر ي', pos: 'verb', gloss: 'to buy', content: true },
    طابع: { root: 'ط ب ع', pos: 'noun', gloss: 'postage stamp', content: true },
    شكر: { root: 'ش ك ر', pos: 'verb', gloss: 'to thank', content: true },
    حديث: { root: 'ح د ث', pos: 'noun', gloss: 'talk, account, conversation', content: true },
    مفيد: { root: 'ف ي د', pos: 'adj', gloss: 'useful', content: true },
    صديق: { root: 'ص د ق', pos: 'noun', gloss: 'friend', content: true },
    'جميل-اسم': { root: '—', pos: 'proper', gloss: 'Jameel (name)', content: false },
    جاء: { root: 'ج ي أ', pos: 'verb', gloss: 'to come', content: true },
    اصلح: { root: 'ص ل ح', pos: 'verb', gloss: 'to fix, correct', content: true },
    حب: { root: 'ح ب ب', pos: 'noun', gloss: 'love', content: true },
    كرامة: { root: 'ك ر م', pos: 'noun', gloss: 'honor, graciousness', content: true },
    'سر-فعل': { root: 'س ر ر', pos: 'verb', gloss: 'to please, gladden', content: true },
    ساعد: { root: 'س ع د', pos: 'verb', gloss: 'to help', content: true }
  },
  paragraphs: [
    {
      id: 'p1',
      en: 'Khalid says he has never seen the postman -- Tariq describes him: a grey uniform with brass buttons, a turban, a leather satchel. Khalid confirms he has seen exactly that, and Tariq explains people wait for him eagerly, especially in villages, whenever they are expecting a reply or a book they ordered.',
      sentences: [
        {
          id: 'qr1-28-001',
          page: 104,
          ar: 'خَالِدٌ: وَكَيْفَ يَكُوْنُ السَّاعِيْ يَا طَارِقُ؟',
          en: 'Khalid: And what does the postman look like, Tariq?',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'وَكَيْفَ', lemma: 'كيف', features: 'conj+part', root: 'ك ي ف', pos: 'part', gloss: 'and how' },
            { surface: 'يَكُوْنُ', lemma: 'كان', features: 'impf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'does look, is' },
            { surface: 'السَّاعِيْ', lemma: 'ساعي', features: 'def.nom', root: 'س ع ي', pos: 'noun', gloss: 'the postman' },
            { surface: 'يَا', lemma: 'يا', features: 'part', root: '—', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'طَارِقُ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' }
          ]
        },
        {
          id: 'qr1-28-002',
          page: 104,
          ar: 'أَنَا مَا رَأَيْتُهُ قَطُّ؟',
          en: "I've never seen him at all?",
          tokens: [
            { surface: 'أَنَا', lemma: 'أنا', features: 'nom.1s', root: '—', pos: 'noun', gloss: 'I' },
            { surface: 'مَا', lemma: 'ما-نافية', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'رَأَيْتُهُ', lemma: 'رأى', features: 'perf.1s+3ms', root: 'ر أ ي', pos: 'verb', gloss: 'I have seen him' },
            { surface: 'قَطُّ', lemma: 'قط', features: 'adv', root: '—', pos: 'adv', gloss: 'ever, at all' }
          ]
        },
        {
          id: 'qr1-28-003',
          page: 104,
          ar: 'طَارِقٌ: أَمَا رَأَيْتَ رَجُلاً يَرْتَدِيْ حُلَّةً لَوْنُهَا رَمَادِيٌّ فِيْهَا أَزْرَارٌ نُحَاسِيَّةٌ وَعَلَىٰ رَأْسِهِ عِمَامَةٌ يَحْمِلُ حَقِيْبَةً مِنْ جِلْدٍ؟',
          en: "Tariq: Haven't you seen a man wearing a grey uniform with brass buttons, and on his head a turban, carrying a leather bag?",
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'أَمَا', lemma: 'أما', features: 'part', root: '—', pos: 'part', gloss: "haven't...?" },
            { surface: 'رَأَيْتَ', lemma: 'رأى', features: 'perf.2ms', root: 'ر أ ي', pos: 'verb', gloss: 'have you seen' },
            { surface: 'رَجُلاً', lemma: 'رجل', features: 'indef.acc', root: 'ر ج ل', pos: 'noun', gloss: 'a man' },
            { surface: 'يَرْتَدِيْ', lemma: 'ارتدى', features: 'impf.3ms', root: 'ر د ي', pos: 'verb', gloss: 'wearing' },
            { surface: 'حُلَّةً', lemma: 'حلة', features: 'indef.acc', root: 'ح ل ل', pos: 'noun', gloss: 'a uniform' },
            { surface: 'لَوْنُهَا', lemma: 'لون', features: 'nom+3fs', root: 'ل و ن', pos: 'noun', gloss: 'its color' },
            { surface: 'رَمَادِيٌّ', lemma: 'رمادي', features: 'indef.nom', root: 'ر م د', pos: 'adj', gloss: 'grey' },
            { surface: 'فِيْهَا', lemma: 'في', features: 'prep+3fs', root: '—', pos: 'prep', gloss: 'on it' },
            { surface: 'أَزْرَارٌ', lemma: 'زر', features: 'pl.indef.nom', root: 'ز ر ر', pos: 'noun', gloss: 'buttons' },
            { surface: 'نُحَاسِيَّةٌ', lemma: 'نحاسي', features: 'indef.nom.f', root: 'ن ح س', pos: 'adj', gloss: 'brass' },
            { surface: 'وَعَلَىٰ', lemma: 'على', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and on' },
            { surface: 'رَأْسِهِ', lemma: 'رأس', features: 'gen+3ms', root: 'ر أ س', pos: 'noun', gloss: 'his head' },
            { surface: 'عِمَامَةٌ', lemma: 'عمامة', features: 'indef.nom', root: 'ع م م', pos: 'noun', gloss: 'a turban' },
            { surface: 'يَحْمِلُ', lemma: 'حمل', features: 'impf.3ms', root: 'ح م ل', pos: 'verb', gloss: 'carrying' },
            { surface: 'حَقِيْبَةً', lemma: 'حقيبة', features: 'indef.acc', root: 'ح ق ب', pos: 'noun', gloss: 'a bag' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'of' },
            { surface: 'جِلْدٍ', lemma: 'جلد', features: 'indef.gen', root: 'ج ل د', pos: 'noun', gloss: 'leather' }
          ]
        },
        {
          id: 'qr1-28-004',
          page: 104,
          ar: 'خَالِدٌ: نَعَمْ! قَدْ رَأَيْتُهُ وَرَأَيْتُ حَقِيْبَةً وَهِيَ مَلْآنَةٌ بِالْأَوْرَاقِ، وَأَزْرَارُهُ النُّحَاسِيَّةُ تَلْمَعُ وَعِمَامَتُهُ تَظْهَرُ مِنْ بَعِيْدٍ.',
          en: "Khalid: Yes! I've seen him, and I saw a bag full of papers, his brass buttons gleaming and his turban visible from afar.",
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'نَعَمْ', lemma: 'نعم', features: 'part', root: '—', pos: 'part', gloss: 'yes' },
            { surface: 'قَدْ', lemma: 'قد', features: 'part', root: '—', pos: 'part', gloss: 'indeed' },
            { surface: 'رَأَيْتُهُ', lemma: 'رأى', features: 'perf.1s+3ms', root: 'ر أ ي', pos: 'verb', gloss: 'I have seen him' },
            { surface: 'وَرَأَيْتُ', lemma: 'رأى', features: 'conj+perf.1s', root: 'ر أ ي', pos: 'verb', gloss: 'and I saw' },
            { surface: 'حَقِيْبَةً', lemma: 'حقيبة', features: 'indef.acc', root: 'ح ق ب', pos: 'noun', gloss: 'a bag' },
            { surface: 'وَهِيَ', lemma: 'هو', features: 'conj+nom.3fs', root: '—', pos: 'noun', gloss: 'and it' },
            { surface: 'مَلْآنَةٌ', lemma: 'ملآن', features: 'indef.nom.f', root: 'م ل أ', pos: 'adj', gloss: 'full' },
            { surface: 'بِالْأَوْرَاقِ', lemma: 'ورقة', features: 'prep+pl.def.gen', root: 'و ر ق', pos: 'noun', gloss: 'with the papers' },
            { surface: 'وَأَزْرَارُهُ', lemma: 'زر', features: 'conj+pl.nom+3ms', root: 'ز ر ر', pos: 'noun', gloss: 'and his buttons' },
            { surface: 'النُّحَاسِيَّةُ', lemma: 'نحاسي', features: 'def.nom.f', root: 'ن ح س', pos: 'adj', gloss: 'the brass' },
            { surface: 'تَلْمَعُ', lemma: 'لمع', features: 'impf.3fs', root: 'ل م ع', pos: 'verb', gloss: 'gleam' },
            { surface: 'وَعِمَامَتُهُ', lemma: 'عمامة', features: 'conj+nom+3ms', root: 'ع م م', pos: 'noun', gloss: 'and his turban' },
            { surface: 'تَظْهَرُ', lemma: 'ظهر-فعل', features: 'impf.3fs', root: 'ظ ه ر', pos: 'verb', gloss: 'is visible' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'بَعِيْدٍ', lemma: 'بعيد', features: 'indef.gen', root: 'ب ع د', pos: 'adj', gloss: 'far' }
          ]
        },
        {
          id: 'qr1-28-005',
          page: 105,
          ar: 'طَارِقٌ: ذٰلِكَ هُوَ سَاعِي الْبَرِيْدِ يَا خَالِدُ!',
          en: 'Tariq: That is the postman, Khalid!',
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', features: 'dem', root: '—', pos: 'dem', gloss: 'that' },
            { surface: 'هُوَ', lemma: 'هو', features: 'nom.3ms', root: '—', pos: 'noun', gloss: 'he, it' },
            { surface: 'سَاعِي', lemma: 'ساعي', features: 'nom.constr', root: 'س ع ي', pos: 'noun', gloss: 'the postman of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'يَا', lemma: 'يا', features: 'part', root: '—', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'خَالِدُ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' }
          ]
        },
        {
          id: 'qr1-28-006',
          page: 105,
          ar: 'وَالنَّاسُ يَنْتَظِرُوْنَهُ جِدّاً وَيَشْتَاقُوْنَ إِلَيْهِ خُصُوْصاً فِي الْقُرَىٰ، وَأَنْتَ تَنْتَظِرُهُ أَيْضاً إِذَا كَتَبْتَ كِتَاباً وَانْتَظَرْتَ جَوَابَهُ وَإِذَا طَلَبْتَ كِتَاباً مِنْ تَاجِرِ كُتُبٍ.',
          en: 'And people wait for him eagerly and long for him, especially in the villages, and you too wait for him if you have written a letter and are waiting for its reply, or if you have ordered a book from a bookseller.',
          tokens: [
            { surface: 'وَالنَّاسُ', lemma: 'ناس', features: 'conj+def.nom', root: '—', pos: 'noun', gloss: 'and the people' },
            { surface: 'يَنْتَظِرُوْنَهُ', lemma: 'انتظر', features: 'impf.3mp+3ms', root: 'ن ظ ر', pos: 'verb', gloss: 'wait for him' },
            { surface: 'جِدّاً', lemma: 'جدا', features: 'adv', root: '—', pos: 'adv', gloss: 'very much' },
            { surface: 'وَيَشْتَاقُوْنَ', lemma: 'اشتاق', features: 'conj+impf.3mp', root: 'ش و ق', pos: 'verb', gloss: 'and long' },
            { surface: 'إِلَيْهِ', lemma: 'الى', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'for him' },
            { surface: 'خُصُوْصاً', lemma: 'خصوصا', features: 'adv', root: 'خ ص ص', pos: 'adv', gloss: 'especially' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الْقُرَىٰ', lemma: 'قرية', features: 'pl.def.gen', root: 'ق ر ي', pos: 'noun', gloss: 'the villages' },
            { surface: 'وَأَنْتَ', lemma: 'انت', features: 'conj+nom.2ms', root: '—', pos: 'noun', gloss: 'and you' },
            { surface: 'تَنْتَظِرُهُ', lemma: 'انتظر', features: 'impf.2ms+3ms', root: 'ن ظ ر', pos: 'verb', gloss: 'wait for him' },
            { surface: 'أَيْضاً', lemma: 'أيضا', features: 'adv', root: '—', pos: 'adv', gloss: 'also' },
            { surface: 'إِذَا', lemma: 'إذا', features: 'part', root: '—', pos: 'part', gloss: 'if' },
            { surface: 'كَتَبْتَ', lemma: 'كتب', features: 'perf.2ms', root: 'ك ت ب', pos: 'verb', gloss: 'you have written' },
            { surface: 'كِتَاباً', lemma: 'كتاب', features: 'indef.acc', root: 'ك ت ب', pos: 'noun', gloss: 'a letter' },
            { surface: 'وَانْتَظَرْتَ', lemma: 'انتظر', features: 'conj+perf.2ms', root: 'ن ظ ر', pos: 'verb', gloss: 'and are waiting for' },
            { surface: 'جَوَابَهُ', lemma: 'جواب', features: 'acc+3ms', root: 'ج و ب', pos: 'noun', gloss: 'its reply' },
            { surface: 'وَإِذَا', lemma: 'إذا', features: 'conj+part', root: '—', pos: 'part', gloss: 'and if' },
            { surface: 'طَلَبْتَ', lemma: 'طلب-فعل', features: 'perf.2ms', root: 'ط ل ب', pos: 'verb', gloss: 'you have ordered' },
            { surface: 'كِتَاباً', lemma: 'كتاب', features: 'indef.acc', root: 'ك ت ب', pos: 'noun', gloss: 'a book' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'تَاجِرِ', lemma: 'تاجر', features: 'gen.constr', root: 'ت ج ر', pos: 'noun', gloss: 'a merchant of' },
            { surface: 'كُتُبٍ', lemma: 'كتاب', features: 'pl.indef.gen', root: 'ك ت ب', pos: 'noun', gloss: 'books' }
          ]
        }
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَ طَارِقٌ سَاعِيَ الْبَرِيْدِ؟',
          options: [ 'حُلَّةٌ رَمَادِيَّةٌ بِأَزْرَارٍ نُحَاسِيَّةٍ وَعِمَامَةٌ وَحَقِيْبَةٌ مِنْ جِلْدٍ', 'ثِيَابٌ بَيْضَاءُ وَقُبَّعَةٌ زَرْقَاءُ', 'زِيٌّ عَسْكَرِيٌّ أَخْضَرُ' ],
          answer: 0,
          qEn: 'How did Tariq describe the postman?',
          optionsEn: [ 'A grey uniform with brass buttons, a turban, and a leather bag', 'White clothes and a blue cap', 'A green military uniform' ]
        }
      ]
    },
    {
      id: 'p2',
      en: "Khalid describes another man in a similar uniform but without the leather bag, riding a red bicycle in a hurry -- Tariq explains he is also a postman, but one who delivers telegrams rather than letters, riding fast because telegrams are only ever sent when they need to arrive quickly.",
      sentences: [
        {
          id: 'qr1-28-007',
          page: 105,
          ar: 'خَالِدٌ: وَرَأَيْتُ يَا طَارِقُ رَجُلاً آخَرَ يَرْتَدِيْ مِثْلَ حُلَّةِ السَّاعِيْ وَلَهُ أَزْرَارٌ نُحَاسِيَّةٌ وَعَلَىٰ رَأْسِهِ عِمَامَةٌ أَيْضاً وَلٰكِنْ لَيْسَ عِنْدَهُ حَقِيْبَةٌ مِنْ جِلْدٍ، وَهُوَ عَلَىٰ دَرَّاجَةٍ حَمْرَاءَ أَرَاهُ يَذْهَبُ بِسُرْعَةٍ كَأَنَّهُ مُسْتَعْجِلٌ.',
          en: "Khalid: And I've seen, Tariq, another man wearing something like the postman's uniform, with brass buttons too and a turban on his head, but he has no leather bag -- he's on a red bicycle, and I see him going fast as if he were in a hurry.",
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'وَرَأَيْتُ', lemma: 'رأى', features: 'conj+perf.1s', root: 'ر أ ي', pos: 'verb', gloss: 'and I have seen' },
            { surface: 'يَا', lemma: 'يا', features: 'part', root: '—', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'طَارِقُ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'رَجُلاً', lemma: 'رجل', features: 'indef.acc', root: 'ر ج ل', pos: 'noun', gloss: 'a man' },
            { surface: 'آخَرَ', lemma: 'آخر', features: 'indef.acc', root: 'أ خ ر', pos: 'adj', gloss: 'another' },
            { surface: 'يَرْتَدِيْ', lemma: 'ارتدى', features: 'impf.3ms', root: 'ر د ي', pos: 'verb', gloss: 'wearing' },
            { surface: 'مِثْلَ', lemma: 'مثل', features: 'acc.constr', root: 'م ث ل', pos: 'noun', gloss: 'the like of' },
            { surface: 'حُلَّةِ', lemma: 'حلة', features: 'gen.constr', root: 'ح ل ل', pos: 'noun', gloss: 'the uniform of' },
            { surface: 'السَّاعِيْ', lemma: 'ساعي', features: 'def.gen', root: 'س ع ي', pos: 'noun', gloss: 'the postman' },
            { surface: 'وَلَهُ', lemma: 'من', features: 'conj+prep+3ms', root: '—', pos: 'prep', gloss: 'and he has' },
            { surface: 'أَزْرَارٌ', lemma: 'زر', features: 'pl.indef.nom', root: 'ز ر ر', pos: 'noun', gloss: 'buttons' },
            { surface: 'نُحَاسِيَّةٌ', lemma: 'نحاسي', features: 'indef.nom.f', root: 'ن ح س', pos: 'adj', gloss: 'brass' },
            { surface: 'وَعَلَىٰ', lemma: 'على', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and on' },
            { surface: 'رَأْسِهِ', lemma: 'رأس', features: 'gen+3ms', root: 'ر أ س', pos: 'noun', gloss: 'his head' },
            { surface: 'عِمَامَةٌ', lemma: 'عمامة', features: 'indef.nom', root: 'ع م م', pos: 'noun', gloss: 'a turban' },
            { surface: 'أَيْضاً', lemma: 'أيضا', features: 'adv', root: '—', pos: 'adv', gloss: 'also' },
            { surface: 'وَلٰكِنْ', lemma: 'لكن', features: 'conj+part', root: '—', pos: 'part', gloss: 'but' },
            { surface: 'لَيْسَ', lemma: 'ليس', features: 'perf.3ms', root: '—', pos: 'verb', gloss: 'is not' },
            { surface: 'عِنْدَهُ', lemma: 'عند', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'with him' },
            { surface: 'حَقِيْبَةٌ', lemma: 'حقيبة', features: 'indef.nom', root: 'ح ق ب', pos: 'noun', gloss: 'a bag' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'of' },
            { surface: 'جِلْدٍ', lemma: 'جلد', features: 'indef.gen', root: 'ج ل د', pos: 'noun', gloss: 'leather' },
            { surface: 'وَهُوَ', lemma: 'هو', features: 'conj+nom.3ms', root: '—', pos: 'noun', gloss: 'and he' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'on' },
            { surface: 'دَرَّاجَةٍ', lemma: 'دراجة', features: 'indef.gen', root: 'د ر ج', pos: 'noun', gloss: 'a bicycle' },
            { surface: 'حَمْرَاءَ', lemma: 'احمر', features: 'indef.gen.f', root: 'ح م ر', pos: 'adj', gloss: 'red' },
            { surface: 'أَرَاهُ', lemma: 'رأى', features: 'impf.1s+3ms', root: 'ر أ ي', pos: 'verb', gloss: 'I see him' },
            { surface: 'يَذْهَبُ', lemma: 'ذهب', features: 'impf.3ms', root: 'ذ ه ب', pos: 'verb', gloss: 'going' },
            { surface: 'بِسُرْعَةٍ', lemma: 'سرعة', features: 'prep+indef.gen', root: 'س ر ع', pos: 'noun', gloss: 'quickly' },
            { surface: 'كَأَنَّهُ', lemma: 'كأن', features: 'part+3ms', root: '—', pos: 'part', gloss: 'as if he' },
            { surface: 'مُسْتَعْجِلٌ', lemma: 'مستعجل', features: 'indef.nom', root: 'ع ج ل', pos: 'adj', gloss: 'in a hurry' }
          ]
        },
        {
          id: 'qr1-28-008',
          page: 105,
          ar: 'طَارِقٌ: هُوَ أَيْضاً سَاعِي الْبَرِيْدِ وَلٰكِنَّهُ لَا يُوَزِّعُ الْكُتُبَ بَلْ يُوَزِّعُ الْبَرْقِيَّاتِ وَيَذْهَبُ عَلَىٰ دَرَّاجَةٍ حَمْرَاءَ مِنْ مَكَانٍ إِلَىٰ مَكَانٍ لِيَصِلَ سَرِيْعاً، فَإِنَّ النَّاسَ لَا يُرْسِلُوْنَ الْبَرْقِيَّةَ إِلَّا لِتَصِلَ سَرِيْعَةً، وَالنَّاسُ يَعْرِفُوْنَهُ بِدَرَّاجَتِهِ الْحَمْرَاءِ.',
          en: 'Tariq: He is also a postman, but he doesn’t deliver letters -- he delivers telegrams, and goes on a red bicycle from place to place so it arrives quickly, since people only send a telegram so that it arrives quickly, and people recognize him by his red bicycle.',
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'هُوَ', lemma: 'هو', features: 'nom.3ms', root: '—', pos: 'noun', gloss: 'he' },
            { surface: 'أَيْضاً', lemma: 'أيضا', features: 'adv', root: '—', pos: 'adv', gloss: 'also' },
            { surface: 'سَاعِي', lemma: 'ساعي', features: 'nom.constr', root: 'س ع ي', pos: 'noun', gloss: 'the postman of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'وَلٰكِنَّهُ', lemma: 'لكن', features: 'conj+part+3ms', root: '—', pos: 'part', gloss: 'but he' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'يُوَزِّعُ', lemma: 'وزع', features: 'impf.3ms', root: 'و ز ع', pos: 'verb', gloss: 'distributes' },
            { surface: 'الْكُتُبَ', lemma: 'كتاب', features: 'pl.def.acc', root: 'ك ت ب', pos: 'noun', gloss: 'the letters' },
            { surface: 'بَلْ', lemma: 'بل', features: 'part', root: '—', pos: 'part', gloss: 'rather' },
            { surface: 'يُوَزِّعُ', lemma: 'وزع', features: 'impf.3ms', root: 'و ز ع', pos: 'verb', gloss: 'distributes' },
            { surface: 'الْبَرْقِيَّاتِ', lemma: 'برقية', features: 'pl.def.acc', root: 'ب ر ق', pos: 'noun', gloss: 'the telegrams' },
            { surface: 'وَيَذْهَبُ', lemma: 'ذهب', features: 'conj+impf.3ms', root: 'ذ ه ب', pos: 'verb', gloss: 'and goes' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'on' },
            { surface: 'دَرَّاجَةٍ', lemma: 'دراجة', features: 'indef.gen', root: 'د ر ج', pos: 'noun', gloss: 'a bicycle' },
            { surface: 'حَمْرَاءَ', lemma: 'احمر', features: 'indef.gen.f', root: 'ح م ر', pos: 'adj', gloss: 'red' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'مَكَانٍ', lemma: 'مكان', features: 'indef.gen', root: 'ك و ن', pos: 'noun', gloss: 'a place' },
            { surface: 'إِلَىٰ', lemma: 'الى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'مَكَانٍ', lemma: 'مكان', features: 'indef.gen', root: 'ك و ن', pos: 'noun', gloss: 'a place' },
            { surface: 'لِيَصِلَ', lemma: 'وصل', features: 'prep+impf.3ms', root: 'و ص ل', pos: 'verb', gloss: 'so it arrives' },
            { surface: 'سَرِيْعاً', lemma: 'سريع', features: 'indef.acc', root: 'س ر ع', pos: 'adj', gloss: 'quickly' },
            { surface: 'فَإِنَّ', lemma: 'إن', features: 'conj+part', root: '—', pos: 'part', gloss: 'for indeed' },
            { surface: 'النَّاسَ', lemma: 'ناس', features: 'def.acc', root: '—', pos: 'noun', gloss: 'the people' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'يُرْسِلُوْنَ', lemma: 'ارسل', features: 'impf.3mp', root: 'ر س ل', pos: 'verb', gloss: 'send' },
            { surface: 'الْبَرْقِيَّةَ', lemma: 'برقية', features: 'def.acc', root: 'ب ر ق', pos: 'noun', gloss: 'the telegram' },
            { surface: 'إِلَّا', lemma: 'إلا', features: 'part', root: '—', pos: 'part', gloss: 'except' },
            { surface: 'لِتَصِلَ', lemma: 'وصل', features: 'prep+impf.3fs', root: 'و ص ل', pos: 'verb', gloss: 'so that it arrives' },
            { surface: 'سَرِيْعَةً', lemma: 'سريع', features: 'indef.acc.f', root: 'س ر ع', pos: 'adj', gloss: 'quickly' },
            { surface: 'وَالنَّاسُ', lemma: 'ناس', features: 'conj+def.nom', root: '—', pos: 'noun', gloss: 'and the people' },
            { surface: 'يَعْرِفُوْنَهُ', lemma: 'عرف', features: 'impf.3mp+3ms', root: 'ع ر ف', pos: 'verb', gloss: 'recognize him' },
            { surface: 'بِدَرَّاجَتِهِ', lemma: 'دراجة', features: 'prep+gen+3ms', root: 'د ر ج', pos: 'noun', gloss: 'by his bicycle' },
            { surface: 'الْحَمْرَاءِ', lemma: 'احمر', features: 'def.gen.f', root: 'ح م ر', pos: 'adj', gloss: 'the red' }
          ]
        }
      ],
      checks: [
        {
          q: 'لِمَاذَا يَذْهَبُ سَاعِي الْبَرْقِيَّاتِ بِسُرْعَةٍ عَلَىٰ دَرَّاجَتِهِ؟',
          options: [ 'لِأَنَّ النَّاسَ لَا يُرْسِلُوْنَ الْبَرْقِيَّةَ إِلَّا لِتَصِلَ سَرِيْعَةً', 'لِأَنَّهُ يَخَافُ مِنَ الْمَطَرِ', 'لِأَنَّ حَقِيْبَتَهُ ثَقِيْلَةٌ' ],
          answer: 0,
          qEn: 'Why does the telegram postman ride his bicycle quickly?',
          optionsEn: [ 'Because people only ever send a telegram so that it arrives quickly', 'Because he is afraid of the rain', 'Because his bag is heavy' ]
        }
      ]
    },
    {
      id: 'p3',
      en: "Khalid wonders how one man could possibly deliver letters across a whole city -- Tariq explains there isn't just one: the post office has many men, one postman assigned to each district and each neighborhood.",
      sentences: [
        {
          id: 'qr1-28-009',
          page: 105,
          ar: 'خَالِدٌ: وَلٰكِنْ كَيْفَ يَقْدِرُ رَجُلٌ وَاحِدٌ أَنْ يُوَزِّعَ الْكُتُبَ فِيْ جَمِيْعِ أَنْحَاءِ الْمَدِيْنَةِ؟',
          en: 'Khalid: But how can a single man manage to distribute the letters across every part of the city?',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'وَلٰكِنْ', lemma: 'لكن', features: 'conj+part', root: '—', pos: 'part', gloss: 'but' },
            { surface: 'كَيْفَ', lemma: 'كيف', features: 'part', root: 'ك ي ف', pos: 'part', gloss: 'how' },
            { surface: 'يَقْدِرُ', lemma: 'قدر-فعل', features: 'impf.3ms', root: 'ق د ر', pos: 'verb', gloss: 'can, is able to' },
            { surface: 'رَجُلٌ', lemma: 'رجل', features: 'indef.nom', root: 'ر ج ل', pos: 'noun', gloss: 'a man' },
            { surface: 'وَاحِدٌ', lemma: 'واحد', features: 'indef.nom', root: 'و ح د', pos: 'num', gloss: 'one' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'to' },
            { surface: 'يُوَزِّعَ', lemma: 'وزع', features: 'impf.3ms', root: 'و ز ع', pos: 'verb', gloss: 'distribute' },
            { surface: 'الْكُتُبَ', lemma: 'كتاب', features: 'pl.def.acc', root: 'ك ت ب', pos: 'noun', gloss: 'the letters' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'جَمِيْعِ', lemma: 'جميع', features: 'gen.constr', root: 'ج م ع', pos: 'noun', gloss: 'all of' },
            { surface: 'أَنْحَاءِ', lemma: 'ناحية', features: 'pl.gen.constr', root: 'ن ح و', pos: 'noun', gloss: 'the parts of' },
            { surface: 'الْمَدِيْنَةِ', lemma: 'مدينة', features: 'def.gen', root: 'م د ن', pos: 'noun', gloss: 'the city' }
          ]
        },
        {
          id: 'qr1-28-010',
          page: 106,
          ar: 'طَارِقٌ: لَا!',
          en: 'Tariq: No!',
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'no' }
          ]
        },
        {
          id: 'qr1-28-011',
          page: 106,
          ar: 'فِيْ مَكْتَبِ الْبَرِيْدِ رِجَالٌ كَثِيْرٌ وَلِكُلِّ نَاحِيَةٍ مِنْ أَنْحَاءِ الْمَدِيْنَةِ وَلِكُلِّ حَيٍّ مِنْ أَحْيَاءِ الْبَلَدِ سَاعٍ.',
          en: 'The post office has many men, and every part of the city and every neighborhood of the town has its own postman.',
          tokens: [
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'مَكْتَبِ', lemma: 'مكتب', features: 'gen.constr', root: 'ك ت ب', pos: 'noun', gloss: 'the office of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'رِجَالٌ', lemma: 'رجل', features: 'pl.indef.nom', root: 'ر ج ل', pos: 'noun', gloss: 'men' },
            { surface: 'كَثِيْرٌ', lemma: 'كثير', features: 'indef.nom', root: 'ك ث ر', pos: 'adj', gloss: 'many' },
            { surface: 'وَلِكُلِّ', lemma: 'كل', features: 'conj+prep+gen.constr', root: 'ك ل ل', pos: 'noun', gloss: 'and for every' },
            { surface: 'نَاحِيَةٍ', lemma: 'ناحية', features: 'indef.gen', root: 'ن ح و', pos: 'noun', gloss: 'a part' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'of' },
            { surface: 'أَنْحَاءِ', lemma: 'ناحية', features: 'pl.gen.constr', root: 'ن ح و', pos: 'noun', gloss: 'the parts of' },
            { surface: 'الْمَدِيْنَةِ', lemma: 'مدينة', features: 'def.gen', root: 'م د ن', pos: 'noun', gloss: 'the city' },
            { surface: 'وَلِكُلِّ', lemma: 'كل', features: 'conj+prep+gen.constr', root: 'ك ل ل', pos: 'noun', gloss: 'and for every' },
            { surface: 'حَيٍّ', lemma: 'حي', features: 'indef.gen', root: 'ح ي ي', pos: 'noun', gloss: 'a neighborhood' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'of' },
            { surface: 'أَحْيَاءِ', lemma: 'حي', features: 'pl.gen.constr', root: 'ح ي ي', pos: 'noun', gloss: 'the neighborhoods of' },
            { surface: 'الْبَلَدِ', lemma: 'بلد', features: 'def.gen', root: 'ب ل د', pos: 'noun', gloss: 'the town' },
            { surface: 'سَاعٍ', lemma: 'ساعي', features: 'indef.nom', root: 'س ع ي', pos: 'noun', gloss: 'a postman' }
          ]
        }
      ],
      checks: [
        {
          q: 'كَيْفَ يُوَزِّعُ مَكْتَبُ الْبَرِيْدِ الْكُتُبَ فِيْ جَمِيْعِ أَنْحَاءِ الْمَدِيْنَةِ؟',
          options: [ 'لِكُلِّ نَاحِيَةٍ وَكُلِّ حَيٍّ سَاعٍ خَاصٌّ بِهِ', 'رَجُلٌ وَاحِدٌ يُوَزِّعُهَا كُلَّهَا', 'يُرْسِلُوْنَهَا بِالْقِطَارِ فَقَطْ' ],
          answer: 0,
          qEn: 'How does the post office distribute letters across the whole city?',
          optionsEn: [ 'Every part and every neighborhood has its own postman', 'A single man distributes them all', 'They only send them by train' ]
        }
      ]
    },
    {
      id: 'p4',
      en: "Khalid asks how the post office affords its wages and equipment for so many men -- Tariq explains it charges a fee for every letter sent, and shows Khalid the stamp he bought, which is that very fee.",
      sentences: [
        {
          id: 'qr1-28-012',
          page: 106,
          ar: 'خَالِدٌ: وَكَيْفَ يُنْفِقُ مَكْتَبُ الْبَرِيْدِ الْأَمْوَالَ الْكَثِيْرَةَ وَكَيْفَ يَخْدِمُ مَجَّاناً؟',
          en: 'Khalid: And how does the post office spend so much money, and how does it serve people for free?',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'وَكَيْفَ', lemma: 'كيف', features: 'conj+part', root: 'ك ي ف', pos: 'part', gloss: 'and how' },
            { surface: 'يُنْفِقُ', lemma: 'انفق', features: 'impf.3ms', root: 'ن ف ق', pos: 'verb', gloss: 'does spend' },
            { surface: 'مَكْتَبُ', lemma: 'مكتب', features: 'nom.constr', root: 'ك ت ب', pos: 'noun', gloss: 'the office of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'الْأَمْوَالَ', lemma: 'مال', features: 'pl.def.acc', root: 'م و ل', pos: 'noun', gloss: 'the money' },
            { surface: 'الْكَثِيْرَةَ', lemma: 'كثير', features: 'def.acc.f', root: 'ك ث ر', pos: 'adj', gloss: 'the much' },
            { surface: 'وَكَيْفَ', lemma: 'كيف', features: 'conj+part', root: 'ك ي ف', pos: 'part', gloss: 'and how' },
            { surface: 'يَخْدِمُ', lemma: 'خدم', features: 'impf.3ms', root: 'خ د م', pos: 'verb', gloss: 'does serve' },
            { surface: 'مَجَّاناً', lemma: 'مجانا', features: 'adv', root: 'م ج ن', pos: 'adv', gloss: 'free of charge' }
          ]
        },
        {
          id: 'qr1-28-013',
          page: 106,
          ar: 'وَرِجَالُ الْبَرِيْدِ يَرْتَدُوْنَ حُلَلاً وَيَحْمِلُوْنَ حَقَائِبَ وَيَرْكَبُوْنَ دَرَّاجَاتٍ، فَمِنْ أَيْنَ تَأْتِيْ هٰذِهِ الْأَمْوَالُ؟',
          en: 'And the postmen wear uniforms and carry bags and ride bicycles -- so where does this money come from?',
          tokens: [
            { surface: 'وَرِجَالُ', lemma: 'رجل', features: 'conj+pl.nom.constr', root: 'ر ج ل', pos: 'noun', gloss: 'and the men of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'يَرْتَدُوْنَ', lemma: 'ارتدى', features: 'impf.3mp', root: 'ر د ي', pos: 'verb', gloss: 'wear' },
            { surface: 'حُلَلاً', lemma: 'حلة', features: 'pl.indef.acc', root: 'ح ل ل', pos: 'noun', gloss: 'uniforms' },
            { surface: 'وَيَحْمِلُوْنَ', lemma: 'حمل', features: 'conj+impf.3mp', root: 'ح م ل', pos: 'verb', gloss: 'and carry' },
            { surface: 'حَقَائِبَ', lemma: 'حقيبة', features: 'pl.indef.acc', root: 'ح ق ب', pos: 'noun', gloss: 'bags' },
            { surface: 'وَيَرْكَبُوْنَ', lemma: 'ركب', features: 'conj+impf.3mp', root: 'ر ك ب', pos: 'verb', gloss: 'and ride' },
            { surface: 'دَرَّاجَاتٍ', lemma: 'دراجة', features: 'pl.indef.acc', root: 'د ر ج', pos: 'noun', gloss: 'bicycles' },
            { surface: 'فَمِنْ', lemma: 'من', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'so from' },
            { surface: 'أَيْنَ', lemma: 'اين', features: 'part', root: '—', pos: 'part', gloss: 'where' },
            { surface: 'تَأْتِيْ', lemma: 'اتى', features: 'impf.3fs', root: 'أ ت ي', pos: 'verb', gloss: 'does come' },
            { surface: 'هٰذِهِ', lemma: 'هذه', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الْأَمْوَالُ', lemma: 'مال', features: 'pl.def.nom', root: 'م و ل', pos: 'noun', gloss: 'the money' }
          ]
        },
        {
          id: 'qr1-28-014',
          page: 106,
          ar: 'طَارِقٌ: إِنَّ مَكْتَبَ الْبَرِيْدِ يَأْخُذُ أُجْرَةً مِنْ كُلِّ مَنْ يُرْسِلُ كِتَاباً بِالْبَرِيْدِ.',
          en: 'Tariq: The post office takes a fee from everyone who sends a letter by post.',
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'إِنَّ', lemma: 'إن', features: 'part', root: '—', pos: 'part', gloss: 'indeed' },
            { surface: 'مَكْتَبَ', lemma: 'مكتب', features: 'acc.constr', root: 'ك ت ب', pos: 'noun', gloss: 'the office of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'يَأْخُذُ', lemma: 'اخذ', features: 'impf.3ms', root: 'أ خ ذ', pos: 'verb', gloss: 'takes' },
            { surface: 'أُجْرَةً', lemma: 'اجرة', features: 'indef.acc', root: 'أ ج ر', pos: 'noun', gloss: 'a fee' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'كُلِّ', lemma: 'كل', features: 'gen.constr', root: 'ك ل ل', pos: 'noun', gloss: 'every' },
            { surface: 'مَنْ', lemma: 'من-استفهام', features: 'part', root: '—', pos: 'part', gloss: 'who' },
            { surface: 'يُرْسِلُ', lemma: 'ارسل', features: 'impf.3ms', root: 'ر س ل', pos: 'verb', gloss: 'sends' },
            { surface: 'كِتَاباً', lemma: 'كتاب', features: 'indef.acc', root: 'ك ت ب', pos: 'noun', gloss: 'a letter' },
            { surface: 'بِالْبَرِيْدِ', lemma: 'بريد', features: 'prep+def.gen', root: 'ب ر د', pos: 'noun', gloss: 'by post' }
          ]
        },
        {
          id: 'qr1-28-015',
          page: 106,
          ar: 'خَالِدٌ: وَمَا هٰذِهِ الْأُجْرَةُ وَمَتَىٰ تَدْفَعُهَا يَا أَخِيْ؟',
          en: 'Khalid: And what is this fee, and when do you pay it, brother?',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'وَمَا', lemma: 'ما', features: 'conj+rel', root: '—', pos: 'rel', gloss: 'and what' },
            { surface: 'هٰذِهِ', lemma: 'هذه', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الْأُجْرَةُ', lemma: 'اجرة', features: 'def.nom', root: 'أ ج ر', pos: 'noun', gloss: 'the fee' },
            { surface: 'وَمَتَىٰ', lemma: 'متى', features: 'conj+part', root: '—', pos: 'part', gloss: 'and when' },
            { surface: 'تَدْفَعُهَا', lemma: 'دفع', features: 'impf.2ms+3fs', root: 'د ف ع', pos: 'verb', gloss: 'do you pay it' },
            { surface: 'يَا', lemma: 'يا', features: 'part', root: '—', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'أَخِيْ', lemma: 'أخ', features: 'nom+1s', root: 'أ خ و', pos: 'noun', gloss: 'my brother' }
          ]
        },
        {
          id: 'qr1-28-016',
          page: 106,
          ar: 'طَارِقٌ: قَدِ اشْتَرَيْتُ هٰذَا الطَّابِعَ مِنْ مَكْتَبِ الْبَرِيْدِ وَهٰذِهِ هِيَ أُجْرَةُ الْبَرِيْدِ.',
          en: 'Tariq: I bought this stamp from the post office, and this is the postage fee.',
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'قَدِ', lemma: 'قد', features: 'part', root: '—', pos: 'part', gloss: 'indeed' },
            { surface: 'اشْتَرَيْتُ', lemma: 'اشترى', features: 'perf.1s', root: 'ش ر ي', pos: 'verb', gloss: 'I bought' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الطَّابِعَ', lemma: 'طابع', features: 'def.acc', root: 'ط ب ع', pos: 'noun', gloss: 'the stamp' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'مَكْتَبِ', lemma: 'مكتب', features: 'gen.constr', root: 'ك ت ب', pos: 'noun', gloss: 'the office of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'وَهٰذِهِ', lemma: 'هذه', features: 'conj+dem', root: '—', pos: 'dem', gloss: 'and this' },
            { surface: 'هِيَ', lemma: 'هو', features: 'nom.3fs', root: '—', pos: 'noun', gloss: 'is' },
            { surface: 'أُجْرَةُ', lemma: 'اجرة', features: 'nom.constr', root: 'أ ج ر', pos: 'noun', gloss: 'the fee of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' }
          ]
        }
      ],
      checks: [
        {
          q: 'مِنْ أَيْنَ تَأْتِيْ أَمْوَالُ مَكْتَبِ الْبَرِيْدِ؟',
          options: [ 'مِنَ الْأُجْرَةِ الَّتِيْ يَأْخُذُهَا مِنْ كُلِّ مَنْ يُرْسِلُ كِتَاباً', 'مِنَ الْحُكُوْمَةِ فَقَطْ', 'مِنَ التُّجَّارِ فِي السُّوْقِ' ],
          answer: 0,
          qEn: 'Where does the post office get its money from?',
          optionsEn: [ 'From the fee it takes from everyone who sends a letter', 'From the government alone', 'From merchants in the market' ]
        }
      ]
    },
    {
      id: 'p5',
      en: 'Khalid thanks Tariq for the useful conversation and says he will write to his own friend Jameel, send the letter by post, and bring it to Tariq first to check over -- Tariq is glad to help.',
      sentences: [
        {
          id: 'qr1-28-017',
          page: 106,
          ar: 'خَالِدٌ: أَشْكُرُكَ عَلَىٰ هٰذَا الْحَدِيْثِ الْمُفِيْدِ، وَسَأَكْتُبُ إِلَىٰ أَخِيْ وَصَدِيْقِيْ جَمِيْلٍ، وَسَأُرْسِلُ الْكِتَابَ بِالْبَرِيْدِ، وَإِذَا كَتَبْتُ الْكِتَابَ جِئْتُكَ بِهِ فَتَرَاهُ وَتُصْلِحُهُ.',
          en: "Khalid: I thank you for this useful conversation -- I will write to my friend Jameel, I will send the letter by post, and once I have written the letter I will bring it to you, so you can see it and correct it.",
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'أَشْكُرُكَ', lemma: 'شكر', features: 'impf.1s+2ms', root: 'ش ك ر', pos: 'verb', gloss: 'I thank you' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'for' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الْحَدِيْثِ', lemma: 'حديث', features: 'def.gen', root: 'ح د ث', pos: 'noun', gloss: 'the conversation' },
            { surface: 'الْمُفِيْدِ', lemma: 'مفيد', features: 'def.gen', root: 'ف ي د', pos: 'adj', gloss: 'the useful' },
            { surface: 'وَسَأَكْتُبُ', lemma: 'كتب', features: 'conj+fut+impf.1s', root: 'ك ت ب', pos: 'verb', gloss: 'and I will write' },
            { surface: 'إِلَىٰ', lemma: 'الى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'أَخِيْ', lemma: 'أخ', features: 'gen+1s', root: 'أ خ و', pos: 'noun', gloss: 'my brother' },
            { surface: 'وَصَدِيْقِيْ', lemma: 'صديق', features: 'conj+gen+1s', root: 'ص د ق', pos: 'noun', gloss: 'and my friend' },
            { surface: 'جَمِيْلٍ', lemma: 'جميل-اسم', features: 'indef.gen', root: '—', pos: 'proper', gloss: 'Jameel' },
            { surface: 'وَسَأُرْسِلُ', lemma: 'ارسل', features: 'conj+fut+impf.1s', root: 'ر س ل', pos: 'verb', gloss: 'and I will send' },
            { surface: 'الْكِتَابَ', lemma: 'كتاب', features: 'def.acc', root: 'ك ت ب', pos: 'noun', gloss: 'the letter' },
            { surface: 'بِالْبَرِيْدِ', lemma: 'بريد', features: 'prep+def.gen', root: 'ب ر د', pos: 'noun', gloss: 'by post' },
            { surface: 'وَإِذَا', lemma: 'إذا', features: 'conj+part', root: '—', pos: 'part', gloss: 'and if, once' },
            { surface: 'كَتَبْتُ', lemma: 'كتب', features: 'perf.1s', root: 'ك ت ب', pos: 'verb', gloss: 'I have written' },
            { surface: 'الْكِتَابَ', lemma: 'كتاب', features: 'def.acc', root: 'ك ت ب', pos: 'noun', gloss: 'the letter' },
            { surface: 'جِئْتُكَ', lemma: 'جاء', features: 'perf.1s+2ms', root: 'ج ي أ', pos: 'verb', gloss: 'I will come to you' },
            { surface: 'بِهِ', lemma: 'ب', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'with it' },
            { surface: 'فَتَرَاهُ', lemma: 'رأى', features: 'conj+impf.2ms+3ms', root: 'ر أ ي', pos: 'verb', gloss: 'so you see it' },
            { surface: 'وَتُصْلِحُهُ', lemma: 'اصلح', features: 'conj+impf.2ms+3ms', root: 'ص ل ح', pos: 'verb', gloss: 'and correct it' }
          ]
        },
        {
          id: 'qr1-28-018',
          page: 106,
          ar: 'طَارِقٌ: حُبّاً وَكَرَامَةً، يَسُرُّنِيْ أَنْ أُسَاعِدَكَ.',
          en: "Tariq: Gladly! It pleases me to help you.",
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'حُبّاً', lemma: 'حب', features: 'indef.acc', root: 'ح ب ب', pos: 'noun', gloss: 'gladly (lit. with love' },
            { surface: 'وَكَرَامَةً', lemma: 'كرامة', features: 'conj+indef.acc', root: 'ك ر م', pos: 'noun', gloss: 'and honor)' },
            { surface: 'يَسُرُّنِيْ', lemma: 'سر-فعل', features: 'impf.3ms+1s', root: 'س ر ر', pos: 'verb', gloss: 'it pleases me' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'to' },
            { surface: 'أُسَاعِدَكَ', lemma: 'ساعد', features: 'impf.1s+2ms', root: 'س ع د', pos: 'verb', gloss: 'I help you' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَاذَا سَيَفْعَلُ خَالِدٌ بَعْدَ أَنْ يَكْتُبَ الْكِتَابَ إِلَىٰ صَدِيْقِهِ جَمِيْلٍ؟',
          options: [ 'سَيُحْضِرُهُ إِلَىٰ طَارِقٍ لِيَرَاهُ وَيُصْلِحَهُ قَبْلَ إِرْسَالِهِ', 'سَيُمَزِّقُهُ وَيَكْتُبُ غَيْرَهُ', 'سَيَقْرَؤُهُ عَلَىٰ الْمُعَلِّمِ' ],
          answer: 0,
          qEn: 'What will Khalid do after writing the letter to his friend Jameel?',
          optionsEn: [ 'Bring it to Tariq so he can see it and correct it before sending', 'Tear it up and write another one', 'Read it aloud to the teacher' ]
        }
      ]
    }
  ]
};

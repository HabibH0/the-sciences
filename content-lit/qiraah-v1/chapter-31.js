// القراءة الراشدة, volume one, chapter thirty-one -- يَوْمُ الْعِيْدِ.
//
// Follows the shape of chapter-07.js/chapter-22.js/chapter-29.js/
// chapter-30.js -- see ../CHAPTER-FORMAT.md. Hand-authored (vision-model
// OCR, checked against the scan) from qiratur rashida/
// _al-qir`atur-rashida 1-2.pdf, printed pages 112-114. Page-boundary
// confirmed via the "✳ ✳ ✳" divider at the bottom of page 114.
//
// THIS IS THE FINAL CHAPTER OF VOLUME 1 (qiraah-v1) -- confirmed with the
// user this session: "Volume 1 = chapters 1-31 only." No chapters beyond
// 31 are in scope for this book; the book's id/index stops here.
//
// THIS CHAPTER IS THIRD-PERSON NARRATIVE (no dedicated register precedent
// fits exactly -- it is not sīrah, not dialogue, not a first-person diary
// -- so it uses register "third_person_narrative", a new but
// self-explanatory value following the naming pattern of
// "third_person_sirah_narrative"). It describes a Muslim community's Eid
// celebration (moon-sighting the evening before, the children's
// excitement, the morning routine, the Eid prayer and greetings) and, at
// its center, a short embedded vignette about a poor orphan boy and the
// kindness of a man named Sa'īd who gives him new clothes -- before
// closing on a wistful note about missing Ramadan and the tarāwīḥ.
//
// SENTENCE-CHUNKING NOTE (same departure as chapter-29.js's/
// chapter-30.js's): the source's own paragraphing is nine long,
// comma-chained sentences with very few sentence-final periods --
// diplomatically transcribed, only ~2 would land under
// CHAPTER-FORMAT.md's "3-9 tokens" buildable window. Re-punctuated at
// natural independent-clause boundaries into many more, shorter sentences
// (no wording changed, only where periods now fall); this reads
// naturally because the source's own commas already mark complete
// clauses (a list of parallel actions/descriptions), unlike a single
// run-on argument. The one exception is the takbeer (qr1-31-025), a
// fixed liturgical formula kept whole and untouched rather than chopped
// for buildability -- the quota is already far over threshold by then.
//
// Homograph / new-lemma notes (checked against the book-wide lemma index,
// chapters 1-30):
//   - "ظَهَرَ" (verb, "appeared" -- "ظَهَرَ الْهِلاَلُ") is a genuine POS
//     clash with chapter-06.js's/chapter-08.js's established "ظهر" (pos
//     "noun", "Ẓuhr, midday prayer" -- an unrelated noun sharing the same
//     root/spelling). Keyed "ظهر-فعل" (pos "verb"), following the "-فعل"
//     suffix pattern chapter-23.js established for exactly this situation.
//   - "خَجَلٍ" (noun, "shame" -- "بِغِبْطَةٍ وَخَجَلٍ") is a genuine POS
//     clash with chapter-02.js's established "خجل" (pos "verb", "to feel
//     shy, ashamed" -- reused as-is elsewhere in this same chapter for
//     "حَزِنَ"'s neighbor "اسْتَحْيَا"... no, for its own verb sense is not
//     used here, but the book-wide verb sense is what's on record). Keyed
//     "خجل-اسم" (pos "noun"), following the "-اسم" suffix pattern
//     chapter-29.js's "خليل-اسم"/"وضع-اسم" established for a noun sense
//     that collides in POS with an existing verb/other-noun sense.
//   - "الْحَمْدُ" (noun, "the praise" -- "وَلِلَّهِ الْحَمْدُ", part of the
//     fixed takbeer formula) is a genuine POS clash with chapter-02.js's/
//     chapter-08.js's/chapter-26.js's established "حمد" (pos "verb", "to
//     praise, thank"). Keyed "حمد-اسم" (pos "noun"), same "-اسم" pattern.
//   - "سَعِيْدٌ" is used in this chapter in TWO senses that collide in
//     POS: (1) a man's given name (the boy's benefactor, "بَيْتِ سَعِيْدٍ",
//     "حَزِنَ سَعِيْدٌ" etc.) -- pos "proper" -- and (2) the common adjective
//     "happy" (in the Eid greeting "عِيْدٌ سَعِيْدٌ", chapter-08.js's/
//     chapter-10.js's/chapter-11.js's/chapter-23.js's established sense,
//     pos "adj"). Since chapter-23.js's "-اسم" precedent already
//     establishes suffixing the sense being ADDED (not necessarily
//     retagging the older one), and "-اسم" reads naturally as "the name/
//     proper-noun sense" here too, the name is keyed "سعيد-اسم" (pos
//     "proper") while the adjective reuses the book's existing "سعيد"
//     (pos "adj") unchanged.
//   - "غَيَّرَ" (Form II, "to change" -- "غَيَّرُوْا مَلاَبِسَهُمْ") is a
//     naturally distinct spelling (shadda) from chapter-04.js's/
//     chapter-29.js's established "غير" (the noun/preposition-like "other
//     than, not") -- same root, unrelated word, no suffix needed, exactly
//     like chapter-29.js's "قرّب"/"قرب" or chapter-30.js's "ضيّف"/"ضيف"
//     precedent below.
//   - "ضَيَّفَ" (Form II, "to host, entertain a guest" -- "وَضَيَّفَ
//     بَعْضُهُمْ أَصْدِقَاءَهُمْ") is likewise naturally distinct in spelling
//     from chapter-15.js's/chapter-25.js's established "ضيف" (the noun
//     "guest") -- its own new lemma, no suffix needed.
//   - "لَبِسَ" (Form I, "to wear" -- reused as-is from chapter-09.js/
//     chapter-12.js/chapter-17.js, pos "verb") and "لِبَاس"/"مَلاَبِس"
//     (the noun "clothing" -- reused as-is from chapter-12.js, pos
//     "noun") are naturally distinct spellings of the same root, kept as
//     separate keys with no clash, exactly like "لبس"/"لباس" already
//     coexist book-wide.
//   - "مَلْبُوْساً" ("a garment", the thing given as a gift) is a further,
//     naturally distinct spelling (مفعول pattern) from both of the above
//     -- its own new lemma "ملبوس", no clash, no suffix.
//   - "ذَكَرَ" (verb, "recalled, mentioned" -- "ذَكَرَ النَّاسُ رَمَضَانَ")
//     reuses chapter-02.js's/chapter-12.js's established "ذكر" (pos
//     "verb") rather than chapter-01.js's different "ذكر" (pos "noun",
//     "remembrance") -- POS matches the verb sense needed here, so no new
//     key, per the established "clash only on POS" rule.
//   - "أَكْبَرُ" (elative, "greatest" -- the takbeer "اللهُ أَكْبَرُ") reuses
//     chapter-30.js's "أكبر" as-is (pos "adj" both times; chapter-30.js's
//     own sense "greater, eldest" is the same elative pattern, just a
//     different specific application).
//   - New this chapter, checked against no clash anywhere in the book:
//     عيد, هلال, تراءى, صعد, سطح, منارة, طول, قلنسوة, مرار, عديد, غيّر,
//     جائزة, تشقق, ترب, غبطة, استحيا, ملبوس, ارتفع, مصلى, إمام, ضيّف, هنأ,
//     عام, تراويح, فقد, أنتم, ظهر-فعل, خجل-اسم, حمد-اسم, سعيد-اسم.
//
export const CHAPTER = {
  id: 'ch31',
  number: 31,
  title: { ar: 'يَوْمُ الْعِيْدِ', en: 'The Day of Eid' },
  pages: [112, 113, 114],
  register: 'third_person_narrative',
  newWords: [
    'عيد',
    'هلال',
    'تراءى',
    'صعد',
    'سطح',
    'منارة',
    'ظهر-فعل',
    'طول',
    'قلنسوة',
    'مرار',
    'عديد',
    'غيّر',
    'جائزة',
    'سعيد-اسم',
    'تشقق',
    'ترب',
    'غبطة',
    'خجل-اسم',
    'استحيا',
    'ملبوس',
    'ارتفع',
    'مصلى',
    'حمد-اسم',
    'إمام',
    'ضيّف',
    'هنأ',
    'عام',
    'تراويح',
    'فقد',
    'أنتم',
  ],
  lemmas: {
    // -- new this chapter --
    عيد: { root: 'ع و د', pos: 'noun', gloss: 'feast, festival (Eid)', content: true },
    هلال: { root: 'ه ل ل', pos: 'noun', gloss: 'crescent moon', content: true },
    تراءى: { root: 'ر أ ي', pos: 'verb', gloss: 'to watch for, sight one another', content: true },
    صعد: { root: 'ص ع د', pos: 'verb', gloss: 'to climb, ascend', content: true },
    سطح: { root: 'س ط ح', pos: 'noun', gloss: 'rooftop, terrace', content: true },
    منارة: { root: 'ن و ر', pos: 'noun', gloss: 'minaret', content: true },
    'ظهر-فعل': { root: 'ظ ه ر', pos: 'verb', gloss: 'to appear', content: true },
    طول: { root: 'ط و ل', pos: 'noun', gloss: 'length (idiom: طول العمر = long life)', content: true },
    قلنسوة: { root: 'ق ل ن س', pos: 'noun', gloss: 'cap', content: true },
    مرار: { root: 'م ر ر', pos: 'noun', gloss: 'times (repeatedly)', content: true },
    عديد: { root: 'ع د د', pos: 'adj', gloss: 'numerous, many', content: true },
    'غيّر': { root: 'غ ي ر', pos: 'verb', gloss: 'to change', content: true },
    جائزة: { root: 'ج و ز', pos: 'noun', gloss: 'prize, gift', content: true },
    'سعيد-اسم': { root: 'س ع د', pos: 'proper', gloss: "Sa'īd (a name)", content: true },
    تشقق: { root: 'ش ق ق', pos: 'verb', gloss: 'to crack, split', content: true },
    ترب: { root: 'ت ر ب', pos: 'noun', gloss: 'peer, one of the same age', content: true },
    غبطة: { root: 'غ ب ط', pos: 'noun', gloss: "envy, admiration (of another's happy state)", content: true },
    'خجل-اسم': { root: 'خ ج ل', pos: 'noun', gloss: 'shame, embarrassment', content: true },
    استحيا: { root: 'ح ي ي', pos: 'verb', gloss: 'to feel shy, bashful', content: true },
    ملبوس: { root: 'ل ب س', pos: 'noun', gloss: 'garment, something worn', content: true },
    ارتفع: { root: 'ر ف ع', pos: 'verb', gloss: 'to rise', content: true },
    مصلى: { root: 'ص ل و', pos: 'noun', gloss: 'prayer ground', content: true },
    'حمد-اسم': { root: 'ح م د', pos: 'noun', gloss: 'praise', content: true },
    إمام: { root: 'أ م م', pos: 'noun', gloss: 'imam, prayer leader', content: true },
    'ضيّف': { root: 'ض ي ف', pos: 'verb', gloss: 'to host, entertain (a guest)', content: true },
    هنأ: { root: 'ه ن أ', pos: 'verb', gloss: 'to congratulate', content: true },
    عام: { root: 'ع و م', pos: 'noun', gloss: 'year', content: true },
    تراويح: { root: 'ر و ح', pos: 'noun', gloss: 'tarāwīḥ (special Ramadan night prayers)', content: true },
    فقد: { root: 'ف ق د', pos: 'verb', gloss: 'to lose', content: true },
    أنتم: { root: '—', pos: 'noun', gloss: 'you (m.pl.)', content: false },
    // -- reused, book-wide (chapters 21-30) --
    اجتمع: { root: 'ج م ع', pos: 'verb', gloss: 'to gather, meet', content: true },
    ناس: { root: '—', pos: 'noun', gloss: 'people', content: true },
    على: { root: '—', pos: 'prep', gloss: 'onto, upon', content: false },
    سقف: { root: 'س ق ف', pos: 'noun', gloss: 'roof, ceiling', content: true },
    بيت: { root: 'ب ي ت', pos: 'noun', gloss: 'house', content: true },
    ولد: { root: 'و ل د', pos: 'noun', gloss: 'child, boy (pl. sons/children)', content: true },
    إلى: { root: '—', pos: 'prep', gloss: 'to, at', content: false },
    لما: { root: '—', pos: 'part', gloss: 'when', content: false },
    كثير: { root: 'ك ث ر', pos: 'adj', gloss: 'much, many', content: true },
    جديد: { root: 'ج د د', pos: 'adj', gloss: 'new', content: true },
    رأى: { root: 'ر أ ي', pos: 'verb', gloss: 'to see', content: true },
    قديم: { root: 'ق د م', pos: 'adj', gloss: 'old, ancient', content: true },
    الله: { root: '—', pos: 'proper', gloss: 'Allah', content: true },
    أكبر: { root: 'ك ب ر', pos: 'adj', gloss: 'greater, greatest (elative)', content: true },
    قال: { root: 'ق و ل', pos: 'verb', gloss: 'to say', content: true },
    كل: { root: 'ك ل ل', pos: 'noun', gloss: 'each, every, all', content: true },
    من: { root: '—', pos: 'prep', gloss: 'from, of', content: false },
    في: { root: '—', pos: 'prep', gloss: 'in', content: false },
    ثم: { root: '—', pos: 'part', gloss: 'then', content: false },
    بعض: { root: 'ب ع ض', pos: 'noun', gloss: 'some', content: true },
    مسلم: { root: 'س ل م', pos: 'noun', gloss: 'Muslim', content: true },
    كأن: { root: '—', pos: 'part', gloss: 'as if', content: false },
    هذا: { root: '—', pos: 'dem', gloss: 'this', content: false },
    كان: { root: 'ك و ن', pos: 'verb', gloss: 'to be', content: true },
    شمس: { root: 'ش م س', pos: 'noun', gloss: 'sun', content: true },
    خرج: { root: 'خ ر ج', pos: 'verb', gloss: 'to go out', content: true },
    رجع: { root: 'ر ج ع', pos: 'verb', gloss: 'to return', content: true },
    طريق: { root: 'ط ر ق', pos: 'noun', gloss: 'road, way', content: true },
    آخر: { root: 'أ خ ر', pos: 'adj', gloss: 'other, another', content: true },
    ذهب: { root: 'ذ ه ب', pos: 'verb', gloss: 'to go', content: true },
    توسخ: { root: 'و س خ', pos: 'verb', gloss: 'to get dirty', content: true },
    صندوق: { root: 'ص ن د ق', pos: 'noun', gloss: 'box, chest', content: true },
    ليس: { root: '—', pos: 'verb', gloss: 'is not, there is not', content: false },
    خدم: { root: 'خ د م', pos: 'verb', gloss: 'to serve', content: true },
    قد: { root: '—', pos: 'part', gloss: 'indeed, already', content: false },
    نظر: { root: 'ن ظ ر', pos: 'verb', gloss: 'to look', content: true },
    ل: { root: '—', pos: 'prep', gloss: 'to, for', content: false },
    // -- reused, book-wide (chapters 1-20) --
    أمس: { root: '—', pos: 'adv', gloss: 'yesterday', content: true },
    يوم: { root: 'ي و م', pos: 'noun', gloss: 'day', content: true },
    طفل: { root: 'ط ف ل', pos: 'noun', gloss: 'child', content: true },
    غروب: { root: 'غ ر ب', pos: 'noun', gloss: 'sunset', content: true },
    هتف: { root: 'ه ت ف', pos: 'verb', gloss: 'to cheer, call out', content: true },
    جرى: { root: 'ج ر ي', pos: 'verb', gloss: 'to run', content: true },
    سلم: { root: 'س ل م', pos: 'verb', gloss: 'to greet', content: true },
    أب: { root: 'أ ب و', pos: 'noun', gloss: 'father', content: true },
    أم: { root: 'أ م م', pos: 'noun', gloss: 'mother', content: true },
    قريب: { root: 'ق ر ب', pos: 'adj', gloss: 'near; relative', content: true },
    دعا: { root: 'د ع و', pos: 'verb', gloss: 'to pray for, invoke blessing upon', content: true },
    بركة: { root: 'ب ر ك', pos: 'noun', gloss: 'blessing', content: true },
    عمر: { root: 'ع م ر', pos: 'noun', gloss: 'age, life', content: true },
    نام: { root: 'ن و م', pos: 'verb', gloss: 'to sleep', content: true },
    قليل: { root: 'ق ل ل', pos: 'adj', gloss: 'a little', content: true },
    استيقظ: { root: 'ي ق ظ', pos: 'verb', gloss: 'to wake up', content: true },
    مبكر: { root: 'ب ك ر', pos: 'adv', gloss: 'early', content: true },
    لباس: { root: 'ل ب س', pos: 'noun', gloss: 'clothing', content: true },
    حذاء: { root: 'ح ذ و', pos: 'noun', gloss: 'shoe', content: true },
    نظيف: { root: 'ن ظ ف', pos: 'adj', gloss: 'clean', content: true },
    صباح: { root: 'ص ب ح', pos: 'noun', gloss: 'morning', content: true },
    قام: { root: 'ق و م', pos: 'verb', gloss: 'to rise, get up', content: true },
    فراش: { root: 'ف ر ش', pos: 'noun', gloss: 'bedding, mattress', content: true },
    صلى: { root: 'ص ل و', pos: 'verb', gloss: 'to pray', content: true },
    صبح: { root: 'ص ب ح', pos: 'noun', gloss: 'dawn, dawn prayer', content: true },
    اغتسل: { root: 'غ س ل', pos: 'verb', gloss: 'to bathe, wash oneself', content: true },
    جميل: { root: 'ج م ل', pos: 'adj', gloss: 'beautiful, nice', content: true },
    فرح: { root: 'ف ر ح', pos: 'verb', gloss: 'to be glad, rejoice', content: true },
    قدم: { root: 'ق د م', pos: 'verb', gloss: 'to bring forward, present', content: true },
    يتيم: { root: 'ي ت م', pos: 'adj', gloss: 'orphan(ed)', content: true },
    محزون: { root: 'ح ز ن', pos: 'adj', gloss: 'sad, sorrowful', content: true },
    حزن: { root: 'ح ز ن', pos: 'verb', gloss: 'to grieve, be sad', content: true },
    نفس: { root: 'ن ف س', pos: 'noun', gloss: 'self, soul', content: true },
    أسرع: { root: 'س ر ع', pos: 'verb', gloss: 'to hurry', content: true },
    أهدى: { root: 'ه د ي', pos: 'verb', gloss: 'to give as a gift', content: true },
    منظر: { root: 'ن ظ ر', pos: 'noun', gloss: 'sight, view', content: true },
    إله: { root: 'أ ل ه', pos: 'noun', gloss: 'god, deity', content: true },
    إلا: { root: '—', pos: 'part', gloss: 'except, only', content: false },
    خطب: { root: 'خ ط ب', pos: 'verb', gloss: 'to give a speech, deliver a sermon', content: true },
    زار: { root: 'ز و ر', pos: 'verb', gloss: 'to visit', content: true },
    صديق: { root: 'ص د ق', pos: 'noun', gloss: 'friend', content: true },
    سعيد: { root: 'س ع د', pos: 'adj', gloss: 'happy, fortunate', content: true },
    خير: { root: 'خ ي ر', pos: 'noun', gloss: 'good, well-being', content: true },
    عصر: { root: 'ع ص ر', pos: 'noun', gloss: 'afternoon', content: true },
    رمضان: { root: '—', pos: 'proper', gloss: 'Ramaḍān', content: true },
    فطور: { root: 'ف ط ر', pos: 'noun', gloss: 'breakfast, fast-breaking meal', content: true },
    ليل: { root: 'ل ي ل', pos: 'noun', gloss: 'night', content: true },
    ليلة: { root: 'ل ي ل', pos: 'noun', gloss: 'a night', content: true },
    شعر: { root: 'ش ع ر', pos: 'verb', gloss: 'to feel, sense', content: true },
    ضاع: { root: 'ض ي ع', pos: 'verb', gloss: 'to be lost, wasted', content: true },
    ساعة: { root: 'س و ع', pos: 'noun', gloss: 'hour', content: true },
    غني: { root: 'غ ن ي', pos: 'adj', gloss: 'rich, wealthy', content: true },
    عند: { root: 'ع ن د', pos: 'prep', gloss: 'at, by (in time/place)', content: false },
    لبس: { root: 'ل ب س', pos: 'verb', gloss: 'to wear', content: true },
    ذكر: { root: 'ذ ك ر', pos: 'verb', gloss: 'to remember, mention', content: true },
    لا: { root: '—', pos: 'part', gloss: 'not, no', content: false },
    أو: { root: '—', pos: 'conj', gloss: 'or', content: false },
    ب: { root: '—', pos: 'prep', gloss: 'with, at', content: false },
    شيء: { root: 'ش ي أ', pos: 'noun', gloss: 'thing', content: true },
  },
  paragraphs: [
    {
      id: 'p1',
      en: 'Yesterday was the day of Eid. The people and the children gathered at sunset watching for the crescent moon, and they climbed up onto the roofs of the houses, the terraces, and the minarets.',
      sentences: [
        {
          id: 'qr1-31-001',
          page: 112,
          ar: 'كَانَ أَمْسِ يَوْمُ الْعِيْدِ.',
          en: 'Yesterday was the day of Eid.',
          tokens: [
            { surface: 'كَانَ', lemma: 'كان', features: 'perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'was' },
            { surface: 'أَمْسِ', lemma: 'أمس', features: 'adv', root: '—', pos: 'adv', gloss: 'yesterday' },
            { surface: 'يَوْمُ', lemma: 'يوم', features: 'nom.constr', root: 'ي و م', pos: 'noun', gloss: 'the day of' },
            { surface: 'الْعِيْدِ', lemma: 'عيد', features: 'def.gen', root: 'ع و د', pos: 'noun', gloss: 'Eid' },
          ],
        },
        {
          id: 'qr1-31-002',
          page: 112,
          ar: 'اجْتَمَعَ النَّاسُ وَالأَطْفَالُ عِنْدَ الْغُرُوْبِ يَتَرَاءَوْنَ الْهِلاَلَ،',
          en: 'The people and the children gathered at sunset watching for the crescent moon,',
          tokens: [
            { surface: 'اجْتَمَعَ', lemma: 'اجتمع', features: 'perf.3ms', root: 'ج م ع', pos: 'verb', gloss: 'gathered' },
            { surface: 'النَّاسُ', lemma: 'ناس', features: 'def.nom', root: '—', pos: 'noun', gloss: 'the people' },
            { surface: 'وَالأَطْفَالُ', lemma: 'طفل', features: 'conj+pl.def.nom', root: 'ط ف ل', pos: 'noun', gloss: 'and the children' },
            { surface: 'عِنْدَ', lemma: 'عند', features: 'prep', root: 'ع ن د', pos: 'prep', gloss: 'at' },
            { surface: 'الْغُرُوْبِ', lemma: 'غروب', features: 'def.gen', root: 'غ ر ب', pos: 'noun', gloss: 'the sunset' },
            { surface: 'يَتَرَاءَوْنَ', lemma: 'تراءى', features: 'impf.3mp', root: 'ر أ ي', pos: 'verb', gloss: 'watching for' },
            { surface: 'الْهِلاَلَ', lemma: 'هلال', features: 'def.acc', root: 'ه ل ل', pos: 'noun', gloss: 'the crescent moon' },
          ],
        },
        {
          id: 'qr1-31-003',
          page: 112,
          ar: 'وَصَعِدُوا عَلَىٰ سُقُوْفِ الْبُيُوْتِ وَالسُّطُوْحِ وَعَلَىٰ الْمَنَارَاتِ.',
          en: 'and they climbed up onto the roofs of the houses, the terraces, and the minarets.',
          tokens: [
            { surface: 'وَصَعِدُوا', lemma: 'صعد', features: 'conj+perf.3mp', root: 'ص ع د', pos: 'verb', gloss: 'and climbed' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'onto' },
            { surface: 'سُقُوْفِ', lemma: 'سقف', features: 'pl.gen.constr', root: 'س ق ف', pos: 'noun', gloss: 'the roofs of' },
            { surface: 'الْبُيُوْتِ', lemma: 'بيت', features: 'pl.def.gen', root: 'ب ي ت', pos: 'noun', gloss: 'the houses' },
            { surface: 'وَالسُّطُوْحِ', lemma: 'سطح', features: 'conj+pl.def.gen', root: 'س ط ح', pos: 'noun', gloss: 'and the terraces' },
            { surface: 'وَعَلَىٰ', lemma: 'على', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and onto' },
            { surface: 'الْمَنَارَاتِ', lemma: 'منارة', features: 'pl.def.gen', root: 'ن و ر', pos: 'noun', gloss: 'the minarets' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَتَى اجْتَمَعَ النَّاسُ يَتَرَاءَوْنَ الْهِلاَلَ؟',
          options: ['عِنْدَ الْغُرُوْبِ', 'فِي الصَّبَاحِ', 'فِي مُنْتَصَفِ اللَّيْلِ'],
          answer: 0,
          qEn: 'When did the people gather to watch for the crescent moon?',
          optionsEn: ['At sunset', 'In the morning', 'At midnight'],
        },
      ],
    },
    {
      id: 'p2',
      en: "The crescent moon appeared, and the children cried out: 'The crescent! The crescent!' and ran to their houses and greeted their fathers, mothers, and relatives, who prayed blessings and long life upon them.",
      sentences: [
        {
          id: 'qr1-31-004',
          page: 112,
          ar: 'ظَهَرَ الْهِلاَلُ فَهَتَفَ الأَوْلاَدُ: «الْهِلاَلُ، الْهِلاَلُ»',
          en: "The crescent moon appeared, and the children cried out: 'The crescent! The crescent!'",
          tokens: [
            { surface: 'ظَهَرَ', lemma: 'ظهر-فعل', features: 'perf.3ms', root: 'ظ ه ر', pos: 'verb', gloss: 'appeared' },
            { surface: 'الْهِلاَلُ', lemma: 'هلال', features: 'def.nom', root: 'ه ل ل', pos: 'noun', gloss: 'the crescent moon' },
            { surface: 'فَهَتَفَ', lemma: 'هتف', features: 'conj+perf.3ms', root: 'ه ت ف', pos: 'verb', gloss: 'so cried out' },
            { surface: 'الأَوْلاَدُ', lemma: 'ولد', features: 'pl.def.nom', root: 'و ل د', pos: 'noun', gloss: 'the children' },
            { surface: 'الْهِلاَلُ', lemma: 'هلال', features: 'def.nom', root: 'ه ل ل', pos: 'noun', gloss: 'the crescent moon!' },
            { surface: 'الْهِلاَلُ', lemma: 'هلال', features: 'def.nom', root: 'ه ل ل', pos: 'noun', gloss: 'the crescent moon!' },
          ],
        },
        {
          id: 'qr1-31-005',
          page: 112,
          ar: 'وَجَرَوْا إِلَىٰ بُيُوْتِهِمْ وَسَلَّمُوْا عَلَىٰ آبَائِهِمْ وَأُمَّهَاتِهِمْ وَعَلَىٰ الأَقَارِبِ،',
          en: 'and ran to their houses and greeted their fathers, mothers, and relatives,',
          tokens: [
            { surface: 'وَجَرَوْا', lemma: 'جرى', features: 'conj+perf.3mp', root: 'ج ر ي', pos: 'verb', gloss: 'and ran' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'بُيُوْتِهِمْ', lemma: 'بيت', features: 'pl.gen+3mp', root: 'ب ي ت', pos: 'noun', gloss: 'their houses' },
            { surface: 'وَسَلَّمُوْا', lemma: 'سلم', features: 'conj+perf.3mp', root: 'س ل م', pos: 'verb', gloss: 'and greeted' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'upon' },
            { surface: 'آبَائِهِمْ', lemma: 'أب', features: 'pl.gen+3mp', root: 'أ ب و', pos: 'noun', gloss: 'their fathers' },
            { surface: 'وَأُمَّهَاتِهِمْ', lemma: 'أم', features: 'conj+pl.gen+3mp', root: 'أ م م', pos: 'noun', gloss: 'and their mothers' },
            { surface: 'وَعَلَىٰ', lemma: 'على', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and upon' },
            { surface: 'الأَقَارِبِ', lemma: 'قريب', features: 'pl.def.gen', root: 'ق ر ب', pos: 'adj', gloss: 'the relatives' },
          ],
        },
        {
          id: 'qr1-31-006',
          page: 113,
          ar: 'فَدَعَوْا لَهُمْ بِالْبَرَكَةِ وَطُوْلِ الْعُمُرِ.',
          en: 'who prayed blessings and long life upon them.',
          tokens: [
            { surface: 'فَدَعَوْا', lemma: 'دعا', features: 'conj+perf.3mp', root: 'د ع و', pos: 'verb', gloss: 'and prayed for' },
            { surface: 'لَهُمْ', lemma: 'ل', features: 'prep+3mp', root: '—', pos: 'prep', gloss: 'for them' },
            { surface: 'بِالْبَرَكَةِ', lemma: 'بركة', features: 'prep+def.gen', root: 'ب ر ك', pos: 'noun', gloss: 'with blessing' },
            { surface: 'وَطُوْلِ', lemma: 'طول', features: 'conj+gen.constr', root: 'ط و ل', pos: 'noun', gloss: 'and length of' },
            { surface: 'الْعُمُرِ', lemma: 'عمر', features: 'def.gen', root: 'ع م ر', pos: 'noun', gloss: 'life' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا هَتَفَ الأَوْلاَدُ عِنْدَمَا ظَهَرَ الْهِلاَلُ؟',
          options: ['الْهِلاَلُ، الْهِلاَلُ', 'جَاءَ رَمَضَانُ', 'مَبْرُوْكٌ'],
          answer: 0,
          qEn: 'What did the children cry out when the crescent moon appeared?',
          optionsEn: ['The crescent! The crescent!', 'Ramadan has come!', 'Congratulations!'],
        },
      ],
    },
    {
      id: 'p3',
      en: 'The children slept little on the night of Eid, and woke up early, having looked at their clothes, shoes, and caps many times.',
      sentences: [
        {
          id: 'qr1-31-007',
          page: 113,
          ar: 'وَنَامَ الأَطْفَالُ لَيْلَةَ الْعِيْدِ قَلِيْلاً،',
          en: 'The children slept little on the night of Eid,',
          tokens: [
            { surface: 'وَنَامَ', lemma: 'نام', features: 'conj+perf.3ms', root: 'ن و م', pos: 'verb', gloss: 'and slept' },
            { surface: 'الأَطْفَالُ', lemma: 'طفل', features: 'pl.def.nom', root: 'ط ف ل', pos: 'noun', gloss: 'the children' },
            { surface: 'لَيْلَةَ', lemma: 'ليلة', features: 'acc.constr', root: 'ل ي ل', pos: 'noun', gloss: 'the night of' },
            { surface: 'الْعِيْدِ', lemma: 'عيد', features: 'def.gen', root: 'ع و د', pos: 'noun', gloss: 'Eid' },
            { surface: 'قَلِيْلاً', lemma: 'قليل', features: 'indef.acc', root: 'ق ل ل', pos: 'adj', gloss: 'a little' },
          ],
        },
        {
          id: 'qr1-31-008',
          page: 113,
          ar: 'وَاسْتَيْقَظُوْا مُبَكِّرِيْنَ وَقَدْ نَظَرُوْا إِلَىٰ مَلاَبِسِهِمْ وَأَحْذِيَتِهِمْ وَقَلاَنِسِهِمْ مِرَاراً عَدِيْدَةً.',
          en: 'and woke up early, having looked at their clothes, shoes, and caps many times.',
          tokens: [
            { surface: 'وَاسْتَيْقَظُوْا', lemma: 'استيقظ', features: 'conj+perf.3mp', root: 'ي ق ظ', pos: 'verb', gloss: 'and woke up' },
            { surface: 'مُبَكِّرِيْنَ', lemma: 'مبكر', features: 'pl.acc', root: 'ب ك ر', pos: 'adv', gloss: 'early' },
            { surface: 'وَقَدْ', lemma: 'قد', features: 'conj+part', root: '—', pos: 'part', gloss: 'having' },
            { surface: 'نَظَرُوْا', lemma: 'نظر', features: 'perf.3mp', root: 'ن ظ ر', pos: 'verb', gloss: 'looked' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'at' },
            { surface: 'مَلاَبِسِهِمْ', lemma: 'لباس', features: 'pl.gen+3mp', root: 'ل ب س', pos: 'noun', gloss: 'their clothes' },
            { surface: 'وَأَحْذِيَتِهِمْ', lemma: 'حذاء', features: 'conj+pl.gen+3mp', root: 'ح ذ و', pos: 'noun', gloss: 'and their shoes' },
            { surface: 'وَقَلاَنِسِهِمْ', lemma: 'قلنسوة', features: 'conj+pl.gen+3mp', root: 'ق ل ن س', pos: 'noun', gloss: 'and their caps' },
            { surface: 'مِرَاراً', lemma: 'مرار', features: 'indef.acc', root: 'م ر ر', pos: 'noun', gloss: 'times' },
            { surface: 'عَدِيْدَةً', lemma: 'عديد', features: 'indef.acc.f', root: 'ع د د', pos: 'adj', gloss: 'numerous' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ الأَطْفَالُ لَيْلَةَ الْعِيْدِ؟',
          options: ['نَامُوا قَلِيْلاً وَنَظَرُوا إِلَىٰ مَلاَبِسِهِمْ مِرَاراً', 'نَامُوا طَوِيْلاً', 'لَمْ يَنَامُوا'],
          answer: 0,
          qEn: 'What did the children do on the night of Eid?',
          optionsEn: ['They slept little and looked at their clothes many times', 'They slept a long time', "They didn't sleep at all"],
        },
      ],
    },
    {
      id: 'p4',
      en: 'When the morning of Eid came, they got up from their beds, prayed the dawn prayer, bathed, and changed their clothes. Many of them wore new clothes, new shoes, and beautiful caps, and their mothers, seeing them, were delighted, and their fathers and relatives gave them an Eid gift.',
      sentences: [
        {
          id: 'qr1-31-009',
          page: 113,
          ar: 'وَلَمَّا كَانَ صَبَاحُ الْعِيْدِ قَامُوا مِنْ فُرُشِهِمْ وَصَلُّوا الصُّبْحَ وَاغْتَسَلُوْا وَغَيَّرُوْا مَلاَبِسَهُمْ،',
          en: 'When the morning of Eid came, they got up from their beds, prayed the dawn prayer, bathed, and changed their clothes,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لما', features: 'conj+part', root: '—', pos: 'part', gloss: 'and when' },
            { surface: 'كَانَ', lemma: 'كان', features: 'perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'was' },
            { surface: 'صَبَاحُ', lemma: 'صباح', features: 'nom.constr', root: 'ص ب ح', pos: 'noun', gloss: 'the morning of' },
            { surface: 'الْعِيْدِ', lemma: 'عيد', features: 'def.gen', root: 'ع و د', pos: 'noun', gloss: 'Eid' },
            { surface: 'قَامُوا', lemma: 'قام', features: 'perf.3mp', root: 'ق و م', pos: 'verb', gloss: 'they got up' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'فُرُشِهِمْ', lemma: 'فراش', features: 'pl.gen+3mp', root: 'ف ر ش', pos: 'noun', gloss: 'their beds' },
            { surface: 'وَصَلُّوا', lemma: 'صلى', features: 'conj+perf.3mp', root: 'ص ل و', pos: 'verb', gloss: 'and prayed' },
            { surface: 'الصُّبْحَ', lemma: 'صبح', features: 'def.acc', root: 'ص ب ح', pos: 'noun', gloss: 'the dawn prayer' },
            { surface: 'وَاغْتَسَلُوْا', lemma: 'اغتسل', features: 'conj+perf.3mp', root: 'غ س ل', pos: 'verb', gloss: 'and bathed' },
            { surface: 'وَغَيَّرُوْا', lemma: 'غيّر', features: 'conj+perf.3mp', root: 'غ ي ر', pos: 'verb', gloss: 'and changed' },
            { surface: 'مَلاَبِسَهُمْ', lemma: 'لباس', features: 'pl.acc+3mp', root: 'ل ب س', pos: 'noun', gloss: 'their clothes' },
          ],
        },
        {
          id: 'qr1-31-010',
          page: 113,
          ar: 'وَلَبِسَ كَثِيْرٌ مِنْهُمْ مَلاَبِسَ جَدِيْدَةً وَأَحْذِيَةً جَدِيْدَةً وَقَلاَنِسَ جَمِيْلَةً،',
          en: 'and many of them wore new clothes, new shoes, and beautiful caps,',
          tokens: [
            { surface: 'وَلَبِسَ', lemma: 'لبس', features: 'conj+perf.3ms', root: 'ل ب س', pos: 'verb', gloss: 'and wore' },
            { surface: 'كَثِيْرٌ', lemma: 'كثير', features: 'indef.nom', root: 'ك ث ر', pos: 'adj', gloss: 'many' },
            { surface: 'مِنْهُمْ', lemma: 'من', features: 'prep+3mp', root: '—', pos: 'prep', gloss: 'of them' },
            { surface: 'مَلاَبِسَ', lemma: 'لباس', features: 'indef.pl.acc', root: 'ل ب س', pos: 'noun', gloss: 'clothes' },
            { surface: 'جَدِيْدَةً', lemma: 'جديد', features: 'indef.acc.f', root: 'ج د د', pos: 'adj', gloss: 'new' },
            { surface: 'وَأَحْذِيَةً', lemma: 'حذاء', features: 'conj+indef.pl.acc', root: 'ح ذ و', pos: 'noun', gloss: 'and shoes' },
            { surface: 'جَدِيْدَةً', lemma: 'جديد', features: 'indef.acc.f', root: 'ج د د', pos: 'adj', gloss: 'new' },
            { surface: 'وَقَلاَنِسَ', lemma: 'قلنسوة', features: 'conj+indef.pl.acc', root: 'ق ل ن س', pos: 'noun', gloss: 'and caps' },
            { surface: 'جَمِيْلَةً', lemma: 'جميل', features: 'indef.acc.f', root: 'ج م ل', pos: 'adj', gloss: 'beautiful' },
          ],
        },
        {
          id: 'qr1-31-011',
          page: 113,
          ar: 'وَرَأَتْهُمْ أُمَّهَاتُهُمْ فَفَرِحْنَ بِهِمْ،',
          en: 'and their mothers, seeing them, were delighted,',
          tokens: [
            { surface: 'وَرَأَتْهُمْ', lemma: 'رأى', features: 'conj+perf.3fs+3mp', root: 'ر أ ي', pos: 'verb', gloss: 'and saw them' },
            { surface: 'أُمَّهَاتُهُمْ', lemma: 'أم', features: 'pl.nom+3mp', root: 'أ م م', pos: 'noun', gloss: 'their mothers' },
            { surface: 'فَفَرِحْنَ', lemma: 'فرح', features: 'conj+perf.3fp', root: 'ف ر ح', pos: 'verb', gloss: 'so rejoiced' },
            { surface: 'بِهِمْ', lemma: 'ب', features: 'prep+3mp', root: '—', pos: 'prep', gloss: 'at them' },
          ],
        },
        {
          id: 'qr1-31-012',
          page: 113,
          ar: 'وَقَدَّمَ لَهُمْ آبَاؤُهُمْ وَأَقَارِبُهُمْ جَائِزَةَ الْعِيْدِ.',
          en: 'and their fathers and relatives gave them an Eid gift.',
          tokens: [
            { surface: 'وَقَدَّمَ', lemma: 'قدم', features: 'conj+perf.3ms', root: 'ق د م', pos: 'verb', gloss: 'and presented' },
            { surface: 'لَهُمْ', lemma: 'ل', features: 'prep+3mp', root: '—', pos: 'prep', gloss: 'to them' },
            { surface: 'آبَاؤُهُمْ', lemma: 'أب', features: 'pl.nom+3mp', root: 'أ ب و', pos: 'noun', gloss: 'their fathers' },
            { surface: 'وَأَقَارِبُهُمْ', lemma: 'قريب', features: 'conj+pl.nom+3mp', root: 'ق ر ب', pos: 'adj', gloss: 'and their relatives' },
            { surface: 'جَائِزَةَ', lemma: 'جائزة', features: 'acc.constr', root: 'ج و ز', pos: 'noun', gloss: 'the prize of' },
            { surface: 'الْعِيْدِ', lemma: 'عيد', features: 'def.gen', root: 'ع و د', pos: 'noun', gloss: 'Eid' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَدَّمَ الآبَاءُ وَالأَقَارِبُ لِلأَطْفَالِ؟',
          options: ['جَائِزَةَ الْعِيْدِ', 'كُتُباً', 'لاَ شَيْءَ'],
          answer: 0,
          qEn: 'What did the fathers and relatives give the children?',
          optionsEn: ['An Eid gift', 'Books', 'Nothing'],
        },
      ],
    },
    {
      id: 'p5',
      en: 'There was an orphan boy whose mother served in the house of Sa\'īd, and he had no new clothes, no new shoes, and no clean cap. So he washed and wore his old clothes, which had cracked, and his old cap, which had become dirty, and he would look at his peers and at the children of the rich with envy and shame, while his mother was sad, remembering his father.',
      sentences: [
        {
          id: 'qr1-31-013',
          page: 113,
          ar: 'وَكَانَ وَلَدٌ يَتِيْمٌ تَخْدِمُ أُمُّهُ فِيْ بَيْتِ سَعِيْدٍ.',
          en: "There was an orphan boy whose mother served in the house of Sa'īd.",
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and there was' },
            { surface: 'وَلَدٌ', lemma: 'ولد', features: 'indef.nom', root: 'و ل د', pos: 'noun', gloss: 'a boy' },
            { surface: 'يَتِيْمٌ', lemma: 'يتيم', features: 'indef.nom', root: 'ي ت م', pos: 'adj', gloss: 'orphaned' },
            { surface: 'تَخْدِمُ', lemma: 'خدم', features: 'impf.3fs', root: 'خ د م', pos: 'verb', gloss: 'served' },
            { surface: 'أُمُّهُ', lemma: 'أم', features: 'nom+3ms', root: 'أ م م', pos: 'noun', gloss: 'his mother' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'بَيْتِ', lemma: 'بيت', features: 'gen.constr', root: 'ب ي ت', pos: 'noun', gloss: 'the house of' },
            { surface: 'سَعِيْدٍ', lemma: 'سعيد-اسم', features: 'gen', root: 'س ع د', pos: 'proper', gloss: "Sa'īd" },
          ],
        },
        {
          id: 'qr1-31-014',
          page: 113,
          ar: 'وَلَيْسَ عِنْدَهُ لِبَاسٌ جَدِيْدٌ وَلاَ حِذَاءٌ جَدِيْدٌ وَلاَ قَلَنْسُوَةٌ نَظِيْفَةٌ،',
          en: 'and he had no new clothes, no new shoes, and no clean cap.',
          tokens: [
            { surface: 'وَلَيْسَ', lemma: 'ليس', features: 'conj', root: '—', pos: 'verb', gloss: 'and there was not' },
            { surface: 'عِنْدَهُ', lemma: 'عند', features: 'prep+3ms', root: 'ع ن د', pos: 'prep', gloss: 'with him' },
            { surface: 'لِبَاسٌ', lemma: 'لباس', features: 'indef.nom', root: 'ل ب س', pos: 'noun', gloss: 'clothing' },
            { surface: 'جَدِيْدٌ', lemma: 'جديد', features: 'indef.nom', root: 'ج د د', pos: 'adj', gloss: 'new' },
            { surface: 'وَلاَ', lemma: 'لا', features: 'conj+part', root: '—', pos: 'part', gloss: 'and no' },
            { surface: 'حِذَاءٌ', lemma: 'حذاء', features: 'indef.nom', root: 'ح ذ و', pos: 'noun', gloss: 'shoe' },
            { surface: 'جَدِيْدٌ', lemma: 'جديد', features: 'indef.nom', root: 'ج د د', pos: 'adj', gloss: 'new' },
            { surface: 'وَلاَ', lemma: 'لا', features: 'conj+part', root: '—', pos: 'part', gloss: 'and no' },
            { surface: 'قَلَنْسُوَةٌ', lemma: 'قلنسوة', features: 'indef.nom', root: 'ق ل ن س', pos: 'noun', gloss: 'cap' },
            { surface: 'نَظِيْفَةٌ', lemma: 'نظيف', features: 'indef.nom.f', root: 'ن ظ ف', pos: 'adj', gloss: 'clean' },
          ],
        },
        {
          id: 'qr1-31-015',
          page: 113,
          ar: 'فَاغْتَسَلَ وَلَبِسَ لِبَاسَهُ الْقَدِيْمَ وَقَدْ تَشَقَّقَ،',
          en: 'So he washed and wore his old clothes, which had cracked,',
          tokens: [
            { surface: 'فَاغْتَسَلَ', lemma: 'اغتسل', features: 'conj+perf.3ms', root: 'غ س ل', pos: 'verb', gloss: 'so he bathed' },
            { surface: 'وَلَبِسَ', lemma: 'لبس', features: 'conj+perf.3ms', root: 'ل ب س', pos: 'verb', gloss: 'and wore' },
            { surface: 'لِبَاسَهُ', lemma: 'لباس', features: 'acc+3ms', root: 'ل ب س', pos: 'noun', gloss: 'his clothing' },
            { surface: 'الْقَدِيْمَ', lemma: 'قديم', features: 'def.acc', root: 'ق د م', pos: 'adj', gloss: 'the old' },
            { surface: 'وَقَدْ', lemma: 'قد', features: 'conj+part', root: '—', pos: 'part', gloss: 'which had' },
            { surface: 'تَشَقَّقَ', lemma: 'تشقق', features: 'perf.3ms', root: 'ش ق ق', pos: 'verb', gloss: 'cracked' },
          ],
        },
        {
          id: 'qr1-31-016',
          page: 113,
          ar: 'وَلَبِسَ قَلَنْسُوَتَهُ الْقَدِيْمَةَ وَقَدْ تَوَسَّخَتْ،',
          en: 'and his old cap, which had become dirty,',
          tokens: [
            { surface: 'وَلَبِسَ', lemma: 'لبس', features: 'conj+perf.3ms', root: 'ل ب س', pos: 'verb', gloss: 'and wore' },
            { surface: 'قَلَنْسُوَتَهُ', lemma: 'قلنسوة', features: 'acc+3ms', root: 'ق ل ن س', pos: 'noun', gloss: 'his cap' },
            { surface: 'الْقَدِيْمَةَ', lemma: 'قديم', features: 'def.acc.f', root: 'ق د م', pos: 'adj', gloss: 'the old' },
            { surface: 'وَقَدْ', lemma: 'قد', features: 'conj+part', root: '—', pos: 'part', gloss: 'which had' },
            { surface: 'تَوَسَّخَتْ', lemma: 'توسخ', features: 'perf.3fs', root: 'و س خ', pos: 'verb', gloss: 'become dirty' },
          ],
        },
        {
          id: 'qr1-31-017',
          page: 113,
          ar: 'وَكَانَ يَنْظُرُ إِلَىٰ أَتْرَابِهِ وَإِلَىٰ أَوْلاَدِ الأَغْنِيَاءِ بِغِبْطَةٍ وَخَجَلٍ،',
          en: 'and he would look at his peers and at the children of the rich with envy and shame,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and would' },
            { surface: 'يَنْظُرُ', lemma: 'نظر', features: 'impf.3ms', root: 'ن ظ ر', pos: 'verb', gloss: 'look' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'at' },
            { surface: 'أَتْرَابِهِ', lemma: 'ترب', features: 'pl.gen+3ms', root: 'ت ر ب', pos: 'noun', gloss: 'his peers' },
            { surface: 'وَإِلَىٰ', lemma: 'إلى', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and at' },
            { surface: 'أَوْلاَدِ', lemma: 'ولد', features: 'pl.gen.constr', root: 'و ل د', pos: 'noun', gloss: 'the children of' },
            { surface: 'الأَغْنِيَاءِ', lemma: 'غني', features: 'pl.def.gen', root: 'غ ن ي', pos: 'adj', gloss: 'the rich' },
            { surface: 'بِغِبْطَةٍ', lemma: 'غبطة', features: 'prep+indef.gen', root: 'غ ب ط', pos: 'noun', gloss: 'with envy' },
            { surface: 'وَخَجَلٍ', lemma: 'خجل-اسم', features: 'conj+indef.gen', root: 'خ ج ل', pos: 'noun', gloss: 'and shame' },
          ],
        },
        {
          id: 'qr1-31-018',
          page: 113,
          ar: 'وَكَانَتْ أُمُّهُ مَحْزُوْنَةً تَذْكُرُ أَبَاهُ.',
          en: 'while his mother was sad, remembering his father.',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كان', features: 'conj+perf.3fs', root: 'ك و ن', pos: 'verb', gloss: 'and was' },
            { surface: 'أُمُّهُ', lemma: 'أم', features: 'nom+3ms', root: 'أ م م', pos: 'noun', gloss: 'his mother' },
            { surface: 'مَحْزُوْنَةً', lemma: 'محزون', features: 'indef.acc.f', root: 'ح ز ن', pos: 'adj', gloss: 'sad' },
            { surface: 'تَذْكُرُ', lemma: 'ذكر', features: 'impf.3fs', root: 'ذ ك ر', pos: 'verb', gloss: 'remembering' },
            { surface: 'أَبَاهُ', lemma: 'أب', features: 'acc+3ms', root: 'أ ب و', pos: 'noun', gloss: 'his father' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ الْيَتِيْمُ يَنْظُرُ إِلَىٰ أَتْرَابِهِ بِغِبْطَةٍ وَخَجَلٍ؟',
          options: ['لِأَنَّهُ لَمْ يَكُنْ عِنْدَهُ لِبَاسٌ جَدِيْدٌ', 'لِأَنَّهُ كَانَ مَرِيْضاً', 'لِأَنَّهُ كَانَ غَنِيّاً'],
          answer: 0,
          qEn: 'Why did the orphan look at his peers with envy and shame?',
          optionsEn: ['Because he had no new clothes', 'Because he was ill', 'Because he was rich'],
        },
      ],
    },
    {
      id: 'p6',
      en: "Sa'īd was saddened by this sight and felt ashamed within himself, so he hurried to his chest and gave him a clean garment and a clean cap as a gift. The orphan went and changed his clothes and rejoiced greatly, and his mother rejoiced too, and prayed blessings and long life upon Sa'īd.",
      sentences: [
        {
          id: 'qr1-31-019',
          page: 113,
          ar: 'حَزِنَ سَعِيْدٌ بِهٰذَا الْمَنْظَرِ وَاسْتَحْيَا فِيْ نَفْسِهِ،',
          en: "Sa'īd was saddened by this sight and felt ashamed within himself,",
          tokens: [
            { surface: 'حَزِنَ', lemma: 'حزن', features: 'perf.3ms', root: 'ح ز ن', pos: 'verb', gloss: 'grieved' },
            { surface: 'سَعِيْدٌ', lemma: 'سعيد-اسم', features: 'nom', root: 'س ع د', pos: 'proper', gloss: "Sa'īd" },
            { surface: 'بِهٰذَا', lemma: 'هذا', features: 'prep+dem', root: '—', pos: 'dem', gloss: 'at this' },
            { surface: 'الْمَنْظَرِ', lemma: 'منظر', features: 'def.gen', root: 'ن ظ ر', pos: 'noun', gloss: 'sight' },
            { surface: 'وَاسْتَحْيَا', lemma: 'استحيا', features: 'conj+perf.3ms', root: 'ح ي ي', pos: 'verb', gloss: 'and felt ashamed' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'نَفْسِهِ', lemma: 'نفس', features: 'gen+3ms', root: 'ن ف س', pos: 'noun', gloss: 'himself' },
          ],
        },
        {
          id: 'qr1-31-020',
          page: 113,
          ar: 'فَأَسْرَعَ إِلَىٰ صُنْدُوْقِهِ وَأَهْدَىٰ إِلَيْهِ مَلْبُوْساً نَظِيْفاً وَقَلَنْسُوَةً نَظِيْفَةً،',
          en: 'so he hurried to his chest and gave him a clean garment and a clean cap as a gift,',
          tokens: [
            { surface: 'فَأَسْرَعَ', lemma: 'أسرع', features: 'conj+perf.3ms', root: 'س ر ع', pos: 'verb', gloss: 'so hurried' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'صُنْدُوْقِهِ', lemma: 'صندوق', features: 'gen+3ms', root: 'ص ن د ق', pos: 'noun', gloss: 'his box' },
            { surface: 'وَأَهْدَىٰ', lemma: 'أهدى', features: 'conj+perf.3ms', root: 'ه د ي', pos: 'verb', gloss: 'and gave' },
            { surface: 'إِلَيْهِ', lemma: 'إلى', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'to him' },
            { surface: 'مَلْبُوْساً', lemma: 'ملبوس', features: 'indef.acc', root: 'ل ب س', pos: 'noun', gloss: 'a garment' },
            { surface: 'نَظِيْفاً', lemma: 'نظيف', features: 'indef.acc', root: 'ن ظ ف', pos: 'adj', gloss: 'clean' },
            { surface: 'وَقَلَنْسُوَةً', lemma: 'قلنسوة', features: 'conj+indef.acc', root: 'ق ل ن س', pos: 'noun', gloss: 'and a cap' },
            { surface: 'نَظِيْفَةً', lemma: 'نظيف', features: 'indef.acc.f', root: 'ن ظ ف', pos: 'adj', gloss: 'clean' },
          ],
        },
        {
          id: 'qr1-31-021',
          page: 113,
          ar: 'فَذَهَبَ الْيَتِيْمُ وَغَيَّرَ اللِّبَاسَ وَفَرِحَ كَثِيْراً وَفَرِحَتْ أُمُّهُ،',
          en: 'The orphan went and changed his clothes and rejoiced greatly, and his mother rejoiced too,',
          tokens: [
            { surface: 'فَذَهَبَ', lemma: 'ذهب', features: 'conj+perf.3ms', root: 'ذ ه ب', pos: 'verb', gloss: 'so went' },
            { surface: 'الْيَتِيْمُ', lemma: 'يتيم', features: 'def.nom', root: 'ي ت م', pos: 'adj', gloss: 'the orphan' },
            { surface: 'وَغَيَّرَ', lemma: 'غيّر', features: 'conj+perf.3ms', root: 'غ ي ر', pos: 'verb', gloss: 'and changed' },
            { surface: 'اللِّبَاسَ', lemma: 'لباس', features: 'def.acc', root: 'ل ب س', pos: 'noun', gloss: 'the clothing' },
            { surface: 'وَفَرِحَ', lemma: 'فرح', features: 'conj+perf.3ms', root: 'ف ر ح', pos: 'verb', gloss: 'and rejoiced' },
            { surface: 'كَثِيْراً', lemma: 'كثير', features: 'indef.acc', root: 'ك ث ر', pos: 'adj', gloss: 'greatly' },
            { surface: 'وَفَرِحَتْ', lemma: 'فرح', features: 'conj+perf.3fs', root: 'ف ر ح', pos: 'verb', gloss: 'and rejoiced' },
            { surface: 'أُمُّهُ', lemma: 'أم', features: 'nom+3ms', root: 'أ م م', pos: 'noun', gloss: 'his mother' },
          ],
        },
        {
          id: 'qr1-31-022',
          page: 114,
          ar: 'وَدَعَتْ لِسَعِيْدٍ بِالْبَرَكَةِ وَطُوْلِ الْعُمُرِ.',
          en: "and prayed blessings and long life upon Sa'īd.",
          tokens: [
            { surface: 'وَدَعَتْ', lemma: 'دعا', features: 'conj+perf.3fs', root: 'د ع و', pos: 'verb', gloss: 'and prayed for' },
            { surface: 'لِسَعِيْدٍ', lemma: 'سعيد-اسم', features: 'prep+gen', root: 'س ع د', pos: 'proper', gloss: "for Sa'īd" },
            { surface: 'بِالْبَرَكَةِ', lemma: 'بركة', features: 'prep+def.gen', root: 'ب ر ك', pos: 'noun', gloss: 'with blessing' },
            { surface: 'وَطُوْلِ', lemma: 'طول', features: 'conj+gen.constr', root: 'ط و ل', pos: 'noun', gloss: 'and length of' },
            { surface: 'الْعُمُرِ', lemma: 'عمر', features: 'def.gen', root: 'ع م ر', pos: 'noun', gloss: 'life' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ سَعِيْدٌ عِنْدَمَا حَزِنَ بِمَنْظَرِ الْيَتِيْمِ؟',
          options: ['أَهْدَاهُ مَلْبُوْساً وَقَلَنْسُوَةً نَظِيْفَةً', 'تَجَاهَلَهُ', 'أَعْطَاهُ نُقُوْداً'],
          answer: 0,
          qEn: "What did Sa'īd do when he was saddened by the orphan's condition?",
          optionsEn: ['He gave him a clean garment and cap as a gift', 'He ignored him', 'He gave him money'],
        },
      ],
    },
    {
      id: 'p7',
      en: "When the sun rose, the people went out to the prayer ground, and it was a beautiful sight -- they were saying: 'Allah is greatest, Allah is greatest, Allah is greatest, there is no god but Allah, and Allah is greatest, Allah is greatest, and to Allah belongs all praise.'",
      sentences: [
        {
          id: 'qr1-31-023',
          page: 114,
          ar: 'وَلَمَّا ارْتَفَعَتِ الشَّمْسُ خَرَجَ النَّاسُ إِلَىٰ الْمُصَلَّىٰ.',
          en: 'When the sun rose, the people went out to the prayer ground,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لما', features: 'conj+part', root: '—', pos: 'part', gloss: 'and when' },
            { surface: 'ارْتَفَعَتِ', lemma: 'ارتفع', features: 'perf.3fs', root: 'ر ف ع', pos: 'verb', gloss: 'rose' },
            { surface: 'الشَّمْسُ', lemma: 'شمس', features: 'def.nom', root: 'ش م س', pos: 'noun', gloss: 'the sun' },
            { surface: 'خَرَجَ', lemma: 'خرج', features: 'perf.3ms', root: 'خ ر ج', pos: 'verb', gloss: 'went out' },
            { surface: 'النَّاسُ', lemma: 'ناس', features: 'def.nom', root: '—', pos: 'noun', gloss: 'the people' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'الْمُصَلَّىٰ', lemma: 'مصلى', features: 'def.gen', root: 'ص ل و', pos: 'noun', gloss: 'the prayer ground' },
          ],
        },
        {
          id: 'qr1-31-024',
          page: 114,
          ar: 'وَكَانَ مَنْظَراً جَمِيْلاً يَقُوْلُوْنَ:',
          en: 'and it was a beautiful sight -- they were saying:',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and it was' },
            { surface: 'مَنْظَراً', lemma: 'منظر', features: 'indef.acc', root: 'ن ظ ر', pos: 'noun', gloss: 'a sight' },
            { surface: 'جَمِيْلاً', lemma: 'جميل', features: 'indef.acc', root: 'ج م ل', pos: 'adj', gloss: 'beautiful' },
            { surface: 'يَقُوْلُوْنَ', lemma: 'قال', features: 'impf.3mp', root: 'ق و ل', pos: 'verb', gloss: 'saying' },
          ],
        },
        {
          id: 'qr1-31-025',
          page: 114,
          ar: '«اللهُ أَكْبَرُ اللهُ أَكْبَرُ اللهُ أَكْبَرُ، لاَ إِلٰهَ إِلاَّ اللهُ، وَاللهُ أَكْبَرُ اللهُ أَكْبَرُ، وللهِ الْحَمْدُ».',
          en: "'Allah is greatest, Allah is greatest, Allah is greatest, there is no god but Allah, and Allah is greatest, Allah is greatest, and to Allah belongs all praise.'",
          tokens: [
            { surface: 'اللهُ', lemma: 'الله', features: 'def.nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'أَكْبَرُ', lemma: 'أكبر', features: 'nom', root: 'ك ب ر', pos: 'adj', gloss: 'is greatest' },
            { surface: 'اللهُ', lemma: 'الله', features: 'def.nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'أَكْبَرُ', lemma: 'أكبر', features: 'nom', root: 'ك ب ر', pos: 'adj', gloss: 'is greatest' },
            { surface: 'اللهُ', lemma: 'الله', features: 'def.nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'أَكْبَرُ', lemma: 'أكبر', features: 'nom', root: 'ك ب ر', pos: 'adj', gloss: 'is greatest' },
            { surface: 'لاَ', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'there is no' },
            { surface: 'إِلٰهَ', lemma: 'إله', features: 'indef.acc', root: 'أ ل ه', pos: 'noun', gloss: 'god' },
            { surface: 'إِلاَّ', lemma: 'إلا', features: 'part', root: '—', pos: 'part', gloss: 'except' },
            { surface: 'اللهُ', lemma: 'الله', features: 'def.nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'وَاللهُ', lemma: 'الله', features: 'conj+def.nom', root: '—', pos: 'proper', gloss: 'and Allah' },
            { surface: 'أَكْبَرُ', lemma: 'أكبر', features: 'nom', root: 'ك ب ر', pos: 'adj', gloss: 'is greatest' },
            { surface: 'اللهُ', lemma: 'الله', features: 'def.nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'أَكْبَرُ', lemma: 'أكبر', features: 'nom', root: 'ك ب ر', pos: 'adj', gloss: 'is greatest' },
            { surface: 'وللهِ', lemma: 'الله', features: 'conj+prep+gen', root: '—', pos: 'proper', gloss: 'and to Allah [belongs]' },
            { surface: 'الْحَمْدُ', lemma: 'حمد-اسم', features: 'def.nom', root: 'ح م د', pos: 'noun', gloss: 'the praise' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ النَّاسُ يَقُوْلُوْنَ وَهُمْ ذَاهِبُوْنَ إِلَىٰ الْمُصَلَّىٰ؟',
          options: ['اللهُ أَكْبَرُ', 'السَّلاَمُ عَلَيْكُمْ', 'الْحَمْدُ لِلّٰهِ فَقَطْ'],
          answer: 0,
          qEn: 'What were the people saying as they went to the prayer ground?',
          optionsEn: ['Allah is greatest (the takbeer)', 'Peace be upon you', "Just 'praise be to Allah'"],
        },
      ],
    },
    {
      id: 'p8',
      en: 'The imam led the people in prayer, then gave the sermon, and the people returned from the prayer ground by another way. The people visited one another, and some hosted their friends, and every Muslim congratulated his friend, saying: \'Happy Eid -- every year, and may you be well.\'',
      sentences: [
        {
          id: 'qr1-31-026',
          page: 114,
          ar: 'وَصَلَّىٰ الإِمَامُ بِالنَّاسِ ثُمَّ خَطَبَ،',
          en: 'The imam led the people in prayer, then gave the sermon,',
          tokens: [
            { surface: 'وَصَلَّىٰ', lemma: 'صلى', features: 'conj+perf.3ms', root: 'ص ل و', pos: 'verb', gloss: 'and led the prayer' },
            { surface: 'الإِمَامُ', lemma: 'إمام', features: 'def.nom', root: 'أ م م', pos: 'noun', gloss: 'the imam' },
            { surface: 'بِالنَّاسِ', lemma: 'ناس', features: 'prep+def.gen', root: '—', pos: 'noun', gloss: 'with the people' },
            { surface: 'ثُمَّ', lemma: 'ثم', features: 'part', root: '—', pos: 'part', gloss: 'then' },
            { surface: 'خَطَبَ', lemma: 'خطب', features: 'perf.3ms', root: 'خ ط ب', pos: 'verb', gloss: 'gave the sermon' },
          ],
        },
        {
          id: 'qr1-31-027',
          page: 114,
          ar: 'وَرَجَعَ النَّاسُ مِنَ الْمُصَلَّىٰ بِطَرِيْقٍ آخَرَ،',
          en: 'and the people returned from the prayer ground by another way,',
          tokens: [
            { surface: 'وَرَجَعَ', lemma: 'رجع', features: 'conj+perf.3ms', root: 'ر ج ع', pos: 'verb', gloss: 'and returned' },
            { surface: 'النَّاسُ', lemma: 'ناس', features: 'def.nom', root: '—', pos: 'noun', gloss: 'the people' },
            { surface: 'مِنَ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'الْمُصَلَّىٰ', lemma: 'مصلى', features: 'def.gen', root: 'ص ل و', pos: 'noun', gloss: 'the prayer ground' },
            { surface: 'بِطَرِيْقٍ', lemma: 'طريق', features: 'prep+indef.gen', root: 'ط ر ق', pos: 'noun', gloss: 'by a way' },
            { surface: 'آخَرَ', lemma: 'آخر', features: 'indef.gen', root: 'أ خ ر', pos: 'adj', gloss: 'another' },
          ],
        },
        {
          id: 'qr1-31-028',
          page: 114,
          ar: 'وَزَارَ النَّاسُ بَعْضُهُمْ بَعْضاً وَضَيَّفَ بَعْضُهُمْ أَصْدِقَاءَهُمْ،',
          en: 'The people visited one another, and some hosted their friends,',
          tokens: [
            { surface: 'وَزَارَ', lemma: 'زار', features: 'conj+perf.3ms', root: 'ز و ر', pos: 'verb', gloss: 'and visited' },
            { surface: 'النَّاسُ', lemma: 'ناس', features: 'def.nom', root: '—', pos: 'noun', gloss: 'the people' },
            { surface: 'بَعْضُهُمْ', lemma: 'بعض', features: 'nom+3mp', root: 'ب ع ض', pos: 'noun', gloss: 'some of them' },
            { surface: 'بَعْضاً', lemma: 'بعض', features: 'indef.acc', root: 'ب ع ض', pos: 'noun', gloss: 'some (others)' },
            { surface: 'وَضَيَّفَ', lemma: 'ضيّف', features: 'conj+perf.3ms', root: 'ض ي ف', pos: 'verb', gloss: 'and hosted' },
            { surface: 'بَعْضُهُمْ', lemma: 'بعض', features: 'nom+3mp', root: 'ب ع ض', pos: 'noun', gloss: 'some of them' },
            { surface: 'أَصْدِقَاءَهُمْ', lemma: 'صديق', features: 'pl.acc+3mp', root: 'ص د ق', pos: 'noun', gloss: 'their friends' },
          ],
        },
        {
          id: 'qr1-31-029',
          page: 114,
          ar: 'وَهَنَّأَ كُلُّ مُسْلِمٍ صَدِيْقَهُ',
          en: 'and every Muslim congratulated his friend,',
          tokens: [
            { surface: 'وَهَنَّأَ', lemma: 'هنأ', features: 'conj+perf.3ms', root: 'ه ن أ', pos: 'verb', gloss: 'and congratulated' },
            { surface: 'كُلُّ', lemma: 'كل', features: 'nom.constr', root: 'ك ل ل', pos: 'noun', gloss: 'every' },
            { surface: 'مُسْلِمٍ', lemma: 'مسلم', features: 'indef.gen', root: 'س ل م', pos: 'noun', gloss: 'Muslim' },
            { surface: 'صَدِيْقَهُ', lemma: 'صديق', features: 'acc+3ms', root: 'ص د ق', pos: 'noun', gloss: 'his friend' },
          ],
        },
        {
          id: 'qr1-31-030',
          page: 114,
          ar: 'وَقَالَ: «عِيْدٌ سَعِيْدٌ» كُلَّ عَامٍ وَأَنْتُمْ بِخَيْرٍ.',
          en: "saying: 'Happy Eid -- every year, and may you be well.'",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قال', features: 'conj+perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'and said' },
            { surface: 'عِيْدٌ', lemma: 'عيد', features: 'indef.nom', root: 'ع و د', pos: 'noun', gloss: 'Eid' },
            { surface: 'سَعِيْدٌ', lemma: 'سعيد', features: 'indef.nom', root: 'س ع د', pos: 'adj', gloss: 'happy' },
            { surface: 'كُلَّ', lemma: 'كل', features: 'acc.constr', root: 'ك ل ل', pos: 'noun', gloss: 'every' },
            { surface: 'عَامٍ', lemma: 'عام', features: 'indef.gen', root: 'ع و م', pos: 'noun', gloss: 'year' },
            { surface: 'وَأَنْتُمْ', lemma: 'أنتم', features: 'conj', root: '—', pos: 'noun', gloss: 'and you (pl.)' },
            { surface: 'بِخَيْرٍ', lemma: 'خير', features: 'prep+indef.gen', root: 'خ ي ر', pos: 'noun', gloss: 'in goodness' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ كُلُّ مُسْلِمٍ لِصَدِيْقِهِ؟',
          options: ['عِيْدٌ سَعِيْدٌ كُلَّ عَامٍ وَأَنْتُمْ بِخَيْرٍ', 'مَعَ السَّلاَمَةِ', 'أَهْلاً وَسَهْلاً'],
          answer: 0,
          qEn: 'What did every Muslim say to his friend?',
          optionsEn: ['Happy Eid, every year, and may you be well', 'Goodbye', 'Welcome'],
        },
      ],
    },
    {
      id: 'p9',
      en: "The morning of Eid was beautiful, and in the afternoon the people recalled Ramadan and its fast-breaking meal, and at night they recalled the tarawih prayers, and they felt as if they had lost something, or something of theirs was missing. And some people said: 'Eid is only a few hours, but Ramadan is Eid all the way through.'",
      sentences: [
        {
          id: 'qr1-31-031',
          page: 114,
          ar: 'وَكَانَ صَبَاحُ الْعِيْدِ جَمِيْلاً،',
          en: 'The morning of Eid was beautiful,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and was' },
            { surface: 'صَبَاحُ', lemma: 'صباح', features: 'nom.constr', root: 'ص ب ح', pos: 'noun', gloss: 'the morning of' },
            { surface: 'الْعِيْدِ', lemma: 'عيد', features: 'def.gen', root: 'ع و د', pos: 'noun', gloss: 'Eid' },
            { surface: 'جَمِيْلاً', lemma: 'جميل', features: 'indef.acc', root: 'ج م ل', pos: 'adj', gloss: 'beautiful' },
          ],
        },
        {
          id: 'qr1-31-032',
          page: 114,
          ar: 'وَفِي الْعَصْرِ ذَكَرَ النَّاسُ رَمَضَانَ وَفُطُوْرَهُ،',
          en: 'and in the afternoon the people recalled Ramadan and its fast-breaking meal,',
          tokens: [
            { surface: 'وَفِي', lemma: 'في', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and in' },
            { surface: 'الْعَصْرِ', lemma: 'عصر', features: 'def.gen', root: 'ع ص ر', pos: 'noun', gloss: 'the afternoon' },
            { surface: 'ذَكَرَ', lemma: 'ذكر', features: 'perf.3ms', root: 'ذ ك ر', pos: 'verb', gloss: 'recalled' },
            { surface: 'النَّاسُ', lemma: 'ناس', features: 'def.nom', root: '—', pos: 'noun', gloss: 'the people' },
            { surface: 'رَمَضَانَ', lemma: 'رمضان', features: 'acc', root: '—', pos: 'proper', gloss: 'Ramadan' },
            { surface: 'وَفُطُوْرَهُ', lemma: 'فطور', features: 'conj+acc+3ms', root: 'ف ط ر', pos: 'noun', gloss: 'and its fast-breaking meal' },
          ],
        },
        {
          id: 'qr1-31-033',
          page: 114,
          ar: 'وَفِي اللَّيْلِ ذَكَرُوا التَّرَاوِيْحَ،',
          en: 'and at night they recalled the tarawih prayers,',
          tokens: [
            { surface: 'وَفِي', lemma: 'في', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and in' },
            { surface: 'اللَّيْلِ', lemma: 'ليل', features: 'def.gen', root: 'ل ي ل', pos: 'noun', gloss: 'the night' },
            { surface: 'ذَكَرُوا', lemma: 'ذكر', features: 'perf.3mp', root: 'ذ ك ر', pos: 'verb', gloss: 'recalled' },
            { surface: 'التَّرَاوِيْحَ', lemma: 'تراويح', features: 'def.acc', root: 'ر و ح', pos: 'noun', gloss: 'the tarāwīḥ prayers' },
          ],
        },
        {
          id: 'qr1-31-034',
          page: 114,
          ar: 'وَشَعَرُوْا كَأَنَّهُمْ فَقَدُوْا شَيْئاً أَوْ ضَاعَ مِنْهُمْ شَيْءٌ،',
          en: 'and they felt as if they had lost something, or something of theirs was missing.',
          tokens: [
            { surface: 'وَشَعَرُوْا', lemma: 'شعر', features: 'conj+perf.3mp', root: 'ش ع ر', pos: 'verb', gloss: 'and felt' },
            { surface: 'كَأَنَّهُمْ', lemma: 'كأن', features: 'part+3mp', root: '—', pos: 'part', gloss: 'as if they' },
            { surface: 'فَقَدُوْا', lemma: 'فقد', features: 'perf.3mp', root: 'ف ق د', pos: 'verb', gloss: 'had lost' },
            { surface: 'شَيْئاً', lemma: 'شيء', features: 'indef.acc', root: 'ش ي أ', pos: 'noun', gloss: 'something' },
            { surface: 'أَوْ', lemma: 'أو', features: 'conj', root: '—', pos: 'conj', gloss: 'or' },
            { surface: 'ضَاعَ', lemma: 'ضاع', features: 'perf.3ms', root: 'ض ي ع', pos: 'verb', gloss: 'was lost' },
            { surface: 'مِنْهُمْ', lemma: 'من', features: 'prep+3mp', root: '—', pos: 'prep', gloss: 'from them' },
            { surface: 'شَيْءٌ', lemma: 'شيء', features: 'indef.nom', root: 'ش ي أ', pos: 'noun', gloss: 'something' },
          ],
        },
        {
          id: 'qr1-31-035',
          page: 114,
          ar: 'وَقَالَ بَعْضُ النَّاسِ: «الْعِيْدُ سَاعَاتٌ وَرَمَضَانُ كُلُّهُ عِيْدٌ».',
          en: "And some people said: 'Eid is only a few hours, but Ramadan is Eid all the way through.'",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قال', features: 'conj+perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'and said' },
            { surface: 'بَعْضُ', lemma: 'بعض', features: 'nom.constr', root: 'ب ع ض', pos: 'noun', gloss: 'some of' },
            { surface: 'النَّاسِ', lemma: 'ناس', features: 'def.gen', root: '—', pos: 'noun', gloss: 'the people' },
            { surface: 'الْعِيْدُ', lemma: 'عيد', features: 'def.nom', root: 'ع و د', pos: 'noun', gloss: 'Eid' },
            { surface: 'سَاعَاتٌ', lemma: 'ساعة', features: 'indef.pl.nom', root: 'س و ع', pos: 'noun', gloss: 'is hours' },
            { surface: 'وَرَمَضَانُ', lemma: 'رمضان', features: 'conj+nom', root: '—', pos: 'proper', gloss: 'while Ramadan' },
            { surface: 'كُلُّهُ', lemma: 'كل', features: 'nom+3ms', root: 'ك ل ل', pos: 'noun', gloss: 'all of it' },
            { surface: 'عِيْدٌ', lemma: 'عيد', features: 'indef.nom', root: 'ع و د', pos: 'noun', gloss: 'is Eid' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ بَعْضُ النَّاسِ عَنِ الْعِيْدِ وَرَمَضَانَ؟',
          options: ['الْعِيْدُ سَاعَاتٌ وَرَمَضَانُ كُلُّهُ عِيْدٌ', 'الْعِيْدُ أَفْضَلُ مِنْ رَمَضَانَ', 'لاَ فَرْقَ بَيْنَهُمَا'],
          answer: 0,
          qEn: 'What did some people say about Eid and Ramadan?',
          optionsEn: ['Eid is only a few hours, but Ramadan is Eid all the way through', 'Eid is better than Ramadan', 'There is no difference between them'],
        },
      ],
    },
  ],
};

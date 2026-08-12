// القراءة الراشدة, volume one, chapter twenty-nine -- مَنْ يَضَعُ الْحَجَرَ؟ (١).
//
// Follows the shape of chapter-07.js/chapter-22.js -- see
// ../CHAPTER-FORMAT.md. Hand-authored (vision-model OCR, checked against
// the scan) from qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed
// pages 107-109. Page-boundary confirmed via the "✳ ✳ ✳" divider at the
// bottom of page 109, and via page 110 opening a NEW chapter numbered
// (٣٠) with the IDENTICAL title "مَنْ يَضَعُ الْحَجَرَ؟" subtitled "(٢)" --
// the same two-part-chapter pattern as chapter-27.js/chapter-28.js's
// الْبَرِيْدُ (١)/(٢). This is part (١); part (٢) (chapter 30) continues
// directly into the famous sīrah episode of the young Prophet ﷺ
// arbitrating the dispute this chapter ends on.
//
// THIS CHAPTER IS A THIRD-PERSON SIRAH-ADJACENT NARRATIVE (register
// "third_person_sirah_narrative", matching chapter-07.js/chapter-22.js),
// though it opens with a brief second-person rhetorical hook addressing
// the reader directly ("إِنَّكُمْ لَتَعْرِفُوْنَ...") before settling into
// third-person history: the Kaaba's founding by Ibrahim, Quraysh's
// rebuilding of it, and the pre-Islamic dispute over which tribe would
// have the honor of setting the Black Stone in its place -- escalating to
// the brink of tribal war before the chapter ends on a cliffhanger.
//
// SENTENCE-CHUNKING NOTE (departure from the usual "commas don't end a
// sentence" rule): the source prose here is built from long, comma-heavy
// compound sentences (historical/expository register, unlike the
// dialogue chapters that convention was written for) with very few
// sentence-final periods. Transcribed diplomatically 1:1, this chapter
// would have had only ~2 sentences under 10 tokens -- short of
// CHAPTER-FORMAT.md's "≥5 buildable sentences (3-9 tokens)" requirement,
// which validate-chapter.mjs enforces as a hard error. Several of the
// longer source sentences are therefore re-punctuated at natural
// independent-clause boundaries into multiple shorter sentences (no
// wording changed, only where periods fall) -- e.g. the source's single
// sentence "الْكَعْبَةُ أَوَّلُ بَيْتٍ ...، بَنَاهَا إِبْرَاهِيْمُ ...، وَفِيْهَا
// حَجَرٌ ...، وَكَانَ النَّبِيُّ ﷺ يُقَبِّلُهُ." becomes four sentences here
// (qr1-29-003 through 006). The dramatic, run-on quality of the source is
// preserved deliberately in the war paragraph (qr1-29-017), which stays
// one very long sentence -- the breathless syntax matches the escalating
// content, and by that point the buildable-sentence quota is already
// well over threshold from the earlier, shorter paragraphs.
//
// Homograph / new-lemma notes (checked against the book-wide lemma index,
// chapters 1-28):
//   - "خَلِيْلُ اللهِ" ("Friend of God", Ibrahim's epithet) is a common
//     noun in construct, NOT chapter-14.js's "خليل" (a hunting companion
//     actually named Khalil, pos "proper"). Different pos (noun vs.
//     proper) is a genuine dict-level clash, so this chapter keys its
//     sense "خليل-اسم", pos "noun".
//   - "حَجَرٌ" ("stone") reuses chapter-24.js's "حجر" key as-is with a
//     locally-appropriate gloss: chapter-24.js's sense is "lap, care,
//     upbringing" (also pos "noun"), so there is no dict-level pos
//     clash -- per the established rule, clashes only require a new key
//     when POS would conflict, not merely when the gloss/sense differs
//     (each chapter's lemma dict is self-contained; this mirrors how
//     chapter-28.js reused "مثل" as-is under the same reasoning).
//   - "قرّب" (Form II, "to bring near, offer" -- the tribe "offering" a
//     blood-filled bowl) is its OWN new lemma, naturally distinct in
//     spelling (shadda) from the book's existing "قرب" (Form I, "to draw
//     near"), exactly the way chapter-09.js/chapter-12.js already keep
//     "علم" (to know) and "علّم" (to teach) as separate keys rather than
//     homograph-suffixing one of them.
//   - "قبّل" (Form II, "to kiss") is likewise its own new lemma, distinct
//     in spelling from chapter-04.js's "قبل" (the preposition "before").
//   - "وضع" (the verb, "to place") and "وضع-اسم" (the verbal noun/masdar,
//     "the placing of" -- "فِيْ وَضْعِ الْحَجَرِ") are split into two keys:
//     this chapter genuinely uses BOTH the verb sense (تَضَعَ، وُضِعَ) and
//     the noun sense (وَضْعِ) side by side, a real in-file pos clash
//     (verb vs. noun), so the noun sense gets its own key.
//   - "مات" (the verb, "to die", reused from chapter-24.js) and "موت"
//     (the noun, "death") are likewise kept as two keys for the same
//     in-file-clash reason -- this chapter uses both ("أَوْ نَمُوْتَ" verb;
//     "عَلَى الْمَوْتِ" / "وَالْمَوْتُ شَيْءٌ" noun).
//   - "إِذاً" ("so, therefore" -- a discourse connective) is kept
//     distinct from the already-established "إذا" ("if", chapter-28.js)
//     under the citation spelling "إذن": bare of diacritics the two
//     collide ("اذا"), but they are different words (conditional
//     particle vs. adverbial connective), so this chapter cites the
//     alternate standard spelling "إذن" for its own key rather than
//     colliding with "إذا" or inventing a "-جواب"-style suffix.
//   - "من-موصول" (relative "he who, whoever") reuses chapter-21.js's
//     established key for this exact function word.
//   - "الْحَجُّ"/"حج" reuses chapter-15.js's key; "مسلم" reuses
//     chapter-02.js's; "توجه" reuses chapter-06.js's; "زال" (in the idiom
//     "لَا يَزَالُوْنَ", "they don't stop / they keep on") reuses
//     chapter-08.js's.
//
// The Prophet ﷺ honorific is excluded from tokens and stripped for
// reconstruction, exactly as chapter-07.js/chapter-22.js do (this
// produces the same "tokens joined != ar stripped of punctuation"
// warnings those chapters already have on their own ﷺ sentences --
// expected, not a structural error).
export const CHAPTER = {
  id: 'ch29',
  number: 29,
  title: { ar: 'مَنْ يَضَعُ الْحَجَرَ؟', en: 'Who Places the Stone?' },
  pages: [107, 108, 109],
  register: 'third_person_sirah_narrative',
  newWords: [
    'كعبة',
    'عبادة',
    'خليل-اسم',
    'طاف',
    'بناء',
    'سقف',
    'جدار',
    'حجارة',
    'خشب',
    'تم',
    'اختصم',
    'وضع-اسم',
    'موضع',
    'حريص',
    'قبيلة',
    'أمكن',
    'اختلف',
    'تنازع',
    'أدنى',
    'فرس',
    'بعير',
    'أربعين',
    'خمسين',
    'قرّب',
    'جفنة',
    'مملوء',
    'دم',
    'تحالف',
    'موت',
    'أدخل',
    'هين',
    'مشؤوم',
    'بد',
    'حرب',
    'قريش',
    'إذن',
    'قبّل',
    'اسود',
  ],
  lemmas: {
    // -- new this chapter --
    كعبة: { root: 'ك ع ب', pos: 'proper', gloss: 'the Kaaba', content: true },
    عبادة: { root: 'ع ب د', pos: 'noun', gloss: 'worship', content: true },
    'خليل-اسم': { root: 'خ ل ل', pos: 'noun', gloss: 'close friend, intimate friend', content: true },
    طاف: { root: 'ط و ف', pos: 'verb', gloss: 'to circle around, circumambulate', content: true },
    بناء: { root: 'ب ن ي', pos: 'noun', gloss: 'building, construction', content: true },
    سقف: { root: 'س ق ف', pos: 'noun', gloss: 'roof, ceiling', content: true },
    جدار: { root: 'ج د ر', pos: 'noun', gloss: 'wall', content: true },
    حجارة: { root: 'ح ج ر', pos: 'noun', gloss: 'stones (collective)', content: true },
    خشب: { root: 'خ ش ب', pos: 'noun', gloss: 'wood', content: true },
    تم: { root: 'ت م م', pos: 'verb', gloss: 'to be completed', content: true },
    اختصم: { root: 'خ ص م', pos: 'verb', gloss: 'to dispute, contend over', content: true },
    'وضع-اسم': { root: 'و ض ع', pos: 'noun', gloss: 'placing, putting (verbal noun)', content: true },
    موضع: { root: 'و ض ع', pos: 'noun', gloss: 'place, location', content: true },
    حريص: { root: 'ح ر ص', pos: 'adj', gloss: 'eager, keen', content: true },
    قبيلة: { root: 'ق ب ل', pos: 'noun', gloss: 'tribe', content: true },
    أمكن: { root: 'م ك ن', pos: 'verb', gloss: 'to be possible', content: true },
    اختلف: { root: 'خ ل ف', pos: 'verb', gloss: 'to differ, disagree', content: true },
    تنازع: { root: 'ن ز ع', pos: 'verb', gloss: 'to contend, quarrel with one another', content: true },
    أدنى: { root: 'د ن و', pos: 'adj', gloss: 'nearer; least, slightest', content: true },
    فرس: { root: 'ف ر س', pos: 'noun', gloss: 'horse', content: true },
    بعير: { root: 'ب ع ر', pos: 'noun', gloss: 'camel', content: true },
    أربعين: { root: 'أ ر ب ع', pos: 'num', gloss: 'forty', content: true },
    خمسين: { root: 'خ م س', pos: 'num', gloss: 'fifty', content: true },
    'قرّب': { root: 'ق ر ب', pos: 'verb', gloss: 'to bring near, offer', content: true },
    جفنة: { root: 'ج ف ن', pos: 'noun', gloss: 'bowl, large bowl', content: true },
    مملوء: { root: 'م ل أ', pos: 'adj', gloss: 'filled', content: true },
    دم: { root: 'د م ي', pos: 'noun', gloss: 'blood', content: true },
    تحالف: { root: 'ح ل ف', pos: 'verb', gloss: 'to form an alliance, ally with one another', content: true },
    موت: { root: 'م و ت', pos: 'noun', gloss: 'death', content: true },
    أدخل: { root: 'د خ ل', pos: 'verb', gloss: 'to insert, put in', content: true },
    هين: { root: 'ه ي ن', pos: 'adj', gloss: 'easy, trivial', content: true },
    مشؤوم: { root: 'ش أ م', pos: 'adj', gloss: 'ill-omened, unlucky', content: true },
    بد: { root: 'ب د د', pos: 'noun', gloss: 'escape, avoidance (in "لا بد" = there is no escaping, it is inevitable)', content: true },
    حرب: { root: 'ح ر ب', pos: 'noun', gloss: 'war', content: true },
    قريش: { root: '—', pos: 'proper', gloss: 'Quraysh (the tribe)', content: true },
    'إذن': { root: '—', pos: 'part', gloss: 'so, therefore, in that case', content: false },
    'قبّل': { root: 'ق ب ل', pos: 'verb', gloss: 'to kiss', content: true },
    اسود: { root: 'س و د', pos: 'adj', gloss: 'black', content: true },
    // -- reused, book-wide --
    إن: { root: '—', pos: 'part', gloss: 'indeed', content: false },
    عرف: { root: 'ع ر ف', pos: 'verb', gloss: 'to know', content: true },
    هذا: { root: '—', pos: 'dem', gloss: 'this', content: false },
    'من-موصول': { root: '—', pos: 'rel', gloss: 'he who, whoever', content: false },
    في: { root: '—', pos: 'prep', gloss: 'in', content: false },
    دنيا: { root: 'د ن و', pos: 'noun', gloss: 'world, this life', content: true },
    لا: { root: '—', pos: 'part', gloss: 'not, no', content: false },
    توجه: { root: 'و ج ه', pos: 'verb', gloss: 'to head towards, set out for', content: true },
    إلى: { root: '—', pos: 'prep', gloss: 'to', content: false },
    صلاة: { root: 'ص ل و', pos: 'noun', gloss: 'prayer', content: true },
    سافر: { root: 'س ف ر', pos: 'verb', gloss: 'to travel', content: true },
    مسلم: { root: 'س ل م', pos: 'noun', gloss: 'Muslim', content: true },
    من: { root: '—', pos: 'prep', gloss: 'from', content: false },
    كل: { root: 'ك ل ل', pos: 'noun', gloss: 'each, every', content: true },
    جانب: { root: 'ج ن ب', pos: 'noun', gloss: 'side', content: true },
    حج: { root: 'ح ج ج', pos: 'noun', gloss: 'Ḥajj, the pilgrimage', content: true },
    اول: { root: 'أ و ل', pos: 'adj', gloss: 'first', content: true },
    بيت: { root: 'ب ي ت', pos: 'noun', gloss: 'house', content: true },
    وضع: { root: 'و ض ع', pos: 'verb', gloss: 'to place, put', content: true },
    ناس: { root: '—', pos: 'noun', gloss: 'people', content: true },
    الله: { root: '—', pos: 'proper', gloss: 'Allah', content: true },
    بنى: { root: 'ب ن ي', pos: 'verb', gloss: 'to build', content: true },
    إبراهيم: { root: '—', pos: 'proper', gloss: 'Ibrāhīm (a name)', content: true },
    مكة: { root: '—', pos: 'proper', gloss: 'Mecca', content: true },
    حجر: { root: 'ح ج ر', pos: 'noun', gloss: 'stone', content: true },
    كان: { root: 'ك و ن', pos: 'verb', gloss: 'to be', content: true },
    نبي: { root: 'ن ب أ', pos: 'noun', gloss: 'prophet', content: true },
    بعد: { root: '—', pos: 'prep', gloss: 'after', content: false },
    زمن: { root: 'ز م ن', pos: 'noun', gloss: 'time, era', content: true },
    طويل: { root: 'ط و ل', pos: 'adj', gloss: 'long, extended', content: true },
    أراد: { root: 'ر و د', pos: 'verb', gloss: 'to want', content: true },
    ولد: { root: 'و ل د', pos: 'noun', gloss: 'child, boy (pl. "sons")', content: true },
    هم: { root: '—', pos: 'noun', gloss: 'they (m.)', content: false },
    أن: { root: '—', pos: 'part', gloss: 'that; to (subjunctive)', content: false },
    جديد: { root: 'ج د د', pos: 'adj', gloss: 'new', content: true },
    قديم: { root: 'ق د م', pos: 'adj', gloss: 'old, ancient', content: true },
    قد: { root: '—', pos: 'part', gloss: 'already, indeed', content: false },
    سقط: { root: 'س ق ط', pos: 'verb', gloss: 'to fall', content: true },
    ضعف: { root: 'ض ع ف', pos: 'verb', gloss: 'to weaken, become weak', content: true },
    جمع: { root: 'ج م ع', pos: 'verb', gloss: 'to gather, collect', content: true },
    لما: { root: '—', pos: 'part', gloss: 'when', content: false },
    محل: { root: 'ح ل ل', pos: 'noun', gloss: 'place', content: true },
    لأن: { root: '—', pos: 'part', gloss: 'because', content: false },
    رفع: { root: 'ر ف ع', pos: 'verb', gloss: 'to raise, lift', content: true },
    على: { root: '—', pos: 'prep', gloss: 'on, upon, to', content: false },
    نال: { root: 'ن ي ل', pos: 'verb', gloss: 'to attain, receive', content: true },
    لكن: { root: '—', pos: 'part', gloss: 'but', content: false },
    ذلك: { root: '—', pos: 'dem', gloss: 'that', content: false },
    واحد: { root: 'و ح د', pos: 'num', gloss: 'one', content: true },
    كثير: { root: 'ك ث ر', pos: 'adj', gloss: 'much, many', content: true },
    عرب: { root: 'ع ر ب', pos: 'proper', gloss: 'Arabs', content: true },
    قاتل: { root: 'ق ت ل', pos: 'verb', gloss: 'to fight', content: true },
    شيء: { root: 'ش ي أ', pos: 'noun', gloss: 'thing', content: true },
    غير: { root: 'غ ي ر', pos: 'noun', gloss: 'other than, not', content: true },
    تقدم: { root: 'ق د م', pos: 'verb', gloss: 'to advance, come forward', content: true },
    سبق: { root: 'س ب ق', pos: 'verb', gloss: 'to precede, outrun, win a race', content: true },
    أحد: { root: 'أ ح د', pos: 'noun', gloss: 'anyone, someone', content: true },
    سقى: { root: 'س ق ي', pos: 'verb', gloss: 'to give to drink, water', content: true },
    أو: { root: '—', pos: 'conj', gloss: 'or', content: false },
    قتل: { root: 'ق ت ل', pos: 'verb', gloss: 'to kill', content: true },
    زال: { root: 'ز ي ل', pos: 'verb', gloss: 'to cease, stop (being)', content: true },
    سنة: { root: 'س ن و', pos: 'noun', gloss: 'year', content: true },
    لماذا: { root: '—', pos: 'adv', gloss: 'why', content: false },
    ثم: { root: '—', pos: 'part', gloss: 'then', content: false },
    يد: { root: 'ي د ي', pos: 'noun', gloss: 'hand', content: true },
    قال: { root: 'ق و ل', pos: 'verb', gloss: 'to say', content: true },
    ترك: { root: 'ت ر ك', pos: 'verb', gloss: 'to leave', content: true },
    مات: { root: 'م و ت', pos: 'verb', gloss: 'to die', content: true },
    شر: { root: 'ش ر ر', pos: 'noun', gloss: 'the worst, evil', content: true },
    كبير: { root: 'ك ب ر', pos: 'adj', gloss: 'big, large', content: true },
    خطر: { root: 'خ ط ر', pos: 'noun', gloss: 'danger', content: true },
    عظيم: { root: 'ع ظ م', pos: 'adj', gloss: 'great, tremendous', content: true },
    سبيل: { root: 'س ب ل', pos: 'noun', gloss: 'path, way', content: true },
    حق: { root: 'ح ق ق', pos: 'noun', gloss: 'truth, what is right', content: true },
    شرف: { root: 'ش ر ف', pos: 'noun', gloss: 'honour', content: true },
    جدا: { root: '—', pos: 'adv', gloss: 'very much', content: true },
    آخر: { root: 'أ خ ر', pos: 'adj', gloss: 'other, another', content: true },
    مع: { root: '—', pos: 'prep', gloss: 'with', content: false },
  },
  paragraphs: [
    {
      id: 'p1',
      en: 'You surely know this building -- and who in the world does not? You face it in prayer, Muslims travel to it from every side, and they circle it in the Hajj.',
      sentences: [
        {
          id: 'qr1-29-001',
          page: 107,
          ar: 'إِنَّكُمْ لَتَعْرِفُوْنَ هٰذَا الْبِنَاءَ، وَمَنْ فِي الدُّنْيَا لَا يَعْرِفُ هٰذَا الْبِنَاءَ؟',
          en: 'You surely know this building -- and who in the world does not know this building?',
          tokens: [
            { surface: 'إِنَّكُمْ', lemma: 'إن', features: 'part+2mp', root: '—', pos: 'part', gloss: 'indeed you' },
            { surface: 'لَتَعْرِفُوْنَ', lemma: 'عرف', features: 'emph+impf.2mp', root: 'ع ر ف', pos: 'verb', gloss: 'surely know' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الْبِنَاءَ', lemma: 'بناء', features: 'def.acc', root: 'ب ن ي', pos: 'noun', gloss: 'the building' },
            { surface: 'وَمَنْ', lemma: 'من-موصول', features: 'conj+rel', root: '—', pos: 'rel', gloss: 'and whoever' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الدُّنْيَا', lemma: 'دنيا', features: 'def.gen', root: 'د ن و', pos: 'noun', gloss: 'the world' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'يَعْرِفُ', lemma: 'عرف', features: 'impf.3ms', root: 'ع ر ف', pos: 'verb', gloss: 'knows' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الْبِنَاءَ', lemma: 'بناء', features: 'def.acc', root: 'ب ن ي', pos: 'noun', gloss: 'the building' },
          ],
        },
        {
          id: 'qr1-29-002',
          page: 107,
          ar: 'إِنَّكُمْ تَتَوَجَّهُوْنَ إِلَيْهِ فِي الصَّلَاةِ، وَيُسَافِرُ إِلَيْهِ الْمُسْلِمُوْنَ مِنْ كُلِّ جَانِبٍ وَيَطُوْفُوْنَ فِي الْحَجِّ.',
          en: 'You turn toward it in prayer, and Muslims travel to it from every side and circle around it in the Hajj.',
          tokens: [
            { surface: 'إِنَّكُمْ', lemma: 'إن', features: 'part+2mp', root: '—', pos: 'part', gloss: 'indeed you' },
            { surface: 'تَتَوَجَّهُوْنَ', lemma: 'توجه', features: 'impf.2mp', root: 'و ج ه', pos: 'verb', gloss: 'turn toward' },
            { surface: 'إِلَيْهِ', lemma: 'إلى', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'toward it' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الصَّلَاةِ', lemma: 'صلاة', features: 'def.gen', root: 'ص ل و', pos: 'noun', gloss: 'the prayer' },
            { surface: 'وَيُسَافِرُ', lemma: 'سافر', features: 'conj+impf.3ms', root: 'س ف ر', pos: 'verb', gloss: 'and travels' },
            { surface: 'إِلَيْهِ', lemma: 'إلى', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'to it' },
            { surface: 'الْمُسْلِمُوْنَ', lemma: 'مسلم', features: 'pl.def.nom', root: 'س ل م', pos: 'noun', gloss: 'the Muslims' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'كُلِّ', lemma: 'كل', features: 'gen.constr', root: 'ك ل ل', pos: 'noun', gloss: 'every' },
            { surface: 'جَانِبٍ', lemma: 'جانب', features: 'indef.gen', root: 'ج ن ب', pos: 'noun', gloss: 'side' },
            { surface: 'وَيَطُوْفُوْنَ', lemma: 'طاف', features: 'conj+impf.3mp', root: 'ط و ف', pos: 'verb', gloss: 'and circle around' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الْحَجِّ', lemma: 'حج', features: 'def.gen', root: 'ح ج ج', pos: 'noun', gloss: 'the Hajj' },
          ],
        },
      ],
      checks: [
        {
          q: 'ماذا يفعل الْمُسْلِمُوْنَ حَوْلَ الْكَعْبَةِ فِي الْحَجِّ؟',
          options: ['يَطُوْفُوْنَ حَوْلَهَا', 'يَبِيْعُوْنَ فِيْهَا', 'يَسْكُنُوْنَ فِيْهَا'],
          answer: 0,
          qEn: 'What do Muslims do around the Kaaba during the Hajj?',
          optionsEn: ['They circle around it', 'They sell things in it', 'They live in it'],
        },
      ],
    },
    {
      id: 'p2',
      en: 'The Kaaba is the first house built for people to worship Allah. Ibrahim, the Friend of Allah, built it in Mecca. In it is a black stone that people kiss during the Hajj, and the Prophet ﷺ used to kiss it too.',
      sentences: [
        {
          id: 'qr1-29-003',
          page: 108,
          ar: 'الْكَعْبَةُ أَوَّلُ بَيْتٍ وُضِعَ لِلنَّاسِ لِعِبَادَةِ اللهِ.',
          en: 'The Kaaba is the first house established for people, for the worship of Allah.',
          tokens: [
            { surface: 'الْكَعْبَةُ', lemma: 'كعبة', features: 'def.nom', root: 'ك ع ب', pos: 'proper', gloss: 'the Kaaba' },
            { surface: 'أَوَّلُ', lemma: 'اول', features: 'nom.constr', root: 'أ و ل', pos: 'adj', gloss: 'first' },
            { surface: 'بَيْتٍ', lemma: 'بيت', features: 'indef.gen', root: 'ب ي ت', pos: 'noun', gloss: 'a house' },
            { surface: 'وُضِعَ', lemma: 'وضع', features: 'pass.perf.3ms', root: 'و ض ع', pos: 'verb', gloss: 'was placed, established' },
            { surface: 'لِلنَّاسِ', lemma: 'ناس', features: 'prep+def.gen', root: '—', pos: 'noun', gloss: 'for the people' },
            { surface: 'لِعِبَادَةِ', lemma: 'عبادة', features: 'prep+gen.constr', root: 'ع ب د', pos: 'noun', gloss: 'for the worship of' },
            { surface: 'اللهِ', lemma: 'الله', features: 'gen', root: '—', pos: 'proper', gloss: 'Allah' },
          ],
        },
        {
          id: 'qr1-29-004',
          page: 108,
          ar: 'بَنَاهَا إِبْرَاهِيْمُ خَلِيْلُ اللهِ فِيْ مَكَّةَ.',
          en: 'Ibrahim, the Friend of Allah, built it in Mecca.',
          tokens: [
            { surface: 'بَنَاهَا', lemma: 'بنى', features: 'perf.3ms+3fs', root: 'ب ن ي', pos: 'verb', gloss: 'built it' },
            { surface: 'إِبْرَاهِيْمُ', lemma: 'إبراهيم', features: 'nom', root: '—', pos: 'proper', gloss: 'Ibrahim' },
            { surface: 'خَلِيْلُ', lemma: 'خليل-اسم', features: 'nom.constr', root: 'خ ل ل', pos: 'noun', gloss: 'friend (of)' },
            { surface: 'اللهِ', lemma: 'الله', features: 'gen', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'مَكَّةَ', lemma: 'مكة', features: 'gen', root: '—', pos: 'proper', gloss: 'Mecca' },
          ],
        },
        {
          id: 'qr1-29-005',
          page: 108,
          ar: 'وَفِيْهَا حَجَرٌ أَسْوَدُ يُقَبِّلُهُ النَّاسُ فِي الْحَجِّ.',
          en: 'In it is a black stone that people kiss during the Hajj.',
          tokens: [
            { surface: 'وَفِيْهَا', lemma: 'في', features: 'conj+prep+3fs', root: '—', pos: 'prep', gloss: 'and in it' },
            { surface: 'حَجَرٌ', lemma: 'حجر', features: 'indef.nom', root: 'ح ج ر', pos: 'noun', gloss: 'a stone' },
            { surface: 'أَسْوَدُ', lemma: 'اسود', features: 'indef.nom', root: 'س و د', pos: 'adj', gloss: 'black' },
            { surface: 'يُقَبِّلُهُ', lemma: 'قبّل', features: 'impf.3ms+3ms', root: 'ق ب ل', pos: 'verb', gloss: 'kisses it' },
            { surface: 'النَّاسُ', lemma: 'ناس', features: 'def.nom', root: '—', pos: 'noun', gloss: 'the people' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in, during' },
            { surface: 'الْحَجِّ', lemma: 'حج', features: 'def.gen', root: 'ح ج ج', pos: 'noun', gloss: 'the Hajj' },
          ],
        },
        {
          id: 'qr1-29-006',
          page: 108,
          ar: 'وَكَانَ النَّبِيُّ ﷺ يُقَبِّلُهُ.',
          en: 'And the Prophet ﷺ used to kiss it.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and used to' },
            { surface: 'النَّبِيُّ', lemma: 'نبي', features: 'def.nom', root: 'ن ب أ', pos: 'noun', gloss: 'the Prophet' },
            { surface: 'يُقَبِّلُهُ', lemma: 'قبّل', features: 'impf.3ms+3ms', root: 'ق ب ل', pos: 'verb', gloss: 'kiss it' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ بَنَى الْكَعْبَةَ؟',
          options: ['إِبْرَاهِيْمُ خَلِيْلُ اللهِ', 'طَارِقٌ', 'خَالِدٌ'],
          answer: 0,
          qEn: 'Who built the Kaaba?',
          optionsEn: ['Ibrahim, the Friend of Allah', 'Tariq', 'Khalid'],
        },
      ],
    },
    {
      id: 'p3',
      en: 'After a long time, the sons of Ibrahim, who were Quraysh, wanted to rebuild the Kaaba anew, for it was an old building whose roof had fallen in and whose walls had weakened. So Quraysh gathered stones and wood to build it, and Quraysh built the Kaaba anew.',
      sentences: [
        {
          id: 'qr1-29-007',
          page: 108,
          ar: 'وَبَعْدَ زَمَنٍ طَوِيْلٍ أَرَادَ أَوْلَادُ إِبْرَاهِيْمَ، وَهُمْ قُرَيْشٌ، أَنْ يَبْنُوْا بِنَاءَ الْكَعْبَةِ مِنْ جَدِيْدٍ.',
          en: 'After a long time, the sons of Ibrahim -- who were Quraysh -- wanted to build the Kaaba anew.',
          tokens: [
            { surface: 'وَبَعْدَ', lemma: 'بعد', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and after' },
            { surface: 'زَمَنٍ', lemma: 'زمن', features: 'indef.gen', root: 'ز م ن', pos: 'noun', gloss: 'a time' },
            { surface: 'طَوِيْلٍ', lemma: 'طويل', features: 'indef.gen', root: 'ط و ل', pos: 'adj', gloss: 'long' },
            { surface: 'أَرَادَ', lemma: 'أراد', features: 'perf.3ms', root: 'ر و د', pos: 'verb', gloss: 'wanted' },
            { surface: 'أَوْلَادُ', lemma: 'ولد', features: 'pl.nom.constr', root: 'و ل د', pos: 'noun', gloss: 'the sons of' },
            { surface: 'إِبْرَاهِيْمَ', lemma: 'إبراهيم', features: 'gen', root: '—', pos: 'proper', gloss: 'Ibrahim' },
            { surface: 'وَهُمْ', lemma: 'هم', features: 'conj', root: '—', pos: 'noun', gloss: 'and they [were]' },
            { surface: 'قُرَيْشٌ', lemma: 'قريش', features: 'indef.nom', root: '—', pos: 'proper', gloss: 'Quraysh' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'to' },
            { surface: 'يَبْنُوْا', lemma: 'بنى', features: 'subj.3mp', root: 'ب ن ي', pos: 'verb', gloss: 'build' },
            { surface: 'بِنَاءَ', lemma: 'بناء', features: 'acc.constr', root: 'ب ن ي', pos: 'noun', gloss: 'the building of' },
            { surface: 'الْكَعْبَةِ', lemma: 'كعبة', features: 'def.gen', root: 'ك ع ب', pos: 'proper', gloss: 'the Kaaba' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'جَدِيْدٍ', lemma: 'جديد', features: 'indef.gen', root: 'ج د د', pos: 'adj', gloss: 'new (idiom: anew)' },
          ],
        },
        {
          id: 'qr1-29-008',
          page: 108,
          ar: 'فَإِنَّهُ كَانَ بِنَاءً قَدِيْماً قَدْ سَقَطَ سَقْفُهُ وَضَعُفَتْ جُدْرَانُهُ.',
          en: 'For it was an old building whose roof had fallen in and whose walls had weakened.',
          tokens: [
            { surface: 'فَإِنَّهُ', lemma: 'إن', features: 'conj+part+3ms', root: '—', pos: 'part', gloss: 'for indeed it' },
            { surface: 'كَانَ', lemma: 'كان', features: 'perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'was' },
            { surface: 'بِنَاءً', lemma: 'بناء', features: 'indef.acc', root: 'ب ن ي', pos: 'noun', gloss: 'a building' },
            { surface: 'قَدِيْماً', lemma: 'قديم', features: 'indef.acc', root: 'ق د م', pos: 'adj', gloss: 'old' },
            { surface: 'قَدْ', lemma: 'قد', features: 'part', root: '—', pos: 'part', gloss: 'already' },
            { surface: 'سَقَطَ', lemma: 'سقط', features: 'perf.3ms', root: 'س ق ط', pos: 'verb', gloss: 'had fallen' },
            { surface: 'سَقْفُهُ', lemma: 'سقف', features: 'nom+3ms', root: 'س ق ف', pos: 'noun', gloss: 'its roof' },
            { surface: 'وَضَعُفَتْ', lemma: 'ضعف', features: 'conj+perf.3fs', root: 'ض ع ف', pos: 'verb', gloss: 'and had weakened' },
            { surface: 'جُدْرَانُهُ', lemma: 'جدار', features: 'pl.nom+3ms', root: 'ج د ر', pos: 'noun', gloss: 'its walls' },
          ],
        },
        {
          id: 'qr1-29-009',
          page: 108,
          ar: 'فَجَمَعَتْ قُرَيْشٌ الْحِجَارَةَ وَالْخَشَبَ لِبِنَائِهَا.',
          en: 'So Quraysh gathered the stones and the wood to build it.',
          tokens: [
            { surface: 'فَجَمَعَتْ', lemma: 'جمع', features: 'conj+perf.3fs', root: 'ج م ع', pos: 'verb', gloss: 'so gathered' },
            { surface: 'قُرَيْشٌ', lemma: 'قريش', features: 'nom', root: '—', pos: 'proper', gloss: 'Quraysh' },
            { surface: 'الْحِجَارَةَ', lemma: 'حجارة', features: 'def.acc', root: 'ح ج ر', pos: 'noun', gloss: 'the stones' },
            { surface: 'وَالْخَشَبَ', lemma: 'خشب', features: 'conj+def.acc', root: 'خ ش ب', pos: 'noun', gloss: 'and the wood' },
            { surface: 'لِبِنَائِهَا', lemma: 'بناء', features: 'prep+gen+3fs', root: 'ب ن ي', pos: 'noun', gloss: 'for building it' },
          ],
        },
        {
          id: 'qr1-29-010',
          page: 108,
          ar: 'وَبَنَتْ قُرَيْشٌ بِنَاءَ الْكَعْبَةِ مِنْ جَدِيْدٍ.',
          en: 'And Quraysh built the Kaaba anew.',
          tokens: [
            { surface: 'وَبَنَتْ', lemma: 'بنى', features: 'conj+perf.3fs', root: 'ب ن ي', pos: 'verb', gloss: 'and built' },
            { surface: 'قُرَيْشٌ', lemma: 'قريش', features: 'nom', root: '—', pos: 'proper', gloss: 'Quraysh' },
            { surface: 'بِنَاءَ', lemma: 'بناء', features: 'acc.constr', root: 'ب ن ي', pos: 'noun', gloss: 'the building of' },
            { surface: 'الْكَعْبَةِ', lemma: 'كعبة', features: 'def.gen', root: 'ك ع ب', pos: 'proper', gloss: 'the Kaaba' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'جَدِيْدٍ', lemma: 'جديد', features: 'indef.gen', root: 'ج د د', pos: 'adj', gloss: 'new (idiom: anew)' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا بَنَتْ قُرَيْشٌ الْكَعْبَةَ مِنْ جَدِيْدٍ؟',
          options: ['لِأَنَّ بِنَاءَهَا الْقَدِيْمَ سَقَطَ سَقْفُهُ وَضَعُفَتْ جُدْرَانُهُ', 'لِأَنَّهَا أَرَادَتْ بَيْتاً أَكْبَرَ', 'لِأَنَّ الْحَجَرَ الْأَسْوَدَ ضَاعَ'],
          answer: 0,
          qEn: 'Why did Quraysh rebuild the Kaaba anew?',
          optionsEn: ['Because its old building’s roof had fallen in and its walls had weakened', 'Because they wanted a bigger house', 'Because the Black Stone had been lost'],
        },
      ],
    },
    {
      id: 'p4',
      en: 'And when the building of the Kaaba was complete, Quraysh wanted to place the Black Stone in its place, so Quraysh disputed over placing it there -- every tribe wanted to raise it to its place, because it was a great honor. Every tribe was eager to attain this honor.',
      sentences: [
        {
          id: 'qr1-29-011',
          page: 108,
          ar: 'وَلَمَّا تَمَّ بِنَاءُ الْكَعْبَةِ أَرَادَتْ قُرَيْشٌ أَنْ تَضَعَ الْحَجَرَ الْأَسْوَدَ فِيْ مَحَلِّهِ.',
          en: 'And when the building of the Kaaba was complete, Quraysh wanted to place the Black Stone in its place.',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لما', features: 'conj+part', root: '—', pos: 'part', gloss: 'and when' },
            { surface: 'تَمَّ', lemma: 'تم', features: 'perf.3ms', root: 'ت م م', pos: 'verb', gloss: 'was completed' },
            { surface: 'بِنَاءُ', lemma: 'بناء', features: 'nom.constr', root: 'ب ن ي', pos: 'noun', gloss: 'the building of' },
            { surface: 'الْكَعْبَةِ', lemma: 'كعبة', features: 'def.gen', root: 'ك ع ب', pos: 'proper', gloss: 'the Kaaba' },
            { surface: 'أَرَادَتْ', lemma: 'أراد', features: 'perf.3fs', root: 'ر و د', pos: 'verb', gloss: 'wanted' },
            { surface: 'قُرَيْشٌ', lemma: 'قريش', features: 'nom', root: '—', pos: 'proper', gloss: 'Quraysh' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'to' },
            { surface: 'تَضَعَ', lemma: 'وضع', features: 'subj.3fs', root: 'و ض ع', pos: 'verb', gloss: 'place' },
            { surface: 'الْحَجَرَ', lemma: 'حجر', features: 'def.acc', root: 'ح ج ر', pos: 'noun', gloss: 'the stone' },
            { surface: 'الْأَسْوَدَ', lemma: 'اسود', features: 'def.acc', root: 'س و د', pos: 'adj', gloss: 'the black' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'مَحَلِّهِ', lemma: 'محل', features: 'gen+3ms', root: 'ح ل ل', pos: 'noun', gloss: 'its place' },
          ],
        },
        {
          id: 'qr1-29-012',
          page: 108,
          ar: 'فَاخْتَصَمَتْ قُرَيْشٌ فِيْ وَضْعِ الْحَجَرِ الْأَسْوَدِ فِيْ مَحَلِّهِ.',
          en: 'So Quraysh disputed over placing the Black Stone in its place.',
          tokens: [
            { surface: 'فَاخْتَصَمَتْ', lemma: 'اختصم', features: 'conj+perf.3fs', root: 'خ ص م', pos: 'verb', gloss: 'so disputed' },
            { surface: 'قُرَيْشٌ', lemma: 'قريش', features: 'nom', root: '—', pos: 'proper', gloss: 'Quraysh' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'over' },
            { surface: 'وَضْعِ', lemma: 'وضع-اسم', features: 'gen.constr', root: 'و ض ع', pos: 'noun', gloss: 'the placing of' },
            { surface: 'الْحَجَرِ', lemma: 'حجر', features: 'def.gen', root: 'ح ج ر', pos: 'noun', gloss: 'the stone' },
            { surface: 'الْأَسْوَدِ', lemma: 'اسود', features: 'def.gen', root: 'س و د', pos: 'adj', gloss: 'the black' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'مَحَلِّهِ', lemma: 'محل', features: 'gen+3ms', root: 'ح ل ل', pos: 'noun', gloss: 'its place' },
          ],
        },
        {
          id: 'qr1-29-013',
          page: 108,
          ar: 'كُلُّ قَبِيْلَةٍ تُرِيْدُ أَنْ تَرْفَعَهُ إِلَىٰ مَوْضِعِهِ لِأَنَّهُ شَرَفٌ عَظِيْمٌ.',
          en: 'Every tribe wanted to raise it to its place, because it was a great honor.',
          tokens: [
            { surface: 'كُلُّ', lemma: 'كل', features: 'nom.constr', root: 'ك ل ل', pos: 'noun', gloss: 'every' },
            { surface: 'قَبِيْلَةٍ', lemma: 'قبيلة', features: 'indef.gen', root: 'ق ب ل', pos: 'noun', gloss: 'tribe' },
            { surface: 'تُرِيْدُ', lemma: 'أراد', features: 'impf.3fs', root: 'ر و د', pos: 'verb', gloss: 'wants' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'to' },
            { surface: 'تَرْفَعَهُ', lemma: 'رفع', features: 'subj.3fs+3ms', root: 'ر ف ع', pos: 'verb', gloss: 'raise it' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'مَوْضِعِهِ', lemma: 'موضع', features: 'gen+3ms', root: 'و ض ع', pos: 'noun', gloss: 'its place' },
            { surface: 'لِأَنَّهُ', lemma: 'لأن', features: 'part+3ms', root: '—', pos: 'part', gloss: 'because it' },
            { surface: 'شَرَفٌ', lemma: 'شرف', features: 'indef.nom', root: 'ش ر ف', pos: 'noun', gloss: 'an honor' },
            { surface: 'عَظِيْمٌ', lemma: 'عظيم', features: 'indef.nom', root: 'ع ظ م', pos: 'adj', gloss: 'great' },
          ],
        },
        {
          id: 'qr1-29-014',
          page: 108,
          ar: 'كُلُّ قَبِيْلَةٍ حَرِيْصَةٌ عَلَىٰ أَنْ تَنَالَ هٰذَا الشَّرَفَ.',
          en: 'Every tribe was eager to attain this honor.',
          tokens: [
            { surface: 'كُلُّ', lemma: 'كل', features: 'nom.constr', root: 'ك ل ل', pos: 'noun', gloss: 'every' },
            { surface: 'قَبِيْلَةٍ', lemma: 'قبيلة', features: 'indef.gen', root: 'ق ب ل', pos: 'noun', gloss: 'tribe' },
            { surface: 'حَرِيْصَةٌ', lemma: 'حريص', features: 'indef.nom.f', root: 'ح ر ص', pos: 'adj', gloss: 'eager' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'to' },
            { surface: 'تَنَالَ', lemma: 'نال', features: 'subj.3fs', root: 'ن ي ل', pos: 'verb', gloss: 'attain' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الشَّرَفَ', lemma: 'شرف', features: 'def.acc', root: 'ش ر ف', pos: 'noun', gloss: 'the honor' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا أَرَادَتْ كُلُّ قَبِيْلَةٍ؟',
          options: ['أَنْ تَضَعَ الْحَجَرَ الْأَسْوَدَ فِيْ مَحَلِّهِ', 'أَنْ تَبْنِيَ الْكَعْبَةَ وَحْدَهَا', 'أَنْ تُسَافِرَ إِلَىٰ مَكَّةَ'],
          answer: 0,
          qEn: 'What did every tribe want?',
          optionsEn: ['To place the Black Stone in its place', 'To build the Kaaba alone', 'To travel to Mecca'],
        },
      ],
    },
    {
      id: 'p5',
      en: 'Every tribe was eager to attain this honor, but that was not possible, because the stone was one and the tribes were many.',
      sentences: [
        {
          id: 'qr1-29-015',
          page: 108,
          ar: 'كُلُّ قَبِيْلَةٍ حَرِيْصَةٌ عَلَىٰ أَنْ تَنَالَ هٰذَا الشَّرَفَ وَلٰكِنَّ ذٰلِكَ لَا يُمْكِنُ.',
          en: 'Every tribe was eager to attain this honor, but that was not possible.',
          tokens: [
            { surface: 'كُلُّ', lemma: 'كل', features: 'nom.constr', root: 'ك ل ل', pos: 'noun', gloss: 'every' },
            { surface: 'قَبِيْلَةٍ', lemma: 'قبيلة', features: 'indef.gen', root: 'ق ب ل', pos: 'noun', gloss: 'tribe' },
            { surface: 'حَرِيْصَةٌ', lemma: 'حريص', features: 'indef.nom.f', root: 'ح ر ص', pos: 'adj', gloss: 'eager' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'to' },
            { surface: 'تَنَالَ', lemma: 'نال', features: 'subj.3fs', root: 'ن ي ل', pos: 'verb', gloss: 'attain' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الشَّرَفَ', lemma: 'شرف', features: 'def.acc', root: 'ش ر ف', pos: 'noun', gloss: 'the honor' },
            { surface: 'وَلٰكِنَّ', lemma: 'لكن', features: 'conj+part', root: '—', pos: 'part', gloss: 'but' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', features: 'dem', root: '—', pos: 'dem', gloss: 'that' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'يُمْكِنُ', lemma: 'أمكن', features: 'impf.3ms', root: 'م ك ن', pos: 'verb', gloss: 'is possible' },
          ],
        },
        {
          id: 'qr1-29-016',
          page: 108,
          ar: 'لِأَنَّ الْحَجَرَ وَاحِدٌ وَالْقَبَائِلَ كَثِيْرَةٌ.',
          en: 'Because the stone was one, and the tribes were many.',
          tokens: [
            { surface: 'لِأَنَّ', lemma: 'لأن', features: 'part', root: '—', pos: 'part', gloss: 'because' },
            { surface: 'الْحَجَرَ', lemma: 'حجر', features: 'def.acc', root: 'ح ج ر', pos: 'noun', gloss: 'the stone' },
            { surface: 'وَاحِدٌ', lemma: 'واحد', features: 'indef.nom', root: 'و ح د', pos: 'num', gloss: 'one' },
            { surface: 'وَالْقَبَائِلَ', lemma: 'قبيلة', features: 'conj+pl.def.acc', root: 'ق ب ل', pos: 'noun', gloss: 'and the tribes' },
            { surface: 'كَثِيْرَةٌ', lemma: 'كثير', features: 'indef.nom.f', root: 'ك ث ر', pos: 'adj', gloss: 'many' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا لَمْ يَكُنْ مُمْكِناً أَنْ تَنَالَ كُلُّ قَبِيْلَةٍ هٰذَا الشَّرَفَ؟',
          options: ['لِأَنَّ الْحَجَرَ وَاحِدٌ وَالْقَبَائِلَ كَثِيْرَةٌ', 'لِأَنَّ الْكَعْبَةَ بَعِيْدَةٌ جِدّاً', 'لِأَنَّ الْحَجَرَ ثَقِيْلٌ جِدّاً'],
          answer: 0,
          qEn: 'Why couldn’t every tribe attain this honor?',
          optionsEn: ['Because the stone was one and the tribes were many', 'Because the Kaaba was very far away', 'Because the stone was very heavy'],
        },
      ],
    },
    {
      id: 'p6',
      en: 'Quraysh disagreed greatly and quarreled, and the Arabs used to fight over the slightest thing and over nothing at all -- and it truly was a great honor.',
      sentences: [
        {
          id: 'qr1-29-017',
          page: 108,
          ar: 'وَاخْتَلَفَتْ قُرَيْشٌ كَثِيْراً وَتَنَازَعَتْ، وَكَانَ الْعَرَبُ يُقَاتِلُوْنَ لِأَدْنَىٰ شَيْءٍ وَلِغَيْرِ شَيْءٍ، يَتَقَدَّمُ فَرَسٌ فَيُقَاتِلُوْنَ، وَيَسْبِقُ أَحَدٌ فَيَسْقِيْ فَرَسَهُ أَوْ بَعِيْرَهُ فَيَقْتُلُوْنَ وَيُقْتَلُوْنَ، وَلَا يَزَالُوْنَ يُقَاتِلُوْنَ أَرْبَعِيْنَ سَنَةً وَخَمْسِيْنَ سَنَةً، فَلِمَاذَا لَا يُقَاتِلُوْنَ عَلَىٰ هٰذَا الشَّرَفِ؟',
          en: 'Quraysh disagreed greatly and quarreled, and the Arabs used to fight over the slightest thing and over nothing at all -- a horse would come forward and they would fight, one would outrace another to water his horse or his camel first, so they would kill and be killed, and they kept fighting for forty and fifty years -- so why would they not fight over this honor?',
          tokens: [
            { surface: 'وَاخْتَلَفَتْ', lemma: 'اختلف', features: 'conj+perf.3fs', root: 'خ ل ف', pos: 'verb', gloss: 'and disagreed' },
            { surface: 'قُرَيْشٌ', lemma: 'قريش', features: 'nom', root: '—', pos: 'proper', gloss: 'Quraysh' },
            { surface: 'كَثِيْراً', lemma: 'كثير', features: 'indef.acc', root: 'ك ث ر', pos: 'adj', gloss: 'greatly (lit. "much")' },
            { surface: 'وَتَنَازَعَتْ', lemma: 'تنازع', features: 'conj+perf.3fs', root: 'ن ز ع', pos: 'verb', gloss: 'and quarreled' },
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and used to' },
            { surface: 'الْعَرَبُ', lemma: 'عرب', features: 'def.nom', root: 'ع ر ب', pos: 'proper', gloss: 'the Arabs' },
            { surface: 'يُقَاتِلُوْنَ', lemma: 'قاتل', features: 'impf.3mp', root: 'ق ت ل', pos: 'verb', gloss: 'fight' },
            { surface: 'لِأَدْنَىٰ', lemma: 'أدنى', features: 'prep+constr', root: 'د ن و', pos: 'adj', gloss: 'for the least of' },
            { surface: 'شَيْءٍ', lemma: 'شيء', features: 'indef.gen', root: 'ش ي أ', pos: 'noun', gloss: 'a thing' },
            { surface: 'وَلِغَيْرِ', lemma: 'غير', features: 'conj+prep+gen.constr', root: 'غ ي ر', pos: 'noun', gloss: 'and for other than' },
            { surface: 'شَيْءٍ', lemma: 'شيء', features: 'indef.gen', root: 'ش ي أ', pos: 'noun', gloss: 'a thing' },
            { surface: 'يَتَقَدَّمُ', lemma: 'تقدم', features: 'impf.3ms', root: 'ق د م', pos: 'verb', gloss: 'comes forward' },
            { surface: 'فَرَسٌ', lemma: 'فرس', features: 'indef.nom', root: 'ف ر س', pos: 'noun', gloss: 'a horse' },
            { surface: 'فَيُقَاتِلُوْنَ', lemma: 'قاتل', features: 'conj+impf.3mp', root: 'ق ت ل', pos: 'verb', gloss: 'so they fight' },
            { surface: 'وَيَسْبِقُ', lemma: 'سبق', features: 'conj+impf.3ms', root: 'س ب ق', pos: 'verb', gloss: 'and outraces' },
            { surface: 'أَحَدٌ', lemma: 'أحد', features: 'indef.nom', root: 'أ ح د', pos: 'noun', gloss: 'one, someone' },
            { surface: 'فَيَسْقِيْ', lemma: 'سقى', features: 'conj+impf.3ms', root: 'س ق ي', pos: 'verb', gloss: 'so waters' },
            { surface: 'فَرَسَهُ', lemma: 'فرس', features: 'acc+3ms', root: 'ف ر س', pos: 'noun', gloss: 'his horse' },
            { surface: 'أَوْ', lemma: 'أو', features: 'conj', root: '—', pos: 'conj', gloss: 'or' },
            { surface: 'بَعِيْرَهُ', lemma: 'بعير', features: 'acc+3ms', root: 'ب ع ر', pos: 'noun', gloss: 'his camel' },
            { surface: 'فَيَقْتُلُوْنَ', lemma: 'قتل', features: 'conj+impf.3mp', root: 'ق ت ل', pos: 'verb', gloss: 'so they kill' },
            { surface: 'وَيُقْتَلُوْنَ', lemma: 'قتل', features: 'conj+pass.impf.3mp', root: 'ق ت ل', pos: 'verb', gloss: 'and are killed' },
            { surface: 'وَلَا', lemma: 'لا', features: 'conj+part', root: '—', pos: 'part', gloss: 'and not' },
            { surface: 'يَزَالُوْنَ', lemma: 'زال', features: 'impf.3mp', root: 'ز ي ل', pos: 'verb', gloss: 'cease' },
            { surface: 'يُقَاتِلُوْنَ', lemma: 'قاتل', features: 'impf.3mp', root: 'ق ت ل', pos: 'verb', gloss: 'fighting' },
            { surface: 'أَرْبَعِيْنَ', lemma: 'أربعين', features: 'acc', root: 'أ ر ب ع', pos: 'num', gloss: 'forty' },
            { surface: 'سَنَةً', lemma: 'سنة', features: 'indef.acc', root: 'س ن و', pos: 'noun', gloss: 'a year' },
            { surface: 'وَخَمْسِيْنَ', lemma: 'خمسين', features: 'conj+acc', root: 'خ م س', pos: 'num', gloss: 'and fifty' },
            { surface: 'سَنَةً', lemma: 'سنة', features: 'indef.acc', root: 'س ن و', pos: 'noun', gloss: 'a year' },
            { surface: 'فَلِمَاذَا', lemma: 'لماذا', features: 'conj+adv', root: '—', pos: 'adv', gloss: 'so why' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'يُقَاتِلُوْنَ', lemma: 'قاتل', features: 'impf.3mp', root: 'ق ت ل', pos: 'verb', gloss: 'do they fight' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'over' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الشَّرَفِ', lemma: 'شرف', features: 'def.gen', root: 'ش ر ف', pos: 'noun', gloss: 'the honor' },
          ],
        },
        {
          id: 'qr1-29-018',
          page: 109,
          ar: 'وَإِنَّهُ لَشَرَفٌ عَظِيْمٌ.',
          en: 'And it truly is a great honor.',
          tokens: [
            { surface: 'وَإِنَّهُ', lemma: 'إن', features: 'conj+part+3ms', root: '—', pos: 'part', gloss: 'and indeed it' },
            { surface: 'لَشَرَفٌ', lemma: 'شرف', features: 'emph+indef.nom', root: 'ش ر ف', pos: 'noun', gloss: 'surely an honor' },
            { surface: 'عَظِيْمٌ', lemma: 'عظيم', features: 'indef.nom', root: 'ع ظ م', pos: 'adj', gloss: 'great' },
          ],
        },
      ],
      checks: [
        {
          q: 'عَلَى مَاذَا كَانَ الْعَرَبُ يُقَاتِلُوْنَ أَحْيَاناً؟',
          options: ['عَلَىٰ أَدْنَىٰ شَيْءٍ وَلِغَيْرِ شَيْءٍ', 'عَلَى الطَّعَامِ فَقَطْ', 'عَلَى السَّفَرِ فَقَطْ'],
          answer: 0,
          qEn: 'What did the Arabs sometimes fight over?',
          optionsEn: ['Over the slightest thing, and over nothing at all', 'Over food only', 'Over travel only'],
        },
      ],
    },
    {
      id: 'p7',
      en: 'A tribe from Quraysh brought forward a bowl filled with blood, then allied with another tribe unto death. They put their hands into that blood and said, "We will not give up this honor, or we die."',
      sentences: [
        {
          id: 'qr1-29-019',
          page: 109,
          ar: 'وَقَرَّبَتْ قَبِيْلَةٌ مِنْ قُرَيْشٍ جَفْنَةً مَمْلُوءَةً دَماً.',
          en: 'A tribe from Quraysh brought forward a bowl filled with blood.',
          tokens: [
            { surface: 'وَقَرَّبَتْ', lemma: 'قرّب', features: 'conj+perf.3fs', root: 'ق ر ب', pos: 'verb', gloss: 'and brought near, offered' },
            { surface: 'قَبِيْلَةٌ', lemma: 'قبيلة', features: 'indef.nom', root: 'ق ب ل', pos: 'noun', gloss: 'a tribe' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'قُرَيْشٍ', lemma: 'قريش', features: 'gen', root: '—', pos: 'proper', gloss: 'Quraysh' },
            { surface: 'جَفْنَةً', lemma: 'جفنة', features: 'indef.acc', root: 'ج ف ن', pos: 'noun', gloss: 'a bowl' },
            { surface: 'مَمْلُوءَةً', lemma: 'مملوء', features: 'indef.acc.f', root: 'م ل أ', pos: 'adj', gloss: 'filled' },
            { surface: 'دَماً', lemma: 'دم', features: 'indef.acc', root: 'د م ي', pos: 'noun', gloss: 'with blood' },
          ],
        },
        {
          id: 'qr1-29-020',
          page: 109,
          ar: 'ثُمَّ تَحَالَفَتْ مَعَ قَبِيْلَةٍ أُخْرَىٰ عَلَىٰ الْمَوْتِ.',
          en: 'Then it allied with another tribe unto death.',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', features: 'part', root: '—', pos: 'part', gloss: 'then' },
            { surface: 'تَحَالَفَتْ', lemma: 'تحالف', features: 'perf.3fs', root: 'ح ل ف', pos: 'verb', gloss: 'allied' },
            { surface: 'مَعَ', lemma: 'مع', features: 'prep', root: '—', pos: 'prep', gloss: 'with' },
            { surface: 'قَبِيْلَةٍ', lemma: 'قبيلة', features: 'indef.gen', root: 'ق ب ل', pos: 'noun', gloss: 'a tribe' },
            { surface: 'أُخْرَىٰ', lemma: 'آخر', features: 'indef.f', root: 'أ خ ر', pos: 'adj', gloss: 'another' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'unto' },
            { surface: 'الْمَوْتِ', lemma: 'موت', features: 'def.gen', root: 'م و ت', pos: 'noun', gloss: 'death' },
          ],
        },
        {
          id: 'qr1-29-021',
          page: 109,
          ar: 'وَأَدْخَلُوْا أَيْدِيَهُمْ فِيْ ذٰلِكَ الدَّمِ.',
          en: 'And they put their hands into that blood.',
          tokens: [
            { surface: 'وَأَدْخَلُوْا', lemma: 'أدخل', features: 'conj+perf.3mp', root: 'د خ ل', pos: 'verb', gloss: 'and put in' },
            { surface: 'أَيْدِيَهُمْ', lemma: 'يد', features: 'pl.acc+3mp', root: 'ي د ي', pos: 'noun', gloss: 'their hands' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'into' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', features: 'dem', root: '—', pos: 'dem', gloss: 'that' },
            { surface: 'الدَّمِ', lemma: 'دم', features: 'def.gen', root: 'د م ي', pos: 'noun', gloss: 'the blood' },
          ],
        },
        {
          id: 'qr1-29-022',
          page: 109,
          ar: 'وَقَالُوْا: لَا نَتْرُكُ هٰذَا الشَّرَفَ أَوْ نَمُوْتَ.',
          en: 'And they said, "We will not give up this honor, or we die."',
          tokens: [
            { surface: 'وَقَالُوْا', lemma: 'قال', features: 'conj+perf.3mp', root: 'ق و ل', pos: 'verb', gloss: 'and said' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'نَتْرُكُ', lemma: 'ترك', features: 'impf.1p', root: 'ت ر ك', pos: 'verb', gloss: 'we leave' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الشَّرَفَ', lemma: 'شرف', features: 'def.acc', root: 'ش ر ف', pos: 'noun', gloss: 'the honor' },
            { surface: 'أَوْ', lemma: 'أو', features: 'conj', root: '—', pos: 'conj', gloss: 'or' },
            { surface: 'نَمُوْتَ', lemma: 'مات', features: 'subj.1p', root: 'م و ت', pos: 'verb', gloss: 'we die' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَتْ قَبِيْلَةٌ مِنْ قُرَيْشٍ لِتَنَالَ الشَّرَفَ؟',
          options: ['قَرَّبَتْ جَفْنَةً مَمْلُوءَةً دَماً وَتَحَالَفَتْ مَعَ قَبِيْلَةٍ أُخْرَىٰ عَلَىٰ الْمَوْتِ', 'كَتَبَتْ رِسَالَةً إِلَى النَّبِيِّ', 'سَافَرَتْ إِلَى الْمَدِيْنَةِ'],
          answer: 0,
          qEn: 'What did a tribe from Quraysh do to attain the honor?',
          optionsEn: ['It offered a bowl filled with blood and allied with another tribe unto death', 'It wrote a letter to the Prophet', 'It traveled to Medina'],
        },
      ],
    },
    {
      id: 'p8',
      en: 'This was a great evil and a grave danger, and death was a trivial thing to the Arabs in the cause of truth and honor. So war was inevitable -- and war is a most ill-omened thing.',
      sentences: [
        {
          id: 'qr1-29-023',
          page: 109,
          ar: 'وَكَانَ هٰذَا شَرّاً كَبِيْراً وَخَطَراً عَظِيْماً.',
          en: 'This was a great evil and a grave danger.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and was' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'شَرّاً', lemma: 'شر', features: 'indef.acc', root: 'ش ر ر', pos: 'noun', gloss: 'an evil' },
            { surface: 'كَبِيْراً', lemma: 'كبير', features: 'indef.acc', root: 'ك ب ر', pos: 'adj', gloss: 'great' },
            { surface: 'وَخَطَراً', lemma: 'خطر', features: 'conj+indef.acc', root: 'خ ط ر', pos: 'noun', gloss: 'and a danger' },
            { surface: 'عَظِيْماً', lemma: 'عظيم', features: 'indef.acc', root: 'ع ظ م', pos: 'adj', gloss: 'grave' },
          ],
        },
        {
          id: 'qr1-29-024',
          page: 109,
          ar: 'وَالْمَوْتُ شَيْءٌ هَيِّنٌ لِلْعَرَبِ فِيْ سَبِيْلِ الْحَقِّ وَالشَّرَفِ.',
          en: 'And death was a trivial thing to the Arabs in the cause of truth and honor.',
          tokens: [
            { surface: 'وَالْمَوْتُ', lemma: 'موت', features: 'conj+def.nom', root: 'م و ت', pos: 'noun', gloss: 'and death' },
            { surface: 'شَيْءٌ', lemma: 'شيء', features: 'indef.nom', root: 'ش ي أ', pos: 'noun', gloss: 'a thing' },
            { surface: 'هَيِّنٌ', lemma: 'هين', features: 'indef.nom', root: 'ه ي ن', pos: 'adj', gloss: 'trivial' },
            { surface: 'لِلْعَرَبِ', lemma: 'عرب', features: 'prep+def.gen', root: 'ع ر ب', pos: 'proper', gloss: 'to the Arabs' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'سَبِيْلِ', lemma: 'سبيل', features: 'gen.constr', root: 'س ب ل', pos: 'noun', gloss: 'the path of' },
            { surface: 'الْحَقِّ', lemma: 'حق', features: 'def.gen', root: 'ح ق ق', pos: 'noun', gloss: 'the truth' },
            { surface: 'وَالشَّرَفِ', lemma: 'شرف', features: 'conj+def.gen', root: 'ش ر ف', pos: 'noun', gloss: 'and the honor' },
          ],
        },
        {
          id: 'qr1-29-025',
          page: 109,
          ar: 'إِذاً لَا بُدَّ مِنَ الْحَرْبِ، وَالْحَرْبُ مَشْؤُوْمَةٌ جِدّاً.',
          en: 'So war was inevitable -- and war is a most ill-omened thing.',
          tokens: [
            { surface: 'إِذاً', lemma: 'إذن', features: 'part', root: '—', pos: 'part', gloss: 'so, therefore' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'no' },
            { surface: 'بُدَّ', lemma: 'بد', features: 'acc', root: 'ب د د', pos: 'noun', gloss: 'escape (from)' },
            { surface: 'مِنَ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'الْحَرْبِ', lemma: 'حرب', features: 'def.gen', root: 'ح ر ب', pos: 'noun', gloss: 'the war' },
            { surface: 'وَالْحَرْبُ', lemma: 'حرب', features: 'conj+def.nom', root: 'ح ر ب', pos: 'noun', gloss: 'and the war' },
            { surface: 'مَشْؤُوْمَةٌ', lemma: 'مشؤوم', features: 'indef.nom.f', root: 'ش أ م', pos: 'adj', gloss: 'ill-omened' },
            { surface: 'جِدّاً', lemma: 'جدا', features: 'adv', root: '—', pos: 'adv', gloss: 'very much' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ الْمَوْتُ عِنْدَ الْعَرَبِ فِيْ سَبِيْلِ الشَّرَفِ؟',
          options: ['شَيْئاً هَيِّناً', 'شَيْئاً مُسْتَحِيْلاً', 'شَيْئاً مَمْنُوْعاً'],
          answer: 0,
          qEn: 'How did the Arabs regard death in pursuit of honor?',
          optionsEn: ['As a trivial thing', 'As an impossible thing', 'As a forbidden thing'],
        },
      ],
    },
  ],
};

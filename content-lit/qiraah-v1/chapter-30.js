// القراءة الراشدة, volume one, chapter thirty -- مَنْ يَضَعُ الْحَجَرَ؟ (٢).
//
// Follows the shape of chapter-07.js/chapter-22.js/chapter-29.js -- see
// ../CHAPTER-FORMAT.md. Hand-authored (vision-model OCR, checked against
// the scan) from qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed
// pages 110-111. Page-boundary confirmed via the "✳ ✳ ✳" divider at the
// bottom of page 111 (immediately followed there by the footnotes for (١)
// and (٢), then the page-111 folio number), and via chapter-27.js/
// chapter-28.js's الْبَرِيْدُ (١)/(٢) precedent for two-part chapters:
// page 110 opens with heading "(٣٠)" and the IDENTICAL title
// "مَنْ يَضَعُ الْحَجَرَ؟" subtitled "(٢)" -- this is part (٢), the direct
// continuation of chapter-29.js's part (١), completing the sīrah episode
// of the young Prophet ﷺ arbitrating the dispute chapter 29 ended on.
//
// THIS CHAPTER IS A THIRD-PERSON SIRAH NARRATIVE (register
// "third_person_sirah_narrative", matching chapter-07.js/chapter-22.js/
// chapter-29.js), opening with a short recap in the same voice that closed
// chapter 29 (paragraphs 1-4 restate/echo chapter-29.js's final lines
// almost verbatim -- see below) before advancing the story: the wise
// counsel against fighting, the elder's proposal that the first man
// through the mosque door should arbitrate, the reveal that this was the
// young Muhammad ﷺ (already known to Quraysh as "al-Amīn", the Trustworthy),
// and his solution -- spreading the Black Stone in a cloth so every tribe
// could share in lifting it into place, averting the war.
//
// ECHO/CONTINUITY WITH CHAPTER 29: sentence qr1-30-004 ("إِذَاً لاَ بُدَّ مِنَ
// الْحَرْبِ وَالْحَرْبُ مَشْؤُوْمَةٌ جِدًّا") restates chapter-29.js's closing
// sentence (qr1-29-025) almost word for word (this chapter's source text
// lacks the internal comma chapter 29's had before "وَالْحَرْبُ"; transcribed
// diplomatically as printed). Likewise "هَيِّنٌ" (qr1-30-005) and the whole
// "الْمَوْتُ ... فِيْ سَبِيْلِ الْحَقِّ وَالشَّرَفِ" idea revisit chapter 29's
// qr1-29-024. This is intentional -- the book's own device for a
// two-part chapter -- and is why so much of this chapter's vocabulary
// (حرب, شرف, حريص, نال, بد, هين, مشؤوم, موضع, محل, قبيلة, وضع...) is simply
// reused from chapter-29.js's dict rather than reintroduced.
//
// SENTENCE-CHUNKING NOTE (same departure as chapter-29.js's, applied more
// lightly here): most of the source's sentence-final periods already carve
// out short, buildable clauses. Three source commas are re-punctuated into
// sentence breaks (no wording changed, only where periods fall), each at a
// natural independent-clause boundary, purely to raise the buildable count
// further above the already-comfortable margin: "...يَقْضِيْ بَيْنَكُمْ،
// فَقَبِلُوْا..." -> two sentences (qr1-30-010/011); "...رَسُوْلَ اللّٰهِ ﷺ،
// فَلَمَّا رَأَوْهُ..." -> two sentences (qr1-30-013/014); and "...رَضِيْنَا،
// هٰذَا مُحَمَّدٌ!" -> two sentences (qr1-30-014/015). The long final
// paragraph (qr1-30-016 through 021) keeps its breathless, clause-chained
// quality otherwise -- fitting for the climax -- since the quota is already
// well over threshold by then.
//
// Homograph / new-lemma notes (checked against the book-wide lemma index,
// chapters 1-29):
//   - "قَضَى" ("يَقْضِيْ بَيْنَكُمْ", "shall judge/decide between you") reuses
//     chapter-09.js's "قضى" key as-is (pos "verb" both times; chapter-09.js's
//     own gloss is already "to judge, decide", an exact match) -- no clash
//     with chapter-01.js's/chapter-06.js's "to spend (time)" sense of the
//     same key, since POS matches (verb) in every case; only a dict-level
//     POS clash forces a new key under the established rule.
//   - "قَبِلَ" (Form I, "to accept" -- "فَقَبِلُوْا") is a genuine POS clash
//     with chapter-04.js's/chapter-08.js's/chapter-09.js's/chapter-12.js's/
//     chapter-16.js's/chapter-23.js's/chapter-29.js's established "قبل"
//     (the preposition "before", pos "prep"): same bare spelling, but this
//     chapter needs the verb sense. Keyed "قبل-فعل" (pos "verb"), following
//     the "-فعل" suffix pattern chapter-23.js already established for this
//     exact situation (its own "ولد-فعل"/"قدر-فعل"/"مرض-فعل" vs. the
//     book's noun senses of the same bare spellings).
//   - "طَلَبَ" (Form I, "to ask for, request" -- "طَلَبَ رَسُوْلُ اللّٰهِ ﷺ
//     ثَوْبـاً") is likewise a POS clash with chapter-03.js's/chapter-12.js's/
//     chapter-16.js's "طلب" (pos "noun", "seeking, pursuit; the goal
//     sought"). Keyed "طلب-فعل" (pos "verb"), same reasoning/pattern.
//   - "أُتِيَ" ("فَأُتِيَ بِهِ", "and it was brought") reuses chapter-28.js's
//     "اتى" key as-is (pos "verb" both times; chapter-28.js's gloss "to
//     come" covers the root sense -- the passive + بـ idiom "was come
//     with" = "was brought" is given as this token's own contextual
//     gloss, per CHAPTER-FORMAT.md's token-gloss-overrides-dict-gloss
//     rule, no new key needed).
//   - "الأَمِيْنُ" ("this is al-Amīn" -- Quraysh's pre-Islamic epithet for
//     the young Muhammad ﷺ, "the Trustworthy") reuses chapter-08.js's
//     "أمين" key as-is (pos "noun" both times; chapter-08.js's own sense is
//     "conductor, guard (lit. trustworthy one)" -- a different specific
//     application of the same word, not a POS clash) -- per the established
//     rule (chapter-29.js's "حجر" precedent), this chapter's dict entry
//     gives its own locally-appropriate gloss for the epithet.
//   - "دَفَعَ" ("دَفَعَ ... هٰذَا الشَّرَّ", "averted/repelled this evil")
//     reuses chapter-28.js's "دفع" key as-is (pos "verb" both times;
//     chapter-28.js's gloss is "to pay, push" -- this chapter's own p.111
//     footnote glosses the same word here as "رَدَّه", "repelled it", so
//     this chapter's dict entry uses that locally-appropriate sense,
//     again per the "حجر" precedent).
//   - "دَاخِلٍ" ("أَوَّلُ دَاخِلٍ", "the first to enter/first enterer") is a
//     naturally distinct spelling from chapter-26.js's verb "دخل" ("to
//     enter") -- the alif of the فَاعِل active-participle pattern makes it
//     a different surface form entirely, exactly like chapter-29.js's
//     "قرّب"/"قرب" or chapter-09.js's/chapter-12.js's "علم"/"علّم" -- so it
//     is simply its OWN new lemma, no suffix needed.
//   - "أَكْبَرَ" (elative, "greater/eldest" -- "أَكْبَرَهُمْ سِنًّا") is
//     likewise naturally distinct in spelling from chapter-29.js's "كبير"
//     (the plain adjective "big, large", same root ك ب ر, different
//     derivational pattern) -- its own new lemma, no suffix needed.
//   - "لِيَأْخُذْ" (لِ + jussive, "let each tribe take") is tagged
//     features "prep+impf.3ms" on the reused lemma "أخذ", following
//     chapter-28.js's precedent for لِ + verb purpose/command clauses
//     ("لِيَصِلَ" -> "prep+impf.3ms") -- the feature-atom vocabulary has no
//     dedicated jussive atom, so this reuses the established simplification
//     rather than inventing one.
//   - "بِهِ" ("فَأُتِيَ بِهِ", "and it was brought [with it]") reuses
//     chapter-28.js's convention of keying the bare preposition "ب" as its
//     own lemma (pos "prep") for a bound object pronoun with no separate
//     verb-noun sense, exactly as chapter-26.js/chapter-28.js already do.
//   - Reused as-is, unchanged sense, from chapter-29.js: قريش, حرب, شرف,
//     حريص, نال, بد, هين, مشؤوم, موضع, محل, وضع, قبيلة, واحد, كثير, حجر,
//     اسود, غير, رفع, ناحية, شر, إذن (for "إِذَاً"), جدا, حق, سبيل, عرب,
//     شيء, موت, من-موصول, لكن.
//   - Reused as-is from earlier chapters in this book's own 21-29 range:
//     من-استفهام (chapter-17.js/27.js/28.js), عاقل + طريق + دخل + وجد
//     (chapter-26.js), رأى (chapter-24.js/26.js/27.js/28.js), رضي
//     (chapter-24.js), أخبر + خبر + وصل (chapter-27.js), فعل (chapter-27.js),
//     حاجة (chapter-26.js), ثوب (chapter-26.js), رسول (chapter-07.js/17.js/
//     22.js/23.js), قال/كان/هذا/اول/كل/هو/كيف/نعم/إن/ثم/إلى/من/لا/على/أن
//     (chapter-24.js/26.js/27.js/28.js/29.js, ordinary book-wide function
//     words), محمد (chapter-09.js/10.js/19.js).
//   - Reused as-is from chapters 1-20 (a different lemma-key convention,
//     JSON-quoted, but the same bare spellings/roots/POS carry over
//     cleanly with no clash): مكث, أربع, ليلة, اجتمع, مسجد, بعض, بأس,
//     وقت, شيخ, سن, بين, بلغ, منع.
//   - New this chapter, checked against no clash anywhere in the book:
//     خمس, تشاور, قتال, أكبر, باب, قبل-فعل, داخل, طلب-فعل, جميعا, هكذا.
//
// The Prophet ﷺ honorific is excluded from tokens and stripped for
// reconstruction, exactly as chapter-07.js/chapter-22.js/chapter-29.js do
// (this produces the same "tokens joined != ar stripped of punctuation"
// warnings those chapters already have on their own ﷺ sentences --
// expected, not a structural error).
export const CHAPTER = {
  id: 'ch30',
  number: 30,
  title: { ar: 'مَنْ يَضَعُ الْحَجَرَ؟', en: 'Who Places the Stone? (II)' },
  pages: [110, 111],
  register: 'third_person_sirah_narrative',
  newWords: [
    'خمس',
    'تشاور',
    'قتال',
    'أكبر',
    'باب',
    'قبل-فعل',
    'داخل',
    'طلب-فعل',
    'جميعا',
    'هكذا',
  ],
  lemmas: {
    // -- new this chapter --
    خمس: { root: 'خ م س', pos: 'num', gloss: 'five', content: true },
    تشاور: { root: 'ش و ر', pos: 'verb', gloss: 'to consult one another, deliberate together', content: true },
    قتال: { root: 'ق ت ل', pos: 'noun', gloss: 'fighting, combat', content: true },
    أكبر: { root: 'ك ب ر', pos: 'adj', gloss: 'greater; eldest, oldest (elative)', content: true },
    باب: { root: 'ب و ب', pos: 'noun', gloss: 'door', content: true },
    'قبل-فعل': { root: 'ق ب ل', pos: 'verb', gloss: 'to accept', content: true },
    داخل: { root: 'د خ ل', pos: 'noun', gloss: 'one who enters, entrant', content: true },
    'طلب-فعل': { root: 'ط ل ب', pos: 'verb', gloss: 'to ask for, request', content: true },
    جميعا: { root: 'ج م ع', pos: 'adv', gloss: 'all together', content: true },
    هكذا: { root: '—', pos: 'adv', gloss: 'thus, in this way', content: true },
    // -- reused, book-wide (chapter-29.js) --
    قريش: { root: '—', pos: 'proper', gloss: 'Quraysh (the tribe)', content: true },
    حرب: { root: 'ح ر ب', pos: 'noun', gloss: 'war', content: true },
    شرف: { root: 'ش ر ف', pos: 'noun', gloss: 'honour', content: true },
    حريص: { root: 'ح ر ص', pos: 'adj', gloss: 'eager, keen', content: true },
    نال: { root: 'ن ي ل', pos: 'verb', gloss: 'to attain, receive', content: true },
    بد: { root: 'ب د د', pos: 'noun', gloss: 'escape, avoidance (in "لا بد" = there is no escaping, it is inevitable)', content: true },
    هين: { root: 'ه ي ن', pos: 'adj', gloss: 'easy, trivial', content: true },
    مشؤوم: { root: 'ش أ م', pos: 'adj', gloss: 'ill-omened, unlucky', content: true },
    موضع: { root: 'و ض ع', pos: 'noun', gloss: 'place, location', content: true },
    محل: { root: 'ح ل ل', pos: 'noun', gloss: 'place', content: true },
    وضع: { root: 'و ض ع', pos: 'verb', gloss: 'to place, put', content: true },
    قبيلة: { root: 'ق ب ل', pos: 'noun', gloss: 'tribe', content: true },
    واحد: { root: 'و ح د', pos: 'num', gloss: 'one', content: true },
    كثير: { root: 'ك ث ر', pos: 'adj', gloss: 'much, many', content: true },
    حجر: { root: 'ح ج ر', pos: 'noun', gloss: 'stone', content: true },
    اسود: { root: 'س و د', pos: 'adj', gloss: 'black', content: true },
    غير: { root: 'غ ي ر', pos: 'noun', gloss: 'other than, not', content: true },
    رفع: { root: 'ر ف ع', pos: 'verb', gloss: 'to raise, lift', content: true },
    ناحية: { root: 'ن ح و', pos: 'noun', gloss: 'side, direction', content: true },
    شر: { root: 'ش ر ر', pos: 'noun', gloss: 'the worst, evil', content: true },
    'إذن': { root: '—', pos: 'part', gloss: 'so, therefore, in that case', content: false },
    جدا: { root: '—', pos: 'adv', gloss: 'very much', content: true },
    حق: { root: 'ح ق ق', pos: 'noun', gloss: 'truth, what is right', content: true },
    سبيل: { root: 'س ب ل', pos: 'noun', gloss: 'path, way', content: true },
    عرب: { root: 'ع ر ب', pos: 'proper', gloss: 'Arabs', content: true },
    شيء: { root: 'ش ي أ', pos: 'noun', gloss: 'thing', content: true },
    موت: { root: 'م و ت', pos: 'noun', gloss: 'death', content: true },
    'من-موصول': { root: '—', pos: 'rel', gloss: 'he who, whoever', content: false },
    لكن: { root: '—', pos: 'part', gloss: 'but', content: false },
    // -- reused, book-wide (chapters 21-28) --
    'من-استفهام': { root: '—', pos: 'part', gloss: 'who, whoever', content: false },
    عاقل: { root: 'ع ق ل', pos: 'noun', gloss: 'sensible, wise person', content: true },
    طريق: { root: 'ط ر ق', pos: 'noun', gloss: 'road, way', content: true },
    دخل: { root: 'د خ ل', pos: 'verb', gloss: 'to enter', content: true },
    وجد: { root: 'و ج د', pos: 'verb', gloss: 'to find', content: true },
    رأى: { root: 'ر أ ي', pos: 'verb', gloss: 'to see', content: true },
    رضي: { root: 'ر ض ي', pos: 'verb', gloss: 'to be pleased, content', content: true },
    أخبر: { root: 'خ ب ر', pos: 'verb', gloss: 'to inform, tell', content: true },
    خبر: { root: 'خ ب ر', pos: 'noun', gloss: 'news, story (of something)', content: true },
    وصل: { root: 'و ص ل', pos: 'verb', gloss: 'to arrive, reach', content: true },
    فعل: { root: 'ف ع ل', pos: 'verb', gloss: 'to do', content: true },
    حاجة: { root: 'ح و ج', pos: 'noun', gloss: 'need; (pl.) provisions', content: true },
    ثوب: { root: 'ث و ب', pos: 'noun', gloss: 'garment, cloth', content: true },
    رسول: { root: 'ر س ل', pos: 'noun', gloss: 'messenger', content: true },
    اتى: { root: 'أ ت ي', pos: 'verb', gloss: 'to come', content: true },
    ب: { root: '—', pos: 'prep', gloss: 'with', content: false },
    أمين: { root: 'أ م ن', pos: 'noun', gloss: 'the Trustworthy (epithet of the young Prophet ﷺ, "al-Amīn")', content: true },
    دفع: { root: 'د ف ع', pos: 'verb', gloss: 'to push away, repel, avert (harm)', content: true },
    قضى: { root: 'ق ض ي', pos: 'verb', gloss: 'to judge, decide (between people)', content: true },
    // -- reused, book-wide (chapters 1-20) --
    مكث: { root: 'م ك ث', pos: 'verb', gloss: 'to stay, remain', content: true },
    أربع: { root: 'أ ر ب ع', pos: 'num', gloss: 'four', content: true },
    ليلة: { root: 'ل ي ل', pos: 'noun', gloss: 'a night', content: true },
    اجتمع: { root: 'ج م ع', pos: 'verb', gloss: 'to gather, meet', content: true },
    مسجد: { root: 'س ج د', pos: 'noun', gloss: 'mosque', content: true },
    بعض: { root: 'ب ع ض', pos: 'noun', gloss: 'some', content: true },
    بأس: { root: 'ب أ س', pos: 'noun', gloss: 'harm', content: true },
    وقت: { root: 'و ق ت', pos: 'noun', gloss: 'time', content: true },
    شيخ: { root: 'ش ي خ', pos: 'noun', gloss: 'old man, elder', content: true },
    سن: { root: 'س ن ن', pos: 'noun', gloss: 'age', content: true },
    بين: { root: 'ب ي ن', pos: 'prep', gloss: 'between, among', content: false },
    بلغ: { root: 'ب ل غ', pos: 'verb', gloss: 'to reach, arrive at', content: true },
    منع: { root: 'م ن ع', pos: 'verb', gloss: 'to prevent, protect, withhold', content: true },
    // -- ordinary function words, book-wide --
    على: { root: '—', pos: 'prep', gloss: 'on, upon, in', content: false },
    ذلك: { root: '—', pos: 'dem', gloss: 'that', content: false },
    أو: { root: '—', pos: 'conj', gloss: 'or', content: false },
    ثم: { root: '—', pos: 'part', gloss: 'then', content: false },
    إن: { root: '—', pos: 'part', gloss: 'indeed', content: false },
    في: { root: '—', pos: 'prep', gloss: 'in', content: false },
    قال: { root: 'ق و ل', pos: 'verb', gloss: 'to say', content: true },
    كل: { root: 'ك ل ل', pos: 'noun', gloss: 'each, every', content: true },
    أن: { root: '—', pos: 'part', gloss: 'that; to (subjunctive)', content: false },
    هذا: { root: '—', pos: 'dem', gloss: 'this', content: false },
    لا: { root: '—', pos: 'part', gloss: 'not, no', content: false },
    من: { root: '—', pos: 'prep', gloss: 'from, of', content: false },
    ناس: { root: '—', pos: 'noun', gloss: 'people', content: true },
    نعم: { root: '—', pos: 'part', gloss: 'yes', content: false },
    إلى: { root: '—', pos: 'prep', gloss: 'to, for', content: false },
    ما: { root: '—', pos: 'rel', gloss: 'what, that which', content: false },
    هو: { root: '—', pos: 'noun', gloss: 'he, it', content: false },
    كيف: { root: 'ك ي ف', pos: 'part', gloss: 'how', content: false },
    كان: { root: 'ك و ن', pos: 'verb', gloss: 'to be', content: true },
    اول: { root: 'أ و ل', pos: 'adj', gloss: 'first', content: true },
    عرف: { root: 'ع ر ف', pos: 'verb', gloss: 'to know', content: true },
    الله: { root: '—', pos: 'proper', gloss: 'Allah', content: true },
    لما: { root: '—', pos: 'part', gloss: 'when', content: false },
    محمد: { root: '—', pos: 'proper', gloss: 'Muḥammad (a name)', content: true },
    أخذ: { root: 'أ خ ذ', pos: 'verb', gloss: 'to take', content: true },
    يد: { root: 'ي د ي', pos: 'noun', gloss: 'hand', content: true },
    حتى: { root: '—', pos: 'part', gloss: 'until', content: false },
    إذا: { root: '—', pos: 'part', gloss: 'when, if', content: false },
  },
  paragraphs: [
    {
      id: 'p1',
      en: 'Quraysh remained in that state for four or five nights, then they gathered in the mosque and consulted with one another.',
      sentences: [
        {
          id: 'qr1-30-001',
          page: 110,
          ar: 'وَمَكَثَتْ قُرَيْشٌ عَلَى ذٰلِكَ أَرْبَعَ لَيَالٍ أَوْ خَمْساً ثُمَّ إِنَّهُمُ اجْتَمَعُوا فِي الْمَسْجِدِ وَتَشَاوَرُوا.',
          en: 'Quraysh remained in that state for four or five nights, then they gathered in the mosque and consulted with one another.',
          tokens: [
            { surface: 'وَمَكَثَتْ', lemma: 'مكث', features: 'conj+perf.3fs', root: 'م ك ث', pos: 'verb', gloss: 'and remained' },
            { surface: 'قُرَيْشٌ', lemma: 'قريش', features: 'nom', root: '—', pos: 'proper', gloss: 'Quraysh' },
            { surface: 'عَلَى', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'in (that state)' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', features: 'dem', root: '—', pos: 'dem', gloss: 'that' },
            { surface: 'أَرْبَعَ', lemma: 'أربع', features: 'acc.constr', root: 'أ ر ب ع', pos: 'num', gloss: 'four' },
            { surface: 'لَيَالٍ', lemma: 'ليلة', features: 'pl.indef.gen', root: 'ل ي ل', pos: 'noun', gloss: 'nights' },
            { surface: 'أَوْ', lemma: 'أو', features: 'conj', root: '—', pos: 'conj', gloss: 'or' },
            { surface: 'خَمْساً', lemma: 'خمس', features: 'indef.acc', root: 'خ م س', pos: 'num', gloss: 'five' },
            { surface: 'ثُمَّ', lemma: 'ثم', features: 'part', root: '—', pos: 'part', gloss: 'then' },
            { surface: 'إِنَّهُمُ', lemma: 'إن', features: 'part+3mp', root: '—', pos: 'part', gloss: 'indeed they' },
            { surface: 'اجْتَمَعُوا', lemma: 'اجتمع', features: 'perf.3mp', root: 'ج م ع', pos: 'verb', gloss: 'gathered' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الْمَسْجِدِ', lemma: 'مسجد', features: 'def.gen', root: 'س ج د', pos: 'noun', gloss: 'the mosque' },
            { surface: 'وَتَشَاوَرُوا', lemma: 'تشاور', features: 'conj+perf.3mp', root: 'ش و ر', pos: 'verb', gloss: 'and consulted with one another' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَمْ لَيْلَةً مَكَثَتْ قُرَيْشٌ قَبْلَ أَنْ تَجْتَمِعَ وَتَتَشَاوَرَ؟',
          options: ['أَرْبَعَ لَيَالٍ أَوْ خَمْساً', 'لَيْلَةً وَاحِدَةً', 'عَشْرَ لَيَالٍ'],
          answer: 0,
          qEn: 'How many nights did Quraysh remain before gathering and consulting?',
          optionsEn: ['Four nights or five', 'One night', 'Ten nights'],
        },
      ],
    },
    {
      id: 'p2',
      en: "They consulted and said: 'Who will place the Black Stone in its place?' Every tribe was eager to attain this honor, but the stone was one and the tribes were many.",
      sentences: [
        {
          id: 'qr1-30-002',
          page: 110,
          ar: 'تَشَاوَرُوْا وَقَالُوْا: مَنْ يَضَعُ الْحَجَرَ الأَسْوَدَ فِيْ مَحَلِّهِ؟',
          en: "They consulted and said: 'Who will place the Black Stone in its place?'",
          tokens: [
            { surface: 'تَشَاوَرُوْا', lemma: 'تشاور', features: 'perf.3mp', root: 'ش و ر', pos: 'verb', gloss: 'they consulted' },
            { surface: 'وَقَالُوْا', lemma: 'قال', features: 'conj+perf.3mp', root: 'ق و ل', pos: 'verb', gloss: 'and said' },
            { surface: 'مَنْ', lemma: 'من-استفهام', features: 'part', root: '—', pos: 'part', gloss: 'who' },
            { surface: 'يَضَعُ', lemma: 'وضع', features: 'impf.3ms', root: 'و ض ع', pos: 'verb', gloss: 'places' },
            { surface: 'الْحَجَرَ', lemma: 'حجر', features: 'def.acc', root: 'ح ج ر', pos: 'noun', gloss: 'the stone' },
            { surface: 'الأَسْوَدَ', lemma: 'اسود', features: 'def.acc', root: 'س و د', pos: 'adj', gloss: 'the black' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'مَحَلِّهِ', lemma: 'محل', features: 'gen+3ms', root: 'ح ل ل', pos: 'noun', gloss: 'its place' },
          ],
        },
        {
          id: 'qr1-30-003',
          page: 110,
          ar: 'كُلُّ قَبِيْلَةٍ حَرِيْصَةٌ عَلَى أَنْ تَنَالَ هٰذَا الشَّرَفَ، وَالْحَجَرُ وَاحِدٌ، وَالْقَبَائِلُ كَثِيْرَةٌ.',
          en: 'Every tribe is eager to attain this honor, but the stone is one, and the tribes are many.',
          tokens: [
            { surface: 'كُلُّ', lemma: 'كل', features: 'nom.constr', root: 'ك ل ل', pos: 'noun', gloss: 'every' },
            { surface: 'قَبِيْلَةٍ', lemma: 'قبيلة', features: 'indef.gen', root: 'ق ب ل', pos: 'noun', gloss: 'tribe' },
            { surface: 'حَرِيْصَةٌ', lemma: 'حريص', features: 'indef.nom.f', root: 'ح ر ص', pos: 'adj', gloss: 'eager' },
            { surface: 'عَلَى', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'to' },
            { surface: 'تَنَالَ', lemma: 'نال', features: 'subj.3fs', root: 'ن ي ل', pos: 'verb', gloss: 'attain' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الشَّرَفَ', lemma: 'شرف', features: 'def.acc', root: 'ش ر ف', pos: 'noun', gloss: 'the honor' },
            { surface: 'وَالْحَجَرُ', lemma: 'حجر', features: 'conj+def.nom', root: 'ح ج ر', pos: 'noun', gloss: 'and the stone' },
            { surface: 'وَاحِدٌ', lemma: 'واحد', features: 'indef.nom', root: 'و ح د', pos: 'num', gloss: 'one' },
            { surface: 'وَالْقَبَائِلُ', lemma: 'قبيلة', features: 'conj+pl.def.nom', root: 'ق ب ل', pos: 'noun', gloss: 'and the tribes' },
            { surface: 'كَثِيْرَةٌ', lemma: 'كثير', features: 'indef.nom.f', root: 'ك ث ر', pos: 'adj', gloss: 'many' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا لَمْ تَسْتَطِعْ كُلُّ قَبِيْلَةٍ أَنْ تَضَعَ الْحَجَرَ؟',
          options: ['لِأَنَّ الْحَجَرَ وَاحِدٌ وَالْقَبَائِلَ كَثِيْرَةٌ', 'لِأَنَّ الْحَجَرَ ضَاعَ', 'لِأَنَّ قُرَيْشاً رَفَضَتْ ذٰلِكَ'],
          answer: 0,
          qEn: 'Why couldn’t every tribe place the stone?',
          optionsEn: ['Because the stone was one and the tribes were many', 'Because the stone was lost', 'Because Quraysh refused'],
        },
      ],
    },
    {
      id: 'p3',
      en: 'So war was inevitable, and war is a very ill-omened thing.',
      sentences: [
        {
          id: 'qr1-30-004',
          page: 110,
          ar: 'إِذَاً لاَ بُدَّ مِنَ الْحَرْبِ وَالْحَرْبُ مَشْؤُوْمَةٌ جِدًّا.',
          en: 'So war is inevitable, and war is a very ill-omened thing.',
          tokens: [
            { surface: 'إِذَاً', lemma: 'إذن', features: 'part', root: '—', pos: 'part', gloss: 'so, therefore' },
            { surface: 'لاَ', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'no' },
            { surface: 'بُدَّ', lemma: 'بد', features: 'acc', root: 'ب د د', pos: 'noun', gloss: 'escape (from)' },
            { surface: 'مِنَ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'الْحَرْبِ', lemma: 'حرب', features: 'def.gen', root: 'ح ر ب', pos: 'noun', gloss: 'the war' },
            { surface: 'وَالْحَرْبُ', lemma: 'حرب', features: 'conj+def.nom', root: 'ح ر ب', pos: 'noun', gloss: 'and the war' },
            { surface: 'مَشْؤُوْمَةٌ', lemma: 'مشؤوم', features: 'indef.nom.f', root: 'ش أ م', pos: 'adj', gloss: 'ill-omened' },
            { surface: 'جِدًّا', lemma: 'جدا', features: 'adv', root: '—', pos: 'adv', gloss: 'very much' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ لاَ بُدَّ مِنْهُ؟',
          options: ['الْحَرْبُ', 'السَّفَرُ', 'الصُّلْحُ الْفَوْرِيُّ'],
          answer: 0,
          qEn: 'What was inevitable?',
          optionsEn: ['War', 'Travel', 'An immediate truce'],
        },
      ],
    },
    {
      id: 'p4',
      en: "Some people said: 'There is no harm in war, for death is an easy thing for the Arabs in the cause of truth and honor.'",
      sentences: [
        {
          id: 'qr1-30-005',
          page: 110,
          ar: 'قَالَ بَعْضُ النَّاسِ: لاَ بَأْسَ بِالْحَرْبِ فَالْمَوْتُ شَيْءٌ هَيِّنٌ لِلْعَرَبِ فِيْ سَبِيْلِ الْحَقِّ وَالشَّرَفِ.',
          en: "Some people said: 'There is no harm in war, for death is an easy thing for the Arabs in the cause of truth and honor.'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قال', features: 'perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'said' },
            { surface: 'بَعْضُ', lemma: 'بعض', features: 'nom.constr', root: 'ب ع ض', pos: 'noun', gloss: 'some of' },
            { surface: 'النَّاسِ', lemma: 'ناس', features: 'def.gen', root: '—', pos: 'noun', gloss: 'the people' },
            { surface: 'لاَ', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'no' },
            { surface: 'بَأْسَ', lemma: 'بأس', features: 'acc', root: 'ب أ س', pos: 'noun', gloss: 'harm' },
            { surface: 'بِالْحَرْبِ', lemma: 'حرب', features: 'prep+def.gen', root: 'ح ر ب', pos: 'noun', gloss: 'in war' },
            { surface: 'فَالْمَوْتُ', lemma: 'موت', features: 'conj+def.nom', root: 'م و ت', pos: 'noun', gloss: 'for death' },
            { surface: 'شَيْءٌ', lemma: 'شيء', features: 'indef.nom', root: 'ش ي أ', pos: 'noun', gloss: 'a thing' },
            { surface: 'هَيِّنٌ', lemma: 'هين', features: 'indef.nom', root: 'ه ي ن', pos: 'adj', gloss: 'easy' },
            { surface: 'لِلْعَرَبِ', lemma: 'عرب', features: 'prep+def.gen', root: 'ع ر ب', pos: 'proper', gloss: 'for the Arabs' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'سَبِيْلِ', lemma: 'سبيل', features: 'gen.constr', root: 'س ب ل', pos: 'noun', gloss: 'the path of' },
            { surface: 'الْحَقِّ', lemma: 'حق', features: 'def.gen', root: 'ح ق ق', pos: 'noun', gloss: 'the truth' },
            { surface: 'وَالشَّرَفِ', lemma: 'شرف', features: 'conj+def.gen', root: 'ش ر ف', pos: 'noun', gloss: 'and the honor' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ بَعْضُ النَّاسِ عَنِ الْحَرْبِ؟',
          options: ['لاَ بَأْسَ بِهَا', 'يَجِبُ مَنْعُهَا فَوْراً', 'إِنَّهَا مُسْتَحِيْلَةٌ'],
          answer: 0,
          qEn: 'What did some people say about war?',
          optionsEn: ['There is no harm in it', 'It must be stopped at once', 'It is impossible'],
        },
      ],
    },
    {
      id: 'p5',
      en: "The sensible ones said: 'Yes! There is no harm in war, but there is no need for war at this time.'",
      sentences: [
        {
          id: 'qr1-30-006',
          page: 111,
          ar: 'قَالَ الْعُقَلاَءُ: نَعَمْ! لاَ بَأْسَ بِالْحَرْبِ وَلٰكِنْ لاَ حَاجَةَ إِلَى الْحَرْبِ فِيْ هٰذَا الْوَقْتِ.',
          en: "The sensible ones said: 'Yes! There is no harm in war, but there is no need for war at this time.'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قال', features: 'perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'said' },
            { surface: 'الْعُقَلاَءُ', lemma: 'عاقل', features: 'pl.def.nom', root: 'ع ق ل', pos: 'noun', gloss: 'the wise/sensible ones' },
            { surface: 'نَعَمْ', lemma: 'نعم', features: 'part', root: '—', pos: 'part', gloss: 'yes' },
            { surface: 'لاَ', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'no' },
            { surface: 'بَأْسَ', lemma: 'بأس', features: 'acc', root: 'ب أ س', pos: 'noun', gloss: 'harm' },
            { surface: 'بِالْحَرْبِ', lemma: 'حرب', features: 'prep+def.gen', root: 'ح ر ب', pos: 'noun', gloss: 'in war' },
            { surface: 'وَلٰكِنْ', lemma: 'لكن', features: 'conj+part', root: '—', pos: 'part', gloss: 'but' },
            { surface: 'لاَ', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'no' },
            { surface: 'حَاجَةَ', lemma: 'حاجة', features: 'acc', root: 'ح و ج', pos: 'noun', gloss: 'need' },
            { surface: 'إِلَى', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'for' },
            { surface: 'الْحَرْبِ', lemma: 'حرب', features: 'def.gen', root: 'ح ر ب', pos: 'noun', gloss: 'the war' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الْوَقْتِ', lemma: 'وقت', features: 'def.gen', root: 'و ق ت', pos: 'noun', gloss: 'the time' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ الْعُقَلاَءُ؟',
          options: ['لاَ حَاجَةَ إِلَى الْحَرْبِ الآنَ', 'يَجِبُ أَنْ تَبْدَأَ الْحَرْبُ فَوْراً', 'لاَ رَأْيَ لَهُمْ'],
          answer: 0,
          qEn: 'What did the sensible ones say?',
          optionsEn: ['There is no need for war now', 'War must begin at once', 'They had no opinion'],
        },
      ],
    },
    {
      id: 'p6',
      en: "'But what is the way? And how will the Black Stone be placed in its place without fighting?'",
      sentences: [
        {
          id: 'qr1-30-007',
          page: 111,
          ar: 'وَلٰكِنْ مَا هُوَ الطَّرِيْقُ؟',
          en: "'But what is the way?'",
          tokens: [
            { surface: 'وَلٰكِنْ', lemma: 'لكن', features: 'conj+part', root: '—', pos: 'part', gloss: 'but' },
            { surface: 'مَا', lemma: 'ما', features: 'rel', root: '—', pos: 'rel', gloss: 'what' },
            { surface: 'هُوَ', lemma: 'هو', features: 'nom.3ms', root: '—', pos: 'noun', gloss: 'is' },
            { surface: 'الطَّرِيْقُ', lemma: 'طريق', features: 'def.nom', root: 'ط ر ق', pos: 'noun', gloss: 'the way' },
          ],
        },
        {
          id: 'qr1-30-008',
          page: 111,
          ar: 'وَكَيْفَ يُوْضَعُ الْحَجَرُ الأَسْوَدُ فِيْ مَحَلِّهِ بِغَيْرِ قِتَالٍ؟',
          en: "'And how will the Black Stone be placed in its place without fighting?'",
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كيف', features: 'conj+part', root: 'ك ي ف', pos: 'part', gloss: 'and how' },
            { surface: 'يُوْضَعُ', lemma: 'وضع', features: 'pass.impf.3ms', root: 'و ض ع', pos: 'verb', gloss: 'is placed' },
            { surface: 'الْحَجَرُ', lemma: 'حجر', features: 'def.nom', root: 'ح ج ر', pos: 'noun', gloss: 'the stone' },
            { surface: 'الأَسْوَدُ', lemma: 'اسود', features: 'def.nom', root: 'س و د', pos: 'adj', gloss: 'the black' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'مَحَلِّهِ', lemma: 'محل', features: 'gen+3ms', root: 'ح ل ل', pos: 'noun', gloss: 'its place' },
            { surface: 'بِغَيْرِ', lemma: 'غير', features: 'prep+gen.constr', root: 'غ ي ر', pos: 'noun', gloss: 'without' },
            { surface: 'قِتَالٍ', lemma: 'قتال', features: 'indef.gen', root: 'ق ت ل', pos: 'noun', gloss: 'fighting' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَا السُّؤَالُ الَّذِيْ طَرَحَهُ الْعُقَلاَءُ؟',
          options: ['كَيْفَ يُوْضَعُ الْحَجَرُ بِغَيْرِ قِتَالٍ؟', 'مَتَى تَنْتَهِيْ الْحَرْبُ؟', 'مَنْ بَنَى الْكَعْبَةَ؟'],
          answer: 0,
          qEn: 'What question did the sensible ones raise?',
          optionsEn: ['How would the stone be placed without fighting?', 'When would the war end?', 'Who built the Kaaba?'],
        },
      ],
    },
    {
      id: 'p7',
      en: 'They consulted, and consulted, and consulted, and consulted a great deal, and they found the way.',
      sentences: [
        {
          id: 'qr1-30-009',
          page: 111,
          ar: 'تَشَاوَرُوْا وَتَشَاوَرُوْا وَتَشَاوَرُوْا وَتَشَاوَرُوْا كَثِيْراً وَوَجَدُوْا الطَّرِيْقَ.',
          en: 'They consulted, and consulted, and consulted, and consulted a great deal, and they found the way.',
          tokens: [
            { surface: 'تَشَاوَرُوْا', lemma: 'تشاور', features: 'perf.3mp', root: 'ش و ر', pos: 'verb', gloss: 'consulted' },
            { surface: 'وَتَشَاوَرُوْا', lemma: 'تشاور', features: 'conj+perf.3mp', root: 'ش و ر', pos: 'verb', gloss: 'and consulted' },
            { surface: 'وَتَشَاوَرُوْا', lemma: 'تشاور', features: 'conj+perf.3mp', root: 'ش و ر', pos: 'verb', gloss: 'and consulted' },
            { surface: 'وَتَشَاوَرُوْا', lemma: 'تشاور', features: 'conj+perf.3mp', root: 'ش و ر', pos: 'verb', gloss: 'and consulted' },
            { surface: 'كَثِيْراً', lemma: 'كثير', features: 'indef.acc', root: 'ك ث ر', pos: 'adj', gloss: 'a great deal' },
            { surface: 'وَوَجَدُوْا', lemma: 'وجد', features: 'conj+perf.3mp', root: 'و ج د', pos: 'verb', gloss: 'and found' },
            { surface: 'الطَّرِيْقَ', lemma: 'طريق', features: 'def.acc', root: 'ط ر ق', pos: 'noun', gloss: 'the way' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ بَعْدَ أَنْ تَشَاوَرُوْا كَثِيْراً؟',
          options: ['وَجَدُوا الطَّرِيْقَ', 'لَمْ يَجِدُوا حَلاًّ', 'بَدَأَتِ الْحَرْبُ'],
          answer: 0,
          qEn: 'What happened after they consulted a great deal?',
          optionsEn: ['They found the way', 'They found no solution', 'War began'],
        },
      ],
    },
    {
      id: 'p8',
      en: "An elder -- the eldest of them in age -- said: 'The first one to enter through the door of this mosque shall judge between you.' So they accepted and were content with that.",
      sentences: [
        {
          id: 'qr1-30-010',
          page: 111,
          ar: 'قَالَ شَيْخٌ وَكَانَ أَكْبَرَهُمْ سِنًّا: أَوَّلُ مَنْ يَدْخُلُ مِنْ بَابِ هٰذَا الْمَسْجِدِ يَقْضِيْ بَيْنَكُمْ.',
          en: "An elder -- the eldest of them in age -- said: 'The first one to enter through the door of this mosque shall judge between you.'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قال', features: 'perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'said' },
            { surface: 'شَيْخٌ', lemma: 'شيخ', features: 'indef.nom', root: 'ش ي خ', pos: 'noun', gloss: 'an elder' },
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and was' },
            { surface: 'أَكْبَرَهُمْ', lemma: 'أكبر', features: 'acc+3mp', root: 'ك ب ر', pos: 'adj', gloss: 'the eldest of them' },
            { surface: 'سِنًّا', lemma: 'سن', features: 'indef.acc', root: 'س ن ن', pos: 'noun', gloss: 'in age' },
            { surface: 'أَوَّلُ', lemma: 'اول', features: 'nom.constr', root: 'أ و ل', pos: 'adj', gloss: 'the first' },
            { surface: 'مَنْ', lemma: 'من-موصول', features: 'rel', root: '—', pos: 'rel', gloss: 'one who' },
            { surface: 'يَدْخُلُ', lemma: 'دخل', features: 'impf.3ms', root: 'د خ ل', pos: 'verb', gloss: 'enters' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'through' },
            { surface: 'بَابِ', lemma: 'باب', features: 'gen.constr', root: 'ب و ب', pos: 'noun', gloss: 'the door of' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الْمَسْجِدِ', lemma: 'مسجد', features: 'def.gen', root: 'س ج د', pos: 'noun', gloss: 'the mosque' },
            { surface: 'يَقْضِيْ', lemma: 'قضى', features: 'impf.3ms', root: 'ق ض ي', pos: 'verb', gloss: 'shall judge, decide' },
            { surface: 'بَيْنَكُمْ', lemma: 'بين', features: 'prep+2mp', root: 'ب ي ن', pos: 'prep', gloss: 'between you' },
          ],
        },
        {
          id: 'qr1-30-011',
          page: 111,
          ar: 'فَقَبِلُوْا وَرَضُوْا بِذٰلِكَ.',
          en: 'So they accepted and were content with that.',
          tokens: [
            { surface: 'فَقَبِلُوْا', lemma: 'قبل-فعل', features: 'conj+perf.3mp', root: 'ق ب ل', pos: 'verb', gloss: 'so accepted' },
            { surface: 'وَرَضُوْا', lemma: 'رضي', features: 'conj+perf.3mp', root: 'ر ض ي', pos: 'verb', gloss: 'and were content' },
            { surface: 'بِذٰلِكَ', lemma: 'ذلك', features: 'prep+dem', root: '—', pos: 'dem', gloss: 'with that' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا اقْتَرَحَ الشَّيْخُ الأَكْبَرُ سِنًّا؟',
          options: ['أَنَّ أَوَّلَ دَاخِلٍ يَقْضِيْ بَيْنَهُمْ', 'أَنْ يَقْتَرِعُوا', 'أَنْ يَتَقَاتَلُوا'],
          answer: 0,
          qEn: 'What did the eldest elder propose?',
          optionsEn: ['That the first one to enter should judge between them', 'That they draw lots', 'That they fight'],
        },
      ],
    },
    {
      id: 'p9',
      en: "Do you know who was the first to enter? The first to enter was the Messenger of Allah ﷺ. When they saw him they said: 'This is al-Amin -- we are content! This is Muhammad!'",
      sentences: [
        {
          id: 'qr1-30-012',
          page: 111,
          ar: 'تَعْرِفُوْنَ مَنْ كَانَ أَوَّلَ دَاخِلٍ؟',
          en: 'Do you know who was the first to enter?',
          tokens: [
            { surface: 'تَعْرِفُوْنَ', lemma: 'عرف', features: 'impf.2mp', root: 'ع ر ف', pos: 'verb', gloss: 'do you know' },
            { surface: 'مَنْ', lemma: 'من-استفهام', features: 'part', root: '—', pos: 'part', gloss: 'who' },
            { surface: 'كَانَ', lemma: 'كان', features: 'perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'was' },
            { surface: 'أَوَّلَ', lemma: 'اول', features: 'acc.constr', root: 'أ و ل', pos: 'adj', gloss: 'the first' },
            { surface: 'دَاخِلٍ', lemma: 'داخل', features: 'indef.gen', root: 'د خ ل', pos: 'noun', gloss: 'to enter' },
          ],
        },
        {
          id: 'qr1-30-013',
          page: 111,
          ar: 'كَانَ أَوَّلُ دَاخِلٍ رَسُوْلَ اللّٰهِ ﷺ.',
          en: 'The first to enter was the Messenger of Allah ﷺ.',
          tokens: [
            { surface: 'كَانَ', lemma: 'كان', features: 'perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'was' },
            { surface: 'أَوَّلُ', lemma: 'اول', features: 'nom.constr', root: 'أ و ل', pos: 'adj', gloss: 'the first' },
            { surface: 'دَاخِلٍ', lemma: 'داخل', features: 'indef.gen', root: 'د خ ل', pos: 'noun', gloss: 'to enter' },
            { surface: 'رَسُوْلَ', lemma: 'رسول', features: 'acc', root: 'ر س ل', pos: 'noun', gloss: 'the Messenger' },
            { surface: 'اللّٰهِ', lemma: 'الله', features: 'gen', root: '—', pos: 'proper', gloss: 'of Allah' },
          ],
        },
        {
          id: 'qr1-30-014',
          page: 111,
          ar: 'فَلَمَّا رَأَوْهُ قَالُوْا: هٰذَا الأَمِيْنُ رَضِيْنَا.',
          en: "When they saw him they said: 'This is al-Amin -- we are content!'",
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لما', features: 'conj+part', root: '—', pos: 'part', gloss: 'and when' },
            { surface: 'رَأَوْهُ', lemma: 'رأى', features: 'perf.3mp+3ms', root: 'ر أ ي', pos: 'verb', gloss: 'saw him' },
            { surface: 'قَالُوْا', lemma: 'قال', features: 'perf.3mp', root: 'ق و ل', pos: 'verb', gloss: 'they said' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this [is]' },
            { surface: 'الأَمِيْنُ', lemma: 'أمين', features: 'def.nom', root: 'أ م ن', pos: 'noun', gloss: 'the Trustworthy' },
            { surface: 'رَضِيْنَا', lemma: 'رضي', features: 'perf.1p', root: 'ر ض ي', pos: 'verb', gloss: 'we are content' },
          ],
        },
        {
          id: 'qr1-30-015',
          page: 111,
          ar: 'هٰذَا مُحَمَّدٌ!',
          en: "'This is Muhammad!'",
          tokens: [
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this [is]' },
            { surface: 'مُحَمَّدٌ', lemma: 'محمد', features: 'indef.nom', root: '—', pos: 'proper', gloss: 'Muhammad' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ كَانَ أَوَّلَ دَاخِلٍ؟',
          options: ['رَسُوْلُ اللّٰهِ ﷺ', 'أَحَدُ شُيُوْخِ قُرَيْشٍ', 'رَجُلٌ مِنْ قَبِيْلَةٍ أُخْرَىٰ'],
          answer: 0,
          qEn: 'Who was the first to enter?',
          optionsEn: ['The Messenger of Allah ﷺ', 'One of the elders of Quraysh', 'A man from another tribe'],
        },
      ],
    },
    {
      id: 'p10',
      en: "When he reached them and they told him the story, the Messenger of Allah ﷺ asked for a cloth, and it was brought to him. He took the Black Stone and placed it in the cloth with his own hand, then said: 'Let every tribe take hold of one side of the cloth, then lift it all together' -- and they did so. When they reached its place, the Messenger of Allah ﷺ placed the Black Stone in its place with his own hand, and thus the Messenger of Allah ﷺ averted this evil and prevented the war.",
      sentences: [
        {
          id: 'qr1-30-016',
          page: 111,
          ar: 'فَلَمَّا وَصَلَ إِلَيْهِمْ وَأَخْبَرُوْهُ الْخَبَرَ طَلَبَ رَسُوْلُ اللّٰهِ ﷺ ثَوْبـاً فَأُتِيَ بِهِ.',
          en: 'When he reached them and they told him the story, the Messenger of Allah ﷺ asked for a cloth, and it was brought to him.',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لما', features: 'conj+part', root: '—', pos: 'part', gloss: 'and when' },
            { surface: 'وَصَلَ', lemma: 'وصل', features: 'perf.3ms', root: 'و ص ل', pos: 'verb', gloss: 'arrived' },
            { surface: 'إِلَيْهِمْ', lemma: 'إلى', features: 'prep+3mp', root: '—', pos: 'prep', gloss: 'to them' },
            { surface: 'وَأَخْبَرُوْهُ', lemma: 'أخبر', features: 'conj+perf.3mp+3ms', root: 'خ ب ر', pos: 'verb', gloss: 'and told him' },
            { surface: 'الْخَبَرَ', lemma: 'خبر', features: 'def.acc', root: 'خ ب ر', pos: 'noun', gloss: 'the story' },
            { surface: 'طَلَبَ', lemma: 'طلب-فعل', features: 'perf.3ms', root: 'ط ل ب', pos: 'verb', gloss: 'asked for' },
            { surface: 'رَسُوْلُ', lemma: 'رسول', features: 'nom.constr', root: 'ر س ل', pos: 'noun', gloss: 'the Messenger of' },
            { surface: 'اللّٰهِ', lemma: 'الله', features: 'gen', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'ثَوْبـاً', lemma: 'ثوب', features: 'indef.acc', root: 'ث و ب', pos: 'noun', gloss: 'a cloth' },
            { surface: 'فَأُتِيَ', lemma: 'اتى', features: 'conj+pass.perf.3ms', root: 'أ ت ي', pos: 'verb', gloss: 'and it was brought' },
            { surface: 'بِهِ', lemma: 'ب', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'to him' },
          ],
        },
        {
          id: 'qr1-30-017',
          page: 111,
          ar: 'فَأَخَذَ الْحَجَرَ الأَسْوَدَ فَوَضَعَهُ فِيْهِ بِيَدِهِ ثُمَّ قَالَ:',
          en: 'He took the Black Stone and placed it in it with his hand, then said:',
          tokens: [
            { surface: 'فَأَخَذَ', lemma: 'أخذ', features: 'conj+perf.3ms', root: 'أ خ ذ', pos: 'verb', gloss: 'and took' },
            { surface: 'الْحَجَرَ', lemma: 'حجر', features: 'def.acc', root: 'ح ج ر', pos: 'noun', gloss: 'the stone' },
            { surface: 'الأَسْوَدَ', lemma: 'اسود', features: 'def.acc', root: 'س و د', pos: 'adj', gloss: 'the black' },
            { surface: 'فَوَضَعَهُ', lemma: 'وضع', features: 'conj+perf.3ms+3ms', root: 'و ض ع', pos: 'verb', gloss: 'and placed it' },
            { surface: 'فِيْهِ', lemma: 'في', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'in it' },
            { surface: 'بِيَدِهِ', lemma: 'يد', features: 'prep+gen+3ms', root: 'ي د ي', pos: 'noun', gloss: 'with his hand' },
            { surface: 'ثُمَّ', lemma: 'ثم', features: 'part', root: '—', pos: 'part', gloss: 'then' },
            { surface: 'قَالَ', lemma: 'قال', features: 'perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'said' },
          ],
        },
        {
          id: 'qr1-30-018',
          page: 111,
          ar: 'لِيَأْخُذْ كُلُّ قَبِيْلَةٍ بِنَاحِيَةٍ مِنَ الثَّوْبِ ثُمَّ ارْفَعُوْهُ جَمِيْعاً.',
          en: "'Let every tribe take hold of one side of the cloth, then lift it all together.'",
          tokens: [
            { surface: 'لِيَأْخُذْ', lemma: 'أخذ', features: 'prep+impf.3ms', root: 'أ خ ذ', pos: 'verb', gloss: 'let (each tribe) take' },
            { surface: 'كُلُّ', lemma: 'كل', features: 'nom.constr', root: 'ك ل ل', pos: 'noun', gloss: 'every' },
            { surface: 'قَبِيْلَةٍ', lemma: 'قبيلة', features: 'indef.gen', root: 'ق ب ل', pos: 'noun', gloss: 'tribe' },
            { surface: 'بِنَاحِيَةٍ', lemma: 'ناحية', features: 'prep+indef.gen', root: 'ن ح و', pos: 'noun', gloss: 'a side' },
            { surface: 'مِنَ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'of' },
            { surface: 'الثَّوْبِ', lemma: 'ثوب', features: 'def.gen', root: 'ث و ب', pos: 'noun', gloss: 'the cloth' },
            { surface: 'ثُمَّ', lemma: 'ثم', features: 'part', root: '—', pos: 'part', gloss: 'then' },
            { surface: 'ارْفَعُوْهُ', lemma: 'رفع', features: 'imp.2mp+3ms', root: 'ر ف ع', pos: 'verb', gloss: 'lift it' },
            { surface: 'جَمِيْعاً', lemma: 'جميعا', features: 'acc', root: 'ج م ع', pos: 'adv', gloss: 'all together' },
          ],
        },
        {
          id: 'qr1-30-019',
          page: 111,
          ar: 'فَفَعَلُوْا',
          en: 'So they did.',
          tokens: [
            { surface: 'فَفَعَلُوْا', lemma: 'فعل', features: 'conj+perf.3mp', root: 'ف ع ل', pos: 'verb', gloss: 'and they did (so)' },
          ],
        },
        {
          id: 'qr1-30-020',
          page: 111,
          ar: 'حَتّى إِذَا بَلَغُوْا مَوْضِعَهُ وَضَعَ رَسُوْلُ اللّٰهِ ﷺ الْحَجَرَ الأَسْوَدَ فِيْ مَحَلِّهِ بِيَدِهِ،',
          en: 'When they reached its place, the Messenger of Allah ﷺ placed the Black Stone in its place with his hand,',
          tokens: [
            { surface: 'حَتّى', lemma: 'حتى', features: 'part', root: '—', pos: 'part', gloss: 'until' },
            { surface: 'إِذَا', lemma: 'إذا', features: 'part', root: '—', pos: 'part', gloss: 'when' },
            { surface: 'بَلَغُوْا', lemma: 'بلغ', features: 'perf.3mp', root: 'ب ل غ', pos: 'verb', gloss: 'reached' },
            { surface: 'مَوْضِعَهُ', lemma: 'موضع', features: 'acc+3ms', root: 'و ض ع', pos: 'noun', gloss: 'its place' },
            { surface: 'وَضَعَ', lemma: 'وضع', features: 'perf.3ms', root: 'و ض ع', pos: 'verb', gloss: 'placed' },
            { surface: 'رَسُوْلُ', lemma: 'رسول', features: 'nom.constr', root: 'ر س ل', pos: 'noun', gloss: 'the Messenger of' },
            { surface: 'اللّٰهِ', lemma: 'الله', features: 'gen', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'الْحَجَرَ', lemma: 'حجر', features: 'def.acc', root: 'ح ج ر', pos: 'noun', gloss: 'the stone' },
            { surface: 'الأَسْوَدَ', lemma: 'اسود', features: 'def.acc', root: 'س و د', pos: 'adj', gloss: 'the black' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'مَحَلِّهِ', lemma: 'محل', features: 'gen+3ms', root: 'ح ل ل', pos: 'noun', gloss: 'its place' },
            { surface: 'بِيَدِهِ', lemma: 'يد', features: 'prep+gen+3ms', root: 'ي د ي', pos: 'noun', gloss: 'with his hand' },
          ],
        },
        {
          id: 'qr1-30-021',
          page: 111,
          ar: 'وَهٰكَذَا دَفَعَ رَسُوْلُ اللّٰهِ ﷺ هٰذَا الشَّرَّ وَمَنَعَ الْحَرْبَ.',
          en: 'and thus the Messenger of Allah ﷺ averted this evil and prevented the war.',
          tokens: [
            { surface: 'وَهٰكَذَا', lemma: 'هكذا', features: 'conj+adv', root: '—', pos: 'adv', gloss: 'and thus' },
            { surface: 'دَفَعَ', lemma: 'دفع', features: 'perf.3ms', root: 'د ف ع', pos: 'verb', gloss: 'averted, repelled' },
            { surface: 'رَسُوْلُ', lemma: 'رسول', features: 'nom.constr', root: 'ر س ل', pos: 'noun', gloss: 'the Messenger of' },
            { surface: 'اللّٰهِ', lemma: 'الله', features: 'gen', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الشَّرَّ', lemma: 'شر', features: 'def.acc', root: 'ش ر ر', pos: 'noun', gloss: 'the evil' },
            { surface: 'وَمَنَعَ', lemma: 'منع', features: 'conj+perf.3ms', root: 'م ن ع', pos: 'verb', gloss: 'and prevented' },
            { surface: 'الْحَرْبَ', lemma: 'حرب', features: 'def.acc', root: 'ح ر ب', pos: 'noun', gloss: 'the war' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَضَعَ رَسُوْلُ اللّٰهِ ﷺ الْحَجَرَ الأَسْوَدَ فِيْ مَحَلِّهِ؟',
          options: ['وَضَعَهُ فِيْ ثَوْبٍ وَجَعَلَ كُلَّ قَبِيْلَةٍ تَرْفَعُ نَاحِيَةً مِنْهُ', 'حَمَلَهُ وَحْدَهُ', 'أَعْطَاهُ لِأَحَدِ الشُّيُوْخِ'],
          answer: 0,
          qEn: 'How did the Messenger of Allah ﷺ place the Black Stone in its place?',
          optionsEn: ['He placed it in a cloth and had every tribe lift a side of it', 'He carried it alone', 'He gave it to one of the elders'],
        },
      ],
    },
  ],
};

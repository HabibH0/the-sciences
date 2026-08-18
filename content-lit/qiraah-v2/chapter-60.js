// القراءة الراشدة, volume two, chapter 60 (printed heading "٦٠") --
// الإِمَامُ مَالِكُ بْنُ أَنَسٍ -- "Imam Malik bin Anas".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 198-201 (PDF page
// index == printed page number). This is the final chapter in the own
// session's 41-60 scope; chapter 61 "الْقَاطِرَةُ" ("The Train") begins
// a wholly unrelated topic on printed page 202 and is out of scope.
// Genre: a formal biographical sketch of Imam Malik ibn Anas (the founder
// of the Maliki school), covering his teachers, his stature in hadith and
// fiqh, his reverence for the Prophet's ﷺ words, several illustrative
// anecdotes (the scorpion, refusing to ride in Madinah, his flogging
// under al-Mansur, Harun al-Rashid's visit), and his book al-Muwatta --
// closing with a direct second-person address from the author to the
// student/reader ("رَزَقَكَ اللهُ قِرَاءَتَهُ... إِذَا تَقَدَّمْتَ فِي
// الْعِلْمِ", qr2-60-063/065), a notable genre shift from the third-person
// narrative voice used throughout. The chapter ends with the printed
// "٭ ٭ ٭" divider (qr2-60-066 is the last tokenized sentence) -- that
// divider is documented here rather than tokenized, matching the same
// end-of-story convention used at the close of own ch58.
//
// Paragraph granularity: each blank-line-separated block on the printed
// pages is its own `paragraphs[]` entry (12 total) -- P1 (birth, teachers)
// and P2 (his renown) are on p.198-199; P3 (unrivalled in fiqh) through
// P8 (Harun al-Rashid) are on p.199-200; P9 (al-Mansur's son) through P12
// (his death) are on p.201, followed by the "٭ ٭ ٭" divider.
//
// Sentence segmentation is unusually granular in this chapter: the source
// punctuates many long compound-subject/compound-predicate sentences with
// commas between each conjoined clause (e.g. "وَسَمِعَ الزُّهْرِيَّ،
// وَنَافِعاً مَوْلَىٰ ابْنِ عُمَرَ،...", qr2-60-002/003), so, per the
// project's standing convention of splitting at every ، . ؛ ! and ؟ (but
// never at a colon), several resulting "sentences" are short elliptical
// list items whose verb is understood from the preceding clause -- this
// matches the granularity already used throughout own ch57-59. Colons
// before quoted/reported speech never split (e.g. "قَالَ: قَلَّ رَجُلٌ...",
// qr2-60-005; "وَقِيْلَ لَهُ فِيْ ذٰلِكَ، فَقَالَ: أُحِبُّ...",
// qr2-60-021/022).
//
// Homographs / reused-with-extended-sense (existing lemma key, token-
// level pos/gloss override, no new `newWords`/`lemmas` entry):
//   - "أُعَظِّمَ" (qr2-60-022, Form II verb "I glorify, magnify") reuses
//     the lemma key "عظم" already taught as a noun ("bone," own ch42) --
//     same bare consonant skeleton (the doubled ظ of Form II adds no
//     letter), unrelated meaning, the standard "lemma-key collision with
//     no distinguishing spelling" pattern used repeatedly in own ch57-59.
//   - "حَلْياً"/"حُلِّيَ" (qr2-60-060, noun "an ornament" + Form II passive
//     verb "was adorned") both reuse the lemma key "حلي" already taught
//     as a noun ("jewelry, ornaments," own ch58) -- the verb sense is a
//     direct denominal extension of the same word, not a coincidental
//     skeleton collision.
//   - "عُلُوٍّ" (qr2-60-059, noun "elevation, high standing") reuses the
//     lemma key "علو" already taught with the sense "height" (own ch47)
//     and "the upper floor" (own ch59) -- ordinary polysemy.
//   - "تُوَافِقُ" (qr2-60-056, "did not match/suit") is a direct reuse of
//     the already-known lemma "وافق" ("to agree," own ch06) in its Form
//     III 3rd-fem-sing imperfect -- not a new derived measure, just an
//     ordinary inflected form, so no homograph note is really needed, but
//     is flagged here since it was initially mis-analyzed as a distinct
//     Form VI verb before rechecking the actual verb pattern.
//   - "قِيْلَ" (qr2-60-021, passive "it was said") reuses the lemma key
//     "قال" directly, matching how own ch58's "فَبِيْعُوْهُمَا" already
//     reuses the hollow-verb lemma "باع" across its internal-vowel
//     alternation rather than getting its own "بيع" entry.
//   - "بَنُوْهُ" (qr2-60-043, "his sons") and "سِنِيْنَ" (qr2-60-065,
//     "years") and "الْمُؤْمِنِيْنَ" (qr2-60-049, "the believers") all
//     reuse their already-known singular lemma keys ("ابن" own v1 ch02,
//     "سنة" own v1 ch02, "مؤمن" own ch57) directly, matching how "أَيَّامُ"
//     already reuses "يوم" and "أَبْنَاءُ" already reuses "ابن" elsewhere
//     in the corpus -- broken/sound plurals are not separate lemma
//     entries.
//   - "الآفَاقِ" (qr2-60-006, "the horizons/regions") reuses the new
//     singular entry "أفق" introduced in this same chapter, per the same
//     plural-reuses-singular convention.
//   - "كَازْدِحَامِهِمْ" (qr2-60-007, noun "their crowding") and
//     "الانْتِفَاعَ" (qr2-60-064, noun "benefit, use") both reuse this
//     chapter's own freshly-introduced verb entries "ازدحم" and "انتفع"
//     respectively (token-level pos override to noun for the masdar
//     sense) rather than getting separate entries -- both the verb and
//     its masdar are being taught for the first time in the same chapter,
//     so one glossary entry per newly-taught word-family is used instead
//     of proliferating near-duplicate entries.
//
// Distinct-derived-form / near-synonym entries (own root-mate or
// synonym already known, but this word's own skeleton or sense is
// different enough to need its own entry, matching the standard used for
// own ch58's "أَحْدَثَ" vs known "حدث"):
//   - "قَعَدَ" (qr2-60-019, "he sat") is a distinct root from the already-
//     known "جَلَسَ" ("to sit," v1 ch01/06) -- both mean "to sit" but are
//     unrelated roots, so, like own ch59's "خُضُوْعٍ"/"خُشُوْعٍ" pairing,
//     each gets its own entry.
//   - "يَتَغَيَّرُ" (qr2-60-030, Form V "changes, alters") is NOT a
//     homograph of the already-known invariable particle "غَيْرُ" ("other
//     than," v1 ch04) -- the Form V verb's own bare skeleton (تغير, four
//     letters) differs from the particle's (غير, three letters), so this
//     gets its own new entry rather than reusing the particle's lemma key.
//   - "تُوُفِّيَ" (qr2-60-066, "passed away, died") is a distinct root
//     from the already-known "مَاتَ" ("to die," v1 ch09) -- both appear
//     in this very chapter (qr2-60-005 uses "مَاتَ"), so the two synonyms
//     are deliberately being taught side by side.
//
// Footnoted new entries (book_note transcribed from the page's own
// footnote): "يَزْدَحِمُوْنَ"/"ازدحم" (qr2-60-007), "تَعَمَّمَ"/"تعمم"
// (qr2-60-019), "تَبَخَّرَ"/"تبخر" (qr2-60-020), "الْمِرَاءِ"/"مراء"
// (qr2-60-037), "اللَّغَطِ"/"لغط" (qr2-60-037), "جَرَّدَهُ"/"جرد"
// (qr2-60-057), "السِّيَاطُ"/"سوط" (qr2-60-060, footnote defines the
// singular سَوْط), and "وَيَسْتَفْتِيَنِيْ"/"استفتى" (qr2-60-005, footnote
// on p.198 defines the verb itself). Note "وَتَطَيَّبَ" (qr2-60-018) is
// ALSO footnoted on p.199, but "تطيب" is already a known lemma (own
// ch45), so no new `lemmas` entry or book_note is added for it here --
// the footnote merely re-explains an already-taught word for the reader,
// which the data model doesn't need to duplicate.
//
// Proper names (no `newWords`/`lemmas` entry, tokenized pos:"proper"
// inline): "مَالِكُ" (Malik), "أَنَسٍ" (Anas), "الزُّهْرِيَّ" (al-Zuhri),
// "نَافِعاً" (Nafi -- happens to share a bare skeleton with the already-
// known adjective "nafi'" own ch42, but personal names never touch the
// `lemmas` dict regardless of any such collision), "عُمَرَ" (Umar, same
// non-issue with the known noun "عمر" = "age"), "رَبِيْعَةَ" (Rabi'a),
// "وَهْبٍ" (Wahb), "أَبِيْ ذِئْبٍ" (Abu Dhi'b), "عَبْدُ اللهِ بْنُ
// الْمُبَارَكِ" (Abdullah ibn al-Mubarak), "هَارُوْنُ الرَّشِيْدُ" (Harun
// al-Rashid), "مَنْصُوْرٍ" (al-Mansur, likewise a non-issue with the known
// adjective "منصور" = "victorious," own ch49), and "الْمُوَطَّأُ" (title
// of Imam Malik's book, al-Muwatta). The p.198 footnotes biographically
// identifying al-Zuhri, Nafi', and Rabi'a al-Ra'y are documented here for
// context but, like all proper-name footnotes in this book, are not
// modeled as `lemmas` entries.
//
// Vocabulary notes: "ولد"، "إمام"، "سمع"، "مولى"، "ابن"/"بن"، "أخذ"،
// "علم"، "رأي"، "قال"، "رجل"، "كان"، "تعلم"، "مات"، "حتى"، "جاء"، "شأن"،
// "عظيم"، "في"، "ناس"، "على"، "باب"، "حديث"، "أحد"، "حدث"، "رفع"، "بصر"،
// "ألا"، "مثل"، "أدب"، "شديد"، "أراد"، "اغتسل"، "تطيب"، "لبس"، "ثوب"،
// "جديد"، "عود"، "أول"، "زال"، "قال" (reused for "قِيْلَ")، "عظم" (reused
// for "أُعَظِّمَ")، "كره"، "طريق"، "عند"، "عقرب"، "عشرة"، "مرة"، "لون"،
// "قطع"، "فرق"، "صبر"، "ركب"، "كبر"، "سن"، "جثة"، "مجلس"، "حلم"، "مهيب"،
// "نبيل"... [wait -- نبيل is new, see newWords]، "صوت"، "غريب"، "سأل"،
// "أجاب"، "أتى"، "أبى"، "قرأ"، "منذ"، "زمان"، "أخرج"، "خاص"، "نفع"، "دخل"،
// "أمير"، "مؤمن"، "فراش"، "إذ"، "خرج"، "رجع"، "درى"، "هذا"، "فزع"، "ضرب"،
// "سبعين"، "غضب"، "دعا"، "مد"، "يد"، "حلي" (reused for "حَلْياً"/"حُلِّيَ")،
// "كتاب"، "إسلام"، "قراءة"، "شاء"، "تقدم"، "تسع"، "مئة"، "بن"، "ست"، "سبع"،
// "قليل"، "غير"، "علو"، "وافق" are all already known and reused per the
// notes above.
export const CHAPTER = {
  id: "ch60",
  title: {
    ar: "الإِمَامُ مَالِكُ بْنُ أَنَسٍ",
    en: "Imam Malik bin Anas"
  },
  pages: [198, 199, 200, 201],
  newWords: [
    "تسعين", "أربعين", "منورة", "رحل", "أفق", "ازدحم", "فقه", "سلطان",
    "افتخر", "رواية", "منتهى", "فتوى", "أفتى", "سائر", "تعمم", "قعد",
    "خشوع", "خضوع", "وقار", "تبخر", "فراغ", "متمكن", "طهارة", "تفهم",
    "لدغ", "إجلال", "ضعف", "تغير", "دفن", "نبيل", "مراء", "لغط", "منزل",
    "عام", "صبي", "هيبة", "سوط", "أجل", "غرض", "جرد", "خلع", "كتف",
    "رفعة", "أشهر", "مقبول", "رزق", "انتفع", "بضع", "قل", "استفتى", "توفي",
    "مستعجل"
  ],
  lemmas: {
    "تسعين": { pos: "num", gloss: "ninety" },
    "أربعين": { pos: "num", gloss: "forty" },
    "منورة": {
      root: "ن و ر", pos: "adj",
      gloss: "radiant, illuminated (epithet of Madinah)"
    },
    "رحل": { pos: "verb", gloss: "to travel, journey" },
    "أفق": { pos: "noun", gloss: "horizon" },
    "ازدحم": {
      root: "ز ح م", pos: "verb", gloss: "to crowd, throng together",
      book_note: "اِزْدَحَمَ يَزْدَحِمُ ازْدِحَاماً: الناسُ: تَضَايَقوا وتَدافَعوا بالمناكب."
    },
    "فقه": { pos: "noun", gloss: "jurisprudence, understanding of religious law" },
    "سلطان": { pos: "noun", gloss: "ruler, sultan, authority" },
    "افتخر": { root: "ف خ ر", pos: "verb", gloss: "to boast, take pride" },
    "رواية": { pos: "noun", gloss: "narration, transmission (of hadith)" },
    "منتهى": { pos: "noun", gloss: "utmost point, culmination" },
    "فتوى": { pos: "noun", gloss: "fatwa, legal ruling" },
    "أفتى": { pos: "verb", gloss: "to issue a fatwa, give a legal ruling" },
    "سائر": {
      root: "س ي ر", pos: "adj",
      gloss: "current, well-known, in circulation (of a saying)"
    },
    "تعمم": {
      root: "ع م م", pos: "verb", gloss: "to wear a turban",
      book_note: "تَعَمَّمَ يَتَعَمَّمُ تَعَمُّماً: لَبِسَ العمامة."
    },
    "قعد": { pos: "verb", gloss: "to sit" },
    "خشوع": { pos: "noun", gloss: "humility, submissiveness" },
    "خضوع": { pos: "noun", gloss: "submission, humbleness" },
    "وقار": { pos: "noun", gloss: "dignity, solemnity" },
    "تبخر": {
      root: "ب خ ر", pos: "verb", gloss: "to perfume oneself with incense",
      book_note: "تَبَخَّرَ يَتَبَخَّرُ تَبَخُّراً: الرجلُ بالعود أو البَخُور: تَطَيَّبَ."
    },
    "فراغ": { pos: "noun", gloss: "completion, finishing; being free (from a task)" },
    "متمكن": {
      root: "م ك ن", pos: "adj", gloss: "firmly grounded, secure (in knowledge)"
    },
    "طهارة": { pos: "noun", gloss: "purity, ritual purity" },
    "تفهم": {
      root: "ف ه م", pos: "verb", gloss: "to understand thoroughly, comprehend"
    },
    "لدغ": { pos: "verb", gloss: "to sting, bite (of a scorpion)" },
    "إجلال": { pos: "noun", gloss: "reverence, veneration" },
    "ضعف": { pos: "noun", gloss: "weakness" },
    "تغير": {
      root: "غ ي ر", pos: "verb", gloss: "to change, alter (in color/appearance)"
    },
    "دفن": { pos: "verb", gloss: "to bury" },
    "نبيل": { pos: "adj", gloss: "noble, distinguished" },
    "مراء": {
      pos: "noun", gloss: "dispute, wrangling, argumentation",
      book_note: "المِرَاءُ: التَّكَلُّفُ."
    },
    "لغط": {
      pos: "noun", gloss: "clamor, confused noise",
      book_note: "اللَّغَطُ جمع الأَلْغَاط: الصوت والجلبة."
    },
    "منزل": { pos: "noun", gloss: "house, dwelling, abode" },
    "عام": { pos: "adj", gloss: "general, public" },
    "صبي": { pos: "noun", gloss: "a boy, young child" },
    "هيبة": { pos: "noun", gloss: "awe, dread, reverential fear" },
    "سوط": {
      pos: "noun", gloss: "a whip, lash",
      book_note: "سَوْطٌ جمع سِيَاط: أداة من الجلد يضرب بها الإنسان أو الحيوان."
    },
    "أجل": { pos: "noun", gloss: "sake, cause, purpose" },
    "غرض": { pos: "noun", gloss: "purpose, aim, wish" },
    "جرد": {
      pos: "verb", gloss: "to strip bare, denude",
      book_note: "جَرَّدَ يُجَرِّدُ تَجْرِيْداً: الرجلُ فلاناً: عَرَّاه."
    },
    "خلع": { pos: "verb", gloss: "to be dislocated, wrenched out" },
    "كتف": { pos: "noun", gloss: "shoulder" },
    "رفعة": { pos: "noun", gloss: "elevation, high rank, exaltation" },
    "أشهر": { pos: "adj", gloss: "most/more famous, well-known" },
    "مقبول": { pos: "adj", gloss: "accepted, well-received" },
    "رزق": { pos: "verb", gloss: "to grant, provide (sustenance, blessing)" },
    "انتفع": { pos: "verb", gloss: "to benefit, profit, make use (of)" },
    "بضع": { pos: "noun", gloss: "a few, several (between 3 and 9)" },
    "قل": { root: "ق ل ل", pos: "verb", gloss: "to be few, rare" },
    "استفتى": {
      pos: "verb", gloss: "to ask for a legal opinion, consult",
      book_note: "اسْتَفْتَىٰ يَسْتَفْتِي اسْتِفْتَاءً: الرجلُ العالمَ في مَسْأَلَةٍ: سَأَلَه رأيَه فيها."
    },
    "توفي": { pos: "verb", gloss: "to pass away, die" },
    "مستعجل": {
      root: "ع ج ل", pos: "adj", gloss: "in a hurry, hurried"
    }
  },
  paragraphs: [
    {
      en: "Imam Malik bin Anas was born in the year ninety-three, in the Radiant City (Madinah), and he heard [hadith] from al-Zuhri, and [also] from Nafi, the freedman of Ibn Umar, and he took knowledge from Rabi'a al-Ra'y, and he said: \"Rare was a man I used to learn from who died without coming to me and asking my opinion.\"",
      sentences: [
        {
          id: "qr2-60-001",
          ar: "وُلِدَ الإِمَامُ مَالِكُ بْنُ أَنَسٍ سَنَةَ ثَلَاثٍ وَتِسْعِيْنَ فِي الْمَدِيْنَةِ الْمُنَوَّرَةِ،",
          en: "Imam Malik bin Anas was born in the year ninety-three, in the Radiant City (Madinah),",
          tokens: [
            { surface: "وُلِدَ", lemma: "ولد", pos: "verb", features: "pass.perf.3ms", gloss: "was born" },
            { surface: "الإِمَامُ", lemma: "إمام", pos: "noun", features: "nom.def", gloss: "the Imam" },
            { surface: "مَالِكُ", lemma: "مالك", pos: "proper", features: "nom", gloss: "Malik" },
            { surface: "بْنُ", lemma: "بن", pos: "noun", features: "nom.constr", gloss: "son of" },
            { surface: "أَنَسٍ", lemma: "أنس", pos: "proper", features: "gen", gloss: "Anas" },
            { surface: "سَنَةَ", lemma: "سنة", pos: "noun", features: "acc", gloss: "in the year" },
            { surface: "ثَلَاثٍ", lemma: "ثلاث", pos: "num", features: "gen", gloss: "three" },
            { surface: "وَتِسْعِيْنَ", lemma: "تسعين", pos: "num", features: "conj+gen", gloss: "and ninety" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "الْمَدِيْنَةِ", lemma: "مدينة", pos: "noun", features: "gen.def", gloss: "the city" },
            { surface: "الْمُنَوَّرَةِ", lemma: "منورة", pos: "adj", features: "gen.def", gloss: "the Radiant (Madinah)" }
          ]
        },
        {
          id: "qr2-60-002",
          ar: "وَسَمِعَ الزُّهْرِيَّ،",
          en: "and he heard [hadith] from al-Zuhri,",
          tokens: [
            { surface: "وَسَمِعَ", lemma: "سمع", pos: "verb", features: "conj+perf.3ms", gloss: "and he heard from" },
            { surface: "الزُّهْرِيَّ", lemma: "زهري", pos: "proper", features: "acc", gloss: "al-Zuhri" }
          ]
        },
        {
          id: "qr2-60-003",
          ar: "وَنَافِعاً مَوْلَىٰ ابْنِ عُمَرَ،",
          en: "and [also from] Nafi, the freedman of Ibn Umar,",
          tokens: [
            { surface: "وَنَافِعاً", lemma: "نافع", pos: "proper", features: "conj+acc", gloss: "and Nafi" },
            { surface: "مَوْلَىٰ", lemma: "مولى", pos: "noun", features: "acc.constr", gloss: "the freedman of" },
            { surface: "ابْنِ", lemma: "ابن", pos: "noun", features: "gen.constr", gloss: "the son of" },
            { surface: "عُمَرَ", lemma: "عمر", pos: "proper", features: "gen", gloss: "Umar" }
          ]
        },
        {
          id: "qr2-60-004",
          ar: "وَأَخَذَ الْعِلْمَ عَنْ رَبِيْعَةَ الرَّأْيِ،",
          en: "and he took knowledge from Rabi'a al-Ra'y,",
          tokens: [
            { surface: "وَأَخَذَ", lemma: "أخذ", pos: "verb", features: "conj+perf.3ms", gloss: "and he took" },
            { surface: "الْعِلْمَ", lemma: "علم", pos: "noun", features: "acc.def", gloss: "knowledge" },
            { surface: "عَنْ", lemma: "عن", pos: "prep", features: "", gloss: "from" },
            { surface: "رَبِيْعَةَ", lemma: "ربيعة", pos: "proper", features: "gen", gloss: "Rabi'a" },
            { surface: "الرَّأْيِ", lemma: "رأي", pos: "noun", features: "gen.def", gloss: "of Opinion" }
          ]
        },
        {
          id: "qr2-60-005",
          ar: "وَقَالَ: قَلَّ رَجُلٌ كُنْتُ أَتَعَلَّمُ مِنْهُ مَا مَاتَ حَتَّىٰ يَجِيْئَنِيْ وَيَسْتَفْتِيَنِيْ.",
          en: "and he said: \"Rare was a man I used to learn from who died without coming to me and asking my opinion.\"",
          tokens: [
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "and he said" },
            { surface: "قَلَّ", lemma: "قل", pos: "verb", features: "perf.3ms", gloss: "rare was" },
            { surface: "رَجُلٌ", lemma: "رجل", pos: "noun", features: "nom.indef", gloss: "a man" },
            { surface: "كُنْتُ", lemma: "كان", pos: "verb", features: "perf.1s", gloss: "I used to" },
            { surface: "أَتَعَلَّمُ", lemma: "تعلم", pos: "verb", features: "impf.1s", gloss: "learn" },
            { surface: "مِنْهُ", lemma: "من", pos: "prep", features: "+3ms", gloss: "from him" },
            { surface: "مَا", lemma: "ما", pos: "part", features: "", gloss: "not" },
            { surface: "مَاتَ", lemma: "مات", pos: "verb", features: "perf.3ms", gloss: "he died" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "", gloss: "until" },
            { surface: "يَجِيْئَنِيْ", lemma: "جاء", pos: "verb", features: "impf.3ms+1s", gloss: "he would come to me" },
            { surface: "وَيَسْتَفْتِيَنِيْ", lemma: "استفتى", pos: "verb", features: "conj+impf.3ms+1s", gloss: "and ask my opinion" }
          ]
        }
      ],
      checks: [
        {
          q: "أَيْنَ وُلِدَ الإِمَامُ مَالِكٌ؟",
          options: ["فِي الْمَدِيْنَةِ الْمُنَوَّرَةِ", "فِي مَكَّةَ الْمُكَرَّمَةِ", "فِي بَغْدَادَ", "فِي دِمَشْقَ"],
          answer: 0,
          qEn: "Where was Imam Malik born?",
          optionsEn: ["In the Radiant City (Madinah)", "In Makkah al-Mukarramah", "In Baghdad", "In Damascus"]
        }
      ]
    },
    {
      en: "He had a great standing in knowledge -- people would travel to him from every region, thronging at his door to take hadith and fiqh, like their thronging at the ruler's door, and people would boast of narrating from him, and that was a great honor in his era, so whenever someone said: \"Malik narrated to me,\" the people would raise their eyes to him.",
      sentences: [
        {
          id: "qr2-60-006",
          ar: "وَكَانَ لَهُ شَأْنٌ عَظِيْمٌ فِي الْعِلْمِ يَرْحَلُ النَّاسُ إِلَيْهِ مِنَ الآفَاقِ،",
          en: "He had a great standing in knowledge -- people would travel to him from every region,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and he had" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "+3ms", gloss: "to him" },
            { surface: "شَأْنٌ", lemma: "شأن", pos: "noun", features: "nom.indef", gloss: "a matter, standing" },
            { surface: "عَظِيْمٌ", lemma: "عظيم", pos: "adj", features: "nom.indef", gloss: "great" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "الْعِلْمِ", lemma: "علم", pos: "noun", features: "gen.def", gloss: "knowledge" },
            { surface: "يَرْحَلُ", lemma: "رحل", pos: "verb", features: "impf.3ms", gloss: "would travel" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "nom.def", gloss: "the people" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "+3ms", gloss: "to him" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "", gloss: "from" },
            { surface: "الآفَاقِ", lemma: "أفق", pos: "noun", features: "gen.def.pl", gloss: "the horizons, regions" }
          ]
        },
        {
          id: "qr2-60-007",
          ar: "وَيَزْدَحِمُوْنَ عَلَىٰ بَابِهِ لِأَخْذِ الْحَدِيْثِ وَالْفِقْهِ كَازْدِحَامِهِمْ عَلَىٰ بَابِ السُّلْطَانِ،",
          en: "thronging at his door to take hadith and fiqh, like their thronging at the ruler's door,",
          tokens: [
            { surface: "وَيَزْدَحِمُوْنَ", lemma: "ازدحم", pos: "verb", features: "conj+impf.3mp", gloss: "and they would throng" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "", gloss: "at" },
            { surface: "بَابِهِ", lemma: "باب", pos: "noun", features: "gen+3ms", gloss: "his door" },
            { surface: "لِأَخْذِ", lemma: "أخذ", pos: "noun", features: "gen.constr", gloss: "to take" },
            { surface: "الْحَدِيْثِ", lemma: "حديث", pos: "noun", features: "gen.def", gloss: "hadith" },
            { surface: "وَالْفِقْهِ", lemma: "فقه", pos: "noun", features: "conj+gen.def", gloss: "and jurisprudence" },
            { surface: "كَازْدِحَامِهِمْ", lemma: "ازدحم", pos: "noun", features: "gen+3mp", gloss: "like their crowding" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "", gloss: "at" },
            { surface: "بَابِ", lemma: "باب", pos: "noun", features: "gen.constr", gloss: "the door of" },
            { surface: "السُّلْطَانِ", lemma: "سلطان", pos: "noun", features: "gen.def", gloss: "the ruler" }
          ]
        },
        {
          id: "qr2-60-008",
          ar: "وَكَانَ النَّاسُ يَفْتَخِرُوْنَ بِالرِّوَايَةِ عَنْهُ،",
          en: "and people would boast of narrating from him,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "nom.def", gloss: "the people" },
            { surface: "يَفْتَخِرُوْنَ", lemma: "افتخر", pos: "verb", features: "impf.3mp", gloss: "would boast" },
            { surface: "بِالرِّوَايَةِ", lemma: "رواية", pos: "noun", features: "gen.def", gloss: "of narrating" },
            { surface: "عَنْهُ", lemma: "عن", pos: "prep", features: "+3ms", gloss: "from him" }
          ]
        },
        {
          id: "qr2-60-009",
          ar: "وَكَانَ ذَلِكَ شَرَفاً كَبِيْراً فِيْ عَصْرِهِ،",
          en: "and that was a great honor in his era,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and that was" },
            { surface: "ذَلِكَ", lemma: "ذلك", pos: "dem", features: "", gloss: "that" },
            { surface: "شَرَفاً", lemma: "شرف", pos: "noun", features: "acc.indef", gloss: "an honor" },
            { surface: "كَبِيْراً", lemma: "كبير", pos: "adj", features: "acc.indef", gloss: "great" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "عَصْرِهِ", lemma: "عصر", pos: "noun", features: "gen+3ms", gloss: "his era" }
          ]
        },
        {
          id: "qr2-60-010",
          ar: "فَإِذَا قَالَ أَحَدٌ: حَدَّثَنِيْ مَالِكٌ،",
          en: "so whenever someone said: \"Malik narrated to me,\"",
          tokens: [
            { surface: "فَإِذَا", lemma: "إذا", pos: "part", features: "conj", gloss: "so whenever" },
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "said" },
            { surface: "أَحَدٌ", lemma: "أحد", pos: "noun", features: "nom.indef", gloss: "someone" },
            { surface: "حَدَّثَنِيْ", lemma: "حدث", pos: "verb", features: "perf.3ms+1s", gloss: "narrated to me" },
            { surface: "مَالِكٌ", lemma: "مالك", pos: "proper", features: "nom", gloss: "Malik" }
          ]
        },
        {
          id: "qr2-60-011",
          ar: "رَفَعَ النَّاسُ إِلَيْهِ أَبْصَارَهُمْ.",
          en: "the people would raise their eyes to him.",
          tokens: [
            { surface: "رَفَعَ", lemma: "رفع", pos: "verb", features: "perf.3ms", gloss: "raised" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "nom.def", gloss: "the people" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "+3ms", gloss: "to him" },
            { surface: "أَبْصَارَهُمْ", lemma: "بصر", pos: "noun", features: "acc.pl+3mp", gloss: "their eyes" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا كَانَ يَزْدَحِمُ النَّاسُ عَلَىٰ بَابِ مَالِكٍ؟",
          options: ["لِأَخْذِ الْحَدِيْثِ وَالْفِقْهِ عَنْهُ", "لِيَشْتَرُوْا مِنْهُ", "لِيَرَوْا بَيْتَهُ", "لِيُسَلِّمُوْا عَلَيْهِ فَقَطْ"],
          answer: 0,
          qEn: "Why would people throng at Malik's door?",
          optionsEn: ["To take hadith and fiqh from him", "To buy from him", "To see his house", "Just to greet him"]
        }
      ]
    },
    {
      en: "The utmost authority in jurisprudence and issuing rulings rested with him. Ibn Wahb said: \"I heard a caller calling out in Madinah: Indeed, none may give the people a fatwa except Malik ibn Anas,\" nor Ibn Abi Dhi'b, and among the well-known proverbs: \"No fatwa is given while Malik is in Madinah.\"",
      sentences: [
        {
          id: "qr2-60-012",
          ar: "وَكَانَ إِلَيْهِ الْمُنْتَهَىٰ فِي الْفِقْهِ وَالْفَتْوَىٰ.",
          en: "The utmost authority in jurisprudence and issuing rulings rested with him.",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and to him was" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "+3ms", gloss: "to him" },
            { surface: "الْمُنْتَهَىٰ", lemma: "منتهى", pos: "noun", features: "nom.def", gloss: "the utmost point" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "الْفِقْهِ", lemma: "فقه", pos: "noun", features: "gen.def", gloss: "jurisprudence" },
            { surface: "وَالْفَتْوَىٰ", lemma: "فتوى", pos: "noun", features: "conj+gen.def", gloss: "and issuing rulings" }
          ]
        },
        {
          id: "qr2-60-013",
          ar: "قَالَ ابْنُ وَهْبٍ: سَمِعْتُ مُنَادِياً يُنَادِيْ بِالْمَدِيْنَةِ: أَلاَ لاَ يُفْتِي النَّاسَ إِلاَّ مَالِكُ بْنُ أَنَسٍ،",
          en: "Ibn Wahb said: \"I heard a caller calling out in Madinah: Indeed, none may give the people a fatwa except Malik ibn Anas,\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "said" },
            { surface: "ابْنُ", lemma: "ابن", pos: "noun", features: "nom.constr", gloss: "the son of" },
            { surface: "وَهْبٍ", lemma: "وهب", pos: "proper", features: "gen", gloss: "Wahb" },
            { surface: "سَمِعْتُ", lemma: "سمع", pos: "verb", features: "perf.1s", gloss: "I heard" },
            { surface: "مُنَادِياً", lemma: "نادى", pos: "noun", features: "acc.indef", gloss: "a caller" },
            { surface: "يُنَادِيْ", lemma: "نادى", pos: "verb", features: "impf.3ms", gloss: "calling out" },
            { surface: "بِالْمَدِيْنَةِ", lemma: "مدينة", pos: "noun", features: "gen.def", gloss: "in Madinah" },
            { surface: "أَلاَ", lemma: "ألا", pos: "part", features: "", gloss: "indeed, lo" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "", gloss: "not" },
            { surface: "يُفْتِي", lemma: "أفتى", pos: "verb", features: "impf.3ms", gloss: "gives a fatwa to" },
            { surface: "النَّاسَ", lemma: "ناس", pos: "noun", features: "acc.def", gloss: "the people" },
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", features: "", gloss: "except" },
            { surface: "مَالِكُ", lemma: "مالك", pos: "proper", features: "nom", gloss: "Malik" },
            { surface: "بْنُ", lemma: "بن", pos: "noun", features: "nom.constr", gloss: "son of" },
            { surface: "أَنَسٍ", lemma: "أنس", pos: "proper", features: "gen", gloss: "Anas" }
          ]
        },
        {
          id: "qr2-60-014",
          ar: "وَابْنُ أَبِيْ ذِئْبٍ،",
          en: "nor Ibn Abi Dhi'b,",
          tokens: [
            { surface: "وَابْنُ", lemma: "ابن", pos: "noun", features: "conj+nom.constr", gloss: "and the son of" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "gen.constr", gloss: "the father of" },
            { surface: "ذِئْبٍ", lemma: "ذئب", pos: "proper", features: "gen", gloss: "Dhi'b" }
          ]
        },
        {
          id: "qr2-60-015",
          ar: "وَمِنَ الأَمْثَالِ السَّائِرَةِ: لاَ يُفْتَىٰ وَمَالِكٌ فِي الْمَدِيْنَةِ.",
          en: "and among the well-known proverbs: \"No fatwa is given while Malik is in Madinah.\"",
          tokens: [
            { surface: "وَمِنَ", lemma: "من", pos: "prep", features: "conj", gloss: "and among" },
            { surface: "الأَمْثَالِ", lemma: "مثل", pos: "noun", features: "gen.def.pl", gloss: "the proverbs" },
            { surface: "السَّائِرَةِ", lemma: "سائر", pos: "adj", features: "gen.def", gloss: "current, well-known" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "", gloss: "not" },
            { surface: "يُفْتَىٰ", lemma: "أفتى", pos: "verb", features: "pass.impf.3ms", gloss: "is a fatwa given" },
            { surface: "وَمَالِكٌ", lemma: "مالك", pos: "proper", features: "conj+nom", gloss: "while Malik [is]" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "الْمَدِيْنَةِ", lemma: "مدينة", pos: "noun", features: "gen.def", gloss: "Madinah" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا قَالَ الْمُنَادِيْ فِي الْمَدِيْنَةِ؟",
          options: ["لاَ يُفْتِي النَّاسَ إِلاَّ مَالِكٌ وَابْنُ أَبِيْ ذِئْبٍ", "لاَ يَدْخُلُ أَحَدٌ الْمَسْجِدَ", "لاَ يَبِيْعُ أَحَدٌ فِي السُّوْقِ", "لاَ يُسَافِرُ أَحَدٌ لَيْلاً"],
          answer: 0,
          qEn: "What did the caller in Madinah announce?",
          optionsEn: ["No one may give the people a fatwa except Malik and Ibn Abi Dhi'b", "No one may enter the mosque", "No one may sell in the market", "No one may travel at night"]
        }
      ]
    },
    {
      en: "He was of abundant refinement, intensely reverent of the hadith of the Messenger of Allah ﷺ, whenever he wanted to narrate [hadith], he would wash himself, perfume himself, and put on new clothes, put on a turban, and sit with humility, submissiveness, and dignity, perfuming himself with incense from its start, continuing to perfume himself until he finished, and he was asked about that, and he said: \"I love to glorify the hadith of the Messenger of Allah ﷺ, and I do not narrate it except firmly grounded, in a state of ritual purity,\" he used to dislike narrating on the road, or in a hurry, and he would say: \"I love to thoroughly understand what I narrate from the Messenger of Allah ﷺ.\"",
      sentences: [
        {
          id: "qr2-60-016",
          ar: "وَكَانَ كَثِيْرَ الأَدَبِ،",
          en: "He was of abundant refinement,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and he was" },
            { surface: "كَثِيْرَ", lemma: "كثير", pos: "adj", features: "acc.constr", gloss: "abundant in" },
            { surface: "الأَدَبِ", lemma: "أدب", pos: "noun", features: "gen.def", gloss: "refinement" }
          ]
        },
        {
          id: "qr2-60-017",
          ar: "شَدِيْدَ التَّعْظِيْمِ لِحَدِيْثِ رَسُوْلِ اللهِ ﷺ،",
          en: "intensely reverent of the hadith of the Messenger of Allah ﷺ,",
          tokens: [
            { surface: "شَدِيْدَ", lemma: "شديد", pos: "adj", features: "acc.constr", gloss: "intense in" },
            { surface: "التَّعْظِيْمِ", lemma: "تعظيم", pos: "noun", features: "gen.def", gloss: "veneration" },
            { surface: "لِحَدِيْثِ", lemma: "حديث", pos: "noun", features: "gen.constr", gloss: "for the hadith of" },
            { surface: "رَسُوْلِ", lemma: "رسول", pos: "noun", features: "gen.constr", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-60-018",
          ar: "إِذَا أَرَادَ أَنْ يُحَدِّثَ اغْتَسَلَ وَتَطَيَّبَ وَلَبِسَ ثِيَاباً جُدَداً،",
          en: "whenever he wanted to narrate [hadith], he would wash himself, perfume himself, and put on new clothes,",
          tokens: [
            { surface: "إِذَا", lemma: "إذا", pos: "part", features: "", gloss: "whenever" },
            { surface: "أَرَادَ", lemma: "أراد", pos: "verb", features: "perf.3ms", gloss: "he wanted" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "", gloss: "to" },
            { surface: "يُحَدِّثَ", lemma: "حدث", pos: "verb", features: "subj.3ms", gloss: "narrate" },
            { surface: "اغْتَسَلَ", lemma: "اغتسل", pos: "verb", features: "perf.3ms", gloss: "he would wash himself" },
            { surface: "وَتَطَيَّبَ", lemma: "تطيب", pos: "verb", features: "conj+perf.3ms", gloss: "and perfume himself" },
            { surface: "وَلَبِسَ", lemma: "لبس", pos: "verb", features: "conj+perf.3ms", gloss: "and wear" },
            { surface: "ثِيَاباً", lemma: "ثوب", pos: "noun", features: "acc.indef.pl", gloss: "clothes" },
            { surface: "جُدَداً", lemma: "جديد", pos: "adj", features: "acc.indef.pl", gloss: "new" }
          ]
        },
        {
          id: "qr2-60-019",
          ar: "وَتَعَمَّمَ وَقَعَدَ بِخُشُوْعٍ وَخُضُوْعٍ وَوَقَارٍ،",
          en: "put on a turban, and sit with humility, submissiveness, and dignity,",
          tokens: [
            { surface: "وَتَعَمَّمَ", lemma: "تعمم", pos: "verb", features: "conj+perf.3ms", gloss: "and put on a turban" },
            { surface: "وَقَعَدَ", lemma: "قعد", pos: "verb", features: "conj+perf.3ms", gloss: "and sit" },
            { surface: "بِخُشُوْعٍ", lemma: "خشوع", pos: "noun", features: "gen.indef", gloss: "with humility" },
            { surface: "وَخُضُوْعٍ", lemma: "خضوع", pos: "noun", features: "conj+gen.indef", gloss: "and submissiveness" },
            { surface: "وَوَقَارٍ", lemma: "وقار", pos: "noun", features: "conj+gen.indef", gloss: "and dignity" }
          ]
        },
        {
          id: "qr2-60-020",
          ar: "وَتَبَخَّرَ بِالْعُوْدِ مِنْ أَوَّلِهِ فَلاَ يَزَالُ يَتَبَخَّرُ إِلَىٰ فَرَاغِهِ،",
          en: "perfuming himself with incense from its start, continuing to perfume himself until he finished,",
          tokens: [
            { surface: "وَتَبَخَّرَ", lemma: "تبخر", pos: "verb", features: "conj+perf.3ms", gloss: "and perfume himself with incense" },
            { surface: "بِالْعُوْدِ", lemma: "عود", pos: "noun", features: "gen.def", gloss: "with agarwood" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "", gloss: "from" },
            { surface: "أَوَّلِهِ", lemma: "أول", pos: "noun", features: "gen+3ms", gloss: "its beginning" },
            { surface: "فَلاَ", lemma: "لا", pos: "part", features: "conj", gloss: "and not" },
            { surface: "يَزَالُ", lemma: "زال", pos: "verb", features: "impf.3ms", gloss: "cease" },
            { surface: "يَتَبَخَّرُ", lemma: "تبخر", pos: "verb", features: "impf.3ms", gloss: "perfuming himself with incense" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "", gloss: "until" },
            { surface: "فَرَاغِهِ", lemma: "فراغ", pos: "noun", features: "gen+3ms", gloss: "his finishing" }
          ]
        },
        {
          id: "qr2-60-021",
          ar: "وَقِيْلَ لَهُ فِيْ ذٰلِكَ،",
          en: "and he was asked about that,",
          tokens: [
            { surface: "وَقِيْلَ", lemma: "قال", pos: "verb", features: "conj+pass.perf.3ms", gloss: "and it was said" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "+3ms", gloss: "to him" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "", gloss: "about" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "", gloss: "that" }
          ]
        },
        {
          id: "qr2-60-022",
          ar: "فَقَالَ: أُحِبُّ أَنْ أُعَظِّمَ حَدِيْثَ رَسُوْلِ اللهِ ﷺ،",
          en: "and he said: \"I love to glorify the hadith of the Messenger of Allah ﷺ,\"",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "so he said" },
            { surface: "أُحِبُّ", lemma: "حب", pos: "verb", features: "impf.1s", gloss: "I love" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "", gloss: "to" },
            { surface: "أُعَظِّمَ", lemma: "عظم", pos: "verb", features: "subj.1s", gloss: "glorify" },
            { surface: "حَدِيْثَ", lemma: "حديث", pos: "noun", features: "acc.constr", gloss: "the hadith of" },
            { surface: "رَسُوْلِ", lemma: "رسول", pos: "noun", features: "gen.constr", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-60-023",
          ar: "وَلاَ أُحَدِّثُ بِهِ إِلاَّ مُتَمَكِّناً عَلَىٰ طَهَارَةٍ،",
          en: "and I do not narrate it except firmly grounded, in a state of ritual purity,",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj", gloss: "and not" },
            { surface: "أُحَدِّثُ", lemma: "حدث", pos: "verb", features: "impf.1s", gloss: "I narrate" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "+3ms", gloss: "it" },
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", features: "", gloss: "except" },
            { surface: "مُتَمَكِّناً", lemma: "متمكن", pos: "adj", features: "acc.indef", gloss: "firmly established" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "", gloss: "in a state of" },
            { surface: "طَهَارَةٍ", lemma: "طهارة", pos: "noun", features: "gen.indef", gloss: "purity" }
          ]
        },
        {
          id: "qr2-60-024",
          ar: "وَكَانَ يَكْرَهُ أَنْ يُحَدِّثَ عَلَىٰ الطَّرِيْقِ،",
          en: "He used to dislike narrating on the road,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and he used to" },
            { surface: "يَكْرَهُ", lemma: "كره", pos: "verb", features: "impf.3ms", gloss: "dislike" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "", gloss: "to" },
            { surface: "يُحَدِّثَ", lemma: "حدث", pos: "verb", features: "subj.3ms", gloss: "narrate" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "", gloss: "on" },
            { surface: "الطَّرِيْقِ", lemma: "طريق", pos: "noun", features: "gen.def", gloss: "the road" }
          ]
        },
        {
          id: "qr2-60-025",
          ar: "أَوْ مُسْتَعْجِلاً،",
          en: "or in a hurry,",
          tokens: [
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "", gloss: "or" },
            { surface: "مُسْتَعْجِلاً", lemma: "مستعجل", pos: "adj", features: "acc.indef", gloss: "in a hurry" }
          ]
        },
        {
          id: "qr2-60-026",
          ar: "وَيَقُوْلُ: أُحِبُّ أَنْ أَتَفَهَّمَ مَا أُحَدِّثُ بِهِ عَنْ رَسُوْلِ اللهِ ﷺ.",
          en: "and he would say: \"I love to thoroughly understand what I narrate from the Messenger of Allah ﷺ.\"",
          tokens: [
            { surface: "وَيَقُوْلُ", lemma: "قال", pos: "verb", features: "conj+impf.3ms", gloss: "and he would say" },
            { surface: "أُحِبُّ", lemma: "حب", pos: "verb", features: "impf.1s", gloss: "I love" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "", gloss: "to" },
            { surface: "أَتَفَهَّمَ", lemma: "تفهم", pos: "verb", features: "subj.1s", gloss: "understand thoroughly" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "", gloss: "what" },
            { surface: "أُحَدِّثُ", lemma: "حدث", pos: "verb", features: "impf.1s", gloss: "I narrate" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "+3ms", gloss: "with it" },
            { surface: "عَنْ", lemma: "عن", pos: "prep", features: "", gloss: "from" },
            { surface: "رَسُوْلِ", lemma: "رسول", pos: "noun", features: "gen.constr", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", gloss: "Allah" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا كَانَ يَفْعَلُ مَالِكٌ إِذَا أَرَادَ أَنْ يُحَدِّثَ؟",
          options: ["يَغْتَسِلُ وَيَتَطَيَّبُ وَيَلْبَسُ ثِيَاباً جُدَداً", "يَنَامُ قَلِيْلاً", "يَأْكُلُ طَعَاماً خَفِيْفاً", "يَخْرُجُ إِلَى السُّوْقِ"],
          answer: 0,
          qEn: "What would Malik do whenever he wanted to narrate hadith?",
          optionsEn: ["He would wash, perfume himself, and put on new clothes", "He would sleep briefly", "He would eat a light meal", "He would go out to the market"]
        }
      ]
    },
    {
      en: "Abdullah ibn al-Mubarak said: \"I was with Malik, while he was narrating to us, and a scorpion stung him sixteen times, and Malik's color would change, but he did not cut off the hadith, and when the people dispersed he said: I only endured out of reverence for the hadith.\"",
      sentences: [
        {
          id: "qr2-60-027",
          ar: "قَالَ عَبْدُ اللهِ بْنُ الْمُبَارَكِ: كُنْتُ عِنْدَ مَالِكٍ،",
          en: "Abdullah ibn al-Mubarak said: \"I was with Malik,\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "said" },
            { surface: "عَبْدُ", lemma: "عبد", pos: "proper", features: "nom.constr", gloss: "Abdullah (lit. servant of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", gloss: "Allah" },
            { surface: "بْنُ", lemma: "بن", pos: "noun", features: "nom.constr", gloss: "son of" },
            { surface: "الْمُبَارَكِ", lemma: "مبارك", pos: "proper", features: "gen.def", gloss: "al-Mubarak" },
            { surface: "كُنْتُ", lemma: "كان", pos: "verb", features: "perf.1s", gloss: "I was" },
            { surface: "عِنْدَ", lemma: "عند", pos: "prep", features: "", gloss: "with" },
            { surface: "مَالِكٍ", lemma: "مالك", pos: "proper", features: "gen", gloss: "Malik" }
          ]
        },
        {
          id: "qr2-60-028",
          ar: "وَهُوَ يُحَدِّثُنَا،",
          en: "while he was narrating to us,",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+3ms", gloss: "while he" },
            { surface: "يُحَدِّثُنَا", lemma: "حدث", pos: "verb", features: "impf.3ms+1p", gloss: "was narrating to us" }
          ]
        },
        {
          id: "qr2-60-029",
          ar: "فَلَدَغَتْهُ عَقْرَبٌ سِتَّ عَشْرَةَ مَرَّةً،",
          en: "and a scorpion stung him sixteen times,",
          tokens: [
            { surface: "فَلَدَغَتْهُ", lemma: "لدغ", pos: "verb", features: "conj+perf.3fs+3ms", gloss: "a scorpion stung him" },
            { surface: "عَقْرَبٌ", lemma: "عقرب", pos: "noun", features: "nom.indef", gloss: "a scorpion" },
            { surface: "سِتَّ", lemma: "ست", pos: "num", features: "acc", gloss: "six" },
            { surface: "عَشْرَةَ", lemma: "عشرة", pos: "num", features: "acc", gloss: "-teen" },
            { surface: "مَرَّةً", lemma: "مرة", pos: "noun", features: "acc.indef", gloss: "times" }
          ]
        },
        {
          id: "qr2-60-030",
          ar: "وَمَالِكٌ يَتَغَيَّرُ لَوْنُهُ،",
          en: "and Malik's color would change,",
          tokens: [
            { surface: "وَمَالِكٌ", lemma: "مالك", pos: "proper", features: "conj+nom", gloss: "and Malik" },
            { surface: "يَتَغَيَّرُ", lemma: "تغير", pos: "verb", features: "impf.3ms", gloss: "would change" },
            { surface: "لَوْنُهُ", lemma: "لون", pos: "noun", features: "nom+3ms", gloss: "his color" }
          ]
        },
        {
          id: "qr2-60-031",
          ar: "وَلاَ يَقْطَعُ الْحَدِيْثَ،",
          en: "but he did not cut off the hadith,",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj", gloss: "but not" },
            { surface: "يَقْطَعُ", lemma: "قطع", pos: "verb", features: "impf.3ms", gloss: "cut off" },
            { surface: "الْحَدِيْثَ", lemma: "حديث", pos: "noun", features: "acc.def", gloss: "the hadith" }
          ]
        },
        {
          id: "qr2-60-032",
          ar: "فَلَمَّا تَفَرَّقَ النَّاسُ قَالَ: إِنَّمَا صَبَرْتُ إِجْلاَلاً لِلْحَدِيْثِ.",
          en: "and when the people dispersed he said: \"I only endured out of reverence for the hadith.\"",
          tokens: [
            { surface: "فَلَمَّا", lemma: "لما", pos: "part", features: "conj", gloss: "and when" },
            { surface: "تَفَرَّقَ", lemma: "تفرق", pos: "verb", features: "perf.3ms", gloss: "dispersed" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "nom.def", gloss: "the people" },
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "إِنَّمَا", lemma: "إنما", pos: "part", features: "", gloss: "only" },
            { surface: "صَبَرْتُ", lemma: "صبر", pos: "verb", features: "perf.1s", gloss: "I endured" },
            { surface: "إِجْلاَلاً", lemma: "إجلال", pos: "noun", features: "acc.indef", gloss: "out of reverence" },
            { surface: "لِلْحَدِيْثِ", lemma: "حديث", pos: "noun", features: "gen.def", gloss: "for the hadith" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ مَالِكٌ عِنْدَمَا لَدَغَتْهُ الْعَقْرَبُ سِتَّ عَشْرَةَ مَرَّةً؟",
          options: ["لَمْ يَقْطَعِ الْحَدِيْثَ", "قَطَعَ الْحَدِيْثَ وَذَهَبَ", "صَرَخَ وَبَكَىٰ", "طَلَبَ طَبِيْباً"],
          answer: 0,
          qEn: "What did Malik do when the scorpion stung him sixteen times?",
          optionsEn: ["He did not cut off the hadith", "He cut off the hadith and left", "He screamed and cried", "He asked for a doctor"]
        }
      ]
    },
    {
      en: "He would not ride [a mount] in Madinah, despite his frailty and old age, and he would say: \"I will not ride in a city in which the body of the Messenger of Allah ﷺ lies buried.\"",
      sentences: [
        {
          id: "qr2-60-033",
          ar: "وَكَانَ لاَ يَرْكَبُ فِي الْمَدِيْنَةِ عَلَىٰ ضُعْفِهِ وَكِبَرِ سِنِّهِ،",
          en: "He would not ride [a mount] in Madinah, despite his frailty and old age,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and he" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "", gloss: "not" },
            { surface: "يَرْكَبُ", lemma: "ركب", pos: "verb", features: "impf.3ms", gloss: "would ride" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "الْمَدِيْنَةِ", lemma: "مدينة", pos: "noun", features: "gen.def", gloss: "Madinah" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "", gloss: "despite" },
            { surface: "ضُعْفِهِ", lemma: "ضعف", pos: "noun", features: "gen+3ms", gloss: "his weakness" },
            { surface: "وَكِبَرِ", lemma: "كبر", pos: "noun", features: "conj+gen.constr", gloss: "and the largeness of" },
            { surface: "سِنِّهِ", lemma: "سن", pos: "noun", features: "gen+3ms", gloss: "his age" }
          ]
        },
        {
          id: "qr2-60-034",
          ar: "وَيَقُوْلُ: لاَ أَرْكَبُ فِيْ مَدِيْنَةٍ فِيْهَا جُثَّةُ رَسُوْلِ اللهِ ﷺ مَدْفُوْنَةٌ.",
          en: "and he would say: \"I will not ride in a city in which the body of the Messenger of Allah ﷺ lies buried.\"",
          tokens: [
            { surface: "وَيَقُوْلُ", lemma: "قال", pos: "verb", features: "conj+impf.3ms", gloss: "and he would say" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "", gloss: "not" },
            { surface: "أَرْكَبُ", lemma: "ركب", pos: "verb", features: "impf.1s", gloss: "I ride" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "مَدِيْنَةٍ", lemma: "مدينة", pos: "noun", features: "gen.indef", gloss: "a city" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "+3fs", gloss: "in which" },
            { surface: "جُثَّةُ", lemma: "جثة", pos: "noun", features: "nom.constr", gloss: "the body of" },
            { surface: "رَسُوْلِ", lemma: "رسول", pos: "noun", features: "gen.constr", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", gloss: "Allah" },
            { surface: "مَدْفُوْنَةٌ", lemma: "دفن", pos: "adj", features: "nom.indef", gloss: "buried" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا كَانَ مَالِكٌ لاَ يَرْكَبُ فِي الْمَدِيْنَةِ؟",
          options: ["لأَنَّ فِيْهَا جُثَّةَ رَسُوْلِ اللهِ ﷺ مَدْفُوْنَةً", "لأَنَّهُ لاَ يَمْلِكُ دَابَّةً", "لأَنَّ الطُّرُقَ ضَيِّقَةٌ", "لأَنَّهُ كَانَ يُحِبُّ الْمَشْيَ فَقَطْ"],
          answer: 0,
          qEn: "Why would Malik not ride [a mount] in Madinah?",
          optionsEn: ["Because the body of the Messenger of Allah ﷺ lies buried there", "Because he did not own a mount", "Because the roads were narrow", "Because he simply loved walking"]
        }
      ]
    },
    {
      en: "His gathering was a gathering of dignity and forbearance, he was an awe-inspiring, noble man, there was nothing of dispute or clamor in his gathering, nor any raising of a voice, and strangers would ask him about hadith, and he would only answer with one hadith after another.",
      sentences: [
        {
          id: "qr2-60-035",
          ar: "وَكَانَ مَجْلِسُهُ مَجْلِسَ وَقَارٍ وَحِلْمٍ،",
          en: "His gathering was a gathering of dignity and forbearance,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and" },
            { surface: "مَجْلِسُهُ", lemma: "مجلس", pos: "noun", features: "nom+3ms", gloss: "his gathering [was]" },
            { surface: "مَجْلِسَ", lemma: "مجلس", pos: "noun", features: "acc.constr", gloss: "a gathering of" },
            { surface: "وَقَارٍ", lemma: "وقار", pos: "noun", features: "gen.indef", gloss: "dignity" },
            { surface: "وَحِلْمٍ", lemma: "حلم", pos: "noun", features: "conj+gen.indef", gloss: "and forbearance" }
          ]
        },
        {
          id: "qr2-60-036",
          ar: "وَكَانَ رَجُلاً مَهِيْباً نَبِيْلاً،",
          en: "he was an awe-inspiring, noble man,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and he was" },
            { surface: "رَجُلاً", lemma: "رجل", pos: "noun", features: "acc.indef", gloss: "a man" },
            { surface: "مَهِيْباً", lemma: "مهيب", pos: "adj", features: "acc.indef", gloss: "awe-inspiring" },
            { surface: "نَبِيْلاً", lemma: "نبيل", pos: "adj", features: "acc.indef", gloss: "noble" }
          ]
        },
        {
          id: "qr2-60-037",
          ar: "لَيْسَ فِيْ مَجْلِسِهِ شَيْءٌ مِنَ الْمِرَاءِ وَاللَّغَطِ،",
          en: "there was nothing of dispute or clamor in his gathering,",
          tokens: [
            { surface: "لَيْسَ", lemma: "ليس", pos: "verb", features: "perf.3ms", gloss: "there was not" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "مَجْلِسِهِ", lemma: "مجلس", pos: "noun", features: "gen+3ms", gloss: "his gathering" },
            { surface: "شَيْءٌ", lemma: "شيء", pos: "noun", features: "nom.indef", gloss: "anything" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "", gloss: "of" },
            { surface: "الْمِرَاءِ", lemma: "مراء", pos: "noun", features: "gen.def", gloss: "dispute" },
            { surface: "وَاللَّغَطِ", lemma: "لغط", pos: "noun", features: "conj+gen.def", gloss: "and clamor" }
          ]
        },
        {
          id: "qr2-60-038",
          ar: "وَلاَ رَفْعُ صَوْتٍ،",
          en: "nor any raising of a voice,",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj", gloss: "nor" },
            { surface: "رَفْعُ", lemma: "رفع", pos: "noun", features: "nom.constr", gloss: "raising of" },
            { surface: "صَوْتٍ", lemma: "صوت", pos: "noun", features: "gen.indef", gloss: "a voice" }
          ]
        },
        {
          id: "qr2-60-039",
          ar: "وَكَانَ الْغُرَبَاءُ يَسْأَلُوْنَهُ عَنِ الْحَدِيْثِ فَلاَ يُجِيْبُ إِلاَّ فِي الْحَدِيْثِ بَعْدَ الْحَدِيْثِ.",
          en: "Strangers would ask him about hadith, and he would only answer with one hadith after another.",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and" },
            { surface: "الْغُرَبَاءُ", lemma: "غريب", pos: "noun", features: "nom.def.pl", gloss: "the strangers" },
            { surface: "يَسْأَلُوْنَهُ", lemma: "سأل", pos: "verb", features: "impf.3mp+3ms", gloss: "would ask him" },
            { surface: "عَنِ", lemma: "عن", pos: "prep", features: "", gloss: "about" },
            { surface: "الْحَدِيْثِ", lemma: "حديث", pos: "noun", features: "gen.def", gloss: "hadith" },
            { surface: "فَلاَ", lemma: "لا", pos: "part", features: "conj", gloss: "and not" },
            { surface: "يُجِيْبُ", lemma: "أجاب", pos: "verb", features: "impf.3ms", gloss: "would he answer" },
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", features: "", gloss: "except" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "الْحَدِيْثِ", lemma: "حديث", pos: "noun", features: "gen.def", gloss: "a hadith" },
            { surface: "بَعْدَ", lemma: "بعد", pos: "prep", features: "", gloss: "after" },
            { surface: "الْحَدِيْثِ", lemma: "حديث", pos: "noun", features: "gen.def", gloss: "a hadith" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ كَانَ مَجْلِسُ مَالِكٍ؟",
          options: ["مَجْلِسَ وَقَارٍ وَحِلْمٍ لَيْسَ فِيْهِ مِرَاءٌ وَلاَ رَفْعُ صَوْتٍ", "مَجْلِساً صَاخِباً بِالضَّحِكِ", "مَجْلِساً لِلتِّجَارَةِ فَقَطْ", "مَجْلِساً صَغِيْراً لاَ يَتَّسِعُ لِأَحَدٍ"],
          answer: 0,
          qEn: "What was Malik's gathering like?",
          optionsEn: ["A gathering of dignity and forbearance, with no dispute or raised voices", "A gathering loud with laughter", "A gathering only for trade", "A small gathering with no room for anyone"]
        }
      ]
    },
    {
      lines: true,
      en: "Harun al-Rashid asked Malik to come, but he refused, so Harun came to Malik, while he was in his house, and with him were his sons, and he asked that he recite to them, so he said: \"I have not recited to anyone for a long time, rather, it is recited to me.\" So Harun said: \"Send the people out, so that I myself may recite to you,\" so he said: \"If the general public is denied for the sake of some of the elite, the elite will not benefit.\"",
      sentences: [
        {
          id: "qr2-60-040",
          ar: "سَأَلَ هَارُوْنُ الرَّشِيْدُ مَالِكاً أَنْ يَأْتِيَ فَأَبَىٰ،",
          en: "Harun al-Rashid asked Malik to come, but he refused,",
          tokens: [
            { surface: "سَأَلَ", lemma: "سأل", pos: "verb", features: "perf.3ms", gloss: "asked" },
            { surface: "هَارُوْنُ", lemma: "هارون", pos: "proper", features: "nom", gloss: "Harun" },
            { surface: "الرَّشِيْدُ", lemma: "رشيد", pos: "proper", features: "nom.def", gloss: "al-Rashid" },
            { surface: "مَالِكاً", lemma: "مالك", pos: "proper", features: "acc", gloss: "Malik" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "", gloss: "to" },
            { surface: "يَأْتِيَ", lemma: "أتى", pos: "verb", features: "subj.3ms", gloss: "come" },
            { surface: "فَأَبَىٰ", lemma: "أبى", pos: "verb", features: "conj+perf.3ms", gloss: "but he refused" }
          ]
        },
        {
          id: "qr2-60-041",
          ar: "فَأَتَىٰ هَارُوْنُ مَالِكاً،",
          en: "so Harun came to Malik,",
          tokens: [
            { surface: "فَأَتَىٰ", lemma: "أتى", pos: "verb", features: "conj+perf.3ms", gloss: "so came" },
            { surface: "هَارُوْنُ", lemma: "هارون", pos: "proper", features: "nom", gloss: "Harun" },
            { surface: "مَالِكاً", lemma: "مالك", pos: "proper", features: "acc", gloss: "to Malik" }
          ]
        },
        {
          id: "qr2-60-042",
          ar: "وَهُوَ فِيْ مَنْزِلِهِ،",
          en: "while he was in his house,",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+3ms", gloss: "while he" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "مَنْزِلِهِ", lemma: "منزل", pos: "noun", features: "gen+3ms", gloss: "his house" }
          ]
        },
        {
          id: "qr2-60-043",
          ar: "وَمَعَهُ بَنُوْهُ،",
          en: "and with him were his sons,",
          tokens: [
            { surface: "وَمَعَهُ", lemma: "مع", pos: "prep", features: "conj+3ms", gloss: "and with him [were]" },
            { surface: "بَنُوْهُ", lemma: "ابن", pos: "noun", features: "nom.pl+3ms", gloss: "his sons" }
          ]
        },
        {
          id: "qr2-60-044",
          ar: "وَسَأَلَ أَنْ يَقْرَأَ عَلَيْهِمْ،",
          en: "and he asked that he recite to them,",
          tokens: [
            { surface: "وَسَأَلَ", lemma: "سأل", pos: "verb", features: "conj+perf.3ms", gloss: "and he asked" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "", gloss: "to" },
            { surface: "يَقْرَأَ", lemma: "قرأ", pos: "verb", features: "subj.3ms", gloss: "read/recite" },
            { surface: "عَلَيْهِمْ", lemma: "على", pos: "prep", features: "+3mp", gloss: "to them" }
          ]
        },
        {
          id: "qr2-60-045",
          ar: "فَقَالَ: مَا قَرَأْتُ عَلَىٰ أَحَدٍ مُنْذُ زَمَانٍ،",
          en: "so he said: \"I have not recited to anyone for a long time,\"",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "so he said" },
            { surface: "مَا", lemma: "ما", pos: "part", features: "", gloss: "not" },
            { surface: "قَرَأْتُ", lemma: "قرأ", pos: "verb", features: "perf.1s", gloss: "I have recited" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "", gloss: "to" },
            { surface: "أَحَدٍ", lemma: "أحد", pos: "noun", features: "gen.indef", gloss: "anyone" },
            { surface: "مُنْذُ", lemma: "منذ", pos: "prep", features: "", gloss: "for" },
            { surface: "زَمَانٍ", lemma: "زمان", pos: "noun", features: "gen.indef", gloss: "a long time" }
          ]
        },
        {
          id: "qr2-60-046",
          ar: "وَإِنَّمَا يُقْرَأُ عَلَيَّ.",
          en: "rather, it is recited to me.",
          tokens: [
            { surface: "وَإِنَّمَا", lemma: "إنما", pos: "part", features: "conj", gloss: "rather" },
            { surface: "يُقْرَأُ", lemma: "قرأ", pos: "verb", features: "pass.impf.3ms", gloss: "it is recited" },
            { surface: "عَلَيَّ", lemma: "على", pos: "prep", features: "+1s", gloss: "to me" }
          ]
        },
        {
          id: "qr2-60-047",
          ar: "فَقَالَ هَارُوْنُ: أَخْرِجِ النَّاسَ حَتَّىٰ أَقْرَأَ أَنَا عَلَيْكَ،",
          en: "So Harun said: \"Send the people out, so that I myself may recite to you,\"",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "so said" },
            { surface: "هَارُوْنُ", lemma: "هارون", pos: "proper", features: "nom", gloss: "Harun" },
            { surface: "أَخْرِجِ", lemma: "أخرج", pos: "verb", features: "imp.2ms", gloss: "send out" },
            { surface: "النَّاسَ", lemma: "ناس", pos: "noun", features: "acc.def", gloss: "the people" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "", gloss: "so that" },
            { surface: "أَقْرَأَ", lemma: "قرأ", pos: "verb", features: "subj.1s", gloss: "I may recite" },
            { surface: "أَنَا", lemma: "أنا", pos: "noun", features: "1s", gloss: "I" },
            { surface: "عَلَيْكَ", lemma: "على", pos: "prep", features: "+2ms", gloss: "to you" }
          ]
        },
        {
          id: "qr2-60-048",
          ar: "فَقَالَ: إِذَا مُنِعَ الْعَامُّ لِبَعْضِ الْخَاصِّ لَمْ يَنْتَفِعِ الْخَاصُّ.",
          en: "so he said: \"If the general public is denied for the sake of some of the elite, the elite will not benefit.\"",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "so he said" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", features: "", gloss: "if" },
            { surface: "مُنِعَ", lemma: "منع", pos: "verb", features: "pass.perf.3ms", gloss: "is denied" },
            { surface: "الْعَامُّ", lemma: "عام", pos: "adj", features: "nom.def", gloss: "the general public" },
            { surface: "لِبَعْضِ", lemma: "بعض", pos: "noun", features: "gen.constr", gloss: "for the sake of some of" },
            { surface: "الْخَاصِّ", lemma: "خاص", pos: "adj", features: "gen.def", gloss: "the elite" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "", gloss: "will not" },
            { surface: "يَنْتَفِعِ", lemma: "انتفع", pos: "verb", features: "impf.3ms", gloss: "benefit" },
            { surface: "الْخَاصُّ", lemma: "خاص", pos: "adj", features: "nom.def", gloss: "the elite" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا رَفَضَ مَالِكٌ أَنْ يَقْرَأَ الْحَدِيْثَ عَلَىٰ هَارُوْنَ وَبَنِيْهِ وَحْدَهُمْ؟",
          options: ["لِأَنَّهُ إِذَا مُنِعَ الْعَامُّ لِبَعْضِ الْخَاصِّ لَمْ يَنْتَفِعِ الْخَاصُّ", "لِأَنَّهُ كَانَ مَرِيْضاً", "لِأَنَّهُ لاَ يَعْرِفُ هَارُوْنَ", "لِأَنَّهُ كَانَ مَشْغُوْلاً"],
          answer: 0,
          qEn: "Why did Malik refuse to recite the hadith to Harun and his sons alone?",
          optionsEn: ["Because if the general public is denied for the sake of some of the elite, the elite will not benefit", "Because he was ill", "Because he did not know Harun", "Because he was busy"]
        }
      ]
    },
    {
      lines: true,
      en: "Malik entered upon the Commander of the Believers, al-Mansur, while he was on his bed, when a boy came, going out then coming back, so he said to me: \"Do you know who this is?\" I said: \"No!\" He said: \"My son, he is only startled by the awe you inspire.\"",
      sentences: [
        {
          id: "qr2-60-049",
          ar: "وَدَخَلَ مَالِكٌ عَلَىٰ أَمِيْرِ الْمُؤْمِنِيْنَ مَنْصُوْرٍ،",
          en: "Malik entered upon the Commander of the Believers, al-Mansur,",
          tokens: [
            { surface: "وَدَخَلَ", lemma: "دخل", pos: "verb", features: "conj+perf.3ms", gloss: "and entered" },
            { surface: "مَالِكٌ", lemma: "مالك", pos: "proper", features: "nom", gloss: "Malik" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "", gloss: "upon" },
            { surface: "أَمِيْرِ", lemma: "أمير", pos: "noun", features: "gen.constr", gloss: "the Commander of" },
            { surface: "الْمُؤْمِنِيْنَ", lemma: "مؤمن", pos: "noun", features: "gen.def.pl", gloss: "the Believers" },
            { surface: "مَنْصُوْرٍ", lemma: "منصور", pos: "proper", features: "gen", gloss: "al-Mansur" }
          ]
        },
        {
          id: "qr2-60-050",
          ar: "وَهُوَ عَلَىٰ فَرَاشِهِ،",
          en: "while he was on his bed,",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+3ms", gloss: "while he" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "", gloss: "on" },
            { surface: "فَرَاشِهِ", lemma: "فراش", pos: "noun", features: "gen+3ms", gloss: "his bed" }
          ]
        },
        {
          id: "qr2-60-051",
          ar: "إِذْ جَاءَ صَبِيٌّ يَخْرُجُ ثُمَّ يَرْجِعُ،",
          en: "when a boy came, going out then coming back,",
          tokens: [
            { surface: "إِذْ", lemma: "إذ", pos: "part", features: "", gloss: "when" },
            { surface: "جَاءَ", lemma: "جاء", pos: "verb", features: "perf.3ms", gloss: "came" },
            { surface: "صَبِيٌّ", lemma: "صبي", pos: "noun", features: "nom.indef", gloss: "a boy" },
            { surface: "يَخْرُجُ", lemma: "خرج", pos: "verb", features: "impf.3ms", gloss: "going out" },
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", features: "", gloss: "then" },
            { surface: "يَرْجِعُ", lemma: "رجع", pos: "verb", features: "impf.3ms", gloss: "coming back" }
          ]
        },
        {
          id: "qr2-60-052",
          ar: "فَقَالَ لِيْ: أَتَدْرِيْ مَنْ هٰذَا؟",
          en: "so he said to me: \"Do you know who this is?\"",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "so he said" },
            { surface: "لِيْ", lemma: "ل", pos: "prep", features: "+1s", gloss: "to me" },
            { surface: "أَتَدْرِيْ", lemma: "درى", pos: "verb", features: "impf.2ms", gloss: "do you know" },
            { surface: "مَنْ", lemma: "من", pos: "rel", features: "", gloss: "who" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "", gloss: "this [is]" }
          ]
        },
        {
          id: "qr2-60-053",
          ar: "فَقُلْتُ: لاَ!",
          en: "I said: \"No!\"",
          tokens: [
            { surface: "فَقُلْتُ", lemma: "قال", pos: "verb", features: "conj+perf.1s", gloss: "I said" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "", gloss: "no" }
          ]
        },
        {
          id: "qr2-60-054",
          ar: "قَالَ: ابْنِيْ،",
          en: "He said: \"My son,\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "ابْنِيْ", lemma: "ابن", pos: "noun", features: "nom+1s", gloss: "my son" }
          ]
        },
        {
          id: "qr2-60-055",
          ar: "وَإِنَّمَا يَفْزَعُ مِنْ هَيْبَتِكَ.",
          en: "he is only startled by the awe you inspire.",
          tokens: [
            { surface: "وَإِنَّمَا", lemma: "إنما", pos: "part", features: "conj", gloss: "he only" },
            { surface: "يَفْزَعُ", lemma: "فزع", pos: "verb", features: "impf.3ms", gloss: "is startled" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "", gloss: "by" },
            { surface: "هَيْبَتِكَ", lemma: "هيبة", pos: "noun", features: "gen+2ms", gloss: "your awesomeness" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا كَانَ ابْنُ الْخَلِيْفَةِ يَخْرُجُ وَيَرْجِعُ عِنْدَمَا رَأَىٰ مَالِكاً؟",
          options: ["لِأَنَّهُ كَانَ يَفْزَعُ مِنْ هَيْبَةِ مَالِكٍ", "لِأَنَّهُ كَانَ يَلْعَبُ", "لِأَنَّهُ كَانَ يَبْحَثُ عَنْ أَبِيْهِ", "لِأَنَّهُ لَمْ يَكُنْ يَعْرِفُ الطَّرِيْقَ"],
          answer: 0,
          qEn: "Why did the caliph's son go out and come back when he saw Malik?",
          optionsEn: ["Because he was startled by the awe Malik inspired", "Because he was playing", "Because he was looking for his father", "Because he did not know the way"]
        }
      ]
    },
    {
      en: "In the year one hundred forty-seven, Malik was flogged seventy lashes because of a fatwa that did not match the ruler's wish, so [the ruler] became angry and summoned him, stripped him, and beat him with whips, his hand was stretched out until his shoulder was dislocated, yet he did not cease, after that beating, to be in elevation and high standing, as if those whips were an ornament he had been adorned with.",
      sentences: [
        {
          id: "qr2-60-056",
          ar: "وَفِيْ سَنَةِ سَبْعٍ وَأَرْبَعِيْنَ وَمِئَةٍ ضُرِبَ مَالِكٌ سَبْعِيْنَ سَوْطاً لِأَجْلِ فَتْوَىٰ لَمْ تُوَافِقُ غَرَضَ السُّلْطَانِ،",
          en: "In the year one hundred forty-seven, Malik was flogged seventy lashes because of a fatwa that did not match the ruler's wish,",
          tokens: [
            { surface: "وَفِيْ", lemma: "في", pos: "prep", features: "conj", gloss: "and in" },
            { surface: "سَنَةِ", lemma: "سنة", pos: "noun", features: "gen.constr", gloss: "the year" },
            { surface: "سَبْعٍ", lemma: "سبع", pos: "num", features: "gen", gloss: "seven" },
            { surface: "وَأَرْبَعِيْنَ", lemma: "أربعين", pos: "num", features: "conj+gen", gloss: "and forty" },
            { surface: "وَمِئَةٍ", lemma: "مئة", pos: "num", features: "conj+gen", gloss: "and a hundred" },
            { surface: "ضُرِبَ", lemma: "ضرب", pos: "verb", features: "pass.perf.3ms", gloss: "was flogged" },
            { surface: "مَالِكٌ", lemma: "مالك", pos: "proper", features: "nom", gloss: "Malik" },
            { surface: "سَبْعِيْنَ", lemma: "سبعين", pos: "num", features: "acc", gloss: "seventy" },
            { surface: "سَوْطاً", lemma: "سوط", pos: "noun", features: "acc.indef", gloss: "lashes" },
            { surface: "لِأَجْلِ", lemma: "أجل", pos: "noun", features: "gen.constr", gloss: "for the sake of" },
            { surface: "فَتْوَىٰ", lemma: "فتوى", pos: "noun", features: "gen.indef", gloss: "a fatwa" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "", gloss: "[that] did not" },
            { surface: "تُوَافِقُ", lemma: "وافق", pos: "verb", features: "impf.3fs", gloss: "match" },
            { surface: "غَرَضَ", lemma: "غرض", pos: "noun", features: "acc.constr", gloss: "the wish of" },
            { surface: "السُّلْطَانِ", lemma: "سلطان", pos: "noun", features: "gen.def", gloss: "the ruler" }
          ]
        },
        {
          id: "qr2-60-057",
          ar: "فَغَضِبَ وَدَعَا بِهِ وَجَرَّدَهُ وَضَرَبَهُ بِالسِّيَاطِ،",
          en: "so [the ruler] became angry and summoned him, stripped him, and beat him with whips,",
          tokens: [
            { surface: "فَغَضِبَ", lemma: "غضب", pos: "verb", features: "conj+perf.3ms", gloss: "so he became angry" },
            { surface: "وَدَعَا", lemma: "دعا", pos: "verb", features: "conj+perf.3ms", gloss: "and summoned" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "+3ms", gloss: "him" },
            { surface: "وَجَرَّدَهُ", lemma: "جرد", pos: "verb", features: "conj+perf.3ms+3ms", gloss: "and stripped him" },
            { surface: "وَضَرَبَهُ", lemma: "ضرب", pos: "verb", features: "conj+perf.3ms+3ms", gloss: "and beat him" },
            { surface: "بِالسِّيَاطِ", lemma: "سوط", pos: "noun", features: "gen.def.pl", gloss: "with whips" }
          ]
        },
        {
          id: "qr2-60-058",
          ar: "وَمُدَّتْ يَدُهُ حَتَّىٰ انْخَلَعَتْ كَتِفُهُ،",
          en: "his hand was stretched out until his shoulder was dislocated,",
          tokens: [
            { surface: "وَمُدَّتْ", lemma: "مد", pos: "verb", features: "conj+pass.perf.3fs", gloss: "and was stretched" },
            { surface: "يَدُهُ", lemma: "يد", pos: "noun", features: "nom+3ms", gloss: "his hand" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "", gloss: "until" },
            { surface: "انْخَلَعَتْ", lemma: "خلع", pos: "verb", features: "perf.3fs", gloss: "was dislocated" },
            { surface: "كَتِفُهُ", lemma: "كتف", pos: "noun", features: "nom+3ms", gloss: "his shoulder" }
          ]
        },
        {
          id: "qr2-60-059",
          ar: "فَلَمْ يَزَلْ بَعْدَ ذٰلِكَ الضَّرْبِ فِيْ عُلُوٍّ وَرِفْعَةٍ،",
          en: "yet he did not cease, after that beating, to be in elevation and high standing,",
          tokens: [
            { surface: "فَلَمْ", lemma: "لم", pos: "part", features: "conj", gloss: "yet" },
            { surface: "يَزَلْ", lemma: "زال", pos: "verb", features: "jus.3ms", gloss: "ceased" },
            { surface: "بَعْدَ", lemma: "بعد", pos: "prep", features: "", gloss: "after" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "", gloss: "that" },
            { surface: "الضَّرْبِ", lemma: "ضرب", pos: "noun", features: "gen.def", gloss: "the beating" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "عُلُوٍّ", lemma: "علو", pos: "noun", features: "gen.indef", gloss: "elevation" },
            { surface: "وَرِفْعَةٍ", lemma: "رفعة", pos: "noun", features: "conj+gen.indef", gloss: "and high standing" }
          ]
        },
        {
          id: "qr2-60-060",
          ar: "وَكَأَنَّمَا كَانَتْ تِلْكَ السِّيَاطُ حَلْياً حُلِّيَ بِهِ.",
          en: "as if those whips were an ornament he had been adorned with.",
          tokens: [
            { surface: "وَكَأَنَّمَا", lemma: "كأنما", pos: "part", features: "conj", gloss: "as if" },
            { surface: "كَانَتْ", lemma: "كان", pos: "verb", features: "perf.3fs", gloss: "were" },
            { surface: "تِلْكَ", lemma: "تلك", pos: "dem", features: "", gloss: "those" },
            { surface: "السِّيَاطُ", lemma: "سوط", pos: "noun", features: "nom.def.pl", gloss: "the whips" },
            { surface: "حَلْياً", lemma: "حلي", pos: "noun", features: "acc.indef", gloss: "an ornament" },
            { surface: "حُلِّيَ", lemma: "حلي", pos: "verb", features: "pass.perf.3ms", gloss: "he was adorned" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "+3ms", gloss: "with" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا ضُرِبَ مَالِكٌ سَبْعِيْنَ سَوْطاً؟",
          options: ["لِأَجْلِ فَتْوَىٰ لَمْ تُوَافِقْ غَرَضَ السُّلْطَانِ", "لِأَنَّهُ سَرَقَ", "لِأَنَّهُ لَمْ يُصَلِّ", "لِأَنَّهُ هَرَبَ مِنَ الْمَدِيْنَةِ"],
          answer: 0,
          qEn: "Why was Malik given seventy lashes?",
          optionsEn: ["Because of a fatwa that did not match the ruler's wish", "Because he stole", "Because he did not pray", "Because he fled Madinah"]
        }
      ]
    },
    {
      en: "His book al-Muwatta is among the most famous books of hadith, and among the accepted books in Islam, may Allah grant you its reading, and benefit from it, and that will be, if Allah wills, within a few years, once you have advanced in knowledge.",
      sentences: [
        {
          id: "qr2-60-061",
          ar: "وَكِتَابُهُ الْمُوَطَّأُ مِنْ أَشْهَرِ كُتُبِ الْحَدِيْثِ،",
          en: "His book al-Muwatta is among the most famous books of hadith,",
          tokens: [
            { surface: "وَكِتَابُهُ", lemma: "كتاب", pos: "noun", features: "conj+nom+3ms", gloss: "and his book" },
            { surface: "الْمُوَطَّأُ", lemma: "موطأ", pos: "proper", features: "nom.def", gloss: "al-Muwatta" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "", gloss: "among" },
            { surface: "أَشْهَرِ", lemma: "أشهر", pos: "adj", features: "gen.constr", gloss: "the most famous of" },
            { surface: "كُتُبِ", lemma: "كتاب", pos: "noun", features: "gen.constr.pl", gloss: "the books of" },
            { surface: "الْحَدِيْثِ", lemma: "حديث", pos: "noun", features: "gen.def", gloss: "hadith" }
          ]
        },
        {
          id: "qr2-60-062",
          ar: "وَمِنَ الْكُتُبِ الْمَقْبُوْلَةِ فِي الإِسْلاَمِ،",
          en: "and among the accepted books in Islam,",
          tokens: [
            { surface: "وَمِنَ", lemma: "من", pos: "prep", features: "conj", gloss: "and among" },
            { surface: "الْكُتُبِ", lemma: "كتاب", pos: "noun", features: "gen.def.pl", gloss: "the books" },
            { surface: "الْمَقْبُوْلَةِ", lemma: "مقبول", pos: "adj", features: "gen.def", gloss: "accepted" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "الإِسْلاَمِ", lemma: "إسلام", pos: "proper", features: "gen.def", gloss: "Islam" }
          ]
        },
        {
          id: "qr2-60-063",
          ar: "رَزَقَكَ اللهُ قِرَاءَتَهُ،",
          en: "may Allah grant you its reading,",
          tokens: [
            { surface: "رَزَقَكَ", lemma: "رزق", pos: "verb", features: "perf.3ms+2ms", gloss: "may [Allah] grant you" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", gloss: "Allah" },
            { surface: "قِرَاءَتَهُ", lemma: "قراءة", pos: "noun", features: "acc+3ms", gloss: "its reading" }
          ]
        },
        {
          id: "qr2-60-064",
          ar: "وَالانْتِفَاعَ بِهِ،",
          en: "and benefit from it,",
          tokens: [
            { surface: "وَالانْتِفَاعَ", lemma: "انتفع", pos: "noun", features: "conj+acc.def", gloss: "and benefit" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "+3ms", gloss: "from it" }
          ]
        },
        {
          id: "qr2-60-065",
          ar: "وَسَيَكُوْنُ ذٰلِكَ (إِنْ شَاءَ اللهُ) فِيْ بِضْعِ سِنِيْنَ إِذَا تَقَدَّمْتَ فِي الْعِلْمِ.",
          en: "and that will be, if Allah wills, within a few years, once you have advanced in knowledge.",
          tokens: [
            { surface: "وَسَيَكُوْنُ", lemma: "كان", pos: "verb", features: "conj+impf.3ms", gloss: "and that will be" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "", gloss: "that" },
            { surface: "إِنْ", lemma: "إن", pos: "part", features: "", gloss: "if" },
            { surface: "شَاءَ", lemma: "شاء", pos: "verb", features: "perf.3ms", gloss: "wills" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", gloss: "Allah" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "بِضْعِ", lemma: "بضع", pos: "noun", features: "gen.constr", gloss: "a few" },
            { surface: "سِنِيْنَ", lemma: "سنة", pos: "noun", features: "gen.pl", gloss: "years" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", features: "", gloss: "when" },
            { surface: "تَقَدَّمْتَ", lemma: "تقدم", pos: "verb", features: "perf.2ms", gloss: "you advance" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "", gloss: "in" },
            { surface: "الْعِلْمِ", lemma: "علم", pos: "noun", features: "gen.def", gloss: "knowledge" }
          ]
        }
      ],
      checks: [
        {
          q: "مَا اسْمُ كِتَابِ مَالِكٍ الْمَشْهُوْرِ؟",
          options: ["الْمُوَطَّأُ", "صَحِيْحُ الْبُخَارِيّ", "الرِّسَالَةُ", "الأُمُّ"],
          answer: 0,
          qEn: "What is the name of Malik's famous book?",
          optionsEn: ["Al-Muwatta", "Sahih al-Bukhari", "Al-Risalah", "Al-Umm"]
        }
      ]
    },
    {
      en: "Malik passed away in the year one hundred seventy-nine.",
      sentences: [
        {
          id: "qr2-60-066",
          ar: "تُوُفِّيَ مَالِكٌ سَنَةَ تِسْعٍ وَسَبْعِيْنَ وَمِئَةٍ.",
          en: "Malik passed away in the year one hundred seventy-nine.",
          tokens: [
            { surface: "تُوُفِّيَ", lemma: "توفي", pos: "verb", features: "pass.perf.3ms", gloss: "passed away" },
            { surface: "مَالِكٌ", lemma: "مالك", pos: "proper", features: "nom", gloss: "Malik" },
            { surface: "سَنَةَ", lemma: "سنة", pos: "noun", features: "acc", gloss: "in the year" },
            { surface: "تِسْعٍ", lemma: "تسع", pos: "num", features: "gen", gloss: "nine" },
            { surface: "وَسَبْعِيْنَ", lemma: "سبعين", pos: "num", features: "conj+gen", gloss: "and seventy" },
            { surface: "وَمِئَةٍ", lemma: "مئة", pos: "num", features: "conj+gen", gloss: "and a hundred" }
          ]
        }
      ],
      checks: [
        {
          q: "فِيْ أَيِّ سَنَةٍ تُوُفِّيَ الإِمَامُ مَالِكٌ؟",
          options: ["سَنَةَ تِسْعٍ وَسَبْعِيْنَ وَمِئَةٍ", "سَنَةَ ثَلاَثٍ وَتِسْعِيْنَ", "سَنَةَ سَبْعٍ وَأَرْبَعِيْنَ وَمِئَةٍ", "سَنَةَ مِئَتَيْنِ"],
          answer: 0,
          qEn: "In what year did Imam Malik pass away?",
          optionsEn: ["The year 179 AH", "The year 93 AH", "The year 147 AH", "The year 200 AH"]
        }
      ]
    }
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "",
        post: "رَجُلٌ كُنْتُ أَتَعَلَّمُ مِنْهُ",
        en: "Rare was a man I used to learn from",
        options: ["قَلَّ", "قَلَّتْ", "قَلُّوا", "يَقِلُّ"],
        answer: 0,
        rationales: [
          "3rd person masculine singular, perfect — rare was.",
          "3rd person feminine singular — rare was (f.).",
          "3rd person masculine plural — rare were (they).",
          "3rd person masculine singular, imperfect — is rare."
        ]
      },
      {
        type: "cloze",
        pre: "فَـ",
        post: "عَقْرَبٌ سِتَّ عَشْرَةَ مَرَّةً",
        en: "and a scorpion stung him sixteen times",
        options: ["لَدَغَتْهُ", "لَدَغَهُ", "لَدَغْتُهُ", "يَلْدَغُهُ"],
        answer: 0,
        rationales: [
          "3rd person feminine singular, perfect + him — it (f.) stung him.",
          "3rd person masculine singular + him — he/it (m.) stung him.",
          "1st person singular + him — I stung him.",
          "3rd person masculine singular, imperfect — it stings him."
        ]
      },
      {
        type: "cloze",
        pre: "وَمُدَّتْ يَدُهُ حَتَّىٰ",
        post: "كَتِفُهُ",
        en: "his hand was stretched until his shoulder was dislocated",
        options: ["انْخَلَعَتْ", "انْخَلَعَ", "انْخَلَعْتُ", "يَنْخَلِعُ"],
        answer: 0,
        rationales: [
          "3rd person feminine singular, perfect — was dislocated (f., agreeing with كَتِف).",
          "3rd person masculine singular — was dislocated (m.).",
          "1st person singular — I was dislocated.",
          "3rd person masculine singular, imperfect — is dislocated."
        ]
      }
    ],
    shift: [
      {
        type: "shift",
        base: "دَخَلَ عَلَىٰ أَمِيْرِ الْمُؤْمِنِيْنَ",
        pre: "",
        post: "عَلَىٰ أَمِيْرِ الْمُؤْمِنِيْنَ",
        targetPerson: "أَنَا",
        targetEn: "I",
        options: ["دَخَلْتُ", "دَخَلَ", "دَخَلْنَا", "تَدْخُلُ"],
        answer: 0,
        rationales: [
          "1st person singular, perfect — I entered.",
          "3rd person masculine singular — he entered.",
          "1st person plural — we entered.",
          "2nd person masculine singular, imperfect — you enter."
        ]
      },
      {
        type: "shift",
        base: "سَمِعَ الزُّهْرِيَّ",
        pre: "",
        post: "الزُّهْرِيَّ",
        targetPerson: "هُمْ",
        targetEn: "they (m.)",
        options: ["سَمِعُوا", "سَمِعَتْ", "سَمِعْتُمْ", "يَسْمَعُ"],
        answer: 0,
        rationales: [
          "3rd person masculine plural, perfect — they heard.",
          "3rd person feminine singular — she heard.",
          "2nd person masculine plural — you (pl.) heard.",
          "3rd person masculine singular, imperfect — he hears."
        ]
      }
    ]
  }
};


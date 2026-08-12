// القراءة الراشدة, volume two, chapter 32 (printed heading "٣٢") --
// شَهَادَةُ الْيَتِيمِ -- "The Orphan's Witness".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 117-119 (PDF page
// index == printed page number in this book). Page 117 opens with volume
// two's own title/divider material above the "(٣٢)" chapter heading, then
// a photograph of the Prophet's ﷺ Mosque in Madinah captioned beneath it.
// Page 119 ends with the "✳ ✳ ✳" divider partway down the page, well
// before the printed page number, confirming the chapter is exactly three
// pages (117-119); chapter 33 "كِسْرَةٌ مِنَ الْخُبْزِ" begins fresh on 120.
//
// This is the first of nine chapters (32-40) filling the gap flagged in
// qiraah-v2/index.js's header comment: that book was created starting at
// chapter 41 to avoid a collision with concurrent work on 32-40. Per that
// comment's instruction, this chapter's entry is spliced into this book's
// index.js *before* ch41, in reading order.
//
// Sentence ids use this book's own "qr2-NN-NNN" convention (matching
// chapter-41.js etc.), not qiraah-v1's "qr1-NN-NNN".
//
// Lemma/homograph decisions, checked against both qiraah-v1 (ch1-31) and
// qiraah-v2 (ch41-55) via a full lemma-index grep before writing:
//   - "سَهْلٌ" (the orphan boy's proper name, "Sahl") clashes in pos with
//     the already-established "سهل" (pos "adj", "easy", reused throughout
//     qiraah-v1). Keyed "سهل-اسم" (pos "proper"), following the
//     proper-name-vs-adjective "-اسم" suffix precedent set by
//     qiraah-v1/chapter-31.js's "سعيد-اسم" (Sa'id the person vs. سعيد
//     "happy").
//   - "زَادَ" ("increased, added to/expanded [the mosque]") clashes in pos
//     with the already-established "زاد" (pos "noun", "provisions for a
//     journey"). Keyed "زاد-فعل" (pos "verb"), following the verb-vs-noun
//     "-فعل" suffix precedent (chapter-23.js's "ولد-فعل" etc., reused in
//     chapter-30.js's "قبل-فعل"/"طلب-فعل").
//   - "لَازِمٌ" ("necessary, essential [for the Muslims]") clashes in pos
//     with the already-established "لازم" (pos "verb", "remained closely
//     attached to", qiraah-v2/chapter-49.js). Keyed "لازم-صفة" (pos
//     "adj"), following the adjective-vs-other-pos "-صفة" suffix pattern
//     (qiraah-v2's own "سعيد-صفة"/"قاتل-صفة").
//   - "طَلَبَ" ("sent for, summoned Sahl and Suhayl") reuses
//     chapter-30.js's "طلب-فعل" (pos "verb", "to ask for, request") as-is
//     -- already the correct pos-disambiguated key, no new suffix needed.
//   - "أَذِنَ" ("Allah permitted the Messenger of Allah ﷺ to emigrate")
//     reuses the existing "أذن" key (pos "verb" both times, root أ ذ ن
//     both times -- its established gloss is "to give the call to
//     prayer"). Per the project's standing rule ("a new key is needed only
//     when the dict-level pos would conflict... not merely when the
//     gloss/sense differs"), this chapter's *local* lemmas entry for
//     "أذن" simply carries the sense actually used here ("to give
//     permission, allow") instead of redeclaring a suffixed key.
//   - "اللَّبِنَ" ("carried the sun-dried mud bricks") likewise reuses the
//     bare "لبن" key as a same-pos (noun), same-root (ل ب ن) homograph of
//     the already-established "لبن" = "milk" -- this chapter's local
//     lemmas entry overrides the gloss to the brick sense actually used.
//   - "اغْتَبِطُ" reuses chapter-23.js's "اغتبط" (pos "verb", root غ ب ط,
//     "to take joy, be delighted") verbatim, footnote and all -- the same
//     word recurs with an identical margin note in this book's source.
//   - "ثَلَاثُمِئَةٍ" reuses the already-established "ثلاثمئة" (pos "num",
//     "three hundred") unchanged.
export const CHAPTER = {
  id: "ch32",
  title: {
    ar: "شَهَادَةُ الْيَتِيمِ",
    en: "The Orphan's Witness"
  },
  pages: [117, 118, 119],
  newWords: [
    "صورة", "منور", "تاريخ", "اغتبط", "اشتعل", "حال", "هجرة", "هاجر",
    "رقة", "أسلم", "انتقل", "لازم-صفة", "قطب", "رحى", "أيوب", "مربد",
    "معاذ", "عفراء", "سهل-اسم", "سهيل", "أبى", "قعد", "مضلل", "مهاجر",
    "أمير", "مؤمنين", "زاد-فعل", "ملك", "شكل"
  ],
  lemmas: {
    "صورة": { root: "ص و ر", pos: "noun", gloss: "picture, image" },
    "منور": { root: "ن و ر", pos: "adj", gloss: "illuminated, radiant" },
    "تاريخ": { root: "أ ر خ", pos: "noun", gloss: "history" },
    "اغتبط": { root: "غ ب ط", pos: "verb", gloss: "to take joy, be delighted", book_note: "اغْتَبَطَ يَغْتَبِطُ: فَرِحَ بِالنعمة." },
    "اشتعل": { root: "ش ع ل", pos: "verb", gloss: "to blaze up, flare" },
    "حال": { root: "ح و ل", pos: "verb", gloss: "to bar, come between, prevent" },
    "هجرة": { root: "ه ج ر", pos: "noun", gloss: "the Hijrah, migration" },
    "هاجر": { root: "ه ج ر", pos: "verb", gloss: "to emigrate" },
    "رقة": { root: "ر ق ق", pos: "noun", gloss: "gentleness, tenderness" },
    "أسلم": { root: "س ل م", pos: "verb", gloss: "to embrace Islam, submit" },
    "انتقل": { root: "ن ق ل", pos: "verb", gloss: "to move, relocate" },
    "لازم-صفة": { root: "ل ز م", pos: "adj", gloss: "necessary, essential" },
    "قطب": { root: "ق ط ب", pos: "noun", gloss: "pivot, axis" },
    "رحى": { root: "ر ح ي", pos: "noun", gloss: "millstone" },
    "أيوب": { root: "", pos: "proper", gloss: "Ayyub (Abu Ayyub al-Ansari)" },
    "مربد": { root: "ر ب د", pos: "noun", gloss: "camel-yard, livestock enclosure" },
    "معاذ": { root: "", pos: "proper", gloss: "Mu'adh (a name)" },
    "عفراء": { root: "", pos: "proper", gloss: "Afra (a name)" },
    "سهل-اسم": { root: "", pos: "proper", gloss: "Sahl (a name)" },
    "سهيل": { root: "", pos: "proper", gloss: "Suhayl (a name)" },
    "أبى": { root: "أ ب ي", pos: "verb", gloss: "to refuse" },
    "قعد": { root: "ق ع د", pos: "verb", gloss: "to sit" },
    "مضلل": { root: "ض ل ل", pos: "adj", gloss: "misguided, misleading" },
    "مهاجر": { root: "ه ج ر", pos: "proper", gloss: "the Muhajirun (the emigrants from Makkah)" },
    "أمير": { root: "أ م ر", pos: "noun", gloss: "commander, prince" },
    "زاد-فعل": { root: "ز ي د", pos: "verb", gloss: "to increase, add to, expand" },
    "ملك": { root: "م ل ك", pos: "noun", gloss: "king" },
    "شكل": { root: "ش ك ل", pos: "noun", gloss: "shape, form" },
    "رأى": { root: "ر أ ي", pos: "verb", gloss: "to see" },
    "أمام": { root: "", pos: "noun", gloss: "in front, before" },
    "نبي": { root: "ن ب أ", pos: "noun", gloss: "prophet" },
    "مدينة": { root: "م د ن", pos: "noun", gloss: "city" },
    "خبر": { root: "خ ب ر", pos: "noun", gloss: "news, story, report" },
    "طفل": { root: "ط ف ل", pos: "noun", gloss: "child" },
    "مسلم": { root: "س ل م", pos: "noun", gloss: "Muslim" },
    "دعا": { root: "د ع و", pos: "verb", gloss: "to call, invite" },
    "نادى": { root: "ن د و", pos: "verb", gloss: "to call out, proclaim" },
    "إلٰه": { root: "أ ل ه", pos: "noun", gloss: "god, deity" },
    "غضب": { root: "غ ض ب", pos: "verb", gloss: "to become angry" },
    "غضب-اسم": { root: "غ ض ب", pos: "noun", gloss: "anger" },
    "عمل-اسم": { root: "ع م ل", pos: "noun", gloss: "deed, work" },
    "مسجد": { root: "س ج د", pos: "noun", gloss: "mosque" },
    "هل": { root: "", pos: "part", gloss: "do..? (question particle)" },
    "عرف": { root: "ع ر ف", pos: "verb", gloss: "to know" },
    "شيء": { root: "ش ي أ", pos: "noun", gloss: "thing, anything" },
    "إن": { root: "", pos: "part", gloss: "indeed" },
    "كل": { root: "ك ل ل", pos: "noun", gloss: "every, all" },
    "لما": { root: "", pos: "part", gloss: "when" },
    "ناس": { root: "ن و س", pos: "noun", gloss: "people" },
    "مكة": { root: "", pos: "proper", gloss: "Makkah" },
    "لا": { root: "", pos: "part", gloss: "no, not" },
    "إلا": { root: "", pos: "part", gloss: "except" },
    "عن": { root: "", pos: "prep", gloss: "from, about" },
    "بين": { root: "ب ي ن", pos: "prep", gloss: "between" },
    "أهل": { root: "أ ه ل", pos: "noun", gloss: "people, folk" },
    "قد": { root: "", pos: "part", gloss: "indeed, already" },
    "كثير": { root: "ك ث ر", pos: "adj", gloss: "many, much" },
    "قبل": { root: "ق ب ل", pos: "prep", gloss: "before" },
    "سكن": { root: "س ك ن", pos: "verb", gloss: "to settle, dwell" },
    "هنالك": { root: "", pos: "adv", gloss: "there" },
    "أحب": { root: "ح ب ب", pos: "verb", gloss: "to love, want" },
    "أن": { root: "", pos: "part", gloss: "to (+ subjunctive)" },
    "لأن": { root: "", pos: "conj", gloss: "because" },
    "دار": { root: "د و ر", pos: "verb", gloss: "to move around, circle" },
    "حول": { root: "ح و ل", pos: "prep", gloss: "around" },
    "حياة": { root: "ح ي ي", pos: "noun", gloss: "life" },
    "إسلامي": { root: "س ل م", pos: "adj", gloss: "Islamic" },
    "أب": { root: "أ ب و", pos: "noun", gloss: "father" },
    "يا": { root: "", pos: "part", gloss: "O (vocative)" },
    "قريش": { root: "", pos: "proper", gloss: "Quraysh (the tribe)" },
    "عبد": { root: "ع ب د", pos: "verb", gloss: "to worship" },
    "صنم": { root: "ص ن م", pos: "noun", gloss: "idol" },
    "كعبة": { root: "ك ع ب", pos: "proper", gloss: "the Kaaba" },
    "بنى": { root: "ب ن ي", pos: "verb", gloss: "to build" },
    "إبراهيم": { root: "", pos: "proper", gloss: "Ibrahim" },
    "إسماعيل": { root: "", pos: "proper", gloss: "Isma'il" },
    "عبادة": { root: "ع ب د", pos: "noun", gloss: "worship" },
    "وحد": { root: "و ح د", pos: "adv", gloss: "alone, by itself" },
    "ثلاثمئة": { root: "ث ل ث", pos: "num", gloss: "three hundred" },
    "ستون": { root: "س ت ت", pos: "num", gloss: "sixty" },
    "آذى": { root: "أ ذ ي", pos: "verb", gloss: "to harm, hurt" },
    "عذب": { root: "ع ذ ب", pos: "verb", gloss: "to torture, torment" },
    "صبر": { root: "ص ب ر", pos: "verb", gloss: "to be patient, endure" },
    "ثبت": { root: "ث ب ت", pos: "verb", gloss: "to stand firm, be steadfast" },
    "جبل": { root: "ج ب ل", pos: "noun", gloss: "mountain" },
    "منع": { root: "م ن ع", pos: "verb", gloss: "to bar, prevent" },
    "إسلام": { root: "س ل م", pos: "proper", gloss: "Islam" },
    "أذن": { root: "أ ذ ن", pos: "verb", gloss: "to permit, give permission" },
    "أرض": { root: "أ ر ض", pos: "noun", gloss: "land" },
    "طيب": { root: "ط ي ب", pos: "adj", gloss: "good, pleasant" },
    "لين": { root: "ل ي ن", pos: "adj", gloss: "soft, gentle" },
    "نازل": { root: "ن ز ل", pos: "adj", gloss: "staying, lodging" },
    "أنصاري": { root: "ن ص ر", pos: "adj", gloss: "of/belonging to the Ansar" },
    "ضيف": { root: "ض ي ف", pos: "noun", gloss: "guest" },
    "قريب": { root: "ق ر ب", pos: "adj", gloss: "near" },
    "أراد": { root: "ر و د", pos: "verb", gloss: "to want" },
    "ذلك": { root: "", pos: "dem", gloss: "that" },
    "مكان": { root: "ك و ن", pos: "noun", gloss: "place" },
    "رجل": { root: "ر ج ل", pos: "noun", gloss: "man" },
    "أنصار": { root: "ن ص ر", pos: "proper", gloss: "the Ansar (the Prophet's ﷺ Medinan helpers)" },
    "اسم": { root: "س م و", pos: "noun", gloss: "name" },
    "ابن": { root: "ب ن ي", pos: "noun", gloss: "son" },
    "يتيم": { root: "ي ت م", pos: "adj", gloss: "orphan(ed)" },
    "أحد": { root: "أ ح د", pos: "noun", gloss: "one, someone" },
    "ثاني": { root: "ث ن ي", pos: "adj", gloss: "second" },
    "طلب-فعل": { root: "ط ل ب", pos: "verb", gloss: "to ask for, request" },
    "حضر": { root: "ح ض ر", pos: "verb", gloss: "to be present, come" },
    "كلم": { root: "ك ل م", pos: "verb", gloss: "to speak to, address" },
    "أمر": { root: "أ م ر", pos: "noun", gloss: "matter, affair" },
    "ثمن": { root: "ث م ن", pos: "noun", gloss: "price" },
    "نشتري": { root: "ش ر ي", pos: "verb", gloss: "to buy" },
    "طاب": { root: "ط ي ب", pos: "verb", gloss: "to be pleasant, be content" },
    "نفس": { root: "ن ف س", pos: "noun", gloss: "self, soul" },
    "اشترى": { root: "ش ر ي", pos: "verb", gloss: "to buy" },
    "دفع": { root: "د ف ع", pos: "verb", gloss: "to pay, push" },
    "يد": { root: "ي د ي", pos: "noun", gloss: "hand" },
    "نقل": { root: "ن ق ل", pos: "verb", gloss: "to carry, transfer" },
    "لبن": { root: "ل ب ن", pos: "noun", gloss: "sun-dried mud brick" },
    "قائل": { root: "ق و ل", pos: "noun", gloss: "one who says, speaker" },
    "لئن": { root: "", pos: "part", gloss: "if indeed" },
    "عمل": { root: "ع م ل", pos: "verb", gloss: "to work, act" },
    "اللهم": { root: "", pos: "proper", gloss: "O Allah! (vocative form)" },
    "عيش": { root: "ع ي ش", pos: "noun", gloss: "life, living" },
    "آخرة": { root: "أ خ ر", pos: "noun", gloss: "the Hereafter" },
    "رحم": { root: "ر ح م", pos: "verb", gloss: "to have mercy on" },
    "مؤمنين": { root: "أ م ن", pos: "noun", gloss: "believers" },
    "عثمان": { root: "", pos: "proper", gloss: "Uthman (a name)" },
    "عفان": { root: "", pos: "proper", gloss: "Affan (a name)" },
    "بعد": { root: "", pos: "prep", gloss: "after" },
    "حتى": { root: "", pos: "part", gloss: "until" },
    "قال": { root: "ق و ل", pos: "verb", gloss: "to say" },
    "كان": { root: "ك و ن", pos: "verb", gloss: "to be" },
    "الله": { root: "", pos: "proper", gloss: "Allah" },
    "محمد": { root: "", pos: "proper", gloss: "Muhammad" },
    "رسول": { root: "ر س ل", pos: "noun", gloss: "messenger" },
    "ولد": { root: "و ل د", pos: "noun", gloss: "child, boy" },
    "بيت": { root: "ب ي ت", pos: "noun", gloss: "house" },
    "هو": { root: "", pos: "noun", gloss: "he" },
    "هما": { root: "", pos: "noun", gloss: "the two of them" },
    "من": { root: "", pos: "prep", gloss: "from, of" },
    "في": { root: "", pos: "prep", gloss: "in" },
    "إلى": { root: "", pos: "prep", gloss: "to" },
    "ل": { root: "", pos: "prep", gloss: "to, for" },
    "ب": { root: "", pos: "prep", gloss: "with, by" },
    "على": { root: "", pos: "prep", gloss: "on" },
    "هذا": { root: "", pos: "dem", gloss: "this" },
    "تلك": { root: "", pos: "dem", gloss: "that" },
    "الذي": { root: "", pos: "rel", gloss: "who, which" },
    "لكن": { root: "", pos: "conj", gloss: "but" }
  },
  paragraphs: [
    {
      en: "You see before you a picture of a mosque. This is the mosque of the Prophet ﷺ in radiant Madinah. Do you know anything of this mosque's story? It has a history that delights every Muslim child.",
      sentences: [
        {
          id: "qr2-32-001",
          ar: "تَرَوْنَ أَمَامَكُمْ صُوْرَةَ مَسْجِدٍ.",
          en: "You see before you a picture of a mosque.",
          tokens: [
            { surface: "تَرَوْنَ", lemma: "رأى", pos: "verb", features: "impf.2mp", root: "ر أ ي", gloss: "you (pl) see" },
            { surface: "أَمَامَكُمْ", lemma: "أمام", pos: "noun", features: "acc+2mp", root: "", gloss: "before you (pl)" },
            { surface: "صُوْرَةَ", lemma: "صورة", pos: "noun", features: "acc.constr", root: "ص و ر", gloss: "a picture of" },
            { surface: "مَسْجِدٍ", lemma: "مسجد", pos: "noun", features: "indef.gen", root: "س ج د", gloss: "a mosque" }
          ]
        },
        {
          id: "qr2-32-002",
          ar: "هٰذَا مَسْجِدُ النَّبِيِّ فِي الْمَدِيْنَةِ الْمُنَوَّرَةِ.",
          en: "This is the mosque of the Prophet ﷺ in radiant Madinah.",
          tokens: [
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem", root: "", gloss: "this" },
            { surface: "مَسْجِدُ", lemma: "مسجد", pos: "noun", features: "nom.constr", root: "س ج د", gloss: "the mosque of" },
            { surface: "النَّبِيِّ", lemma: "نبي", pos: "noun", features: "def.gen", root: "ن ب أ", gloss: "the Prophet" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْمَدِيْنَةِ", lemma: "مدينة", pos: "noun", features: "def.gen", root: "م د ن", gloss: "the city" },
            { surface: "الْمُنَوَّرَةِ", lemma: "منور", pos: "adj", features: "def.gen.f", root: "ن و ر", gloss: "the radiant" }
          ]
        },
        {
          id: "qr2-32-003",
          ar: "هَلْ تَعْرِفُوْنَ مِنْ خَبَرِ هٰذَا الْمَسْجِدِ شَيْئاً؟",
          en: "Do you know anything of this mosque's story?",
          tokens: [
            { surface: "هَلْ", lemma: "هل", pos: "part", features: "part", root: "", gloss: "do..? (question particle)" },
            { surface: "تَعْرِفُوْنَ", lemma: "عرف", pos: "verb", features: "impf.2mp", root: "ع ر ف", gloss: "you (pl) know" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "خَبَرِ", lemma: "خبر", pos: "noun", features: "gen.constr", root: "خ ب ر", gloss: "the story of" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem", root: "", gloss: "this" },
            { surface: "الْمَسْجِدِ", lemma: "مسجد", pos: "noun", features: "def.gen", root: "س ج د", gloss: "the mosque" },
            { surface: "شَيْئاً", lemma: "شيء", pos: "noun", features: "indef.acc", root: "ش ي أ", gloss: "anything" }
          ]
        },
        {
          id: "qr2-32-004",
          ar: "إِنَّ لَهُ تَارِيْخاً يَغْتَبِطُ بِهِ كُلُّ طِفْلٍ مُسْلِمٍ.",
          en: "It has a history that delights every Muslim child.",
          tokens: [
            { surface: "إِنَّ", lemma: "إن", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "it has" },
            { surface: "تَارِيْخاً", lemma: "تاريخ", pos: "noun", features: "indef.acc", root: "أ ر خ", gloss: "a history" },
            { surface: "يَغْتَبِطُ", lemma: "اغتبط", pos: "verb", features: "impf.3ms", root: "غ ب ط", gloss: "delights" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "prep+3ms", root: "", gloss: "in it" },
            { surface: "كُلُّ", lemma: "كل", pos: "noun", features: "nom.constr", root: "ك ل ل", gloss: "every" },
            { surface: "طِفْلٍ", lemma: "طفل", pos: "noun", features: "indef.gen", root: "ط ف ل", gloss: "child" },
            { surface: "مُسْلِمٍ", lemma: "مسلم", pos: "noun", features: "indef.gen", root: "س ل م", gloss: "Muslim" }
          ]
        }
      ],
      checks: [
        {
          q: "أَيْنَ يَقَعُ الْمَسْجِدُ الَّذِيْ فِي الصُّوْرَةِ؟",
          options: ["فِي الْمَدِيْنَةِ الْمُنَوَّرَةِ", "فِيْ مَكَّةَ الْمُكَرَّمَةِ", "فِي الْقُدْسِ"],
          answer: 0,
          qEn: "Where is the mosque in the picture located?",
          optionsEn: ["In radiant Madinah", "In noble Makkah", "In Jerusalem"]
        }
      ]
    },
    {
      en: "When the Messenger of Allah ﷺ called the people to Allah in Makkah and proclaimed, \"There is no god but Allah, Muhammad is the Messenger of Allah,\" Quraysh grew angry. They worshipped idols, kept in the Kaaba that Ibrahim and Isma'il (peace be upon them) had built for the worship of Allah alone -- three hundred and sixty idols stood in that Kaaba. So Quraysh blazed with rage, harmed the Messenger of Allah ﷺ, and tortured the Muslims; but the Messenger of Allah ﷺ endured, and the Muslims endured, standing firm against them like mountains.",
      sentences: [
        {
          id: "qr2-32-005",
          ar: "لَمَّا دَعَا رَسُوْلُ اللهِ النَّاسَ إِلَى اللهِ فِيْ مَكَّةَ، وَنَادَىٰ فِي النَّاسِ: «لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُوْلُ اللهِ» غَضِبَتْ قُرَيْشٌ.",
          en: "When the Messenger of Allah ﷺ called the people to Allah in Makkah, and proclaimed among the people, \"There is no god but Allah, Muhammad is the Messenger of Allah,\" Quraysh grew angry.",
          tokens: [
            { surface: "لَمَّا", lemma: "لما", pos: "part", features: "part", root: "", gloss: "when" },
            { surface: "دَعَا", lemma: "دعا", pos: "verb", features: "perf.3ms", root: "د ع و", gloss: "called" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "النَّاسَ", lemma: "ناس", pos: "noun", features: "def.acc", root: "ن و س", gloss: "the people" },
            { surface: "إِلَى", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "مَكَّةَ", lemma: "مكة", pos: "proper", features: "gen", root: "", gloss: "Makkah" },
            { surface: "وَنَادَىٰ", lemma: "نادى", pos: "verb", features: "conj+perf.3ms", root: "ن د و", gloss: "and proclaimed" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "among" },
            { surface: "النَّاسِ", lemma: "ناس", pos: "noun", features: "def.gen", root: "ن و س", gloss: "the people" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "no" },
            { surface: "إِلٰهَ", lemma: "إلٰه", pos: "noun", features: "indef.acc", root: "أ ل ه", gloss: "god" },
            { surface: "إِلَّا", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", root: "", gloss: "Allah" },
            { surface: "مُحَمَّدٌ", lemma: "محمد", pos: "proper", features: "nom", root: "", gloss: "Muhammad" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "غَضِبَتْ", lemma: "غضب", pos: "verb", features: "perf.3fs", root: "غ ض ب", gloss: "grew angry" },
            { surface: "قُرَيْشٌ", lemma: "قريش", pos: "proper", features: "nom", root: "", gloss: "Quraysh" }
          ]
        },
        {
          id: "qr2-32-006",
          ar: "وَكَانَتْ تَعْبُدُ الأَصْنَامَ.",
          en: "They used to worship idols.",
          tokens: [
            { surface: "وَكَانَتْ", lemma: "كان", pos: "verb", features: "conj+perf.3fs", root: "ك و ن", gloss: "and she used to" },
            { surface: "تَعْبُدُ", lemma: "عبد", pos: "verb", features: "impf.3fs", root: "ع ب د", gloss: "worship" },
            { surface: "الأَصْنَامَ", lemma: "صنم", pos: "noun", features: "pl.def.acc", root: "ص ن م", gloss: "the idols" }
          ]
        },
        {
          id: "qr2-32-007",
          ar: "وَكَانَتْ فِي الْكَعْبَةِ الَّتِيْ بَنَاهَا إِبْرَاهِيْمُ وَإِسْمَاعِيْلُ لِعِبَادَةِ اللهِ وَحْدَهُ.",
          en: "And they were in the Kaaba, which Ibrahim and Isma'il had built for the worship of Allah alone.",
          tokens: [
            { surface: "وَكَانَتْ", lemma: "كان", pos: "verb", features: "conj+perf.3fs", root: "ك و ن", gloss: "and they were" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْكَعْبَةِ", lemma: "كعبة", pos: "proper", features: "def.gen", root: "ك ع ب", gloss: "the Kaaba" },
            { surface: "الَّتِيْ", lemma: "الذي", pos: "rel", features: "rel", root: "", gloss: "which" },
            { surface: "بَنَاهَا", lemma: "بنى", pos: "verb", features: "perf.3ms+3fs", root: "ب ن ي", gloss: "built it" },
            { surface: "إِبْرَاهِيْمُ", lemma: "إبراهيم", pos: "proper", features: "nom", root: "", gloss: "Ibrahim" },
            { surface: "وَإِسْمَاعِيْلُ", lemma: "إسماعيل", pos: "proper", features: "conj+nom", root: "", gloss: "and Isma'il" },
            { surface: "لِعِبَادَةِ", lemma: "عبادة", pos: "noun", features: "prep+gen.constr", root: "ع ب د", gloss: "for the worship of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "وَحْدَهُ", lemma: "وحد", pos: "adv", features: "acc+3ms", root: "و ح د", gloss: "alone" }
          ]
        },
        {
          id: "qr2-32-008",
          ar: "كَانَ فِيْ تِلْكَ الْكَعْبَةِ ثَلَاثُمِئَةٍ وَسِتُّوْنَ صَنَماً.",
          en: "In that Kaaba there were three hundred and sixty idols.",
          tokens: [
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "there was" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "تِلْكَ", lemma: "تلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "الْكَعْبَةِ", lemma: "كعبة", pos: "proper", features: "def.gen", root: "ك ع ب", gloss: "the Kaaba" },
            { surface: "ثَلَاثُمِئَةٍ", lemma: "ثلاثمئة", pos: "num", features: "indef.gen", root: "ث ل ث", gloss: "three hundred" },
            { surface: "وَسِتُّوْنَ", lemma: "ستون", pos: "num", features: "conj+nom", root: "س ت ت", gloss: "and sixty" },
            { surface: "صَنَماً", lemma: "صنم", pos: "noun", features: "indef.acc", root: "ص ن م", gloss: "idols" }
          ]
        },
        {
          id: "qr2-32-009",
          ar: "فَاشْتَعَلَتْ قُرَيْشٌ غَضَباً وَآذَوْا رَسُوْلَ اللهِ وَعَذَّبُوا الْمُسْلِمِيْنَ.",
          en: "So Quraysh blazed with rage, harmed the Messenger of Allah ﷺ, and tortured the Muslims.",
          tokens: [
            { surface: "فَاشْتَعَلَتْ", lemma: "اشتعل", pos: "verb", features: "conj+perf.3fs", root: "ش ع ل", gloss: "so blazed" },
            { surface: "قُرَيْشٌ", lemma: "قريش", pos: "proper", features: "nom", root: "", gloss: "Quraysh" },
            { surface: "غَضَباً", lemma: "غضب-اسم", pos: "noun", features: "indef.acc", root: "غ ض ب", gloss: "with anger" },
            { surface: "وَآذَوْا", lemma: "آذى", pos: "verb", features: "conj+perf.3mp", root: "أ ذ ي", gloss: "and harmed" },
            { surface: "رَسُوْلَ", lemma: "رسول", pos: "noun", features: "acc.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "وَعَذَّبُوا", lemma: "عذب", pos: "verb", features: "conj+perf.3mp", root: "ع ذ ب", gloss: "and tortured" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.acc", root: "س ل م", gloss: "the Muslims" }
          ]
        },
        {
          id: "qr2-32-010",
          ar: "فَصَبَرَ رَسُوْلُ اللهِ وَصَبَرَ الْمُسْلِمُوْنَ وَثَبَتُوْا لَهُمْ كَالْجِبَالِ.",
          en: "So the Messenger of Allah ﷺ endured, the Muslims endured, and they stood firm against them like mountains.",
          tokens: [
            { surface: "فَصَبَرَ", lemma: "صبر", pos: "verb", features: "conj+perf.3ms", root: "ص ب ر", gloss: "so endured" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "وَصَبَرَ", lemma: "صبر", pos: "verb", features: "conj+perf.3ms", root: "ص ب ر", gloss: "and endured" },
            { surface: "الْمُسْلِمُوْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.nom", root: "س ل م", gloss: "the Muslims" },
            { surface: "وَثَبَتُوْا", lemma: "ثبت", pos: "verb", features: "conj+perf.3mp", root: "ث ب ت", gloss: "and stood firm" },
            { surface: "لَهُمْ", lemma: "ل", pos: "prep", features: "prep+3mp", root: "", gloss: "against them" },
            { surface: "كَالْجِبَالِ", lemma: "جبل", pos: "noun", features: "prep+pl.def.gen", root: "ج ب ل", gloss: "like the mountains" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا غَضِبَتْ قُرَيْشٌ عَلَى النَّبِيِّ ﷺ؟",
          options: ["لِأَنَّهُ دَعَاهُمْ إِلَىٰ عِبَادَةِ اللهِ وَحْدَهُ", "لِأَنَّهُ سَافَرَ إِلَى الْمَدِيْنَةِ", "لِأَنَّهُ بَنَى الْكَعْبَةَ"],
          answer: 0,
          qEn: "Why did Quraysh grow angry at the Prophet ﷺ?",
          optionsEn: ["Because he called them to worship Allah alone", "Because he traveled to Madinah", "Because he built the Kaaba"]
        }
      ]
    },
    {
      en: "But Quraysh kept barring the people from Islam and coming between the Muslims and the worship of Allah, so Allah permitted the Messenger of Allah ﷺ to emigrate. He emigrated to Madinah, and the Muslims emigrated too. Madinah was a good land for Islam -- its people had gentleness and tenderness, and many of them had already accepted Islam before the Hijrah.",
      sentences: [
        {
          id: "qr2-32-011",
          ar: "وَلٰكِنَّ قُرَيْشاً كَانُوْا يَمْنَعُوْنَ النَّاسَ عَنِ الإِسْلَامِ، وَيَحُوْلُوْنَ بَيْنَ الْمُسْلِمِيْنَ وَعِبَادَةِ اللهِ.",
          en: "But Quraysh kept barring the people from Islam, and coming between the Muslims and the worship of Allah.",
          tokens: [
            { surface: "وَلٰكِنَّ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "قُرَيْشاً", lemma: "قريش", pos: "proper", features: "acc", root: "", gloss: "Quraysh" },
            { surface: "كَانُوْا", lemma: "كان", pos: "verb", features: "perf.3mp", root: "ك و ن", gloss: "kept" },
            { surface: "يَمْنَعُوْنَ", lemma: "منع", pos: "verb", features: "impf.3mp", root: "م ن ع", gloss: "barring" },
            { surface: "النَّاسَ", lemma: "ناس", pos: "noun", features: "def.acc", root: "ن و س", gloss: "the people" },
            { surface: "عَنِ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الإِسْلَامِ", lemma: "إسلام", pos: "proper", features: "def.gen", root: "س ل م", gloss: "Islam" },
            { surface: "وَيَحُوْلُوْنَ", lemma: "حال", pos: "verb", features: "conj+impf.3mp", root: "ح و ل", gloss: "and coming between" },
            { surface: "بَيْنَ", lemma: "بين", pos: "prep", features: "prep", root: "ب ي ن", gloss: "between" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.gen", root: "س ل م", gloss: "the Muslims" },
            { surface: "وَعِبَادَةِ", lemma: "عبادة", pos: "noun", features: "conj+gen.constr", root: "ع ب د", gloss: "and the worship of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-32-012",
          ar: "فَأَذِنَ اللهُ لِرَسُوْلِ اللهِ بِالْهِجْرَةِ.",
          en: "So Allah permitted the Messenger of Allah ﷺ to emigrate.",
          tokens: [
            { surface: "فَأَذِنَ", lemma: "أذن", pos: "verb", features: "conj+perf.3ms", root: "أ ذ ن", gloss: "so permitted" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", root: "", gloss: "Allah" },
            { surface: "لِرَسُوْلِ", lemma: "رسول", pos: "noun", features: "prep+gen.constr", root: "ر س ل", gloss: "to the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "بِالْهِجْرَةِ", lemma: "هجرة", pos: "noun", features: "prep+def.gen", root: "ه ج ر", gloss: "to emigrate" }
          ]
        },
        {
          id: "qr2-32-013",
          ar: "فَهَاجَرَ إِلَى الْمَدِيْنَةِ وَهَاجَرَ الْمُسْلِمُوْنَ.",
          en: "So he emigrated to Madinah, and the Muslims emigrated too.",
          tokens: [
            { surface: "فَهَاجَرَ", lemma: "هاجر", pos: "verb", features: "conj+perf.3ms", root: "ه ج ر", gloss: "so he emigrated" },
            { surface: "إِلَى", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الْمَدِيْنَةِ", lemma: "مدينة", pos: "noun", features: "def.gen", root: "م د ن", gloss: "Madinah" },
            { surface: "وَهَاجَرَ", lemma: "هاجر", pos: "verb", features: "conj+perf.3ms", root: "ه ج ر", gloss: "and emigrated" },
            { surface: "الْمُسْلِمُوْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.nom", root: "س ل م", gloss: "the Muslims" }
          ]
        },
        {
          id: "qr2-32-014",
          ar: "وَكَانَتِ الْمَدِيْنَةُ أَرْضاً طَيِّبَةً لِلإِسْلَامِ، فِيْ أَهْلِهَا لِيْنٌ وَرِقَّةٌ.",
          en: "Madinah was a good land for Islam; its people had gentleness and tenderness.",
          tokens: [
            { surface: "وَكَانَتِ", lemma: "كان", pos: "verb", features: "conj+perf.3fs", root: "ك و ن", gloss: "and was" },
            { surface: "الْمَدِيْنَةُ", lemma: "مدينة", pos: "noun", features: "def.nom", root: "م د ن", gloss: "Madinah" },
            { surface: "أَرْضاً", lemma: "أرض", pos: "noun", features: "indef.acc", root: "أ ر ض", gloss: "a land" },
            { surface: "طَيِّبَةً", lemma: "طيب", pos: "adj", features: "indef.acc.f", root: "ط ي ب", gloss: "good" },
            { surface: "لِلإِسْلَامِ", lemma: "إسلام", pos: "proper", features: "prep+def.gen", root: "س ل م", gloss: "for Islam" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "أَهْلِهَا", lemma: "أهل", pos: "noun", features: "gen.constr+3fs", root: "أ ه ل", gloss: "its people" },
            { surface: "لِيْنٌ", lemma: "لين", pos: "adj", features: "indef.nom", root: "ل ي ن", gloss: "gentleness" },
            { surface: "وَرِقَّةٌ", lemma: "رقة", pos: "noun", features: "conj+indef.nom", root: "ر ق ق", gloss: "and tenderness" }
          ]
        },
        {
          id: "qr2-32-015",
          ar: "قَدْ أَسْلَمَ مِنْهُمْ كَثِيْرٌ قَبْلَ الْهِجْرَةِ.",
          en: "Many of them had already accepted Islam before the Hijrah.",
          tokens: [
            { surface: "قَدْ", lemma: "قد", pos: "part", features: "part", root: "", gloss: "already" },
            { surface: "أَسْلَمَ", lemma: "أسلم", pos: "verb", features: "perf.3ms", root: "س ل م", gloss: "accepted Islam" },
            { surface: "مِنْهُمْ", lemma: "من", pos: "prep", features: "prep+3mp", root: "", gloss: "of them" },
            { surface: "كَثِيْرٌ", lemma: "كثير", pos: "adj", features: "indef.nom", root: "ك ث ر", gloss: "many" },
            { surface: "قَبْلَ", lemma: "قبل", pos: "prep", features: "prep", root: "ق ب ل", gloss: "before" },
            { surface: "الْهِجْرَةِ", lemma: "هجرة", pos: "noun", features: "def.gen", root: "ه ج ر", gloss: "the Hijrah" }
          ]
        }
      ],
      checks: [
        {
          q: "إِلَى أَيْنَ هَاجَرَ رَسُوْلُ اللهِ ﷺ وَالْمُسْلِمُوْنَ؟",
          options: ["إِلَى الْمَدِيْنَةِ", "إِلَى مَكَّةَ", "إِلَى الشَّامِ"],
          answer: 0,
          qEn: "Where did the Messenger of Allah ﷺ and the Muslims emigrate to?",
          optionsEn: ["To Madinah", "To Makkah", "To Syria"]
        }
      ]
    },
    {
      en: "When the Prophet ﷺ moved from Makkah to Madinah and settled there, he wanted to build a mosque, because the mosque is essential for the Muslims -- it is a pivot around which the millstone of Islamic life turns.",
      sentences: [
        {
          id: "qr2-32-016",
          ar: "وَلَمَّا انْتَقَلَ النَّبِيُّ مِنْ مَكَّةَ إِلَى الْمَدِيْنَةِ وَسَكَنَ هُنَالِكَ، أَحَبَّ أَنْ يَبْنِيَ مَسْجِداً.",
          en: "When the Prophet ﷺ moved from Makkah to Madinah and settled there, he wanted to build a mosque.",
          tokens: [
            { surface: "وَلَمَّا", lemma: "لما", pos: "part", features: "conj+part", root: "", gloss: "and when" },
            { surface: "انْتَقَلَ", lemma: "انتقل", pos: "verb", features: "perf.3ms", root: "ن ق ل", gloss: "moved" },
            { surface: "النَّبِيُّ", lemma: "نبي", pos: "noun", features: "def.nom", root: "ن ب أ", gloss: "the Prophet" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "مَكَّةَ", lemma: "مكة", pos: "proper", features: "gen", root: "", gloss: "Makkah" },
            { surface: "إِلَى", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الْمَدِيْنَةِ", lemma: "مدينة", pos: "noun", features: "def.gen", root: "م د ن", gloss: "Madinah" },
            { surface: "وَسَكَنَ", lemma: "سكن", pos: "verb", features: "conj+perf.3ms", root: "س ك ن", gloss: "and settled" },
            { surface: "هُنَالِكَ", lemma: "هنالك", pos: "adv", features: "adv", root: "", gloss: "there" },
            { surface: "أَحَبَّ", lemma: "أحب", pos: "verb", features: "perf.3ms", root: "ح ب ب", gloss: "he wanted" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "يَبْنِيَ", lemma: "بنى", pos: "verb", features: "subj.3ms", root: "ب ن ي", gloss: "build" },
            { surface: "مَسْجِداً", lemma: "مسجد", pos: "noun", features: "indef.acc", root: "س ج د", gloss: "a mosque" }
          ]
        },
        {
          id: "qr2-32-017",
          ar: "لِأَنَّ الْمَسْجِدَ لَازِمٌ لِلْمُسْلِمِيْنَ.",
          en: "Because the mosque is essential for the Muslims.",
          tokens: [
            { surface: "لِأَنَّ", lemma: "لأن", pos: "conj", features: "conj", root: "", gloss: "because" },
            { surface: "الْمَسْجِدَ", lemma: "مسجد", pos: "noun", features: "def.acc", root: "س ج د", gloss: "the mosque" },
            { surface: "لَازِمٌ", lemma: "لازم-صفة", pos: "adj", features: "indef.nom", root: "ل ز م", gloss: "essential" },
            { surface: "لِلْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "prep+pl.def.gen", root: "س ل م", gloss: "for the Muslims" }
          ]
        },
        {
          id: "qr2-32-018",
          ar: "وَهُوَ قُطْبٌ يَدُوْرُ حَوْلَهُ رَحَى الْحَيَاةِ الإِسْلَامِيَّةِ.",
          en: "It is a pivot around which the millstone of Islamic life turns.",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+nom", root: "", gloss: "and it" },
            { surface: "قُطْبٌ", lemma: "قطب", pos: "noun", features: "indef.nom", root: "ق ط ب", gloss: "a pivot" },
            { surface: "يَدُوْرُ", lemma: "دار", pos: "verb", features: "impf.3ms", root: "د و ر", gloss: "turns" },
            { surface: "حَوْلَهُ", lemma: "حول", pos: "prep", features: "acc+3ms", root: "ح و ل", gloss: "around it" },
            { surface: "رَحَى", lemma: "رحى", pos: "noun", features: "nom.constr", root: "ر ح ي", gloss: "the millstone of" },
            { surface: "الْحَيَاةِ", lemma: "حياة", pos: "noun", features: "def.gen.constr", root: "ح ي ي", gloss: "the life of" },
            { surface: "الإِسْلَامِيَّةِ", lemma: "إسلامي", pos: "adj", features: "def.gen.f", root: "س ل م", gloss: "Islamic" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا أَرَادَ النَّبِيُّ ﷺ أَنْ يَبْنِيَ مَسْجِداً فِي الْمَدِيْنَةِ؟",
          options: ["لِأَنَّ الْمَسْجِدَ لَازِمٌ لِلْمُسْلِمِيْنَ", "لِأَنَّهُ كَانَ يُحِبُّ الْبِنَاءَ", "لِأَنَّهُ لَمْ يَجِدْ بَيْتاً"],
          answer: 0,
          qEn: "Why did the Prophet ﷺ want to build a mosque in Madinah?",
          optionsEn: ["Because the mosque is essential for the Muslims", "Because he loved construction", "Because he could not find a house"]
        }
      ]
    },
    {
      en: "The Prophet ﷺ was staying in the house of Abu Ayyub al-Ansari (may Allah be pleased with him), a guest to him. Near his house was a camel-yard, so the Messenger of Allah ﷺ wanted to build the mosque there, and asked: \"Whose is this camel-yard?\"",
      sentences: [
        {
          id: "qr2-32-019",
          ar: "وَكَانَ النَّبِيُّ نَازِلاً فِيْ بَيْتِ أَبِيْ أَيُّوْبَ الأَنْصَارِيِّ، وَكَانَ ضَيْفاً عَلَيْهِ.",
          en: "The Prophet ﷺ was staying in the house of Abu Ayyub al-Ansari, and was a guest to him.",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "النَّبِيُّ", lemma: "نبي", pos: "noun", features: "def.nom", root: "ن ب أ", gloss: "the Prophet" },
            { surface: "نَازِلاً", lemma: "نازل", pos: "adj", features: "indef.acc", root: "ن ز ل", gloss: "staying" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "بَيْتِ", lemma: "بيت", pos: "noun", features: "gen.constr", root: "ب ي ت", gloss: "the house of" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "gen.constr", root: "أ ب و", gloss: "Abu" },
            { surface: "أَيُّوْبَ", lemma: "أيوب", pos: "proper", features: "gen", root: "", gloss: "Ayyub" },
            { surface: "الأَنْصَارِيِّ", lemma: "أنصاري", pos: "adj", features: "def.gen", root: "ن ص ر", gloss: "al-Ansari" },
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "ضَيْفاً", lemma: "ضيف", pos: "noun", features: "indef.acc", root: "ض ي ف", gloss: "a guest" },
            { surface: "عَلَيْهِ", lemma: "على", pos: "prep", features: "prep+3ms", root: "", gloss: "to him" }
          ]
        },
        {
          id: "qr2-32-020",
          ar: "وَكَانَ قَرِيْباً مِنْ بَيْتِهِ مِرْبَدٌ.",
          en: "Near his house was a camel-yard.",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and there was" },
            { surface: "قَرِيْباً", lemma: "قريب", pos: "adj", features: "indef.acc", root: "ق ر ب", gloss: "near" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "بَيْتِهِ", lemma: "بيت", pos: "noun", features: "gen.constr+3ms", root: "ب ي ت", gloss: "his house" },
            { surface: "مِرْبَدٌ", lemma: "مربد", pos: "noun", features: "indef.nom", root: "ر ب د", gloss: "a camel-yard" }
          ]
        },
        {
          id: "qr2-32-021",
          ar: "فَأَرَادَ رَسُوْلُ اللهِ أَنْ يَبْنِيَ الْمَسْجِدَ فِيْ ذٰلِكَ الْمَكَانِ.",
          en: "So the Messenger of Allah ﷺ wanted to build the mosque in that place.",
          tokens: [
            { surface: "فَأَرَادَ", lemma: "أراد", pos: "verb", features: "conj+perf.3ms", root: "ر و د", gloss: "so wanted" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "يَبْنِيَ", lemma: "بنى", pos: "verb", features: "subj.3ms", root: "ب ن ي", gloss: "build" },
            { surface: "الْمَسْجِدَ", lemma: "مسجد", pos: "noun", features: "def.acc", root: "س ج د", gloss: "the mosque" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "الْمَكَانِ", lemma: "مكان", pos: "noun", features: "def.gen", root: "ك و ن", gloss: "the place" }
          ]
        },
        {
          id: "qr2-32-022",
          ar: "قَالَ رَسُوْلُ اللهِ: لِمَنْ هٰذَا الْمِرْبَدُ؟",
          en: "The Messenger of Allah ﷺ said: \"Whose is this camel-yard?\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "لِمَنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "whose" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem", root: "", gloss: "this" },
            { surface: "الْمِرْبَدُ", lemma: "مربد", pos: "noun", features: "def.nom", root: "ر ب د", gloss: "the camel-yard" }
          ]
        }
      ],
      checks: [
        {
          q: "فِيْ بَيْتِ مَنْ كَانَ النَّبِيُّ ﷺ نَازِلاً فِي الْمَدِيْنَةِ؟",
          options: ["أَبِيْ أَيُّوْبَ الأَنْصَارِيِّ", "مُعَاذِ بْنِ عَفْرَاءَ", "سَهْلٍ وَسُهَيْلٍ"],
          answer: 0,
          qEn: "In whose house was the Prophet ﷺ staying in Madinah?",
          optionsEn: ["Abu Ayyub al-Ansari's", "Mu'adh ibn Afra's", "Sahl and Suhayl's"]
        }
      ]
    },
    {
      en: "A man from the Ansar named Mu'adh ibn Afra said: \"It belongs, O Messenger of Allah, to two orphans.\" The name of one of them is Sahl, and the name of the second is Suhayl.",
      sentences: [
        {
          id: "qr2-32-023",
          ar: "قَالَ رَجُلٌ مِنَ الأَنْصَارِ اسْمُهُ مُعَاذُ بْنُ عَفْرَاءَ: هُوَ يَا رَسُوْلَ اللهِ! لِيَتِيْمَيْنِ.",
          en: "A man from the Ansar named Mu'adh ibn Afra said: \"It belongs, O Messenger of Allah, to two orphans.\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "رَجُلٌ", lemma: "رجل", pos: "noun", features: "indef.nom", root: "ر ج ل", gloss: "a man" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الأَنْصَارِ", lemma: "أنصار", pos: "proper", features: "def.gen", root: "ن ص ر", gloss: "the Ansar" },
            { surface: "اسْمُهُ", lemma: "اسم", pos: "noun", features: "nom.constr+3ms", root: "س م و", gloss: "his name" },
            { surface: "مُعَاذُ", lemma: "معاذ", pos: "proper", features: "nom.constr", root: "", gloss: "Mu'adh" },
            { surface: "بْنُ", lemma: "ابن", pos: "noun", features: "nom.constr", root: "ب ن ي", gloss: "son of" },
            { surface: "عَفْرَاءَ", lemma: "عفراء", pos: "proper", features: "gen", root: "", gloss: "Afra" },
            { surface: "هُوَ", lemma: "هو", pos: "noun", features: "nom", root: "", gloss: "it (is)" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "رَسُوْلَ", lemma: "رسول", pos: "noun", features: "acc.constr", root: "ر س ل", gloss: "Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "لِيَتِيْمَيْنِ", lemma: "يتيم", pos: "adj", features: "prep+indef.gen.du", root: "ي ت م", gloss: "to two orphans" }
          ]
        },
        {
          id: "qr2-32-024",
          ar: "اسْمُ أَحَدِهِمَا سَهْلٌ واسمُ الثَّانِيْ سُهَيْلٌ.",
          en: "The name of one of them is Sahl, and the name of the second is Suhayl.",
          tokens: [
            { surface: "اسْمُ", lemma: "اسم", pos: "noun", features: "nom.constr", root: "س م و", gloss: "the name of" },
            { surface: "أَحَدِهِمَا", lemma: "أحد", pos: "noun", features: "gen.constr+3md", root: "أ ح د", gloss: "one of them (dual)" },
            { surface: "سَهْلٌ", lemma: "سهل-اسم", pos: "proper", features: "nom", root: "", gloss: "Sahl" },
            { surface: "واسمُ", lemma: "اسم", pos: "noun", features: "conj+nom.constr", root: "س م و", gloss: "and the name of" },
            { surface: "الثَّانِيْ", lemma: "ثاني", pos: "adj", features: "def.gen", root: "ث ن ي", gloss: "the second" },
            { surface: "سُهَيْلٌ", lemma: "سهيل", pos: "proper", features: "nom", root: "", gloss: "Suhayl" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَنْ كَانَ الْمِرْبَدُ الَّذِيْ أَرَادَ النَّبِيُّ ﷺ أَنْ يَبْنِيَ فِيْهِ الْمَسْجِدَ؟",
          options: ["لِيَتِيْمَيْنِ اسْمُهُمَا سَهْلٌ وَسُهَيْلٌ", "لِمُعَاذِ بْنِ عَفْرَاءَ", "لِأَبِيْ أَيُّوْبَ الأَنْصَارِيِّ"],
          answer: 0,
          qEn: "Whose was the camel-yard the Prophet ﷺ wanted to build the mosque in?",
          optionsEn: ["Two orphans' named Sahl and Suhayl", "Mu'adh ibn Afra's", "Abu Ayyub al-Ansari's"]
        }
      ]
    },
    {
      en: "The Messenger of Allah ﷺ sent for Sahl and Suhayl, who were two orphan boys. When they came, the Messenger of Allah ﷺ spoke to them about the camel-yard and its price.",
      sentences: [
        {
          id: "qr2-32-025",
          ar: "طَلَبَ رَسُوْلُ اللهِ سَهْلاً وَسُهَيْلاً، وَهُمَا وَلَدَانِ يَتِيْمَانِ.",
          en: "The Messenger of Allah ﷺ sent for Sahl and Suhayl, who were two orphan boys.",
          tokens: [
            { surface: "طَلَبَ", lemma: "طلب-فعل", pos: "verb", features: "perf.3ms", root: "ط ل ب", gloss: "sent for" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "سَهْلاً", lemma: "سهل-اسم", pos: "proper", features: "acc", root: "", gloss: "Sahl" },
            { surface: "وَسُهَيْلاً", lemma: "سهيل", pos: "proper", features: "conj+acc", root: "", gloss: "and Suhayl" },
            { surface: "وَهُمَا", lemma: "هما", pos: "noun", features: "conj+nom", root: "", gloss: "and they (two)" },
            { surface: "وَلَدَانِ", lemma: "ولد", pos: "noun", features: "indef.nom.du", root: "و ل د", gloss: "two boys" },
            { surface: "يَتِيْمَانِ", lemma: "يتيم", pos: "adj", features: "indef.nom.du", root: "ي ت م", gloss: "orphaned" }
          ]
        },
        {
          id: "qr2-32-026",
          ar: "فَلَمَّا حَضَرَا، كَلَّمَهُمَا رَسُوْلُ اللهِ فِيْ أَمْرِ الْمِرْبَدِ وَثَمَنِهِ.",
          en: "When they came, the Messenger of Allah ﷺ spoke to them about the camel-yard and its price.",
          tokens: [
            { surface: "فَلَمَّا", lemma: "لما", pos: "part", features: "conj+part", root: "", gloss: "and when" },
            { surface: "حَضَرَا", lemma: "حضر", pos: "verb", features: "perf.3md", root: "ح ض ر", gloss: "the two of them came" },
            { surface: "كَلَّمَهُمَا", lemma: "كلم", pos: "verb", features: "perf.3ms+3md", root: "ك ل م", gloss: "spoke to them (two)" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "about" },
            { surface: "أَمْرِ", lemma: "أمر", pos: "noun", features: "gen.constr", root: "أ م ر", gloss: "the matter of" },
            { surface: "الْمِرْبَدِ", lemma: "مربد", pos: "noun", features: "def.gen", root: "ر ب د", gloss: "the camel-yard" },
            { surface: "وَثَمَنِهِ", lemma: "ثمن", pos: "noun", features: "conj+gen.constr+3ms", root: "ث م ن", gloss: "and its price" }
          ]
        }
      ],
      checks: [
        {
          q: "فِيْمَ كَلَّمَ رَسُوْلُ اللهِ ﷺ سَهْلاً وَسُهَيْلاً؟",
          options: ["فِيْ أَمْرِ الْمِرْبَدِ وَثَمَنِهِ", "فِيْ أَمْرِ الْهِجْرَةِ", "فِيْ أَمْرِ الْقِتَالِ"],
          answer: 0,
          qEn: "What did the Messenger of Allah ﷺ speak to Sahl and Suhayl about?",
          optionsEn: ["About the camel-yard and its price", "About the emigration", "About fighting"]
        }
      ]
    },
    {
      en: "Sahl and Suhayl said: \"It is, O Messenger of Allah, for Allah's sake -- we will not take a price for it, so build the mosque; our hearts are content with it.\" But the Messenger of Allah ﷺ refused, bought the place from them, and paid the price.",
      sentences: [
        {
          id: "qr2-32-027",
          ar: "قَالَ سَهْلٌ وَسُهَيْلٌ: هُوَ يَا رَسُوْلَ اللهِ لله، لَا نَشْتَرِيْ بِهِ ثَمَناً، فَابْنِ الْمَسْجِدَ.",
          en: "Sahl and Suhayl said: \"It is, O Messenger of Allah, for Allah's sake -- we will not take a price for it, so build the mosque.\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "سَهْلٌ", lemma: "سهل-اسم", pos: "proper", features: "nom", root: "", gloss: "Sahl" },
            { surface: "وَسُهَيْلٌ", lemma: "سهيل", pos: "proper", features: "conj+nom", root: "", gloss: "and Suhayl" },
            { surface: "هُوَ", lemma: "هو", pos: "noun", features: "nom", root: "", gloss: "it (is)" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "رَسُوْلَ", lemma: "رسول", pos: "noun", features: "acc.constr", root: "ر س ل", gloss: "Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "لله", lemma: "الله", pos: "proper", features: "prep+gen", root: "", gloss: "for Allah's sake" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "نَشْتَرِيْ", lemma: "نشتري", pos: "verb", features: "impf.1p", root: "ش ر ي", gloss: "we take (in exchange)" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "prep+3ms", root: "", gloss: "for it" },
            { surface: "ثَمَناً", lemma: "ثمن", pos: "noun", features: "indef.acc", root: "ث م ن", gloss: "a price" },
            { surface: "فَابْنِ", lemma: "بنى", pos: "verb", features: "conj+imp.2ms", root: "ب ن ي", gloss: "so build" },
            { surface: "الْمَسْجِدَ", lemma: "مسجد", pos: "noun", features: "def.acc", root: "س ج د", gloss: "the mosque" }
          ]
        },
        {
          id: "qr2-32-028",
          ar: "وَقَدْ طَابَتْ بِهِ أَنْفُسُنَا.",
          en: "And our hearts are content with it.",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "طَابَتْ", lemma: "طاب", pos: "verb", features: "perf.3fs", root: "ط ي ب", gloss: "became content" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "prep+3ms", root: "", gloss: "with it" },
            { surface: "أَنْفُسُنَا", lemma: "نفس", pos: "noun", features: "pl.nom+1p", root: "ن ف س", gloss: "our souls" }
          ]
        },
        {
          id: "qr2-32-029",
          ar: "وَلٰكِنَّ رَسُوْلَ اللهِ أَبَىٰ، وَاشْتَرَىٰ مِنْهُمَا الْمَكَانَ، وَدَفَعَ الثَّمَنَ.",
          en: "But the Messenger of Allah ﷺ refused, bought the place from them, and paid the price.",
          tokens: [
            { surface: "وَلٰكِنَّ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "رَسُوْلَ", lemma: "رسول", pos: "noun", features: "acc.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "أَبَىٰ", lemma: "أبى", pos: "verb", features: "perf.3ms", root: "أ ب ي", gloss: "refused" },
            { surface: "وَاشْتَرَىٰ", lemma: "اشترى", pos: "verb", features: "conj+perf.3ms", root: "ش ر ي", gloss: "and bought" },
            { surface: "مِنْهُمَا", lemma: "من", pos: "prep", features: "prep+3md", root: "", gloss: "from them (two)" },
            { surface: "الْمَكَانَ", lemma: "مكان", pos: "noun", features: "def.acc", root: "ك و ن", gloss: "the place" },
            { surface: "وَدَفَعَ", lemma: "دفع", pos: "verb", features: "conj+perf.3ms", root: "د ف ع", gloss: "and paid" },
            { surface: "الثَّمَنَ", lemma: "ثمن", pos: "noun", features: "def.acc", root: "ث م ن", gloss: "the price" }
          ]
        }
      ],
      checks: [
        {
          q: "هَلْ أَخَذَ رَسُوْلُ اللهِ ﷺ الْمِرْبَدَ مَجَّاناً؟",
          options: ["لَا، بَلِ اشْتَرَاهُ وَدَفَعَ ثَمَنَهُ", "نَعَمْ، أَخَذَهُ هَدِيَّةً", "لَا، لَمْ يَبْنِ فِيْهِ الْمَسْجِدَ"],
          answer: 0,
          qEn: "Did the Messenger of Allah ﷺ take the camel-yard for free?",
          optionsEn: ["No, he bought it and paid its price", "Yes, he took it as a gift", "No, he did not build the mosque there"]
        }
      ]
    },
    {
      en: "The Muslims built the mosque, while the Messenger of Allah ﷺ worked with his own hand and carried the bricks. One of the Muslims said: \"If we sit while the Prophet works, that indeed would be the misguided deed on our part.\" The Muslims kept building it, saying: \"O Allah, there is no life but the life of the Hereafter, so have mercy on the Ansar and the Muhajirun.\" The Commander of the Believers, Uthman ibn Affan (may Allah be pleased with him), and the kings after him, later expanded this mosque, until you see it in this form.",
      sentences: [
        {
          id: "qr2-32-030",
          ar: "وَبَنَىٰ الْمُسْلِمُوْنَ الْمَسْجِدَ، وَرَسُوْلُ اللهِ يَعْمَلُ بِيَدِهِ وَيَنْقُلُ اللَّبِنَ.",
          en: "The Muslims built the mosque, while the Messenger of Allah ﷺ worked with his own hand and carried the bricks.",
          tokens: [
            { surface: "وَبَنَىٰ", lemma: "بنى", pos: "verb", features: "conj+perf.3ms", root: "ب ن ي", gloss: "and built" },
            { surface: "الْمُسْلِمُوْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.nom", root: "س ل م", gloss: "the Muslims" },
            { surface: "الْمَسْجِدَ", lemma: "مسجد", pos: "noun", features: "def.acc", root: "س ج د", gloss: "the mosque" },
            { surface: "وَرَسُوْلُ", lemma: "رسول", pos: "noun", features: "conj+nom.constr", root: "ر س ل", gloss: "while the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "يَعْمَلُ", lemma: "عمل", pos: "verb", features: "impf.3ms", root: "ع م ل", gloss: "worked" },
            { surface: "بِيَدِهِ", lemma: "يد", pos: "noun", features: "prep+gen.constr+3ms", root: "ي د ي", gloss: "with his hand" },
            { surface: "وَيَنْقُلُ", lemma: "نقل", pos: "verb", features: "conj+impf.3ms", root: "ن ق ل", gloss: "and carried" },
            { surface: "اللَّبِنَ", lemma: "لبن", pos: "noun", features: "def.acc", root: "ل ب ن", gloss: "the mud bricks" }
          ]
        },
        {
          id: "qr2-32-031",
          ar: "فَقَالَ قَائِلٌ مِنَ الْمُسْلِمِيْنَ: لَئِنْ قَعَدْنَا وَالنَّبِيُّ يَعْمَلُ، لَذَاكَ مِنَّا الْعَمَلُ الْمُضَلِّلُ.",
          en: "One of the Muslims said: \"If we sit while the Prophet works, that indeed would be the misguided deed on our part.\"",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "so said" },
            { surface: "قَائِلٌ", lemma: "قائل", pos: "noun", features: "indef.nom", root: "ق و ل", gloss: "a sayer" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.gen", root: "س ل م", gloss: "the Muslims" },
            { surface: "لَئِنْ", lemma: "لئن", pos: "part", features: "part", root: "", gloss: "if indeed" },
            { surface: "قَعَدْنَا", lemma: "قعد", pos: "verb", features: "perf.1p", root: "ق ع د", gloss: "we sit" },
            { surface: "وَالنَّبِيُّ", lemma: "نبي", pos: "noun", features: "conj+def.nom", root: "ن ب أ", gloss: "while the Prophet" },
            { surface: "يَعْمَلُ", lemma: "عمل", pos: "verb", features: "impf.3ms", root: "ع م ل", gloss: "works" },
            { surface: "لَذَاكَ", lemma: "ذلك", pos: "dem", features: "prep+dem", root: "", gloss: "that indeed" },
            { surface: "مِنَّا", lemma: "من", pos: "prep", features: "prep+1p", root: "", gloss: "on our part" },
            { surface: "الْعَمَلُ", lemma: "عمل-اسم", pos: "noun", features: "def.nom", root: "ع م ل", gloss: "the deed" },
            { surface: "الْمُضَلِّلُ", lemma: "مضلل", pos: "adj", features: "def.nom", root: "ض ل ل", gloss: "the misguided" }
          ]
        },
        {
          id: "qr2-32-032",
          ar: "وَكَانَ الْمُسْلِمُوْنَ يَبْنُوْنَهُ وَيَقُوْلُوْنَ: اللَّهُمَّ لَا عَيْشَ إِلَّا عَيْشَ الآخِرَةْ، فَارْحَمِ الأَنْصَارَ وَالْمُهَاجِرَةْ.",
          en: "The Muslims kept building it, saying: \"O Allah, there is no life but the life of the Hereafter, so have mercy on the Ansar and the Muhajirun.\"",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and kept" },
            { surface: "الْمُسْلِمُوْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.nom", root: "س ل م", gloss: "the Muslims" },
            { surface: "يَبْنُوْنَهُ", lemma: "بنى", pos: "verb", features: "impf.3mp+3ms", root: "ب ن ي", gloss: "building it" },
            { surface: "وَيَقُوْلُوْنَ", lemma: "قال", pos: "verb", features: "conj+impf.3mp", root: "ق و ل", gloss: "and saying" },
            { surface: "اللَّهُمَّ", lemma: "اللهم", pos: "proper", features: "part", root: "", gloss: "O Allah" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "there is no" },
            { surface: "عَيْشَ", lemma: "عيش", pos: "noun", features: "acc", root: "ع ي ش", gloss: "life" },
            { surface: "إِلَّا", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except" },
            { surface: "عَيْشَ", lemma: "عيش", pos: "noun", features: "acc.constr", root: "ع ي ش", gloss: "the life of" },
            { surface: "الآخِرَةْ", lemma: "آخرة", pos: "noun", features: "def.gen", root: "أ خ ر", gloss: "the Hereafter" },
            { surface: "فَارْحَمِ", lemma: "رحم", pos: "verb", features: "conj+imp.2ms", root: "ر ح م", gloss: "so have mercy on" },
            { surface: "الأَنْصَارَ", lemma: "أنصار", pos: "proper", features: "def.acc", root: "ن ص ر", gloss: "the Ansar" },
            { surface: "وَالْمُهَاجِرَةْ", lemma: "مهاجر", pos: "proper", features: "conj+def.acc", root: "ه ج ر", gloss: "and the Muhajirun" }
          ]
        },
        {
          id: "qr2-32-033",
          ar: "وَقَدْ زَادَ فِيْ هٰذَا الْمَسْجِدِ أَمِيْرُ الْمُؤْمِنِيْنَ عُثْمَانُ بْنُ عَفَّانَ وَالْمُلُوْكُ بَعْدَهُ.",
          en: "The Commander of the Believers, Uthman ibn Affan, and the kings after him, later expanded this mosque.",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "زَادَ", lemma: "زاد-فعل", pos: "verb", features: "perf.3ms", root: "ز ي د", gloss: "expanded" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem", root: "", gloss: "this" },
            { surface: "الْمَسْجِدِ", lemma: "مسجد", pos: "noun", features: "def.gen", root: "س ج د", gloss: "the mosque" },
            { surface: "أَمِيْرُ", lemma: "أمير", pos: "noun", features: "nom.constr", root: "أ م ر", gloss: "the commander of" },
            { surface: "الْمُؤْمِنِيْنَ", lemma: "مؤمنين", pos: "noun", features: "pl.def.gen", root: "أ م ن", gloss: "the believers" },
            { surface: "عُثْمَانُ", lemma: "عثمان", pos: "proper", features: "nom", root: "", gloss: "Uthman" },
            { surface: "بْنُ", lemma: "ابن", pos: "noun", features: "nom.constr", root: "ب ن ي", gloss: "son of" },
            { surface: "عَفَّانَ", lemma: "عفان", pos: "proper", features: "gen", root: "", gloss: "Affan" },
            { surface: "وَالْمُلُوْكُ", lemma: "ملك", pos: "noun", features: "conj+pl.def.nom", root: "م ل ك", gloss: "and the kings" },
            { surface: "بَعْدَهُ", lemma: "بعد", pos: "prep", features: "acc+3ms", root: "", gloss: "after him" }
          ]
        },
        {
          id: "qr2-32-034",
          ar: "حَتَّىٰ تَرَوْنَهُ فِيْ هٰذَا الشَّكْلِ.",
          en: "Until you see it in this form.",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "part", root: "", gloss: "until" },
            { surface: "تَرَوْنَهُ", lemma: "رأى", pos: "verb", features: "impf.2mp+3ms", root: "ر أ ي", gloss: "you (pl) see it" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem", root: "", gloss: "this" },
            { surface: "الشَّكْلِ", lemma: "شكل", pos: "noun", features: "def.gen", root: "ش ك ل", gloss: "the form" }
          ]
        }
      ],
      checks: [
        {
          q: "مَنْ زَادَ فِيْ مَسْجِدِ النَّبِيِّ ﷺ بَعْدَ ذٰلِكَ؟",
          options: ["أَمِيْرُ الْمُؤْمِنِيْنَ عُثْمَانُ بْنُ عَفَّانَ وَالْمُلُوْكُ بَعْدَهُ", "سَهْلٌ وَسُهَيْلٌ", "مُعَاذُ بْنُ عَفْرَاءَ"],
          answer: 0,
          qEn: "Who expanded the Prophet's ﷺ mosque afterward?",
          optionsEn: ["The Commander of the Believers Uthman ibn Affan and the kings after him", "Sahl and Suhayl", "Mu'adh ibn Afra"]
        }
      ]
    }
  ]
};

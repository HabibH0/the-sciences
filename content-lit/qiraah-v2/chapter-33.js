// القراءة الراشدة, volume two, chapter 33 (printed heading "٣٣") --
// كِسْرَةٌ مِنَ الْخُبْزِ -- "A Piece of Bread".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 120-123 (PDF page
// index == printed page number). Page 120 opens fresh with the "(٣٣)"
// heading and an illustration of wheat/bread-making; page 123 ends with
// the "✳ ✳ ✳" divider partway down, confirming the chapter is exactly
// four pages (120-123); chapter 34 "عِيَادَةُ الْمَرِيْضِ" begins fresh on
// 124. A first-person narrative told BY a piece of bread to the boy about
// to eat it -- same personification device as qiraah-v2/chapter-55.js's
// water autobiography, but earlier in the book's own reading order, so
// this chapter is where lemmas shared with that device (e.g. "صار" "to
// become", reused directly) are first introduced.
//
// Second of the nine chapters (32-40) filling the gap flagged in
// qiraah-v2/index.js's header comment. Spliced in after ch32.
//
// Lemma/homograph decisions -- checked against qiraah-v1 (ch1-31) and
// qiraah-v2 (ch32, ch41-55) via the lemma index before writing. Several
// bare spellings already carry an established sense elsewhere in the book
// under a *different* pos, but since the per-chapter consistency check
// (not a book-wide one) is what the tooling enforces, and this chapter
// never uses the other sense internally, these are simply given their own
// local dict entry here with the pos/gloss this chapter actually needs,
// with no suffix -- consistent with the project's standing rule that a
// suffix is needed only for an internal (same-chapter) pos clash:
//   - "سَاقٍ" (ٍplant "stalk, stem") reuses the bare "ساق" key, which
//     elsewhere in the book glosses "a leg, shank" -- same pos (noun),
//     different sense, so no suffix; this chapter's local entry carries
//     the stalk sense.
//   - "حَجَرٍ" ("stone") likewise reuses "حجر" (elsewhere glossed "lap,
//     care, upbringing", also pos noun) with a local override.
//   - "رِزْقُكَ" (noun, "your provision"), "دَقِيْقاً" (noun, "flour"),
//     "أَقْدَامِهَا" (noun, "its feet") and "تَعْبُ"/"يَحْسُنُ"-family senses
//     each reuse a bare spelling that carries a *different* pos elsewhere
//     in the book (رزق/دقيق/قدم/تعب/حسن are otherwise verb/adj there) --
//     again fine locally since this chapter only uses the sense given.
//   - "ظَهَرَتْ" ("appeared [above the ground]") reuses
//     qiraah-v1/chapter-31.js's disambiguated "ظهر-فعل" (pos "verb")
//     rather than the bare "ظهر" (elsewhere "Ẓuhr, midday", pos noun).
//   - "أَكَلَ"/"خَلَقَ" as verbs already have precedent as pos "verb"
//     elsewhere in qiraah-v2 (chapter-45.js and chapter-42.js/46.js/53.js
//     respectively) alongside a differently-posed "أكل"/"خلق" elsewhere
//     too -- this chapter comes earlier in reading order, so it is the
//     first to introduce the verb sense of each as a newWord.
//   - "مَدْفُوْنَةً" and "مَسْرُوْرَةً" (passive-participle adjectives) are
//     each given their own adjective lemma ("مدفون", "مسرور") rather than
//     folded into their base verbs, matching the qiraah-v2/chapter-32.js
//     precedent of tagging a participle like "نازل" as its own adj entry.
export const CHAPTER = {
  id: "ch33",
  title: {
    ar: "كِسْرَةٌ مِنَ الْخُبْزِ",
    en: "A Piece of Bread"
  },
  pages: [120, 121, 122, 123],
  newWords: [
    "كسرة", "مهلا", "أخت", "نبت", "مستريح", "رغد", "زال", "تحمل", "مشقة",
    "أجل", "مصيبة", "محبس", "حبة", "حنطة", "شقيق", "غرارة", "بذر", "تراب",
    "بصر", "مسرور", "باطن", "تربة", "مدفون", "جسم", "جلد", "ضيق", "انشق",
    "شق", "فوق", "سنبلة", "أصفر", "هتز", "منجل", "حصد", "بيدر", "أشد",
    "ثور", "داس", "قدم", "طريح", "ذرا", "مدور", "ثقب", "كريه", "جعجعة",
    "ألقى", "طحن", "طاحون", "دقيق", "معجنة", "غمر", "غمز", "عجين", "دحا",
    "محمى", "طابق", "ألم", "احتراق", "التوى", "انكمش", "رق", "رقاق",
    "نعيم", "لذة", "طور", "هنيء", "أطعم", "أكل", "خلق"
  ],
  lemmas: {
    "كسرة": { root: "ك س ر", pos: "noun", gloss: "a piece, broken bit (of bread)", book_note: "كِسْرَة جمع كِسَر: القطعة المكسورة من الشيء." },
    "مهلا": { root: "م ه ل", pos: "adv", gloss: "gently, slowly!", book_note: "مَهْلاً يا سيّدي: رِفْقاً لا تَعْجَل يا سيّدي." },
    "أخت": { root: "أ خ و", pos: "noun", gloss: "sister" },
    "نبت": { root: "ن ب ت", pos: "verb", gloss: "to sprout, grow" },
    "مستريح": { root: "ر و ح", pos: "adj", gloss: "at ease, resting" },
    "رغد": { root: "ر غ د", pos: "adj", gloss: "abundant, easeful" },
    "زال": { root: "ز ي ل", pos: "verb", gloss: "to cease, stop (being)" },
    "تحمل": { root: "ح م ل", pos: "verb", gloss: "to bear, endure" },
    "مشقة": { root: "م ش ق", pos: "noun", gloss: "hardship, toil" },
    "أجل": { root: "أ ج ل", pos: "noun", gloss: "sake" },
    "مصيبة": { root: "ص و ب", pos: "noun", gloss: "calamity, misfortune" },
    "محبس": { root: "ح ب س", pos: "noun", gloss: "confinement, place of imprisonment" },
    "حبة": { root: "ح ب ب", pos: "noun", gloss: "a grain, seed" },
    "حنطة": { root: "ح ن ط", pos: "noun", gloss: "wheat", book_note: "حِنْطَةٌ جمع حِنَط: قمح." },
    "شقيق": { root: "ش ق ق", pos: "noun", gloss: "sibling, full brother/sister" },
    "غرارة": { root: "غ ر ر", pos: "noun", gloss: "a sack", book_note: "غِرَارَة جمع غَرَائِر: وعاء من الخيش ونحوه توضع فيه الحبوب." },
    "بذر": { root: "ب ذ ر", pos: "verb", gloss: "to sow, scatter seed", book_note: "بَذَرَ يَبْذُرُ الحَبَّ: أَلْقَاه في الأرض متفرِّقاً للزراعة." },
    "تراب": { root: "ت ر ب", pos: "noun", gloss: "dust, soil" },
    "بصر": { root: "ب ص ر", pos: "verb", gloss: "to see, perceive" },
    "مسرور": { root: "س ر ر", pos: "adj", gloss: "pleased, joyful" },
    "باطن": { root: "ب ط ن", pos: "noun", gloss: "interior, inside" },
    "تربة": { root: "ت ر ب", pos: "noun", gloss: "soil, earth" },
    "مدفون": { root: "د ف ن", pos: "adj", gloss: "buried" },
    "جسم": { root: "ج س م", pos: "noun", gloss: "body" },
    "جلد": { root: "ج ل د", pos: "noun", gloss: "skin" },
    "ضيق": { root: "ض ي ق", pos: "verb", gloss: "to become narrow, tight" },
    "انشق": { root: "ش ق ق", pos: "verb", gloss: "to split open, crack open" },
    "شق": { root: "ش ق ق", pos: "verb", gloss: "to split, crack" },
    "فوق": { root: "", pos: "prep", gloss: "above" },
    "سنبلة": { root: "س ن ب ل", pos: "noun", gloss: "an ear of grain" },
    "أصفر": { root: "ص ف ر", pos: "adj", gloss: "yellow" },
    "هتز": { root: "ه ز ز", pos: "verb", gloss: "to sway, shake with delight" },
    "منجل": { root: "ن ج ل", pos: "noun", gloss: "a sickle", book_note: "مِنْجَل جمع مَنَاجِل: آلة لحصدِ الزرع أو لِحَشِّ العُشْبِ." },
    "حصد": { root: "ح ص د", pos: "verb", gloss: "to harvest, reap" },
    "بيدر": { root: "ب ي د ر", pos: "noun", gloss: "a threshing floor", book_note: "بَيْدر جمع بَيَادِر: الموضع يُجْمع فيه ما يُحصد من الحبوب." },
    "أشد": { root: "ش د د", pos: "adj", gloss: "more/most severe" },
    "ثور": { root: "ث و ر", pos: "noun", gloss: "a bull, ox" },
    "داس": { root: "د و س", pos: "verb", gloss: "to trample", book_note: "دَاسَ يَدُوْسُ الشيءَ: وَطِئَه وَطْئاً شديداً بقدمه." },
    "قدم": { root: "ق د م", pos: "noun", gloss: "a foot" },
    "طريح": { root: "ط ر ح", pos: "adj", gloss: "cast down, prostrate", book_note: "طَرِيْح: مَتْرُوك." },
    "ذرا": { root: "ذ ر و", pos: "verb", gloss: "to winnow, scatter", book_note: "ذَرَا يَذْرُو: أطار وفرّق." },
    "مدور": { root: "د و ر", pos: "adj", gloss: "round, circular" },
    "ثقب": { root: "ث ق ب", pos: "noun", gloss: "a hole" },
    "كريه": { root: "ك ر ه", pos: "adj", gloss: "repulsive, disagreeable" },
    "جعجعة": { root: "ج ع ج ع", pos: "noun", gloss: "a grinding clatter", book_note: "جَعْجَعَة: تصويت الرحىٰ." },
    "ألقى": { root: "ل ق ي", pos: "verb", gloss: "to throw, cast" },
    "طحن": { root: "ط ح ن", pos: "verb", gloss: "to grind" },
    "طحن-اسم": { root: "ط ح ن", pos: "noun", gloss: "a grinding, thoroughly" },
    "طاحون": { root: "ط ح ن", pos: "noun", gloss: "a mill" },
    "دقيق": { root: "د ق ق", pos: "noun", gloss: "flour" },
    "معجنة": { root: "ع ج ن", pos: "noun", gloss: "a kneading trough" },
    "غمر": { root: "غ م ر", pos: "verb", gloss: "to immerse, soak" },
    "غمز": { root: "غ م ز", pos: "verb", gloss: "to press, knead" },
    "عجين": { root: "ع ج ن", pos: "noun", gloss: "dough" },
    "دحا": { root: "د ح و", pos: "verb", gloss: "to flatten, spread out", book_note: "دَحَا يَدْحو: بَسَطَ ومَدَّ ووسَّع." },
    "محمى": { root: "ح م ي", pos: "adj", gloss: "heated" },
    "طابق": { root: "ط ب ق", pos: "noun", gloss: "a griddle, hot plate" },
    "ألم": { root: "أ ل م", pos: "noun", gloss: "pain" },
    "احتراق": { root: "ح ر ق", pos: "noun", gloss: "burning" },
    "التوى": { root: "ل و ي", pos: "verb", gloss: "to twist, writhe", book_note: "التوى يَلْتَوِيْ الشيء: اعْوَجَّ." },
    "انكمش": { root: "ك م ش", pos: "verb", gloss: "to shrivel, contract", book_note: "انكَمَشَ يَنْكَمِشُ: انفَرَدَ وانْطَوَىٰ." },
    "رق": { root: "ر ق ق", pos: "verb", gloss: "to be gentle, show tenderness" },
    "رقاق": { root: "ر ق ق", pos: "noun", gloss: "flatbread, thin bread", book_note: "رقاق: خبز منبسط رقيق." },
    "نعيم": { root: "ن ع م", pos: "noun", gloss: "bliss, comfort" },
    "لذة": { root: "ل ذ ذ", pos: "noun", gloss: "pleasure, delight" },
    "طور": { root: "ط و ر", pos: "noun", gloss: "a stage, phase" },
    "هنيء": { root: "ه ن أ", pos: "adj", gloss: "wholesome, delightful (of food)" },
    "أطعم": { root: "ط ع م", pos: "verb", gloss: "to feed" },
    "أكل": { root: "أ ك ل", pos: "verb", gloss: "to eat" },
    "خلق": { root: "خ ل ق", pos: "verb", gloss: "to create" },
    "خبز": { root: "خ ب ز", pos: "noun", gloss: "bread" },
    "سيد": { root: "س و د", pos: "noun", gloss: "master, sir" },
    "جائع": { root: "ج و ع", pos: "adj", gloss: "hungry" },
    "قص": { root: "ق ص ص", pos: "verb", gloss: "to narrate, tell (a story)" },
    "قصة": { root: "ق ص ص", pos: "noun", gloss: "story" },
    "غريب": { root: "غ ر ب", pos: "adj", gloss: "strange" },
    "لذيذ": { root: "ل ذ ذ", pos: "adj", gloss: "delicious, delightful" },
    "ظن": { root: "ظ ن ن", pos: "verb", gloss: "to think, suppose" },
    "حقل": { root: "ح ق ل", pos: "noun", gloss: "field", book_note: "حَقْل جمع حُقُول: كل قطعة من الأرض قابلة للحرث والزرع." },
    "نزل": { root: "ن ز ل", pos: "verb", gloss: "to come down, descend" },
    "سماء": { root: "س م و", pos: "noun", gloss: "sky" },
    "أتى": { root: "أ ت ي", pos: "verb", gloss: "to come to" },
    "رزق": { root: "ر ز ق", pos: "noun", gloss: "provision, sustenance" },
    "دنيا": { root: "د ن و", pos: "noun", gloss: "world, this life" },
    "أصاب": { root: "ص و ب", pos: "verb", gloss: "to strike, befall" },
    "شمس": { root: "ش م س", pos: "noun", gloss: "sun" },
    "مطر": { root: "م ط ر", pos: "noun", gloss: "rain" },
    "دخل": { root: "د خ ل", pos: "verb", gloss: "to enter" },
    "بقي": { root: "ب ق ي", pos: "verb", gloss: "to remain, stay" },
    "حرارة": { root: "ح ر ر", pos: "noun", gloss: "heat" },
    "تحدث": { root: "ح د ث", pos: "verb", gloss: "to converse, talk" },
    "طرب": { root: "ط ر ب", pos: "noun", gloss: "joy, delight" },
    "جميل": { root: "ج م ل", pos: "adj", gloss: "beautiful, nice" },
    "طال": { root: "ط و ل", pos: "verb", gloss: "to be long, prolonged" },
    "مدة": { root: "م د د", pos: "noun", gloss: "period, duration" },
    "حمل": { root: "ح م ل", pos: "verb", gloss: "to carry" },
    "مكث": { root: "م ك ث", pos: "verb", gloss: "to stay, remain" },
    "شديد": { root: "ش د د", pos: "adj", gloss: "intense, severe" },
    "فارق": { root: "ف ر ق", pos: "verb", gloss: "to part from, leave" },
    "ذليل": { root: "ذ ل ل", pos: "adj", gloss: "lowly, abject" },
    "ريح": { root: "ر و ح", pos: "noun", gloss: "wind" },
    "طار": { root: "ط ي ر", pos: "verb", gloss: "to fly off, dash off" },
    "قشر": { root: "ق ش ر", pos: "noun", gloss: "peel, husk, chaff" },
    "قمح": { root: "ق م ح", pos: "noun", gloss: "wheat (grain)" },
    "حجر": { root: "ح ج ر", pos: "noun", gloss: "stone" },
    "صوت": { root: "ص و ت", pos: "noun", gloss: "sound, voice" },
    "صار": { root: "ص ي ر", pos: "verb", gloss: "to become" },
    "خباز": { root: "خ ب ز", pos: "noun", gloss: "baker" },
    "وضع": { root: "و ض ع", pos: "verb", gloss: "to put, place" },
    "نقي": { root: "ن ق ي", pos: "adj", gloss: "clean, pure" },
    "كرة": { root: "ك ر و", pos: "noun", gloss: "a ball, sphere" },
    "حديد": { root: "ح د د", pos: "noun", gloss: "iron" },
    "سأل": { root: "س أ ل", pos: "verb", gloss: "to ask" },
    "سبيل": { root: "س ب ل", pos: "noun", gloss: "path, way" },
    "شقي": { root: "ش ق ي", pos: "verb", gloss: "to toil, be wretched" },
    "تعب": { root: "ت ع ب", pos: "verb", gloss: "to toil, tire oneself" },
    "شبع": { root: "ش ب ع", pos: "verb", gloss: "to be full, satiated" },
    "حسن": { root: "ح س ن", pos: "verb", gloss: "to be fitting, be good" },
    "حمد": { root: "ح م د", pos: "noun", gloss: "praise" },
    "سقى": { root: "س ق ي", pos: "verb", gloss: "to give to drink" },
    "جعل": { root: "ج ع ل", pos: "verb", gloss: "to make" },
    "قال": { root: "ق و ل", pos: "verb", gloss: "to say" },
    "كان": { root: "ك و ن", pos: "verb", gloss: "to be" },
    "من": { root: "", pos: "prep", gloss: "from, of" },
    "في": { root: "", pos: "prep", gloss: "in" },
    "إلى": { root: "", pos: "prep", gloss: "to" },
    "على": { root: "", pos: "prep", gloss: "on" },
    "مع": { root: "", pos: "prep", gloss: "with" },
    "عن": { root: "", pos: "prep", gloss: "about" },
    "ذلك": { root: "", pos: "dem", gloss: "that" },
    "الذي": { root: "", pos: "rel", gloss: "who, which" },
    "هل": { root: "", pos: "part", gloss: "do..? (question particle)" },
    "أن": { root: "", pos: "part", gloss: "that / to (+ subjunctive)" },
    "إن": { root: "", pos: "part", gloss: "indeed" },
    "لا": { root: "", pos: "part", gloss: "not, no" },
    "لم": { root: "", pos: "part", gloss: "not (+ jussive, past negation)" },
    "قد": { root: "", pos: "part", gloss: "already, indeed" },
    "لكن": { root: "", pos: "conj", gloss: "but" },
    "أو": { root: "", pos: "conj", gloss: "or" },
    "ثم": { root: "", pos: "conj", gloss: "then" },
    "حتى": { root: "", pos: "part", gloss: "until" },
    "هنالك": { root: "", pos: "adv", gloss: "there" },
    "هٰكذا": { root: "", pos: "adv", gloss: "like this" },
    "جدا": { root: "", pos: "adv", gloss: "very" },
    "يا": { root: "", pos: "part", gloss: "O (vocative)" },
    "لله": { root: "", pos: "proper", gloss: "Allah" },
    "مسلم": { root: "س ل م", pos: "noun", gloss: "Muslim" },
    "مرة": { root: "م ر ر", pos: "noun", gloss: "a time, once" },
    "أخذ": { root: "أ خ ذ", pos: "verb", gloss: "to take; to begin (to)" },
    "غير": { root: "غ ي ر", pos: "noun", gloss: "other than, not" },
    "أحب": { root: "ح ب ب", pos: "verb", gloss: "to like, love" },
    "بلى": { root: "", pos: "part", gloss: "yes indeed" },
    "أراد": { root: "ر و د", pos: "verb", gloss: "to want" },
    "سمع": { root: "س م ع", pos: "verb", gloss: "to hear" },
    "خرج": { root: "خ ر ج", pos: "verb", gloss: "to go out, come out" },
    "وصل": { root: "و ص ل", pos: "verb", gloss: "to reach, arrive" },
    "يد": { root: "ي د ي", pos: "noun", gloss: "hand" },
    "خبر": { root: "خ ب ر", pos: "noun", gloss: "news, account, story" },
    "جاء": { root: "ج ي أ", pos: "verb", gloss: "to come" },
    "رجل": { root: "ر ج ل", pos: "noun", gloss: "a man" },
    "رفيق": { root: "ر ف ق", pos: "noun", gloss: "a companion" },
    "يوم": { root: "ي و م", pos: "noun", gloss: "a day" },
    "كبر": { root: "ك ب ر", pos: "verb", gloss: "to grow, become big" },
    "جذيرة": { root: "ج ذ ر", pos: "noun", gloss: "a little root" },
    "شعر": { root: "ش ع ر", pos: "noun", gloss: "hair" },
    "وريقة": { root: "و ر ق", pos: "noun", gloss: "a little leaf" },
    "ظهر-فعل": { root: "ظ ه ر", pos: "verb", gloss: "to appear" },
    "أرض": { root: "أ ر ض", pos: "noun", gloss: "earth, ground" },
    "قائم": { root: "ق و م", pos: "adj", gloss: "standing" },
    "ساق": { root: "س و ق", pos: "noun", gloss: "a stalk, stem" },
    "أصبح": { root: "ص ب ح", pos: "verb", gloss: "to become" },
    "رأى": { root: "ر أ ي", pos: "verb", gloss: "to see" },
    "صديقة": { root: "ص د ق", pos: "noun", gloss: "a (female) friend" },
    "ما": { root: "", pos: "part", gloss: "not" },
    "تلك": { root: "", pos: "dem", gloss: "that" },
    "انتقل": { root: "ن ق ل", pos: "verb", gloss: "to move, be transferred" },
    "كل": { root: "ك ل ل", pos: "noun", gloss: "all, every" },
    "شيء": { root: "ش ي أ", pos: "noun", gloss: "a thing" },
    "ل": { root: "", pos: "prep", gloss: "to, for" },
    "عرف": { root: "ع ر ف", pos: "verb", gloss: "to know" },
    "اسم": { root: "س م و", pos: "noun", gloss: "a name" },
    "هو": { root: "", pos: "noun", gloss: "he, it" },
    "رحى": { root: "ر ح ي", pos: "noun", gloss: "a millstone" },
    "لما": { root: "", pos: "part", gloss: "when" },
    "ماء": { root: "م و ه", pos: "noun", gloss: "water" },
    "صنع": { root: "ص ن ع", pos: "verb", gloss: "to make" },
    "سمى": { root: "س م و", pos: "verb", gloss: "to name, call" },
    "رحم": { root: "ر ح م", pos: "verb", gloss: "to have mercy" },
    "ب": { root: "", pos: "prep", gloss: "with, by" }
  },
  paragraphs: [
    {
      en: "Once I took a piece of bread to eat it, and it said: \"Gently, my master! You are not hungry, and you have already eaten my sisters. Would you not like me to tell you my story? It is strange, and it is delightful.\"",
      sentences: [
        {
          id: "qr2-33-001",
          ar: "مَرَّةً أَخَذْتُ كِسْرَةً مِنَ الْخُبْزِ لآكُلَهَا.",
          en: "Once I took a piece of bread to eat it.",
          tokens: [
            { surface: "مَرَّةً", lemma: "مرة", pos: "noun", features: "indef.acc", root: "م ر ر", gloss: "once, one time" },
            { surface: "أَخَذْتُ", lemma: "أخذ", pos: "verb", features: "perf.1s", root: "أ خ ذ", gloss: "I took" },
            { surface: "كِسْرَةً", lemma: "كسرة", pos: "noun", features: "indef.acc", root: "ك س ر", gloss: "a piece" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْخُبْزِ", lemma: "خبز", pos: "noun", features: "def.gen", root: "خ ب ز", gloss: "the bread" },
            { surface: "لآكُلَهَا", lemma: "أكل", pos: "verb", features: "prep+subj.1s+3fs", root: "أ ك ل", gloss: "to eat it" }
          ]
        },
        {
          id: "qr2-33-002",
          ar: "فَقَالَتْ: مَهْلاً يَا سَيِّدِي!",
          en: "So it said: \"Gently, my master!\"",
          tokens: [
            { surface: "فَقَالَتْ", lemma: "قال", pos: "verb", features: "conj+perf.3fs", root: "ق و ل", gloss: "so it said" },
            { surface: "مَهْلاً", lemma: "مهلا", pos: "adv", features: "indef.acc", root: "م ه ل", gloss: "gently!" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "سَيِّدِي", lemma: "سيد", pos: "noun", features: "nom+1s", root: "س و د", gloss: "my master" }
          ]
        },
        {
          id: "qr2-33-003",
          ar: "إِنَّكَ غَيْرُ جَائِعٍ، وَقَدْ أَكَلْتَ أَخَوَاتِيْ.",
          en: "You are not hungry, and you have already eaten my sisters.",
          tokens: [
            { surface: "إِنَّكَ", lemma: "إن", pos: "part", features: "part+2ms", root: "", gloss: "you are" },
            { surface: "غَيْرُ", lemma: "غير", pos: "noun", features: "nom.constr", root: "غ ي ر", gloss: "not" },
            { surface: "جَائِعٍ", lemma: "جائع", pos: "adj", features: "indef.gen", root: "ج و ع", gloss: "hungry" },
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and already" },
            { surface: "أَكَلْتَ", lemma: "أكل", pos: "verb", features: "perf.2ms", root: "أ ك ل", gloss: "you ate" },
            { surface: "أَخَوَاتِيْ", lemma: "أخت", pos: "noun", features: "pl+1s", root: "أ خ و", gloss: "my sisters" }
          ]
        },
        {
          id: "qr2-33-004",
          ar: "أَفَلَا تُحِبُّ أَنْ أَقُصَّ عَلَيْكَ قِصَّتِيْ؟",
          en: "Would you not like me to tell you my story?",
          tokens: [
            { surface: "أَفَلَا", lemma: "لا", pos: "part", features: "part+neg", root: "", gloss: "would...not" },
            { surface: "تُحِبُّ", lemma: "أحب", pos: "verb", features: "impf.2ms", root: "ح ب ب", gloss: "you like" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "أَقُصَّ", lemma: "قص", pos: "verb", features: "subj.1s", root: "ق ص ص", gloss: "I tell" },
            { surface: "عَلَيْكَ", lemma: "على", pos: "prep", features: "prep+2ms", root: "", gloss: "to you" },
            { surface: "قِصَّتِيْ", lemma: "قصة", pos: "noun", features: "acc+1s", root: "ق ص ص", gloss: "my story" }
          ]
        },
        {
          id: "qr2-33-005",
          ar: "فَإِنَّهَا غَرِيْبَةٌ وَإِنَّهَا لَذِيْذَةٌ.",
          en: "It is strange, and it is delightful.",
          tokens: [
            { surface: "فَإِنَّهَا", lemma: "إن", pos: "part", features: "conj+part+3fs", root: "", gloss: "for it is" },
            { surface: "غَرِيْبَةٌ", lemma: "غريب", pos: "adj", features: "indef.nom.f", root: "غ ر ب", gloss: "strange" },
            { surface: "وَإِنَّهَا", lemma: "إن", pos: "part", features: "conj+part+3fs", root: "", gloss: "and it is" },
            { surface: "لَذِيْذَةٌ", lemma: "لذيذ", pos: "adj", features: "indef.nom.f", root: "ل ذ ذ", gloss: "delightful" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا أَرَادَ الْوَلَدُ أَنْ يَفْعَلَ بِالْكِسْرَةِ؟",
          options: ["أَنْ يَأْكُلَهَا", "أَنْ يَرْمِيَهَا", "أَنْ يُعْطِيَهَا لِأَخِيْهِ"],
          answer: 0,
          qEn: "What did the boy want to do with the piece of bread?",
          optionsEn: ["Eat it", "Throw it away", "Give it to his brother"]
        }
      ]
    },
    {
      en: "I said: \"Yes indeed! I want to hear your story, so I will not eat you until I hear from you.\"",
      sentences: [
        {
          id: "qr2-33-006",
          ar: "قُلْتُ: بَلَىٰ! أُرِيْدُ أَنْ أَسْمَعَ قِصَّتَكِ.",
          en: "I said: \"Yes indeed! I want to hear your story.\"",
          tokens: [
            { surface: "قُلْتُ", lemma: "قال", pos: "verb", features: "perf.1s", root: "ق و ل", gloss: "I said" },
            { surface: "بَلَىٰ", lemma: "بلى", pos: "part", features: "part", root: "", gloss: "yes indeed" },
            { surface: "أُرِيْدُ", lemma: "أراد", pos: "verb", features: "impf.1s", root: "ر و د", gloss: "I want" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "أَسْمَعَ", lemma: "سمع", pos: "verb", features: "subj.1s", root: "س م ع", gloss: "hear" },
            { surface: "قِصَّتَكِ", lemma: "قصة", pos: "noun", features: "acc+2fs", root: "ق ص ص", gloss: "your story" }
          ]
        },
        {
          id: "qr2-33-007",
          ar: "فَلَا آكُلُكِ حَتَّىٰ أَسْمَعَ مِنْكِ.",
          en: "So I will not eat you until I hear from you.",
          tokens: [
            { surface: "فَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "so not" },
            { surface: "آكُلُكِ", lemma: "أكل", pos: "verb", features: "impf.1s+2fs", root: "أ ك ل", gloss: "I eat you" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "part", root: "", gloss: "until" },
            { surface: "أَسْمَعَ", lemma: "سمع", pos: "verb", features: "subj.1s", root: "س م ع", gloss: "I hear" },
            { surface: "مِنْكِ", lemma: "من", pos: "prep", features: "prep+2fs", root: "", gloss: "from you" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا لَمْ يَأْكُلِ الْوَلَدُ الْكِسْرَةَ فَوْراً؟",
          options: ["لِأَنَّهُ أَرَادَ أَنْ يَسْمَعَ قِصَّتَهَا", "لِأَنَّهُ لَمْ يَكُنْ جَائِعاً", "لِأَنَّهَا كَانَتْ وَسِخَةً"],
          answer: 0,
          qEn: "Why didn't the boy eat the piece of bread right away?",
          optionsEn: ["Because he wanted to hear its story", "Because he was not hungry", "Because it was dirty"]
        }
      ]
    },
    {
      en: "It said: \"Do you think, my master, that I was created like this? Have you heard that bread sprouts in a field or comes down from the sky? You eat at ease, your provision comes to you in abundance -- but I have not ceased bearing hardships for your sake, going out from one calamity to another and from one confinement to another, until I reached your hand.\"",
      sentences: [
        {
          id: "qr2-33-008",
          ar: "قَالَتْ: هَلْ تَظُنُّ يَا سَيِّدِيْ! أَنِّي خُلِقْتُ هٰكَذَا؟",
          en: "It said: \"Do you think, my master, that I was created like this?\"",
          tokens: [
            { surface: "قَالَتْ", lemma: "قال", pos: "verb", features: "perf.3fs", root: "ق و ل", gloss: "it said" },
            { surface: "هَلْ", lemma: "هل", pos: "part", features: "part", root: "", gloss: "do..?" },
            { surface: "تَظُنُّ", lemma: "ظن", pos: "verb", features: "impf.2ms", root: "ظ ن ن", gloss: "you think" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "سَيِّدِيْ", lemma: "سيد", pos: "noun", features: "nom+1s", root: "س و د", gloss: "my master" },
            { surface: "أَنِّي", lemma: "أن", pos: "part", features: "part+1s", root: "", gloss: "that I" },
            { surface: "خُلِقْتُ", lemma: "خلق", pos: "verb", features: "pass.perf.1s", root: "خ ل ق", gloss: "I was created" },
            { surface: "هٰكَذَا", lemma: "هٰكذا", pos: "adv", features: "adv", root: "", gloss: "like this" }
          ]
        },
        {
          id: "qr2-33-009",
          ar: "هَلْ سَمِعْتَ أَنَّ الْخُبْزَ يَنْبُتُ فِي الْحَقْلِ أَوْ يَنْزِلُ مِنَ السَّمَاءِ؟",
          en: "Have you heard that bread sprouts in a field or comes down from the sky?",
          tokens: [
            { surface: "هَلْ", lemma: "هل", pos: "part", features: "part", root: "", gloss: "have..?" },
            { surface: "سَمِعْتَ", lemma: "سمع", pos: "verb", features: "perf.2ms", root: "س م ع", gloss: "you heard" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "الْخُبْزَ", lemma: "خبز", pos: "noun", features: "def.acc", root: "خ ب ز", gloss: "bread" },
            { surface: "يَنْبُتُ", lemma: "نبت", pos: "verb", features: "impf.3ms", root: "ن ب ت", gloss: "sprouts" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْحَقْلِ", lemma: "حقل", pos: "noun", features: "def.gen", root: "ح ق ل", gloss: "the field" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "يَنْزِلُ", lemma: "نزل", pos: "verb", features: "impf.3ms", root: "ن ز ل", gloss: "comes down" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "السَّمَاءِ", lemma: "سماء", pos: "noun", features: "def.gen", root: "س م و", gloss: "the sky" }
          ]
        },
        {
          id: "qr2-33-010",
          ar: "إِنَّكَ تَأْكُلُ مُسْتَرِيْحاً، يَأْتِيْكَ رِزْقُكَ رَغَداً.",
          en: "You eat at ease; your provision comes to you in abundance.",
          tokens: [
            { surface: "إِنَّكَ", lemma: "إن", pos: "part", features: "part+2ms", root: "", gloss: "you" },
            { surface: "تَأْكُلُ", lemma: "أكل", pos: "verb", features: "impf.2ms", root: "أ ك ل", gloss: "eat" },
            { surface: "مُسْتَرِيْحاً", lemma: "مستريح", pos: "adj", features: "indef.acc", root: "ر و ح", gloss: "at ease" },
            { surface: "يَأْتِيْكَ", lemma: "أتى", pos: "verb", features: "impf.3ms+2ms", root: "أ ت ي", gloss: "comes to you" },
            { surface: "رِزْقُكَ", lemma: "رزق", pos: "noun", features: "nom+2ms", root: "ر ز ق", gloss: "your provision" },
            { surface: "رَغَداً", lemma: "رغد", pos: "adj", features: "indef.acc", root: "ر غ د", gloss: "abundantly" }
          ]
        },
        {
          id: "qr2-33-011",
          ar: "وَلٰكِنِّيْ لَمْ أَزَلْ أَتَحَمَّلُ الْمَشَاقَّ لِأَجْلِكَ.",
          en: "But I have not ceased bearing hardships for your sake.",
          tokens: [
            { surface: "وَلٰكِنِّيْ", lemma: "لكن", pos: "conj", features: "conj+1s", root: "", gloss: "but I" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "أَزَلْ", lemma: "زال", pos: "verb", features: "juss.1s", root: "ز ي ل", gloss: "cease" },
            { surface: "أَتَحَمَّلُ", lemma: "تحمل", pos: "verb", features: "impf.1s", root: "ح م ل", gloss: "bearing" },
            { surface: "الْمَشَاقَّ", lemma: "مشقة", pos: "noun", features: "pl.def.acc", root: "م ش ق", gloss: "the hardships" },
            { surface: "لِأَجْلِكَ", lemma: "أجل", pos: "noun", features: "prep+gen.constr+2ms", root: "أ ج ل", gloss: "for your sake" }
          ]
        },
        {
          id: "qr2-33-012",
          ar: "وَأَخْرُجُ مِنْ مُصِيْبَةٍ إِلَىٰ مُصِيْبَةٍ، وَمِنْ مَحْبِسٍ إِلَىٰ مَحْبِسٍ، حَتَّىٰ وَصَلْتُ إِلَىٰ يَدِكَ.",
          en: "I go out from one calamity to another, and from one confinement to another, until I reached your hand.",
          tokens: [
            { surface: "وَأَخْرُجُ", lemma: "خرج", pos: "verb", features: "conj+impf.1s", root: "خ ر ج", gloss: "and I go out" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "مُصِيْبَةٍ", lemma: "مصيبة", pos: "noun", features: "indef.gen", root: "ص و ب", gloss: "a calamity" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "مُصِيْبَةٍ", lemma: "مصيبة", pos: "noun", features: "indef.gen", root: "ص و ب", gloss: "a calamity" },
            { surface: "وَمِنْ", lemma: "من", pos: "prep", features: "conj+prep", root: "", gloss: "and from" },
            { surface: "مَحْبِسٍ", lemma: "محبس", pos: "noun", features: "indef.gen", root: "ح ب س", gloss: "a confinement" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "مَحْبِسٍ", lemma: "محبس", pos: "noun", features: "indef.gen", root: "ح ب س", gloss: "a confinement" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "part", root: "", gloss: "until" },
            { surface: "وَصَلْتُ", lemma: "وصل", pos: "verb", features: "perf.1s", root: "و ص ل", gloss: "I reached" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "يَدِكَ", lemma: "يد", pos: "noun", features: "gen.constr+2ms", root: "ي د ي", gloss: "your hand" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا قَالَتِ الْكِسْرَةُ عَنْ طَعَامِ الْوَلَدِ؟",
          options: ["إِنَّهُ يَأْكُلُ مُسْتَرِيْحاً وَرِزْقُهُ يَأْتِيْهِ رَغَداً", "إِنَّهُ يَزْرَعُ طَعَامَهُ بِنَفْسِهِ", "إِنَّهُ لَا يَأْكُلُ الْخُبْزَ"],
          answer: 0,
          qEn: "What did the piece of bread say about the boy's food?",
          optionsEn: ["That he eats at ease and his provision comes to him in abundance", "That he grows his own food", "That he doesn't eat bread"]
        }
      ]
    },
    {
      en: "Part of my story is that I was a grain of wheat with my sisters in a sack. A man came to us, took me with my companions, and sowed us in the soil.",
      sentences: [
        {
          id: "qr2-33-013",
          ar: "كَانَ مِنْ خَبَرِيْ أَنِّيْ كُنْتُ حَبَّةَ حِنْطَةٍ مَعَ شَقِيْقَاتِيْ فِيْ غِرَارَةٍ.",
          en: "Part of my story is that I was a grain of wheat with my sisters in a sack.",
          tokens: [
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "it was" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "part of" },
            { surface: "خَبَرِيْ", lemma: "خبر", pos: "noun", features: "gen.constr+1s", root: "خ ب ر", gloss: "my story" },
            { surface: "أَنِّيْ", lemma: "أن", pos: "part", features: "part+1s", root: "", gloss: "that I" },
            { surface: "كُنْتُ", lemma: "كان", pos: "verb", features: "perf.1s", root: "ك و ن", gloss: "I was" },
            { surface: "حَبَّةَ", lemma: "حبة", pos: "noun", features: "acc.constr", root: "ح ب ب", gloss: "a grain of" },
            { surface: "حِنْطَةٍ", lemma: "حنطة", pos: "noun", features: "indef.gen", root: "ح ن ط", gloss: "wheat" },
            { surface: "مَعَ", lemma: "مع", pos: "prep", features: "prep", root: "", gloss: "with" },
            { surface: "شَقِيْقَاتِيْ", lemma: "شقيق", pos: "noun", features: "pl+1s", root: "ش ق ق", gloss: "my sisters" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "غِرَارَةٍ", lemma: "غرارة", pos: "noun", features: "indef.gen", root: "غ ر ر", gloss: "a sack" }
          ]
        },
        {
          id: "qr2-33-014",
          ar: "فَجَاءَ إِلَيْنَا رَجُلٌ، فَأَخَذَنِيْ مَعَ رَفِيْقَاتِيْ، فَبَذَرَنَا فِي التُّرَابِ.",
          en: "A man came to us, took me with my companions, and sowed us in the soil.",
          tokens: [
            { surface: "فَجَاءَ", lemma: "جاء", pos: "verb", features: "conj+perf.3ms", root: "ج ي أ", gloss: "so came" },
            { surface: "إِلَيْنَا", lemma: "إلى", pos: "prep", features: "prep+1p", root: "", gloss: "to us" },
            { surface: "رَجُلٌ", lemma: "رجل", pos: "noun", features: "indef.nom", root: "ر ج ل", gloss: "a man" },
            { surface: "فَأَخَذَنِيْ", lemma: "أخذ", pos: "verb", features: "conj+perf.3ms+1s", root: "أ خ ذ", gloss: "and took me" },
            { surface: "مَعَ", lemma: "مع", pos: "prep", features: "prep", root: "", gloss: "with" },
            { surface: "رَفِيْقَاتِيْ", lemma: "رفيق", pos: "noun", features: "pl+1s", root: "ر ف ق", gloss: "my companions" },
            { surface: "فَبَذَرَنَا", lemma: "بذر", pos: "verb", features: "conj+perf.3ms+1p", root: "ب ذ ر", gloss: "and sowed us" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "التُّرَابِ", lemma: "تراب", pos: "noun", features: "def.gen", root: "ت ر ب", gloss: "the soil" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا كَانَتِ الْكِسْرَةُ فِيْ أَوَّلِ أَمْرِهَا؟",
          options: ["حَبَّةَ حِنْطَةٍ فِيْ غِرَارَةٍ", "سُنْبُلَةً فِي الْحَقْلِ", "دَقِيْقاً عِنْدَ الْخَبَّازِ"],
          answer: 0,
          qEn: "What was the piece of bread at the very beginning?",
          optionsEn: ["A grain of wheat in a sack", "An ear of grain in the field", "Flour at the baker's"]
        }
      ]
    },
    {
      en: "There in the field I saw the world, the sun struck me, and I was very pleased -- but the rain came down, and I entered the interior of the soil and remained buried for days. My body began to grow, my skin grew tight on me, until my skin split open. Little roots like hair came out of it, then little leaves came out that split the soil and appeared above the ground. So I became, my master, an ear of grain standing on a stalk.",
      sentences: [
        {
          id: "qr2-33-015",
          ar: "هُنَالِكَ فِي الْحَقْلِ أَبْصَرْتُ الدُّنْيَا، وَأَصَابَتْنِي الشَّمْسُ، وَكُنْتُ مَسْرُوْرَةً جِدّاً.",
          en: "There in the field I saw the world, the sun struck me, and I was very pleased.",
          tokens: [
            { surface: "هُنَالِكَ", lemma: "هنالك", pos: "adv", features: "adv", root: "", gloss: "there" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْحَقْلِ", lemma: "حقل", pos: "noun", features: "def.gen", root: "ح ق ل", gloss: "the field" },
            { surface: "أَبْصَرْتُ", lemma: "بصر", pos: "verb", features: "perf.1s", root: "ب ص ر", gloss: "I saw" },
            { surface: "الدُّنْيَا", lemma: "دنيا", pos: "noun", features: "def.acc", root: "د ن و", gloss: "the world" },
            { surface: "وَأَصَابَتْنِي", lemma: "أصاب", pos: "verb", features: "conj+perf.3fs+1s", root: "ص و ب", gloss: "and struck me" },
            { surface: "الشَّمْسُ", lemma: "شمس", pos: "noun", features: "def.nom", root: "ش م س", gloss: "the sun" },
            { surface: "وَكُنْتُ", lemma: "كان", pos: "verb", features: "conj+perf.1s", root: "ك و ن", gloss: "and I was" },
            { surface: "مَسْرُوْرَةً", lemma: "مسرور", pos: "adj", features: "indef.acc.f", root: "س ر ر", gloss: "pleased" },
            { surface: "جِدّاً", lemma: "جدا", pos: "adv", features: "indef.acc", root: "", gloss: "very" }
          ]
        },
        {
          id: "qr2-33-016",
          ar: "وَلٰكِنْ نَزَلَ الْمَطَرُ، وَدَخَلْتُ إِلَىٰ بَاطِنِ التُّرْبَةِ، وَبَقِيْتُ مَدْفُوْنَةً أَيَاماً.",
          en: "But the rain came down, and I entered the interior of the soil and remained buried for days.",
          tokens: [
            { surface: "وَلٰكِنْ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "نَزَلَ", lemma: "نزل", pos: "verb", features: "perf.3ms", root: "ن ز ل", gloss: "came down" },
            { surface: "الْمَطَرُ", lemma: "مطر", pos: "noun", features: "def.nom", root: "م ط ر", gloss: "the rain" },
            { surface: "وَدَخَلْتُ", lemma: "دخل", pos: "verb", features: "conj+perf.1s", root: "د خ ل", gloss: "and I entered" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "into" },
            { surface: "بَاطِنِ", lemma: "باطن", pos: "noun", features: "gen.constr", root: "ب ط ن", gloss: "the interior of" },
            { surface: "التُّرْبَةِ", lemma: "تربة", pos: "noun", features: "def.gen", root: "ت ر ب", gloss: "the soil" },
            { surface: "وَبَقِيْتُ", lemma: "بقي", pos: "verb", features: "conj+perf.1s", root: "ب ق ي", gloss: "and remained" },
            { surface: "مَدْفُوْنَةً", lemma: "مدفون", pos: "adj", features: "indef.acc.f", root: "د ف ن", gloss: "buried" },
            { surface: "أَيَاماً", lemma: "يوم", pos: "noun", features: "pl.indef.acc", root: "ي و م", gloss: "for days" }
          ]
        },
        {
          id: "qr2-33-017",
          ar: "وَأَخَذَ جِسْمِيْ يَكْبُرُ، وَجِلْدِي يَضِيْقُ عَلَيَّ، حَتَّىٰ انْشَقَّ جِلْدِي.",
          en: "My body began to grow, my skin grew tight on me, until my skin split open.",
          tokens: [
            { surface: "وَأَخَذَ", lemma: "أخذ", pos: "verb", features: "conj+perf.3ms", root: "أ خ ذ", gloss: "and began" },
            { surface: "جِسْمِيْ", lemma: "جسم", pos: "noun", features: "nom+1s", root: "ج س م", gloss: "my body" },
            { surface: "يَكْبُرُ", lemma: "كبر", pos: "verb", features: "impf.3ms", root: "ك ب ر", gloss: "to grow" },
            { surface: "وَجِلْدِي", lemma: "جلد", pos: "noun", features: "conj+nom+1s", root: "ج ل د", gloss: "and my skin" },
            { surface: "يَضِيْقُ", lemma: "ضيق", pos: "verb", features: "impf.3ms", root: "ض ي ق", gloss: "grew tight" },
            { surface: "عَلَيَّ", lemma: "على", pos: "prep", features: "prep+1s", root: "", gloss: "on me" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "part", root: "", gloss: "until" },
            { surface: "انْشَقَّ", lemma: "انشق", pos: "verb", features: "perf.3ms", root: "ش ق ق", gloss: "split open" },
            { surface: "جِلْدِي", lemma: "جلد", pos: "noun", features: "nom+1s", root: "ج ل د", gloss: "my skin" }
          ]
        },
        {
          id: "qr2-33-018",
          ar: "وَخَرَجَ مِنْهُ جُذَيْرَاتٌ كَالشَّعْرِ، ثُمَّ خَرَجَتْ وُرَيْقَاتٌ شَقَّتِ التُّرْبَةَ، وَظَهَرَتْ فَوْقَ الأَرْضِ.",
          en: "Little roots like hair came out of it, then little leaves came out that split the soil and appeared above the ground.",
          tokens: [
            { surface: "وَخَرَجَ", lemma: "خرج", pos: "verb", features: "conj+perf.3ms", root: "خ ر ج", gloss: "and came out" },
            { surface: "مِنْهُ", lemma: "من", pos: "prep", features: "prep+3ms", root: "", gloss: "from it" },
            { surface: "جُذَيْرَاتٌ", lemma: "جذيرة", pos: "noun", features: "pl.indef.nom", root: "ج ذ ر", gloss: "little roots" },
            { surface: "كَالشَّعْرِ", lemma: "شعر", pos: "noun", features: "prep+def.gen", root: "ش ع ر", gloss: "like hair" },
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", features: "conj", root: "", gloss: "then" },
            { surface: "خَرَجَتْ", lemma: "خرج", pos: "verb", features: "perf.3fs", root: "خ ر ج", gloss: "came out" },
            { surface: "وُرَيْقَاتٌ", lemma: "وريقة", pos: "noun", features: "pl.indef.nom", root: "و ر ق", gloss: "little leaves" },
            { surface: "شَقَّتِ", lemma: "شق", pos: "verb", features: "perf.3fs", root: "ش ق ق", gloss: "split" },
            { surface: "التُّرْبَةَ", lemma: "تربة", pos: "noun", features: "def.acc", root: "ت ر ب", gloss: "the soil" },
            { surface: "وَظَهَرَتْ", lemma: "ظهر-فعل", pos: "verb", features: "conj+perf.3fs", root: "ظ ه ر", gloss: "and appeared" },
            { surface: "فَوْقَ", lemma: "فوق", pos: "prep", features: "prep", root: "", gloss: "above" },
            { surface: "الأَرْضِ", lemma: "أرض", pos: "noun", features: "def.gen", root: "أ ر ض", gloss: "the ground" }
          ]
        },
        {
          id: "qr2-33-019",
          ar: "فَكُنْتُ يَا سَيِّدِيْ! سُنْبُلَةً قَائِمَةً عَلَىٰ سَاقٍ.",
          en: "So I became, my master, an ear of grain standing on a stalk.",
          tokens: [
            { surface: "فَكُنْتُ", lemma: "كان", pos: "verb", features: "conj+perf.1s", root: "ك و ن", gloss: "so I became" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "سَيِّدِيْ", lemma: "سيد", pos: "noun", features: "nom+1s", root: "س و د", gloss: "my master" },
            { surface: "سُنْبُلَةً", lemma: "سنبلة", pos: "noun", features: "indef.acc", root: "س ن ب ل", gloss: "an ear of grain" },
            { surface: "قَائِمَةً", lemma: "قائم", pos: "adj", features: "indef.acc.f", root: "ق و م", gloss: "standing" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "سَاقٍ", lemma: "ساق", pos: "noun", features: "indef.gen", root: "س و ق", gloss: "a stalk" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا حَدَثَ لِلْحَبَّةِ بَعْدَ أَنْ بَذَرَهَا الرَّجُلُ فِي التُّرَابِ؟",
          options: ["نَزَلَ عَلَيْهَا الْمَطَرُ فَانْشَقَّ جِلْدُهَا وَصَارَتْ سُنْبُلَةً", "بَقِيَتْ حَبَّةً كَمَا هِيَ", "أَكَلَهَا طَائِرٌ"],
          answer: 0,
          qEn: "What happened to the grain after the man sowed it in the soil?",
          optionsEn: ["Rain fell on it, its skin split, and it became an ear of grain", "It stayed a grain as it was", "A bird ate it"]
        }
      ]
    },
    {
      en: "Then I became a yellow ear of grain in the heat of the sun. I would see my friends, and we would talk and sway with joy; they were beautiful days.",
      sentences: [
        {
          id: "qr2-33-020",
          ar: "ثُمَّ أَصْبَحْتُ سُنْبُلَةً صَفْرَاءَ فِيْ حَرَارَةِ الشَّمْسِ.",
          en: "Then I became a yellow ear of grain in the heat of the sun.",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", features: "conj", root: "", gloss: "then" },
            { surface: "أَصْبَحْتُ", lemma: "أصبح", pos: "verb", features: "perf.1s", root: "ص ب ح", gloss: "I became" },
            { surface: "سُنْبُلَةً", lemma: "سنبلة", pos: "noun", features: "indef.acc", root: "س ن ب ل", gloss: "an ear of grain" },
            { surface: "صَفْرَاءَ", lemma: "أصفر", pos: "adj", features: "indef.acc.f", root: "ص ف ر", gloss: "yellow" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "حَرَارَةِ", lemma: "حرارة", pos: "noun", features: "gen.constr", root: "ح ر ر", gloss: "the heat of" },
            { surface: "الشَّمْسِ", lemma: "شمس", pos: "noun", features: "def.gen", root: "ش م س", gloss: "the sun" }
          ]
        },
        {
          id: "qr2-33-021",
          ar: "وَكُنْتُ أَرَىٰ صَدِيْقَاتِيْ، وَكُنَّا نَتَحَدَّثُ وَنَهْتَزُّ طَرَباً، وَكَانَتْ أَيَاماً جَمِيْلَةً.",
          en: "I would see my friends, and we would talk and sway with joy; they were beautiful days.",
          tokens: [
            { surface: "وَكُنْتُ", lemma: "كان", pos: "verb", features: "conj+perf.1s", root: "ك و ن", gloss: "and I would" },
            { surface: "أَرَىٰ", lemma: "رأى", pos: "verb", features: "impf.1s", root: "ر أ ي", gloss: "see" },
            { surface: "صَدِيْقَاتِيْ", lemma: "صديقة", pos: "noun", features: "pl+1s", root: "ص د ق", gloss: "my (female) friends" },
            { surface: "وَكُنَّا", lemma: "كان", pos: "verb", features: "conj+perf.1p", root: "ك و ن", gloss: "and we would" },
            { surface: "نَتَحَدَّثُ", lemma: "تحدث", pos: "verb", features: "impf.1p", root: "ح د ث", gloss: "talk" },
            { surface: "وَنَهْتَزُّ", lemma: "هتز", pos: "verb", features: "conj+impf.1p", root: "ه ز ز", gloss: "and sway" },
            { surface: "طَرَباً", lemma: "طرب", pos: "noun", features: "indef.acc", root: "ط ر ب", gloss: "with joy" },
            { surface: "وَكَانَتْ", lemma: "كان", pos: "verb", features: "conj+perf.3fs", root: "ك و ن", gloss: "and they were" },
            { surface: "أَيَاماً", lemma: "يوم", pos: "noun", features: "pl.indef.acc", root: "ي و م", gloss: "days" },
            { surface: "جَمِيْلَةً", lemma: "جميل", pos: "adj", features: "indef.acc.f", root: "ج م ل", gloss: "beautiful" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ كَانَتِ الْأَيَّامُ الَّتِيْ قَضَتْهَا السُّنْبُلَةُ مَعَ صَدِيْقَاتِهَا؟",
          options: ["أَيَاماً جَمِيْلَةً", "أَيَاماً صَعْبَةً", "أَيَاماً قَصِيْرَةً جِدّاً"],
          answer: 0,
          qEn: "How were the days the ear of grain spent with its friends?",
          optionsEn: ["Beautiful days", "Difficult days", "Very short days"]
        }
      ]
    },
    {
      en: "That period did not last long, for men came carrying sickles. They harvested and carried us, and I was moved to a threshing floor, and stayed there for days.",
      sentences: [
        {
          id: "qr2-33-022",
          ar: "وَمَا طَالَتْ تِلْكَ الْمُدَّةُ، فَقَدْ جَاءَ رِجَالٌ يَحْمِلُوْنَ الْمَنَاجِلَ.",
          en: "That period did not last long, for men came carrying sickles.",
          tokens: [
            { surface: "وَمَا", lemma: "ما", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "طَالَتْ", lemma: "طال", pos: "verb", features: "perf.3fs", root: "ط و ل", gloss: "did last long" },
            { surface: "تِلْكَ", lemma: "تلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "الْمُدَّةُ", lemma: "مدة", pos: "noun", features: "def.nom", root: "م د د", gloss: "the period" },
            { surface: "فَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "for indeed" },
            { surface: "جَاءَ", lemma: "جاء", pos: "verb", features: "perf.3ms", root: "ج ي أ", gloss: "came" },
            { surface: "رِجَالٌ", lemma: "رجل", pos: "noun", features: "pl.indef.nom", root: "ر ج ل", gloss: "men" },
            { surface: "يَحْمِلُوْنَ", lemma: "حمل", pos: "verb", features: "impf.3mp", root: "ح م ل", gloss: "carrying" },
            { surface: "الْمَنَاجِلَ", lemma: "منجل", pos: "noun", features: "pl.def.acc", root: "ن ج ل", gloss: "the sickles" }
          ]
        },
        {
          id: "qr2-33-023",
          ar: "فَحَصَدُوْا وَحَمَلُوْا، وَانْتَقَلْتُ إِلَىٰ بَيْدَرٍ، وَمَكَثْتُ أَيَاماً.",
          en: "They harvested and carried us, and I was moved to a threshing floor, and stayed there for days.",
          tokens: [
            { surface: "فَحَصَدُوْا", lemma: "حصد", pos: "verb", features: "conj+perf.3mp", root: "ح ص د", gloss: "so they harvested" },
            { surface: "وَحَمَلُوْا", lemma: "حمل", pos: "verb", features: "conj+perf.3mp", root: "ح م ل", gloss: "and carried" },
            { surface: "وَانْتَقَلْتُ", lemma: "انتقل", pos: "verb", features: "conj+perf.1s", root: "ن ق ل", gloss: "and I was moved" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "بَيْدَرٍ", lemma: "بيدر", pos: "noun", features: "indef.gen", root: "ب ي د ر", gloss: "a threshing floor" },
            { surface: "وَمَكَثْتُ", lemma: "مكث", pos: "verb", features: "conj+perf.1s", root: "م ك ث", gloss: "and I stayed" },
            { surface: "أَيَاماً", lemma: "يوم", pos: "noun", features: "pl.indef.acc", root: "ي و م", gloss: "for days" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا حَمَلَ الرِّجَالُ لِيَحْصُدُوا الزَّرْعَ؟",
          options: ["الْمَنَاجِلَ", "السِّكَكَ", "الطَّاحُوْنَ"],
          answer: 0,
          qEn: "What did the men carry to harvest the crop?",
          optionsEn: ["Sickles", "Plows", "The mill"]
        }
      ]
    },
    {
      en: "It was one of the harshest days: oxen came and trampled us with their feet. I parted from the ear of grain, and I was cast down and lowly.",
      sentences: [
        {
          id: "qr2-33-024",
          ar: "وَكَانَ مِنْ أَشَدِّ الأَيَّامِ: فَقَدْ جَاءَ ثِيْرَانٌ فَدَاسَتْنَا بِأَقْدَامِهَا.",
          en: "It was one of the harshest days: oxen came and trampled us with their feet.",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and it was" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "أَشَدِّ", lemma: "أشد", pos: "adj", features: "gen.constr", root: "ش د د", gloss: "the harshest of" },
            { surface: "الأَيَّامِ", lemma: "يوم", pos: "noun", features: "pl.def.gen", root: "ي و م", gloss: "the days" },
            { surface: "فَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "for indeed" },
            { surface: "جَاءَ", lemma: "جاء", pos: "verb", features: "perf.3ms", root: "ج ي أ", gloss: "came" },
            { surface: "ثِيْرَانٌ", lemma: "ثور", pos: "noun", features: "pl.indef.nom", root: "ث و ر", gloss: "oxen" },
            { surface: "فَدَاسَتْنَا", lemma: "داس", pos: "verb", features: "conj+perf.3fs+1p", root: "د و س", gloss: "and trampled us" },
            { surface: "بِأَقْدَامِهَا", lemma: "قدم", pos: "noun", features: "prep+pl+3fp", root: "ق د م", gloss: "with their feet" }
          ]
        },
        {
          id: "qr2-33-025",
          ar: "وَفَارَقْتُ السُّنْبُلَةَ، وَكُنْتُ طَرِيْحاً ذَلِيْلاً.",
          en: "I parted from the ear of grain, and I was cast down and lowly.",
          tokens: [
            { surface: "وَفَارَقْتُ", lemma: "فارق", pos: "verb", features: "conj+perf.1s", root: "ف ر ق", gloss: "and I parted from" },
            { surface: "السُّنْبُلَةَ", lemma: "سنبلة", pos: "noun", features: "def.acc", root: "س ن ب ل", gloss: "the ear of grain" },
            { surface: "وَكُنْتُ", lemma: "كان", pos: "verb", features: "conj+perf.1s", root: "ك و ن", gloss: "and I was" },
            { surface: "طَرِيْحاً", lemma: "طريح", pos: "adj", features: "indef.acc", root: "ط ر ح", gloss: "cast down" },
            { surface: "ذَلِيْلاً", lemma: "ذليل", pos: "adj", features: "indef.acc", root: "ذ ل ل", gloss: "lowly" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَتِ الثِّيْرَانُ فِي الْبَيْدَرِ؟",
          options: ["دَاسَتِ السَّنَابِلَ بِأَقْدَامِهَا", "أَكَلَتِ السَّنَابِلَ", "حَمَلَتِ السَّنَابِلَ عَلَىٰ ظُهُوْرِهَا"],
          answer: 0,
          qEn: "What did the oxen do at the threshing floor?",
          optionsEn: ["Trampled the ears of grain with their feet", "Ate the ears of grain", "Carried the ears of grain on their backs"]
        }
      ]
    },
    {
      en: "Then men took us and winnowed us in the wind, and the chaff flew off while the wheat remained.",
      sentences: [
        {
          id: "qr2-33-026",
          ar: "ثُمَّ أَخَذَنَا رِجَالٌ وَذَرَوْنَا فِي الرِّيْحِ، فَطَارَ الْقِشْرُ وَبَقِيَ الْقَمْحُ.",
          en: "Then men took us and winnowed us in the wind, and the chaff flew off while the wheat remained.",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", features: "conj", root: "", gloss: "then" },
            { surface: "أَخَذَنَا", lemma: "أخذ", pos: "verb", features: "perf.3ms+1p", root: "أ خ ذ", gloss: "took us" },
            { surface: "رِجَالٌ", lemma: "رجل", pos: "noun", features: "pl.indef.nom", root: "ر ج ل", gloss: "men" },
            { surface: "وَذَرَوْنَا", lemma: "ذرا", pos: "verb", features: "conj+perf.3mp+1p", root: "ذ ر و", gloss: "and winnowed us" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الرِّيْحِ", lemma: "ريح", pos: "noun", features: "def.gen", root: "ر و ح", gloss: "the wind" },
            { surface: "فَطَارَ", lemma: "طار", pos: "verb", features: "conj+perf.3ms", root: "ط ي ر", gloss: "so flew off" },
            { surface: "الْقِشْرُ", lemma: "قشر", pos: "noun", features: "def.nom", root: "ق ش ر", gloss: "the chaff" },
            { surface: "وَبَقِيَ", lemma: "بقي", pos: "verb", features: "conj+perf.3ms", root: "ب ق ي", gloss: "while remained" },
            { surface: "الْقَمْحُ", lemma: "قمح", pos: "noun", features: "def.nom", root: "ق م ح", gloss: "the wheat" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا ذَرَا الرِّجَالُ الْقَمْحَ فِي الرِّيْحِ؟",
          options: ["لِيَطِيْرَ الْقِشْرُ وَيَبْقَىٰ الْقَمْحُ", "لِيَجِفَّ الْقَمْحُ بِسُرْعَةٍ", "لِيُنَظِّفُوا الْبَيْدَرَ"],
          answer: 0,
          qEn: "Why did the men winnow the wheat in the wind?",
          optionsEn: ["So the chaff would fly off and the wheat remain", "So the wheat would dry quickly", "To clean the threshing floor"]
        }
      ]
    },
    {
      en: "Harsher than all of that: a man carried me to a round thing made of stone, with a hole in it. I would hear from it a harsh, disagreeable sound, and a grinding clatter. He threw me into it, and ground me thoroughly. Do you know its name, my master? That is the mill, or the millstone.",
      sentences: [
        {
          id: "qr2-33-027",
          ar: "وَكَانَ أَشَدَّ مِنْ ذٰلِكَ كُلِّهِ: أَنَّ رَجُلاً حَمَلَنِيْ إِلَىٰ شَيْءٍ مُدَوَّرٍ مِنَ الْحَجَرِ، فِيْهِ ثَقْبٌ.",
          en: "Harsher than all of that: a man carried me to a round thing made of stone, with a hole in it.",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and it was" },
            { surface: "أَشَدَّ", lemma: "أشد", pos: "adj", features: "acc", root: "ش د د", gloss: "harsher" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "than" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "كُلِّهِ", lemma: "كل", pos: "noun", features: "gen.constr+3ms", root: "ك ل ل", gloss: "all of it" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "رَجُلاً", lemma: "رجل", pos: "noun", features: "indef.acc", root: "ر ج ل", gloss: "a man" },
            { surface: "حَمَلَنِيْ", lemma: "حمل", pos: "verb", features: "perf.3ms+1s", root: "ح م ل", gloss: "carried me" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "شَيْءٍ", lemma: "شيء", pos: "noun", features: "indef.gen", root: "ش ي أ", gloss: "a thing" },
            { surface: "مُدَوَّرٍ", lemma: "مدور", pos: "adj", features: "indef.gen", root: "د و ر", gloss: "round" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْحَجَرِ", lemma: "حجر", pos: "noun", features: "def.gen", root: "ح ج ر", gloss: "stone" },
            { surface: "فِيْهِ", lemma: "في", pos: "prep", features: "prep+3ms", root: "", gloss: "in it" },
            { surface: "ثَقْبٌ", lemma: "ثقب", pos: "noun", features: "indef.nom", root: "ث ق ب", gloss: "a hole" }
          ]
        },
        {
          id: "qr2-33-028",
          ar: "وَكُنْتُ أَسْمَعُ لَهُ صَوْتاً شَدِيْداً كَرِيْهاً وَجَعْجَعَةً.",
          en: "I would hear from it a harsh, disagreeable sound, and a grinding clatter.",
          tokens: [
            { surface: "وَكُنْتُ", lemma: "كان", pos: "verb", features: "conj+perf.1s", root: "ك و ن", gloss: "and I would" },
            { surface: "أَسْمَعُ", lemma: "سمع", pos: "verb", features: "impf.1s", root: "س م ع", gloss: "hear" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "from it" },
            { surface: "صَوْتاً", lemma: "صوت", pos: "noun", features: "indef.acc", root: "ص و ت", gloss: "a sound" },
            { surface: "شَدِيْداً", lemma: "شديد", pos: "adj", features: "indef.acc", root: "ش د د", gloss: "harsh" },
            { surface: "كَرِيْهاً", lemma: "كريه", pos: "adj", features: "indef.acc", root: "ك ر ه", gloss: "disagreeable" },
            { surface: "وَجَعْجَعَةً", lemma: "جعجعة", pos: "noun", features: "conj+indef.acc", root: "ج ع ج ع", gloss: "and a grinding clatter" }
          ]
        },
        {
          id: "qr2-33-029",
          ar: "فَأَلْقَانِيْ فِيْهِ، فَطَحَنَنِيْ طَحْناً.",
          en: "He threw me into it, and ground me thoroughly.",
          tokens: [
            { surface: "فَأَلْقَانِيْ", lemma: "ألقى", pos: "verb", features: "conj+perf.3ms+1s", root: "ل ق ي", gloss: "so threw me" },
            { surface: "فِيْهِ", lemma: "في", pos: "prep", features: "prep+3ms", root: "", gloss: "into it" },
            { surface: "فَطَحَنَنِيْ", lemma: "طحن", pos: "verb", features: "conj+perf.3ms+1s", root: "ط ح ن", gloss: "and ground me" },
            { surface: "طَحْناً", lemma: "طحن-اسم", pos: "noun", features: "indef.acc", root: "ط ح ن", gloss: "thoroughly (lit. a grinding)" }
          ]
        },
        {
          id: "qr2-33-030",
          ar: "هَلْ تَعْرِفُ اسْمَهُ يَا سَيِّدِي؟ ذٰلِكَ هُوَ الطَّاحُوْنُ أَوِ الرَّحَىٰ.",
          en: "Do you know its name, my master? That is the mill, or the millstone.",
          tokens: [
            { surface: "هَلْ", lemma: "هل", pos: "part", features: "part", root: "", gloss: "do..?" },
            { surface: "تَعْرِفُ", lemma: "عرف", pos: "verb", features: "impf.2ms", root: "ع ر ف", gloss: "you know" },
            { surface: "اسْمَهُ", lemma: "اسم", pos: "noun", features: "acc+3ms", root: "س م و", gloss: "its name" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "سَيِّدِي", lemma: "سيد", pos: "noun", features: "nom+1s", root: "س و د", gloss: "my master" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "هُوَ", lemma: "هو", pos: "noun", features: "nom", root: "", gloss: "is" },
            { surface: "الطَّاحُوْنُ", lemma: "طاحون", pos: "noun", features: "def.nom", root: "ط ح ن", gloss: "the mill" },
            { surface: "أَوِ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "الرَّحَىٰ", lemma: "رحى", pos: "noun", features: "def.nom", root: "ر ح ي", gloss: "the millstone" }
          ]
        }
      ],
      checks: [
        {
          q: "مَا اسْمُ الشَّيْءِ الْمُدَوَّرِ الَّذِيْ طُحِنَتْ فِيْهِ الْحَبَّةُ؟",
          options: ["الطَّاحُوْنُ أَوِ الرَّحَىٰ", "الْبَيْدَرُ", "الْمِنْجَلُ"],
          answer: 0,
          qEn: "What is the name of the round thing the grain was ground in?",
          optionsEn: ["The mill, or millstone", "The threshing floor", "The sickle"]
        }
      ]
    },
    {
      en: "When I became flour, the baker took me and placed me in a kneading trough. He soaked me with pure water and kneaded me, until I became dough, and he made me into a ball.",
      sentences: [
        {
          id: "qr2-33-031",
          ar: "فَلَمَّا صِرْتُ دَقِيْقاً، أَخَذَنِي الْخَبَّازُ وَوَضَعَنِيْ فِيْ مِعْجَنَةٍ.",
          en: "When I became flour, the baker took me and placed me in a kneading trough.",
          tokens: [
            { surface: "فَلَمَّا", lemma: "لما", pos: "part", features: "conj+part", root: "", gloss: "when" },
            { surface: "صِرْتُ", lemma: "صار", pos: "verb", features: "perf.1s", root: "ص ي ر", gloss: "I became" },
            { surface: "دَقِيْقاً", lemma: "دقيق", pos: "noun", features: "indef.acc", root: "د ق ق", gloss: "flour" },
            { surface: "أَخَذَنِي", lemma: "أخذ", pos: "verb", features: "perf.3ms+1s", root: "أ خ ذ", gloss: "took me" },
            { surface: "الْخَبَّازُ", lemma: "خباز", pos: "noun", features: "def.nom", root: "خ ب ز", gloss: "the baker" },
            { surface: "وَوَضَعَنِيْ", lemma: "وضع", pos: "verb", features: "conj+perf.3ms+1s", root: "و ض ع", gloss: "and placed me" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "مِعْجَنَةٍ", lemma: "معجنة", pos: "noun", features: "indef.gen", root: "ع ج ن", gloss: "a kneading trough" }
          ]
        },
        {
          id: "qr2-33-032",
          ar: "وَغَمَرَنِيْ بِالْمَاءِ النَّقِيِّ وَغَمَزَنِيْ، حَتَّىٰ صِرْتُ عَجِيْناً، فَصَنَعَ مِنِّيْ كُرَةً.",
          en: "He soaked me with pure water and kneaded me, until I became dough, and he made me into a ball.",
          tokens: [
            { surface: "وَغَمَرَنِيْ", lemma: "غمر", pos: "verb", features: "conj+perf.3ms+1s", root: "غ م ر", gloss: "and soaked me" },
            { surface: "بِالْمَاءِ", lemma: "ماء", pos: "noun", features: "prep+def.gen", root: "م و ه", gloss: "with the water" },
            { surface: "النَّقِيِّ", lemma: "نقي", pos: "adj", features: "def.gen", root: "ن ق ي", gloss: "the pure" },
            { surface: "وَغَمَزَنِيْ", lemma: "غمز", pos: "verb", features: "conj+perf.3ms+1s", root: "غ م ز", gloss: "and kneaded me" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "part", root: "", gloss: "until" },
            { surface: "صِرْتُ", lemma: "صار", pos: "verb", features: "perf.1s", root: "ص ي ر", gloss: "I became" },
            { surface: "عَجِيْناً", lemma: "عجين", pos: "noun", features: "indef.acc", root: "ع ج ن", gloss: "dough" },
            { surface: "فَصَنَعَ", lemma: "صنع", pos: "verb", features: "conj+perf.3ms", root: "ص ن ع", gloss: "and he made" },
            { surface: "مِنِّيْ", lemma: "من", pos: "prep", features: "prep+1s", root: "", gloss: "from me" },
            { surface: "كُرَةً", lemma: "كرة", pos: "noun", features: "indef.acc", root: "ك ر و", gloss: "a ball" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ الْخَبَّازُ بَعْدَ أَنْ صَارَتِ الْحَبَّةُ دَقِيْقاً؟",
          options: ["وَضَعَهُ فِيْ مِعْجَنَةٍ وَعَجَنَهُ حَتَّىٰ صَارَ عَجِيْناً", "بَاعَهُ فِي السُّوْقِ فَوْراً", "طَحَنَهُ مَرَّةً أُخْرَىٰ"],
          answer: 0,
          qEn: "What did the baker do after the grain became flour?",
          optionsEn: ["Put it in a kneading trough and kneaded it until it became dough", "Sold it in the market immediately", "Ground it a second time"]
        }
      ]
    },
    {
      en: "There the calamity came, for he flattened me on heated iron that you call the griddle. Do not ask, my master, about my pain and my burning! I twisted and shriveled, but the baker did not have mercy on me and did not show me tenderness, until I became flatbread.",
      sentences: [
        {
          id: "qr2-33-033",
          ar: "هُنَالِكَ جَاءَتِ الْمُصِيْبَةُ، فَقَدْ دَحَانِيْ عَلَىٰ حَدِيْدٍ مُحَمَّىً تُسَمُّوْنَهُ الطَّابَقَ.",
          en: "There the calamity came, for he flattened me on heated iron that you call the griddle.",
          tokens: [
            { surface: "هُنَالِكَ", lemma: "هنالك", pos: "adv", features: "adv", root: "", gloss: "there" },
            { surface: "جَاءَتِ", lemma: "جاء", pos: "verb", features: "perf.3fs", root: "ج ي أ", gloss: "came" },
            { surface: "الْمُصِيْبَةُ", lemma: "مصيبة", pos: "noun", features: "def.nom", root: "ص و ب", gloss: "the calamity" },
            { surface: "فَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "for indeed" },
            { surface: "دَحَانِيْ", lemma: "دحا", pos: "verb", features: "perf.3ms+1s", root: "د ح و", gloss: "he flattened me" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "حَدِيْدٍ", lemma: "حديد", pos: "noun", features: "indef.gen", root: "ح د د", gloss: "iron" },
            { surface: "مُحَمَّىً", lemma: "محمى", pos: "adj", features: "indef.gen", root: "ح م ي", gloss: "heated" },
            { surface: "تُسَمُّوْنَهُ", lemma: "سمى", pos: "verb", features: "impf.2mp+3ms", root: "س م و", gloss: "you call it" },
            { surface: "الطَّابَقَ", lemma: "طابق", pos: "noun", features: "def.acc", root: "ط ب ق", gloss: "the griddle" }
          ]
        },
        {
          id: "qr2-33-034",
          ar: "لَا تَسْأَلْ يَا سَيِّدِيْ! عَنْ أَلَمِيْ وَاحْتِرَاقِيْ.",
          en: "Do not ask, my master, about my pain and my burning!",
          tokens: [
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "do not" },
            { surface: "تَسْأَلْ", lemma: "سأل", pos: "verb", features: "juss.2ms", root: "س أ ل", gloss: "ask" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "سَيِّدِيْ", lemma: "سيد", pos: "noun", features: "nom+1s", root: "س و د", gloss: "my master" },
            { surface: "عَنْ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "about" },
            { surface: "أَلَمِيْ", lemma: "ألم", pos: "noun", features: "gen+1s", root: "أ ل م", gloss: "my pain" },
            { surface: "وَاحْتِرَاقِيْ", lemma: "احتراق", pos: "noun", features: "conj+gen+1s", root: "ح ر ق", gloss: "and my burning" }
          ]
        },
        {
          id: "qr2-33-035",
          ar: "فَقَدِ الْتَوَيْتُ وَانْكَمَشْتُ، وَلٰكِنَّ الْخَبَّازَ لَمْ يَرْحَمْنِيْ وَلَمْ يَرِقَّ لِيْ، حَتَّىٰ كُنْتُ رِقَاقاً.",
          en: "I twisted and shriveled, but the baker did not have mercy on me and did not show me tenderness, until I became flatbread.",
          tokens: [
            { surface: "فَقَدِ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "for indeed" },
            { surface: "الْتَوَيْتُ", lemma: "التوى", pos: "verb", features: "perf.1s", root: "ل و ي", gloss: "I twisted" },
            { surface: "وَانْكَمَشْتُ", lemma: "انكمش", pos: "verb", features: "conj+perf.1s", root: "ك م ش", gloss: "and shriveled" },
            { surface: "وَلٰكِنَّ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "الْخَبَّازَ", lemma: "خباز", pos: "noun", features: "def.acc", root: "خ ب ز", gloss: "the baker" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "did not" },
            { surface: "يَرْحَمْنِيْ", lemma: "رحم", pos: "verb", features: "juss.3ms+1s", root: "ر ح م", gloss: "have mercy on me" },
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "and did not" },
            { surface: "يَرِقَّ", lemma: "رق", pos: "verb", features: "juss.3ms", root: "ر ق ق", gloss: "show tenderness" },
            { surface: "لِيْ", lemma: "ل", pos: "prep", features: "prep+1s", root: "", gloss: "to me" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "part", root: "", gloss: "until" },
            { surface: "كُنْتُ", lemma: "كان", pos: "verb", features: "perf.1s", root: "ك و ن", gloss: "I became" },
            { surface: "رِقَاقاً", lemma: "رقاق", pos: "noun", features: "indef.acc", root: "ر ق ق", gloss: "flatbread" }
          ]
        }
      ],
      checks: [
        {
          q: "أَيْنَ وَضَعَ الْخَبَّازُ الْعَجِيْنَ لِيَصِيْرَ خُبْزاً؟",
          options: ["عَلَىٰ حَدِيْدٍ مُحَمَّىً يُسَمَّىٰ الطَّابَقَ", "فِيْ فُرْنٍ كَبِيْرٍ", "تَحْتَ الشَّمْسِ مُبَاشَرَةً"],
          answer: 0,
          qEn: "Where did the baker put the dough for it to become bread?",
          optionsEn: ["On heated iron called the griddle", "In a big oven", "Directly under the sun"]
        }
      ]
    },
    {
      en: "All of that was for your sake, my master; I toiled for your comfort and wearied myself for your pleasure. I moved from one stage to another, so that you might eat wholesomely and be satisfied. Would it not be fitting for you to say: \"Praise be to Allah, who fed me, gave me drink, and made me one of the Muslims\"?",
      sentences: [
        {
          id: "qr2-33-036",
          ar: "كُلُّ ذٰلِكَ فِيْ سَبِيْلِكَ يَا سَيِّدِيْ، كُنْتُ أَشْقَىٰ لِنَعِيْمِكَ وَأَتْعَبُ لِلَذَّتِكَ.",
          en: "All of that was for your sake, my master; I toiled for your comfort and wearied myself for your pleasure.",
          tokens: [
            { surface: "كُلُّ", lemma: "كل", pos: "noun", features: "nom.constr", root: "ك ل ل", gloss: "all of" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "for" },
            { surface: "سَبِيْلِكَ", lemma: "سبيل", pos: "noun", features: "gen.constr+2ms", root: "س ب ل", gloss: "your sake" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "سَيِّدِيْ", lemma: "سيد", pos: "noun", features: "nom+1s", root: "س و د", gloss: "my master" },
            { surface: "كُنْتُ", lemma: "كان", pos: "verb", features: "perf.1s", root: "ك و ن", gloss: "I was" },
            { surface: "أَشْقَىٰ", lemma: "شقي", pos: "verb", features: "impf.1s", root: "ش ق ي", gloss: "toiling" },
            { surface: "لِنَعِيْمِكَ", lemma: "نعيم", pos: "noun", features: "prep+gen.constr+2ms", root: "ن ع م", gloss: "for your comfort" },
            { surface: "وَأَتْعَبُ", lemma: "تعب", pos: "verb", features: "conj+impf.1s", root: "ت ع ب", gloss: "and wearying myself" },
            { surface: "لِلَذَّتِكَ", lemma: "لذة", pos: "noun", features: "prep+gen.constr+2ms", root: "ل ذ ذ", gloss: "for your pleasure" }
          ]
        },
        {
          id: "qr2-33-037",
          ar: "وَأَنْتَقِلُ مِنْ طَوْرٍ إِلَىٰ طَوْرٍ، لِتَأْكُلَ هَنِيْئاً وَتَشْبَعَ.",
          en: "I moved from one stage to another, so that you might eat wholesomely and be satisfied.",
          tokens: [
            { surface: "وَأَنْتَقِلُ", lemma: "انتقل", pos: "verb", features: "conj+impf.1s", root: "ن ق ل", gloss: "and I moved" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "طَوْرٍ", lemma: "طور", pos: "noun", features: "indef.gen", root: "ط و ر", gloss: "a stage" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "طَوْرٍ", lemma: "طور", pos: "noun", features: "indef.gen", root: "ط و ر", gloss: "a stage" },
            { surface: "لِتَأْكُلَ", lemma: "أكل", pos: "verb", features: "prep+subj.2ms", root: "أ ك ل", gloss: "so you eat" },
            { surface: "هَنِيْئاً", lemma: "هنيء", pos: "adj", features: "indef.acc", root: "ه ن أ", gloss: "wholesomely" },
            { surface: "وَتَشْبَعَ", lemma: "شبع", pos: "verb", features: "conj+subj.2ms", root: "ش ب ع", gloss: "and be satisfied" }
          ]
        },
        {
          id: "qr2-33-038",
          ar: "أَفَلَا يَحْسُنُ بِكَ أَنْ تَقُوْلَ: «الْحَمْدُ لِلَّهِ الَّذِيْ أَطْعَمَنِيْ وَسَقَانِيْ وَجَعَلَنِيْ مِنَ الْمُسْلِمِيْنَ».",
          en: "Would it not be fitting for you to say: \"Praise be to Allah, who fed me, gave me drink, and made me one of the Muslims\"?",
          tokens: [
            { surface: "أَفَلَا", lemma: "لا", pos: "part", features: "part+neg", root: "", gloss: "would...not" },
            { surface: "يَحْسُنُ", lemma: "حسن", pos: "verb", features: "impf.3ms", root: "ح س ن", gloss: "be fitting" },
            { surface: "بِكَ", lemma: "ب", pos: "prep", features: "prep+2ms", root: "", gloss: "for you" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "تَقُوْلَ", lemma: "قال", pos: "verb", features: "subj.2ms", root: "ق و ل", gloss: "say" },
            { surface: "الْحَمْدُ", lemma: "حمد", pos: "noun", features: "def.nom", root: "ح م د", gloss: "praise" },
            { surface: "لِلَّهِ", lemma: "لله", pos: "proper", features: "prep+gen", root: "", gloss: "be to Allah" },
            { surface: "الَّذِيْ", lemma: "الذي", pos: "rel", features: "rel", root: "", gloss: "who" },
            { surface: "أَطْعَمَنِيْ", lemma: "أطعم", pos: "verb", features: "perf.3ms+1s", root: "ط ع م", gloss: "fed me" },
            { surface: "وَسَقَانِيْ", lemma: "سقى", pos: "verb", features: "conj+perf.3ms+1s", root: "س ق ي", gloss: "and gave me drink" },
            { surface: "وَجَعَلَنِيْ", lemma: "جعل", pos: "verb", features: "conj+perf.3ms+1s", root: "ج ع ل", gloss: "and made me" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "one of" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.gen", root: "س ل م", gloss: "the Muslims" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَاذَا نَصَحَتِ الْكِسْرَةُ الْوَلَدَ أَنْ يَقُوْلَ بَعْدَ الطَّعَامِ؟",
          options: ["الْحَمْدُ لِلَّهِ الَّذِيْ أَطْعَمَنِيْ وَسَقَانِيْ وَجَعَلَنِيْ مِنَ الْمُسْلِمِيْنَ", "شُكْراً جَزِيْلاً أَيَّتُهَا الْكِسْرَةُ", "لَنْ آكُلَ خُبْزاً بَعْدَ الْيَوْمِ"],
          answer: 0,
          qEn: "What did the piece of bread advise the boy to say after eating?",
          optionsEn: ["\"Praise be to Allah who fed me, gave me drink, and made me one of the Muslims\"", "\"Thank you very much, piece of bread\"", "\"I will never eat bread again\""]
        }
      ]
    }
  ]
};

// القراءة الراشدة, volume two, chapter 35 (printed heading "٣٥") --
// الْكِيْمِيَاء -- "Alchemy".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 127-130 (PDF page
// index == printed page number). Page 127 opens fresh with the "(٣٥)"
// heading; page 130 ends with the "✳ ✳ ✳" divider partway down, confirming
// the chapter is exactly four pages (127-130); chapter 36 "يَوْمٌ صَائِفٌ"
// begins fresh on 131.
//
// Fourth of the nine chapters (32-40) filling the gap flagged in
// qiraah-v2/index.js's header comment. Spliced in after ch34.
//
// This is a dense, vocabulary-heavy chapter, and several bare spellings
// carry two genuinely different senses *within this same chapter* (not
// just elsewhere in the book), which is a real pos clash the check
// tooling does catch, so each gets the established suffix treatment:
//   - "مال" (noun, "wealth, money", بِالْمَالِ) vs "مَالَ" (verb, "to turn,
//     lead toward", ثُمَّ مَالَ بِهِمْ) -- verb sense takes "مال-فعل".
//   - "حول" (prep, "around", جَلَسُوْا حَوْلَ أَبِيْهِمْ) vs "حَوَّلَ/يُحَوِّلُ"
//     (verb, "to convert, transform", يُحَوِّلُ التُّرَابَ ذَهَبًا) -- the verb
//     sense takes "حول-فعل" (kept distinct from "تحول", the form-V
//     intransitive "to become transformed", which is its own spelling and
//     needs no suffix).
//   - "كثير" as a bare adverbial accusative ("فَتَأَسَّفَ ... كَثِيْرًا",
//     pos adv) vs "كثير" as an ordinary adjective ("مَالًا كَثِيْرًا", pos
//     adj) -- the adjectival sense takes "كثير-صفة".
//   - "خير" (noun, "good, goodness", مِنْ خَيْرٍ وَبِرٍّ) vs "خَيْرٌ" (elative
//     adj, "better", خَيْرٌ لَكَ مِنْ حُمْرِ النَّعَمِ, from the hadith to
//     Sayyiduna Ali) -- the adjectival sense takes "خير-صفة".
//   - "نعم" (part, "yes", قَالَ: نَعَمْ) vs "نَعَم" (noun, "livestock,
//     camels", حُمْرِ النَّعَمِ) -- the noun sense takes "نعم-اسم".
//   - "بذر" (noun, "seeds", هٰذِهِ الْبُذُوْرُ) vs "بَذَرَ" (verb, "to sow",
//     بَذَرَهَا الْفَلَّاحُ) -- the verb sense takes "بذر-فعل".
// All six pairs share a root but are unrelated enough in meaning that
// folding them into one lemma would give the word card a wrong gloss for
// half their tokens -- consistent with how qiraah-v2/chapter-34.js
// resolved its "عاد" (return) vs "عاد-عيادة" (visit the sick) split.
export const CHAPTER = {
  id: "ch35",
  title: {
    ar: "الْكِيْمِيَاء",
    en: "Alchemy"
  },
  pages: [127, 128, 129, 130],
  newWords: [
    "تسامر", "كيمياء", "شيخ", "حول-فعل", "تراب", "ذهب", "نقد", "نيكل", "رصاص", "دينار",
    "ذهبي", "جنيه", "صدق-فعل", "فن", "قرض", "عالم", "طوي", "بساط", "تأسف", "حزن",
    "صناعة", "غني", "مسمع", "أعز", "استطال", "والد", "تعليم", "نهار", "دقيق", "انتبه",
    "مبكر", "منام", "شامخ", "لباس", "فاخر", "مال-فعل", "حصل", "حزب", "هلم", "عجل",
    "اشتياق", "فطر", "سار", "وقف", "حرث", "سكة", "محراث", "تعجب", "استفسر", "تحول",
    "أغلى", "أغنى", "بذر", "بذر-فعل", "اجتهد", "حاصل", "رد", "أضعاف", "بذل", "مصنع",
    "عاكف", "عرق", "سيل", "جبين", "مفيد", "أثمر", "كثير-صفة", "قضى", "حاجة", "كد",
    "يمين", "حلقة", "واعظ", "إنسان", "وجود", "تثقيف", "إصلاح", "أفضل", "تحويل", "اهتدى",
    "صدقة", "جارية", "أجر", "بر", "نبي", "كرم", "وجه", "هدى", "خير-صفة", "حمر",
    "نعم-اسم", "اقتنع", "شكر"
  ],
  lemmas: {
    "كان": { root: "ك و ن", pos: "verb", gloss: "to be" },
    "أولاد": { root: "و ل د", pos: "noun", gloss: "children, boys" },
    "تحدث": { root: "ح د ث", pos: "verb", gloss: "to converse, talk" },
    "في": { root: "", pos: "prep", gloss: "in, at" },
    "ليل": { root: "ل ي ل", pos: "noun", gloss: "night" },
    "تسامر": { root: "س م ر", pos: "verb", gloss: "to chat at night", book_note: "تَسَامَرَ يَتَسَامَرُ: تَحَدَّثَ بَعْضُهُمْ إِلَىٰ بَعْضٍ لَيْلًا." },
    "أكثر": { root: "ك ث ر", pos: "adj", gloss: "most" },
    "حديث": { root: "ح د ث", pos: "noun", gloss: "talk, speech" },
    "عن": { root: "", pos: "prep", gloss: "about" },
    "كيمياء": { root: "", pos: "noun", gloss: "alchemy, chemistry" },
    "إسماعيل": { root: "", pos: "proper", gloss: "Isma'il" },
    "قال": { root: "ق و ل", pos: "verb", gloss: "to say" },
    "سمع": { root: "س م ع", pos: "verb", gloss: "to hear" },
    "أن": { root: "", pos: "part", gloss: "that" },
    "شيخ": { root: "ش ي خ", pos: "noun", gloss: "an elder, sheikh" },
    "حول-فعل": { root: "ح و ل", pos: "verb", gloss: "to convert, transform (something into)" },
    "تراب": { root: "ت ر ب", pos: "noun", gloss: "dust, soil" },
    "ذهب": { root: "ذ ه ب", pos: "noun", gloss: "gold" },
    "جعل": { root: "ج ع ل", pos: "verb", gloss: "to make (something into)" },
    "نقد": { root: "ن ق د", pos: "noun", gloss: "coin, currency" },
    "نيكل": { root: "", pos: "noun", gloss: "nickel" },
    "رصاص": { root: "ر ص ص", pos: "noun", gloss: "lead (the metal)" },
    "دينار": { root: "", pos: "noun", gloss: "a dinar" },
    "ذهبي": { root: "ذ ه ب", pos: "adj", gloss: "golden" },
    "جنيه": { root: "", pos: "noun", gloss: "a guinea, pound (currency)" },
    "صدق-فعل": { root: "ص د ق", pos: "verb", gloss: "to believe, confirm (someone)" },
    "محمود": { root: "", pos: "proper", gloss: "Mahmoud" },
    "نعم": { root: "", pos: "part", gloss: "yes" },
    "إن": { root: "", pos: "part", gloss: "indeed" },
    "فن": { root: "ف ن ن", pos: "noun", gloss: "an art, craft, skill" },
    "ناس": { root: "ن و س", pos: "noun", gloss: "people" },
    "عرف": { root: "ع ر ف", pos: "verb", gloss: "to know" },
    "لكن": { root: "", pos: "conj", gloss: "but" },
    "قرض": { root: "ق ر ض", pos: "verb", gloss: "to die out, become extinct", book_note: "انْقَرَضَ يَنْقَرِضُ القَوْمُ: مَاتُوْا." },
    "عالم": { root: "ع ل م", pos: "noun", gloss: "a scholar" },
    "هذا": { root: "", pos: "dem", gloss: "this" },
    "طوي": { root: "ط و ي", pos: "verb", gloss: "to be folded up, rolled up" },
    "ذلك": { root: "", pos: "dem", gloss: "that" },
    "بساط": { root: "ب س ط", pos: "noun", gloss: "a carpet, rug" },
    "تأسف": { root: "أ س ف", pos: "verb", gloss: "to regret, feel sorry" },
    "كثير": { root: "ك ث ر", pos: "adv", gloss: "much, greatly" },
    "حزن": { root: "ح ز ن", pos: "verb", gloss: "to grieve, become sad" },
    "لو": { root: "", pos: "part", gloss: "if (hypothetical)" },
    "وجد": { root: "و ج د", pos: "verb", gloss: "to find" },
    "أحد": { root: "أ ح د", pos: "noun", gloss: "anyone, someone" },
    "صناعة": { root: "ص ن ع", pos: "noun", gloss: "a craft, industry" },
    "تعلم": { root: "ع ل م", pos: "verb", gloss: "to learn" },
    "من": { root: "", pos: "prep", gloss: "from" },
    "صار": { root: "ص ي ر", pos: "verb", gloss: "to become" },
    "غني": { root: "غ ن ي", pos: "adj", gloss: "rich, wealthy" },
    "دون": { root: "", pos: "prep", gloss: "without" },
    "تعب": { root: "ت ع ب", pos: "noun", gloss: "exertion, fatigue" },
    "مشقة": { root: "م ش ق", pos: "noun", gloss: "hardship, toil" },
    "أب": { root: "أ ب و", pos: "noun", gloss: "father" },
    "مسمع": { root: "س م ع", pos: "noun", gloss: "earshot, hearing" },
    "يا": { root: "", pos: "part", gloss: "O" },
    "لا": { root: "", pos: "part", gloss: "no, not" },
    "أعز": { root: "ع ز ز", pos: "adj", gloss: "dearer, most precious" },
    "عند": { root: "", pos: "prep", gloss: "with, to" },
    "علم": { root: "ع ل م", pos: "verb", gloss: "to teach" },
    "غدا": { root: "غ د و", pos: "adv", gloss: "tomorrow" },
    "أخبر": { root: "خ ب ر", pos: "verb", gloss: "to inform, tell" },
    "فرح": { root: "ف ر ح", pos: "verb", gloss: "to become happy" },
    "نظر": { root: "ن ظ ر", pos: "verb", gloss: "to look" },
    "بعض": { root: "ب ع ض", pos: "noun", gloss: "some, part of" },
    "شق": { root: "ش ق ق", pos: "verb", gloss: "to become burdensome upon" },
    "على": { root: "", pos: "prep", gloss: "on, upon" },
    "انتظر": { root: "ن ظ ر", pos: "verb", gloss: "to wait" },
    "إلى": { root: "", pos: "prep", gloss: "to, until" },
    "صباح": { root: "ص ب ح", pos: "noun", gloss: "morning" },
    "استطال": { root: "ط و ل", pos: "verb", gloss: "to seem long, drag on" },
    "والد": { root: "و ل د", pos: "noun", gloss: "father" },
    "ل": { root: "", pos: "prep", gloss: "to, for" },
    "يمكن": { root: "م ك ن", pos: "verb", gloss: "to be possible" },
    "تعليم": { root: "ع ل م", pos: "noun", gloss: "teaching" },
    "إلا": { root: "", pos: "part", gloss: "except" },
    "نهار": { root: "ن ه ر", pos: "noun", gloss: "daytime" },
    "دقيق": { root: "د ق ق", pos: "adj", gloss: "precise, delicate" },
    "نام": { root: "ن و م", pos: "verb", gloss: "to sleep" },
    "انتبه": { root: "ن ب ه", pos: "verb", gloss: "to wake up, become alert" },
    "مبكر": { root: "ب ك ر", pos: "adj", gloss: "early" },
    "زال": { root: "ز ي ل", pos: "verb", gloss: "to continue (to be); to cease" },
    "رأى": { root: "ر أ ي", pos: "verb", gloss: "to see; to dream" },
    "منام": { root: "ن و م", pos: "noun", gloss: "sleep, a dream" },
    "هاشم": { root: "", pos: "proper", gloss: "Hashim" },
    "قصر": { root: "ق ص ر", pos: "noun", gloss: "a palace" },
    "شامخ": { root: "ش م خ", pos: "adj", gloss: "lofty, towering", book_note: "شَامِخ: عَالٍ." },
    "لباس": { root: "ل ب س", pos: "noun", gloss: "clothing, a garment" },
    "فاخر": { root: "ف خ ر", pos: "adj", gloss: "luxurious, fine" },
    "بنى": { root: "ب ن ي", pos: "verb", gloss: "to build" },
    "صنع": { root: "ص ن ع", pos: "verb", gloss: "to make" },
    "مال": { root: "م و ل", pos: "noun", gloss: "wealth, money" },
    "الذي": { root: "", pos: "rel", gloss: "which, that" },
    "حصل": { root: "ح ص ل", pos: "verb", gloss: "to be obtained, come about" },
    "صلى": { root: "ص ل و", pos: "verb", gloss: "to pray" },
    "صبح": { root: "ص ب ح", pos: "noun", gloss: "dawn, the dawn prayer" },
    "جلس": { root: "ج ل س", pos: "verb", gloss: "to sit" },
    "حول": { root: "ح و ل", pos: "prep", gloss: "around" },
    "فراغ": { root: "ف ر غ", pos: "noun", gloss: "being free, finishing" },
    "تلاوة": { root: "ت ل و", pos: "noun", gloss: "recitation" },
    "قرآن": { root: "", pos: "proper", gloss: "the Qur'an" },
    "أتم": { root: "ت م م", pos: "verb", gloss: "to complete" },
    "حزب": { root: "ح ز ب", pos: "noun", gloss: "a portion (of the Qur'an recited)" },
    "هلم": { root: "", pos: "verb", gloss: "come!", book_note: "هَلُمُّوْا: تَعَالَوْا." },
    "ابن": { root: "ب ن ي", pos: "noun", gloss: "a son" },
    "خرج": { root: "خ ر ج", pos: "verb", gloss: "to go out" },
    "مع": { root: "", pos: "prep", gloss: "with" },
    "عجل": { root: "ع ج ل", pos: "verb", gloss: "to hasten (someone)" },
    "اشتياق": { root: "ش و ق", pos: "noun", gloss: "longing, yearning" },
    "فطر": { root: "ف ط ر", pos: "verb", gloss: "to break one's fast" },
    "سار": { root: "س ي ر", pos: "verb", gloss: "to walk, proceed" },
    "طريق": { root: "ط ر ق", pos: "noun", gloss: "a road, path" },
    "بعد": { root: "", pos: "prep", gloss: "after" },
    "حتى": { root: "", pos: "part", gloss: "until" },
    "وقف": { root: "و ق ف", pos: "verb", gloss: "to stop, halt" },
    "حقل": { root: "ح ق ل", pos: "noun", gloss: "a field" },
    "حرث": { root: "ح ر ث", pos: "verb", gloss: "to plow" },
    "فلاح": { root: "ف ل ح", pos: "noun", gloss: "a farmer" },
    "يد": { root: "ي د ي", pos: "noun", gloss: "hand" },
    "سكة": { root: "س ك ك", pos: "noun", gloss: "a plowshare" },
    "تحت": { root: "", pos: "prep", gloss: "under" },
    "محراث": { root: "ح ر ث", pos: "noun", gloss: "a plow" },
    "تعجب": { root: "ع ج ب", pos: "verb", gloss: "to be amazed" },
    "استفسر": { root: "ف س ر", pos: "verb", gloss: "to ask for an explanation" },
    "تحول": { root: "ح و ل", pos: "verb", gloss: "to become transformed, turn into" },
    "بل": { root: "", pos: "conj", gloss: "rather" },
    "أغلى": { root: "غ ل و", pos: "adj", gloss: "more precious, more expensive" },
    "أغنى": { root: "غ ن ي", pos: "verb", gloss: "to be of use, benefit" },
    "بذر": { root: "ب ذ ر", pos: "noun", gloss: "seeds" },
    "بذر-فعل": { root: "ب ذ ر", pos: "verb", gloss: "to sow" },
    "اجتهد": { root: "ج ه د", pos: "verb", gloss: "to strive, work hard" },
    "أيام": { root: "ي و م", pos: "noun", gloss: "days" },
    "أتى": { root: "أ ت ي", pos: "verb", gloss: "to come, bring" },
    "حاصل": { root: "ح ص ل", pos: "noun", gloss: "a harvest, yield" },
    "كبير": { root: "ك ب ر", pos: "adj", gloss: "big, great" },
    "رد": { root: "ر د د", pos: "verb", gloss: "to return, restore (something to)" },
    "الله": { root: "", pos: "proper", gloss: "Allah" },
    "عمل": { root: "ع م ل", pos: "noun", gloss: "a deed, work" },
    "عمل-فعل": { root: "ع م ل", pos: "verb", gloss: "to do, work" },
    "ما": { root: "", pos: "rel", gloss: "that which, what" },
    "ما-استفهام": { root: "", pos: "part", gloss: "what" },
    "أنتم": { root: "", pos: "noun", gloss: "you (pl.)" },
    "أنا": { root: "", pos: "noun", gloss: "I" },
    "لم": { root: "", pos: "part", gloss: "not (+ jussive, past negation)" },
    "قد": { root: "", pos: "part", gloss: "indeed, already" },
    "ب": { root: "", pos: "prep", gloss: "with, by" },
    "أكل": { root: "أ ك ل", pos: "verb", gloss: "to eat" },
    "أضعاف": { root: "ض ع ف", pos: "noun", gloss: "multiples, many times over", book_note: "ضِعْف جمع أَضْعَاف الشيء: مِثْلُهُ أَوْ مَا زَادَ عَلَىٰ ذٰلِكَ." },
    "بذل": { root: "ب ذ ل", pos: "verb", gloss: "to expend, give" },
    "ثم": { root: "", pos: "conj", gloss: "then" },
    "مر": { root: "م ر ر", pos: "verb", gloss: "to pass by" },
    "مصنع": { root: "ص ن ع", pos: "noun", gloss: "a factory, workshop" },
    "عاكف": { root: "ع ك ف", pos: "adj", gloss: "devoted to, absorbed in" },
    "عرق": { root: "ع ر ق", pos: "noun", gloss: "sweat" },
    "سيل": { root: "س ي ل", pos: "verb", gloss: "to flow" },
    "جبين": { root: "ج ب ن", pos: "noun", gloss: "the brow, forehead" },
    "أشياء": { root: "ش ي أ", pos: "noun", gloss: "things" },
    "مفيد": { root: "ف ي د", pos: "adj", gloss: "useful, beneficial" },
    "جدا": { root: "", pos: "adv", gloss: "very" },
    "أثمر": { root: "ث م ر", pos: "verb", gloss: "to bear fruit, yield" },
    "كثير-صفة": { root: "ك ث ر", pos: "adj", gloss: "much, a lot of" },
    "قضى": { root: "ق ض ي", pos: "verb", gloss: "to fulfill, satisfy" },
    "حاجة": { root: "ح و ج", pos: "noun", gloss: "a need" },
    "كد": { root: "ك د د", pos: "noun", gloss: "toil, effort" },
    "يمين": { root: "ي م ن", pos: "noun", gloss: "the right hand" },
    "مال-فعل": { root: "م ي ل", pos: "verb", gloss: "to turn, lead (someone toward)" },
    "حلقة": { root: "ح ل ق", pos: "noun", gloss: "a study circle" },
    "معلم": { root: "ع ل م", pos: "noun", gloss: "a teacher" },
    "مجلس": { root: "ج ل س", pos: "noun", gloss: "a gathering, session" },
    "واعظ": { root: "و ع ظ", pos: "noun", gloss: "a preacher, admonisher" },
    "إنسان": { root: "أ ن س", pos: "noun", gloss: "a human being" },
    "شيء": { root: "ش ي أ", pos: "noun", gloss: "a thing" },
    "وجود": { root: "و ج د", pos: "noun", gloss: "existence" },
    "تثقيف": { root: "ث ق ف", pos: "noun", gloss: "cultivation, education" },
    "إصلاح": { root: "ص ل ح", pos: "noun", gloss: "reform, correction" },
    "أفضل": { root: "ف ض ل", pos: "adj", gloss: "better, best" },
    "تحويل": { root: "ح و ل", pos: "noun", gloss: "converting, transforming" },
    "إذا": { root: "", pos: "part", gloss: "if, when" },
    "هؤلاء": { root: "", pos: "dem", gloss: "these" },
    "اهتدى": { root: "ه د ي", pos: "verb", gloss: "to be guided, find guidance" },
    "صدقة": { root: "ص د ق", pos: "noun", gloss: "charity" },
    "جارية": { root: "ج ر ي", pos: "adj", gloss: "ongoing, continuous" },
    "أجر": { root: "أ ج ر", pos: "noun", gloss: "a reward" },
    "كل": { root: "ك ل ل", pos: "noun", gloss: "all, every" },
    "خير": { root: "خ ي ر", pos: "noun", gloss: "good, goodness" },
    "بر": { root: "ب ر ر", pos: "noun", gloss: "righteousness" },
    "نبي": { root: "ن ب أ", pos: "noun", gloss: "prophet" },
    "سيد": { root: "س و د", pos: "noun", gloss: "master" },
    "علي": { root: "", pos: "proper", gloss: "Ali" },
    "كرم": { root: "ك ر م", pos: "verb", gloss: "to honor, ennoble" },
    "وجه": { root: "و ج ه", pos: "noun", gloss: "face" },
    "هدى": { root: "ه د ي", pos: "verb", gloss: "to guide" },
    "رجل": { root: "ر ج ل", pos: "noun", gloss: "a man" },
    "خير-صفة": { root: "خ ي ر", pos: "adj", gloss: "better" },
    "حمر": { root: "ح م ر", pos: "adj", gloss: "red" },
    "نعم-اسم": { root: "ن ع م", pos: "noun", gloss: "livestock, camels" },
    "اقتنع": { root: "ق ن ع", pos: "verb", gloss: "to be convinced" },
    "شكر": { root: "ش ك ر", pos: "verb", gloss: "to thank" },
    "رجع": { root: "ر ج ع", pos: "verb", gloss: "to return" }
  },
  paragraphs: [
    {
      en: "The children used to talk and chat together at night, and most of their talk was about alchemy. Isma'il would say: \"I heard that an old man turns dust into gold, and turns nickel and lead coins into gold dinars and golden guineas.\"",
      sentences: [
        {
          id: "qr2-35-001",
          ar: "كَانَ الْأَوْلَادُ يَتَحَدَّثُوْنَ فِي اللَّيْلِ وَيَتَسَامَرُوْنَ، وَكَانَ أَكْثَرُ حَدِيْثِهِمْ عَنِ الْكِيْمِيَاءِ،",
          en: "The children used to talk and chat together at night, and most of their talk was about alchemy,",
          tokens: [
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "were" },
            { surface: "الْأَوْلَادُ", lemma: "أولاد", pos: "noun", features: "def.nom", root: "و ل د", gloss: "the children" },
            { surface: "يَتَحَدَّثُوْنَ", lemma: "تحدث", pos: "verb", features: "impf.3mp", root: "ح د ث", gloss: "would talk" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "اللَّيْلِ", lemma: "ليل", pos: "noun", features: "def.gen", root: "ل ي ل", gloss: "night" },
            { surface: "وَيَتَسَامَرُوْنَ", lemma: "تسامر", pos: "verb", features: "conj+impf.3mp", root: "س م ر", gloss: "and chat together" },
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "أَكْثَرُ", lemma: "أكثر", pos: "adj", features: "nom.constr", root: "ك ث ر", gloss: "most of" },
            { surface: "حَدِيْثِهِمْ", lemma: "حديث", pos: "noun", features: "gen+3mp", root: "ح د ث", gloss: "their talk" },
            { surface: "عَنِ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "about" },
            { surface: "الْكِيْمِيَاءِ", lemma: "كيمياء", pos: "noun", features: "def.gen", root: "", gloss: "alchemy" }
          ]
        },
        {
          id: "qr2-35-002",
          ar: "وَكَانَ إِسْمَاعِيْلُ يَقُوْلُ: سَمِعْتُ أَنَّ شَيْخًا يُحَوِّلُ التُّرَابَ ذَهَبًا،",
          en: "Isma'il would say: \"I heard that an old man turns dust into gold,\"",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "إِسْمَاعِيْلُ", lemma: "إسماعيل", pos: "proper", features: "def.nom", root: "", gloss: "Isma'il" },
            { surface: "يَقُوْلُ", lemma: "قال", pos: "verb", features: "impf.3ms", root: "ق و ل", gloss: "saying" },
            { surface: "سَمِعْتُ", lemma: "سمع", pos: "verb", features: "perf.1s", root: "س م ع", gloss: "I heard" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "شَيْخًا", lemma: "شيخ", pos: "noun", features: "indef.acc", root: "ش ي خ", gloss: "an old man" },
            { surface: "يُحَوِّلُ", lemma: "حول-فعل", pos: "verb", features: "impf.3ms", root: "ح و ل", gloss: "turns" },
            { surface: "التُّرَابَ", lemma: "تراب", pos: "noun", features: "def.acc", root: "ت ر ب", gloss: "the dust" },
            { surface: "ذَهَبًا", lemma: "ذهب", pos: "noun", features: "indef.acc", root: "ذ ه ب", gloss: "into gold" }
          ]
        },
        {
          id: "qr2-35-003",
          ar: "وَيَجْعَلُ نُقُوْدَ النَّيْكَلِ وَالرَّصَاصِ: دَنَانِيْرَ ذَهَبِيَّةً وَجُنَيْهَاتٍ.",
          en: "and turns nickel and lead coins into gold dinars and golden guineas.\"",
          tokens: [
            { surface: "وَيَجْعَلُ", lemma: "جعل", pos: "verb", features: "conj+impf.3ms", root: "ج ع ل", gloss: "and makes" },
            { surface: "نُقُوْدَ", lemma: "نقد", pos: "noun", features: "pl.acc.constr", root: "ن ق د", gloss: "coins of" },
            { surface: "النَّيْكَلِ", lemma: "نيكل", pos: "noun", features: "def.gen", root: "", gloss: "nickel" },
            { surface: "وَالرَّصَاصِ", lemma: "رصاص", pos: "noun", features: "conj+def.gen", root: "ر ص ص", gloss: "and lead" },
            { surface: "دَنَانِيْرَ", lemma: "دينار", pos: "noun", features: "pl.indef.acc", root: "", gloss: "dinars" },
            { surface: "ذَهَبِيَّةً", lemma: "ذهبي", pos: "adj", features: "indef.acc.f", root: "ذ ه ب", gloss: "golden" },
            { surface: "وَجُنَيْهَاتٍ", lemma: "جنيه", pos: "noun", features: "conj+pl.indef.gen", root: "", gloss: "and guineas" }
          ]
        }
      ],
      checks: [
        {
          q: "عَمَّ كَانَ أَكْثَرُ حَدِيْثِ الْأَوْلَادِ فِي اللَّيْلِ؟",
          options: ["عَنِ الْكِيْمِيَاءِ", "عَنِ الْمَدْرَسَةِ", "عَنِ السَّفَرِ"],
          answer: 0,
          qEn: "What was most of the children's nighttime talk about?",
          optionsEn: ["Alchemy", "School", "Travel"]
        }
      ]
    },
    {
      en: "Mahmoud believed him and said: \"Yes! It is a craft people used to know, but the masters of this craft have died out, and that chapter has closed.\"",
      sentences: [
        {
          id: "qr2-35-004",
          ar: "وَصَدَّقَهُ مَحْمُوْدٌ وَقَالَ: نَعَمْ! إِنَّهُ فَنٌّ كَانَ النَّاسُ يَعْرِفُوْنَهُ،",
          en: "Mahmoud believed him and said: \"Yes! It is a craft people used to know,\"",
          tokens: [
            { surface: "وَصَدَّقَهُ", lemma: "صدق-فعل", pos: "verb", features: "conj+perf.3ms+3ms", root: "ص د ق", gloss: "and believed him" },
            { surface: "مَحْمُوْدٌ", lemma: "محمود", pos: "proper", features: "indef.nom", root: "", gloss: "Mahmoud" },
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "نَعَمْ", lemma: "نعم", pos: "part", features: "part", root: "", gloss: "yes" },
            { surface: "إِنَّهُ", lemma: "إن", pos: "part", features: "part+3ms", root: "", gloss: "it is" },
            { surface: "فَنٌّ", lemma: "فن", pos: "noun", features: "indef.nom", root: "ف ن ن", gloss: "a craft" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "were" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "people" },
            { surface: "يَعْرِفُوْنَهُ", lemma: "عرف", pos: "verb", features: "impf.3mp+3ms", root: "ع ر ف", gloss: "used to know it" }
          ]
        },
        {
          id: "qr2-35-005",
          ar: "وَلٰكِنِ انْقَرَضَ عُلَمَاءُ هٰذَا الْفَنِّ،",
          en: "but the masters of this craft have died out,",
          tokens: [
            { surface: "وَلٰكِنِ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "انْقَرَضَ", lemma: "قرض", pos: "verb", features: "perf.3ms", root: "ق ر ض", gloss: "died out" },
            { surface: "عُلَمَاءُ", lemma: "عالم", pos: "noun", features: "pl.nom.constr", root: "ع ل م", gloss: "the masters of" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem", root: "", gloss: "this" },
            { surface: "الْفَنِّ", lemma: "فن", pos: "noun", features: "def.gen", root: "ف ن ن", gloss: "the craft" }
          ]
        },
        {
          id: "qr2-35-006",
          ar: "وَطُوِيَ ذٰلِكَ الْبِسَاطُ.",
          en: "and that chapter has closed.\"",
          tokens: [
            { surface: "وَطُوِيَ", lemma: "طوي", pos: "verb", features: "conj+pass.perf.3ms", root: "ط و ي", gloss: "and was folded up" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "الْبِسَاطُ", lemma: "بساط", pos: "noun", features: "def.nom", root: "ب س ط", gloss: "the carpet" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا قَالَ مَحْمُوْدٌ عَنِ الْكِيْمِيَاءِ؟",
          options: ["إِنَّهُ فَنٌّ انْقَرَضَ عُلَمَاؤُهُ", "إِنَّهُ فَنٌّ سَهْلٌ يَتَعَلَّمُهُ الْجَمِيْعُ", "إِنَّهُ كَذِبٌ لَا أَصْلَ لَهُ"],
          answer: 0,
          qEn: "What did Mahmoud say about alchemy?",
          optionsEn: ["That it is a craft whose masters have died out", "That it is an easy craft everyone learns", "That it is a lie with no basis"]
        }
      ]
    },
    {
      en: "The children were greatly saddened and grieved, and said: \"If only we found someone who knows this craft, we would learn it from him, and become rich without toil or hardship.\"",
      sentences: [
        {
          id: "qr2-35-007",
          ar: "فَتَأَسَّفَ الْأَوْلَادُ كَثِيْرًا وَحَزِنُوْا،",
          en: "The children were greatly saddened and grieved,",
          tokens: [
            { surface: "فَتَأَسَّفَ", lemma: "تأسف", pos: "verb", features: "conj+perf.3ms", root: "أ س ف", gloss: "so regretted" },
            { surface: "الْأَوْلَادُ", lemma: "أولاد", pos: "noun", features: "def.nom", root: "و ل د", gloss: "the children" },
            { surface: "كَثِيْرًا", lemma: "كثير", pos: "adv", features: "indef.acc", root: "ك ث ر", gloss: "greatly" },
            { surface: "وَحَزِنُوْا", lemma: "حزن", pos: "verb", features: "conj+perf.3mp", root: "ح ز ن", gloss: "and grieved" }
          ]
        },
        {
          id: "qr2-35-008",
          ar: "وَقَالُوْا: لَوْ وَجَدْنَا أَحَدًا يَعْرِفُ هٰذِهِ الصِّنَاعَةَ، لَتَعَلَّمْنَاهَا مِنْهُ،",
          en: "and said: \"If only we found someone who knows this craft, we would learn it from him,\"",
          tokens: [
            { surface: "وَقَالُوْا", lemma: "قال", pos: "verb", features: "conj+perf.3mp", root: "ق و ل", gloss: "and said" },
            { surface: "لَوْ", lemma: "لو", pos: "part", features: "part", root: "", gloss: "if" },
            { surface: "وَجَدْنَا", lemma: "وجد", pos: "verb", features: "perf.1p", root: "و ج د", gloss: "we found" },
            { surface: "أَحَدًا", lemma: "أحد", pos: "noun", features: "indef.acc", root: "أ ح د", gloss: "someone" },
            { surface: "يَعْرِفُ", lemma: "عرف", pos: "verb", features: "impf.3ms", root: "ع ر ف", gloss: "who knows" },
            { surface: "هٰذِهِ", lemma: "هذا", pos: "dem", features: "dem.f", root: "", gloss: "this" },
            { surface: "الصِّنَاعَةَ", lemma: "صناعة", pos: "noun", features: "def.acc", root: "ص ن ع", gloss: "the craft" },
            { surface: "لَتَعَلَّمْنَاهَا", lemma: "تعلم", pos: "verb", features: "perf.1p+3fs", root: "ع ل م", gloss: "we would learn it" },
            { surface: "مِنْهُ", lemma: "من", pos: "prep", features: "prep+3ms", root: "", gloss: "from him" }
          ]
        },
        {
          id: "qr2-35-009",
          ar: "وَصِرْنَا أَغْنِيَاءَ بِدُوْنِ تَعَبٍ وَمَشَقَّةٍ.",
          en: "and become rich without toil or hardship.\"",
          tokens: [
            { surface: "وَصِرْنَا", lemma: "صار", pos: "verb", features: "conj+perf.1p", root: "ص ي ر", gloss: "and we became" },
            { surface: "أَغْنِيَاءَ", lemma: "غني", pos: "adj", features: "pl.indef.acc", root: "غ ن ي", gloss: "rich" },
            { surface: "بِدُوْنِ", lemma: "دون", pos: "prep", features: "prep", root: "", gloss: "without" },
            { surface: "تَعَبٍ", lemma: "تعب", pos: "noun", features: "indef.gen", root: "ت ع ب", gloss: "toil" },
            { surface: "وَمَشَقَّةٍ", lemma: "مشقة", pos: "noun", features: "conj+indef.gen", root: "م ش ق", gloss: "and hardship" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا تَمَنَّى الْأَوْلَادُ؟",
          options: ["أَنْ يَجِدُوا مَنْ يُعَلِّمُهُمُ الْكِيْمِيَاءَ فَيَصِيْرُوا أَغْنِيَاءَ", "أَنْ يُسَافِرُوا إِلَى بَلَدٍ بَعِيْدَةٍ", "أَنْ يَنَامُوا طَوِيْلًا"],
          answer: 0,
          qEn: "What did the children wish for?",
          optionsEn: ["To find someone to teach them alchemy so they'd become rich", "To travel to a distant country", "To sleep for a long time"]
        }
      ]
    },
    {
      en: "Their father was within earshot of them, and said: \"Don't be sad, my children! For I know alchemy, and you are the dearest of people to me, so I will teach you tomorrow, and tell you about the craft of alchemy.\"",
      sentences: [
        {
          id: "qr2-35-010",
          ar: "وَكَانَ أَبُوْهُ بِمَسْمَعٍ مِنْهُمْ، فَقَالَ: لَا تَتَأَسَّفُوْا يَا أَوْلَادِيْ!",
          en: "Their father was within earshot of them, and said: \"Don't be sad, my children!\"",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "أَبُوْهُ", lemma: "أب", pos: "noun", features: "nom+3ms", root: "أ ب و", gloss: "his father" },
            { surface: "بِمَسْمَعٍ", lemma: "مسمع", pos: "noun", features: "prep+indef.gen", root: "س م ع", gloss: "within earshot" },
            { surface: "مِنْهُمْ", lemma: "من", pos: "prep", features: "prep+3mp", root: "", gloss: "of them" },
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "do not" },
            { surface: "تَتَأَسَّفُوْا", lemma: "تأسف", pos: "verb", features: "juss.2mp", root: "أ س ف", gloss: "be sad" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَوْلَادِيْ", lemma: "أولاد", pos: "noun", features: "nom+1s", root: "و ل د", gloss: "my children" }
          ]
        },
        {
          id: "qr2-35-011",
          ar: "فَإِنِّي أَعْرِفُ الْكِيْمِيَاءَ، وَأَنْتُمْ أَعَزُّ النَّاسِ عِنْدِيْ،",
          en: "For I know alchemy, and you are the dearest of people to me,",
          tokens: [
            { surface: "فَإِنِّي", lemma: "إن", pos: "part", features: "conj+part+1s", root: "", gloss: "for indeed I" },
            { surface: "أَعْرِفُ", lemma: "عرف", pos: "verb", features: "impf.1s", root: "ع ر ف", gloss: "know" },
            { surface: "الْكِيْمِيَاءَ", lemma: "كيمياء", pos: "noun", features: "def.acc", root: "", gloss: "alchemy" },
            { surface: "وَأَنْتُمْ", lemma: "أنتم", pos: "noun", features: "conj+nom", root: "", gloss: "and you" },
            { surface: "أَعَزُّ", lemma: "أعز", pos: "adj", features: "nom.constr", root: "ع ز ز", gloss: "the dearest of" },
            { surface: "النَّاسِ", lemma: "ناس", pos: "noun", features: "def.gen", root: "ن و س", gloss: "people" },
            { surface: "عِنْدِيْ", lemma: "عند", pos: "prep", features: "prep+1s", root: "", gloss: "to me" }
          ]
        },
        {
          id: "qr2-35-012",
          ar: "فَأَنَا أُعَلِّمُكُمْ غَدًا،",
          en: "so I will teach you tomorrow,",
          tokens: [
            { surface: "فَأَنَا", lemma: "أنا", pos: "noun", features: "conj+nom", root: "", gloss: "so I" },
            { surface: "أُعَلِّمُكُمْ", lemma: "علم", pos: "verb", features: "impf.1s+2mp", root: "ع ل م", gloss: "will teach you" },
            { surface: "غَدًا", lemma: "غدا", pos: "adv", features: "indef.acc", root: "غ د و", gloss: "tomorrow" }
          ]
        },
        {
          id: "qr2-35-013",
          ar: "وَأُخْبِرُكُمْ بِصِنَاعَةِ الْكِيْمِيَاءِ.",
          en: "and tell you about the craft of alchemy.\"",
          tokens: [
            { surface: "وَأُخْبِرُكُمْ", lemma: "أخبر", pos: "verb", features: "conj+impf.1s+2mp", root: "خ ب ر", gloss: "and will tell you" },
            { surface: "بِصِنَاعَةِ", lemma: "صناعة", pos: "noun", features: "prep+gen.constr", root: "ص ن ع", gloss: "about the craft of" },
            { surface: "الْكِيْمِيَاءِ", lemma: "كيمياء", pos: "noun", features: "def.gen", root: "", gloss: "alchemy" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا قَالَ الْأَبُ لِأَوْلَادِهِ حِيْنَ سَمِعَ حَدِيْثَهُمْ؟",
          options: ["إِنَّهُ يَعْرِفُ الْكِيْمِيَاءَ وَسَيُعَلِّمُهُمْ غَدًا", "إِنَّهُ لَا يُصَدِّقُ بِوُجُوْدِ الْكِيْمِيَاءِ", "إِنَّهُ سَيَشْتَرِيْ لَهُمُ الذَّهَبَ"],
          answer: 0,
          qEn: "What did the father say to his children when he heard their talk?",
          optionsEn: ["That he knows alchemy and will teach them tomorrow", "That he doesn't believe alchemy exists", "That he will buy them gold"]
        }
      ]
    },
    {
      en: "The children were overjoyed, and looked at one another, and it was hard for them to wait until morning, so the night felt long to them, but their father told them: \"Alchemy can only be taught in daylight, for it is a precise craft.\"",
      sentences: [
        {
          id: "qr2-35-014",
          ar: "فَرِحَ الْأَوْلَادُ كَثِيْرًا، وَنَظَرَ بَعْضُهُمْ إِلَىٰ بَعْضٍ،",
          en: "The children were overjoyed, and looked at one another,",
          tokens: [
            { surface: "فَرِحَ", lemma: "فرح", pos: "verb", features: "perf.3ms", root: "ف ر ح", gloss: "rejoiced" },
            { surface: "الْأَوْلَادُ", lemma: "أولاد", pos: "noun", features: "def.nom", root: "و ل د", gloss: "the children" },
            { surface: "كَثِيْرًا", lemma: "كثير", pos: "adv", features: "indef.acc", root: "ك ث ر", gloss: "greatly" },
            { surface: "وَنَظَرَ", lemma: "نظر", pos: "verb", features: "conj+perf.3ms", root: "ن ظ ر", gloss: "and looked" },
            { surface: "بَعْضُهُمْ", lemma: "بعض", pos: "noun", features: "nom+3mp", root: "ب ع ض", gloss: "some of them" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "بَعْضٍ", lemma: "بعض", pos: "noun", features: "indef.gen", root: "ب ع ض", gloss: "some" }
          ]
        },
        {
          id: "qr2-35-015",
          ar: "وَشَقَّ عَلَيْهِمْ أَنْ يَنْتَظِرُوْا إِلَىٰ الصَّبَاحِ،",
          en: "and it was hard for them to wait until morning,",
          tokens: [
            { surface: "وَشَقَّ", lemma: "شق", pos: "verb", features: "conj+perf.3ms", root: "ش ق ق", gloss: "and became hard" },
            { surface: "عَلَيْهِمْ", lemma: "على", pos: "prep", features: "prep+3mp", root: "", gloss: "for them" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "يَنْتَظِرُوْا", lemma: "انتظر", pos: "verb", features: "subj.3mp", root: "ن ظ ر", gloss: "wait" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "until" },
            { surface: "الصَّبَاحِ", lemma: "صباح", pos: "noun", features: "def.gen", root: "ص ب ح", gloss: "the morning" }
          ]
        },
        {
          id: "qr2-35-016",
          ar: "فَاسْتَطَالُوا اللَّيْلَ،",
          en: "so the night felt long to them,",
          tokens: [
            { surface: "فَاسْتَطَالُوا", lemma: "استطال", pos: "verb", features: "conj+perf.3mp", root: "ط و ل", gloss: "and it seemed long to them" },
            { surface: "اللَّيْلَ", lemma: "ليل", pos: "noun", features: "def.acc", root: "ل ي ل", gloss: "the night" }
          ]
        },
        {
          id: "qr2-35-017",
          ar: "وَلٰكِنَّ وَالِدَهُمْ قَالَ لَهُمْ: لَا يُمْكِنُ تَعْلِيْمُ الْكِيْمِيَاءِ إِلَّا فِي النَّهَارِ،",
          en: "but their father told them: \"Alchemy can only be taught in daylight,\"",
          tokens: [
            { surface: "وَلٰكِنَّ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "وَالِدَهُمْ", lemma: "والد", pos: "noun", features: "acc+3mp", root: "و ل د", gloss: "their father" },
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "لَهُمْ", lemma: "ل", pos: "prep", features: "prep+3mp", root: "", gloss: "to them" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يُمْكِنُ", lemma: "يمكن", pos: "verb", features: "impf.3ms", root: "م ك ن", gloss: "is possible" },
            { surface: "تَعْلِيْمُ", lemma: "تعليم", pos: "noun", features: "nom.constr", root: "ع ل م", gloss: "the teaching of" },
            { surface: "الْكِيْمِيَاءِ", lemma: "كيمياء", pos: "noun", features: "def.gen", root: "", gloss: "alchemy" },
            { surface: "إِلَّا", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "النَّهَارِ", lemma: "نهار", pos: "noun", features: "def.gen", root: "ن ه ر", gloss: "the daytime" }
          ]
        },
        {
          id: "qr2-35-018",
          ar: "فَإِنَّ ذٰلِكَ فَنٌّ دَقِيْقٌ.",
          en: "for it is a precise craft.\"",
          tokens: [
            { surface: "فَإِنَّ", lemma: "إن", pos: "part", features: "conj+part", root: "", gloss: "for indeed" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "فَنٌّ", lemma: "فن", pos: "noun", features: "indef.nom", root: "ف ن ن", gloss: "a craft" },
            { surface: "دَقِيْقٌ", lemma: "دقيق", pos: "adj", features: "indef.nom", root: "د ق ق", gloss: "precise" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا لَمْ يُعَلِّمِ الْأَبُ أَوْلَادَهُ الْكِيْمِيَاءَ فِي اللَّيْلِ؟",
          options: ["لِأَنَّ تَعْلِيْمَهَا لَا يُمْكِنُ إِلَّا فِي النَّهَارِ", "لِأَنَّهُ كَانَ نَائِمًا", "لِأَنَّهُ نَسِيَ وَعْدَهُ"],
          answer: 0,
          qEn: "Why didn't the father teach his children alchemy at night?",
          optionsEn: ["Because it can only be taught in daylight", "Because he was asleep", "Because he forgot his promise"]
        }
      ]
    },
    {
      en: "The children slept and woke up early, and Isma'il and Mahmoud kept dreaming of alchemy in their sleep. Hashim dreamed that he was in a lofty palace, in fine clothing, having built the palace and made the clothing with the money he obtained through alchemy.",
      sentences: [
        {
          id: "qr2-35-019",
          ar: "نَامَ الْأَوْلَادُ، وَانْتَبَهُوْا مُبَكِّرِيْنَ،",
          en: "The children slept and woke up early,",
          tokens: [
            { surface: "نَامَ", lemma: "نام", pos: "verb", features: "perf.3ms", root: "ن و م", gloss: "slept" },
            { surface: "الْأَوْلَادُ", lemma: "أولاد", pos: "noun", features: "def.nom", root: "و ل د", gloss: "the children" },
            { surface: "وَانْتَبَهُوْا", lemma: "انتبه", pos: "verb", features: "conj+perf.3mp", root: "ن ب ه", gloss: "and woke up" },
            { surface: "مُبَكِّرِيْنَ", lemma: "مبكر", pos: "adj", features: "indef.acc.pl", root: "ب ك ر", gloss: "early" }
          ]
        },
        {
          id: "qr2-35-020",
          ar: "وَلَمْ يَزَلْ إِسْمَاعِيْلُ وَمَحْمُوْدٌ يَرَيَانِ الْكِيْمِيَاءَ فِي الْمَنَامِ،",
          en: "and Isma'il and Mahmoud kept dreaming of alchemy in their sleep,",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَزَلْ", lemma: "زال", pos: "verb", features: "juss.3ms", root: "ز ي ل", gloss: "cease" },
            { surface: "إِسْمَاعِيْلُ", lemma: "إسماعيل", pos: "proper", features: "nom", root: "", gloss: "Isma'il" },
            { surface: "وَمَحْمُوْدٌ", lemma: "محمود", pos: "proper", features: "conj+indef.nom", root: "", gloss: "and Mahmoud" },
            { surface: "يَرَيَانِ", lemma: "رأى", pos: "verb", features: "impf.3md", root: "ر أ ي", gloss: "were seeing" },
            { surface: "الْكِيْمِيَاءَ", lemma: "كيمياء", pos: "noun", features: "def.acc", root: "", gloss: "alchemy" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْمَنَامِ", lemma: "منام", pos: "noun", features: "def.gen", root: "ن و م", gloss: "the sleep, dream" }
          ]
        },
        {
          id: "qr2-35-021",
          ar: "رَأَىٰ هَاشِمٌ أَنَّهُ فِيْ قَصْرٍ شَامِخٍ وَلِبَاسٍ فَاخِرٍ،",
          en: "Hashim dreamed that he was in a lofty palace, in fine clothing,",
          tokens: [
            { surface: "رَأَىٰ", lemma: "رأى", pos: "verb", features: "perf.3ms", root: "ر أ ي", gloss: "dreamed" },
            { surface: "هَاشِمٌ", lemma: "هاشم", pos: "proper", features: "indef.nom", root: "", gloss: "Hashim" },
            { surface: "أَنَّهُ", lemma: "أن", pos: "part", features: "part+3ms", root: "", gloss: "that he" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "قَصْرٍ", lemma: "قصر", pos: "noun", features: "indef.gen", root: "ق ص ر", gloss: "a palace" },
            { surface: "شَامِخٍ", lemma: "شامخ", pos: "adj", features: "indef.gen", root: "ش م خ", gloss: "lofty" },
            { surface: "وَلِبَاسٍ", lemma: "لباس", pos: "noun", features: "conj+indef.gen", root: "ل ب س", gloss: "and clothing" },
            { surface: "فَاخِرٍ", lemma: "فاخر", pos: "adj", features: "indef.gen", root: "ف خ ر", gloss: "fine" }
          ]
        },
        {
          id: "qr2-35-022",
          ar: "وَقَدْ بَنَىٰ الْقَصْرَ،",
          en: "having built the palace,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "بَنَىٰ", lemma: "بنى", pos: "verb", features: "perf.3ms", root: "ب ن ي", gloss: "built" },
            { surface: "الْقَصْرَ", lemma: "قصر", pos: "noun", features: "def.acc", root: "ق ص ر", gloss: "the palace" }
          ]
        },
        {
          id: "qr2-35-023",
          ar: "وَصَنَعَ اللِّبَاسَ بِالْمَالِ الَّذِيْ حَصَلَ لَهُ بِالْكِيْمِيَاءِ.",
          en: "and made the clothing with the money he obtained through alchemy.",
          tokens: [
            { surface: "وَصَنَعَ", lemma: "صنع", pos: "verb", features: "conj+perf.3ms", root: "ص ن ع", gloss: "and made" },
            { surface: "اللِّبَاسَ", lemma: "لباس", pos: "noun", features: "def.acc", root: "ل ب س", gloss: "the clothing" },
            { surface: "بِالْمَالِ", lemma: "مال", pos: "noun", features: "prep+def.gen", root: "م و ل", gloss: "with the money" },
            { surface: "الَّذِيْ", lemma: "الذي", pos: "rel", features: "rel", root: "", gloss: "which" },
            { surface: "حَصَلَ", lemma: "حصل", pos: "verb", features: "perf.3ms", root: "ح ص ل", gloss: "came about" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "for him" },
            { surface: "بِالْكِيْمِيَاءِ", lemma: "كيمياء", pos: "noun", features: "prep+def.gen", root: "", gloss: "through alchemy" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا رَأَىٰ هَاشِمٌ فِيْ مَنَامِهِ؟",
          options: ["أَنَّهُ فِيْ قَصْرٍ شَامِخٍ بَنَاهُ بِمَالِ الْكِيْمِيَاءِ", "أَنَّهُ يَسْقُطُ مِنْ جَبَلٍ", "أَنَّهُ يُسَافِرُ إِلَى بَلَدٍ بَعِيْدَةٍ"],
          answer: 0,
          qEn: "What did Hashim dream about?",
          optionsEn: ["That he was in a lofty palace he built with alchemy's money", "That he was falling from a mountain", "That he was traveling to a distant land"]
        }
      ]
    },
    {
      en: "They prayed the dawn prayer, and sat around their father waiting for him to finish reciting the Qur'an. Their father completed his portion, and said: \"Come, my sons!\" So they went out with him, their longing for alchemy having made them hasten before breakfast.",
      sentences: [
        {
          id: "qr2-35-024",
          ar: "فَصَلَّوُا الصُّبْحَ، وَجَلَسُوْا حَوْلَ أَبِيْهِمْ يَنْتَظِرُوْنَ فَرَاغَهُ مِنْ تِلَاوَةِ الْقُرْآنِ،",
          en: "They prayed the dawn prayer, and sat around their father waiting for him to finish reciting the Qur'an,",
          tokens: [
            { surface: "فَصَلَّوُا", lemma: "صلى", pos: "verb", features: "conj+perf.3mp", root: "ص ل و", gloss: "so they prayed" },
            { surface: "الصُّبْحَ", lemma: "صبح", pos: "noun", features: "def.acc", root: "ص ب ح", gloss: "the dawn prayer" },
            { surface: "وَجَلَسُوْا", lemma: "جلس", pos: "verb", features: "conj+perf.3mp", root: "ج ل س", gloss: "and sat" },
            { surface: "حَوْلَ", lemma: "حول", pos: "prep", features: "prep", root: "ح و ل", gloss: "around" },
            { surface: "أَبِيْهِمْ", lemma: "أب", pos: "noun", features: "gen+3mp", root: "أ ب و", gloss: "their father" },
            { surface: "يَنْتَظِرُوْنَ", lemma: "انتظر", pos: "verb", features: "impf.3mp", root: "ن ظ ر", gloss: "waiting for" },
            { surface: "فَرَاغَهُ", lemma: "فراغ", pos: "noun", features: "acc+3ms", root: "ف ر غ", gloss: "his finishing" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "تِلَاوَةِ", lemma: "تلاوة", pos: "noun", features: "gen.constr", root: "ت ل و", gloss: "the recitation of" },
            { surface: "الْقُرْآنِ", lemma: "قرآن", pos: "proper", features: "def.gen", root: "", gloss: "the Qur'an" }
          ]
        },
        {
          id: "qr2-35-025",
          ar: "وَأَتَمَّ أَبُوْهُمْ حِزْبَهُ، وَقَالَ: هَلُمُّوْا يَا أَبْنَائِيْ!",
          en: "Their father completed his portion, and said: \"Come, my sons!\"",
          tokens: [
            { surface: "وَأَتَمَّ", lemma: "أتم", pos: "verb", features: "conj+perf.3ms", root: "ت م م", gloss: "and completed" },
            { surface: "أَبُوْهُمْ", lemma: "أب", pos: "noun", features: "nom+3mp", root: "أ ب و", gloss: "their father" },
            { surface: "حِزْبَهُ", lemma: "حزب", pos: "noun", features: "acc+3ms", root: "ح ز ب", gloss: "his portion" },
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "هَلُمُّوْا", lemma: "هلم", pos: "verb", features: "imp.2mp", root: "", gloss: "come!" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَبْنَائِيْ", lemma: "ابن", pos: "noun", features: "pl+1s", root: "ب ن ي", gloss: "my sons" }
          ]
        },
        {
          id: "qr2-35-026",
          ar: "فَخَرَجُوْا مَعَهُ،",
          en: "So they went out with him,",
          tokens: [
            { surface: "فَخَرَجُوْا", lemma: "خرج", pos: "verb", features: "conj+perf.3mp", root: "خ ر ج", gloss: "so went out" },
            { surface: "مَعَهُ", lemma: "مع", pos: "prep", features: "prep+3ms", root: "", gloss: "with him" }
          ]
        },
        {
          id: "qr2-35-027",
          ar: "وَقَدْ أَعْجَلَهُمُ الِاشْتِيَاقُ إِلَى الْكِيْمِيَاءِ مِنْ أَنْ يَفْطِرُوْا.",
          en: "their longing for alchemy having made them hasten before breakfast.",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "أَعْجَلَهُمُ", lemma: "عجل", pos: "verb", features: "perf.3ms+3mp", root: "ع ج ل", gloss: "hastened them" },
            { surface: "الِاشْتِيَاقُ", lemma: "اشتياق", pos: "noun", features: "def.nom", root: "ش و ق", gloss: "the longing" },
            { surface: "إِلَى", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "for" },
            { surface: "الْكِيْمِيَاءِ", lemma: "كيمياء", pos: "noun", features: "def.gen", root: "", gloss: "alchemy" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "before" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "يَفْطِرُوْا", lemma: "فطر", pos: "verb", features: "subj.3mp", root: "ف ط ر", gloss: "they eat breakfast" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا خَرَجَ الْأَوْلَادُ مَعَ أَبِيْهِمْ قَبْلَ أَنْ يُفْطِرُوْا؟",
          options: ["لِأَنَّ شَوْقَهُمْ إِلَى الْكِيْمِيَاءِ أَعْجَلَهُمْ", "لِأَنَّهُمْ لَمْ يَجِدُوا طَعَامًا", "لِأَنَّ أَبَاهُمْ أَمَرَهُمْ بِذٰلِكَ غَضَبًا"],
          answer: 0,
          qEn: "Why did the children go out with their father before eating breakfast?",
          optionsEn: ["Because their longing for alchemy made them hasten", "Because they found no food", "Because their father angrily ordered them to"]
        }
      ]
    },
    {
      en: "Their father kept walking them along one road after another, until he stopped them at a field a farmer was plowing, plowshare in hand, and the father said: \"Alchemy, my children, is under the plow's blade.\"",
      sentences: [
        {
          id: "qr2-35-028",
          ar: "لَمْ يَزَلْ أَبُوْهُمْ يَسِيْرُ بِهِمْ طَرِيْقًا بَعْدَ طَرِيْقٍ،",
          en: "Their father kept walking them along one road after another,",
          tokens: [
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَزَلْ", lemma: "زال", pos: "verb", features: "juss.3ms", root: "ز ي ل", gloss: "cease" },
            { surface: "أَبُوْهُمْ", lemma: "أب", pos: "noun", features: "nom+3mp", root: "أ ب و", gloss: "their father" },
            { surface: "يَسِيْرُ", lemma: "سار", pos: "verb", features: "impf.3ms", root: "س ي ر", gloss: "walked" },
            { surface: "بِهِمْ", lemma: "ب", pos: "prep", features: "prep+3mp", root: "", gloss: "them" },
            { surface: "طَرِيْقًا", lemma: "طريق", pos: "noun", features: "indef.acc", root: "ط ر ق", gloss: "a road" },
            { surface: "بَعْدَ", lemma: "بعد", pos: "prep", features: "prep", root: "", gloss: "after" },
            { surface: "طَرِيْقٍ", lemma: "طريق", pos: "noun", features: "indef.gen", root: "ط ر ق", gloss: "a road" }
          ]
        },
        {
          id: "qr2-35-029",
          ar: "حَتَّىٰ وَقَفَ بِهِمْ عَلَىٰ حَقْلٍ يَحْرُثُهُ الْفَلَّاحُ، وَفِيْ يَدِهِ السِّكَّةُ،",
          en: "until he stopped them at a field a farmer was plowing, plowshare in hand,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "part", root: "", gloss: "until" },
            { surface: "وَقَفَ", lemma: "وقف", pos: "verb", features: "perf.3ms", root: "و ق ف", gloss: "stopped" },
            { surface: "بِهِمْ", lemma: "ب", pos: "prep", features: "prep+3mp", root: "", gloss: "with them" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "حَقْلٍ", lemma: "حقل", pos: "noun", features: "indef.gen", root: "ح ق ل", gloss: "a field" },
            { surface: "يَحْرُثُهُ", lemma: "حرث", pos: "verb", features: "impf.3ms+3ms", root: "ح ر ث", gloss: "was plowing" },
            { surface: "الْفَلَّاحُ", lemma: "فلاح", pos: "noun", features: "def.nom", root: "ف ل ح", gloss: "the farmer" },
            { surface: "وَفِيْ", lemma: "في", pos: "prep", features: "conj+prep", root: "", gloss: "and in" },
            { surface: "يَدِهِ", lemma: "يد", pos: "noun", features: "gen+3ms", root: "ي د ي", gloss: "his hand" },
            { surface: "السِّكَّةُ", lemma: "سكة", pos: "noun", features: "def.nom", root: "س ك ك", gloss: "the plowshare" }
          ]
        },
        {
          id: "qr2-35-030",
          ar: "فَقَالَ الْوَالِدُ: الْكِيْمِيَاءُ يَا أَوْلَادِيْ! تَحْتَ سِكَّةِ الْمِحْرَاثِ.",
          en: "and the father said: \"Alchemy, my children, is under the plow's blade.\"",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "الْوَالِدُ", lemma: "والد", pos: "noun", features: "def.nom", root: "و ل د", gloss: "the father" },
            { surface: "الْكِيْمِيَاءُ", lemma: "كيمياء", pos: "noun", features: "def.nom", root: "", gloss: "alchemy" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَوْلَادِيْ", lemma: "أولاد", pos: "noun", features: "nom+1s", root: "و ل د", gloss: "my children" },
            { surface: "تَحْتَ", lemma: "تحت", pos: "prep", features: "prep", root: "", gloss: "under" },
            { surface: "سِكَّةِ", lemma: "سكة", pos: "noun", features: "gen.constr", root: "س ك ك", gloss: "the blade of" },
            { surface: "الْمِحْرَاثِ", lemma: "محراث", pos: "noun", features: "def.gen", root: "ح ر ث", gloss: "the plow" }
          ]
        }
      ],
      checks: [
        {
          q: "أَيْنَ وَقَفَ الْوَالِدُ بِأَوْلَادِهِ؟",
          options: ["عَلَىٰ حَقْلٍ يَحْرُثُهُ فَلَّاحٌ", "عِنْدَ بَيْتِ الشَّيْخِ", "فِيْ سُوْقِ الذَّهَبِ"],
          answer: 0,
          qEn: "Where did the father stop with his children?",
          optionsEn: ["At a field a farmer was plowing", "At the old man's house", "In the gold market"]
        }
      ]
    },
    {
      en: "The children were amazed and asked their father to explain. The father said: \"Didn't I hear you say alchemy turns dust into gold? Doesn't this dust turn into gold after days -- rather, into something more precious than gold? And what use is gold if there is nothing for people to eat? These seeds the farmer sowed, and toiled over for days, will bring a great harvest, and Allah will return to him, for this work, many times what he gave.\"",
      sentences: [
        {
          id: "qr2-35-031",
          ar: "فَتَعَجَّبَ الْأَوْلَادُ، فَاسْتَفْسَرُوْا أَبَاهُمْ،",
          en: "The children were amazed and asked their father to explain,",
          tokens: [
            { surface: "فَتَعَجَّبَ", lemma: "تعجب", pos: "verb", features: "conj+perf.3ms", root: "ع ج ب", gloss: "so was amazed" },
            { surface: "الْأَوْلَادُ", lemma: "أولاد", pos: "noun", features: "def.nom", root: "و ل د", gloss: "the children" },
            { surface: "فَاسْتَفْسَرُوْا", lemma: "استفسر", pos: "verb", features: "conj+perf.3mp", root: "ف س ر", gloss: "and asked to explain" },
            { surface: "أَبَاهُمْ", lemma: "أب", pos: "noun", features: "acc+3mp", root: "أ ب و", gloss: "their father" }
          ]
        },
        {
          id: "qr2-35-032",
          ar: "فَقَالَ الْوَالِدُ: أَلَمْ أَسْمَعْكُمْ تَقُوْلُوْنَ: الْكِيْمِيَاءُ يُحَوِّلُ التُّرَابَ ذَهَبًا؟",
          en: "The father said: \"Didn't I hear you say alchemy turns dust into gold?\"",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "الْوَالِدُ", lemma: "والد", pos: "noun", features: "def.nom", root: "و ل د", gloss: "the father" },
            { surface: "أَلَمْ", lemma: "لم", pos: "part", features: "part", root: "", gloss: "did not" },
            { surface: "أَسْمَعْكُمْ", lemma: "سمع", pos: "verb", features: "juss.1s+2mp", root: "س م ع", gloss: "hear you" },
            { surface: "تَقُوْلُوْنَ", lemma: "قال", pos: "verb", features: "impf.2mp", root: "ق و ل", gloss: "saying" },
            { surface: "الْكِيْمِيَاءُ", lemma: "كيمياء", pos: "noun", features: "def.nom", root: "", gloss: "alchemy" },
            { surface: "يُحَوِّلُ", lemma: "حول-فعل", pos: "verb", features: "impf.3ms", root: "ح و ل", gloss: "turns" },
            { surface: "التُّرَابَ", lemma: "تراب", pos: "noun", features: "def.acc", root: "ت ر ب", gloss: "the dust" },
            { surface: "ذَهَبًا", lemma: "ذهب", pos: "noun", features: "indef.acc", root: "ذ ه ب", gloss: "into gold" }
          ]
        },
        {
          id: "qr2-35-033",
          ar: "أَلَا يَتَحَوَّلُ هٰذَا التُّرَابُ ذَهَبًا بَعْدَ أَيَّامٍ بَلْ أَغْلَىٰ مِنَ الذَّهَبِ؟",
          en: "Doesn't this dust turn into gold after days -- rather, into something more precious than gold?",
          tokens: [
            { surface: "أَلَا", lemma: "لا", pos: "part", features: "part+neg", root: "", gloss: "does not" },
            { surface: "يَتَحَوَّلُ", lemma: "تحول", pos: "verb", features: "impf.3ms", root: "ح و ل", gloss: "turn into" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem", root: "", gloss: "this" },
            { surface: "التُّرَابُ", lemma: "تراب", pos: "noun", features: "def.nom", root: "ت ر ب", gloss: "the dust" },
            { surface: "ذَهَبًا", lemma: "ذهب", pos: "noun", features: "indef.acc", root: "ذ ه ب", gloss: "gold" },
            { surface: "بَعْدَ", lemma: "بعد", pos: "prep", features: "prep", root: "", gloss: "after" },
            { surface: "أَيَّامٍ", lemma: "أيام", pos: "noun", features: "pl.indef.gen", root: "ي و م", gloss: "days" },
            { surface: "بَلْ", lemma: "بل", pos: "conj", features: "conj", root: "", gloss: "rather" },
            { surface: "أَغْلَىٰ", lemma: "أغلى", pos: "adj", features: "acc", root: "غ ل و", gloss: "more precious" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "than" },
            { surface: "الذَّهَبِ", lemma: "ذهب", pos: "noun", features: "def.gen", root: "ذ ه ب", gloss: "gold" }
          ]
        },
        {
          id: "qr2-35-034",
          ar: "وَمَا يُغْنِيَ الذَّهَبُ إِذَا لَمْ يَكُنْ مَا يَأْكُلُهُ النَّاسُ؟",
          en: "And what use is gold if there is nothing for people to eat?",
          tokens: [
            { surface: "وَمَا", lemma: "ما-استفهام", pos: "part", features: "conj+part", root: "", gloss: "and what" },
            { surface: "يُغْنِيَ", lemma: "أغنى", pos: "verb", features: "subj.3ms", root: "غ ن ي", gloss: "is of use" },
            { surface: "الذَّهَبُ", lemma: "ذهب", pos: "noun", features: "def.nom", root: "ذ ه ب", gloss: "the gold" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", features: "part", root: "", gloss: "if" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَكُنْ", lemma: "كان", pos: "verb", features: "juss.3ms", root: "ك و ن", gloss: "there is" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "rel", root: "", gloss: "what" },
            { surface: "يَأْكُلُهُ", lemma: "أكل", pos: "verb", features: "impf.3ms+3ms", root: "أ ك ل", gloss: "eats it" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "people" }
          ]
        },
        {
          id: "qr2-35-035",
          ar: "فَهٰذِهِ الْبُذُوْرُ الَّتِيْ بَذَرَهَا الْفَلَّاحُ، وَاجْتَهَدَ فِيْهَا أَيَّامًا سَتَأْتِيْ بِحَاصِلٍ كَبِيْرٍ،",
          en: "These seeds the farmer sowed, and toiled over for days, will bring a great harvest,",
          tokens: [
            { surface: "فَهٰذِهِ", lemma: "هذا", pos: "dem", features: "conj+dem.f", root: "", gloss: "so these" },
            { surface: "الْبُذُوْرُ", lemma: "بذر", pos: "noun", features: "pl.def.nom", root: "ب ذ ر", gloss: "the seeds" },
            { surface: "الَّتِيْ", lemma: "الذي", pos: "rel", features: "rel.f", root: "", gloss: "which" },
            { surface: "بَذَرَهَا", lemma: "بذر-فعل", pos: "verb", features: "perf.3ms+3fs", root: "ب ذ ر", gloss: "sowed" },
            { surface: "الْفَلَّاحُ", lemma: "فلاح", pos: "noun", features: "def.nom", root: "ف ل ح", gloss: "the farmer" },
            { surface: "وَاجْتَهَدَ", lemma: "اجتهد", pos: "verb", features: "conj+perf.3ms", root: "ج ه د", gloss: "and strove" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", root: "", gloss: "over them" },
            { surface: "أَيَّامًا", lemma: "أيام", pos: "noun", features: "pl.indef.acc", root: "ي و م", gloss: "for days" },
            { surface: "سَتَأْتِيْ", lemma: "أتى", pos: "verb", features: "impf.3fs", root: "أ ت ي", gloss: "will bring" },
            { surface: "بِحَاصِلٍ", lemma: "حاصل", pos: "noun", features: "prep+indef.gen", root: "ح ص ل", gloss: "a harvest" },
            { surface: "كَبِيْرٍ", lemma: "كبير", pos: "adj", features: "indef.gen", root: "ك ب ر", gloss: "great" }
          ]
        },
        {
          id: "qr2-35-036",
          ar: "وَسَيَرُدُّ اللهُ إِلَيْهِ بِهٰذَا الْعَمَلِ أَضْعَافَ مَا بَذَلَ.",
          en: "and Allah will return to him, for this work, many times what he gave.\"",
          tokens: [
            { surface: "وَسَيَرُدُّ", lemma: "رد", pos: "verb", features: "conj+impf.3ms", root: "ر د د", gloss: "and will return" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "def.nom", root: "", gloss: "Allah" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "prep+3ms", root: "", gloss: "to him" },
            { surface: "بِهٰذَا", lemma: "هذا", pos: "dem", features: "prep+dem", root: "", gloss: "for this" },
            { surface: "الْعَمَلِ", lemma: "عمل", pos: "noun", features: "def.gen", root: "ع م ل", gloss: "the work" },
            { surface: "أَضْعَافَ", lemma: "أضعاف", pos: "noun", features: "acc.constr", root: "ض ع ف", gloss: "many times" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "rel", root: "", gloss: "what" },
            { surface: "بَذَلَ", lemma: "بذل", pos: "verb", features: "perf.3ms", root: "ب ذ ل", gloss: "he gave" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا قَالَ الْوَالِدُ عَنِ الْبُذُوْرِ الَّتِيْ بَذَرَهَا الْفَلَّاحُ؟",
          options: ["إِنَّهَا سَتَأْتِيْ بِحَاصِلٍ كَبِيْرٍ يَرُدُّ اللهُ بِهِ أَضْعَافَ مَا بَذَلَ", "إِنَّهَا سَتَفْسُدُ فِي الْأَرْضِ", "إِنَّهَا لَا تَنْفَعُ شَيْئًا"],
          answer: 0,
          qEn: "What did the father say about the seeds the farmer sowed?",
          optionsEn: ["That they will bring a great harvest, through which Allah returns many times what he gave", "That they will rot in the ground", "That they are of no use at all"]
        }
      ]
    },
    {
      en: "Then their father passed with them by a workshop where people were absorbed in their work, sweat streaming from their brows, and they made very useful things that yielded them much money and met people's great needs. The father said: \"Alchemy, my children, is the sweat of the brow and the toil of the right hand.\" Then he led them to a teacher's study circle, and to a preacher's gathering, and said: \"My children! The human being is the most precious thing that exists, and cultivating and reforming him is better than turning dust into gold.\"",
      sentences: [
        {
          id: "qr2-35-037",
          ar: "ثُمَّ مَرَّ بِهِمْ أَبُوْهُمْ عَلَىٰ مَصْنَعٍ كَانَ النَّاسُ فِيْهِ عَاكِفِيْنَ عَلَىٰ أَعْمَالِهِمْ،",
          en: "Then their father passed with them by a workshop where people were absorbed in their work,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", features: "conj", root: "", gloss: "then" },
            { surface: "مَرَّ", lemma: "مر", pos: "verb", features: "perf.3ms", root: "م ر ر", gloss: "passed" },
            { surface: "بِهِمْ", lemma: "ب", pos: "prep", features: "prep+3mp", root: "", gloss: "with them" },
            { surface: "أَبُوْهُمْ", lemma: "أب", pos: "noun", features: "nom+3mp", root: "أ ب و", gloss: "their father" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "by" },
            { surface: "مَصْنَعٍ", lemma: "مصنع", pos: "noun", features: "indef.gen", root: "ص ن ع", gloss: "a workshop" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "were" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "فِيْهِ", lemma: "في", pos: "prep", features: "prep+3ms", root: "", gloss: "in it" },
            { surface: "عَاكِفِيْنَ", lemma: "عاكف", pos: "adj", features: "indef.acc.pl", root: "ع ك ف", gloss: "absorbed" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "أَعْمَالِهِمْ", lemma: "عمل", pos: "noun", features: "pl.gen+3mp", root: "ع م ل", gloss: "their work" }
          ]
        },
        {
          id: "qr2-35-038",
          ar: "وَالْعَرَقُ يَسِيْلُ مِنْ جِبَاهِهِمْ،",
          en: "sweat streaming from their brows,",
          tokens: [
            { surface: "وَالْعَرَقُ", lemma: "عرق", pos: "noun", features: "conj+def.nom", root: "ع ر ق", gloss: "and the sweat" },
            { surface: "يَسِيْلُ", lemma: "سيل", pos: "verb", features: "impf.3ms", root: "س ي ل", gloss: "streamed" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "جِبَاهِهِمْ", lemma: "جبين", pos: "noun", features: "pl.gen+3mp", root: "ج ب ن", gloss: "their brows" }
          ]
        },
        {
          id: "qr2-35-039",
          ar: "وَصَنَعُوْا أَشْيَاءَ مُفِيْدَةً جِدًّا تُثْمِرُ لَهُمْ مَالًا كَثِيْرًا، وَتَقْضِيْ لِلنَّاسِ حَاجَاتٍ كَبِيْرَةً،",
          en: "and they made very useful things that yielded them much money and met people's great needs,",
          tokens: [
            { surface: "وَصَنَعُوْا", lemma: "صنع", pos: "verb", features: "conj+perf.3mp", root: "ص ن ع", gloss: "and made" },
            { surface: "أَشْيَاءَ", lemma: "أشياء", pos: "noun", features: "indef.acc", root: "ش ي أ", gloss: "things" },
            { surface: "مُفِيْدَةً", lemma: "مفيد", pos: "adj", features: "indef.acc.f", root: "ف ي د", gloss: "useful" },
            { surface: "جِدًّا", lemma: "جدا", pos: "adv", features: "indef.acc", root: "", gloss: "very" },
            { surface: "تُثْمِرُ", lemma: "أثمر", pos: "verb", features: "impf.3fs", root: "ث م ر", gloss: "yielded" },
            { surface: "لَهُمْ", lemma: "ل", pos: "prep", features: "prep+3mp", root: "", gloss: "for them" },
            { surface: "مَالًا", lemma: "مال", pos: "noun", features: "indef.acc", root: "م و ل", gloss: "money" },
            { surface: "كَثِيْرًا", lemma: "كثير-صفة", pos: "adj", features: "indef.acc", root: "ك ث ر", gloss: "much" },
            { surface: "وَتَقْضِيْ", lemma: "قضى", pos: "verb", features: "conj+impf.3fs", root: "ق ض ي", gloss: "and met" },
            { surface: "لِلنَّاسِ", lemma: "ناس", pos: "noun", features: "prep+def.gen", root: "ن و س", gloss: "for people" },
            { surface: "حَاجَاتٍ", lemma: "حاجة", pos: "noun", features: "pl.indef.acc", root: "ح و ج", gloss: "needs" },
            { surface: "كَبِيْرَةً", lemma: "كبير", pos: "adj", features: "indef.acc.f", root: "ك ب ر", gloss: "great" }
          ]
        },
        {
          id: "qr2-35-040",
          ar: "فَقَالَ الْوَالِدُ: الْكِيْمِيَاءُ يَا أَوْلَادِيْ! عَرَقُ الْجَبِيْنِ وَكَدُّ الْيَمِيْنِ،",
          en: "The father said: \"Alchemy, my children, is the sweat of the brow and the toil of the right hand,\"",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "الْوَالِدُ", lemma: "والد", pos: "noun", features: "def.nom", root: "و ل د", gloss: "the father" },
            { surface: "الْكِيْمِيَاءُ", lemma: "كيمياء", pos: "noun", features: "def.nom", root: "", gloss: "alchemy" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَوْلَادِيْ", lemma: "أولاد", pos: "noun", features: "nom+1s", root: "و ل د", gloss: "my children" },
            { surface: "عَرَقُ", lemma: "عرق", pos: "noun", features: "nom.constr", root: "ع ر ق", gloss: "the sweat of" },
            { surface: "الْجَبِيْنِ", lemma: "جبين", pos: "noun", features: "def.gen", root: "ج ب ن", gloss: "the brow" },
            { surface: "وَكَدُّ", lemma: "كد", pos: "noun", features: "conj+nom.constr", root: "ك د د", gloss: "and the toil of" },
            { surface: "الْيَمِيْنِ", lemma: "يمين", pos: "noun", features: "def.gen", root: "ي م ن", gloss: "the right hand" }
          ]
        },
        {
          id: "qr2-35-041",
          ar: "ثُمَّ مَالَ بِهِمْ إِلَىٰ حَلْقَةِ مُعَلِّمٍ وَإِلَىٰ مَجْلِسِ وَاعِظٍ، وَقَالَ:",
          en: "Then he led them to a teacher's study circle, and to a preacher's gathering, and said:",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", features: "conj", root: "", gloss: "then" },
            { surface: "مَالَ", lemma: "مال-فعل", pos: "verb", features: "perf.3ms", root: "م ي ل", gloss: "led, turned" },
            { surface: "بِهِمْ", lemma: "ب", pos: "prep", features: "prep+3mp", root: "", gloss: "them" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "حَلْقَةِ", lemma: "حلقة", pos: "noun", features: "gen.constr", root: "ح ل ق", gloss: "the study circle of" },
            { surface: "مُعَلِّمٍ", lemma: "معلم", pos: "noun", features: "indef.gen", root: "ع ل م", gloss: "a teacher" },
            { surface: "وَإِلَىٰ", lemma: "إلى", pos: "prep", features: "conj+prep", root: "", gloss: "and to" },
            { surface: "مَجْلِسِ", lemma: "مجلس", pos: "noun", features: "gen.constr", root: "ج ل س", gloss: "the gathering of" },
            { surface: "وَاعِظٍ", lemma: "واعظ", pos: "noun", features: "indef.gen", root: "و ع ظ", gloss: "a preacher" },
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" }
          ]
        },
        {
          id: "qr2-35-042",
          ar: "يَا أَوْلَادِيْ! الْإِنْسَانُ أَغْلَىٰ شَيْءٍ فِي الْوُجُوْدِ،",
          en: "\"My children! The human being is the most precious thing that exists,",
          tokens: [
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَوْلَادِيْ", lemma: "أولاد", pos: "noun", features: "nom+1s", root: "و ل د", gloss: "my children" },
            { surface: "الْإِنْسَانُ", lemma: "إنسان", pos: "noun", features: "def.nom", root: "أ ن س", gloss: "the human being" },
            { surface: "أَغْلَىٰ", lemma: "أغلى", pos: "adj", features: "nom.constr", root: "غ ل و", gloss: "the most precious" },
            { surface: "شَيْءٍ", lemma: "شيء", pos: "noun", features: "indef.gen", root: "ش ي أ", gloss: "thing" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْوُجُوْدِ", lemma: "وجود", pos: "noun", features: "def.gen", root: "و ج د", gloss: "existence" }
          ]
        },
        {
          id: "qr2-35-043",
          ar: "وَتَثْقِيْفُهُ وَإِصْلَاحُهُ أَفْضَلُ مِنْ تَحْوِيْلِ التُّرَابِ ذَهَبًا.",
          en: "and cultivating and reforming him is better than turning dust into gold.\"",
          tokens: [
            { surface: "وَتَثْقِيْفُهُ", lemma: "تثقيف", pos: "noun", features: "conj+nom+3ms", root: "ث ق ف", gloss: "and cultivating him" },
            { surface: "وَإِصْلَاحُهُ", lemma: "إصلاح", pos: "noun", features: "conj+nom+3ms", root: "ص ل ح", gloss: "and reforming him" },
            { surface: "أَفْضَلُ", lemma: "أفضل", pos: "adj", features: "nom", root: "ف ض ل", gloss: "better" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "than" },
            { surface: "تَحْوِيْلِ", lemma: "تحويل", pos: "noun", features: "gen.constr", root: "ح و ل", gloss: "turning" },
            { surface: "التُّرَابِ", lemma: "تراب", pos: "noun", features: "def.gen", root: "ت ر ب", gloss: "the dust" },
            { surface: "ذَهَبًا", lemma: "ذهب", pos: "noun", features: "indef.acc", root: "ذ ه ب", gloss: "into gold" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا قَالَ الْوَالِدُ عَنِ الْكِيْمِيَاءِ فِي الْمَصْنَعِ؟",
          options: ["إِنَّهَا عَرَقُ الْجَبِيْنِ وَكَدُّ الْيَمِيْنِ", "إِنَّهَا سِرٌّ يَعْرِفُهُ الْقَلِيْلُوْنَ", "إِنَّهَا لَعِبٌ لَا فَائِدَةَ فِيْهِ"],
          answer: 0,
          qEn: "What did the father say about alchemy at the workshop?",
          optionsEn: ["That it is the sweat of the brow and the toil of the right hand", "That it is a secret few know", "That it is a game with no benefit"]
        }
      ]
    },
    {
      en: "\"If these children learn, and if these people are guided, the teacher and the preacher will have an ongoing charity, having the reward for all the good and righteousness these people do, which is why the Prophet, peace be upon him, told our master Ali, may Allah ennoble his face: 'O Ali! That Allah should guide one man through you is better for you than red camels.'\"",
      sentences: [
        {
          id: "qr2-35-044",
          ar: "فَإِذَا تَعَلَّمَ هٰؤُلَاءِ الْأَوْلَادُ، وَإِذَا اهْتَدَىٰ هٰؤُلَاءِ النَّاسُ،",
          en: "\"If these children learn, and if these people are guided,",
          tokens: [
            { surface: "فَإِذَا", lemma: "إذا", pos: "part", features: "conj+part", root: "", gloss: "so if" },
            { surface: "تَعَلَّمَ", lemma: "تعلم", pos: "verb", features: "perf.3ms", root: "ع ل م", gloss: "learn" },
            { surface: "هٰؤُلَاءِ", lemma: "هؤلاء", pos: "dem", features: "dem", root: "", gloss: "these" },
            { surface: "الْأَوْلَادُ", lemma: "أولاد", pos: "noun", features: "def.nom", root: "و ل د", gloss: "children" },
            { surface: "وَإِذَا", lemma: "إذا", pos: "part", features: "conj+part", root: "", gloss: "and if" },
            { surface: "اهْتَدَىٰ", lemma: "اهتدى", pos: "verb", features: "perf.3ms", root: "ه د ي", gloss: "are guided" },
            { surface: "هٰؤُلَاءِ", lemma: "هؤلاء", pos: "dem", features: "dem", root: "", gloss: "these" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "people" }
          ]
        },
        {
          id: "qr2-35-045",
          ar: "كَانَ لِلْمُعَلِّمِ وَالْوَاعِظِ صَدَقَةٌ جَارِيَةٌ،",
          en: "the teacher and the preacher will have an ongoing charity,",
          tokens: [
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "there was" },
            { surface: "لِلْمُعَلِّمِ", lemma: "معلم", pos: "noun", features: "prep+def.gen", root: "ع ل م", gloss: "for the teacher" },
            { surface: "وَالْوَاعِظِ", lemma: "واعظ", pos: "noun", features: "conj+def.gen", root: "و ع ظ", gloss: "and the preacher" },
            { surface: "صَدَقَةٌ", lemma: "صدقة", pos: "noun", features: "indef.nom", root: "ص د ق", gloss: "a charity" },
            { surface: "جَارِيَةٌ", lemma: "جارية", pos: "adj", features: "indef.nom.f", root: "ج ر ي", gloss: "ongoing" }
          ]
        },
        {
          id: "qr2-35-046",
          ar: "لَهُ أَجْرُ كُلِّ مَا يَعْمَلُ هٰؤُلَاءِ مِنْ خَيْرٍ وَبِرٍّ،",
          en: "having the reward for all the good and righteousness these people do,",
          tokens: [
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "his is" },
            { surface: "أَجْرُ", lemma: "أجر", pos: "noun", features: "nom.constr", root: "أ ج ر", gloss: "the reward of" },
            { surface: "كُلِّ", lemma: "كل", pos: "noun", features: "gen.constr", root: "ك ل ل", gloss: "all of" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "rel", root: "", gloss: "what" },
            { surface: "يَعْمَلُ", lemma: "عمل-فعل", pos: "verb", features: "impf.3ms", root: "ع م ل", gloss: "do" },
            { surface: "هٰؤُلَاءِ", lemma: "هؤلاء", pos: "dem", features: "dem", root: "", gloss: "these" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "خَيْرٍ", lemma: "خير", pos: "noun", features: "indef.gen", root: "خ ي ر", gloss: "good" },
            { surface: "وَبِرٍّ", lemma: "بر", pos: "noun", features: "conj+indef.gen", root: "ب ر ر", gloss: "and righteousness" }
          ]
        },
        {
          id: "qr2-35-047",
          ar: "وَلِذٰلِكَ قَالَ النَّبِيُّ ﷺ لِسَيِّدِنَا عَلِيٍّ كَرَّمَ اللهُ وَجْهَهُ: يَا عَلِيُّ!",
          en: "which is why the Prophet, peace be upon him, told our master Ali, may Allah ennoble his face: \"O Ali!",
          tokens: [
            { surface: "وَلِذٰلِكَ", lemma: "ذلك", pos: "dem", features: "conj+prep+dem", root: "", gloss: "and for that" },
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "النَّبِيُّ", lemma: "نبي", pos: "noun", features: "def.nom", root: "ن ب أ", gloss: "the Prophet" },
            { surface: "لِسَيِّدِنَا", lemma: "سيد", pos: "noun", features: "prep+gen+1p", root: "س و د", gloss: "to our master" },
            { surface: "عَلِيٍّ", lemma: "علي", pos: "proper", features: "indef.gen", root: "", gloss: "Ali" },
            { surface: "كَرَّمَ", lemma: "كرم", pos: "verb", features: "perf.3ms", root: "ك ر م", gloss: "may ennoble" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "def.nom", root: "", gloss: "Allah" },
            { surface: "وَجْهَهُ", lemma: "وجه", pos: "noun", features: "acc+3ms", root: "و ج ه", gloss: "his face" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "عَلِيُّ", lemma: "علي", pos: "proper", features: "nom", root: "", gloss: "Ali" }
          ]
        },
        {
          id: "qr2-35-048",
          ar: "لَأَنْ يَهْدِيَ اللهُ بِكَ رَجُلًا خَيْرٌ لَكَ مِنْ حُمْرِ النَّعَمِ.",
          en: "That Allah should guide one man through you is better for you than red camels.\"",
          tokens: [
            { surface: "لَأَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "يَهْدِيَ", lemma: "هدى", pos: "verb", features: "subj.3ms", root: "ه د ي", gloss: "guide" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "def.nom", root: "", gloss: "Allah" },
            { surface: "بِكَ", lemma: "ب", pos: "prep", features: "prep+2ms", root: "", gloss: "through you" },
            { surface: "رَجُلًا", lemma: "رجل", pos: "noun", features: "indef.acc", root: "ر ج ل", gloss: "a man" },
            { surface: "خَيْرٌ", lemma: "خير-صفة", pos: "adj", features: "indef.nom", root: "خ ي ر", gloss: "better" },
            { surface: "لَكَ", lemma: "ل", pos: "prep", features: "prep+2ms", root: "", gloss: "for you" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "than" },
            { surface: "حُمْرِ", lemma: "حمر", pos: "adj", features: "pl.gen.constr", root: "ح م ر", gloss: "red" },
            { surface: "النَّعَمِ", lemma: "نعم-اسم", pos: "noun", features: "def.gen", root: "ن ع م", gloss: "camels" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا قَالَ النَّبِيُّ ﷺ لِسَيِّدِنَا عَلِيٍّ؟",
          options: ["لَأَنْ يَهْدِيَ اللهُ بِكَ رَجُلًا خَيْرٌ لَكَ مِنْ حُمْرِ النَّعَمِ", "لَأَنْ تَمْلِكَ الذَّهَبَ خَيْرٌ لَكَ مِنَ الْعِلْمِ", "لَأَنْ تُسَافِرَ خَيْرٌ لَكَ مِنَ الْإِقَامَةِ"],
          answer: 0,
          qEn: "What did the Prophet, peace be upon him, tell our master Ali?",
          optionsEn: ["That Allah guiding one man through you is better than red camels", "That owning gold is better than knowledge", "That traveling is better than staying"]
        }
      ]
    },
    {
      en: "The children were convinced, and thanked their father, and returned home, having truly learned alchemy.",
      sentences: [
        {
          id: "qr2-35-049",
          ar: "فَاقْتَنَعَ الْأَوْلَادُ وَشَكَرُوْا أَبَاهُمْ،",
          en: "The children were convinced, and thanked their father,",
          tokens: [
            { surface: "فَاقْتَنَعَ", lemma: "اقتنع", pos: "verb", features: "conj+perf.3ms", root: "ق ن ع", gloss: "so were convinced" },
            { surface: "الْأَوْلَادُ", lemma: "أولاد", pos: "noun", features: "def.nom", root: "و ل د", gloss: "the children" },
            { surface: "وَشَكَرُوْا", lemma: "شكر", pos: "verb", features: "conj+perf.3mp", root: "ش ك ر", gloss: "and thanked" },
            { surface: "أَبَاهُمْ", lemma: "أب", pos: "noun", features: "acc+3mp", root: "أ ب و", gloss: "their father" }
          ]
        },
        {
          id: "qr2-35-050",
          ar: "وَرَجَعُوْا وَقَدْ تَعَلَّمُوا الْكِيْمِيَاءَ.",
          en: "and returned home, having truly learned alchemy.",
          tokens: [
            { surface: "وَرَجَعُوْا", lemma: "رجع", pos: "verb", features: "conj+perf.3mp", root: "ر ج ع", gloss: "and returned" },
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "having indeed" },
            { surface: "تَعَلَّمُوا", lemma: "تعلم", pos: "verb", features: "perf.3mp", root: "ع ل م", gloss: "learned" },
            { surface: "الْكِيْمِيَاءَ", lemma: "كيمياء", pos: "noun", features: "def.acc", root: "", gloss: "alchemy" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ انْتَهَتِ الْقِصَّةُ؟",
          options: ["اقْتَنَعَ الْأَوْلَادُ وَشَكَرُوْا أَبَاهُمْ وَقَدْ تَعَلَّمُوا الْكِيْمِيَاءَ الْحَقِيْقِيَّةَ", "غَضِبَ الْأَوْلَادُ مِنْ أَبِيْهِمْ", "ظَلَّ الْأَوْلَادُ يَبْحَثُوْنَ عَنِ الشَّيْخِ"],
          answer: 0,
          qEn: "How did the story end?",
          optionsEn: ["The children were convinced, thanked their father, and had learned the true alchemy", "The children became angry with their father", "The children kept searching for the old man"]
        }
      ]
    }
  ]
};

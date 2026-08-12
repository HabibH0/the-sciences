// القراءة الراشدة, volume two, chapter 40 (printed heading "٤٠") --
// كُنْ أَحَدَ السَّبْعَةِ (١) -- "Be One of the Seven (1)".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 141-143 (PDF page
// index == printed page number). Page 141 opens fresh with the "(٤٠)"
// heading; page 143 ends with the "✳ ✳ ✳" divider partway down, confirming
// the chapter is exactly three pages (141-143); chapter 41 "...(٢)" --
// already present in this book -- begins fresh on 144 and continues this
// same dialogue, covering items 2-7 of the list begun here. A dialogue
// chapter: on a scorching June day, the father Sulayman teaches his sons
// Mahmoud, Ahmad, and Uthman about the heat of the Day of Judgment via the
// hadith of the seven whom Allah will shade in the shade of His throne --
// this chapter covers only the first of the seven (a just ruler) before
// ending; ch41 continues with the remaining six.
//
// Ninth and last of the nine chapters (32-40) filling the gap flagged in
// qiraah-v2/index.js's header comment. Spliced in after ch39, immediately
// before the already-existing ch41.
//
// One within-chapter homograph clash, resolved with the established
// suffix convention: "مِنْ" is used throughout as the ordinary preposition
// "from, of" but once as the indefinite/conditional relative "some of
// whom, those who" (فَمِنْهُمْ مَنْ يَكُوْنُ إِلَىٰ كَعْبَيْهِ, "and some of them
// will be up to their ankles") -- the relative sense takes "من-شرط" (pos
// "rel"), matching the pattern introduced in ch36. Two words that look
// similar but are unrelated: "عمر" is used only as the proper name "Umar"
// (in "عُمَرَ بْنِ عَبْدِ الْعَزِيْزِ") -- unlike ch38/ch39, where a bare "عمر"
// noun meaning "age" appeared -- so no suffix is needed here, since each
// chapter's lemma dict is independent and only one sense of "عمر" occurs
// in this chapter.
export const CHAPTER = {
  id: "ch40",
  title: {
    ar: "كُنْ أَحَدَ السَّبْعَةِ (١)",
    en: "Be One of the Seven (1)"
  },
  pages: [141, 142, 143],
  newWords: [
    "خامس", "شهر", "عطلة", "ساعة", "ثاني", "نهار", "تأفف", "تقلب", "فراش", "لطيف",
    "أشد", "كم", "بعد", "أرض", "جدا", "قرأ", "مدرسة", "أكثر", "تسعين", "مليون",
    "ميل", "دنا", "حتى", "مقدار", "عياذ", "متى", "بني", "قيامة", "قام", "ناس",
    "رب", "عالم", "يومئذ", "قدر", "عمل", "عرق", "من-شرط", "كعب", "ركبة", "حقو",
    "ألجم", "إلجام", "ليس", "هنالك", "ظل", "استظل", "بلى", "نعم", "سبعة", "سعيد",
    "ينبغي", "عد", "إمام", "عادل", "قطع", "صلى", "خير", "مراد", "أمير", "ابتدر",
    "فهم", "خليفة", "أربعة", "عبد", "عزيز", "حكاية", "أم"
  ],
  lemmas: {
    "كان": { root: "ك و ن", pos: "verb", gloss: "to be" },
    "يوم": { root: "ي و م", pos: "noun", gloss: "a day" },
    "خامس": { root: "خ م س", pos: "num", gloss: "fifth" },
    "عشرة": { root: "ع ش ر", pos: "num", gloss: "-teen, ten" },
    "من": { root: "", pos: "prep", gloss: "from, of" },
    "شهر": { root: "ش ه ر", pos: "noun", gloss: "a month" },
    "يونيو": { root: "", pos: "proper", gloss: "June" },
    "شديد": { root: "ش د د", pos: "adj", gloss: "severe, intense" },
    "حر": { root: "ح ر ر", pos: "noun", gloss: "heat" },
    "عطلة": { root: "ع ط ل", pos: "noun", gloss: "a holiday, day off" },
    "محمود": { root: "", pos: "proper", gloss: "Mahmoud" },
    "أحمد": { root: "", pos: "proper", gloss: "Ahmad" },
    "عثمان": { root: "", pos: "proper", gloss: "Uthman" },
    "في": { root: "", pos: "prep", gloss: "in, at" },
    "بيت": { root: "ب ي ت", pos: "noun", gloss: "a house" },
    "مع": { root: "", pos: "prep", gloss: "with" },
    "أب": { root: "أ ب و", pos: "noun", gloss: "father" },
    "ساعة": { root: "س ا ع", pos: "noun", gloss: "an hour, o'clock" },
    "ثاني": { root: "ث ن ي", pos: "num", gloss: "second" },
    "نهار": { root: "ن ه ر", pos: "noun", gloss: "daytime" },
    "تأفف": { root: "أ ف ف", pos: "verb", gloss: "to groan, complain", book_note: "تَأَفَّفَ يَتَأَفَّفُ مِنَ الْحَرِّ: تَضَجَّرَ مِنْهُ." },
    "تقلب": { root: "ق ل ب", pos: "verb", gloss: "to toss and turn" },
    "على": { root: "", pos: "prep", gloss: "on, upon" },
    "فراش": { root: "ف ر ش", pos: "noun", gloss: "bedding" },
    "كأن": { root: "", pos: "part", gloss: "as if" },
    "جمر": { root: "ج م ر", pos: "noun", gloss: "live coals" },
    "قال": { root: "ق و ل", pos: "verb", gloss: "to say" },
    "يا": { root: "", pos: "part", gloss: "O" },
    "لطيف": { root: "ل ط ف", pos: "adj", gloss: "gentle (here: an exclamation of distress)" },
    "ما": { root: "", pos: "part", gloss: "how" },
    "أشد": { root: "ش د د", pos: "adj", gloss: "more/most severe" },
    "سليمان": { root: "", pos: "proper", gloss: "Sulayman" },
    "عرف": { root: "ع ر ف", pos: "verb", gloss: "to know" },
    "كم": { root: "", pos: "adv", gloss: "how much" },
    "بعد": { root: "ب ع د", pos: "verb", gloss: "to be far, distant" },
    "شمس": { root: "ش م س", pos: "noun", gloss: "the sun" },
    "أرض": { root: "أ ر ض", pos: "noun", gloss: "the earth" },
    "لا": { root: "", pos: "part", gloss: "no" },
    "لكن": { root: "", pos: "conj", gloss: "but" },
    "أنا": { root: "", pos: "noun", gloss: "I" },
    "بعيد": { root: "ب ع د", pos: "adj", gloss: "far" },
    "جدا": { root: "ج د د", pos: "adv", gloss: "very" },
    "قرأ": { root: "ق ر أ", pos: "verb", gloss: "to read" },
    "مدرسة": { root: "د ر س", pos: "noun", gloss: "a school" },
    "أن": { root: "", pos: "part", gloss: "that" },
    "أكثر": { root: "ك ث ر", pos: "adj", gloss: "more" },
    "تسعين": { root: "ت س ع", pos: "num", gloss: "ninety" },
    "مليون": { root: "", pos: "noun", gloss: "a million" },
    "ميل": { root: "م ي ل", pos: "noun", gloss: "a mile" },
    "كيف": { root: "", pos: "adv", gloss: "how" },
    "إذا": { root: "", pos: "part", gloss: "if" },
    "دنا": { root: "د ن و", pos: "verb", gloss: "to draw near" },
    "كما": { root: "", pos: "conj", gloss: "as, just as" },
    "رأى": { root: "ر أ ي", pos: "verb", gloss: "to see" },
    "حتى": { root: "", pos: "part", gloss: "until" },
    "مقدار": { root: "ق د ر", pos: "noun", gloss: "an amount, extent" },
    "عياذ": { root: "ع و ذ", pos: "noun", gloss: "seeking refuge" },
    "الله": { root: "", pos: "proper", gloss: "Allah" },
    "متى": { root: "", pos: "adv", gloss: "when" },
    "هذا": { root: "", pos: "dem", gloss: "this" },
    "ذلك": { root: "", pos: "dem", gloss: "that" },
    "بني": { root: "ب ن ي", pos: "noun", gloss: "my dear son" },
    "قيامة": { root: "ق و م", pos: "noun", gloss: "resurrection" },
    "قام": { root: "ق و م", pos: "verb", gloss: "to stand" },
    "ناس": { root: "ن و س", pos: "noun", gloss: "people, mankind" },
    "ل": { root: "", pos: "prep", gloss: "to, for; should" },
    "رب": { root: "ر ب ب", pos: "noun", gloss: "the Lord of" },
    "عالم": { root: "ع ل م", pos: "noun", gloss: "world" },
    "يومئذ": { root: "ي و م", pos: "adv", gloss: "on that day" },
    "قدر": { root: "ق د ر", pos: "noun", gloss: "the measure of" },
    "عمل": { root: "ع م ل", pos: "noun", gloss: "a deed" },
    "عرق": { root: "ع ر ق", pos: "noun", gloss: "sweat" },
    "من-شرط": { root: "", pos: "rel", gloss: "those who, some of whom" },
    "كعب": { root: "ك ع ب", pos: "noun", gloss: "an ankle" },
    "ركبة": { root: "ر ك ب", pos: "noun", gloss: "a knee" },
    "حقو": { root: "ح ق و", pos: "noun", gloss: "a waist", book_note: "حَقْوَ جمع أَحْقَاء: خَصْر وَوَسَط." },
    "ألجم": { root: "ل ج م", pos: "verb", gloss: "to reach up to the mouth, overwhelm", book_note: "أَلْجَمَ يُلْجِمُ الْعَرَقُ: بَلَغَ فَاهُ." },
    "إلجام": { root: "ل ج م", pos: "noun", gloss: "overwhelming" },
    "ليس": { root: "ل ي س", pos: "verb", gloss: "to not be" },
    "هنالك": { root: "", pos: "adv", gloss: "there" },
    "ظل": { root: "ظ ل ل", pos: "noun", gloss: "shade" },
    "مكان": { root: "ك و ن", pos: "noun", gloss: "a place" },
    "استظل": { root: "ظ ل ل", pos: "verb", gloss: "to take shelter, seek shade" },
    "ب": { root: "", pos: "prep", gloss: "with, by, in" },
    "بلى": { root: "", pos: "part", gloss: "yes indeed" },
    "ولد": { root: "و ل د", pos: "noun", gloss: "a boy, son" },
    "نعم": { root: "ن ع م", pos: "verb", gloss: "to enjoy" },
    "إلا": { root: "", pos: "part", gloss: "except" },
    "سبعة": { root: "س ب ع", pos: "num", gloss: "seven" },
    "رجل": { root: "ر ج ل", pos: "noun", gloss: "a man" },
    "أولئك": { root: "", pos: "dem", gloss: "those" },
    "سعيد": { root: "س ع د", pos: "adj", gloss: "fortunate, happy" },
    "لعل": { root: "", pos: "part", gloss: "perhaps" },
    "اجتهد": { root: "ج ه د", pos: "verb", gloss: "to strive, try hard" },
    "إلى": { root: "", pos: "prep", gloss: "up to, to" },
    "أو": { root: "", pos: "conj", gloss: "or" },
    "ينبغي": { root: "ب غ ي", pos: "verb", gloss: "should, it behooves", book_note: "يَنْبَغِيْ لَهُ: يَلْزَمُ أَوْ يَجِبُ عَلَيْهِ." },
    "كل": { root: "ك ل ل", pos: "noun", gloss: "every" },
    "مسلم": { root: "س ل م", pos: "noun", gloss: "a Muslim" },
    "عد": { root: "ع د د", pos: "verb", gloss: "to count, enumerate" },
    "إمام": { root: "أ م م", pos: "noun", gloss: "an imam, leader" },
    "عادل": { root: "ع د ل", pos: "adj", gloss: "just" },
    "قطع": { root: "ق ط ع", pos: "verb", gloss: "to cut off, interrupt" },
    "أحد": { root: "أ ح د", pos: "noun", gloss: "one (of)" },
    "هو": { root: "", pos: "noun", gloss: "he, it" },
    "الذي": { root: "", pos: "rel", gloss: "the one who" },
    "صلى": { root: "ص ل و", pos: "verb", gloss: "to lead in prayer" },
    "أيضا": { root: "أ ي ض", pos: "adv", gloss: "also, too" },
    "خير": { root: "خ ي ر", pos: "noun", gloss: "good" },
    "مراد": { root: "ر و د", pos: "noun", gloss: "meaning, what is intended" },
    "هنا": { root: "", pos: "adv", gloss: "here" },
    "أمير": { root: "أ م ر", pos: "noun", gloss: "a leader, commander" },
    "ابتدر": { root: "ب د ر", pos: "verb", gloss: "to speak up eagerly, hasten", book_note: "ابْتَدَرَ يَبْتَدِرُ: عَاجَلَ." },
    "قد": { root: "", pos: "part", gloss: "indeed, already" },
    "فهم": { root: "ف ه م", pos: "verb", gloss: "to understand" },
    "خليفة": { root: "خ ل ف", pos: "noun", gloss: "a caliph" },
    "أربعة": { root: "ر ب ع", pos: "num", gloss: "four" },
    "ابن": { root: "ب ن ي", pos: "noun", gloss: "son of" },
    "عمر": { root: "", pos: "proper", gloss: "Umar" },
    "عبد": { root: "ع ب د", pos: "noun", gloss: "servant of" },
    "عزيز": { root: "", pos: "proper", gloss: "al-Aziz" },
    "سمع": { root: "س م ع", pos: "verb", gloss: "to hear" },
    "كثير": { root: "ك ث ر", pos: "adj", gloss: "much, many" },
    "حكاية": { root: "ح ك ي", pos: "noun", gloss: "a story" },
    "أم": { root: "أ م م", pos: "noun", gloss: "mother" }
  },
  paragraphs: [
    {
      en: "The fifteenth of June was a day of intense heat, and it was a holiday, so Mahmoud, Ahmad, and Uthman were at home, and they were with their father at two o'clock in the afternoon, groaning from the heat and tossing and turning on the bedding as if on live coals.",
      sentences: [
        {
          id: "qr2-40-001",
          ar: "كَانَ الْيَوْمُ الْخَامِسَ عَشَرَ مِنْ شَهْرِ يُوْنِيُوْ يَوْماً شَدِيْدَ الْحَرِّ،",
          en: "The fifteenth of June was a day of intense heat,",
          tokens: [
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "was" },
            { surface: "الْيَوْمُ", lemma: "يوم", pos: "noun", features: "def.nom", root: "ي و م", gloss: "the day" },
            { surface: "الْخَامِسَ", lemma: "خامس", pos: "num", features: "def.acc", root: "خ م س", gloss: "the fifteenth" },
            { surface: "عَشَرَ", lemma: "عشرة", pos: "num", features: "acc", root: "ع ش ر", gloss: "-teen" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "شَهْرِ", lemma: "شهر", pos: "noun", features: "gen.constr", root: "ش ه ر", gloss: "the month of" },
            { surface: "يُوْنِيُوْ", lemma: "يونيو", pos: "proper", features: "gen", root: "", gloss: "June" },
            { surface: "يَوْماً", lemma: "يوم", pos: "noun", features: "indef.acc", root: "ي و م", gloss: "a day" },
            { surface: "شَدِيْدَ", lemma: "شديد", pos: "adj", features: "acc.constr", root: "ش د د", gloss: "of severe" },
            { surface: "الْحَرِّ", lemma: "حر", pos: "noun", features: "def.gen", root: "ح ر ر", gloss: "heat" }
          ]
        },
        {
          id: "qr2-40-002",
          ar: "وَكَانَ يَوْمَ عُطْلَةٍ، فَكَانَ مَحْمُوْدٌ وَأَحْمَدُ وَعُثْمَانُ فِي الْبَيْتِ،",
          en: "and it was a holiday, so Mahmoud, Ahmad, and Uthman were at home,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and it was" },
            { surface: "يَوْمَ", lemma: "يوم", pos: "noun", features: "acc.constr", root: "ي و م", gloss: "a day of" },
            { surface: "عُطْلَةٍ", lemma: "عطلة", pos: "noun", features: "indef.gen", root: "ع ط ل", gloss: "holiday" },
            { surface: "فَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "so was" },
            { surface: "مَحْمُوْدٌ", lemma: "محمود", pos: "proper", features: "nom", root: "", gloss: "Mahmoud" },
            { surface: "وَأَحْمَدُ", lemma: "أحمد", pos: "proper", features: "conj+nom", root: "", gloss: "and Ahmad" },
            { surface: "وَعُثْمَانُ", lemma: "عثمان", pos: "proper", features: "conj+nom", root: "", gloss: "and Uthman" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْبَيْتِ", lemma: "بيت", pos: "noun", features: "def.gen", root: "ب ي ت", gloss: "the house" }
          ]
        },
        {
          id: "qr2-40-003",
          ar: "وَكَانُوا مَعَ أَبِيْهِمْ فِي السَّاعَةِ الثَّانِيَةِ فِي النَّهَارِ،",
          en: "and they were with their father at two o'clock in the afternoon,",
          tokens: [
            { surface: "وَكَانُوا", lemma: "كان", pos: "verb", features: "conj+perf.3mp", root: "ك و ن", gloss: "and they were" },
            { surface: "مَعَ", lemma: "مع", pos: "prep", features: "prep", root: "", gloss: "with" },
            { surface: "أَبِيْهِمْ", lemma: "أب", pos: "noun", features: "gen+3mp", root: "أ ب و", gloss: "their father" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "السَّاعَةِ", lemma: "ساعة", pos: "noun", features: "def.gen", root: "س ا ع", gloss: "the hour" },
            { surface: "الثَّانِيَةِ", lemma: "ثاني", pos: "num", features: "def.gen.f", root: "ث ن ي", gloss: "the second" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "النَّهَارِ", lemma: "نهار", pos: "noun", features: "def.gen", root: "ن ه ر", gloss: "the daytime" }
          ]
        },
        {
          id: "qr2-40-004",
          ar: "وَكَانُوا يَتَأَفَّفُوْنَ مِنَ الْحَرِّ، وَيَتَقَلَّبُوْنَ عَلَىٰ الْفِرَاشِ كَأَنَّهُمْ عَلَىٰ الْجَمْرِ.",
          en: "groaning from the heat and tossing and turning on the bedding as if on live coals.",
          tokens: [
            { surface: "وَكَانُوا", lemma: "كان", pos: "verb", features: "conj+perf.3mp", root: "ك و ن", gloss: "and they were" },
            { surface: "يَتَأَفَّفُوْنَ", lemma: "تأفف", pos: "verb", features: "impf.3mp", root: "أ ف ف", gloss: "groaning" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الْحَرِّ", lemma: "حر", pos: "noun", features: "def.gen", root: "ح ر ر", gloss: "the heat" },
            { surface: "وَيَتَقَلَّبُوْنَ", lemma: "تقلب", pos: "verb", features: "conj+impf.3mp", root: "ق ل ب", gloss: "and tossing and turning" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "الْفِرَاشِ", lemma: "فراش", pos: "noun", features: "def.gen", root: "ف ر ش", gloss: "the bedding" },
            { surface: "كَأَنَّهُمْ", lemma: "كأن", pos: "part", features: "part+3mp", root: "", gloss: "as if they" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "الْجَمْرِ", lemma: "جمر", pos: "noun", features: "def.gen", root: "ج م ر", gloss: "live coals" }
          ]
        }
      ],
      checks: [
        {
          q: "أَيْنَ كَانَ مَحْمُوْدٌ وَأَحْمَدُ وَعُثْمَانُ فِيْ ذٰلِكَ الْيَوْمِ؟",
          options: ["فِي الْبَيْتِ مَعَ أَبِيْهِمْ", "فِي الْمَدْرَسَةِ", "فِي الْحَدِيْقَةِ"],
          answer: 0,
          qEn: "Where were Mahmoud, Ahmad, and Uthman on that day?",
          optionsEn: ["At home with their father", "At school", "In the garden"]
        }
      ]
    },
    {
      en: "Mahmoud said, \"Oh my! How severe the heat is!\"",
      sentences: [
        {
          id: "qr2-40-005",
          ar: "قَالَ مَحْمُوْدٌ: يَا لَطِيْفُ! مَا أَشَدَّ الْحَرَّ!",
          en: "Mahmoud said, \"Oh my! How severe the heat is!\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "مَحْمُوْدٌ", lemma: "محمود", pos: "proper", features: "nom", root: "", gloss: "Mahmoud" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "لَطِيْفُ", lemma: "لطيف", pos: "adj", features: "voc", root: "ل ط ف", gloss: "Gentle One" },
            { surface: "مَا", lemma: "ما", pos: "part", features: "part", root: "", gloss: "how" },
            { surface: "أَشَدَّ", lemma: "أشد", pos: "adj", features: "acc", root: "ش د د", gloss: "severe" },
            { surface: "الْحَرَّ", lemma: "حر", pos: "noun", features: "def.acc", root: "ح ر ر", gloss: "the heat" }
          ]
        }
      ],
      checks: [
        {
          q: "مَا قَالَهُ مَحْمُوْدٌ عَنِ الْحَرِّ؟",
          options: ["يَا لَطِيْفُ! مَا أَشَدَّ الْحَرَّ!", "الْحَرُّ لَطِيْفٌ الْيَوْمَ", "لَا أَشْعُرُ بِالْحَرِّ"],
          answer: 0,
          qEn: "What did Mahmoud say about the heat?",
          optionsEn: ["Oh my! How severe the heat is!", "The heat is pleasant today", "I don't feel the heat"]
        }
      ]
    },
    {
      en: "Their father Sulayman said, \"Do you know, Mahmoud, how far the sun is from the earth?\"",
      sentences: [
        {
          id: "qr2-40-006",
          ar: "قَالَ أَبُوْهُمْ سُلَيْمَانُ: أَتَعْرِفُ يَا مَحْمُوْدُ! كَمْ تَبْعُدُ الشَّمْسُ مِنَ الْأَرْضِ؟",
          en: "Their father Sulayman said, \"Do you know, Mahmoud, how far the sun is from the earth?\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "أَبُوْهُمْ", lemma: "أب", pos: "noun", features: "nom+3mp", root: "أ ب و", gloss: "their father" },
            { surface: "سُلَيْمَانُ", lemma: "سليمان", pos: "proper", features: "nom", root: "", gloss: "Sulayman" },
            { surface: "أَتَعْرِفُ", lemma: "عرف", pos: "verb", features: "interrog+impf.2ms", root: "ع ر ف", gloss: "do you know" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "مَحْمُوْدُ", lemma: "محمود", pos: "proper", features: "voc", root: "", gloss: "Mahmoud" },
            { surface: "كَمْ", lemma: "كم", pos: "adv", features: "adv", root: "", gloss: "how much" },
            { surface: "تَبْعُدُ", lemma: "بعد", pos: "verb", features: "impf.3fs", root: "ب ع د", gloss: "is far" },
            { surface: "الشَّمْسُ", lemma: "شمس", pos: "noun", features: "def.nom", root: "ش م س", gloss: "the sun" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الْأَرْضِ", lemma: "أرض", pos: "noun", features: "def.gen", root: "أ ر ض", gloss: "the earth" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا سَأَلَ سُلَيْمَانُ ابْنَهُ مَحْمُوْداً؟",
          options: ["كَمْ تَبْعُدُ الشَّمْسُ مِنَ الْأَرْضِ", "لِمَاذَا الْجَوُّ حَارٌّ الْيَوْمَ", "مَتَىٰ سَتَنْتَهِيْ الْعُطْلَةُ"],
          answer: 0,
          qEn: "What did Sulayman ask his son Mahmoud?",
          optionsEn: ["How far the sun is from the earth", "Why the weather is hot today", "When the holiday will end"]
        }
      ]
    },
    {
      en: "Mahmoud: \"No, father! But I know it is very far.\"",
      sentences: [
        {
          id: "qr2-40-007",
          ar: "مَحْمُوْدٌ: لَا يَا أَبِيْ! وَلٰكِنِّيْ أَعْرِفُ أَنَّهَا بَعِيْدَةٌ جِدّاً.",
          en: "Mahmoud: \"No, father! But I know it is very far.\"",
          tokens: [
            { surface: "مَحْمُوْدٌ", lemma: "محمود", pos: "proper", features: "nom", root: "", gloss: "Mahmoud" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "part", root: "", gloss: "no" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "nom+1cs", root: "أ ب و", gloss: "my father" },
            { surface: "وَلٰكِنِّيْ", lemma: "لكن", pos: "conj", features: "conj+1cs", root: "", gloss: "but I" },
            { surface: "أَعْرِفُ", lemma: "عرف", pos: "verb", features: "impf.1cs", root: "ع ر ف", gloss: "know" },
            { surface: "أَنَّهَا", lemma: "أن", pos: "part", features: "part+3fs", root: "", gloss: "that it" },
            { surface: "بَعِيْدَةٌ", lemma: "بعيد", pos: "adj", features: "indef.nom.f", root: "ب ع د", gloss: "far" },
            { surface: "جِدّاً", lemma: "جدا", pos: "adv", features: "acc", root: "ج د د", gloss: "very" }
          ]
        }
      ],
      checks: [
        {
          q: "هَلْ كَانَ مَحْمُوْدٌ يَعْرِفُ الْمَسَافَةَ بَيْنَ الشَّمْسِ وَالْأَرْضِ بِالتَّحْدِيْدِ؟",
          options: ["لَا، وَلٰكِنَّهُ يَعْرِفُ أَنَّهَا بَعِيْدَةٌ جِدّاً", "نَعَمْ، كَانَ يَعْرِفُهَا بِالضَّبْطِ", "لَمْ يَكُنْ يَعْرِفُ شَيْئاً عَنِ الشَّمْسِ"],
          answer: 0,
          qEn: "Did Mahmoud know the exact distance between the sun and earth?",
          optionsEn: ["No, but he knew it was very far", "Yes, he knew it exactly", "He knew nothing about the sun"]
        }
      ]
    },
    {
      en: "Sulayman: \"You will read at school that the sun is more than ninety million miles from the earth, and the heat is as you see it, so how would it be if the sun drew near until it was only a mile away?!\"",
      sentences: [
        {
          id: "qr2-40-008",
          ar: "سُلَيْمَانُ: سَتَقْرَأُ فِي الْمَدْرَسَةِ أَنَّ الشَّمْسَ تَبْعُدُ مِنَ الْأَرْضِ أَكْثَرَ مِنْ تِسْعِيْنَ مَلْيُوْناً مِنَ الْأَمْيَالِ،",
          en: "Sulayman: \"You will read at school that the sun is more than ninety million miles from the earth,\"",
          tokens: [
            { surface: "سُلَيْمَانُ", lemma: "سليمان", pos: "proper", features: "nom", root: "", gloss: "Sulayman" },
            { surface: "سَتَقْرَأُ", lemma: "قرأ", pos: "verb", features: "fut+impf.2ms", root: "ق ر أ", gloss: "you will read" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "الْمَدْرَسَةِ", lemma: "مدرسة", pos: "noun", features: "def.gen", root: "د ر س", gloss: "the school" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "الشَّمْسَ", lemma: "شمس", pos: "noun", features: "def.acc", root: "ش م س", gloss: "the sun" },
            { surface: "تَبْعُدُ", lemma: "بعد", pos: "verb", features: "impf.3fs", root: "ب ع د", gloss: "is far" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الْأَرْضِ", lemma: "أرض", pos: "noun", features: "def.gen", root: "أ ر ض", gloss: "the earth" },
            { surface: "أَكْثَرَ", lemma: "أكثر", pos: "adj", features: "acc", root: "ك ث ر", gloss: "more" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "than" },
            { surface: "تِسْعِيْنَ", lemma: "تسعين", pos: "num", features: "acc", root: "ت س ع", gloss: "ninety" },
            { surface: "مَلْيُوْناً", lemma: "مليون", pos: "noun", features: "indef.acc", root: "", gloss: "million" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْأَمْيَالِ", lemma: "ميل", pos: "noun", features: "pl.def.gen", root: "م ي ل", gloss: "miles" }
          ]
        },
        {
          id: "qr2-40-009",
          ar: "وَالْحَرُّ كَمَا تَرَىٰ، فَكَيْفَ إِذَا دَنَتِ الشَّمْسُ حَتَّىٰ تَكُوْنَ مِقْدَارَ مِيْلٍ؟!",
          en: "and the heat is as you see it, so how would it be if the sun drew near until it was only a mile away?!",
          tokens: [
            { surface: "وَالْحَرُّ", lemma: "حر", pos: "noun", features: "conj+def.nom", root: "ح ر ر", gloss: "and the heat" },
            { surface: "كَمَا", lemma: "كما", pos: "conj", features: "conj", root: "", gloss: "as" },
            { surface: "تَرَىٰ", lemma: "رأى", pos: "verb", features: "impf.2ms", root: "ر أ ي", gloss: "you see" },
            { surface: "فَكَيْفَ", lemma: "كيف", pos: "adv", features: "conj+adv", root: "", gloss: "so how" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", features: "part", root: "", gloss: "if" },
            { surface: "دَنَتِ", lemma: "دنا", pos: "verb", features: "perf.3fs", root: "د ن و", gloss: "drew near" },
            { surface: "الشَّمْسُ", lemma: "شمس", pos: "noun", features: "def.nom", root: "ش م س", gloss: "the sun" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "part", root: "", gloss: "until" },
            { surface: "تَكُوْنَ", lemma: "كان", pos: "verb", features: "subj.3fs", root: "ك و ن", gloss: "it was" },
            { surface: "مِقْدَارَ", lemma: "مقدار", pos: "noun", features: "acc.constr", root: "ق د ر", gloss: "the amount of" },
            { surface: "مِيْلٍ", lemma: "ميل", pos: "noun", features: "indef.gen", root: "م ي ل", gloss: "a mile" }
          ]
        }
      ],
      checks: [
        {
          q: "كَمْ تَبْعُدُ الشَّمْسُ عَنِ الْأَرْضِ كَمَا ذَكَرَ سُلَيْمَانُ؟",
          options: ["أَكْثَرَ مِنْ تِسْعِيْنَ مَلْيُوْناً مِنَ الْأَمْيَالِ", "مِئَةَ مِيْلٍ فَقَطْ", "مِيْلاً وَاحِداً"],
          answer: 0,
          qEn: "How far did Sulayman say the sun is from the earth?",
          optionsEn: ["More than ninety million miles", "Only a hundred miles", "One mile"]
        }
      ]
    },
    {
      en: "Mahmoud: \"I seek refuge in Allah! And when is this, father?\"",
      sentences: [
        {
          id: "qr2-40-010",
          ar: "مَحْمُوْدٌ: الْعِيَاذُ بِاللهِ! وَمَتَىٰ هٰذَا يَا أَبِيْ؟",
          en: "Mahmoud: \"I seek refuge in Allah! And when is this, father?\"",
          tokens: [
            { surface: "مَحْمُوْدٌ", lemma: "محمود", pos: "proper", features: "nom", root: "", gloss: "Mahmoud" },
            { surface: "الْعِيَاذُ", lemma: "عياذ", pos: "noun", features: "def.nom", root: "ع و ذ", gloss: "refuge" },
            { surface: "بِاللهِ", lemma: "الله", pos: "proper", features: "prep+gen", root: "", gloss: "in Allah" },
            { surface: "وَمَتَىٰ", lemma: "متى", pos: "adv", features: "conj+adv", root: "", gloss: "and when" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem", root: "", gloss: "this" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "nom+1cs", root: "أ ب و", gloss: "my father" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ رَدَّ مَحْمُوْدٌ عِنْدَمَا سَمِعَ عَنِ اقْتِرَابِ الشَّمْسِ؟",
          options: ["الْعِيَاذُ بِاللهِ! وَمَتَىٰ هٰذَا؟", "ضَحِكَ وَلَمْ يُصَدِّقْ", "لَمْ يَهْتَمَّ بِذٰلِكَ"],
          answer: 0,
          qEn: "How did Mahmoud react when he heard about the sun drawing near?",
          optionsEn: ["He said, 'I seek refuge in Allah! And when is this?'", "He laughed and didn't believe it", "He didn't care about it"]
        }
      ]
    },
    {
      en: "Sulayman: \"That, my son, is the Day of Resurrection, the day when mankind will stand before the Lord of the worlds.\"",
      sentences: [
        {
          id: "qr2-40-011",
          ar: "سُلَيْمَانُ: ذٰلِكَ يَا بُنَيَّ يَوْمَ الْقِيَامَةِ،",
          en: "Sulayman: \"That, my son, is the Day of Resurrection,\"",
          tokens: [
            { surface: "سُلَيْمَانُ", lemma: "سليمان", pos: "proper", features: "nom", root: "", gloss: "Sulayman" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "بُنَيَّ", lemma: "بني", pos: "noun", features: "voc+1cs", root: "ب ن ي", gloss: "my dear son" },
            { surface: "يَوْمَ", lemma: "يوم", pos: "noun", features: "acc.constr", root: "ي و م", gloss: "the day of" },
            { surface: "الْقِيَامَةِ", lemma: "قيامة", pos: "noun", features: "def.gen", root: "ق و م", gloss: "the Resurrection" }
          ]
        },
        {
          id: "qr2-40-012",
          ar: "يَوْمَ يَقُوْمُ النَّاسُ لِرَبِّ الْعَالَمِيْنَ.",
          en: "the day when mankind will stand before the Lord of the worlds.",
          tokens: [
            { surface: "يَوْمَ", lemma: "يوم", pos: "noun", features: "acc.constr", root: "ي و م", gloss: "the day" },
            { surface: "يَقُوْمُ", lemma: "قام", pos: "verb", features: "impf.3ms", root: "ق و م", gloss: "will stand" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "mankind" },
            { surface: "لِرَبِّ", lemma: "رب", pos: "noun", features: "prep+gen.constr", root: "ر ب ب", gloss: "before the Lord of" },
            { surface: "الْعَالَمِيْنَ", lemma: "عالم", pos: "noun", features: "pl.def.gen", root: "ع ل م", gloss: "the worlds" }
          ]
        }
      ],
      checks: [
        {
          q: "مَا الَّذِيْ يَحْدُثُ يَوْمَ تَدْنُو فِيْهِ الشَّمْسُ مِقْدَارَ مِيْلٍ؟",
          options: ["ذٰلِكَ يَوْمُ الْقِيَامَةِ إِذْ يَقُوْمُ النَّاسُ لِرَبِّ الْعَالَمِيْنَ", "ذٰلِكَ يَوْمُ عُطْلَةٍ آخَرُ", "ذٰلِكَ لَنْ يَحْدُثَ أَبَداً"],
          answer: 0,
          qEn: "What happens on the day the sun draws to within a mile?",
          optionsEn: ["That is the Day of Resurrection, when mankind will stand before the Lord of the worlds", "That is just another holiday", "That will never happen"]
        }
      ]
    },
    {
      en: "Ahmad: \"And how will people be on that day, father?\"",
      sentences: [
        {
          id: "qr2-40-013",
          ar: "أَحْمَدُ: وَكَيْفَ النَّاسُ يَوْمَئِذٍ يَا أَبَتِ؟",
          en: "Ahmad: \"And how will people be on that day, father?\"",
          tokens: [
            { surface: "أَحْمَدُ", lemma: "أحمد", pos: "proper", features: "nom", root: "", gloss: "Ahmad" },
            { surface: "وَكَيْفَ", lemma: "كيف", pos: "adv", features: "conj+adv", root: "", gloss: "and how" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "people" },
            { surface: "يَوْمَئِذٍ", lemma: "يومئذ", pos: "adv", features: "adv", root: "ي و م", gloss: "on that day" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَبَتِ", lemma: "أب", pos: "noun", features: "voc", root: "أ ب و", gloss: "father" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا سَأَلَ أَحْمَدُ أَبَاهُ؟",
          options: ["كَيْفَ يَكُوْنُ النَّاسُ يَوْمَ الْقِيَامَةِ", "مَتَىٰ تَنْتَهِيْ الْمَدْرَسَةُ", "كَمْ عَدَدُ النَّاسِ فِي الْعَالَمِ"],
          answer: 0,
          qEn: "What did Ahmad ask his father?",
          optionsEn: ["How people will be on the Day of Resurrection", "When school will end", "How many people are in the world"]
        }
      ]
    },
    {
      en: "Sulayman: \"People will be in sweat according to the measure of their deeds -- some of them will be up to their ankles, some up to their knees, some up to their waists, and some will be so overwhelmed by sweat that it will reach up to their mouths.\"",
      sentences: [
        {
          id: "qr2-40-014",
          ar: "سُلَيْمَانُ: يَكُوْنُ النَّاسُ عَلَىٰ قَدْرِ أَعْمَالِهِمْ فِي الْعَرَقِ،",
          en: "Sulayman: \"People will be in sweat according to the measure of their deeds,\"",
          tokens: [
            { surface: "سُلَيْمَانُ", lemma: "سليمان", pos: "proper", features: "nom", root: "", gloss: "Sulayman" },
            { surface: "يَكُوْنُ", lemma: "كان", pos: "verb", features: "impf.3ms", root: "ك و ن", gloss: "will be" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "people" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "according to" },
            { surface: "قَدْرِ", lemma: "قدر", pos: "noun", features: "gen.constr", root: "ق د ر", gloss: "the measure of" },
            { surface: "أَعْمَالِهِمْ", lemma: "عمل", pos: "noun", features: "pl.gen+3mp", root: "ع م ل", gloss: "their deeds" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْعَرَقِ", lemma: "عرق", pos: "noun", features: "def.gen", root: "ع ر ق", gloss: "sweat" }
          ]
        },
        {
          id: "qr2-40-015",
          ar: "فَمِنْهُمْ مَنْ يَكُوْنُ إِلَىٰ كَعْبَيْهِ، وَمِنْهُمْ مَنْ يَكُوْنُ إِلَىٰ رُكْبَتَيْهِ،",
          en: "some of them will be up to their ankles, some up to their knees,",
          tokens: [
            { surface: "فَمِنْهُمْ", lemma: "من", pos: "prep", features: "conj+prep+3mp", root: "", gloss: "and among them" },
            { surface: "مَنْ", lemma: "من-شرط", pos: "rel", features: "rel", root: "", gloss: "some who" },
            { surface: "يَكُوْنُ", lemma: "كان", pos: "verb", features: "impf.3ms", root: "ك و ن", gloss: "will be" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "up to" },
            { surface: "كَعْبَيْهِ", lemma: "كعب", pos: "noun", features: "dual.gen+3ms", root: "ك ع ب", gloss: "his two ankles" },
            { surface: "وَمِنْهُمْ", lemma: "من", pos: "prep", features: "conj+prep+3mp", root: "", gloss: "and among them" },
            { surface: "مَنْ", lemma: "من-شرط", pos: "rel", features: "rel", root: "", gloss: "some who" },
            { surface: "يَكُوْنُ", lemma: "كان", pos: "verb", features: "impf.3ms", root: "ك و ن", gloss: "will be" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "up to" },
            { surface: "رُكْبَتَيْهِ", lemma: "ركبة", pos: "noun", features: "dual.gen+3ms", root: "ر ك ب", gloss: "his two knees" }
          ]
        },
        {
          id: "qr2-40-016",
          ar: "وَمِنْهُمْ مَنْ يَكُوْنُ إِلَىٰ حَقْوَيْهِ، وَمِنْهُمْ مَنْ يُلْجِمُهُ الْعَرَقُ إِلْجَاماً.",
          en: "some up to their waists, and some will be so overwhelmed by sweat that it will reach up to their mouths.",
          tokens: [
            { surface: "وَمِنْهُمْ", lemma: "من", pos: "prep", features: "conj+prep+3mp", root: "", gloss: "and among them" },
            { surface: "مَنْ", lemma: "من-شرط", pos: "rel", features: "rel", root: "", gloss: "some who" },
            { surface: "يَكُوْنُ", lemma: "كان", pos: "verb", features: "impf.3ms", root: "ك و ن", gloss: "will be" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "up to" },
            { surface: "حَقْوَيْهِ", lemma: "حقو", pos: "noun", features: "dual.gen+3ms", root: "ح ق و", gloss: "his two hips" },
            { surface: "وَمِنْهُمْ", lemma: "من", pos: "prep", features: "conj+prep+3mp", root: "", gloss: "and among them" },
            { surface: "مَنْ", lemma: "من-شرط", pos: "rel", features: "rel", root: "", gloss: "some whom" },
            { surface: "يُلْجِمُهُ", lemma: "ألجم", pos: "verb", features: "impf.3ms+3ms", root: "ل ج م", gloss: "will overwhelm him" },
            { surface: "الْعَرَقُ", lemma: "عرق", pos: "noun", features: "def.nom", root: "ع ر ق", gloss: "the sweat" },
            { surface: "إِلْجَاماً", lemma: "إلجام", pos: "noun", features: "indef.acc", root: "ل ج م", gloss: "completely" }
          ]
        }
      ],
      checks: [
        {
          q: "عَلَىٰ أَيِّ أَسَاسٍ يَكُوْنُ النَّاسُ فِي الْعَرَقِ يَوْمَ الْقِيَامَةِ؟",
          options: ["عَلَىٰ قَدْرِ أَعْمَالِهِمْ", "عَلَىٰ أَعْمَارِهِمْ", "عَلَىٰ أَمْوَالِهِمْ"],
          answer: 0,
          qEn: "On what basis will people be in sweat on the Day of Resurrection?",
          optionsEn: ["According to the measure of their deeds", "According to their ages", "According to their wealth"]
        }
      ]
    },
    {
      en: "Uthman: \"Is there not some shade or place where people can shelter?\"",
      sentences: [
        {
          id: "qr2-40-017",
          ar: "عُثْمَانُ: أَوَلَيْسَ هُنَالِكَ ظِلٌّ أَوْ مَكَانٌ يَسْتَظِلُّ بِهِ النَّاسُ؟",
          en: "Uthman: \"Is there not some shade or place where people can shelter?\"",
          tokens: [
            { surface: "عُثْمَانُ", lemma: "عثمان", pos: "proper", features: "nom", root: "", gloss: "Uthman" },
            { surface: "أَوَلَيْسَ", lemma: "ليس", pos: "verb", features: "interrog+conj+perf.3ms", root: "ل ي س", gloss: "is it not" },
            { surface: "هُنَالِكَ", lemma: "هنالك", pos: "adv", features: "adv", root: "", gloss: "there" },
            { surface: "ظِلٌّ", lemma: "ظل", pos: "noun", features: "indef.nom", root: "ظ ل ل", gloss: "shade" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "مَكَانٌ", lemma: "مكان", pos: "noun", features: "indef.nom", root: "ك و ن", gloss: "a place" },
            { surface: "يَسْتَظِلُّ", lemma: "استظل", pos: "verb", features: "impf.3ms", root: "ظ ل ل", gloss: "shelter" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "prep+3ms", root: "", gloss: "in" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "people" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا سَأَلَ عُثْمَانُ أَبَاهُ؟",
          options: ["هَلْ هُنَالِكَ ظِلٌّ يَسْتَظِلُّ بِهِ النَّاسُ يَوْمَ الْقِيَامَةِ", "هَلْ سَيَذْهَبُوْنَ إِلَىٰ الْبَحْرِ", "هَلِ الْمَدْرَسَةُ قَرِيْبَةٌ مِنَ الْبَيْتِ"],
          answer: 0,
          qEn: "What did Uthman ask his father?",
          optionsEn: ["Whether there is shade for people to shelter in on the Day of Resurrection", "Whether they would go to the sea", "Whether the school is close to the house"]
        }
      ]
    },
    {
      en: "Sulayman: \"Indeed, my son! There is a shade that only seven men will enjoy.\"",
      sentences: [
        {
          id: "qr2-40-018",
          ar: "سُلَيْمَانُ: بَلَىٰ يَا وَلَدِيْ! فَهُنَالِكَ ظِلٌّ لَا يَنْعَمُ بِهِ إِلَّا سَبْعَةٌ مِنَ الرِّجَالِ.",
          en: "Sulayman: \"Indeed, my son! There is a shade that only seven men will enjoy.\"",
          tokens: [
            { surface: "سُلَيْمَانُ", lemma: "سليمان", pos: "proper", features: "nom", root: "", gloss: "Sulayman" },
            { surface: "بَلَىٰ", lemma: "بلى", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "وَلَدِيْ", lemma: "ولد", pos: "noun", features: "voc+1cs", root: "و ل د", gloss: "my son" },
            { surface: "فَهُنَالِكَ", lemma: "هنالك", pos: "adv", features: "conj+adv", root: "", gloss: "for there is" },
            { surface: "ظِلٌّ", lemma: "ظل", pos: "noun", features: "indef.nom", root: "ظ ل ل", gloss: "a shade" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَنْعَمُ", lemma: "نعم", pos: "verb", features: "impf.3ms", root: "ن ع م", gloss: "will enjoy" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "prep+3ms", root: "", gloss: "it" },
            { surface: "إِلَّا", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except" },
            { surface: "سَبْعَةٌ", lemma: "سبعة", pos: "num", features: "indef.nom", root: "س ب ع", gloss: "seven" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الرِّجَالِ", lemma: "رجل", pos: "noun", features: "pl.def.gen", root: "ر ج ل", gloss: "the men" }
          ]
        }
      ],
      checks: [
        {
          q: "كَمْ عَدَدُ الَّذِيْنَ يَنْعَمُوْنَ بِالظِّلِّ يَوْمَ الْقِيَامَةِ؟",
          options: ["سَبْعَةٌ مِنَ الرِّجَالِ فَقَطْ", "كُلُّ النَّاسِ", "لَا أَحَدَ"],
          answer: 0,
          qEn: "How many people will enjoy that shade on the Day of Resurrection?",
          optionsEn: ["Only seven men", "Everyone", "No one"]
        }
      ]
    },
    {
      en: "The boys: \"And who are those fortunate ones, father? Perhaps we can strive to be among them.\"",
      sentences: [
        {
          id: "qr2-40-019",
          ar: "الْأَوْلَادُ: وَمَنْ أُوْلٰئِكَ السُّعَدَاءُ يَا أَبَانَا؟",
          en: "The boys: \"And who are those fortunate ones, father?",
          tokens: [
            { surface: "الْأَوْلَادُ", lemma: "ولد", pos: "noun", features: "pl.def.nom", root: "و ل د", gloss: "the boys" },
            { surface: "وَمَنْ", lemma: "من-شرط", pos: "rel", features: "conj+rel", root: "", gloss: "and who" },
            { surface: "أُوْلٰئِكَ", lemma: "أولئك", pos: "dem", features: "dem", root: "", gloss: "those" },
            { surface: "السُّعَدَاءُ", lemma: "سعيد", pos: "adj", features: "def.nom.pl", root: "س ع د", gloss: "the fortunate ones" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَبَانَا", lemma: "أب", pos: "noun", features: "voc+1cp", root: "أ ب و", gloss: "our father" }
          ]
        },
        {
          id: "qr2-40-020",
          ar: "لَعَلَّنَا نَجْتَهِدُ أَنْ نَكُوْنَ مِنْهُمْ.",
          en: "Perhaps we can strive to be among them.\"",
          tokens: [
            { surface: "لَعَلَّنَا", lemma: "لعل", pos: "part", features: "part+1cp", root: "", gloss: "perhaps we" },
            { surface: "نَجْتَهِدُ", lemma: "اجتهد", pos: "verb", features: "impf.1cp", root: "ج ه د", gloss: "strive" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "نَكُوْنَ", lemma: "كان", pos: "verb", features: "subj.1cp", root: "ك و ن", gloss: "be" },
            { surface: "مِنْهُمْ", lemma: "من", pos: "prep", features: "prep+3mp", root: "", gloss: "among them" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا طَلَبَ الْأَوْلَادُ مِنْ أَبِيْهِمْ بَعْدَ سَمَاعِهِمْ عَنِ السَّبْعَةِ؟",
          options: ["أَنْ يَعْرِفُوا مَنْ هُمُ السُّعَدَاءُ لِيَجْتَهِدُوا أَنْ يَكُوْنُوا مِنْهُمْ", "أَنْ يَخْرُجُوا لِلَّعِبِ", "أَنْ يَنَامُوا لِأَنَّهُمْ تَعِبُوا"],
          answer: 0,
          qEn: "What did the boys ask their father after hearing about the seven?",
          optionsEn: ["To know who those fortunate ones are, so they could strive to be among them", "To go out and play", "To sleep because they were tired"]
        }
      ]
    },
    {
      en: "Sulayman: \"My sons! Every Muslim should strive to be one of the seven, and I will count for you those seven:\"",
      sentences: [
        {
          id: "qr2-40-021",
          ar: "سُلَيْمَانُ: يَا أَوْلَادِيْ! يَنْبَغِيْ لِكُلِّ مُسْلِمٍ أَنْ يَجْتَهِدَ أَنْ يَكُوْنَ أَحَدَ السَّبْعَةِ،",
          en: "Sulayman: \"My sons! Every Muslim should strive to be one of the seven,\"",
          tokens: [
            { surface: "سُلَيْمَانُ", lemma: "سليمان", pos: "proper", features: "nom", root: "", gloss: "Sulayman" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَوْلَادِيْ", lemma: "ولد", pos: "noun", features: "voc.pl+1cs", root: "و ل د", gloss: "my sons" },
            { surface: "يَنْبَغِيْ", lemma: "ينبغي", pos: "verb", features: "impf.3ms", root: "ب غ ي", gloss: "it behooves" },
            { surface: "لِكُلِّ", lemma: "كل", pos: "noun", features: "prep+gen.constr", root: "ك ل ل", gloss: "every" },
            { surface: "مُسْلِمٍ", lemma: "مسلم", pos: "noun", features: "indef.gen", root: "س ل م", gloss: "Muslim" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "يَجْتَهِدَ", lemma: "اجتهد", pos: "verb", features: "subj.3ms", root: "ج ه د", gloss: "strive" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "يَكُوْنَ", lemma: "كان", pos: "verb", features: "subj.3ms", root: "ك و ن", gloss: "be" },
            { surface: "أَحَدَ", lemma: "أحد", pos: "noun", features: "acc.constr", root: "أ ح د", gloss: "one of" },
            { surface: "السَّبْعَةِ", lemma: "سبعة", pos: "num", features: "def.gen", root: "س ب ع", gloss: "the seven" }
          ]
        },
        {
          id: "qr2-40-022",
          ar: "وَأَنَا أَعُدُّ لَكُمْ أُوْلٰئِكَ السَّبْعَةَ:",
          en: "and I will count for you those seven:",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+nom", root: "", gloss: "and I" },
            { surface: "أَعُدُّ", lemma: "عد", pos: "verb", features: "impf.1cs", root: "ع د د", gloss: "will count" },
            { surface: "لَكُمْ", lemma: "ل", pos: "prep", features: "prep+2mp", root: "", gloss: "for you" },
            { surface: "أُوْلٰئِكَ", lemma: "أولئك", pos: "dem", features: "dem", root: "", gloss: "those" },
            { surface: "السَّبْعَةَ", lemma: "سبعة", pos: "num", features: "def.acc", root: "س ب ع", gloss: "seven" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا يَنْبَغِيْ لِكُلِّ مُسْلِمٍ حَسَبَ قَوْلِ سُلَيْمَانَ؟",
          options: ["أَنْ يَجْتَهِدَ أَنْ يَكُوْنَ أَحَدَ السَّبْعَةِ الَّذِيْنَ يُظِلُّهُمُ اللهُ", "أَنْ يَحْفَظَ الْقُرْآنَ كُلَّهُ", "أَنْ يَبْنِيَ مَسْجِداً"],
          answer: 0,
          qEn: "What should every Muslim strive for, according to Sulayman?",
          optionsEn: ["To strive to be one of the seven whom Allah will shade", "To memorize the whole Qur'an", "To build a mosque"]
        }
      ]
    },
    {
      en: "(1) A just ruler.",
      sentences: [
        {
          id: "qr2-40-023",
          ar: "إِمَامٌ عَادِلٌ.",
          en: "(1) A just ruler.",
          tokens: [
            { surface: "إِمَامٌ", lemma: "إمام", pos: "noun", features: "indef.nom", root: "أ م م", gloss: "a ruler" },
            { surface: "عَادِلٌ", lemma: "عادل", pos: "adj", features: "indef.nom", root: "ع د ل", gloss: "just" }
          ]
        }
      ],
      checks: [
        {
          q: "مَا أَوَّلُ وَاحِدٍ مِنَ السَّبْعَةِ الَّذِيْنَ ذَكَرَهُمْ سُلَيْمَانُ؟",
          options: ["إِمَامٌ عَادِلٌ", "رَجُلٌ غَنِيٌّ", "شَيْخٌ كَبِيْرٌ"],
          answer: 0,
          qEn: "What was the first of the seven that Sulayman mentioned?",
          optionsEn: ["A just ruler", "A rich man", "An elderly sheikh"]
        }
      ]
    },
    {
      en: "One of the boys interrupted him and said, \"And who is the imam -- is this the one who leads people in prayer?\"",
      sentences: [
        {
          id: "qr2-40-024",
          ar: "وَقَطَعَ عَلَيْهِ أَحَدُ الْأَوْلَادِ، وَقَالَ:",
          en: "One of the boys interrupted him and said,",
          tokens: [
            { surface: "وَقَطَعَ", lemma: "قطع", pos: "verb", features: "conj+perf.3ms", root: "ق ط ع", gloss: "and interrupted" },
            { surface: "عَلَيْهِ", lemma: "على", pos: "prep", features: "prep+3ms", root: "", gloss: "him" },
            { surface: "أَحَدُ", lemma: "أحد", pos: "noun", features: "nom.constr", root: "أ ح د", gloss: "one of" },
            { surface: "الْأَوْلَادِ", lemma: "ولد", pos: "noun", features: "pl.def.gen", root: "و ل د", gloss: "the boys" },
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" }
          ]
        },
        {
          id: "qr2-40-025",
          ar: "وَمَنْ هُوَ الْإِمَامُ، أَهٰذَا الَّذِيْ يُصَلِّيْ بِالنَّاسِ؟",
          en: "\"And who is the imam -- is this the one who leads people in prayer?\"",
          tokens: [
            { surface: "وَمَنْ", lemma: "من-شرط", pos: "rel", features: "conj+rel", root: "", gloss: "and who" },
            { surface: "هُوَ", lemma: "هو", pos: "noun", features: "nom", root: "", gloss: "is" },
            { surface: "الْإِمَامُ", lemma: "إمام", pos: "noun", features: "def.nom", root: "أ م م", gloss: "the imam" },
            { surface: "أَهٰذَا", lemma: "هذا", pos: "dem", features: "interrog+dem", root: "", gloss: "is this" },
            { surface: "الَّذِيْ", lemma: "الذي", pos: "rel", features: "rel", root: "", gloss: "the one who" },
            { surface: "يُصَلِّيْ", lemma: "صلى", pos: "verb", features: "impf.3ms", root: "ص ل و", gloss: "leads in prayer" },
            { surface: "بِالنَّاسِ", lemma: "ناس", pos: "noun", features: "prep+def.gen", root: "ن و س", gloss: "the people" }
          ]
        }
      ],
      checks: [
        {
          q: "مَا السُّؤَالُ الَّذِيْ قَاطَعَ بِهِ أَحَدُ الْأَوْلَادِ أَبَاهُ؟",
          options: ["مَنْ هُوَ الْإِمَامُ، أَهٰذَا الَّذِيْ يُصَلِّيْ بِالنَّاسِ؟", "كَمْ عُمْرُ الْإِمَامِ الْعَادِلِ؟", "أَيْنَ يَسْكُنُ الْإِمَامُ؟"],
          answer: 0,
          qEn: "What question did one of the boys interrupt with?",
          optionsEn: ["Who is the imam -- is this the one who leads people in prayer?", "How old is the just ruler?", "Where does the imam live?"]
        }
      ]
    },
    {
      en: "Sulayman: \"He too is upon good, but what is meant here is the leader of the Muslims.\"",
      sentences: [
        {
          id: "qr2-40-026",
          ar: "سُلَيْمَانُ: هُوَ أَيْضاً عَلَىٰ خَيْرٍ، لٰكِنَّ الْمُرَادَ هُنَا أَمِيْرُ الْمُسْلِمِيْنَ.",
          en: "Sulayman: \"He too is upon good, but what is meant here is the leader of the Muslims.\"",
          tokens: [
            { surface: "سُلَيْمَانُ", lemma: "سليمان", pos: "proper", features: "nom", root: "", gloss: "Sulayman" },
            { surface: "هُوَ", lemma: "هو", pos: "noun", features: "nom", root: "", gloss: "he" },
            { surface: "أَيْضاً", lemma: "أيضا", pos: "adv", features: "acc", root: "أ ي ض", gloss: "too" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "upon" },
            { surface: "خَيْرٍ", lemma: "خير", pos: "noun", features: "indef.gen", root: "خ ي ر", gloss: "good" },
            { surface: "لٰكِنَّ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "الْمُرَادَ", lemma: "مراد", pos: "noun", features: "def.acc", root: "ر و د", gloss: "what is meant" },
            { surface: "هُنَا", lemma: "هنا", pos: "adv", features: "adv", root: "", gloss: "here" },
            { surface: "أَمِيْرُ", lemma: "أمير", pos: "noun", features: "nom.constr", root: "أ م ر", gloss: "the leader of" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.gen", root: "س ل م", gloss: "the Muslims" }
          ]
        }
      ],
      checks: [
        {
          q: "مَنِ الْمَقْصُوْدُ بِـ'الْإِمَامِ الْعَادِلِ' فِي الْحَدِيْثِ؟",
          options: ["أَمِيْرُ الْمُسْلِمِيْنَ لَا مَنْ يُصَلِّيْ بِالنَّاسِ فَقَطْ", "الَّذِيْ يُصَلِّيْ بِالنَّاسِ فَقَطْ", "أَيُّ رَجُلٍ صَالِحٍ"],
          answer: 0,
          qEn: "Who is meant by \"the just ruler\" in the hadith?",
          optionsEn: ["The leader of the Muslims, not merely the one who leads the prayer", "Only the one who leads people in prayer", "Any righteous man"]
        }
      ]
    },
    {
      en: "The boys spoke up eagerly and said, \"We have understood -- this is like the four caliphs, and Umar ibn Abd al-Aziz, and we have heard many of their stories from our mother.\"",
      sentences: [
        {
          id: "qr2-40-027",
          ar: "وَابْتَدَرَ الْأَوْلَادُ، وَقَالُوْا: قَدْ فَهِمْنَا،",
          en: "The boys spoke up eagerly and said, \"We have understood,\"",
          tokens: [
            { surface: "وَابْتَدَرَ", lemma: "ابتدر", pos: "verb", features: "conj+perf.3ms", root: "ب د ر", gloss: "and spoke up eagerly" },
            { surface: "الْأَوْلَادُ", lemma: "ولد", pos: "noun", features: "pl.def.nom", root: "و ل د", gloss: "the boys" },
            { surface: "وَقَالُوْا", lemma: "قال", pos: "verb", features: "conj+perf.3mp", root: "ق و ل", gloss: "and said" },
            { surface: "قَدْ", lemma: "قد", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "فَهِمْنَا", lemma: "فهم", pos: "verb", features: "perf.1cp", root: "ف ه م", gloss: "we have understood" }
          ]
        },
        {
          id: "qr2-40-028",
          ar: "هٰذَا كَالْخُلَفَاءِ الْأَرْبَعَةِ، وَعُمَرَ بْنِ عَبْدِ الْعَزِيْزِ،",
          en: "\"this is like the four caliphs, and Umar ibn Abd al-Aziz,\"",
          tokens: [
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem", root: "", gloss: "this" },
            { surface: "كَالْخُلَفَاءِ", lemma: "خليفة", pos: "noun", features: "prep+pl.def.gen", root: "خ ل ف", gloss: "like the caliphs" },
            { surface: "الْأَرْبَعَةِ", lemma: "أربعة", pos: "num", features: "def.gen", root: "ر ب ع", gloss: "the four" },
            { surface: "وَعُمَرَ", lemma: "عمر", pos: "proper", features: "conj+gen", root: "", gloss: "and Umar" },
            { surface: "بْنِ", lemma: "ابن", pos: "noun", features: "gen.constr", root: "ب ن ي", gloss: "son of" },
            { surface: "عَبْدِ", lemma: "عبد", pos: "noun", features: "gen.constr", root: "ع ب د", gloss: "the servant of" },
            { surface: "الْعَزِيْزِ", lemma: "عزيز", pos: "proper", features: "def.gen", root: "", gloss: "al-Aziz" }
          ]
        },
        {
          id: "qr2-40-029",
          ar: "وَقَدْ سَمِعْنَا كَثِيْراً مِنْ حِكَايَاتِهِمْ مِنْ أُمِّنَا.",
          en: "\"and we have heard many of their stories from our mother.\"",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "سَمِعْنَا", lemma: "سمع", pos: "verb", features: "perf.1cp", root: "س م ع", gloss: "we have heard" },
            { surface: "كَثِيْراً", lemma: "كثير", pos: "adj", features: "acc", root: "ك ث ر", gloss: "much" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "حِكَايَاتِهِمْ", lemma: "حكاية", pos: "noun", features: "pl.gen+3mp", root: "ح ك ي", gloss: "their stories" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "أُمِّنَا", lemma: "أم", pos: "noun", features: "gen+1cp", root: "أ م م", gloss: "our mother" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَنْ مَثَّلَ الْأَوْلَادُ لِلْإِمَامِ الْعَادِلِ؟",
          options: ["بِالْخُلَفَاءِ الْأَرْبَعَةِ وَعُمَرَ بْنِ عَبْدِ الْعَزِيْزِ", "بِمُدَرِّسِهِمْ فِي الْمَدْرَسَةِ", "بِجَارِهِمُ الْغَنِيِّ"],
          answer: 0,
          qEn: "Whom did the boys give as examples of a just ruler?",
          optionsEn: ["The four caliphs and Umar ibn Abd al-Aziz", "Their schoolteacher", "Their rich neighbor"]
        }
      ]
    }
  ]
};

// القراءة الراشدة, volume two, chapter 37 (printed heading "٣٧") --
// النَّظَافَةُ -- "Cleanliness".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 133-135 (PDF page
// index == printed page number). Page 133 opens fresh with the "(٣٧)"
// heading; page 135 ends with the "✳ ✳ ✳" divider partway down, confirming
// the chapter is exactly three pages (133-135); chapter 38 "الْحَنِيْنُ
// إِلَىٰ الشَّهَادَةِ (١)" begins fresh on 136. A contrast essay: Tahir, a
// poor farmer's son who is meticulously clean and organized, versus
// Shahid, a rich classmate who is careless and messy.
//
// Sixth of the nine chapters (32-40) filling the gap flagged in
// qiraah-v2/index.js's header comment. Spliced in after ch36.
//
// The root و س خ ("dirt/dirty") carries THREE distinct senses within this
// one chapter -- a noun ("لَا تَرَىٰ فِيْهَا وَسَخًا", "you see no dirt on
// it"), an adjective ("ثَوْبٍ وَسِخٍ", "a dirty garment" -- the majority
// usage), and a transitive verb ("يُوَسِّخُهَا", "he dirties them"). Since
// the adjective is by far the most frequent sense here, the bare lemma
// "وسخ" is kept for it, and the other two take the established suffixes:
// "وسخ-اسم" (noun, "dirt") and "وسخ-فعل" (verb, "to dirty"). Likewise
// "كتب" (noun, "books", كُتُبُهُ) clashes with "يَكْتُبُ" ("he writes") --
// the verb sense takes "كتب-فعل". By contrast "ضَاعَ/يَضِيْعُ" ("to be
// lost/wasted", intransitive form I) and "ضَيَّعَ/يُضَيِّعُ" ("to waste
// something", transitive form II) are already distinct bare spellings
// ("ضاع" vs "ضيع") once diacritics are stripped, so no suffix is needed
// there even though both appear in this chapter. A third function-word
// clash: "مَا" is used once as the negation particle ("وَمَا رَآهُ
// أَصْدِقَاؤُهُ ... أَبَدًا", "his friends never saw him...") and once as the
// relative pronoun ("مَا يُرِيْدُهُ", "what he wants") -- the bare lemma "ما"
// (pos "part") is kept for the far more common negation sense, and the
// relative sense takes a new suffix, "ما-موصول" (pos "rel"), extending the
// function-word disambiguation family alongside "-استفهام" (ch35/36) and
// "-شرط" (ch36).
export const CHAPTER = {
  id: "ch37",
  title: {
    ar: "النَّظَافَةُ",
    en: "Cleanliness"
  },
  pages: [133, 134, 135],
  newWords: [
    "سكن", "قرية", "أرسل", "مدبر", "عاقل", "ثياب", "متواضع", "نظيف", "مرتب", "وسخ-اسم",
    "غسل", "إبرة", "خيط", "تخرق", "ثوب", "خاط", "رقع", "خجل", "مرقوع", "وسخ",
    "أبدا", "بذلة", "حجرة", "منتظم", "محل", "ضاع", "تفقد", "التماس", "ظلام", "قدر",
    "نظام", "غبار", "أثر", "دهن", "مسحة", "كتابة", "تمرين", "اشترى", "كتب-فعل", "خط",
    "توضأ", "استاك", "سن", "اغتسل", "أسبوع", "شتاء", "مرض-فعل", "قوي", "نشيط", "فصل",
    "ولد", "ضد", "غالي", "غالب", "دنس", "ملابس", "سريع", "وسخ-فعل", "جلد", "مشقوق",
    "ورق", "مخروق", "طفل", "عبث", "مشى", "مركبة", "دفتر", "معرض", "متحف", "رسم",
    "صورة", "توقيع", "شكل", "رياضي", "خريطة", "جغرافي", "حافظ", "ضيع", "طويل", "تغيير",
    "سرعة", "فطن", "نظافة", "ما-موصول"
  ],
  lemmas: {
    "طاهر": { root: "", pos: "proper", gloss: "Tahir" },
    "ابن": { root: "ب ن ي", pos: "noun", gloss: "son (of)" },
    "فلاح": { root: "ف ل ح", pos: "noun", gloss: "a farmer" },
    "سكن": { root: "س ك ن", pos: "verb", gloss: "to live, reside" },
    "أب": { root: "أ ب و", pos: "noun", gloss: "father" },
    "في": { root: "", pos: "prep", gloss: "in" },
    "قرية": { root: "ق ر ي", pos: "noun", gloss: "a village" },
    "أرسل": { root: "ر س ل", pos: "verb", gloss: "to send" },
    "إلى": { root: "", pos: "prep", gloss: "to" },
    "قليل": { root: "ق ل ل", pos: "adv", gloss: "a little" },
    "من": { root: "", pos: "prep", gloss: "of, from" },
    "نقد": { root: "ن ق د", pos: "noun", gloss: "money, currency" },
    "كل": { root: "ك ل ل", pos: "noun", gloss: "every" },
    "شهر": { root: "ش ه ر", pos: "noun", gloss: "a month" },
    "لكن": { root: "", pos: "conj", gloss: "but" },
    "ولد": { root: "و ل د", pos: "noun", gloss: "a boy, child" },
    "مدبر": { root: "د ب ر", pos: "adj", gloss: "prudent, well-organized" },
    "عاقل": { root: "ع ق ل", pos: "adj", gloss: "sensible, wise" },
    "ثياب": { root: "ث و ب", pos: "noun", gloss: "clothes" },
    "متواضع": { root: "و ض ع", pos: "adj", gloss: "modest, humble" },
    "دائما": { root: "د و م", pos: "adv", gloss: "always" },
    "نظيف": { root: "ن ظ ف", pos: "adj", gloss: "clean" },
    "مرتب": { root: "ر ت ب", pos: "adj", gloss: "tidy, orderly" },
    "رأى": { root: "ر أ ي", pos: "verb", gloss: "to see" },
    "وسخ-اسم": { root: "و س خ", pos: "noun", gloss: "dirt, filth" },
    "غسل": { root: "غ س ل", pos: "verb", gloss: "to wash" },
    "يد": { root: "ي د ي", pos: "noun", gloss: "hand" },
    "جمعة": { root: "ج م ع", pos: "noun", gloss: "Friday" },
    "عند": { root: "", pos: "prep", gloss: "with, to have" },
    "إبرة": { root: "أ ب ر", pos: "noun", gloss: "a needle" },
    "خيط": { root: "خ ي ط", pos: "noun", gloss: "thread" },
    "إذا": { root: "", pos: "part", gloss: "if, when" },
    "تخرق": { root: "خ ر ق", pos: "verb", gloss: "to tear, get a hole", book_note: "تَخَرَّقَ يَتَخَرَّقُ الثَّوْبُ: اتَّسَعَ شَقُّهُ." },
    "ثوب": { root: "ث و ب", pos: "noun", gloss: "a garment" },
    "خاط": { root: "خ ي ط", pos: "verb", gloss: "to sew" },
    "ب": { root: "", pos: "prep", gloss: "with, by" },
    "أو": { root: "", pos: "conj", gloss: "or" },
    "رقع": { root: "ر ق ع", pos: "verb", gloss: "to patch" },
    "نفس": { root: "ن ف س", pos: "noun", gloss: "self" },
    "لا": { root: "", pos: "part", gloss: "not" },
    "خجل": { root: "خ ج ل", pos: "verb", gloss: "to be ashamed, embarrassed" },
    "خرج": { root: "خ ر ج", pos: "verb", gloss: "to go out" },
    "مرقوع": { root: "ر ق ع", pos: "adj", gloss: "patched" },
    "وسخ": { root: "و س خ", pos: "adj", gloss: "dirty" },
    "ما": { root: "", pos: "part", gloss: "not" },
    "صديق": { root: "ص د ق", pos: "noun", gloss: "a friend" },
    "أبدا": { root: "أ ب د", pos: "adv", gloss: "never, ever" },
    "حسب": { root: "ح س ب", pos: "verb", gloss: "to think, suppose" },
    "أن": { root: "", pos: "part", gloss: "that" },
    "غني": { root: "غ ن ي", pos: "adj", gloss: "rich" },
    "كثير": { root: "ك ث ر", pos: "adj", gloss: "much, many" },
    "ملك": { root: "م ل ك", pos: "verb", gloss: "to own, possess" },
    "إلا": { root: "", pos: "part", gloss: "except" },
    "أربع": { root: "ر ب ع", pos: "num", gloss: "four" },
    "بذلة": { root: "ب ذ ل", pos: "noun", gloss: "a work outfit", book_note: "بِذْلَة جَمْع بِذْلَات: مَا يُلْبَسُ فِي الْمِهْنَةِ وَالْعَمَلِ." },
    "دخل": { root: "د خ ل", pos: "verb", gloss: "to enter" },
    "حجرة": { root: "ح ج ر", pos: "noun", gloss: "a room" },
    "منتظم": { root: "ن ظ م", pos: "adj", gloss: "organized, orderly" },
    "شيء": { root: "ش ي أ", pos: "noun", gloss: "a thing" },
    "محل": { root: "ح ل ل", pos: "noun", gloss: "a place, spot" },
    "ضاع": { root: "ض ي ع", pos: "verb", gloss: "to be lost, wasted" },
    "وقت": { root: "و ق ت", pos: "noun", gloss: "time" },
    "تفقد": { root: "ف ق د", pos: "noun", gloss: "searching for, looking for" },
    "أشياء": { root: "ش ي أ", pos: "noun", gloss: "things" },
    "التماس": { root: "ل م س", pos: "noun", gloss: "searching, seeking" },
    "ظلام": { root: "ظ ل م", pos: "noun", gloss: "darkness" },
    "قدر": { root: "ق د ر", pos: "verb", gloss: "to be able" },
    "على": { root: "", pos: "prep", gloss: "to" },
    "أخذ": { root: "أ خ ذ", pos: "verb", gloss: "to take" },
    "أراد": { root: "ر و د", pos: "verb", gloss: "to want" },
    "لأن": { root: "", pos: "conj", gloss: "because" },
    "كتب": { root: "ك ت ب", pos: "noun", gloss: "books" },
    "نظام": { root: "ن ظ م", pos: "noun", gloss: "order, system" },
    "هي": { root: "", pos: "noun", gloss: "she, it" },
    "غبار": { root: "غ ب ر", pos: "noun", gloss: "dust" },
    "تراب": { root: "ت ر ب", pos: "noun", gloss: "dust, soil" },
    "أثر": { root: "أ ث ر", pos: "noun", gloss: "a trace, mark" },
    "دهن": { root: "د ه ن", pos: "noun", gloss: "oil, grease" },
    "مسحة": { root: "م س ح", pos: "noun", gloss: "a smudge, wipe-mark" },
    "كتابة": { root: "ك ت ب", pos: "noun", gloss: "writing" },
    "تمرين": { root: "م ر ن", pos: "noun", gloss: "a (written) exercise" },
    "كأن": { root: "", pos: "part", gloss: "as if" },
    "اشترى": { root: "ش ر ي", pos: "verb", gloss: "to buy" },
    "يوم": { root: "ي و م", pos: "noun", gloss: "a day" },
    "كتب-فعل": { root: "ك ت ب", pos: "verb", gloss: "to write" },
    "اسم": { root: "س م و", pos: "noun", gloss: "a name" },
    "مكان": { root: "ك و ن", pos: "noun", gloss: "a place" },
    "واحد": { root: "و ح د", pos: "num", gloss: "one" },
    "خط": { root: "خ ط ط", pos: "noun", gloss: "handwriting, a line" },
    "جيد": { root: "ج و د", pos: "adj", gloss: "good" },
    "قام": { root: "ق و م", pos: "verb", gloss: "to get up" },
    "صباح": { root: "ص ب ح", pos: "noun", gloss: "morning" },
    "توضأ": { root: "و ض أ", pos: "verb", gloss: "to perform ablution" },
    "صلاة": { root: "ص ل و", pos: "noun", gloss: "prayer" },
    "صبح": { root: "ص ب ح", pos: "noun", gloss: "the dawn prayer" },
    "استاك": { root: "س و ك", pos: "verb", gloss: "to brush the teeth (with a siwak)", book_note: "اسْتَاكَ يَسْتَاكُ: نَظَّفَ الْأَسْنَانَ بِالسِّوَاكِ." },
    "نظف": { root: "ن ظ ف", pos: "verb", gloss: "to clean" },
    "سن": { root: "س ن ن", pos: "noun", gloss: "a tooth" },
    "اغتسل": { root: "غ س ل", pos: "verb", gloss: "to bathe" },
    "صيف": { root: "ص ي ف", pos: "noun", gloss: "summer" },
    "مرة": { root: "م ر ر", pos: "noun", gloss: "a time, once" },
    "أسبوع": { root: "س ب ع", pos: "noun", gloss: "a week" },
    "شتاء": { root: "ش ت و", pos: "noun", gloss: "winter" },
    "ذلك": { root: "", pos: "dem", gloss: "that" },
    "مرض-فعل": { root: "م ر ض", pos: "verb", gloss: "to become sick" },
    "هو": { root: "", pos: "noun", gloss: "he, it" },
    "قوي": { root: "ق و ي", pos: "adj", gloss: "strong" },
    "نشيط": { root: "ن ش ط", pos: "adj", gloss: "energetic, active" },
    "فصل": { root: "ف ص ل", pos: "noun", gloss: "a classroom" },
    "شاهد": { root: "", pos: "proper", gloss: "Shahid" },
    "ضد": { root: "ض د د", pos: "noun", gloss: "the opposite" },
    "غالي": { root: "غ ل و", pos: "adj", gloss: "expensive, precious" },
    "جميل": { root: "ج م ل", pos: "adj", gloss: "beautiful, nice" },
    "غالب": { root: "غ ل ب", pos: "noun", gloss: "the majority (of cases)" },
    "دنس": { root: "د ن س", pos: "adj", gloss: "filthy", book_note: "دَنِسٌ: وَسِخٌ." },
    "غير": { root: "غ ي ر", pos: "verb", gloss: "to change (something)" },
    "ملابس": { root: "ل ب س", pos: "noun", gloss: "clothes" },
    "سريع": { root: "س ر ع", pos: "adj", gloss: "quick, fast" },
    "وسخ-فعل": { root: "و س خ", pos: "verb", gloss: "to dirty, soil" },
    "كذلك": { root: "", pos: "adv", gloss: "likewise" },
    "جلد": { root: "ج ل د", pos: "noun", gloss: "a book cover, binding" },
    "مشقوق": { root: "ش ق ق", pos: "adj", gloss: "split, torn" },
    "ورق": { root: "و ر ق", pos: "noun", gloss: "paper" },
    "مخروق": { root: "خ ر ق", pos: "adj", gloss: "torn, punctured" },
    "طفل": { root: "ط ف ل", pos: "noun", gloss: "a child" },
    "عبث": { root: "ع ب ث", pos: "verb", gloss: "to play around, tamper carelessly" },
    "مشى": { root: "م ش ي", pos: "verb", gloss: "to walk" },
    "سكة": { root: "س ك ك", pos: "noun", gloss: "a plowshare" },
    "داس": { root: "د و س", pos: "verb", gloss: "to trample" },
    "مركبة": { root: "ر ك ب", pos: "noun", gloss: "a vehicle, cart" },
    "دفتر": { root: "د ف ت ر", pos: "noun", gloss: "a notebook" },
    "معرض": { root: "ع ر ض", pos: "noun", gloss: "an exhibition" },
    "متحف": { root: "ت ح ف", pos: "noun", gloss: "a museum" },
    "رسم": { root: "ر س م", pos: "noun", gloss: "a drawing" },
    "صورة": { root: "ص و ر", pos: "noun", gloss: "a picture" },
    "توقيع": { root: "و ق ع", pos: "noun", gloss: "a signature, scribble" },
    "شكل": { root: "ش ك ل", pos: "noun", gloss: "a shape, figure" },
    "رياضي": { root: "ر و ض", pos: "adj", gloss: "mathematical" },
    "خريطة": { root: "خ ر ط", pos: "noun", gloss: "a map" },
    "جغرافي": { root: "", pos: "adj", gloss: "geographic" },
    "قال": { root: "ق و ل", pos: "verb", gloss: "to say" },
    "لماذا": { root: "", pos: "adv", gloss: "why" },
    "حافظ": { root: "ح ف ظ", pos: "verb", gloss: "to preserve, maintain" },
    "إن": { root: "", pos: "part", gloss: "indeed" },
    "غال": { root: "غ ل و", pos: "adj", gloss: "precious, expensive" },
    "ضيع": { root: "ض ي ع", pos: "verb", gloss: "to waste (something)" },
    "طويل": { root: "ط و ل", pos: "adj", gloss: "long" },
    "تغيير": { root: "غ ي ر", pos: "noun", gloss: "changing" },
    "سرعة": { root: "س ر ع", pos: "noun", gloss: "speed, quickness" },
    "فطن": { root: "ف ط ن", pos: "verb", gloss: "to notice, be aware", book_note: "فَطِنَ يَفْطَنُ لَهُ أَوْ إِلَيْهِ: تَنَبَّهَ لَهُ." },
    "نظافة": { root: "ن ظ ف", pos: "noun", gloss: "cleanliness" },
    "ما-موصول": { root: "", pos: "rel", gloss: "what, that which" }
  },
  paragraphs: [
    {
      en: "Tahir is a farmer's son. His father lives in the village and sends Tahir a little money every month.",
      sentences: [
        {
          id: "qr2-37-001",
          ar: "طَاهِرٌ ابْنُ فَلَّاحٍ.",
          en: "Tahir is a farmer's son.",
          tokens: [
            { surface: "طَاهِرٌ", lemma: "طاهر", pos: "proper", features: "nom", root: "", gloss: "Tahir" },
            { surface: "ابْنُ", lemma: "ابن", pos: "noun", features: "nom.constr", root: "ب ن ي", gloss: "the son of" },
            { surface: "فَلَّاحٍ", lemma: "فلاح", pos: "noun", features: "indef.gen", root: "ف ل ح", gloss: "a farmer" }
          ]
        },
        {
          id: "qr2-37-002",
          ar: "يَسْكُنُ أَبُوْهُ فِي الْقَرْيَةِ وَيُرْسِلُ إِلَىٰ طَاهِرٍ قَلِيْلًا مِنَ النُّقُوْدِ كُلَّ شَهْرٍ.",
          en: "His father lives in the village and sends Tahir a little money every month.",
          tokens: [
            { surface: "يَسْكُنُ", lemma: "سكن", pos: "verb", features: "impf.3ms", root: "س ك ن", gloss: "lives" },
            { surface: "أَبُوْهُ", lemma: "أب", pos: "noun", features: "nom+3ms", root: "أ ب و", gloss: "his father" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْقَرْيَةِ", lemma: "قرية", pos: "noun", features: "def.gen", root: "ق ر ي", gloss: "the village" },
            { surface: "وَيُرْسِلُ", lemma: "أرسل", pos: "verb", features: "conj+impf.3ms", root: "ر س ل", gloss: "and sends" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "طَاهِرٍ", lemma: "طاهر", pos: "proper", features: "gen", root: "", gloss: "Tahir" },
            { surface: "قَلِيْلًا", lemma: "قليل", pos: "adv", features: "acc", root: "ق ل ل", gloss: "a little" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "النُّقُوْدِ", lemma: "نقد", pos: "noun", features: "pl.def.gen", root: "ن ق د", gloss: "the money" },
            { surface: "كُلَّ", lemma: "كل", pos: "noun", features: "acc.constr", root: "ك ل ل", gloss: "every" },
            { surface: "شَهْرٍ", lemma: "شهر", pos: "noun", features: "indef.gen", root: "ش ه ر", gloss: "month" }
          ]
        }
      ],
      checks: [
        {
          q: "مَنْ أَبُو طَاهِرٍ؟",
          options: ["فَلَّاحٌ يَسْكُنُ فِي الْقَرْيَةِ", "طَبِيْبٌ فِي الْمَدِيْنَةِ", "مُدَرِّسٌ فِي الْمَدْرَسَةِ"],
          answer: 0,
          qEn: "Who is Tahir's father?",
          optionsEn: ["A farmer who lives in the village", "A doctor in the city", "A teacher at the school"]
        }
      ]
    },
    {
      en: "But Tahir is a prudent, sensible boy. His clothes are modest, but they are always clean and tidy -- you see no dirt on them. He washes them by hand every Friday, and he has a needle and thread, so if a garment tears he sews it with the needle or patches it himself.",
      sentences: [
        {
          id: "qr2-37-003",
          ar: "وَلٰكِنَّ طَاهِرًا وَلَدٌ مُدَبِّرٌ عَاقِلٌ،",
          en: "But Tahir is a prudent, sensible boy,",
          tokens: [
            { surface: "وَلٰكِنَّ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "طَاهِرًا", lemma: "طاهر", pos: "proper", features: "acc", root: "", gloss: "Tahir" },
            { surface: "وَلَدٌ", lemma: "ولد", pos: "noun", features: "indef.nom", root: "و ل د", gloss: "a boy" },
            { surface: "مُدَبِّرٌ", lemma: "مدبر", pos: "adj", features: "indef.nom", root: "د ب ر", gloss: "prudent" },
            { surface: "عَاقِلٌ", lemma: "عاقل", pos: "adj", features: "indef.nom", root: "ع ق ل", gloss: "wise" }
          ]
        },
        {
          id: "qr2-37-004",
          ar: "ثِيَابُهُ مُتَوَاضِعَةٌ،",
          en: "his clothes are modest,",
          tokens: [
            { surface: "ثِيَابُهُ", lemma: "ثياب", pos: "noun", features: "nom+3ms", root: "ث و ب", gloss: "his clothes" },
            { surface: "مُتَوَاضِعَةٌ", lemma: "متواضع", pos: "adj", features: "indef.nom.f", root: "و ض ع", gloss: "modest" }
          ]
        },
        {
          id: "qr2-37-005",
          ar: "وَلٰكِنَّهَا دَائِمًا نَظِيْفَةٌ مُرَتَّبَةٌ لَا تَرَىٰ فِيْهَا وَسَخًا،",
          en: "but they are always clean and tidy -- you see no dirt on them,",
          tokens: [
            { surface: "وَلٰكِنَّهَا", lemma: "لكن", pos: "conj", features: "conj+3fs", root: "", gloss: "but they" },
            { surface: "دَائِمًا", lemma: "دائما", pos: "adv", features: "acc", root: "د و م", gloss: "always" },
            { surface: "نَظِيْفَةٌ", lemma: "نظيف", pos: "adj", features: "indef.nom.f", root: "ن ظ ف", gloss: "clean" },
            { surface: "مُرَتَّبَةٌ", lemma: "مرتب", pos: "adj", features: "indef.nom.f", root: "ر ت ب", gloss: "tidy" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "تَرَىٰ", lemma: "رأى", pos: "verb", features: "impf.2ms", root: "ر أ ي", gloss: "you see" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", root: "", gloss: "on them" },
            { surface: "وَسَخًا", lemma: "وسخ-اسم", pos: "noun", features: "indef.acc", root: "و س خ", gloss: "dirt" }
          ]
        },
        {
          id: "qr2-37-006",
          ar: "يَغْسِلُهَا بِيَدِهِ كُلَّ جُمْعَةٍ،",
          en: "he washes them by hand every Friday,",
          tokens: [
            { surface: "يَغْسِلُهَا", lemma: "غسل", pos: "verb", features: "impf.3ms+3fs", root: "غ س ل", gloss: "he washes them" },
            { surface: "بِيَدِهِ", lemma: "يد", pos: "noun", features: "prep+gen+3ms", root: "ي د ي", gloss: "with his hand" },
            { surface: "كُلَّ", lemma: "كل", pos: "noun", features: "acc.constr", root: "ك ل ل", gloss: "every" },
            { surface: "جُمْعَةٍ", lemma: "جمعة", pos: "noun", features: "indef.gen", root: "ج م ع", gloss: "Friday" }
          ]
        },
        {
          id: "qr2-37-007",
          ar: "وَعِنْدَهُ إِبْرَةٌ وَخَيْطٌ،",
          en: "and he has a needle and thread,",
          tokens: [
            { surface: "وَعِنْدَهُ", lemma: "عند", pos: "prep", features: "conj+prep+3ms", root: "", gloss: "and he has" },
            { surface: "إِبْرَةٌ", lemma: "إبرة", pos: "noun", features: "indef.nom", root: "أ ب ر", gloss: "a needle" },
            { surface: "وَخَيْطٌ", lemma: "خيط", pos: "noun", features: "conj+indef.nom", root: "خ ي ط", gloss: "and thread" }
          ]
        },
        {
          id: "qr2-37-008",
          ar: "فَإِذَا تَخَرَّقَ ثَوْبٌ خَاطَهُ بِالْإِبْرَةِ أَوْ رَقَعَهُ بِنَفْسِهِ.",
          en: "so if a garment tears he sews it with the needle or patches it himself.",
          tokens: [
            { surface: "فَإِذَا", lemma: "إذا", pos: "part", features: "conj+part", root: "", gloss: "so if" },
            { surface: "تَخَرَّقَ", lemma: "تخرق", pos: "verb", features: "perf.3ms", root: "خ ر ق", gloss: "tears" },
            { surface: "ثَوْبٌ", lemma: "ثوب", pos: "noun", features: "indef.nom", root: "ث و ب", gloss: "a garment" },
            { surface: "خَاطَهُ", lemma: "خاط", pos: "verb", features: "perf.3ms+3ms", root: "خ ي ط", gloss: "he sews it" },
            { surface: "بِالْإِبْرَةِ", lemma: "إبرة", pos: "noun", features: "prep+def.gen", root: "أ ب ر", gloss: "with the needle" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "رَقَعَهُ", lemma: "رقع", pos: "verb", features: "perf.3ms+3ms", root: "ر ق ع", gloss: "patches it" },
            { surface: "بِنَفْسِهِ", lemma: "نفس", pos: "noun", features: "prep+gen+3ms", root: "ن ف س", gloss: "himself" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا يَفْعَلُ طَاهِرٌ إِذَا تَخَرَّقَ ثَوْبُهُ؟",
          options: ["يَخِيْطُهُ أَوْ يَرْقَعُهُ بِنَفْسِهِ", "يَشْتَرِيْ ثَوْبًا جَدِيْدًا", "يَتْرُكُهُ مَخْرُوْقًا"],
          answer: 0,
          qEn: "What does Tahir do if his garment tears?",
          optionsEn: ["He sews or patches it himself", "He buys a new garment", "He leaves it torn"]
        }
      ]
    },
    {
      en: "He is not ashamed to go out in a patched garment, but he is ashamed to go out in a dirty garment. His friends never see him in dirty clothes, so they suppose he is rich and has many clothes -- yet he owns only four outfits.",
      sentences: [
        {
          id: "qr2-37-009",
          ar: "وَلَا يَخْجَلُ إِذَا خَرَجَ فِيْ ثَوْبٍ مَرْقُوْعٍ،",
          en: "He is not ashamed to go out in a patched garment,",
          tokens: [
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَخْجَلُ", lemma: "خجل", pos: "verb", features: "impf.3ms", root: "خ ج ل", gloss: "he is ashamed" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", features: "part", root: "", gloss: "if" },
            { surface: "خَرَجَ", lemma: "خرج", pos: "verb", features: "perf.3ms", root: "خ ر ج", gloss: "he goes out" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "ثَوْبٍ", lemma: "ثوب", pos: "noun", features: "indef.gen", root: "ث و ب", gloss: "a garment" },
            { surface: "مَرْقُوْعٍ", lemma: "مرقوع", pos: "adj", features: "indef.gen", root: "ر ق ع", gloss: "patched" }
          ]
        },
        {
          id: "qr2-37-010",
          ar: "وَلٰكِنَّهُ يَخْجَلُ إِذَا خَرَجَ فِيْ ثَوْبٍ وَسِخٍ،",
          en: "but he is ashamed to go out in a dirty garment,",
          tokens: [
            { surface: "وَلٰكِنَّهُ", lemma: "لكن", pos: "conj", features: "conj+3ms", root: "", gloss: "but he" },
            { surface: "يَخْجَلُ", lemma: "خجل", pos: "verb", features: "impf.3ms", root: "خ ج ل", gloss: "is ashamed" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", features: "part", root: "", gloss: "if" },
            { surface: "خَرَجَ", lemma: "خرج", pos: "verb", features: "perf.3ms", root: "خ ر ج", gloss: "he goes out" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "ثَوْبٍ", lemma: "ثوب", pos: "noun", features: "indef.gen", root: "ث و ب", gloss: "a garment" },
            { surface: "وَسِخٍ", lemma: "وسخ", pos: "adj", features: "indef.gen", root: "و س خ", gloss: "dirty" }
          ]
        },
        {
          id: "qr2-37-011",
          ar: "وَمَا رَآهُ أَصْدِقَاؤُهُ فِيْ ثِيَابٍ وَسِخَةٍ أَبَدًا،",
          en: "His friends never see him in dirty clothes,",
          tokens: [
            { surface: "وَمَا", lemma: "ما", pos: "part", features: "conj+neg", root: "", gloss: "and never" },
            { surface: "رَآهُ", lemma: "رأى", pos: "verb", features: "perf.3ms+3ms", root: "ر أ ي", gloss: "saw him" },
            { surface: "أَصْدِقَاؤُهُ", lemma: "صديق", pos: "noun", features: "pl.nom+3ms", root: "ص د ق", gloss: "his friends" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "ثِيَابٍ", lemma: "ثياب", pos: "noun", features: "indef.gen", root: "ث و ب", gloss: "clothes" },
            { surface: "وَسِخَةٍ", lemma: "وسخ", pos: "adj", features: "indef.gen.f", root: "و س خ", gloss: "dirty" },
            { surface: "أَبَدًا", lemma: "أبدا", pos: "adv", features: "acc", root: "أ ب د", gloss: "ever" }
          ]
        },
        {
          id: "qr2-37-012",
          ar: "فَيَحْسَبُوْنَ أَنَّهُ غَنِيٌّ وَعِنْدَهُ ثِيَابٌ كَثِيْرَةٌ،",
          en: "so they suppose he is rich and has many clothes,",
          tokens: [
            { surface: "فَيَحْسَبُوْنَ", lemma: "حسب", pos: "verb", features: "conj+impf.3mp", root: "ح س ب", gloss: "so they think" },
            { surface: "أَنَّهُ", lemma: "أن", pos: "part", features: "part+3ms", root: "", gloss: "that he" },
            { surface: "غَنِيٌّ", lemma: "غني", pos: "adj", features: "indef.nom", root: "غ ن ي", gloss: "rich" },
            { surface: "وَعِنْدَهُ", lemma: "عند", pos: "prep", features: "conj+prep+3ms", root: "", gloss: "and he has" },
            { surface: "ثِيَابٌ", lemma: "ثياب", pos: "noun", features: "indef.nom", root: "ث و ب", gloss: "clothes" },
            { surface: "كَثِيْرَةٌ", lemma: "كثير", pos: "adj", features: "indef.nom.f", root: "ك ث ر", gloss: "many" }
          ]
        },
        {
          id: "qr2-37-013",
          ar: "وَلَا يَمْلِكُ إِلَّا أَرْبَعَ بِذْلَاتٍ.",
          en: "yet he owns only four outfits.",
          tokens: [
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَمْلِكُ", lemma: "ملك", pos: "verb", features: "impf.3ms", root: "م ل ك", gloss: "he owns" },
            { surface: "إِلَّا", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except" },
            { surface: "أَرْبَعَ", lemma: "أربع", pos: "num", features: "acc.constr", root: "ر ب ع", gloss: "four" },
            { surface: "بِذْلَاتٍ", lemma: "بذلة", pos: "noun", features: "pl.indef.gen", root: "ب ذ ل", gloss: "outfits" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا يَحْسَبُ أَصْدِقَاءُ طَاهِرٍ أَنَّهُ غَنِيٌّ؟",
          options: ["لِأَنَّهُمْ لَا يَرَوْنَهُ فِيْ ثِيَابٍ وَسِخَةٍ أَبَدًا", "لِأَنَّ أَبَاهُ غَنِيٌّ", "لِأَنَّهُ يَمْلِكُ عَشْرَ بِذْلَاتٍ"],
          answer: 0,
          qEn: "Why do Tahir's friends think he is rich?",
          optionsEn: ["Because they never see him in dirty clothes", "Because his father is rich", "Because he owns ten outfits"]
        }
      ]
    },
    {
      en: "If you enter his room, you will see it clean and organized, and you will see everything in its place, so his time is not wasted searching for and seeking out things, and if he enters in the dark he is able to take what he wants because it is in its place.",
      sentences: [
        {
          id: "qr2-37-014",
          ar: "وَإِذَا دَخَلْتَ فِيْ حُجْرَتِهِ رَأَيْتَهَا نَظِيْفَةً مُنْتَظَمَةً،",
          en: "If you enter his room, you will see it clean and organized,",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "part", features: "conj+part", root: "", gloss: "and if" },
            { surface: "دَخَلْتَ", lemma: "دخل", pos: "verb", features: "perf.2ms", root: "د خ ل", gloss: "you enter" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "حُجْرَتِهِ", lemma: "حجرة", pos: "noun", features: "gen+3ms", root: "ح ج ر", gloss: "his room" },
            { surface: "رَأَيْتَهَا", lemma: "رأى", pos: "verb", features: "perf.2ms+3fs", root: "ر أ ي", gloss: "you see it" },
            { surface: "نَظِيْفَةً", lemma: "نظيف", pos: "adj", features: "indef.acc.f", root: "ن ظ ف", gloss: "clean" },
            { surface: "مُنْتَظَمَةً", lemma: "منتظم", pos: "adj", features: "indef.acc.f", root: "ن ظ م", gloss: "organized" }
          ]
        },
        {
          id: "qr2-37-015",
          ar: "وَرَأَيْتَ كُلَّ شَيْءٍ فِيْ مَحَلِّهِ،",
          en: "and you will see everything in its place,",
          tokens: [
            { surface: "وَرَأَيْتَ", lemma: "رأى", pos: "verb", features: "conj+perf.2ms", root: "ر أ ي", gloss: "and you see" },
            { surface: "كُلَّ", lemma: "كل", pos: "noun", features: "acc.constr", root: "ك ل ل", gloss: "every" },
            { surface: "شَيْءٍ", lemma: "شيء", pos: "noun", features: "indef.gen", root: "ش ي أ", gloss: "thing" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "مَحَلِّهِ", lemma: "محل", pos: "noun", features: "gen+3ms", root: "ح ل ل", gloss: "its place" }
          ]
        },
        {
          id: "qr2-37-016",
          ar: "فَلَا يَضِيْعُ وَقْتُهُ فِيْ تَفَقُّدِ الْأَشْيَاءِ وَالْتِمَاسِهَا،",
          en: "so his time is not wasted searching for and seeking out things,",
          tokens: [
            { surface: "فَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "so not" },
            { surface: "يَضِيْعُ", lemma: "ضاع", pos: "verb", features: "impf.3ms", root: "ض ي ع", gloss: "is wasted" },
            { surface: "وَقْتُهُ", lemma: "وقت", pos: "noun", features: "nom+3ms", root: "و ق ت", gloss: "his time" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "تَفَقُّدِ", lemma: "تفقد", pos: "noun", features: "gen.constr", root: "ف ق د", gloss: "searching for" },
            { surface: "الْأَشْيَاءِ", lemma: "أشياء", pos: "noun", features: "def.gen", root: "ش ي أ", gloss: "the things" },
            { surface: "وَالْتِمَاسِهَا", lemma: "التماس", pos: "noun", features: "conj+gen+3fs", root: "ل م س", gloss: "and seeking them" }
          ]
        },
        {
          id: "qr2-37-017",
          ar: "وَإِذَا دَخَلَ فِي الظَّلَامِ قَدَرَ عَلَىٰ أَنْ يَأْخُذَ مَا يُرِيْدُهُ لِأَنَّهُ فِيْ مَحَلِّهِ.",
          en: "and if he enters in the dark he is able to take what he wants because it is in its place.",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "part", features: "conj+part", root: "", gloss: "and if" },
            { surface: "دَخَلَ", lemma: "دخل", pos: "verb", features: "perf.3ms", root: "د خ ل", gloss: "he enters" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الظَّلَامِ", lemma: "ظلام", pos: "noun", features: "def.gen", root: "ظ ل م", gloss: "the darkness" },
            { surface: "قَدَرَ", lemma: "قدر", pos: "verb", features: "perf.3ms", root: "ق د ر", gloss: "he is able" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "يَأْخُذَ", lemma: "أخذ", pos: "verb", features: "subj.3ms", root: "أ خ ذ", gloss: "take" },
            { surface: "مَا", lemma: "ما-موصول", pos: "rel", features: "rel", root: "", gloss: "what" },
            { surface: "يُرِيْدُهُ", lemma: "أراد", pos: "verb", features: "impf.3ms+3ms", root: "ر و د", gloss: "he wants" },
            { surface: "لِأَنَّهُ", lemma: "لأن", pos: "conj", features: "conj+3ms", root: "", gloss: "because it" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "مَحَلِّهِ", lemma: "محل", pos: "noun", features: "gen+3ms", root: "ح ل ل", gloss: "its place" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا لَا يَضِيْعُ وَقْتُ طَاهِرٍ فِيْ تَفَقُّدِ الْأَشْيَاءِ؟",
          options: ["لِأَنَّ كُلَّ شَيْءٍ فِيْ مَحَلِّهِ", "لِأَنَّهُ لَا يَمْلِكُ أَشْيَاءَ كَثِيْرَةً", "لِأَنَّ أُمَّهُ تُرَتِّبُ حُجْرَتَهُ"],
          answer: 0,
          qEn: "Why doesn't Tahir waste time searching for things?",
          optionsEn: ["Because everything is in its place", "Because he doesn't own many things", "Because his mother tidies his room"]
        }
      ]
    },
    {
      en: "His books are always in order, and they are clean -- you see no dust or soil on them, and you see on them no trace of oil or a handprint, and no stray writing or scribble, as if he bought them today, and he writes his name only in one place, in good handwriting.",
      sentences: [
        {
          id: "qr2-37-018",
          ar: "وَكُتُبُهُ فِيْ نِظَامٍ دَائِمًا،",
          en: "His books are always in order,",
          tokens: [
            { surface: "وَكُتُبُهُ", lemma: "كتب", pos: "noun", features: "conj+nom+3ms", root: "ك ت ب", gloss: "and his books" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "نِظَامٍ", lemma: "نظام", pos: "noun", features: "indef.gen", root: "ن ظ م", gloss: "order" },
            { surface: "دَائِمًا", lemma: "دائما", pos: "adv", features: "acc", root: "د و م", gloss: "always" }
          ]
        },
        {
          id: "qr2-37-019",
          ar: "وَهِيَ نَظِيْفَةٌ لَا تَرَىٰ عَلَيْهَا غُبَارًا وَلَا تُرَابًا،",
          en: "and they are clean -- you see no dust or soil on them,",
          tokens: [
            { surface: "وَهِيَ", lemma: "هي", pos: "noun", features: "conj+nom", root: "", gloss: "and they" },
            { surface: "نَظِيْفَةٌ", lemma: "نظيف", pos: "adj", features: "indef.nom.f", root: "ن ظ ف", gloss: "clean" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "تَرَىٰ", lemma: "رأى", pos: "verb", features: "impf.2ms", root: "ر أ ي", gloss: "you see" },
            { surface: "عَلَيْهَا", lemma: "على", pos: "prep", features: "prep+3fs", root: "", gloss: "on them" },
            { surface: "غُبَارًا", lemma: "غبار", pos: "noun", features: "indef.acc", root: "غ ب ر", gloss: "dust" },
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and no" },
            { surface: "تُرَابًا", lemma: "تراب", pos: "noun", features: "indef.acc", root: "ت ر ب", gloss: "soil" }
          ]
        },
        {
          id: "qr2-37-020",
          ar: "وَلَا تَرَىٰ فِيْهَا أَثَرَ دُهْنٍ وَمِسْحَةَ يَدٍ،",
          en: "and you see on them no trace of oil or a handprint,",
          tokens: [
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "تَرَىٰ", lemma: "رأى", pos: "verb", features: "impf.2ms", root: "ر أ ي", gloss: "you see" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", root: "", gloss: "on them" },
            { surface: "أَثَرَ", lemma: "أثر", pos: "noun", features: "acc.constr", root: "أ ث ر", gloss: "a trace of" },
            { surface: "دُهْنٍ", lemma: "دهن", pos: "noun", features: "indef.gen", root: "د ه ن", gloss: "oil" },
            { surface: "وَمِسْحَةَ", lemma: "مسحة", pos: "noun", features: "conj+acc.constr", root: "م س ح", gloss: "and a smudge of" },
            { surface: "يَدٍ", lemma: "يد", pos: "noun", features: "indef.gen", root: "ي د ي", gloss: "a hand" }
          ]
        },
        {
          id: "qr2-37-021",
          ar: "وَلَا كِتَابَةً وَتَمْرِيْنًا، كَأَنَّهُ اشْتَرَاهَا الْيَوْمَ،",
          en: "and no stray writing or scribble, as if he bought them today,",
          tokens: [
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and no" },
            { surface: "كِتَابَةً", lemma: "كتابة", pos: "noun", features: "indef.acc", root: "ك ت ب", gloss: "writing" },
            { surface: "وَتَمْرِيْنًا", lemma: "تمرين", pos: "noun", features: "conj+indef.acc", root: "م ر ن", gloss: "or an exercise" },
            { surface: "كَأَنَّهُ", lemma: "كأن", pos: "part", features: "part+3ms", root: "", gloss: "as if he" },
            { surface: "اشْتَرَاهَا", lemma: "اشترى", pos: "verb", features: "perf.3ms+3fs", root: "ش ر ي", gloss: "bought them" },
            { surface: "الْيَوْمَ", lemma: "يوم", pos: "noun", features: "def.acc", root: "ي و م", gloss: "today" }
          ]
        },
        {
          id: "qr2-37-022",
          ar: "وَلَا يَكْتُبُ اسْمَهُ إِلَّا فِيْ مَكَانٍ وَاحِدٍ بِخَطٍّ جَيِّدٍ.",
          en: "and he writes his name only in one place, in good handwriting.",
          tokens: [
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَكْتُبُ", lemma: "كتب-فعل", pos: "verb", features: "impf.3ms", root: "ك ت ب", gloss: "he writes" },
            { surface: "اسْمَهُ", lemma: "اسم", pos: "noun", features: "acc+3ms", root: "س م و", gloss: "his name" },
            { surface: "إِلَّا", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "مَكَانٍ", lemma: "مكان", pos: "noun", features: "indef.gen", root: "ك و ن", gloss: "a place" },
            { surface: "وَاحِدٍ", lemma: "واحد", pos: "num", features: "indef.gen", root: "و ح د", gloss: "one" },
            { surface: "بِخَطٍّ", lemma: "خط", pos: "noun", features: "prep+indef.gen", root: "خ ط ط", gloss: "in handwriting" },
            { surface: "جَيِّدٍ", lemma: "جيد", pos: "adj", features: "indef.gen", root: "ج و د", gloss: "good" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ حَالُ كُتُبِ طَاهِرٍ؟",
          options: ["نَظِيْفَةٌ فِيْ نِظَامٍ كَأَنَّهُ اشْتَرَاهَا الْيَوْمَ", "قَدِيْمَةٌ وَمُمَزَّقَةٌ", "لَيْسَتْ لَهُ كُتُبٌ"],
          answer: 0,
          qEn: "What is the condition of Tahir's books?",
          optionsEn: ["Clean and orderly, as if bought today", "Old and torn", "He has no books"]
        }
      ]
    },
    {
      en: "When Tahir gets up in the morning he performs ablution for the dawn prayer and uses a siwak, and cleans his teeth.",
      sentences: [
        {
          id: "qr2-37-023",
          ar: "وَإِذَا قَامَ طَاهِرٌ فِي الصَّبَاحِ تَوَضَّأَ لِصَلَاةِ الصُّبْحِ وَاسْتَاكَ،",
          en: "When Tahir gets up in the morning he performs ablution for the dawn prayer and uses a siwak,",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "part", features: "conj+part", root: "", gloss: "and when" },
            { surface: "قَامَ", lemma: "قام", pos: "verb", features: "perf.3ms", root: "ق و م", gloss: "gets up" },
            { surface: "طَاهِرٌ", lemma: "طاهر", pos: "proper", features: "nom", root: "", gloss: "Tahir" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الصَّبَاحِ", lemma: "صباح", pos: "noun", features: "def.gen", root: "ص ب ح", gloss: "the morning" },
            { surface: "تَوَضَّأَ", lemma: "توضأ", pos: "verb", features: "perf.3ms", root: "و ض أ", gloss: "performs ablution" },
            { surface: "لِصَلَاةِ", lemma: "صلاة", pos: "noun", features: "prep+gen.constr", root: "ص ل و", gloss: "for the prayer of" },
            { surface: "الصُّبْحِ", lemma: "صبح", pos: "noun", features: "def.gen", root: "ص ب ح", gloss: "the dawn" },
            { surface: "وَاسْتَاكَ", lemma: "استاك", pos: "verb", features: "conj+perf.3ms", root: "س و ك", gloss: "and brushes his teeth" }
          ]
        },
        {
          id: "qr2-37-024",
          ar: "وَنَظَّفَ أَسْنَانَهُ.",
          en: "and cleans his teeth.",
          tokens: [
            { surface: "وَنَظَّفَ", lemma: "نظف", pos: "verb", features: "conj+perf.3ms", root: "ن ظ ف", gloss: "and cleans" },
            { surface: "أَسْنَانَهُ", lemma: "سن", pos: "noun", features: "pl.acc+3ms", root: "س ن ن", gloss: "his teeth" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا يَفْعَلُ طَاهِرٌ عِنْدَمَا يَقُوْمُ فِي الصَّبَاحِ؟",
          options: ["يَتَوَضَّأُ وَيَسْتَاكُ وَيُنَظِّفُ أَسْنَانَهُ", "يَذْهَبُ إِلَىٰ الْمَدْرَسَةِ مُبَاشَرَةً", "يَنَامُ مَرَّةً أُخْرَىٰ"],
          answer: 0,
          qEn: "What does Tahir do when he gets up in the morning?",
          optionsEn: ["He performs ablution, uses a siwak, and cleans his teeth", "He goes straight to school", "He goes back to sleep"]
        }
      ]
    },
    {
      en: "Tahir bathes every day in summer, and more than once a week in winter -- that is why you see him rarely get sick, and he is strong and energetic.",
      sentences: [
        {
          id: "qr2-37-025",
          ar: "وَيَغْتَسِلُ طَاهِرٌ كُلَّ يَوْمٍ فِي الصَّيْفِ،",
          en: "Tahir bathes every day in summer,",
          tokens: [
            { surface: "وَيَغْتَسِلُ", lemma: "اغتسل", pos: "verb", features: "conj+impf.3ms", root: "غ س ل", gloss: "and bathes" },
            { surface: "طَاهِرٌ", lemma: "طاهر", pos: "proper", features: "nom", root: "", gloss: "Tahir" },
            { surface: "كُلَّ", lemma: "كل", pos: "noun", features: "acc.constr", root: "ك ل ل", gloss: "every" },
            { surface: "يَوْمٍ", lemma: "يوم", pos: "noun", features: "indef.gen", root: "ي و م", gloss: "day" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الصَّيْفِ", lemma: "صيف", pos: "noun", features: "def.gen", root: "ص ي ف", gloss: "the summer" }
          ]
        },
        {
          id: "qr2-37-026",
          ar: "وَأَكْثَرَ مِنْ مَرَّةٍ فِيْ أُسْبُوْعٍ فِي الشِّتَاءِ،",
          en: "and more than once a week in winter,",
          tokens: [
            { surface: "وَأَكْثَرَ", lemma: "كثير", pos: "adj", features: "conj+acc", root: "ك ث ر", gloss: "and more" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "than" },
            { surface: "مَرَّةٍ", lemma: "مرة", pos: "noun", features: "indef.gen", root: "م ر ر", gloss: "once" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "أُسْبُوْعٍ", lemma: "أسبوع", pos: "noun", features: "indef.gen", root: "س ب ع", gloss: "a week" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الشِّتَاءِ", lemma: "شتاء", pos: "noun", features: "def.gen", root: "ش ت و", gloss: "the winter" }
          ]
        },
        {
          id: "qr2-37-027",
          ar: "لِذٰلِكَ تَرَاهُ يَمْرَضُ قَلِيْلًا،",
          en: "that is why you see him rarely get sick,",
          tokens: [
            { surface: "لِذٰلِكَ", lemma: "ذلك", pos: "dem", features: "prep+dem", root: "", gloss: "therefore" },
            { surface: "تَرَاهُ", lemma: "رأى", pos: "verb", features: "impf.2ms+3ms", root: "ر أ ي", gloss: "you see him" },
            { surface: "يَمْرَضُ", lemma: "مرض-فعل", pos: "verb", features: "impf.3ms", root: "م ر ض", gloss: "gets sick" },
            { surface: "قَلِيْلًا", lemma: "قليل", pos: "adv", features: "acc", root: "ق ل ل", gloss: "little" }
          ]
        },
        {
          id: "qr2-37-028",
          ar: "وَهُوَ قَوِيٌّ نَشِيْطٌ.",
          en: "and he is strong and energetic.",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+nom", root: "", gloss: "and he" },
            { surface: "قَوِيٌّ", lemma: "قوي", pos: "adj", features: "indef.nom", root: "ق و ي", gloss: "strong" },
            { surface: "نَشِيْطٌ", lemma: "نشيط", pos: "adj", features: "indef.nom", root: "ن ش ط", gloss: "energetic" }
          ]
        }
      ],
      checks: [
        {
          q: "كَمْ مَرَّةً يَغْتَسِلُ طَاهِرٌ فِي الصَّيْفِ؟",
          options: ["كُلَّ يَوْمٍ", "مَرَّةً فِي الشَّهْرِ", "لَا يَغْتَسِلُ أَبَدًا"],
          answer: 0,
          qEn: "How often does Tahir bathe in summer?",
          optionsEn: ["Every day", "Once a month", "He never bathes"]
        }
      ]
    },
    {
      en: "In Tahir's class is a rich boy named Shahid, and he is the opposite of Tahir in cleanliness and order: his clothes are expensive and beautiful, but they are usually dirty and filthy, and he changes his clothes quickly, but he dirties them quickly too.",
      sentences: [
        {
          id: "qr2-37-029",
          ar: "وَفِيْ فَصْلِ طَاهِرٍ وَلَدٌ غَنِيٌّ اسْمُهُ شَاهِدٌ،",
          en: "In Tahir's class is a rich boy named Shahid,",
          tokens: [
            { surface: "وَفِيْ", lemma: "في", pos: "prep", features: "conj+prep", root: "", gloss: "and in" },
            { surface: "فَصْلِ", lemma: "فصل", pos: "noun", features: "gen.constr", root: "ف ص ل", gloss: "the classroom of" },
            { surface: "طَاهِرٍ", lemma: "طاهر", pos: "proper", features: "gen", root: "", gloss: "Tahir" },
            { surface: "وَلَدٌ", lemma: "ولد", pos: "noun", features: "indef.nom", root: "و ل د", gloss: "a boy" },
            { surface: "غَنِيٌّ", lemma: "غني", pos: "adj", features: "indef.nom", root: "غ ن ي", gloss: "rich" },
            { surface: "اسْمُهُ", lemma: "اسم", pos: "noun", features: "nom+3ms", root: "س م و", gloss: "his name" },
            { surface: "شَاهِدٌ", lemma: "شاهد", pos: "proper", features: "nom", root: "", gloss: "Shahid" }
          ]
        },
        {
          id: "qr2-37-030",
          ar: "وَهُوَ ضِدُّ طَاهِرٍ فِي النَّظَافَةِ وَالنِّظَامِ،",
          en: "and he is the opposite of Tahir in cleanliness and order,",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+nom", root: "", gloss: "and he" },
            { surface: "ضِدُّ", lemma: "ضد", pos: "noun", features: "nom.constr", root: "ض د د", gloss: "the opposite of" },
            { surface: "طَاهِرٍ", lemma: "طاهر", pos: "proper", features: "gen", root: "", gloss: "Tahir" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "النَّظَافَةِ", lemma: "نظافة", pos: "noun", features: "def.gen", root: "ن ظ ف", gloss: "cleanliness" },
            { surface: "وَالنِّظَامِ", lemma: "نظام", pos: "noun", features: "conj+def.gen", root: "ن ظ م", gloss: "and order" }
          ]
        },
        {
          id: "qr2-37-031",
          ar: "فَثِيَابُهُ غَالِيَةٌ جَمِيْلَةٌ وَلٰكِنَّهَا فِي الْغَالِبِ وَسِخَةٌ دَنِسَةٌ،",
          en: "his clothes are expensive and beautiful, but they are usually dirty and filthy,",
          tokens: [
            { surface: "فَثِيَابُهُ", lemma: "ثياب", pos: "noun", features: "conj+nom+3ms", root: "ث و ب", gloss: "so his clothes" },
            { surface: "غَالِيَةٌ", lemma: "غالي", pos: "adj", features: "indef.nom.f", root: "غ ل و", gloss: "expensive" },
            { surface: "جَمِيْلَةٌ", lemma: "جميل", pos: "adj", features: "indef.nom.f", root: "ج م ل", gloss: "beautiful" },
            { surface: "وَلٰكِنَّهَا", lemma: "لكن", pos: "conj", features: "conj+3fs", root: "", gloss: "but they" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْغَالِبِ", lemma: "غالب", pos: "noun", features: "def.gen", root: "غ ل ب", gloss: "usually" },
            { surface: "وَسِخَةٌ", lemma: "وسخ", pos: "adj", features: "indef.nom.f", root: "و س خ", gloss: "dirty" },
            { surface: "دَنِسَةٌ", lemma: "دنس", pos: "adj", features: "indef.nom.f", root: "د ن س", gloss: "filthy" }
          ]
        },
        {
          id: "qr2-37-032",
          ar: "وَهُوَ يُغَيِّرُ مَلَابِسَهُ سَرِيْعًا،",
          en: "and he changes his clothes quickly,",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+nom", root: "", gloss: "and he" },
            { surface: "يُغَيِّرُ", lemma: "غير", pos: "verb", features: "impf.3ms", root: "غ ي ر", gloss: "changes" },
            { surface: "مَلَابِسَهُ", lemma: "ملابس", pos: "noun", features: "pl.acc+3ms", root: "ل ب س", gloss: "his clothes" },
            { surface: "سَرِيْعًا", lemma: "سريع", pos: "adj", features: "acc", root: "س ر ع", gloss: "quickly" }
          ]
        },
        {
          id: "qr2-37-033",
          ar: "وَلٰكِنَّهُ يُوَسِّخُهَا سَرِيْعًا.",
          en: "but he dirties them quickly too.",
          tokens: [
            { surface: "وَلٰكِنَّهُ", lemma: "لكن", pos: "conj", features: "conj+3ms", root: "", gloss: "but he" },
            { surface: "يُوَسِّخُهَا", lemma: "وسخ-فعل", pos: "verb", features: "impf.3ms+3fs", root: "و س خ", gloss: "dirties them" },
            { surface: "سَرِيْعًا", lemma: "سريع", pos: "adj", features: "acc", root: "س ر ع", gloss: "quickly" }
          ]
        }
      ],
      checks: [
        {
          q: "مَنْ شَاهِدٌ؟",
          options: ["وَلَدٌ غَنِيٌّ فِيْ فَصْلِ طَاهِرٍ ضِدُّهُ فِي النَّظَافَةِ", "أَخُو طَاهِرٍ", "مُدَرِّسُ الْفَصْلِ"],
          answer: 0,
          qEn: "Who is Shahid?",
          optionsEn: ["A rich boy in Tahir's class, his opposite in cleanliness", "Tahir's brother", "The classroom teacher"]
        }
      ]
    },
    {
      en: "Likewise his books are always -- their cover is split, and their paper is torn, as if a child played with them, or the farmer's plowshare walked over them, or a vehicle trampled them.",
      sentences: [
        {
          id: "qr2-37-034",
          ar: "وَكَذٰلِكَ كُتُبُهُ دَائِمًا فَجِلْدُهَا مَشْقُوْقٌ،",
          en: "Likewise his books are always -- their cover is split,",
          tokens: [
            { surface: "وَكَذٰلِكَ", lemma: "كذلك", pos: "adv", features: "conj+adv", root: "", gloss: "and likewise" },
            { surface: "كُتُبُهُ", lemma: "كتب", pos: "noun", features: "nom+3ms", root: "ك ت ب", gloss: "his books" },
            { surface: "دَائِمًا", lemma: "دائما", pos: "adv", features: "acc", root: "د و م", gloss: "always" },
            { surface: "فَجِلْدُهَا", lemma: "جلد", pos: "noun", features: "conj+nom+3fs", root: "ج ل د", gloss: "their cover" },
            { surface: "مَشْقُوْقٌ", lemma: "مشقوق", pos: "adj", features: "indef.nom", root: "ش ق ق", gloss: "split" }
          ]
        },
        {
          id: "qr2-37-035",
          ar: "وَوَرَقُهَا مَخْرُوْقٌ،",
          en: "and their paper is torn,",
          tokens: [
            { surface: "وَوَرَقُهَا", lemma: "ورق", pos: "noun", features: "conj+nom+3fs", root: "و ر ق", gloss: "and their paper" },
            { surface: "مَخْرُوْقٌ", lemma: "مخروق", pos: "adj", features: "indef.nom", root: "خ ر ق", gloss: "torn" }
          ]
        },
        {
          id: "qr2-37-036",
          ar: "كَأَنَّ طِفْلًا عَبَثَ بِهَا أَوْ مَشَتْ عَلَيْهَا سِكَّةُ الْفَلَّاحِ أَوْ دَاسَتْهَا مَرْكَبَةٌ.",
          en: "as if a child played with them, or the farmer's plowshare walked over them, or a vehicle trampled them.",
          tokens: [
            { surface: "كَأَنَّ", lemma: "كأن", pos: "part", features: "part", root: "", gloss: "as if" },
            { surface: "طِفْلًا", lemma: "طفل", pos: "noun", features: "indef.acc", root: "ط ف ل", gloss: "a child" },
            { surface: "عَبَثَ", lemma: "عبث", pos: "verb", features: "perf.3ms", root: "ع ب ث", gloss: "played around" },
            { surface: "بِهَا", lemma: "ب", pos: "prep", features: "prep+3fs", root: "", gloss: "with them" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "مَشَتْ", lemma: "مشى", pos: "verb", features: "perf.3fs", root: "م ش ي", gloss: "walked" },
            { surface: "عَلَيْهَا", lemma: "على", pos: "prep", features: "prep+3fs", root: "", gloss: "on them" },
            { surface: "سِكَّةُ", lemma: "سكة", pos: "noun", features: "nom.constr", root: "س ك ك", gloss: "the plowshare of" },
            { surface: "الْفَلَّاحِ", lemma: "فلاح", pos: "noun", features: "def.gen", root: "ف ل ح", gloss: "the farmer" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "دَاسَتْهَا", lemma: "داس", pos: "verb", features: "perf.3fs+3fs", root: "د و س", gloss: "trampled them" },
            { surface: "مَرْكَبَةٌ", lemma: "مركبة", pos: "noun", features: "indef.nom", root: "ر ك ب", gloss: "a vehicle" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ حَالُ كُتُبِ شَاهِدٍ؟",
          options: ["جِلْدُهَا مَشْقُوْقٌ وَوَرَقُهَا مَخْرُوْقٌ", "نَظِيْفَةٌ وَمُرَتَّبَةٌ", "جَدِيْدَةٌ لَمْ يَسْتَعْمِلْهَا"],
          answer: 0,
          qEn: "What condition are Shahid's books in?",
          optionsEn: ["Their cover is split and their paper is torn", "Clean and orderly", "New, never used"]
        }
      ]
    },
    {
      en: "His books and notebooks are an exhibition, or a museum: you see in them drawings and pictures, and scribbles and exercises, and mathematical figures and geography maps.",
      sentences: [
        {
          id: "qr2-37-037",
          ar: "وَكُتُبُهُ وَدَفَاتِرُهُ مُعْرِضٌ أَوْ مُتْحَفٌ،",
          en: "His books and notebooks are an exhibition, or a museum,",
          tokens: [
            { surface: "وَكُتُبُهُ", lemma: "كتب", pos: "noun", features: "conj+nom+3ms", root: "ك ت ب", gloss: "and his books" },
            { surface: "وَدَفَاتِرُهُ", lemma: "دفتر", pos: "noun", features: "conj+pl.nom+3ms", root: "د ف ت ر", gloss: "and his notebooks" },
            { surface: "مُعْرِضٌ", lemma: "معرض", pos: "noun", features: "indef.nom", root: "ع ر ض", gloss: "an exhibition" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "مُتْحَفٌ", lemma: "متحف", pos: "noun", features: "indef.nom", root: "ت ح ف", gloss: "a museum" }
          ]
        },
        {
          id: "qr2-37-038",
          ar: "تَرَىٰ فِيْهَا رُسُوْمًا وَصُوَرًا،",
          en: "you see in them drawings and pictures,",
          tokens: [
            { surface: "تَرَىٰ", lemma: "رأى", pos: "verb", features: "impf.2ms", root: "ر أ ي", gloss: "you see" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", root: "", gloss: "in them" },
            { surface: "رُسُوْمًا", lemma: "رسم", pos: "noun", features: "pl.indef.acc", root: "ر س م", gloss: "drawings" },
            { surface: "وَصُوَرًا", lemma: "صورة", pos: "noun", features: "conj+pl.indef.acc", root: "ص و ر", gloss: "and pictures" }
          ]
        },
        {
          id: "qr2-37-039",
          ar: "وَتَوْقِيْعَاتٍ وَتَمْرِيْنَاتٍ،",
          en: "and scribbles and exercises,",
          tokens: [
            { surface: "وَتَوْقِيْعَاتٍ", lemma: "توقيع", pos: "noun", features: "conj+pl.indef.acc", root: "و ق ع", gloss: "and scribbles" },
            { surface: "وَتَمْرِيْنَاتٍ", lemma: "تمرين", pos: "noun", features: "conj+pl.indef.acc", root: "م ر ن", gloss: "and exercises" }
          ]
        },
        {
          id: "qr2-37-040",
          ar: "وَأَشْكَالًا رِيَاضِيَّةً وَخَرَائِطَ جُغْرَافِيَّةً.",
          en: "and mathematical figures and geography maps.",
          tokens: [
            { surface: "وَأَشْكَالًا", lemma: "شكل", pos: "noun", features: "conj+pl.indef.acc", root: "ش ك ل", gloss: "and shapes" },
            { surface: "رِيَاضِيَّةً", lemma: "رياضي", pos: "adj", features: "indef.acc.f", root: "ر و ض", gloss: "mathematical" },
            { surface: "وَخَرَائِطَ", lemma: "خريطة", pos: "noun", features: "conj+pl.indef.acc", root: "خ ر ط", gloss: "and maps" },
            { surface: "جُغْرَافِيَّةً", lemma: "جغرافي", pos: "adj", features: "indef.acc.f", root: "", gloss: "geographic" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا تَرَىٰ فِيْ كُتُبِ شَاهِدٍ وَدَفَاتِرِهِ؟",
          options: ["رُسُوْمًا وَصُوَرًا وَتَوْقِيْعَاتٍ وَأَشْكَالًا رِيَاضِيَّةً", "دُرُوْسًا مَكْتُوْبَةً بِخَطٍّ جَيِّدٍ فَقَطْ", "لَا شَيْءَ، فَهِيَ نَظِيْفَةٌ"],
          answer: 0,
          qEn: "What do you see in Shahid's books and notebooks?",
          optionsEn: ["Drawings, pictures, scribbles, and mathematical figures", "Only lessons written in good handwriting", "Nothing, since they are clean"]
        }
      ]
    },
    {
      en: "If you say to Shahid, \"Why don't you maintain cleanliness and order?\" he says, \"That wastes a lot of time, and time is precious.\"",
      sentences: [
        {
          id: "qr2-37-041",
          ar: "وَإِذَا قُلْتَ لِشَاهِدٍ: لِمَاذَا لَا تُحَافِظُ عَلَىٰ النَّظَافَةِ وَالنِّظَامِ؟",
          en: "If you say to Shahid, \"Why don't you maintain cleanliness and order?\"",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "part", features: "conj+part", root: "", gloss: "and if" },
            { surface: "قُلْتَ", lemma: "قال", pos: "verb", features: "perf.2ms", root: "ق و ل", gloss: "you say" },
            { surface: "لِشَاهِدٍ", lemma: "شاهد", pos: "proper", features: "prep+gen", root: "", gloss: "to Shahid" },
            { surface: "لِمَاذَا", lemma: "لماذا", pos: "adv", features: "adv", root: "", gloss: "why" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "تُحَافِظُ", lemma: "حافظ", pos: "verb", features: "impf.2ms", root: "ح ف ظ", gloss: "you maintain" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "النَّظَافَةِ", lemma: "نظافة", pos: "noun", features: "def.gen", root: "ن ظ ف", gloss: "cleanliness" },
            { surface: "وَالنِّظَامِ", lemma: "نظام", pos: "noun", features: "conj+def.gen", root: "ن ظ م", gloss: "and order" }
          ]
        },
        {
          id: "qr2-37-042",
          ar: "قَالَ: إِنَّهُ يَضِيْعُ فِيْ ذٰلِكَ وَقْتٌ كَثِيْرٌ،",
          en: "he says, \"That wastes a lot of time,",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "he says" },
            { surface: "إِنَّهُ", lemma: "إن", pos: "part", features: "part+3ms", root: "", gloss: "indeed it" },
            { surface: "يَضِيْعُ", lemma: "ضاع", pos: "verb", features: "impf.3ms", root: "ض ي ع", gloss: "is wasted" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "وَقْتٌ", lemma: "وقت", pos: "noun", features: "indef.nom", root: "و ق ت", gloss: "time" },
            { surface: "كَثِيْرٌ", lemma: "كثير", pos: "adj", features: "indef.nom", root: "ك ث ر", gloss: "much" }
          ]
        },
        {
          id: "qr2-37-043",
          ar: "وَالْوَقْتُ شَيْءٌ غَالٍ.",
          en: "and time is precious.\"",
          tokens: [
            { surface: "وَالْوَقْتُ", lemma: "وقت", pos: "noun", features: "conj+def.nom", root: "و ق ت", gloss: "and time" },
            { surface: "شَيْءٌ", lemma: "شيء", pos: "noun", features: "indef.nom", root: "ش ي أ", gloss: "a thing" },
            { surface: "غَالٍ", lemma: "غال", pos: "adj", features: "indef.nom", root: "غ ل و", gloss: "precious" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا لَا يُحَافِظُ شَاهِدٌ عَلَىٰ النَّظَافَةِ حَسَبَ قَوْلِهِ؟",
          options: ["لِأَنَّهَا تُضَيِّعُ وَقْتًا كَثِيْرًا وَالْوَقْتُ غَالٍ", "لِأَنَّهُ لَا يُحِبُّ الْمَاءَ", "لِأَنَّهُ مَرِيْضٌ دَائِمًا"],
          answer: 0,
          qEn: "According to Shahid, why doesn't he maintain cleanliness?",
          optionsEn: ["Because it wastes a lot of time and time is precious", "Because he doesn't like water", "Because he is always sick"]
        }
      ]
    },
    {
      en: "Yet you see him waste a long time searching for things and quickly changing clothes -- and he does not notice the irony.",
      sentences: [
        {
          id: "qr2-37-044",
          ar: "وَتَرَاهُ يُضَيِّعُ وَقْتًا طَوِيْلًا فِيْ تَفَقُّدِ الْأَشْيَاءِ وَتَغْيِيْرِ الْمَلَابِسِ بِسُرْعَةٍ،",
          en: "Yet you see him waste a long time searching for things and quickly changing clothes,",
          tokens: [
            { surface: "وَتَرَاهُ", lemma: "رأى", pos: "verb", features: "conj+impf.2ms+3ms", root: "ر أ ي", gloss: "yet you see him" },
            { surface: "يُضَيِّعُ", lemma: "ضيع", pos: "verb", features: "impf.3ms", root: "ض ي ع", gloss: "waste" },
            { surface: "وَقْتًا", lemma: "وقت", pos: "noun", features: "indef.acc", root: "و ق ت", gloss: "time" },
            { surface: "طَوِيْلًا", lemma: "طويل", pos: "adj", features: "indef.acc", root: "ط و ل", gloss: "long" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "تَفَقُّدِ", lemma: "تفقد", pos: "noun", features: "gen.constr", root: "ف ق د", gloss: "searching for" },
            { surface: "الْأَشْيَاءِ", lemma: "أشياء", pos: "noun", features: "def.gen", root: "ش ي أ", gloss: "the things" },
            { surface: "وَتَغْيِيْرِ", lemma: "تغيير", pos: "noun", features: "conj+gen.constr", root: "غ ي ر", gloss: "and changing" },
            { surface: "الْمَلَابِسِ", lemma: "ملابس", pos: "noun", features: "def.gen", root: "ل ب س", gloss: "the clothes" },
            { surface: "بِسُرْعَةٍ", lemma: "سرعة", pos: "noun", features: "prep+indef.gen", root: "س ر ع", gloss: "quickly" }
          ]
        },
        {
          id: "qr2-37-045",
          ar: "وَلَا يَفْطَنُ لِذٰلِكَ.",
          en: "and he does not notice the irony.",
          tokens: [
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَفْطَنُ", lemma: "فطن", pos: "verb", features: "impf.3ms", root: "ف ط ن", gloss: "he notices" },
            { surface: "لِذٰلِكَ", lemma: "ذلك", pos: "dem", features: "prep+dem", root: "", gloss: "that" }
          ]
        }
      ],
      checks: [
        {
          q: "هَلْ يَفْطَنُ شَاهِدٌ أَنَّهُ يُضَيِّعُ وَقْتًا طَوِيْلًا فِيْ تَفَقُّدِ الْأَشْيَاءِ؟",
          options: ["لَا، لَا يَفْطَنُ لِذٰلِكَ", "نَعَمْ، يَفْطَنُ لِذٰلِكَ دَائِمًا", "لَا يُضَيِّعُ وَقْتَهُ أَبَدًا"],
          answer: 0,
          qEn: "Does Shahid notice that he wastes a long time searching for things?",
          optionsEn: ["No, he doesn't notice that", "Yes, he always notices that", "He never wastes his time"]
        }
      ]
    }
  ]
};

// القراءة الراشدة, volume one, chapter nine -- ماذا تحب أن تكون؟.
//
// Follows the shape of chapter-01.js/chapter-02.js -- see ../CHAPTER-FORMAT.md
// for the full specification. Hand-authored directly from the scanned pages
// (qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed pages 53-56); there
// is no JSON intermediate (see PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md --
// the pipeline no longer emits JSON).
//
// This is a classroom dialogue: a teacher asks nine students in turn what
// they want to be, and a brief in-class debate breaks out between two of
// them (Abdul Rahman and Ibrahim, over whether a ship captain's job is
// dangerous) before the teacher moves things along. It extends
// chapter-04.js's two-person dialogue pattern to many speakers rather than
// forking the format -- each speaker turn is still just narrating قال +
// quoted speech, exactly as established there.
//
// Two vocabulary/grammar notes:
//  - The hadith quoted in q037 ("لا حسد إلا في اثنتين...") is the book's
//    first hadith set off with the print's own «» guillemets, rather than
//    plain quotation marks as in chapter-07.js's shahada line. No new
//    handling was needed: PUNCT_RE already stripped «» alongside ﷺ for
//    reconstruction (anticipated when that regex was first written), so
//    this tokenizes exactly like any other quoted speech. This is distinct
//    from -- and does not resolve -- the still-unexercised QASAS_AGENT_BRIEF
//    gap around Qur'anic quotations set off with ﴿ ﴾, which use different
//    punctuation and have not appeared in the book yet.
//  - علم appears twice with unrelated meanings within this chapter: the
//    noun "knowledge" (بِعِلْمِكُمْ, q032) and the verb "to teach" (وَيُعَلِّمُهَا,
//    q039, root ع ل م Form II -- spelled with a shadda, عَلَّمَ, not a true
//    homograph of the Form I noun/verb). Since they're orthographically
//    distinct (عِلْم vs عَلَّمَ) this needed no ذهب-معدن-style key suffix --
//    "علّم" is just its own ordinary dict entry, the same as any two
//    unrelated words that happen to share a root.
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch9",
  "number": 9,
  "title": {
    "ar": "مَاذَا تُحِبُّ أَنْ تَكُوْنَ؟",
    "en": "What Do You Like to Be?"
  },
  "pages": [
    53,
    54,
    55,
    56
  ],
  "register": "classroom_dialogue",
  "newWords": [
    "سائق",
    "ربان",
    "باخرة",
    "فلاح",
    "حرث",
    "مناظرة",
    "صناع",
    "مخترع",
    "جندي",
    "حسد",
    "نعمة",
    "خطر"
  ],
  "lemmas": {
    "سأل": {
      "root": "س أ ل",
      "pos": "verb",
      "gloss": "to ask",
      "content": true
    },
    "معلم": {
      "root": "ع ل م",
      "pos": "noun",
      "gloss": "teacher",
      "content": true
    },
    "تلميذ": {
      "root": "ت ل م ذ",
      "pos": "noun",
      "gloss": "student, pupil",
      "content": true
    },
    "مرة": {
      "root": "م ر ر",
      "pos": "noun",
      "gloss": "time, occasion",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "صف": {
      "root": "ص ف ف",
      "pos": "noun",
      "gloss": "row, line; classroom",
      "content": true
    },
    "واحد": {
      "root": "و ح د",
      "pos": "adj",
      "gloss": "one, single",
      "content": true
    },
    "ماذا": {
      "root": "—",
      "pos": "part",
      "gloss": "what",
      "content": false
    },
    "أحب": {
      "root": "ح ب ب",
      "pos": "verb",
      "gloss": "to like, love",
      "content": true
    },
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that",
      "content": false
    },
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "كل": {
      "root": "ك ل ل",
      "pos": "noun",
      "gloss": "each, every, all",
      "content": true
    },
    "حر": {
      "root": "ح ر ر",
      "pos": "adj",
      "gloss": "free",
      "content": true
    },
    "جواب": {
      "root": "ج و ب",
      "pos": "noun",
      "gloss": "answer, response",
      "content": true
    },
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "not; no",
      "content": false
    },
    "خاف": {
      "root": "خ و ف",
      "pos": "verb",
      "gloss": "to fear",
      "content": true
    },
    "استحى": {
      "root": "ح ي ي",
      "pos": "verb",
      "gloss": "to feel shy, be bashful",
      "content": true
    },
    "أحمد": {
      "root": "—",
      "pos": "proper",
      "gloss": "Aḥmad (a name)",
      "content": true
    },
    "أصغر": {
      "root": "ص غ ر",
      "pos": "adj",
      "gloss": "smallest, youngest",
      "content": true
    },
    "أنا": {
      "root": "—",
      "pos": "noun",
      "gloss": "I",
      "content": false
    },
    "أراد": {
      "root": "ر و د",
      "pos": "verb",
      "gloss": "to want",
      "content": true
    },
    "سائق": {
      "root": "س و ق",
      "pos": "noun",
      "gloss": "driver",
      "content": true
    },
    "قطار": {
      "root": "ق ط ر",
      "pos": "noun",
      "gloss": "train",
      "content": true
    },
    "ركب": {
      "root": "ر ك ب",
      "pos": "verb",
      "gloss": "to ride, board",
      "content": true
    },
    "دائما": {
      "root": "د و م",
      "pos": "adv",
      "gloss": "always",
      "content": true
    },
    "سافر": {
      "root": "س ف ر",
      "pos": "verb",
      "gloss": "to travel",
      "content": true
    },
    "مجانا": {
      "root": "م ج ن",
      "pos": "adv",
      "gloss": "free of charge",
      "content": true
    },
    "تنزه": {
      "root": "ن ز ه",
      "pos": "verb",
      "gloss": "to go on an outing, take a stroll",
      "content": true
    },
    "عبدالرحمن": {
      "root": "—",
      "pos": "proper",
      "gloss": "ʿAbd al-Raḥmān (a name)",
      "content": true
    },
    "إن": {
      "root": "—",
      "pos": "part",
      "gloss": "that; indeed",
      "content": false
    },
    "تعب": {
      "root": "ت ع ب",
      "pos": "noun",
      "gloss": "fatigue, hardship",
      "content": true
    },
    "عظيم": {
      "root": "ع ظ م",
      "pos": "adj",
      "gloss": "great, tremendous",
      "content": true
    },
    "حر-حرارة": {
      "root": "ح ر ر",
      "pos": "noun",
      "gloss": "heat",
      "content": true
    },
    "جحيم": {
      "root": "ج ح م",
      "pos": "noun",
      "gloss": "blazing fire, hell",
      "content": true,
      "book_note": "الجَحِيْمُ: النَّارُ الشَّدِيْدَةُ التَّأَجُّجِ (a fiercely blazing fire)"
    },
    "لكن": {
      "root": "—",
      "pos": "part",
      "gloss": "but",
      "content": false
    },
    "ربان": {
      "root": "ر ب ب",
      "pos": "noun",
      "gloss": "captain (of a ship)",
      "content": true,
      "book_note": "الرُّبَّان (ج) الرَّبَّابِيْن والرَّبَابِنَة: رَئِيْسُ الْمَلَّاحِيْنَ فِي السَّفِيْنَةِ (the chief of the sailors on a ship)"
    },
    "باخرة": {
      "root": "ب خ ر",
      "pos": "noun",
      "gloss": "steamship, ship",
      "content": true
    },
    "بحر": {
      "root": "ب ح ر",
      "pos": "noun",
      "gloss": "sea",
      "content": true
    },
    "زار": {
      "root": "ز و ر",
      "pos": "verb",
      "gloss": "to visit",
      "content": true
    },
    "بلاد": {
      "root": "ب ل د",
      "pos": "noun",
      "gloss": "country, lands",
      "content": true
    },
    "بعيد": {
      "root": "ب ع د",
      "pos": "adj",
      "gloss": "far, distant",
      "content": true
    },
    "شاهد": {
      "root": "ش ه د",
      "pos": "verb",
      "gloss": "to witness, see",
      "content": true
    },
    "عجيبة": {
      "root": "ع ج ب",
      "pos": "noun",
      "gloss": "wonder, marvel",
      "content": true
    },
    "دنيا": {
      "root": "د ن و",
      "pos": "noun",
      "gloss": "world, this life",
      "content": true
    },
    "إبراهيم": {
      "root": "—",
      "pos": "proper",
      "gloss": "Ibrāhīm (a name)",
      "content": true
    },
    "خطر": {
      "root": "خ ط ر",
      "pos": "noun",
      "gloss": "danger",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "غرق": {
      "root": "غ ر ق",
      "pos": "verb",
      "gloss": "to drown, sink",
      "content": true
    },
    "طبيب": {
      "root": "ط ب ب",
      "pos": "noun",
      "gloss": "doctor, physician",
      "content": true
    },
    "داوى": {
      "root": "د و ي",
      "pos": "verb",
      "gloss": "to treat, cure",
      "content": true
    },
    "ناس": {
      "root": "ن و س",
      "pos": "noun",
      "gloss": "people",
      "content": true
    },
    "فقير": {
      "root": "ف ق ر",
      "pos": "noun",
      "gloss": "poor person",
      "content": true
    },
    "خدم": {
      "root": "خ د م",
      "pos": "verb",
      "gloss": "to serve",
      "content": true
    },
    "خلق": {
      "root": "خ ل ق",
      "pos": "noun",
      "gloss": "creation, mankind",
      "content": true
    },
    "حافظ": {
      "root": "ح ف ظ",
      "pos": "verb",
      "gloss": "to look after, take care of",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, to",
      "content": false
    },
    "صحة": {
      "root": "ص ح ح",
      "pos": "noun",
      "gloss": "health",
      "content": true
    },
    "عاش": {
      "root": "ع ي ش",
      "pos": "verb",
      "gloss": "to live",
      "content": true
    },
    "أمن": {
      "root": "أ م ن",
      "pos": "noun",
      "gloss": "security, safety",
      "content": true
    },
    "سلام": {
      "root": "س ل م",
      "pos": "noun",
      "gloss": "peace",
      "content": true
    },
    "أجاب": {
      "root": "ج و ب",
      "pos": "verb",
      "gloss": "to answer",
      "content": true
    },
    "هذا": {
      "root": "—",
      "pos": "noun",
      "gloss": "this",
      "content": false
    },
    "ليس": {
      "root": "ل ي س",
      "pos": "verb",
      "gloss": "to not be",
      "content": true
    },
    "صحيح": {
      "root": "ص ح ح",
      "pos": "adj",
      "gloss": "correct, sound",
      "content": true
    },
    "زمان": {
      "root": "ز م ن",
      "pos": "noun",
      "gloss": "time, age, era",
      "content": true
    },
    "هذه": {
      "root": "—",
      "pos": "noun",
      "gloss": "this (f.)",
      "content": false
    },
    "يوم": {
      "root": "ي و م",
      "pos": "noun",
      "gloss": "day",
      "content": true
    },
    "عكس": {
      "root": "ع ك س",
      "pos": "noun",
      "gloss": "opposite, contrary",
      "content": true
    },
    "رأى": {
      "root": "ر أ ي",
      "pos": "verb",
      "gloss": "to see",
      "content": true
    },
    "مرض": {
      "root": "م ر ض",
      "pos": "verb",
      "gloss": "to fall ill",
      "content": true
    },
    "مات": {
      "root": "م و ت",
      "pos": "verb",
      "gloss": "to die",
      "content": true
    },
    "قاطع": {
      "root": "ق ط ع",
      "pos": "verb",
      "gloss": "to interrupt, cut off",
      "content": true
    },
    "أما": {
      "root": "—",
      "pos": "part",
      "gloss": "[interrogative negation: haven't...?]",
      "content": false
    },
    "سمع": {
      "root": "س م ع",
      "pos": "verb",
      "gloss": "to hear, listen to",
      "content": true
    },
    "قبل": {
      "root": "ق ب ل",
      "pos": "prep",
      "gloss": "before",
      "content": false
    },
    "أو": {
      "root": "—",
      "pos": "part",
      "gloss": "or",
      "content": false
    },
    "ثلاثة": {
      "root": "ث ل ث",
      "pos": "num",
      "gloss": "three",
      "content": true
    },
    "وقت": {
      "root": "و ق ت",
      "pos": "noun",
      "gloss": "time",
      "content": true
    },
    "مناظرة": {
      "root": "ن ظ ر",
      "pos": "noun",
      "gloss": "debate, discussion",
      "content": true
    },
    "قد": {
      "root": "—",
      "pos": "part",
      "gloss": "already, indeed",
      "content": false
    },
    "بقي": {
      "root": "ب ق ي",
      "pos": "verb",
      "gloss": "to remain, be left",
      "content": true
    },
    "كثير": {
      "root": "ك ث ر",
      "pos": "adj",
      "gloss": "much, many",
      "content": true
    },
    "طلبة": {
      "root": "ط ل ب",
      "pos": "noun",
      "gloss": "students (collective)",
      "content": true
    },
    "يا": {
      "root": "—",
      "pos": "part",
      "gloss": "O (vocative)",
      "content": false
    },
    "قاسم": {
      "root": "—",
      "pos": "proper",
      "gloss": "Qāsim (a name)",
      "content": true
    },
    "بل": {
      "root": "—",
      "pos": "part",
      "gloss": "rather",
      "content": false
    },
    "فلاح": {
      "root": "ف ل ح",
      "pos": "noun",
      "gloss": "farmer",
      "content": true
    },
    "زرع": {
      "root": "ز ر ع",
      "pos": "verb",
      "gloss": "to sow, plant",
      "content": true
    },
    "حرث": {
      "root": "ح ر ث",
      "pos": "verb",
      "gloss": "to plow",
      "content": true
    },
    "أحد": {
      "root": "أ ح د",
      "pos": "noun",
      "gloss": "anyone, someone",
      "content": true
    },
    "نفع": {
      "root": "ن ف ع",
      "pos": "verb",
      "gloss": "to benefit",
      "content": true
    },
    "هو": {
      "root": "—",
      "pos": "noun",
      "gloss": "he, it",
      "content": false
    },
    "الذي": {
      "root": "—",
      "pos": "noun",
      "gloss": "who, that, which",
      "content": false
    },
    "حبوب": {
      "root": "ح ب ب",
      "pos": "noun",
      "gloss": "grains",
      "content": true
    },
    "خضر": {
      "root": "خ ض ر",
      "pos": "noun",
      "gloss": "vegetables, greens",
      "content": true
    },
    "أكل": {
      "root": "أ ك ل",
      "pos": "verb",
      "gloss": "to eat",
      "content": true
    },
    "دواب": {
      "root": "د ب ب",
      "pos": "noun",
      "gloss": "animals, beasts",
      "content": true
    },
    "سليمان": {
      "root": "—",
      "pos": "proper",
      "gloss": "Sulaymān (a name)",
      "content": true
    },
    "تاجر": {
      "root": "ت ج ر",
      "pos": "noun",
      "gloss": "merchant",
      "content": true
    },
    "لي": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to",
      "content": false
    },
    "دكان": {
      "root": "د ك ن",
      "pos": "noun",
      "gloss": "shop",
      "content": true
    },
    "كبير": {
      "root": "ك ب ر",
      "pos": "adj",
      "gloss": "big, large",
      "content": true
    },
    "سوق": {
      "root": "س و ق",
      "pos": "noun",
      "gloss": "market",
      "content": true
    },
    "أتى": {
      "root": "أ ت ي",
      "pos": "verb",
      "gloss": "to come to",
      "content": true
    },
    "إلى": {
      "root": "—",
      "pos": "prep",
      "gloss": "to, towards",
      "content": false
    },
    "اشترى": {
      "root": "ش ر ي",
      "pos": "verb",
      "gloss": "to buy",
      "content": true
    },
    "حامد": {
      "root": "—",
      "pos": "proper",
      "gloss": "Ḥāmid (a name)",
      "content": true
    },
    "صناع": {
      "root": "ص ن ع",
      "pos": "noun",
      "gloss": "craftsman, artisan",
      "content": true
    },
    "ماهر": {
      "root": "م ه ر",
      "pos": "adj",
      "gloss": "skilled, skillful",
      "content": true
    },
    "مخترع": {
      "root": "خ ر ع",
      "pos": "noun",
      "gloss": "inventor",
      "content": true
    },
    "صنع": {
      "root": "ص ن ع",
      "pos": "verb",
      "gloss": "to make, manufacture",
      "content": true
    },
    "اخترع": {
      "root": "خ ر ع",
      "pos": "verb",
      "gloss": "to invent",
      "content": true
    },
    "شيء": {
      "root": "ش ي أ",
      "pos": "noun",
      "gloss": "thing",
      "content": true
    },
    "خالد": {
      "root": "—",
      "pos": "proper",
      "gloss": "Khālid (a name)",
      "content": true
    },
    "جندي": {
      "root": "ج ن د",
      "pos": "noun",
      "gloss": "soldier",
      "content": true
    },
    "قوي": {
      "root": "ق و ي",
      "pos": "adj",
      "gloss": "strong",
      "content": true
    },
    "قاتل": {
      "root": "ق ت ل",
      "pos": "verb",
      "gloss": "to fight",
      "content": true
    },
    "كافر": {
      "root": "ك ف ر",
      "pos": "noun",
      "gloss": "disbeliever",
      "content": true
    },
    "مشرك": {
      "root": "ش ر ك",
      "pos": "noun",
      "gloss": "polytheist, idolater",
      "content": true
    },
    "جاهد": {
      "root": "ج ه د",
      "pos": "verb",
      "gloss": "to strive, struggle",
      "content": true
    },
    "سبيل": {
      "root": "س ب ل",
      "pos": "noun",
      "gloss": "path, way",
      "content": true
    },
    "الله": {
      "root": "—",
      "pos": "proper",
      "gloss": "Allah",
      "content": true
    },
    "عبدالكريم": {
      "root": "—",
      "pos": "proper",
      "gloss": "ʿAbd al-Karīm (a name)",
      "content": true
    },
    "غني": {
      "root": "غ ن ي",
      "pos": "adj",
      "gloss": "rich, wealthy",
      "content": true
    },
    "لبس": {
      "root": "ل ب س",
      "pos": "verb",
      "gloss": "to wear",
      "content": true
    },
    "ما": {
      "root": "—",
      "pos": "part",
      "gloss": "what; that which",
      "content": false
    },
    "اشتهى": {
      "root": "ش ه و",
      "pos": "verb",
      "gloss": "to desire, crave",
      "content": true
    },
    "أين": {
      "root": "—",
      "pos": "part",
      "gloss": "where",
      "content": false
    },
    "عند": {
      "root": "ع ن د",
      "pos": "prep",
      "gloss": "at, by, with",
      "content": false
    },
    "مال": {
      "root": "م و ل",
      "pos": "noun",
      "gloss": "wealth, money",
      "content": true
    },
    "سكن": {
      "root": "س ك ن",
      "pos": "verb",
      "gloss": "to dwell, live",
      "content": true
    },
    "قصر": {
      "root": "ق ص ر",
      "pos": "noun",
      "gloss": "palace",
      "content": true
    },
    "ضحك": {
      "root": "ض ح ك",
      "pos": "verb",
      "gloss": "to laugh",
      "content": true
    },
    "ولد": {
      "root": "و ل د",
      "pos": "noun",
      "gloss": "child, boy",
      "content": true
    },
    "قول": {
      "root": "ق و ل",
      "pos": "noun",
      "gloss": "statement, saying",
      "content": true
    },
    "خجل": {
      "root": "خ ج ل",
      "pos": "verb",
      "gloss": "to feel shy, embarrassed",
      "content": true
    },
    "محمد": {
      "root": "—",
      "pos": "proper",
      "gloss": "Muḥammad (a name)",
      "content": true
    },
    "عالم": {
      "root": "ع ل م",
      "pos": "noun",
      "gloss": "scholar",
      "content": true
    },
    "عبد": {
      "root": "ع ب د",
      "pos": "verb",
      "gloss": "to worship",
      "content": true
    },
    "وعظ": {
      "root": "و ع ظ",
      "pos": "verb",
      "gloss": "to admonish, exhort",
      "content": true
    },
    "أمر": {
      "root": "أ م ر",
      "pos": "verb",
      "gloss": "to order, command",
      "content": true
    },
    "معروف": {
      "root": "ع ر ف",
      "pos": "noun",
      "gloss": "what is right, good conduct",
      "content": true
    },
    "نهى": {
      "root": "ن ه ي",
      "pos": "verb",
      "gloss": "to forbid",
      "content": true
    },
    "عن": {
      "root": "—",
      "pos": "prep",
      "gloss": "about, from",
      "content": false
    },
    "منكر": {
      "root": "ن ك ر",
      "pos": "noun",
      "gloss": "what is wrong, evil conduct",
      "content": true
    },
    "حذر": {
      "root": "ح ذ ر",
      "pos": "verb",
      "gloss": "to warn",
      "content": true,
      "book_note": "حَذَّرَ يُحَذِّرُ تَحْذِيْراً: نَبَّهَ (to warn, alert)"
    },
    "عذاب": {
      "root": "ع ذ ب",
      "pos": "noun",
      "gloss": "punishment, torment",
      "content": true
    },
    "أحسن": {
      "root": "ح س ن",
      "pos": "verb",
      "gloss": "to do well",
      "content": true
    },
    "دعا": {
      "root": "د ع و",
      "pos": "verb",
      "gloss": "to pray for, invoke blessing upon",
      "content": true
    },
    "توفيق": {
      "root": "و ف ق",
      "pos": "noun",
      "gloss": "success, facilitation (from Allah)",
      "content": true
    },
    "نجاح": {
      "root": "ن ج ح",
      "pos": "noun",
      "gloss": "success",
      "content": true
    },
    "مسلم": {
      "root": "س ل م",
      "pos": "noun",
      "gloss": "Muslim",
      "content": true
    },
    "ابتغى": {
      "root": "ب غ ي",
      "pos": "verb",
      "gloss": "to seek",
      "content": true,
      "book_note": "ابْتَغَىٰ يَبْتَغِيْ ابْتِغَاءً: أَرَادَ وَطَلَبَ (to want and seek)"
    },
    "عمل": {
      "root": "ع م ل",
      "pos": "noun",
      "gloss": "work, deed",
      "content": true
    },
    "دين": {
      "root": "د ي ن",
      "pos": "noun",
      "gloss": "religion",
      "content": true
    },
    "شغل": {
      "root": "ش غ ل",
      "pos": "noun",
      "gloss": "work, occupation",
      "content": true
    },
    "أمة": {
      "root": "أ م م",
      "pos": "noun",
      "gloss": "nation, community",
      "content": true
    },
    "علم": {
      "root": "ع ل م",
      "pos": "noun",
      "gloss": "knowledge",
      "content": true
    },
    "أيها": {
      "root": "—",
      "pos": "part",
      "gloss": "O (vocative)",
      "content": false
    },
    "أستاذ": {
      "root": "—",
      "pos": "noun",
      "gloss": "professor, teacher",
      "content": true
    },
    "نعمة": {
      "root": "ن ع م",
      "pos": "noun",
      "gloss": "blessing, favor",
      "content": true
    },
    "وجب": {
      "root": "و ج ب",
      "pos": "verb",
      "gloss": "to be obligatory",
      "content": true
    },
    "شكر": {
      "root": "ش ك ر",
      "pos": "noun",
      "gloss": "thanks, gratitude",
      "content": true
    },
    "سعيد-صفة": {
      "root": "س ع د",
      "pos": "adj",
      "gloss": "happy",
      "content": true
    },
    "جدا": {
      "root": "ج د د",
      "pos": "adv",
      "gloss": "very",
      "content": true
    },
    "من-اسم": {
      "root": "—",
      "pos": "noun",
      "gloss": "who, whoever",
      "content": false
    },
    "آتى": {
      "root": "أ ت ي",
      "pos": "verb",
      "gloss": "to give",
      "content": true
    },
    "أنفق": {
      "root": "ن ف ق",
      "pos": "verb",
      "gloss": "to spend",
      "content": true
    },
    "سر": {
      "root": "س ر ر",
      "pos": "noun",
      "gloss": "secret; secretly",
      "content": true
    },
    "جهر": {
      "root": "ج ه ر",
      "pos": "noun",
      "gloss": "openly, publicly",
      "content": true
    },
    "ب": {
      "root": "—",
      "pos": "prep",
      "gloss": "with, by, through",
      "content": false
    },
    "مرضاة": {
      "root": "ر ض و",
      "pos": "noun",
      "gloss": "pleasure, good pleasure",
      "content": true
    },
    "إسلام": {
      "root": "س ل م",
      "pos": "proper",
      "gloss": "Islam",
      "content": true
    },
    "جاء": {
      "root": "ج ي أ",
      "pos": "verb",
      "gloss": "to come",
      "content": true
    },
    "حديث": {
      "root": "ح د ث",
      "pos": "noun",
      "gloss": "narration, ḥadīth",
      "content": true
    },
    "شريف": {
      "root": "ش ر ف",
      "pos": "adj",
      "gloss": "noble",
      "content": true
    },
    "حسد": {
      "root": "ح س د",
      "pos": "noun",
      "gloss": "envy",
      "content": true
    },
    "إلا": {
      "root": "—",
      "pos": "part",
      "gloss": "except",
      "content": false
    },
    "اثنتان": {
      "root": "ث ن ي",
      "pos": "num",
      "gloss": "two (fem.)",
      "content": true
    },
    "رجل": {
      "root": "ر ج ل",
      "pos": "noun",
      "gloss": "man",
      "content": true
    },
    "سلط": {
      "root": "س ل ط",
      "pos": "verb",
      "gloss": "to give power, empower",
      "content": true
    },
    "هلكة": {
      "root": "ه ل ك",
      "pos": "noun",
      "gloss": "spending, expending",
      "content": true
    },
    "حق": {
      "root": "ح ق ق",
      "pos": "noun",
      "gloss": "truth, what is right",
      "content": true
    },
    "حكمة": {
      "root": "ح ك م",
      "pos": "noun",
      "gloss": "wisdom",
      "content": true
    },
    "قضى": {
      "root": "ق ض ي",
      "pos": "verb",
      "gloss": "to judge, decide",
      "content": true
    },
    "علّم": {
      "root": "ع ل م",
      "pos": "verb",
      "gloss": "to teach",
      "content": true
    },
    "سيد": {
      "root": "س و د",
      "pos": "noun",
      "gloss": "master, sir",
      "content": true
    },
    "عثمان": {
      "root": "—",
      "pos": "proper",
      "gloss": "ʿUthmān (a name)",
      "content": true
    },
    "بن": {
      "root": "ب ن و",
      "pos": "noun",
      "gloss": "son of",
      "content": true
    },
    "عوف": {
      "root": "—",
      "pos": "proper",
      "gloss": "ʿAwf (a name)",
      "content": true
    },
    "رفع": {
      "root": "ر ف ع",
      "pos": "verb",
      "gloss": "to raise, lift",
      "content": true
    },
    "رأس": {
      "root": "ر أ س",
      "pos": "noun",
      "gloss": "head",
      "content": true
    },
    "اجتهد": {
      "root": "ج ه د",
      "pos": "verb",
      "gloss": "to strive, try hard",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "lines": true,
      "en": "The teacher once asked the students in the classroom, one by one: \"What do you like to be?\" And he said: \"Everyone is free in his answer, so let him not fear and not be shy.\"",
      "sentences": [
        {
          "id": "qr1-9-001",
          "page": 53,
          "ar": "سَأَلَ الْمُعَلِّمُ التَّلَامِيْذَ مَرَّةً فِيْ الصَّفِّ وَاحِداً وَاحِداً: مَاذَا تُحِبُّ أَنْ تَكُوْنَ؟",
          "en": "The teacher once asked the students in the classroom, one by one: \"What do you like to be?\"",
          "tokens": [
            {
              "surface": "سَأَلَ",
              "lemma": "سأل",
              "features": "perf.3ms",
              "root": "س أ ل",
              "pos": "verb",
              "gloss": "to ask"
            },
            {
              "surface": "الْمُعَلِّمُ",
              "lemma": "معلم",
              "features": "def.nom",
              "root": "ع ل م",
              "pos": "noun",
              "gloss": "teacher"
            },
            {
              "surface": "التَّلَامِيْذَ",
              "lemma": "تلميذ",
              "features": "pl.def.acc",
              "root": "ت ل م ذ",
              "pos": "noun",
              "gloss": "student, pupil"
            },
            {
              "surface": "مَرَّةً",
              "lemma": "مرة",
              "features": "indef.acc",
              "root": "م ر ر",
              "pos": "noun",
              "gloss": "time, occasion"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الصَّفِّ",
              "lemma": "صف",
              "features": "def.gen",
              "root": "ص ف ف",
              "pos": "noun",
              "gloss": "row, line; classroom"
            },
            {
              "surface": "وَاحِداً",
              "lemma": "واحد",
              "features": "indef.acc",
              "root": "و ح د",
              "pos": "adj",
              "gloss": "one, single"
            },
            {
              "surface": "وَاحِداً",
              "lemma": "واحد",
              "features": "indef.acc",
              "root": "و ح د",
              "pos": "adj",
              "gloss": "one, single"
            },
            {
              "surface": "مَاذَا",
              "lemma": "ماذا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "what"
            },
            {
              "surface": "تُحِبُّ",
              "lemma": "أحب",
              "features": "impf.2ms",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "تَكُوْنَ",
              "lemma": "كان",
              "features": "impf.2ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            }
          ]
        },
        {
          "id": "qr1-9-002",
          "page": 53,
          "ar": "وَقَالَ: كُلُّ وَاحِدٍ حُرٌّ فِيْ جَوَابِهِ فَلَا يَخَفْ وَلَا يَسْتَحِيْ.",
          "en": "And he said: \"Everyone is free in his answer, so let him not fear and not be shy.\"",
          "tokens": [
            {
              "surface": "وَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "كُلُّ",
              "lemma": "كل",
              "features": "nom.constr",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "each, every, all"
            },
            {
              "surface": "وَاحِدٍ",
              "lemma": "واحد",
              "features": "indef.gen",
              "root": "و ح د",
              "pos": "adj",
              "gloss": "one, single"
            },
            {
              "surface": "حُرٌّ",
              "lemma": "حر",
              "features": "indef.nom",
              "root": "ح ر ر",
              "pos": "adj",
              "gloss": "free"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "جَوَابِهِ",
              "lemma": "جواب",
              "features": "gen+3ms",
              "root": "ج و ب",
              "pos": "noun",
              "gloss": "answer, response"
            },
            {
              "surface": "فَلَا",
              "lemma": "لا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
            },
            {
              "surface": "يَخَفْ",
              "lemma": "خاف",
              "features": "impf.3ms",
              "root": "خ و ف",
              "pos": "verb",
              "gloss": "to fear"
            },
            {
              "surface": "وَلَا",
              "lemma": "لا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
            },
            {
              "surface": "يَسْتَحِيْ",
              "lemma": "استحى",
              "features": "impf.3ms",
              "root": "ح ي ي",
              "pos": "verb",
              "gloss": "to feel shy, be bashful"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا سَأَلَ الْمُعَلِّمُ التَّلَامِيْذَ؟",
          "options": [
            "مَاذَا تُحِبُّ أَنْ تَكُوْنَ؟",
            "مَاذَا دَرَسْتَ الْيَوْمَ؟",
            "أَيْنَ بَيْتُكَ؟"
          ],
          "answer": 0,
          "qEn": "What did the teacher ask the students?",
          "optionsEn": [
            "\"What do you like to be?\"",
            "\"What did you study today?\"",
            "\"Where is your house?\""
          ]
        }
      ]
    },
    {
      "id": "p2",
      "lines": true,
      "en": "Ahmad, who was the youngest of the students, said: \"I want to be a driver on the train, so I would always ride, and travel for free, and go on outings.\"",
      "sentences": [
        {
          "id": "qr1-9-003",
          "page": 53,
          "ar": "وَقَالَ أَحْمَدُ وَكَانَ أَصْغَرَ التَّلَامِيْذِ: أَنَا أُرِيْدُ أَنْ أَكُوْنَ سَائِقاً فِي الْقِطَارِ.",
          "en": "Ahmad, who was the youngest of the students, said: \"I want to be a driver on the train.\"",
          "tokens": [
            {
              "surface": "وَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "أَحْمَدُ",
              "lemma": "أحمد",
              "features": "proper.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Aḥmad (a name)"
            },
            {
              "surface": "وَكَانَ",
              "lemma": "كان",
              "features": "conj+perf.3ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "أَصْغَرَ",
              "lemma": "أصغر",
              "features": "acc.constr",
              "root": "ص غ ر",
              "pos": "adj",
              "gloss": "smallest, youngest"
            },
            {
              "surface": "التَّلَامِيْذِ",
              "lemma": "تلميذ",
              "features": "pl.def.gen",
              "root": "ت ل م ذ",
              "pos": "noun",
              "gloss": "student, pupil"
            },
            {
              "surface": "أَنَا",
              "lemma": "أنا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "أُرِيْدُ",
              "lemma": "أراد",
              "features": "impf.1s",
              "root": "ر و د",
              "pos": "verb",
              "gloss": "to want"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "أَكُوْنَ",
              "lemma": "كان",
              "features": "impf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "سَائِقاً",
              "lemma": "سائق",
              "features": "indef.acc",
              "root": "س و ق",
              "pos": "noun",
              "gloss": "driver"
            },
            {
              "surface": "فِي",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الْقِطَارِ",
              "lemma": "قطار",
              "features": "def.gen",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            }
          ]
        },
        {
          "id": "qr1-9-004",
          "page": 53,
          "ar": "فَأَرْكَبَ دَائِماً وَأُسَافِرَ مَجَّاناً وَأَتَنَزَّهَ.",
          "en": "So I would always ride, and travel for free, and go on outings.",
          "tokens": [
            {
              "surface": "فَأَرْكَبَ",
              "lemma": "ركب",
              "features": "conj+impf.1s",
              "root": "ر ك ب",
              "pos": "verb",
              "gloss": "to ride, board"
            },
            {
              "surface": "دَائِماً",
              "lemma": "دائما",
              "features": "indef.acc",
              "root": "د و م",
              "pos": "adv",
              "gloss": "always"
            },
            {
              "surface": "وَأُسَافِرَ",
              "lemma": "سافر",
              "features": "conj+impf.1s",
              "root": "س ف ر",
              "pos": "verb",
              "gloss": "to travel"
            },
            {
              "surface": "مَجَّاناً",
              "lemma": "مجانا",
              "features": "indef.acc",
              "root": "م ج ن",
              "pos": "adv",
              "gloss": "free of charge"
            },
            {
              "surface": "وَأَتَنَزَّهَ",
              "lemma": "تنزه",
              "features": "conj+impf.1s",
              "root": "ن ز ه",
              "pos": "verb",
              "gloss": "to go on an outing, take a stroll"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا أَحَبَّ أَحْمَدُ أَنْ يَكُوْنَ؟",
          "options": [
            "سَائِقاً فِي الْقِطَارِ",
            "طَبِيْباً",
            "تَاجِراً"
          ],
          "answer": 0,
          "qEn": "What did Ahmad like to be?",
          "optionsEn": [
            "A driver on the train",
            "A doctor",
            "A merchant"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "lines": true,
      "en": "Abdul Rahman said: \"The train driver is in tremendous fatigue, heat, and blazing fire. But I like to be a captain on a ship, so I would travel by sea, visit far-off lands for free, and witness the wonders of the world.\"",
      "sentences": [
        {
          "id": "qr1-9-005",
          "page": 53,
          "ar": "وَقَالَ عَبْدُ الرَّحْمٰنِ: إِنَّ سَائِقَ الْقِطَارِ فِيْ تَعَبٍ عَظِيْمٍ وَحَرٍّ وَجَحِيْمٍ.",
          "en": "Abdul Rahman said: \"The train driver is in tremendous fatigue, heat, and blazing fire.\"",
          "tokens": [
            {
              "surface": "وَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "عَبْدُ",
              "lemma": "عبدالرحمن",
              "features": "nom.constr",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Raḥmān (a name)"
            },
            {
              "surface": "الرَّحْمٰنِ",
              "lemma": "عبدالرحمن",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Raḥmān (a name)"
            },
            {
              "surface": "إِنَّ",
              "lemma": "إن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that; indeed"
            },
            {
              "surface": "سَائِقَ",
              "lemma": "سائق",
              "features": "acc.constr",
              "root": "س و ق",
              "pos": "noun",
              "gloss": "driver"
            },
            {
              "surface": "الْقِطَارِ",
              "lemma": "قطار",
              "features": "def.gen",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "تَعَبٍ",
              "lemma": "تعب",
              "features": "indef.gen",
              "root": "ت ع ب",
              "pos": "noun",
              "gloss": "fatigue, hardship"
            },
            {
              "surface": "عَظِيْمٍ",
              "lemma": "عظيم",
              "features": "indef.gen",
              "root": "ع ظ م",
              "pos": "adj",
              "gloss": "great, tremendous"
            },
            {
              "surface": "وَحَرٍّ",
              "lemma": "حر-حرارة",
              "features": "conj+indef.gen",
              "root": "ح ر ر",
              "pos": "noun",
              "gloss": "heat"
            },
            {
              "surface": "وَجَحِيْمٍ",
              "lemma": "جحيم",
              "features": "conj+indef.gen",
              "root": "ج ح م",
              "pos": "noun",
              "gloss": "blazing fire, hell"
            }
          ]
        },
        {
          "id": "qr1-9-006",
          "page": 53,
          "ar": "وَلٰكِنِّيْ أُحِبُّ أَنْ أَكُوْنَ رُبَّاناً فِيْ بَاخِرَةٍ.",
          "en": "But I like to be a captain on a ship.",
          "tokens": [
            {
              "surface": "وَلٰكِنِّيْ",
              "lemma": "لكن",
              "features": "conj+part+1s",
              "root": "",
              "pos": "part",
              "gloss": "but"
            },
            {
              "surface": "أُحِبُّ",
              "lemma": "أحب",
              "features": "impf.1s",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "أَكُوْنَ",
              "lemma": "كان",
              "features": "impf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "رُبَّاناً",
              "lemma": "ربان",
              "features": "indef.acc",
              "root": "ر ب ب",
              "pos": "noun",
              "gloss": "captain (of a ship)"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "بَاخِرَةٍ",
              "lemma": "باخرة",
              "features": "indef.gen",
              "root": "ب خ ر",
              "pos": "noun",
              "gloss": "steamship, ship"
            }
          ]
        },
        {
          "id": "qr1-9-007",
          "page": 53,
          "ar": "فَأُسَافِرُ فِي الْبَحْرِ وَأَزُوْرُ الْبِلَادَ الْبَعِيْدَةَ مَجَّاناً وَأُشَاهِدَ عَجَائِبَ الدُّنْيَا.",
          "en": "So I would travel by sea, visit far-off lands for free, and witness the wonders of the world.",
          "tokens": [
            {
              "surface": "فَأُسَافِرُ",
              "lemma": "سافر",
              "features": "conj+impf.1s",
              "root": "س ف ر",
              "pos": "verb",
              "gloss": "to travel"
            },
            {
              "surface": "فِي",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الْبَحْرِ",
              "lemma": "بحر",
              "features": "def.gen",
              "root": "ب ح ر",
              "pos": "noun",
              "gloss": "sea"
            },
            {
              "surface": "وَأَزُوْرُ",
              "lemma": "زار",
              "features": "conj+impf.1s",
              "root": "ز و ر",
              "pos": "verb",
              "gloss": "to visit"
            },
            {
              "surface": "الْبِلَادَ",
              "lemma": "بلاد",
              "features": "def.acc",
              "root": "ب ل د",
              "pos": "noun",
              "gloss": "country, lands"
            },
            {
              "surface": "الْبَعِيْدَةَ",
              "lemma": "بعيد",
              "features": "def.acc",
              "root": "ب ع د",
              "pos": "adj",
              "gloss": "far, distant"
            },
            {
              "surface": "مَجَّاناً",
              "lemma": "مجانا",
              "features": "indef.acc",
              "root": "م ج ن",
              "pos": "adv",
              "gloss": "free of charge"
            },
            {
              "surface": "وَأُشَاهِدَ",
              "lemma": "شاهد",
              "features": "conj+impf.1s",
              "root": "ش ه د",
              "pos": "verb",
              "gloss": "to witness, see"
            },
            {
              "surface": "عَجَائِبَ",
              "lemma": "عجيبة",
              "features": "pl.acc.constr",
              "root": "ع ج ب",
              "pos": "noun",
              "gloss": "wonder, marvel"
            },
            {
              "surface": "الدُّنْيَا",
              "lemma": "دنيا",
              "features": "def.gen",
              "root": "د ن و",
              "pos": "noun",
              "gloss": "world, this life"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا لَمْ يُحِبَّ عَبْدُ الرَّحْمٰنِ أَنْ يَكُوْنَ سَائِقاً؟",
          "options": [
            "لِأَنَّ سَائِقَ الْقِطَارِ فِيْ تَعَبٍ عَظِيْمٍ وَحَرٍّ وَجَحِيْمٍ",
            "لِأَنَّهُ لَا يُحِبُّ الْقِطَارَ",
            "لِأَنَّهُ خَائِفٌ"
          ],
          "answer": 0,
          "qEn": "Why didn't Abdul Rahman like to be a driver?",
          "optionsEn": [
            "Because the train driver is in tremendous fatigue, heat, and blazing fire",
            "Because he doesn't like trains",
            "Because he was afraid"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "lines": true,
      "en": "Ibrahim said: \"The captain and his ship are in danger of drowning. But I like to be a doctor, so I would treat people, and treat the poor for free, and serve creation, and take care of my health, and live in security and peace.\"",
      "sentences": [
        {
          "id": "qr1-9-008",
          "page": 53,
          "ar": "وَقَالَ إِبْرَاهِيْمُ: الرُّبَّانُ وَبَاخِرَتُهُ فِيْ خَطَرٍ مِنَ الْغَرَقِ.",
          "en": "Ibrahim said: \"The captain and his ship are in danger of drowning.\"",
          "tokens": [
            {
              "surface": "وَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "إِبْرَاهِيْمُ",
              "lemma": "إبراهيم",
              "features": "proper.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ibrāhīm (a name)"
            },
            {
              "surface": "الرُّبَّانُ",
              "lemma": "ربان",
              "features": "def.nom",
              "root": "ر ب ب",
              "pos": "noun",
              "gloss": "captain (of a ship)"
            },
            {
              "surface": "وَبَاخِرَتُهُ",
              "lemma": "باخرة",
              "features": "conj+def.nom+3ms",
              "root": "ب خ ر",
              "pos": "noun",
              "gloss": "steamship, ship"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "خَطَرٍ",
              "lemma": "خطر",
              "features": "indef.gen",
              "root": "خ ط ر",
              "pos": "noun",
              "gloss": "danger"
            },
            {
              "surface": "مِنَ",
              "lemma": "من",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "from"
            },
            {
              "surface": "الْغَرَقِ",
              "lemma": "غرق",
              "features": "def.gen",
              "root": "غ ر ق",
              "pos": "noun",
              "gloss": "drowning"
            }
          ]
        },
        {
          "id": "qr1-9-009",
          "page": 54,
          "ar": "وَلٰكِنِّيْ أُحِبُّ أَنْ أَكُوْنَ طَبِيْباً فَأُدَاوِيَ النَّاسَ وَأُدَاوِيَ الْفُقَرَاءَ مَجَّاناً.",
          "en": "But I like to be a doctor, so I would treat people, and treat the poor for free.",
          "tokens": [
            {
              "surface": "وَلٰكِنِّيْ",
              "lemma": "لكن",
              "features": "conj+part+1s",
              "root": "",
              "pos": "part",
              "gloss": "but"
            },
            {
              "surface": "أُحِبُّ",
              "lemma": "أحب",
              "features": "impf.1s",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "أَكُوْنَ",
              "lemma": "كان",
              "features": "impf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "طَبِيْباً",
              "lemma": "طبيب",
              "features": "indef.acc",
              "root": "ط ب ب",
              "pos": "noun",
              "gloss": "doctor, physician"
            },
            {
              "surface": "فَأُدَاوِيَ",
              "lemma": "داوى",
              "features": "conj+impf.1s",
              "root": "د و ي",
              "pos": "verb",
              "gloss": "to treat, cure"
            },
            {
              "surface": "النَّاسَ",
              "lemma": "ناس",
              "features": "def.acc",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
            },
            {
              "surface": "وَأُدَاوِيَ",
              "lemma": "داوى",
              "features": "conj+impf.1s",
              "root": "د و ي",
              "pos": "verb",
              "gloss": "to treat, cure"
            },
            {
              "surface": "الْفُقَرَاءَ",
              "lemma": "فقير",
              "features": "pl.def.acc",
              "root": "ف ق ر",
              "pos": "noun",
              "gloss": "poor person"
            },
            {
              "surface": "مَجَّاناً",
              "lemma": "مجانا",
              "features": "indef.acc",
              "root": "م ج ن",
              "pos": "adv",
              "gloss": "free of charge"
            }
          ]
        },
        {
          "id": "qr1-9-010",
          "page": 54,
          "ar": "وَأَخْدِمَ الْخَلْقَ وَأُحَافِظَ عَلَىٰ صِحَّتِيْ وَأَعِيْشَ بِأَمْنٍ وَسَلَامٍ.",
          "en": "And serve creation, and take care of my health, and live in security and peace.",
          "tokens": [
            {
              "surface": "وَأَخْدِمَ",
              "lemma": "خدم",
              "features": "conj+impf.1s",
              "root": "خ د م",
              "pos": "verb",
              "gloss": "to serve"
            },
            {
              "surface": "الْخَلْقَ",
              "lemma": "خلق",
              "features": "def.acc",
              "root": "خ ل ق",
              "pos": "noun",
              "gloss": "creation, mankind"
            },
            {
              "surface": "وَأُحَافِظَ",
              "lemma": "حافظ",
              "features": "conj+impf.1s",
              "root": "ح ف ظ",
              "pos": "verb",
              "gloss": "to look after, take care of"
            },
            {
              "surface": "عَلَىٰ",
              "lemma": "على",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, to"
            },
            {
              "surface": "صِحَّتِيْ",
              "lemma": "صحة",
              "features": "gen+1s",
              "root": "ص ح ح",
              "pos": "noun",
              "gloss": "health"
            },
            {
              "surface": "وَأَعِيْشَ",
              "lemma": "عاش",
              "features": "conj+impf.1s",
              "root": "ع ي ش",
              "pos": "verb",
              "gloss": "to live"
            },
            {
              "surface": "بِأَمْنٍ",
              "lemma": "أمن",
              "features": "prep+indef.gen",
              "root": "أ م ن",
              "pos": "noun",
              "gloss": "security, safety"
            },
            {
              "surface": "وَسَلَامٍ",
              "lemma": "سلام",
              "features": "conj+indef.gen",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "peace"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا أَحَبَّ إِبْرَاهِيْمُ أَنْ يَكُوْنَ؟",
          "options": [
            "طَبِيْباً",
            "رُبَّاناً",
            "فَلَّاحاً"
          ],
          "answer": 0,
          "qEn": "What did Ibrahim like to be?",
          "optionsEn": [
            "A doctor",
            "A ship's captain",
            "A farmer"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "lines": true,
      "en": "Abdul Rahman answered him and said: \"This isn't correct. The ship isn't in danger in this age, and ships always travel these days in security and peace. On the contrary, I see doctors get sick and die.\" Ibrahim interrupted him and said: \"Haven't you heard that a ship sank two or three days ago?\" Ibrahim wanted to answer him, but the teacher said: \"This isn't the time for debate, and many students remain -- what do you say, Qasim?\"",
      "sentences": [
        {
          "id": "qr1-9-011",
          "page": 54,
          "ar": "وَأَجَابَهُ عَبْدُ الرَّحْمٰنِ وَقَالَ: هٰذَا لَيْسَ بِصَحِيْحٍ.",
          "en": "Abdul Rahman answered him and said: \"This isn't correct.\"",
          "tokens": [
            {
              "surface": "وَأَجَابَهُ",
              "lemma": "أجاب",
              "features": "conj+perf.3ms+3ms",
              "root": "ج و ب",
              "pos": "verb",
              "gloss": "to answer"
            },
            {
              "surface": "عَبْدُ",
              "lemma": "عبدالرحمن",
              "features": "nom.constr",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Raḥmān (a name)"
            },
            {
              "surface": "الرَّحْمٰنِ",
              "lemma": "عبدالرحمن",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Raḥmān (a name)"
            },
            {
              "surface": "وَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "هٰذَا",
              "lemma": "هذا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "this"
            },
            {
              "surface": "لَيْسَ",
              "lemma": "ليس",
              "features": "perf.3ms",
              "root": "ل ي س",
              "pos": "verb",
              "gloss": "to not be"
            },
            {
              "surface": "بِصَحِيْحٍ",
              "lemma": "صحيح",
              "features": "prep+indef.gen",
              "root": "ص ح ح",
              "pos": "adj",
              "gloss": "correct, sound"
            }
          ]
        },
        {
          "id": "qr1-9-012",
          "page": 54,
          "ar": "لَيْسَتِ الْبَاخِرَةُ فِيْ خَطَرٍ فِيْ هٰذَا الزَّمَانِ، وَالْبَوَاخِرُ تُسَافِرُ دَائِماً فِيْ هٰذِهِ الْأَيَّامِ بِأَمْنٍ وَسَلَامٍ.",
          "en": "The ship isn't in danger in this age, and ships always travel these days in security and peace.",
          "tokens": [
            {
              "surface": "لَيْسَتِ",
              "lemma": "ليس",
              "features": "perf.3fs",
              "root": "ل ي س",
              "pos": "verb",
              "gloss": "to not be"
            },
            {
              "surface": "الْبَاخِرَةُ",
              "lemma": "باخرة",
              "features": "def.nom",
              "root": "ب خ ر",
              "pos": "noun",
              "gloss": "steamship, ship"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "خَطَرٍ",
              "lemma": "خطر",
              "features": "indef.gen",
              "root": "خ ط ر",
              "pos": "noun",
              "gloss": "danger"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "هٰذَا",
              "lemma": "هذا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "this"
            },
            {
              "surface": "الزَّمَانِ",
              "lemma": "زمان",
              "features": "def.gen",
              "root": "ز م ن",
              "pos": "noun",
              "gloss": "time, age, era"
            },
            {
              "surface": "وَالْبَوَاخِرُ",
              "lemma": "باخرة",
              "features": "conj+pl.def.nom",
              "root": "ب خ ر",
              "pos": "noun",
              "gloss": "steamship, ship"
            },
            {
              "surface": "تُسَافِرُ",
              "lemma": "سافر",
              "features": "impf.3fs",
              "root": "س ف ر",
              "pos": "verb",
              "gloss": "to travel"
            },
            {
              "surface": "دَائِماً",
              "lemma": "دائما",
              "features": "indef.acc",
              "root": "د و م",
              "pos": "adv",
              "gloss": "always"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "هٰذِهِ",
              "lemma": "هذه",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "this (f.)"
            },
            {
              "surface": "الْأَيَّامِ",
              "lemma": "يوم",
              "features": "pl.def.gen",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "بِأَمْنٍ",
              "lemma": "أمن",
              "features": "prep+indef.gen",
              "root": "أ م ن",
              "pos": "noun",
              "gloss": "security, safety"
            },
            {
              "surface": "وَسَلَامٍ",
              "lemma": "سلام",
              "features": "conj+indef.gen",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "peace"
            }
          ]
        },
        {
          "id": "qr1-9-013",
          "page": 54,
          "ar": "وَبِالْعَكْسِ أَرَىٰ الْأَطِبَّاءَ يَمْرَضُوْنَ وَيَمُوْتُوْنَ.",
          "en": "On the contrary, I see doctors get sick and die.",
          "tokens": [
            {
              "surface": "وَبِالْعَكْسِ",
              "lemma": "عكس",
              "features": "conj+prep+def.gen",
              "root": "ع ك س",
              "pos": "noun",
              "gloss": "opposite, contrary"
            },
            {
              "surface": "أَرَىٰ",
              "lemma": "رأى",
              "features": "impf.1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "الْأَطِبَّاءَ",
              "lemma": "طبيب",
              "features": "pl.def.acc",
              "root": "ط ب ب",
              "pos": "noun",
              "gloss": "doctor, physician"
            },
            {
              "surface": "يَمْرَضُوْنَ",
              "lemma": "مرض",
              "features": "impf.3mp",
              "root": "م ر ض",
              "pos": "verb",
              "gloss": "to fall ill"
            },
            {
              "surface": "وَيَمُوْتُوْنَ",
              "lemma": "مات",
              "features": "conj+impf.3mp",
              "root": "م و ت",
              "pos": "verb",
              "gloss": "to die"
            }
          ]
        },
        {
          "id": "qr1-9-014",
          "page": 54,
          "ar": "وَقَاطَعَهُ إِبْرَاهِيْمُ وَقَالَ: أَمَا سَمِعْتَ أَنَّ بَاخِرَةً غَرِقَتْ قَبْلَ يَوْمَيْنِ أَوْ ثَلَاثَةِ أَيَّامٍ؟",
          "en": "Ibrahim interrupted him and said: \"Haven't you heard that a ship sank two or three days ago?\"",
          "tokens": [
            {
              "surface": "وَقَاطَعَهُ",
              "lemma": "قاطع",
              "features": "conj+perf.3ms+3ms",
              "root": "ق ط ع",
              "pos": "verb",
              "gloss": "to interrupt, cut off"
            },
            {
              "surface": "إِبْرَاهِيْمُ",
              "lemma": "إبراهيم",
              "features": "proper.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ibrāhīm (a name)"
            },
            {
              "surface": "وَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "أَمَا",
              "lemma": "أما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "[interrogative negation: haven't...?]"
            },
            {
              "surface": "سَمِعْتَ",
              "lemma": "سمع",
              "features": "perf.2ms",
              "root": "س م ع",
              "pos": "verb",
              "gloss": "to hear, listen to"
            },
            {
              "surface": "أَنَّ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "بَاخِرَةً",
              "lemma": "باخرة",
              "features": "indef.acc",
              "root": "ب خ ر",
              "pos": "noun",
              "gloss": "steamship, ship"
            },
            {
              "surface": "غَرِقَتْ",
              "lemma": "غرق",
              "features": "perf.3fs",
              "root": "غ ر ق",
              "pos": "verb",
              "gloss": "to drown, sink"
            },
            {
              "surface": "قَبْلَ",
              "lemma": "قبل",
              "features": "prep",
              "root": "ق ب ل",
              "pos": "prep",
              "gloss": "before"
            },
            {
              "surface": "يَوْمَيْنِ",
              "lemma": "يوم",
              "features": "indef.gen.du",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "أَوْ",
              "lemma": "أو",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "or"
            },
            {
              "surface": "ثَلَاثَةِ",
              "lemma": "ثلاثة",
              "features": "gen.constr",
              "root": "ث ل ث",
              "pos": "num",
              "gloss": "three"
            },
            {
              "surface": "أَيَّامٍ",
              "lemma": "يوم",
              "features": "pl.indef.gen",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            }
          ]
        },
        {
          "id": "qr1-9-015",
          "page": 54,
          "ar": "وَأَرَادَ إِبْرَاهِيْمُ أَنْ يُجِيْبَهُ وَلٰكِنْ قَالَ الْمُعَلِّمُ: هٰذَا لَيْسَ وَقْتَ مُنَاظَرَةٍ.",
          "en": "Ibrahim wanted to answer him, but the teacher said: \"This isn't the time for debate.\"",
          "tokens": [
            {
              "surface": "وَأَرَادَ",
              "lemma": "أراد",
              "features": "conj+perf.3ms",
              "root": "ر و د",
              "pos": "verb",
              "gloss": "to want"
            },
            {
              "surface": "إِبْرَاهِيْمُ",
              "lemma": "إبراهيم",
              "features": "proper.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ibrāhīm (a name)"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "يُجِيْبَهُ",
              "lemma": "أجاب",
              "features": "impf.3ms+3ms",
              "root": "ج و ب",
              "pos": "verb",
              "gloss": "to answer"
            },
            {
              "surface": "وَلٰكِنْ",
              "lemma": "لكن",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "but"
            },
            {
              "surface": "قَالَ",
              "lemma": "قال",
              "features": "perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "الْمُعَلِّمُ",
              "lemma": "معلم",
              "features": "def.nom",
              "root": "ع ل م",
              "pos": "noun",
              "gloss": "teacher"
            },
            {
              "surface": "هٰذَا",
              "lemma": "هذا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "this"
            },
            {
              "surface": "لَيْسَ",
              "lemma": "ليس",
              "features": "perf.3ms",
              "root": "ل ي س",
              "pos": "verb",
              "gloss": "to not be"
            },
            {
              "surface": "وَقْتَ",
              "lemma": "وقت",
              "features": "acc.constr",
              "root": "و ق ت",
              "pos": "noun",
              "gloss": "time"
            },
            {
              "surface": "مُنَاظَرَةٍ",
              "lemma": "مناظرة",
              "features": "indef.gen",
              "root": "ن ظ ر",
              "pos": "noun",
              "gloss": "debate, discussion"
            }
          ]
        },
        {
          "id": "qr1-9-016",
          "page": 54,
          "ar": "وَقَدْ بَقِيَ كَثِيْرٌ مِنَ الطَّلَبَةِ، وَمَاذَا تَقُوْلُ يَا قَاسِمُ؟",
          "en": "And many students remain -- what do you say, Qasim?",
          "tokens": [
            {
              "surface": "وَقَدْ",
              "lemma": "قد",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "already, indeed"
            },
            {
              "surface": "بَقِيَ",
              "lemma": "بقي",
              "features": "perf.3ms",
              "root": "ب ق ي",
              "pos": "verb",
              "gloss": "to remain, be left"
            },
            {
              "surface": "كَثِيْرٌ",
              "lemma": "كثير",
              "features": "indef.nom",
              "root": "ك ث ر",
              "pos": "adj",
              "gloss": "much, many"
            },
            {
              "surface": "مِنَ",
              "lemma": "من",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "from"
            },
            {
              "surface": "الطَّلَبَةِ",
              "lemma": "طلبة",
              "features": "def.gen",
              "root": "ط ل ب",
              "pos": "noun",
              "gloss": "students (collective)"
            },
            {
              "surface": "وَمَاذَا",
              "lemma": "ماذا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "what"
            },
            {
              "surface": "تَقُوْلُ",
              "lemma": "قال",
              "features": "impf.2ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "يَا",
              "lemma": "يا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "O (vocative)"
            },
            {
              "surface": "قَاسِمُ",
              "lemma": "قاسم",
              "features": "proper.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Qāsim (a name)"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا أَجَابَ عَبْدُ الرَّحْمٰنِ إِبْرَاهِيْمَ؟",
          "options": [
            "إِنَّ الْبَاخِرَةَ لَيْسَتْ فِيْ خَطَرٍ فِيْ هٰذَا الزَّمَانِ",
            "إِنَّهُ مُوَافِقٌ عَلَىٰ كَلَامِهِ",
            "لَمْ يُجِبْهُ"
          ],
          "answer": 0,
          "qEn": "How did Abdul Rahman answer Ibrahim?",
          "optionsEn": [
            "That the ship isn't in danger in this age",
            "That he agreed with him",
            "He didn't answer him"
          ]
        },
        {
          "q": "لِمَاذَا أَوْقَفَ الْمُعَلِّمُ الْمُنَاظَرَةَ؟",
          "options": [
            "لِأَنَّ الْوَقْتَ لَيْسَ وَقْتَ مُنَاظَرَةٍ وَبَقِيَ كَثِيْرٌ مِنَ الطَّلَبَةِ",
            "لِأَنَّ إِبْرَاهِيْمَ كَانَ عَلَىٰ خَطَأٍ",
            "لِأَنَّهُ غَضِبَ مِنْهُمَا"
          ],
          "answer": 0,
          "qEn": "Why did the teacher stop the debate?",
          "optionsEn": [
            "Because it wasn't the time for debate and many students remained",
            "Because Ibrahim was wrong",
            "Because he was angry with them"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "lines": true,
      "en": "Qasim said: \"I don't like to be a driver, or a captain, or a doctor -- rather I like to be a farmer. I sow and plow. And no one serves and benefits people like the farmer, and he is the one who grows the grains and vegetables, so people and animals eat.\"",
      "sentences": [
        {
          "id": "qr1-9-017",
          "page": 54,
          "ar": "قَالَ قَاسِمٌ: أَنَا لَا أُحِبُّ أَنْ أَكُوْنَ سَائِقاً أَوْ رُبَّاناً أَوْ طَبِيْباً، بَلْ أُحِبُّ أَنْ أَكُوْنَ فَلَّاحاً.",
          "en": "Qasim said: \"I don't like to be a driver, or a captain, or a doctor -- rather I like to be a farmer.\"",
          "tokens": [
            {
              "surface": "قَالَ",
              "lemma": "قال",
              "features": "perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "قَاسِمٌ",
              "lemma": "قاسم",
              "features": "proper.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Qāsim (a name)"
            },
            {
              "surface": "أَنَا",
              "lemma": "أنا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
            },
            {
              "surface": "أُحِبُّ",
              "lemma": "أحب",
              "features": "impf.1s",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "أَكُوْنَ",
              "lemma": "كان",
              "features": "impf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "سَائِقاً",
              "lemma": "سائق",
              "features": "indef.acc",
              "root": "س و ق",
              "pos": "noun",
              "gloss": "driver"
            },
            {
              "surface": "أَوْ",
              "lemma": "أو",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "or"
            },
            {
              "surface": "رُبَّاناً",
              "lemma": "ربان",
              "features": "indef.acc",
              "root": "ر ب ب",
              "pos": "noun",
              "gloss": "captain (of a ship)"
            },
            {
              "surface": "أَوْ",
              "lemma": "أو",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "or"
            },
            {
              "surface": "طَبِيْباً",
              "lemma": "طبيب",
              "features": "indef.acc",
              "root": "ط ب ب",
              "pos": "noun",
              "gloss": "doctor, physician"
            },
            {
              "surface": "بَلْ",
              "lemma": "بل",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "rather"
            },
            {
              "surface": "أُحِبُّ",
              "lemma": "أحب",
              "features": "impf.1s",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "أَكُوْنَ",
              "lemma": "كان",
              "features": "impf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "فَلَّاحاً",
              "lemma": "فلاح",
              "features": "indef.acc",
              "root": "ف ل ح",
              "pos": "noun",
              "gloss": "farmer"
            }
          ]
        },
        {
          "id": "qr1-9-018",
          "page": 54,
          "ar": "أَزْرَعُ وَأَحْرُثُ.",
          "en": "I sow and plow.",
          "tokens": [
            {
              "surface": "أَزْرَعُ",
              "lemma": "زرع",
              "features": "impf.1s",
              "root": "ز ر ع",
              "pos": "verb",
              "gloss": "to sow, plant"
            },
            {
              "surface": "وَأَحْرُثُ",
              "lemma": "حرث",
              "features": "conj+impf.1s",
              "root": "ح ر ث",
              "pos": "verb",
              "gloss": "to plow"
            }
          ]
        },
        {
          "id": "qr1-9-019",
          "page": 54,
          "ar": "وَلَا أَحَدٌ يَخْدِمُ النَّاسَ وَيَنْفَعُهُمْ كَالْفَلَّاحِ.",
          "en": "And no one serves and benefits people like the farmer.",
          "tokens": [
            {
              "surface": "وَلَا",
              "lemma": "لا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
            },
            {
              "surface": "أَحَدٌ",
              "lemma": "أحد",
              "features": "indef.nom",
              "root": "أ ح د",
              "pos": "noun",
              "gloss": "anyone, someone"
            },
            {
              "surface": "يَخْدِمُ",
              "lemma": "خدم",
              "features": "impf.3ms",
              "root": "خ د م",
              "pos": "verb",
              "gloss": "to serve"
            },
            {
              "surface": "النَّاسَ",
              "lemma": "ناس",
              "features": "def.acc",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
            },
            {
              "surface": "وَيَنْفَعُهُمْ",
              "lemma": "نفع",
              "features": "conj+impf.3ms+3mp",
              "root": "ن ف ع",
              "pos": "verb",
              "gloss": "to benefit"
            },
            {
              "surface": "كَالْفَلَّاحِ",
              "lemma": "فلاح",
              "features": "prep+def.gen",
              "root": "ف ل ح",
              "pos": "noun",
              "gloss": "farmer"
            }
          ]
        },
        {
          "id": "qr1-9-020",
          "page": 54,
          "ar": "وَهُوَ الَّذِيْ يَزْرَعُ الْحُبُوْبَ وَالْخُضَرَ فَيَأْكُلُ النَّاسُ وَالدَّوَابُّ.",
          "en": "And he is the one who grows the grains and vegetables, so people and animals eat.",
          "tokens": [
            {
              "surface": "وَهُوَ",
              "lemma": "هو",
              "features": "conj+nom",
              "root": "",
              "pos": "noun",
              "gloss": "he, it"
            },
            {
              "surface": "الَّذِيْ",
              "lemma": "الذي",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "who, that, which"
            },
            {
              "surface": "يَزْرَعُ",
              "lemma": "زرع",
              "features": "impf.3ms",
              "root": "ز ر ع",
              "pos": "verb",
              "gloss": "to sow, plant"
            },
            {
              "surface": "الْحُبُوْبَ",
              "lemma": "حبوب",
              "features": "pl.def.acc",
              "root": "ح ب ب",
              "pos": "noun",
              "gloss": "grains"
            },
            {
              "surface": "وَالْخُضَرَ",
              "lemma": "خضر",
              "features": "conj+pl.def.acc",
              "root": "خ ض ر",
              "pos": "noun",
              "gloss": "vegetables, greens"
            },
            {
              "surface": "فَيَأْكُلُ",
              "lemma": "أكل",
              "features": "conj+impf.3ms",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            },
            {
              "surface": "النَّاسُ",
              "lemma": "ناس",
              "features": "def.nom",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
            },
            {
              "surface": "وَالدَّوَابُّ",
              "lemma": "دواب",
              "features": "conj+pl.def.nom",
              "root": "د ب ب",
              "pos": "noun",
              "gloss": "animals, beasts"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا أَحَبَّ قَاسِمٌ أَنْ يَكُوْنَ فَلَّاحاً؟",
          "options": [
            "لِأَنَّهُ لَا أَحَدَ يَخْدِمُ النَّاسَ وَيَنْفَعُهُمْ كَالْفَلَّاحِ",
            "لِأَنَّهُ يُحِبُّ الْمَالَ",
            "لِأَنَّهُ لَا يُحِبُّ الدِّرَاسَةَ"
          ],
          "answer": 0,
          "qEn": "Why did Qasim like to be a farmer?",
          "optionsEn": [
            "Because no one serves and benefits people like the farmer",
            "Because he loves money",
            "Because he doesn't like studying"
          ]
        }
      ]
    },
    {
      "id": "p7",
      "lines": true,
      "en": "Sulayman said: \"I like to be a merchant -- I'd have a big shop in a big market; people would come to me and buy.\"",
      "sentences": [
        {
          "id": "qr1-9-021",
          "page": 54,
          "ar": "وَقَالَ سُلَيْمَانُ: أَنَا أُحِبُّ أَنْ أَكُوْنَ تَاجِراً.",
          "en": "Sulayman said: \"I like to be a merchant.\"",
          "tokens": [
            {
              "surface": "وَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "سُلَيْمَانُ",
              "lemma": "سليمان",
              "features": "proper.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Sulaymān (a name)"
            },
            {
              "surface": "أَنَا",
              "lemma": "أنا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "أُحِبُّ",
              "lemma": "أحب",
              "features": "impf.1s",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "أَكُوْنَ",
              "lemma": "كان",
              "features": "impf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "تَاجِراً",
              "lemma": "تاجر",
              "features": "indef.acc",
              "root": "ت ج ر",
              "pos": "noun",
              "gloss": "merchant"
            }
          ]
        },
        {
          "id": "qr1-9-022",
          "page": 54,
          "ar": "لِيْ دُكَّانٌ كَبِيْرٌ فِيْ سُوْقٍ كَبِيْرَةٍ يَأْتِي النَّاسُ إِلَيَّ وَيَشْتَرُوْنَ.",
          "en": "I'd have a big shop in a big market; people would come to me and buy.",
          "tokens": [
            {
              "surface": "لِيْ",
              "lemma": "لي",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "for, to"
            },
            {
              "surface": "دُكَّانٌ",
              "lemma": "دكان",
              "features": "indef.nom",
              "root": "د ك ن",
              "pos": "noun",
              "gloss": "shop"
            },
            {
              "surface": "كَبِيْرٌ",
              "lemma": "كبير",
              "features": "indef.nom",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "big, large"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "سُوْقٍ",
              "lemma": "سوق",
              "features": "indef.gen",
              "root": "س و ق",
              "pos": "noun",
              "gloss": "market"
            },
            {
              "surface": "كَبِيْرَةٍ",
              "lemma": "كبير",
              "features": "indef.gen",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "big, large"
            },
            {
              "surface": "يَأْتِي",
              "lemma": "أتى",
              "features": "impf.3ms",
              "root": "أ ت ي",
              "pos": "verb",
              "gloss": "to come to"
            },
            {
              "surface": "النَّاسُ",
              "lemma": "ناس",
              "features": "def.nom",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
            },
            {
              "surface": "إِلَيَّ",
              "lemma": "إلى",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "to, towards"
            },
            {
              "surface": "وَيَشْتَرُوْنَ",
              "lemma": "اشترى",
              "features": "conj+impf.3mp",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا أَحَبَّ سُلَيْمَانُ أَنْ يَكُوْنَ؟",
          "options": [
            "تَاجِراً لَهُ دُكَّانٌ كَبِيْرٌ",
            "جُنْدِيّاً",
            "عَالِماً"
          ],
          "answer": 0,
          "qEn": "What did Sulayman like to be?",
          "optionsEn": [
            "A merchant with a big shop",
            "A soldier",
            "A scholar"
          ]
        }
      ]
    },
    {
      "id": "p8",
      "lines": true,
      "en": "Hamid said: \"I like to be a skilled craftsman and an inventor -- I make and invent wondrous things.\"",
      "sentences": [
        {
          "id": "qr1-9-023",
          "page": 54,
          "ar": "وَقَالَ حَامِدٌ: أَنَا أُحِبُّ أَنْ أَكُوْنَ صَنَّاعاً مَاهِراً وَمُخْتَرِعاً أَصْنَعُ وَأَخْتَرِعُ الْأَشْيَاءَ الْعَجِيْبَةَ.",
          "en": "Hamid said: \"I like to be a skilled craftsman and an inventor -- I make and invent wondrous things.\"",
          "tokens": [
            {
              "surface": "وَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "حَامِدٌ",
              "lemma": "حامد",
              "features": "proper.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥāmid (a name)"
            },
            {
              "surface": "أَنَا",
              "lemma": "أنا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "أُحِبُّ",
              "lemma": "أحب",
              "features": "impf.1s",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "أَكُوْنَ",
              "lemma": "كان",
              "features": "impf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "صَنَّاعاً",
              "lemma": "صناع",
              "features": "indef.acc",
              "root": "ص ن ع",
              "pos": "noun",
              "gloss": "craftsman, artisan"
            },
            {
              "surface": "مَاهِراً",
              "lemma": "ماهر",
              "features": "indef.acc",
              "root": "م ه ر",
              "pos": "adj",
              "gloss": "skilled, skillful"
            },
            {
              "surface": "وَمُخْتَرِعاً",
              "lemma": "مخترع",
              "features": "conj+indef.acc",
              "root": "خ ر ع",
              "pos": "noun",
              "gloss": "inventor"
            },
            {
              "surface": "أَصْنَعُ",
              "lemma": "صنع",
              "features": "impf.1s",
              "root": "ص ن ع",
              "pos": "verb",
              "gloss": "to make, manufacture"
            },
            {
              "surface": "وَأَخْتَرِعُ",
              "lemma": "اخترع",
              "features": "conj+impf.1s",
              "root": "خ ر ع",
              "pos": "verb",
              "gloss": "to invent"
            },
            {
              "surface": "الْأَشْيَاءَ",
              "lemma": "شيء",
              "features": "pl.def.acc",
              "root": "ش ي أ",
              "pos": "noun",
              "gloss": "thing"
            },
            {
              "surface": "الْعَجِيْبَةَ",
              "lemma": "عجيبة",
              "features": "def.acc",
              "root": "ع ج ب",
              "pos": "adj",
              "gloss": "wondrous, strange"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا أَحَبَّ حَامِدٌ أَنْ يَكُوْنَ؟",
          "options": [
            "صَنَّاعاً مَاهِراً وَمُخْتَرِعاً",
            "رُبَّاناً",
            "تَاجِراً"
          ],
          "answer": 0,
          "qEn": "What did Hamid like to be?",
          "optionsEn": [
            "A skilled craftsman and inventor",
            "A ship's captain",
            "A merchant"
          ]
        }
      ]
    },
    {
      "id": "p9",
      "lines": true,
      "en": "Khalid said: \"I like to be a strong soldier -- I fight the disbelievers and polytheists and strive in Allah's cause.\"",
      "sentences": [
        {
          "id": "qr1-9-024",
          "page": 55,
          "ar": "وَقَالَ خَالِدٌ: أَنَا أُحِبُّ أَنْ أَكُوْنَ جُنْدِيّاً قَوِيّاً أُقَاتِلُ الْكُفَّارَ وَالْمُشْرِكِيْنَ وَأُجَاهِدُ فِيْ سَبِيْلِ اللهِ.",
          "en": "Khalid said: \"I like to be a strong soldier -- I fight the disbelievers and polytheists and strive in Allah's cause.\"",
          "tokens": [
            {
              "surface": "وَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "proper.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khālid (a name)"
            },
            {
              "surface": "أَنَا",
              "lemma": "أنا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "أُحِبُّ",
              "lemma": "أحب",
              "features": "impf.1s",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "أَكُوْنَ",
              "lemma": "كان",
              "features": "impf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "جُنْدِيّاً",
              "lemma": "جندي",
              "features": "indef.acc",
              "root": "ج ن د",
              "pos": "noun",
              "gloss": "soldier"
            },
            {
              "surface": "قَوِيّاً",
              "lemma": "قوي",
              "features": "indef.acc",
              "root": "ق و ي",
              "pos": "adj",
              "gloss": "strong"
            },
            {
              "surface": "أُقَاتِلُ",
              "lemma": "قاتل",
              "features": "impf.1s",
              "root": "ق ت ل",
              "pos": "verb",
              "gloss": "to fight"
            },
            {
              "surface": "الْكُفَّارَ",
              "lemma": "كافر",
              "features": "pl.def.acc",
              "root": "ك ف ر",
              "pos": "noun",
              "gloss": "disbeliever"
            },
            {
              "surface": "وَالْمُشْرِكِيْنَ",
              "lemma": "مشرك",
              "features": "conj+pl.def.acc",
              "root": "ش ر ك",
              "pos": "noun",
              "gloss": "polytheist, idolater"
            },
            {
              "surface": "وَأُجَاهِدُ",
              "lemma": "جاهد",
              "features": "conj+impf.1s",
              "root": "ج ه د",
              "pos": "verb",
              "gloss": "to strive, struggle"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "سَبِيْلِ",
              "lemma": "سبيل",
              "features": "gen.constr",
              "root": "س ب ل",
              "pos": "noun",
              "gloss": "path, way"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا أَحَبَّ خَالِدٌ أَنْ يَكُوْنَ؟",
          "options": [
            "جُنْدِيّاً قَوِيّاً يُجَاهِدُ فِيْ سَبِيْلِ اللهِ",
            "فَلَّاحاً",
            "خَادِماً"
          ],
          "answer": 0,
          "qEn": "What did Khalid like to be?",
          "optionsEn": [
            "A strong soldier who strives in Allah's cause",
            "A farmer",
            "A servant"
          ]
        }
      ]
    },
    {
      "id": "p10",
      "lines": true,
      "en": "Abdul Kareem said: \"I like to be very rich. I would wear what I like, eat what I crave, and travel wherever I want. And I'd always have much money, and live in a big palace.\" The boys laughed at Abdul Kareem's statement, and Abdul Kareem was embarrassed.",
      "sentences": [
        {
          "id": "qr1-9-025",
          "page": 55,
          "ar": "وَقَالَ عَبْدُ الْكَرِيْمِ: أَنَا أُحِبُّ أَنْ أَكُوْنَ غَنِيّاً كَبِيْراً.",
          "en": "Abdul Kareem said: \"I like to be very rich.\"",
          "tokens": [
            {
              "surface": "وَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "عَبْدُ",
              "lemma": "عبدالكريم",
              "features": "nom.constr",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Karīm (a name)"
            },
            {
              "surface": "الْكَرِيْمِ",
              "lemma": "عبدالكريم",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Karīm (a name)"
            },
            {
              "surface": "أَنَا",
              "lemma": "أنا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "أُحِبُّ",
              "lemma": "أحب",
              "features": "impf.1s",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "أَكُوْنَ",
              "lemma": "كان",
              "features": "impf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "غَنِيّاً",
              "lemma": "غني",
              "features": "indef.acc",
              "root": "غ ن ي",
              "pos": "adj",
              "gloss": "rich, wealthy"
            },
            {
              "surface": "كَبِيْراً",
              "lemma": "كبير",
              "features": "indef.acc",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "big, large"
            }
          ]
        },
        {
          "id": "qr1-9-026",
          "page": 55,
          "ar": "أَلْبَسُ مَا أُحِبُّ وَآكُلُ مَا أَشْتَهِيْ وَأُسَافِرُ إِلَىٰ أَيْنَ أُرِيْدُ.",
          "en": "I would wear what I like, eat what I crave, and travel wherever I want.",
          "tokens": [
            {
              "surface": "أَلْبَسُ",
              "lemma": "لبس",
              "features": "impf.1s",
              "root": "ل ب س",
              "pos": "verb",
              "gloss": "to wear"
            },
            {
              "surface": "مَا",
              "lemma": "ما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "what; that which"
            },
            {
              "surface": "أُحِبُّ",
              "lemma": "أحب",
              "features": "impf.1s",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "وَآكُلُ",
              "lemma": "أكل",
              "features": "conj+impf.1s",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            },
            {
              "surface": "مَا",
              "lemma": "ما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "what; that which"
            },
            {
              "surface": "أَشْتَهِيْ",
              "lemma": "اشتهى",
              "features": "impf.1s",
              "root": "ش ه و",
              "pos": "verb",
              "gloss": "to desire, crave"
            },
            {
              "surface": "وَأُسَافِرُ",
              "lemma": "سافر",
              "features": "conj+impf.1s",
              "root": "س ف ر",
              "pos": "verb",
              "gloss": "to travel"
            },
            {
              "surface": "إِلَىٰ",
              "lemma": "إلى",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "to, towards"
            },
            {
              "surface": "أَيْنَ",
              "lemma": "أين",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "where"
            },
            {
              "surface": "أُرِيْدُ",
              "lemma": "أراد",
              "features": "impf.1s",
              "root": "ر و د",
              "pos": "verb",
              "gloss": "to want"
            }
          ]
        },
        {
          "id": "qr1-9-027",
          "page": 55,
          "ar": "وَدَائِماً عِنْدِيْ مَالٌ كَثِيْرٌ وَأَسْكُنُ فِيْ قَصْرٍ كَبِيْرٍ.",
          "en": "And I'd always have much money, and live in a big palace.",
          "tokens": [
            {
              "surface": "وَدَائِماً",
              "lemma": "دائما",
              "features": "conj+indef.acc",
              "root": "د و م",
              "pos": "adv",
              "gloss": "always"
            },
            {
              "surface": "عِنْدِيْ",
              "lemma": "عند",
              "features": "prep+1s",
              "root": "ع ن د",
              "pos": "prep",
              "gloss": "at, by, with"
            },
            {
              "surface": "مَالٌ",
              "lemma": "مال",
              "features": "indef.nom",
              "root": "م و ل",
              "pos": "noun",
              "gloss": "wealth, money"
            },
            {
              "surface": "كَثِيْرٌ",
              "lemma": "كثير",
              "features": "indef.nom",
              "root": "ك ث ر",
              "pos": "adj",
              "gloss": "much, many"
            },
            {
              "surface": "وَأَسْكُنُ",
              "lemma": "سكن",
              "features": "conj+impf.1s",
              "root": "س ك ن",
              "pos": "verb",
              "gloss": "to dwell, live"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "قَصْرٍ",
              "lemma": "قصر",
              "features": "indef.gen",
              "root": "ق ص ر",
              "pos": "noun",
              "gloss": "palace"
            },
            {
              "surface": "كَبِيْرٍ",
              "lemma": "كبير",
              "features": "indef.gen",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "big, large"
            }
          ]
        },
        {
          "id": "qr1-9-028",
          "page": 55,
          "ar": "وَضَحِكَ الْأَوْلَادُ مِنْ قَوْلِ عَبْدِ الْكَرِيْمِ وَخَجِلَ عَبْدُ الْكَرِيْمِ.",
          "en": "The boys laughed at Abdul Kareem's statement, and Abdul Kareem was embarrassed.",
          "tokens": [
            {
              "surface": "وَضَحِكَ",
              "lemma": "ضحك",
              "features": "conj+perf.3ms",
              "root": "ض ح ك",
              "pos": "verb",
              "gloss": "to laugh"
            },
            {
              "surface": "الْأَوْلَادُ",
              "lemma": "ولد",
              "features": "pl.def.nom",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "مِنْ",
              "lemma": "من",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "from"
            },
            {
              "surface": "قَوْلِ",
              "lemma": "قول",
              "features": "gen.constr",
              "root": "ق و ل",
              "pos": "noun",
              "gloss": "statement, saying"
            },
            {
              "surface": "عَبْدِ",
              "lemma": "عبدالكريم",
              "features": "gen.constr",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Karīm (a name)"
            },
            {
              "surface": "الْكَرِيْمِ",
              "lemma": "عبدالكريم",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Karīm (a name)"
            },
            {
              "surface": "وَخَجِلَ",
              "lemma": "خجل",
              "features": "conj+perf.3ms",
              "root": "خ ج ل",
              "pos": "verb",
              "gloss": "to feel shy, embarrassed"
            },
            {
              "surface": "عَبْدُ",
              "lemma": "عبدالكريم",
              "features": "nom.constr",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Karīm (a name)"
            },
            {
              "surface": "الْكَرِيْمِ",
              "lemma": "عبدالكريم",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Karīm (a name)"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا أَحَبَّ عَبْدُ الْكَرِيْمِ أَنْ يَكُوْنَ؟",
          "options": [
            "غَنِيّاً يَسْكُنُ فِيْ قَصْرٍ كَبِيْرٍ",
            "عَالِماً",
            "جُنْدِيّاً"
          ],
          "answer": 0,
          "qEn": "What did Abdul Kareem like to be?",
          "optionsEn": [
            "Rich, living in a big palace",
            "A scholar",
            "A soldier"
          ]
        },
        {
          "q": "مَاذَا فَعَلَ الْأَوْلَادُ حِيْنَ سَمِعُوا قَوْلَ عَبْدِ الْكَرِيْمِ؟",
          "options": [
            "ضَحِكُوا مِنْهُ فَخَجِلَ",
            "صَفَّقُوا لَهُ",
            "لَمْ يَقُوْلُوا شَيْئاً"
          ],
          "answer": 0,
          "qEn": "What did the boys do when they heard Abdul Kareem's statement?",
          "optionsEn": [
            "They laughed at him, so he felt embarrassed",
            "They applauded him",
            "They said nothing"
          ]
        }
      ]
    },
    {
      "id": "p11",
      "lines": true,
      "en": "Muhammad said: \"I like to be a scholar who fears Allah and worships Him, and admonishes people, commanding them to good, forbidding them from evil, and warning them of Allah's punishment.\"",
      "sentences": [
        {
          "id": "qr1-9-029",
          "page": 55,
          "ar": "وَقَالَ مُحَمَّدٌ: أَنَا أُحِبُّ أَنْ أَكُوْنَ عَالِماً أَخَافُ اللهَ وَأَعْبُدُهُ.",
          "en": "Muhammad said: \"I like to be a scholar who fears Allah and worships Him.\"",
          "tokens": [
            {
              "surface": "وَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "مُحَمَّدٌ",
              "lemma": "محمد",
              "features": "proper.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Muḥammad (a name)"
            },
            {
              "surface": "أَنَا",
              "lemma": "أنا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "أُحِبُّ",
              "lemma": "أحب",
              "features": "impf.1s",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "أَكُوْنَ",
              "lemma": "كان",
              "features": "impf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "عَالِماً",
              "lemma": "عالم",
              "features": "indef.acc",
              "root": "ع ل م",
              "pos": "noun",
              "gloss": "scholar"
            },
            {
              "surface": "أَخَافُ",
              "lemma": "خاف",
              "features": "impf.1s",
              "root": "خ و ف",
              "pos": "verb",
              "gloss": "to fear"
            },
            {
              "surface": "اللهَ",
              "lemma": "الله",
              "features": "acc",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "وَأَعْبُدُهُ",
              "lemma": "عبد",
              "features": "conj+impf.1s+3ms",
              "root": "ع ب د",
              "pos": "verb",
              "gloss": "to worship"
            }
          ]
        },
        {
          "id": "qr1-9-030",
          "page": 55,
          "ar": "وَأَعِظُ النَّاسَ وَآمُرُهُمْ بِالْمَعْرُوْفِ وَأَنْهَاهُمْ عَنِ الْمُنْكَرِ وَأُحَذِّرُهُمْ عَذَابَ اللهِ.",
          "en": "And admonish people, command them to good, forbid them from evil, and warn them of Allah's punishment.",
          "tokens": [
            {
              "surface": "وَأَعِظُ",
              "lemma": "وعظ",
              "features": "conj+impf.1s",
              "root": "و ع ظ",
              "pos": "verb",
              "gloss": "to admonish, exhort"
            },
            {
              "surface": "النَّاسَ",
              "lemma": "ناس",
              "features": "def.acc",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
            },
            {
              "surface": "وَآمُرُهُمْ",
              "lemma": "أمر",
              "features": "conj+impf.1s+3mp",
              "root": "أ م ر",
              "pos": "verb",
              "gloss": "to order, command"
            },
            {
              "surface": "بِالْمَعْرُوْفِ",
              "lemma": "معروف",
              "features": "prep+def.gen",
              "root": "ع ر ف",
              "pos": "noun",
              "gloss": "what is right, good conduct"
            },
            {
              "surface": "وَأَنْهَاهُمْ",
              "lemma": "نهى",
              "features": "conj+impf.1s+3mp",
              "root": "ن ه ي",
              "pos": "verb",
              "gloss": "to forbid"
            },
            {
              "surface": "عَنِ",
              "lemma": "عن",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "about, from"
            },
            {
              "surface": "الْمُنْكَرِ",
              "lemma": "منكر",
              "features": "def.gen",
              "root": "ن ك ر",
              "pos": "noun",
              "gloss": "what is wrong, evil conduct"
            },
            {
              "surface": "وَأُحَذِّرُهُمْ",
              "lemma": "حذر",
              "features": "conj+impf.1s+3mp",
              "root": "ح ذ ر",
              "pos": "verb",
              "gloss": "to warn"
            },
            {
              "surface": "عَذَابَ",
              "lemma": "عذاب",
              "features": "acc.constr",
              "root": "ع ذ ب",
              "pos": "noun",
              "gloss": "punishment, torment"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا أَحَبَّ مُحَمَّدٌ أَنْ يَكُوْنَ؟",
          "options": [
            "عَالِماً يَخَافُ اللهَ وَيَعْبُدُهُ وَيَعِظُ النَّاسَ",
            "تَاجِراً غَنِيّاً",
            "سَائِقاً فِي الْقِطَارِ"
          ],
          "answer": 0,
          "qEn": "What did Muhammad like to be?",
          "optionsEn": [
            "A scholar who fears and worships Allah and admonishes people",
            "A rich merchant",
            "A driver on the train"
          ]
        }
      ]
    },
    {
      "id": "p12",
      "lines": true,
      "en": "The teacher said: \"Well done, my children -- I pray for your success and achievement. But be Muslims, seek Allah through your work, benefit the faith through your occupation, and serve the ummah through your knowledge.\"",
      "sentences": [
        {
          "id": "qr1-9-031",
          "page": 55,
          "ar": "قَالَ الْمُعَلِّمُ: أَحْسَنْتُمْ يَا أَوْلَادِيْ، وَأَنَا أَدْعُوْ لَكُمْ بِالتَّوْفِيْقِ وَالنَّجَاحِ.",
          "en": "The teacher said: \"Well done, my children -- I pray for your success and achievement.\"",
          "tokens": [
            {
              "surface": "قَالَ",
              "lemma": "قال",
              "features": "perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "الْمُعَلِّمُ",
              "lemma": "معلم",
              "features": "def.nom",
              "root": "ع ل م",
              "pos": "noun",
              "gloss": "teacher"
            },
            {
              "surface": "أَحْسَنْتُمْ",
              "lemma": "أحسن",
              "features": "perf.2mp",
              "root": "ح س ن",
              "pos": "verb",
              "gloss": "to do well"
            },
            {
              "surface": "يَا",
              "lemma": "يا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "O (vocative)"
            },
            {
              "surface": "أَوْلَادِيْ",
              "lemma": "ولد",
              "features": "pl.nom+1s",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "وَأَنَا",
              "lemma": "أنا",
              "features": "conj+nom",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "أَدْعُوْ",
              "lemma": "دعا",
              "features": "impf.1s",
              "root": "د ع و",
              "pos": "verb",
              "gloss": "to pray for, invoke blessing upon"
            },
            {
              "surface": "لَكُمْ",
              "lemma": "لي",
              "features": "prep+2mp",
              "root": "",
              "pos": "prep",
              "gloss": "for, to"
            },
            {
              "surface": "بِالتَّوْفِيْقِ",
              "lemma": "توفيق",
              "features": "prep+def.gen",
              "root": "و ف ق",
              "pos": "noun",
              "gloss": "success, facilitation (from Allah)"
            },
            {
              "surface": "وَالنَّجَاحِ",
              "lemma": "نجاح",
              "features": "conj+def.gen",
              "root": "ن ج ح",
              "pos": "noun",
              "gloss": "success"
            }
          ]
        },
        {
          "id": "qr1-9-032",
          "page": 55,
          "ar": "وَلٰكِنْ كُوْنُوا مُسْلِمِيْنَ وَابْتَغُوا اللهَ بِعَمَلِكُمْ وَانْفَعُوا الدِّيْنَ بِشُغْلِكُمْ وَاخْدِمُوا الْأُمَّةَ بِعِلْمِكُمْ.",
          "en": "But be Muslims, seek Allah through your work, benefit the faith through your occupation, and serve the ummah through your knowledge.",
          "tokens": [
            {
              "surface": "وَلٰكِنْ",
              "lemma": "لكن",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "but"
            },
            {
              "surface": "كُوْنُوا",
              "lemma": "كان",
              "features": "imp.2mp",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "مُسْلِمِيْنَ",
              "lemma": "مسلم",
              "features": "pl.indef.acc",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "Muslim"
            },
            {
              "surface": "وَابْتَغُوا",
              "lemma": "ابتغى",
              "features": "conj+imp.2mp",
              "root": "ب غ ي",
              "pos": "verb",
              "gloss": "to seek"
            },
            {
              "surface": "اللهَ",
              "lemma": "الله",
              "features": "acc",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "بِعَمَلِكُمْ",
              "lemma": "عمل",
              "features": "prep+gen+2mp",
              "root": "ع م ل",
              "pos": "noun",
              "gloss": "work, deed"
            },
            {
              "surface": "وَانْفَعُوا",
              "lemma": "نفع",
              "features": "conj+imp.2mp",
              "root": "ن ف ع",
              "pos": "verb",
              "gloss": "to benefit"
            },
            {
              "surface": "الدِّيْنَ",
              "lemma": "دين",
              "features": "def.acc",
              "root": "د ي ن",
              "pos": "noun",
              "gloss": "religion"
            },
            {
              "surface": "بِشُغْلِكُمْ",
              "lemma": "شغل",
              "features": "prep+gen+2mp",
              "root": "ش غ ل",
              "pos": "noun",
              "gloss": "work, occupation"
            },
            {
              "surface": "وَاخْدِمُوا",
              "lemma": "خدم",
              "features": "conj+imp.2mp",
              "root": "خ د م",
              "pos": "verb",
              "gloss": "to serve"
            },
            {
              "surface": "الْأُمَّةَ",
              "lemma": "أمة",
              "features": "def.acc",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "nation, community"
            },
            {
              "surface": "بِعِلْمِكُمْ",
              "lemma": "علم",
              "features": "prep+gen+2mp",
              "root": "ع ل م",
              "pos": "noun",
              "gloss": "knowledge"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا نَصَحَ الْمُعَلِّمُ التَّلَامِيْذَ فِيْ آخِرِ كَلَامِهِ؟",
          "options": [
            "أَنْ يَكُوْنُوا مُسْلِمِيْنَ وَيَبْتَغُوا اللهَ بِعَمَلِهِمْ",
            "أَنْ يَجْتَهِدُوا فِي الِامْتِحَانِ",
            "أَنْ يَحْتَرِمُوا وَالِدَيْهِمْ فَقَطْ"
          ],
          "answer": 0,
          "qEn": "What did the teacher advise the students at the end of his speech?",
          "optionsEn": [
            "To be Muslims and seek Allah through their work",
            "To work hard for the exam",
            "To respect only their parents"
          ]
        }
      ]
    },
    {
      "id": "p13",
      "lines": true,
      "en": "The students said: \"And what do you say, teacher, about Abdul Kareem and his palace?\" The teacher said: \"Wealth is a blessing from Allah for which gratitude is due. Very happy is he to whom Allah gives wealth, for he spends from it secretly and openly, seeking through it Allah's pleasure, and serving Islam through it. And it has come in the noble hadith: 'There is no envy except in two cases: a man to whom Allah gave wealth, and He empowered him to spend it in truth, and a man to whom Allah gave wisdom, so he judges by it and teaches it.'\"",
      "sentences": [
        {
          "id": "qr1-9-033",
          "page": 55,
          "ar": "قَالَ التَّلَامِيْذُ: وَمَاذَا تَقُوْلُ أَيُّهَا الْأُسْتَاذُ عَنْ عَبْدِ الْكَرِيْمِ وَقَصْرِهِ؟",
          "en": "The students said: \"And what do you say, teacher, about Abdul Kareem and his palace?\"",
          "tokens": [
            {
              "surface": "قَالَ",
              "lemma": "قال",
              "features": "perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "التَّلَامِيْذُ",
              "lemma": "تلميذ",
              "features": "pl.def.nom",
              "root": "ت ل م ذ",
              "pos": "noun",
              "gloss": "student, pupil"
            },
            {
              "surface": "وَمَاذَا",
              "lemma": "ماذا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "what"
            },
            {
              "surface": "تَقُوْلُ",
              "lemma": "قال",
              "features": "impf.2ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "أَيُّهَا",
              "lemma": "أيها",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "O (vocative)"
            },
            {
              "surface": "الْأُسْتَاذُ",
              "lemma": "أستاذ",
              "features": "def.nom",
              "root": "",
              "pos": "noun",
              "gloss": "professor, teacher"
            },
            {
              "surface": "عَنْ",
              "lemma": "عن",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "about, from"
            },
            {
              "surface": "عَبْدِ",
              "lemma": "عبدالكريم",
              "features": "gen.constr",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Karīm (a name)"
            },
            {
              "surface": "الْكَرِيْمِ",
              "lemma": "عبدالكريم",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Karīm (a name)"
            },
            {
              "surface": "وَقَصْرِهِ",
              "lemma": "قصر",
              "features": "conj+gen+3ms",
              "root": "ق ص ر",
              "pos": "noun",
              "gloss": "palace"
            }
          ]
        },
        {
          "id": "qr1-9-034",
          "page": 55,
          "ar": "قَالَ الْمُعَلِّمُ: الْمَالُ نِعْمَةٌ مِنَ اللهِ يَجِبُ عَلَيْهَا الشُّكْرُ.",
          "en": "The teacher said: \"Wealth is a blessing from Allah for which gratitude is due.\"",
          "tokens": [
            {
              "surface": "قَالَ",
              "lemma": "قال",
              "features": "perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "الْمُعَلِّمُ",
              "lemma": "معلم",
              "features": "def.nom",
              "root": "ع ل م",
              "pos": "noun",
              "gloss": "teacher"
            },
            {
              "surface": "الْمَالُ",
              "lemma": "مال",
              "features": "def.nom",
              "root": "م و ل",
              "pos": "noun",
              "gloss": "wealth, money"
            },
            {
              "surface": "نِعْمَةٌ",
              "lemma": "نعمة",
              "features": "indef.nom",
              "root": "ن ع م",
              "pos": "noun",
              "gloss": "blessing, favor"
            },
            {
              "surface": "مِنَ",
              "lemma": "من",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "from"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "يَجِبُ",
              "lemma": "وجب",
              "features": "impf.3ms",
              "root": "و ج ب",
              "pos": "verb",
              "gloss": "to be obligatory"
            },
            {
              "surface": "عَلَيْهَا",
              "lemma": "على",
              "features": "prep+3fs",
              "root": "",
              "pos": "prep",
              "gloss": "upon, to"
            },
            {
              "surface": "الشُّكْرُ",
              "lemma": "شكر",
              "features": "def.nom",
              "root": "ش ك ر",
              "pos": "noun",
              "gloss": "thanks, gratitude"
            }
          ]
        },
        {
          "id": "qr1-9-035",
          "page": 55,
          "ar": "وَسَعِيْدٌ جِدّاً مَنْ آتَاهُ اللهُ مَالاً فَهُوَ يُنْفِقُ مِنْهُ سِرّاً وَجَهْراً.",
          "en": "Very happy is he to whom Allah gives wealth, for he spends from it secretly and openly.",
          "tokens": [
            {
              "surface": "وَسَعِيْدٌ",
              "lemma": "سعيد-صفة",
              "features": "conj+indef.nom",
              "root": "س ع د",
              "pos": "adj",
              "gloss": "happy"
            },
            {
              "surface": "جِدّاً",
              "lemma": "جدا",
              "features": "indef.acc",
              "root": "ج د د",
              "pos": "adv",
              "gloss": "very"
            },
            {
              "surface": "مَنْ",
              "lemma": "من-اسم",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "who, whoever"
            },
            {
              "surface": "آتَاهُ",
              "lemma": "آتى",
              "features": "perf.3ms+3ms",
              "root": "أ ت ي",
              "pos": "verb",
              "gloss": "to give"
            },
            {
              "surface": "اللهُ",
              "lemma": "الله",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "مَالاً",
              "lemma": "مال",
              "features": "indef.acc",
              "root": "م و ل",
              "pos": "noun",
              "gloss": "wealth, money"
            },
            {
              "surface": "فَهُوَ",
              "lemma": "هو",
              "features": "conj+nom",
              "root": "",
              "pos": "noun",
              "gloss": "he, it"
            },
            {
              "surface": "يُنْفِقُ",
              "lemma": "أنفق",
              "features": "impf.3ms",
              "root": "ن ف ق",
              "pos": "verb",
              "gloss": "to spend"
            },
            {
              "surface": "مِنْهُ",
              "lemma": "من",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "from"
            },
            {
              "surface": "سِرّاً",
              "lemma": "سر",
              "features": "indef.acc",
              "root": "س ر ر",
              "pos": "noun",
              "gloss": "secret; secretly"
            },
            {
              "surface": "وَجَهْراً",
              "lemma": "جهر",
              "features": "conj+indef.acc",
              "root": "ج ه ر",
              "pos": "noun",
              "gloss": "openly, publicly"
            }
          ]
        },
        {
          "id": "qr1-9-036",
          "page": 56,
          "ar": "وَيَبْتَغِيْ بِهِ مَرْضَاةَ اللهِ وَيَخْدِمُ بِهِ الْإِسْلَامَ.",
          "en": "He seeks through it Allah's pleasure, and serves Islam through it.",
          "tokens": [
            {
              "surface": "وَيَبْتَغِيْ",
              "lemma": "ابتغى",
              "features": "conj+impf.3ms",
              "root": "ب غ ي",
              "pos": "verb",
              "gloss": "to seek"
            },
            {
              "surface": "بِهِ",
              "lemma": "ب",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "with, by, through"
            },
            {
              "surface": "مَرْضَاةَ",
              "lemma": "مرضاة",
              "features": "acc.constr",
              "root": "ر ض و",
              "pos": "noun",
              "gloss": "pleasure, good pleasure"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "وَيَخْدِمُ",
              "lemma": "خدم",
              "features": "conj+impf.3ms",
              "root": "خ د م",
              "pos": "verb",
              "gloss": "to serve"
            },
            {
              "surface": "بِهِ",
              "lemma": "ب",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "with, by, through"
            },
            {
              "surface": "الْإِسْلَامَ",
              "lemma": "إسلام",
              "features": "def.acc",
              "root": "س ل م",
              "pos": "proper",
              "gloss": "Islam"
            }
          ]
        },
        {
          "id": "qr1-9-037",
          "page": 56,
          "ar": "وَقَدْ جَاءَ فِيْ الْحَدِيْثِ الشَّرِيْفِ: «لَا حَسَدَ إِلَّا فِيْ اثْنَتَيْنِ».",
          "en": "And it has come in the noble hadith: \"There is no envy except in two cases:\"",
          "tokens": [
            {
              "surface": "وَقَدْ",
              "lemma": "قد",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "already, indeed"
            },
            {
              "surface": "جَاءَ",
              "lemma": "جاء",
              "features": "perf.3ms",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الْحَدِيْثِ",
              "lemma": "حديث",
              "features": "def.gen",
              "root": "ح د ث",
              "pos": "noun",
              "gloss": "narration, ḥadīth"
            },
            {
              "surface": "الشَّرِيْفِ",
              "lemma": "شريف",
              "features": "def.gen",
              "root": "ش ر ف",
              "pos": "adj",
              "gloss": "noble"
            },
            {
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
            },
            {
              "surface": "حَسَدَ",
              "lemma": "حسد",
              "features": "acc",
              "root": "ح س د",
              "pos": "noun",
              "gloss": "envy"
            },
            {
              "surface": "إِلَّا",
              "lemma": "إلا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "except"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "اثْنَتَيْنِ",
              "lemma": "اثنتان",
              "features": "indef.gen.du",
              "root": "ث ن ي",
              "pos": "num",
              "gloss": "two (fem.)"
            }
          ]
        },
        {
          "id": "qr1-9-038",
          "page": 56,
          "ar": "رَجُلٌ آتَاهُ اللهُ مَالاً فَسَلَّطَهُ عَلَىٰ هَلَكَتِهِ فِي الْحَقِّ.",
          "en": "A man to whom Allah gave wealth, and He empowered him to spend it in truth.",
          "tokens": [
            {
              "surface": "رَجُلٌ",
              "lemma": "رجل",
              "features": "indef.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
            },
            {
              "surface": "آتَاهُ",
              "lemma": "آتى",
              "features": "perf.3ms+3ms",
              "root": "أ ت ي",
              "pos": "verb",
              "gloss": "to give"
            },
            {
              "surface": "اللهُ",
              "lemma": "الله",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "مَالاً",
              "lemma": "مال",
              "features": "indef.acc",
              "root": "م و ل",
              "pos": "noun",
              "gloss": "wealth, money"
            },
            {
              "surface": "فَسَلَّطَهُ",
              "lemma": "سلط",
              "features": "conj+perf.3ms+3ms",
              "root": "س ل ط",
              "pos": "verb",
              "gloss": "to give power, empower"
            },
            {
              "surface": "عَلَىٰ",
              "lemma": "على",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, to"
            },
            {
              "surface": "هَلَكَتِهِ",
              "lemma": "هلكة",
              "features": "gen+3ms",
              "root": "ه ل ك",
              "pos": "noun",
              "gloss": "spending, expending"
            },
            {
              "surface": "فِي",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الْحَقِّ",
              "lemma": "حق",
              "features": "def.gen",
              "root": "ح ق ق",
              "pos": "noun",
              "gloss": "truth, what is right"
            }
          ]
        },
        {
          "id": "qr1-9-039",
          "page": 56,
          "ar": "وَرَجُلٌ آتَاهُ اللهُ حِكْمَةً فَهُوَ يَقْضِيْ بِهَا وَيُعَلِّمُهَا.",
          "en": "And a man to whom Allah gave wisdom, so he judges by it and teaches it.",
          "tokens": [
            {
              "surface": "وَرَجُلٌ",
              "lemma": "رجل",
              "features": "conj+indef.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
            },
            {
              "surface": "آتَاهُ",
              "lemma": "آتى",
              "features": "perf.3ms+3ms",
              "root": "أ ت ي",
              "pos": "verb",
              "gloss": "to give"
            },
            {
              "surface": "اللهُ",
              "lemma": "الله",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "حِكْمَةً",
              "lemma": "حكمة",
              "features": "indef.acc",
              "root": "ح ك م",
              "pos": "noun",
              "gloss": "wisdom"
            },
            {
              "surface": "فَهُوَ",
              "lemma": "هو",
              "features": "conj+nom",
              "root": "",
              "pos": "noun",
              "gloss": "he, it"
            },
            {
              "surface": "يَقْضِيْ",
              "lemma": "قضى",
              "features": "impf.3ms",
              "root": "ق ض ي",
              "pos": "verb",
              "gloss": "to judge, decide"
            },
            {
              "surface": "بِهَا",
              "lemma": "ب",
              "features": "prep+3fs",
              "root": "",
              "pos": "prep",
              "gloss": "with, by, through"
            },
            {
              "surface": "وَيُعَلِّمُهَا",
              "lemma": "علّم",
              "features": "conj+impf.3ms+3fs",
              "root": "ع ل م",
              "pos": "verb",
              "gloss": "to teach"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا قَالَ الْمُعَلِّمُ عَنِ الْمَالِ؟",
          "options": [
            "إِنَّهُ نِعْمَةٌ مِنَ اللهِ يَجِبُ عَلَيْهَا الشُّكْرُ",
            "إِنَّهُ سَبَبُ كُلِّ شَرٍّ",
            "إِنَّهُ لَا فَائِدَةَ مِنْهُ"
          ],
          "answer": 0,
          "qEn": "What did the teacher say about wealth?",
          "optionsEn": [
            "That it is a blessing from Allah for which gratitude is due",
            "That it is the cause of all evil",
            "That it is useless"
          ]
        },
        {
          "q": "بِمَاذَا جَاءَ الْحَدِيْثُ الشَّرِيْفُ؟",
          "options": [
            "لَا حَسَدَ إِلَّا فِيْ اثْنَتَيْنِ: رَجُلٌ آتَاهُ اللهُ مَالاً وَرَجُلٌ آتَاهُ اللهُ حِكْمَةً",
            "مَنْ صَبَرَ ظَفِرَ",
            "الدِّيْنُ النَّصِيْحَةُ"
          ],
          "answer": 0,
          "qEn": "What did the noble hadith say?",
          "optionsEn": [
            "\"There is no envy except in two cases: a man given wealth, and a man given wisdom\"",
            "\"Whoever is patient triumphs\"",
            "\"Religion is sincere counsel\""
          ]
        }
      ]
    },
    {
      "id": "p14",
      "lines": true,
      "en": "Our master Uthman was rich, and our master Abdul Rahman ibn Awf was rich. Abdul Kareem raised his head and said: \"I will strive to serve Islam with my wealth and seek Allah's pleasure through it.\"",
      "sentences": [
        {
          "id": "qr1-9-040",
          "page": 56,
          "ar": "وَقَدْ كَانَ سَيِّدُنَا عُثْمَانُ غَنِيّاً وَسَيِّدُنَا عَبْدُ الرَّحْمٰنِ بْنُ عَوْفٍ غَنِيّاً.",
          "en": "Our master Uthman was rich, and our master Abdul Rahman ibn Awf was rich.",
          "tokens": [
            {
              "surface": "وَقَدْ",
              "lemma": "قد",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "already, indeed"
            },
            {
              "surface": "كَانَ",
              "lemma": "كان",
              "features": "perf.3ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "سَيِّدُنَا",
              "lemma": "سيد",
              "features": "nom+1p",
              "root": "س و د",
              "pos": "noun",
              "gloss": "master, sir"
            },
            {
              "surface": "عُثْمَانُ",
              "lemma": "عثمان",
              "features": "proper.nom",
              "root": "",
              "pos": "proper",
              "gloss": "ʿUthmān (a name)"
            },
            {
              "surface": "غَنِيّاً",
              "lemma": "غني",
              "features": "indef.acc",
              "root": "غ ن ي",
              "pos": "adj",
              "gloss": "rich, wealthy"
            },
            {
              "surface": "وَسَيِّدُنَا",
              "lemma": "سيد",
              "features": "conj+nom+1p",
              "root": "س و د",
              "pos": "noun",
              "gloss": "master, sir"
            },
            {
              "surface": "عَبْدُ",
              "lemma": "عبدالرحمن",
              "features": "nom.constr",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Raḥmān (a name)"
            },
            {
              "surface": "الرَّحْمٰنِ",
              "lemma": "عبدالرحمن",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Raḥmān (a name)"
            },
            {
              "surface": "بْنُ",
              "lemma": "بن",
              "features": "nom.constr",
              "root": "ب ن و",
              "pos": "noun",
              "gloss": "son of"
            },
            {
              "surface": "عَوْفٍ",
              "lemma": "عوف",
              "features": "proper.gen",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAwf (a name)"
            },
            {
              "surface": "غَنِيّاً",
              "lemma": "غني",
              "features": "indef.acc",
              "root": "غ ن ي",
              "pos": "adj",
              "gloss": "rich, wealthy"
            }
          ]
        },
        {
          "id": "qr1-9-041",
          "page": 56,
          "ar": "وَرَفَعَ عَبْدُ الْكَرِيْمِ رَأْسَهُ وَقَالَ: سَأَجْتَهِدُ أَنْ أَخْدِمَ الْإِسْلَامَ بِمَالِيْ وَأَبْتَغِيْ بِهِ مَرْضَاةَ اللهِ.",
          "en": "Abdul Kareem raised his head and said: \"I will strive to serve Islam with my wealth and seek Allah's pleasure through it.\"",
          "tokens": [
            {
              "surface": "وَرَفَعَ",
              "lemma": "رفع",
              "features": "conj+perf.3ms",
              "root": "ر ف ع",
              "pos": "verb",
              "gloss": "to raise, lift"
            },
            {
              "surface": "عَبْدُ",
              "lemma": "عبدالكريم",
              "features": "nom.constr",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Karīm (a name)"
            },
            {
              "surface": "الْكَرِيْمِ",
              "lemma": "عبدالكريم",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "ʿAbd al-Karīm (a name)"
            },
            {
              "surface": "رَأْسَهُ",
              "lemma": "رأس",
              "features": "acc+3ms",
              "root": "ر أ س",
              "pos": "noun",
              "gloss": "head"
            },
            {
              "surface": "وَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "سَأَجْتَهِدُ",
              "lemma": "اجتهد",
              "features": "impf.1s",
              "root": "ج ه د",
              "pos": "verb",
              "gloss": "to strive, try hard"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "أَخْدِمَ",
              "lemma": "خدم",
              "features": "impf.1s",
              "root": "خ د م",
              "pos": "verb",
              "gloss": "to serve"
            },
            {
              "surface": "الْإِسْلَامَ",
              "lemma": "إسلام",
              "features": "def.acc",
              "root": "س ل م",
              "pos": "proper",
              "gloss": "Islam"
            },
            {
              "surface": "بِمَالِيْ",
              "lemma": "مال",
              "features": "prep+gen+1s",
              "root": "م و ل",
              "pos": "noun",
              "gloss": "wealth, money"
            },
            {
              "surface": "وَأَبْتَغِيْ",
              "lemma": "ابتغى",
              "features": "conj+impf.1s",
              "root": "ب غ ي",
              "pos": "verb",
              "gloss": "to seek"
            },
            {
              "surface": "بِهِ",
              "lemma": "ب",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "with, by, through"
            },
            {
              "surface": "مَرْضَاةَ",
              "lemma": "مرضاة",
              "features": "acc.constr",
              "root": "ر ض و",
              "pos": "noun",
              "gloss": "pleasure, good pleasure"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا قَرَّرَ عَبْدُ الْكَرِيْمِ فِيْ آخِرِ الدَّرْسِ؟",
          "options": [
            "أَنْ يَجْتَهِدَ أَنْ يَخْدِمَ الْإِسْلَامَ بِمَالِهِ",
            "أَنْ يَتْرُكَ الْمَدْرَسَةَ",
            "أَنْ يَشْتَرِيَ قَصْراً أَكْبَرَ"
          ],
          "answer": 0,
          "qEn": "What did Abdul Kareem resolve at the end of the lesson?",
          "optionsEn": [
            "To strive to serve Islam with his wealth",
            "To leave school",
            "To buy an even bigger palace"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "سَأَلَ",
        "post": "التَّلَامِيْذَ مَرَّةً فِي الصَّفِّ",
        "en": "The teacher once asked the students in the classroom.",
        "options": [
          "الْمُعَلِّمُ",
          "الْمُعَلِّمَ",
          "الْمُعَلِّمُوْنَ",
          "مُعَلِّمَةٌ"
        ],
        "answer": 0,
        "rationales": [
          "nominative — the subject, \"the teacher.\"",
          "accusative — wrong case for the subject.",
          "plural — wrong number.",
          "wrong gender/case."
        ]
      },
      {
        "type": "cloze",
        "pre": "أَنَا أُرِيْدُ أَنْ أَكُوْنَ",
        "post": "فِي الْقِطَارِ",
        "en": "I want to be a driver on the train.",
        "options": [
          "سَائِقاً",
          "سَائِقٌ",
          "سَائِقِيْنَ",
          "سَائِقَةً"
        ],
        "answer": 0,
        "rationales": [
          "accusative — predicate of أَكُوْنَ.",
          "nominative — wrong case.",
          "plural — wrong number.",
          "feminine — wrong gender."
        ]
      },
      {
        "type": "cloze",
        "pre": "إِنَّ سَائِقَ الْقِطَارِ فِيْ تَعَبٍ عَظِيْمٍ وَ",
        "post": "وَجَحِيْمٍ",
        "en": "The train driver is in tremendous fatigue, heat, and blazing fire.",
        "options": [
          "حَرٍّ",
          "حَرٌّ",
          "الْحَرَّ",
          "حَرّاً"
        ],
        "answer": 0,
        "rationales": [
          "genitive, indefinite — conjoined with تَعَبٍ.",
          "nominative — wrong case.",
          "definite accusative — wrong case and definiteness.",
          "accusative — wrong case."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَلٰكِنِّيْ أُحِبُّ أَنْ أَكُوْنَ",
        "post": "فِيْ بَاخِرَةٍ",
        "en": "But I like to be a captain on a ship.",
        "options": [
          "رُبَّاناً",
          "رُبَّانٌ",
          "الرُّبَّانَ",
          "رُبَّانَيْنِ"
        ],
        "answer": 0,
        "rationales": [
          "accusative — predicate of أَكُوْنَ.",
          "nominative — wrong case.",
          "definite accusative — wrong definiteness.",
          "dual — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "هٰذَا لَيْسَ",
        "post": "",
        "en": "This isn't correct.",
        "options": [
          "بِصَحِيْحٍ",
          "صَحِيْحاً",
          "الصَّحِيْحَ",
          "صَحِيْحٌ"
        ],
        "answer": 0,
        "rationales": [
          "predicate of لَيْسَ with ب — correct idiom.",
          "accusative — also possible, but the book uses بِ here.",
          "definite accusative — wrong form.",
          "nominative — wrong case for the predicate."
        ]
      },
      {
        "type": "cloze",
        "pre": "أَمَا سَمِعْتَ أَنَّ بَاخِرَةً",
        "post": "قَبْلَ يَوْمَيْنِ",
        "en": "Haven't you heard that a ship sank two days ago?",
        "options": [
          "غَرِقَتْ",
          "غَرِقَ",
          "غَرِقُوا",
          "تَغْرَقُ"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 3rd fem. singular — agrees with بَاخِرَةً.",
          "3rd masc. singular — wrong gender.",
          "3rd masc. plural — wrong number.",
          "imperfect — wrong tense."
        ]
      },
      {
        "type": "cloze",
        "pre": "لَا أَحَدٌ يَخْدِمُ النَّاسَ وَيَنْفَعُهُمْ",
        "post": "",
        "en": "No one serves and benefits people like the farmer.",
        "options": [
          "كَالْفَلَّاحِ",
          "كَالْفَلَّاحُ",
          "الْفَلَّاحَ",
          "فَلَّاحٌ"
        ],
        "answer": 0,
        "rationales": [
          "genitive after كَ — correct.",
          "wrong case after a preposition.",
          "accusative — wrong, no preposition here.",
          "nominative indefinite — wrong form."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَضَحِكَ الْأَوْلَادُ مِنْ قَوْلِ عَبْدِ الْكَرِيْمِ وَ",
        "post": "عَبْدُ الْكَرِيْمِ",
        "en": "The boys laughed at Abdul Kareem's statement, and Abdul Kareem was embarrassed.",
        "options": [
          "خَجِلَ",
          "خَجِلَتْ",
          "خَجِلُوا",
          "يَخْجَلُ"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 3rd masc. singular — he felt embarrassed.",
          "3rd fem. singular — wrong gender.",
          "3rd masc. plural — wrong number.",
          "imperfect — wrong tense."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَقَدْ كَانَ سَيِّدُنَا عُثْمَانُ",
        "post": "",
        "en": "Our master Uthman was rich.",
        "options": [
          "غَنِيّاً",
          "غَنِيٌّ",
          "الْغَنِيَّ",
          "أَغْنِيَاءَ"
        ],
        "answer": 0,
        "rationales": [
          "accusative — predicate of كَانَ.",
          "nominative — wrong case for a predicate of كان.",
          "definite accusative — wrong definiteness.",
          "plural — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "سَأَجْتَهِدُ أَنْ",
        "post": "الْإِسْلَامَ بِمَالِيْ",
        "en": "I will strive to serve Islam with my wealth.",
        "options": [
          "أَخْدِمَ",
          "أَخْدِمُ",
          "خَدَمْتُ",
          "يَخْدِمُ"
        ],
        "answer": 0,
        "rationales": [
          "subjunctive after أَنْ — correct.",
          "indicative — wrong mood after أَنْ.",
          "perfect — wrong tense.",
          "3rd person — wrong person."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "أُحِبُّ أَنْ أَكُوْنَ سَائِقاً",
        "pre": "",
        "post": "أَنْ أَكُوْنَ سَائِقاً",
        "targetPerson": "هُوَ",
        "targetEn": "he",
        "options": [
          "يُحِبُّ",
          "أُحِبُّ",
          "تُحِبُّ",
          "نُحِبُّ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular — he likes.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "أَزْرَعُ وَأَحْرُثُ",
        "pre": "",
        "post": "وَأَحْرُثُ",
        "targetPerson": "نَحْنُ",
        "targetEn": "we",
        "options": [
          "نَزْرَعُ",
          "أَزْرَعُ",
          "يَزْرَعُ",
          "تَزْرَعُ"
        ],
        "answer": 0,
        "rationales": [
          "1st plural — we sow.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "غَرِقَتْ بَاخِرَةٌ قَبْلَ يَوْمَيْنِ",
        "pre": "",
        "post": "قَبْلَ يَوْمَيْنِ",
        "targetPerson": "قَاطِرَتَانِ",
        "targetEn": "two locomotives",
        "options": [
          "غَرِقَتَا",
          "غَرِقَتْ",
          "غَرِقُوا",
          "غَرِقَ"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 3rd fem. dual — they-two sank.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "سَمِعْتَ الْخَبَرَ",
        "pre": "",
        "post": "الْخَبَرَ",
        "targetPerson": "أَنْتِ",
        "targetEn": "you (f. sg.)",
        "options": [
          "سَمِعْتِ",
          "سَمِعْتَ",
          "سَمِعْتُ",
          "سَمِعْنَ"
        ],
        "answer": 0,
        "rationales": [
          "2nd feminine singular — you heard.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "ضَحِكَ الْوَلَدُ",
        "pre": "",
        "post": "",
        "targetPerson": "الْأَوْلَادُ",
        "targetEn": "the boys",
        "options": [
          "ضَحِكُوا",
          "ضَحِكَ",
          "ضَحِكَتْ",
          "ضَحِكْنَ"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 3rd masc. plural — they laughed.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "يَخْدِمُ النَّاسَ وَيَنْفَعُهُمْ",
        "pre": "",
        "post": "وَيَنْفَعُهُمْ",
        "targetPerson": "أَنْتَ",
        "targetEn": "you (m. sg.)",
        "options": [
          "تَخْدِمُ",
          "يَخْدِمُ",
          "أَخْدِمُ",
          "نَخْدِمُ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. singular — you serve.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "آتَاهُ اللهُ مَالاً",
        "pre": "",
        "post": "مَالاً",
        "targetPerson": "هُمَا",
        "targetEn": "they (m. du.)",
        "options": [
          "آتَاهُمَا",
          "آتَاهُ",
          "آتَاهُمْ",
          "آتَاهَا"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. dual object — He gave them-two.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "سَأَجْتَهِدُ أَنْ أَخْدِمَ الْإِسْلَامَ",
        "pre": "",
        "post": "أَنْ أَخْدِمَ الْإِسْلَامَ",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "سَتَجْتَهِدُ",
          "سَأَجْتَهِدُ",
          "سَيَجْتَهِدُ",
          "سَنَجْتَهِدُ"
        ],
        "answer": 0,
        "rationales": [
          "3rd feminine singular — she will strive.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

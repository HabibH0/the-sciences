// القراءة الراشدة, volume one, chapter twelve -- الفطور.
//
// Follows the shape of chapter-01.js/chapter-10.js -- see ../CHAPTER-FORMAT.md
// for the full specification. Hand-authored directly from the scanned pages
// (qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed pages 63-65); there
// is no JSON intermediate (see PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md --
// the pipeline no longer emits JSON).
//
// A first-person narrative (a boy's first full day of fasting in Ramadan) --
// the same register as chapter-01.js and chapter-10's narrator voice, no new
// structural handling was needed. "قَالَ X: <quote>" and its variant
// "قُلْتُ كَمَا عَلَّمَنِيْ أَبِيْ: <quote>" are each kept as a single sentence per
// the convention established in chapter-09.js, with the colon stripped by
// PUNCT_RE at reconstruction.
//
// Two vocabulary notes:
//   - قَبْلَ ("before," the preposition, e.g. قَبْلَ الْغُرُوْبِ) and قَبِلَ ("to
//     accept," the Form I verb, e.g. قَبِلَ أَبِيْ) are unrelated words that
//     happen to differ only in their internal vowel -- both occur in this
//     chapter, so they get distinct lemma keys ("قبل" for the preposition,
//     "قبل-قبول" for the verb), following the ذهب/ذهب-معدن precedent from
//     chapter-05.js.
//   - حَضَرَ ("to attend, be present," the Form I verb used here of the
//     guests arriving before sunset) is a different word from chapter-02.js's
//     "حضر" ("settled residence, being at home" -- الْحَضَر as opposed to
//     travel), despite sharing a root. Rather than overload chapter-02's key
//     with an unrelated sense, this chapter adds a distinct "حضر-حضور" entry
//     for the verb, again following the ذهب/ذهب-معدن naming pattern.
//
// «» guillemets wrap the hadith-style duʿāʾ recited at iftar (same
// convention as chapter-09.js's quoted hadith; unrelated to the still-open
// ﴿ ﴾ Qur'an-bracket question noted in QASAS_AGENT_BRIEF.md, since this is a
// duʿāʾ/hadith citation, not a Qur'anic quotation).
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch12",
  "number": 12,
  "title": {
    "ar": "اَلْفُطُوْرُ",
    "en": "Breaking the Fast"
  },
  "pages": [
    63,
    64,
    65
  ],
  "register": "first_person_singular_narrative",
  "newWords": [
    "صام",
    "صبر",
    "عطش",
    "صوم",
    "سحور",
    "شبع",
    "غروب",
    "مؤذن",
    "رمق",
    "ثواب",
    "نال",
    "اغتسل"
  ],
  "lemmas": {
    "طلب": {
      "root": "ط ل ب",
      "pos": "verb",
      "gloss": "to ask, request",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "أب": {
      "root": "أ ب و",
      "pos": "noun",
      "gloss": "father",
      "content": true
    },
    "أم": {
      "root": "أ م م",
      "pos": "noun",
      "gloss": "mother",
      "content": true
    },
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that",
      "content": false
    },
    "صام": {
      "root": "ص و م",
      "pos": "verb",
      "gloss": "to fast",
      "content": true
    },
    "يوم": {
      "root": "ي و م",
      "pos": "noun",
      "gloss": "day",
      "content": true
    },
    "رمضان": {
      "root": "—",
      "pos": "proper",
      "gloss": "Ramaḍān",
      "content": true
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "إن": {
      "root": "—",
      "pos": "part",
      "gloss": "if; indeed; that",
      "content": false
    },
    "صغير": {
      "root": "ص غ ر",
      "pos": "adj",
      "gloss": "young, small",
      "content": true
    },
    "ضعيف": {
      "root": "ض ع ف",
      "pos": "adj",
      "gloss": "weak",
      "content": true
    },
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "not; no",
      "content": false
    },
    "صبر": {
      "root": "ص ب ر",
      "pos": "verb",
      "gloss": "to be patient, endure",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, on",
      "content": false
    },
    "جوع": {
      "root": "ج و ع",
      "pos": "noun",
      "gloss": "hunger",
      "content": true
    },
    "عطش": {
      "root": "ع ط ش",
      "pos": "noun",
      "gloss": "thirst",
      "content": true
    },
    "هذه": {
      "root": "—",
      "pos": "noun",
      "gloss": "this (f.)",
      "content": false
    },
    "صيف": {
      "root": "ص ي ف",
      "pos": "noun",
      "gloss": "summer",
      "content": true
    },
    "صوم": {
      "root": "ص و م",
      "pos": "noun",
      "gloss": "fasting",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "شديد": {
      "root": "ش د د",
      "pos": "adj",
      "gloss": "severe, intense",
      "content": true
    },
    "حتى": {
      "root": "—",
      "pos": "part",
      "gloss": "until; so that",
      "content": false
    },
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
    },
    "شتاء": {
      "root": "ش ت و",
      "pos": "noun",
      "gloss": "winter",
      "content": true
    },
    "لكن": {
      "root": "—",
      "pos": "part",
      "gloss": "but",
      "content": false
    },
    "بكى": {
      "root": "ب ك ي",
      "pos": "verb",
      "gloss": "to cry, weep",
      "content": true
    },
    "قد": {
      "root": "—",
      "pos": "part",
      "gloss": "already, indeed",
      "content": false
    },
    "محمود": {
      "root": "—",
      "pos": "proper",
      "gloss": "Maḥmūd (a name)",
      "content": false
    },
    "هو": {
      "root": "—",
      "pos": "noun",
      "gloss": "he, it",
      "content": false
    },
    "سن": {
      "root": "س ن ن",
      "pos": "noun",
      "gloss": "age",
      "content": true
    },
    "إسماعيل": {
      "root": "—",
      "pos": "proper",
      "gloss": "Ismāʿīl (a name)",
      "content": false
    },
    "أصغر": {
      "root": "ص غ ر",
      "pos": "adj",
      "gloss": "younger",
      "content": true
    },
    "لماذا": {
      "root": "—",
      "pos": "part",
      "gloss": "why",
      "content": false
    },
    "انتظر": {
      "root": "ن ظ ر",
      "pos": "verb",
      "gloss": "to wait",
      "content": true
    },
    "أنا": {
      "root": "—",
      "pos": "noun",
      "gloss": "I",
      "content": false
    },
    "رأى": {
      "root": "ر أ ي",
      "pos": "verb",
      "gloss": "to see",
      "content": true
    },
    "لما": {
      "root": "—",
      "pos": "part",
      "gloss": "when (in the past)",
      "content": false
    },
    "لبس": {
      "root": "ل ب س",
      "pos": "verb",
      "gloss": "to wear",
      "content": true
    },
    "لباس": {
      "root": "ل ب س",
      "pos": "noun",
      "gloss": "clothing",
      "content": true
    },
    "جديد": {
      "root": "ج د د",
      "pos": "adj",
      "gloss": "new",
      "content": true
    },
    "صنع": {
      "root": "ص ن ع",
      "pos": "verb",
      "gloss": "to make",
      "content": true
    },
    "ل": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to; belonging to",
      "content": false
    },
    "أطعمة": {
      "root": "ط ع م",
      "pos": "noun",
      "gloss": "foods",
      "content": true
    },
    "لذيذ": {
      "root": "ل ذ ذ",
      "pos": "adj",
      "gloss": "delicious",
      "content": true
    },
    "قدم": {
      "root": "ق د م",
      "pos": "verb",
      "gloss": "to bring forward, present, offer",
      "content": true
    },
    "أقارب": {
      "root": "ق ر ب",
      "pos": "noun",
      "gloss": "relatives",
      "content": true
    },
    "هدايا": {
      "root": "ه د ي",
      "pos": "noun",
      "gloss": "gifts",
      "content": true
    },
    "جوائز": {
      "root": "ج و ز",
      "pos": "noun",
      "gloss": "prizes",
      "content": true
    },
    "اجتمع": {
      "root": "ج م ع",
      "pos": "verb",
      "gloss": "to gather",
      "content": true
    },
    "ناس": {
      "root": "ن و س",
      "pos": "noun",
      "gloss": "people",
      "content": true
    },
    "كثير": {
      "root": "ك ث ر",
      "pos": "adj",
      "gloss": "much, many",
      "content": true
    },
    "شرف": {
      "root": "ش ر ف",
      "pos": "noun",
      "gloss": "honor, distinction",
      "content": true,
      "book_note": "الشَّرَفُ (ج) الأَشْرَاف: العُلُوّ وَالمَجْد (elevation and glory)"
    },
    "كل": {
      "root": "ك ل ل",
      "pos": "noun",
      "gloss": "each, every, all",
      "content": true
    },
    "تحادث": {
      "root": "ح د ث",
      "pos": "verb",
      "gloss": "to converse",
      "content": true
    },
    "مع": {
      "root": "—",
      "pos": "prep",
      "gloss": "with",
      "content": false
    },
    "قرب": {
      "root": "ق ر ب",
      "pos": "verb",
      "gloss": "to bring near",
      "content": true
    },
    "إلى": {
      "root": "—",
      "pos": "prep",
      "gloss": "to, towards",
      "content": false
    },
    "سمع": {
      "root": "س م ع",
      "pos": "verb",
      "gloss": "to hear",
      "content": true
    },
    "ولد": {
      "root": "و ل د",
      "pos": "noun",
      "gloss": "child, boy",
      "content": true
    },
    "إذا": {
      "root": "—",
      "pos": "part",
      "gloss": "if, when",
      "content": false
    },
    "والد": {
      "root": "و ل د",
      "pos": "noun",
      "gloss": "parent",
      "content": true
    },
    "أجر": {
      "root": "أ ج ر",
      "pos": "noun",
      "gloss": "reward",
      "content": true
    },
    "ثواب": {
      "root": "ث و ب",
      "pos": "noun",
      "gloss": "recompense, reward",
      "content": true
    },
    "أحب": {
      "root": "ح ب ب",
      "pos": "verb",
      "gloss": "to like, love, want",
      "content": true
    },
    "نال": {
      "root": "ن ي ل",
      "pos": "verb",
      "gloss": "to attain, receive",
      "content": true
    },
    "قبل-قبول": {
      "root": "ق ب ل",
      "pos": "verb",
      "gloss": "to accept",
      "content": true
    },
    "رضي": {
      "root": "ر ض ي",
      "pos": "verb",
      "gloss": "to be pleased",
      "content": true
    },
    "دعا": {
      "root": "د ع و",
      "pos": "verb",
      "gloss": "to invite; to pray for",
      "content": true
    },
    "صديق": {
      "root": "ص د ق",
      "pos": "noun",
      "gloss": "friend",
      "content": true
    },
    "أتراب": {
      "root": "ت ر ب",
      "pos": "noun",
      "gloss": "peers, those of the same age",
      "content": true,
      "book_note": "الأَتْرَاب جَمْعُ التِّرْب: الْمُمَاثِل فِي السِّنّ (لِلْمُذَكَّر وَالْمُؤَنَّث) (peers: one who matches another in age, for both masculine and feminine)"
    },
    "سحور": {
      "root": "س ح ر",
      "pos": "noun",
      "gloss": "the pre-dawn meal (before the fast)",
      "content": true
    },
    "بات": {
      "root": "ب ي ت",
      "pos": "verb",
      "gloss": "to spend the night",
      "content": true
    },
    "بيت": {
      "root": "ب ي ت",
      "pos": "noun",
      "gloss": "house",
      "content": true
    },
    "ساعة": {
      "root": "س و ع",
      "pos": "noun",
      "gloss": "hour; watch, clock",
      "content": true
    },
    "رابع": {
      "root": "ر ب ع",
      "pos": "adj",
      "gloss": "fourth",
      "content": true
    },
    "ليل": {
      "root": "ل ي ل",
      "pos": "noun",
      "gloss": "night",
      "content": true
    },
    "استيقظ": {
      "root": "ي ق ظ",
      "pos": "verb",
      "gloss": "to wake up",
      "content": true
    },
    "طعام": {
      "root": "ط ع م",
      "pos": "noun",
      "gloss": "food",
      "content": true
    },
    "أكل": {
      "root": "أ ك ل",
      "pos": "verb",
      "gloss": "to eat",
      "content": true
    },
    "شبع": {
      "root": "ش ب ع",
      "pos": "verb",
      "gloss": "to be full, satiated",
      "content": true
    },
    "نام": {
      "root": "ن و م",
      "pos": "verb",
      "gloss": "to sleep",
      "content": true
    },
    "قليل": {
      "root": "ق ل ل",
      "pos": "adv",
      "gloss": "a little, slightly",
      "content": true
    },
    "صلاة": {
      "root": "ص ل و",
      "pos": "noun",
      "gloss": "prayer",
      "content": true
    },
    "صبح": {
      "root": "ص ب ح",
      "pos": "noun",
      "gloss": "dawn, morning",
      "content": true
    },
    "نهار": {
      "root": "ن ه ر",
      "pos": "noun",
      "gloss": "daytime",
      "content": true
    },
    "أراد": {
      "root": "ر و د",
      "pos": "verb",
      "gloss": "to want",
      "content": true
    },
    "شغل": {
      "root": "ش غ ل",
      "pos": "verb",
      "gloss": "to occupy, keep busy",
      "content": true
    },
    "ذكر": {
      "root": "ذ ك ر",
      "pos": "verb",
      "gloss": "to remember, mention",
      "content": true
    },
    "أمر": {
      "root": "أ م ر",
      "pos": "verb",
      "gloss": "to order, command",
      "content": true
    },
    "أشغال": {
      "root": "ش غ ل",
      "pos": "noun",
      "gloss": "tasks, chores",
      "content": true
    },
    "ليس": {
      "root": "ل ي س",
      "pos": "verb",
      "gloss": "to not be",
      "content": true
    },
    "تعب": {
      "root": "ت ع ب",
      "pos": "noun",
      "gloss": "fatigue, tiredness",
      "content": true
    },
    "حديث": {
      "root": "ح د ث",
      "pos": "noun",
      "gloss": "talk, conversation",
      "content": true
    },
    "انتصف": {
      "root": "ن ص ف",
      "pos": "verb",
      "gloss": "to reach the midpoint",
      "content": true
    },
    "ما": {
      "root": "—",
      "pos": "part",
      "gloss": "not; what",
      "content": false
    },
    "شعر": {
      "root": "ش ع ر",
      "pos": "verb",
      "gloss": "to feel, sense",
      "content": true
    },
    "ظهيرة": {
      "root": "ظ ه ر",
      "pos": "noun",
      "gloss": "midday",
      "content": true
    },
    "ظمأ": {
      "root": "ظ م أ",
      "pos": "noun",
      "gloss": "thirst",
      "content": true
    },
    "حر-حرارة": {
      "root": "ح ر ر",
      "pos": "noun",
      "gloss": "heat",
      "content": true
    },
    "اغتسل": {
      "root": "غ س ل",
      "pos": "verb",
      "gloss": "to bathe, wash oneself",
      "content": true
    },
    "ذهب": {
      "root": "ذ ه ب",
      "pos": "verb",
      "gloss": "to go; (of a feeling) to go away, leave",
      "content": true
    },
    "عن": {
      "root": "—",
      "pos": "prep",
      "gloss": "from, away from; about",
      "content": false
    },
    "استراح": {
      "root": "ر و ح",
      "pos": "verb",
      "gloss": "to rest",
      "content": true
    },
    "عصر": {
      "root": "ع ص ر",
      "pos": "noun",
      "gloss": "afternoon",
      "content": true
    },
    "ثمار": {
      "root": "ث م ر",
      "pos": "noun",
      "gloss": "fruits",
      "content": true
    },
    "فواكه": {
      "root": "ف ك ه",
      "pos": "noun",
      "gloss": "fruits",
      "content": true
    },
    "أحد": {
      "root": "أ ح د",
      "pos": "noun",
      "gloss": "one, someone, anyone",
      "content": true
    },
    "بأس": {
      "root": "ب أ س",
      "pos": "noun",
      "gloss": "harm",
      "content": true
    },
    "شيء": {
      "root": "ش ي أ",
      "pos": "noun",
      "gloss": "thing",
      "content": true
    },
    "الآن": {
      "root": "—",
      "pos": "adv",
      "gloss": "now",
      "content": true
    },
    "أيضا": {
      "root": "—",
      "pos": "adv",
      "gloss": "also, too",
      "content": true
    },
    "هنا": {
      "root": "—",
      "pos": "adv",
      "gloss": "here",
      "content": true
    },
    "الله": {
      "root": "—",
      "pos": "proper",
      "gloss": "Allah",
      "content": true
    },
    "سكت": {
      "root": "س ك ت",
      "pos": "verb",
      "gloss": "to fall silent",
      "content": true
    },
    "قبل": {
      "root": "—",
      "pos": "prep",
      "gloss": "before",
      "content": false
    },
    "غروب": {
      "root": "غ ر ب",
      "pos": "noun",
      "gloss": "sunset",
      "content": true
    },
    "حضر-حضور": {
      "root": "ح ض ر",
      "pos": "verb",
      "gloss": "to attend, be present",
      "content": true
    },
    "نقل": {
      "root": "ن ق ل",
      "pos": "verb",
      "gloss": "to move, transfer",
      "content": true
    },
    "فطور": {
      "root": "ف ط ر",
      "pos": "noun",
      "gloss": "breakfast",
      "content": true
    },
    "مسجد": {
      "root": "س ج د",
      "pos": "noun",
      "gloss": "mosque",
      "content": true
    },
    "وقت": {
      "root": "و ق ت",
      "pos": "noun",
      "gloss": "time",
      "content": true
    },
    "رمق": {
      "root": "ر م ق",
      "pos": "verb",
      "gloss": "to watch, gaze at",
      "content": true,
      "book_note": "رَمَقَ يَرْمُقُ: نَظَرَ إِلَيْهِ وَأَتْبَعَهُ بَصَرَهُ (to watch: to look at something and follow it with one's gaze)"
    },
    "مؤذن": {
      "root": "أ ذ ن",
      "pos": "noun",
      "gloss": "muezzin (one who calls the adhan)",
      "content": true
    },
    "عد": {
      "root": "ع د د",
      "pos": "verb",
      "gloss": "to count",
      "content": true
    },
    "دقيقة": {
      "root": "د ق ق",
      "pos": "noun",
      "gloss": "minute",
      "content": true
    },
    "أذن": {
      "root": "أ ذ ن",
      "pos": "verb",
      "gloss": "to call the adhan (call to prayer)",
      "content": true
    },
    "أفطر": {
      "root": "ف ط ر",
      "pos": "verb",
      "gloss": "to eat breakfast; to break a fast",
      "content": true
    },
    "تمرة": {
      "root": "ت م ر",
      "pos": "noun",
      "gloss": "a date (fruit)",
      "content": true
    },
    "ثم": {
      "root": "—",
      "pos": "part",
      "gloss": "then",
      "content": false
    },
    "شرب": {
      "root": "ش ر ب",
      "pos": "verb",
      "gloss": "to drink",
      "content": true
    },
    "كما": {
      "root": "—",
      "pos": "part",
      "gloss": "as, just as",
      "content": false
    },
    "علّم": {
      "root": "ع ل م",
      "pos": "verb",
      "gloss": "to teach",
      "content": true
    },
    "ابتل": {
      "root": "ب ل ل",
      "pos": "verb",
      "gloss": "to become moist, wet",
      "content": true
    },
    "عروق": {
      "root": "ع ر ق",
      "pos": "noun",
      "gloss": "veins",
      "content": true
    },
    "ثبت": {
      "root": "ث ب ت",
      "pos": "verb",
      "gloss": "to be confirmed, established",
      "content": true
    },
    "شاء": {
      "root": "ش ي أ",
      "pos": "verb",
      "gloss": "to will, wish",
      "content": true
    },
    "ذلك": {
      "root": "—",
      "pos": "noun",
      "gloss": "that",
      "content": false
    },
    "جميل": {
      "root": "ج م ل",
      "pos": "adj",
      "gloss": "beautiful",
      "content": true
    },
    "حياة": {
      "root": "ح ي ي",
      "pos": "noun",
      "gloss": "life",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "The narrator asks his parents to let him fast a day of Ramadan; his father says he is too young and weak, and his mother says summer fasts are hard -- he should wait for winter.",
      "sentences": [
        {
          "id": "qr1-12-001",
          "page": 63,
          "ar": "طَلَبْتُ مِنْ أَبِيْ وَأُمِّيْ أَنْ أَصُوْمَ يَوْمًا مِنْ رَمَضَانَ.",
          "en": "I asked my father and mother to let me fast a day of Ramadan.",
          "tokens": [
            {
              "surface": "طَلَبْتُ",
              "lemma": "طلب",
              "features": "perf.1s",
              "root": "ط ل ب",
              "pos": "verb",
              "gloss": "to ask, request"
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
              "surface": "أَبِيْ",
              "lemma": "أب",
              "features": "gen+1s",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "وَأُمِّيْ",
              "lemma": "أم",
              "features": "conj+gen+1s",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
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
              "surface": "أَصُوْمَ",
              "lemma": "صام",
              "features": "impf.1s",
              "root": "ص و م",
              "pos": "verb",
              "gloss": "to fast"
            },
            {
              "surface": "يَوْمًا",
              "lemma": "يوم",
              "features": "indef.acc",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
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
              "surface": "رَمَضَانَ",
              "lemma": "رمضان",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Ramaḍān"
            }
          ]
        },
        {
          "id": "qr1-12-002",
          "page": 63,
          "ar": "فَقَالَ أَبِيْ: إِنَّكَ صَغِيْرٌ ضَعِيْفٌ.",
          "en": "My father said: \"You are young and weak --",
          "tokens": [
            {
              "surface": "فَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "أَبِيْ",
              "lemma": "أب",
              "features": "nom+1s",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "إِنَّكَ",
              "lemma": "إن",
              "features": "part+2ms",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed; that"
            },
            {
              "surface": "صَغِيْرٌ",
              "lemma": "صغير",
              "features": "indef.nom",
              "root": "ص غ ر",
              "pos": "adj",
              "gloss": "young, small"
            },
            {
              "surface": "ضَعِيْفٌ",
              "lemma": "ضعيف",
              "features": "indef.nom",
              "root": "ض ع ف",
              "pos": "adj",
              "gloss": "weak"
            }
          ]
        },
        {
          "id": "qr1-12-003",
          "page": 63,
          "ar": "لَا تَصْبِرُ عَلَىٰ الْجُوْعِ وَالْعَطَشِ.",
          "en": "you cannot endure hunger and thirst.\"",
          "tokens": [
            {
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
            },
            {
              "surface": "تَصْبِرُ",
              "lemma": "صبر",
              "features": "impf.2ms",
              "root": "ص ب ر",
              "pos": "verb",
              "gloss": "to be patient, endure"
            },
            {
              "surface": "عَلَىٰ",
              "lemma": "على",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, on"
            },
            {
              "surface": "الْجُوْعِ",
              "lemma": "جوع",
              "features": "def.gen",
              "root": "ج و ع",
              "pos": "noun",
              "gloss": "hunger"
            },
            {
              "surface": "وَالْعَطَشِ",
              "lemma": "عطش",
              "features": "conj+def.gen",
              "root": "ع ط ش",
              "pos": "noun",
              "gloss": "thirst"
            }
          ]
        },
        {
          "id": "qr1-12-004",
          "page": 63,
          "ar": "وَقَالَتْ أُمِّيْ: هٰذِهِ أَيَّامُ صَيْفٍ.",
          "en": "My mother said: \"These are summer days,",
          "tokens": [
            {
              "surface": "وَقَالَتْ",
              "lemma": "قال",
              "features": "conj+perf.3fs",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "أُمِّيْ",
              "lemma": "أم",
              "features": "nom+1s",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
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
              "surface": "أَيَّامُ",
              "lemma": "يوم",
              "features": "pl.nom.constr",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "صَيْفٍ",
              "lemma": "صيف",
              "features": "indef.gen",
              "root": "ص ي ف",
              "pos": "noun",
              "gloss": "summer"
            }
          ]
        },
        {
          "id": "qr1-12-005",
          "page": 63,
          "ar": "وَالصَّوْمُ فِيْهَا شَدِيْدٌ.",
          "en": "and fasting in them is hard.",
          "tokens": [
            {
              "surface": "وَالصَّوْمُ",
              "lemma": "صوم",
              "features": "conj+def.nom",
              "root": "ص و م",
              "pos": "noun",
              "gloss": "fasting"
            },
            {
              "surface": "فِيْهَا",
              "lemma": "في",
              "features": "prep+3fs",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "شَدِيْدٌ",
              "lemma": "شديد",
              "features": "indef.nom",
              "root": "ش د د",
              "pos": "adj",
              "gloss": "severe, intense"
            }
          ]
        },
        {
          "id": "qr1-12-006",
          "page": 63,
          "ar": "اصْبِرْ حَتَّىٰ تَكُوْنَ أَيَّامُ شِتَاءٍ.",
          "en": "Be patient until it is winter days.\"",
          "tokens": [
            {
              "surface": "اصْبِرْ",
              "lemma": "صبر",
              "features": "imp.2ms",
              "root": "ص ب ر",
              "pos": "verb",
              "gloss": "to be patient, endure"
            },
            {
              "surface": "حَتَّىٰ",
              "lemma": "حتى",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "until; so that"
            },
            {
              "surface": "تَكُوْنَ",
              "lemma": "كان",
              "features": "impf.3fs",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "أَيَّامُ",
              "lemma": "يوم",
              "features": "pl.nom",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "شِتَاءٍ",
              "lemma": "شتاء",
              "features": "indef.gen",
              "root": "ش ت و",
              "pos": "noun",
              "gloss": "winter"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا رَفَضَ أَبُو الرَّاوِيْ أَنْ يَصُوْمَ؟",
          "options": [
            "لِأَنَّهُ صَغِيْرٌ ضَعِيْفٌ لَا يَصْبِرُ عَلَىٰ الْجُوْعِ وَالْعَطَشِ",
            "لِأَنَّهُ مَرِيْضٌ",
            "لِأَنَّ الْمَدْرَسَةَ لَا تَسْمَحُ"
          ],
          "answer": 0,
          "qEn": "Why did the narrator's father refuse to let him fast?",
          "optionsEn": [
            "Because he is young and weak and cannot endure hunger and thirst",
            "Because he is sick",
            "Because school doesn't allow it"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "But the narrator cried and pointed out that Mahmoud, his own age, and Isma'il, younger than him, had both already fasted -- so why should he wait?",
      "sentences": [
        {
          "id": "qr1-12-007",
          "page": 63,
          "ar": "وَلٰكِنِّيْ بَكَيْتُ وَقُلْتُ: قَدْ صَامَ مَحْمُوْدٌ وَهُوَ فِيْ سِنِّيْ.",
          "en": "But I cried and said: \"Mahmoud has already fasted, and he is my age,",
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
              "surface": "بَكَيْتُ",
              "lemma": "بكى",
              "features": "perf.1s",
              "root": "ب ك ي",
              "pos": "verb",
              "gloss": "to cry, weep"
            },
            {
              "surface": "وَقُلْتُ",
              "lemma": "قال",
              "features": "conj+perf.1s",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "قَدْ",
              "lemma": "قد",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "already, indeed"
            },
            {
              "surface": "صَامَ",
              "lemma": "صام",
              "features": "perf.3ms",
              "root": "ص و م",
              "pos": "verb",
              "gloss": "to fast"
            },
            {
              "surface": "مَحْمُوْدٌ",
              "lemma": "محمود",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Maḥmūd (a name)"
            },
            {
              "surface": "وَهُوَ",
              "lemma": "هو",
              "features": "conj+nom",
              "root": "",
              "pos": "noun",
              "gloss": "he, it"
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
              "surface": "سِنِّيْ",
              "lemma": "سن",
              "features": "gen+1s",
              "root": "س ن ن",
              "pos": "noun",
              "gloss": "age"
            }
          ]
        },
        {
          "id": "qr1-12-008",
          "page": 63,
          "ar": "وَقَدْ صَامَ إِسْمَاعِيْلُ وَهُوَ أَصْغَرُ مِنِّيْ.",
          "en": "and Isma'il has fasted, and he is younger than me --",
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
              "surface": "صَامَ",
              "lemma": "صام",
              "features": "perf.3ms",
              "root": "ص و م",
              "pos": "verb",
              "gloss": "to fast"
            },
            {
              "surface": "إِسْمَاعِيْلُ",
              "lemma": "إسماعيل",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ismāʿīl (a name)"
            },
            {
              "surface": "وَهُوَ",
              "lemma": "هو",
              "features": "conj+nom",
              "root": "",
              "pos": "noun",
              "gloss": "he, it"
            },
            {
              "surface": "أَصْغَرُ",
              "lemma": "أصغر",
              "features": "nom",
              "root": "ص غ ر",
              "pos": "adj",
              "gloss": "younger"
            },
            {
              "surface": "مِنِّيْ",
              "lemma": "من",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "from"
            }
          ]
        },
        {
          "id": "qr1-12-009",
          "page": 63,
          "ar": "وَلِمَاذَا أَنْتَظِرُ أَنَا؟",
          "en": "so why should I wait?\"",
          "tokens": [
            {
              "surface": "وَلِمَاذَا",
              "lemma": "لماذا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "why"
            },
            {
              "surface": "أَنْتَظِرُ",
              "lemma": "انتظر",
              "features": "impf.1s",
              "root": "ن ظ ر",
              "pos": "verb",
              "gloss": "to wait"
            },
            {
              "surface": "أَنَا",
              "lemma": "أنا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنْ ذَكَرَ الرَّاوِيْ لِإِقْنَاعِ وَالِدَيْهِ؟",
          "options": [
            "مَحْمُوْدًا وَإِسْمَاعِيْلَ",
            "خَالِدًا وَسَعِيْدًا",
            "أَخَاهُ الْكَبِيْرَ فَقَطْ"
          ],
          "answer": 0,
          "qEn": "Whom did the narrator mention to persuade his parents?",
          "optionsEn": [
            "Mahmoud and Isma'il",
            "Khalid and Sa'id",
            "His older brother alone"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "The narrator recalls that when Mahmoud fasted, he wore new clothes, had delicious food made for him, received gifts and prizes from relatives, and drew a crowd -- everyone made a fuss over him.",
      "sentences": [
        {
          "id": "qr1-12-010",
          "page": 63,
          "ar": "وَقَدْ رَأَيْتُ مَحْمُوْدًا لَمَّا صَامَ لَبِسَ لِبَاسًا جَدِيْدًا.",
          "en": "I saw that when Mahmoud fasted, he wore new clothes,",
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
              "surface": "رَأَيْتُ",
              "lemma": "رأى",
              "features": "perf.1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "مَحْمُوْدًا",
              "lemma": "محمود",
              "features": "acc",
              "root": "",
              "pos": "proper",
              "gloss": "Maḥmūd (a name)"
            },
            {
              "surface": "لَمَّا",
              "lemma": "لما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "when (in the past)"
            },
            {
              "surface": "صَامَ",
              "lemma": "صام",
              "features": "perf.3ms",
              "root": "ص و م",
              "pos": "verb",
              "gloss": "to fast"
            },
            {
              "surface": "لَبِسَ",
              "lemma": "لبس",
              "features": "perf.3ms",
              "root": "ل ب س",
              "pos": "verb",
              "gloss": "to wear"
            },
            {
              "surface": "لِبَاسًا",
              "lemma": "لباس",
              "features": "indef.acc",
              "root": "ل ب س",
              "pos": "noun",
              "gloss": "clothing"
            },
            {
              "surface": "جَدِيْدًا",
              "lemma": "جديد",
              "features": "indef.acc",
              "root": "ج د د",
              "pos": "adj",
              "gloss": "new"
            }
          ]
        },
        {
          "id": "qr1-12-011",
          "page": 63,
          "ar": "وَصُنِعَتْ لَهُ أَطْعِمَةٌ لَذِيْذَةٌ.",
          "en": "delicious food was made for him,",
          "tokens": [
            {
              "surface": "وَصُنِعَتْ",
              "lemma": "صنع",
              "features": "conj+perf.3fs",
              "root": "ص ن ع",
              "pos": "verb",
              "gloss": "to be made (passive)"
            },
            {
              "surface": "لَهُ",
              "lemma": "ل",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "for, to; belonging to"
            },
            {
              "surface": "أَطْعِمَةٌ",
              "lemma": "أطعمة",
              "features": "indef.nom",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "foods"
            },
            {
              "surface": "لَذِيْذَةٌ",
              "lemma": "لذيذ",
              "features": "indef.nom",
              "root": "ل ذ ذ",
              "pos": "adj",
              "gloss": "delicious"
            }
          ]
        },
        {
          "id": "qr1-12-012",
          "page": 63,
          "ar": "وَقَدَّمَ لَهُ أَقَارِبُهُ هَدَايَا وَجَوَائِزَ.",
          "en": "his relatives gave him gifts and prizes,",
          "tokens": [
            {
              "surface": "وَقَدَّمَ",
              "lemma": "قدم",
              "features": "conj+perf.3ms",
              "root": "ق د م",
              "pos": "verb",
              "gloss": "to bring forward, present, offer"
            },
            {
              "surface": "لَهُ",
              "lemma": "ل",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "for, to; belonging to"
            },
            {
              "surface": "أَقَارِبُهُ",
              "lemma": "أقارب",
              "features": "nom+3ms",
              "root": "ق ر ب",
              "pos": "noun",
              "gloss": "relatives"
            },
            {
              "surface": "هَدَايَا",
              "lemma": "هدايا",
              "features": "acc",
              "root": "ه د ي",
              "pos": "noun",
              "gloss": "gifts"
            },
            {
              "surface": "وَجَوَائِزَ",
              "lemma": "جوائز",
              "features": "conj+acc",
              "root": "ج و ز",
              "pos": "noun",
              "gloss": "prizes"
            }
          ]
        },
        {
          "id": "qr1-12-013",
          "page": 63,
          "ar": "وَاجْتَمَعَ نَاسٌ كَثِيْرٌ.",
          "en": "and many people gathered,",
          "tokens": [
            {
              "surface": "وَاجْتَمَعَ",
              "lemma": "اجتمع",
              "features": "conj+perf.3ms",
              "root": "ج م ع",
              "pos": "verb",
              "gloss": "to gather"
            },
            {
              "surface": "نَاسٌ",
              "lemma": "ناس",
              "features": "indef.nom",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
            },
            {
              "surface": "كَثِيْرٌ",
              "lemma": "كثير",
              "features": "indef.nom",
              "root": "ك ث ر",
              "pos": "adj",
              "gloss": "much, many"
            }
          ]
        },
        {
          "id": "qr1-12-014",
          "page": 63,
          "ar": "وَكَانَ مَحْمُوْدٌ لَهُ شَرَفٌ.",
          "en": "and Mahmoud had honor --",
          "tokens": [
            {
              "surface": "وَكَانَ",
              "lemma": "كان",
              "features": "conj+perf.3ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "مَحْمُوْدٌ",
              "lemma": "محمود",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Maḥmūd (a name)"
            },
            {
              "surface": "لَهُ",
              "lemma": "ل",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "for, to; belonging to"
            },
            {
              "surface": "شَرَفٌ",
              "lemma": "شرف",
              "features": "indef.nom",
              "root": "ش ر ف",
              "pos": "noun",
              "gloss": "honor, distinction"
            }
          ]
        },
        {
          "id": "qr1-12-015",
          "page": 63,
          "ar": "كُلٌّ يَتَحَادَثُ مَعَهُ وَيُقَرِّبُهُ إِلَيْهِ.",
          "en": "everyone would converse with him and draw him near.",
          "tokens": [
            {
              "surface": "كُلٌّ",
              "lemma": "كل",
              "features": "indef.nom",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "each, every, all"
            },
            {
              "surface": "يَتَحَادَثُ",
              "lemma": "تحادث",
              "features": "impf.3ms",
              "root": "ح د ث",
              "pos": "verb",
              "gloss": "to converse"
            },
            {
              "surface": "مَعَهُ",
              "lemma": "مع",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "with"
            },
            {
              "surface": "وَيُقَرِّبُهُ",
              "lemma": "قرب",
              "features": "conj+impf.3ms+3ms",
              "root": "ق ر ب",
              "pos": "verb",
              "gloss": "to bring near"
            },
            {
              "surface": "إِلَيْهِ",
              "lemma": "إلى",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "to, towards"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا حَدَثَ لِمَحْمُوْدٍ لَمَّا صَامَ؟",
          "options": [
            "لَبِسَ جَدِيْدًا وَنَالَ هَدَايَا وَجَوَائِزَ",
            "عُوْقِبَ فِي الْمَدْرَسَةِ",
            "بَقِيَ وَحِيْدًا فِيْ بَيْتِهِ"
          ],
          "answer": 0,
          "qEn": "What happened to Mahmoud when he fasted?",
          "optionsEn": [
            "He wore new clothes and received gifts and prizes",
            "He was punished at school",
            "He stayed alone at home"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "The narrator has also heard that when a young child fasts, the reward goes to the parents too, and he wants his own parents to receive it.",
      "sentences": [
        {
          "id": "qr1-12-016",
          "page": 63,
          "ar": "وَقَدْ سَمِعْتُ أَنَّ الْوَلَدَ الصَّغِيْرَ إِذَا صَامَ كَانَ لِوَالِدَيْهِ الْأَجْرُ وَالثَّوَابُ.",
          "en": "I have heard that when a young child fasts, the reward and recompense go to his parents.",
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
              "surface": "سَمِعْتُ",
              "lemma": "سمع",
              "features": "perf.1s",
              "root": "س م ع",
              "pos": "verb",
              "gloss": "to hear"
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
              "surface": "الْوَلَدَ",
              "lemma": "ولد",
              "features": "def.acc",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "الصَّغِيْرَ",
              "lemma": "صغير",
              "features": "def.acc",
              "root": "ص غ ر",
              "pos": "adj",
              "gloss": "young, small"
            },
            {
              "surface": "إِذَا",
              "lemma": "إذا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "if, when"
            },
            {
              "surface": "صَامَ",
              "lemma": "صام",
              "features": "perf.3ms",
              "root": "ص و م",
              "pos": "verb",
              "gloss": "to fast"
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
              "surface": "لِوَالِدَيْهِ",
              "lemma": "والد",
              "features": "prep+du.gen+3ms",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "parent"
            },
            {
              "surface": "الْأَجْرُ",
              "lemma": "أجر",
              "features": "def.nom",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "reward"
            },
            {
              "surface": "وَالثَّوَابُ",
              "lemma": "ثواب",
              "features": "conj+def.nom",
              "root": "ث و ب",
              "pos": "noun",
              "gloss": "recompense, reward"
            }
          ]
        },
        {
          "id": "qr1-12-017",
          "page": 63,
          "ar": "وَأُحِبُّ أَنْ يَنَالَ أَبِيْ وَأُمِّي الْأَجْرَ وَالثَّوَابَ.",
          "en": "and I want my father and mother to attain the reward and recompense.",
          "tokens": [
            {
              "surface": "وَأُحِبُّ",
              "lemma": "أحب",
              "features": "conj+impf.1s",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love, want"
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
              "surface": "يَنَالَ",
              "lemma": "نال",
              "features": "impf.3ms",
              "root": "ن ي ل",
              "pos": "verb",
              "gloss": "to attain, receive"
            },
            {
              "surface": "أَبِيْ",
              "lemma": "أب",
              "features": "nom+1s",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "وَأُمِّي",
              "lemma": "أم",
              "features": "conj+nom+1s",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
            },
            {
              "surface": "الْأَجْرَ",
              "lemma": "أجر",
              "features": "def.acc",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "reward"
            },
            {
              "surface": "وَالثَّوَابَ",
              "lemma": "ثواب",
              "features": "conj+def.acc",
              "root": "ث و ب",
              "pos": "noun",
              "gloss": "recompense, reward"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنْ يَنَالُ الْأَجْرَ وَالثَّوَابَ إِذَا صَامَ الْوَلَدُ الصَّغِيْرُ؟",
          "options": [
            "وَالِدَاهُ",
            "مُعَلِّمُهُ",
            "جِيْرَانُهُ"
          ],
          "answer": 0,
          "qEn": "Who receives the reward and recompense if a young child fasts?",
          "optionsEn": [
            "His parents",
            "His teacher",
            "His neighbors"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "His father accepted and his mother agreed; she invited his friends over for the pre-dawn meal, they spent the night at his house, woke at four, ate well, slept a little, and rose again for the dawn prayer.",
      "sentences": [
        {
          "id": "qr1-12-018",
          "page": 64,
          "ar": "وَقَبِلَ أَبِيْ وَرَضِيَتْ أُمِّيْ.",
          "en": "My father accepted, and my mother agreed,",
          "tokens": [
            {
              "surface": "وَقَبِلَ",
              "lemma": "قبل-قبول",
              "features": "conj+perf.3ms",
              "root": "ق ب ل",
              "pos": "verb",
              "gloss": "to accept"
            },
            {
              "surface": "أَبِيْ",
              "lemma": "أب",
              "features": "nom+1s",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "وَرَضِيَتْ",
              "lemma": "رضي",
              "features": "conj+perf.3fs",
              "root": "ر ض ي",
              "pos": "verb",
              "gloss": "to be pleased"
            },
            {
              "surface": "أُمِّيْ",
              "lemma": "أم",
              "features": "nom+1s",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
            }
          ]
        },
        {
          "id": "qr1-12-019",
          "page": 64,
          "ar": "وَدَعَتْ أُمِّيْ أَصْدِقَائِيْ وَأَتْرَابِيْ لِلسُّحُوْرِ مَعِيْ.",
          "en": "and my mother invited my friends and peers for the pre-dawn meal with me,",
          "tokens": [
            {
              "surface": "وَدَعَتْ",
              "lemma": "دعا",
              "features": "conj+perf.3fs",
              "root": "د ع و",
              "pos": "verb",
              "gloss": "to invite; to pray for"
            },
            {
              "surface": "أُمِّيْ",
              "lemma": "أم",
              "features": "nom+1s",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
            },
            {
              "surface": "أَصْدِقَائِيْ",
              "lemma": "صديق",
              "features": "pl.acc+1s",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            },
            {
              "surface": "وَأَتْرَابِيْ",
              "lemma": "أتراب",
              "features": "conj+pl.acc+1s",
              "root": "ت ر ب",
              "pos": "noun",
              "gloss": "peers, those of the same age"
            },
            {
              "surface": "لِلسُّحُوْرِ",
              "lemma": "سحور",
              "features": "prep+def.gen",
              "root": "س ح ر",
              "pos": "noun",
              "gloss": "the pre-dawn meal (before the fast)"
            },
            {
              "surface": "مَعِيْ",
              "lemma": "مع",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "with"
            }
          ]
        },
        {
          "id": "qr1-12-020",
          "page": 64,
          "ar": "فَبَاتُوْا فِيْ بَيْتِيْ.",
          "en": "so they spent the night at my house.",
          "tokens": [
            {
              "surface": "فَبَاتُوْا",
              "lemma": "بات",
              "features": "conj+perf.3mp",
              "root": "ب ي ت",
              "pos": "verb",
              "gloss": "to spend the night"
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
              "surface": "بَيْتِيْ",
              "lemma": "بيت",
              "features": "gen+1s",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            }
          ]
        },
        {
          "id": "qr1-12-021",
          "page": 64,
          "ar": "وَفِي السَّاعَةِ الرَّابِعَةِ فِي اللَّيْلِ اسْتَيْقَظْنَا.",
          "en": "and at four o'clock at night we woke up,",
          "tokens": [
            {
              "surface": "وَفِي",
              "lemma": "في",
              "features": "conj+prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "السَّاعَةِ",
              "lemma": "ساعة",
              "features": "def.gen",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "الرَّابِعَةِ",
              "lemma": "رابع",
              "features": "def.gen",
              "root": "ر ب ع",
              "pos": "adj",
              "gloss": "fourth"
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
              "surface": "اللَّيْلِ",
              "lemma": "ليل",
              "features": "def.gen",
              "root": "ل ي ل",
              "pos": "noun",
              "gloss": "night"
            },
            {
              "surface": "اسْتَيْقَظْنَا",
              "lemma": "استيقظ",
              "features": "perf.1p",
              "root": "ي ق ظ",
              "pos": "verb",
              "gloss": "to wake up"
            }
          ]
        },
        {
          "id": "qr1-12-022",
          "page": 64,
          "ar": "وَقَدَّمَتْ أُمِّيْ طَعَامًا لَذِيْذًا.",
          "en": "and my mother served delicious food,",
          "tokens": [
            {
              "surface": "وَقَدَّمَتْ",
              "lemma": "قدم",
              "features": "conj+perf.3fs",
              "root": "ق د م",
              "pos": "verb",
              "gloss": "to bring forward, present, offer"
            },
            {
              "surface": "أُمِّيْ",
              "lemma": "أم",
              "features": "nom+1s",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
            },
            {
              "surface": "طَعَامًا",
              "lemma": "طعام",
              "features": "indef.acc",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            },
            {
              "surface": "لَذِيْذًا",
              "lemma": "لذيذ",
              "features": "indef.acc",
              "root": "ل ذ ذ",
              "pos": "adj",
              "gloss": "delicious"
            }
          ]
        },
        {
          "id": "qr1-12-023",
          "page": 64,
          "ar": "فَأَكَلْنَا وَشَبِعْنَا وَنِمْنَا قَلِيْلًا.",
          "en": "so we ate, and were full, and slept a little,",
          "tokens": [
            {
              "surface": "فَأَكَلْنَا",
              "lemma": "أكل",
              "features": "conj+perf.1p",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            },
            {
              "surface": "وَشَبِعْنَا",
              "lemma": "شبع",
              "features": "conj+perf.1p",
              "root": "ش ب ع",
              "pos": "verb",
              "gloss": "to be full, satiated"
            },
            {
              "surface": "وَنِمْنَا",
              "lemma": "نام",
              "features": "conj+perf.1p",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "to sleep"
            },
            {
              "surface": "قَلِيْلًا",
              "lemma": "قليل",
              "features": "acc",
              "root": "ق ل ل",
              "pos": "adv",
              "gloss": "a little, slightly"
            }
          ]
        },
        {
          "id": "qr1-12-024",
          "page": 64,
          "ar": "وَاسْتَيْقَظْنَا لِصَلَاةِ الصُّبْحِ.",
          "en": "and woke again for the dawn prayer.",
          "tokens": [
            {
              "surface": "وَاسْتَيْقَظْنَا",
              "lemma": "استيقظ",
              "features": "conj+perf.1p",
              "root": "ي ق ظ",
              "pos": "verb",
              "gloss": "to wake up"
            },
            {
              "surface": "لِصَلَاةِ",
              "lemma": "صلاة",
              "features": "prep+gen.constr",
              "root": "ص ل و",
              "pos": "noun",
              "gloss": "prayer"
            },
            {
              "surface": "الصُّبْحِ",
              "lemma": "صبح",
              "features": "def.gen",
              "root": "ص ب ح",
              "pos": "noun",
              "gloss": "dawn, morning"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا دَعَتْ أُمُّ الرَّاوِيْ أَصْدِقَاءَهُ؟",
          "options": [
            "لِلسُّحُوْرِ مَعَهُ",
            "لِلَّعِبِ فِي الْحَدِيْقَةِ",
            "لِمُذَاكَرَةِ الدَّرْسِ"
          ],
          "answer": 0,
          "qEn": "Why did the narrator's mother invite his friends?",
          "optionsEn": [
            "For the pre-dawn meal with him",
            "To play in the garden",
            "To study the lesson"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "en": "During the day his mother kept him occupied with easy tasks and time with friends, so that he wouldn't dwell on hunger or thirst -- and he didn't, until midday.",
      "sentences": [
        {
          "id": "qr1-12-025",
          "page": 64,
          "ar": "وَفِي النَّهَارِ أَرَادَتْ أُمِّيْ أَنْ تَشْغَلَنِيْ فَلَا أَذْكُرُ الْجُوْعَ وَالْعَطَشَ.",
          "en": "During the day my mother wanted to keep me busy so that I wouldn't dwell on hunger and thirst,",
          "tokens": [
            {
              "surface": "وَفِي",
              "lemma": "في",
              "features": "conj+prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "النَّهَارِ",
              "lemma": "نهار",
              "features": "def.gen",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "daytime"
            },
            {
              "surface": "أَرَادَتْ",
              "lemma": "أراد",
              "features": "perf.3fs",
              "root": "ر و د",
              "pos": "verb",
              "gloss": "to want"
            },
            {
              "surface": "أُمِّيْ",
              "lemma": "أم",
              "features": "nom+1s",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
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
              "surface": "تَشْغَلَنِيْ",
              "lemma": "شغل",
              "features": "impf.3fs+1s",
              "root": "ش غ ل",
              "pos": "verb",
              "gloss": "to occupy, keep busy"
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
              "surface": "أَذْكُرُ",
              "lemma": "ذكر",
              "features": "impf.1s",
              "root": "ذ ك ر",
              "pos": "verb",
              "gloss": "to remember, mention"
            },
            {
              "surface": "الْجُوْعَ",
              "lemma": "جوع",
              "features": "def.acc",
              "root": "ج و ع",
              "pos": "noun",
              "gloss": "hunger"
            },
            {
              "surface": "وَالْعَطَشَ",
              "lemma": "عطش",
              "features": "conj+def.acc",
              "root": "ع ط ش",
              "pos": "noun",
              "gloss": "thirst"
            }
          ]
        },
        {
          "id": "qr1-12-026",
          "page": 64,
          "ar": "فَأَمَرَتْنِيْ بِأَشْغَالٍ لَيْسَ فِيْهَا تَعَبٌ.",
          "en": "so she gave me tasks that had no fatigue in them,",
          "tokens": [
            {
              "surface": "فَأَمَرَتْنِيْ",
              "lemma": "أمر",
              "features": "conj+perf.3fs+1s",
              "root": "أ م ر",
              "pos": "verb",
              "gloss": "to order, command"
            },
            {
              "surface": "بِأَشْغَالٍ",
              "lemma": "أشغال",
              "features": "prep+indef.gen",
              "root": "ش غ ل",
              "pos": "noun",
              "gloss": "tasks, chores"
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
              "surface": "فِيْهَا",
              "lemma": "في",
              "features": "prep+3fs",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "تَعَبٌ",
              "lemma": "تعب",
              "features": "indef.nom",
              "root": "ت ع ب",
              "pos": "noun",
              "gloss": "fatigue, tiredness"
            }
          ]
        },
        {
          "id": "qr1-12-027",
          "page": 64,
          "ar": "وَكُنْتُ فِيْ شُغْلٍ وَحَدِيْثٍ مَعَ الْأَصْدِقَاءِ وَالْأَتْرَابِ.",
          "en": "and I was occupied with chores and talk with my friends and peers,",
          "tokens": [
            {
              "surface": "وَكُنْتُ",
              "lemma": "كان",
              "features": "conj+perf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
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
              "surface": "شُغْلٍ",
              "lemma": "شغل",
              "features": "indef.gen",
              "root": "ش غ ل",
              "pos": "noun",
              "gloss": "occupation, chore"
            },
            {
              "surface": "وَحَدِيْثٍ",
              "lemma": "حديث",
              "features": "conj+indef.gen",
              "root": "ح د ث",
              "pos": "noun",
              "gloss": "talk, conversation"
            },
            {
              "surface": "مَعَ",
              "lemma": "مع",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "with"
            },
            {
              "surface": "الْأَصْدِقَاءِ",
              "lemma": "صديق",
              "features": "def.pl.gen",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            },
            {
              "surface": "وَالْأَتْرَابِ",
              "lemma": "أتراب",
              "features": "conj+def.gen",
              "root": "ت ر ب",
              "pos": "noun",
              "gloss": "peers, those of the same age"
            }
          ]
        },
        {
          "id": "qr1-12-028",
          "page": 64,
          "ar": "حَتَّىٰ انْتَصَفَ النَّهَارُ.",
          "en": "until midday came,",
          "tokens": [
            {
              "surface": "حَتَّىٰ",
              "lemma": "حتى",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "until; so that"
            },
            {
              "surface": "انْتَصَفَ",
              "lemma": "انتصف",
              "features": "perf.3ms",
              "root": "ن ص ف",
              "pos": "verb",
              "gloss": "to reach the midpoint"
            },
            {
              "surface": "النَّهَارُ",
              "lemma": "نهار",
              "features": "def.nom",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "daytime"
            }
          ]
        },
        {
          "id": "qr1-12-029",
          "page": 64,
          "ar": "وَمَا شَعَرْتُ بِجُوْعٍ وَلَا عَطَشٍ.",
          "en": "and I felt neither hunger nor thirst.",
          "tokens": [
            {
              "surface": "وَمَا",
              "lemma": "ما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not; what"
            },
            {
              "surface": "شَعَرْتُ",
              "lemma": "شعر",
              "features": "perf.1s",
              "root": "ش ع ر",
              "pos": "verb",
              "gloss": "to feel, sense"
            },
            {
              "surface": "بِجُوْعٍ",
              "lemma": "جوع",
              "features": "prep+indef.gen",
              "root": "ج و ع",
              "pos": "noun",
              "gloss": "hunger"
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
              "surface": "عَطَشٍ",
              "lemma": "عطش",
              "features": "indef.gen",
              "root": "ع ط ش",
              "pos": "noun",
              "gloss": "thirst"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا أَمَرَتْ أُمُّ الرَّاوِيْ ابْنَهَا فِي النَّهَارِ؟",
          "options": [
            "بِأَشْغَالٍ لَيْسَ فِيْهَا تَعَبٌ",
            "بِالنَّوْمِ طُوْلَ الْيَوْمِ",
            "بِمُذَاكَرَةِ الدُّرُوْسِ"
          ],
          "answer": 0,
          "qEn": "What did the narrator's mother have him do during the day?",
          "optionsEn": [
            "Easy tasks that had no fatigue in them",
            "Sleep all day",
            "Study his lessons"
          ]
        }
      ]
    },
    {
      "id": "p7",
      "en": "At midday he felt thirsty and hot, so he washed and the thirst left him and he rested.",
      "sentences": [
        {
          "id": "qr1-12-030",
          "page": 64,
          "ar": "وَفِي الظَّهِيْرَةِ شَعَرْتُ بِظَمَأٍ وَحَرٍّ.",
          "en": "At midday I felt thirst and heat,",
          "tokens": [
            {
              "surface": "وَفِي",
              "lemma": "في",
              "features": "conj+prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الظَّهِيْرَةِ",
              "lemma": "ظهيرة",
              "features": "def.gen",
              "root": "ظ ه ر",
              "pos": "noun",
              "gloss": "midday"
            },
            {
              "surface": "شَعَرْتُ",
              "lemma": "شعر",
              "features": "perf.1s",
              "root": "ش ع ر",
              "pos": "verb",
              "gloss": "to feel, sense"
            },
            {
              "surface": "بِظَمَأٍ",
              "lemma": "ظمأ",
              "features": "prep+indef.gen",
              "root": "ظ م أ",
              "pos": "noun",
              "gloss": "thirst"
            },
            {
              "surface": "وَحَرٍّ",
              "lemma": "حر-حرارة",
              "features": "conj+indef.gen",
              "root": "ح ر ر",
              "pos": "noun",
              "gloss": "heat"
            }
          ]
        },
        {
          "id": "qr1-12-031",
          "page": 64,
          "ar": "فَاغْتَسَلْتُ فَذَهَبَ عَنِّي الظَّمَأُ وَاسْتَرَحْتُ.",
          "en": "so I washed, and the thirst left me, and I rested.",
          "tokens": [
            {
              "surface": "فَاغْتَسَلْتُ",
              "lemma": "اغتسل",
              "features": "conj+perf.1s",
              "root": "غ س ل",
              "pos": "verb",
              "gloss": "to bathe, wash oneself"
            },
            {
              "surface": "فَذَهَبَ",
              "lemma": "ذهب",
              "features": "conj+perf.3ms",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go; (of a feeling) to go away, leave"
            },
            {
              "surface": "عَنِّي",
              "lemma": "عن",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "from, away from; about"
            },
            {
              "surface": "الظَّمَأُ",
              "lemma": "ظمأ",
              "features": "def.nom",
              "root": "ظ م أ",
              "pos": "noun",
              "gloss": "thirst"
            },
            {
              "surface": "وَاسْتَرَحْتُ",
              "lemma": "استراح",
              "features": "conj+perf.1s",
              "root": "ر و ح",
              "pos": "verb",
              "gloss": "to rest"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلَ الرَّاوِيْ لَمَّا شَعَرَ بِالظَّمَأِ وَالْحَرِّ؟",
          "options": [
            "اغْتَسَلَ فَذَهَبَ عَنْهُ الظَّمَأُ",
            "شَرِبَ الْمَاءَ",
            "نَامَ حَتَّى الْمَغْرِبِ"
          ],
          "answer": 0,
          "qEn": "What did the narrator do when he felt thirst and heat?",
          "optionsEn": [
            "He washed, and the thirst left him",
            "He drank water",
            "He slept until sunset"
          ]
        }
      ]
    },
    {
      "id": "p8",
      "en": "In the afternoon hunger returned at the sight of food and fruit, and a friend told him no one would see if he ate -- he himself had once eaten while fasting -- but the narrator answers that though no one here sees him, God sees him.",
      "sentences": [
        {
          "id": "qr1-12-032",
          "page": 64,
          "ar": "وَفِي الْعَصْرِ شَعَرْتُ بِالْجُوْعِ.",
          "en": "In the afternoon I felt hunger,",
          "tokens": [
            {
              "surface": "وَفِي",
              "lemma": "في",
              "features": "conj+prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الْعَصْرِ",
              "lemma": "عصر",
              "features": "def.gen",
              "root": "ع ص ر",
              "pos": "noun",
              "gloss": "afternoon"
            },
            {
              "surface": "شَعَرْتُ",
              "lemma": "شعر",
              "features": "perf.1s",
              "root": "ش ع ر",
              "pos": "verb",
              "gloss": "to feel, sense"
            },
            {
              "surface": "بِالْجُوْعِ",
              "lemma": "جوع",
              "features": "prep+def.gen",
              "root": "ج و ع",
              "pos": "noun",
              "gloss": "hunger"
            }
          ]
        },
        {
          "id": "qr1-12-033",
          "page": 64,
          "ar": "وَرَأَيْتُ أَطْعِمَةً وَثِمَارًا وَفَوَاكِهَ.",
          "en": "and I saw foods and fruits and produce,",
          "tokens": [
            {
              "surface": "وَرَأَيْتُ",
              "lemma": "رأى",
              "features": "conj+perf.1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "أَطْعِمَةً",
              "lemma": "أطعمة",
              "features": "indef.acc",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "foods"
            },
            {
              "surface": "وَثِمَارًا",
              "lemma": "ثمار",
              "features": "conj+indef.acc",
              "root": "ث م ر",
              "pos": "noun",
              "gloss": "fruits"
            },
            {
              "surface": "وَفَوَاكِهَ",
              "lemma": "فواكه",
              "features": "conj+indef.acc",
              "root": "ف ك ه",
              "pos": "noun",
              "gloss": "fruits"
            }
          ]
        },
        {
          "id": "qr1-12-034",
          "page": 64,
          "ar": "وَقَالَ لِيْ أَحَدُ الْأَصْدِقَاءِ: لَا بَأْسَ أَنْ تَأْكُلَ شَيْئًا وَلَا يَرَاكَ الْآنَ أَحَدٌ.",
          "en": "and one of my friends said to me: there's no harm in eating something -- no one sees you now,",
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
              "surface": "لِيْ",
              "lemma": "ل",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "for, to; belonging to"
            },
            {
              "surface": "أَحَدُ",
              "lemma": "أحد",
              "features": "nom.constr",
              "root": "أ ح د",
              "pos": "noun",
              "gloss": "one, someone, anyone"
            },
            {
              "surface": "الْأَصْدِقَاءِ",
              "lemma": "صديق",
              "features": "def.pl.gen",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
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
              "surface": "بَأْسَ",
              "lemma": "بأس",
              "features": "acc",
              "root": "ب أ س",
              "pos": "noun",
              "gloss": "harm"
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
              "surface": "تَأْكُلَ",
              "lemma": "أكل",
              "features": "impf.2ms",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            },
            {
              "surface": "شَيْئًا",
              "lemma": "شيء",
              "features": "indef.acc",
              "root": "ش ي أ",
              "pos": "noun",
              "gloss": "thing"
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
              "surface": "يَرَاكَ",
              "lemma": "رأى",
              "features": "impf.3ms+2ms",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "الْآنَ",
              "lemma": "الآن",
              "features": "adv",
              "root": "",
              "pos": "adv",
              "gloss": "now"
            },
            {
              "surface": "أَحَدٌ",
              "lemma": "أحد",
              "features": "indef.nom",
              "root": "أ ح د",
              "pos": "noun",
              "gloss": "one, someone, anyone"
            }
          ]
        },
        {
          "id": "qr1-12-035",
          "page": 64,
          "ar": "وَقَدْ أَكَلْتُ أَيْضًا لَمَّا كُنْتُ صَائِمًا.",
          "en": "and indeed I too used to eat when I was fasting,",
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
              "surface": "أَكَلْتُ",
              "lemma": "أكل",
              "features": "perf.1s",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            },
            {
              "surface": "أَيْضًا",
              "lemma": "أيضا",
              "features": "adv",
              "root": "",
              "pos": "adv",
              "gloss": "also, too"
            },
            {
              "surface": "لَمَّا",
              "lemma": "لما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "when (in the past)"
            },
            {
              "surface": "كُنْتُ",
              "lemma": "كان",
              "features": "perf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "صَائِمًا",
              "lemma": "صام",
              "features": "indef.acc",
              "root": "ص و م",
              "pos": "adj",
              "gloss": "fasting"
            }
          ]
        },
        {
          "id": "qr1-12-036",
          "page": 64,
          "ar": "قُلْتُ: لَا يَرَانِيْ هُنَا أَحَدٌ وَلٰكِنَّ اللهَ يَرَانِيْ.",
          "en": "I said: no one here sees me, but God sees me.",
          "tokens": [
            {
              "surface": "قُلْتُ",
              "lemma": "قال",
              "features": "perf.1s",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
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
              "surface": "يَرَانِيْ",
              "lemma": "رأى",
              "features": "impf.3ms+1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "هُنَا",
              "lemma": "هنا",
              "features": "adv",
              "root": "",
              "pos": "adv",
              "gloss": "here"
            },
            {
              "surface": "أَحَدٌ",
              "lemma": "أحد",
              "features": "indef.nom",
              "root": "أ ح د",
              "pos": "noun",
              "gloss": "one, someone, anyone"
            },
            {
              "surface": "وَلٰكِنَّ",
              "lemma": "لكن",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "but"
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
              "surface": "يَرَانِيْ",
              "lemma": "رأى",
              "features": "impf.3ms+1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا أَجَابَ الرَّاوِيْ صَدِيْقَهُ لَمَّا قَالَ لَهُ: لَا يَرَاكَ الْآنَ أَحَدٌ؟",
          "options": [
            "لَا يَرَانِيْ هُنَا أَحَدٌ وَلٰكِنَّ اللهَ يَرَانِيْ",
            "أَنَا لَسْتُ جَائِعًا",
            "سَآكُلُ بَعْدَ الْمَغْرِبِ"
          ],
          "answer": 0,
          "qEn": "How did the narrator answer his friend who said no one sees him now?",
          "optionsEn": [
            "No one here sees me, but God sees me",
            "I'm not hungry",
            "I'll eat after sunset"
          ]
        }
      ]
    },
    {
      "id": "p9",
      "en": "His friend fell silent, and the narrator bore the hunger patiently.",
      "sentences": [
        {
          "id": "qr1-12-037",
          "page": 64,
          "ar": "وَسَكَتَ صَدِيْقِيْ وَصَبَرْتُ عَلَىٰ الْجُوْعِ.",
          "en": "My friend fell silent, and I bore the hunger patiently.",
          "tokens": [
            {
              "surface": "وَسَكَتَ",
              "lemma": "سكت",
              "features": "conj+perf.3ms",
              "root": "س ك ت",
              "pos": "verb",
              "gloss": "to fall silent"
            },
            {
              "surface": "صَدِيْقِيْ",
              "lemma": "صديق",
              "features": "nom+1s",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            },
            {
              "surface": "وَصَبَرْتُ",
              "lemma": "صبر",
              "features": "conj+perf.1s",
              "root": "ص ب ر",
              "pos": "verb",
              "gloss": "to be patient, endure"
            },
            {
              "surface": "عَلَىٰ",
              "lemma": "على",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, on"
            },
            {
              "surface": "الْجُوْعِ",
              "lemma": "جوع",
              "features": "def.gen",
              "root": "ج و ع",
              "pos": "noun",
              "gloss": "hunger"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلَ صَدِيْقُ الرَّاوِيْ لَمَّا سَمِعَ جَوَابَهُ؟",
          "options": [
            "سَكَتَ",
            "غَضِبَ",
            "ضَحِكَ"
          ],
          "answer": 0,
          "qEn": "What did the narrator's friend do when he heard his answer?",
          "optionsEn": [
            "He fell silent",
            "He got angry",
            "He laughed"
          ]
        }
      ]
    },
    {
      "id": "p10",
      "en": "Before sunset his father's friends and their relatives gathered, and the iftar was carried to the mosque -- the wait felt long, so he kept watching the muezzin and counting the minutes, until the adhan sounded and he broke his fast with a date, ate and drank, and said the dua his father taught him.",
      "sentences": [
        {
          "id": "qr1-12-038",
          "page": 64,
          "ar": "وَقَبْلَ الْغُرُوْبِ حَضَرَ أَصْدِقَاءُ أَبِيْ وَأَقَارِبُنَا.",
          "en": "Before sunset my father's friends and our relatives came,",
          "tokens": [
            {
              "surface": "وَقَبْلَ",
              "lemma": "قبل",
              "features": "conj+prep",
              "root": "",
              "pos": "prep",
              "gloss": "before"
            },
            {
              "surface": "الْغُرُوْبِ",
              "lemma": "غروب",
              "features": "def.gen",
              "root": "غ ر ب",
              "pos": "noun",
              "gloss": "sunset"
            },
            {
              "surface": "حَضَرَ",
              "lemma": "حضر-حضور",
              "features": "perf.3ms",
              "root": "ح ض ر",
              "pos": "verb",
              "gloss": "to attend, be present"
            },
            {
              "surface": "أَصْدِقَاءُ",
              "lemma": "صديق",
              "features": "pl.nom.constr",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            },
            {
              "surface": "أَبِيْ",
              "lemma": "أب",
              "features": "gen+1s",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "وَأَقَارِبُنَا",
              "lemma": "أقارب",
              "features": "conj+nom+1p",
              "root": "ق ر ب",
              "pos": "noun",
              "gloss": "relatives"
            }
          ]
        },
        {
          "id": "qr1-12-039",
          "page": 64,
          "ar": "وَنُقِلَ الْفُطُوْرُ إِلَى الْمَسْجِدِ.",
          "en": "and the iftar meal was carried to the mosque.",
          "tokens": [
            {
              "surface": "وَنُقِلَ",
              "lemma": "نقل",
              "features": "conj+perf.3ms",
              "root": "ن ق ل",
              "pos": "verb",
              "gloss": "to move, transfer"
            },
            {
              "surface": "الْفُطُوْرُ",
              "lemma": "فطور",
              "features": "def.nom",
              "root": "ف ط ر",
              "pos": "noun",
              "gloss": "the meal that breaks the fast (iftar)"
            },
            {
              "surface": "إِلَى",
              "lemma": "إلى",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "to, towards"
            },
            {
              "surface": "الْمَسْجِدِ",
              "lemma": "مسجد",
              "features": "def.gen",
              "root": "س ج د",
              "pos": "noun",
              "gloss": "mosque"
            }
          ]
        },
        {
          "id": "qr1-12-040",
          "page": 65,
          "ar": "وَكَانَ الْوَقْتُ شَدِيْدًا عَلَيَّ فَكُنْتُ أَرْمُقُ الْمُؤَذِّنَ وَأَعُدُّ الدَّقَائِقَ.",
          "en": "The wait weighed heavily on me, so I kept watching the muezzin and counting the minutes,",
          "tokens": [
            {
              "surface": "وَكَانَ",
              "lemma": "كان",
              "features": "conj+perf.3ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "الْوَقْتُ",
              "lemma": "وقت",
              "features": "def.nom",
              "root": "و ق ت",
              "pos": "noun",
              "gloss": "time"
            },
            {
              "surface": "شَدِيْدًا",
              "lemma": "شديد",
              "features": "indef.acc",
              "root": "ش د د",
              "pos": "adj",
              "gloss": "severe, intense"
            },
            {
              "surface": "عَلَيَّ",
              "lemma": "على",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "upon, on"
            },
            {
              "surface": "فَكُنْتُ",
              "lemma": "كان",
              "features": "conj+perf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "أَرْمُقُ",
              "lemma": "رمق",
              "features": "impf.1s",
              "root": "ر م ق",
              "pos": "verb",
              "gloss": "to watch, gaze at"
            },
            {
              "surface": "الْمُؤَذِّنَ",
              "lemma": "مؤذن",
              "features": "def.acc",
              "root": "أ ذ ن",
              "pos": "noun",
              "gloss": "muezzin (one who calls the adhan)"
            },
            {
              "surface": "وَأَعُدُّ",
              "lemma": "عد",
              "features": "conj+impf.1s",
              "root": "ع د د",
              "pos": "verb",
              "gloss": "to count"
            },
            {
              "surface": "الدَّقَائِقَ",
              "lemma": "دقيقة",
              "features": "def.pl.acc",
              "root": "د ق ق",
              "pos": "noun",
              "gloss": "minute"
            }
          ]
        },
        {
          "id": "qr1-12-041",
          "page": 65,
          "ar": "فَلَمَّا أَذَّنَ أَفْطَرْتُ بِتَمْرَةٍ ثُمَّ أَكَلْتُ وَشَرِبْتُ.",
          "en": "and when the adhan sounded I broke my fast with a date, then ate and drank,",
          "tokens": [
            {
              "surface": "فَلَمَّا",
              "lemma": "لما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "when (in the past)"
            },
            {
              "surface": "أَذَّنَ",
              "lemma": "أذن",
              "features": "perf.3ms",
              "root": "أ ذ ن",
              "pos": "verb",
              "gloss": "to call the adhan (call to prayer)"
            },
            {
              "surface": "أَفْطَرْتُ",
              "lemma": "أفطر",
              "features": "perf.1s",
              "root": "ف ط ر",
              "pos": "verb",
              "gloss": "to eat breakfast; to break a fast"
            },
            {
              "surface": "بِتَمْرَةٍ",
              "lemma": "تمرة",
              "features": "prep+indef.gen",
              "root": "ت م ر",
              "pos": "noun",
              "gloss": "a date (fruit)"
            },
            {
              "surface": "ثُمَّ",
              "lemma": "ثم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "then"
            },
            {
              "surface": "أَكَلْتُ",
              "lemma": "أكل",
              "features": "perf.1s",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            },
            {
              "surface": "وَشَرِبْتُ",
              "lemma": "شرب",
              "features": "conj+perf.1s",
              "root": "ش ر ب",
              "pos": "verb",
              "gloss": "to drink"
            }
          ]
        },
        {
          "id": "qr1-12-042",
          "page": 65,
          "ar": "وَقُلْتُ كَمَا عَلَّمَنِيْ أَبِيْ: «ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوْقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللهُ».",
          "en": "and I said, just as my father had taught me: \"The thirst is gone, the veins are moist, and the reward is assured, if God wills.\"",
          "tokens": [
            {
              "surface": "وَقُلْتُ",
              "lemma": "قال",
              "features": "conj+perf.1s",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "كَمَا",
              "lemma": "كما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "as, just as"
            },
            {
              "surface": "عَلَّمَنِيْ",
              "lemma": "علّم",
              "features": "perf.3ms+1s",
              "root": "ع ل م",
              "pos": "verb",
              "gloss": "to teach"
            },
            {
              "surface": "أَبِيْ",
              "lemma": "أب",
              "features": "nom+1s",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "ذَهَبَ",
              "lemma": "ذهب",
              "features": "perf.3ms",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go; (of a feeling) to go away, leave"
            },
            {
              "surface": "الظَّمَأُ",
              "lemma": "ظمأ",
              "features": "def.nom",
              "root": "ظ م أ",
              "pos": "noun",
              "gloss": "thirst"
            },
            {
              "surface": "وَابْتَلَّتِ",
              "lemma": "ابتل",
              "features": "conj+perf.3fs",
              "root": "ب ل ل",
              "pos": "verb",
              "gloss": "to become moist, wet"
            },
            {
              "surface": "الْعُرُوْقُ",
              "lemma": "عروق",
              "features": "def.nom",
              "root": "ع ر ق",
              "pos": "noun",
              "gloss": "veins"
            },
            {
              "surface": "وَثَبَتَ",
              "lemma": "ثبت",
              "features": "conj+perf.3ms",
              "root": "ث ب ت",
              "pos": "verb",
              "gloss": "to be confirmed, established"
            },
            {
              "surface": "الْأَجْرُ",
              "lemma": "أجر",
              "features": "def.nom",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "reward"
            },
            {
              "surface": "إِنْ",
              "lemma": "إن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "if"
            },
            {
              "surface": "شَاءَ",
              "lemma": "شاء",
              "features": "perf.3ms",
              "root": "ش ي أ",
              "pos": "verb",
              "gloss": "to will, wish"
            },
            {
              "surface": "اللهُ",
              "lemma": "الله",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا أَفْطَرَ الرَّاوِيْ؟",
          "options": [
            "بِتَمْرَةٍ",
            "بِمَاءٍ بَارِدٍ",
            "بِطَعَامٍ كَثِيْرٍ"
          ],
          "answer": 0,
          "qEn": "What did the narrator break his fast with?",
          "optionsEn": [
            "A date",
            "Cold water",
            "A large meal"
          ]
        }
      ]
    },
    {
      "id": "p11",
      "en": "No food ever tasted better to him than that day's, and no day in his life was more beautiful than that one.",
      "sentences": [
        {
          "id": "qr1-12-043",
          "page": 65,
          "ar": "وَمَا أَكَلْتُ طَعَامًا أَلَذَّ مِنْ طَعَامِ ذٰلِكَ الْيَوْمِ.",
          "en": "I never ate food more delicious than that day's food,",
          "tokens": [
            {
              "surface": "وَمَا",
              "lemma": "ما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not; what"
            },
            {
              "surface": "أَكَلْتُ",
              "lemma": "أكل",
              "features": "perf.1s",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            },
            {
              "surface": "طَعَامًا",
              "lemma": "طعام",
              "features": "indef.acc",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            },
            {
              "surface": "أَلَذَّ",
              "lemma": "لذيذ",
              "features": "acc",
              "root": "ل ذ ذ",
              "pos": "adj",
              "gloss": "more/most delicious"
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
              "surface": "طَعَامِ",
              "lemma": "طعام",
              "features": "gen.constr",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            },
            {
              "surface": "ذٰلِكَ",
              "lemma": "ذلك",
              "features": "gen",
              "root": "",
              "pos": "noun",
              "gloss": "that"
            },
            {
              "surface": "الْيَوْمِ",
              "lemma": "يوم",
              "features": "def.gen",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            }
          ]
        },
        {
          "id": "qr1-12-044",
          "page": 65,
          "ar": "وَمَا كَانَ يَوْمٌ أَجْمَلَ فِيْ حَيَاتِيْ مِنْ ذٰلِكَ الْيَوْمِ.",
          "en": "and there was no day more beautiful in my life than that day.",
          "tokens": [
            {
              "surface": "وَمَا",
              "lemma": "ما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not; what"
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
              "surface": "يَوْمٌ",
              "lemma": "يوم",
              "features": "indef.nom",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "أَجْمَلَ",
              "lemma": "جميل",
              "features": "acc",
              "root": "ج م ل",
              "pos": "adj",
              "gloss": "more/most beautiful"
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
              "surface": "حَيَاتِيْ",
              "lemma": "حياة",
              "features": "gen+1s",
              "root": "ح ي ي",
              "pos": "noun",
              "gloss": "life"
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
              "surface": "ذٰلِكَ",
              "lemma": "ذلك",
              "features": "gen",
              "root": "",
              "pos": "noun",
              "gloss": "that"
            },
            {
              "surface": "الْيَوْمِ",
              "lemma": "يوم",
              "features": "def.gen",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَيْفَ وَصَفَ الرَّاوِيْ ذٰلِكَ الْيَوْمَ فِيْ نِهَايَةِ الْقِصَّةِ؟",
          "options": [
            "أَجْمَلَ يَوْمٍ فِيْ حَيَاتِهِ",
            "يَوْمًا صَعْبًا لَا يُنْسَى",
            "يَوْمًا عَادِيًّا"
          ],
          "answer": 0,
          "qEn": "How did the narrator describe that day at the end of the story?",
          "optionsEn": [
            "The most beautiful day of his life",
            "A hard day he'd never forget",
            "An ordinary day"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "وَقَبِلَ أَبِيْ وَرَضِيَتْ",
        "post": "",
        "en": "My father accepted, and my mother agreed.",
        "options": [
          "أُمِّيْ",
          "أَبِيْ",
          "أُمُّهُ",
          "أُمَّهَاتِيْ"
        ],
        "answer": 0,
        "rationales": [
          "nominative + 1s -- subject of رَضِيَتْ, \"my mother.\"",
          "masculine -- رَضِيَتْ carries the feminine ـتْ, and أَبِيْ has already accepted in the first half.",
          "\"his mother\" -- the passage is told in the first person throughout.",
          "plural -- wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَدَعَتْ أُمِّيْ",
        "post": "وَأَتْرَابِيْ لِلسُّحُوْرِ مَعِيْ",
        "en": "My mother invited my friends and peers for the pre-dawn meal with me.",
        "options": [
          "أَصْدِقَائِيْ",
          "أَصْدِقَائِي",
          "أَصْدِقَاؤُهَا",
          "صَدِيْقِيْ"
        ],
        "answer": 0,
        "rationales": [
          "accusative plural + 1s -- object of دَعَتْ, \"my friends.\"",
          "duplicate distractor -- kept for parity.",
          "nominative + 3fs -- wrong case and person.",
          "singular -- wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَفِي السَّاعَةِ الرَّابِعَةِ فِي اللَّيْلِ",
        "post": "",
        "en": "At four o'clock at night we woke up.",
        "options": [
          "اسْتَيْقَظْنَا",
          "اسْتَيْقَظْتُ",
          "اسْتَيْقَظُوْا",
          "تَسْتَيْقِظُ"
        ],
        "answer": 0,
        "rationales": [
          "1st plural perfect -- we woke up.",
          "1st singular -- wrong person.",
          "3rd masc. plural -- wrong person.",
          "3rd fem. singular imperfect -- wrong tense and person."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَفِي النَّهَارِ أَرَادَتْ أُمِّيْ أَنْ",
        "post": "فَلَا أَذْكُرُ الْجُوْعَ وَالْعَطَشَ",
        "en": "My mother wanted to keep me busy so that I wouldn't dwell on hunger and thirst.",
        "options": [
          "تَشْغَلَنِيْ",
          "تَشْغَلُنِيْ",
          "أَشْغَلَهَا",
          "تَشْغَلُهُ"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular subjunctive + 1s object -- \"that she keep me busy.\"",
          "indicative -- wrong mood after أَنْ.",
          "1st singular + 3fs object -- wrong person entirely.",
          "3rd fem. singular + 3ms object -- wrong object person."
        ]
      },
      {
        "type": "cloze",
        "pre": "حَتَّىٰ انْتَصَفَ",
        "post": "",
        "en": "Until midday came.",
        "options": [
          "النَّهَارُ",
          "النَّهَارَ",
          "النَّهَارِ",
          "نَهَارٌ"
        ],
        "answer": 0,
        "rationales": [
          "nominative -- subject of انْتَصَفَ.",
          "accusative -- wrong case.",
          "genitive -- wrong case.",
          "indefinite -- wrong definiteness; the day already introduced is definite."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَفِي الظَّهِيْرَةِ شَعَرْتُ بِظَمَأٍ",
        "post": "",
        "en": "At midday I felt thirst and heat.",
        "options": [
          "وَحَرٍّ",
          "وَحَرٌّ",
          "وَحَرَّ",
          "وَحَارٌّ"
        ],
        "answer": 0,
        "rationales": [
          "genitive, conjoined with بِظَمَأٍ after the preposition.",
          "nominative -- wrong case.",
          "accusative -- wrong case.",
          "an adjective form, not the noun \"heat\"."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَقَالَ لِيْ أَحَدُ الْأَصْدِقَاءِ: لَا بَأْسَ أَنْ تَأْكُلَ شَيْئًا وَلَا يَرَاكَ الْآنَ",
        "post": "",
        "en": "One of my friends said: there's no harm eating something -- no one sees you now.",
        "options": [
          "أَحَدٌ",
          "أَحَدًا",
          "أَحَدٍ",
          "الْأَحَدُ"
        ],
        "answer": 0,
        "rationales": [
          "nominative -- subject of يَرَاكَ, \"no one.\"",
          "accusative -- wrong case.",
          "genitive -- wrong case.",
          "definite -- wrong definiteness; \"anyone\" stays indefinite here."
        ]
      },
      {
        "type": "cloze",
        "pre": "قُلْتُ: لَا يَرَانِيْ هُنَا أَحَدٌ وَلٰكِنَّ",
        "post": "يَرَانِيْ",
        "en": "I said: no one here sees me, but God sees me.",
        "options": [
          "اللهَ",
          "اللهُ",
          "اللهِ",
          "إِلٰه"
        ],
        "answer": 0,
        "rationales": [
          "accusative -- ism of the emphatic لٰكِنَّ.",
          "nominative -- wrong case after لٰكِنَّ.",
          "genitive -- wrong case.",
          "a different, indefinite word entirely."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَقَبْلَ الْغُرُوْبِ حَضَرَ أَصْدِقَاءُ",
        "post": "وَأَقَارِبُنَا",
        "en": "Before sunset my father's friends and our relatives came.",
        "options": [
          "أَبِيْ",
          "أَبٌ",
          "أَبَاهُ",
          "الْأَبُ"
        ],
        "answer": 0,
        "rationales": [
          "genitive + 1s -- second term of the construct أَصْدِقَاءُ أَبِيْ, \"my father.\"",
          "indefinite nominative -- the second term of an إضافة has to be مجرور.",
          "accusative with a pronoun -- in this slot it would have to be أَبِيْهِ.",
          "a bare definite noun -- breaks the construct; can't follow a construct head with the article."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَلَمَّا أَذَّنَ أَفْطَرْتُ",
        "post": "ثُمَّ أَكَلْتُ وَشَرِبْتُ",
        "en": "When the adhan sounded I broke my fast with a date, then ate and drank.",
        "options": [
          "بِتَمْرَةٍ",
          "بِتَمْرَةٌ",
          "تَمْرَةً",
          "بِتَمَرَاتٍ"
        ],
        "answer": 0,
        "rationales": [
          "genitive after the preposition بِ, \"with a date.\"",
          "nominative -- wrong case after a preposition.",
          "accusative with no preposition -- doesn't match the wording.",
          "plural -- wrong number; a single date."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "طَلَبَ الرَّاوِيْ أَنْ يَصُوْمَ",
        "pre": "",
        "post": "أَنْ يَصُوْمَ",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "طَلَبَتْ",
          "طَلَبَ",
          "طَلَبْتَ",
          "طَلَبْنَا"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular perfect -- she asked.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "قَالَ أَبِيْ: أَنْتَ صَغِيْرٌ ضَعِيْفٌ",
        "pre": "",
        "post": "أَنْتَ صَغِيْرٌ ضَعِيْفٌ",
        "targetPerson": "أَنْتُمَا",
        "targetEn": "you two (m.)",
        "options": [
          "أَنْتُمَا صَغِيْرَانِ ضَعِيْفَانِ",
          "أَنْتَ صَغِيْرٌ ضَعِيْفٌ",
          "أَنْتُمَا صَغِيْرٌ ضَعِيْفٌ",
          "أَنْتُمْ صِغَارٌ ضِعَافٌ"
        ],
        "answer": 0,
        "rationales": [
          "dual predicate agreement -- you two are young and weak.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَقَبِلَ أَبِيْ وَرَضِيَتْ أُمِّيْ",
        "pre": "",
        "post": "أُمِّيْ",
        "targetPerson": "الْوَالِدَانِ",
        "targetEn": "the parents",
        "options": [
          "قَبِلَ الْوَالِدَانِ وَرَضِيَا",
          "قَبِلَ أَبِيْ وَرَضِيَتْ",
          "قَبِلُوا وَرَضُوا",
          "قَبِلَتِ الْوَالِدَانِ وَرَضِيَتْ"
        ],
        "answer": 0,
        "rationales": [
          "dual verbs -- the two parents accepted and agreed.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَأَمَرَتْنِيْ بِأَشْغَالٍ لَيْسَ فِيْهَا تَعَبٌ",
        "pre": "",
        "post": "بِأَشْغَالٍ لَيْسَ فِيْهَا تَعَبٌ",
        "targetPerson": "هُمَا",
        "targetEn": "they two (m.)",
        "options": [
          "فَأَمَرَتْهُمَا",
          "فَأَمَرَتْنِيْ",
          "فَأَمَرَتْهُ",
          "فَأَمَرَتْهُمْ"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular + 3md object -- she gave the two of them tasks.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَمَا شَعَرْتُ بِجُوْعٍ وَلَا عَطَشٍ",
        "pre": "",
        "post": "بِجُوْعٍ وَلَا عَطَشٍ",
        "targetPerson": "هُنَّ",
        "targetEn": "they (f.)",
        "options": [
          "وَمَا شَعَرْنَ",
          "وَمَا شَعَرْتُ",
          "وَمَا شَعَرَتْ",
          "وَمَا شَعَرُوا"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. plural perfect -- they (f.) felt nothing.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَاغْتَسَلْتُ فَذَهَبَ عَنِّي الظَّمَأُ",
        "pre": "",
        "post": "الظَّمَأُ",
        "targetPerson": "أَنْتِ",
        "targetEn": "you (f. sg.)",
        "options": [
          "فَاغْتَسَلْتِ فَذَهَبَ عَنْكِ",
          "فَاغْتَسَلْتُ فَذَهَبَ عَنِّي",
          "فَاغْتَسَلَتْ فَذَهَبَ عَنْهَا",
          "فَاغْتَسَلْنَا فَذَهَبَ عَنَّا"
        ],
        "answer": 0,
        "rationales": [
          "2nd fem. singular perfect + 2fs object -- you washed, and it left you.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَقَالَ لِيْ أَحَدُ الْأَصْدِقَاءِ",
        "pre": "",
        "post": "أَحَدُ الْأَصْدِقَاءِ",
        "targetPerson": "أَحَدُ الصَّدِيْقَاتِ",
        "targetEn": "one of the (female) friends",
        "options": [
          "وَقَالَتْ لِيْ",
          "وَقَالَ لِيْ",
          "وَقُلْنَ لِيْ",
          "وَقَالَتَا لِيْ"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular perfect -- agreement follows أَحَدُ الصَّدِيْقَاتِ as feminine.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَسَكَتَ صَدِيْقِيْ وَصَبَرْتُ عَلَىٰ الْجُوْعِ",
        "pre": "",
        "post": "عَلَىٰ الْجُوْعِ",
        "targetPerson": "الْأَصْدِقَاءُ",
        "targetEn": "the friends",
        "options": [
          "وَسَكَتَ الْأَصْدِقَاءُ",
          "وَسَكَتَتِ الْأَصْدِقَاءُ",
          "وَسَكَتُوا الْأَصْدِقَاءُ",
          "وَسَكَتَ أَصْدِقَاءِيْ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular verb before a broken plural subject -- standard verb-subject agreement in fuṣḥā.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

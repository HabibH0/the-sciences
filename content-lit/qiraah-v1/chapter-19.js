// القراءة الراشدة, volume one, chapter nineteen -- أصدقائي.
//
// Follows the shape of chapter-08.js/chapter-12.js -- see
// ../CHAPTER-FORMAT.md for the full specification. Hand-authored directly
// from the scanned pages (qiratur rashida/_al-qir`atur-rashida 1-2.pdf,
// printed pages 80-82); there is no JSON intermediate (see
// PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md -- the pipeline no longer
// emits JSON).
//
// A first-person profile of the narrator's four friends -- Ḥasan, Qāsim,
// ʿUmar, and Muḥammad -- each given their own descriptive paragraphs, then
// a closing paragraph on the whole group. No new structural handling
// needed; register matches chapter-08.js/chapter-12.js.
//
// Vocabulary notes:
//   - عُمَر (the friend's name) is tagged pos="proper", matching
//     chapter-04.js's convention for the same name -- distinct from
//     chapter-02.js's unrelated "عمر" lemma (the common noun "age, life"),
//     each chapter keeping its own independent LEMMAS dict.
//   - يَسُرُّ ("delights, pleases," of Qāsim's storytelling) is tagged
//     against a new "سر-يسر" lemma, distinct from the already-established
//     "سر" (noun "secret"); both trace to the same root س ر ر but are
//     different words, the same treatment several earlier chapters gave
//     comparable collisions (e.g. عمل/عمل-يعمل).
//   - مَحْزُوْناً ("sad, sorrowful") is given its own "محزون" lemma (the
//     passive participle of the already-established "حزن", "to grieve") --
//     following the same participle-as-own-entry treatment chapter-14.js
//     gave "جرح" alongside جريح-style adjectival forms.
//   - صَلَاحِهِ/اجْتِهَادِهِ reuse the already-established adjective/verb lemmas
//     "صالح" and "اجتهد" via pos_override="noun" for their abstract-noun
//     senses ("goodness," "diligence, effort") -- the same technique used
//     for غسل ("washing") in chapter-15.js.
//   - Two footnoted words carry book_note: حليم (page 80) and شجع
//     (page 81) -- matching the established footnote-as-book_note
//     convention.
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch19",
  "number": 19,
  "title": {
    "ar": "أَصْدِقَائِي",
    "en": "My Friends"
  },
  "pages": [
    80,
    81,
    82
  ],
  "register": "first_person_singular_narrative",
  "newWords": [
    "مهذب",
    "حليم",
    "رفيق",
    "جار",
    "حي",
    "تخاصم",
    "ذكي",
    "امتحان",
    "رسب",
    "يتيم",
    "اكتسب",
    "خياطة",
    "نجح"
  ],
  "lemmas": {
    "ل": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to; belonging to",
      "content": false
    },
    "أربعة": {
      "root": "ر ب ع",
      "pos": "num",
      "gloss": "four",
      "content": true
    },
    "أصدقاء": {
      "root": "ص د ق",
      "pos": "noun",
      "gloss": "friends",
      "content": true
    },
    "حسن": {
      "root": "—",
      "pos": "proper",
      "gloss": "Ḥasan (a name)",
      "content": false
    },
    "قاسم": {
      "root": "—",
      "pos": "proper",
      "gloss": "Qāsim (a name)",
      "content": false
    },
    "عمر": {
      "root": "—",
      "pos": "proper",
      "gloss": "ʿUmar (a name)",
      "content": false
    },
    "محمد": {
      "root": "—",
      "pos": "proper",
      "gloss": "Muḥammad (a name)",
      "content": false
    },
    "أما": {
      "root": "—",
      "pos": "part",
      "gloss": "as for",
      "content": false
    },
    "ولد": {
      "root": "و ل د",
      "pos": "noun",
      "gloss": "child, boy",
      "content": true
    },
    "مهذب": {
      "root": "ه ذ ب",
      "pos": "adj",
      "gloss": "well-mannered, refined",
      "content": true
    },
    "حليم": {
      "root": "ح ل م",
      "pos": "adj",
      "gloss": "forbearing, patient, mild-tempered",
      "content": true,
      "book_note": "حَلِيْم (ج) حُلَمَاء: رَشِيْد (ḥalīm, pl. ḥulamāʾ: forbearing, level-headed)"
    },
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "not; no",
      "content": false
    },
    "كذب": {
      "root": "ك ذ ب",
      "pos": "verb",
      "gloss": "to lie",
      "content": true
    },
    "غضب": {
      "root": "غ ض ب",
      "pos": "verb",
      "gloss": "to be angry",
      "content": true
    },
    "أحب": {
      "root": "ح ب ب",
      "pos": "verb",
      "gloss": "to like, love",
      "content": true
    },
    "أدب": {
      "root": "أ د ب",
      "pos": "noun",
      "gloss": "manners, refinement, adab",
      "content": true
    },
    "حلم": {
      "root": "ح ل م",
      "pos": "noun",
      "gloss": "forbearance, patience, mild temper",
      "content": true
    },
    "هو": {
      "root": "—",
      "pos": "noun",
      "gloss": "he, it",
      "content": false
    },
    "رفيق": {
      "root": "ر ف ق",
      "pos": "noun",
      "gloss": "companion, classmate",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "مدرسة": {
      "root": "د ر س",
      "pos": "noun",
      "gloss": "school",
      "content": true
    },
    "جار": {
      "root": "ج و ر",
      "pos": "noun",
      "gloss": "neighbor",
      "content": true
    },
    "حي": {
      "root": "ح ي ي",
      "pos": "noun",
      "gloss": "neighborhood, quarter",
      "content": true
    },
    "صديق": {
      "root": "ص د ق",
      "pos": "noun",
      "gloss": "friend",
      "content": true
    },
    "منذ": {
      "root": "—",
      "pos": "prep",
      "gloss": "since",
      "content": false
    },
    "سنة": {
      "root": "س ن و",
      "pos": "noun",
      "gloss": "year",
      "content": true
    },
    "سكن": {
      "root": "س ك ن",
      "pos": "verb",
      "gloss": "to dwell, live",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "بيت": {
      "root": "ب ي ت",
      "pos": "noun",
      "gloss": "house",
      "content": true
    },
    "قريب": {
      "root": "ق ر ب",
      "pos": "adj",
      "gloss": "near",
      "content": true
    },
    "ليس": {
      "root": "ل ي س",
      "pos": "verb",
      "gloss": "to not be",
      "content": true
    },
    "بين": {
      "root": "ب ي ن",
      "pos": "prep",
      "gloss": "between, among",
      "content": false
    },
    "إلا": {
      "root": "—",
      "pos": "part",
      "gloss": "except, only",
      "content": false
    },
    "واحد": {
      "root": "و ح د",
      "pos": "adj",
      "gloss": "one, single",
      "content": true
    },
    "لم": {
      "root": "—",
      "pos": "part",
      "gloss": "not (+ jussive; past negation)",
      "content": false
    },
    "تخاصم": {
      "root": "خ ص م",
      "pos": "verb",
      "gloss": "to quarrel (with one another)",
      "content": true
    },
    "هذه": {
      "root": "—",
      "pos": "dem",
      "gloss": "this (f.)",
      "content": false
    },
    "مدة": {
      "root": "م د د",
      "pos": "noun",
      "gloss": "period, duration",
      "content": true
    },
    "مع": {
      "root": "—",
      "pos": "prep",
      "gloss": "with",
      "content": false
    },
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that",
      "content": false
    },
    "قرأ": {
      "root": "ق ر أ",
      "pos": "verb",
      "gloss": "to read",
      "content": true
    },
    "صف": {
      "root": "ص ف ف",
      "pos": "noun",
      "gloss": "row, line; class",
      "content": true
    },
    "ذهب": {
      "root": "ذ ه ب",
      "pos": "verb",
      "gloss": "to go",
      "content": true
    },
    "جميع": {
      "root": "ج م ع",
      "pos": "noun",
      "gloss": "all, entirety",
      "content": true
    },
    "إلى": {
      "root": "—",
      "pos": "prep",
      "gloss": "to, towards",
      "content": false
    },
    "رجع": {
      "root": "ر ج ع",
      "pos": "verb",
      "gloss": "to return",
      "content": true
    },
    "قد": {
      "root": "—",
      "pos": "part",
      "gloss": "already, indeed",
      "content": false
    },
    "كثير": {
      "root": "ك ث ر",
      "pos": "adj",
      "gloss": "much, many",
      "content": true
    },
    "رأى": {
      "root": "ر أ ي",
      "pos": "verb",
      "gloss": "to see",
      "content": true
    },
    "كل": {
      "root": "ك ل ل",
      "pos": "noun",
      "gloss": "each, every, all",
      "content": true
    },
    "يوم": {
      "root": "ي و م",
      "pos": "noun",
      "gloss": "day",
      "content": true
    },
    "بعض": {
      "root": "ب ع ض",
      "pos": "noun",
      "gloss": "some",
      "content": true
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
    "فرح": {
      "root": "ف ر ح",
      "pos": "verb",
      "gloss": "to rejoice, be happy",
      "content": true
    },
    "شر": {
      "root": "ش ر ر",
      "pos": "noun",
      "gloss": "evil, harm",
      "content": true
    },
    "يحيي": {
      "root": "ح ي ي",
      "pos": "verb",
      "gloss": "to greet",
      "content": true
    },
    "ذكي": {
      "root": "ذ ك و",
      "pos": "adj",
      "gloss": "smart, clever, intelligent",
      "content": true
    },
    "نشيط": {
      "root": "ن ش ط",
      "pos": "adj",
      "gloss": "energetic, active",
      "content": true
    },
    "دائما": {
      "root": "د و م",
      "pos": "adv",
      "gloss": "always",
      "content": true
    },
    "مسرور": {
      "root": "س ر ر",
      "pos": "adj",
      "gloss": "happy, pleased",
      "content": true
    },
    "ذكر": {
      "root": "ذ ك ر",
      "pos": "verb",
      "gloss": "to remember, mention",
      "content": true
    },
    "قط": {
      "root": "—",
      "pos": "part",
      "gloss": "ever, at all (with negation)",
      "content": false
    },
    "محزون": {
      "root": "ح ز ن",
      "pos": "adj",
      "gloss": "sad, sorrowful",
      "content": true
    },
    "ذو": {
      "root": "—",
      "pos": "noun",
      "gloss": "possessor of, one with",
      "content": false
    },
    "خبر": {
      "root": "خ ب ر",
      "pos": "noun",
      "gloss": "news, a report",
      "content": true
    },
    "حكاية": {
      "root": "ح ك ي",
      "pos": "noun",
      "gloss": "story, tale",
      "content": true
    },
    "سر-يسر": {
      "root": "س ر ر",
      "pos": "verb",
      "gloss": "to please, delight",
      "content": true
    },
    "حديث": {
      "root": "ح د ث",
      "pos": "noun",
      "gloss": "talk, conversation",
      "content": true
    },
    "مجتهد": {
      "root": "ج ه د",
      "pos": "adj",
      "gloss": "diligent, hard-working",
      "content": true
    },
    "درس": {
      "root": "د ر س",
      "pos": "noun",
      "gloss": "lesson",
      "content": true
    },
    "رسب": {
      "root": "ر س ب",
      "pos": "verb",
      "gloss": "to fail (an exam)",
      "content": true
    },
    "امتحان": {
      "root": "م ح ن",
      "pos": "noun",
      "gloss": "exam, test",
      "content": true
    },
    "يتيم": {
      "root": "ي ت م",
      "pos": "adj",
      "gloss": "orphan(ed)",
      "content": true
    },
    "أيضا": {
      "root": "—",
      "pos": "adv",
      "gloss": "also",
      "content": true
    },
    "عجوز": {
      "root": "ع ج ز",
      "pos": "noun",
      "gloss": "old woman",
      "content": true
    },
    "اكتسب": {
      "root": "ك س ب",
      "pos": "verb",
      "gloss": "to earn",
      "content": true
    },
    "خياطة": {
      "root": "خ ي ط",
      "pos": "noun",
      "gloss": "sewing, tailoring",
      "content": true
    },
    "أنفق": {
      "root": "ن ف ق",
      "pos": "verb",
      "gloss": "to spend",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, on",
      "content": false
    },
    "لكن": {
      "root": "—",
      "pos": "part",
      "gloss": "but",
      "content": false
    },
    "كبير": {
      "root": "ك ب ر",
      "pos": "adj",
      "gloss": "big, large",
      "content": true
    },
    "نفس": {
      "root": "ن ف س",
      "pos": "noun",
      "gloss": "self, soul",
      "content": true
    },
    "قبل-قبول": {
      "root": "ق ب ل",
      "pos": "verb",
      "gloss": "to accept",
      "content": true
    },
    "شيء": {
      "root": "ش ي أ",
      "pos": "noun",
      "gloss": "thing",
      "content": true
    },
    "ثياب": {
      "root": "ث و ب",
      "pos": "noun",
      "gloss": "clothes, garments",
      "content": true
    },
    "رخيص": {
      "root": "ر خ ص",
      "pos": "adj",
      "gloss": "cheap",
      "content": true
    },
    "نظيف": {
      "root": "ن ظ ف",
      "pos": "adj",
      "gloss": "clean",
      "content": true
    },
    "معلم": {
      "root": "ع ل م",
      "pos": "noun",
      "gloss": "teacher",
      "content": true
    },
    "صالح": {
      "root": "ص ل ح",
      "pos": "adj",
      "gloss": "righteous, good",
      "content": true
    },
    "اجتهد": {
      "root": "ج ه د",
      "pos": "verb",
      "gloss": "to strive, try hard",
      "content": true
    },
    "مواظبة": {
      "root": "و ظ ب",
      "pos": "noun",
      "gloss": "perseverance, diligence, steady application",
      "content": true
    },
    "مرة": {
      "root": "م ر ر",
      "pos": "noun",
      "gloss": "time, occasion",
      "content": true
    },
    "حزن": {
      "root": "ح ز ن",
      "pos": "verb",
      "gloss": "to grieve, be sad",
      "content": true
    },
    "لما": {
      "root": "—",
      "pos": "part",
      "gloss": "when (in the past)",
      "content": false
    },
    "أراد": {
      "root": "ر و د",
      "pos": "verb",
      "gloss": "to want",
      "content": true
    },
    "ترك": {
      "root": "ت ر ك",
      "pos": "verb",
      "gloss": "to leave",
      "content": true
    },
    "شجع": {
      "root": "ش ج ع",
      "pos": "verb",
      "gloss": "to encourage",
      "content": true,
      "book_note": "شَجَّعَ يُشَجِّعُ تَشْجِيْعاً الْأُسْتَاذُ تِلْمِيْذَهُ: قَوَّىٰ قَلْبَهُ وَأَيَّدَهُ (shajjaʿa: [of a teacher, toward a student] to strengthen his heart and support him)"
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "أنا": {
      "root": "—",
      "pos": "noun",
      "gloss": "I",
      "content": false
    },
    "نجح": {
      "root": "ن ج ح",
      "pos": "verb",
      "gloss": "to succeed, pass (an exam)",
      "content": true
    },
    "ثاني": {
      "root": "ث ن ي",
      "pos": "adj",
      "gloss": "second",
      "content": true
    },
    "برز": {
      "root": "ب ر ز",
      "pos": "verb",
      "gloss": "to emerge, stand out, excel",
      "content": true
    },
    "تلميذ": {
      "root": "ت ل م ذ",
      "pos": "noun",
      "gloss": "student, pupil",
      "content": true
    },
    "نجيب": {
      "root": "ن ج ب",
      "pos": "adj",
      "gloss": "bright, capable, of noble character",
      "content": true
    },
    "جدا": {
      "root": "—",
      "pos": "adv",
      "gloss": "very",
      "content": false
    },
    "كتب": {
      "root": "ك ت ب",
      "pos": "verb",
      "gloss": "to write",
      "content": true
    },
    "جيد": {
      "root": "ج و د",
      "pos": "adj",
      "gloss": "good, fine",
      "content": true
    },
    "خط": {
      "root": "خ ط ط",
      "pos": "noun",
      "gloss": "line; handwriting, script",
      "content": true
    },
    "عرف": {
      "root": "ع ر ف",
      "pos": "verb",
      "gloss": "to know, recognize",
      "content": true
    },
    "كتابة": {
      "root": "ك ت ب",
      "pos": "noun",
      "gloss": "writing",
      "content": true
    },
    "رسالة": {
      "root": "ر س ل",
      "pos": "noun",
      "gloss": "letter, message",
      "content": true
    },
    "متقدم": {
      "root": "ق د م",
      "pos": "adj",
      "gloss": "advanced, at the front",
      "content": true
    },
    "مواظب": {
      "root": "و ظ ب",
      "pos": "adj",
      "gloss": "steadily persevering, diligent",
      "content": true
    },
    "حافظ": {
      "root": "ح ف ظ",
      "pos": "verb",
      "gloss": "to maintain, keep up (a practice)",
      "content": true
    },
    "صلاة": {
      "root": "ص ل و",
      "pos": "noun",
      "gloss": "prayer",
      "content": true
    },
    "رجا": {
      "root": "ر ج و",
      "pos": "verb",
      "gloss": "to hope",
      "content": true
    },
    "ألا": {
      "root": "—",
      "pos": "part",
      "gloss": "that...not",
      "content": false
    },
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "I have four friends: Ḥasan, Qāsim, ʿUmar, and Muḥammad.",
      "sentences": [
        {
          "id": "qr1-19-001",
          "page": 80,
          "ar": "لِيْ أَرْبَعَةُ أَصْدِقَاءَ: حَسَنٌ ، وَقَاسِمٌ ، وَعُمَرُ ، وَمُحَمَّدٌ .",
          "en": "I have four friends: Ḥasan, Qāsim, ʿUmar, and Muḥammad.",
          "tokens": [
            {
              "surface": "لِيْ",
              "lemma": "ل",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "for, to; belonging to"
            },
            {
              "surface": "أَرْبَعَةُ",
              "lemma": "أربعة",
              "features": "nom.constr",
              "root": "ر ب ع",
              "pos": "num",
              "gloss": "four"
            },
            {
              "surface": "أَصْدِقَاءَ",
              "lemma": "أصدقاء",
              "features": "indef.gen",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friends"
            },
            {
              "surface": "حَسَنٌ",
              "lemma": "حسن",
              "features": "indef.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥasan (a name)"
            },
            {
              "surface": "وَقَاسِمٌ",
              "lemma": "قاسم",
              "features": "conj+indef.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Qāsim (a name)"
            },
            {
              "surface": "وَعُمَرُ",
              "lemma": "عمر",
              "features": "conj+nom",
              "root": "",
              "pos": "proper",
              "gloss": "ʿUmar (a name)"
            },
            {
              "surface": "وَمُحَمَّدٌ",
              "lemma": "محمد",
              "features": "conj+indef.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Muḥammad (a name)"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَمْ صَدِيْقاً لِلرَّاوِيْ؟",
          "options": [
            "أَرْبَعَةٌ",
            "ثَلَاثَةٌ",
            "خَمْسَةٌ"
          ],
          "answer": 0,
          "qEn": "How many friends does the narrator have?",
          "optionsEn": [
            "Four",
            "Three",
            "Five"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "Ḥasan is well-mannered and forbearing, never lying or losing his temper; the narrator loves him for his manners and forbearance -- his classmate, neighbor, and friend for four years now.",
      "sentences": [
        {
          "id": "qr1-19-002",
          "page": 80,
          "ar": "أَمَّا حَسَنٌ فَوَلَدٌ مُهَذَّبٌ حَلِيْمٌ ،",
          "en": "As for Ḥasan, he is a well-mannered, forbearing boy,",
          "tokens": [
            {
              "surface": "أَمَّا",
              "lemma": "أما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "as for"
            },
            {
              "surface": "حَسَنٌ",
              "lemma": "حسن",
              "features": "indef.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥasan (a name)"
            },
            {
              "surface": "فَوَلَدٌ",
              "lemma": "ولد",
              "features": "conj+indef.nom",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "مُهَذَّبٌ",
              "lemma": "مهذب",
              "features": "indef.nom",
              "root": "ه ذ ب",
              "pos": "adj",
              "gloss": "well-mannered, refined"
            },
            {
              "surface": "حَلِيْمٌ",
              "lemma": "حليم",
              "features": "indef.nom",
              "root": "ح ل م",
              "pos": "adj",
              "gloss": "forbearing, patient, mild-tempered"
            }
          ]
        },
        {
          "id": "qr1-19-003",
          "page": 80,
          "ar": "لا يَكْذِبُ وَلَا يَغْضَبُ ،",
          "en": "who does not lie and does not get angry,",
          "tokens": [
            {
              "surface": "لا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
            },
            {
              "surface": "يَكْذِبُ",
              "lemma": "كذب",
              "features": "impf.3ms",
              "root": "ك ذ ب",
              "pos": "verb",
              "gloss": "to lie"
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
              "surface": "يَغْضَبُ",
              "lemma": "غضب",
              "features": "impf.3ms",
              "root": "غ ض ب",
              "pos": "verb",
              "gloss": "to be angry"
            }
          ]
        },
        {
          "id": "qr1-19-004",
          "page": 80,
          "ar": "أُحِبُّهُ لِأَدَبِهِ وَحِلْمِهِ ،",
          "en": "I love him for his manners and forbearance,",
          "tokens": [
            {
              "surface": "أُحِبُّهُ",
              "lemma": "أحب",
              "features": "impf.1s+3ms",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "لِأَدَبِهِ",
              "lemma": "أدب",
              "features": "prep+gen+3ms",
              "root": "أ د ب",
              "pos": "noun",
              "gloss": "manners, refinement, adab"
            },
            {
              "surface": "وَحِلْمِهِ",
              "lemma": "حلم",
              "features": "conj+gen+3ms",
              "root": "ح ل م",
              "pos": "noun",
              "gloss": "forbearance, patience, mild temper"
            }
          ]
        },
        {
          "id": "qr1-19-005",
          "page": 80,
          "ar": "وَهُوَ رَفِيْقِيْ فِي الْمَدْرَسَةِ ،",
          "en": "and he is my companion at school,",
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
              "surface": "رَفِيْقِيْ",
              "lemma": "رفيق",
              "features": "nom+1s",
              "root": "ر ف ق",
              "pos": "noun",
              "gloss": "companion, classmate"
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
              "surface": "الْمَدْرَسَةِ",
              "lemma": "مدرسة",
              "features": "def.gen",
              "root": "د ر س",
              "pos": "noun",
              "gloss": "school"
            }
          ]
        },
        {
          "id": "qr1-19-006",
          "page": 80,
          "ar": "وَجَارِيْ فِي الْحَيِّ ،",
          "en": "my neighbor in the quarter,",
          "tokens": [
            {
              "surface": "وَجَارِيْ",
              "lemma": "جار",
              "features": "conj+nom+1s",
              "root": "ج و ر",
              "pos": "noun",
              "gloss": "neighbor"
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
              "surface": "الْحَيِّ",
              "lemma": "حي",
              "features": "def.gen",
              "root": "ح ي ي",
              "pos": "noun",
              "gloss": "neighborhood, quarter"
            }
          ]
        },
        {
          "id": "qr1-19-007",
          "page": 80,
          "ar": "وَصَدِيْقِيْ مُنْذُ أَرْبَعِ سِنِيْنَ .",
          "en": "and my friend for four years now.",
          "tokens": [
            {
              "surface": "وَصَدِيْقِيْ",
              "lemma": "صديق",
              "features": "conj+nom+1s",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            },
            {
              "surface": "مُنْذُ",
              "lemma": "منذ",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "since"
            },
            {
              "surface": "أَرْبَعِ",
              "lemma": "أربعة",
              "features": "gen.constr",
              "root": "ر ب ع",
              "pos": "num",
              "gloss": "four"
            },
            {
              "surface": "سِنِيْنَ",
              "lemma": "سنة",
              "features": "pl.gen",
              "root": "س ن و",
              "pos": "noun",
              "gloss": "year"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا يُحِبُّ الرَّاوِيْ حَسَناً؟",
          "options": [
            "لِأَدَبِهِ وَحِلْمِهِ",
            "لِأَنَّهُ غَنِيٌّ",
            "لِأَنَّهُ يُعْطِيْهِ هَدَايَا"
          ],
          "answer": 0,
          "qEn": "Why does the narrator love Ḥasan?",
          "optionsEn": [
            "For his manners and forbearance",
            "Because he is rich",
            "Because he gives him gifts"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "Ḥasan has lived in their quarter for years, his house near the narrator's -- only a single house between them.",
      "sentences": [
        {
          "id": "qr1-19-008",
          "page": 80,
          "ar": "وَهُوَ يَسْكُنُ فِيْ حَيِّنَا مِنْ سِنِيْنَ ،",
          "en": "He has lived in our quarter for years,",
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
              "surface": "يَسْكُنُ",
              "lemma": "سكن",
              "features": "impf.3ms",
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
              "surface": "حَيِّنَا",
              "lemma": "حي",
              "features": "gen+1p",
              "root": "ح ي ي",
              "pos": "noun",
              "gloss": "neighborhood, quarter"
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
              "surface": "سِنِيْنَ",
              "lemma": "سنة",
              "features": "pl.gen",
              "root": "س ن و",
              "pos": "noun",
              "gloss": "year"
            }
          ]
        },
        {
          "id": "qr1-19-009",
          "page": 80,
          "ar": "وَبَيْتُهُ قَرِيْبٌ مِنْ بَيْتِيْ ،",
          "en": "and his house is near my house,",
          "tokens": [
            {
              "surface": "وَبَيْتُهُ",
              "lemma": "بيت",
              "features": "conj+nom+3ms",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            },
            {
              "surface": "قَرِيْبٌ",
              "lemma": "قريب",
              "features": "indef.nom",
              "root": "ق ر ب",
              "pos": "adj",
              "gloss": "near"
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
          "id": "qr1-19-010",
          "page": 80,
          "ar": "وَلَيْسَ بَيْنَ بُيُوْتِنَا إِلَّا بَيْتٌ وَاحِدٌ .",
          "en": "and there is only a single house between our houses.",
          "tokens": [
            {
              "surface": "وَلَيْسَ",
              "lemma": "ليس",
              "features": "conj+perf.3ms",
              "root": "ل ي س",
              "pos": "verb",
              "gloss": "to not be"
            },
            {
              "surface": "بَيْنَ",
              "lemma": "بين",
              "features": "prep",
              "root": "ب ي ن",
              "pos": "prep",
              "gloss": "between, among"
            },
            {
              "surface": "بُيُوْتِنَا",
              "lemma": "بيت",
              "features": "pl.gen+1p",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            },
            {
              "surface": "إِلَّا",
              "lemma": "إلا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "except, only"
            },
            {
              "surface": "بَيْتٌ",
              "lemma": "بيت",
              "features": "indef.nom",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            },
            {
              "surface": "وَاحِدٌ",
              "lemma": "واحد",
              "features": "indef.nom",
              "root": "و ح د",
              "pos": "adj",
              "gloss": "one, single"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَمْ بَيْتاً بَيْنَ بَيْتِ الرَّاوِيْ وَبَيْتِ حَسَنٍ؟",
          "options": [
            "بَيْتٌ وَاحِدٌ",
            "لَا شَيْءَ، هُمَا مُتَجَاوِرَانِ",
            "ثَلَاثَةُ بُيُوْتٍ"
          ],
          "answer": 0,
          "qEn": "How many houses are between the narrator's house and Ḥasan's?",
          "optionsEn": [
            "A single house",
            "None -- they are right next to each other",
            "Three houses"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "Despite living in the same quarter, sitting in the same class, and going to and from school together, the two of them have never quarreled in all this time -- unlike many other friends, some of whom the narrator sees quarreling every day.",
      "sentences": [
        {
          "id": "qr1-19-011",
          "page": 80,
          "ar": "وَلَمْ نَتَخَاصَمْ فِيْ هٰذِهِ الْمُدَّةِ مَعَ أَنَّا نَسْكُنُ فِيْ حَيٍّ وَاحِدٍ ،",
          "en": "And we have not quarreled in this whole time, even though we live in the same quarter,",
          "tokens": [
            {
              "surface": "وَلَمْ",
              "lemma": "لم",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not (+ jussive; past negation)"
            },
            {
              "surface": "نَتَخَاصَمْ",
              "lemma": "تخاصم",
              "features": "impf.1p",
              "root": "خ ص م",
              "pos": "verb",
              "gloss": "to quarrel (with one another)"
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
              "features": "gen",
              "root": "",
              "pos": "dem",
              "gloss": "this (f.)"
            },
            {
              "surface": "الْمُدَّةِ",
              "lemma": "مدة",
              "features": "def.gen",
              "root": "م د د",
              "pos": "noun",
              "gloss": "period, duration"
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
              "surface": "أَنَّا",
              "lemma": "أن",
              "features": "part+1p",
              "root": "",
              "pos": "part",
              "gloss": "that we"
            },
            {
              "surface": "نَسْكُنُ",
              "lemma": "سكن",
              "features": "impf.1p",
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
              "surface": "حَيٍّ",
              "lemma": "حي",
              "features": "indef.gen",
              "root": "ح ي ي",
              "pos": "noun",
              "gloss": "neighborhood, quarter"
            },
            {
              "surface": "وَاحِدٍ",
              "lemma": "واحد",
              "features": "indef.gen",
              "root": "و ح د",
              "pos": "adj",
              "gloss": "one, single"
            }
          ]
        },
        {
          "id": "qr1-19-012",
          "page": 80,
          "ar": "وَنَقْرَأُ فِيْ صَفٍّ وَاحِدٍ ،",
          "en": "and study in the same class,",
          "tokens": [
            {
              "surface": "وَنَقْرَأُ",
              "lemma": "قرأ",
              "features": "conj+impf.1p",
              "root": "ق ر أ",
              "pos": "verb",
              "gloss": "to read"
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
              "surface": "صَفٍّ",
              "lemma": "صف",
              "features": "indef.gen",
              "root": "ص ف ف",
              "pos": "noun",
              "gloss": "row, line; class"
            },
            {
              "surface": "وَاحِدٍ",
              "lemma": "واحد",
              "features": "indef.gen",
              "root": "و ح د",
              "pos": "adj",
              "gloss": "one, single"
            }
          ]
        },
        {
          "id": "qr1-19-013",
          "page": 80,
          "ar": "وَنَذْهَبُ جَمِيْعاً إِلَى الْمَدْرَسَةِ وَنَرْجِعُ جَمِيْعاً ،",
          "en": "and go to school together and come back together,",
          "tokens": [
            {
              "surface": "وَنَذْهَبُ",
              "lemma": "ذهب",
              "features": "conj+impf.1p",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
            },
            {
              "surface": "جَمِيْعاً",
              "lemma": "جميع",
              "features": "acc",
              "root": "ج م ع",
              "pos": "noun",
              "gloss": "all, entirety"
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
              "surface": "الْمَدْرَسَةِ",
              "lemma": "مدرسة",
              "features": "def.gen",
              "root": "د ر س",
              "pos": "noun",
              "gloss": "school"
            },
            {
              "surface": "وَنَرْجِعُ",
              "lemma": "رجع",
              "features": "conj+impf.1p",
              "root": "ر ج ع",
              "pos": "verb",
              "gloss": "to return"
            },
            {
              "surface": "جَمِيْعاً",
              "lemma": "جميع",
              "features": "acc",
              "root": "ج م ع",
              "pos": "noun",
              "gloss": "all, entirety"
            }
          ]
        },
        {
          "id": "qr1-19-014",
          "page": 80,
          "ar": "وَقَدْ تَخَاصَمَ كَثِيْرٌ مِنَ الْأَصْدِقَاءِ ،",
          "en": "while many friends have quarreled,",
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
              "surface": "تَخَاصَمَ",
              "lemma": "تخاصم",
              "features": "perf.3ms",
              "root": "خ ص م",
              "pos": "verb",
              "gloss": "to quarrel (with one another)"
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
              "surface": "الْأَصْدِقَاءِ",
              "lemma": "أصدقاء",
              "features": "def.gen",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friends"
            }
          ]
        },
        {
          "id": "qr1-19-015",
          "page": 80,
          "ar": "وَأَرَىٰ كُلَّ يَوْمٍ بَعْضَ الْأَوْلَادِ يَتَخَاصَمُوْنَ .",
          "en": "and every day I see some of the boys quarreling.",
          "tokens": [
            {
              "surface": "وَأَرَىٰ",
              "lemma": "رأى",
              "features": "conj+impf.1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "كُلَّ",
              "lemma": "كل",
              "features": "acc.constr",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "each, every, all"
            },
            {
              "surface": "يَوْمٍ",
              "lemma": "يوم",
              "features": "indef.gen",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "بَعْضَ",
              "lemma": "بعض",
              "features": "acc.constr",
              "root": "ب ع ض",
              "pos": "noun",
              "gloss": "some"
            },
            {
              "surface": "الْأَوْلَادِ",
              "lemma": "ولد",
              "features": "def.pl.gen",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "يَتَخَاصَمُوْنَ",
              "lemma": "تخاصم",
              "features": "impf.3mp",
              "root": "خ ص م",
              "pos": "verb",
              "gloss": "to quarrel (with one another)"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "هَلْ تَخَاصَمَ الرَّاوِيْ وَحَسَنٌ فِيْ هٰذِهِ الْمُدَّةِ؟",
          "options": [
            "لَا، لَمْ يَتَخَاصَمَا قَطُّ",
            "نَعَمْ، كَثِيْراً",
            "مَرَّةً وَاحِدَةً فَقَطْ"
          ],
          "answer": 0,
          "qEn": "Did the narrator and Ḥasan quarrel during this time?",
          "optionsEn": [
            "No, they never quarreled at all",
            "Yes, often",
            "Only once"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "The narrator's own parents love Ḥasan and are glad of his company, since there is no harm in him; his father greets the narrator and looks on him as his own son.",
      "sentences": [
        {
          "id": "qr1-19-016",
          "page": 80,
          "ar": "وَيُحِبُّ أَبِيْ وَأُمِّيْ حَسَناً وَيَفْرَحَانِ بِرِفَاقِهِ ،",
          "en": "My father and mother love Ḥasan and are glad of his company,",
          "tokens": [
            {
              "surface": "وَيُحِبُّ",
              "lemma": "أحب",
              "features": "conj+impf.3ms",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
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
              "surface": "وَأُمِّيْ",
              "lemma": "أم",
              "features": "conj+nom+1s",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
            },
            {
              "surface": "حَسَناً",
              "lemma": "حسن",
              "features": "acc",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥasan (a name)"
            },
            {
              "surface": "وَيَفْرَحَانِ",
              "lemma": "فرح",
              "features": "conj+impf.3md",
              "root": "ف ر ح",
              "pos": "verb",
              "gloss": "to rejoice, be happy"
            },
            {
              "surface": "بِرِفَاقِهِ",
              "lemma": "رفيق",
              "features": "prep+pl.gen+3ms",
              "root": "ر ف ق",
              "pos": "noun",
              "gloss": "companion, classmate"
            }
          ]
        },
        {
          "id": "qr1-19-017",
          "page": 80,
          "ar": "لِأَنَّهُ وَلَدٌ لَيْسَ فِيْهِ شَرٌّ ،",
          "en": "because he is a boy with no harm in him,",
          "tokens": [
            {
              "surface": "لِأَنَّهُ",
              "lemma": "أن",
              "features": "prep+part+3ms",
              "root": "",
              "pos": "part",
              "gloss": "because he"
            },
            {
              "surface": "وَلَدٌ",
              "lemma": "ولد",
              "features": "indef.nom",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
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
              "surface": "فِيْهِ",
              "lemma": "في",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "شَرٌّ",
              "lemma": "شر",
              "features": "indef.nom",
              "root": "ش ر ر",
              "pos": "noun",
              "gloss": "evil, harm"
            }
          ]
        },
        {
          "id": "qr1-19-018",
          "page": 80,
          "ar": "وَيُحَيِّيْنِيْ أَبُوْحَسَنٍ وَيَرَانِيْ كَوَلَدِهِ .",
          "en": "and Ḥasan's father greets me and looks on me as his own son.",
          "tokens": [
            {
              "surface": "وَيُحَيِّيْنِيْ",
              "lemma": "يحيي",
              "features": "conj+impf.3ms+1s",
              "root": "ح ي ي",
              "pos": "verb",
              "gloss": "to greet"
            },
            {
              "surface": "أَبُوْحَسَنٍ",
              "lemma": "أب",
              "features": "nom.constr",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "Ḥasan's father"
            },
            {
              "surface": "وَيَرَانِيْ",
              "lemma": "رأى",
              "features": "conj+impf.3ms+1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "كَوَلَدِهِ",
              "lemma": "ولد",
              "features": "prep+gen+3ms",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَيْفَ يَنْظُرُ أَبُوْ حَسَنٍ إِلَى الرَّاوِيْ؟",
          "options": [
            "كَوَلَدِهِ",
            "كَغَرِيْبٍ",
            "بِلَا مُبَالَاةٍ"
          ],
          "answer": 0,
          "qEn": "How does Ḥasan's father regard the narrator?",
          "optionsEn": [
            "As his own son",
            "As a stranger",
            "With indifference"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "en": "Qāsim is clever and energetic, always cheerful -- the narrator has never seen him sad -- full of news and stories that delight his friends, well-loved, and diligent enough never to have failed an exam.",
      "sentences": [
        {
          "id": "qr1-19-019",
          "page": 81,
          "ar": "أَمَّا قَاسِمٌ فَوَلَدٌ ذَكِيٌّ نَشِيْطٌ ،",
          "en": "As for Qāsim, he is a clever, energetic boy,",
          "tokens": [
            {
              "surface": "أَمَّا",
              "lemma": "أما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "as for"
            },
            {
              "surface": "قَاسِمٌ",
              "lemma": "قاسم",
              "features": "indef.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Qāsim (a name)"
            },
            {
              "surface": "فَوَلَدٌ",
              "lemma": "ولد",
              "features": "conj+indef.nom",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "ذَكِيٌّ",
              "lemma": "ذكي",
              "features": "indef.nom",
              "root": "ذ ك و",
              "pos": "adj",
              "gloss": "smart, clever, intelligent"
            },
            {
              "surface": "نَشِيْطٌ",
              "lemma": "نشيط",
              "features": "indef.nom",
              "root": "ن ش ط",
              "pos": "adj",
              "gloss": "energetic, active"
            }
          ]
        },
        {
          "id": "qr1-19-020",
          "page": 81,
          "ar": "تَرَاهُ دَائِماً مَسْرُوراً ،",
          "en": "you always see him cheerful,",
          "tokens": [
            {
              "surface": "تَرَاهُ",
              "lemma": "رأى",
              "features": "impf.2ms+3ms",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "دَائِماً",
              "lemma": "دائما",
              "features": "acc",
              "root": "د و م",
              "pos": "adv",
              "gloss": "always"
            },
            {
              "surface": "مَسْرُوراً",
              "lemma": "مسرور",
              "features": "indef.acc",
              "root": "س ر ر",
              "pos": "adj",
              "gloss": "happy, pleased"
            }
          ]
        },
        {
          "id": "qr1-19-021",
          "page": 81,
          "ar": "لَا أَذْكُرُ أَنِّي رَأَيْتُهُ قَطُّ مَحْزُوْناً ،",
          "en": "I don't recall ever having seen him sad,",
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
              "surface": "أَذْكُرُ",
              "lemma": "ذكر",
              "features": "impf.1s",
              "root": "ذ ك ر",
              "pos": "verb",
              "gloss": "to remember, mention"
            },
            {
              "surface": "أَنِّي",
              "lemma": "أن",
              "features": "part+1s",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "رَأَيْتُهُ",
              "lemma": "رأى",
              "features": "perf.1s+3ms",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "قَطُّ",
              "lemma": "قط",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "ever, at all (with negation)"
            },
            {
              "surface": "مَحْزُوْناً",
              "lemma": "محزون",
              "features": "indef.acc",
              "root": "ح ز ن",
              "pos": "adj",
              "gloss": "sad, sorrowful"
            }
          ]
        },
        {
          "id": "qr1-19-022",
          "page": 81,
          "ar": "وَهُوَ ذُوْ أَخْبَارٍ وَحِكَايَاتٍ يَسُرُّ أَصْدِقَاءَهُ بِأَحَادِيْثِهِ وَحِكَايَاتِهِ ،",
          "en": "and he is full of news and stories, delighting his friends with his talk and his tales,",
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
              "surface": "ذُوْ",
              "lemma": "ذو",
              "features": "nom.constr",
              "root": "",
              "pos": "noun",
              "gloss": "possessor of, one with"
            },
            {
              "surface": "أَخْبَارٍ",
              "lemma": "خبر",
              "features": "pl.indef.gen",
              "root": "خ ب ر",
              "pos": "noun",
              "gloss": "news, a report"
            },
            {
              "surface": "وَحِكَايَاتٍ",
              "lemma": "حكاية",
              "features": "conj+pl.indef.gen",
              "root": "ح ك ي",
              "pos": "noun",
              "gloss": "story, tale"
            },
            {
              "surface": "يَسُرُّ",
              "lemma": "سر-يسر",
              "features": "impf.3ms",
              "root": "س ر ر",
              "pos": "verb",
              "gloss": "to please, delight"
            },
            {
              "surface": "أَصْدِقَاءَهُ",
              "lemma": "أصدقاء",
              "features": "acc+3ms",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friends"
            },
            {
              "surface": "بِأَحَادِيْثِهِ",
              "lemma": "حديث",
              "features": "prep+pl.gen+3ms",
              "root": "ح د ث",
              "pos": "noun",
              "gloss": "talk, conversation"
            },
            {
              "surface": "وَحِكَايَاتِهِ",
              "lemma": "حكاية",
              "features": "conj+pl.gen+3ms",
              "root": "ح ك ي",
              "pos": "noun",
              "gloss": "story, tale"
            }
          ]
        },
        {
          "id": "qr1-19-023",
          "page": 81,
          "ar": "وَيُحِبُّهُ أَصْدِقَاؤُهُ ،",
          "en": "and his friends love him,",
          "tokens": [
            {
              "surface": "وَيُحِبُّهُ",
              "lemma": "أحب",
              "features": "conj+impf.3ms+3ms",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "أَصْدِقَاؤُهُ",
              "lemma": "أصدقاء",
              "features": "nom+3ms",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friends"
            }
          ]
        },
        {
          "id": "qr1-19-024",
          "page": 81,
          "ar": "وَهُوَ مُجْتَهِدٌ فِي الدُّرُوْسِ لَمْ يَرْسُبْ فِي امْتِحَانٍ .",
          "en": "and he is diligent in his lessons -- he has never failed an exam.",
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
              "surface": "مُجْتَهِدٌ",
              "lemma": "مجتهد",
              "features": "indef.nom",
              "root": "ج ه د",
              "pos": "adj",
              "gloss": "diligent, hard-working"
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
              "surface": "الدُّرُوْسِ",
              "lemma": "درس",
              "features": "def.pl.gen",
              "root": "د ر س",
              "pos": "noun",
              "gloss": "lesson"
            },
            {
              "surface": "لَمْ",
              "lemma": "لم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not (+ jussive; past negation)"
            },
            {
              "surface": "يَرْسُبْ",
              "lemma": "رسب",
              "features": "impf.3ms",
              "root": "ر س ب",
              "pos": "verb",
              "gloss": "to fail (an exam)"
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
              "surface": "امْتِحَانٍ",
              "lemma": "امتحان",
              "features": "indef.gen",
              "root": "م ح ن",
              "pos": "noun",
              "gloss": "exam, test"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا يَسُرُّ قَاسِمٌ أَصْدِقَاءَهُ؟",
          "options": [
            "بِأَحَادِيْثِهِ وَحِكَايَاتِهِ",
            "بِالْهَدَايَا",
            "بِالْأَلْعَابِ"
          ],
          "answer": 0,
          "qEn": "What does Qāsim delight his friends with?",
          "optionsEn": [
            "His talk and his stories",
            "Gifts",
            "Games"
          ]
        }
      ]
    },
    {
      "id": "p7",
      "en": "ʿUmar is an orphan who also lives in their quarter; his elderly mother earns a living by sewing and supports him, but ʿUmar, being too proud to accept anything from her, wears cheap but always clean clothes -- and every teacher loves him for his goodness, manners, diligence, and steady application.",
      "sentences": [
        {
          "id": "qr1-19-025",
          "page": 81,
          "ar": "أَمَّا عُمَرُ فَوَلَدٌ يَتِيْمٌ يَسْكُنُ فِيْ حَيِّنَا أَيْضاً ،",
          "en": "As for ʿUmar, he is an orphan boy who also lives in our quarter,",
          "tokens": [
            {
              "surface": "أَمَّا",
              "lemma": "أما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "as for"
            },
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "ʿUmar (a name)"
            },
            {
              "surface": "فَوَلَدٌ",
              "lemma": "ولد",
              "features": "conj+indef.nom",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "يَتِيْمٌ",
              "lemma": "يتيم",
              "features": "indef.nom",
              "root": "ي ت م",
              "pos": "adj",
              "gloss": "orphan(ed)"
            },
            {
              "surface": "يَسْكُنُ",
              "lemma": "سكن",
              "features": "impf.3ms",
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
              "surface": "حَيِّنَا",
              "lemma": "حي",
              "features": "gen+1p",
              "root": "ح ي ي",
              "pos": "noun",
              "gloss": "neighborhood, quarter"
            },
            {
              "surface": "أَيْضاً",
              "lemma": "أيضا",
              "features": "acc",
              "root": "",
              "pos": "adv",
              "gloss": "also"
            }
          ]
        },
        {
          "id": "qr1-19-026",
          "page": 81,
          "ar": "أُمُّهُ عَجُوْزٌ تَكْتَسِبُ بِالْخِيَاطَةِ وَتُنْفِقُ عَلَىٰ وَلَدِهَا ،",
          "en": "his mother is an old woman who earns a living by sewing and spends it on her son,",
          "tokens": [
            {
              "surface": "أُمُّهُ",
              "lemma": "أم",
              "features": "nom+3ms",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
            },
            {
              "surface": "عَجُوْزٌ",
              "lemma": "عجوز",
              "features": "indef.nom",
              "root": "ع ج ز",
              "pos": "noun",
              "gloss": "old woman"
            },
            {
              "surface": "تَكْتَسِبُ",
              "lemma": "اكتسب",
              "features": "impf.3fs",
              "root": "ك س ب",
              "pos": "verb",
              "gloss": "to earn"
            },
            {
              "surface": "بِالْخِيَاطَةِ",
              "lemma": "خياطة",
              "features": "prep+def.gen",
              "root": "خ ي ط",
              "pos": "noun",
              "gloss": "sewing, tailoring"
            },
            {
              "surface": "وَتُنْفِقُ",
              "lemma": "أنفق",
              "features": "conj+impf.3fs",
              "root": "ن ف ق",
              "pos": "verb",
              "gloss": "to spend"
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
              "surface": "وَلَدِهَا",
              "lemma": "ولد",
              "features": "gen+3fs",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            }
          ]
        },
        {
          "id": "qr1-19-027",
          "page": 81,
          "ar": "وَلٰكِنَّ وَلَدَ عُمَرَ كَبِيْرَ النَّفْسِ لَا يَقْبَلُ مِنْهَا شَيْئاً ،",
          "en": "but ʿUmar's boy -- too proud -- does not accept anything from her,",
          "tokens": [
            {
              "surface": "وَلٰكِنَّ",
              "lemma": "لكن",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "but"
            },
            {
              "surface": "وَلَدَ",
              "lemma": "ولد",
              "features": "acc.constr",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "عُمَرَ",
              "lemma": "عمر",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "ʿUmar (a name)"
            },
            {
              "surface": "كَبِيْرَ",
              "lemma": "كبير",
              "features": "acc.constr",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "proud, self-respecting (lit. \"great of soul\")"
            },
            {
              "surface": "النَّفْسِ",
              "lemma": "نفس",
              "features": "def.gen",
              "root": "ن ف س",
              "pos": "noun",
              "gloss": "self, soul"
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
              "surface": "يَقْبَلُ",
              "lemma": "قبل-قبول",
              "features": "impf.3ms",
              "root": "ق ب ل",
              "pos": "verb",
              "gloss": "to accept"
            },
            {
              "surface": "مِنْهَا",
              "lemma": "من",
              "features": "prep+3fs",
              "root": "",
              "pos": "prep",
              "gloss": "from"
            },
            {
              "surface": "شَيْئاً",
              "lemma": "شيء",
              "features": "indef.acc",
              "root": "ش ي أ",
              "pos": "noun",
              "gloss": "thing"
            }
          ]
        },
        {
          "id": "qr1-19-028",
          "page": 81,
          "ar": "ثِيَابُهُ رَخِيْصَةٌ وَلٰكِنَّهَا دَائِماً نَظِيْفَةٌ ،",
          "en": "his clothes are cheap, but they are always clean,",
          "tokens": [
            {
              "surface": "ثِيَابُهُ",
              "lemma": "ثياب",
              "features": "nom+3ms",
              "root": "ث و ب",
              "pos": "noun",
              "gloss": "clothes, garments"
            },
            {
              "surface": "رَخِيْصَةٌ",
              "lemma": "رخيص",
              "features": "indef.nom.f",
              "root": "ر خ ص",
              "pos": "adj",
              "gloss": "cheap"
            },
            {
              "surface": "وَلٰكِنَّهَا",
              "lemma": "لكن",
              "features": "conj+part+3fs",
              "root": "",
              "pos": "part",
              "gloss": "but"
            },
            {
              "surface": "دَائِماً",
              "lemma": "دائما",
              "features": "acc",
              "root": "د و م",
              "pos": "adv",
              "gloss": "always"
            },
            {
              "surface": "نَظِيْفَةٌ",
              "lemma": "نظيف",
              "features": "indef.nom.f",
              "root": "ن ظ ف",
              "pos": "adj",
              "gloss": "clean"
            }
          ]
        },
        {
          "id": "qr1-19-029",
          "page": 81,
          "ar": "يُحِبُّهُ جَمِيْعُ الْمُعَلِّمِيْنَ لِصَلَاحِهِ وَأَدَبِهِ وَاجْتِهَادِهِ وَمُوَاظَبَتِهِ .",
          "en": "every teacher loves him for his goodness, manners, diligence, and steady application.",
          "tokens": [
            {
              "surface": "يُحِبُّهُ",
              "lemma": "أحب",
              "features": "impf.3ms+3ms",
              "root": "ح ب ب",
              "pos": "verb",
              "gloss": "to like, love"
            },
            {
              "surface": "جَمِيْعُ",
              "lemma": "جميع",
              "features": "nom.constr",
              "root": "ج م ع",
              "pos": "noun",
              "gloss": "all, entirety"
            },
            {
              "surface": "الْمُعَلِّمِيْنَ",
              "lemma": "معلم",
              "features": "def.pl.gen",
              "root": "ع ل م",
              "pos": "noun",
              "gloss": "teacher"
            },
            {
              "surface": "لِصَلَاحِهِ",
              "lemma": "صالح",
              "features": "prep+gen+3ms",
              "root": "ص ل ح",
              "pos": "noun",
              "gloss": "goodness, righteousness"
            },
            {
              "surface": "وَأَدَبِهِ",
              "lemma": "أدب",
              "features": "conj+gen+3ms",
              "root": "أ د ب",
              "pos": "noun",
              "gloss": "manners, refinement, adab"
            },
            {
              "surface": "وَاجْتِهَادِهِ",
              "lemma": "اجتهد",
              "features": "conj+gen+3ms",
              "root": "ج ه د",
              "pos": "noun",
              "gloss": "diligence, effort"
            },
            {
              "surface": "وَمُوَاظَبَتِهِ",
              "lemma": "مواظبة",
              "features": "conj+gen+3ms",
              "root": "و ظ ب",
              "pos": "noun",
              "gloss": "perseverance, diligence, steady application"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا لَا يَقْبَلُ عُمَرُ مَالاً مِنْ أُمِّهِ؟",
          "options": [
            "لِأَنَّهُ كَبِيْرُ النَّفْسِ",
            "لِأَنَّهُ غَنِيٌّ بِالْفِعْلِ",
            "لِأَنَّهَا لَا تَمْلِكُ مَالاً"
          ],
          "answer": 0,
          "qEn": "Why does ʿUmar not accept money from his mother?",
          "optionsEn": [
            "Because he is proud, self-respecting",
            "Because he is already wealthy",
            "Because she has no money"
          ]
        }
      ]
    },
    {
      "id": "p8",
      "en": "ʿUmar failed an exam just once and grieved deeply, as did his mother, and he wanted to leave school -- but she encouraged him, telling him she would keep earning and spending on him, so he returned, worked hard, and excelled the second year.",
      "sentences": [
        {
          "id": "qr1-19-030",
          "page": 81,
          "ar": "وَلَمْ يَرْسُبْ عُمَرُ فِي الِامْتِحَانِ إِلَّا مَرَّةً وَحَزِنَ كَثِيْراً ،",
          "en": "ʿUmar failed the exam only once, and grieved deeply,",
          "tokens": [
            {
              "surface": "وَلَمْ",
              "lemma": "لم",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not (+ jussive; past negation)"
            },
            {
              "surface": "يَرْسُبْ",
              "lemma": "رسب",
              "features": "impf.3ms",
              "root": "ر س ب",
              "pos": "verb",
              "gloss": "to fail (an exam)"
            },
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "ʿUmar (a name)"
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
              "surface": "الِامْتِحَانِ",
              "lemma": "امتحان",
              "features": "def.gen",
              "root": "م ح ن",
              "pos": "noun",
              "gloss": "exam, test"
            },
            {
              "surface": "إِلَّا",
              "lemma": "إلا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "except, only"
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
              "surface": "وَحَزِنَ",
              "lemma": "حزن",
              "features": "conj+perf.3ms",
              "root": "ح ز ن",
              "pos": "verb",
              "gloss": "to grieve, be sad"
            },
            {
              "surface": "كَثِيْراً",
              "lemma": "كثير",
              "features": "acc",
              "root": "ك ث ر",
              "pos": "adj",
              "gloss": "much, many"
            }
          ]
        },
        {
          "id": "qr1-19-031",
          "page": 81,
          "ar": "وَحَزِنَتْ أُمُّهُ لَمَّا رَسَبَ عُمَرُ فِي الِامْتِحَانِ ،",
          "en": "and his mother grieved when ʿUmar failed the exam,",
          "tokens": [
            {
              "surface": "وَحَزِنَتْ",
              "lemma": "حزن",
              "features": "conj+perf.3fs",
              "root": "ح ز ن",
              "pos": "verb",
              "gloss": "to grieve, be sad"
            },
            {
              "surface": "أُمُّهُ",
              "lemma": "أم",
              "features": "nom+3ms",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
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
              "surface": "رَسَبَ",
              "lemma": "رسب",
              "features": "perf.3ms",
              "root": "ر س ب",
              "pos": "verb",
              "gloss": "to fail (an exam)"
            },
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "ʿUmar (a name)"
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
              "surface": "الِامْتِحَانِ",
              "lemma": "امتحان",
              "features": "def.gen",
              "root": "م ح ن",
              "pos": "noun",
              "gloss": "exam, test"
            }
          ]
        },
        {
          "id": "qr1-19-032",
          "page": 81,
          "ar": "وَأَرَادَ عُمَرُ أَنْ يَتْرُكَ الْمَدْرَسَةَ ،",
          "en": "and ʿUmar wanted to leave school,",
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
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "ʿUmar (a name)"
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
              "surface": "يَتْرُكَ",
              "lemma": "ترك",
              "features": "impf.3ms",
              "root": "ت ر ك",
              "pos": "verb",
              "gloss": "to leave"
            },
            {
              "surface": "الْمَدْرَسَةَ",
              "lemma": "مدرسة",
              "features": "def.acc",
              "root": "د ر س",
              "pos": "noun",
              "gloss": "school"
            }
          ]
        },
        {
          "id": "qr1-19-033",
          "page": 81,
          "ar": "وَلٰكِنْ شَجَّعَتْهُ أُمُّهُ",
          "en": "but his mother encouraged him",
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
              "surface": "شَجَّعَتْهُ",
              "lemma": "شجع",
              "features": "perf.3fs+3ms",
              "root": "ش ج ع",
              "pos": "verb",
              "gloss": "to encourage"
            },
            {
              "surface": "أُمُّهُ",
              "lemma": "أم",
              "features": "nom+3ms",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
            }
          ]
        },
        {
          "id": "qr1-19-034",
          "page": 81,
          "ar": "وَقَالَتْ: أَنَا أَكْتَسِبُ بِالْخِيَاطَةِ وَأُنْفِقُ عَلَيْكَ ،",
          "en": "and said: I will earn by sewing and spend it on you,",
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
              "surface": "أَنَا",
              "lemma": "أنا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "أَكْتَسِبُ",
              "lemma": "اكتسب",
              "features": "impf.1s",
              "root": "ك س ب",
              "pos": "verb",
              "gloss": "to earn"
            },
            {
              "surface": "بِالْخِيَاطَةِ",
              "lemma": "خياطة",
              "features": "prep+def.gen",
              "root": "خ ي ط",
              "pos": "noun",
              "gloss": "sewing, tailoring"
            },
            {
              "surface": "وَأُنْفِقُ",
              "lemma": "أنفق",
              "features": "conj+impf.1s",
              "root": "ن ف ق",
              "pos": "verb",
              "gloss": "to spend"
            },
            {
              "surface": "عَلَيْكَ",
              "lemma": "على",
              "features": "prep+2ms",
              "root": "",
              "pos": "prep",
              "gloss": "upon, on"
            }
          ]
        },
        {
          "id": "qr1-19-035",
          "page": 81,
          "ar": "وَرَجَعَ عُمَرُ إِلَى الْمَدْرَسَةِ وَاجْتَهَدَ كَثِيْراً ،",
          "en": "so ʿUmar went back to school and worked very hard,",
          "tokens": [
            {
              "surface": "وَرَجَعَ",
              "lemma": "رجع",
              "features": "conj+perf.3ms",
              "root": "ر ج ع",
              "pos": "verb",
              "gloss": "to return"
            },
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "ʿUmar (a name)"
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
              "surface": "الْمَدْرَسَةِ",
              "lemma": "مدرسة",
              "features": "def.gen",
              "root": "د ر س",
              "pos": "noun",
              "gloss": "school"
            },
            {
              "surface": "وَاجْتَهَدَ",
              "lemma": "اجتهد",
              "features": "conj+perf.3ms",
              "root": "ج ه د",
              "pos": "verb",
              "gloss": "to strive, try hard"
            },
            {
              "surface": "كَثِيْراً",
              "lemma": "كثير",
              "features": "acc",
              "root": "ك ث ر",
              "pos": "adj",
              "gloss": "much, many"
            }
          ]
        },
        {
          "id": "qr1-19-036",
          "page": 81,
          "ar": "وَنَجَحَ فِي الِامْتِحَانِ فِي السَّنَةِ الثَّانِيَةِ وَبَرَزَ فِي الِامْتِحَانِ .",
          "en": "and he passed the exam in the second year, and excelled in it.",
          "tokens": [
            {
              "surface": "وَنَجَحَ",
              "lemma": "نجح",
              "features": "conj+perf.3ms",
              "root": "ن ج ح",
              "pos": "verb",
              "gloss": "to succeed, pass (an exam)"
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
              "surface": "الِامْتِحَانِ",
              "lemma": "امتحان",
              "features": "def.gen",
              "root": "م ح ن",
              "pos": "noun",
              "gloss": "exam, test"
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
              "surface": "السَّنَةِ",
              "lemma": "سنة",
              "features": "def.gen",
              "root": "س ن و",
              "pos": "noun",
              "gloss": "year"
            },
            {
              "surface": "الثَّانِيَةِ",
              "lemma": "ثاني",
              "features": "def.gen.f",
              "root": "ث ن ي",
              "pos": "adj",
              "gloss": "second"
            },
            {
              "surface": "وَبَرَزَ",
              "lemma": "برز",
              "features": "conj+perf.3ms",
              "root": "ب ر ز",
              "pos": "verb",
              "gloss": "to emerge, stand out, excel"
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
              "surface": "الِامْتِحَانِ",
              "lemma": "امتحان",
              "features": "def.gen",
              "root": "م ح ن",
              "pos": "noun",
              "gloss": "exam, test"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلَتْ أُمُّ عُمَرَ حِيْنَ أَرَادَ تَرْكَ الْمَدْرَسَةِ؟",
          "options": [
            "شَجَّعَتْهُ وَوَعَدَتْهُ أَنْ تُنْفِقَ عَلَيْهِ",
            "وَافَقَتْهُ عَلَىٰ ذٰلِكَ",
            "غَضِبَتْ وَتَرَكَتْهُ"
          ],
          "answer": 0,
          "qEn": "What did ʿUmar's mother do when he wanted to leave school?",
          "optionsEn": [
            "She encouraged him and promised to keep supporting him",
            "She agreed with him",
            "She got angry and left him"
          ]
        }
      ]
    },
    {
      "id": "p9",
      "en": "Muḥammad is a bright, very diligent pupil who excels in the exam every year, a fine writer with good handwriting who knows how to write letters -- top of the class and steadily applied to his lessons.",
      "sentences": [
        {
          "id": "qr1-19-037",
          "page": 81,
          "ar": "أَمَّا مُحَمَّدٌ فَتِلْمِيْذٌ نَجِيْبٌ مُجْتَهِدٌ جِدّاً يُبَرِّزُ فِي الِامْتِحَانِ كُلَّ سَنَةٍ ،",
          "en": "As for Muḥammad, he is a bright, very diligent pupil who excels in the exam every year,",
          "tokens": [
            {
              "surface": "أَمَّا",
              "lemma": "أما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "as for"
            },
            {
              "surface": "مُحَمَّدٌ",
              "lemma": "محمد",
              "features": "indef.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Muḥammad (a name)"
            },
            {
              "surface": "فَتِلْمِيْذٌ",
              "lemma": "تلميذ",
              "features": "conj+indef.nom",
              "root": "ت ل م ذ",
              "pos": "noun",
              "gloss": "student, pupil"
            },
            {
              "surface": "نَجِيْبٌ",
              "lemma": "نجيب",
              "features": "indef.nom",
              "root": "ن ج ب",
              "pos": "adj",
              "gloss": "bright, capable, of noble character"
            },
            {
              "surface": "مُجْتَهِدٌ",
              "lemma": "مجتهد",
              "features": "indef.nom",
              "root": "ج ه د",
              "pos": "adj",
              "gloss": "diligent, hard-working"
            },
            {
              "surface": "جِدّاً",
              "lemma": "جدا",
              "features": "acc",
              "root": "",
              "pos": "adv",
              "gloss": "very"
            },
            {
              "surface": "يُبَرِّزُ",
              "lemma": "برز",
              "features": "impf.3ms",
              "root": "ب ر ز",
              "pos": "verb",
              "gloss": "to emerge, stand out, excel"
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
              "surface": "الِامْتِحَانِ",
              "lemma": "امتحان",
              "features": "def.gen",
              "root": "م ح ن",
              "pos": "noun",
              "gloss": "exam, test"
            },
            {
              "surface": "كُلَّ",
              "lemma": "كل",
              "features": "acc.constr",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "each, every, all"
            },
            {
              "surface": "سَنَةٍ",
              "lemma": "سنة",
              "features": "indef.gen",
              "root": "س ن و",
              "pos": "noun",
              "gloss": "year"
            }
          ]
        },
        {
          "id": "qr1-19-038",
          "page": 81,
          "ar": "وَوَلَدٌ كَاتِبٌ جَيِّدُ الْخَطِّ يَعْرِفُ كِتَابَةَ الرَّسَائِلِ ،",
          "en": "and a boy who writes, with fine handwriting, who knows how to write letters,",
          "tokens": [
            {
              "surface": "وَوَلَدٌ",
              "lemma": "ولد",
              "features": "conj+indef.nom",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "كَاتِبٌ",
              "lemma": "كتب",
              "features": "indef.nom",
              "root": "ك ت ب",
              "pos": "noun",
              "gloss": "a writer, one who writes"
            },
            {
              "surface": "جَيِّدُ",
              "lemma": "جيد",
              "features": "nom.constr",
              "root": "ج و د",
              "pos": "adj",
              "gloss": "good, fine"
            },
            {
              "surface": "الْخَطِّ",
              "lemma": "خط",
              "features": "def.gen",
              "root": "خ ط ط",
              "pos": "noun",
              "gloss": "line; handwriting, script"
            },
            {
              "surface": "يَعْرِفُ",
              "lemma": "عرف",
              "features": "impf.3ms",
              "root": "ع ر ف",
              "pos": "verb",
              "gloss": "to know, recognize"
            },
            {
              "surface": "كِتَابَةَ",
              "lemma": "كتابة",
              "features": "acc.constr",
              "root": "ك ت ب",
              "pos": "noun",
              "gloss": "writing"
            },
            {
              "surface": "الرَّسَائِلِ",
              "lemma": "رسالة",
              "features": "def.pl.gen",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "letter, message"
            }
          ]
        },
        {
          "id": "qr1-19-039",
          "page": 82,
          "ar": "وَهُوَ مُتَقَدِّمٌ فِي الصَّفِّ",
          "en": "and he is at the front of the class,",
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
              "surface": "مُتَقَدِّمٌ",
              "lemma": "متقدم",
              "features": "indef.nom",
              "root": "ق د م",
              "pos": "adj",
              "gloss": "advanced, at the front"
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
              "surface": "الصَّفِّ",
              "lemma": "صف",
              "features": "def.gen",
              "root": "ص ف ف",
              "pos": "noun",
              "gloss": "row, line; class"
            }
          ]
        },
        {
          "id": "qr1-19-040",
          "page": 82,
          "ar": "وَمُوَاظِبٌ عَلَىٰ الدَّرْسِ .",
          "en": "and steadily applied to his lessons.",
          "tokens": [
            {
              "surface": "وَمُوَاظِبٌ",
              "lemma": "مواظب",
              "features": "conj+indef.nom",
              "root": "و ظ ب",
              "pos": "adj",
              "gloss": "steadily persevering, diligent"
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
              "surface": "الدَّرْسِ",
              "lemma": "درس",
              "features": "def.gen",
              "root": "د ر س",
              "pos": "noun",
              "gloss": "lesson"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا يَتَمَيَّزُ مُحَمَّدٌ فِي الْكِتَابَةِ؟",
          "options": [
            "جَيِّدُ الْخَطِّ يَعْرِفُ كِتَابَةَ الرَّسَائِلِ",
            "لَا يُحْسِنُ الْكِتَابَةَ",
            "يَكْتُبُ بِبُطْءٍ شَدِيْدٍ"
          ],
          "answer": 0,
          "qEn": "What distinguishes Muḥammad in writing?",
          "optionsEn": [
            "Fine handwriting, and he knows how to write letters",
            "He can't write well",
            "He writes very slowly"
          ]
        }
      ]
    },
    {
      "id": "p10",
      "en": "All the narrator's friends keep up their prayers and their lessons, and the group has never once quarreled or lost its temper -- and the narrator hopes he himself is not the worst of them.",
      "sentences": [
        {
          "id": "qr1-19-041",
          "page": 82,
          "ar": "وَجَمِيْعُ أَصْدِقَائِي مُحَافِظُوْنَ عَلَىٰ الصَّلَوَاتِ ،",
          "en": "All my friends keep up their prayers,",
          "tokens": [
            {
              "surface": "وَجَمِيْعُ",
              "lemma": "جميع",
              "features": "conj+nom.constr",
              "root": "ج م ع",
              "pos": "noun",
              "gloss": "all, entirety"
            },
            {
              "surface": "أَصْدِقَائِي",
              "lemma": "أصدقاء",
              "features": "gen+1s",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friends"
            },
            {
              "surface": "مُحَافِظُوْنَ",
              "lemma": "حافظ",
              "features": "indef.pl.nom",
              "root": "ح ف ظ",
              "pos": "adj",
              "gloss": "keeping up, maintaining"
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
              "surface": "الصَّلَوَاتِ",
              "lemma": "صلاة",
              "features": "def.pl.gen",
              "root": "ص ل و",
              "pos": "noun",
              "gloss": "prayer"
            }
          ]
        },
        {
          "id": "qr1-19-042",
          "page": 82,
          "ar": "مُوَاظِبُوْنَ عَلَىٰ الدُّرُوْسِ ،",
          "en": "steadily applied to their lessons,",
          "tokens": [
            {
              "surface": "مُوَاظِبُوْنَ",
              "lemma": "مواظب",
              "features": "indef.pl.nom",
              "root": "و ظ ب",
              "pos": "adj",
              "gloss": "steadily persevering, diligent"
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
              "surface": "الدُّرُوْسِ",
              "lemma": "درس",
              "features": "def.pl.gen",
              "root": "د ر س",
              "pos": "noun",
              "gloss": "lesson"
            }
          ]
        },
        {
          "id": "qr1-19-043",
          "page": 82,
          "ar": "وَلَمْ نَتَخَاصَمْ قَطُّ وَلَمْ نَغْضَبْ ،",
          "en": "and we have never once quarreled or lost our tempers,",
          "tokens": [
            {
              "surface": "وَلَمْ",
              "lemma": "لم",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not (+ jussive; past negation)"
            },
            {
              "surface": "نَتَخَاصَمْ",
              "lemma": "تخاصم",
              "features": "impf.1p",
              "root": "خ ص م",
              "pos": "verb",
              "gloss": "to quarrel (with one another)"
            },
            {
              "surface": "قَطُّ",
              "lemma": "قط",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "ever, at all (with negation)"
            },
            {
              "surface": "وَلَمْ",
              "lemma": "لم",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not (+ jussive; past negation)"
            },
            {
              "surface": "نَغْضَبْ",
              "lemma": "غضب",
              "features": "impf.1p",
              "root": "غ ض ب",
              "pos": "verb",
              "gloss": "to be angry"
            }
          ]
        },
        {
          "id": "qr1-19-044",
          "page": 82,
          "ar": "وَأَرْجُو أَلَّا أَكُوْنَ شَرَّ الْأَصْدِقَاءِ .",
          "en": "and I hope that I am not the worst of my friends.",
          "tokens": [
            {
              "surface": "وَأَرْجُو",
              "lemma": "رجا",
              "features": "conj+impf.1s",
              "root": "ر ج و",
              "pos": "verb",
              "gloss": "to hope"
            },
            {
              "surface": "أَلَّا",
              "lemma": "ألا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that...not"
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
              "surface": "شَرَّ",
              "lemma": "شر",
              "features": "acc.constr",
              "root": "ش ر ر",
              "pos": "noun",
              "gloss": "the worst of"
            },
            {
              "surface": "الْأَصْدِقَاءِ",
              "lemma": "أصدقاء",
              "features": "def.gen",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friends"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا يَتَمَنَّى الرَّاوِيْ فِيْ نِهَايَةِ النَّصِّ؟",
          "options": [
            "أَلَّا يَكُوْنَ شَرَّ الْأَصْدِقَاءِ",
            "أَنْ يَصِيْرَ غَنِيّاً",
            "أَنْ يُسَافِرَ بَعِيْداً"
          ],
          "answer": 0,
          "qEn": "What does the narrator hope for at the end of the text?",
          "optionsEn": [
            "That he is not the worst of his friends",
            "That he becomes wealthy",
            "That he travels far away"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "أَمَّا حَسَنٌ فَوَلَدٌ مُهَذَّبٌ",
        "post": "",
        "en": "As for Ḥasan, he is a well-mannered, forbearing boy.",
        "options": [
          "حَلِيْمٌ",
          "حَلِيْماً",
          "حَلِيْمٍ",
          "الْحَلِيْمُ"
        ],
        "answer": 0,
        "rationales": [
          "nominative indefinite -- second predicate adjective after وَلَدٌ.",
          "accusative -- wrong case for a predicate noun.",
          "genitive -- wrong case.",
          "definite -- wrong definiteness; an unnamed quality."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَلَيْسَ بَيْنَ بُيُوْتِنَا إِلَّا",
        "post": "",
        "en": "And there is only a single house between our houses.",
        "options": [
          "بَيْتٌ وَاحِدٌ",
          "بَيْتاً وَاحِداً",
          "بَيْتٍ وَاحِدٍ",
          "الْبَيْتُ الْوَاحِدُ"
        ],
        "answer": 0,
        "rationales": [
          "nominative indefinite -- subject of لَيْسَ بَيْنَ...إِلَّا.",
          "accusative -- wrong case for the subject.",
          "genitive -- wrong case.",
          "definite -- wrong definiteness; an unspecified single house."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَقَدْ تَخَاصَمَ كَثِيْرٌ مِنَ",
        "post": "",
        "en": "While many friends have quarreled.",
        "options": [
          "الْأَصْدِقَاءِ",
          "الْأَصْدِقَاءُ",
          "الْأَصْدِقَاءَ",
          "أَصْدِقَاءَ"
        ],
        "answer": 0,
        "rationales": [
          "genitive -- object of the preposition مِنَ.",
          "nominative -- wrong case after a preposition.",
          "accusative -- wrong case after a preposition.",
          "indefinite -- wrong definiteness; friends generally."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَلٰكِنَّ وَلَدَ عُمَرَ كَبِيْرَ النَّفْسِ لَا يَقْبَلُ مِنْهَا",
        "post": "",
        "en": "But ʿUmar's boy -- too proud -- does not accept anything from her.",
        "options": [
          "شَيْئاً",
          "شَيْءٌ",
          "شَيْءٍ",
          "الشَّيْءَ"
        ],
        "answer": 0,
        "rationales": [
          "accusative -- object of يَقْبَلُ.",
          "nominative -- wrong case for a direct object.",
          "genitive -- wrong case.",
          "definite -- wrong definiteness; nothing at all, not a specific thing."
        ]
      },
      {
        "type": "cloze",
        "pre": "يُحِبُّهُ جَمِيْعُ الْمُعَلِّمِيْنَ لِصَلَاحِهِ وَأَدَبِهِ",
        "post": "وَمُوَاظَبَتِهِ",
        "en": "Every teacher loves him for his goodness, manners, diligence, and steady application.",
        "options": [
          "وَاجْتِهَادِهِ",
          "وَاجْتِهَادُهُ",
          "وَاجْتِهَادَهُ",
          "وَجُهْدِهِ"
        ],
        "answer": 0,
        "rationales": [
          "genitive + 3ms -- fourth item in the coordinated لِ-series.",
          "nominative -- wrong case in a prepositional coordination.",
          "accusative -- wrong case in a prepositional coordination.",
          "a different, unrelated word for effort."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَنَجَحَ فِي الِامْتِحَانِ فِي السَّنَةِ",
        "post": "وَبَرَزَ فِي الِامْتِحَانِ",
        "en": "And he passed the exam in the second year, and excelled in it.",
        "options": [
          "الثَّانِيَةِ",
          "الثَّانِيَةُ",
          "ثَانِيَةٍ",
          "الثَّانِيَ"
        ],
        "answer": 0,
        "rationales": [
          "genitive feminine -- agreeing with السَّنَةِ.",
          "nominative -- wrong case after a construct-like phrase.",
          "indefinite -- wrong definiteness; a specific year.",
          "masculine -- wrong gender agreement with السَّنَةِ."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَجَمِيْعُ أَصْدِقَائِي مُحَافِظُوْنَ عَلَىٰ",
        "post": "",
        "en": "All my friends keep up their prayers.",
        "options": [
          "الصَّلَوَاتِ",
          "الصَّلَوَاتُ",
          "الصَّلَوَاتَ",
          "صَلَوَاتٍ"
        ],
        "answer": 0,
        "rationales": [
          "genitive -- object of the preposition عَلَىٰ.",
          "nominative -- wrong case after a preposition.",
          "accusative -- wrong case after a preposition.",
          "indefinite -- wrong definiteness; the five daily prayers."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "لا يَكْذِبُ وَلَا يَغْضَبُ",
        "pre": "",
        "post": "",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "لَا أَكْذِبُ وَلَا أَغْضَبُ",
          "لَا يَكْذِبُ وَلَا يَغْضَبُ",
          "لَا تَكْذِبُ وَلَا تَغْضَبُ",
          "لَا نَكْذِبُ وَلَا نَغْضَبُ"
        ],
        "answer": 0,
        "rationales": [
          "1st singular imperfect throughout -- I do not lie and do not get angry.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَهُوَ يَسْكُنُ فِيْ حَيِّنَا مِنْ سِنِيْنَ",
        "pre": "",
        "post": "",
        "targetPerson": "هُمْ",
        "targetEn": "they (m.)",
        "options": [
          "وَهُمْ يَسْكُنُوْنَ فِيْ حَيِّنَا مِنْ سِنِيْنَ",
          "وَهُوَ يَسْكُنُ فِيْ حَيِّنَا مِنْ سِنِيْنَ",
          "وَهِيَ تَسْكُنُ فِيْ حَيِّنَا مِنْ سِنِيْنَ",
          "وَهُمَا يَسْكُنَانِ فِيْ حَيِّنَا مِنْ سِنِيْنَ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. plural throughout -- they have lived in our quarter for years.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَأَرَىٰ كُلَّ يَوْمٍ بَعْضَ الْأَوْلَادِ يَتَخَاصَمُوْنَ",
        "pre": "",
        "post": "",
        "targetPerson": "نَحْنُ",
        "targetEn": "we",
        "options": [
          "وَنَرَىٰ كُلَّ يَوْمٍ بَعْضَ الْأَوْلَادِ يَتَخَاصَمُوْنَ",
          "وَأَرَىٰ كُلَّ يَوْمٍ بَعْضَ الْأَوْلَادِ يَتَخَاصَمُوْنَ",
          "وَتَرَىٰ كُلَّ يَوْمٍ بَعْضَ الْأَوْلَادِ يَتَخَاصَمُوْنَ",
          "وَرَأَيْنَا كُلَّ يَوْمٍ بَعْضَ الْأَوْلَادِ يَتَخَاصَمُوْنَ"
        ],
        "answer": 0,
        "rationales": [
          "1st plural imperfect -- we see.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "لَا أَذْكُرُ أَنِّي رَأَيْتُهُ قَطُّ مَحْزُوْناً",
        "pre": "",
        "post": "",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "لَا تَذْكُرُ أَنَّهَا رَأَتْهُ قَطُّ مَحْزُوْناً",
          "لَا أَذْكُرُ أَنِّي رَأَيْتُهُ قَطُّ مَحْزُوْناً",
          "لَا يَذْكُرُ أَنَّهُ رَآهُ قَطُّ مَحْزُوْناً",
          "لَا نَذْكُرُ أَنَّنَا رَأَيْنَاهُ قَطُّ مَحْزُوْناً"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular throughout, matching person and verb -- she doesn't recall ever having seen him sad.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَحَزِنَتْ أُمُّهُ لَمَّا رَسَبَ عُمَرُ فِي الِامْتِحَانِ",
        "pre": "",
        "post": "",
        "targetPerson": "أَنْتَ",
        "targetEn": "you (m. sg.)",
        "options": [
          "وَحَزِنَتْ أُمُّكَ لَمَّا رَسَبْتَ فِي الِامْتِحَانِ",
          "وَحَزِنَتْ أُمُّهُ لَمَّا رَسَبَ عُمَرُ فِي الِامْتِحَانِ",
          "وَحَزِنَتْ أُمُّهَا لَمَّا رَسَبَتْ فِي الِامْتِحَانِ",
          "وَحَزِنَ أَبُوْكَ لَمَّا رَسَبْتَ فِي الِامْتِحَانِ"
        ],
        "answer": 0,
        "rationales": [
          "matching 2nd person possessive and verb throughout -- your mother grieved when you failed the exam.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَلَمْ نَتَخَاصَمْ قَطُّ وَلَمْ نَغْضَبْ",
        "pre": "",
        "post": "",
        "targetPerson": "الْأَصْدِقَاءُ",
        "targetEn": "the friends",
        "options": [
          "وَلَمْ يَتَخَاصَمُوا قَطُّ وَلَمْ يَغْضَبُوا",
          "وَلَمْ نَتَخَاصَمْ قَطُّ وَلَمْ نَغْضَبْ",
          "وَلَمْ تَتَخَاصَمُوا قَطُّ وَلَمْ تَغْضَبُوا",
          "وَلَمْ يَتَخَاصَمْ قَطُّ وَلَمْ يَغْضَبْ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. plural throughout -- the friends never quarreled or got angry.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

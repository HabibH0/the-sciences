// القراءة الراشدة, volume one, chapter three -- النملة.
//
// Follows the shape of chapter-01.js/chapter-02.js -- see
// ../CHAPTER-FORMAT.md. Hand-authored from the scanned pages
// (qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed pages 35-36);
// no JSON intermediate (see PROJECT_CONTEXT.md / QASAS_AGENT_BRIEF.md).
//
// THIS CHAPTER IS VERSE (nazm), not prose -- a first structural
// departure from chapters 1-2. Adaptations made, per discussion with
// Habib:
//   - Each bayt (both hemistichs) is one `sentences[]` entry, since the
//     prose schema has no verse/hemistich concept. The mid-bayt pause is
//     rendered as `،` and the bayt-end as `.` in `ar`, even though the
//     print itself marks these only by column layout, not punctuation.
//   - Classical Arabic verse pauses every line-final (rawi) word on
//     sukun regardless of its grammatical case (`بِالأَمَلْ`, not
//     `بِالأَمَلِ`). `features` records the underlying grammatical case
//     anyway (matching how `بَيْتِي`-type possessives are tagged despite
//     showing no visible ending) -- but this means several `tokens[]`
//     entries carry a case in `features` that is NOT visible on
//     `surface`. The build stage's decoys work by visibly moving a
//     word's case ending one step, so pausal rawi words can't serve as
//     decoys; only the live-cased words inside each hemistich can
//     (`نَيْلُ`, `الْبَيْتَ`, `بِنِظَامٍ`, `صَيْفٍ`, `طَعَاماً`, ... --
//     there are enough of these that the chapter still clears the
//     5-buildable-sentence minimum, verified below).
//   - `workshop` is omitted entirely. cloze/shift both work by
//     substituting a word for a wrong conjugation of itself; doing that
//     inside a metrical, rhymed line would as often produce something
//     that breaks the metre as it would test grammar, so it isn't a
//     good fit here. `CHAPTER-FORMAT.md` allows omitting workshop
//     entirely ("the reader goes straight from reading to building").
//   - `register` records this is verse; nothing currently reads this
//     field (see QASAS_AGENT_BRIEF.md's list of fields with no
//     structural home), but it's kept as documentation for the next
//     verse chapter.
//
// The poem is followed in print by "(مَبَادِئُ الْقِرَاءَةِ الرَّشِيْدَةِ)"
// -- a source attribution (this poem was reprinted from an earlier
// primer in the same series), not part of the poem itself. Not
// included in the tokenized text.
export const CHAPTER = {
  "id": "ch3",
  "number": 3,
  "title": {
    "ar": "النَّمْلَةُ",
    "en": "The Ant"
  },
  "pages": [
    35,
    36
  ],
  "register": "first_person_verse",
  "newWords": [
    "أمل",
    "كسل",
    "نظام",
    "قوت",
    "اجتهاد",
    "مطر",
    "مقر",
    "مثل"
  ],
  "lemmas": {
    "طال": {
      "root": "ط و ل",
      "pos": "verb",
      "gloss": "to be long, to be prolonged",
      "content": true
    },
    "سعي": {
      "root": "س ع ي",
      "pos": "noun",
      "gloss": "effort, striving",
      "content": true,
      "book_note": "سَعَى: جهد، جدّاً (to strive, to work hard)"
    },
    "أمل": {
      "root": "أ م ل",
      "pos": "noun",
      "gloss": "hope",
      "content": true
    },
    "ليس": {
      "root": "ل ي س",
      "pos": "verb",
      "gloss": "to not be",
      "content": false
    },
    "رضي": {
      "root": "ر ض ي",
      "pos": "verb",
      "gloss": "to be content, satisfied",
      "content": true
    },
    "كسل": {
      "root": "ك س ل",
      "pos": "noun",
      "gloss": "laziness",
      "content": true
    },
    "غاية": {
      "root": "غ ي ي",
      "pos": "noun",
      "gloss": "goal, aim",
      "content": true,
      "book_note": "الغاية (ج) الغايات: الهدف"
    },
    "نيل": {
      "root": "ن ي ل",
      "pos": "noun",
      "gloss": "attainment, achieving",
      "content": true,
      "book_note": "النيل: الحصول"
    },
    "طلب": {
      "root": "ط ل ب",
      "pos": "noun",
      "gloss": "seeking, pursuit; the goal sought",
      "content": true
    },
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "not",
      "content": false
    },
    "بالى": {
      "root": "ب ا ل",
      "pos": "verb",
      "gloss": "to care about, mind, heed",
      "content": true,
      "book_note": "لا يبالي بالتعب: لا يحتفل به، لا يكترث له"
    },
    "تعب": {
      "root": "ت ع ب",
      "pos": "noun",
      "gloss": "fatigue, hardship",
      "content": true
    },
    "ابتنى": {
      "root": "ب ن ي",
      "pos": "verb",
      "gloss": "to build (for oneself)",
      "content": true
    },
    "بيت": {
      "root": "ب ي ت",
      "pos": "noun",
      "gloss": "house",
      "content": true
    },
    "حسن": {
      "root": "ح س ن",
      "pos": "adj",
      "gloss": "fine, good",
      "content": true
    },
    "نظام": {
      "root": "ن ظ م",
      "pos": "noun",
      "gloss": "order, system",
      "content": true
    },
    "سكن": {
      "root": "س ك ن",
      "pos": "noun",
      "gloss": "dwelling, residing",
      "content": true
    },
    "قوت": {
      "root": "ق و ت",
      "pos": "noun",
      "gloss": "sustenance, provision",
      "content": true,
      "book_note": "القوت (ج) الأقوات: ما يأكله الإنسان ويعيش به"
    },
    "ذهب": {
      "root": "ذ ه ب",
      "pos": "verb",
      "gloss": "to go",
      "content": true
    },
    "يوم": {
      "root": "ي و م",
      "pos": "noun",
      "gloss": "day",
      "content": true
    },
    "لعب": {
      "root": "ل ع ب",
      "pos": "verb",
      "gloss": "to play",
      "content": true
    },
    "كل": {
      "root": "ك ل ل",
      "pos": "noun",
      "gloss": "every, all",
      "content": false
    },
    "صيف": {
      "root": "ص ي ف",
      "pos": "noun",
      "gloss": "summer",
      "content": true
    },
    "جمع": {
      "root": "ج م ع",
      "pos": "verb",
      "gloss": "to gather, collect",
      "content": true
    },
    "ل": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to",
      "content": false
    },
    "طعام": {
      "root": "ط ع م",
      "pos": "noun",
      "gloss": "food",
      "content": true
    },
    "أشبع": {
      "root": "ش ب ع",
      "pos": "verb",
      "gloss": "to satisfy, satiate (hunger)",
      "content": true
    },
    "إذا": {
      "root": "—",
      "pos": "part",
      "gloss": "when, if",
      "content": false
    },
    "جاء": {
      "root": "ج ي أ",
      "pos": "verb",
      "gloss": "to come",
      "content": true
    },
    "مطر": {
      "root": "م ط ر",
      "pos": "noun",
      "gloss": "rain",
      "content": true
    },
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
    },
    "مقر": {
      "root": "ق ر ر",
      "pos": "noun",
      "gloss": "resting place, abode",
      "content": true,
      "book_note": "المقرّ (ج) المقارّ: موضع الاستقرار"
    },
    "ذاك": {
      "root": "—",
      "pos": "dem",
      "gloss": "that",
      "content": false
    },
    "شأن": {
      "root": "ش أ ن",
      "pos": "noun",
      "gloss": "affair, standing, way",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "صغر": {
      "root": "ص غ ر",
      "pos": "noun",
      "gloss": "youth, smallness",
      "content": true
    },
    "كبر": {
      "root": "ك ب ر",
      "pos": "noun",
      "gloss": "old age, adulthood",
      "content": true
    },
    "إن": {
      "root": "—",
      "pos": "part",
      "gloss": "indeed, verily",
      "content": false
    },
    "نعم": {
      "root": "ن ع م",
      "pos": "verb",
      "gloss": "how excellent is...!",
      "content": true
    },
    "مثل": {
      "root": "م ث ل",
      "pos": "noun",
      "gloss": "example",
      "content": true,
      "book_note": "نِعْمَ الْمَثَلَ: المَثَلُ هُوَ الْعِبْرَةُ الَّتِي يُعْتَبَرُ بِهَا"
    },
    "اجتهاد": {
      "root": "ج ه د",
      "pos": "noun",
      "gloss": "diligence, effort",
      "content": true
    },
    "عمل": {
      "root": "ع م ل",
      "pos": "noun",
      "gloss": "work, deed",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "lines": true,
      "en": "My effort has grown long, fuelled by hope — I am not content with laziness. My aim is to attain what I seek, and I do not mind the hardship. I build myself a fine house, in an orderly way, for dwelling, and for my sustenance I go out — I am never idle. Every summer I gather for myself food enough to satisfy me, so that when the rain comes, my house is my shelter. That is my way in youth, and my discipline in adulthood: indeed I am an excellent example, through my diligence in work.",
      "sentences": [
        {
          "id": "qr1-3-001",
          "page": 35,
          "ar": "طَالَ سَعْيِيْ بِالأَمَلْ، لَسْتُ أَرْضَىٰ بِالْكَسَلْ.",
          "en": "My effort has grown long, fuelled by hope — I am not content with laziness.",
          "tokens": [
            {
              "surface": "طَالَ",
              "lemma": "طال",
              "features": "perf.3ms",
              "root": "ط و ل",
              "pos": "verb",
              "gloss": "to be long, to be prolonged"
            },
            {
              "surface": "سَعْيِيْ",
              "lemma": "سعي",
              "features": "nom+1s",
              "root": "س ع ي",
              "pos": "noun",
              "gloss": "effort, striving"
            },
            {
              "surface": "بِالأَمَلْ",
              "lemma": "أمل",
              "features": "prep+def.gen",
              "root": "أ م ل",
              "pos": "noun",
              "gloss": "hope"
            },
            {
              "surface": "لَسْتُ",
              "lemma": "ليس",
              "features": "perf.1s",
              "root": "ل ي س",
              "pos": "verb",
              "gloss": "to not be"
            },
            {
              "surface": "أَرْضَىٰ",
              "lemma": "رضي",
              "features": "impf.1s",
              "root": "ر ض ي",
              "pos": "verb",
              "gloss": "to be content, satisfied"
            },
            {
              "surface": "بِالْكَسَلْ",
              "lemma": "كسل",
              "features": "prep+def.gen",
              "root": "ك س ل",
              "pos": "noun",
              "gloss": "laziness"
            }
          ]
        },
        {
          "id": "qr1-3-002",
          "page": 35,
          "ar": "غَايَتِيْ نَيْلُ الطَّلَبْ، لاَ أُبَالِيْ بِالتَّعَبْ.",
          "en": "My aim is to attain what I seek — I do not mind the hardship.",
          "tokens": [
            {
              "surface": "غَايَتِيْ",
              "lemma": "غاية",
              "features": "nom+1s",
              "root": "غ ي ي",
              "pos": "noun",
              "gloss": "goal, aim"
            },
            {
              "surface": "نَيْلُ",
              "lemma": "نيل",
              "features": "nom.constr",
              "root": "ن ي ل",
              "pos": "noun",
              "gloss": "attainment, achieving"
            },
            {
              "surface": "الطَّلَبْ",
              "lemma": "طلب",
              "features": "def.gen",
              "root": "ط ل ب",
              "pos": "noun",
              "gloss": "seeking, pursuit; the goal sought"
            },
            {
              "surface": "لاَ",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not"
            },
            {
              "surface": "أُبَالِيْ",
              "lemma": "بالى",
              "features": "impf.1s",
              "root": "ب ا ل",
              "pos": "verb",
              "gloss": "to care about, mind, heed"
            },
            {
              "surface": "بِالتَّعَبْ",
              "lemma": "تعب",
              "features": "prep+def.gen",
              "root": "ت ع ب",
              "pos": "noun",
              "gloss": "fatigue, hardship"
            }
          ]
        },
        {
          "id": "qr1-3-003",
          "page": 35,
          "ar": "أَبْتَنِي الْبَيْتَ الْحَسَنْ، بِنِظَامٍ لِلسَّكَنْ.",
          "en": "I build myself a fine house, in an orderly way, for dwelling.",
          "tokens": [
            {
              "surface": "أَبْتَنِي",
              "lemma": "ابتنى",
              "features": "impf.1s",
              "root": "ب ن ي",
              "pos": "verb",
              "gloss": "to build (for oneself)"
            },
            {
              "surface": "الْبَيْتَ",
              "lemma": "بيت",
              "features": "def.acc",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            },
            {
              "surface": "الْحَسَنْ",
              "lemma": "حسن",
              "features": "def.acc",
              "root": "ح س ن",
              "pos": "adj",
              "gloss": "fine, good"
            },
            {
              "surface": "بِنِظَامٍ",
              "lemma": "نظام",
              "features": "prep+indef.gen",
              "root": "ن ظ م",
              "pos": "noun",
              "gloss": "order, system"
            },
            {
              "surface": "لِلسَّكَنْ",
              "lemma": "سكن",
              "features": "prep+def.gen",
              "root": "س ك ن",
              "pos": "noun",
              "gloss": "dwelling, residing"
            }
          ]
        },
        {
          "id": "qr1-3-004",
          "page": 35,
          "ar": "وَلِقُوْتِيْ أَذْهَبُ، لَسْتُ يَوْماً أَلْعَبُ.",
          "en": "And for my sustenance I go out — I am never idle.",
          "tokens": [
            {
              "surface": "وَلِقُوْتِيْ",
              "lemma": "قوت",
              "features": "conj+prep+gen+1s",
              "root": "ق و ت",
              "pos": "noun",
              "gloss": "sustenance, provision"
            },
            {
              "surface": "أَذْهَبُ",
              "lemma": "ذهب",
              "features": "impf.1s",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
            },
            {
              "surface": "لَسْتُ",
              "lemma": "ليس",
              "features": "perf.1s",
              "root": "ل ي س",
              "pos": "verb",
              "gloss": "to not be"
            },
            {
              "surface": "يَوْماً",
              "lemma": "يوم",
              "features": "indef.acc",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "أَلْعَبُ",
              "lemma": "لعب",
              "features": "impf.1s",
              "root": "ل ع ب",
              "pos": "verb",
              "gloss": "to play"
            }
          ]
        },
        {
          "id": "qr1-3-005",
          "page": 35,
          "ar": "كُلَّ صَيْفٍ أَجْمَعُ، لِيْ طَعَاماً يُشْبِعُ.",
          "en": "Every summer I gather for myself food enough to satisfy me.",
          "tokens": [
            {
              "surface": "كُلَّ",
              "lemma": "كل",
              "features": "acc.constr",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "every, all"
            },
            {
              "surface": "صَيْفٍ",
              "lemma": "صيف",
              "features": "indef.gen",
              "root": "ص ي ف",
              "pos": "noun",
              "gloss": "summer"
            },
            {
              "surface": "أَجْمَعُ",
              "lemma": "جمع",
              "features": "impf.1s",
              "root": "ج م ع",
              "pos": "verb",
              "gloss": "to gather, collect"
            },
            {
              "surface": "لِيْ",
              "lemma": "ل",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "for, to"
            },
            {
              "surface": "طَعَاماً",
              "lemma": "طعام",
              "features": "indef.acc",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            },
            {
              "surface": "يُشْبِعُ",
              "lemma": "أشبع",
              "features": "impf.3ms",
              "root": "ش ب ع",
              "pos": "verb",
              "gloss": "to satisfy, satiate (hunger)"
            }
          ]
        },
        {
          "id": "qr1-3-006",
          "page": 35,
          "ar": "فَإِذَا جَاءَ الْمَطَرْ، كَانَ لِيْ بَيْتِيْ الْمَقَرْ.",
          "en": "So when the rain comes, my house is my shelter.",
          "tokens": [
            {
              "surface": "فَإِذَا",
              "lemma": "إذا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "when, if"
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
              "surface": "الْمَطَرْ",
              "lemma": "مطر",
              "features": "def.nom",
              "root": "م ط ر",
              "pos": "noun",
              "gloss": "rain"
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
              "surface": "لِيْ",
              "lemma": "ل",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "for, to"
            },
            {
              "surface": "بَيْتِيْ",
              "lemma": "بيت",
              "features": "nom+1s",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            },
            {
              "surface": "الْمَقَرْ",
              "lemma": "مقر",
              "features": "def.acc",
              "root": "ق ر ر",
              "pos": "noun",
              "gloss": "resting place, abode"
            }
          ]
        },
        {
          "id": "qr1-3-007",
          "page": 36,
          "ar": "ذَاكَ شَأْنِيْ فِي الصِّغَرْ، وَنِظَامِيْ فِي الْكِبَرْ.",
          "en": "That is my way in youth, and my discipline in adulthood.",
          "tokens": [
            {
              "surface": "ذَاكَ",
              "lemma": "ذاك",
              "features": "dem",
              "root": "",
              "pos": "dem",
              "gloss": "that"
            },
            {
              "surface": "شَأْنِيْ",
              "lemma": "شأن",
              "features": "nom+1s",
              "root": "ش أ ن",
              "pos": "noun",
              "gloss": "affair, standing, way"
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
              "surface": "الصِّغَرْ",
              "lemma": "صغر",
              "features": "def.gen",
              "root": "ص غ ر",
              "pos": "noun",
              "gloss": "youth, smallness"
            },
            {
              "surface": "وَنِظَامِيْ",
              "lemma": "نظام",
              "features": "conj+nom+1s",
              "root": "ن ظ م",
              "pos": "noun",
              "gloss": "order, system"
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
              "surface": "الْكِبَرْ",
              "lemma": "كبر",
              "features": "def.gen",
              "root": "ك ب ر",
              "pos": "noun",
              "gloss": "old age, adulthood"
            }
          ]
        },
        {
          "id": "qr1-3-008",
          "page": 36,
          "ar": "إِنَّنِيْ نِعْمَ الْمَثَلْ، بِاجْتِهَادِيْ فِي الْعَمَلْ.",
          "en": "Indeed I am an excellent example, through my diligence in work.",
          "tokens": [
            {
              "surface": "إِنَّنِيْ",
              "lemma": "إن",
              "features": "part+1s",
              "root": "",
              "pos": "part",
              "gloss": "indeed, verily"
            },
            {
              "surface": "نِعْمَ",
              "lemma": "نعم",
              "features": "perf.3ms",
              "root": "ن ع م",
              "pos": "verb",
              "gloss": "how excellent is...!"
            },
            {
              "surface": "الْمَثَلْ",
              "lemma": "مثل",
              "features": "def.nom",
              "root": "م ث ل",
              "pos": "noun",
              "gloss": "example"
            },
            {
              "surface": "بِاجْتِهَادِيْ",
              "lemma": "اجتهاد",
              "features": "prep+gen+1s",
              "root": "ج ه د",
              "pos": "noun",
              "gloss": "diligence, effort"
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
              "surface": "الْعَمَلْ",
              "lemma": "عمل",
              "features": "def.gen",
              "root": "ع م ل",
              "pos": "noun",
              "gloss": "work, deed"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنْ يَتَكَلَّمُ فِي هٰذِهِ الْقَصِيْدَةِ؟",
          "options": [
            "النَّمْلَةُ",
            "الْوَلَدُ",
            "الْمُعَلِّمُ"
          ],
          "answer": 0,
          "qEn": "Who is speaking in this poem?",
          "optionsEn": [
            "The ant",
            "The boy",
            "The teacher"
          ]
        },
        {
          "q": "مَاذَا تَجْمَعُ النَّمْلَةُ كُلَّ صَيْفٍ؟",
          "options": [
            "طَعَاماً يُشْبِعُ",
            "أَحْجَاراً",
            "مَاءً"
          ],
          "answer": 0,
          "qEn": "What does the ant gather every summer?",
          "optionsEn": [
            "Food enough to satisfy her",
            "Stones",
            "Water"
          ]
        },
        {
          "q": "مَتَى يَكُونُ بَيْتُهَا مَقَرَّهَا؟",
          "options": [
            "إِذَا جَاءَ الْمَطَرُ",
            "إِذَا جَاءَ الصَّيْفُ",
            "دَائِماً"
          ],
          "answer": 0,
          "qEn": "When does her house become her shelter?",
          "optionsEn": [
            "When the rain comes",
            "When summer comes",
            "Always"
          ]
        }
      ]
    }
  ]
};

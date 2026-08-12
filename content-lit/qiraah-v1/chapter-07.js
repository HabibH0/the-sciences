// القراءة الراشدة, volume one, chapter seven -- من يمنعك مني؟.
//
// Follows the shape of chapter-01.js/chapter-02.js -- see ../CHAPTER-FORMAT.md
// for the full specification. Hand-authored directly from the scanned pages
// (qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed pages 46-48); there
// is no JSON intermediate (see PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md --
// the pipeline no longer emits JSON).
//
// This chapter is a third-person sirah narrative -- the well-known hadith
// (the book's own footnote credits it as "excerpted from the two Sahihs and
// Sahih Abi Bakr al-Isma'ili") of a polytheist drawing the Prophet's sword
// on him while he slept during a ghazwah, and being disarmed unharmed. No
// new structural fork was needed: embedded dialogue folds into its
// narrating sentence exactly as in chapter-02.js/chapter-06.js (e.g.
// qr1-7-013's parenthetical "وَالسَّيْفُ مَسْلُوْلٌ فِيْ يَدِهِ" stays inside one
// sentence, matching how the print itself uses ellipses rather than a new
// sentence break there), and the ﷺ honorific is excluded from tokens and
// stripped for reconstruction exactly as elsewhere in the book.
//
// Flagged in QASAS_AGENT_BRIEF.md as an open question: this chapter has no
// Qur'anic quotation (no ﴿ ﴾ brackets appear), so that gap still hasn't
// been exercised -- worth resolving before a chapter that does quote the
// Qur'an directly.
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch7",
  "number": 7,
  "title": {
    "ar": "مَنْ يَمْنَعُكَ مِنِّيْ؟",
    "en": "Who Will Protect You From Me?"
  },
  "pages": [
    46,
    47,
    48
  ],
  "register": "third_person_sirah_narrative",
  "newWords": [
    "غزوة",
    "جهاد",
    "مشرك",
    "رسول",
    "شجر",
    "خاف",
    "منع",
    "شهد",
    "عاهد",
    "قاتل",
    "بعث",
    "جند"
  ],
  "lemmas": {
    "خرج": {
      "root": "خ ر ج",
      "pos": "verb",
      "gloss": "to go out",
      "content": true
    },
    "رسول": {
      "root": "ر س ل",
      "pos": "noun",
      "gloss": "messenger",
      "content": true
    },
    "الله": {
      "root": "—",
      "pos": "proper",
      "gloss": "Allah",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "غزوة": {
      "root": "غ ز و",
      "pos": "noun",
      "gloss": "military expedition, battle",
      "content": true
    },
    "هل": {
      "root": "—",
      "pos": "part",
      "gloss": "[yes/no question particle]",
      "content": false
    },
    "عرف": {
      "root": "ع ر ف",
      "pos": "verb",
      "gloss": "to know",
      "content": true
    },
    "ما": {
      "root": "—",
      "pos": "part",
      "gloss": "what; not",
      "content": false
    },
    "هي": {
      "root": "—",
      "pos": "noun",
      "gloss": "she, it (f.)",
      "content": false
    },
    "لعل": {
      "root": "—",
      "pos": "part",
      "gloss": "perhaps",
      "content": false
    },
    "علم": {
      "root": "ع ل م",
      "pos": "verb",
      "gloss": "to know",
      "content": true
    },
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that, because",
      "content": false
    },
    "مسلم": {
      "root": "س ل م",
      "pos": "noun",
      "gloss": "Muslim",
      "content": true
    },
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
    },
    "جهاد": {
      "root": "ج ه د",
      "pos": "noun",
      "gloss": "struggle, striving (in Allah's cause)",
      "content": true
    },
    "سبيل": {
      "root": "س ب ل",
      "pos": "noun",
      "gloss": "path, way",
      "content": true
    },
    "قاتل": {
      "root": "ق ت ل",
      "pos": "verb",
      "gloss": "to fight",
      "content": true
    },
    "مشرك": {
      "root": "ش ر ك",
      "pos": "noun",
      "gloss": "polytheist, idolater",
      "content": true
    },
    "كافر": {
      "root": "ك ف ر",
      "pos": "noun",
      "gloss": "disbeliever",
      "content": true
    },
    "وجه": {
      "root": "و ج ه",
      "pos": "noun",
      "gloss": "face; sake",
      "content": true
    },
    "تعالى": {
      "root": "ع ل و",
      "pos": "verb",
      "gloss": "to be exalted (of Allah)",
      "content": true
    },
    "فضيلة": {
      "root": "ف ض ل",
      "pos": "noun",
      "gloss": "excellence, virtue",
      "content": true
    },
    "نبي": {
      "root": "ن ب أ",
      "pos": "noun",
      "gloss": "prophet",
      "content": true
    },
    "أحيانا": {
      "root": "ح ي ن",
      "pos": "adv",
      "gloss": "sometimes",
      "content": true
    },
    "مع": {
      "root": "—",
      "pos": "prep",
      "gloss": "with",
      "content": false
    },
    "مكث": {
      "root": "م ك ث",
      "pos": "verb",
      "gloss": "to stay, remain",
      "content": true
    },
    "مدينة": {
      "root": "م د ن",
      "pos": "noun",
      "gloss": "city",
      "content": true
    },
    "شغل": {
      "root": "ش غ ل",
      "pos": "noun",
      "gloss": "work, occupation",
      "content": true
    },
    "أو": {
      "root": "—",
      "pos": "part",
      "gloss": "or",
      "content": false
    },
    "مصلحة": {
      "root": "ص ل ح",
      "pos": "noun",
      "gloss": "interest, matter to attend to",
      "content": true
    },
    "بعث": {
      "root": "ب ع ث",
      "pos": "verb",
      "gloss": "to send, dispatch",
      "content": true
    },
    "جند": {
      "root": "ج ن د",
      "pos": "noun",
      "gloss": "army, troop",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "نعم": {
      "root": "—",
      "pos": "part",
      "gloss": "yes",
      "content": false
    },
    "رجع": {
      "root": "ر ج ع",
      "pos": "verb",
      "gloss": "to return",
      "content": true
    },
    "عن": {
      "root": "—",
      "pos": "prep",
      "gloss": "about, from",
      "content": false
    },
    "ظهيرة": {
      "root": "ظ ه ر",
      "pos": "noun",
      "gloss": "midday",
      "content": true,
      "book_note": "الظَّهِيْرَة: وَقْتُ الظُّهْرِ"
    },
    "يوم": {
      "root": "ي و م",
      "pos": "noun",
      "gloss": "day",
      "content": true
    },
    "صيف": {
      "root": "ص ي ف",
      "pos": "noun",
      "gloss": "summer",
      "content": true
    },
    "أراد": {
      "root": "ر و د",
      "pos": "verb",
      "gloss": "to want",
      "content": true
    },
    "استراح": {
      "root": "ر و ح",
      "pos": "verb",
      "gloss": "to rest",
      "content": true
    },
    "ليس": {
      "root": "ل ي س",
      "pos": "verb",
      "gloss": "to not be",
      "content": true
    },
    "برية": {
      "root": "ب ر و",
      "pos": "noun",
      "gloss": "open land, wilderness",
      "content": true,
      "book_note": "الْبَرِّيَّة: الأَرْضُ"
    },
    "مكان": {
      "root": "ك و ن",
      "pos": "noun",
      "gloss": "place",
      "content": true
    },
    "إنسان": {
      "root": "أ ن س",
      "pos": "noun",
      "gloss": "human being, person",
      "content": true
    },
    "إلا": {
      "root": "—",
      "pos": "part",
      "gloss": "except, only",
      "content": false
    },
    "شجر": {
      "root": "ش ج ر",
      "pos": "noun",
      "gloss": "tree(s)",
      "content": true
    },
    "بلد": {
      "root": "ب ل د",
      "pos": "noun",
      "gloss": "town, country",
      "content": true
    },
    "عرب": {
      "root": "ع ر ب",
      "pos": "proper",
      "gloss": "Arabs",
      "content": true
    },
    "كثير": {
      "root": "ك ث ر",
      "pos": "adj",
      "gloss": "much, many",
      "content": true
    },
    "سمر": {
      "root": "س م ر",
      "pos": "noun",
      "gloss": "samur (a kind of acacia tree)",
      "content": true,
      "book_note": "السَّمُرَة: ضَرْبٌ مِنْ شَجَرِ الطَّلْحِ (a kind of acacia tree)"
    },
    "نزل": {
      "root": "ن ز ل",
      "pos": "verb",
      "gloss": "to alight, stop, camp",
      "content": true
    },
    "تحت": {
      "root": "—",
      "pos": "prep",
      "gloss": "under, beneath",
      "content": false
    },
    "علق": {
      "root": "ع ل ق",
      "pos": "verb",
      "gloss": "to hang (something) up",
      "content": true
    },
    "ب": {
      "root": "—",
      "pos": "prep",
      "gloss": "with, by",
      "content": false
    },
    "سيف": {
      "root": "س ي ف",
      "pos": "noun",
      "gloss": "sword",
      "content": true
    },
    "تفرق": {
      "root": "ف ر ق",
      "pos": "verb",
      "gloss": "to disperse, scatter",
      "content": true
    },
    "ناس": {
      "root": "ن و س",
      "pos": "noun",
      "gloss": "people",
      "content": true
    },
    "نام": {
      "root": "ن و م",
      "pos": "verb",
      "gloss": "to sleep",
      "content": true
    },
    "جاء": {
      "root": "ج ي أ",
      "pos": "verb",
      "gloss": "to come",
      "content": true
    },
    "رجل": {
      "root": "ر ج ل",
      "pos": "noun",
      "gloss": "man",
      "content": true
    },
    "هو": {
      "root": "—",
      "pos": "noun",
      "gloss": "he, it",
      "content": false
    },
    "غمد": {
      "root": "غ م د",
      "pos": "noun",
      "gloss": "sheath, scabbard",
      "content": true
    },
    "أخذ": {
      "root": "أ خ ذ",
      "pos": "verb",
      "gloss": "to take",
      "content": true
    },
    "سل": {
      "root": "س ل ل",
      "pos": "verb",
      "gloss": "to draw, unsheathe (a sword)",
      "content": true
    },
    "استيقظ": {
      "root": "ي ق ظ",
      "pos": "verb",
      "gloss": "to wake up",
      "content": true
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "يد": {
      "root": "ي د ي",
      "pos": "noun",
      "gloss": "hand",
      "content": true
    },
    "خاف": {
      "root": "خ و ف",
      "pos": "verb",
      "gloss": "to fear",
      "content": true
    },
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "not",
      "content": false
    },
    "منع": {
      "root": "م ن ع",
      "pos": "verb",
      "gloss": "to prevent, protect, withhold",
      "content": true
    },
    "سقط": {
      "root": "س ق ط",
      "pos": "verb",
      "gloss": "to fall",
      "content": true
    },
    "خير": {
      "root": "خ ي ر",
      "pos": "noun",
      "gloss": "good, goodness; best, better",
      "content": true
    },
    "شهد": {
      "root": "ش ه د",
      "pos": "verb",
      "gloss": "to testify, bear witness",
      "content": true
    },
    "إله": {
      "root": "أ ل ه",
      "pos": "noun",
      "gloss": "god, deity",
      "content": true
    },
    "لكن": {
      "root": "—",
      "pos": "part",
      "gloss": "but",
      "content": false
    },
    "عاهد": {
      "root": "ع ه د",
      "pos": "verb",
      "gloss": "to make a covenant, pledge",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, to",
      "content": false
    },
    "قوم": {
      "root": "ق و م",
      "pos": "noun",
      "gloss": "people, tribe",
      "content": true
    },
    "خلى": {
      "root": "خ ل و",
      "pos": "verb",
      "gloss": "to release, let go",
      "content": true,
      "book_note": "خَلَّىٰ سَبِيْلَه: تَرَكَه"
    },
    "أتى": {
      "root": "أ ت ي",
      "pos": "verb",
      "gloss": "to come to",
      "content": true
    },
    "صاحب": {
      "root": "ص ح ب",
      "pos": "noun",
      "gloss": "companion, owner",
      "content": true
    },
    "عند": {
      "root": "ع ن د",
      "pos": "prep",
      "gloss": "at, by, from",
      "content": false
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "The Messenger of Allah ﷺ once went out on a ghazwah -- do you know what a ghazwah is? You may know that the Muslims used to go out for jihad in Allah's cause, fighting the polytheists and disbelievers for His sake -- and you may know the virtue of jihad in Allah's cause. The Prophet ﷺ would sometimes go out with the Muslims himself, and sometimes stay behind in Madīnah for some task or matter and send out a troop of Muslims instead. So a ghazwah is one the Messenger of Allah ﷺ himself went out on, with a troop of Muslims, for jihad in Allah's cause.",
      "sentences": [
        {
          "id": "qr1-7-001",
          "page": 46,
          "ar": "خَرَجَ رَسُوْلُ اللهِ ﷺ فِيْ غَزْوَةٍ!",
          "en": "The Messenger of Allah ﷺ once went out on a military expedition!",
          "tokens": [
            {
              "surface": "خَرَجَ",
              "lemma": "خرج",
              "features": "perf.3ms",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
            },
            {
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
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
              "surface": "غَزْوَةٍ",
              "lemma": "غزوة",
              "features": "indef.gen",
              "root": "غ ز و",
              "pos": "noun",
              "gloss": "military expedition, battle"
            }
          ]
        },
        {
          "id": "qr1-7-002",
          "page": 46,
          "ar": "هَلْ تَعْرِفُوْنَ مَا هِيَ الْغَزْوَةُ؟",
          "en": "Do you know what a ghazwah is?",
          "tokens": [
            {
              "surface": "هَلْ",
              "lemma": "هل",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "[yes/no question particle]"
            },
            {
              "surface": "تَعْرِفُوْنَ",
              "lemma": "عرف",
              "features": "impf.2mp",
              "root": "ع ر ف",
              "pos": "verb",
              "gloss": "to know"
            },
            {
              "surface": "مَا",
              "lemma": "ما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "what; not"
            },
            {
              "surface": "هِيَ",
              "lemma": "هي",
              "features": "nom.3fs",
              "root": "",
              "pos": "noun",
              "gloss": "she, it (f.)"
            },
            {
              "surface": "الْغَزْوَةُ",
              "lemma": "غزوة",
              "features": "def.nom",
              "root": "غ ز و",
              "pos": "noun",
              "gloss": "military expedition, battle"
            }
          ]
        },
        {
          "id": "qr1-7-003",
          "page": 46,
          "ar": "لَعَلَّكُمْ تَعْلَمُونَ أَنَّ الْمُسْلِمِيْنَ كَانُوْا يَخْرُجُوْنَ لِلْجِهَادِ فِيْ سَبِيْلِ اللهِ وَكَانُوْا يُقَاتِلُونَ الْمُشْرِكِيْنَ وَالْكُفَّارَ لِوَجْهِ اللهِ تَعَالَىٰ.",
          "en": "You may know that the Muslims used to go out for jihad in Allah's cause, fighting the polytheists and disbelievers for the sake of Allah, Exalted is He.",
          "tokens": [
            {
              "surface": "لَعَلَّكُمْ",
              "lemma": "لعل",
              "features": "part+2mp",
              "root": "",
              "pos": "part",
              "gloss": "perhaps"
            },
            {
              "surface": "تَعْلَمُونَ",
              "lemma": "علم",
              "features": "impf.2mp",
              "root": "ع ل م",
              "pos": "verb",
              "gloss": "to know"
            },
            {
              "surface": "أَنَّ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that, because"
            },
            {
              "surface": "الْمُسْلِمِيْنَ",
              "lemma": "مسلم",
              "features": "pl.acc",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "Muslim"
            },
            {
              "surface": "كَانُوْا",
              "lemma": "كان",
              "features": "perf.3mp",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "يَخْرُجُوْنَ",
              "lemma": "خرج",
              "features": "impf.3mp",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
            },
            {
              "surface": "لِلْجِهَادِ",
              "lemma": "جهاد",
              "features": "prep+def.gen",
              "root": "ج ه د",
              "pos": "noun",
              "gloss": "struggle, striving (in Allah's cause)"
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
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "وَكَانُوْا",
              "lemma": "كان",
              "features": "conj+perf.3mp",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "يُقَاتِلُونَ",
              "lemma": "قاتل",
              "features": "impf.3mp",
              "root": "ق ت ل",
              "pos": "verb",
              "gloss": "to fight"
            },
            {
              "surface": "الْمُشْرِكِيْنَ",
              "lemma": "مشرك",
              "features": "pl.def.acc",
              "root": "ش ر ك",
              "pos": "noun",
              "gloss": "polytheist, idolater"
            },
            {
              "surface": "وَالْكُفَّارَ",
              "lemma": "كافر",
              "features": "conj+pl.def.acc",
              "root": "ك ف ر",
              "pos": "noun",
              "gloss": "disbeliever"
            },
            {
              "surface": "لِوَجْهِ",
              "lemma": "وجه",
              "features": "prep+gen.constr",
              "root": "و ج ه",
              "pos": "noun",
              "gloss": "face; sake"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "تَعَالَىٰ",
              "lemma": "تعالى",
              "features": "perf.3ms",
              "root": "ع ل و",
              "pos": "verb",
              "gloss": "to be exalted (of Allah)"
            }
          ]
        },
        {
          "id": "qr1-7-004",
          "page": 46,
          "ar": "وَلَعَلَّكُمْ تَعْلَمُونَ فَضِيْلَةَ الْجِهَادِ فِيْ سَبِيْلِ اللهِ؟",
          "en": "And you may know the virtue of jihad in Allah's cause?",
          "tokens": [
            {
              "surface": "وَلَعَلَّكُمْ",
              "lemma": "لعل",
              "features": "conj+part+2mp",
              "root": "",
              "pos": "part",
              "gloss": "perhaps"
            },
            {
              "surface": "تَعْلَمُونَ",
              "lemma": "علم",
              "features": "impf.2mp",
              "root": "ع ل م",
              "pos": "verb",
              "gloss": "to know"
            },
            {
              "surface": "فَضِيْلَةَ",
              "lemma": "فضيلة",
              "features": "acc.constr",
              "root": "ف ض ل",
              "pos": "noun",
              "gloss": "excellence, virtue"
            },
            {
              "surface": "الْجِهَادِ",
              "lemma": "جهاد",
              "features": "def.gen",
              "root": "ج ه د",
              "pos": "noun",
              "gloss": "struggle, striving (in Allah's cause)"
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
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            }
          ]
        },
        {
          "id": "qr1-7-005",
          "page": 46,
          "ar": "وَكَانَ النَّبِيُّ ﷺ يَخْرُجُ أَحْيَاناً مَعَ الْمُسْلِمِيْنَ وَأَحْيَاناً يَمْكُثُ فِي الْمَدِيْنَةِ لِشُغْلٍ أَوْ مَصْلَحَةٍ وَيَبْعَثُ جُنْداً مِنَ الْمُسْلِمِيْنَ.",
          "en": "The Prophet ﷺ would sometimes go out with the Muslims, and sometimes stay in Madīnah for some task or matter, sending out a troop of the Muslims instead.",
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
              "surface": "النَّبِيُّ",
              "lemma": "نبي",
              "features": "def.nom",
              "root": "ن ب أ",
              "pos": "noun",
              "gloss": "prophet"
            },
            {
              "surface": "يَخْرُجُ",
              "lemma": "خرج",
              "features": "impf.3ms",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
            },
            {
              "surface": "أَحْيَاناً",
              "lemma": "أحيانا",
              "features": "acc",
              "root": "ح ي ن",
              "pos": "adv",
              "gloss": "sometimes"
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
              "surface": "الْمُسْلِمِيْنَ",
              "lemma": "مسلم",
              "features": "pl.gen",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "Muslim"
            },
            {
              "surface": "وَأَحْيَاناً",
              "lemma": "أحيانا",
              "features": "conj+acc",
              "root": "ح ي ن",
              "pos": "adv",
              "gloss": "sometimes"
            },
            {
              "surface": "يَمْكُثُ",
              "lemma": "مكث",
              "features": "impf.3ms",
              "root": "م ك ث",
              "pos": "verb",
              "gloss": "to stay, remain"
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
              "surface": "الْمَدِيْنَةِ",
              "lemma": "مدينة",
              "features": "def.gen",
              "root": "م د ن",
              "pos": "noun",
              "gloss": "city"
            },
            {
              "surface": "لِشُغْلٍ",
              "lemma": "شغل",
              "features": "prep+indef.gen",
              "root": "ش غ ل",
              "pos": "noun",
              "gloss": "work, occupation"
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
              "surface": "مَصْلَحَةٍ",
              "lemma": "مصلحة",
              "features": "indef.gen",
              "root": "ص ل ح",
              "pos": "noun",
              "gloss": "interest, matter to attend to"
            },
            {
              "surface": "وَيَبْعَثُ",
              "lemma": "بعث",
              "features": "conj+impf.3ms",
              "root": "ب ع ث",
              "pos": "verb",
              "gloss": "to send, dispatch"
            },
            {
              "surface": "جُنْداً",
              "lemma": "جند",
              "features": "indef.acc",
              "root": "ج ن د",
              "pos": "noun",
              "gloss": "army, troop"
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
              "surface": "الْمُسْلِمِيْنَ",
              "lemma": "مسلم",
              "features": "pl.gen",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "Muslim"
            }
          ]
        },
        {
          "id": "qr1-7-006",
          "page": 46,
          "ar": "فَالْغَزْوَةُ مَا خَرَجَ فِيْهَا رَسُوْلُ اللهِ ﷺ فِيْ جُنْدٍ مِنَ الْمُسْلِمِيْنَ لِلْجِهَادِ فِيْ سَبِيْلِ اللهِ.",
          "en": "So a ghazwah is one in which the Messenger of Allah ﷺ himself went out with a troop of Muslims, for jihad in Allah's cause.",
          "tokens": [
            {
              "surface": "فَالْغَزْوَةُ",
              "lemma": "غزوة",
              "features": "conj+def.nom",
              "root": "غ ز و",
              "pos": "noun",
              "gloss": "military expedition, battle"
            },
            {
              "surface": "مَا",
              "lemma": "ما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "what; not"
            },
            {
              "surface": "خَرَجَ",
              "lemma": "خرج",
              "features": "perf.3ms",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
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
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
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
              "surface": "جُنْدٍ",
              "lemma": "جند",
              "features": "indef.gen",
              "root": "ج ن د",
              "pos": "noun",
              "gloss": "army, troop"
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
              "surface": "الْمُسْلِمِيْنَ",
              "lemma": "مسلم",
              "features": "pl.gen",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "Muslim"
            },
            {
              "surface": "لِلْجِهَادِ",
              "lemma": "جهاد",
              "features": "prep+def.gen",
              "root": "ج ه د",
              "pos": "noun",
              "gloss": "struggle, striving (in Allah's cause)"
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
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا كَانَ يَفْعَلُ الْمُسْلِمُونَ فِيْ سَبِيْلِ اللهِ؟",
          "options": [
            "يُقَاتِلُونَ الْمُشْرِكِيْنَ وَالْكُفَّارَ لِوَجْهِ اللهِ",
            "يَزْرَعُونَ الأَرْضَ",
            "يَبْنُونَ الْمَسَاجِدَ فَقَطْ"
          ],
          "answer": 0,
          "qEn": "What did the Muslims use to do in Allah's cause?",
          "optionsEn": [
            "Fight the polytheists and disbelievers for Allah's sake",
            "Farm the land",
            "Only build mosques"
          ]
        },
        {
          "q": "مَتَى كَانَ النَّبِيُّ ﷺ يَمْكُثُ فِي الْمَدِيْنَةِ؟",
          "options": [
            "لِشُغْلٍ أَوْ مَصْلَحَةٍ، وَيَبْعَثُ جُنْداً بَدَلاً مِنْهُ",
            "لَا يَمْكُثُ أَبَداً",
            "فِي كُلِّ غَزْوَةٍ"
          ],
          "answer": 0,
          "qEn": "When did the Prophet ﷺ stay behind in Madīnah?",
          "optionsEn": [
            "For some task or matter, sending a troop in his place",
            "He never stayed behind",
            "On every expedition"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "Once the Messenger of Allah ﷺ went out on such an expedition and was returning at midday, in the heat of summer, and wanted to rest. In open country there is nowhere to rest but under a tree, and in the lands of the Arabs there are few trees except the samur acacia. So the Messenger of Allah ﷺ stopped beneath one, hung up his sword on it, and the people scattered and slept -- the Messenger of Allah ﷺ himself sleeping beneath the tree.",
      "sentences": [
        {
          "id": "qr1-7-007",
          "page": 46,
          "ar": "نَعَمْ فَخَرَجَ رَسُوْلُ اللهِ ﷺ فِيْ غَزْوَةٍ وَرَجَعَ عَنْهَا فِي الظَّهِيْرَةِ وَكَانَتْ أَيَّامُ الصَّيْفِ فَأَرَادَ رَسُوْلُ اللهِ ﷺ أَنْ يَسْتَرِيْحَ.",
          "en": "Indeed -- the Messenger of Allah ﷺ went out on an expedition and was returning from it at midday; it was the days of summer, so the Messenger of Allah ﷺ wanted to rest.",
          "tokens": [
            {
              "surface": "نَعَمْ",
              "lemma": "نعم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "yes"
            },
            {
              "surface": "فَخَرَجَ",
              "lemma": "خرج",
              "features": "conj+perf.3ms",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
            },
            {
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
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
              "surface": "غَزْوَةٍ",
              "lemma": "غزوة",
              "features": "indef.gen",
              "root": "غ ز و",
              "pos": "noun",
              "gloss": "military expedition, battle"
            },
            {
              "surface": "وَرَجَعَ",
              "lemma": "رجع",
              "features": "conj+perf.3ms",
              "root": "ر ج ع",
              "pos": "verb",
              "gloss": "to return"
            },
            {
              "surface": "عَنْهَا",
              "lemma": "عن",
              "features": "prep+3fs",
              "root": "",
              "pos": "prep",
              "gloss": "about, from"
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
              "surface": "الظَّهِيْرَةِ",
              "lemma": "ظهيرة",
              "features": "def.gen",
              "root": "ظ ه ر",
              "pos": "noun",
              "gloss": "midday"
            },
            {
              "surface": "وَكَانَتْ",
              "lemma": "كان",
              "features": "conj+perf.3fs",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
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
              "surface": "الصَّيْفِ",
              "lemma": "صيف",
              "features": "def.gen",
              "root": "ص ي ف",
              "pos": "noun",
              "gloss": "summer"
            },
            {
              "surface": "فَأَرَادَ",
              "lemma": "أراد",
              "features": "conj+perf.3ms",
              "root": "ر و د",
              "pos": "verb",
              "gloss": "to want"
            },
            {
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that, because"
            },
            {
              "surface": "يَسْتَرِيْحَ",
              "lemma": "استراح",
              "features": "impf.3ms",
              "root": "ر و ح",
              "pos": "verb",
              "gloss": "to rest"
            }
          ]
        },
        {
          "id": "qr1-7-008",
          "page": 47,
          "ar": "وَلَيْسَ فِيْ الْبَرِّيَّةِ مَكَانٌ يَسْتَرِيْحُ فِيْهِ الإِنْسَانُ إِلَّا الشَّجَرُ.",
          "en": "In open country there is nowhere for a person to rest but under a tree.",
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
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الْبَرِّيَّةِ",
              "lemma": "برية",
              "features": "def.gen",
              "root": "ب ر و",
              "pos": "noun",
              "gloss": "open land, wilderness"
            },
            {
              "surface": "مَكَانٌ",
              "lemma": "مكان",
              "features": "indef.nom",
              "root": "ك و ن",
              "pos": "noun",
              "gloss": "place"
            },
            {
              "surface": "يَسْتَرِيْحُ",
              "lemma": "استراح",
              "features": "impf.3ms",
              "root": "ر و ح",
              "pos": "verb",
              "gloss": "to rest"
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
              "surface": "الإِنْسَانُ",
              "lemma": "إنسان",
              "features": "def.nom",
              "root": "أ ن س",
              "pos": "noun",
              "gloss": "human being, person"
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
              "surface": "الشَّجَرُ",
              "lemma": "شجر",
              "features": "def.nom",
              "root": "ش ج ر",
              "pos": "noun",
              "gloss": "tree(s)"
            }
          ]
        },
        {
          "id": "qr1-7-009",
          "page": 47,
          "ar": "وَلَيْسَ فِيْ الْبَرِّيَّةِ فِي بِلَادِ الْعَرَبِ شَجَرٌ كَثِيْرٌ وَلَيْسَ فِيْهَا إِلَّا السَّمُرُ.",
          "en": "And in the open country of the lands of the Arabs there are not many trees, and there is nothing there but the samur acacia.",
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
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الْبَرِّيَّةِ",
              "lemma": "برية",
              "features": "def.gen",
              "root": "ب ر و",
              "pos": "noun",
              "gloss": "open land, wilderness"
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
              "surface": "بِلَادِ",
              "lemma": "بلد",
              "features": "pl.gen.constr",
              "root": "ب ل د",
              "pos": "noun",
              "gloss": "town, country"
            },
            {
              "surface": "الْعَرَبِ",
              "lemma": "عرب",
              "features": "def.gen",
              "root": "ع ر ب",
              "pos": "proper",
              "gloss": "Arabs"
            },
            {
              "surface": "شَجَرٌ",
              "lemma": "شجر",
              "features": "indef.nom",
              "root": "ش ج ر",
              "pos": "noun",
              "gloss": "tree(s)"
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
              "surface": "وَلَيْسَ",
              "lemma": "ليس",
              "features": "conj+perf.3ms",
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
              "surface": "إِلَّا",
              "lemma": "إلا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "except, only"
            },
            {
              "surface": "السَّمُرُ",
              "lemma": "سمر",
              "features": "def.nom",
              "root": "س م ر",
              "pos": "noun",
              "gloss": "samur (a kind of acacia tree)"
            }
          ]
        },
        {
          "id": "qr1-7-010",
          "page": 47,
          "ar": "فَنَزَلَ رَسُوْلُ اللهِ ﷺ تَحْتَ سَمُرَةٍ وَعَلَّقَ بِهَا سَيْفَهُ، وَتَفَرَّقَ النَّاسُ وَنَامُوْا، وَنَامَ رَسُوْلُ اللهِ ﷺ تَحْتَ السَّمُرَةِ.",
          "en": "So the Messenger of Allah ﷺ stopped beneath a samur tree and hung his sword on it; the people scattered and slept, and the Messenger of Allah ﷺ himself slept beneath the tree.",
          "tokens": [
            {
              "surface": "فَنَزَلَ",
              "lemma": "نزل",
              "features": "conj+perf.3ms",
              "root": "ن ز ل",
              "pos": "verb",
              "gloss": "to alight, stop, camp"
            },
            {
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "تَحْتَ",
              "lemma": "تحت",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "under, beneath"
            },
            {
              "surface": "سَمُرَةٍ",
              "lemma": "سمر",
              "features": "indef.gen",
              "root": "س م ر",
              "pos": "noun",
              "gloss": "samur (a kind of acacia tree)"
            },
            {
              "surface": "وَعَلَّقَ",
              "lemma": "علق",
              "features": "conj+perf.3ms",
              "root": "ع ل ق",
              "pos": "verb",
              "gloss": "to hang (something) up"
            },
            {
              "surface": "بِهَا",
              "lemma": "ب",
              "features": "prep+3fs",
              "root": "",
              "pos": "prep",
              "gloss": "with, by"
            },
            {
              "surface": "سَيْفَهُ",
              "lemma": "سيف",
              "features": "acc+3ms",
              "root": "س ي ف",
              "pos": "noun",
              "gloss": "sword"
            },
            {
              "surface": "وَتَفَرَّقَ",
              "lemma": "تفرق",
              "features": "conj+perf.3ms",
              "root": "ف ر ق",
              "pos": "verb",
              "gloss": "to disperse, scatter"
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
              "surface": "وَنَامُوْا",
              "lemma": "نام",
              "features": "conj+perf.3mp",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "to sleep"
            },
            {
              "surface": "وَنَامَ",
              "lemma": "نام",
              "features": "conj+perf.3ms",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "to sleep"
            },
            {
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "تَحْتَ",
              "lemma": "تحت",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "under, beneath"
            },
            {
              "surface": "السَّمُرَةِ",
              "lemma": "سمر",
              "features": "def.gen",
              "root": "س م ر",
              "pos": "noun",
              "gloss": "samur (a kind of acacia tree)"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا أَرَادَ رَسُوْلُ اللهِ ﷺ أَنْ يَسْتَرِيْحَ؟",
          "options": [
            "لأَنَّهُ كَانَ رَاجِعاً فِي الظَّهِيْرَةِ فِيْ أَيَّامِ الصَّيْفِ",
            "لأَنَّهُ كَانَ مَرِيْضاً",
            "لأَنَّ السَّفَرَ انْتَهَى"
          ],
          "answer": 0,
          "qEn": "Why did the Messenger of Allah ﷺ want to rest?",
          "optionsEn": [
            "Because he was returning at midday in the days of summer",
            "Because he was sick",
            "Because the journey had ended"
          ]
        },
        {
          "q": "أَيْنَ نَزَلَ رَسُوْلُ اللهِ ﷺ وَعَلَّقَ سَيْفَهُ؟",
          "options": [
            "تَحْتَ سَمُرَةٍ",
            "فِيْ دَاخِلِ خَيْمَةٍ",
            "عَلَى ظَهْرِ جَبَلٍ"
          ],
          "answer": 0,
          "qEn": "Where did the Messenger of Allah ﷺ stop and hang up his sword?",
          "optionsEn": [
            "Beneath a samur tree",
            "Inside a tent",
            "On a mountainside"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "A man from among the polytheists came upon the Messenger of Allah's ﷺ sword, hanging on the tree still in its sheath. He took the sword and drew it from its sheath, and the Messenger of Allah ﷺ woke up. The polytheist said, sword drawn in his hand, to the Messenger of Allah ﷺ: \"Are you afraid of me?\"",
      "sentences": [
        {
          "id": "qr1-7-011",
          "page": 47,
          "ar": "وَجَاءَ رَجُلٌ مِنَ الْمُشْرِكِيْنَ وَسَيْفُ رَسُوْلِ اللهِ ﷺ مُعَلَّقٌ بِالسَّمُرَةِ وَهُوَ فِيْ غِمْدِهِ.",
          "en": "A man from among the polytheists came, while the Messenger of Allah's ﷺ sword hung on the tree, still in its sheath.",
          "tokens": [
            {
              "surface": "وَجَاءَ",
              "lemma": "جاء",
              "features": "conj+perf.3ms",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            },
            {
              "surface": "رَجُلٌ",
              "lemma": "رجل",
              "features": "indef.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
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
              "surface": "الْمُشْرِكِيْنَ",
              "lemma": "مشرك",
              "features": "pl.gen",
              "root": "ش ر ك",
              "pos": "noun",
              "gloss": "polytheist, idolater"
            },
            {
              "surface": "وَسَيْفُ",
              "lemma": "سيف",
              "features": "conj+nom.constr",
              "root": "س ي ف",
              "pos": "noun",
              "gloss": "sword"
            },
            {
              "surface": "رَسُوْلِ",
              "lemma": "رسول",
              "features": "gen.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "مُعَلَّقٌ",
              "lemma": "علق",
              "features": "indef.nom",
              "root": "ع ل ق",
              "pos": "adj",
              "gloss": "hung, hanging"
            },
            {
              "surface": "بِالسَّمُرَةِ",
              "lemma": "سمر",
              "features": "prep+def.gen",
              "root": "س م ر",
              "pos": "noun",
              "gloss": "samur (a kind of acacia tree)"
            },
            {
              "surface": "وَهُوَ",
              "lemma": "هو",
              "features": "conj+nom.3ms",
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
              "surface": "غِمْدِهِ",
              "lemma": "غمد",
              "features": "gen+3ms",
              "root": "غ م د",
              "pos": "noun",
              "gloss": "sheath, scabbard"
            }
          ]
        },
        {
          "id": "qr1-7-012",
          "page": 47,
          "ar": "فَأَخَذَ الْمُشْرِكُ السَّيْفَ وَسَلَّهُ مِنْ غِمْدِهِ وَاسْتَيْقَظَ رَسُوْلُ اللهِ ﷺ.",
          "en": "The polytheist took the sword and drew it from its sheath, and the Messenger of Allah ﷺ woke up.",
          "tokens": [
            {
              "surface": "فَأَخَذَ",
              "lemma": "أخذ",
              "features": "conj+perf.3ms",
              "root": "أ خ ذ",
              "pos": "verb",
              "gloss": "to take"
            },
            {
              "surface": "الْمُشْرِكُ",
              "lemma": "مشرك",
              "features": "def.nom",
              "root": "ش ر ك",
              "pos": "noun",
              "gloss": "polytheist, idolater"
            },
            {
              "surface": "السَّيْفَ",
              "lemma": "سيف",
              "features": "def.acc",
              "root": "س ي ف",
              "pos": "noun",
              "gloss": "sword"
            },
            {
              "surface": "وَسَلَّهُ",
              "lemma": "سل",
              "features": "conj+perf.3ms+3ms",
              "root": "س ل ل",
              "pos": "verb",
              "gloss": "to draw, unsheathe (a sword)"
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
              "surface": "غِمْدِهِ",
              "lemma": "غمد",
              "features": "gen+3ms",
              "root": "غ م د",
              "pos": "noun",
              "gloss": "sheath, scabbard"
            },
            {
              "surface": "وَاسْتَيْقَظَ",
              "lemma": "استيقظ",
              "features": "conj+perf.3ms",
              "root": "ي ق ظ",
              "pos": "verb",
              "gloss": "to wake up"
            },
            {
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            }
          ]
        },
        {
          "id": "qr1-7-013",
          "page": 47,
          "ar": "فَقَالَ الْمُشْرِكُ وَالسَّيْفُ مَسْلُوْلٌ فِيْ يَدِهِ لِرَسُوْلِ اللهِ ﷺ: تَخَافُنِيْ؟",
          "en": "The polytheist said, sword drawn in his hand, to the Messenger of Allah ﷺ: \"Are you afraid of me?\"",
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
              "surface": "الْمُشْرِكُ",
              "lemma": "مشرك",
              "features": "def.nom",
              "root": "ش ر ك",
              "pos": "noun",
              "gloss": "polytheist, idolater"
            },
            {
              "surface": "وَالسَّيْفُ",
              "lemma": "سيف",
              "features": "conj+def.nom",
              "root": "س ي ف",
              "pos": "noun",
              "gloss": "sword"
            },
            {
              "surface": "مَسْلُوْلٌ",
              "lemma": "سل",
              "features": "indef.nom",
              "root": "س ل ل",
              "pos": "adj",
              "gloss": "drawn, unsheathed"
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
              "surface": "يَدِهِ",
              "lemma": "يد",
              "features": "gen+3ms",
              "root": "ي د ي",
              "pos": "noun",
              "gloss": "hand"
            },
            {
              "surface": "لِرَسُوْلِ",
              "lemma": "رسول",
              "features": "prep+gen.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "تَخَافُنِيْ",
              "lemma": "خاف",
              "features": "impf.2ms+1s",
              "root": "خ و ف",
              "pos": "verb",
              "gloss": "to fear"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلَ الرَّجُلُ الْمُشْرِكُ حِيْنَ وَجَدَ السَّيْفَ؟",
          "options": [
            "أَخَذَهُ وَسَلَّهُ مِنْ غِمْدِهِ",
            "تَرَكَهُ فِيْ مَكَانِهِ",
            "أَعْطَاهُ لِصَاحِبِهِ"
          ],
          "answer": 0,
          "qEn": "What did the polytheist do when he found the sword?",
          "optionsEn": [
            "He took it and drew it from its sheath",
            "He left it where it was",
            "He gave it to his companion"
          ]
        },
        {
          "q": "مَاذَا سَأَلَ الْمُشْرِكُ رَسُوْلَ اللهِ ﷺ؟",
          "options": [
            "أَتَخَافُنِيْ؟",
            "مَنْ أَنْتَ؟",
            "أَيْنَ أَصْحَابُكَ؟"
          ],
          "answer": 0,
          "qEn": "What did the polytheist ask the Messenger of Allah ﷺ?",
          "optionsEn": [
            "\"Are you afraid of me?\"",
            "\"Who are you?\"",
            "\"Where are your companions?\""
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "\"No,\" said the Messenger of Allah ﷺ. \"Who will protect you from me?\" the polytheist asked. \"Allah!\" said the Messenger of Allah ﷺ.",
      "sentences": [
        {
          "id": "qr1-7-014",
          "page": 47,
          "ar": "قَالَ رَسُوْلُ اللهِ ﷺ: لَا!",
          "en": "The Messenger of Allah ﷺ said: \"No!\"",
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
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "no"
            }
          ]
        },
        {
          "id": "qr1-7-015",
          "page": 47,
          "ar": "قَالَ الْمُشْرِكُ: مَنْ يَمْنَعُكَ مِنِّيْ؟",
          "en": "The polytheist said: \"Who will protect you from me?\"",
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
              "surface": "الْمُشْرِكُ",
              "lemma": "مشرك",
              "features": "def.nom",
              "root": "ش ر ك",
              "pos": "noun",
              "gloss": "polytheist, idolater"
            },
            {
              "surface": "مَنْ",
              "lemma": "من",
              "features": "part",
              "root": "",
              "pos": "prep",
              "gloss": "who"
            },
            {
              "surface": "يَمْنَعُكَ",
              "lemma": "منع",
              "features": "impf.3ms+2ms",
              "root": "م ن ع",
              "pos": "verb",
              "gloss": "to prevent, protect, withhold"
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
          "id": "qr1-7-016",
          "page": 47,
          "ar": "قَالَ رَسُوْلُ اللهِ ﷺ: اللهُ!",
          "en": "The Messenger of Allah ﷺ said: \"Allah!\"",
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
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
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
          "q": "بِمَاذَا أَجَابَ رَسُوْلُ اللهِ ﷺ حِيْنَ سَأَلَهُ الْمُشْرِكُ: مَنْ يَمْنَعُكَ مِنِّيْ؟",
          "options": [
            "اللهُ!",
            "أَصْحَابِيْ!",
            "لَا أَحَدَ!"
          ],
          "answer": 0,
          "qEn": "How did the Messenger of Allah ﷺ answer when the polytheist asked: \"Who will protect you from me?\"",
          "optionsEn": [
            "\"Allah!\"",
            "\"My companions!\"",
            "\"No one!\""
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "At that, the sword fell from the polytheist's hand, and the Messenger of Allah ﷺ took it and asked him in turn: \"Who will protect you from me?\" \"Be the best of takers,\" said the polytheist. The Messenger of Allah ﷺ then asked him to testify that there is no god but Allah and that he is His messenger; the man declined, but pledged instead never to fight him or join anyone fighting him -- so the Messenger of Allah ﷺ let him go.",
      "sentences": [
        {
          "id": "qr1-7-017",
          "page": 48,
          "ar": "فَسَقَطَ السَّيْفُ مِنْ يَدِ الْمُشْرِكِ فَأَخَذَ رَسُوْلُ اللهِ ﷺ السَّيْفَ.",
          "en": "The sword fell from the polytheist's hand, and the Messenger of Allah ﷺ took the sword.",
          "tokens": [
            {
              "surface": "فَسَقَطَ",
              "lemma": "سقط",
              "features": "conj+perf.3ms",
              "root": "س ق ط",
              "pos": "verb",
              "gloss": "to fall"
            },
            {
              "surface": "السَّيْفُ",
              "lemma": "سيف",
              "features": "def.nom",
              "root": "س ي ف",
              "pos": "noun",
              "gloss": "sword"
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
              "surface": "يَدِ",
              "lemma": "يد",
              "features": "gen.constr",
              "root": "ي د ي",
              "pos": "noun",
              "gloss": "hand"
            },
            {
              "surface": "الْمُشْرِكِ",
              "lemma": "مشرك",
              "features": "def.gen",
              "root": "ش ر ك",
              "pos": "noun",
              "gloss": "polytheist, idolater"
            },
            {
              "surface": "فَأَخَذَ",
              "lemma": "أخذ",
              "features": "conj+perf.3ms",
              "root": "أ خ ذ",
              "pos": "verb",
              "gloss": "to take"
            },
            {
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "السَّيْفَ",
              "lemma": "سيف",
              "features": "def.acc",
              "root": "س ي ف",
              "pos": "noun",
              "gloss": "sword"
            }
          ]
        },
        {
          "id": "qr1-7-018",
          "page": 48,
          "ar": "فَقَالَ رَسُوْلُ اللهِ ﷺ لِلْمُشْرِكِ: مَنْ يَمْنَعُكَ مِنِّيْ؟",
          "en": "The Messenger of Allah ﷺ said to the polytheist: \"Who will protect you from me?\"",
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
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "لِلْمُشْرِكِ",
              "lemma": "مشرك",
              "features": "prep+def.gen",
              "root": "ش ر ك",
              "pos": "noun",
              "gloss": "polytheist, idolater"
            },
            {
              "surface": "مَنْ",
              "lemma": "من",
              "features": "part",
              "root": "",
              "pos": "prep",
              "gloss": "who"
            },
            {
              "surface": "يَمْنَعُكَ",
              "lemma": "منع",
              "features": "impf.3ms+2ms",
              "root": "م ن ع",
              "pos": "verb",
              "gloss": "to prevent, protect, withhold"
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
          "id": "qr1-7-019",
          "page": 48,
          "ar": "فَقَالَ الْمُشْرِكُ: كُنْ خَيْرَ آخِذٍ!",
          "en": "The polytheist said: \"Be the best of takers!\"",
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
              "surface": "الْمُشْرِكُ",
              "lemma": "مشرك",
              "features": "def.nom",
              "root": "ش ر ك",
              "pos": "noun",
              "gloss": "polytheist, idolater"
            },
            {
              "surface": "كُنْ",
              "lemma": "كان",
              "features": "imp.2ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "خَيْرَ",
              "lemma": "خير",
              "features": "acc.constr",
              "root": "خ ي ر",
              "pos": "noun",
              "gloss": "good, goodness; best, better"
            },
            {
              "surface": "آخِذٍ",
              "lemma": "أخذ",
              "features": "indef.gen",
              "root": "أ خ ذ",
              "pos": "noun",
              "gloss": "one who takes, taker"
            }
          ]
        },
        {
          "id": "qr1-7-020",
          "page": 48,
          "ar": "فَقَالَ رَسُوْلُ اللهِ ﷺ: أَتَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَأَنِّيْ رَسُوْلُ اللهِ؟",
          "en": "The Messenger of Allah ﷺ said: \"Do you testify that there is no god but Allah, and that I am the Messenger of Allah?\"",
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
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "أَتَشْهَدُ",
              "lemma": "شهد",
              "features": "impf.2ms",
              "root": "ش ه د",
              "pos": "verb",
              "gloss": "to testify, bear witness"
            },
            {
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that, because"
            },
            {
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not"
            },
            {
              "surface": "إِلٰهَ",
              "lemma": "إله",
              "features": "indef.acc",
              "root": "أ ل ه",
              "pos": "noun",
              "gloss": "god, deity"
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
              "surface": "اللهُ",
              "lemma": "الله",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "وَأَنِّيْ",
              "lemma": "أن",
              "features": "conj+part+1s",
              "root": "",
              "pos": "part",
              "gloss": "that, because"
            },
            {
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            }
          ]
        },
        {
          "id": "qr1-7-021",
          "page": 48,
          "ar": "قَالَ الْمُشْرِكُ: لَا! وَلٰكِنِّيْ أُعَاهِدُكَ عَلَىٰ أَنْ لَا أُقَاتِلَكَ وَلَا أَكُوْنَ مَعَ قَوْمٍ يُقَاتِلُوْنَكَ!",
          "en": "The polytheist said: \"No! But I pledge to you that I will not fight you, nor be with any people who fight you!\"",
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
              "surface": "الْمُشْرِكُ",
              "lemma": "مشرك",
              "features": "def.nom",
              "root": "ش ر ك",
              "pos": "noun",
              "gloss": "polytheist, idolater"
            },
            {
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not"
            },
            {
              "surface": "وَلٰكِنِّيْ",
              "lemma": "لكن",
              "features": "conj+part+1s",
              "root": "",
              "pos": "part",
              "gloss": "but"
            },
            {
              "surface": "أُعَاهِدُكَ",
              "lemma": "عاهد",
              "features": "impf.1s+2ms",
              "root": "ع ه د",
              "pos": "verb",
              "gloss": "to make a covenant, pledge"
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
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that, because"
            },
            {
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not"
            },
            {
              "surface": "أُقَاتِلَكَ",
              "lemma": "قاتل",
              "features": "impf.1s+2ms",
              "root": "ق ت ل",
              "pos": "verb",
              "gloss": "to fight"
            },
            {
              "surface": "وَلَا",
              "lemma": "لا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not"
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
              "surface": "مَعَ",
              "lemma": "مع",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "with"
            },
            {
              "surface": "قَوْمٍ",
              "lemma": "قوم",
              "features": "indef.gen",
              "root": "ق و م",
              "pos": "noun",
              "gloss": "people, tribe"
            },
            {
              "surface": "يُقَاتِلُوْنَكَ",
              "lemma": "قاتل",
              "features": "impf.3mp+2ms",
              "root": "ق ت ل",
              "pos": "verb",
              "gloss": "to fight"
            }
          ]
        },
        {
          "id": "qr1-7-022",
          "page": 48,
          "ar": "فَخَلَّىٰ رَسُوْلُ اللهِ ﷺ سَبِيْلَهُ.",
          "en": "So the Messenger of Allah ﷺ let him go.",
          "tokens": [
            {
              "surface": "فَخَلَّىٰ",
              "lemma": "خلى",
              "features": "conj+perf.3ms",
              "root": "خ ل و",
              "pos": "verb",
              "gloss": "to release, let go"
            },
            {
              "surface": "رَسُوْلُ",
              "lemma": "رسول",
              "features": "nom.constr",
              "root": "ر س ل",
              "pos": "noun",
              "gloss": "messenger"
            },
            {
              "surface": "اللهِ",
              "lemma": "الله",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "سَبِيْلَهُ",
              "lemma": "سبيل",
              "features": "acc+3ms",
              "root": "س ب ل",
              "pos": "noun",
              "gloss": "path, way"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا قَالَ الْمُشْرِكُ حِيْنَ أَخَذَ رَسُوْلُ اللهِ ﷺ السَّيْفَ مِنْهُ؟",
          "options": [
            "كُنْ خَيْرَ آخِذٍ",
            "اقْتُلْنِيْ",
            "أَنَا أَسِفٌ"
          ],
          "answer": 0,
          "qEn": "What did the polytheist say when the Messenger of Allah ﷺ took the sword from him?",
          "optionsEn": [
            "\"Be the best of takers\"",
            "\"Kill me\"",
            "\"I am sorry\""
          ]
        },
        {
          "q": "بِمَاذَا وَعَدَ الْمُشْرِكُ رَسُوْلَ اللهِ ﷺ بَدَلاً مِنَ الشَّهَادَةِ؟",
          "options": [
            "أَلَّا يُقَاتِلَهُ وَلَا يَكُوْنَ مَعَ قَوْمٍ يُقَاتِلُوْنَهُ",
            "أَنْ يُسْلِمَ فِيْ الْحَالِ",
            "أَنْ يُعْطِيَهُ مَالاً"
          ],
          "answer": 0,
          "qEn": "What did the polytheist pledge to the Messenger of Allah ﷺ instead of testifying?",
          "optionsEn": [
            "That he would not fight him, nor be with anyone who did",
            "That he would embrace Islam on the spot",
            "That he would give him money"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "en": "The polytheist went back to his companions and said: \"I have come to you from the presence of the best of people.\"",
      "sentences": [
        {
          "id": "qr1-7-023",
          "page": 48,
          "ar": "فَأَتَىٰ الْمُشْرِكُ أَصْحَابَهُ فَقَالَ: جِئْتُكُمْ مِنْ عِنْدِ خَيْرِ النَّاسِ.",
          "en": "The polytheist came to his companions and said: \"I have come to you from the presence of the best of people.\"",
          "tokens": [
            {
              "surface": "فَأَتَىٰ",
              "lemma": "أتى",
              "features": "conj+perf.3ms",
              "root": "أ ت ي",
              "pos": "verb",
              "gloss": "to come to"
            },
            {
              "surface": "الْمُشْرِكُ",
              "lemma": "مشرك",
              "features": "def.nom",
              "root": "ش ر ك",
              "pos": "noun",
              "gloss": "polytheist, idolater"
            },
            {
              "surface": "أَصْحَابَهُ",
              "lemma": "صاحب",
              "features": "pl.acc+3ms",
              "root": "ص ح ب",
              "pos": "noun",
              "gloss": "companion, owner"
            },
            {
              "surface": "فَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "جِئْتُكُمْ",
              "lemma": "جاء",
              "features": "perf.1s+2mp",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
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
              "surface": "عِنْدِ",
              "lemma": "عند",
              "features": "gen.constr",
              "root": "ع ن د",
              "pos": "prep",
              "gloss": "at, by, from"
            },
            {
              "surface": "خَيْرِ",
              "lemma": "خير",
              "features": "gen.constr",
              "root": "خ ي ر",
              "pos": "noun",
              "gloss": "good, goodness; best, better"
            },
            {
              "surface": "النَّاسِ",
              "lemma": "ناس",
              "features": "def.gen",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا قَالَ الْمُشْرِكُ لأَصْحَابِهِ عَنْ رَسُوْلِ اللهِ ﷺ؟",
          "options": [
            "جِئْتُكُمْ مِنْ عِنْدِ خَيْرِ النَّاسِ",
            "جِئْتُكُمْ مِنْ عِنْدِ عَدُوٍّ",
            "لَمْ يَقُلْ شَيْئاً"
          ],
          "answer": 0,
          "qEn": "What did the polytheist tell his companions about the Messenger of Allah ﷺ?",
          "optionsEn": [
            "\"I have come to you from the presence of the best of people\"",
            "\"I have come to you from an enemy\"",
            "He said nothing"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "هَلْ",
        "post": "مَا هِيَ الْغَزْوَةُ؟",
        "en": "Do you (pl.) know what a ghazwah is?",
        "options": [
          "تَعْرِفُوْنَ",
          "يَعْرِفُ",
          "تَعْرِفُ",
          "أَعْرِفُ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. plural — you (pl.) know.",
          "3rd masc. singular — wrong person.",
          "2nd/3rd fem. singular — wrong number.",
          "1st singular — wrong person."
        ]
      },
      {
        "type": "cloze",
        "pre": "لَعَلَّكُمْ",
        "post": "أَنَّ الْمُسْلِمِيْنَ كَانُوْا يَخْرُجُوْنَ لِلْجِهَادِ",
        "en": "You (pl.) may know that the Muslims used to go out for jihad.",
        "options": [
          "تَعْلَمُونَ",
          "يَعْلَمُ",
          "نَعْلَمُ",
          "أَعْلَمُ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. plural — you (pl.) know.",
          "3rd masc. singular — wrong person.",
          "1st plural — wrong person.",
          "1st singular — wrong person."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَ",
        "post": "النَّبِيُّ ﷺ يَخْرُجُ أَحْيَاناً مَعَ الْمُسْلِمِيْنَ",
        "en": "The Prophet ﷺ used to go out sometimes with the Muslims.",
        "options": [
          "كَانَ",
          "كَانَتْ",
          "كَانُوا",
          "كُنْتُ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 3rd masc. singular — he was.",
          "3rd fem. singular — wrong gender.",
          "3rd masc. plural — wrong number.",
          "1st singular — wrong person."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَ",
        "post": "رَسُوْلُ اللهِ ﷺ تَحْتَ سَمُرَةٍ وَعَلَّقَ بِهَا سَيْفَهُ",
        "en": "The Messenger of Allah ﷺ stopped beneath a samur tree and hung up his sword.",
        "options": [
          "نَزَلَ",
          "نَزَلَتْ",
          "نَزَلُوا",
          "تَنْزِلُ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 3rd masc. singular — he stopped/alighted.",
          "3rd fem. singular — wrong gender.",
          "3rd masc. plural — wrong number.",
          "Imperfect — wrong tense."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَ",
        "post": "الْمُشْرِكُ السَّيْفَ وَسَلَّهُ مِنْ غِمْدِهِ",
        "en": "The polytheist took the sword and drew it from its sheath.",
        "options": [
          "أَخَذَ",
          "أَخَذَتْ",
          "أَخَذُوا",
          "يَأْخُذُ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 3rd masc. singular — he took.",
          "3rd fem. singular — wrong gender.",
          "3rd masc. plural — wrong number.",
          "Imperfect — wrong tense."
        ]
      },
      {
        "type": "cloze",
        "pre": "مَنْ",
        "post": "مِنِّيْ؟",
        "en": "Who will protect you from me?",
        "options": [
          "يَمْنَعُكَ",
          "تَمْنَعُكَ",
          "أَمْنَعُكَ",
          "يَمْنَعُوْنَكَ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular + object \"you\" — he protects you.",
          "2nd/3rd fem. singular — wrong gender.",
          "1st singular — wrong person.",
          "3rd masc. plural — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "أَ",
        "post": "أَنْ لَا إِلٰهَ إِلَّا اللهُ وَأَنِّيْ رَسُوْلُ اللهِ؟",
        "en": "Do you testify that there is no god but Allah, and that I am the Messenger of Allah?",
        "options": [
          "تَشْهَدُ",
          "يَشْهَدُ",
          "أَشْهَدُ",
          "نَشْهَدُ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. singular — you testify.",
          "3rd masc. singular — wrong person.",
          "1st singular — wrong person.",
          "1st plural — wrong person."
        ]
      },
      {
        "type": "cloze",
        "pre": "لٰكِنِّيْ",
        "post": "كَ عَلَىٰ أَنْ لَا أُقَاتِلَكَ",
        "en": "But I pledge to you that I will not fight you.",
        "options": [
          "أُعَاهِدُ",
          "يُعَاهِدُ",
          "تُعَاهِدُ",
          "نُعَاهِدُ"
        ],
        "answer": 0,
        "rationales": [
          "1st singular — I pledge.",
          "3rd masc. singular — wrong person.",
          "2nd/3rd fem. singular — wrong person.",
          "1st plural — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَ",
        "post": "رَسُوْلُ اللهِ ﷺ سَبِيْلَهُ",
        "en": "So the Messenger of Allah ﷺ let him go.",
        "options": [
          "خَلَّىٰ",
          "خَلَّتْ",
          "خَلَّوا",
          "يُخَلِّي"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 3rd masc. singular — he released.",
          "3rd fem. singular — wrong gender.",
          "3rd masc. plural — wrong number.",
          "Imperfect — wrong tense."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَ",
        "post": "الْمُشْرِكُ أَصْحَابَهُ فَقَالَ",
        "en": "The polytheist came to his companions and said.",
        "options": [
          "أَتَىٰ",
          "أَتَتْ",
          "أَتَوْا",
          "يَأْتِيْ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 3rd masc. singular — he came.",
          "3rd fem. singular — wrong gender.",
          "3rd masc. plural — wrong number.",
          "Imperfect — wrong tense."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "تَعْرِفُوْنَ مَا هِيَ الْغَزْوَةُ",
        "pre": "",
        "post": "مَا هِيَ الْغَزْوَةُ",
        "targetPerson": "أَنْتَ",
        "targetEn": "you (m. sg.)",
        "options": [
          "تَعْرِفُ",
          "تَعْرِفُوْنَ",
          "يَعْرِفُ",
          "أَعْرِفُ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. singular — you know.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "خَرَجَ فِيْ غَزْوَةٍ",
        "pre": "",
        "post": "فِيْ غَزْوَةٍ",
        "targetPerson": "هُمْ",
        "targetEn": "they (m.)",
        "options": [
          "خَرَجُوا",
          "خَرَجَ",
          "خَرَجَتْ",
          "خَرَجْتُ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 3rd masc. plural — they went out.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "نَزَلَ تَحْتَ سَمُرَةٍ",
        "pre": "",
        "post": "تَحْتَ سَمُرَةٍ",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "نَزَلْتُ",
          "نَزَلَ",
          "نَزَلَتْ",
          "نَزَلْنَا"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 1st singular — I stopped/alighted.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "أَخَذَ السَّيْفَ",
        "pre": "",
        "post": "السَّيْفَ",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "أَخَذَتْ",
          "أَخَذَ",
          "أَخَذُوا",
          "أَخَذْتُ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 3rd feminine singular — she took.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "تَخَافُنِيْ",
        "pre": "",
        "post": "",
        "targetPerson": "أَنْتُمْ",
        "targetEn": "you (m. pl.)",
        "options": [
          "تَخَافُوْنَنِيْ",
          "تَخَافُنِيْ",
          "يَخَافُنِيْ",
          "تَخَافِيْنَنِيْ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. plural + object \"me\" — you (pl.) fear me.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "يَمْنَعُكَ مِنِّيْ",
        "pre": "",
        "post": "مِنِّيْ",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "تَمْنَعُكَ",
          "يَمْنَعُكَ",
          "أَمْنَعُكَ",
          "يَمْنَعُوْنَكَ"
        ],
        "answer": 0,
        "rationales": [
          "3rd feminine singular + object \"you\" — she protects you.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "أُعَاهِدُكَ عَلَىٰ أَنْ لَا أُقَاتِلَكَ",
        "pre": "",
        "post": "عَلَىٰ أَنْ لَا أُقَاتِلَكَ",
        "targetPerson": "هُوَ",
        "targetEn": "he",
        "options": [
          "يُعَاهِدُكَ",
          "أُعَاهِدُكَ",
          "تُعَاهِدُكَ",
          "نُعَاهِدُكَ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular + object \"you\" — he pledges to you.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "خَلَّىٰ سَبِيْلَهُ",
        "pre": "",
        "post": "سَبِيْلَهُ",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "خَلَّيْتُ",
          "خَلَّىٰ",
          "خَلَّتْ",
          "خَلَّوْا"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 1st singular — I released.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

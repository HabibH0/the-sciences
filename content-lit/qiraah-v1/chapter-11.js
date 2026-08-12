// القراءة الراشدة, volume one, chapter eleven -- الساعة.
//
// Follows the shape of chapter-01.js/chapter-04.js -- see ../CHAPTER-FORMAT.md
// for the full specification. Hand-authored directly from the scanned pages
// (qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed pages 60-62); there
// is no JSON intermediate (see PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md --
// the pipeline no longer emits JSON).
//
// A straightforward two-person dialogue (Harith and Sa'id), the same shape as
// chapter-04.js -- no new structural handling was needed. One format note
// worth recording: every dialogue chapter so far tokenizes the speaker label
// itself (e.g. حَارِثٌ) as the sentence's first token whenever it appears in
// that sentence's ar text (only the sentence that opens a speaker's turn
// carries the label; continuation sentences within the same turn don't
// repeat it) -- confirmed against chapter-04.js's qr1-4-001 while drafting
// this chapter, after an early draft omitted the label tokens and failed
// reconstruction.
//
// Vocabulary note: ساعة itself means both "hour" and "watch/clock" -- the
// whole chapter trades on that ambiguity (a running joke about whether
// you're asking the time or asking to see the object), so it keeps a single
// local gloss "hour; watch, clock" rather than splitting into two entries;
// context always disambiguates which sense a given token carries. Numerals
// for telling time (رُبْع "quarter," ثُلُث "third" for :20, نِصْف "half," إِلَّا
// "minus/to") are each ordinary chapter-local entries, no different from any
// other new noun.
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch11",
  "number": 11,
  "title": {
    "ar": "السَّاعَةُ",
    "en": "The Watch"
  },
  "pages": [
    60,
    61,
    62
  ],
  "register": "dialogue",
  "newWords": [
    "ضبط",
    "دقيقة",
    "عقرب",
    "غطاء",
    "ثمين",
    "أهدى",
    "أرى",
    "فات",
    "استأذن",
    "ربط",
    "ميناء",
    "مستقيم"
  ],
  "lemmas": {
    "حارث": {
      "root": "—",
      "pos": "proper",
      "gloss": "Ḥārith (a name)",
      "content": false
    },
    "كم": {
      "root": "—",
      "pos": "part",
      "gloss": "how much, how many",
      "content": false
    },
    "ساعة": {
      "root": "س و ع",
      "pos": "noun",
      "gloss": "hour; watch, clock",
      "content": true
    },
    "يا": {
      "root": "—",
      "pos": "part",
      "gloss": "O (vocative)",
      "content": false
    },
    "أخ": {
      "root": "أ خ و",
      "pos": "noun",
      "gloss": "brother",
      "content": true
    },
    "سعيد": {
      "root": "—",
      "pos": "proper",
      "gloss": "Saʿīd (a name)",
      "content": false
    },
    "عشرة": {
      "root": "ع ش ر",
      "pos": "num",
      "gloss": "ten",
      "content": true
    },
    "ربع": {
      "root": "ر ب ع",
      "pos": "noun",
      "gloss": "a quarter",
      "content": true
    },
    "ليس": {
      "root": "ل ي س",
      "pos": "verb",
      "gloss": "to not be",
      "content": true
    },
    "عند": {
      "root": "ع ن د",
      "pos": "prep",
      "gloss": "at, by, with, in one's possession",
      "content": false
    },
    "بلى": {
      "root": "—",
      "pos": "part",
      "gloss": "yes indeed (contradicting a negative)",
      "content": false
    },
    "لكن": {
      "root": "—",
      "pos": "part",
      "gloss": "but",
      "content": false
    },
    "وقف": {
      "root": "و ق ف",
      "pos": "verb",
      "gloss": "to stand, stop",
      "content": true
    },
    "لعل": {
      "root": "—",
      "pos": "part",
      "gloss": "perhaps, maybe",
      "content": false
    },
    "ما": {
      "root": "—",
      "pos": "part",
      "gloss": "not; what",
      "content": false
    },
    "ملأ": {
      "root": "م ل أ",
      "pos": "verb",
      "gloss": "to fill; to wind (a watch)",
      "content": true
    },
    "نعم": {
      "root": "—",
      "pos": "part",
      "gloss": "yes",
      "content": false
    },
    "نسي": {
      "root": "ن س ي",
      "pos": "verb",
      "gloss": "to forget",
      "content": true
    },
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that",
      "content": false
    },
    "البارحة": {
      "root": "—",
      "pos": "adv",
      "gloss": "yesterday, last night",
      "content": true
    },
    "أنا": {
      "root": "—",
      "pos": "noun",
      "gloss": "I",
      "content": false
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "عاشر": {
      "root": "ع ش ر",
      "pos": "adj",
      "gloss": "tenth",
      "content": true
    },
    "ليل": {
      "root": "ل ي ل",
      "pos": "noun",
      "gloss": "night",
      "content": true
    },
    "غلب": {
      "root": "غ ل ب",
      "pos": "verb",
      "gloss": "to overcome, defeat",
      "content": true
    },
    "عين": {
      "root": "ع ي ن",
      "pos": "noun",
      "gloss": "eye",
      "content": true
    },
    "قد": {
      "root": "—",
      "pos": "part",
      "gloss": "already, indeed",
      "content": false
    },
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
    },
    "تعب": {
      "root": "ت ع ب",
      "pos": "adj",
      "gloss": "tired",
      "content": true
    },
    "جدا": {
      "root": "ج د د",
      "pos": "adv",
      "gloss": "very",
      "content": true
    },
    "هل": {
      "root": "—",
      "pos": "part",
      "gloss": "[yes/no question marker]",
      "content": false
    },
    "أراد": {
      "root": "ر و د",
      "pos": "verb",
      "gloss": "to want",
      "content": true
    },
    "ضبط": {
      "root": "ض ب ط",
      "pos": "verb",
      "gloss": "to set, regulate, correct (e.g. a watch)",
      "content": true,
      "book_note": "ضَبَطَ يَضْبُطُ ضَبْطاً: فُلانٌ السَّاعَةَ: صَحَّحَهَا (to set a watch: to correct it)"
    },
    "إذا": {
      "root": "—",
      "pos": "part",
      "gloss": "if, when",
      "content": false
    },
    "مستقيم": {
      "root": "ق و م",
      "pos": "adj",
      "gloss": "accurate, correct, straight",
      "content": true
    },
    "تقدم": {
      "root": "ق د م",
      "pos": "verb",
      "gloss": "to advance; (of a clock) to run fast",
      "content": true
    },
    "دقيقة": {
      "root": "د ق ق",
      "pos": "noun",
      "gloss": "minute",
      "content": true
    },
    "أربع": {
      "root": "ر ب ع",
      "pos": "num",
      "gloss": "four",
      "content": true
    },
    "عشرين": {
      "root": "ع ش ر",
      "pos": "num",
      "gloss": "twenty",
      "content": true
    },
    "أخر": {
      "root": "أ خ ر",
      "pos": "verb",
      "gloss": "to delay, set back",
      "content": true
    },
    "الآن": {
      "root": "—",
      "pos": "adv",
      "gloss": "now",
      "content": true
    },
    "ثلث": {
      "root": "ث ل ث",
      "pos": "noun",
      "gloss": "a third (here: twenty minutes past)",
      "content": true
    },
    "شكر": {
      "root": "ش ك ر",
      "pos": "verb",
      "gloss": "to thank",
      "content": true
    },
    "أرى": {
      "root": "ر أ ي",
      "pos": "verb",
      "gloss": "to show",
      "content": true
    },
    "تفضل": {
      "root": "ف ض ل",
      "pos": "verb",
      "gloss": "please, go ahead, here you are",
      "content": true
    },
    "إن": {
      "root": "—",
      "pos": "part",
      "gloss": "indeed; that",
      "content": false
    },
    "ثمين": {
      "root": "ث م ن",
      "pos": "adj",
      "gloss": "precious, valuable",
      "content": true
    },
    "جميل": {
      "root": "ج م ل",
      "pos": "adj",
      "gloss": "beautiful",
      "content": true
    },
    "ميناء": {
      "root": "م ي ن",
      "pos": "noun",
      "gloss": "face, dial (of a watch)",
      "content": true
    },
    "عقرب": {
      "root": "ع ق ر ب",
      "pos": "noun",
      "gloss": "hand (of a clock); scorpion",
      "content": true
    },
    "دقيق": {
      "root": "د ق ق",
      "pos": "adj",
      "gloss": "fine, precise",
      "content": true
    },
    "غطاء": {
      "root": "غ ط و",
      "pos": "noun",
      "gloss": "cover, lid",
      "content": true
    },
    "نظيف": {
      "root": "ن ظ ف",
      "pos": "adj",
      "gloss": "clean",
      "content": true
    },
    "اشترى": {
      "root": "ش ر ي",
      "pos": "verb",
      "gloss": "to buy",
      "content": true
    },
    "أهدى": {
      "root": "ه د ي",
      "pos": "verb",
      "gloss": "to give as a gift",
      "content": true
    },
    "إلى": {
      "root": "—",
      "pos": "prep",
      "gloss": "to, towards",
      "content": false
    },
    "كبير": {
      "root": "ك ب ر",
      "pos": "adj",
      "gloss": "big; older (of a sibling)",
      "content": true
    },
    "أخبر": {
      "root": "خ ب ر",
      "pos": "verb",
      "gloss": "to inform, tell",
      "content": true
    },
    "ثلاثين": {
      "root": "ث ل ث",
      "pos": "num",
      "gloss": "thirty",
      "content": true
    },
    "ربية": {
      "root": "—",
      "pos": "noun",
      "gloss": "rupee",
      "content": true
    },
    "رخيص": {
      "root": "ر خ ص",
      "pos": "adj",
      "gloss": "cheap",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "عم": {
      "root": "ع م م",
      "pos": "noun",
      "gloss": "paternal uncle",
      "content": true
    },
    "لما": {
      "root": "—",
      "pos": "part",
      "gloss": "when (in the past)",
      "content": false
    },
    "رجع": {
      "root": "ر ج ع",
      "pos": "verb",
      "gloss": "to return",
      "content": true
    },
    "سافر": {
      "root": "س ف ر",
      "pos": "verb",
      "gloss": "to travel",
      "content": true
    },
    "لازم": {
      "root": "ل ز م",
      "pos": "adj",
      "gloss": "necessary",
      "content": true
    },
    "هذا": {
      "root": "—",
      "pos": "noun",
      "gloss": "this",
      "content": false
    },
    "زمان": {
      "root": "ز م ن",
      "pos": "noun",
      "gloss": "time, era",
      "content": true
    },
    "عرف": {
      "root": "ع ر ف",
      "pos": "verb",
      "gloss": "to know",
      "content": true
    },
    "تلميذ": {
      "root": "ت ل م ذ",
      "pos": "noun",
      "gloss": "student, pupil",
      "content": true
    },
    "ميعاد": {
      "root": "و ع د",
      "pos": "noun",
      "gloss": "appointed time, schedule",
      "content": true
    },
    "مدرسة": {
      "root": "د ر س",
      "pos": "noun",
      "gloss": "school",
      "content": true
    },
    "مسلم": {
      "root": "س ل م",
      "pos": "noun",
      "gloss": "Muslim",
      "content": true
    },
    "أوقات": {
      "root": "و ق ت",
      "pos": "noun",
      "gloss": "times",
      "content": true
    },
    "جماعة": {
      "root": "ج م ع",
      "pos": "noun",
      "gloss": "congregation, group",
      "content": true
    },
    "صلاة": {
      "root": "ص ل و",
      "pos": "noun",
      "gloss": "prayer",
      "content": true
    },
    "تأخر": {
      "root": "أ خ ر",
      "pos": "verb",
      "gloss": "to be late, fall behind",
      "content": true
    },
    "عن": {
      "root": "—",
      "pos": "prep",
      "gloss": "from, away from; about",
      "content": false
    },
    "بعض": {
      "root": "ب ع ض",
      "pos": "noun",
      "gloss": "some, part of",
      "content": true
    },
    "يوم": {
      "root": "ي و م",
      "pos": "noun",
      "gloss": "day",
      "content": true
    },
    "فات": {
      "root": "ف و ت",
      "pos": "verb",
      "gloss": "to elapse, pass by; to be missed by (someone)",
      "content": true
    },
    "أحيانا": {
      "root": "ح ي ن",
      "pos": "adv",
      "gloss": "sometimes",
      "content": true
    },
    "منذ": {
      "root": "—",
      "pos": "prep",
      "gloss": "since",
      "content": false
    },
    "لم": {
      "root": "—",
      "pos": "part",
      "gloss": "not (with jussive, past negation)",
      "content": false
    },
    "استأذن": {
      "root": "أ ذ ن",
      "pos": "verb",
      "gloss": "to ask permission, excuse oneself",
      "content": true
    },
    "اليوم": {
      "root": "ي و م",
      "pos": "adv",
      "gloss": "today",
      "content": true
    },
    "قطار": {
      "root": "ق ط ر",
      "pos": "noun",
      "gloss": "train",
      "content": true
    },
    "اثنتا": {
      "root": "ث ن ي",
      "pos": "num",
      "gloss": "two (component of \"twelve\", fem.)",
      "content": true
    },
    "إلا": {
      "root": "—",
      "pos": "part",
      "gloss": "except; minus (in telling time)",
      "content": false
    },
    "وقت": {
      "root": "و ق ت",
      "pos": "noun",
      "gloss": "time",
      "content": true
    },
    "واسع": {
      "root": "و س ع",
      "pos": "adj",
      "gloss": "spacious, ample, plenty",
      "content": true
    },
    "نصف": {
      "root": "ن ص ف",
      "pos": "noun",
      "gloss": "half",
      "content": true
    },
    "محطة": {
      "root": "ح ط ط",
      "pos": "noun",
      "gloss": "station",
      "content": true
    },
    "قريب": {
      "root": "ق ر ب",
      "pos": "adj",
      "gloss": "near",
      "content": true
    },
    "بيت": {
      "root": "ب ي ت",
      "pos": "noun",
      "gloss": "house",
      "content": true
    },
    "ل": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to; belonging to",
      "content": false
    },
    "شغل": {
      "root": "ش غ ل",
      "pos": "noun",
      "gloss": "work, business, occupation",
      "content": true
    },
    "سوق": {
      "root": "س و ق",
      "pos": "noun",
      "gloss": "market",
      "content": true
    },
    "ربط": {
      "root": "ر ب ط",
      "pos": "verb",
      "gloss": "to tie up, settle (an errand)",
      "content": true
    },
    "حاجة": {
      "root": "ح و ج",
      "pos": "noun",
      "gloss": "need, errand",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, on",
      "content": false
    },
    "بركة": {
      "root": "ب ر ك",
      "pos": "noun",
      "gloss": "blessing",
      "content": true
    },
    "الله": {
      "root": "—",
      "pos": "proper",
      "gloss": "Allah",
      "content": true
    },
    "سلام": {
      "root": "س ل م",
      "pos": "noun",
      "gloss": "peace",
      "content": true
    },
    "رحمة": {
      "root": "ر ح م",
      "pos": "noun",
      "gloss": "mercy",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "Harith asks Sa'id the time and learns his own watch has stopped -- Sa'id guesses he forgot to wind it, and Harith admits he did, forgetting the night before.",
      "sentences": [
        {
          "id": "qr1-11-001",
          "page": 60,
          "ar": "حَارِثٌ: كَمِ السَّاعَةُ يَا أَخِيْ؟",
          "en": "Harith: What time is it, brother?",
          "tokens": [
            {
              "surface": "حَارِثٌ",
              "lemma": "حارث",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥārith (a name)"
            },
            {
              "surface": "كَمِ",
              "lemma": "كم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "how much, how many"
            },
            {
              "surface": "السَّاعَةُ",
              "lemma": "ساعة",
              "features": "def.nom",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
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
              "surface": "أَخِيْ",
              "lemma": "أخ",
              "features": "acc+1s",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brother"
            }
          ]
        },
        {
          "id": "qr1-11-002",
          "page": 60,
          "ar": "سَعِيْدٌ: السَّاعَةُ عَشْرٌ وَرُبْعٌ.",
          "en": "Sa'id: It's a quarter past ten.",
          "tokens": [
            {
              "surface": "سَعِيْدٌ",
              "lemma": "سعيد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            },
            {
              "surface": "السَّاعَةُ",
              "lemma": "ساعة",
              "features": "def.nom",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "عَشْرٌ",
              "lemma": "عشرة",
              "features": "indef.nom",
              "root": "ع ش ر",
              "pos": "num",
              "gloss": "ten"
            },
            {
              "surface": "وَرُبْعٌ",
              "lemma": "ربع",
              "features": "conj+indef.nom",
              "root": "ر ب ع",
              "pos": "noun",
              "gloss": "a quarter"
            }
          ]
        },
        {
          "id": "qr1-11-003",
          "page": 60,
          "ar": "أَلَيْسَ عِنْدَكَ سَاعَةٌ؟",
          "en": "Don't you have a watch?",
          "tokens": [
            {
              "surface": "أَلَيْسَ",
              "lemma": "ليس",
              "features": "part+perf.3ms",
              "root": "ل ي س",
              "pos": "verb",
              "gloss": "to not be"
            },
            {
              "surface": "عِنْدَكَ",
              "lemma": "عند",
              "features": "prep+2ms",
              "root": "ع ن د",
              "pos": "prep",
              "gloss": "at, by, with, in one's possession"
            },
            {
              "surface": "سَاعَةٌ",
              "lemma": "ساعة",
              "features": "indef.nom",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            }
          ]
        },
        {
          "id": "qr1-11-004",
          "page": 60,
          "ar": "حَارِثٌ: بَلَىٰ! وَلٰكِنَّ سَاعَتِيْ وَاقِفَةٌ.",
          "en": "Harith: Of course! But my watch has stopped.",
          "tokens": [
            {
              "surface": "حَارِثٌ",
              "lemma": "حارث",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥārith (a name)"
            },
            {
              "surface": "بَلَىٰ",
              "lemma": "بلى",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "yes indeed (contradicting a negative)"
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
              "surface": "سَاعَتِيْ",
              "lemma": "ساعة",
              "features": "acc+1s",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "وَاقِفَةٌ",
              "lemma": "وقف",
              "features": "indef.nom",
              "root": "و ق ف",
              "pos": "adj",
              "gloss": "stopped, standing"
            }
          ]
        },
        {
          "id": "qr1-11-005",
          "page": 60,
          "ar": "سَعِيْدٌ: لَعَلَّكَ مَا مَلَأْتَهَا.",
          "en": "Sa'id: Maybe you didn't wind it.",
          "tokens": [
            {
              "surface": "سَعِيْدٌ",
              "lemma": "سعيد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            },
            {
              "surface": "لَعَلَّكَ",
              "lemma": "لعل",
              "features": "part+2ms",
              "root": "",
              "pos": "part",
              "gloss": "perhaps, maybe"
            },
            {
              "surface": "مَا",
              "lemma": "ما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not; what"
            },
            {
              "surface": "مَلَأْتَهَا",
              "lemma": "ملأ",
              "features": "perf.2ms+3fs",
              "root": "م ل أ",
              "pos": "verb",
              "gloss": "to fill; to wind (a watch)"
            }
          ]
        },
        {
          "id": "qr1-11-006",
          "page": 60,
          "ar": "حَارِثٌ: نَعَمْ! نَسِيْتُ أَنْ أَمْلَأَهَا الْبَارِحَةَ.",
          "en": "Harith: True! I forgot to wind it last night.",
          "tokens": [
            {
              "surface": "حَارِثٌ",
              "lemma": "حارث",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥārith (a name)"
            },
            {
              "surface": "نَعَمْ",
              "lemma": "نعم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "yes"
            },
            {
              "surface": "نَسِيْتُ",
              "lemma": "نسي",
              "features": "perf.1s",
              "root": "ن س ي",
              "pos": "verb",
              "gloss": "to forget"
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
              "surface": "أَمْلَأَهَا",
              "lemma": "ملأ",
              "features": "impf.1s+3fs",
              "root": "م ل أ",
              "pos": "verb",
              "gloss": "to fill; to wind (a watch)"
            },
            {
              "surface": "الْبَارِحَةَ",
              "lemma": "البارحة",
              "features": "acc",
              "root": "",
              "pos": "adv",
              "gloss": "yesterday, last night"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا سَأَلَ حَارِثٌ سَعِيْدًا عَنِ السَّاعَةِ؟",
          "options": [
            "لِأَنَّ سَاعَتَهُ وَاقِفَةٌ",
            "لِأَنَّهُ لَا يَعْرِفُ الْأَرْقَامَ",
            "لِأَنَّهُ نَسِيَ سَاعَتَهُ فِي الْبَيْتِ"
          ],
          "answer": 0,
          "qEn": "Why did Harith ask Sa'id for the time?",
          "optionsEn": [
            "Because his watch has stopped",
            "Because he doesn't know the numbers",
            "Because he forgot his watch at home"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "Harith explains he normally winds his watch at ten each night but was too tired last night and fell asleep; Sa'id offers to help him set it by his own watch, and Harith agrees, so long as Sa'id's watch is accurate.",
      "sentences": [
        {
          "id": "qr1-11-007",
          "page": 60,
          "ar": "أَنَا أَمْلَؤُهَا فِي السَّاعَةِ الْعَاشِرَةِ فِي اللَّيْلِ.",
          "en": "I wind it at ten o'clock at night,",
          "tokens": [
            {
              "surface": "أَنَا",
              "lemma": "أنا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "أَمْلَؤُهَا",
              "lemma": "ملأ",
              "features": "impf.1s+3fs",
              "root": "م ل أ",
              "pos": "verb",
              "gloss": "to fill; to wind (a watch)"
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
              "surface": "السَّاعَةِ",
              "lemma": "ساعة",
              "features": "def.gen",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "الْعَاشِرَةِ",
              "lemma": "عاشر",
              "features": "def.gen",
              "root": "ع ش ر",
              "pos": "adj",
              "gloss": "tenth"
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
            }
          ]
        },
        {
          "id": "qr1-11-008",
          "page": 60,
          "ar": "وَلٰكِنِّيْ غَلَبَتْنِيْ عَيْنِيْ الْبَارِحَةَ.",
          "en": "but sleep overcame me last night --",
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
              "surface": "غَلَبَتْنِيْ",
              "lemma": "غلب",
              "features": "perf.3fs+1s",
              "root": "غ ل ب",
              "pos": "verb",
              "gloss": "to overcome, defeat"
            },
            {
              "surface": "عَيْنِيْ",
              "lemma": "عين",
              "features": "nom+1s",
              "root": "ع ي ن",
              "pos": "noun",
              "gloss": "eye"
            },
            {
              "surface": "الْبَارِحَةَ",
              "lemma": "البارحة",
              "features": "acc",
              "root": "",
              "pos": "adv",
              "gloss": "yesterday, last night"
            }
          ]
        },
        {
          "id": "qr1-11-009",
          "page": 60,
          "ar": "فَقَدْ كُنْتُ تَعِبًا جِدًّا.",
          "en": "I was very tired,",
          "tokens": [
            {
              "surface": "فَقَدْ",
              "lemma": "قد",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "already, indeed"
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
              "surface": "تَعِبًا",
              "lemma": "تعب",
              "features": "indef.acc",
              "root": "ت ع ب",
              "pos": "adj",
              "gloss": "tired"
            },
            {
              "surface": "جِدًّا",
              "lemma": "جدا",
              "features": "acc",
              "root": "ج د د",
              "pos": "adv",
              "gloss": "very"
            }
          ]
        },
        {
          "id": "qr1-11-010",
          "page": 60,
          "ar": "فَمَا مَلَأْتُهَا.",
          "en": "so I didn't wind it.",
          "tokens": [
            {
              "surface": "فَمَا",
              "lemma": "ما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not; what"
            },
            {
              "surface": "مَلَأْتُهَا",
              "lemma": "ملأ",
              "features": "perf.1s+3fs",
              "root": "م ل أ",
              "pos": "verb",
              "gloss": "to fill; to wind (a watch)"
            }
          ]
        },
        {
          "id": "qr1-11-011",
          "page": 60,
          "ar": "سَعِيْدٌ: هَلْ تُرِيْدُ ضَبْطَهَا بِسَاعَتِيْ؟",
          "en": "Sa'id: Do you want to set it by my watch?",
          "tokens": [
            {
              "surface": "سَعِيْدٌ",
              "lemma": "سعيد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            },
            {
              "surface": "هَلْ",
              "lemma": "هل",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "[yes/no question marker]"
            },
            {
              "surface": "تُرِيْدُ",
              "lemma": "أراد",
              "features": "impf.2ms",
              "root": "ر و د",
              "pos": "verb",
              "gloss": "to want"
            },
            {
              "surface": "ضَبْطَهَا",
              "lemma": "ضبط",
              "features": "acc+3fs",
              "root": "ض ب ط",
              "pos": "noun",
              "gloss": "the setting/correcting of it"
            },
            {
              "surface": "بِسَاعَتِيْ",
              "lemma": "ساعة",
              "features": "prep+gen+1s",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            }
          ]
        },
        {
          "id": "qr1-11-012",
          "page": 60,
          "ar": "حَارِثٌ: نَعَمْ! أَضْبِطُهَا بِسَاعَتِكَ إِذَا كَانَتْ سَاعَتُكَ مُسْتَقِيْمَةً.",
          "en": "Harith: Yes! I'll set it by your watch, if your watch is accurate.",
          "tokens": [
            {
              "surface": "حَارِثٌ",
              "lemma": "حارث",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥārith (a name)"
            },
            {
              "surface": "نَعَمْ",
              "lemma": "نعم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "yes"
            },
            {
              "surface": "أَضْبِطُهَا",
              "lemma": "ضبط",
              "features": "impf.1s+3fs",
              "root": "ض ب ط",
              "pos": "verb",
              "gloss": "to set, regulate, correct (e.g. a watch)"
            },
            {
              "surface": "بِسَاعَتِكَ",
              "lemma": "ساعة",
              "features": "prep+gen+2ms",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
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
              "surface": "كَانَتْ",
              "lemma": "كان",
              "features": "perf.3fs",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "سَاعَتُكَ",
              "lemma": "ساعة",
              "features": "nom+2ms",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "مُسْتَقِيْمَةً",
              "lemma": "مستقيم",
              "features": "indef.acc",
              "root": "ق و م",
              "pos": "adj",
              "gloss": "accurate, correct, straight"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَتَى يَمْلَأُ حَارِثٌ سَاعَتَهُ عَادَةً؟",
          "options": [
            "فِي السَّاعَةِ الْعَاشِرَةِ فِي اللَّيْلِ",
            "فِي الصَّبَاحِ",
            "بَعْدَ الظُّهْرِ"
          ],
          "answer": 0,
          "qEn": "When does Harith usually wind his watch?",
          "optionsEn": [
            "At ten o'clock at night",
            "In the morning",
            "After noon"
          ]
        },
        {
          "q": "بِمَاذَا عَرَضَ سَعِيْدٌ أَنْ يُسَاعِدَ حَارِثاً؟",
          "options": [
            "بِضَبْطِ سَاعَتِهِ بِسَاعَةِ سَعِيْدٍ",
            "بِإِعَارَتِهِ سَاعَةً جَدِيْدَةً",
            "بِإِصْلَاحِ سَاعَتِهِ"
          ],
          "answer": 0,
          "qEn": "What did Sa'id offer to help with?",
          "optionsEn": [
            "Setting his watch by Sa'id's watch",
            "Lending him a new watch",
            "Repairing his watch"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "Sa'id explains his watch runs two minutes fast every twenty-four hours and that he corrected it yesterday, then gives the current time; Harith thanks him and asks to see the watch.",
      "sentences": [
        {
          "id": "qr1-11-013",
          "page": 60,
          "ar": "سَعِيْدٌ: سَاعَتِيْ تَتَقَدَّمُ دَقِيْقَتَيْنِ فِيْ أَرْبَعٍ وَعِشْرِيْنَ سَاعَةً.",
          "en": "Sa'id: My watch runs two minutes fast in twenty-four hours,",
          "tokens": [
            {
              "surface": "سَعِيْدٌ",
              "lemma": "سعيد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            },
            {
              "surface": "سَاعَتِيْ",
              "lemma": "ساعة",
              "features": "nom+1s",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "تَتَقَدَّمُ",
              "lemma": "تقدم",
              "features": "impf.3fs",
              "root": "ق د م",
              "pos": "verb",
              "gloss": "to advance; (of a clock) to run fast"
            },
            {
              "surface": "دَقِيْقَتَيْنِ",
              "lemma": "دقيقة",
              "features": "du.acc",
              "root": "د ق ق",
              "pos": "noun",
              "gloss": "minute"
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
              "surface": "أَرْبَعٍ",
              "lemma": "أربع",
              "features": "indef.gen",
              "root": "ر ب ع",
              "pos": "num",
              "gloss": "four"
            },
            {
              "surface": "وَعِشْرِيْنَ",
              "lemma": "عشرين",
              "features": "conj+gen",
              "root": "ع ش ر",
              "pos": "num",
              "gloss": "twenty"
            },
            {
              "surface": "سَاعَةً",
              "lemma": "ساعة",
              "features": "indef.acc",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            }
          ]
        },
        {
          "id": "qr1-11-014",
          "page": 61,
          "ar": "وَقَدْ ضَبَطْتُهَا الْبَارِحَةَ فَأَخَّرْتُهَا دَقِيْقَتَيْنِ.",
          "en": "and I set it yesterday, so I set it back two minutes.",
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
              "surface": "ضَبَطْتُهَا",
              "lemma": "ضبط",
              "features": "perf.1s+3fs",
              "root": "ض ب ط",
              "pos": "verb",
              "gloss": "to set, regulate, correct (e.g. a watch)"
            },
            {
              "surface": "الْبَارِحَةَ",
              "lemma": "البارحة",
              "features": "acc",
              "root": "",
              "pos": "adv",
              "gloss": "yesterday, last night"
            },
            {
              "surface": "فَأَخَّرْتُهَا",
              "lemma": "أخر",
              "features": "conj+perf.1s+3fs",
              "root": "أ خ ر",
              "pos": "verb",
              "gloss": "to delay, set back"
            },
            {
              "surface": "دَقِيْقَتَيْنِ",
              "lemma": "دقيقة",
              "features": "du.acc",
              "root": "د ق ق",
              "pos": "noun",
              "gloss": "minute"
            }
          ]
        },
        {
          "id": "qr1-11-015",
          "page": 61,
          "ar": "حَارِثٌ: كَمِ السَّاعَةُ الآنَ؟",
          "en": "Harith: What time is it now?",
          "tokens": [
            {
              "surface": "حَارِثٌ",
              "lemma": "حارث",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥārith (a name)"
            },
            {
              "surface": "كَمِ",
              "lemma": "كم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "how much, how many"
            },
            {
              "surface": "السَّاعَةُ",
              "lemma": "ساعة",
              "features": "def.nom",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "الآنَ",
              "lemma": "الآن",
              "features": "adv",
              "root": "",
              "pos": "adv",
              "gloss": "now"
            }
          ]
        },
        {
          "id": "qr1-11-016",
          "page": 61,
          "ar": "سَعِيْدٌ: الآنَ عَشْرٌ وَثُلُثٌ.",
          "en": "Sa'id: It's now twenty past ten.",
          "tokens": [
            {
              "surface": "سَعِيْدٌ",
              "lemma": "سعيد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            },
            {
              "surface": "الآنَ",
              "lemma": "الآن",
              "features": "adv",
              "root": "",
              "pos": "adv",
              "gloss": "now"
            },
            {
              "surface": "عَشْرٌ",
              "lemma": "عشرة",
              "features": "indef.nom",
              "root": "ع ش ر",
              "pos": "num",
              "gloss": "ten"
            },
            {
              "surface": "وَثُلُثٌ",
              "lemma": "ثلث",
              "features": "conj+indef.nom",
              "root": "ث ل ث",
              "pos": "noun",
              "gloss": "a third (here: twenty minutes past)"
            }
          ]
        },
        {
          "id": "qr1-11-017",
          "page": 61,
          "ar": "حَارِثٌ: أَشْكُرُكَ، أَرِنِيْ سَاعَتَكَ.",
          "en": "Harith: Thank you -- show me your watch.",
          "tokens": [
            {
              "surface": "حَارِثٌ",
              "lemma": "حارث",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥārith (a name)"
            },
            {
              "surface": "أَشْكُرُكَ",
              "lemma": "شكر",
              "features": "impf.1s+2ms",
              "root": "ش ك ر",
              "pos": "verb",
              "gloss": "to thank"
            },
            {
              "surface": "أَرِنِيْ",
              "lemma": "أرى",
              "features": "imp.2ms+1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to show"
            },
            {
              "surface": "سَاعَتَكَ",
              "lemma": "ساعة",
              "features": "acc+2ms",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            }
          ]
        },
        {
          "id": "qr1-11-018",
          "page": 61,
          "ar": "سَعِيْدٌ: تَفَضَّلْ.",
          "en": "Sa'id: Here you are.",
          "tokens": [
            {
              "surface": "سَعِيْدٌ",
              "lemma": "سعيد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            },
            {
              "surface": "تَفَضَّلْ",
              "lemma": "تفضل",
              "features": "imp.2ms",
              "root": "ف ض ل",
              "pos": "verb",
              "gloss": "please, go ahead, here you are"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَمْ تَتَقَدَّمُ سَاعَةُ سَعِيْدٍ فِيْ أَرْبَعٍ وَعِشْرِيْنَ سَاعَةً؟",
          "options": [
            "دَقِيْقَتَيْنِ",
            "دَقِيْقَةً وَاحِدَةً",
            "خَمْسَ دَقَائِقَ"
          ],
          "answer": 0,
          "qEn": "How much fast does Sa'id's watch run in twenty-four hours?",
          "optionsEn": [
            "Two minutes",
            "One minute",
            "Five minutes"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "Harith admires the watch -- its beautiful face, fine hands, and clean cover -- and asks the price; Sa'id says his older brother gave it to him as a gift, bought for thirty rupees, and asks about Harith's.",
      "sentences": [
        {
          "id": "qr1-11-019",
          "page": 61,
          "ar": "حَارِثٌ: إِنَّ سَاعَتَكَ ثَمِيْنَةٌ وَجَمِيْلَةٌ.",
          "en": "Harith: Your watch is precious and beautiful --",
          "tokens": [
            {
              "surface": "حَارِثٌ",
              "lemma": "حارث",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥārith (a name)"
            },
            {
              "surface": "إِنَّ",
              "lemma": "إن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "indeed; that"
            },
            {
              "surface": "سَاعَتَكَ",
              "lemma": "ساعة",
              "features": "acc+2ms",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "ثَمِيْنَةٌ",
              "lemma": "ثمين",
              "features": "indef.nom",
              "root": "ث م ن",
              "pos": "adj",
              "gloss": "precious, valuable"
            },
            {
              "surface": "وَجَمِيْلَةٌ",
              "lemma": "جميل",
              "features": "conj+indef.nom",
              "root": "ج م ل",
              "pos": "adj",
              "gloss": "beautiful"
            }
          ]
        },
        {
          "id": "qr1-11-020",
          "page": 61,
          "ar": "مِيْنَاؤُهَا جَمِيْلٌ وَعَقَارِبُهَا دَقِيْقَةٌ وَغِطَاؤُهَا نَظِيْفٌ.",
          "en": "its face is beautiful, its hands are fine, and its cover is clean.",
          "tokens": [
            {
              "surface": "مِيْنَاؤُهَا",
              "lemma": "ميناء",
              "features": "nom+3fs",
              "root": "م ي ن",
              "pos": "noun",
              "gloss": "face, dial (of a watch)"
            },
            {
              "surface": "جَمِيْلٌ",
              "lemma": "جميل",
              "features": "indef.nom",
              "root": "ج م ل",
              "pos": "adj",
              "gloss": "beautiful"
            },
            {
              "surface": "وَعَقَارِبُهَا",
              "lemma": "عقرب",
              "features": "conj+pl.nom+3fs",
              "root": "ع ق ر ب",
              "pos": "noun",
              "gloss": "hand (of a clock); scorpion"
            },
            {
              "surface": "دَقِيْقَةٌ",
              "lemma": "دقيق",
              "features": "indef.nom",
              "root": "د ق ق",
              "pos": "adj",
              "gloss": "fine, precise"
            },
            {
              "surface": "وَغِطَاؤُهَا",
              "lemma": "غطاء",
              "features": "conj+nom+3fs",
              "root": "غ ط و",
              "pos": "noun",
              "gloss": "cover, lid"
            },
            {
              "surface": "نَظِيْفٌ",
              "lemma": "نظيف",
              "features": "indef.nom",
              "root": "ن ظ ف",
              "pos": "adj",
              "gloss": "clean"
            }
          ]
        },
        {
          "id": "qr1-11-021",
          "page": 61,
          "ar": "بِكَمْ اشْتَرَيْتَهَا يَا سَعِيْدُ؟",
          "en": "How much did you buy it for, Sa'id?",
          "tokens": [
            {
              "surface": "بِكَمْ",
              "lemma": "كم",
              "features": "prep+part",
              "root": "",
              "pos": "part",
              "gloss": "how much, how many"
            },
            {
              "surface": "اشْتَرَيْتَهَا",
              "lemma": "اشترى",
              "features": "perf.2ms+3fs",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
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
              "surface": "سَعِيْدُ",
              "lemma": "سعيد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا وَصَفَ حَارِثٌ سَاعَةَ سَعِيْدٍ؟",
          "options": [
            "ثَمِيْنَةٌ وَجَمِيْلَةٌ",
            "قَدِيْمَةٌ وَقَبِيْحَةٌ",
            "كَبِيْرَةٌ وَثَقِيْلَةٌ"
          ],
          "answer": 0,
          "qEn": "How did Harith describe Sa'id's watch?",
          "optionsEn": [
            "Precious and beautiful",
            "Old and ugly",
            "Big and heavy"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "Sa'id says his older brother gave him the watch as a gift, bought for thirty rupees, and asks about Harith's; Harith's own watch is cheaper, twenty rupees, a gift from his uncle after a trip.",
      "sentences": [
        {
          "id": "qr1-11-022",
          "page": 61,
          "ar": "سَعِيْدٌ: أَهْدَاهَا إِلَيَّ أَخِي الْكَبِيْرُ.",
          "en": "Sa'id: My older brother gave it to me as a gift,",
          "tokens": [
            {
              "surface": "سَعِيْدٌ",
              "lemma": "سعيد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            },
            {
              "surface": "أَهْدَاهَا",
              "lemma": "أهدى",
              "features": "perf.3ms+3fs",
              "root": "ه د ي",
              "pos": "verb",
              "gloss": "to give as a gift"
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
              "surface": "أَخِي",
              "lemma": "أخ",
              "features": "nom.constr+1s",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brother"
            },
            {
              "surface": "الْكَبِيْرُ",
              "lemma": "كبير",
              "features": "def.nom",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "big; older (of a sibling)"
            }
          ]
        },
        {
          "id": "qr1-11-023",
          "page": 61,
          "ar": "وَأَخْبَرَنِيْ أَنَّهُ اشْتَرَاهَا بِثَلَاثِيْنَ رُبِّيَّةً.",
          "en": "and told me he bought it for thirty rupees.",
          "tokens": [
            {
              "surface": "وَأَخْبَرَنِيْ",
              "lemma": "أخبر",
              "features": "conj+perf.3ms+1s",
              "root": "خ ب ر",
              "pos": "verb",
              "gloss": "to inform, tell"
            },
            {
              "surface": "أَنَّهُ",
              "lemma": "أن",
              "features": "part+3ms",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "اشْتَرَاهَا",
              "lemma": "اشترى",
              "features": "perf.3ms+3fs",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            },
            {
              "surface": "بِثَلَاثِيْنَ",
              "lemma": "ثلاثين",
              "features": "prep+acc",
              "root": "ث ل ث",
              "pos": "num",
              "gloss": "thirty"
            },
            {
              "surface": "رُبِّيَّةً",
              "lemma": "ربية",
              "features": "indef.acc",
              "root": "",
              "pos": "noun",
              "gloss": "rupee"
            }
          ]
        },
        {
          "id": "qr1-11-024",
          "page": 61,
          "ar": "وَسَاعَتُكَ بِكَمْ؟",
          "en": "And your watch, for how much?",
          "tokens": [
            {
              "surface": "وَسَاعَتُكَ",
              "lemma": "ساعة",
              "features": "conj+nom+2ms",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "بِكَمْ",
              "lemma": "كم",
              "features": "prep+part",
              "root": "",
              "pos": "part",
              "gloss": "how much, how many"
            }
          ]
        },
        {
          "id": "qr1-11-025",
          "page": 61,
          "ar": "حَارِثٌ: سَاعَتِيْ أَرْخَصُ مِنْهَا، فَإِنَّهَا بِعِشْرِيْنَ رُبِّيَّةً.",
          "en": "Harith: My watch is cheaper than it -- it's twenty rupees.",
          "tokens": [
            {
              "surface": "حَارِثٌ",
              "lemma": "حارث",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥārith (a name)"
            },
            {
              "surface": "سَاعَتِيْ",
              "lemma": "ساعة",
              "features": "nom+1s",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "أَرْخَصُ",
              "lemma": "رخيص",
              "features": "nom",
              "root": "ر خ ص",
              "pos": "adj",
              "gloss": "cheaper"
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
              "surface": "فَإِنَّهَا",
              "lemma": "إن",
              "features": "conj+part+3fs",
              "root": "",
              "pos": "part",
              "gloss": "indeed; that"
            },
            {
              "surface": "بِعِشْرِيْنَ",
              "lemma": "عشرين",
              "features": "prep+acc",
              "root": "ع ش ر",
              "pos": "num",
              "gloss": "twenty"
            },
            {
              "surface": "رُبِّيَّةً",
              "lemma": "ربية",
              "features": "indef.acc",
              "root": "",
              "pos": "noun",
              "gloss": "rupee"
            }
          ]
        },
        {
          "id": "qr1-11-026",
          "page": 61,
          "ar": "قَدْ أَهْدَاهَا إِلَيَّ عَمِّيْ لَمَّا رَجَعَ مِنَ السَّفَرِ.",
          "en": "My uncle gave it to me as a gift when he returned from a trip.",
          "tokens": [
            {
              "surface": "قَدْ",
              "lemma": "قد",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "already, indeed"
            },
            {
              "surface": "أَهْدَاهَا",
              "lemma": "أهدى",
              "features": "perf.3ms+3fs",
              "root": "ه د ي",
              "pos": "verb",
              "gloss": "to give as a gift"
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
              "surface": "عَمِّيْ",
              "lemma": "عم",
              "features": "nom+1s",
              "root": "ع م م",
              "pos": "noun",
              "gloss": "paternal uncle"
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
              "surface": "رَجَعَ",
              "lemma": "رجع",
              "features": "perf.3ms",
              "root": "ر ج ع",
              "pos": "verb",
              "gloss": "to return"
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
              "surface": "السَّفَرِ",
              "lemma": "سافر",
              "features": "def.gen",
              "root": "س ف ر",
              "pos": "noun",
              "gloss": "the trip, journey"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنْ أَهْدَىٰ سَاعَةَ سَعِيْدٍ إِلَيْهِ؟",
          "options": [
            "أَخُوْهُ الْكَبِيْرُ",
            "عَمُّهُ",
            "وَالِدُهُ"
          ],
          "answer": 0,
          "qEn": "Who gave Sa'id his watch?",
          "optionsEn": [
            "His older brother",
            "His uncle",
            "His father"
          ]
        },
        {
          "q": "بِكَمْ اشْتَرَى أَخُو سَعِيْدٍ السَّاعَةَ؟",
          "options": [
            "بِثَلَاثِيْنَ رُبِّيَّةً",
            "بِعِشْرِيْنَ رُبِّيَّةً",
            "بِعَشْرِ رُبِّيَّاتٍ"
          ],
          "answer": 0,
          "qEn": "For how much did Sa'id's brother buy the watch?",
          "optionsEn": [
            "Thirty rupees",
            "Twenty rupees",
            "Ten rupees"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "en": "Sa'id reflects that a watch is necessary nowadays, letting a student know the school schedule and a Muslim know the prayer times.",
      "sentences": [
        {
          "id": "qr1-11-027",
          "page": 61,
          "ar": "سَعِيْدٌ: إِنَّ السَّاعَةَ لَازِمَةٌ فِيْ هٰذَا الزَّمَانِ.",
          "en": "Sa'id: A watch is necessary these days --",
          "tokens": [
            {
              "surface": "سَعِيْدٌ",
              "lemma": "سعيد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            },
            {
              "surface": "إِنَّ",
              "lemma": "إن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "indeed; that"
            },
            {
              "surface": "السَّاعَةَ",
              "lemma": "ساعة",
              "features": "def.acc",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "لَازِمَةٌ",
              "lemma": "لازم",
              "features": "indef.nom",
              "root": "ل ز م",
              "pos": "adj",
              "gloss": "necessary"
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
              "features": "gen",
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
              "gloss": "time, era"
            }
          ]
        },
        {
          "id": "qr1-11-028",
          "page": 61,
          "ar": "فَبِالسَّاعَةِ يَعْرِفُ التِّلْمِيْذُ مِيْعَادَ الْمَدْرَسَةِ.",
          "en": "for by the watch the student knows the school schedule,",
          "tokens": [
            {
              "surface": "فَبِالسَّاعَةِ",
              "lemma": "ساعة",
              "features": "conj+prep+def.gen",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "يَعْرِفُ",
              "lemma": "عرف",
              "features": "impf.3ms",
              "root": "ع ر ف",
              "pos": "verb",
              "gloss": "to know"
            },
            {
              "surface": "التِّلْمِيْذُ",
              "lemma": "تلميذ",
              "features": "def.nom",
              "root": "ت ل م ذ",
              "pos": "noun",
              "gloss": "student, pupil"
            },
            {
              "surface": "مِيْعَادَ",
              "lemma": "ميعاد",
              "features": "acc.constr",
              "root": "و ع د",
              "pos": "noun",
              "gloss": "appointed time, schedule"
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
          "id": "qr1-11-029",
          "page": 61,
          "ar": "وَبِالسَّاعَةِ يَعْرِفُ الْمُسْلِمُ أَوْقَاتَ الْجَمَاعَةِ وَالصَّلَوَاتِ.",
          "en": "and by the watch the Muslim knows the times for congregational and other prayers.",
          "tokens": [
            {
              "surface": "وَبِالسَّاعَةِ",
              "lemma": "ساعة",
              "features": "conj+prep+def.gen",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "يَعْرِفُ",
              "lemma": "عرف",
              "features": "impf.3ms",
              "root": "ع ر ف",
              "pos": "verb",
              "gloss": "to know"
            },
            {
              "surface": "الْمُسْلِمُ",
              "lemma": "مسلم",
              "features": "def.nom",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "Muslim"
            },
            {
              "surface": "أَوْقَاتَ",
              "lemma": "أوقات",
              "features": "acc.constr",
              "root": "و ق ت",
              "pos": "noun",
              "gloss": "times"
            },
            {
              "surface": "الْجَمَاعَةِ",
              "lemma": "جماعة",
              "features": "def.gen",
              "root": "ج م ع",
              "pos": "noun",
              "gloss": "congregation, group"
            },
            {
              "surface": "وَالصَّلَوَاتِ",
              "lemma": "صلاة",
              "features": "conj+pl.def.gen",
              "root": "ص ل و",
              "pos": "noun",
              "gloss": "prayer"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَيْفَ يَعْرِفُ الْمُسْلِمُ أَوْقَاتَ الصَّلَوَاتِ حَسَبَ كَلَامِ سَعِيْدٍ؟",
          "options": [
            "بِالسَّاعَةِ",
            "بِمَوْقِعِ الشَّمْسِ",
            "بِسُؤَالِ النَّاسِ"
          ],
          "answer": 0,
          "qEn": "According to Sa'id, how does a Muslim know the prayer times?",
          "optionsEn": [
            "By the watch",
            "By the position of the sun",
            "By asking people"
          ]
        }
      ]
    },
    {
      "id": "p7",
      "en": "Harith admits he used to be late for school and sometimes missed the congregational prayer before he had a watch, but hasn't since.",
      "sentences": [
        {
          "id": "qr1-11-030",
          "page": 62,
          "ar": "حَارِثٌ: نَعَمْ! أَنَا كُنْتُ أَتَأَخَّرُ عَنْ مِيْعَادِ الْمَدْرَسَةِ فِيْ بَعْضِ الْأَيَّامِ.",
          "en": "Harith: True! I used to be late for school some days,",
          "tokens": [
            {
              "surface": "حَارِثٌ",
              "lemma": "حارث",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥārith (a name)"
            },
            {
              "surface": "نَعَمْ",
              "lemma": "نعم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "yes"
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
              "surface": "كُنْتُ",
              "lemma": "كان",
              "features": "perf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "أَتَأَخَّرُ",
              "lemma": "تأخر",
              "features": "impf.1s",
              "root": "أ خ ر",
              "pos": "verb",
              "gloss": "to be late, fall behind"
            },
            {
              "surface": "عَنْ",
              "lemma": "عن",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "from, away from; about"
            },
            {
              "surface": "مِيْعَادِ",
              "lemma": "ميعاد",
              "features": "gen.constr",
              "root": "و ع د",
              "pos": "noun",
              "gloss": "appointed time, schedule"
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
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "بَعْضِ",
              "lemma": "بعض",
              "features": "gen.constr",
              "root": "ب ع ض",
              "pos": "noun",
              "gloss": "some, part of"
            },
            {
              "surface": "الْأَيَّامِ",
              "lemma": "يوم",
              "features": "pl.def.gen",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            }
          ]
        },
        {
          "id": "qr1-11-031",
          "page": 62,
          "ar": "وَتَفُوْتُنِيْ الْجَمَاعَةُ أَحْيَانًا.",
          "en": "and sometimes I'd miss the congregational prayer,",
          "tokens": [
            {
              "surface": "وَتَفُوْتُنِيْ",
              "lemma": "فات",
              "features": "conj+impf.3fs+1s",
              "root": "ف و ت",
              "pos": "verb",
              "gloss": "to elapse, pass by; to be missed by (someone)"
            },
            {
              "surface": "الْجَمَاعَةُ",
              "lemma": "جماعة",
              "features": "def.nom",
              "root": "ج م ع",
              "pos": "noun",
              "gloss": "congregation, group"
            },
            {
              "surface": "أَحْيَانًا",
              "lemma": "أحيانا",
              "features": "acc",
              "root": "ح ي ن",
              "pos": "adv",
              "gloss": "sometimes"
            }
          ]
        },
        {
          "id": "qr1-11-032",
          "page": 62,
          "ar": "وَلٰكِنْ مُنْذُ اشْتَرَيْتُهَا لَمْ أَتَأَخَّرْ عَنِ الْمَدْرَسَةِ.",
          "en": "but ever since I bought it, I haven't been late for school,",
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
              "surface": "مُنْذُ",
              "lemma": "منذ",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "since"
            },
            {
              "surface": "اشْتَرَيْتُهَا",
              "lemma": "اشترى",
              "features": "perf.1s+3fs",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            },
            {
              "surface": "لَمْ",
              "lemma": "لم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not (with jussive, past negation)"
            },
            {
              "surface": "أَتَأَخَّرْ",
              "lemma": "تأخر",
              "features": "impf.1s",
              "root": "أ خ ر",
              "pos": "verb",
              "gloss": "to be late, fall behind"
            },
            {
              "surface": "عَنِ",
              "lemma": "عن",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "from, away from; about"
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
          "id": "qr1-11-033",
          "page": 62,
          "ar": "وَمَا فَاتَتْنِيْ جَمَاعَةٌ.",
          "en": "and I haven't missed a congregational prayer.",
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
              "surface": "فَاتَتْنِيْ",
              "lemma": "فات",
              "features": "perf.3fs+1s",
              "root": "ف و ت",
              "pos": "verb",
              "gloss": "to elapse, pass by; to be missed by (someone)"
            },
            {
              "surface": "جَمَاعَةٌ",
              "lemma": "جماعة",
              "features": "indef.nom",
              "root": "ج م ع",
              "pos": "noun",
              "gloss": "congregation, group"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا تَغَيَّرَ عِنْدَ حَارِثٍ بَعْدَ أَنِ اشْتَرَى السَّاعَةَ؟",
          "options": [
            "لَمْ يَتَأَخَّرْ عَنِ الْمَدْرَسَةِ وَلَا فَاتَتْهُ جَمَاعَةٌ",
            "صَارَ أَغْنَى",
            "تَرَكَ الْمَدْرَسَةَ"
          ],
          "answer": 0,
          "qEn": "What changed for Harith after he bought the watch?",
          "optionsEn": [
            "He was no longer late for school, and didn't miss the congregational prayer",
            "He became richer",
            "He left school"
          ]
        }
      ]
    },
    {
      "id": "p8",
      "en": "Sa'id excuses himself -- he is traveling today and the train leaves at ten to twelve.",
      "sentences": [
        {
          "id": "qr1-11-034",
          "page": 62,
          "ar": "سَعِيْدٌ: أَسْتَأْذِنُكَ لِأَنِّيْ مُسَافِرٌ الْيَوْمَ.",
          "en": "Sa'id: Excuse me, for I am traveling today,",
          "tokens": [
            {
              "surface": "سَعِيْدٌ",
              "lemma": "سعيد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            },
            {
              "surface": "أَسْتَأْذِنُكَ",
              "lemma": "استأذن",
              "features": "impf.1s+2ms",
              "root": "أ ذ ن",
              "pos": "verb",
              "gloss": "to ask permission, excuse oneself"
            },
            {
              "surface": "لِأَنِّيْ",
              "lemma": "أن",
              "features": "prep+part+1s",
              "root": "",
              "pos": "part",
              "gloss": "because"
            },
            {
              "surface": "مُسَافِرٌ",
              "lemma": "سافر",
              "features": "indef.nom",
              "root": "س ف ر",
              "pos": "adj",
              "gloss": "traveling"
            },
            {
              "surface": "الْيَوْمَ",
              "lemma": "اليوم",
              "features": "acc",
              "root": "ي و م",
              "pos": "adv",
              "gloss": "today"
            }
          ]
        },
        {
          "id": "qr1-11-035",
          "page": 62,
          "ar": "وَمِيْعَادُ الْقِطَارِ السَّاعَةُ اثْنَتَا عَشْرَةَ إِلَّا عَشْرًا.",
          "en": "and the train's schedule is ten minutes to twelve.",
          "tokens": [
            {
              "surface": "وَمِيْعَادُ",
              "lemma": "ميعاد",
              "features": "conj+nom.constr",
              "root": "و ع د",
              "pos": "noun",
              "gloss": "appointed time, schedule"
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
              "surface": "السَّاعَةُ",
              "lemma": "ساعة",
              "features": "def.nom",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour; watch, clock"
            },
            {
              "surface": "اثْنَتَا",
              "lemma": "اثنتا",
              "features": "nom",
              "root": "ث ن ي",
              "pos": "num",
              "gloss": "two (component of \"twelve\", fem.)"
            },
            {
              "surface": "عَشْرَةَ",
              "lemma": "عشرة",
              "features": "acc",
              "root": "ع ش ر",
              "pos": "num",
              "gloss": "ten"
            },
            {
              "surface": "إِلَّا",
              "lemma": "إلا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "except; minus (in telling time)"
            },
            {
              "surface": "عَشْرًا",
              "lemma": "عشرة",
              "features": "indef.acc",
              "root": "ع ش ر",
              "pos": "num",
              "gloss": "ten"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا اسْتَأْذَنَ سَعِيْدٌ حَارِثاً؟",
          "options": [
            "لِأَنَّهُ مُسَافِرٌ الْيَوْمَ",
            "لِأَنَّهُ مَرِيْضٌ",
            "لِأَنَّ وَالِدَهُ يَنْتَظِرُهُ"
          ],
          "answer": 0,
          "qEn": "Why did Sa'id excuse himself from Harith?",
          "optionsEn": [
            "Because he is traveling today",
            "Because he is sick",
            "Because his father is waiting for him"
          ]
        }
      ]
    },
    {
      "id": "p9",
      "en": "Harith says there's plenty of time since the station is near, but Sa'id still has market errands to finish.",
      "sentences": [
        {
          "id": "qr1-11-036",
          "page": 62,
          "ar": "حَارِثٌ: الْوَقْتُ وَاسِعٌ فَلَيْسَ الآنَ إِلَّا عَشْرٌ وَنِصْفٌ.",
          "en": "Harith: There's plenty of time -- it's only half past ten now,",
          "tokens": [
            {
              "surface": "حَارِثٌ",
              "lemma": "حارث",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥārith (a name)"
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
              "surface": "وَاسِعٌ",
              "lemma": "واسع",
              "features": "indef.nom",
              "root": "و س ع",
              "pos": "adj",
              "gloss": "spacious, ample, plenty"
            },
            {
              "surface": "فَلَيْسَ",
              "lemma": "ليس",
              "features": "conj+perf.3ms",
              "root": "ل ي س",
              "pos": "verb",
              "gloss": "to not be"
            },
            {
              "surface": "الآنَ",
              "lemma": "الآن",
              "features": "adv",
              "root": "",
              "pos": "adv",
              "gloss": "now"
            },
            {
              "surface": "إِلَّا",
              "lemma": "إلا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "except; minus (in telling time)"
            },
            {
              "surface": "عَشْرٌ",
              "lemma": "عشرة",
              "features": "indef.nom",
              "root": "ع ش ر",
              "pos": "num",
              "gloss": "ten"
            },
            {
              "surface": "وَنِصْفٌ",
              "lemma": "نصف",
              "features": "conj+indef.nom",
              "root": "ن ص ف",
              "pos": "noun",
              "gloss": "half"
            }
          ]
        },
        {
          "id": "qr1-11-037",
          "page": 62,
          "ar": "وَالْمَحَطَّةُ قَرِيْبَةٌ مِنْ بَيْتِكَ.",
          "en": "and the station is near your house.",
          "tokens": [
            {
              "surface": "وَالْمَحَطَّةُ",
              "lemma": "محطة",
              "features": "conj+def.nom",
              "root": "ح ط ط",
              "pos": "noun",
              "gloss": "station"
            },
            {
              "surface": "قَرِيْبَةٌ",
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
              "surface": "بَيْتِكَ",
              "lemma": "بيت",
              "features": "gen+2ms",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            }
          ]
        },
        {
          "id": "qr1-11-038",
          "page": 62,
          "ar": "سَعِيْدٌ: نَعَمْ! الْوَقْتُ وَاسِعٌ.",
          "en": "Sa'id: True, there's plenty of time,",
          "tokens": [
            {
              "surface": "سَعِيْدٌ",
              "lemma": "سعيد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            },
            {
              "surface": "نَعَمْ",
              "lemma": "نعم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "yes"
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
              "surface": "وَاسِعٌ",
              "lemma": "واسع",
              "features": "indef.nom",
              "root": "و س ع",
              "pos": "adj",
              "gloss": "spacious, ample, plenty"
            }
          ]
        },
        {
          "id": "qr1-11-039",
          "page": 62,
          "ar": "وَلٰكِنْ لِيْ شُغْلٌ فِي السُّوْقِ.",
          "en": "but I have business in the market,",
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
              "surface": "لِيْ",
              "lemma": "ل",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "for, to; belonging to"
            },
            {
              "surface": "شُغْلٌ",
              "lemma": "شغل",
              "features": "indef.nom",
              "root": "ش غ ل",
              "pos": "noun",
              "gloss": "work, business, occupation"
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
              "surface": "السُّوْقِ",
              "lemma": "سوق",
              "features": "def.gen",
              "root": "س و ق",
              "pos": "noun",
              "gloss": "market"
            }
          ]
        },
        {
          "id": "qr1-11-040",
          "page": 62,
          "ar": "وَلَمْ أَرْبِطِ الْحَوَائِجَ إِلَىٰ الآنَ.",
          "en": "and I haven't tied up my errands yet.",
          "tokens": [
            {
              "surface": "وَلَمْ",
              "lemma": "لم",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not (with jussive, past negation)"
            },
            {
              "surface": "أَرْبِطِ",
              "lemma": "ربط",
              "features": "impf.1s",
              "root": "ر ب ط",
              "pos": "verb",
              "gloss": "to tie up, settle (an errand)"
            },
            {
              "surface": "الْحَوَائِجَ",
              "lemma": "حاجة",
              "features": "pl.def.acc",
              "root": "ح و ج",
              "pos": "noun",
              "gloss": "need, errand"
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
              "surface": "الآنَ",
              "lemma": "الآن",
              "features": "adv",
              "root": "",
              "pos": "adv",
              "gloss": "now"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا لَمْ يَطْمَئِنَّ سَعِيْدٌ رَغْمَ سَعَةِ الْوَقْتِ؟",
          "options": [
            "لِأَنَّ لَهُ شُغْلاً فِي السُّوْقِ لَمْ يَنْتَهِ مِنْهُ",
            "لِأَنَّهُ نَسِيَ حَقِيْبَتَهُ",
            "لِأَنَّ السَّاعَةَ مُتَأَخِّرَةٌ"
          ],
          "answer": 0,
          "qEn": "Why wasn't Sa'id at ease despite there being plenty of time?",
          "optionsEn": [
            "Because he had unfinished business in the market",
            "Because he forgot his bag",
            "Because the watch was running late"
          ]
        }
      ]
    },
    {
      "id": "p10",
      "en": "The two part with the Islamic greeting of peace.",
      "sentences": [
        {
          "id": "qr1-11-041",
          "page": 62,
          "ar": "حَارِثٌ: عَلَىٰ بَرَكَةِ اللهِ، السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ.",
          "en": "Harith: Go with Allah's blessing -- peace be upon you, and Allah's mercy.",
          "tokens": [
            {
              "surface": "حَارِثٌ",
              "lemma": "حارث",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ḥārith (a name)"
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
              "surface": "بَرَكَةِ",
              "lemma": "بركة",
              "features": "gen.constr",
              "root": "ب ر ك",
              "pos": "noun",
              "gloss": "blessing"
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
              "surface": "السَّلَامُ",
              "lemma": "سلام",
              "features": "def.nom",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "peace"
            },
            {
              "surface": "عَلَيْكُمْ",
              "lemma": "على",
              "features": "prep+2mp",
              "root": "",
              "pos": "prep",
              "gloss": "upon, on"
            },
            {
              "surface": "وَرَحْمَةُ",
              "lemma": "رحمة",
              "features": "conj+nom.constr",
              "root": "ر ح م",
              "pos": "noun",
              "gloss": "mercy"
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
          "id": "qr1-11-042",
          "page": 62,
          "ar": "سَعِيْدٌ: وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ.",
          "en": "Sa'id: And upon you be peace, and Allah's mercy and blessings.",
          "tokens": [
            {
              "surface": "سَعِيْدٌ",
              "lemma": "سعيد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            },
            {
              "surface": "وَعَلَيْكُمُ",
              "lemma": "على",
              "features": "conj+prep+2mp",
              "root": "",
              "pos": "prep",
              "gloss": "upon, on"
            },
            {
              "surface": "السَّلَامُ",
              "lemma": "سلام",
              "features": "def.nom",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "peace"
            },
            {
              "surface": "وَرَحْمَةُ",
              "lemma": "رحمة",
              "features": "conj+nom.constr",
              "root": "ر ح م",
              "pos": "noun",
              "gloss": "mercy"
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
              "surface": "وَبَرَكَاتُهُ",
              "lemma": "بركة",
              "features": "conj+pl.nom+3ms",
              "root": "ب ر ك",
              "pos": "noun",
              "gloss": "blessing"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا وَدَّعَ حَارِثٌ وَسَعِيْدٌ بَعْضَهُمَا؟",
          "options": [
            "بِالسَّلَامِ",
            "بِالْمُصَافَحَةِ فَقَطْ",
            "بِالصَّمْتِ"
          ],
          "answer": 0,
          "qEn": "How did Harith and Sa'id part from one another?",
          "optionsEn": [
            "With the Islamic greeting of peace",
            "With just a handshake",
            "In silence"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "حَارِثٌ: بَلَىٰ! وَلٰكِنَّ سَاعَتِيْ",
        "post": "",
        "en": "Harith: Of course! But my watch has stopped.",
        "options": [
          "وَاقِفَةٌ",
          "وَاقِفَةً",
          "وَاقِفَةٍ",
          "وَاقِفُوْنَ"
        ],
        "answer": 0,
        "rationales": [
          "nominative — predicate of the implied subject \"my watch.\"",
          "accusative — wrong case.",
          "genitive — wrong case.",
          "plural — wrong number for a feminine singular noun."
        ]
      },
      {
        "type": "cloze",
        "pre": "سَعِيْدٌ: سَاعَتِيْ تَتَقَدَّمُ",
        "post": "فِيْ أَرْبَعٍ وَعِشْرِيْنَ سَاعَةً",
        "en": "Sa'id: My watch runs two minutes fast in twenty-four hours.",
        "options": [
          "دَقِيْقَتَيْنِ",
          "دَقِيْقَتَانِ",
          "دَقِيْقَةً",
          "دَقَائِقَ"
        ],
        "answer": 0,
        "rationales": [
          "accusative dual — object of تَتَقَدَّمُ, \"two minutes.\"",
          "nominative dual — wrong case.",
          "singular — wrong number.",
          "plural — wrong number; exactly two calls for the dual."
        ]
      },
      {
        "type": "cloze",
        "pre": "حَارِثٌ: إِنَّ",
        "post": "ثَمِيْنَةٌ وَجَمِيْلَةٌ",
        "en": "Harith: Your watch is precious and beautiful.",
        "options": [
          "سَاعَتَكَ",
          "سَاعَتُكَ",
          "سَاعَتِكَ",
          "سَاعَاتُكَ"
        ],
        "answer": 0,
        "rationales": [
          "accusative + 2ms — ism inna.",
          "nominative — wrong case for ism inna.",
          "genitive — wrong case.",
          "plural — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "سَعِيْدٌ: أَهْدَاهَا إِلَيَّ",
        "post": "الْكَبِيْرُ",
        "en": "Sa'id: My older brother gave it to me as a gift.",
        "options": [
          "أَخِي",
          "أَخِيْ",
          "أَخَاهُ",
          "إِخْوَتِيْ"
        ],
        "answer": 0,
        "rationales": [
          "nominative + 1s — subject of أَهْدَاهَا, \"my brother.\"",
          "genitive + 1s — wrong case.",
          "accusative — wrong case, and wrong person.",
          "plural — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "حَارِثٌ: سَاعَتِيْ أَرْخَصُ مِنْهَا، فَإِنَّهَا بِعِشْرِيْنَ",
        "post": "",
        "en": "Harith: My watch is cheaper than it -- it's twenty rupees.",
        "options": [
          "رُبِّيَّةً",
          "رُبِّيَّةٌ",
          "رُبِّيَّةٍ",
          "رُبِّيَّاتٌ"
        ],
        "answer": 0,
        "rationales": [
          "accusative — tamyīz after the number.",
          "nominative — wrong case.",
          "genitive — wrong case.",
          "plural — wrong number; the specifier stays singular."
        ]
      },
      {
        "type": "cloze",
        "pre": "سَعِيْدٌ: إِنَّ",
        "post": "لَازِمَةٌ فِيْ هٰذَا الزَّمَانِ",
        "en": "Sa'id: A watch is necessary these days.",
        "options": [
          "السَّاعَةَ",
          "السَّاعَةُ",
          "السَّاعَةِ",
          "سَاعَاتٍ"
        ],
        "answer": 0,
        "rationales": [
          "accusative — ism inna.",
          "nominative — wrong case for ism inna.",
          "genitive — wrong case.",
          "indefinite plural — wrong definiteness and number."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَبِالسَّاعَةِ يَعْرِفُ",
        "post": "مِيْعَادَ الْمَدْرَسَةِ",
        "en": "For by the watch the student knows the school schedule.",
        "options": [
          "التِّلْمِيْذُ",
          "التِّلْمِيْذَ",
          "التِّلْمِيْذِ",
          "التَّلَامِيْذَ"
        ],
        "answer": 0,
        "rationales": [
          "nominative — subject of يَعْرِفُ.",
          "accusative — wrong case.",
          "genitive — wrong case.",
          "plural — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "حَارِثٌ: نَعَمْ! أَنَا كُنْتُ أَتَأَخَّرُ عَنْ مِيْعَادِ الْمَدْرَسَةِ فِيْ بَعْضِ",
        "post": "",
        "en": "Harith: True! I used to be late for school some days.",
        "options": [
          "الْأَيَّامِ",
          "الْأَيَّامَ",
          "أَيَّامٌ",
          "يَوْمٍ"
        ],
        "answer": 0,
        "rationales": [
          "genitive plural — after the construct بَعْضِ.",
          "accusative — wrong case.",
          "indefinite nominative — wrong case and definiteness.",
          "singular — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "سَعِيْدٌ: أَسْتَأْذِنُكَ لِأَنِّيْ",
        "post": "الْيَوْمَ",
        "en": "Sa'id: Excuse me, for I am traveling today.",
        "options": [
          "مُسَافِرٌ",
          "مُسَافِراً",
          "مُسَافِرٍ",
          "مُسَافِرُوْنَ"
        ],
        "answer": 0,
        "rationales": [
          "nominative — predicate of the implied subject \"I.\"",
          "accusative — wrong case.",
          "genitive — wrong case.",
          "plural — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "حَارِثٌ: الْوَقْتُ وَاسِعٌ فَلَيْسَ الآنَ إِلَّا",
        "post": "وَنِصْفٌ",
        "en": "Harith: There's plenty of time -- it's only half past ten now.",
        "options": [
          "عَشْرٌ",
          "عَشْرَةٌ",
          "عَشْراً",
          "عُشْرٌ"
        ],
        "answer": 0,
        "rationales": [
          "nominative — predicate after لَيْسَ إِلَّا, the feminine-counting form \"ten\" (o'clock).",
          "wrong form — عَشَرَةٌ counts masculine nouns, not the hour.",
          "accusative — wrong case.",
          "a different word (\"a tenth\") entirely."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "نَسِيْتُ أَنْ أَمْلَأَهَا الْبَارِحَةَ",
        "pre": "",
        "post": "أَنْ أَمْلَأَهَا الْبَارِحَةَ",
        "targetPerson": "هُوَ",
        "targetEn": "he",
        "options": [
          "نَسِيَ",
          "نَسِيْتُ",
          "نَسِيَتْ",
          "نَسِيْنَا"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular perfect — he forgot.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "غَلَبَتْنِيْ عَيْنِيْ الْبَارِحَةَ",
        "pre": "",
        "post": "عَيْنِيْ الْبَارِحَةَ",
        "targetPerson": "هُمْ",
        "targetEn": "they (m.)",
        "options": [
          "غَلَبَتْهُمْ",
          "غَلَبَتْنِيْ",
          "غَلَبَتْكَ",
          "غَلَبَتْنَا"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular + 3mp object — sleep overcame them.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "أَنَا أَضْبِطُهَا بِسَاعَتِكَ",
        "pre": "",
        "post": "بِسَاعَتِكَ",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "تَضْبِطُهَا",
          "أَضْبِطُهَا",
          "يَضْبِطُهَا",
          "نَضْبِطُهَا"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular — she sets it.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "أَخْبَرَنِيْ أَنَّهُ اشْتَرَاهَا بِثَلَاثِيْنَ رُبِّيَّةً",
        "pre": "",
        "post": "أَنَّهُ اشْتَرَاهَا بِثَلَاثِيْنَ رُبِّيَّةً",
        "targetPerson": "أَنْتَ",
        "targetEn": "you (m. sg.)",
        "options": [
          "أَخْبَرْتَنِيْ",
          "أَخْبَرَنِيْ",
          "أَخْبَرَتْنِيْ",
          "أَخْبَرُوْنِيْ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. singular perfect — you told me.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "أَهْدَاهَا إِلَيَّ عَمِّيْ",
        "pre": "",
        "post": "إِلَيَّ عَمِّيْ",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "أَهْدَيْتُهَا",
          "أَهْدَاهَا",
          "أَهْدَتْهَا",
          "أَهْدَيْنَاهَا"
        ],
        "answer": 0,
        "rationales": [
          "1st singular perfect — I gave it as a gift.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "يَعْرِفُ التِّلْمِيْذُ مِيْعَادَ الْمَدْرَسَةِ",
        "pre": "",
        "post": "مِيْعَادَ الْمَدْرَسَةِ",
        "targetPerson": "التَّلَامِيْذُ",
        "targetEn": "the students",
        "options": [
          "يَعْرِفُوْنَ",
          "يَعْرِفُ",
          "تَعْرِفُ",
          "يَعْرِفَانِ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. plural — they (the students) know.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "أَنَا كُنْتُ أَتَأَخَّرُ عَنْ مِيْعَادِ الْمَدْرَسَةِ",
        "pre": "",
        "post": "عَنْ مِيْعَادِ الْمَدْرَسَةِ",
        "targetPerson": "نَحْنُ",
        "targetEn": "we",
        "options": [
          "كُنَّا نَتَأَخَّرُ",
          "كُنْتُ أَتَأَخَّرُ",
          "كَانَ يَتَأَخَّرُ",
          "كُنَّ يَتَأَخَّرْنَ"
        ],
        "answer": 0,
        "rationales": [
          "1st plural — we used to be late.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "لَمْ أَرْبِطِ الْحَوَائِجَ إِلَىٰ الآنَ",
        "pre": "",
        "post": "الْحَوَائِجَ إِلَىٰ الآنَ",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "لَمْ تَرْبِطِ",
          "لَمْ أَرْبِطِ",
          "لَمْ يَرْبِطِ",
          "لَمْ نَرْبِطِ"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular jussive — she hasn't tied up.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

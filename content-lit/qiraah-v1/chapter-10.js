// القراءة الراشدة, volume one, chapter ten -- مسابقة.
//
// Follows the shape of chapter-01.js/chapter-02.js -- see ../CHAPTER-FORMAT.md
// for the full specification. Hand-authored directly from the scanned pages
// (qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed pages 57-59); there
// is no JSON intermediate (see PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md --
// the pipeline no longer emits JSON).
//
// This is a first-person narrative (like chapter-01.js/chapter-08.js), with
// several turns of embedded direct speech from the teacher woven through it
// rather than a standalone dialogue -- no new structural handling was needed
// for that; it's the same قَالَ + quoted-speech pattern used throughout the
// book. No Qur'anic quotation appears here either, so the still-unexercised
// QASAS_AGENT_BRIEF gap around ﴿ ﴾-quoted Qur'an text remains unresolved.
//
// Two vocabulary notes:
//  - المُصَلِّيْ ("runner-up," the racer whose head finishes level with the
//    winner's mount) is a specialized horse-racing term repurposed here for
//    a foot race, unrelated to the far more common مُصَلٍّ "one who prays"
//    (from the same root ص ل و but a different classical formation). Since a
//    reader could easily assume the prayer sense, this chapter keys it as
//    "مصلي-سباق" rather than a bare "مصلي", pre-empting the kind of
//    collision that chapter-05.js's ذهب/ذهب-معدن and chapter-08.js's
//    علم/علم-راية resolved reactively. المُجَلِّيْ ("winner, front-runner")
//    is the paired racing term and didn't need the same treatment -- it has
//    no competing common meaning to collide with.
//  - The root س ب ق surfaces four distinct, orthographically-unrelated
//    entries in this chapter's local dict, all ordinary separate entries
//    (same pattern as chapter-09.js's علم/علّم -- no homograph suffix
//    needed since none of them share spelling): سبق (Form I, "to precede,
//    outrun" -- also reused via pos_override for the participle السَّابِقُ,
//    "the one ahead"), سابق (Form III, "to race against"), تسابق (Form VI,
//    "to race one another"), and مسابقة (the verbal noun, "competition" --
//    this chapter's title word).
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch10",
  "number": 10,
  "title": {
    "ar": "مُسَابَقَةٌ",
    "en": "A Competition"
  },
  "pages": [
    57,
    58,
    59
  ],
  "register": "first_person_singular_narrative",
  "newWords": [
    "مسابقة",
    "أقران",
    "أكفاء",
    "قصبة",
    "ميدان",
    "هتف",
    "مرحى",
    "سبق",
    "مجلي",
    "مصلي-سباق",
    "أبطأ",
    "خطب"
  ],
  "lemmas": {
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
    },
    "أمس": {
      "root": "—",
      "pos": "adv",
      "gloss": "yesterday",
      "content": true
    },
    "مسابقة": {
      "root": "س ب ق",
      "pos": "noun",
      "gloss": "competition, race",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "جري": {
      "root": "ج ر ي",
      "pos": "noun",
      "gloss": "running",
      "content": true
    },
    "مدرسة": {
      "root": "د ر س",
      "pos": "noun",
      "gloss": "school",
      "content": true
    },
    "أولا": {
      "root": "أ و ل",
      "pos": "adv",
      "gloss": "first, firstly",
      "content": true
    },
    "اختار": {
      "root": "خ ي ر",
      "pos": "verb",
      "gloss": "to choose, select",
      "content": true
    },
    "معلم": {
      "root": "ع ل م",
      "pos": "noun",
      "gloss": "teacher",
      "content": true
    },
    "رياضة": {
      "root": "ر و ض",
      "pos": "noun",
      "gloss": "sports, physical training",
      "content": true
    },
    "أربعة": {
      "root": "أ ر ب ع",
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
    "طالب": {
      "root": "ط ل ب",
      "pos": "noun",
      "gloss": "student",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "جميع": {
      "root": "ج م ع",
      "pos": "noun",
      "gloss": "all, entirety",
      "content": true
    },
    "صف": {
      "root": "ص ف ف",
      "pos": "noun",
      "gloss": "row, line; class",
      "content": true
    },
    "هو": {
      "root": "—",
      "pos": "noun",
      "gloss": "he, it",
      "content": false
    },
    "أقران": {
      "root": "ق ر ن",
      "pos": "noun",
      "gloss": "peers, equals",
      "content": true,
      "book_note": "الأَقْرَانُ جَمْعُ الْقِرْنِ، لِلْإِنْسَانِ: مِثْلُهُ فِيْ الشَّجَاعَةِ وَالشِّدَّةِ وَالْعِلْمِ وَالْقِتَالِ وَغَيْرِ ذٰلِكَ (peers: those equal to a person in courage, strength, knowledge, fighting skill, and so on)"
    },
    "أكفاء": {
      "root": "ك ف أ",
      "pos": "noun",
      "gloss": "equals, capable ones",
      "content": true,
      "book_note": "الأَكْفَاءُ جَمْعُ الْكُفْءِ: الْمُمَاثِلُ وَالْقَوِيُّ الْقَادِرُ عَلَىٰ تَصْرِيْفِ الْعَمَلِ (equals: one who is comparable, and strong/capable enough to manage a task)"
    },
    "أوقف": {
      "root": "و ق ف",
      "pos": "verb",
      "gloss": "to make stand, station, line up",
      "content": true
    },
    "خلف": {
      "root": "خ ل ف",
      "pos": "prep",
      "gloss": "behind",
      "content": false
    },
    "كل": {
      "root": "ك ل ل",
      "pos": "noun",
      "gloss": "each, every, all",
      "content": true
    },
    "ثلاثة": {
      "root": "ث ل ث",
      "pos": "num",
      "gloss": "three",
      "content": true
    },
    "وقف": {
      "root": "و ق ف",
      "pos": "verb",
      "gloss": "to stand, stop",
      "content": true
    },
    "أستاذ": {
      "root": "—",
      "pos": "noun",
      "gloss": "teacher, professor",
      "content": true
    },
    "جانب": {
      "root": "ج ن ب",
      "pos": "noun",
      "gloss": "side",
      "content": true
    },
    "هذه": {
      "root": "—",
      "pos": "noun",
      "gloss": "this (f.)",
      "content": false
    },
    "قدم": {
      "root": "ق د م",
      "pos": "verb",
      "gloss": "to bring forward, present",
      "content": true
    },
    "محمد": {
      "root": "—",
      "pos": "proper",
      "gloss": "Muḥammad (a name)",
      "content": false
    },
    "إبراهيم": {
      "root": "—",
      "pos": "proper",
      "gloss": "Ibrāhīm (a name)",
      "content": false
    },
    "سعيد": {
      "root": "—",
      "pos": "proper",
      "gloss": "Saʿīd (a name)",
      "content": false
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "قام": {
      "root": "ق و م",
      "pos": "verb",
      "gloss": "to stand, rise, get up",
      "content": true
    },
    "واحد": {
      "root": "و ح د",
      "pos": "adj",
      "gloss": "one, single",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, on",
      "content": false
    },
    "خط": {
      "root": "خ ط ط",
      "pos": "noun",
      "gloss": "line",
      "content": true
    },
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "not; no",
      "content": false
    },
    "تقدم": {
      "root": "ق د م",
      "pos": "verb",
      "gloss": "to advance, come forward",
      "content": true
    },
    "أحد": {
      "root": "أ ح د",
      "pos": "noun",
      "gloss": "one, someone, anyone",
      "content": true
    },
    "قليلا": {
      "root": "ق ل ل",
      "pos": "adv",
      "gloss": "a little, slightly",
      "content": true
    },
    "أخر": {
      "root": "أ خ ر",
      "pos": "verb",
      "gloss": "to delay, push back, hold back",
      "content": true
    },
    "جعل": {
      "root": "ج ع ل",
      "pos": "verb",
      "gloss": "to make, place, put",
      "content": true
    },
    "أنا": {
      "root": "—",
      "pos": "noun",
      "gloss": "I",
      "content": false
    },
    "عد": {
      "root": "ع د د",
      "pos": "verb",
      "gloss": "to count",
      "content": true
    },
    "ل": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to",
      "content": false
    },
    "إذا": {
      "root": "—",
      "pos": "part",
      "gloss": "if, when",
      "content": false
    },
    "سوى": {
      "root": "س و ي",
      "pos": "verb",
      "gloss": "to make even, straighten",
      "content": true
    },
    "اثنان": {
      "root": "ث ن ي",
      "pos": "num",
      "gloss": "two",
      "content": true
    },
    "استعد": {
      "root": "ع د د",
      "pos": "verb",
      "gloss": "to get ready, prepare oneself",
      "content": true
    },
    "جمع": {
      "root": "ج م ع",
      "pos": "verb",
      "gloss": "to gather, collect",
      "content": true
    },
    "ثياب": {
      "root": "ث و ب",
      "pos": "noun",
      "gloss": "clothes, garments",
      "content": true
    },
    "طار": {
      "root": "ط ي ر",
      "pos": "verb",
      "gloss": "to fly; (fig.) to dash off, take off running",
      "content": true
    },
    "ذهب": {
      "root": "ذ ه ب",
      "pos": "verb",
      "gloss": "to go",
      "content": true
    },
    "إلى": {
      "root": "—",
      "pos": "prep",
      "gloss": "to, towards",
      "content": false
    },
    "آخر": {
      "root": "أ خ ر",
      "pos": "noun",
      "gloss": "end, last part; last, final",
      "content": true
    },
    "ميدان": {
      "root": "م ي د",
      "pos": "noun",
      "gloss": "field, arena, ground",
      "content": true
    },
    "وضع": {
      "root": "و ض ع",
      "pos": "verb",
      "gloss": "to place, put",
      "content": true
    },
    "هنالك": {
      "root": "—",
      "pos": "adv",
      "gloss": "there, over there",
      "content": true
    },
    "قصبة": {
      "root": "ق ص ب",
      "pos": "noun",
      "gloss": "reed, stick (used as a marker)",
      "content": true,
      "book_note": "الْقَصَبَةُ (ج) الْقَصَبَاتُ: كُلُّ أُنْبُوْبَةٍ فِيْ سَاقِ الشَّجَرِ تَنْتَهِيْ بِعُقْدَتَيْنِ (a reed: any hollow stem-segment on a plant's stalk that ends in two nodes)"
    },
    "هي": {
      "root": "—",
      "pos": "noun",
      "gloss": "she, it",
      "content": false
    },
    "غاية": {
      "root": "غ ي ي",
      "pos": "noun",
      "gloss": "goal, finish line",
      "content": true
    },
    "ثم": {
      "root": "—",
      "pos": "part",
      "gloss": "then",
      "content": false
    },
    "تأخر": {
      "root": "أ خ ر",
      "pos": "verb",
      "gloss": "to fall back, be late, hold back",
      "content": true
    },
    "يا": {
      "root": "—",
      "pos": "part",
      "gloss": "O (vocative)",
      "content": false
    },
    "مرة": {
      "root": "م ر ر",
      "pos": "noun",
      "gloss": "time, occasion",
      "content": true
    },
    "ثانية": {
      "root": "ث ن ي",
      "pos": "adj",
      "gloss": "second (ordinal)",
      "content": true
    },
    "ولد": {
      "root": "و ل د",
      "pos": "noun",
      "gloss": "child, boy",
      "content": true
    },
    "درى": {
      "root": "د ر ي",
      "pos": "verb",
      "gloss": "to know",
      "content": true
    },
    "من-اسم": {
      "root": "—",
      "pos": "noun",
      "gloss": "who, whoever",
      "content": false
    },
    "سبق": {
      "root": "س ب ق",
      "pos": "verb",
      "gloss": "to precede, outrun, win a race",
      "content": true
    },
    "حتى": {
      "root": "—",
      "pos": "part",
      "gloss": "until; so that",
      "content": false
    },
    "برز": {
      "root": "ب ر ز",
      "pos": "verb",
      "gloss": "to emerge, stand out, come to the fore",
      "content": true
    },
    "هتف": {
      "root": "ه ت ف",
      "pos": "verb",
      "gloss": "to cheer, call out",
      "content": true,
      "book_note": "هَتَفَ يَهْتِفُ هَتْفاً بِهِ: صَاحَ بِهِ (to cheer/call out to someone: to shout to him)"
    },
    "اسم": {
      "root": "س م و",
      "pos": "noun",
      "gloss": "name",
      "content": true
    },
    "صاح": {
      "root": "ص ي ح",
      "pos": "verb",
      "gloss": "to shout, cry out",
      "content": true
    },
    "مرحى": {
      "root": "م ر ح",
      "pos": "part",
      "gloss": "bravo!",
      "content": true,
      "book_note": "مَرْحَىٰ: كَلِمَةُ تَعَجُّبٍ: تُقَالُ لِلرَّامِيْ أَوِ الْخَطِيْبِ أَوْ نَحْوِهِمَا إِذَا أَصَابَ، وَإِذَا أَخْطَأَ قِيْلَ لَهُ: مَرْحَىٰ (an exclamation of approval, said to an archer, speaker, or the like when he hits the mark; even if he errs, one still says it, kindly)"
    },
    "مجلي": {
      "root": "ج ل و",
      "pos": "noun",
      "gloss": "winner, front-runner (racing term)",
      "content": true
    },
    "لحق": {
      "root": "ل ح ق",
      "pos": "verb",
      "gloss": "to catch up with, follow closely",
      "content": true
    },
    "مصلي-سباق": {
      "root": "ص ل و",
      "pos": "noun",
      "gloss": "runner-up, second-place finisher (racing term)",
      "content": true
    },
    "جاء": {
      "root": "ج ي أ",
      "pos": "verb",
      "gloss": "to come",
      "content": true
    },
    "دور": {
      "root": "د و ر",
      "pos": "noun",
      "gloss": "turn (one's turn)",
      "content": true
    },
    "أبطأ": {
      "root": "ب ط أ",
      "pos": "verb",
      "gloss": "to be slow, lag behind",
      "content": true
    },
    "عند": {
      "root": "ع ن د",
      "pos": "prep",
      "gloss": "at, by, during",
      "content": false
    },
    "ما": {
      "root": "—",
      "pos": "part",
      "gloss": "what; that which; not",
      "content": false
    },
    "قدر": {
      "root": "ق د ر",
      "pos": "verb",
      "gloss": "to be able",
      "content": true
    },
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that",
      "content": false
    },
    "وصل": {
      "root": "و ص ل",
      "pos": "verb",
      "gloss": "to arrive, reach",
      "content": true
    },
    "خالد": {
      "root": "—",
      "pos": "proper",
      "gloss": "Khālid (a name)",
      "content": false
    },
    "أخ": {
      "root": "أ خ و",
      "pos": "noun",
      "gloss": "brother",
      "content": true
    },
    "ظن": {
      "root": "ظ ن ن",
      "pos": "verb",
      "gloss": "to think, suppose",
      "content": true
    },
    "خفيف": {
      "root": "خ ف ف",
      "pos": "adj",
      "gloss": "light, agile, nimble",
      "content": true
    },
    "سريع": {
      "root": "س ر ع",
      "pos": "adj",
      "gloss": "fast, quick",
      "content": true
    },
    "جرى": {
      "root": "ج ر ي",
      "pos": "verb",
      "gloss": "to run",
      "content": true
    },
    "يوم": {
      "root": "ي و م",
      "pos": "noun",
      "gloss": "day",
      "content": true
    },
    "تأسف": {
      "root": "أ س ف",
      "pos": "verb",
      "gloss": "to regret, feel sorry",
      "content": true
    },
    "أيضا": {
      "root": "—",
      "pos": "adv",
      "gloss": "also, too",
      "content": true
    },
    "لكن": {
      "root": "—",
      "pos": "part",
      "gloss": "but",
      "content": false
    },
    "نفس": {
      "root": "ن ف س",
      "pos": "noun",
      "gloss": "self, soul",
      "content": true
    },
    "انتهاء": {
      "root": "ن ه ي",
      "pos": "noun",
      "gloss": "end, conclusion",
      "content": true
    },
    "سنة": {
      "root": "س ن و",
      "pos": "noun",
      "gloss": "year",
      "content": true
    },
    "إن": {
      "root": "—",
      "pos": "part",
      "gloss": "if; indeed; that",
      "content": false
    },
    "شاء": {
      "root": "ش ي أ",
      "pos": "verb",
      "gloss": "to will, wish",
      "content": true
    },
    "الله": {
      "root": "—",
      "pos": "proper",
      "gloss": "Allah",
      "content": true
    },
    "خطب": {
      "root": "خ ط ب",
      "pos": "verb",
      "gloss": "to give a speech, address",
      "content": true
    },
    "نبي": {
      "root": "ن ب أ",
      "pos": "noun",
      "gloss": "prophet",
      "content": true
    },
    "سابق": {
      "root": "س ب ق",
      "pos": "verb",
      "gloss": "to race, compete against",
      "content": true
    },
    "أصحاب": {
      "root": "ص ح ب",
      "pos": "noun",
      "gloss": "companions",
      "content": true
    },
    "تسابق": {
      "root": "س ب ق",
      "pos": "verb",
      "gloss": "to race one another, compete amongst themselves",
      "content": true
    },
    "ينبغي": {
      "root": "ب غ ي",
      "pos": "verb",
      "gloss": "to be fitting, proper; should",
      "content": true
    },
    "مسلم": {
      "root": "س ل م",
      "pos": "noun",
      "gloss": "Muslim",
      "content": true
    },
    "نشيط": {
      "root": "ن ش ط",
      "pos": "adj",
      "gloss": "energetic, active",
      "content": true
    },
    "قوي": {
      "root": "ق و ي",
      "pos": "adj",
      "gloss": "strong",
      "content": true
    },
    "عجز": {
      "root": "ع ج ز",
      "pos": "verb",
      "gloss": "to be incapable, fail, fall short",
      "content": true
    },
    "جهاد": {
      "root": "ج ه د",
      "pos": "noun",
      "gloss": "striving, jihad",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "A running competition was held at my school -- the sports teacher chose twenty-four students from every class, all peers and equals, and lined them up in rows of three.",
      "sentences": [
        {
          "id": "qr1-10-001",
          "page": 57,
          "ar": "كَانَتْ أَمْسِ مُسَابَقَةٌ فِي الْجَرْيِ فِيْ مَدْرَسَتِيْ.",
          "en": "There was a running competition at my school yesterday.",
          "tokens": [
            {
              "surface": "كَانَتْ",
              "lemma": "كان",
              "features": "perf.3fs",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "أَمْسِ",
              "lemma": "أمس",
              "features": "acc",
              "root": "",
              "pos": "adv",
              "gloss": "yesterday"
            },
            {
              "surface": "مُسَابَقَةٌ",
              "lemma": "مسابقة",
              "features": "indef.nom",
              "root": "س ب ق",
              "pos": "noun",
              "gloss": "competition, race"
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
              "surface": "الْجَرْيِ",
              "lemma": "جري",
              "features": "def.gen",
              "root": "ج ر ي",
              "pos": "noun",
              "gloss": "running"
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
              "surface": "مَدْرَسَتِيْ",
              "lemma": "مدرسة",
              "features": "gen+1s",
              "root": "د ر س",
              "pos": "noun",
              "gloss": "school"
            }
          ]
        },
        {
          "id": "qr1-10-002",
          "page": 57,
          "ar": "أَوَّلًا اخْتَارَ مُعَلِّمُ الرِّيَاضَةِ أَرْبَعَةً وَعِشْرِيْنَ طَالِبًا مِنْ جَمِيْعِ الصُّفُوْفِ.",
          "en": "First, the sports teacher chose twenty-four students from all the classes.",
          "tokens": [
            {
              "surface": "أَوَّلًا",
              "lemma": "أولا",
              "features": "acc",
              "root": "أ و ل",
              "pos": "adv",
              "gloss": "first, firstly"
            },
            {
              "surface": "اخْتَارَ",
              "lemma": "اختار",
              "features": "perf.3ms",
              "root": "خ ي ر",
              "pos": "verb",
              "gloss": "to choose, select"
            },
            {
              "surface": "مُعَلِّمُ",
              "lemma": "معلم",
              "features": "nom.constr",
              "root": "ع ل م",
              "pos": "noun",
              "gloss": "teacher"
            },
            {
              "surface": "الرِّيَاضَةِ",
              "lemma": "رياضة",
              "features": "def.gen",
              "root": "ر و ض",
              "pos": "noun",
              "gloss": "sports, physical training"
            },
            {
              "surface": "أَرْبَعَةً",
              "lemma": "أربعة",
              "features": "acc",
              "root": "أ ر ب ع",
              "pos": "num",
              "gloss": "four"
            },
            {
              "surface": "وَعِشْرِيْنَ",
              "lemma": "عشرين",
              "features": "conj+acc",
              "root": "ع ش ر",
              "pos": "num",
              "gloss": "twenty"
            },
            {
              "surface": "طَالِبًا",
              "lemma": "طالب",
              "features": "indef.acc",
              "root": "ط ل ب",
              "pos": "noun",
              "gloss": "student"
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
              "surface": "جَمِيْعِ",
              "lemma": "جميع",
              "features": "gen.constr",
              "root": "ج م ع",
              "pos": "noun",
              "gloss": "all, entirety"
            },
            {
              "surface": "الصُّفُوْفِ",
              "lemma": "صف",
              "features": "pl.def.gen",
              "root": "ص ف ف",
              "pos": "noun",
              "gloss": "row, line; class"
            }
          ]
        },
        {
          "id": "qr1-10-003",
          "page": 57,
          "ar": "هُمْ أَقْرَانٌ وَأَكْفَاءُ.",
          "en": "They were peers and equals.",
          "tokens": [
            {
              "surface": "هُمْ",
              "lemma": "هو",
              "features": "pl.nom",
              "root": "",
              "pos": "noun",
              "gloss": "they"
            },
            {
              "surface": "أَقْرَانٌ",
              "lemma": "أقران",
              "features": "indef.nom",
              "root": "ق ر ن",
              "pos": "noun",
              "gloss": "peers, equals"
            },
            {
              "surface": "وَأَكْفَاءُ",
              "lemma": "أكفاء",
              "features": "conj+indef.nom",
              "root": "ك ف أ",
              "pos": "noun",
              "gloss": "equals, capable ones"
            }
          ]
        },
        {
          "id": "qr1-10-004",
          "page": 57,
          "ar": "وَأَوْقَفَهُمْ فِيْ صُفُوْفٍ صَفًّا خَلْفَ صَفٍّ.",
          "en": "And he lined them up in rows, one row behind another.",
          "tokens": [
            {
              "surface": "وَأَوْقَفَهُمْ",
              "lemma": "أوقف",
              "features": "conj+perf.3ms+3mp",
              "root": "و ق ف",
              "pos": "verb",
              "gloss": "to make stand, station, line up"
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
              "surface": "صُفُوْفٍ",
              "lemma": "صف",
              "features": "pl.indef.gen",
              "root": "ص ف ف",
              "pos": "noun",
              "gloss": "row, line; class"
            },
            {
              "surface": "صَفًّا",
              "lemma": "صف",
              "features": "indef.acc",
              "root": "ص ف ف",
              "pos": "noun",
              "gloss": "row, line; class"
            },
            {
              "surface": "خَلْفَ",
              "lemma": "خلف",
              "features": "acc",
              "root": "خ ل ف",
              "pos": "prep",
              "gloss": "behind"
            },
            {
              "surface": "صَفٍّ",
              "lemma": "صف",
              "features": "indef.gen",
              "root": "ص ف ف",
              "pos": "noun",
              "gloss": "row, line; class"
            }
          ]
        },
        {
          "id": "qr1-10-005",
          "page": 57,
          "ar": "وَفِيْ كُلِّ صَفٍّ ثَلَاثَةٌ.",
          "en": "And in every row there were three.",
          "tokens": [
            {
              "surface": "وَفِيْ",
              "lemma": "في",
              "features": "conj+prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "كُلِّ",
              "lemma": "كل",
              "features": "gen.constr",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "each, every, all"
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
              "surface": "ثَلَاثَةٌ",
              "lemma": "ثلاثة",
              "features": "indef.nom",
              "root": "ث ل ث",
              "pos": "num",
              "gloss": "three"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَمْ طَالِبًا اخْتَارَ مُعَلِّمُ الرِّيَاضَةِ لِلْمُسَابَقَةِ؟",
          "options": [
            "أَرْبَعَةً وَعِشْرِيْنَ طَالِبًا",
            "عِشْرِيْنَ طَالِبًا",
            "ثَلَاثِيْنَ طَالِبًا"
          ],
          "answer": 0,
          "qEn": "How many students did the sports teacher choose for the competition?",
          "optionsEn": [
            "Twenty-four students",
            "Twenty students",
            "Thirty students"
          ]
        },
        {
          "q": "كَمْ طَالِبًا فِيْ كُلِّ صَفٍّ؟",
          "options": [
            "ثَلَاثَةٌ",
            "اثْنَانِ",
            "أَرْبَعَةٌ"
          ],
          "answer": 0,
          "qEn": "How many students were in each row?",
          "optionsEn": [
            "Three",
            "Two",
            "Four"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "The teacher stood by one row -- Muhammad, Ibrahim, and Sa'id -- pulled Ibrahim back into line when he edged forward early, and explained how the count would work: one to straighten up, two to get ready, three to take off.",
      "sentences": [
        {
          "id": "qr1-10-006",
          "page": 57,
          "ar": "وَوَقَفَ الْأُسْتَاذُ بِجَانِبِ مِنْ هٰذِهِ الصُّفُوْفِ.",
          "en": "And the teacher stood beside one of these rows,",
          "tokens": [
            {
              "surface": "وَوَقَفَ",
              "lemma": "وقف",
              "features": "conj+perf.3ms",
              "root": "و ق ف",
              "pos": "verb",
              "gloss": "to stand, stop"
            },
            {
              "surface": "الْأُسْتَاذُ",
              "lemma": "أستاذ",
              "features": "def.nom",
              "root": "",
              "pos": "noun",
              "gloss": "teacher, professor"
            },
            {
              "surface": "بِجَانِبِ",
              "lemma": "جانب",
              "features": "prep+gen",
              "root": "ج ن ب",
              "pos": "noun",
              "gloss": "side"
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
              "surface": "هٰذِهِ",
              "lemma": "هذه",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "this (f.)"
            },
            {
              "surface": "الصُّفُوْفِ",
              "lemma": "صف",
              "features": "pl.def.gen",
              "root": "ص ف ف",
              "pos": "noun",
              "gloss": "row, line; class"
            }
          ]
        },
        {
          "id": "qr1-10-007",
          "page": 57,
          "ar": "وَقَدَّمَ صَفًّا فِيْهِ مُحَمَّدٌ وَإِبْرَاهِيْمُ وَسَعِيْدٌ.",
          "en": "and brought forward a row with Muhammad, Ibrahim, and Sa'id in it,",
          "tokens": [
            {
              "surface": "وَقَدَّمَ",
              "lemma": "قدم",
              "features": "conj+perf.3ms",
              "root": "ق د م",
              "pos": "verb",
              "gloss": "to bring forward, present"
            },
            {
              "surface": "صَفًّا",
              "lemma": "صف",
              "features": "indef.acc",
              "root": "ص ف ف",
              "pos": "noun",
              "gloss": "row, line; class"
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
              "surface": "مُحَمَّدٌ",
              "lemma": "محمد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Muḥammad (a name)"
            },
            {
              "surface": "وَإِبْرَاهِيْمُ",
              "lemma": "إبراهيم",
              "features": "conj+nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ibrāhīm (a name)"
            },
            {
              "surface": "وَسَعِيْدٌ",
              "lemma": "سعيد",
              "features": "conj+nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            }
          ]
        },
        {
          "id": "qr1-10-008",
          "page": 57,
          "ar": "وَهُمْ أَقْرَانٌ وَأَكْفَاءٌ.",
          "en": "who were peers and equals,",
          "tokens": [
            {
              "surface": "وَهُمْ",
              "lemma": "هو",
              "features": "conj+pl.nom",
              "root": "",
              "pos": "noun",
              "gloss": "they"
            },
            {
              "surface": "أَقْرَانٌ",
              "lemma": "أقران",
              "features": "indef.nom",
              "root": "ق ر ن",
              "pos": "noun",
              "gloss": "peers, equals"
            },
            {
              "surface": "وَأَكْفَاءٌ",
              "lemma": "أكفاء",
              "features": "conj+indef.nom",
              "root": "ك ف أ",
              "pos": "noun",
              "gloss": "equals, capable ones"
            }
          ]
        },
        {
          "id": "qr1-10-009",
          "page": 57,
          "ar": "وَقَالَ: قُوْمُوْا فِيْ صَفٍّ وَاحِدٍ وَعَلَىٰ خَطٍّ وَاحِدٍ.",
          "en": "and said: \"Stand in a single row, on a single line,",
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
              "surface": "قُوْمُوْا",
              "lemma": "قام",
              "features": "imp.2mp",
              "root": "ق و م",
              "pos": "verb",
              "gloss": "to stand, rise, get up"
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
            },
            {
              "surface": "وَعَلَىٰ",
              "lemma": "على",
              "features": "conj+prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, on"
            },
            {
              "surface": "خَطٍّ",
              "lemma": "خط",
              "features": "indef.gen",
              "root": "خ ط ط",
              "pos": "noun",
              "gloss": "line"
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
          "id": "qr1-10-010",
          "page": 57,
          "ar": "وَلَا يَتَقَدَّمْ مِنْكُمْ أَحَدٌ.",
          "en": "and let none of you go ahead.\"",
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
              "surface": "يَتَقَدَّمْ",
              "lemma": "تقدم",
              "features": "impf.3ms",
              "root": "ق د م",
              "pos": "verb",
              "gloss": "to advance, come forward"
            },
            {
              "surface": "مِنْكُمْ",
              "lemma": "من",
              "features": "prep+2mp",
              "root": "",
              "pos": "prep",
              "gloss": "from"
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
          "id": "qr1-10-011",
          "page": 57,
          "ar": "وَكَانَ إِبْرَاهِيْمُ مُتَقَدِّمًا قَلِيْلًا.",
          "en": "Ibrahim had edged forward a little,",
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
              "surface": "إِبْرَاهِيْمُ",
              "lemma": "إبراهيم",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ibrāhīm (a name)"
            },
            {
              "surface": "مُتَقَدِّمًا",
              "lemma": "تقدم",
              "features": "indef.acc",
              "root": "ق د م",
              "pos": "adj",
              "gloss": "advancing, coming forward"
            },
            {
              "surface": "قَلِيْلًا",
              "lemma": "قليلا",
              "features": "acc",
              "root": "ق ل ل",
              "pos": "adv",
              "gloss": "a little, slightly"
            }
          ]
        },
        {
          "id": "qr1-10-012",
          "page": 57,
          "ar": "فَأَخَّرَهُ وَجَعَلَهُ فِي الصَّفِّ.",
          "en": "so he pulled him back and put him in the row.",
          "tokens": [
            {
              "surface": "فَأَخَّرَهُ",
              "lemma": "أخر",
              "features": "conj+perf.3ms+3ms",
              "root": "أ خ ر",
              "pos": "verb",
              "gloss": "to delay, push back, hold back"
            },
            {
              "surface": "وَجَعَلَهُ",
              "lemma": "جعل",
              "features": "conj+perf.3ms+3ms",
              "root": "ج ع ل",
              "pos": "verb",
              "gloss": "to make, place, put"
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
          "id": "qr1-10-013",
          "page": 57,
          "ar": "وَقَالَ: أَنَا أَعُدُّ لَكُمْ.",
          "en": "And he said: \"I will count for you.",
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
              "surface": "أَنَا",
              "lemma": "أنا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "أَعُدُّ",
              "lemma": "عد",
              "features": "impf.1s",
              "root": "ع د د",
              "pos": "verb",
              "gloss": "to count"
            },
            {
              "surface": "لَكُمْ",
              "lemma": "ل",
              "features": "prep+2mp",
              "root": "",
              "pos": "prep",
              "gloss": "for, to"
            }
          ]
        },
        {
          "id": "qr1-10-014",
          "page": 58,
          "ar": "فَإِذَا قُلْتُ: وَاحِد، فَسَوُّوا الصَّفَّ.",
          "en": "So when I say one, straighten the row;",
          "tokens": [
            {
              "surface": "فَإِذَا",
              "lemma": "إذا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "if, when"
            },
            {
              "surface": "قُلْتُ",
              "lemma": "قال",
              "features": "perf.1s",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "وَاحِد",
              "lemma": "واحد",
              "features": "indef.nom",
              "root": "و ح د",
              "pos": "num",
              "gloss": "one, single"
            },
            {
              "surface": "فَسَوُّوا",
              "lemma": "سوى",
              "features": "conj+imp.2mp",
              "root": "س و ي",
              "pos": "verb",
              "gloss": "to make even, straighten"
            },
            {
              "surface": "الصَّفَّ",
              "lemma": "صف",
              "features": "def.acc",
              "root": "ص ف ف",
              "pos": "noun",
              "gloss": "row, line; class"
            }
          ]
        },
        {
          "id": "qr1-10-015",
          "page": 58,
          "ar": "وَإِذَا قُلْتُ: اثْنَان، فَاسْتَعِدُّوا وَاجْمَعُوا ثِيَابَكُمْ.",
          "en": "and when I say two, get ready and gather up your clothes;",
          "tokens": [
            {
              "surface": "وَإِذَا",
              "lemma": "إذا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "if, when"
            },
            {
              "surface": "قُلْتُ",
              "lemma": "قال",
              "features": "perf.1s",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "اثْنَان",
              "lemma": "اثنان",
              "features": "indef.nom",
              "root": "ث ن ي",
              "pos": "num",
              "gloss": "two"
            },
            {
              "surface": "فَاسْتَعِدُّوا",
              "lemma": "استعد",
              "features": "conj+imp.2mp",
              "root": "ع د د",
              "pos": "verb",
              "gloss": "to get ready, prepare oneself"
            },
            {
              "surface": "وَاجْمَعُوا",
              "lemma": "جمع",
              "features": "conj+imp.2mp",
              "root": "ج م ع",
              "pos": "verb",
              "gloss": "to gather, collect"
            },
            {
              "surface": "ثِيَابَكُمْ",
              "lemma": "ثياب",
              "features": "pl.acc+2mp",
              "root": "ث و ب",
              "pos": "noun",
              "gloss": "clothes, garments"
            }
          ]
        },
        {
          "id": "qr1-10-016",
          "page": 58,
          "ar": "وَإِذَا قُلْتُ: ثَلَاثَة، فَطِيْرُوْا.",
          "en": "and when I say three, take off running.\"",
          "tokens": [
            {
              "surface": "وَإِذَا",
              "lemma": "إذا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "if, when"
            },
            {
              "surface": "قُلْتُ",
              "lemma": "قال",
              "features": "perf.1s",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "ثَلَاثَة",
              "lemma": "ثلاثة",
              "features": "indef.nom",
              "root": "ث ل ث",
              "pos": "num",
              "gloss": "three"
            },
            {
              "surface": "فَطِيْرُوْا",
              "lemma": "طار",
              "features": "conj+imp.2mp",
              "root": "ط ي ر",
              "pos": "verb",
              "gloss": "to fly; (fig.) to dash off, take off running"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنْ كَانَ فِي الصَّفِّ الَّذِيْ قَدَّمَهُ الْأُسْتَاذُ أَوَّلًا؟",
          "options": [
            "مُحَمَّدٌ وَإِبْرَاهِيْمُ وَسَعِيْدٌ",
            "خَالِدٌ وَحَامِدٌ وَسَعِيْدٌ",
            "مُحَمَّدٌ وَخَالِدٌ وَحْدَهُمَا"
          ],
          "answer": 0,
          "qEn": "Who was in the row the teacher brought forward first?",
          "optionsEn": [
            "Muhammad, Ibrahim, and Sa'id",
            "Khalid, Hamid, and Sa'id",
            "Muhammad and Khalid alone"
          ]
        },
        {
          "q": "مَاذَا يَفْعَلُ الطُّلَّابُ حِيْنَ يَقُوْلُ الْأُسْتَاذُ: ثَلَاثَةٌ؟",
          "options": [
            "يَطِيْرُوْنَ رَاكِضِيْنَ",
            "يَجْلِسُوْنَ",
            "يَعُوْدُوْنَ إِلَى الصَّفِّ"
          ],
          "answer": 0,
          "qEn": "What do the students do when the teacher says \"three\"?",
          "optionsEn": [
            "They dash off running",
            "They sit down",
            "They go back to the row"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "A teacher went to the far end of the field, planted a stick, and declared it the finish line.",
      "sentences": [
        {
          "id": "qr1-10-017",
          "page": 58,
          "ar": "وَذَهَبَ أَحَدُ الْمُعَلِّمِيْنَ إِلَىٰ آخِرِ الْمَيْدَانِ.",
          "en": "And one of the teachers went to the far end of the field,",
          "tokens": [
            {
              "surface": "وَذَهَبَ",
              "lemma": "ذهب",
              "features": "conj+perf.3ms",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
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
              "surface": "الْمُعَلِّمِيْنَ",
              "lemma": "معلم",
              "features": "pl.def.gen",
              "root": "ع ل م",
              "pos": "noun",
              "gloss": "teacher"
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
              "surface": "آخِرِ",
              "lemma": "آخر",
              "features": "gen.constr",
              "root": "أ خ ر",
              "pos": "noun",
              "gloss": "end, last part; last, final"
            },
            {
              "surface": "الْمَيْدَانِ",
              "lemma": "ميدان",
              "features": "def.gen",
              "root": "م ي د",
              "pos": "noun",
              "gloss": "field, arena, ground"
            }
          ]
        },
        {
          "id": "qr1-10-018",
          "page": 58,
          "ar": "وَوَضَعَ هُنَالِكَ قَصَبَةً.",
          "en": "and placed a stick there,",
          "tokens": [
            {
              "surface": "وَوَضَعَ",
              "lemma": "وضع",
              "features": "conj+perf.3ms",
              "root": "و ض ع",
              "pos": "verb",
              "gloss": "to place, put"
            },
            {
              "surface": "هُنَالِكَ",
              "lemma": "هنالك",
              "features": "adv",
              "root": "",
              "pos": "adv",
              "gloss": "there, over there"
            },
            {
              "surface": "قَصَبَةً",
              "lemma": "قصبة",
              "features": "indef.acc",
              "root": "ق ص ب",
              "pos": "noun",
              "gloss": "reed, stick (used as a marker)"
            }
          ]
        },
        {
          "id": "qr1-10-019",
          "page": 58,
          "ar": "وَقَالَ: هٰذِهِ هِيَ الْغَايَةُ.",
          "en": "and said: \"This is the finish line.\"",
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
              "surface": "هٰذِهِ",
              "lemma": "هذه",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "this (f.)"
            },
            {
              "surface": "هِيَ",
              "lemma": "هي",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "she, it"
            },
            {
              "surface": "الْغَايَةُ",
              "lemma": "غاية",
              "features": "def.nom",
              "root": "غ ي ي",
              "pos": "noun",
              "gloss": "goal, finish line"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا وَضَعَ أَحَدُ الْمُعَلِّمِيْنَ فِيْ آخِرِ الْمَيْدَانِ؟",
          "options": [
            "قَصَبَةً",
            "عَلَمًا",
            "كُرْسِيًّا"
          ],
          "answer": 0,
          "qEn": "What did one of the teachers place at the far end of the field?",
          "optionsEn": [
            "A stick",
            "A flag",
            "A chair"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "The count began. Sa'id jumped the gun and was called back; on the real count the boys dashed off, and Muhammad came in first with Ibrahim close behind him as runner-up.",
      "sentences": [
        {
          "id": "qr1-10-020",
          "page": 58,
          "ar": "وَقَالَ الْأُسْتَاذُ: وَاحِد.",
          "en": "And the teacher said: \"One.\"",
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
              "surface": "الْأُسْتَاذُ",
              "lemma": "أستاذ",
              "features": "def.nom",
              "root": "",
              "pos": "noun",
              "gloss": "teacher, professor"
            },
            {
              "surface": "وَاحِد",
              "lemma": "واحد",
              "features": "indef.nom",
              "root": "و ح د",
              "pos": "num",
              "gloss": "one, single"
            }
          ]
        },
        {
          "id": "qr1-10-021",
          "page": 58,
          "ar": "وَوَقَفَ قَلِيْلًا ثُمَّ قَالَ: اثْنَان.",
          "en": "He paused a little, then said: \"Two.\"",
          "tokens": [
            {
              "surface": "وَوَقَفَ",
              "lemma": "وقف",
              "features": "conj+perf.3ms",
              "root": "و ق ف",
              "pos": "verb",
              "gloss": "to stand, stop"
            },
            {
              "surface": "قَلِيْلًا",
              "lemma": "قليلا",
              "features": "acc",
              "root": "ق ل ل",
              "pos": "adv",
              "gloss": "a little, slightly"
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
              "surface": "قَالَ",
              "lemma": "قال",
              "features": "perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "اثْنَان",
              "lemma": "اثنان",
              "features": "indef.nom",
              "root": "ث ن ي",
              "pos": "num",
              "gloss": "two"
            }
          ]
        },
        {
          "id": "qr1-10-022",
          "page": 58,
          "ar": "فَتَقَدَّمَ سَعِيْدٌ.",
          "en": "so Sa'id moved forward,",
          "tokens": [
            {
              "surface": "فَتَقَدَّمَ",
              "lemma": "تقدم",
              "features": "conj+perf.3ms",
              "root": "ق د م",
              "pos": "verb",
              "gloss": "to advance, come forward"
            },
            {
              "surface": "سَعِيْدٌ",
              "lemma": "سعيد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            }
          ]
        },
        {
          "id": "qr1-10-023",
          "page": 58,
          "ar": "فَقَالَ الْأُسْتَاذُ: تَأَخَّرْ يَا سَعِيْدُ.",
          "en": "and the teacher said: \"Fall back, Sa'id --",
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
              "surface": "الْأُسْتَاذُ",
              "lemma": "أستاذ",
              "features": "def.nom",
              "root": "",
              "pos": "noun",
              "gloss": "teacher, professor"
            },
            {
              "surface": "تَأَخَّرْ",
              "lemma": "تأخر",
              "features": "imp.2ms",
              "root": "أ خ ر",
              "pos": "verb",
              "gloss": "to fall back, be late, hold back"
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
        },
        {
          "id": "qr1-10-024",
          "page": 58,
          "ar": "وَأَنَا أَعُدُّ مَرَّةً ثَانِيَةً.",
          "en": "I am counting for you a second time.\"",
          "tokens": [
            {
              "surface": "وَأَنَا",
              "lemma": "أنا",
              "features": "conj+nom",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "أَعُدُّ",
              "lemma": "عد",
              "features": "impf.1s",
              "root": "ع د د",
              "pos": "verb",
              "gloss": "to count"
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
              "surface": "ثَانِيَةً",
              "lemma": "ثانية",
              "features": "indef.acc",
              "root": "ث ن ي",
              "pos": "adj",
              "gloss": "second (ordinal)"
            }
          ]
        },
        {
          "id": "qr1-10-025",
          "page": 58,
          "ar": "فَقَالَ: وَاحِد، اثْنَان، ثَلَاثَة.",
          "en": "So he said: \"One, two, three,\"",
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
              "surface": "وَاحِد",
              "lemma": "واحد",
              "features": "indef.nom",
              "root": "و ح د",
              "pos": "num",
              "gloss": "one, single"
            },
            {
              "surface": "اثْنَان",
              "lemma": "اثنان",
              "features": "indef.nom",
              "root": "ث ن ي",
              "pos": "num",
              "gloss": "two"
            },
            {
              "surface": "ثَلَاثَة",
              "lemma": "ثلاثة",
              "features": "indef.nom",
              "root": "ث ل ث",
              "pos": "num",
              "gloss": "three"
            }
          ]
        },
        {
          "id": "qr1-10-026",
          "page": 58,
          "ar": "فَطَارَ الْأَوْلَادُ.",
          "en": "and the boys took off running;",
          "tokens": [
            {
              "surface": "فَطَارَ",
              "lemma": "طار",
              "features": "conj+perf.3ms",
              "root": "ط ي ر",
              "pos": "verb",
              "gloss": "to fly; (fig.) to dash off, take off running"
            },
            {
              "surface": "الْأَوْلَادُ",
              "lemma": "ولد",
              "features": "pl.def.nom",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            }
          ]
        },
        {
          "id": "qr1-10-027",
          "page": 58,
          "ar": "لَا يَدْرِيْ أَحَدٌ مَنِ السَّابِقُ.",
          "en": "no one knew who was ahead,",
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
              "surface": "يَدْرِيْ",
              "lemma": "درى",
              "features": "impf.3ms",
              "root": "د ر ي",
              "pos": "verb",
              "gloss": "to know"
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
              "surface": "مَنِ",
              "lemma": "من-اسم",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "who, whoever"
            },
            {
              "surface": "السَّابِقُ",
              "lemma": "سبق",
              "features": "def.nom",
              "root": "س ب ق",
              "pos": "noun",
              "gloss": "the one ahead, the front-runner"
            }
          ]
        },
        {
          "id": "qr1-10-028",
          "page": 58,
          "ar": "حَتَّىٰ بَرَزَ مُحَمَّدٌ.",
          "en": "until Muhammad emerged,",
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
              "surface": "بَرَزَ",
              "lemma": "برز",
              "features": "perf.3ms",
              "root": "ب ر ز",
              "pos": "verb",
              "gloss": "to emerge, stand out, come to the fore"
            },
            {
              "surface": "مُحَمَّدٌ",
              "lemma": "محمد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Muḥammad (a name)"
            }
          ]
        },
        {
          "id": "qr1-10-029",
          "page": 58,
          "ar": "وَهَتَفَ الْأَوْلَادُ بِاسْمِهِ وَقَالُوْا: مُحَمَّد.",
          "en": "and the boys cheered his name and said: \"Muhammad!\"",
          "tokens": [
            {
              "surface": "وَهَتَفَ",
              "lemma": "هتف",
              "features": "conj+perf.3ms",
              "root": "ه ت ف",
              "pos": "verb",
              "gloss": "to cheer, call out"
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
              "surface": "بِاسْمِهِ",
              "lemma": "اسم",
              "features": "prep+gen+3ms",
              "root": "س م و",
              "pos": "noun",
              "gloss": "name"
            },
            {
              "surface": "وَقَالُوْا",
              "lemma": "قال",
              "features": "conj+perf.3mp",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "مُحَمَّد",
              "lemma": "محمد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Muḥammad (a name)"
            }
          ]
        },
        {
          "id": "qr1-10-030",
          "page": 58,
          "ar": "وَصَاحُوْا: مَرْحَىٰ مَرْحَىٰ.",
          "en": "and shouted: \"Bravo, bravo!\"",
          "tokens": [
            {
              "surface": "وَصَاحُوْا",
              "lemma": "صاح",
              "features": "conj+perf.3mp",
              "root": "ص ي ح",
              "pos": "verb",
              "gloss": "to shout, cry out"
            },
            {
              "surface": "مَرْحَىٰ",
              "lemma": "مرحى",
              "features": "part",
              "root": "م ر ح",
              "pos": "part",
              "gloss": "bravo!"
            },
            {
              "surface": "مَرْحَىٰ",
              "lemma": "مرحى",
              "features": "part",
              "root": "م ر ح",
              "pos": "part",
              "gloss": "bravo!"
            }
          ]
        },
        {
          "id": "qr1-10-031",
          "page": 58,
          "ar": "وَكَانَ هُوَ الْمُجَلِّيَ.",
          "en": "He was the winner,",
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
              "surface": "هُوَ",
              "lemma": "هو",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "he, it"
            },
            {
              "surface": "الْمُجَلِّيَ",
              "lemma": "مجلي",
              "features": "def.acc",
              "root": "ج ل و",
              "pos": "noun",
              "gloss": "winner, front-runner (racing term)"
            }
          ]
        },
        {
          "id": "qr1-10-032",
          "page": 58,
          "ar": "وَلَحِقَهُ إِبْرَاهِيْمُ.",
          "en": "and Ibrahim caught up with him,",
          "tokens": [
            {
              "surface": "وَلَحِقَهُ",
              "lemma": "لحق",
              "features": "conj+perf.3ms+3ms",
              "root": "ل ح ق",
              "pos": "verb",
              "gloss": "to catch up with, follow closely"
            },
            {
              "surface": "إِبْرَاهِيْمُ",
              "lemma": "إبراهيم",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ibrāhīm (a name)"
            }
          ]
        },
        {
          "id": "qr1-10-033",
          "page": 58,
          "ar": "فَكَانَ هُوَ الْمُصَلِّيَ.",
          "en": "so he was the runner-up.",
          "tokens": [
            {
              "surface": "فَكَانَ",
              "lemma": "كان",
              "features": "conj+perf.3ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "هُوَ",
              "lemma": "هو",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "he, it"
            },
            {
              "surface": "الْمُصَلِّيَ",
              "lemma": "مصلي-سباق",
              "features": "def.acc",
              "root": "ص ل و",
              "pos": "noun",
              "gloss": "runner-up, second-place finisher (racing term)"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنْ كَانَ الْمُجَلِّيَ فِي الْجَرْيِ الْأَوَّلِ؟",
          "options": [
            "مُحَمَّدٌ",
            "إِبْرَاهِيْمُ",
            "سَعِيْدٌ"
          ],
          "answer": 0,
          "qEn": "Who was the winner of the first heat?",
          "optionsEn": [
            "Muhammad",
            "Ibrahim",
            "Sa'id"
          ]
        },
        {
          "q": "مَنْ كَانَ الْمُصَلِّيَ فِي الْجَرْيِ الْأَوَّلِ؟",
          "options": [
            "إِبْرَاهِيْمُ",
            "مُحَمَّدٌ",
            "سَعِيْدٌ"
          ],
          "answer": 0,
          "qEn": "Who came in second in the first heat?",
          "optionsEn": [
            "Ibrahim",
            "Muhammad",
            "Sa'id"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "Then it was the narrator's own turn -- he ran among his peers, but lagged a little and could not overtake, finishing as runner-up himself.",
      "sentences": [
        {
          "id": "qr1-10-034",
          "page": 58,
          "ar": "وَجَاءَ دَوْرِيْ.",
          "en": "Then my turn came,",
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
              "surface": "دَوْرِيْ",
              "lemma": "دور",
              "features": "nom+1s",
              "root": "د و ر",
              "pos": "noun",
              "gloss": "turn (one's turn)"
            }
          ]
        },
        {
          "id": "qr1-10-035",
          "page": 58,
          "ar": "وَقُمْتُ فِيْ أَقْرَانِيْ وَأَكْفَائِيْ.",
          "en": "and I stood among my peers and equals,",
          "tokens": [
            {
              "surface": "وَقُمْتُ",
              "lemma": "قام",
              "features": "conj+perf.1s",
              "root": "ق و م",
              "pos": "verb",
              "gloss": "to stand, rise, get up"
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
              "surface": "أَقْرَانِيْ",
              "lemma": "أقران",
              "features": "pl.gen+1s",
              "root": "ق ر ن",
              "pos": "noun",
              "gloss": "peers, equals"
            },
            {
              "surface": "وَأَكْفَائِيْ",
              "lemma": "أكفاء",
              "features": "conj+pl.gen+1s",
              "root": "ك ف أ",
              "pos": "noun",
              "gloss": "equals, capable ones"
            }
          ]
        },
        {
          "id": "qr1-10-036",
          "page": 58,
          "ar": "وَعَدَّ الْأُسْتَاذُ: وَاحِد، اثْنَان، ثَلَاثَة.",
          "en": "and the teacher counted: \"One, two, three,\"",
          "tokens": [
            {
              "surface": "وَعَدَّ",
              "lemma": "عد",
              "features": "conj+perf.3ms",
              "root": "ع د د",
              "pos": "verb",
              "gloss": "to count"
            },
            {
              "surface": "الْأُسْتَاذُ",
              "lemma": "أستاذ",
              "features": "def.nom",
              "root": "",
              "pos": "noun",
              "gloss": "teacher, professor"
            },
            {
              "surface": "وَاحِد",
              "lemma": "واحد",
              "features": "indef.nom",
              "root": "و ح د",
              "pos": "num",
              "gloss": "one, single"
            },
            {
              "surface": "اثْنَان",
              "lemma": "اثنان",
              "features": "indef.nom",
              "root": "ث ن ي",
              "pos": "num",
              "gloss": "two"
            },
            {
              "surface": "ثَلَاثَة",
              "lemma": "ثلاثة",
              "features": "indef.nom",
              "root": "ث ل ث",
              "pos": "num",
              "gloss": "three"
            }
          ]
        },
        {
          "id": "qr1-10-037",
          "page": 58,
          "ar": "وَأَبْطَأْتُ قَلِيْلًا عِنْدَ الْجَرْيِ.",
          "en": "and I lagged behind a little while running,",
          "tokens": [
            {
              "surface": "وَأَبْطَأْتُ",
              "lemma": "أبطأ",
              "features": "conj+perf.1s",
              "root": "ب ط أ",
              "pos": "verb",
              "gloss": "to be slow, lag behind"
            },
            {
              "surface": "قَلِيْلًا",
              "lemma": "قليلا",
              "features": "acc",
              "root": "ق ل ل",
              "pos": "adv",
              "gloss": "a little, slightly"
            },
            {
              "surface": "عِنْدَ",
              "lemma": "عند",
              "features": "prep",
              "root": "ع ن د",
              "pos": "prep",
              "gloss": "at, by, during"
            },
            {
              "surface": "الْجَرْيِ",
              "lemma": "جري",
              "features": "def.gen",
              "root": "ج ر ي",
              "pos": "noun",
              "gloss": "running"
            }
          ]
        },
        {
          "id": "qr1-10-038",
          "page": 58,
          "ar": "فَمَا قَدَرْتُ أَنْ أَسْبِقَ وَأَكُوْنَ الْمُجَلِّيَ.",
          "en": "so I could not manage to win and be the front-runner;",
          "tokens": [
            {
              "surface": "فَمَا",
              "lemma": "ما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not"
            },
            {
              "surface": "قَدَرْتُ",
              "lemma": "قدر",
              "features": "perf.1s",
              "root": "ق د ر",
              "pos": "verb",
              "gloss": "to be able"
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
              "surface": "أَسْبِقَ",
              "lemma": "سبق",
              "features": "impf.1s",
              "root": "س ب ق",
              "pos": "verb",
              "gloss": "to precede, outrun, win a race"
            },
            {
              "surface": "وَأَكُوْنَ",
              "lemma": "كان",
              "features": "conj+impf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "الْمُجَلِّيَ",
              "lemma": "مجلي",
              "features": "def.acc",
              "root": "ج ل و",
              "pos": "noun",
              "gloss": "winner, front-runner (racing term)"
            }
          ]
        },
        {
          "id": "qr1-10-039",
          "page": 58,
          "ar": "وَوَصَلْنَا إِلَى الْغَايَةِ.",
          "en": "we reached the finish line,",
          "tokens": [
            {
              "surface": "وَوَصَلْنَا",
              "lemma": "وصل",
              "features": "conj+perf.1p",
              "root": "و ص ل",
              "pos": "verb",
              "gloss": "to arrive, reach"
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
              "surface": "الْغَايَةِ",
              "lemma": "غاية",
              "features": "def.gen",
              "root": "غ ي ي",
              "pos": "noun",
              "gloss": "goal, finish line"
            }
          ]
        },
        {
          "id": "qr1-10-040",
          "page": 58,
          "ar": "وَكُنْتُ الْمُصَلِّيَ.",
          "en": "and I was the runner-up.",
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
              "surface": "الْمُصَلِّيَ",
              "lemma": "مصلي-سباق",
              "features": "def.acc",
              "root": "ص ل و",
              "pos": "noun",
              "gloss": "runner-up, second-place finisher (racing term)"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا مَا قَدَرَ الرَّاوِيْ أَنْ يَكُوْنَ الْمُجَلِّيَ فِيْ جَرْيِهِ؟",
          "options": [
            "لِأَنَّهُ أَبْطَأَ قَلِيْلًا عِنْدَ الْجَرْيِ",
            "لِأَنَّهُ سَقَطَ",
            "لِأَنَّهُ لَمْ يَشْتَرِكْ"
          ],
          "answer": 0,
          "qEn": "Why couldn't the narrator be the winner in his own heat?",
          "optionsEn": [
            "Because he lagged a little while running",
            "Because he fell",
            "Because he didn't take part"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "en": "In the next heat Khalid won, though the narrator's brothers had expected him to, since he is light, fast, and runs every day; disappointed but undiscouraged, he resolved to win next time.",
      "sentences": [
        {
          "id": "qr1-10-041",
          "page": 58,
          "ar": "وَكَانَ خَالِدٌ الْمُجَلِّيَ.",
          "en": "And Khalid was the winner,",
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
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khālid (a name)"
            },
            {
              "surface": "الْمُجَلِّيَ",
              "lemma": "مجلي",
              "features": "def.acc",
              "root": "ج ل و",
              "pos": "noun",
              "gloss": "winner, front-runner (racing term)"
            }
          ]
        },
        {
          "id": "qr1-10-042",
          "page": 58,
          "ar": "فَهَتَفَ الْأَوْلَادُ بِاسْمِهِ وَقَالُوا: مَرْحَىٰ مَرْحَىٰ.",
          "en": "so the boys cheered his name and said: \"Bravo, bravo!\"",
          "tokens": [
            {
              "surface": "فَهَتَفَ",
              "lemma": "هتف",
              "features": "conj+perf.3ms",
              "root": "ه ت ف",
              "pos": "verb",
              "gloss": "to cheer, call out"
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
              "surface": "بِاسْمِهِ",
              "lemma": "اسم",
              "features": "prep+gen+3ms",
              "root": "س م و",
              "pos": "noun",
              "gloss": "name"
            },
            {
              "surface": "وَقَالُوا",
              "lemma": "قال",
              "features": "conj+perf.3mp",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "مَرْحَىٰ",
              "lemma": "مرحى",
              "features": "part",
              "root": "م ر ح",
              "pos": "part",
              "gloss": "bravo!"
            },
            {
              "surface": "مَرْحَىٰ",
              "lemma": "مرحى",
              "features": "part",
              "root": "م ر ح",
              "pos": "part",
              "gloss": "bravo!"
            }
          ]
        },
        {
          "id": "qr1-10-043",
          "page": 58,
          "ar": "وَكَانَ إِخْوَانِيْ يَظُنُّوْنَ أَنِّيْ أَنَا الْمُجَلِّيَ.",
          "en": "And my brothers had thought that I would be the winner,",
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
              "surface": "إِخْوَانِيْ",
              "lemma": "أخ",
              "features": "pl.nom+1s",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brother"
            },
            {
              "surface": "يَظُنُّوْنَ",
              "lemma": "ظن",
              "features": "impf.3mp",
              "root": "ظ ن ن",
              "pos": "verb",
              "gloss": "to think, suppose"
            },
            {
              "surface": "أَنِّيْ",
              "lemma": "أن",
              "features": "part+1s",
              "root": "",
              "pos": "part",
              "gloss": "that"
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
              "surface": "الْمُجَلِّيَ",
              "lemma": "مجلي",
              "features": "def.acc",
              "root": "ج ل و",
              "pos": "noun",
              "gloss": "winner, front-runner (racing term)"
            }
          ]
        },
        {
          "id": "qr1-10-044",
          "page": 58,
          "ar": "لِأَنِّيْ خَفِيْفٌ وَسَرِيْعٌ وَأَجْرِيْ كُلَّ يَوْمٍ.",
          "en": "because I am light, and fast, and I run every day.",
          "tokens": [
            {
              "surface": "لِأَنِّيْ",
              "lemma": "أن",
              "features": "prep+part+1s",
              "root": "",
              "pos": "part",
              "gloss": "because"
            },
            {
              "surface": "خَفِيْفٌ",
              "lemma": "خفيف",
              "features": "indef.nom",
              "root": "خ ف ف",
              "pos": "adj",
              "gloss": "light, agile, nimble"
            },
            {
              "surface": "وَسَرِيْعٌ",
              "lemma": "سريع",
              "features": "conj+indef.nom",
              "root": "س ر ع",
              "pos": "adj",
              "gloss": "fast, quick"
            },
            {
              "surface": "وَأَجْرِيْ",
              "lemma": "جرى",
              "features": "conj+impf.1s",
              "root": "ج ر ي",
              "pos": "verb",
              "gloss": "to run"
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
            }
          ]
        },
        {
          "id": "qr1-10-045",
          "page": 59,
          "ar": "وَتَأَسَّفْتُ أَيْضًا.",
          "en": "I was also disappointed,",
          "tokens": [
            {
              "surface": "وَتَأَسَّفْتُ",
              "lemma": "تأسف",
              "features": "conj+perf.1s",
              "root": "أ س ف",
              "pos": "verb",
              "gloss": "to regret, feel sorry"
            },
            {
              "surface": "أَيْضًا",
              "lemma": "أيضا",
              "features": "acc",
              "root": "",
              "pos": "adv",
              "gloss": "also, too"
            }
          ]
        },
        {
          "id": "qr1-10-046",
          "page": 59,
          "ar": "وَلٰكِنِّيْ قُلْتُ فِيْ نَفْسِيْ: سَأَسْبِقُ فِي الْمَرَّةِ الثَّانِيَةِ عِنْدَ انْتِهَاءِ السَّنَةِ إِنْ شَاءَ اللهُ.",
          "en": "but I said to myself: \"I will win next time, at the end of the year, God willing.\"",
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
              "surface": "قُلْتُ",
              "lemma": "قال",
              "features": "perf.1s",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
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
              "surface": "نَفْسِيْ",
              "lemma": "نفس",
              "features": "gen+1s",
              "root": "ن ف س",
              "pos": "noun",
              "gloss": "self, soul"
            },
            {
              "surface": "سَأَسْبِقُ",
              "lemma": "سبق",
              "features": "impf.1s",
              "root": "س ب ق",
              "pos": "verb",
              "gloss": "to precede, outrun, win a race"
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
              "surface": "الْمَرَّةِ",
              "lemma": "مرة",
              "features": "def.gen",
              "root": "م ر ر",
              "pos": "noun",
              "gloss": "time, occasion"
            },
            {
              "surface": "الثَّانِيَةِ",
              "lemma": "ثانية",
              "features": "def.gen",
              "root": "ث ن ي",
              "pos": "adj",
              "gloss": "second (ordinal)"
            },
            {
              "surface": "عِنْدَ",
              "lemma": "عند",
              "features": "prep",
              "root": "ع ن د",
              "pos": "prep",
              "gloss": "at, by, during"
            },
            {
              "surface": "انْتِهَاءِ",
              "lemma": "انتهاء",
              "features": "gen.constr",
              "root": "ن ه ي",
              "pos": "noun",
              "gloss": "end, conclusion"
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
          "q": "مَنْ كَانَ الْمُجَلِّيَ فِيْ جَرْيِ خَالِدٍ؟",
          "options": [
            "خَالِدٌ",
            "الرَّاوِيْ",
            "أَخُو الرَّاوِيْ"
          ],
          "answer": 0,
          "qEn": "Who was the winner in Khalid's heat?",
          "optionsEn": [
            "Khalid",
            "The narrator",
            "The narrator's brother"
          ]
        },
        {
          "q": "لِمَاذَا كَانَ إِخْوَانُ الرَّاوِيْ يَظُنُّوْنَ أَنَّهُ سَيَكُوْنُ الْمُجَلِّيَ؟",
          "options": [
            "لِأَنَّهُ خَفِيْفٌ وَسَرِيْعٌ وَيَجْرِيْ كُلَّ يَوْمٍ",
            "لِأَنَّهُ أَكْبَرُ الْإِخْوَةِ",
            "لِأَنَّهُ فَازَ فِي الْعَامِ الْمَاضِيْ"
          ],
          "answer": 0,
          "qEn": "Why did the narrator's brothers think he would be the winner?",
          "optionsEn": [
            "Because he is light and fast and runs every day",
            "Because he is the eldest brother",
            "Because he won last year"
          ]
        }
      ]
    },
    {
      "id": "p7",
      "en": "The teacher closed with a reminder that the Prophet ﷺ himself used to race and his companions raced one another, so a Muslim should stay energetic, agile, and strong, lest he fall short in jihad.",
      "sentences": [
        {
          "id": "qr1-10-047",
          "page": 59,
          "ar": "وَخَطَبَ الْأُسْتَاذُ فِي الْأَخِيْرِ.",
          "en": "And the teacher gave a talk at the end,",
          "tokens": [
            {
              "surface": "وَخَطَبَ",
              "lemma": "خطب",
              "features": "conj+perf.3ms",
              "root": "خ ط ب",
              "pos": "verb",
              "gloss": "to give a speech, address"
            },
            {
              "surface": "الْأُسْتَاذُ",
              "lemma": "أستاذ",
              "features": "def.nom",
              "root": "",
              "pos": "noun",
              "gloss": "teacher, professor"
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
              "surface": "الْأَخِيْرِ",
              "lemma": "آخر",
              "features": "def.gen",
              "root": "أ خ ر",
              "pos": "adj",
              "gloss": "end, last part; last, final"
            }
          ]
        },
        {
          "id": "qr1-10-048",
          "page": 59,
          "ar": "وَقَالَ: إِنَّ النَّبِيَّ ﷺ كَانَ يُسَابِقُ.",
          "en": "and said: \"The Prophet ﷺ used to race,",
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
              "surface": "إِنَّ",
              "lemma": "إن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed; that"
            },
            {
              "surface": "النَّبِيَّ",
              "lemma": "نبي",
              "features": "def.acc",
              "root": "ن ب أ",
              "pos": "noun",
              "gloss": "prophet"
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
              "surface": "يُسَابِقُ",
              "lemma": "سابق",
              "features": "impf.3ms",
              "root": "س ب ق",
              "pos": "verb",
              "gloss": "to race, compete against"
            }
          ]
        },
        {
          "id": "qr1-10-049",
          "page": 59,
          "ar": "وَكَانَ أَصْحَابُهُ يَتَسَابَقُوْنَ.",
          "en": "and his companions used to race one another,",
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
              "surface": "أَصْحَابُهُ",
              "lemma": "أصحاب",
              "features": "pl.nom+3ms",
              "root": "ص ح ب",
              "pos": "noun",
              "gloss": "companions"
            },
            {
              "surface": "يَتَسَابَقُوْنَ",
              "lemma": "تسابق",
              "features": "impf.3mp",
              "root": "س ب ق",
              "pos": "verb",
              "gloss": "to race one another, compete amongst themselves"
            }
          ]
        },
        {
          "id": "qr1-10-050",
          "page": 59,
          "ar": "وَيَنْبَغِيْ لِلْمُسْلِمِ أَنْ يَكُوْنَ نَشِيْطًا خَفِيْفًا قَوِيًّا.",
          "en": "and it behooves a Muslim to be energetic, agile, and strong,",
          "tokens": [
            {
              "surface": "وَيَنْبَغِيْ",
              "lemma": "ينبغي",
              "features": "conj+impf.3ms",
              "root": "ب غ ي",
              "pos": "verb",
              "gloss": "to be fitting, proper; should"
            },
            {
              "surface": "لِلْمُسْلِمِ",
              "lemma": "مسلم",
              "features": "prep+def.gen",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "Muslim"
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
              "surface": "يَكُوْنَ",
              "lemma": "كان",
              "features": "impf.3ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "نَشِيْطًا",
              "lemma": "نشيط",
              "features": "indef.acc",
              "root": "ن ش ط",
              "pos": "adj",
              "gloss": "energetic, active"
            },
            {
              "surface": "خَفِيْفًا",
              "lemma": "خفيف",
              "features": "indef.acc",
              "root": "خ ف ف",
              "pos": "adj",
              "gloss": "light, agile, nimble"
            },
            {
              "surface": "قَوِيًّا",
              "lemma": "قوي",
              "features": "indef.acc",
              "root": "ق و ي",
              "pos": "adj",
              "gloss": "strong"
            }
          ]
        },
        {
          "id": "qr1-10-051",
          "page": 59,
          "ar": "حَتَّىٰ لَا يَعْجِزُ فِي الْجِهَادِ.",
          "en": "so that he does not fall short in jihad.\"",
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
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
            },
            {
              "surface": "يَعْجِزُ",
              "lemma": "عجز",
              "features": "impf.3ms",
              "root": "ع ج ز",
              "pos": "verb",
              "gloss": "to be incapable, fail, fall short"
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
              "surface": "الْجِهَادِ",
              "lemma": "جهاد",
              "features": "def.gen",
              "root": "ج ه د",
              "pos": "noun",
              "gloss": "striving, jihad"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا خَتَمَ الْأُسْتَاذُ حَدِيْثَهُ؟",
          "options": [
            "بِأَنَّ النَّبِيَّ ﷺ كَانَ يُسَابِقُ وَأَصْحَابَهُ يَتَسَابَقُوْنَ",
            "بِدُعَاءٍ لِلطُّلَّابِ",
            "بِسُؤَالٍ عَنِ الْجَرْيِ"
          ],
          "answer": 0,
          "qEn": "What did the teacher conclude his talk with?",
          "optionsEn": [
            "That the Prophet ﷺ used to race and his companions used to race one another",
            "With a prayer for the students",
            "With a question about running"
          ]
        },
        {
          "q": "مَاذَا يَنْبَغِيْ لِلْمُسْلِمِ أَنْ يَكُوْنَ حَسَبَ كَلَامِ الْأُسْتَاذِ؟",
          "options": [
            "نَشِيْطًا خَفِيْفًا قَوِيًّا",
            "غَنِيًّا مَشْهُوْرًا",
            "هَادِئًا كَسُوْلًا"
          ],
          "answer": 0,
          "qEn": "According to the teacher, what should a Muslim be?",
          "optionsEn": [
            "Energetic, agile, and strong",
            "Rich and famous",
            "Calm and lazy"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "كَانَتْ أَمْسِ",
        "post": "فِي الْجَرْيِ فِيْ مَدْرَسَتِيْ",
        "en": "There was, yesterday, a race in running at my school.",
        "options": [
          "مُسَابَقَةٌ",
          "مُسَابَقَةً",
          "مُسَابَقَةٍ",
          "مُسَابَقَاتٌ"
        ],
        "answer": 0,
        "rationales": [
          "nominative — subject of كَانَ.",
          "accusative — wrong case for ism kāna.",
          "genitive — wrong case.",
          "plural — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "أَوَّلًا اخْتَارَ مُعَلِّمُ الرِّيَاضَةِ أَرْبَعَةً وَعِشْرِيْنَ",
        "post": "مِنْ جَمِيْعِ الصُّفُوْفِ",
        "en": "First the sports teacher chose twenty-four students from all the classes.",
        "options": [
          "طَالِبًا",
          "طَالِبٌ",
          "طَالِبٍ",
          "طُلَّابًا"
        ],
        "answer": 0,
        "rationales": [
          "accusative — tamyīz (specifier) after the number.",
          "nominative — wrong case.",
          "genitive — wrong case.",
          "plural — wrong number; the specifier after a number like this stays singular."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَقَدَّمَ",
        "post": "فِيْهِ مُحَمَّدٌ وَإِبْرَاهِيْمُ وَسَعِيْدٌ",
        "en": "And he brought forward a row with Muhammad, Ibrahim, and Sa'id in it.",
        "options": [
          "صَفًّا",
          "صَفٌّ",
          "صَفٍّ",
          "صُفُوْفًا"
        ],
        "answer": 0,
        "rationales": [
          "accusative — object of قَدَّمَ.",
          "nominative — wrong case.",
          "genitive — wrong case.",
          "plural — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَكَانَ",
        "post": "مُتَقَدِّمًا قَلِيْلًا",
        "en": "And Ibrahim had edged forward a little.",
        "options": [
          "إِبْرَاهِيْمُ",
          "إِبْرَاهِيْمَ",
          "إِبْرَاهِيْمِ",
          "إِبْرَاهِيْمُوْنَ"
        ],
        "answer": 0,
        "rationales": [
          "nominative — ism kāna.",
          "accusative — wrong case.",
          "genitive — wrong case.",
          "not a real plural form for a proper name."
        ]
      },
      {
        "type": "cloze",
        "pre": "حَتَّىٰ بَرَزَ",
        "post": "وَهَتَفَ الْأَوْلَادُ بِاسْمِهِ",
        "en": "Until Muhammad emerged, and the boys cheered his name.",
        "options": [
          "مُحَمَّدٌ",
          "مُحَمَّداً",
          "مُحَمَّدٍ",
          "مُحَمَّدُوْنَ"
        ],
        "answer": 0,
        "rationales": [
          "nominative — subject of بَرَزَ.",
          "accusative — wrong case.",
          "genitive — wrong case.",
          "not a real plural form for a proper name."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَجَاءَ",
        "post": "وَقُمْتُ فِيْ أَقْرَانِيْ وَأَكْفَائِيْ",
        "en": "And my turn came, and I stood among my peers and equals.",
        "options": [
          "دَوْرِيْ",
          "دَوْرِيَ",
          "دَوْراً",
          "أَدْوَارِيْ"
        ],
        "answer": 0,
        "rationales": [
          "nominative + 1s suffix — subject of جَاءَ, \"my turn.\"",
          "wrong case marking for the suffixed noun.",
          "indefinite accusative — wrong case, and drops the possessive suffix.",
          "plural — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَوَصَلْنَا إِلَى",
        "post": "وَكُنْتُ الْمُصَلِّيَ",
        "en": "And we arrived at the finish line, and I was the runner-up.",
        "options": [
          "الْغَايَةِ",
          "الْغَايَةُ",
          "الْغَايَةَ",
          "غَايَاتٍ"
        ],
        "answer": 0,
        "rationales": [
          "genitive — object of the preposition إِلَى.",
          "nominative — wrong case.",
          "accusative — wrong case.",
          "indefinite plural — wrong definiteness and number."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَكَانَ",
        "post": "الْمُجَلِّيَ",
        "en": "And Khalid was the winner.",
        "options": [
          "خَالِدٌ",
          "خَالِدًا",
          "خَالِدٍ",
          "خَالِدَانِ"
        ],
        "answer": 0,
        "rationales": [
          "nominative — ism kāna.",
          "accusative — wrong case.",
          "genitive — wrong case.",
          "dual — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "لِأَنِّيْ",
        "post": "وَسَرِيْعٌ وَأَجْرِيْ كُلَّ يَوْمٍ",
        "en": "Because I am light and fast, and I run every day.",
        "options": [
          "خَفِيْفٌ",
          "خَفِيْفًا",
          "خَفِيْفٍ",
          "أَخِفَّاءُ"
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
        "pre": "وَيَنْبَغِيْ لِلْمُسْلِمِ أَنْ يَكُوْنَ",
        "post": "خَفِيْفًا قَوِيًّا حَتَّىٰ لَا يَعْجِزُ فِي الْجِهَادِ",
        "en": "And it behooves the Muslim to be energetic, agile, and strong, so that he does not fall short in jihad.",
        "options": [
          "نَشِيْطًا",
          "نَشِيْطٌ",
          "نَشِيْطٍ",
          "نُشَطَاءُ"
        ],
        "answer": 0,
        "rationales": [
          "accusative — khabar of يَكُوْنَ.",
          "nominative — wrong case.",
          "genitive — wrong case.",
          "plural — wrong number."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "اخْتَارَ مُعَلِّمُ الرِّيَاضَةِ أَرْبَعَةً وَعِشْرِيْنَ طَالِبًا",
        "pre": "",
        "post": "مُعَلِّمُ الرِّيَاضَةِ أَرْبَعَةً وَعِشْرِيْنَ طَالِبًا",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "اخْتَرْتُ",
          "اخْتَارَ",
          "اخْتَرْتِ",
          "اخْتَرْنَا"
        ],
        "answer": 0,
        "rationales": [
          "1st singular perfect — I chose.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَقَفَ الْأُسْتَاذُ بِجَانِبِ الصُّفُوْفِ",
        "pre": "",
        "post": "بِجَانِبِ الصُّفُوْفِ",
        "targetPerson": "الْمُعَلِّمُوْنَ",
        "targetEn": "the teachers",
        "options": [
          "وَقَفَ",
          "وَقَفَتْ",
          "وَقَفُوا",
          "وَقَفْنَ"
        ],
        "answer": 2,
        "rationales": [
          "",
          "",
          "3rd masc. plural perfect — they (the teachers) stood.",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "قَالَ: قُوْمُوْا فِيْ صَفٍّ وَاحِدٍ",
        "pre": "قَالَ:",
        "post": "فِيْ صَفٍّ وَاحِدٍ",
        "targetPerson": "أَنْتَ",
        "targetEn": "you (m. sg.)",
        "options": [
          "قُمْ",
          "قُوْمُوْا",
          "قُوْمِيْ",
          "قُمْنَ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. singular imperative — stand!",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "بَرَزَ مُحَمَّدٌ",
        "pre": "",
        "post": "",
        "targetPerson": "الْأَوْلَادُ",
        "targetEn": "the boys",
        "options": [
          "بَرَزَ",
          "بَرَزَتْ",
          "بَرَزُوا",
          "بَرَزْنَ"
        ],
        "answer": 2,
        "rationales": [
          "",
          "",
          "3rd masc. plural perfect — they emerged.",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "لَحِقَهُ إِبْرَاهِيْمُ",
        "pre": "",
        "post": "إِبْرَاهِيْمُ",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "لَحِقْتُهُ",
          "لَحِقَهُ",
          "لَحِقَتْهُ",
          "لَحِقْنَاهُ"
        ],
        "answer": 0,
        "rationales": [
          "1st singular perfect + object suffix — I caught up with him.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَصَلْنَا إِلَى الْغَايَةِ",
        "pre": "",
        "post": "إِلَى الْغَايَةِ",
        "targetPerson": "هُمْ",
        "targetEn": "they (m.)",
        "options": [
          "وَصَلُوا",
          "وَصَلْنَا",
          "وَصَلَتْ",
          "وَصَلَ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. plural perfect — they arrived.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "كَانَ إِخْوَانِيْ يَظُنُّوْنَ أَنِّيْ أَنَا الْمُجَلِّيَ",
        "pre": "كَانَ إِخْوَانِيْ",
        "post": "أَنِّيْ أَنَا الْمُجَلِّيَ",
        "targetPerson": "أَخِيْ",
        "targetEn": "my brother (singular)",
        "options": [
          "يَظُنُّ",
          "يَظُنُّوْنَ",
          "تَظُنُّ",
          "يَظُنَّانِ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular — he thinks/supposes.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "أَبْطَأْتُ قَلِيْلًا عِنْدَ الْجَرْيِ",
        "pre": "",
        "post": "قَلِيْلًا عِنْدَ الْجَرْيِ",
        "targetPerson": "هُمْ",
        "targetEn": "they (m.)",
        "options": [
          "أَبْطَأُوا",
          "أَبْطَأْتُ",
          "أَبْطَأَتْ",
          "أَبْطَأْنَا"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. plural perfect — they lagged behind.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

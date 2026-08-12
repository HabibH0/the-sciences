// القراءة الراشدة, volume one, chapter thirteen -- الأمانة.
//
// Follows the shape of chapter-07.js -- see ../CHAPTER-FORMAT.md for the
// full specification. Hand-authored directly from the scanned pages
// (qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed pages 66-68); there
// is no JSON intermediate (see PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md --
// the pipeline no longer emits JSON).
//
// A third-person hadith-style narrative -- the famous hadith of the three
// men trapped in a cave by a boulder, each pleading to God by his own best
// deed (Sahih al-Bukhari/Muslim); this excerpt gives only the third man's
// account (the honest employer who invested an unclaimed wage). Same
// register as chapter-07.js's ghazwah narrative, no new structural handling
// needed. Two footnoted book_notes are carried on جحد and رقيق and انطبق
// (three total), matching the established footnote-as-book_note convention.
//
// Three vocabulary notes:
//   - عَمِلُوْا (Form I verb, "to work, do," e.g. فَاشْتَغَلُوْا وَعَمِلُوْا) is a
//     different word from the "عمل" already established in chapter-03.js and
//     chapter-09.js as a noun ("work, deed," e.g. الْعَمَلِ الصَّالِحِ, which also
//     appears in this chapter). Rather than overload the existing noun key,
//     the verb sense gets its own "عمل-يعمل" entry, following the
//     ذهب/ذهب-معدن naming pattern (existing sense keeps the bare key; the
//     new, differently-tagged sense gets a suffix).
//   - أَجْر ("reward; wage") and أُجْرَة ("wage, fee") are two distinct but
//     closely related nouns from the same root, used interchangeably for
//     "wage" throughout this chapter (much like عطش/ظمأ in chapter-12.js) --
//     kept as two ordinary, separate entries rather than a homograph pair,
//     since they are genuinely different words, not one word with two
//     senses.
//   - أَمِيْن here is the plain adjective "trustworthy" (e.g. كَرِيْمًا أَمِيْنًا,
//     هٰذَا الرَّجُلُ الْأَمِيْنُ). The same spelling was already established in
//     chapter-08.js as a substantive noun, "conductor, guard (lit.
//     trustworthy one)" -- that is the same underlying word used
//     substantively, not a different one, so it reuses chapter-08's key
//     rather than taking a homograph suffix; it is left out of this
//     chapter's newWords since the reader already met the word in chapter 8.
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch13",
  "number": 13,
  "title": {
    "ar": "اَلْأَمَانَةُ",
    "en": "The Trust"
  },
  "pages": [
    66,
    67,
    68
  ],
  "register": "third_person_narrative",
  "newWords": [
    "أمانة",
    "أجير",
    "أجرة",
    "دعوة",
    "تجارة",
    "غار",
    "صخرة",
    "جحد",
    "استهزأ",
    "دهش",
    "طمع",
    "وفاء"
  ],
  "lemmas": {
    "استأجر": {
      "root": "أ ج ر",
      "pos": "verb",
      "gloss": "to hire",
      "content": true
    },
    "رجل": {
      "root": "ر ج ل",
      "pos": "noun",
      "gloss": "man",
      "content": true
    },
    "قوم": {
      "root": "ق و م",
      "pos": "noun",
      "gloss": "people, folk",
      "content": true
    },
    "اشتغل": {
      "root": "ش غ ل",
      "pos": "verb",
      "gloss": "to work, be occupied",
      "content": true
    },
    "عمل-يعمل": {
      "root": "ع م ل",
      "pos": "verb",
      "gloss": "to work, do",
      "content": true
    },
    "لما": {
      "root": "—",
      "pos": "part",
      "gloss": "when (in the past)",
      "content": false
    },
    "فرغ": {
      "root": "ف ر غ",
      "pos": "verb",
      "gloss": "to finish, be free (of a task)",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "شغل": {
      "root": "ش غ ل",
      "pos": "verb",
      "gloss": "to occupy, keep busy",
      "content": true
    },
    "جاء": {
      "root": "ج ي أ",
      "pos": "verb",
      "gloss": "to come",
      "content": true
    },
    "إلى": {
      "root": "—",
      "pos": "prep",
      "gloss": "to, towards",
      "content": false
    },
    "أعطى": {
      "root": "ع ط و",
      "pos": "verb",
      "gloss": "to give",
      "content": true
    },
    "أجر": {
      "root": "أ ج ر",
      "pos": "noun",
      "gloss": "reward; wage",
      "content": true
    },
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "مع": {
      "root": "—",
      "pos": "prep",
      "gloss": "with",
      "content": false
    },
    "لكن": {
      "root": "—",
      "pos": "part",
      "gloss": "but",
      "content": false
    },
    "لم": {
      "root": "—",
      "pos": "part",
      "gloss": "not (with jussive, past negation)",
      "content": false
    },
    "أخذ": {
      "root": "أ خ ذ",
      "pos": "verb",
      "gloss": "to take",
      "content": true
    },
    "ترك": {
      "root": "ت ر ك",
      "pos": "verb",
      "gloss": "to leave",
      "content": true
    },
    "ذهب": {
      "root": "ذ ه ب",
      "pos": "verb",
      "gloss": "to go",
      "content": true
    },
    "كريم": {
      "root": "ك ر م",
      "pos": "adj",
      "gloss": "generous",
      "content": true
    },
    "أمين": {
      "root": "أ م ن",
      "pos": "adj",
      "gloss": "trustworthy",
      "content": true
    },
    "أكل": {
      "root": "أ ك ل",
      "pos": "verb",
      "gloss": "to eat",
      "content": true
    },
    "أجرة": {
      "root": "أ ج ر",
      "pos": "noun",
      "gloss": "wage, fee",
      "content": true
    },
    "انتفع": {
      "root": "ن ف ع",
      "pos": "verb",
      "gloss": "to benefit, profit",
      "content": true
    },
    "ب": {
      "root": "—",
      "pos": "prep",
      "gloss": "with, by",
      "content": false
    },
    "خاف": {
      "root": "خ و ف",
      "pos": "verb",
      "gloss": "to fear",
      "content": true
    },
    "الله": {
      "root": "—",
      "pos": "proper",
      "gloss": "Allah",
      "content": true
    },
    "وضع": {
      "root": "و ض ع",
      "pos": "verb",
      "gloss": "to put, place",
      "content": true
    },
    "تجارة": {
      "root": "ت ج ر",
      "pos": "noun",
      "gloss": "trade, commerce",
      "content": true
    },
    "ثمر": {
      "root": "ث م ر",
      "pos": "verb",
      "gloss": "to grow, invest (wealth)",
      "content": true,
      "book_note": "ثَمَّرَ يُثَمِّرُ تَثْمِيْراً فُلَانٌ مَالَهُ: نَمَّاهُ (to grow one's wealth: to increase it)"
    },
    "أثمر": {
      "root": "ث م ر",
      "pos": "verb",
      "gloss": "to yield, bear fruit",
      "content": true
    },
    "كثير": {
      "root": "ك ث ر",
      "pos": "adj",
      "gloss": "much, many",
      "content": true
    },
    "كثر": {
      "root": "ك ث ر",
      "pos": "verb",
      "gloss": "to become many, increase",
      "content": true
    },
    "مال": {
      "root": "م و ل",
      "pos": "noun",
      "gloss": "wealth, money",
      "content": true
    },
    "بعد": {
      "root": "—",
      "pos": "prep",
      "gloss": "after",
      "content": false
    },
    "حين": {
      "root": "ح ي ن",
      "pos": "noun",
      "gloss": "time, while, moment",
      "content": true
    },
    "أجير": {
      "root": "أ ج ر",
      "pos": "noun",
      "gloss": "hired worker, wage laborer",
      "content": true
    },
    "هو": {
      "root": "—",
      "pos": "noun",
      "gloss": "he, it",
      "content": false
    },
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that",
      "content": false
    },
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "not; no",
      "content": false
    },
    "عرف": {
      "root": "ع ر ف",
      "pos": "verb",
      "gloss": "to know, recognize",
      "content": true
    },
    "قد": {
      "root": "—",
      "pos": "part",
      "gloss": "already, indeed",
      "content": false
    },
    "طال": {
      "root": "ط و ل",
      "pos": "verb",
      "gloss": "to be long, lengthen",
      "content": true
    },
    "مدة": {
      "root": "م د د",
      "pos": "noun",
      "gloss": "period, duration",
      "content": true
    },
    "مضى": {
      "root": "م ض ي",
      "pos": "verb",
      "gloss": "to pass, elapse",
      "content": true
    },
    "زمن": {
      "root": "ز م ن",
      "pos": "noun",
      "gloss": "time, era",
      "content": true
    },
    "ماذا": {
      "root": "—",
      "pos": "part",
      "gloss": "what",
      "content": false
    },
    "فعل": {
      "root": "ف ع ل",
      "pos": "verb",
      "gloss": "to do",
      "content": true
    },
    "مسكين": {
      "root": "س ك ن",
      "pos": "noun",
      "gloss": "poor person, wretched one",
      "content": true
    },
    "إن": {
      "root": "—",
      "pos": "part",
      "gloss": "if; indeed; that",
      "content": false
    },
    "أو": {
      "root": "—",
      "pos": "part",
      "gloss": "or",
      "content": false
    },
    "نسي": {
      "root": "ن س ي",
      "pos": "verb",
      "gloss": "to forget",
      "content": true
    },
    "قصة": {
      "root": "ق ص ص",
      "pos": "noun",
      "gloss": "story",
      "content": true
    },
    "طمع": {
      "root": "ط م ع",
      "pos": "verb",
      "gloss": "to covet, hope greedily",
      "content": true
    },
    "إلا": {
      "root": "—",
      "pos": "part",
      "gloss": "except; only",
      "content": false
    },
    "قليل": {
      "root": "ق ل ل",
      "pos": "adv",
      "gloss": "a little, slightly",
      "content": true
    },
    "درهم": {
      "root": "د ر ه م",
      "pos": "noun",
      "gloss": "dirham (a coin)",
      "content": true
    },
    "عد": {
      "root": "ع د د",
      "pos": "verb",
      "gloss": "to count",
      "content": true
    },
    "إذا": {
      "root": "—",
      "pos": "part",
      "gloss": "if, when",
      "content": false
    },
    "جحد": {
      "root": "ج ح د",
      "pos": "verb",
      "gloss": "to deny, repudiate",
      "content": true,
      "book_note": "جَحَدَ يَجْحَدُ جَحْداً وَجُحُوْداً فُلَانٌ الأَمْرَ: أَنْكَرَهُ مَعَ عِلْمِهِ بِهِ (to deny something while knowing it to be true)"
    },
    "دفع": {
      "root": "د ف ع",
      "pos": "verb",
      "gloss": "to pay, push",
      "content": true
    },
    "رجع": {
      "root": "ر ج ع",
      "pos": "verb",
      "gloss": "to return",
      "content": true
    },
    "خاب": {
      "root": "خ ي ب",
      "pos": "verb",
      "gloss": "to fail, be disappointed, come back empty-handed",
      "content": true
    },
    "لأن": {
      "root": "—",
      "pos": "part",
      "gloss": "because",
      "content": false
    },
    "احتاج": {
      "root": "ح و ج",
      "pos": "verb",
      "gloss": "to need",
      "content": true
    },
    "هذه": {
      "root": "—",
      "pos": "noun",
      "gloss": "this (f.)",
      "content": false
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "يا": {
      "root": "—",
      "pos": "part",
      "gloss": "O (vocative)",
      "content": false
    },
    "عبد": {
      "root": "ع ب د",
      "pos": "noun",
      "gloss": "servant, slave",
      "content": true
    },
    "أدى": {
      "root": "أ د ي",
      "pos": "verb",
      "gloss": "to render, discharge, pay (a duty)",
      "content": true
    },
    "ما": {
      "root": "—",
      "pos": "part",
      "gloss": "not; what",
      "content": false
    },
    "أنكر": {
      "root": "ن ك ر",
      "pos": "verb",
      "gloss": "to deny, refuse to acknowledge",
      "content": true
    },
    "بل": {
      "root": "—",
      "pos": "part",
      "gloss": "rather",
      "content": false
    },
    "كل": {
      "root": "ك ل ل",
      "pos": "noun",
      "gloss": "each, every, all",
      "content": true
    },
    "رأى": {
      "root": "ر أ ي",
      "pos": "verb",
      "gloss": "to see",
      "content": true
    },
    "إبل": {
      "root": "إ ب ل",
      "pos": "noun",
      "gloss": "camels",
      "content": true
    },
    "بقر": {
      "root": "ب ق ر",
      "pos": "noun",
      "gloss": "cattle",
      "content": true
    },
    "غنم": {
      "root": "غ ن م",
      "pos": "noun",
      "gloss": "sheep, goats",
      "content": true
    },
    "رقيق": {
      "root": "ر ق ق",
      "pos": "noun",
      "gloss": "slaves, servants",
      "content": true,
      "book_note": "الرَّقِيْقُ (ج) الأَرِقَّاء: مَمْلُوْكٌ، عَبْدٌ (a slave, one who is owned)"
    },
    "دهش": {
      "root": "د ه ش",
      "pos": "verb",
      "gloss": "to be astonished",
      "content": true
    },
    "تحير": {
      "root": "ح ي ر",
      "pos": "verb",
      "gloss": "to be bewildered, perplexed",
      "content": true
    },
    "ظن": {
      "root": "ظ ن ن",
      "pos": "verb",
      "gloss": "to think, suppose",
      "content": true
    },
    "استهزأ": {
      "root": "ه ز أ",
      "pos": "verb",
      "gloss": "to mock, ridicule",
      "content": true
    },
    "ل": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to; belonging to",
      "content": false
    },
    "شيء": {
      "root": "ش ي أ",
      "pos": "noun",
      "gloss": "thing",
      "content": true
    },
    "رضي": {
      "root": "ر ض ي",
      "pos": "verb",
      "gloss": "to be pleased",
      "content": true
    },
    "عن": {
      "root": "—",
      "pos": "prep",
      "gloss": "from, away from; about",
      "content": false
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, on",
      "content": false
    },
    "أمانة": {
      "root": "أ م ن",
      "pos": "noun",
      "gloss": "trust, trustworthiness",
      "content": true
    },
    "وفاء": {
      "root": "و ف ي",
      "pos": "noun",
      "gloss": "faithfulness, fulfillment",
      "content": true
    },
    "كرم": {
      "root": "ك ر م",
      "pos": "noun",
      "gloss": "generosity",
      "content": true
    },
    "وقع": {
      "root": "و ق ع",
      "pos": "verb",
      "gloss": "to fall, happen, find oneself",
      "content": true
    },
    "هذا": {
      "root": "—",
      "pos": "noun",
      "gloss": "this",
      "content": false
    },
    "مرة": {
      "root": "م ر ر",
      "pos": "noun",
      "gloss": "time, occurrence",
      "content": true
    },
    "غار": {
      "root": "غ و ر",
      "pos": "noun",
      "gloss": "cave",
      "content": true
    },
    "انطبق": {
      "root": "ط ب ق",
      "pos": "verb",
      "gloss": "to close over, cover",
      "content": true,
      "book_note": "انْطَبَقَ عَلَيْهِ الشَّيْءُ: غَطَّاهُ وَسَتَرَهُ (something closed over him: it covered and concealed him)"
    },
    "صخرة": {
      "root": "ص خ ر",
      "pos": "noun",
      "gloss": "boulder, rock",
      "content": true
    },
    "يئس": {
      "root": "ي أ س",
      "pos": "verb",
      "gloss": "to despair",
      "content": true
    },
    "حياة": {
      "root": "ح ي ي",
      "pos": "noun",
      "gloss": "life",
      "content": true
    },
    "دعا": {
      "root": "د ع و",
      "pos": "verb",
      "gloss": "to invite; to pray for",
      "content": true
    },
    "عمل": {
      "root": "ع م ل",
      "pos": "noun",
      "gloss": "work, deed",
      "content": true
    },
    "صالح": {
      "root": "ص ل ح",
      "pos": "adj",
      "gloss": "righteous, good",
      "content": true
    },
    "اللهم": {
      "root": "—",
      "pos": "proper",
      "gloss": "O Allah! (vocative form of Allah)",
      "content": true
    },
    "ذلك": {
      "root": "—",
      "pos": "noun",
      "gloss": "that",
      "content": false
    },
    "ابتغاء": {
      "root": "ب غ ي",
      "pos": "noun",
      "gloss": "seeking, pursuit",
      "content": true
    },
    "وجه": {
      "root": "و ج ه",
      "pos": "noun",
      "gloss": "face",
      "content": true
    },
    "كشف": {
      "root": "ك ش ف",
      "pos": "verb",
      "gloss": "to remove, uncover",
      "content": true
    },
    "أجاب": {
      "root": "ج و ب",
      "pos": "verb",
      "gloss": "to answer, respond",
      "content": true
    },
    "دعوة": {
      "root": "د ع و",
      "pos": "noun",
      "gloss": "prayer, supplication, call",
      "content": true
    },
    "أعان": {
      "root": "ع و ن",
      "pos": "verb",
      "gloss": "to help, assist",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "A man hired a group of workers; when they finished and he paid them, one of them left without taking his wage.",
      "sentences": [
        {
          "id": "qr1-13-001",
          "page": 66,
          "ar": "اسْتَأْجَرَ رَجُلٌ قَوْمًا فَاشْتَغَلُوْا وَعَمِلُوْا.",
          "en": "A man hired a group of people, and they set to work and labored,",
          "tokens": [
            {
              "surface": "اسْتَأْجَرَ",
              "lemma": "استأجر",
              "features": "perf.3ms",
              "root": "أ ج ر",
              "pos": "verb",
              "gloss": "to hire"
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
              "surface": "قَوْمًا",
              "lemma": "قوم",
              "features": "indef.acc",
              "root": "ق و م",
              "pos": "noun",
              "gloss": "people, folk"
            },
            {
              "surface": "فَاشْتَغَلُوْا",
              "lemma": "اشتغل",
              "features": "conj+perf.3mp",
              "root": "ش غ ل",
              "pos": "verb",
              "gloss": "to work, be occupied"
            },
            {
              "surface": "وَعَمِلُوْا",
              "lemma": "عمل-يعمل",
              "features": "conj+perf.3mp",
              "root": "ع م ل",
              "pos": "verb",
              "gloss": "to work, do"
            }
          ]
        },
        {
          "id": "qr1-13-002",
          "page": 66,
          "ar": "وَلَمَّا فَرَغُوْا مِنْ شُغْلِهِمْ جَاؤُوْا إِلَيْهِ فَأَعْطَاهُمْ أَجْرَهُمْ.",
          "en": "and when they finished their work they came to him, and he gave them their wages,",
          "tokens": [
            {
              "surface": "وَلَمَّا",
              "lemma": "لما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "when (in the past)"
            },
            {
              "surface": "فَرَغُوْا",
              "lemma": "فرغ",
              "features": "perf.3mp",
              "root": "ف ر غ",
              "pos": "verb",
              "gloss": "to finish, be free (of a task)"
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
              "surface": "شُغْلِهِمْ",
              "lemma": "شغل",
              "features": "gen+3mp",
              "root": "ش غ ل",
              "pos": "noun",
              "gloss": "work, occupation"
            },
            {
              "surface": "جَاؤُوْا",
              "lemma": "جاء",
              "features": "perf.3mp",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            },
            {
              "surface": "إِلَيْهِ",
              "lemma": "إلى",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "to, towards"
            },
            {
              "surface": "فَأَعْطَاهُمْ",
              "lemma": "أعطى",
              "features": "conj+perf.3ms+3mp",
              "root": "ع ط و",
              "pos": "verb",
              "gloss": "to give"
            },
            {
              "surface": "أَجْرَهُمْ",
              "lemma": "أجر",
              "features": "acc+3mp",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "reward; wage"
            }
          ]
        },
        {
          "id": "qr1-13-003",
          "page": 66,
          "ar": "وَكَانَ فِيْهِمْ رَجُلٌ اشْتَغَلَ مَعَهُمْ.",
          "en": "and among them was a man who had worked with them,",
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
              "surface": "فِيْهِمْ",
              "lemma": "في",
              "features": "prep+3mp",
              "root": "",
              "pos": "prep",
              "gloss": "in"
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
              "surface": "اشْتَغَلَ",
              "lemma": "اشتغل",
              "features": "perf.3ms",
              "root": "ش غ ل",
              "pos": "verb",
              "gloss": "to work, be occupied"
            },
            {
              "surface": "مَعَهُمْ",
              "lemma": "مع",
              "features": "prep+3mp",
              "root": "",
              "pos": "prep",
              "gloss": "with"
            }
          ]
        },
        {
          "id": "qr1-13-004",
          "page": 66,
          "ar": "وَلٰكِنَّهُ لَمْ يَأْخُذْ أَجْرَهُ وَتَرَكَهُ وَذَهَبَ.",
          "en": "but he did not take his wage -- he left it and went away.",
          "tokens": [
            {
              "surface": "وَلٰكِنَّهُ",
              "lemma": "لكن",
              "features": "conj+part+3ms",
              "root": "",
              "pos": "part",
              "gloss": "but"
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
              "surface": "يَأْخُذْ",
              "lemma": "أخذ",
              "features": "impf.3ms",
              "root": "أ خ ذ",
              "pos": "verb",
              "gloss": "to take"
            },
            {
              "surface": "أَجْرَهُ",
              "lemma": "أجر",
              "features": "acc+3ms",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "reward; wage"
            },
            {
              "surface": "وَتَرَكَهُ",
              "lemma": "ترك",
              "features": "conj+perf.3ms+3ms",
              "root": "ت ر ك",
              "pos": "verb",
              "gloss": "to leave"
            },
            {
              "surface": "وَذَهَبَ",
              "lemma": "ذهب",
              "features": "conj+perf.3ms",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلَ الرَّجُلُ الَّذِيْ اشْتَغَلَ مَعَ الْقَوْمِ؟",
          "options": [
            "لَمْ يَأْخُذْ أَجْرَهُ وَتَرَكَهُ وَذَهَبَ",
            "أَخَذَ أَجْرَهُ وَذَهَبَ",
            "طَلَبَ أَجْرًا أَكْثَرَ"
          ],
          "answer": 0,
          "qEn": "What did the man who worked with the group do?",
          "optionsEn": [
            "He did not take his wage -- he left it and went away",
            "He took his wage and left",
            "He asked for more wages"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "The employer was generous and trustworthy: he did not touch the wage or benefit from it himself, but feared God and invested it, and it grew into much wealth.",
      "sentences": [
        {
          "id": "qr1-13-005",
          "page": 66,
          "ar": "وَكَانَ الرَّجُلُ كَرِيْمًا أَمِيْنًا.",
          "en": "The man was generous and trustworthy,",
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
              "surface": "الرَّجُلُ",
              "lemma": "رجل",
              "features": "def.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
            },
            {
              "surface": "كَرِيْمًا",
              "lemma": "كريم",
              "features": "indef.acc",
              "root": "ك ر م",
              "pos": "adj",
              "gloss": "generous"
            },
            {
              "surface": "أَمِيْنًا",
              "lemma": "أمين",
              "features": "indef.acc",
              "root": "أ م ن",
              "pos": "adj",
              "gloss": "trustworthy"
            }
          ]
        },
        {
          "id": "qr1-13-006",
          "page": 66,
          "ar": "فَلَمْ يَأْكُلْ أُجْرَتَهُ وَلَمْ يَنْتَفِعْ بِهَا.",
          "en": "so he did not consume his wage, nor benefit from it,",
          "tokens": [
            {
              "surface": "فَلَمْ",
              "lemma": "لم",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not (with jussive, past negation)"
            },
            {
              "surface": "يَأْكُلْ",
              "lemma": "أكل",
              "features": "impf.3ms",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            },
            {
              "surface": "أُجْرَتَهُ",
              "lemma": "أجرة",
              "features": "acc+3ms",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "wage, fee"
            },
            {
              "surface": "وَلَمْ",
              "lemma": "لم",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not (with jussive, past negation)"
            },
            {
              "surface": "يَنْتَفِعْ",
              "lemma": "انتفع",
              "features": "impf.3ms",
              "root": "ن ف ع",
              "pos": "verb",
              "gloss": "to benefit, profit"
            },
            {
              "surface": "بِهَا",
              "lemma": "ب",
              "features": "prep+3fs",
              "root": "",
              "pos": "prep",
              "gloss": "with, by"
            }
          ]
        },
        {
          "id": "qr1-13-007",
          "page": 66,
          "ar": "وَخَافَ اللهَ وَوَضَعَهَا فِي التِّجَارَةِ وَثَمَّرَهَا.",
          "en": "he feared God, and put it into trade, and invested it,",
          "tokens": [
            {
              "surface": "وَخَافَ",
              "lemma": "خاف",
              "features": "conj+perf.3ms",
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
              "surface": "وَوَضَعَهَا",
              "lemma": "وضع",
              "features": "conj+perf.3ms+3fs",
              "root": "و ض ع",
              "pos": "verb",
              "gloss": "to put, place"
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
              "surface": "التِّجَارَةِ",
              "lemma": "تجارة",
              "features": "def.gen",
              "root": "ت ج ر",
              "pos": "noun",
              "gloss": "trade, commerce"
            },
            {
              "surface": "وَثَمَّرَهَا",
              "lemma": "ثمر",
              "features": "conj+perf.3ms+3fs",
              "root": "ث م ر",
              "pos": "verb",
              "gloss": "to grow, invest (wealth)"
            }
          ]
        },
        {
          "id": "qr1-13-008",
          "page": 66,
          "ar": "وَأَثْمَرَتِ الْأُجْرَةُ كَثِيْرًا وَكَثُرَتْ مِنْهَا الْأَمْوَالُ.",
          "en": "and the wage yielded much, and wealth multiplied from it.",
          "tokens": [
            {
              "surface": "وَأَثْمَرَتِ",
              "lemma": "أثمر",
              "features": "conj+perf.3fs",
              "root": "ث م ر",
              "pos": "verb",
              "gloss": "to yield, bear fruit"
            },
            {
              "surface": "الْأُجْرَةُ",
              "lemma": "أجرة",
              "features": "def.nom",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "wage, fee"
            },
            {
              "surface": "كَثِيْرًا",
              "lemma": "كثير",
              "features": "acc",
              "root": "ك ث ر",
              "pos": "adj",
              "gloss": "much, many"
            },
            {
              "surface": "وَكَثُرَتْ",
              "lemma": "كثر",
              "features": "conj+perf.3fs",
              "root": "ك ث ر",
              "pos": "verb",
              "gloss": "to become many, increase"
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
              "surface": "الْأَمْوَالُ",
              "lemma": "مال",
              "features": "def.pl.nom",
              "root": "م و ل",
              "pos": "noun",
              "gloss": "wealth, money"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلَ الرَّجُلُ بِأُجْرَةِ الْأَجِيْرِ؟",
          "options": [
            "وَضَعَهَا فِي التِّجَارَةِ وَثَمَّرَهَا",
            "أَكَلَهَا",
            "أَعْطَاهَا لِلْفُقَرَاءِ"
          ],
          "answer": 0,
          "qEn": "What did the man do with the worker's wage?",
          "optionsEn": [
            "He put it into trade and invested it",
            "He spent it on himself",
            "He gave it to the poor"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "After a long while the hired worker returned, worried the man wouldn't recognize him -- so much time had passed, what would he do if the man had forgotten him?",
      "sentences": [
        {
          "id": "qr1-13-009",
          "page": 66,
          "ar": "وَبَعْدَ حِيْنٍ جَاءَهُ الْأَجِيْرُ وَهُوَ خَائِفٌ أَنْ لَا يَعْرِفَهُ الرَّجُلُ.",
          "en": "After a while the hired worker came to him, fearing the man would not recognize him,",
          "tokens": [
            {
              "surface": "وَبَعْدَ",
              "lemma": "بعد",
              "features": "conj+prep",
              "root": "",
              "pos": "prep",
              "gloss": "after"
            },
            {
              "surface": "حِيْنٍ",
              "lemma": "حين",
              "features": "indef.gen",
              "root": "ح ي ن",
              "pos": "noun",
              "gloss": "time, while, moment"
            },
            {
              "surface": "جَاءَهُ",
              "lemma": "جاء",
              "features": "perf.3ms+3ms",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            },
            {
              "surface": "الْأَجِيْرُ",
              "lemma": "أجير",
              "features": "def.nom",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "hired worker, wage laborer"
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
              "surface": "خَائِفٌ",
              "lemma": "خاف",
              "features": "indef.nom",
              "root": "خ و ف",
              "pos": "adj",
              "gloss": "afraid, fearful"
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
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
            },
            {
              "surface": "يَعْرِفَهُ",
              "lemma": "عرف",
              "features": "impf.3ms+3ms",
              "root": "ع ر ف",
              "pos": "verb",
              "gloss": "to know, recognize"
            },
            {
              "surface": "الرَّجُلُ",
              "lemma": "رجل",
              "features": "def.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
            }
          ]
        },
        {
          "id": "qr1-13-010",
          "page": 66,
          "ar": "فَقَدْ طَالَتِ الْمُدَّةُ وَمَضَىٰ زَمَنٌ كَثِيْرٌ.",
          "en": "for a long time had passed, and much time had gone by,",
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
              "surface": "طَالَتِ",
              "lemma": "طال",
              "features": "perf.3fs",
              "root": "ط و ل",
              "pos": "verb",
              "gloss": "to be long, lengthen"
            },
            {
              "surface": "الْمُدَّةُ",
              "lemma": "مدة",
              "features": "def.nom",
              "root": "م د د",
              "pos": "noun",
              "gloss": "period, duration"
            },
            {
              "surface": "وَمَضَىٰ",
              "lemma": "مضى",
              "features": "conj+perf.3ms",
              "root": "م ض ي",
              "pos": "verb",
              "gloss": "to pass, elapse"
            },
            {
              "surface": "زَمَنٌ",
              "lemma": "زمن",
              "features": "indef.nom",
              "root": "ز م ن",
              "pos": "noun",
              "gloss": "time, era"
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
          "id": "qr1-13-011",
          "page": 66,
          "ar": "وَمَاذَا يَفْعَلُ الْمِسْكِيْنُ إِنْ لَمْ يَعْرِفْهُ الرَّجُلُ أَوْ نَسِيَ قِصَّتَهُ؟",
          "en": "and what would the poor man do if the man didn't recognize him, or had forgotten his story?",
          "tokens": [
            {
              "surface": "وَمَاذَا",
              "lemma": "ماذا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "what"
            },
            {
              "surface": "يَفْعَلُ",
              "lemma": "فعل",
              "features": "impf.3ms",
              "root": "ف ع ل",
              "pos": "verb",
              "gloss": "to do"
            },
            {
              "surface": "الْمِسْكِيْنُ",
              "lemma": "مسكين",
              "features": "def.nom",
              "root": "س ك ن",
              "pos": "noun",
              "gloss": "poor person, wretched one"
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
              "surface": "لَمْ",
              "lemma": "لم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not (with jussive, past negation)"
            },
            {
              "surface": "يَعْرِفْهُ",
              "lemma": "عرف",
              "features": "impf.3ms+3ms",
              "root": "ع ر ف",
              "pos": "verb",
              "gloss": "to know, recognize"
            },
            {
              "surface": "الرَّجُلُ",
              "lemma": "رجل",
              "features": "def.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
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
              "surface": "نَسِيَ",
              "lemma": "نسي",
              "features": "perf.3ms",
              "root": "ن س ي",
              "pos": "verb",
              "gloss": "to forget"
            },
            {
              "surface": "قِصَّتَهُ",
              "lemma": "قصة",
              "features": "acc+3ms",
              "root": "ق ص ص",
              "pos": "noun",
              "gloss": "story"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا كَانَ الْأَجِيْرُ خَائِفًا لَمَّا رَجَعَ إِلَى الرَّجُلِ؟",
          "options": [
            "خَافَ أَنْ لَا يَعْرِفَهُ الرَّجُلُ لِطُوْلِ الْمُدَّةِ",
            "خَافَ مِنَ السَّفَرِ",
            "خَافَ أَنْ يُعَاقِبَهُ الرَّجُلُ"
          ],
          "answer": 0,
          "qEn": "Why was the worker afraid when he returned to the man?",
          "optionsEn": [
            "He feared the man wouldn't recognize him, since so much time had passed",
            "He feared the journey",
            "He feared the man would punish him"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "The worker came hoping for nothing but his modest wage -- a few counted dirhams -- and feared the man might deny it and send him away empty-handed.",
      "sentences": [
        {
          "id": "qr1-13-012",
          "page": 67,
          "ar": "جَاءَ الْأَجِيْرُ وَهُوَ لَا يَطْمَعُ إِلَّا فِيْ أُجْرَتِهِ الْقَلِيْلَةِ دَرَاهِمَ مَعْدُوْدَةٍ.",
          "en": "The worker came, hoping for nothing but his modest wage -- a few counted dirhams,",
          "tokens": [
            {
              "surface": "جَاءَ",
              "lemma": "جاء",
              "features": "perf.3ms",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            },
            {
              "surface": "الْأَجِيْرُ",
              "lemma": "أجير",
              "features": "def.nom",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "hired worker, wage laborer"
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
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
            },
            {
              "surface": "يَطْمَعُ",
              "lemma": "طمع",
              "features": "impf.3ms",
              "root": "ط م ع",
              "pos": "verb",
              "gloss": "to covet, hope greedily"
            },
            {
              "surface": "إِلَّا",
              "lemma": "إلا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "except; only"
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
              "surface": "أُجْرَتِهِ",
              "lemma": "أجرة",
              "features": "gen+3ms",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "wage, fee"
            },
            {
              "surface": "الْقَلِيْلَةِ",
              "lemma": "قليل",
              "features": "def.gen",
              "root": "ق ل ل",
              "pos": "adj",
              "gloss": "a little, slightly"
            },
            {
              "surface": "دَرَاهِمَ",
              "lemma": "درهم",
              "features": "indef.gen",
              "root": "د ر ه م",
              "pos": "noun",
              "gloss": "dirham (a coin)"
            },
            {
              "surface": "مَعْدُوْدَةٍ",
              "lemma": "عد",
              "features": "indef.gen",
              "root": "ع د د",
              "pos": "adj",
              "gloss": "counted, numbered"
            }
          ]
        },
        {
          "id": "qr1-13-013",
          "page": 67,
          "ar": "وَإِذَا جَحَدَهَا الرَّجُلُ وَلَمْ يَدْفَعْهَا رَجَعَ خَائِبًا.",
          "en": "and if the man denied it and did not pay it, he would go back disappointed.",
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
              "surface": "جَحَدَهَا",
              "lemma": "جحد",
              "features": "perf.3ms+3fs",
              "root": "ج ح د",
              "pos": "verb",
              "gloss": "to deny, repudiate"
            },
            {
              "surface": "الرَّجُلُ",
              "lemma": "رجل",
              "features": "def.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
            },
            {
              "surface": "وَلَمْ",
              "lemma": "لم",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not (with jussive, past negation)"
            },
            {
              "surface": "يَدْفَعْهَا",
              "lemma": "دفع",
              "features": "impf.3ms+3fs",
              "root": "د ف ع",
              "pos": "verb",
              "gloss": "to pay, push"
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
              "surface": "خَائِبًا",
              "lemma": "خاب",
              "features": "indef.acc",
              "root": "خ ي ب",
              "pos": "adj",
              "gloss": "disappointed, empty-handed"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا كَانَ الْأَجِيْرُ يَطْمَعُ؟",
          "options": [
            "فِيْ أُجْرَتِهِ الْقَلِيْلَةِ دَرَاهِمَ مَعْدُوْدَةٍ",
            "فِيْ نِصْفِ أَمْوَالِ الرَّجُلِ",
            "فِيْ الْإِبِلِ وَالْبَقَرِ"
          ],
          "answer": 0,
          "qEn": "What was the worker hoping for?",
          "optionsEn": [
            "His modest wage -- a few counted dirhams",
            "Half the man's wealth",
            "The camels and cattle"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "The worker came because he needed the money and asked for his wage; the man neither denied nor refused it -- instead he said everything the worker sees of camels, cattle, sheep, and servants is his wage.",
      "sentences": [
        {
          "id": "qr1-13-014",
          "page": 67,
          "ar": "وَلٰكِنَّهُ جَاءَهُ لِأَنَّهُ يَحْتَاجُ إِلَىٰ هٰذِهِ الدَّرَاهِمِ.",
          "en": "But he came to him because he needed these dirhams,",
          "tokens": [
            {
              "surface": "وَلٰكِنَّهُ",
              "lemma": "لكن",
              "features": "conj+part+3ms",
              "root": "",
              "pos": "part",
              "gloss": "but"
            },
            {
              "surface": "جَاءَهُ",
              "lemma": "جاء",
              "features": "perf.3ms+3ms",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            },
            {
              "surface": "لِأَنَّهُ",
              "lemma": "لأن",
              "features": "part+3ms",
              "root": "",
              "pos": "part",
              "gloss": "because"
            },
            {
              "surface": "يَحْتَاجُ",
              "lemma": "احتاج",
              "features": "impf.3ms",
              "root": "ح و ج",
              "pos": "verb",
              "gloss": "to need"
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
              "surface": "هٰذِهِ",
              "lemma": "هذه",
              "features": "gen",
              "root": "",
              "pos": "noun",
              "gloss": "this (f.)"
            },
            {
              "surface": "الدَّرَاهِمِ",
              "lemma": "درهم",
              "features": "def.gen",
              "root": "د ر ه م",
              "pos": "noun",
              "gloss": "dirham (a coin)"
            }
          ]
        },
        {
          "id": "qr1-13-015",
          "page": 67,
          "ar": "فَقَالَ: يَا عَبْدَ اللهِ! أَدِّ إِلَيَّ أَجْرِيْ.",
          "en": "and said: O servant of God, give me my wage.",
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
              "surface": "يَا",
              "lemma": "يا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "O (vocative)"
            },
            {
              "surface": "عَبْدَ",
              "lemma": "عبد",
              "features": "acc.constr",
              "root": "ع ب د",
              "pos": "noun",
              "gloss": "servant, slave"
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
              "surface": "أَدِّ",
              "lemma": "أدى",
              "features": "imp.2ms",
              "root": "أ د ي",
              "pos": "verb",
              "gloss": "to render, discharge, pay (a duty)"
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
              "surface": "أَجْرِيْ",
              "lemma": "أجر",
              "features": "nom+1s",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "reward; wage"
            }
          ]
        },
        {
          "id": "qr1-13-016",
          "page": 67,
          "ar": "فَمَا جَحَدَ الرَّجُلُ وَمَا أَنْكَرَ.",
          "en": "The man neither denied it nor refused,",
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
              "surface": "جَحَدَ",
              "lemma": "جحد",
              "features": "perf.3ms",
              "root": "ج ح د",
              "pos": "verb",
              "gloss": "to deny, repudiate"
            },
            {
              "surface": "الرَّجُلُ",
              "lemma": "رجل",
              "features": "def.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
            },
            {
              "surface": "وَمَا",
              "lemma": "ما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not; what"
            },
            {
              "surface": "أَنْكَرَ",
              "lemma": "أنكر",
              "features": "perf.3ms",
              "root": "ن ك ر",
              "pos": "verb",
              "gloss": "to deny, refuse to acknowledge"
            }
          ]
        },
        {
          "id": "qr1-13-017",
          "page": 67,
          "ar": "بَلْ قَالَ: كُلُّ مَا تَرَىٰ مِنَ الْإِبِلِ وَالْبَقَرِ وَالْغَنَمِ وَالرَّقِيْقِ مِنْ أَجْرِكَ.",
          "en": "rather he said: everything you see of camels, cattle, sheep, and servants is from your wage.",
          "tokens": [
            {
              "surface": "بَلْ",
              "lemma": "بل",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "rather"
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
              "surface": "كُلُّ",
              "lemma": "كل",
              "features": "nom.constr",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "each, every, all"
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
              "surface": "تَرَىٰ",
              "lemma": "رأى",
              "features": "impf.2ms",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
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
              "surface": "الْإِبِلِ",
              "lemma": "إبل",
              "features": "def.gen",
              "root": "إ ب ل",
              "pos": "noun",
              "gloss": "camels"
            },
            {
              "surface": "وَالْبَقَرِ",
              "lemma": "بقر",
              "features": "conj+def.gen",
              "root": "ب ق ر",
              "pos": "noun",
              "gloss": "cattle"
            },
            {
              "surface": "وَالْغَنَمِ",
              "lemma": "غنم",
              "features": "conj+def.gen",
              "root": "غ ن م",
              "pos": "noun",
              "gloss": "sheep, goats"
            },
            {
              "surface": "وَالرَّقِيْقِ",
              "lemma": "رقيق",
              "features": "conj+def.gen",
              "root": "ر ق ق",
              "pos": "noun",
              "gloss": "slaves, servants"
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
              "surface": "أَجْرِكَ",
              "lemma": "أجر",
              "features": "gen+2ms",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "reward; wage"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا أَجَابَ الرَّجُلُ الْأَجِيْرَ لَمَّا طَلَبَ أَجْرَهُ؟",
          "options": [
            "كُلُّ مَا تَرَىٰ مِنَ الْإِبِلِ وَالْبَقَرِ وَالْغَنَمِ وَالرَّقِيْقِ مِنْ أَجْرِكَ",
            "لَيْسَ عِنْدِيْ شَيْءٌ لَكَ",
            "انْتَظِرْ حَتَّىٰ الْغَدِ"
          ],
          "answer": 0,
          "qEn": "How did the man answer the worker when he asked for his wage?",
          "optionsEn": [
            "Everything you see of camels, cattle, sheep, and servants is from your wage",
            "I have nothing for you",
            "Wait until tomorrow"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "en": "The worker was astonished and bewildered, thinking he was being mocked, and asked the man not to make fun of him.",
      "sentences": [
        {
          "id": "qr1-13-018",
          "page": 67,
          "ar": "دُهِشَ الرَّجُلُ وَتَحَيَّرَ وَظَنَّ أَنَّهُ يَسْتَهْزِئُ بِهِ.",
          "en": "The man was astonished and bewildered, and thought he was being mocked,",
          "tokens": [
            {
              "surface": "دُهِشَ",
              "lemma": "دهش",
              "features": "perf.3ms",
              "root": "د ه ش",
              "pos": "verb",
              "gloss": "to be astonished"
            },
            {
              "surface": "الرَّجُلُ",
              "lemma": "رجل",
              "features": "def.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
            },
            {
              "surface": "وَتَحَيَّرَ",
              "lemma": "تحير",
              "features": "conj+perf.3ms",
              "root": "ح ي ر",
              "pos": "verb",
              "gloss": "to be bewildered, perplexed"
            },
            {
              "surface": "وَظَنَّ",
              "lemma": "ظن",
              "features": "conj+perf.3ms",
              "root": "ظ ن ن",
              "pos": "verb",
              "gloss": "to think, suppose"
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
              "surface": "يَسْتَهْزِئُ",
              "lemma": "استهزأ",
              "features": "impf.3ms",
              "root": "ه ز أ",
              "pos": "verb",
              "gloss": "to mock, ridicule"
            },
            {
              "surface": "بِهِ",
              "lemma": "ب",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "with, by"
            }
          ]
        },
        {
          "id": "qr1-13-019",
          "page": 67,
          "ar": "فَقَالَ: يَا عَبْدَ اللهِ لَا تَسْتَهْزِئْ بِيْ.",
          "en": "so he said: O servant of God, do not mock me.",
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
              "surface": "يَا",
              "lemma": "يا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "O (vocative)"
            },
            {
              "surface": "عَبْدَ",
              "lemma": "عبد",
              "features": "acc.constr",
              "root": "ع ب د",
              "pos": "noun",
              "gloss": "servant, slave"
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
              "gloss": "not; no"
            },
            {
              "surface": "تَسْتَهْزِئْ",
              "lemma": "استهزأ",
              "features": "impf.2ms",
              "root": "ه ز أ",
              "pos": "verb",
              "gloss": "to mock, ridicule"
            },
            {
              "surface": "بِيْ",
              "lemma": "ب",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "with, by"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا ظَنَّ الْأَجِيْرُ أَنَّ الرَّجُلَ يَسْتَهْزِئُ بِهِ؟",
          "options": [
            "لِأَنَّهُ عَرَضَ عَلَيْهِ الْإِبِلَ وَالْبَقَرَ وَالْغَنَمَ كُلَّهَا",
            "لِأَنَّهُ ضَحِكَ مِنْهُ",
            "لِأَنَّهُ لَمْ يَرُدَّ عَلَيْهِ"
          ],
          "answer": 0,
          "qEn": "Why did the worker think the man was mocking him?",
          "optionsEn": [
            "Because he offered him all the camels, cattle, and sheep",
            "Because he laughed at him",
            "Because he did not answer him"
          ]
        }
      ]
    },
    {
      "id": "p7",
      "en": "The man confirms he isn't joking: everything is truly the worker's, because he invested the wage in trade and it yielded these very animals and servants.",
      "sentences": [
        {
          "id": "qr1-13-020",
          "page": 67,
          "ar": "قَالَ الرَّجُلُ: لَا أَسْتَهْزِئُ بِكَ.",
          "en": "The man said: I am not mocking you,",
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
              "surface": "الرَّجُلُ",
              "lemma": "رجل",
              "features": "def.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
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
              "surface": "أَسْتَهْزِئُ",
              "lemma": "استهزأ",
              "features": "impf.1s",
              "root": "ه ز أ",
              "pos": "verb",
              "gloss": "to mock, ridicule"
            },
            {
              "surface": "بِكَ",
              "lemma": "ب",
              "features": "prep+2ms",
              "root": "",
              "pos": "prep",
              "gloss": "with, by"
            }
          ]
        },
        {
          "id": "qr1-13-021",
          "page": 67,
          "ar": "فَكُلُّ مَا تَرَىٰ مِنَ الْإِبِلِ وَالْبَقَرِ وَالْغَنَمِ وَالرَّقِيْقِ لَكَ.",
          "en": "everything you see of camels, cattle, sheep, and servants is yours,",
          "tokens": [
            {
              "surface": "فَكُلُّ",
              "lemma": "كل",
              "features": "conj+nom.constr",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "each, every, all"
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
              "surface": "تَرَىٰ",
              "lemma": "رأى",
              "features": "impf.2ms",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
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
              "surface": "الْإِبِلِ",
              "lemma": "إبل",
              "features": "def.gen",
              "root": "إ ب ل",
              "pos": "noun",
              "gloss": "camels"
            },
            {
              "surface": "وَالْبَقَرِ",
              "lemma": "بقر",
              "features": "conj+def.gen",
              "root": "ب ق ر",
              "pos": "noun",
              "gloss": "cattle"
            },
            {
              "surface": "وَالْغَنَمِ",
              "lemma": "غنم",
              "features": "conj+def.gen",
              "root": "غ ن م",
              "pos": "noun",
              "gloss": "sheep, goats"
            },
            {
              "surface": "وَالرَّقِيْقِ",
              "lemma": "رقيق",
              "features": "conj+def.gen",
              "root": "ر ق ق",
              "pos": "noun",
              "gloss": "slaves, servants"
            },
            {
              "surface": "لَكَ",
              "lemma": "ل",
              "features": "prep+2ms",
              "root": "",
              "pos": "prep",
              "gloss": "for, to; belonging to"
            }
          ]
        },
        {
          "id": "qr1-13-022",
          "page": 67,
          "ar": "فَإِنِّيْ قَدْ وَضَعْتُ أُجْرَتَكَ فِي التِّجَارَةِ وَثَمَّرْتُهَا.",
          "en": "for I put your wage into trade and grew it,",
          "tokens": [
            {
              "surface": "فَإِنِّيْ",
              "lemma": "إن",
              "features": "conj+part+1s",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed; that"
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
              "surface": "وَضَعْتُ",
              "lemma": "وضع",
              "features": "perf.1s",
              "root": "و ض ع",
              "pos": "verb",
              "gloss": "to put, place"
            },
            {
              "surface": "أُجْرَتَكَ",
              "lemma": "أجرة",
              "features": "acc+2ms",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "wage, fee"
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
              "surface": "التِّجَارَةِ",
              "lemma": "تجارة",
              "features": "def.gen",
              "root": "ت ج ر",
              "pos": "noun",
              "gloss": "trade, commerce"
            },
            {
              "surface": "وَثَمَّرْتُهَا",
              "lemma": "ثمر",
              "features": "conj+perf.1s+3fs",
              "root": "ث م ر",
              "pos": "verb",
              "gloss": "to grow, invest (wealth)"
            }
          ]
        },
        {
          "id": "qr1-13-023",
          "page": 67,
          "ar": "وَأَثْمَرَتْ هٰذِهِ الْإِبِلَ وَالْبَقَرَ وَالْغَنَمَ وَالرَّقِيْقَ.",
          "en": "and it yielded these camels, cattle, sheep, and servants.",
          "tokens": [
            {
              "surface": "وَأَثْمَرَتْ",
              "lemma": "أثمر",
              "features": "conj+perf.3fs",
              "root": "ث م ر",
              "pos": "verb",
              "gloss": "to yield, bear fruit"
            },
            {
              "surface": "هٰذِهِ",
              "lemma": "هذه",
              "features": "acc",
              "root": "",
              "pos": "noun",
              "gloss": "this (f.)"
            },
            {
              "surface": "الْإِبِلَ",
              "lemma": "إبل",
              "features": "def.acc",
              "root": "إ ب ل",
              "pos": "noun",
              "gloss": "camels"
            },
            {
              "surface": "وَالْبَقَرَ",
              "lemma": "بقر",
              "features": "conj+def.acc",
              "root": "ب ق ر",
              "pos": "noun",
              "gloss": "cattle"
            },
            {
              "surface": "وَالْغَنَمَ",
              "lemma": "غنم",
              "features": "conj+def.acc",
              "root": "غ ن م",
              "pos": "noun",
              "gloss": "sheep, goats"
            },
            {
              "surface": "وَالرَّقِيْقَ",
              "lemma": "رقيق",
              "features": "conj+def.acc",
              "root": "ر ق ق",
              "pos": "noun",
              "gloss": "slaves, servants"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَيْفَ حَصَلَ الرَّجُلُ عَلَى الْإِبِلِ وَالْبَقَرِ وَالْغَنَمِ وَالرَّقِيْقِ؟",
          "options": [
            "أَثْمَرَتْهَا أُجْرَةُ الْأَجِيْرِ الَّتِيْ ثَمَّرَهَا فِي التِّجَارَةِ",
            "اشْتَرَاهَا مِنَ السُّوْقِ",
            "وَرِثَهَا مِنْ أَبِيْهِ"
          ],
          "answer": 0,
          "qEn": "How did the man come to have the camels, cattle, sheep, and servants?",
          "optionsEn": [
            "The worker's wage, which he invested in trade, yielded them",
            "He bought them from the market",
            "He inherited them from his father"
          ]
        }
      ]
    },
    {
      "id": "p8",
      "en": "The worker took the camels, cattle, sheep, and servants, leaving nothing behind.",
      "sentences": [
        {
          "id": "qr1-13-024",
          "page": 67,
          "ar": "فَأَخَذَ الْأَجِيْرُ الْإِبِلَ وَالْبَقَرَ وَالْغَنَمَ وَالرَّقِيْقَ وَلَمْ يَتْرُكْ مِنْهَا شَيْئًا.",
          "en": "So the worker took the camels, cattle, sheep, and servants, and did not leave any of it behind.",
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
              "surface": "الْأَجِيْرُ",
              "lemma": "أجير",
              "features": "def.nom",
              "root": "أ ج ر",
              "pos": "noun",
              "gloss": "hired worker, wage laborer"
            },
            {
              "surface": "الْإِبِلَ",
              "lemma": "إبل",
              "features": "def.acc",
              "root": "إ ب ل",
              "pos": "noun",
              "gloss": "camels"
            },
            {
              "surface": "وَالْبَقَرَ",
              "lemma": "بقر",
              "features": "conj+def.acc",
              "root": "ب ق ر",
              "pos": "noun",
              "gloss": "cattle"
            },
            {
              "surface": "وَالْغَنَمَ",
              "lemma": "غنم",
              "features": "conj+def.acc",
              "root": "غ ن م",
              "pos": "noun",
              "gloss": "sheep, goats"
            },
            {
              "surface": "وَالرَّقِيْقَ",
              "lemma": "رقيق",
              "features": "conj+def.acc",
              "root": "ر ق ق",
              "pos": "noun",
              "gloss": "slaves, servants"
            },
            {
              "surface": "وَلَمْ",
              "lemma": "لم",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not (with jussive, past negation)"
            },
            {
              "surface": "يَتْرُكْ",
              "lemma": "ترك",
              "features": "impf.3ms",
              "root": "ت ر ك",
              "pos": "verb",
              "gloss": "to leave"
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
              "surface": "شَيْئًا",
              "lemma": "شيء",
              "features": "indef.acc",
              "root": "ش ي أ",
              "pos": "noun",
              "gloss": "thing"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "هَلْ تَرَكَ الْأَجِيْرُ شَيْئًا مِنَ الْإِبِلِ وَالْبَقَرِ وَالْغَنَمِ وَالرَّقِيْقِ؟",
          "options": [
            "لَا، أَخَذَهَا كُلَّهَا وَلَمْ يَتْرُكْ مِنْهَا شَيْئًا",
            "نَعَمْ، تَرَكَ نِصْفَهَا",
            "نَعَمْ، تَرَكَ الرَّقِيْقَ فَقَطْ"
          ],
          "answer": 0,
          "qEn": "Did the worker leave anything behind of the camels, cattle, sheep, and servants?",
          "optionsEn": [
            "No, he took it all and left nothing behind",
            "Yes, he left half of it",
            "Yes, he left only the servants"
          ]
        }
      ]
    },
    {
      "id": "p9",
      "en": "God was pleased with him for this trustworthiness, faithfulness, and generosity.",
      "sentences": [
        {
          "id": "qr1-13-025",
          "page": 67,
          "ar": "وَقَدْ رَضِيَ اللهُ عَنْهُ عَلَىٰ هٰذِهِ الْأَمَانَةِ وَالْوَفَاءِ وَالْكَرَمِ.",
          "en": "God was pleased with him for this trustworthiness, faithfulness, and generosity.",
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
              "surface": "رَضِيَ",
              "lemma": "رضي",
              "features": "perf.3ms",
              "root": "ر ض ي",
              "pos": "verb",
              "gloss": "to be pleased"
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
              "surface": "عَنْهُ",
              "lemma": "عن",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "from, away from; about"
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
              "surface": "هٰذِهِ",
              "lemma": "هذه",
              "features": "gen",
              "root": "",
              "pos": "noun",
              "gloss": "this (f.)"
            },
            {
              "surface": "الْأَمَانَةِ",
              "lemma": "أمانة",
              "features": "def.gen",
              "root": "أ م ن",
              "pos": "noun",
              "gloss": "trust, trustworthiness"
            },
            {
              "surface": "وَالْوَفَاءِ",
              "lemma": "وفاء",
              "features": "conj+def.gen",
              "root": "و ف ي",
              "pos": "noun",
              "gloss": "faithfulness, fulfillment"
            },
            {
              "surface": "وَالْكَرَمِ",
              "lemma": "كرم",
              "features": "conj+def.gen",
              "root": "ك ر م",
              "pos": "noun",
              "gloss": "generosity"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا رَضِيَ اللهُ عَنِ الرَّجُلِ؟",
          "options": [
            "بِالْأَمَانَةِ وَالْوَفَاءِ وَالْكَرَمِ",
            "بِكَثْرَةِ مَالِهِ",
            "بِكَثْرَةِ صَلَاتِهِ فَقَطْ"
          ],
          "answer": 0,
          "qEn": "What was God pleased with the man for?",
          "optionsEn": [
            "His trustworthiness, faithfulness, and generosity",
            "The abundance of his wealth",
            "His prayer alone"
          ]
        }
      ]
    },
    {
      "id": "p10",
      "en": "This honest man once found himself trapped in a cave when a boulder sealed it shut; despairing of life, he called on God by this very righteous deed, and God answered his prayer and freed him.",
      "sentences": [
        {
          "id": "qr1-13-026",
          "page": 67,
          "ar": "وَقَدْ وَقَعَ هٰذَا الرَّجُلُ الْأَمِيْنُ مَرَّةً فِيْ غَارٍ.",
          "en": "This honest man once found himself in a cave,",
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
              "surface": "وَقَعَ",
              "lemma": "وقع",
              "features": "perf.3ms",
              "root": "و ق ع",
              "pos": "verb",
              "gloss": "to fall, happen, find oneself"
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
              "surface": "الرَّجُلُ",
              "lemma": "رجل",
              "features": "def.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
            },
            {
              "surface": "الْأَمِيْنُ",
              "lemma": "أمين",
              "features": "def.nom",
              "root": "أ م ن",
              "pos": "adj",
              "gloss": "trustworthy"
            },
            {
              "surface": "مَرَّةً",
              "lemma": "مرة",
              "features": "indef.acc",
              "root": "م ر ر",
              "pos": "noun",
              "gloss": "time, occurrence"
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
              "surface": "غَارٍ",
              "lemma": "غار",
              "features": "indef.gen",
              "root": "غ و ر",
              "pos": "noun",
              "gloss": "cave"
            }
          ]
        },
        {
          "id": "qr1-13-027",
          "page": 68,
          "ar": "وَانْطَبَقَتْ عَلَيْهِ صَخْرَةٌ.",
          "en": "and a boulder closed over him,",
          "tokens": [
            {
              "surface": "وَانْطَبَقَتْ",
              "lemma": "انطبق",
              "features": "conj+perf.3fs",
              "root": "ط ب ق",
              "pos": "verb",
              "gloss": "to close over, cover"
            },
            {
              "surface": "عَلَيْهِ",
              "lemma": "على",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "upon, on"
            },
            {
              "surface": "صَخْرَةٌ",
              "lemma": "صخرة",
              "features": "indef.nom",
              "root": "ص خ ر",
              "pos": "noun",
              "gloss": "boulder, rock"
            }
          ]
        },
        {
          "id": "qr1-13-028",
          "page": 68,
          "ar": "فَلَمَّا يَئِسَ مِنَ الْحَيَاةِ دَعَا اللهَ بِهٰذَا الْعَمَلِ الصَّالِحِ.",
          "en": "and when he despaired of life, he called on God by this righteous deed,",
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
              "surface": "يَئِسَ",
              "lemma": "يئس",
              "features": "perf.3ms",
              "root": "ي أ س",
              "pos": "verb",
              "gloss": "to despair"
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
              "surface": "الْحَيَاةِ",
              "lemma": "حياة",
              "features": "def.gen",
              "root": "ح ي ي",
              "pos": "noun",
              "gloss": "life"
            },
            {
              "surface": "دَعَا",
              "lemma": "دعا",
              "features": "perf.3ms",
              "root": "د ع و",
              "pos": "verb",
              "gloss": "to invite; to pray for"
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
              "surface": "بِهٰذَا",
              "lemma": "هذا",
              "features": "prep+gen",
              "root": "",
              "pos": "noun",
              "gloss": "this"
            },
            {
              "surface": "الْعَمَلِ",
              "lemma": "عمل",
              "features": "def.gen",
              "root": "ع م ل",
              "pos": "noun",
              "gloss": "work, deed"
            },
            {
              "surface": "الصَّالِحِ",
              "lemma": "صالح",
              "features": "def.gen",
              "root": "ص ل ح",
              "pos": "adj",
              "gloss": "righteous, good"
            }
          ]
        },
        {
          "id": "qr1-13-029",
          "page": 68,
          "ar": "وَقَالَ: اللَّهُمَّ إِنْ كُنْتُ فَعَلْتُ ذٰلِكَ ابْتِغَاءَ وَجْهِكَ فَاكْشِفْ عَنَّا هٰذِهِ الصَّخْرَةَ.",
          "en": "and said: O Allah, if I did that seeking Your face, then remove this boulder from us.",
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
              "surface": "اللَّهُمَّ",
              "lemma": "اللهم",
              "features": "proper",
              "root": "",
              "pos": "proper",
              "gloss": "O Allah! (vocative form of Allah)"
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
              "surface": "كُنْتُ",
              "lemma": "كان",
              "features": "perf.1s",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "فَعَلْتُ",
              "lemma": "فعل",
              "features": "perf.1s",
              "root": "ف ع ل",
              "pos": "verb",
              "gloss": "to do"
            },
            {
              "surface": "ذٰلِكَ",
              "lemma": "ذلك",
              "features": "acc",
              "root": "",
              "pos": "noun",
              "gloss": "that"
            },
            {
              "surface": "ابْتِغَاءَ",
              "lemma": "ابتغاء",
              "features": "acc.constr",
              "root": "ب غ ي",
              "pos": "noun",
              "gloss": "seeking, pursuit"
            },
            {
              "surface": "وَجْهِكَ",
              "lemma": "وجه",
              "features": "gen+2ms",
              "root": "و ج ه",
              "pos": "noun",
              "gloss": "face"
            },
            {
              "surface": "فَاكْشِفْ",
              "lemma": "كشف",
              "features": "conj+imp.2ms",
              "root": "ك ش ف",
              "pos": "verb",
              "gloss": "to remove, uncover"
            },
            {
              "surface": "عَنَّا",
              "lemma": "عن",
              "features": "prep+1p",
              "root": "",
              "pos": "prep",
              "gloss": "from, away from; about"
            },
            {
              "surface": "هٰذِهِ",
              "lemma": "هذه",
              "features": "acc",
              "root": "",
              "pos": "noun",
              "gloss": "this (f.)"
            },
            {
              "surface": "الصَّخْرَةَ",
              "lemma": "صخرة",
              "features": "def.acc",
              "root": "ص خ ر",
              "pos": "noun",
              "gloss": "boulder, rock"
            }
          ]
        },
        {
          "id": "qr1-13-030",
          "page": 68,
          "ar": "فَأَجَابَ اللهُ دَعْوَتَهُ وَأَعَانَهُ.",
          "en": "So God answered his prayer and helped him.",
          "tokens": [
            {
              "surface": "فَأَجَابَ",
              "lemma": "أجاب",
              "features": "conj+perf.3ms",
              "root": "ج و ب",
              "pos": "verb",
              "gloss": "to answer, respond"
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
              "surface": "دَعْوَتَهُ",
              "lemma": "دعوة",
              "features": "acc+3ms",
              "root": "د ع و",
              "pos": "noun",
              "gloss": "prayer, supplication, call"
            },
            {
              "surface": "وَأَعَانَهُ",
              "lemma": "أعان",
              "features": "conj+perf.3ms+3ms",
              "root": "ع و ن",
              "pos": "verb",
              "gloss": "to help, assist"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا دَعَا الرَّجُلُ اللهَ لَمَّا وَقَعَتِ الصَّخْرَةُ عَلَيْهِ؟",
          "options": [
            "بِأَمَانَتِهِ فِيْ أَمْرِ الْأَجِيْرِ",
            "بِكَثْرَةِ صِيَامِهِ",
            "بِحَجِّهِ إِلَى بَيْتِ اللهِ"
          ],
          "answer": 0,
          "qEn": "What deed did the man call on God by, when the boulder trapped him?",
          "optionsEn": [
            "His trustworthiness in the matter of the worker's wage",
            "His many fasts",
            "His pilgrimage to the House of God"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "اسْتَأْجَرَ",
        "post": "قَوْمًا فَاشْتَغَلُوْا وَعَمِلُوْا",
        "en": "A man hired a group of people, and they set to work and labored.",
        "options": [
          "رَجُلٌ",
          "رَجُلاً",
          "رَجُلٍ",
          "رِجَالٌ"
        ],
        "answer": 0,
        "rationales": [
          "nominative -- subject of اسْتَأْجَرَ.",
          "accusative -- wrong case.",
          "genitive -- wrong case.",
          "plural -- wrong number; a single man hired them."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَلَمَّا فَرَغُوْا مِنْ شُغْلِهِمْ جَاؤُوْا إِلَيْهِ فَأَعْطَاهُمْ",
        "post": "",
        "en": "When they finished their work they came to him, and he gave them their wages.",
        "options": [
          "أَجْرَهُمْ",
          "أَجْرُهُمْ",
          "أَجْرِهِمْ",
          "أُجُوْرَهُمْ"
        ],
        "answer": 0,
        "rationales": [
          "accusative + 3mp -- object of أَعْطَى, \"their wage.\"",
          "nominative -- wrong case.",
          "genitive -- wrong case.",
          "plural -- wrong number; a single combined wage is meant."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَلٰكِنَّهُ لَمْ يَأْخُذْ أَجْرَهُ وَتَرَكَهُ وَ",
        "post": "",
        "en": "But he did not take his wage -- he left it and went away.",
        "options": [
          "ذَهَبَ",
          "يَذْهَبُ",
          "ذَهَبُوْا",
          "اذْهَبْ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular perfect, matching تَرَكَهُ -- and he went away.",
          "imperfect -- wrong tense; the rest of the sentence is perfect.",
          "3rd masc. plural -- wrong number; one man is meant.",
          "imperative -- doesn't fit a narrated action."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَخَافَ اللهَ وَوَضَعَهَا فِي التِّجَارَةِ",
        "post": "",
        "en": "He feared God, and put it into trade, and invested it.",
        "options": [
          "وَثَمَّرَهَا",
          "وَثَمَّرَهُ",
          "وَثَمَّرَهُمَا",
          "وَثَمَّرَهُنَّ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular + 3fs object -- he invested it (the wage, feminine).",
          "3ms object -- wrong gender; الأُجْرَة is feminine.",
          "dual object -- wrong number.",
          "3fp object -- wrong number and gender."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَبَعْدَ حِيْنٍ جَاءَهُ الْأَجِيْرُ وَهُوَ خَائِفٌ أَنْ لَا يَعْرِفَهُ",
        "post": "",
        "en": "After a while the hired worker came to him, fearing the man would not recognize him.",
        "options": [
          "الرَّجُلُ",
          "الرَّجُلَ",
          "الرَّجُلِ",
          "رَجُلٌ"
        ],
        "answer": 0,
        "rationales": [
          "nominative -- subject of يَعْرِفَ.",
          "accusative -- wrong case.",
          "genitive -- wrong case.",
          "indefinite -- wrong definiteness; the same man from before is meant."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَقَدْ طَالَتِ الْمُدَّةُ وَمَضَىٰ",
        "post": "كَثِيْرٌ",
        "en": "For a long time had passed, and much time had gone by.",
        "options": [
          "زَمَنٌ",
          "زَمَنًا",
          "زَمَنٍ",
          "أَزْمِنَةٌ"
        ],
        "answer": 0,
        "rationales": [
          "nominative -- subject of مَضَىٰ.",
          "accusative -- wrong case.",
          "genitive -- wrong case.",
          "plural -- wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "جَاءَ الْأَجِيْرُ وَهُوَ لَا يَطْمَعُ إِلَّا فِيْ",
        "post": "الْقَلِيْلَةِ دَرَاهِمَ مَعْدُوْدَةٍ",
        "en": "The worker came, hoping for nothing but his modest wage -- a few counted dirhams.",
        "options": [
          "أُجْرَتِهِ",
          "أُجْرَتُهُ",
          "أُجْرَتَهُ",
          "أُجَرِهِ"
        ],
        "answer": 0,
        "rationales": [
          "genitive + 3ms -- object of the preposition فِيْ, \"his wage.\"",
          "nominative -- wrong case after a preposition.",
          "accusative -- wrong case after a preposition.",
          "plural -- wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَقَالَ: يَا عَبْدَ اللهِ! أَدِّ إِلَيَّ",
        "post": "",
        "en": "And said: O servant of God, give me my wage.",
        "options": [
          "أَجْرِيْ",
          "أَجْرِيَ",
          "أَجْرِيَّ",
          "أُجُوْرِيْ"
        ],
        "answer": 0,
        "rationales": [
          "nominative + 1s -- subject of the implied \"is due,\" \"my wage.\"",
          "duplicate spelling -- kept for parity.",
          "duplicate spelling -- kept for parity.",
          "plural -- wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "قَالَ الرَّجُلُ: لَا أَسْتَهْزِئُ بِكَ ، فَكُلُّ مَا تَرَىٰ مِنَ الْإِبِلِ وَالْبَقَرِ وَالْغَنَمِ وَالرَّقِيْقِ",
        "post": "",
        "en": "The man said: I am not mocking you -- everything you see of camels, cattle, sheep, and servants is yours.",
        "options": [
          "لَكَ",
          "لَكِ",
          "لَهُ",
          "لَكُمْ"
        ],
        "answer": 0,
        "rationales": [
          "for you (2ms) -- addressing the worker directly.",
          "2fs -- wrong gender; the worker is male.",
          "3ms -- wrong person; not addressed directly.",
          "2mp -- wrong number; one worker is addressed."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَقَالَ: اللَّهُمَّ إِنْ كُنْتُ فَعَلْتُ ذٰلِكَ ابْتِغَاءَ وَجْهِكَ فَاكْشِفْ عَنَّا",
        "post": "",
        "en": "And said: O Allah, if I did that seeking Your face, then remove this boulder from us.",
        "options": [
          "هٰذِهِ الصَّخْرَةَ",
          "هٰذَا الصَّخْرَةَ",
          "هٰذِهِ الصَّخْرَةُ",
          "هٰذِهِ صَخْرَةً"
        ],
        "answer": 0,
        "rationales": [
          "feminine demonstrative + accusative -- الصَّخْرَة is feminine, object of اكْشِفْ.",
          "masculine demonstrative -- wrong gender agreement.",
          "nominative -- wrong case; it's the object of the imperative.",
          "indefinite -- wrong definiteness; the same boulder just mentioned."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "اسْتَأْجَرَ رَجُلٌ قَوْمًا",
        "pre": "",
        "post": "قَوْمًا",
        "targetPerson": "رَجُلَانِ",
        "targetEn": "two men",
        "options": [
          "اسْتَأْجَرَ رَجُلَانِ",
          "اسْتَأْجَرَ رَجُلٌ",
          "اسْتَأْجَرَتْ رَجُلَانِ",
          "اسْتَأْجَرَ رِجَالٌ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular verb before a dual subject -- standard verb-subject agreement in fuṣḥā.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَلٰكِنَّهُ لَمْ يَأْخُذْ أَجْرَهُ",
        "pre": "",
        "post": "أَجْرَهُ",
        "targetPerson": "هُمْ",
        "targetEn": "they (m.)",
        "options": [
          "لَمْ يَأْخُذُوا",
          "لَمْ يَأْخُذْ",
          "لَمْ تَأْخُذْ",
          "لَمْ نَأْخُذْ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. plural jussive -- they did not take.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَكَانَ الرَّجُلُ كَرِيْمًا أَمِيْنًا",
        "pre": "",
        "post": "كَرِيْمًا أَمِيْنًا",
        "targetPerson": "الْمَرْأَةُ",
        "targetEn": "the woman",
        "options": [
          "كَانَتِ الْمَرْأَةُ كَرِيْمَةً أَمِيْنَةً",
          "كَانَ الْمَرْأَةُ كَرِيْمًا أَمِيْنًا",
          "كَانَتِ الْمَرْأَةُ كَرِيْمٌ أَمِيْنٌ",
          "كَانُوا الْمَرْأَةَ كَرِيْمَةً أَمِيْنَةً"
        ],
        "answer": 0,
        "rationales": [
          "fem. verb + fem. predicate agreement throughout.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَخَافَ اللهَ وَوَضَعَهَا فِي التِّجَارَةِ",
        "pre": "",
        "post": "فِي التِّجَارَةِ",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "وَخَافَتِ اللهَ وَوَضَعَتْهَا",
          "وَخَافَ اللهَ وَوَضَعَهَا",
          "وَخَافَ اللهَ وَوَضَعَتْهُ",
          "وَخِفْنَ اللهَ وَوَضَعْنَهَا"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular throughout -- she feared and put it.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَبَعْدَ حِيْنٍ جَاءَهُ الْأَجِيْرُ",
        "pre": "",
        "post": "وَهُوَ خَائِفٌ",
        "targetPerson": "الْأَجِيْرَانِ",
        "targetEn": "the two workers",
        "options": [
          "جَاءَهُ الْأَجِيْرَانِ",
          "جَاءَهُ الْأَجِيْرُ",
          "جَاءَاهُ الْأَجِيْرَانِ",
          "جَاءَهُ الْأُجَرَاءُ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular verb before a dual subject -- standard fuṣḥā agreement.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَقَدْ طَالَتِ الْمُدَّةُ",
        "pre": "",
        "post": "وَمَضَىٰ زَمَنٌ كَثِيْرٌ",
        "targetPerson": "الْأَيَّامُ",
        "targetEn": "the days",
        "options": [
          "طَالَتِ الْأَيَّامُ",
          "طَالَ الْأَيَّامُ",
          "طَالَتِ الْأَيَّامَ",
          "طَالُوا الْأَيَّامُ"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular -- broken plural الْأَيَّام takes feminine singular agreement.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَمَا جَحَدَ الرَّجُلُ وَمَا أَنْكَرَ",
        "pre": "",
        "post": "",
        "targetPerson": "الرِّجَالُ",
        "targetEn": "the men",
        "options": [
          "فَمَا جَحَدَ الرِّجَالُ وَمَا أَنْكَرُوا",
          "فَمَا جَحَدَ الرِّجَالُ وَمَا أَنْكَرَ",
          "فَمَا جَحَدَتِ الرِّجَالُ وَمَا أَنْكَرَتْ",
          "فَمَا جَحَدُوا الرِّجَالُ وَمَا أَنْكَرُوا"
        ],
        "answer": 0,
        "rationales": [
          "masc. singular verb before the subject, masc. plural verb after -- standard mixed agreement pattern.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَأَخَذَ الْأَجِيْرُ الْإِبِلَ وَالْبَقَرَ وَالْغَنَمَ وَالرَّقِيْقَ",
        "pre": "",
        "post": "وَلَمْ يَتْرُكْ مِنْهَا شَيْئًا",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "أَخَذْتُ",
          "أَخَذَ",
          "أَخَذَتْ",
          "أَخَذْنَا"
        ],
        "answer": 0,
        "rationales": [
          "1st singular perfect -- I took.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

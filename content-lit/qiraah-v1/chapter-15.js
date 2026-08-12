// القراءة الراشدة, volume one, chapter fifteen -- مأدبة.
//
// Follows the shape of chapter-06.js/chapter-14.js -- see
// ../CHAPTER-FORMAT.md for the full specification. Hand-authored directly
// from the scanned pages (qiratur rashida/_al-qir`atur-rashida 1-2.pdf,
// printed pages 72-73); there is no JSON intermediate (see
// PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md -- the pipeline no longer
// emits JSON).
//
// The book's shortest chapter so far -- 2 pages instead of the usual 3 --
// telling of a feast the narrator's family hosts when the brother returns
// from Hajj. First-person-plural narrative throughout, opening with a run
// of third-person clauses (the brother's return, the household's joy)
// before settling into "we" for all the hosting action, the same shift
// chapter-06/chapter-14 already established. The chapter ends with the
// guests' traditional parting blessing, quoted in «» guillemets per the
// established hadith/dua-quotation convention (chapter-09.js,
// chapter-12.js); the Qur'anic ﴿ ﴾-bracket gap remains unexercised.
//
// Vocabulary notes:
//   - غسل ("to wash," Form I, e.g. غَسَلُوا أَيْدِيَهُمْ) is a new, distinct
//     lemma from "اغتسل" (Form VIII, "to bathe, wash oneself," already
//     established in chapter-12.js) -- related by root but not the same
//     word, so it gets its own entry rather than reusing اغتسل's.
//   - الْمَدِيْنَةِ الْمُنَوَّرَةِ ("Medina, the Radiant") reuses the "مدينة"
//     lemma already established (chapter-06.js/chapter-07.js) as the common
//     noun "city," with a token-level gloss_override="Medina" and
//     pos_override="proper" here, since the text uses the same word to name
//     the specific city -- the same contextual-shift technique already used
//     for "آخر" -> "other" in chapter-13.js/chapter-14.js, not a new
//     homograph key.
//   - الصَّائِمُوْنَ ("those who fast," in the guests' parting blessing) is the
//     active participle of "صام" (already established chapter-12.js, "to
//     fast"), tagged against that lemma with pos_override="noun" and a
//     contextual gloss -- matching the established participle-reuse pattern
//     (chapter-13.js's خاب/خَائِبًا, chapter-14.js's استعد/مُسْتَعِدًّا). أَفْطَرَ
//     itself ("to break one's fast," the finite verb earlier in the same
//     sentence) reuses the distinct "أفطر" lemma already established in the
//     same chapter-12.js passage -- the two are near-opposite in meaning
//     and must not be conflated.
//   - الْأَبْرَارُ ("the righteous, the dutiful") is tagged against a new "بار"
//     lemma (root ب ر ر) -- worth flagging forward, since chapter-16's title
//     بِرُّ الْوَالِدَيْنِ shares the same root (بِرّ, "dutifulness"); they are
//     related but not the same word, so no key is shared between them.
//   - فِرَاشاً ("bedding") reuses the "فراش" lemma already established in
//     chapter-08.js and is left out of NEW_WORDS accordingly, the same
//     treatment chapter-13.js gave أمين.
//   - Three footnoted words carry book_note: إبريق (أباريق), سفرة, and رائب,
//     matching the established footnote-as-book_note convention.
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch15",
  "number": 15,
  "title": {
    "ar": "مَأْدُبَةٌ",
    "en": "A Banquet"
  },
  "pages": [
    72,
    73
  ],
  "register": "first_person_plural_narrative",
  "newWords": [
    "حج",
    "ضيف",
    "استقبل",
    "سفرة",
    "خبز",
    "صحن",
    "رائب",
    "حجاز",
    "مكة",
    "اشتاق",
    "وفق",
    "ملاك"
  ],
  "lemmas": {
    "رجع": {
      "root": "ر ج ع",
      "pos": "verb",
      "gloss": "to return",
      "content": true
    },
    "أخ": {
      "root": "أ خ و",
      "pos": "noun",
      "gloss": "brother",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "حج": {
      "root": "ح ج ج",
      "pos": "noun",
      "gloss": "Ḥajj, the pilgrimage",
      "content": true
    },
    "فرح": {
      "root": "ف ر ح",
      "pos": "verb",
      "gloss": "to rejoice, be happy",
      "content": true
    },
    "أهل": {
      "root": "أ ه ل",
      "pos": "noun",
      "gloss": "people, family, folk",
      "content": true
    },
    "بيت": {
      "root": "ب ي ت",
      "pos": "noun",
      "gloss": "house",
      "content": true
    },
    "كثير": {
      "root": "ك ث ر",
      "pos": "adj",
      "gloss": "much, many",
      "content": true
    },
    "أم": {
      "root": "أ م م",
      "pos": "noun",
      "gloss": "mother",
      "content": true
    },
    "جدا": {
      "root": "ج د د",
      "pos": "adv",
      "gloss": "very, greatly",
      "content": true
    },
    "صنع": {
      "root": "ص ن ع",
      "pos": "verb",
      "gloss": "to make",
      "content": true
    },
    "طعام": {
      "root": "ط ع م",
      "pos": "noun",
      "gloss": "food",
      "content": true
    },
    "دعا": {
      "root": "د ع و",
      "pos": "verb",
      "gloss": "to call, invite; to pray, call upon",
      "content": true
    },
    "إلى": {
      "root": "—",
      "pos": "prep",
      "gloss": "to, towards",
      "content": false
    },
    "أقارب": {
      "root": "ق ر ب",
      "pos": "noun",
      "gloss": "relatives",
      "content": true
    },
    "صديق": {
      "root": "ص د ق",
      "pos": "noun",
      "gloss": "friend",
      "content": true
    },
    "قرية": {
      "root": "ق ر ي",
      "pos": "noun",
      "gloss": "village",
      "content": true
    },
    "فرش": {
      "root": "ف ر ش",
      "pos": "verb",
      "gloss": "to spread out, lay down (bedding)",
      "content": true
    },
    "فراش": {
      "root": "ف ر ش",
      "pos": "noun",
      "gloss": "bedding, a mat, a mattress",
      "content": true
    },
    "نظيف": {
      "root": "ن ظ ف",
      "pos": "adj",
      "gloss": "clean",
      "content": true
    },
    "أمام": {
      "root": "أ م م",
      "pos": "prep",
      "gloss": "in front of",
      "content": false
    },
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
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
    "وضع": {
      "root": "و ض ع",
      "pos": "verb",
      "gloss": "to put, place",
      "content": true
    },
    "إبريق": {
      "root": "أ ب ر ق",
      "pos": "noun",
      "gloss": "pitcher, jug",
      "content": true,
      "book_note": "أَبَارِيْقُ جمع إِبْرِيْق: وِعَاءٌ مِنَ الْخَزَفِ أَوِ الْمَعْدِنِ لَهُ عُرْوَةٌ وَمَصَبٌّ خُرْطُوْمِيُّ الشَّكْلِ يُصَبُّ مِنْهُ الْمَاءُ وَنَحْوُهُ (abārīq, pl. of ibrīq: a vessel of clay or metal with a handle and a spout shaped like a small trunk, from which water and the like is poured)"
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "ماء": {
      "root": "م و ه",
      "pos": "noun",
      "gloss": "water",
      "content": true
    },
    "غسل": {
      "root": "غ س ل",
      "pos": "verb",
      "gloss": "to wash",
      "content": true
    },
    "يد": {
      "root": "ي د ي",
      "pos": "noun",
      "gloss": "hand",
      "content": true
    },
    "صابون": {
      "root": "ص ا ب و ن",
      "pos": "noun",
      "gloss": "soap",
      "content": true
    },
    "منشفة": {
      "root": "ن ش ف",
      "pos": "noun",
      "gloss": "towel",
      "content": true
    },
    "بسط": {
      "root": "ب س ط",
      "pos": "verb",
      "gloss": "to spread out",
      "content": true
    },
    "سفرة": {
      "root": "س ف ر",
      "pos": "noun",
      "gloss": "a spread cloth for a meal",
      "content": true,
      "book_note": "سُفْرَة (ج) سُفَر: الْمَائِدَةُ وَمَا عَلَيْهَا مِنَ الطَّعَامِ (sufrah, pl. sufar: a cloth spread out for a meal, together with the food set upon it)"
    },
    "واسع": {
      "root": "و س ع",
      "pos": "adj",
      "gloss": "spacious, ample, wide",
      "content": true
    },
    "حضر-حضور": {
      "root": "ح ض ر",
      "pos": "verb",
      "gloss": "to attend, be present, arrive",
      "content": true
    },
    "ناس": {
      "root": "ن و س",
      "pos": "noun",
      "gloss": "people",
      "content": true
    },
    "مساء": {
      "root": "م س و",
      "pos": "noun",
      "gloss": "evening",
      "content": true
    },
    "استقبل": {
      "root": "ق ب ل",
      "pos": "verb",
      "gloss": "to receive, welcome",
      "content": true
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "مرحبا": {
      "root": "ر ح ب",
      "pos": "part",
      "gloss": "welcome!",
      "content": false
    },
    "جلس": {
      "root": "ج ل س",
      "pos": "verb",
      "gloss": "to sit",
      "content": true
    },
    "قليل": {
      "root": "ق ل ل",
      "pos": "adv",
      "gloss": "a little, slightly",
      "content": true
    },
    "ضيف": {
      "root": "ض ي ف",
      "pos": "noun",
      "gloss": "guest",
      "content": true
    },
    "حول": {
      "root": "ح و ل",
      "pos": "prep",
      "gloss": "around",
      "content": false
    },
    "قدم": {
      "root": "ق د م",
      "pos": "verb",
      "gloss": "to bring forward, present, offer, serve",
      "content": true
    },
    "رغيف": {
      "root": "ر غ ف",
      "pos": "noun",
      "gloss": "loaf (of bread)",
      "content": true
    },
    "حار": {
      "root": "ح ر ر",
      "pos": "adj",
      "gloss": "hot",
      "content": true
    },
    "لحم": {
      "root": "ل ح م",
      "pos": "noun",
      "gloss": "meat",
      "content": true
    },
    "رز": {
      "root": "—",
      "pos": "noun",
      "gloss": "rice",
      "content": true
    },
    "صحن": {
      "root": "ص ح ن",
      "pos": "noun",
      "gloss": "plate, dish",
      "content": true
    },
    "رائب": {
      "root": "ر و ب",
      "pos": "noun",
      "gloss": "yogurt, curdled milk",
      "content": true,
      "book_note": "الرَّائِبُ: اللَّبَنُ الَّذِيْ يُخَضُّ فَيَخْرُجُ زُبْدَةً (al-rāʾib: milk that has been churned so that butter comes out of it -- i.e. soured, curdled milk)"
    },
    "قدح": {
      "root": "ق د ح",
      "pos": "noun",
      "gloss": "cup, drinking vessel",
      "content": true
    },
    "سمى": {
      "root": "س م و",
      "pos": "verb",
      "gloss": "to name; to invoke (God's name)",
      "content": true
    },
    "الله": {
      "root": "—",
      "pos": "proper",
      "gloss": "Allah",
      "content": true
    },
    "أكل": {
      "root": "أ ك ل",
      "pos": "verb",
      "gloss": "to eat",
      "content": true
    },
    "قام": {
      "root": "ق و م",
      "pos": "verb",
      "gloss": "to rise, get up; to stand",
      "content": true
    },
    "لاحظ": {
      "root": "ل ح ظ",
      "pos": "verb",
      "gloss": "to notice, watch over",
      "content": true
    },
    "ل": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to; belonging to",
      "content": false
    },
    "خبز": {
      "root": "خ ب ز",
      "pos": "noun",
      "gloss": "bread",
      "content": true
    },
    "سقى": {
      "root": "س ق ي",
      "pos": "verb",
      "gloss": "to give to drink, water",
      "content": true
    },
    "مثلوج": {
      "root": "ث ل ج",
      "pos": "adj",
      "gloss": "iced, chilled",
      "content": true
    },
    "أصاب": {
      "root": "ص و ب",
      "pos": "verb",
      "gloss": "to hit (a target); to obtain, get a share of",
      "content": true
    },
    "كل": {
      "root": "ك ل ل",
      "pos": "noun",
      "gloss": "each, every, all",
      "content": true
    },
    "رغبة": {
      "root": "ر غ ب",
      "pos": "noun",
      "gloss": "desire, eagerness",
      "content": true
    },
    "حمد": {
      "root": "ح م د",
      "pos": "verb",
      "gloss": "to praise",
      "content": true
    },
    "مسح": {
      "root": "م س ح",
      "pos": "verb",
      "gloss": "to wipe",
      "content": true
    },
    "تحدث": {
      "root": "ح د ث",
      "pos": "verb",
      "gloss": "to converse, talk",
      "content": true
    },
    "تكلم": {
      "root": "ك ل م",
      "pos": "verb",
      "gloss": "to speak",
      "content": true
    },
    "سمع": {
      "root": "س م ع",
      "pos": "verb",
      "gloss": "to hear",
      "content": true
    },
    "خبر": {
      "root": "خ ب ر",
      "pos": "noun",
      "gloss": "news, a report",
      "content": true
    },
    "حجاز": {
      "root": "—",
      "pos": "proper",
      "gloss": "the Ḥijāz (region of western Arabia)",
      "content": true
    },
    "حديث": {
      "root": "ح د ث",
      "pos": "noun",
      "gloss": "talk, account",
      "content": true
    },
    "مكة": {
      "root": "—",
      "pos": "proper",
      "gloss": "Mecca",
      "content": true
    },
    "مشرف": {
      "root": "ش ر ف",
      "pos": "adj",
      "gloss": "honored, ennobled",
      "content": true
    },
    "مدينة": {
      "root": "م د ن",
      "pos": "noun",
      "gloss": "city",
      "content": true
    },
    "منور": {
      "root": "ن و ر",
      "pos": "adj",
      "gloss": "illuminated, radiant",
      "content": true
    },
    "عرفات": {
      "root": "—",
      "pos": "proper",
      "gloss": "ʿArafāt",
      "content": true
    },
    "منى": {
      "root": "—",
      "pos": "proper",
      "gloss": "Minā",
      "content": true
    },
    "سرور": {
      "root": "س ر ر",
      "pos": "noun",
      "gloss": "joy, delight",
      "content": true
    },
    "اشتاق": {
      "root": "ش و ق",
      "pos": "verb",
      "gloss": "to long for, yearn",
      "content": true
    },
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that",
      "content": false
    },
    "وفق": {
      "root": "و ف ق",
      "pos": "verb",
      "gloss": "to grant success",
      "content": true
    },
    "ذلك": {
      "root": "—",
      "pos": "dem",
      "gloss": "that",
      "content": false
    },
    "ثم": {
      "root": "—",
      "pos": "part",
      "gloss": "then",
      "content": false
    },
    "استأذن": {
      "root": "أ ذ ن",
      "pos": "verb",
      "gloss": "to ask permission, excuse oneself",
      "content": true
    },
    "خروج": {
      "root": "خ ر ج",
      "pos": "noun",
      "gloss": "going out, departure",
      "content": true
    },
    "أفطر": {
      "root": "ف ط ر",
      "pos": "verb",
      "gloss": "to eat breakfast; to break a fast",
      "content": true
    },
    "عند": {
      "root": "ع ن د",
      "pos": "prep",
      "gloss": "with, at, in the possession of",
      "content": false
    },
    "صام": {
      "root": "ص و م",
      "pos": "verb",
      "gloss": "to fast",
      "content": true
    },
    "بار": {
      "root": "ب ر ر",
      "pos": "noun",
      "gloss": "the righteous, the dutiful",
      "content": true
    },
    "صلى": {
      "root": "ص ل و",
      "pos": "verb",
      "gloss": "to pray; to bless, invoke blessings upon",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, on",
      "content": false
    },
    "ملاك": {
      "root": "م ل ك",
      "pos": "noun",
      "gloss": "angel",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "The narrator's brother came back from Hajj, and the household -- especially his mother -- rejoiced; she prepared a feast and invited relatives, friends, and many of the villagers to it.",
      "sentences": [
        {
          "id": "qr1-15-001",
          "page": 72,
          "ar": "رَجَعَ أَخِيْ مِنَ الْحَجِّ ،",
          "en": "My brother returned from Hajj,",
          "tokens": [
            {
              "surface": "رَجَعَ",
              "lemma": "رجع",
              "features": "perf.3ms",
              "root": "ر ج ع",
              "pos": "verb",
              "gloss": "to return"
            },
            {
              "surface": "أَخِيْ",
              "lemma": "أخ",
              "features": "nom+1s",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brother"
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
              "surface": "الْحَجِّ",
              "lemma": "حج",
              "features": "def.gen",
              "root": "ح ج ج",
              "pos": "noun",
              "gloss": "Ḥajj, the pilgrimage"
            }
          ]
        },
        {
          "id": "qr1-15-002",
          "page": 72,
          "ar": "فَفَرِحَ أَهْلُ الْبَيْتِ كَثِيْراً",
          "en": "so the family rejoiced greatly,",
          "tokens": [
            {
              "surface": "فَفَرِحَ",
              "lemma": "فرح",
              "features": "conj+perf.3ms",
              "root": "ف ر ح",
              "pos": "verb",
              "gloss": "to rejoice, be happy"
            },
            {
              "surface": "أَهْلُ",
              "lemma": "أهل",
              "features": "nom.constr",
              "root": "أ ه ل",
              "pos": "noun",
              "gloss": "people, family, folk"
            },
            {
              "surface": "الْبَيْتِ",
              "lemma": "بيت",
              "features": "def.gen",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
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
          "id": "qr1-15-003",
          "page": 72,
          "ar": "وَفَرِحَتْ أُمِّيْ جِدَّاً ،",
          "en": "and my mother rejoiced very much,",
          "tokens": [
            {
              "surface": "وَفَرِحَتْ",
              "lemma": "فرح",
              "features": "conj+perf.3fs",
              "root": "ف ر ح",
              "pos": "verb",
              "gloss": "to rejoice, be happy"
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
              "surface": "جِدَّاً",
              "lemma": "جدا",
              "features": "acc",
              "root": "ج د د",
              "pos": "adv",
              "gloss": "very, greatly"
            }
          ]
        },
        {
          "id": "qr1-15-004",
          "page": 72,
          "ar": "وَصَنَعَتْ أُمِّيْ طَعَاماً",
          "en": "and my mother made food,",
          "tokens": [
            {
              "surface": "وَصَنَعَتْ",
              "lemma": "صنع",
              "features": "conj+perf.3fs",
              "root": "ص ن ع",
              "pos": "verb",
              "gloss": "to make"
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
              "surface": "طَعَاماً",
              "lemma": "طعام",
              "features": "indef.acc",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            }
          ]
        },
        {
          "id": "qr1-15-005",
          "page": 72,
          "ar": "وَدَعَتْ إِلَيْهِ الْأَقَارِبَ وَالْأَصْدِقَاءَ وَكَثِيْراً مِنْ أَهْلِ الْقَرْيَةِ .",
          "en": "and invited to it the relatives, the friends, and many of the village folk.",
          "tokens": [
            {
              "surface": "وَدَعَتْ",
              "lemma": "دعا",
              "features": "conj+perf.3fs",
              "root": "د ع و",
              "pos": "verb",
              "gloss": "to call, invite; to pray, call upon"
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
              "surface": "الْأَقَارِبَ",
              "lemma": "أقارب",
              "features": "def.acc",
              "root": "ق ر ب",
              "pos": "noun",
              "gloss": "relatives"
            },
            {
              "surface": "وَالْأَصْدِقَاءَ",
              "lemma": "صديق",
              "features": "conj+def.pl.acc",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            },
            {
              "surface": "وَكَثِيْراً",
              "lemma": "كثير",
              "features": "conj+indef.acc",
              "root": "ك ث ر",
              "pos": "adj",
              "gloss": "much, many"
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
              "surface": "أَهْلِ",
              "lemma": "أهل",
              "features": "gen.constr",
              "root": "أ ه ل",
              "pos": "noun",
              "gloss": "people, family, folk"
            },
            {
              "surface": "الْقَرْيَةِ",
              "lemma": "قرية",
              "features": "def.gen",
              "root": "ق ر ي",
              "pos": "noun",
              "gloss": "village"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مِنْ أَيْنَ رَجَعَ أَخُو الرَّاوِيْ؟",
          "options": [
            "مِنَ الْحَجِّ",
            "مِنَ السُّوْقِ",
            "مِنَ الْمَدْرَسَةِ"
          ],
          "answer": 0,
          "qEn": "Where had the narrator's brother returned from?",
          "optionsEn": [
            "From Hajj",
            "From the market",
            "From school"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "The family rejoiced too, and set out clean bedding in front of the house on a summer day, put out pitchers of water and soap and a towel for washing hands, and spread a wide sufra.",
      "sentences": [
        {
          "id": "qr1-15-006",
          "page": 72,
          "ar": "وَفَرِحْنَا جِدّاً ،",
          "en": "And we rejoiced very much,",
          "tokens": [
            {
              "surface": "وَفَرِحْنَا",
              "lemma": "فرح",
              "features": "conj+perf.1p",
              "root": "ف ر ح",
              "pos": "verb",
              "gloss": "to rejoice, be happy"
            },
            {
              "surface": "جِدّاً",
              "lemma": "جدا",
              "features": "acc",
              "root": "ج د د",
              "pos": "adv",
              "gloss": "very, greatly"
            }
          ]
        },
        {
          "id": "qr1-15-007",
          "page": 72,
          "ar": "وَفَرَشْنَا فِرَاشاً نَظِيْفاً أَمَامَ الْبَيْتِ",
          "en": "and we spread out clean bedding in front of the house,",
          "tokens": [
            {
              "surface": "وَفَرَشْنَا",
              "lemma": "فرش",
              "features": "conj+perf.1p",
              "root": "ف ر ش",
              "pos": "verb",
              "gloss": "to spread out, lay down (bedding)"
            },
            {
              "surface": "فِرَاشاً",
              "lemma": "فراش",
              "features": "indef.acc",
              "root": "ف ر ش",
              "pos": "noun",
              "gloss": "bedding, a mat, a mattress"
            },
            {
              "surface": "نَظِيْفاً",
              "lemma": "نظيف",
              "features": "indef.acc",
              "root": "ن ظ ف",
              "pos": "adj",
              "gloss": "clean"
            },
            {
              "surface": "أَمَامَ",
              "lemma": "أمام",
              "features": "prep",
              "root": "أ م م",
              "pos": "prep",
              "gloss": "in front of"
            },
            {
              "surface": "الْبَيْتِ",
              "lemma": "بيت",
              "features": "def.gen",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            }
          ]
        },
        {
          "id": "qr1-15-008",
          "page": 72,
          "ar": "وَكَانَتْ أَيَّامُ صَيْفٍ ،",
          "en": "for it was summer days,",
          "tokens": [
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
          "id": "qr1-15-009",
          "page": 72,
          "ar": "وَوَضَعْنَا أَبَارِيْقَ فِيْهَا مَاءٌ لِغَسْلِ الْأَيْدِيْ ،",
          "en": "and we put out pitchers with water in them, for washing hands,",
          "tokens": [
            {
              "surface": "وَوَضَعْنَا",
              "lemma": "وضع",
              "features": "conj+perf.1p",
              "root": "و ض ع",
              "pos": "verb",
              "gloss": "to put, place"
            },
            {
              "surface": "أَبَارِيْقَ",
              "lemma": "إبريق",
              "features": "pl.indef.acc",
              "root": "أ ب ر ق",
              "pos": "noun",
              "gloss": "pitcher, jug"
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
              "surface": "مَاءٌ",
              "lemma": "ماء",
              "features": "indef.nom",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
            },
            {
              "surface": "لِغَسْلِ",
              "lemma": "غسل",
              "features": "prep+gen",
              "root": "غ س ل",
              "pos": "noun",
              "gloss": "washing"
            },
            {
              "surface": "الْأَيْدِيْ",
              "lemma": "يد",
              "features": "def.pl.gen",
              "root": "ي د ي",
              "pos": "noun",
              "gloss": "hand"
            }
          ]
        },
        {
          "id": "qr1-15-010",
          "page": 72,
          "ar": "وَوَضَعْنَا صَابُوْناً وَمِنْشَفَةً",
          "en": "and we put out soap and a towel,",
          "tokens": [
            {
              "surface": "وَوَضَعْنَا",
              "lemma": "وضع",
              "features": "conj+perf.1p",
              "root": "و ض ع",
              "pos": "verb",
              "gloss": "to put, place"
            },
            {
              "surface": "صَابُوْناً",
              "lemma": "صابون",
              "features": "indef.acc",
              "root": "ص ا ب و ن",
              "pos": "noun",
              "gloss": "soap"
            },
            {
              "surface": "وَمِنْشَفَةً",
              "lemma": "منشفة",
              "features": "conj+indef.acc",
              "root": "ن ش ف",
              "pos": "noun",
              "gloss": "towel"
            }
          ]
        },
        {
          "id": "qr1-15-011",
          "page": 72,
          "ar": "وَبَسَطْنَا سُفْرَةً وَاسِعَةً .",
          "en": "and we spread out a wide sufra.",
          "tokens": [
            {
              "surface": "وَبَسَطْنَا",
              "lemma": "بسط",
              "features": "conj+perf.1p",
              "root": "ب س ط",
              "pos": "verb",
              "gloss": "to spread out"
            },
            {
              "surface": "سُفْرَةً",
              "lemma": "سفرة",
              "features": "indef.acc",
              "root": "س ف ر",
              "pos": "noun",
              "gloss": "a spread cloth for a meal"
            },
            {
              "surface": "وَاسِعَةً",
              "lemma": "واسع",
              "features": "indef.acc.f",
              "root": "و س ع",
              "pos": "adj",
              "gloss": "spacious, ample, wide"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا وَضَعُوا لِغَسْلِ الْأَيْدِيْ؟",
          "options": [
            "أَبَارِيْقَ فِيْهَا مَاءٌ وَصَابُوْناً وَمِنْشَفَةً",
            "صُحُوْناً فَقَطْ",
            "كُتُباً وَأَقْلَاماً"
          ],
          "answer": 0,
          "qEn": "What did they put out for washing hands?",
          "optionsEn": [
            "Pitchers with water in them, soap, and a towel",
            "Plates only",
            "Books and pens"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "The guests arrived in the evening; the brother welcomed them, they sat briefly, and when the food arrived they sat around the sufra as hot bread, meat, rice, and yogurt were served.",
      "sentences": [
        {
          "id": "qr1-15-012",
          "page": 72,
          "ar": "حَضَرَ النَّاسُ فِي الْمَسَاءِ ،",
          "en": "The people arrived in the evening,",
          "tokens": [
            {
              "surface": "حَضَرَ",
              "lemma": "حضر-حضور",
              "features": "perf.3ms",
              "root": "ح ض ر",
              "pos": "verb",
              "gloss": "to attend, be present, arrive"
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
              "surface": "فِي",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الْمَسَاءِ",
              "lemma": "مساء",
              "features": "def.gen",
              "root": "م س و",
              "pos": "noun",
              "gloss": "evening"
            }
          ]
        },
        {
          "id": "qr1-15-013",
          "page": 72,
          "ar": "فَاسْتَقْبَلَهُمْ أَخِيْ",
          "en": "and my brother welcomed them,",
          "tokens": [
            {
              "surface": "فَاسْتَقْبَلَهُمْ",
              "lemma": "استقبل",
              "features": "conj+perf.3ms+3mp",
              "root": "ق ب ل",
              "pos": "verb",
              "gloss": "to receive, welcome"
            },
            {
              "surface": "أَخِيْ",
              "lemma": "أخ",
              "features": "nom+1s",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brother"
            }
          ]
        },
        {
          "id": "qr1-15-014",
          "page": 72,
          "ar": "وَقُلْنَا: مَرْحَباً",
          "en": "and we said: Welcome!",
          "tokens": [
            {
              "surface": "وَقُلْنَا",
              "lemma": "قال",
              "features": "conj+perf.1p",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "مَرْحَباً",
              "lemma": "مرحبا",
              "features": "acc",
              "root": "ر ح ب",
              "pos": "part",
              "gloss": "welcome!"
            }
          ]
        },
        {
          "id": "qr1-15-015",
          "page": 72,
          "ar": "وَجَلَسُوا قَلِيْلاً",
          "en": "and they sat for a little while,",
          "tokens": [
            {
              "surface": "وَجَلَسُوا",
              "lemma": "جلس",
              "features": "conj+perf.3mp",
              "root": "ج ل س",
              "pos": "verb",
              "gloss": "to sit"
            },
            {
              "surface": "قَلِيْلاً",
              "lemma": "قليل",
              "features": "acc",
              "root": "ق ل ل",
              "pos": "adv",
              "gloss": "a little, slightly"
            }
          ]
        },
        {
          "id": "qr1-15-016",
          "page": 72,
          "ar": "وَحَضَرَ الطَّعَامُ ،",
          "en": "and the food arrived,",
          "tokens": [
            {
              "surface": "وَحَضَرَ",
              "lemma": "حضر-حضور",
              "features": "conj+perf.3ms",
              "root": "ح ض ر",
              "pos": "verb",
              "gloss": "to attend, be present, arrive"
            },
            {
              "surface": "الطَّعَامُ",
              "lemma": "طعام",
              "features": "def.nom",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            }
          ]
        },
        {
          "id": "qr1-15-017",
          "page": 72,
          "ar": "فَجَلَسَ الضُّيُوْفُ حَوْلَ السُّفْرَةِ ،",
          "en": "and the guests sat around the sufra,",
          "tokens": [
            {
              "surface": "فَجَلَسَ",
              "lemma": "جلس",
              "features": "conj+perf.3ms",
              "root": "ج ل س",
              "pos": "verb",
              "gloss": "to sit"
            },
            {
              "surface": "الضُّيُوْفُ",
              "lemma": "ضيف",
              "features": "def.pl.nom",
              "root": "ض ي ف",
              "pos": "noun",
              "gloss": "guest"
            },
            {
              "surface": "حَوْلَ",
              "lemma": "حول",
              "features": "prep",
              "root": "ح و ل",
              "pos": "prep",
              "gloss": "around"
            },
            {
              "surface": "السُّفْرَةِ",
              "lemma": "سفرة",
              "features": "def.gen",
              "root": "س ف ر",
              "pos": "noun",
              "gloss": "a spread cloth for a meal"
            }
          ]
        },
        {
          "id": "qr1-15-018",
          "page": 72,
          "ar": "وَقَدَّمْنَا الرَّغِيْفَ الْحَارَّ وَاللَّحْمَ وَالرُّزَّ فِيْ صُحُوْنٍ وَالرَّائِبَ فِيْ أَقْدَاحٍ ،",
          "en": "and we served the hot bread, the meat and rice on plates, and the yogurt in cups,",
          "tokens": [
            {
              "surface": "وَقَدَّمْنَا",
              "lemma": "قدم",
              "features": "conj+perf.1p",
              "root": "ق د م",
              "pos": "verb",
              "gloss": "to bring forward, present, offer, serve"
            },
            {
              "surface": "الرَّغِيْفَ",
              "lemma": "رغيف",
              "features": "def.acc",
              "root": "ر غ ف",
              "pos": "noun",
              "gloss": "loaf (of bread)"
            },
            {
              "surface": "الْحَارَّ",
              "lemma": "حار",
              "features": "def.acc",
              "root": "ح ر ر",
              "pos": "adj",
              "gloss": "hot"
            },
            {
              "surface": "وَاللَّحْمَ",
              "lemma": "لحم",
              "features": "conj+def.acc",
              "root": "ل ح م",
              "pos": "noun",
              "gloss": "meat"
            },
            {
              "surface": "وَالرُّزَّ",
              "lemma": "رز",
              "features": "conj+def.acc",
              "root": "",
              "pos": "noun",
              "gloss": "rice"
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
              "surface": "صُحُوْنٍ",
              "lemma": "صحن",
              "features": "pl.indef.gen",
              "root": "ص ح ن",
              "pos": "noun",
              "gloss": "plate, dish"
            },
            {
              "surface": "وَالرَّائِبَ",
              "lemma": "رائب",
              "features": "conj+def.acc",
              "root": "ر و ب",
              "pos": "noun",
              "gloss": "yogurt, curdled milk"
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
              "surface": "أَقْدَاحٍ",
              "lemma": "قدح",
              "features": "pl.indef.gen",
              "root": "ق د ح",
              "pos": "noun",
              "gloss": "cup, drinking vessel"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنِ اسْتَقْبَلَ الضُّيُوْفَ؟",
          "options": [
            "أَخُو الرَّاوِيْ",
            "أَبُوْهُ",
            "جَارُهُمْ"
          ],
          "answer": 0,
          "qEn": "Who welcomed the guests?",
          "optionsEn": [
            "The narrator's brother",
            "His father",
            "Their neighbor"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "They said Bismillah and ate; the family stood serving them bread, food, and iced water, and everyone ate heartily and praised God.",
      "sentences": [
        {
          "id": "qr1-15-019",
          "page": 73,
          "ar": "فَسَمَّوُا اللهَ وَأَكَلُوا .",
          "en": "So they said Bismillah and ate.",
          "tokens": [
            {
              "surface": "فَسَمَّوُا",
              "lemma": "سمى",
              "features": "conj+perf.3mp",
              "root": "س م و",
              "pos": "verb",
              "gloss": "to name; to invoke (God's name)"
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
              "surface": "وَأَكَلُوا",
              "lemma": "أكل",
              "features": "conj+perf.3mp",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            }
          ]
        },
        {
          "id": "qr1-15-020",
          "page": 73,
          "ar": "وَكُنَّا قَائِمِيْنَ نُلَاحِظُ الضُّيُوْفَ ،",
          "en": "And we stood watching over the guests,",
          "tokens": [
            {
              "surface": "وَكُنَّا",
              "lemma": "كان",
              "features": "conj+perf.1p",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "قَائِمِيْنَ",
              "lemma": "قام",
              "features": "pl.indef.acc",
              "root": "ق و م",
              "pos": "adj",
              "gloss": "standing"
            },
            {
              "surface": "نُلَاحِظُ",
              "lemma": "لاحظ",
              "features": "impf.1p",
              "root": "ل ح ظ",
              "pos": "verb",
              "gloss": "to notice, watch over"
            },
            {
              "surface": "الضُّيُوْفَ",
              "lemma": "ضيف",
              "features": "def.pl.acc",
              "root": "ض ي ف",
              "pos": "noun",
              "gloss": "guest"
            }
          ]
        },
        {
          "id": "qr1-15-021",
          "page": 73,
          "ar": "وَنُقَدِّمُ لَهُمُ الْخُبْزَ وَالطَّعَامَ",
          "en": "serving them bread and food,",
          "tokens": [
            {
              "surface": "وَنُقَدِّمُ",
              "lemma": "قدم",
              "features": "conj+impf.1p",
              "root": "ق د م",
              "pos": "verb",
              "gloss": "to bring forward, present, offer, serve"
            },
            {
              "surface": "لَهُمُ",
              "lemma": "ل",
              "features": "prep+3mp",
              "root": "",
              "pos": "prep",
              "gloss": "for, to; belonging to"
            },
            {
              "surface": "الْخُبْزَ",
              "lemma": "خبز",
              "features": "def.acc",
              "root": "خ ب ز",
              "pos": "noun",
              "gloss": "bread"
            },
            {
              "surface": "وَالطَّعَامَ",
              "lemma": "طعام",
              "features": "conj+def.acc",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            }
          ]
        },
        {
          "id": "qr1-15-022",
          "page": 73,
          "ar": "وَنَسْقِيْهِمُ الْمَاءَ الْمَثْلُوْجَ ،",
          "en": "and giving them iced water to drink,",
          "tokens": [
            {
              "surface": "وَنَسْقِيْهِمُ",
              "lemma": "سقى",
              "features": "conj+impf.1p+3mp",
              "root": "س ق ي",
              "pos": "verb",
              "gloss": "to give to drink, water"
            },
            {
              "surface": "الْمَاءَ",
              "lemma": "ماء",
              "features": "def.acc",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
            },
            {
              "surface": "الْمَثْلُوْجَ",
              "lemma": "مثلوج",
              "features": "def.acc",
              "root": "ث ل ج",
              "pos": "adj",
              "gloss": "iced, chilled"
            }
          ]
        },
        {
          "id": "qr1-15-023",
          "page": 73,
          "ar": "وَأَصَابَ النَّاسَ مِنْ كُلٍّ مِنَ الطَّعَامِ",
          "en": "and everyone had a share of every kind of food,",
          "tokens": [
            {
              "surface": "وَأَصَابَ",
              "lemma": "أصاب",
              "features": "conj+perf.3ms",
              "root": "ص و ب",
              "pos": "verb",
              "gloss": "got a share of"
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
              "surface": "مِنْ",
              "lemma": "من",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "from"
            },
            {
              "surface": "كُلٍّ",
              "lemma": "كل",
              "features": "indef.gen",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "each, every, all"
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
              "surface": "الطَّعَامِ",
              "lemma": "طعام",
              "features": "def.gen",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            }
          ]
        },
        {
          "id": "qr1-15-024",
          "page": 73,
          "ar": "وَأَكَلُوا بِرَغْبَةٍ",
          "en": "and they ate heartily,",
          "tokens": [
            {
              "surface": "وَأَكَلُوا",
              "lemma": "أكل",
              "features": "conj+perf.3mp",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            },
            {
              "surface": "بِرَغْبَةٍ",
              "lemma": "رغبة",
              "features": "prep+indef.gen",
              "root": "ر غ ب",
              "pos": "noun",
              "gloss": "desire, eagerness"
            }
          ]
        },
        {
          "id": "qr1-15-025",
          "page": 73,
          "ar": "وَحَمِدُوا اللهَ .",
          "en": "and praised God.",
          "tokens": [
            {
              "surface": "وَحَمِدُوا",
              "lemma": "حمد",
              "features": "conj+perf.3mp",
              "root": "ح م د",
              "pos": "verb",
              "gloss": "to praise"
            },
            {
              "surface": "اللهَ",
              "lemma": "الله",
              "features": "acc",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا قَالَ الضُّيُوْفُ قَبْلَ الْأَكْلِ؟",
          "options": [
            "سَمَّوُا اللهَ",
            "شَكَرُوا الطَّبَّاخَ",
            "لَمْ يَقُوْلُوا شَيْئاً"
          ],
          "answer": 0,
          "qEn": "What did the guests say before eating?",
          "optionsEn": [
            "They said Bismillah (invoked God's name)",
            "They thanked the cook",
            "They said nothing"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "The guests got up, washed and dried their hands, and sat with the brother talking and listening to news of the Hijaz, Mecca, Medina, Arafat, and Mina with eagerness and joy, longing for Hajj themselves and praying God to grant them success in it.",
      "sentences": [
        {
          "id": "qr1-15-026",
          "page": 73,
          "ar": "وَقَامُوْا وَغَسَلُوا أَيْدِيَهُمْ",
          "en": "Then they got up and washed their hands,",
          "tokens": [
            {
              "surface": "وَقَامُوْا",
              "lemma": "قام",
              "features": "conj+perf.3mp",
              "root": "ق و م",
              "pos": "verb",
              "gloss": "to rise, get up; to stand"
            },
            {
              "surface": "وَغَسَلُوا",
              "lemma": "غسل",
              "features": "conj+perf.3mp",
              "root": "غ س ل",
              "pos": "verb",
              "gloss": "to wash"
            },
            {
              "surface": "أَيْدِيَهُمْ",
              "lemma": "يد",
              "features": "acc.pl+3mp",
              "root": "ي د ي",
              "pos": "noun",
              "gloss": "hand"
            }
          ]
        },
        {
          "id": "qr1-15-027",
          "page": 73,
          "ar": "وَمَسَحُوْهَا بِالْمِنْشَفَةِ ،",
          "en": "and dried them with the towel,",
          "tokens": [
            {
              "surface": "وَمَسَحُوْهَا",
              "lemma": "مسح",
              "features": "conj+perf.3mp+3fs",
              "root": "م س ح",
              "pos": "verb",
              "gloss": "to wipe"
            },
            {
              "surface": "بِالْمِنْشَفَةِ",
              "lemma": "منشفة",
              "features": "prep+def.gen",
              "root": "ن ش ف",
              "pos": "noun",
              "gloss": "towel"
            }
          ]
        },
        {
          "id": "qr1-15-028",
          "page": 73,
          "ar": "وَجَلَسُوا إِلَىٰ أَخِيْ يَتَحَدَّثُوْنَ وَيَتَكَلَّمُوْنَ",
          "en": "and sat with my brother, talking and conversing,",
          "tokens": [
            {
              "surface": "وَجَلَسُوا",
              "lemma": "جلس",
              "features": "conj+perf.3mp",
              "root": "ج ل س",
              "pos": "verb",
              "gloss": "to sit"
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
              "surface": "أَخِيْ",
              "lemma": "أخ",
              "features": "gen+1s",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brother"
            },
            {
              "surface": "يَتَحَدَّثُوْنَ",
              "lemma": "تحدث",
              "features": "impf.3mp",
              "root": "ح د ث",
              "pos": "verb",
              "gloss": "to converse, talk"
            },
            {
              "surface": "وَيَتَكَلَّمُوْنَ",
              "lemma": "تكلم",
              "features": "conj+impf.3mp",
              "root": "ك ل م",
              "pos": "verb",
              "gloss": "to speak"
            }
          ]
        },
        {
          "id": "qr1-15-029",
          "page": 73,
          "ar": "وَيَسْمَعُوْنَ مِنْهُ أَخْبَارَ الْحِجَازِ وَحَدِيْثَ مَكَّةَ الْمُشَرَّفَةِ وَالْمَدِيْنَةِ الْمُنَوَّرَةِ وَعَرَفَاتٍ وَمِنَىٰ بِكُلِّ رَغْبَةٍ وَسُرُوْرٍ ،",
          "en": "and hearing from him news of the Hijaz, and talk of noble Mecca, radiant Medina, Arafat, and Mina, with all eagerness and joy,",
          "tokens": [
            {
              "surface": "وَيَسْمَعُوْنَ",
              "lemma": "سمع",
              "features": "conj+impf.3mp",
              "root": "س م ع",
              "pos": "verb",
              "gloss": "to hear"
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
              "surface": "أَخْبَارَ",
              "lemma": "خبر",
              "features": "acc.pl.constr",
              "root": "خ ب ر",
              "pos": "noun",
              "gloss": "news, a report"
            },
            {
              "surface": "الْحِجَازِ",
              "lemma": "حجاز",
              "features": "def.gen",
              "root": "",
              "pos": "proper",
              "gloss": "the Ḥijāz (region of western Arabia)"
            },
            {
              "surface": "وَحَدِيْثَ",
              "lemma": "حديث",
              "features": "conj+acc.constr",
              "root": "ح د ث",
              "pos": "noun",
              "gloss": "talk, account"
            },
            {
              "surface": "مَكَّةَ",
              "lemma": "مكة",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Mecca"
            },
            {
              "surface": "الْمُشَرَّفَةِ",
              "lemma": "مشرف",
              "features": "def.gen",
              "root": "ش ر ف",
              "pos": "adj",
              "gloss": "honored, ennobled"
            },
            {
              "surface": "وَالْمَدِيْنَةِ",
              "lemma": "مدينة",
              "features": "conj+def.gen",
              "root": "م د ن",
              "pos": "proper",
              "gloss": "Medina"
            },
            {
              "surface": "الْمُنَوَّرَةِ",
              "lemma": "منور",
              "features": "def.gen",
              "root": "ن و ر",
              "pos": "adj",
              "gloss": "illuminated, radiant"
            },
            {
              "surface": "وَعَرَفَاتٍ",
              "lemma": "عرفات",
              "features": "conj+gen",
              "root": "",
              "pos": "proper",
              "gloss": "ʿArafāt"
            },
            {
              "surface": "وَمِنَىٰ",
              "lemma": "منى",
              "features": "conj+gen",
              "root": "",
              "pos": "proper",
              "gloss": "Minā"
            },
            {
              "surface": "بِكُلِّ",
              "lemma": "كل",
              "features": "prep+gen.constr",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "each, every, all"
            },
            {
              "surface": "رَغْبَةٍ",
              "lemma": "رغبة",
              "features": "indef.gen",
              "root": "ر غ ب",
              "pos": "noun",
              "gloss": "desire, eagerness"
            },
            {
              "surface": "وَسُرُوْرٍ",
              "lemma": "سرور",
              "features": "conj+indef.gen",
              "root": "س ر ر",
              "pos": "noun",
              "gloss": "joy, delight"
            }
          ]
        },
        {
          "id": "qr1-15-030",
          "page": 73,
          "ar": "وَاشْتَاقُوا إِلَى الْحَجِّ ،",
          "en": "and they longed for the Hajj,",
          "tokens": [
            {
              "surface": "وَاشْتَاقُوا",
              "lemma": "اشتاق",
              "features": "conj+perf.3mp",
              "root": "ش و ق",
              "pos": "verb",
              "gloss": "to long for, yearn"
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
              "surface": "الْحَجِّ",
              "lemma": "حج",
              "features": "def.gen",
              "root": "ح ج ج",
              "pos": "noun",
              "gloss": "Ḥajj, the pilgrimage"
            }
          ]
        },
        {
          "id": "qr1-15-031",
          "page": 73,
          "ar": "وَدَعَوُا اللهَ أَنْ يُوَفِّقَهُمْ لِذٰلِكَ .",
          "en": "and prayed to God to grant them success in that.",
          "tokens": [
            {
              "surface": "وَدَعَوُا",
              "lemma": "دعا",
              "features": "conj+perf.3mp",
              "root": "د ع و",
              "pos": "verb",
              "gloss": "to call, invite; to pray, call upon"
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
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "يُوَفِّقَهُمْ",
              "lemma": "وفق",
              "features": "impf.3ms+3mp",
              "root": "و ف ق",
              "pos": "verb",
              "gloss": "to grant success"
            },
            {
              "surface": "لِذٰلِكَ",
              "lemma": "ذلك",
              "features": "prep+gen",
              "root": "",
              "pos": "dem",
              "gloss": "that"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "عَنْ مَاذَا كَانَ الضُّيُوْفُ يَتَحَدَّثُوْنَ مَعَ الْأَخِ؟",
          "options": [
            "عَنِ الْحِجَازِ وَمَكَّةَ وَالْمَدِيْنَةِ وَعَرَفَاتٍ وَمِنَىٰ",
            "عَنِ الدِّرَاسَةِ وَالِامْتِحَانَاتِ",
            "عَنِ التِّجَارَةِ فِي السُّوْقِ"
          ],
          "answer": 0,
          "qEn": "What were the guests talking about with the brother?",
          "optionsEn": [
            "The Hijaz, Mecca, Medina, Arafat, and Mina",
            "Studies and exams",
            "Trade in the market"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "en": "Then the guests asked permission to leave and rose, saying a traditional blessing on the household for their hospitality.",
      "sentences": [
        {
          "id": "qr1-15-032",
          "page": 73,
          "ar": "ثُمَّ اسْتَأْذَنُوْا لِلْخُرُوْجِ",
          "en": "Then they asked permission to leave,",
          "tokens": [
            {
              "surface": "ثُمَّ",
              "lemma": "ثم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "then"
            },
            {
              "surface": "اسْتَأْذَنُوْا",
              "lemma": "استأذن",
              "features": "perf.3mp",
              "root": "أ ذ ن",
              "pos": "verb",
              "gloss": "to ask permission, excuse oneself"
            },
            {
              "surface": "لِلْخُرُوْجِ",
              "lemma": "خروج",
              "features": "prep+def.gen",
              "root": "خ ر ج",
              "pos": "noun",
              "gloss": "going out, departure"
            }
          ]
        },
        {
          "id": "qr1-15-033",
          "page": 73,
          "ar": "وَقَامُوْا يَقُوْلُوْنَ:",
          "en": "and rose, saying:",
          "tokens": [
            {
              "surface": "وَقَامُوْا",
              "lemma": "قام",
              "features": "conj+perf.3mp",
              "root": "ق و م",
              "pos": "verb",
              "gloss": "to rise, get up; to stand"
            },
            {
              "surface": "يَقُوْلُوْنَ",
              "lemma": "قال",
              "features": "impf.3mp",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            }
          ]
        },
        {
          "id": "qr1-15-034",
          "page": 73,
          "ar": "«أَفْطَرَ عِنْدَكُمُ الصَّائِمُوْنَ ،",
          "en": "\"May those who fast break their fast at your table,",
          "tokens": [
            {
              "surface": "أَفْطَرَ",
              "lemma": "أفطر",
              "features": "perf.3ms",
              "root": "ف ط ر",
              "pos": "verb",
              "gloss": "to eat breakfast; to break a fast"
            },
            {
              "surface": "عِنْدَكُمُ",
              "lemma": "عند",
              "features": "prep+2mp",
              "root": "ع ن د",
              "pos": "prep",
              "gloss": "with, in the possession of"
            },
            {
              "surface": "الصَّائِمُوْنَ",
              "lemma": "صام",
              "features": "def.pl.nom",
              "root": "ص و م",
              "pos": "noun",
              "gloss": "those who fast, the fasting ones"
            }
          ]
        },
        {
          "id": "qr1-15-035",
          "page": 73,
          "ar": "وَأَكَلَ طَعَامَكُمُ الْأَبْرَارُ",
          "en": "and may the righteous eat your food,",
          "tokens": [
            {
              "surface": "وَأَكَلَ",
              "lemma": "أكل",
              "features": "conj+perf.3ms",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            },
            {
              "surface": "طَعَامَكُمُ",
              "lemma": "طعام",
              "features": "acc+2mp",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            },
            {
              "surface": "الْأَبْرَارُ",
              "lemma": "بار",
              "features": "def.pl.nom",
              "root": "ب ر ر",
              "pos": "noun",
              "gloss": "the righteous, the dutiful"
            }
          ]
        },
        {
          "id": "qr1-15-036",
          "page": 73,
          "ar": "وَصَلَّتْ عَلَيْكُمُ الْمَلَائِكَةُ» .",
          "en": "and may the angels bless you.\"",
          "tokens": [
            {
              "surface": "وَصَلَّتْ",
              "lemma": "صلى",
              "features": "conj+perf.3fs",
              "root": "ص ل و",
              "pos": "verb",
              "gloss": "bless, invoke blessings upon"
            },
            {
              "surface": "عَلَيْكُمُ",
              "lemma": "على",
              "features": "prep+2mp",
              "root": "",
              "pos": "prep",
              "gloss": "upon, on"
            },
            {
              "surface": "الْمَلَائِكَةُ",
              "lemma": "ملاك",
              "features": "def.pl.nom",
              "root": "م ل ك",
              "pos": "noun",
              "gloss": "angel"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا دَعَا الضُّيُوْفُ عِنْدَ خُرُوْجِهِمْ؟",
          "options": [
            "بِأَنْ يُبَارِكَ اللهُ فِي الطَّعَامِ وَتُصَلِّيَ عَلَيْهِمُ الْمَلَائِكَةُ",
            "بِأَنْ يَعُوْدُوا فِي الْغَدِ",
            "بِأَنْ يَشْكُرَهُمُ الْأَخُ"
          ],
          "answer": 0,
          "qEn": "What did the guests pray for as they left?",
          "optionsEn": [
            "That God bless the food and the angels bless the household",
            "That they would return the next day",
            "That the brother would thank them"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "رَجَعَ أَخِيْ مِنَ",
        "post": "",
        "en": "My brother returned from Hajj.",
        "options": [
          "الْحَجِّ",
          "الْحَجُّ",
          "حَجّاً",
          "الْحَاجُّ"
        ],
        "answer": 0,
        "rationales": [
          "genitive -- object of the preposition مِنَ.",
          "nominative -- wrong case after a preposition.",
          "indefinite accusative -- wrong case and definiteness.",
          "a different word entirely, \"the pilgrim.\""
        ]
      },
      {
        "type": "cloze",
        "pre": "فَفَرِحَ أَهْلُ الْبَيْتِ",
        "post": "",
        "en": "So the family rejoiced greatly.",
        "options": [
          "كَثِيْراً",
          "كَثِيْرٌ",
          "كَثِيْرٍ",
          "كَثِيْرَةً"
        ],
        "answer": 0,
        "rationales": [
          "accusative of manner -- \"greatly.\"",
          "nominative -- wrong case for an adverbial.",
          "genitive -- wrong case.",
          "feminine -- wrong agreement; the adverbial is invariant here."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَوَضَعْنَا أَبَارِيْقَ فِيْهَا مَاءٌ لِغَسْلِ",
        "post": "",
        "en": "We put out pitchers with water in them, for washing hands.",
        "options": [
          "الْأَيْدِيْ",
          "الْأَيْدِيُ",
          "أَيْدٍ",
          "يَدٌ"
        ],
        "answer": 0,
        "rationales": [
          "genitive plural -- object of the construct لِغَسْلِ.",
          "nominative -- wrong case after a construct.",
          "indefinite -- wrong definiteness; specific hands.",
          "singular -- wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَجَلَسَ الضُّيُوْفُ حَوْلَ",
        "post": "",
        "en": "And the guests sat around the sufra.",
        "options": [
          "السُّفْرَةِ",
          "السُّفْرَةُ",
          "السُّفْرَةَ",
          "سُفْرَةٍ"
        ],
        "answer": 0,
        "rationales": [
          "genitive -- object of the preposition حَوْلَ.",
          "nominative -- wrong case after a preposition.",
          "accusative -- wrong case after a preposition.",
          "indefinite -- wrong definiteness; the sufra just set out."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَكُنَّا قَائِمِيْنَ نُلَاحِظُ",
        "post": "",
        "en": "And we stood watching over the guests.",
        "options": [
          "الضُّيُوْفَ",
          "الضُّيُوْفُ",
          "الضُّيُوْفِ",
          "ضُيُوْفٌ"
        ],
        "answer": 0,
        "rationales": [
          "accusative -- object of نُلَاحِظُ.",
          "nominative -- wrong case.",
          "genitive -- wrong case.",
          "indefinite -- wrong definiteness; the guests already present."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَيَسْمَعُوْنَ مِنْهُ أَخْبَارَ",
        "post": "وَحَدِيْثَ مَكَّةَ الْمُشَرَّفَةِ",
        "en": "And hearing from him news of the Hijaz, and talk of noble Mecca.",
        "options": [
          "الْحِجَازِ",
          "الْحِجَازُ",
          "الْحِجَازَ",
          "حِجَازٌ"
        ],
        "answer": 0,
        "rationales": [
          "genitive -- object of the construct أَخْبَارَ.",
          "nominative -- wrong case after a construct.",
          "accusative -- wrong case after a construct.",
          "indefinite -- wrong definiteness; a named region."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَدَعَوُا اللهَ أَنْ يُوَفِّقَهُمْ",
        "post": "",
        "en": "And they prayed to God to grant them success in that.",
        "options": [
          "لِذٰلِكَ",
          "بِذٰلِكَ",
          "ذٰلِكَ",
          "لِذَا"
        ],
        "answer": 0,
        "rationales": [
          "\"for that\" -- ل marking purpose, as the source text has it.",
          "\"by that\" -- a different, less idiomatic preposition here.",
          "bare demonstrative -- missing the required preposition.",
          "a different word, \"therefore.\""
        ]
      },
      {
        "type": "cloze",
        "pre": "وَأَكَلَ طَعَامَكُمُ",
        "post": "",
        "en": "And may the righteous eat your food.",
        "options": [
          "الْأَبْرَارُ",
          "الْأَبْرَارَ",
          "الْأَبْرَارِ",
          "أَبْرَارٌ"
        ],
        "answer": 0,
        "rationales": [
          "nominative -- subject of أَكَلَ.",
          "accusative -- wrong case for the subject.",
          "genitive -- wrong case.",
          "indefinite -- wrong definiteness; the well-known formula names \"the righteous.\""
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "رَجَعَ أَخِيْ مِنَ الْحَجِّ",
        "pre": "",
        "post": "",
        "targetPerson": "أَخَوَايَ",
        "targetEn": "my two brothers (dual)",
        "options": [
          "رَجَعَ أَخَوَايَ",
          "رَجَعَ أَخِيْ",
          "رَجَعَتْ أَخَوَايَ",
          "رَجَعُوْا أَخَوَايَ"
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
        "base": "وَفَرِحَتْ أُمِّيْ جِدَّاً",
        "pre": "",
        "post": "",
        "targetPerson": "أَبَوَايَ",
        "targetEn": "my two parents (dual)",
        "options": [
          "فَرِحَ أَبَوَايَ",
          "فَرِحَتْ أَبَوَايَ",
          "فَرِحُوا أَبَوَايَ",
          "فَرِحْتُ أَبَوَايَ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular verb before a dual subject.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَفَرَشْنَا فِرَاشاً نَظِيْفاً",
        "pre": "",
        "post": "أَمَامَ الْبَيْتِ",
        "targetPerson": "هُنَّ",
        "targetEn": "they (f.)",
        "options": [
          "فَرَشْنَ",
          "فَرَشْنَا",
          "فَرَشَتْ",
          "فَرَشُوا"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. plural perfect -- they (f.) spread it out.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَاسْتَقْبَلَهُمْ أَخِيْ",
        "pre": "",
        "post": "",
        "targetPerson": "أَخَوَاتِيْ",
        "targetEn": "my sisters",
        "options": [
          "فَاسْتَقْبَلَهُمْ أَخَوَاتِيْ",
          "فَاسْتَقْبَلَهُنَّ أَخَوَاتِيْ",
          "فَاسْتَقْبَلَهُمْ أُخْتِيْ",
          "فَاسْتَقْبَلَهُمَا أَخَوَاتِيْ"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. plural subject, masc. plural object retained -- the sisters received them.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَحَمِدُوا اللهَ",
        "pre": "",
        "post": "",
        "targetPerson": "أَنْتَ",
        "targetEn": "you (m. sg.)",
        "options": [
          "حَمِدْتَ",
          "حَمِدُوا",
          "حَمِدَتْ",
          "حَمِدْتُمْ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. singular perfect -- you praised.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَقَامُوْا وَغَسَلُوا أَيْدِيَهُمْ",
        "pre": "",
        "post": "",
        "targetPerson": "نَحْنُ",
        "targetEn": "we",
        "options": [
          "قُمْنَا وَغَسَلْنَا أَيْدِيَنَا",
          "قَامُوْا وَغَسَلُوا أَيْدِيَهُمْ",
          "قُمْتُ وَغَسَلْتُ يَدِيْ",
          "قَامَتْ وَغَسَلَتْ يَدَهَا"
        ],
        "answer": 0,
        "rationales": [
          "1st plural perfect throughout, matching possessive -- we got up and washed our hands.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَاشْتَاقُوا إِلَى الْحَجِّ",
        "pre": "",
        "post": "",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "اشْتَاقَتْ",
          "اشْتَاقُوا",
          "اشْتَاقَ",
          "اشْتَقْنَ"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular perfect -- she longed.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

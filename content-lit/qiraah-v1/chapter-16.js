// القراءة الراشدة, volume one, chapter sixteen -- بر الوالدين.
//
// Follows the shape of chapter-07.js/chapter-13.js -- see
// ../CHAPTER-FORMAT.md for the full specification. Hand-authored directly
// from the scanned pages (qiratur rashida/_al-qir`atur-rashida 1-2.pdf,
// printed pages 74-76); there is no JSON intermediate (see
// PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md -- the pipeline no longer
// emits JSON).
//
// This is the second man's story from the well-known hadith of "the three
// men in the cave" (Ṣaḥīḥ al-Bukhārī/Muslim) -- chapter-13.js already told
// the first man's story (the honest employer) from the same hadith, ending
// the same way: trapped by a rock that rolls down and seals a cave, calling
// on God by the one righteous deed he is most sure of, in nearly identical
// wording (اللَّهُمَّ إِنْ كُنْتَ ... ابْتِغَاءَ وَجْهِكَ فَاكْشِفْ ... الصَّخْرَةَ). Third-person
// narrative throughout, no new structural handling needed.
//
// Vocabulary notes:
//   - بَرّاً/الْبَرُّ ("dutiful," describing the man throughout, and the
//     chapter's title noun بِرّ, "dutifulness") is tagged against a new "بر"
//     lemma (root ب ر ر) -- related to, but a distinct headword from, the
//     "بار" lemma already established in chapter-15.js for الْأَبْرَارُ ("the
//     righteous ones," a different derived form of the same root), per that
//     chapter's forward-looking note.
//   - بَعُدَ ("to go/range far," of the man's search for fodder) is tagged
//     against a new "بعد-يبعد" lemma, a distinct verb from both "بعد" (the
//     preposition "after," established early) and "بعد-مسافة" (the noun
//     "distance, afar," established chapter-14.js) -- all three share a
//     root but are different words, following the established
//     multiple-homograph-fork precedent (e.g. عمل/عمل-يعمل in chapter-13.js).
//   - قَدَمِهِ ("his foot," of the children crying at the man's feet) is
//     tagged against a new "قدم-عضو" lemma, distinct from the already-
//     established "قدم" (the verb "to bring forward, present, offer");
//     the two are unrelated words that happen to share a spelling, the same
//     treatment chapter-14.js gave رجل/رجل-قدم ("man" vs. "leg, foot").
//   - أَيْقَظَ ("to wake someone up," Form IV) is a new, distinct lemma from
//     "استيقظ" (Form X, "to wake up" oneself, already established); related
//     by root but not the same word, the same treatment chapter-15.js gave
//     غسل/اغتسل ("to wash" vs. "to wash oneself, bathe").
//   - إِذاً ("then, in that case," the discourse particle in the man's "إِنِّي
//     إِذاً لَمِنَ الظَّالِمِيْنَ") is a new, distinct lemma "إذن" from the
//     conditional "إذا" ("if, when") already established -- the two look
//     similar but are different particles.
//   - لَبَن ("milk") reuses the lemma already established in chapter-01.js
//     and is left out of NEW_WORDS accordingly, the same treatment
//     chapter-15.js gave فراش.
//   - Seven footnoted words carry book_note across the chapter's three
//     pages: حلب, مرعى (page 74); علف, رقد, كره (page 75); انحدر, سد
//     (page 76) -- matching the established footnote-as-book_note
//     convention.
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch16",
  "number": 16,
  "title": {
    "ar": "بِرُّ الْوَالِدَيْنِ",
    "en": "Dutifulness to One's Parents"
  },
  "pages": [
    74,
    75,
    76
  ],
  "register": "third_person_narrative",
  "newWords": [
    "بر",
    "شيخ",
    "عجوز",
    "رعى",
    "ماشية",
    "حلب",
    "رقد",
    "شفيق",
    "جبل",
    "سد",
    "أيقظ",
    "فجر"
  ],
  "lemmas": {
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
    },
    "رجل": {
      "root": "ر ج ل",
      "pos": "noun",
      "gloss": "man",
      "content": true
    },
    "ل": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to; belonging to",
      "content": false
    },
    "أب": {
      "root": "أ ب و",
      "pos": "noun",
      "gloss": "father",
      "content": true
    },
    "كبير": {
      "root": "ك ب ر",
      "pos": "adj",
      "gloss": "big; older (of a sibling)",
      "content": true
    },
    "ولد": {
      "root": "و ل د",
      "pos": "noun",
      "gloss": "child, boy",
      "content": true
    },
    "صغير": {
      "root": "ص غ ر",
      "pos": "adj",
      "gloss": "young, small",
      "content": true
    },
    "بر": {
      "root": "ب ر ر",
      "pos": "adj",
      "gloss": "dutiful, devoted (to one's parents)",
      "content": true
    },
    "والد": {
      "root": "و ل د",
      "pos": "noun",
      "gloss": "parent",
      "content": true
    },
    "شفيق": {
      "root": "ش ف ق",
      "pos": "adj",
      "gloss": "compassionate, tender, kind",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, on",
      "content": false
    },
    "ذهب": {
      "root": "ذ ه ب",
      "pos": "verb",
      "gloss": "to go",
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
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "صباح": {
      "root": "ص ب ح",
      "pos": "noun",
      "gloss": "morning",
      "content": true
    },
    "إلى": {
      "root": "—",
      "pos": "prep",
      "gloss": "to, towards",
      "content": false
    },
    "مرعى": {
      "root": "ر ع ي",
      "pos": "noun",
      "gloss": "pasture, grazing ground",
      "content": true,
      "book_note": "مَرْعَىٰ (ج) مَرَاعٍ: مَا تَرْعَاهُ الْمَاشِيَةُ، وَمَوْضِعُ الرَّعْيِ (marʿā, pl. marāʿin: what livestock graze on, and the place of grazing)"
    },
    "رعى": {
      "root": "ر ع ي",
      "pos": "verb",
      "gloss": "to graze, pasture, tend (livestock)",
      "content": true
    },
    "ماشية": {
      "root": "م ش ي",
      "pos": "noun",
      "gloss": "livestock, cattle",
      "content": true
    },
    "رجع": {
      "root": "ر ج ع",
      "pos": "verb",
      "gloss": "to return",
      "content": true
    },
    "ب": {
      "root": "—",
      "pos": "prep",
      "gloss": "with, by",
      "content": false
    },
    "عشاء": {
      "root": "ع ش و",
      "pos": "noun",
      "gloss": "evening, nightfall",
      "content": true
    },
    "حلب": {
      "root": "ح ل ب",
      "pos": "verb",
      "gloss": "to milk",
      "content": true,
      "book_note": "حَلَبَ يَحْلِبُ حَلْباً الشَّاة ونحوها: اسْتَخْرَجَ مَا فِيْ ضَرْعِهَا مِنَ اللَّبَنِ (ḥalaba: to milk a ewe or the like -- to draw the milk out of its udder)"
    },
    "سقى": {
      "root": "س ق ي",
      "pos": "verb",
      "gloss": "to give to drink, water",
      "content": true
    },
    "انتظر": {
      "root": "ن ظ ر",
      "pos": "verb",
      "gloss": "to wait",
      "content": true
    },
    "قدوم": {
      "root": "ق د م",
      "pos": "noun",
      "gloss": "arrival, coming",
      "content": true
    },
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "not; no",
      "content": false
    },
    "نام": {
      "root": "ن و م",
      "pos": "verb",
      "gloss": "to sleep",
      "content": true
    },
    "حتى": {
      "root": "—",
      "pos": "part",
      "gloss": "until",
      "content": false
    },
    "حضر-حضور": {
      "root": "ح ض ر",
      "pos": "verb",
      "gloss": "to attend, be present, arrive",
      "content": true
    },
    "لبن": {
      "root": "ل ب ن",
      "pos": "noun",
      "gloss": "milk",
      "content": true
    },
    "مرة": {
      "root": "م ر ر",
      "pos": "noun",
      "gloss": "time, occasion",
      "content": true
    },
    "بعد-يبعد": {
      "root": "ب ع د",
      "pos": "verb",
      "gloss": "to go far, become distant",
      "content": true
    },
    "طلب": {
      "root": "ط ل ب",
      "pos": "verb",
      "gloss": "to ask, request",
      "content": true
    },
    "شجر": {
      "root": "ش ج ر",
      "pos": "noun",
      "gloss": "tree(s)",
      "content": true
    },
    "علف": {
      "root": "ع ل ف",
      "pos": "noun",
      "gloss": "fodder",
      "content": true,
      "book_note": "عَلَف (ج) أَعْلَاف وَعِلَاف: طَعَامُ الْحَيَوَانِ (ʿalaf, pl. aʿlāf/ʿilāf: animal feed, fodder)"
    },
    "تأخر": {
      "root": "أ خ ر",
      "pos": "verb",
      "gloss": "to fall back, be late, hold back",
      "content": true
    },
    "ذلك": {
      "root": "—",
      "pos": "dem",
      "gloss": "that",
      "content": false
    },
    "بيت": {
      "root": "ب ي ت",
      "pos": "noun",
      "gloss": "house",
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
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "ليل": {
      "root": "ل ي ل",
      "pos": "noun",
      "gloss": "night",
      "content": true
    },
    "أم": {
      "root": "أ م م",
      "pos": "noun",
      "gloss": "mother",
      "content": true
    },
    "طويل": {
      "root": "ط و ل",
      "pos": "adj",
      "gloss": "long, extended",
      "content": true
    },
    "جائع": {
      "root": "ج و ع",
      "pos": "adj",
      "gloss": "hungry",
      "content": true
    },
    "رقد": {
      "root": "ر ق د",
      "pos": "verb",
      "gloss": "to sleep, doze off",
      "content": true,
      "book_note": "رَقَدَ يَرْقُدُ رُقَاداً وَرُقُوْداً: نَامَ (raqada: to sleep, slumber)"
    },
    "بعد": {
      "root": "—",
      "pos": "prep",
      "gloss": "after",
      "content": false
    },
    "دخل": {
      "root": "د خ ل",
      "pos": "verb",
      "gloss": "to enter",
      "content": true
    },
    "وجد": {
      "root": "و ج د",
      "pos": "verb",
      "gloss": "to find",
      "content": true
    },
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that",
      "content": false
    },
    "شيخ": {
      "root": "ش ي خ",
      "pos": "noun",
      "gloss": "old man, elder",
      "content": true
    },
    "عجوز": {
      "root": "ع ج ز",
      "pos": "noun",
      "gloss": "old woman",
      "content": true
    },
    "تأسف": {
      "root": "أ س ف",
      "pos": "verb",
      "gloss": "to regret, feel sorry",
      "content": true
    },
    "حزن": {
      "root": "ح ز ن",
      "pos": "verb",
      "gloss": "to grieve, be sad",
      "content": true
    },
    "ندم": {
      "root": "ن د م",
      "pos": "verb",
      "gloss": "to regret",
      "content": true
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "أسف": {
      "root": "أ س ف",
      "pos": "noun",
      "gloss": "regret, sorrow",
      "content": true
    },
    "إن": {
      "root": "—",
      "pos": "part",
      "gloss": "if; indeed; that",
      "content": false
    },
    "فكر": {
      "root": "ف ك ر",
      "pos": "verb",
      "gloss": "to think",
      "content": true
    },
    "هل": {
      "root": "—",
      "pos": "part",
      "gloss": "[yes/no question marker]",
      "content": false
    },
    "أيقظ": {
      "root": "ي ق ظ",
      "pos": "verb",
      "gloss": "to wake (someone) up",
      "content": true
    },
    "كره": {
      "root": "ك ر ه",
      "pos": "verb",
      "gloss": "to dislike, hate, be loath to",
      "content": true,
      "book_note": "كَرِهَ يَكْرَهُ كَرَاهَةً: فُلَاناً/الْأَمْرَ: مَقَتَهُ (عَكْسُهُ أَحَبَّهُ) (kariha: to dislike, detest -- the opposite of aḥabba, \"to love\")"
    },
    "أهل": {
      "root": "أ ه ل",
      "pos": "noun",
      "gloss": "people, family, folk",
      "content": true
    },
    "لكن": {
      "root": "—",
      "pos": "part",
      "gloss": "but",
      "content": false
    },
    "قبل": {
      "root": "—",
      "pos": "prep",
      "gloss": "before",
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
    "كيف": {
      "root": "ك ي ف",
      "pos": "part",
      "gloss": "how",
      "content": false
    },
    "لم": {
      "root": "—",
      "pos": "part",
      "gloss": "not (with jussive, past negation)",
      "content": false
    },
    "إذن": {
      "root": "—",
      "pos": "part",
      "gloss": "then, in that case",
      "content": false
    },
    "ظالم": {
      "root": "ظ ل م",
      "pos": "noun",
      "gloss": "wrongdoer, oppressor",
      "content": true
    },
    "وقف": {
      "root": "و ق ف",
      "pos": "verb",
      "gloss": "to stand, stop",
      "content": true
    },
    "استيقظ": {
      "root": "ي ق ظ",
      "pos": "verb",
      "gloss": "to wake up",
      "content": true
    },
    "بقي": {
      "root": "ب ق ي",
      "pos": "verb",
      "gloss": "to remain, be left",
      "content": true
    },
    "قدح": {
      "root": "ق د ح",
      "pos": "noun",
      "gloss": "cup, drinking vessel",
      "content": true
    },
    "يد": {
      "root": "ي د ي",
      "pos": "noun",
      "gloss": "hand",
      "content": true
    },
    "طفل": {
      "root": "ط ف ل",
      "pos": "noun",
      "gloss": "child",
      "content": true
    },
    "بكى": {
      "root": "ب ك ي",
      "pos": "verb",
      "gloss": "to cry, weep",
      "content": true
    },
    "صاح": {
      "root": "ص ي ح",
      "pos": "verb",
      "gloss": "to shout, cry out",
      "content": true
    },
    "عند": {
      "root": "ع ن د",
      "pos": "prep",
      "gloss": "with, at, in the possession of",
      "content": false
    },
    "قدم-عضو": {
      "root": "ق د م",
      "pos": "noun",
      "gloss": "foot",
      "content": true
    },
    "شيء": {
      "root": "ش ي أ",
      "pos": "noun",
      "gloss": "thing",
      "content": true
    },
    "شرب": {
      "root": "ش ر ب",
      "pos": "verb",
      "gloss": "to drink",
      "content": true
    },
    "بات": {
      "root": "ب ي ت",
      "pos": "verb",
      "gloss": "to spend the night",
      "content": true
    },
    "قام": {
      "root": "ق و م",
      "pos": "verb",
      "gloss": "to rise, get up; to stand",
      "content": true
    },
    "طلع": {
      "root": "ط ل ع",
      "pos": "verb",
      "gloss": "to rise, come up (of the sun/dawn)",
      "content": true
    },
    "فجر": {
      "root": "ف ج ر",
      "pos": "noun",
      "gloss": "dawn",
      "content": true
    },
    "قدم": {
      "root": "ق د م",
      "pos": "verb",
      "gloss": "to bring forward, present, offer, serve",
      "content": true
    },
    "ثم": {
      "root": "—",
      "pos": "part",
      "gloss": "then",
      "content": false
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
      "gloss": "about, from",
      "content": false
    },
    "هذا": {
      "root": "—",
      "pos": "dem",
      "gloss": "this",
      "content": false
    },
    "الذي": {
      "root": "—",
      "pos": "rel",
      "gloss": "who, which, that",
      "content": false
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
    "قبل-قبول": {
      "root": "ق ب ل",
      "pos": "verb",
      "gloss": "to accept",
      "content": true
    },
    "مشى": {
      "root": "م ش ي",
      "pos": "verb",
      "gloss": "to walk",
      "content": true
    },
    "رأى": {
      "root": "ر أ ي",
      "pos": "verb",
      "gloss": "to see",
      "content": true
    },
    "غار": {
      "root": "غ و ر",
      "pos": "noun",
      "gloss": "cave",
      "content": true
    },
    "خرج": {
      "root": "خ ر ج",
      "pos": "verb",
      "gloss": "to go out",
      "content": true
    },
    "انحدر": {
      "root": "ح د ر",
      "pos": "verb",
      "gloss": "to roll down, come tumbling down",
      "content": true,
      "book_note": "انْحَدَرَ يَنْحَدِرُ انْحِدَاراً: نَزَلَ وَأَقْبَلَ (inḥadara: to descend, come rolling/tumbling down)"
    },
    "صخرة": {
      "root": "ص خ ر",
      "pos": "noun",
      "gloss": "boulder, rock",
      "content": true
    },
    "جبل": {
      "root": "ج ب ل",
      "pos": "noun",
      "gloss": "mountain",
      "content": true
    },
    "سد": {
      "root": "س د د",
      "pos": "verb",
      "gloss": "to block, seal shut",
      "content": true,
      "book_note": "سَدَّ يَسُدُّ سَدّاً عَلَى الشَّيْءِ: أَغْلَقَهُ (sadda: to block, seal something shut)"
    },
    "دعا": {
      "root": "د ع و",
      "pos": "verb",
      "gloss": "to invite; to call upon, pray to",
      "content": true
    },
    "اللهم": {
      "root": "—",
      "pos": "proper",
      "gloss": "O Allah! (vocative form of Allah)",
      "content": true
    },
    "علم": {
      "root": "ع ل م",
      "pos": "verb",
      "gloss": "to know",
      "content": true
    },
    "فعل": {
      "root": "ف ع ل",
      "pos": "verb",
      "gloss": "to do",
      "content": true
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
    "هذه": {
      "root": "—",
      "pos": "dem",
      "gloss": "this (f.)",
      "content": false
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
      "en": "There was a man with elderly parents and young children -- dutiful to his parents, tender toward his children.",
      "sentences": [
        {
          "id": "qr1-16-001",
          "page": 74,
          "ar": "كَانَ رَجُلٌ لَهُ أَبَوَانِ كَبِيْرَانِ وَأَوْلَادٌ صِغَارٌ ،",
          "en": "There was a man with two elderly parents and young children,",
          "tokens": [
            {
              "surface": "كَانَ",
              "lemma": "كان",
              "features": "perf.3ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
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
              "surface": "لَهُ",
              "lemma": "ل",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "for, to; belonging to"
            },
            {
              "surface": "أَبَوَانِ",
              "lemma": "أب",
              "features": "indef.nom.du",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "كَبِيْرَانِ",
              "lemma": "كبير",
              "features": "indef.nom.du",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "big; older (of a sibling)"
            },
            {
              "surface": "وَأَوْلَادٌ",
              "lemma": "ولد",
              "features": "conj+indef.pl.nom",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "صِغَارٌ",
              "lemma": "صغير",
              "features": "indef.pl.nom",
              "root": "ص غ ر",
              "pos": "adj",
              "gloss": "young, small"
            }
          ]
        },
        {
          "id": "qr1-16-002",
          "page": 74,
          "ar": "وَكَانَ بَرّاً بِالْوَالِدَيْنِ شَفِيْقاً عَلَىٰ الْأَوْلَادِ .",
          "en": "and he was dutiful to his parents, tender toward his children.",
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
              "surface": "بَرّاً",
              "lemma": "بر",
              "features": "indef.acc",
              "root": "ب ر ر",
              "pos": "adj",
              "gloss": "dutiful, devoted (to one's parents)"
            },
            {
              "surface": "بِالْوَالِدَيْنِ",
              "lemma": "والد",
              "features": "prep+def.du.gen",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "parent"
            },
            {
              "surface": "شَفِيْقاً",
              "lemma": "شفيق",
              "features": "indef.acc",
              "root": "ش ف ق",
              "pos": "adj",
              "gloss": "compassionate, tender, kind"
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
              "surface": "الْأَوْلَادِ",
              "lemma": "ولد",
              "features": "def.pl.gen",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَيْفَ كَانَ الرَّجُلُ مَعَ وَالِدَيْهِ وَأَوْلَادِهِ؟",
          "options": [
            "بَرّاً بِالْوَالِدَيْنِ شَفِيْقاً عَلَى الْأَوْلَادِ",
            "قَاسِياً عَلَيْهِمْ",
            "لَا يَهْتَمُّ بِهِمْ"
          ],
          "answer": 0,
          "qEn": "How was the man toward his parents and children?",
          "optionsEn": [
            "Dutiful to his parents, tender toward his children",
            "Harsh toward them",
            "Unconcerned with them"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "Every morning he went out to pasture the livestock, and came back with them in the evening to milk them and give his parents and young children to drink.",
      "sentences": [
        {
          "id": "qr1-16-003",
          "page": 74,
          "ar": "وَكَانَ يَذْهَبُ كُلَّ يَوْمٍ فِي الصَّبَاحِ إِلَىٰ الْمَرْعَىٰ",
          "en": "Every day, in the morning, he would go to the pasture",
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
              "surface": "يَذْهَبُ",
              "lemma": "ذهب",
              "features": "impf.3ms",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
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
              "surface": "فِي",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الصَّبَاحِ",
              "lemma": "صباح",
              "features": "def.gen",
              "root": "ص ب ح",
              "pos": "noun",
              "gloss": "morning"
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
              "surface": "الْمَرْعَىٰ",
              "lemma": "مرعى",
              "features": "def.gen",
              "root": "ر ع ي",
              "pos": "noun",
              "gloss": "pasture, grazing ground"
            }
          ]
        },
        {
          "id": "qr1-16-004",
          "page": 74,
          "ar": "وَيَرْعَىٰ الْمَاشِيَةَ",
          "en": "and pasture the livestock,",
          "tokens": [
            {
              "surface": "وَيَرْعَىٰ",
              "lemma": "رعى",
              "features": "conj+impf.3ms",
              "root": "ر ع ي",
              "pos": "verb",
              "gloss": "to graze, pasture, tend (livestock)"
            },
            {
              "surface": "الْمَاشِيَةَ",
              "lemma": "ماشية",
              "features": "def.acc",
              "root": "م ش ي",
              "pos": "noun",
              "gloss": "livestock, cattle"
            }
          ]
        },
        {
          "id": "qr1-16-005",
          "page": 74,
          "ar": "وَيَرْجِعُ بِهَا فِي الْعِشَاءِ ،",
          "en": "and come back with them in the evening,",
          "tokens": [
            {
              "surface": "وَيَرْجِعُ",
              "lemma": "رجع",
              "features": "conj+impf.3ms",
              "root": "ر ج ع",
              "pos": "verb",
              "gloss": "to return"
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
              "surface": "فِي",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الْعِشَاءِ",
              "lemma": "عشاء",
              "features": "def.gen",
              "root": "ع ش و",
              "pos": "noun",
              "gloss": "evening, nightfall"
            }
          ]
        },
        {
          "id": "qr1-16-006",
          "page": 74,
          "ar": "فَيَحْلِبُهَا",
          "en": "and milk them,",
          "tokens": [
            {
              "surface": "فَيَحْلِبُهَا",
              "lemma": "حلب",
              "features": "conj+impf.3ms+3fs",
              "root": "ح ل ب",
              "pos": "verb",
              "gloss": "to milk"
            }
          ]
        },
        {
          "id": "qr1-16-007",
          "page": 74,
          "ar": "وَيَسْقِيْ وَالِدَيْهِ وَأَوْلَادَهُ الصِّغَارَ .",
          "en": "and give his parents and his young children to drink.",
          "tokens": [
            {
              "surface": "وَيَسْقِيْ",
              "lemma": "سقى",
              "features": "conj+impf.3ms",
              "root": "س ق ي",
              "pos": "verb",
              "gloss": "to give to drink, water"
            },
            {
              "surface": "وَالِدَيْهِ",
              "lemma": "والد",
              "features": "du.acc+3ms",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "parent"
            },
            {
              "surface": "وَأَوْلَادَهُ",
              "lemma": "ولد",
              "features": "conj+pl.acc+3ms",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "الصِّغَارَ",
              "lemma": "صغير",
              "features": "def.pl.acc",
              "root": "ص غ ر",
              "pos": "adj",
              "gloss": "young, small"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا كَانَ يَفْعَلُ الرَّجُلُ كُلَّ يَوْمٍ؟",
          "options": [
            "يَذْهَبُ إِلَى الْمَرْعَىٰ وَيَرْعَى الْمَاشِيَةَ ثُمَّ يَحْلِبُهَا وَيَسْقِيْ أَهْلَهُ",
            "يَذْهَبُ إِلَى السُّوْقِ لِلْبَيْعِ",
            "يَجْلِسُ فِي الْبَيْتِ طُوْلَ الْيَوْمِ"
          ],
          "answer": 0,
          "qEn": "What did the man do every day?",
          "optionsEn": [
            "Went to pasture the livestock, then milked them and gave his family to drink",
            "Went to the market to sell",
            "Sat at home all day"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "His parents and young children waited for his return, and would not sleep until he arrived and gave them milk.",
      "sentences": [
        {
          "id": "qr1-16-008",
          "page": 74,
          "ar": "وَكَانَ أَبَوَاهُ وَأَوْلَادُهُ الصِّغَارُ يَنْتَظِرُوْنَ قُدُوْمَهُ ،",
          "en": "His parents and young children would wait for his arrival,",
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
              "surface": "أَبَوَاهُ",
              "lemma": "أب",
              "features": "du.nom+3ms",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "وَأَوْلَادُهُ",
              "lemma": "ولد",
              "features": "conj+pl.nom+3ms",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "الصِّغَارُ",
              "lemma": "صغير",
              "features": "def.pl.nom",
              "root": "ص غ ر",
              "pos": "adj",
              "gloss": "young, small"
            },
            {
              "surface": "يَنْتَظِرُوْنَ",
              "lemma": "انتظر",
              "features": "impf.3mp",
              "root": "ن ظ ر",
              "pos": "verb",
              "gloss": "to wait"
            },
            {
              "surface": "قُدُوْمَهُ",
              "lemma": "قدوم",
              "features": "acc+3ms",
              "root": "ق د م",
              "pos": "noun",
              "gloss": "arrival, coming"
            }
          ]
        },
        {
          "id": "qr1-16-009",
          "page": 74,
          "ar": "وَلَا يَنَامُوْنَ حَتَّىٰ يَحْضُرَ الرَّجُلُ وَيَسْقِيَهُمُ اللَّبَنَ .",
          "en": "and not sleep until the man arrived and gave them milk to drink.",
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
              "surface": "يَنَامُوْنَ",
              "lemma": "نام",
              "features": "impf.3mp",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "to sleep"
            },
            {
              "surface": "حَتَّىٰ",
              "lemma": "حتى",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "until"
            },
            {
              "surface": "يَحْضُرَ",
              "lemma": "حضر-حضور",
              "features": "impf.3ms",
              "root": "ح ض ر",
              "pos": "verb",
              "gloss": "to attend, be present, arrive"
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
              "surface": "وَيَسْقِيَهُمُ",
              "lemma": "سقى",
              "features": "conj+impf.3ms+3mp",
              "root": "س ق ي",
              "pos": "verb",
              "gloss": "to give to drink, water"
            },
            {
              "surface": "اللَّبَنَ",
              "lemma": "لبن",
              "features": "def.acc",
              "root": "ل ب ن",
              "pos": "noun",
              "gloss": "milk"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "حَتَّىٰ مَتَىٰ كَانَ أَهْلُهُ لَا يَنَامُوْنَ؟",
          "options": [
            "حَتَّىٰ يَحْضُرَ الرَّجُلُ وَيَسْقِيَهُمُ اللَّبَنَ",
            "حَتَّىٰ طُلُوْعِ الشَّمْسِ",
            "حَتَّىٰ يَعُوْدَ مِنَ السَّفَرِ"
          ],
          "answer": 0,
          "qEn": "Until when would his family stay awake?",
          "optionsEn": [
            "Until the man arrived and gave them milk",
            "Until sunrise",
            "Until he returned from a journey"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "One day he took the livestock far off in search of trees and fodder, and was late, returning home well into the night.",
      "sentences": [
        {
          "id": "qr1-16-010",
          "page": 74,
          "ar": "مَرَّةً ذَهَبَ الرَّجُلُ بِالْمَاشِيَةِ إِلَىٰ الْمَرْعَىٰ ،",
          "en": "One time the man took the livestock to the pasture,",
          "tokens": [
            {
              "surface": "مَرَّةً",
              "lemma": "مرة",
              "features": "indef.acc",
              "root": "م ر ر",
              "pos": "noun",
              "gloss": "time, occasion"
            },
            {
              "surface": "ذَهَبَ",
              "lemma": "ذهب",
              "features": "perf.3ms",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
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
              "surface": "بِالْمَاشِيَةِ",
              "lemma": "ماشية",
              "features": "prep+def.gen",
              "root": "م ش ي",
              "pos": "noun",
              "gloss": "livestock, cattle"
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
              "surface": "الْمَرْعَىٰ",
              "lemma": "مرعى",
              "features": "def.gen",
              "root": "ر ع ي",
              "pos": "noun",
              "gloss": "pasture, grazing ground"
            }
          ]
        },
        {
          "id": "qr1-16-011",
          "page": 75,
          "ar": "فَبَعُدَ فِيْ طَلَبِ الشَّجَرِ وَالْعَلَفِ",
          "en": "and ranged far in search of trees and fodder,",
          "tokens": [
            {
              "surface": "فَبَعُدَ",
              "lemma": "بعد-يبعد",
              "features": "conj+perf.3ms",
              "root": "ب ع د",
              "pos": "verb",
              "gloss": "to go far, become distant"
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
              "surface": "طَلَبِ",
              "lemma": "طلب",
              "features": "gen.constr",
              "root": "ط ل ب",
              "pos": "verb",
              "gloss": "to ask, request"
            },
            {
              "surface": "الشَّجَرِ",
              "lemma": "شجر",
              "features": "def.gen",
              "root": "ش ج ر",
              "pos": "noun",
              "gloss": "tree(s)"
            },
            {
              "surface": "وَالْعَلَفِ",
              "lemma": "علف",
              "features": "conj+def.gen",
              "root": "ع ل ف",
              "pos": "noun",
              "gloss": "fodder"
            }
          ]
        },
        {
          "id": "qr1-16-012",
          "page": 75,
          "ar": "فَتَأَخَّرَ ذٰلِكَ الْيَوْمَ ،",
          "en": "and was late that day,",
          "tokens": [
            {
              "surface": "فَتَأَخَّرَ",
              "lemma": "تأخر",
              "features": "conj+perf.3ms",
              "root": "أ خ ر",
              "pos": "verb",
              "gloss": "to fall back, be late, hold back"
            },
            {
              "surface": "ذٰلِكَ",
              "lemma": "ذلك",
              "features": "acc",
              "root": "",
              "pos": "dem",
              "gloss": "that"
            },
            {
              "surface": "الْيَوْمَ",
              "lemma": "يوم",
              "features": "def.acc",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            }
          ]
        },
        {
          "id": "qr1-16-013",
          "page": 75,
          "ar": "فَرَجَعَ إِلَىٰ الْبَيْتِ وَقَدْ ذَهَبَ كَثِيْرٌ مِنَ اللَّيْلِ .",
          "en": "and returned home when much of the night had already gone.",
          "tokens": [
            {
              "surface": "فَرَجَعَ",
              "lemma": "رجع",
              "features": "conj+perf.3ms",
              "root": "ر ج ع",
              "pos": "verb",
              "gloss": "to return"
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
              "surface": "الْبَيْتِ",
              "lemma": "بيت",
              "features": "def.gen",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            },
            {
              "surface": "وَقَدْ",
              "lemma": "قد",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "already, indeed"
            },
            {
              "surface": "ذَهَبَ",
              "lemma": "ذهب",
              "features": "perf.3ms",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
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
              "surface": "اللَّيْلِ",
              "lemma": "ليل",
              "features": "def.gen",
              "root": "ل ي ل",
              "pos": "noun",
              "gloss": "night"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا تَأَخَّرَ الرَّجُلُ ذٰلِكَ الْيَوْمَ؟",
          "options": [
            "لِأَنَّهُ بَعُدَ فِيْ طَلَبِ الشَّجَرِ وَالْعَلَفِ",
            "لِأَنَّهُ نَامَ فِي الطَّرِيْقِ",
            "لِأَنَّهُ ضَاعَ عَنِ الْقَرْيَةِ"
          ],
          "answer": 0,
          "qEn": "Why was the man late that day?",
          "optionsEn": [
            "Because he had ranged far in search of trees and fodder",
            "Because he fell asleep on the way",
            "Because he got lost from the village"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "His father and mother waited a long time, hungry, and finally fell asleep after the long wait.",
      "sentences": [
        {
          "id": "qr1-16-014",
          "page": 75,
          "ar": "وَانْتَظَرَ أَبُوْهُ وَأُمُّهُ طَوِيْلاً ،",
          "en": "His father and mother waited a long time,",
          "tokens": [
            {
              "surface": "وَانْتَظَرَ",
              "lemma": "انتظر",
              "features": "conj+perf.3ms",
              "root": "ن ظ ر",
              "pos": "verb",
              "gloss": "to wait"
            },
            {
              "surface": "أَبُوْهُ",
              "lemma": "أب",
              "features": "nom+3ms",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "وَأُمُّهُ",
              "lemma": "أم",
              "features": "conj+nom+3ms",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
            },
            {
              "surface": "طَوِيْلاً",
              "lemma": "طويل",
              "features": "acc",
              "root": "ط و ل",
              "pos": "adj",
              "gloss": "long, extended"
            }
          ]
        },
        {
          "id": "qr1-16-015",
          "page": 75,
          "ar": "وَكَانَ أَبُوْهُ جَائِعاً وَكَانَتْ أُمُّهُ جَائِعَةً ،",
          "en": "and his father was hungry, and his mother was hungry,",
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
              "surface": "أَبُوْهُ",
              "lemma": "أب",
              "features": "nom+3ms",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "جَائِعاً",
              "lemma": "جائع",
              "features": "indef.acc",
              "root": "ج و ع",
              "pos": "adj",
              "gloss": "hungry"
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
              "surface": "أُمُّهُ",
              "lemma": "أم",
              "features": "nom+3ms",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
            },
            {
              "surface": "جَائِعَةً",
              "lemma": "جائع",
              "features": "indef.acc.f",
              "root": "ج و ع",
              "pos": "adj",
              "gloss": "hungry"
            }
          ]
        },
        {
          "id": "qr1-16-016",
          "page": 75,
          "ar": "وَرَقَدَ أَبُوْهُ وَرَقَدَتْ أُمُّهُ بَعْدَ الِانْتِظَارِ الطَّوِيْلِ .",
          "en": "and his father fell asleep, and his mother fell asleep, after the long wait.",
          "tokens": [
            {
              "surface": "وَرَقَدَ",
              "lemma": "رقد",
              "features": "conj+perf.3ms",
              "root": "ر ق د",
              "pos": "verb",
              "gloss": "to sleep, doze off"
            },
            {
              "surface": "أَبُوْهُ",
              "lemma": "أب",
              "features": "nom+3ms",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "وَرَقَدَتْ",
              "lemma": "رقد",
              "features": "conj+perf.3fs",
              "root": "ر ق د",
              "pos": "verb",
              "gloss": "to sleep, doze off"
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
              "surface": "بَعْدَ",
              "lemma": "بعد",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "after"
            },
            {
              "surface": "الِانْتِظَارِ",
              "lemma": "انتظر",
              "features": "def.gen",
              "root": "ن ظ ر",
              "pos": "noun",
              "gloss": "the waiting"
            },
            {
              "surface": "الطَّوِيْلِ",
              "lemma": "طويل",
              "features": "def.gen",
              "root": "ط و ل",
              "pos": "adj",
              "gloss": "long, extended"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا حَدَثَ لِأَبَوَيِ الرَّجُلِ بَعْدَ الِانْتِظَارِ الطَّوِيْلِ؟",
          "options": [
            "رَقَدَا وَهُمَا جَائِعَانِ",
            "غَضِبَا وَخَرَجَا لِلْبَحْثِ عَنْهُ",
            "أَكَلَا دُوْنَ أَنْ يَنْتَظِرَاهُ"
          ],
          "answer": 0,
          "qEn": "What happened to the man's parents after the long wait?",
          "optionsEn": [
            "They fell asleep, hungry",
            "They got angry and went out to search for him",
            "They ate without waiting for him"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "en": "The man came home to find his old father and old mother already asleep, and was full of regret at how late he had been.",
      "sentences": [
        {
          "id": "qr1-16-017",
          "page": 75,
          "ar": "وَرَجَعَ الرَّجُلُ وَدَخَلَ الْبَيْتَ ،",
          "en": "The man returned and entered the house,",
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
              "surface": "الرَّجُلُ",
              "lemma": "رجل",
              "features": "def.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
            },
            {
              "surface": "وَدَخَلَ",
              "lemma": "دخل",
              "features": "conj+perf.3ms",
              "root": "د خ ل",
              "pos": "verb",
              "gloss": "to enter"
            },
            {
              "surface": "الْبَيْتَ",
              "lemma": "بيت",
              "features": "def.acc",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            }
          ]
        },
        {
          "id": "qr1-16-018",
          "page": 75,
          "ar": "فَوَجَدَ أَنَّ أَبَاهُ الشَّيْخَ قَدْ رَقَدَ ،",
          "en": "and found that his old father had fallen asleep,",
          "tokens": [
            {
              "surface": "فَوَجَدَ",
              "lemma": "وجد",
              "features": "conj+perf.3ms",
              "root": "و ج د",
              "pos": "verb",
              "gloss": "to find"
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
              "surface": "أَبَاهُ",
              "lemma": "أب",
              "features": "acc+3ms",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "الشَّيْخَ",
              "lemma": "شيخ",
              "features": "def.acc",
              "root": "ش ي خ",
              "pos": "noun",
              "gloss": "old man, elder"
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
              "surface": "رَقَدَ",
              "lemma": "رقد",
              "features": "perf.3ms",
              "root": "ر ق د",
              "pos": "verb",
              "gloss": "to sleep, doze off"
            }
          ]
        },
        {
          "id": "qr1-16-019",
          "page": 75,
          "ar": "وَأَنَّ أُمَّهُ الْعَجُوْزَ قَدْ رَقَدَتْ .",
          "en": "and that his old mother had fallen asleep.",
          "tokens": [
            {
              "surface": "وَأَنَّ",
              "lemma": "أن",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "أُمَّهُ",
              "lemma": "أم",
              "features": "acc+3ms",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
            },
            {
              "surface": "الْعَجُوْزَ",
              "lemma": "عجوز",
              "features": "def.acc",
              "root": "ع ج ز",
              "pos": "noun",
              "gloss": "old woman"
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
              "surface": "رَقَدَتْ",
              "lemma": "رقد",
              "features": "perf.3fs",
              "root": "ر ق د",
              "pos": "verb",
              "gloss": "to sleep, doze off"
            }
          ]
        },
        {
          "id": "qr1-16-020",
          "page": 75,
          "ar": "فَتَأَسَّفَ الرَّجُلُ وَحَزِنَ كَثِيْراً وَنَدِمَ عَلَىٰ تَأْخِيْرِهِ ،",
          "en": "The man was full of regret and grieved greatly and rued his lateness,",
          "tokens": [
            {
              "surface": "فَتَأَسَّفَ",
              "lemma": "تأسف",
              "features": "conj+perf.3ms",
              "root": "أ س ف",
              "pos": "verb",
              "gloss": "to regret, feel sorry"
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
            },
            {
              "surface": "وَنَدِمَ",
              "lemma": "ندم",
              "features": "conj+perf.3ms",
              "root": "ن د م",
              "pos": "verb",
              "gloss": "to regret"
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
              "surface": "تَأْخِيْرِهِ",
              "lemma": "تأخر",
              "features": "gen+3ms",
              "root": "أ خ ر",
              "pos": "noun",
              "gloss": "his lateness, his delay"
            }
          ]
        },
        {
          "id": "qr1-16-021",
          "page": 75,
          "ar": "وَقَالَ: أَسَفاً إِنِّي تَأَخَّرْتُ الْيَوْمَ فِي الْمَرْعَىٰ",
          "en": "and said: What a shame -- I was late today at the pasture,",
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
              "surface": "أَسَفاً",
              "lemma": "أسف",
              "features": "indef.acc",
              "root": "أ س ف",
              "pos": "noun",
              "gloss": "regret, sorrow"
            },
            {
              "surface": "إِنِّي",
              "lemma": "إن",
              "features": "part+1s",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed; that"
            },
            {
              "surface": "تَأَخَّرْتُ",
              "lemma": "تأخر",
              "features": "perf.1s",
              "root": "أ خ ر",
              "pos": "verb",
              "gloss": "to fall back, be late, hold back"
            },
            {
              "surface": "الْيَوْمَ",
              "lemma": "يوم",
              "features": "def.acc",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
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
              "surface": "الْمَرْعَىٰ",
              "lemma": "مرعى",
              "features": "def.gen",
              "root": "ر ع ي",
              "pos": "noun",
              "gloss": "pasture, grazing ground"
            }
          ]
        },
        {
          "id": "qr1-16-022",
          "page": 75,
          "ar": "وَبَعُدْتُ فِيْ طَلَبِ الشَّجَرِ وَالْعَلَفِ لِأَرْعَىٰ الْمَاشِيَةَ",
          "en": "and ranged far in search of trees and fodder to graze the livestock,",
          "tokens": [
            {
              "surface": "وَبَعُدْتُ",
              "lemma": "بعد-يبعد",
              "features": "conj+perf.1s",
              "root": "ب ع د",
              "pos": "verb",
              "gloss": "to go far, become distant"
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
              "surface": "طَلَبِ",
              "lemma": "طلب",
              "features": "gen.constr",
              "root": "ط ل ب",
              "pos": "verb",
              "gloss": "to ask, request"
            },
            {
              "surface": "الشَّجَرِ",
              "lemma": "شجر",
              "features": "def.gen",
              "root": "ش ج ر",
              "pos": "noun",
              "gloss": "tree(s)"
            },
            {
              "surface": "وَالْعَلَفِ",
              "lemma": "علف",
              "features": "conj+def.gen",
              "root": "ع ل ف",
              "pos": "noun",
              "gloss": "fodder"
            },
            {
              "surface": "لِأَرْعَىٰ",
              "lemma": "رعى",
              "features": "prep+impf.1s",
              "root": "ر ع ي",
              "pos": "verb",
              "gloss": "to graze, pasture, tend (livestock)"
            },
            {
              "surface": "الْمَاشِيَةَ",
              "lemma": "ماشية",
              "features": "def.acc",
              "root": "م ش ي",
              "pos": "noun",
              "gloss": "livestock, cattle"
            }
          ]
        },
        {
          "id": "qr1-16-023",
          "page": 75,
          "ar": "حَتَّىٰ رَقَدَ الشَّيْخُ وَرَقَدَتِ الْعَجُوْزُ .",
          "en": "until the old man fell asleep, and the old woman fell asleep.",
          "tokens": [
            {
              "surface": "حَتَّىٰ",
              "lemma": "حتى",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "until"
            },
            {
              "surface": "رَقَدَ",
              "lemma": "رقد",
              "features": "perf.3ms",
              "root": "ر ق د",
              "pos": "verb",
              "gloss": "to sleep, doze off"
            },
            {
              "surface": "الشَّيْخُ",
              "lemma": "شيخ",
              "features": "def.nom",
              "root": "ش ي خ",
              "pos": "noun",
              "gloss": "old man, elder"
            },
            {
              "surface": "وَرَقَدَتِ",
              "lemma": "رقد",
              "features": "conj+perf.3fs",
              "root": "ر ق د",
              "pos": "verb",
              "gloss": "to sleep, doze off"
            },
            {
              "surface": "الْعَجُوْزُ",
              "lemma": "عجوز",
              "features": "def.nom",
              "root": "ع ج ز",
              "pos": "noun",
              "gloss": "old woman"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا وَجَدَ الرَّجُلُ لَمَّا دَخَلَ الْبَيْتَ؟",
          "options": [
            "أَنَّ أَبَاهُ وَأُمَّهُ قَدْ رَقَدَا",
            "أَنَّ أَوْلَادَهُ قَدْ خَرَجُوا",
            "أَنَّ الْمَاشِيَةَ قَدْ هَرَبَتْ"
          ],
          "answer": 0,
          "qEn": "What did the man find when he entered the house?",
          "optionsEn": [
            "That his father and mother had fallen asleep",
            "That his children had gone out",
            "That the livestock had run off"
          ]
        }
      ]
    },
    {
      "id": "p7",
      "en": "He thought about waking his parents, but was loath to; his hungry children asked him for milk, but he refused to give his family drink before his parents, fearing God's displeasure.",
      "sentences": [
        {
          "id": "qr1-16-024",
          "page": 75,
          "ar": "وَفَكَّرَ الرَّجُلُ هَلْ يُوْقِظُ الشَّيْخَ وَالْعَجُوْزَ؟",
          "en": "The man wondered whether to wake the old man and the old woman.",
          "tokens": [
            {
              "surface": "وَفَكَّرَ",
              "lemma": "فكر",
              "features": "conj+perf.3ms",
              "root": "ف ك ر",
              "pos": "verb",
              "gloss": "to think"
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
              "surface": "هَلْ",
              "lemma": "هل",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "[yes/no question marker]"
            },
            {
              "surface": "يُوْقِظُ",
              "lemma": "أيقظ",
              "features": "impf.3ms",
              "root": "ي ق ظ",
              "pos": "verb",
              "gloss": "to wake (someone) up"
            },
            {
              "surface": "الشَّيْخَ",
              "lemma": "شيخ",
              "features": "def.acc",
              "root": "ش ي خ",
              "pos": "noun",
              "gloss": "old man, elder"
            },
            {
              "surface": "وَالْعَجُوْزَ",
              "lemma": "عجوز",
              "features": "conj+def.acc",
              "root": "ع ج ز",
              "pos": "noun",
              "gloss": "old woman"
            }
          ]
        },
        {
          "id": "qr1-16-025",
          "page": 75,
          "ar": "وَكَرِهَ الرَّجُلُ أَنْ يُوْقِظَ الشَّيْخَ وَالعَجُوْزَ .",
          "en": "But the man was loath to wake the old man and the old woman.",
          "tokens": [
            {
              "surface": "وَكَرِهَ",
              "lemma": "كره",
              "features": "conj+perf.3ms",
              "root": "ك ر ه",
              "pos": "verb",
              "gloss": "to dislike, hate, be loath to"
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
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "يُوْقِظَ",
              "lemma": "أيقظ",
              "features": "impf.3ms",
              "root": "ي ق ظ",
              "pos": "verb",
              "gloss": "to wake (someone) up"
            },
            {
              "surface": "الشَّيْخَ",
              "lemma": "شيخ",
              "features": "def.acc",
              "root": "ش ي خ",
              "pos": "noun",
              "gloss": "old man, elder"
            },
            {
              "surface": "وَالعَجُوْزَ",
              "lemma": "عجوز",
              "features": "conj+def.acc",
              "root": "ع ج ز",
              "pos": "noun",
              "gloss": "old woman"
            }
          ]
        },
        {
          "id": "qr1-16-026",
          "page": 75,
          "ar": "وَكَانَ أَهْلُهُ وَأَوْلَادُهُ يَنْتَظِرُوْنَهُ وَكَانُوْا جِيَاعاً",
          "en": "His family and children were waiting for him and were hungry,",
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
              "surface": "أَهْلُهُ",
              "lemma": "أهل",
              "features": "nom+3ms",
              "root": "أ ه ل",
              "pos": "noun",
              "gloss": "people, family, folk"
            },
            {
              "surface": "وَأَوْلَادُهُ",
              "lemma": "ولد",
              "features": "conj+pl.nom+3ms",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "يَنْتَظِرُوْنَهُ",
              "lemma": "انتظر",
              "features": "impf.3mp+3ms",
              "root": "ن ظ ر",
              "pos": "verb",
              "gloss": "to wait"
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
              "surface": "جِيَاعاً",
              "lemma": "جائع",
              "features": "pl.indef.acc",
              "root": "ج و ع",
              "pos": "adj",
              "gloss": "hungry"
            }
          ]
        },
        {
          "id": "qr1-16-027",
          "page": 75,
          "ar": "فَطَلَبُوْا مِنْهُ اللَّبَنَ .",
          "en": "so they asked him for milk.",
          "tokens": [
            {
              "surface": "فَطَلَبُوْا",
              "lemma": "طلب",
              "features": "conj+perf.3mp",
              "root": "ط ل ب",
              "pos": "verb",
              "gloss": "to ask, request"
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
              "surface": "اللَّبَنَ",
              "lemma": "لبن",
              "features": "def.acc",
              "root": "ل ب ن",
              "pos": "noun",
              "gloss": "milk"
            }
          ]
        },
        {
          "id": "qr1-16-028",
          "page": 75,
          "ar": "وَلٰكِنَّ الرَّجُلَ كَرِهَ أَنْ يَسْقِيَ أَهْلَهُ وَأَوْلَادَهُ قَبْلَ وَالِدَيْهِ ،",
          "en": "But the man was loath to give his family and children drink before his parents,",
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
              "surface": "الرَّجُلَ",
              "lemma": "رجل",
              "features": "def.acc",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
            },
            {
              "surface": "كَرِهَ",
              "lemma": "كره",
              "features": "perf.3ms",
              "root": "ك ر ه",
              "pos": "verb",
              "gloss": "to dislike, hate, be loath to"
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
              "surface": "يَسْقِيَ",
              "lemma": "سقى",
              "features": "impf.3ms",
              "root": "س ق ي",
              "pos": "verb",
              "gloss": "to give to drink, water"
            },
            {
              "surface": "أَهْلَهُ",
              "lemma": "أهل",
              "features": "acc+3ms",
              "root": "أ ه ل",
              "pos": "noun",
              "gloss": "people, family, folk"
            },
            {
              "surface": "وَأَوْلَادَهُ",
              "lemma": "ولد",
              "features": "conj+pl.acc+3ms",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            },
            {
              "surface": "قَبْلَ",
              "lemma": "قبل",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "before"
            },
            {
              "surface": "وَالِدَيْهِ",
              "lemma": "والد",
              "features": "du.gen+3ms",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "parent"
            }
          ]
        },
        {
          "id": "qr1-16-029",
          "page": 75,
          "ar": "وَخَافَ اللهَ",
          "en": "and feared God,",
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
            }
          ]
        },
        {
          "id": "qr1-16-030",
          "page": 75,
          "ar": "وَقَالَ: كَيْفَ أَسْقِيْكُمْ وَلَمْ أَسْقِهِمْ ،",
          "en": "and said: How can I give you drink when I have not given them drink --",
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
              "surface": "كَيْفَ",
              "lemma": "كيف",
              "features": "part",
              "root": "ك ي ف",
              "pos": "part",
              "gloss": "how"
            },
            {
              "surface": "أَسْقِيْكُمْ",
              "lemma": "سقى",
              "features": "impf.1s+2mp",
              "root": "س ق ي",
              "pos": "verb",
              "gloss": "to give to drink, water"
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
              "surface": "أَسْقِهِمْ",
              "lemma": "سقى",
              "features": "impf.1s+3mp",
              "root": "س ق ي",
              "pos": "verb",
              "gloss": "to give to drink, water"
            }
          ]
        },
        {
          "id": "qr1-16-031",
          "page": 75,
          "ar": "إِنِّي إِذاً لَمِنَ الظَّالِمِيْنَ .",
          "en": "then I would surely be among the wrongdoers.",
          "tokens": [
            {
              "surface": "إِنِّي",
              "lemma": "إن",
              "features": "part+1s",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed; that"
            },
            {
              "surface": "إِذاً",
              "lemma": "إذن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "then, in that case"
            },
            {
              "surface": "لَمِنَ",
              "lemma": "من",
              "features": "part+prep",
              "root": "",
              "pos": "prep",
              "gloss": "surely among"
            },
            {
              "surface": "الظَّالِمِيْنَ",
              "lemma": "ظالم",
              "features": "def.pl.gen",
              "root": "ظ ل م",
              "pos": "noun",
              "gloss": "wrongdoer, oppressor"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا رَفَضَ الرَّجُلُ أَنْ يَسْقِيَ أَوْلَادَهُ أَوَّلاً؟",
          "options": [
            "لِأَنَّهُ كَرِهَ أَنْ يَسْقِيَ أَهْلَهُ قَبْلَ وَالِدَيْهِ وَخَافَ اللهَ",
            "لِأَنَّ اللَّبَنَ لَمْ يَكُنْ كَافِياً",
            "لِأَنَّ أَوْلَادَهُ لَمْ يَطْلُبُوا مِنْهُ شَيْئاً"
          ],
          "answer": 0,
          "qEn": "Why did the man refuse to give his children drink first?",
          "optionsEn": [
            "Because he was loath to give his family drink before his parents, and feared God",
            "Because there wasn't enough milk",
            "Because his children had not asked him for anything"
          ]
        }
      ]
    },
    {
      "id": "p8",
      "en": "He milked the livestock and stood waiting all night for his parents to wake, the cup on his hand and his children weeping at his feet, but he would not give anyone a drink from it, nor drink himself.",
      "sentences": [
        {
          "id": "qr1-16-032",
          "page": 76,
          "ar": "وَحَلَبَ الرَّجُلُ الْمَاشِيَةَ",
          "en": "The man milked the livestock",
          "tokens": [
            {
              "surface": "وَحَلَبَ",
              "lemma": "حلب",
              "features": "conj+perf.3ms",
              "root": "ح ل ب",
              "pos": "verb",
              "gloss": "to milk"
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
              "surface": "الْمَاشِيَةَ",
              "lemma": "ماشية",
              "features": "def.acc",
              "root": "م ش ي",
              "pos": "noun",
              "gloss": "livestock, cattle"
            }
          ]
        },
        {
          "id": "qr1-16-033",
          "page": 76,
          "ar": "وَوَقَفَ يَنْتَظِرُ أَنْ يَسْتَيْقِظَ أَبَوَاهُ ،",
          "en": "and stood waiting for his parents to wake up,",
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
              "surface": "يَنْتَظِرُ",
              "lemma": "انتظر",
              "features": "impf.3ms",
              "root": "ن ظ ر",
              "pos": "verb",
              "gloss": "to wait"
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
              "surface": "يَسْتَيْقِظَ",
              "lemma": "استيقظ",
              "features": "impf.3ms",
              "root": "ي ق ظ",
              "pos": "verb",
              "gloss": "to wake up"
            },
            {
              "surface": "أَبَوَاهُ",
              "lemma": "أب",
              "features": "du.nom+3ms",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            }
          ]
        },
        {
          "id": "qr1-16-034",
          "page": 76,
          "ar": "وَبَقِيَ وَاقِفاً وَالْقَدَحُ عَلَىٰ يَدِهِ ،",
          "en": "and remained standing, the cup on his hand,",
          "tokens": [
            {
              "surface": "وَبَقِيَ",
              "lemma": "بقي",
              "features": "conj+perf.3ms",
              "root": "ب ق ي",
              "pos": "verb",
              "gloss": "to remain, be left"
            },
            {
              "surface": "وَاقِفاً",
              "lemma": "وقف",
              "features": "indef.acc",
              "root": "و ق ف",
              "pos": "adj",
              "gloss": "standing"
            },
            {
              "surface": "وَالْقَدَحُ",
              "lemma": "قدح",
              "features": "conj+def.nom",
              "root": "ق د ح",
              "pos": "noun",
              "gloss": "cup, drinking vessel"
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
              "surface": "يَدِهِ",
              "lemma": "يد",
              "features": "gen+3ms",
              "root": "ي د ي",
              "pos": "noun",
              "gloss": "hand"
            }
          ]
        },
        {
          "id": "qr1-16-035",
          "page": 76,
          "ar": "وَالْأَطْفَالُ يَبْكُوْنَ وَيَصِيْحُوْنَ عِنْدَ قَدَمِهِ ،",
          "en": "and the children weeping and crying at his feet,",
          "tokens": [
            {
              "surface": "وَالْأَطْفَالُ",
              "lemma": "طفل",
              "features": "conj+def.pl.nom",
              "root": "ط ف ل",
              "pos": "noun",
              "gloss": "child"
            },
            {
              "surface": "يَبْكُوْنَ",
              "lemma": "بكى",
              "features": "impf.3mp",
              "root": "ب ك ي",
              "pos": "verb",
              "gloss": "to cry, weep"
            },
            {
              "surface": "وَيَصِيْحُوْنَ",
              "lemma": "صاح",
              "features": "conj+impf.3mp",
              "root": "ص ي ح",
              "pos": "verb",
              "gloss": "to shout, cry out"
            },
            {
              "surface": "عِنْدَ",
              "lemma": "عند",
              "features": "prep",
              "root": "ع ن د",
              "pos": "prep",
              "gloss": "with, at, in the possession of"
            },
            {
              "surface": "قَدَمِهِ",
              "lemma": "قدم-عضو",
              "features": "gen+3ms",
              "root": "ق د م",
              "pos": "noun",
              "gloss": "foot"
            }
          ]
        },
        {
          "id": "qr1-16-036",
          "page": 76,
          "ar": "وَلٰكِنَّهُ لَمْ يَسْقِهِمْ شَيْئاً مِنَ الْقَدَحِ وَلَمْ يَشْرَبْ ،",
          "en": "but he gave them nothing to drink from the cup, and did not drink himself,",
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
              "surface": "يَسْقِهِمْ",
              "lemma": "سقى",
              "features": "impf.3ms+3mp",
              "root": "س ق ي",
              "pos": "verb",
              "gloss": "to give to drink, water"
            },
            {
              "surface": "شَيْئاً",
              "lemma": "شيء",
              "features": "indef.acc",
              "root": "ش ي أ",
              "pos": "noun",
              "gloss": "thing"
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
              "surface": "الْقَدَحِ",
              "lemma": "قدح",
              "features": "def.gen",
              "root": "ق د ح",
              "pos": "noun",
              "gloss": "cup, drinking vessel"
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
              "surface": "يَشْرَبْ",
              "lemma": "شرب",
              "features": "impf.3ms",
              "root": "ش ر ب",
              "pos": "verb",
              "gloss": "to drink"
            }
          ]
        },
        {
          "id": "qr1-16-037",
          "page": 76,
          "ar": "وَبَاتَ قَائِماً وَالْقَدَحُ عَلَىٰ يَدِهِ .",
          "en": "and spent the whole night standing, the cup on his hand.",
          "tokens": [
            {
              "surface": "وَبَاتَ",
              "lemma": "بات",
              "features": "conj+perf.3ms",
              "root": "ب ي ت",
              "pos": "verb",
              "gloss": "to spend the night"
            },
            {
              "surface": "قَائِماً",
              "lemma": "قام",
              "features": "indef.acc",
              "root": "ق و م",
              "pos": "adj",
              "gloss": "standing"
            },
            {
              "surface": "وَالْقَدَحُ",
              "lemma": "قدح",
              "features": "conj+def.nom",
              "root": "ق د ح",
              "pos": "noun",
              "gloss": "cup, drinking vessel"
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
              "surface": "يَدِهِ",
              "lemma": "يد",
              "features": "gen+3ms",
              "root": "ي د ي",
              "pos": "noun",
              "gloss": "hand"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "أَيْنَ بَقِيَ الْقَدَحُ طُوْلَ اللَّيْلِ؟",
          "options": [
            "عَلَىٰ يَدِ الرَّجُلِ وَهُوَ وَاقِفٌ يَنْتَظِرُ",
            "عَلَى السُّفْرَةِ",
            "فِي يَدِ أَحَدِ الْأَطْفَالِ"
          ],
          "answer": 0,
          "qEn": "Where did the cup stay all night?",
          "optionsEn": [
            "On the man's hand as he stood waiting",
            "On the sufra",
            "In one of the children's hands"
          ]
        }
      ]
    },
    {
      "id": "p9",
      "en": "At dawn his parents woke and drank the milk he offered them, then he gave his children to drink -- God was pleased with this man's dutifulness, pleased with this righteous deed, and accepted it.",
      "sentences": [
        {
          "id": "qr1-16-038",
          "page": 76,
          "ar": "وَطَلَعَ الْفَجْرُ وَاسْتَيْقَظَ وَالِدَاهُ ،",
          "en": "Dawn broke and his parents woke up,",
          "tokens": [
            {
              "surface": "وَطَلَعَ",
              "lemma": "طلع",
              "features": "conj+perf.3ms",
              "root": "ط ل ع",
              "pos": "verb",
              "gloss": "to rise, come up (of the sun/dawn)"
            },
            {
              "surface": "الْفَجْرُ",
              "lemma": "فجر",
              "features": "def.nom",
              "root": "ف ج ر",
              "pos": "noun",
              "gloss": "dawn"
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
              "surface": "وَالِدَاهُ",
              "lemma": "والد",
              "features": "du.nom+3ms",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "parent"
            }
          ]
        },
        {
          "id": "qr1-16-039",
          "page": 76,
          "ar": "فَقَدَّمَ الرَّجُلُ لَهُمَا قَدَحَ اللَّبَنِ",
          "en": "and the man offered them the cup of milk,",
          "tokens": [
            {
              "surface": "فَقَدَّمَ",
              "lemma": "قدم",
              "features": "conj+perf.3ms",
              "root": "ق د م",
              "pos": "verb",
              "gloss": "to bring forward, present, offer, serve"
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
              "surface": "لَهُمَا",
              "lemma": "ل",
              "features": "prep+3md",
              "root": "",
              "pos": "prep",
              "gloss": "for, to; belonging to"
            },
            {
              "surface": "قَدَحَ",
              "lemma": "قدح",
              "features": "acc.constr",
              "root": "ق د ح",
              "pos": "noun",
              "gloss": "cup, drinking vessel"
            },
            {
              "surface": "اللَّبَنِ",
              "lemma": "لبن",
              "features": "def.gen",
              "root": "ل ب ن",
              "pos": "noun",
              "gloss": "milk"
            }
          ]
        },
        {
          "id": "qr1-16-040",
          "page": 76,
          "ar": "فَشَرِبَا ،",
          "en": "and they drank,",
          "tokens": [
            {
              "surface": "فَشَرِبَا",
              "lemma": "شرب",
              "features": "conj+perf.3md",
              "root": "ش ر ب",
              "pos": "verb",
              "gloss": "to drink"
            }
          ]
        },
        {
          "id": "qr1-16-041",
          "page": 76,
          "ar": "ثُمَّ سَقَىٰ أَوْلَادَهُ ،",
          "en": "then he gave his children to drink,",
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
              "surface": "سَقَىٰ",
              "lemma": "سقى",
              "features": "perf.3ms",
              "root": "س ق ي",
              "pos": "verb",
              "gloss": "to give to drink, water"
            },
            {
              "surface": "أَوْلَادَهُ",
              "lemma": "ولد",
              "features": "pl.acc+3ms",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "child, boy"
            }
          ]
        },
        {
          "id": "qr1-16-042",
          "page": 76,
          "ar": "وَقَدْ رَضِيَ اللهُ عَنْ هٰذَا الرَّجُلِ الَّذِيْ كَانَ بَرّاً بِالْوَالِدَيْنِ ،",
          "en": "and God was pleased with this man, who was dutiful to his parents,",
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
              "surface": "عَنْ",
              "lemma": "عن",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "about, from"
            },
            {
              "surface": "هٰذَا",
              "lemma": "هذا",
              "features": "gen",
              "root": "",
              "pos": "dem",
              "gloss": "this"
            },
            {
              "surface": "الرَّجُلِ",
              "lemma": "رجل",
              "features": "def.gen",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
            },
            {
              "surface": "الَّذِيْ",
              "lemma": "الذي",
              "features": "rel",
              "root": "",
              "pos": "rel",
              "gloss": "who, which, that"
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
              "surface": "بَرّاً",
              "lemma": "بر",
              "features": "indef.acc",
              "root": "ب ر ر",
              "pos": "adj",
              "gloss": "dutiful, devoted (to one's parents)"
            },
            {
              "surface": "بِالْوَالِدَيْنِ",
              "lemma": "والد",
              "features": "prep+def.du.gen",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "parent"
            }
          ]
        },
        {
          "id": "qr1-16-043",
          "page": 76,
          "ar": "رَضِيَ اللهُ عَنْ هٰذَا الْعَمَلِ الصَّالِحِ وَقَبِلَهُ .",
          "en": "God was pleased with this righteous deed, and accepted it.",
          "tokens": [
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
              "surface": "عَنْ",
              "lemma": "عن",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "about, from"
            },
            {
              "surface": "هٰذَا",
              "lemma": "هذا",
              "features": "gen",
              "root": "",
              "pos": "dem",
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
            },
            {
              "surface": "وَقَبِلَهُ",
              "lemma": "قبل-قبول",
              "features": "conj+perf.3ms+3ms",
              "root": "ق ب ل",
              "pos": "verb",
              "gloss": "to accept"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنْ سَقَى الرَّجُلُ أَوَّلاً حِيْنَ اسْتَيْقَظَ وَالِدَاهُ؟",
          "options": [
            "وَالِدَيْهِ ثُمَّ أَوْلَادَهُ",
            "أَوْلَادَهُ ثُمَّ وَالِدَيْهِ",
            "نَفْسَهُ ثُمَّ وَالِدَيْهِ"
          ],
          "answer": 0,
          "qEn": "Whom did the man give drink to first, once his parents woke?",
          "optionsEn": [
            "His parents, then his children",
            "His children, then his parents",
            "Himself, then his parents"
          ]
        }
      ]
    },
    {
      "id": "p10",
      "en": "Another time this dutiful man, walking at night, took shelter in a cave that a rolling boulder sealed shut behind him -- so he called on God by that righteous deed, asking Him to remove the rock, and God answered his prayer and helped him.",
      "sentences": [
        {
          "id": "qr1-16-044",
          "page": 76,
          "ar": "وَمَرَّةً كَانَ هٰذَا الرَّجُلُ الْبَرُّ مَاشِياً فِي اللَّيْلِ ،",
          "en": "Another time this dutiful man was walking at night,",
          "tokens": [
            {
              "surface": "وَمَرَّةً",
              "lemma": "مرة",
              "features": "conj+indef.acc",
              "root": "م ر ر",
              "pos": "noun",
              "gloss": "time, occasion"
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
              "surface": "هٰذَا",
              "lemma": "هذا",
              "features": "nom",
              "root": "",
              "pos": "dem",
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
              "surface": "الْبَرُّ",
              "lemma": "بر",
              "features": "def.nom",
              "root": "ب ر ر",
              "pos": "adj",
              "gloss": "dutiful, devoted (to one's parents)"
            },
            {
              "surface": "مَاشِياً",
              "lemma": "مشى",
              "features": "indef.acc",
              "root": "م ش ي",
              "pos": "adj",
              "gloss": "walking"
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
          "id": "qr1-16-045",
          "page": 76,
          "ar": "فَرَأَىٰ غَاراً ،",
          "en": "and he saw a cave,",
          "tokens": [
            {
              "surface": "فَرَأَىٰ",
              "lemma": "رأى",
              "features": "conj+perf.3ms",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "غَاراً",
              "lemma": "غار",
              "features": "indef.acc",
              "root": "غ و ر",
              "pos": "noun",
              "gloss": "cave"
            }
          ]
        },
        {
          "id": "qr1-16-046",
          "page": 76,
          "ar": "فَقَالَ: أَبِيْتُ اللَّيْلَ فِيْ هٰذَا الْغَارِ وَأَخْرُجُ فِي الصَّبَاحِ .",
          "en": "and said: I will spend the night in this cave and go out in the morning.",
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
              "surface": "أَبِيْتُ",
              "lemma": "بات",
              "features": "impf.1s",
              "root": "ب ي ت",
              "pos": "verb",
              "gloss": "to spend the night"
            },
            {
              "surface": "اللَّيْلَ",
              "lemma": "ليل",
              "features": "def.acc",
              "root": "ل ي ل",
              "pos": "noun",
              "gloss": "night"
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
              "pos": "dem",
              "gloss": "this"
            },
            {
              "surface": "الْغَارِ",
              "lemma": "غار",
              "features": "def.gen",
              "root": "غ و ر",
              "pos": "noun",
              "gloss": "cave"
            },
            {
              "surface": "وَأَخْرُجُ",
              "lemma": "خرج",
              "features": "conj+impf.1s",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
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
              "surface": "الصَّبَاحِ",
              "lemma": "صباح",
              "features": "def.gen",
              "root": "ص ب ح",
              "pos": "noun",
              "gloss": "morning"
            }
          ]
        },
        {
          "id": "qr1-16-047",
          "page": 76,
          "ar": "وَدَخَلَ الْغَارَ لِيَبِيْتَ ،",
          "en": "and he entered the cave to spend the night,",
          "tokens": [
            {
              "surface": "وَدَخَلَ",
              "lemma": "دخل",
              "features": "conj+perf.3ms",
              "root": "د خ ل",
              "pos": "verb",
              "gloss": "to enter"
            },
            {
              "surface": "الْغَارَ",
              "lemma": "غار",
              "features": "def.acc",
              "root": "غ و ر",
              "pos": "noun",
              "gloss": "cave"
            },
            {
              "surface": "لِيَبِيْتَ",
              "lemma": "بات",
              "features": "prep+impf.3ms",
              "root": "ب ي ت",
              "pos": "verb",
              "gloss": "to spend the night"
            }
          ]
        },
        {
          "id": "qr1-16-048",
          "page": 76,
          "ar": "فَانْحَدَرَتْ صَخْرَةٌ مِنَ الْجَبَلِ",
          "en": "and a boulder came rolling down from the mountain",
          "tokens": [
            {
              "surface": "فَانْحَدَرَتْ",
              "lemma": "انحدر",
              "features": "conj+perf.3fs",
              "root": "ح د ر",
              "pos": "verb",
              "gloss": "to roll down, come tumbling down"
            },
            {
              "surface": "صَخْرَةٌ",
              "lemma": "صخرة",
              "features": "indef.nom",
              "root": "ص خ ر",
              "pos": "noun",
              "gloss": "boulder, rock"
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
              "surface": "الْجَبَلِ",
              "lemma": "جبل",
              "features": "def.gen",
              "root": "ج ب ل",
              "pos": "noun",
              "gloss": "mountain"
            }
          ]
        },
        {
          "id": "qr1-16-049",
          "page": 76,
          "ar": "فَسَدَّتْ عَلَيْهِ الْغَارَ .",
          "en": "and sealed the cave shut on him.",
          "tokens": [
            {
              "surface": "فَسَدَّتْ",
              "lemma": "سد",
              "features": "conj+perf.3fs",
              "root": "س د د",
              "pos": "verb",
              "gloss": "to block, seal shut"
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
              "surface": "الْغَارَ",
              "lemma": "غار",
              "features": "def.acc",
              "root": "غ و ر",
              "pos": "noun",
              "gloss": "cave"
            }
          ]
        },
        {
          "id": "qr1-16-050",
          "page": 76,
          "ar": "فَدَعَا اللهَ بِهٰذَا الْعَمَلِ الصَّالِحِ ،",
          "en": "so he called on God by that righteous deed,",
          "tokens": [
            {
              "surface": "فَدَعَا",
              "lemma": "دعا",
              "features": "conj+perf.3ms",
              "root": "د ع و",
              "pos": "verb",
              "gloss": "to invite; to call upon, pray to"
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
              "pos": "dem",
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
          "id": "qr1-16-051",
          "page": 76,
          "ar": "وَقَالَ: اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنِّيْ فَعَلْتُ ذٰلِكَ ابْتِغَاءَ وَجْهِكَ",
          "en": "and said: O Allah, if You know that I did that seeking Your face,",
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
              "surface": "كُنْتَ",
              "lemma": "كان",
              "features": "perf.2ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "تَعْلَمُ",
              "lemma": "علم",
              "features": "impf.2ms",
              "root": "ع ل م",
              "pos": "verb",
              "gloss": "to know"
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
              "pos": "dem",
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
            }
          ]
        },
        {
          "id": "qr1-16-052",
          "page": 76,
          "ar": "فَاكْشِفْ هٰذِهِ الصَّخْرَةَ ،",
          "en": "then remove this boulder,",
          "tokens": [
            {
              "surface": "فَاكْشِفْ",
              "lemma": "كشف",
              "features": "conj+imp.2ms",
              "root": "ك ش ف",
              "pos": "verb",
              "gloss": "to remove, uncover"
            },
            {
              "surface": "هٰذِهِ",
              "lemma": "هذه",
              "features": "acc",
              "root": "",
              "pos": "dem",
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
          "id": "qr1-16-053",
          "page": 76,
          "ar": "فَأَجَابَ اللهُ دَعْوَةَ هٰذَا الرَّجُلِ الصَّالِحِ وَأَعَانَهُ .",
          "en": "and God answered this righteous man's prayer and helped him.",
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
              "surface": "دَعْوَةَ",
              "lemma": "دعوة",
              "features": "acc.constr",
              "root": "د ع و",
              "pos": "noun",
              "gloss": "prayer, supplication, call"
            },
            {
              "surface": "هٰذَا",
              "lemma": "هذا",
              "features": "gen",
              "root": "",
              "pos": "dem",
              "gloss": "this"
            },
            {
              "surface": "الرَّجُلِ",
              "lemma": "رجل",
              "features": "def.gen",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
            },
            {
              "surface": "الصَّالِحِ",
              "lemma": "صالح",
              "features": "def.gen",
              "root": "ص ل ح",
              "pos": "adj",
              "gloss": "righteous, good"
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
          "q": "بِمَاذَا دَعَا الرَّجُلُ اللهَ وَهُوَ مَحْبُوْسٌ فِي الْغَارِ؟",
          "options": [
            "بِبِرِّهِ بِوَالِدَيْهِ وَذٰلِكَ الْعَمَلِ الصَّالِحِ",
            "بِأَنَّهُ صَامَ كَثِيْراً",
            "بِأَنَّهُ سَاعَدَ صَدِيْقاً فَقِيْراً"
          ],
          "answer": 0,
          "qEn": "What did the man call on God by, while trapped in the cave?",
          "optionsEn": [
            "His dutifulness to his parents, that righteous deed",
            "That he had fasted often",
            "That he had helped a poor friend"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "كَانَ رَجُلٌ لَهُ أَبَوَانِ كَبِيْرَانِ وَأَوْلَادٌ",
        "post": "",
        "en": "There was a man with two elderly parents and young children.",
        "options": [
          "صِغَارٌ",
          "صِغَاراً",
          "صِغَارٍ",
          "الصِّغَارُ"
        ],
        "answer": 0,
        "rationales": [
          "nominative plural indefinite -- agreeing with أَوْلَادٌ.",
          "accusative -- wrong case for the predicate noun.",
          "genitive -- wrong case.",
          "definite -- wrong definiteness; unnamed children."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَكَانَ يَذْهَبُ كُلَّ يَوْمٍ فِي الصَّبَاحِ إِلَىٰ",
        "post": "",
        "en": "Every day, in the morning, he would go to the pasture.",
        "options": [
          "الْمَرْعَىٰ",
          "الْمَرْعَى",
          "مَرْعَىٰ",
          "الْمَرَاعِيْ"
        ],
        "answer": 0,
        "rationales": [
          "genitive (unmarked, defective noun) -- object of إِلَىٰ.",
          "same spelling without the dagger-alif mark -- acceptable orthographically but not the house style.",
          "indefinite -- wrong definiteness; the family's own regular pasture.",
          "plural -- wrong number; a single pasture."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَرَجَعَ إِلَىٰ الْبَيْتِ وَقَدْ ذَهَبَ",
        "post": "مِنَ اللَّيْلِ",
        "en": "And he returned home when much of the night had already gone.",
        "options": [
          "كَثِيْرٌ",
          "كَثِيْراً",
          "كَثِيْرٍ",
          "الْكَثِيْرُ"
        ],
        "answer": 0,
        "rationales": [
          "nominative -- subject of ذَهَبَ.",
          "accusative -- wrong case for the subject.",
          "genitive -- wrong case.",
          "definite -- wrong definiteness; an unspecified portion of the night."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَوَجَدَ أَنَّ أَبَاهُ",
        "post": "قَدْ رَقَدَ",
        "en": "And he found that his old father had fallen asleep.",
        "options": [
          "الشَّيْخَ",
          "الشَّيْخُ",
          "الشَّيْخِ",
          "شَيْخٌ"
        ],
        "answer": 0,
        "rationales": [
          "accusative -- in apposition to أَبَاهُ, object of أَنَّ.",
          "nominative -- wrong case after أَنَّ.",
          "genitive -- wrong case.",
          "indefinite -- wrong definiteness; his own father."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَلٰكِنَّهُ لَمْ يَسْقِهِمْ شَيْئاً مِنَ",
        "post": "وَلَمْ يَشْرَبْ",
        "en": "But he gave them nothing to drink from the cup, and did not drink himself.",
        "options": [
          "الْقَدَحِ",
          "الْقَدَحُ",
          "الْقَدَحَ",
          "قَدَحٍ"
        ],
        "answer": 0,
        "rationales": [
          "genitive -- object of the preposition مِنَ.",
          "nominative -- wrong case after a preposition.",
          "accusative -- wrong case after a preposition.",
          "indefinite -- wrong definiteness; the one cup already in his hand."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَطَلَعَ الْفَجْرُ وَاسْتَيْقَظَ",
        "post": "",
        "en": "Dawn broke and his parents woke up.",
        "options": [
          "وَالِدَاهُ",
          "وَالِدَاهُمَا",
          "وَالِدُهُ",
          "وَالِدَيْهِ"
        ],
        "answer": 0,
        "rationales": [
          "dual + 3ms possessive, nominative -- subject of اسْتَيْقَظَ.",
          "a mismatched possessive suffix.",
          "singular -- wrong number; both parents woke.",
          "accusative/genitive dual -- wrong case for a subject."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَانْحَدَرَتْ صَخْرَةٌ مِنَ",
        "post": "فَسَدَّتْ عَلَيْهِ الْغَارَ",
        "en": "And a boulder came rolling down from the mountain, and sealed the cave shut on him.",
        "options": [
          "الْجَبَلِ",
          "الْجَبَلُ",
          "الْجَبَلَ",
          "جَبَلٍ"
        ],
        "answer": 0,
        "rationales": [
          "genitive -- object of the preposition مِنَ.",
          "nominative -- wrong case after a preposition.",
          "accusative -- wrong case after a preposition.",
          "indefinite -- wrong definiteness; a specific mountain."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَقَالَ: اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنِّيْ فَعَلْتُ ذٰلِكَ ابْتِغَاءَ",
        "post": "فَاكْشِفْ هٰذِهِ الصَّخْرَةَ",
        "en": "And he said: O Allah, if You know that I did that seeking Your face, then remove this boulder.",
        "options": [
          "وَجْهِكَ",
          "وَجْهُكَ",
          "وَجْهٍ",
          "وَجْهَهُ"
        ],
        "answer": 0,
        "rationales": [
          "genitive + 2ms -- object of the construct ابْتِغَاءَ, \"Your face.\"",
          "nominative -- wrong case.",
          "indefinite -- wrong definiteness and missing the possessive.",
          "3rd-person possessive -- wrong person; addressing God directly."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "وَيَرْعَىٰ الْمَاشِيَةَ",
        "pre": "",
        "post": "وَيَرْجِعُ بِهَا فِي الْعِشَاءِ",
        "targetPerson": "نَحْنُ",
        "targetEn": "we",
        "options": [
          "وَنَرْعَى",
          "وَيَرْعَىٰ",
          "وَنَرْعَاهَا",
          "وَتَرْعَىٰ"
        ],
        "answer": 0,
        "rationales": [
          "1st plural imperfect -- we pasture.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَكَانَ أَبُوْهُ جَائِعاً",
        "pre": "",
        "post": "وَكَانَتْ أُمُّهُ جَائِعَةً",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "كُنْتُ جَائِعاً",
          "كَانَ جَائِعاً",
          "كُنَّا جِيَاعاً",
          "كَانَتْ جَائِعَةً"
        ],
        "answer": 0,
        "rationales": [
          "1st singular \"to be\" + matching predicate -- I was hungry.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَتَأَسَّفَ الرَّجُلُ وَحَزِنَ كَثِيْراً",
        "pre": "",
        "post": "وَنَدِمَ عَلَىٰ تَأْخِيْرِهِ",
        "targetPerson": "هُمْ",
        "targetEn": "they (m.)",
        "options": [
          "فَتَأَسَّفُوا وَحَزِنُوا",
          "فَتَأَسَّفَ وَحَزِنَ",
          "فَتَأَسَّفَتْ وَحَزِنَتْ",
          "فَتَأَسَّفْنَا وَحَزِنَّا"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. plural throughout -- they were full of regret and grieved.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَقَالَ: كَيْفَ أَسْقِيْكُمْ وَلَمْ أَسْقِهِمْ",
        "pre": "",
        "post": "",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "كَيْفَ أَسْقِيْكُمْ وَلَمْ أَسْقِهِمْ",
          "كَيْفَ تَسْقِيْكُمْ وَلَمْ تَسْقِهِمْ",
          "كَيْفَ يَسْقِيْكُمْ وَلَمْ يَسْقِهِمْ",
          "كَيْفَ نَسْقِيْكُمْ وَلَمْ نَسْقِهِمْ"
        ],
        "answer": 1,
        "rationales": [
          "1st person -- wrong, this is the quoted man speaking, not her.",
          "3rd fem. singular throughout -- how can she give you drink, having not given them drink.",
          "3rd masc. singular -- wrong gender for \"she.\"",
          "1st plural -- wrong person."
        ]
      },
      {
        "type": "shift",
        "base": "وَحَلَبَ الرَّجُلُ الْمَاشِيَةَ",
        "pre": "",
        "post": "",
        "targetPerson": "أَنْتَ",
        "targetEn": "you (m. sg.)",
        "options": [
          "حَلَبْتَ",
          "حَلَبَ",
          "حَلَبَتْ",
          "حَلَبْتُمْ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. singular perfect -- you milked.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَطَلَعَ الْفَجْرُ وَاسْتَيْقَظَ وَالِدَاهُ",
        "pre": "",
        "post": "",
        "targetPerson": "وَالِدَاتَا الطِّفْلَيْنِ",
        "targetEn": "the two children's mothers (dual)",
        "options": [
          "اسْتَيْقَظَتَا",
          "اسْتَيْقَظَا",
          "اسْتَيْقَظَتْ",
          "اسْتَيْقَظْنَ"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. dual perfect -- the two mothers woke up.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَأَجَابَ اللهُ دَعْوَةَ هٰذَا الرَّجُلِ الصَّالِحِ وَأَعَانَهُ",
        "pre": "",
        "post": "",
        "targetPerson": "أَنْتُمْ",
        "targetEn": "you (m. pl.)",
        "options": [
          "فَأَجَابَ اللهُ دَعْوَتَكُمْ وَأَعَانَكُمْ",
          "فَأَجَابَ اللهُ دَعْوَتَهُ وَأَعَانَهُ",
          "فَأَجَبْتُمُ اللهَ وَأَعَنْتُمُوْهُ",
          "فَأَجَابَ اللهُ دَعْوَتِيْ وَأَعَانَنِيْ"
        ],
        "answer": 0,
        "rationales": [
          "2nd person plural object suffixes throughout -- God answered your (pl.) prayer and helped you.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

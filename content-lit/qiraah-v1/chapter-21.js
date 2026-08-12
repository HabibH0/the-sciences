// القراءة الراشدة, volume one, chapter twenty-one -- ترنيمة الليل.
//
// Follows the shape of chapter-01.js/chapter-05.js -- see
// ../CHAPTER-FORMAT.md. Hand-authored (vision-model OCR, checked against
// the scan) from qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed
// pages 86-87. No JSON intermediate (see PROJECT_CONTEXT.md /
// QASAS_AGENT_BRIEF.md). Picking up at chapter 21 while another pass
// covers chapters 1-20; newWords below is checked only against
// chapters 1-10, the only sibling modules on disk at the time of writing
// -- re-check against 11-20 once they exist (see the note at the bottom).
//
// THIS CHAPTER IS VERSE (nazm) -- a lullaby, a father/mother singing a
// child to sleep -- the book's fourth verse chapter after chapter-03.js
// (النملة) and chapter-05.js (الطائر). Same adaptations as those two:
//   - Each bayt (both hemistichs) is one `sentences[]` entry: the sadr
//     (right column in print) then the ajz (left column), joined with
//     `،` at the mid-bayt pause and `.` at the bayt end -- e.g. sentence
//     1 combines "إِنَّ الْفِرَاشَ النَّاعِمَا" + "فِيْهِ تَنَامُ دَائِمَا".
//   - The poem is pausal throughout: every bayt-final word is printed
//     without its live case/mood vowel (سُكُون instead), and three
//     bayt-final words carry a poetic alif in place of the expected
//     tanwīn fatḥah (النَّاعِمَا, دَائِمَا, and the refrain's آمِنَا) -- a
//     word ending in a bare alif has no diacritic for the build stage's
//     caseVariant() to move, so those tokens are simply never decoy
//     material; `features` still records the underlying case/mood
//     throughout, matching the convention chapter-05.js's header set out.
//   - `workshop` is omitted, again for the reason chapter-03.js and
//     chapter-05.js give: substituting wrong conjugations into a rhymed
//     four/six/eight-line poem risks breaking metre rather than testing
//     grammar.
//   - `register` is "imperative_lullaby" (2ms imperative + vocative,
//     unlike ch3/ch5's first-person verse).
//
// Homograph note (same situation as chapter-05.js's ذهب/ذهب-معدن): this
// chapter uses "من" in both its usual sense (حرف جر "from", sentence 7 --
// already the book's established lemma for it, reused as-is) and as the
// relative pronoun "من" ("he who...", sentence 6, "مَنْ لَيْسَ يَغْفُلُ عَنْ
// أَحَدْ"). The relative is keyed "من-موصول" so it doesn't collide with or
// overwrite the preposition's entry.
//
// Two names/epithets for Allah appear without using the word "الله"
// itself: "الصَّمَد" (a name of Allah, glossed by the book's own footnote)
// and "بَارِئ" (Creator, printed "بَارِي" in its construct-state spelling
// here -- the hamza seat drops to a bare يـ before the following مضاف;
// the lemma keeps the dictionary hamza). Both are tagged `pos: 'noun'`,
// not `proper`, matching how chapter-05.js treated "رب" (Lord) -- an
// epithet used in construct, not the name "الله" itself.
//
// "حِفْظ" (sentence 5, "in the safekeeping of...") is the noun/maṣdar
// sense, not the verb sense already on the books from chapter-01.js/
// chapter-02.js ("to memorise"). Same root, unrelated sense, but since
// the app's unknown-word tracking is per lemma *spelling* and "حفظ" is
// already a known lemma from chapter 1, it is deliberately left out of
// `newWords` here rather than re-introduced -- flagging this rather than
// silently picking one convention, per the acceptance-checklist item in
// QASAS_AGENT_BRIEF.md about cross-checking lemmas before marking new.
//
// The six marginal footnotes the book itself prints for this poem
// (عناء، غرد، صمد، ضيم، كدر -- and حمى) are carried into `book_note` on
// their lemmas verbatim, same as chapter-05.js does with مذهب/طرب/مطلب.
//
// The poem is followed in print by "(مَدَارِجُ الْقِرَاءَةِ)" -- a source
// attribution (reprinted from another primer), exactly like chapter-05.js's
// closing note. Not included in the tokenized text.
export const CHAPTER = {
  "id": "ch21",
  "number": 21,
  "title": {
    "ar": "تَرْنِيْمَةُ اللَّيْلِ",
    "en": "Night's Lullaby"
  },
  "pages": [
    86,
    87
  ],
  "register": "imperative_lullaby",
  "newWords": [
    "ناعم",
    "دائم",
    "حبيب",
    "آمن",
    "أمن",
    "راح",
    "احتجب",
    "عناء",
    "اقترب",
    "بات",
    "عصفور",
    "غرد",
    "مولى",
    "صمد",
    "من-موصول",
    "غفل",
    "حمى",
    "ضيم",
    "كدر",
    "بارئ",
    "بشر"
  ],
  "lemmas": {
    "فراش": {
      "root": "ف ر ش",
      "pos": "noun",
      "gloss": "bedding, mattress",
      "content": true
    },
    "ناعم": {
      "root": "ن ع م",
      "pos": "adj",
      "gloss": "soft, plush, comfortable",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "نام": {
      "root": "ن و م",
      "pos": "verb",
      "gloss": "to sleep",
      "content": true
    },
    "دائم": {
      "root": "د و م",
      "pos": "adv",
      "gloss": "always, continuously",
      "content": true
    },
    "يا": {
      "root": "—",
      "pos": "part",
      "gloss": "O (vocative)",
      "content": false
    },
    "حبيب": {
      "root": "ح ب ب",
      "pos": "noun",
      "gloss": "beloved, darling",
      "content": true
    },
    "آمن": {
      "root": "أ م ن",
      "pos": "adj",
      "gloss": "safe, secure",
      "content": true
    },
    "راح": {
      "root": "ر و ح",
      "pos": "verb",
      "gloss": "to go away, depart, pass",
      "content": true
    },
    "احتجب": {
      "root": "ح ج ب",
      "pos": "verb",
      "gloss": "to be concealed, withdraw, vanish",
      "content": true
    },
    "مع": {
      "root": "—",
      "pos": "prep",
      "gloss": "with",
      "content": false
    },
    "عناء": {
      "root": "ع ن ي",
      "pos": "noun",
      "gloss": "toil, weariness",
      "content": true,
      "book_note": "العَنَاءَ: التَّعْبُ"
    },
    "تعب": {
      "root": "ت ع ب",
      "pos": "noun",
      "gloss": "fatigue, hardship",
      "content": true
    },
    "ليل": {
      "root": "ل ي ل",
      "pos": "noun",
      "gloss": "night",
      "content": true
    },
    "أمن": {
      "root": "أ م ن",
      "pos": "noun",
      "gloss": "safety, security",
      "content": true
    },
    "اقترب": {
      "root": "ق ر ب",
      "pos": "verb",
      "gloss": "to draw near, approach",
      "content": true
    },
    "بات": {
      "root": "ب ي ت",
      "pos": "verb",
      "gloss": "to spend the night, settle for the night",
      "content": true
    },
    "عصفور": {
      "root": "ع ص ف ر",
      "pos": "noun",
      "gloss": "sparrow, small bird",
      "content": true
    },
    "غرد": {
      "root": "غ ر د",
      "pos": "noun",
      "gloss": "warbling, song (of a bird)",
      "content": true,
      "book_note": "الغَرَدُ: الصَّدْحُ"
    },
    "حفظ": {
      "root": "ح ف ظ",
      "pos": "noun",
      "gloss": "safekeeping, protection",
      "content": true
    },
    "مولى": {
      "root": "و ل ي",
      "pos": "noun",
      "gloss": "lord, master, patron",
      "content": true
    },
    "صمد": {
      "root": "ص م د",
      "pos": "noun",
      "gloss": "the Eternal, the Self-Sufficient (a name of Allah)",
      "content": true,
      "book_note": "الصَّمَد: اسْمٌ مِنْ أَسْمَاءِ اللهِ الْحُسْنَى"
    },
    "من-موصول": {
      "root": "—",
      "pos": "rel",
      "gloss": "he who, the one who",
      "content": false
    },
    "ليس": {
      "root": "ل ي س",
      "pos": "verb",
      "gloss": "to not be",
      "content": true
    },
    "غفل": {
      "root": "غ ف ل",
      "pos": "verb",
      "gloss": "to be heedless, to neglect",
      "content": true
    },
    "عن": {
      "root": "—",
      "pos": "prep",
      "gloss": "about, from",
      "content": false
    },
    "أحد": {
      "root": "أ ح د",
      "pos": "noun",
      "gloss": "anyone, someone",
      "content": true
    },
    "حمى": {
      "root": "ح م ي",
      "pos": "noun",
      "gloss": "protection, refuge, safekeeping",
      "content": true,
      "book_note": "الحِمَى: الصِّيَانَة، والحِفَاظ"
    },
    "حتى": {
      "root": "—",
      "pos": "part",
      "gloss": "until",
      "content": false
    },
    "سحر": {
      "root": "س ح ر",
      "pos": "noun",
      "gloss": "pre-dawn time",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "كل": {
      "root": "ك ل ل",
      "pos": "noun",
      "gloss": "every, all",
      "content": true
    },
    "ضيم": {
      "root": "ض ي م",
      "pos": "noun",
      "gloss": "injustice, wrong, oppression",
      "content": true,
      "book_note": "الضَّيْم: الظلم والإذلال"
    },
    "أو": {
      "root": "—",
      "pos": "conj",
      "gloss": "or",
      "content": false
    },
    "كدر": {
      "root": "ك د ر",
      "pos": "noun",
      "gloss": "distress, gloom, trouble",
      "content": true,
      "book_note": "الكَدَر: هَمٌّ وغَمٌّ وتَعَب"
    },
    "بارئ": {
      "root": "ب ر أ",
      "pos": "noun",
      "gloss": "creator",
      "content": true,
      "book_note": "printed \"بَارِي\" here -- the hamza seat drops to bare يـ in this construct-state spelling"
    },
    "بشر": {
      "root": "ب ش ر",
      "pos": "noun",
      "gloss": "mankind, humankind",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "Sleep always in the soft bed. Sleep, my beloved, sleep safely, sleep safely. The day has gone and withdrawn, taking with it toil and weariness, and the night has drawn near in safety -- sleep safely, sleep safely. The warbling birds have settled for the night in the keeping of our Lord, the Self-Sufficient, who is never heedless of anyone -- sleep safely in His protection. Sleep safely until dawn from all wrong or distress; sleep in the protection of the Creator of mankind, sleep safely in His protection.",
      "sentences": [
        {
          "id": "qr1-21-001",
          "page": 86,
          "ar": "إِنَّ الْفِرَاشَ النَّاعِمَا، فِيْهِ تَنَامُ دَائِمَا.",
          "en": "Indeed, the soft bed -- in it you sleep always.",
          "tokens": [
            {
              "surface": "إِنَّ",
              "lemma": "إن",
              "features": "part",
              "root": "—",
              "pos": "part",
              "gloss": "indeed, verily"
            },
            {
              "surface": "الْفِرَاشَ",
              "lemma": "فراش",
              "features": "def.acc",
              "root": "ف ر ش",
              "pos": "noun",
              "gloss": "bed, bedding"
            },
            {
              "surface": "النَّاعِمَا",
              "lemma": "ناعم",
              "features": "def.acc",
              "root": "ن ع م",
              "pos": "adj",
              "gloss": "soft, plush"
            },
            {
              "surface": "فِيْهِ",
              "lemma": "في",
              "features": "prep+3ms",
              "root": "—",
              "pos": "prep",
              "gloss": "in it"
            },
            {
              "surface": "تَنَامُ",
              "lemma": "نام",
              "features": "impf.2ms",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "you sleep"
            },
            {
              "surface": "دَائِمَا",
              "lemma": "دائم",
              "features": "indef.acc",
              "root": "د و م",
              "pos": "adv",
              "gloss": "always, continuously"
            }
          ]
        },
        {
          "id": "qr1-21-002",
          "page": 86,
          "ar": "نَمْ يَا حَبِيْبِيْ، نَمْ آمِناً نَمْ آمِنَا.",
          "en": "Sleep, my beloved -- sleep safely, sleep safely.",
          "tokens": [
            {
              "surface": "نَمْ",
              "lemma": "نام",
              "features": "imp.2ms",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "sleep!"
            },
            {
              "surface": "يَا",
              "lemma": "يا",
              "features": "part",
              "root": "—",
              "pos": "part",
              "gloss": "O"
            },
            {
              "surface": "حَبِيْبِيْ",
              "lemma": "حبيب",
              "features": "acc+1s",
              "root": "ح ب ب",
              "pos": "noun",
              "gloss": "my beloved"
            },
            {
              "surface": "نَمْ",
              "lemma": "نام",
              "features": "imp.2ms",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "sleep!"
            },
            {
              "surface": "آمِناً",
              "lemma": "آمن",
              "features": "indef.acc",
              "root": "أ م ن",
              "pos": "adj",
              "gloss": "safely, secure"
            },
            {
              "surface": "نَمْ",
              "lemma": "نام",
              "features": "imp.2ms",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "sleep!"
            },
            {
              "surface": "آمِنَا",
              "lemma": "آمن",
              "features": "indef.acc",
              "root": "أ م ن",
              "pos": "adj",
              "gloss": "safely, secure"
            }
          ]
        },
        {
          "id": "qr1-21-003",
          "page": 86,
          "ar": "رَاحَ النَّهَارُ وَاحْتَجَبْ، مَعَهُ الْعَنَاءُ وَالتَّعَبْ.",
          "en": "The day has gone and withdrawn, taking with it toil and weariness.",
          "tokens": [
            {
              "surface": "رَاحَ",
              "lemma": "راح",
              "features": "perf.3ms",
              "root": "ر و ح",
              "pos": "verb",
              "gloss": "it went away, passed"
            },
            {
              "surface": "النَّهَارُ",
              "lemma": "نهار",
              "features": "def.nom",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "the daytime"
            },
            {
              "surface": "وَاحْتَجَبْ",
              "lemma": "احتجب",
              "features": "conj+perf.3ms",
              "root": "ح ج ب",
              "pos": "verb",
              "gloss": "and it withdrew, vanished"
            },
            {
              "surface": "مَعَهُ",
              "lemma": "مع",
              "features": "prep+3ms",
              "root": "—",
              "pos": "prep",
              "gloss": "with it"
            },
            {
              "surface": "الْعَنَاءُ",
              "lemma": "عناء",
              "features": "def.nom",
              "root": "ع ن ي",
              "pos": "noun",
              "gloss": "toil, weariness"
            },
            {
              "surface": "وَالتَّعَبْ",
              "lemma": "تعب",
              "features": "conj+def.nom",
              "root": "ت ع ب",
              "pos": "noun",
              "gloss": "and fatigue"
            }
          ]
        },
        {
          "id": "qr1-21-004",
          "page": 86,
          "ar": "وَاللَّيْلُ بِالْأَمْنِ اقْتَرَبْ، نَمْ آمِناً نَمْ آمِنَا.",
          "en": "And the night has drawn near in safety -- sleep safely, sleep safely.",
          "tokens": [
            {
              "surface": "وَاللَّيْلُ",
              "lemma": "ليل",
              "features": "conj+def.nom",
              "root": "ل ي ل",
              "pos": "noun",
              "gloss": "and the night"
            },
            {
              "surface": "بِالْأَمْنِ",
              "lemma": "أمن",
              "features": "prep+def.gen",
              "root": "أ م ن",
              "pos": "noun",
              "gloss": "in safety"
            },
            {
              "surface": "اقْتَرَبْ",
              "lemma": "اقترب",
              "features": "perf.3ms",
              "root": "ق ر ب",
              "pos": "verb",
              "gloss": "it drew near"
            },
            {
              "surface": "نَمْ",
              "lemma": "نام",
              "features": "imp.2ms",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "sleep!"
            },
            {
              "surface": "آمِناً",
              "lemma": "آمن",
              "features": "indef.acc",
              "root": "أ م ن",
              "pos": "adj",
              "gloss": "safely, secure"
            },
            {
              "surface": "نَمْ",
              "lemma": "نام",
              "features": "imp.2ms",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "sleep!"
            },
            {
              "surface": "آمِنَا",
              "lemma": "آمن",
              "features": "indef.acc",
              "root": "أ م ن",
              "pos": "adj",
              "gloss": "safely, secure"
            }
          ]
        },
        {
          "id": "qr1-21-005",
          "page": 86,
          "ar": "بَاتَتْ عَصَافِيْرُ الْغَرَدْ، فِيْ حِفْظِ مَوْلَانَا الصَّمَدْ.",
          "en": "The warbling birds have settled for the night in the keeping of our Lord, the Self-Sufficient.",
          "tokens": [
            {
              "surface": "بَاتَتْ",
              "lemma": "بات",
              "features": "perf.3fs",
              "root": "ب ي ت",
              "pos": "verb",
              "gloss": "they (f.) settled for the night"
            },
            {
              "surface": "عَصَافِيْرُ",
              "lemma": "عصفور",
              "features": "pl.nom.constr",
              "root": "ع ص ف ر",
              "pos": "noun",
              "gloss": "birds"
            },
            {
              "surface": "الْغَرَدْ",
              "lemma": "غرد",
              "features": "def.gen",
              "root": "غ ر د",
              "pos": "noun",
              "gloss": "of song, of warbling"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "—",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "حِفْظِ",
              "lemma": "حفظ",
              "features": "gen.constr",
              "root": "ح ف ظ",
              "pos": "noun",
              "gloss": "the safekeeping of"
            },
            {
              "surface": "مَوْلَانَا",
              "lemma": "مولى",
              "features": "gen+1p",
              "root": "و ل ي",
              "pos": "noun",
              "gloss": "our Lord"
            },
            {
              "surface": "الصَّمَدْ",
              "lemma": "صمد",
              "features": "def.gen",
              "root": "ص م د",
              "pos": "noun",
              "gloss": "the Self-Sufficient"
            }
          ]
        },
        {
          "id": "qr1-21-006",
          "page": 86,
          "ar": "مَنْ لَيْسَ يَغْفُلُ عَنْ أَحَدْ، نَمْ فِيْ حِمَاهُ آمِنَا.",
          "en": "He who is never heedless of anyone -- sleep safely in His protection.",
          "tokens": [
            {
              "surface": "مَنْ",
              "lemma": "من-موصول",
              "features": "rel",
              "root": "—",
              "pos": "rel",
              "gloss": "he who"
            },
            {
              "surface": "لَيْسَ",
              "lemma": "ليس",
              "features": "perf.3ms",
              "root": "ل ي س",
              "pos": "verb",
              "gloss": "is not"
            },
            {
              "surface": "يَغْفُلُ",
              "lemma": "غفل",
              "features": "impf.3ms",
              "root": "غ ف ل",
              "pos": "verb",
              "gloss": "he is heedless"
            },
            {
              "surface": "عَنْ",
              "lemma": "عن",
              "features": "prep",
              "root": "—",
              "pos": "prep",
              "gloss": "of, about"
            },
            {
              "surface": "أَحَدْ",
              "lemma": "أحد",
              "features": "indef.gen",
              "root": "أ ح د",
              "pos": "noun",
              "gloss": "anyone"
            },
            {
              "surface": "نَمْ",
              "lemma": "نام",
              "features": "imp.2ms",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "sleep!"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "—",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "حِمَاهُ",
              "lemma": "حمى",
              "features": "gen+3ms",
              "root": "ح م ي",
              "pos": "noun",
              "gloss": "His protection"
            },
            {
              "surface": "آمِنَا",
              "lemma": "آمن",
              "features": "indef.acc",
              "root": "أ م ن",
              "pos": "adj",
              "gloss": "safely, secure"
            }
          ]
        },
        {
          "id": "qr1-21-007",
          "page": 87,
          "ar": "نَمْ آمِناً حَتَّى السَّحَرْ، مِنْ كُلِّ ضَيْمٍ أَوْ كَدَرْ.",
          "en": "Sleep safely until dawn, from all wrong or distress.",
          "tokens": [
            {
              "surface": "نَمْ",
              "lemma": "نام",
              "features": "imp.2ms",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "sleep!"
            },
            {
              "surface": "آمِناً",
              "lemma": "آمن",
              "features": "indef.acc",
              "root": "أ م ن",
              "pos": "adj",
              "gloss": "safely, secure"
            },
            {
              "surface": "حَتَّى",
              "lemma": "حتى",
              "features": "part",
              "root": "—",
              "pos": "part",
              "gloss": "until"
            },
            {
              "surface": "السَّحَرْ",
              "lemma": "سحر",
              "features": "def.gen",
              "root": "س ح ر",
              "pos": "noun",
              "gloss": "the pre-dawn time"
            },
            {
              "surface": "مِنْ",
              "lemma": "من",
              "features": "prep",
              "root": "—",
              "pos": "prep",
              "gloss": "from"
            },
            {
              "surface": "كُلِّ",
              "lemma": "كل",
              "features": "gen.constr",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "every, all"
            },
            {
              "surface": "ضَيْمٍ",
              "lemma": "ضيم",
              "features": "indef.gen",
              "root": "ض ي م",
              "pos": "noun",
              "gloss": "wrong, oppression"
            },
            {
              "surface": "أَوْ",
              "lemma": "أو",
              "features": "conj",
              "root": "—",
              "pos": "conj",
              "gloss": "or"
            },
            {
              "surface": "كَدَرْ",
              "lemma": "كدر",
              "features": "indef.gen",
              "root": "ك د ر",
              "pos": "noun",
              "gloss": "distress, gloom"
            }
          ]
        },
        {
          "id": "qr1-21-008",
          "page": 87,
          "ar": "نَمْ فِيْ حِمَىٰ بَارِي الْبَشَرْ، نَمْ فِيْ حِمَاهُ آمِنَا.",
          "en": "Sleep in the protection of the Creator of mankind, sleep safely in His protection.",
          "tokens": [
            {
              "surface": "نَمْ",
              "lemma": "نام",
              "features": "imp.2ms",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "sleep!"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "—",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "حِمَىٰ",
              "lemma": "حمى",
              "features": "gen.constr",
              "root": "ح م ي",
              "pos": "noun",
              "gloss": "the protection of"
            },
            {
              "surface": "بَارِي",
              "lemma": "بارئ",
              "features": "gen.constr",
              "root": "ب ر أ",
              "pos": "noun",
              "gloss": "the Creator of"
            },
            {
              "surface": "الْبَشَرْ",
              "lemma": "بشر",
              "features": "def.gen",
              "root": "ب ش ر",
              "pos": "noun",
              "gloss": "mankind"
            },
            {
              "surface": "نَمْ",
              "lemma": "نام",
              "features": "imp.2ms",
              "root": "ن و م",
              "pos": "verb",
              "gloss": "sleep!"
            },
            {
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "—",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "حِمَاهُ",
              "lemma": "حمى",
              "features": "gen+3ms",
              "root": "ح م ي",
              "pos": "noun",
              "gloss": "His protection"
            },
            {
              "surface": "آمِنَا",
              "lemma": "آمن",
              "features": "indef.acc",
              "root": "أ م ن",
              "pos": "adj",
              "gloss": "safely, secure"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنْ يُخَاطِبُ الشَّاعِرُ فِي هٰذِهِ الْقَصِيْدَةِ؟",
          "options": [
            "الطِّفْلَ الْحَبِيْبَ",
            "الطَّائِرَ",
            "النَّمْلَةَ"
          ],
          "answer": 0,
          "qEn": "Who does the poet address in this poem?",
          "optionsEn": [
            "The beloved child",
            "The bird",
            "The ant"
          ]
        },
        {
          "q": "بِمَاذَا وُصِفَ الْفِرَاشُ فِي مَطْلَعِ الْقَصِيْدَةِ؟",
          "options": [
            "بِأَنَّهُ نَاعِمٌ",
            "بِأَنَّهُ صَغِيْرٌ",
            "بِأَنَّهُ بَعِيْدٌ"
          ],
          "answer": 0,
          "qEn": "How is the bed described at the start of the poem?",
          "optionsEn": [
            "As soft",
            "As small",
            "As far away"
          ]
        },
        {
          "q": "فِيْ حِفْظِ مَنْ تَبِيْتُ الْعَصَافِيْرُ؟",
          "options": [
            "فِيْ حِفْظِ مَوْلَانَا الصَّمَدِ",
            "فِيْ حِفْظِ الْأُمِّ",
            "فِيْ حِفْظِ الرَّاعِيْ"
          ],
          "answer": 0,
          "qEn": "In whose keeping do the birds spend the night?",
          "optionsEn": [
            "In the keeping of our Lord, the Self-Sufficient",
            "In the mother's keeping",
            "In the shepherd's keeping"
          ]
        }
      ]
    }
  ]
};

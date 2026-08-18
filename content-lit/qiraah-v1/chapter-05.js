// القراءة الراشدة, volume one, chapter five -- الطائر.
//
// Follows the shape of chapter-01.js/chapter-02.js -- see
// ../CHAPTER-FORMAT.md. Hand-authored from the scanned pages
// (qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed pages 41-42);
// no JSON intermediate (see PROJECT_CONTEXT.md / QASAS_AGENT_BRIEF.md).
//
// THIS CHAPTER IS VERSE (nazm), the book's second verse chapter after
// chapter-03.js (النملة) -- same adaptations apply, per the pattern
// already agreed with Habib:
//   - Each bayt (both hemistichs) is one `sentences[]` entry; the
//     mid-bayt pause is rendered as `،` and the bayt-end as `.`.
//   - Unlike chapter-03.js, THIS poem's print keeps full case vowels
//     through the hemistich-internal pause (e.g. `قَفَصاً`, `مُطْلَقاً` both
//     show a live tanwin even though they end a hemistich) -- pausal
//     (bare, no visible case ending) spelling shows up only on the two
//     bayt-final rhyme words that have no 1st-person pronoun suffix to
//     absorb the case mark: `ذَهَبْ` (qr1-5-002) and `أَعْذَبْ` (qr1-5-005).
//     `features` records the underlying grammatical case for both
//     anyway, matching the convention used throughout for suffixed
//     nouns and chapter-03.js's fully-pausal poem.
//   - The poem uses "ذهب" for two unrelated words -- the verb "to go"
//     (أَذْهَبُ, qr1-5-005) and the noun "gold" (مِنْ ذَهَبْ, qr1-5-002).
//     Since both appear in this chapter, the noun is keyed "ذهب-معدن"
//     ("gold [metal]") in `lemmas` to avoid clobbering the verb's entry;
//     first time this book has needed to disambiguate a homograph pair
//     within one chapter's local lemma dict.
//   - `workshop` is omitted entirely, for the same reason as
//     chapter-03.js: cloze/shift drill by substituting wrong
//     conjugations, which risks breaking metre/rhyme rather than
//     testing grammar in a four-line rhymed poem.
//   - `register` is "first_person_verse", matching chapter-03.js.
//
// The poem is followed in print by "(مَدَارِجُ الْقِرَاءَةِ)" -- a source
// attribution (reprinted from another primer), not part of the poem
// itself. Not included in the tokenized text.
export const CHAPTER = {
  "id": "ch5",
  "number": 5,
  "title": {
    "ar": "الطَّائِرُ",
    "en": "The Bird"
  },
  "pages": [
    41,
    42
  ],
  "register": "first_person_verse",
  "newWords": [
    "حبس",
    "مذهب",
    "طرب",
    "قفص",
    "غابة",
    "مطلب",
    "عذب",
    "صدح"
  ],
  "lemmas": {
    "حبس": {
      "root": "ح ب س",
      "pos": "noun",
      "gloss": "confinement, captivity",
      "content": true
    },
    "ليس": {
      "root": "ل ي س",
      "pos": "verb",
      "gloss": "to not be",
      "content": true
    },
    "مذهب": {
      "root": "ذ ه ب",
      "pos": "noun",
      "gloss": "way, manner",
      "content": true,
      "book_note": "مَذْهَب (ج) مذاهب: طريقة"
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "طرب": {
      "root": "ط ر ب",
      "pos": "noun",
      "gloss": "joy, delight",
      "content": true,
      "book_note": "طَرَب: خِفَّةٌ وَهِزَّةٌ تُثِيْرُ النَّفْسَ لِفَرَحٍ أَوْ حُزْنٍ أَوِ ارْتِيَاحٍ، وَأَغْلَبُ مَا يُسْتَعْمَلُ الْيَوْمَ فِي الِارْتِيَاحِ (a lightness/thrill stirring the soul from joy, grief, or contentment -- mostly used today for contentment)"
    },
    "رضي": {
      "root": "ر ض ي",
      "pos": "verb",
      "gloss": "to be content, accept, be pleased with",
      "content": true
    },
    "قفص": {
      "root": "ق ف ص",
      "pos": "noun",
      "gloss": "cage",
      "content": true
    },
    "إن": {
      "root": "—",
      "pos": "part",
      "gloss": "if; indeed, verily",
      "content": false
    },
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "ذهب-معدن": {
      "root": "ذ ه ب",
      "pos": "noun",
      "gloss": "gold",
      "content": true
    },
    "غابة": {
      "root": "غ ي ب",
      "pos": "noun",
      "gloss": "forest, grove",
      "content": true
    },
    "رب": {
      "root": "ر ب ب",
      "pos": "noun",
      "gloss": "Lord",
      "content": true
    },
    "غاية": {
      "root": "غ ي ي",
      "pos": "noun",
      "gloss": "goal, aim",
      "content": true,
      "book_note": "الغاية (ج) الغايات: الهدف"
    },
    "عيش": {
      "root": "ع ي ش",
      "pos": "noun",
      "gloss": "life, living",
      "content": true
    },
    "مطلب": {
      "root": "ط ل ب",
      "pos": "noun",
      "gloss": "aim, goal, desire",
      "content": true,
      "book_note": "مَطْلَب (ج) مَطَالِب: هَدَفٌ"
    },
    "قد": {
      "root": "—",
      "pos": "part",
      "gloss": "already, indeed",
      "content": false
    },
    "طاب": {
      "root": "ط ي ب",
      "pos": "verb",
      "gloss": "to be pleasant, delicious",
      "content": true
    },
    "مطعم": {
      "root": "ط ع م",
      "pos": "noun",
      "gloss": "food, fare",
      "content": true
    },
    "راق": {
      "root": "ر و ق",
      "pos": "verb",
      "gloss": "to be delightful, pleasing",
      "content": true,
      "book_note": "رَاقَ يَرُوْقُ رَوْقاً: الشَّيْءُ أَعْجَبَهُ (a thing pleased/delighted him)"
    },
    "مشرب": {
      "root": "ش ر ب",
      "pos": "noun",
      "gloss": "drink, drinking-place",
      "content": true
    },
    "ذهب": {
      "root": "ذ ه ب",
      "pos": "verb",
      "gloss": "to go",
      "content": true
    },
    "استقى": {
      "root": "س ق ي",
      "pos": "verb",
      "gloss": "to draw/fetch water, drink",
      "content": true
    },
    "ماء": {
      "root": "م و ه",
      "pos": "noun",
      "gloss": "water",
      "content": true
    },
    "نبع": {
      "root": "ن ب ع",
      "pos": "noun",
      "gloss": "spring, source",
      "content": true
    },
    "عذب": {
      "root": "ع ذ ب",
      "pos": "adj",
      "gloss": "sweet, fresh (of water)",
      "content": true
    },
    "صدح": {
      "root": "ص د ح",
      "pos": "verb",
      "gloss": "to sing, warble (of a bird)",
      "content": true,
      "book_note": "أَصْدَحُ (صَدَحَ يَصْدَحُ صَدْحاً): أُغَرِّدُ (I warble, sing)"
    },
    "مطلق": {
      "root": "ط ل ق",
      "pos": "adj",
      "gloss": "free, unrestrained",
      "content": true,
      "book_note": "مُطْلَقاً: حُرّاً"
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "lines": true,
      "en": "Captivity is not my way, and there is no joy in it. I do not accept a cage, even if it were made of gold. The groves of my Lord are my goal, and life among them is my desire. My food has been delightful there, and my drink has been pleasing there. I go about there and drink from the water of a spring, sweeter still. I sing freely there, for captivity is not my way.",
      "sentences": [
        {
          "id": "qr1-5-001",
          "page": 41,
          "ar": "الْحَبْسُ لَيْسَ مَذْهَبِيْ، وَلَيْسَ فِيْهِ طَرَبِيْ.",
          "en": "Captivity is not my way, and there is no joy in it.",
          "tokens": [
            {
              "surface": "الْحَبْسُ",
              "lemma": "حبس",
              "features": "def.nom",
              "root": "ح ب س",
              "pos": "noun",
              "gloss": "confinement, captivity"
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
              "surface": "مَذْهَبِيْ",
              "lemma": "مذهب",
              "features": "acc+1s",
              "root": "ذ ه ب",
              "pos": "noun",
              "gloss": "way, manner"
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
              "surface": "فِيْهِ",
              "lemma": "في",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "طَرَبِيْ",
              "lemma": "طرب",
              "features": "nom+1s",
              "root": "ط ر ب",
              "pos": "noun",
              "gloss": "joy, delight"
            }
          ]
        },
        {
          "id": "qr1-5-002",
          "page": 42,
          "ar": "فَلَسْتُ أَرْضَىٰ قَفَصاً، وَإِنْ يَكُنْ مِنْ ذَهَبْ.",
          "en": "I do not accept a cage, even if it were made of gold.",
          "tokens": [
            {
              "surface": "فَلَسْتُ",
              "lemma": "ليس",
              "features": "conj+perf.1s",
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
              "gloss": "to be content, accept, be pleased with"
            },
            {
              "surface": "قَفَصاً",
              "lemma": "قفص",
              "features": "indef.acc",
              "root": "ق ف ص",
              "pos": "noun",
              "gloss": "cage"
            },
            {
              "surface": "وَإِنْ",
              "lemma": "إن",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed, verily"
            },
            {
              "surface": "يَكُنْ",
              "lemma": "كان",
              "features": "impf.3ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
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
              "surface": "ذَهَبْ",
              "lemma": "ذهب-معدن",
              "features": "indef.gen",
              "root": "ذ ه ب",
              "pos": "noun",
              "gloss": "gold"
            }
          ]
        },
        {
          "id": "qr1-5-003",
          "page": 42,
          "ar": "غَابَاتُ رَبِّيْ غَايَتِيْ، وَالْعَيْشُ فِيْهَا مَطْلَبِيْ.",
          "en": "The groves of my Lord are my goal, and life among them is my desire.",
          "tokens": [
            {
              "surface": "غَابَاتُ",
              "lemma": "غابة",
              "features": "pl.nom.constr",
              "root": "غ ي ب",
              "pos": "noun",
              "gloss": "forest, grove"
            },
            {
              "surface": "رَبِّيْ",
              "lemma": "رب",
              "features": "gen+1s",
              "root": "ر ب ب",
              "pos": "noun",
              "gloss": "Lord"
            },
            {
              "surface": "غَايَتِيْ",
              "lemma": "غاية",
              "features": "nom+1s",
              "root": "غ ي ي",
              "pos": "noun",
              "gloss": "goal, aim"
            },
            {
              "surface": "وَالْعَيْشُ",
              "lemma": "عيش",
              "features": "conj+def.nom",
              "root": "ع ي ش",
              "pos": "noun",
              "gloss": "life, living"
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
              "surface": "مَطْلَبِيْ",
              "lemma": "مطلب",
              "features": "nom+1s",
              "root": "ط ل ب",
              "pos": "noun",
              "gloss": "aim, goal, desire"
            }
          ]
        },
        {
          "id": "qr1-5-004",
          "page": 42,
          "ar": "قَدْ طَابَ فِيْهَا مَطْعَمِيْ، وَرَاقَ فِيْهَا مَشْرَبِيْ.",
          "en": "My food has been delightful there, and my drink has been pleasing there.",
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
              "surface": "طَابَ",
              "lemma": "طاب",
              "features": "perf.3ms",
              "root": "ط ي ب",
              "pos": "verb",
              "gloss": "to be pleasant, delicious"
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
              "surface": "مَطْعَمِيْ",
              "lemma": "مطعم",
              "features": "nom+1s",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food, fare"
            },
            {
              "surface": "وَرَاقَ",
              "lemma": "راق",
              "features": "conj+perf.3ms",
              "root": "ر و ق",
              "pos": "verb",
              "gloss": "to be delightful, pleasing"
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
              "surface": "مَشْرَبِيْ",
              "lemma": "مشرب",
              "features": "nom+1s",
              "root": "ش ر ب",
              "pos": "noun",
              "gloss": "drink, drinking-place"
            }
          ]
        },
        {
          "id": "qr1-5-005",
          "page": 42,
          "ar": "أَذْهَبُ فِيْهَا أَسْتَقِيْ، مِنْ مَاءِ نَبْعٍ أَعْذَبْ.",
          "en": "I go about there and drink, from the water of a spring, sweeter still.",
          "tokens": [
            {
              "surface": "أَذْهَبُ",
              "lemma": "ذهب",
              "features": "impf.1s",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
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
              "surface": "أَسْتَقِيْ",
              "lemma": "استقى",
              "features": "impf.1s",
              "root": "س ق ي",
              "pos": "verb",
              "gloss": "to draw/fetch water, drink"
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
              "surface": "مَاءِ",
              "lemma": "ماء",
              "features": "gen.constr",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
            },
            {
              "surface": "نَبْعٍ",
              "lemma": "نبع",
              "features": "indef.gen",
              "root": "ن ب ع",
              "pos": "noun",
              "gloss": "spring, source"
            },
            {
              "surface": "أَعْذَبْ",
              "lemma": "عذب",
              "features": "indef.gen",
              "root": "ع ذ ب",
              "pos": "adj",
              "gloss": "sweeter, more delicious"
            }
          ]
        },
        {
          "id": "qr1-5-006",
          "page": 42,
          "ar": "أَصْدَحُ فِيْهَا مُطْلَقاً، فَالْحَبْسُ لَيْسَ مَذْهَبِيْ.",
          "en": "I sing freely there, for captivity is not my way.",
          "tokens": [
            {
              "surface": "أَصْدَحُ",
              "lemma": "صدح",
              "features": "impf.1s",
              "root": "ص د ح",
              "pos": "verb",
              "gloss": "to sing, warble (of a bird)"
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
              "surface": "مُطْلَقاً",
              "lemma": "مطلق",
              "features": "acc",
              "root": "ط ل ق",
              "pos": "adj",
              "gloss": "free, unrestrained"
            },
            {
              "surface": "فَالْحَبْسُ",
              "lemma": "حبس",
              "features": "conj+def.nom",
              "root": "ح ب س",
              "pos": "noun",
              "gloss": "confinement, captivity"
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
              "surface": "مَذْهَبِيْ",
              "lemma": "مذهب",
              "features": "acc+1s",
              "root": "ذ ه ب",
              "pos": "noun",
              "gloss": "way, manner"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنْ يَتَكَلَّمُ فِي هٰذِهِ الْقَصِيْدَةِ؟",
          "options": [
            "الطَّائِرُ",
            "الْوَلَدُ",
            "النَّمْلَةُ"
          ],
          "answer": 0,
          "qEn": "Who is speaking in this poem?",
          "optionsEn": [
            "The bird",
            "The boy",
            "The ant"
          ]
        },
        {
          "q": "لِمَاذَا لَا يَرْضَى الطَّائِرُ بِالْقَفَصِ؟",
          "options": [
            "لأَنَّ الْحَبْسَ لَيْسَ مَذْهَبَهُ وَلَا طَرَبَ فِيْهِ",
            "لأَنَّ الْقَفَصَ صَغِيْرٌ",
            "لأَنَّهُ جَائِعٌ"
          ],
          "answer": 0,
          "qEn": "Why doesn't the bird accept the cage?",
          "optionsEn": [
            "Because captivity is not his way and there is no joy in it",
            "Because the cage is small",
            "Because he is hungry"
          ]
        },
        {
          "q": "مِمَّ يَشْرَبُ الطَّائِرُ فِي الْغَابَاتِ؟",
          "options": [
            "مِنْ مَاءِ نَبْعٍ أَعْذَبَ",
            "مِنْ مَاءِ الْبَحْرِ",
            "مِنَ الْمَطَرِ فَقَطْ"
          ],
          "answer": 0,
          "qEn": "What does the bird drink from in the groves?",
          "optionsEn": [
            "From the water of a sweeter spring",
            "From seawater",
            "Only from rain"
          ]
        }
      ]
    }
  ]
};

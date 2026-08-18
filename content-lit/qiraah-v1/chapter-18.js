// القراءة الراشدة, volume one, chapter eighteen -- ترنيمة الولد في الصباح.
//
// Follows the shape of chapter-03.js/chapter-05.js -- see
// ../CHAPTER-FORMAT.md for the full specification. Hand-authored directly
// from the scanned page (qiratur rashida/_al-qir`atur-rashida 1-2.pdf,
// printed page 79); there is no JSON intermediate (see PROJECT_CONTEXT.md
// and QASAS_AGENT_BRIEF.md -- the pipeline no longer emits JSON).
//
// The book's third verse chapter (after chapter-03.js/chapter-05.js), and
// its shortest chapter yet at a single page -- an eight-line child's hymn
// of thanks at sunrise, attributed in the book to مَدَارِجُ الْقِرَاءَةِ (that
// attribution line is not tokenized, matching how chapter-03.js/
// chapter-05.js omit their own source lines/paragraph glue from the
// sentence data). Each bayt (couplet: صدر + عجز, read right column then
// left) is kept as one sentence, exactly as chapter-05.js did.
//
// Vocabulary notes:
//   - أَحْسَنَ in مَا أَحْسَنَ النُّوْرَ ("How beautiful is the light!") is the
//     تعجب (exclamative) construction -- grammatically a frozen 3ms perfect
//     verb, though built on the same root/lemma as the already-established
//     "أحسن" (elative adjective "better, best"). Tagged against that lemma
//     with pos_override="verb" and a contextual gloss rather than a new
//     key, since the two are closely cognate forms of one root, not
//     unrelated homographs.
//   - أَرَىٰ ("I see") is tagged against the already-established "وجد" lemma
//     with pos_override="verb" and gloss_override="I see" -- a one-off
//     contextual substitution rather than a new key, since a dedicated
//     "رأى" lemma was not otherwise needed in this short chapter and reuse
//     keeps the lemma count lean; a genuine "رأى" ("to see") lemma appears
//     starting chapter-13.js.
//   - الشُّكْرُ/شُكْراً ("thanks, gratitude" -- the noun, appearing three times)
//     reuses the already-established "شكر" lemma (established as the verb
//     "to thank") via pos_override="noun" -- a closely related derived
//     noun, not a true unrelated-homograph fork like قبل/قبل-قبول.
//   - الْأُمُوْرَ ("affairs, matters") is given its own "أمر-شأن" lemma, distinct
//     from the already-established "أمر" ("to order, command") -- an
//     unrelated-enough sense sharing only a root, the same treatment
//     chapter-08.js gave خروج alongside خرج.
//   - Three footnoted words carry book_note: شدا, بهي, خامل -- matching the
//     established footnote-as-book_note convention.
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch18",
  "number": 18,
  "title": {
    "ar": "تَرْنِيْمَةُ الْوَلَدِ فِي الصَّبَاحِ",
    "en": "The Child's Morning Song"
  },
  "pages": [
    79
  ],
  "register": "first_person_verse",
  "newWords": [
    "أشرق",
    "ولى",
    "ظلام",
    "نور",
    "أمر-شأن",
    "طير",
    "شدا",
    "غصن",
    "بهي",
    "خامل",
    "أجار",
    "صان"
  ],
  "lemmas": {
    "أشرق": {
      "root": "ش ر ق",
      "pos": "verb",
      "gloss": "to rise, shine, dawn (of the sun)",
      "content": true
    },
    "شمس": {
      "root": "ش م س",
      "pos": "noun",
      "gloss": "sun",
      "content": true
    },
    "قد": {
      "root": "—",
      "pos": "part",
      "gloss": "already, indeed",
      "content": false
    },
    "ولى": {
      "root": "و ل ي",
      "pos": "verb",
      "gloss": "to turn away, retreat, flee",
      "content": true,
      "book_note": "وَلَّى الظَّلَامُ هَارِباً: أَدْبَرَ عَنْهُ وَنَأَى (بَعُدَ) (the darkness turned away fleeing: it withdrew and moved off)"
    },
    "ظلام": {
      "root": "ظ ل م",
      "pos": "noun",
      "gloss": "darkness",
      "content": true
    },
    "هارب": {
      "root": "ه ر ب",
      "pos": "adj",
      "gloss": "fleeing, in flight",
      "content": true
    },
    "شكر": {
      "root": "ش ك ر",
      "pos": "verb",
      "gloss": "to thank",
      "content": true
    },
    "الله": {
      "root": "—",
      "pos": "proper",
      "gloss": "Allah",
      "content": true
    },
    "أحد": {
      "root": "أ ح د",
      "pos": "noun",
      "gloss": "one, someone, anyone",
      "content": true
    },
    "عظيم": {
      "root": "ع ظ م",
      "pos": "adj",
      "gloss": "great, mighty",
      "content": true
    },
    "واجب": {
      "root": "و ج ب",
      "pos": "adj",
      "gloss": "obligatory, necessary, due",
      "content": true
    },
    "ما": {
      "root": "—",
      "pos": "part",
      "gloss": "not; what",
      "content": false
    },
    "أحسن": {
      "root": "ح س ن",
      "pos": "adj",
      "gloss": "better, best",
      "content": true
    },
    "نور": {
      "root": "ن و ر",
      "pos": "noun",
      "gloss": "light",
      "content": true
    },
    "وجد": {
      "root": "و ج د",
      "pos": "verb",
      "gloss": "to find",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "أمر-شأن": {
      "root": "أ م ر",
      "pos": "noun",
      "gloss": "matter, affair",
      "content": true
    },
    "باسم": {
      "root": "ب س م",
      "pos": "adj",
      "gloss": "smiling",
      "content": true
    },
    "طير": {
      "root": "ط ي ر",
      "pos": "noun",
      "gloss": "bird(s)",
      "content": true
    },
    "شدا": {
      "root": "ش د و",
      "pos": "verb",
      "gloss": "to sing, warble",
      "content": true,
      "book_note": "شَدَا يَشْدُو شَدْواً: تَرَنَّمَ وَتَغَنَّىٰ (shadā: to sing, to warble a tune)"
    },
    "سحر": {
      "root": "س ح ر",
      "pos": "noun",
      "gloss": "dawn, early morning",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, on",
      "content": false
    },
    "غصن": {
      "root": "غ ص ن",
      "pos": "noun",
      "gloss": "branch, bough",
      "content": true
    },
    "قام": {
      "root": "ق و م",
      "pos": "verb",
      "gloss": "to rise, get up; to stand",
      "content": true
    },
    "بهي": {
      "root": "ب ه ي",
      "pos": "adj",
      "gloss": "radiant, splendid",
      "content": true,
      "book_note": "بَهِيّ (ج) أَبْهِيَاء: رَائِعُ الْحُسْنِ (bahiyy, pl. abhiyāʾ: splendidly beautiful)"
    },
    "عمل": {
      "root": "ع م ل",
      "pos": "noun",
      "gloss": "work, deed",
      "content": true
    },
    "إن": {
      "root": "—",
      "pos": "part",
      "gloss": "if; indeed; that",
      "content": false
    },
    "ود": {
      "root": "و د د",
      "pos": "verb",
      "gloss": "to wish, love to",
      "content": true
    },
    "دائما": {
      "root": "د و م",
      "pos": "adv",
      "gloss": "always",
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
    },
    "خامل": {
      "root": "خ م ل",
      "pos": "adj",
      "gloss": "obscure, undistinguished, idle",
      "content": true,
      "book_note": "خَامِل (ج) خَمَلَة: مَجْهُوْلُ الِاسْمِ لَا نَبَاهَةَ لَهُ (khāmil, pl. khamalah: unknown by name, without any renown)"
    },
    "أجار": {
      "root": "ج و ر",
      "pos": "verb",
      "gloss": "to protect, grant refuge",
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
      "gloss": "each, every, all",
      "content": true
    },
    "شر": {
      "root": "ش ر ر",
      "pos": "noun",
      "gloss": "evil, harm",
      "content": true
    },
    "ل": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to; belonging to",
      "content": false
    },
    "صان": {
      "root": "ص و ن",
      "pos": "verb",
      "gloss": "to guard, protect, preserve",
      "content": true
    },
    "دوام": {
      "root": "د و م",
      "pos": "noun",
      "gloss": "constancy, continuance",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "lines": true,
      "en": "A child's morning hymn: the sun has risen and darkness has fled, so thanks be to God, the One -- a great, obligatory thanks. How beautiful the light in which all things seem to smile, and the birds sing at dawn on the branches. How beautiful that radiant light, in which I find myself hard at work -- for I always wish never to be idle. God has protected me from every evil in the dark, so thanks to Him who has guarded me, thanks to Him always.",
      "sentences": [
        {
          "id": "qr1-18-001",
          "page": 79,
          "ar": "أَشْرَقَتِ الشَّمْسُ وَقَدْ وَلَّىٰ الظَّلَامُ هَارِبَا .",
          "en": "The sun has risen, and the darkness has fled, retreating,",
          "tokens": [
            {
              "surface": "أَشْرَقَتِ",
              "lemma": "أشرق",
              "features": "perf.3fs",
              "root": "ش ر ق",
              "pos": "verb",
              "gloss": "to rise, shine, dawn (of the sun)"
            },
            {
              "surface": "الشَّمْسُ",
              "lemma": "شمس",
              "features": "def.nom",
              "root": "ش م س",
              "pos": "noun",
              "gloss": "sun"
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
              "surface": "وَلَّىٰ",
              "lemma": "ولى",
              "features": "perf.3ms",
              "root": "و ل ي",
              "pos": "verb",
              "gloss": "to turn away, retreat, flee"
            },
            {
              "surface": "الظَّلَامُ",
              "lemma": "ظلام",
              "features": "def.nom",
              "root": "ظ ل م",
              "pos": "noun",
              "gloss": "darkness"
            },
            {
              "surface": "هَارِبَا",
              "lemma": "هارب",
              "features": "acc",
              "root": "ه ر ب",
              "pos": "adj",
              "gloss": "fleeing, in flight"
            }
          ]
        },
        {
          "id": "qr1-18-002",
          "page": 79,
          "ar": "فَالشُّكْرُ للهِ الْأَحَدْ شُكْراً عَظِيْماً وَاجِبَا .",
          "en": "so thanks be to God, the One -- a great, obligatory thanks.",
          "tokens": [
            {
              "surface": "فَالشُّكْرُ",
              "lemma": "شكر",
              "features": "conj+def.nom",
              "root": "ش ك ر",
              "pos": "noun",
              "gloss": "thanks, gratitude"
            },
            {
              "surface": "للهِ",
              "lemma": "الله",
              "features": "prep+gen",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
            },
            {
              "surface": "الْأَحَدْ",
              "lemma": "أحد",
              "features": "def.nom",
              "root": "أ ح د",
              "pos": "noun",
              "gloss": "the One (God)"
            },
            {
              "surface": "شُكْراً",
              "lemma": "شكر",
              "features": "indef.acc",
              "root": "ش ك ر",
              "pos": "noun",
              "gloss": "thanks, gratitude"
            },
            {
              "surface": "عَظِيْماً",
              "lemma": "عظيم",
              "features": "indef.acc",
              "root": "ع ظ م",
              "pos": "adj",
              "gloss": "great, mighty"
            },
            {
              "surface": "وَاجِبَا",
              "lemma": "واجب",
              "features": "indef.acc",
              "root": "و ج ب",
              "pos": "adj",
              "gloss": "obligatory, necessary, due"
            }
          ]
        },
        {
          "id": "qr1-18-003",
          "page": 79,
          "ar": "مَا أَحْسَنَ النُّوْرَ أَرَىٰ فِيْهَا الْأُمُوْرَ بَاسِمَهْ .",
          "en": "How beautiful is the light! I see all things in it smiling,",
          "tokens": [
            {
              "surface": "مَا",
              "lemma": "ما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "how...! (exclamative)"
            },
            {
              "surface": "أَحْسَنَ",
              "lemma": "أحسن",
              "features": "perf.3ms",
              "root": "ح س ن",
              "pos": "verb",
              "gloss": "how beautiful/excellent is...!"
            },
            {
              "surface": "النُّوْرَ",
              "lemma": "نور",
              "features": "acc",
              "root": "ن و ر",
              "pos": "noun",
              "gloss": "light"
            },
            {
              "surface": "أَرَىٰ",
              "lemma": "وجد",
              "features": "impf.1s",
              "root": "و ج د",
              "pos": "verb",
              "gloss": "I see"
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
              "surface": "الْأُمُوْرَ",
              "lemma": "أمر-شأن",
              "features": "def.pl.acc",
              "root": "أ م ر",
              "pos": "noun",
              "gloss": "matter, affair"
            },
            {
              "surface": "بَاسِمَهْ",
              "lemma": "باسم",
              "features": "acc.f",
              "root": "ب س م",
              "pos": "adj",
              "gloss": "smiling"
            }
          ]
        },
        {
          "id": "qr1-18-004",
          "page": 79,
          "ar": "وَالطَّيْرُ تَشْدُوْ سَحَراً عَلَىٰ الْغُصُوْنِ قَائِمَهْ .",
          "en": "and the birds sing at dawn, perched on the branches.",
          "tokens": [
            {
              "surface": "وَالطَّيْرُ",
              "lemma": "طير",
              "features": "conj+def.nom",
              "root": "ط ي ر",
              "pos": "noun",
              "gloss": "bird(s)"
            },
            {
              "surface": "تَشْدُوْ",
              "lemma": "شدا",
              "features": "impf.3fs",
              "root": "ش د و",
              "pos": "verb",
              "gloss": "to sing, warble"
            },
            {
              "surface": "سَحَراً",
              "lemma": "سحر",
              "features": "indef.acc",
              "root": "س ح ر",
              "pos": "noun",
              "gloss": "dawn, early morning"
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
              "surface": "الْغُصُوْنِ",
              "lemma": "غصن",
              "features": "def.pl.gen",
              "root": "غ ص ن",
              "pos": "noun",
              "gloss": "branch, bough"
            },
            {
              "surface": "قَائِمَهْ",
              "lemma": "قام",
              "features": "acc.f",
              "root": "ق و م",
              "pos": "adj",
              "gloss": "perched, standing"
            }
          ]
        },
        {
          "id": "qr1-18-005",
          "page": 79,
          "ar": "مَا أَحْسَنَ النُّوْرَ الْبَهِي فِيْهِ أَجِدُ عَامِلَا .",
          "en": "How beautiful is that radiant light -- in it I find myself hard at work,",
          "tokens": [
            {
              "surface": "مَا",
              "lemma": "ما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "how...! (exclamative)"
            },
            {
              "surface": "أَحْسَنَ",
              "lemma": "أحسن",
              "features": "perf.3ms",
              "root": "ح س ن",
              "pos": "verb",
              "gloss": "how beautiful/excellent is...!"
            },
            {
              "surface": "النُّوْرَ",
              "lemma": "نور",
              "features": "acc",
              "root": "ن و ر",
              "pos": "noun",
              "gloss": "light"
            },
            {
              "surface": "الْبَهِي",
              "lemma": "بهي",
              "features": "def.acc",
              "root": "ب ه ي",
              "pos": "adj",
              "gloss": "radiant, splendid"
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
              "surface": "أَجِدُ",
              "lemma": "وجد",
              "features": "impf.1s",
              "root": "و ج د",
              "pos": "verb",
              "gloss": "to find"
            },
            {
              "surface": "عَامِلَا",
              "lemma": "عمل",
              "features": "acc",
              "root": "ع م ل",
              "pos": "adj",
              "gloss": "active, hard at work"
            }
          ]
        },
        {
          "id": "qr1-18-006",
          "page": 79,
          "ar": "إِنِّيْ أَوَدُّ دَائِمَاً أَلَّا أَكُوْنَ خَامِلَا .",
          "en": "for I always wish that I never be idle.",
          "tokens": [
            {
              "surface": "إِنِّيْ",
              "lemma": "إن",
              "features": "part+1s",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed; that"
            },
            {
              "surface": "أَوَدُّ",
              "lemma": "ود",
              "features": "impf.1s",
              "root": "و د د",
              "pos": "verb",
              "gloss": "to wish, love to"
            },
            {
              "surface": "دَائِمَاً",
              "lemma": "دائما",
              "features": "acc",
              "root": "د و م",
              "pos": "adv",
              "gloss": "always"
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
              "surface": "خَامِلَا",
              "lemma": "خامل",
              "features": "acc",
              "root": "خ م ل",
              "pos": "adj",
              "gloss": "obscure, undistinguished, idle"
            }
          ]
        },
        {
          "id": "qr1-18-007",
          "page": 79,
          "ar": "اللهُ قَدْ أَجَارَنِيْ مِنْ كُلِّ شَرٍّ فِي الظَّلَامِ .",
          "en": "God has protected me from every evil in the darkness,",
          "tokens": [
            {
              "surface": "اللهُ",
              "lemma": "الله",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Allah"
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
              "surface": "أَجَارَنِيْ",
              "lemma": "أجار",
              "features": "perf.3ms+1s",
              "root": "ج و ر",
              "pos": "verb",
              "gloss": "to protect, grant refuge"
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
              "surface": "كُلِّ",
              "lemma": "كل",
              "features": "gen.constr",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "each, every, all"
            },
            {
              "surface": "شَرٍّ",
              "lemma": "شر",
              "features": "indef.gen",
              "root": "ش ر ر",
              "pos": "noun",
              "gloss": "evil, harm"
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
              "surface": "الظَّلَامِ",
              "lemma": "ظلام",
              "features": "def.gen",
              "root": "ظ ل م",
              "pos": "noun",
              "gloss": "darkness"
            }
          ]
        },
        {
          "id": "qr1-18-008",
          "page": 79,
          "ar": "شُكْراً لَهُ قَدْ صَانَنِيْ شُكْراً لَهُ عَلَىٰ الدَّوَامِ .",
          "en": "so thanks to Him who has guarded me, thanks to Him always.",
          "tokens": [
            {
              "surface": "شُكْراً",
              "lemma": "شكر",
              "features": "indef.acc",
              "root": "ش ك ر",
              "pos": "noun",
              "gloss": "thanks, gratitude"
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
              "surface": "قَدْ",
              "lemma": "قد",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "already, indeed"
            },
            {
              "surface": "صَانَنِيْ",
              "lemma": "صان",
              "features": "perf.3ms+1s",
              "root": "ص و ن",
              "pos": "verb",
              "gloss": "to guard, protect, preserve"
            },
            {
              "surface": "شُكْراً",
              "lemma": "شكر",
              "features": "indef.acc",
              "root": "ش ك ر",
              "pos": "noun",
              "gloss": "thanks, gratitude"
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
              "surface": "عَلَىٰ",
              "lemma": "على",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, on"
            },
            {
              "surface": "الدَّوَامِ",
              "lemma": "دوام",
              "features": "def.gen",
              "root": "د و م",
              "pos": "noun",
              "gloss": "constancy, continuance"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا يَشْعُرُ الْوَلَدُ حِيْنَ تُشْرِقُ الشَّمْسُ؟",
          "options": [
            "بِالشُّكْرِ للهِ الْأَحَدِ",
            "بِالْخَوْفِ مِنَ النَّهَارِ",
            "بِالْمَلَلِ"
          ],
          "answer": 0,
          "qEn": "What does the child feel when the sun rises?",
          "optionsEn": [
            "Gratitude to God, the One",
            "Fear of the day",
            "Boredom"
          ]
        },
        {
          "q": "مَاذَا يَتَمَنَّى الْوَلَدُ لِنَفْسِهِ دَائِماً؟",
          "options": [
            "أَلَّا يَكُوْنَ خَامِلَا",
            "أَنْ يَنَامَ طُوْلَ النَّهَارِ",
            "أَنْ يَكُوْنَ غَنِيّاً"
          ],
          "answer": 0,
          "qEn": "What does the child always wish for himself?",
          "optionsEn": [
            "Never to be idle",
            "To sleep all day",
            "To be wealthy"
          ]
        },
        {
          "q": "مِمَّ حَمَىٰ اللهُ الْوَلَدَ بِحَسَبِ الْقَصِيْدَةِ؟",
          "options": [
            "مِنْ كُلِّ شَرٍّ فِي الظَّلَامِ",
            "مِنَ الْمَرَضِ فَقَطْ",
            "مِنَ الْفَقْرِ"
          ],
          "answer": 0,
          "qEn": "According to the poem, what did God protect the child from?",
          "optionsEn": [
            "Every evil in the darkness",
            "Illness only",
            "Poverty"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "أَشْرَقَتِ الشَّمْسُ وَقَدْ وَلَّىٰ",
        "post": "هَارِبَا",
        "en": "The sun has risen, and the darkness has fled, retreating.",
        "options": [
          "الظَّلَامُ",
          "الظَّلَامَ",
          "الظَّلَامِ",
          "ظَلَامٌ"
        ],
        "answer": 0,
        "rationales": [
          "nominative -- subject of وَلَّىٰ.",
          "accusative -- wrong case for the subject.",
          "genitive -- wrong case.",
          "indefinite -- wrong definiteness; the darkness just described."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَالشُّكْرُ للهِ",
        "post": "شُكْراً عَظِيْماً وَاجِبَا",
        "en": "So thanks be to God, the One -- a great, obligatory thanks.",
        "options": [
          "الْأَحَدْ",
          "الْأَحَدُ",
          "الْأَحَدَ",
          "أَحَدٌ"
        ],
        "answer": 0,
        "rationales": [
          "genitive-position epithet after للهِ, fixed rhyme-form -- \"the One.\"",
          "nominative form -- doesn't fit the construct-like epithet slot here.",
          "accusative form -- wrong case for an epithet of اللهِ.",
          "indefinite -- wrong definiteness; God's own unique epithet."
        ]
      },
      {
        "type": "cloze",
        "pre": "مَا أَحْسَنَ النُّوْرَ أَرَىٰ فِيْهَا",
        "post": "بَاسِمَهْ",
        "en": "How beautiful is the light! I see all things in it smiling.",
        "options": [
          "الْأُمُوْرَ",
          "الْأُمُوْرُ",
          "الْأُمُوْرِ",
          "أُمُوْرٌ"
        ],
        "answer": 0,
        "rationales": [
          "accusative -- object of أَرَىٰ.",
          "nominative -- wrong case for a direct object.",
          "genitive -- wrong case.",
          "indefinite -- wrong definiteness; all things, generally."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَالطَّيْرُ تَشْدُوْ سَحَراً عَلَىٰ",
        "post": "قَائِمَهْ",
        "en": "And the birds sing at dawn, perched on the branches.",
        "options": [
          "الْغُصُوْنِ",
          "الْغُصُوْنُ",
          "الْغُصُوْنَ",
          "غُصُوْنٍ"
        ],
        "answer": 0,
        "rationales": [
          "genitive -- object of the preposition عَلَىٰ.",
          "nominative -- wrong case after a preposition.",
          "accusative -- wrong case after a preposition.",
          "indefinite -- wrong definiteness; the branches just described."
        ]
      },
      {
        "type": "cloze",
        "pre": "إِنِّيْ أَوَدُّ دَائِمَاً أَلَّا",
        "post": "خَامِلَا",
        "en": "For I always wish that I never be idle.",
        "options": [
          "أَكُوْنَ",
          "أَكُوْنُ",
          "كُنْتُ",
          "يَكُوْنَ"
        ],
        "answer": 0,
        "rationales": [
          "subjunctive after أَلَّا -- \"that I not be.\"",
          "indicative -- wrong mood after أَلَّا.",
          "past tense -- wrong tense for a standing wish.",
          "wrong person; the poem's \"I\" throughout."
        ]
      },
      {
        "type": "cloze",
        "pre": "اللهُ قَدْ أَجَارَنِيْ مِنْ كُلِّ",
        "post": "فِي الظَّلَامِ",
        "en": "God has protected me from every evil in the darkness.",
        "options": [
          "شَرٍّ",
          "شَرٌّ",
          "شَرّاً",
          "الشَّرُّ"
        ],
        "answer": 0,
        "rationales": [
          "genitive -- object of the construct كُلِّ.",
          "nominative -- wrong case after a construct.",
          "accusative -- wrong case after a construct.",
          "definite -- wrong definiteness; evil in general."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "أَشْرَقَتِ الشَّمْسُ",
        "pre": "",
        "post": "وَقَدْ وَلَّىٰ الظَّلَامُ هَارِبَا",
        "targetPerson": "الشُّمُوْسُ",
        "targetEn": "the suns (poetic plural)",
        "options": [
          "أَشْرَقَتِ الشُّمُوْسُ",
          "أَشْرَقَ الشُّمُوْسُ",
          "أَشْرَقَتِ الشَّمْسُ",
          "أَشْرَقْنَ الشُّمُوْسُ"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular verb before a plural non-human subject -- standard fuṣḥā agreement.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَالطَّيْرُ تَشْدُوْ سَحَراً",
        "pre": "",
        "post": "عَلَىٰ الْغُصُوْنِ قَائِمَهْ",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "أَشْدُوْ سَحَراً",
          "تَشْدُوْ سَحَراً",
          "يَشْدُوْ سَحَراً",
          "نَشْدُوْ سَحَراً"
        ],
        "answer": 0,
        "rationales": [
          "1st singular imperfect -- I sing.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "مَا أَحْسَنَ النُّوْرَ الْبَهِي فِيْهِ أَجِدُ عَامِلَا",
        "pre": "",
        "post": "",
        "targetPerson": "نَحْنُ",
        "targetEn": "we",
        "options": [
          "فِيْهِ نَجِدُ عَامِلِيْنَ",
          "فِيْهِ أَجِدُ عَامِلَا",
          "فِيْهِ تَجِدُ عَامِلَا",
          "فِيْهِ وَجَدْنَا عَامِلِيْنَ"
        ],
        "answer": 0,
        "rationales": [
          "1st plural imperfect + plural predicate -- we find (ourselves) hard at work.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "اللهُ قَدْ أَجَارَنِيْ مِنْ كُلِّ شَرٍّ",
        "pre": "",
        "post": "فِي الظَّلَامِ",
        "targetPerson": "الْأَوْلَادَ",
        "targetEn": "the children",
        "options": [
          "اللهُ قَدْ أَجَارَهُمْ",
          "اللهُ قَدْ أَجَارَنِيْ",
          "اللهُ قَدْ أَجَارَكَ",
          "اللهُ قَدْ أَجَارَهَا"
        ],
        "answer": 0,
        "rationales": [
          "3ms verb + 3mp object suffix -- God protected them.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "شُكْراً لَهُ قَدْ صَانَنِيْ",
        "pre": "",
        "post": "شُكْراً لَهُ عَلَىٰ الدَّوَامِ",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "شُكْراً لَهُ قَدْ صَانَهَا",
          "شُكْراً لَهُ قَدْ صَانَنِيْ",
          "شُكْراً لَهُ قَدْ صَانَهُ",
          "شُكْراً لَهُ قَدْ صُنَّ"
        ],
        "answer": 0,
        "rationales": [
          "3ms verb + 3fs object suffix -- He has guarded her.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

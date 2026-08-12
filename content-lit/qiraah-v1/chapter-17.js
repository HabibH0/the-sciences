// القراءة الراشدة, volume one, chapter seventeen -- فضيلة الشغل.
//
// Follows the shape of chapter-07.js/chapter-13.js -- see
// ../CHAPTER-FORMAT.md for the full specification. Hand-authored directly
// from the scanned pages (qiratur rashida/_al-qir`atur-rashida 1-2.pdf,
// printed pages 77-78); there is no JSON intermediate (see
// PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md -- the pipeline no longer
// emits JSON).
//
// The well-known hadith (Sunan Abu Dawud/at-Tirmidhi) of the Prophet ﷺ
// teaching a poor Anṣārī man self-sufficiency: auctioning off the man's
// last two possessions himself, then having him buy food and an axe with
// the proceeds and go out to gather and sell firewood, closing with the
// saying about begging leaving a mark on one's face on the Day of
// Judgment. Third-person narrative with embedded dialogue, the same
// register as chapter-07.js/chapter-13.js; the repeated bidding line
// (مَنْ يَزِيْدُ عَلَىٰ دِرْهَمٍ؟) is kept as two identical consecutive sentences,
// preserving the book's own repetition for emphasis.
//
// Vocabulary notes -- several genuine homograph collisions this chapter,
// each resolved with a distinct suffixed lemma key per the established
// precedent (e.g. ذهب/ذهب-معدن, رجل/رجل-قدم):
//   - أَمَا ("is there not...?", the interrogative-negative particle opening
//     the Prophet's ﷺ question) is tagged against a new "أما-استفهام" lemma,
//     distinct from "أما" ("as for", the topic-marking particle already
//     established) -- different words that happen to share an
//     undiacritized spelling.
//   - مَنْ ("who, whoever") is tagged against a new "من-استفهام" lemma,
//     distinct from "من" ("from", the preposition already established) --
//     likewise a spelling collision between unrelated words.
//   - يَزِيْدُ ("to increase, offer more", the auctioneer's call for a
//     higher bid) is tagged against a new "زاد-يزيد" lemma (root ز ي د),
//     distinct from "زاد" (root ز و د, "travel provisions", not otherwise
//     used this chapter but reserved by an earlier chapter) -- the perfect
//     tense of this verb would otherwise collide with that noun's spelling.
//   - قَدُوْماً ("an axe, adze") is tagged against a new "قدوم-فأس" lemma,
//     distinct from "قدوم" ("arrival, coming", already established in
//     chapter-16.js) -- both trace to the same root ق د م but are
//     unrelated words that happen to share a spelling once diacritics are
//     dropped.
//   - الْمَسْأَلَةُ ("begging, asking for charity," in the Prophet's ﷺ closing
//     saying) is given its own "مسألة" lemma (root س أ ل, same root as the
//     already-established verb "سأل", "to ask") rather than reusing that
//     verb's key via pos_override, since it names a specific, pedagogically
//     central concept in its own right -- the same treatment chapter-08.js
//     gave "خروج" alongside "خرج".
//   - Four footnoted words carry book_note: حلس, قعب (page 77); احتطب,
//     نكتة (page 78) -- matching the established footnote-as-book_note
//     convention.
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch17",
  "number": 17,
  "title": {
    "ar": "فَضِيْلَةُ الشُّغْلِ",
    "en": "The Virtue of Work"
  },
  "pages": [
    77,
    78
  ],
  "register": "third_person_narrative",
  "newWords": [
    "أنصار",
    "حلس",
    "قعب",
    "احتطب",
    "شد",
    "عود",
    "باع",
    "قدوم-فأس",
    "مسألة",
    "قيامة",
    "ثوب",
    "نكتة"
  ],
  "lemmas": {
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that",
      "content": false
    },
    "رجل": {
      "root": "ر ج ل",
      "pos": "noun",
      "gloss": "man",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "أنصار": {
      "root": "ن ص ر",
      "pos": "proper",
      "gloss": "the Anṣār (the Prophet's ﷺ Medinan helpers)",
      "content": true
    },
    "أتى": {
      "root": "أ ت ي",
      "pos": "verb",
      "gloss": "to come to",
      "content": true
    },
    "نبي": {
      "root": "ن ب أ",
      "pos": "noun",
      "gloss": "prophet",
      "content": true
    },
    "سأل": {
      "root": "س أ ل",
      "pos": "verb",
      "gloss": "to ask",
      "content": true
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "أما-استفهام": {
      "root": "—",
      "pos": "part",
      "gloss": "isn't there...?, is there not",
      "content": false
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "بيت": {
      "root": "ب ي ت",
      "pos": "noun",
      "gloss": "house",
      "content": true
    },
    "شيء": {
      "root": "ش ي أ",
      "pos": "noun",
      "gloss": "thing",
      "content": true
    },
    "بلى": {
      "root": "—",
      "pos": "part",
      "gloss": "yes indeed (contradicting a negative)",
      "content": false
    },
    "حلس": {
      "root": "ح ل س",
      "pos": "noun",
      "gloss": "a coarse mat or covering",
      "content": true,
      "book_note": "حِلْسُ جمع: أحلاس: مَا يُبْسَطُ فِي الْبَيْتِ مِنْ حَصِيْرٍ وَنَحْوِهِ تَحْتَ كَرِيْمِ الْمَتَاعِ (ḥils, pl. aḥlās: a mat or the like spread on the floor of a house, beneath one's better belongings)"
    },
    "لبس": {
      "root": "ل ب س",
      "pos": "verb",
      "gloss": "to wear",
      "content": true
    },
    "بعض": {
      "root": "ب ع ض",
      "pos": "noun",
      "gloss": "some, part of",
      "content": true
    },
    "بسط": {
      "root": "ب س ط",
      "pos": "verb",
      "gloss": "to spread out",
      "content": true
    },
    "قعب": {
      "root": "ق ع ب",
      "pos": "noun",
      "gloss": "a large wooden bowl or cup",
      "content": true,
      "book_note": "قَعْب جمع: قِعَاب، وَأَقْعُبٌ: قَدَحٌ ضَخْمٌ غَلِيْظٌ (qaʿb, pl. qiʿāb/aqʿub: a large, thick wooden cup or bowl)"
    },
    "شرب": {
      "root": "ش ر ب",
      "pos": "verb",
      "gloss": "to drink",
      "content": true
    },
    "ماء": {
      "root": "م و ه",
      "pos": "noun",
      "gloss": "water",
      "content": true
    },
    "ب": {
      "root": "—",
      "pos": "prep",
      "gloss": "with, by",
      "content": false
    },
    "أخذ": {
      "root": "أ خ ذ",
      "pos": "verb",
      "gloss": "to take",
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
    "يد": {
      "root": "ي د ي",
      "pos": "noun",
      "gloss": "hand",
      "content": true
    },
    "من-استفهام": {
      "root": "—",
      "pos": "part",
      "gloss": "who, whoever",
      "content": false
    },
    "اشترى": {
      "root": "ش ر ي",
      "pos": "verb",
      "gloss": "to buy",
      "content": true
    },
    "هذا": {
      "root": "—",
      "pos": "dem",
      "gloss": "this",
      "content": false
    },
    "أنا": {
      "root": "—",
      "pos": "noun",
      "gloss": "I",
      "content": false
    },
    "درهم": {
      "root": "د ر ه م",
      "pos": "noun",
      "gloss": "dirham (a coin)",
      "content": true
    },
    "زاد-يزيد": {
      "root": "ز ي د",
      "pos": "verb",
      "gloss": "to increase, offer more, bid higher",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, on",
      "content": false
    },
    "أعطى": {
      "root": "ع ط و",
      "pos": "verb",
      "gloss": "to give",
      "content": true
    },
    "إيا": {
      "root": "—",
      "pos": "noun",
      "gloss": "[bound object-pronoun base]",
      "content": false
    },
    "أحد": {
      "root": "أ ح د",
      "pos": "noun",
      "gloss": "one, someone, anyone",
      "content": true
    },
    "طعام": {
      "root": "ط ع م",
      "pos": "noun",
      "gloss": "food",
      "content": true
    },
    "نبذ": {
      "root": "ن ب ذ",
      "pos": "verb",
      "gloss": "to toss, cast; to carry off (to someone)",
      "content": true
    },
    "إلى": {
      "root": "—",
      "pos": "prep",
      "gloss": "to, towards",
      "content": false
    },
    "أهل": {
      "root": "أ ه ل",
      "pos": "noun",
      "gloss": "people, family, folk",
      "content": true
    },
    "آخر": {
      "root": "أ خ ر",
      "pos": "noun",
      "gloss": "end, last part; last, final; other",
      "content": true
    },
    "قدوم-فأس": {
      "root": "ق د م",
      "pos": "noun",
      "gloss": "axe, adze",
      "content": true
    },
    "شد": {
      "root": "ش د د",
      "pos": "verb",
      "gloss": "to fasten, tie tight",
      "content": true
    },
    "عود": {
      "root": "ع و د",
      "pos": "noun",
      "gloss": "a stick, a rod",
      "content": true
    },
    "ثم": {
      "root": "—",
      "pos": "part",
      "gloss": "then",
      "content": false
    },
    "ل": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to; belonging to",
      "content": false
    },
    "ذهب": {
      "root": "ذ ه ب",
      "pos": "verb",
      "gloss": "to go",
      "content": true
    },
    "احتطب": {
      "root": "ح ط ب",
      "pos": "verb",
      "gloss": "to gather firewood",
      "content": true,
      "book_note": "احْتَطَبَ يَحْتَطِبُ احْتِطَاباً: حَطَبَ (أَيْ: جَمَعَ الْحَطَبَ) (iḥtaṭaba: to gather firewood)"
    },
    "باع": {
      "root": "ب ي ع",
      "pos": "verb",
      "gloss": "to sell",
      "content": true
    },
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "not; no",
      "content": false
    },
    "رأى": {
      "root": "ر أ ي",
      "pos": "verb",
      "gloss": "to see",
      "content": true
    },
    "خمسة": {
      "root": "خ م س",
      "pos": "num",
      "gloss": "five",
      "content": true
    },
    "عشر": {
      "root": "ع ش ر",
      "pos": "num",
      "gloss": "ten",
      "content": true
    },
    "يوم": {
      "root": "ي و م",
      "pos": "noun",
      "gloss": "day",
      "content": true
    },
    "جاء": {
      "root": "ج ي أ",
      "pos": "verb",
      "gloss": "to come",
      "content": true
    },
    "قد": {
      "root": "—",
      "pos": "part",
      "gloss": "already, indeed",
      "content": false
    },
    "أصاب": {
      "root": "ص و ب",
      "pos": "verb",
      "gloss": "to hit (a target); to obtain, get a share of",
      "content": true
    },
    "عشرة": {
      "root": "ع ش ر",
      "pos": "num",
      "gloss": "ten",
      "content": true
    },
    "ثوب": {
      "root": "ث و ب",
      "pos": "noun",
      "gloss": "garment, clothing",
      "content": true
    },
    "خير": {
      "root": "خ ي ر",
      "pos": "noun",
      "gloss": "good, goodness; best, better",
      "content": true
    },
    "مسألة": {
      "root": "س أ ل",
      "pos": "noun",
      "gloss": "asking, begging (for charity)",
      "content": true
    },
    "نكتة": {
      "root": "ن ك ت",
      "pos": "noun",
      "gloss": "a mark, blemish, dark spot",
      "content": true,
      "book_note": "نُكْتَة (ج) نُكَت ونِكَاتٌ: نُقْطَةٌ سَوْدَاءُ فِيْ بَيَاضٍ أَوْ بَيْضَاءُ فِيْ سَوَادٍ (nuktah, pl. nukat/nikāt: a dark spot on something light, or a light spot on something dark)"
    },
    "وجه": {
      "root": "و ج ه",
      "pos": "noun",
      "gloss": "face",
      "content": true
    },
    "قيامة": {
      "root": "ق و م",
      "pos": "noun",
      "gloss": "resurrection; the Day of Judgment (with يوم)",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "A man of the Anṣār came to the Prophet ﷺ to ask him for help, and he asked the man whether there was anything at all in his house.",
      "sentences": [
        {
          "id": "qr1-17-001",
          "page": 77,
          "ar": "إِنَّ رَجُلاً مِنَ الْأَنْصَارِ أَتَىٰ النَّبِيَّ ﷺ يَسْأَلُهُ ،",
          "en": "A man of the Anṣār came to the Prophet ﷺ, asking him,",
          "tokens": [
            {
              "surface": "إِنَّ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "رَجُلاً",
              "lemma": "رجل",
              "features": "indef.acc",
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
              "surface": "الْأَنْصَارِ",
              "lemma": "أنصار",
              "features": "def.gen",
              "root": "ن ص ر",
              "pos": "proper",
              "gloss": "the Anṣār (the Prophet's ﷺ Medinan helpers)"
            },
            {
              "surface": "أَتَىٰ",
              "lemma": "أتى",
              "features": "perf.3ms",
              "root": "أ ت ي",
              "pos": "verb",
              "gloss": "to come to"
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
              "surface": "يَسْأَلُهُ",
              "lemma": "سأل",
              "features": "impf.3ms+3ms",
              "root": "س أ ل",
              "pos": "verb",
              "gloss": "to ask"
            }
          ]
        },
        {
          "id": "qr1-17-002",
          "page": 77,
          "ar": "فَقَالَ: أَمَا فِيْ بَيْتِكَ شَيْءٌ؟",
          "en": "and he said: Is there not anything in your house?",
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
              "surface": "أَمَا",
              "lemma": "أما-استفهام",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "isn't there...?, is there not"
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
              "surface": "بَيْتِكَ",
              "lemma": "بيت",
              "features": "gen+2ms",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            },
            {
              "surface": "شَيْءٌ",
              "lemma": "شيء",
              "features": "indef.nom",
              "root": "ش ي أ",
              "pos": "noun",
              "gloss": "thing"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا سَأَلَ النَّبِيُّ ﷺ الرَّجُلَ الْأَنْصَارِيَّ؟",
          "options": [
            "هَلْ فِيْ بَيْتِهِ شَيْءٌ",
            "كَمْ عُمْرُهُ",
            "مَاذَا يَعْمَلُ"
          ],
          "answer": 0,
          "qEn": "What did the Prophet ﷺ ask the Anṣārī man?",
          "optionsEn": [
            "Whether there was anything in his house",
            "How old he was",
            "What his occupation was"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "The man said he had a coarse mat -- part worn, part spread on the floor -- and a wooden cup he drank water from.",
      "sentences": [
        {
          "id": "qr1-17-003",
          "page": 77,
          "ar": "قَالَ: بَلَىٰ حِلْسٌ نَلْبَسُ بَعْضَهُ ،",
          "en": "He said: Yes indeed -- a coarse mat, part of which we wear,",
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
              "surface": "بَلَىٰ",
              "lemma": "بلى",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "yes indeed (contradicting a negative)"
            },
            {
              "surface": "حِلْسٌ",
              "lemma": "حلس",
              "features": "indef.nom",
              "root": "ح ل س",
              "pos": "noun",
              "gloss": "a coarse mat or covering"
            },
            {
              "surface": "نَلْبَسُ",
              "lemma": "لبس",
              "features": "impf.1p",
              "root": "ل ب س",
              "pos": "verb",
              "gloss": "to wear"
            },
            {
              "surface": "بَعْضَهُ",
              "lemma": "بعض",
              "features": "acc+3ms",
              "root": "ب ع ض",
              "pos": "noun",
              "gloss": "some, part of"
            }
          ]
        },
        {
          "id": "qr1-17-004",
          "page": 77,
          "ar": "وَنَبْسُطُ بَعْضَهُ",
          "en": "and part of which we spread out,",
          "tokens": [
            {
              "surface": "وَنَبْسُطُ",
              "lemma": "بسط",
              "features": "conj+impf.1p",
              "root": "ب س ط",
              "pos": "verb",
              "gloss": "to spread out"
            },
            {
              "surface": "بَعْضَهُ",
              "lemma": "بعض",
              "features": "acc+3ms",
              "root": "ب ع ض",
              "pos": "noun",
              "gloss": "some, part of"
            }
          ]
        },
        {
          "id": "qr1-17-005",
          "page": 77,
          "ar": "وَقَعْبٌ نَشْرَبُ فِيْهِ مِنَ الْمَاءِ .",
          "en": "and a wooden cup we drink water from.",
          "tokens": [
            {
              "surface": "وَقَعْبٌ",
              "lemma": "قعب",
              "features": "conj+indef.nom",
              "root": "ق ع ب",
              "pos": "noun",
              "gloss": "a large wooden bowl or cup"
            },
            {
              "surface": "نَشْرَبُ",
              "lemma": "شرب",
              "features": "impf.1p",
              "root": "ش ر ب",
              "pos": "verb",
              "gloss": "to drink"
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
              "surface": "مِنَ",
              "lemma": "من",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "from"
            },
            {
              "surface": "الْمَاءِ",
              "lemma": "ماء",
              "features": "def.gen",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا كَانَ عِنْدَ الرَّجُلِ فِيْ بَيْتِهِ؟",
          "options": [
            "حِلْسٌ وَقَعْبٌ",
            "كُتُبٌ وَأَقْلَامٌ",
            "فِرَاشٌ وَسُفْرَةٌ"
          ],
          "answer": 0,
          "qEn": "What did the man have in his house?",
          "optionsEn": [
            "A coarse mat and a wooden cup",
            "Books and pens",
            "Bedding and a sufra"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "The Prophet ﷺ had him bring the two things, took them in his own hand, and asked who would buy them.",
      "sentences": [
        {
          "id": "qr1-17-006",
          "page": 77,
          "ar": "قَالَ: ائْتِنِيْ بِهِمَا .",
          "en": "He said: Bring them to me.",
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
              "surface": "ائْتِنِيْ",
              "lemma": "أتى",
              "features": "imp.2ms+1s",
              "root": "أ ت ي",
              "pos": "verb",
              "gloss": "bring (to) me"
            },
            {
              "surface": "بِهِمَا",
              "lemma": "ب",
              "features": "prep+3md",
              "root": "",
              "pos": "prep",
              "gloss": "with, by"
            }
          ]
        },
        {
          "id": "qr1-17-007",
          "page": 77,
          "ar": "فَأَخَذَهُمَا رَسُوْلُ اللهِ ﷺ بِيَدِهِ",
          "en": "So the Messenger of God ﷺ took them in his hand",
          "tokens": [
            {
              "surface": "فَأَخَذَهُمَا",
              "lemma": "أخذ",
              "features": "conj+perf.3ms+3md",
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
              "surface": "بِيَدِهِ",
              "lemma": "يد",
              "features": "prep+gen+3ms",
              "root": "ي د ي",
              "pos": "noun",
              "gloss": "hand"
            }
          ]
        },
        {
          "id": "qr1-17-008",
          "page": 77,
          "ar": "وَقَالَ: مَنْ يَشْتَرِيْ هٰذَيْنِ؟",
          "en": "and said: Who will buy these two?",
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
              "surface": "مَنْ",
              "lemma": "من-استفهام",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "who, whoever"
            },
            {
              "surface": "يَشْتَرِيْ",
              "lemma": "اشترى",
              "features": "impf.3ms",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            },
            {
              "surface": "هٰذَيْنِ",
              "lemma": "هذا",
              "features": "du.acc",
              "root": "",
              "pos": "dem",
              "gloss": "this"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنْ أَخَذَ الْحِلْسَ وَالْقَعْبَ مِنَ الرَّجُلِ؟",
          "options": [
            "رَسُوْلُ اللهِ ﷺ بِيَدِهِ",
            "أَحَدُ أَصْحَابِهِ",
            "زَوْجَةُ الرَّجُلِ"
          ],
          "answer": 0,
          "qEn": "Who took the mat and the cup from the man?",
          "optionsEn": [
            "The Messenger of God ﷺ, with his own hand",
            "One of his companions",
            "The man's wife"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "One man offered a dirham for them; the Prophet ﷺ asked twice for a higher bid, and another man offered two dirhams.",
      "sentences": [
        {
          "id": "qr1-17-009",
          "page": 77,
          "ar": "قَالَ رَجُلٌ: أَنَا آخُذُهُمَا بِدِرْهَمٍ .",
          "en": "A man said: I will take them for a dirham.",
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
              "surface": "رَجُلٌ",
              "lemma": "رجل",
              "features": "indef.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
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
              "surface": "آخُذُهُمَا",
              "lemma": "أخذ",
              "features": "impf.1s+3md",
              "root": "أ خ ذ",
              "pos": "verb",
              "gloss": "to take"
            },
            {
              "surface": "بِدِرْهَمٍ",
              "lemma": "درهم",
              "features": "prep+indef.gen",
              "root": "د ر ه م",
              "pos": "noun",
              "gloss": "dirham (a coin)"
            }
          ]
        },
        {
          "id": "qr1-17-010",
          "page": 78,
          "ar": "قَالَ: مَنْ يَزِيْدُ عَلَىٰ دِرْهَمٍ؟",
          "en": "He said: Who will offer more than a dirham?",
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
              "surface": "مَنْ",
              "lemma": "من-استفهام",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "who, whoever"
            },
            {
              "surface": "يَزِيْدُ",
              "lemma": "زاد-يزيد",
              "features": "impf.3ms",
              "root": "ز ي د",
              "pos": "verb",
              "gloss": "to increase, offer more, bid higher"
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
              "surface": "دِرْهَمٍ",
              "lemma": "درهم",
              "features": "indef.gen",
              "root": "د ر ه م",
              "pos": "noun",
              "gloss": "dirham (a coin)"
            }
          ]
        },
        {
          "id": "qr1-17-011",
          "page": 78,
          "ar": "مَنْ يَزِيْدُ عَلَىٰ دِرْهَمٍ؟",
          "en": "Who will offer more than a dirham?",
          "tokens": [
            {
              "surface": "مَنْ",
              "lemma": "من-استفهام",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "who, whoever"
            },
            {
              "surface": "يَزِيْدُ",
              "lemma": "زاد-يزيد",
              "features": "impf.3ms",
              "root": "ز ي د",
              "pos": "verb",
              "gloss": "to increase, offer more, bid higher"
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
              "surface": "دِرْهَمٍ",
              "lemma": "درهم",
              "features": "indef.gen",
              "root": "د ر ه م",
              "pos": "noun",
              "gloss": "dirham (a coin)"
            }
          ]
        },
        {
          "id": "qr1-17-012",
          "page": 78,
          "ar": "قَالَ رَجُلٌ: أَنَا آخُذُهُمَا بِدِرْهَمَيْنِ .",
          "en": "A man said: I will take them for two dirhams.",
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
              "surface": "رَجُلٌ",
              "lemma": "رجل",
              "features": "indef.nom",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
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
              "surface": "آخُذُهُمَا",
              "lemma": "أخذ",
              "features": "impf.1s+3md",
              "root": "أ خ ذ",
              "pos": "verb",
              "gloss": "to take"
            },
            {
              "surface": "بِدِرْهَمَيْنِ",
              "lemma": "درهم",
              "features": "prep+indef.du.gen",
              "root": "د ر ه م",
              "pos": "noun",
              "gloss": "dirham (a coin)"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِكَمْ اشْتَرَى الرَّجُلُ الثَّانِيْ الْحِلْسَ وَالْقَعْبَ؟",
          "options": [
            "بِدِرْهَمَيْنِ",
            "بِدِرْهَمٍ",
            "بِعَشَرَةِ دَرَاهِمَ"
          ],
          "answer": 0,
          "qEn": "For how much did the second man buy the mat and the cup?",
          "optionsEn": [
            "Two dirhams",
            "One dirham",
            "Ten dirhams"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "The Prophet ﷺ gave the goods to the buyer, took the two dirhams, and gave them to the Anṣārī man, telling him to buy food with one and an axe with the other.",
      "sentences": [
        {
          "id": "qr1-17-013",
          "page": 78,
          "ar": "فَأَعْطَاهُمَا إِيَّاهُ وَأَخَذَ الدِّرْهَمَيْنِ",
          "en": "So he gave the two things to him, and took the two dirhams,",
          "tokens": [
            {
              "surface": "فَأَعْطَاهُمَا",
              "lemma": "أعطى",
              "features": "conj+perf.3ms+3md",
              "root": "ع ط و",
              "pos": "verb",
              "gloss": "to give"
            },
            {
              "surface": "إِيَّاهُ",
              "lemma": "إيا",
              "features": "acc+3ms",
              "root": "",
              "pos": "noun",
              "gloss": "[bound object-pronoun base]"
            },
            {
              "surface": "وَأَخَذَ",
              "lemma": "أخذ",
              "features": "conj+perf.3ms",
              "root": "أ خ ذ",
              "pos": "verb",
              "gloss": "to take"
            },
            {
              "surface": "الدِّرْهَمَيْنِ",
              "lemma": "درهم",
              "features": "def.du.acc",
              "root": "د ر ه م",
              "pos": "noun",
              "gloss": "dirham (a coin)"
            }
          ]
        },
        {
          "id": "qr1-17-014",
          "page": 78,
          "ar": "فَأَعْطَاهُمَا الْأَنْصَارِيَّ",
          "en": "and gave them to the Anṣārī man,",
          "tokens": [
            {
              "surface": "فَأَعْطَاهُمَا",
              "lemma": "أعطى",
              "features": "conj+perf.3ms+3md",
              "root": "ع ط و",
              "pos": "verb",
              "gloss": "to give"
            },
            {
              "surface": "الْأَنْصَارِيَّ",
              "lemma": "أنصار",
              "features": "def.acc",
              "root": "ن ص ر",
              "pos": "noun",
              "gloss": "the Anṣārī (man)"
            }
          ]
        },
        {
          "id": "qr1-17-015",
          "page": 78,
          "ar": "وَقَالَ: اشْتَرِ بِأَحَدِهِمَا طَعَاماً فَانْبِذْهُ إِلَىٰ أَهْلِكَ ،",
          "en": "and said: Buy food with one of them and take it to your family,",
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
              "surface": "اشْتَرِ",
              "lemma": "اشترى",
              "features": "imp.2ms",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            },
            {
              "surface": "بِأَحَدِهِمَا",
              "lemma": "أحد",
              "features": "prep+gen+3md",
              "root": "أ ح د",
              "pos": "noun",
              "gloss": "one, someone, anyone"
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
              "surface": "فَانْبِذْهُ",
              "lemma": "نبذ",
              "features": "conj+imp.2ms+3ms",
              "root": "ن ب ذ",
              "pos": "verb",
              "gloss": "to toss, cast; to carry off (to someone)"
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
              "surface": "أَهْلِكَ",
              "lemma": "أهل",
              "features": "gen+2ms",
              "root": "أ ه ل",
              "pos": "noun",
              "gloss": "people, family, folk"
            }
          ]
        },
        {
          "id": "qr1-17-016",
          "page": 78,
          "ar": "وَاشْتَرِ بِالْآخَرِ قَدُوْماً فَائْتِنِيْ بِهِ .",
          "en": "and buy an axe with the other, and bring it to me.",
          "tokens": [
            {
              "surface": "وَاشْتَرِ",
              "lemma": "اشترى",
              "features": "conj+imp.2ms",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            },
            {
              "surface": "بِالْآخَرِ",
              "lemma": "آخر",
              "features": "prep+def.gen",
              "root": "أ خ ر",
              "pos": "noun",
              "gloss": "end, last part; last, final; other"
            },
            {
              "surface": "قَدُوْماً",
              "lemma": "قدوم-فأس",
              "features": "indef.acc",
              "root": "ق د م",
              "pos": "noun",
              "gloss": "axe, adze"
            },
            {
              "surface": "فَائْتِنِيْ",
              "lemma": "أتى",
              "features": "conj+imp.2ms+1s",
              "root": "أ ت ي",
              "pos": "verb",
              "gloss": "bring (to) me"
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
        }
      ],
      "checks": [
        {
          "q": "مَاذَا أَمَرَ النَّبِيُّ ﷺ الرَّجُلَ أَنْ يَشْتَرِيَ بِالدِّرْهَمَيْنِ؟",
          "options": [
            "طَعَاماً بِأَحَدِهِمَا وَقَدُوْماً بِالْآخَرِ",
            "ثَوْبَيْنِ",
            "كِتَاباً وَقَلَماً"
          ],
          "answer": 0,
          "qEn": "What did the Prophet ﷺ tell the man to buy with the two dirhams?",
          "optionsEn": [
            "Food with one and an axe with the other",
            "Two garments",
            "A book and a pen"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "en": "The man brought the axe, the Prophet ﷺ fastened a handle to it with his own hand, and told him to go and gather and sell firewood, not to be seen again for fifteen days.",
      "sentences": [
        {
          "id": "qr1-17-017",
          "page": 78,
          "ar": "فَأَتَاهُ بِهِ فَشَدَّ فِيْهِ رَسُوْلُ اللهِ ﷺ عُوْداً بِيَدِهِ .",
          "en": "So he brought it to him, and the Messenger of God ﷺ fastened a handle into it with his own hand.",
          "tokens": [
            {
              "surface": "فَأَتَاهُ",
              "lemma": "أتى",
              "features": "conj+perf.3ms+3ms",
              "root": "أ ت ي",
              "pos": "verb",
              "gloss": "to come to"
            },
            {
              "surface": "بِهِ",
              "lemma": "ب",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "with, by"
            },
            {
              "surface": "فَشَدَّ",
              "lemma": "شد",
              "features": "conj+perf.3ms",
              "root": "ش د د",
              "pos": "verb",
              "gloss": "to fasten, tie tight"
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
              "surface": "عُوْداً",
              "lemma": "عود",
              "features": "indef.acc",
              "root": "ع و د",
              "pos": "noun",
              "gloss": "a stick, a rod"
            },
            {
              "surface": "بِيَدِهِ",
              "lemma": "يد",
              "features": "prep+gen+3ms",
              "root": "ي د ي",
              "pos": "noun",
              "gloss": "hand"
            }
          ]
        },
        {
          "id": "qr1-17-018",
          "page": 78,
          "ar": "ثُمَّ قَالَ لَهُ: اذْهَبْ فَاحْتَطِبْ وَبِعْ",
          "en": "Then he said to him: Go, gather firewood, and sell it,",
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
              "surface": "قَالَ",
              "lemma": "قال",
              "features": "perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
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
              "surface": "اذْهَبْ",
              "lemma": "ذهب",
              "features": "imp.2ms",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
            },
            {
              "surface": "فَاحْتَطِبْ",
              "lemma": "احتطب",
              "features": "conj+imp.2ms",
              "root": "ح ط ب",
              "pos": "verb",
              "gloss": "to gather firewood"
            },
            {
              "surface": "وَبِعْ",
              "lemma": "باع",
              "features": "conj+imp.2ms",
              "root": "ب ي ع",
              "pos": "verb",
              "gloss": "to sell"
            }
          ]
        },
        {
          "id": "qr1-17-019",
          "page": 78,
          "ar": "وَلَا أَرَيَنَّكَ خَمْسَةَ عَشَرَ يَوْماً .",
          "en": "and let me not see you for fifteen days.",
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
              "surface": "أَرَيَنَّكَ",
              "lemma": "رأى",
              "features": "impf.1s+2ms",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "let me not see you (emphatic)"
            },
            {
              "surface": "خَمْسَةَ",
              "lemma": "خمسة",
              "features": "acc",
              "root": "خ م س",
              "pos": "num",
              "gloss": "five"
            },
            {
              "surface": "عَشَرَ",
              "lemma": "عشر",
              "features": "acc",
              "root": "ع ش ر",
              "pos": "num",
              "gloss": "ten"
            },
            {
              "surface": "يَوْماً",
              "lemma": "يوم",
              "features": "indef.acc",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَمْ يَوْماً أَمَرَ النَّبِيُّ ﷺ الرَّجُلَ أَلَّا يَظْهَرَ لَهُ؟",
          "options": [
            "خَمْسَةَ عَشَرَ يَوْماً",
            "سَبْعَةَ أَيَّامٍ",
            "شَهْراً كَامِلاً"
          ],
          "answer": 0,
          "qEn": "For how many days did the Prophet ﷺ tell the man not to appear before him?",
          "optionsEn": [
            "Fifteen days",
            "Seven days",
            "A whole month"
          ]
        }
      ]
    },
    {
      "id": "p7",
      "en": "The man went out gathering and selling firewood, and came back having earned ten dirhams -- some spent on clothing, some on food -- and the Prophet ﷺ told him this was better for him than begging leaving a mark on his face on the Day of Judgment.",
      "sentences": [
        {
          "id": "qr1-17-020",
          "page": 78,
          "ar": "فَذَهَبَ الرَّجُلُ يَحْتَطِبُ وَيَبِيْعُ ،",
          "en": "So the man went off gathering and selling firewood,",
          "tokens": [
            {
              "surface": "فَذَهَبَ",
              "lemma": "ذهب",
              "features": "conj+perf.3ms",
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
              "surface": "يَحْتَطِبُ",
              "lemma": "احتطب",
              "features": "impf.3ms",
              "root": "ح ط ب",
              "pos": "verb",
              "gloss": "to gather firewood"
            },
            {
              "surface": "وَيَبِيْعُ",
              "lemma": "باع",
              "features": "conj+impf.3ms",
              "root": "ب ي ع",
              "pos": "verb",
              "gloss": "to sell"
            }
          ]
        },
        {
          "id": "qr1-17-021",
          "page": 78,
          "ar": "فَجَاءَ وَقَدْ أَصَابَ عَشَرَةَ دَرَاهِمَ ،",
          "en": "and came back having earned ten dirhams,",
          "tokens": [
            {
              "surface": "فَجَاءَ",
              "lemma": "جاء",
              "features": "conj+perf.3ms",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
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
              "surface": "أَصَابَ",
              "lemma": "أصاب",
              "features": "perf.3ms",
              "root": "ص و ب",
              "pos": "verb",
              "gloss": "to hit (a target); to obtain, get a share of"
            },
            {
              "surface": "عَشَرَةَ",
              "lemma": "عشرة",
              "features": "acc.constr",
              "root": "ع ش ر",
              "pos": "num",
              "gloss": "ten"
            },
            {
              "surface": "دَرَاهِمَ",
              "lemma": "درهم",
              "features": "pl.indef.gen",
              "root": "د ر ه م",
              "pos": "noun",
              "gloss": "dirham (a coin)"
            }
          ]
        },
        {
          "id": "qr1-17-022",
          "page": 78,
          "ar": "فَاشْتَرَىٰ بِبَعْضِهَا ثَوْباً وَبِبَعْضِهَا طَعَاماً .",
          "en": "and bought clothing with some of it, and food with some of it.",
          "tokens": [
            {
              "surface": "فَاشْتَرَىٰ",
              "lemma": "اشترى",
              "features": "conj+perf.3ms",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            },
            {
              "surface": "بِبَعْضِهَا",
              "lemma": "بعض",
              "features": "prep+gen+3fs",
              "root": "ب ع ض",
              "pos": "noun",
              "gloss": "some, part of"
            },
            {
              "surface": "ثَوْباً",
              "lemma": "ثوب",
              "features": "indef.acc",
              "root": "ث و ب",
              "pos": "noun",
              "gloss": "garment, clothing"
            },
            {
              "surface": "وَبِبَعْضِهَا",
              "lemma": "بعض",
              "features": "conj+prep+gen+3fs",
              "root": "ب ع ض",
              "pos": "noun",
              "gloss": "some, part of"
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
          "id": "qr1-17-023",
          "page": 78,
          "ar": "فَقَالَ رَسُوْلُ اللهِ ﷺ: هٰذَا خَيْرٌ لَكَ مِنْ أَنْ تَجِيْءَ الْمَسْأَلَةُ نُكْتَةً فِيْ وَجْهِكَ يَوْمَ الْقِيَامَةِ .",
          "en": "The Messenger of God ﷺ said: This is better for you than that begging should come as a mark on your face on the Day of Judgment.",
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
              "surface": "هٰذَا",
              "lemma": "هذا",
              "features": "nom",
              "root": "",
              "pos": "dem",
              "gloss": "this"
            },
            {
              "surface": "خَيْرٌ",
              "lemma": "خير",
              "features": "indef.nom",
              "root": "خ ي ر",
              "pos": "noun",
              "gloss": "good, goodness; best, better"
            },
            {
              "surface": "لَكَ",
              "lemma": "ل",
              "features": "prep+2ms",
              "root": "",
              "pos": "prep",
              "gloss": "for, to; belonging to"
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
              "surface": "أَنْ",
              "lemma": "أن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "تَجِيْءَ",
              "lemma": "جاء",
              "features": "impf.3fs",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            },
            {
              "surface": "الْمَسْأَلَةُ",
              "lemma": "مسألة",
              "features": "def.nom",
              "root": "س أ ل",
              "pos": "noun",
              "gloss": "asking, begging (for charity)"
            },
            {
              "surface": "نُكْتَةً",
              "lemma": "نكتة",
              "features": "indef.acc",
              "root": "ن ك ت",
              "pos": "noun",
              "gloss": "a mark, blemish, dark spot"
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
              "surface": "وَجْهِكَ",
              "lemma": "وجه",
              "features": "gen+2ms",
              "root": "و ج ه",
              "pos": "noun",
              "gloss": "face"
            },
            {
              "surface": "يَوْمَ",
              "lemma": "يوم",
              "features": "acc.constr",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "الْقِيَامَةِ",
              "lemma": "قيامة",
              "features": "def.gen",
              "root": "ق و م",
              "pos": "noun",
              "gloss": "resurrection; the Day of Judgment (with يوم)"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا قَالَ النَّبِيُّ ﷺ إِنَّ هٰذَا خَيْرٌ لِلرَّجُلِ؟",
          "options": [
            "لِأَنَّ الْمَسْأَلَةَ تَجِيْءُ نُكْتَةً فِيْ وَجْهِ صَاحِبِهَا يَوْمَ الْقِيَامَةِ",
            "لِأَنَّ الْعَمَلَ أَسْرَعُ مِنَ الشِّرَاءِ",
            "لِأَنَّ الْحَطَبَ أَغْلَىٰ مِنَ الطَّعَامِ"
          ],
          "answer": 0,
          "qEn": "Why did the Prophet ﷺ say this was better for the man?",
          "optionsEn": [
            "Because begging comes as a mark on its owner's face on the Day of Judgment",
            "Because working is faster than buying",
            "Because firewood is pricier than food"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "إِنَّ رَجُلاً مِنَ",
        "post": "أَتَىٰ النَّبِيَّ ﷺ يَسْأَلُهُ",
        "en": "A man of the Anṣār came to the Prophet, asking him.",
        "options": [
          "الْأَنْصَارِ",
          "الْأَنْصَارُ",
          "الْأَنْصَارَ",
          "أَنْصَارٍ"
        ],
        "answer": 0,
        "rationales": [
          "genitive -- object of the preposition مِنَ.",
          "nominative -- wrong case after a preposition.",
          "accusative -- wrong case after a preposition.",
          "indefinite -- wrong definiteness; the well-known group."
        ]
      },
      {
        "type": "cloze",
        "pre": "قَالَ: بَلَىٰ حِلْسٌ نَلْبَسُ",
        "post": "",
        "en": "He said: Yes indeed -- a coarse mat, part of which we wear.",
        "options": [
          "بَعْضَهُ",
          "بَعْضُهُ",
          "بَعْضٍ",
          "الْبَعْضَ"
        ],
        "answer": 0,
        "rationales": [
          "accusative + 3ms -- object of نَلْبَسُ, \"part of it.\"",
          "nominative -- wrong case for a direct object.",
          "indefinite, no possessive -- missing the required suffix.",
          "definite without the possessive -- doesn't match the source."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَأَخَذَهُمَا رَسُوْلُ اللهِ ﷺ",
        "post": "وَقَالَ: مَنْ يَشْتَرِيْ هٰذَيْنِ",
        "en": "So the Messenger of God took them in his hand, and said: Who will buy these two?",
        "options": [
          "بِيَدِهِ",
          "بِيَدِهِمَا",
          "يَدُهُ",
          "بِيَدِهَا"
        ],
        "answer": 0,
        "rationales": [
          "prep + genitive + 3ms -- \"with his hand.\"",
          "wrong possessive; the hand is his, not theirs.",
          "no preposition -- doesn't fit \"took them ___.\"",
          "wrong gender of the possessive suffix."
        ]
      },
      {
        "type": "cloze",
        "pre": "قَالَ رَجُلٌ: أَنَا آخُذُهُمَا",
        "post": "",
        "en": "A man said: I will take them for two dirhams.",
        "options": [
          "بِدِرْهَمَيْنِ",
          "بِدِرْهَمَانِ",
          "بِدِرْهَمٍ",
          "بِعَشَرَةِ دَرَاهِمَ"
        ],
        "answer": 0,
        "rationales": [
          "dual, genitive after a preposition -- \"for two dirhams,\" the second (winning) bid.",
          "the nominative dual -- بِـ is a حرف جر, so it has to be ـَيْنِ, not ـَانِ.",
          "singular -- the first, lower bid.",
          "ten dirhams -- a much larger sum, not the bid here."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَقَالَ: اشْتَرِ بِأَحَدِهِمَا طَعَاماً فَانْبِذْهُ إِلَىٰ",
        "post": "",
        "en": "And he said: Buy food with one of them and take it to your family.",
        "options": [
          "أَهْلِكَ",
          "أَهْلُكَ",
          "أَهْلَكَ",
          "أَهْلٍ"
        ],
        "answer": 0,
        "rationales": [
          "genitive + 2ms -- object of the preposition إِلَىٰ.",
          "nominative -- wrong case after a preposition.",
          "accusative -- wrong case after a preposition.",
          "indefinite -- wrong definiteness; his own family."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَاشْتَرِ بِالْآخَرِ قَدُوْماً فَائْتِنِيْ",
        "post": "",
        "en": "And buy an axe with the other, and bring it to me.",
        "options": [
          "بِهِ",
          "بِهَا",
          "بِهِمَا",
          "بِهِنَّ"
        ],
        "answer": 0,
        "rationales": [
          "prep + 3ms -- referring back to قَدُوْماً, masculine singular.",
          "wrong gender.",
          "wrong number -- only the axe, not both items.",
          "wrong gender and number."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَجَاءَ وَقَدْ أَصَابَ",
        "post": "",
        "en": "And he came back having earned ten dirhams.",
        "options": [
          "عَشَرَةَ دَرَاهِمَ",
          "عَشَرَةُ دَرَاهِمَ",
          "عَشَرَةَ دِرْهَمٍ",
          "عَشْرُ دَرَاهِمَ"
        ],
        "answer": 0,
        "rationales": [
          "accusative construct + genitive plural -- the standard 3-10 counted-noun pattern.",
          "nominative -- wrong case for the object of أَصَابَ.",
          "wrong number agreement on the counted noun.",
          "wrong gender form of \"ten\" for a counted plural noun."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَقَالَ رَسُوْلُ اللهِ ﷺ: هٰذَا خَيْرٌ لَكَ مِنْ أَنْ تَجِيْءَ الْمَسْأَلَةُ نُكْتَةً فِيْ وَجْهِكَ يَوْمَ",
        "post": "",
        "en": "This is better for you than that begging should come as a mark on your face on the Day of Judgment.",
        "options": [
          "الْقِيَامَةِ",
          "الْقِيَامَةُ",
          "قِيَامَةٍ",
          "الْقِيَامَةَ"
        ],
        "answer": 0,
        "rationales": [
          "genitive -- second term of the construct يَوْمَ الْقِيَامَةِ.",
          "nominative -- wrong case in a construct.",
          "indefinite -- wrong definiteness; the well-known Day.",
          "accusative -- wrong case in a construct."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "إِنَّ رَجُلاً مِنَ الْأَنْصَارِ أَتَىٰ النَّبِيَّ ﷺ",
        "pre": "",
        "post": "يَسْأَلُهُ",
        "targetPerson": "رَجُلَانِ",
        "targetEn": "two men (dual)",
        "options": [
          "أَتَيَا النَّبِيَّ ﷺ",
          "أَتَىٰ النَّبِيَّ ﷺ",
          "أَتَوُا النَّبِيَّ ﷺ",
          "أَتَتِ النَّبِيَّ ﷺ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. dual perfect -- the two men came.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "قَالَ: بَلَىٰ حِلْسٌ نَلْبَسُ بَعْضَهُ",
        "pre": "",
        "post": "وَنَبْسُطُ بَعْضَهُ",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "أَلْبَسُ بَعْضَهُ",
          "نَلْبَسُ بَعْضَهُ",
          "يَلْبَسُ بَعْضَهُ",
          "لَبِسْنَا بَعْضَهُ"
        ],
        "answer": 0,
        "rationales": [
          "1st singular imperfect -- I wear.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَأَخَذَهُمَا رَسُوْلُ اللهِ ﷺ بِيَدِهِ",
        "pre": "",
        "post": "",
        "targetPerson": "أَنْتَ",
        "targetEn": "you (m. sg.)",
        "options": [
          "أَخَذْتَهُمَا بِيَدِكَ",
          "أَخَذَهُمَا بِيَدِهِ",
          "أَخَذْتُهُمَا بِيَدِيْ",
          "أَخَذُوهُمَا بِأَيْدِيْهِمْ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. singular + matching possessive -- you took them with your hand.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "قَالَ رَجُلٌ: أَنَا آخُذُهُمَا بِدِرْهَمٍ",
        "pre": "",
        "post": "",
        "targetPerson": "نَحْنُ",
        "targetEn": "we",
        "options": [
          "نَحْنُ نَأْخُذُهُمَا بِدِرْهَمٍ",
          "نَحْنُ آخُذُهُمَا بِدِرْهَمٍ",
          "نَحْنُ يَأْخُذُهُمَا بِدِرْهَمٍ",
          "نَحْنُ أَخَذْنَاهُمَا بِدِرْهَمٍ"
        ],
        "answer": 0,
        "rationales": [
          "1st plural imperfect -- we take.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَاشْتَرِ بِالْآخَرِ قَدُوْماً",
        "pre": "",
        "post": "فَائْتِنِيْ بِهِ",
        "targetPerson": "أَنْتُمْ",
        "targetEn": "you (m. pl.)",
        "options": [
          "وَاشْتَرُوا بِالْآخَرِ قَدُوْماً",
          "وَاشْتَرِ بِالْآخَرِ قَدُوْماً",
          "وَاشْتَرَتْ بِالْآخَرِ قَدُوْماً",
          "وَاشْتَرَيْنَا بِالْآخَرِ قَدُوْماً"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. plural imperative -- (you all) buy.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَذَهَبَ الرَّجُلُ يَحْتَطِبُ وَيَبِيْعُ",
        "pre": "",
        "post": "",
        "targetPerson": "الرِّجَالُ",
        "targetEn": "the men",
        "options": [
          "فَذَهَبَ الرِّجَالُ يَحْتَطِبُوْنَ وَيَبِيْعُوْنَ",
          "فَذَهَبَ الرِّجَالُ يَحْتَطِبُ وَيَبِيْعُ",
          "فَذَهَبَتِ الرِّجَالُ يَحْتَطِبْنَ وَيَبِعْنَ",
          "فَذَهَبَ الرِّجَالُ أَحْتَطِبُ وَأَبِيْعُ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular verb before the subject, plural verbs after -- standard fuṣḥā agreement.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَاشْتَرَىٰ بِبَعْضِهَا ثَوْباً وَبِبَعْضِهَا طَعَاماً",
        "pre": "",
        "post": "",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "فَاشْتَرَتْ بِبَعْضِهَا ثَوْباً وَبِبَعْضِهَا طَعَاماً",
          "فَاشْتَرَىٰ بِبَعْضِهَا ثَوْباً وَبِبَعْضِهَا طَعَاماً",
          "فَاشْتَرَوْا بِبَعْضِهَا ثَوْباً وَبِبَعْضِهَا طَعَاماً",
          "فَاشْتَرَيْتُ بِبَعْضِهَا ثَوْباً وَبِبَعْضِهَا طَعَاماً"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular perfect -- she bought.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

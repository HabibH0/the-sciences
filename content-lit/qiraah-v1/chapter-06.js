// القراءة الراشدة, volume one, chapter six -- نزهة وطبخ.
//
// Follows the shape of chapter-01.js/chapter-02.js -- see ../CHAPTER-FORMAT.md
// for the full specification. Hand-authored directly from the scanned pages
// (qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed pages 43-45); there
// is no JSON intermediate (see PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md --
// the pipeline no longer emits JSON).
//
// This chapter is first-person-PLURAL narrative (the writer and five named
// friends -- Dāwūd, Sulaymān, Hāshim, Umar, Khalid -- plan and carry out a
// picnic), a first for the book after chapter-02.js's first-person-singular
// register. Two small, low-risk schema extrapolations came up and are
// documented here rather than raised as blocking questions, per the
// pattern already agreed with Habib for chapters 3-5:
//   - DUAL grammar: CHAPTER-FORMAT.md's person atoms are only
//     1s/1p/2ms/2fs/3ms/3fs/3mp/3fp -- no dual. Umar and Hāshim act as a
//     pair in several sentences (يُحْسِنَانِ, تَوَلَّيَا, سَاعَدَهُمَا), so this
//     chapter extends the existing pattern with `3md` (3rd masc. dual),
//     matching how `3mp` already works. This is the book's first dual
//     verb/pronoun; future chapters can reuse `3md`/`2md`/etc. the same
//     way.
//   - A verb used as its own verbal-noun/maṣdar in the same chapter
//     (طَبَخَ "to cook" / الطَّبْخُ "the cooking", qr1-6-010/013): rather than
//     spawn a second `lemmas` entry for a word that's really the same
//     root doing double duty (unlike the genuinely unrelated homograph
//     pair in chapter-05.js's "ذهب"), the build script's `lem()` helper
//     gained an optional `pos_override` so a single lemma entry can be
//     tagged "noun" on the `الطَّبْخ` tokens while staying "verb" in
//     `lemmas`.
//   - `فَإِنَّ`/`لأَنَّ`/`لأَنَّا` (that/because/indeed family) all share the
//     `أن` lemma slot, matching how chapter-04.js's `إن` already covers
//     both "if" and "indeed" -- a deliberate, established convention,
//     not a new one.
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch6",
  "number": 6,
  "title": {
    "ar": "نُزْهَةٌ وَطَبْخٌ",
    "en": "An Outing and Cooking"
  },
  "pages": [
    43,
    44,
    45
  ],
  "register": "first_person_plural_past",
  "newWords": [
    "ضاحية",
    "نزهة",
    "طبخ",
    "اجتمع",
    "توجه",
    "اكترى",
    "حطب",
    "دق",
    "غلب",
    "جوع",
    "رغيف",
    "مركبة"
  ],
  "lemmas": {
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
    "ثلاثاء": {
      "root": "ث ل ث",
      "pos": "noun",
      "gloss": "Tuesday",
      "content": true
    },
    "ماضي": {
      "root": "م ض ي",
      "pos": "adj",
      "gloss": "past, last",
      "content": true
    },
    "عطلة": {
      "root": "ع ط ل",
      "pos": "noun",
      "gloss": "holiday",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "مدرسة": {
      "root": "د ر س",
      "pos": "noun",
      "gloss": "school",
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
      "gloss": "to",
      "content": false
    },
    "داود": {
      "root": "—",
      "pos": "proper",
      "gloss": "Dāwūd (name)",
      "content": false
    },
    "صباح": {
      "root": "ص ب ح",
      "pos": "noun",
      "gloss": "morning",
      "content": true
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "ألا": {
      "root": "—",
      "pos": "part",
      "gloss": "isn't it that...? don't we...?",
      "content": false
    },
    "خرج": {
      "root": "خ ر ج",
      "pos": "verb",
      "gloss": "to go out",
      "content": true
    },
    "بستان": {
      "root": "—",
      "pos": "noun",
      "gloss": "garden",
      "content": true
    },
    "أو": {
      "root": "—",
      "pos": "part",
      "gloss": "or",
      "content": false
    },
    "مكان": {
      "root": "ك و ن",
      "pos": "noun",
      "gloss": "place",
      "content": true
    },
    "ضاحية": {
      "root": "ض ح و",
      "pos": "noun",
      "gloss": "outskirts, suburb",
      "content": true,
      "book_note": "الضَّوَاحِي جَمْعُ الضَّاحِيَةِ: النَّوَاحِي جَمْعُ النَّاحِيَةِ (the outlying districts, pl. of \"outskirt\")"
    },
    "مدينة": {
      "root": "م د ن",
      "pos": "noun",
      "gloss": "city",
      "content": true
    },
    "رتع": {
      "root": "ر ت ع",
      "pos": "verb",
      "gloss": "to roam about, enjoy oneself",
      "content": true,
      "book_note": "رَتَعَ يَرْتَعُ رَتْعاً: فِي الْمَكَانِ: أَقَامُوا وَتَنَعَّمُوا وَأَكَلُوا فِيْهِ وَشَرِبُوا مَا شَاؤُوا فِي خِصْبٍ وَسَعَةٍ (to settle somewhere and live it up, eating and drinking freely and abundantly)"
    },
    "لعب": {
      "root": "ل ع ب",
      "pos": "verb",
      "gloss": "to play",
      "content": true
    },
    "طبخ": {
      "root": "ط ب خ",
      "pos": "verb",
      "gloss": "to cook",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "طعام": {
      "root": "ط ع م",
      "pos": "noun",
      "gloss": "food",
      "content": true
    },
    "ما": {
      "root": "—",
      "pos": "part",
      "gloss": "what; not",
      "content": false
    },
    "اشتهى": {
      "root": "ش ه و",
      "pos": "verb",
      "gloss": "to desire, crave",
      "content": true
    },
    "أكل": {
      "root": "أ ك ل",
      "pos": "verb",
      "gloss": "to eat",
      "content": true
    },
    "رجع": {
      "root": "ر ج ع",
      "pos": "verb",
      "gloss": "to return",
      "content": true
    },
    "مساء": {
      "root": "م س و",
      "pos": "noun",
      "gloss": "evening",
      "content": true
    },
    "هو": {
      "root": "—",
      "pos": "noun",
      "gloss": "he, it",
      "content": false
    },
    "كذلك": {
      "root": "—",
      "pos": "adv",
      "gloss": "thus, like that",
      "content": false
    },
    "أنا": {
      "root": "—",
      "pos": "noun",
      "gloss": "I",
      "content": false
    },
    "فكر": {
      "root": "ف ك ر",
      "pos": "verb",
      "gloss": "to think",
      "content": true
    },
    "أيضا": {
      "root": "—",
      "pos": "adv",
      "gloss": "also",
      "content": true
    },
    "كيف": {
      "root": "ك ي ف",
      "pos": "part",
      "gloss": "how",
      "content": false
    },
    "قضى": {
      "root": "ق ض ي",
      "pos": "verb",
      "gloss": "to spend (time)",
      "content": true
    },
    "هذا": {
      "root": "—",
      "pos": "dem",
      "gloss": "this (m.)",
      "content": false
    },
    "لكن": {
      "root": "—",
      "pos": "part",
      "gloss": "but",
      "content": false
    },
    "كلم": {
      "root": "ك ل م",
      "pos": "verb",
      "gloss": "to speak to, address",
      "content": true
    },
    "أخ": {
      "root": "أ خ و",
      "pos": "noun",
      "gloss": "brother",
      "content": true
    },
    "سليمان": {
      "root": "—",
      "pos": "proper",
      "gloss": "Sulaymān (name)",
      "content": false
    },
    "هاشم": {
      "root": "—",
      "pos": "proper",
      "gloss": "Hāshim (name)",
      "content": false
    },
    "سيد": {
      "root": "س و د",
      "pos": "noun",
      "gloss": "master, sir",
      "content": true
    },
    "عمر": {
      "root": "—",
      "pos": "proper",
      "gloss": "Umar (name)",
      "content": false
    },
    "لعل": {
      "root": "—",
      "pos": "part",
      "gloss": "perhaps",
      "content": false
    },
    "مع": {
      "root": "—",
      "pos": "prep",
      "gloss": "with",
      "content": false
    },
    "وافق": {
      "root": "و ف ق",
      "pos": "verb",
      "gloss": "to agree",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, about",
      "content": false
    },
    "ذلك": {
      "root": "—",
      "pos": "dem",
      "gloss": "that",
      "content": false
    },
    "فرح": {
      "root": "ف ر ح",
      "pos": "verb",
      "gloss": "to be glad, happy",
      "content": true
    },
    "جدا": {
      "root": "—",
      "pos": "adv",
      "gloss": "very",
      "content": false
    },
    "بيت": {
      "root": "ب ي ت",
      "pos": "noun",
      "gloss": "house",
      "content": true
    },
    "ساعة": {
      "root": "س و ع",
      "pos": "noun",
      "gloss": "hour",
      "content": true
    },
    "صديق": {
      "root": "ص د ق",
      "pos": "noun",
      "gloss": "friend",
      "content": true
    },
    "خالد": {
      "root": "—",
      "pos": "proper",
      "gloss": "Khalid (name)",
      "content": false
    },
    "ب": {
      "root": "—",
      "pos": "prep",
      "gloss": "with, by",
      "content": false
    },
    "مرحبا": {
      "root": "ر ح ب",
      "pos": "part",
      "gloss": "welcome!",
      "content": false
    },
    "اجتمع": {
      "root": "ج م ع",
      "pos": "verb",
      "gloss": "to gather, meet",
      "content": true
    },
    "هل": {
      "root": "—",
      "pos": "part",
      "gloss": "[yes/no question particle]",
      "content": false
    },
    "قصد": {
      "root": "ق ص د",
      "pos": "verb",
      "gloss": "to head for, intend",
      "content": true
    },
    "توجه": {
      "root": "و ج ه",
      "pos": "verb",
      "gloss": "to head towards, set out for",
      "content": true
    },
    "بل": {
      "root": "—",
      "pos": "part",
      "gloss": "rather",
      "content": false
    },
    "كبير": {
      "root": "ك ب ر",
      "pos": "adj",
      "gloss": "big, large",
      "content": true
    },
    "وسط": {
      "root": "و س ط",
      "pos": "noun",
      "gloss": "middle, midst",
      "content": true
    },
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that, because",
      "content": false
    },
    "قريب": {
      "root": "ق ر ب",
      "pos": "adj",
      "gloss": "near; relative",
      "content": true
    },
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "not",
      "content": false
    },
    "ضاع": {
      "root": "ض ي ع",
      "pos": "verb",
      "gloss": "to be lost, wasted",
      "content": true
    },
    "وقت": {
      "root": "و ق ت",
      "pos": "noun",
      "gloss": "time",
      "content": true
    },
    "ذهاب": {
      "root": "ذ ه ب",
      "pos": "noun",
      "gloss": "going, departure",
      "content": true
    },
    "بلد": {
      "root": "ب ل د",
      "pos": "noun",
      "gloss": "town, country",
      "content": true
    },
    "بعض": {
      "root": "ب ع ض",
      "pos": "noun",
      "gloss": "some",
      "content": true
    },
    "أراد": {
      "root": "ر و د",
      "pos": "verb",
      "gloss": "to want",
      "content": true
    },
    "نهار": {
      "root": "ن ه ر",
      "pos": "noun",
      "gloss": "daytime",
      "content": true
    },
    "نزهة": {
      "root": "ن ز ه",
      "pos": "noun",
      "gloss": "outing, excursion",
      "content": true
    },
    "استقر": {
      "root": "ق ر ر",
      "pos": "verb",
      "gloss": "to settle, be decided",
      "content": true
    },
    "رأي": {
      "root": "ر أ ي",
      "pos": "noun",
      "gloss": "opinion, view",
      "content": true
    },
    "اكترى": {
      "root": "ك ر ي",
      "pos": "verb",
      "gloss": "to hire, rent",
      "content": true,
      "book_note": "اكْتَرَىٰ يَكْتَرِي اكْتِرَاءً: فُلانٌ الدَّارَ وَنَحْوَهَا: اسْتَأْجَرَهَا (to hire/rent a house or the like)"
    },
    "مركبة": {
      "root": "ر ك ب",
      "pos": "noun",
      "gloss": "vehicle, carriage",
      "content": true
    },
    "وصل": {
      "root": "و ص ل",
      "pos": "verb",
      "gloss": "to arrive",
      "content": true
    },
    "أخذ": {
      "root": "أ خ ذ",
      "pos": "verb",
      "gloss": "to take",
      "content": true
    },
    "رز": {
      "root": "—",
      "pos": "noun",
      "gloss": "rice",
      "content": true
    },
    "لحم": {
      "root": "ل ح م",
      "pos": "noun",
      "gloss": "meat",
      "content": true
    },
    "توابل": {
      "root": "ت ب ل",
      "pos": "noun",
      "gloss": "spices",
      "content": true
    },
    "سمن": {
      "root": "س م ن",
      "pos": "noun",
      "gloss": "ghee, clarified butter",
      "content": true
    },
    "خضر": {
      "root": "خ ض ر",
      "pos": "noun",
      "gloss": "vegetables, greens",
      "content": true
    },
    "قدر": {
      "root": "ق د ر",
      "pos": "noun",
      "gloss": "pot, cooking-pot",
      "content": true
    },
    "إناء": {
      "root": "إ ن ي",
      "pos": "noun",
      "gloss": "vessel, container",
      "content": true
    },
    "علم": {
      "root": "ع ل م",
      "pos": "verb",
      "gloss": "to know",
      "content": true
    },
    "محل": {
      "root": "ح ل ل",
      "pos": "noun",
      "gloss": "place, shop",
      "content": true
    },
    "خباز": {
      "root": "خ ب ز",
      "pos": "noun",
      "gloss": "baker",
      "content": true
    },
    "اشترى": {
      "root": "ش ر ي",
      "pos": "verb",
      "gloss": "to buy",
      "content": true
    },
    "رغيف": {
      "root": "ر غ ف",
      "pos": "noun",
      "gloss": "loaf (of bread)",
      "content": true
    },
    "تعب": {
      "root": "ت ع ب",
      "pos": "noun",
      "gloss": "fatigue, trouble",
      "content": true
    },
    "اختار": {
      "root": "خ ي ر",
      "pos": "verb",
      "gloss": "to choose",
      "content": true
    },
    "ظليل": {
      "root": "ظ ل ل",
      "pos": "adj",
      "gloss": "shady",
      "content": true,
      "book_note": "الظَّلِيْلُ: ذُو الظِّلِّ (that which has [ample] shade)"
    },
    "أحسن": {
      "root": "ح س ن",
      "pos": "verb",
      "gloss": "to be good at, do well",
      "content": true
    },
    "تولى": {
      "root": "و ل ي",
      "pos": "verb",
      "gloss": "to take charge of, assume",
      "content": true
    },
    "أمر": {
      "root": "أ م ر",
      "pos": "noun",
      "gloss": "matter, affair",
      "content": true
    },
    "ساعد": {
      "root": "س ع د",
      "pos": "verb",
      "gloss": "to help",
      "content": true
    },
    "حطب": {
      "root": "ح ط ب",
      "pos": "noun",
      "gloss": "firewood",
      "content": true
    },
    "ذهب": {
      "root": "ذ ه ب",
      "pos": "verb",
      "gloss": "to go",
      "content": true
    },
    "غابة": {
      "root": "غ ي ب",
      "pos": "noun",
      "gloss": "forest, grove",
      "content": true
    },
    "دق": {
      "root": "د ق ق",
      "pos": "verb",
      "gloss": "to pound, crush",
      "content": true
    },
    "أدرك": {
      "root": "د ر ك",
      "pos": "verb",
      "gloss": "to catch up with; (of food) to be ready, done",
      "content": true
    },
    "حادي": {
      "root": "ح د ي",
      "pos": "num",
      "gloss": "first (in 'eleventh')",
      "content": true
    },
    "عشر": {
      "root": "ع ش ر",
      "pos": "num",
      "gloss": "ten",
      "content": true
    },
    "قد": {
      "root": "—",
      "pos": "part",
      "gloss": "already, indeed",
      "content": false
    },
    "غلب": {
      "root": "غ ل ب",
      "pos": "verb",
      "gloss": "to overcome",
      "content": true
    },
    "جوع": {
      "root": "ج و ع",
      "pos": "noun",
      "gloss": "hunger",
      "content": true
    },
    "رغبة": {
      "root": "ر غ ب",
      "pos": "noun",
      "gloss": "desire, eagerness",
      "content": true
    },
    "شهي": {
      "root": "ش ه و",
      "pos": "adj",
      "gloss": "tasty, appetizing",
      "content": true
    },
    "لذيذ": {
      "root": "ل ذ ذ",
      "pos": "adj",
      "gloss": "delicious",
      "content": true
    },
    "جلس": {
      "root": "ج ل س",
      "pos": "verb",
      "gloss": "to sit",
      "content": true
    },
    "تحدث": {
      "root": "ح د ث",
      "pos": "verb",
      "gloss": "to converse, talk",
      "content": true
    },
    "حتى": {
      "root": "—",
      "pos": "part",
      "gloss": "until",
      "content": false
    },
    "ظهر": {
      "root": "ظ ه ر",
      "pos": "noun",
      "gloss": "Ẓuhr, midday",
      "content": true
    },
    "أذن": {
      "root": "أ ذ ن",
      "pos": "verb",
      "gloss": "to give the call to prayer",
      "content": true
    },
    "صلى": {
      "root": "ص ل و",
      "pos": "verb",
      "gloss": "to pray",
      "content": true
    },
    "جماعة": {
      "root": "ج م ع",
      "pos": "noun",
      "gloss": "congregation",
      "content": true
    },
    "بعد": {
      "root": "—",
      "pos": "prep",
      "gloss": "after",
      "content": false
    },
    "صلاة": {
      "root": "ص ل و",
      "pos": "noun",
      "gloss": "prayer",
      "content": true
    },
    "زار": {
      "root": "ز و ر",
      "pos": "verb",
      "gloss": "to visit",
      "content": true
    },
    "أثر": {
      "root": "أ ث ر",
      "pos": "noun",
      "gloss": "trace, [historical/archaeological] site",
      "content": true
    },
    "عصر": {
      "root": "ع ص ر",
      "pos": "noun",
      "gloss": "ʿAṣr, afternoon",
      "content": true
    },
    "مسرور": {
      "root": "س ر ر",
      "pos": "adj",
      "gloss": "happy, pleased",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "Last Tuesday was a school holiday. Dāwūd came to me in the morning and proposed going out to a garden or the outskirts to roam, play, cook whatever food we like, eat, and come back in the evening. I agreed -- I'd been thinking the same thing -- and told him to invite Sulaymān, Hāshim, and Umar too.",
      "sentences": [
        {
          "id": "qr1-6-001",
          "page": 43,
          "ar": "كَانَ يَوْمُ الثُّلاَثَاءِ الْمَاضِيْ يَوْمَ عُطْلَةٍ فِي الْمَدْرَسَةِ.",
          "en": "Last Tuesday was a holiday at school.",
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
              "surface": "يَوْمُ",
              "lemma": "يوم",
              "features": "nom.constr",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "الثُّلاَثَاءِ",
              "lemma": "ثلاثاء",
              "features": "def.gen",
              "root": "ث ل ث",
              "pos": "noun",
              "gloss": "Tuesday"
            },
            {
              "surface": "الْمَاضِيْ",
              "lemma": "ماضي",
              "features": "def.gen",
              "root": "م ض ي",
              "pos": "adj",
              "gloss": "past, last"
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
              "surface": "عُطْلَةٍ",
              "lemma": "عطلة",
              "features": "indef.gen",
              "root": "ع ط ل",
              "pos": "noun",
              "gloss": "holiday"
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
          "id": "qr1-6-002",
          "page": 43,
          "ar": "جَاءَ إِلَيَّ دَاوُدُ صَبَاحاً وَقَالَ: الْيَوْمُ يَوْمُ الْعُطْلَةِ.",
          "en": "Dāwūd came to me in the morning and said: \"Today is the holiday.",
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
              "surface": "إِلَيَّ",
              "lemma": "إلى",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "to"
            },
            {
              "surface": "دَاوُدُ",
              "lemma": "داود",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Dāwūd (name)"
            },
            {
              "surface": "صَبَاحاً",
              "lemma": "صباح",
              "features": "indef.acc",
              "root": "ص ب ح",
              "pos": "noun",
              "gloss": "morning"
            },
            {
              "surface": "وَقَالَ",
              "lemma": "قال",
              "features": "conj+perf.3ms",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "الْيَوْمُ",
              "lemma": "يوم",
              "features": "def.nom",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "يَوْمُ",
              "lemma": "يوم",
              "features": "nom.constr",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "الْعُطْلَةِ",
              "lemma": "عطلة",
              "features": "def.gen",
              "root": "ع ط ل",
              "pos": "noun",
              "gloss": "holiday"
            }
          ]
        },
        {
          "id": "qr1-6-003",
          "page": 43,
          "ar": "أَلَا نَخْرُجُ إِلَىٰ بُسْتَانٍ، أَوْ مَكَانٍ فِيْ ضَوَاحِي الْمَدِيْنَةِ؟",
          "en": "Shall we not go out to a garden, or a place on the outskirts of the city,",
          "tokens": [
            {
              "surface": "أَلَا",
              "lemma": "ألا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "isn't it that...? don't we...?"
            },
            {
              "surface": "نَخْرُجُ",
              "lemma": "خرج",
              "features": "impf.1p",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
            },
            {
              "surface": "إِلَىٰ",
              "lemma": "إلى",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "to"
            },
            {
              "surface": "بُسْتَانٍ",
              "lemma": "بستان",
              "features": "indef.gen",
              "root": "",
              "pos": "noun",
              "gloss": "garden"
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
              "surface": "مَكَانٍ",
              "lemma": "مكان",
              "features": "indef.gen",
              "root": "ك و ن",
              "pos": "noun",
              "gloss": "place"
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
              "surface": "ضَوَاحِي",
              "lemma": "ضاحية",
              "features": "pl.gen.constr",
              "root": "ض ح و",
              "pos": "noun",
              "gloss": "outskirts, suburb"
            },
            {
              "surface": "الْمَدِيْنَةِ",
              "lemma": "مدينة",
              "features": "def.gen",
              "root": "م د ن",
              "pos": "noun",
              "gloss": "city"
            }
          ]
        },
        {
          "id": "qr1-6-004",
          "page": 43,
          "ar": "نَرْتَعُ وَنَلْعَبُ، وَنَطْبُخُ مِنَ الطَّعَامِ مَا نَشْتَهِيْ وَنَأْكُلُ.",
          "en": "to roam and play, and cook whatever food we like and eat,",
          "tokens": [
            {
              "surface": "نَرْتَعُ",
              "lemma": "رتع",
              "features": "impf.1p",
              "root": "ر ت ع",
              "pos": "verb",
              "gloss": "to roam about, enjoy oneself"
            },
            {
              "surface": "وَنَلْعَبُ",
              "lemma": "لعب",
              "features": "conj+impf.1p",
              "root": "ل ع ب",
              "pos": "verb",
              "gloss": "to play"
            },
            {
              "surface": "وَنَطْبُخُ",
              "lemma": "طبخ",
              "features": "conj+impf.1p",
              "root": "ط ب خ",
              "pos": "verb",
              "gloss": "to cook"
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
              "surface": "نَشْتَهِيْ",
              "lemma": "اشتهى",
              "features": "impf.1p",
              "root": "ش ه و",
              "pos": "verb",
              "gloss": "to desire, crave"
            },
            {
              "surface": "وَنَأْكُلُ",
              "lemma": "أكل",
              "features": "conj+impf.1p",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            }
          ]
        },
        {
          "id": "qr1-6-005",
          "page": 44,
          "ar": "وَنَرْجِعُ فِي الْمَسَاءِ.",
          "en": "and come back in the evening?\"",
          "tokens": [
            {
              "surface": "وَنَرْجِعُ",
              "lemma": "رجع",
              "features": "conj+impf.1p",
              "root": "ر ج ع",
              "pos": "verb",
              "gloss": "to return"
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
          "id": "qr1-6-006",
          "page": 44,
          "ar": "قُلْتُ: هُوَ كَذٰلِكَ! وَأَنَا كُنْتُ أُفَكِّرُ أَيْضاً كَيْفَ أَقْضِيْ هٰذَا الْيَوْمَ، وَلٰكِنْ كَلِّمْ أَخَاكَ سُلَيْمَانَ وَالأَخَ هَاشِماً وَالسَّيِّدَ عُمَرَ لَعَلَّهُمْ يَخْرُجُوْنَ مَعَنَا.",
          "en": "I said: \"That's it exactly! I too was thinking about how to spend this day -- but talk to your brother Sulaymān, and brother Hāshim, and Mr. Umar; perhaps they'll come out with us.\"",
          "tokens": [
            {
              "surface": "قُلْتُ",
              "lemma": "قال",
              "features": "perf.1s",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "هُوَ",
              "lemma": "هو",
              "features": "nom.3ms",
              "root": "",
              "pos": "noun",
              "gloss": "he, it"
            },
            {
              "surface": "كَذٰلِكَ",
              "lemma": "كذلك",
              "features": "adv",
              "root": "",
              "pos": "adv",
              "gloss": "thus, like that"
            },
            {
              "surface": "وَأَنَا",
              "lemma": "أنا",
              "features": "conj+nom.1s",
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
              "surface": "أُفَكِّرُ",
              "lemma": "فكر",
              "features": "impf.1s",
              "root": "ف ك ر",
              "pos": "verb",
              "gloss": "to think"
            },
            {
              "surface": "أَيْضاً",
              "lemma": "أيضا",
              "features": "acc",
              "root": "",
              "pos": "adv",
              "gloss": "also"
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
              "surface": "أَقْضِيْ",
              "lemma": "قضى",
              "features": "impf.1s",
              "root": "ق ض ي",
              "pos": "verb",
              "gloss": "to spend (time)"
            },
            {
              "surface": "هٰذَا",
              "lemma": "هذا",
              "features": "dem",
              "root": "",
              "pos": "dem",
              "gloss": "this (m.)"
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
              "surface": "وَلٰكِنْ",
              "lemma": "لكن",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "but"
            },
            {
              "surface": "كَلِّمْ",
              "lemma": "كلم",
              "features": "imp.2ms",
              "root": "ك ل م",
              "pos": "verb",
              "gloss": "to speak to, address"
            },
            {
              "surface": "أَخَاكَ",
              "lemma": "أخ",
              "features": "acc+2ms",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brother"
            },
            {
              "surface": "سُلَيْمَانَ",
              "lemma": "سليمان",
              "features": "acc",
              "root": "",
              "pos": "proper",
              "gloss": "Sulaymān (name)"
            },
            {
              "surface": "وَالأَخَ",
              "lemma": "أخ",
              "features": "conj+def.acc",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brother"
            },
            {
              "surface": "هَاشِماً",
              "lemma": "هاشم",
              "features": "acc",
              "root": "",
              "pos": "proper",
              "gloss": "Hāshim (name)"
            },
            {
              "surface": "وَالسَّيِّدَ",
              "lemma": "سيد",
              "features": "conj+def.acc",
              "root": "س و د",
              "pos": "noun",
              "gloss": "master, sir"
            },
            {
              "surface": "عُمَرَ",
              "lemma": "عمر",
              "features": "acc",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
            },
            {
              "surface": "لَعَلَّهُمْ",
              "lemma": "لعل",
              "features": "part+3mp",
              "root": "",
              "pos": "part",
              "gloss": "perhaps"
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
              "surface": "مَعَنَا",
              "lemma": "مع",
              "features": "prep+1p",
              "root": "",
              "pos": "prep",
              "gloss": "with"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا اقْتَرَحَ دَاوُدُ عَلَى صَاحِبِهِ صَبَاحَ يَوْمِ الْعُطْلَةِ؟",
          "options": [
            "أَنْ يَخْرُجُوا إِلَىٰ بُسْتَانٍ أَوْ ضَاحِيَةٍ لِلَّعِبِ وَالطَّبْخِ",
            "أَنْ يَبْقَيَا فِي الْبَيْتِ",
            "أَنْ يَذْهَبَا إِلَى الْمَدْرَسَةِ"
          ],
          "answer": 0,
          "qEn": "What did Dāwūd suggest to his friend on the morning of the holiday?",
          "optionsEn": [
            "That they go out to a garden or the outskirts to play and cook",
            "That they stay home",
            "That they go to school"
          ]
        },
        {
          "q": "مَنْ طَلَبَ الْكَاتِبُ مِنْ دَاوُدَ أَنْ يُكَلِّمَهُمْ؟",
          "options": [
            "سُلَيْمَانَ وَهَاشِماً وَعُمَرَ",
            "أَبَاهُ وَأُمَّهُ",
            "الْمُعَلِّمَ"
          ],
          "answer": 0,
          "qEn": "Who did the writer ask Dāwūd to speak to?",
          "optionsEn": [
            "Sulaymān, Hāshim, and Umar",
            "His father and mother",
            "The teacher"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "Dāwūd agreed and spoke to them; they were delighted and came to my house at once, along with our friend Khalid, whom we welcomed warmly. We gathered and debated: a garden inside the city, or the outskirts? Dāwūd and Umar favoured the big garden nearby, to save time; Sulaymān and Hāshim, with me on their side, preferred the outskirts, since we wanted to cook and spend the day outdoors.",
      "sentences": [
        {
          "id": "qr1-6-007",
          "page": 44,
          "ar": "وَافَقَ دَاوُدُ عَلَىٰ ذٰلِكَ وَكَلَّمَهُمْ، وَفَرِحُوْا جِدّاً وَجَاؤُوْا إِلَىٰ بَيْتِيْ مِنْ سَاعَتِهِمْ وَصَدِيْقُنَا خَالِدٌ فَفَرِحْنَا بِهِ وَقُلْنَا: مَرْحَباً.",
          "en": "Dāwūd agreed to that and spoke to them; they were very glad and came to my house at once -- our friend Khalid too -- so we were glad to see him and said: \"Welcome!\"",
          "tokens": [
            {
              "surface": "وَافَقَ",
              "lemma": "وافق",
              "features": "perf.3ms",
              "root": "و ف ق",
              "pos": "verb",
              "gloss": "to agree"
            },
            {
              "surface": "دَاوُدُ",
              "lemma": "داود",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Dāwūd (name)"
            },
            {
              "surface": "عَلَىٰ",
              "lemma": "على",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, about"
            },
            {
              "surface": "ذٰلِكَ",
              "lemma": "ذلك",
              "features": "dem",
              "root": "",
              "pos": "dem",
              "gloss": "that"
            },
            {
              "surface": "وَكَلَّمَهُمْ",
              "lemma": "كلم",
              "features": "conj+perf.3ms+3mp",
              "root": "ك ل م",
              "pos": "verb",
              "gloss": "to speak to, address"
            },
            {
              "surface": "وَفَرِحُوْا",
              "lemma": "فرح",
              "features": "conj+perf.3mp",
              "root": "ف ر ح",
              "pos": "verb",
              "gloss": "to be glad, happy"
            },
            {
              "surface": "جِدّاً",
              "lemma": "جدا",
              "features": "acc",
              "root": "",
              "pos": "adv",
              "gloss": "very"
            },
            {
              "surface": "وَجَاؤُوْا",
              "lemma": "جاء",
              "features": "conj+perf.3mp",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            },
            {
              "surface": "إِلَىٰ",
              "lemma": "إلى",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "to"
            },
            {
              "surface": "بَيْتِيْ",
              "lemma": "بيت",
              "features": "gen+1s",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
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
              "surface": "سَاعَتِهِمْ",
              "lemma": "ساعة",
              "features": "gen+3mp",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour"
            },
            {
              "surface": "وَصَدِيْقُنَا",
              "lemma": "صديق",
              "features": "conj+nom+1p",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            },
            {
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khalid (name)"
            },
            {
              "surface": "فَفَرِحْنَا",
              "lemma": "فرح",
              "features": "conj+perf.1p",
              "root": "ف ر ح",
              "pos": "verb",
              "gloss": "to be glad, happy"
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
          "id": "qr1-6-008",
          "page": 44,
          "ar": "اجْتَمَعْنَا وَقُلْنَا: هَلْ نَقْصِدُ بُسْتَاناً مِنْ بَسَاتِيْنِ الْمَدِيْنَةِ أَوْ نَتَوَجَّهُ إِلَىٰ ضَاحِيَةٍ مِنْ ضَوَاحِي الْمَدِيْنَةِ.",
          "en": "We gathered and said: \"Shall we head for a garden among the city's gardens, or set out for one of the city's outskirts?\"",
          "tokens": [
            {
              "surface": "اجْتَمَعْنَا",
              "lemma": "اجتمع",
              "features": "perf.1p",
              "root": "ج م ع",
              "pos": "verb",
              "gloss": "to gather, meet"
            },
            {
              "surface": "وَقُلْنَا",
              "lemma": "قال",
              "features": "conj+perf.1p",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "هَلْ",
              "lemma": "هل",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "[yes/no question particle]"
            },
            {
              "surface": "نَقْصِدُ",
              "lemma": "قصد",
              "features": "impf.1p",
              "root": "ق ص د",
              "pos": "verb",
              "gloss": "to head for, intend"
            },
            {
              "surface": "بُسْتَاناً",
              "lemma": "بستان",
              "features": "indef.acc",
              "root": "",
              "pos": "noun",
              "gloss": "garden"
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
              "surface": "بَسَاتِيْنِ",
              "lemma": "بستان",
              "features": "pl.gen.constr",
              "root": "",
              "pos": "noun",
              "gloss": "garden"
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
              "surface": "أَوْ",
              "lemma": "أو",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "or"
            },
            {
              "surface": "نَتَوَجَّهُ",
              "lemma": "توجه",
              "features": "impf.1p",
              "root": "و ج ه",
              "pos": "verb",
              "gloss": "to head towards, set out for"
            },
            {
              "surface": "إِلَىٰ",
              "lemma": "إلى",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "to"
            },
            {
              "surface": "ضَاحِيَةٍ",
              "lemma": "ضاحية",
              "features": "indef.gen",
              "root": "ض ح و",
              "pos": "noun",
              "gloss": "outskirts, suburb"
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
              "surface": "ضَوَاحِي",
              "lemma": "ضاحية",
              "features": "pl.gen.constr",
              "root": "ض ح و",
              "pos": "noun",
              "gloss": "outskirts, suburb"
            },
            {
              "surface": "الْمَدِيْنَةِ",
              "lemma": "مدينة",
              "features": "def.gen",
              "root": "م د ن",
              "pos": "noun",
              "gloss": "city"
            }
          ]
        },
        {
          "id": "qr1-6-009",
          "page": 44,
          "ar": "قَالَ دَاوُدُ وَعُمَرُ: بَلْ نَقْصِدُ الْبُسْتَانَ الْكَبِيْرَ فِيْ وَسَطِ الْمَدِيْنَةِ، فَإِنَّ الْبُسْتَانَ قَرِيْبٌ فَلَا يَضِيْعُ وَقْتُنَا فِي الذَّهَابِ إِلَىٰ ضَاحِيَةٍ مِنْ ضَوَاحِي الْبَلَدِ.",
          "en": "Dāwūd and Umar said: \"Rather, let's head for the big garden in the middle of the city, for the garden is near, so our time won't be wasted going to one of the town's outskirts.\"",
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
              "surface": "دَاوُدُ",
              "lemma": "داود",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Dāwūd (name)"
            },
            {
              "surface": "وَعُمَرُ",
              "lemma": "عمر",
              "features": "conj+nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
            },
            {
              "surface": "بَلْ",
              "lemma": "بل",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "rather"
            },
            {
              "surface": "نَقْصِدُ",
              "lemma": "قصد",
              "features": "impf.1p",
              "root": "ق ص د",
              "pos": "verb",
              "gloss": "to head for, intend"
            },
            {
              "surface": "الْبُسْتَانَ",
              "lemma": "بستان",
              "features": "def.acc",
              "root": "",
              "pos": "noun",
              "gloss": "garden"
            },
            {
              "surface": "الْكَبِيْرَ",
              "lemma": "كبير",
              "features": "def.acc",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "big, large"
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
              "surface": "وَسَطِ",
              "lemma": "وسط",
              "features": "gen.constr",
              "root": "و س ط",
              "pos": "noun",
              "gloss": "middle, midst"
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
              "surface": "فَإِنَّ",
              "lemma": "أن",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "that, because"
            },
            {
              "surface": "الْبُسْتَانَ",
              "lemma": "بستان",
              "features": "def.acc",
              "root": "",
              "pos": "noun",
              "gloss": "garden"
            },
            {
              "surface": "قَرِيْبٌ",
              "lemma": "قريب",
              "features": "indef.nom",
              "root": "ق ر ب",
              "pos": "adj",
              "gloss": "near; relative"
            },
            {
              "surface": "فَلَا",
              "lemma": "لا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not"
            },
            {
              "surface": "يَضِيْعُ",
              "lemma": "ضاع",
              "features": "impf.3ms",
              "root": "ض ي ع",
              "pos": "verb",
              "gloss": "to be lost, wasted"
            },
            {
              "surface": "وَقْتُنَا",
              "lemma": "وقت",
              "features": "nom+1p",
              "root": "و ق ت",
              "pos": "noun",
              "gloss": "time"
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
              "surface": "الذَّهَابِ",
              "lemma": "ذهاب",
              "features": "def.gen",
              "root": "ذ ه ب",
              "pos": "noun",
              "gloss": "going, departure"
            },
            {
              "surface": "إِلَىٰ",
              "lemma": "إلى",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "to"
            },
            {
              "surface": "ضَاحِيَةٍ",
              "lemma": "ضاحية",
              "features": "indef.gen",
              "root": "ض ح و",
              "pos": "noun",
              "gloss": "outskirts, suburb"
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
              "surface": "ضَوَاحِي",
              "lemma": "ضاحية",
              "features": "pl.gen.constr",
              "root": "ض ح و",
              "pos": "noun",
              "gloss": "outskirts, suburb"
            },
            {
              "surface": "الْبَلَدِ",
              "lemma": "بلد",
              "features": "def.gen",
              "root": "ب ل د",
              "pos": "noun",
              "gloss": "town, country"
            }
          ]
        },
        {
          "id": "qr1-6-010",
          "page": 44,
          "ar": "وَقَالَ سُلَيْمَانُ وَهَاشِمٌ وَأَنَا مَعَهُمَا: بَلْ نَتَوَجَّهُ إِلَىٰ بَعْضِ الضَّوَاحِيْ لأَنَّا نُرِيْدُ أَنْ نَطْبُخَ الطَّعَامَ وَنَقْضِيَ النَّهَارَ فِي النُّزْهَةِ وَالطَّبْخِ.",
          "en": "Sulaymān and Hāshim said, and I with them: \"Rather, let's head for one of the outskirts, because we want to cook food and spend the day in an outing and cooking.\"",
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
              "surface": "سُلَيْمَانُ",
              "lemma": "سليمان",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Sulaymān (name)"
            },
            {
              "surface": "وَهَاشِمٌ",
              "lemma": "هاشم",
              "features": "conj+nom",
              "root": "",
              "pos": "proper",
              "gloss": "Hāshim (name)"
            },
            {
              "surface": "وَأَنَا",
              "lemma": "أنا",
              "features": "conj+nom.1s",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "مَعَهُمَا",
              "lemma": "مع",
              "features": "prep+3md",
              "root": "",
              "pos": "prep",
              "gloss": "with"
            },
            {
              "surface": "بَلْ",
              "lemma": "بل",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "rather"
            },
            {
              "surface": "نَتَوَجَّهُ",
              "lemma": "توجه",
              "features": "impf.1p",
              "root": "و ج ه",
              "pos": "verb",
              "gloss": "to head towards, set out for"
            },
            {
              "surface": "إِلَىٰ",
              "lemma": "إلى",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "to"
            },
            {
              "surface": "بَعْضِ",
              "lemma": "بعض",
              "features": "gen.constr",
              "root": "ب ع ض",
              "pos": "noun",
              "gloss": "some"
            },
            {
              "surface": "الضَّوَاحِيْ",
              "lemma": "ضاحية",
              "features": "pl.def.gen",
              "root": "ض ح و",
              "pos": "noun",
              "gloss": "outskirts, suburb"
            },
            {
              "surface": "لأَنَّا",
              "lemma": "أن",
              "features": "prep+part+1p",
              "root": "",
              "pos": "part",
              "gloss": "that, because"
            },
            {
              "surface": "نُرِيْدُ",
              "lemma": "أراد",
              "features": "impf.1p",
              "root": "ر و د",
              "pos": "verb",
              "gloss": "to want"
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
              "surface": "نَطْبُخَ",
              "lemma": "طبخ",
              "features": "impf.1p",
              "root": "ط ب خ",
              "pos": "verb",
              "gloss": "to cook"
            },
            {
              "surface": "الطَّعَامَ",
              "lemma": "طعام",
              "features": "def.acc",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            },
            {
              "surface": "وَنَقْضِيَ",
              "lemma": "قضى",
              "features": "conj+impf.1p",
              "root": "ق ض ي",
              "pos": "verb",
              "gloss": "to spend (time)"
            },
            {
              "surface": "النَّهَارَ",
              "lemma": "نهار",
              "features": "def.acc",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "daytime"
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
              "surface": "النُّزْهَةِ",
              "lemma": "نزهة",
              "features": "def.gen",
              "root": "ن ز ه",
              "pos": "noun",
              "gloss": "outing, excursion"
            },
            {
              "surface": "وَالطَّبْخِ",
              "lemma": "طبخ",
              "features": "conj+def.gen",
              "root": "ط ب خ",
              "pos": "noun",
              "gloss": "cooking"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "أَيْنَ أَرَادَ دَاوُدُ وَعُمَرُ أَنْ يَذْهَبُوا؟",
          "options": [
            "إِلَى الْبُسْتَانِ الْكَبِيْرِ فِيْ وَسَطِ الْمَدِيْنَةِ",
            "إِلَى ضَاحِيَةٍ بَعِيْدَةٍ",
            "إِلَى الْمَسْجِدِ"
          ],
          "answer": 0,
          "qEn": "Where did Dāwūd and Umar want to go?",
          "optionsEn": [
            "To the big garden in the middle of the city",
            "To a distant outskirt",
            "To the mosque"
          ]
        },
        {
          "q": "لِمَاذَا فَضَّلَ سُلَيْمَانُ وَهَاشِمٌ الذَّهَابَ إِلَى الضَّاحِيَةِ؟",
          "options": [
            "لأَنَّهُمْ أَرَادُوا أَنْ يَطْبُخُوا الطَّعَامَ وَيَقْضُوا النَّهَارَ فِي النُّزْهَةِ",
            "لأَنَّ الْبُسْتَانَ مُغْلَقٌ",
            "لأَنَّهُمْ لَا يُحِبُّونَ الْمَدِيْنَةَ"
          ],
          "answer": 0,
          "qEn": "Why did Sulaymān and Hāshim prefer going to the outskirts?",
          "optionsEn": [
            "Because they wanted to cook food and spend the day outdoors",
            "Because the garden was closed",
            "Because they don't like the city"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "Our opinion settled on the outskirts. We hired a carriage and arrived at once, bringing rice, meat, spices, ghee, and vegetables, plus two pots and some vessels -- but since we knew there was a baker there, we decided to just buy bread rather than bother making it.",
      "sentences": [
        {
          "id": "qr1-6-011",
          "page": 44,
          "ar": "فَاسْتَقَرَّ رَأْيُنَا عَلَى الذَّهَابِ إِلَى الضَّاحِيَةِ، فَاكْتَرَيْنَا مَرْكَبَةً وَوَصَلْنَا مِنْ سَاعَتِنَا إِلَى الضَّاحِيَةِ.",
          "en": "So our opinion settled on going to the outskirts; we hired a carriage and arrived at once at the outskirts.",
          "tokens": [
            {
              "surface": "فَاسْتَقَرَّ",
              "lemma": "استقر",
              "features": "conj+perf.3ms",
              "root": "ق ر ر",
              "pos": "verb",
              "gloss": "to settle, be decided"
            },
            {
              "surface": "رَأْيُنَا",
              "lemma": "رأي",
              "features": "nom+1p",
              "root": "ر أ ي",
              "pos": "noun",
              "gloss": "opinion, view"
            },
            {
              "surface": "عَلَى",
              "lemma": "على",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, about"
            },
            {
              "surface": "الذَّهَابِ",
              "lemma": "ذهاب",
              "features": "def.gen",
              "root": "ذ ه ب",
              "pos": "noun",
              "gloss": "going, departure"
            },
            {
              "surface": "إِلَى",
              "lemma": "إلى",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "to"
            },
            {
              "surface": "الضَّاحِيَةِ",
              "lemma": "ضاحية",
              "features": "def.gen",
              "root": "ض ح و",
              "pos": "noun",
              "gloss": "outskirts, suburb"
            },
            {
              "surface": "فَاكْتَرَيْنَا",
              "lemma": "اكترى",
              "features": "conj+perf.1p",
              "root": "ك ر ي",
              "pos": "verb",
              "gloss": "to hire, rent"
            },
            {
              "surface": "مَرْكَبَةً",
              "lemma": "مركبة",
              "features": "indef.acc",
              "root": "ر ك ب",
              "pos": "noun",
              "gloss": "vehicle, carriage"
            },
            {
              "surface": "وَوَصَلْنَا",
              "lemma": "وصل",
              "features": "conj+perf.1p",
              "root": "و ص ل",
              "pos": "verb",
              "gloss": "to arrive"
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
              "surface": "سَاعَتِنَا",
              "lemma": "ساعة",
              "features": "gen+1p",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour"
            },
            {
              "surface": "إِلَى",
              "lemma": "إلى",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "to"
            },
            {
              "surface": "الضَّاحِيَةِ",
              "lemma": "ضاحية",
              "features": "def.gen",
              "root": "ض ح و",
              "pos": "noun",
              "gloss": "outskirts, suburb"
            }
          ]
        },
        {
          "id": "qr1-6-012",
          "page": 44,
          "ar": "وَكُنَّا أَخَذْنَا مَعَنَا الرُّزَّ وَاللَّحْمَ وَالتَّوَابِلَ وَالسَّمْنَ وَالْخُضَرَ وَأَخَذْنَا قِدْرَيْنِ وَأَوَانِيَ، وَكُنَّا عَلِمْنَا أَنَّ فِي الْمَحَلِّ خَبَّازاً فَقُلْنَا نَشْتَرِي الرَّغِيْفَ فَإِنَّ الرَّغِيْفَ فِيْهِ تَعَبٌ.",
          "en": "We had brought with us rice, meat, spices, ghee, and vegetables, and we took two pots and some vessels; and since we knew there was a baker in the place, we said we'd buy the bread -- for making bread ourselves is a bother.",
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
              "surface": "أَخَذْنَا",
              "lemma": "أخذ",
              "features": "perf.1p",
              "root": "أ خ ذ",
              "pos": "verb",
              "gloss": "to take"
            },
            {
              "surface": "مَعَنَا",
              "lemma": "مع",
              "features": "prep+1p",
              "root": "",
              "pos": "prep",
              "gloss": "with"
            },
            {
              "surface": "الرُّزَّ",
              "lemma": "رز",
              "features": "def.acc",
              "root": "",
              "pos": "noun",
              "gloss": "rice"
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
              "surface": "وَالتَّوَابِلَ",
              "lemma": "توابل",
              "features": "conj+pl.def.acc",
              "root": "ت ب ل",
              "pos": "noun",
              "gloss": "spices"
            },
            {
              "surface": "وَالسَّمْنَ",
              "lemma": "سمن",
              "features": "conj+def.acc",
              "root": "س م ن",
              "pos": "noun",
              "gloss": "ghee, clarified butter"
            },
            {
              "surface": "وَالْخُضَرَ",
              "lemma": "خضر",
              "features": "conj+def.acc",
              "root": "خ ض ر",
              "pos": "noun",
              "gloss": "vegetables, greens"
            },
            {
              "surface": "وَأَخَذْنَا",
              "lemma": "أخذ",
              "features": "conj+perf.1p",
              "root": "أ خ ذ",
              "pos": "verb",
              "gloss": "to take"
            },
            {
              "surface": "قِدْرَيْنِ",
              "lemma": "قدر",
              "features": "du.indef.acc",
              "root": "ق د ر",
              "pos": "noun",
              "gloss": "pot, cooking-pot"
            },
            {
              "surface": "وَأَوَانِيَ",
              "lemma": "إناء",
              "features": "conj+pl.indef.acc",
              "root": "إ ن ي",
              "pos": "noun",
              "gloss": "vessel, container"
            },
            {
              "surface": "وَكُنَّا",
              "lemma": "كان",
              "features": "conj+perf.1p",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "عَلِمْنَا",
              "lemma": "علم",
              "features": "perf.1p",
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
              "surface": "فِي",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الْمَحَلِّ",
              "lemma": "محل",
              "features": "def.gen",
              "root": "ح ل ل",
              "pos": "noun",
              "gloss": "place, shop"
            },
            {
              "surface": "خَبَّازاً",
              "lemma": "خباز",
              "features": "indef.acc",
              "root": "خ ب ز",
              "pos": "noun",
              "gloss": "baker"
            },
            {
              "surface": "فَقُلْنَا",
              "lemma": "قال",
              "features": "conj+perf.1p",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "نَشْتَرِي",
              "lemma": "اشترى",
              "features": "impf.1p",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
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
              "surface": "فَإِنَّ",
              "lemma": "أن",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "that, because"
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
              "surface": "فِيْهِ",
              "lemma": "في",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "تَعَبٌ",
              "lemma": "تعب",
              "features": "indef.nom",
              "root": "ت ع ب",
              "pos": "noun",
              "gloss": "fatigue, trouble"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا ذَهَبُوا إِلَى الضَّاحِيَةِ؟",
          "options": [
            "بِمَرْكَبَةٍ اكْتَرَوْهَا",
            "مَاشِيْنَ عَلَى الأَقْدَامِ",
            "بِالْقِطَارِ"
          ],
          "answer": 0,
          "qEn": "What did they travel to the outskirts by?",
          "optionsEn": [
            "A carriage they hired",
            "On foot",
            "By train"
          ]
        },
        {
          "q": "لِمَاذَا لَمْ يَخْبِزُوا الرَّغِيْفَ بِأَنْفُسِهِمْ؟",
          "options": [
            "لأَنَّهُمْ عَلِمُوا أَنَّ فِي الْمَحَلِّ خَبَّازاً وَفِيْهِ تَعَبٌ",
            "لأَنَّهُمْ لَمْ يَأْخُذُوا دَقِيْقاً",
            "لأَنَّ الْخُبْزَ مُحَرَّمٌ"
          ],
          "answer": 0,
          "qEn": "Why didn't they bake the bread themselves?",
          "optionsEn": [
            "Because they knew there was a baker in the place, and it's a bother",
            "Because they hadn't brought flour",
            "Because bread is forbidden"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "They chose a shady spot. Umar and Hāshim, good cooks, took charge of cooking, helped by Dāwūd and Sulaymān; the writer fetched firewood from a nearby forest, Khalid pounded the spices, and the writer bought the loaves from the baker. The food was ready at eleven, and -- overcome by hunger -- they ate it eagerly; it was tasty and delicious.",
      "sentences": [
        {
          "id": "qr1-6-013",
          "page": 45,
          "ar": "اخْتَرْنَا مَكَاناً ظَلِيْلاً وَكَانَ السَّيِّدُ عُمَرُ وَالسَّيِّدُ هَاشِمُ يُحْسِنَانِ الطَّبْخَ فَتَوَلَّيَا أَمْرَ الطَّبْخِ وَسَاعَدَهُمَا دَاوُدُ وَسُلَيْمَانُ.",
          "en": "We chose a shady spot; and since Mr. Umar and Mr. Hāshim were good at cooking, they took charge of the cooking, and Dāwūd and Sulaymān helped them.",
          "tokens": [
            {
              "surface": "اخْتَرْنَا",
              "lemma": "اختار",
              "features": "perf.1p",
              "root": "خ ي ر",
              "pos": "verb",
              "gloss": "to choose"
            },
            {
              "surface": "مَكَاناً",
              "lemma": "مكان",
              "features": "indef.acc",
              "root": "ك و ن",
              "pos": "noun",
              "gloss": "place"
            },
            {
              "surface": "ظَلِيْلاً",
              "lemma": "ظليل",
              "features": "indef.acc",
              "root": "ظ ل ل",
              "pos": "adj",
              "gloss": "shady"
            },
            {
              "surface": "وَكَانَ",
              "lemma": "كان",
              "features": "conj+perf.3ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "السَّيِّدُ",
              "lemma": "سيد",
              "features": "def.nom",
              "root": "س و د",
              "pos": "noun",
              "gloss": "master, sir"
            },
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
            },
            {
              "surface": "وَالسَّيِّدُ",
              "lemma": "سيد",
              "features": "conj+def.nom",
              "root": "س و د",
              "pos": "noun",
              "gloss": "master, sir"
            },
            {
              "surface": "هَاشِمُ",
              "lemma": "هاشم",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Hāshim (name)"
            },
            {
              "surface": "يُحْسِنَانِ",
              "lemma": "أحسن",
              "features": "impf.3md",
              "root": "ح س ن",
              "pos": "verb",
              "gloss": "to be good at, do well"
            },
            {
              "surface": "الطَّبْخَ",
              "lemma": "طبخ",
              "features": "def.acc",
              "root": "ط ب خ",
              "pos": "noun",
              "gloss": "cooking"
            },
            {
              "surface": "فَتَوَلَّيَا",
              "lemma": "تولى",
              "features": "conj+perf.3md",
              "root": "و ل ي",
              "pos": "verb",
              "gloss": "to take charge of, assume"
            },
            {
              "surface": "أَمْرَ",
              "lemma": "أمر",
              "features": "acc.constr",
              "root": "أ م ر",
              "pos": "noun",
              "gloss": "matter, affair"
            },
            {
              "surface": "الطَّبْخِ",
              "lemma": "طبخ",
              "features": "def.gen",
              "root": "ط ب خ",
              "pos": "noun",
              "gloss": "cooking"
            },
            {
              "surface": "وَسَاعَدَهُمَا",
              "lemma": "ساعد",
              "features": "conj+perf.3ms+3md",
              "root": "س ع د",
              "pos": "verb",
              "gloss": "to help"
            },
            {
              "surface": "دَاوُدُ",
              "lemma": "داود",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Dāwūd (name)"
            },
            {
              "surface": "وَسُلَيْمَانُ",
              "lemma": "سليمان",
              "features": "conj+nom",
              "root": "",
              "pos": "proper",
              "gloss": "Sulaymān (name)"
            }
          ]
        },
        {
          "id": "qr1-6-014",
          "page": 45,
          "ar": "وَتَوَلَّيْتُ أَمْرَ الْحَطَبِ فَذَهَبْتُ إِلَى الْغَابَةِ الْقَرِيْبَةِ وَجِئْتُ بِالْحَطَبِ مِنْ سَاعَتِيْ، وَدَقَّ خَالِدٌ التَّوَابِلَ وَذَهَبْتُ أَنَا إِلَى الْخَبَّازِ فَاشْتَرَيْتُ الأَرْغِفَةَ.",
          "en": "I took charge of the firewood, so I went to the nearby forest and brought back firewood at once; Khalid pounded the spices, and I went to the baker and bought the loaves.",
          "tokens": [
            {
              "surface": "وَتَوَلَّيْتُ",
              "lemma": "تولى",
              "features": "conj+perf.1s",
              "root": "و ل ي",
              "pos": "verb",
              "gloss": "to take charge of, assume"
            },
            {
              "surface": "أَمْرَ",
              "lemma": "أمر",
              "features": "acc.constr",
              "root": "أ م ر",
              "pos": "noun",
              "gloss": "matter, affair"
            },
            {
              "surface": "الْحَطَبِ",
              "lemma": "حطب",
              "features": "def.gen",
              "root": "ح ط ب",
              "pos": "noun",
              "gloss": "firewood"
            },
            {
              "surface": "فَذَهَبْتُ",
              "lemma": "ذهب",
              "features": "conj+perf.1s",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
            },
            {
              "surface": "إِلَى",
              "lemma": "إلى",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "to"
            },
            {
              "surface": "الْغَابَةِ",
              "lemma": "غابة",
              "features": "def.gen",
              "root": "غ ي ب",
              "pos": "noun",
              "gloss": "forest, grove"
            },
            {
              "surface": "الْقَرِيْبَةِ",
              "lemma": "قريب",
              "features": "def.gen.f",
              "root": "ق ر ب",
              "pos": "adj",
              "gloss": "near; relative"
            },
            {
              "surface": "وَجِئْتُ",
              "lemma": "جاء",
              "features": "conj+perf.1s",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            },
            {
              "surface": "بِالْحَطَبِ",
              "lemma": "حطب",
              "features": "prep+def.gen",
              "root": "ح ط ب",
              "pos": "noun",
              "gloss": "firewood"
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
              "surface": "سَاعَتِيْ",
              "lemma": "ساعة",
              "features": "gen+1s",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour"
            },
            {
              "surface": "وَدَقَّ",
              "lemma": "دق",
              "features": "conj+perf.3ms",
              "root": "د ق ق",
              "pos": "verb",
              "gloss": "to pound, crush"
            },
            {
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khalid (name)"
            },
            {
              "surface": "التَّوَابِلَ",
              "lemma": "توابل",
              "features": "pl.def.acc",
              "root": "ت ب ل",
              "pos": "noun",
              "gloss": "spices"
            },
            {
              "surface": "وَذَهَبْتُ",
              "lemma": "ذهب",
              "features": "conj+perf.1s",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
            },
            {
              "surface": "أَنَا",
              "lemma": "أنا",
              "features": "nom.1s",
              "root": "",
              "pos": "noun",
              "gloss": "I"
            },
            {
              "surface": "إِلَى",
              "lemma": "إلى",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "to"
            },
            {
              "surface": "الْخَبَّازِ",
              "lemma": "خباز",
              "features": "def.gen",
              "root": "خ ب ز",
              "pos": "noun",
              "gloss": "baker"
            },
            {
              "surface": "فَاشْتَرَيْتُ",
              "lemma": "اشترى",
              "features": "conj+perf.1s",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            },
            {
              "surface": "الأَرْغِفَةَ",
              "lemma": "رغيف",
              "features": "pl.def.acc",
              "root": "ر غ ف",
              "pos": "noun",
              "gloss": "loaf (of bread)"
            }
          ]
        },
        {
          "id": "qr1-6-015",
          "page": 45,
          "ar": "وَأَدْرَكَ الطَّعَامُ فِي السَّاعَةِ الْحَادِيَةَ عَشْرَةَ، وَقَدْ غَلَبَنَا الْجُوْعُ وَاشْتَهَيْنَا الطَّعَامَ فَأَكَلْنَا الطَّعَامَ بِرَغْبَةٍ، وَكَانَ الطَّعَامُ شَهِيّاً لَذِيْذاً.",
          "en": "The food was ready at eleven o'clock; hunger had overcome us and we craved it, so we ate it eagerly, and the food was tasty and delicious.",
          "tokens": [
            {
              "surface": "وَأَدْرَكَ",
              "lemma": "أدرك",
              "features": "conj+perf.3ms",
              "root": "د ر ك",
              "pos": "verb",
              "gloss": "to be ready, done (of food)"
            },
            {
              "surface": "الطَّعَامُ",
              "lemma": "طعام",
              "features": "def.nom",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
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
              "gloss": "hour"
            },
            {
              "surface": "الْحَادِيَةَ",
              "lemma": "حادي",
              "features": "def.acc.f",
              "root": "ح د ي",
              "pos": "num",
              "gloss": "first (in 'eleventh')"
            },
            {
              "surface": "عَشْرَةَ",
              "lemma": "عشر",
              "features": "acc.f",
              "root": "ع ش ر",
              "pos": "num",
              "gloss": "-teen (in 'eleventh')"
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
              "surface": "غَلَبَنَا",
              "lemma": "غلب",
              "features": "perf.3ms+1p",
              "root": "غ ل ب",
              "pos": "verb",
              "gloss": "to overcome"
            },
            {
              "surface": "الْجُوْعُ",
              "lemma": "جوع",
              "features": "def.nom",
              "root": "ج و ع",
              "pos": "noun",
              "gloss": "hunger"
            },
            {
              "surface": "وَاشْتَهَيْنَا",
              "lemma": "اشتهى",
              "features": "conj+perf.1p",
              "root": "ش ه و",
              "pos": "verb",
              "gloss": "to desire, crave"
            },
            {
              "surface": "الطَّعَامَ",
              "lemma": "طعام",
              "features": "def.acc",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            },
            {
              "surface": "فَأَكَلْنَا",
              "lemma": "أكل",
              "features": "conj+perf.1p",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            },
            {
              "surface": "الطَّعَامَ",
              "lemma": "طعام",
              "features": "def.acc",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            },
            {
              "surface": "بِرَغْبَةٍ",
              "lemma": "رغبة",
              "features": "prep+indef.gen",
              "root": "ر غ ب",
              "pos": "noun",
              "gloss": "desire, eagerness"
            },
            {
              "surface": "وَكَانَ",
              "lemma": "كان",
              "features": "conj+perf.3ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "الطَّعَامُ",
              "lemma": "طعام",
              "features": "def.nom",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            },
            {
              "surface": "شَهِيّاً",
              "lemma": "شهي",
              "features": "indef.acc",
              "root": "ش ه و",
              "pos": "adj",
              "gloss": "tasty, appetizing"
            },
            {
              "surface": "لَذِيْذاً",
              "lemma": "لذيذ",
              "features": "indef.acc",
              "root": "ل ذ ذ",
              "pos": "adj",
              "gloss": "delicious"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنْ تَوَلَّى أَمْرَ الطَّبْخِ؟",
          "options": [
            "السَّيِّدُ عُمَرُ وَالسَّيِّدُ هَاشِمٌ",
            "دَاوُدُ وَسُلَيْمَانُ",
            "الْكَاتِبُ وَخَالِدٌ"
          ],
          "answer": 0,
          "qEn": "Who took charge of the cooking?",
          "optionsEn": [
            "Mr. Umar and Mr. Hāshim",
            "Dāwūd and Sulaymān",
            "The writer and Khalid"
          ]
        },
        {
          "q": "فِي أَيَّةِ سَاعَةٍ أَدْرَكَ الطَّعَامُ؟",
          "options": [
            "فِي السَّاعَةِ الْحَادِيَةَ عَشْرَةَ",
            "فِي السَّاعَةِ الثَّامِنَةِ",
            "بَعْدَ الظُّهْرِ"
          ],
          "answer": 0,
          "qEn": "At what hour was the food ready?",
          "optionsEn": [
            "At eleven o'clock",
            "At eight o'clock",
            "After Ẓuhr"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "They sat talking until the time for Ẓuhr came, so the writer called the adhān and they prayed together; afterwards they went out to visit some sites, and returned to town at ʿAṣr, happy.",
      "sentences": [
        {
          "id": "qr1-6-016",
          "page": 45,
          "ar": "وَجَلَسْنَا نَتَحَدَّثُ حَتَّىٰ كَانَ وَقْتُ الظُّهْرِ فَأَذَّنْتُ وَصَلَّيْنَا جَمَاعَةً.",
          "en": "We sat talking until the time of Ẓuhr came, so I gave the call to prayer and we prayed together.",
          "tokens": [
            {
              "surface": "وَجَلَسْنَا",
              "lemma": "جلس",
              "features": "conj+perf.1p",
              "root": "ج ل س",
              "pos": "verb",
              "gloss": "to sit"
            },
            {
              "surface": "نَتَحَدَّثُ",
              "lemma": "تحدث",
              "features": "impf.1p",
              "root": "ح د ث",
              "pos": "verb",
              "gloss": "to converse, talk"
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
              "surface": "كَانَ",
              "lemma": "كان",
              "features": "perf.3ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "وَقْتُ",
              "lemma": "وقت",
              "features": "nom.constr",
              "root": "و ق ت",
              "pos": "noun",
              "gloss": "time"
            },
            {
              "surface": "الظُّهْرِ",
              "lemma": "ظهر",
              "features": "def.gen",
              "root": "ظ ه ر",
              "pos": "noun",
              "gloss": "Ẓuhr, midday"
            },
            {
              "surface": "فَأَذَّنْتُ",
              "lemma": "أذن",
              "features": "conj+perf.1s",
              "root": "أ ذ ن",
              "pos": "verb",
              "gloss": "to give the call to prayer"
            },
            {
              "surface": "وَصَلَّيْنَا",
              "lemma": "صلى",
              "features": "conj+perf.1p",
              "root": "ص ل و",
              "pos": "verb",
              "gloss": "to pray"
            },
            {
              "surface": "جَمَاعَةً",
              "lemma": "جماعة",
              "features": "indef.acc",
              "root": "ج م ع",
              "pos": "noun",
              "gloss": "congregation"
            }
          ]
        },
        {
          "id": "qr1-6-017",
          "page": 45,
          "ar": "وَخَرَجْنَا بَعْدَ الصَّلاَةِ نَزُوْرُ بَعْضَ الآثَارِ، وَفِي الْعَصْرِ رَجَعْنَا إِلَى الْبَلَدِ مَسْرُوْرِيْنَ.",
          "en": "After the prayer we went out to visit some sites, and at ʿAṣr we returned to town, happy.",
          "tokens": [
            {
              "surface": "وَخَرَجْنَا",
              "lemma": "خرج",
              "features": "conj+perf.1p",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
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
              "surface": "الصَّلاَةِ",
              "lemma": "صلاة",
              "features": "def.gen",
              "root": "ص ل و",
              "pos": "noun",
              "gloss": "prayer"
            },
            {
              "surface": "نَزُوْرُ",
              "lemma": "زار",
              "features": "impf.1p",
              "root": "ز و ر",
              "pos": "verb",
              "gloss": "to visit"
            },
            {
              "surface": "بَعْضَ",
              "lemma": "بعض",
              "features": "acc.constr",
              "root": "ب ع ض",
              "pos": "noun",
              "gloss": "some"
            },
            {
              "surface": "الآثَارِ",
              "lemma": "أثر",
              "features": "pl.def.gen",
              "root": "أ ث ر",
              "pos": "noun",
              "gloss": "trace, [historical/archaeological] site"
            },
            {
              "surface": "وَفِي",
              "lemma": "في",
              "features": "conj+prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الْعَصْرِ",
              "lemma": "عصر",
              "features": "def.gen",
              "root": "ع ص ر",
              "pos": "noun",
              "gloss": "ʿAṣr, afternoon"
            },
            {
              "surface": "رَجَعْنَا",
              "lemma": "رجع",
              "features": "perf.1p",
              "root": "ر ج ع",
              "pos": "verb",
              "gloss": "to return"
            },
            {
              "surface": "إِلَى",
              "lemma": "إلى",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "to"
            },
            {
              "surface": "الْبَلَدِ",
              "lemma": "بلد",
              "features": "def.gen",
              "root": "ب ل د",
              "pos": "noun",
              "gloss": "town, country"
            },
            {
              "surface": "مَسْرُوْرِيْنَ",
              "lemma": "مسرور",
              "features": "pl.acc",
              "root": "س ر ر",
              "pos": "adj",
              "gloss": "happy, pleased"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنْ أَذَّنَ لِصَلاَةِ الظُّهْرِ؟",
          "options": [
            "الْكَاتِبُ",
            "دَاوُدُ",
            "عُمَرُ"
          ],
          "answer": 0,
          "qEn": "Who gave the call to prayer for Ẓuhr?",
          "optionsEn": [
            "The writer",
            "Dāwūd",
            "Umar"
          ]
        },
        {
          "q": "مَتَى رَجَعُوا إِلَى الْبَلَدِ؟",
          "options": [
            "فِي الْعَصْرِ",
            "فِي الْمَغْرِبِ",
            "بَعْدَ الْعِشَاءِ"
          ],
          "answer": 0,
          "qEn": "When did they return to town?",
          "optionsEn": [
            "At ʿAṣr",
            "At Maghrib",
            "After ʿIshāʾ"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "أَلَا",
        "post": "إِلَىٰ بُسْتَانٍ نَرْتَعُ وَنَلْعَبُ؟",
        "en": "Shall we not go out to a garden to roam and play?",
        "options": [
          "نَخْرُجُ",
          "يَخْرُجُ",
          "تَخْرُجُ",
          "أَخْرُجُ"
        ],
        "answer": 0,
        "rationales": [
          "1st person plural — we go out.",
          "3rd masculine singular — he goes out.",
          "2nd masc. / 3rd fem. singular — wrong person.",
          "1st person singular — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَلٰكِنْ",
        "post": "أَخَاكَ سُلَيْمَانَ لَعَلَّهُمْ يَخْرُجُوْنَ مَعَنَا",
        "en": "But talk to your brother Sulaymān; perhaps they'll come out with us.",
        "options": [
          "كَلِّمْ",
          "تُكَلِّمُ",
          "أُكَلِّمُ",
          "كَلَّمَ"
        ],
        "answer": 0,
        "rationales": [
          "Imperative, 2nd masculine singular — speak to!",
          "Imperfect — not the imperative needed here.",
          "1st person singular — wrong person.",
          "Perfect, 3rd masc. singular — wrong mood."
        ]
      },
      {
        "type": "cloze",
        "pre": "هَلْ",
        "post": "بُسْتَاناً مِنْ بَسَاتِيْنِ الْمَدِيْنَةِ؟",
        "en": "Shall we head for a garden among the city's gardens?",
        "options": [
          "نَقْصِدُ",
          "يَقْصِدُ",
          "تَقْصِدُ",
          "أَقْصِدُ"
        ],
        "answer": 0,
        "rationales": [
          "1st person plural — we head for.",
          "3rd masculine singular — wrong person.",
          "2nd masc. / 3rd fem. singular — wrong person.",
          "1st person singular — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "بَلْ",
        "post": "إِلَىٰ بَعْضِ الضَّوَاحِيْ",
        "en": "Rather, let's head for one of the outskirts.",
        "options": [
          "نَتَوَجَّهُ",
          "يَتَوَجَّهُ",
          "تَتَوَجَّهُ",
          "أَتَوَجَّهُ"
        ],
        "answer": 0,
        "rationales": [
          "1st person plural — we head towards.",
          "3rd masculine singular — wrong person.",
          "2nd masc. / 3rd fem. singular — wrong person.",
          "1st person singular — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "لأَنَّا نُرِيْدُ أَنْ",
        "post": "الطَّعَامَ وَنَقْضِيَ النَّهَارَ فِي النُّزْهَةِ",
        "en": "Because we want to cook the food and spend the day in an outing.",
        "options": [
          "نَطْبُخَ",
          "يَطْبُخَ",
          "تَطْبُخَ",
          "أَطْبُخَ"
        ],
        "answer": 0,
        "rationales": [
          "1st person plural — we cook.",
          "3rd masculine singular — wrong person.",
          "2nd masc. / 3rd fem. singular — wrong person.",
          "1st person singular — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَ",
        "post": "مَرْكَبَةً وَوَصَلْنَا مِنْ سَاعَتِنَا",
        "en": "So we hired a carriage and arrived at once.",
        "options": [
          "اكْتَرَيْنَا",
          "اكْتَرَى",
          "يَكْتَرِي",
          "اكْتَرَيْتُ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 1st person plural — we hired.",
          "Perfect, 3rd masc. singular — wrong person.",
          "Imperfect — wrong tense.",
          "Perfect, 1st person singular — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَكُنَّا",
        "post": "أَنَّ فِي الْمَحَلِّ خَبَّازاً",
        "en": "And we had known there was a baker in the place.",
        "options": [
          "عَلِمْنَا",
          "عَلِمَ",
          "عَلِمْتُ",
          "يَعْلَمُ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 1st person plural — we knew.",
          "Perfect, 3rd masc. singular — wrong person.",
          "Perfect, 1st person singular — wrong number.",
          "Imperfect — wrong tense."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَ",
        "post": "إِلَى الْغَابَةِ الْقَرِيْبَةِ وَجِئْتُ بِالْحَطَبِ",
        "en": "So I went to the nearby forest and brought back firewood.",
        "options": [
          "ذَهَبْتُ",
          "ذَهَبَ",
          "ذَهَبْنَا",
          "يَذْهَبُ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 1st person singular — I went.",
          "Perfect, 3rd masc. singular — wrong person.",
          "Perfect, 1st person plural — wrong number.",
          "Imperfect — wrong tense."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَقَدْ غَلَبَنَا الْجُوْعُ وَ",
        "post": "الطَّعَامَ",
        "en": "And hunger had overcome us and we craved the food.",
        "options": [
          "اشْتَهَيْنَا",
          "اشْتَهَى",
          "اشْتَهَيْتُ",
          "يَشْتَهِي"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 1st person plural — we craved.",
          "Perfect, 3rd masc. singular — wrong person.",
          "Perfect, 1st person singular — wrong number.",
          "Imperfect — wrong tense."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَ",
        "post": "بَعْدَ الصَّلاَةِ نَزُوْرُ بَعْضَ الآثَارِ",
        "en": "And we went out after the prayer to visit some sites.",
        "options": [
          "خَرَجْنَا",
          "خَرَجَ",
          "خَرَجْتُ",
          "يَخْرُجُ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 1st person plural — we went out.",
          "Perfect, 3rd masc. singular — wrong person.",
          "Perfect, 1st person singular — wrong number.",
          "Imperfect — wrong tense."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "نَخْرُجُ إِلَىٰ بُسْتَانٍ",
        "pre": "",
        "post": "إِلَىٰ بُسْتَانٍ",
        "targetPerson": "هُوَ",
        "targetEn": "he",
        "options": [
          "يَخْرُجُ",
          "نَخْرُجُ",
          "تَخْرُجُ",
          "يَخْرُجُوْنَ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masculine singular — he goes out.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "نَقْصِدُ بُسْتَاناً",
        "pre": "",
        "post": "بُسْتَاناً",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "أَقْصِدُ",
          "نَقْصِدُ",
          "يَقْصِدُ",
          "تَقْصِدُ"
        ],
        "answer": 0,
        "rationales": [
          "1st person singular — I head for.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "نَتَوَجَّهُ إِلَىٰ ضَاحِيَةٍ",
        "pre": "",
        "post": "إِلَىٰ ضَاحِيَةٍ",
        "targetPerson": "هُمْ",
        "targetEn": "they (m.)",
        "options": [
          "يَتَوَجَّهُوْنَ",
          "نَتَوَجَّهُ",
          "يَتَوَجَّهُ",
          "تَتَوَجَّهُ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masculine plural — they head towards.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "اكْتَرَيْنَا مَرْكَبَةً",
        "pre": "",
        "post": "مَرْكَبَةً",
        "targetPerson": "هُوَ",
        "targetEn": "he",
        "options": [
          "اكْتَرَى",
          "اكْتَرَيْنَا",
          "اكْتَرَيْتُ",
          "يَكْتَرِي"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 3rd masculine singular — he hired.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "عَلِمْنَا أَنَّ فِي الْمَحَلِّ خَبَّازاً",
        "pre": "عَلِمْنَا",
        "post": "أَنَّ فِي الْمَحَلِّ خَبَّازاً",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "عَلِمْتُ",
          "عَلِمْنَا",
          "عَلِمَ",
          "عَلِمَتْ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 1st person singular — I knew.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "ذَهَبْتُ إِلَى الْغَابَةِ",
        "pre": "",
        "post": "إِلَى الْغَابَةِ",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "ذَهَبَتْ",
          "ذَهَبْتُ",
          "ذَهَبَ",
          "ذَهَبْنَا"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 3rd feminine singular — she went.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "اشْتَهَيْنَا الطَّعَامَ",
        "pre": "",
        "post": "الطَّعَامَ",
        "targetPerson": "هُمْ",
        "targetEn": "they (m.)",
        "options": [
          "اشْتَهَوْا",
          "اشْتَهَيْنَا",
          "اشْتَهَى",
          "اشْتَهَتْ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 3rd masculine plural — they craved.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "خَرَجْنَا بَعْدَ الصَّلاَةِ",
        "pre": "",
        "post": "بَعْدَ الصَّلاَةِ",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "خَرَجْتُ",
          "خَرَجْنَا",
          "خَرَجَ",
          "خَرَجَتْ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 1st person singular — I went out.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

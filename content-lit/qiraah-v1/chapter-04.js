// القراءة الراشدة, volume one, chapter four -- في السوق.
//
// Follows the shape of chapter-01.js/chapter-02.js -- see ../CHAPTER-FORMAT.md
// for the full specification. Hand-authored directly from the scanned pages
// (qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed pages 37-40); there
// is no JSON intermediate (see PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md --
// the pipeline no longer emits JSON).
//
// FORMAT ADAPTATION -- dialogue: this is the book's first two-speaker
// dialogue chapter (Umar and Khalid touring the market, plus a shopkeeper
// partway through). CHAPTER-FORMAT.md's `sentences` schema has no dedicated
// "speaker" field, so each speaker's line is folded into the `ar` text
// itself as its own sentence, e.g. "عُمَرُ: هَلْ زُرْتَ سُوْقَ هٰذَا الْبَلَدِ..."
// -- exactly analogous to how chapter-02.js already folds quoted dialogue
// tags (قَالَ لِيْ مَرَّةً: ...) into sentence text. The speaker label itself is
// tokenized like any other phrase (proper name for عُمَرُ/خَالِدٌ, content
// words صَاحِبُ + الدُّكَّانِ for the shopkeeper) and the trailing colon is
// punctuation, stripped like any other mark for reconstruction purposes.
// One turn (qr1-4-011/012) was split across two sentences at a mid-turn
// imperative ("تَعَالَ!") because it reads as two separate beats; every other
// turn is kept as a single sentence, matching the user-approved adaptation.
// Dialogue is close enough to prose that the workshop (cloze + shift) needed
// no special treatment, unlike the verse adaptation in chapter-03.js.
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch4",
  "number": 4,
  "title": {
    "ar": "فِي السُّوْقِ",
    "en": "In the Market"
  },
  "pages": [
    37,
    38,
    39,
    40
  ],
  "register": "dialogue",
  "newWords": [
    "بلد",
    "غريب",
    "دكان",
    "ساوم",
    "رخيص",
    "قماش",
    "حذاء",
    "ثمن",
    "نزل",
    "كذب",
    "مطعم",
    "قرية"
  ],
  "lemmas": {
    "عمر": {
      "root": "—",
      "pos": "proper",
      "gloss": "Umar (name)",
      "content": false
    },
    "هل": {
      "root": "—",
      "pos": "part",
      "gloss": "[yes/no question particle]",
      "content": false
    },
    "زار": {
      "root": "ز و ر",
      "pos": "verb",
      "gloss": "to visit",
      "content": true
    },
    "سوق": {
      "root": "س و ق",
      "pos": "noun",
      "gloss": "market",
      "content": true
    },
    "هذا": {
      "root": "—",
      "pos": "dem",
      "gloss": "this (m.)",
      "content": false
    },
    "بلد": {
      "root": "ب ل د",
      "pos": "noun",
      "gloss": "town, country",
      "content": true
    },
    "يا": {
      "root": "—",
      "pos": "part",
      "gloss": "O (vocative)",
      "content": false
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
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "not",
      "content": false
    },
    "أخ": {
      "root": "أ خ و",
      "pos": "noun",
      "gloss": "brother",
      "content": true
    },
    "إن": {
      "root": "—",
      "pos": "part",
      "gloss": "if; indeed, verily",
      "content": false
    },
    "غريب": {
      "root": "غ ر ب",
      "pos": "adj",
      "gloss": "stranger, foreign",
      "content": true
    },
    "جديد": {
      "root": "ج د د",
      "pos": "adj",
      "gloss": "new",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "عرف": {
      "root": "ع ر ف",
      "pos": "verb",
      "gloss": "to know",
      "content": true
    },
    "طريق": {
      "root": "ط ر ق",
      "pos": "noun",
      "gloss": "road, way",
      "content": true
    },
    "تعال": {
      "root": "—",
      "pos": "verb",
      "gloss": "come! (irregular imperative)",
      "content": true
    },
    "مع": {
      "root": "—",
      "pos": "prep",
      "gloss": "with",
      "content": false
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
      "gloss": "to",
      "content": false
    },
    "اشترى": {
      "root": "ش ر ي",
      "pos": "verb",
      "gloss": "to buy",
      "content": true
    },
    "بعض": {
      "root": "ب ع ض",
      "pos": "noun",
      "gloss": "some",
      "content": true
    },
    "حاجة": {
      "root": "ح و ج",
      "pos": "noun",
      "gloss": "need, thing needed",
      "content": true
    },
    "رجع": {
      "root": "ر ج ع",
      "pos": "verb",
      "gloss": "to return",
      "content": true
    },
    "قبل": {
      "root": "ق ب ل",
      "pos": "prep",
      "gloss": "before",
      "content": false
    },
    "مغرب": {
      "root": "غ ر ب",
      "pos": "noun",
      "gloss": "Maghrib, sunset",
      "content": true
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
    "غير": {
      "root": "غ ي ر",
      "pos": "noun",
      "gloss": "other than, not",
      "content": true
    },
    "بعيد": {
      "root": "ب ع د",
      "pos": "adj",
      "gloss": "far",
      "content": true
    },
    "ما": {
      "root": "—",
      "pos": "part",
      "gloss": "what; not",
      "content": false
    },
    "هذه": {
      "root": "—",
      "pos": "dem",
      "gloss": "this (f.)",
      "content": false
    },
    "كبير": {
      "root": "ك ب ر",
      "pos": "adj",
      "gloss": "big, large",
      "content": true
    },
    "دكان": {
      "root": "د ك ن",
      "pos": "noun",
      "gloss": "shop",
      "content": true
    },
    "نظيف": {
      "root": "ن ظ ف",
      "pos": "adj",
      "gloss": "clean",
      "content": true
    },
    "جميل": {
      "root": "ج م ل",
      "pos": "adj",
      "gloss": "beautiful, nice",
      "content": true
    },
    "يمين": {
      "root": "ي م ن",
      "pos": "noun",
      "gloss": "right (side)",
      "content": true
    },
    "فاكهاني": {
      "root": "ف ك ه",
      "pos": "noun",
      "gloss": "fruit-seller",
      "content": true
    },
    "ألا": {
      "root": "—",
      "pos": "part",
      "gloss": "isn't it that...? don't you...?",
      "content": false
    },
    "رأى": {
      "root": "ر أ ي",
      "pos": "verb",
      "gloss": "to see",
      "content": true
    },
    "فاكهة": {
      "root": "ف ك ه",
      "pos": "noun",
      "gloss": "fruit",
      "content": true
    },
    "ناس": {
      "root": "ن و س",
      "pos": "noun",
      "gloss": "people",
      "content": true
    },
    "ساوم": {
      "root": "س و م",
      "pos": "verb",
      "gloss": "to haggle, bargain",
      "content": true,
      "book_note": "يُسَاوِمُونَ (سَاوَمَ يُسَاوِمُ مُسَاوَمَةً): يُفَاوِضُونَ فِي الْبَيْعِ وَالشِّرَاءِ (to negotiate over buying and selling)"
    },
    "أنا": {
      "root": "—",
      "pos": "noun",
      "gloss": "I",
      "content": false
    },
    "أراد": {
      "root": "ر و د",
      "pos": "verb",
      "gloss": "to want",
      "content": true
    },
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that, because",
      "content": false
    },
    "شيء": {
      "root": "ش ي أ",
      "pos": "noun",
      "gloss": "thing",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "موز": {
      "root": "م و ز",
      "pos": "noun",
      "gloss": "banana",
      "content": true
    },
    "جوافة": {
      "root": "—",
      "pos": "noun",
      "gloss": "guava",
      "content": true
    },
    "برتقال": {
      "root": "—",
      "pos": "noun",
      "gloss": "orange",
      "content": true
    },
    "دعا": {
      "root": "د ع و",
      "pos": "verb",
      "gloss": "to invite, call",
      "content": true
    },
    "فطور": {
      "root": "ف ط ر",
      "pos": "noun",
      "gloss": "breakfast",
      "content": true
    },
    "بكرة": {
      "root": "ب ك ر",
      "pos": "noun",
      "gloss": "early morning, tomorrow morning",
      "content": true,
      "book_note": "بُكْرَةً: أَوَّلُ النَّهَارِ إِلَىٰ طُلُوعِ الشَّمْسِ (the first part of the day, up to sunrise)"
    },
    "غالي": {
      "root": "غ ل و",
      "pos": "adj",
      "gloss": "expensive",
      "content": true
    },
    "جدا": {
      "root": "—",
      "pos": "adv",
      "gloss": "very",
      "content": false
    },
    "يوم": {
      "root": "ي و م",
      "pos": "noun",
      "gloss": "day",
      "content": true
    },
    "حامض": {
      "root": "ح م ض",
      "pos": "adj",
      "gloss": "sour",
      "content": true
    },
    "بأس": {
      "root": "ب أ س",
      "pos": "noun",
      "gloss": "harm",
      "content": true,
      "book_note": "لَا بَأْسَ بِهِ: لَا مَانِعَ أَوْ عَيْبَ فِيْهِ (there's no harm/objection in it)"
    },
    "تفضل": {
      "root": "ف ض ل",
      "pos": "verb",
      "gloss": "please, go ahead (imperative)",
      "content": true
    },
    "أحسن": {
      "root": "ح س ن",
      "pos": "adj",
      "gloss": "better, best",
      "content": true
    },
    "خضر": {
      "root": "خ ض ر",
      "pos": "noun",
      "gloss": "vegetables, greens",
      "content": true
    },
    "ثمار": {
      "root": "ث م ر",
      "pos": "noun",
      "gloss": "fruits, produce",
      "content": true
    },
    "كثير": {
      "root": "ك ث ر",
      "pos": "adj",
      "gloss": "much, many",
      "content": true
    },
    "رخيص": {
      "root": "ر خ ص",
      "pos": "adj",
      "gloss": "cheap",
      "content": true
    },
    "هو": {
      "root": "—",
      "pos": "noun",
      "gloss": "he, it",
      "content": false
    },
    "رأي": {
      "root": "ر أ ي",
      "pos": "noun",
      "gloss": "opinion, view",
      "content": true
    },
    "قماش": {
      "root": "ق م ش",
      "pos": "noun",
      "gloss": "cloth, fabric",
      "content": true
    },
    "كيف": {
      "root": "ك ي ف",
      "pos": "part",
      "gloss": "how",
      "content": false
    },
    "بسط": {
      "root": "ب س ط",
      "pos": "verb",
      "gloss": "to spread out, lay out",
      "content": true
    },
    "نوع": {
      "root": "ن و ع",
      "pos": "noun",
      "gloss": "kind, type",
      "content": true
    },
    "لمس": {
      "root": "ل م س",
      "pos": "verb",
      "gloss": "to touch",
      "content": true
    },
    "تاجر": {
      "root": "ت ج ر",
      "pos": "noun",
      "gloss": "merchant",
      "content": true
    },
    "حذاء": {
      "root": "ح ذ و",
      "pos": "noun",
      "gloss": "shoe",
      "content": true
    },
    "صاحب": {
      "root": "ص ح ب",
      "pos": "noun",
      "gloss": "owner, companion",
      "content": true
    },
    "فضل": {
      "root": "ف ض ل",
      "pos": "noun",
      "gloss": "favour, grace",
      "content": true
    },
    "خرج": {
      "root": "خ ر ج",
      "pos": "verb",
      "gloss": "to go out; (Form IV) to bring out, take out",
      "content": true
    },
    "ل": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to",
      "content": false
    },
    "مطابق": {
      "root": "ط ب ق",
      "pos": "adj",
      "gloss": "matching, fitting",
      "content": true,
      "book_note": "مُطَابِقاً لِشَيْءٍ: مُوَافِقاً لَهُ، لَيْسَ مُخْتَلِفاً عَنْهُ (corresponding to something, not different from it)"
    },
    "متين": {
      "root": "م ت ن",
      "pos": "adj",
      "gloss": "sturdy, strong",
      "content": true
    },
    "نعم": {
      "root": "—",
      "pos": "part",
      "gloss": "yes",
      "content": false
    },
    "لكن": {
      "root": "—",
      "pos": "part",
      "gloss": "but",
      "content": false
    },
    "واسع": {
      "root": "و س ع",
      "pos": "adj",
      "gloss": "wide, roomy",
      "content": true
    },
    "قليل": {
      "root": "ق ل ل",
      "pos": "adj",
      "gloss": "a little, few",
      "content": true
    },
    "آخر": {
      "root": "أ خ ر",
      "pos": "adj",
      "gloss": "other, another",
      "content": true
    },
    "تمام": {
      "root": "ت م م",
      "pos": "noun",
      "gloss": "completeness",
      "content": true
    },
    "كم": {
      "root": "—",
      "pos": "part",
      "gloss": "how much, how many",
      "content": false
    },
    "ست": {
      "root": "س ت ت",
      "pos": "num",
      "gloss": "six",
      "content": true
    },
    "ربية": {
      "root": "ر ب و",
      "pos": "noun",
      "gloss": "rupee",
      "content": true,
      "book_note": "رُبِّيَة (ج) رُبِّيَات: اِسْمُ الْعُمْلَةِ، تُسْتَعْمَلُ فِي الْهِنْدِ وَبَاكِسْتَان وَأَنْدُونِيسِيَا وَمَالِيزِيَا (a currency name used in India, Pakistan, Indonesia, and Malaysia)"
    },
    "نزل": {
      "root": "ن ز ل",
      "pos": "verb",
      "gloss": "to go down, come down",
      "content": true
    },
    "ثمن": {
      "root": "ث م ن",
      "pos": "noun",
      "gloss": "price",
      "content": true
    },
    "لن": {
      "root": "—",
      "pos": "part",
      "gloss": "will not (+ subjunctive)",
      "content": false
    },
    "وجد": {
      "root": "و ج د",
      "pos": "verb",
      "gloss": "to find",
      "content": true
    },
    "سيد": {
      "root": "س و د",
      "pos": "noun",
      "gloss": "master, sir",
      "content": true
    },
    "صدق": {
      "root": "ص د ق",
      "pos": "verb",
      "gloss": "to believe, trust",
      "content": true
    },
    "مسلم": {
      "root": "س ل م",
      "pos": "noun",
      "gloss": "Muslim",
      "content": true
    },
    "كذب": {
      "root": "ك ذ ب",
      "pos": "verb",
      "gloss": "to lie",
      "content": true
    },
    "غش": {
      "root": "غ ش ش",
      "pos": "verb",
      "gloss": "to cheat, deceive",
      "content": true,
      "book_note": "يَغُشُّ (غَشَّ يَغُشُّ غَشّاً): يَخْدَعُ (to deceive)"
    },
    "مكان": {
      "root": "ك و ن",
      "pos": "noun",
      "gloss": "place",
      "content": true
    },
    "الذي": {
      "root": "—",
      "pos": "rel",
      "gloss": "who, which, that",
      "content": false
    },
    "أكل": {
      "root": "أ ك ل",
      "pos": "verb",
      "gloss": "to eat",
      "content": true
    },
    "مطعم": {
      "root": "ط ع م",
      "pos": "noun",
      "gloss": "restaurant",
      "content": true
    },
    "لم": {
      "root": "—",
      "pos": "part",
      "gloss": "not (+ jussive; past negation)",
      "content": false
    },
    "قرية": {
      "root": "ق ر ي",
      "pos": "noun",
      "gloss": "village",
      "content": true
    },
    "مسافر": {
      "root": "س ف ر",
      "pos": "noun",
      "gloss": "traveller",
      "content": true
    },
    "ليس": {
      "root": "ل ي س",
      "pos": "verb",
      "gloss": "to not be",
      "content": true
    },
    "بيت": {
      "root": "ب ي ت",
      "pos": "noun",
      "gloss": "house",
      "content": true
    },
    "قام": {
      "root": "ق و م",
      "pos": "verb",
      "gloss": "to rise, get up; to stand",
      "content": true
    },
    "أما": {
      "root": "—",
      "pos": "part",
      "gloss": "as for",
      "content": false
    },
    "أين": {
      "root": "—",
      "pos": "part",
      "gloss": "where",
      "content": false
    },
    "ورق": {
      "root": "و ر ق",
      "pos": "noun",
      "gloss": "paper",
      "content": true
    },
    "حبر": {
      "root": "ح ب ر",
      "pos": "noun",
      "gloss": "ink",
      "content": true
    },
    "قلم": {
      "root": "ق ل م",
      "pos": "noun",
      "gloss": "pen",
      "content": true
    },
    "مرسم": {
      "root": "ر س م",
      "pos": "noun",
      "gloss": "drawing tool, pencil",
      "content": true
    },
    "نشافة": {
      "root": "ن ش ف",
      "pos": "noun",
      "gloss": "blotting paper",
      "content": true,
      "book_note": "النَّشَّافَة (ج) النَّشَّافَات: خِرْقَةٌ وَنَحْوُهَا تُسْتَعْمَلُ لِتَنْشِيفِ الْمَاءِ وَغَيْرِهِ (a cloth or the like used to blot up water and the like)"
    },
    "أداة": {
      "root": "أ د و",
      "pos": "noun",
      "gloss": "tool, instrument",
      "content": true
    },
    "كتابة": {
      "root": "ك ت ب",
      "pos": "noun",
      "gloss": "writing",
      "content": true
    },
    "وراق": {
      "root": "و ر ق",
      "pos": "noun",
      "gloss": "stationer, paper-seller",
      "content": true
    },
    "جميع": {
      "root": "ج م ع",
      "pos": "noun",
      "gloss": "all, entirety",
      "content": true
    },
    "مدرسة": {
      "root": "د ر س",
      "pos": "noun",
      "gloss": "school",
      "content": true
    },
    "شكر": {
      "root": "ش ك ر",
      "pos": "verb",
      "gloss": "to thank",
      "content": true
    },
    "كريم": {
      "root": "ك ر م",
      "pos": "adj",
      "gloss": "noble, generous",
      "content": true
    },
    "قد": {
      "root": "—",
      "pos": "part",
      "gloss": "already, indeed",
      "content": false
    },
    "أفاد": {
      "root": "ف ي د",
      "pos": "verb",
      "gloss": "to benefit, be useful to",
      "content": true
    },
    "الآن": {
      "root": "—",
      "pos": "adv",
      "gloss": "now",
      "content": true
    },
    "صلى": {
      "root": "ص ل و",
      "pos": "verb",
      "gloss": "to pray",
      "content": true
    },
    "هنا": {
      "root": "—",
      "pos": "adv",
      "gloss": "here",
      "content": true
    },
    "بقي": {
      "root": "ب ق ي",
      "pos": "verb",
      "gloss": "to remain, be left",
      "content": true
    },
    "شغل": {
      "root": "ش غ ل",
      "pos": "noun",
      "gloss": "work, occupation",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "Umar asks Khalid if he has visited the market of this town. Khalid says he is a newcomer who doesn't know the way. Umar invites him along, promising they will be back before Maghrib since the market isn't far.",
      "sentences": [
        {
          "id": "qr1-4-001",
          "page": 37,
          "ar": "عُمَرُ: هَلْ زُرْتَ سُوْقَ هٰذَا الْبَلَدِ يَا صَدِيْقِيْ؟",
          "en": "Umar: Have you visited the market of this town, my friend?",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
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
              "surface": "زُرْتَ",
              "lemma": "زار",
              "features": "perf.2ms",
              "root": "ز و ر",
              "pos": "verb",
              "gloss": "to visit"
            },
            {
              "surface": "سُوْقَ",
              "lemma": "سوق",
              "features": "acc.constr",
              "root": "س و ق",
              "pos": "noun",
              "gloss": "market"
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
              "surface": "الْبَلَدِ",
              "lemma": "بلد",
              "features": "def.gen",
              "root": "ب ل د",
              "pos": "noun",
              "gloss": "town, country"
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
              "surface": "صَدِيْقِيْ",
              "lemma": "صديق",
              "features": "acc+1s",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            }
          ]
        },
        {
          "id": "qr1-4-002",
          "page": 37,
          "ar": "خَالِدٌ: لَا يَا أَخِيْ، فَإِنِّيْ غَرِيْبٌ جَدِيْدٌ فِيْ هٰذَا الْبَلَدِ لَا أَعْرِفُ الطَّرِيْقَ.",
          "en": "Khalid: No, my brother — I am a stranger, new to this town; I don't know the way.",
          "tokens": [
            {
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khalid (name)"
            },
            {
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not"
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
            },
            {
              "surface": "فَإِنِّيْ",
              "lemma": "إن",
              "features": "conj+part+1s",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed, verily"
            },
            {
              "surface": "غَرِيْبٌ",
              "lemma": "غريب",
              "features": "indef.nom",
              "root": "غ ر ب",
              "pos": "adj",
              "gloss": "stranger, foreign"
            },
            {
              "surface": "جَدِيْدٌ",
              "lemma": "جديد",
              "features": "indef.nom",
              "root": "ج د د",
              "pos": "adj",
              "gloss": "new"
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
              "features": "dem",
              "root": "",
              "pos": "dem",
              "gloss": "this (m.)"
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
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not"
            },
            {
              "surface": "أَعْرِفُ",
              "lemma": "عرف",
              "features": "impf.1s",
              "root": "ع ر ف",
              "pos": "verb",
              "gloss": "to know"
            },
            {
              "surface": "الطَّرِيْقَ",
              "lemma": "طريق",
              "features": "def.acc",
              "root": "ط ر ق",
              "pos": "noun",
              "gloss": "road, way"
            }
          ]
        },
        {
          "id": "qr1-4-003",
          "page": 37,
          "ar": "عُمَرُ: تَعَالَ مَعِيَ فَإِنِّيْ ذَاهِبٌ إِلَى السُّوْقِ لِأَشْتَرِيَ بَعْضَ الْحَوَائِجِ، وَنَرْجِعُ قَبْلَ الْمَغْرِبِ إِنْ شَاءَ اللهُ فَإِنَّ السُّوْقَ غَيْرُ بَعِيْدَةٍ.",
          "en": "Umar: Come with me — I am going to the market to buy some things, and we'll come back before Maghrib, God willing, for the market isn't far.",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
            },
            {
              "surface": "تَعَالَ",
              "lemma": "تعال",
              "features": "imp.2ms",
              "root": "",
              "pos": "verb",
              "gloss": "come! (irregular imperative)"
            },
            {
              "surface": "مَعِيَ",
              "lemma": "مع",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "with"
            },
            {
              "surface": "فَإِنِّيْ",
              "lemma": "إن",
              "features": "conj+part+1s",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed, verily"
            },
            {
              "surface": "ذَاهِبٌ",
              "lemma": "ذهب",
              "features": "indef.nom",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "going"
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
              "surface": "السُّوْقِ",
              "lemma": "سوق",
              "features": "def.gen",
              "root": "س و ق",
              "pos": "noun",
              "gloss": "market"
            },
            {
              "surface": "لِأَشْتَرِيَ",
              "lemma": "اشترى",
              "features": "prep+impf.1s",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
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
              "surface": "الْحَوَائِجِ",
              "lemma": "حاجة",
              "features": "pl.def.gen",
              "root": "ح و ج",
              "pos": "noun",
              "gloss": "need, thing needed"
            },
            {
              "surface": "وَنَرْجِعُ",
              "lemma": "رجع",
              "features": "conj+impf.1p",
              "root": "ر ج ع",
              "pos": "verb",
              "gloss": "to return"
            },
            {
              "surface": "قَبْلَ",
              "lemma": "قبل",
              "features": "prep",
              "root": "ق ب ل",
              "pos": "prep",
              "gloss": "before"
            },
            {
              "surface": "الْمَغْرِبِ",
              "lemma": "مغرب",
              "features": "def.gen",
              "root": "غ ر ب",
              "pos": "noun",
              "gloss": "Maghrib, sunset"
            },
            {
              "surface": "إِنْ",
              "lemma": "إن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed, verily"
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
            },
            {
              "surface": "فَإِنَّ",
              "lemma": "إن",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed, verily"
            },
            {
              "surface": "السُّوْقَ",
              "lemma": "سوق",
              "features": "def.acc",
              "root": "س و ق",
              "pos": "noun",
              "gloss": "market"
            },
            {
              "surface": "غَيْرُ",
              "lemma": "غير",
              "features": "nom.constr",
              "root": "غ ي ر",
              "pos": "noun",
              "gloss": "other than, not"
            },
            {
              "surface": "بَعِيْدَةٍ",
              "lemma": "بعيد",
              "features": "indef.gen",
              "root": "ب ع د",
              "pos": "adj",
              "gloss": "far"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا لَا يَعْرِفُ خَالِدٌ الطَّرِيْقَ فِي السُّوْقِ؟",
          "options": [
            "لأَنَّهُ غَرِيْبٌ جَدِيْدٌ فِي الْبَلَدِ",
            "لأَنَّهُ مَرِيْضٌ",
            "لأَنَّهُ لَا يُحِبُّ السُّوْقَ"
          ],
          "answer": 0,
          "qEn": "Why doesn't Khalid know the way in the market?",
          "optionsEn": [
            "Because he is a stranger, new to the town",
            "Because he is sick",
            "Because he doesn't like the market"
          ]
        },
        {
          "q": "مَتَى سَيَرْجِعُ عُمَرُ وَخَالِدٌ مِنَ السُّوْقِ؟",
          "options": [
            "قَبْلَ الْمَغْرِبِ",
            "بَعْدَ الْعِشَاءِ",
            "فِي الصَّبَاحِ"
          ],
          "answer": 0,
          "qEn": "When will Umar and Khalid return from the market?",
          "optionsEn": [
            "Before Maghrib",
            "After ʿIshāʾ",
            "In the morning"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "Khalid admires the big, clean market and asks about a shop. Umar explains it's a fruit-seller's, with people haggling over the fruit. Khalid wants to buy bananas, guava, and oranges for a breakfast with friends. Umar notes guava is dear, oranges sour, but the bananas are fine; still, he suggests buying fruit tomorrow at the vegetable market instead, where it's plentiful and cheap.",
      "sentences": [
        {
          "id": "qr1-4-004",
          "page": 38,
          "ar": "خَالِدٌ: مَا شَاءَ اللهُ هٰذِهِ سُوْقٌ كَبِيْرَةٌ وَالدَّكَاكِيْنُ نَظِيْفَةٌ جَمِيْلَةٌ، وَمَا هٰذَا الدُّكَّانُ الْجَمِيْلُ إِلَى الْيَمِيْنِ يَا عُمَرُ؟",
          "en": "Khalid: Mā shāʾ Allāh — this is a big market, and the shops are clean and nice. And what is this nice shop on the right, Umar?",
          "tokens": [
            {
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khalid (name)"
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
            },
            {
              "surface": "هٰذِهِ",
              "lemma": "هذه",
              "features": "dem",
              "root": "",
              "pos": "dem",
              "gloss": "this (f.)"
            },
            {
              "surface": "سُوْقٌ",
              "lemma": "سوق",
              "features": "indef.nom",
              "root": "س و ق",
              "pos": "noun",
              "gloss": "market"
            },
            {
              "surface": "كَبِيْرَةٌ",
              "lemma": "كبير",
              "features": "indef.nom.f",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "big, large"
            },
            {
              "surface": "وَالدَّكَاكِيْنُ",
              "lemma": "دكان",
              "features": "conj+pl.def.nom",
              "root": "د ك ن",
              "pos": "noun",
              "gloss": "shop"
            },
            {
              "surface": "نَظِيْفَةٌ",
              "lemma": "نظيف",
              "features": "indef.nom.f",
              "root": "ن ظ ف",
              "pos": "adj",
              "gloss": "clean"
            },
            {
              "surface": "جَمِيْلَةٌ",
              "lemma": "جميل",
              "features": "indef.nom.f",
              "root": "ج م ل",
              "pos": "adj",
              "gloss": "beautiful, nice"
            },
            {
              "surface": "وَمَا",
              "lemma": "ما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "what; not"
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
              "surface": "الدُّكَّانُ",
              "lemma": "دكان",
              "features": "def.nom",
              "root": "د ك ن",
              "pos": "noun",
              "gloss": "shop"
            },
            {
              "surface": "الْجَمِيْلُ",
              "lemma": "جميل",
              "features": "def.nom",
              "root": "ج م ل",
              "pos": "adj",
              "gloss": "beautiful, nice"
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
              "surface": "الْيَمِيْنِ",
              "lemma": "يمين",
              "features": "def.gen",
              "root": "ي م ن",
              "pos": "noun",
              "gloss": "right (side)"
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
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
            }
          ]
        },
        {
          "id": "qr1-4-005",
          "page": 38,
          "ar": "عُمَرُ: هٰذَا دُكَّانُ فَاكِهَانِيٍّ، أَلَا تَرَى إِلَى الْفَوَاكِهِ وَتَرَى النَّاسَ يُسَاوِمُوْنَ الْفَاكِهَانِيَّ فِيْهَا.",
          "en": "Umar: This is a fruit-seller's shop. Don't you see the fruit, and see the people haggling with the fruit-seller over it?",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
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
              "surface": "دُكَّانُ",
              "lemma": "دكان",
              "features": "nom.constr",
              "root": "د ك ن",
              "pos": "noun",
              "gloss": "shop"
            },
            {
              "surface": "فَاكِهَانِيٍّ",
              "lemma": "فاكهاني",
              "features": "indef.gen",
              "root": "ف ك ه",
              "pos": "noun",
              "gloss": "fruit-seller"
            },
            {
              "surface": "أَلَا",
              "lemma": "ألا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "isn't it that...? don't you...?"
            },
            {
              "surface": "تَرَى",
              "lemma": "رأى",
              "features": "impf.2ms",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
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
              "surface": "الْفَوَاكِهِ",
              "lemma": "فاكهة",
              "features": "pl.def.gen",
              "root": "ف ك ه",
              "pos": "noun",
              "gloss": "fruit"
            },
            {
              "surface": "وَتَرَى",
              "lemma": "رأى",
              "features": "conj+impf.2ms",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
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
              "surface": "يُسَاوِمُوْنَ",
              "lemma": "ساوم",
              "features": "impf.3mp",
              "root": "س و م",
              "pos": "verb",
              "gloss": "to haggle, bargain"
            },
            {
              "surface": "الْفَاكِهَانِيَّ",
              "lemma": "فاكهاني",
              "features": "def.acc",
              "root": "ف ك ه",
              "pos": "noun",
              "gloss": "fruit-seller"
            },
            {
              "surface": "فِيْهَا",
              "lemma": "في",
              "features": "prep+3fs",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            }
          ]
        },
        {
          "id": "qr1-4-006",
          "page": 38,
          "ar": "خَالِدٌ: أَنَا أُرِيْدُ أَنْ أَشْتَرِيَ شَيْئاً مِنَ الْفَوَاكِهِ، الْمَوْزَ وَالْجَوَافَةَ وَالْبُرْتُقَالَ، فَإِنِّيْ أُرِيْدُ أَنْ أَدْعُوَ بَعْضَ الإِخْوَانِ إِلَى الْفُطُوْرِ بُكْرَةً.",
          "en": "Khalid: I want to buy something of the fruit — bananas, guava, and oranges — for I want to invite some friends to breakfast tomorrow morning.",
          "tokens": [
            {
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khalid (name)"
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
              "surface": "أُرِيْدُ",
              "lemma": "أراد",
              "features": "impf.1s",
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
              "surface": "أَشْتَرِيَ",
              "lemma": "اشترى",
              "features": "impf.1s",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
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
              "surface": "الْفَوَاكِهِ",
              "lemma": "فاكهة",
              "features": "pl.def.gen",
              "root": "ف ك ه",
              "pos": "noun",
              "gloss": "fruit"
            },
            {
              "surface": "الْمَوْزَ",
              "lemma": "موز",
              "features": "def.acc",
              "root": "م و ز",
              "pos": "noun",
              "gloss": "banana"
            },
            {
              "surface": "وَالْجَوَافَةَ",
              "lemma": "جوافة",
              "features": "conj+def.acc",
              "root": "",
              "pos": "noun",
              "gloss": "guava"
            },
            {
              "surface": "وَالْبُرْتُقَالَ",
              "lemma": "برتقال",
              "features": "conj+def.acc",
              "root": "",
              "pos": "noun",
              "gloss": "orange"
            },
            {
              "surface": "فَإِنِّيْ",
              "lemma": "إن",
              "features": "conj+part+1s",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed, verily"
            },
            {
              "surface": "أُرِيْدُ",
              "lemma": "أراد",
              "features": "impf.1s",
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
              "surface": "أَدْعُوَ",
              "lemma": "دعا",
              "features": "impf.1s",
              "root": "د ع و",
              "pos": "verb",
              "gloss": "to invite"
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
              "surface": "الإِخْوَانِ",
              "lemma": "أخ",
              "features": "pl.def.gen",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brothers, friends"
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
              "surface": "الْفُطُوْرِ",
              "lemma": "فطور",
              "features": "def.gen",
              "root": "ف ط ر",
              "pos": "noun",
              "gloss": "breakfast"
            },
            {
              "surface": "بُكْرَةً",
              "lemma": "بكرة",
              "features": "indef.acc",
              "root": "ب ك ر",
              "pos": "noun",
              "gloss": "early morning, tomorrow morning"
            }
          ]
        },
        {
          "id": "qr1-4-007",
          "page": 38,
          "ar": "عُمَرُ: الْجَوَافَةُ غَالِيَةٌ جِدّاً فِيْ هٰذِهِ الأَيَّامِ، وَالْبُرْتُقَالُ حَامِضٌ وَلَا بَأْسَ بِالْمَوْزِ.",
          "en": "Umar: Guava is very expensive these days, and oranges are sour, but there's nothing wrong with the bananas.",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
            },
            {
              "surface": "الْجَوَافَةُ",
              "lemma": "جوافة",
              "features": "def.nom",
              "root": "",
              "pos": "noun",
              "gloss": "guava"
            },
            {
              "surface": "غَالِيَةٌ",
              "lemma": "غالي",
              "features": "indef.nom.f",
              "root": "غ ل و",
              "pos": "adj",
              "gloss": "expensive"
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
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "هٰذِهِ",
              "lemma": "هذه",
              "features": "dem",
              "root": "",
              "pos": "dem",
              "gloss": "this (f.)"
            },
            {
              "surface": "الأَيَّامِ",
              "lemma": "يوم",
              "features": "pl.def.gen",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "وَالْبُرْتُقَالُ",
              "lemma": "برتقال",
              "features": "conj+def.nom",
              "root": "",
              "pos": "noun",
              "gloss": "orange"
            },
            {
              "surface": "حَامِضٌ",
              "lemma": "حامض",
              "features": "indef.nom",
              "root": "ح م ض",
              "pos": "adj",
              "gloss": "sour"
            },
            {
              "surface": "وَلَا",
              "lemma": "لا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not"
            },
            {
              "surface": "بَأْسَ",
              "lemma": "بأس",
              "features": "acc",
              "root": "ب أ س",
              "pos": "noun",
              "gloss": "harm"
            },
            {
              "surface": "بِالْمَوْزِ",
              "lemma": "موز",
              "features": "prep+def.gen",
              "root": "م و ز",
              "pos": "noun",
              "gloss": "banana"
            }
          ]
        },
        {
          "id": "qr1-4-008",
          "page": 38,
          "ar": "خَالِدٌ: تَفَضَّلْ يَا أَخِيْ نُسَاوِمُ الْفَاكِهَانِيَّ.",
          "en": "Khalid: Go ahead, my brother — let's haggle with the fruit-seller.",
          "tokens": [
            {
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khalid (name)"
            },
            {
              "surface": "تَفَضَّلْ",
              "lemma": "تفضل",
              "features": "imp.2ms",
              "root": "ف ض ل",
              "pos": "verb",
              "gloss": "please, go ahead (imperative)"
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
            },
            {
              "surface": "نُسَاوِمُ",
              "lemma": "ساوم",
              "features": "impf.1p",
              "root": "س و م",
              "pos": "verb",
              "gloss": "to haggle, bargain"
            },
            {
              "surface": "الْفَاكِهَانِيَّ",
              "lemma": "فاكهاني",
              "features": "def.acc",
              "root": "ف ك ه",
              "pos": "noun",
              "gloss": "fruit-seller"
            }
          ]
        },
        {
          "id": "qr1-4-009",
          "page": 38,
          "ar": "عُمَرُ: أَحْسَنُ أَنْ نَشْتَرِيَ الْفَوَاكِهَ مِنْ سُوْقِ الْخُضَرِ بُكْرَةً، فَإِنَّ الْفَوَاكِهَ وَالثِّمَارَ فِيْهَا كَثِيْرَةٌ وَرَخِيْصَةٌ.",
          "en": "Umar: It's better that we buy the fruit from the vegetable market tomorrow morning, for the fruit and produce there are plentiful and cheap.",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
            },
            {
              "surface": "أَحْسَنُ",
              "lemma": "أحسن",
              "features": "indef.nom",
              "root": "ح س ن",
              "pos": "adj",
              "gloss": "better, best"
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
              "surface": "نَشْتَرِيَ",
              "lemma": "اشترى",
              "features": "impf.1p",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            },
            {
              "surface": "الْفَوَاكِهَ",
              "lemma": "فاكهة",
              "features": "pl.def.acc",
              "root": "ف ك ه",
              "pos": "noun",
              "gloss": "fruit"
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
              "surface": "سُوْقِ",
              "lemma": "سوق",
              "features": "gen.constr",
              "root": "س و ق",
              "pos": "noun",
              "gloss": "market"
            },
            {
              "surface": "الْخُضَرِ",
              "lemma": "خضر",
              "features": "def.gen",
              "root": "خ ض ر",
              "pos": "noun",
              "gloss": "vegetables, greens"
            },
            {
              "surface": "بُكْرَةً",
              "lemma": "بكرة",
              "features": "indef.acc",
              "root": "ب ك ر",
              "pos": "noun",
              "gloss": "early morning, tomorrow morning"
            },
            {
              "surface": "فَإِنَّ",
              "lemma": "إن",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed, verily"
            },
            {
              "surface": "الْفَوَاكِهَ",
              "lemma": "فاكهة",
              "features": "pl.def.acc",
              "root": "ف ك ه",
              "pos": "noun",
              "gloss": "fruit"
            },
            {
              "surface": "وَالثِّمَارَ",
              "lemma": "ثمار",
              "features": "conj+pl.def.acc",
              "root": "ث م ر",
              "pos": "noun",
              "gloss": "fruits, produce"
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
              "surface": "كَثِيْرَةٌ",
              "lemma": "كثير",
              "features": "indef.nom.f",
              "root": "ك ث ر",
              "pos": "adj",
              "gloss": "much, many"
            },
            {
              "surface": "وَرَخِيْصَةٌ",
              "lemma": "رخيص",
              "features": "conj+indef.nom.f",
              "root": "ر خ ص",
              "pos": "adj",
              "gloss": "cheap"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا يُرِيْدُ خَالِدٌ أَنْ يَشْتَرِيَ مِنَ الْفَوَاكِهِ؟",
          "options": [
            "الْمَوْزَ وَالْجَوَافَةَ وَالْبُرْتُقَالَ",
            "التُّفَّاحَ وَالْعِنَبَ",
            "الْبِطِّيْخَ"
          ],
          "answer": 0,
          "qEn": "What fruit does Khalid want to buy?",
          "optionsEn": [
            "Bananas, guava, and oranges",
            "Apples and grapes",
            "Watermelon"
          ]
        },
        {
          "q": "لِمَاذَا يَرَى عُمَرُ أَنْ يَشْتَرِيَا الْفَوَاكِهَ بُكْرَةً مِنْ سُوْقِ الْخُضَرِ؟",
          "options": [
            "لأَنَّهَا هُنَاكَ كَثِيْرَةٌ وَرَخِيْصَةٌ",
            "لأَنَّ الدُّكَّانَ مُغْلَقٌ",
            "لأَنَّهُ لَا يُحِبُّ الْفَاكِهَانِيَّ"
          ],
          "answer": 0,
          "qEn": "Why does Umar think they should buy the fruit tomorrow morning from the vegetable market?",
          "optionsEn": [
            "Because it's plentiful and cheap there",
            "Because the shop is closed",
            "Because he doesn't like the fruit-seller"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "Khalid agrees and asks about the cloth shops; Umar explains people haggle there with the merchants over cloth, then says he wants to buy a pair of shoes. At the shop, Khalid defers to Umar, who asks for a matching pair. The shopkeeper offers one that's a little wide, then another that fits exactly.",
      "sentences": [
        {
          "id": "qr1-4-010",
          "page": 38,
          "ar": "خَالِدٌ: هٰذَا هُوَ الرَّأْيُ، وَمَا هٰذِهِ الدَّكَاكِيْنُ يَا عُمَرُ؟",
          "en": "Khalid: That's the right idea. And what are these shops, Umar?",
          "tokens": [
            {
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khalid (name)"
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
              "surface": "هُوَ",
              "lemma": "هو",
              "features": "nom.3ms",
              "root": "",
              "pos": "noun",
              "gloss": "he, it"
            },
            {
              "surface": "الرَّأْيُ",
              "lemma": "رأي",
              "features": "def.nom",
              "root": "ر أ ي",
              "pos": "noun",
              "gloss": "opinion, view"
            },
            {
              "surface": "وَمَا",
              "lemma": "ما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "what; not"
            },
            {
              "surface": "هٰذِهِ",
              "lemma": "هذه",
              "features": "dem",
              "root": "",
              "pos": "dem",
              "gloss": "this (f.)"
            },
            {
              "surface": "الدَّكَاكِيْنُ",
              "lemma": "دكان",
              "features": "pl.def.nom",
              "root": "د ك ن",
              "pos": "noun",
              "gloss": "shop"
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
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
            }
          ]
        },
        {
          "id": "qr1-4-011",
          "page": 39,
          "ar": "عُمَرُ: هٰذِهِ دَكَاكِيْنُ الْقُمَاشِ، أَلَا تَرَى كَيْفَ بَسَطُوا أَنْوَاعاً مِنَ الْقُمَاشِ وَكَيْفَ يَلْمَسُهَا النَّاسُ وَيُسَاوِمُوْنَ فِيْهَا التُّجَّارَ.",
          "en": "Umar: These are the cloth shops. Don't you see how they've laid out kinds of cloth, and how people touch it and haggle with the merchants over it?",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
            },
            {
              "surface": "هٰذِهِ",
              "lemma": "هذه",
              "features": "dem",
              "root": "",
              "pos": "dem",
              "gloss": "this (f.)"
            },
            {
              "surface": "دَكَاكِيْنُ",
              "lemma": "دكان",
              "features": "pl.nom.constr",
              "root": "د ك ن",
              "pos": "noun",
              "gloss": "shop"
            },
            {
              "surface": "الْقُمَاشِ",
              "lemma": "قماش",
              "features": "def.gen",
              "root": "ق م ش",
              "pos": "noun",
              "gloss": "cloth, fabric"
            },
            {
              "surface": "أَلَا",
              "lemma": "ألا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "isn't it that...? don't you...?"
            },
            {
              "surface": "تَرَى",
              "lemma": "رأى",
              "features": "impf.2ms",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
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
              "surface": "بَسَطُوا",
              "lemma": "بسط",
              "features": "perf.3mp",
              "root": "ب س ط",
              "pos": "verb",
              "gloss": "to spread out, lay out"
            },
            {
              "surface": "أَنْوَاعاً",
              "lemma": "نوع",
              "features": "pl.indef.acc",
              "root": "ن و ع",
              "pos": "noun",
              "gloss": "kind, type"
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
              "surface": "الْقُمَاشِ",
              "lemma": "قماش",
              "features": "def.gen",
              "root": "ق م ش",
              "pos": "noun",
              "gloss": "cloth, fabric"
            },
            {
              "surface": "وَكَيْفَ",
              "lemma": "كيف",
              "features": "conj+part",
              "root": "ك ي ف",
              "pos": "part",
              "gloss": "how"
            },
            {
              "surface": "يَلْمَسُهَا",
              "lemma": "لمس",
              "features": "impf.3ms+3fs",
              "root": "ل م س",
              "pos": "verb",
              "gloss": "to touch"
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
              "surface": "وَيُسَاوِمُوْنَ",
              "lemma": "ساوم",
              "features": "conj+impf.3mp",
              "root": "س و م",
              "pos": "verb",
              "gloss": "to haggle, bargain"
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
              "surface": "التُّجَّارَ",
              "lemma": "تاجر",
              "features": "pl.def.acc",
              "root": "ت ج ر",
              "pos": "noun",
              "gloss": "merchant"
            }
          ]
        },
        {
          "id": "qr1-4-012",
          "page": 39,
          "ar": "تَعَالَ! فَإِنِّيْ أُرِيْدُ أَنْ أَشْتَرِيَ حِذَاءً.",
          "en": "Come! I want to buy a pair of shoes.",
          "tokens": [
            {
              "surface": "تَعَالَ",
              "lemma": "تعال",
              "features": "imp.2ms",
              "root": "",
              "pos": "verb",
              "gloss": "come! (irregular imperative)"
            },
            {
              "surface": "فَإِنِّيْ",
              "lemma": "إن",
              "features": "conj+part+1s",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed, verily"
            },
            {
              "surface": "أُرِيْدُ",
              "lemma": "أراد",
              "features": "impf.1s",
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
              "surface": "أَشْتَرِيَ",
              "lemma": "اشترى",
              "features": "impf.1s",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            },
            {
              "surface": "حِذَاءً",
              "lemma": "حذاء",
              "features": "indef.acc",
              "root": "ح ذ و",
              "pos": "noun",
              "gloss": "shoe"
            }
          ]
        },
        {
          "id": "qr1-4-013",
          "page": 39,
          "ar": "خَالِدٌ: تَفَضَّلْ فَإِنِّيْ صَاحِبُكَ.",
          "en": "Khalid: Go ahead — I'm with you.",
          "tokens": [
            {
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khalid (name)"
            },
            {
              "surface": "تَفَضَّلْ",
              "lemma": "تفضل",
              "features": "imp.2ms",
              "root": "ف ض ل",
              "pos": "verb",
              "gloss": "please, go ahead (imperative)"
            },
            {
              "surface": "فَإِنِّيْ",
              "lemma": "إن",
              "features": "conj+part+1s",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed, verily"
            },
            {
              "surface": "صَاحِبُكَ",
              "lemma": "صاحب",
              "features": "nom+2ms",
              "root": "ص ح ب",
              "pos": "noun",
              "gloss": "owner, companion"
            }
          ]
        },
        {
          "id": "qr1-4-014",
          "page": 39,
          "ar": "عُمَرُ: مِنْ فَضْلِكَ أَخْرِجْ لِيْ حِذَاءً مُطَابِقاً.",
          "en": "Umar: Please bring me out a matching pair of shoes.",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
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
              "surface": "فَضْلِكَ",
              "lemma": "فضل",
              "features": "gen+2ms",
              "root": "ف ض ل",
              "pos": "noun",
              "gloss": "favour, grace"
            },
            {
              "surface": "أَخْرِجْ",
              "lemma": "خرج",
              "features": "imp.2ms",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "bring out, take out"
            },
            {
              "surface": "لِيْ",
              "lemma": "ل",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "for, to"
            },
            {
              "surface": "حِذَاءً",
              "lemma": "حذاء",
              "features": "indef.acc",
              "root": "ح ذ و",
              "pos": "noun",
              "gloss": "shoe"
            },
            {
              "surface": "مُطَابِقاً",
              "lemma": "مطابق",
              "features": "indef.acc",
              "root": "ط ب ق",
              "pos": "adj",
              "gloss": "matching, fitting"
            }
          ]
        },
        {
          "id": "qr1-4-015",
          "page": 39,
          "ar": "صَاحِبُ الدُّكَّانِ: هٰذَا حِذَاءٌ جَمِيْلٌ وَمَتِيْنٌ.",
          "en": "Shopkeeper: This is a nice, sturdy shoe.",
          "tokens": [
            {
              "surface": "صَاحِبُ",
              "lemma": "صاحب",
              "features": "nom.constr",
              "root": "ص ح ب",
              "pos": "noun",
              "gloss": "owner, companion"
            },
            {
              "surface": "الدُّكَّانِ",
              "lemma": "دكان",
              "features": "def.gen",
              "root": "د ك ن",
              "pos": "noun",
              "gloss": "shop"
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
              "surface": "حِذَاءٌ",
              "lemma": "حذاء",
              "features": "indef.nom",
              "root": "ح ذ و",
              "pos": "noun",
              "gloss": "shoe"
            },
            {
              "surface": "جَمِيْلٌ",
              "lemma": "جميل",
              "features": "indef.nom",
              "root": "ج م ل",
              "pos": "adj",
              "gloss": "beautiful, nice"
            },
            {
              "surface": "وَمَتِيْنٌ",
              "lemma": "متين",
              "features": "conj+indef.nom",
              "root": "م ت ن",
              "pos": "adj",
              "gloss": "sturdy, strong"
            }
          ]
        },
        {
          "id": "qr1-4-016",
          "page": 39,
          "ar": "عُمَرُ: نَعَمْ! وَلٰكِنَّهُ وَاسِعٌ قَلِيْلاً.",
          "en": "Umar: Yes! But it's a little wide.",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
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
              "surface": "وَلٰكِنَّهُ",
              "lemma": "لكن",
              "features": "conj+part+3ms",
              "root": "",
              "pos": "part",
              "gloss": "but"
            },
            {
              "surface": "وَاسِعٌ",
              "lemma": "واسع",
              "features": "indef.nom",
              "root": "و س ع",
              "pos": "adj",
              "gloss": "wide, roomy"
            },
            {
              "surface": "قَلِيْلاً",
              "lemma": "قليل",
              "features": "acc",
              "root": "ق ل ل",
              "pos": "adj",
              "gloss": "a little, few"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا كَانَ فِي الدَّكَاكِيْنِ الَّتِي رَآهَا خَالِدٌ وَعُمَرُ؟",
          "options": [
            "الْقُمَاشُ",
            "الْكُتُبُ",
            "الأَدْوِيَةُ"
          ],
          "answer": 0,
          "qEn": "What was in the shops that Khalid and Umar saw?",
          "optionsEn": [
            "Cloth",
            "Books",
            "Medicine"
          ]
        },
        {
          "q": "مَاذَا أَرَادَ عُمَرُ أَنْ يَشْتَرِيَ؟",
          "options": [
            "حِذَاءً",
            "قَمِيْصاً",
            "كِتَاباً"
          ],
          "answer": 0,
          "qEn": "What did Umar want to buy?",
          "optionsEn": [
            "A pair of shoes",
            "A shirt",
            "A book"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "The shopkeeper offers another pair that fits exactly. Umar asks the price — six rupees — and tries to haggle, but the shopkeeper insists it's the cheapest in the market. Umar believes him, because a Muslim does not lie or cheat.",
      "sentences": [
        {
          "id": "qr1-4-017",
          "page": 39,
          "ar": "صَاحِبُ الدُّكَّانِ: وَهٰذَا الآخَرُ مُطَابِقٌ تَمَاماً.",
          "en": "Shopkeeper: And this other one fits exactly.",
          "tokens": [
            {
              "surface": "صَاحِبُ",
              "lemma": "صاحب",
              "features": "nom.constr",
              "root": "ص ح ب",
              "pos": "noun",
              "gloss": "owner, companion"
            },
            {
              "surface": "الدُّكَّانِ",
              "lemma": "دكان",
              "features": "def.gen",
              "root": "د ك ن",
              "pos": "noun",
              "gloss": "shop"
            },
            {
              "surface": "وَهٰذَا",
              "lemma": "هذا",
              "features": "conj+dem",
              "root": "",
              "pos": "dem",
              "gloss": "this (m.)"
            },
            {
              "surface": "الآخَرُ",
              "lemma": "آخر",
              "features": "def.nom",
              "root": "أ خ ر",
              "pos": "adj",
              "gloss": "other, another"
            },
            {
              "surface": "مُطَابِقٌ",
              "lemma": "مطابق",
              "features": "indef.nom",
              "root": "ط ب ق",
              "pos": "adj",
              "gloss": "matching, fitting"
            },
            {
              "surface": "تَمَاماً",
              "lemma": "تمام",
              "features": "acc",
              "root": "ت م م",
              "pos": "noun",
              "gloss": "completeness"
            }
          ]
        },
        {
          "id": "qr1-4-018",
          "page": 39,
          "ar": "عُمَرُ: بِكَمْ هُوَ؟",
          "en": "Umar: How much is it?",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
            },
            {
              "surface": "بِكَمْ",
              "lemma": "كم",
              "features": "prep",
              "root": "",
              "pos": "part",
              "gloss": "how much, how many"
            },
            {
              "surface": "هُوَ",
              "lemma": "هو",
              "features": "nom.3ms",
              "root": "",
              "pos": "noun",
              "gloss": "he, it"
            }
          ]
        },
        {
          "id": "qr1-4-019",
          "page": 39,
          "ar": "صَاحِبُ الدُّكَّانِ: بِسِتِّ رُبِّيَاتٍ.",
          "en": "Shopkeeper: Six rupees.",
          "tokens": [
            {
              "surface": "صَاحِبُ",
              "lemma": "صاحب",
              "features": "nom.constr",
              "root": "ص ح ب",
              "pos": "noun",
              "gloss": "owner, companion"
            },
            {
              "surface": "الدُّكَّانِ",
              "lemma": "دكان",
              "features": "def.gen",
              "root": "د ك ن",
              "pos": "noun",
              "gloss": "shop"
            },
            {
              "surface": "بِسِتِّ",
              "lemma": "ست",
              "features": "prep+gen.constr",
              "root": "س ت ت",
              "pos": "num",
              "gloss": "six"
            },
            {
              "surface": "رُبِّيَاتٍ",
              "lemma": "ربية",
              "features": "pl.indef.gen",
              "root": "ر ب و",
              "pos": "noun",
              "gloss": "rupee"
            }
          ]
        },
        {
          "id": "qr1-4-020",
          "page": 39,
          "ar": "عُمَرُ: أَلَا تَنْزِلُ فِي الثَّمَنِ؟",
          "en": "Umar: Won't you come down on the price?",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
            },
            {
              "surface": "أَلَا",
              "lemma": "ألا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "isn't it that...? don't you...?"
            },
            {
              "surface": "تَنْزِلُ",
              "lemma": "نزل",
              "features": "impf.2ms",
              "root": "ن ز ل",
              "pos": "verb",
              "gloss": "to go down, come down"
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
              "surface": "الثَّمَنِ",
              "lemma": "ثمن",
              "features": "def.gen",
              "root": "ث م ن",
              "pos": "noun",
              "gloss": "price"
            }
          ]
        },
        {
          "id": "qr1-4-021",
          "page": 39,
          "ar": "صَاحِبُ الدُّكَّانِ: لَنْ تَجِدَ يَا سَيِّدِيْ أَرْخَصَ مِنْ هٰذَا فِي السُّوْقِ.",
          "en": "Shopkeeper: You will not find, sir, cheaper than this in the market.",
          "tokens": [
            {
              "surface": "صَاحِبُ",
              "lemma": "صاحب",
              "features": "nom.constr",
              "root": "ص ح ب",
              "pos": "noun",
              "gloss": "owner, companion"
            },
            {
              "surface": "الدُّكَّانِ",
              "lemma": "دكان",
              "features": "def.gen",
              "root": "د ك ن",
              "pos": "noun",
              "gloss": "shop"
            },
            {
              "surface": "لَنْ",
              "lemma": "لن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "will not (+ subjunctive)"
            },
            {
              "surface": "تَجِدَ",
              "lemma": "وجد",
              "features": "impf.2ms",
              "root": "و ج د",
              "pos": "verb",
              "gloss": "to find"
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
              "surface": "سَيِّدِيْ",
              "lemma": "سيد",
              "features": "acc+1s",
              "root": "س و د",
              "pos": "noun",
              "gloss": "master, sir"
            },
            {
              "surface": "أَرْخَصَ",
              "lemma": "رخيص",
              "features": "acc",
              "root": "ر خ ص",
              "pos": "adj",
              "gloss": "cheaper"
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
              "surface": "هٰذَا",
              "lemma": "هذا",
              "features": "dem",
              "root": "",
              "pos": "dem",
              "gloss": "this (m.)"
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
          "id": "qr1-4-022",
          "page": 40,
          "ar": "عُمَرُ: أُصَدِّقُكَ لأَنَّكَ مُسْلِمٌ وَالْمُسْلِمُ لَا يَكْذِبُ وَلَا يَغُشُّ.",
          "en": "Umar: I believe you, because you are a Muslim, and a Muslim does not lie or cheat.",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
            },
            {
              "surface": "أُصَدِّقُكَ",
              "lemma": "صدق",
              "features": "impf.1s+2ms",
              "root": "ص د ق",
              "pos": "verb",
              "gloss": "to believe, trust"
            },
            {
              "surface": "لأَنَّكَ",
              "lemma": "أن",
              "features": "prep+part+2ms",
              "root": "",
              "pos": "part",
              "gloss": "that, because"
            },
            {
              "surface": "مُسْلِمٌ",
              "lemma": "مسلم",
              "features": "indef.nom",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "Muslim"
            },
            {
              "surface": "وَالْمُسْلِمُ",
              "lemma": "مسلم",
              "features": "conj+def.nom",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "Muslim"
            },
            {
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not"
            },
            {
              "surface": "يَكْذِبُ",
              "lemma": "كذب",
              "features": "impf.3ms",
              "root": "ك ذ ب",
              "pos": "verb",
              "gloss": "to lie"
            },
            {
              "surface": "وَلَا",
              "lemma": "لا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not"
            },
            {
              "surface": "يَغُشُّ",
              "lemma": "غش",
              "features": "impf.3ms",
              "root": "غ ش ش",
              "pos": "verb",
              "gloss": "to cheat, deceive"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِكَمْ كَانَ الْحِذَاءُ؟",
          "options": [
            "بِسِتِّ رُبِّيَاتٍ",
            "بِعَشْرِ رُبِّيَاتٍ",
            "بِرُبِّيَتَيْنِ"
          ],
          "answer": 0,
          "qEn": "How much was the pair of shoes?",
          "optionsEn": [
            "Six rupees",
            "Ten rupees",
            "Two rupees"
          ]
        },
        {
          "q": "لِمَاذَا صَدَّقَ عُمَرُ صَاحِبَ الدُّكَّانِ؟",
          "options": [
            "لأَنَّهُ مُسْلِمٌ وَالْمُسْلِمُ لَا يَكْذِبُ",
            "لأَنَّهُ صَدِيْقُهُ",
            "لأَنَّ الثَّمَنَ رَخِيْصٌ جِدّاً"
          ],
          "answer": 0,
          "qEn": "Why did Umar believe the shopkeeper?",
          "optionsEn": [
            "Because he is a Muslim, and a Muslim does not lie",
            "Because he is his friend",
            "Because the price is very cheap"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "Khalid asks about the place where people eat. Umar explains it's a restaurant, common in town because strangers and travellers without houses eat there; villages, having few strangers, have no need of one.",
      "sentences": [
        {
          "id": "qr1-4-023",
          "page": 40,
          "ar": "خَالِدٌ: وَمَا هٰذَا الْمَكَانُ الَّذِيْ يَأْكُلُ فِيْهِ النَّاسُ؟",
          "en": "Khalid: And what is this place where people eat?",
          "tokens": [
            {
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khalid (name)"
            },
            {
              "surface": "وَمَا",
              "lemma": "ما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "what; not"
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
              "surface": "الْمَكَانُ",
              "lemma": "مكان",
              "features": "def.nom",
              "root": "ك و ن",
              "pos": "noun",
              "gloss": "place"
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
              "surface": "يَأْكُلُ",
              "lemma": "أكل",
              "features": "impf.3ms",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
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
              "surface": "النَّاسُ",
              "lemma": "ناس",
              "features": "def.nom",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
            }
          ]
        },
        {
          "id": "qr1-4-024",
          "page": 40,
          "ar": "عُمَرُ: هٰذَا مَطْعَمٌ يَأْكُلُ فِيْهِ النَّاسُ، وَالْمَطَاعِمُ فِي الْبَلَدِ كَثِيْرَةٌ.",
          "en": "Umar: This is a restaurant, where people eat; and restaurants are plentiful in town.",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
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
              "surface": "مَطْعَمٌ",
              "lemma": "مطعم",
              "features": "indef.nom",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "restaurant"
            },
            {
              "surface": "يَأْكُلُ",
              "lemma": "أكل",
              "features": "impf.3ms",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
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
              "surface": "النَّاسُ",
              "lemma": "ناس",
              "features": "def.nom",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
            },
            {
              "surface": "وَالْمَطَاعِمُ",
              "lemma": "مطعم",
              "features": "conj+pl.def.nom",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "restaurant"
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
              "surface": "الْبَلَدِ",
              "lemma": "بلد",
              "features": "def.gen",
              "root": "ب ل د",
              "pos": "noun",
              "gloss": "town, country"
            },
            {
              "surface": "كَثِيْرَةٌ",
              "lemma": "كثير",
              "features": "indef.nom.f",
              "root": "ك ث ر",
              "pos": "adj",
              "gloss": "much, many"
            }
          ]
        },
        {
          "id": "qr1-4-025",
          "page": 40,
          "ar": "خَالِدٌ: مَالِيْ لَمْ أَرَ مَطْعَماً فِي الْقَرْيَةِ؟",
          "en": "Khalid: Why haven't I seen a restaurant in the village?",
          "tokens": [
            {
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khalid (name)"
            },
            {
              "surface": "مَالِيْ",
              "lemma": "ما",
              "features": "part+1s",
              "root": "",
              "pos": "part",
              "gloss": "what is [wrong] with me, why"
            },
            {
              "surface": "لَمْ",
              "lemma": "لم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not (+ jussive; past negation)"
            },
            {
              "surface": "أَرَ",
              "lemma": "رأى",
              "features": "impf.1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "مَطْعَماً",
              "lemma": "مطعم",
              "features": "indef.acc",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "restaurant"
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
              "surface": "الْقَرْيَةِ",
              "lemma": "قرية",
              "features": "def.gen",
              "root": "ق ر ي",
              "pos": "noun",
              "gloss": "village"
            }
          ]
        },
        {
          "id": "qr1-4-026",
          "page": 40,
          "ar": "عُمَرُ: لأَنَّ الْبَلَدَ فِيْهِ غُرَبَاءُ وَمُسَافِرُوْنَ لَيْسَ لَهُمْ بُيُوْتٌ يُقِيْمُوْنَ فِيْهَا وَيَأْكُلُوْنَ فِيْهَا، فَيَأْكُلُوْنَ فِي الْمَطَاعِمِ، أَمَّا الْقَرْيَةُ فَالْغَرِيْبُ فِيْهَا قَلِيْلٌ فَلَا حَاجَةَ فِي الْقَرْيَةِ إِلَى الْمَطْعَمِ.",
          "en": "Umar: Because in town there are strangers and travellers who have no houses to stay and eat in, so they eat in restaurants. As for the village, strangers there are few, so there is no need in the village for a restaurant.",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
            },
            {
              "surface": "لأَنَّ",
              "lemma": "أن",
              "features": "prep+part",
              "root": "",
              "pos": "part",
              "gloss": "that, because"
            },
            {
              "surface": "الْبَلَدَ",
              "lemma": "بلد",
              "features": "def.acc",
              "root": "ب ل د",
              "pos": "noun",
              "gloss": "town, country"
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
              "surface": "غُرَبَاءُ",
              "lemma": "غريب",
              "features": "pl.indef.nom",
              "root": "غ ر ب",
              "pos": "adj",
              "gloss": "stranger, foreign"
            },
            {
              "surface": "وَمُسَافِرُوْنَ",
              "lemma": "مسافر",
              "features": "conj+pl.indef.nom",
              "root": "س ف ر",
              "pos": "noun",
              "gloss": "traveller"
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
              "surface": "لَهُمْ",
              "lemma": "ل",
              "features": "prep+3mp",
              "root": "",
              "pos": "prep",
              "gloss": "for, to"
            },
            {
              "surface": "بُيُوْتٌ",
              "lemma": "بيت",
              "features": "pl.indef.nom",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            },
            {
              "surface": "يُقِيْمُوْنَ",
              "lemma": "قام",
              "features": "impf.3mp",
              "root": "ق و م",
              "pos": "verb",
              "gloss": "to reside, stay"
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
              "surface": "وَيَأْكُلُوْنَ",
              "lemma": "أكل",
              "features": "conj+impf.3mp",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
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
              "surface": "فَيَأْكُلُوْنَ",
              "lemma": "أكل",
              "features": "conj+impf.3mp",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
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
              "surface": "الْمَطَاعِمِ",
              "lemma": "مطعم",
              "features": "pl.def.gen",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "restaurant"
            },
            {
              "surface": "أَمَّا",
              "lemma": "أما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "as for"
            },
            {
              "surface": "الْقَرْيَةُ",
              "lemma": "قرية",
              "features": "def.nom",
              "root": "ق ر ي",
              "pos": "noun",
              "gloss": "village"
            },
            {
              "surface": "فَالْغَرِيْبُ",
              "lemma": "غريب",
              "features": "conj+def.nom",
              "root": "غ ر ب",
              "pos": "adj",
              "gloss": "stranger, foreign"
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
              "surface": "قَلِيْلٌ",
              "lemma": "قليل",
              "features": "indef.nom",
              "root": "ق ل ل",
              "pos": "adj",
              "gloss": "a little, few"
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
              "surface": "حَاجَةَ",
              "lemma": "حاجة",
              "features": "acc",
              "root": "ح و ج",
              "pos": "noun",
              "gloss": "need, thing needed"
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
              "surface": "الْقَرْيَةِ",
              "lemma": "قرية",
              "features": "def.gen",
              "root": "ق ر ي",
              "pos": "noun",
              "gloss": "village"
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
              "surface": "الْمَطْعَمِ",
              "lemma": "مطعم",
              "features": "def.gen",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "restaurant"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "أَيْنَ يَأْكُلُ النَّاسُ الَّذِيْنَ لَيْسَ لَهُمْ بُيُوْتٌ؟",
          "options": [
            "فِي الْمَطَاعِمِ",
            "فِي الدَّكَاكِيْنِ",
            "فِي الْمَسْجِدِ"
          ],
          "answer": 0,
          "qEn": "Where do people without houses eat?",
          "optionsEn": [
            "In restaurants",
            "In shops",
            "In the mosque"
          ]
        },
        {
          "q": "لِمَاذَا لَا حَاجَةَ لِلْمَطْعَمِ فِي الْقَرْيَةِ؟",
          "options": [
            "لأَنَّ الْغُرَبَاءَ فِيْهَا قَلِيْلٌ",
            "لأَنَّ أَهْلَ الْقَرْيَةِ فُقَرَاءُ",
            "لأَنَّ الطَّعَامَ فِيْهَا رَخِيْصٌ"
          ],
          "answer": 0,
          "qEn": "Why is there no need for a restaurant in the village?",
          "optionsEn": [
            "Because strangers there are few",
            "Because the villagers are poor",
            "Because food there is cheap"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "en": "Khalid asks where to find paper, ink, and writing tools. Umar points him to the stationer's shop, which has everything the school needs. Khalid thanks Umar warmly for all he's learned and suggests they head home to pray Maghrib; Umar agrees, having nothing else to do.",
      "sentences": [
        {
          "id": "qr1-4-027",
          "page": 40,
          "ar": "خَالِدٌ: وَأَيْنَ نَجِدُ الْوَرَقَ وَالْحِبْرَ وَالْقَلَمَ وَالْمِرْسَمَ وَالنَّشَافَةَ وَأَدَوَاتِ الْكِتَابَةِ؟",
          "en": "Khalid: And where do we find paper, ink, a pen, a pencil, blotting-paper, and writing tools?",
          "tokens": [
            {
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khalid (name)"
            },
            {
              "surface": "وَأَيْنَ",
              "lemma": "أين",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "where"
            },
            {
              "surface": "نَجِدُ",
              "lemma": "وجد",
              "features": "impf.1p",
              "root": "و ج د",
              "pos": "verb",
              "gloss": "to find"
            },
            {
              "surface": "الْوَرَقَ",
              "lemma": "ورق",
              "features": "def.acc",
              "root": "و ر ق",
              "pos": "noun",
              "gloss": "paper"
            },
            {
              "surface": "وَالْحِبْرَ",
              "lemma": "حبر",
              "features": "conj+def.acc",
              "root": "ح ب ر",
              "pos": "noun",
              "gloss": "ink"
            },
            {
              "surface": "وَالْقَلَمَ",
              "lemma": "قلم",
              "features": "conj+def.acc",
              "root": "ق ل م",
              "pos": "noun",
              "gloss": "pen"
            },
            {
              "surface": "وَالْمِرْسَمَ",
              "lemma": "مرسم",
              "features": "conj+def.acc",
              "root": "ر س م",
              "pos": "noun",
              "gloss": "drawing tool, pencil"
            },
            {
              "surface": "وَالنَّشَافَةَ",
              "lemma": "نشافة",
              "features": "conj+def.acc",
              "root": "ن ش ف",
              "pos": "noun",
              "gloss": "blotting paper"
            },
            {
              "surface": "وَأَدَوَاتِ",
              "lemma": "أداة",
              "features": "conj+pl.acc.constr",
              "root": "أ د و",
              "pos": "noun",
              "gloss": "tool, instrument"
            },
            {
              "surface": "الْكِتَابَةِ",
              "lemma": "كتابة",
              "features": "def.gen",
              "root": "ك ت ب",
              "pos": "noun",
              "gloss": "writing"
            }
          ]
        },
        {
          "id": "qr1-4-028",
          "page": 40,
          "ar": "عُمَرُ: هٰذَا دُكَّانُ وَرَّاقٍ تَجِدُ فِيْهِ جَمِيْعَ حَوَائِجِ الْمَدْرَسَةِ.",
          "en": "Umar: This is a stationer's shop; you'll find in it all the school's needs.",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
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
              "surface": "دُكَّانُ",
              "lemma": "دكان",
              "features": "nom.constr",
              "root": "د ك ن",
              "pos": "noun",
              "gloss": "shop"
            },
            {
              "surface": "وَرَّاقٍ",
              "lemma": "وراق",
              "features": "indef.gen",
              "root": "و ر ق",
              "pos": "noun",
              "gloss": "stationer, paper-seller"
            },
            {
              "surface": "تَجِدُ",
              "lemma": "وجد",
              "features": "impf.2ms",
              "root": "و ج د",
              "pos": "verb",
              "gloss": "to find"
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
              "surface": "جَمِيْعَ",
              "lemma": "جميع",
              "features": "acc.constr",
              "root": "ج م ع",
              "pos": "noun",
              "gloss": "all, entirety"
            },
            {
              "surface": "حَوَائِجِ",
              "lemma": "حاجة",
              "features": "pl.gen.constr",
              "root": "ح و ج",
              "pos": "noun",
              "gloss": "need, thing needed"
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
          "id": "qr1-4-029",
          "page": 40,
          "ar": "خَالِدٌ: أَشْكُرُكَ يَا صَدِيْقِيَ الْكَرِيْمَ فَقَدْ أَفَدْتَنِيْ كَثِيْراً، وَأَرَى أَنْ نَرْجِعَ الآنَ إِلَى الْبَيْتِ وَنُصَلِّيَ الْمَغْرِبَ هُنَا.",
          "en": "Khalid: I thank you, my generous friend — you have benefited me greatly. And I think we should go back home now and pray Maghrib here.",
          "tokens": [
            {
              "surface": "خَالِدٌ",
              "lemma": "خالد",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khalid (name)"
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
              "surface": "يَا",
              "lemma": "يا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "O (vocative)"
            },
            {
              "surface": "صَدِيْقِيَ",
              "lemma": "صديق",
              "features": "acc+1s",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            },
            {
              "surface": "الْكَرِيْمَ",
              "lemma": "كريم",
              "features": "def.acc",
              "root": "ك ر م",
              "pos": "adj",
              "gloss": "noble, generous"
            },
            {
              "surface": "فَقَدْ",
              "lemma": "قد",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "already, indeed"
            },
            {
              "surface": "أَفَدْتَنِيْ",
              "lemma": "أفاد",
              "features": "perf.2ms+1s",
              "root": "ف ي د",
              "pos": "verb",
              "gloss": "to benefit, be useful to"
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
              "surface": "وَأَرَى",
              "lemma": "رأى",
              "features": "conj+impf.1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to think, see fit"
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
              "surface": "نَرْجِعَ",
              "lemma": "رجع",
              "features": "impf.1p",
              "root": "ر ج ع",
              "pos": "verb",
              "gloss": "to return"
            },
            {
              "surface": "الآنَ",
              "lemma": "الآن",
              "features": "acc",
              "root": "",
              "pos": "adv",
              "gloss": "now"
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
              "surface": "الْبَيْتِ",
              "lemma": "بيت",
              "features": "def.gen",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            },
            {
              "surface": "وَنُصَلِّيَ",
              "lemma": "صلى",
              "features": "conj+impf.1p",
              "root": "ص ل و",
              "pos": "verb",
              "gloss": "to pray"
            },
            {
              "surface": "الْمَغْرِبَ",
              "lemma": "مغرب",
              "features": "def.acc",
              "root": "غ ر ب",
              "pos": "noun",
              "gloss": "Maghrib, sunset"
            },
            {
              "surface": "هُنَا",
              "lemma": "هنا",
              "features": "adv",
              "root": "",
              "pos": "adv",
              "gloss": "here"
            }
          ]
        },
        {
          "id": "qr1-4-030",
          "page": 40,
          "ar": "عُمَرُ: نَعَمْ! وَمَا بَقِيَ لِيَ شُغْلٌ.",
          "en": "Umar: Yes! And I have no work left [to do].",
          "tokens": [
            {
              "surface": "عُمَرُ",
              "lemma": "عمر",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Umar (name)"
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
              "surface": "وَمَا",
              "lemma": "ما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "what; not"
            },
            {
              "surface": "بَقِيَ",
              "lemma": "بقي",
              "features": "perf.3ms",
              "root": "ب ق ي",
              "pos": "verb",
              "gloss": "to remain, be left"
            },
            {
              "surface": "لِيَ",
              "lemma": "ل",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "for, to"
            },
            {
              "surface": "شُغْلٌ",
              "lemma": "شغل",
              "features": "indef.nom",
              "root": "ش غ ل",
              "pos": "noun",
              "gloss": "work, occupation"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "أَيْنَ يَجِدُ خَالِدٌ حَوَائِجَ الْمَدْرَسَةِ؟",
          "options": [
            "فِي دُكَّانِ الْوَرَّاقِ",
            "فِي الْمَطْعَمِ",
            "فِي دُكَّانِ الْقُمَاشِ"
          ],
          "answer": 0,
          "qEn": "Where does Khalid find the school supplies?",
          "optionsEn": [
            "In the stationer's shop",
            "In the restaurant",
            "In the cloth shop"
          ]
        },
        {
          "q": "مَاذَا يَقْتَرِحُ خَالِدٌ فِيْ آخِرِ الْقِصَّةِ؟",
          "options": [
            "أَنْ يَرْجِعَا إِلَى الْبَيْتِ وَيُصَلِّيَا الْمَغْرِبَ",
            "أَنْ يَذْهَبَا إِلَى مَطْعَمٍ آخَرَ",
            "أَنْ يَشْتَرِيَا الْمَزِيْدَ مِنَ الْفَوَاكِهِ"
          ],
          "answer": 0,
          "qEn": "What does Khalid suggest at the end of the story?",
          "optionsEn": [
            "That they go back home and pray Maghrib",
            "That they go to another restaurant",
            "That they buy more fruit"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "أَنَا أُرِيْدُ أَنْ",
        "post": "شَيْئاً مِنَ الْفَوَاكِهِ",
        "en": "I want to buy something of the fruit.",
        "options": [
          "أَشْتَرِيَ",
          "يَشْتَرِيَ",
          "تَشْتَرِيَ",
          "نَشْتَرِيَ"
        ],
        "answer": 0,
        "rationales": [
          "1st person singular — I buy.",
          "3rd masculine singular — he buys.",
          "2nd masc. / 3rd fem. singular — wrong person.",
          "1st person plural — we buy."
        ]
      },
      {
        "type": "cloze",
        "pre": "تَعَالَ يَا أَخِيْ",
        "post": "الْفَاكِهَانِيَّ",
        "en": "Come, my brother, let's haggle with the fruit-seller.",
        "options": [
          "نُسَاوِمُ",
          "يُسَاوِمُ",
          "تُسَاوِمُ",
          "أُسَاوِمُ"
        ],
        "answer": 0,
        "rationales": [
          "1st person plural — we haggle.",
          "3rd masculine singular — he haggles.",
          "2nd masc. / 3rd fem. singular — wrong person.",
          "1st person singular — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "أَحْسَنُ أَنْ",
        "post": "الْفَوَاكِهَ مِنْ سُوْقِ الْخُضَرِ",
        "en": "It's better that we buy the fruit from the vegetable market.",
        "options": [
          "نَشْتَرِيَ",
          "يَشْتَرِيَ",
          "أَشْتَرِيَ",
          "تَشْتَرِيَ"
        ],
        "answer": 0,
        "rationales": [
          "1st person plural — we buy.",
          "3rd masculine singular — he buys.",
          "1st person singular — wrong number.",
          "2nd masc. / 3rd fem. singular — wrong person."
        ]
      },
      {
        "type": "cloze",
        "pre": "مِنْ فَضْلِكَ",
        "post": "لِيْ حِذَاءً مُطَابِقاً",
        "en": "Please bring me out a matching pair of shoes.",
        "options": [
          "أَخْرِجْ",
          "تُخْرِجُ",
          "يُخْرِجُ",
          "أُخْرِجُ"
        ],
        "answer": 0,
        "rationales": [
          "Imperative, 2nd masculine singular — bring out!",
          "Imperfect — not the imperative needed here.",
          "3rd masculine singular — wrong person.",
          "1st person singular — wrong person."
        ]
      },
      {
        "type": "cloze",
        "pre": "أَلَا",
        "post": "فِي الثَّمَنِ؟",
        "en": "Won't you come down on the price?",
        "options": [
          "تَنْزِلُ",
          "يَنْزِلُ",
          "أَنْزِلُ",
          "نَنْزِلُ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masculine singular — you come down.",
          "3rd masculine singular — wrong person.",
          "1st person singular — wrong person.",
          "1st person plural — wrong person."
        ]
      },
      {
        "type": "cloze",
        "pre": "لَنْ",
        "post": "يَا سَيِّدِيْ أَرْخَصَ مِنْ هٰذَا",
        "en": "You won't find, sir, cheaper than this.",
        "options": [
          "تَجِدَ",
          "يَجِدَ",
          "أَجِدَ",
          "نَجِدَ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masculine singular — you find.",
          "3rd masculine singular — wrong person.",
          "1st person singular — wrong person.",
          "1st person plural — wrong person."
        ]
      },
      {
        "type": "cloze",
        "pre": "أُصَدِّقُكَ لأَنَّكَ مُسْلِمٌ وَالْمُسْلِمُ لَا",
        "post": "",
        "en": "I believe you because you're a Muslim, and a Muslim does not lie.",
        "options": [
          "يَكْذِبُ",
          "تَكْذِبُ",
          "أَكْذِبُ",
          "يَكْذِبُوْنَ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masculine singular, agreeing with الْمُسْلِمُ — he lies.",
          "2nd masc. / 3rd fem. singular — wrong person.",
          "1st person singular — wrong person.",
          "3rd masculine plural — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَأَيْنَ",
        "post": "الْوَرَقَ وَالْحِبْرَ؟",
        "en": "And where do we find the paper and the ink?",
        "options": [
          "نَجِدُ",
          "يَجِدُ",
          "تَجِدُ",
          "أَجِدُ"
        ],
        "answer": 0,
        "rationales": [
          "1st person plural — we find.",
          "3rd masculine singular — wrong person.",
          "2nd masc. / 3rd fem. singular — wrong person.",
          "1st person singular — wrong number."
        ]
      },
      {
        "type": "cloze",
        "pre": "هٰذَا دُكَّانُ وَرَّاقٍ",
        "post": "فِيْهِ جَمِيْعَ حَوَائِجِ الْمَدْرَسَةِ",
        "en": "This is a stationer's shop; you'll find in it all the school's needs.",
        "options": [
          "تَجِدُ",
          "يَجِدُ",
          "أَجِدُ",
          "نَجِدُ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masculine singular — you find.",
          "3rd masculine singular — wrong person.",
          "1st person singular — wrong person.",
          "1st person plural — wrong person."
        ]
      },
      {
        "type": "cloze",
        "pre": "أَشْكُرُكَ يَا صَدِيْقِيَ الْكَرِيْمَ فَقَدْ",
        "post": "كَثِيْراً",
        "en": "I thank you, my generous friend, for you have benefited me greatly.",
        "options": [
          "أَفَدْتَنِيْ",
          "أَفَدْتُهُ",
          "أَفَادَنِيْ",
          "تُفِيْدُنِيْ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 2nd masc. singular + object \"me\" — you benefited me.",
          "Perfect, 2nd masc. singular + object \"him\" — wrong object.",
          "Perfect, 3rd masc. singular + object \"me\" — wrong person.",
          "Imperfect — the perfect tense is needed here."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "أَعْرِفُ الطَّرِيْقَ",
        "pre": "",
        "post": "الطَّرِيْقَ",
        "targetPerson": "هُوَ",
        "targetEn": "he",
        "options": [
          "يَعْرِفُ",
          "أَعْرِفُ",
          "تَعْرِفُ",
          "يَعْرِفُوْنَ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masculine singular — he knows.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "نَشْتَرِيَ الْفَوَاكِهَ مِنْ سُوْقِ الْخُضَرِ",
        "pre": "",
        "post": "الْفَوَاكِهَ مِنْ سُوْقِ الْخُضَرِ",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "أَشْتَرِيَ",
          "نَشْتَرِيَ",
          "يَشْتَرِيَ",
          "تَشْتَرِيَ"
        ],
        "answer": 0,
        "rationales": [
          "1st person singular — I buy.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "تَنْزِلُ فِي الثَّمَنِ",
        "pre": "",
        "post": "فِي الثَّمَنِ",
        "targetPerson": "هُمْ",
        "targetEn": "they (m.)",
        "options": [
          "يَنْزِلُوْنَ",
          "تَنْزِلُ",
          "يَنْزِلُ",
          "نَنْزِلُ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masculine plural — they come down.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "لَنْ تَجِدَ أَرْخَصَ مِنْ هٰذَا",
        "pre": "لَنْ",
        "post": "أَرْخَصَ مِنْ هٰذَا",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "أَجِدَ",
          "تَجِدَ",
          "يَجِدَ",
          "نَجِدَ"
        ],
        "answer": 0,
        "rationales": [
          "1st person singular — I will not find.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "لَا يَكْذِبُ",
        "pre": "لَا",
        "post": "",
        "targetPerson": "أَنْتَ",
        "targetEn": "you (m.)",
        "options": [
          "تَكْذِبُ",
          "يَكْذِبُ",
          "أَكْذِبُ",
          "يَكْذِبُوْنَ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masculine singular — you do not lie.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "تَجِدُ فِيْهِ جَمِيْعَ حَوَائِجِ الْمَدْرَسَةِ",
        "pre": "",
        "post": "فِيْهِ جَمِيْعَ حَوَائِجِ الْمَدْرَسَةِ",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "تَجِدُ",
          "يَجِدُ",
          "أَجِدُ",
          "نَجِدُ"
        ],
        "answer": 0,
        "rationales": [
          "3rd feminine singular — she finds (same form as 2nd masc. singular).",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "أُصَدِّقُكَ",
        "pre": "",
        "post": "",
        "targetPerson": "هُوَ",
        "targetEn": "he",
        "options": [
          "يُصَدِّقُكَ",
          "أُصَدِّقُكَ",
          "تُصَدِّقُكَ",
          "نُصَدِّقُكَ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masculine singular + object \"you\" — he believes you.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "أَفَدْتَنِيْ كَثِيْراً",
        "pre": "",
        "post": "كَثِيْراً",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "أَفَادَتْنِيْ",
          "أَفَدْتَنِيْ",
          "أَفَادَنِيْ",
          "تُفِيْدُنِيْ"
        ],
        "answer": 0,
        "rationales": [
          "Perfect, 3rd fem. singular + object \"me\" — she benefited me.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

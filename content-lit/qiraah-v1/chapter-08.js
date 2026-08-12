// القراءة الراشدة, volume one, chapter eight -- سفر القطار.
//
// Follows the shape of chapter-01.js/chapter-02.js -- see ../CHAPTER-FORMAT.md
// for the full specification. Hand-authored directly from the scanned pages
// (qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed pages 49-52); there
// is no JSON intermediate (see PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md --
// the pipeline no longer emits JSON).
//
// This is a first-person-singular narrative -- a boy's first train journey
// with his mother, siblings, and uncle -- and it is by far the longest,
// densest chapter in the book so far (4 printed pages vs. 2-4 for earlier
// chapters), written almost entirely as wa-chained run-on sentences (a
// clause, then وَ..., then وَ..., for a whole paragraph at a time). Rather
// than tokenize each original period-terminated sentence as one JS sentence
// (several ran 25-35 words), each was split at its natural wa-clause
// boundaries into short, buildable units, extending the precedent set in
// chapter-06.js's picnic outing (which needed the same treatment to clear
// the >=5-buildable-sentence quality gate) -- but applied here from the
// start, across the whole chapter, rather than as a single mid-build fix.
// The result is 11 JS paragraphs / 51 sentences, both larger than any prior
// chapter; this is proportionate to the source, not inflation -- the printed
// text genuinely has this many finite clauses across 4 pages.
//
// Three vocabulary notes worth recording:
//  - علم is a genuine in-chapter homograph: the verb "to know" (عَلِمْتُ,
//    q001) and the noun "flag" (الْعَلَمَ الْأَخْضَرَ, q035) share a spelling
//    with no relation. Followed the chapter-05.js precedent (ذهب /
//    ذهب-معدن) rather than chapter-06.js's gloss_override anti-pattern:
//    the flag sense is keyed "علم-راية", a distinct dict entry with its
//    own root/pos/gloss, so browsing either lemma shows the right thing.
//  - فَرَكِبْنَاهُمَا (q012, "we rode them", referring to two carriages) and
//    عَلَيْهِمَا/سَلَّمَا (q048, greeting two friends on the platform) both use
//    genuinely dual morphology -- an object-pronoun dual ("3d", ركبناهما)
//    and a subject-verb dual ("3md", سلّما, reusing chapter-06.js's first
//    dual pattern). "3d" is a natural sibling extension to "3md": the same
//    book-wide gap (the documented person-atom list has no dual at all)
//    showing up on the object side instead of the subject side.
//  - Five words carry the book's own footnoted definitions, kept as
//    book_note exactly where the print glosses them: لف (p.49), هيأ and
//    نول (p.50), رصيف and نقاب (p.51).
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch8",
  "number": 8,
  "title": {
    "ar": "سَفَرُ الْقِطَارِ",
    "en": "The Train Journey"
  },
  "pages": [
    49,
    50,
    51,
    52
  ],
  "register": "first_person_singular_narrative",
  "newWords": [
    "قطار",
    "محطة",
    "رصيف",
    "تذكرة",
    "حمال",
    "قاطرة",
    "بائع",
    "نقاب",
    "أمين",
    "صفر",
    "هز",
    "منظرة"
  ],
  "lemmas": {
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "not",
      "content": false
    },
    "أنس": {
      "root": "أ ن س",
      "pos": "verb",
      "gloss": "to forget (with لا: never forget)",
      "content": true
    },
    "سفر": {
      "root": "س ف ر",
      "pos": "noun",
      "gloss": "travel, journey",
      "content": true
    },
    "أول": {
      "root": "أ و ل",
      "pos": "adj",
      "gloss": "first",
      "content": true
    },
    "علم": {
      "root": "ع ل م",
      "pos": "verb",
      "gloss": "to know, learn",
      "content": true
    },
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that",
      "content": false
    },
    "سافر": {
      "root": "س ف ر",
      "pos": "verb",
      "gloss": "to travel",
      "content": true
    },
    "بكرة": {
      "root": "ب ك ر",
      "pos": "noun",
      "gloss": "early morning, daybreak",
      "content": true
    },
    "مع": {
      "root": "—",
      "pos": "prep",
      "gloss": "with",
      "content": false
    },
    "أم": {
      "root": "أ م م",
      "pos": "noun",
      "gloss": "mother",
      "content": true
    },
    "أخ": {
      "root": "أ خ و",
      "pos": "noun",
      "gloss": "brother",
      "content": true
    },
    "استيقظ": {
      "root": "ي ق ظ",
      "pos": "verb",
      "gloss": "to wake up",
      "content": true
    },
    "قبل": {
      "root": "—",
      "pos": "prep",
      "gloss": "before",
      "content": false
    },
    "سحر": {
      "root": "س ح ر",
      "pos": "noun",
      "gloss": "pre-dawn time",
      "content": true
    },
    "بقي": {
      "root": "ب ق ي",
      "pos": "verb",
      "gloss": "to remain, keep on (doing)",
      "content": true
    },
    "انتظر": {
      "root": "ن ظ ر",
      "pos": "verb",
      "gloss": "to wait for",
      "content": true
    },
    "ساعة": {
      "root": "س و ع",
      "pos": "noun",
      "gloss": "hour",
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
    "بكر": {
      "root": "ب ك ر",
      "pos": "verb",
      "gloss": "to be early, rise early",
      "content": true
    },
    "جاء": {
      "root": "ج ي أ",
      "pos": "verb",
      "gloss": "to come",
      "content": true
    },
    "عم": {
      "root": "ع م م",
      "pos": "noun",
      "gloss": "paternal uncle",
      "content": true
    },
    "بدأ": {
      "root": "ب د أ",
      "pos": "verb",
      "gloss": "to begin",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "حركة": {
      "root": "ح ر ك",
      "pos": "noun",
      "gloss": "movement, motion",
      "content": true
    },
    "صوت": {
      "root": "ص و ت",
      "pos": "noun",
      "gloss": "voice, sound",
      "content": true
    },
    "هذا": {
      "root": "—",
      "pos": "noun",
      "gloss": "this",
      "content": false
    },
    "جرى": {
      "root": "ج ر ي",
      "pos": "verb",
      "gloss": "to run",
      "content": true
    },
    "ذلك": {
      "root": "—",
      "pos": "noun",
      "gloss": "that",
      "content": false
    },
    "لف": {
      "root": "ل ف ف",
      "pos": "verb",
      "gloss": "to roll up, fold up",
      "content": true,
      "book_note": "لَفَّ يَلُفُّ لَفّاً: (الفراش ونحوه) طَوَاه (to roll up, e.g. bedding)"
    },
    "فراش": {
      "root": "ف ر ش",
      "pos": "noun",
      "gloss": "bedding, mattress",
      "content": true
    },
    "نادى": {
      "root": "ن د و",
      "pos": "verb",
      "gloss": "to call out",
      "content": true
    },
    "أجاب": {
      "root": "ج و ب",
      "pos": "verb",
      "gloss": "to answer",
      "content": true
    },
    "غضب": {
      "root": "غ ض ب",
      "pos": "verb",
      "gloss": "to be angry",
      "content": true
    },
    "استعجل": {
      "root": "ع ج ل",
      "pos": "verb",
      "gloss": "to hurry, hasten (someone)",
      "content": true
    },
    "والد": {
      "root": "و ل د",
      "pos": "noun",
      "gloss": "father",
      "content": true
    },
    "قام": {
      "root": "ق و م",
      "pos": "verb",
      "gloss": "to stand up, rise",
      "content": true
    },
    "أمر": {
      "root": "أ م ر",
      "pos": "verb",
      "gloss": "to command",
      "content": true
    },
    "نهى": {
      "root": "ن ه ي",
      "pos": "verb",
      "gloss": "to forbid",
      "content": true
    },
    "أرشد": {
      "root": "ر ش د",
      "pos": "verb",
      "gloss": "to guide, direct",
      "content": true
    },
    "خادم": {
      "root": "خ د م",
      "pos": "noun",
      "gloss": "servant",
      "content": true
    },
    "هيأ": {
      "root": "ه ي أ",
      "pos": "verb",
      "gloss": "to prepare, get ready",
      "content": true,
      "book_note": "هَيَّأَ يُهَيِّئُ: أَعَدَّ يُعِدُّ (to prepare)"
    },
    "زاد": {
      "root": "ز و د",
      "pos": "noun",
      "gloss": "provisions (for a journey)",
      "content": true
    },
    "حتى": {
      "root": "—",
      "pos": "part",
      "gloss": "until",
      "content": false
    },
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
    },
    "وقت": {
      "root": "و ق ت",
      "pos": "noun",
      "gloss": "time",
      "content": true
    },
    "خروج": {
      "root": "خ ر ج",
      "pos": "noun",
      "gloss": "going out, departure",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "قرب": {
      "root": "ق ر ب",
      "pos": "verb",
      "gloss": "to draw near, approach",
      "content": true
    },
    "ميعاد": {
      "root": "و ع د",
      "pos": "noun",
      "gloss": "appointed time",
      "content": true
    },
    "قطار": {
      "root": "ق ط ر",
      "pos": "noun",
      "gloss": "train",
      "content": true
    },
    "مركبة": {
      "root": "ر ك ب",
      "pos": "noun",
      "gloss": "carriage, vehicle",
      "content": true
    },
    "ركب": {
      "root": "ر ك ب",
      "pos": "verb",
      "gloss": "to ride, board",
      "content": true
    },
    "سلم": {
      "root": "س ل م",
      "pos": "verb",
      "gloss": "to greet; to give the closing salām (of prayer)",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, to",
      "content": false
    },
    "أب": {
      "root": "أ ب و",
      "pos": "noun",
      "gloss": "father",
      "content": true
    },
    "ودع": {
      "root": "و د ع",
      "pos": "verb",
      "gloss": "to bid farewell",
      "content": true
    },
    "دعا": {
      "root": "د ع و",
      "pos": "verb",
      "gloss": "to pray for, invoke blessing upon",
      "content": true
    },
    "لي": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to",
      "content": false
    },
    "وصل": {
      "root": "و ص ل",
      "pos": "verb",
      "gloss": "to arrive",
      "content": true
    },
    "إلى": {
      "root": "—",
      "pos": "prep",
      "gloss": "to, towards",
      "content": false
    },
    "محطة": {
      "root": "ح ط ط",
      "pos": "noun",
      "gloss": "station",
      "content": true
    },
    "أخذ": {
      "root": "أ خ ذ",
      "pos": "verb",
      "gloss": "to take",
      "content": true
    },
    "حمال": {
      "root": "ح م ل",
      "pos": "noun",
      "gloss": "porter",
      "content": true
    },
    "حاجة": {
      "root": "ح و ج",
      "pos": "noun",
      "gloss": "need, thing needed; (pl.) belongings",
      "content": true
    },
    "متاع": {
      "root": "م ت ع",
      "pos": "noun",
      "gloss": "goods, luggage",
      "content": true
    },
    "يوم": {
      "root": "ي و م",
      "pos": "noun",
      "gloss": "day",
      "content": true
    },
    "شتاء": {
      "root": "ش ت و",
      "pos": "noun",
      "gloss": "winter",
      "content": true
    },
    "كبير": {
      "root": "ك ب ر",
      "pos": "adj",
      "gloss": "big, large",
      "content": true
    },
    "ذهب": {
      "root": "ذ ه ب",
      "pos": "verb",
      "gloss": "to go",
      "content": true
    },
    "اشترى": {
      "root": "ش ر ي",
      "pos": "verb",
      "gloss": "to buy",
      "content": true
    },
    "تذكرة": {
      "root": "ذ ك ر",
      "pos": "noun",
      "gloss": "ticket",
      "content": true
    },
    "سأل": {
      "root": "س أ ل",
      "pos": "verb",
      "gloss": "to ask",
      "content": true
    },
    "عن": {
      "root": "—",
      "pos": "prep",
      "gloss": "about, from",
      "content": false
    },
    "نول": {
      "root": "ن و ل",
      "pos": "noun",
      "gloss": "fare",
      "content": true,
      "book_note": "النَّوْل: أجر السفينة، ويمكن إطلاقه على قيمة تذكرة السفر (the fare; can also mean the price of a travel ticket)"
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "إن": {
      "root": "—",
      "pos": "part",
      "gloss": "if; indeed, verily",
      "content": false
    },
    "ثلاث": {
      "root": "ث ل ث",
      "pos": "num",
      "gloss": "three",
      "content": true
    },
    "ربية": {
      "root": "ر ب ي",
      "pos": "noun",
      "gloss": "rupee",
      "content": true
    },
    "نصف": {
      "root": "ن ص ف",
      "pos": "noun",
      "gloss": "half",
      "content": true
    },
    "أعطى": {
      "root": "ع ط و",
      "pos": "verb",
      "gloss": "to give",
      "content": true
    },
    "ضيع": {
      "root": "ض ي ع",
      "pos": "verb",
      "gloss": "to lose, waste",
      "content": true
    },
    "حافظ": {
      "root": "ح ف ظ",
      "pos": "verb",
      "gloss": "to look after, take care of, keep up (a practice)",
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
    "وضع": {
      "root": "و ض ع",
      "pos": "verb",
      "gloss": "to put, place",
      "content": true
    },
    "عند": {
      "root": "ع ن د",
      "pos": "prep",
      "gloss": "at, by, with",
      "content": false
    },
    "دخل": {
      "root": "د خ ل",
      "pos": "verb",
      "gloss": "to enter",
      "content": true
    },
    "رأى": {
      "root": "ر أ ي",
      "pos": "verb",
      "gloss": "to see",
      "content": true
    },
    "رجل": {
      "root": "ر ج ل",
      "pos": "noun",
      "gloss": "man",
      "content": true
    },
    "كثير": {
      "root": "ك ث ر",
      "pos": "adj",
      "gloss": "much, many",
      "content": true
    },
    "امرأة": {
      "root": "م ر أ",
      "pos": "noun",
      "gloss": "woman",
      "content": true
    },
    "طفل": {
      "root": "ط ف ل",
      "pos": "noun",
      "gloss": "child",
      "content": true
    },
    "زحام": {
      "root": "ز ح م",
      "pos": "noun",
      "gloss": "crowding, crush",
      "content": true
    },
    "شديد": {
      "root": "ش د د",
      "pos": "adj",
      "gloss": "intense, severe",
      "content": true
    },
    "سمع": {
      "root": "س م ع",
      "pos": "verb",
      "gloss": "to hear, listen to",
      "content": true
    },
    "ناس": {
      "root": "ن و س",
      "pos": "noun",
      "gloss": "people",
      "content": true
    },
    "صيحة": {
      "root": "ص ي ح",
      "pos": "noun",
      "gloss": "shout, cry",
      "content": true
    },
    "صفير": {
      "root": "ص ف ر",
      "pos": "noun",
      "gloss": "whistle (sound)",
      "content": true
    },
    "قاطرة": {
      "root": "ق ط ر",
      "pos": "noun",
      "gloss": "locomotive, engine",
      "content": true
    },
    "متأخر": {
      "root": "أ خ ر",
      "pos": "adj",
      "gloss": "late",
      "content": true
    },
    "منظرة": {
      "root": "ن ظ ر",
      "pos": "noun",
      "gloss": "waiting hall, lounge",
      "content": true
    },
    "جلس": {
      "root": "ج ل س",
      "pos": "verb",
      "gloss": "to sit",
      "content": true
    },
    "قليل": {
      "root": "ق ل ل",
      "pos": "adj",
      "gloss": "a little, few",
      "content": true
    },
    "ثم": {
      "root": "—",
      "pos": "part",
      "gloss": "then",
      "content": false
    },
    "رصيف": {
      "root": "ر ص ف",
      "pos": "noun",
      "gloss": "platform",
      "content": true,
      "book_note": "الرَّصِيْف (ج) الأرصفة: مكان مرتفع تقف أمامه السفن والقطارات ونحوها (a raised place where ships and trains stop)"
    },
    "هل": {
      "root": "—",
      "pos": "part",
      "gloss": "[yes/no question particle]",
      "content": false
    },
    "رجع": {
      "root": "ر ج ع",
      "pos": "verb",
      "gloss": "to return",
      "content": true
    },
    "بعد": {
      "root": "—",
      "pos": "prep",
      "gloss": "after",
      "content": false
    },
    "خرج": {
      "root": "خ ر ج",
      "pos": "verb",
      "gloss": "to go out",
      "content": true
    },
    "كل": {
      "root": "ك ل ل",
      "pos": "noun",
      "gloss": "all, every",
      "content": true
    },
    "وقف": {
      "root": "و ق ف",
      "pos": "verb",
      "gloss": "to stop, stand",
      "content": true
    },
    "نزل": {
      "root": "ن ز ل",
      "pos": "verb",
      "gloss": "to alight, get off, come down",
      "content": true
    },
    "أطل": {
      "root": "ط ل ل",
      "pos": "verb",
      "gloss": "to look out, overlook",
      "content": true
    },
    "منظر": {
      "root": "ن ظ ر",
      "pos": "noun",
      "gloss": "sight, view",
      "content": true
    },
    "بائع": {
      "root": "ب ي ع",
      "pos": "noun",
      "gloss": "vendor, seller",
      "content": true
    },
    "جعل": {
      "root": "ج ع ل",
      "pos": "verb",
      "gloss": "to begin (doing); to make",
      "content": true
    },
    "أكل": {
      "root": "أ ك ل",
      "pos": "verb",
      "gloss": "to eat",
      "content": true
    },
    "بعض": {
      "root": "ب ع ض",
      "pos": "noun",
      "gloss": "some",
      "content": true
    },
    "هدية": {
      "root": "ه د ي",
      "pos": "noun",
      "gloss": "gift",
      "content": true
    },
    "صديق": {
      "root": "ص د ق",
      "pos": "noun",
      "gloss": "friend",
      "content": true
    },
    "قريب": {
      "root": "ق ر ب",
      "pos": "noun",
      "gloss": "relative, kinsman",
      "content": true
    },
    "صفر": {
      "root": "ص ف ر",
      "pos": "verb",
      "gloss": "to whistle",
      "content": true
    },
    "أمين": {
      "root": "أ م ن",
      "pos": "noun",
      "gloss": "conductor, guard (lit. trustworthy one)",
      "content": true
    },
    "هز": {
      "root": "ه ز ز",
      "pos": "verb",
      "gloss": "to wave, shake",
      "content": true
    },
    "علم-راية": {
      "root": "ع ل م",
      "pos": "noun",
      "gloss": "flag",
      "content": true
    },
    "أخضر": {
      "root": "خ ض ر",
      "pos": "adj",
      "gloss": "green",
      "content": true
    },
    "أسرع": {
      "root": "س ر ع",
      "pos": "verb",
      "gloss": "to hurry",
      "content": true
    },
    "تحرك": {
      "root": "ح ر ك",
      "pos": "verb",
      "gloss": "to move",
      "content": true
    },
    "سار": {
      "root": "س ي ر",
      "pos": "verb",
      "gloss": "to travel, set off, move along",
      "content": true
    },
    "نقاب": {
      "root": "ن ق ب",
      "pos": "noun",
      "gloss": "ticket inspector",
      "content": true,
      "book_note": "النَّقَّاب: قاطع التذاكر، كُمْسَاري (the one who punches tickets, a conductor)"
    },
    "عربة": {
      "root": "ع ر ب",
      "pos": "noun",
      "gloss": "carriage, train-car",
      "content": true
    },
    "نقب": {
      "root": "ن ق ب",
      "pos": "verb",
      "gloss": "to punch, inspect (tickets)",
      "content": true
    },
    "رد": {
      "root": "ر د د",
      "pos": "verb",
      "gloss": "to return, give back (something)",
      "content": true
    },
    "طريق": {
      "root": "ط ر ق",
      "pos": "noun",
      "gloss": "road, way",
      "content": true
    },
    "تغدى": {
      "root": "غ د و",
      "pos": "verb",
      "gloss": "to have lunch",
      "content": true
    },
    "شرب": {
      "root": "ش ر ب",
      "pos": "verb",
      "gloss": "to drink",
      "content": true
    },
    "حمد": {
      "root": "ح م د",
      "pos": "verb",
      "gloss": "to praise, thank",
      "content": true
    },
    "لم": {
      "root": "—",
      "pos": "part",
      "gloss": "not (negates the past)",
      "content": false
    },
    "زال": {
      "root": "ز ي ل",
      "pos": "verb",
      "gloss": "to cease, stop (being)",
      "content": true
    },
    "محطات": {
      "root": "ح ط ط",
      "pos": "noun",
      "gloss": "stations",
      "content": true
    },
    "ظهر": {
      "root": "ظ ه ر",
      "pos": "noun",
      "gloss": "Ẓuhr, noon",
      "content": true
    },
    "توضأ": {
      "root": "و ض أ",
      "pos": "verb",
      "gloss": "to make ablution (wuḍūʾ)",
      "content": true
    },
    "سرعة": {
      "root": "س ر ع",
      "pos": "noun",
      "gloss": "speed, quickness",
      "content": true
    },
    "صلى": {
      "root": "ص ل و",
      "pos": "verb",
      "gloss": "to pray",
      "content": true
    },
    "صلاة": {
      "root": "ص ل و",
      "pos": "noun",
      "gloss": "prayer",
      "content": true
    },
    "ركعة": {
      "root": "ر ك ع",
      "pos": "noun",
      "gloss": "rakʿah (unit of prayer)",
      "content": true
    },
    "سريع": {
      "root": "س ر ع",
      "pos": "adj",
      "gloss": "fast, quick",
      "content": true
    },
    "لو": {
      "root": "—",
      "pos": "part",
      "gloss": "if (hypothetical)",
      "content": false
    },
    "مسلم": {
      "root": "س ل م",
      "pos": "noun",
      "gloss": "Muslim",
      "content": true
    },
    "مكان": {
      "root": "ك و ن",
      "pos": "noun",
      "gloss": "place",
      "content": true
    },
    "وضوء": {
      "root": "و ض أ",
      "pos": "noun",
      "gloss": "ablution (wuḍūʾ)",
      "content": true
    },
    "أذن": {
      "root": "أ ذ ن",
      "pos": "verb",
      "gloss": "to call the adhān",
      "content": true
    },
    "جماعة": {
      "root": "ج م ع",
      "pos": "noun",
      "gloss": "congregation, group",
      "content": true
    },
    "عصر": {
      "root": "ع ص ر",
      "pos": "noun",
      "gloss": "ʿAṣr, afternoon",
      "content": true
    },
    "نافذة": {
      "root": "ن ف ذ",
      "pos": "noun",
      "gloss": "window",
      "content": true
    },
    "هاشم": {
      "root": "—",
      "pos": "proper",
      "gloss": "Hāshim (a name)",
      "content": true
    },
    "سعيد": {
      "root": "—",
      "pos": "proper",
      "gloss": "Saʿīd (a name)",
      "content": true
    },
    "عرف": {
      "root": "ع ر ف",
      "pos": "verb",
      "gloss": "to know, recognize",
      "content": true
    },
    "قرية": {
      "root": "ق ر ي",
      "pos": "noun",
      "gloss": "village",
      "content": true
    },
    "قابل": {
      "root": "ق ب ل",
      "pos": "verb",
      "gloss": "to meet",
      "content": true
    },
    "حدث": {
      "root": "ح د ث",
      "pos": "verb",
      "gloss": "to tell, narrate",
      "content": true
    },
    "حديث": {
      "root": "ح د ث",
      "pos": "noun",
      "gloss": "talk, account",
      "content": true
    },
    "بلد": {
      "root": "ب ل د",
      "pos": "noun",
      "gloss": "town, country, city",
      "content": true
    },
    "أخبر": {
      "root": "خ ب ر",
      "pos": "verb",
      "gloss": "to inform",
      "content": true
    },
    "عجيبة": {
      "root": "ع ج ب",
      "pos": "noun",
      "gloss": "wonder, marvel",
      "content": true
    },
    "حكى": {
      "root": "ح ك ي",
      "pos": "verb",
      "gloss": "to recount, narrate",
      "content": true
    },
    "ما": {
      "root": "—",
      "pos": "part",
      "gloss": "what; that which",
      "content": false
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "I will never forget my first journey. I learned I was traveling early in the morning with my mother and my siblings, so I woke before dawn and kept waiting for the hour of departure. The household woke early, and my uncle came; movement and voices began in the house -- this one running about, that one rolling up the bedding, this one calling out, that one answering. The uncle grew angry and hurried everyone along; father stood commanding and forbidding, growing angry and guiding; the servant prepared the provisions -- until it was time to leave the house, and the train's appointed hour drew near.",
      "sentences": [
        {
          "id": "qr1-8-001",
          "page": 49,
          "ar": "لَا أَنْسَىٰ سَفَرِي الْأَوَّلَ.",
          "en": "I will never forget my first journey.",
          "tokens": [
            {
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not"
            },
            {
              "surface": "أَنْسَىٰ",
              "lemma": "أنس",
              "features": "impf.1s",
              "root": "أ ن س",
              "pos": "verb",
              "gloss": "to forget (with لا: never forget)"
            },
            {
              "surface": "سَفَرِي",
              "lemma": "سفر",
              "features": "acc+1s",
              "root": "س ف ر",
              "pos": "noun",
              "gloss": "travel, journey"
            },
            {
              "surface": "الْأَوَّلَ",
              "lemma": "أول",
              "features": "def.acc",
              "root": "أ و ل",
              "pos": "adj",
              "gloss": "first"
            }
          ]
        },
        {
          "id": "qr1-8-002",
          "page": 49,
          "ar": "عَلِمْتُ أَنِّي مُسَافِرٌ بُكْرَةً مَعَ أُمِّيْ وَإِخْوَتِيْ.",
          "en": "I learned I was traveling early in the morning with my mother and my siblings.",
          "tokens": [
            {
              "surface": "عَلِمْتُ",
              "lemma": "علم",
              "features": "perf.1s",
              "root": "ع ل م",
              "pos": "verb",
              "gloss": "to know, learn"
            },
            {
              "surface": "أَنِّي",
              "lemma": "أن",
              "features": "part+1s",
              "root": "",
              "pos": "part",
              "gloss": "that"
            },
            {
              "surface": "مُسَافِرٌ",
              "lemma": "سافر",
              "features": "indef.nom",
              "root": "س ف ر",
              "pos": "noun",
              "gloss": "to travel"
            },
            {
              "surface": "بُكْرَةً",
              "lemma": "بكرة",
              "features": "indef.acc",
              "root": "ب ك ر",
              "pos": "noun",
              "gloss": "early morning, daybreak"
            },
            {
              "surface": "مَعَ",
              "lemma": "مع",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "with"
            },
            {
              "surface": "أُمِّيْ",
              "lemma": "أم",
              "features": "gen+1s",
              "root": "أ م م",
              "pos": "noun",
              "gloss": "mother"
            },
            {
              "surface": "وَإِخْوَتِيْ",
              "lemma": "أخ",
              "features": "conj+pl.gen+1s",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brother"
            }
          ]
        },
        {
          "id": "qr1-8-003",
          "page": 49,
          "ar": "فَاسْتَيْقَظْتُ قَبْلَ السَّحَرِ وَبَقِيْتُ أَنْتَظِرُ سَاعَةَ السَّفَرِ.",
          "en": "So I woke before dawn and kept waiting for the hour of departure.",
          "tokens": [
            {
              "surface": "فَاسْتَيْقَظْتُ",
              "lemma": "استيقظ",
              "features": "conj+perf.1s",
              "root": "ي ق ظ",
              "pos": "verb",
              "gloss": "to wake up"
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
              "surface": "السَّحَرِ",
              "lemma": "سحر",
              "features": "def.gen",
              "root": "س ح ر",
              "pos": "noun",
              "gloss": "pre-dawn time"
            },
            {
              "surface": "وَبَقِيْتُ",
              "lemma": "بقي",
              "features": "conj+perf.1s",
              "root": "ب ق ي",
              "pos": "verb",
              "gloss": "to remain, keep on (doing)"
            },
            {
              "surface": "أَنْتَظِرُ",
              "lemma": "انتظر",
              "features": "impf.1s",
              "root": "ن ظ ر",
              "pos": "verb",
              "gloss": "to wait for"
            },
            {
              "surface": "سَاعَةَ",
              "lemma": "ساعة",
              "features": "acc.constr",
              "root": "س و ع",
              "pos": "noun",
              "gloss": "hour"
            },
            {
              "surface": "السَّفَرِ",
              "lemma": "سفر",
              "features": "def.gen",
              "root": "س ف ر",
              "pos": "noun",
              "gloss": "travel, journey"
            }
          ]
        },
        {
          "id": "qr1-8-004",
          "page": 49,
          "ar": "وَاسْتَيْقَظَ أَهْلُ الْبَيْتِ مُبَكِّرِيْنَ وَجَاءَ عَمِّيْ.",
          "en": "The household woke up early, and my uncle came.",
          "tokens": [
            {
              "surface": "وَاسْتَيْقَظَ",
              "lemma": "استيقظ",
              "features": "conj+perf.3ms",
              "root": "ي ق ظ",
              "pos": "verb",
              "gloss": "to wake up"
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
              "surface": "مُبَكِّرِيْنَ",
              "lemma": "بكر",
              "features": "pl.acc",
              "root": "ب ك ر",
              "pos": "adj",
              "gloss": "early, early-rising"
            },
            {
              "surface": "وَجَاءَ",
              "lemma": "جاء",
              "features": "conj+perf.3ms",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            },
            {
              "surface": "عَمِّيْ",
              "lemma": "عم",
              "features": "nom+1s",
              "root": "ع م م",
              "pos": "noun",
              "gloss": "paternal uncle"
            }
          ]
        },
        {
          "id": "qr1-8-005",
          "page": 49,
          "ar": "وَبَدَأَتْ فِي الْبَيْتِ حَرَكَةٌ وَأَصْوَاتٌ.",
          "en": "Movement and voices began in the house.",
          "tokens": [
            {
              "surface": "وَبَدَأَتْ",
              "lemma": "بدأ",
              "features": "conj+perf.3fs",
              "root": "ب د أ",
              "pos": "verb",
              "gloss": "to begin"
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
              "surface": "الْبَيْتِ",
              "lemma": "بيت",
              "features": "def.gen",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            },
            {
              "surface": "حَرَكَةٌ",
              "lemma": "حركة",
              "features": "indef.nom",
              "root": "ح ر ك",
              "pos": "noun",
              "gloss": "movement, motion"
            },
            {
              "surface": "وَأَصْوَاتٌ",
              "lemma": "صوت",
              "features": "conj+pl.indef.nom",
              "root": "ص و ت",
              "pos": "noun",
              "gloss": "voice, sound"
            }
          ]
        },
        {
          "id": "qr1-8-006",
          "page": 49,
          "ar": "هٰذَا يَجْرِيْ وَذٰلِكَ يَلُفُّ الْفِرَاشَ.",
          "en": "This one runs about, that one rolls up the bedding.",
          "tokens": [
            {
              "surface": "هٰذَا",
              "lemma": "هذا",
              "features": "nom",
              "root": "",
              "pos": "noun",
              "gloss": "this"
            },
            {
              "surface": "يَجْرِيْ",
              "lemma": "جرى",
              "features": "impf.3ms",
              "root": "ج ر ي",
              "pos": "verb",
              "gloss": "to run"
            },
            {
              "surface": "وَذٰلِكَ",
              "lemma": "ذلك",
              "features": "conj+nom",
              "root": "",
              "pos": "noun",
              "gloss": "that"
            },
            {
              "surface": "يَلُفُّ",
              "lemma": "لف",
              "features": "impf.3ms",
              "root": "ل ف ف",
              "pos": "verb",
              "gloss": "to roll up, fold up"
            },
            {
              "surface": "الْفِرَاشَ",
              "lemma": "فراش",
              "features": "def.acc",
              "root": "ف ر ش",
              "pos": "noun",
              "gloss": "bedding, mattress"
            }
          ]
        },
        {
          "id": "qr1-8-007",
          "page": 49,
          "ar": "وَهٰذَا يُنَادِيْ وَذٰلِكَ يُجِيْبُ.",
          "en": "This one calls out, that one answers.",
          "tokens": [
            {
              "surface": "وَهٰذَا",
              "lemma": "هذا",
              "features": "conj+nom",
              "root": "",
              "pos": "noun",
              "gloss": "this"
            },
            {
              "surface": "يُنَادِيْ",
              "lemma": "نادى",
              "features": "impf.3ms",
              "root": "ن د و",
              "pos": "verb",
              "gloss": "to call out"
            },
            {
              "surface": "وَذٰلِكَ",
              "lemma": "ذلك",
              "features": "conj+nom",
              "root": "",
              "pos": "noun",
              "gloss": "that"
            },
            {
              "surface": "يُجِيْبُ",
              "lemma": "أجاب",
              "features": "impf.3ms",
              "root": "ج و ب",
              "pos": "verb",
              "gloss": "to answer"
            }
          ]
        },
        {
          "id": "qr1-8-008",
          "page": 49,
          "ar": "وَالْعَمُّ يَغْضَبُ وَيَسْتَعْجِلُ.",
          "en": "The uncle grows angry and hurries everyone along.",
          "tokens": [
            {
              "surface": "وَالْعَمُّ",
              "lemma": "عم",
              "features": "conj+def.nom",
              "root": "ع م م",
              "pos": "noun",
              "gloss": "paternal uncle"
            },
            {
              "surface": "يَغْضَبُ",
              "lemma": "غضب",
              "features": "impf.3ms",
              "root": "غ ض ب",
              "pos": "verb",
              "gloss": "to be angry"
            },
            {
              "surface": "وَيَسْتَعْجِلُ",
              "lemma": "استعجل",
              "features": "conj+impf.3ms",
              "root": "ع ج ل",
              "pos": "verb",
              "gloss": "to hurry, hasten (someone)"
            }
          ]
        },
        {
          "id": "qr1-8-009",
          "page": 50,
          "ar": "وَالْوَالِدُ قَائِمٌ يَأْمُرُ وَيَنْهَىٰ وَيَغْضَبُ وَيُرْشِدُ.",
          "en": "Father stands commanding and forbidding, growing angry and guiding.",
          "tokens": [
            {
              "surface": "وَالْوَالِدُ",
              "lemma": "والد",
              "features": "conj+def.nom",
              "root": "و ل د",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "قَائِمٌ",
              "lemma": "قام",
              "features": "indef.nom",
              "root": "ق و م",
              "pos": "adj",
              "gloss": "standing"
            },
            {
              "surface": "يَأْمُرُ",
              "lemma": "أمر",
              "features": "impf.3ms",
              "root": "أ م ر",
              "pos": "verb",
              "gloss": "to command"
            },
            {
              "surface": "وَيَنْهَىٰ",
              "lemma": "نهى",
              "features": "conj+impf.3ms",
              "root": "ن ه ي",
              "pos": "verb",
              "gloss": "to forbid"
            },
            {
              "surface": "وَيَغْضَبُ",
              "lemma": "غضب",
              "features": "conj+impf.3ms",
              "root": "غ ض ب",
              "pos": "verb",
              "gloss": "to be angry"
            },
            {
              "surface": "وَيُرْشِدُ",
              "lemma": "أرشد",
              "features": "conj+impf.3ms",
              "root": "ر ش د",
              "pos": "verb",
              "gloss": "to guide, direct"
            }
          ]
        },
        {
          "id": "qr1-8-010",
          "page": 50,
          "ar": "وَالْخَادِمُ يُهَيِّئُ الزَّادَ.",
          "en": "The servant prepares the provisions.",
          "tokens": [
            {
              "surface": "وَالْخَادِمُ",
              "lemma": "خادم",
              "features": "conj+def.nom",
              "root": "خ د م",
              "pos": "noun",
              "gloss": "servant"
            },
            {
              "surface": "يُهَيِّئُ",
              "lemma": "هيأ",
              "features": "impf.3ms",
              "root": "ه ي أ",
              "pos": "verb",
              "gloss": "to prepare, get ready"
            },
            {
              "surface": "الزَّادَ",
              "lemma": "زاد",
              "features": "def.acc",
              "root": "ز و د",
              "pos": "noun",
              "gloss": "provisions (for a journey)"
            }
          ]
        },
        {
          "id": "qr1-8-011",
          "page": 50,
          "ar": "حَتَّىٰ كَانَ وَقْتُ الْخُرُوجِ مِنَ الْبَيْتِ وَقَرُبَ مِيْعَادُ الْقِطَارِ.",
          "en": "Until it was time to leave the house, and the train's appointed hour drew near.",
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
              "surface": "الْخُرُوجِ",
              "lemma": "خروج",
              "features": "def.gen",
              "root": "خ ر ج",
              "pos": "noun",
              "gloss": "going out, departure"
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
              "surface": "الْبَيْتِ",
              "lemma": "بيت",
              "features": "def.gen",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            },
            {
              "surface": "وَقَرُبَ",
              "lemma": "قرب",
              "features": "conj+perf.3ms",
              "root": "ق ر ب",
              "pos": "verb",
              "gloss": "to draw near, approach"
            },
            {
              "surface": "مِيْعَادُ",
              "lemma": "ميعاد",
              "features": "nom.constr",
              "root": "و ع د",
              "pos": "noun",
              "gloss": "appointed time"
            },
            {
              "surface": "الْقِطَارِ",
              "lemma": "قطار",
              "features": "def.gen",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَتَى اسْتَيْقَظَ الرَّاوِيْ يَوْمَ السَّفَرِ؟",
          "options": [
            "قَبْلَ السَّحَرِ",
            "بَعْدَ الظُّهْرِ",
            "فِي الْعَصْرِ"
          ],
          "answer": 0,
          "qEn": "When did the narrator wake up on the day of the journey?",
          "optionsEn": [
            "Before dawn",
            "After the noon",
            "In the afternoon"
          ]
        },
        {
          "q": "مَاذَا كَانَ يَفْعَلُ الْوَالِدُ صَبَاحَ السَّفَرِ؟",
          "options": [
            "كَانَ يَأْمُرُ وَيَنْهَىٰ وَيَغْضَبُ وَيُرْشِدُ",
            "كَانَ نَائِماً",
            "كَانَ يَقْرَأُ الْجَرِيْدَةَ"
          ],
          "answer": 0,
          "qEn": "What was father doing on the morning of the journey?",
          "optionsEn": [
            "He was commanding, forbidding, growing angry, and guiding",
            "He was asleep",
            "He was reading the newspaper"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "Two carriages came, and we rode in them. I bid my father farewell, and he saw me off and prayed for me. We reached the station, and the porters took the bags and belongings -- it was winter days, so the bedding-bundles were large. My uncle went and bought the train tickets.",
      "sentences": [
        {
          "id": "qr1-8-012",
          "page": 50,
          "ar": "جَاءَتْ مَرْكَبَتَانِ فَرَكِبْنَاهُمَا.",
          "en": "Two carriages came, and we rode in them.",
          "tokens": [
            {
              "surface": "جَاءَتْ",
              "lemma": "جاء",
              "features": "perf.3fs",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            },
            {
              "surface": "مَرْكَبَتَانِ",
              "lemma": "مركبة",
              "features": "indef.nom.du",
              "root": "ر ك ب",
              "pos": "noun",
              "gloss": "carriage, vehicle"
            },
            {
              "surface": "فَرَكِبْنَاهُمَا",
              "lemma": "ركب",
              "features": "conj+perf.1p+3d",
              "root": "ر ك ب",
              "pos": "verb",
              "gloss": "to ride, board"
            }
          ]
        },
        {
          "id": "qr1-8-013",
          "page": 50,
          "ar": "وَسَلَّمْتُ عَلَىٰ أَبِيْ فَوَدَّعَنِيْ وَدَعَا لِيْ.",
          "en": "I bid my father farewell, and he saw me off and prayed for me.",
          "tokens": [
            {
              "surface": "وَسَلَّمْتُ",
              "lemma": "سلم",
              "features": "conj+perf.1s",
              "root": "س ل م",
              "pos": "verb",
              "gloss": "to greet; to give the closing salām (of prayer)"
            },
            {
              "surface": "عَلَىٰ",
              "lemma": "على",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, to"
            },
            {
              "surface": "أَبِيْ",
              "lemma": "أب",
              "features": "gen+1s",
              "root": "أ ب و",
              "pos": "noun",
              "gloss": "father"
            },
            {
              "surface": "فَوَدَّعَنِيْ",
              "lemma": "ودع",
              "features": "conj+perf.3ms+1s",
              "root": "و د ع",
              "pos": "verb",
              "gloss": "to bid farewell"
            },
            {
              "surface": "وَدَعَا",
              "lemma": "دعا",
              "features": "conj+perf.3ms",
              "root": "د ع و",
              "pos": "verb",
              "gloss": "to pray for, invoke blessing upon"
            },
            {
              "surface": "لِيْ",
              "lemma": "لي",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "for, to"
            }
          ]
        },
        {
          "id": "qr1-8-014",
          "page": 50,
          "ar": "وَوَصَلْنَا إِلَىٰ الْمَحَطَّةِ فَأَخَذَ الْحَمَّالُوْنَ الْحَوَائِجَ وَالْمَتَاعَ.",
          "en": "We reached the station, and the porters took the bags and belongings.",
          "tokens": [
            {
              "surface": "وَوَصَلْنَا",
              "lemma": "وصل",
              "features": "conj+perf.1p",
              "root": "و ص ل",
              "pos": "verb",
              "gloss": "to arrive"
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
              "surface": "الْمَحَطَّةِ",
              "lemma": "محطة",
              "features": "def.gen",
              "root": "ح ط ط",
              "pos": "noun",
              "gloss": "station"
            },
            {
              "surface": "فَأَخَذَ",
              "lemma": "أخذ",
              "features": "conj+perf.3ms",
              "root": "أ خ ذ",
              "pos": "verb",
              "gloss": "to take"
            },
            {
              "surface": "الْحَمَّالُوْنَ",
              "lemma": "حمال",
              "features": "pl.def.nom",
              "root": "ح م ل",
              "pos": "noun",
              "gloss": "porter"
            },
            {
              "surface": "الْحَوَائِجَ",
              "lemma": "حاجة",
              "features": "pl.def.acc",
              "root": "ح و ج",
              "pos": "noun",
              "gloss": "need, thing needed; (pl.) belongings"
            },
            {
              "surface": "وَالْمَتَاعَ",
              "lemma": "متاع",
              "features": "conj+def.acc",
              "root": "م ت ع",
              "pos": "noun",
              "gloss": "goods, luggage"
            }
          ]
        },
        {
          "id": "qr1-8-015",
          "page": 50,
          "ar": "وَكَانَتْ أَيَّامُ شِتَاءٍ فَكَانَتِ الْفُرُشُ كَبِيْرَةً.",
          "en": "It was winter days, so the bedding-bundles were large.",
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
              "surface": "شِتَاءٍ",
              "lemma": "شتاء",
              "features": "indef.gen",
              "root": "ش ت و",
              "pos": "noun",
              "gloss": "winter"
            },
            {
              "surface": "فَكَانَتِ",
              "lemma": "كان",
              "features": "conj+perf.3fs",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "الْفُرُشُ",
              "lemma": "فراش",
              "features": "pl.def.nom",
              "root": "ف ر ش",
              "pos": "noun",
              "gloss": "bedding, mattress"
            },
            {
              "surface": "كَبِيْرَةً",
              "lemma": "كبير",
              "features": "indef.acc",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "big, large"
            }
          ]
        },
        {
          "id": "qr1-8-016",
          "page": 50,
          "ar": "وَذَهَبَ عَمِّيْ فَاشْتَرَىٰ تَذَاكِرَ الْقِطَارِ.",
          "en": "My uncle went and bought the train tickets.",
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
              "surface": "عَمِّيْ",
              "lemma": "عم",
              "features": "nom+1s",
              "root": "ع م م",
              "pos": "noun",
              "gloss": "paternal uncle"
            },
            {
              "surface": "فَاشْتَرَىٰ",
              "lemma": "اشترى",
              "features": "conj+perf.3ms",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            },
            {
              "surface": "تَذَاكِرَ",
              "lemma": "تذكرة",
              "features": "pl.acc.constr",
              "root": "ذ ك ر",
              "pos": "noun",
              "gloss": "ticket"
            },
            {
              "surface": "الْقِطَارِ",
              "lemma": "قطار",
              "features": "def.gen",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلَ الْحَمَّالُوْنَ فِي الْمَحَطَّةِ؟",
          "options": [
            "أَخَذُوا الْحَوَائِجَ وَالْمَتَاعَ",
            "بَاعُوا التَّذَاكِرَ",
            "نَامُوا"
          ],
          "answer": 0,
          "qEn": "What did the porters do at the station?",
          "optionsEn": [
            "They took the bags and belongings",
            "They sold the tickets",
            "They slept"
          ]
        },
        {
          "q": "لِمَاذَا كَانَتِ الْفُرُشُ كَبِيْرَةً؟",
          "options": [
            "لِأَنَّهَا كَانَتْ أَيَّامَ شِتَاءٍ",
            "لِأَنَّهُمْ كَانُوا كَثِيْرِيْنَ",
            "لِأَنَّ الْقِطَارَ كَانَ بَعِيْداً"
          ],
          "answer": 0,
          "qEn": "Why were the bedding-bundles large?",
          "optionsEn": [
            "Because it was winter days",
            "Because they were many people",
            "Because the train was far away"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "I asked my uncle about the fare, and he said: \"The fare is three rupees, and one and a half is for you.\" I said to my uncle: \"Give me my ticket.\" My uncle said: \"You will lose your ticket.\" I said: \"No! I will take care of my ticket, God willing.\" So he gave me my ticket, and I put it away with me.",
      "sentences": [
        {
          "id": "qr1-8-017",
          "page": 50,
          "ar": "وَسَأَلْتُ عَمِّيْ عَنِ النَّوْلِ فَقَالَ: إِنَّ النَّوْلَ ثَلَاثُ رُبِّيَّاتٍ، وَرُبِّيَّةٌ وَنِصْفٌ لَكَ.",
          "en": "I asked my uncle about the fare, and he said: \"The fare is three rupees, and one and a half is for you.\"",
          "tokens": [
            {
              "surface": "وَسَأَلْتُ",
              "lemma": "سأل",
              "features": "conj+perf.1s",
              "root": "س أ ل",
              "pos": "verb",
              "gloss": "to ask"
            },
            {
              "surface": "عَمِّيْ",
              "lemma": "عم",
              "features": "acc+1s",
              "root": "ع م م",
              "pos": "noun",
              "gloss": "paternal uncle"
            },
            {
              "surface": "عَنِ",
              "lemma": "عن",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "about, from"
            },
            {
              "surface": "النَّوْلِ",
              "lemma": "نول",
              "features": "def.gen",
              "root": "ن و ل",
              "pos": "noun",
              "gloss": "fare"
            },
            {
              "surface": "فَقَالَ",
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
              "gloss": "if; indeed, verily"
            },
            {
              "surface": "النَّوْلَ",
              "lemma": "نول",
              "features": "def.acc",
              "root": "ن و ل",
              "pos": "noun",
              "gloss": "fare"
            },
            {
              "surface": "ثَلَاثُ",
              "lemma": "ثلاث",
              "features": "nom.constr",
              "root": "ث ل ث",
              "pos": "num",
              "gloss": "three"
            },
            {
              "surface": "رُبِّيَّاتٍ",
              "lemma": "ربية",
              "features": "pl.indef.gen",
              "root": "ر ب ي",
              "pos": "noun",
              "gloss": "rupee"
            },
            {
              "surface": "وَرُبِّيَّةٌ",
              "lemma": "ربية",
              "features": "conj+indef.nom",
              "root": "ر ب ي",
              "pos": "noun",
              "gloss": "rupee"
            },
            {
              "surface": "وَنِصْفٌ",
              "lemma": "نصف",
              "features": "conj+indef.nom",
              "root": "ن ص ف",
              "pos": "noun",
              "gloss": "half"
            },
            {
              "surface": "لَكَ",
              "lemma": "لي",
              "features": "prep+2ms",
              "root": "",
              "pos": "prep",
              "gloss": "for, to"
            }
          ]
        },
        {
          "id": "qr1-8-018",
          "page": 50,
          "ar": "وَقُلْتُ لِعَمِّيْ: أَعْطِنِيْ تَذْكِرَتِيْ.",
          "en": "I said to my uncle: \"Give me my ticket.\"",
          "tokens": [
            {
              "surface": "وَقُلْتُ",
              "lemma": "قال",
              "features": "conj+perf.1s",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "لِعَمِّيْ",
              "lemma": "عم",
              "features": "prep+gen+1s",
              "root": "ع م م",
              "pos": "noun",
              "gloss": "paternal uncle"
            },
            {
              "surface": "أَعْطِنِيْ",
              "lemma": "أعطى",
              "features": "imp.2ms+1s",
              "root": "ع ط و",
              "pos": "verb",
              "gloss": "to give"
            },
            {
              "surface": "تَذْكِرَتِيْ",
              "lemma": "تذكرة",
              "features": "acc+1s",
              "root": "ذ ك ر",
              "pos": "noun",
              "gloss": "ticket"
            }
          ]
        },
        {
          "id": "qr1-8-019",
          "page": 50,
          "ar": "فَقَالَ عَمِّيْ: إِنَّكَ تُضَيِّعُ تَذْكِرَتَكَ.",
          "en": "My uncle said: \"You will lose your ticket.\"",
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
              "surface": "عَمِّيْ",
              "lemma": "عم",
              "features": "nom+1s",
              "root": "ع م م",
              "pos": "noun",
              "gloss": "paternal uncle"
            },
            {
              "surface": "إِنَّكَ",
              "lemma": "إن",
              "features": "part+2ms",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed, verily"
            },
            {
              "surface": "تُضَيِّعُ",
              "lemma": "ضيع",
              "features": "impf.2ms",
              "root": "ض ي ع",
              "pos": "verb",
              "gloss": "to lose, waste"
            },
            {
              "surface": "تَذْكِرَتَكَ",
              "lemma": "تذكرة",
              "features": "acc+2ms",
              "root": "ذ ك ر",
              "pos": "noun",
              "gloss": "ticket"
            }
          ]
        },
        {
          "id": "qr1-8-020",
          "page": 50,
          "ar": "فَقُلْتُ: لَا! سَأُحَافِظُ عَلَىٰ تَذْكِرَتِيْ إِنْ شَاءَ اللهُ.",
          "en": "I said: \"No! I will take care of my ticket, God willing.\"",
          "tokens": [
            {
              "surface": "فَقُلْتُ",
              "lemma": "قال",
              "features": "conj+perf.1s",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
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
              "surface": "سَأُحَافِظُ",
              "lemma": "حافظ",
              "features": "impf.1s",
              "root": "ح ف ظ",
              "pos": "verb",
              "gloss": "to look after, take care of, keep up (a practice)"
            },
            {
              "surface": "عَلَىٰ",
              "lemma": "على",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, to"
            },
            {
              "surface": "تَذْكِرَتِيْ",
              "lemma": "تذكرة",
              "features": "gen+1s",
              "root": "ذ ك ر",
              "pos": "noun",
              "gloss": "ticket"
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
            }
          ]
        },
        {
          "id": "qr1-8-021",
          "page": 50,
          "ar": "فَأَعْطَانِيْ تَذْكِرَتِيْ وَوَضَعْتُهَا عِنْدِيْ.",
          "en": "So he gave me my ticket, and I put it away with me.",
          "tokens": [
            {
              "surface": "فَأَعْطَانِيْ",
              "lemma": "أعطى",
              "features": "conj+perf.3ms+1s",
              "root": "ع ط و",
              "pos": "verb",
              "gloss": "to give"
            },
            {
              "surface": "تَذْكِرَتِيْ",
              "lemma": "تذكرة",
              "features": "acc+1s",
              "root": "ذ ك ر",
              "pos": "noun",
              "gloss": "ticket"
            },
            {
              "surface": "وَوَضَعْتُهَا",
              "lemma": "وضع",
              "features": "conj+perf.1s+3fs",
              "root": "و ض ع",
              "pos": "verb",
              "gloss": "to put, place"
            },
            {
              "surface": "عِنْدِيْ",
              "lemma": "عند",
              "features": "prep+1s",
              "root": "ع ن د",
              "pos": "prep",
              "gloss": "at, by, with"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَمْ كَانَ النَّوْلُ؟",
          "options": [
            "ثَلَاثَ رُبِّيَّاتٍ وَنِصْفاً",
            "رُبِّيَّتَيْنِ",
            "خَمْسَ رُبِّيَّاتٍ"
          ],
          "answer": 0,
          "qEn": "How much was the fare?",
          "optionsEn": [
            "Three and a half rupees",
            "Two rupees",
            "Five rupees"
          ]
        },
        {
          "q": "لِمَاذَا لَمْ يُعْطِ الْعَمُّ الرَّاوِيَ تَذْكِرَتَهُ أَوَّلًا؟",
          "options": [
            "ظَنَّ أَنَّهُ سَيُضَيِّعُهَا",
            "لَمْ يَكُنْ مَعَهُ تَذَاكِرُ",
            "كَانَ غَاضِباً مِنْهُ"
          ],
          "answer": 0,
          "qEn": "Why didn't the uncle give the narrator his ticket at first?",
          "optionsEn": [
            "He thought he would lose it",
            "He had no tickets with him",
            "He was angry with him"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "We entered the station and saw many men, women, and children -- we saw an intense crowd, and heard the voices of the people and children, the porters' shouting, and the locomotive's whistle.",
      "sentences": [
        {
          "id": "qr1-8-022",
          "page": 50,
          "ar": "دَخَلْنَا الْمَحَطَّةَ فَرَأَيْنَا رِجَالًا كَثِيْراً وَنِسَاءً وَأَطْفَالًا.",
          "en": "We entered the station and saw many men, women, and children.",
          "tokens": [
            {
              "surface": "دَخَلْنَا",
              "lemma": "دخل",
              "features": "perf.1p",
              "root": "د خ ل",
              "pos": "verb",
              "gloss": "to enter"
            },
            {
              "surface": "الْمَحَطَّةَ",
              "lemma": "محطة",
              "features": "def.acc",
              "root": "ح ط ط",
              "pos": "noun",
              "gloss": "station"
            },
            {
              "surface": "فَرَأَيْنَا",
              "lemma": "رأى",
              "features": "conj+perf.1p",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "رِجَالًا",
              "lemma": "رجل",
              "features": "pl.indef.acc",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "man"
            },
            {
              "surface": "كَثِيْراً",
              "lemma": "كثير",
              "features": "indef.acc",
              "root": "ك ث ر",
              "pos": "adj",
              "gloss": "much, many"
            },
            {
              "surface": "وَنِسَاءً",
              "lemma": "امرأة",
              "features": "conj+pl.indef.acc",
              "root": "م ر أ",
              "pos": "noun",
              "gloss": "woman"
            },
            {
              "surface": "وَأَطْفَالًا",
              "lemma": "طفل",
              "features": "conj+pl.indef.acc",
              "root": "ط ف ل",
              "pos": "noun",
              "gloss": "child"
            }
          ]
        },
        {
          "id": "qr1-8-023",
          "page": 50,
          "ar": "وَرَأَيْنَا زِحَاماً شَدِيْداً.",
          "en": "We saw an intense crowd.",
          "tokens": [
            {
              "surface": "وَرَأَيْنَا",
              "lemma": "رأى",
              "features": "conj+perf.1p",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "زِحَاماً",
              "lemma": "زحام",
              "features": "indef.acc",
              "root": "ز ح م",
              "pos": "noun",
              "gloss": "crowding, crush"
            },
            {
              "surface": "شَدِيْداً",
              "lemma": "شديد",
              "features": "indef.acc",
              "root": "ش د د",
              "pos": "adj",
              "gloss": "intense, severe"
            }
          ]
        },
        {
          "id": "qr1-8-024",
          "page": 50,
          "ar": "وَسَمِعْنَا أَصْوَاتَ النَّاسِ وَالْأَطْفَالِ وَصَيْحَةَ الْحَمَّالِيْنَ وَصَفِيْرَ الْقَاطِرَةِ.",
          "en": "We heard the voices of the people and children, the porters' shouting, and the locomotive's whistle.",
          "tokens": [
            {
              "surface": "وَسَمِعْنَا",
              "lemma": "سمع",
              "features": "conj+perf.1p",
              "root": "س م ع",
              "pos": "verb",
              "gloss": "to hear, listen to"
            },
            {
              "surface": "أَصْوَاتَ",
              "lemma": "صوت",
              "features": "pl.acc.constr",
              "root": "ص و ت",
              "pos": "noun",
              "gloss": "voice, sound"
            },
            {
              "surface": "النَّاسِ",
              "lemma": "ناس",
              "features": "def.gen",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
            },
            {
              "surface": "وَالْأَطْفَالِ",
              "lemma": "طفل",
              "features": "conj+pl.def.gen",
              "root": "ط ف ل",
              "pos": "noun",
              "gloss": "child"
            },
            {
              "surface": "وَصَيْحَةَ",
              "lemma": "صيحة",
              "features": "conj+acc.constr",
              "root": "ص ي ح",
              "pos": "noun",
              "gloss": "shout, cry"
            },
            {
              "surface": "الْحَمَّالِيْنَ",
              "lemma": "حمال",
              "features": "pl.def.gen",
              "root": "ح م ل",
              "pos": "noun",
              "gloss": "porter"
            },
            {
              "surface": "وَصَفِيْرَ",
              "lemma": "صفير",
              "features": "conj+acc.constr",
              "root": "ص ف ر",
              "pos": "noun",
              "gloss": "whistle (sound)"
            },
            {
              "surface": "الْقَاطِرَةِ",
              "lemma": "قاطرة",
              "features": "def.gen",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "locomotive, engine"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا سَمِعَ الرَّاوِيْ فِي الْمَحَطَّةِ؟",
          "options": [
            "أَصْوَاتَ النَّاسِ وَصَيْحَةَ الْحَمَّالِيْنَ وَصَفِيْرَ الْقَاطِرَةِ",
            "صَوْتَ الْمَطَرِ",
            "لَا شَيْءَ"
          ],
          "answer": 0,
          "qEn": "What did the narrator hear at the station?",
          "optionsEn": [
            "The voices of the people, the porters' shouting, and the locomotive's whistle",
            "The sound of rain",
            "Nothing"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "Our train was late, so we went to the waiting hall and sat a while. Then I came to the platform to see whether the train had come, then I returned to the waiting hall. After a little while the train came, and we went out of the waiting hall; all the people stood on the platform, and the train stopped -- some people got off, some got on, and we got on too.",
      "sentences": [
        {
          "id": "qr1-8-025",
          "page": 50,
          "ar": "وَكَانَ قِطَارُنَا مُتَأَخِّراً فَذَهَبْنَا إِلَى الْمَنْظَرَةِ وَجَلَسْنَا قَلِيْلًا.",
          "en": "Our train was late, so we went to the waiting hall and sat a while.",
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
              "surface": "قِطَارُنَا",
              "lemma": "قطار",
              "features": "nom+1p",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            },
            {
              "surface": "مُتَأَخِّراً",
              "lemma": "متأخر",
              "features": "indef.acc",
              "root": "أ خ ر",
              "pos": "adj",
              "gloss": "late"
            },
            {
              "surface": "فَذَهَبْنَا",
              "lemma": "ذهب",
              "features": "conj+perf.1p",
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
              "gloss": "to, towards"
            },
            {
              "surface": "الْمَنْظَرَةِ",
              "lemma": "منظرة",
              "features": "def.gen",
              "root": "ن ظ ر",
              "pos": "noun",
              "gloss": "waiting hall, lounge"
            },
            {
              "surface": "وَجَلَسْنَا",
              "lemma": "جلس",
              "features": "conj+perf.1p",
              "root": "ج ل س",
              "pos": "verb",
              "gloss": "to sit"
            },
            {
              "surface": "قَلِيْلًا",
              "lemma": "قليل",
              "features": "indef.acc",
              "root": "ق ل ل",
              "pos": "adj",
              "gloss": "a little, few"
            }
          ]
        },
        {
          "id": "qr1-8-026",
          "page": 51,
          "ar": "ثُمَّ جِئْتُ إِلَى الرَّصِيْفِ لِأَرَىٰ هَلْ جَاءَ الْقِطَارُ.",
          "en": "Then I came to the platform to see whether the train had come.",
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
              "surface": "جِئْتُ",
              "lemma": "جاء",
              "features": "perf.1s",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
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
              "surface": "الرَّصِيْفِ",
              "lemma": "رصيف",
              "features": "def.gen",
              "root": "ر ص ف",
              "pos": "noun",
              "gloss": "platform"
            },
            {
              "surface": "لِأَرَىٰ",
              "lemma": "رأى",
              "features": "prep+impf.1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
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
              "surface": "جَاءَ",
              "lemma": "جاء",
              "features": "perf.3ms",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            },
            {
              "surface": "الْقِطَارُ",
              "lemma": "قطار",
              "features": "def.nom",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            }
          ]
        },
        {
          "id": "qr1-8-027",
          "page": 51,
          "ar": "ثُمَّ رَجَعْتُ إِلَى الْمَنْظَرَةِ.",
          "en": "Then I returned to the waiting hall.",
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
              "surface": "رَجَعْتُ",
              "lemma": "رجع",
              "features": "perf.1s",
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
              "gloss": "to, towards"
            },
            {
              "surface": "الْمَنْظَرَةِ",
              "lemma": "منظرة",
              "features": "def.gen",
              "root": "ن ظ ر",
              "pos": "noun",
              "gloss": "waiting hall, lounge"
            }
          ]
        },
        {
          "id": "qr1-8-028",
          "page": 51,
          "ar": "وَبَعْدَ قَلِيْلٍ جَاءَ الْقِطَارُ فَخَرَجْنَا مِنَ الْمَنْظَرَةِ.",
          "en": "After a little while the train came, and we went out of the waiting hall.",
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
              "surface": "قَلِيْلٍ",
              "lemma": "قليل",
              "features": "indef.gen",
              "root": "ق ل ل",
              "pos": "adj",
              "gloss": "a little, few"
            },
            {
              "surface": "جَاءَ",
              "lemma": "جاء",
              "features": "perf.3ms",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            },
            {
              "surface": "الْقِطَارُ",
              "lemma": "قطار",
              "features": "def.nom",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            },
            {
              "surface": "فَخَرَجْنَا",
              "lemma": "خرج",
              "features": "conj+perf.1p",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
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
              "surface": "الْمَنْظَرَةِ",
              "lemma": "منظرة",
              "features": "def.gen",
              "root": "ن ظ ر",
              "pos": "noun",
              "gloss": "waiting hall, lounge"
            }
          ]
        },
        {
          "id": "qr1-8-029",
          "page": 51,
          "ar": "وَقَامَ النَّاسُ كُلُّهُمْ عَلَىٰ الرَّصِيْفِ وَوَقَفَ الْقِطَارُ.",
          "en": "All the people stood on the platform, and the train stopped.",
          "tokens": [
            {
              "surface": "وَقَامَ",
              "lemma": "قام",
              "features": "conj+perf.3ms",
              "root": "ق و م",
              "pos": "verb",
              "gloss": "to stand up, rise"
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
              "surface": "كُلُّهُمْ",
              "lemma": "كل",
              "features": "nom+3mp",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "all, every"
            },
            {
              "surface": "عَلَىٰ",
              "lemma": "على",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, to"
            },
            {
              "surface": "الرَّصِيْفِ",
              "lemma": "رصيف",
              "features": "def.gen",
              "root": "ر ص ف",
              "pos": "noun",
              "gloss": "platform"
            },
            {
              "surface": "وَوَقَفَ",
              "lemma": "وقف",
              "features": "conj+perf.3ms",
              "root": "و ق ف",
              "pos": "verb",
              "gloss": "to stop, stand"
            },
            {
              "surface": "الْقِطَارُ",
              "lemma": "قطار",
              "features": "def.nom",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            }
          ]
        },
        {
          "id": "qr1-8-030",
          "page": 51,
          "ar": "وَنَزَلَ أُنَاسٌ وَرَكِبَ أُنَاسٌ وَرَكِبْنَا.",
          "en": "Some people got off, some got on, and we got on too.",
          "tokens": [
            {
              "surface": "وَنَزَلَ",
              "lemma": "نزل",
              "features": "conj+perf.3ms",
              "root": "ن ز ل",
              "pos": "verb",
              "gloss": "to alight, get off, come down"
            },
            {
              "surface": "أُنَاسٌ",
              "lemma": "ناس",
              "features": "indef.nom",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
            },
            {
              "surface": "وَرَكِبَ",
              "lemma": "ركب",
              "features": "conj+perf.3ms",
              "root": "ر ك ب",
              "pos": "verb",
              "gloss": "to ride, board"
            },
            {
              "surface": "أُنَاسٌ",
              "lemma": "ناس",
              "features": "indef.nom",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
            },
            {
              "surface": "وَرَكِبْنَا",
              "lemma": "ركب",
              "features": "conj+perf.1p",
              "root": "ر ك ب",
              "pos": "verb",
              "gloss": "to ride, board"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "أَيْنَ جَلَسَ الرَّاوِيْ لَمَّا تَأَخَّرَ الْقِطَارُ؟",
          "options": [
            "فِي الْمَنْظَرَةِ",
            "عَلَى الرَّصِيْفِ",
            "فِي عَرَبَةِ الْقِطَارِ"
          ],
          "answer": 0,
          "qEn": "Where did the narrator sit when the train was late?",
          "optionsEn": [
            "In the waiting hall",
            "On the platform",
            "In the train carriage"
          ]
        },
        {
          "q": "مَاذَا فَعَلَ النَّاسُ لَمَّا وَقَفَ الْقِطَارُ؟",
          "options": [
            "نَزَلَ أُنَاسٌ وَرَكِبَ أُنَاسٌ",
            "بَقُوا كُلُّهُمْ فِي الْمَنْظَرَةِ",
            "رَجَعُوا إِلَى بُيُوْتِهِمْ"
          ],
          "answer": 0,
          "qEn": "What did the people do when the train stopped?",
          "optionsEn": [
            "Some got off, some got on",
            "They all stayed in the waiting hall",
            "They went back to their houses"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "en": "I would look out from the train and see the sights; the crowding on the train was intense. The vendors came, and the people began buying and eating -- some people bought gifts from the vendors for their friends and relatives.",
      "sentences": [
        {
          "id": "qr1-8-031",
          "page": 51,
          "ar": "وَكُنْتُ أُطِلُّ مِنَ الْقِطَارِ وَأَرَىٰ الْمَنَاظِرَ.",
          "en": "I would look out from the train and see the sights.",
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
              "surface": "أُطِلُّ",
              "lemma": "أطل",
              "features": "impf.1s",
              "root": "ط ل ل",
              "pos": "verb",
              "gloss": "to look out, overlook"
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
              "surface": "الْقِطَارِ",
              "lemma": "قطار",
              "features": "def.gen",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            },
            {
              "surface": "وَأَرَىٰ",
              "lemma": "رأى",
              "features": "conj+impf.1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "الْمَنَاظِرَ",
              "lemma": "منظر",
              "features": "pl.def.acc",
              "root": "ن ظ ر",
              "pos": "noun",
              "gloss": "sight, view"
            }
          ]
        },
        {
          "id": "qr1-8-032",
          "page": 51,
          "ar": "وَكَانَ الزِّحَامُ شَدِيْداً فِي الْقِطَارِ.",
          "en": "The crowding on the train was intense.",
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
              "surface": "الزِّحَامُ",
              "lemma": "زحام",
              "features": "def.nom",
              "root": "ز ح م",
              "pos": "noun",
              "gloss": "crowding, crush"
            },
            {
              "surface": "شَدِيْداً",
              "lemma": "شديد",
              "features": "indef.acc",
              "root": "ش د د",
              "pos": "adj",
              "gloss": "intense, severe"
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
              "surface": "الْقِطَارِ",
              "lemma": "قطار",
              "features": "def.gen",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            }
          ]
        },
        {
          "id": "qr1-8-033",
          "page": 51,
          "ar": "وَجَاءَ الْبَاعَةُ وَجَعَلَ النَّاسُ يَشْتَرُوْنَ وَيَأْكُلُوْنَ.",
          "en": "The vendors came, and the people began buying and eating.",
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
              "surface": "الْبَاعَةُ",
              "lemma": "بائع",
              "features": "pl.def.nom",
              "root": "ب ي ع",
              "pos": "noun",
              "gloss": "vendor, seller"
            },
            {
              "surface": "وَجَعَلَ",
              "lemma": "جعل",
              "features": "conj+perf.3ms",
              "root": "ج ع ل",
              "pos": "verb",
              "gloss": "to begin (doing); to make"
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
              "surface": "يَشْتَرُوْنَ",
              "lemma": "اشترى",
              "features": "impf.3mp",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            },
            {
              "surface": "وَيَأْكُلُوْنَ",
              "lemma": "أكل",
              "features": "conj+impf.3mp",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            }
          ]
        },
        {
          "id": "qr1-8-034",
          "page": 51,
          "ar": "وَاشْتَرَىٰ بَعْضُ النَّاسِ مِنَ الْبَاعَةِ هَدَايَا لِأَصْدِقَائِهِمْ وَأَقَارِبِهِمْ.",
          "en": "Some people bought gifts from the vendors for their friends and relatives.",
          "tokens": [
            {
              "surface": "وَاشْتَرَىٰ",
              "lemma": "اشترى",
              "features": "conj+perf.3ms",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            },
            {
              "surface": "بَعْضُ",
              "lemma": "بعض",
              "features": "nom.constr",
              "root": "ب ع ض",
              "pos": "noun",
              "gloss": "some"
            },
            {
              "surface": "النَّاسِ",
              "lemma": "ناس",
              "features": "def.gen",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
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
              "surface": "الْبَاعَةِ",
              "lemma": "بائع",
              "features": "pl.def.gen",
              "root": "ب ي ع",
              "pos": "noun",
              "gloss": "vendor, seller"
            },
            {
              "surface": "هَدَايَا",
              "lemma": "هدية",
              "features": "pl.indef.acc",
              "root": "ه د ي",
              "pos": "noun",
              "gloss": "gift"
            },
            {
              "surface": "لِأَصْدِقَائِهِمْ",
              "lemma": "صديق",
              "features": "prep+pl.gen+3mp",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            },
            {
              "surface": "وَأَقَارِبِهِمْ",
              "lemma": "قريب",
              "features": "conj+pl.gen+3mp",
              "root": "ق ر ب",
              "pos": "noun",
              "gloss": "relative, kinsman"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلَ بَعْضُ النَّاسِ فِي الْقِطَارِ؟",
          "options": [
            "اشْتَرَوْا هَدَايَا لِأَصْدِقَائِهِمْ وَأَقَارِبِهِمْ",
            "نَامُوا طُوَالَ الطَّرِيْقِ",
            "لَمْ يَفْعَلُوا شَيْئاً"
          ],
          "answer": 0,
          "qEn": "What did some of the people on the train do?",
          "optionsEn": [
            "They bought gifts for their friends and relatives",
            "They slept the whole way",
            "They did nothing"
          ]
        }
      ]
    },
    {
      "id": "p7",
      "en": "After a little while the conductor whistled and waved the green flag, so the people hurried and boarded the train; the locomotive moved, and the train set off. A ticket-inspector entered our carriage, punched our tickets, and returned them to us.",
      "sentences": [
        {
          "id": "qr1-8-035",
          "page": 51,
          "ar": "وَبَعْدَ قَلِيْلٍ صَفَرَ أَمِيْنُ الْقِطَارِ وَهَزَّ الْعَلَمَ الْأَخْضَرَ.",
          "en": "After a little while the conductor whistled and waved the green flag.",
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
              "surface": "قَلِيْلٍ",
              "lemma": "قليل",
              "features": "indef.gen",
              "root": "ق ل ل",
              "pos": "adj",
              "gloss": "a little, few"
            },
            {
              "surface": "صَفَرَ",
              "lemma": "صفر",
              "features": "perf.3ms",
              "root": "ص ف ر",
              "pos": "verb",
              "gloss": "to whistle"
            },
            {
              "surface": "أَمِيْنُ",
              "lemma": "أمين",
              "features": "nom.constr",
              "root": "أ م ن",
              "pos": "noun",
              "gloss": "conductor, guard (lit. trustworthy one)"
            },
            {
              "surface": "الْقِطَارِ",
              "lemma": "قطار",
              "features": "def.gen",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            },
            {
              "surface": "وَهَزَّ",
              "lemma": "هز",
              "features": "conj+perf.3ms",
              "root": "ه ز ز",
              "pos": "verb",
              "gloss": "to wave, shake"
            },
            {
              "surface": "الْعَلَمَ",
              "lemma": "علم-راية",
              "features": "def.acc",
              "root": "ع ل م",
              "pos": "noun",
              "gloss": "flag"
            },
            {
              "surface": "الْأَخْضَرَ",
              "lemma": "أخضر",
              "features": "def.acc",
              "root": "خ ض ر",
              "pos": "adj",
              "gloss": "green"
            }
          ]
        },
        {
          "id": "qr1-8-036",
          "page": 51,
          "ar": "فَأَسْرَعَ النَّاسُ وَدَخَلُوْا فِي الْقِطَارِ.",
          "en": "So the people hurried and boarded the train.",
          "tokens": [
            {
              "surface": "فَأَسْرَعَ",
              "lemma": "أسرع",
              "features": "conj+perf.3ms",
              "root": "س ر ع",
              "pos": "verb",
              "gloss": "to hurry"
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
              "surface": "وَدَخَلُوْا",
              "lemma": "دخل",
              "features": "conj+perf.3mp",
              "root": "د خ ل",
              "pos": "verb",
              "gloss": "to enter"
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
              "surface": "الْقِطَارِ",
              "lemma": "قطار",
              "features": "def.gen",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            }
          ]
        },
        {
          "id": "qr1-8-037",
          "page": 51,
          "ar": "وَتَحَرَّكَتِ الْقَاطِرَةُ وَسَارَ الْقِطَارُ.",
          "en": "The locomotive moved, and the train set off.",
          "tokens": [
            {
              "surface": "وَتَحَرَّكَتِ",
              "lemma": "تحرك",
              "features": "conj+perf.3fs",
              "root": "ح ر ك",
              "pos": "verb",
              "gloss": "to move"
            },
            {
              "surface": "الْقَاطِرَةُ",
              "lemma": "قاطرة",
              "features": "def.nom",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "locomotive, engine"
            },
            {
              "surface": "وَسَارَ",
              "lemma": "سار",
              "features": "conj+perf.3ms",
              "root": "س ي ر",
              "pos": "verb",
              "gloss": "to travel, set off, move along"
            },
            {
              "surface": "الْقِطَارُ",
              "lemma": "قطار",
              "features": "def.nom",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            }
          ]
        },
        {
          "id": "qr1-8-038",
          "page": 51,
          "ar": "وَدَخَلَ نَقَّابٌ فِيْ عَرَبَتِنَا فَنَقَّبَ تَذَاكِرَنَا وَرَدَّهَا إِلَيْنَا.",
          "en": "A ticket-inspector entered our carriage, punched our tickets, and returned them to us.",
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
              "surface": "نَقَّابٌ",
              "lemma": "نقاب",
              "features": "indef.nom",
              "root": "ن ق ب",
              "pos": "noun",
              "gloss": "ticket inspector"
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
              "surface": "عَرَبَتِنَا",
              "lemma": "عربة",
              "features": "gen+1p",
              "root": "ع ر ب",
              "pos": "noun",
              "gloss": "carriage, train-car"
            },
            {
              "surface": "فَنَقَّبَ",
              "lemma": "نقب",
              "features": "conj+perf.3ms",
              "root": "ن ق ب",
              "pos": "verb",
              "gloss": "to punch, inspect (tickets)"
            },
            {
              "surface": "تَذَاكِرَنَا",
              "lemma": "تذكرة",
              "features": "pl.acc+1p",
              "root": "ذ ك ر",
              "pos": "noun",
              "gloss": "ticket"
            },
            {
              "surface": "وَرَدَّهَا",
              "lemma": "رد",
              "features": "conj+perf.3ms+3fs",
              "root": "ر د د",
              "pos": "verb",
              "gloss": "to return, give back (something)"
            },
            {
              "surface": "إِلَيْنَا",
              "lemma": "إلى",
              "features": "prep+1p",
              "root": "",
              "pos": "prep",
              "gloss": "to, towards"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلَ أَمِيْنُ الْقِطَارِ قَبْلَ أَنْ يَتَحَرَّكَ؟",
          "options": [
            "صَفَرَ وَهَزَّ الْعَلَمَ الْأَخْضَرَ",
            "نَادَى النَّاسَ بِاسْمِهِمْ",
            "أَغْلَقَ الْمَحَطَّةَ"
          ],
          "answer": 0,
          "qEn": "What did the conductor do before the train moved?",
          "optionsEn": [
            "He whistled and waved the green flag",
            "He called the people by name",
            "He closed the station"
          ]
        },
        {
          "q": "مَاذَا فَعَلَ النَّقَّابُ فِي الْعَرَبَةِ؟",
          "options": [
            "نَقَّبَ تَذَاكِرَهُمْ وَرَدَّهَا إِلَيْهِمْ",
            "بَاعَ تَذَاكِرَ جَدِيْدَةً",
            "أَخَذَ تَذَاكِرَهُمْ وَلَمْ يَرُدَّهَا"
          ],
          "answer": 0,
          "qEn": "What did the ticket-inspector do in the carriage?",
          "optionsEn": [
            "He punched their tickets and returned them",
            "He sold new tickets",
            "He took their tickets and did not return them"
          ]
        }
      ]
    },
    {
      "id": "p8",
      "en": "On the way we lunched on the provisions, ate, drank, and praised Allah. The train kept stopping at the stations and moving on, until the time of Ẓuhr arrived, so we quickly made wuḍūʾ at a station and prayed the traveler's prayer -- we prayed Ẓuhr two rakʿahs and gave the salām. Then the conductor whistled, and we boarded quickly.",
      "sentences": [
        {
          "id": "qr1-8-039",
          "page": 51,
          "ar": "وَفِي الطَّرِيْقِ تَغَدَّيْنَا بِالزَّادِ وَأَكَلْنَا وَشَرِبْنَا وَحَمِدْنَا اللهَ.",
          "en": "On the way we lunched on the provisions, ate, drank, and praised Allah.",
          "tokens": [
            {
              "surface": "وَفِي",
              "lemma": "في",
              "features": "conj+prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "الطَّرِيْقِ",
              "lemma": "طريق",
              "features": "def.gen",
              "root": "ط ر ق",
              "pos": "noun",
              "gloss": "road, way"
            },
            {
              "surface": "تَغَدَّيْنَا",
              "lemma": "تغدى",
              "features": "perf.1p",
              "root": "غ د و",
              "pos": "verb",
              "gloss": "to have lunch"
            },
            {
              "surface": "بِالزَّادِ",
              "lemma": "زاد",
              "features": "prep+def.gen",
              "root": "ز و د",
              "pos": "noun",
              "gloss": "provisions (for a journey)"
            },
            {
              "surface": "وَأَكَلْنَا",
              "lemma": "أكل",
              "features": "conj+perf.1p",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            },
            {
              "surface": "وَشَرِبْنَا",
              "lemma": "شرب",
              "features": "conj+perf.1p",
              "root": "ش ر ب",
              "pos": "verb",
              "gloss": "to drink"
            },
            {
              "surface": "وَحَمِدْنَا",
              "lemma": "حمد",
              "features": "conj+perf.1p",
              "root": "ح م د",
              "pos": "verb",
              "gloss": "to praise, thank"
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
          "id": "qr1-8-040",
          "page": 51,
          "ar": "وَلَمْ يَزَلْ يَقِفُ الْقِطَارُ عَلَى الْمَحَطَّاتِ وَيَسِيْرُ حَتَّىٰ وَصَلَ وَقْتُ الظُّهْرِ.",
          "en": "The train kept stopping at the stations and moving on, until the time of Ẓuhr arrived.",
          "tokens": [
            {
              "surface": "وَلَمْ",
              "lemma": "لم",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not (negates the past)"
            },
            {
              "surface": "يَزَلْ",
              "lemma": "زال",
              "features": "impf.3ms",
              "root": "ز ي ل",
              "pos": "verb",
              "gloss": "to cease, stop (being)"
            },
            {
              "surface": "يَقِفُ",
              "lemma": "وقف",
              "features": "impf.3ms",
              "root": "و ق ف",
              "pos": "verb",
              "gloss": "to stop, stand"
            },
            {
              "surface": "الْقِطَارُ",
              "lemma": "قطار",
              "features": "def.nom",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            },
            {
              "surface": "عَلَى",
              "lemma": "على",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, to"
            },
            {
              "surface": "الْمَحَطَّاتِ",
              "lemma": "محطات",
              "features": "pl.def.gen",
              "root": "ح ط ط",
              "pos": "noun",
              "gloss": "stations"
            },
            {
              "surface": "وَيَسِيْرُ",
              "lemma": "سار",
              "features": "conj+impf.3ms",
              "root": "س ي ر",
              "pos": "verb",
              "gloss": "to travel, set off, move along"
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
              "surface": "وَصَلَ",
              "lemma": "وصل",
              "features": "perf.3ms",
              "root": "و ص ل",
              "pos": "verb",
              "gloss": "to arrive"
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
              "gloss": "Ẓuhr, noon"
            }
          ]
        },
        {
          "id": "qr1-8-041",
          "page": 51,
          "ar": "فَتَوَضَّأْنَا بِسُرْعَةٍ عَلَىٰ مَحَطَّةٍ وَصَلَّيْنَا صَلَاةَ السَّفَرِ.",
          "en": "So we quickly made wuḍūʾ at a station and prayed the traveler's prayer.",
          "tokens": [
            {
              "surface": "فَتَوَضَّأْنَا",
              "lemma": "توضأ",
              "features": "conj+perf.1p",
              "root": "و ض أ",
              "pos": "verb",
              "gloss": "to make ablution (wuḍūʾ)"
            },
            {
              "surface": "بِسُرْعَةٍ",
              "lemma": "سرعة",
              "features": "prep+indef.gen",
              "root": "س ر ع",
              "pos": "noun",
              "gloss": "speed, quickness"
            },
            {
              "surface": "عَلَىٰ",
              "lemma": "على",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, to"
            },
            {
              "surface": "مَحَطَّةٍ",
              "lemma": "محطة",
              "features": "indef.gen",
              "root": "ح ط ط",
              "pos": "noun",
              "gloss": "station"
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
              "surface": "صَلَاةَ",
              "lemma": "صلاة",
              "features": "acc.constr",
              "root": "ص ل و",
              "pos": "noun",
              "gloss": "prayer"
            },
            {
              "surface": "السَّفَرِ",
              "lemma": "سفر",
              "features": "def.gen",
              "root": "س ف ر",
              "pos": "noun",
              "gloss": "travel, journey"
            }
          ]
        },
        {
          "id": "qr1-8-042",
          "page": 51,
          "ar": "صَلَّيْنَا الظُّهْرَ رَكْعَتَيْنِ وَسَلَّمْنَا.",
          "en": "We prayed Ẓuhr two rakʿahs and gave the salām.",
          "tokens": [
            {
              "surface": "صَلَّيْنَا",
              "lemma": "صلى",
              "features": "perf.1p",
              "root": "ص ل و",
              "pos": "verb",
              "gloss": "to pray"
            },
            {
              "surface": "الظُّهْرَ",
              "lemma": "ظهر",
              "features": "def.acc",
              "root": "ظ ه ر",
              "pos": "noun",
              "gloss": "Ẓuhr, noon"
            },
            {
              "surface": "رَكْعَتَيْنِ",
              "lemma": "ركعة",
              "features": "indef.acc.du",
              "root": "ر ك ع",
              "pos": "noun",
              "gloss": "rakʿah (unit of prayer)"
            },
            {
              "surface": "وَسَلَّمْنَا",
              "lemma": "سلم",
              "features": "conj+perf.1p",
              "root": "س ل م",
              "pos": "verb",
              "gloss": "to greet; to give the closing salām (of prayer)"
            }
          ]
        },
        {
          "id": "qr1-8-043",
          "page": 51,
          "ar": "وَصَفَرَ أَمِيْنُ الْقِطَارِ فَرَكِبْنَا سَرِيْعاً.",
          "en": "Then the conductor whistled, and we boarded quickly.",
          "tokens": [
            {
              "surface": "وَصَفَرَ",
              "lemma": "صفر",
              "features": "conj+perf.3ms",
              "root": "ص ف ر",
              "pos": "verb",
              "gloss": "to whistle"
            },
            {
              "surface": "أَمِيْنُ",
              "lemma": "أمين",
              "features": "nom.constr",
              "root": "أ م ن",
              "pos": "noun",
              "gloss": "conductor, guard (lit. trustworthy one)"
            },
            {
              "surface": "الْقِطَارِ",
              "lemma": "قطار",
              "features": "def.gen",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            },
            {
              "surface": "فَرَكِبْنَا",
              "lemma": "ركب",
              "features": "conj+perf.1p",
              "root": "ر ك ب",
              "pos": "verb",
              "gloss": "to ride, board"
            },
            {
              "surface": "سَرِيْعاً",
              "lemma": "سريع",
              "features": "indef.acc",
              "root": "س ر ع",
              "pos": "adj",
              "gloss": "fast, quick"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَمْ رَكْعَةً صَلَّىٰ الرَّاوِيْ وَأَهْلُهُ صَلَاةَ الظُّهْرِ فِي السَّفَرِ؟",
          "options": [
            "رَكْعَتَيْنِ",
            "أَرْبَعَ رَكَعَاتٍ",
            "رَكْعَةً وَاحِدَةً"
          ],
          "answer": 0,
          "qEn": "How many rakʿahs did the narrator and his family pray for Ẓuhr while traveling?",
          "optionsEn": [
            "Two rakʿahs",
            "Four rakʿahs",
            "One rakʿah"
          ]
        },
        {
          "q": "مَاذَا فَعَلُوا فِي الطَّرِيْقِ قَبْلَ صَلَاةِ الظُّهْرِ؟",
          "options": [
            "تَغَدَّوْا بِالزَّادِ وَأَكَلُوا وَشَرِبُوا",
            "نَامُوا",
            "لَعِبُوا"
          ],
          "answer": 0,
          "qEn": "What did they do on the way before the Ẓuhr prayer?",
          "optionsEn": [
            "They lunched on the provisions, ate, and drank",
            "They slept",
            "They played"
          ]
        }
      ]
    },
    {
      "id": "p9",
      "en": "My uncle said: \"If the train belonged to the Muslims, there would be a place in it for wuḍūʾ and prayer -- we would call the adhān in it and pray in congregation.\"",
      "sentences": [
        {
          "id": "qr1-8-044",
          "page": 52,
          "ar": "وَقَالَ عَمِّيْ: لَوْ كَانَ الْقِطَارُ لِلْمُسْلِمِيْنَ لَكَانَ فِيْهِ مَكَانٌ لِلْوُضُوءِ وَالصَّلَاةِ.",
          "en": "My uncle said: \"If the train belonged to the Muslims, there would be a place in it for wuḍūʾ and prayer.\"",
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
              "surface": "عَمِّيْ",
              "lemma": "عم",
              "features": "nom+1s",
              "root": "ع م م",
              "pos": "noun",
              "gloss": "paternal uncle"
            },
            {
              "surface": "لَوْ",
              "lemma": "لو",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "if (hypothetical)"
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
              "surface": "الْقِطَارُ",
              "lemma": "قطار",
              "features": "def.nom",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
            },
            {
              "surface": "لِلْمُسْلِمِيْنَ",
              "lemma": "مسلم",
              "features": "prep+pl.def.gen",
              "root": "س ل م",
              "pos": "noun",
              "gloss": "Muslim"
            },
            {
              "surface": "لَكَانَ",
              "lemma": "كان",
              "features": "part+perf.3ms",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
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
              "surface": "مَكَانٌ",
              "lemma": "مكان",
              "features": "indef.nom",
              "root": "ك و ن",
              "pos": "noun",
              "gloss": "place"
            },
            {
              "surface": "لِلْوُضُوءِ",
              "lemma": "وضوء",
              "features": "prep+def.gen",
              "root": "و ض أ",
              "pos": "noun",
              "gloss": "ablution (wuḍūʾ)"
            },
            {
              "surface": "وَالصَّلَاةِ",
              "lemma": "صلاة",
              "features": "conj+def.gen",
              "root": "ص ل و",
              "pos": "noun",
              "gloss": "prayer"
            }
          ]
        },
        {
          "id": "qr1-8-045",
          "page": 52,
          "ar": "نُؤَذِّنُ فِيْهِ وَنُصَلِّيْ جَمَاعَةً.",
          "en": "We would call the adhān in it and pray in congregation.",
          "tokens": [
            {
              "surface": "نُؤَذِّنُ",
              "lemma": "أذن",
              "features": "impf.1p",
              "root": "أ ذ ن",
              "pos": "verb",
              "gloss": "to call the adhān"
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
              "surface": "وَنُصَلِّيْ",
              "lemma": "صلى",
              "features": "conj+impf.1p",
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
              "gloss": "congregation, group"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا قَالَ عَمُّ الرَّاوِيْ عَنِ الْقِطَارِ؟",
          "options": [
            "لَوْ كَانَ لِلْمُسْلِمِيْنَ لَكَانَ فِيْهِ مَكَانٌ لِلْوُضُوءِ وَالصَّلَاةِ",
            "قَالَ إِنَّهُ سَرِيْعٌ جِدّاً",
            "قَالَ إِنَّهُ رَخِيْصٌ"
          ],
          "answer": 0,
          "qEn": "What did the narrator's uncle say about the train?",
          "optionsEn": [
            "If it belonged to the Muslims, there would be a place in it for wuḍūʾ and prayer",
            "He said it was very fast",
            "He said it was cheap"
          ]
        }
      ]
    },
    {
      "id": "p10",
      "en": "In the afternoon the train reached our station. I was looking out from the window, and I saw Hāshim and Saʿīd on the platform; I recognized them both, greeted them, and they greeted me.",
      "sentences": [
        {
          "id": "qr1-8-046",
          "page": 52,
          "ar": "وَفِي الْعَصْرِ وَصَلَ الْقِطَارُ إِلَىٰ مَحَطَّتِنَا.",
          "en": "In the afternoon the train reached our station.",
          "tokens": [
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
              "surface": "وَصَلَ",
              "lemma": "وصل",
              "features": "perf.3ms",
              "root": "و ص ل",
              "pos": "verb",
              "gloss": "to arrive"
            },
            {
              "surface": "الْقِطَارُ",
              "lemma": "قطار",
              "features": "def.nom",
              "root": "ق ط ر",
              "pos": "noun",
              "gloss": "train"
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
              "surface": "مَحَطَّتِنَا",
              "lemma": "محطة",
              "features": "gen+1p",
              "root": "ح ط ط",
              "pos": "noun",
              "gloss": "station"
            }
          ]
        },
        {
          "id": "qr1-8-047",
          "page": 52,
          "ar": "وَكُنْتُ أُطِلُّ مِنَ النَّافِذَةِ فَرَأَيْتُ هَاشِماً وَسَعِيْداً عَلَى الرَّصِيْفِ.",
          "en": "I was looking out from the window, and I saw Hāshim and Saʿīd on the platform.",
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
              "surface": "أُطِلُّ",
              "lemma": "أطل",
              "features": "impf.1s",
              "root": "ط ل ل",
              "pos": "verb",
              "gloss": "to look out, overlook"
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
              "surface": "النَّافِذَةِ",
              "lemma": "نافذة",
              "features": "def.gen",
              "root": "ن ف ذ",
              "pos": "noun",
              "gloss": "window"
            },
            {
              "surface": "فَرَأَيْتُ",
              "lemma": "رأى",
              "features": "conj+perf.1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "هَاشِماً",
              "lemma": "هاشم",
              "features": "proper.acc",
              "root": "",
              "pos": "proper",
              "gloss": "Hāshim (a name)"
            },
            {
              "surface": "وَسَعِيْداً",
              "lemma": "سعيد",
              "features": "conj+proper.acc",
              "root": "",
              "pos": "proper",
              "gloss": "Saʿīd (a name)"
            },
            {
              "surface": "عَلَى",
              "lemma": "على",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, to"
            },
            {
              "surface": "الرَّصِيْفِ",
              "lemma": "رصيف",
              "features": "def.gen",
              "root": "ر ص ف",
              "pos": "noun",
              "gloss": "platform"
            }
          ]
        },
        {
          "id": "qr1-8-048",
          "page": 52,
          "ar": "وَعَرَفْتُهُمَا وَسَلَّمْتُ عَلَيْهِمَا وَسَلَّمَا عَلَيَّ.",
          "en": "I recognized them both, greeted them, and they greeted me.",
          "tokens": [
            {
              "surface": "وَعَرَفْتُهُمَا",
              "lemma": "عرف",
              "features": "conj+perf.1s+3d",
              "root": "ع ر ف",
              "pos": "verb",
              "gloss": "to know, recognize"
            },
            {
              "surface": "وَسَلَّمْتُ",
              "lemma": "سلم",
              "features": "conj+perf.1s",
              "root": "س ل م",
              "pos": "verb",
              "gloss": "to greet; to give the closing salām (of prayer)"
            },
            {
              "surface": "عَلَيْهِمَا",
              "lemma": "على",
              "features": "prep+3d",
              "root": "",
              "pos": "prep",
              "gloss": "upon, to"
            },
            {
              "surface": "وَسَلَّمَا",
              "lemma": "سلم",
              "features": "conj+perf.3md",
              "root": "س ل م",
              "pos": "verb",
              "gloss": "to greet; to give the closing salām (of prayer)"
            },
            {
              "surface": "عَلَيَّ",
              "lemma": "على",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "upon, to"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَنْ رَأَىٰ الرَّاوِيْ عَلَى الرَّصِيْفِ حِيْنَ وَصَلَ الْقِطَارُ؟",
          "options": [
            "هَاشِماً وَسَعِيْداً",
            "أَبَاهُ وَعَمَّهُ",
            "لَا أَحَدَ"
          ],
          "answer": 0,
          "qEn": "Whom did the narrator see on the platform when the train arrived?",
          "optionsEn": [
            "Hāshim and Saʿīd",
            "His father and his uncle",
            "No one"
          ]
        }
      ]
    },
    {
      "id": "p11",
      "en": "I arrived at my village and met my friends and companions, and I began telling them about the city, informing them of its wonders, and recounting to them what I had seen on the journey.",
      "sentences": [
        {
          "id": "qr1-8-049",
          "page": 52,
          "ar": "وَوَصَلْتُ إِلَىٰ قَرْيَتِيْ وَقَابَلْتُ أَصْدِقَائِيْ وَإِخْوَانِيْ.",
          "en": "I arrived at my village and met my friends and companions.",
          "tokens": [
            {
              "surface": "وَوَصَلْتُ",
              "lemma": "وصل",
              "features": "conj+perf.1s",
              "root": "و ص ل",
              "pos": "verb",
              "gloss": "to arrive"
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
              "surface": "قَرْيَتِيْ",
              "lemma": "قرية",
              "features": "gen+1s",
              "root": "ق ر ي",
              "pos": "noun",
              "gloss": "village"
            },
            {
              "surface": "وَقَابَلْتُ",
              "lemma": "قابل",
              "features": "conj+perf.1s",
              "root": "ق ب ل",
              "pos": "verb",
              "gloss": "to meet"
            },
            {
              "surface": "أَصْدِقَائِيْ",
              "lemma": "صديق",
              "features": "pl.acc+1s",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            },
            {
              "surface": "وَإِخْوَانِيْ",
              "lemma": "أخ",
              "features": "conj+pl.acc+1s",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brother"
            }
          ]
        },
        {
          "id": "qr1-8-050",
          "page": 52,
          "ar": "وَجَعَلْتُ أُحَدِّثُهُمْ حَدِيْثَ الْبَلَدِ وَأُخْبِرُهُمْ بِعَجَائِبِهِ.",
          "en": "I began telling them about the city, and informing them of its wonders.",
          "tokens": [
            {
              "surface": "وَجَعَلْتُ",
              "lemma": "جعل",
              "features": "conj+perf.1s",
              "root": "ج ع ل",
              "pos": "verb",
              "gloss": "to begin (doing); to make"
            },
            {
              "surface": "أُحَدِّثُهُمْ",
              "lemma": "حدث",
              "features": "impf.1s+3mp",
              "root": "ح د ث",
              "pos": "verb",
              "gloss": "to tell, narrate"
            },
            {
              "surface": "حَدِيْثَ",
              "lemma": "حديث",
              "features": "acc.constr",
              "root": "ح د ث",
              "pos": "noun",
              "gloss": "talk, account"
            },
            {
              "surface": "الْبَلَدِ",
              "lemma": "بلد",
              "features": "def.gen",
              "root": "ب ل د",
              "pos": "noun",
              "gloss": "town, country, city"
            },
            {
              "surface": "وَأُخْبِرُهُمْ",
              "lemma": "أخبر",
              "features": "conj+impf.1s+3mp",
              "root": "خ ب ر",
              "pos": "verb",
              "gloss": "to inform"
            },
            {
              "surface": "بِعَجَائِبِهِ",
              "lemma": "عجيبة",
              "features": "prep+pl.gen+3ms",
              "root": "ع ج ب",
              "pos": "noun",
              "gloss": "wonder, marvel"
            }
          ]
        },
        {
          "id": "qr1-8-051",
          "page": 52,
          "ar": "وَأَحْكِيْ لَهُمْ مَا رَأَيْتُ فِي السَّفَرِ.",
          "en": "I also recounted to them what I had seen on the journey.",
          "tokens": [
            {
              "surface": "وَأَحْكِيْ",
              "lemma": "حكى",
              "features": "conj+impf.1s",
              "root": "ح ك ي",
              "pos": "verb",
              "gloss": "to recount, narrate"
            },
            {
              "surface": "لَهُمْ",
              "lemma": "لي",
              "features": "prep+3mp",
              "root": "",
              "pos": "prep",
              "gloss": "for, to"
            },
            {
              "surface": "مَا",
              "lemma": "ما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "what; that which"
            },
            {
              "surface": "رَأَيْتُ",
              "lemma": "رأى",
              "features": "perf.1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
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
              "surface": "السَّفَرِ",
              "lemma": "سفر",
              "features": "def.gen",
              "root": "س ف ر",
              "pos": "noun",
              "gloss": "travel, journey"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلَ الرَّاوِيْ حِيْنَ وَصَلَ إِلَىٰ قَرْيَتِهِ؟",
          "options": [
            "قَابَلَ أَصْدِقَاءَهُ وَحَدَّثَهُمْ عَنِ السَّفَرِ",
            "نَامَ مُبَاشَرَةً",
            "ذَهَبَ إِلَى الْمَدْرَسَةِ"
          ],
          "answer": 0,
          "qEn": "What did the narrator do when he arrived at his village?",
          "optionsEn": [
            "He met his friends and told them about the journey",
            "He went straight to sleep",
            "He went to school"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "لَا أَنْسَىٰ سَفَرِي الْأَوَّلَ، عَلِمْتُ أَنِّي",
        "post": "بُكْرَةً مَعَ أُمِّيْ",
        "en": "I learned I was traveling early with my mother.",
        "options": [
          "مُسَافِرٌ",
          "مُسَافِرَةٌ",
          "مُسَافِرُوْنَ",
          "مُسَافِرَاتٌ"
        ],
        "answer": 0,
        "rationales": [
          "masc. singular — matches the 1st-person masc. narrator.",
          "fem. singular — wrong gender.",
          "masc. plural — wrong number.",
          "fem. plural — wrong number and gender."
        ]
      },
      {
        "type": "cloze",
        "pre": "",
        "post": "تَذْكِرَتِيْ",
        "en": "Give me my ticket.",
        "options": [
          "أَعْطِنِيْ",
          "أَعْطِنَا",
          "أَعْطِهِ",
          "أُعْطِيْكَ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. singular imperative + object \"me\" — give me.",
          "imperative + object \"us\" — wrong object.",
          "imperative + object \"him\" — wrong object.",
          "1st singular indicative — wrong mood/person."
        ]
      },
      {
        "type": "cloze",
        "pre": "إِنَّكَ",
        "post": "تَذْكِرَتَكَ",
        "en": "You will lose your ticket.",
        "options": [
          "تُضَيِّعُ",
          "يُضَيِّعُ",
          "أُضَيِّعُ",
          "نُضَيِّعُ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. singular — you lose.",
          "3rd masc. singular — wrong person.",
          "1st singular — wrong person.",
          "1st plural — wrong person."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَ",
        "post": "الْحَمَّالُوْنَ الْحَوَائِجَ وَالْمَتَاعَ",
        "en": "The porters took the bags and belongings.",
        "options": [
          "أَخَذَ",
          "أَخَذَتْ",
          "أَخَذُوا",
          "تَأْخُذُ"
        ],
        "answer": 2,
        "rationales": [
          "3rd masc. singular — wrong number, subject is plural.",
          "3rd fem. singular — wrong gender and number.",
          "perfect, 3rd masc. plural — they took, matching الحمّالون.",
          "imperfect — wrong tense."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَ",
        "post": "زِحَاماً شَدِيْداً",
        "en": "We saw an intense crowd.",
        "options": [
          "رَأَيْنَا",
          "رَأَيْتُ",
          "رَأَوْا",
          "رَأَتْ"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 1st plural — we saw.",
          "1st singular — wrong number.",
          "3rd masc. plural — wrong person.",
          "3rd fem. singular — wrong person."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَبَعْدَ قَلِيْلٍ",
        "post": "أَمِيْنُ الْقِطَارِ وَهَزَّ الْعَلَمَ الْأَخْضَرَ",
        "en": "The conductor whistled and waved the green flag.",
        "options": [
          "صَفَرَ",
          "صَفَرَتْ",
          "صَفَرُوا",
          "يَصْفِرُ"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 3rd masc. singular — he whistled.",
          "3rd fem. singular — wrong gender.",
          "3rd masc. plural — wrong number.",
          "imperfect — wrong tense."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَ",
        "post": "النَّاسُ وَدَخَلُوْا فِي الْقِطَارِ",
        "en": "So the people hurried and boarded the train.",
        "options": [
          "أَسْرَعَ",
          "أَسْرَعَتْ",
          "أَسْرَعُوا",
          "تُسْرِعُ"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 3rd masc. singular — agrees with النَّاسُ as a collective singular noun.",
          "3rd fem. singular — wrong gender.",
          "3rd masc. plural — النَّاسُ takes singular verb agreement here.",
          "imperfect — wrong tense."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَدَخَلَ نَقَّابٌ فِيْ عَرَبَتِنَا فَ",
        "post": "تَذَاكِرَنَا وَرَدَّهَا إِلَيْنَا",
        "en": "A ticket-inspector entered our carriage, punched our tickets, and returned them to us.",
        "options": [
          "نَقَّبَ",
          "نَقَّبَتْ",
          "نَقَّبُوا",
          "يُنَقِّبُ"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 3rd masc. singular — he punched.",
          "3rd fem. singular — wrong gender.",
          "3rd masc. plural — wrong number.",
          "imperfect — wrong tense."
        ]
      },
      {
        "type": "cloze",
        "pre": "صَلَّيْنَا الظُّهْرَ رَكْعَتَيْنِ وَ",
        "post": "",
        "en": "We prayed Ẓuhr two rakʿahs and gave the salām.",
        "options": [
          "سَلَّمْنَا",
          "سَلَّمْتُ",
          "سَلَّمُوا",
          "سَلَّمَتْ"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 1st plural — we gave the salām.",
          "1st singular — wrong number.",
          "3rd masc. plural — wrong person.",
          "3rd fem. singular — wrong person."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَجَعَلْتُ",
        "post": "حَدِيْثَ الْبَلَدِ وَأُخْبِرُهُمْ بِعَجَائِبِهِ",
        "en": "I began telling them about the city, and informing them of its wonders.",
        "options": [
          "أُحَدِّثُهُمْ",
          "أُحَدِّثُهُ",
          "يُحَدِّثُهُمْ",
          "نُحَدِّثُهُمْ"
        ],
        "answer": 0,
        "rationales": [
          "1st singular + object \"them\" — I tell them.",
          "1st singular + object \"him\" — wrong object.",
          "3rd masc. singular — wrong person.",
          "1st plural — wrong number."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "اسْتَيْقَظْتُ قَبْلَ السَّحَرِ",
        "pre": "",
        "post": "قَبْلَ السَّحَرِ",
        "targetPerson": "هُمْ",
        "targetEn": "they (m.)",
        "options": [
          "اسْتَيْقَظُوا",
          "اسْتَيْقَظَ",
          "اسْتَيْقَظَتْ",
          "اسْتَيْقَظْنَا"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 3rd masc. plural — they woke up.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "جَاءَ عَمِّيْ",
        "pre": "",
        "post": "عَمِّيْ",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "جَاءَتْ",
          "جَاءَ",
          "جَاءُوا",
          "جِئْتُ"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 3rd feminine singular — she came.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَصَلْنَا إِلَى الْمَحَطَّةِ",
        "pre": "",
        "post": "إِلَى الْمَحَطَّةِ",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "وَصَلْتُ",
          "وَصَلْنَا",
          "وَصَلَ",
          "وَصَلَتْ"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 1st singular — I arrived.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "اشْتَرَىٰ تَذَاكِرَ الْقِطَارِ",
        "pre": "",
        "post": "تَذَاكِرَ الْقِطَارِ",
        "targetPerson": "أَنْتِ",
        "targetEn": "you (f. sg.)",
        "options": [
          "اشْتَرَيْتِ",
          "اشْتَرَىٰ",
          "اشْتَرَيْتُ",
          "اشْتَرَوْا"
        ],
        "answer": 0,
        "rationales": [
          "2nd feminine singular — you bought.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "رَكِبَ الْقِطَارَ",
        "pre": "",
        "post": "الْقِطَارَ",
        "targetPerson": "نَحْنُ",
        "targetEn": "we",
        "options": [
          "رَكِبْنَا",
          "رَكِبَ",
          "رَكِبْتَ",
          "رَكِبُوا"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 1st plural — we boarded.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "دَخَلُوْا فِي الْقِطَارِ",
        "pre": "",
        "post": "فِي الْقِطَارِ",
        "targetPerson": "هُوَ",
        "targetEn": "he",
        "options": [
          "دَخَلَ",
          "دَخَلُوا",
          "دَخَلَتْ",
          "دَخَلْتُ"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 3rd masc. singular — he entered.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "تَوَضَّأْنَا بِسُرْعَةٍ",
        "pre": "",
        "post": "بِسُرْعَةٍ",
        "targetPerson": "أَنْتُمْ",
        "targetEn": "you (m. pl.)",
        "options": [
          "تَوَضَّأْتُمْ",
          "تَوَضَّأْنَا",
          "تَوَضَّأَ",
          "تَوَضَّأَتْ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. plural — you made wuḍūʾ.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَصَلَ الْقِطَارُ إِلَىٰ مَحَطَّتِنَا",
        "pre": "",
        "post": "إِلَىٰ مَحَطَّتِنَا",
        "targetPerson": "هُمَا",
        "targetEn": "they (m. du.)",
        "options": [
          "وَصَلَا",
          "وَصَلَ",
          "وَصَلُوا",
          "وَصَلَتَا"
        ],
        "answer": 0,
        "rationales": [
          "perfect, 3rd masc. dual — they-two arrived.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};
